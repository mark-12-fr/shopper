"""Shopper Flask backend.

Serves a JSON API for the catalog, reviews, and each visitor's cart / wishlist
/ orders, plus the static frontend. Per-visitor data is scoped by a signed
session cookie, so no login screen is required.

Database is chosen by the DATABASE_URL env var:
  - unset            -> local SQLite file (backend/shopper.db)  [dev default]
  - Supabase Postgres-> postgresql://postgres.<ref>:<pw>@...pooler.supabase.com:6543/postgres

On first start the catalog is seeded from backend/seed_products.json.
"""
import json
import os
import uuid
from datetime import datetime, timezone

from flask import Flask, jsonify, request, session, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(BASE_DIR)  # repo root — the static frontend lives here
SEED_FILE = os.path.join(BASE_DIR, "seed_products.json")


def database_url():
    url = os.environ.get("DATABASE_URL", "").strip()
    if not url:
        return "sqlite:///" + os.path.join(BASE_DIR, "shopper.db")
    # SQLAlchemy needs the postgresql:// scheme (Supabase sometimes gives postgres://)
    if url.startswith("postgres://"):
        url = url.replace("postgres://", "postgresql://", 1)
    return url


app = Flask(__name__, static_folder=ROOT_DIR, static_url_path="")
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", "dev-only-change-me")
app.config["SQLALCHEMY_DATABASE_URI"] = database_url()
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ENGINE_OPTIONS"] = {"pool_pre_ping": True}

# Allow the frontend to run on a different origin (e.g. static Vercel + hosted
# Flask). Credentials are on so the session cookie is sent cross-origin.
CORS(app, supports_credentials=True)

db = SQLAlchemy(app)


# ---------------------------------------------------------------------------
# Models
# ---------------------------------------------------------------------------

class Product(db.Model):
    __tablename__ = "products"
    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    name = db.Column(db.Text, nullable=False)
    category = db.Column(db.Text, nullable=False)
    price = db.Column(db.Float, nullable=False)
    orig_price = db.Column(db.Float)
    image = db.Column(db.Text)
    rating = db.Column(db.Float, default=0)
    sold = db.Column(db.Integer, default=0)
    stock = db.Column(db.Integer, default=0)
    badge = db.Column(db.Text)
    max_per_user = db.Column(db.Integer)
    description = db.Column(db.Text)
    video = db.Column(db.Text)
    variants = db.Column(db.JSON)
    images = db.Column(db.JSON)
    qa = db.Column(db.JSON)
    seller = db.Column(db.JSON)
    reviews = db.relationship("Review", backref="product", cascade="all, delete-orphan",
                              order_by="Review.id")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "price": self.price,
            "origPrice": self.orig_price or 0,
            "image": self.image,
            "rating": self.rating,
            "sold": self.sold,
            "stock": self.stock,
            "badge": self.badge,
            "maxPerUser": self.max_per_user,
            "desc": self.description or "",
            "video": self.video,
            "variants": self.variants,
            "images": self.images,
            "qa": self.qa,
            "reviews": [r.to_dict() for r in self.reviews],
        }


class Review(db.Model):
    __tablename__ = "reviews"
    # id is assigned explicitly (see add_review) so behaviour is identical on
    # SQLite and Postgres regardless of autoincrement quirks.
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=False)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id", ondelete="CASCADE"),
                           nullable=False, index=True)
    user_name = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comment = db.Column(db.Text, nullable=False)
    review_date = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    def to_dict(self):
        return {
            "id": self.id,
            "user": self.user_name,
            "rating": self.rating,
            "comment": self.comment,
            "date": self.review_date,
        }


class CartItem(db.Model):
    __tablename__ = "cart"
    session_id = db.Column(db.Text, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id", ondelete="CASCADE"),
                           primary_key=True)
    qty = db.Column(db.Integer, nullable=False)


class WishlistItem(db.Model):
    __tablename__ = "wishlist"
    session_id = db.Column(db.Text, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey("products.id", ondelete="CASCADE"),
                           primary_key=True)


class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.BigInteger, primary_key=True, autoincrement=False)
    session_id = db.Column(db.Text, nullable=False, index=True)
    items = db.Column(db.JSON, nullable=False)
    total = db.Column(db.Float, nullable=False)
    status = db.Column(db.Text, default="Processing")
    cancelled = db.Column(db.Boolean, default=False)
    shipping = db.Column(db.JSON)
    delivery = db.Column(db.Text)
    rated = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    def to_dict(self):
        return {
            "id": self.id,
            "items": self.items,
            "total": self.total,
            "date": (self.created_at or datetime.now(timezone.utc)).strftime("%Y-%m-%d"),
            "shipping": self.shipping,
            "delivery": self.delivery,
            "status": self.status,
            "cancelled": self.cancelled,
            "rated": self.rated,
        }


# ---------------------------------------------------------------------------
# Session helper
# ---------------------------------------------------------------------------

def current_sid():
    sid = session.get("sid")
    if not sid:
        sid = uuid.uuid4().hex
        session["sid"] = sid
        session.permanent = True
    return sid


# ---------------------------------------------------------------------------
# Seed
# ---------------------------------------------------------------------------

