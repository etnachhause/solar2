var filesToCache = [
  '.',
  '/',
  'index.html',
  'manifest.json',
  'service-worker.js',
  'bilder/favicon.ico',
  'bilder/sonne.png',
  'bilder/euro.png',
  'bilder/sonne.png',
  'bilder/sonne144.png',
'bilder/touch-icon-iphone.png'	
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

	self.addEventListener('activate', event => {
	  event.waitUntil(
		caches.keys().then(allCaches => {
			allCaches.forEach(cache => {
			  if (cache !== latestCacheName) {
				  caches.delete(cache);
			  }
			})
		})
	  );
	});

	self.addEventListener('fetch', function (event) {
	  event.respondWith(
		caches.match(event.request)
		.then(function (response) {
		  if (response) {
			return response;
		  } else {
			return fetch(event.request);
		  }
		})
	  );
   });

