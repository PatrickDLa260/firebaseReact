(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1338:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>f,pages:()=>u,routeModule:()=>d,tree:()=>l}),r(5480),r(2029),r(5866);var n=r(3191),i=r(8716),a=r(7922),o=r.n(a),s=r(5231),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);r.d(t,c);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"C:\\Users\\patri\\test1\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"C:\\Users\\patri\\test1\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\patri\\test1\\src\\app\\page.tsx"],f="/page",p={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5875:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},4264:(e,t,r)=>{Promise.resolve().then(r.bind(r,9394))},5813:(e,t,r)=>{Promise.resolve().then(r.bind(r,2169))},2169:(e,t,r)=>{"use strict";let n,i,a;r.r(t),r.d(t,{default:()=>tG});var o,s,c,l=r(326),u=r(7577);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},p=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){let a=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(a>>10)),t[n++]=String.fromCharCode(56320+(1023&a))}else{let a=e[r++],o=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&o)}}return t.join("")},d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],a=t+1<e.length,o=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4,f=(15&o)<<2|c>>6,p=63&c;s||(p=64,a||(f=64)),n.push(r[l],r[u],r[f],r[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(f(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):p(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],a=t<e.length?r[e.charAt(t)]:0,o=++t<e.length?r[e.charAt(t)]:64,s=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==a||null==o||null==s)throw new h;let c=i<<2|a>>4;if(n.push(c),64!==o){let e=a<<4&240|o>>2;if(n.push(e),64!==s){let e=o<<6&192|s;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class h extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let g=function(e){let t=f(e);return d.encodeByteArray(t,!0)},m=function(e){return g(e).replace(/\./g,"")},b=function(e){try{return d.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},y=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,v=()=>{if("undefined"==typeof process||void 0===process.env)return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},w=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&b(e[1]);return t&&JSON.parse(t)},E=()=>{try{return y()||v()||w()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},_=()=>{var e;return null===(e=E())||void 0===e?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}function I(){try{return"object"==typeof indexedDB}catch(e){return!1}}function A(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})}class P extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],a=i?i.replace(C,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",o=`${this.serviceName}: ${a} (${n}).`;return new P(n,o,r)}}let C=/\{\$([^}]+)}/g;function T(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],a=t[i];if(O(r)&&O(a)){if(!T(r,a))return!1}else if(r!==a)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function O(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){return e&&e._delegate?e._delegate:e}class k{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new S;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;let r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:D})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=D){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=D){return this.instances.has(e)}getOptions(e=D){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){var r;let n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&e(a,n),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===D?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}return r||null}normalizeInstanceIdentifier(e=D){return this.component?this.component.multipleInstances?e:D:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new j(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N=[];!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(o||(o={}));let $={debug:o.DEBUG,verbose:o.VERBOSE,info:o.INFO,warn:o.WARN,error:o.ERROR,silent:o.SILENT},L=o.INFO,U={[o.DEBUG]:"log",[o.VERBOSE]:"log",[o.INFO]:"info",[o.WARN]:"warn",[o.ERROR]:"error"},F=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=U[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class B{constructor(e){this.name=e,this._logLevel=L,this._logHandler=F,this._userLogHandler=null,N.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in o))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,o.DEBUG,...e),this._logHandler(this,o.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,o.VERBOSE,...e),this._logHandler(this,o.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,o.INFO,...e),this._logHandler(this,o.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,o.WARN,...e),this._logHandler(this,o.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,o.ERROR,...e),this._logHandler(this,o.ERROR,...e)}}let H=(e,t)=>t.some(t=>e instanceof t),q=new WeakMap,W=new WeakMap,z=new WeakMap,K=new WeakMap,V=new WeakMap,G={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return W.get(e);if("objectStoreNames"===t)return e.objectStoreNames||z.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return X(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function X(e){var t;if(e instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",a)},i=()=>{t(X(e.result)),n()},a=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",a)});return t.then(t=>{t instanceof IDBCursor&&q.set(t,e)}).catch(()=>{}),V.set(t,e),t}(e);if(K.has(e))return K.get(e);let r="function"==typeof(t=e)?t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(Q(this),e),X(q.get(this))}:function(...e){return X(t.apply(Q(this),e))}:function(e,...r){let n=t.call(Q(this),e,...r);return z.set(n,e.sort?e.sort():[e]),X(n)}:(t instanceof IDBTransaction&&function(e){if(W.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=()=>{t(),n()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)});W.set(e,t)}(t),H(t,n||(n=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(t,G):t;return r!==e&&(K.set(e,r),V.set(r,e)),r}let Q=e=>V.get(e);function Y(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let o=indexedDB.open(e,t),s=X(o);return n&&o.addEventListener("upgradeneeded",e=>{n(X(o.result),e.oldVersion,e.newVersion,X(o.transaction),e)}),r&&o.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),s.then(e=>{a&&e.addEventListener("close",()=>a()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}function J(e,{blocked:t}={}){let r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",e=>t(e.oldVersion,e)),X(r).then(()=>void 0)}let Z=["get","getKey","getAll","getAllKeys","count"],ee=["put","add","delete","clear"],et=new Map;function er(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(et.get(t))return et.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=ee.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Z.includes(r)))return;let a=async function(e,...t){let a=this.transaction(e,i?"readwrite":"readonly"),o=a.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[r](...t),i&&a.done]))[0]};return et.set(t,a),a}G={...a=G,get:(e,t,r)=>er(e,t)||a.get(e,t,r),has:(e,t)=>!!er(e,t)||a.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return(null==t?void 0:t.type)==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let ei="@firebase/app",ea="0.10.6",eo=new B("@firebase/app"),es="[DEFAULT]",ec={[ei]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},el=new Map,eu=new Map,ef=new Map;function ep(e,t){try{e.container.addComponent(t)}catch(r){eo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function ed(e){let t=e.name;if(ef.has(t))return eo.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(ef.set(t,e),el.values()))ep(r,e);for(let t of eu.values())ep(t,e);return!0}function eh(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}let eg=new x("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new k("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw eg.create("app-deleted",{appName:this._name})}}function eb(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n=Object.assign({name:es,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw eg.create("bad-app-name",{appName:String(i)});if(r||(r=_()),!r)throw eg.create("no-options");let a=el.get(i);if(a){if(T(r,a.options)&&T(n,a.config))return a;throw eg.create("duplicate-app",{appName:i})}let o=new M(i);for(let e of ef.values())o.addComponent(e);let s=new em(r,n,o);return el.set(i,s),s}function ey(e,t,r){var n;let i=null!==(n=ec[e])&&void 0!==n?n:e;r&&(i+=`-${r}`);let a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){let e=[`Unable to register library "${i}" with version "${t}":`];a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),eo.warn(e.join(" "));return}ed(new k(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}let ev="firebase-heartbeat-store",ew=null;function eE(){return ew||(ew=Y("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ev)}catch(e){console.warn(e)}}}).catch(e=>{throw eg.create("idb-open",{originalErrorMessage:e.message})})),ew}async function e_(e){try{let t=(await eE()).transaction(ev),r=await t.objectStore(ev).get(eI(e));return await t.done,r}catch(e){if(e instanceof P)eo.warn(e.message);else{let t=eg.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});eo.warn(t.message)}}}async function eS(e,t){try{let r=(await eE()).transaction(ev,"readwrite"),n=r.objectStore(ev);await n.put(t,eI(e)),await r.done}catch(e){if(e instanceof P)eo.warn(e.message);else{let t=eg.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});eo.warn(t.message)}}}function eI(e){return`${e.name}!${e.options.appId}`}class eA{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ex(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){var e,t;let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=eP();return(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(e=>e.date===n)?void 0:(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(e=>{let t=new Date(e.date).valueOf();return Date.now()-t<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let t=eP(),{heartbeatsToSend:r,unsentEntries:n}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),eC(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),eC(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),i=m(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function eP(){return new Date().toISOString().substring(0,10)}class ex{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!I()&&A().then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await e_(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){let r=await this.read();return eS(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function eC(e){return m(JSON.stringify({version:2,heartbeats:e})).length}ed(new k("platform-logger",e=>new en(e),"PRIVATE")),ed(new k("heartbeat",e=>new eA(e),"PRIVATE")),ey(ei,ea,""),ey(ei,ea,"esm2017"),ey("fire-js","");let eT="@firebase/installations",eO="0.6.8",eR=`w:${eO}`,ek="FIS_v2",eD=new x("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ej(e){return e instanceof P&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eM({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function eN(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function e$(e,t){let r=(await t.json()).error;return eD.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function eL({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function eU(e){let t=await e();return t.status>=500&&t.status<600?e():t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eF({appConfig:e,heartbeatServiceProvider:t},{fid:r}){let n=eM(e),i=eL(e),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={method:"POST",headers:i,body:JSON.stringify({fid:r,authVersion:ek,appId:e.appId,sdkVersion:eR})},s=await eU(()=>fetch(n,o));if(s.ok){let e=await s.json();return{fid:e.fid||r,registrationStatus:2,refreshToken:e.refreshToken,authToken:eN(e.authToken)}}throw await e$("Create Installation",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eB(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eH=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eq(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eW=new Map;function ez(e,t){let r=eq(e);eK(r,t),function(e,t){let r=(!eV&&"BroadcastChannel"in self&&((eV=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{eK(e.data.key,e.data.fid)}),eV);r&&r.postMessage({key:e,fid:t}),0===eW.size&&eV&&(eV.close(),eV=null)}(r,t)}function eK(e,t){let r=eW.get(e);if(r)for(let e of r)e(t)}let eV=null,eG="firebase-installations-store",eX=null;function eQ(){return eX||(eX=Y("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(eG)}})),eX}async function eY(e,t){let r=eq(e),n=(await eQ()).transaction(eG,"readwrite"),i=n.objectStore(eG),a=await i.get(r);return await i.put(t,r),await n.done,a&&a.fid===t.fid||ez(e,t.fid),t}async function eJ(e){let t=eq(e),r=(await eQ()).transaction(eG,"readwrite");await r.objectStore(eG).delete(t),await r.done}async function eZ(e,t){let r=eq(e),n=(await eQ()).transaction(eG,"readwrite"),i=n.objectStore(eG),a=await i.get(r),o=t(a);return void 0===o?await i.delete(r):await i.put(o,r),await n.done,o&&(!a||a.fid!==o.fid)&&ez(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(e){let t;let r=await eZ(e.appConfig,r=>{let n=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(eD.create("app-offline"))};let r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=e1(e,r);return{installationEntry:r,registrationPromise:n}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:e2(e)}:{installationEntry:t}}(e,e5(r||{fid:function(){try{let e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;let t=btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_").substr(0,22);return eH.test(t)?t:""}catch(e){return""}}(),registrationStatus:0}));return t=n.registrationPromise,n.installationEntry});return""===r.fid?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}async function e1(e,t){try{let r=await eF(e,t);return eY(e.appConfig,r)}catch(r){throw ej(r)&&409===r.customData.serverCode?await eJ(e.appConfig):await eY(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function e2(e){let t=await e6(e.appConfig);for(;1===t.registrationStatus;)await eB(100),t=await e6(e.appConfig);if(0===t.registrationStatus){let{installationEntry:t,registrationPromise:r}=await e0(e);return r||t}return t}function e6(e){return eZ(e,e=>{if(!e)throw eD.create("installation-not-found");return e5(e)})}function e5(e){return 1===e.registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e3({appConfig:e,heartbeatServiceProvider:t},r){let n=function(e,{fid:t}){return`${eM(e)}/${t}/authTokens:generate`}(e,r),i=function(e,{refreshToken:t}){let r=eL(e);return r.append("Authorization",`${ek} ${t}`),r}(e,r),a=t.getImmediate({optional:!0});if(a){let e=await a.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}let o={method:"POST",headers:i,body:JSON.stringify({installation:{sdkVersion:eR,appId:e.appId}})},s=await eU(()=>fetch(n,o));if(s.ok)return eN(await s.json());throw await e$("Generate Auth Token",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e4(e,t=!1){let r;let n=await eZ(e.appConfig,n=>{var i;if(!te(n))throw eD.create("not-registered");let a=n.authToken;if(!t&&2===(i=a).requestStatus&&!function(e){let t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(i))return n;if(1===a.requestStatus)return r=e8(e,t),n;{if(!navigator.onLine)throw eD.create("app-offline");let t=function(e){let t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(n);return r=e7(e,t),t}});return r?await r:n.authToken}async function e8(e,t){let r=await e9(e.appConfig);for(;1===r.authToken.requestStatus;)await eB(100),r=await e9(e.appConfig);let n=r.authToken;return 0===n.requestStatus?e4(e,t):n}function e9(e){return eZ(e,e=>{var t;if(!te(e))throw eD.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function e7(e,t){try{let r=await e3(e,t),n=Object.assign(Object.assign({},t),{authToken:r});return await eY(e.appConfig,n),r}catch(r){if(ej(r)&&(401===r.customData.serverCode||404===r.customData.serverCode))await eJ(e.appConfig);else{let r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await eY(e.appConfig,r)}throw r}}function te(e){return void 0!==e&&2===e.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tt(e){let{installationEntry:t,registrationPromise:r}=await e0(e);return r?r.catch(console.error):e4(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(e,t=!1){return await tn(e),(await e4(e,t)).token}async function tn(e){let{registrationPromise:t}=await e0(e);t&&await t}function ti(e){return eD.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta="installations";ed(new k(ta,e=>{let t=e.getProvider("app").getImmediate(),r=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw ti("App Configuration");if(!e.name)throw ti("App Name");for(let t of["projectId","apiKey","appId"])if(!e.options[t])throw ti(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),n=eh(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},"PUBLIC")),ed(new k("installations-internal",e=>{let t=eh(e.getProvider("app").getImmediate(),ta).getImmediate();return{getId:()=>tt(t),getToken:e=>tr(t,e)}},"PRIVATE")),ey(eT,eO),ey(eT,eO,"esm2017");let to="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ts="google.c.a.c_id";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(e){return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(s||(s={})),function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(c||(c={}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tl="fcm_token_details_db",tu="fcm_token_object_Store";async function tf(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(e=>e.name).includes(tl))return null;let t=null;return(await Y(tl,5,{upgrade:async(r,n,i,a)=>{var o;if(n<2||!r.objectStoreNames.contains(tu))return;let s=a.objectStore(tu),c=await s.index("fcmSenderId").get(e);if(await s.clear(),c){if(2===n){if(!c.auth||!c.p256dh||!c.endpoint)return;t={token:c.fcmToken,createTime:null!==(o=c.createTime)&&void 0!==o?o:Date.now(),subscriptionOptions:{auth:c.auth,p256dh:c.p256dh,endpoint:c.endpoint,swScope:c.swScope,vapidKey:"string"==typeof c.vapidKey?c.vapidKey:tc(c.vapidKey)}}}else 3===n?t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:tc(c.auth),p256dh:tc(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:tc(c.vapidKey)}}:4===n&&(t={token:c.fcmToken,createTime:c.createTime,subscriptionOptions:{auth:tc(c.auth),p256dh:tc(c.p256dh),endpoint:c.endpoint,swScope:c.swScope,vapidKey:tc(c.vapidKey)}})}}})).close(),await J(tl),await J("fcm_vapid_details_db"),await J("undefined"),!function(e){if(!e||!e.subscriptionOptions)return!1;let{subscriptionOptions:t}=e;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}(t)?null:t}let tp="firebase-messaging-store",td=null;function th(){return td||(td=Y("firebase-messaging-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(tp)}})),td}async function tg(e){let t=function({appConfig:e}){return e.appId}(e),r=await th(),n=await r.transaction(tp).objectStore(tp).get(t);if(n)return n;{let t=await tf(e.appConfig.senderId);if(t)return await tm(e,t),t}}async function tm(e,t){let r=function({appConfig:e}){return e.appId}(e),n=(await th()).transaction(tp,"readwrite");return await n.objectStore(tp).put(t,r),await n.done,t}async function tb(e){let t=function({appConfig:e}){return e.appId}(e),r=(await th()).transaction(tp,"readwrite");await r.objectStore(tp).delete(t),await r.done}let ty=new x("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tv(e,t){let r;let n={method:"POST",headers:await tS(e),body:JSON.stringify(tI(t))};try{let t=await fetch(t_(e.appConfig),n);r=await t.json()}catch(e){throw ty.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){let e=r.error.message;throw ty.create("token-subscribe-failed",{errorInfo:e})}if(!r.token)throw ty.create("token-subscribe-no-token");return r.token}async function tw(e,t){let r;let n={method:"PATCH",headers:await tS(e),body:JSON.stringify(tI(t.subscriptionOptions))};try{let i=await fetch(`${t_(e.appConfig)}/${t.token}`,n);r=await i.json()}catch(e){throw ty.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(r.error){let e=r.error.message;throw ty.create("token-update-failed",{errorInfo:e})}if(!r.token)throw ty.create("token-update-no-token");return r.token}async function tE(e,t){let r=await tS(e);try{let n=await fetch(`${t_(e.appConfig)}/${t}`,{method:"DELETE",headers:r}),i=await n.json();if(i.error){let e=i.error.message;throw ty.create("token-unsubscribe-failed",{errorInfo:e})}}catch(e){throw ty.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function t_({projectId:e}){return`https://fcmregistrations.googleapis.com/v1/projects/${e}/registrations`}async function tS({appConfig:e,installations:t}){let r=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function tI({p256dh:e,auth:t,endpoint:r,vapidKey:n}){let i={web:{endpoint:r,auth:t,p256dh:e}};return n!==to&&(i.web.applicationPubKey=n),i}async function tA(e){let t=await tC(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:tc(t.getKey("auth")),p256dh:tc(t.getKey("p256dh"))},n=await tg(e.firebaseDependencies);if(!n)return tx(e.firebaseDependencies,r);if(function(e,t){let r=t.vapidKey===e.vapidKey,n=t.endpoint===e.endpoint,i=t.auth===e.auth,a=t.p256dh===e.p256dh;return r&&n&&i&&a}(n.subscriptionOptions,r))return Date.now()>=n.createTime+6048e5?tP(e,{token:n.token,createTime:Date.now(),subscriptionOptions:r}):n.token;try{await tE(e.firebaseDependencies,n.token)}catch(e){console.warn(e)}return tx(e.firebaseDependencies,r)}async function tP(e,t){try{let r=await tw(e.firebaseDependencies,t),n=Object.assign(Object.assign({},t),{token:r,createTime:Date.now()});return await tm(e.firebaseDependencies,n),r}catch(e){throw e}}async function tx(e,t){let r={token:await tv(e,t),createTime:Date.now(),subscriptionOptions:t};return await tm(e,r),r.token}async function tC(e,t){return await e.pushManager.getSubscription()||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:function(e){let t="=".repeat((4-e.length%4)%4),r=atob((e+t).replace(/\-/g,"+").replace(/_/g,"/")),n=new Uint8Array(r.length);for(let e=0;e<r.length;++e)n[e]=r.charCodeAt(e);return n}(t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(e){let t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return function(e,t){if(!t.notification)return;e.notification={};let r=t.notification.title;r&&(e.notification.title=r);let n=t.notification.body;n&&(e.notification.body=n);let i=t.notification.image;i&&(e.notification.image=i);let a=t.notification.icon;a&&(e.notification.icon=a)}(t,e),e.data&&(t.data=e.data),function(e,t){var r,n,i,a,o;if(!t.fcmOptions&&!(null===(r=t.notification)||void 0===r?void 0:r.click_action))return;e.fcmOptions={};let s=null!==(i=null===(n=t.fcmOptions)||void 0===n?void 0:n.link)&&void 0!==i?i:null===(a=t.notification)||void 0===a?void 0:a.click_action;s&&(e.fcmOptions.link=s);let c=null===(o=t.fcmOptions)||void 0===o?void 0:o.analytics_label;c&&(e.fcmOptions.analyticsLabel=c)}(t,e),t}function tO(e,t){let r=[];for(let n=0;n<e.length;n++)r.push(e.charAt(n)),n<t.length&&r.push(t.charAt(n));return r.join("")}function tR(e){return ty.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tO("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o"),tO("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;let n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if(!e||!e.options)throw tR("App Configuration Object");if(!e.name)throw tR("App Name");let{options:t}=e;for(let e of["projectId","apiKey","appId","messagingSenderId"])if(!t[e])throw tR(e);return{appName:e.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}(e);this.firebaseDependencies={app:e,appConfig:n,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(e){try{e.swRegistration=await navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}),e.swRegistration.update().catch(()=>{})}catch(e){throw ty.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tj(e,t){if(t||e.swRegistration||await tD(e),t||!e.swRegistration){if(!(t instanceof ServiceWorkerRegistration))throw ty.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=to)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tN(e,t){if(!navigator)throw ty.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw ty.create("permission-blocked");return await tM(e,null==t?void 0:t.vapidKey),await tj(e,null==t?void 0:t.serviceWorkerRegistration),tA(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t$(e,t,r){let n=function(e){switch(e){case c.NOTIFICATION_CLICKED:return"notification_open";case c.PUSH_RECEIVED:return"notification_foreground";default:throw Error()}}(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(n,{message_id:r[ts],message_name:r["google.c.a.c_l"],message_time:r["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tL(e,t){let r=t.data;if(!r.isFirebaseMessaging)return;e.onMessageHandler&&r.messageType===c.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(tT(r)):e.onMessageHandler.next(tT(r)));let n=r.data;"object"==typeof n&&n&&ts in n&&"1"===n["google.c.a.e"]&&await t$(e,r.messageType,n)}let tU="@firebase/messaging",tF="0.12.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tB(){try{await A()}catch(e){return!1}return"undefined"!=typeof window&&I()&&"undefined"!=typeof navigator&&!!navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}ed(new k("messaging",e=>{let t=new tk(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>tL(t,e)),t},"PUBLIC")),ed(new k("messaging-internal",e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>tN(t,e)}},"PRIVATE")),ey(tU,tF),ey(tU,tF,"esm2017"),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ey("firebase","10.12.3","app");let tH=eb({apiKey:"AIzaSyDE9-F-tJgOOD0tUFVhjOwawS2KVWhi7ps",authDomain:"test1-db675.firebaseapp.com",projectId:"test1-db675",storageBucket:"test1-db675.appspot.com",messagingSenderId:"934895313032",appId:"1:934895313032:web:bbca63858a02e9ba443f3d",measurementId:"G-SQML950GRY"}),tq=()=>/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e=function(e=es){let t=el.get(e);if(!t&&e===es&&_())return eb();if(!t)throw eg.create("no-app",{appName:e});return t}()){return tB().then(e=>{if(!e)throw ty.create("unsupported-browser")},e=>{throw ty.create("indexed-db-unsupported")}),eh(R(e),"messaging").getImmediate()})(tH),tW=()=>{let[e,t]=(0,u.useState)("default");return(0,u.useEffect)(()=>{let e=()=>t(Notification.permission);e(),Notification.requestPermission().then(e),navigator.permissions.query({name:"notifications"}).then(t=>{t.onchange=e})},[]),e},tz=()=>{let e=tW(),[t,r]=(0,u.useState)(null);return(0,u.useEffect)(()=>{},[e]),t};var tK=r(9394);let tV=()=>{let e=tz(),[t,r]=(0,u.useState)([]);return(0,u.useEffect)(()=>{if("serviceWorker"in navigator){let e=function(e,t){return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(!navigator)throw ty.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}(e=R(e),t))}(tq(),e=>{tK.Am.dark(e.notification?.title),r(t=>[...t,e])});return()=>e()}},[e]),{fcmToken:e,messages:t}};function tG(){let{messages:e,fcmToken:t}=tV();return(0,l.jsxs)("div",{className:"container flex flex-col items-center",children:[l.jsx("h1",{children:"FCM"}),(0,l.jsxs)("p",{children:["FCM Token: ",t]})]})}},338:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION:function(){return n},FLIGHT_PARAMETERS:function(){return c},NEXT_DID_POSTPONE_HEADER:function(){return u},NEXT_ROUTER_PREFETCH_HEADER:function(){return a},NEXT_ROUTER_STATE_TREE:function(){return i},NEXT_RSC_UNION_QUERY:function(){return l},NEXT_URL:function(){return o},RSC_CONTENT_TYPE_HEADER:function(){return s},RSC_HEADER:function(){return r}});let r="RSC",n="Next-Action",i="Next-Router-State-Tree",a="Next-Router-Prefetch",o="Next-Url",s="text/x-component",c=[[r],[i],[a]],l="_rsc",u="x-nextjs-postponed";("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7255:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},a=t.split(n),o=(r||{}).decode||e,s=0;s<a.length;s++){var c=a[s],l=c.indexOf("=");if(!(l<0)){var u=c.substr(0,l).trim(),f=c.substr(++l,c.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==i[u]&&(i[u]=function(e,t){try{return t(e)}catch(t){return e}}(f,o))}}return i},t.serialize=function(e,t,n){var a=n||{},o=a.encode||r;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=o(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var c=e+"="+s;if(null!=a.maxAge){var l=a.maxAge-0;if(isNaN(l)||!isFinite(l))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(l)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");c+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");c+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(c+="; HttpOnly"),a.secure&&(c+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},1792:(e,t)=>{"use strict";function r(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",a=r+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o){i+=e[a++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=a;continue}if("("===n){var s=1,c="",a=r+1;if("?"===e[a])throw TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;){if("\\"===e[a]){c+=e[a++]+e[a++];continue}if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw TypeError("Capturing groups are not allowed at "+a);c+=e[a++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!c)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:c}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,i=void 0===n?"./":n,o="[^"+a(t.delimiter||"/#?")+"]+?",s=[],c=0,l=0,u="",f=function(e){if(l<r.length&&r[l].type===e)return r[l++].value},p=function(e){var t=f(e);if(void 0!==t)return t;var n=r[l];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},d=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};l<r.length;){var h=f("CHAR"),g=f("NAME"),m=f("PATTERN");if(g||m){var b=h||"";-1===i.indexOf(b)&&(u+=b,b=""),u&&(s.push(u),u=""),s.push({name:g||c++,prefix:b,suffix:"",pattern:m||o,modifier:f("MODIFIER")||""});continue}var y=h||f("ESCAPED_CHAR");if(y){u+=y;continue}if(u&&(s.push(u),u=""),f("OPEN")){var b=d(),v=f("NAME")||"",w=f("PATTERN")||"",E=d();p("CLOSE"),s.push({name:v||(w?c++:""),pattern:v&&!w?o:w,prefix:b,suffix:E,modifier:f("MODIFIER")||""});continue}p("END")}return s}function n(e,t){void 0===t&&(t={});var r=o(t),n=t.encode,i=void 0===n?function(e){return e}:n,a=t.validate,s=void 0===a||a,c=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var a=e[n];if("string"==typeof a){r+=a;continue}var o=t?t[a.name]:void 0,l="?"===a.modifier||"*"===a.modifier,u="*"===a.modifier||"+"===a.modifier;if(Array.isArray(o)){if(!u)throw TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===o.length){if(l)continue;throw TypeError('Expected "'+a.name+'" to not be empty')}for(var f=0;f<o.length;f++){var p=i(o[f],a);if(s&&!c[n].test(p))throw TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix}continue}if("string"==typeof o||"number"==typeof o){var p=i(String(o),a);if(s&&!c[n].test(p))throw TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+p+'"');r+=a.prefix+p+a.suffix;continue}if(!l){var d=u?"an array":"a string";throw TypeError('Expected "'+a.name+'" to be '+d)}}return r}}function i(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var a=n[0],o=n.index,s=Object.create(null),c=1;c<n.length;c++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(c);return{path:a,index:o,params:s}}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function o(e){return e&&e.sensitive?"":"i"}function s(e,t,r){void 0===r&&(r={});for(var n=r.strict,i=void 0!==n&&n,s=r.start,c=r.end,l=r.encode,u=void 0===l?function(e){return e}:l,f="["+a(r.endsWith||"")+"]|$",p="["+a(r.delimiter||"/#?")+"]",d=void 0===s||s?"^":"",h=0;h<e.length;h++){var g=e[h];if("string"==typeof g)d+=a(u(g));else{var m=a(u(g.prefix)),b=a(u(g.suffix));if(g.pattern){if(t&&t.push(g),m||b){if("+"===g.modifier||"*"===g.modifier){var y="*"===g.modifier?"?":"";d+="(?:"+m+"((?:"+g.pattern+")(?:"+b+m+"(?:"+g.pattern+"))*)"+b+")"+y}else d+="(?:"+m+"("+g.pattern+")"+b+")"+g.modifier}else d+="("+g.pattern+")"+g.modifier}else d+="(?:"+m+b+")"+g.modifier}}if(void 0===c||c)i||(d+=p+"?"),d+=r.endsWith?"(?="+f+")":"$";else{var v=e[e.length-1],w="string"==typeof v?p.indexOf(v[v.length-1])>-1:void 0===v;i||(d+="(?:"+p+"(?="+f+"))?"),w||(d+="(?="+p+"|"+f+")")}return new RegExp(d,o(r))}function c(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(e,t):Array.isArray(e)?RegExp("(?:"+e.map(function(e){return c(e,t,n).source}).join("|")+")",o(n)):s(r(e,n),t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=r,t.compile=function(e,t){return n(r(e,t),t)},t.tokensToFunction=n,t.match=function(e,t){var r=[];return i(c(e,r,t),r,t)},t.regexpToFunction=i,t.tokensToRegexp=s,t.pathToRegexp=c},6621:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataRoute:function(){return p}});let n=r(616),i=function(e){return e&&e.__esModule?e:{default:e}}(r(1293)),a=r(7262),o=r(5679),s=r(8785),c=r(8168),l=r(1040);function u(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function f(e,t,r){let n=(0,c.normalizeAppPath)(e),s=(0,o.getNamedRouteRegex)(n,!1),f=(0,a.interpolateDynamicPath)(n,t,s),p=u(e),d=p?`-${p}`:"",{name:h,ext:g}=i.default.parse(r);return(0,l.normalizePathSep)(i.default.join(f,`${h}${d}${g}`))}function p(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":e.endsWith("/sitemap")?t+=".xml":r=u(e.slice(0,-(i.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:a,name:o,ext:s}=i.default.parse(t),c=(0,n.isStaticMetadataRoute)(e);t=i.default.posix.join(a,`${o}${r?`-${r}`:""}${s}`,c?"":"[[...__metadata_id__]]","route")}return t}},616:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},isMetadataRoute:function(){return u},isMetadataRouteFile:function(){return s},isStaticMetadataRoute:function(){return l},isStaticMetadataRouteFile:function(){return c}});let n=r(1040),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},a=["js","jsx","ts","tsx"],o=e=>`(?:${e.join("|")})`;function s(e,t,r){let a=[RegExp(`^[\\\\/]robots${r?`\\.${o(t.concat("txt"))}$`:""}`),RegExp(`^[\\\\/]manifest${r?`\\.${o(t.concat("webmanifest","json"))}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`\\.${o(t.concat("xml"))}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`\\.${o(t.concat(i.icon.extensions))}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`\\.${o(t.concat(i.apple.extensions))}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`\\.${o(t.concat(i.openGraph.extensions))}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`\\.${o(t.concat(i.twitter.extensions))}$`:""}`)],s=(0,n.normalizePathSep)(e);return a.some(e=>e.test(s))}function c(e){return s(e,[],!0)}function l(e){return"/robots"===e||"/manifest"===e||c(e)}function u(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,a,!1)}},6975:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(7255);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},1586:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return o},isInterceptionRouteAppPath:function(){return a}});let n=r(8168),i=["(..)(..)","(.)","(..)","(...)"];function a(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function o(e){let t,r,a;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,a]=e.split(r,2);break}if(!t||!r||!a)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":a="/"===t?`/${a}`:t+"/"+a;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);a=t.split("/").slice(0,-1).concat(a).join("/");break;case"(...)":a="/"+a;break;case"(..)(..)":let o=t.split("/");if(o.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);a=o.slice(0,-2).concat(a).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:a}}},7262:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getUtils:function(){return g},interpolateDynamicPath:function(){return d},normalizeDynamicRouteParams:function(){return h},normalizeVercelUrl:function(){return p}});let n=r(7310),i=r(5014),a=r(3707),o=r(5679),s=r(3525),c=r(5257),l=r(7847),u=r(8168),f=r(1943);function p(e,t,r,i,a){if(i&&t&&a){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query)))(e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)||(r||Object.keys(a.groups)).includes(e))&&delete t.query[e];e.url=(0,n.format)(t)}}function d(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let{optional:i,repeat:a}=r.groups[n],o=`[${a?"...":""}${n}]`;i&&(o=`[${o}]`);let s=e.indexOf(o);if(s>-1){let r;let i=t[n];r=Array.isArray(i)?i.map(e=>e&&encodeURIComponent(e)).join("/"):i?encodeURIComponent(i):"",e=e.slice(0,s)+r+e.slice(s+o.length)}}return e}function h(e,t,r,n){let i=!0;return r?{params:e=Object.keys(r.groups).reduce((a,o)=>{let s=e[o];"string"==typeof s&&(s=(0,u.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,u.normalizeRscURL)(e)),e)));let c=n[o],l=r.groups[o].optional;return((Array.isArray(c)?c.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(c))||void 0===s&&!(l&&t))&&(i=!1),l&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${o}]]`))&&(s=void 0,delete e[o]),s&&"string"==typeof s&&r.groups[o].repeat&&(s=s.split("/")),s&&(a[o]=s),a},{}),hasValidParams:i}:{params:e,hasValidParams:!1}}function g({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:u,trailingSlash:g,caseSensitive:m}){let b,y,v;return u&&(b=(0,o.getNamedRouteRegex)(e,!1),v=(y=(0,s.getRouteMatcher)(b))(e)),{handleRewrites:function(o,s){let f={},p=s.pathname,d=n=>{let l=(0,a.getPathMatch)(n.source+(g?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!m})(s.pathname);if((n.has||n.missing)&&l){let e=(0,c.matchHas)(o,s.query,n.has,n.missing);e?Object.assign(l,e):l=!1}if(l){let{parsedDestination:a,destQuery:o}=(0,c.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:l,query:s.query});if(a.protocol)return!0;if(Object.assign(f,o,l),Object.assign(s.query,a.query),delete a.query,Object.assign(s,a),p=s.pathname,r&&(p=p.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(p,t.locales);p=e.pathname,s.query.nextInternalLocale=e.detectedLocale||l.nextInternalLocale}if(p===e)return!0;if(u&&y){let e=y(p);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])d(e);if(p!==e){let t=!1;for(let e of n.afterFiles||[])if(t=d(e))break;if(!t&&!(()=>{let t=(0,l.removeTrailingSlash)(p||"");return t===(0,l.removeTrailingSlash)(e)||(null==y?void 0:y(t))})()){for(let e of n.fallback||[])if(t=d(e))break}}return f},defaultRouteRegex:b,dynamicRouteMatcher:y,defaultRouteMatches:v,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=b;return{re:{exec:a=>{let o=Object.fromEntries(new URLSearchParams(a)),s=t&&n&&o["1"]===n;for(let e of Object.keys(o)){let t=o[e];e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)&&(o[e.substring(f.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete o[e])}let c=Object.keys(i||{}),l=e=>{if(t){let i=Array.isArray(e),a=i?e[0]:e;if("string"==typeof a&&t.locales.some(e=>e.toLowerCase()===a.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return c.every(e=>o[e])?c.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!l(o[r])&&(t[e[n].pos]=o[r]),t},{}):Object.keys(o).reduce((e,t)=>{if(!l(o[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:o[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>h(e,t,b,v),normalizeVercelUrl:(e,t,r)=>p(e,t,r,u,b),interpolateDynamicPath:(e,t)=>d(e,t,b)}}},4080:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},8785:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&4294967295;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},5014:(e,t)=>{"use strict";function r(e,t){let r;let n=e.split("/");return(t||[]).some(t=>!!n[1]&&n[1].toLowerCase()===t.toLowerCase()&&(r=t,n.splice(1,1),e=n.join("/")||"/",!0)),{pathname:e,detectedLocale:r}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return r}})},1293:(e,t,r)=>{"use strict";let n;n=r(1017),e.exports=n},1555:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},1040:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},8168:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return a},normalizeRscURL:function(){return o}});let n=r(1555),i=r(5406);function a(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function o(e){return e.replace(/\.rsc($|\?)/,"$1")}},1942:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(2569);let n=r(4869);function i(e,t){let r=new URL("http://n"),i=t?new URL(t,r):e.startsWith(".")?new URL("http://n"):r,{pathname:a,searchParams:o,search:s,hash:c,href:l,origin:u}=new URL(e,i);if(u!==r.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:a,query:(0,n.searchParamsToUrlQuery)(o),search:s,hash:c,href:l.slice(r.origin.length)}}},3226:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return a}});let n=r(4869),i=r(1942);function a(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},3707:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(1792);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),a=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=a(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},5257:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return f},matchHas:function(){return u},prepareDestination:function(){return p}});let n=r(1792),i=r(4080),a=r(3226),o=r(1586),s=r(338),c=r(6975);function l(e){return e.replace(/__ESC_COLON_/gi,":")}function u(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},a=r=>{let n;let a=r.key;switch(r.type){case"header":a=a.toLowerCase(),n=e.headers[a];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,c.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[a];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(a)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1};return!!r.every(e=>a(e))&&!n.some(e=>a(e))&&i}function f(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function p(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let c=e.destination;for(let t of Object.keys({...e.params,...r}))c=c.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t);let u=(0,a.parseUrl)(c),p=u.query,d=l(""+u.pathname+(u.hash||"")),h=l(u.hostname||""),g=[],m=[];(0,n.pathToRegexp)(d,g),(0,n.pathToRegexp)(h,m);let b=[];g.forEach(e=>b.push(e.name)),m.forEach(e=>b.push(e.name));let y=(0,n.compile)(d,{validate:!1}),v=(0,n.compile)(h,{validate:!1});for(let[t,r]of Object.entries(p))Array.isArray(r)?p[t]=r.map(t=>f(l(t),e.params)):"string"==typeof r&&(p[t]=f(l(r),e.params));let w=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!w.some(e=>b.includes(e)))for(let t of w)t in p||(p[t]=e.params[t]);if((0,o.isInterceptionRouteAppPath)(d))for(let t of d.split("/")){let r=o.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){e.params["0"]=r;break}}try{let[r,n]=(t=y(e.params)).split("#",2);u.hostname=v(e.params),u.pathname=r,u.hash=(n?"#":"")+(n||""),delete u.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return u.query={...r,...u.query},{newUrl:t,destQuery:p,parsedDestination:u}}},4869:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},7847:(e,t)=>{"use strict";function r(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"removeTrailingSlash",{enumerable:!0,get:function(){return r}})},3525:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(2569);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},o={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(o[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),o}}},5679:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return p},getNamedRouteRegex:function(){return f},getRouteRegex:function(){return c}});let n=r(1586),i=r(4080),a=r(7847);function o(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function s(e){let t=(0,a.removeTrailingSlash)(e).slice(1).split("/"),r={},s=1;return{parameterizedRoute:t.map(e=>{let t=n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(t&&a){let{key:e,optional:n,repeat:c}=o(a[1]);return r[e]={pos:s++,repeat:c,optional:n},"/"+(0,i.escapeStringRegexp)(t)+"([^/]+?)"}if(!a)return"/"+(0,i.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:n}=o(a[1]);return r[e]={pos:s++,repeat:t,optional:n},t?n?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function c(e){let{parameterizedRoute:t,groups:r}=s(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function l(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:a,keyPrefix:s}=e,{key:c,optional:l,repeat:u}=o(n),f=c.replace(/\W/g,"");s&&(f=""+s+f);let p=!1;(0===f.length||f.length>30)&&(p=!0),isNaN(parseInt(f.slice(0,1)))||(p=!0),p&&(f=r()),s?a[f]=""+s+c:a[f]=c;let d=t?(0,i.escapeStringRegexp)(t):"";return u?l?"(?:/"+d+"(?<"+f+">.+?))?":"/"+d+"(?<"+f+">.+?)":"/"+d+"(?<"+f+">[^/]+?)"}function u(e,t){let r;let o=(0,a.removeTrailingSlash)(e).slice(1).split("/"),s=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),c={};return{namedParameterizedRoute:o.map(e=>{let r=n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),a=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&a){let[r]=e.split(a[0]);return l({getSafeRouteKey:s,interceptionMarker:r,segment:a[1],routeKeys:c,keyPrefix:t?"nxtI":void 0})}return a?l({getSafeRouteKey:s,segment:a[1],routeKeys:c,keyPrefix:t?"nxtP":void 0}):"/"+(0,i.escapeStringRegexp)(e)}).join(""),routeKeys:c}}function f(e,t){let r=u(e,t);return{...c(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function p(e,t){let{parameterizedRoute:r}=s(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=u(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},5406:(e,t)=>{"use strict";function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DEFAULT_SEGMENT_KEY:function(){return i},PAGE_SEGMENT_KEY:function(){return n},isGroupSegment:function(){return r}});let n="__PAGE__",i="__DEFAULT__"},2569:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return y},MissingStaticPage:function(){return b},NormalizeError:function(){return g},PageNotFoundError:function(){return m},SP:function(){return p},ST:function(){return d},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return c},getLocationOrigin:function(){return o},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return l},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>i.test(e);function o(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=o();return e.substring(t.length)}function c(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function l(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&l(r))return n;if(!n)throw Error('"'+c(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let p="undefined"!=typeof performance,d=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class g extends Error{}class m extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class b extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class y extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>a});var n=r(9510);r(5023),r(7001);var i=r(6557);let a={title:"NextJs FCM",description:"A NextJs FCM"};function o({children:e}){return n.jsx("html",{lang:"en",children:(0,n.jsxs)("body",{children:[n.jsx(i.Ix,{}),e]})})}},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>a,default:()=>s});var n=r(8570);let i=(0,n.createProxy)(String.raw`C:\Users\patri\test1\src\app\page.tsx`),{__esModule:a,$$typeof:o}=i;i.default;let s=(0,n.createProxy)(String.raw`C:\Users\patri\test1\src\app\page.tsx#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(6621);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,275],()=>r(1338));module.exports=n})();