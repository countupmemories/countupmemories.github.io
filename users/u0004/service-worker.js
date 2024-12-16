self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('pwa-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './styles.css',
        './manifest.json',
        './icon-192x192.png',
        './icon-512x512.png',
        './splash-320x568.png',
        './splash-1170x2532.png',
        './splash-834x1112.png'
      ]);
    })
  );
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});