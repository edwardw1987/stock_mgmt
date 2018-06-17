/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(C){'use strict';function N(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.8/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function ta(a){if(null==a||Va(a))return!1;if(L(a)||G(a)||F&&a instanceof F)return!0;
var b="length"in Object(a)&&a.length;return T(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function q(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(L(a)||ta(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==q)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)ua.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Yd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(D(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&D(n)?da(n)?a[m]=new Date(n.valueOf()):Wa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(D(a[m])||(a[m]=L(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function S(a){return Pb(a,va.call(arguments,1),!1)}function Zd(a){return Pb(a,va.call(arguments,1),!0)}function Z(a){return parseInt(a,10)}function Rb(a,b){return S(Object.create(a),b)}function A(){}function Xa(a){return a}function ha(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ma}function y(a){return"undefined"===typeof a}function w(a){return"undefined"!==
typeof a}function D(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function G(a){return"string"===typeof a}function T(a){return"number"===typeof a}function da(a){return"[object Date]"===ma.call(a)}function z(a){return"function"===typeof a}function Wa(a){return"[object RegExp]"===ma.call(a)}function Va(a){return a&&a.window===a}function Ya(a){return a&&a.$evalAsync&&a.$watch}function Ga(a){return"boolean"===typeof a}function $d(a){return a&&T(a.length)&&
ae.test(ma.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function be(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function wa(a){return Q(a.nodeName||a[0]&&a[0].nodeName)}function Za(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function pa(a,b){function d(a,b){var d=b.$$hashKey,e;if(L(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)ua.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!D(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Va(a)||Ya(a))throw xa("cpws");var b=!1,c=e(a);void 0===c&&(c=L(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ma.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer),
a.byteOffset,a.length);case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}
var f=[],g=[];if(b){if($d(b)||"[object ArrayBuffer]"===ma.call(b))throw xa("cpta");if(a===b)throw xa("cpi");L(b)?b.length=0:q(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(L(a)){if(!L(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(da(a))return da(b)?na(a.getTime(),
b.getTime()):!1;if(Wa(a))return Wa(b)?a.toString()==b.toString():!1;if(Ya(a)||Ya(b)||Va(a)||Va(b)||L(b)||da(b)||Wa(b))return!1;d=U();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&w(b[c])&&!z(b[c]))return!1;return!0}return!1}function $a(a,b,d){return a.concat(va.call(b,d))}function ab(a,b){var d=2<arguments.length?va.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,
$a(d,arguments,0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function ce(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Va(b)?d="$WINDOW":b&&C.document===b?d="$DOCUMENT":Ya(b)&&(d="$SCOPE");return d}function bb(a,b){if(!y(a))return T(b)||(b=b?2:null),JSON.stringify(a,ce,b)}function xc(a){return G(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(de,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,
b,d){d=d?-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function ya(a){a=F(a).clone();try{a.empty()}catch(b){}var d=F("<div>").append(a).html();try{return a[0].nodeType===Ma?Q(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+Q(b)})}catch(c){return Q(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};q((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),
c=a.indexOf("="),-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),w(e)&&(f=w(f)?zc(f):!0,ua.call(b,e)?L(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];q(a,function(a,c){L(a)?q(a,function(a){b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))}):b.push(ea(c,!0)+(!0===a?"":"="+ea(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ea(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ea(a,b){return encodeURIComponent(a).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ee(a,b){var d,c,e=Na.length;for(c=0;c<e;++c)if(d=Na[c]+b,G(d=a.getAttribute(d)))return d;return null}function fe(a,b){var d,c,e={};q(Na,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});q(Na,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==ee(d,"strict-di"),
b(d,c?[c]:[],e))}function Bc(a,b,d){D(d)||(d={});d=S({strictDi:!1},d);var c=function(){a=F(a);if(a.injector()){var c=a[0]===C.document?"document":ya(a);throw xa("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=cb(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",
d);c(b)(a)})}]);return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;C&&e.test(C.name)&&(d.debugInfoEnabled=!0,C.name=C.name.replace(e,""));if(C&&!f.test(C.name))return c();C.name=C.name.replace(f,"");ca.resumeBootstrap=function(a){q(a,function(a){b.push(a)});return c()};z(ca.resumeDeferredBootstrap)&&ca.resumeDeferredBootstrap()}function ge(){C.name="NG_ENABLE_DEBUG_INFO!"+C.name;C.location.reload()}function he(a){a=ca.element(a).injector();if(!a)throw xa("test");return a.get("$$testability")}
function Cc(a,b){b=b||"_";return a.replace(ie,function(a,c){return(c?b:"")+a.toLowerCase()})}function je(){var a;if(!Dc){var b=rb();(qa=y(b)?C.jQuery:b?C[b]:void 0)&&qa.fn.on?(F=qa,S(qa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),a=qa.cleanData,qa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=qa._data(f,"events"))&&c.$destroy&&qa(f).triggerHandler("$destroy");a(b)}):F=O;ca.element=F;Dc=!0}}function sb(a,
b,d){if(!a)throw xa("areq",b||"?",d||"required");return a}function Pa(a,b,d){d&&L(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Qa(a,b){if("hasOwnProperty"===a)throw xa("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?ab(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==
b)c||(c=F(va.call(a,0,e))),c.push(b);return c||a}function U(){return Object.create(null)}function ke(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=N("$injector"),c=N("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||N;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return R}}function b(a,
d){return function(b,e){e&&z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return R}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],u=a("$injector","invoke","push",e),R={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider",
"register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:u,run:function(a){p.push(a);return this}};h&&u(h);return R})}})}function ia(a,b){if(L(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(D(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function le(a){S(a,{bootstrap:Bc,copy:pa,extend:S,merge:Zd,equals:na,element:F,forEach:q,injector:cb,noop:A,bind:ab,
toJson:bb,fromJson:xc,identity:Xa,isUndefined:y,isDefined:w,isString:G,isFunction:z,isObject:D,isNumber:T,isElement:Qb,isArray:L,version:me,isDate:da,lowercase:Q,uppercase:ub,callbacks:{$$counter:0},getTestability:he,$$minErr:N,$$csp:Ba,reloadWithDebugInfo:ge});Ub=ke(C);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ne});a.provider("$compile",Fc).directive({a:oe,input:Gc,textarea:Gc,form:pe,script:qe,select:re,style:se,option:te,ngBind:ue,ngBindHtml:ve,ngBindTemplate:we,ngClass:xe,
ngClassEven:ye,ngClassOdd:ze,ngCloak:Ae,ngController:Be,ngForm:Ce,ngHide:De,ngIf:Ee,ngInclude:Fe,ngInit:Ge,ngNonBindable:He,ngPluralize:Ie,ngRepeat:Je,ngShow:Ke,ngStyle:Le,ngSwitch:Me,ngSwitchWhen:Ne,ngSwitchDefault:Oe,ngOptions:Pe,ngTransclude:Qe,ngModel:Re,ngList:Se,ngChange:Te,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ue,ngModelOptions:Ve}).directive({ngInclude:We}).directive(vb).directive(Lc);a.provider({$anchorScroll:Xe,
$animate:Ye,$animateCss:Ze,$$animateJs:$e,$$animateQueue:af,$$AnimateRunner:bf,$$animateAsyncRun:cf,$browser:df,$cacheFactory:ef,$controller:ff,$document:gf,$exceptionHandler:hf,$filter:Mc,$$forceReflow:jf,$interpolate:kf,$interval:lf,$http:mf,$httpParamSerializer:nf,$httpParamSerializerJQLike:of,$httpBackend:pf,$xhrFactory:qf,$jsonpCallbacks:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,
$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function db(a){return a.replace(Kf,function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ja[c]||ja._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=$a(f,d.childNodes);d=e.firstChild;
d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";q(f,function(a){e.appendChild(a)});return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function O(a){if(a instanceof O)return a;var b;G(a)&&(a=W(a),b=!0);if(!(this instanceof O)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new O(a)}if(b){b=C.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,
b){b||eb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)eb(d[c])}function Rc(a,b,d,c){if(w(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];w(d)&&Za(c||[],d);w(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};q(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function eb(a,b){var d=a.ng339,c=d&&fb[d];c&&(b?delete c.data[b]:
(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete fb[d],a.ng339=void 0))}function xb(a,b){var d=a.ng339,d=d&&fb[d];b&&!d&&(a.ng339=d=++Pf,d=fb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=w(d),e=!c&&b&&!D(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];S(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&
q(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=
b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,b,d){9==a.nodeType&&(a=a.documentElement);for(b=L(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(w(d=F.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||C;if("complete"===b.document.readyState)b.setTimeout(a);else F(b).on("load",
a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[wa(a)]&&d}function Rf(a,b){var d=function(c,d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(y(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||
Sf;1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return S(O,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ca(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&
(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||Yd)():d+":"+a}function Ra(a,b){if(b){var d=0;this.nextUid=function(){return++d}}q(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function cb(a,b){function d(a){return function(b,c){if(D(b))q(b,uc(a));else return a(b,c)}}function c(a,b){Qa(a,
"service");if(z(b)||L(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=b}function e(a,b){return function(){var c=B.invoke(b,this);if(y(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(y(a)||L(a),"modulesToLoad","not an array");var b=[],c;q(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{G(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),
d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):L(a)?b.push(p.invoke(a)):Pa(a,"module")}catch(e){throw L(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,
c,f){var g=[];a=cb.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);L(a)&&(a=a[a.length-1]);d=11>=Ea?!1:"function"===typeof a&&/^(?:class\b|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=
L(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,a))},get:d,annotate:cb.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Ra([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,ha(b),!1)}),constant:d(function(a,b){Qa(a,"constant");n[a]=b;u[a]=b}),decorator:function(a,b){var c=
p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ca.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),u={},R=h(u,function(a,b){var c=p.get(a+"Provider",b);return B.invoke(c.$get,c,void 0,a)}),B=R;n.$injectorProvider={$get:ha(R)};var r=g(a),B=R.get("$injector");B.strictDi=b;q(r,function(a){a&&B.invoke(a)});return B}function Xe(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window",
"$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===wa(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):T(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=G(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===
a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function gb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;L(a)&&(a=a.join(" "));L(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){G(a)&&(a=a.split(" "));var b=U();q(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return D(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(R--,0===R)for(;B.length;)try{B.pop()()}catch(b){d.error(b)}}}
function f(){t=null;g();h()}function g(){r=K();r=y(r)?null:r;na(r,E)&&(r=E);E=r}function h(){if(v!==k.url()||J!==r)v=k.url(),J=r,q(M,function(a){a(k.url(),r)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,u={};k.isMock=!1;var R=0,B=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){R++};k.notifyWhenNoOutstandingRequests=function(a){0===R?a():B.push(a)};var r,J,v=l.href,fa=b.find("base"),t=null,K=c.history?function(){try{return m.state}catch(a){}}:
A;g();J=r;k.url=function(b,d,e){y(e)&&(e=null);l!==a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=J===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;J=e;!c.history||h&&f?(h||(t=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(t=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),J=r);t&&(t=b);return k}return t||l.href.replace(/%27/g,"'")};k.state=function(){return r};var M=[],H=!1,E=null;k.onUrlChange=function(b){if(!H){if(c.history)F(a).on("popstate",
f);F(a).on("hashchange",f);H=!0}M.push(b);return b};k.$$applicationDestroyed=function(){F(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=fa.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;R++;c=n(function(){delete u[c];e(a)},b||0);u[c]=!0;return c};k.defer.cancel=function(a){return u[a]?(delete u[a],p(a),e(A),!0):!1}}function df(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,
d)}]}function ef(){this.$get=function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw N("$cacheFactory")("iid",a);var g=0,h=S({},c,{id:a}),k=U(),l=c&&c.capacity||Number.MAX_VALUE,m=U(),n=null,p=null;return b[a]={put:function(a,b){if(!y(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];
if(!b)return;e(b)}return k[a]},remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=U();g=0;m=U();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return S({},h,{size:g})}}}var b={};a.info=function(){var a={};q(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}
function Fc(a,b){function d(a,b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=U();q(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw ga("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==Q(b))throw ga("baddir",a);if(a!==a.trim())throw ga("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;
!L(b)&&D(b)&&q(b,function(a,c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=be("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=U();this.directive=function B(b,d){Qa(b,"directive");G(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];q(f[b],function(f,g){try{var h=
a.invoke(f);z(h)?h={compile:ha(h)}:!h.compile&&h.link&&(h.compile=ha(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):q(b,uc(B));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||L(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||
b.controllerAs||"$ctrl",template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};q(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};q(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return w(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return w(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return w(a)?(p=a,this):p};var u=10;this.onChangesTtl=function(a){return arguments.length?(u=a,this):u};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,t,K,M,H,E){function I(){try{if(!--qa)throw Y=void 0,ga("infchng",u);K.$apply(function(){for(var a=
[],b=0,c=Y.length;b<c;++b)try{Y[b]()}catch(d){a.push(d)}Y=void 0;if(a.length)throw a;})}finally{qa++}}function Da(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function P(a,b,c){pa.innerHTML="<span "+b+">";b=pa.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function x(a,b){try{a.addClass(b)}catch(c){}}function aa(a,b,c,d,e){a instanceof F||(a=F(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Ma&&k.nodeValue.match(f)&&Pc(k,a[g]=C.document.createElement("span"))}var l=s(a,b,a,c,d,e);aa.$$addScopeClass(a);var m=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);m||(m=(d=d&&d[0])?"foreignobject"!==wa(d)&&ma.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==m?F(da(m,F("<div>").append(a).html())):
c?Oa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);aa.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function s(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,m,p,r,v;if(n)for(v=Array(c.length),m=0;m<h.length;m+=3)f=h[m],v[f]=c[f];else v=c;m=0;for(p=h.length;m<p;)k=v[h[m++]],c=h[m++],f=h[m++],c?(c.scope?(l=a.$new(),aa.$$addScopeInfo(F(k),l)):l=a,r=c.transcludeOnThisElement?za(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?za(a,b):null,c(f,l,k,d,r)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,m,p,n,r=0;r<a.length;r++){k=new Da;l=$b(a[r],[],k,0===r?d:void 0,e);(f=l.length?oa(l,a[r],k,b,c,null,[],[],f):null)&&f.scope&&aa.$$addScopeClass(k.$$element);k=f&&f.terminal||!(m=a[r].childNodes)||!m.length?null:s(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(r,f,k),p=!0,n=n||f;f=null}return p?g:null}function za(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=U(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?za(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr;switch(a.nodeType){case 1:O(b,Aa(wa(a)),"E",d,e);for(var g,k,l,m,p=a.attributes,n=0,r=p&&p.length;n<r;n++){var v=!1,u=!1;g=p[n];k=g.name;l=W(g.value);g=Aa(k);if(m=Ba.test(g))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(g=g.match(Ca))&&V(g[1])&&(v=k,u=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));g=Aa(k.toLowerCase());f[g]=k;if(m||!c.hasOwnProperty(g))c[g]=l,Uc(a,g)&&(c[g]=!0);ia(a,b,l,g,m);O(b,g,"A",d,e,v,u)}f=a.className;D(f)&&(f=f.animVal);if(G(f)&&""!==f)for(;a=h.exec(f);)g=Aa(a[2]),O(b,g,"C",d,e)&&(c[g]=W(a[3])),f=f.substr(a.index+a[0].length);break;case Ma:if(11===Ea)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ma;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);ca(b,a.nodeValue);break;case 8:hb(a,b,c,d,e)}b.sort(Z);
return b}function hb(a,b,c,d,e){try{var f=g.exec(a.nodeValue);if(f){var h=Aa(f[1]);O(b,h,"M",d,e)&&(c[h]=W(f[2]))}}catch(k){}}function N(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ga("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return F(d)}function Zc(a,b,c){return function(d,e,f,g,h){e=N(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?aa(b,c,d,e,f):function(){g||
(g=aa(b,c,d,e,f),b=c=f=null);return g.apply(this,arguments)}}function oa(a,b,d,e,f,g,h,k,l){function m(a,b,c,d){if(a){c&&(a=Zc(a,c,d));a.require=x.require;a.directiveName=I;if(u===x||x.$$isolateScope)a=ja(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Zc(b,c,d));b.require=x.require;b.directiveName=I;if(u===x||x.$$isolateScope)b=ja(b,{isolateScope:!0});k.push(b)}}function p(a,e,f,g,l){function m(a,b,c,d){var e;Ya(a)||(d=c,c=b,b=a,a=void 0);fa&&(e=t);c||(c=fa?I.parent():I);if(d){var f=l.$$slots[d];if(f)return f(a,
b,e,c,s);if(y(f))throw ga("noslot",d,ya(I));}else return l(a,b,e,c,s)}var n,E,x,M,B,t,P,I;b===f?(g=d,I=d.$$element):(I=F(f),g=new Da(I,d));B=e;u?M=e.$new(!0):r&&(B=e.$parent);l&&(P=m,P.$$boundTransclude=l,P.isSlotFilled=function(a){return!!l.$$slots[a]});v&&(t=ag(I,g,P,v,M,e,u));u&&(aa.$$addScopeInfo(I,M,!0,!(H&&(H===u||H===u.$$originalDirective))),aa.$$addScopeClass(I,!0),M.$$isolateBindings=u.$$isolateBindings,E=ka(e,g,M,M.$$isolateBindings,u),E.removeWatches&&M.$on("$destroy",E.removeWatches));
for(n in t){E=v[n];x=t[n];var Zb=E.$$bindings.bindToController;x.bindingInfo=x.identifier&&Zb?ka(B,g,x.instance,Zb,E):{};var K=x();K!==x.instance&&(x.instance=K,I.data("$"+E.name+"Controller",K),x.bindingInfo.removeWatches&&x.bindingInfo.removeWatches(),x.bindingInfo=ka(B,g,x.instance,Zb,E))}q(v,function(a,b){var c=a.require;a.bindToController&&!L(c)&&D(c)&&S(t[b].instance,ib(b,c,I,t))});q(t,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$doCheck)&&
(B.$watch(function(){b.$doCheck()}),b.$doCheck());z(b.$onDestroy)&&B.$on("$destroy",function(){b.$onDestroy()})});n=0;for(E=h.length;n<E;n++)x=h[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);var s=e;u&&(u.template||null===u.templateUrl)&&(s=M);a&&a(s,f.childNodes,void 0,l);for(n=k.length-1;0<=n;n--)x=k[n],la(x,x.isolateScope?M:e,I,g,x.require&&ib(x.directiveName,x.require,I,t),P);q(t,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var n=-Number.MAX_VALUE,
r=l.newScopeDirective,v=l.controllerDirectives,u=l.newIsolateScopeDirective,H=l.templateDirective,E=l.nonTlbTranscludeDirective,M=!1,B=!1,fa=l.hasElementTranscludeDirective,t=d.$$element=F(b),x,I,P,K=e,s,Fa=!1,za=!1,w,A=0,C=a.length;A<C;A++){x=a[A];var G=x.$$start,hb=x.$$end;G&&(t=N(b,G,hb));P=void 0;if(n>x.priority)break;if(w=x.scope)x.templateUrl||(D(w)?(X("new/isolated scope",u||r,x,t),u=x):X("new/isolated scope",u,x,t)),r=r||x;I=x.name;if(!Fa&&(x.replace&&(x.templateUrl||x.template)||x.transclude&&
!x.$$tlb)){for(w=A+1;Fa=a[w++];)if(Fa.transclude&&!Fa.$$tlb||Fa.replace&&(Fa.templateUrl||Fa.template)){za=!0;break}Fa=!0}!x.templateUrl&&x.controller&&(w=x.controller,v=v||U(),X("'"+I+"' controller",v[I],x,t),v[I]=x);if(w=x.transclude)if(M=!0,x.$$tlb||(X("transclusion",E,x,t),E=x),"element"==w)fa=!0,n=x.priority,P=t,t=d.$$element=F(aa.$$createComment(I,d[I])),b=t[0],ea(f,va.call(P,0),b),P[0].$$parentNode=P[0].parentNode,K=ac(za,P,e,n,g&&g.name,{nonTlbTranscludeDirective:E});else{var oa=U();P=F(Xb(b)).contents();
if(D(w)){P=[];var Q=U(),O=U();q(w,function(a,b){var c="?"===a.charAt(0);a=c?a.substring(1):a;Q[a]=b;oa[b]=null;O[b]=c});q(t.contents(),function(a){var b=Q[Aa(wa(a))];b?(O[b]=!0,oa[b]=oa[b]||[],oa[b].push(a)):P.push(a)});q(O,function(a,b){if(!a)throw ga("reqslot",b);});for(var V in oa)oa[V]&&(oa[V]=ac(za,oa[V],e))}t.empty();K=ac(za,P,e,void 0,void 0,{needsNewScope:x.$$isolateScope||x.$$newScope});K.$$slots=oa}if(x.template)if(B=!0,X("template",H,x,t),H=x,w=z(x.template)?x.template(t,d):x.template,
w=xa(w),x.replace){g=x;P=Vb.test(w)?$c(da(x.templateNamespace,W(w))):[];b=P[0];if(1!=P.length||1!==b.nodeType)throw ga("tplrt",I,"");ea(f,t,b);C={$attr:{}};w=$b(b,[],C);var Z=a.splice(A+1,a.length-(A+1));(u||r)&&T(w,u,r);a=a.concat(w).concat(Z);$(d,C);C=a.length}else t.html(w);if(x.templateUrl)B=!0,X("template",H,x,t),H=x,x.replace&&(g=x),p=ba(a.splice(A,a.length-A),t,d,f,M&&K,h,k,{controllerDirectives:v,newScopeDirective:r!==x&&r,newIsolateScopeDirective:u,templateDirective:H,nonTlbTranscludeDirective:E}),
C=a.length;else if(x.compile)try{s=x.compile(t,d,K);var Y=x.$$originalDirective||x;z(s)?m(null,ab(Y,s),G,hb):s&&m(ab(Y,s.pre),ab(Y,s.post),G,hb)}catch(ca){c(ca,ya(t))}x.terminal&&(p.terminal=!0,n=Math.max(n,x.priority))}p.scope=r&&!0===r.scope;p.transcludeOnThisElement=M;p.templateOnThisElement=B;p.transclude=K;l.hasElementTranscludeDirective=fa;return p}function ib(a,b,c,d){var e;if(G(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&
e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):c.data(h)}if(!e&&!f)throw ga("ctreq",b,a);}else if(L(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else D(b)&&(e={},q(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=U(),k;for(k in d){var l=d[k],m={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},p=l.controller;"@"==p&&(p=b[l.name]);m=t(p,m,!0,l.controllerAs);h[l.name]=m;a.data("$"+l.name+"Controller",m.instance)}return h}
function T(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],{$$isolateScope:b,$$newScope:c})}function O(b,e,g,h,k,l,m){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var p;e=a.get(e+"Directive");for(var n=0,r=e.length;n<r;n++)try{if(p=e[n],(y(h)||h>p.priority)&&-1!=p.restrict.indexOf(g)){l&&(p=Rb(p,{$$start:l,$$end:m}));if(!p.$$bindings){var u=p,v=p,x=p.name,H={isolateScope:null,bindToController:null};D(v.scope)&&(!0===v.bindToController?(H.bindToController=d(v.scope,x,!0),H.isolateScope={}):
H.isolateScope=d(v.scope,x,!1));D(v.bindToController)&&(H.bindToController=d(v.bindToController,x,!0));if(D(H.bindToController)){var E=v.controller,M=v.controllerAs;if(!E)throw ga("noctrl",x);if(!Xc(E,M))throw ga("noident",x);}var t=u.$$bindings=H;D(t.isolateScope)&&(p.$$isolateBindings=t.isolateScope)}b.push(p);k=p}}catch(I){c(I)}}return k}function V(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function $(a,b){var c=b.$attr,
d=a.$attr;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function ba(a,b,c,d,f,g,h,k){var l=[],m,p,n=b[0],r=a.shift(),u=Rb(r,{templateUrl:null,transclude:null,replace:null,$$originalDirective:r}),H=z(r.templateUrl)?r.templateUrl(b,c):r.templateUrl,E=r.templateNamespace;b.empty();e(H).then(function(e){var v,M;e=xa(e);if(r.replace){e=
Vb.test(e)?$c(da(E,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw ga("tplrt",r.name,H);e={$attr:{}};ea(d,b,v);var B=$b(v,[],e);D(r.scope)&&T(B,!0);a=B.concat(a);$(c,e)}else v=n,b.html(e);a.unshift(u);m=oa(a,v,c,f,b,r,g,h,k);q(d,function(a,c){a==v&&(d[c]=b[0])});for(p=s(b[0].childNodes,f);l.length;){e=l.shift();M=l.shift();var t=l.shift(),I=l.shift(),B=b[0];if(!e.$$destroyed){if(M!==n){var P=M.className;k.hasElementTranscludeDirective&&r.replace||(B=Xb(v));ea(t,F(M),B);x(F(B),P)}M=m.transcludeOnThisElement?
za(e,m.transclude,I):I;m(p,e,B,d,M)}}l=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(m.transcludeOnThisElement&&(a=za(b,m.transclude,e)),m(p,b,c,d,a)))}}function Z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ga("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,ya(d));}function ca(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&aa.$$addBindingClass(a);return function(a,c){var e=c.parent();b||aa.$$addBindingClass(e);aa.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function da(a,b){a=Q(a||"html");switch(a){case "svg":case "math":var c=C.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ha(a,b){if("srcdoc"==b)return M.HTML;var c=wa(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=
c&&("src"==b||"ngSrc"==b))return M.RESOURCE_URL}function ia(a,c,d,e,f){var g=ha(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===wa(a))throw ga("selmulti",ya(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=U());if(m.test(e))throw ga("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,
b):k.$set(e,a)}))}}}})}}function ea(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=C.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);F.hasData(d)&&(F.data(c,F.data(d)),F(d).off("$destroy"));F.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ja(a,
b){return S(function(){return a.apply(null,arguments)},a,b)}function la(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,ya(d))}}function ka(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Y||(a.$$postDigest(I),Y=[]),m||(m={},Y.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;q(e,function(e,h){var m=e.attrName,p=e.optional,v,u,x,H;switch(e.mode){case "@":p||ua.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(G(a)||Ga(a))g(h,a,d[h]),
d[h]=a});c.$$observers[m].$$scope=a;v=c[m];G(v)?d[h]=b(v)(a):Ga(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!ua.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);H=u.literal?na:function(a,b){return a===b||a!==a&&b!==b};x=u.assign||function(){v=d[h]=u(a);throw ga("nonassign",c[m],m,f.name);};v=d[h]=u(a);p=function(b){H(b,d[h])||(H(b,v)?x(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,u.literal);k.push(p);break;case "<":if(!ua.call(c,
m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;u=n(c[m]);var E=d[h]=u(a);l[h]=new Fb(bc,d[h]);p=a.$watch(u,function(a,b){if(b===a){if(b===E)return;b=E}g(h,a,b);d[h]=a},u.literal);k.push(p);break;case "&":u=c.hasOwnProperty(m)?n(c[m]):A;if(u===A&&p)break;d[h]=function(b){return u(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ta=/^\w/,pa=C.document.createElement("div"),qa=u,Y;Da.prototype={$normalize:Aa,$addClass:function(a){a&&0<a.length&&
H.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&H.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&H.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&H.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=bd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=wa(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===
f&&"src"===a)this[a]=b=E(b,"src"===a);else if("img"===f&&"srcset"===a&&w(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var m=2*l,f=f+E(W(g[m]),!0),f=f+(" "+W(g[m+1]));g=W(g[2*l]).split(/\s/);f+=E(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||y(b)?this.$$element.removeAttr(e):ta.test(e)?this.$$element.attr(e,b):P(this.$$element[0],e,b));(a=this.$$observers)&&q(a[h],function(a){try{a(b)}catch(d){c(d)}})},
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=U()),e=d[a]||(d[a]=[]);e.push(b);K.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||y(c[a])||b(c[a])});return function(){Za(e,b)}}};var ra=b.startSymbol(),sa=b.endSymbol(),xa="{{"==ra&&"}}"==sa?Xa:function(a){return a.replace(/\{\{/g,ra).replace(/}}/g,sa)},Ba=/^ngAttr[A-Z]/,Ca=/^(.+)Start$/;aa.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];L(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;aa.$$addBindingClass=
p?function(a){x(a,"ng-binding")}:A;aa.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;aa.$$addScopeClass=p?function(a,b){x(a,b?"ng-isolate-scope":"ng-scope")}:A;aa.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return C.document.createComment(c)};return aa}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function Aa(a){return db(a.replace(Yc,""))}function ad(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),
f=0;a:for(;f<c.length;f++){for(var g=c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=F(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&G(b))return b;if(G(a)){var d=cd.exec(a);if(d)return d[3]}}function ff(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Qa(b,"controller");D(b)?S(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector",
"$window",function(d,c){function e(a,b,c,d){if(!a||!D(a.$scope))throw N("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&G(k)&&(n=k);if(G(f)){k=f.match(cd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Pa(f,m,!0)}if(h)return h=(L(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),S(function(){var a=d.invoke(f,l,g,m);a!==l&&(D(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},
{instance:l,identifier:n});l=d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function gf(){this.$get=["$window",function(a){return F(a.document)}]}function hf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return D(a)?da(a)?a.toISOString():bb(a):a}function nf(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||y(a)||(L(a)?q(a,function(a){b.push(ea(c)+"="+ea(cc(a)))}):b.push(ea(c)+"="+ea(cc(a))))});
return b.join("&")}}}function of(){this.$get=function(){return function(a){function b(a,e,f){null===a||y(a)||(L(a)?q(a,function(a,c){b(a,e+"["+(D(a)?c:"")+"]")}):D(a)&&!da(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ea(e)+"="+ea(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(G(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(dd))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function ed(a){var b=
U(),d;G(a)?q(a.split("\n"),function(a){d=a.indexOf(":");var e=Q(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):D(a)&&q(a,function(a,d){var f=Q(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function fd(a){var b;return function(d){b||(b=ed(a));return d?(d=b[Q(d)],void 0===d&&(d=null),d):b}}function gd(a,b,d,c){if(z(c))return c(a,b,d);q(c,function(c){a=c(a,b,d)});return a}function mf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return D(a)&&"[object File]"!==
ma.call(a)&&"[object Blob]"!==ma.call(a)&&"[object FormData]"!==ma.call(a)?bb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ec),put:ia(ec),patch:ia(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return w(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return w(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory",
"$rootScope","$q","$injector",function(e,f,g,h,k,l){function m(b){function c(a,b){for(var d=0,e=b.length;d<e;){var f=b[d++],g=b[d++];a=a.then(f,g)}b.length=0;return a}function e(a,b){var c,d={};q(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}function f(a){var b=S({},a);b.data=gd(a.data,a.headers,a.status,g.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}if(!D(b))throw N("$http")("badreq",b);if(!G(b.url))throw N("$http")("badreq",b.url);var g=S({method:"get",transformRequest:a.transformRequest,
transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);g.headers=function(b){var c=a.headers,d=S({},b.headers),f,g,h,c=S({},c.common,c[Q(b.method)]);a:for(f in c){g=Q(f);for(h in d)if(Q(h)===g)continue a;d[f]=c[f]}return e(d,ia(b))}(b);g.method=ub(g.method);g.paramSerializer=G(g.paramSerializer)?l.get(g.paramSerializer):g.paramSerializer;var h=[],m=[],p=k.when(g);q(R,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&m.push(a.response,
a.responseError)});p=c(p,h);p=p.then(function(b){var c=b.headers,d=gd(b.data,fd(c),void 0,b.transformRequest);y(d)&&q(c,function(a,b){"content-type"===Q(b)&&delete c[b]});y(b.withCredentials)&&!y(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,d).then(f,f)});p=c(p,m);d?(p.success=function(a){Pa(a,"fn");p.then(function(b){a(b.data,b.status,b.headers,g)});return p},p.error=function(a){Pa(a,"fn");p.then(null,function(b){a(b.data,b.status,b.headers,g)});return p}):(p.success=hd("success"),
p.error=hd("error"));return p}function n(c,d){function g(a){if(a){var c={};q(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}E&&(200<=a&&300>a?E.put(P,[a,c,ed(d),e]):E.remove(P));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?M.resolve:M.reject)({data:a,status:b,headers:fd(d),config:c,statusText:e})}function t(a){n(a.data,a.status,ia(a.headers()),
a.statusText)}function R(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,1)}var M=k.defer(),H=M.promise,E,I,Da=c.headers,P=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);H.then(R,R);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(E=D(c.cache)?c.cache:D(a.cache)?a.cache:u);E&&(I=E.get(P),w(I)?I&&z(I.then)?I.then(t,t):L(I)?n(I[1],I[0],ia(I[2]),I[3]):n(I,200,{},"OK"):E.put(P,H));y(I)&&((I=id(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:
void 0)&&(Da[c.xsrfHeaderName||a.xsrfHeaderName]=I),e(c.method,P,d,l,Da,c.timeout,c.withCredentials,c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return H}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var u=g("$http");a.paramSerializer=G(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var R=[];q(c,function(a){R.unshift(G(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){q(arguments,function(a){m[a]=function(b,c){return m(S({},c||{},
{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){m[a]=function(b,c,d){return m(S({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function qf(){this.$get=function(){return function(){return new C.XMLHttpRequest}}}function pf(){this.$get=["$browser","$jsonpCallbacks","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){a=a.replace("JSON_CALLBACK",b);var f=
e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,u="unknown";a&&("load"!==a.type||c.wasCalled(b)||(a={type:"error"}),u=a.type,g="error"===a.type?404:200);d&&d(g,u)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,u,R,B){function r(){fa&&fa();t&&t.abort()}function J(b,c,e,
f,g){w(M)&&d.cancel(M);fa=t=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"===Q(e))var v=c.createCallback(h),fa=f(h,v,function(a,b){var d=200===a&&c.getResponse(v);J(l,a,d,"",b);c.removeCallback(v)});else{var t=b(e,h);t.open(e,h,!0);q(m,function(a,b){w(a)&&t.setRequestHeader(b,a)});t.onload=function(){var a=t.statusText||"",b="response"in t?t.response:t.responseText,c=1223===t.status?204:t.status;0===c&&(c=b?200:"file"==Y(h).protocol?404:
0);J(l,c,b,t.getAllResponseHeaders(),a)};e=function(){J(l,-1,null,null,"")};t.onerror=e;t.onabort=e;q(R,function(a,b){t.addEventListener(b,a)});q(B,function(a,b){t.upload.addEventListener(b,a)});p&&(t.withCredentials=!0);if(u)try{t.responseType=u}catch(K){if("json"!==u)throw K;}t.send(y(k)?null:k)}if(0<n)var M=d(r,n);else n&&z(n.then)&&n.then(r)}}function kf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse",
"$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,p,n){function J(a){try{var b=a;a=p?e.getTrusted(p,b):e.valueOf(b);var d;if(n&&!w(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=bb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),
v=ha(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}n=!!n;var q,t,K=0,M=[],H=[];v=f.length;for(var E=[],I=[];K<v;)if(-1!=(q=f.indexOf(a,K))&&-1!=(t=f.indexOf(b,q+l)))K!==q&&E.push(g(f.substring(K,q))),K=f.substring(q+l,t),M.push(K),H.push(d(K,J)),K=t+m,I.push(E.length),E.push("");else{K!==v&&E.push(g(f.substring(K)));break}p&&1<E.length&&Ka.throwNoconcat(f);if(!k||M.length){var Da=function(a){for(var b=0,c=M.length;b<c;b++){if(n&&y(a[b]))return;E[I[b]]=a[b]}return E.join("")};return S(function(a){var b=
0,d=M.length,e=Array(d);try{for(;b<d;b++)e[b]=H[b](a);return Da(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:M,$$watchDelegate:function(a,b){var c;return a.$watchGroup(H,function(d,e){var f=Da(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function lf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,
b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,u):f(r)}var p=4<arguments.length,u=p?va.call(arguments,4):[],R=b.setInterval,q=b.clearInterval,r=0,J=w(m)&&!m,v=(J?c:d).defer(),fa=v.promise;l=w(l)?l:0;fa.$$intervalId=R(function(){J?e.defer(n):a.$evalAsync(n);v.notify(r++);0<l&&r>=l&&(v.resolve(r),q(fa.$$intervalId),delete g[fa.$$intervalId]);J||a.$apply()},k);g[fa.$$intervalId]=v;return fa}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),
delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=qb(a[b]);return a.join("/")}function jd(a,b){var d=Y(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=Z(d.port)||hg[d.protocol]||null}function kd(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=Y(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path=
"/"+b.$$path)}function ka(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";jd(a,this);this.$$parse=function(a){var d=ka(b,a);if(!G(d))throw Gb("ipthprfx",a,b);kd(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+
a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;w(f=ka(a,c))?(g=f,g=w(f=ka(d,f))?b+(ka("/",f)||f):a+g):w(f=ka(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){jd(a,this);this.$$parse=function(c){var e=ka(a,c)||ka(b,c),f;y(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",y(e)&&(a=c,this.replace())):(f=ka(d,e),y(f)&&(f=e));kd(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,
0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function ld(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?
f=c:(g=ka(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function md(a,b){return function(d){if(y(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return w(b)?(a=b,this):
a};this.html5Mode=function(a){return Ga(a)?(b.enabled=a,this):D(a)?(Ga(a.enabled)&&(b.enabled=a.enabled),Ga(a.requireBase)&&(b.requireBase=a.requireBase),Ga(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,
b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",n.indexOf("//")+2))+(m||"/");m=e.history?gc:ld}else p=Ja(n),m=hc;var u=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,u,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var R=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=F(a.target);"a"!==wa(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;
var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");D(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Y(h.animVal).href);R.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var q=!0;c.onUrlChange(function(a,b){y(ka(u,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=
b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=e,h(c,!1,e)):(q=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,m=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(q||m)q=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(m&&h(b,g,f===l.$$state?null:l.$$state),
k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return w(b)?(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];q(arguments,function(b){a.push(c(b))});
return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Sa(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw X("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a.window===a)throw X("isecwindow",b);if(a.children&&
(a.nodeName||a.prop&&a.attr&&a.find))throw X("isecdom",b);if(a===Object)throw X("isecobj",b);}return a}function nd(a,b){if(a){if(a.constructor===a)throw X("isecfn",b);if(a===jg||a===kg||a===lg)throw X("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw X("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function od(a,b){return"undefined"===typeof a?b:"undefined"===
typeof b?a:a+b}function V(a,b){var d,c;switch(a.type){case s.Program:d=!0;q(a.body,function(a){V(a.expression,b);d=d&&a.expression.constant});a.constant=d;break;case s.Literal:a.constant=!0;a.toWatch=[];break;case s.UnaryExpression:V(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case s.BinaryExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case s.LogicalExpression:V(a.left,b);V(a.right,
b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case s.ConditionalExpression:V(a.test,b);V(a.alternate,b);V(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case s.Identifier:a.constant=!1;a.toWatch=[a];break;case s.MemberExpression:V(a.object,b);a.computed&&V(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case s.CallExpression:d=a.filter?!b(a.callee.name).$stateful:
!1;c=[];q(a.arguments,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case s.AssignmentExpression:V(a.left,b);V(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case s.ArrayExpression:d=!0;c=[];q(a.elements,function(a){V(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case s.ObjectExpression:d=!0;c=[];q(a.properties,function(a){V(a.value,
b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});a.constant=d;a.toWatch=c;break;case s.ThisExpression:a.constant=!1;a.toWatch=[];break;case s.LocalsExpression:a.constant=!1,a.toWatch=[]}}function pd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function qd(a){return a.type===s.Identifier||a.type===s.MemberExpression}function rd(a){if(1===a.body.length&&qd(a.body[0].expression))return{type:s.AssignmentExpression,
left:a.body[0].expression,right:{type:s.NGValueParameter},operator:"="}}function sd(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===s.Literal||a.body[0].expression.type===s.ArrayExpression||a.body[0].expression.type===s.ObjectExpression)}function td(a,b){this.astBuilder=a;this.$filter=b}function ud(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=U(),b=U(),d={"true":!0,
"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,H;e=e||J;switch(typeof c){case "string":H=c=c.trim();var E=e?b:a;g=E[H];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?r:B;var q=new jc(g);g=(new kc(q,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));E[H]=
g}return u(g,d);case "function":return u(c,d);default:return u(A,d)}}function h(a){function b(c,d,e,f){var g=J;J=!0;try{return a(c,d,e,f)}finally{J=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,
e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],m=[],p=0,n=f.length;p<n;p++)l[p]=k,m[p]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))m[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,m));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);w(a)&&
d.$$postDigest(function(){w(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;q(a,function(a){w(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function u(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,
d,e,f);c=b(e,c,d);return w(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var R=Ba().noUnsafeEval,B={csp:R,expensiveChecks:!1,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},r={csp:R,expensiveChecks:!0,literals:pa(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},J=!1;g.$$runningExpensiveChecks=function(){return J};return g}]}function wf(){this.$get=
["$rootScope","$exceptionHandler",function(a,b){return vd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=["$browser","$exceptionHandler",function(a,b){return vd(function(b){a.defer(b)},b)}]}function vd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];
try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}function f(){this.promise=new d}var g=N("$q",TypeError),h=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};S(d.prototype,{then:function(a,b,c){if(y(a)&&y(b)&&y(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,
a)},"finally":function(a,b){return this.then(function(b){return l(b,!0,a)},function(b){return l(b,!1,a)},b)}});S(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(D(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=
1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var k=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},
l=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return k(e,!1)}return d&&z(d.then)?d.then(function(){return k(a,b)},function(a){return k(a,!1)}):k(a,b)},m=function(a,b,c,d){var e=new f;e.resolve(a);return e.promise.then(b,c,d)},n=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};n.prototype=d.prototype;n.defer=h;n.reject=function(a){var b=new f;b.reject(a);return b.promise};n.when=m;n.resolve=m;n.all=function(a){var b=
new f,c=0,d=L(a)?[]:{};q(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};n.race=function(a){var b=h();q(a,function(a){m(a).then(b.resolve,b.reject)});return b.promise};return n}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,
e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=N("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=
["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ea&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount=
{};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(J.$$phase)throw d("inprog",J.$$phase);J.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function u(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function s(){}function B(){for(;t.length;)try{t.shift()()}catch(a){f(a)}e=null}function r(){null===e&&(e=h.defer(function(){J.$apply(B)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?
(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:s,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,
1);return function(){0<=Za(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});q(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!y(e)){if(D(e))if(ta(e))for(f!==n&&(f=n,u=f.length=0,l++),a=e.length,u!==a&&(l++,f.length=u=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==p&&(f=p={},u=0,l++);a=0;for(b in e)ua.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(u++,f[b]=g,l++));if(u>a)for(b in l++,f)ua.call(e,b)||(u--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=
g(a,c),n=[],p={},r=!0,u=0;return this.$watch(m,function(){r?(r=!1,b(e,e,d)):b(e,h,d);if(k)if(D(e))if(ta(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)ua.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,g,k,l,m,p,u,r,q=b,t,y=[],A,C;n("$digest");h.$$checkUrlChange();this===J&&null!==e&&(h.defer.cancel(e),B());c=null;do{r=!1;t=this;for(p=0;p<v.length;p++){try{C=v[p],C.scope.$eval(C.expression,C.locals)}catch(F){f(F)}c=null}v.length=0;a:do{if(p=t.$$watchers)for(u=
p.length;u--;)try{if(a=p[u])if(m=a.get,(g=m(t))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))r=!0,c=a,a.last=a.eq?pa(g,null):g,l=a.fn,l(g,k===s?g:k,t),5>q&&(A=4-q,y[A]||(y[A]=[]),y[A].push({msg:z(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){r=!1;break a}}catch(G){f(G)}if(!(p=t.$$watchersCount&&t.$$childHead||t!==this&&t.$$nextSibling))for(;t!==this&&!(p=t.$$nextSibling);)t=t.$parent}while(t=p);if((r||v.length)&&
!q--)throw J.$$phase=null,d("infdig",b,y);}while(r||v.length);for(J.$$phase=null;K<w.length;)try{w[K++]()}catch(D){f(D)}w.length=K=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===J&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)u(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&
(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){J.$$phase||v.length||h.defer(function(){v.length&&J.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){w.push(a)},
$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{J.$$phase=null}}catch(b){f(b)}finally{try{J.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&t.push(b);a=g(a);r()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,u(e,1,a))}},$emit:function(a,
b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=$a([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=
!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=$a([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var J=new m,v=J.$$asyncQueue=[],w=J.$$postDigestQueue=[],t=J.$$applyAsyncQueue=[],K=0;return J}]}function ne(){var a=
/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return w(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return w(a)?(b=a,this):b};this.$get=function(){return function(d,c){var e=c?b:a,f;f=Y(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(G(a)){if(-1<a.indexOf("***"))throw sa("iwcard",a);a=wd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+
a+"$")}if(Wa(a))return new RegExp("^"+a.source+"$");throw sa("imatcher");}function xd(a){var b=[];w(a)&&q(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=la;var a=["self"],b=[];this.resourceUrlWhitelist=function(b){arguments.length&&(a=xd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=xd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?id(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw sa("unsafe");};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[la.HTML]=e(g);h[la.CSS]=e(g);h[la.URL]=e(g);h[la.JS]=e(g);h[la.RESOURCE_URL]=e(h[la.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||y(b)||
""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||y(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===la.RESOURCE_URL){var g=Y(e.toString()),n,p,u=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){u=!0;break}if(u)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){u=!1;break}if(u)return e;throw sa("insecurl",e.toString());}if(d===la.HTML)return f(e);throw sa("unsafe");},valueOf:function(a){return a instanceof
g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ea)throw sa("iequirks");var c=ia(la);c.isEnabled=function(){return a};c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Xa);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,
f=c.getTrusted,g=c.trustAs;q(la,function(a,b){var d=Q(b);c[db("parse_as_"+d)]=function(b){return e(a,b)};c[db("get_trusted_"+d)]=function(b){return f(a,b)};c[db("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window","$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=Z((/android (\d+)/.exec(Q((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,
l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in l);!e||m&&n||(m=G(l.webkitTransition),n=G(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ea)return!1;if(y(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Ba(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}
function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!G(g)||y(b.get(g)))g=e.getTrustedResourceUrl(g);var k=d.defaults&&d.defaults.transformResponse;L(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,S({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",
g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");var g=[];q(a,function(a){var c=ca.element(a).data("$binding");c&&q(c,function(c){d?(new RegExp("(^|\\s)"+wd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=
a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=va.call(arguments,3),n=w(l)&&!l,p=(n?c:d).defer(),u=p.promise,q;q=b.defer(function(){try{p.resolve(f.apply(null,
m))}catch(b){p.reject(b),e(b)}finally{delete g[u.$$timeoutId]}n||a.$apply()},k);u.$$timeoutId=q;g[q]=p;return u}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1};return f}]}function Y(a){Ea&&($.setAttribute("href",a),a=$.href);$.setAttribute("href",a);return{href:$.href,protocol:$.protocol?$.protocol.replace(/:$/,""):"",host:$.host,search:$.search?$.search.replace(/^\?/,""):"",hash:$.hash?$.hash.replace(/^#/,
""):"",hostname:$.hostname,port:$.port,pathname:"/"===$.pathname.charAt(0)?$.pathname:"/"+$.pathname}}function id(a){a=G(a)?Y(a):a;return a.protocol===yd.protocol&&a.host===yd.host}function Ff(){this.$get=ha(C)}function zd(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),y(c[l])&&(c[l]=b(g.substring(k+
1))));return c}}function Jf(){this.$get=zd}function Mc(a){function b(d,c){if(D(d)){var e={};q(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Ad);b("date",Bd);b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Cd);b("orderBy",Dd);b("uppercase",ug)}function qg(){return function(a,b,d,c){if(!ta(a)){if(null==a)return a;throw N("filter")("notarray",
a);}c=c||"$";var e;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":e=!0;case "object":b=vg(b,d,c,e);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d,c){var e=D(a)&&d in a;!0===b?b=na:z(b)||(b=function(a,b){if(y(a))return!1;if(null===a||null===b)return a===b;if(D(b)||D(a)&&!vc(a))return!1;a=Q(""+a);b=Q(""+b);return-1!==a.indexOf(b)});return function(f){return e&&!D(f)?La(f,a[d],b,d,!1):La(f,a,b,d,c)}}function La(a,b,d,c,e,
f){var g=lc(a),h=lc(b);if("string"===h&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c,e);if(L(a))return a.some(function(a){return La(a,b,d,c,e)});switch(g){case "object":var k;if(e){for(k in a)if("$"!==k.charAt(0)&&La(a[k],b,d,c,!0))return!0;return f?!1:La(a,b,d,c,!1)}if("object"===h){for(k in b)if(f=b[k],!z(f)&&!y(f)&&(g=k===c,!La(g?a:a[k],f,d,c,g,g)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Ad(a){var b=
a.NUMBER_FORMATS;return function(a,c,e){y(c)&&(c=b.CURRENCY_SYM);y(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Ed(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Cd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Ed(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=0,d,c,e,f,g;-1<(c=a.indexOf(Fd))&&(a=a.replace(Fd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);
if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Gd&&(d=d.splice(0,Gd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=y(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;
for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Ed(a,b,d,c,e){if(!G(a)&&!T(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>
b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+a}function ba(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=
c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Hd(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Id(a){return function(b){var d=Hd(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Bd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=Z(b[9]+b[10]),g=Z(b[9]+b[11]));h.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));f=Z(b[4]||0)-f;g=Z(b[5]||0)-g;h=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;G(c)&&(c=yg.test(c)?Z(c):b(c));T(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;
for(;d;)(l=zg.exec(d))?(h=$a(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));q(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){y(b)&&(b=2);return bb(a,b)}}function sg(){return function(a,b,d){b=Infinity===Math.abs(Number(b))?Number(b):Z(b);if(isNaN(b))return a;T(a)&&(a=a.toString());if(!ta(a))return a;d=!d||isNaN(d)?0:Z(d);d=0>d?Math.max(0,a.length+
d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return G(a)?a.slice(b,d):va.call(a,b,d)}function Dd(a){function b(b){return b.map(function(b){var c=1,d=Xa;if(z(b))d=b;else if(G(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}
function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(D(k)&&(k=a.index),D(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!ta(a))throw N("orderBy")("notarray",a);L(f)||(f=[f]);0===f.length&&(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=
c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ta(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return ha(a)}function Jd(a,b,d,
c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){q(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){q(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Qa(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=
a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];q(f.$pending,function(b,c){f.$setValidity(c,null,a)});q(f.$error,function(b,c){f.$setValidity(c,null,a)});q(f.$$success,function(b,c){f.$setValidity(c,null,a)});Za(g,a);a.$$parentForm=Lb};Kd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(Za(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Ua);c.addClass(a,
Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Ua,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;q(g,function(a){a.$setPristine()})};f.$setUntouched=function(){q(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=Q(b[0].type);if(!e.android){var h=
!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||
m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Ld[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(da(d))return d;if(G(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-
1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},q(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&
a.getTime()!==a.getTime())}function p(a){return w(a)&&!da(a)?d(a)||void 0:a}Md(e,f,g,h);lb(e,f,g,h,k,l);var u=h&&h.$options&&h.$options.timezone,q;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,q),u&&(a=Sb(a,u)),a});h.$formatters.push(function(a){if(a&&!da(a))throw nb("datefmt",a);if(n(a))return(q=a)&&u&&(q=Sb(q,u,!0)),m("date")(a,c,u);q=null;return""});if(w(g.min)||g.ngMin){var s;h.$validators.min=function(a){return!n(a)||y(s)||d(a)>=s};g.$observe("min",
function(a){s=p(a);h.$validate()})}if(w(g.max)||g.ngMax){var r;h.$validators.max=function(a){return!n(a)||y(r)||d(a)<=r};g.$observe("max",function(a){r=p(a);h.$validate()})}}}function Md(a,b,d,c){(c.$$hasNativeValidators=D(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Nd(a,b,d,c,e){if(w(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,
b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return L(a)?(q(a,function(a){b=b.concat(e(a))}),b):G(a)?a.split(" "):D(a)?(q(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}function l(a,b){var c=g.data("$classCounts")||U(),d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}
function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=L(a)?a.map(function(a){return ia(a)}):ia(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Kd(a){function b(a,
b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Od+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Od]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){y(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&h(c.$pending,a,f),Pd(c.$pending)&&(c.$pending=void 0));Ga(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,
a,f));c.$pending?(b(Qd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Qd,!1),c.$valid=Pd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Pd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=/^\/(.+)\/([a-z]*)$/,ua=Object.prototype.hasOwnProperty,Q=function(a){return G(a)?a.toLowerCase():a},ub=function(a){return G(a)?a.toUpperCase():a},Ea,F,qa,va=[].slice,
bg=[].splice,Dg=[].push,ma=Object.prototype.toString,wc=Object.getPrototypeOf,xa=N("ng"),ca=C.angular||(C.angular={}),Ub,pb=0;Ea=C.document.documentMode;A.$inject=[];Xa.$inject=[];var L=Array.isArray,ae=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return G(a)?a.trim():a},wd=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Ba=function(){if(!w(Ba.rules)){var a=C.document.querySelector("[ng-csp]")||
C.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Ba.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Ba;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Ba.rules},rb=function(){if(w(rb.name_))return rb.name_;var a,b,d=Na.length,c,e;for(b=0;b<d;++b)if(c=Na[b],a=C.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+
"jq");break}return rb.name_=e},de=/:/g,Na=["ng-","data-ng-","ng:","x-ng-"],ie=/[A-Z]/g,Dc=!1,Ma=3,me={full:"1.5.8",major:1,minor:5,dot:8,codeName:"arbitrary-fallbacks"};O.expando="ng339";var fb=O.cache={},Pf=1;O._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",mouseenter:"mouseover"},Wb=N("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
ja={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ja.optgroup=ja.option;ja.tbody=ja.tfoot=ja.colgroup=ja.caption=ja.thead;ja.th=ja.td;var Uf=C.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Oa=O.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===
C.document.readyState?C.setTimeout(b):(this.on("DOMContentLoaded",b),O(C).on("load",b))},toString:function(){var a=[];q(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?F(this[a]):F(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};q("multiple selected checked disabled readOnly required open".split(" "),function(a){Eb[Q(a)]=a});var Vc={};q("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var bd={ngMinlength:"minlength",
ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};q({data:Yb,removeData:eb,hasData:function(a){for(var b in fb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)eb(a[b])}},function(a,b){O[b]=a});q({data:Yb,inheritedData:Cb,scope:function(a){return F.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){return F.data(a,"$isolateScope")||F.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,
"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=db(b);if(w(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Ma&&2!==c&&8!==c)if(c=Q(b),Eb[c])if(w(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?c:void 0;else if(w(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(w(d))a[b]=
d;else return a[b]},text:function(){function a(a,d){if(y(d)){var c=a.nodeType;return 1===c||c===Ma?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(y(b)){if(a.multiple&&"select"===wa(a)){var d=[];q(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(y(b))return a.innerHTML;wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){O.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&y(2==a.length&&
a!==zb&&a!==Sc?b:c)){if(D(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=y(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});q({removeData:eb,on:function(a,b,d,c){if(w(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=
c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=F(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);q(new O(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];q(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
b){var d=a.nodeType;if(1===d||11===d){b=new O(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;q(new O(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,F(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new O(b);for(var e=0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&q(b.split(" "),
function(b){var e=d;y(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=
!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=S(c,b)),b=ia(g),e=d?[c].concat(d):[c],q(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){O.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)y(f)?(f=a(this[g],b,c,e),w(f)&&(f=F(f))):Qc(f,a(this[g],b,c,e));return w(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Ra.prototype={put:function(a,
b){this[Ca(a,this.nextUid)]=b},get:function(a){return this[Ca(a,this.nextUid)]},remove:function(a){var b=this[a=Ca(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Ra}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=N("$injector");cb.$$annotate=function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw G(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);
b=Wc(a);q(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else L(a)?(b=a.length-1,Pa(a[b],"fn"),c=a.slice(0,b)):Pa(a,"fn",!0);return c};var Rd=N("$animate"),$e=function(){this.$get=A},af=function(){var a=new Ra,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=G(b)?b.split(" "):L(b)?b:[],q(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){q(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";q(c,
function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});q(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ye=["$provide",function(a){var b=this;this.$$registeredAnimations=
Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Rd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Rd("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=
d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&F(f);g=g&&F(g);f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,
c,g){g=Ia(g);g.addClass=gb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=gb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=gb(h.addClass,c);h.removeClass=gb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?S(k.from,c):c;k.to=k.to?S(k.to,g):g;k.tempClasses=gb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],cf=function(){this.$get=
["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},bf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);
else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;q(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},
"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(q(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=
0,this._state=2)}};return f}]},Ze=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}var g=e||{};g.$$prepared||(g=pa(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},ga=N("$compile"),bc=new function(){};
Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=N("$controller"),cd=/^(\S+)(\s+as\s+([\w$]+))?$/,jf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof F&&(b=b[0]):b=a[0].body;return b.offsetWidth+1}}]},dd="application/json",ec={"Content-Type":dd+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=N("$http"),hd=function(a){return function(){throw Gg("legacy",
a);}},Ka=ca.$interpolateMinErr=N("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var rf=function(){this.$get=["$window",function(a){function b(a){var b=function(a){b.data=a;b.called=!0};b.id=a;return b}var d=a.angular.callbacks,c={};return{createCallback:function(a){a="_"+(d.$$counter++).toString(36);var f="angular.callbacks."+a,g=b(a);c[f]=d[a]=g;return f},wasCalled:function(a){return c[a].called},getResponse:function(a){return c[a].data},
removeCallback:function(a){delete d[c[a].id];delete c[a]}}}]},Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=N("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,absUrl:Hb("$$absUrl"),url:function(a){if(y(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:md("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||T(a))a=a.toString(),this.$$search=Ac(a);else if(D(a))a=pa(a,{}),q(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:y(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:md("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};q([ld,hc,gc],
function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=y(b)?null:b;return this}});var X=N("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=U();q("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,
lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||
c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?
this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):
(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=w(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw X("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<
this.text.length;){var d=Q(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<
this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,
16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var s=function(a,b){this.lexer=a;this.options=b};s.Program="Program";s.ExpressionStatement="ExpressionStatement";s.AssignmentExpression="AssignmentExpression";s.ConditionalExpression="ConditionalExpression";s.LogicalExpression="LogicalExpression";s.BinaryExpression="BinaryExpression";s.UnaryExpression="UnaryExpression";
s.CallExpression="CallExpression";s.MemberExpression="MemberExpression";s.Identifier="Identifier";s.Literal="Literal";s.ArrayExpression="ArrayExpression";s.Property="Property";s.ObjectExpression="ObjectExpression";s.ThisExpression="ThisExpression";s.LocalsExpression="LocalsExpression";s.NGValueParameter="NGValueParameter";s.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},
program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:s.Program,body:a}},expressionStatement:function(){return{type:s.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:s.AssignmentExpression,
left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:s.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:s.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:s.LogicalExpression,
operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=","===","!==");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:s.BinaryExpression,operator:b.text,
left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*","/","%");)a={type:s.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:s.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():
this.selfReferential.hasOwnProperty(this.peek().text)?a=pa(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?a={type:s.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:s.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):
"["===b.text?(a={type:s.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:s.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:s.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))
}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:s.Identifier,name:a.text}},constant:function(){return{type:s.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:s.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
b={type:s.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");
return{type:s.ObjectExpression,properties:a}},throwError:function(a,b){throw X("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));},consume:function(a){if(0===this.tokens.length)throw X("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw X("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>
a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:s.ThisExpression},$locals:{type:s.LocalsExpression}}};td.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};V(c,d.$filter);var e="",f;this.stage="assign";
if(f=rd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign","s,v,l");f=pd(c.body);d.stage="inputs";q(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+
e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue","ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Sa,ra,nd,ig,Ib,mg,od,a);this.state=this.stage=void 0;e.literal=sd(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;q(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");
return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;q(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&w(a.watchId))b=
b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case s.Program:q(a.body,function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case s.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case s.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);
c(m);break;case s.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case s.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case s.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,
b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case s.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Sa(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",
a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case s.MemberExpression:g=d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,
h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Sa(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case s.CallExpression:b=b||this.nextId();
a.filter?(h=k.filter(a.callee.name),l=[],q(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);q(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=
h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case s.AssignmentExpression:h=this.nextId();g={};if(!qd(a.left))throw X("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case s.ArrayExpression:l=
[];q(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case s.ObjectExpression:l=[];n=!1;q(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),q(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===s.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(q(a.properties,function(b){k.recurse(b.value,
a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===s.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,m));c(b||m);break;case s.ThisExpression:this.assign(b,"s");c("s");break;case s.LocalsExpression:this.assign(b,"l");c("l");break;case s.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},
assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),
d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+
a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(G(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(T(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===
typeof a)return"undefined";throw X("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;V(c,d.$filter);var e,f;if(e=rd(c))f=this.recurse(e);e=pd(c.body);var g;e&&(g=[],q(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];q(c.body,function(a){h.push(d.recurse(a.expression))});
e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;q(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=sd(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case s.Literal:return this.value(a.value,b);case s.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case s.BinaryExpression:return c=this.recurse(a.left),
e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case s.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case s.Identifier:return Sa(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case s.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Sa(a.property.name,
f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case s.CallExpression:return g=[],q(a.arguments,function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:
a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);nd(n.value,f.expression);p=[];for(var q=0;q<g.length;++q)p.push(ra(g[q](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?{value:p}:p};case s.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case s.ArrayExpression:return g=[],q(a.elements,
function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case s.ObjectExpression:return g=[],q(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===s.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,
c,d,e);return b?{value:f}:f};case s.ThisExpression:return function(a){return b?{value:a}:a};case s.LocalsExpression:return function(a,c){return b?{value:c}:c};case s.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=w(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:
d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=od(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(w(h)?h:0)-(w(c)?c:0);return d?{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,
f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||
b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,
g,h,k),m+="",Sa(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new s(a,d);this.astCompiler=d.csp?new ud(this.ast,
b):new td(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,sa=N("$sce"),la={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},pg=N("$compile"),$=C.document.createElement("a"),yd=Y(C.location.href);zd.$inject=["$document"];Mc.$inject=["$provide"];var Gd=22,Fd=".",mc="0";Ad.$inject=["$locale"];Cd.$inject=["$locale"];var Ag={yyyy:ba("FullYear",4,0,!1,!0),yy:ba("FullYear",2,0,
!0,!0),y:ba("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:ba("Month",2,1),M:ba("Month",1,1),LLLL:kb("Month",!1,!0),dd:ba("Date",2),d:ba("Date",1),HH:ba("Hours",2),H:ba("Hours",1),hh:ba("Hours",2,-12),h:ba("Hours",1,-12),mm:ba("Minutes",2),m:ba("Minutes",1),ss:ba("Seconds",2),s:ba("Seconds",1),sss:ba("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/
60),2)+Kb(Math.abs(a%60),2))},ww:Id(2),w:Id(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Bd.$inject=["$locale"];var tg=ha(Q),ug=ha(ub);Dd.$inject=["$parse"];var oe=ha({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ma.call(b.prop("href"))?
"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};q(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=Aa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});q(bd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",
new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});q(["src","srcset","href"],function(a){var b=Aa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ma.call(c.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ea&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,
$setDirty:A,$setPristine:A,$setSubmitted:A};Jd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Sd=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],controller:Jd,compile:function(d,f){d.addClass(Ua).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();
n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var q=g?c(n.$name):A;g&&(q(a,n),e.$observe(g,function(b){n.$name!==b&&(q(a,void 0),n.$$parentForm.$$renameControl(n,b),q=c(n.$name),q(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);q(a,void 0);S(n,Lb)})}}}}}]},pe=Sd(),Ce=Sd(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Td=/^(\d{4,})-(\d{2})-(\d{2})$/,Ud=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Vd=/^(\d{4,})-(\d\d)$/,
Wd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ld=U();q(["date","datetime-local","month","time","week"],function(a){Ld[a]=!0});var Xd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Td,Nb(Td,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Ud,Nb(Ud,"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Wd,Nb(Wd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(da(a))return a;if(G(a)){rc.lastIndex=0;var d=rc.exec(a);
if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Hd(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Vd,Nb(Vd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Md(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName="number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!T(a))throw nb("numfmt",
a);a=a.toString()}return a});if(w(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||y(g)||a>=g};d.$observe("min",function(a){w(a)&&!T(a)&&(a=parseFloat(a));g=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(w(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||y(h)||a<=h};d.$observe("max",function(a){w(a)&&!T(a)&&(a=parseFloat(a));h=T(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=
function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){y(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Nd(h,a,"ngTrueValue",d.ngTrueValue,
!0),l=Nd(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Xd[Q(g.type)]||Xd.text)(e,f,
g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ue=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ue=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=y(a)?"":a})}}}}],we=["$interpolate","$compile",
function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=y(a)?"":a})}}}}],ve=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=
f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Te=ha({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),xe=qc("",!0),ze=qc("Odd",0),ye=qc("Even",1),Ae=Ta({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Be=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Lc={},Og={blur:!0,focus:!0};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var b=Aa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Ee=["$animate","$compile",function(a,b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=
b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Fe=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:ca.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var q=0,s,B,r,y=function(){B&&(B.remove(),B=null);s&&
(s.$destroy(),s=null);r&&(d.leave(r).then(function(){B=null}),B=r,r=null)};c.$watch(f,function(f){var m=function(){!w(h)||h&&!c.$eval(h)||b()},t=++q;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===q){var b=c.$new();n.template=a;a=p(b,function(a){y();d.enter(a,null,e).then(m)});s=b;r=a;s.$emit("$includeContentLoaded",f);c.$eval(g)}},function(){c.$$destroyed||t!==q||(y(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(y(),n.template=null)})}}}}],We=["$compile",function(a){return{restrict:"ECA",
priority:-400,require:"ngInclude",link:function(b,d,c,e){ma.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,C.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],Ge=Ta({priority:450,compile:function(){return{pre:function(a,b,d){a.$eval(d.ngInit)}}}}),Se=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!y(a)){var b=
[];a&&q(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(L(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Od="ng-invalid",Ua="ng-pristine",Mb="ng-dirty",Qd="ng-pending",nb=N("ngModel"),Pg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};
this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,u=n,s=null,B,r=this;this.$$setOptions=function(a){if((r.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));
return c};u=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,ya(c));};this.$render=A;this.$isEmpty=function(a){return y(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){r.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var J=0;Kd({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){r.$dirty=
!1;r.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Ua)};this.$setDirty=function(){r.$dirty=!0;r.$pristine=!1;f.removeClass(c,Ua);f.addClass(c,Mb);r.$$parentForm.$setDirty()};this.$setUntouched=function(){r.$touched=!1;r.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};this.$setTouched=function(){r.$touched=!0;r.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(s);r.$viewValue=r.$$lastCommittedViewValue;r.$render()};this.$validate=function(){if(!T(r.$modelValue)||
!isNaN(r.$modelValue)){var a=r.$$rawModelValue,b=r.$valid,c=r.$modelValue,d=r.$options&&r.$options.allowInvalid;r.$$runValidators(a,r.$$lastCommittedViewValue,function(e){d||b===e||(r.$modelValue=e?a:void 0,r.$modelValue!==c&&r.$$writeModelToScope())})}};this.$$runValidators=function(a,b,c){function d(){var c=!0;q(r.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(q(r.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;q(r.$asyncValidators,function(e,g){var h=
e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===J&&r.$setValidity(a,b)}function g(a){h===J&&c(a)}J++;var h=J;(function(){var a=r.$$parserName||"parse";if(y(B))f(a,null);else return B||(q(r.$validators,function(a,b){f(b,null)}),q(r.$asyncValidators,function(a,b){f(b,null)})),f(a,B),B;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=
r.$viewValue;g.cancel(s);if(r.$$lastCommittedViewValue!==a||""===a&&r.$$hasNativeValidators)r.$$updateEmptyClasses(a),r.$$lastCommittedViewValue=a,r.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=r.$$lastCommittedViewValue;if(B=y(b)?void 0:!0)for(var c=0;c<r.$parsers.length;c++)if(b=r.$parsers[c](b),y(b)){B=!1;break}T(r.$modelValue)&&isNaN(r.$modelValue)&&(r.$modelValue=p(a));var d=r.$modelValue,e=r.$options&&r.$options.allowInvalid;r.$$rawModelValue=
b;e&&(r.$modelValue=b,r.$modelValue!==d&&r.$$writeModelToScope());r.$$runValidators(b,r.$$lastCommittedViewValue,function(a){e||(r.$modelValue=a?b:void 0,r.$modelValue!==d&&r.$$writeModelToScope())})};this.$$writeModelToScope=function(){u(a,r.$modelValue);q(r.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){r.$viewValue=a;r.$options&&!r.$options.updateOnDefault||r.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=r.$options;
d&&w(d.debounce)&&(d=d.debounce,T(d)?c=d:T(d[b])?c=d[b]:T(d["default"])&&(c=d["default"]));g.cancel(s);c?s=g(function(){r.$commitViewValue()},c):h.$$phase?r.$commitViewValue():a.$apply(function(){r.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==r.$modelValue&&(r.$modelValue===r.$modelValue||b===b)){r.$modelValue=r.$$rawModelValue=b;B=void 0;for(var c=r.$formatters,d=c.length,e=b;d--;)e=c[d](e);r.$viewValue!==e&&(r.$$updateEmptyClasses(e),r.$viewValue=r.$$lastCommittedViewValue=e,r.$render(),
r.$$runValidators(b,e,A))}return b})}],Re=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Ua).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,
c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,Ve=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var d=this;this.$options=pa(a.$eval(b.ngModelOptions));w(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},He=Ta({terminal:!0,priority:1E3}),Rg=N("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Pe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=
b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!q&&ta(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,ya(b));var p=n[5]||n[7],q=n[6];a=/ as /.test(n[0])&&n[1];var s=n[9];b=d(n[2]?n[1]:p);var w=a&&d(a)||b,r=s&&d(s),y=s?function(a,b){return r(c,b)}:function(a){return Ca(a)},v=function(a,b){return y(a,E(a,b))},A=d(n[2]||n[1]),t=d(n[3]||""),K=d(n[4]||""),z=d(n[8]),H={},E=q?function(a,b){H[q]=b;H[p]=
a;return H}:function(a){H[p]=a;return H};return{trackBy:s,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=E(l,h),l=y(l,h);b.push(l);if(n[2]||n[1])l=A(c,h),b.push(l);n[4]&&(h=K(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===g?n:g[n],q=E(d[p],p),r=w(c,q),p=y(r,q),u=A(c,q),H=t(c,q),q=K(c,q),r=new e(p,r,u,H,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,
getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return s?ca.copy(a.viewValue):a.viewValue}}}}}var e=C.document.createElement("option"),f=C.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=
t&&p.readValue();if(t)for(var b=t.items.length-1;0<=b;b--){var c=t.items[b];w(c.group)?Db(c.element.parentNode):Db(c.element)}t=K.getOptions();var d={};v&&h.prepend(B);t.items.forEach(function(a){var b;if(w(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),C.appendChild(b),b.label=null===a.group?"null":a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=C,c=e.cloneNode(!1);b.appendChild(c);m(a,c)});h[0].appendChild(C);s.$render();s.$isEmpty(a)||(b=p.readValue(),(K.trackBy||y?na(a,b):a===b)||(s.$setViewValue(b),
s.$render()))}var p=l[0],s=l[1],y=k.multiple,B;l=0;for(var r=h.children(),A=r.length;l<A;l++)if(""===r[l].value){B=r.eq(l);break}var v=!!B,z=F(e.cloneNode(!1));z.val("?");var t,K=c(k.ngOptions,h,d),C=b[0].createDocumentFragment();y?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){t.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=t.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];q(a,function(a){(a=
t.selectValueMap[a])&&!a.disabled&&b.push(t.getViewValueFromOption(a))});return b},K.trackBy&&d.$watchCollection(function(){if(L(s.$viewValue))return s.$viewValue.map(function(a){return K.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=t.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(z.remove(),v||B.remove(),h[0].value=b.selectValue,b.element.selected=!0),b.element.setAttribute("selected","selected")):null===a||v?(z.remove(),v||h.prepend(B),h.val(""),B.prop("selected",
!0),B.attr("selected",!0)):(v||B.remove(),h.prepend(z),h.val("?"),z.prop("selected",!0),z.attr("selected",!0))},p.readValue=function(){var a=t.selectValueMap[h.val()];return a&&!a.disabled?(v||B.remove(),z.remove(),t.getViewValueFromOption(a)):null},K.trackBy&&d.$watch(function(){return K.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(B.remove(),a(B)(d),B.removeClass("ng-scope")):B=F(e.cloneNode(!1));h.empty();n();d.$watchCollection(K.getWatchables,n)}}}}],Ie=["$locale","$interpolate",
"$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},w=b.startSymbol(),B=b.endSymbol(),r=w+l+"-"+n+B,z=ca.noop,v;q(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+Q(c[2]),p[c]=g.attr(h.$attr[b]))});q(p,function(a,d){s[d]=b(a.replace(c,r))});f.$watch(l,function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&T(v)&&isNaN(v)||
(z(),e=s[c],y(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Je=["$parse","$animate","$compile",function(a,b,d){var c=N("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",
h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var w=l[3]||l[1],y=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",p);var r,z,v,A,t={$id:Ca};s?r=a(s):(v=function(a,b){return Ca(b)},
A=function(a){return a});return function(a,d,f,g,l){r&&(z=function(b,c,d){y&&(t[y]=b);t[w]=c;t.$index=d;return r(a,t)});var m=U();a.$watchCollection(n,function(f){var g,n,r=d[0],s,u=U(),t,C,F,E,G,D,H;p&&(a[p]=f);if(ta(f))G=f,n=z||v;else for(H in n=z||A,G=[],f)ua.call(f,H)&&"$"!==H.charAt(0)&&G.push(H);t=G.length;H=Array(t);for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],E=n(C,F,g),m[E])D=m[E],delete m[E],u[E]=D,H[g]=D;else{if(u[E])throw q(H,function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,E,F);H[g]={id:E,
scope:void 0,clone:void 0};u[E]=!0}for(s in m){D=m[s];E=tb(D.clone);b.leave(E);if(E[0].parentNode)for(g=0,n=E.length;g<n;g++)E[g].$$NG_REMOVED=!0;D.scope.$destroy()}for(g=0;g<t;g++)if(C=f===G?g:G[g],F=f[C],D=H[g],D.scope){s=r;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);D.clone[0]!=s&&b.move(tb(D.clone),null,r);r=D.clone[D.clone.length-1];e(D.scope,g,w,F,y,C,t)}else l(function(a,c){D.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,null,r);r=d;D.clone=a;u[D.id]=D;e(D.scope,g,w,F,y,C,t)});m=
u})}}}}],Ke=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Le=Ta(function(a,b,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,c){b.css(c,"")});a&&b.css(a)},
!0)}),Me=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var s=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(s)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+c]||f.cases["?"])&&q(g,function(c){c.transclude(function(d,
e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ne=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Oe=Ta({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,
element:b})}}),Tg=N("ngTransclude"),Qe=["$compile",function(a){return{restrict:"EAC",terminal:!0,compile:function(b){var d=a(b.contents());b.empty();return function(a,b,f,g,h){function k(){d(a,function(a){b.append(a)})}if(!h)throw Tg("orphan",ya(b));f.ngTransclude===f.$attr.ngTransclude&&(f.ngTransclude="");f=f.ngTransclude||f.ngTranscludeSlot;h(function(a,c){a.length?b.append(a):(k(),c.$destroy())},null,f);f&&!h.isSlotFilled(f)&&k()}}}}],qe=["$templateCache",function(a){return{restrict:"E",terminal:!0,
compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},Vg=["$element","$scope",function(a,b){var d=this,c=new Ra;d.ngModelCtrl=Ug;d.unknownOption=F(C.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ca(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();
return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Qa(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=
void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){w(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],re=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,
d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});if(d.multiple){f.readValue=function(){var a=[];q(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Ra(a);q(b.find("option"),function(a){a.selected=w(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ia(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||
0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},te=["$interpolate",function(a){return{restrict:"E",priority:100,compile:function(b,d){if(w(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],se=ha({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",
require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){G(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw N("ngPattern")("noregexp",f,a,ya(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||
y(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=Z(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=Z(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};C.angular.bootstrap?
C.console&&console.log("WARNING: Tried to load angular more than once."):(je(),le(ca),ca.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",
PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),F(C.document).ready(function(){fe(C.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,B){'use strict';function Da(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ea(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;Y(a)&&(a=a.join(" "));Y(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Z(a,b,c){var d="";a=Y(a)?a:a&&G(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof F)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return F(ta(a))}if(1===a.nodeType)return F(a)}function ta(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
P;a.domOperation=function(){a.$$domOperationFired=!0;b();b=P};a.$$prepared=!0}return a}function ha(a,b){Fa(a,b);Ga(a,b)}function Fa(a,b){b.from&&(a.css(b.from),b.from=null)}function Ga(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=$(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==P?d.domOperation:null;ua(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){G(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]||a[c+"-remove"]):-1===b&&(d="removeClass",e=a[c]||a[c+"-add"]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function y(a){return a instanceof F?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Z(b,"ng-",!0));c.addClass&&(d=$(d,Z(c.addClass,"-add")));c.removeClass&&(d=$(d,Z(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function va(a,b){var c=b?"paused":"",d=aa+"PlayState";la(a,[d,c]);return[d,c]}function la(a,
b){a.style[b[0]]=b[1]}function $(a,b){return a?b?a+" "+b:a:b}function Ha(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var g=c.charAt(0);if("-"===g||"+"===g||0<=g)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function wa(a){return 0===a||null!=a}function Ia(a,b){var c=S,d=a+"s";b?c+="Duration":
d+=" linear all";return[c,d]}function Ja(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ka(a,b,c){s(c,function(c){a[c]=xa(a[c])?a[c]:b.style.getPropertyValue(c)})}var S,ya,aa,za;void 0===R.ontransitionend&&void 0!==R.onwebkittransitionend?(S="WebkitTransition",ya="webkitTransitionEnd transitionend"):(S="transition",ya=
"transitionend");void 0===R.onanimationend&&void 0!==R.onwebkitanimationend?(aa="WebkitAnimation",za="webkitAnimationEnd animationend"):(aa="animation",za="animationend");var qa=aa+"Delay",Aa=aa+"Duration",ma=S+"Delay",La=S+"Duration",Ma=B.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:S+"Property",animationDuration:Aa,animationDelay:qa,animationIterationCount:aa+"IterationCount"},Va={transitionDuration:La,transitionDelay:ma,animationDuration:Aa,animationDelay:qa},
Ba,ua,s,Y,xa,ea,Ca,ba,G,J,F,P;B.module("ngAnimate",[],function(){P=B.noop;Ba=B.copy;ua=B.extend;F=B.element;s=B.forEach;Y=B.isArray;G=B.isString;ba=B.isObject;J=B.isUndefined;xa=B.isDefined;Ca=B.isFunction;ea=B.isElement}).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,n){var I,g;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){I&&a.leave(I);g&&(g.$destroy(),g=null);if(e||0===e)g=b.$new(),
n(g,function(b){I=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;G(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}
var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;
return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;
a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return J(a)&&J(b)||J(e)&&J(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,l,C,Wa,Q,t,H,T){function O(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function x(a,b,c){var f=y(b),d=y(a),N=[];(a=h[c])&&s(a,function(a){w.call(a.node,f)?N.push(a.callback):"leave"===c&&w.call(a.node,
d)&&N.push(a.callback)});return N}function r(a,b,c){var f=ta(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,h,v){function r(c,f,d,h){sa(function(){var c=x(T,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||ra.off(a)}):"close"!==d||a[0].parentNode||ra.off(a)});c.progress(f,d,h)}function k(b){var c=a,f=m;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),
f.activeClasses=null);E(a,m);ha(a,m);m.domOperation();A.complete(!b)}var m=Ba(v),p,T;if(a=Oa(a))p=y(a),T=a.parent();var m=oa(m),A=new Q,sa=O();Y(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!G(m.addClass)&&(m.addClass=null);Y(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!G(m.removeClass)&&(m.removeClass=null);m.from&&!ba(m.from)&&(m.from=null);m.to&&!ba(m.to)&&(m.to=null);if(!p)return k(),A;v=[p.className,m.addClass,m.removeClass].join(" ");if(!Xa(v))return k(),
A;var g=0<=["enter","move","leave"].indexOf(h),w=l[0].hidden,t=!f||w||N.get(p);v=!t&&z.get(p)||{};var H=!!v.state;t||H&&1==v.state||(t=!M(a,T,h));if(t)return w&&r(A,h,"start"),k(),w&&r(A,h,"close"),A;g&&K(a);w={structural:g,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:k,options:m,runner:A};if(H){if(d("skip",a,w,v)){if(2===v.state)return k(),A;W(a,v,w);return v.runner}if(d("cancel",a,w,v))if(2===v.state)v.runner.end();else if(v.structural)v.close();else return W(a,v,w),v.runner;
else if(d("join",a,w,v))if(2===v.state)W(a,w,{});else return Sa(a,g?h:null,m),h=w.event=v.event,m=W(a,v,w),v.runner}else W(a,w,{});(H=w.structural)||(H="animate"===w.event&&0<Object.keys(w.options.to||{}).length||e(w));if(!H)return k(),ka(a),A;var C=(v.counter||0)+1;w.counter=C;L(a,1,w);c.$$postDigest(function(){var b=z.get(p),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==C||!f){c&&(E(a,m),ha(a,m));if(c||g&&b.event!==h)m.domOperation(),A.end();
f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,L(a,2),b=Wa(a,h,b.options),A.setHost(b),r(A,h,"start",{}),b.done(function(b){k(!b);(b=z.get(p))&&b.counter===C&&ka(y(a));r(A,h,"close",{})})});return A}function K(a){a=y(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=z.get(a);if(c)switch(b){case 2:c.runner.end();case 1:z.remove(a)}})}function ka(a){a=y(a);a.removeAttribute("data-ng-animate");z.remove(a)}function k(a,b){return y(a)===
y(b)}function M(a,b,c){c=F(l[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,r,e=N.get(y(a));(a=F.data(a[0],"$ngAnimatePin"))&&(b=a);for(b=y(b);b;){d||(d=k(b,g));if(1!==b.nodeType)break;a=z.get(b)||{};if(!h){var p=N.get(b);if(!0===p&&!1!==e){e=!0;break}else!1===p&&(e=!1);h=a.structural}if(J(r)||!0===r)a=F.data(b,"$$ngAnimateChildren"),xa(a)&&(r=a);if(h&&!1===r)break;f||(f=k(b,c));if(f&&d)break;if(!d&&(a=F.data(b,"$ngAnimatePin"))){b=y(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&
d&&f}function L(a,b,c){c=c||{};c.state=b;a=y(a);a.setAttribute("data-ng-animate",b);c=(b=z.get(a))?ua(b,c):c;z.put(a,c)}var z=new C,N=new C,f=null,A=c.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(A(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h=Object.create(null),sa=a.classNameFilter(),Xa=sa?function(a){return sa.test(a)}:function(){return!0},E=V(H),w=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&
16)},ra={on:function(a,b,c){var f=ta(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});F(b).on("$destroy",function(){z.get(f)||ra.off(a,b,c)})},off:function(a,b,c){if(1!==arguments.length||G(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Da(ea(a),"element","not an element");Da(ea(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,
b){var c=arguments.length;if(0===c)b=!!f;else if(ea(a)){var d=y(a);1===c?b=!N.get(d):N.put(d,!b)}else b=f=!!a;return b}};return ra}]}]).provider("$$animation",["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,n,I){function g(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;e.put(d,a);for(var K;p;){if(K=e.get(p)){K.processed||(K=b(K));break}p=p.parentNode}(K||
c).children.push(a);return a}var c={children:[]},d,e=new n;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,k=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(k),k=[]);k.push(g.fn);g.children.forEach(function(a){e++;c.push(a)});a--}k.length&&b.push(k);return b}(c)}var u=[],C=V(a);return function(n,Q,t){function H(a){a=
a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function T(a){var b=[],c={};s(a,function(a,d){var h=y(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?H(h):[];if(h.length){var k=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:d,element:F(a)}})}else b.push(a)});var d={},e={};s(c,function(c,k){var r=c.from,
p=c.to;if(r&&p){var z=a[r.animationID],g=a[p.animationID],A=r.animationID.toString();if(!e[A]){var n=e[A]={structural:!0,beforeStart:function(){z.beforeStart();g.beforeStart()},close:function(){z.close();g.close()},classes:O(z.classes,g.classes),from:z,to:g,anchors:[]};n.classes.length?b.push(n):(b.push(z),b.push(g))}e[A].anchors.push({out:r.element,"in":p.element})}else r=r?r.animationID:p.animationID,p=r.toString(),d[p]||(d[p]=!0,b.push(a[r]))});return b}function O(a,b){a=a.split(" ");b=b.split(" ");
for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function x(a){for(var c=b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===Q&&t.$$domOperationFired||a.end()}function K(b){n.off("$destroy",p);n.removeData("$$animationRunner");
C(n,t);ha(n,t);t.domOperation();L&&a.removeClass(n,L);n.removeClass("ng-animate");k.complete(!b)}t=oa(t);var ka=0<=["enter","move","leave"].indexOf(Q),k=new l({end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),k;n.data("$$animationRunner",k);var M=Ea(n.attr("class"),Ea(t.addClass,t.removeClass)),L=t.tempClasses;L&&(M+=" "+L,t.tempClasses=null);var z;ka&&(z="ng-"+Q+"-prepare",a.addClass(n,z));u.push({element:n,classes:M,event:Q,structural:ka,options:t,beforeStart:function(){n.addClass("ng-animate");
L&&a.addClass(n,L);z&&(a.removeClass(n,z),z=null)},close:K});n.on("$destroy",p);if(1<u.length)return k;d.$$postDigest(function(){var a=[];s(u,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});u.length=0;var b=T(a),c=[];s(b,function(a){c.push({domNode:y(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=x(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):
c()}})});I(g(c))});return k}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ja(),c=Ja();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,n,I,g,u,C){function B(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++O))+"-"+a.getAttribute("class")+"-"+b}function Q(r,p,g,n){var k;0<b.count(g)&&(k=c.get(g),k||(p=Z(p,"-stagger"),e.addClass(r,p),k=Ha(a,r,n),k.animationDuration=
Math.max(k.animationDuration,0),k.transitionDuration=Math.max(k.transitionDuration,0),e.removeClass(r,p),c.put(g,k)));return k||{}}function t(a){x.push(a);u.waitUntilQuiet(function(){b.flush();c.flush();for(var a=I(),d=0;d<x.length;d++)x[d](a);x.length=0})}function H(c,e,g){e=b.get(g);e||(e=Ha(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,e):g||e;c.maxDuration=Math.max(c.animationDuration*
c.animationIterationCount,c.transitionDuration);return c}var T=V(e),O=0,x=[];return function(a,c){function d(){k()}function u(){k(!0)}function k(b){if(!(w||F&&O)){w=!0;O=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);va(h,!1);pa(h,!1);s(x,function(a){h.style[a[0]]=""});T(a,f);ha(a,f);Object.keys(A).length&&s(A,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),z);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),
a.removeData("$$animateCss"));G&&G.complete(!b)}}function M(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&va(h,!!a)}function L(){G=new l({end:d,cancel:u});t(P);k();return{$$willAnimate:!1,start:function(){return G},end:d}}function z(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=R&&b>=m&&(F=!0,k())}function N(){function b(){if(!w){M(!1);s(x,function(a){h.style[a[0]]=a[1]});T(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=
h.className+" "+ga;ia=B(h,na);D=H(h,na,ia);ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;if(0===m){k();return}q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(ca="boolean"!==typeof f.delay&&wa(f.delay)?parseFloat(f.delay):ca,J=Math.max(ca,0),D.animationDelay=ca,da=[qa,ca+"s"],x.push(da),h.style[da[0]]=da[1]);R=1E3*J;V=1E3*m;if(f.easing){var d,g=f.easing;q.hasTransitions&&(d=S+"TimingFunction",x.push([d,g]),h.style[d]=g);q.hasAnimations&&(d=aa+
"TimingFunction",x.push([d,g]),h.style[d]=g)}D.transitionDuration&&fa.push(ya);D.animationDuration&&fa.push(za);W=Date.now();var p=R+1.5*V;d=W+p;var g=a.data("$$animateCss")||[],N=!0;if(g.length){var l=g[0];(N=d>l.expectedEndTime)?n.cancel(l.timer):g.push(k)}N&&(p=n(c,p,!1),g[0]={timer:p,expectedEndTime:d},g.push(k),a.data("$$animateCss",g));if(fa.length)a.on(fa.join(" "),z);f.to&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.to)),Ga(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();
a.removeData("$$animateCss")}}if(!w)if(h.parentNode){var d=function(a){if(F)O&&a&&(O=!1,k());else if(O=!a,D.animationDuration)if(a=va(h,O),O)x.push(a);else{var b=x,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<ba&&(D.transitionDuration&&0===X.transitionDuration||D.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);g?n(b,Math.floor(g*ba*1E3),!1):b();v.resume=function(){d(!0)};v.pause=function(){d(!1)}}else k()}var f=c||{};f.$$prepared||(f=oa(Ba(f)));var A={},h=y(a);
if(!h||!h.parentNode||!C.enabled())return L();var x=[],I=a.attr("class"),E=Na(f),w,O,F,G,v,J,R,m,V,W,fa=[];if(0===f.duration||!g.animations&&!g.transitions)return L();var ja=f.event&&Y(f.event)?f.event.join(" "):f.event,$="",U="";ja&&f.structural?$=Z(ja,"ng-",!0):ja&&($=ja);f.addClass&&(U+=Z(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Z(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&T(a,f);var ga=[$,U].join(" ").trim(),na=I+" "+ga,ea=Z(ga,"-active"),I=E.to&&0<Object.keys(E.to).length;
if(!(0<(f.keyframeStyle||"").length||I||ga))return L();var ia,X;0<f.stagger?(E=parseFloat(f.stagger),X={transitionDelay:E,animationDelay:E,transitionDuration:0,animationDuration:0}):(ia=B(h,na),X=Q(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(E=[S,f.transitionStyle],la(h,E),x.push(E));0<=f.duration&&(E=0<h.style[S].length,E=Ia(f.duration,E),la(h,E),x.push(E));f.keyframeStyle&&(E=[aa,f.keyframeStyle],la(h,E),x.push(E));var ba=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):
0;(ja=0===ba)&&!f.skipBlocking&&pa(h,9999);var D=H(h,na,ia),ca=D.maxDelay;J=Math.max(ca,0);m=D.maxDuration;var q={};q.hasTransitions=0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==D.transitionProperty;q.applyTransitionDuration=I&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=wa(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=
wa(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=f.duration?parseFloat(f.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=m,E=0<h.style[S+"Property"].length,x.push(Ia(m,E))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=m,x.push([Aa,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return L();if(null!=f.delay){var da;"boolean"!==typeof f.delay&&(da=parseFloat(f.delay),J=Math.max(da,
0));q.applyTransitionDelay&&x.push([ma,da+"s"]);q.applyAnimationDelay&&x.push([qa,da+"s"])}null==f.duration&&0<D.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);R=1E3*J;V=1E3*m;f.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ka(A,h,Object.keys(f.from)),Fa(a,f));q.blockTransition||q.blockKeyframeAnimation?M(m):f.skipBlocking||pa(h,!1);return{$$willAnimate:!0,
end:d,start:function(){if(!w)return v={end:d,cancel:u,resume:null,pause:null},G=new l(v),t(N),G}}}}]}]).provider("$$animateCssDriver",["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,n,I){function g(a){return a.replace(/\bng-\S+\b/g,"")}function u(a,b){G(a)&&(a=a.split(" "));G(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}
function C(c,e,n){function l(a){var b={},c=y(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=t.scrollTop;break;case "left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function p(){var c=g(n.attr("class")||""),d=u(c,k),c=u(k,c),d=a(C,{to:l(n),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function I(){C.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim")}var C=
F(y(e).cloneNode(!0)),k=g(C.attr("class")||"");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");C.addClass("ng-anchor");H.append(C);var M;c=function(){var c=a(C,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(M=p(),!M))return I();var L=c||M;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!M&&(M=p()))return c=M.start(),c.done(function(){c=null;I();b.complete()}),c;I();b.complete()});return b=new d({end:a,
cancel:a})}}}function B(a,b,c,e){var g=Q(a,P),n=Q(b,P),l=[];s(e,function(a){(a=C(c,a.out,a["in"]))&&l.push(a)});if(g||n||0!==l.length)return{start:function(){function a(){s(b,function(a){a.end()})}var b=[];g&&b.push(g.start());n&&b.push(n.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function Q(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=
e.domOperation));e.preparationClasses&&(e.event=$(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return P;var t=I[0].body;c=y(e);var H=F(c.parentNode&&11===c.parentNode.nodeType||t.contains(c)?c:t);V(n);return function(a){return a.from&&a.to?B(a.from,a.to,a.classes,a.anchors):Q(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=Y(c)?c:c.split(" ");
for(var d=[],e={},l=0;l<c.length;l++){var s=c[l],B=a.$$registeredAnimations[s];B&&!e[s]&&(d.push(b.get(B)),e[s]=!0)}return d}var l=V(d);return function(a,b,d,u){function C(){u.domOperation();l(a,u)}function B(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,F,G,f];break;case "addClass":b=[b,F,f];break;case "removeClass":b=[b,G,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ca(a))return a;return P}
function y(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||P)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});f=B(k,a,b,d,function(a){h(!1===a)});return e})});return g}function t(a,b,d,e,f){var g=y(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=y(a,"removeClass",d,e,"beforeRemoveClass"),k=y(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=y(a,"removeClass",d,e,"removeClass"),k=y(a,"addClass",
d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?b.cancel():b.end()})}}}var H=!1;3===arguments.length&&ba(d)&&(u=d,d=null);u=oa(u);d||(d=a.attr("class")||"",u.addClass&&(d+=" "+u.addClass),u.removeClass&&(d+=" "+u.removeClass));var F=u.addClass,G=u.removeClass,x=e(d),r,p;if(x.length){var K,J;"leave"==b?(J="leave",K="afterLeave"):(J="before"+b.charAt(0).toUpperCase()+
b.substr(1),K=b);"enter"!==b&&"move"!==b&&(r=t(a,b,u,x,J));p=t(a,b,u,x,K)}if(r||p){var k;return{$$willAnimate:!0,end:function(){k?k.end():(H=!0,C(),ha(a,u),k=new c,k.complete(!0));return k},start:function(){function b(c){H=!0;C();ha(a,u);k.complete(c)}if(k)return k;k=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){C();a(!0)}):C();p&&e.push(function(a){d=p(a)});k.setHost({end:function(){H||((d||P)(void 0),b(void 0))},cancel:function(){H||((d||P)(!0),b(!0))}});c.chain(e,
b);return k}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});
return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

!function(){"use strict";angular.module("base64",[]).constant("$base64",function(){function a(a,b){var c=f.indexOf(a.charAt(b));if(-1==c)throw"Cannot decode base64";return c}function b(b){b=""+b;var c,d,f,g=b.length;if(0==g)return b;if(0!=g%4)throw"Cannot decode base64";c=0,b.charAt(g-1)==e&&(c=1,b.charAt(g-2)==e&&(c=2),g-=4);var h=[];for(d=0;g>d;d+=4)f=a(b,d)<<18|a(b,d+1)<<12|a(b,d+2)<<6|a(b,d+3),h.push(String.fromCharCode(f>>16,255&f>>8,255&f));switch(c){case 1:f=a(b,d)<<18|a(b,d+1)<<12|a(b,d+2)<<6,h.push(String.fromCharCode(f>>16,255&f>>8));break;case 2:f=a(b,d)<<18|a(b,d+1)<<12,h.push(String.fromCharCode(f>>16))}return h.join("")}function c(a,b){var c=a.charCodeAt(b);if(c>255)throw"INVALID_CHARACTER_ERR: DOM Exception 5";return c}function d(a){if(1!=arguments.length)throw"SyntaxError: Not enough arguments";var b,d,g=[];a=""+a;var h=a.length-a.length%3;if(0==a.length)return a;for(b=0;h>b;b+=3)d=c(a,b)<<16|c(a,b+1)<<8|c(a,b+2),g.push(f.charAt(d>>18)),g.push(f.charAt(63&d>>12)),g.push(f.charAt(63&d>>6)),g.push(f.charAt(63&d));switch(a.length-h){case 1:d=c(a,b)<<16,g.push(f.charAt(d>>18)+f.charAt(63&d>>12)+e+e);break;case 2:d=c(a,b)<<16|c(a,b+1)<<8,g.push(f.charAt(d>>18)+f.charAt(63&d>>12)+f.charAt(63&d>>6)+e)}return g.join("")}var e="=",f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";return{encode:d,decode:b}}())}();
/**
 * State-based routing for AngularJS 1.x
 * NOTICE: This monolithic bundle also bundles the @uirouter/core code.
 *         This causes it to be incompatible with plugins that depend on @uirouter/core.
 *         We recommend switching to the ui-router-core.js and ui-router-angularjs.js bundles instead.
 *         For more information, see https://ui-router.github.io/blog/uirouter-for-angularjs-umd-bundles
 * @version v1.0.18
 * @link https://ui-router.github.io
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('angular')) :
    typeof define === 'function' && define.amd ? define(['exports', 'angular'], factory) :
    (factory((global['@uirouter/angularjs'] = {}),global.angular));
}(this, (function (exports,ng_from_import) { 'use strict';

    var ng_from_global = angular;
    var ng = ng_from_import && ng_from_import.module ? ng_from_import : ng_from_global;

    /**
     * Higher order functions
     *
     * These utility functions are exported, but are subject to change without notice.
     *
     * @module common_hof
     */ /** */
    /**
     * Returns a new function for [Partial Application](https://en.wikipedia.org/wiki/Partial_application) of the original function.
     *
     * Given a function with N parameters, returns a new function that supports partial application.
     * The new function accepts anywhere from 1 to N parameters.  When that function is called with M parameters,
     * where M is less than N, it returns a new function that accepts the remaining parameters.  It continues to
     * accept more parameters until all N parameters have been supplied.
     *
     *
     * This contrived example uses a partially applied function as an predicate, which returns true
     * if an object is found in both arrays.
     * @example
     * ```
     * // returns true if an object is in both of the two arrays
     * function inBoth(array1, array2, object) {
     *   return array1.indexOf(object) !== -1 &&
     *          array2.indexOf(object) !== 1;
     * }
     * let obj1, obj2, obj3, obj4, obj5, obj6, obj7
     * let foos = [obj1, obj3]
     * let bars = [obj3, obj4, obj5]
     *
     * // A curried "copy" of inBoth
     * let curriedInBoth = curry(inBoth);
     * // Partially apply both the array1 and array2
     * let inFoosAndBars = curriedInBoth(foos, bars);
     *
     * // Supply the final argument; since all arguments are
     * // supplied, the original inBoth function is then called.
     * let obj1InBoth = inFoosAndBars(obj1); // false
     *
     * // Use the inFoosAndBars as a predicate.
     * // Filter, on each iteration, supplies the final argument
     * let allObjs = [ obj1, obj2, obj3, obj4, obj5, obj6, obj7 ];
     * let foundInBoth = allObjs.filter(inFoosAndBars); // [ obj3 ]
     *
     * ```
     *
     * Stolen from: http://stackoverflow.com/questions/4394747/javascript-curry-function
     *
     * @param fn
     * @returns {*|function(): (*|any)}
     */
    function curry(fn) {
        var initial_args = [].slice.apply(arguments, [1]);
        var func_args_length = fn.length;
        function curried(args) {
            if (args.length >= func_args_length)
                return fn.apply(null, args);
            return function () {
                return curried(args.concat([].slice.apply(arguments)));
            };
        }
        return curried(initial_args);
    }
    /**
     * Given a varargs list of functions, returns a function that composes the argument functions, right-to-left
     * given: f(x), g(x), h(x)
     * let composed = compose(f,g,h)
     * then, composed is: f(g(h(x)))
     */
    function compose() {
        var args = arguments;
        var start = args.length - 1;
        return function () {
            var i = start, result = args[start].apply(this, arguments);
            while (i--)
                result = args[i].call(this, result);
            return result;
        };
    }
    /**
     * Given a varargs list of functions, returns a function that is composes the argument functions, left-to-right
     * given: f(x), g(x), h(x)
     * let piped = pipe(f,g,h);
     * then, piped is: h(g(f(x)))
     */
    function pipe() {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        return compose.apply(null, [].slice.call(arguments).reverse());
    }
    /**
     * Given a property name, returns a function that returns that property from an object
     * let obj = { foo: 1, name: "blarg" };
     * let getName = prop("name");
     * getName(obj) === "blarg"
     */
    var prop = function (name) { return function (obj) { return obj && obj[name]; }; };
    /**
     * Given a property name and a value, returns a function that returns a boolean based on whether
     * the passed object has a property that matches the value
     * let obj = { foo: 1, name: "blarg" };
     * let getName = propEq("name", "blarg");
     * getName(obj) === true
     */
    var propEq = curry(function (name, _val, obj) { return obj && obj[name] === _val; });
    /**
     * Given a dotted property name, returns a function that returns a nested property from an object, or undefined
     * let obj = { id: 1, nestedObj: { foo: 1, name: "blarg" }, };
     * let getName = prop("nestedObj.name");
     * getName(obj) === "blarg"
     * let propNotFound = prop("this.property.doesnt.exist");
     * propNotFound(obj) === undefined
     */
    var parse = function (name) { return pipe.apply(null, name.split('.').map(prop)); };
    /**
     * Given a function that returns a truthy or falsey value, returns a
     * function that returns the opposite (falsey or truthy) value given the same inputs
     */
    var not = function (fn) { return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return !fn.apply(null, args);
    }; };
    /**
     * Given two functions that return truthy or falsey values, returns a function that returns truthy
     * if both functions return truthy for the given arguments
     */
    function and(fn1, fn2) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn1.apply(null, args) && fn2.apply(null, args);
        };
    }
    /**
     * Given two functions that return truthy or falsey values, returns a function that returns truthy
     * if at least one of the functions returns truthy for the given arguments
     */
    function or(fn1, fn2) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return fn1.apply(null, args) || fn2.apply(null, args);
        };
    }
    /**
     * Check if all the elements of an array match a predicate function
     *
     * @param fn1 a predicate function `fn1`
     * @returns a function which takes an array and returns true if `fn1` is true for all elements of the array
     */
    var all = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b && !!fn1(x); }, true); }; };
    // tslint:disable-next-line:variable-name
    var any = function (fn1) { return function (arr) { return arr.reduce(function (b, x) { return b || !!fn1(x); }, false); }; };
    /** Given a class, returns a Predicate function that returns true if the object is of that class */
    var is = function (ctor) { return function (obj) {
        return (obj != null && obj.constructor === ctor) || obj instanceof ctor;
    }; };
    /** Given a value, returns a Predicate function that returns true if another value is === equal to the original value */
    var eq = function (value) { return function (other) { return value === other; }; };
    /** Given a value, returns a function which returns the value */
    var val = function (v) { return function () { return v; }; };
    function invoke(fnName, args) {
        return function (obj) { return obj[fnName].apply(obj, args); };
    }
    /**
     * Sorta like Pattern Matching (a functional programming conditional construct)
     *
     * See http://c2.com/cgi/wiki?PatternMatching
     *
     * This is a conditional construct which allows a series of predicates and output functions
     * to be checked and then applied.  Each predicate receives the input.  If the predicate
     * returns truthy, then its matching output function (mapping function) is provided with
     * the input and, then the result is returned.
     *
     * Each combination (2-tuple) of predicate + output function should be placed in an array
     * of size 2: [ predicate, mapFn ]
     *
     * These 2-tuples should be put in an outer array.
     *
     * @example
     * ```
     *
     * // Here's a 2-tuple where the first element is the isString predicate
     * // and the second element is a function that returns a description of the input
     * let firstTuple = [ angular.isString, (input) => `Heres your string ${input}` ];
     *
     * // Second tuple: predicate "isNumber", mapfn returns a description
     * let secondTuple = [ angular.isNumber, (input) => `(${input}) That's a number!` ];
     *
     * let third = [ (input) => input === null,  (input) => `Oh, null...` ];
     *
     * let fourth = [ (input) => input === undefined,  (input) => `notdefined` ];
     *
     * let descriptionOf = pattern([ firstTuple, secondTuple, third, fourth ]);
     *
     * console.log(descriptionOf(undefined)); // 'notdefined'
     * console.log(descriptionOf(55)); // '(55) That's a number!'
     * console.log(descriptionOf("foo")); // 'Here's your string foo'
     * ```
     *
     * @param struct A 2D array.  Each element of the array should be an array, a 2-tuple,
     * with a Predicate and a mapping/output function
     * @returns {function(any): *}
     */
    function pattern(struct) {
        return function (x) {
            for (var i = 0; i < struct.length; i++) {
                if (struct[i][0](x))
                    return struct[i][1](x);
            }
        };
    }

    /**
     * @coreapi
     * @module core
     */
    /**
     * Matches state names using glob-like pattern strings.
     *
     * Globs can be used in specific APIs including:
     *
     * - [[StateService.is]]
     * - [[StateService.includes]]
     * - The first argument to Hook Registration functions like [[TransitionService.onStart]]
     *    - [[HookMatchCriteria]] and [[HookMatchCriterion]]
     *
     * A `Glob` string is a pattern which matches state names.
     * Nested state names are split into segments (separated by a dot) when processing.
     * The state named `foo.bar.baz` is split into three segments ['foo', 'bar', 'baz']
     *
     * Globs work according to the following rules:
     *
     * ### Exact match:
     *
     * The glob `'A.B'` matches the state named exactly `'A.B'`.
     *
     * | Glob        |Matches states named|Does not match state named|
     * |:------------|:--------------------|:---------------------|
     * | `'A'`       | `'A'`               | `'B'` , `'A.C'`      |
     * | `'A.B'`     | `'A.B'`             | `'A'` , `'A.B.C'`    |
     * | `'foo'`     | `'foo'`             | `'FOO'` , `'foo.bar'`|
     *
     * ### Single star (`*`)
     *
     * A single star (`*`) is a wildcard that matches exactly one segment.
     *
     * | Glob        |Matches states named  |Does not match state named |
     * |:------------|:---------------------|:--------------------------|
     * | `'*'`       | `'A'` , `'Z'`        | `'A.B'` , `'Z.Y.X'`       |
     * | `'A.*'`     | `'A.B'` , `'A.C'`    | `'A'` , `'A.B.C'`         |
     * | `'A.*.*'`   | `'A.B.C'` , `'A.X.Y'`| `'A'`, `'A.B'` , `'Z.Y.X'`|
     *
     * ### Double star (`**`)
     *
     * A double star (`'**'`) is a wildcard that matches *zero or more segments*
     *
     * | Glob        |Matches states named                           |Does not match state named         |
     * |:------------|:----------------------------------------------|:----------------------------------|
     * | `'**'`      | `'A'` , `'A.B'`, `'Z.Y.X'`                    | (matches all states)              |
     * | `'A.**'`    | `'A'` , `'A.B'` , `'A.C.X'`                   | `'Z.Y.X'`                         |
     * | `'**.X'`    | `'X'` , `'A.X'` , `'Z.Y.X'`                   | `'A'` , `'A.login.Z'`             |
     * | `'A.**.X'`  | `'A.X'` , `'A.B.X'` , `'A.B.C.X'`             | `'A'` , `'A.B.C'`                 |
     *
     */
    var Glob = /** @class */ (function () {
        function Glob(text) {
            this.text = text;
            this.glob = text.split('.');
            var regexpString = this.text
                .split('.')
                .map(function (seg) {
                if (seg === '**')
                    return '(?:|(?:\\.[^.]*)*)';
                if (seg === '*')
                    return '\\.[^.]*';
                return '\\.' + seg;
            })
                .join('');
            this.regexp = new RegExp('^' + regexpString + '$');
        }
        /** Returns true if the string has glob-like characters in it */
        Glob.is = function (text) {
            return !!/[!,*]+/.exec(text);
        };
        /** Returns a glob from the string, or null if the string isn't Glob-like */
        Glob.fromString = function (text) {
            return Glob.is(text) ? new Glob(text) : null;
        };
        Glob.prototype.matches = function (name) {
            return this.regexp.test('.' + name);
        };
        return Glob;
    }());

    /**
     * Internal representation of a UI-Router state.
     *
     * Instances of this class are created when a [[StateDeclaration]] is registered with the [[StateRegistry]].
     *
     * A registered [[StateDeclaration]] is augmented with a getter ([[StateDeclaration.$$state]]) which returns the corresponding [[StateObject]] object.
     *
     * This class prototypally inherits from the corresponding [[StateDeclaration]].
     * Each of its own properties (i.e., `hasOwnProperty`) are built using builders from the [[StateBuilder]].
     */
    var StateObject = /** @class */ (function () {
        /** @deprecated use State.create() */
        function StateObject(config) {
            return StateObject.create(config || {});
        }
        /**
         * Create a state object to put the private/internal implementation details onto.
         * The object's prototype chain looks like:
         * (Internal State Object) -> (Copy of State.prototype) -> (State Declaration object) -> (State Declaration's prototype...)
         *
         * @param stateDecl the user-supplied State Declaration
         * @returns {StateObject} an internal State object
         */
        StateObject.create = function (stateDecl) {
            stateDecl = StateObject.isStateClass(stateDecl) ? new stateDecl() : stateDecl;
            var state = inherit(inherit(stateDecl, StateObject.prototype));
            stateDecl.$$state = function () { return state; };
            state.self = stateDecl;
            state.__stateObjectCache = {
                nameGlob: Glob.fromString(state.name),
            };
            return state;
        };
        /**
         * Returns true if the provided parameter is the same state.
         *
         * Compares the identity of the state against the passed value, which is either an object
         * reference to the actual `State` instance, the original definition object passed to
         * `$stateProvider.state()`, or the fully-qualified name.
         *
         * @param ref Can be one of (a) a `State` instance, (b) an object that was passed
         *        into `$stateProvider.state()`, (c) the fully-qualified name of a state as a string.
         * @returns Returns `true` if `ref` matches the current `State` instance.
         */
        StateObject.prototype.is = function (ref) {
            return this === ref || this.self === ref || this.fqn() === ref;
        };
        /**
         * @deprecated this does not properly handle dot notation
         * @returns Returns a dot-separated name of the state.
         */
        StateObject.prototype.fqn = function () {
            if (!this.parent || !(this.parent instanceof this.constructor))
                return this.name;
            var name = this.parent.fqn();
            return name ? name + '.' + this.name : this.name;
        };
        /**
         * Returns the root node of this state's tree.
         *
         * @returns The root of this state's tree.
         */
        StateObject.prototype.root = function () {
            return (this.parent && this.parent.root()) || this;
        };
        /**
         * Gets the state's `Param` objects
         *
         * Gets the list of [[Param]] objects owned by the state.
         * If `opts.inherit` is true, it also includes the ancestor states' [[Param]] objects.
         * If `opts.matchingKeys` exists, returns only `Param`s whose `id` is a key on the `matchingKeys` object
         *
         * @param opts options
         */
        StateObject.prototype.parameters = function (opts) {
            opts = defaults(opts, { inherit: true, matchingKeys: null });
            var inherited = (opts.inherit && this.parent && this.parent.parameters()) || [];
            return inherited
                .concat(values(this.params))
                .filter(function (param) { return !opts.matchingKeys || opts.matchingKeys.hasOwnProperty(param.id); });
        };
        /**
         * Returns a single [[Param]] that is owned by the state
         *
         * If `opts.inherit` is true, it also searches the ancestor states` [[Param]]s.
         * @param id the name of the [[Param]] to return
         * @param opts options
         */
        StateObject.prototype.parameter = function (id, opts) {
            if (opts === void 0) { opts = {}; }
            return ((this.url && this.url.parameter(id, opts)) ||
                find(values(this.params), propEq('id', id)) ||
                (opts.inherit && this.parent && this.parent.parameter(id)));
        };
        StateObject.prototype.toString = function () {
            return this.fqn();
        };
        /** Predicate which returns true if the object is an class with @State() decorator */
        StateObject.isStateClass = function (stateDecl) {
            return isFunction(stateDecl) && stateDecl['__uiRouterState'] === true;
        };
        /** Predicate which returns true if the object is an internal [[StateObject]] object */
        StateObject.isState = function (obj) { return isObject(obj['__stateObjectCache']); };
        return StateObject;
    }());

    /** Predicates
     *
     * These predicates return true/false based on the input.
     * Although these functions are exported, they are subject to change without notice.
     *
     * @module common_predicates
     */
    var toStr = Object.prototype.toString;
    var tis = function (t) { return function (x) { return typeof x === t; }; };
    var isUndefined = tis('undefined');
    var isDefined = not(isUndefined);
    var isNull = function (o) { return o === null; };
    var isNullOrUndefined = or(isNull, isUndefined);
    var isFunction = tis('function');
    var isNumber = tis('number');
    var isString = tis('string');
    var isObject = function (x) { return x !== null && typeof x === 'object'; };
    var isArray = Array.isArray;
    var isDate = (function (x) { return toStr.call(x) === '[object Date]'; });
    var isRegExp = (function (x) { return toStr.call(x) === '[object RegExp]'; });
    var isState = StateObject.isState;
    /**
     * Predicate which checks if a value is injectable
     *
     * A value is "injectable" if it is a function, or if it is an ng1 array-notation-style array
     * where all the elements in the array are Strings, except the last one, which is a Function
     */
    function isInjectable(val$$1) {
        if (isArray(val$$1) && val$$1.length) {
            var head = val$$1.slice(0, -1), tail = val$$1.slice(-1);
            return !(head.filter(not(isString)).length || tail.filter(not(isFunction)).length);
        }
        return isFunction(val$$1);
    }
    /**
     * Predicate which checks if a value looks like a Promise
     *
     * It is probably a Promise if it's an object, and it has a `then` property which is a Function
     */
    var isPromise = and(isObject, pipe(prop('then'), isFunction));

    var notImplemented = function (fnname) { return function () {
        throw new Error(fnname + "(): No coreservices implementation for UI-Router is loaded.");
    }; };
    var services = {
        $q: undefined,
        $injector: undefined,
    };

    /**
     * Random utility functions used in the UI-Router code
     *
     * These functions are exported, but are subject to change without notice.
     *
     * @preferred
     * @module common
     */
    var root = (typeof self === 'object' && self.self === self && self) ||
        (typeof global === 'object' && global.global === global && global) ||
        undefined;
    var angular$1 = root.angular || {};
    var fromJson = angular$1.fromJson || JSON.parse.bind(JSON);
    var toJson = angular$1.toJson || JSON.stringify.bind(JSON);
    var forEach = angular$1.forEach || _forEach;
    var extend = Object.assign || _extend;
    var equals = angular$1.equals || _equals;
    function identity(x) {
        return x;
    }
    function noop() { }
    /**
     * Builds proxy functions on the `to` object which pass through to the `from` object.
     *
     * For each key in `fnNames`, creates a proxy function on the `to` object.
     * The proxy function calls the real function on the `from` object.
     *
     *
     * #### Example:
     * This example creates an new class instance whose functions are prebound to the new'd object.
     * ```js
     * class Foo {
     *   constructor(data) {
     *     // Binds all functions from Foo.prototype to 'this',
     *     // then copies them to 'this'
     *     bindFunctions(Foo.prototype, this, this);
     *     this.data = data;
     *   }
     *
     *   log() {
     *     console.log(this.data);
     *   }
     * }
     *
     * let myFoo = new Foo([1,2,3]);
     * var logit = myFoo.log;
     * logit(); // logs [1, 2, 3] from the myFoo 'this' instance
     * ```
     *
     * #### Example:
     * This example creates a bound version of a service function, and copies it to another object
     * ```
     *
     * var SomeService = {
     *   this.data = [3, 4, 5];
     *   this.log = function() {
     *     console.log(this.data);
     *   }
     * }
     *
     * // Constructor fn
     * function OtherThing() {
     *   // Binds all functions from SomeService to SomeService,
     *   // then copies them to 'this'
     *   bindFunctions(SomeService, this, SomeService);
     * }
     *
     * let myOtherThing = new OtherThing();
     * myOtherThing.log(); // logs [3, 4, 5] from SomeService's 'this'
     * ```
     *
     * @param source A function that returns the source object which contains the original functions to be bound
     * @param target A function that returns the target object which will receive the bound functions
     * @param bind A function that returns the object which the functions will be bound to
     * @param fnNames The function names which will be bound (Defaults to all the functions found on the 'from' object)
     * @param latebind If true, the binding of the function is delayed until the first time it's invoked
     */
    function createProxyFunctions(source, target, bind, fnNames, latebind) {
        if (latebind === void 0) { latebind = false; }
        var bindFunction = function (fnName) { return source()[fnName].bind(bind()); };
        var makeLateRebindFn = function (fnName) {
            return function lateRebindFunction() {
                target[fnName] = bindFunction(fnName);
                return target[fnName].apply(null, arguments);
            };
        };
        fnNames = fnNames || Object.keys(source());
        return fnNames.reduce(function (acc, name) {
            acc[name] = latebind ? makeLateRebindFn(name) : bindFunction(name);
            return acc;
        }, target);
    }
    /**
     * prototypal inheritance helper.
     * Creates a new object which has `parent` object as its prototype, and then copies the properties from `extra` onto it
     */
    var inherit = function (parent, extra) { return extend(Object.create(parent), extra); };
    /** Given an array, returns true if the object is found in the array, (using indexOf) */
    var inArray = curry(_inArray);
    function _inArray(array, obj) {
        return array.indexOf(obj) !== -1;
    }
    /**
     * Given an array, and an item, if the item is found in the array, it removes it (in-place).
     * The same array is returned
     */
    var removeFrom = curry(_removeFrom);
    function _removeFrom(array, obj) {
        var idx = array.indexOf(obj);
        if (idx >= 0)
            array.splice(idx, 1);
        return array;
    }
    /** pushes a values to an array and returns the value */
    var pushTo = curry(_pushTo);
    function _pushTo(arr, val$$1) {
        return arr.push(val$$1), val$$1;
    }
    /** Given an array of (deregistration) functions, calls all functions and removes each one from the source array */
    var deregAll = function (functions) {
        return functions.slice().forEach(function (fn) {
            typeof fn === 'function' && fn();
            removeFrom(functions, fn);
        });
    };
    /**
     * Applies a set of defaults to an options object.  The options object is filtered
     * to only those properties of the objects in the defaultsList.
     * Earlier objects in the defaultsList take precedence when applying defaults.
     */
    function defaults(opts) {
        var defaultsList = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            defaultsList[_i - 1] = arguments[_i];
        }
        var _defaultsList = defaultsList.concat({}).reverse();
        var defaultVals = extend.apply(null, _defaultsList);
        return extend({}, defaultVals, pick(opts || {}, Object.keys(defaultVals)));
    }
    /** Reduce function that merges each element of the list into a single object, using extend */
    var mergeR = function (memo, item) { return extend(memo, item); };
    /**
     * Finds the common ancestor path between two states.
     *
     * @param {Object} first The first state.
     * @param {Object} second The second state.
     * @return {Array} Returns an array of state names in descending order, not including the root.
     */
    function ancestors(first, second) {
        var path = [];
        // tslint:disable-next-line:forin
        for (var n in first.path) {
            if (first.path[n] !== second.path[n])
                break;
            path.push(first.path[n]);
        }
        return path;
    }
    /**
     * Return a copy of the object only containing the whitelisted properties.
     *
     * #### Example:
     * ```
     * var foo = { a: 1, b: 2, c: 3 };
     * var ab = pick(foo, ['a', 'b']); // { a: 1, b: 2 }
     * ```
     * @param obj the source object
     * @param propNames an Array of strings, which are the whitelisted property names
     */
    function pick(obj, propNames) {
        var objCopy = {};
        for (var _prop in obj) {
            if (propNames.indexOf(_prop) !== -1) {
                objCopy[_prop] = obj[_prop];
            }
        }
        return objCopy;
    }
    /**
     * Return a copy of the object omitting the blacklisted properties.
     *
     * @example
     * ```
     *
     * var foo = { a: 1, b: 2, c: 3 };
     * var ab = omit(foo, ['a', 'b']); // { c: 3 }
     * ```
     * @param obj the source object
     * @param propNames an Array of strings, which are the blacklisted property names
     */
    function omit(obj, propNames) {
        return Object.keys(obj)
            .filter(not(inArray(propNames)))
            .reduce(function (acc, key) { return ((acc[key] = obj[key]), acc); }, {});
    }
    /**
     * Maps an array, or object to a property (by name)
     */
    function pluck(collection, propName) {
        return map(collection, prop(propName));
    }
    /** Filters an Array or an Object's properties based on a predicate */
    function filter(collection, callback) {
        var arr = isArray(collection), result = arr ? [] : {};
        var accept = arr ? function (x) { return result.push(x); } : function (x, key) { return (result[key] = x); };
        forEach(collection, function (item, i) {
            if (callback(item, i))
                accept(item, i);
        });
        return result;
    }
    /** Finds an object from an array, or a property of an object, that matches a predicate */
    function find(collection, callback) {
        var result;
        forEach(collection, function (item, i) {
            if (result)
                return;
            if (callback(item, i))
                result = item;
        });
        return result;
    }
    /** Given an object, returns a new object, where each property is transformed by the callback function */
    var mapObj = map;
    /** Maps an array or object properties using a callback function */
    function map(collection, callback, target) {
        target = target || (isArray(collection) ? [] : {});
        forEach(collection, function (item, i) { return (target[i] = callback(item, i)); });
        return target;
    }
    /**
     * Given an object, return its enumerable property values
     *
     * @example
     * ```
     *
     * let foo = { a: 1, b: 2, c: 3 }
     * let vals = values(foo); // [ 1, 2, 3 ]
     * ```
     */
    var values = function (obj) { return Object.keys(obj).map(function (key) { return obj[key]; }); };
    /**
     * Reduce function that returns true if all of the values are truthy.
     *
     * @example
     * ```
     *
     * let vals = [ 1, true, {}, "hello world"];
     * vals.reduce(allTrueR, true); // true
     *
     * vals.push(0);
     * vals.reduce(allTrueR, true); // false
     * ```
     */
    var allTrueR = function (memo, elem) { return memo && elem; };
    /**
     * Reduce function that returns true if any of the values are truthy.
     *
     *  * @example
     * ```
     *
     * let vals = [ 0, null, undefined ];
     * vals.reduce(anyTrueR, true); // false
     *
     * vals.push("hello world");
     * vals.reduce(anyTrueR, true); // true
     * ```
     */
    var anyTrueR = function (memo, elem) { return memo || elem; };
    /**
     * Reduce function which un-nests a single level of arrays
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * input.reduce(unnestR, []) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
     * ```
     */
    var unnestR = function (memo, elem) { return memo.concat(elem); };
    /**
     * Reduce function which recursively un-nests all arrays
     *
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * input.reduce(unnestR, []) // [ "a", "b", "c", "d", "double, "nested" ]
     * ```
     */
    var flattenR = function (memo, elem) {
        return isArray(elem) ? memo.concat(elem.reduce(flattenR, [])) : pushR(memo, elem);
    };
    /**
     * Reduce function that pushes an object to an array, then returns the array.
     * Mostly just for [[flattenR]] and [[uniqR]]
     */
    function pushR(arr, obj) {
        arr.push(obj);
        return arr;
    }
    /** Reduce function that filters out duplicates */
    var uniqR = function (acc, token) { return (inArray(acc, token) ? acc : pushR(acc, token)); };
    /**
     * Return a new array with a single level of arrays unnested.
     *
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * unnest(input) // [ "a", "b", "c", "d", [ "double, "nested" ] ]
     * ```
     */
    var unnest = function (arr) { return arr.reduce(unnestR, []); };
    /**
     * Return a completely flattened version of an array.
     *
     * @example
     * ```
     *
     * let input = [ [ "a", "b" ], [ "c", "d" ], [ [ "double", "nested" ] ] ];
     * flatten(input) // [ "a", "b", "c", "d", "double, "nested" ]
     * ```
     */
    var flatten = function (arr) { return arr.reduce(flattenR, []); };
    /**
     * Given a .filter Predicate, builds a .filter Predicate which throws an error if any elements do not pass.
     * @example
     * ```
     *
     * let isNumber = (obj) => typeof(obj) === 'number';
     * let allNumbers = [ 1, 2, 3, 4, 5 ];
     * allNumbers.filter(assertPredicate(isNumber)); //OK
     *
     * let oneString = [ 1, 2, 3, 4, "5" ];
     * oneString.filter(assertPredicate(isNumber, "Not all numbers")); // throws Error(""Not all numbers"");
     * ```
     */
    var assertPredicate = assertFn;
    /**
     * Given a .map function, builds a .map function which throws an error if any mapped elements do not pass a truthyness test.
     * @example
     * ```
     *
     * var data = { foo: 1, bar: 2 };
     *
     * let keys = [ 'foo', 'bar' ]
     * let values = keys.map(assertMap(key => data[key], "Key not found"));
     * // values is [1, 2]
     *
     * let keys = [ 'foo', 'bar', 'baz' ]
     * let values = keys.map(assertMap(key => data[key], "Key not found"));
     * // throws Error("Key not found")
     * ```
     */
    var assertMap = assertFn;
    function assertFn(predicateOrMap, errMsg) {
        if (errMsg === void 0) { errMsg = 'assert failure'; }
        return function (obj) {
            var result = predicateOrMap(obj);
            if (!result) {
                throw new Error(isFunction(errMsg) ? errMsg(obj) : errMsg);
            }
            return result;
        };
    }
    /**
     * Like _.pairs: Given an object, returns an array of key/value pairs
     *
     * @example
     * ```
     *
     * pairs({ foo: "FOO", bar: "BAR }) // [ [ "foo", "FOO" ], [ "bar": "BAR" ] ]
     * ```
     */
    var pairs = function (obj) { return Object.keys(obj).map(function (key) { return [key, obj[key]]; }); };
    /**
     * Given two or more parallel arrays, returns an array of tuples where
     * each tuple is composed of [ a[i], b[i], ... z[i] ]
     *
     * @example
     * ```
     *
     * let foo = [ 0, 2, 4, 6 ];
     * let bar = [ 1, 3, 5, 7 ];
     * let baz = [ 10, 30, 50, 70 ];
     * arrayTuples(foo, bar);       // [ [0, 1], [2, 3], [4, 5], [6, 7] ]
     * arrayTuples(foo, bar, baz);  // [ [0, 1, 10], [2, 3, 30], [4, 5, 50], [6, 7, 70] ]
     * ```
     */
    function arrayTuples() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 0)
            return [];
        var maxArrayLen = args.reduce(function (min, arr) { return Math.min(arr.length, min); }, 9007199254740991); // aka 2^53 − 1 aka Number.MAX_SAFE_INTEGER
        var result = [];
        var _loop_1 = function (i) {
            // This is a hot function
            // Unroll when there are 1-4 arguments
            switch (args.length) {
                case 1:
                    result.push([args[0][i]]);
                    break;
                case 2:
                    result.push([args[0][i], args[1][i]]);
                    break;
                case 3:
                    result.push([args[0][i], args[1][i], args[2][i]]);
                    break;
                case 4:
                    result.push([args[0][i], args[1][i], args[2][i], args[3][i]]);
                    break;
                default:
                    result.push(args.map(function (array) { return array[i]; }));
                    break;
            }
        };
        for (var i = 0; i < maxArrayLen; i++) {
            _loop_1(i);
        }
        return result;
    }
    /**
     * Reduce function which builds an object from an array of [key, value] pairs.
     *
     * Each iteration sets the key/val pair on the memo object, then returns the memo for the next iteration.
     *
     * Each keyValueTuple should be an array with values [ key: string, value: any ]
     *
     * @example
     * ```
     *
     * var pairs = [ ["fookey", "fooval"], ["barkey", "barval"] ]
     *
     * var pairsToObj = pairs.reduce((memo, pair) => applyPairs(memo, pair), {})
     * // pairsToObj == { fookey: "fooval", barkey: "barval" }
     *
     * // Or, more simply:
     * var pairsToObj = pairs.reduce(applyPairs, {})
     * // pairsToObj == { fookey: "fooval", barkey: "barval" }
     * ```
     */
    function applyPairs(memo, keyValTuple) {
        var key, value;
        if (isArray(keyValTuple))
            key = keyValTuple[0], value = keyValTuple[1];
        if (!isString(key))
            throw new Error('invalid parameters to applyPairs');
        memo[key] = value;
        return memo;
    }
    /** Get the last element of an array */
    function tail(arr) {
        return (arr.length && arr[arr.length - 1]) || undefined;
    }
    /**
     * shallow copy from src to dest
     */
    function copy(src, dest) {
        if (dest)
            Object.keys(dest).forEach(function (key) { return delete dest[key]; });
        if (!dest)
            dest = {};
        return extend(dest, src);
    }
    /** Naive forEach implementation works with Objects or Arrays */
    function _forEach(obj, cb, _this) {
        if (isArray(obj))
            return obj.forEach(cb, _this);
        Object.keys(obj).forEach(function (key) { return cb(obj[key], key); });
    }
    function _extend(toObj) {
        for (var i = 1; i < arguments.length; i++) {
            var obj = arguments[i];
            if (!obj)
                continue;
            var keys = Object.keys(obj);
            for (var j = 0; j < keys.length; j++) {
                toObj[keys[j]] = obj[keys[j]];
            }
        }
        return toObj;
    }
    function _equals(o1, o2) {
        if (o1 === o2)
            return true;
        if (o1 === null || o2 === null)
            return false;
        if (o1 !== o1 && o2 !== o2)
            return true; // NaN === NaN
        var t1 = typeof o1, t2 = typeof o2;
        if (t1 !== t2 || t1 !== 'object')
            return false;
        var tup = [o1, o2];
        if (all(isArray)(tup))
            return _arraysEq(o1, o2);
        if (all(isDate)(tup))
            return o1.getTime() === o2.getTime();
        if (all(isRegExp)(tup))
            return o1.toString() === o2.toString();
        if (all(isFunction)(tup))
            return true; // meh
        var predicates = [isFunction, isArray, isDate, isRegExp];
        if (predicates.map(any).reduce(function (b, fn) { return b || !!fn(tup); }, false))
            return false;
        var keys = {};
        // tslint:disable-next-line:forin
        for (var key in o1) {
            if (!_equals(o1[key], o2[key]))
                return false;
            keys[key] = true;
        }
        for (var key in o2) {
            if (!keys[key])
                return false;
        }
        return true;
    }
    function _arraysEq(a1, a2) {
        if (a1.length !== a2.length)
            return false;
        return arrayTuples(a1, a2).reduce(function (b, t) { return b && _equals(t[0], t[1]); }, true);
    }
    // issue #2676
    var silenceUncaughtInPromise = function (promise) { return promise.catch(function (e) { return 0; }) && promise; };
    var silentRejection = function (error) { return silenceUncaughtInPromise(services.$q.reject(error)); };

    /** @module common */
    var Queue = /** @class */ (function () {
        function Queue(_items, _limit) {
            if (_items === void 0) { _items = []; }
            if (_limit === void 0) { _limit = null; }
            this._items = _items;
            this._limit = _limit;
            this._evictListeners = [];
            this.onEvict = pushTo(this._evictListeners);
        }
        Queue.prototype.enqueue = function (item) {
            var items = this._items;
            items.push(item);
            if (this._limit && items.length > this._limit)
                this.evict();
            return item;
        };
        Queue.prototype.evict = function () {
            var item = this._items.shift();
            this._evictListeners.forEach(function (fn) { return fn(item); });
            return item;
        };
        Queue.prototype.dequeue = function () {
            if (this.size())
                return this._items.splice(0, 1)[0];
        };
        Queue.prototype.clear = function () {
            var current = this._items;
            this._items = [];
            return current;
        };
        Queue.prototype.size = function () {
            return this._items.length;
        };
        Queue.prototype.remove = function (item) {
            var idx = this._items.indexOf(item);
            return idx > -1 && this._items.splice(idx, 1)[0];
        };
        Queue.prototype.peekTail = function () {
            return this._items[this._items.length - 1];
        };
        Queue.prototype.peekHead = function () {
            if (this.size())
                return this._items[0];
        };
        return Queue;
    }());

    /**
     * @coreapi
     * @module transition
     */ /** for typedoc */

    (function (RejectType) {
        /**
         * A new transition superseded this one.
         *
         * While this transition was running, a new transition started.
         * This transition is cancelled because it was superseded by new transition.
         */
        RejectType[RejectType["SUPERSEDED"] = 2] = "SUPERSEDED";
        /**
         * The transition was aborted
         *
         * The transition was aborted by a hook which returned `false`
         */
        RejectType[RejectType["ABORTED"] = 3] = "ABORTED";
        /**
         * The transition was invalid
         *
         * The transition was never started because it was invalid
         */
        RejectType[RejectType["INVALID"] = 4] = "INVALID";
        /**
         * The transition was ignored
         *
         * The transition was ignored because it would have no effect.
         *
         * Either:
         *
         * - The transition is targeting the current state and parameter values
         * - The transition is targeting the same state and parameter values as the currently running transition.
         */
        RejectType[RejectType["IGNORED"] = 5] = "IGNORED";
        /**
         * The transition errored.
         *
         * This generally means a hook threw an error or returned a rejected promise
         */
        RejectType[RejectType["ERROR"] = 6] = "ERROR";
    })(exports.RejectType || (exports.RejectType = {}));
    /** @hidden */
    var id = 0;
    var Rejection = /** @class */ (function () {
        function Rejection(type, message, detail) {
            /** @hidden */
            this.$id = id++;
            this.type = type;
            this.message = message;
            this.detail = detail;
        }
        /** Returns true if the obj is a rejected promise created from the `asPromise` factory */
        Rejection.isRejectionPromise = function (obj) {
            return obj && typeof obj.then === 'function' && is(Rejection)(obj._transitionRejection);
        };
        /** Returns a Rejection due to transition superseded */
        Rejection.superseded = function (detail, options) {
            var message = 'The transition has been superseded by a different transition';
            var rejection = new Rejection(exports.RejectType.SUPERSEDED, message, detail);
            if (options && options.redirected) {
                rejection.redirected = true;
            }
            return rejection;
        };
        /** Returns a Rejection due to redirected transition */
        Rejection.redirected = function (detail) {
            return Rejection.superseded(detail, { redirected: true });
        };
        /** Returns a Rejection due to invalid transition */
        Rejection.invalid = function (detail) {
            var message = 'This transition is invalid';
            return new Rejection(exports.RejectType.INVALID, message, detail);
        };
        /** Returns a Rejection due to ignored transition */
        Rejection.ignored = function (detail) {
            var message = 'The transition was ignored';
            return new Rejection(exports.RejectType.IGNORED, message, detail);
        };
        /** Returns a Rejection due to aborted transition */
        Rejection.aborted = function (detail) {
            var message = 'The transition has been aborted';
            return new Rejection(exports.RejectType.ABORTED, message, detail);
        };
        /** Returns a Rejection due to aborted transition */
        Rejection.errored = function (detail) {
            var message = 'The transition errored';
            return new Rejection(exports.RejectType.ERROR, message, detail);
        };
        /**
         * Returns a Rejection
         *
         * Normalizes a value as a Rejection.
         * If the value is already a Rejection, returns it.
         * Otherwise, wraps and returns the value as a Rejection (Rejection type: ERROR).
         *
         * @returns `detail` if it is already a `Rejection`, else returns an ERROR Rejection.
         */
        Rejection.normalize = function (detail) {
            return is(Rejection)(detail) ? detail : Rejection.errored(detail);
        };
        Rejection.prototype.toString = function () {
            var detailString = function (d) { return (d && d.toString !== Object.prototype.toString ? d.toString() : stringify(d)); };
            var detail = detailString(this.detail);
            var _a = this, $id = _a.$id, type = _a.type, message = _a.message;
            return "Transition Rejection($id: " + $id + " type: " + type + ", message: " + message + ", detail: " + detail + ")";
        };
        Rejection.prototype.toPromise = function () {
            return extend(silentRejection(this), { _transitionRejection: this });
        };
        return Rejection;
    }());

    /**
     * # Transition tracing (debug)
     *
     * Enable transition tracing to print transition information to the console,
     * in order to help debug your application.
     * Tracing logs detailed information about each Transition to your console.
     *
     * To enable tracing, import the [[Trace]] singleton and enable one or more categories.
     *
     * ### ES6
     * ```js
     * import {trace} from "@uirouter/core";
     * trace.enable(1, 5); // TRANSITION and VIEWCONFIG
     * ```
     *
     * ### CJS
     * ```js
     * let trace = require("@uirouter/core").trace;
     * trace.enable("TRANSITION", "VIEWCONFIG");
     * ```
     *
     * ### Globals
     * ```js
     * let trace = window["@uirouter/core"].trace;
     * trace.enable(); // Trace everything (very verbose)
     * ```
     *
     * ### Angular 1:
     * ```js
     * app.run($trace => $trace.enable());
     * ```
     *
     * @coreapi
     * @module trace
     */
    /** @hidden */
    function uiViewString(uiview) {
        if (!uiview)
            return 'ui-view (defunct)';
        var state = uiview.creationContext ? uiview.creationContext.name || '(root)' : '(none)';
        return "[ui-view#" + uiview.id + " " + uiview.$type + ":" + uiview.fqn + " (" + uiview.name + "@" + state + ")]";
    }
    /** @hidden */
    var viewConfigString = function (viewConfig) {
        var view = viewConfig.viewDecl;
        var state = view.$context.name || '(root)';
        return "[View#" + viewConfig.$id + " from '" + state + "' state]: target ui-view: '" + view.$uiViewName + "@" + view.$uiViewContextAnchor + "'";
    };
    /** @hidden */
    function normalizedCat(input) {
        return isNumber(input) ? exports.Category[input] : exports.Category[exports.Category[input]];
    }
    /** @hidden */
    var consoleLog = Function.prototype.bind.call(console.log, console);
    /** @hidden */
    var consoletable = isFunction(console.table) ? console.table.bind(console) : consoleLog.bind(console);
    /**
     * Trace categories Enum
     *
     * Enable or disable a category using [[Trace.enable]] or [[Trace.disable]]
     *
     * `trace.enable(Category.TRANSITION)`
     *
     * These can also be provided using a matching string, or position ordinal
     *
     * `trace.enable("TRANSITION")`
     *
     * `trace.enable(1)`
     */

    (function (Category) {
        Category[Category["RESOLVE"] = 0] = "RESOLVE";
        Category[Category["TRANSITION"] = 1] = "TRANSITION";
        Category[Category["HOOK"] = 2] = "HOOK";
        Category[Category["UIVIEW"] = 3] = "UIVIEW";
        Category[Category["VIEWCONFIG"] = 4] = "VIEWCONFIG";
    })(exports.Category || (exports.Category = {}));
    /** @hidden */
    var _tid = parse('$id');
    /** @hidden */
    var _rid = parse('router.$id');
    /** @hidden */
    var transLbl = function (trans) { return "Transition #" + _tid(trans) + "-" + _rid(trans); };
    /**
     * Prints UI-Router Transition trace information to the console.
     */
    var Trace = /** @class */ (function () {
        /** @hidden */
        function Trace() {
            /** @hidden */
            this._enabled = {};
            this.approximateDigests = 0;
        }
        /** @hidden */
        Trace.prototype._set = function (enabled, categories) {
            var _this = this;
            if (!categories.length) {
                categories = Object.keys(exports.Category)
                    .map(function (k) { return parseInt(k, 10); })
                    .filter(function (k) { return !isNaN(k); })
                    .map(function (key) { return exports.Category[key]; });
            }
            categories.map(normalizedCat).forEach(function (category) { return (_this._enabled[category] = enabled); });
        };
        Trace.prototype.enable = function () {
            var categories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                categories[_i] = arguments[_i];
            }
            this._set(true, categories);
        };
        Trace.prototype.disable = function () {
            var categories = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                categories[_i] = arguments[_i];
            }
            this._set(false, categories);
        };
        /**
         * Retrieves the enabled stateus of a [[Category]]
         *
         * ```js
         * trace.enabled("VIEWCONFIG"); // true or false
         * ```
         *
         * @returns boolean true if the category is enabled
         */
        Trace.prototype.enabled = function (category) {
            return !!this._enabled[normalizedCat(category)];
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceTransitionStart = function (trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": Started  -> " + stringify(trans));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceTransitionIgnored = function (trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": Ignored  <> " + stringify(trans));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceHookInvocation = function (step, trans, options) {
            if (!this.enabled(exports.Category.HOOK))
                return;
            var event = parse('traceData.hookType')(options) || 'internal', context = parse('traceData.context.state.name')(options) || parse('traceData.context')(options) || 'unknown', name = functionToString(step.registeredHook.callback);
            console.log(transLbl(trans) + ":   Hook -> " + event + " context: " + context + ", " + maxLength(200, name));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceHookResult = function (hookResult, trans, transitionOptions) {
            if (!this.enabled(exports.Category.HOOK))
                return;
            console.log(transLbl(trans) + ":   <- Hook returned: " + maxLength(200, stringify(hookResult)));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceResolvePath = function (path, when, trans) {
            if (!this.enabled(exports.Category.RESOLVE))
                return;
            console.log(transLbl(trans) + ":         Resolving " + path + " (" + when + ")");
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceResolvableResolved = function (resolvable, trans) {
            if (!this.enabled(exports.Category.RESOLVE))
                return;
            console.log(transLbl(trans) + ":               <- Resolved  " + resolvable + " to: " + maxLength(200, stringify(resolvable.data)));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceError = function (reason, trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": <- Rejected " + stringify(trans) + ", reason: " + reason);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceSuccess = function (finalState, trans) {
            if (!this.enabled(exports.Category.TRANSITION))
                return;
            console.log(transLbl(trans) + ": <- Success  " + stringify(trans) + ", final state: " + finalState.name);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceUIViewEvent = function (event, viewData, extra) {
            if (extra === void 0) { extra = ''; }
            if (!this.enabled(exports.Category.UIVIEW))
                return;
            console.log("ui-view: " + padString(30, event) + " " + uiViewString(viewData) + extra);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceUIViewConfigUpdated = function (viewData, context) {
            if (!this.enabled(exports.Category.UIVIEW))
                return;
            this.traceUIViewEvent('Updating', viewData, " with ViewConfig from context='" + context + "'");
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceUIViewFill = function (viewData, html) {
            if (!this.enabled(exports.Category.UIVIEW))
                return;
            this.traceUIViewEvent('Fill', viewData, " with: " + maxLength(200, html));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceViewSync = function (pairs) {
            if (!this.enabled(exports.Category.VIEWCONFIG))
                return;
            var uivheader = 'uiview component fqn';
            var cfgheader = 'view config state (view name)';
            var mapping = pairs
                .map(function (_a) {
                var uiView = _a.uiView, viewConfig = _a.viewConfig;
                var uiv = uiView && uiView.fqn;
                var cfg = viewConfig && viewConfig.viewDecl.$context.name + ": (" + viewConfig.viewDecl.$name + ")";
                return _b = {}, _b[uivheader] = uiv, _b[cfgheader] = cfg, _b;
                var _b;
            })
                .sort(function (a, b) { return (a[uivheader] || '').localeCompare(b[uivheader] || ''); });
            consoletable(mapping);
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceViewServiceEvent = function (event, viewConfig) {
            if (!this.enabled(exports.Category.VIEWCONFIG))
                return;
            console.log("VIEWCONFIG: " + event + " " + viewConfigString(viewConfig));
        };
        /** @internalapi called by ui-router code */
        Trace.prototype.traceViewServiceUIViewEvent = function (event, viewData) {
            if (!this.enabled(exports.Category.VIEWCONFIG))
                return;
            console.log("VIEWCONFIG: " + event + " " + uiViewString(viewData));
        };
        return Trace;
    }());
    /**
     * The [[Trace]] singleton
     *
     * #### Example:
     * ```js
     * import {trace} from "@uirouter/core";
     * trace.enable(1, 5);
     * ```
     */
    var trace = new Trace();

    (function (TransitionHookPhase) {
        TransitionHookPhase[TransitionHookPhase["CREATE"] = 0] = "CREATE";
        TransitionHookPhase[TransitionHookPhase["BEFORE"] = 1] = "BEFORE";
        TransitionHookPhase[TransitionHookPhase["RUN"] = 2] = "RUN";
        TransitionHookPhase[TransitionHookPhase["SUCCESS"] = 3] = "SUCCESS";
        TransitionHookPhase[TransitionHookPhase["ERROR"] = 4] = "ERROR";
    })(exports.TransitionHookPhase || (exports.TransitionHookPhase = {}));

    (function (TransitionHookScope) {
        TransitionHookScope[TransitionHookScope["TRANSITION"] = 0] = "TRANSITION";
        TransitionHookScope[TransitionHookScope["STATE"] = 1] = "STATE";
    })(exports.TransitionHookScope || (exports.TransitionHookScope = {}));

    /**
     * @coreapi
     * @module state
     */ /** for typedoc */
    /**
     * Encapsulate the target (destination) state/params/options of a [[Transition]].
     *
     * This class is frequently used to redirect a transition to a new destination.
     *
     * See:
     *
     * - [[HookResult]]
     * - [[TransitionHookFn]]
     * - [[TransitionService.onStart]]
     *
     * To create a `TargetState`, use [[StateService.target]].
     *
     * ---
     *
     * This class wraps:
     *
     * 1) an identifier for a state
     * 2) a set of parameters
     * 3) and transition options
     * 4) the registered state object (the [[StateDeclaration]])
     *
     * Many UI-Router APIs such as [[StateService.go]] take a [[StateOrName]] argument which can
     * either be a *state object* (a [[StateDeclaration]] or [[StateObject]]) or a *state name* (a string).
     * The `TargetState` class normalizes those options.
     *
     * A `TargetState` may be valid (the state being targeted exists in the registry)
     * or invalid (the state being targeted is not registered).
     */
    var TargetState = /** @class */ (function () {
        /**
         * The TargetState constructor
         *
         * Note: Do not construct a `TargetState` manually.
         * To create a `TargetState`, use the [[StateService.target]] factory method.
         *
         * @param _stateRegistry The StateRegistry to use to look up the _definition
         * @param _identifier An identifier for a state.
         *    Either a fully-qualified state name, or the object used to define the state.
         * @param _params Parameters for the target state
         * @param _options Transition options.
         *
         * @internalapi
         */
        function TargetState(_stateRegistry, _identifier, _params, _options) {
            this._stateRegistry = _stateRegistry;
            this._identifier = _identifier;
            this._identifier = _identifier;
            this._params = extend({}, _params || {});
            this._options = extend({}, _options || {});
            this._definition = _stateRegistry.matcher.find(_identifier, this._options.relative);
        }
        /** The name of the state this object targets */
        TargetState.prototype.name = function () {
            return (this._definition && this._definition.name) || this._identifier;
        };
        /** The identifier used when creating this TargetState */
        TargetState.prototype.identifier = function () {
            return this._identifier;
        };
        /** The target parameter values */
        TargetState.prototype.params = function () {
            return this._params;
        };
        /** The internal state object (if it was found) */
        TargetState.prototype.$state = function () {
            return this._definition;
        };
        /** The internal state declaration (if it was found) */
        TargetState.prototype.state = function () {
            return this._definition && this._definition.self;
        };
        /** The target options */
        TargetState.prototype.options = function () {
            return this._options;
        };
        /** True if the target state was found */
        TargetState.prototype.exists = function () {
            return !!(this._definition && this._definition.self);
        };
        /** True if the object is valid */
        TargetState.prototype.valid = function () {
            return !this.error();
        };
        /** If the object is invalid, returns the reason why */
        TargetState.prototype.error = function () {
            var base = this.options().relative;
            if (!this._definition && !!base) {
                var stateName = base.name ? base.name : base;
                return "Could not resolve '" + this.name() + "' from state '" + stateName + "'";
            }
            if (!this._definition)
                return "No such state '" + this.name() + "'";
            if (!this._definition.self)
                return "State '" + this.name() + "' has an invalid definition";
        };
        TargetState.prototype.toString = function () {
            return "'" + this.name() + "'" + stringify(this.params());
        };
        /**
         * Returns a copy of this TargetState which targets a different state.
         * The new TargetState has the same parameter values and transition options.
         *
         * @param state The new state that should be targeted
         */
        TargetState.prototype.withState = function (state) {
            return new TargetState(this._stateRegistry, state, this._params, this._options);
        };
        /**
         * Returns a copy of this TargetState, using the specified parameter values.
         *
         * @param params the new parameter values to use
         * @param replace When false (default) the new parameter values will be merged with the current values.
         *                When true the parameter values will be used instead of the current values.
         */
        TargetState.prototype.withParams = function (params, replace) {
            if (replace === void 0) { replace = false; }
            var newParams = replace ? params : extend({}, this._params, params);
            return new TargetState(this._stateRegistry, this._identifier, newParams, this._options);
        };
        /**
         * Returns a copy of this TargetState, using the specified Transition Options.
         *
         * @param options the new options to use
         * @param replace When false (default) the new options will be merged with the current options.
         *                When true the options will be used instead of the current options.
         */
        TargetState.prototype.withOptions = function (options, replace) {
            if (replace === void 0) { replace = false; }
            var newOpts = replace ? options : extend({}, this._options, options);
            return new TargetState(this._stateRegistry, this._identifier, this._params, newOpts);
        };
        /** Returns true if the object has a state property that might be a state or state name */
        TargetState.isDef = function (obj) { return obj && obj.state && (isString(obj.state) || isString(obj.state.name)); };
        return TargetState;
    }());

    /**
     * @coreapi
     * @module transition
     */
    var defaultOptions = {
        current: noop,
        transition: null,
        traceData: {},
        bind: null,
    };
    /** @hidden */
    var TransitionHook = /** @class */ (function () {
        function TransitionHook(transition, stateContext, registeredHook, options) {
            var _this = this;
            this.transition = transition;
            this.stateContext = stateContext;
            this.registeredHook = registeredHook;
            this.options = options;
            this.isSuperseded = function () { return _this.type.hookPhase === exports.TransitionHookPhase.RUN && !_this.options.transition.isActive(); };
            this.options = defaults(options, defaultOptions);
            this.type = registeredHook.eventType;
        }
        /**
         * Chains together an array of TransitionHooks.
         *
         * Given a list of [[TransitionHook]] objects, chains them together.
         * Each hook is invoked after the previous one completes.
         *
         * #### Example:
         * ```js
         * var hooks: TransitionHook[] = getHooks();
         * let promise: Promise<any> = TransitionHook.chain(hooks);
         *
         * promise.then(handleSuccess, handleError);
         * ```
         *
         * @param hooks the list of hooks to chain together
         * @param waitFor if provided, the chain is `.then()`'ed off this promise
         * @returns a `Promise` for sequentially invoking the hooks (in order)
         */
        TransitionHook.chain = function (hooks, waitFor) {
            // Chain the next hook off the previous
            var createHookChainR = function (prev, nextHook) { return prev.then(function () { return nextHook.invokeHook(); }); };
            return hooks.reduce(createHookChainR, waitFor || services.$q.when());
        };
        /**
         * Invokes all the provided TransitionHooks, in order.
         * Each hook's return value is checked.
         * If any hook returns a promise, then the rest of the hooks are chained off that promise, and the promise is returned.
         * If no hook returns a promise, then all hooks are processed synchronously.
         *
         * @param hooks the list of TransitionHooks to invoke
         * @param doneCallback a callback that is invoked after all the hooks have successfully completed
         *
         * @returns a promise for the async result, or the result of the callback
         */
        TransitionHook.invokeHooks = function (hooks, doneCallback) {
            for (var idx = 0; idx < hooks.length; idx++) {
                var hookResult = hooks[idx].invokeHook();
                if (isPromise(hookResult)) {
                    var remainingHooks = hooks.slice(idx + 1);
                    return TransitionHook.chain(remainingHooks, hookResult).then(doneCallback);
                }
            }
            return doneCallback();
        };
        /**
         * Run all TransitionHooks, ignoring their return value.
         */
        TransitionHook.runAllHooks = function (hooks) {
            hooks.forEach(function (hook) { return hook.invokeHook(); });
        };
        TransitionHook.prototype.logError = function (err) {
            this.transition.router.stateService.defaultErrorHandler()(err);
        };
        TransitionHook.prototype.invokeHook = function () {
            var _this = this;
            var hook = this.registeredHook;
            if (hook._deregistered)
                return;
            var notCurrent = this.getNotCurrentRejection();
            if (notCurrent)
                return notCurrent;
            var options = this.options;
            trace.traceHookInvocation(this, this.transition, options);
            var invokeCallback = function () { return hook.callback.call(options.bind, _this.transition, _this.stateContext); };
            var normalizeErr = function (err) { return Rejection.normalize(err).toPromise(); };
            var handleError = function (err) { return hook.eventType.getErrorHandler(_this)(err); };
            var handleResult = function (result) { return hook.eventType.getResultHandler(_this)(result); };
            try {
                var result = invokeCallback();
                if (!this.type.synchronous && isPromise(result)) {
                    return result.catch(normalizeErr).then(handleResult, handleError);
                }
                else {
                    return handleResult(result);
                }
            }
            catch (err) {
                // If callback throws (synchronously)
                return handleError(Rejection.normalize(err));
            }
            finally {
                if (hook.invokeLimit && ++hook.invokeCount >= hook.invokeLimit) {
                    hook.deregister();
                }
            }
        };
        /**
         * This method handles the return value of a Transition Hook.
         *
         * A hook can return false (cancel), a TargetState (redirect),
         * or a promise (which may later resolve to false or a redirect)
         *
         * This also handles "transition superseded" -- when a new transition
         * was started while the hook was still running
         */
        TransitionHook.prototype.handleHookResult = function (result) {
            var _this = this;
            var notCurrent = this.getNotCurrentRejection();
            if (notCurrent)
                return notCurrent;
            // Hook returned a promise
            if (isPromise(result)) {
                // Wait for the promise, then reprocess with the resulting value
                return result.then(function (val$$1) { return _this.handleHookResult(val$$1); });
            }
            trace.traceHookResult(result, this.transition, this.options);
            // Hook returned false
            if (result === false) {
                // Abort this Transition
                return Rejection.aborted('Hook aborted transition').toPromise();
            }
            var isTargetState = is(TargetState);
            // hook returned a TargetState
            if (isTargetState(result)) {
                // Halt the current Transition and redirect (a new Transition) to the TargetState.
                return Rejection.redirected(result).toPromise();
            }
        };
        /**
         * Return a Rejection promise if the transition is no longer current due
         * to a stopped router (disposed), or a new transition has started and superseded this one.
         */
        TransitionHook.prototype.getNotCurrentRejection = function () {
            var router = this.transition.router;
            // The router is stopped
            if (router._disposed) {
                return Rejection.aborted("UIRouter instance #" + router.$id + " has been stopped (disposed)").toPromise();
            }
            if (this.transition._aborted) {
                return Rejection.aborted().toPromise();
            }
            // This transition is no longer current.
            // Another transition started while this hook was still running.
            if (this.isSuperseded()) {
                // Abort this transition
                return Rejection.superseded(this.options.current()).toPromise();
            }
        };
        TransitionHook.prototype.toString = function () {
            var _a = this, options = _a.options, registeredHook = _a.registeredHook;
            var event = parse('traceData.hookType')(options) || 'internal', context = parse('traceData.context.state.name')(options) || parse('traceData.context')(options) || 'unknown', name = fnToString(registeredHook.callback);
            return event + " context: " + context + ", " + maxLength(200, name);
        };
        /**
         * These GetResultHandler(s) are used by [[invokeHook]] below
         * Each HookType chooses a GetResultHandler (See: [[TransitionService._defineCoreEvents]])
         */
        TransitionHook.HANDLE_RESULT = function (hook) { return function (result) {
            return hook.handleHookResult(result);
        }; };
        /**
         * If the result is a promise rejection, log it.
         * Otherwise, ignore the result.
         */
        TransitionHook.LOG_REJECTED_RESULT = function (hook) { return function (result) {
            isPromise(result) && result.catch(function (err) { return hook.logError(Rejection.normalize(err)); });
            return undefined;
        }; };
        /**
         * These GetErrorHandler(s) are used by [[invokeHook]] below
         * Each HookType chooses a GetErrorHandler (See: [[TransitionService._defineCoreEvents]])
         */
        TransitionHook.LOG_ERROR = function (hook) { return function (error) { return hook.logError(error); }; };
        TransitionHook.REJECT_ERROR = function (hook) { return function (error) { return silentRejection(error); }; };
        TransitionHook.THROW_ERROR = function (hook) { return function (error) {
            throw error;
        }; };
        return TransitionHook;
    }());

    /**
     * @coreapi
     * @module transition
     */ /** for typedoc */
    /**
     * Determines if the given state matches the matchCriteria
     *
     * @hidden
     *
     * @param state a State Object to test against
     * @param criterion
     * - If a string, matchState uses the string as a glob-matcher against the state name
     * - If an array (of strings), matchState uses each string in the array as a glob-matchers against the state name
     *   and returns a positive match if any of the globs match.
     * - If a function, matchState calls the function with the state and returns true if the function's result is truthy.
     * @returns {boolean}
     */
    function matchState(state, criterion) {
        var toMatch = isString(criterion) ? [criterion] : criterion;
        function matchGlobs(_state) {
            var globStrings = toMatch;
            for (var i = 0; i < globStrings.length; i++) {
                var glob = new Glob(globStrings[i]);
                if ((glob && glob.matches(_state.name)) || (!glob && globStrings[i] === _state.name)) {
                    return true;
                }
            }
            return false;
        }
        var matchFn = (isFunction(toMatch) ? toMatch : matchGlobs);
        return !!matchFn(state);
    }
    /**
     * @internalapi
     * The registration data for a registered transition hook
     */
    var RegisteredHook = /** @class */ (function () {
        function RegisteredHook(tranSvc, eventType, callback, matchCriteria, removeHookFromRegistry, options) {
            if (options === void 0) { options = {}; }
            this.tranSvc = tranSvc;
            this.eventType = eventType;
            this.callback = callback;
            this.matchCriteria = matchCriteria;
            this.removeHookFromRegistry = removeHookFromRegistry;
            this.invokeCount = 0;
            this._deregistered = false;
            this.priority = options.priority || 0;
            this.bind = options.bind || null;
            this.invokeLimit = options.invokeLimit;
        }
        /**
         * Gets the matching [[PathNode]]s
         *
         * Given an array of [[PathNode]]s, and a [[HookMatchCriterion]], returns an array containing
         * the [[PathNode]]s that the criteria matches, or `null` if there were no matching nodes.
         *
         * Returning `null` is significant to distinguish between the default
         * "match-all criterion value" of `true` compared to a `() => true` function,
         * when the nodes is an empty array.
         *
         * This is useful to allow a transition match criteria of `entering: true`
         * to still match a transition, even when `entering === []`.  Contrast that
         * with `entering: (state) => true` which only matches when a state is actually
         * being entered.
         */
        RegisteredHook.prototype._matchingNodes = function (nodes, criterion) {
            if (criterion === true)
                return nodes;
            var matching = nodes.filter(function (node) { return matchState(node.state, criterion); });
            return matching.length ? matching : null;
        };
        /**
         * Gets the default match criteria (all `true`)
         *
         * Returns an object which has all the criteria match paths as keys and `true` as values, i.e.:
         *
         * ```js
         * {
         *   to: true,
         *   from: true,
         *   entering: true,
         *   exiting: true,
         *   retained: true,
         * }
         */
        RegisteredHook.prototype._getDefaultMatchCriteria = function () {
            return mapObj(this.tranSvc._pluginapi._getPathTypes(), function () { return true; });
        };
        /**
         * Gets matching nodes as [[IMatchingNodes]]
         *
         * Create a IMatchingNodes object from the TransitionHookTypes that is roughly equivalent to:
         *
         * ```js
         * let matches: IMatchingNodes = {
         *   to:       _matchingNodes([tail(treeChanges.to)],   mc.to),
         *   from:     _matchingNodes([tail(treeChanges.from)], mc.from),
         *   exiting:  _matchingNodes(treeChanges.exiting,      mc.exiting),
         *   retained: _matchingNodes(treeChanges.retained,     mc.retained),
         *   entering: _matchingNodes(treeChanges.entering,     mc.entering),
         * };
         * ```
         */
        RegisteredHook.prototype._getMatchingNodes = function (treeChanges) {
            var _this = this;
            var criteria = extend(this._getDefaultMatchCriteria(), this.matchCriteria);
            var paths = values(this.tranSvc._pluginapi._getPathTypes());
            return paths.reduce(function (mn, pathtype) {
                // STATE scope criteria matches against every node in the path.
                // TRANSITION scope criteria matches against only the last node in the path
                var isStateHook = pathtype.scope === exports.TransitionHookScope.STATE;
                var path = treeChanges[pathtype.name] || [];
                var nodes = isStateHook ? path : [tail(path)];
                mn[pathtype.name] = _this._matchingNodes(nodes, criteria[pathtype.name]);
                return mn;
            }, {});
        };
        /**
         * Determines if this hook's [[matchCriteria]] match the given [[TreeChanges]]
         *
         * @returns an IMatchingNodes object, or null. If an IMatchingNodes object is returned, its values
         * are the matching [[PathNode]]s for each [[HookMatchCriterion]] (to, from, exiting, retained, entering)
         */
        RegisteredHook.prototype.matches = function (treeChanges) {
            var matches = this._getMatchingNodes(treeChanges);
            // Check if all the criteria matched the TreeChanges object
            var allMatched = values(matches).every(identity);
            return allMatched ? matches : null;
        };
        RegisteredHook.prototype.deregister = function () {
            this.removeHookFromRegistry(this);
            this._deregistered = true;
        };
        return RegisteredHook;
    }());
    /** @hidden Return a registration function of the requested type. */
    function makeEvent(registry, transitionService, eventType) {
        // Create the object which holds the registered transition hooks.
        var _registeredHooks = (registry._registeredHooks = registry._registeredHooks || {});
        var hooks = (_registeredHooks[eventType.name] = []);
        var removeHookFn = removeFrom(hooks);
        // Create hook registration function on the IHookRegistry for the event
        registry[eventType.name] = hookRegistrationFn;
        function hookRegistrationFn(matchObject, callback, options) {
            if (options === void 0) { options = {}; }
            var registeredHook = new RegisteredHook(transitionService, eventType, callback, matchObject, removeHookFn, options);
            hooks.push(registeredHook);
            return registeredHook.deregister.bind(registeredHook);
        }
        return hookRegistrationFn;
    }

    /**
     * @coreapi
     * @module transition
     */ /** for typedoc */
    /**
     * This class returns applicable TransitionHooks for a specific Transition instance.
     *
     * Hooks ([[RegisteredHook]]) may be registered globally, e.g., $transitions.onEnter(...), or locally, e.g.
     * myTransition.onEnter(...).  The HookBuilder finds matching RegisteredHooks (where the match criteria is
     * determined by the type of hook)
     *
     * The HookBuilder also converts RegisteredHooks objects to TransitionHook objects, which are used to run a Transition.
     *
     * The HookBuilder constructor is given the $transitions service and a Transition instance.  Thus, a HookBuilder
     * instance may only be used for one specific Transition object. (side note: the _treeChanges accessor is private
     * in the Transition class, so we must also provide the Transition's _treeChanges)
     *
     */
    var HookBuilder = /** @class */ (function () {
        function HookBuilder(transition) {
            this.transition = transition;
        }
        HookBuilder.prototype.buildHooksForPhase = function (phase) {
            var _this = this;
            var $transitions = this.transition.router.transitionService;
            return $transitions._pluginapi
                ._getEvents(phase)
                .map(function (type) { return _this.buildHooks(type); })
                .reduce(unnestR, [])
                .filter(identity);
        };
        /**
         * Returns an array of newly built TransitionHook objects.
         *
         * - Finds all RegisteredHooks registered for the given `hookType` which matched the transition's [[TreeChanges]].
         * - Finds [[PathNode]] (or `PathNode[]`) to use as the TransitionHook context(s)
         * - For each of the [[PathNode]]s, creates a TransitionHook
         *
         * @param hookType the type of the hook registration function, e.g., 'onEnter', 'onFinish'.
         */
        HookBuilder.prototype.buildHooks = function (hookType) {
            var transition = this.transition;
            var treeChanges = transition.treeChanges();
            // Find all the matching registered hooks for a given hook type
            var matchingHooks = this.getMatchingHooks(hookType, treeChanges);
            if (!matchingHooks)
                return [];
            var baseHookOptions = {
                transition: transition,
                current: transition.options().current,
            };
            var makeTransitionHooks = function (hook) {
                // Fetch the Nodes that caused this hook to match.
                var matches = hook.matches(treeChanges);
                // Select the PathNode[] that will be used as TransitionHook context objects
                var matchingNodes = matches[hookType.criteriaMatchPath.name];
                // Return an array of HookTuples
                return matchingNodes.map(function (node) {
                    var _options = extend({
                        bind: hook.bind,
                        traceData: { hookType: hookType.name, context: node },
                    }, baseHookOptions);
                    var state = hookType.criteriaMatchPath.scope === exports.TransitionHookScope.STATE ? node.state.self : null;
                    var transitionHook = new TransitionHook(transition, state, hook, _options);
                    return { hook: hook, node: node, transitionHook: transitionHook };
                });
            };
            return matchingHooks
                .map(makeTransitionHooks)
                .reduce(unnestR, [])
                .sort(tupleSort(hookType.reverseSort))
                .map(function (tuple) { return tuple.transitionHook; });
        };
        /**
         * Finds all RegisteredHooks from:
         * - The Transition object instance hook registry
         * - The TransitionService ($transitions) global hook registry
         *
         * which matched:
         * - the eventType
         * - the matchCriteria (to, from, exiting, retained, entering)
         *
         * @returns an array of matched [[RegisteredHook]]s
         */
        HookBuilder.prototype.getMatchingHooks = function (hookType, treeChanges) {
            var isCreate = hookType.hookPhase === exports.TransitionHookPhase.CREATE;
            // Instance and Global hook registries
            var $transitions = this.transition.router.transitionService;
            var registries = isCreate ? [$transitions] : [this.transition, $transitions];
            return registries
                .map(function (reg) { return reg.getHooks(hookType.name); }) // Get named hooks from registries
                .filter(assertPredicate(isArray, "broken event named: " + hookType.name)) // Sanity check
                .reduce(unnestR, []) // Un-nest RegisteredHook[][] to RegisteredHook[] array
                .filter(function (hook) { return hook.matches(treeChanges); }); // Only those satisfying matchCriteria
        };
        return HookBuilder;
    }());
    /**
     * A factory for a sort function for HookTuples.
     *
     * The sort function first compares the PathNode depth (how deep in the state tree a node is), then compares
     * the EventHook priority.
     *
     * @param reverseDepthSort a boolean, when true, reverses the sort order for the node depth
     * @returns a tuple sort function
     */
    function tupleSort(reverseDepthSort) {
        if (reverseDepthSort === void 0) { reverseDepthSort = false; }
        return function nodeDepthThenPriority(l, r) {
            var factor = reverseDepthSort ? -1 : 1;
            var depthDelta = (l.node.state.path.length - r.node.state.path.length) * factor;
            return depthDelta !== 0 ? depthDelta : r.hook.priority - l.hook.priority;
        };
    }

    /**
     * @coreapi
     * @module params
     */
    /**
     * An internal class which implements [[ParamTypeDefinition]].
     *
     * A [[ParamTypeDefinition]] is a plain javascript object used to register custom parameter types.
     * When a param type definition is registered, an instance of this class is created internally.
     *
     * This class has naive implementations for all the [[ParamTypeDefinition]] methods.
     *
     * Used by [[UrlMatcher]] when matching or formatting URLs, or comparing and validating parameter values.
     *
     * #### Example:
     * ```js
     * var paramTypeDef = {
     *   decode: function(val) { return parseInt(val, 10); },
     *   encode: function(val) { return val && val.toString(); },
     *   equals: function(a, b) { return this.is(a) && a === b; },
     *   is: function(val) { return angular.isNumber(val) && isFinite(val) && val % 1 === 0; },
     *   pattern: /\d+/
     * }
     *
     * var paramType = new ParamType(paramTypeDef);
     * ```
     * @internalapi
     */
    var ParamType = /** @class */ (function () {
        /**
         * @param def  A configuration object which contains the custom type definition.  The object's
         *        properties will override the default methods and/or pattern in `ParamType`'s public interface.
         * @returns a new ParamType object
         */
        function ParamType(def) {
            /** @inheritdoc */
            this.pattern = /.*/;
            /** @inheritdoc */
            this.inherit = true;
            extend(this, def);
        }
        // consider these four methods to be "abstract methods" that should be overridden
        /** @inheritdoc */
        ParamType.prototype.is = function (val, key) {
            return true;
        };
        /** @inheritdoc */
        ParamType.prototype.encode = function (val, key) {
            return val;
        };
        /** @inheritdoc */
        ParamType.prototype.decode = function (val, key) {
            return val;
        };
        /** @inheritdoc */
        ParamType.prototype.equals = function (a, b) {
            // tslint:disable-next-line:triple-equals
            return a == b;
        };
        ParamType.prototype.$subPattern = function () {
            var sub = this.pattern.toString();
            return sub.substr(1, sub.length - 2);
        };
        ParamType.prototype.toString = function () {
            return "{ParamType:" + this.name + "}";
        };
        /** Given an encoded string, or a decoded object, returns a decoded object */
        ParamType.prototype.$normalize = function (val) {
            return this.is(val) ? val : this.decode(val);
        };
        /**
         * Wraps an existing custom ParamType as an array of ParamType, depending on 'mode'.
         * e.g.:
         * - urlmatcher pattern "/path?{queryParam[]:int}"
         * - url: "/path?queryParam=1&queryParam=2
         * - $stateParams.queryParam will be [1, 2]
         * if `mode` is "auto", then
         * - url: "/path?queryParam=1 will create $stateParams.queryParam: 1
         * - url: "/path?queryParam=1&queryParam=2 will create $stateParams.queryParam: [1, 2]
         */
        ParamType.prototype.$asArray = function (mode, isSearch) {
            if (!mode)
                return this;
            if (mode === 'auto' && !isSearch)
                throw new Error("'auto' array mode is for query parameters only");
            return new ArrayType(this, mode);
        };
        return ParamType;
    }());
    /**
     * Wraps up a `ParamType` object to handle array values.
     * @internalapi
     */
    function ArrayType(type, mode) {
        var _this = this;
        // Wrap non-array value as array
        function arrayWrap(val) {
            return isArray(val) ? val : isDefined(val) ? [val] : [];
        }
        // Unwrap array value for "auto" mode. Return undefined for empty array.
        function arrayUnwrap(val) {
            switch (val.length) {
                case 0:
                    return undefined;
                case 1:
                    return mode === 'auto' ? val[0] : val;
                default:
                    return val;
            }
        }
        // Wraps type (.is/.encode/.decode) functions to operate on each value of an array
        function arrayHandler(callback, allTruthyMode) {
            return function handleArray(val) {
                if (isArray(val) && val.length === 0)
                    return val;
                var arr = arrayWrap(val);
                var result = map(arr, callback);
                return allTruthyMode === true ? filter(result, function (x) { return !x; }).length === 0 : arrayUnwrap(result);
            };
        }
        // Wraps type (.equals) functions to operate on each value of an array
        function arrayEqualsHandler(callback) {
            return function handleArray(val1, val2) {
                var left = arrayWrap(val1), right = arrayWrap(val2);
                if (left.length !== right.length)
                    return false;
                for (var i = 0; i < left.length; i++) {
                    if (!callback(left[i], right[i]))
                        return false;
                }
                return true;
            };
        }
        ['encode', 'decode', 'equals', '$normalize'].forEach(function (name) {
            var paramTypeFn = type[name].bind(type);
            var wrapperFn = name === 'equals' ? arrayEqualsHandler : arrayHandler;
            _this[name] = wrapperFn(paramTypeFn);
        });
        extend(this, {
            dynamic: type.dynamic,
            name: type.name,
            pattern: type.pattern,
            inherit: type.inherit,
            is: arrayHandler(type.is.bind(type), true),
            $arrayMode: mode,
        });
    }

    /**
     * @coreapi
     * @module params
     */ /** for typedoc */
    /** @hidden */
    var hasOwn = Object.prototype.hasOwnProperty;
    /** @hidden */
    var isShorthand = function (cfg) {
        return ['value', 'type', 'squash', 'array', 'dynamic'].filter(hasOwn.bind(cfg || {})).length === 0;
    };
    /** @internalapi */

    (function (DefType) {
        DefType[DefType["PATH"] = 0] = "PATH";
        DefType[DefType["SEARCH"] = 1] = "SEARCH";
        DefType[DefType["CONFIG"] = 2] = "CONFIG";
    })(exports.DefType || (exports.DefType = {}));
    /** @hidden */
    function unwrapShorthand(cfg) {
        cfg = (isShorthand(cfg) && { value: cfg }) || cfg;
        getStaticDefaultValue['__cacheable'] = true;
        function getStaticDefaultValue() {
            return cfg.value;
        }
        return extend(cfg, {
            $$fn: isInjectable(cfg.value) ? cfg.value : getStaticDefaultValue,
        });
    }
    /** @hidden */
    function getType(cfg, urlType, location, id, paramTypes) {
        if (cfg.type && urlType && urlType.name !== 'string')
            throw new Error("Param '" + id + "' has two type configurations.");
        if (cfg.type && urlType && urlType.name === 'string' && paramTypes.type(cfg.type))
            return paramTypes.type(cfg.type);
        if (urlType)
            return urlType;
        if (!cfg.type) {
            var type = location === exports.DefType.CONFIG
                ? 'any'
                : location === exports.DefType.PATH
                    ? 'path'
                    : location === exports.DefType.SEARCH
                        ? 'query'
                        : 'string';
            return paramTypes.type(type);
        }
        return cfg.type instanceof ParamType ? cfg.type : paramTypes.type(cfg.type);
    }
    /**
     * @internalapi
     * returns false, true, or the squash value to indicate the "default parameter url squash policy".
     */
    function getSquashPolicy(config, isOptional, defaultPolicy) {
        var squash = config.squash;
        if (!isOptional || squash === false)
            return false;
        if (!isDefined(squash) || squash == null)
            return defaultPolicy;
        if (squash === true || isString(squash))
            return squash;
        throw new Error("Invalid squash policy: '" + squash + "'. Valid policies: false, true, or arbitrary string");
    }
    /** @internalapi */
    function getReplace(config, arrayMode, isOptional, squash) {
        var defaultPolicy = [
            { from: '', to: isOptional || arrayMode ? undefined : '' },
            { from: null, to: isOptional || arrayMode ? undefined : '' },
        ];
        var replace = isArray(config.replace) ? config.replace : [];
        if (isString(squash))
            replace.push({ from: squash, to: undefined });
        var configuredKeys = map(replace, prop('from'));
        return filter(defaultPolicy, function (item) { return configuredKeys.indexOf(item.from) === -1; }).concat(replace);
    }
    /** @internalapi */
    var Param = /** @class */ (function () {
        function Param(id, type, config, location, urlMatcherFactory) {
            config = unwrapShorthand(config);
            type = getType(config, type, location, id, urlMatcherFactory.paramTypes);
            var arrayMode = getArrayMode();
            type = arrayMode ? type.$asArray(arrayMode, location === exports.DefType.SEARCH) : type;
            var isOptional = config.value !== undefined || location === exports.DefType.SEARCH;
            var dynamic = isDefined(config.dynamic) ? !!config.dynamic : !!type.dynamic;
            var raw = isDefined(config.raw) ? !!config.raw : !!type.raw;
            var squash = getSquashPolicy(config, isOptional, urlMatcherFactory.defaultSquashPolicy());
            var replace = getReplace(config, arrayMode, isOptional, squash);
            var inherit$$1 = isDefined(config.inherit) ? !!config.inherit : !!type.inherit;
            // array config: param name (param[]) overrides default settings.  explicit config overrides param name.
            function getArrayMode() {
                var arrayDefaults = { array: location === exports.DefType.SEARCH ? 'auto' : false };
                var arrayParamNomenclature = id.match(/\[\]$/) ? { array: true } : {};
                return extend(arrayDefaults, arrayParamNomenclature, config).array;
            }
            extend(this, { id: id, type: type, location: location, isOptional: isOptional, dynamic: dynamic, raw: raw, squash: squash, replace: replace, inherit: inherit$$1, array: arrayMode, config: config });
        }
        Param.values = function (params, values$$1) {
            if (values$$1 === void 0) { values$$1 = {}; }
            var paramValues = {};
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var param = params_1[_i];
                paramValues[param.id] = param.value(values$$1[param.id]);
            }
            return paramValues;
        };
        /**
         * Finds [[Param]] objects which have different param values
         *
         * Filters a list of [[Param]] objects to only those whose parameter values differ in two param value objects
         *
         * @param params: The list of Param objects to filter
         * @param values1: The first set of parameter values
         * @param values2: the second set of parameter values
         *
         * @returns any Param objects whose values were different between values1 and values2
         */
        Param.changed = function (params, values1, values2) {
            if (values1 === void 0) { values1 = {}; }
            if (values2 === void 0) { values2 = {}; }
            return params.filter(function (param) { return !param.type.equals(values1[param.id], values2[param.id]); });
        };
        /**
         * Checks if two param value objects are equal (for a set of [[Param]] objects)
         *
         * @param params The list of [[Param]] objects to check
         * @param values1 The first set of param values
         * @param values2 The second set of param values
         *
         * @returns true if the param values in values1 and values2 are equal
         */
        Param.equals = function (params, values1, values2) {
            if (values1 === void 0) { values1 = {}; }
            if (values2 === void 0) { values2 = {}; }
            return Param.changed(params, values1, values2).length === 0;
        };
        /** Returns true if a the parameter values are valid, according to the Param definitions */
        Param.validates = function (params, values$$1) {
            if (values$$1 === void 0) { values$$1 = {}; }
            return params.map(function (param) { return param.validates(values$$1[param.id]); }).reduce(allTrueR, true);
        };
        Param.prototype.isDefaultValue = function (value) {
            return this.isOptional && this.type.equals(this.value(), value);
        };
        /**
         * [Internal] Gets the decoded representation of a value if the value is defined, otherwise, returns the
         * default value, which may be the result of an injectable function.
         */
        Param.prototype.value = function (value) {
            var _this = this;
            /**
             * [Internal] Get the default value of a parameter, which may be an injectable function.
             */
            var getDefaultValue = function () {
                if (_this._defaultValueCache)
                    return _this._defaultValueCache.defaultValue;
                if (!services.$injector)
                    throw new Error('Injectable functions cannot be called at configuration time');
                var defaultValue = services.$injector.invoke(_this.config.$$fn);
                if (defaultValue !== null && defaultValue !== undefined && !_this.type.is(defaultValue))
                    throw new Error("Default value (" + defaultValue + ") for parameter '" + _this.id + "' is not an instance of ParamType (" + _this.type.name + ")");
                if (_this.config.$$fn['__cacheable']) {
                    _this._defaultValueCache = { defaultValue: defaultValue };
                }
                return defaultValue;
            };
            var replaceSpecialValues = function (val$$1) {
                for (var _i = 0, _a = _this.replace; _i < _a.length; _i++) {
                    var tuple = _a[_i];
                    if (tuple.from === val$$1)
                        return tuple.to;
                }
                return val$$1;
            };
            value = replaceSpecialValues(value);
            return isUndefined(value) ? getDefaultValue() : this.type.$normalize(value);
        };
        Param.prototype.isSearch = function () {
            return this.location === exports.DefType.SEARCH;
        };
        Param.prototype.validates = function (value) {
            // There was no parameter value, but the param is optional
            if ((isUndefined(value) || value === null) && this.isOptional)
                return true;
            // The value was not of the correct ParamType, and could not be decoded to the correct ParamType
            var normalized = this.type.$normalize(value);
            if (!this.type.is(normalized))
                return false;
            // The value was of the correct type, but when encoded, did not match the ParamType's regexp
            var encoded = this.type.encode(normalized);
            return !(isString(encoded) && !this.type.pattern.exec(encoded));
        };
        Param.prototype.toString = function () {
            return "{Param:" + this.id + " " + this.type + " squash: '" + this.squash + "' optional: " + this.isOptional + "}";
        };
        return Param;
    }());

    /** @module path */ /** for typedoc */
    /**
     * @internalapi
     *
     * A node in a [[TreeChanges]] path
     *
     * For a [[TreeChanges]] path, this class holds the stateful information for a single node in the path.
     * Each PathNode corresponds to a state being entered, exited, or retained.
     * The stateful information includes parameter values and resolve data.
     */
    var PathNode = /** @class */ (function () {
        function PathNode(stateOrNode) {
            if (stateOrNode instanceof PathNode) {
                var node = stateOrNode;
                this.state = node.state;
                this.paramSchema = node.paramSchema.slice();
                this.paramValues = extend({}, node.paramValues);
                this.resolvables = node.resolvables.slice();
                this.views = node.views && node.views.slice();
            }
            else {
                var state = stateOrNode;
                this.state = state;
                this.paramSchema = state.parameters({ inherit: false });
                this.paramValues = {};
                this.resolvables = state.resolvables.map(function (res) { return res.clone(); });
            }
        }
        PathNode.prototype.clone = function () {
            return new PathNode(this);
        };
        /** Sets [[paramValues]] for the node, from the values of an object hash */
        PathNode.prototype.applyRawParams = function (params) {
            var getParamVal = function (paramDef) { return [paramDef.id, paramDef.value(params[paramDef.id])]; };
            this.paramValues = this.paramSchema.reduce(function (memo, pDef) { return applyPairs(memo, getParamVal(pDef)); }, {});
            return this;
        };
        /** Gets a specific [[Param]] metadata that belongs to the node */
        PathNode.prototype.parameter = function (name) {
            return find(this.paramSchema, propEq('id', name));
        };
        /**
         * @returns true if the state and parameter values for another PathNode are
         * equal to the state and param values for this PathNode
         */
        PathNode.prototype.equals = function (node, paramsFn) {
            var diff = this.diff(node, paramsFn);
            return diff && diff.length === 0;
        };
        /**
         * Finds Params with different parameter values on another PathNode.
         *
         * Given another node (of the same state), finds the parameter values which differ.
         * Returns the [[Param]] (schema objects) whose parameter values differ.
         *
         * Given another node for a different state, returns `false`
         *
         * @param node The node to compare to
         * @param paramsFn A function that returns which parameters should be compared.
         * @returns The [[Param]]s which differ, or null if the two nodes are for different states
         */
        PathNode.prototype.diff = function (node, paramsFn) {
            if (this.state !== node.state)
                return false;
            var params = paramsFn ? paramsFn(this) : this.paramSchema;
            return Param.changed(params, this.paramValues, node.paramValues);
        };
        /**
         * Returns a clone of the PathNode
         * @deprecated use instance method `node.clone()`
         */
        PathNode.clone = function (node) { return node.clone(); };
        return PathNode;
    }());

    /** @module path */ /** for typedoc */
    /**
     * This class contains functions which convert TargetStates, Nodes and paths from one type to another.
     */
    var PathUtils = /** @class */ (function () {
        function PathUtils() {
        }
        /** Given a PathNode[], create an TargetState */
        PathUtils.makeTargetState = function (registry, path) {
            var state = tail(path).state;
            return new TargetState(registry, state, path.map(prop('paramValues')).reduce(mergeR, {}), {});
        };
        PathUtils.buildPath = function (targetState) {
            var toParams = targetState.params();
            return targetState.$state().path.map(function (state) { return new PathNode(state).applyRawParams(toParams); });
        };
        /** Given a fromPath: PathNode[] and a TargetState, builds a toPath: PathNode[] */
        PathUtils.buildToPath = function (fromPath, targetState) {
            var toPath = PathUtils.buildPath(targetState);
            if (targetState.options().inherit) {
                return PathUtils.inheritParams(fromPath, toPath, Object.keys(targetState.params()));
            }
            return toPath;
        };
        /**
         * Creates ViewConfig objects and adds to nodes.
         *
         * On each [[PathNode]], creates ViewConfig objects from the views: property of the node's state
         */
        PathUtils.applyViewConfigs = function ($view, path, states) {
            // Only apply the viewConfigs to the nodes for the given states
            path.filter(function (node) { return inArray(states, node.state); }).forEach(function (node) {
                var viewDecls = values(node.state.views || {});
                var subPath = PathUtils.subPath(path, function (n) { return n === node; });
                var viewConfigs = viewDecls.map(function (view) { return $view.createViewConfig(subPath, view); });
                node.views = viewConfigs.reduce(unnestR, []);
            });
        };
        /**
         * Given a fromPath and a toPath, returns a new to path which inherits parameters from the fromPath
         *
         * For a parameter in a node to be inherited from the from path:
         * - The toPath's node must have a matching node in the fromPath (by state).
         * - The parameter name must not be found in the toKeys parameter array.
         *
         * Note: the keys provided in toKeys are intended to be those param keys explicitly specified by some
         * caller, for instance, $state.transitionTo(..., toParams).  If a key was found in toParams,
         * it is not inherited from the fromPath.
         */
        PathUtils.inheritParams = function (fromPath, toPath, toKeys) {
            if (toKeys === void 0) { toKeys = []; }
            function nodeParamVals(path, state) {
                var node = find(path, propEq('state', state));
                return extend({}, node && node.paramValues);
            }
            var noInherit = fromPath
                .map(function (node) { return node.paramSchema; })
                .reduce(unnestR, [])
                .filter(function (param) { return !param.inherit; })
                .map(prop('id'));
            /**
             * Given an [[PathNode]] "toNode", return a new [[PathNode]] with param values inherited from the
             * matching node in fromPath.  Only inherit keys that aren't found in "toKeys" from the node in "fromPath""
             */
            function makeInheritedParamsNode(toNode) {
                // All param values for the node (may include default key/vals, when key was not found in toParams)
                var toParamVals = extend({}, toNode && toNode.paramValues);
                // limited to only those keys found in toParams
                var incomingParamVals = pick(toParamVals, toKeys);
                toParamVals = omit(toParamVals, toKeys);
                var fromParamVals = omit(nodeParamVals(fromPath, toNode.state) || {}, noInherit);
                // extend toParamVals with any fromParamVals, then override any of those those with incomingParamVals
                var ownParamVals = extend(toParamVals, fromParamVals, incomingParamVals);
                return new PathNode(toNode.state).applyRawParams(ownParamVals);
            }
            // The param keys specified by the incoming toParams
            return toPath.map(makeInheritedParamsNode);
        };
        /**
         * Computes the tree changes (entering, exiting) between a fromPath and toPath.
         */
        PathUtils.treeChanges = function (fromPath, toPath, reloadState) {
            var max = Math.min(fromPath.length, toPath.length);
            var keep = 0;
            var nodesMatch = function (node1, node2) { return node1.equals(node2, PathUtils.nonDynamicParams); };
            while (keep < max && fromPath[keep].state !== reloadState && nodesMatch(fromPath[keep], toPath[keep])) {
                keep++;
            }
            /** Given a retained node, return a new node which uses the to node's param values */
            function applyToParams(retainedNode, idx) {
                var cloned = retainedNode.clone();
                cloned.paramValues = toPath[idx].paramValues;
                return cloned;
            }
            var from, retained, exiting, entering, to;
            from = fromPath;
            retained = from.slice(0, keep);
            exiting = from.slice(keep);
            // Create a new retained path (with shallow copies of nodes) which have the params of the toPath mapped
            var retainedWithToParams = retained.map(applyToParams);
            entering = toPath.slice(keep);
            to = retainedWithToParams.concat(entering);
            return { from: from, to: to, retained: retained, retainedWithToParams: retainedWithToParams, exiting: exiting, entering: entering };
        };
        /**
         * Returns a new path which is: the subpath of the first path which matches the second path.
         *
         * The new path starts from root and contains any nodes that match the nodes in the second path.
         * It stops before the first non-matching node.
         *
         * Nodes are compared using their state property and their parameter values.
         * If a `paramsFn` is provided, only the [[Param]] returned by the function will be considered when comparing nodes.
         *
         * @param pathA the first path
         * @param pathB the second path
         * @param paramsFn a function which returns the parameters to consider when comparing
         *
         * @returns an array of PathNodes from the first path which match the nodes in the second path
         */
        PathUtils.matching = function (pathA, pathB, paramsFn) {
            var done = false;
            var tuples = arrayTuples(pathA, pathB);
            return tuples.reduce(function (matching, _a) {
                var nodeA = _a[0], nodeB = _a[1];
                done = done || !nodeA.equals(nodeB, paramsFn);
                return done ? matching : matching.concat(nodeA);
            }, []);
        };
        /**
         * Returns true if two paths are identical.
         *
         * @param pathA
         * @param pathB
         * @param paramsFn a function which returns the parameters to consider when comparing
         * @returns true if the the states and parameter values for both paths are identical
         */
        PathUtils.equals = function (pathA, pathB, paramsFn) {
            return pathA.length === pathB.length && PathUtils.matching(pathA, pathB, paramsFn).length === pathA.length;
        };
        /**
         * Return a subpath of a path, which stops at the first matching node
         *
         * Given an array of nodes, returns a subset of the array starting from the first node,
         * stopping when the first node matches the predicate.
         *
         * @param path a path of [[PathNode]]s
         * @param predicate a [[Predicate]] fn that matches [[PathNode]]s
         * @returns a subpath up to the matching node, or undefined if no match is found
         */
        PathUtils.subPath = function (path, predicate) {
            var node = find(path, predicate);
            var elementIdx = path.indexOf(node);
            return elementIdx === -1 ? undefined : path.slice(0, elementIdx + 1);
        };
        PathUtils.nonDynamicParams = function (node) {
            return node.state.parameters({ inherit: false }).filter(function (param) { return !param.dynamic; });
        };
        /** Gets the raw parameter values from a path */
        PathUtils.paramValues = function (path) { return path.reduce(function (acc, node) { return extend(acc, node.paramValues); }, {}); };
        return PathUtils;
    }());

    /**
     * @coreapi
     * @module resolve
     */ /** for typedoc */
    // TODO: explicitly make this user configurable
    var defaultResolvePolicy = {
        when: 'LAZY',
        async: 'WAIT',
    };
    /**
     * The basic building block for the resolve system.
     *
     * Resolvables encapsulate a state's resolve's resolveFn, the resolveFn's declared dependencies, the wrapped (.promise),
     * and the unwrapped-when-complete (.data) result of the resolveFn.
     *
     * Resolvable.get() either retrieves the Resolvable's existing promise, or else invokes resolve() (which invokes the
     * resolveFn) and returns the resulting promise.
     *
     * Resolvable.get() and Resolvable.resolve() both execute within a context path, which is passed as the first
     * parameter to those fns.
     */
    var Resolvable = /** @class */ (function () {
        function Resolvable(arg1, resolveFn, deps, policy, data) {
            this.resolved = false;
            this.promise = undefined;
            if (arg1 instanceof Resolvable) {
                extend(this, arg1);
            }
            else if (isFunction(resolveFn)) {
                if (isNullOrUndefined(arg1))
                    throw new Error('new Resolvable(): token argument is required');
                if (!isFunction(resolveFn))
                    throw new Error('new Resolvable(): resolveFn argument must be a function');
                this.token = arg1;
                this.policy = policy;
                this.resolveFn = resolveFn;
                this.deps = deps || [];
                this.data = data;
                this.resolved = data !== undefined;
                this.promise = this.resolved ? services.$q.when(this.data) : undefined;
            }
            else if (isObject(arg1) && arg1.token && (arg1.hasOwnProperty('resolveFn') || arg1.hasOwnProperty('data'))) {
                var literal = arg1;
                return new Resolvable(literal.token, literal.resolveFn, literal.deps, literal.policy, literal.data);
            }
        }
        Resolvable.prototype.getPolicy = function (state) {
            var thisPolicy = this.policy || {};
            var statePolicy = (state && state.resolvePolicy) || {};
            return {
                when: thisPolicy.when || statePolicy.when || defaultResolvePolicy.when,
                async: thisPolicy.async || statePolicy.async || defaultResolvePolicy.async,
            };
        };
        /**
         * Asynchronously resolve this Resolvable's data
         *
         * Given a ResolveContext that this Resolvable is found in:
         * Wait for this Resolvable's dependencies, then invoke this Resolvable's function
         * and update the Resolvable's state
         */
        Resolvable.prototype.resolve = function (resolveContext, trans) {
            var _this = this;
            var $q = services.$q;
            // Gets all dependencies from ResolveContext and wait for them to be resolved
            var getResolvableDependencies = function () {
                return $q.all(resolveContext.getDependencies(_this).map(function (resolvable) { return resolvable.get(resolveContext, trans); }));
            };
            // Invokes the resolve function passing the resolved dependencies as arguments
            var invokeResolveFn = function (resolvedDeps) { return _this.resolveFn.apply(null, resolvedDeps); };
            /**
             * For RXWAIT policy:
             *
             * Given an observable returned from a resolve function:
             * - enables .cache() mode (this allows multicast subscribers)
             * - then calls toPromise() (this triggers subscribe() and thus fetches)
             * - Waits for the promise, then return the cached observable (not the first emitted value).
             */
            var waitForRx = function (observable$) {
                var cached = observable$.cache(1);
                return cached
                    .take(1)
                    .toPromise()
                    .then(function () { return cached; });
            };
            // If the resolve policy is RXWAIT, wait for the observable to emit something. otherwise pass through.
            var node = resolveContext.findNode(this);
            var state = node && node.state;
            var maybeWaitForRx = this.getPolicy(state).async === 'RXWAIT' ? waitForRx : identity;
            // After the final value has been resolved, update the state of the Resolvable
            var applyResolvedValue = function (resolvedValue) {
                _this.data = resolvedValue;
                _this.resolved = true;
                _this.resolveFn = null;
                trace.traceResolvableResolved(_this, trans);
                return _this.data;
            };
            // Sets the promise property first, then getsResolvableDependencies in the context of the promise chain. Always waits one tick.
            return (this.promise = $q
                .when()
                .then(getResolvableDependencies)
                .then(invokeResolveFn)
                .then(maybeWaitForRx)
                .then(applyResolvedValue));
        };
        /**
         * Gets a promise for this Resolvable's data.
         *
         * Fetches the data and returns a promise.
         * Returns the existing promise if it has already been fetched once.
         */
        Resolvable.prototype.get = function (resolveContext, trans) {
            return this.promise || this.resolve(resolveContext, trans);
        };
        Resolvable.prototype.toString = function () {
            return "Resolvable(token: " + stringify(this.token) + ", requires: [" + this.deps.map(stringify) + "])";
        };
        Resolvable.prototype.clone = function () {
            return new Resolvable(this);
        };
        Resolvable.fromData = function (token, data) { return new Resolvable(token, function () { return data; }, null, null, data); };
        return Resolvable;
    }());

    /** @internalapi */
    var resolvePolicies = {
        when: {
            LAZY: 'LAZY',
            EAGER: 'EAGER',
        },
        async: {
            WAIT: 'WAIT',
            NOWAIT: 'NOWAIT',
            RXWAIT: 'RXWAIT',
        },
    };

    /** @module resolve */
    var whens = resolvePolicies.when;
    var ALL_WHENS = [whens.EAGER, whens.LAZY];
    var EAGER_WHENS = [whens.EAGER];
    // tslint:disable-next-line:no-inferrable-types
    var NATIVE_INJECTOR_TOKEN = 'Native Injector';
    /**
     * Encapsulates Dependency Injection for a path of nodes
     *
     * UI-Router states are organized as a tree.
     * A nested state has a path of ancestors to the root of the tree.
     * When a state is being activated, each element in the path is wrapped as a [[PathNode]].
     * A `PathNode` is a stateful object that holds things like parameters and resolvables for the state being activated.
     *
     * The ResolveContext closes over the [[PathNode]]s, and provides DI for the last node in the path.
     */
    var ResolveContext = /** @class */ (function () {
        function ResolveContext(_path) {
            this._path = _path;
        }
        /** Gets all the tokens found in the resolve context, de-duplicated */
        ResolveContext.prototype.getTokens = function () {
            return this._path.reduce(function (acc, node) { return acc.concat(node.resolvables.map(function (r) { return r.token; })); }, []).reduce(uniqR, []);
        };
        /**
         * Gets the Resolvable that matches the token
         *
         * Gets the last Resolvable that matches the token in this context, or undefined.
         * Throws an error if it doesn't exist in the ResolveContext
         */
        ResolveContext.prototype.getResolvable = function (token) {
            var matching = this._path
                .map(function (node) { return node.resolvables; })
                .reduce(unnestR, [])
                .filter(function (r) { return r.token === token; });
            return tail(matching);
        };
        /** Returns the [[ResolvePolicy]] for the given [[Resolvable]] */
        ResolveContext.prototype.getPolicy = function (resolvable) {
            var node = this.findNode(resolvable);
            return resolvable.getPolicy(node.state);
        };
        /**
         * Returns a ResolveContext that includes a portion of this one
         *
         * Given a state, this method creates a new ResolveContext from this one.
         * The new context starts at the first node (root) and stops at the node for the `state` parameter.
         *
         * #### Why
         *
         * When a transition is created, the nodes in the "To Path" are injected from a ResolveContext.
         * A ResolveContext closes over a path of [[PathNode]]s and processes the resolvables.
         * The "To State" can inject values from its own resolvables, as well as those from all its ancestor state's (node's).
         * This method is used to create a narrower context when injecting ancestor nodes.
         *
         * @example
         * `let ABCD = new ResolveContext([A, B, C, D]);`
         *
         * Given a path `[A, B, C, D]`, where `A`, `B`, `C` and `D` are nodes for states `a`, `b`, `c`, `d`:
         * When injecting `D`, `D` should have access to all resolvables from `A`, `B`, `C`, `D`.
         * However, `B` should only be able to access resolvables from `A`, `B`.
         *
         * When resolving for the `B` node, first take the full "To Path" Context `[A,B,C,D]` and limit to the subpath `[A,B]`.
         * `let AB = ABCD.subcontext(a)`
         */
        ResolveContext.prototype.subContext = function (state) {
            return new ResolveContext(PathUtils.subPath(this._path, function (node) { return node.state === state; }));
        };
        /**
         * Adds Resolvables to the node that matches the state
         *
         * This adds a [[Resolvable]] (generally one created on the fly; not declared on a [[StateDeclaration.resolve]] block).
         * The resolvable is added to the node matching the `state` parameter.
         *
         * These new resolvables are not automatically fetched.
         * The calling code should either fetch them, fetch something that depends on them,
         * or rely on [[resolvePath]] being called when some state is being entered.
         *
         * Note: each resolvable's [[ResolvePolicy]] is merged with the state's policy, and the global default.
         *
         * @param newResolvables the new Resolvables
         * @param state Used to find the node to put the resolvable on
         */
        ResolveContext.prototype.addResolvables = function (newResolvables, state) {
            var node = find(this._path, propEq('state', state));
            var keys = newResolvables.map(function (r) { return r.token; });
            node.resolvables = node.resolvables.filter(function (r) { return keys.indexOf(r.token) === -1; }).concat(newResolvables);
        };
        /**
         * Returns a promise for an array of resolved path Element promises
         *
         * @param when
         * @param trans
         * @returns {Promise<any>|any}
         */
        ResolveContext.prototype.resolvePath = function (when, trans) {
            var _this = this;
            if (when === void 0) { when = 'LAZY'; }
            // This option determines which 'when' policy Resolvables we are about to fetch.
            var whenOption = inArray(ALL_WHENS, when) ? when : 'LAZY';
            // If the caller specified EAGER, only the EAGER Resolvables are fetched.
            // if the caller specified LAZY, both EAGER and LAZY Resolvables are fetched.`
            var matchedWhens = whenOption === resolvePolicies.when.EAGER ? EAGER_WHENS : ALL_WHENS;
            // get the subpath to the state argument, if provided
            trace.traceResolvePath(this._path, when, trans);
            var matchesPolicy = function (acceptedVals, whenOrAsync) { return function (resolvable) {
                return inArray(acceptedVals, _this.getPolicy(resolvable)[whenOrAsync]);
            }; };
            // Trigger all the (matching) Resolvables in the path
            // Reduce all the "WAIT" Resolvables into an array
            var promises = this._path.reduce(function (acc, node) {
                var nodeResolvables = node.resolvables.filter(matchesPolicy(matchedWhens, 'when'));
                var nowait = nodeResolvables.filter(matchesPolicy(['NOWAIT'], 'async'));
                var wait = nodeResolvables.filter(not(matchesPolicy(['NOWAIT'], 'async')));
                // For the matching Resolvables, start their async fetch process.
                var subContext = _this.subContext(node.state);
                var getResult = function (r) {
                    return r
                        .get(subContext, trans)
                        // Return a tuple that includes the Resolvable's token
                        .then(function (value) { return ({ token: r.token, value: value }); });
                };
                nowait.forEach(getResult);
                return acc.concat(wait.map(getResult));
            }, []);
            // Wait for all the "WAIT" resolvables
            return services.$q.all(promises);
        };
        ResolveContext.prototype.injector = function () {
            return this._injector || (this._injector = new UIInjectorImpl(this));
        };
        ResolveContext.prototype.findNode = function (resolvable) {
            return find(this._path, function (node) { return inArray(node.resolvables, resolvable); });
        };
        /**
         * Gets the async dependencies of a Resolvable
         *
         * Given a Resolvable, returns its dependencies as a Resolvable[]
         */
        ResolveContext.prototype.getDependencies = function (resolvable) {
            var _this = this;
            var node = this.findNode(resolvable);
            // Find which other resolvables are "visible" to the `resolvable` argument
            // subpath stopping at resolvable's node, or the whole path (if the resolvable isn't in the path)
            var subPath = PathUtils.subPath(this._path, function (x) { return x === node; }) || this._path;
            var availableResolvables = subPath
                .reduce(function (acc, _node) { return acc.concat(_node.resolvables); }, []) // all of subpath's resolvables
                .filter(function (res) { return res !== resolvable; }); // filter out the `resolvable` argument
            var getDependency = function (token) {
                var matching = availableResolvables.filter(function (r) { return r.token === token; });
                if (matching.length)
                    return tail(matching);
                var fromInjector = _this.injector().getNative(token);
                if (isUndefined(fromInjector)) {
                    throw new Error('Could not find Dependency Injection token: ' + stringify(token));
                }
                return new Resolvable(token, function () { return fromInjector; }, [], fromInjector);
            };
            return resolvable.deps.map(getDependency);
        };
        return ResolveContext;
    }());
    var UIInjectorImpl = /** @class */ (function () {
        function UIInjectorImpl(context) {
            this.context = context;
            this.native = this.get(NATIVE_INJECTOR_TOKEN) || services.$injector;
        }
        UIInjectorImpl.prototype.get = function (token) {
            var resolvable = this.context.getResolvable(token);
            if (resolvable) {
                if (this.context.getPolicy(resolvable).async === 'NOWAIT') {
                    return resolvable.get(this.context);
                }
                if (!resolvable.resolved) {
                    throw new Error('Resolvable async .get() not complete:' + stringify(resolvable.token));
                }
                return resolvable.data;
            }
            return this.getNative(token);
        };
        UIInjectorImpl.prototype.getAsync = function (token) {
            var resolvable = this.context.getResolvable(token);
            if (resolvable)
                return resolvable.get(this.context);
            return services.$q.when(this.native.get(token));
        };
        UIInjectorImpl.prototype.getNative = function (token) {
            return this.native && this.native.get(token);
        };
        return UIInjectorImpl;
    }());

    /**
     * @coreapi
     * @module transition
     */
    /** @hidden */
    var stateSelf = prop('self');
    /**
     * Represents a transition between two states.
     *
     * When navigating to a state, we are transitioning **from** the current state **to** the new state.
     *
     * This object contains all contextual information about the to/from states, parameters, resolves.
     * It has information about all states being entered and exited as a result of the transition.
     */
    var Transition = /** @class */ (function () {
        /**
         * Creates a new Transition object.
         *
         * If the target state is not valid, an error is thrown.
         *
         * @internalapi
         *
         * @param fromPath The path of [[PathNode]]s from which the transition is leaving.  The last node in the `fromPath`
         *        encapsulates the "from state".
         * @param targetState The target state and parameters being transitioned to (also, the transition options)
         * @param router The [[UIRouter]] instance
         */
        function Transition(fromPath, targetState, router) {
            var _this = this;
            /** @hidden */
            this._deferred = services.$q.defer();
            /**
             * This promise is resolved or rejected based on the outcome of the Transition.
             *
             * When the transition is successful, the promise is resolved
             * When the transition is unsuccessful, the promise is rejected with the [[Rejection]] or javascript error
             */
            this.promise = this._deferred.promise;
            /** @hidden Holds the hook registration functions such as those passed to Transition.onStart() */
            this._registeredHooks = {};
            /** @hidden */
            this._hookBuilder = new HookBuilder(this);
            /** Checks if this transition is currently active/running. */
            this.isActive = function () { return _this.router.globals.transition === _this; };
            this.router = router;
            this._targetState = targetState;
            if (!targetState.valid()) {
                throw new Error(targetState.error());
            }
            // current() is assumed to come from targetState.options, but provide a naive implementation otherwise.
            this._options = extend({ current: val(this) }, targetState.options());
            this.$id = router.transitionService._transitionCount++;
            var toPath = PathUtils.buildToPath(fromPath, targetState);
            this._treeChanges = PathUtils.treeChanges(fromPath, toPath, this._options.reloadState);
            this.createTransitionHookRegFns();
            var onCreateHooks = this._hookBuilder.buildHooksForPhase(exports.TransitionHookPhase.CREATE);
            TransitionHook.invokeHooks(onCreateHooks, function () { return null; });
            this.applyViewConfigs(router);
        }
        /** @hidden */
        Transition.prototype.onBefore = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onStart = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onExit = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onRetain = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onEnter = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onFinish = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onSuccess = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        Transition.prototype.onError = function (criteria, callback, options) {
            return;
        };
        /** @hidden
         * Creates the transition-level hook registration functions
         * (which can then be used to register hooks)
         */
        Transition.prototype.createTransitionHookRegFns = function () {
            var _this = this;
            this.router.transitionService._pluginapi
                ._getEvents()
                .filter(function (type) { return type.hookPhase !== exports.TransitionHookPhase.CREATE; })
                .forEach(function (type) { return makeEvent(_this, _this.router.transitionService, type); });
        };
        /** @internalapi */
        Transition.prototype.getHooks = function (hookName) {
            return this._registeredHooks[hookName];
        };
        Transition.prototype.applyViewConfigs = function (router) {
            var enteringStates = this._treeChanges.entering.map(function (node) { return node.state; });
            PathUtils.applyViewConfigs(router.transitionService.$view, this._treeChanges.to, enteringStates);
        };
        /**
         * @internalapi
         *
         * @returns the internal from [State] object
         */
        Transition.prototype.$from = function () {
            return tail(this._treeChanges.from).state;
        };
        /**
         * @internalapi
         *
         * @returns the internal to [State] object
         */
        Transition.prototype.$to = function () {
            return tail(this._treeChanges.to).state;
        };
        /**
         * Returns the "from state"
         *
         * Returns the state that the transition is coming *from*.
         *
         * @returns The state declaration object for the Transition's ("from state").
         */
        Transition.prototype.from = function () {
            return this.$from().self;
        };
        /**
         * Returns the "to state"
         *
         * Returns the state that the transition is going *to*.
         *
         * @returns The state declaration object for the Transition's target state ("to state").
         */
        Transition.prototype.to = function () {
            return this.$to().self;
        };
        /**
         * Gets the Target State
         *
         * A transition's [[TargetState]] encapsulates the [[to]] state, the [[params]], and the [[options]] as a single object.
         *
         * @returns the [[TargetState]] of this Transition
         */
        Transition.prototype.targetState = function () {
            return this._targetState;
        };
        /**
         * Determines whether two transitions are equivalent.
         * @deprecated
         */
        Transition.prototype.is = function (compare) {
            if (compare instanceof Transition) {
                // TODO: Also compare parameters
                return this.is({ to: compare.$to().name, from: compare.$from().name });
            }
            return !((compare.to && !matchState(this.$to(), compare.to)) ||
                (compare.from && !matchState(this.$from(), compare.from)));
        };
        Transition.prototype.params = function (pathname) {
            if (pathname === void 0) { pathname = 'to'; }
            return Object.freeze(this._treeChanges[pathname].map(prop('paramValues')).reduce(mergeR, {}));
        };
        /**
         * Creates a [[UIInjector]] Dependency Injector
         *
         * Returns a Dependency Injector for the Transition's target state (to state).
         * The injector provides resolve values which the target state has access to.
         *
         * The `UIInjector` can also provide values from the native root/global injector (ng1/ng2).
         *
         * #### Example:
         * ```js
         * .onEnter({ entering: 'myState' }, trans => {
         *   var myResolveValue = trans.injector().get('myResolve');
         *   // Inject a global service from the global/native injector (if it exists)
         *   var MyService = trans.injector().get('MyService');
         * })
         * ```
         *
         * In some cases (such as `onBefore`), you may need access to some resolve data but it has not yet been fetched.
         * You can use [[UIInjector.getAsync]] to get a promise for the data.
         * #### Example:
         * ```js
         * .onBefore({}, trans => {
         *   return trans.injector().getAsync('myResolve').then(myResolveValue =>
         *     return myResolveValue !== 'ABORT';
         *   });
         * });
         * ```
         *
         * If a `state` is provided, the injector that is returned will be limited to resolve values that the provided state has access to.
         * This can be useful if both a parent state `foo` and a child state `foo.bar` have both defined a resolve such as `data`.
         * #### Example:
         * ```js
         * .onEnter({ to: 'foo.bar' }, trans => {
         *   // returns result of `foo` state's `myResolve` resolve
         *   // even though `foo.bar` also has a `myResolve` resolve
         *   var fooData = trans.injector('foo').get('myResolve');
         * });
         * ```
         *
         * If you need resolve data from the exiting states, pass `'from'` as `pathName`.
         * The resolve data from the `from` path will be returned.
         * #### Example:
         * ```js
         * .onExit({ exiting: 'foo.bar' }, trans => {
         *   // Gets the resolve value of `myResolve` from the state being exited
         *   var fooData = trans.injector(null, 'from').get('myResolve');
         * });
         * ```
         *
         *
         * @param state Limits the resolves provided to only the resolves the provided state has access to.
         * @param pathName Default: `'to'`: Chooses the path for which to create the injector. Use this to access resolves for `exiting` states.
         *
         * @returns a [[UIInjector]]
         */
        Transition.prototype.injector = function (state, pathName) {
            if (pathName === void 0) { pathName = 'to'; }
            var path = this._treeChanges[pathName];
            if (state)
                path = PathUtils.subPath(path, function (node) { return node.state === state || node.state.name === state; });
            return new ResolveContext(path).injector();
        };
        /**
         * Gets all available resolve tokens (keys)
         *
         * This method can be used in conjunction with [[injector]] to inspect the resolve values
         * available to the Transition.
         *
         * This returns all the tokens defined on [[StateDeclaration.resolve]] blocks, for the states
         * in the Transition's [[TreeChanges.to]] path.
         *
         * #### Example:
         * This example logs all resolve values
         * ```js
         * let tokens = trans.getResolveTokens();
         * tokens.forEach(token => console.log(token + " = " + trans.injector().get(token)));
         * ```
         *
         * #### Example:
         * This example creates promises for each resolve value.
         * This triggers fetches of resolves (if any have not yet been fetched).
         * When all promises have all settled, it logs the resolve values.
         * ```js
         * let tokens = trans.getResolveTokens();
         * let promise = tokens.map(token => trans.injector().getAsync(token));
         * Promise.all(promises).then(values => console.log("Resolved values: " + values));
         * ```
         *
         * Note: Angular 1 users whould use `$q.all()`
         *
         * @param pathname resolve context's path name (e.g., `to` or `from`)
         *
         * @returns an array of resolve tokens (keys)
         */
        Transition.prototype.getResolveTokens = function (pathname) {
            if (pathname === void 0) { pathname = 'to'; }
            return new ResolveContext(this._treeChanges[pathname]).getTokens();
        };
        /**
         * Dynamically adds a new [[Resolvable]] (i.e., [[StateDeclaration.resolve]]) to this transition.
         *
         * Allows a transition hook to dynamically add a Resolvable to this Transition.
         *
         * Use the [[Transition.injector]] to retrieve the resolved data in subsequent hooks ([[UIInjector.get]]).
         *
         * If a `state` argument is provided, the Resolvable is processed when that state is being entered.
         * If no `state` is provided then the root state is used.
         * If the given `state` has already been entered, the Resolvable is processed when any child state is entered.
         * If no child states will be entered, the Resolvable is processed during the `onFinish` phase of the Transition.
         *
         * The `state` argument also scopes the resolved data.
         * The resolved data is available from the injector for that `state` and any children states.
         *
         * #### Example:
         * ```js
         * transitionService.onBefore({}, transition => {
         *   transition.addResolvable({
         *     token: 'myResolve',
         *     deps: ['MyService'],
         *     resolveFn: myService => myService.getData()
         *   });
         * });
         * ```
         *
         * @param resolvable a [[ResolvableLiteral]] object (or a [[Resolvable]])
         * @param state the state in the "to path" which should receive the new resolve (otherwise, the root state)
         */
        Transition.prototype.addResolvable = function (resolvable, state) {
            if (state === void 0) { state = ''; }
            resolvable = is(Resolvable)(resolvable) ? resolvable : new Resolvable(resolvable);
            var stateName = typeof state === 'string' ? state : state.name;
            var topath = this._treeChanges.to;
            var targetNode = find(topath, function (node) { return node.state.name === stateName; });
            var resolveContext = new ResolveContext(topath);
            resolveContext.addResolvables([resolvable], targetNode.state);
        };
        /**
         * Gets the transition from which this transition was redirected.
         *
         * If the current transition is a redirect, this method returns the transition that was redirected.
         *
         * #### Example:
         * ```js
         * let transitionA = $state.go('A').transition
         * transitionA.onStart({}, () => $state.target('B'));
         * $transitions.onSuccess({ to: 'B' }, (trans) => {
         *   trans.to().name === 'B'; // true
         *   trans.redirectedFrom() === transitionA; // true
         * });
         * ```
         *
         * @returns The previous Transition, or null if this Transition is not the result of a redirection
         */
        Transition.prototype.redirectedFrom = function () {
            return this._options.redirectedFrom || null;
        };
        /**
         * Gets the original transition in a redirect chain
         *
         * A transition might belong to a long chain of multiple redirects.
         * This method walks the [[redirectedFrom]] chain back to the original (first) transition in the chain.
         *
         * #### Example:
         * ```js
         * // states
         * registry.register({ name: 'A', redirectTo: 'B' });
         * registry.register({ name: 'B', redirectTo: 'C' });
         * registry.register({ name: 'C', redirectTo: 'D' });
         * registry.register({ name: 'D' });
         *
         * let transitionA = $state.go('A').transition
         *
         * $transitions.onSuccess({ to: 'D' }, (trans) => {
         *   trans.to().name === 'D'; // true
         *   trans.redirectedFrom().to().name === 'C'; // true
         *   trans.originalTransition() === transitionA; // true
         *   trans.originalTransition().to().name === 'A'; // true
         * });
         * ```
         *
         * @returns The original Transition that started a redirect chain
         */
        Transition.prototype.originalTransition = function () {
            var rf = this.redirectedFrom();
            return (rf && rf.originalTransition()) || this;
        };
        /**
         * Get the transition options
         *
         * @returns the options for this Transition.
         */
        Transition.prototype.options = function () {
            return this._options;
        };
        /**
         * Gets the states being entered.
         *
         * @returns an array of states that will be entered during this transition.
         */
        Transition.prototype.entering = function () {
            return map(this._treeChanges.entering, prop('state')).map(stateSelf);
        };
        /**
         * Gets the states being exited.
         *
         * @returns an array of states that will be exited during this transition.
         */
        Transition.prototype.exiting = function () {
            return map(this._treeChanges.exiting, prop('state'))
                .map(stateSelf)
                .reverse();
        };
        /**
         * Gets the states being retained.
         *
         * @returns an array of states that are already entered from a previous Transition, that will not be
         *    exited during this Transition
         */
        Transition.prototype.retained = function () {
            return map(this._treeChanges.retained, prop('state')).map(stateSelf);
        };
        /**
         * Get the [[ViewConfig]]s associated with this Transition
         *
         * Each state can define one or more views (template/controller), which are encapsulated as `ViewConfig` objects.
         * This method fetches the `ViewConfigs` for a given path in the Transition (e.g., "to" or "entering").
         *
         * @param pathname the name of the path to fetch views for:
         *   (`'to'`, `'from'`, `'entering'`, `'exiting'`, `'retained'`)
         * @param state If provided, only returns the `ViewConfig`s for a single state in the path
         *
         * @returns a list of ViewConfig objects for the given path.
         */
        Transition.prototype.views = function (pathname, state) {
            if (pathname === void 0) { pathname = 'entering'; }
            var path = this._treeChanges[pathname];
            path = !state ? path : path.filter(propEq('state', state));
            return path
                .map(prop('views'))
                .filter(identity)
                .reduce(unnestR, []);
        };
        Transition.prototype.treeChanges = function (pathname) {
            return pathname ? this._treeChanges[pathname] : this._treeChanges;
        };
        /**
         * Creates a new transition that is a redirection of the current one.
         *
         * This transition can be returned from a [[TransitionService]] hook to
         * redirect a transition to a new state and/or set of parameters.
         *
         * @internalapi
         *
         * @returns Returns a new [[Transition]] instance.
         */
        Transition.prototype.redirect = function (targetState) {
            var redirects = 1, trans = this;
            // tslint:disable-next-line:no-conditional-assignment
            while ((trans = trans.redirectedFrom()) != null) {
                if (++redirects > 20)
                    throw new Error("Too many consecutive Transition redirects (20+)");
            }
            var redirectOpts = { redirectedFrom: this, source: 'redirect' };
            // If the original transition was caused by URL sync, then use { location: 'replace' }
            // on the new transition (unless the target state explicitly specifies location: false).
            // This causes the original url to be replaced with the url for the redirect target
            // so the original url disappears from the browser history.
            if (this.options().source === 'url' && targetState.options().location !== false) {
                redirectOpts.location = 'replace';
            }
            var newOptions = extend({}, this.options(), targetState.options(), redirectOpts);
            targetState = targetState.withOptions(newOptions, true);
            var newTransition = this.router.transitionService.create(this._treeChanges.from, targetState);
            var originalEnteringNodes = this._treeChanges.entering;
            var redirectEnteringNodes = newTransition._treeChanges.entering;
            // --- Re-use resolve data from original transition ---
            // When redirecting from a parent state to a child state where the parent parameter values haven't changed
            // (because of the redirect), the resolves fetched by the original transition are still valid in the
            // redirected transition.
            //
            // This allows you to define a redirect on a parent state which depends on an async resolve value.
            // You can wait for the resolve, then redirect to a child state based on the result.
            // The redirected transition does not have to re-fetch the resolve.
            // ---------------------------------------------------------
            var nodeIsReloading = function (reloadState) { return function (node) {
                return reloadState && node.state.includes[reloadState.name];
            }; };
            // Find any "entering" nodes in the redirect path that match the original path and aren't being reloaded
            var matchingEnteringNodes = PathUtils.matching(redirectEnteringNodes, originalEnteringNodes, PathUtils.nonDynamicParams).filter(not(nodeIsReloading(targetState.options().reloadState)));
            // Use the existing (possibly pre-resolved) resolvables for the matching entering nodes.
            matchingEnteringNodes.forEach(function (node, idx) {
                node.resolvables = originalEnteringNodes[idx].resolvables;
            });
            return newTransition;
        };
        /** @hidden If a transition doesn't exit/enter any states, returns any [[Param]] whose value changed */
        Transition.prototype._changedParams = function () {
            var tc = this._treeChanges;
            /** Return undefined if it's not a "dynamic" transition, for the following reasons */
            // If user explicitly wants a reload
            if (this._options.reload)
                return undefined;
            // If any states are exiting or entering
            if (tc.exiting.length || tc.entering.length)
                return undefined;
            // If to/from path lengths differ
            if (tc.to.length !== tc.from.length)
                return undefined;
            // If the to/from paths are different
            var pathsDiffer = arrayTuples(tc.to, tc.from)
                .map(function (tuple) { return tuple[0].state !== tuple[1].state; })
                .reduce(anyTrueR, false);
            if (pathsDiffer)
                return undefined;
            // Find any parameter values that differ
            var nodeSchemas = tc.to.map(function (node) { return node.paramSchema; });
            var _a = [tc.to, tc.from].map(function (path) { return path.map(function (x) { return x.paramValues; }); }), toValues = _a[0], fromValues = _a[1];
            var tuples = arrayTuples(nodeSchemas, toValues, fromValues);
            return tuples.map(function (_a) {
                var schema = _a[0], toVals = _a[1], fromVals = _a[2];
                return Param.changed(schema, toVals, fromVals);
            }).reduce(unnestR, []);
        };
        /**
         * Returns true if the transition is dynamic.
         *
         * A transition is dynamic if no states are entered nor exited, but at least one dynamic parameter has changed.
         *
         * @returns true if the Transition is dynamic
         */
        Transition.prototype.dynamic = function () {
            var changes = this._changedParams();
            return !changes ? false : changes.map(function (x) { return x.dynamic; }).reduce(anyTrueR, false);
        };
        /**
         * Returns true if the transition is ignored.
         *
         * A transition is ignored if no states are entered nor exited, and no parameter values have changed.
         *
         * @returns true if the Transition is ignored.
         */
        Transition.prototype.ignored = function () {
            return !!this._ignoredReason();
        };
        /** @hidden */
        Transition.prototype._ignoredReason = function () {
            var pending = this.router.globals.transition;
            var reloadState = this._options.reloadState;
            var same = function (pathA, pathB) {
                if (pathA.length !== pathB.length)
                    return false;
                var matching = PathUtils.matching(pathA, pathB);
                return pathA.length === matching.filter(function (node) { return !reloadState || !node.state.includes[reloadState.name]; }).length;
            };
            var newTC = this.treeChanges();
            var pendTC = pending && pending.treeChanges();
            if (pendTC && same(pendTC.to, newTC.to) && same(pendTC.exiting, newTC.exiting))
                return 'SameAsPending';
            if (newTC.exiting.length === 0 && newTC.entering.length === 0 && same(newTC.from, newTC.to))
                return 'SameAsCurrent';
        };
        /**
         * Runs the transition
         *
         * This method is generally called from the [[StateService.transitionTo]]
         *
         * @internalapi
         *
         * @returns a promise for a successful transition.
         */
        Transition.prototype.run = function () {
            var _this = this;
            var runAllHooks = TransitionHook.runAllHooks;
            // Gets transition hooks array for the given phase
            var getHooksFor = function (phase) { return _this._hookBuilder.buildHooksForPhase(phase); };
            // When the chain is complete, then resolve or reject the deferred
            var transitionSuccess = function () {
                trace.traceSuccess(_this.$to(), _this);
                _this.success = true;
                _this._deferred.resolve(_this.to());
                runAllHooks(getHooksFor(exports.TransitionHookPhase.SUCCESS));
            };
            var transitionError = function (reason) {
                trace.traceError(reason, _this);
                _this.success = false;
                _this._deferred.reject(reason);
                _this._error = reason;
                runAllHooks(getHooksFor(exports.TransitionHookPhase.ERROR));
            };
            var runTransition = function () {
                // Wait to build the RUN hook chain until the BEFORE hooks are done
                // This allows a BEFORE hook to dynamically add additional RUN hooks via the Transition object.
                var allRunHooks = getHooksFor(exports.TransitionHookPhase.RUN);
                var done = function () { return services.$q.when(undefined); };
                return TransitionHook.invokeHooks(allRunHooks, done);
            };
            var startTransition = function () {
                var globals = _this.router.globals;
                globals.lastStartedTransitionId = _this.$id;
                globals.transition = _this;
                globals.transitionHistory.enqueue(_this);
                trace.traceTransitionStart(_this);
                return services.$q.when(undefined);
            };
            var allBeforeHooks = getHooksFor(exports.TransitionHookPhase.BEFORE);
            TransitionHook.invokeHooks(allBeforeHooks, startTransition)
                .then(runTransition)
                .then(transitionSuccess, transitionError);
            return this.promise;
        };
        /**
         * Checks if the Transition is valid
         *
         * @returns true if the Transition is valid
         */
        Transition.prototype.valid = function () {
            return !this.error() || this.success !== undefined;
        };
        /**
         * Aborts this transition
         *
         * Imperative API to abort a Transition.
         * This only applies to Transitions that are not yet complete.
         */
        Transition.prototype.abort = function () {
            // Do not set flag if the transition is already complete
            if (isUndefined(this.success)) {
                this._aborted = true;
            }
        };
        /**
         * The Transition error reason.
         *
         * If the transition is invalid (and could not be run), returns the reason the transition is invalid.
         * If the transition was valid and ran, but was not successful, returns the reason the transition failed.
         *
         * @returns a transition rejection explaining why the transition is invalid, or the reason the transition failed.
         */
        Transition.prototype.error = function () {
            var state = this.$to();
            if (state.self.abstract) {
                return Rejection.invalid("Cannot transition to abstract state '" + state.name + "'");
            }
            var paramDefs = state.parameters();
            var values$$1 = this.params();
            var invalidParams = paramDefs.filter(function (param) { return !param.validates(values$$1[param.id]); });
            if (invalidParams.length) {
                var invalidValues = invalidParams.map(function (param) { return "[" + param.id + ":" + stringify(values$$1[param.id]) + "]"; }).join(', ');
                var detail = "The following parameter values are not valid for state '" + state.name + "': " + invalidValues;
                return Rejection.invalid(detail);
            }
            if (this.success === false)
                return this._error;
        };
        /**
         * A string representation of the Transition
         *
         * @returns A string representation of the Transition
         */
        Transition.prototype.toString = function () {
            var fromStateOrName = this.from();
            var toStateOrName = this.to();
            var avoidEmptyHash = function (params) {
                return params['#'] !== null && params['#'] !== undefined ? params : omit(params, ['#']);
            };
            // (X) means the to state is invalid.
            var id = this.$id, from = isObject(fromStateOrName) ? fromStateOrName.name : fromStateOrName, fromParams = stringify(avoidEmptyHash(this._treeChanges.from.map(prop('paramValues')).reduce(mergeR, {}))), toValid = this.valid() ? '' : '(X) ', to = isObject(toStateOrName) ? toStateOrName.name : toStateOrName, toParams = stringify(avoidEmptyHash(this.params()));
            return "Transition#" + id + "( '" + from + "'" + fromParams + " -> " + toValid + "'" + to + "'" + toParams + " )";
        };
        /** @hidden */
        Transition.diToken = Transition;
        return Transition;
    }());

    /**
     * Functions that manipulate strings
     *
     * Although these functions are exported, they are subject to change without notice.
     *
     * @module common_strings
     */ /** */
    /**
     * Returns a string shortened to a maximum length
     *
     * If the string is already less than the `max` length, return the string.
     * Else return the string, shortened to `max - 3` and append three dots ("...").
     *
     * @param max the maximum length of the string to return
     * @param str the input string
     */
    function maxLength(max, str) {
        if (str.length <= max)
            return str;
        return str.substr(0, max - 3) + '...';
    }
    /**
     * Returns a string, with spaces added to the end, up to a desired str length
     *
     * If the string is already longer than the desired length, return the string.
     * Else returns the string, with extra spaces on the end, such that it reaches `length` characters.
     *
     * @param length the desired length of the string to return
     * @param str the input string
     */
    function padString(length, str) {
        while (str.length < length)
            str += ' ';
        return str;
    }
    function kebobString(camelCase) {
        return camelCase
            .replace(/^([A-Z])/, function ($1) { return $1.toLowerCase(); }) // replace first char
            .replace(/([A-Z])/g, function ($1) { return '-' + $1.toLowerCase(); }); // replace rest
    }
    function functionToString(fn) {
        var fnStr = fnToString(fn);
        var namedFunctionMatch = fnStr.match(/^(function [^ ]+\([^)]*\))/);
        var toStr = namedFunctionMatch ? namedFunctionMatch[1] : fnStr;
        var fnName = fn['name'] || '';
        if (fnName && toStr.match(/function \(/)) {
            return 'function ' + fnName + toStr.substr(9);
        }
        return toStr;
    }
    function fnToString(fn) {
        var _fn = isArray(fn) ? fn.slice(-1)[0] : fn;
        return (_fn && _fn.toString()) || 'undefined';
    }
    var stringifyPatternFn = null;
    var stringifyPattern = function (value) {
        var isRejection = Rejection.isRejectionPromise;
        stringifyPatternFn =
            stringifyPatternFn ||
                pattern([
                    [not(isDefined), val('undefined')],
                    [isNull, val('null')],
                    [isPromise, val('[Promise]')],
                    [isRejection, function (x) { return x._transitionRejection.toString(); }],
                    [is(Rejection), invoke('toString')],
                    [is(Transition), invoke('toString')],
                    [is(Resolvable), invoke('toString')],
                    [isInjectable, functionToString],
                    [val(true), identity],
                ]);
        return stringifyPatternFn(value);
    };
    function stringify(o) {
        var seen = [];
        function format(value) {
            if (isObject(value)) {
                if (seen.indexOf(value) !== -1)
                    return '[circular ref]';
                seen.push(value);
            }
            return stringifyPattern(value);
        }
        return JSON.stringify(o, function (key, value) { return format(value); }).replace(/\\"/g, '"');
    }
    /** Returns a function that splits a string on a character or substring */
    var beforeAfterSubstr = function (char) { return function (str) {
        if (!str)
            return ['', ''];
        var idx = str.indexOf(char);
        if (idx === -1)
            return [str, ''];
        return [str.substr(0, idx), str.substr(idx + 1)];
    }; };
    var hostRegex = new RegExp('^(?:[a-z]+:)?//[^/]+/');
    var stripLastPathElement = function (str) { return str.replace(/\/[^/]*$/, ''); };
    var splitHash = beforeAfterSubstr('#');
    var splitQuery = beforeAfterSubstr('?');
    var splitEqual = beforeAfterSubstr('=');
    var trimHashVal = function (str) { return (str ? str.replace(/^#/, '') : ''); };
    /**
     * Splits on a delimiter, but returns the delimiters in the array
     *
     * #### Example:
     * ```js
     * var splitOnSlashes = splitOnDelim('/');
     * splitOnSlashes("/foo"); // ["/", "foo"]
     * splitOnSlashes("/foo/"); // ["/", "foo", "/"]
     * ```
     */
    function splitOnDelim(delim) {
        var re = new RegExp('(' + delim + ')', 'g');
        return function (str) { return str.split(re).filter(identity); };
    }
    /**
     * Reduce fn that joins neighboring strings
     *
     * Given an array of strings, returns a new array
     * where all neighboring strings have been joined.
     *
     * #### Example:
     * ```js
     * let arr = ["foo", "bar", 1, "baz", "", "qux" ];
     * arr.reduce(joinNeighborsR, []) // ["foobar", 1, "bazqux" ]
     * ```
     */
    function joinNeighborsR(acc, x) {
        if (isString(tail(acc)) && isString(x))
            return acc.slice(0, -1).concat(tail(acc) + x);
        return pushR(acc, x);
    }

    /** @module common */ /** for typedoc */

    /**
     * @coreapi
     * @module params
     */
    /**
     * A registry for parameter types.
     *
     * This registry manages the built-in (and custom) parameter types.
     *
     * The built-in parameter types are:
     *
     * - [[string]]
     * - [[path]]
     * - [[query]]
     * - [[hash]]
     * - [[int]]
     * - [[bool]]
     * - [[date]]
     * - [[json]]
     * - [[any]]
     */
    var ParamTypes = /** @class */ (function () {
        /** @internalapi */
        function ParamTypes() {
            /** @hidden */
            this.enqueue = true;
            /** @hidden */
            this.typeQueue = [];
            /** @internalapi */
            this.defaultTypes = pick(ParamTypes.prototype, [
                'hash',
                'string',
                'query',
                'path',
                'int',
                'bool',
                'date',
                'json',
                'any',
            ]);
            // Register default types. Store them in the prototype of this.types.
            var makeType = function (definition, name) { return new ParamType(extend({ name: name }, definition)); };
            this.types = inherit(map(this.defaultTypes, makeType), {});
        }
        /** @internalapi */
        ParamTypes.prototype.dispose = function () {
            this.types = {};
        };
        /**
         * Registers a parameter type
         *
         * End users should call [[UrlMatcherFactory.type]], which delegates to this method.
         */
        ParamTypes.prototype.type = function (name, definition, definitionFn) {
            if (!isDefined(definition))
                return this.types[name];
            if (this.types.hasOwnProperty(name))
                throw new Error("A type named '" + name + "' has already been defined.");
            this.types[name] = new ParamType(extend({ name: name }, definition));
            if (definitionFn) {
                this.typeQueue.push({ name: name, def: definitionFn });
                if (!this.enqueue)
                    this._flushTypeQueue();
            }
            return this;
        };
        /** @internalapi */
        ParamTypes.prototype._flushTypeQueue = function () {
            while (this.typeQueue.length) {
                var type = this.typeQueue.shift();
                if (type.pattern)
                    throw new Error("You cannot override a type's .pattern at runtime.");
                extend(this.types[type.name], services.$injector.invoke(type.def));
            }
        };
        return ParamTypes;
    }());
    /** @hidden */
    function initDefaultTypes() {
        var makeDefaultType = function (def) {
            var valToString = function (val$$1) { return (val$$1 != null ? val$$1.toString() : val$$1); };
            var defaultTypeBase = {
                encode: valToString,
                decode: valToString,
                is: is(String),
                pattern: /.*/,
                // tslint:disable-next-line:triple-equals
                equals: function (a, b) { return a == b; },
            };
            return extend({}, defaultTypeBase, def);
        };
        // Default Parameter Type Definitions
        extend(ParamTypes.prototype, {
            string: makeDefaultType({}),
            path: makeDefaultType({
                pattern: /[^/]*/,
            }),
            query: makeDefaultType({}),
            hash: makeDefaultType({
                inherit: false,
            }),
            int: makeDefaultType({
                decode: function (val$$1) { return parseInt(val$$1, 10); },
                is: function (val$$1) {
                    return !isNullOrUndefined(val$$1) && this.decode(val$$1.toString()) === val$$1;
                },
                pattern: /-?\d+/,
            }),
            bool: makeDefaultType({
                encode: function (val$$1) { return (val$$1 && 1) || 0; },
                decode: function (val$$1) { return parseInt(val$$1, 10) !== 0; },
                is: is(Boolean),
                pattern: /0|1/,
            }),
            date: makeDefaultType({
                encode: function (val$$1) {
                    return !this.is(val$$1)
                        ? undefined
                        : [val$$1.getFullYear(), ('0' + (val$$1.getMonth() + 1)).slice(-2), ('0' + val$$1.getDate()).slice(-2)].join('-');
                },
                decode: function (val$$1) {
                    if (this.is(val$$1))
                        return val$$1;
                    var match = this.capture.exec(val$$1);
                    return match ? new Date(match[1], match[2] - 1, match[3]) : undefined;
                },
                is: function (val$$1) { return val$$1 instanceof Date && !isNaN(val$$1.valueOf()); },
                equals: function (l, r) {
                    return ['getFullYear', 'getMonth', 'getDate'].reduce(function (acc, fn) { return acc && l[fn]() === r[fn](); }, true);
                },
                pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/,
            }),
            json: makeDefaultType({
                encode: toJson,
                decode: fromJson,
                is: is(Object),
                equals: equals,
                pattern: /[^/]*/,
            }),
            // does not encode/decode
            any: makeDefaultType({
                encode: identity,
                decode: identity,
                is: function () { return true; },
                equals: equals,
            }),
        });
    }
    initDefaultTypes();

    /**
     * @coreapi
     * @module params
     */
    /** @internalapi */
    var StateParams = /** @class */ (function () {
        function StateParams(params) {
            if (params === void 0) { params = {}; }
            extend(this, params);
        }
        /**
         * Merges a set of parameters with all parameters inherited between the common parents of the
         * current state and a given destination state.
         *
         * @param {Object} newParams The set of parameters which will be composited with inherited params.
         * @param {Object} $current Internal definition of object representing the current state.
         * @param {Object} $to Internal definition of object representing state to transition to.
         */
        StateParams.prototype.$inherit = function (newParams, $current, $to) {
            var parentParams;
            var parents = ancestors($current, $to), inherited = {}, inheritList = [];
            for (var i in parents) {
                if (!parents[i] || !parents[i].params)
                    continue;
                parentParams = Object.keys(parents[i].params);
                if (!parentParams.length)
                    continue;
                for (var j in parentParams) {
                    if (inheritList.indexOf(parentParams[j]) >= 0)
                        continue;
                    inheritList.push(parentParams[j]);
                    inherited[parentParams[j]] = this[parentParams[j]];
                }
            }
            return extend({}, inherited, newParams);
        };
        return StateParams;
    }());

    /** @module path */ /** for typedoc */

    /** @module resolve */ /** for typedoc */

    /** @module state */ /** for typedoc */
    var parseUrl = function (url) {
        if (!isString(url))
            return false;
        var root$$1 = url.charAt(0) === '^';
        return { val: root$$1 ? url.substring(1) : url, root: root$$1 };
    };
    function nameBuilder(state) {
        return state.name;
    }
    function selfBuilder(state) {
        state.self.$$state = function () { return state; };
        return state.self;
    }
    function dataBuilder(state) {
        if (state.parent && state.parent.data) {
            state.data = state.self.data = inherit(state.parent.data, state.data);
        }
        return state.data;
    }
    var getUrlBuilder = function ($urlMatcherFactoryProvider, root$$1) {
        return function urlBuilder(state) {
            var stateDec = state;
            // For future states, i.e., states whose name ends with `.**`,
            // match anything that starts with the url prefix
            if (stateDec && stateDec.url && stateDec.name && stateDec.name.match(/\.\*\*$/)) {
                stateDec.url += '{remainder:any}'; // match any path (.*)
            }
            var parsed = parseUrl(stateDec.url), parent = state.parent;
            var url = !parsed
                ? stateDec.url
                : $urlMatcherFactoryProvider.compile(parsed.val, {
                    params: state.params || {},
                    paramMap: function (paramConfig, isSearch) {
                        if (stateDec.reloadOnSearch === false && isSearch)
                            paramConfig = extend(paramConfig || {}, { dynamic: true });
                        return paramConfig;
                    },
                });
            if (!url)
                return null;
            if (!$urlMatcherFactoryProvider.isMatcher(url))
                throw new Error("Invalid url '" + url + "' in state '" + state + "'");
            return parsed && parsed.root ? url : ((parent && parent.navigable) || root$$1()).url.append(url);
        };
    };
    var getNavigableBuilder = function (isRoot) {
        return function navigableBuilder(state) {
            return !isRoot(state) && state.url ? state : state.parent ? state.parent.navigable : null;
        };
    };
    var getParamsBuilder = function (paramFactory) {
        return function paramsBuilder(state) {
            var makeConfigParam = function (config, id) { return paramFactory.fromConfig(id, null, config); };
            var urlParams = (state.url && state.url.parameters({ inherit: false })) || [];
            var nonUrlParams = values(mapObj(omit(state.params || {}, urlParams.map(prop('id'))), makeConfigParam));
            return urlParams
                .concat(nonUrlParams)
                .map(function (p) { return [p.id, p]; })
                .reduce(applyPairs, {});
        };
    };
    function pathBuilder(state) {
        return state.parent ? state.parent.path.concat(state) : /*root*/ [state];
    }
    function includesBuilder(state) {
        var includes = state.parent ? extend({}, state.parent.includes) : {};
        includes[state.name] = true;
        return includes;
    }
    /**
     * This is a [[StateBuilder.builder]] function for the `resolve:` block on a [[StateDeclaration]].
     *
     * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
     * validates the `resolve` property and converts it to a [[Resolvable]] array.
     *
     * resolve: input value can be:
     *
     * {
     *   // analyzed but not injected
     *   myFooResolve: function() { return "myFooData"; },
     *
     *   // function.toString() parsed, "DependencyName" dep as string (not min-safe)
     *   myBarResolve: function(DependencyName) { return DependencyName.fetchSomethingAsPromise() },
     *
     *   // Array split; "DependencyName" dep as string
     *   myBazResolve: [ "DependencyName", function(dep) { return dep.fetchSomethingAsPromise() },
     *
     *   // Array split; DependencyType dep as token (compared using ===)
     *   myQuxResolve: [ DependencyType, function(dep) { return dep.fetchSometingAsPromise() },
     *
     *   // val.$inject used as deps
     *   // where:
     *   //     corgeResolve.$inject = ["DependencyName"];
     *   //     function corgeResolve(dep) { dep.fetchSometingAsPromise() }
     *   // then "DependencyName" dep as string
     *   myCorgeResolve: corgeResolve,
     *
     *  // inject service by name
     *  // When a string is found, desugar creating a resolve that injects the named service
     *   myGraultResolve: "SomeService"
     * }
     *
     * or:
     *
     * [
     *   new Resolvable("myFooResolve", function() { return "myFooData" }),
     *   new Resolvable("myBarResolve", function(dep) { return dep.fetchSomethingAsPromise() }, [ "DependencyName" ]),
     *   { provide: "myBazResolve", useFactory: function(dep) { dep.fetchSomethingAsPromise() }, deps: [ "DependencyName" ] }
     * ]
     */
    function resolvablesBuilder(state) {
        /** convert resolve: {} and resolvePolicy: {} objects to an array of tuples */
        var objects2Tuples = function (resolveObj, resolvePolicies) {
            return Object.keys(resolveObj || {}).map(function (token) { return ({
                token: token,
                val: resolveObj[token],
                deps: undefined,
                policy: resolvePolicies[token],
            }); });
        };
        /** fetch DI annotations from a function or ng1-style array */
        var annotate = function (fn) {
            var $injector = services.$injector;
            // ng1 doesn't have an $injector until runtime.
            // If the $injector doesn't exist, use "deferred" literal as a
            // marker indicating they should be annotated when runtime starts
            return fn['$inject'] || ($injector && $injector.annotate(fn, $injector.strictDi)) || 'deferred';
        };
        /** true if the object has both `token` and `resolveFn`, and is probably a [[ResolveLiteral]] */
        var isResolveLiteral = function (obj) { return !!(obj.token && obj.resolveFn); };
        /** true if the object looks like a provide literal, or a ng2 Provider */
        var isLikeNg2Provider = function (obj) {
            return !!((obj.provide || obj.token) && (obj.useValue || obj.useFactory || obj.useExisting || obj.useClass));
        };
        /** true if the object looks like a tuple from obj2Tuples */
        var isTupleFromObj = function (obj) {
            return !!(obj && obj.val && (isString(obj.val) || isArray(obj.val) || isFunction(obj.val)));
        };
        /** extracts the token from a Provider or provide literal */
        var getToken = function (p) { return p.provide || p.token; };
        /** Given a literal resolve or provider object, returns a Resolvable */
        var literal2Resolvable = pattern([
            [prop('resolveFn'), function (p) { return new Resolvable(getToken(p), p.resolveFn, p.deps, p.policy); }],
            [prop('useFactory'), function (p) { return new Resolvable(getToken(p), p.useFactory, p.deps || p.dependencies, p.policy); }],
            [prop('useClass'), function (p) { return new Resolvable(getToken(p), function () { return new p.useClass(); }, [], p.policy); }],
            [prop('useValue'), function (p) { return new Resolvable(getToken(p), function () { return p.useValue; }, [], p.policy, p.useValue); }],
            [prop('useExisting'), function (p) { return new Resolvable(getToken(p), identity, [p.useExisting], p.policy); }],
        ]);
        var tuple2Resolvable = pattern([
            [pipe(prop('val'), isString), function (tuple) { return new Resolvable(tuple.token, identity, [tuple.val], tuple.policy); }],
            [
                pipe(prop('val'), isArray),
                function (tuple) { return new Resolvable(tuple.token, tail(tuple.val), tuple.val.slice(0, -1), tuple.policy); },
            ],
            [
                pipe(prop('val'), isFunction),
                function (tuple) { return new Resolvable(tuple.token, tuple.val, annotate(tuple.val), tuple.policy); },
            ],
        ]);
        var item2Resolvable = pattern([
            [is(Resolvable), function (r) { return r; }],
            [isResolveLiteral, literal2Resolvable],
            [isLikeNg2Provider, literal2Resolvable],
            [isTupleFromObj, tuple2Resolvable],
            [
                val(true),
                function (obj) {
                    throw new Error('Invalid resolve value: ' + stringify(obj));
                },
            ],
        ]);
        // If resolveBlock is already an array, use it as-is.
        // Otherwise, assume it's an object and convert to an Array of tuples
        var decl = state.resolve;
        var items = isArray(decl) ? decl : objects2Tuples(decl, state.resolvePolicy || {});
        return items.map(item2Resolvable);
    }
    /**
     * @internalapi A internal global service
     *
     * StateBuilder is a factory for the internal [[StateObject]] objects.
     *
     * When you register a state with the [[StateRegistry]], you register a plain old javascript object which
     * conforms to the [[StateDeclaration]] interface.  This factory takes that object and builds the corresponding
     * [[StateObject]] object, which has an API and is used internally.
     *
     * Custom properties or API may be added to the internal [[StateObject]] object by registering a decorator function
     * using the [[builder]] method.
     */
    var StateBuilder = /** @class */ (function () {
        function StateBuilder(matcher, urlMatcherFactory) {
            this.matcher = matcher;
            var self = this;
            var root$$1 = function () { return matcher.find(''); };
            var isRoot = function (state) { return state.name === ''; };
            function parentBuilder(state) {
                if (isRoot(state))
                    return null;
                return matcher.find(self.parentName(state)) || root$$1();
            }
            this.builders = {
                name: [nameBuilder],
                self: [selfBuilder],
                parent: [parentBuilder],
                data: [dataBuilder],
                // Build a URLMatcher if necessary, either via a relative or absolute URL
                url: [getUrlBuilder(urlMatcherFactory, root$$1)],
                // Keep track of the closest ancestor state that has a URL (i.e. is navigable)
                navigable: [getNavigableBuilder(isRoot)],
                params: [getParamsBuilder(urlMatcherFactory.paramFactory)],
                // Each framework-specific ui-router implementation should define its own `views` builder
                // e.g., src/ng1/statebuilders/views.ts
                views: [],
                // Keep a full path from the root down to this state as this is needed for state activation.
                path: [pathBuilder],
                // Speed up $state.includes() as it's used a lot
                includes: [includesBuilder],
                resolvables: [resolvablesBuilder],
            };
        }
        /**
         * Registers a [[BuilderFunction]] for a specific [[StateObject]] property (e.g., `parent`, `url`, or `path`).
         * More than one BuilderFunction can be registered for a given property.
         *
         * The BuilderFunction(s) will be used to define the property on any subsequently built [[StateObject]] objects.
         *
         * @param name The name of the State property being registered for.
         * @param fn The BuilderFunction which will be used to build the State property
         * @returns a function which deregisters the BuilderFunction
         */
        StateBuilder.prototype.builder = function (name, fn) {
            var builders = this.builders;
            var array = builders[name] || [];
            // Backwards compat: if only one builder exists, return it, else return whole arary.
            if (isString(name) && !isDefined(fn))
                return array.length > 1 ? array : array[0];
            if (!isString(name) || !isFunction(fn))
                return;
            builders[name] = array;
            builders[name].push(fn);
            return function () { return builders[name].splice(builders[name].indexOf(fn, 1)) && null; };
        };
        /**
         * Builds all of the properties on an essentially blank State object, returning a State object which has all its
         * properties and API built.
         *
         * @param state an uninitialized State object
         * @returns the built State object
         */
        StateBuilder.prototype.build = function (state) {
            var _a = this, matcher = _a.matcher, builders = _a.builders;
            var parent = this.parentName(state);
            if (parent && !matcher.find(parent, undefined, false)) {
                return null;
            }
            for (var key in builders) {
                if (!builders.hasOwnProperty(key))
                    continue;
                var chain = builders[key].reduce(function (parentFn, step) { return function (_state) { return step(_state, parentFn); }; }, noop);
                state[key] = chain(state);
            }
            return state;
        };
        StateBuilder.prototype.parentName = function (state) {
            // name = 'foo.bar.baz.**'
            var name = state.name || '';
            // segments = ['foo', 'bar', 'baz', '.**']
            var segments = name.split('.');
            // segments = ['foo', 'bar', 'baz']
            var lastSegment = segments.pop();
            // segments = ['foo', 'bar'] (ignore .** segment for future states)
            if (lastSegment === '**')
                segments.pop();
            if (segments.length) {
                if (state.parent) {
                    throw new Error("States that specify the 'parent:' property should not have a '.' in their name (" + name + ")");
                }
                // 'foo.bar'
                return segments.join('.');
            }
            if (!state.parent)
                return '';
            return isString(state.parent) ? state.parent : state.parent.name;
        };
        StateBuilder.prototype.name = function (state) {
            var name = state.name;
            if (name.indexOf('.') !== -1 || !state.parent)
                return name;
            var parentName = isString(state.parent) ? state.parent : state.parent.name;
            return parentName ? parentName + '.' + name : name;
        };
        return StateBuilder;
    }());

    /** @module state */ /** for typedoc */
    var StateMatcher = /** @class */ (function () {
        function StateMatcher(_states) {
            this._states = _states;
        }
        StateMatcher.prototype.isRelative = function (stateName) {
            stateName = stateName || '';
            return stateName.indexOf('.') === 0 || stateName.indexOf('^') === 0;
        };
        StateMatcher.prototype.find = function (stateOrName, base, matchGlob) {
            if (matchGlob === void 0) { matchGlob = true; }
            if (!stateOrName && stateOrName !== '')
                return undefined;
            var isStr = isString(stateOrName);
            var name = isStr ? stateOrName : stateOrName.name;
            if (this.isRelative(name))
                name = this.resolvePath(name, base);
            var state = this._states[name];
            if (state && (isStr || (!isStr && (state === stateOrName || state.self === stateOrName)))) {
                return state;
            }
            else if (isStr && matchGlob) {
                var _states = values(this._states);
                var matches = _states.filter(function (_state) { return _state.__stateObjectCache.nameGlob && _state.__stateObjectCache.nameGlob.matches(name); });
                if (matches.length > 1) {
                    // tslint:disable-next-line:no-console
                    console.log("stateMatcher.find: Found multiple matches for " + name + " using glob: ", matches.map(function (match) { return match.name; }));
                }
                return matches[0];
            }
            return undefined;
        };
        StateMatcher.prototype.resolvePath = function (name, base) {
            if (!base)
                throw new Error("No reference point given for path '" + name + "'");
            var baseState = this.find(base);
            var splitName = name.split('.');
            var pathLength = splitName.length;
            var i = 0, current = baseState;
            for (; i < pathLength; i++) {
                if (splitName[i] === '' && i === 0) {
                    current = baseState;
                    continue;
                }
                if (splitName[i] === '^') {
                    if (!current.parent)
                        throw new Error("Path '" + name + "' not valid for state '" + baseState.name + "'");
                    current = current.parent;
                    continue;
                }
                break;
            }
            var relName = splitName.slice(i).join('.');
            return current.name + (current.name && relName ? '.' : '') + relName;
        };
        return StateMatcher;
    }());

    /** @module state */ /** for typedoc */
    /** @internalapi */
    var StateQueueManager = /** @class */ (function () {
        function StateQueueManager($registry, $urlRouter, states, builder, listeners) {
            this.$registry = $registry;
            this.$urlRouter = $urlRouter;
            this.states = states;
            this.builder = builder;
            this.listeners = listeners;
            this.queue = [];
            this.matcher = $registry.matcher;
        }
        /** @internalapi */
        StateQueueManager.prototype.dispose = function () {
            this.queue = [];
        };
        StateQueueManager.prototype.register = function (stateDecl) {
            var queue = this.queue;
            var state = StateObject.create(stateDecl);
            var name = state.name;
            if (!isString(name))
                throw new Error('State must have a valid name');
            if (this.states.hasOwnProperty(name) || inArray(queue.map(prop('name')), name))
                throw new Error("State '" + name + "' is already defined");
            queue.push(state);
            this.flush();
            return state;
        };
        StateQueueManager.prototype.flush = function () {
            var _this = this;
            var _a = this, queue = _a.queue, states = _a.states, builder = _a.builder;
            var registered = [], // states that got registered
            orphans = [], // states that don't yet have a parent registered
            previousQueueLength = {}; // keep track of how long the queue when an orphan was first encountered
            var getState = function (name) { return _this.states.hasOwnProperty(name) && _this.states[name]; };
            var notifyListeners = function () {
                if (registered.length) {
                    _this.listeners.forEach(function (listener) { return listener('registered', registered.map(function (s) { return s.self; })); });
                }
            };
            while (queue.length > 0) {
                var state = queue.shift();
                var name_1 = state.name;
                var result = builder.build(state);
                var orphanIdx = orphans.indexOf(state);
                if (result) {
                    var existingState = getState(name_1);
                    if (existingState && existingState.name === name_1) {
                        throw new Error("State '" + name_1 + "' is already defined");
                    }
                    var existingFutureState = getState(name_1 + '.**');
                    if (existingFutureState) {
                        // Remove future state of the same name
                        this.$registry.deregister(existingFutureState);
                    }
                    states[name_1] = state;
                    this.attachRoute(state);
                    if (orphanIdx >= 0)
                        orphans.splice(orphanIdx, 1);
                    registered.push(state);
                    continue;
                }
                var prev = previousQueueLength[name_1];
                previousQueueLength[name_1] = queue.length;
                if (orphanIdx >= 0 && prev === queue.length) {
                    // Wait until two consecutive iterations where no additional states were dequeued successfully.
                    // throw new Error(`Cannot register orphaned state '${name}'`);
                    queue.push(state);
                    notifyListeners();
                    return states;
                }
                else if (orphanIdx < 0) {
                    orphans.push(state);
                }
                queue.push(state);
            }
            notifyListeners();
            return states;
        };
        StateQueueManager.prototype.attachRoute = function (state) {
            if (state.abstract || !state.url)
                return;
            this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(state));
        };
        return StateQueueManager;
    }());

    /**
     * @coreapi
     * @module state
     */ /** for typedoc */
    var StateRegistry = /** @class */ (function () {
        /** @internalapi */
        function StateRegistry(_router) {
            this._router = _router;
            this.states = {};
            this.listeners = [];
            this.matcher = new StateMatcher(this.states);
            this.builder = new StateBuilder(this.matcher, _router.urlMatcherFactory);
            this.stateQueue = new StateQueueManager(this, _router.urlRouter, this.states, this.builder, this.listeners);
            this._registerRoot();
        }
        /** @internalapi */
        StateRegistry.prototype._registerRoot = function () {
            var rootStateDef = {
                name: '',
                url: '^',
                views: null,
                params: {
                    '#': { value: null, type: 'hash', dynamic: true },
                },
                abstract: true,
            };
            var _root = (this._root = this.stateQueue.register(rootStateDef));
            _root.navigable = null;
        };
        /** @internalapi */
        StateRegistry.prototype.dispose = function () {
            var _this = this;
            this.stateQueue.dispose();
            this.listeners = [];
            this.get().forEach(function (state) { return _this.get(state) && _this.deregister(state); });
        };
        /**
         * Listen for a State Registry events
         *
         * Adds a callback that is invoked when states are registered or deregistered with the StateRegistry.
         *
         * #### Example:
         * ```js
         * let allStates = registry.get();
         *
         * // Later, invoke deregisterFn() to remove the listener
         * let deregisterFn = registry.onStatesChanged((event, states) => {
         *   switch(event) {
         *     case: 'registered':
         *       states.forEach(state => allStates.push(state));
         *       break;
         *     case: 'deregistered':
         *       states.forEach(state => {
         *         let idx = allStates.indexOf(state);
         *         if (idx !== -1) allStates.splice(idx, 1);
         *       });
         *       break;
         *   }
         * });
         * ```
         *
         * @param listener a callback function invoked when the registered states changes.
         *        The function receives two parameters, `event` and `state`.
         *        See [[StateRegistryListener]]
         * @return a function that deregisters the listener
         */
        StateRegistry.prototype.onStatesChanged = function (listener) {
            this.listeners.push(listener);
            return function deregisterListener() {
                removeFrom(this.listeners)(listener);
            }.bind(this);
        };
        /**
         * Gets the implicit root state
         *
         * Gets the root of the state tree.
         * The root state is implicitly created by UI-Router.
         * Note: this returns the internal [[StateObject]] representation, not a [[StateDeclaration]]
         *
         * @return the root [[StateObject]]
         */
        StateRegistry.prototype.root = function () {
            return this._root;
        };
        /**
         * Adds a state to the registry
         *
         * Registers a [[StateDeclaration]] or queues it for registration.
         *
         * Note: a state will be queued if the state's parent isn't yet registered.
         *
         * @param stateDefinition the definition of the state to register.
         * @returns the internal [[StateObject]] object.
         *          If the state was successfully registered, then the object is fully built (See: [[StateBuilder]]).
         *          If the state was only queued, then the object is not fully built.
         */
        StateRegistry.prototype.register = function (stateDefinition) {
            return this.stateQueue.register(stateDefinition);
        };
        /** @hidden */
        StateRegistry.prototype._deregisterTree = function (state) {
            var _this = this;
            var all$$1 = this.get().map(function (s) { return s.$$state(); });
            var getChildren = function (states) {
                var _children = all$$1.filter(function (s) { return states.indexOf(s.parent) !== -1; });
                return _children.length === 0 ? _children : _children.concat(getChildren(_children));
            };
            var children = getChildren([state]);
            var deregistered = [state].concat(children).reverse();
            deregistered.forEach(function (_state) {
                var $ur = _this._router.urlRouter;
                // Remove URL rule
                $ur
                    .rules()
                    .filter(propEq('state', _state))
                    .forEach($ur.removeRule.bind($ur));
                // Remove state from registry
                delete _this.states[_state.name];
            });
            return deregistered;
        };
        /**
         * Removes a state from the registry
         *
         * This removes a state from the registry.
         * If the state has children, they are are also removed from the registry.
         *
         * @param stateOrName the state's name or object representation
         * @returns {StateObject[]} a list of removed states
         */
        StateRegistry.prototype.deregister = function (stateOrName) {
            var _state = this.get(stateOrName);
            if (!_state)
                throw new Error("Can't deregister state; not found: " + stateOrName);
            var deregisteredStates = this._deregisterTree(_state.$$state());
            this.listeners.forEach(function (listener) { return listener('deregistered', deregisteredStates.map(function (s) { return s.self; })); });
            return deregisteredStates;
        };
        StateRegistry.prototype.get = function (stateOrName, base) {
            var _this = this;
            if (arguments.length === 0)
                return Object.keys(this.states).map(function (name) { return _this.states[name].self; });
            var found = this.matcher.find(stateOrName, base);
            return (found && found.self) || null;
        };
        StateRegistry.prototype.decorator = function (name, func) {
            return this.builder.builder(name, func);
        };
        return StateRegistry;
    }());

    /**
     * @coreapi
     * @module url
     */
    /** @hidden */
    function quoteRegExp(str, param) {
        var surroundPattern = ['', ''], result = str.replace(/[\\\[\]\^$*+?.()|{}]/g, '\\$&');
        if (!param)
            return result;
        switch (param.squash) {
            case false:
                surroundPattern = ['(', ')' + (param.isOptional ? '?' : '')];
                break;
            case true:
                result = result.replace(/\/$/, '');
                surroundPattern = ['(?:/(', ')|/)?'];
                break;
            default:
                surroundPattern = ["(" + param.squash + "|", ')?'];
                break;
        }
        return result + surroundPattern[0] + param.type.pattern.source + surroundPattern[1];
    }
    /** @hidden */
    var memoizeTo = function (obj, _prop, fn) { return (obj[_prop] = obj[_prop] || fn()); };
    /** @hidden */
    var splitOnSlash = splitOnDelim('/');
    /**
     * Matches URLs against patterns.
     *
     * Matches URLs against patterns and extracts named parameters from the path or the search
     * part of the URL.
     *
     * A URL pattern consists of a path pattern, optionally followed by '?' and a list of search (query)
     * parameters. Multiple search parameter names are separated by '&'. Search parameters
     * do not influence whether or not a URL is matched, but their values are passed through into
     * the matched parameters returned by [[UrlMatcher.exec]].
     *
     * - *Path parameters* are defined using curly brace placeholders (`/somepath/{param}`)
     * or colon placeholders (`/somePath/:param`).
     *
     * - *A parameter RegExp* may be defined for a param after a colon
     * (`/somePath/{param:[a-zA-Z0-9]+}`) in a curly brace placeholder.
     * The regexp must match for the url to be matched.
     * Should the regexp itself contain curly braces, they must be in matched pairs or escaped with a backslash.
     *
     * Note: a RegExp parameter will encode its value using either [[ParamTypes.path]] or [[ParamTypes.query]].
     *
     * - *Custom parameter types* may also be specified after a colon (`/somePath/{param:int}`) in curly brace parameters.
     *   See [[UrlMatcherFactory.type]] for more information.
     *
     * - *Catch-all parameters* are defined using an asterisk placeholder (`/somepath/*catchallparam`).
     *   A catch-all * parameter value will contain the remainder of the URL.
     *
     * ---
     *
     * Parameter names may contain only word characters (latin letters, digits, and underscore) and
     * must be unique within the pattern (across both path and search parameters).
     * A path parameter matches any number of characters other than '/'. For catch-all
     * placeholders the path parameter matches any number of characters.
     *
     * Examples:
     *
     * * `'/hello/'` - Matches only if the path is exactly '/hello/'. There is no special treatment for
     *   trailing slashes, and patterns have to match the entire path, not just a prefix.
     * * `'/user/:id'` - Matches '/user/bob' or '/user/1234!!!' or even '/user/' but not '/user' or
     *   '/user/bob/details'. The second path segment will be captured as the parameter 'id'.
     * * `'/user/{id}'` - Same as the previous example, but using curly brace syntax.
     * * `'/user/{id:[^/]*}'` - Same as the previous example.
     * * `'/user/{id:[0-9a-fA-F]{1,8}}'` - Similar to the previous example, but only matches if the id
     *   parameter consists of 1 to 8 hex digits.
     * * `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
     *   path into the parameter 'path'.
     * * `'/files/*path'` - ditto.
     * * `'/calendar/{start:date}'` - Matches "/calendar/2014-11-12" (because the pattern defined
     *   in the built-in  `date` ParamType matches `2014-11-12`) and provides a Date object in $stateParams.start
     *
     */
    var UrlMatcher = /** @class */ (function () {
        /**
         * @param pattern The pattern to compile into a matcher.
         * @param paramTypes The [[ParamTypes]] registry
         * @param config  A configuration object
         * - `caseInsensitive` - `true` if URL matching should be case insensitive, otherwise `false`, the default value (for backward compatibility) is `false`.
         * - `strict` - `false` if matching against a URL with a trailing slash should be treated as equivalent to a URL without a trailing slash, the default value is `true`.
         */
        function UrlMatcher(pattern$$1, paramTypes, paramFactory, config) {
            var _this = this;
            this.config = config;
            /** @hidden */
            this._cache = { path: [this] };
            /** @hidden */
            this._children = [];
            /** @hidden */
            this._params = [];
            /** @hidden */
            this._segments = [];
            /** @hidden */
            this._compiled = [];
            this.pattern = pattern$$1;
            this.config = defaults(this.config, {
                params: {},
                strict: true,
                caseInsensitive: false,
                paramMap: identity,
            });
            // Find all placeholders and create a compiled pattern, using either classic or curly syntax:
            //   '*' name
            //   ':' name
            //   '{' name '}'
            //   '{' name ':' regexp '}'
            // The regular expression is somewhat complicated due to the need to allow curly braces
            // inside the regular expression. The placeholder regexp breaks down as follows:
            //    ([:*])([\w\[\]]+)              - classic placeholder ($1 / $2) (search version has - for snake-case)
            //    \{([\w\[\]]+)(?:\:\s*( ... ))?\}  - curly brace placeholder ($3) with optional regexp/type ... ($4) (search version has - for snake-case
            //    (?: ... | ... | ... )+         - the regexp consists of any number of atoms, an atom being either
            //    [^{}\\]+                       - anything other than curly braces or backslash
            //    \\.                            - a backslash escape
            //    \{(?:[^{}\\]+|\\.)*\}          - a matched set of curly braces containing other atoms
            var placeholder = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
            var searchPlaceholder = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g;
            var patterns = [];
            var last = 0, matchArray;
            var checkParamErrors = function (id) {
                if (!UrlMatcher.nameValidator.test(id))
                    throw new Error("Invalid parameter name '" + id + "' in pattern '" + pattern$$1 + "'");
                if (find(_this._params, propEq('id', id)))
                    throw new Error("Duplicate parameter name '" + id + "' in pattern '" + pattern$$1 + "'");
            };
            // Split into static segments separated by path parameter placeholders.
            // The number of segments is always 1 more than the number of parameters.
            var matchDetails = function (m, isSearch) {
                // IE[78] returns '' for unmatched groups instead of null
                var id = m[2] || m[3];
                var regexp = isSearch ? m[4] : m[4] || (m[1] === '*' ? '[\\s\\S]*' : null);
                var makeRegexpType = function (str) {
                    return inherit(paramTypes.type(isSearch ? 'query' : 'path'), {
                        pattern: new RegExp(str, _this.config.caseInsensitive ? 'i' : undefined),
                    });
                };
                return {
                    id: id,
                    regexp: regexp,
                    cfg: _this.config.params[id],
                    segment: pattern$$1.substring(last, m.index),
                    type: !regexp ? null : paramTypes.type(regexp) || makeRegexpType(regexp),
                };
            };
            var p, segment;
            // tslint:disable-next-line:no-conditional-assignment
            while ((matchArray = placeholder.exec(pattern$$1))) {
                p = matchDetails(matchArray, false);
                if (p.segment.indexOf('?') >= 0)
                    break; // we're into the search part
                checkParamErrors(p.id);
                this._params.push(paramFactory.fromPath(p.id, p.type, this.config.paramMap(p.cfg, false)));
                this._segments.push(p.segment);
                patterns.push([p.segment, tail(this._params)]);
                last = placeholder.lastIndex;
            }
            segment = pattern$$1.substring(last);
            // Find any search parameter names and remove them from the last segment
            var i = segment.indexOf('?');
            if (i >= 0) {
                var search = segment.substring(i);
                segment = segment.substring(0, i);
                if (search.length > 0) {
                    last = 0;
                    // tslint:disable-next-line:no-conditional-assignment
                    while ((matchArray = searchPlaceholder.exec(search))) {
                        p = matchDetails(matchArray, true);
                        checkParamErrors(p.id);
                        this._params.push(paramFactory.fromSearch(p.id, p.type, this.config.paramMap(p.cfg, true)));
                        last = placeholder.lastIndex;
                        // check if ?&
                    }
                }
            }
            this._segments.push(segment);
            this._compiled = patterns.map(function (_pattern) { return quoteRegExp.apply(null, _pattern); }).concat(quoteRegExp(segment));
        }
        /** @hidden */
        UrlMatcher.encodeDashes = function (str) {
            // Replace dashes with encoded "\-"
            return encodeURIComponent(str).replace(/-/g, function (c) {
                return "%5C%" + c
                    .charCodeAt(0)
                    .toString(16)
                    .toUpperCase();
            });
        };
        /** @hidden Given a matcher, return an array with the matcher's path segments and path params, in order */
        UrlMatcher.pathSegmentsAndParams = function (matcher) {
            var staticSegments = matcher._segments;
            var pathParams = matcher._params.filter(function (p) { return p.location === exports.DefType.PATH; });
            return arrayTuples(staticSegments, pathParams.concat(undefined))
                .reduce(unnestR, [])
                .filter(function (x) { return x !== '' && isDefined(x); });
        };
        /** @hidden Given a matcher, return an array with the matcher's query params */
        UrlMatcher.queryParams = function (matcher) {
            return matcher._params.filter(function (p) { return p.location === exports.DefType.SEARCH; });
        };
        /**
         * Compare two UrlMatchers
         *
         * This comparison function converts a UrlMatcher into static and dynamic path segments.
         * Each static path segment is a static string between a path separator (slash character).
         * Each dynamic segment is a path parameter.
         *
         * The comparison function sorts static segments before dynamic ones.
         */
        UrlMatcher.compare = function (a, b) {
            /**
             * Turn a UrlMatcher and all its parent matchers into an array
             * of slash literals '/', string literals, and Param objects
             *
             * This example matcher matches strings like "/foo/:param/tail":
             * var matcher = $umf.compile("/foo").append($umf.compile("/:param")).append($umf.compile("/")).append($umf.compile("tail"));
             * var result = segments(matcher); // [ '/', 'foo', '/', Param, '/', 'tail' ]
             *
             * Caches the result as `matcher._cache.segments`
             */
            var segments = function (matcher) {
                return (matcher._cache.segments =
                    matcher._cache.segments ||
                        matcher._cache.path
                            .map(UrlMatcher.pathSegmentsAndParams)
                            .reduce(unnestR, [])
                            .reduce(joinNeighborsR, [])
                            .map(function (x) { return (isString(x) ? splitOnSlash(x) : x); })
                            .reduce(unnestR, []));
            };
            /**
             * Gets the sort weight for each segment of a UrlMatcher
             *
             * Caches the result as `matcher._cache.weights`
             */
            var weights = function (matcher) {
                return (matcher._cache.weights =
                    matcher._cache.weights ||
                        segments(matcher).map(function (segment) {
                            // Sort slashes first, then static strings, the Params
                            if (segment === '/')
                                return 1;
                            if (isString(segment))
                                return 2;
                            if (segment instanceof Param)
                                return 3;
                        }));
            };
            /**
             * Pads shorter array in-place (mutates)
             */
            var padArrays = function (l, r, padVal) {
                var len = Math.max(l.length, r.length);
                while (l.length < len)
                    l.push(padVal);
                while (r.length < len)
                    r.push(padVal);
            };
            var weightsA = weights(a), weightsB = weights(b);
            padArrays(weightsA, weightsB, 0);
            var _pairs = arrayTuples(weightsA, weightsB);
            var cmp, i;
            for (i = 0; i < _pairs.length; i++) {
                cmp = _pairs[i][0] - _pairs[i][1];
                if (cmp !== 0)
                    return cmp;
            }
            return 0;
        };
        /**
         * Creates a new concatenated UrlMatcher
         *
         * Builds a new UrlMatcher by appending another UrlMatcher to this one.
         *
         * @param url A `UrlMatcher` instance to append as a child of the current `UrlMatcher`.
         */
        UrlMatcher.prototype.append = function (url) {
            this._children.push(url);
            url._cache = {
                path: this._cache.path.concat(url),
                parent: this,
                pattern: null,
            };
            return url;
        };
        /** @hidden */
        UrlMatcher.prototype.isRoot = function () {
            return this._cache.path[0] === this;
        };
        /** Returns the input pattern string */
        UrlMatcher.prototype.toString = function () {
            return this.pattern;
        };
        /**
         * Tests the specified url/path against this matcher.
         *
         * Tests if the given url matches this matcher's pattern, and returns an object containing the captured
         * parameter values.  Returns null if the path does not match.
         *
         * The returned object contains the values
         * of any search parameters that are mentioned in the pattern, but their value may be null if
         * they are not present in `search`. This means that search parameters are always treated
         * as optional.
         *
         * #### Example:
         * ```js
         * new UrlMatcher('/user/{id}?q&r').exec('/user/bob', {
         *   x: '1', q: 'hello'
         * });
         * // returns { id: 'bob', q: 'hello', r: null }
         * ```
         *
         * @param path    The URL path to match, e.g. `$location.path()`.
         * @param search  URL search parameters, e.g. `$location.search()`.
         * @param hash    URL hash e.g. `$location.hash()`.
         * @param options
         *
         * @returns The captured parameter values.
         */
        UrlMatcher.prototype.exec = function (path, search, hash, options) {
            var _this = this;
            if (search === void 0) { search = {}; }
            if (options === void 0) { options = {}; }
            var match = memoizeTo(this._cache, 'pattern', function () {
                return new RegExp([
                    '^',
                    unnest(_this._cache.path.map(prop('_compiled'))).join(''),
                    _this.config.strict === false ? '/?' : '',
                    '$',
                ].join(''), _this.config.caseInsensitive ? 'i' : undefined);
            }).exec(path);
            if (!match)
                return null;
            // options = defaults(options, { isolate: false });
            var allParams = this.parameters(), pathParams = allParams.filter(function (param) { return !param.isSearch(); }), searchParams = allParams.filter(function (param) { return param.isSearch(); }), nPathSegments = this._cache.path.map(function (urlm) { return urlm._segments.length - 1; }).reduce(function (a, x) { return a + x; }), values$$1 = {};
            if (nPathSegments !== match.length - 1)
                throw new Error("Unbalanced capture group in route '" + this.pattern + "'");
            function decodePathArray(paramVal) {
                var reverseString = function (str) {
                    return str
                        .split('')
                        .reverse()
                        .join('');
                };
                var unquoteDashes = function (str) { return str.replace(/\\-/g, '-'); };
                var split = reverseString(paramVal).split(/-(?!\\)/);
                var allReversed = map(split, reverseString);
                return map(allReversed, unquoteDashes).reverse();
            }
            for (var i = 0; i < nPathSegments; i++) {
                var param = pathParams[i];
                var value = match[i + 1];
                // if the param value matches a pre-replace pair, replace the value before decoding.
                for (var j = 0; j < param.replace.length; j++) {
                    if (param.replace[j].from === value)
                        value = param.replace[j].to;
                }
                if (value && param.array === true)
                    value = decodePathArray(value);
                if (isDefined(value))
                    value = param.type.decode(value);
                values$$1[param.id] = param.value(value);
            }
            searchParams.forEach(function (param) {
                var value = search[param.id];
                for (var j = 0; j < param.replace.length; j++) {
                    if (param.replace[j].from === value)
                        value = param.replace[j].to;
                }
                if (isDefined(value))
                    value = param.type.decode(value);
                values$$1[param.id] = param.value(value);
            });
            if (hash)
                values$$1['#'] = hash;
            return values$$1;
        };
        /**
         * @hidden
         * Returns all the [[Param]] objects of all path and search parameters of this pattern in order of appearance.
         *
         * @returns {Array.<Param>}  An array of [[Param]] objects. Must be treated as read-only. If the
         *    pattern has no parameters, an empty array is returned.
         */
        UrlMatcher.prototype.parameters = function (opts) {
            if (opts === void 0) { opts = {}; }
            if (opts.inherit === false)
                return this._params;
            return unnest(this._cache.path.map(function (matcher) { return matcher._params; }));
        };
        /**
         * @hidden
         * Returns a single parameter from this UrlMatcher by id
         *
         * @param id
         * @param opts
         * @returns {T|Param|any|boolean|UrlMatcher|null}
         */
        UrlMatcher.prototype.parameter = function (id, opts) {
            var _this = this;
            if (opts === void 0) { opts = {}; }
            var findParam = function () {
                for (var _i = 0, _a = _this._params; _i < _a.length; _i++) {
                    var param = _a[_i];
                    if (param.id === id)
                        return param;
                }
            };
            var parent = this._cache.parent;
            return findParam() || (opts.inherit !== false && parent && parent.parameter(id, opts)) || null;
        };
        /**
         * Validates the input parameter values against this UrlMatcher
         *
         * Checks an object hash of parameters to validate their correctness according to the parameter
         * types of this `UrlMatcher`.
         *
         * @param params The object hash of parameters to validate.
         * @returns Returns `true` if `params` validates, otherwise `false`.
         */
        UrlMatcher.prototype.validates = function (params) {
            var validParamVal = function (param, val$$1) { return !param || param.validates(val$$1); };
            params = params || {};
            // I'm not sure why this checks only the param keys passed in, and not all the params known to the matcher
            var paramSchema = this.parameters().filter(function (paramDef) { return params.hasOwnProperty(paramDef.id); });
            return paramSchema.map(function (paramDef) { return validParamVal(paramDef, params[paramDef.id]); }).reduce(allTrueR, true);
        };
        /**
         * Given a set of parameter values, creates a URL from this UrlMatcher.
         *
         * Creates a URL that matches this pattern by substituting the specified values
         * for the path and search parameters.
         *
         * #### Example:
         * ```js
         * new UrlMatcher('/user/{id}?q').format({ id:'bob', q:'yes' });
         * // returns '/user/bob?q=yes'
         * ```
         *
         * @param values  the values to substitute for the parameters in this pattern.
         * @returns the formatted URL (path and optionally search part).
         */
        UrlMatcher.prototype.format = function (values$$1) {
            if (values$$1 === void 0) { values$$1 = {}; }
            // Build the full path of UrlMatchers (including all parent UrlMatchers)
            var urlMatchers = this._cache.path;
            // Extract all the static segments and Params (processed as ParamDetails)
            // into an ordered array
            var pathSegmentsAndParams = urlMatchers
                .map(UrlMatcher.pathSegmentsAndParams)
                .reduce(unnestR, [])
                .map(function (x) { return (isString(x) ? x : getDetails(x)); });
            // Extract the query params into a separate array
            var queryParams = urlMatchers
                .map(UrlMatcher.queryParams)
                .reduce(unnestR, [])
                .map(getDetails);
            var isInvalid = function (param) { return param.isValid === false; };
            if (pathSegmentsAndParams.concat(queryParams).filter(isInvalid).length) {
                return null;
            }
            /**
             * Given a Param, applies the parameter value, then returns detailed information about it
             */
            function getDetails(param) {
                // Normalize to typed value
                var value = param.value(values$$1[param.id]);
                var isValid = param.validates(value);
                var isDefaultValue = param.isDefaultValue(value);
                // Check if we're in squash mode for the parameter
                var squash = isDefaultValue ? param.squash : false;
                // Allow the Parameter's Type to encode the value
                var encoded = param.type.encode(value);
                return { param: param, value: value, isValid: isValid, isDefaultValue: isDefaultValue, squash: squash, encoded: encoded };
            }
            // Build up the path-portion from the list of static segments and parameters
            var pathString = pathSegmentsAndParams.reduce(function (acc, x) {
                // The element is a static segment (a raw string); just append it
                if (isString(x))
                    return acc + x;
                // Otherwise, it's a ParamDetails.
                var squash = x.squash, encoded = x.encoded, param = x.param;
                // If squash is === true, try to remove a slash from the path
                if (squash === true)
                    return acc.match(/\/$/) ? acc.slice(0, -1) : acc;
                // If squash is a string, use the string for the param value
                if (isString(squash))
                    return acc + squash;
                if (squash !== false)
                    return acc; // ?
                if (encoded == null)
                    return acc;
                // If this parameter value is an array, encode the value using encodeDashes
                if (isArray(encoded))
                    return acc + map(encoded, UrlMatcher.encodeDashes).join('-');
                // If the parameter type is "raw", then do not encodeURIComponent
                if (param.raw)
                    return acc + encoded;
                // Encode the value
                return acc + encodeURIComponent(encoded);
            }, '');
            // Build the query string by applying parameter values (array or regular)
            // then mapping to key=value, then flattening and joining using "&"
            var queryString = queryParams
                .map(function (paramDetails) {
                var param = paramDetails.param, squash = paramDetails.squash, encoded = paramDetails.encoded, isDefaultValue = paramDetails.isDefaultValue;
                if (encoded == null || (isDefaultValue && squash !== false))
                    return;
                if (!isArray(encoded))
                    encoded = [encoded];
                if (encoded.length === 0)
                    return;
                if (!param.raw)
                    encoded = map(encoded, encodeURIComponent);
                return encoded.map(function (val$$1) { return param.id + "=" + val$$1; });
            })
                .filter(identity)
                .reduce(unnestR, [])
                .join('&');
            // Concat the pathstring with the queryString (if exists) and the hashString (if exists)
            return pathString + (queryString ? "?" + queryString : '') + (values$$1['#'] ? '#' + values$$1['#'] : '');
        };
        /** @hidden */
        UrlMatcher.nameValidator = /^\w+([-.]+\w+)*(?:\[\])?$/;
        return UrlMatcher;
    }());

    /**
     * @internalapi
     * @module url
     */ /** for typedoc */
    /**
     * Factory for [[UrlMatcher]] instances.
     *
     * The factory is available to ng1 services as
     * `$urlMatcherFactory` or ng1 providers as `$urlMatcherFactoryProvider`.
     */
    var UrlMatcherFactory = /** @class */ (function () {
        function UrlMatcherFactory() {
            var _this = this;
            /** @hidden */ this.paramTypes = new ParamTypes();
            /** @hidden */ this._isCaseInsensitive = false;
            /** @hidden */ this._isStrictMode = true;
            /** @hidden */ this._defaultSquashPolicy = false;
            /** @internalapi Creates a new [[Param]] for a given location (DefType) */
            this.paramFactory = {
                /** Creates a new [[Param]] from a CONFIG block */
                fromConfig: function (id, type, config) { return new Param(id, type, config, exports.DefType.CONFIG, _this); },
                /** Creates a new [[Param]] from a url PATH */
                fromPath: function (id, type, config) { return new Param(id, type, config, exports.DefType.PATH, _this); },
                /** Creates a new [[Param]] from a url SEARCH */
                fromSearch: function (id, type, config) { return new Param(id, type, config, exports.DefType.SEARCH, _this); },
            };
            /** @hidden */
            this._getConfig = function (config) {
                return extend({ strict: _this._isStrictMode, caseInsensitive: _this._isCaseInsensitive }, config);
            };
            extend(this, { UrlMatcher: UrlMatcher, Param: Param });
        }
        /** @inheritdoc */
        UrlMatcherFactory.prototype.caseInsensitive = function (value) {
            return (this._isCaseInsensitive = isDefined(value) ? value : this._isCaseInsensitive);
        };
        /** @inheritdoc */
        UrlMatcherFactory.prototype.strictMode = function (value) {
            return (this._isStrictMode = isDefined(value) ? value : this._isStrictMode);
        };
        /** @inheritdoc */
        UrlMatcherFactory.prototype.defaultSquashPolicy = function (value) {
            if (isDefined(value) && value !== true && value !== false && !isString(value))
                throw new Error("Invalid squash policy: " + value + ". Valid policies: false, true, arbitrary-string");
            return (this._defaultSquashPolicy = isDefined(value) ? value : this._defaultSquashPolicy);
        };
        /**
         * Creates a [[UrlMatcher]] for the specified pattern.
         *
         * @param pattern  The URL pattern.
         * @param config  The config object hash.
         * @returns The UrlMatcher.
         */
        UrlMatcherFactory.prototype.compile = function (pattern, config) {
            return new UrlMatcher(pattern, this.paramTypes, this.paramFactory, this._getConfig(config));
        };
        /**
         * Returns true if the specified object is a [[UrlMatcher]], or false otherwise.
         *
         * @param object  The object to perform the type check against.
         * @returns `true` if the object matches the `UrlMatcher` interface, by
         *          implementing all the same methods.
         */
        UrlMatcherFactory.prototype.isMatcher = function (object) {
            // TODO: typeof?
            if (!isObject(object))
                return false;
            var result = true;
            forEach(UrlMatcher.prototype, function (val, name) {
                if (isFunction(val))
                    result = result && (isDefined(object[name]) && isFunction(object[name]));
            });
            return result;
        };
        /**
         * Creates and registers a custom [[ParamType]] object
         *
         * A [[ParamType]] can be used to generate URLs with typed parameters.
         *
         * @param name  The type name.
         * @param definition The type definition. See [[ParamTypeDefinition]] for information on the values accepted.
         * @param definitionFn A function that is injected before the app runtime starts.
         *        The result of this function should be a [[ParamTypeDefinition]].
         *        The result is merged into the existing `definition`.
         *        See [[ParamType]] for information on the values accepted.
         *
         * @returns - if a type was registered: the [[UrlMatcherFactory]]
         *   - if only the `name` parameter was specified: the currently registered [[ParamType]] object, or undefined
         *
         * Note: Register custom types *before using them* in a state definition.
         *
         * See [[ParamTypeDefinition]] for examples
         */
        UrlMatcherFactory.prototype.type = function (name, definition, definitionFn) {
            var type = this.paramTypes.type(name, definition, definitionFn);
            return !isDefined(definition) ? type : this;
        };
        /** @hidden */
        UrlMatcherFactory.prototype.$get = function () {
            this.paramTypes.enqueue = false;
            this.paramTypes._flushTypeQueue();
            return this;
        };
        /** @internalapi */
        UrlMatcherFactory.prototype.dispose = function () {
            this.paramTypes.dispose();
        };
        return UrlMatcherFactory;
    }());

    /**
     * @coreapi
     * @module url
     */ /** */
    /**
     * Creates a [[UrlRule]]
     *
     * Creates a [[UrlRule]] from a:
     *
     * - `string`
     * - [[UrlMatcher]]
     * - `RegExp`
     * - [[StateObject]]
     * @internalapi
     */
    var UrlRuleFactory = /** @class */ (function () {
        function UrlRuleFactory(router) {
            this.router = router;
        }
        UrlRuleFactory.prototype.compile = function (str) {
            return this.router.urlMatcherFactory.compile(str);
        };
        UrlRuleFactory.prototype.create = function (what, handler) {
            var _this = this;
            var makeRule = pattern([
                [isString, function (_what) { return makeRule(_this.compile(_what)); }],
                [is(UrlMatcher), function (_what) { return _this.fromUrlMatcher(_what, handler); }],
                [isState, function (_what) { return _this.fromState(_what, _this.router); }],
                [is(RegExp), function (_what) { return _this.fromRegExp(_what, handler); }],
                [isFunction, function (_what) { return new BaseUrlRule(_what, handler); }],
            ]);
            var rule = makeRule(what);
            if (!rule)
                throw new Error("invalid 'what' in when()");
            return rule;
        };
        /**
         * A UrlRule which matches based on a UrlMatcher
         *
         * The `handler` may be either a `string`, a [[UrlRuleHandlerFn]] or another [[UrlMatcher]]
         *
         * ## Handler as a function
         *
         * If `handler` is a function, the function is invoked with:
         *
         * - matched parameter values ([[RawParams]] from [[UrlMatcher.exec]])
         * - url: the current Url ([[UrlParts]])
         * - router: the router object ([[UIRouter]])
         *
         * #### Example:
         * ```js
         * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
         * var rule = factory.fromUrlMatcher(urlMatcher, match => "/home/" + match.fooId + "/" + match.barId);
         * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
         * var result = rule.handler(match); // '/home/123/456'
         * ```
         *
         * ## Handler as UrlMatcher
         *
         * If `handler` is a UrlMatcher, the handler matcher is used to create the new url.
         * The `handler` UrlMatcher is formatted using the matched param from the first matcher.
         * The url is replaced with the result.
         *
         * #### Example:
         * ```js
         * var urlMatcher = $umf.compile("/foo/:fooId/:barId");
         * var handler = $umf.compile("/home/:fooId/:barId");
         * var rule = factory.fromUrlMatcher(urlMatcher, handler);
         * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
         * var result = rule.handler(match); // '/home/123/456'
         * ```
         */
        UrlRuleFactory.prototype.fromUrlMatcher = function (urlMatcher, handler) {
            var _handler = handler;
            if (isString(handler))
                handler = this.router.urlMatcherFactory.compile(handler);
            if (is(UrlMatcher)(handler))
                _handler = function (match) { return handler.format(match); };
            function matchUrlParamters(url) {
                var params = urlMatcher.exec(url.path, url.search, url.hash);
                return urlMatcher.validates(params) && params;
            }
            // Prioritize URLs, lowest to highest:
            // - Some optional URL parameters, but none matched
            // - No optional parameters in URL
            // - Some optional parameters, some matched
            // - Some optional parameters, all matched
            function matchPriority(params) {
                var optional = urlMatcher.parameters().filter(function (param) { return param.isOptional; });
                if (!optional.length)
                    return 0.000001;
                var matched = optional.filter(function (param) { return params[param.id]; });
                return matched.length / optional.length;
            }
            var details = { urlMatcher: urlMatcher, matchPriority: matchPriority, type: 'URLMATCHER' };
            return extend(new BaseUrlRule(matchUrlParamters, _handler), details);
        };
        /**
         * A UrlRule which matches a state by its url
         *
         * #### Example:
         * ```js
         * var rule = factory.fromState($state.get('foo'), router);
         * var match = rule.match('/foo/123/456'); // results in { fooId: '123', barId: '456' }
         * var result = rule.handler(match);
         * // Starts a transition to 'foo' with params: { fooId: '123', barId: '456' }
         * ```
         */
        UrlRuleFactory.prototype.fromState = function (state, router) {
            /**
             * Handles match by transitioning to matched state
             *
             * First checks if the router should start a new transition.
             * A new transition is not required if the current state's URL
             * and the new URL are already identical
             */
            var handler = function (match) {
                var $state = router.stateService;
                var globals = router.globals;
                if ($state.href(state, match) !== $state.href(globals.current, globals.params)) {
                    $state.transitionTo(state, match, { inherit: true, source: 'url' });
                }
            };
            var details = { state: state, type: 'STATE' };
            return extend(this.fromUrlMatcher(state.url, handler), details);
        };
        /**
         * A UrlRule which matches based on a regular expression
         *
         * The `handler` may be either a [[UrlRuleHandlerFn]] or a string.
         *
         * ## Handler as a function
         *
         * If `handler` is a function, the function is invoked with:
         *
         * - regexp match array (from `regexp`)
         * - url: the current Url ([[UrlParts]])
         * - router: the router object ([[UIRouter]])
         *
         * #### Example:
         * ```js
         * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, match => "/home/" + match[1])
         * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
         * var result = rule.handler(match); // '/home/bar'
         * ```
         *
         * ## Handler as string
         *
         * If `handler` is a string, the url is *replaced by the string* when the Rule is invoked.
         * The string is first interpolated using `string.replace()` style pattern.
         *
         * #### Example:
         * ```js
         * var rule = factory.fromRegExp(/^\/foo\/(bar|baz)$/, "/home/$1")
         * var match = rule.match('/foo/bar'); // results in [ '/foo/bar', 'bar' ]
         * var result = rule.handler(match); // '/home/bar'
         * ```
         */
        UrlRuleFactory.prototype.fromRegExp = function (regexp, handler) {
            if (regexp.global || regexp.sticky)
                throw new Error('Rule RegExp must not be global or sticky');
            /**
             * If handler is a string, the url will be replaced by the string.
             * If the string has any String.replace() style variables in it (like `$2`),
             * they will be replaced by the captures from [[match]]
             */
            var redirectUrlTo = function (match) {
                // Interpolates matched values into $1 $2, etc using a String.replace()-style pattern
                return handler.replace(/\$(\$|\d{1,2})/, function (m, what) { return match[what === '$' ? 0 : Number(what)]; });
            };
            var _handler = isString(handler) ? redirectUrlTo : handler;
            var matchParamsFromRegexp = function (url) { return regexp.exec(url.path); };
            var details = { regexp: regexp, type: 'REGEXP' };
            return extend(new BaseUrlRule(matchParamsFromRegexp, _handler), details);
        };
        UrlRuleFactory.isUrlRule = function (obj) { return obj && ['type', 'match', 'handler'].every(function (key) { return isDefined(obj[key]); }); };
        return UrlRuleFactory;
    }());
    /**
     * A base rule which calls `match`
     *
     * The value from the `match` function is passed through to the `handler`.
     * @internalapi
     */
    var BaseUrlRule = /** @class */ (function () {
        function BaseUrlRule(match, handler) {
            var _this = this;
            this.match = match;
            this.type = 'RAW';
            this.matchPriority = function (match) { return 0 - _this.$id; };
            this.handler = handler || identity;
        }
        return BaseUrlRule;
    }());

    /**
     * @internalapi
     * @module url
     */
    /** @hidden */
    function appendBasePath(url, isHtml5, absolute, baseHref) {
        if (baseHref === '/')
            return url;
        if (isHtml5)
            return stripLastPathElement(baseHref) + url;
        if (absolute)
            return baseHref.slice(1) + url;
        return url;
    }
    /** @hidden */
    var prioritySort = function (a, b) { return (b.priority || 0) - (a.priority || 0); };
    /** @hidden */
    var typeSort = function (a, b) {
        var weights = { STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1 };
        return (weights[a.type] || 0) - (weights[b.type] || 0);
    };
    /** @hidden */
    var urlMatcherSort = function (a, b) {
        return !a.urlMatcher || !b.urlMatcher ? 0 : UrlMatcher.compare(a.urlMatcher, b.urlMatcher);
    };
    /** @hidden */
    var idSort = function (a, b) {
        // Identically sorted STATE and URLMATCHER best rule will be chosen by `matchPriority` after each rule matches the URL
        var useMatchPriority = { STATE: true, URLMATCHER: true };
        var equal = useMatchPriority[a.type] && useMatchPriority[b.type];
        return equal ? 0 : (a.$id || 0) - (b.$id || 0);
    };
    /**
     * Default rule priority sorting function.
     *
     * Sorts rules by:
     *
     * - Explicit priority (set rule priority using [[UrlRulesApi.when]])
     * - Rule type (STATE: 4, URLMATCHER: 4, REGEXP: 3, RAW: 2, OTHER: 1)
     * - `UrlMatcher` specificity ([[UrlMatcher.compare]]): works for STATE and URLMATCHER types to pick the most specific rule.
     * - Rule registration order (for rule types other than STATE and URLMATCHER)
     *   - Equally sorted State and UrlMatcher rules will each match the URL.
     *     Then, the *best* match is chosen based on how many parameter values were matched.
     *
     * @coreapi
     */
    var defaultRuleSortFn;
    defaultRuleSortFn = function (a, b) {
        var cmp = prioritySort(a, b);
        if (cmp !== 0)
            return cmp;
        cmp = typeSort(a, b);
        if (cmp !== 0)
            return cmp;
        cmp = urlMatcherSort(a, b);
        if (cmp !== 0)
            return cmp;
        return idSort(a, b);
    };
    /**
     * Updates URL and responds to URL changes
     *
     * ### Deprecation warning:
     * This class is now considered to be an internal API
     * Use the [[UrlService]] instead.
     * For configuring URL rules, use the [[UrlRulesApi]] which can be found as [[UrlService.rules]].
     *
     * This class updates the URL when the state changes.
     * It also responds to changes in the URL.
     */
    var UrlRouter = /** @class */ (function () {
        /** @hidden */
        function UrlRouter(router) {
            /** @hidden */ this._sortFn = defaultRuleSortFn;
            /** @hidden */ this._rules = [];
            /** @hidden */ this.interceptDeferred = false;
            /** @hidden */ this._id = 0;
            /** @hidden */ this._sorted = false;
            this._router = router;
            this.urlRuleFactory = new UrlRuleFactory(router);
            createProxyFunctions(val(UrlRouter.prototype), this, val(this));
        }
        /** @internalapi */
        UrlRouter.prototype.dispose = function () {
            this.listen(false);
            this._rules = [];
            delete this._otherwiseFn;
        };
        /** @inheritdoc */
        UrlRouter.prototype.sort = function (compareFn) {
            this._rules = this.stableSort(this._rules, (this._sortFn = compareFn || this._sortFn));
            this._sorted = true;
        };
        UrlRouter.prototype.ensureSorted = function () {
            this._sorted || this.sort();
        };
        UrlRouter.prototype.stableSort = function (arr, compareFn) {
            var arrOfWrapper = arr.map(function (elem, idx) { return ({ elem: elem, idx: idx }); });
            arrOfWrapper.sort(function (wrapperA, wrapperB) {
                var cmpDiff = compareFn(wrapperA.elem, wrapperB.elem);
                return cmpDiff === 0 ? wrapperA.idx - wrapperB.idx : cmpDiff;
            });
            return arrOfWrapper.map(function (wrapper) { return wrapper.elem; });
        };
        /**
         * Given a URL, check all rules and return the best [[MatchResult]]
         * @param url
         * @returns {MatchResult}
         */
        UrlRouter.prototype.match = function (url) {
            var _this = this;
            this.ensureSorted();
            url = extend({ path: '', search: {}, hash: '' }, url);
            var rules = this.rules();
            if (this._otherwiseFn)
                rules.push(this._otherwiseFn);
            // Checks a single rule. Returns { rule: rule, match: match, weight: weight } if it matched, or undefined
            var checkRule = function (rule) {
                var match = rule.match(url, _this._router);
                return match && { match: match, rule: rule, weight: rule.matchPriority(match) };
            };
            // The rules are pre-sorted.
            // - Find the first matching rule.
            // - Find any other matching rule that sorted *exactly the same*, according to `.sort()`.
            // - Choose the rule with the highest match weight.
            var best;
            for (var i = 0; i < rules.length; i++) {
                // Stop when there is a 'best' rule and the next rule sorts differently than it.
                if (best && this._sortFn(rules[i], best.rule) !== 0)
                    break;
                var current = checkRule(rules[i]);
                // Pick the best MatchResult
                best = !best || (current && current.weight > best.weight) ? current : best;
            }
            return best;
        };
        /** @inheritdoc */
        UrlRouter.prototype.sync = function (evt) {
            if (evt && evt.defaultPrevented)
                return;
            var router = this._router, $url = router.urlService, $state = router.stateService;
            var url = {
                path: $url.path(),
                search: $url.search(),
                hash: $url.hash(),
            };
            var best = this.match(url);
            var applyResult = pattern([
                [isString, function (newurl) { return $url.url(newurl, true); }],
                [TargetState.isDef, function (def) { return $state.go(def.state, def.params, def.options); }],
                [is(TargetState), function (target) { return $state.go(target.state(), target.params(), target.options()); }],
            ]);
            applyResult(best && best.rule.handler(best.match, url, router));
        };
        /** @inheritdoc */
        UrlRouter.prototype.listen = function (enabled) {
            var _this = this;
            if (enabled === false) {
                this._stopFn && this._stopFn();
                delete this._stopFn;
            }
            else {
                return (this._stopFn = this._stopFn || this._router.urlService.onChange(function (evt) { return _this.sync(evt); }));
            }
        };
        /**
         * Internal API.
         * @internalapi
         */
        UrlRouter.prototype.update = function (read) {
            var $url = this._router.locationService;
            if (read) {
                this.location = $url.url();
                return;
            }
            if ($url.url() === this.location)
                return;
            $url.url(this.location, true);
        };
        /**
         * Internal API.
         *
         * Pushes a new location to the browser history.
         *
         * @internalapi
         * @param urlMatcher
         * @param params
         * @param options
         */
        UrlRouter.prototype.push = function (urlMatcher, params, options) {
            var replace = options && !!options.replace;
            this._router.urlService.url(urlMatcher.format(params || {}), replace);
        };
        /**
         * Builds and returns a URL with interpolated parameters
         *
         * #### Example:
         * ```js
         * matcher = $umf.compile("/about/:person");
         * params = { person: "bob" };
         * $bob = $urlRouter.href(matcher, params);
         * // $bob == "/about/bob";
         * ```
         *
         * @param urlMatcher The [[UrlMatcher]] object which is used as the template of the URL to generate.
         * @param params An object of parameter values to fill the matcher's required parameters.
         * @param options Options object. The options are:
         *
         * - **`absolute`** - {boolean=false},  If true will generate an absolute url, e.g. "http://www.example.com/fullurl".
         *
         * @returns Returns the fully compiled URL, or `null` if `params` fail validation against `urlMatcher`
         */
        UrlRouter.prototype.href = function (urlMatcher, params, options) {
            var url = urlMatcher.format(params);
            if (url == null)
                return null;
            options = options || { absolute: false };
            var cfg = this._router.urlService.config;
            var isHtml5 = cfg.html5Mode();
            if (!isHtml5 && url !== null) {
                url = '#' + cfg.hashPrefix() + url;
            }
            url = appendBasePath(url, isHtml5, options.absolute, cfg.baseHref());
            if (!options.absolute || !url) {
                return url;
            }
            var slash = !isHtml5 && url ? '/' : '';
            var cfgPort = cfg.port();
            var port = (cfgPort === 80 || cfgPort === 443 ? '' : ':' + cfgPort);
            return [cfg.protocol(), '://', cfg.host(), port, slash, url].join('');
        };
        /**
         * Manually adds a URL Rule.
         *
         * Usually, a url rule is added using [[StateDeclaration.url]] or [[when]].
         * This api can be used directly for more control (to register a [[BaseUrlRule]], for example).
         * Rules can be created using [[UrlRouter.urlRuleFactory]], or create manually as simple objects.
         *
         * A rule should have a `match` function which returns truthy if the rule matched.
         * It should also have a `handler` function which is invoked if the rule is the best match.
         *
         * @return a function that deregisters the rule
         */
        UrlRouter.prototype.rule = function (rule) {
            var _this = this;
            if (!UrlRuleFactory.isUrlRule(rule))
                throw new Error('invalid rule');
            rule.$id = this._id++;
            rule.priority = rule.priority || 0;
            this._rules.push(rule);
            this._sorted = false;
            return function () { return _this.removeRule(rule); };
        };
        /** @inheritdoc */
        UrlRouter.prototype.removeRule = function (rule) {
            removeFrom(this._rules, rule);
        };
        /** @inheritdoc */
        UrlRouter.prototype.rules = function () {
            this.ensureSorted();
            return this._rules.slice();
        };
        /** @inheritdoc */
        UrlRouter.prototype.otherwise = function (handler) {
            var handlerFn = getHandlerFn(handler);
            this._otherwiseFn = this.urlRuleFactory.create(val(true), handlerFn);
            this._sorted = false;
        };
        /** @inheritdoc */
        UrlRouter.prototype.initial = function (handler) {
            var handlerFn = getHandlerFn(handler);
            var matchFn = function (urlParts, router) {
                return router.globals.transitionHistory.size() === 0 && !!/^\/?$/.exec(urlParts.path);
            };
            this.rule(this.urlRuleFactory.create(matchFn, handlerFn));
        };
        /** @inheritdoc */
        UrlRouter.prototype.when = function (matcher, handler, options) {
            var rule = this.urlRuleFactory.create(matcher, handler);
            if (isDefined(options && options.priority))
                rule.priority = options.priority;
            this.rule(rule);
            return rule;
        };
        /** @inheritdoc */
        UrlRouter.prototype.deferIntercept = function (defer) {
            if (defer === undefined)
                defer = true;
            this.interceptDeferred = defer;
        };
        return UrlRouter;
    }());
    function getHandlerFn(handler) {
        if (!isFunction(handler) && !isString(handler) && !is(TargetState)(handler) && !TargetState.isDef(handler)) {
            throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");
        }
        return isFunction(handler) ? handler : val(handler);
    }

    /**
     * @coreapi
     * @module view
     */ /** for typedoc */
    /**
     * The View service
     *
     * This service pairs existing `ui-view` components (which live in the DOM)
     * with view configs (from the state declaration objects: [[StateDeclaration.views]]).
     *
     * - After a successful Transition, the views from the newly entered states are activated via [[activateViewConfig]].
     *   The views from exited states are deactivated via [[deactivateViewConfig]].
     *   (See: the [[registerActivateViews]] Transition Hook)
     *
     * - As `ui-view` components pop in and out of existence, they register themselves using [[registerUIView]].
     *
     * - When the [[sync]] function is called, the registered `ui-view`(s) ([[ActiveUIView]])
     * are configured with the matching [[ViewConfig]](s)
     *
     */
    var ViewService = /** @class */ (function () {
        function ViewService() {
            var _this = this;
            this._uiViews = [];
            this._viewConfigs = [];
            this._viewConfigFactories = {};
            this._listeners = [];
            this._pluginapi = {
                _rootViewContext: this._rootViewContext.bind(this),
                _viewConfigFactory: this._viewConfigFactory.bind(this),
                _registeredUIViews: function () { return _this._uiViews; },
                _activeViewConfigs: function () { return _this._viewConfigs; },
                _onSync: function (listener) {
                    _this._listeners.push(listener);
                    return function () { return removeFrom(_this._listeners, listener); };
                },
            };
        }
        /**
         * Normalizes a view's name from a state.views configuration block.
         *
         * This should be used by a framework implementation to calculate the values for
         * [[_ViewDeclaration.$uiViewName]] and [[_ViewDeclaration.$uiViewContextAnchor]].
         *
         * @param context the context object (state declaration) that the view belongs to
         * @param rawViewName the name of the view, as declared in the [[StateDeclaration.views]]
         *
         * @returns the normalized uiViewName and uiViewContextAnchor that the view targets
         */
        ViewService.normalizeUIViewTarget = function (context, rawViewName) {
            if (rawViewName === void 0) { rawViewName = ''; }
            // TODO: Validate incoming view name with a regexp to allow:
            // ex: "view.name@foo.bar" , "^.^.view.name" , "view.name@^.^" , "" ,
            // "@" , "$default@^" , "!$default.$default" , "!foo.bar"
            var viewAtContext = rawViewName.split('@');
            var uiViewName = viewAtContext[0] || '$default'; // default to unnamed view
            var uiViewContextAnchor = isString(viewAtContext[1]) ? viewAtContext[1] : '^'; // default to parent context
            // Handle relative view-name sugar syntax.
            // Matches rawViewName "^.^.^.foo.bar" into array: ["^.^.^.foo.bar", "^.^.^", "foo.bar"],
            var relativeViewNameSugar = /^(\^(?:\.\^)*)\.(.*$)/.exec(uiViewName);
            if (relativeViewNameSugar) {
                // Clobbers existing contextAnchor (rawViewName validation will fix this)
                uiViewContextAnchor = relativeViewNameSugar[1]; // set anchor to "^.^.^"
                uiViewName = relativeViewNameSugar[2]; // set view-name to "foo.bar"
            }
            if (uiViewName.charAt(0) === '!') {
                uiViewName = uiViewName.substr(1);
                uiViewContextAnchor = ''; // target absolutely from root
            }
            // handle parent relative targeting "^.^.^"
            var relativeMatch = /^(\^(?:\.\^)*)$/;
            if (relativeMatch.exec(uiViewContextAnchor)) {
                var anchorState = uiViewContextAnchor.split('.').reduce(function (anchor, x) { return anchor.parent; }, context);
                uiViewContextAnchor = anchorState.name;
            }
            else if (uiViewContextAnchor === '.') {
                uiViewContextAnchor = context.name;
            }
            return { uiViewName: uiViewName, uiViewContextAnchor: uiViewContextAnchor };
        };
        ViewService.prototype._rootViewContext = function (context) {
            return (this._rootContext = context || this._rootContext);
        };
        ViewService.prototype._viewConfigFactory = function (viewType, factory) {
            this._viewConfigFactories[viewType] = factory;
        };
        ViewService.prototype.createViewConfig = function (path, decl) {
            var cfgFactory = this._viewConfigFactories[decl.$type];
            if (!cfgFactory)
                throw new Error('ViewService: No view config factory registered for type ' + decl.$type);
            var cfgs = cfgFactory(path, decl);
            return isArray(cfgs) ? cfgs : [cfgs];
        };
        /**
         * Deactivates a ViewConfig.
         *
         * This function deactivates a `ViewConfig`.
         * After calling [[sync]], it will un-pair from any `ui-view` with which it is currently paired.
         *
         * @param viewConfig The ViewConfig view to deregister.
         */
        ViewService.prototype.deactivateViewConfig = function (viewConfig) {
            trace.traceViewServiceEvent('<- Removing', viewConfig);
            removeFrom(this._viewConfigs, viewConfig);
        };
        ViewService.prototype.activateViewConfig = function (viewConfig) {
            trace.traceViewServiceEvent('-> Registering', viewConfig);
            this._viewConfigs.push(viewConfig);
        };
        ViewService.prototype.sync = function () {
            var _this = this;
            var uiViewsByFqn = this._uiViews.map(function (uiv) { return [uiv.fqn, uiv]; }).reduce(applyPairs, {});
            // Return a weighted depth value for a uiView.
            // The depth is the nesting depth of ui-views (based on FQN; times 10,000)
            // plus the depth of the state that is populating the uiView
            function uiViewDepth(uiView) {
                var stateDepth = function (context) { return (context && context.parent ? stateDepth(context.parent) + 1 : 1); };
                return uiView.fqn.split('.').length * 10000 + stateDepth(uiView.creationContext);
            }
            // Return the ViewConfig's context's depth in the context tree.
            function viewConfigDepth(config) {
                var context = config.viewDecl.$context, count = 0;
                while (++count && context.parent)
                    context = context.parent;
                return count;
            }
            // Given a depth function, returns a compare function which can return either ascending or descending order
            var depthCompare = curry(function (depthFn, posNeg, left, right) { return posNeg * (depthFn(left) - depthFn(right)); });
            var matchingConfigPair = function (uiView) {
                var matchingConfigs = _this._viewConfigs.filter(ViewService.matches(uiViewsByFqn, uiView));
                if (matchingConfigs.length > 1) {
                    // This is OK.  Child states can target a ui-view that the parent state also targets (the child wins)
                    // Sort by depth and return the match from the deepest child
                    // console.log(`Multiple matching view configs for ${uiView.fqn}`, matchingConfigs);
                    matchingConfigs.sort(depthCompare(viewConfigDepth, -1)); // descending
                }
                return { uiView: uiView, viewConfig: matchingConfigs[0] };
            };
            var configureUIView = function (tuple) {
                // If a parent ui-view is reconfigured, it could destroy child ui-views.
                // Before configuring a child ui-view, make sure it's still in the active uiViews array.
                if (_this._uiViews.indexOf(tuple.uiView) !== -1)
                    tuple.uiView.configUpdated(tuple.viewConfig);
            };
            // Sort views by FQN and state depth. Process uiviews nearest the root first.
            var uiViewTuples = this._uiViews.sort(depthCompare(uiViewDepth, 1)).map(matchingConfigPair);
            var matchedViewConfigs = uiViewTuples.map(function (tuple) { return tuple.viewConfig; });
            var unmatchedConfigTuples = this._viewConfigs
                .filter(function (config) { return !inArray(matchedViewConfigs, config); })
                .map(function (viewConfig) { return ({ uiView: undefined, viewConfig: viewConfig }); });
            uiViewTuples.forEach(configureUIView);
            var allTuples = uiViewTuples.concat(unmatchedConfigTuples);
            this._listeners.forEach(function (cb) { return cb(allTuples); });
            trace.traceViewSync(allTuples);
        };
        /**
         * Registers a `ui-view` component
         *
         * When a `ui-view` component is created, it uses this method to register itself.
         * After registration the [[sync]] method is used to ensure all `ui-view` are configured with the proper [[ViewConfig]].
         *
         * Note: the `ui-view` component uses the `ViewConfig` to determine what view should be loaded inside the `ui-view`,
         * and what the view's state context is.
         *
         * Note: There is no corresponding `deregisterUIView`.
         *       A `ui-view` should hang on to the return value of `registerUIView` and invoke it to deregister itself.
         *
         * @param uiView The metadata for a UIView
         * @return a de-registration function used when the view is destroyed.
         */
        ViewService.prototype.registerUIView = function (uiView) {
            trace.traceViewServiceUIViewEvent('-> Registering', uiView);
            var uiViews = this._uiViews;
            var fqnAndTypeMatches = function (uiv) { return uiv.fqn === uiView.fqn && uiv.$type === uiView.$type; };
            if (uiViews.filter(fqnAndTypeMatches).length)
                trace.traceViewServiceUIViewEvent('!!!! duplicate uiView named:', uiView);
            uiViews.push(uiView);
            this.sync();
            return function () {
                var idx = uiViews.indexOf(uiView);
                if (idx === -1) {
                    trace.traceViewServiceUIViewEvent('Tried removing non-registered uiView', uiView);
                    return;
                }
                trace.traceViewServiceUIViewEvent('<- Deregistering', uiView);
                removeFrom(uiViews)(uiView);
            };
        };
        /**
         * Returns the list of views currently available on the page, by fully-qualified name.
         *
         * @return {Array} Returns an array of fully-qualified view names.
         */
        ViewService.prototype.available = function () {
            return this._uiViews.map(prop('fqn'));
        };
        /**
         * Returns the list of views on the page containing loaded content.
         *
         * @return {Array} Returns an array of fully-qualified view names.
         */
        ViewService.prototype.active = function () {
            return this._uiViews.filter(prop('$config')).map(prop('name'));
        };
        /**
         * Given a ui-view and a ViewConfig, determines if they "match".
         *
         * A ui-view has a fully qualified name (fqn) and a context object.  The fqn is built from its overall location in
         * the DOM, describing its nesting relationship to any parent ui-view tags it is nested inside of.
         *
         * A ViewConfig has a target ui-view name and a context anchor.  The ui-view name can be a simple name, or
         * can be a segmented ui-view path, describing a portion of a ui-view fqn.
         *
         * In order for a ui-view to match ViewConfig, ui-view's $type must match the ViewConfig's $type
         *
         * If the ViewConfig's target ui-view name is a simple name (no dots), then a ui-view matches if:
         * - the ui-view's name matches the ViewConfig's target name
         * - the ui-view's context matches the ViewConfig's anchor
         *
         * If the ViewConfig's target ui-view name is a segmented name (with dots), then a ui-view matches if:
         * - There exists a parent ui-view where:
         *    - the parent ui-view's name matches the first segment (index 0) of the ViewConfig's target name
         *    - the parent ui-view's context matches the ViewConfig's anchor
         * - And the remaining segments (index 1..n) of the ViewConfig's target name match the tail of the ui-view's fqn
         *
         * Example:
         *
         * DOM:
         * <ui-view>                        <!-- created in the root context (name: "") -->
         *   <ui-view name="foo">                <!-- created in the context named: "A"      -->
         *     <ui-view>                    <!-- created in the context named: "A.B"    -->
         *       <ui-view name="bar">            <!-- created in the context named: "A.B.C"  -->
         *       </ui-view>
         *     </ui-view>
         *   </ui-view>
         * </ui-view>
         *
         * uiViews: [
         *  { fqn: "$default",                  creationContext: { name: "" } },
         *  { fqn: "$default.foo",              creationContext: { name: "A" } },
         *  { fqn: "$default.foo.$default",     creationContext: { name: "A.B" } }
         *  { fqn: "$default.foo.$default.bar", creationContext: { name: "A.B.C" } }
         * ]
         *
         * These four view configs all match the ui-view with the fqn: "$default.foo.$default.bar":
         *
         * - ViewConfig1: { uiViewName: "bar",                       uiViewContextAnchor: "A.B.C" }
         * - ViewConfig2: { uiViewName: "$default.bar",              uiViewContextAnchor: "A.B" }
         * - ViewConfig3: { uiViewName: "foo.$default.bar",          uiViewContextAnchor: "A" }
         * - ViewConfig4: { uiViewName: "$default.foo.$default.bar", uiViewContextAnchor: "" }
         *
         * Using ViewConfig3 as an example, it matches the ui-view with fqn "$default.foo.$default.bar" because:
         * - The ViewConfig's segmented target name is: [ "foo", "$default", "bar" ]
         * - There exists a parent ui-view (which has fqn: "$default.foo") where:
         *    - the parent ui-view's name "foo" matches the first segment "foo" of the ViewConfig's target name
         *    - the parent ui-view's context "A" matches the ViewConfig's anchor context "A"
         * - And the remaining segments [ "$default", "bar" ].join("."_ of the ViewConfig's target name match
         *   the tail of the ui-view's fqn "default.bar"
         *
         * @internalapi
         */
        ViewService.matches = function (uiViewsByFqn, uiView) { return function (viewConfig) {
            // Don't supply an ng1 ui-view with an ng2 ViewConfig, etc
            if (uiView.$type !== viewConfig.viewDecl.$type)
                return false;
            // Split names apart from both viewConfig and uiView into segments
            var vc = viewConfig.viewDecl;
            var vcSegments = vc.$uiViewName.split('.');
            var uivSegments = uiView.fqn.split('.');
            // Check if the tails of the segment arrays match. ex, these arrays' tails match:
            // vc: ["foo", "bar"], uiv fqn: ["$default", "foo", "bar"]
            if (!equals(vcSegments, uivSegments.slice(0 - vcSegments.length)))
                return false;
            // Now check if the fqn ending at the first segment of the viewConfig matches the context:
            // ["$default", "foo"].join(".") == "$default.foo", does the ui-view $default.foo context match?
            var negOffset = 1 - vcSegments.length || undefined;
            var fqnToFirstSegment = uivSegments.slice(0, negOffset).join('.');
            var uiViewContext = uiViewsByFqn[fqnToFirstSegment].creationContext;
            return vc.$uiViewContextAnchor === (uiViewContext && uiViewContext.name);
        }; };
        return ViewService;
    }());

    /**
     * @coreapi
     * @module core
     */ /** */
    /**
     * Global router state
     *
     * This is where we hold the global mutable state such as current state, current
     * params, current transition, etc.
     */
    var UIRouterGlobals = /** @class */ (function () {
        function UIRouterGlobals() {
            /**
             * Current parameter values
             *
             * The parameter values from the latest successful transition
             */
            this.params = new StateParams();
            /** @internalapi */
            this.lastStartedTransitionId = -1;
            /** @internalapi */
            this.transitionHistory = new Queue([], 1);
            /** @internalapi */
            this.successfulTransitions = new Queue([], 1);
        }
        UIRouterGlobals.prototype.dispose = function () {
            this.transitionHistory.clear();
            this.successfulTransitions.clear();
            this.transition = null;
        };
        return UIRouterGlobals;
    }());

    /**
     * @coreapi
     * @module url
     */ /** */
    /** @hidden */
    var makeStub = function (keys) {
        return keys.reduce(function (acc, key) { return ((acc[key] = notImplemented(key)), acc); }, { dispose: noop });
    };
    /** @hidden */
    var locationServicesFns = ['url', 'path', 'search', 'hash', 'onChange'];
    /** @hidden */
    var locationConfigFns = ['port', 'protocol', 'host', 'baseHref', 'html5Mode', 'hashPrefix'];
    /** @hidden */
    var umfFns = ['type', 'caseInsensitive', 'strictMode', 'defaultSquashPolicy'];
    /** @hidden */
    var rulesFns = ['sort', 'when', 'initial', 'otherwise', 'rules', 'rule', 'removeRule'];
    /** @hidden */
    var syncFns = ['deferIntercept', 'listen', 'sync', 'match'];
    /**
     * API for URL management
     */
    var UrlService = /** @class */ (function () {
        /** @hidden */
        function UrlService(router, lateBind) {
            if (lateBind === void 0) { lateBind = true; }
            this.router = router;
            this.rules = {};
            this.config = {};
            // proxy function calls from UrlService to the LocationService/LocationConfig
            var locationServices = function () { return router.locationService; };
            createProxyFunctions(locationServices, this, locationServices, locationServicesFns, lateBind);
            var locationConfig = function () { return router.locationConfig; };
            createProxyFunctions(locationConfig, this.config, locationConfig, locationConfigFns, lateBind);
            var umf = function () { return router.urlMatcherFactory; };
            createProxyFunctions(umf, this.config, umf, umfFns);
            var urlRouter = function () { return router.urlRouter; };
            createProxyFunctions(urlRouter, this.rules, urlRouter, rulesFns);
            createProxyFunctions(urlRouter, this, urlRouter, syncFns);
        }
        UrlService.prototype.url = function (newurl, replace, state) {
            return;
        };
        /** @inheritdoc */
        UrlService.prototype.path = function () {
            return;
        };
        /** @inheritdoc */
        UrlService.prototype.search = function () {
            return;
        };
        /** @inheritdoc */
        UrlService.prototype.hash = function () {
            return;
        };
        /** @inheritdoc */
        UrlService.prototype.onChange = function (callback) {
            return;
        };
        /**
         * Returns the current URL parts
         *
         * This method returns the current URL components as a [[UrlParts]] object.
         *
         * @returns the current url parts
         */
        UrlService.prototype.parts = function () {
            return { path: this.path(), search: this.search(), hash: this.hash() };
        };
        UrlService.prototype.dispose = function () { };
        /** @inheritdoc */
        UrlService.prototype.sync = function (evt) {
            return;
        };
        /** @inheritdoc */
        UrlService.prototype.listen = function (enabled) {
            return;
        };
        /** @inheritdoc */
        UrlService.prototype.deferIntercept = function (defer) {
            return;
        };
        /** @inheritdoc */
        UrlService.prototype.match = function (urlParts) {
            return;
        };
        /** @hidden */
        UrlService.locationServiceStub = makeStub(locationServicesFns);
        /** @hidden */
        UrlService.locationConfigStub = makeStub(locationConfigFns);
        return UrlService;
    }());

    /**
     * @coreapi
     * @module core
     */ /** */
    /** @hidden */
    var _routerInstance = 0;
    /**
     * The master class used to instantiate an instance of UI-Router.
     *
     * UI-Router (for each specific framework) will create an instance of this class during bootstrap.
     * This class instantiates and wires the UI-Router services together.
     *
     * After a new instance of the UIRouter class is created, it should be configured for your app.
     * For instance, app states should be registered with the [[UIRouter.stateRegistry]].
     *
     * ---
     *
     * Normally the framework code will bootstrap UI-Router.
     * If you are bootstrapping UIRouter manually, tell it to monitor the URL by calling
     * [[UrlService.listen]] then [[UrlService.sync]].
     */
    var UIRouter = /** @class */ (function () {
        /**
         * Creates a new `UIRouter` object
         *
         * @param locationService a [[LocationServices]] implementation
         * @param locationConfig a [[LocationConfig]] implementation
         * @internalapi
         */
        function UIRouter(locationService, locationConfig) {
            if (locationService === void 0) { locationService = UrlService.locationServiceStub; }
            if (locationConfig === void 0) { locationConfig = UrlService.locationConfigStub; }
            this.locationService = locationService;
            this.locationConfig = locationConfig;
            /** @hidden */ this.$id = _routerInstance++;
            /** @hidden */ this._disposed = false;
            /** @hidden */ this._disposables = [];
            /** Provides trace information to the console */
            this.trace = trace;
            /** Provides services related to ui-view synchronization */
            this.viewService = new ViewService();
            /** Global router state */
            this.globals = new UIRouterGlobals();
            /** Provides services related to Transitions */
            this.transitionService = new TransitionService(this);
            /**
             * Deprecated for public use. Use [[urlService]] instead.
             * @deprecated Use [[urlService]] instead
             */
            this.urlMatcherFactory = new UrlMatcherFactory();
            /**
             * Deprecated for public use. Use [[urlService]] instead.
             * @deprecated Use [[urlService]] instead
             */
            this.urlRouter = new UrlRouter(this);
            /** Provides a registry for states, and related registration services */
            this.stateRegistry = new StateRegistry(this);
            /** Provides services related to states */
            this.stateService = new StateService(this);
            /** Provides services related to the URL */
            this.urlService = new UrlService(this);
            /** @hidden plugin instances are registered here */
            this._plugins = {};
            this.viewService._pluginapi._rootViewContext(this.stateRegistry.root());
            this.globals.$current = this.stateRegistry.root();
            this.globals.current = this.globals.$current.self;
            this.disposable(this.globals);
            this.disposable(this.stateService);
            this.disposable(this.stateRegistry);
            this.disposable(this.transitionService);
            this.disposable(this.urlRouter);
            this.disposable(locationService);
            this.disposable(locationConfig);
        }
        /** Registers an object to be notified when the router is disposed */
        UIRouter.prototype.disposable = function (disposable) {
            this._disposables.push(disposable);
        };
        /**
         * Disposes this router instance
         *
         * When called, clears resources retained by the router by calling `dispose(this)` on all
         * registered [[disposable]] objects.
         *
         * Or, if a `disposable` object is provided, calls `dispose(this)` on that object only.
         *
         * @param disposable (optional) the disposable to dispose
         */
        UIRouter.prototype.dispose = function (disposable) {
            var _this = this;
            if (disposable && isFunction(disposable.dispose)) {
                disposable.dispose(this);
                return undefined;
            }
            this._disposed = true;
            this._disposables.slice().forEach(function (d) {
                try {
                    typeof d.dispose === 'function' && d.dispose(_this);
                    removeFrom(_this._disposables, d);
                }
                catch (ignored) { }
            });
        };
        /**
         * Adds a plugin to UI-Router
         *
         * This method adds a UI-Router Plugin.
         * A plugin can enhance or change UI-Router behavior using any public API.
         *
         * #### Example:
         * ```js
         * import { MyCoolPlugin } from "ui-router-cool-plugin";
         *
         * var plugin = router.addPlugin(MyCoolPlugin);
         * ```
         *
         * ### Plugin authoring
         *
         * A plugin is simply a class (or constructor function) which accepts a [[UIRouter]] instance and (optionally) an options object.
         *
         * The plugin can implement its functionality using any of the public APIs of [[UIRouter]].
         * For example, it may configure router options or add a Transition Hook.
         *
         * The plugin can then be published as a separate module.
         *
         * #### Example:
         * ```js
         * export class MyAuthPlugin implements UIRouterPlugin {
         *   constructor(router: UIRouter, options: any) {
         *     this.name = "MyAuthPlugin";
         *     let $transitions = router.transitionService;
         *     let $state = router.stateService;
         *
         *     let authCriteria = {
         *       to: (state) => state.data && state.data.requiresAuth
         *     };
         *
         *     function authHook(transition: Transition) {
         *       let authService = transition.injector().get('AuthService');
         *       if (!authService.isAuthenticated()) {
         *         return $state.target('login');
         *       }
         *     }
         *
         *     $transitions.onStart(authCriteria, authHook);
         *   }
         * }
         * ```
         *
         * @param plugin one of:
         *        - a plugin class which implements [[UIRouterPlugin]]
         *        - a constructor function for a [[UIRouterPlugin]] which accepts a [[UIRouter]] instance
         *        - a factory function which accepts a [[UIRouter]] instance and returns a [[UIRouterPlugin]] instance
         * @param options options to pass to the plugin class/factory
         * @returns the registered plugin instance
         */
        UIRouter.prototype.plugin = function (plugin, options) {
            if (options === void 0) { options = {}; }
            var pluginInstance = new plugin(this, options);
            if (!pluginInstance.name)
                throw new Error('Required property `name` missing on plugin: ' + pluginInstance);
            this._disposables.push(pluginInstance);
            return (this._plugins[pluginInstance.name] = pluginInstance);
        };
        UIRouter.prototype.getPlugin = function (pluginName) {
            return pluginName ? this._plugins[pluginName] : values(this._plugins);
        };
        return UIRouter;
    }());

    /** @module hooks */ /** */
    function addCoreResolvables(trans) {
        trans.addResolvable(Resolvable.fromData(UIRouter, trans.router), '');
        trans.addResolvable(Resolvable.fromData(Transition, trans), '');
        trans.addResolvable(Resolvable.fromData('$transition$', trans), '');
        trans.addResolvable(Resolvable.fromData('$stateParams', trans.params()), '');
        trans.entering().forEach(function (state) {
            trans.addResolvable(Resolvable.fromData('$state$', state), state);
        });
    }
    var registerAddCoreResolvables = function (transitionService) {
        return transitionService.onCreate({}, addCoreResolvables);
    };
    var TRANSITION_TOKENS = ['$transition$', Transition];
    var isTransition = inArray(TRANSITION_TOKENS);
    // References to Transition in the treeChanges pathnodes makes all
    // previous Transitions reachable in memory, causing a memory leak
    // This function removes resolves for '$transition$' and `Transition` from the treeChanges.
    // Do not use this on current transitions, only on old ones.
    var treeChangesCleanup = function (trans) {
        var nodes = values(trans.treeChanges())
            .reduce(unnestR, [])
            .reduce(uniqR, []);
        // If the resolvable is a Transition, return a new resolvable with null data
        var replaceTransitionWithNull = function (r) {
            return isTransition(r.token) ? Resolvable.fromData(r.token, null) : r;
        };
        nodes.forEach(function (node) {
            node.resolvables = node.resolvables.map(replaceTransitionWithNull);
        });
    };

    /** @module hooks */ /** */
    /**
     * A [[TransitionHookFn]] that redirects to a different state or params
     *
     * Registered using `transitionService.onStart({ to: (state) => !!state.redirectTo }, redirectHook);`
     *
     * See [[StateDeclaration.redirectTo]]
     */
    var redirectToHook = function (trans) {
        var redirect = trans.to().redirectTo;
        if (!redirect)
            return;
        var $state = trans.router.stateService;
        function handleResult(result) {
            if (!result)
                return;
            if (result instanceof TargetState)
                return result;
            if (isString(result))
                return $state.target(result, trans.params(), trans.options());
            if (result['state'] || result['params'])
                return $state.target(result['state'] || trans.to(), result['params'] || trans.params(), trans.options());
        }
        if (isFunction(redirect)) {
            return services.$q.when(redirect(trans)).then(handleResult);
        }
        return handleResult(redirect);
    };
    var registerRedirectToHook = function (transitionService) {
        return transitionService.onStart({ to: function (state) { return !!state.redirectTo; } }, redirectToHook);
    };

    /**
     * A factory which creates an onEnter, onExit or onRetain transition hook function
     *
     * The returned function invokes the (for instance) state.onEnter hook when the
     * state is being entered.
     *
     * @hidden
     */
    function makeEnterExitRetainHook(hookName) {
        return function (transition, state) {
            var _state = state.$$state();
            var hookFn = _state[hookName];
            return hookFn(transition, state);
        };
    }
    /**
     * The [[TransitionStateHookFn]] for onExit
     *
     * When the state is being exited, the state's .onExit function is invoked.
     *
     * Registered using `transitionService.onExit({ exiting: (state) => !!state.onExit }, onExitHook);`
     *
     * See: [[IHookRegistry.onExit]]
     */
    var onExitHook = makeEnterExitRetainHook('onExit');
    var registerOnExitHook = function (transitionService) {
        return transitionService.onExit({ exiting: function (state) { return !!state.onExit; } }, onExitHook);
    };
    /**
     * The [[TransitionStateHookFn]] for onRetain
     *
     * When the state was already entered, and is not being exited or re-entered, the state's .onRetain function is invoked.
     *
     * Registered using `transitionService.onRetain({ retained: (state) => !!state.onRetain }, onRetainHook);`
     *
     * See: [[IHookRegistry.onRetain]]
     */
    var onRetainHook = makeEnterExitRetainHook('onRetain');
    var registerOnRetainHook = function (transitionService) {
        return transitionService.onRetain({ retained: function (state) { return !!state.onRetain; } }, onRetainHook);
    };
    /**
     * The [[TransitionStateHookFn]] for onEnter
     *
     * When the state is being entered, the state's .onEnter function is invoked.
     *
     * Registered using `transitionService.onEnter({ entering: (state) => !!state.onEnter }, onEnterHook);`
     *
     * See: [[IHookRegistry.onEnter]]
     */
    var onEnterHook = makeEnterExitRetainHook('onEnter');
    var registerOnEnterHook = function (transitionService) {
        return transitionService.onEnter({ entering: function (state) { return !!state.onEnter; } }, onEnterHook);
    };

    /** @module hooks */
    var RESOLVE_HOOK_PRIORITY = 1000;
    /**
     * A [[TransitionHookFn]] which resolves all EAGER Resolvables in the To Path
     *
     * Registered using `transitionService.onStart({}, eagerResolvePath, { priority: 1000 });`
     *
     * When a Transition starts, this hook resolves all the EAGER Resolvables, which the transition then waits for.
     *
     * See [[StateDeclaration.resolve]]
     */
    var eagerResolvePath = function (trans) {
        return new ResolveContext(trans.treeChanges().to).resolvePath('EAGER', trans).then(noop);
    };
    var registerEagerResolvePath = function (transitionService) {
        return transitionService.onStart({}, eagerResolvePath, { priority: RESOLVE_HOOK_PRIORITY });
    };
    /**
     * A [[TransitionHookFn]] which resolves all LAZY Resolvables for the state (and all its ancestors) in the To Path
     *
     * Registered using `transitionService.onEnter({ entering: () => true }, lazyResolveState, { priority: 1000 });`
     *
     * When a State is being entered, this hook resolves all the Resolvables for this state, which the transition then waits for.
     *
     * See [[StateDeclaration.resolve]]
     */
    var lazyResolveState = function (trans, state) {
        return new ResolveContext(trans.treeChanges().to)
            .subContext(state.$$state())
            .resolvePath('LAZY', trans)
            .then(noop);
    };
    var registerLazyResolveState = function (transitionService) {
        return transitionService.onEnter({ entering: val(true) }, lazyResolveState, { priority: RESOLVE_HOOK_PRIORITY });
    };
    /**
     * A [[TransitionHookFn]] which resolves any dynamically added (LAZY or EAGER) Resolvables.
     *
     * Registered using `transitionService.onFinish({}, eagerResolvePath, { priority: 1000 });`
     *
     * After all entering states have been entered, this hook resolves any remaining Resolvables.
     * These are typically dynamic resolves which were added by some Transition Hook using [[Transition.addResolvable]].
     *
     * See [[StateDeclaration.resolve]]
     */
    var resolveRemaining = function (trans) {
        return new ResolveContext(trans.treeChanges().to).resolvePath('LAZY', trans).then(noop);
    };
    var registerResolveRemaining = function (transitionService) {
        return transitionService.onFinish({}, resolveRemaining, { priority: RESOLVE_HOOK_PRIORITY });
    };

    /** @module hooks */ /** for typedoc */
    /**
     * A [[TransitionHookFn]] which waits for the views to load
     *
     * Registered using `transitionService.onStart({}, loadEnteringViews);`
     *
     * Allows the views to do async work in [[ViewConfig.load]] before the transition continues.
     * In angular 1, this includes loading the templates.
     */
    var loadEnteringViews = function (transition) {
        var $q = services.$q;
        var enteringViews = transition.views('entering');
        if (!enteringViews.length)
            return;
        return $q.all(enteringViews.map(function (view) { return $q.when(view.load()); })).then(noop);
    };
    var registerLoadEnteringViews = function (transitionService) {
        return transitionService.onFinish({}, loadEnteringViews);
    };
    /**
     * A [[TransitionHookFn]] which activates the new views when a transition is successful.
     *
     * Registered using `transitionService.onSuccess({}, activateViews);`
     *
     * After a transition is complete, this hook deactivates the old views from the previous state,
     * and activates the new views from the destination state.
     *
     * See [[ViewService]]
     */
    var activateViews = function (transition) {
        var enteringViews = transition.views('entering');
        var exitingViews = transition.views('exiting');
        if (!enteringViews.length && !exitingViews.length)
            return;
        var $view = transition.router.viewService;
        exitingViews.forEach(function (vc) { return $view.deactivateViewConfig(vc); });
        enteringViews.forEach(function (vc) { return $view.activateViewConfig(vc); });
        $view.sync();
    };
    var registerActivateViews = function (transitionService) {
        return transitionService.onSuccess({}, activateViews);
    };

    /**
     * A [[TransitionHookFn]] which updates global UI-Router state
     *
     * Registered using `transitionService.onBefore({}, updateGlobalState);`
     *
     * Before a [[Transition]] starts, updates the global value of "the current transition" ([[Globals.transition]]).
     * After a successful [[Transition]], updates the global values of "the current state"
     * ([[Globals.current]] and [[Globals.$current]]) and "the current param values" ([[Globals.params]]).
     *
     * See also the deprecated properties:
     * [[StateService.transition]], [[StateService.current]], [[StateService.params]]
     */
    var updateGlobalState = function (trans) {
        var globals = trans.router.globals;
        var transitionSuccessful = function () {
            globals.successfulTransitions.enqueue(trans);
            globals.$current = trans.$to();
            globals.current = globals.$current.self;
            copy(trans.params(), globals.params);
        };
        var clearCurrentTransition = function () {
            // Do not clear globals.transition if a different transition has started in the meantime
            if (globals.transition === trans)
                globals.transition = null;
        };
        trans.onSuccess({}, transitionSuccessful, { priority: 10000 });
        trans.promise.then(clearCurrentTransition, clearCurrentTransition);
    };
    var registerUpdateGlobalState = function (transitionService) {
        return transitionService.onCreate({}, updateGlobalState);
    };

    /**
     * A [[TransitionHookFn]] which updates the URL after a successful transition
     *
     * Registered using `transitionService.onSuccess({}, updateUrl);`
     */
    var updateUrl = function (transition) {
        var options = transition.options();
        var $state = transition.router.stateService;
        var $urlRouter = transition.router.urlRouter;
        // Dont update the url in these situations:
        // The transition was triggered by a URL sync (options.source === 'url')
        // The user doesn't want the url to update (options.location === false)
        // The destination state, and all parents have no navigable url
        if (options.source !== 'url' && options.location && $state.$current.navigable) {
            var urlOptions = { replace: options.location === 'replace' };
            $urlRouter.push($state.$current.navigable.url, $state.params, urlOptions);
        }
        $urlRouter.update(true);
    };
    var registerUpdateUrl = function (transitionService) {
        return transitionService.onSuccess({}, updateUrl, { priority: 9999 });
    };

    /**
     * A [[TransitionHookFn]] that performs lazy loading
     *
     * When entering a state "abc" which has a `lazyLoad` function defined:
     * - Invoke the `lazyLoad` function (unless it is already in process)
     *   - Flag the hook function as "in process"
     *   - The function should return a promise (that resolves when lazy loading is complete)
     * - Wait for the promise to settle
     *   - If the promise resolves to a [[LazyLoadResult]], then register those states
     *   - Flag the hook function as "not in process"
     * - If the hook was successful
     *   - Remove the `lazyLoad` function from the state declaration
     * - If all the hooks were successful
     *   - Retry the transition (by returning a TargetState)
     *
     * ```
     * .state('abc', {
     *   component: 'fooComponent',
     *   lazyLoad: () => System.import('./fooComponent')
     *   });
     * ```
     *
     * See [[StateDeclaration.lazyLoad]]
     */
    var lazyLoadHook = function (transition) {
        var router = transition.router;
        function retryTransition() {
            if (transition.originalTransition().options().source !== 'url') {
                // The original transition was not triggered via url sync
                // The lazy state should be loaded now, so re-try the original transition
                var orig = transition.targetState();
                return router.stateService.target(orig.identifier(), orig.params(), orig.options());
            }
            // The original transition was triggered via url sync
            // Run the URL rules and find the best match
            var $url = router.urlService;
            var result = $url.match($url.parts());
            var rule = result && result.rule;
            // If the best match is a state, redirect the transition (instead
            // of calling sync() which supersedes the current transition)
            if (rule && rule.type === 'STATE') {
                var state = rule.state;
                var params = result.match;
                return router.stateService.target(state, params, transition.options());
            }
            // No matching state found, so let .sync() choose the best non-state match/otherwise
            router.urlService.sync();
        }
        var promises = transition
            .entering()
            .filter(function (state) { return !!state.$$state().lazyLoad; })
            .map(function (state) { return lazyLoadState(transition, state); });
        return services.$q.all(promises).then(retryTransition);
    };
    var registerLazyLoadHook = function (transitionService) {
        return transitionService.onBefore({ entering: function (state) { return !!state.lazyLoad; } }, lazyLoadHook);
    };
    /**
     * Invokes a state's lazy load function
     *
     * @param transition a Transition context
     * @param state the state to lazy load
     * @returns A promise for the lazy load result
     */
    function lazyLoadState(transition, state) {
        var lazyLoadFn = state.$$state().lazyLoad;
        // Store/get the lazy load promise on/from the hookfn so it doesn't get re-invoked
        var promise = lazyLoadFn['_promise'];
        if (!promise) {
            var success = function (result) {
                delete state.lazyLoad;
                delete state.$$state().lazyLoad;
                delete lazyLoadFn['_promise'];
                return result;
            };
            var error = function (err) {
                delete lazyLoadFn['_promise'];
                return services.$q.reject(err);
            };
            promise = lazyLoadFn['_promise'] = services.$q
                .when(lazyLoadFn(transition, state))
                .then(updateStateRegistry)
                .then(success, error);
        }
        /** Register any lazy loaded state definitions */
        function updateStateRegistry(result) {
            if (result && Array.isArray(result.states)) {
                result.states.forEach(function (_state) { return transition.router.stateRegistry.register(_state); });
            }
            return result;
        }
        return promise;
    }

    /**
     * This class defines a type of hook, such as `onBefore` or `onEnter`.
     * Plugins can define custom hook types, such as sticky states does for `onInactive`.
     *
     * @interalapi
     */
    var TransitionEventType = /** @class */ (function () {
        /* tslint:disable:no-inferrable-types */
        function TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
            if (reverseSort === void 0) { reverseSort = false; }
            if (getResultHandler === void 0) { getResultHandler = TransitionHook.HANDLE_RESULT; }
            if (getErrorHandler === void 0) { getErrorHandler = TransitionHook.REJECT_ERROR; }
            if (synchronous === void 0) { synchronous = false; }
            this.name = name;
            this.hookPhase = hookPhase;
            this.hookOrder = hookOrder;
            this.criteriaMatchPath = criteriaMatchPath;
            this.reverseSort = reverseSort;
            this.getResultHandler = getResultHandler;
            this.getErrorHandler = getErrorHandler;
            this.synchronous = synchronous;
        }
        return TransitionEventType;
    }());

    /** @module hooks */ /** */
    /**
     * A [[TransitionHookFn]] that skips a transition if it should be ignored
     *
     * This hook is invoked at the end of the onBefore phase.
     *
     * If the transition should be ignored (because no parameter or states changed)
     * then the transition is ignored and not processed.
     */
    function ignoredHook(trans) {
        var ignoredReason = trans._ignoredReason();
        if (!ignoredReason)
            return;
        trace.traceTransitionIgnored(trans);
        var pending = trans.router.globals.transition;
        // The user clicked a link going back to the *current state* ('A')
        // However, there is also a pending transition in flight (to 'B')
        // Abort the transition to 'B' because the user now wants to be back at 'A'.
        if (ignoredReason === 'SameAsCurrent' && pending) {
            pending.abort();
        }
        return Rejection.ignored().toPromise();
    }
    var registerIgnoredTransitionHook = function (transitionService) {
        return transitionService.onBefore({}, ignoredHook, { priority: -9999 });
    };

    /** @module hooks */ /** */
    /**
     * A [[TransitionHookFn]] that rejects the Transition if it is invalid
     *
     * This hook is invoked at the end of the onBefore phase.
     * If the transition is invalid (for example, param values do not validate)
     * then the transition is rejected.
     */
    function invalidTransitionHook(trans) {
        if (!trans.valid()) {
            throw new Error(trans.error().toString());
        }
    }
    var registerInvalidTransitionHook = function (transitionService) {
        return transitionService.onBefore({}, invalidTransitionHook, { priority: -10000 });
    };

    /**
     * @coreapi
     * @module transition
     */
    /**
     * The default [[Transition]] options.
     *
     * Include this object when applying custom defaults:
     * let reloadOpts = { reload: true, notify: true }
     * let options = defaults(theirOpts, customDefaults, defaultOptions);
     */
    var defaultTransOpts = {
        location: true,
        relative: null,
        inherit: false,
        notify: true,
        reload: false,
        custom: {},
        current: function () { return null; },
        source: 'unknown',
    };
    /**
     * This class provides services related to Transitions.
     *
     * - Most importantly, it allows global Transition Hooks to be registered.
     * - It allows the default transition error handler to be set.
     * - It also has a factory function for creating new [[Transition]] objects, (used internally by the [[StateService]]).
     *
     * At bootstrap, [[UIRouter]] creates a single instance (singleton) of this class.
     */
    var TransitionService = /** @class */ (function () {
        /** @hidden */
        function TransitionService(_router) {
            /** @hidden */
            this._transitionCount = 0;
            /** @hidden The transition hook types, such as `onEnter`, `onStart`, etc */
            this._eventTypes = [];
            /** @hidden The registered transition hooks */
            this._registeredHooks = {};
            /** @hidden The  paths on a criteria object */
            this._criteriaPaths = {};
            this._router = _router;
            this.$view = _router.viewService;
            this._deregisterHookFns = {};
            this._pluginapi = createProxyFunctions(val(this), {}, val(this), [
                '_definePathType',
                '_defineEvent',
                '_getPathTypes',
                '_getEvents',
                'getHooks',
            ]);
            this._defineCorePaths();
            this._defineCoreEvents();
            this._registerCoreTransitionHooks();
            _router.globals.successfulTransitions.onEvict(treeChangesCleanup);
        }
        /**
         * Registers a [[TransitionHookFn]], called *while a transition is being constructed*.
         *
         * Registers a transition lifecycle hook, which is invoked during transition construction.
         *
         * This low level hook should only be used by plugins.
         * This can be a useful time for plugins to add resolves or mutate the transition as needed.
         * The Sticky States plugin uses this hook to modify the treechanges.
         *
         * ### Lifecycle
         *
         * `onCreate` hooks are invoked *while a transition is being constructed*.
         *
         * ### Return value
         *
         * The hook's return value is ignored
         *
         * @internalapi
         * @param criteria defines which Transitions the Hook should be invoked for.
         * @param callback the hook function which will be invoked.
         * @param options the registration options
         * @returns a function which deregisters the hook.
         */
        TransitionService.prototype.onCreate = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onBefore = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onStart = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onExit = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onRetain = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onEnter = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onFinish = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onSuccess = function (criteria, callback, options) {
            return;
        };
        /** @inheritdoc */
        TransitionService.prototype.onError = function (criteria, callback, options) {
            return;
        };
        /**
         * dispose
         * @internalapi
         */
        TransitionService.prototype.dispose = function (router) {
            values(this._registeredHooks).forEach(function (hooksArray) {
                return hooksArray.forEach(function (hook) {
                    hook._deregistered = true;
                    removeFrom(hooksArray, hook);
                });
            });
        };
        /**
         * Creates a new [[Transition]] object
         *
         * This is a factory function for creating new Transition objects.
         * It is used internally by the [[StateService]] and should generally not be called by application code.
         *
         * @param fromPath the path to the current state (the from state)
         * @param targetState the target state (destination)
         * @returns a Transition
         */
        TransitionService.prototype.create = function (fromPath, targetState) {
            return new Transition(fromPath, targetState, this._router);
        };
        /** @hidden */
        TransitionService.prototype._defineCoreEvents = function () {
            var Phase = exports.TransitionHookPhase;
            var TH = TransitionHook;
            var paths = this._criteriaPaths;
            var NORMAL_SORT = false, REVERSE_SORT = true;
            var SYNCHRONOUS = true;
            this._defineEvent('onCreate', Phase.CREATE, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.THROW_ERROR, SYNCHRONOUS);
            this._defineEvent('onBefore', Phase.BEFORE, 0, paths.to);
            this._defineEvent('onStart', Phase.RUN, 0, paths.to);
            this._defineEvent('onExit', Phase.RUN, 100, paths.exiting, REVERSE_SORT);
            this._defineEvent('onRetain', Phase.RUN, 200, paths.retained);
            this._defineEvent('onEnter', Phase.RUN, 300, paths.entering);
            this._defineEvent('onFinish', Phase.RUN, 400, paths.to);
            this._defineEvent('onSuccess', Phase.SUCCESS, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
            this._defineEvent('onError', Phase.ERROR, 0, paths.to, NORMAL_SORT, TH.LOG_REJECTED_RESULT, TH.LOG_ERROR, SYNCHRONOUS);
        };
        /** @hidden */
        TransitionService.prototype._defineCorePaths = function () {
            var STATE = exports.TransitionHookScope.STATE, TRANSITION = exports.TransitionHookScope.TRANSITION;
            this._definePathType('to', TRANSITION);
            this._definePathType('from', TRANSITION);
            this._definePathType('exiting', STATE);
            this._definePathType('retained', STATE);
            this._definePathType('entering', STATE);
        };
        /** @hidden */
        TransitionService.prototype._defineEvent = function (name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous) {
            if (reverseSort === void 0) { reverseSort = false; }
            if (getResultHandler === void 0) { getResultHandler = TransitionHook.HANDLE_RESULT; }
            if (getErrorHandler === void 0) { getErrorHandler = TransitionHook.REJECT_ERROR; }
            if (synchronous === void 0) { synchronous = false; }
            var eventType = new TransitionEventType(name, hookPhase, hookOrder, criteriaMatchPath, reverseSort, getResultHandler, getErrorHandler, synchronous);
            this._eventTypes.push(eventType);
            makeEvent(this, this, eventType);
        };
        /** @hidden */
        // tslint:disable-next-line
        TransitionService.prototype._getEvents = function (phase) {
            var transitionHookTypes = isDefined(phase)
                ? this._eventTypes.filter(function (type) { return type.hookPhase === phase; })
                : this._eventTypes.slice();
            return transitionHookTypes.sort(function (l, r) {
                var cmpByPhase = l.hookPhase - r.hookPhase;
                return cmpByPhase === 0 ? l.hookOrder - r.hookOrder : cmpByPhase;
            });
        };
        /**
         * Adds a Path to be used as a criterion against a TreeChanges path
         *
         * For example: the `exiting` path in [[HookMatchCriteria]] is a STATE scoped path.
         * It was defined by calling `defineTreeChangesCriterion('exiting', TransitionHookScope.STATE)`
         * Each state in the exiting path is checked against the criteria and returned as part of the match.
         *
         * Another example: the `to` path in [[HookMatchCriteria]] is a TRANSITION scoped path.
         * It was defined by calling `defineTreeChangesCriterion('to', TransitionHookScope.TRANSITION)`
         * Only the tail of the `to` path is checked against the criteria and returned as part of the match.
         *
         * @hidden
         */
        TransitionService.prototype._definePathType = function (name, hookScope) {
            this._criteriaPaths[name] = { name: name, scope: hookScope };
        };
        /** * @hidden */
        // tslint:disable-next-line
        TransitionService.prototype._getPathTypes = function () {
            return this._criteriaPaths;
        };
        /** @hidden */
        TransitionService.prototype.getHooks = function (hookName) {
            return this._registeredHooks[hookName];
        };
        /** @hidden */
        TransitionService.prototype._registerCoreTransitionHooks = function () {
            var fns = this._deregisterHookFns;
            fns.addCoreResolves = registerAddCoreResolvables(this);
            fns.ignored = registerIgnoredTransitionHook(this);
            fns.invalid = registerInvalidTransitionHook(this);
            // Wire up redirectTo hook
            fns.redirectTo = registerRedirectToHook(this);
            // Wire up onExit/Retain/Enter state hooks
            fns.onExit = registerOnExitHook(this);
            fns.onRetain = registerOnRetainHook(this);
            fns.onEnter = registerOnEnterHook(this);
            // Wire up Resolve hooks
            fns.eagerResolve = registerEagerResolvePath(this);
            fns.lazyResolve = registerLazyResolveState(this);
            fns.resolveAll = registerResolveRemaining(this);
            // Wire up the View management hooks
            fns.loadViews = registerLoadEnteringViews(this);
            fns.activateViews = registerActivateViews(this);
            // Updates global state after a transition
            fns.updateGlobals = registerUpdateGlobalState(this);
            // After globals.current is updated at priority: 10000
            fns.updateUrl = registerUpdateUrl(this);
            // Lazy load state trees
            fns.lazyLoad = registerLazyLoadHook(this);
        };
        return TransitionService;
    }());

    /**
     * @coreapi
     * @module state
     */
    /**
     * Provides state related service functions
     *
     * This class provides services related to ui-router states.
     * An instance of this class is located on the global [[UIRouter]] object.
     */
    var StateService = /** @class */ (function () {
        /** @internalapi */
        function StateService(router) {
            this.router = router;
            /** @internalapi */
            this.invalidCallbacks = [];
            /** @hidden */
            this._defaultErrorHandler = function $defaultErrorHandler($error$) {
                if ($error$ instanceof Error && $error$.stack) {
                    console.error($error$);
                    console.error($error$.stack);
                }
                else if ($error$ instanceof Rejection) {
                    console.error($error$.toString());
                    if ($error$.detail && $error$.detail.stack)
                        console.error($error$.detail.stack);
                }
                else {
                    console.error($error$);
                }
            };
            var getters = ['current', '$current', 'params', 'transition'];
            var boundFns = Object.keys(StateService.prototype).filter(not(inArray(getters)));
            createProxyFunctions(val(StateService.prototype), this, val(this), boundFns);
        }
        Object.defineProperty(StateService.prototype, "transition", {
            /**
             * The [[Transition]] currently in progress (or null)
             *
             * This is a passthrough through to [[UIRouterGlobals.transition]]
             */
            get: function () {
                return this.router.globals.transition;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateService.prototype, "params", {
            /**
             * The latest successful state parameters
             *
             * This is a passthrough through to [[UIRouterGlobals.params]]
             */
            get: function () {
                return this.router.globals.params;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateService.prototype, "current", {
            /**
             * The current [[StateDeclaration]]
             *
             * This is a passthrough through to [[UIRouterGlobals.current]]
             */
            get: function () {
                return this.router.globals.current;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StateService.prototype, "$current", {
            /**
             * The current [[StateObject]]
             *
             * This is a passthrough through to [[UIRouterGlobals.$current]]
             */
            get: function () {
                return this.router.globals.$current;
            },
            enumerable: true,
            configurable: true
        });
        /** @internalapi */
        StateService.prototype.dispose = function () {
            this.defaultErrorHandler(noop);
            this.invalidCallbacks = [];
        };
        /**
         * Handler for when [[transitionTo]] is called with an invalid state.
         *
         * Invokes the [[onInvalid]] callbacks, in natural order.
         * Each callback's return value is checked in sequence until one of them returns an instance of TargetState.
         * The results of the callbacks are wrapped in $q.when(), so the callbacks may return promises.
         *
         * If a callback returns an TargetState, then it is used as arguments to $state.transitionTo() and the result returned.
         *
         * @internalapi
         */
        StateService.prototype._handleInvalidTargetState = function (fromPath, toState) {
            var _this = this;
            var fromState = PathUtils.makeTargetState(this.router.stateRegistry, fromPath);
            var globals = this.router.globals;
            var latestThing = function () { return globals.transitionHistory.peekTail(); };
            var latest = latestThing();
            var callbackQueue = new Queue(this.invalidCallbacks.slice());
            var injector = new ResolveContext(fromPath).injector();
            var checkForRedirect = function (result) {
                if (!(result instanceof TargetState)) {
                    return;
                }
                var target = result;
                // Recreate the TargetState, in case the state is now defined.
                target = _this.target(target.identifier(), target.params(), target.options());
                if (!target.valid()) {
                    return Rejection.invalid(target.error()).toPromise();
                }
                if (latestThing() !== latest) {
                    return Rejection.superseded().toPromise();
                }
                return _this.transitionTo(target.identifier(), target.params(), target.options());
            };
            function invokeNextCallback() {
                var nextCallback = callbackQueue.dequeue();
                if (nextCallback === undefined)
                    return Rejection.invalid(toState.error()).toPromise();
                var callbackResult = services.$q.when(nextCallback(toState, fromState, injector));
                return callbackResult.then(checkForRedirect).then(function (result) { return result || invokeNextCallback(); });
            }
            return invokeNextCallback();
        };
        /**
         * Registers an Invalid State handler
         *
         * Registers a [[OnInvalidCallback]] function to be invoked when [[StateService.transitionTo]]
         * has been called with an invalid state reference parameter
         *
         * Example:
         * ```js
         * stateService.onInvalid(function(to, from, injector) {
         *   if (to.name() === 'foo') {
         *     let lazyLoader = injector.get('LazyLoadService');
         *     return lazyLoader.load('foo')
         *         .then(() => stateService.target('foo'));
         *   }
         * });
         * ```
         *
         * @param {function} callback invoked when the toState is invalid
         *   This function receives the (invalid) toState, the fromState, and an injector.
         *   The function may optionally return a [[TargetState]] or a Promise for a TargetState.
         *   If one is returned, it is treated as a redirect.
         *
         * @returns a function which deregisters the callback
         */
        StateService.prototype.onInvalid = function (callback) {
            this.invalidCallbacks.push(callback);
            return function deregisterListener() {
                removeFrom(this.invalidCallbacks)(callback);
            }.bind(this);
        };
        /**
         * Reloads the current state
         *
         * A method that force reloads the current state, or a partial state hierarchy.
         * All resolves are re-resolved, and components reinstantiated.
         *
         * #### Example:
         * ```js
         * let app angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.reload = function(){
         *     $state.reload();
         *   }
         * });
         * ```
         *
         * Note: `reload()` is just an alias for:
         *
         * ```js
         * $state.transitionTo($state.current, $state.params, {
         *   reload: true, inherit: false
         * });
         * ```
         *
         * @param reloadState A state name or a state object.
         *    If present, this state and all its children will be reloaded, but ancestors will not reload.
         *
         * #### Example:
         * ```js
         * //assuming app application consists of 3 states: 'contacts', 'contacts.detail', 'contacts.detail.item'
         * //and current state is 'contacts.detail.item'
         * let app angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.reload = function(){
         *     //will reload 'contact.detail' and nested 'contact.detail.item' states
         *     $state.reload('contact.detail');
         *   }
         * });
         * ```
         *
         * @returns A promise representing the state of the new transition. See [[StateService.go]]
         */
        StateService.prototype.reload = function (reloadState) {
            return this.transitionTo(this.current, this.params, {
                reload: isDefined(reloadState) ? reloadState : true,
                inherit: false,
                notify: false,
            });
        };
        /**
         * Transition to a different state and/or parameters
         *
         * Convenience method for transitioning to a new state.
         *
         * `$state.go` calls `$state.transitionTo` internally but automatically sets options to
         * `{ location: true, inherit: true, relative: router.globals.$current, notify: true }`.
         * This allows you to use either an absolute or relative `to` argument (because of `relative: router.globals.$current`).
         * It also allows you to specify * only the parameters you'd like to update, while letting unspecified parameters
         * inherit from the current parameter values (because of `inherit: true`).
         *
         * #### Example:
         * ```js
         * let app = angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.changeState = function () {
         *     $state.go('contact.detail');
         *   };
         * });
         * ```
         *
         * @param to Absolute state name, state object, or relative state path (relative to current state).
         *
         * Some examples:
         *
         * - `$state.go('contact.detail')` - will go to the `contact.detail` state
         * - `$state.go('^')` - will go to the parent state
         * - `$state.go('^.sibling')` - if current state is `home.child`, will go to the `home.sibling` state
         * - `$state.go('.child.grandchild')` - if current state is home, will go to the `home.child.grandchild` state
         *
         * @param params A map of the parameters that will be sent to the state, will populate $stateParams.
         *
         *    Any parameters that are not specified will be inherited from current parameter values (because of `inherit: true`).
         *    This allows, for example, going to a sibling state that shares parameters defined by a parent state.
         *
         * @param options Transition options
         *
         * @returns {promise} A promise representing the state of the new transition.
         */
        StateService.prototype.go = function (to, params, options) {
            var defautGoOpts = { relative: this.$current, inherit: true };
            var transOpts = defaults(options, defautGoOpts, defaultTransOpts);
            return this.transitionTo(to, params, transOpts);
        };
        /**
         * Creates a [[TargetState]]
         *
         * This is a factory method for creating a TargetState
         *
         * This may be returned from a Transition Hook to redirect a transition, for example.
         */
        StateService.prototype.target = function (identifier, params, options) {
            if (options === void 0) { options = {}; }
            // If we're reloading, find the state object to reload from
            if (isObject(options.reload) && !options.reload.name)
                throw new Error('Invalid reload state object');
            var reg = this.router.stateRegistry;
            options.reloadState =
                options.reload === true ? reg.root() : reg.matcher.find(options.reload, options.relative);
            if (options.reload && !options.reloadState)
                throw new Error("No such reload state '" + (isString(options.reload) ? options.reload : options.reload.name) + "'");
            return new TargetState(this.router.stateRegistry, identifier, params, options);
        };
        StateService.prototype.getCurrentPath = function () {
            var _this = this;
            var globals = this.router.globals;
            var latestSuccess = globals.successfulTransitions.peekTail();
            var rootPath = function () { return [new PathNode(_this.router.stateRegistry.root())]; };
            return latestSuccess ? latestSuccess.treeChanges().to : rootPath();
        };
        /**
         * Low-level method for transitioning to a new state.
         *
         * The [[go]] method (which uses `transitionTo` internally) is recommended in most situations.
         *
         * #### Example:
         * ```js
         * let app = angular.module('app', ['ui.router']);
         *
         * app.controller('ctrl', function ($scope, $state) {
         *   $scope.changeState = function () {
         *     $state.transitionTo('contact.detail');
         *   };
         * });
         * ```
         *
         * @param to State name or state object.
         * @param toParams A map of the parameters that will be sent to the state,
         *      will populate $stateParams.
         * @param options Transition options
         *
         * @returns A promise representing the state of the new transition. See [[go]]
         */
        StateService.prototype.transitionTo = function (to, toParams, options) {
            var _this = this;
            if (toParams === void 0) { toParams = {}; }
            if (options === void 0) { options = {}; }
            var router = this.router;
            var globals = router.globals;
            options = defaults(options, defaultTransOpts);
            var getCurrent = function () { return globals.transition; };
            options = extend(options, { current: getCurrent });
            var ref = this.target(to, toParams, options);
            var currentPath = this.getCurrentPath();
            if (!ref.exists())
                return this._handleInvalidTargetState(currentPath, ref);
            if (!ref.valid())
                return silentRejection(ref.error());
            /**
             * Special handling for Ignored, Aborted, and Redirected transitions
             *
             * The semantics for the transition.run() promise and the StateService.transitionTo()
             * promise differ. For instance, the run() promise may be rejected because it was
             * IGNORED, but the transitionTo() promise is resolved because from the user perspective
             * no error occurred.  Likewise, the transition.run() promise may be rejected because of
             * a Redirect, but the transitionTo() promise is chained to the new Transition's promise.
             */
            var rejectedTransitionHandler = function (trans) { return function (error) {
                if (error instanceof Rejection) {
                    var isLatest = router.globals.lastStartedTransitionId === trans.$id;
                    if (error.type === exports.RejectType.IGNORED) {
                        isLatest && router.urlRouter.update();
                        // Consider ignored `Transition.run()` as a successful `transitionTo`
                        return services.$q.when(globals.current);
                    }
                    var detail = error.detail;
                    if (error.type === exports.RejectType.SUPERSEDED && error.redirected && detail instanceof TargetState) {
                        // If `Transition.run()` was redirected, allow the `transitionTo()` promise to resolve successfully
                        // by returning the promise for the new (redirect) `Transition.run()`.
                        var redirect = trans.redirect(detail);
                        return redirect.run().catch(rejectedTransitionHandler(redirect));
                    }
                    if (error.type === exports.RejectType.ABORTED) {
                        isLatest && router.urlRouter.update();
                        return services.$q.reject(error);
                    }
                }
                var errorHandler = _this.defaultErrorHandler();
                errorHandler(error);
                return services.$q.reject(error);
            }; };
            var transition = this.router.transitionService.create(currentPath, ref);
            var transitionToPromise = transition.run().catch(rejectedTransitionHandler(transition));
            silenceUncaughtInPromise(transitionToPromise); // issue #2676
            // Return a promise for the transition, which also has the transition object on it.
            return extend(transitionToPromise, { transition: transition });
        };
        /**
         * Checks if the current state *is* the provided state
         *
         * Similar to [[includes]] but only checks for the full state name.
         * If params is supplied then it will be tested for strict equality against the current
         * active params object, so all params must match with none missing and no extras.
         *
         * #### Example:
         * ```js
         * $state.$current.name = 'contacts.details.item';
         *
         * // absolute name
         * $state.is('contact.details.item'); // returns true
         * $state.is(contactDetailItemStateObject); // returns true
         * ```
         *
         * // relative name (. and ^), typically from a template
         * // E.g. from the 'contacts.details' template
         * ```html
         * <div ng-class="{highlighted: $state.is('.item')}">Item</div>
         * ```
         *
         * @param stateOrName The state name (absolute or relative) or state object you'd like to check.
         * @param params A param object, e.g. `{sectionId: section.id}`, that you'd like
         * to test against the current active state.
         * @param options An options object. The options are:
         *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
         *     test relative to `options.relative` state (or name).
         *
         * @returns Returns true if it is the state.
         */
        StateService.prototype.is = function (stateOrName, params, options) {
            options = defaults(options, { relative: this.$current });
            var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
            if (!isDefined(state))
                return undefined;
            if (this.$current !== state)
                return false;
            if (!params)
                return true;
            var schema = state.parameters({ inherit: true, matchingKeys: params });
            return Param.equals(schema, Param.values(schema, params), this.params);
        };
        /**
         * Checks if the current state *includes* the provided state
         *
         * A method to determine if the current active state is equal to or is the child of the
         * state stateName. If any params are passed then they will be tested for a match as well.
         * Not all the parameters need to be passed, just the ones you'd like to test for equality.
         *
         * #### Example when `$state.$current.name === 'contacts.details.item'`
         * ```js
         * // Using partial names
         * $state.includes("contacts"); // returns true
         * $state.includes("contacts.details"); // returns true
         * $state.includes("contacts.details.item"); // returns true
         * $state.includes("contacts.list"); // returns false
         * $state.includes("about"); // returns false
         * ```
         *
         * #### Glob Examples when `* $state.$current.name === 'contacts.details.item.url'`:
         * ```js
         * $state.includes("*.details.*.*"); // returns true
         * $state.includes("*.details.**"); // returns true
         * $state.includes("**.item.**"); // returns true
         * $state.includes("*.details.item.url"); // returns true
         * $state.includes("*.details.*.url"); // returns true
         * $state.includes("*.details.*"); // returns false
         * $state.includes("item.**"); // returns false
         * ```
         *
         * @param stateOrName A partial name, relative name, glob pattern,
         *   or state object to be searched for within the current state name.
         * @param params A param object, e.g. `{sectionId: section.id}`,
         *   that you'd like to test against the current active state.
         * @param options An options object. The options are:
         *   - `relative`: If `stateOrName` is a relative state name and `options.relative` is set, .is will
         *     test relative to `options.relative` state (or name).
         *
         * @returns {boolean} Returns true if it does include the state
         */
        StateService.prototype.includes = function (stateOrName, params, options) {
            options = defaults(options, { relative: this.$current });
            var glob = isString(stateOrName) && Glob.fromString(stateOrName);
            if (glob) {
                if (!glob.matches(this.$current.name))
                    return false;
                stateOrName = this.$current.name;
            }
            var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative), include = this.$current.includes;
            if (!isDefined(state))
                return undefined;
            if (!isDefined(include[state.name]))
                return false;
            if (!params)
                return true;
            var schema = state.parameters({ inherit: true, matchingKeys: params });
            return Param.equals(schema, Param.values(schema, params), this.params);
        };
        /**
         * Generates a URL for a state and parameters
         *
         * Returns the url for the given state populated with the given params.
         *
         * #### Example:
         * ```js
         * expect($state.href("about.person", { person: "bob" })).toEqual("/about/bob");
         * ```
         *
         * @param stateOrName The state name or state object you'd like to generate a url from.
         * @param params An object of parameter values to fill the state's required parameters.
         * @param options Options object. The options are:
         *
         * @returns {string} compiled state url
         */
        StateService.prototype.href = function (stateOrName, params, options) {
            var defaultHrefOpts = {
                lossy: true,
                inherit: true,
                absolute: false,
                relative: this.$current,
            };
            options = defaults(options, defaultHrefOpts);
            params = params || {};
            var state = this.router.stateRegistry.matcher.find(stateOrName, options.relative);
            if (!isDefined(state))
                return null;
            if (options.inherit)
                params = this.params.$inherit(params, this.$current, state);
            var nav = state && options.lossy ? state.navigable : state;
            if (!nav || nav.url === undefined || nav.url === null) {
                return null;
            }
            return this.router.urlRouter.href(nav.url, params, {
                absolute: options.absolute,
            });
        };
        /**
         * Sets or gets the default [[transitionTo]] error handler.
         *
         * The error handler is called when a [[Transition]] is rejected or when any error occurred during the Transition.
         * This includes errors caused by resolves and transition hooks.
         *
         * Note:
         * This handler does not receive certain Transition rejections.
         * Redirected and Ignored Transitions are not considered to be errors by [[StateService.transitionTo]].
         *
         * The built-in default error handler logs the error to the console.
         *
         * You can provide your own custom handler.
         *
         * #### Example:
         * ```js
         * stateService.defaultErrorHandler(function() {
         *   // Do not log transitionTo errors
         * });
         * ```
         *
         * @param handler a global error handler function
         * @returns the current global error handler
         */
        StateService.prototype.defaultErrorHandler = function (handler) {
            return (this._defaultErrorHandler = handler || this._defaultErrorHandler);
        };
        StateService.prototype.get = function (stateOrName, base) {
            var reg = this.router.stateRegistry;
            if (arguments.length === 0)
                return reg.get();
            return reg.get(stateOrName, base || this.$current);
        };
        /**
         * Lazy loads a state
         *
         * Explicitly runs a state's [[StateDeclaration.lazyLoad]] function.
         *
         * @param stateOrName the state that should be lazy loaded
         * @param transition the optional Transition context to use (if the lazyLoad function requires an injector, etc)
         * Note: If no transition is provided, a noop transition is created using the from the current state to the current state.
         * This noop transition is not actually run.
         *
         * @returns a promise to lazy load
         */
        StateService.prototype.lazyLoad = function (stateOrName, transition) {
            var state = this.get(stateOrName);
            if (!state || !state.lazyLoad)
                throw new Error('Can not lazy load ' + stateOrName);
            var currentPath = this.getCurrentPath();
            var target = PathUtils.makeTargetState(this.router.stateRegistry, currentPath);
            transition = transition || this.router.transitionService.create(currentPath, target);
            return lazyLoadState(transition, state);
        };
        return StateService;
    }());

    /**
     * # Transition subsystem
     *
     * This module contains APIs related to a Transition.
     *
     * See:
     * - [[TransitionService]]
     * - [[Transition]]
     * - [[HookFn]], [[TransitionHookFn]], [[TransitionStateHookFn]], [[HookMatchCriteria]], [[HookResult]]
     *
     * @coreapi
     * @preferred
     * @module transition
     */ /** for typedoc */

    /**
     * @internalapi
     * @module vanilla
     */
    /**
     * An angular1-like promise api
     *
     * This object implements four methods similar to the
     * [angular 1 promise api](https://docs.angularjs.org/api/ng/service/$q)
     *
     * UI-Router evolved from an angular 1 library to a framework agnostic library.
     * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
     *
     * This API provides native ES6 promise support wrapped as a $q-like API.
     * Internally, UI-Router uses this $q object to perform promise operations.
     * The `angular-ui-router` (ui-router for angular 1) uses the $q API provided by angular.
     *
     * $q-like promise api
     */
    var $q = {
        /** Normalizes a value as a promise */
        when: function (val$$1) { return new Promise(function (resolve, reject) { return resolve(val$$1); }); },
        /** Normalizes a value as a promise rejection */
        reject: function (val$$1) {
            return new Promise(function (resolve, reject) {
                reject(val$$1);
            });
        },
        /** @returns a deferred object, which has `resolve` and `reject` functions */
        defer: function () {
            var deferred = {};
            deferred.promise = new Promise(function (resolve, reject) {
                deferred.resolve = resolve;
                deferred.reject = reject;
            });
            return deferred;
        },
        /** Like Promise.all(), but also supports object key/promise notation like $q */
        all: function (promises) {
            if (isArray(promises)) {
                return Promise.all(promises);
            }
            if (isObject(promises)) {
                // Convert promises map to promises array.
                // When each promise resolves, map it to a tuple { key: key, val: val }
                var chain = Object.keys(promises).map(function (key) { return promises[key].then(function (val$$1) { return ({ key: key, val: val$$1 }); }); });
                // Then wait for all promises to resolve, and convert them back to an object
                return $q.all(chain).then(function (values$$1) {
                    return values$$1.reduce(function (acc, tuple) {
                        acc[tuple.key] = tuple.val;
                        return acc;
                    }, {});
                });
            }
        },
    };

    /**
     * @internalapi
     * @module vanilla
     */
    // globally available injectables
    var globals = {};
    var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
    var ARGUMENT_NAMES = /([^\s,]+)/g;
    /**
     * A basic angular1-like injector api
     *
     * This object implements four methods similar to the
     * [angular 1 dependency injector](https://docs.angularjs.org/api/auto/service/$injector)
     *
     * UI-Router evolved from an angular 1 library to a framework agnostic library.
     * However, some of the `@uirouter/core` code uses these ng1 style APIs to support ng1 style dependency injection.
     *
     * This object provides a naive implementation of a globally scoped dependency injection system.
     * It supports the following DI approaches:
     *
     * ### Function parameter names
     *
     * A function's `.toString()` is called, and the parameter names are parsed.
     * This only works when the parameter names aren't "mangled" by a minifier such as UglifyJS.
     *
     * ```js
     * function injectedFunction(FooService, BarService) {
     *   // FooService and BarService are injected
     * }
     * ```
     *
     * ### Function annotation
     *
     * A function may be annotated with an array of dependency names as the `$inject` property.
     *
     * ```js
     * injectedFunction.$inject = [ 'FooService', 'BarService' ];
     * function injectedFunction(fs, bs) {
     *   // FooService and BarService are injected as fs and bs parameters
     * }
     * ```
     *
     * ### Array notation
     *
     * An array provides the names of the dependencies to inject (as strings).
     * The function is the last element of the array.
     *
     * ```js
     * [ 'FooService', 'BarService', function (fs, bs) {
     *   // FooService and BarService are injected as fs and bs parameters
     * }]
     * ```
     *
     * @type {$InjectorLike}
     */
    var $injector = {
        /** Gets an object from DI based on a string token */
        get: function (name) { return globals[name]; },
        /** Returns true if an object named `name` exists in global DI */
        has: function (name) { return $injector.get(name) != null; },
        /**
         * Injects a function
         *
         * @param fn the function to inject
         * @param context the function's `this` binding
         * @param locals An object with additional DI tokens and values, such as `{ someToken: { foo: 1 } }`
         */
        invoke: function (fn, context, locals) {
            var all$$1 = extend({}, globals, locals || {});
            var params = $injector.annotate(fn);
            var ensureExist = assertPredicate(function (key) { return all$$1.hasOwnProperty(key); }, function (key) { return "DI can't find injectable: '" + key + "'"; });
            var args = params.filter(ensureExist).map(function (x) { return all$$1[x]; });
            if (isFunction(fn))
                return fn.apply(context, args);
            else
                return fn.slice(-1)[0].apply(context, args);
        },
        /**
         * Returns a function's dependencies
         *
         * Analyzes a function (or array) and returns an array of DI tokens that the function requires.
         * @return an array of `string`s
         */
        annotate: function (fn) {
            if (!isInjectable(fn))
                throw new Error("Not an injectable function: " + fn);
            if (fn && fn.$inject)
                return fn.$inject;
            if (isArray(fn))
                return fn.slice(0, -1);
            var fnStr = fn.toString().replace(STRIP_COMMENTS, '');
            var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
            return result || [];
        },
    };

    /**
     * @internalapi
     * @module vanilla
     */
    var keyValsToObjectR = function (accum, _a) {
        var key = _a[0], val$$1 = _a[1];
        if (!accum.hasOwnProperty(key)) {
            accum[key] = val$$1;
        }
        else if (isArray(accum[key])) {
            accum[key].push(val$$1);
        }
        else {
            accum[key] = [accum[key], val$$1];
        }
        return accum;
    };
    var getParams = function (queryString) {
        return queryString
            .split('&')
            .filter(identity)
            .map(splitEqual)
            .reduce(keyValsToObjectR, {});
    };
    function parseUrl$1(url) {
        var orEmptyString = function (x) { return x || ''; };
        var _a = splitHash(url).map(orEmptyString), beforehash = _a[0], hash = _a[1];
        var _b = splitQuery(beforehash).map(orEmptyString), path = _b[0], search = _b[1];
        return { path: path, search: search, hash: hash, url: url };
    }
    var buildUrl = function (loc) {
        var path = loc.path();
        var searchObject = loc.search();
        var hash = loc.hash();
        var search = Object.keys(searchObject)
            .map(function (key) {
            var param = searchObject[key];
            var vals = isArray(param) ? param : [param];
            return vals.map(function (val$$1) { return key + '=' + val$$1; });
        })
            .reduce(unnestR, [])
            .join('&');
        return path + (search ? '?' + search : '') + (hash ? '#' + hash : '');
    };
    function locationPluginFactory(name, isHtml5, serviceClass, configurationClass) {
        return function (uiRouter) {
            var service = (uiRouter.locationService = new serviceClass(uiRouter));
            var configuration = (uiRouter.locationConfig = new configurationClass(uiRouter, isHtml5));
            function dispose(router) {
                router.dispose(service);
                router.dispose(configuration);
            }
            return { name: name, service: service, configuration: configuration, dispose: dispose };
        };
    }

    /**
     * @internalapi
     * @module vanilla
     */ /** */
    /** A base `LocationServices` */
    var BaseLocationServices = /** @class */ (function () {
        function BaseLocationServices(router, fireAfterUpdate) {
            var _this = this;
            this.fireAfterUpdate = fireAfterUpdate;
            this._listeners = [];
            this._listener = function (evt) { return _this._listeners.forEach(function (cb) { return cb(evt); }); };
            this.hash = function () { return parseUrl$1(_this._get()).hash; };
            this.path = function () { return parseUrl$1(_this._get()).path; };
            this.search = function () { return getParams(parseUrl$1(_this._get()).search); };
            this._location = root.location;
            this._history = root.history;
        }
        BaseLocationServices.prototype.url = function (url, replace) {
            if (replace === void 0) { replace = true; }
            if (isDefined(url) && url !== this._get()) {
                this._set(null, null, url, replace);
                if (this.fireAfterUpdate) {
                    this._listeners.forEach(function (cb) { return cb({ url: url }); });
                }
            }
            return buildUrl(this);
        };
        BaseLocationServices.prototype.onChange = function (cb) {
            var _this = this;
            this._listeners.push(cb);
            return function () { return removeFrom(_this._listeners, cb); };
        };
        BaseLocationServices.prototype.dispose = function (router) {
            deregAll(this._listeners);
        };
        return BaseLocationServices;
    }());

    var __extends = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /** A `LocationServices` that uses the browser hash "#" to get/set the current location */
    var HashLocationService = /** @class */ (function (_super) {
        __extends(HashLocationService, _super);
        function HashLocationService(router) {
            var _this = _super.call(this, router, false) || this;
            root.addEventListener('hashchange', _this._listener, false);
            return _this;
        }
        HashLocationService.prototype._get = function () {
            return trimHashVal(this._location.hash);
        };
        HashLocationService.prototype._set = function (state, title, url, replace) {
            this._location.hash = url;
        };
        HashLocationService.prototype.dispose = function (router) {
            _super.prototype.dispose.call(this, router);
            root.removeEventListener('hashchange', this._listener);
        };
        return HashLocationService;
    }(BaseLocationServices));

    var __extends$1 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /** A `LocationServices` that gets/sets the current location from an in-memory object */
    var MemoryLocationService = /** @class */ (function (_super) {
        __extends$1(MemoryLocationService, _super);
        function MemoryLocationService(router) {
            return _super.call(this, router, true) || this;
        }
        MemoryLocationService.prototype._get = function () {
            return this._url;
        };
        MemoryLocationService.prototype._set = function (state, title, url, replace) {
            this._url = url;
        };
        return MemoryLocationService;
    }(BaseLocationServices));

    var __extends$2 = (undefined && undefined.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    /**
     * A `LocationServices` that gets/sets the current location using the browser's `location` and `history` apis
     *
     * Uses `history.pushState` and `history.replaceState`
     */
    var PushStateLocationService = /** @class */ (function (_super) {
        __extends$2(PushStateLocationService, _super);
        function PushStateLocationService(router) {
            var _this = _super.call(this, router, true) || this;
            _this._config = router.urlService.config;
            root.addEventListener('popstate', _this._listener, false);
            return _this;
        }
        /**
         * Gets the base prefix without:
         * - trailing slash
         * - trailing filename
         * - protocol and hostname
         *
         * If <base href='/base/'>, this returns '/base'.
         * If <base href='/foo/base/'>, this returns '/foo/base'.
         * If <base href='/base/index.html'>, this returns '/base'.
         * If <base href='http://localhost:8080/base/index.html'>, this returns '/base'.
         * If <base href='/base'>, this returns ''.
         * If <base href='http://localhost:8080'>, this returns ''.
         * If <base href='http://localhost:8080/'>, this returns ''.
         *
         * See: https://html.spec.whatwg.org/dev/semantics.html#the-base-element
         */
        PushStateLocationService.prototype._getBasePrefix = function () {
            return stripLastPathElement(this._config.baseHref());
        };
        PushStateLocationService.prototype._get = function () {
            var _a = this._location, pathname = _a.pathname, hash = _a.hash, search = _a.search;
            search = splitQuery(search)[1]; // strip ? if found
            hash = splitHash(hash)[1]; // strip # if found
            var basePrefix = this._getBasePrefix();
            var exactBaseHrefMatch = pathname === this._config.baseHref();
            var startsWithBase = pathname.substr(0, basePrefix.length) === basePrefix;
            pathname = exactBaseHrefMatch ? '/' : startsWithBase ? pathname.substring(basePrefix.length) : pathname;
            return pathname + (search ? '?' + search : '') + (hash ? '#' + hash : '');
        };
        PushStateLocationService.prototype._set = function (state, title, url, replace) {
            var basePrefix = this._getBasePrefix();
            var slash = url && url[0] !== '/' ? '/' : '';
            var fullUrl = url === '' || url === '/' ? this._config.baseHref() : basePrefix + slash + url;
            if (replace) {
                this._history.replaceState(state, title, fullUrl);
            }
            else {
                this._history.pushState(state, title, fullUrl);
            }
        };
        PushStateLocationService.prototype.dispose = function (router) {
            _super.prototype.dispose.call(this, router);
            root.removeEventListener('popstate', this._listener);
        };
        return PushStateLocationService;
    }(BaseLocationServices));

    /** A `LocationConfig` mock that gets/sets all config from an in-memory object */
    var MemoryLocationConfig = /** @class */ (function () {
        function MemoryLocationConfig() {
            var _this = this;
            this.dispose = noop;
            this._baseHref = '';
            this._port = 80;
            this._protocol = 'http';
            this._host = 'localhost';
            this._hashPrefix = '';
            this.port = function () { return _this._port; };
            this.protocol = function () { return _this._protocol; };
            this.host = function () { return _this._host; };
            this.baseHref = function () { return _this._baseHref; };
            this.html5Mode = function () { return false; };
            this.hashPrefix = function (newval) { return (isDefined(newval) ? (_this._hashPrefix = newval) : _this._hashPrefix); };
        }
        return MemoryLocationConfig;
    }());

    /**
     * @internalapi
     * @module vanilla
     */
    /** A `LocationConfig` that delegates to the browser's `location` object */
    var BrowserLocationConfig = /** @class */ (function () {
        function BrowserLocationConfig(router, _isHtml5) {
            if (_isHtml5 === void 0) { _isHtml5 = false; }
            this._isHtml5 = _isHtml5;
            this._baseHref = undefined;
            this._hashPrefix = '';
        }
        BrowserLocationConfig.prototype.port = function () {
            if (location.port) {
                return Number(location.port);
            }
            return this.protocol() === 'https' ? 443 : 80;
        };
        BrowserLocationConfig.prototype.protocol = function () {
            return location.protocol.replace(/:/g, '');
        };
        BrowserLocationConfig.prototype.host = function () {
            return location.hostname;
        };
        BrowserLocationConfig.prototype.html5Mode = function () {
            return this._isHtml5;
        };
        BrowserLocationConfig.prototype.hashPrefix = function (newprefix) {
            return isDefined(newprefix) ? (this._hashPrefix = newprefix) : this._hashPrefix;
        };
        BrowserLocationConfig.prototype.baseHref = function (href) {
            return isDefined(href)
                ? (this._baseHref = href)
                : isDefined(this._baseHref) ? this._baseHref : this.applyDocumentBaseHref();
        };
        BrowserLocationConfig.prototype.applyDocumentBaseHref = function () {
            var baseTag = document.getElementsByTagName('base')[0];
            return (this._baseHref = baseTag ? baseTag.href.substr(location.origin.length) : location.pathname || '/');
        };
        BrowserLocationConfig.prototype.dispose = function () { };
        return BrowserLocationConfig;
    }());

    /**
     * @internalapi
     * @module vanilla
     */
    function servicesPlugin(router) {
        services.$injector = $injector;
        services.$q = $q;
        return { name: 'vanilla.services', $q: $q, $injector: $injector, dispose: function () { return null; } };
    }
    /** A `UIRouterPlugin` uses the browser hash to get/set the current location */
    var hashLocationPlugin = locationPluginFactory('vanilla.hashBangLocation', false, HashLocationService, BrowserLocationConfig);
    /** A `UIRouterPlugin` that gets/sets the current location using the browser's `location` and `history` apis */
    var pushStateLocationPlugin = locationPluginFactory('vanilla.pushStateLocation', true, PushStateLocationService, BrowserLocationConfig);
    /** A `UIRouterPlugin` that gets/sets the current location from an in-memory object */
    var memoryLocationPlugin = locationPluginFactory('vanilla.memoryLocation', false, MemoryLocationService, MemoryLocationConfig);

    /**
     * @internalapi
     * @module vanilla
     */

    /**
     * # Core classes and interfaces
     *
     * The classes and interfaces that are core to ui-router and do not belong
     * to a more specific subsystem (such as resolve).
     *
     * @coreapi
     * @preferred
     * @module core
     */ /** for typedoc */
    /** @internalapi */
    var UIRouterPluginBase = /** @class */ (function () {
        function UIRouterPluginBase() {
        }
        UIRouterPluginBase.prototype.dispose = function (router) { };
        return UIRouterPluginBase;
    }());

    /**
     * @coreapi
     * @module common
     */ /** */

    var index = /*#__PURE__*/Object.freeze({
        root: root,
        fromJson: fromJson,
        toJson: toJson,
        forEach: forEach,
        extend: extend,
        equals: equals,
        identity: identity,
        noop: noop,
        createProxyFunctions: createProxyFunctions,
        inherit: inherit,
        inArray: inArray,
        _inArray: _inArray,
        removeFrom: removeFrom,
        _removeFrom: _removeFrom,
        pushTo: pushTo,
        _pushTo: _pushTo,
        deregAll: deregAll,
        defaults: defaults,
        mergeR: mergeR,
        ancestors: ancestors,
        pick: pick,
        omit: omit,
        pluck: pluck,
        filter: filter,
        find: find,
        mapObj: mapObj,
        map: map,
        values: values,
        allTrueR: allTrueR,
        anyTrueR: anyTrueR,
        unnestR: unnestR,
        flattenR: flattenR,
        pushR: pushR,
        uniqR: uniqR,
        unnest: unnest,
        flatten: flatten,
        assertPredicate: assertPredicate,
        assertMap: assertMap,
        assertFn: assertFn,
        pairs: pairs,
        arrayTuples: arrayTuples,
        applyPairs: applyPairs,
        tail: tail,
        copy: copy,
        _extend: _extend,
        silenceUncaughtInPromise: silenceUncaughtInPromise,
        silentRejection: silentRejection,
        notImplemented: notImplemented,
        services: services,
        Glob: Glob,
        curry: curry,
        compose: compose,
        pipe: pipe,
        prop: prop,
        propEq: propEq,
        parse: parse,
        not: not,
        and: and,
        or: or,
        all: all,
        any: any,
        is: is,
        eq: eq,
        val: val,
        invoke: invoke,
        pattern: pattern,
        isUndefined: isUndefined,
        isDefined: isDefined,
        isNull: isNull,
        isNullOrUndefined: isNullOrUndefined,
        isFunction: isFunction,
        isNumber: isNumber,
        isString: isString,
        isObject: isObject,
        isArray: isArray,
        isDate: isDate,
        isRegExp: isRegExp,
        isState: isState,
        isInjectable: isInjectable,
        isPromise: isPromise,
        Queue: Queue,
        maxLength: maxLength,
        padString: padString,
        kebobString: kebobString,
        functionToString: functionToString,
        fnToString: fnToString,
        stringify: stringify,
        beforeAfterSubstr: beforeAfterSubstr,
        hostRegex: hostRegex,
        stripLastPathElement: stripLastPathElement,
        splitHash: splitHash,
        splitQuery: splitQuery,
        splitEqual: splitEqual,
        trimHashVal: trimHashVal,
        splitOnDelim: splitOnDelim,
        joinNeighborsR: joinNeighborsR,
        get Category () { return exports.Category; },
        Trace: Trace,
        trace: trace,
        get DefType () { return exports.DefType; },
        Param: Param,
        ParamTypes: ParamTypes,
        StateParams: StateParams,
        ParamType: ParamType,
        PathNode: PathNode,
        PathUtils: PathUtils,
        resolvePolicies: resolvePolicies,
        defaultResolvePolicy: defaultResolvePolicy,
        Resolvable: Resolvable,
        NATIVE_INJECTOR_TOKEN: NATIVE_INJECTOR_TOKEN,
        ResolveContext: ResolveContext,
        resolvablesBuilder: resolvablesBuilder,
        StateBuilder: StateBuilder,
        StateObject: StateObject,
        StateMatcher: StateMatcher,
        StateQueueManager: StateQueueManager,
        StateRegistry: StateRegistry,
        StateService: StateService,
        TargetState: TargetState,
        get TransitionHookPhase () { return exports.TransitionHookPhase; },
        get TransitionHookScope () { return exports.TransitionHookScope; },
        HookBuilder: HookBuilder,
        matchState: matchState,
        RegisteredHook: RegisteredHook,
        makeEvent: makeEvent,
        get RejectType () { return exports.RejectType; },
        Rejection: Rejection,
        Transition: Transition,
        TransitionHook: TransitionHook,
        TransitionEventType: TransitionEventType,
        defaultTransOpts: defaultTransOpts,
        TransitionService: TransitionService,
        UrlMatcher: UrlMatcher,
        UrlMatcherFactory: UrlMatcherFactory,
        UrlRouter: UrlRouter,
        UrlRuleFactory: UrlRuleFactory,
        BaseUrlRule: BaseUrlRule,
        UrlService: UrlService,
        ViewService: ViewService,
        UIRouterGlobals: UIRouterGlobals,
        UIRouter: UIRouter,
        $q: $q,
        $injector: $injector,
        BaseLocationServices: BaseLocationServices,
        HashLocationService: HashLocationService,
        MemoryLocationService: MemoryLocationService,
        PushStateLocationService: PushStateLocationService,
        MemoryLocationConfig: MemoryLocationConfig,
        BrowserLocationConfig: BrowserLocationConfig,
        keyValsToObjectR: keyValsToObjectR,
        getParams: getParams,
        parseUrl: parseUrl$1,
        buildUrl: buildUrl,
        locationPluginFactory: locationPluginFactory,
        servicesPlugin: servicesPlugin,
        hashLocationPlugin: hashLocationPlugin,
        pushStateLocationPlugin: pushStateLocationPlugin,
        memoryLocationPlugin: memoryLocationPlugin,
        UIRouterPluginBase: UIRouterPluginBase
    });

    function getNg1ViewConfigFactory() {
        var templateFactory = null;
        return function (path, view) {
            templateFactory = templateFactory || services.$injector.get('$templateFactory');
            return [new Ng1ViewConfig(path, view, templateFactory)];
        };
    }
    var hasAnyKey = function (keys, obj) { return keys.reduce(function (acc, key) { return acc || isDefined(obj[key]); }, false); };
    /**
     * This is a [[StateBuilder.builder]] function for angular1 `views`.
     *
     * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
     * handles the `views` property with logic specific to @uirouter/angularjs (ng1).
     *
     * If no `views: {}` property exists on the [[StateDeclaration]], then it creates the `views` object
     * and applies the state-level configuration to a view named `$default`.
     */
    function ng1ViewsBuilder(state) {
        // Do not process root state
        if (!state.parent)
            return {};
        var tplKeys = ['templateProvider', 'templateUrl', 'template', 'notify', 'async'], ctrlKeys = ['controller', 'controllerProvider', 'controllerAs', 'resolveAs'], compKeys = ['component', 'bindings', 'componentProvider'], nonCompKeys = tplKeys.concat(ctrlKeys), allViewKeys = compKeys.concat(nonCompKeys);
        // Do not allow a state to have both state-level props and also a `views: {}` property.
        // A state without a `views: {}` property can declare properties for the `$default` view as properties of the state.
        // However, the `$default` approach should not be mixed with a separate `views: ` block.
        if (isDefined(state.views) && hasAnyKey(allViewKeys, state)) {
            throw new Error("State '" + state.name + "' has a 'views' object. " +
                "It cannot also have \"view properties\" at the state level.  " +
                "Move the following properties into a view (in the 'views' object): " +
                (" " + allViewKeys.filter(function (key) { return isDefined(state[key]); }).join(', ')));
        }
        var views = {}, viewsObject = state.views || { $default: pick(state, allViewKeys) };
        forEach(viewsObject, function (config, name) {
            // Account for views: { "": { template... } }
            name = name || '$default';
            // Account for views: { header: "headerComponent" }
            if (isString(config))
                config = { component: config };
            // Make a shallow copy of the config object
            config = extend({}, config);
            // Do not allow a view to mix props for component-style view with props for template/controller-style view
            if (hasAnyKey(compKeys, config) && hasAnyKey(nonCompKeys, config)) {
                throw new Error("Cannot combine: " + compKeys.join('|') + " with: " + nonCompKeys.join('|') + " in stateview: '" + name + "@" + state.name + "'");
            }
            config.resolveAs = config.resolveAs || '$resolve';
            config.$type = 'ng1';
            config.$context = state;
            config.$name = name;
            var normalized = ViewService.normalizeUIViewTarget(config.$context, config.$name);
            config.$uiViewName = normalized.uiViewName;
            config.$uiViewContextAnchor = normalized.uiViewContextAnchor;
            views[name] = config;
        });
        return views;
    }
    var id$1 = 0;
    var Ng1ViewConfig = /** @class */ (function () {
        function Ng1ViewConfig(path, viewDecl, factory) {
            var _this = this;
            this.path = path;
            this.viewDecl = viewDecl;
            this.factory = factory;
            this.$id = id$1++;
            this.loaded = false;
            this.getTemplate = function (uiView, context) {
                return _this.component
                    ? _this.factory.makeComponentTemplate(uiView, context, _this.component, _this.viewDecl.bindings)
                    : _this.template;
            };
        }
        Ng1ViewConfig.prototype.load = function () {
            var _this = this;
            var $q$$1 = services.$q;
            var context = new ResolveContext(this.path);
            var params = this.path.reduce(function (acc, node) { return extend(acc, node.paramValues); }, {});
            var promises = {
                template: $q$$1.when(this.factory.fromConfig(this.viewDecl, params, context)),
                controller: $q$$1.when(this.getController(context)),
            };
            return $q$$1.all(promises).then(function (results) {
                trace.traceViewServiceEvent('Loaded', _this);
                _this.controller = results.controller;
                extend(_this, results.template); // Either { template: "tpl" } or { component: "cmpName" }
                return _this;
            });
        };
        /**
         * Gets the controller for a view configuration.
         *
         * @returns {Function|Promise.<Function>} Returns a controller, or a promise that resolves to a controller.
         */
        Ng1ViewConfig.prototype.getController = function (context) {
            var provider = this.viewDecl.controllerProvider;
            if (!isInjectable(provider))
                return this.viewDecl.controller;
            var deps = services.$injector.annotate(provider);
            var providerFn = isArray(provider) ? tail(provider) : provider;
            var resolvable = new Resolvable('', providerFn, deps);
            return resolvable.get(context);
        };
        return Ng1ViewConfig;
    }());

    /** @module view */
    /**
     * Service which manages loading of templates from a ViewConfig.
     */
    var TemplateFactory = /** @class */ (function () {
        function TemplateFactory() {
            var _this = this;
            /** @hidden */ this._useHttp = ng.version.minor < 3;
            /** @hidden */ this.$get = [
                '$http',
                '$templateCache',
                '$injector',
                function ($http, $templateCache, $injector$$1) {
                    _this.$templateRequest = $injector$$1.has && $injector$$1.has('$templateRequest') && $injector$$1.get('$templateRequest');
                    _this.$http = $http;
                    _this.$templateCache = $templateCache;
                    return _this;
                },
            ];
        }
        /** @hidden */
        TemplateFactory.prototype.useHttpService = function (value) {
            this._useHttp = value;
        };
        /**
         * Creates a template from a configuration object.
         *
         * @param config Configuration object for which to load a template.
         * The following properties are search in the specified order, and the first one
         * that is defined is used to create the template:
         *
         * @param params  Parameters to pass to the template function.
         * @param context The resolve context associated with the template's view
         *
         * @return {string|object}  The template html as a string, or a promise for
         * that string,or `null` if no template is configured.
         */
        TemplateFactory.prototype.fromConfig = function (config, params, context) {
            var defaultTemplate = '<ui-view></ui-view>';
            var asTemplate = function (result) { return services.$q.when(result).then(function (str) { return ({ template: str }); }); };
            var asComponent = function (result) { return services.$q.when(result).then(function (str) { return ({ component: str }); }); };
            return isDefined(config.template)
                ? asTemplate(this.fromString(config.template, params))
                : isDefined(config.templateUrl)
                    ? asTemplate(this.fromUrl(config.templateUrl, params))
                    : isDefined(config.templateProvider)
                        ? asTemplate(this.fromProvider(config.templateProvider, params, context))
                        : isDefined(config.component)
                            ? asComponent(config.component)
                            : isDefined(config.componentProvider)
                                ? asComponent(this.fromComponentProvider(config.componentProvider, params, context))
                                : asTemplate(defaultTemplate);
        };
        /**
         * Creates a template from a string or a function returning a string.
         *
         * @param template html template as a string or function that returns an html template as a string.
         * @param params Parameters to pass to the template function.
         *
         * @return {string|object} The template html as a string, or a promise for that
         * string.
         */
        TemplateFactory.prototype.fromString = function (template, params) {
            return isFunction(template) ? template(params) : template;
        };
        /**
         * Loads a template from the a URL via `$http` and `$templateCache`.
         *
         * @param {string|Function} url url of the template to load, or a function
         * that returns a url.
         * @param {Object} params Parameters to pass to the url function.
         * @return {string|Promise.<string>} The template html as a string, or a promise
         * for that string.
         */
        TemplateFactory.prototype.fromUrl = function (url, params) {
            if (isFunction(url))
                url = url(params);
            if (url == null)
                return null;
            if (this._useHttp) {
                return this.$http
                    .get(url, { cache: this.$templateCache, headers: { Accept: 'text/html' } })
                    .then(function (response) {
                    return response.data;
                });
            }
            return this.$templateRequest(url);
        };
        /**
         * Creates a template by invoking an injectable provider function.
         *
         * @param provider Function to invoke via `locals`
         * @param {Function} injectFn a function used to invoke the template provider
         * @return {string|Promise.<string>} The template html as a string, or a promise
         * for that string.
         */
        TemplateFactory.prototype.fromProvider = function (provider, params, context) {
            var deps = services.$injector.annotate(provider);
            var providerFn = isArray(provider) ? tail(provider) : provider;
            var resolvable = new Resolvable('', providerFn, deps);
            return resolvable.get(context);
        };
        /**
         * Creates a component's template by invoking an injectable provider function.
         *
         * @param provider Function to invoke via `locals`
         * @param {Function} injectFn a function used to invoke the template provider
         * @return {string} The template html as a string: "<component-name input1='::$resolve.foo'></component-name>".
         */
        TemplateFactory.prototype.fromComponentProvider = function (provider, params, context) {
            var deps = services.$injector.annotate(provider);
            var providerFn = isArray(provider) ? tail(provider) : provider;
            var resolvable = new Resolvable('', providerFn, deps);
            return resolvable.get(context);
        };
        /**
         * Creates a template from a component's name
         *
         * This implements route-to-component.
         * It works by retrieving the component (directive) metadata from the injector.
         * It analyses the component's bindings, then constructs a template that instantiates the component.
         * The template wires input and output bindings to resolves or from the parent component.
         *
         * @param uiView {object} The parent ui-view (for binding outputs to callbacks)
         * @param context The ResolveContext (for binding outputs to callbacks returned from resolves)
         * @param component {string} Component's name in camel case.
         * @param bindings An object defining the component's bindings: {foo: '<'}
         * @return {string} The template as a string: "<component-name input1='::$resolve.foo'></component-name>".
         */
        TemplateFactory.prototype.makeComponentTemplate = function (uiView, context, component, bindings) {
            bindings = bindings || {};
            // Bind once prefix
            var prefix = ng.version.minor >= 3 ? '::' : '';
            // Convert to kebob name. Add x- prefix if the string starts with `x-` or `data-`
            var kebob = function (camelCase) {
                var kebobed = kebobString(camelCase);
                return /^(x|data)-/.exec(kebobed) ? "x-" + kebobed : kebobed;
            };
            var attributeTpl = function (input) {
                var name = input.name, type = input.type;
                var attrName = kebob(name);
                // If the ui-view has an attribute which matches a binding on the routed component
                // then pass that attribute through to the routed component template.
                // Prefer ui-view wired mappings to resolve data, unless the resolve was explicitly bound using `bindings:`
                if (uiView.attr(attrName) && !bindings[name])
                    return attrName + "='" + uiView.attr(attrName) + "'";
                var resolveName = bindings[name] || name;
                // Pre-evaluate the expression for "@" bindings by enclosing in {{ }}
                // some-attr="{{ ::$resolve.someResolveName }}"
                if (type === '@')
                    return attrName + "='{{" + prefix + "$resolve." + resolveName + "}}'";
                // Wire "&" callbacks to resolves that return a callback function
                // Get the result of the resolve (should be a function) and annotate it to get its arguments.
                // some-attr="$resolve.someResolveResultName(foo, bar)"
                if (type === '&') {
                    var res = context.getResolvable(resolveName);
                    var fn = res && res.data;
                    var args = (fn && services.$injector.annotate(fn)) || [];
                    // account for array style injection, i.e., ['foo', function(foo) {}]
                    var arrayIdxStr = isArray(fn) ? "[" + (fn.length - 1) + "]" : '';
                    return attrName + "='$resolve." + resolveName + arrayIdxStr + "(" + args.join(',') + ")'";
                }
                // some-attr="::$resolve.someResolveName"
                return attrName + "='" + prefix + "$resolve." + resolveName + "'";
            };
            var attrs = getComponentBindings(component)
                .map(attributeTpl)
                .join(' ');
            var kebobName = kebob(component);
            return "<" + kebobName + " " + attrs + "></" + kebobName + ">";
        };
        return TemplateFactory;
    }());
    // Gets all the directive(s)' inputs ('@', '=', and '<') and outputs ('&')
    function getComponentBindings(name) {
        var cmpDefs = services.$injector.get(name + 'Directive'); // could be multiple
        if (!cmpDefs || !cmpDefs.length)
            throw new Error("Unable to find component named '" + name + "'");
        return cmpDefs.map(getBindings).reduce(unnestR, []);
    }
    // Given a directive definition, find its object input attributes
    // Use different properties, depending on the type of directive (component, bindToController, normal)
    var getBindings = function (def) {
        if (isObject(def.bindToController))
            return scopeBindings(def.bindToController);
        return scopeBindings(def.scope);
    };
    // for ng 1.2 style, process the scope: { input: "=foo" }
    // for ng 1.3 through ng 1.5, process the component's bindToController: { input: "=foo" } object
    var scopeBindings = function (bindingsObj) {
        return Object.keys(bindingsObj || {})
            // [ 'input', [ '=foo', '=', 'foo' ] ]
            .map(function (key) { return [key, /^([=<@&])[?]?(.*)/.exec(bindingsObj[key])]; })
            // skip malformed values
            .filter(function (tuple) { return isDefined(tuple) && isArray(tuple[1]); })
            // { name: ('foo' || 'input'), type: '=' }
            .map(function (tuple) { return ({ name: tuple[1][2] || tuple[0], type: tuple[1][1] }); });
    };

    /** @module ng1 */ /** for typedoc */
    /**
     * The Angular 1 `StateProvider`
     *
     * The `$stateProvider` works similar to Angular's v1 router, but it focuses purely
     * on state.
     *
     * A state corresponds to a "place" in the application in terms of the overall UI and
     * navigation. A state describes (via the controller / template / view properties) what
     * the UI looks like and does at that place.
     *
     * States often have things in common, and the primary way of factoring out these
     * commonalities in this model is via the state hierarchy, i.e. parent/child states aka
     * nested states.
     *
     * The `$stateProvider` provides interfaces to declare these states for your app.
     */
    var StateProvider = /** @class */ (function () {
        function StateProvider(stateRegistry, stateService) {
            this.stateRegistry = stateRegistry;
            this.stateService = stateService;
            createProxyFunctions(val(StateProvider.prototype), this, val(this));
        }
        /**
         * Decorates states when they are registered
         *
         * Allows you to extend (carefully) or override (at your own peril) the
         * `stateBuilder` object used internally by [[StateRegistry]].
         * This can be used to add custom functionality to ui-router,
         * for example inferring templateUrl based on the state name.
         *
         * When passing only a name, it returns the current (original or decorated) builder
         * function that matches `name`.
         *
         * The builder functions that can be decorated are listed below. Though not all
         * necessarily have a good use case for decoration, that is up to you to decide.
         *
         * In addition, users can attach custom decorators, which will generate new
         * properties within the state's internal definition. There is currently no clear
         * use-case for this beyond accessing internal states (i.e. $state.$current),
         * however, expect this to become increasingly relevant as we introduce additional
         * meta-programming features.
         *
         * **Warning**: Decorators should not be interdependent because the order of
         * execution of the builder functions in non-deterministic. Builder functions
         * should only be dependent on the state definition object and super function.
         *
         *
         * Existing builder functions and current return values:
         *
         * - **parent** `{object}` - returns the parent state object.
         * - **data** `{object}` - returns state data, including any inherited data that is not
         *   overridden by own values (if any).
         * - **url** `{object}` - returns a {@link ui.router.util.type:UrlMatcher UrlMatcher}
         *   or `null`.
         * - **navigable** `{object}` - returns closest ancestor state that has a URL (aka is
         *   navigable).
         * - **params** `{object}` - returns an array of state params that are ensured to
         *   be a super-set of parent's params.
         * - **views** `{object}` - returns a views object where each key is an absolute view
         *   name (i.e. "viewName@stateName") and each value is the config object
         *   (template, controller) for the view. Even when you don't use the views object
         *   explicitly on a state config, one is still created for you internally.
         *   So by decorating this builder function you have access to decorating template
         *   and controller properties.
         * - **ownParams** `{object}` - returns an array of params that belong to the state,
         *   not including any params defined by ancestor states.
         * - **path** `{string}` - returns the full path from the root down to this state.
         *   Needed for state activation.
         * - **includes** `{object}` - returns an object that includes every state that
         *   would pass a `$state.includes()` test.
         *
         * #### Example:
         * Override the internal 'views' builder with a function that takes the state
         * definition, and a reference to the internal function being overridden:
         * ```js
         * $stateProvider.decorator('views', function (state, parent) {
         *   let result = {},
         *       views = parent(state);
         *
         *   angular.forEach(views, function (config, name) {
         *     let autoName = (state.name + '.' + name).replace('.', '/');
         *     config.templateUrl = config.templateUrl || '/partials/' + autoName + '.html';
         *     result[name] = config;
         *   });
         *   return result;
         * });
         *
         * $stateProvider.state('home', {
         *   views: {
         *     'contact.list': { controller: 'ListController' },
         *     'contact.item': { controller: 'ItemController' }
         *   }
         * });
         * ```
         *
         *
         * ```js
         * // Auto-populates list and item views with /partials/home/contact/list.html,
         * // and /partials/home/contact/item.html, respectively.
         * $state.go('home');
         * ```
         *
         * @param {string} name The name of the builder function to decorate.
         * @param {object} func A function that is responsible for decorating the original
         * builder function. The function receives two parameters:
         *
         *   - `{object}` - state - The state config object.
         *   - `{object}` - super - The original builder function.
         *
         * @return {object} $stateProvider - $stateProvider instance
         */
        StateProvider.prototype.decorator = function (name, func) {
            return this.stateRegistry.decorator(name, func) || this;
        };
        StateProvider.prototype.state = function (name, definition) {
            if (isObject(name)) {
                definition = name;
            }
            else {
                definition.name = name;
            }
            this.stateRegistry.register(definition);
            return this;
        };
        /**
         * Registers an invalid state handler
         *
         * This is a passthrough to [[StateService.onInvalid]] for ng1.
         */
        StateProvider.prototype.onInvalid = function (callback) {
            return this.stateService.onInvalid(callback);
        };
        return StateProvider;
    }());

    /** @module ng1 */ /** */
    /**
     * This is a [[StateBuilder.builder]] function for angular1 `onEnter`, `onExit`,
     * `onRetain` callback hooks on a [[Ng1StateDeclaration]].
     *
     * When the [[StateBuilder]] builds a [[StateObject]] object from a raw [[StateDeclaration]], this builder
     * ensures that those hooks are injectable for @uirouter/angularjs (ng1).
     */
    var getStateHookBuilder = function (hookName) {
        return function stateHookBuilder(stateObject, parentFn) {
            var hook = stateObject[hookName];
            var pathname = hookName === 'onExit' ? 'from' : 'to';
            function decoratedNg1Hook(trans, state) {
                var resolveContext = new ResolveContext(trans.treeChanges(pathname));
                var subContext = resolveContext.subContext(state.$$state());
                var locals = extend(getLocals(subContext), { $state$: state, $transition$: trans });
                return services.$injector.invoke(hook, this, locals);
            }
            return hook ? decoratedNg1Hook : undefined;
        };
    };

    /**
     * @internalapi
     * @module ng1
     */ /** */
    /**
     * Implements UI-Router LocationServices and LocationConfig using Angular 1's $location service
     */
    var Ng1LocationServices = /** @class */ (function () {
        function Ng1LocationServices($locationProvider) {
            // .onChange() registry
            this._urlListeners = [];
            this.$locationProvider = $locationProvider;
            var _lp = val($locationProvider);
            createProxyFunctions(_lp, this, _lp, ['hashPrefix']);
        }
        /**
         * Applys ng1-specific path parameter encoding
         *
         * The Angular 1 `$location` service is a bit weird.
         * It doesn't allow slashes to be encoded/decoded bi-directionally.
         *
         * See the writeup at https://github.com/angular-ui/ui-router/issues/2598
         *
         * This code patches the `path` parameter type so it encoded/decodes slashes as ~2F
         *
         * @param router
         */
        Ng1LocationServices.monkeyPatchPathParameterType = function (router) {
            var pathType = router.urlMatcherFactory.type('path');
            pathType.encode = function (x) {
                return x != null ? x.toString().replace(/(~|\/)/g, function (m) { return ({ '~': '~~', '/': '~2F' }[m]); }) : x;
            };
            pathType.decode = function (x) {
                return x != null ? x.toString().replace(/(~~|~2F)/g, function (m) { return ({ '~~': '~', '~2F': '/' }[m]); }) : x;
            };
        };
        Ng1LocationServices.prototype.dispose = function () { };
        Ng1LocationServices.prototype.onChange = function (callback) {
            var _this = this;
            this._urlListeners.push(callback);
            return function () { return removeFrom(_this._urlListeners)(callback); };
        };
        Ng1LocationServices.prototype.html5Mode = function () {
            var html5Mode = this.$locationProvider.html5Mode();
            html5Mode = isObject(html5Mode) ? html5Mode.enabled : html5Mode;
            return html5Mode && this.$sniffer.history;
        };
        Ng1LocationServices.prototype.url = function (newUrl, replace, state) {
            if (replace === void 0) { replace = false; }
            if (isDefined(newUrl))
                this.$location.url(newUrl);
            if (replace)
                this.$location.replace();
            if (state)
                this.$location.state(state);
            return this.$location.url();
        };
        Ng1LocationServices.prototype._runtimeServices = function ($rootScope, $location, $sniffer, $browser) {
            var _this = this;
            this.$location = $location;
            this.$sniffer = $sniffer;
            // Bind $locationChangeSuccess to the listeners registered in LocationService.onChange
            $rootScope.$on('$locationChangeSuccess', function (evt) { return _this._urlListeners.forEach(function (fn) { return fn(evt); }); });
            var _loc = val($location);
            var _browser = val($browser);
            // Bind these LocationService functions to $location
            createProxyFunctions(_loc, this, _loc, ['replace', 'path', 'search', 'hash']);
            // Bind these LocationConfig functions to $location
            createProxyFunctions(_loc, this, _loc, ['port', 'protocol', 'host']);
            // Bind these LocationConfig functions to $browser
            createProxyFunctions(_browser, this, _browser, ['baseHref']);
        };
        return Ng1LocationServices;
    }());

    /** @module url */ /** */
    /**
     * Manages rules for client-side URL
     *
     * ### Deprecation warning:
     * This class is now considered to be an internal API
     * Use the [[UrlService]] instead.
     * For configuring URL rules, use the [[UrlRulesApi]] which can be found as [[UrlService.rules]].
     *
     * This class manages the router rules for what to do when the URL changes.
     *
     * This provider remains for backwards compatibility.
     *
     * @deprecated
     */
    var UrlRouterProvider = /** @class */ (function () {
        /** @hidden */
        function UrlRouterProvider(router) {
            this._router = router;
            this._urlRouter = router.urlRouter;
        }
        UrlRouterProvider.injectableHandler = function (router, handler) {
            return function (match) { return services.$injector.invoke(handler, null, { $match: match, $stateParams: router.globals.params }); };
        };
        /** @hidden */
        UrlRouterProvider.prototype.$get = function () {
            var urlRouter = this._urlRouter;
            urlRouter.update(true);
            if (!urlRouter.interceptDeferred)
                urlRouter.listen();
            return urlRouter;
        };
        /**
         * Registers a url handler function.
         *
         * Registers a low level url handler (a `rule`).
         * A rule detects specific URL patterns and returns a redirect, or performs some action.
         *
         * If a rule returns a string, the URL is replaced with the string, and all rules are fired again.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   // Here's an example of how you might allow case insensitive urls
         *   $urlRouterProvider.rule(function ($injector, $location) {
         *     var path = $location.path(),
         *         normalized = path.toLowerCase();
         *
         *     if (path !== normalized) {
         *       return normalized;
         *     }
         *   });
         * });
         * ```
         *
         * @param ruleFn
         * Handler function that takes `$injector` and `$location` services as arguments.
         * You can use them to detect a url and return a different url as a string.
         *
         * @return [[UrlRouterProvider]] (`this`)
         */
        UrlRouterProvider.prototype.rule = function (ruleFn) {
            var _this = this;
            if (!isFunction(ruleFn))
                throw new Error("'rule' must be a function");
            var match = function () { return ruleFn(services.$injector, _this._router.locationService); };
            var rule = new BaseUrlRule(match, identity);
            this._urlRouter.rule(rule);
            return this;
        };
        /**
         * Defines the path or behavior to use when no url can be matched.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   // if the path doesn't match any of the urls you configured
         *   // otherwise will take care of routing the user to the
         *   // specified url
         *   $urlRouterProvider.otherwise('/index');
         *
         *   // Example of using function rule as param
         *   $urlRouterProvider.otherwise(function ($injector, $location) {
         *     return '/a/valid/url';
         *   });
         * });
         * ```
         *
         * @param rule
         * The url path you want to redirect to or a function rule that returns the url path or performs a `$state.go()`.
         * The function version is passed two params: `$injector` and `$location` services, and should return a url string.
         *
         * @return {object} `$urlRouterProvider` - `$urlRouterProvider` instance
         */
        UrlRouterProvider.prototype.otherwise = function (rule) {
            var _this = this;
            var urlRouter = this._urlRouter;
            if (isString(rule)) {
                urlRouter.otherwise(rule);
            }
            else if (isFunction(rule)) {
                urlRouter.otherwise(function () { return rule(services.$injector, _this._router.locationService); });
            }
            else {
                throw new Error("'rule' must be a string or function");
            }
            return this;
        };
        /**
         * Registers a handler for a given url matching.
         *
         * If the handler is a string, it is
         * treated as a redirect, and is interpolated according to the syntax of match
         * (i.e. like `String.replace()` for `RegExp`, or like a `UrlMatcher` pattern otherwise).
         *
         * If the handler is a function, it is injectable.
         * It gets invoked if `$location` matches.
         * You have the option of inject the match object as `$match`.
         *
         * The handler can return
         *
         * - **falsy** to indicate that the rule didn't match after all, then `$urlRouter`
         *   will continue trying to find another one that matches.
         * - **string** which is treated as a redirect and passed to `$location.url()`
         * - **void** or any **truthy** value tells `$urlRouter` that the url was handled.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   $urlRouterProvider.when($state.url, function ($match, $stateParams) {
         *     if ($state.$current.navigable !== state ||
         *         !equalForKeys($match, $stateParams) {
         *      $state.transitionTo(state, $match, false);
         *     }
         *   });
         * });
         * ```
         *
         * @param what A pattern string to match, compiled as a [[UrlMatcher]].
         * @param handler The path (or function that returns a path) that you want to redirect your user to.
         * @param ruleCallback [optional] A callback that receives the `rule` registered with [[UrlMatcher.rule]]
         *
         * Note: the handler may also invoke arbitrary code, such as `$state.go()`
         */
        UrlRouterProvider.prototype.when = function (what, handler) {
            if (isArray(handler) || isFunction(handler)) {
                handler = UrlRouterProvider.injectableHandler(this._router, handler);
            }
            this._urlRouter.when(what, handler);
            return this;
        };
        /**
         * Disables monitoring of the URL.
         *
         * Call this method before UI-Router has bootstrapped.
         * It will stop UI-Router from performing the initial url sync.
         *
         * This can be useful to perform some asynchronous initialization before the router starts.
         * Once the initialization is complete, call [[listen]] to tell UI-Router to start watching and synchronizing the URL.
         *
         * #### Example:
         * ```js
         * var app = angular.module('app', ['ui.router']);
         *
         * app.config(function ($urlRouterProvider) {
         *   // Prevent $urlRouter from automatically intercepting URL changes;
         *   $urlRouterProvider.deferIntercept();
         * })
         *
         * app.run(function (MyService, $urlRouter, $http) {
         *   $http.get("/stuff").then(function(resp) {
         *     MyService.doStuff(resp.data);
         *     $urlRouter.listen();
         *     $urlRouter.sync();
         *   });
         * });
         * ```
         *
         * @param defer Indicates whether to defer location change interception.
         *        Passing no parameter is equivalent to `true`.
         */
        UrlRouterProvider.prototype.deferIntercept = function (defer) {
            this._urlRouter.deferIntercept(defer);
        };
        return UrlRouterProvider;
    }());

    /**
     * # Angular 1 types
     *
     * UI-Router core provides various Typescript types which you can use for code completion and validating parameter values, etc.
     * The customizations to the core types for Angular UI-Router are documented here.
     *
     * The optional [[$resolve]] service is also documented here.
     *
     * @module ng1
     * @preferred
     */
    ng.module("ui.router.angular1", []);
    var mod_init = ng.module('ui.router.init', ['ng']);
    var mod_util = ng.module('ui.router.util', ['ui.router.init']);
    var mod_rtr = ng.module('ui.router.router', ['ui.router.util']);
    var mod_state = ng.module('ui.router.state', ['ui.router.router', 'ui.router.util', 'ui.router.angular1']);
    var mod_main = ng.module('ui.router', ['ui.router.init', 'ui.router.state', 'ui.router.angular1']);
    var mod_cmpt = ng.module('ui.router.compat', ['ui.router']); // tslint:disable-line
    var router = null;
    $uiRouterProvider.$inject = ['$locationProvider'];
    /** This angular 1 provider instantiates a Router and exposes its services via the angular injector */
    function $uiRouterProvider($locationProvider) {
        // Create a new instance of the Router when the $uiRouterProvider is initialized
        router = this.router = new UIRouter();
        router.stateProvider = new StateProvider(router.stateRegistry, router.stateService);
        // Apply ng1 specific StateBuilder code for `views`, `resolve`, and `onExit/Retain/Enter` properties
        router.stateRegistry.decorator('views', ng1ViewsBuilder);
        router.stateRegistry.decorator('onExit', getStateHookBuilder('onExit'));
        router.stateRegistry.decorator('onRetain', getStateHookBuilder('onRetain'));
        router.stateRegistry.decorator('onEnter', getStateHookBuilder('onEnter'));
        router.viewService._pluginapi._viewConfigFactory('ng1', getNg1ViewConfigFactory());
        var ng1LocationService = (router.locationService = router.locationConfig = new Ng1LocationServices($locationProvider));
        Ng1LocationServices.monkeyPatchPathParameterType(router);
        // backwards compat: also expose router instance as $uiRouterProvider.router
        router['router'] = router;
        router['$get'] = $get;
        $get.$inject = ['$location', '$browser', '$sniffer', '$rootScope', '$http', '$templateCache'];
        function $get($location, $browser, $sniffer, $rootScope, $http, $templateCache) {
            ng1LocationService._runtimeServices($rootScope, $location, $sniffer, $browser);
            delete router['router'];
            delete router['$get'];
            return router;
        }
        return router;
    }
    var getProviderFor = function (serviceName) { return [
        '$uiRouterProvider',
        function ($urp) {
            var service = $urp.router[serviceName];
            service['$get'] = function () { return service; };
            return service;
        },
    ]; };
    // This effectively calls $get() on `$uiRouterProvider` to trigger init (when ng enters runtime)
    runBlock.$inject = ['$injector', '$q', '$uiRouter'];
    function runBlock($injector$$1, $q$$1, $uiRouter) {
        services.$injector = $injector$$1;
        services.$q = $q$$1;
        // The $injector is now available.
        // Find any resolvables that had dependency annotation deferred
        $uiRouter.stateRegistry
            .get()
            .map(function (x) { return x.$$state().resolvables; })
            .reduce(unnestR, [])
            .filter(function (x) { return x.deps === 'deferred'; })
            .forEach(function (resolvable) { return (resolvable.deps = $injector$$1.annotate(resolvable.resolveFn, $injector$$1.strictDi)); });
    }
    // $urlRouter service and $urlRouterProvider
    var getUrlRouterProvider = function (uiRouter) { return (uiRouter.urlRouterProvider = new UrlRouterProvider(uiRouter)); };
    // $state service and $stateProvider
    // $urlRouter service and $urlRouterProvider
    var getStateProvider = function () { return extend(router.stateProvider, { $get: function () { return router.stateService; } }); };
    watchDigests.$inject = ['$rootScope'];
    function watchDigests($rootScope) {
        $rootScope.$watch(function () {
            trace.approximateDigests++;
        });
    }
    mod_init.provider('$uiRouter', $uiRouterProvider);
    mod_rtr.provider('$urlRouter', ['$uiRouterProvider', getUrlRouterProvider]);
    mod_util.provider('$urlService', getProviderFor('urlService'));
    mod_util.provider('$urlMatcherFactory', ['$uiRouterProvider', function () { return router.urlMatcherFactory; }]);
    mod_util.provider('$templateFactory', function () { return new TemplateFactory(); });
    mod_state.provider('$stateRegistry', getProviderFor('stateRegistry'));
    mod_state.provider('$uiRouterGlobals', getProviderFor('globals'));
    mod_state.provider('$transitions', getProviderFor('transitionService'));
    mod_state.provider('$state', ['$uiRouterProvider', getStateProvider]);
    mod_state.factory('$stateParams', ['$uiRouter', function ($uiRouter) { return $uiRouter.globals.params; }]);
    mod_main.factory('$view', function () { return router.viewService; });
    mod_main.service('$trace', function () { return trace; });
    mod_main.run(watchDigests);
    mod_util.run(['$urlMatcherFactory', function ($urlMatcherFactory) { }]);
    mod_state.run(['$state', function ($state) { }]);
    mod_rtr.run(['$urlRouter', function ($urlRouter) { }]);
    mod_init.run(runBlock);
    /** @hidden TODO: find a place to move this */
    var getLocals = function (ctx) {
        var tokens = ctx.getTokens().filter(isString);
        var tuples = tokens.map(function (key) {
            var resolvable = ctx.getResolvable(key);
            var waitPolicy = ctx.getPolicy(resolvable).async;
            return [key, waitPolicy === 'NOWAIT' ? resolvable.promise : resolvable.data];
        });
        return tuples.reduce(applyPairs, {});
    };

    /**
     * The current (or pending) State Parameters
     *
     * An injectable global **Service Object** which holds the state parameters for the latest **SUCCESSFUL** transition.
     *
     * The values are not updated until *after* a `Transition` successfully completes.
     *
     * **Also:** an injectable **Per-Transition Object** object which holds the pending state parameters for the pending `Transition` currently running.
     *
     * ### Deprecation warning:
     *
     * The value injected for `$stateParams` is different depending on where it is injected.
     *
     * - When injected into an angular service, the object injected is the global **Service Object** with the parameter values for the latest successful `Transition`.
     * - When injected into transition hooks, resolves, or view controllers, the object is the **Per-Transition Object** with the parameter values for the running `Transition`.
     *
     * Because of these confusing details, this service is deprecated.
     *
     * ### Instead of using the global `$stateParams` service object,
     * inject [[$uiRouterGlobals]] and use [[UIRouterGlobals.params]]
     *
     * ```js
     * MyService.$inject = ['$uiRouterGlobals'];
     * function MyService($uiRouterGlobals) {
     *   return {
     *     paramValues: function () {
     *       return $uiRouterGlobals.params;
     *     }
     *   }
     * }
     * ```
     *
     * ### Instead of using the per-transition `$stateParams` object,
     * inject the current `Transition` (as [[$transition$]]) and use [[Transition.params]]
     *
     * ```js
     * MyController.$inject = ['$transition$'];
     * function MyController($transition$) {
     *   var username = $transition$.params().username;
     *   // .. do something with username
     * }
     * ```
     *
     * ---
     *
     * This object can be injected into other services.
     *
     * #### Deprecated Example:
     * ```js
     * SomeService.$inject = ['$http', '$stateParams'];
     * function SomeService($http, $stateParams) {
     *   return {
     *     getUser: function() {
     *       return $http.get('/api/users/' + $stateParams.username);
     *     }
     *   }
     * };
     * angular.service('SomeService', SomeService);
     * ```
     * @deprecated
     */

    /**
     * # Angular 1 Directives
     *
     * These are the directives included in UI-Router for Angular 1.
     * These directives are used in templates to create viewports and link/navigate to states.
     *
     * @ng1api
     * @preferred
     * @module directives
     */ /** for typedoc */
    /** @hidden */
    function parseStateRef(ref) {
        var parsed;
        var paramsOnly = ref.match(/^\s*({[^}]*})\s*$/);
        if (paramsOnly)
            ref = '(' + paramsOnly[1] + ')';
        parsed = ref.replace(/\n/g, ' ').match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/);
        if (!parsed || parsed.length !== 4)
            throw new Error("Invalid state ref '" + ref + "'");
        return { state: parsed[1] || null, paramExpr: parsed[3] || null };
    }
    /** @hidden */
    function stateContext(el) {
        var $uiView = el.parent().inheritedData('$uiView');
        var path = parse('$cfg.path')($uiView);
        return path ? tail(path).state.name : undefined;
    }
    /** @hidden */
    function processedDef($state, $element, def) {
        var uiState = def.uiState || $state.current.name;
        var uiStateOpts = extend(defaultOpts($element, $state), def.uiStateOpts || {});
        var href = $state.href(uiState, def.uiStateParams, uiStateOpts);
        return { uiState: uiState, uiStateParams: def.uiStateParams, uiStateOpts: uiStateOpts, href: href };
    }
    /** @hidden */
    function getTypeInfo(el) {
        // SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
        var isSvg = Object.prototype.toString.call(el.prop('href')) === '[object SVGAnimatedString]';
        var isForm = el[0].nodeName === 'FORM';
        return {
            attr: isForm ? 'action' : isSvg ? 'xlink:href' : 'href',
            isAnchor: el.prop('tagName').toUpperCase() === 'A',
            clickable: !isForm,
        };
    }
    /** @hidden */
    function clickHook(el, $state, $timeout, type, getDef) {
        return function (e) {
            var button = e.which || e.button, target = getDef();
            if (!(button > 1 || e.ctrlKey || e.metaKey || e.shiftKey || el.attr('target'))) {
                // HACK: This is to allow ng-clicks to be processed before the transition is initiated:
                var transition_1 = $timeout(function () {
                    if (!el.attr('disabled')) {
                        $state.go(target.uiState, target.uiStateParams, target.uiStateOpts);
                    }
                });
                e.preventDefault();
                // if the state has no URL, ignore one preventDefault from the <a> directive.
                var ignorePreventDefaultCount_1 = type.isAnchor && !target.href ? 1 : 0;
                e.preventDefault = function () {
                    if (ignorePreventDefaultCount_1-- <= 0)
                        $timeout.cancel(transition_1);
                };
            }
        };
    }
    /** @hidden */
    function defaultOpts(el, $state) {
        return {
            relative: stateContext(el) || $state.$current,
            inherit: true,
            source: 'sref',
        };
    }
    /** @hidden */
    function bindEvents(element, scope, hookFn, uiStateOpts) {
        var events;
        if (uiStateOpts) {
            events = uiStateOpts.events;
        }
        if (!isArray(events)) {
            events = ['click'];
        }
        var on = element.on ? 'on' : 'bind';
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var event_1 = events_1[_i];
            element[on](event_1, hookFn);
        }
        scope.$on('$destroy', function () {
            var off = element.off ? 'off' : 'unbind';
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var event_2 = events_2[_i];
                element[off](event_2, hookFn);
            }
        });
    }
    /**
     * `ui-sref`: A directive for linking to a state
     *
     * A directive which links to a state (and optionally, parameters).
     * When clicked, this directive activates the linked state with the supplied parameter values.
     *
     * ### Linked State
     * The attribute value of the `ui-sref` is the name of the state to link to.
     *
     * #### Example:
     * This will activate the `home` state when the link is clicked.
     * ```html
     * <a ui-sref="home">Home</a>
     * ```
     *
     * ### Relative Links
     * You can also use relative state paths within `ui-sref`, just like a relative path passed to `$state.go()` ([[StateService.go]]).
     * You just need to be aware that the path is relative to the state that *created* the link.
     * This allows a state to create a relative `ui-sref` which always targets the same destination.
     *
     * #### Example:
     * Both these links are relative to the parent state, even when a child state is currently active.
     * ```html
     * <a ui-sref=".child1">child 1 state</a>
     * <a ui-sref=".child2">child 2 state</a>
     * ```
     *
     * This link activates the parent state.
     * ```html
     * <a ui-sref="^">Return</a>
     * ```
     *
     * ### hrefs
     * If the linked state has a URL, the directive will automatically generate and
     * update the `href` attribute (using the [[StateService.href]]  method).
     *
     * #### Example:
     * Assuming the `users` state has a url of `/users/`
     * ```html
     * <a ui-sref="users" href="/users/">Users</a>
     * ```
     *
     * ### Parameter Values
     * In addition to the state name, a `ui-sref` can include parameter values which are applied when activating the state.
     * Param values can be provided in the `ui-sref` value after the state name, enclosed by parentheses.
     * The content inside the parentheses is an expression, evaluated to the parameter values.
     *
     * #### Example:
     * This example renders a list of links to users.
     * The state's `userId` parameter value comes from each user's `user.id` property.
     * ```html
     * <li ng-repeat="user in users">
     *   <a ui-sref="users.detail({ userId: user.id })">{{ user.displayName }}</a>
     * </li>
     * ```
     *
     * Note:
     * The parameter values expression is `$watch`ed for updates.
     *
     * ### Transition Options
     * You can specify [[TransitionOptions]] to pass to [[StateService.go]] by using the `ui-sref-opts` attribute.
     * Options are restricted to `location`, `inherit`, and `reload`.
     *
     * #### Example:
     * ```html
     * <a ui-sref="home" ui-sref-opts="{ reload: true }">Home</a>
     * ```
     *
     * ### Other DOM Events
     *
     * You can also customize which DOM events to respond to (instead of `click`) by
     * providing an `events` array in the `ui-sref-opts` attribute.
     *
     * #### Example:
     * ```html
     * <input type="text" ui-sref="contacts" ui-sref-opts="{ events: ['change', 'blur'] }">
     * ```
     *
     * ### Highlighting the active link
     * This directive can be used in conjunction with [[uiSrefActive]] to highlight the active link.
     *
     * ### Examples
     * If you have the following template:
     *
     * ```html
     * <a ui-sref="home">Home</a>
     * <a ui-sref="about">About</a>
     * <a ui-sref="{page: 2}">Next page</a>
     *
     * <ul>
     *     <li ng-repeat="contact in contacts">
     *         <a ui-sref="contacts.detail({ id: contact.id })">{{ contact.name }}</a>
     *     </li>
     * </ul>
     * ```
     *
     * Then (assuming the current state is `contacts`) the rendered html including hrefs would be:
     *
     * ```html
     * <a href="#/home" ui-sref="home">Home</a>
     * <a href="#/about" ui-sref="about">About</a>
     * <a href="#/contacts?page=2" ui-sref="{page: 2}">Next page</a>
     *
     * <ul>
     *     <li ng-repeat="contact in contacts">
     *         <a href="#/contacts/1" ui-sref="contacts.detail({ id: contact.id })">Joe</a>
     *     </li>
     *     <li ng-repeat="contact in contacts">
     *         <a href="#/contacts/2" ui-sref="contacts.detail({ id: contact.id })">Alice</a>
     *     </li>
     *     <li ng-repeat="contact in contacts">
     *         <a href="#/contacts/3" ui-sref="contacts.detail({ id: contact.id })">Bob</a>
     *     </li>
     * </ul>
     *
     * <a href="#/home" ui-sref="home" ui-sref-opts="{reload: true}">Home</a>
     * ```
     *
     * ### Notes
     *
     * - You can use `ui-sref` to change **only the parameter values** by omitting the state name and parentheses.
     * #### Example:
     * Sets the `lang` parameter to `en` and remains on the same state.
     *
     * ```html
     * <a ui-sref="{ lang: 'en' }">English</a>
     * ```
     *
     * - A middle-click, right-click, or ctrl-click is handled (natively) by the browser to open the href in a new window, for example.
     *
     * - Unlike the parameter values expression, the state name is not `$watch`ed (for performance reasons).
     * If you need to dynamically update the state being linked to, use the fully dynamic [[uiState]] directive.
     */
    var uiSrefDirective;
    uiSrefDirective = [
        '$uiRouter',
        '$timeout',
        function $StateRefDirective($uiRouter, $timeout) {
            var $state = $uiRouter.stateService;
            return {
                restrict: 'A',
                require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
                link: function (scope, element, attrs, uiSrefActive) {
                    var type = getTypeInfo(element);
                    var active = uiSrefActive[1] || uiSrefActive[0];
                    var unlinkInfoFn = null;
                    var hookFn;
                    var rawDef = {};
                    var getDef = function () { return processedDef($state, element, rawDef); };
                    var ref = parseStateRef(attrs.uiSref);
                    rawDef.uiState = ref.state;
                    rawDef.uiStateOpts = attrs.uiSrefOpts ? scope.$eval(attrs.uiSrefOpts) : {};
                    function update() {
                        var def = getDef();
                        if (unlinkInfoFn)
                            unlinkInfoFn();
                        if (active)
                            unlinkInfoFn = active.$$addStateInfo(def.uiState, def.uiStateParams);
                        if (def.href != null)
                            attrs.$set(type.attr, def.href);
                    }
                    if (ref.paramExpr) {
                        scope.$watch(ref.paramExpr, function (val$$1) {
                            rawDef.uiStateParams = extend({}, val$$1);
                            update();
                        }, true);
                        rawDef.uiStateParams = extend({}, scope.$eval(ref.paramExpr));
                    }
                    update();
                    scope.$on('$destroy', $uiRouter.stateRegistry.onStatesChanged(update));
                    scope.$on('$destroy', $uiRouter.transitionService.onSuccess({}, update));
                    if (!type.clickable)
                        return;
                    hookFn = clickHook(element, $state, $timeout, type, getDef);
                    bindEvents(element, scope, hookFn, rawDef.uiStateOpts);
                },
            };
        },
    ];
    /**
     * `ui-state`: A fully dynamic directive for linking to a state
     *
     * A directive which links to a state (and optionally, parameters).
     * When clicked, this directive activates the linked state with the supplied parameter values.
     *
     * **This directive is very similar to [[uiSref]], but it `$observe`s and `$watch`es/evaluates all its inputs.**
     *
     * A directive which links to a state (and optionally, parameters).
     * When clicked, this directive activates the linked state with the supplied parameter values.
     *
     * ### Linked State
     * The attribute value of `ui-state` is an expression which is `$watch`ed and evaluated as the state to link to.
     * **This is in contrast with `ui-sref`, which takes a state name as a string literal.**
     *
     * #### Example:
     * Create a list of links.
     * ```html
     * <li ng-repeat="link in navlinks">
     *   <a ui-state="link.state">{{ link.displayName }}</a>
     * </li>
     * ```
     *
     * ### Relative Links
     * If the expression evaluates to a relative path, it is processed like [[uiSref]].
     * You just need to be aware that the path is relative to the state that *created* the link.
     * This allows a state to create relative `ui-state` which always targets the same destination.
     *
     * ### hrefs
     * If the linked state has a URL, the directive will automatically generate and
     * update the `href` attribute (using the [[StateService.href]]  method).
     *
     * ### Parameter Values
     * In addition to the state name expression, a `ui-state` can include parameter values which are applied when activating the state.
     * Param values should be provided using the `ui-state-params` attribute.
     * The `ui-state-params` attribute value is `$watch`ed and evaluated as an expression.
     *
     * #### Example:
     * This example renders a list of links with param values.
     * The state's `userId` parameter value comes from each user's `user.id` property.
     * ```html
     * <li ng-repeat="link in navlinks">
     *   <a ui-state="link.state" ui-state-params="link.params">{{ link.displayName }}</a>
     * </li>
     * ```
     *
     * ### Transition Options
     * You can specify [[TransitionOptions]] to pass to [[StateService.go]] by using the `ui-state-opts` attribute.
     * Options are restricted to `location`, `inherit`, and `reload`.
     * The value of the `ui-state-opts` is `$watch`ed and evaluated as an expression.
     *
     * #### Example:
     * ```html
     * <a ui-state="returnto.state" ui-state-opts="{ reload: true }">Home</a>
     * ```
     *
     * ### Other DOM Events
     *
     * You can also customize which DOM events to respond to (instead of `click`) by
     * providing an `events` array in the `ui-state-opts` attribute.
     *
     * #### Example:
     * ```html
     * <input type="text" ui-state="contacts" ui-state-opts="{ events: ['change', 'blur'] }">
     * ```
     *
     * ### Highlighting the active link
     * This directive can be used in conjunction with [[uiSrefActive]] to highlight the active link.
     *
     * ### Notes
     *
     * - You can use `ui-params` to change **only the parameter values** by omitting the state name and supplying only `ui-state-params`.
     *   However, it might be simpler to use [[uiSref]] parameter-only links.
     *
     * #### Example:
     * Sets the `lang` parameter to `en` and remains on the same state.
     *
     * ```html
     * <a ui-state="" ui-state-params="{ lang: 'en' }">English</a>
     * ```
     *
     * - A middle-click, right-click, or ctrl-click is handled (natively) by the browser to open the href in a new window, for example.
     * ```
     */
    var uiStateDirective;
    uiStateDirective = [
        '$uiRouter',
        '$timeout',
        function $StateRefDynamicDirective($uiRouter, $timeout) {
            var $state = $uiRouter.stateService;
            return {
                restrict: 'A',
                require: ['?^uiSrefActive', '?^uiSrefActiveEq'],
                link: function (scope, element, attrs, uiSrefActive) {
                    var type = getTypeInfo(element);
                    var active = uiSrefActive[1] || uiSrefActive[0];
                    var unlinkInfoFn = null;
                    var hookFn;
                    var rawDef = {};
                    var getDef = function () { return processedDef($state, element, rawDef); };
                    var inputAttrs = ['uiState', 'uiStateParams', 'uiStateOpts'];
                    var watchDeregFns = inputAttrs.reduce(function (acc, attr) { return ((acc[attr] = noop), acc); }, {});
                    function update() {
                        var def = getDef();
                        if (unlinkInfoFn)
                            unlinkInfoFn();
                        if (active)
                            unlinkInfoFn = active.$$addStateInfo(def.uiState, def.uiStateParams);
                        if (def.href != null)
                            attrs.$set(type.attr, def.href);
                    }
                    inputAttrs.forEach(function (field) {
                        rawDef[field] = attrs[field] ? scope.$eval(attrs[field]) : null;
                        attrs.$observe(field, function (expr) {
                            watchDeregFns[field]();
                            watchDeregFns[field] = scope.$watch(expr, function (newval) {
                                rawDef[field] = newval;
                                update();
                            }, true);
                        });
                    });
                    update();
                    scope.$on('$destroy', $uiRouter.stateRegistry.onStatesChanged(update));
                    scope.$on('$destroy', $uiRouter.transitionService.onSuccess({}, update));
                    if (!type.clickable)
                        return;
                    hookFn = clickHook(element, $state, $timeout, type, getDef);
                    bindEvents(element, scope, hookFn, rawDef.uiStateOpts);
                },
            };
        },
    ];
    /**
     * `ui-sref-active` and `ui-sref-active-eq`: A directive that adds a CSS class when a `ui-sref` is active
     *
     * A directive working alongside [[uiSref]] and [[uiState]] to add classes to an element when the
     * related directive's state is active (and remove them when it is inactive).
     *
     * The primary use-case is to highlight the active link in navigation menus,
     * distinguishing it from the inactive menu items.
     *
     * ### Linking to a `ui-sref` or `ui-state`
     * `ui-sref-active` can live on the same element as `ui-sref`/`ui-state`, or it can be on a parent element.
     * If a `ui-sref-active` is a parent to more than one `ui-sref`/`ui-state`, it will apply the CSS class when **any of the links are active**.
     *
     * ### Matching
     *
     * The `ui-sref-active` directive applies the CSS class when the `ui-sref`/`ui-state`'s target state **or any child state is active**.
     * This is a "fuzzy match" which uses [[StateService.includes]].
     *
     * The `ui-sref-active-eq` directive applies the CSS class when the `ui-sref`/`ui-state`'s target state is directly active (not when child states are active).
     * This is an "exact match" which uses [[StateService.is]].
     *
     * ### Parameter values
     * If the `ui-sref`/`ui-state` includes parameter values, the current parameter values must match the link's values for the link to be highlighted.
     * This allows a list of links to the same state with different parameters to be rendered, and the correct one highlighted.
     *
     * #### Example:
     * ```html
     * <li ng-repeat="user in users" ui-sref-active="active">
     *   <a ui-sref="user.details({ userId: user.id })">{{ user.lastName }}</a>
     * </li>
     * ```
     *
     * ### Examples
     *
     * Given the following template:
     * #### Example:
     * ```html
     * <ul>
     *   <li ui-sref-active="active" class="item">
     *     <a href ui-sref="app.user({user: 'bilbobaggins'})">@bilbobaggins</a>
     *   </li>
     * </ul>
     * ```
     *
     * When the app state is `app.user` (or any child state),
     * and contains the state parameter "user" with value "bilbobaggins",
     * the resulting HTML will appear as (note the 'active' class):
     *
     * ```html
     * <ul>
     *   <li ui-sref-active="active" class="item active">
     *     <a ui-sref="app.user({user: 'bilbobaggins'})" href="/users/bilbobaggins">@bilbobaggins</a>
     *   </li>
     * </ul>
     * ```
     *
     * ### Glob mode
     *
     * It is possible to pass `ui-sref-active` an expression that evaluates to an object.
     * The objects keys represent active class names and values represent the respective state names/globs.
     * `ui-sref-active` will match if the current active state **includes** any of
     * the specified state names/globs, even the abstract ones.
     *
     * #### Example:
     * Given the following template, with "admin" being an abstract state:
     * ```html
     * <div ui-sref-active="{'active': 'admin.**'}">
     *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
     * </div>
     * ```
     *
     * Arrays are also supported as values in the `ngClass`-like interface.
     * This allows multiple states to add `active` class.
     *
     * #### Example:
     * Given the following template, with "admin.roles" being the current state, the class will be added too:
     * ```html
     * <div ui-sref-active="{'active': ['owner.**', 'admin.**']}">
     *   <a ui-sref-active="active" ui-sref="admin.roles">Roles</a>
     * </div>
     * ```
     *
     * When the current state is "admin.roles" the "active" class will be applied to both the `<div>` and `<a>` elements.
     * It is important to note that the state names/globs passed to `ui-sref-active` override any state provided by a linked `ui-sref`.
     *
     * ### Notes:
     *
     * - The class name is interpolated **once** during the directives link time (any further changes to the
     * interpolated value are ignored).
     *
     * - Multiple classes may be specified in a space-separated format: `ui-sref-active='class1 class2 class3'`
     */
    var uiSrefActiveDirective;
    uiSrefActiveDirective = [
        '$state',
        '$stateParams',
        '$interpolate',
        '$uiRouter',
        function $StateRefActiveDirective($state, $stateParams, $interpolate, $uiRouter) {
            return {
                restrict: 'A',
                controller: [
                    '$scope',
                    '$element',
                    '$attrs',
                    function ($scope, $element, $attrs) {
                        var states = [];
                        var activeEqClass;
                        var uiSrefActive;
                        // There probably isn't much point in $observing this
                        // uiSrefActive and uiSrefActiveEq share the same directive object with some
                        // slight difference in logic routing
                        activeEqClass = $interpolate($attrs.uiSrefActiveEq || '', false)($scope);
                        try {
                            uiSrefActive = $scope.$eval($attrs.uiSrefActive);
                        }
                        catch (e) {
                            // Do nothing. uiSrefActive is not a valid expression.
                            // Fall back to using $interpolate below
                        }
                        uiSrefActive = uiSrefActive || $interpolate($attrs.uiSrefActive || '', false)($scope);
                        setStatesFromDefinitionObject(uiSrefActive);
                        // Allow uiSref to communicate with uiSrefActive[Equals]
                        this.$$addStateInfo = function (newState, newParams) {
                            // we already got an explicit state provided by ui-sref-active, so we
                            // shadow the one that comes from ui-sref
                            if (isObject(uiSrefActive) && states.length > 0) {
                                return;
                            }
                            var deregister = addState(newState, newParams, uiSrefActive);
                            update();
                            return deregister;
                        };
                        function updateAfterTransition(trans) {
                            trans.promise.then(update, noop);
                        }
                        $scope.$on('$destroy', setupEventListeners());
                        if ($uiRouter.globals.transition) {
                            updateAfterTransition($uiRouter.globals.transition);
                        }
                        function setupEventListeners() {
                            var deregisterStatesChangedListener = $uiRouter.stateRegistry.onStatesChanged(handleStatesChanged);
                            var deregisterOnStartListener = $uiRouter.transitionService.onStart({}, updateAfterTransition);
                            var deregisterStateChangeSuccessListener = $scope.$on('$stateChangeSuccess', update);
                            return function cleanUp() {
                                deregisterStatesChangedListener();
                                deregisterOnStartListener();
                                deregisterStateChangeSuccessListener();
                            };
                        }
                        function handleStatesChanged() {
                            setStatesFromDefinitionObject(uiSrefActive);
                        }
                        function setStatesFromDefinitionObject(statesDefinition) {
                            if (isObject(statesDefinition)) {
                                states = [];
                                forEach(statesDefinition, function (stateOrName, activeClass) {
                                    // Helper function to abstract adding state.
                                    var addStateForClass = function (stateOrName, activeClass) {
                                        var ref = parseStateRef(stateOrName);
                                        addState(ref.state, $scope.$eval(ref.paramExpr), activeClass);
                                    };
                                    if (isString(stateOrName)) {
                                        // If state is string, just add it.
                                        addStateForClass(stateOrName, activeClass);
                                    }
                                    else if (isArray(stateOrName)) {
                                        // If state is an array, iterate over it and add each array item individually.
                                        forEach(stateOrName, function (stateOrName) {
                                            addStateForClass(stateOrName, activeClass);
                                        });
                                    }
                                });
                            }
                        }
                        function addState(stateName, stateParams, activeClass) {
                            var state = $state.get(stateName, stateContext($element));
                            var stateInfo = {
                                state: state || { name: stateName },
                                params: stateParams,
                                activeClass: activeClass,
                            };
                            states.push(stateInfo);
                            return function removeState() {
                                removeFrom(states)(stateInfo);
                            };
                        }
                        // Update route state
                        function update() {
                            var splitClasses = function (str) { return str.split(/\s/).filter(identity); };
                            var getClasses = function (stateList) {
                                return stateList
                                    .map(function (x) { return x.activeClass; })
                                    .map(splitClasses)
                                    .reduce(unnestR, []);
                            };
                            var allClasses = getClasses(states)
                                .concat(splitClasses(activeEqClass))
                                .reduce(uniqR, []);
                            var fuzzyClasses = getClasses(states.filter(function (x) { return $state.includes(x.state.name, x.params); }));
                            var exactlyMatchesAny = !!states.filter(function (x) { return $state.is(x.state.name, x.params); }).length;
                            var exactClasses = exactlyMatchesAny ? splitClasses(activeEqClass) : [];
                            var addClasses = fuzzyClasses.concat(exactClasses).reduce(uniqR, []);
                            var removeClasses = allClasses.filter(function (cls) { return !inArray(addClasses, cls); });
                            $scope.$evalAsync(function () {
                                addClasses.forEach(function (className) { return $element.addClass(className); });
                                removeClasses.forEach(function (className) { return $element.removeClass(className); });
                            });
                        }
                        update();
                    },
                ],
            };
        },
    ];
    ng
        .module('ui.router.state')
        .directive('uiSref', uiSrefDirective)
        .directive('uiSrefActive', uiSrefActiveDirective)
        .directive('uiSrefActiveEq', uiSrefActiveDirective)
        .directive('uiState', uiStateDirective);

    /** @module ng1 */ /** for typedoc */
    /**
     * `isState` Filter: truthy if the current state is the parameter
     *
     * Translates to [[StateService.is]] `$state.is("stateName")`.
     *
     * #### Example:
     * ```html
     * <div ng-if="'stateName' | isState">show if state is 'stateName'</div>
     * ```
     */
    $IsStateFilter.$inject = ['$state'];
    function $IsStateFilter($state) {
        var isFilter = function (state, params, options) {
            return $state.is(state, params, options);
        };
        isFilter.$stateful = true;
        return isFilter;
    }
    /**
     * `includedByState` Filter: truthy if the current state includes the parameter
     *
     * Translates to [[StateService.includes]]` $state.is("fullOrPartialStateName")`.
     *
     * #### Example:
     * ```html
     * <div ng-if="'fullOrPartialStateName' | includedByState">show if state includes 'fullOrPartialStateName'</div>
     * ```
     */
    $IncludedByStateFilter.$inject = ['$state'];
    function $IncludedByStateFilter($state) {
        var includesFilter = function (state, params, options) {
            return $state.includes(state, params, options);
        };
        includesFilter.$stateful = true;
        return includesFilter;
    }
    ng
        .module('ui.router.state')
        .filter('isState', $IsStateFilter)
        .filter('includedByState', $IncludedByStateFilter);

    /**
     * @ng1api
     * @module directives
     */
    /**
     * `ui-view`: A viewport directive which is filled in by a view from the active state.
     *
     * ### Attributes
     *
     * - `name`: (Optional) A view name.
     *   The name should be unique amongst the other views in the same state.
     *   You can have views of the same name that live in different states.
     *   The ui-view can be targeted in a View using the name ([[Ng1StateDeclaration.views]]).
     *
     * - `autoscroll`: an expression. When it evaluates to true, the `ui-view` will be scrolled into view when it is activated.
     *   Uses [[$uiViewScroll]] to do the scrolling.
     *
     * - `onload`: Expression to evaluate whenever the view updates.
     *
     * #### Example:
     * A view can be unnamed or named.
     * ```html
     * <!-- Unnamed -->
     * <div ui-view></div>
     *
     * <!-- Named -->
     * <div ui-view="viewName"></div>
     *
     * <!-- Named (different style) -->
     * <ui-view name="viewName"></ui-view>
     * ```
     *
     * You can only have one unnamed view within any template (or root html). If you are only using a
     * single view and it is unnamed then you can populate it like so:
     *
     * ```html
     * <div ui-view></div>
     * $stateProvider.state("home", {
     *   template: "<h1>HELLO!</h1>"
     * })
     * ```
     *
     * The above is a convenient shortcut equivalent to specifying your view explicitly with the
     * [[Ng1StateDeclaration.views]] config property, by name, in this case an empty name:
     *
     * ```js
     * $stateProvider.state("home", {
     *   views: {
     *     "": {
     *       template: "<h1>HELLO!</h1>"
     *     }
     *   }
     * })
     * ```
     *
     * But typically you'll only use the views property if you name your view or have more than one view
     * in the same template. There's not really a compelling reason to name a view if its the only one,
     * but you could if you wanted, like so:
     *
     * ```html
     * <div ui-view="main"></div>
     * ```
     *
     * ```js
     * $stateProvider.state("home", {
     *   views: {
     *     "main": {
     *       template: "<h1>HELLO!</h1>"
     *     }
     *   }
     * })
     * ```
     *
     * Really though, you'll use views to set up multiple views:
     *
     * ```html
     * <div ui-view></div>
     * <div ui-view="chart"></div>
     * <div ui-view="data"></div>
     * ```
     *
     * ```js
     * $stateProvider.state("home", {
     *   views: {
     *     "": {
     *       template: "<h1>HELLO!</h1>"
     *     },
     *     "chart": {
     *       template: "<chart_thing/>"
     *     },
     *     "data": {
     *       template: "<data_thing/>"
     *     }
     *   }
     * })
     * ```
     *
     * #### Examples for `autoscroll`:
     * ```html
     * <!-- If autoscroll present with no expression,
     *      then scroll ui-view into view -->
     * <ui-view autoscroll/>
     *
     * <!-- If autoscroll present with valid expression,
     *      then scroll ui-view into view if expression evaluates to true -->
     * <ui-view autoscroll='true'/>
     * <ui-view autoscroll='false'/>
     * <ui-view autoscroll='scopeVariable'/>
     * ```
     *
     * Resolve data:
     *
     * The resolved data from the state's `resolve` block is placed on the scope as `$resolve` (this
     * can be customized using [[Ng1ViewDeclaration.resolveAs]]).  This can be then accessed from the template.
     *
     * Note that when `controllerAs` is being used, `$resolve` is set on the controller instance *after* the
     * controller is instantiated.  The `$onInit()` hook can be used to perform initialization code which
     * depends on `$resolve` data.
     *
     * #### Example:
     * ```js
     * $stateProvider.state('home', {
     *   template: '<my-component user="$resolve.user"></my-component>',
     *   resolve: {
     *     user: function(UserService) { return UserService.fetchUser(); }
     *   }
     * });
     * ```
     */
    var uiView;
    uiView = [
        '$view',
        '$animate',
        '$uiViewScroll',
        '$interpolate',
        '$q',
        function $ViewDirective($view, $animate, $uiViewScroll, $interpolate, $q$$1) {
            function getRenderer(attrs, scope) {
                return {
                    enter: function (element, target, cb) {
                        if (ng.version.minor > 2) {
                            $animate.enter(element, null, target).then(cb);
                        }
                        else {
                            $animate.enter(element, null, target, cb);
                        }
                    },
                    leave: function (element, cb) {
                        if (ng.version.minor > 2) {
                            $animate.leave(element).then(cb);
                        }
                        else {
                            $animate.leave(element, cb);
                        }
                    },
                };
            }
            function configsEqual(config1, config2) {
                return config1 === config2;
            }
            var rootData = {
                $cfg: { viewDecl: { $context: $view._pluginapi._rootViewContext() } },
                $uiView: {},
            };
            var directive = {
                count: 0,
                restrict: 'ECA',
                terminal: true,
                priority: 400,
                transclude: 'element',
                compile: function (tElement, tAttrs, $transclude) {
                    return function (scope, $element, attrs) {
                        var onloadExp = attrs['onload'] || '', autoScrollExp = attrs['autoscroll'], renderer = getRenderer(attrs, scope), inherited = $element.inheritedData('$uiView') || rootData, name = $interpolate(attrs['uiView'] || attrs['name'] || '')(scope) || '$default';
                        var previousEl, currentEl, currentScope, viewConfig, unregister;
                        var activeUIView = {
                            $type: 'ng1',
                            id: directive.count++,
                            name: name,
                            fqn: inherited.$uiView.fqn ? inherited.$uiView.fqn + '.' + name : name,
                            config: null,
                            configUpdated: configUpdatedCallback,
                            get creationContext() {
                                // The context in which this ui-view "tag" was created
                                var fromParentTagConfig = parse('$cfg.viewDecl.$context')(inherited);
                                // Allow <ui-view name="foo"><ui-view name="bar"></ui-view></ui-view>
                                // See https://github.com/angular-ui/ui-router/issues/3355
                                var fromParentTag = parse('$uiView.creationContext')(inherited);
                                return fromParentTagConfig || fromParentTag;
                            },
                        };
                        trace.traceUIViewEvent('Linking', activeUIView);
                        function configUpdatedCallback(config) {
                            if (config && !(config instanceof Ng1ViewConfig))
                                return;
                            if (configsEqual(viewConfig, config))
                                return;
                            trace.traceUIViewConfigUpdated(activeUIView, config && config.viewDecl && config.viewDecl.$context);
                            viewConfig = config;
                            updateView(config);
                        }
                        $element.data('$uiView', { $uiView: activeUIView });
                        updateView();
                        unregister = $view.registerUIView(activeUIView);
                        scope.$on('$destroy', function () {
                            trace.traceUIViewEvent('Destroying/Unregistering', activeUIView);
                            unregister();
                        });
                        function cleanupLastView() {
                            if (previousEl) {
                                trace.traceUIViewEvent('Removing (previous) el', previousEl.data('$uiView'));
                                previousEl.remove();
                                previousEl = null;
                            }
                            if (currentScope) {
                                trace.traceUIViewEvent('Destroying scope', activeUIView);
                                currentScope.$destroy();
                                currentScope = null;
                            }
                            if (currentEl) {
                                var _viewData_1 = currentEl.data('$uiViewAnim');
                                trace.traceUIViewEvent('Animate out', _viewData_1);
                                renderer.leave(currentEl, function () {
                                    _viewData_1.$$animLeave.resolve();
                                    previousEl = null;
                                });
                                previousEl = currentEl;
                                currentEl = null;
                            }
                        }
                        function updateView(config) {
                            var newScope = scope.$new();
                            var animEnter = $q$$1.defer(), animLeave = $q$$1.defer();
                            var $uiViewData = {
                                $cfg: config,
                                $uiView: activeUIView,
                            };
                            var $uiViewAnim = {
                                $animEnter: animEnter.promise,
                                $animLeave: animLeave.promise,
                                $$animLeave: animLeave,
                            };
                            /**
                             * @ngdoc event
                             * @name ui.router.state.directive:ui-view#$viewContentLoading
                             * @eventOf ui.router.state.directive:ui-view
                             * @eventType emits on ui-view directive scope
                             * @description
                             *
                             * Fired once the view **begins loading**, *before* the DOM is rendered.
                             *
                             * @param {Object} event Event object.
                             * @param {string} viewName Name of the view.
                             */
                            newScope.$emit('$viewContentLoading', name);
                            var cloned = $transclude(newScope, function (clone) {
                                clone.data('$uiViewAnim', $uiViewAnim);
                                clone.data('$uiView', $uiViewData);
                                renderer.enter(clone, $element, function onUIViewEnter() {
                                    animEnter.resolve();
                                    if (currentScope)
                                        currentScope.$emit('$viewContentAnimationEnded');
                                    if ((isDefined(autoScrollExp) && !autoScrollExp) || scope.$eval(autoScrollExp)) {
                                        $uiViewScroll(clone);
                                    }
                                });
                                cleanupLastView();
                            });
                            currentEl = cloned;
                            currentScope = newScope;
                            /**
                             * @ngdoc event
                             * @name ui.router.state.directive:ui-view#$viewContentLoaded
                             * @eventOf ui.router.state.directive:ui-view
                             * @eventType emits on ui-view directive scope
                             * @description           *
                             * Fired once the view is **loaded**, *after* the DOM is rendered.
                             *
                             * @param {Object} event Event object.
                             */
                            currentScope.$emit('$viewContentLoaded', config || viewConfig);
                            currentScope.$eval(onloadExp);
                        }
                    };
                },
            };
            return directive;
        },
    ];
    $ViewDirectiveFill.$inject = ['$compile', '$controller', '$transitions', '$view', '$q', '$timeout'];
    /** @hidden */
    function $ViewDirectiveFill($compile, $controller, $transitions, $view, $q$$1, $timeout) {
        var getControllerAs = parse('viewDecl.controllerAs');
        var getResolveAs = parse('viewDecl.resolveAs');
        return {
            restrict: 'ECA',
            priority: -400,
            compile: function (tElement) {
                var initial = tElement.html();
                tElement.empty();
                return function (scope, $element) {
                    var data = $element.data('$uiView');
                    if (!data) {
                        $element.html(initial);
                        $compile($element.contents())(scope);
                        return;
                    }
                    var cfg = data.$cfg || { viewDecl: {}, getTemplate: noop };
                    var resolveCtx = cfg.path && new ResolveContext(cfg.path);
                    $element.html(cfg.getTemplate($element, resolveCtx) || initial);
                    trace.traceUIViewFill(data.$uiView, $element.html());
                    var link = $compile($element.contents());
                    var controller = cfg.controller;
                    var controllerAs = getControllerAs(cfg);
                    var resolveAs = getResolveAs(cfg);
                    var locals = resolveCtx && getLocals(resolveCtx);
                    scope[resolveAs] = locals;
                    if (controller) {
                        var controllerInstance = $controller(controller, extend({}, locals, { $scope: scope, $element: $element }));
                        if (controllerAs) {
                            scope[controllerAs] = controllerInstance;
                            scope[controllerAs][resolveAs] = locals;
                        }
                        // TODO: Use $view service as a central point for registering component-level hooks
                        // Then, when a component is created, tell the $view service, so it can invoke hooks
                        // $view.componentLoaded(controllerInstance, { $scope: scope, $element: $element });
                        // scope.$on('$destroy', () => $view.componentUnloaded(controllerInstance, { $scope: scope, $element: $element }));
                        $element.data('$ngControllerController', controllerInstance);
                        $element.children().data('$ngControllerController', controllerInstance);
                        registerControllerCallbacks($q$$1, $transitions, controllerInstance, scope, cfg);
                    }
                    // Wait for the component to appear in the DOM
                    if (isString(cfg.viewDecl.component)) {
                        var cmp_1 = cfg.viewDecl.component;
                        var kebobName = kebobString(cmp_1);
                        var tagRegexp_1 = new RegExp("^(x-|data-)?" + kebobName + "$", 'i');
                        var getComponentController = function () {
                            var directiveEl = [].slice
                                .call($element[0].children)
                                .filter(function (el) { return el && el.tagName && tagRegexp_1.exec(el.tagName); });
                            return directiveEl && ng.element(directiveEl).data("$" + cmp_1 + "Controller");
                        };
                        var deregisterWatch_1 = scope.$watch(getComponentController, function (ctrlInstance) {
                            if (!ctrlInstance)
                                return;
                            registerControllerCallbacks($q$$1, $transitions, ctrlInstance, scope, cfg);
                            deregisterWatch_1();
                        });
                    }
                    link(scope);
                };
            },
        };
    }
    /** @hidden */
    var hasComponentImpl = typeof ng.module('ui.router')['component'] === 'function';
    /** @hidden incrementing id */
    var _uiCanExitId = 0;
    /** @hidden TODO: move these callbacks to $view and/or `/hooks/components.ts` or something */
    function registerControllerCallbacks($q$$1, $transitions, controllerInstance, $scope, cfg) {
        // Call $onInit() ASAP
        if (isFunction(controllerInstance.$onInit) && !(cfg.viewDecl.component && hasComponentImpl)) {
            controllerInstance.$onInit();
        }
        var viewState = tail(cfg.path).state.self;
        var hookOptions = { bind: controllerInstance };
        // Add component-level hook for onUiParamsChanged
        if (isFunction(controllerInstance.uiOnParamsChanged)) {
            var resolveContext = new ResolveContext(cfg.path);
            var viewCreationTrans_1 = resolveContext.getResolvable('$transition$').data;
            // Fire callback on any successful transition
            var paramsUpdated = function ($transition$) {
                // Exit early if the $transition$ is the same as the view was created within.
                // Exit early if the $transition$ will exit the state the view is for.
                if ($transition$ === viewCreationTrans_1 || $transition$.exiting().indexOf(viewState) !== -1)
                    return;
                var toParams = $transition$.params('to');
                var fromParams = $transition$.params('from');
                var getNodeSchema = function (node) { return node.paramSchema; };
                var toSchema = $transition$
                    .treeChanges('to')
                    .map(getNodeSchema)
                    .reduce(unnestR, []);
                var fromSchema = $transition$
                    .treeChanges('from')
                    .map(getNodeSchema)
                    .reduce(unnestR, []);
                // Find the to params that have different values than the from params
                var changedToParams = toSchema.filter(function (param) {
                    var idx = fromSchema.indexOf(param);
                    return idx === -1 || !fromSchema[idx].type.equals(toParams[param.id], fromParams[param.id]);
                });
                // Only trigger callback if a to param has changed or is new
                if (changedToParams.length) {
                    var changedKeys_1 = changedToParams.map(function (x) { return x.id; });
                    // Filter the params to only changed/new to params.  `$transition$.params()` may be used to get all params.
                    var newValues = filter(toParams, function (val$$1, key) { return changedKeys_1.indexOf(key) !== -1; });
                    controllerInstance.uiOnParamsChanged(newValues, $transition$);
                }
            };
            $scope.$on('$destroy', $transitions.onSuccess({}, paramsUpdated, hookOptions));
        }
        // Add component-level hook for uiCanExit
        if (isFunction(controllerInstance.uiCanExit)) {
            var id_1 = _uiCanExitId++;
            var cacheProp_1 = '_uiCanExitIds';
            // Returns true if a redirect transition already answered truthy
            var prevTruthyAnswer_1 = function (trans) {
                return !!trans && ((trans[cacheProp_1] && trans[cacheProp_1][id_1] === true) || prevTruthyAnswer_1(trans.redirectedFrom()));
            };
            // If a user answered yes, but the transition was later redirected, don't also ask for the new redirect transition
            var wrappedHook = function (trans) {
                var promise;
                var ids = (trans[cacheProp_1] = trans[cacheProp_1] || {});
                if (!prevTruthyAnswer_1(trans)) {
                    promise = $q$$1.when(controllerInstance.uiCanExit(trans));
                    promise.then(function (val$$1) { return (ids[id_1] = val$$1 !== false); });
                }
                return promise;
            };
            var criteria = { exiting: viewState.name };
            $scope.$on('$destroy', $transitions.onBefore(criteria, wrappedHook, hookOptions));
        }
    }
    ng.module('ui.router.state').directive('uiView', uiView);
    ng.module('ui.router.state').directive('uiView', $ViewDirectiveFill);

    /** @module ng1 */ /** */
    /** @hidden */
    function $ViewScrollProvider() {
        var useAnchorScroll = false;
        this.useAnchorScroll = function () {
            useAnchorScroll = true;
        };
        this.$get = [
            '$anchorScroll',
            '$timeout',
            function ($anchorScroll, $timeout) {
                if (useAnchorScroll) {
                    return $anchorScroll;
                }
                return function ($element) {
                    return $timeout(function () {
                        $element[0].scrollIntoView();
                    }, 0, false);
                };
            },
        ];
    }
    ng.module('ui.router.state').provider('$uiViewScroll', $ViewScrollProvider);

    /**
     * Main entry point for angular 1.x build
     * @module ng1
     */ /** */
    var index$1 = 'ui.router';

    exports.default = index$1;
    exports.core = index;
    exports.watchDigests = watchDigests;
    exports.getLocals = getLocals;
    exports.getNg1ViewConfigFactory = getNg1ViewConfigFactory;
    exports.ng1ViewsBuilder = ng1ViewsBuilder;
    exports.Ng1ViewConfig = Ng1ViewConfig;
    exports.StateProvider = StateProvider;
    exports.UrlRouterProvider = UrlRouterProvider;
    exports.root = root;
    exports.fromJson = fromJson;
    exports.toJson = toJson;
    exports.forEach = forEach;
    exports.extend = extend;
    exports.equals = equals;
    exports.identity = identity;
    exports.noop = noop;
    exports.createProxyFunctions = createProxyFunctions;
    exports.inherit = inherit;
    exports.inArray = inArray;
    exports._inArray = _inArray;
    exports.removeFrom = removeFrom;
    exports._removeFrom = _removeFrom;
    exports.pushTo = pushTo;
    exports._pushTo = _pushTo;
    exports.deregAll = deregAll;
    exports.defaults = defaults;
    exports.mergeR = mergeR;
    exports.ancestors = ancestors;
    exports.pick = pick;
    exports.omit = omit;
    exports.pluck = pluck;
    exports.filter = filter;
    exports.find = find;
    exports.mapObj = mapObj;
    exports.map = map;
    exports.values = values;
    exports.allTrueR = allTrueR;
    exports.anyTrueR = anyTrueR;
    exports.unnestR = unnestR;
    exports.flattenR = flattenR;
    exports.pushR = pushR;
    exports.uniqR = uniqR;
    exports.unnest = unnest;
    exports.flatten = flatten;
    exports.assertPredicate = assertPredicate;
    exports.assertMap = assertMap;
    exports.assertFn = assertFn;
    exports.pairs = pairs;
    exports.arrayTuples = arrayTuples;
    exports.applyPairs = applyPairs;
    exports.tail = tail;
    exports.copy = copy;
    exports._extend = _extend;
    exports.silenceUncaughtInPromise = silenceUncaughtInPromise;
    exports.silentRejection = silentRejection;
    exports.notImplemented = notImplemented;
    exports.services = services;
    exports.Glob = Glob;
    exports.curry = curry;
    exports.compose = compose;
    exports.pipe = pipe;
    exports.prop = prop;
    exports.propEq = propEq;
    exports.parse = parse;
    exports.not = not;
    exports.and = and;
    exports.or = or;
    exports.all = all;
    exports.any = any;
    exports.is = is;
    exports.eq = eq;
    exports.val = val;
    exports.invoke = invoke;
    exports.pattern = pattern;
    exports.isUndefined = isUndefined;
    exports.isDefined = isDefined;
    exports.isNull = isNull;
    exports.isNullOrUndefined = isNullOrUndefined;
    exports.isFunction = isFunction;
    exports.isNumber = isNumber;
    exports.isString = isString;
    exports.isObject = isObject;
    exports.isArray = isArray;
    exports.isDate = isDate;
    exports.isRegExp = isRegExp;
    exports.isState = isState;
    exports.isInjectable = isInjectable;
    exports.isPromise = isPromise;
    exports.Queue = Queue;
    exports.maxLength = maxLength;
    exports.padString = padString;
    exports.kebobString = kebobString;
    exports.functionToString = functionToString;
    exports.fnToString = fnToString;
    exports.stringify = stringify;
    exports.beforeAfterSubstr = beforeAfterSubstr;
    exports.hostRegex = hostRegex;
    exports.stripLastPathElement = stripLastPathElement;
    exports.splitHash = splitHash;
    exports.splitQuery = splitQuery;
    exports.splitEqual = splitEqual;
    exports.trimHashVal = trimHashVal;
    exports.splitOnDelim = splitOnDelim;
    exports.joinNeighborsR = joinNeighborsR;
    exports.Trace = Trace;
    exports.trace = trace;
    exports.Param = Param;
    exports.ParamTypes = ParamTypes;
    exports.StateParams = StateParams;
    exports.ParamType = ParamType;
    exports.PathNode = PathNode;
    exports.PathUtils = PathUtils;
    exports.resolvePolicies = resolvePolicies;
    exports.defaultResolvePolicy = defaultResolvePolicy;
    exports.Resolvable = Resolvable;
    exports.NATIVE_INJECTOR_TOKEN = NATIVE_INJECTOR_TOKEN;
    exports.ResolveContext = ResolveContext;
    exports.resolvablesBuilder = resolvablesBuilder;
    exports.StateBuilder = StateBuilder;
    exports.StateObject = StateObject;
    exports.StateMatcher = StateMatcher;
    exports.StateQueueManager = StateQueueManager;
    exports.StateRegistry = StateRegistry;
    exports.StateService = StateService;
    exports.TargetState = TargetState;
    exports.HookBuilder = HookBuilder;
    exports.matchState = matchState;
    exports.RegisteredHook = RegisteredHook;
    exports.makeEvent = makeEvent;
    exports.Rejection = Rejection;
    exports.Transition = Transition;
    exports.TransitionHook = TransitionHook;
    exports.TransitionEventType = TransitionEventType;
    exports.defaultTransOpts = defaultTransOpts;
    exports.TransitionService = TransitionService;
    exports.UrlMatcher = UrlMatcher;
    exports.UrlMatcherFactory = UrlMatcherFactory;
    exports.UrlRouter = UrlRouter;
    exports.UrlRuleFactory = UrlRuleFactory;
    exports.BaseUrlRule = BaseUrlRule;
    exports.UrlService = UrlService;
    exports.ViewService = ViewService;
    exports.UIRouterGlobals = UIRouterGlobals;
    exports.UIRouter = UIRouter;
    exports.$q = $q;
    exports.$injector = $injector;
    exports.BaseLocationServices = BaseLocationServices;
    exports.HashLocationService = HashLocationService;
    exports.MemoryLocationService = MemoryLocationService;
    exports.PushStateLocationService = PushStateLocationService;
    exports.MemoryLocationConfig = MemoryLocationConfig;
    exports.BrowserLocationConfig = BrowserLocationConfig;
    exports.keyValsToObjectR = keyValsToObjectR;
    exports.getParams = getParams;
    exports.parseUrl = parseUrl$1;
    exports.buildUrl = buildUrl;
    exports.locationPluginFactory = locationPluginFactory;
    exports.servicesPlugin = servicesPlugin;
    exports.hashLocationPlugin = hashLocationPlugin;
    exports.pushStateLocationPlugin = pushStateLocationPlugin;
    exports.memoryLocationPlugin = memoryLocationPlugin;
    exports.UIRouterPluginBase = UIRouterPluginBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-ui-router.js.map