def seed_if_empty():
    db.create_all()
    if db.session.query(Product.id).first():
        return
    if not os.path.exists(SEED_FILE):
        return
    with open(SEED_FILE, encoding="utf-8") as fh:
        products = json.load(fh)
    for p in products:
        db.session.add(Product(
            id=p["id"], name=p["name"], category=p["category"], price=p["price"],
            orig_price=p.get("origPrice"), image=p.get("image"), rating=p.get("rating", 0),
            sold=p.get("sold", 0), stock=p.get("stock", 0), badge=p.get("badge"),
            max_per_user=p.get("maxPerUser"), description=p.get("desc"), video=p.get("video"),
            variants=p.get("variants"), images=p.get("images"), qa=p.get("qa"),
            seller=p.get("seller"),
        ))
        for r in p.get("reviews", []):
            db.session.add(Review(
                id=r["id"], product_id=p["id"], user_name=r["user"], rating=r["rating"],
                comment=r["comment"], review_date=r.get("date"),
            ))
    db.session.commit()
    app.logger.info("Seeded %d products", len(products))


# ---------------------------------------------------------------------------
# API
# ---------------------------------------------------------------------------

@app.get("/api/health")
def health():
    return jsonify(ok=True)


@app.get("/api/products")
def list_products():
    products = Product.query.order_by(Product.id).all()
    return jsonify([p.to_dict() for p in products])


@app.post("/api/products/<int:product_id>/reviews")
def add_review(product_id):
    if not db.session.get(Product, product_id):
        return jsonify(error="product not found"), 404
    data = request.get_json(force=True, silent=True) or {}
    rating = int(data.get("rating", 0))
    comment = (data.get("comment") or "").strip()
    user = (data.get("user") or "").strip()
    if not user or not comment or not (1 <= rating <= 5):
        return jsonify(error="user, comment and rating (1-5) are required"), 400
    next_id = (db.session.query(db.func.max(Review.id)).scalar() or 0) + 1
    review = Review(
        id=next_id, product_id=product_id, user_name=user, rating=rating, comment=comment,
        review_date=data.get("date") or datetime.now(timezone.utc).strftime("%Y-%m-%d"),
    )
    db.session.add(review)
    db.session.commit()
    return jsonify(ok=True, review=review.to_dict()), 201


@app.get("/api/cart")
def get_cart():
    sid = current_sid()
    items = CartItem.query.filter_by(session_id=sid).all()
    return jsonify([{"id": i.product_id, "qty": i.qty} for i in items])


@app.put("/api/cart")
def put_cart():
    sid = current_sid()
    data = request.get_json(force=True, silent=True) or []
    CartItem.query.filter_by(session_id=sid).delete()
    for item in data:
        try:
            pid, qty = int(item["id"]), int(item["qty"])
        except (KeyError, TypeError, ValueError):
            continue
        if qty > 0:
            db.session.add(CartItem(session_id=sid, product_id=pid, qty=qty))
    db.session.commit()
    return jsonify(ok=True)


@app.get("/api/wishlist")
def get_wishlist():
    sid = current_sid()
    items = WishlistItem.query.filter_by(session_id=sid).all()
    return jsonify([i.product_id for i in items])


@app.put("/api/wishlist")
def put_wishlist():
    sid = current_sid()
    data = request.get_json(force=True, silent=True) or []
    WishlistItem.query.filter_by(session_id=sid).delete()
    for pid in data:
        try:
            db.session.add(WishlistItem(session_id=sid, product_id=int(pid)))
        except (TypeError, ValueError):
            continue
    db.session.commit()
    return jsonify(ok=True)


@app.get("/api/orders")
def get_orders():
    sid = current_sid()
    orders = Order.query.filter_by(session_id=sid).order_by(Order.id.desc()).all()
    return jsonify([o.to_dict() for o in orders])


@app.put("/api/orders")
def put_orders():
    """Upsert the visitor's orders (append + status/rating updates)."""
    sid = current_sid()
    data = request.get_json(force=True, silent=True) or []
    for o in data:
        try:
            oid = int(o["id"])
        except (KeyError, TypeError, ValueError):
            continue
        existing = Order.query.filter_by(id=oid, session_id=sid).one_or_none()
        if existing:
            existing.status = o.get("status", existing.status)
            existing.cancelled = bool(o.get("cancelled", existing.cancelled))
            existing.rated = o.get("rated", existing.rated)
        else:
            db.session.add(Order(
                id=oid, session_id=sid, items=o.get("items", []), total=o.get("total", 0),
                status=o.get("status", "Processing"), cancelled=bool(o.get("cancelled", False)),
                shipping=o.get("shipping"), delivery=o.get("delivery"), rated=o.get("rated"),
            ))
    db.session.commit()
    return jsonify(ok=True)


# ---------------------------------------------------------------------------
# Static frontend
# ---------------------------------------------------------------------------

@app.get("/")
def index():
    return send_from_directory(ROOT_DIR, "index.html")


@app.get("/<path:path>")
def static_proxy(path):
    full = os.path.join(ROOT_DIR, path)
    if os.path.isfile(full):
        return send_from_directory(ROOT_DIR, path)
    return send_from_directory(ROOT_DIR, "index.html")


with app.app_context():
    seed_if_empty()


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 5000)), debug=True)
