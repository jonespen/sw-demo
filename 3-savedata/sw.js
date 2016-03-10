'use strict';

self.addEventListener('fetch', function (event) {
  if (event.request.headers.get('save-data')) {
    //Return smaller images
    if (/\.jpg$|.gif$|.png$/.test(event.request.url)) {
      let saveDataUrl = event.request.url.substr(0, event.request.url.lastIndexOf('.')) + '-savedata' + event.request.url.substr(event.request.url.lastIndexOf('.'), event.request.url.length - 1);
      event.respondWith(
        fetch(saveDataUrl, {
          mode: 'no-cors'
        })
      );
    }

    // We want to save data, so restrict icons and fonts too
    if (event.request.url.includes('fonts.googleapis.com')) {
      // return nothing
      event.respondWith(new Response('', {status: 408, statusText: 'Ignore fonts to save data.'}));
    }
  }

});