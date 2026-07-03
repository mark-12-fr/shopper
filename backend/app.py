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
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

try:
    from dotenv import load_dotenv
    load_dotenv()
except Exception:
    pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.dirname(BASE_DIR)  # repo root — the static frontend lives here
SEED_FILE = os.path.join(BASE_DIR, "seed_products.json")
UPLOAD_DIR = os.path.join(BASE_DIR, "uploads")
ALLOWED_IMG = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"}
os.makedirs(UPLOAD_DIR, exist_ok=True)


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
ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "admin123")
PAYMONGO_SECRET_KEY = os.environ.get("PAYMONGO_SECRET_KEY", "").strip()
GIFT_WRAP_PRICE = 49
DELIVERY_FEE = 49
POINTS_PER_PESO = 0.1
COUPONS = {"SAVE10": 0.10, "SAVE5": 0.05}
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


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Text, primary_key=True)
    email = db.Column(db.Text, unique=True, nullable=False, index=True)
    password_hash = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=lambda: datetime.now(timezone.utc))

    def to_dict(self):
        return {"id": self.id, "email": self.email}


# ---------------------------------------------------------------------------
# Session / owner helpers
# ---------------------------------------------------------------------------

def current_sid():
    """The guest session id (per browser)."""
    sid = session.get("sid")
    if not sid:
        sid = uuid.uuid4().hex
        session["sid"] = sid
        session.permanent = True
    return sid


def current_owner():
    """The key that owns cart/wishlist/orders: the logged-in user id if signed
    in, otherwise the guest session id."""
    return session.get("uid") or current_sid()


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
    sid = current_owner()
    items = CartItem.query.filter_by(session_id=sid).all()
    return jsonify([{"id": i.product_id, "qty": i.qty} for i in items])


@app.put("/api/cart")
def put_cart():
    sid = current_owner()
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
    sid = current_owner()
    items = WishlistItem.query.filter_by(session_id=sid).all()
    return jsonify([i.product_id for i in items])


@app.put("/api/wishlist")
def put_wishlist():
    sid = current_owner()
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
    sid = current_owner()
    orders = Order.query.filter_by(session_id=sid).order_by(Order.id.desc()).all()
    return jsonify([o.to_dict() for o in orders])


@app.put("/api/orders")
def put_orders():
    """Upsert the visitor's orders (append + status/rating updates)."""
    sid = current_owner()
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
# Pricing (server-authoritative — mirrors the client rules)
# ---------------------------------------------------------------------------

def bulk_discount_rate(qty):
    if qty >= 10:
        return 0.10
    if qty >= 5:
        return 0.05
    if qty >= 3:
        return 0.03
    return 0.0


def price_cart(items, coupon=None, gift_wrap=False, delivery_method="delivery",
               points_redeemed=0):
    """Validate items against the DB and compute totals from DB prices.

    Returns (result_dict, error_dict). Exactly one is non-None.
    """
    if not items:
        return None, {"error": "cart is empty"}
    resolved = []
    subtotal = 0.0
    total_qty = 0
    for item in items:
        try:
            pid, qty = int(item["id"]), int(item["qty"])
        except (KeyError, TypeError, ValueError):
            return None, {"error": "invalid cart item"}
        if qty <= 0:
            continue
        product = db.session.get(Product, pid)
        if product is None:
            return None, {"error": f"product {pid} not found"}
        if product.stock < qty:
            return None, {"error": "insufficient stock", "product_id": pid,
                          "name": product.name, "available": product.stock}
        subtotal += product.price * qty
        total_qty += qty
        resolved.append((product, qty))
    if not resolved:
        return None, {"error": "cart is empty"}

    bulk = subtotal * bulk_discount_rate(total_qty)
    coupon_rate = COUPONS.get((coupon or "").strip().upper(), 0.0)
    coupon_amt = (subtotal - bulk) * coupon_rate
    gift = GIFT_WRAP_PRICE if gift_wrap else 0
    delivery = 0 if delivery_method == "pickup" else DELIVERY_FEE
    max_points = max(0.0, subtotal - bulk - coupon_amt + gift + delivery)
    points = min(max(0, int(points_redeemed)) * POINTS_PER_PESO, max_points)
    total = subtotal - bulk - coupon_amt + gift + delivery - points
    return {
        "resolved": resolved,
        "subtotal": round(subtotal, 2),
        "bulk_discount": round(bulk, 2),
        "coupon_discount": round(coupon_amt, 2),
        "gift": gift,
        "delivery": delivery,
        "points_discount": round(points, 2),
        "total": round(total, 2),
    }, None


