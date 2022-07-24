const cacheName = "static-site-cache-v1"
const assets = [
  "/",
  "/index.html",
  "/images/icons/192.png",
  "/images/icons/512.png",
  "https://cdn.jsdelivr.net/npm/idb@7/build/umd.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets)
    })
  )
})


self.addEventListener("fetch", event => {
  console.log(event)
  networkFirst(event)
  
})

function networkFirst(event) {
  event.respondWith(caches.open(cacheName).then(cache => {
    fetch(event.request).then(fetchedRes => {
      cache.add(event.request, fetchedRes.clone())
      return fetchedRes
    }).catch(err => {
      cache.match(event.request.url).then(cachedRes => cachedRes)
    })
  }))
}

function cacheFirst(event) {
  event.respondWith(caches.open(cacheName).then(cache => {
    // Go to the cache first
    return cache.match(event.request.url).then(cachedRes => {
      // Return a cached response if we have one
      if (cachedRes) {
        return cachedRes;
      }

      // Otherwise, hit the network
      return fetch(event.request).then(fetchedRes => {
        // Add the network response to the cache for later visits
        cache.add(event.request, fetchedRes.clone())

        // Return the network response
        return fetchedRes
      })
    })
  }))
}