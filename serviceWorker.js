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


self.addEventListener("fetch", fetchEvent => {
  console.log(fetchEvent)
  
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse

      fetch(fetchEvent.request).then(fetchedResponse => {
        cache.put(fetchedResponse.request, fetchedResponse.clone())
        return fetchedResponse
      })
    })
  )
})