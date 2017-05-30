self.addEventListener('install', event => {
  console.log('Service worker installed!');
  event.waitUntil(
    caches.open('assets-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './css/main.css',
        './lib/jquery-3.2.1.js',
        './main.js',
        './img/logo.png'
      ])
    })
  );
});