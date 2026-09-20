// Route log service worker: lets the app open with no internet connection.
// Firestore handles offline data itself; this file only keeps the app's own files available.
const CACHE = 'routelog-v3';
const FIREBASE_VERSION = '10.12.2';
const SHELL = ['./', './index.html'];
const FIREBASE_FILES = ['firebase-app.js', 'firebase-auth.js', 'firebase-firestore.js']
  .map(f => `https://www.gstatic.com/firebasejs/${FIREBASE_VERSION}/${f}`);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL).catch(() => {});
    await Promise.all(FIREBASE_FILES.map(url =>
      fetch(url, {mode: 'cors'}).then(res => res.ok && cache.put(url, res)).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k.startsWith('routelog-') && k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);

  // The app page itself: try the network first so updates arrive, fall back to the saved copy.
  if(url.origin === self.location.origin && (req.mode === 'navigate' || url.pathname.endsWith('/index.html'))){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try{
        const res = await fetch(req);
        if(res.ok) cache.put('./index.html', res.clone());
        return res;
      }catch(e){
        return (await cache.match('./index.html')) || (await cache.match('./')) || Response.error();
      }
    })());
    return;
  }

  // Firebase code files are versioned and never change: use the saved copy when there is one.
  if(url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/')){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      if(hit) return hit;
      const res = await fetch(req);
      if(res.ok) cache.put(req, res.clone());
      return res;
    })());
    return;
  }

  // Fonts: use the saved copy straight away and refresh it in the background.
  if(url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com'){
    event.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      const refresh = fetch(req).then(res => { if(res.ok || res.type === 'opaque') cache.put(req, res.clone()); return res; }).catch(() => hit);
      return hit || refresh;
    })());
  }
  // Everything else (including Firestore and sign-in traffic) goes straight to the network.
});
