const CACHE_NAME='v1_cache_skullheart',
urlsToCache = [
    './',
    './main.js',
    './skullheart.PNG'
]
//Instalador del SW en cache
self.addEventListener('install', e=>{
    e.waitUntil(
        cahes.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(() =>self.skipWaiting())
        })
        .catch(err => console.warn('Error al tratar de registrar el SW'))
    )
})
//Gracias a la ayuda del cache, se puede ejecutar sin conexión
self.addEventListener('avtivate', e=>{
    const cacheWhitelist=[CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cachesNames=>{
            cachesNames.map(cacheName=>{
                if(cacheWhitelist.indexOf(cacheName)===-1){
                    return caches.delete(cacheName)
                }
            })
        })
        .then(() => self.clients.claim())
    )
})
//Ayuda a recuperar una url
self.addEventListener('fetch', e=>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res){
                return res
            }
            return fetch(e.request)
        })
    )
})