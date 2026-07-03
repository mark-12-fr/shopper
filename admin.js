// Shopper admin panel — talks to the Flask admin API.
const BASE = (window.SHOPPER_API_BASE || '').replace(/\/$/, '') + '/api';
const $ = sel => document.querySelector(sel);

async function api(path, options = {}) {
  const res = await fetch(BASE + path, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...options
  });
  const body = res.status === 204 ? null : await res.json().catch(() => null);
  if (!res.ok) throw Object.assign(new Error((body && body.error) || ('HTTP ' + res.status)), { body, status: res.status });
  return body;
}

const peso = n => '₱' + Number(n).toLocaleString('en-PH', { maximumFractionDigits: 2 });

function show(loggedIn) {
  $('#loginCard').classList.toggle('hidden', loggedIn);
  $('#panel').classList.toggle('hidden', !loggedIn);
  $('#logoutBtn').classList.toggle('hidden', !loggedIn);
  if (loggedIn) { loadProducts(); loadOrders(); }
}

// --- Auth ---
async function checkSession() {
  try { const r = await api('/admin/me'); show(!!(r && r.admin)); }
  catch { show(false); }
}

$('#loginBtn').addEventListener('click', async () => {
  const msg = $('#loginMsg'); msg.textContent = ''; msg.className = 'msg';
  try {
    await api('/admin/login', { method: 'POST', body: JSON.stringify({ password: $('#pw').value }) });
    $('#pw').value = '';
    show(true);
  } catch (e) {
    msg.textContent = e.status === 401 ? 'Wrong password.' : ('Login failed: ' + e.message);
    msg.className = 'msg err';
  }
});
$('#pw').addEventListener('keydown', e => { if (e.key === 'Enter') $('#loginBtn').click(); });
$('#logoutBtn').addEventListener('click', async () => { await api('/admin/logout', { method: 'POST' }).catch(() => {}); show(false); });

// --- Tabs ---
document.querySelectorAll('.tabs button').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll('.tabs button').forEach(x => x.classList.remove('active'));
  b.classList.add('active');
  $('#tab-products').classList.toggle('hidden', b.dataset.tab !== 'products');
  $('#tab-orders').classList.toggle('hidden', b.dataset.tab !== 'orders');
}));

// --- Products ---
async function loadProducts() {
  const products = await api('/products').catch(() => []);
  const tb = $('#productsTable tbody');
  tb.innerHTML = products.map(p => `
    <tr data-id="${p.id}">
      <td><img class="thumb" src="${p.image || ''}" alt=""></td>
      <td><input value="${(p.name || '').replace(/"/g, '&quot;')}" data-f="name" style="min-width:160px;"></td>
      <td><span class="pill">${p.category}</span></td>
      <td><input type="number" value="${p.price}" data-f="price" style="width:90px;"></td>
      <td><input type="number" value="${p.stock}" data-f="stock" style="width:70px;"></td>
      <td class="muted">${p.sold || 0}</td>
      <td style="white-space:nowrap;">
        <button class="small save">Save</button>
        <button class="small danger del">Del</button>
      </td>
    </tr>`).join('');
  tb.querySelectorAll('tr').forEach(tr => {
    const id = tr.dataset.id;
    tr.querySelector('.save').addEventListener('click', async () => {
      const payload = {};
      tr.querySelectorAll('[data-f]').forEach(inp => {
        payload[inp.dataset.f] = inp.type === 'number' ? Number(inp.value) : inp.value;
      });
      try { await api('/admin/products/' + id, { method: 'PUT', body: JSON.stringify(payload) });
        flash(tr.querySelector('.save'), 'Saved'); }
      catch (e) { alert('Save failed: ' + e.message); }
    });
    tr.querySelector('.del').addEventListener('click', async () => {
      if (!confirm('Delete this product?')) return;
      try { await api('/admin/products/' + id, { method: 'DELETE' }); tr.remove(); }
      catch (e) { alert('Delete failed: ' + e.message); }
    });
  });
}

function flash(btn, text) {
  const old = btn.textContent; btn.textContent = text;
  setTimeout(() => { btn.textContent = old; }, 1200);
}

$('#addProductBtn').addEventListener('click', async () => {
  const msg = $('#addMsg'); msg.textContent = ''; msg.className = 'msg';
  const payload = {
    name: $('#np_name').value.trim(), category: $('#np_category').value,
    price: Number($('#np_price').value), origPrice: Number($('#np_orig').value) || null,
    stock: Number($('#np_stock').value) || 0, image: $('#np_image').value.trim(),
    desc: $('#np_desc').value.trim()
  };
  if (!payload.name) { msg.textContent = 'Name is required.'; msg.className = 'msg err'; return; }
  try {
    await api('/admin/products', { method: 'POST', body: JSON.stringify(payload) });
    ['np_name', 'np_price', 'np_orig', 'np_stock', 'np_image', 'np_desc'].forEach(id => $('#' + id).value = '');
    msg.textContent = 'Product added.'; msg.className = 'msg ok';
    loadProducts();
  } catch (e) { msg.textContent = 'Failed: ' + e.message; msg.className = 'msg err'; }
});

// --- Orders ---
const STATUSES = ['Processing', 'Shipped', 'Delivered', 'Cancelled'];
async function loadOrders() {
  const orders = await api('/admin/orders').catch(() => []);
  $('#ordersEmpty').classList.toggle('hidden', orders.length > 0);
  const tb = $('#ordersTable tbody');
  tb.innerHTML = orders.map(o => `
    <tr data-id="${o.id}">
      <td class="muted">#${o.id}</td>
      <td>${o.date || ''}</td>
      <td class="muted">${(o.items || []).map(i => `${i.name || i.id}×${i.qty}`).join(', ')}</td>
      <td>${peso(o.total)}</td>
      <td>
        <select data-status>${STATUSES.map(s => `<option ${s === o.status ? 'selected' : ''}>${s}</option>`).join('')}</select>
      </td>
      <td><button class="small upd">Update</button></td>
    </tr>`).join('');
  tb.querySelectorAll('tr').forEach(tr => {
    tr.querySelector('.upd').addEventListener('click', async () => {
      const status = tr.querySelector('[data-status]').value;
      try { await api('/admin/orders/' + tr.dataset.id, { method: 'PATCH', body: JSON.stringify({ status }) });
        flash(tr.querySelector('.upd'), 'Done'); }
      catch (e) { alert('Update failed: ' + e.message); }
    });
  });
}

checkSession();
