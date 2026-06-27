const CACHE = 'shopper-v1';
const URLS = [
  '.',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'icon.svg',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  'https://fonts.gstatic.com'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin || url.hostname === 'cdnjs.cloudflare.com' || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          if (res && (res.status === 200 || res.status === 0)) {
            const clone = res.clone();
            caches.open(CACHE).then(cache => {
              if (e.request.method === 'GET' && !url.pathname.includes('loremflickr')) cache.put(e.request, clone);
            });
            return res;
          }
          return res;
        }).catch(() => new Response('Offline', { status: 503 }));
      })
    );
  }
});
