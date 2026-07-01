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

## API

| Method | Path                              | Purpose                          |
| ------ | --------------------------------- | -------------------------------- |
| GET    | `/api/health`                     | connectivity check               |
| GET    | `/api/products`                   | catalog + reviews                |
| POST   | `/api/products/<id>/reviews`      | add a review                     |
| GET/PUT| `/api/cart`                       | this visitor's cart              |
| GET/PUT| `/api/wishlist`                   | this visitor's wishlist          |
| GET/PUT| `/api/orders`                     | this visitor's orders (upsert)   |

The frontend (`api.js`) falls back to built-in data + `localStorage` whenever
the API is unreachable, so the site still works if the backend is down.
