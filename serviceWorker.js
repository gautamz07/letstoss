const LetsToss = "lets-toss"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/scripts.js",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(LetsToss).then(cache => {
      cache.addAll(assets)
    })
  )
})