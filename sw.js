const cacheName = "music";
const cacheUrls = [
  "./",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Mat%20Kar%20Tu%20%20Anup%20.mp3?alt=media&token=6cab709b-967a-4391-af4e-7e9b89b99c44",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Jubin%20Nautiyal%20Main%20Balak%20Tu%20Mata.mp3?alt=media&token=728f01c1-3735-492a-8173-4468f4357e0b",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Jubin%20Nautiyal%20Mere%20Ghar%20Ram%20Aaye%20Hain.mp3?alt=media&token=ca2113f2-98a2-4088-8dba-fa8feb6f8c16",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/Meri%20Maa%20Ke%20Barabar%20Koi%20Nahi.mp3?alt=media&token=356ecd70-f0b6-466a-ad7f-db2d149c3070",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/%E0%A4%AE%E0%A4%A4%E0%A4%95%E0%A4%B0%20%E0%A4%85%E0%A4%AD%E0%A4%BF%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%20%E0%A4%B0%E0%A5%87%20%E0%A4%AC%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%87%20%20%E0%A4%AE%E0%A5%87%E0%A4%A8%E0%A5%81%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A5%8C%E0%A4%A1%E0%A4%B2%20.mp3?alt=media&token=3e4ddab4-3faf-4e35-9a0c-2b672ab49743",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song1.mp3?alt=media&token=89ccded3-70fc-4fac-a5c1-9161ee309447",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song2.mp3?alt=media&token=4a8989e6-2ce0-445d-9309-dcea5eabdebb",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song3.mp3?alt=media&token=20287d0a-fc52-48af-8749-23048f34a6d7",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song4.mp3?alt=media&token=029ee089-2f89-49f5-88b1-6a1bbbb00068",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song5.mp3?alt=media&token=ab9c6056-702b-4a7a-b8f7-7ce443d2789b",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song6.mp3?alt=media&token=84a27880-411d-43ef-8739-aeefb4fe2e9d",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song7.mp3?alt=media&token=c6982351-51d8-4e44-8072-3d9b37ac35aa",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song8.mp3?alt=media&token=7a398817-c092-4e39-9b77-89d7ae86da0e",
  "https://firebasestorage.googleapis.com/v0/b/music-cf108.appspot.com/o/song9.mp3?alt=media&token=703c8a13-560b-4478-baec-3278182d9d67",
  


  "./css/style.css",
  "./js/script.js",
  "./images/poster-1.jpg",
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
  "./images/7.jpg",
  "./images/8.jpg",
  "./images/9.jpg",
  "./images/10.jpg",
  "./images/11.jpg",
  "./images/12.jpg",
  "./images/13.jpg",
  "./images/14.jpg",
  "./images/post-2.jpg",


  "./favicon.svg",
  "./index.html",
  
];

// Installing the Service Worker
self.addEventListener("install", async (event) => {
  try {
    const cache = await caches.open(cacheName);
    await cache.addAll(cacheUrls);
  } catch (error) {
    console.error("Service Worker installation failed:", error);
  }
});

// Fetching resources
self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(cacheName);

      try {
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
          console.log("cachedResponse: ", event.request.url);
          return cachedResponse;
        }

        const fetchResponse = await fetch(event.request);
        if (fetchResponse) {
          console.log("fetchResponse: ", event.request.url);
          await cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        }
      } catch (error) {
        console.log("Fetch failed: ", error);
        const cachedResponse = await cache.match("index.html");
        return cachedResponse;
      }
    })()
  );
});
