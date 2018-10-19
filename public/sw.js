self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("pwademo").then(function(cache) {
      return cache.addAll(["/", "/index.html"]);
    })
  );
});

self.addEventListener("activate", function(event) {
  console.log("Activating Service Worker", event);
});

self.addEventListener("fetch", function(event) {
  console.log(event.request.url);

  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
