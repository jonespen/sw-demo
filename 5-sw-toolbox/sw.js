importScripts('node_modules/sw-toolbox/sw-toolbox.js');

// Try network but fallback to cache
toolbox.router.default = toolbox.networkFirst;

// Cache static updates then update them once the network resolves.
toolbox.router.any('/static/*', toolbox.fastest);

// Data should query the network first but fallback to the Cache
toolbox.router.any('/^http:\/\/private-e52c7-swdemo.apiary-mock.com/\//', toolbox.networkFirst);

// Pre cache pages and assets
// should be generated using a tool like sw-precache
// https://github.com/GoogleChrome/sw-precache
toolbox.precache(['index.html', 'dog.html', 'cat.html', 'static/cat.gif', 'static/dog.gif']);