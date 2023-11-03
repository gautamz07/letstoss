const YoloToss = "lets-toss"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/scripts.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(YoloToss).then(cache => {
      cache.addAll(assets)
    })
  )
})