self.addEventListener('install', () => console.log('==>>', 'sw installed'))

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('testCache').then(function (cache) {
      return cache.addAll(
        [
          './index.html',
          './other.html'
        ]
      );
    })
  );
});

self.addEventListener('activate', event => {
  console.log('==>>', 'sw activated')
});

self.addEventListener('fetch', (event) => {
  console.log('==>>', 'fetch event', '==>>', event)
  event.respondWith(
    fetch(event.request.url)
      .catch(() => {
        console.log('==>>', 'no net')
        caches.match(event.request)
      }
      ))
})
