self.addEventListener("install", function(event) {
  console.log("Installing Service Worker", event);
});

self.addEventListener("activate", function(event) {
  console.log("Activating Service Worker", event);
});
