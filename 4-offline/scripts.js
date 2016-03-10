if('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('sw.js')
  .then(() => {
    console.log('CLIENT: service worker registration complete.');
  })
  .catch((error) => {
    console.error('CLIENT: service worker registration failure.', error);
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}