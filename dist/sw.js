(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.3"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.2"]&&_()}catch(e){}},552:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.2"]&&_()}catch(e){}},253:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.2"]&&_()}catch(e){}},35:()=>{try{self["workbox:core:6.5.2"]&&_()}catch(e){}}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,s),n.exports}(()=>{s(552);class e extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}const t={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>{return e||(s=t.precache,[t.prefix,s,t.suffix].filter((e=>e&&e.length>0)).join("-"));var s};function a(e,t){const s=t();return e.waitUntil(s),s}function n(t){if(!t)throw new e("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:s,url:r}=t;if(!r)throw new e("add-to-cache-list-unexpected-type",{entry:t});if(!s){const e=new URL(r,location.href);return{cacheKey:e.href,url:e.href}}const a=new URL(r,location.href),n=new URL(r,location.href);return a.searchParams.set("__WB_REVISION__",s),{cacheKey:a.href,url:n.href}}s(977);class i{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class c{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let o;s(35);const h={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=e=>{return e||(t=h.runtime,[h.prefix,t,h.suffix].filter((e=>e&&e.length>0)).join("-"));var t};class u extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}function f(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class d{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const p=new Set;function g(e){return"string"==typeof e?new Request(e):e}s(873);class y{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new d,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let s=g(e);if("navigate"===s.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const r=this.hasCallback("fetchDidFail")?s.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))s=await e({request:s.clone(),event:t})}catch(e){if(e instanceof Error)throw new u("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const a=s.clone();try{let e;e=await fetch(s,"navigate"===s.mode?void 0:this._strategy.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:t,request:a,response:e});return e}catch(e){throw r&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:r.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=g(e);let s;const{cacheName:r,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i=Object.assign(Object.assign({},a),{cacheName:r});s=await caches.match(n,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:r,matchOptions:a,cachedResponse:s,request:n,event:this.event})||void 0;return s}async cachePut(e,t){const s=g(e);await(0,new Promise((e=>setTimeout(e,0))));const r=await this.getCacheKey(s,"write");if(!t)throw new u("cache-put-with-no-response",{url:(a=r.url,new URL(String(a),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var a;const n=await this._ensureResponseSafeToCache(t);if(!n)return!1;const{cacheName:i,matchOptions:c}=this._strategy,o=await self.caches.open(i),h=this.hasCallback("cacheDidUpdate"),l=h?await async function(e,t,s,r){const a=f(t.url,s);if(t.url===a)return e.match(t,r);const n=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await e.keys(t,n);for(const t of i)if(a===f(t.url,s))return e.match(t,r)}(o,r.clone(),["__WB_REVISION__"],c):null;try{await o.put(r,h?n.clone():n)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of p)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:i,oldResponse:l,newResponse:n.clone(),request:r,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=g(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[s]=r}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),r=r=>{const a=Object.assign(Object.assign({},r),{state:s});return t[e](a)};yield r}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class w extends class{constructor(e={}){this.cacheName=l(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,r="params"in e?e.params:void 0,a=new y(this,{event:t,request:s,params:r}),n=this._getResponse(a,s,t);return[n,this._awaitComplete(n,a,s,t)]}async _getResponse(e,t,s){let r;await e.runCallbacks("handlerWillStart",{event:s,request:t});try{if(r=await this._handle(t,e),!r||"error"===r.type)throw new u("no-response",{url:t.url})}catch(a){if(a instanceof Error)for(const n of e.iterateCallbacks("handlerDidError"))if(r=await n({error:a,event:s,request:t}),r)break;if(!r)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))r=await a({event:s,request:t,response:r});return r}async _awaitComplete(e,t,s,r){let a,n;try{a=await e}catch(n){}try{await t.runCallbacks("handlerDidRespond",{event:r,request:s,response:a}),await t.doneWaiting()}catch(e){e instanceof Error&&(n=e)}if(await t.runCallbacks("handlerDidComplete",{event:r,request:s,response:a,error:n}),t.destroy(),n)throw n}}{constructor(e={}){e.cacheName=r(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){return await t.cacheMatch(e)||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(t,s){let r;const a=s.params||{};if(!this._fallbackToNetwork)throw new e("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{const e=a.integrity,n=t.integrity,i=!n||n===e;r=await s.fetch(new Request(t,{integrity:n||e})),e&&i&&(this._useDefaultCacheabilityPluginIfNeeded(),await s.cachePut(t,r.clone()))}return r}async _handleInstall(t,s){this._useDefaultCacheabilityPluginIfNeeded();const r=await s.fetch(t);if(!await s.cachePut(t,r.clone()))throw new e("bad-precaching-response",{url:t.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,r]of this.plugins.entries())r!==w.copyRedirectedCacheableResponsesPlugin&&(r===w.defaultPrecacheCacheabilityPlugin&&(e=s),r.cacheWillUpdate&&t++);0===t?this.plugins.push(w.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}w.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},w.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:t})=>t.redirected?await async function(t,s){let r=null;if(t.url&&(r=new URL(t.url).origin),r!==self.location.origin)throw new e("cross-origin-copy-response",{origin:r});const a=t.clone(),n={headers:new Headers(a.headers),status:a.status,statusText:a.statusText},i=s?s(n):n,c=function(){if(void 0===o){const e=new Response("");if("body"in e)try{new Response(e.body),o=!0}catch(e){o=!1}o=!1}return o}()?a.body:await a.blob();return new Response(c,i)}(t):t};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new w({cacheName:r(e),plugins:[...t,new c({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const s=[];for(const r of t){"string"==typeof r?s.push(r):r&&void 0===r.revision&&s.push(r.url);const{cacheKey:t,url:a}=n(r),i="string"!=typeof r&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(a)&&this._urlsToCacheKeys.get(a)!==t)throw new e("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(a),secondEntry:t});if("string"!=typeof r&&r.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==r.integrity)throw new e("add-to-cache-list-conflicting-integrities",{url:a});this._cacheKeysToIntegrities.set(t,r.integrity)}if(this._urlsToCacheKeys.set(a,t),this._urlsToCacheModes.set(a,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return a(e,(async()=>{const t=new i;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const r=this._cacheKeysToIntegrities.get(s),a=this._urlsToCacheModes.get(t),n=new Request(t,{integrity:r,cache:a,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:n,event:e}))}const{updatedURLs:s,notUpdatedURLs:r}=t;return{updatedURLs:s,notUpdatedURLs:r}}))}activate(e){return a(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),r=[];for(const a of t)s.has(a.url)||(await e.delete(a),r.push(a.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s)return(await self.caches.open(this.strategy.cacheName)).match(s)}createHandlerBoundToURL(t){const s=this.getCacheKeyForURL(t);if(!s)throw new e("non-precached-url",{url:t});return e=>(e.request=new Request(t),e.params=Object.assign({cacheKey:s},e.params),this.strategy.handle(e))}}let _;const R=()=>(_||(_=new m),_);s(253);class v extends Error{constructor(e,t){super(((e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s})(e,t)),this.name=e,this.details=t}}s(80);const C=e=>e&&"object"==typeof e?e:{handle:e};class b{constructor(e,t,s="GET"){this.handler=C(t),this.match=e,this.method=s}setCatchHandler(e){this.catchHandler=C(e)}}class q extends b{constructor(e,t,s){super((({url:t})=>{const s=e.exec(t.href);if(s&&(t.origin===location.origin||0===s.index))return s.slice(1)}),t,s)}}class U{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,s=this.handleRequest({request:t,event:e});s&&e.respondWith(s)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,s=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const s=new Request(...t);return this.handleRequest({request:s,event:e})})));e.waitUntil(s),e.ports&&e.ports[0]&&s.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const s=new URL(e.url,location.href);if(!s.protocol.startsWith("http"))return;const r=s.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:r,url:s});let i=n&&n.handler;const c=e.method;if(!i&&this._defaultHandlerMap.has(c)&&(i=this._defaultHandlerMap.get(c)),!i)return;let o;try{o=i.handle({url:s,request:e,event:t,params:a})}catch(e){o=Promise.reject(e)}const h=n&&n.catchHandler;return o instanceof Promise&&(this._catchHandler||h)&&(o=o.catch((async r=>{if(h)try{return await h.handle({url:s,request:e,event:t,params:a})}catch(e){e instanceof Error&&(r=e)}if(this._catchHandler)return this._catchHandler.handle({url:s,request:e,event:t});throw r}))),o}findMatchingRoute({url:e,sameOrigin:t,request:s,event:r}){const a=this._routes.get(s.method)||[];for(const n of a){let a;const i=n.match({url:e,sameOrigin:t,request:s,event:r});if(i)return a=i,(Array.isArray(a)&&0===a.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:n,params:a}}return{}}setDefaultHandler(e,t="GET"){this._defaultHandlerMap.set(t,C(e))}setCatchHandler(e){this._catchHandler=C(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new v("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new v("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}let L;class k extends b{constructor(e,t){super((({request:s})=>{const r=e.getURLsToCacheKeys();for(const a of function*(e,{ignoreURLParametersMatching:t=[/^utm_/,/^fbclid$/],directoryIndex:s="index.html",cleanURLs:r=!0,urlManipulation:a}={}){const n=new URL(e,location.href);n.hash="",yield n.href;const i=function(e,t=[]){for(const s of[...e.searchParams.keys()])t.some((e=>e.test(s)))&&e.searchParams.delete(s);return e}(n,t);if(yield i.href,s&&i.pathname.endsWith("/")){const e=new URL(i.href);e.pathname+=s,yield e.href}if(r){const e=new URL(i.href);e.pathname+=".html",yield e.href}if(a){const e=a({url:n});for(const t of e)yield t.href}}(s.url,t)){const t=r.get(a);if(t)return{cacheKey:t,integrity:e.getIntegrityForCacheKey(t)}}}),e.strategy)}}var x;s(913),Error,new Set,"undefined"!=typeof registration&&registration.scope,self.addEventListener("activate",(()=>self.clients.claim())),self.skipWaiting(),x=[{'revision':'2982185896f55ad23b2760280b581508','url':'images/icons/192.png'},{'revision':'df37fc67be55987ed8ada89175ee72f2','url':'images/icons/512.png'},{'revision':'8e9f62cda112f83a2d3f097d685b1e89','url':'index.html'},{'revision':'cfe14f3a749d2d8ef6a0910cf7458e8e','url':'main.js'},{'revision':'5f2e3dcb5424f61365cf4e64e176dc1e','url':'manifest.json'}],R().precache(x),function(e){const t=R();!function(e,t,s){let r;if("string"==typeof e){const a=new URL(e,location.href);r=new b((({url:e})=>e.href===a.href),t,s)}else if(e instanceof RegExp)r=new q(e,t,s);else if("function"==typeof e)r=new b(e,t,s);else{if(!(e instanceof b))throw new v("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});r=e}(L||(L=new U,L.addFetchListener(),L.addCacheListener()),L).registerRoute(r)}(new k(t,e))}(undefined)})()})();