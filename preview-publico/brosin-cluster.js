/* ===========================================================
   BROSIN · agrupación de pines (clustering)
   Sin dependencias: usa la misma proyección Web Mercator que
   Leaflet (EPSG:3857, teselas de 256 px), así que las celdas
   coinciden exactamente con lo que se ve en pantalla.
   =========================================================== */
(function (root) {
  'use strict';

  var TILE = 256;

  /* lat/lng → píxeles absolutos en el nivel de zoom dado */
  function project(lat, lng, zoom) {
    var s = TILE * Math.pow(2, zoom);
    var sinLat = Math.sin(lat * Math.PI / 180);
    sinLat = Math.max(-0.9999, Math.min(0.9999, sinLat));   // evita infinito en los polos
    return {
      x: (lng + 180) / 360 * s,
      y: (0.5 - Math.log((1 + sinLat) / (1 - sinLat)) / (4 * Math.PI)) * s
    };
  }

  /* píxeles → lat/lng (para colocar el globo del grupo) */
  function unproject(x, y, zoom) {
    var s = TILE * Math.pow(2, zoom);
    var n = Math.PI - 2 * Math.PI * y / s;
    return {
      lat: 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))),
      lng: x / s * 360 - 180
    };
  }

  /* Agrupa por rejilla de píxeles. Devuelve grupos y sueltos ya listos
     para pintar. cell = lado de la celda en px (64 ≈ dos pines de ancho).
     A partir de stopAt se deja de agrupar: a ese zoom ya se ve la calle y
     el usuario quiere el local concreto, no un número. */
  function clusterize(points, zoom, cell, stopAt) {
    cell = cell || 64;
    stopAt = stopAt == null ? 16 : stopAt;
    var buckets = Object.create(null), out = [], i, p, pt, key, b;

    if (zoom >= stopAt) {
      for (i = 0; i < points.length; i++) {
        p = points[i];
        if (typeof p.lat !== 'number' || typeof p.lng !== 'number') continue;
        out.push({ single: p, count: 1, lat: p.lat, lng: p.lng });
      }
      return out;
    }

    for (i = 0; i < points.length; i++) {
      p = points[i];
      if (typeof p.lat !== 'number' || typeof p.lng !== 'number') continue;
      pt = project(p.lat, p.lng, zoom);
      key = Math.floor(pt.x / cell) + ':' + Math.floor(pt.y / cell);
      b = buckets[key];
      if (b) {
        b.items.push(p); b.sx += pt.x; b.sy += pt.y;
        if (p.lat < b.s) b.s = p.lat; if (p.lat > b.n) b.n = p.lat;
        if (p.lng < b.w) b.w = p.lng; if (p.lng > b.e) b.e = p.lng;
      } else {
        buckets[key] = { items: [p], sx: pt.x, sy: pt.y, s: p.lat, n: p.lat, w: p.lng, e: p.lng };
      }
    }

    /* El grupo se dibuja en el centro de masa de sus locales, pero sin
       alejarse más de SLACK de la mitad de su celda. Sin este freno, dos
       centroides de celdas vecinas pueden acabar pegados y los hexágonos se
       tapan entre sí. Con SLACK=0.25 quedan siempre a >=0.75*celda (48 px),
       más que el panal más grande (46 px), así que no pueden solaparse. */
    var SLACK = 0.25;
    for (key in buckets) {
      b = buckets[key];
      if (b.items.length === 1) {
        out.push({ single: b.items[0], count: 1, lat: b.items[0].lat, lng: b.items[0].lng });
      } else {
        var n = b.items.length;
        var kx = key.split(':');
        var ccx = (+kx[0] + 0.5) * cell, ccy = (+kx[1] + 0.5) * cell;   // centro de la celda
        var lim = SLACK * cell / 2;
        var px = ccx + Math.max(-lim, Math.min(lim, b.sx / n - ccx));
        var py = ccy + Math.max(-lim, Math.min(lim, b.sy / n - ccy));
        var c = unproject(px, py, zoom);
        out.push({
          single: null, count: n, items: b.items,
          lat: c.lat, lng: c.lng,
          bounds: [[b.s, b.w], [b.n, b.e]]
        });
      }
    }
    /* los grupos grandes se pintan primero para que los sueltos queden encima */
    out.sort(function (a, z) { return z.count - a.count; });
    return out;
  }

  root.BrosinCluster = { project: project, unproject: unproject, clusterize: clusterize };

})(typeof window !== 'undefined' ? window : globalThis);

if (typeof module !== 'undefined' && module.exports) module.exports = globalThis.BrosinCluster;
