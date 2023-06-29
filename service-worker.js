var filesToCache = [
  '.',
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  '/bilder/favicon.ico',
  '/bilder/sonne.png',
  '/bilder/euro.png',
  '/bilder/sonne.png',
  '/bilder/sonne144.png',
'/bilder/touch-icon-iphone.png'	
];

	latestCacheName = 'App-Shell-v1';
	self.addEventListener('install', function (event) {
	  event.waitUntil(
		caches.open(latestCacheName)
		  .then(function (cache) {
			return cache.addAll(filesToCache)
			.then(() => self.skipWaiting());
		  })
	  );
	});

	

	self.addEventListener("fetch", event => {
    if (event.request.url === "https://www.etnachhause.github.io/solar2.index.html") {
        // or whatever your app's URL is
        event.respondWith(
            fetch(event.request).catch(err =>
                self.cache.open(cache_name).then(cache => cache.match("/index.html"))
            )
        );
    } else {
        event.respondWith(
            fetch(event.request).catch(err =>
                caches.match(event.request).then((response) => { 
 		return response || fetch(event.request); 
            )
        );
    }
});
  