@app.post("/api/checkout")
def checkout():
    """Authoritative checkout: validates stock, computes the total from DB
    prices, decrements stock, and records the order — all server-side."""
    sid = current_owner()
    data = request.get_json(force=True, silent=True) or {}
    priced, err = price_cart(
        data.get("items", []),
        coupon=data.get("coupon"),
        gift_wrap=bool(data.get("gift_wrap")),
        delivery_method=data.get("delivery_method", "delivery"),
        points_redeemed=data.get("points_redeemed", 0),
    )
    if err:
        return jsonify(err), 409

    payment_method = data.get("payment_method", "cod")
    payment = {"method": payment_method, "status": "cod" if payment_method == "cod" else "simulated"}
    # Real card payments go through PayMongo when a key is configured; otherwise
    # non-COD methods are simulated so the demo still completes.
    if payment_method != "cod" and PAYMONGO_SECRET_KEY:
        payment["status"] = "pending"  # a real integration would create a PayMongo source here

    items_snapshot = [
        {"id": p.id, "name": p.name, "qty": qty, "price": p.price, "image": p.image}
        for p, qty in priced["resolved"]
    ]
    for product, qty in priced["resolved"]:
        product.stock = max(0, product.stock - qty)
        product.sold = (product.sold or 0) + qty

    order = Order(
        id=int(datetime.now(timezone.utc).timestamp() * 1000),
        session_id=sid, items=items_snapshot, total=priced["total"],
        status="Processing", cancelled=False,
        shipping=data.get("shipping"), delivery=data.get("delivery"),
    )
    db.session.add(order)
    # Clear the server-side cart now that it's an order.
    CartItem.query.filter_by(session_id=sid).delete()
    db.session.commit()
    return jsonify(ok=True, order=order.to_dict(), pricing={
        k: priced[k] for k in ("subtotal", "bulk_discount", "coupon_discount",
                               "gift", "delivery", "points_discount", "total")
    }, payment=payment), 201


# ---------------------------------------------------------------------------
# Auth (email + password)
# ---------------------------------------------------------------------------

def migrate_guest_to_user(guest_sid, uid):
    """Move (and merge) a guest session's cart/wishlist/orders onto a user."""
    if guest_sid == uid:
        return
    for gi in CartItem.query.filter_by(session_id=guest_sid).all():
        existing = db.session.get(CartItem, (uid, gi.product_id))
        if existing:
            existing.qty += gi.qty
        else:
            db.session.add(CartItem(session_id=uid, product_id=gi.product_id, qty=gi.qty))
        db.session.delete(gi)
    for gw in WishlistItem.query.filter_by(session_id=guest_sid).all():
        if not db.session.get(WishlistItem, (uid, gw.product_id)):
            db.session.add(WishlistItem(session_id=uid, product_id=gw.product_id))
        db.session.delete(gw)
    Order.query.filter_by(session_id=guest_sid).update({"session_id": uid})
    db.session.commit()


@app.post("/api/auth/register")
def auth_register():
    data = request.get_json(force=True, silent=True) or {}
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    if "@" not in email or len(password) < 6:
        return jsonify(error="a valid email and a password of at least 6 characters are required"), 400
    if User.query.filter_by(email=email).first():
        return jsonify(error="email already registered"), 409
    guest = current_sid()
    user = User(id=uuid.uuid4().hex, email=email, password_hash=generate_password_hash(password))
    db.session.add(user)
    db.session.commit()
    session["uid"] = user.id
    migrate_guest_to_user(guest, user.id)
    return jsonify(ok=True, user=user.to_dict()), 201


@app.post("/api/auth/login")
def auth_login():
    data = request.get_json(force=True, silent=True) or {}
    email = (data.get("email") or "").strip().lower()
    password = data.get("password") or ""
    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password_hash, password):
        return jsonify(error="invalid email or password"), 401
    guest = current_sid()
    session["uid"] = user.id
    migrate_guest_to_user(guest, user.id)
    return jsonify(ok=True, user=user.to_dict())


@app.post("/api/auth/logout")
def auth_logout():
    session.pop("uid", None)
    return jsonify(ok=True)


@app.get("/api/auth/me")
def auth_me():
    uid = session.get("uid")
    user = db.session.get(User, uid) if uid else None
    return jsonify(user=user.to_dict() if user else None)


# ---------------------------------------------------------------------------
# Admin
# ---------------------------------------------------------------------------

