const CACHE_VERSION = "voyage-chine-2026-v4";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/leaflet/leaflet.css",
  "./assets/leaflet/leaflet.js",
  "./assets/leaflet/images/layers.png",
  "./assets/leaflet/images/layers-2x.png",
  "./assets/leaflet/images/marker-icon.png",
  "./assets/leaflet/images/marker-icon-2x.png",
  "./assets/leaflet/images/marker-shadow.png",
  "./assets/icons/icon.svg",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/images/bund-hero.jpg",
  "./assets/images/xintiandi.jpg",
  "./assets/images/yu-garden.jpg",
  "./assets/images/shanghai-museum.jpg",
  "./assets/images/shanghai-tower.jpg",
  "./assets/images/jingan-temple.jpg",
  "./assets/images/red-panda.jpg",
  "./assets/images/shanghai-wild-animal-park.jpg",
  "./assets/images/zhujiajiao.jpg",
  "./assets/images/chenshan.jpg",
  "./assets/images/qianmen.jpg",
  "./assets/images/forbidden-city.jpg",
  "./assets/images/jingshan.jpg",
  "./assets/images/temple-of-heaven.jpg",
  "./assets/images/beihai.jpg",
  "./assets/images/lama-temple.jpg",
  "./assets/images/summer-palace.jpg",
  "./assets/images/mutianyu.jpg",
  "./assets/images/art-798.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key)))
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (request.method !== "GET") {
    return;
  }

  const url = new URL(request.url);

  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request));
    return;
  }

  if (url.hostname.endsWith("tile.openstreetmap.org")) {
    event.respondWith(networkThenCache(request, "voyage-chine-tiles"));
  }
});

async function cacheFirst(request) {
  const cache = await caches.open(CACHE_VERSION);
  const cached = await cache.match(request, { ignoreSearch: true });

  if (cached) {
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    if (request.mode === "navigate") {
      return cache.match("./index.html");
    }
    throw error;
  }
}

async function networkThenCache(request, cacheName) {
  const cache = await caches.open(cacheName);

  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}
