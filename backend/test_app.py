import os
import tempfile

# Use an isolated SQLite db and a known admin password before importing the app.
os.environ["DATABASE_URL"] = "sqlite:///" + os.path.join(tempfile.mkdtemp(), "test.db")
os.environ["ADMIN_PASSWORD"] = "testpass"
os.environ["SECRET_KEY"] = "test-secret"

import pytest
from app import app as flask_app


@pytest.fixture
def client():
    flask_app.config["TESTING"] = True
    return flask_app.test_client()


@pytest.fixture
def admin(client):
    r = client.post("/api/admin/login", json={"password": "testpass"})
    assert r.status_code == 200
    return client


# --- catalog / reviews ------------------------------------------------------

def test_products_seeded(client):
    d = client.get("/api/products").get_json()
    assert len(d) == 24
    p1 = next(p for p in d if p["id"] == 1)
    assert p1["origPrice"] == 99990 and p1["desc"] and len(p1["reviews"]) == 3


def test_add_review_and_validation(client):
    before = len(next(p for p in client.get("/api/products").get_json() if p["id"] == 1)["reviews"])
    r = client.post("/api/products/1/reviews", json={"user": "T", "rating": 5, "comment": "Nice"})
    assert r.status_code == 201
    after = len(next(p for p in client.get("/api/products").get_json() if p["id"] == 1)["reviews"])
    assert after == before + 1
    assert client.post("/api/products/1/reviews", json={"user": "", "rating": 9, "comment": ""}).status_code == 400
    assert client.post("/api/products/999/reviews", json={"user": "x", "rating": 5, "comment": "y"}).status_code == 404


# --- cart / wishlist / orders ----------------------------------------------

def test_cart_and_isolation():
    a = flask_app.test_client()
    b = flask_app.test_client()
    a.put("/api/cart", json=[{"id": 3, "qty": 2}])
    assert a.get("/api/cart").get_json() == [{"id": 3, "qty": 2}]
    assert b.get("/api/cart").get_json() == []  # separate session
    a.put("/api/cart", json=[{"id": 3, "qty": 5}])
    assert a.get("/api/cart").get_json() == [{"id": 3, "qty": 5}]


def test_orders_upsert():
    c = flask_app.test_client()
    c.put("/api/orders", json=[{"id": 999001, "items": [], "total": 100, "status": "Processing", "cancelled": False}])
    assert len(c.get("/api/orders").get_json()) == 1
    c.put("/api/orders", json=[{"id": 999001, "items": [], "total": 100, "status": "Cancelled", "cancelled": True}])
    o = c.get("/api/orders").get_json()
    assert len(o) == 1 and o[0]["cancelled"] is True


# --- checkout (server-authoritative) ---------------------------------------

def test_checkout_computes_total_and_decrements_stock():
    c = flask_app.test_client()
    p = next(x for x in c.get("/api/products").get_json() if x["id"] == 3)
    stock_before = p["stock"]
    r = c.post("/api/checkout", json={"items": [{"id": 3, "qty": 2}], "delivery_method": "delivery"})
    assert r.status_code == 201
    body = r.get_json()
    # subtotal = price*2 + delivery fee 49, no discounts at qty 2
    assert body["pricing"]["total"] == round(p["price"] * 2 + 49, 2)
    assert body["order"]["total"] == body["pricing"]["total"]
    after = next(x for x in c.get("/api/products").get_json() if x["id"] == 3)["stock"]
    assert after == stock_before - 2
    # order recorded for this session, cart cleared
    assert len(c.get("/api/orders").get_json()) == 1
    assert c.get("/api/cart").get_json() == []


def test_checkout_ignores_client_price_and_applies_coupon():
    c = flask_app.test_client()
    p = next(x for x in c.get("/api/products").get_json() if x["id"] == 4)
    # client tries to send a bogus total — server must ignore it
    r = c.post("/api/checkout", json={"items": [{"id": 4, "qty": 1}], "total": 1,
                                      "delivery_method": "pickup", "coupon": "SAVE10"})
    body = r.get_json()
    expected = round(p["price"] * 0.9, 2)  # 10% off, pickup = no delivery fee
    assert body["order"]["total"] == expected


def test_checkout_rejects_insufficient_stock():
    c = flask_app.test_client()
    p = next(x for x in c.get("/api/products").get_json() if x["id"] == 2)
    r = c.post("/api/checkout", json={"items": [{"id": 2, "qty": p["stock"] + 5}]})
    assert r.status_code == 409
    assert r.get_json()["error"] == "insufficient stock"
    # stock unchanged
    assert next(x for x in c.get("/api/products").get_json() if x["id"] == 2)["stock"] == p["stock"]


# --- admin ------------------------------------------------------------------

def test_admin_requires_login(client):
    assert client.get("/api/admin/orders").status_code == 401
    assert client.post("/api/admin/products", json={"name": "x", "category": "home"}).status_code == 401


def test_admin_login_wrong_password(client):
    assert client.post("/api/admin/login", json={"password": "nope"}).status_code == 401


def test_admin_product_crud(admin):
    r = admin.post("/api/admin/products", json={"name": "Test Widget", "category": "home", "price": 123, "stock": 7})
    assert r.status_code == 201
    pid = r.get_json()["product"]["id"]
    assert admin.put(f"/api/admin/products/{pid}", json={"stock": 99, "price": 150}).status_code == 200
    got = next(x for x in admin.get("/api/products").get_json() if x["id"] == pid)
    assert got["stock"] == 99 and got["price"] == 150
    assert admin.delete(f"/api/admin/products/{pid}").status_code == 200
    assert all(x["id"] != pid for x in admin.get("/api/products").get_json())


def test_admin_update_order_status(admin):
    admin.put("/api/orders", json=[{"id": 777001, "items": [], "total": 50, "status": "Processing", "cancelled": False}])
    r = admin.patch("/api/admin/orders/777001", json={"status": "Shipped"})
    assert r.status_code == 200 and r.get_json()["order"]["status"] == "Shipped"
    assert admin.patch("/api/admin/orders/777001", json={"status": "Bogus"}).status_code == 400
