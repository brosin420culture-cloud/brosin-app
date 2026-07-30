/* ===========================================================
   BROSIN · service worker
   Diseñado para NO poder dejar a nadie atrapado en una versión vieja:
   · el HTML va SIEMPRE a la red primero (si hay red, ves lo último)
   · solo los archivos estáticos se sirven de caché
   · al activarse borra cualquier caché que no sea la de esta versión
   Si algo fuera mal, sustituye este archivo por sw-limpieza.js:
   ese desregistra el service worker y borra todo.
   =========================================================== */
var VERSION = 'brosin-preview-2137-3';
var SHELL = [
  './', './index.html', './clubs-data.js', './brosin-cluster.js', './brosin-i18n.js', './brosin-app-i18n.js', './brosin-saber.js',
  './manifest.webmanifest', './formulario.html',
  './assets/logo-amarillo.png', './assets/ojo-amarillo.png',
  './assets/icon-192.png', './assets/icon-512.png', './assets/favicon-48.png',
  './assets/fonts/poppins-400.woff', './assets/fonts/poppins-500.woff', './assets/fonts/poppins-700.woff',
  './assets/leaflet/leaflet.js', './assets/leaflet/leaflet.css'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION)
      /* addAll falla entero si un solo archivo falta: se guardan uno a uno */
      .then(function (c) { return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); })); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== VERSION; })
                                                 .map(function (k) { return caches.delete(k); })); })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url;
  try { url = new URL(req.url); } catch (err) { return; }

  /* Teselas del mapa y CDNs: directo a la red, nunca a caché */
  if (url.origin !== self.location.origin) return;

  /* Navegación (el HTML): red primero, caché solo si no hay conexión */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (r) {
        var copy = r.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy).catch(function () {}); });
        return r;
      }).catch(function () {
        return caches.match(req).then(function (r) { return r || caches.match('./index.html'); });
      })
    );
    return;
  }

  /* Resto de archivos propios: caché primero (son rápidos y cambian con la versión) */
  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (r) {
        if (r && r.status === 200 && r.type === 'basic') {
          var copy = r.clone();
          caches.open(VERSION).then(function (c) { c.put(req, copy).catch(function () {}); });
        }
        return r;
      });
    }).catch(function () { return caches.match('./index.html'); })
  );
});
