
var latestCacheName = 'App-Shell-v1';
self.addEventListener('install', function (event) {
  event.waitUntil(
	caches.open(latestCacheName)
	  .then((cache) => { 
	 return cache.addAll([
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
]);
})
);
});

self.addEventListener('fetch', (event) => { 
 	event.respondWith( caches.match(event.request).then((response) => { 
		return response || fetch(event.request); 
	}) 
    ); 
}); 
  

