# Shopper Flask backend

A small Flask + SQLAlchemy API that powers the catalog, reviews, and each
visitor's cart / wishlist / orders, and also serves the static frontend.
Per-visitor data is scoped by a signed session cookie — no login screen.

## Run locally (SQLite — zero setup)

```bash
cd backend
python -m venv venv && source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Open http://localhost:5000 — the whole app (frontend + API) runs from Flask.
The catalog is seeded automatically from `seed_products.json` on first run
into a local `shopper.db`.

## Use your Supabase Postgres database

1. In Supabase: **Project Settings → Database → Connection string → URI**, and
   copy the **Connection pooler** string (port `6543`).
2. Create `backend/.env` from `.env.example` and set:

   ```
   SECRET_KEY=some-long-random-string
   DATABASE_URL=postgresql://postgres.hjmtrfldepxcacdnzzpe:YOUR_DB_PASSWORD@aws-0-<region>.pooler.supabase.com:6543/postgres
   ```

3. `python app.py` — the tables are created and seeded in your Supabase
   database on first start.

> Switching backends? If you previously created the client-side Supabase tables
> (`products`, `reviews`, `cart`, `wishlist`, `orders`) with the old
> `user_id`/RLS shape, drop them first so this backend can create its own
> (`session_id`-scoped) versions:
> ```sql
> drop table if exists public.cart, public.wishlist, public.orders,
>   public.reviews, public.products cascade;
> ```

## Production

```bash
gunicorn --chdir backend app:app --bind 0.0.0.0:8000
```

Set `SECRET_KEY` and `DATABASE_URL` in the environment. If you host the
frontend separately (e.g. static on Vercel) and the backend elsewhere, add
this before `api.js` in `index.html` and the backend CORS will allow it:

```html
<script>window.SHOPPER_API_BASE = 'https://your-backend.example.com';</script>
```

## Admin panel

Visit **`/admin`** and log in with `ADMIN_PASSWORD` (default `admin123` — change
it). From there you can add / edit / delete products and stock, and view all
orders and move them through Processing → Shipped → Delivered.

## Checkout is server-authoritative

`POST /api/checkout` recomputes the total from database prices, validates and
**decrements stock**, applies coupons/bulk/points/delivery/gift server-side,
and records the order. The browser can't fake the price. Non-COD payments are
simulated unless `PAYMONGO_SECRET_KEY` is set.

## Deploy

- **Render:** the repo ships a `render.yaml` — create a Blueprint service, then
  set `DATABASE_URL`, `ADMIN_PASSWORD` (and optionally `PAYMONGO_SECRET_KEY`).
- **Railway / Fly / Heroku-style:** a `Procfile` is included
  (`gunicorn --chdir backend app:app`).
- Any Python host works; set the env vars and run the gunicorn command.

> On serverless/ephemeral hosts, use Postgres (`DATABASE_URL`) — a SQLite file
> won't persist between instances.

## API

| Method    | Path                            | Purpose                          |
| --------- | ------------------------------- | -------------------------------- |
| GET       | `/api/health`                   | connectivity check               |
| GET       | `/api/products`                 | catalog + reviews                |
| POST      | `/api/products/<id>/reviews`    | add a review                     |
| GET/PUT   | `/api/cart`                     | this visitor's cart              |
| GET/PUT   | `/api/wishlist`                 | this visitor's wishlist          |
| GET/PUT   | `/api/orders`                   | this visitor's orders (upsert)   |
| POST      | `/api/checkout`                 | validate stock + place order     |
| POST      | `/api/admin/login` `logout`     | admin auth                       |
| GET       | `/api/admin/orders`             | all orders (admin)               |
| PATCH     | `/api/admin/orders/<id>`        | update order status (admin)      |
| POST/PUT/DELETE | `/api/admin/products[/<id>]` | manage catalog (admin)        |

The frontend (`api.js`) falls back to built-in data + `localStorage` whenever
the API is unreachable, so the site still works if the backend is down.

## Tests

```bash
pip install -r requirements-dev.txt
python -m pytest -q
```
CI runs these on every push/PR (`.github/workflows/backend-tests.yml`).
