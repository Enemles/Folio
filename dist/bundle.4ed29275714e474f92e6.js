(()=>{var e,r,n,t,o,i,a={554:()=>{let e=document.querySelector(".transition"),r=document.querySelectorAll("a");r&&r.forEach((r=>{r.onclick=r=>{console.log(r),r.preventDefault(),setTimeout((function(){e.classList.contains("leave")?r.target.parentElement.href?window.location=r.target.parentElement.href:r.target.href?window.location=r.target.href:window.location=r.target.parentElement.parentElement.href:console.log("whoops",r.target)}),1500),e.classList.toggle("leave"),e.classList.toggle("enter")}}))}},c={};function d(e){var r=c[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=c[e]={exports:{}};try{var t={id:e,module:n,factory:a[e],require:d};d.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}d.m=a,d.c=c,d.i=[],d.hu=e=>e+"."+d.h()+".hot-update.js",d.miniCssF=e=>{},d.hmrF=()=>"pageTransition."+d.h()+".hot-update.json",d.h=()=>"0a726701b1233e7d6efc",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},d.l=(r,n,t,o)=>{if(e[r])e[r].push(n);else{var i,a;if(void 0!==t)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==r){i=s;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.src=r),e[r]=[n];var u=(n,t)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),n)return n(t)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),a&&document.head.appendChild(i)}},(()=>{var e,r,n,t,o={},i=d.c,a=[],c=[],l="idle";function s(e){l=e;for(var r=[],n=0;n<c.length;n++)r[n]=c[n].call(null,e);return Promise.all(r)}function u(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return u(e)}))}function f(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return s("check").then(d.hmrM).then((function(t){return t?s("prepare").then((function(){var o=[];return r=[],n=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,r){return d.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return u((function(){return e?h(e):s("ready").then((function(){return o}))}))}))})):s(m()?"ready":"idle")}))}function p(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=n.map((function(r){return r(e)}));n=void 0;var o=r.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var i=s("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var a,c=s("apply"),d=function(e){a||(a=e)},l=[];return r.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)l.push(r[n])}})),Promise.all([i,c]).then((function(){return a?s("fail").then((function(){throw a})):t?h(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):s("idle").then((function(){return l}))}))}function m(){if(t)return n||(n=[]),Object.keys(d.hmrI).forEach((function(e){t.forEach((function(r){d.hmrI[e](r,n)}))})),t=void 0,!0}d.hmrD=o,d.i.push((function(h){var m,v,g,y,E=h.module,w=function(n,t){var o=i[t];if(!o)return n;var c=function(r){if(o.hot.active){if(i[r]){var c=i[r].parents;-1===c.indexOf(t)&&c.push(t)}else a=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),a=[];return n(r)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(c,f,d(f));return c.e=function(e){return function(e){switch(l){case"ready":return s("prepare"),r.push(e),u((function(){return s("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},c}(h.require,h.id);E.hot=(m=h.id,v=E,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){a=v.parents.slice(),e=g?void 0:m,d(m)},active:!0,accept:function(e,r,n){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=r||function(){},y._acceptedErrorHandlers[e[t]]=n;else y._acceptedDependencies[e]=r||function(){},y._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":n=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,n)})),s("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return l;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:o[m]},e=void 0,y),E.parents=a,E.children=[],a=[],h.require=w})),d.hmrC={},d.hmrI={}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var r=d.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),r=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),t(d)}},o.href=r,document.head.appendChild(o),o},n=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},t=[],o=[],i=e=>({dispose:()=>{for(var e=0;e<t.length;e++){var r=t[e];r.parentNode&&r.parentNode.removeChild(r)}t.length=0},apply:()=>{for(var e=0;e<o.length;e++)o[e].rel="stylesheet";o.length=0}}),d.hmrC.miniCss=(e,a,c,l,s,u)=>{s.push(i),e.forEach((e=>{var i=d.miniCssF(e),a=d.p+i,c=n(i,a);c&&l.push(new Promise(((n,i)=>{var d=r(e,a,(()=>{d.as="style",d.rel="preload",n()}),i);t.push(c),o.push(d)})))}))},(()=>{var e,r,n,t,o={17:0},i={};function a(e){return new Promise(((r,n)=>{i[e]=r;var t=d.p+d.hu(e),o=new Error;d.l(t,(r=>{if(i[e]){i[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+a+")",o.name="ChunkLoadError",o.type=t,o.request=a,n(o)}}))}))}function c(i){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,l=d.c[i];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<l.parents.length;s++){var u=l.parents[s],f=d.c[u];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[i]?(n[u]||(n[u]=[]),c(n[u],[i])):(delete n[u],r.push(u),t.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}d.f&&delete d.f.jsonpHmr,e=void 0;var l={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(d.o(r,p)){var h,m=r[p],v=!1,g=!1,y=!1,E="";switch((h=m?a(p):{type:"disposed",moduleId:p}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+E));break;case"accepted":i.onAccepted&&i.onAccepted(h),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(p in u[p]=m,c(s,h.outdatedModules),h.outdatedDependencies)d.o(h.outdatedDependencies,p)&&(l[p]||(l[p]=[]),c(l[p],h.outdatedDependencies[p]));y&&(c(s,[h.moduleId]),u[p]=f)}r=void 0;for(var w,b=[],_=0;_<s.length;_++){var I=s[_],D=d.c[I];D&&(D.hot._selfAccepted||D.hot._main)&&u[I]!==f&&!D.hot._selfInvalidated&&b.push({module:I,require:D.hot._requireSelf,errorHandler:D.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var r,t=s.slice();t.length>0;){var i=t.pop(),a=d.c[i];if(a){var c={},u=a.hot._disposeHandlers;for(_=0;_<u.length;_++)u[_].call(null,c);for(d.hmrD[i]=c,a.hot.active=!1,delete d.c[i],delete l[i],_=0;_<a.children.length;_++){var f=d.c[a.children[_]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in l)if(d.o(l,p)&&(a=d.c[p]))for(w=l[p],_=0;_<w.length;_++)r=w[_],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)d.o(u,r)&&(d.m[r]=u[r]);for(var n=0;n<t.length;n++)t[n](d);for(var o in l)if(d.o(l,o)){var a=d.c[o];if(a){w=l[o];for(var c=[],f=[],p=[],h=0;h<w.length;h++){var m=w[h],v=a.hot._acceptedDependencies[m],g=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(g),p.push(m)}}for(var y=0;y<c.length;y++)try{c[y].call(null,w)}catch(r){if("function"==typeof f[y])try{f[y](r,{moduleId:o,dependencyId:p[y]})}catch(n){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[y],error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[y],error:r}),i.ignoreErrored||e(r)}}}for(var E=0;E<b.length;E++){var _=b[E],I=_.module;try{_.require(I)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:I,module:d.c[I]})}catch(n){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:I,error:n,originalError:r}),i.ignoreErrored||(e(n),e(r))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:I,error:r}),i.ignoreErrored||e(r)}}return s}}}self.webpackHotUpdate=(e,n,o)=>{for(var a in n)d.o(n,a)&&(r[a]=n[a]);o&&t.push(o),i[e]&&(i[e](),i[e]=void 0)},d.hmrI.jsonp=function(e,o){r||(r={},t=[],n=[],o.push(c)),d.o(r,e)||(r[e]=d.m[e])},d.hmrC.jsonp=function(i,l,s,u,f,p){f.push(c),e={},n=l,r=s.reduce((function(e,r){return e[r]=!1,e}),{}),t=[],i.forEach((function(r){d.o(o,r)&&void 0!==o[r]&&(u.push(a(r)),e[r]=!0)})),d.f&&(d.f.jsonpHmr=function(r,n){e&&!d.o(e,r)&&d.o(o,r)&&void 0!==o[r]&&(n.push(a(r)),e[r]=!0)})},d.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),d(554)})();
//# sourceMappingURL=bundle.4ed29275714e474f92e6.js.map