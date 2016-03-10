if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js') // WUT??
    .then(() => {
      console.log('CLIENT: service worker registration complete.');
    })
    .catch((error) => {
      console.error('CLIENT: service worker registration failure.', error);
    });
} else {
  console.log('CLIENT: service worker is not supported.');
}

fetch('http://private-e52c7-swdemo.apiary-mock.com/fact')
  .then((response) => response.json())
  .then((body) => {
    document.getElementById('fact').innerHTML = body.fact;
  });