var filesToCache = [
 '/',
  '/index.html'
];
var latestCacheName = 'App-Shell-v1';

self.addEventListener('install', function (event) {
  event.waitUntil(
	caches.open(latestCacheName)
	  .then(function (cache) {
		return cache.addAll(filesToCache)
		.then(() => self.skipWaiting());
	  })
  );
});

self.addEventListener('fetch', (event) => { 
 	event.respondWith( caches.match(event.request).then((response) => { 
		return response || fetch(event.request); 
	}) 
    ); 
}); 
  

