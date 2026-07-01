/* Service worker · network-first (siempre datos frescos, con copia de reserva offline) */
const CACHE='brosin-v3';
self.addEventListener('install',function(e){ self.skipWaiting(); });
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
  }));
  self.clients.claim();
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET') return;
  e.respondWith(
    fetch(e.request).then(function(resp){
      var cp=resp.clone();
      caches.open(CACHE).then(function(c){ try{ c.put(e.request, cp); }catch(_){}});
      return resp;
    }).catch(function(){
      return caches.match(e.request).then(function(r){ return r || caches.match('index.html'); });
    })
  );
});