def admin_required(fn):
    from functools import wraps

    @wraps(fn)
    def wrapper(*args, **kwargs):
        if not session.get("is_admin"):
            return jsonify(error="admin login required"), 401
        return fn(*args, **kwargs)
    return wrapper


@app.post("/api/admin/login")
def admin_login():
    data = request.get_json(force=True, silent=True) or {}
    if data.get("password") == ADMIN_PASSWORD:
        session["is_admin"] = True
        return jsonify(ok=True)
    return jsonify(error="invalid password"), 401


@app.post("/api/admin/logout")
def admin_logout():
    session.pop("is_admin", None)
    return jsonify(ok=True)


@app.get("/api/admin/me")
def admin_me():
    return jsonify(admin=bool(session.get("is_admin")))


@app.get("/api/admin/orders")
@admin_required
def admin_orders():
    orders = Order.query.order_by(Order.id.desc()).all()
    return jsonify([{**o.to_dict(), "session_id": o.session_id} for o in orders])


@app.patch("/api/admin/orders/<int:order_id>")
@admin_required
def admin_update_order(order_id):
    order = db.session.get(Order, order_id)
    if not order:
        return jsonify(error="order not found"), 404
    data = request.get_json(force=True, silent=True) or {}
    status = data.get("status")
    if status not in ("Processing", "Shipped", "Delivered", "Cancelled"):
        return jsonify(error="invalid status"), 400
    order.status = status
    order.cancelled = status == "Cancelled"
    db.session.commit()
    return jsonify(ok=True, order=order.to_dict())


@app.post("/api/admin/products")
@admin_required
def admin_create_product():
    data = request.get_json(force=True, silent=True) or {}
    if not data.get("name") or not data.get("category"):
        return jsonify(error="name and category are required"), 400
    next_id = (db.session.query(db.func.max(Product.id)).scalar() or 0) + 1
    product = Product(
        id=next_id, name=data["name"], category=data["category"],
        price=float(data.get("price", 0)), orig_price=data.get("origPrice"),
        image=data.get("image"), rating=data.get("rating", 0), sold=data.get("sold", 0),
        stock=int(data.get("stock", 0)), badge=data.get("badge"),
        max_per_user=data.get("maxPerUser"), description=data.get("desc"),
        video=data.get("video"), variants=data.get("variants"), images=data.get("images"),
        qa=data.get("qa"), seller=data.get("seller"),
    )
    db.session.add(product)
    db.session.commit()
    return jsonify(ok=True, product=product.to_dict()), 201


@app.put("/api/admin/products/<int:product_id>")
@admin_required
def admin_update_product(product_id):
    product = db.session.get(Product, product_id)
    if not product:
        return jsonify(error="product not found"), 404
    data = request.get_json(force=True, silent=True) or {}
    field_map = {
        "name": "name", "category": "category", "price": "price", "origPrice": "orig_price",
        "image": "image", "rating": "rating", "sold": "sold", "stock": "stock",
        "badge": "badge", "maxPerUser": "max_per_user", "desc": "description",
        "video": "video", "variants": "variants", "images": "images", "qa": "qa",
        "seller": "seller",
    }
    for key, col in field_map.items():
        if key in data:
            setattr(product, col, data[key])
    db.session.commit()
    return jsonify(ok=True, product=product.to_dict())


@app.delete("/api/admin/products/<int:product_id>")
@admin_required
def admin_delete_product(product_id):
    product = db.session.get(Product, product_id)
    if not product:
        return jsonify(error="product not found"), 404
    db.session.delete(product)
    db.session.commit()
    return jsonify(ok=True)


@app.post("/api/admin/upload")
@admin_required
def admin_upload():
    f = request.files.get("file")
    if not f or not f.filename:
        return jsonify(error="no file uploaded"), 400
    ext = os.path.splitext(f.filename)[1].lower()
    if ext not in ALLOWED_IMG:
        return jsonify(error="unsupported file type"), 400
    name = secure_filename(uuid.uuid4().hex + ext)
    f.save(os.path.join(UPLOAD_DIR, name))
    return jsonify(ok=True, url="/uploads/" + name), 201


@app.get("/uploads/<path:filename>")
def serve_upload(filename):
    return send_from_directory(UPLOAD_DIR, filename)


# ---------------------------------------------------------------------------
# Static frontend
# ---------------------------------------------------------------------------

@app.get("/")
def index():
    return send_from_directory(ROOT_DIR, "index.html")


@app.get("/admin")
def admin_page():
    return send_from_directory(ROOT_DIR, "admin.html")


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
