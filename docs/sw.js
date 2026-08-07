const CACHE_NAME = "providers-v1";

const FILES = [
    './',
    './index.html',
    './style.css',
    './index.js',
    './manifest.json'
];

self.addEventListener('install', event => {
  // Install: fetch and cache resources individually so a single 404 won't fail the whole install
  event.waitUntil(
    caches.open(CACHE_NAME).then(async cache => {
      await Promise.all(FILES.map(async (file) => {
        try {
          // Use no-cache to ensure we fetch fresh copies when installing
          const response = await fetch(file, { cache: 'no-cache' });
          if (response && response.ok) {
            await cache.put(file, response.clone());
            console.log('SW: cached', file);
          } else {
            console.warn('SW: failed to fetch (non-OK response) ', file, response && response.status);
          }
        } catch (err) {
          console.warn('SW: fetch error for', file, err);
        }
      }));
      // Take control as soon as possible
      self.skipWaiting();
    })
  );
});

self.addEventListener('activate', event => {
  // Clean up old caches
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      })
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
