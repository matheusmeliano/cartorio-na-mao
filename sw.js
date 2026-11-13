const CACHE_NAME = 'cartorio-na-mao-demo-v2';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(name=>name!==CACHE_NAME).map(name=>caches.delete(name)))));self.clients.claim()});
self.addEventListener('fetch',event=>{if(event.request.method==='GET' && new URL(event.request.url).origin===location.origin){event.respondWith(caches.match(event.request).then(hit=>hit||fetch(event.request)))}});
