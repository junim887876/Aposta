const CACHE_NAME = 'solarinvest-v1';

// Instalação do Service Worker
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

// Ativação do Service Worker
self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

// Interceptação de requisições
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
