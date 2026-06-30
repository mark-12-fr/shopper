// Shopper data layer backed by Supabase.
//
// Exposes window.ShopperDB. Every method is a no-op (returns null/does nothing)
// when Supabase isn't configured or reachable, so script.js can call it freely
// and simply fall back to its built-in data + localStorage.
//
// Per-visitor data (cart / wishlist / orders) is keyed by a Supabase anonymous
// auth session, so each browser gets its own identity without a login screen.
window.ShopperDB = (function () {
  const cfg = window.SUPABASE_CONFIG || {};
  let client = null;
  let uid = null;
  let enabled = false;
  const timers = {};

  function debounce(key, fn, ms = 600) {
    clearTimeout(timers[key]);
    timers[key] = setTimeout(fn, ms);
  }

  async function init() {
    try {
      const unset = !cfg.url || !cfg.anonKey || /PASTE_YOUR|YOUR_ANON_KEY/i.test(cfg.anonKey);
      if (!window.supabase || unset) {
        if (unset) console.info('[ShopperDB] No Supabase key set — running offline with built-in data.');
        return false;
      }
      client = window.supabase.createClient(cfg.url, cfg.anonKey, {
        auth: { persistSession: true, autoRefreshToken: true }
      });
      let { data: { session } } = await client.auth.getSession();
      if (!session) {
        const res = await client.auth.signInAnonymously();
        if (res.error) throw res.error;
        session = res.data.session;
      }
      uid = session.user.id;
      enabled = true;
      console.info('[ShopperDB] Connected to Supabase as', uid);
      return true;
    } catch (e) {
      console.warn('[ShopperDB] Disabled — falling back to local data:', e.message || e);
      enabled = false;
      return false;
    }
  }

  const ready = init();

  // --- Catalog -------------------------------------------------------------

  async function loadProducts() {
    if (!enabled) return null;
    const { data: prods, error } = await client.from('products').select('*').order('id');
    if (error) { console.warn('[ShopperDB] loadProducts:', error.message); return null; }
    const { data: revs } = await client.from('reviews').select('*').order('id');
    const byProduct = {};
    (revs || []).forEach(r => {
      (byProduct[r.product_id] || (byProduct[r.product_id] = [])).push({
        id: r.id, user: r.user_name, rating: r.rating, comment: r.comment, date: r.review_date
      });
    });
    return (prods || []).map(p => ({
      id: p.id,
      name: p.name,
      category: p.category,
      price: Number(p.price),
      origPrice: p.orig_price != null ? Number(p.orig_price) : 0,
      image: p.image,
      rating: Number(p.rating),
      sold: p.sold,
      stock: p.stock,
      badge: p.badge || null,
      maxPerUser: p.max_per_user || undefined,
      desc: p.description || '',
      video: p.video || undefined,
      variants: p.variants || undefined,
      images: p.images || undefined,
      qa: p.qa || undefined,
      reviews: byProduct[p.id] || []
    }));
  }

  async function addReview(productId, review) {
    if (!enabled) return;
    const { error } = await client.from('reviews').insert({
      product_id: productId,
      user_name: review.user,
      rating: review.rating,
      comment: review.comment,
      review_date: review.date,
      user_id: uid
    });
    if (error) console.warn('[ShopperDB] addReview:', error.message);
  }

  // --- Cart ----------------------------------------------------------------

  async function loadCart() {
    if (!enabled) return null;
    const { data, error } = await client.from('cart').select('product_id, qty');
    if (error) { console.warn('[ShopperDB] loadCart:', error.message); return null; }
    return (data || []).map(r => ({ id: r.product_id, qty: r.qty }));
  }

  function saveCart(cart) {
    if (!enabled) return;
    const snapshot = cart.map(i => ({ user_id: uid, product_id: i.id, qty: i.qty }));
    debounce('cart', async () => {
      await client.from('cart').delete().eq('user_id', uid);
      if (snapshot.length) {
        const { error } = await client.from('cart').insert(snapshot);
        if (error) console.warn('[ShopperDB] saveCart:', error.message);
      }
    });
  }

  // --- Wishlist ------------------------------------------------------------

  async function loadWishlist() {
    if (!enabled) return null;
    const { data, error } = await client.from('wishlist').select('product_id');
    if (error) { console.warn('[ShopperDB] loadWishlist:', error.message); return null; }
    return (data || []).map(r => r.product_id);
  }

  function saveWishlist(wishlist) {
    if (!enabled) return;
    const snapshot = wishlist.map(id => ({ user_id: uid, product_id: id }));
    debounce('wishlist', async () => {
      await client.from('wishlist').delete().eq('user_id', uid);
      if (snapshot.length) {
        const { error } = await client.from('wishlist').insert(snapshot);
        if (error) console.warn('[ShopperDB] saveWishlist:', error.message);
      }
    });
  }

  // --- Orders --------------------------------------------------------------

  async function loadOrders() {
    if (!enabled) return null;
    const { data, error } = await client.from('orders').select('*').order('id', { ascending: false });
    if (error) { console.warn('[ShopperDB] loadOrders:', error.message); return null; }
    return (data || []).map(o => ({
      id: Number(o.id),
      items: o.items,
      total: Number(o.total),
      date: (o.created_at || '').slice(0, 10),
      shipping: o.shipping || null,
      delivery: o.delivery || null,
      status: o.status,
      cancelled: !!o.cancelled,
      rated: o.rated || undefined
    }));
  }

  function saveOrders(orders) {
    if (!enabled) return;
    const rows = orders.map(o => ({
      id: o.id,
      user_id: uid,
      items: o.items,
      total: o.total,
      status: o.status,
      cancelled: !!o.cancelled,
      shipping: o.shipping || null,
      delivery: o.delivery || null,
      rated: o.rated || null
    }));
    debounce('orders', async () => {
      if (!rows.length) return;
      const { error } = await client.from('orders').upsert(rows, { onConflict: 'id' });
      if (error) console.warn('[ShopperDB] saveOrders:', error.message);
    });
  }

  return {
    ready,
    get enabled() { return enabled; },
    get userId() { return uid; },
    loadProducts, addReview,
    loadCart, saveCart,
    loadWishlist, saveWishlist,
    loadOrders, saveOrders
  };
})();
