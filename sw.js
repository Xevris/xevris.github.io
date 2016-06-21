this.addEventListener('install', e => {
  caches.open('v1').then( cache => {
    return cache.addAll([
      '/',
      '/sw.js',
      '/manifest.json',
      '/favicon.ico',
      '/icon192.png'
    ]);
  });
  console.log('sw installed');
});


this.addEventListener('fetch', e => {
  if (!e.request.url.includes('192.168.1.8')) {
    e.respondWith(caches.match(e.request));
  } else {
    e.respondWith(fetch(e.request));
  }
});
