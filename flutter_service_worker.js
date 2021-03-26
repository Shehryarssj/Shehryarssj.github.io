'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e6dc07484e450530ca3bfa0164a7a735",
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
".git/index": "701004469af808d711e4d66b971f2f50",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac651b373ae725f870bb6cabc4fd59de",
".git/logs/refs/heads/master": "ac651b373ae725f870bb6cabc4fd59de",
".git/logs/refs/remotes/origin/master": "363a551c4ec083c2e1d87ba95beb93e7",
".git/objects/03/cb73863d8c208496d95e4b441ff8df63f14ef0": "22613cd058ab42553c1caf4e2ecd92cc",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/47d6bf5064c37d3f7f671fa9dfec56f8834954": "b107848e9709e866e9bc35f5bec3e728",
".git/objects/05/3a764990adf4ad3da358538dc337790868c5ee": "4a4718c6e82f4e36202a4e19cc5e2aff",
".git/objects/0c/3cb46790e7141547d7b46dbd881dead98d09f2": "33555388f5f64c06fa4c94e29fad267e",
".git/objects/10/53f85c9453cc21b39c0494d0198cc11f16a826": "5aa9d320d7c9aeef552db374f2fc691e",
".git/objects/10/dff3041aadd85ae8b9d1242076d087308b02a6": "10585794591acc019efc837100bf9096",
".git/objects/13/fbab30614a78416af0effa5339907d947dd1ae": "e8b7cb3fed8fc1aaa1f3205164d952f1",
".git/objects/16/3956c233b3fa3ae1d0e9cd248270ff02bd1bf8": "c1dd9d859880621878409fea7dfd0c76",
".git/objects/16/8e09d5af52335cd5b617ebcf7e932ab82db54e": "757549585de6a50af8b1fd6a42124069",
".git/objects/18/bc7ab8edcc90eb5aff8746cc2e5a5f1b9fc023": "e36f83f5692a68838c9254e202521ded",
".git/objects/1a/8f8932b0bb8b481e61a22d01d8f8d48a9a1afb": "771de88294c3dfeed31b4422db506191",
".git/objects/20/5874fd1c2cd343a7c4bd5e7c379bdf4ea7fd97": "a105601f458ad2ef0e1d13e85f6e9a59",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/f31e4aa2d4e7693d76b8e4b4eb41c36351b493": "53a770cb80e4b45a8fdce26619ea5546",
".git/objects/25/964c5229ad6f1734cc54c3f17902e3fa5a7620": "5fb2d568c1a11a661cf5f30c56a5ec7b",
".git/objects/29/f82af0744753d7c710403aa32b35f10fa45db5": "ba578541cd43879c344c109a0df91c62",
".git/objects/2a/1b056eeb32ab229ced1941a3b9881f64ac29e0": "03ca31135f20a78e36b892355ac95490",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/39/1059a9ee5ca23536a267a94c52e868bcf754f9": "33f94d7a925877856012b65f2f3f48fc",
".git/objects/3b/9befb2481fee772372e929aff4f0862b7c8725": "0f1009ae2adaa161fd411ee7637479e8",
".git/objects/3c/752478c2c093295fb5b6f604e7ed868684775c": "9cbdae75d40c68d5cc0767099c0a680a",
".git/objects/42/1036be20998e7d07fc336462a91b80cdce4fd1": "ccec0f874515ce600e3e52da96292b41",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/43/7644a7d7c7bdaaac0504e559822165d5228655": "91150b95ecb38219282bbb7bf2b4f0ca",
".git/objects/45/11be48217e70edc968755c9299872e138cf863": "b921adf79d03fffaf21a617ebc56183d",
".git/objects/46/0cb998fbd219443ae0b97a4cf413ca6b2575bd": "64612f472d2c70ca091553e59a502e4a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/48/d2dff8ec5185a53cb4d4952e5fe9c12f22a3d2": "ae9d3db205bd91e16bba02cc20f74742",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4a/22a9e4ee011cb09e2fa30cfa06a7e610b98152": "8a1509b3eb15ba28782934ced1c7bff8",
".git/objects/4c/045e8b6caa25c764380e2f5f1d28dd7eb8441c": "ad3cc6f3fa2978e9eb8efee18d1bbc96",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4d/ec68f298e88b896cbc12d63796aeef1398fbfc": "fcdc10c266b26a625c76de67a3cd842a",
".git/objects/4e/de048b5498a6289476a7478576ecc48597454f": "7ea97ee14f43a7020ec671fdf663c687",
".git/objects/50/78309307f3abb460f7494f06e229af350abd43": "bf67f9cc2c53b6eaa4810d70f3b457db",
".git/objects/51/5814df204dc754cb01d19ec8d72b5dbc5c78ad": "62209822c419c3a28fec4c0dfb1f4646",
".git/objects/52/97a821292b972a946d4978c05d00409218ac24": "4cc33574301faf2f9d46c4bd09a2d677",
".git/objects/54/d6bab4976723a16ad659b2af830edfc754d0d8": "3149af7aae513c97febb5483bc903bb1",
".git/objects/56/f9ce01d0ca9cd5a133115deb05b3b052e5e412": "bd992e3d3e34f56fe520d3fc7a379394",
".git/objects/57/45dca4a28ca5faa8c6f007bfb1596e06642602": "7bc8811a1a16ef83a10a11f3fb418a78",
".git/objects/57/548f3cc90e3ffb55eb19b5704113aac29ee75c": "2cb77238f13c41dc7d55d255911fb548",
".git/objects/5b/0885ecd1d18297bac583639a650797df24c7f9": "702c9a11af877a4ee70a05be00176786",
".git/objects/5d/1d6c0cb6eb91f9b641c384c519695b108cdb65": "9b54bc241136dee049e6cc409cd38fee",
".git/objects/5f/82b63c23887b8adda640d4c2bfb61ad8f72c5a": "51dc49bafe79856050fc2bfcfdcf54c9",
".git/objects/61/79e8a8daed5bc562aa1edcbe093b8ca9dcada2": "7c2f437f9413ec46a5adab35858327ba",
".git/objects/62/be82f9c4c6b045af32e9f93b2b9af86ce416dc": "ac3026cd3104c5bed9fe317d75720a98",
".git/objects/69/36471fb65a17b503e04a0f0562400f1e36ea81": "d8d88516e66bdc10c541e1c3e901f7ee",
".git/objects/6c/1b1916706af8b072b3ce7b67043393ec872fa6": "f20f7ed8ab8b5025f9d647738dee0842",
".git/objects/6d/c7d9f7d433261d224fa21dca585e6193a13073": "9962e10ac9e295cd38e175b31e117dcf",
".git/objects/6e/5ba1d1c657b69fbb1861a20428e629175bf081": "18471aaa00093aef27cc66b750858b7c",
".git/objects/72/c4d3005403595a8976bfa3e91bb9a0fdca6e65": "046e901b9fee6590a51c624940fc7c08",
".git/objects/75/deed952d0aa2d7294fcf26bd0f74cfc96b17c1": "adab8d5638d8827a4b2ac221001badd4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/e5ba224a2676897b2efc1b3bda1d559496a9e6": "fdcada4bad11f08efbddfdc0055a6d39",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/ffb9bea5c454ba8b54334663037d2ad03645af": "51f2e9d6a51fa57bc3588524fa094667",
".git/objects/87/4669f19e829b0bf4faadd038ca97730cfb520f": "2d3f07ba9ee64119f6e81e7ceb70e08f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7606ef85d8eb050d5a075d9ed018d7988b809b": "a504640f0838f19ca54e5049d7205332",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/5be189b84d4b3be82468e6c7e2653b69a8144d": "8f6bb7c99f3c2d1fb70a67657cbc674d",
".git/objects/92/0e2db91f15ff455dd52e168a502651d1c9c58e": "eb7c8c04a85367562f58e46ecbe2b755",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/94/9bb06e879236ab7ff0c30c1713d27560eff244": "86ea318521a57060b7705cca575a97c4",
".git/objects/96/bf8ae2c8f5b9cdf41f042221977f289405f07b": "d23323de54832901db529d42cdebecc9",
".git/objects/97/92af4263313f85013e5ce1dc60facb0580dd21": "1a7b90f0a6a78df9b87572e68ffa1dd4",
".git/objects/99/4ef9a0291c3f06dc454d7c7e6c3ddf88911c2e": "220127e5906999cf7cd0aef4c20b019c",
".git/objects/9a/f4642c363d17cf888fe9615e7a9e472459e14d": "89d8643e69097123cb71c31c986a7130",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/8cfe1e5357a40fb554a6fd6b73b62f012f87de": "5d9652cc0cb1501e6044651d140590ff",
".git/objects/a5/231639ac97c5a7bbbfd80d1a0e9e5df5abe618": "c28cd486fb2502aa22945c6a4d7cb561",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/80a28d0894e6dcc76ac93282c1551ee1470bf4": "5b7b072efdd9488c7d2d6f05e69c3660",
".git/objects/ae/288c7aec0c3a74a44f59add448873285ae0d04": "f4de72671196ab853da7b7ef2cc27759",
".git/objects/b0/064ffd852f8fca1c0a337f6bdf58a02a21d3c0": "34a68011aade985aa1c64d502579fcd5",
".git/objects/b5/59c42b9e82adb601513dbb28bca012845b4087": "b24a7c80017d6cdc6fea227bb7d33674",
".git/objects/b5/d7e8d73323a1f571334eebc20e3f96f9251895": "45907ee9052e7637522f491990699492",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/910c482fb5047d3538febba8032c600ac4550e": "74751c4a2b0d55e21b3175a54a262bbc",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c4/2dc585a1e9b2f95e1ecdfc2c37e238786de439": "ea2a29ca7c273c1ea2a16c882c390752",
".git/objects/c4/9766a6cf8fdac289400b65d4eb1a6e339eb685": "332fd6507e526b279d295668f5f2d57a",
".git/objects/c8/ede88fadf25560db88b3ce9fd138e04af8a966": "267547bfc1a7eddbd8e77930fc5bb4a2",
".git/objects/c9/100535c06e4790507fee8be0217672d6d75436": "dd56598f93a53dd50e85b52235bb9226",
".git/objects/c9/e6dec716e2468e25ddf30f0e7ce152dc6f7156": "6a9d6f87c34389e67ddf38cc3ce8ff46",
".git/objects/ca/1759a133290c33c61b3369fd5a5c7ec3437887": "ac9fcc8c36e75a681b50a93d3acf2c5b",
".git/objects/d0/d22f2662dacdb0d99dcfd9c9de4ab34526a104": "b41c2da0049b8e39019a9dc69813fd7b",
".git/objects/d6/2cee9328520821e671e48ffd6628ed5c7a265b": "86a29a32f28ad2f72f9abcad692e14c8",
".git/objects/d9/8c5791fb1f3104d9511319209170a2c1f6a750": "b97dffde5981c53ffd75133affb5a5c0",
".git/objects/da/3673a1baec5d8992b71e6117916e4a602ac278": "ed0da78edca8bc11c3e197f795be340b",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/df/a5cd3c010ebb3a892837ab502deda6333e4548": "5e9ba8612fc74891c885e18818abaa3e",
".git/objects/e1/0c680686ee0d187e6a6af4313b685c26de4bf9": "6a01a33ca29cb45821133b228ab091b2",
".git/objects/e2/40e3b1285ac2a379d601658033ac6551169ae3": "650e2809f8afa2f0bdd018ba8f23b862",
".git/objects/e4/88fa83a76b2e5d1a25af6727788de96be3c469": "857a0e911a47081f2259bcb99b29612a",
".git/objects/e5/578fcbc30617fdf2b3865a604e039b1014c53b": "ebc8b0ebec81e859fabcf05488f81976",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b49670deb60dd991b9c8800659f35635c2b64a": "4928271ce306a9544a71da17295badc0",
".git/objects/eb/0e8103f5b51e2aa627a9aacefe36175ceb97cc": "5a0af9064c013e944c17bf13c7f2aca0",
".git/objects/ec/0fb45a1504192d17c9a659df2b5d6ebf176107": "381e380d7092b2f5028f6aa6a68d84c5",
".git/objects/ed/c9c2e805e0cbe3bf1683a110336b0f2bd8a1da": "77c5f8c5ad80b0bcd0b8d7b292d0298d",
".git/objects/ee/73e0ad2a733bb2945794dd1150dc6ddaf8af89": "2b37ccc40d8f695b358393d86c44021f",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/5f4a7b7175f0668f3f83ff1724ed248140a9ff": "ad3d5797d1f5c599aec068c83b8de982",
".git/objects/f3/69775a8bf3f10c390613ef67e9bb70974f741b": "d776496660f6b4c082330934685bb8a2",
".git/objects/f8/900119c689aea987783a9fe7c40c3e4e2c9da2": "25131a26215bd851928f57bf32725a1f",
".git/objects/fa/6343d022541f36f8b3c0e7d6cf3054ddfa3468": "7e00c36e39ea987848837250193bd57d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "c51c11b80eabc1c663968cbd56808055",
".git/refs/remotes/origin/master": "c51c11b80eabc1c663968cbd56808055",
"assets/AssetManifest.json": "65fe384ce3dcfdfed66e1ab6fcfe1cb6",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/images/1.1.jpg": "d9b5650d2b3fcb0f24f7801deb35f584",
"assets/assets/images/1.jpg": "dc3be4603274628db557e174256ebb3e",
"assets/assets/images/10.png": "85207f7d85ffe264f921729522226754",
"assets/assets/images/11.1.png": "f23cbf4023dbce4cdc8aae384af84a15",
"assets/assets/images/6.png": "18293a9acd48ac71167642903862d408",
"assets/assets/images/7.png": "2aa894398de470a67c2e81dc3c00e6e5",
"assets/assets/images/8.png": "f52c9487ab02d17317eb0bc8364bc05e",
"assets/assets/images/9.jpg": "7958632b22694d2661c81152d9417385",
"assets/assets/images/place_holder.jpg": "bfe86099d4ddae546c38eea8177ff8fd",
"assets/assets/images/place_holder1.jpg": "2276a4f953968841252126140b21a03b",
"assets/FontManifest.json": "909fe574fe2983cc28cfb25bd2aa9ec1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "09c41132a6b233746393894c485f137e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "91fda4082cb0c1882488f6026e93d814",
"/": "91fda4082cb0c1882488f6026e93d814",
"main.dart.js": "ce28c9af85c4d4443108b2084649d35d",
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
