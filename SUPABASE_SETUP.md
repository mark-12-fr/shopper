# Connecting Shopper to Supabase

The app works offline out of the box (built-in product list + `localStorage`).
Connecting Supabase moves the catalog, reviews, and each visitor's cart /
wishlist / orders into your database `hjmtrfldepxcacdnzzpe`.

Per-visitor data is scoped with **Supabase anonymous auth**, so every browser
gets its own identity automatically — no login screen needed.

---

## 1. Link the Supabase CLI to your project

```bash
supabase login
supabase link --project-ref hjmtrfldepxcacdnzzpe
```

## 2. (Optional) Delete your old tables first

If `hjmtrfldepxcacdnzzpe` still has tables from a previous project that you
want gone, drop them **yourself** after checking what's there. Example — list
your tables in the dashboard SQL Editor:

```sql
select table_name from information_schema.tables where table_schema = 'public';
```

Then drop only the ones you don't need (this is permanent):

```sql
-- drop table if exists public.old_table_name cascade;
```

> The migrations below never drop your existing tables — they only add the
> `products`, `reviews`, `orders`, `wishlist`, and `cart` tables.

## 3. Apply the schema + seed data

```bash
supabase db push
```

This runs the two migrations in `supabase/migrations/`:

- `0001_shopper_schema.sql` — tables + Row Level Security policies
- `0002_shopper_seed.sql` — the 24 products and their reviews

**No CLI?** Open the dashboard **SQL Editor**, paste the contents of those two
files (in order), and run them.

## 4. Enable anonymous sign-ins

Dashboard → **Authentication → Sign In / Providers** → enable
**Anonymous sign-ins** → Save. (Required for carts/wishlists/orders to work.)

## 5. Add your anon key to the frontend

Dashboard → **Project Settings → API**. Copy the **`anon` `public`** key and
paste it into `supabase-config.js`:

```js
window.SUPABASE_CONFIG = {
  url: 'https://hjmtrfldepxcacdnzzpe.supabase.co',
  anonKey: 'eyJ... your anon public key ...'
};
```

The anon key is safe to ship in frontend code — RLS controls what it can touch.
Never put the `service_role` (secret) key here.

## 6. Run / deploy

It's a static site — open `index.html`, or deploy the folder (e.g. Vercel).
Open the browser console; you should see:

```
[ShopperDB] Connected to Supabase as <uuid>
```

If the key is missing/invalid you'll instead see a message that it's running
offline with built-in data — the app keeps working either way.

---

## How the data maps

| App data            | Supabase table | Access (RLS)                          |
| ------------------- | -------------- | ------------------------------------- |
| Product catalog     | `products`     | public read                           |
| Product reviews     | `reviews`      | public read, signed-in insert         |
| Cart                | `cart`         | owner only (`auth.uid()`)             |
| Wishlist            | `wishlist`     | owner only                            |
| Orders              | `orders`       | owner only                            |

On a brand-new visitor, anything already in their browser's `localStorage`
(cart/wishlist/orders) is migrated up to the cloud on first connect.
