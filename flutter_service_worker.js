'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3b7dc9cac370db1eee2a01537cdda23b",
".git/config": "b4bc1b3895de26e11b03fae33757eae3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "059daf73d94c294f0ff0c36516868c1b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e45c81d782d8bbfca8cfa34432c317db",
".git/logs/refs/heads/master": "e45c81d782d8bbfca8cfa34432c317db",
".git/logs/refs/remotes/origin/master": "30254a2b50f8abd2390856ba5d64d0da",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/47d6bf5064c37d3f7f671fa9dfec56f8834954": "b107848e9709e866e9bc35f5bec3e728",
".git/objects/05/3a764990adf4ad3da358538dc337790868c5ee": "4a4718c6e82f4e36202a4e19cc5e2aff",
".git/objects/0c/3cb46790e7141547d7b46dbd881dead98d09f2": "33555388f5f64c06fa4c94e29fad267e",
".git/objects/10/dff3041aadd85ae8b9d1242076d087308b02a6": "10585794591acc019efc837100bf9096",
".git/objects/13/fbab30614a78416af0effa5339907d947dd1ae": "e8b7cb3fed8fc1aaa1f3205164d952f1",
".git/objects/16/3956c233b3fa3ae1d0e9cd248270ff02bd1bf8": "c1dd9d859880621878409fea7dfd0c76",
".git/objects/18/bc7ab8edcc90eb5aff8746cc2e5a5f1b9fc023": "e36f83f5692a68838c9254e202521ded",
".git/objects/1a/8f8932b0bb8b481e61a22d01d8f8d48a9a1afb": "771de88294c3dfeed31b4422db506191",
".git/objects/20/5874fd1c2cd343a7c4bd5e7c379bdf4ea7fd97": "a105601f458ad2ef0e1d13e85f6e9a59",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/f31e4aa2d4e7693d76b8e4b4eb41c36351b493": "53a770cb80e4b45a8fdce26619ea5546",
".git/objects/25/964c5229ad6f1734cc54c3f17902e3fa5a7620": "5fb2d568c1a11a661cf5f30c56a5ec7b",
".git/objects/2a/1b056eeb32ab229ced1941a3b9881f64ac29e0": "03ca31135f20a78e36b892355ac95490",
".git/objects/3c/752478c2c093295fb5b6f604e7ed868684775c": "9cbdae75d40c68d5cc0767099c0a680a",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/43/7644a7d7c7bdaaac0504e559822165d5228655": "91150b95ecb38219282bbb7bf2b4f0ca",
".git/objects/46/0cb998fbd219443ae0b97a4cf413ca6b2575bd": "64612f472d2c70ca091553e59a502e4a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4a/22a9e4ee011cb09e2fa30cfa06a7e610b98152": "8a1509b3eb15ba28782934ced1c7bff8",
".git/objects/4c/045e8b6caa25c764380e2f5f1d28dd7eb8441c": "ad3cc6f3fa2978e9eb8efee18d1bbc96",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4e/de048b5498a6289476a7478576ecc48597454f": "7ea97ee14f43a7020ec671fdf663c687",
".git/objects/52/97a821292b972a946d4978c05d00409218ac24": "4cc33574301faf2f9d46c4bd09a2d677",
".git/objects/5b/0885ecd1d18297bac583639a650797df24c7f9": "702c9a11af877a4ee70a05be00176786",
".git/objects/5d/1d6c0cb6eb91f9b641c384c519695b108cdb65": "9b54bc241136dee049e6cc409cd38fee",
".git/objects/6e/5ba1d1c657b69fbb1861a20428e629175bf081": "18471aaa00093aef27cc66b750858b7c",
".git/objects/72/c4d3005403595a8976bfa3e91bb9a0fdca6e65": "046e901b9fee6590a51c624940fc7c08",
".git/objects/75/deed952d0aa2d7294fcf26bd0f74cfc96b17c1": "adab8d5638d8827a4b2ac221001badd4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/5be189b84d4b3be82468e6c7e2653b69a8144d": "8f6bb7c99f3c2d1fb70a67657cbc674d",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/96/bf8ae2c8f5b9cdf41f042221977f289405f07b": "d23323de54832901db529d42cdebecc9",
".git/objects/97/92af4263313f85013e5ce1dc60facb0580dd21": "1a7b90f0a6a78df9b87572e68ffa1dd4",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/8cfe1e5357a40fb554a6fd6b73b62f012f87de": "5d9652cc0cb1501e6044651d140590ff",
".git/objects/a5/231639ac97c5a7bbbfd80d1a0e9e5df5abe618": "c28cd486fb2502aa22945c6a4d7cb561",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/80a28d0894e6dcc76ac93282c1551ee1470bf4": "5b7b072efdd9488c7d2d6f05e69c3660",
".git/objects/ae/288c7aec0c3a74a44f59add448873285ae0d04": "f4de72671196ab853da7b7ef2cc27759",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/910c482fb5047d3538febba8032c600ac4550e": "74751c4a2b0d55e21b3175a54a262bbc",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c9/100535c06e4790507fee8be0217672d6d75436": "dd56598f93a53dd50e85b52235bb9226",
".git/objects/ca/1759a133290c33c61b3369fd5a5c7ec3437887": "ac9fcc8c36e75a681b50a93d3acf2c5b",
".git/objects/d6/2cee9328520821e671e48ffd6628ed5c7a265b": "86a29a32f28ad2f72f9abcad692e14c8",
".git/objects/d9/8c5791fb1f3104d9511319209170a2c1f6a750": "b97dffde5981c53ffd75133affb5a5c0",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/df/a5cd3c010ebb3a892837ab502deda6333e4548": "5e9ba8612fc74891c885e18818abaa3e",
".git/objects/e1/0c680686ee0d187e6a6af4313b685c26de4bf9": "6a01a33ca29cb45821133b228ab091b2",
".git/objects/e5/578fcbc30617fdf2b3865a604e039b1014c53b": "ebc8b0ebec81e859fabcf05488f81976",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b49670deb60dd991b9c8800659f35635c2b64a": "4928271ce306a9544a71da17295badc0",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f8/900119c689aea987783a9fe7c40c3e4e2c9da2": "25131a26215bd851928f57bf32725a1f",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "b82379389ba15a0924ffe07518ce5deb",
".git/refs/remotes/origin/master": "b82379389ba15a0924ffe07518ce5deb",
"assets/AssetManifest.json": "66bb633c6ba9299f3eb1eea44416fa86",
"assets/assets/images/1.1.jpg": "d9b5650d2b3fcb0f24f7801deb35f584",
"assets/assets/images/1.jpg": "dc3be4603274628db557e174256ebb3e",
"assets/assets/images/10.png": "f655d57e6f2d4860a0953f76af772037",
"assets/assets/images/11.1.png": "9b3747947e36a57333ce1df563f79a47",
"assets/assets/images/6.png": "18293a9acd48ac71167642903862d408",
"assets/assets/images/7.png": "2aa894398de470a67c2e81dc3c00e6e5",
"assets/assets/images/8.png": "f52c9487ab02d17317eb0bc8364bc05e",
"assets/assets/images/9.jpg": "7958632b22694d2661c81152d9417385",
"assets/assets/images/place_holder.jpg": "bfe86099d4ddae546c38eea8177ff8fd",
"assets/assets/images/place_holder1.jpg": "2276a4f953968841252126140b21a03b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "09c41132a6b233746393894c485f137e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "6efa17b69916a0431ec0183585accbfc",
"/": "6efa17b69916a0431ec0183585accbfc",
"main.dart.js": "372be4dd2076457ef6619721126f513f",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
