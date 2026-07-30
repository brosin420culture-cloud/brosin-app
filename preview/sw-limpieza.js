/* Brosin · service worker de LIMPIEZA — borra cachés antiguas y se desregistra */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(event){
  event.waitUntil((async function(){
    try{
      var keys = await caches.keys();
      await Promise.all(keys.map(function(k){ return caches.delete(k); }));
      await self.registration.unregister();
      var wins = await self.clients.matchAll({ type: 'window' });
      wins.forEach(function(c){ try{ c.navigate(c.url); }catch(e){} });
    }catch(e){}
  })());
});
