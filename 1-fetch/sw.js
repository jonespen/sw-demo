// The SW will be shutdown when not in use to save memory,
// be aware that any global state is likely to disappear
console.log('SW startup');

self.addEventListener('install', function(event) {
  console.log('SW installed', event);
});

self.addEventListener('activate', function(event) {
  console.log('SW activated', event);
});

self.addEventListener('fetch', function(event) {
  console.log('Caught a fetch!', event);
  event.respondWith(new Response('💩'));
});
