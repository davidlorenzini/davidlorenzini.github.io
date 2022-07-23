const staticSiteCache = "static-site-cache-v1"
const assets = [
  "/",
  "/index.html",
  "/images/icons/192.png",
  "/images/icons/512.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticSiteCache).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", event => {
  console.log(event)
  
  event.respondWith(caches.open(cacheName).then(cache => {
    // Go to the cache first
    return cache.match(event.request.url).then(cachedResponse => {
      // Return a cached response if we have one
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise, hit the network
      return fetch(event.request).then(fetchedResponse => {
        // Add the network response to the cache for later visits
        cache.add(event.request, fetchedResponse.clone())

        // Return the network response
        return fetchedResponse
      })
    })
  }))
})