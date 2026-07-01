const CACHE='brosin-v1';
const ASSETS=['./','index.html','clubs-data.js','manifest.webmanifest','icon.svg','formulario.html'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS).catch(function(){});}));
  self.skipWaiting();
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));}));
  self.clients.claim();
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET') return;
  e.respondWith(
    caches.match(e.request).then(function(r){
      return r || fetch(e.request).then(function(resp){
        var cp=resp.clone();
        caches.open(CACHE).then(function(c){ try{c.put(e.request,cp);}catch(_){} });
        return resp;
      }).catch(function(){ return caches.match('index.html'); });
    })
  );
});
