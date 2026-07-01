// Shopper data layer backed by the Flask API.
//
// Exposes window.ShopperDB with the same interface the app already uses. Every
// method is a safe no-op (returns null / does nothing) when the API can't be
// reached, so the app falls back to its built-in data + localStorage.
//
// By default the API is same-origin ("/api"), which is the case when the Flask
// backend serves this frontend. To point a statically-hosted frontend at a
// separately-hosted backend, set window.SHOPPER_API_BASE before this script,
// e.g. <script>window.SHOPPER_API_BASE='https://your-backend.example.com';</script>
window.ShopperDB = (function () {
  const BASE = (window.SHOPPER_API_BASE || '').replace(/\/$/, '') + '/api';
  let enabled = false;
  const timers = {};

  function debounce(key, fn, ms = 500) {
    clearTimeout(timers[key]);
    timers[key] = setTimeout(fn, ms);
  }

  async function api(path, options = {}) {
    const res = await fetch(BASE + path, {
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      ...options
    });
    if (!res.ok) throw new Error('HTTP ' + res.status + ' for ' + path);
    if (res.status === 204) return null;
    return res.json();
  }

  async function init() {
    try {
      const h = await api('/health');
      enabled = !!(h && h.ok);
      if (enabled) console.info('[ShopperDB] Connected to Flask API at', BASE);
      return enabled;
    } catch (e) {
      console.info('[ShopperDB] API unreachable — running offline with built-in data.');
      enabled = false;
      return false;
    }
  }

  const ready = init();

  // --- Catalog -------------------------------------------------------------

  async function loadProducts() {
    if (!enabled) return null;
    try { return await api('/products'); }
    catch (e) { console.warn('[ShopperDB] loadProducts:', e.message); return null; }
  }

  async function addReview(productId, review) {
    if (!enabled) return;
    try {
      await api('/products/' + productId + '/reviews', {
        method: 'POST',
        body: JSON.stringify({ user: review.user, rating: review.rating, comment: review.comment, date: review.date })
      });
    } catch (e) { console.warn('[ShopperDB] addReview:', e.message); }
  }

  // --- Cart ----------------------------------------------------------------

  async function loadCart() {
    if (!enabled) return null;
    try { return await api('/cart'); }
    catch (e) { console.warn('[ShopperDB] loadCart:', e.message); return null; }
  }

  function saveCart(cart) {
    if (!enabled) return;
    const snapshot = cart.map(i => ({ id: i.id, qty: i.qty }));
    debounce('cart', () => api('/cart', { method: 'PUT', body: JSON.stringify(snapshot) })
      .catch(e => console.warn('[ShopperDB] saveCart:', e.message)));
  }

  // --- Wishlist ------------------------------------------------------------

  async function loadWishlist() {
    if (!enabled) return null;
    try { return await api('/wishlist'); }
    catch (e) { console.warn('[ShopperDB] loadWishlist:', e.message); return null; }
  }

  function saveWishlist(wishlist) {
    if (!enabled) return;
    const snapshot = wishlist.slice();
    debounce('wishlist', () => api('/wishlist', { method: 'PUT', body: JSON.stringify(snapshot) })
      .catch(e => console.warn('[ShopperDB] saveWishlist:', e.message)));
  }

  // --- Orders --------------------------------------------------------------

  async function loadOrders() {
    if (!enabled) return null;
    try { return await api('/orders'); }
    catch (e) { console.warn('[ShopperDB] loadOrders:', e.message); return null; }
  }

  function saveOrders(orders) {
    if (!enabled) return;
    const snapshot = JSON.parse(JSON.stringify(orders));
    debounce('orders', () => api('/orders', { method: 'PUT', body: JSON.stringify(snapshot) })
      .catch(e => console.warn('[ShopperDB] saveOrders:', e.message)));
  }

  return {
    ready,
    get enabled() { return enabled; },
    loadProducts, addReview,
    loadCart, saveCart,
    loadWishlist, saveWishlist,
    loadOrders, saveOrders
  };
})();
