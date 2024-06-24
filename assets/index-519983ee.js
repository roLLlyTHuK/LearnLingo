function sb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function vI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ob(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var wI={exports:{}},rf={},EI={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mu=Symbol.for("react.element"),ab=Symbol.for("react.portal"),lb=Symbol.for("react.fragment"),ub=Symbol.for("react.strict_mode"),cb=Symbol.for("react.profiler"),hb=Symbol.for("react.provider"),db=Symbol.for("react.context"),fb=Symbol.for("react.forward_ref"),pb=Symbol.for("react.suspense"),mb=Symbol.for("react.memo"),gb=Symbol.for("react.lazy"),fw=Symbol.iterator;function _b(t){return t===null||typeof t!="object"?null:(t=fw&&t[fw]||t["@@iterator"],typeof t=="function"?t:null)}var TI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},II=Object.assign,SI={};function Ia(t,e,n){this.props=t,this.context=e,this.refs=SI,this.updater=n||TI}Ia.prototype.isReactComponent={};Ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function CI(){}CI.prototype=Ia.prototype;function D_(t,e,n){this.props=t,this.context=e,this.refs=SI,this.updater=n||TI}var L_=D_.prototype=new CI;L_.constructor=D_;II(L_,Ia.prototype);L_.isPureReactComponent=!0;var pw=Array.isArray,xI=Object.prototype.hasOwnProperty,M_={current:null},AI={key:!0,ref:!0,__self:!0,__source:!0};function RI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xI.call(e,r)&&!AI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Mu,type:t,key:s,ref:o,props:i,_owner:M_.current}}function yb(t,e){return{$$typeof:Mu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function F_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Mu}function vb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mw=/\/+/g;function Pp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vb(""+t.key):e.toString(36)}function sh(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Mu:case ab:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pp(o,0):r,pw(i)?(n="",t!=null&&(n=t.replace(mw,"$&/")+"/"),sh(i,e,n,"",function(c){return c})):i!=null&&(F_(i)&&(i=yb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pp(s,a);o+=sh(s,e,n,l,i)}else if(l=_b(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pp(s,a++),o+=sh(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xc(t,e,n){if(t==null)return t;var r=[],i=0;return sh(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},oh={transition:null},Eb={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:oh,ReactCurrentOwner:M_};_e.Children={map:xc,forEach:function(t,e,n){xc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xc(t,function(){e++}),e},toArray:function(t){return xc(t,function(e){return e})||[]},only:function(t){if(!F_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_e.Component=Ia;_e.Fragment=lb;_e.Profiler=cb;_e.PureComponent=D_;_e.StrictMode=ub;_e.Suspense=pb;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eb;_e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=II({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=M_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)xI.call(e,l)&&!AI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Mu,type:t.type,key:i,ref:s,props:r,_owner:o}};_e.createContext=function(t){return t={$$typeof:db,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hb,_context:t},t.Consumer=t};_e.createElement=RI;_e.createFactory=function(t){var e=RI.bind(null,t);return e.type=t,e};_e.createRef=function(){return{current:null}};_e.forwardRef=function(t){return{$$typeof:fb,render:t}};_e.isValidElement=F_;_e.lazy=function(t){return{$$typeof:gb,_payload:{_status:-1,_result:t},_init:wb}};_e.memo=function(t,e){return{$$typeof:mb,type:t,compare:e===void 0?null:e}};_e.startTransition=function(t){var e=oh.transition;oh.transition={};try{t()}finally{oh.transition=e}};_e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_e.useCallback=function(t,e){return sn.current.useCallback(t,e)};_e.useContext=function(t){return sn.current.useContext(t)};_e.useDebugValue=function(){};_e.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};_e.useEffect=function(t,e){return sn.current.useEffect(t,e)};_e.useId=function(){return sn.current.useId()};_e.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};_e.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};_e.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};_e.useMemo=function(t,e){return sn.current.useMemo(t,e)};_e.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};_e.useRef=function(t){return sn.current.useRef(t)};_e.useState=function(t){return sn.current.useState(t)};_e.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};_e.useTransition=function(){return sn.current.useTransition()};_e.version="18.2.0";EI.exports=_e;var j=EI.exports;const Me=vI(j),Vm=sb({__proto__:null,default:Me},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb=j,Ib=Symbol.for("react.element"),Sb=Symbol.for("react.fragment"),Cb=Object.prototype.hasOwnProperty,xb=Tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ab={key:!0,ref:!0,__self:!0,__source:!0};function kI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Cb.call(e,r)&&!Ab.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ib,type:t,key:s,ref:o,props:i,_owner:xb.current}}rf.Fragment=Sb;rf.jsx=kI;rf.jsxs=kI;wI.exports=rf;var P=wI.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yl.apply(this,arguments)}var Ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ci||(Ci={}));const gw="popstate";function Rb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Um("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mh(i)}return Pb(e,n,null,t)}function lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function V_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kb(){return Math.random().toString(36).substr(2,8)}function _w(t,e){return{usr:t.state,key:t.key,idx:e}}function Um(t,e,n,r){return n===void 0&&(n=null),Yl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Sa(e):e,{state:n,key:e&&e.key||r||kb()})}function Mh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Sa(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Pb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ci.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Yl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Ci.Pop;let R=h(),T=R==null?null:R-c;c=R,l&&l({action:a,location:I.location,delta:T})}function p(R,T){a=Ci.Push;let g=Um(I.location,R,T);n&&n(g,R),c=h()+1;let S=_w(g,c),O=I.createHref(g);try{o.pushState(S,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(O)}s&&l&&l({action:a,location:I.location,delta:1})}function _(R,T){a=Ci.Replace;let g=Um(I.location,R,T);n&&n(g,R),c=h();let S=_w(g,c),O=I.createHref(g);o.replaceState(S,"",O),s&&l&&l({action:a,location:I.location,delta:0})}function v(R){let T=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof R=="string"?R:Mh(R);return lt(T,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,T)}let I={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gw,d),l=R,()=>{i.removeEventListener(gw,d),l=null}},createHref(R){return e(i,R)},createURL:v,encodeLocation(R){let T=v(R);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:p,replace:_,go(R){return o.go(R)}};return I}var yw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yw||(yw={}));function bb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Sa(e):e,i=U_(r.pathname||"/",n);if(i==null)return null;let s=PI(t);Nb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=$b(s[a],Wb(i));return o}function PI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(lt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Pi([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),PI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ub(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of bI(s.path))i(s,o,l)}),e}function bI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=bI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Nb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ob=/^:\w+$/,Db=3,Lb=2,Mb=1,Fb=10,Vb=-2,vw=t=>t==="*";function Ub(t,e){let n=t.split("/"),r=n.length;return n.some(vw)&&(r+=Vb),e&&(r+=Lb),n.filter(i=>!vw(i)).reduce((i,s)=>i+(Ob.test(s)?Db:s===""?Mb:Fb),r)}function jb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $b(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=zb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!h)return null;Object.assign(r,h.params);let d=a.route;s.push({params:r,pathname:Pi([i,h.pathname]),pathnameBase:Kb(Pi([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=Pi([i,h.pathnameBase]))}return s}function zb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Bb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{if(h==="*"){let p=a[d]||"";o=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}return c[h]=qb(a[d]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Bb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),V_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Wb(t){try{return decodeURI(t)}catch(e){return V_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function qb(t,e){try{return decodeURIComponent(t)}catch(n){return V_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function U_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Hb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Sa(t):t;return{pathname:n?n.startsWith("/")?n:Gb(n,e):e,search:Qb(r),hash:Yb(i)}}function Gb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Sa(t):(i=Yl({},t),lt(!i.pathname||!i.pathname.includes("?"),bp("?","pathname","search",i)),lt(!i.pathname||!i.pathname.includes("#"),bp("#","pathname","hash",i)),lt(!i.search||!i.search.includes("#"),bp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=Hb(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Pi=t=>t.join("/").replace(/\/\/+/g,"/"),Kb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Qb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Yb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Xb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const NI=["post","put","patch","delete"];new Set(NI);const Jb=["get",...NI];new Set(Jb);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fh(){return Fh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fh.apply(this,arguments)}const z_=j.createContext(null),Zb=j.createContext(null),Ca=j.createContext(null),sf=j.createContext(null),ii=j.createContext({outlet:null,matches:[],isDataRoute:!1}),OI=j.createContext(null);function eN(t,e){let{relative:n}=e===void 0?{}:e;xa()||lt(!1);let{basename:r,navigator:i}=j.useContext(Ca),{hash:s,pathname:o,search:a}=MI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function xa(){return j.useContext(sf)!=null}function Aa(){return xa()||lt(!1),j.useContext(sf).location}function DI(t){j.useContext(Ca).static||j.useLayoutEffect(t)}function LI(){let{isDataRoute:t}=j.useContext(ii);return t?mN():tN()}function tN(){xa()||lt(!1);let t=j.useContext(z_),{basename:e,navigator:n}=j.useContext(Ca),{matches:r}=j.useContext(ii),{pathname:i}=Aa(),s=JSON.stringify(j_(r).map(l=>l.pathnameBase)),o=j.useRef(!1);return DI(()=>{o.current=!0}),j.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=$_(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Pi([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,s,i,t])}const nN=j.createContext(null);function rN(t){let e=j.useContext(ii).outlet;return e&&j.createElement(nN.Provider,{value:t},e)}function MI(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=j.useContext(ii),{pathname:i}=Aa(),s=JSON.stringify(j_(r).map(o=>o.pathnameBase));return j.useMemo(()=>$_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function iN(t,e){return sN(t,e)}function sN(t,e,n){xa()||lt(!1);let{navigator:r}=j.useContext(Ca),{matches:i}=j.useContext(ii),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Aa(),c;if(e){var h;let I=typeof e=="string"?Sa(e):e;a==="/"||(h=I.pathname)!=null&&h.startsWith(a)||lt(!1),c=I}else c=l;let d=c.pathname||"/",p=a==="/"?d:d.slice(a.length)||"/",_=bb(t,{pathname:p}),v=cN(_&&_.map(I=>Object.assign({},I,{params:Object.assign({},o,I.params),pathname:Pi([a,r.encodeLocation?r.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?a:Pi([a,r.encodeLocation?r.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),i,n);return e&&v?j.createElement(sf.Provider,{value:{location:Fh({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ci.Pop}},v):v}function oN(){let t=pN(),e=Xb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,s)}const aN=j.createElement(oN,null);class lN extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?j.createElement(ii.Provider,{value:this.props.routeContext},j.createElement(OI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uN(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(z_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ii.Provider,{value:e},r)}function cN(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||lt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||aN);let p=e.concat(s.slice(0,c+1)),_=()=>{let v;return h?v=d:l.route.Component?v=j.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,j.createElement(uN,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?j.createElement(lN,{location:n.location,revalidation:n.revalidation,component:d,error:h,children:_(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):_()},null)}var FI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(FI||{}),Vh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vh||{});function hN(t){let e=j.useContext(z_);return e||lt(!1),e}function dN(t){let e=j.useContext(Zb);return e||lt(!1),e}function fN(t){let e=j.useContext(ii);return e||lt(!1),e}function VI(t){let e=fN(),n=e.matches[e.matches.length-1];return n.route.id||lt(!1),n.route.id}function pN(){var t;let e=j.useContext(OI),n=dN(Vh.UseRouteError),r=VI(Vh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function mN(){let{router:t}=hN(FI.UseNavigateStable),e=VI(Vh.UseNavigateStable),n=j.useRef(!1);return DI(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fh({fromRouteId:e},s)))},[t,e])}function UI(t){let{to:e,replace:n,state:r,relative:i}=t;xa()||lt(!1);let{matches:s}=j.useContext(ii),{pathname:o}=Aa(),a=LI(),l=$_(e,j_(s).map(h=>h.pathnameBase),o,i==="path"),c=JSON.stringify(l);return j.useEffect(()=>a(JSON.parse(c),{replace:n,state:r,relative:i}),[a,c,i,n,r]),null}function B_(t){return rN(t.context)}function Mr(t){lt(!1)}function gN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ci.Pop,navigator:s,static:o=!1}=t;xa()&&lt(!1);let a=e.replace(/^\/*/,"/"),l=j.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Sa(r));let{pathname:c="/",search:h="",hash:d="",state:p=null,key:_="default"}=r,v=j.useMemo(()=>{let I=U_(c,a);return I==null?null:{location:{pathname:I,search:h,hash:d,state:p,key:_},navigationType:i}},[a,c,h,d,p,_,i]);return v==null?null:j.createElement(Ca.Provider,{value:l},j.createElement(sf.Provider,{children:n,value:v}))}function _N(t){let{children:e,location:n}=t;return iN(jm(e),n)}new Promise(()=>{});function jm(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,jm(r.props.children,s));return}r.type!==Mr&&lt(!1),!r.props.index||!r.props.children||lt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $m(){return $m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$m.apply(this,arguments)}function yN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function vN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wN(t,e){return t.button===0&&(!e||e==="_self")&&!vN(t)}const EN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],TN="startTransition",ww=Vm[TN];function IN(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=Rb({window:i,v5Compat:!0}));let o=s.current,[a,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=j.useCallback(d=>{c&&ww?ww(()=>l(d)):l(d)},[l,c]);return j.useLayoutEffect(()=>o.listen(h),[o,h]),j.createElement(gN,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const SN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",CN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,of=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h}=e,d=yN(e,EN),{basename:p}=j.useContext(Ca),_,v=!1;if(typeof c=="string"&&CN.test(c)&&(_=c,SN))try{let g=new URL(window.location.href),S=c.startsWith("//")?new URL(g.protocol+c):new URL(c),O=U_(S.pathname,p);S.origin===g.origin&&O!=null?c=O+S.search+S.hash:v=!0}catch{}let I=eN(c,{relative:i}),R=xN(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function T(g){r&&r(g),g.defaultPrevented||R(g)}return j.createElement("a",$m({},d,{href:_||I,onClick:v||s?r:T,ref:n,target:l}))});var Ew;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Ew||(Ew={}));var Tw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tw||(Tw={}));function xN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=LI(),l=Aa(),c=MI(t,{relative:o});return j.useCallback(h=>{if(wN(h,n)){h.preventDefault();let d=r!==void 0?r:Mh(l)===Mh(c);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}var zm={},jI={exports:{}},Pn={},$I={exports:{}},zI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,ee){var te=H.length;H.push(ee);e:for(;0<te;){var Pe=te-1>>>1,ye=H[Pe];if(0<i(ye,ee))H[Pe]=ee,H[te]=ye,te=Pe;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ee=H[0],te=H.pop();if(te!==ee){H[0]=te;e:for(var Pe=0,ye=H.length,Ne=ye>>>1;Pe<Ne;){var Tt=2*(Pe+1)-1,Ut=H[Tt],pt=Tt+1,st=H[pt];if(0>i(Ut,te))pt<ye&&0>i(st,Ut)?(H[Pe]=st,H[pt]=te,Pe=pt):(H[Pe]=Ut,H[Tt]=te,Pe=Tt);else if(pt<ye&&0>i(st,te))H[Pe]=st,H[pt]=te,Pe=pt;else break e}}return ee}function i(H,ee){var te=H.sortIndex-ee.sortIndex;return te!==0?te:H.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,p=3,_=!1,v=!1,I=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(H){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=H)r(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function O(H){if(I=!1,S(H),!v)if(n(l)!==null)v=!0,it(L);else{var ee=n(c);ee!==null&&Ie(O,ee.startTime-H)}}function L(H,ee){v=!1,I&&(I=!1,T(E),E=-1),_=!0;var te=p;try{for(S(ee),d=n(l);d!==null&&(!(d.expirationTime>ee)||H&&!k());){var Pe=d.callback;if(typeof Pe=="function"){d.callback=null,p=d.priorityLevel;var ye=Pe(d.expirationTime<=ee);ee=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&r(l),S(ee)}else r(l);d=n(l)}if(d!==null)var Ne=!0;else{var Tt=n(c);Tt!==null&&Ie(O,Tt.startTime-ee),Ne=!1}return Ne}finally{d=null,p=te,_=!1}}var V=!1,w=null,E=-1,C=5,A=-1;function k(){return!(t.unstable_now()-A<C)}function b(){if(w!==null){var H=t.unstable_now();A=H;var ee=!0;try{ee=w(!0,H)}finally{ee?x():(V=!1,w=null)}}else V=!1}var x;if(typeof g=="function")x=function(){g(b)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Le=de.port2;de.port1.onmessage=b,x=function(){Le.postMessage(null)}}else x=function(){R(b,0)};function it(H){w=H,V||(V=!0,x())}function Ie(H,ee){E=R(function(){H(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,it(L))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var te=p;p=ee;try{return H()}finally{p=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var te=p;p=H;try{return ee()}finally{p=te}},t.unstable_scheduleCallback=function(H,ee,te){var Pe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Pe+te:Pe):te=Pe,H){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,H={id:h++,callback:ee,priorityLevel:H,startTime:te,expirationTime:ye,sortIndex:-1},te>Pe?(H.sortIndex=te,e(c,H),n(l)===null&&H===n(c)&&(I?(T(E),E=-1):I=!0,Ie(O,te-Pe))):(H.sortIndex=ye,e(l,H),v||_||(v=!0,it(L))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var ee=p;return function(){var te=p;p=ee;try{return H.apply(this,arguments)}finally{p=te}}}})(zI);$I.exports=zI;var AN=$I.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=j,kn=AN;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var WI=new Set,Xl={};function Bs(t,e){Yo(t,e),Yo(t+"Capture",e)}function Yo(t,e){for(Xl[t]=e,t=0;t<e.length;t++)WI.add(e[t])}var Qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bm=Object.prototype.hasOwnProperty,RN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iw={},Sw={};function kN(t){return Bm.call(Sw,t)?!0:Bm.call(Iw,t)?!1:RN.test(t)?Sw[t]=!0:(Iw[t]=!0,!1)}function PN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function bN(t,e,n,r){if(e===null||typeof e>"u"||PN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var W_=/[\-:]([a-z])/g;function q_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(W_,q_);Ft[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(W_,q_);Ft[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(W_,q_);Ft[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function H_(t,e,n,r){var i=Ft.hasOwnProperty(e)?Ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(bN(e,n,i,r)&&(n=null),r||i===null?kN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var si=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ac=Symbol.for("react.element"),_o=Symbol.for("react.portal"),yo=Symbol.for("react.fragment"),G_=Symbol.for("react.strict_mode"),Wm=Symbol.for("react.profiler"),qI=Symbol.for("react.provider"),HI=Symbol.for("react.context"),K_=Symbol.for("react.forward_ref"),qm=Symbol.for("react.suspense"),Hm=Symbol.for("react.suspense_list"),Q_=Symbol.for("react.memo"),gi=Symbol.for("react.lazy"),GI=Symbol.for("react.offscreen"),Cw=Symbol.iterator;function nl(t){return t===null||typeof t!="object"?null:(t=Cw&&t[Cw]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,Np;function yl(t){if(Np===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Np=e&&e[1]||""}return`
`+Np+t}var Op=!1;function Dp(t,e){if(!t||Op)return"";Op=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Op=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yl(t):""}function NN(t){switch(t.tag){case 5:return yl(t.type);case 16:return yl("Lazy");case 13:return yl("Suspense");case 19:return yl("SuspenseList");case 0:case 2:case 15:return t=Dp(t.type,!1),t;case 11:return t=Dp(t.type.render,!1),t;case 1:return t=Dp(t.type,!0),t;default:return""}}function Gm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case yo:return"Fragment";case _o:return"Portal";case Wm:return"Profiler";case G_:return"StrictMode";case qm:return"Suspense";case Hm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case HI:return(t.displayName||"Context")+".Consumer";case qI:return(t._context.displayName||"Context")+".Provider";case K_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q_:return e=t.displayName||null,e!==null?e:Gm(t.type)||"Memo";case gi:e=t._payload,t=t._init;try{return Gm(t(e))}catch{}}return null}function ON(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gm(e);case 8:return e===G_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function KI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function DN(t){var e=KI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Rc(t){t._valueTracker||(t._valueTracker=DN(t))}function QI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=KI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Km(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function YI(t,e){e=e.checked,e!=null&&H_(t,"checked",e,!1)}function Qm(t,e){YI(t,e);var n=Wi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ym(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ym(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Aw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ym(t,e,n){(e!=="number"||Uh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vl=Array.isArray;function Lo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(vl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function XI(t,e){var n=Wi(e.value),r=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function JI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?JI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kc,ZI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kc=kc||document.createElement("div"),kc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Jl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},LN=["Webkit","ms","Moz","O"];Object.keys(Pl).forEach(function(t){LN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pl[e]=Pl[t]})});function eS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pl.hasOwnProperty(t)&&Pl[t]?(""+e).trim():e+"px"}function tS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var MN=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zm(t,e){if(e){if(MN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function eg(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tg=null;function Y_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ng=null,Mo=null,Fo=null;function Pw(t){if(t=Uu(t)){if(typeof ng!="function")throw Error(B(280));var e=t.stateNode;e&&(e=hf(e),ng(t.stateNode,t.type,e))}}function nS(t){Mo?Fo?Fo.push(t):Fo=[t]:Mo=t}function rS(){if(Mo){var t=Mo,e=Fo;if(Fo=Mo=null,Pw(t),e)for(t=0;t<e.length;t++)Pw(e[t])}}function iS(t,e){return t(e)}function sS(){}var Lp=!1;function oS(t,e,n){if(Lp)return t(e,n);Lp=!0;try{return iS(t,e,n)}finally{Lp=!1,(Mo!==null||Fo!==null)&&(sS(),rS())}}function Zl(t,e){var n=t.stateNode;if(n===null)return null;var r=hf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var rg=!1;if(Qr)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){rg=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{rg=!1}function FN(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var bl=!1,jh=null,$h=!1,ig=null,VN={onError:function(t){bl=!0,jh=t}};function UN(t,e,n,r,i,s,o,a,l){bl=!1,jh=null,FN.apply(VN,arguments)}function jN(t,e,n,r,i,s,o,a,l){if(UN.apply(this,arguments),bl){if(bl){var c=jh;bl=!1,jh=null}else throw Error(B(198));$h||($h=!0,ig=c)}}function Ws(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bw(t){if(Ws(t)!==t)throw Error(B(188))}function $N(t){var e=t.alternate;if(!e){if(e=Ws(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bw(i),t;if(s===r)return bw(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function lS(t){return t=$N(t),t!==null?uS(t):null}function uS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uS(t);if(e!==null)return e;t=t.sibling}return null}var cS=kn.unstable_scheduleCallback,Nw=kn.unstable_cancelCallback,zN=kn.unstable_shouldYield,BN=kn.unstable_requestPaint,at=kn.unstable_now,WN=kn.unstable_getCurrentPriorityLevel,X_=kn.unstable_ImmediatePriority,hS=kn.unstable_UserBlockingPriority,zh=kn.unstable_NormalPriority,qN=kn.unstable_LowPriority,dS=kn.unstable_IdlePriority,af=null,mr=null;function HN(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(af,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:QN,GN=Math.log,KN=Math.LN2;function QN(t){return t>>>=0,t===0?32:31-(GN(t)/KN|0)|0}var Pc=64,bc=4194304;function wl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=wl(a):(s&=o,s!==0&&(r=wl(s)))}else o=n&~i,o!==0?r=wl(o):s!==0&&(r=wl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function YN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=YN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fS(){var t=Pc;return Pc<<=1,!(Pc&4194240)&&(Pc=64),t}function Mp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function JN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function J_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var be=0;function pS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mS,Z_,gS,_S,yS,og=!1,Nc=[],bi=null,Ni=null,Oi=null,eu=new Map,tu=new Map,yi=[],ZN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ow(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":eu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":tu.delete(e.pointerId)}}function il(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Uu(e),e!==null&&Z_(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function e2(t,e,n,r,i){switch(e){case"focusin":return bi=il(bi,t,e,n,r,i),!0;case"dragenter":return Ni=il(Ni,t,e,n,r,i),!0;case"mouseover":return Oi=il(Oi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return eu.set(s,il(eu.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,tu.set(s,il(tu.get(s)||null,t,e,n,r,i)),!0}return!1}function vS(t){var e=fs(t.target);if(e!==null){var n=Ws(e);if(n!==null){if(e=n.tag,e===13){if(e=aS(n),e!==null){t.blockedOn=e,yS(t.priority,function(){gS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ah(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ag(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tg=r,n.target.dispatchEvent(r),tg=null}else return e=Uu(n),e!==null&&Z_(e),t.blockedOn=n,!1;e.shift()}return!0}function Dw(t,e,n){ah(t)&&n.delete(e)}function t2(){og=!1,bi!==null&&ah(bi)&&(bi=null),Ni!==null&&ah(Ni)&&(Ni=null),Oi!==null&&ah(Oi)&&(Oi=null),eu.forEach(Dw),tu.forEach(Dw)}function sl(t,e){t.blockedOn===e&&(t.blockedOn=null,og||(og=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,t2)))}function nu(t){function e(i){return sl(i,t)}if(0<Nc.length){sl(Nc[0],t);for(var n=1;n<Nc.length;n++){var r=Nc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bi!==null&&sl(bi,t),Ni!==null&&sl(Ni,t),Oi!==null&&sl(Oi,t),eu.forEach(e),tu.forEach(e),n=0;n<yi.length;n++)r=yi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yi.length&&(n=yi[0],n.blockedOn===null);)vS(n),n.blockedOn===null&&yi.shift()}var Vo=si.ReactCurrentBatchConfig,Wh=!0;function n2(t,e,n,r){var i=be,s=Vo.transition;Vo.transition=null;try{be=1,ey(t,e,n,r)}finally{be=i,Vo.transition=s}}function r2(t,e,n,r){var i=be,s=Vo.transition;Vo.transition=null;try{be=4,ey(t,e,n,r)}finally{be=i,Vo.transition=s}}function ey(t,e,n,r){if(Wh){var i=ag(t,e,n,r);if(i===null)Hp(t,e,r,qh,n),Ow(t,r);else if(e2(i,t,e,n,r))r.stopPropagation();else if(Ow(t,r),e&4&&-1<ZN.indexOf(t)){for(;i!==null;){var s=Uu(i);if(s!==null&&mS(s),s=ag(t,e,n,r),s===null&&Hp(t,e,r,qh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Hp(t,e,r,null,n)}}var qh=null;function ag(t,e,n,r){if(qh=null,t=Y_(r),t=fs(t),t!==null)if(e=Ws(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return qh=t,null}function wS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(WN()){case X_:return 1;case hS:return 4;case zh:case qN:return 16;case dS:return 536870912;default:return 16}default:return 16}}var xi=null,ty=null,lh=null;function ES(){if(lh)return lh;var t,e=ty,n=e.length,r,i="value"in xi?xi.value:xi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lh=i.slice(t,1<r?1-r:void 0)}function uh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oc(){return!0}function Lw(){return!1}function bn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oc:Lw,this.isPropagationStopped=Lw,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oc)},persist:function(){},isPersistent:Oc}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ny=bn(Ra),Vu=Ye({},Ra,{view:0,detail:0}),i2=bn(Vu),Fp,Vp,ol,lf=Ye({},Vu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ry,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ol&&(ol&&t.type==="mousemove"?(Fp=t.screenX-ol.screenX,Vp=t.screenY-ol.screenY):Vp=Fp=0,ol=t),Fp)},movementY:function(t){return"movementY"in t?t.movementY:Vp}}),Mw=bn(lf),s2=Ye({},lf,{dataTransfer:0}),o2=bn(s2),a2=Ye({},Vu,{relatedTarget:0}),Up=bn(a2),l2=Ye({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),u2=bn(l2),c2=Ye({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),h2=bn(c2),d2=Ye({},Ra,{data:0}),Fw=bn(d2),f2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m2[t])?!!e[t]:!1}function ry(){return g2}var _2=Ye({},Vu,{key:function(t){if(t.key){var e=f2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ry,charCode:function(t){return t.type==="keypress"?uh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),y2=bn(_2),v2=Ye({},lf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vw=bn(v2),w2=Ye({},Vu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ry}),E2=bn(w2),T2=Ye({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),I2=bn(T2),S2=Ye({},lf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C2=bn(S2),x2=[9,13,27,32],iy=Qr&&"CompositionEvent"in window,Nl=null;Qr&&"documentMode"in document&&(Nl=document.documentMode);var A2=Qr&&"TextEvent"in window&&!Nl,TS=Qr&&(!iy||Nl&&8<Nl&&11>=Nl),Uw=String.fromCharCode(32),jw=!1;function IS(t,e){switch(t){case"keyup":return x2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vo=!1;function R2(t,e){switch(t){case"compositionend":return SS(e);case"keypress":return e.which!==32?null:(jw=!0,Uw);case"textInput":return t=e.data,t===Uw&&jw?null:t;default:return null}}function k2(t,e){if(vo)return t==="compositionend"||!iy&&IS(t,e)?(t=ES(),lh=ty=xi=null,vo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return TS&&e.locale!=="ko"?null:e.data;default:return null}}var P2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $w(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P2[t.type]:e==="textarea"}function CS(t,e,n,r){nS(r),e=Hh(e,"onChange"),0<e.length&&(n=new ny("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ol=null,ru=null;function b2(t){MS(t,0)}function uf(t){var e=To(t);if(QI(e))return t}function N2(t,e){if(t==="change")return e}var xS=!1;if(Qr){var jp;if(Qr){var $p="oninput"in document;if(!$p){var zw=document.createElement("div");zw.setAttribute("oninput","return;"),$p=typeof zw.oninput=="function"}jp=$p}else jp=!1;xS=jp&&(!document.documentMode||9<document.documentMode)}function Bw(){Ol&&(Ol.detachEvent("onpropertychange",AS),ru=Ol=null)}function AS(t){if(t.propertyName==="value"&&uf(ru)){var e=[];CS(e,ru,t,Y_(t)),oS(b2,e)}}function O2(t,e,n){t==="focusin"?(Bw(),Ol=e,ru=n,Ol.attachEvent("onpropertychange",AS)):t==="focusout"&&Bw()}function D2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uf(ru)}function L2(t,e){if(t==="click")return uf(e)}function M2(t,e){if(t==="input"||t==="change")return uf(e)}function F2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:F2;function iu(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bm.call(e,i)||!nr(t[i],e[i]))return!1}return!0}function Ww(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qw(t,e){var n=Ww(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ww(n)}}function RS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?RS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kS(){for(var t=window,e=Uh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uh(t.document)}return e}function sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function V2(t){var e=kS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&RS(n.ownerDocument.documentElement,n)){if(r!==null&&sy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=qw(n,s);var o=qw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U2=Qr&&"documentMode"in document&&11>=document.documentMode,wo=null,lg=null,Dl=null,ug=!1;function Hw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ug||wo==null||wo!==Uh(r)||(r=wo,"selectionStart"in r&&sy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Dl&&iu(Dl,r)||(Dl=r,r=Hh(lg,"onSelect"),0<r.length&&(e=new ny("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=wo)))}function Dc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Eo={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},zp={},PS={};Qr&&(PS=document.createElement("div").style,"AnimationEvent"in window||(delete Eo.animationend.animation,delete Eo.animationiteration.animation,delete Eo.animationstart.animation),"TransitionEvent"in window||delete Eo.transitionend.transition);function cf(t){if(zp[t])return zp[t];if(!Eo[t])return t;var e=Eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in PS)return zp[t]=e[n];return t}var bS=cf("animationend"),NS=cf("animationiteration"),OS=cf("animationstart"),DS=cf("transitionend"),LS=new Map,Gw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){LS.set(t,e),Bs(e,[t])}for(var Bp=0;Bp<Gw.length;Bp++){var Wp=Gw[Bp],j2=Wp.toLowerCase(),$2=Wp[0].toUpperCase()+Wp.slice(1);Ji(j2,"on"+$2)}Ji(bS,"onAnimationEnd");Ji(NS,"onAnimationIteration");Ji(OS,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(DS,"onTransitionEnd");Yo("onMouseEnter",["mouseout","mouseover"]);Yo("onMouseLeave",["mouseout","mouseover"]);Yo("onPointerEnter",["pointerout","pointerover"]);Yo("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var El="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z2=new Set("cancel close invalid load scroll toggle".split(" ").concat(El));function Kw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jN(r,e,void 0,t),t.currentTarget=null}function MS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Kw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Kw(i,a,c),s=l}}}if($h)throw t=ig,$h=!1,ig=null,t}function $e(t,e){var n=e[pg];n===void 0&&(n=e[pg]=new Set);var r=t+"__bubble";n.has(r)||(FS(e,t,2,!1),n.add(r))}function qp(t,e,n){var r=0;e&&(r|=4),FS(n,t,r,e)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function su(t){if(!t[Lc]){t[Lc]=!0,WI.forEach(function(n){n!=="selectionchange"&&(z2.has(n)||qp(n,!1,t),qp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lc]||(e[Lc]=!0,qp("selectionchange",!1,e))}}function FS(t,e,n,r){switch(wS(e)){case 1:var i=n2;break;case 4:i=r2;break;default:i=ey}n=i.bind(null,e,n,t),i=void 0,!rg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Hp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}oS(function(){var c=s,h=Y_(n),d=[];e:{var p=LS.get(t);if(p!==void 0){var _=ny,v=t;switch(t){case"keypress":if(uh(n)===0)break e;case"keydown":case"keyup":_=y2;break;case"focusin":v="focus",_=Up;break;case"focusout":v="blur",_=Up;break;case"beforeblur":case"afterblur":_=Up;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Mw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=o2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=E2;break;case bS:case NS:case OS:_=u2;break;case DS:_=I2;break;case"scroll":_=i2;break;case"wheel":_=C2;break;case"copy":case"cut":case"paste":_=h2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Vw}var I=(e&4)!==0,R=!I&&t==="scroll",T=I?p!==null?p+"Capture":null:p;I=[];for(var g=c,S;g!==null;){S=g;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,T!==null&&(O=Zl(g,T),O!=null&&I.push(ou(g,O,S)))),R)break;g=g.return}0<I.length&&(p=new _(p,v,null,n,h),d.push({event:p,listeners:I}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==tg&&(v=n.relatedTarget||n.fromElement)&&(fs(v)||v[Yr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?fs(v):null,v!==null&&(R=Ws(v),v!==R||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(I=Mw,O="onMouseLeave",T="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(I=Vw,O="onPointerLeave",T="onPointerEnter",g="pointer"),R=_==null?p:To(_),S=v==null?p:To(v),p=new I(O,g+"leave",_,n,h),p.target=R,p.relatedTarget=S,O=null,fs(h)===c&&(I=new I(T,g+"enter",v,n,h),I.target=S,I.relatedTarget=R,O=I),R=O,_&&v)t:{for(I=_,T=v,g=0,S=I;S;S=lo(S))g++;for(S=0,O=T;O;O=lo(O))S++;for(;0<g-S;)I=lo(I),g--;for(;0<S-g;)T=lo(T),S--;for(;g--;){if(I===T||T!==null&&I===T.alternate)break t;I=lo(I),T=lo(T)}I=null}else I=null;_!==null&&Qw(d,p,_,I,!1),v!==null&&R!==null&&Qw(d,R,v,I,!0)}}e:{if(p=c?To(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var L=N2;else if($w(p))if(xS)L=M2;else{L=D2;var V=O2}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=L2);if(L&&(L=L(t,c))){CS(d,L,n,h);break e}V&&V(t,p,c),t==="focusout"&&(V=p._wrapperState)&&V.controlled&&p.type==="number"&&Ym(p,"number",p.value)}switch(V=c?To(c):window,t){case"focusin":($w(V)||V.contentEditable==="true")&&(wo=V,lg=c,Dl=null);break;case"focusout":Dl=lg=wo=null;break;case"mousedown":ug=!0;break;case"contextmenu":case"mouseup":case"dragend":ug=!1,Hw(d,n,h);break;case"selectionchange":if(U2)break;case"keydown":case"keyup":Hw(d,n,h)}var w;if(iy)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else vo?IS(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(TS&&n.locale!=="ko"&&(vo||E!=="onCompositionStart"?E==="onCompositionEnd"&&vo&&(w=ES()):(xi=h,ty="value"in xi?xi.value:xi.textContent,vo=!0)),V=Hh(c,E),0<V.length&&(E=new Fw(E,t,null,n,h),d.push({event:E,listeners:V}),w?E.data=w:(w=SS(n),w!==null&&(E.data=w)))),(w=A2?R2(t,n):k2(t,n))&&(c=Hh(c,"onBeforeInput"),0<c.length&&(h=new Fw("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=w))}MS(d,e)})}function ou(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Hh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Zl(t,n),s!=null&&r.unshift(ou(t,s,i)),s=Zl(t,e),s!=null&&r.push(ou(t,s,i))),t=t.return}return r}function lo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Zl(n,s),l!=null&&o.unshift(ou(n,l,a))):i||(l=Zl(n,s),l!=null&&o.push(ou(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var B2=/\r\n?/g,W2=/\u0000|\uFFFD/g;function Yw(t){return(typeof t=="string"?t:""+t).replace(B2,`
`).replace(W2,"")}function Mc(t,e,n){if(e=Yw(e),Yw(t)!==e&&n)throw Error(B(425))}function Gh(){}var cg=null,hg=null;function dg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fg=typeof setTimeout=="function"?setTimeout:void 0,q2=typeof clearTimeout=="function"?clearTimeout:void 0,Xw=typeof Promise=="function"?Promise:void 0,H2=typeof queueMicrotask=="function"?queueMicrotask:typeof Xw<"u"?function(t){return Xw.resolve(null).then(t).catch(G2)}:fg;function G2(t){setTimeout(function(){throw t})}function Gp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),nu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);nu(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),cr="__reactFiber$"+ka,au="__reactProps$"+ka,Yr="__reactContainer$"+ka,pg="__reactEvents$"+ka,K2="__reactListeners$"+ka,Q2="__reactHandles$"+ka;function fs(t){var e=t[cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yr]||n[cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jw(t);t!==null;){if(n=t[cr])return n;t=Jw(t)}return e}t=n,n=t.parentNode}return null}function Uu(t){return t=t[cr]||t[Yr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function To(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function hf(t){return t[au]||null}var mg=[],Io=-1;function Zi(t){return{current:t}}function qe(t){0>Io||(t.current=mg[Io],mg[Io]=null,Io--)}function Ve(t,e){Io++,mg[Io]=t.current,t.current=e}var qi={},Xt=Zi(qi),pn=Zi(!1),Rs=qi;function Xo(t,e){var n=t.type.contextTypes;if(!n)return qi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mn(t){return t=t.childContextTypes,t!=null}function Kh(){qe(pn),qe(Xt)}function Zw(t,e,n){if(Xt.current!==qi)throw Error(B(168));Ve(Xt,e),Ve(pn,n)}function VS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,ON(t)||"Unknown",i));return Ye({},n,r)}function Qh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,Rs=Xt.current,Ve(Xt,t),Ve(pn,pn.current),!0}function eE(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=VS(t,e,Rs),r.__reactInternalMemoizedMergedChildContext=t,qe(pn),qe(Xt),Ve(Xt,t)):qe(pn),Ve(pn,n)}var Ur=null,df=!1,Kp=!1;function US(t){Ur===null?Ur=[t]:Ur.push(t)}function Y2(t){df=!0,US(t)}function es(){if(!Kp&&Ur!==null){Kp=!0;var t=0,e=be;try{var n=Ur;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Ur=null,df=!1}catch(i){throw Ur!==null&&(Ur=Ur.slice(t+1)),cS(X_,es),i}finally{be=e,Kp=!1}}return null}var So=[],Co=0,Yh=null,Xh=0,On=[],Dn=0,ks=null,jr=1,$r="";function us(t,e){So[Co++]=Xh,So[Co++]=Yh,Yh=t,Xh=e}function jS(t,e,n){On[Dn++]=jr,On[Dn++]=$r,On[Dn++]=ks,ks=t;var r=jr;t=$r;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var s=32-Jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jr=1<<32-Jn(e)+i|n<<i|r,$r=s+t}else jr=1<<s|n<<i|r,$r=t}function oy(t){t.return!==null&&(us(t,1),jS(t,1,0))}function ay(t){for(;t===Yh;)Yh=So[--Co],So[Co]=null,Xh=So[--Co],So[Co]=null;for(;t===ks;)ks=On[--Dn],On[Dn]=null,$r=On[--Dn],On[Dn]=null,jr=On[--Dn],On[Dn]=null}var xn=null,Sn=null,Ge=!1,Hn=null;function $S(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,Sn=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ks!==null?{id:jr,overflow:$r}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,Sn=null,!0):!1;default:return!1}}function gg(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _g(t){if(Ge){var e=Sn;if(e){var n=e;if(!tE(t,e)){if(gg(t))throw Error(B(418));e=Di(n.nextSibling);var r=xn;e&&tE(t,e)?$S(r,n):(t.flags=t.flags&-4097|2,Ge=!1,xn=t)}}else{if(gg(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ge=!1,xn=t}}}function nE(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Fc(t){if(t!==xn)return!1;if(!Ge)return nE(t),Ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dg(t.type,t.memoizedProps)),e&&(e=Sn)){if(gg(t))throw zS(),Error(B(418));for(;e;)$S(t,e),e=Di(e.nextSibling)}if(nE(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=xn?Di(t.stateNode.nextSibling):null;return!0}function zS(){for(var t=Sn;t;)t=Di(t.nextSibling)}function Jo(){Sn=xn=null,Ge=!1}function ly(t){Hn===null?Hn=[t]:Hn.push(t)}var X2=si.ReactCurrentBatchConfig;function Bn(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jh=Zi(null),Zh=null,xo=null,uy=null;function cy(){uy=xo=Zh=null}function hy(t){var e=Jh.current;qe(Jh),t._currentValue=e}function yg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Uo(t,e){Zh=t,uy=xo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(uy!==t)if(t={context:t,memoizedValue:e,next:null},xo===null){if(Zh===null)throw Error(B(308));xo=t,Zh.dependencies={lanes:0,firstContext:t}}else xo=xo.next=t;return e}var ps=null;function dy(t){ps===null?ps=[t]:ps.push(t)}function BS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Xr(t,r)}function Xr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _i=!1;function fy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function WS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Li(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Xr(t,n)}return i=r.interleaved,i===null?(e.next=e,dy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Xr(t,n)}function ch(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,J_(t,n)}}function rE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ed(t,e,n,r){var i=t.updateQueue;_i=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,I=a;switch(p=e,_=n,I.tag){case 1:if(v=I.payload,typeof v=="function"){d=v.call(_,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=I.payload,p=typeof v=="function"?v.call(_,d,p):v,p==null)break e;d=Ye({},d,p);break e;case 2:_i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,l=d):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);bs|=o,t.lanes=o,t.memoizedState=d}}function iE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var qS=new BI.Component().refs;function vg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ff={isMounted:function(t){return(t=t._reactInternals)?Ws(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rn(),i=Fi(t),s=Hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Li(t,s,i),e!==null&&(Zn(e,t,i,r),ch(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rn(),i=Fi(t),s=Hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Li(t,s,i),e!==null&&(Zn(e,t,i,r),ch(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),r=Fi(t),i=Hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Li(t,i,r),e!==null&&(Zn(e,t,r,n),ch(e,t,r))}};function sE(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!iu(n,r)||!iu(i,s):!0}function HS(t,e,n){var r=!1,i=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(i=mn(e)?Rs:Xt.current,r=e.contextTypes,s=(r=r!=null)?Xo(t,i):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ff,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function oE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ff.enqueueReplaceState(e,e.state,null)}function wg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=qS,fy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vn(s):(s=mn(e)?Rs:Xt.current,i.context=Xo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vg(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ff.enqueueReplaceState(i,i.state,null),ed(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function al(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===qS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Vc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function aE(t){var e=t._init;return e(t._payload)}function GS(t){function e(T,g){if(t){var S=T.deletions;S===null?(T.deletions=[g],T.flags|=16):S.push(g)}}function n(T,g){if(!t)return null;for(;g!==null;)e(T,g),g=g.sibling;return null}function r(T,g){for(T=new Map;g!==null;)g.key!==null?T.set(g.key,g):T.set(g.index,g),g=g.sibling;return T}function i(T,g){return T=Vi(T,g),T.index=0,T.sibling=null,T}function s(T,g,S){return T.index=S,t?(S=T.alternate,S!==null?(S=S.index,S<g?(T.flags|=2,g):S):(T.flags|=2,g)):(T.flags|=1048576,g)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,g,S,O){return g===null||g.tag!==6?(g=tm(S,T.mode,O),g.return=T,g):(g=i(g,S),g.return=T,g)}function l(T,g,S,O){var L=S.type;return L===yo?h(T,g,S.props.children,O,S.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gi&&aE(L)===g.type)?(O=i(g,S.props),O.ref=al(T,g,S),O.return=T,O):(O=gh(S.type,S.key,S.props,null,T.mode,O),O.ref=al(T,g,S),O.return=T,O)}function c(T,g,S,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=nm(S,T.mode,O),g.return=T,g):(g=i(g,S.children||[]),g.return=T,g)}function h(T,g,S,O,L){return g===null||g.tag!==7?(g=Ts(S,T.mode,O,L),g.return=T,g):(g=i(g,S),g.return=T,g)}function d(T,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=tm(""+g,T.mode,S),g.return=T,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ac:return S=gh(g.type,g.key,g.props,null,T.mode,S),S.ref=al(T,null,g),S.return=T,S;case _o:return g=nm(g,T.mode,S),g.return=T,g;case gi:var O=g._init;return d(T,O(g._payload),S)}if(vl(g)||nl(g))return g=Ts(g,T.mode,S,null),g.return=T,g;Vc(T,g)}return null}function p(T,g,S,O){var L=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return L!==null?null:a(T,g,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ac:return S.key===L?l(T,g,S,O):null;case _o:return S.key===L?c(T,g,S,O):null;case gi:return L=S._init,p(T,g,L(S._payload),O)}if(vl(S)||nl(S))return L!==null?null:h(T,g,S,O,null);Vc(T,S)}return null}function _(T,g,S,O,L){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(S)||null,a(g,T,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ac:return T=T.get(O.key===null?S:O.key)||null,l(g,T,O,L);case _o:return T=T.get(O.key===null?S:O.key)||null,c(g,T,O,L);case gi:var V=O._init;return _(T,g,S,V(O._payload),L)}if(vl(O)||nl(O))return T=T.get(S)||null,h(g,T,O,L,null);Vc(g,O)}return null}function v(T,g,S,O){for(var L=null,V=null,w=g,E=g=0,C=null;w!==null&&E<S.length;E++){w.index>E?(C=w,w=null):C=w.sibling;var A=p(T,w,S[E],O);if(A===null){w===null&&(w=C);break}t&&w&&A.alternate===null&&e(T,w),g=s(A,g,E),V===null?L=A:V.sibling=A,V=A,w=C}if(E===S.length)return n(T,w),Ge&&us(T,E),L;if(w===null){for(;E<S.length;E++)w=d(T,S[E],O),w!==null&&(g=s(w,g,E),V===null?L=w:V.sibling=w,V=w);return Ge&&us(T,E),L}for(w=r(T,w);E<S.length;E++)C=_(w,T,E,S[E],O),C!==null&&(t&&C.alternate!==null&&w.delete(C.key===null?E:C.key),g=s(C,g,E),V===null?L=C:V.sibling=C,V=C);return t&&w.forEach(function(k){return e(T,k)}),Ge&&us(T,E),L}function I(T,g,S,O){var L=nl(S);if(typeof L!="function")throw Error(B(150));if(S=L.call(S),S==null)throw Error(B(151));for(var V=L=null,w=g,E=g=0,C=null,A=S.next();w!==null&&!A.done;E++,A=S.next()){w.index>E?(C=w,w=null):C=w.sibling;var k=p(T,w,A.value,O);if(k===null){w===null&&(w=C);break}t&&w&&k.alternate===null&&e(T,w),g=s(k,g,E),V===null?L=k:V.sibling=k,V=k,w=C}if(A.done)return n(T,w),Ge&&us(T,E),L;if(w===null){for(;!A.done;E++,A=S.next())A=d(T,A.value,O),A!==null&&(g=s(A,g,E),V===null?L=A:V.sibling=A,V=A);return Ge&&us(T,E),L}for(w=r(T,w);!A.done;E++,A=S.next())A=_(w,T,E,A.value,O),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?E:A.key),g=s(A,g,E),V===null?L=A:V.sibling=A,V=A);return t&&w.forEach(function(b){return e(T,b)}),Ge&&us(T,E),L}function R(T,g,S,O){if(typeof S=="object"&&S!==null&&S.type===yo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ac:e:{for(var L=S.key,V=g;V!==null;){if(V.key===L){if(L=S.type,L===yo){if(V.tag===7){n(T,V.sibling),g=i(V,S.props.children),g.return=T,T=g;break e}}else if(V.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gi&&aE(L)===V.type){n(T,V.sibling),g=i(V,S.props),g.ref=al(T,V,S),g.return=T,T=g;break e}n(T,V);break}else e(T,V);V=V.sibling}S.type===yo?(g=Ts(S.props.children,T.mode,O,S.key),g.return=T,T=g):(O=gh(S.type,S.key,S.props,null,T.mode,O),O.ref=al(T,g,S),O.return=T,T=O)}return o(T);case _o:e:{for(V=S.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(T,g.sibling),g=i(g,S.children||[]),g.return=T,T=g;break e}else{n(T,g);break}else e(T,g);g=g.sibling}g=nm(S,T.mode,O),g.return=T,T=g}return o(T);case gi:return V=S._init,R(T,g,V(S._payload),O)}if(vl(S))return v(T,g,S,O);if(nl(S))return I(T,g,S,O);Vc(T,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(T,g.sibling),g=i(g,S),g.return=T,T=g):(n(T,g),g=tm(S,T.mode,O),g.return=T,T=g),o(T)):n(T,g)}return R}var Zo=GS(!0),KS=GS(!1),ju={},gr=Zi(ju),lu=Zi(ju),uu=Zi(ju);function ms(t){if(t===ju)throw Error(B(174));return t}function py(t,e){switch(Ve(uu,e),Ve(lu,t),Ve(gr,ju),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jm(e,t)}qe(gr),Ve(gr,e)}function ea(){qe(gr),qe(lu),qe(uu)}function QS(t){ms(uu.current);var e=ms(gr.current),n=Jm(e,t.type);e!==n&&(Ve(lu,t),Ve(gr,n))}function my(t){lu.current===t&&(qe(gr),qe(lu))}var Ke=Zi(0);function td(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qp=[];function gy(){for(var t=0;t<Qp.length;t++)Qp[t]._workInProgressVersionPrimary=null;Qp.length=0}var hh=si.ReactCurrentDispatcher,Yp=si.ReactCurrentBatchConfig,Ps=0,Qe=null,gt=null,Ct=null,nd=!1,Ll=!1,cu=0,J2=0;function zt(){throw Error(B(321))}function _y(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function yy(t,e,n,r,i,s){if(Ps=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hh.current=t===null||t.memoizedState===null?nO:rO,t=n(r,i),Ll){s=0;do{if(Ll=!1,cu=0,25<=s)throw Error(B(301));s+=1,Ct=gt=null,e.updateQueue=null,hh.current=iO,t=n(r,i)}while(Ll)}if(hh.current=rd,e=gt!==null&&gt.next!==null,Ps=0,Ct=gt=Qe=null,nd=!1,e)throw Error(B(300));return t}function vy(){var t=cu!==0;return cu=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Qe.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Un(){if(gt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Ct===null?Qe.memoizedState:Ct.next;if(e!==null)Ct=e,gt=t;else{if(t===null)throw Error(B(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Ct===null?Qe.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function hu(t,e){return typeof e=="function"?e(t):e}function Xp(t){var e=Un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Ps&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Qe.lanes|=h,bs|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,nr(r,e.memoizedState)||(hn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,bs|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jp(t){var e=Un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nr(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function YS(){}function XS(t,e){var n=Qe,r=Un(),i=e(),s=!nr(r.memoizedState,i);if(s&&(r.memoizedState=i,hn=!0),r=r.queue,wy(eC.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,du(9,ZS.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(B(349));Ps&30||JS(n,e,i)}return i}function JS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ZS(t,e,n,r){e.value=n,e.getSnapshot=r,tC(e)&&nC(t)}function eC(t,e,n){return n(function(){tC(e)&&nC(t)})}function tC(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function nC(t){var e=Xr(t,1);e!==null&&Zn(e,t,1,-1)}function lE(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hu,lastRenderedState:t},e.queue=t,t=t.dispatch=tO.bind(null,Qe,t),[e.memoizedState,t]}function du(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rC(){return Un().memoizedState}function dh(t,e,n,r){var i=sr();Qe.flags|=t,i.memoizedState=du(1|e,n,void 0,r===void 0?null:r)}function pf(t,e,n,r){var i=Un();r=r===void 0?null:r;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,r!==null&&_y(r,o.deps)){i.memoizedState=du(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=du(1|e,n,s,r)}function uE(t,e){return dh(8390656,8,t,e)}function wy(t,e){return pf(2048,8,t,e)}function iC(t,e){return pf(4,2,t,e)}function sC(t,e){return pf(4,4,t,e)}function oC(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aC(t,e,n){return n=n!=null?n.concat([t]):null,pf(4,4,oC.bind(null,e,t),n)}function Ey(){}function lC(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_y(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uC(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_y(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cC(t,e,n){return Ps&21?(nr(n,e)||(n=fS(),Qe.lanes|=n,bs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function Z2(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Yp.transition;Yp.transition={};try{t(!1),e()}finally{be=n,Yp.transition=r}}function hC(){return Un().memoizedState}function eO(t,e,n){var r=Fi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dC(t))fC(e,n);else if(n=BS(t,e,n,r),n!==null){var i=rn();Zn(n,t,r,i),pC(n,e,r)}}function tO(t,e,n){var r=Fi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dC(t))fC(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nr(a,o)){var l=e.interleaved;l===null?(i.next=i,dy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=BS(t,e,i,r),n!==null&&(i=rn(),Zn(n,t,r,i),pC(n,e,r))}}function dC(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function fC(t,e){Ll=nd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pC(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,J_(t,n)}}var rd={readContext:Vn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},nO={readContext:Vn,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:uE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dh(4194308,4,oC.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dh(4194308,4,t,e)},useInsertionEffect:function(t,e){return dh(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eO.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:lE,useDebugValue:Ey,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=lE(!1),e=t[0];return t=Z2.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=sr();if(Ge){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),kt===null)throw Error(B(349));Ps&30||JS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uE(eC.bind(null,r,s,t),[t]),r.flags|=2048,du(9,ZS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=kt.identifierPrefix;if(Ge){var n=$r,r=jr;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=cu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=J2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rO={readContext:Vn,useCallback:lC,useContext:Vn,useEffect:wy,useImperativeHandle:aC,useInsertionEffect:iC,useLayoutEffect:sC,useMemo:uC,useReducer:Xp,useRef:rC,useState:function(){return Xp(hu)},useDebugValue:Ey,useDeferredValue:function(t){var e=Un();return cC(e,gt.memoizedState,t)},useTransition:function(){var t=Xp(hu)[0],e=Un().memoizedState;return[t,e]},useMutableSource:YS,useSyncExternalStore:XS,useId:hC,unstable_isNewReconciler:!1},iO={readContext:Vn,useCallback:lC,useContext:Vn,useEffect:wy,useImperativeHandle:aC,useInsertionEffect:iC,useLayoutEffect:sC,useMemo:uC,useReducer:Jp,useRef:rC,useState:function(){return Jp(hu)},useDebugValue:Ey,useDeferredValue:function(t){var e=Un();return gt===null?e.memoizedState=t:cC(e,gt.memoizedState,t)},useTransition:function(){var t=Jp(hu)[0],e=Un().memoizedState;return[t,e]},useMutableSource:YS,useSyncExternalStore:XS,useId:hC,unstable_isNewReconciler:!1};function ta(t,e){try{var n="",r=e;do n+=NN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sO=typeof WeakMap=="function"?WeakMap:Map;function mC(t,e,n){n=Hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sd||(sd=!0,bg=r),Eg(t,e)},n}function gC(t,e,n){n=Hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Eg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eg(t,e),typeof r!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vO.bind(null,t,e,n),e.then(t,t))}function hE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hr(-1,1),e.tag=2,Li(n,e,1))),n.lanes|=1),t)}var oO=si.ReactCurrentOwner,hn=!1;function tn(t,e,n,r){e.child=t===null?KS(e,null,n,r):Zo(e,t.child,n,r)}function fE(t,e,n,r,i){n=n.render;var s=e.ref;return Uo(e,i),r=yy(t,e,n,r,s,i),n=vy(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jr(t,e,i)):(Ge&&n&&oy(e),e.flags|=1,tn(t,e,r,i),e.child)}function pE(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ky(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_C(t,e,s,r,i)):(t=gh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:iu,n(o,r)&&t.ref===e.ref)return Jr(t,e,i)}return e.flags|=1,t=Vi(s,r),t.ref=e.ref,t.return=e,e.child=t}function _C(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(iu(s,r)&&t.ref===e.ref)if(hn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Jr(t,e,i)}return Tg(t,e,n,r,i)}function yC(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Ro,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(Ro,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ve(Ro,Tn),Tn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ve(Ro,Tn),Tn|=r;return tn(t,e,i,n),e.child}function vC(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tg(t,e,n,r,i){var s=mn(n)?Rs:Xt.current;return s=Xo(e,s),Uo(e,i),n=yy(t,e,n,r,s,i),r=vy(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Jr(t,e,i)):(Ge&&r&&oy(e),e.flags|=1,tn(t,e,n,i),e.child)}function mE(t,e,n,r,i){if(mn(n)){var s=!0;Qh(e)}else s=!1;if(Uo(e,i),e.stateNode===null)fh(t,e),HS(e,n,r),wg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=mn(n)?Rs:Xt.current,c=Xo(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&oE(e,o,r,c),_i=!1;var p=e.memoizedState;o.state=p,ed(e,r,o,i),l=e.memoizedState,a!==r||p!==l||pn.current||_i?(typeof h=="function"&&(vg(e,n,h,r),l=e.memoizedState),(a=_i||sE(e,n,a,r,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,WS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=mn(n)?Rs:Xt.current,l=Xo(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&oE(e,o,r,l),_i=!1,p=e.memoizedState,o.state=p,ed(e,r,o,i);var v=e.memoizedState;a!==d||p!==v||pn.current||_i?(typeof _=="function"&&(vg(e,n,_,r),v=e.memoizedState),(c=_i||sE(e,n,c,r,p,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ig(t,e,n,r,s,i)}function Ig(t,e,n,r,i,s){vC(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&eE(e,n,!1),Jr(t,e,s);r=e.stateNode,oO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Zo(e,t.child,null,s),e.child=Zo(e,null,a,s)):tn(t,e,a,s),e.memoizedState=r.state,i&&eE(e,n,!0),e.child}function wC(t){var e=t.stateNode;e.pendingContext?Zw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zw(t,e.context,!1),py(t,e.containerInfo)}function gE(t,e,n,r,i){return Jo(),ly(i),e.flags|=256,tn(t,e,n,r),e.child}var Sg={dehydrated:null,treeContext:null,retryLane:0};function Cg(t){return{baseLanes:t,cachePool:null,transitions:null}}function EC(t,e,n){var r=e.pendingProps,i=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ve(Ke,i&1),t===null)return _g(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_f(o,r,0,null),t=Ts(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cg(n),e.memoizedState=Sg,t):Ty(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return aO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=Ts(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sg,r}return s=t.child,t=s.sibling,r=Vi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ty(t,e){return e=_f({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uc(t,e,n,r){return r!==null&&ly(r),Zo(e,t.child,null,n),t=Ty(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zp(Error(B(422))),Uc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_f({mode:"visible",children:r.children},i,0,null),s=Ts(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Zo(e,t.child,null,o),e.child.memoizedState=Cg(o),e.memoizedState=Sg,s);if(!(e.mode&1))return Uc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Zp(s,r,void 0),Uc(t,e,o,r)}if(a=(o&t.childLanes)!==0,hn||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Xr(t,i),Zn(r,t,i,-1))}return Ry(),r=Zp(Error(B(421))),Uc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=wO.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Sn=Di(i.nextSibling),xn=e,Ge=!0,Hn=null,t!==null&&(On[Dn++]=jr,On[Dn++]=$r,On[Dn++]=ks,jr=t.id,$r=t.overflow,ks=e),e=Ty(e,r.children),e.flags|=4096,e)}function _E(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yg(t.return,e,n)}function em(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function TC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tn(t,e,r.children,n),r=Ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_E(t,n,e);else if(t.tag===19)_E(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ve(Ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&td(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),em(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&td(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}em(e,!0,n,null,s);break;case"together":em(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Jr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lO(t,e,n){switch(e.tag){case 3:wC(e),Jo();break;case 5:QS(e);break;case 1:mn(e.type)&&Qh(e);break;case 4:py(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ve(Jh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ve(Ke,Ke.current&1),e.flags|=128,null):n&e.child.childLanes?EC(t,e,n):(Ve(Ke,Ke.current&1),t=Jr(t,e,n),t!==null?t.sibling:null);Ve(Ke,Ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return TC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(Ke,Ke.current),r)break;return null;case 22:case 23:return e.lanes=0,yC(t,e,n)}return Jr(t,e,n)}var IC,xg,SC,CC;IC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xg=function(){};SC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ms(gr.current);var s=null;switch(n){case"input":i=Km(t,i),r=Km(t,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=Xm(t,i),r=Xm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gh)}Zm(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};CC=function(t,e,n,r){n!==r&&(e.flags|=4)};function ll(t,e){if(!Ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uO(t,e,n){var r=e.pendingProps;switch(ay(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return mn(e.type)&&Kh(),Bt(e),null;case 3:return r=e.stateNode,ea(),qe(pn),qe(Xt),gy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Dg(Hn),Hn=null))),xg(t,e),Bt(e),null;case 5:my(e);var i=ms(uu.current);if(n=e.type,t!==null&&e.stateNode!=null)SC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Bt(e),null}if(t=ms(gr.current),Fc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cr]=e,r[au]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(i=0;i<El.length;i++)$e(El[i],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":xw(r,s),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$e("invalid",r);break;case"textarea":Rw(r,s),$e("invalid",r)}Zm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Mc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Mc(r.textContent,a,t),i=["children",""+a]):Xl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",r)}switch(n){case"input":Rc(r),Aw(r,s,!0);break;case"textarea":Rc(r),kw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=JI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cr]=e,t[au]=r,IC(t,e,!1,!1),e.stateNode=t;e:{switch(o=eg(n,r),n){case"dialog":$e("cancel",t),$e("close",t),i=r;break;case"iframe":case"object":case"embed":$e("load",t),i=r;break;case"video":case"audio":for(i=0;i<El.length;i++)$e(El[i],t);i=r;break;case"source":$e("error",t),i=r;break;case"img":case"image":case"link":$e("error",t),$e("load",t),i=r;break;case"details":$e("toggle",t),i=r;break;case"input":xw(t,r),i=Km(t,r),$e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),$e("invalid",t);break;case"textarea":Rw(t,r),i=Xm(t,r),$e("invalid",t);break;default:i=r}Zm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ZI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Jl(t,l):typeof l=="number"&&Jl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&H_(t,s,l,o))}switch(n){case"input":Rc(t),Aw(t,r,!1);break;case"textarea":Rc(t),kw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Lo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Lo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)CC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=ms(uu.current),ms(gr.current),Fc(e)){if(r=e.stateNode,n=e.memoizedProps,r[cr]=e,(s=r.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cr]=e,e.stateNode=r}return Bt(e),null;case 13:if(qe(Ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ge&&Sn!==null&&e.mode&1&&!(e.flags&128))zS(),Jo(),e.flags|=98560,s=!1;else if(s=Fc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[cr]=e}else Jo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Hn!==null&&(Dg(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ke.current&1?vt===0&&(vt=3):Ry())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return ea(),xg(t,e),t===null&&su(e.stateNode.containerInfo),Bt(e),null;case 10:return hy(e.type._context),Bt(e),null;case 17:return mn(e.type)&&Kh(),Bt(e),null;case 19:if(qe(Ke),s=e.memoizedState,s===null)return Bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ll(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=td(t),o!==null){for(e.flags|=128,ll(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&at()>na&&(e.flags|=128,r=!0,ll(s,!1),e.lanes=4194304)}else{if(!r)if(t=td(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ll(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ge)return Bt(e),null}else 2*at()-s.renderingStartTime>na&&n!==1073741824&&(e.flags|=128,r=!0,ll(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,n=Ke.current,Ve(Ke,r?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Ay(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function cO(t,e){switch(ay(e),e.tag){case 1:return mn(e.type)&&Kh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ea(),qe(pn),qe(Xt),gy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return my(e),null;case 13:if(qe(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Jo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return qe(Ke),null;case 4:return ea(),null;case 10:return hy(e.type._context),null;case 22:case 23:return Ay(),null;case 24:return null;default:return null}}var jc=!1,Gt=!1,hO=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function Ag(t,e,n){try{n()}catch(r){tt(t,e,r)}}var yE=!1;function dO(t,e){if(cg=Wh,t=kS(),sy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)p=d,d=_;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(_=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hg={focusedElem:t,selectionRange:n},Wh=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var I=v.memoizedProps,R=v.memoizedState,T=e.stateNode,g=T.getSnapshotBeforeUpdate(e.elementType===e.type?I:Bn(e.type,I),R);T.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){tt(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return v=yE,yE=!1,v}function Ml(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ag(e,n,s)}i=i.next}while(i!==r)}}function mf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xC(t){var e=t.alternate;e!==null&&(t.alternate=null,xC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cr],delete e[au],delete e[pg],delete e[K2],delete e[Q2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AC(t){return t.tag===5||t.tag===3||t.tag===4}function vE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gh));else if(r!==4&&(t=t.child,t!==null))for(kg(t,e,n),t=t.sibling;t!==null;)kg(t,e,n),t=t.sibling}function Pg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pg(t,e,n),t=t.sibling;t!==null;)Pg(t,e,n),t=t.sibling}var bt=null,qn=!1;function fi(t,e,n){for(n=n.child;n!==null;)RC(t,e,n),n=n.sibling}function RC(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(af,n)}catch{}switch(n.tag){case 5:Gt||Ao(n,e);case 6:var r=bt,i=qn;bt=null,fi(t,e,n),bt=r,qn=i,bt!==null&&(qn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(qn?(t=bt,n=n.stateNode,t.nodeType===8?Gp(t.parentNode,n):t.nodeType===1&&Gp(t,n),nu(t)):Gp(bt,n.stateNode));break;case 4:r=bt,i=qn,bt=n.stateNode.containerInfo,qn=!0,fi(t,e,n),bt=r,qn=i;break;case 0:case 11:case 14:case 15:if(!Gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ag(n,e,o),i=i.next}while(i!==r)}fi(t,e,n);break;case 1:if(!Gt&&(Ao(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){tt(n,e,a)}fi(t,e,n);break;case 21:fi(t,e,n);break;case 22:n.mode&1?(Gt=(r=Gt)||n.memoizedState!==null,fi(t,e,n),Gt=r):fi(t,e,n);break;default:fi(t,e,n)}}function wE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hO),e.forEach(function(r){var i=EO.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,qn=!1;break e;case 3:bt=a.stateNode.containerInfo,qn=!0;break e;case 4:bt=a.stateNode.containerInfo,qn=!0;break e}a=a.return}if(bt===null)throw Error(B(160));RC(s,o,i),bt=null,qn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kC(e,t),e=e.sibling}function kC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ir(t),r&4){try{Ml(3,t,t.return),mf(3,t)}catch(I){tt(t,t.return,I)}try{Ml(5,t,t.return)}catch(I){tt(t,t.return,I)}}break;case 1:zn(e,t),ir(t),r&512&&n!==null&&Ao(n,n.return);break;case 5:if(zn(e,t),ir(t),r&512&&n!==null&&Ao(n,n.return),t.flags&32){var i=t.stateNode;try{Jl(i,"")}catch(I){tt(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&YI(i,s),eg(a,o);var c=eg(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?tS(i,d):h==="dangerouslySetInnerHTML"?ZI(i,d):h==="children"?Jl(i,d):H_(i,h,d,c)}switch(a){case"input":Qm(i,s);break;case"textarea":XI(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Lo(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Lo(i,!!s.multiple,s.defaultValue,!0):Lo(i,!!s.multiple,s.multiple?[]:"",!1))}i[au]=s}catch(I){tt(t,t.return,I)}}break;case 6:if(zn(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){tt(t,t.return,I)}}break;case 3:if(zn(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{nu(e.containerInfo)}catch(I){tt(t,t.return,I)}break;case 4:zn(e,t),ir(t);break;case 13:zn(e,t),ir(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cy=at())),r&4&&wE(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||h,zn(e,t),Gt=c):zn(e,t),ir(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(X=t,h=t.child;h!==null;){for(d=X=h;X!==null;){switch(p=X,_=p.child,p.tag){case 0:case 11:case 14:case 15:Ml(4,p,p.return);break;case 1:Ao(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(I){tt(r,n,I)}}break;case 5:Ao(p,p.return);break;case 22:if(p.memoizedState!==null){TE(d);continue}}_!==null?(_.return=p,X=_):TE(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eS("display",o))}catch(I){tt(t,t.return,I)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(I){tt(t,t.return,I)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(e,t),ir(t),r&4&&wE(t);break;case 21:break;default:zn(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AC(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Jl(i,""),r.flags&=-33);var s=vE(t);Pg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vE(t);kg(t,a,o);break;default:throw Error(B(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fO(t,e,n){X=t,PC(t)}function PC(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||jc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=jc;var c=Gt;if(jc=o,(Gt=l)&&!c)for(X=i;X!==null;)o=X,l=o.child,o.tag===22&&o.memoizedState!==null?IE(i):l!==null?(l.return=o,X=l):IE(i);for(;s!==null;)X=s,PC(s),s=s.sibling;X=i,jc=a,Gt=c}EE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):EE(t)}}function EE(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||mf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iE(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}iE(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&nu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Gt||e.flags&512&&Rg(e)}catch(p){tt(e,e.return,p)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function TE(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function IE(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mf(4,e)}catch(l){tt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){tt(e,i,l)}}var s=e.return;try{Rg(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{Rg(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var pO=Math.ceil,id=si.ReactCurrentDispatcher,Iy=si.ReactCurrentOwner,Mn=si.ReactCurrentBatchConfig,Ee=0,kt=null,ft=null,Lt=0,Tn=0,Ro=Zi(0),vt=0,fu=null,bs=0,gf=0,Sy=0,Fl=null,ln=null,Cy=0,na=1/0,Fr=null,sd=!1,bg=null,Mi=null,$c=!1,Ai=null,od=0,Vl=0,Ng=null,ph=-1,mh=0;function rn(){return Ee&6?at():ph!==-1?ph:ph=at()}function Fi(t){return t.mode&1?Ee&2&&Lt!==0?Lt&-Lt:X2.transition!==null?(mh===0&&(mh=fS()),mh):(t=be,t!==0||(t=window.event,t=t===void 0?16:wS(t.type)),t):1}function Zn(t,e,n,r){if(50<Vl)throw Vl=0,Ng=null,Error(B(185));Fu(t,n,r),(!(Ee&2)||t!==kt)&&(t===kt&&(!(Ee&2)&&(gf|=n),vt===4&&vi(t,Lt)),gn(t,r),n===1&&Ee===0&&!(e.mode&1)&&(na=at()+500,df&&es()))}function gn(t,e){var n=t.callbackNode;XN(t,e);var r=Bh(t,t===kt?Lt:0);if(r===0)n!==null&&Nw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Nw(n),e===1)t.tag===0?Y2(SE.bind(null,t)):US(SE.bind(null,t)),H2(function(){!(Ee&6)&&es()}),n=null;else{switch(pS(r)){case 1:n=X_;break;case 4:n=hS;break;case 16:n=zh;break;case 536870912:n=dS;break;default:n=zh}n=VC(n,bC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bC(t,e){if(ph=-1,mh=0,Ee&6)throw Error(B(327));var n=t.callbackNode;if(jo()&&t.callbackNode!==n)return null;var r=Bh(t,t===kt?Lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ad(t,r);else{e=r;var i=Ee;Ee|=2;var s=OC();(kt!==t||Lt!==e)&&(Fr=null,na=at()+500,Es(t,e));do try{_O();break}catch(a){NC(t,a)}while(1);cy(),id.current=s,Ee=i,ft!==null?e=0:(kt=null,Lt=0,e=vt)}if(e!==0){if(e===2&&(i=sg(t),i!==0&&(r=i,e=Og(t,i))),e===1)throw n=fu,Es(t,0),vi(t,r),gn(t,at()),n;if(e===6)vi(t,r);else{if(i=t.current.alternate,!(r&30)&&!mO(i)&&(e=ad(t,r),e===2&&(s=sg(t),s!==0&&(r=s,e=Og(t,s))),e===1))throw n=fu,Es(t,0),vi(t,r),gn(t,at()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:cs(t,ln,Fr);break;case 3:if(vi(t,r),(r&130023424)===r&&(e=Cy+500-at(),10<e)){if(Bh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fg(cs.bind(null,t,ln,Fr),e);break}cs(t,ln,Fr);break;case 4:if(vi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=at()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pO(r/1960))-r,10<r){t.timeoutHandle=fg(cs.bind(null,t,ln,Fr),r);break}cs(t,ln,Fr);break;case 5:cs(t,ln,Fr);break;default:throw Error(B(329))}}}return gn(t,at()),t.callbackNode===n?bC.bind(null,t):null}function Og(t,e){var n=Fl;return t.current.memoizedState.isDehydrated&&(Es(t,e).flags|=256),t=ad(t,e),t!==2&&(e=ln,ln=n,e!==null&&Dg(e)),t}function Dg(t){ln===null?ln=t:ln.push.apply(ln,t)}function mO(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vi(t,e){for(e&=~Sy,e&=~gf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function SE(t){if(Ee&6)throw Error(B(327));jo();var e=Bh(t,0);if(!(e&1))return gn(t,at()),null;var n=ad(t,e);if(t.tag!==0&&n===2){var r=sg(t);r!==0&&(e=r,n=Og(t,r))}if(n===1)throw n=fu,Es(t,0),vi(t,e),gn(t,at()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cs(t,ln,Fr),gn(t,at()),null}function xy(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(na=at()+500,df&&es())}}function Ns(t){Ai!==null&&Ai.tag===0&&!(Ee&6)&&jo();var e=Ee;Ee|=1;var n=Mn.transition,r=be;try{if(Mn.transition=null,be=1,t)return t()}finally{be=r,Mn.transition=n,Ee=e,!(Ee&6)&&es()}}function Ay(){Tn=Ro.current,qe(Ro)}function Es(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q2(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(ay(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kh();break;case 3:ea(),qe(pn),qe(Xt),gy();break;case 5:my(r);break;case 4:ea();break;case 13:qe(Ke);break;case 19:qe(Ke);break;case 10:hy(r.type._context);break;case 22:case 23:Ay()}n=n.return}if(kt=t,ft=t=Vi(t.current,null),Lt=Tn=e,vt=0,fu=null,Sy=gf=bs=0,ln=Fl=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ps=null}return t}function NC(t,e){do{var n=ft;try{if(cy(),hh.current=rd,nd){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nd=!1}if(Ps=0,Ct=gt=Qe=null,Ll=!1,cu=0,Iy.current=null,n===null||n.return===null){vt=1,fu=e,ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=hE(o);if(_!==null){_.flags&=-257,dE(_,o,a,s,e),_.mode&1&&cE(s,c,e),e=_,l=c;var v=e.updateQueue;if(v===null){var I=new Set;I.add(l),e.updateQueue=I}else v.add(l);break e}else{if(!(e&1)){cE(s,c,e),Ry();break e}l=Error(B(426))}}else if(Ge&&a.mode&1){var R=hE(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),dE(R,o,a,s,e),ly(ta(l,a));break e}}s=l=ta(l,a),vt!==4&&(vt=2),Fl===null?Fl=[s]:Fl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=mC(s,l,e);rE(s,T);break e;case 1:a=l;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Mi===null||!Mi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=gC(s,a,e);rE(s,O);break e}}s=s.return}while(s!==null)}LC(n)}catch(L){e=L,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function OC(){var t=id.current;return id.current=rd,t===null?rd:t}function Ry(){(vt===0||vt===3||vt===2)&&(vt=4),kt===null||!(bs&268435455)&&!(gf&268435455)||vi(kt,Lt)}function ad(t,e){var n=Ee;Ee|=2;var r=OC();(kt!==t||Lt!==e)&&(Fr=null,Es(t,e));do try{gO();break}catch(i){NC(t,i)}while(1);if(cy(),Ee=n,id.current=r,ft!==null)throw Error(B(261));return kt=null,Lt=0,vt}function gO(){for(;ft!==null;)DC(ft)}function _O(){for(;ft!==null&&!zN();)DC(ft)}function DC(t){var e=FC(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?LC(t):ft=e,Iy.current=null}function LC(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=cO(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,ft=null;return}}else if(n=uO(n,e,Tn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);vt===0&&(vt=5)}function cs(t,e,n){var r=be,i=Mn.transition;try{Mn.transition=null,be=1,yO(t,e,n,r)}finally{Mn.transition=i,be=r}return null}function yO(t,e,n,r){do jo();while(Ai!==null);if(Ee&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JN(t,s),t===kt&&(ft=kt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$c||($c=!0,VC(zh,function(){return jo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=be;be=1;var a=Ee;Ee|=4,Iy.current=null,dO(t,n),kC(n,t),V2(hg),Wh=!!cg,hg=cg=null,t.current=n,fO(n),BN(),Ee=a,be=o,Mn.transition=s}else t.current=n;if($c&&($c=!1,Ai=t,od=i),s=t.pendingLanes,s===0&&(Mi=null),HN(n.stateNode),gn(t,at()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sd)throw sd=!1,t=bg,bg=null,t;return od&1&&t.tag!==0&&jo(),s=t.pendingLanes,s&1?t===Ng?Vl++:(Vl=0,Ng=t):Vl=0,es(),null}function jo(){if(Ai!==null){var t=pS(od),e=Mn.transition,n=be;try{if(Mn.transition=null,be=16>t?16:t,Ai===null)var r=!1;else{if(t=Ai,Ai=null,od=0,Ee&6)throw Error(B(331));var i=Ee;for(Ee|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(X=c;X!==null;){var h=X;switch(h.tag){case 0:case 11:case 15:Ml(8,h,s)}var d=h.child;if(d!==null)d.return=h,X=d;else for(;X!==null;){h=X;var p=h.sibling,_=h.return;if(xC(h),h===c){X=null;break}if(p!==null){p.return=_,X=p;break}X=_}}}var v=s.alternate;if(v!==null){var I=v.child;if(I!==null){v.child=null;do{var R=I.sibling;I.sibling=null,I=R}while(I!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ml(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,X=T;break e}X=s.return}}var g=t.current;for(X=g;X!==null;){o=X;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,X=S;else e:for(o=g;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mf(9,a)}}catch(L){tt(a,a.return,L)}if(a===o){X=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,X=O;break e}X=a.return}}if(Ee=i,es(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(af,t)}catch{}r=!0}return r}finally{be=n,Mn.transition=e}}return!1}function CE(t,e,n){e=ta(n,e),e=mC(t,e,1),t=Li(t,e,1),e=rn(),t!==null&&(Fu(t,1,e),gn(t,e))}function tt(t,e,n){if(t.tag===3)CE(t,t,n);else for(;e!==null;){if(e.tag===3){CE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mi===null||!Mi.has(r))){t=ta(n,t),t=gC(e,t,1),e=Li(e,t,1),t=rn(),e!==null&&(Fu(e,1,t),gn(e,t));break}}e=e.return}}function vO(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Lt&n)===n&&(vt===4||vt===3&&(Lt&130023424)===Lt&&500>at()-Cy?Es(t,0):Sy|=n),gn(t,e)}function MC(t,e){e===0&&(t.mode&1?(e=bc,bc<<=1,!(bc&130023424)&&(bc=4194304)):e=1);var n=rn();t=Xr(t,e),t!==null&&(Fu(t,e,n),gn(t,n))}function wO(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MC(t,n)}function EO(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),MC(t,n)}var FC;FC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,lO(t,e,n);hn=!!(t.flags&131072)}else hn=!1,Ge&&e.flags&1048576&&jS(e,Xh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fh(t,e),t=e.pendingProps;var i=Xo(e,Xt.current);Uo(e,n),i=yy(null,e,r,t,i,n);var s=vy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(r)?(s=!0,Qh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fy(e),i.updater=ff,e.stateNode=i,i._reactInternals=e,wg(e,r,t,n),e=Ig(null,e,r,!0,s,n)):(e.tag=0,Ge&&s&&oy(e),tn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=IO(r),t=Bn(r,t),i){case 0:e=Tg(null,e,r,t,n);break e;case 1:e=mE(null,e,r,t,n);break e;case 11:e=fE(null,e,r,t,n);break e;case 14:e=pE(null,e,r,Bn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),Tg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),mE(t,e,r,i,n);case 3:e:{if(wC(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,WS(t,e),ed(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ta(Error(B(423)),e),e=gE(t,e,r,n,i);break e}else if(r!==i){i=ta(Error(B(424)),e),e=gE(t,e,r,n,i);break e}else for(Sn=Di(e.stateNode.containerInfo.firstChild),xn=e,Ge=!0,Hn=null,n=KS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jo(),r===i){e=Jr(t,e,n);break e}tn(t,e,r,n)}e=e.child}return e;case 5:return QS(e),t===null&&_g(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dg(r,i)?o=null:s!==null&&dg(r,s)&&(e.flags|=32),vC(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&_g(e),null;case 13:return EC(t,e,n);case 4:return py(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Zo(e,null,r,n):tn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),fE(t,e,r,i,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ve(Jh,r._currentValue),r._currentValue=o,s!==null)if(nr(s.value,o)){if(s.children===i.children&&!pn.current){e=Jr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Hr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yg(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Uo(e,n),i=Vn(i),r=r(i),e.flags|=1,tn(t,e,r,n),e.child;case 14:return r=e.type,i=Bn(r,e.pendingProps),i=Bn(r.type,i),pE(t,e,r,i,n);case 15:return _C(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),fh(t,e),e.tag=1,mn(r)?(t=!0,Qh(e)):t=!1,Uo(e,n),HS(e,r,i),wg(e,r,i,n),Ig(null,e,r,!0,t,n);case 19:return TC(t,e,n);case 22:return yC(t,e,n)}throw Error(B(156,e.tag))};function VC(t,e){return cS(t,e)}function TO(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,r){return new TO(t,e,n,r)}function ky(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IO(t){if(typeof t=="function")return ky(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K_)return 11;if(t===Q_)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ky(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case yo:return Ts(n.children,i,s,e);case G_:o=8,i|=8;break;case Wm:return t=Ln(12,n,e,i|2),t.elementType=Wm,t.lanes=s,t;case qm:return t=Ln(13,n,e,i),t.elementType=qm,t.lanes=s,t;case Hm:return t=Ln(19,n,e,i),t.elementType=Hm,t.lanes=s,t;case GI:return _f(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qI:o=10;break e;case HI:o=9;break e;case K_:o=11;break e;case Q_:o=14;break e;case gi:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ts(t,e,n,r){return t=Ln(7,t,r,e),t.lanes=n,t}function _f(t,e,n,r){return t=Ln(22,t,r,e),t.elementType=GI,t.lanes=n,t.stateNode={isHidden:!1},t}function tm(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function nm(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function SO(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mp(0),this.expirationTimes=Mp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Py(t,e,n,r,i,s,o,a,l){return t=new SO(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fy(s),t}function CO(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_o,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function UC(t){if(!t)return qi;t=t._reactInternals;e:{if(Ws(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(mn(n))return VS(t,n,e)}return e}function jC(t,e,n,r,i,s,o,a,l){return t=Py(n,r,!0,t,i,s,o,a,l),t.context=UC(null),n=t.current,r=rn(),i=Fi(n),s=Hr(r,i),s.callback=e??null,Li(n,s,i),t.current.lanes=i,Fu(t,i,r),gn(t,r),t}function yf(t,e,n,r){var i=e.current,s=rn(),o=Fi(i);return n=UC(n),e.context===null?e.context=n:e.pendingContext=n,e=Hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Li(i,e,o),t!==null&&(Zn(t,i,o,s),ch(t,i,o)),o}function ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function by(t,e){xE(t,e),(t=t.alternate)&&xE(t,e)}function xO(){return null}var $C=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ny(t){this._internalRoot=t}vf.prototype.render=Ny.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));yf(t,e,null,null)};vf.prototype.unmount=Ny.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ns(function(){yf(null,t,null,null)}),e[Yr]=null}};function vf(t){this._internalRoot=t}vf.prototype.unstable_scheduleHydration=function(t){if(t){var e=_S();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yi.length&&e!==0&&e<yi[n].priority;n++);yi.splice(n,0,t),n===0&&vS(t)}};function Oy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function AE(){}function AO(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ld(o);s.call(c)}}var o=jC(e,r,t,0,null,!1,!1,"",AE);return t._reactRootContainer=o,t[Yr]=o.current,su(t.nodeType===8?t.parentNode:t),Ns(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ld(l);a.call(c)}}var l=Py(t,0,!1,null,null,!1,!1,"",AE);return t._reactRootContainer=l,t[Yr]=l.current,su(t.nodeType===8?t.parentNode:t),Ns(function(){yf(e,l,n,r)}),l}function Ef(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ld(o);a.call(l)}}yf(e,o,t,i)}else o=AO(n,e,t,i,r);return ld(o)}mS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wl(e.pendingLanes);n!==0&&(J_(e,n|1),gn(e,at()),!(Ee&6)&&(na=at()+500,es()))}break;case 13:Ns(function(){var r=Xr(t,1);if(r!==null){var i=rn();Zn(r,t,1,i)}}),by(t,1)}};Z_=function(t){if(t.tag===13){var e=Xr(t,134217728);if(e!==null){var n=rn();Zn(e,t,134217728,n)}by(t,134217728)}};gS=function(t){if(t.tag===13){var e=Fi(t),n=Xr(t,e);if(n!==null){var r=rn();Zn(n,t,e,r)}by(t,e)}};_S=function(){return be};yS=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};ng=function(t,e,n){switch(e){case"input":if(Qm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hf(r);if(!i)throw Error(B(90));QI(r),Qm(r,i)}}}break;case"textarea":XI(t,n);break;case"select":e=n.value,e!=null&&Lo(t,!!n.multiple,e,!1)}};iS=xy;sS=Ns;var RO={usingClientEntryPoint:!1,Events:[Uu,To,hf,nS,rS,xy]},ul={findFiberByHostInstance:fs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kO={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lS(t),t===null?null:t.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||xO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{af=zc.inject(kO),mr=zc}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RO;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oy(e))throw Error(B(200));return CO(t,e,null,n)};Pn.createRoot=function(t,e){if(!Oy(t))throw Error(B(299));var n=!1,r="",i=$C;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Py(t,1,!1,null,null,n,!1,r,i),t[Yr]=e.current,su(t.nodeType===8?t.parentNode:t),new Ny(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=lS(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Ns(t)};Pn.hydrate=function(t,e,n){if(!wf(e))throw Error(B(200));return Ef(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Oy(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$C;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jC(e,null,t,1,n??null,i,!1,s,o),t[Yr]=e.current,su(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vf(e)};Pn.render=function(t,e,n){if(!wf(e))throw Error(B(200));return Ef(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!wf(t))throw Error(B(40));return t._reactRootContainer?(Ns(function(){Ef(null,null,t,!1,function(){t._reactRootContainer=null,t[Yr]=null})}),!0):!1};Pn.unstable_batchedUpdates=xy;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wf(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Ef(t,e,n,!1,r)};Pn.version="18.2.0-next-9e3b772b8-20220608";function zC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zC)}catch(t){console.error(t)}}zC(),jI.exports=Pn;var PO=jI.exports,RE=PO;zm.createRoot=RE.createRoot,zm.hydrateRoot=RE.hydrateRoot;var dn=function(){return dn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},dn.apply(this,arguments)};function Dy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ud(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function BC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var bO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,NO=BC(function(t){return bO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ze="-ms-",Ul="-moz-",ke="-webkit-",WC="comm",Tf="rule",Ly="decl",OO="@import",qC="@keyframes",DO="@layer",LO=Math.abs,My=String.fromCharCode,Lg=Object.assign;function MO(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function HC(t){return t.trim()}function Vr(t,e){return(t=e.exec(t))?t[0]:t}function ce(t,e,n){return t.replace(e,n)}function _h(t,e){return t.indexOf(e)}function xt(t,e){return t.charCodeAt(e)|0}function ra(t,e,n){return t.slice(e,n)}function ar(t){return t.length}function GC(t){return t.length}function Tl(t,e){return e.push(t),t}function FO(t,e){return t.map(e).join("")}function kE(t,e){return t.filter(function(n){return!Vr(n,e)})}var If=1,ia=1,KC=0,jn=0,ht=0,Pa="";function Sf(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:If,column:ia,length:o,return:"",siblings:a}}function mi(t,e){return Lg(Sf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function uo(t){for(;t.root;)t=mi(t.root,{children:[t]});Tl(t,t.siblings)}function VO(){return ht}function UO(){return ht=jn>0?xt(Pa,--jn):0,ia--,ht===10&&(ia=1,If--),ht}function er(){return ht=jn<KC?xt(Pa,jn++):0,ia++,ht===10&&(ia=1,If++),ht}function Is(){return xt(Pa,jn)}function yh(){return jn}function Cf(t,e){return ra(Pa,t,e)}function Mg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function jO(t){return If=ia=1,KC=ar(Pa=t),jn=0,[]}function $O(t){return Pa="",t}function rm(t){return HC(Cf(jn-1,Fg(t===91?t+2:t===40?t+1:t)))}function zO(t){for(;(ht=Is())&&ht<33;)er();return Mg(t)>2||Mg(ht)>3?"":" "}function BO(t,e){for(;--e&&er()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return Cf(t,yh()+(e<6&&Is()==32&&er()==32))}function Fg(t){for(;er();)switch(ht){case t:return jn;case 34:case 39:t!==34&&t!==39&&Fg(ht);break;case 40:t===41&&Fg(t);break;case 92:er();break}return jn}function WO(t,e){for(;er()&&t+ht!==47+10;)if(t+ht===42+42&&Is()===47)break;return"/*"+Cf(e,jn-1)+"*"+My(t===47?t:er())}function qO(t){for(;!Mg(Is());)er();return Cf(t,jn)}function HO(t){return $O(vh("",null,null,null,[""],t=jO(t),0,[0],t))}function vh(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,d=o,p=0,_=0,v=0,I=1,R=1,T=1,g=0,S="",O=i,L=s,V=r,w=S;R;)switch(v=g,g=er()){case 40:if(v!=108&&xt(w,d-1)==58){_h(w+=ce(rm(g),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:w+=rm(g);break;case 9:case 10:case 13:case 32:w+=zO(v);break;case 92:w+=BO(yh()-1,7);continue;case 47:switch(Is()){case 42:case 47:Tl(GO(WO(er(),yh()),e,n,l),l);break;default:w+="/"}break;case 123*I:a[c++]=ar(w)*T;case 125*I:case 59:case 0:switch(g){case 0:case 125:R=0;case 59+h:T==-1&&(w=ce(w,/\f/g,"")),_>0&&ar(w)-d&&Tl(_>32?bE(w+";",r,n,d-1,l):bE(ce(w," ","")+";",r,n,d-2,l),l);break;case 59:w+=";";default:if(Tl(V=PE(w,e,n,c,h,i,a,S,O=[],L=[],d,s),s),g===123)if(h===0)vh(w,e,V,V,O,s,d,a,L);else switch(p===99&&xt(w,3)===110?100:p){case 100:case 108:case 109:case 115:vh(t,V,V,r&&Tl(PE(t,V,V,0,0,i,a,S,i,O=[],d,L),L),i,L,d,a,r?O:L);break;default:vh(w,V,V,V,[""],L,0,a,L)}}c=h=_=0,I=T=1,S=w="",d=o;break;case 58:d=1+ar(w),_=v;default:if(I<1){if(g==123)--I;else if(g==125&&I++==0&&UO()==125)continue}switch(w+=My(g),g*I){case 38:T=h>0?1:(w+="\f",-1);break;case 44:a[c++]=(ar(w)-1)*T,T=1;break;case 64:Is()===45&&(w+=rm(er())),p=Is(),h=d=ar(S=w+=qO(yh())),g++;break;case 45:v===45&&ar(w)==2&&(I=0)}}return s}function PE(t,e,n,r,i,s,o,a,l,c,h,d){for(var p=i-1,_=i===0?s:[""],v=GC(_),I=0,R=0,T=0;I<r;++I)for(var g=0,S=ra(t,p+1,p=LO(R=o[I])),O=t;g<v;++g)(O=HC(R>0?_[g]+" "+S:ce(S,/&\f/g,_[g])))&&(l[T++]=O);return Sf(t,e,n,i===0?Tf:a,l,c,h,d)}function GO(t,e,n,r){return Sf(t,e,n,WC,My(VO()),ra(t,2,-2),0,r)}function bE(t,e,n,r,i){return Sf(t,e,n,Ly,ra(t,0,r),ra(t,r+1,-1),r,i)}function QC(t,e,n){switch(MO(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return Ul+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+Ul+t+ze+t+t;case 5936:switch(xt(t,e+11)){case 114:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+ze+t+t;case 6165:return ke+t+ze+"flex-"+t+t;case 5187:return ke+t+ce(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+ze+"flex-$1$2")+t;case 5443:return ke+t+ze+"flex-item-"+ce(t,/flex-|-self/g,"")+(Vr(t,/flex-|baseline/)?"":ze+"grid-row-"+ce(t,/flex-|-self/g,""))+t;case 4675:return ke+t+ze+"flex-line-pack"+ce(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+ze+ce(t,"shrink","negative")+t;case 5292:return ke+t+ze+ce(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+ce(t,"-grow","")+ke+t+ze+ce(t,"grow","positive")+t;case 4554:return ke+ce(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return ce(ce(ce(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return ce(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return ce(ce(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!Vr(t,/flex-|baseline/))return ze+"grid-column-align"+ra(t,e)+t;break;case 2592:case 3360:return ze+ce(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Vr(r.props,/grid-\w+-end/)})?~_h(t+(n=n[e].value),"span")?t:ze+ce(t,"-start","")+t+ze+"grid-row-span:"+(~_h(n,"span")?Vr(n,/\d+/):+Vr(n,/\d+/)-+Vr(t,/\d+/))+";":ze+ce(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Vr(r.props,/grid-\w+-start/)})?t:ze+ce(ce(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ce(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ar(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return ce(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Ul+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~_h(t,"stretch")?QC(ce(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ce(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return ze+i+":"+s+c+(o?ze+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(xt(t,e+6)===121)return ce(t,":",":"+ke)+t;break;case 6444:switch(xt(t,xt(t,14)===45?18:11)){case 120:return ce(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(xt(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+ze+"$2box$3")+t;case 100:return ce(t,":",":"+ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(t,"scroll-","scroll-snap-")+t}return t}function cd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function KO(t,e,n,r){switch(t.type){case DO:if(t.children.length)break;case OO:case Ly:return t.return=t.return||t.value;case WC:return"";case qC:return t.return=t.value+"{"+cd(t.children,r)+"}";case Tf:if(!ar(t.value=t.props.join(",")))return""}return ar(n=cd(t.children,r))?t.return=t.value+"{"+n+"}":""}function QO(t){var e=GC(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function YO(t){return function(e){e.root||(e=e.return)&&t(e)}}function XO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ly:t.return=QC(t.value,t.length,n);return;case qC:return cd([mi(t,{value:ce(t.value,"@","@"+ke)})],r);case Tf:if(t.length)return FO(n=t.props,function(i){switch(Vr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":uo(mi(t,{props:[ce(i,/:(read-\w+)/,":"+Ul+"$1")]})),uo(mi(t,{props:[i]})),Lg(t,{props:kE(n,r)});break;case"::placeholder":uo(mi(t,{props:[ce(i,/:(plac\w+)/,":"+ke+"input-$1")]})),uo(mi(t,{props:[ce(i,/:(plac\w+)/,":"+Ul+"$1")]})),uo(mi(t,{props:[ce(i,/:(plac\w+)/,ze+"input-$1")]})),uo(mi(t,{props:[i]})),Lg(t,{props:kE(n,r)});break}return""})}}var YC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sa=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fy=typeof window<"u"&&"HTMLElement"in window,JO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xf=Object.freeze([]),oa=Object.freeze({});function ZO(t,e,n){return n===void 0&&(n=oa),t.theme!==n.theme&&t.theme||e||n.theme}var XC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),eD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,tD=/(^-|-$)/g;function NE(t){return t.replace(eD,"-").replace(tD,"")}var nD=/(a)(d)/gi,OE=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=OE(e%52)+n;return(OE(e%52)+n).replace(nD,"$1-$2")}var im,ko=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},JC=function(t){return ko(5381,t)};function rD(t){return Vg(JC(t)>>>0)}function iD(t){return t.displayName||t.name||"Component"}function sm(t){return typeof t=="string"&&!0}var ZC=typeof Symbol=="function"&&Symbol.for,ex=ZC?Symbol.for("react.memo"):60115,sD=ZC?Symbol.for("react.forward_ref"):60112,oD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},aD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},lD=((im={})[sD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},im[ex]=tx,im);function DE(t){return("type"in(e=t)&&e.type.$$typeof)===ex?tx:"$$typeof"in t?lD[t.$$typeof]:oD;var e}var uD=Object.defineProperty,cD=Object.getOwnPropertyNames,LE=Object.getOwnPropertySymbols,hD=Object.getOwnPropertyDescriptor,dD=Object.getPrototypeOf,ME=Object.prototype;function nx(t,e,n){if(typeof e!="string"){if(ME){var r=dD(e);r&&r!==ME&&nx(t,r,n)}var i=cD(e);LE&&(i=i.concat(LE(e)));for(var s=DE(t),o=DE(e),a=0;a<i.length;++a){var l=i[a];if(!(l in aD||n&&n[l]||o&&l in o||s&&l in s)){var c=hD(e,l);try{uD(t,l,c)}catch{}}}}return t}function aa(t){return typeof t=="function"}function Vy(t){return typeof t=="object"&&"styledComponentId"in t}function gs(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function FE(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function pu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ug(t,e,n){if(n===void 0&&(n=!1),!n&&!pu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ug(t[r],e[r]);else if(pu(e))for(var r in e)t[r]=Ug(t[r],e[r]);return t}function Uy(t,e){Object.defineProperty(t,"toString",{value:e})}function $u(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var fD=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw $u(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),wh=new Map,hd=new Map,om=1,Bc=function(t){if(wh.has(t))return wh.get(t);for(;hd.has(om);)om++;var e=om++;return wh.set(t,e),hd.set(e,t),e},pD=function(t,e){wh.set(t,e),hd.set(e,t)},mD="style[".concat(sa,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),gD=new RegExp("^".concat(sa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_D=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},yD=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(gD);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(pD(h,c),_D(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function vD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(sa,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(sa,"active"),r.setAttribute("data-styled-version","6.0.7");var o=vD();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},wD=function(){function t(e){this.element=rx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw $u(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),ED=function(){function t(e){this.element=rx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),TD=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),VE=Fy,ID={isServer:!Fy,useCSSOMInjection:!JO},ix=function(){function t(e,n,r){e===void 0&&(e=oa),n===void 0&&(n={});var i=this;this.options=dn(dn({},ID),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Fy&&VE&&(VE=!1,function(s){for(var o=document.querySelectorAll(mD),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(sa)!=="active"&&(yD(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Uy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var p=function(T){return hd.get(T)}(d);if(p===void 0)return"continue";var _=s.names.get(p),v=o.getGroup(d);if(_===void 0||v.length===0)return"continue";var I="".concat(sa,".g").concat(d,'[id="').concat(p,'"]'),R="";_!==void 0&&_.forEach(function(T){T.length>0&&(R+="".concat(T,","))}),l+="".concat(v).concat(I,'{content:"').concat(R,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return Bc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(dn(dn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new TD(i):r?new wD(i):new ED(i)}(this.options),new fD(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Bc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Bc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Bc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),SD=/&/g,CD=/^\s*\/\/.*$/gm;function sx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sx(n.children,e)),n})}function xD(t){var e,n,r,i=t===void 0?oa:t,s=i.options,o=s===void 0?oa:s,a=i.plugins,l=a===void 0?xf:a,c=function(p,_,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===Tf&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(SD,n).replace(r,c))}),o.prefix&&h.push(XO),h.push(KO);var d=function(p,_,v,I){_===void 0&&(_=""),v===void 0&&(v=""),I===void 0&&(I="&"),e=I,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var R=p.replace(CD,""),T=HO(v||_?"".concat(v," ").concat(_," { ").concat(R," }"):R);o.namespace&&(T=sx(T,o.namespace));var g=[];return cd(T,QO(h.concat(YO(function(S){return g.push(S)})))),g};return d.hash=l.length?l.reduce(function(p,_){return _.name||$u(15),ko(p,_.name)},5381).toString():"",d}var AD=new ix,jg=xD(),ox=Me.createContext({shouldForwardProp:void 0,styleSheet:AD,stylis:jg});ox.Consumer;Me.createContext(void 0);function UE(){return j.useContext(ox)}var RD=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=jg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Uy(this,function(){throw $u(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=jg),this.name+e.hash},t}(),kD=function(t){return t>="A"&&t<="Z"};function jE(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;kD(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var ax=function(t){return t==null||t===!1||t===""},lx=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!ax(s)&&(Array.isArray(s)&&s.isCss||aa(s)?r.push("".concat(jE(i),":"),s,";"):pu(s)?r.push.apply(r,ud(ud(["".concat(i," {")],lx(s),!1),["}"],!1)):r.push("".concat(jE(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in YC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ss(t,e,n,r){if(ax(t))return[];if(Vy(t))return[".".concat(t.styledComponentId)];if(aa(t)){if(!aa(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ss(i,e,n,r)}var s;return t instanceof RD?n?(t.inject(n,r),[t.getName(r)]):[t]:pu(t)?lx(t):Array.isArray(t)?Array.prototype.concat.apply(xf,t.map(function(o){return Ss(o,e,n,r)})):[t.toString()]}function PD(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(aa(n)&&!Vy(n))return!1}return!0}var bD=JC("6.0.7"),ND=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&PD(e),this.componentId=n,this.baseHash=ko(bD,n),this.baseStyle=r,ix.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=gs(i,this.staticRulesId);else{var s=FE(Ss(this.rules,e,n,r)),o=Vg(ko(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=gs(i,o),this.staticRulesId=o}else{for(var l=ko(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var d=this.rules[h];if(typeof d=="string")c+=d;else if(d){var p=FE(Ss(d,e,n,r));l=ko(l,p),c+=p}}if(c){var _=Vg(l>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=gs(i,_)}}return i},t}(),ux=Me.createContext(void 0);ux.Consumer;var am={};function OD(t,e,n){var r=Vy(t),i=t,s=!sm(t),o=e.attrs,a=o===void 0?xf:o,l=e.componentId,c=l===void 0?function(S,O){var L=typeof S!="string"?"sc":NE(S);am[L]=(am[L]||0)+1;var V="".concat(L,"-").concat(rD("6.0.7"+L+am[L]));return O?"".concat(O,"-").concat(V):V}(e.displayName,e.parentComponentId):l,h=e.displayName;h===void 0&&function(S){return sm(S)?"styled.".concat(S):"Styled(".concat(iD(S),")")}(t);var d=e.displayName&&e.componentId?"".concat(NE(e.displayName),"-").concat(e.componentId):e.componentId||c,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var I=e.shouldForwardProp;_=function(S,O){return v(S,O)&&I(S,O)}}else _=v}var R=new ND(n,d,r?i.componentStyle:void 0);function T(S,O){return function(L,V,w){var E=L.attrs,C=L.componentStyle,A=L.defaultProps,k=L.foldedComponentIds,b=L.styledComponentId,x=L.target,de=Me.useContext(ux),Le=UE(),it=L.shouldForwardProp||Le.shouldForwardProp,Ie=function(Ne,Tt,Ut){for(var pt,st=dn(dn({},Tt),{className:void 0,theme:Ut}),Pr=0;Pr<Ne.length;Pr+=1){var br=aa(pt=Ne[Pr])?pt(st):pt;for(var Zt in br)st[Zt]=Zt==="className"?gs(st[Zt],br[Zt]):Zt==="style"?dn(dn({},st[Zt]),br[Zt]):br[Zt]}return Tt.className&&(st.className=gs(st.className,Tt.className)),st}(E,V,ZO(V,de,A)||oa),H=Ie.as||x,ee={};for(var te in Ie)Ie[te]===void 0||te[0]==="$"||te==="as"||te==="theme"||(te==="forwardedAs"?ee.as=Ie.forwardedAs:it&&!it(te,H)||(ee[te]=Ie[te]));var Pe=function(Ne,Tt){var Ut=UE(),pt=Ne.generateAndInjectStyles(Tt,Ut.styleSheet,Ut.stylis);return pt}(C,Ie),ye=gs(k,b);return Pe&&(ye+=" "+Pe),Ie.className&&(ye+=" "+Ie.className),ee[sm(H)&&!XC.has(H)?"class":"className"]=ye,ee.ref=w,j.createElement(H,ee)}(g,S,O)}var g=Me.forwardRef(T);return g.attrs=p,g.componentStyle=R,g.shouldForwardProp=_,g.foldedComponentIds=r?gs(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=d,g.target=r?i.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(O){for(var L=[],V=1;V<arguments.length;V++)L[V-1]=arguments[V];for(var w=0,E=L;w<E.length;w++)Ug(O,E[w],!0);return O}({},i.defaultProps,S):S}}),Uy(g,function(){return".".concat(g.styledComponentId)}),s&&nx(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function $E(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var zE=function(t){return Object.assign(t,{isCss:!0})};function DD(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(aa(t)||pu(t)){var r=t;return zE(Ss($E(xf,ud([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Ss(i):zE(Ss($E(i,e)))}function $g(t,e,n){if(n===void 0&&(n=oa),!e)throw $u(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,DD.apply(void 0,ud([i],s,!1)))};return r.attrs=function(i){return $g(t,e,dn(dn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $g(t,e,dn(dn({},n),i))},r}var cx=function(t){return $g(OD,t)},re=cx;XC.forEach(function(t){re[t]=cx(t)});const LD=re.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`,MD=re(of)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: var(--primary-text-color);
`,FD=re.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,Wc=re(of)`
  font-family: 'Roboto-Regular', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: var(--primary-text-color);
  text-decoration: none;
  padding: 8px 12px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: var(--btn-color);
    font-weight: 700;
  }

  &.active {
    border-color: var(--btn-color);
    font-weight: 700;
  }
`,VD=re.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`,BE=re.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;

  &:hover,
  &:focus {
    color: var(--btn-color);
  }
`,UD=re.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 39px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0em;
  color: #fff;
  background-color: var(--primary-text-color);
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--btn-color);
  }
`,jD="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgBvZY/UsJQEMa/fS926uANYuVYiXoAQe3FE4hHsNGxcqgYPAWeAOxV4ABKrBhtzA1k0E7y1vcCBPkfgeTXEPIy+7HLt9klhCCZ/0pZgk6YOAWCDUbCPyA09bVDTE5b8b1zvVadFYumHe7dtrIEcQOwjVCQy1C5l8v14sQnxt1M5j9tS66UGJzEXJDreT9p53rDHT4Rwzf2C99n0rLq84sZ2JbSqu8XWpmRnzIoph8gKmGZMGWfr1bvRgRNGU1mgSGWR9Pz2ru98gYllXKlEoGYIaHLG1TNFzRuDO/EuUh2NLqCHetHS0+DTFNLiQpigDykhZAqg5hQpDKCSOwgJkiIA6GduUCD/xvbmCaKVphEgvj9mBEjAsRNxEdTmDc74sPRpuEa4kLRq4BHZcQFc9mfFvx29KHHko0oYXZp63GzMy0U5xA1XY1gHur2qOuPaF4C3ezMZX/F8Nqn0bSIjqm8dO9bIEjbVRdtvsCyYZz7sYcFO6JPRZ3+kjI1MdS5LuVAF4xdE7mRsiFkZQHnOuYv+pvZVMG+8GEWgm5CC2tzGDf6lZoAIUycxrFe8TmjxfXsNPsqdSeMKRsZkZpeB8u0/VCdFesXTIytwiPfYywAAAAASUVORK5CYII=";var hx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},WE=Me.createContext&&Me.createContext(hx),$D=["attr","size","title"];function zD(t,e){if(t==null)return{};var n=BD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function BD(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function dd(){return dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dd.apply(this,arguments)}function qE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qE(Object(n),!0).forEach(function(r){WD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function WD(t,e,n){return e=qD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qD(t){var e=HD(t,"string");return typeof e=="symbol"?e:e+""}function HD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function dx(t){return t&&t.map((e,n)=>Me.createElement(e.tag,fd({key:n},e.attr),dx(e.child)))}function qs(t){return e=>Me.createElement(GD,dd({attr:fd({},t.attr)},e),dx(t.child))}function GD(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=zD(t,$D),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Me.createElement("svg",dd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:fd(fd({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Me.createElement("title",null,s),t.children)};return WE!==void 0?Me.createElement(WE.Consumer,null,n=>e(n)):e(hx)}function KD(t){return qs({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"},child:[]},{tag:"polyline",attr:{points:"10 17 15 12 10 7"},child:[]},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"},child:[]}]})(t)}function QD(t){return qs({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}var zu=t=>t.type==="checkbox",Po=t=>t instanceof Date,nn=t=>t==null;const fx=t=>typeof t=="object";var Et=t=>!nn(t)&&!Array.isArray(t)&&fx(t)&&!Po(t),YD=t=>Et(t)&&t.target?zu(t.target)?t.target.checked:t.target.value:t,XD=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,JD=(t,e)=>t.has(XD(e)),ZD=t=>{const e=t.constructor&&t.constructor.prototype;return Et(e)&&e.hasOwnProperty("isPrototypeOf")},jy=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Nn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(jy&&(t instanceof Blob||t instanceof FileList))&&(n||Et(t)))if(e=n?[]:{},!n&&!ZD(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Nn(t[r]));else return t;return e}var Bu=t=>Array.isArray(t)?t.filter(Boolean):[],ot=t=>t===void 0,Y=(t,e,n)=>{if(!e||!Et(t))return n;const r=Bu(e.split(/[,[\].]+?/)).reduce((i,s)=>nn(i)?i:i[s],t);return ot(r)||r===t?ot(t[e])?n:t[e]:r},wi=t=>typeof t=="boolean",$y=t=>/^\w*$/.test(t),px=t=>Bu(t.replace(/["|']|\]/g,"").split(/\.|\[/)),Be=(t,e,n)=>{let r=-1;const i=$y(e)?[e]:px(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const c=t[a];l=Et(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}if(a==="__proto__")return;t[a]=l,t=t[a]}return t};const HE={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Gn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Dr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Me.createContext(null);var eL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Gn.all&&(e._proxyFormState[o]=!r||Gn.all),n&&(n[o]=!0),t[o]}});return i},En=t=>Et(t)&&!Object.keys(t).length,tL=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return En(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||Gn.all))},lm=t=>Array.isArray(t)?t:[t];function nL(t){const e=Me.useRef(t);e.current=t,Me.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var hr=t=>typeof t=="string",rL=(t,e,n,r,i)=>hr(t)?(r&&e.watch.add(t),Y(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),Y(n,s))):(r&&(e.watchAll=!0),n),mx=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},GE=t=>({isOnSubmit:!t||t===Gn.onSubmit,isOnBlur:t===Gn.onBlur,isOnChange:t===Gn.onChange,isOnAll:t===Gn.all,isOnTouch:t===Gn.onTouched}),KE=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const jl=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=Y(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;jl(a,e)}else Et(a)&&jl(a,e)}}};var iL=(t,e,n)=>{const r=Bu(Y(t,n));return Be(r,"root",e[n]),Be(t,n,r),t},zy=t=>t.type==="file",Ri=t=>typeof t=="function",pd=t=>{if(!jy)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Eh=t=>hr(t),By=t=>t.type==="radio",md=t=>t instanceof RegExp;const QE={value:!1,isValid:!1},YE={value:!0,isValid:!0};var gx=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!ot(t[0].attributes.value)?ot(t[0].value)||t[0].value===""?YE:{value:t[0].value,isValid:!0}:YE:QE}return QE};const XE={isValid:!1,value:null};var _x=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,XE):XE;function JE(t,e,n="validate"){if(Eh(t)||Array.isArray(t)&&t.every(Eh)||wi(t)&&!t)return{type:n,message:Eh(t)?t:"",ref:e}}var co=t=>Et(t)&&!md(t)?t:{value:t,message:""},ZE=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:c,min:h,max:d,pattern:p,validate:_,name:v,valueAsNumber:I,mount:R,disabled:T}=t._f,g=Y(e,v);if(!R||T)return{};const S=o?o[0]:s,O=b=>{r&&S.reportValidity&&(S.setCustomValidity(wi(b)?"":b||""),S.reportValidity())},L={},V=By(s),w=zu(s),E=V||w,C=(I||zy(s))&&ot(s.value)&&ot(g)||pd(s)&&s.value===""||g===""||Array.isArray(g)&&!g.length,A=mx.bind(null,v,n,L),k=(b,x,de,Le=Dr.maxLength,it=Dr.minLength)=>{const Ie=b?x:de;L[v]={type:b?Le:it,message:Ie,ref:s,...A(b?Le:it,Ie)}};if(i?!Array.isArray(g)||!g.length:a&&(!E&&(C||nn(g))||wi(g)&&!g||w&&!gx(o).isValid||V&&!_x(o).isValid)){const{value:b,message:x}=Eh(a)?{value:!!a,message:a}:co(a);if(b&&(L[v]={type:Dr.required,message:x,ref:S,...A(Dr.required,x)},!n))return O(x),L}if(!C&&(!nn(h)||!nn(d))){let b,x;const de=co(d),Le=co(h);if(!nn(g)&&!isNaN(g)){const it=s.valueAsNumber||g&&+g;nn(de.value)||(b=it>de.value),nn(Le.value)||(x=it<Le.value)}else{const it=s.valueAsDate||new Date(g),Ie=te=>new Date(new Date().toDateString()+" "+te),H=s.type=="time",ee=s.type=="week";hr(de.value)&&g&&(b=H?Ie(g)>Ie(de.value):ee?g>de.value:it>new Date(de.value)),hr(Le.value)&&g&&(x=H?Ie(g)<Ie(Le.value):ee?g<Le.value:it<new Date(Le.value))}if((b||x)&&(k(!!b,de.message,Le.message,Dr.max,Dr.min),!n))return O(L[v].message),L}if((l||c)&&!C&&(hr(g)||i&&Array.isArray(g))){const b=co(l),x=co(c),de=!nn(b.value)&&g.length>+b.value,Le=!nn(x.value)&&g.length<+x.value;if((de||Le)&&(k(de,b.message,x.message),!n))return O(L[v].message),L}if(p&&!C&&hr(g)){const{value:b,message:x}=co(p);if(md(b)&&!g.match(b)&&(L[v]={type:Dr.pattern,message:x,ref:s,...A(Dr.pattern,x)},!n))return O(x),L}if(_){if(Ri(_)){const b=await _(g,e),x=JE(b,S);if(x&&(L[v]={...x,...A(Dr.validate,x.message)},!n))return O(x.message),L}else if(Et(_)){let b={};for(const x in _){if(!En(b)&&!n)break;const de=JE(await _[x](g,e),S,x);de&&(b={...de,...A(x,de.message)},O(de.message),n&&(L[v]=b))}if(!En(b)&&(L[v]={ref:S,...b},!n))return L}}return O(!0),L};function sL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=ot(t)?r++:t[e[r++]];return t}function oL(t){for(const e in t)if(t.hasOwnProperty(e)&&!ot(t[e]))return!1;return!0}function mt(t,e){const n=Array.isArray(e)?e:$y(e)?[e]:px(e),r=n.length===1?t:sL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Et(r)&&En(r)||Array.isArray(r)&&oL(r))&&mt(t,n.slice(0,-1)),t}var um=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},gd=t=>nn(t)||!fx(t);function _s(t,e){if(gd(t)||gd(e))return t===e;if(Po(t)&&Po(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Po(s)&&Po(o)||Et(s)&&Et(o)||Array.isArray(s)&&Array.isArray(o)?!_s(s,o):s!==o)return!1}}return!0}var yx=t=>t.type==="select-multiple",aL=t=>By(t)||zu(t),cm=t=>pd(t)&&t.isConnected,vx=t=>{for(const e in t)if(Ri(t[e]))return!0;return!1};function _d(t,e={}){const n=Array.isArray(t);if(Et(t)||n)for(const r in t)Array.isArray(t[r])||Et(t[r])&&!vx(t[r])?(e[r]=Array.isArray(t[r])?[]:{},_d(t[r],e[r])):nn(t[r])||(e[r]=!0);return e}function wx(t,e,n){const r=Array.isArray(t);if(Et(t)||r)for(const i in t)Array.isArray(t[i])||Et(t[i])&&!vx(t[i])?ot(e)||gd(n[i])?n[i]=Array.isArray(t[i])?_d(t[i],[]):{..._d(t[i])}:wx(t[i],nn(e)?{}:e[i],n[i]):n[i]=!_s(t[i],e[i]);return n}var qc=(t,e)=>wx(t,e,_d(e)),Ex=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>ot(t)?t:e?t===""?NaN:t&&+t:n&&hr(t)?new Date(t):r?r(t):t;function hm(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return zy(e)?e.files:By(e)?_x(t.refs).value:yx(e)?[...e.selectedOptions].map(({value:n})=>n):zu(e)?gx(t.refs).value:Ex(ot(e.value)?t.ref.value:e.value,t)}var lL=(t,e,n,r)=>{const i={};for(const s of t){const o=Y(e,s);o&&Be(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},cl=t=>ot(t)?t:md(t)?t.source:Et(t)?md(t.value)?t.value.source:t.value:t,uL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function eT(t,e,n){const r=Y(t,n);if(r||$y(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Y(e,s),a=Y(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var cL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,hL=(t,e)=>!Bu(Y(t,e)).length&&mt(t,e);const dL={mode:Gn.onSubmit,reValidateMode:Gn.onChange,shouldFocusError:!0};function fL(t={}){let e={...dL,...t},n={submitCount:0,isDirty:!1,isLoading:Ri(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=Et(e.defaultValues)||Et(e.values)?Nn(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:Nn(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,c=0;const h={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:um(),array:um(),state:um()},p=GE(e.mode),_=GE(e.reValidateMode),v=e.criteriaMode===Gn.all,I=N=>M=>{clearTimeout(c),c=setTimeout(N,M)},R=async N=>{if(h.isValid||N){const M=e.resolver?En((await E()).errors):await A(r,!0);M!==n.isValid&&d.state.next({isValid:M})}},T=(N,M)=>{(h.isValidating||h.validatingFields)&&((N||Array.from(a.mount)).forEach(U=>{U&&(M?Be(n.validatingFields,U,M):mt(n.validatingFields,U))}),d.state.next({validatingFields:n.validatingFields,isValidating:!En(n.validatingFields)}))},g=(N,M=[],U,Q,K=!0,W=!0)=>{if(Q&&U){if(o.action=!0,W&&Array.isArray(Y(r,N))){const Z=U(Y(r,N),Q.argA,Q.argB);K&&Be(r,N,Z)}if(W&&Array.isArray(Y(n.errors,N))){const Z=U(Y(n.errors,N),Q.argA,Q.argB);K&&Be(n.errors,N,Z),hL(n.errors,N)}if(h.touchedFields&&W&&Array.isArray(Y(n.touchedFields,N))){const Z=U(Y(n.touchedFields,N),Q.argA,Q.argB);K&&Be(n.touchedFields,N,Z)}h.dirtyFields&&(n.dirtyFields=qc(i,s)),d.state.next({name:N,isDirty:b(N,M),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Be(s,N,M)},S=(N,M)=>{Be(n.errors,N,M),d.state.next({errors:n.errors})},O=N=>{n.errors=N,d.state.next({errors:n.errors,isValid:!1})},L=(N,M,U,Q)=>{const K=Y(r,N);if(K){const W=Y(s,N,ot(U)?Y(i,N):U);ot(W)||Q&&Q.defaultChecked||M?Be(s,N,M?W:hm(K._f)):Le(N,W),o.mount&&R()}},V=(N,M,U,Q,K)=>{let W=!1,Z=!1;const ve={name:N},He=!!(Y(r,N)&&Y(r,N)._f&&Y(r,N)._f.disabled);if(!U||Q){h.isDirty&&(Z=n.isDirty,n.isDirty=ve.isDirty=b(),W=Z!==ve.isDirty);const Re=He||_s(Y(i,N),M);Z=!!(!He&&Y(n.dirtyFields,N)),Re||He?mt(n.dirtyFields,N):Be(n.dirtyFields,N,!0),ve.dirtyFields=n.dirtyFields,W=W||h.dirtyFields&&Z!==!Re}if(U){const Re=Y(n.touchedFields,N);Re||(Be(n.touchedFields,N,U),ve.touchedFields=n.touchedFields,W=W||h.touchedFields&&Re!==U)}return W&&K&&d.state.next(ve),W?ve:{}},w=(N,M,U,Q)=>{const K=Y(n.errors,N),W=h.isValid&&wi(M)&&n.isValid!==M;if(t.delayError&&U?(l=I(()=>S(N,U)),l(t.delayError)):(clearTimeout(c),l=null,U?Be(n.errors,N,U):mt(n.errors,N)),(U?!_s(K,U):K)||!En(Q)||W){const Z={...Q,...W&&wi(M)?{isValid:M}:{},errors:n.errors,name:N};n={...n,...Z},d.state.next(Z)}},E=async N=>{T(N,!0);const M=await e.resolver(s,e.context,lL(N||a.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return T(N),M},C=async N=>{const{errors:M}=await E(N);if(N)for(const U of N){const Q=Y(M,U);Q?Be(n.errors,U,Q):mt(n.errors,U)}else n.errors=M;return M},A=async(N,M,U={valid:!0})=>{for(const Q in N){const K=N[Q];if(K){const{_f:W,...Z}=K;if(W){const ve=a.array.has(W.name);T([Q],!0);const He=await ZE(K,s,v,e.shouldUseNativeValidation&&!M,ve);if(T([Q]),He[W.name]&&(U.valid=!1,M))break;!M&&(Y(He,W.name)?ve?iL(n.errors,He,W.name):Be(n.errors,W.name,He[W.name]):mt(n.errors,W.name))}Z&&await A(Z,M,U)}}return U.valid},k=()=>{for(const N of a.unMount){const M=Y(r,N);M&&(M._f.refs?M._f.refs.every(U=>!cm(U)):!cm(M._f.ref))&&pt(N)}a.unMount=new Set},b=(N,M)=>(N&&M&&Be(s,N,M),!_s(Pe(),i)),x=(N,M,U)=>rL(N,a,{...o.mount?s:ot(M)?i:hr(N)?{[N]:M}:M},U,M),de=N=>Bu(Y(o.mount?s:i,N,t.shouldUnregister?Y(i,N,[]):[])),Le=(N,M,U={})=>{const Q=Y(r,N);let K=M;if(Q){const W=Q._f;W&&(!W.disabled&&Be(s,N,Ex(M,W)),K=pd(W.ref)&&nn(M)?"":M,yx(W.ref)?[...W.ref.options].forEach(Z=>Z.selected=K.includes(Z.value)):W.refs?zu(W.ref)?W.refs.length>1?W.refs.forEach(Z=>(!Z.defaultChecked||!Z.disabled)&&(Z.checked=Array.isArray(K)?!!K.find(ve=>ve===Z.value):K===Z.value)):W.refs[0]&&(W.refs[0].checked=!!K):W.refs.forEach(Z=>Z.checked=Z.value===K):zy(W.ref)?W.ref.value="":(W.ref.value=K,W.ref.type||d.values.next({name:N,values:{...s}})))}(U.shouldDirty||U.shouldTouch)&&V(N,K,U.shouldTouch,U.shouldDirty,!0),U.shouldValidate&&te(N)},it=(N,M,U)=>{for(const Q in M){const K=M[Q],W=`${N}.${Q}`,Z=Y(r,W);(a.array.has(N)||!gd(K)||Z&&!Z._f)&&!Po(K)?it(W,K,U):Le(W,K,U)}},Ie=(N,M,U={})=>{const Q=Y(r,N),K=a.array.has(N),W=Nn(M);Be(s,N,W),K?(d.array.next({name:N,values:{...s}}),(h.isDirty||h.dirtyFields)&&U.shouldDirty&&d.state.next({name:N,dirtyFields:qc(i,s),isDirty:b(N,W)})):Q&&!Q._f&&!nn(W)?it(N,W,U):Le(N,W,U),KE(N,a)&&d.state.next({...n}),d.values.next({name:o.mount?N:void 0,values:{...s}})},H=async N=>{o.mount=!0;const M=N.target;let U=M.name,Q=!0;const K=Y(r,U),W=()=>M.type?hm(K._f):YD(N),Z=ve=>{Q=Number.isNaN(ve)||ve===Y(s,U,ve)};if(K){let ve,He;const Re=W(),Ze=N.type===HE.BLUR||N.type===HE.FOCUS_OUT,to=!uL(K._f)&&!e.resolver&&!Y(n.errors,U)&&!K._f.deps||cL(Ze,Y(n.touchedFields,U),n.isSubmitted,_,p),no=KE(U,a,Ze);Be(s,U,Re),Ze?(K._f.onBlur&&K._f.onBlur(N),l&&l(0)):K._f.onChange&&K._f.onChange(N);const ro=V(U,Re,Ze,!1),fp=!En(ro)||no;if(!Ze&&d.values.next({name:U,type:N.type,values:{...s}}),to)return h.isValid&&R(),fp&&d.state.next({name:U,...no?{}:ro});if(!Ze&&no&&d.state.next({...n}),e.resolver){const{errors:ui}=await E([U]);if(Z(Re),Q){const hc=eT(n.errors,r,U),za=eT(ui,r,hc.name||U);ve=za.error,U=za.name,He=En(ui)}}else T([U],!0),ve=(await ZE(K,s,v,e.shouldUseNativeValidation))[U],T([U]),Z(Re),Q&&(ve?He=!1:h.isValid&&(He=await A(r,!0)));Q&&(K._f.deps&&te(K._f.deps),w(U,He,ve,ro))}},ee=(N,M)=>{if(Y(n.errors,M)&&N.focus)return N.focus(),1},te=async(N,M={})=>{let U,Q;const K=lm(N);if(e.resolver){const W=await C(ot(N)?N:K);U=En(W),Q=N?!K.some(Z=>Y(W,Z)):U}else N?(Q=(await Promise.all(K.map(async W=>{const Z=Y(r,W);return await A(Z&&Z._f?{[W]:Z}:Z)}))).every(Boolean),!(!Q&&!n.isValid)&&R()):Q=U=await A(r);return d.state.next({...!hr(N)||h.isValid&&U!==n.isValid?{}:{name:N},...e.resolver||!N?{isValid:U}:{},errors:n.errors}),M.shouldFocus&&!Q&&jl(r,ee,N?K:a.mount),Q},Pe=N=>{const M={...o.mount?s:i};return ot(N)?M:hr(N)?Y(M,N):N.map(U=>Y(M,U))},ye=(N,M)=>({invalid:!!Y((M||n).errors,N),isDirty:!!Y((M||n).dirtyFields,N),error:Y((M||n).errors,N),isValidating:!!Y(n.validatingFields,N),isTouched:!!Y((M||n).touchedFields,N)}),Ne=N=>{N&&lm(N).forEach(M=>mt(n.errors,M)),d.state.next({errors:N?n.errors:{}})},Tt=(N,M,U)=>{const Q=(Y(r,N,{_f:{}})._f||{}).ref,K=Y(n.errors,N)||{},{ref:W,message:Z,type:ve,...He}=K;Be(n.errors,N,{...He,...M,ref:Q}),d.state.next({name:N,errors:n.errors,isValid:!1}),U&&U.shouldFocus&&Q&&Q.focus&&Q.focus()},Ut=(N,M)=>Ri(N)?d.values.subscribe({next:U=>N(x(void 0,M),U)}):x(N,M,!0),pt=(N,M={})=>{for(const U of N?lm(N):a.mount)a.mount.delete(U),a.array.delete(U),M.keepValue||(mt(r,U),mt(s,U)),!M.keepError&&mt(n.errors,U),!M.keepDirty&&mt(n.dirtyFields,U),!M.keepTouched&&mt(n.touchedFields,U),!M.keepIsValidating&&mt(n.validatingFields,U),!e.shouldUnregister&&!M.keepDefaultValue&&mt(i,U);d.values.next({values:{...s}}),d.state.next({...n,...M.keepDirty?{isDirty:b()}:{}}),!M.keepIsValid&&R()},st=({disabled:N,name:M,field:U,fields:Q,value:K})=>{if(wi(N)&&o.mount||N){const W=N?void 0:ot(K)?hm(U?U._f:Y(Q,M)._f):K;Be(s,M,W),V(M,W,!1,!1,!0)}},Pr=(N,M={})=>{let U=Y(r,N);const Q=wi(M.disabled);return Be(r,N,{...U||{},_f:{...U&&U._f?U._f:{ref:{name:N}},name:N,mount:!0,...M}}),a.mount.add(N),U?st({field:U,disabled:M.disabled,name:N,value:M.value}):L(N,!0,M.value),{...Q?{disabled:M.disabled}:{},...e.progressive?{required:!!M.required,min:cl(M.min),max:cl(M.max),minLength:cl(M.minLength),maxLength:cl(M.maxLength),pattern:cl(M.pattern)}:{},name:N,onChange:H,onBlur:H,ref:K=>{if(K){Pr(N,M),U=Y(r,N);const W=ot(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,Z=aL(W),ve=U._f.refs||[];if(Z?ve.find(He=>He===W):W===U._f.ref)return;Be(r,N,{_f:{...U._f,...Z?{refs:[...ve.filter(cm),W,...Array.isArray(Y(i,N))?[{}]:[]],ref:{type:W.type,name:N}}:{ref:W}}}),L(N,!1,void 0,W)}else U=Y(r,N,{}),U._f&&(U._f.mount=!1),(e.shouldUnregister||M.shouldUnregister)&&!(JD(a.array,N)&&o.action)&&a.unMount.add(N)}}},br=()=>e.shouldFocusError&&jl(r,ee,a.mount),Zt=N=>{wi(N)&&(d.state.next({disabled:N}),jl(r,(M,U)=>{const Q=Y(r,U);Q&&(M.disabled=Q._f.disabled||N,Array.isArray(Q._f.refs)&&Q._f.refs.forEach(K=>{K.disabled=Q._f.disabled||N}))},0,!1))},is=(N,M)=>async U=>{let Q;U&&(U.preventDefault&&U.preventDefault(),U.persist&&U.persist());let K=Nn(s);if(d.state.next({isSubmitting:!0}),e.resolver){const{errors:W,values:Z}=await E();n.errors=W,K=Z}else await A(r);if(mt(n.errors,"root"),En(n.errors)){d.state.next({errors:{}});try{await N(K,U)}catch(W){Q=W}}else M&&await M({...n.errors},U),br(),setTimeout(br);if(d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:En(n.errors)&&!Q,submitCount:n.submitCount+1,errors:n.errors}),Q)throw Q},$a=(N,M={})=>{Y(r,N)&&(ot(M.defaultValue)?Ie(N,Nn(Y(i,N))):(Ie(N,M.defaultValue),Be(i,N,Nn(M.defaultValue))),M.keepTouched||mt(n.touchedFields,N),M.keepDirty||(mt(n.dirtyFields,N),n.isDirty=M.defaultValue?b(N,Nn(Y(i,N))):b()),M.keepError||(mt(n.errors,N),h.isValid&&R()),d.state.next({...n}))},Zs=(N,M={})=>{const U=N?Nn(N):i,Q=Nn(U),K=En(N),W=K?i:Q;if(M.keepDefaultValues||(i=U),!M.keepValues){if(M.keepDirtyValues)for(const Z of a.mount)Y(n.dirtyFields,Z)?Be(W,Z,Y(s,Z)):Ie(Z,Y(W,Z));else{if(jy&&ot(N))for(const Z of a.mount){const ve=Y(r,Z);if(ve&&ve._f){const He=Array.isArray(ve._f.refs)?ve._f.refs[0]:ve._f.ref;if(pd(He)){const Re=He.closest("form");if(Re){Re.reset();break}}}}r={}}s=t.shouldUnregister?M.keepDefaultValues?Nn(i):{}:Nn(W),d.array.next({values:{...W}}),d.values.next({values:{...W}})}a={mount:M.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!h.isValid||!!M.keepIsValid||!!M.keepDirtyValues,o.watch=!!t.shouldUnregister,d.state.next({submitCount:M.keepSubmitCount?n.submitCount:0,isDirty:K?!1:M.keepDirty?n.isDirty:!!(M.keepDefaultValues&&!_s(N,i)),isSubmitted:M.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:K?[]:M.keepDirtyValues?M.keepDefaultValues&&s?qc(i,s):n.dirtyFields:M.keepDefaultValues&&N?qc(i,N):M.keepDirty?n.dirtyFields:{},touchedFields:M.keepTouched?n.touchedFields:{},errors:M.keepErrors?n.errors:{},isSubmitSuccessful:M.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},eo=(N,M)=>Zs(Ri(N)?N(s):N,M);return{control:{register:Pr,unregister:pt,getFieldState:ye,handleSubmit:is,setError:Tt,_executeSchema:E,_getWatch:x,_getDirty:b,_updateValid:R,_removeUnmounted:k,_updateFieldArray:g,_updateDisabledField:st,_getFieldArray:de,_reset:Zs,_resetDefaultValues:()=>Ri(e.defaultValues)&&e.defaultValues().then(N=>{eo(N,e.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:N=>{n={...n,...N}},_disableForm:Zt,_subjects:d,_proxyFormState:h,_setErrors:O,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(N){o=N},get _defaultValues(){return i},get _names(){return a},set _names(N){a=N},get _formState(){return n},set _formState(N){n=N},get _options(){return e},set _options(N){e={...e,...N}}},trigger:te,register:Pr,handleSubmit:is,watch:Ut,setValue:Ie,getValues:Pe,reset:eo,resetField:$a,clearErrors:Ne,unregister:pt,setError:Tt,setFocus:(N,M={})=>{const U=Y(r,N),Q=U&&U._f;if(Q){const K=Q.refs?Q.refs[0]:Q.ref;K.focus&&(K.focus(),M.shouldSelect&&K.select())}},getFieldState:ye}}function Wy(t={}){const e=Me.useRef(),n=Me.useRef(),[r,i]=Me.useState({isDirty:!1,isValidating:!1,isLoading:Ri(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:Ri(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...fL(t),formState:r});const s=e.current.control;return s._options=t,nL({subject:s._subjects.state,next:o=>{tL(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Me.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),Me.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),Me.useEffect(()=>{t.values&&!_s(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),Me.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),Me.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),Me.useEffect(()=>{t.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[t.shouldUnregister,s]),e.current.formState=eL(r,s),e.current}var tT=function(t,e,n){if(t&&"reportValidity"in t){var r=Y(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},Tx=function(t,e){var n=function(i){var s=e.fields[i];s&&s.ref&&"reportValidity"in s.ref?tT(s.ref,i,t):s.refs&&s.refs.forEach(function(o){return tT(o,i,t)})};for(var r in e.fields)n(r)},pL=function(t){return t instanceof Date},mL=function(t){return t==null},gL=function(t){return typeof t=="object"},_L=function(t){return!mL(t)&&!Array.isArray(t)&&gL(t)&&!pL(t)},yL=function(t){return/^\w*$/.test(t)},dm=function(t,e,n){for(var r=-1,i=yL(e)?[e]:function(h){return d=h.replace(/["|']|\]/g,"").split(/\.|\[/),Array.isArray(d)?d.filter(Boolean):[];var d}(e),s=i.length,o=s-1;++r<s;){var a=i[r],l=n;if(r!==o){var c=t[a];l=_L(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t},vL=function(t,e){e.shouldUseNativeValidation&&Tx(t,e);var n={};for(var r in t){var i=Y(e.fields,r),s=Object.assign(t[r]||{},{ref:i&&i.ref});if(wL(e.names||Object.keys(t),r)){var o=Object.assign({},Y(n,r));dm(o,"root",s),dm(n,r,o)}else dm(n,r,s)}return n},wL=function(t,e){return t.some(function(n){return n.startsWith(e+".")})};function qy(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=(e.context,Promise.resolve(t[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:i}))).then(function(c){return s.shouldUseNativeValidation&&Tx({},s),{values:n.raw?r:c,errors:{}}}))}catch(c){return a(c)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:vL((a=o,l=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(a.inner||[]).reduce(function(c,h){if(c[h.path]||(c[h.path]={message:h.message,type:h.type}),l){var d=c[h.path].types,p=d&&d[h.type];c[h.path]=mx(h.path,l,c,h.type,p?[].concat(p,h.message):h.message)}return c},{})),s)};var a,l}))}catch(o){return Promise.reject(o)}}}function Hs(t){this._maxSize=t,this.clear()}Hs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Hs.prototype.get=function(t){return this._values[t]};Hs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var EL=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Ix=/^\d+$/,TL=/^\d/,IL=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,SL=/^\s*(['"]?)(.*?)(\1)\s*$/,Hy=512,nT=new Hs(Hy),rT=new Hs(Hy),iT=new Hs(Hy),Cs={Cache:Hs,split:zg,normalizePath:fm,setter:function(t){var e=fm(t);return rT.get(t)||rT.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=fm(t);return iT.get(t)||iT.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Gy(n)||Ix.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){CL(Array.isArray(t)?t:zg(t),e,n)}};function fm(t){return nT.get(t)||nT.set(t,zg(t).map(function(e){return e.replace(SL,"$2")}))}function zg(t){return t.match(EL)||[""]}function CL(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(RL(i)&&(i='"'+i+'"'),a=Gy(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Gy(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function xL(t){return t.match(TL)&&!t.match(Ix)}function AL(t){return IL.test(t)}function RL(t){return!Gy(t)&&(xL(t)||AL(t))}const kL=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Af=t=>t.match(kL)||[],Rf=t=>t[0].toUpperCase()+t.slice(1),Ky=(t,e)=>Af(t).join(e).toLowerCase(),Sx=t=>Af(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),PL=t=>Rf(Sx(t)),bL=t=>Ky(t,"_"),NL=t=>Ky(t,"-"),OL=t=>Rf(Ky(t," ")),DL=t=>Af(t).map(Rf).join(" ");var pm={words:Af,upperFirst:Rf,camelCase:Sx,pascalCase:PL,snakeCase:bL,kebabCase:NL,sentenceCase:OL,titleCase:DL},Qy={exports:{}};Qy.exports=function(t){return Cx(LL(t),t)};Qy.exports.array=Cx;function Cx(t,e){var n=t.length,r=new Array(n),i={},s=n,o=ML(e),a=FL(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(c,h,d){if(d.has(c)){var p;try{p=", node was:"+JSON.stringify(c)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[h]){i[h]=!0;var _=o.get(c)||new Set;if(_=Array.from(_),h=_.length){d.add(c);do{var v=_[--h];l(v,a.get(v),d)}while(h);d.delete(c)}r[--n]=c}}}function LL(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function ML(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function FL(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var VL=Qy.exports;const UL=vI(VL),jL=Object.prototype.toString,$L=Error.prototype.toString,zL=RegExp.prototype.toString,BL=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",WL=/^Symbol\((.*)\)(.*)$/;function qL(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function sT(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return qL(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return BL.call(t).replace(WL,"Symbol($1)");const r=jL.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+$L.call(t)+"]":r==="RegExp"?zL.call(t):null}function Ui(t,e){let n=sT(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=sT(this[r],e);return s!==null?s:i},2)}function xx(t){return t==null?[]:[].concat(t)}let Ax,Rx,kx,HL=/\$\{\s*(\w+)\s*\}/g;Ax=Symbol.toStringTag;class oT{constructor(e,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Ax]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],xx(e).forEach(s=>{if(un.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Rx=Symbol.hasInstance;kx=Symbol.toStringTag;class un extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(HL,(i,s)=>Ui(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){const o=new oT(e,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[kx]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,un)}static[Rx](e){return oT[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let or={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Ui(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Ui(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Ui(n,!0)}\``+i}},an={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},GL={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Bg={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},KL={isValue:"${path} field must be ${value}"},Wg={noUnknown:"${path} field has unspecified keys: ${unknown}"},QL={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},YL={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Ui(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Ui(n,!0)}\``}return un.formatError(or.notType,t)}};Object.assign(Object.create(null),{mixed:or,string:an,number:GL,date:Bg,object:Wg,array:QL,boolean:KL,tuple:YL});const Yy=t=>t&&t.__isYupSchema__;class yd{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new yd(e,(a,l)=>{var c;let h=o(...a)?i:s;return(c=h==null?void 0:h(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Yy(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Hc={context:"$",value:"."};let Gs=class{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Hc.context,this.isValue=this.key[0]===Hc.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Hc.context:this.isValue?Hc.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Cs.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}};Gs.prototype.__isYupRef=!0;const ys=t=>t==null;function ho(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:c,test:h,params:d,message:p,skipAbsent:_}=t;let{parent:v,context:I,abortEarly:R=o.spec.abortEarly,disableStackTrace:T=o.spec.disableStackTrace}=i;function g(k){return Gs.isRef(k)?k.getValue(n,v,I):k}function S(k={}){const b=Object.assign({value:n,originalValue:s,label:o.spec.label,path:k.path||r,spec:o.spec,disableStackTrace:k.disableStackTrace||T},d,k.params);for(const de of Object.keys(b))b[de]=g(b[de]);const x=new un(un.formatError(k.message||p,b),n,b.path,k.type||c,b.disableStackTrace);return x.params=b,x}const O=R?a:l;let L={path:r,parent:v,type:c,from:i.from,createError:S,resolve:g,options:i,originalValue:s,schema:o};const V=k=>{un.isError(k)?O(k):k?l(null):O(S())},w=k=>{un.isError(k)?O(k):a(k)};if(_&&ys(n))return V(!0);let C;try{var A;if(C=h.call(L,n,L),typeof((A=C)==null?void 0:A.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${L.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(C).then(V,w)}}catch(k){w(k);return}V(C)}return e.OPTIONS=t,e}function XL(t,e,n,r=n){let i,s,o;return e?(Cs.forEach(e,(a,l,c)=>{let h=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",p=c?parseInt(h,10):0;if(t.innerType||d){if(d&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[p],t=d?t.spec.types[p]:t.innerType}if(!c){if(!t.fields||!t.fields[h])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[h],t=t.fields[h]}s=h,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class vd extends Set{describe(){const e=[];for(const n of this.values())e.push(Gs.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new vd(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function bo(t,e=new Map){if(Yy(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=bo(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,bo(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(bo(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=bo(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Sr{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new vd,this._blacklist=new vd,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(or.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=bo(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&ys(s))return s;let o=Ui(e),a=Ui(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let h of Object.values(this.internalTests))h&&c.push(h);this.runTests({path:s,value:l,originalValue:o,options:n,tests:c},r,h=>{if(h.length)return i(h,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:c}=e,h=I=>{i||(i=!0,n(I,o))},d=I=>{i||(i=!0,r(I,o))},p=s.length,_=[];if(!p)return d([]);let v={value:o,originalValue:a,path:l,options:c,schema:this};for(let I=0;I<s.length;I++){const R=s[I];R(v,h,function(g){g&&(Array.isArray(g)?_.push(...g):_.push(g)),--p<=0&&d(_)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=r[a];const h=Object.assign({},o,{strict:!0,parent:r,value:c,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,p,_)=>this.resolve(h)._validate(c,h,p,_)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,c)=>{un.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new un(l,c,void 0,void 0,s)):o(c)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw un.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new un(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(un.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(un.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):bo(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=ho({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=ho({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=or.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=or.notNull){return this.nullability(!1,e)}required(e=or.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=or.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=ho(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=xx(e).map(s=>new Gs(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new yd(i,n):yd.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=ho({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=or.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=ho({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=or.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=ho({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,h)=>h.findIndex(d=>d.name===l.name)===c)}}}Sr.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Sr.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=XL(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Sr.prototype[t]=Sr.prototype.oneOf;for(const t of["not","nope"])Sr.prototype[t]=Sr.prototype.notOneOf;const JL=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function ZL(t){const e=qg(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function qg(t){var e,n;const r=JL.exec(t);return r?{year:Lr(r[1]),month:Lr(r[2],1)-1,day:Lr(r[3],1),hour:Lr(r[4]),minute:Lr(r[5]),second:Lr(r[6]),millisecond:r[7]?Lr(r[7].substring(0,3)):0,precision:(e=(n=r[7])==null?void 0:n.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Lr(r[10]),minuteOffset:Lr(r[11])}:null}function Lr(t,e=0){return Number(t)||e}let eM=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,tM=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,nM=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,rM="^\\d{4}-\\d{2}-\\d{2}",iM="\\d{2}:\\d{2}:\\d{2}",sM="(([+-]\\d{2}(:?\\d{2})?)|Z)",oM=new RegExp(`${rM}T${iM}(\\.\\d+)?${sM}$`),aM=t=>ys(t)||t===t.trim(),lM={}.toString();function dr(){return new Px}class Px extends Sr{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===lM?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||or.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=an.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=an.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=an.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||an.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=an.email){return this.matches(eM,{name:"email",message:e,excludeEmptyString:!0})}url(e=an.url){return this.matches(tM,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=an.uuid){return this.matches(nM,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",r,i;return e&&(typeof e=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=e:n=e),this.matches(oM,{name:"datetime",message:n||an.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||an.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=qg(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||an.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=qg(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=an.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:aM})}lowercase(e=an.lowercase){return this.transform(n=>ys(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ys(n)||n===n.toLowerCase()})}uppercase(e=an.uppercase){return this.transform(n=>ys(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>ys(n)||n===n.toUpperCase()})}}dr.prototype=Px.prototype;let uM=new Date(""),cM=t=>Object.prototype.toString.call(t)==="[object Date]";class kf extends Sr{constructor(){super({type:"date",check(e){return cM(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=ZL(e),isNaN(e)?kf.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Gs.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Bg.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Bg.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}kf.INVALID_DATE=uM;kf.prototype;function hM(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Cs.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Gs.isRef(a)&&a.isSibling?s(a.path,o):Yy(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return UL.array(Array.from(r),n).reverse()}function aT(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function bx(t){return(e,n)=>aT(t,e)-aT(t,n)}const dM=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Th(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Th(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Th(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Th)}):"optional"in t?t.optional():t}const fM=(t,e)=>{const n=[...Cs.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=Cs.getter(Cs.join(n),!0)(t);return!!(i&&r in i)};let lT=t=>Object.prototype.toString.call(t)==="[object Object]";function pM(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const mM=bx([]);function Pf(t){return new Nx(t)}class Nx extends Sr{constructor(e){super({type:"object",check(n){return lT(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=mM,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),h=!1;for(const d of a){let p=s[d],_=d in i;if(p){let v,I=i[d];c.path=(n.path?`${n.path}.`:"")+d,p=p.resolve({value:I,context:n.context,parent:l});let R=p instanceof Sr?p.spec:void 0,T=R==null?void 0:R.strict;if(R!=null&&R.strip){h=h||d in i;continue}v=!n.__validating||!T?p.cast(i[d],c):i[d],v!==void 0&&(l[d]=v)}else _&&!o&&(l[d]=i[d]);(_!==d in l||l[d]!==i[d])&&(h=!0)}return h?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,c)=>{if(!a||!lT(c)){i(l,c);return}o=o||c;let h=[];for(let d of this._nodes){let p=this.fields[d];!p||Gs.isRef(p)||h.push(p.asNestedTest({options:n,key:d,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:h,value:c,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=hM(e,n),r._sortErrors=bx(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Th(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=Cs.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return fM(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(dM)}noUnknown(e=!0,n=Wg.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=pM(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Wg.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(pm.camelCase)}snakeCase(){return this.transformKeys(pm.snakeCase)}constantCase(){return this.transformKeys(e=>pm.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Pf.prototype=Nx.prototype;const gM=re.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`,Xy=({onClose:t,children:e})=>{j.useEffect(()=>(window.addEventListener("keydown",n),document.documentElement.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.documentElement.style.overflow="visible"}));const n=i=>{i.code==="Escape"&&t()},r=i=>{i.target===i.currentTarget&&t()};return P.jsx(gM,{onClick:r,children:e})};function Jy(t){return qs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const _M=re.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  background-color: #fff;
  border-radius: 30px;
  padding: 64px;
  margin: 0;
`,yM=re.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,vM=re.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;

  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }
`,wM=re.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,uT=re.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  width: 100%;
  padding: 0;
  margin: 0;

  label {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 22px;
    color: var(--primary-text-color);

    padding: 0 4px;
    margin: 0;
    pointer-events: none;
    transition: top 0.2s ease;
  }

  input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    padding: 16px 18px;
    margin: 0;
    outline: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      color: var(--btn-color);
      background-color: #eee;
    }

    &:focus {
      border: 1px solid var(--btn-color);
    }

    &.error + label {
      color: red;
    }

    &.error {
      border-color: red;
    }
  }
`,cT=re.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,EM=re.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  border: none;
  background-color: var(--btn-color);
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-color);
  }
`;/**
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
 */const Ox={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const q=function(t,e){if(!t)throw ba(e)},ba=function(t){return new Error("Firebase Database ("+Ox.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Dx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),r.push(n[h],n[d],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new IM;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lx=function(t){const e=Dx(t);return Zy.encodeByteArray(e,!0)},wd=function(t){return Lx(t).replace(/\./g,"")},Ed=function(t){try{return Zy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function SM(t){return Mx(void 0,t)}function Mx(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!CM(n)||(t[n]=Mx(t[n],e[n]));return t}function CM(t){return t!=="__proto__"}/**
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
 */function xM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AM=()=>xM().__FIREBASE_DEFAULTS__,RM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},kM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ed(t[1]);return e&&JSON.parse(e)},bf=()=>{try{return AM()||RM()||kM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fx=t=>{var e,n;return(n=(e=bf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ev=t=>{const e=Fx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vx=()=>{var t;return(t=bf())===null||t===void 0?void 0:t.config},Ux=t=>{var e;return(e=bf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class tv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wd(JSON.stringify(n)),wd(JSON.stringify(o)),a].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function PM(){var t;const e=(t=bf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bM(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NM(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $x(){return Ox.NODE_ADMIN===!0}function OM(){return!PM()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function DM(){try{return typeof indexedDB=="object"}catch{return!1}}function LM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const MM="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=MM,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wu.prototype.create)}}class Wu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?FM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rr(i,a,r)}}function FM(t,e){return t.replace(VM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VM=/\{\$([^}]+)}/g;/**
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
 */function mu(t){return JSON.parse(t)}function Rt(t){return JSON.stringify(t)}/**
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
 */const zx=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=mu(Ed(s[0])||""),n=mu(Ed(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},UM=function(t){const e=zx(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jM=function(t){const e=zx(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function oi(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function la(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Hg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Td(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function gu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hT(s)&&hT(o)){if(!gu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hT(t){return t!==null&&typeof t=="object"}/**
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
 */function Na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Il(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Sl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class $M{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):d<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+l+h+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function zM(t,e){const n=new BM(t,e);return n.subscribe.bind(n)}class BM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mm),i.error===void 0&&(i.error=mm),i.complete===void 0&&(i.complete=mm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mm(){}function Bx(t,e){return`${t} failed: ${e} argument `}/**
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
 */const qM=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,q(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nf=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hs="[DEFAULT]";/**
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
 */class HM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KM(e))try{this.getOrInitializeService({instanceIdentifier:hs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hs){return this.instances.has(e)}getOptions(e=hs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hs){return this.component?this.component.multipleInstances?e:hs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GM(t){return t===hs?void 0:t}function KM(t){return t.instantiationMode==="EAGER"}/**
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
 */class QM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const YM={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},XM=me.INFO,JM={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},ZM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=XM,this._logHandler=ZM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const eF=(t,e)=>e.some(n=>t instanceof n);let dT,fT;function tF(){return dT||(dT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nF(){return fT||(fT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wx=new WeakMap,Gg=new WeakMap,qx=new WeakMap,gm=new WeakMap,iv=new WeakMap;function rF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ji(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wx.set(n,t)}).catch(()=>{}),iv.set(e,t),e}function iF(t){if(Gg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gg.set(t,e)}let Kg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ji(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sF(t){Kg=t(Kg)}function oF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_m(this),e,...n);return qx.set(r,e.sort?e.sort():[e]),ji(r)}:nF().includes(t)?function(...e){return t.apply(_m(this),e),ji(Wx.get(this))}:function(...e){return ji(t.apply(_m(this),e))}}function aF(t){return typeof t=="function"?oF(t):(t instanceof IDBTransaction&&iF(t),eF(t,tF())?new Proxy(t,Kg):t)}function ji(t){if(t instanceof IDBRequest)return rF(t);if(gm.has(t))return gm.get(t);const e=aF(t);return e!==t&&(gm.set(t,e),iv.set(e,t)),e}const _m=t=>iv.get(t);function lF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ji(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ji(o.result),l.oldVersion,l.newVersion,ji(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const uF=["get","getKey","getAll","getAllKeys","count"],cF=["put","add","delete","clear"],ym=new Map;function pT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ym.get(e))return ym.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ym.set(e,s),s}sF(t=>({...t,get:(e,n,r)=>pT(e,n)||t.get(e,n,r),has:(e,n)=>!!pT(e,n)||t.has(e,n)}));/**
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
 */class hF{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dF(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qg="@firebase/app",mT="0.10.5";/**
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
 */const Os=new Of("@firebase/app"),fF="@firebase/app-compat",pF="@firebase/analytics-compat",mF="@firebase/analytics",gF="@firebase/app-check-compat",_F="@firebase/app-check",yF="@firebase/auth",vF="@firebase/auth-compat",wF="@firebase/database",EF="@firebase/database-compat",TF="@firebase/functions",IF="@firebase/functions-compat",SF="@firebase/installations",CF="@firebase/installations-compat",xF="@firebase/messaging",AF="@firebase/messaging-compat",RF="@firebase/performance",kF="@firebase/performance-compat",PF="@firebase/remote-config",bF="@firebase/remote-config-compat",NF="@firebase/storage",OF="@firebase/storage-compat",DF="@firebase/firestore",LF="@firebase/vertexai-preview",MF="@firebase/firestore-compat",FF="firebase",VF="10.12.2";/**
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
 */const Yg="[DEFAULT]",UF={[Qg]:"fire-core",[fF]:"fire-core-compat",[mF]:"fire-analytics",[pF]:"fire-analytics-compat",[_F]:"fire-app-check",[gF]:"fire-app-check-compat",[yF]:"fire-auth",[vF]:"fire-auth-compat",[wF]:"fire-rtdb",[EF]:"fire-rtdb-compat",[TF]:"fire-fn",[IF]:"fire-fn-compat",[SF]:"fire-iid",[CF]:"fire-iid-compat",[xF]:"fire-fcm",[AF]:"fire-fcm-compat",[RF]:"fire-perf",[kF]:"fire-perf-compat",[PF]:"fire-rc",[bF]:"fire-rc-compat",[NF]:"fire-gcs",[OF]:"fire-gcs-compat",[DF]:"fire-fst",[MF]:"fire-fst-compat",[LF]:"fire-vertex","fire-js":"fire-js",[FF]:"fire-js-all"};/**
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
 */const Id=new Map,jF=new Map,Xg=new Map;function gT(t,e){try{t.container.addComponent(e)}catch(n){Os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hi(t){const e=t.name;if(Xg.has(e))return Os.debug(`There were multiple attempts to register component ${e}.`),!1;Xg.set(e,t);for(const n of Id.values())gT(n,t);for(const n of jF.values())gT(n,t);return!0}function qu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fr(t){return t.settings!==void 0}/**
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
 */const $F={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$i=new Wu("app","Firebase",$F);/**
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
 */class zF{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $i.create("app-deleted",{appName:this._name})}}/**
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
 */const ts=VF;function Hx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $i.create("bad-app-name",{appName:String(i)});if(n||(n=Vx()),!n)throw $i.create("no-options");const s=Id.get(i);if(s){if(gu(n,s.options)&&gu(r,s.config))return s;throw $i.create("duplicate-app",{appName:i})}const o=new QM(i);for(const l of Xg.values())o.addComponent(l);const a=new zF(n,r,o);return Id.set(i,a),a}function Df(t=Yg){const e=Id.get(t);if(!e&&t===Yg&&Vx())return Hx();if(!e)throw $i.create("no-app",{appName:t});return e}function Fn(t,e,n){var r;let i=(r=UF[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Os.warn(a.join(" "));return}Hi(new Zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const BF="firebase-heartbeat-database",WF=1,_u="firebase-heartbeat-store";let vm=null;function Gx(){return vm||(vm=lF(BF,WF,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_u)}catch(n){console.warn(n)}}}}).catch(t=>{throw $i.create("idb-open",{originalErrorMessage:t.message})})),vm}async function qF(t){try{const n=(await Gx()).transaction(_u),r=await n.objectStore(_u).get(Kx(t));return await n.done,r}catch(e){if(e instanceof Rr)Os.warn(e.message);else{const n=$i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Os.warn(n.message)}}}async function _T(t,e){try{const r=(await Gx()).transaction(_u,"readwrite");await r.objectStore(_u).put(e,Kx(t)),await r.done}catch(n){if(n instanceof Rr)Os.warn(n.message);else{const r=$i.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Os.warn(r.message)}}}function Kx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const HF=1024,GF=30*24*60*60*1e3;class KF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yT();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=GF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yT(),{heartbeatsToSend:r,unsentEntries:i}=QF(this._heartbeatsCache.heartbeats),s=wd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yT(){return new Date().toISOString().substring(0,10)}function QF(t,e=HF){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vT(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vT(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DM()?LM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _T(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _T(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vT(t){return wd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function XF(t){Hi(new Zr("platform-logger",e=>new hF(e),"PRIVATE")),Hi(new Zr("heartbeat",e=>new KF(e),"PRIVATE")),Fn(Qg,mT,t),Fn(Qg,mT,"esm2017"),Fn("fire-js","")}XF("");var JF="firebase",ZF="10.12.2";/**
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
 */Fn(JF,ZF,"app");function Qx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eV=Qx,Yx=new Wu("auth","Firebase",Qx());/**
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
 */const Sd=new Of("@firebase/auth");function tV(t,...e){Sd.logLevel<=me.WARN&&Sd.warn(`Auth (${ts}): ${t}`,...e)}function Ih(t,...e){Sd.logLevel<=me.ERROR&&Sd.error(`Auth (${ts}): ${t}`,...e)}/**
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
 */function rr(t,...e){throw sv(t,...e)}function _r(t,...e){return sv(t,...e)}function Xx(t,e,n){const r=Object.assign(Object.assign({},eV()),{[e]:n});return new Wu("auth","Firebase",r).create(e,{appName:t.name})}function Gr(t){return Xx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yx.create(t,...e)}function se(t,e,...n){if(!t)throw sv(e,...n)}function zr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ih(e),new Error(e)}function ei(t,e){t||zr(e)}/**
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
 */function Jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function nV(){return wT()==="http:"||wT()==="https:"}function wT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function rV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nV()||bM()||"connection"in navigator)?navigator.onLine:!0}function iV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hu{constructor(e,n){this.shortDelay=e,this.longDelay=n,ei(n>e,"Short delay should be less than long delay!"),this.isMobile=rv()||jx()}get(){return rV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ov(t,e){ei(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const oV=new Hu(3e4,6e4);function ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ai(t,e,n,r,i={}){return Zx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Na(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jx.fetch()(eA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},sV),e);try{const i=new lV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xx(t,h,c);rr(t,h)}}catch(i){if(i instanceof Rr)throw i;rr(t,"network-request-failed",{message:String(i)})}}async function Gu(t,e,n,r,i={}){const s=await ai(t,e,n,r,i);return"mfaPendingCredential"in s&&rr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function eA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ov(t.config,i):`${t.config.apiScheme}://${i}`}function aV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_r(this.auth,"network-request-failed")),oV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_r(t,e,r);return i.customData._tokenResponse=n,i}function ET(t){return t!==void 0&&t.enterprise!==void 0}class uV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return aV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cV(t,e){return ai(t,"GET","/v2/recaptchaConfig",ns(t,e))}/**
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
 */async function hV(t,e){return ai(t,"POST","/v1/accounts:delete",e)}async function tA(t,e){return ai(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $l(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dV(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=av(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:$l(wm(i.auth_time)),issuedAtTime:$l(wm(i.iat)),expirationTime:$l(wm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wm(t){return Number(t)*1e3}function av(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ih("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ed(n);return i?JSON.parse(i):(Ih("Failed to decode base64 JWT payload"),null)}catch(i){return Ih("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function TT(t){const e=av(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ua(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rr&&fV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$l(this.lastLoginAt),this.creationTime=$l(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ua(t,tA(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nA(s.providerUserInfo):[],a=gV(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zg(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function mV(t){const e=Xe(t);await Cd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function gV(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nA(t){return t.map(e=>{var{providerId:n}=e,r=Dy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _V(t,e){const n=await Zx(t,{},async()=>{const r=Na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=eA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yV(t,e){return ai(t,"POST","/v2/accounts:revokeToken",ns(t,e))}/**
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
 */class $o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=TT(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await _V(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new $o;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $o,this.toJSON())}_performRefresh(){return zr("not implemented")}}/**
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
 */function pi(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Br{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Dy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ua(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dV(this,e)}reload(){return mV(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Br(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(Gr(this.auth));const e=await this.getIdToken();return await ua(this,hV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:O,isAnonymous:L,providerData:V,stsTokenManager:w}=n;se(S&&w,e,"internal-error");const E=$o.fromJSON(this.name,w);se(typeof S=="string",e,"internal-error"),pi(d,e.name),pi(p,e.name),se(typeof O=="boolean",e,"internal-error"),se(typeof L=="boolean",e,"internal-error"),pi(_,e.name),pi(v,e.name),pi(I,e.name),pi(R,e.name),pi(T,e.name),pi(g,e.name);const C=new Br({uid:S,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:L,photoURL:v,phoneNumber:_,tenantId:I,stsTokenManager:E,createdAt:T,lastLoginAt:g});return V&&Array.isArray(V)&&(C.providerData=V.map(A=>Object.assign({},A))),R&&(C._redirectEventId=R),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new $o;i.updateFromServerResponse(n);const s=new Br({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new $o;a.updateFromIdToken(r);const l=new Br({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const IT=new Map;function Wr(t){ei(t instanceof Function,"Expected a class definition");let e=IT.get(t);return e?(ei(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,IT.set(t,e),e)}/**
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
 */class rA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rA.type="NONE";const ST=rA;/**
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
 */function Sh(t,e,n){return`firebase:${t}:${e}:${n}`}class zo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sh(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sh("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Br._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zo(Wr(ST),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Wr(ST);const o=Sh(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=Br._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new zo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new zo(s,e,r))}}/**
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
 */function CT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lA(e))return"Blackberry";if(uA(e))return"Webos";if(lv(e))return"Safari";if((e.includes("chrome/")||sA(e))&&!e.includes("edge/"))return"Chrome";if(aA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iA(t=Vt()){return/firefox\//i.test(t)}function lv(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sA(t=Vt()){return/crios\//i.test(t)}function oA(t=Vt()){return/iemobile/i.test(t)}function aA(t=Vt()){return/android/i.test(t)}function lA(t=Vt()){return/blackberry/i.test(t)}function uA(t=Vt()){return/webos/i.test(t)}function Lf(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vV(t=Vt()){var e;return Lf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wV(){return NM()&&document.documentMode===10}function cA(t=Vt()){return Lf(t)||aA(t)||uA(t)||lA(t)||/windows phone/i.test(t)||oA(t)}function EV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hA(t,e=[]){let n;switch(t){case"Browser":n=CT(Vt());break;case"Worker":n=`${CT(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ts}/${r}`}/**
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
 */class TV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function IV(t,e={}){return ai(t,"GET","/v2/passwordPolicy",ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const SV=6;class CV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:SV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class xV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xT(this),this.idTokenSubscription=new xT(this),this.beforeStateQueue=new TV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Wr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await zo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tA(this,{idToken:e}),r=await Br._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(Gr(this));const n=e?Xe(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(Gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(Gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await IV(this),n=new CV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Wr(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await zo.create(this,[Wr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&tV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ks(t){return Xe(t)}class xT{constructor(e){this.auth=e,this.observer=null,this.addObserver=zM(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AV(t){Mf=t}function dA(t){return Mf.loadJS(t)}function RV(){return Mf.recaptchaEnterpriseScript}function kV(){return Mf.gapiScript}function PV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bV="recaptcha-enterprise",NV="NO_RECAPTCHA";class OV{constructor(e){this.type=bV,this.auth=Ks(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{cV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new uV(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ET(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(NV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ET(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=RV();l.length!==0&&(l+=a),dA(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function AT(t,e,n,r=!1){const i=new OV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function e_(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await AT(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await AT(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function DV(t,e){const n=qu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(gu(s,e??{}))return i;rr(i,"already-initialized")}return n.initialize({options:e})}function LV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MV(t,e,n){const r=Ks(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fA(e),{host:o,port:a}=FV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||VV()}function fA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FV(t){const e=fA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:RT(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:RT(o)}}}function RT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function VV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zr("not implemented")}_getIdTokenResponse(e){return zr("not implemented")}_linkToIdToken(e,n){return zr("not implemented")}_getReauthenticationResolver(e){return zr("not implemented")}}async function UV(t,e){return ai(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jV(t,e){return Gu(t,"POST","/v1/accounts:signInWithPassword",ns(t,e))}/**
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
 */async function $V(t,e){return Gu(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}async function zV(t,e){return Gu(t,"POST","/v1/accounts:signInWithEmailLink",ns(t,e))}/**
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
 */class yu extends uv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return e_(e,n,"signInWithPassword",jV);case"emailLink":return $V(e,{email:this._email,oobCode:this._password});default:rr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return e_(e,r,"signUpPassword",UV);case"emailLink":return zV(e,{idToken:n,email:this._email,oobCode:this._password});default:rr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Bo(t,e){return Gu(t,"POST","/v1/accounts:signInWithIdp",ns(t,e))}/**
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
 */const BV="http://localhost";class Ds extends uv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Dy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ds(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Bo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Bo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Bo(e,n)}buildRequest(){const e={requestUri:BV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Na(n)}return e}}/**
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
 */function WV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qV(t){const e=Il(Sl(t)).link,n=e?Il(Sl(e)).deep_link_id:null,r=Il(Sl(t)).deep_link_id;return(r?Il(Sl(r)).link:null)||r||n||e||t}class cv{constructor(e){var n,r,i,s,o,a;const l=Il(Sl(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=WV((i=l.mode)!==null&&i!==void 0?i:null);se(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qV(e);try{return new cv(n)}catch{return null}}}/**
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
 */class Oa{constructor(){this.providerId=Oa.PROVIDER_ID}static credential(e,n){return yu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cv.parseLink(n);return se(r,"argument-error"),yu._fromEmailAndCode(e,r.code,r.tenantId)}}Oa.PROVIDER_ID="password";Oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class pA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ku extends pA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends Ku{constructor(){super("facebook.com")}static credential(e){return Ds._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class Ti extends Ku{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ds._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ti.credential(n,r)}catch{return null}}}Ti.GOOGLE_SIGN_IN_METHOD="google.com";Ti.PROVIDER_ID="google.com";/**
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
 */class Ii extends Ku{constructor(){super("github.com")}static credential(e){return Ds._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.GITHUB_SIGN_IN_METHOD="github.com";Ii.PROVIDER_ID="github.com";/**
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
 */class Si extends Ku{constructor(){super("twitter.com")}static credential(e,n){return Ds._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Si.credential(n,r)}catch{return null}}}Si.TWITTER_SIGN_IN_METHOD="twitter.com";Si.PROVIDER_ID="twitter.com";/**
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
 */async function HV(t,e){return Gu(t,"POST","/v1/accounts:signUp",ns(t,e))}/**
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
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Br._fromIdTokenResponse(e,r,i),o=kT(r);return new Ls({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kT(r);return new Ls({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xd extends Rr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xd(e,n,r,i)}}function mA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xd._fromErrorAndOperation(t,s,e,r):s})}async function GV(t,e,n=!1){const r=await ua(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ls._forOperation(t,"link",r)}/**
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
 */async function KV(t,e,n=!1){const{auth:r}=t;if(fr(r.app))return Promise.reject(Gr(r));const i="reauthenticate";try{const s=await ua(t,mA(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=av(s.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(t.uid===a,r,"user-mismatch"),Ls._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rr(r,"user-mismatch"),s}}/**
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
 */async function gA(t,e,n=!1){if(fr(t.app))return Promise.reject(Gr(t));const r="signIn",i=await mA(t,r,e),s=await Ls._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function QV(t,e){return gA(Ks(t),e)}/**
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
 */async function _A(t){const e=Ks(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YV(t,e,n){if(fr(t.app))return Promise.reject(Gr(t));const r=Ks(t),o=await e_(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HV).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_A(t),l}),a=await Ls._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function XV(t,e,n){return fr(t.app)?Promise.reject(Gr(t)):QV(Xe(t),Oa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_A(t),r})}/**
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
 */async function JV(t,e){return ai(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ZV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ua(r,JV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function e4(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function t4(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function yA(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function n4(t){return Xe(t).signOut()}const Ad="__sak";/**
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
 */class vA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ad,"1"),this.storage.removeItem(Ad),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function r4(){const t=Vt();return lv(t)||Lf(t)}const i4=1e3,s4=10;class wA extends vA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=r4()&&EV(),this.fallbackToPolling=cA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,s4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},i4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wA.type="LOCAL";const o4=wA;/**
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
 */class EA extends vA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}EA.type="SESSION";const TA=EA;/**
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
 */function a4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ff{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ff(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await a4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ff.receivers=[];/**
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
 */function hv(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class l4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=hv("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yr(){return window}function u4(t){yr().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function IA(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function c4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function d4(){return IA()?self:null}/**
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
 */const SA="firebaseLocalStorageDb",f4=1,Rd="firebaseLocalStorage",CA="fbase_key";class Qu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vf(t,e){return t.transaction([Rd],e?"readwrite":"readonly").objectStore(Rd)}function p4(){const t=indexedDB.deleteDatabase(SA);return new Qu(t).toPromise()}function t_(){const t=indexedDB.open(SA,f4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rd,{keyPath:CA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rd)?e(r):(r.close(),await p4(),e(await t_()))})})}async function PT(t,e,n){const r=Vf(t,!0).put({[CA]:e,value:n});return new Qu(r).toPromise()}async function m4(t,e){const n=Vf(t,!1).get(e),r=await new Qu(n).toPromise();return r===void 0?null:r.value}function bT(t,e){const n=Vf(t,!0).delete(e);return new Qu(n).toPromise()}const g4=800,_4=3;class xA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await t_(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ff._getInstance(d4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await c4(),!this.activeServiceWorker)return;this.sender=new l4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await t_();return await PT(e,Ad,"1"),await bT(e,Ad),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>PT(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>m4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vf(i,!1).getAll();return new Qu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),g4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xA.type="LOCAL";const y4=xA;new Hu(3e4,6e4);/**
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
 */function v4(t,e){return e?Wr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dv extends uv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Bo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Bo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function w4(t){return gA(t.auth,new dv(t),t.bypassAuthState)}function E4(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),KV(n,new dv(t),t.bypassAuthState)}async function T4(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),GV(n,new dv(t),t.bypassAuthState)}/**
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
 */class AA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w4;case"linkViaPopup":case"linkViaRedirect":return T4;case"reauthViaPopup":case"reauthViaRedirect":return E4;default:rr(this.auth,"internal-error")}}resolve(e){ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const I4=new Hu(2e3,1e4);class No extends AA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,No.currentPopupAction&&No.currentPopupAction.cancel(),No.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){ei(this.filter.length===1,"Popup operations only handle one event");const e=hv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,No.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I4.get())};e()}}No.currentPopupAction=null;/**
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
 */const S4="pendingRedirect",Ch=new Map;class C4 extends AA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ch.get(this.auth._key());if(!e){try{const r=await x4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ch.set(this.auth._key(),e)}return this.bypassAuthState||Ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function x4(t,e){const n=k4(e),r=R4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function A4(t,e){Ch.set(t._key(),e)}function R4(t){return Wr(t._redirectPersistence)}function k4(t){return Sh(S4,t.config.apiKey,t.name)}async function P4(t,e,n=!1){if(fr(t.app))return Promise.reject(Gr(t));const r=Ks(t),i=v4(r,e),o=await new C4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const b4=10*60*1e3;class N4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!O4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_r(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=b4&&this.cachedEventUids.clear(),this.cachedEventUids.has(NT(e))}saveEventToCache(e){this.cachedEventUids.add(NT(e)),this.lastProcessedEventTime=Date.now()}}function NT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function O4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RA(t);default:return!1}}/**
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
 */async function D4(t,e={}){return ai(t,"GET","/v1/projects",e)}/**
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
 */const L4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M4=/^https?/;async function F4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await D4(t);for(const n of e)try{if(V4(n))return}catch{}rr(t,"unauthorized-domain")}function V4(t){const e=Jg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M4.test(n))return!1;if(L4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const U4=new Hu(3e4,6e4);function OT(){const t=yr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function j4(t){return new Promise((e,n)=>{var r,i,s;function o(){OT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OT(),n(_r(t,"network-request-failed"))},timeout:U4.get()})}if(!((i=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yr().gapi)===null||s===void 0)&&s.load)o();else{const a=PV("iframefcb");return yr()[a]=()=>{gapi.load?o():n(_r(t,"network-request-failed"))},dA(`${kV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xh=null,e})}let xh=null;function $4(t){return xh=xh||j4(t),xh}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const z4=new Hu(5e3,15e3),B4="__/auth/iframe",W4="emulator/auth/iframe",q4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G4(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ov(e,W4):`https://${t.config.authDomain}/${B4}`,r={apiKey:e.apiKey,appName:t.name,v:ts},i=H4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Na(r).slice(1)}`}async function K4(t){const e=await $4(t),n=yr().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:G4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_r(t,"network-request-failed"),a=yr().setTimeout(()=>{s(o)},z4.get());function l(){yr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Q4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y4=500,X4=600,J4="_blank",Z4="http://localhost";class DT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eU(t,e,n,r=Y4,i=X4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Q4),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Vt().toLowerCase();n&&(a=sA(c)?J4:n),iA(c)&&(e=e||Z4,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[_,v])=>`${p}${_}=${v},`,"");if(vV(c)&&a!=="_self")return tU(e||"",a),new DT(null);const d=window.open(e||"",a,h);se(d,t,"popup-blocked");try{d.focus()}catch{}return new DT(d)}function tU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nU="__/auth/handler",rU="emulator/auth/handler",iU=encodeURIComponent("fac");async function LT(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ts,eventId:i};if(e instanceof pA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Hg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof Ku){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${iU}=${encodeURIComponent(l)}`:"";return`${sU(t)}?${Na(a).slice(1)}${c}`}function sU({config:t}){return t.emulator?ov(t,rU):`https://${t.authDomain}/${nU}`}/**
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
 */const Em="webStorageSupport";class oU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TA,this._completeRedirectFn=P4,this._overrideRedirectResult=A4}async _openPopup(e,n,r,i){var s;ei((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await LT(e,n,r,Jg(),i);return eU(e,o,hv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await LT(e,n,r,Jg(),i);return u4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ei(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await K4(e),r=new N4(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Em,{type:Em},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Em];o!==void 0&&n(!!o),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=F4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cA()||lv()||Lf()}}const aU=oU;var MT="@firebase/auth",FT="1.7.4";/**
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
 */class lU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function cU(t){Hi(new Zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hA(t)},c=new xV(r,i,s,l);return LV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hi(new Zr("auth-internal",e=>{const n=Ks(e.getProvider("auth").getImmediate());return(r=>new lU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(MT,FT,uU(t)),Fn(MT,FT,"esm2017")}/**
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
 */const hU=5*60,dU=Ux("authIdTokenMaxAge")||hU;let VT=null;const fU=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dU)return;const i=n==null?void 0:n.token;VT!==i&&(VT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Da(t=Df()){const e=qu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=DV(t,{popupRedirectResolver:aU,persistence:[y4,o4,TA]}),r=Ux("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=fU(s.toString());t4(n,o,()=>o(n.currentUser)),e4(n,a=>o(a))}}const i=Fx("auth");return i&&MV(n,`http://${i}`),n}function pU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_r("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",pU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});cU("Browser");const UT="@firebase/database",jT="1.0.5";/**
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
 */let kA="";function mU(t){kA=t}/**
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
 */class gU{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:mu(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class _U{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return oi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const PA=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new gU(e)}}catch{}return new _U},vs=PA("localStorage"),n_=PA("sessionStorage");/**
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
 */const Wo=new Of("@firebase/database"),yU=function(){let t=1;return function(){return t++}}(),bA=function(t){const e=qM(t),n=new $M;n.update(e);const r=n.digest();return Zy.encodeByteArray(r)},Yu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Yu.apply(null,r):typeof r=="object"?e+=Rt(r):e+=r,e+=" "}return e};let xs=null,$T=!0;const vU=function(t,e){q(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wo.logLevel=me.VERBOSE,xs=Wo.log.bind(Wo),e&&n_.set("logging_enabled",!0)):typeof t=="function"?xs=t:(xs=null,n_.remove("logging_enabled"))},Kt=function(...t){if($T===!0&&($T=!1,xs===null&&n_.get("logging_enabled")===!0&&vU(!0)),xs){const e=Yu.apply(null,t);xs(e)}},Xu=function(t){return function(...e){Kt(t,...e)}},r_=function(...t){const e="FIREBASE INTERNAL ERROR: "+Yu(...t);Wo.error(e)},ti=function(...t){const e=`FIREBASE FATAL ERROR: ${Yu(...t)}`;throw Wo.error(e),new Error(e)},An=function(...t){const e="FIREBASE WARNING: "+Yu(...t);Wo.warn(e)},wU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NA=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},EU=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ca="[MIN_NAME]",Ms="[MAX_NAME]",La=function(t,e){if(t===e)return 0;if(t===ca||e===Ms)return-1;if(e===ca||t===Ms)return 1;{const n=zT(t),r=zT(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},TU=function(t,e){return t===e?0:t<e?-1:1},hl=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Rt(e))},fv=function(t){if(typeof t!="object"||t===null)return Rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Rt(e[r]),n+=":",n+=fv(t[e[r]]);return n+="}",n},OA=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const DA=function(t){q(!NA(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},IU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},SU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function CU(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const xU=new RegExp("^-?(0*)\\d{1,10}$"),AU=-2147483648,RU=2147483647,zT=function(t){if(xU.test(t)){const e=Number(t);if(e>=AU&&e<=RU)return e}return null},Ju=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw An("Exception was thrown by user callback.",n),e},Math.floor(0))}},kU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},zl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class PU{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class bU{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qo.OWNER="owner";/**
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
 */const pv="5",LA="v",MA="s",FA="r",VA="f",UA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,jA="ls",$A="p",i_="ac",zA="websocket",BA="long_polling";/**
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
 */class WA{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=vs.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&vs.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function NU(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qA(t,e,n){q(typeof e=="string","typeof type must == string"),q(typeof n=="object","typeof params must == object");let r;if(e===zA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===BA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);NU(t)&&(n.ns=t.namespace);const i=[];return yn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class OU{constructor(){this.counters_={}}incrementCounter(e,n=1){oi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return SM(this.counters_)}}/**
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
 */const Tm={},Im={};function mv(t){const e=t.toString();return Tm[e]||(Tm[e]=new OU),Tm[e]}function DU(t,e){const n=t.toString();return Im[n]||(Im[n]=e()),Im[n]}/**
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
 */class LU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ju(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const BT="start",MU="close",FU="pLPCommand",VU="pRTLPCB",HA="id",GA="pw",KA="ser",UU="cb",jU="seg",$U="ts",zU="d",BU="dframe",QA=1870,YA=30,WU=QA-YA,qU=25e3,HU=3e4;class Oo{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xu(e),this.stats_=mv(n),this.urlFn=l=>(this.appCheckToken&&(l[i_]=this.appCheckToken),qA(n,BA,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HU)),EU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gv((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===BT)this.id=a,this.password=l;else if(o===MU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[BT]="t",r[KA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[UU]=this.scriptTagHolder.uniqueCallbackIdentifier),r[LA]=pv,this.transportSessionId&&(r[MA]=this.transportSessionId),this.lastSessionId&&(r[jA]=this.lastSessionId),this.applicationId&&(r[$A]=this.applicationId),this.appCheckToken&&(r[i_]=this.appCheckToken),typeof location<"u"&&location.hostname&&UA.test(location.hostname)&&(r[FA]=VA);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Oo.forceAllow_=!0}static forceDisallow(){Oo.forceDisallow_=!0}static isAvailable(){return Oo.forceAllow_?!0:!Oo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!IU()&&!SU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Lx(n),i=OA(r,WU);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[BU]="t",r[HA]=e,r[GA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yU(),window[FU+this.uniqueCallbackIdentifier]=e,window[VU+this.uniqueCallbackIdentifier]=n,this.myIFrame=gv.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Kt("frame writing exception"),a.stack&&Kt(a.stack),Kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[HA]=this.myID,e[GA]=this.myPW,e[KA]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+YA+r.length<=QA;){const o=this.pendingSegs.shift();r=r+"&"+jU+i+"="+o.seg+"&"+$U+i+"="+o.ts+"&"+zU+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(qU)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const GU=16384,KU=45e3;let kd=null;typeof MozWebSocket<"u"?kd=MozWebSocket:typeof WebSocket<"u"&&(kd=WebSocket);class Kn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xu(this.connId),this.stats_=mv(n),this.connURL=Kn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[LA]=pv,typeof location<"u"&&location.hostname&&UA.test(location.hostname)&&(o[FA]=VA),n&&(o[MA]=n),r&&(o[jA]=r),i&&(o[i_]=i),s&&(o[$A]=s),qA(e,zA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,vs.set("previous_websocket_failure",!0);try{let r;$x(),this.mySock=new kd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&kd!==null&&!Kn.forceDisallow_}static previouslyFailed(){return vs.isInMemoryStorage||vs.get("previous_websocket_failure")===!0}markConnectionHealthy(){vs.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=mu(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(q(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OA(n,GU);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
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
 */class vu{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Oo,Kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kn&&Kn.isAvailable();let r=n&&!Kn.previouslyFailed();if(e.webSocketOnly&&(n||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kn];else{const i=this.transports_=[];for(const s of vu.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);vu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}vu.globalTransportInitialized_=!1;/**
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
 */const QU=6e4,YU=5e3,XU=10*1024,JU=100*1024,Sm="t",WT="d",ZU="s",qT="r",ej="e",HT="o",GT="a",KT="n",QT="p",tj="h";class nj{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xu("c:"+this.id+":"),this.transportManager_=new vu(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=zl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>JU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>XU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sm in e){const n=e[Sm];n===GT?this.upgradeIfSecondaryHealthy_():n===qT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===HT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=hl("t",e),r=hl("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:QT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:GT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:KT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=hl("t",e),r=hl("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=hl(Sm,e);if(WT in e){const r=e[WT];if(n===tj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===KT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ZU?this.onConnectionShutdown_(r):n===qT?this.onReset_(r):n===ej?r_("Server Error: "+r):n===HT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):r_("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pv!==r&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),zl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(QU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):zl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:QT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(vs.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class XA{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class JA{constructor(e){this.allowedEvents_=e,this.listeners_={},q(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){q(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Pd extends JA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pd}getInitialEvent(e){return q(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const YT=32,XT=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new De("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gi(t){return t.pieces_.length-t.pieceNum_}function Fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function ZA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rj(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function eR(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function _t(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof De)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new De(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function fn(t,e){const n=fe(t),r=fe(e);if(n===null)return e;if(n===r)return fn(Fe(t),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _v(t,e){if(Gi(t)!==Gi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Gi(t)>Gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ij{constructor(e,n){this.errorPrefix_=n,this.parts_=eR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nf(this.parts_[r]);nR(this)}}function sj(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nf(e),nR(t)}function oj(t){const e=t.parts_.pop();t.byteLength_-=Nf(e),t.parts_.length>0&&(t.byteLength_-=1)}function nR(t){if(t.byteLength_>XT)throw new Error(t.errorPrefix_+"has a key path longer than "+XT+" bytes ("+t.byteLength_+").");if(t.parts_.length>YT)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+YT+") or object contains a cycle "+ds(t))}function ds(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yv extends JA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yv}getInitialEvent(e){return q(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const dl=1e3,aj=60*5*1e3,JT=30*1e3,lj=1.3,uj=3e4,cj="server_kill",ZT=3;class Kr extends XA{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Kr.nextPersistentConnectionId_++,this.log_=Xu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=dl,this.maxReconnectDelay_=aj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$x())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Rt(s)),q(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new tv,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),q(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Kr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&oi(e,"w")){const r=la(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jM(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=JT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=UM(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),q(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):r_("Unrecognized action received from server: "+Rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){q(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=dl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=dl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uj&&(this.reconnectDelay_=dl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Kr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){q(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new nj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{An(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(cj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&An(d),l())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Hg(this.interruptReasons_)&&(this.reconnectDelay_=dl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>fv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new De(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ZT&&(this.reconnectDelay_=JT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ZT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kA.replace(/\./g,"-")]=1,rv()?e["framework.cordova"]=1:jx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pd.getInstance().currentlyOnline();return Hg(this.interruptReasons_)&&e}}Kr.nextPersistentConnectionId_=0;Kr.nextConnectionId_=0;/**
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
 */class he{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new he(e,n)}}/**
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
 */class Uf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new he(ca,e),i=new he(ca,n);return this.compare(r,i)!==0}minPost(){return he.MIN}}/**
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
 */let Kc;class rR extends Uf{static get __EMPTY_NODE(){return Kc}static set __EMPTY_NODE(e){Kc=e}compare(e,n){return La(e.name,n.name)}isDefinedOn(e){throw ba("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Ms,Kc)}makePost(e,n){return q(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,Kc)}toString(){return".key"}}const Ho=new rR;/**
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
 */let Qc=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},In=class Cl{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Cl.RED,this.left=i??pr.EMPTY_NODE,this.right=s??pr.EMPTY_NODE}copy(e,n,r,i,s){return new Cl(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pr.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Cl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Cl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};In.RED=!0;In.BLACK=!1;class hj{copy(e,n,r,i,s){return this}insert(e,n,r){return new In(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let pr=class Ah{constructor(e,n=Ah.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ah(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,In.BLACK,null,null))}remove(e){return new Ah(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,In.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qc(this.root_,null,this.comparator_,!0,e)}};pr.EMPTY_NODE=new hj;/**
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
 */function dj(t,e){return La(t.name,e.name)}function vv(t,e){return La(t,e)}/**
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
 */let s_;function fj(t){s_=t}const iR=function(t){return typeof t=="number"?"number:"+DA(t):"string:"+t},sR=function(t){if(t.isLeafNode()){const e=t.val();q(typeof e=="string"||typeof e=="number"||typeof e=="object"&&oi(e,".sv"),"Priority must be a string or number.")}else q(t===s_||t.isEmpty(),"priority of unexpected type.");q(t===s_||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let e1;class It{constructor(e,n=It.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,q(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sR(this.priorityNode_)}static set __childrenNodeConstructor(e){e1=e}static get __childrenNodeConstructor(){return e1}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new It(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:fe(e)===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:It.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=fe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(q(r!==".priority"||Gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,It.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iR(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=DA(this.value_):e+=this.value_,this.lazyHash_=bA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===It.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof It.__childrenNodeConstructor?-1:(q(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=It.VALUE_TYPE_ORDER.indexOf(n),s=It.VALUE_TYPE_ORDER.indexOf(r);return q(i>=0,"Unknown leaf type: "+n),q(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}It.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let oR,aR;function pj(t){oR=t}function mj(t){aR=t}class gj extends Uf{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?La(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Ms,new It("[PRIORITY-POST]",aR))}makePost(e,n){const r=oR(e);return new he(n,new It("[PRIORITY-POST]",r))}toString(){return".priority"}}const rt=new gj;/**
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
 */const _j=Math.log(2);class yj{constructor(e){const n=s=>parseInt(Math.log(s)/_j,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bd=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let d,p;if(h===0)return null;if(h===1)return d=t[l],p=n?n(d):d,new In(p,d.node,In.BLACK,null,null);{const _=parseInt(h/2,10)+l,v=i(l,_),I=i(_+1,c);return d=t[_],p=n?n(d):d,new In(p,d.node,In.BLACK,v,I)}},s=function(l){let c=null,h=null,d=t.length;const p=function(v,I){const R=d-v,T=d;d-=v;const g=i(R+1,T),S=t[R],O=n?n(S):S;_(new In(O,S.node,I,null,g))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<l.count;++v){const I=l.nextBitIsOne(),R=Math.pow(2,l.count-(v+1));I?p(R,In.BLACK):(p(R,In.BLACK),p(R,In.RED))}return h},o=new yj(t.length),a=s(o);return new pr(r||e,a)};/**
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
 */let Cm;const fo={};class qr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return q(fo&&rt,"ChildrenNode.ts has not been loaded"),Cm=Cm||new qr({".priority":fo},{".priority":rt}),Cm}get(e){const n=la(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pr?n:null}hasIndex(e){return oi(this.indexSet_,e.toString())}addIndex(e,n){q(e!==Ho,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(he.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=bd(r,e.getCompare()):a=fo;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new qr(h,c)}addToIndexes(e,n){const r=Td(this.indexes_,(i,s)=>{const o=la(this.indexSet_,s);if(q(o,"Missing index implementation for "+s),i===fo)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bd(a,o.getCompare())}else return fo;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new qr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Td(this.indexes_,i=>{if(i===fo)return i;{const s=n.get(e.name);return s?i.remove(new he(e.name,s)):i}});return new qr(r,this.indexSet_)}}/**
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
 */let fl;class oe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sR(this.priorityNode_),this.children_.isEmpty()&&q(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return fl||(fl=new oe(new pr(vv),null,qr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fl}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fl:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(q(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new he(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?fl:this.priorityNode_;return new oe(i,o,s)}}updateChild(e,n){const r=fe(e);if(r===null)return n;{q(fe(e)!==".priority"||Gi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Fe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(rt,(o,a)=>{n[o]=a.val(e),r++,s&&oe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iR(this.getPriority().val())+":"),this.forEachChild(rt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bA(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new he(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zu?-1:0}withIndex(e){if(e===Ho||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ho||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(rt),i=n.getIterator(rt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ho?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class vj extends oe{constructor(){super(new pr(vv),oe.EMPTY_NODE,qr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const Zu=new vj;Object.defineProperties(he,{MIN:{value:new he(ca,oe.EMPTY_NODE)},MAX:{value:new he(Ms,Zu)}});rR.__EMPTY_NODE=oe.EMPTY_NODE;It.__childrenNodeConstructor=oe;fj(Zu);mj(Zu);/**
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
 */const wj=!0;function Qt(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),q(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new It(n,Qt(e))}if(!(t instanceof Array)&&wj){const n=[];let r=!1;if(yn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Qt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return oe.EMPTY_NODE;const s=bd(n,dj,o=>o.name,vv);if(r){const o=bd(n,rt.getCompare());return new oe(s,Qt(e),new qr({".priority":o},{".priority":rt}))}else return new oe(s,Qt(e),qr.Default)}else{let n=oe.EMPTY_NODE;return yn(t,(r,i)=>{if(oi(t,r)&&r.substring(0,1)!=="."){const s=Qt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Qt(e))}}pj(Qt);/**
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
 */class Ej extends Uf{constructor(e){super(),this.indexPath_=e,q(!pe(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?La(e.name,n.name):s}makePost(e,n){const r=Qt(e),i=oe.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(n,i)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,Zu);return new he(Ms,e)}toString(){return eR(this.indexPath_,0).join("/")}}/**
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
 */class Tj extends Uf{compare(e,n){const r=e.node.compareTo(n.node);return r===0?La(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const r=Qt(e);return new he(n,r)}toString(){return".value"}}const Ij=new Tj;/**
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
 */function lR(t){return{type:"value",snapshotNode:t}}function ha(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function wu(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Eu(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class wv{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){q(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(wu(n,a)):q(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ha(n,r)):o.trackChildChange(Eu(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(rt,(i,s)=>{n.hasChild(i)||r.trackChildChange(wu(i,s))}),n.isLeafNode()||n.forEachChild(rt,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Eu(i,s,o))}else r.trackChildChange(ha(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Tu{constructor(e){this.indexedFilter_=new wv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Tu.getStartPost_(e),this.endPost_=Tu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new he(n,r))||(r=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=oe.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(oe.EMPTY_NODE);const s=this;return n.forEachChild(rt,(o,a)=>{s.matches(new he(o,a))||(i=i.updateImmediateChild(o,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Cj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Tu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new he(n,r))||(r=oe.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=oe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(oe.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,_)=>d(_,p)}else o=this.index_.getCompare();const a=e;q(a.numChildren()===this.limit_,"");const l=new he(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,l);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(Eu(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(wu(n,d));const I=a.updateImmediateChild(n,oe.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(ha(p.name,p.node)),I.updateImmediateChild(p.name,p.node)):I}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(wu(c.name,c.node)),s.trackChildChange(ha(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,oe.EMPTY_NODE)):e}}/**
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
 */class Ev{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return q(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return q(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ca}hasEnd(){return this.endSet_}getIndexEndValue(){return q(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return q(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ms}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return q(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rt}copy(){const e=new Ev;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xj(t){return t.loadsAllData()?new wv(t.getIndex()):t.hasLimit()?new Cj(t):new Tu(t)}function t1(t){const e={};if(t.isDefault())return e;let n;if(t.index_===rt?n="$priority":t.index_===Ij?n="$value":t.index_===Ho?n="$key":(q(t.index_ instanceof Ej,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function n1(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==rt&&(e.i=t.index_.toString()),e}/**
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
 */class Nd extends XA{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Xu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(q(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nd.getListenId_(e,r),a={};this.listens_[o]=a;const l=t1(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),la(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Nd.getListenId_(e,n);delete this.listens_[r]}get(e){const n=t1(e._queryParams),r=e._path.toString(),i=new tv;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Na(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=mu(a.responseText)}catch{An("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&An("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Aj{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Od(){return{value:null,children:new Map}}function uR(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=fe(e);t.children.has(r)||t.children.set(r,Od());const i=t.children.get(r);e=Fe(e),uR(i,e,n)}}function o_(t,e,n){t.value!==null?n(e,t.value):Rj(t,(r,i)=>{const s=new De(e.toString()+"/"+r);o_(i,s,n)})}function Rj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class kj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const r1=10*1e3,Pj=30*1e3,bj=5*60*1e3;class Nj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kj(e);const r=r1+(Pj-r1)*Math.random();zl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yn(e,(i,s)=>{s>0&&oi(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),zl(this.reportStats_.bind(this),Math.floor(Math.random()*2*bj))}}/**
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
 */var Yn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Yn||(Yn={}));function cR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Tv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Iv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Dd{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yn.ACK_USER_WRITE,this.source=cR()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return q(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new Dd(Ae(),n,this.revert)}}else return q(fe(this.path)===e,"operationForChild called for unrelated child."),new Dd(Fe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Iu{constructor(e,n){this.source=e,this.path=n,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return pe(this.path)?new Iu(this.source,Ae()):new Iu(this.source,Fe(this.path))}}/**
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
 */class Fs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yn.OVERWRITE}operationForChild(e){return pe(this.path)?new Fs(this.source,Ae(),this.snap.getImmediateChild(e)):new Fs(this.source,Fe(this.path),this.snap)}}/**
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
 */class Su{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yn.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new Fs(this.source,Ae(),n.value):new Su(this.source,Ae(),n)}else return q(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Su(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Vs{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Oj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Dj(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Sj(o.childName,o.snapshotNode))}),pl(t,i,"child_removed",e,r,n),pl(t,i,"child_added",e,r,n),pl(t,i,"child_moved",s,r,n),pl(t,i,"child_changed",e,r,n),pl(t,i,"value",e,r,n),i}function pl(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Mj(t,a,l)),o.forEach(a=>{const l=Lj(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Lj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Mj(t,e,n){if(e.childName==null||n.childName==null)throw ba("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function jf(t,e){return{eventCache:t,serverCache:e}}function Bl(t,e,n,r){return jf(new Vs(e,n,r),t.serverCache)}function hR(t,e,n,r){return jf(t.eventCache,new Vs(e,n,r))}function a_(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Us(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let xm;const Fj=()=>(xm||(xm=new pr(TU)),xm);class We{constructor(e,n=Fj()){this.value=e,this.children=n}static fromObject(e){let n=new We(null);return yn(e,(r,i)=>{n=n.set(new De(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(pe(e))return null;{const r=fe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Fe(e),n);return s!=null?{path:_t(new De(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=fe(e),r=this.children.get(n);return r!==null?r.subtree(Fe(e)):new We(null)}}set(e,n){if(pe(e))return new We(n,this.children);{const r=fe(e),s=(this.children.get(r)||new We(null)).set(Fe(e),n),o=this.children.insert(r,s);return new We(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new We(null):new We(null,this.children);{const n=fe(e),r=this.children.get(n);if(r){const i=r.remove(Fe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new We(null):new We(this.value,s)}else return this}}get(e){if(pe(e))return this.value;{const n=fe(e),r=this.children.get(n);return r?r.get(Fe(e)):null}}setTree(e,n){if(pe(e))return n;{const r=fe(e),s=(this.children.get(r)||new We(null)).setTree(Fe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new We(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(_t(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(pe(e))return null;{const s=fe(e),o=this.children.get(s);return o?o.findOnPath_(Fe(e),_t(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,r){if(pe(e))return this;{this.value&&r(n,this.value);const i=fe(e),s=this.children.get(i);return s?s.foreachOnPath_(Fe(e),_t(n,i),r):new We(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(_t(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class tr{constructor(e){this.writeTree_=e}static empty(){return new tr(new We(null))}}function Wl(t,e,n){if(pe(e))return new tr(new We(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=fn(i,e);return s=s.updateChild(o,n),new tr(t.writeTree_.set(i,s))}else{const i=new We(n),s=t.writeTree_.setTree(e,i);return new tr(s)}}}function i1(t,e,n){let r=t;return yn(n,(i,s)=>{r=Wl(r,_t(e,i),s)}),r}function s1(t,e){if(pe(e))return tr.empty();{const n=t.writeTree_.setTree(e,new We(null));return new tr(n)}}function l_(t,e){return Qs(t,e)!=null}function Qs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(fn(n.path,e)):null}function o1(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(rt,(r,i)=>{e.push(new he(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new he(r,i.value))}),e}function zi(t,e){if(pe(e))return t;{const n=Qs(t,e);return n!=null?new tr(new We(n)):new tr(t.writeTree_.subtree(e))}}function u_(t){return t.writeTree_.isEmpty()}function da(t,e){return dR(Ae(),t.writeTree_,e)}function dR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(q(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=dR(_t(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(_t(t,".priority"),r)),n}}/**
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
 */function Sv(t,e){return gR(e,t)}function Vj(t,e,n,r,i){q(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Wl(t.visibleWrites,e,n)),t.lastWriteId=r}function Uj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function jj(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);q(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$j(a,r.path)?i=!1:Qn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return zj(t),!0;if(r.snap)t.visibleWrites=s1(t.visibleWrites,r.path);else{const a=r.children;yn(a,l=>{t.visibleWrites=s1(t.visibleWrites,_t(r.path,l))})}return!0}else return!1}function $j(t,e){if(t.snap)return Qn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qn(_t(t.path,n),e))return!0;return!1}function zj(t){t.visibleWrites=fR(t.allWrites,Bj,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Bj(t){return t.visible}function fR(t,e,n){let r=tr.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Qn(n,o)?(a=fn(n,o),r=Wl(r,a,s.snap)):Qn(o,n)&&(a=fn(o,n),r=Wl(r,Ae(),s.snap.getChild(a)));else if(s.children){if(Qn(n,o))a=fn(n,o),r=i1(r,a,s.children);else if(Qn(o,n))if(a=fn(o,n),pe(a))r=i1(r,Ae(),s.children);else{const l=la(s.children,fe(a));if(l){const c=l.getChild(Fe(a));r=Wl(r,Ae(),c)}}}else throw ba("WriteRecord should have .snap or .children")}}return r}function pR(t,e,n,r,i){if(!r&&!i){const s=Qs(t.visibleWrites,e);if(s!=null)return s;{const o=zi(t.visibleWrites,e);if(u_(o))return n;if(n==null&&!l_(o,Ae()))return null;{const a=n||oe.EMPTY_NODE;return da(o,a)}}}else{const s=zi(t.visibleWrites,e);if(!i&&u_(s))return n;if(!i&&n==null&&!l_(s,Ae()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Qn(c.path,e)||Qn(e,c.path))},a=fR(t.allWrites,o,e),l=n||oe.EMPTY_NODE;return da(a,l)}}}function Wj(t,e,n){let r=oe.EMPTY_NODE;const i=Qs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(rt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=zi(t.visibleWrites,e);return n.forEachChild(rt,(o,a)=>{const l=da(zi(s,new De(o)),a);r=r.updateImmediateChild(o,l)}),o1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=zi(t.visibleWrites,e);return o1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qj(t,e,n,r,i){q(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(e,n);if(l_(t.visibleWrites,s))return null;{const o=zi(t.visibleWrites,s);return u_(o)?i.getChild(n):da(o,i.getChild(n))}}function Hj(t,e,n,r){const i=_t(e,n),s=Qs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=zi(t.visibleWrites,i);return da(o,r.getNode().getImmediateChild(n))}else return null}function Gj(t,e){return Qs(t.visibleWrites,e)}function Kj(t,e,n,r,i,s,o){let a;const l=zi(t.visibleWrites,e),c=Qs(l,Ae());if(c!=null)a=c;else if(n!=null)a=da(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)d(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function Qj(){return{visibleWrites:tr.empty(),allWrites:[],lastWriteId:-1}}function Ld(t,e,n,r){return pR(t.writeTree,t.treePath,e,n,r)}function Cv(t,e){return Wj(t.writeTree,t.treePath,e)}function a1(t,e,n,r){return qj(t.writeTree,t.treePath,e,n,r)}function Md(t,e){return Gj(t.writeTree,_t(t.treePath,e))}function Yj(t,e,n,r,i,s){return Kj(t.writeTree,t.treePath,e,n,r,i,s)}function xv(t,e,n){return Hj(t.writeTree,t.treePath,e,n)}function mR(t,e){return gR(_t(t.treePath,e),t.writeTree)}function gR(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Xj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;q(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),q(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Eu(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,wu(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ha(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Eu(r,e.snapshotNode,i.oldSnap));else throw ba("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Jj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const _R=new Jj;class Av{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Vs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Us(this.viewCache_),s=Yj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Zj(t){return{filter:t}}function e3(t,e){q(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),q(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function t3(t,e,n,r,i){const s=new Xj;let o,a;if(n.type===Yn.OVERWRITE){const c=n;c.source.fromUser?o=c_(t,e,c.path,c.snap,r,i,s):(q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Fd(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Yn.MERGE){const c=n;c.source.fromUser?o=r3(t,e,c.path,c.children,r,i,s):(q(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=h_(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Yn.ACK_USER_WRITE){const c=n;c.revert?o=o3(t,e,c.path,r,i,s):o=i3(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Yn.LISTEN_COMPLETE)o=s3(t,e,n.path,r,s);else throw ba("Unknown operation type: "+n.type);const l=s.getChanges();return n3(e,o,l),{viewCache:o,changes:l}}function n3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=a_(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(lR(a_(e)))}}function yR(t,e,n,r,i,s){const o=e.eventCache;if(Md(r,n)!=null)return e;{let a,l;if(pe(n))if(q(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Us(e),h=c instanceof oe?c:oe.EMPTY_NODE,d=Cv(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ld(r,Us(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=fe(n);if(c===".priority"){q(Gi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=a1(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=Fe(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const p=a1(r,n,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(c).updateChild(h,p):d=o.getNode().getImmediateChild(c)}else d=xv(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,h,i,s):a=o.getNode()}}return Bl(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function Fd(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),_,null)}else{const _=fe(n);if(!l.isCompleteForPath(n)&&Gi(n)>1)return e;const v=Fe(n),R=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(l.getNode(),R):c=h.updateChild(l.getNode(),_,R,v,_R,null)}const d=hR(e,c,l.isFullyInitialized()||pe(n),h.filtersNodes()),p=new Av(i,d,s);return yR(t,d,n,i,p,a)}function c_(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new Av(i,e,s);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Bl(e,c,!0,t.filter.filtersNodes());else{const d=fe(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Bl(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Fe(n),_=a.getNode().getImmediateChild(d);let v;if(pe(p))v=r;else{const I=h.getCompleteChild(d);I!=null?ZA(p)===".priority"&&I.getChild(tR(p)).isEmpty()?v=I:v=I.updateChild(p,r):v=oe.EMPTY_NODE}if(_.equals(v))l=e;else{const I=t.filter.updateChild(a.getNode(),d,v,p,h,o);l=Bl(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function l1(t,e){return t.eventCache.isCompleteForChild(e)}function r3(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=_t(n,l);l1(e,fe(h))&&(a=c_(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=_t(n,l);l1(e,fe(h))||(a=c_(t,a,h,c,i,s,o))}),a}function u1(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function h_(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=r:c=new We(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=u1(t,_,p);l=Fd(t,l,new De(d),v,i,s,o,a)}}),c.children.inorderTraversal((d,p)=>{const _=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),I=u1(t,v,p);l=Fd(t,l,new De(d),I,i,s,o,a)}}),l}function i3(t,e,n,r,i,s,o){if(Md(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fd(t,e,n,l.getNode().getChild(n),i,s,a,o);if(pe(n)){let c=new We(null);return l.getNode().forEachChild(Ho,(h,d)=>{c=c.set(new De(h),d)}),h_(t,e,n,c,i,s,a,o)}else return e}else{let c=new We(null);return r.foreach((h,d)=>{const p=_t(n,h);l.isCompleteForPath(p)&&(c=c.set(h,l.getNode().getChild(p)))}),h_(t,e,n,c,i,s,a,o)}}function s3(t,e,n,r,i){const s=e.serverCache,o=hR(e,s.getNode(),s.isFullyInitialized()||pe(n),s.isFiltered());return yR(t,o,n,r,_R,i)}function o3(t,e,n,r,i,s){let o;if(Md(r,n)!=null)return e;{const a=new Av(r,e,i),l=e.eventCache.getNode();let c;if(pe(n)||fe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ld(r,Us(e));else{const d=e.serverCache.getNode();q(d instanceof oe,"serverChildren would be complete if leaf node"),h=Cv(r,d)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=fe(n);let d=xv(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=t.filter.updateChild(l,h,d,Fe(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,oe.EMPTY_NODE,Fe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ld(r,Us(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Md(r,Ae())!=null,Bl(e,c,o,t.filter.filtersNodes())}}/**
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
 */class a3{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wv(r.getIndex()),s=xj(r);this.processor_=Zj(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(oe.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(oe.EMPTY_NODE,a.getNode(),null),h=new Vs(l,o.isFullyInitialized(),i.filtersNodes()),d=new Vs(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=jf(d,h),this.eventGenerator_=new Oj(this.query_)}get query(){return this.query_}}function l3(t){return t.viewCache_.serverCache.getNode()}function u3(t,e){const n=Us(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function c1(t){return t.eventRegistrations_.length===0}function c3(t,e){t.eventRegistrations_.push(e)}function h1(t,e,n){const r=[];if(n){q(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function d1(t,e,n,r){e.type===Yn.MERGE&&e.source.queryId!==null&&(q(Us(t.viewCache_),"We should always have a full cache before handling merges"),q(a_(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=t3(t.processor_,i,e,n,r);return e3(t.processor_,s.viewCache),q(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,vR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function h3(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(rt,(s,o)=>{r.push(ha(s,o))}),n.isFullyInitialized()&&r.push(lR(n.getNode())),vR(t,r,n.getNode(),e)}function vR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Dj(t.eventGenerator_,e,n,i)}/**
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
 */let Vd;class d3{constructor(){this.views=new Map}}function f3(t){q(!Vd,"__referenceConstructor has already been defined"),Vd=t}function p3(){return q(Vd,"Reference.ts has not been loaded"),Vd}function m3(t){return t.views.size===0}function Rv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return q(s!=null,"SyncTree gave us an op for an invalid query."),d1(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(d1(o,e,n,r));return s}}function g3(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ld(n,i?r:null),l=!1;a?l=!0:r instanceof oe?(a=Cv(n,r),l=!1):(a=oe.EMPTY_NODE,l=!1);const c=jf(new Vs(a,l,!1),new Vs(r,i,!1));return new a3(e,c)}return o}function _3(t,e,n,r,i,s){const o=g3(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),c3(o,n),h3(o,n)}function y3(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ki(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(h1(c,n,r)),c1(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(h1(l,n,r)),c1(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ki(t)&&s.push(new(p3())(e._repo,e._path)),{removed:s,events:o}}function wR(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Go(t,e){let n=null;for(const r of t.views.values())n=n||u3(r,e);return n}function ER(t,e){if(e._queryParams.loadsAllData())return $f(t);{const r=e._queryIdentifier;return t.views.get(r)}}function TR(t,e){return ER(t,e)!=null}function Ki(t){return $f(t)!=null}function $f(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ud;function v3(t){q(!Ud,"__referenceConstructor has already been defined"),Ud=t}function w3(){return q(Ud,"Reference.ts has not been loaded"),Ud}let E3=1;class f1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new We(null),this.pendingWriteTree_=Qj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function T3(t,e,n,r,i){return Vj(t.pendingWriteTree_,e,n,r,i),i?ec(t,new Fs(cR(),e,n)):[]}function Do(t,e,n=!1){const r=Uj(t.pendingWriteTree_,e);if(jj(t.pendingWriteTree_,e)){let s=new We(null);return r.snap!=null?s=s.set(Ae(),!0):yn(r.children,o=>{s=s.set(new De(o),!0)}),ec(t,new Dd(r.path,s,n))}else return[]}function zf(t,e,n){return ec(t,new Fs(Tv(),e,n))}function I3(t,e,n){const r=We.fromObject(n);return ec(t,new Su(Tv(),e,r))}function S3(t,e){return ec(t,new Iu(Tv(),e))}function C3(t,e,n){const r=kv(t,n);if(r){const i=Pv(r),s=i.path,o=i.queryId,a=fn(s,e),l=new Iu(Iv(o),a);return bv(t,s,l)}else return[]}function d_(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||TR(o,e))){const l=y3(o,e,n,r);m3(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(p,_)=>Ki(_));if(h&&!d){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=R3(p);for(let v=0;v<_.length;++v){const I=_[v],R=I.query,T=xR(t,I);t.listenProvider_.startListening(ql(R),jd(t,R),T.hashFn,T.onComplete)}}}!d&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(ql(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(Bf(p));t.listenProvider_.stopListening(ql(p),_)}))}k3(t,c)}return a}function x3(t,e,n,r){const i=kv(t,r);if(i!=null){const s=Pv(i),o=s.path,a=s.queryId,l=fn(o,e),c=new Fs(Iv(a),l,n);return bv(t,o,c)}else return[]}function A3(t,e,n,r){const i=kv(t,r);if(i){const s=Pv(i),o=s.path,a=s.queryId,l=fn(o,e),c=We.fromObject(n),h=new Su(Iv(a),l,c);return bv(t,o,h)}else return[]}function p1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const v=fn(p,i);s=s||Go(_,v),o=o||Ki(_)});let a=t.syncPointTree_.get(i);a?(o=o||Ki(a),s=s||Go(a,Ae())):(a=new d3,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=oe.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const I=Go(v,Ae());I&&(s=s.updateImmediateChild(_,I))}));const c=TR(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Bf(e);q(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=P3();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=Sv(t.pendingWriteTree_,i);let d=_3(a,e,n,h,s,l);if(!c&&!o&&!r){const p=ER(a,e);d=d.concat(b3(t,e,p))}return d}function IR(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=fn(o,e),c=Go(a,l);if(c)return c});return pR(i,e,s,n,!0)}function ec(t,e){return SR(e,t.syncPointTree_,null,Sv(t.pendingWriteTree_,Ae()))}function SR(t,e,n,r){if(pe(t.path))return CR(t,e,n,r);{const i=e.get(Ae());n==null&&i!=null&&(n=Go(i,Ae()));let s=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=mR(r,o);s=s.concat(SR(a,l,c,h))}return i&&(s=s.concat(Rv(i,t,r,n))),s}}function CR(t,e,n,r){const i=e.get(Ae());n==null&&i!=null&&(n=Go(i,Ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=mR(r,o),h=t.operationForChild(o);h&&(s=s.concat(CR(h,a,l,c)))}),i&&(s=s.concat(Rv(i,t,r,n))),s}function xR(t,e){const n=e.query,r=jd(t,n);return{hashFn:()=>(l3(e)||oe.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?C3(t,n._path,r):S3(t,n._path);{const s=CU(i,n);return d_(t,n,null,s)}}}}function jd(t,e){const n=Bf(e);return t.queryToTagMap.get(n)}function Bf(t){return t._path.toString()+"$"+t._queryIdentifier}function kv(t,e){return t.tagToQueryMap.get(e)}function Pv(t){const e=t.indexOf("$");return q(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function bv(t,e,n){const r=t.syncPointTree_.get(e);q(r,"Missing sync point for query tag that we're tracking");const i=Sv(t.pendingWriteTree_,e);return Rv(r,n,i,null)}function R3(t){return t.fold((e,n,r)=>{if(n&&Ki(n))return[$f(n)];{let i=[];return n&&(i=wR(n)),yn(r,(s,o)=>{i=i.concat(o)}),i}})}function ql(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(w3())(t._repo,t._path):t}function k3(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Bf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function P3(){return E3++}function b3(t,e,n){const r=e._path,i=jd(t,e),s=xR(t,n),o=t.listenProvider_.startListening(ql(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)q(!Ki(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!pe(c)&&h&&Ki(h))return[$f(h).query];{let p=[];return h&&(p=p.concat(wR(h).map(_=>_.query))),yn(d,(_,v)=>{p=p.concat(v)}),p}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(ql(h),jd(t,h))}}return o}/**
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
 */class Nv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nv(n)}node(){return this.node_}}class Ov{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_t(this.path_,e);return new Ov(this.syncTree_,n)}node(){return IR(this.syncTree_,this.path_)}}const N3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},m1=function(t,e,n){if(!t||typeof t!="object")return t;if(q(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return O3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return D3(t[".sv"],e);q(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},O3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:q(!1,"Unexpected server value: "+t)}},D3=function(t,e,n){t.hasOwnProperty("increment")||q(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&q(!1,"Unexpected increment value: "+r);const i=e.node();if(q(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},L3=function(t,e,n,r){return Dv(e,new Ov(n,t),r)},M3=function(t,e,n){return Dv(t,new Nv(e),n)};function Dv(t,e,n){const r=t.getPriority().val(),i=m1(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=m1(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new It(a,Qt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new It(i))),o.forEachChild(rt,(a,l)=>{const c=Dv(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Lv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Mv(t,e){let n=e instanceof De?e:new De(e),r=t,i=fe(n);for(;i!==null;){const s=la(r.node.children,i)||{children:{},childCount:0};r=new Lv(i,r,s),n=Fe(n),i=fe(n)}return r}function Ma(t){return t.node.value}function AR(t,e){t.node.value=e,f_(t)}function RR(t){return t.node.childCount>0}function F3(t){return Ma(t)===void 0&&!RR(t)}function Wf(t,e){yn(t.node.children,(n,r)=>{e(new Lv(n,t,r))})}function kR(t,e,n,r){n&&!r&&e(t),Wf(t,i=>{kR(i,e,!0,r)}),n&&r&&e(t)}function V3(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function tc(t){return new De(t.parent===null?t.name:tc(t.parent)+"/"+t.name)}function f_(t){t.parent!==null&&U3(t.parent,t.name,t)}function U3(t,e,n){const r=F3(n),i=oi(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,f_(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,f_(t))}/**
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
 */const j3=/[\[\].#$\/\u0000-\u001F\u007F]/,$3=/[\[\].#$\u0000-\u001F\u007F]/,Am=10*1024*1024,PR=function(t){return typeof t=="string"&&t.length!==0&&!j3.test(t)},bR=function(t){return typeof t=="string"&&t.length!==0&&!$3.test(t)},z3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bR(t)},NR=function(t,e,n){const r=n instanceof De?new ij(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ds(r));if(typeof e=="function")throw new Error(t+"contains a function "+ds(r)+" with contents = "+e.toString());if(NA(e))throw new Error(t+"contains "+e.toString()+" "+ds(r));if(typeof e=="string"&&e.length>Am/3&&Nf(e)>Am)throw new Error(t+"contains a string greater than "+Am+" utf8 bytes "+ds(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!PR(o)))throw new Error(t+" contains an invalid key ("+o+") "+ds(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sj(r,o),NR(t,a,r),oj(r)}),i&&s)throw new Error(t+' contains ".value" child '+ds(r)+" in addition to actual children.")}},OR=function(t,e,n,r){if(!(r&&n===void 0)&&!bR(n))throw new Error(Bx(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B3=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OR(t,e,n,r)},W3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!PR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!z3(n))throw new Error(Bx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class q3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DR(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_v(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function LR(t,e,n){DR(t,n),MR(t,r=>_v(r,e))}function Ys(t,e,n){DR(t,n),MR(t,r=>Qn(r,e)||Qn(e,r))}function MR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(H3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function H3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();xs&&Kt("event: "+n.toString()),Ju(r)}}}/**
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
 */const G3="repo_interrupt",K3=25;class Q3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new q3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Od(),this.transactionQueueTree_=new Lv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Y3(t,e,n){if(t.stats_=mv(t.repoInfo_),t.forceRestClient_||kU())t.server_=new Nd(t.repoInfo_,(r,i,s,o)=>{g1(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_1(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Kr(t.repoInfo_,e,(r,i,s,o)=>{g1(t,r,i,s,o)},r=>{_1(t,r)},r=>{J3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=DU(t.repoInfo_,()=>new Nj(t.stats_,t.server_)),t.infoData_=new Aj,t.infoSyncTree_=new f1({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=zf(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fv(t,"connected",!1),t.serverSyncTree_=new f1({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Ys(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function X3(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function FR(t){return N3({timestamp:X3(t)})}function g1(t,e,n,r,i){t.dataUpdateCount++;const s=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Td(n,c=>Qt(c));o=A3(t.serverSyncTree_,s,l,i)}else{const l=Qt(n);o=x3(t.serverSyncTree_,s,l,i)}else if(r){const l=Td(n,c=>Qt(c));o=I3(t.serverSyncTree_,s,l)}else{const l=Qt(n);o=zf(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Uv(t,s)),Ys(t.eventQueue_,a,o)}function _1(t,e){Fv(t,"connected",e),e===!1&&e$(t)}function J3(t,e){yn(e,(n,r)=>{Fv(t,n,r)})}function Fv(t,e,n){const r=new De("/.info/"+e),i=Qt(n);t.infoData_.updateSnapshot(r,i);const s=zf(t.infoSyncTree_,r,i);Ys(t.eventQueue_,r,s)}function Z3(t){return t.nextWriteId_++}function e$(t){VR(t,"onDisconnectEvents");const e=FR(t),n=Od();o_(t.onDisconnect_,Ae(),(i,s)=>{const o=L3(i,s,t.serverSyncTree_,e);uR(n,i,o)});let r=[];o_(n,Ae(),(i,s)=>{r=r.concat(zf(t.serverSyncTree_,i,s));const o=s$(t,i);Uv(t,o)}),t.onDisconnect_=Od(),Ys(t.eventQueue_,Ae(),r)}function t$(t,e,n){let r;fe(e._path)===".info"?r=p1(t.infoSyncTree_,e,n):r=p1(t.serverSyncTree_,e,n),LR(t.eventQueue_,e._path,r)}function y1(t,e,n){let r;fe(e._path)===".info"?r=d_(t.infoSyncTree_,e,n):r=d_(t.serverSyncTree_,e,n),LR(t.eventQueue_,e._path,r)}function n$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(G3)}function VR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Kt(n,...e)}function UR(t,e,n){return IR(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function Vv(t,e=t.transactionQueueTree_){if(e||qf(t,e),Ma(e)){const n=$R(t,e);q(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&r$(t,tc(e),n)}else RR(e)&&Wf(e,n=>{Vv(t,n)})}function r$(t,e,n){const r=n.map(c=>c.currentWriteId),i=UR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];q(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=fn(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{VR(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Do(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();qf(t,Mv(t.transactionQueueTree_,e)),Vv(t,t.transactionQueueTree_),Ys(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)Ju(d[p])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{An("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Uv(t,e)}},o)}function Uv(t,e){const n=jR(t,e),r=tc(n),i=$R(t,n);return i$(t,i,r),r}function i$(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=fn(n,l.path);let h=!1,d;if(q(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(Do(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=K3)h=!0,d="maxretry",i=i.concat(Do(t.serverSyncTree_,l.currentWriteId,!0));else{const p=UR(t,l.path,o);l.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){NR("transaction failed: Data returned ",_,l.path);let v=Qt(_);typeof _=="object"&&_!=null&&oi(_,".priority")||(v=v.updatePriority(p.getPriority()));const R=l.currentWriteId,T=FR(t),g=M3(v,p,T);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=g,l.currentWriteId=Z3(t),o.splice(o.indexOf(R),1),i=i.concat(T3(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Do(t.serverSyncTree_,R,!0))}else h=!0,d="nodata",i=i.concat(Do(t.serverSyncTree_,l.currentWriteId,!0))}Ys(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}qf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ju(r[a]);Vv(t,t.transactionQueueTree_)}function jR(t,e){let n,r=t.transactionQueueTree_;for(n=fe(e);n!==null&&Ma(r)===void 0;)r=Mv(r,n),e=Fe(e),n=fe(e);return r}function $R(t,e){const n=[];return zR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zR(t,e,n){const r=Ma(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Wf(e,i=>{zR(t,i,n)})}function qf(t,e){const n=Ma(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,AR(e,n.length>0?n:void 0)}Wf(e,r=>{qf(t,r)})}function s$(t,e){const n=tc(jR(t,e)),r=Mv(t.transactionQueueTree_,e);return V3(r,i=>{Rm(t,i)}),Rm(t,r),kR(r,i=>{Rm(t,i)}),n}function Rm(t,e){const n=Ma(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(q(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(q(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Do(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?AR(e,void 0):n.length=s+1,Ys(t.eventQueue_,tc(e),i);for(let o=0;o<r.length;o++)Ju(r[o])}}/**
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
 */function o$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function a$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):An(`Invalid query segment '${n}' in query '${t}'`)}return e}const v1=function(t,e){const n=l$(t),r=n.namespace;n.domain==="firebase.com"&&ti(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ti("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||wU();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new WA(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new De(n.pathString)}},l$=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=o$(t.substring(h,d)));const p=a$(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class BR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Rt(this.snapshot.exportVal())}}class WR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class u${constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return q(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jv{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return pe(this._path)?null:ZA(this._path)}get ref(){return new li(this._repo,this._path)}get _queryIdentifier(){const e=n1(this._queryParams),n=fv(e);return n==="{}"?"default":n}get _queryObject(){return n1(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof jv))return!1;const n=this._repo===e._repo,r=_v(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rj(this._path)}}class li extends jv{constructor(e,n){super(e,n,new Ev,!1)}get parent(){const e=tR(this._path);return e===null?null:new li(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cu{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new De(e),r=$d(this.ref,e);return new Cu(this._node.getChild(n),r,rt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Cu(i,$d(this.ref,r),rt)))}hasChild(e){const n=new De(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function c$(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?$d(t._root,e):t._root}function $d(t,e){return t=Xe(t),fe(t._path)===null?B3("child","path",e,!1):OR("child","path",e,!1),new li(t._repo,_t(t._path,e))}class $v{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new BR("value",this,new Cu(e.snapshotNode,new li(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WR(this,e,n):null}matches(e){return e instanceof $v?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WR(this,e,n):null}createEvent(e,n){q(e.childName!=null,"Child events should have a childName.");const r=$d(new li(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new BR(e.type,this,new Cu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function h$(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,d)=>{y1(t._repo,t,a),l(h,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new u$(n,s||void 0),a=e==="value"?new $v(o):new zv(e,o);return t$(t._repo,t,a),()=>y1(t._repo,t,a)}function d$(t,e,n,r){return h$(t,"value",e,n,r)}f3(li);v3(li);/**
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
 */const f$="FIREBASE_DATABASE_EMULATOR_HOST",p_={};let p$=!1;function m$(t,e,n,r){t.repoInfo_=new WA(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function g$(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ti("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=v1(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[f$]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=v1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new qo(qo.OWNER):new bU(t.name,t.options,e);W3("Invalid Firebase Database URL",o),pe(o.path)||ti("Database URL must point to the root of a Firebase Database (not including a child path).");const d=y$(a,t,h,new PU(t.name,n));return new v$(d,t)}function _$(t,e){const n=p_[e];(!n||n[t.key]!==t)&&ti(`Database ${e}(${t.repoInfo_}) has already been deleted.`),n$(t),delete n[t.key]}function y$(t,e,n,r){let i=p_[e.name];i||(i={},p_[e.name]=i);let s=i[t.toURLString()];return s&&ti("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Q3(t,p$,n,r),i[t.toURLString()]=s,s}class v${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Y3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new li(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(_$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ti("Cannot call "+e+" on a deleted database.")}}function w$(t=Df(),e){const n=qu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ev("database");r&&E$(n,...r)}return n}function E$(t,e,n,r={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ti("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ti('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new qo(qo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:nv(r.mockUserToken,t.app.options.projectId);s=new qo(o)}m$(i,e,n,s)}/**
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
 */function T$(t){mU(ts),Hi(new Zr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return g$(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Fn(UT,jT,t),Fn(UT,jT,"esm2017")}Kr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Kr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};T$();var w1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As,qR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,E){function C(){}C.prototype=E.prototype,w.D=E.prototype,w.prototype=new C,w.prototype.constructor=w,w.C=function(A,k,b){for(var x=Array(arguments.length-2),de=2;de<arguments.length;de++)x[de-2]=arguments[de];return E.prototype[k].apply(A,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,E,C){C||(C=0);var A=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)A[k]=E.charCodeAt(C++)|E.charCodeAt(C++)<<8|E.charCodeAt(C++)<<16|E.charCodeAt(C++)<<24;else for(k=0;16>k;++k)A[k]=E[C++]|E[C++]<<8|E[C++]<<16|E[C++]<<24;E=w.g[0],C=w.g[1],k=w.g[2];var b=w.g[3],x=E+(b^C&(k^b))+A[0]+3614090360&4294967295;E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[1]+3905402710&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[2]+606105819&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[3]+3250441966&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(b^C&(k^b))+A[4]+4118548399&4294967295,E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[5]+1200080426&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[6]+2821735955&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[7]+4249261313&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(b^C&(k^b))+A[8]+1770035416&4294967295,E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[9]+2336552879&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[10]+4294925233&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[11]+2304563134&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(b^C&(k^b))+A[12]+1804603682&4294967295,E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[13]+4254626195&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[14]+2792965006&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[15]+1236535329&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(k^b&(C^k))+A[1]+4129170786&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[6]+3225465664&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[11]+643717713&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[0]+3921069994&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(k^b&(C^k))+A[5]+3593408605&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[10]+38016083&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[15]+3634488961&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[4]+3889429448&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(k^b&(C^k))+A[9]+568446438&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[14]+3275163606&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[3]+4107603335&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[8]+1163531501&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(k^b&(C^k))+A[13]+2850285829&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[2]+4243563512&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[7]+1735328473&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[12]+2368359562&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(C^k^b)+A[5]+4294588738&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[8]+2272392833&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[11]+1839030562&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[14]+4259657740&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(C^k^b)+A[1]+2763975236&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[4]+1272893353&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[7]+4139469664&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[10]+3200236656&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(C^k^b)+A[13]+681279174&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[0]+3936430074&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[3]+3572445317&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[6]+76029189&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(C^k^b)+A[9]+3654602809&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[12]+3873151461&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[15]+530742520&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[2]+3299628645&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(k^(C|~b))+A[0]+4096336452&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[7]+1126891415&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[14]+2878612391&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[5]+4237533241&4294967295,C=k+(x<<21&4294967295|x>>>11),x=E+(k^(C|~b))+A[12]+1700485571&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[3]+2399980690&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[10]+4293915773&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[1]+2240044497&4294967295,C=k+(x<<21&4294967295|x>>>11),x=E+(k^(C|~b))+A[8]+1873313359&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[15]+4264355552&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[6]+2734768916&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[13]+1309151649&4294967295,C=k+(x<<21&4294967295|x>>>11),x=E+(k^(C|~b))+A[4]+4149444226&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[11]+3174756917&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[2]+718787259&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+E&4294967295,w.g[1]=w.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,w.g[2]=w.g[2]+k&4294967295,w.g[3]=w.g[3]+b&4294967295}r.prototype.u=function(w,E){E===void 0&&(E=w.length);for(var C=E-this.blockSize,A=this.B,k=this.h,b=0;b<E;){if(k==0)for(;b<=C;)i(this,w,b),b+=this.blockSize;if(typeof w=="string"){for(;b<E;)if(A[k++]=w.charCodeAt(b++),k==this.blockSize){i(this,A),k=0;break}}else for(;b<E;)if(A[k++]=w[b++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var E=1;E<w.length-8;++E)w[E]=0;var C=8*this.o;for(E=w.length-8;E<w.length;++E)w[E]=C&255,C/=256;for(this.u(w),w=Array(16),E=C=0;4>E;++E)for(var A=0;32>A;A+=8)w[C++]=this.g[E]>>>A&255;return w};function s(w,E){var C=a;return Object.prototype.hasOwnProperty.call(C,w)?C[w]:C[w]=E(w)}function o(w,E){this.h=E;for(var C=[],A=!0,k=w.length-1;0<=k;k--){var b=w[k]|0;A&&b==E||(C[k]=b,A=!1)}this.g=C}var a={};function l(w){return-128<=w&&128>w?s(w,function(E){return new o([E|0],0>E?-1:0)}):new o([w|0],0>w?-1:0)}function c(w){if(isNaN(w)||!isFinite(w))return d;if(0>w)return R(c(-w));for(var E=[],C=1,A=0;w>=C;A++)E[A]=w/C|0,C*=4294967296;return new o(E,0)}function h(w,E){if(w.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(w.charAt(0)=="-")return R(h(w.substring(1),E));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(E,8)),A=d,k=0;k<w.length;k+=8){var b=Math.min(8,w.length-k),x=parseInt(w.substring(k,k+b),E);8>b?(b=c(Math.pow(E,b)),A=A.j(b).add(c(x))):(A=A.j(C),A=A.add(c(x)))}return A}var d=l(0),p=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(I(this))return-R(this).m();for(var w=0,E=1,C=0;C<this.g.length;C++){var A=this.i(C);w+=(0<=A?A:4294967296+A)*E,E*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(v(this))return"0";if(I(this))return"-"+R(this).toString(w);for(var E=c(Math.pow(w,6)),C=this,A="";;){var k=O(C,E).g;C=T(C,k.j(E));var b=((0<C.g.length?C.g[0]:C.h)>>>0).toString(w);if(C=k,v(C))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function v(w){if(w.h!=0)return!1;for(var E=0;E<w.g.length;E++)if(w.g[E]!=0)return!1;return!0}function I(w){return w.h==-1}t.l=function(w){return w=T(this,w),I(w)?-1:v(w)?0:1};function R(w){for(var E=w.g.length,C=[],A=0;A<E;A++)C[A]=~w.g[A];return new o(C,~w.h).add(p)}t.abs=function(){return I(this)?R(this):this},t.add=function(w){for(var E=Math.max(this.g.length,w.g.length),C=[],A=0,k=0;k<=E;k++){var b=A+(this.i(k)&65535)+(w.i(k)&65535),x=(b>>>16)+(this.i(k)>>>16)+(w.i(k)>>>16);A=x>>>16,b&=65535,x&=65535,C[k]=x<<16|b}return new o(C,C[C.length-1]&-2147483648?-1:0)};function T(w,E){return w.add(R(E))}t.j=function(w){if(v(this)||v(w))return d;if(I(this))return I(w)?R(this).j(R(w)):R(R(this).j(w));if(I(w))return R(this.j(R(w)));if(0>this.l(_)&&0>w.l(_))return c(this.m()*w.m());for(var E=this.g.length+w.g.length,C=[],A=0;A<2*E;A++)C[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<w.g.length;k++){var b=this.i(A)>>>16,x=this.i(A)&65535,de=w.i(k)>>>16,Le=w.i(k)&65535;C[2*A+2*k]+=x*Le,g(C,2*A+2*k),C[2*A+2*k+1]+=b*Le,g(C,2*A+2*k+1),C[2*A+2*k+1]+=x*de,g(C,2*A+2*k+1),C[2*A+2*k+2]+=b*de,g(C,2*A+2*k+2)}for(A=0;A<E;A++)C[A]=C[2*A+1]<<16|C[2*A];for(A=E;A<2*E;A++)C[A]=0;return new o(C,0)};function g(w,E){for(;(w[E]&65535)!=w[E];)w[E+1]+=w[E]>>>16,w[E]&=65535,E++}function S(w,E){this.g=w,this.h=E}function O(w,E){if(v(E))throw Error("division by zero");if(v(w))return new S(d,d);if(I(w))return E=O(R(w),E),new S(R(E.g),R(E.h));if(I(E))return E=O(w,R(E)),new S(R(E.g),E.h);if(30<w.g.length){if(I(w)||I(E))throw Error("slowDivide_ only works with positive integers.");for(var C=p,A=E;0>=A.l(w);)C=L(C),A=L(A);var k=V(C,1),b=V(A,1);for(A=V(A,2),C=V(C,2);!v(A);){var x=b.add(A);0>=x.l(w)&&(k=k.add(C),b=x),A=V(A,1),C=V(C,1)}return E=T(w,k.j(E)),new S(k,E)}for(k=d;0<=w.l(E);){for(C=Math.max(1,Math.floor(w.m()/E.m())),A=Math.ceil(Math.log(C)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(C),x=b.j(E);I(x)||0<x.l(w);)C-=A,b=c(C),x=b.j(E);v(b)&&(b=p),k=k.add(b),w=T(w,x)}return new S(k,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var E=Math.max(this.g.length,w.g.length),C=[],A=0;A<E;A++)C[A]=this.i(A)&w.i(A);return new o(C,this.h&w.h)},t.or=function(w){for(var E=Math.max(this.g.length,w.g.length),C=[],A=0;A<E;A++)C[A]=this.i(A)|w.i(A);return new o(C,this.h|w.h)},t.xor=function(w){for(var E=Math.max(this.g.length,w.g.length),C=[],A=0;A<E;A++)C[A]=this.i(A)^w.i(A);return new o(C,this.h^w.h)};function L(w){for(var E=w.g.length+1,C=[],A=0;A<E;A++)C[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(C,w.h)}function V(w,E){var C=E>>5;E%=32;for(var A=w.g.length-C,k=[],b=0;b<A;b++)k[b]=0<E?w.i(b+C)>>>E|w.i(b+C+1)<<32-E:w.i(b+C);return new o(k,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,qR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,As=o}).apply(typeof w1<"u"?w1:typeof self<"u"?self:typeof window<"u"?window:{});var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HR,GR,xl,KR,Rh,m_,QR,YR,XR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,m){return u==Array.prototype||u==Object.prototype||(u[f]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yc=="object"&&Yc];for(var f=0;f<u.length;++f){var m=u[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var m=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var D=u[y];if(!(D in m))break e;m=m[D]}u=u[u.length-1],y=m[u],f=f(y),f!=y&&f!=null&&e(m,u,{configurable:!0,writable:!0,value:f})}}function s(u,f){u instanceof String&&(u+="");var m=0,y=!1,D={next:function(){if(!y&&m<u.length){var F=m++;return{value:f(F,u[F]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function c(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function h(u,f,m){return u.call.apply(u.bind,arguments)}function d(u,f,m){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),u.apply(f,D)}}return function(){return u.apply(f,arguments)}}function p(u,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function _(u,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function v(u,f){function m(){}m.prototype=f.prototype,u.aa=f.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(y,D,F){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return f.prototype[D].apply(y,G)}}function I(u){const f=u.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=u[y];return m}return[]}function R(u,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const D=u.length||0,F=y.length||0;u.length=D+F;for(let G=0;G<F;G++)u[D+G]=y[G]}else u.push(y)}}class T{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function g(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var L=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function V(u,f,m){for(const y in u)f.call(m,u[y],y,u)}function w(u,f){for(const m in u)f.call(void 0,u[m],m,u)}function E(u){const f={};for(const m in u)f[m]=u[m];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,f){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)u[m]=y[m];for(let F=0;F<C.length;F++)m=C[F],Object.prototype.hasOwnProperty.call(y,m)&&(u[m]=y[m])}}function k(u){var f=1;u=u.split(":");const m=[];for(;0<f&&u.length;)m.push(u.shift()),f--;return u.length&&m.push(u.join(":")),m}function b(u){a.setTimeout(()=>{throw u},0)}function x(){var u=ee;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class de{constructor(){this.h=this.g=null}add(f,m){const y=Le.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Le=new T(()=>new it,u=>u.reset());class it{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,H=!1,ee=new de,te=()=>{const u=a.Promise.resolve(void 0);Ie=()=>{u.then(Pe)}};var Pe=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(m){b(m)}var f=Le;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}H=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Tt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return u}();function Ut(u,f){if(Ne.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(L){e:{try{O(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else m=="mouseover"?f=u.fromElement:m=="mouseout"&&(f=u.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:pt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ut.aa.h.call(this)}}v(Ut,Ne);var pt={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),Pr=0;function br(u,f,m,y,D){this.listener=u,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=D,this.key=++Pr,this.da=this.fa=!1}function Zt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function is(u){this.src=u,this.g={},this.h=0}is.prototype.add=function(u,f,m,y,D){var F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);var G=Zs(u,f,y,D);return-1<G?(f=u[G],m||(f.fa=!1)):(f=new br(f,this.src,F,!!y,D),f.fa=m,u.push(f)),f};function $a(u,f){var m=f.type;if(m in u.g){var y=u.g[m],D=Array.prototype.indexOf.call(y,f,void 0),F;(F=0<=D)&&Array.prototype.splice.call(y,D,1),F&&(Zt(f),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Zs(u,f,m,y){for(var D=0;D<u.length;++D){var F=u[D];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==y)return D}return-1}var eo="closure_lm_"+(1e6*Math.random()|0),cc={};function hp(u,f,m,y,D){if(y&&y.once)return M(u,f,m,y,D);if(Array.isArray(f)){for(var F=0;F<f.length;F++)hp(u,f[F],m,y,D);return null}return m=He(m),u&&u[st]?u.K(f,m,c(y)?!!y.capture:!!y,D):dp(u,f,m,!1,y,D)}function dp(u,f,m,y,D,F){if(!f)throw Error("Invalid event type");var G=c(D)?!!D.capture:!!D,Oe=Z(u);if(Oe||(u[eo]=Oe=new is(u)),m=Oe.add(f,m,y,G,F),m.proxy)return m;if(y=N(),m.proxy=y,y.src=u,y.listener=m,u.addEventListener)Tt||(D=G),D===void 0&&(D=!1),u.addEventListener(f.toString(),y,D);else if(u.attachEvent)u.attachEvent(K(f.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function N(){function u(m){return f.call(u.src,u.listener,m)}const f=W;return u}function M(u,f,m,y,D){if(Array.isArray(f)){for(var F=0;F<f.length;F++)M(u,f[F],m,y,D);return null}return m=He(m),u&&u[st]?u.L(f,m,c(y)?!!y.capture:!!y,D):dp(u,f,m,!0,y,D)}function U(u,f,m,y,D){if(Array.isArray(f))for(var F=0;F<f.length;F++)U(u,f[F],m,y,D);else y=c(y)?!!y.capture:!!y,m=He(m),u&&u[st]?(u=u.i,f=String(f).toString(),f in u.g&&(F=u.g[f],m=Zs(F,m,y,D),-1<m&&(Zt(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete u.g[f],u.h--)))):u&&(u=Z(u))&&(f=u.g[f.toString()],u=-1,f&&(u=Zs(f,m,y,D)),(m=-1<u?f[u]:null)&&Q(m))}function Q(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[st])$a(f.i,u);else{var m=u.type,y=u.proxy;f.removeEventListener?f.removeEventListener(m,y,u.capture):f.detachEvent?f.detachEvent(K(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=Z(f))?($a(m,u),m.h==0&&(m.src=null,f[eo]=null)):Zt(u)}}}function K(u){return u in cc?cc[u]:cc[u]="on"+u}function W(u,f){if(u.da)u=!0;else{f=new Ut(f,this);var m=u.listener,y=u.ha||u.src;u.fa&&Q(u),u=m.call(y,f)}return u}function Z(u){return u=u[eo],u instanceof is?u:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function He(u){return typeof u=="function"?u:(u[ve]||(u[ve]=function(f){return u.handleEvent(f)}),u[ve])}function Re(){ye.call(this),this.i=new is(this),this.M=this,this.F=null}v(Re,ye),Re.prototype[st]=!0,Re.prototype.removeEventListener=function(u,f,m,y){U(this,u,f,m,y)};function Ze(u,f){var m,y=u.F;if(y)for(m=[];y;y=y.F)m.push(y);if(u=u.M,y=f.type||f,typeof f=="string")f=new Ne(f,u);else if(f instanceof Ne)f.target=f.target||u;else{var D=f;f=new Ne(y,u),A(f,D)}if(D=!0,m)for(var F=m.length-1;0<=F;F--){var G=f.g=m[F];D=to(G,y,!0,f)&&D}if(G=f.g=u,D=to(G,y,!0,f)&&D,D=to(G,y,!1,f)&&D,m)for(F=0;F<m.length;F++)G=f.g=m[F],D=to(G,y,!1,f)&&D}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var m=u.g[f],y=0;y<m.length;y++)Zt(m[y]);delete u.g[f],u.h--}}this.F=null},Re.prototype.K=function(u,f,m,y){return this.i.add(String(u),f,!1,m,y)},Re.prototype.L=function(u,f,m,y){return this.i.add(String(u),f,!0,m,y)};function to(u,f,m,y){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,F=0;F<f.length;++F){var G=f[F];if(G&&!G.da&&G.capture==m){var Oe=G.listener,Pt=G.ha||G.src;G.fa&&$a(u.i,G),D=Oe.call(Pt,y)!==!1&&D}}return D&&!y.defaultPrevented}function no(u,f,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(u,f||0)}function ro(u){u.g=no(()=>{u.g=null,u.i&&(u.i=!1,ro(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class fp extends ye{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:ro(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ui(u){ye.call(this),this.h=u,this.g={}}v(ui,ye);var hc=[];function za(u){V(u.g,function(f,m){this.g.hasOwnProperty(m)&&Q(f)},u),u.g={}}ui.prototype.N=function(){ui.aa.N.call(this),za(this)},ui.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pp=a.JSON.stringify,DP=a.JSON.parse,LP=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function mp(){}mp.prototype.h=null;function T0(u){return u.h||(u.h=u.i())}function I0(){}var Ba={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gp(){Ne.call(this,"d")}v(gp,Ne);function _p(){Ne.call(this,"c")}v(_p,Ne);var ss={},S0=null;function dc(){return S0=S0||new Re}ss.La="serverreachability";function C0(u){Ne.call(this,ss.La,u)}v(C0,Ne);function Wa(u){const f=dc();Ze(f,new C0(f))}ss.STAT_EVENT="statevent";function x0(u,f){Ne.call(this,ss.STAT_EVENT,u),this.stat=f}v(x0,Ne);function en(u){const f=dc();Ze(f,new x0(f,u))}ss.Ma="timingevent";function A0(u,f){Ne.call(this,ss.Ma,u),this.size=f}v(A0,Ne);function qa(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},f)}function Ha(){this.g=!0}Ha.prototype.xa=function(){this.g=!1};function MP(u,f,m,y,D,F){u.info(function(){if(u.g)if(F)for(var G="",Oe=F.split("&"),Pt=0;Pt<Oe.length;Pt++){var Te=Oe[Pt].split("=");if(1<Te.length){var jt=Te[0];Te=Te[1];var $t=jt.split("_");G=2<=$t.length&&$t[1]=="type"?G+(jt+"="+Te+"&"):G+(jt+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+f+`
`+m+`
`+G})}function FP(u,f,m,y,D,F,G){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+f+`
`+m+`
`+F+" "+G})}function io(u,f,m,y){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+UP(u,m)+(y?" "+y:"")})}function VP(u,f){u.info(function(){return"TIMEOUT: "+f})}Ha.prototype.info=function(){};function UP(u,f){if(!u.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var y=m[u];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return pp(m)}catch{return f}}var fc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},R0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yp;function pc(){}v(pc,mp),pc.prototype.g=function(){return new XMLHttpRequest},pc.prototype.i=function(){return{}},yp=new pc;function ci(u,f,m,y){this.j=u,this.i=f,this.l=m,this.R=y||1,this.U=new ui(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new k0}function k0(){this.i=null,this.g="",this.h=!1}var P0={},vp={};function wp(u,f,m){u.L=1,u.v=yc(Nr(f)),u.m=m,u.P=!0,b0(u,null)}function b0(u,f){u.F=Date.now(),mc(u),u.A=Nr(u.v);var m=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),q0(m.i,"t",y),u.C=0,m=u.j.J,u.h=new k0,u.g=uw(u.j,m?f:null,!u.m),0<u.O&&(u.M=new fp(p(u.Y,u,u.g),u.O)),f=u.U,m=u.g,y=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(hc[0]=D.toString()),D=hc);for(var F=0;F<D.length;F++){var G=hp(m,D[F],y||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=u.H?E(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),Wa(),MP(u.i,u.u,u.A,u.l,u.R,u.m)}ci.prototype.ca=function(u){u=u.target;const f=this.M;f&&Or(u)==3?f.j():this.Y(u)},ci.prototype.Y=function(u){try{if(u==this.g)e:{const $t=Or(this.g);var f=this.g.Ba();const ao=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||J0(this.g)))){this.J||$t!=4||f==7||(f==8||0>=ao?Wa(3):Wa(2)),Ep(this);var m=this.g.Z();this.X=m;t:if(N0(this)){var y=J0(this.g);u="";var D=y.length,F=Or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){os(this),Ga(this);var G="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,u+=this.h.i.decode(y[f],{stream:!(F&&f==D-1)});y.length=0,this.h.g+=u,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,FP(this.i,this.u,this.A,this.l,this.R,$t,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Pt=this.g;if((Oe=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Oe)){var Te=Oe;break t}}Te=null}if(m=Te)io(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tp(this,m);else{this.o=!1,this.s=3,en(12),os(this),Ga(this);break e}}if(this.P){m=!0;let $n;for(;!this.J&&this.C<G.length;)if($n=jP(this,G),$n==vp){$t==4&&(this.s=4,en(14),m=!1),io(this.i,this.l,null,"[Incomplete Response]");break}else if($n==P0){this.s=4,en(15),io(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else io(this.i,this.l,$n,null),Tp(this,$n);if(N0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||G.length!=0||this.h.h||(this.s=1,en(16),m=!1),this.o=this.o&&m,!m)io(this.i,this.l,G,"[Invalid Chunked Response]"),os(this),Ga(this);else if(0<G.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Rp(jt),jt.M=!0,en(11))}}else io(this.i,this.l,G,null),Tp(this,G);$t==4&&os(this),this.o&&!this.J&&($t==4?sw(this.j,this):(this.o=!1,mc(this)))}else rb(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,en(12)):(this.s=0,en(13)),os(this),Ga(this)}}}catch{}finally{}};function N0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jP(u,f){var m=u.C,y=f.indexOf(`
`,m);return y==-1?vp:(m=Number(f.substring(m,y)),isNaN(m)?P0:(y+=1,y+m>f.length?vp:(f=f.slice(y,y+m),u.C=y+m,f)))}ci.prototype.cancel=function(){this.J=!0,os(this)};function mc(u){u.S=Date.now()+u.I,O0(u,u.I)}function O0(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=qa(p(u.ba,u),f)}function Ep(u){u.B&&(a.clearTimeout(u.B),u.B=null)}ci.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(VP(this.i,this.A),this.L!=2&&(Wa(),en(17)),os(this),this.s=2,Ga(this)):O0(this,this.S-u)};function Ga(u){u.j.G==0||u.J||sw(u.j,u)}function os(u){Ep(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,za(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Tp(u,f){try{var m=u.j;if(m.G!=0&&(m.g==u||Ip(m.h,u))){if(!u.K&&Ip(m.h,u)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Ic(m),Ec(m);else break e;Ap(m),en(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=qa(p(m.Za,m),6e3));if(1>=M0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else ls(m,11)}else if((u.K||m.g==u)&&Ic(m),!g(f))for(D=m.Da.g.parse(f),f=0;f<D.length;f++){let Te=D[f];if(m.T=Te[0],Te=Te[1],m.G==2)if(Te[0]=="c"){m.K=Te[1],m.ia=Te[2];const jt=Te[3];jt!=null&&(m.la=jt,m.j.info("VER="+m.la));const $t=Te[4];$t!=null&&(m.Aa=$t,m.j.info("SVER="+m.Aa));const ao=Te[5];ao!=null&&typeof ao=="number"&&0<ao&&(y=1.5*ao,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const $n=u.g;if($n){const Cc=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cc){var F=y.h;F.g||Cc.indexOf("spdy")==-1&&Cc.indexOf("quic")==-1&&Cc.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Sp(F,F.h),F.h=null))}if(y.D){const kp=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;kp&&(y.ya=kp,je(y.I,y.D,kp))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var G=u;if(y.qa=lw(y,y.J?y.ia:null,y.W),G.K){F0(y.h,G);var Oe=G,Pt=y.L;Pt&&(Oe.I=Pt),Oe.B&&(Ep(Oe),mc(Oe)),y.g=G}else rw(y);0<m.i.length&&Tc(m)}else Te[0]!="stop"&&Te[0]!="close"||ls(m,7);else m.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?ls(m,7):xp(m):Te[0]!="noop"&&m.l&&m.l.ta(Te),m.v=0)}}Wa(4)}catch{}}var $P=class{constructor(u,f){this.g=u,this.map=f}};function D0(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function L0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function M0(u){return u.h?1:u.g?u.g.size:0}function Ip(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Sp(u,f){u.g?u.g.add(f):u.h=f}function F0(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}D0.prototype.cancel=function(){if(this.i=V0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function V0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const m of u.g.values())f=f.concat(m.D);return f}return I(u.i)}function zP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var f=[],m=u.length,y=0;y<m;y++)f.push(u[y]);return f}f=[],m=0;for(y in u)f[m++]=u[y];return f}function BP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var f=[];u=u.length;for(var m=0;m<u;m++)f.push(m);return f}f=[],m=0;for(const y in u)f[m++]=y;return f}}}function U0(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var m=BP(u),y=zP(u),D=y.length,F=0;F<D;F++)f.call(void 0,y[F],m&&m[F],u)}var j0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WP(u,f){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var y=u[m].indexOf("="),D=null;if(0<=y){var F=u[m].substring(0,y);D=u[m].substring(y+1)}else F=u[m];f(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function as(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof as){this.h=u.h,gc(this,u.j),this.o=u.o,this.g=u.g,_c(this,u.s),this.l=u.l;var f=u.i,m=new Ya;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),$0(this,m),this.m=u.m}else u&&(f=String(u).match(j0))?(this.h=!1,gc(this,f[1]||"",!0),this.o=Ka(f[2]||""),this.g=Ka(f[3]||"",!0),_c(this,f[4]),this.l=Ka(f[5]||"",!0),$0(this,f[6]||"",!0),this.m=Ka(f[7]||"")):(this.h=!1,this.i=new Ya(null,this.h))}as.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Qa(f,z0,!0),":");var m=this.g;return(m||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Qa(f,z0,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Qa(m,m.charAt(0)=="/"?GP:HP,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Qa(m,QP)),u.join("")};function Nr(u){return new as(u)}function gc(u,f,m){u.j=m?Ka(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function _c(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function $0(u,f,m){f instanceof Ya?(u.i=f,YP(u.i,u.h)):(m||(f=Qa(f,KP)),u.i=new Ya(f,u.h))}function je(u,f,m){u.i.set(f,m)}function yc(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ka(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Qa(u,f,m){return typeof u=="string"?(u=encodeURI(u).replace(f,qP),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function qP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var z0=/[#\/\?@]/g,HP=/[#\?:]/g,GP=/[#\?]/g,KP=/[#\?@]/g,QP=/#/g;function Ya(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function hi(u){u.g||(u.g=new Map,u.h=0,u.i&&WP(u.i,function(f,m){u.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Ya.prototype,t.add=function(u,f){hi(this),this.i=null,u=so(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(f),this.h+=1,this};function B0(u,f){hi(u),f=so(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function W0(u,f){return hi(u),f=so(u,f),u.g.has(f)}t.forEach=function(u,f){hi(this),this.g.forEach(function(m,y){m.forEach(function(D){u.call(f,D,y,this)},this)},this)},t.na=function(){hi(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const D=u[y];for(let F=0;F<D.length;F++)m.push(f[y])}return m},t.V=function(u){hi(this);let f=[];if(typeof u=="string")W0(this,u)&&(f=f.concat(this.g.get(so(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)f=f.concat(u[m])}return f},t.set=function(u,f){return hi(this),this.i=null,u=so(this,u),W0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function q0(u,f,m){B0(u,f),0<m.length&&(u.i=null,u.g.set(so(u,f),I(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const F=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var D=F;G[y]!==""&&(D+="="+encodeURIComponent(String(G[y]))),u.push(D)}}return this.i=u.join("&")};function so(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function YP(u,f){f&&!u.j&&(hi(u),u.i=null,u.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(B0(this,y),q0(this,D,m))},u)),u.j=f}function XP(u,f){const m=new Ha;if(a.Image){const y=new Image;y.onload=_(di,m,"TestLoadImage: loaded",!0,f,y),y.onerror=_(di,m,"TestLoadImage: error",!1,f,y),y.onabort=_(di,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=_(di,m,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else f(!1)}function JP(u,f){const m=new Ha,y=new AbortController,D=setTimeout(()=>{y.abort(),di(m,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:y.signal}).then(F=>{clearTimeout(D),F.ok?di(m,"TestPingServer: ok",!0,f):di(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),di(m,"TestPingServer: error",!1,f)})}function di(u,f,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function ZP(){this.g=new LP}function eb(u,f,m){const y=m||"";try{U0(u,function(D,F){let G=D;c(D)&&(G=pp(D)),f.push(y+F+"="+encodeURIComponent(G))})}catch(D){throw f.push(y+"type="+encodeURIComponent("_badmap")),D}}function Xa(u){this.l=u.Ub||null,this.j=u.eb||!1}v(Xa,mp),Xa.prototype.g=function(){return new vc(this.l,this.j)},Xa.prototype.i=function(u){return function(){return u}}({});function vc(u,f){Re.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(vc,Re),t=vc.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Za(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ja(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Za(this)),this.g&&(this.readyState=3,Za(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;H0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function H0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Ja(this):Za(this),this.readyState==3&&H0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ja(this))},t.Qa=function(u){this.g&&(this.response=u,Ja(this))},t.ga=function(){this.g&&Ja(this)};function Ja(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Za(u)}t.setRequestHeader=function(u,f){this.u.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=f.next();return u.join(`\r
`)};function Za(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function G0(u){let f="";return V(u,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function Cp(u,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=G0(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):je(u,f,m))}function et(u){Re.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(et,Re);var tb=/^https?$/i,nb=["POST","PUT"];t=et.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yp.g(),this.v=this.o?T0(this.o):T0(yp),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(F){K0(this,F);return}if(u=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const F of y.keys())m.set(F,y.get(F));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(nb,f,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of m)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{X0(this),this.u=!0,this.g.send(u),this.u=!1}catch(F){K0(this,F)}};function K0(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,Q0(u),wc(u)}function Q0(u){u.A||(u.A=!0,Ze(u,"complete"),Ze(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ze(this,"complete"),Ze(this,"abort"),wc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wc(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Y0(this):this.bb())},t.bb=function(){Y0(this)};function Y0(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Or(u)!=4||u.Z()!=2)){if(u.u&&Or(u)==4)no(u.Ea,0,u);else if(Ze(u,"readystatechange"),Or(u)==4){u.h=!1;try{const G=u.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=G===0){var D=String(u.D).match(j0)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!tb.test(D?D.toLowerCase():"")}m=y}if(m)Ze(u,"complete"),Ze(u,"success");else{u.m=6;try{var F=2<Or(u)?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.Z()+"]",Q0(u)}}finally{wc(u)}}}}function wc(u,f){if(u.g){X0(u);const m=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||Ze(u,"ready");try{m.onreadystatechange=y}catch{}}}function X0(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Or(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Or(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),DP(f)}};function J0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function rb(u){const f={};u=(u.g&&2<=Or(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(g(u[y]))continue;var m=k(u[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[D]||[];f[D]=F,F.push(m)}w(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function el(u,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||f}function Z0(u){this.Aa=0,this.i=[],this.j=new Ha,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=el("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=el("baseRetryDelayMs",5e3,u),this.cb=el("retryDelaySeedMs",1e4,u),this.Wa=el("forwardChannelMaxRetries",2,u),this.wa=el("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new D0(u&&u.concurrentRequestLimit),this.Da=new ZP,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Z0.prototype,t.la=8,t.G=1,t.connect=function(u,f,m,y){en(0),this.W=u,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=lw(this,null,this.W),Tc(this)};function xp(u){if(ew(u),u.G==3){var f=u.U++,m=Nr(u.I);if(je(m,"SID",u.K),je(m,"RID",f),je(m,"TYPE","terminate"),tl(u,m),f=new ci(u,u.j,f),f.L=2,f.v=yc(Nr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=uw(f.j,null),f.g.ea(f.v)),f.F=Date.now(),mc(f)}aw(u)}function Ec(u){u.g&&(Rp(u),u.g.cancel(),u.g=null)}function ew(u){Ec(u),u.u&&(a.clearTimeout(u.u),u.u=null),Ic(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Tc(u){if(!L0(u.h)&&!u.s){u.s=!0;var f=u.Ga;Ie||te(),H||(Ie(),H=!0),ee.add(f,u),u.B=0}}function ib(u,f){return M0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=qa(p(u.Ga,u,f),ow(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new ci(this,this.j,u);let F=this.o;if(this.S&&(F?(F=E(F),A(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=nw(this,D,f),m=Nr(this.I),je(m,"RID",u),je(m,"CVER",22),this.D&&je(m,"X-HTTP-Session-Id",this.D),tl(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(G0(F)))+"&"+f:this.m&&Cp(m,this.m,F)),Sp(this.h,D),this.Ua&&je(m,"TYPE","init"),this.P?(je(m,"$req",f),je(m,"SID","null"),D.T=!0,wp(D,m,null)):wp(D,m,f),this.G=2}}else this.G==3&&(u?tw(this,u):this.i.length==0||L0(this.h)||tw(this))};function tw(u,f){var m;f?m=f.l:m=u.U++;const y=Nr(u.I);je(y,"SID",u.K),je(y,"RID",m),je(y,"AID",u.T),tl(u,y),u.m&&u.o&&Cp(y,u.m,u.o),m=new ci(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),f&&(u.i=f.D.concat(u.i)),f=nw(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Sp(u.h,m),wp(m,y,f)}function tl(u,f){u.H&&V(u.H,function(m,y){je(f,y,m)}),u.l&&U0({},function(m,y){je(f,y,m)})}function nw(u,f,m){m=Math.min(u.i.length,m);var y=u.l?p(u.l.Na,u.l,u):null;e:{var D=u.i;let F=-1;for(;;){const G=["count="+m];F==-1?0<m?(F=D[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Oe=!0;for(let Pt=0;Pt<m;Pt++){let Te=D[Pt].g;const jt=D[Pt].map;if(Te-=F,0>Te)F=Math.max(0,D[Pt].g-100),Oe=!1;else try{eb(jt,G,"req"+Te+"_")}catch{y&&y(jt)}}if(Oe){y=G.join("&");break e}}}return u=u.i.splice(0,m),f.D=u,y}function rw(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;Ie||te(),H||(Ie(),H=!0),ee.add(f,u),u.v=0}}function Ap(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=qa(p(u.Fa,u),ow(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,iw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=qa(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,en(10),Ec(this),iw(this))};function Rp(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function iw(u){u.g=new ci(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=Nr(u.qa);je(f,"RID","rpc"),je(f,"SID",u.K),je(f,"AID",u.T),je(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(f,"TO",u.ja),je(f,"TYPE","xmlhttp"),tl(u,f),u.m&&u.o&&Cp(f,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=yc(Nr(f)),m.m=null,m.P=!0,b0(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Ec(this),Ap(this),en(19))};function Ic(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function sw(u,f){var m=null;if(u.g==f){Ic(u),Rp(u),u.g=null;var y=2}else if(Ip(u.h,f))m=f.D,F0(u.h,f),y=1;else return;if(u.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var D=u.B;y=dc(),Ze(y,new A0(y,m)),Tc(u)}else rw(u);else if(D=f.s,D==3||D==0&&0<f.X||!(y==1&&ib(u,f)||y==2&&Ap(u)))switch(m&&0<m.length&&(f=u.h,f.i=f.i.concat(m)),D){case 1:ls(u,5);break;case 4:ls(u,10);break;case 3:ls(u,6);break;default:ls(u,2)}}}function ow(u,f){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*f}function ls(u,f){if(u.j.info("Error code "+f),f==2){var m=p(u.fb,u),y=u.Xa;const D=!y;y=new as(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gc(y,"https"),yc(y),D?XP(y.toString(),m):JP(y.toString(),m)}else en(2);u.G=0,u.l&&u.l.sa(f),aw(u),ew(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),en(2)):(this.j.info("Failed to ping google.com"),en(1))};function aw(u){if(u.G=0,u.ka=[],u.l){const f=V0(u.h);(f.length!=0||u.i.length!=0)&&(R(u.ka,f),R(u.ka,u.i),u.h.i.length=0,I(u.i),u.i.length=0),u.l.ra()}}function lw(u,f,m){var y=m instanceof as?Nr(m):new as(m);if(y.g!="")f&&(y.g=f+"."+y.g),_c(y,y.s);else{var D=a.location;y=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var F=new as(null);y&&gc(F,y),f&&(F.g=f),D&&_c(F,D),m&&(F.l=m),y=F}return m=u.D,f=u.ya,m&&f&&je(y,m,f),je(y,"VER",u.la),tl(u,y),y}function uw(u,f,m){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new et(new Xa({eb:m})):new et(u.pa),f.Ha(u.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cw(){}t=cw.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sc(){}Sc.prototype.g=function(u,f){return new wn(u,f)};function wn(u,f){Re.call(this),this.g=new Z0(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!g(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!g(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new oo(this)}v(wn,Re),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){xp(this.g)},wn.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=pp(u),u=m);f.i.push(new $P(f.Ya++,u)),f.G==3&&Tc(f)},wn.prototype.N=function(){this.g.l=null,delete this.j,xp(this.g),delete this.g,wn.aa.N.call(this)};function hw(u){gp.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const m in f){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}v(hw,gp);function dw(){_p.call(this),this.status=1}v(dw,_p);function oo(u){this.g=u}v(oo,cw),oo.prototype.ua=function(){Ze(this.g,"a")},oo.prototype.ta=function(u){Ze(this.g,new hw(u))},oo.prototype.sa=function(u){Ze(this.g,new dw)},oo.prototype.ra=function(){Ze(this.g,"b")},Sc.prototype.createWebChannel=Sc.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,XR=function(){return new Sc},YR=function(){return dc()},QR=ss,m_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fc.NO_ERROR=0,fc.TIMEOUT=8,fc.HTTP_ERROR=6,Rh=fc,R0.COMPLETE="complete",KR=R0,I0.EventType=Ba,Ba.OPEN="a",Ba.CLOSE="b",Ba.ERROR="c",Ba.MESSAGE="d",Re.prototype.listen=Re.prototype.K,xl=I0,GR=Xa,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,HR=et}).apply(typeof Yc<"u"?Yc:typeof self<"u"?self:typeof window<"u"?window:{});const E1="@firebase/firestore";/**
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
 */class Ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ht.UNAUTHENTICATED=new Ht(null),Ht.GOOGLE_CREDENTIALS=new Ht("google-credentials-uid"),Ht.FIRST_PARTY=new Ht("first-party-uid"),Ht.MOCK_USER=new Ht("mock-user");/**
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
 */let Fa="10.12.1";/**
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
 */const js=new Of("@firebase/firestore");function ml(){return js.logLevel}function J(t,...e){if(js.logLevel<=me.DEBUG){const n=e.map(Bv);js.debug(`Firestore (${Fa}): ${t}`,...n)}}function ni(t,...e){if(js.logLevel<=me.ERROR){const n=e.map(Bv);js.error(`Firestore (${Fa}): ${t}`,...n)}}function fa(t,...e){if(js.logLevel<=me.WARN){const n=e.map(Bv);js.warn(`Firestore (${Fa}): ${t}`,...n)}}function Bv(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Fa}) INTERNAL ASSERTION FAILED: `+t;throw ni(e),new Error(e)}function Ue(t,e){t||ae()}function ue(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Bi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class JR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class I${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ht.UNAUTHENTICATED))}shutdown(){}}class S${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class C${constructor(e){this.t=e,this.currentUser=Ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Bi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new JR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ht(e)}}class x${constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class A${constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new x$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class R${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new R$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function P$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class ZR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=P$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function pa(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class wt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new wt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new wt(0,0))}static max(){return new le(new wt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class xu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return xu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends xu{construct(e,n,r){return new nt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const b$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends xu{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return b$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ne(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ne(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ne(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ne(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
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
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(nt.fromString(e))}static fromName(e){return new ie(nt.fromString(e).popFirst(5))}static empty(){return new ie(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new nt(e.slice()))}}function N$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));return new Qi(i,ie.empty(),e)}function O$(t){return new Qi(t.readTime,t.key,-1)}class Qi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qi(le.min(),ie.empty(),-1)}static max(){return new Qi(le.max(),ie.empty(),-1)}}function D$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const L$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nc(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==L$)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function F$(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function rc(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Wv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wv.oe=-1;function Hf(t){return t==null}function zd(t){return t===0&&1/t==-1/0}function V$(t){return typeof t=="number"&&Number.isInteger(t)&&!zd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function T1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ek(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Je{constructor(e,n){this.comparator=e,this.root=n||Nt.EMPTY}insert(e,n){return new Je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new Je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xc(this.root,e,this.comparator,!0)}}class Xc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Nt.RED,this.left=i??Nt.EMPTY,this.right=s??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mt{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new I1(this.data.getIterator())}getIteratorFrom(e){return new I1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Mt(this.comparator);return n.data=e,n}}class I1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Cn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new Mt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return pa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class tk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tk("Invalid base64 string: "+s):s}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const U$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yi(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=U$.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
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
 */function qv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Hv(t){const e=t.mapValue.fields.__previous_value__;return qv(e)?Hv(e):e}function Au(t){const e=Yi(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
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
 */class j${constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ru{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ru("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ru&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function zs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qv(t)?4:$$(t)?9007199254740991:10:ae()}function Cr(t,e){if(t===e)return!0;const n=zs(t);if(n!==zs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Au(t).isEqual(Au(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Yi(i.timestampValue),a=Yi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return $s(i.bytesValue).isEqual($s(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?zd(o)===zd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return pa(t.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(T1(o)!==T1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Cr(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function ku(t,e){return(t.values||[]).find(n=>Cr(n,e))!==void 0}function ma(t,e){if(t===e)return 0;const n=zs(t),r=zs(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),l=ct(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return S1(t.timestampValue,e.timestampValue);case 4:return S1(Au(t),Au(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=$s(s),l=$s(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=xe(a[c],l[c]);if(h!==0)return h}return xe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(ct(s.latitude),ct(o.latitude));return a!==0?a:xe(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=ma(a[c],l[c]);if(h)return h}return xe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Jc.mapValue&&o===Jc.mapValue)return 0;if(s===Jc.mapValue)return 1;if(o===Jc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=xe(l[d],h[d]);if(p!==0)return p;const _=ma(a[l[d]],c[h[d]]);if(_!==0)return _}return xe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ae()}}function S1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Yi(t),r=Yi(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function ga(t){return g_(t)}function g_(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=g_(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${g_(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function __(t){return!!t&&"integerValue"in t}function Gv(t){return!!t&&"arrayValue"in t}function C1(t){return!!t&&"nullValue"in t}function x1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kh(t){return!!t&&"mapValue"in t}function Hl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hl(n)}setAll(e){let n=Dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Hl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new cn(Hl(this.value))}}function nk(t){const e=[];return Xs(t.fields,(n,r)=>{const i=new Dt([n]);if(kh(r)){const s=nk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Cn(e)}/**
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
 */class Yt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Yt(e,0,le.min(),le.min(),le.min(),cn.empty(),0)}static newFoundDocument(e,n,r,i){return new Yt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Yt(e,2,n,le.min(),le.min(),cn.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,le.min(),le.min(),cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bd{constructor(e,n){this.position=e,this.inclusive=n}}function A1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=ma(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function R1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wd{constructor(e,n="asc"){this.field=e,this.dir=n}}function z$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class rk{}class yt extends rk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new W$(e,n,r):n==="array-contains"?new G$(e,r):n==="in"?new K$(e,r):n==="not-in"?new Q$(e,r):n==="array-contains-any"?new Y$(e,r):new yt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new q$(e,r):new H$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ma(n,this.value)):n!==null&&zs(this.value)===zs(n)&&this.matchesComparison(ma(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xr extends rk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xr(e,n)}matches(e){return ik(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ik(t){return t.op==="and"}function sk(t){return B$(t)&&ik(t)}function B$(t){for(const e of t.filters)if(e instanceof xr)return!1;return!0}function y_(t){if(t instanceof yt)return t.field.canonicalString()+t.op.toString()+ga(t.value);if(sk(t))return t.filters.map(e=>y_(e)).join(",");{const e=t.filters.map(n=>y_(n)).join(",");return`${t.op}(${e})`}}function ok(t,e){return t instanceof yt?function(r,i){return i instanceof yt&&r.op===i.op&&r.field.isEqual(i.field)&&Cr(r.value,i.value)}(t,e):t instanceof xr?function(r,i){return i instanceof xr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ok(o,i.filters[a]),!0):!1}(t,e):void ae()}function ak(t){return t instanceof yt?function(n){return`${n.field.canonicalString()} ${n.op} ${ga(n.value)}`}(t):t instanceof xr?function(n){return n.op.toString()+" {"+n.getFilters().map(ak).join(" ,")+"}"}(t):"Filter"}class W$ extends yt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class q$ extends yt{constructor(e,n){super(e,"in",n),this.keys=lk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class H$ extends yt{constructor(e,n){super(e,"not-in",n),this.keys=lk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class G$ extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gv(n)&&ku(n.arrayValue,this.value)}}class K$ extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ku(this.value.arrayValue,n)}}class Q$ extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(ku(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ku(this.value.arrayValue,n)}}class Y$ extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ku(this.value.arrayValue,r))}}/**
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
 */class X${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function k1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new X$(t,e,n,r,i,s,o)}function Kv(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>y_(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ga(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ga(r)).join(",")),e.ue=n}return e.ue}function Qv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!z$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ok(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R1(t.startAt,e.startAt)&&R1(t.endAt,e.endAt)}function v_(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Gf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function J$(t,e,n,r,i,s,o,a){return new Gf(t,e,n,r,i,s,o,a)}function Kf(t){return new Gf(t)}function P1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Z$(t){return t.collectionGroup!==null}function Gl(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Mt(Dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Wd(s,r))}),n.has(Dt.keyField().canonicalString())||e.ce.push(new Wd(Dt.keyField(),r))}return e.ce}function vr(t){const e=ue(t);return e.le||(e.le=e9(e,Gl(t))),e.le}function e9(t,e){if(t.limitType==="F")return k1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wd(i.field,s)});const n=t.endAt?new Bd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bd(t.startAt.position,t.startAt.inclusive):null;return k1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function w_(t,e,n){return new Gf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qf(t,e){return Qv(vr(t),vr(e))&&t.limitType===e.limitType}function uk(t){return`${Kv(vr(t))}|lt:${t.limitType}`}function po(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ak(i)).join(", ")}]`),Hf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ga(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ga(i)).join(",")),`Target(${r})`}(vr(t))}; limitType=${t.limitType})`}function Yf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Gl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=A1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,Gl(r),i)||r.endAt&&!function(o,a,l){const c=A1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,Gl(r),i))}(t,e)}function t9(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ck(t){return(e,n)=>{let r=!1;for(const i of Gl(t)){const s=n9(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function n9(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ma(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
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
 */class Va{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ek(this.inner)}size(){return this.innerSize}}/**
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
 */const r9=new Je(ie.comparator);function ri(){return r9}const hk=new Je(ie.comparator);function Al(...t){let e=hk;for(const n of t)e=e.insert(n.key,n);return e}function dk(t){let e=hk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ws(){return Kl()}function fk(){return Kl()}function Kl(){return new Va(t=>t.toString(),(t,e)=>t.isEqual(e))}const i9=new Je(ie.comparator),s9=new Mt(ie.comparator);function ge(...t){let e=s9;for(const n of t)e=e.add(n);return e}const o9=new Mt(xe);function a9(){return o9}/**
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
 */function pk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zd(e)?"-0":e}}function mk(t){return{integerValue:""+t}}function l9(t,e){return V$(e)?mk(e):pk(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Xf{constructor(){this._=void 0}}function u9(t,e,n){return t instanceof qd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qv(s)&&(s=Hv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof _a?_k(t,e):t instanceof Pu?yk(t,e):function(i,s){const o=gk(i,s),a=b1(o)+b1(i.Pe);return __(o)&&__(i.Pe)?mk(a):pk(i.serializer,a)}(t,e)}function c9(t,e,n){return t instanceof _a?_k(t,e):t instanceof Pu?yk(t,e):n}function gk(t,e){return t instanceof Hd?function(r){return __(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class qd extends Xf{}class _a extends Xf{constructor(e){super(),this.elements=e}}function _k(t,e){const n=vk(e);for(const r of t.elements)n.some(i=>Cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Pu extends Xf{constructor(e){super(),this.elements=e}}function yk(t,e){let n=vk(e);for(const r of t.elements)n=n.filter(i=>!Cr(i,r));return{arrayValue:{values:n}}}class Hd extends Xf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function b1(t){return ct(t.integerValue||t.doubleValue)}function vk(t){return Gv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class h9{constructor(e,n){this.field=e,this.transform=n}}function d9(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof _a&&i instanceof _a||r instanceof Pu&&i instanceof Pu?pa(r.elements,i.elements,Cr):r instanceof Hd&&i instanceof Hd?Cr(r.Pe,i.Pe):r instanceof qd&&i instanceof qd}(t.transform,e.transform)}class f9{constructor(e,n){this.version=e,this.transformResults=n}}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ph(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jf{}function wk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tk(t.key,wr.none()):new ic(t.key,t.data,wr.none());{const n=t.data,r=cn.empty();let i=new Mt(Dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new rs(t.key,r,new Cn(i.toArray()),wr.none())}}function p9(t,e,n){t instanceof ic?function(i,s,o){const a=i.value.clone(),l=O1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof rs?function(i,s,o){if(!Ph(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=O1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ek(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ql(t,e,n,r){return t instanceof ic?function(s,o,a,l){if(!Ph(s.precondition,o))return a;const c=s.value.clone(),h=D1(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof rs?function(s,o,a,l){if(!Ph(s.precondition,o))return a;const c=D1(s.fieldTransforms,l,o),h=o.data;return h.setAll(Ek(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Ph(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function m9(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=gk(r.transform,i||null);s!=null&&(n===null&&(n=cn.empty()),n.set(r.field,s))}return n||null}function N1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&pa(r,i,(s,o)=>d9(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ic extends Jf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rs extends Jf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ek(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function O1(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,c9(o,a,n[i]))}return r}function D1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,u9(s,o,e))}return r}class Tk extends Jf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class g9 extends Jf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class _9{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&p9(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ql(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ql(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=wk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&pa(this.mutations,e.mutations,(n,r)=>N1(n,r))&&pa(this.baseMutations,e.baseMutations,(n,r)=>N1(n,r))}}class Yv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ue(e.mutations.length===r.length);let i=function(){return i9}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yv(e,n,r,i)}}/**
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
 */class y9{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class v9{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ut,we;function w9(t){switch(t){default:return ae();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function Ik(t){if(t===void 0)return ni("GRPC error has no .code"),z.UNKNOWN;switch(t){case ut.OK:return z.OK;case ut.CANCELLED:return z.CANCELLED;case ut.UNKNOWN:return z.UNKNOWN;case ut.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ut.INTERNAL:return z.INTERNAL;case ut.UNAVAILABLE:return z.UNAVAILABLE;case ut.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ut.NOT_FOUND:return z.NOT_FOUND;case ut.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ut.ABORTED:return z.ABORTED;case ut.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ut.DATA_LOSS:return z.DATA_LOSS;default:return ae()}}(we=ut||(ut={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function E9(){return new TextEncoder}/**
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
 */const T9=new As([4294967295,4294967295],0);function L1(t){const e=E9().encode(t),n=new qR;return n.update(e),new Uint8Array(n.digest())}function M1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new As([n,r],0),new As([i,s],0)]}class Xv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Rl(`Invalid padding: ${n}`);if(r<0)throw new Rl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Rl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=As.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(As.fromNumber(r)));return i.compare(T9)===1&&(i=new As([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=L1(e),[r,i]=M1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=L1(e),[r,i]=M1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Rl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Zf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,sc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zf(le.min(),i,new Je(xe),ri(),ge())}}class sc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sc(r,n,ge(),ge(),ge())}}/**
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
 */class bh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Sk{constructor(e,n){this.targetId=e,this.me=n}}class Ck{constructor(e,n,r=Jt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class F1{constructor(){this.fe=0,this.ge=U1(),this.pe=Jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new sc(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=U1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class I9{constructor(e){this.Le=e,this.Be=new Map,this.ke=ri(),this.qe=V1(),this.Qe=new Je(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(v_(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,Yt.newNoDocument(o,le.min()))}else Ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=$s(r).toUint8Array()}catch(l){if(l instanceof tk)return fa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Xv(o,i,s)}catch(l){return fa(l instanceof Rl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&v_(a.target)){const l=new ie(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Yt.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ge();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Zf(e,n,this.Qe,this.ke,r);return this.ke=ri(),this.qe=V1(),this.Qe=new Je(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new F1,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Mt(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new F1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function V1(){return new Je(ie.comparator)}function U1(){return new Je(ie.comparator)}const S9=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),C9=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),x9=(()=>({and:"AND",or:"OR"}))();class A9{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function E_(t,e){return t.useProto3Json||Hf(e)?e:{value:e}}function Gd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function R9(t,e){return Gd(t,e.toTimestamp())}function Er(t){return Ue(!!t),le.fromTimestamp(function(n){const r=Yi(n);return new wt(r.seconds,r.nanos)}(t))}function Jv(t,e){return T_(t,e).canonicalString()}function T_(t,e){const n=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ak(t){const e=nt.fromString(t);return Ue(Nk(e)),e}function I_(t,e){return Jv(t.databaseId,e.path)}function km(t,e){const n=Ak(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(kk(n))}function Rk(t,e){return Jv(t.databaseId,e)}function k9(t){const e=Ak(t);return e.length===4?nt.emptyPath():kk(e)}function S_(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kk(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function j1(t,e,n){return{name:I_(t,e),fields:n.value.mapValue.fields}}function P9(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ue(h===void 0||typeof h=="string"),Jt.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Jt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?z.UNKNOWN:Ik(c.code);return new ne(h,c.message||"")}(o);n=new Ck(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=km(t,r.document.name),s=Er(r.document.updateTime),o=r.document.createTime?Er(r.document.createTime):le.min(),a=new cn({mapValue:{fields:r.document.fields}}),l=Yt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new bh(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=km(t,r.document),s=r.readTime?Er(r.readTime):le.min(),o=Yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=km(t,r.document),s=r.removedTargetIds||[];n=new bh([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new v9(i,s),a=r.targetId;n=new Sk(a,o)}}return n}function b9(t,e){let n;if(e instanceof ic)n={update:j1(t,e.key,e.value)};else if(e instanceof Tk)n={delete:I_(t,e.key)};else if(e instanceof rs)n={update:j1(t,e.key,e.data),updateMask:j9(e.fieldMask)};else{if(!(e instanceof g9))return ae();n={verify:I_(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof qd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _a)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:R9(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function N9(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Er(i.updateTime):Er(s);return o.isEqual(le.min())&&(o=Er(s)),new f9(o,i.transformResults||[])}(n,e))):[]}function O9(t,e){return{documents:[Rk(t,e.path)]}}function D9(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rk(t,i);const s=function(c){if(c.length!==0)return bk(xr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:mo(p.field),direction:F9(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=E_(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function L9(t){let e=k9(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=Pk(d);return p instanceof xr&&sk(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(v){return new Wd(go(v.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Hf(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,_=d.values||[];return new Bd(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,_=d.values||[];return new Bd(_,p)}(n.endAt)),J$(e,i,o,s,a,"F",l,c)}function M9(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=go(n.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=go(n.unaryFilter.field);return yt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=go(n.unaryFilter.field);return yt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=go(n.unaryFilter.field);return yt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return yt.create(go(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xr.create(n.compositeFilter.filters.map(r=>Pk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function F9(t){return S9[t]}function V9(t){return C9[t]}function U9(t){return x9[t]}function mo(t){return{fieldPath:t.canonicalString()}}function go(t){return Dt.fromServerFormat(t.fieldPath)}function bk(t){return t instanceof yt?function(n){if(n.op==="=="){if(x1(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NAN"}};if(C1(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(x1(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NAN"}};if(C1(n.value))return{unaryFilter:{field:mo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mo(n.field),op:V9(n.op),value:n.value}}}(t):t instanceof xr?function(n){const r=n.getFilters().map(i=>bk(i));return r.length===1?r[0]:{compositeFilter:{op:U9(n.op),filters:r}}}(t):ae()}function j9(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ki{constructor(e,n,r,i,s=le.min(),o=le.min(),a=Jt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ki(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ki(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $9{constructor(e){this.ct=e}}function z9(t){const e=L9({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?w_(e,e.limit,"L"):e}/**
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
 */class B9{constructor(){this._n=new W9}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Qi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Qi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class W9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Mt(nt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Mt(nt.comparator)).toArray()}}/**
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
 */class ya{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ya(0)}static Ln(){return new ya(-1)}}/**
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
 */class q9{constructor(){this.changes=new Va(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class H9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class G9{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ql(r.mutation,i,Cn.empty(),wt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=ws();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Al();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ws();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ri();const o=Kl(),a=function(){return Kl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof rs)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ql(h.mutation,c,h.mutation.getFieldMask(),wt.now())):o.set(c.key,Cn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var d;return a.set(c,new H9(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Kl();let i=new Je((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Cn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const d=(i.get(a.batchId)||ge()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=fk();h.forEach(p=>{if(!s.has(p)){const _=wk(n.get(p),r.get(p));_!==null&&d.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Z$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(ws());let a=-1,l=s;return o.next(c=>$.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ge())).next(h=>({batchId:a,changes:dk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=Al();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Al();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,l=>{const c=function(d,p){return new Gf(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Yt.newInvalidDocument(h)))});let a=Al();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Ql(h.mutation,c,Cn.empty(),wt.now()),Yf(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class K9{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Er(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:z9(i.bundledQuery),readTime:Er(i.readTime)}}(n)),$.resolve()}}/**
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
 */class Q9{constructor(){this.overlays=new Je(ie.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ws();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=ws(),s=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ws(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ws(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y9(n,r));let s=this.hr.get(n);s===void 0&&(s=ge(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class Zv{constructor(){this.Pr=new Mt(St.Ir),this.Tr=new Mt(St.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new St(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new St(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new ie(new nt([])),r=new St(n,e),i=new St(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new ie(new nt([])),r=new St(n,e),i=new St(n,e+1);let s=ge();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new St(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class St{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return ie.comparator(e.key,n.key)||xe(e.pr,n.pr)}static Er(e,n){return xe(e.pr,n.pr)||ie.comparator(e.key,n.key)}}/**
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
 */class Y9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Mt(St.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new _9(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new St(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new St(n,0),i=new St(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Mt(xe);return n.forEach(i=>{const s=new St(i,0),o=new St(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new St(new ie(s),0);let a=new Mt(xe);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),$.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new St(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new St(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class X9{constructor(e){this.vr=e,this.docs=function(){return new Je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let r=ri();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Yt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ri();const o=n.path,a=new ie(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||D$(O$(h),r)<=0||(i.has(h.key)||Yf(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new J9(this)}getSize(e){return $.resolve(this.size)}}class J9 extends q9{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Z9{constructor(e){this.persistence=e,this.Mr=new Va(n=>Kv(n),Qv),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Zv,this.targetCount=0,this.Lr=ya.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ya(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
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
 */class e5{constructor(e,n){this.Br={},this.overlays={},this.kr=new Wv(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Z9(this),this.indexManager=new B9,this.remoteDocumentCache=function(i){return new X9(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $9(n),this.$r=new K9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Q9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Y9(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new t5(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class t5 extends M${constructor(e){super(),this.currentSequenceNumber=e}}class e0{constructor(e){this.persistence=e,this.zr=new Zv,this.jr=null}static Hr(e){return new e0(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=ie.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class t0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new t0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class n5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class r5{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return OM()?8:F$(Vt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new n5;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(ml()<=me.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",po(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(ml()<=me.DEBUG&&J("QueryEngine","Query:",po(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(ml()<=me.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",po(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vr(n))):$.resolve())}ji(e,n){if(P1(n))return $.resolve(null);let r=vr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=w_(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,w_(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return P1(n)||i.isEqual(le.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?$.resolve(null):(ml()<=me.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),po(n)),this.es(e,o,n,N$(i,-1)).next(a=>a))})}Zi(e,n){let r=new Mt(ck(e));return n.forEach((i,s)=>{Yf(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return ml()<=me.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",po(n)),this.zi.getDocumentsMatchingQuery(e,n,Qi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class i5{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Je(xe),this.rs=new Va(s=>Kv(s),Qv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G9(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function s5(t,e,n,r){return new i5(t,e,n,r)}async function Ok(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ge();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function o5(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,p=d.keys();let _=$.resolve();return p.forEach(v=>{_=_.next(()=>h.getEntry(l,v)).next(I=>{const R=c.docVersions.get(v);Ue(R!==null),I.version.compareTo(R)<0&&(d.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),h.addEntry(I)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Dk(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function a5(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,d)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(Jt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(d,_),function(I,R,T){return I.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(p,_,h)&&a.push(n.Qr.updateTargetData(s,_))});let l=ri(),c=ge();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(l5(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(le.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function l5(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ri();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function u5(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function c5(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ki(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function C_(t,e,n){const r=ue(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rc(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function $1(t,e,n){const r=ue(t);let i=le.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const d=ue(l),p=d.rs.get(h);return p!==void 0?$.resolve(d.ns.get(p)):d.Qr.getTargetData(c,h)}(r,o,vr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:ge())).next(a=>(h5(r,t9(e),a),{documents:a,hs:s})))}function h5(t,e,n){let r=t.ss.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class z1{constructor(){this.activeTargetIds=a9()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class d5{constructor(){this.no=new z1,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new z1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class f5{io(e){}shutdown(){}}/**
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
 */class B1{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Zc=null;function Pm(){return Zc===null?Zc=function(){return 268435456+Math.round(2147483648*Math.random())}():Zc++,"0x"+Zc.toString(16)}/**
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
 */const p5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class m5{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Wt="WebChannelConnection";class g5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Pm(),l=this.vo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(J("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw fa("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=p5[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Pm();return new Promise((o,a)=>{const l=new HR;l.setWithCredentials(!0),l.listenOnce(KR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Rh.NO_ERROR:const h=l.getResponseJson();J(Wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Rh.TIMEOUT:J(Wt,`RPC '${e}' ${s} timed out`),a(new ne(z.DEADLINE_EXCEEDED,"Request time out"));break;case Rh.HTTP_ERROR:const d=l.getStatus();if(J(Wt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const v=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(T)>=0?T:z.UNKNOWN}(_.status);a(new ne(v,_.message))}else a(new ne(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ne(z.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{J(Wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);J(Wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Pm(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XR(),a=YR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new GR({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");J(Wt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,_=!1;const v=new m5({lo:R=>{_?J(Wt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(p||(J(Wt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),J(Wt,`RPC '${e}' stream ${i} sending:`,R),d.send(R))},ho:()=>d.close()}),I=(R,T,g)=>{R.listen(T,S=>{try{g(S)}catch(O){setTimeout(()=>{throw O},0)}})};return I(d,xl.EventType.OPEN,()=>{_||(J(Wt,`RPC '${e}' stream ${i} transport opened.`),v.mo())}),I(d,xl.EventType.CLOSE,()=>{_||(_=!0,J(Wt,`RPC '${e}' stream ${i} transport closed`),v.po())}),I(d,xl.EventType.ERROR,R=>{_||(_=!0,fa(Wt,`RPC '${e}' stream ${i} transport errored:`,R),v.po(new ne(z.UNAVAILABLE,"The operation could not be completed")))}),I(d,xl.EventType.MESSAGE,R=>{var T;if(!_){const g=R.data[0];Ue(!!g);const S=g,O=S.error||((T=S[0])===null||T===void 0?void 0:T.error);if(O){J(Wt,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let V=function(C){const A=ut[C];if(A!==void 0)return Ik(A)}(L),w=O.message;V===void 0&&(V=z.INTERNAL,w="Unknown error status: "+L+" with message "+O.message),_=!0,v.po(new ne(V,w)),d.close()}else J(Wt,`RPC '${e}' stream ${i} received:`,g),v.yo(g)}}),I(a,QR.STAT_EVENT,R=>{R.stat===m_.PROXY?J(Wt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===m_.NOPROXY&&J(Wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function bm(){return typeof document<"u"?document:null}/**
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
 */function ep(t){return new A9(t,!0)}/**
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
 */class Lk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Mk{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Lk(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(ni(n.toString()),ni("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ne(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class _5 extends Mk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=P9(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?Er(o.readTime):le.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=S_(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=v_(l)?{documents:O9(s,l)}:{query:D9(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xk(s,o.resumeToken);const c=E_(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=Gd(s,o.snapshotVersion.toTimestamp());const c=E_(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=M9(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=S_(this.serializer),n.removeTarget=e,this.i_(n)}}class y5 extends Mk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=N9(e.writeResults,e.commitTime),r=Er(e.commitTime);return this.listener.A_(r,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=S_(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>b9(this.serializer,r))};this.i_(n)}}/**
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
 */class v5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,T_(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ne(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,T_(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class w5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ni(n),this.y_=!1):J("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class E5{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Js(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.M_.add(4),await oc(c),c.N_.set("Unknown"),c.M_.delete(4),await tp(c)}(this))})}),this.N_=new w5(r,i)}}async function tp(t){if(Js(t))for(const e of t.x_)await e(!0)}async function oc(t){for(const e of t.x_)await e(!1)}function Fk(t,e){const n=ue(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),s0(n)?i0(n):Ua(n).Xo()&&r0(n,e))}function n0(t,e){const n=ue(t),r=Ua(n);n.F_.delete(e),r.Xo()&&Vk(n,e),n.F_.size===0&&(r.Xo()?r.n_():Js(n)&&n.N_.set("Unknown"))}function r0(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ua(t).P_(e)}function Vk(t,e){t.L_.xe(e),Ua(t).I_(e)}function i0(t){t.L_=new I9({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ua(t).start(),t.N_.w_()}function s0(t){return Js(t)&&!Ua(t).Zo()&&t.F_.size>0}function Js(t){return ue(t).M_.size===0}function Uk(t){t.L_=void 0}async function T5(t){t.N_.set("Online")}async function I5(t){t.F_.forEach((e,n)=>{r0(t,e)})}async function S5(t,e){Uk(t),s0(t)?(t.N_.D_(e),i0(t)):t.N_.set("Unknown")}async function C5(t,e,n){if(t.N_.set("Online"),e instanceof Ck&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kd(t,r)}else if(e instanceof bh?t.L_.Ke(e):e instanceof Sk?t.L_.He(e):t.L_.We(e),!n.isEqual(le.min()))try{const r=await Dk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(Jt.EMPTY_BYTE_STRING,h.snapshotVersion)),Vk(s,l);const d=new ki(h.target,l,c,h.sequenceNumber);r0(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Kd(t,r)}}async function Kd(t,e,n){if(!rc(e))throw e;t.M_.add(1),await oc(t),t.N_.set("Offline"),n||(n=()=>Dk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await tp(t)})}function jk(t,e){return e().catch(n=>Kd(t,n,e))}async function np(t){const e=ue(t),n=Xi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;x5(e);)try{const i=await u5(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,A5(e,i)}catch(i){await Kd(e,i)}$k(e)&&zk(e)}function x5(t){return Js(t)&&t.v_.length<10}function A5(t,e){t.v_.push(e);const n=Xi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function $k(t){return Js(t)&&!Xi(t).Zo()&&t.v_.length>0}function zk(t){Xi(t).start()}async function R5(t){Xi(t).V_()}async function k5(t){const e=Xi(t);for(const n of t.v_)e.d_(n.mutations)}async function P5(t,e,n){const r=t.v_.shift(),i=Yv.from(r,e,n);await jk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await np(t)}async function b5(t,e){e&&Xi(t).E_&&await async function(r,i){if(function(o){return w9(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();Xi(r).t_(),await jk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await np(r)}}(t,e),$k(t)&&zk(t)}async function W1(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Js(n);n.M_.add(3),await oc(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await tp(n)}async function N5(t,e){const n=ue(t);e?(n.M_.delete(2),await tp(n)):e||(n.M_.add(2),await oc(n),n.N_.set("Unknown"))}function Ua(t){return t.B_||(t.B_=function(n,r,i){const s=ue(n);return s.f_(),new _5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:T5.bind(null,t),To:I5.bind(null,t),Ao:S5.bind(null,t),h_:C5.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),s0(t)?i0(t):t.N_.set("Unknown")):(await t.B_.stop(),Uk(t))})),t.B_}function Xi(t){return t.k_||(t.k_=function(n,r,i){const s=ue(n);return s.f_(),new y5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:R5.bind(null,t),Ao:b5.bind(null,t),R_:k5.bind(null,t),A_:P5.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await np(t)):(await t.k_.stop(),t.v_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class o0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new o0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a0(t,e){if(ni("AsyncQueue",`${e}: ${t}`),rc(t))return new ne(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ko{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=Al(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Ko(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ko)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ko;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class q1{constructor(){this.q_=new Je(ie.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ae():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class va{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new va(e,n,Ko.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class O5{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class D5{constructor(){this.queries=new Va(e=>uk(e),Qf),this.onlineState="Unknown",this.z_=new Set}}async function Bk(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new O5,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=a0(o,`Initialization of query '${po(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&l0(n)}async function Wk(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function L5(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&l0(n)}function M5(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function l0(t){t.z_.forEach(e=>{e.next()})}var x_,H1;(H1=x_||(x_={})).J_="default",H1.Cache="cache";class qk{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new va(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=va.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==x_.Cache}}/**
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
 */class Hk{constructor(e){this.key=e}}class Gk{constructor(e){this.key=e}}class F5{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=ck(e),this.Ta=new Ko(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new q1,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),_=Yf(this.query,d)?d:null,v=!!p&&this.mutatedKeys.has(p.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;p&&_?p.data.isEqual(_.data)?v!==I&&(r.track({type:3,doc:_}),R=!0):this.Ra(p,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.Ia(_,l)>0||c&&this.Ia(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),R=!0):p&&!_&&(r.track({type:1,doc:p}),R=!0,(l||c)&&(a=!0)),R&&(_?(o=o.add(_),s=I?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,d)=>function(_,v){const I=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return I(_)-I(v)}(h.type,d.type)||this.Ia(h.doc,d.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new va(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new q1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Gk(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Hk(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return va.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class V5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class U5{constructor(e){this.key=e,this.wa=!1}}class j5{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Va(a=>uk(a),Qf),this.Da=new Map,this.Ca=new Set,this.va=new Je(ie.comparator),this.Fa=new Map,this.Ma=new Zv,this.xa={},this.Oa=new Map,this.Na=ya.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function $5(t,e,n=!0){const r=Zk(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Kk(r,e,n,!0),i}async function z5(t,e){const n=Zk(t);await Kk(n,e,!0,!1)}async function Kk(t,e,n,r){const i=await c5(t.localStore,vr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await B5(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Fk(t.remoteStore,i),a}async function B5(t,e,n,r,i){t.Ba=(d,p,_)=>async function(I,R,T,g){let S=R.view.da(T);S.Xi&&(S=await $1(I.localStore,R.query,!1).then(({documents:w})=>R.view.da(w,S)));const O=g&&g.targetChanges.get(R.targetId),L=g&&g.targetMismatches.get(R.targetId)!=null,V=R.view.applyChanges(S,I.isPrimaryClient,O,L);return K1(I,R.targetId,V.fa),V.snapshot}(t,d,p,_);const s=await $1(t.localStore,e,!0),o=new F5(e,s.hs),a=o.da(s.documents),l=sc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);K1(t,n,c.fa);const h=new V5(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function W5(t,e,n){const r=ue(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Qf(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await C_(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&n0(r.remoteStore,i.targetId),A_(r,i.targetId)}).catch(nc)):(A_(r,i.targetId),await C_(r.localStore,i.targetId,!0))}async function q5(t,e){const n=ue(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),n0(n.remoteStore,r.targetId))}async function H5(t,e,n){const r=Z5(t);try{const i=await function(o,a){const l=ue(o),c=wt.now(),h=a.reduce((_,v)=>_.add(v.key),ge());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let v=ri(),I=ge();return l.os.getEntries(_,h).next(R=>{v=R,v.forEach((T,g)=>{g.isValidDocument()||(I=I.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,v)).next(R=>{d=R;const T=[];for(const g of a){const S=m9(g,d.get(g.key).overlayedDocument);S!=null&&T.push(new rs(g.key,S,nk(S.value.mapValue),wr.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,T,a)}).next(R=>{p=R;const T=R.applyToLocalDocumentSet(d,I);return l.documentOverlayCache.saveOverlays(_,R.batchId,T)})}).then(()=>({batchId:p.batchId,changes:dk(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Je(xe)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ac(r,i.changes),await np(r.remoteStore)}catch(i){const s=a0(i,"Failed to persist write");n.reject(s)}}async function Qk(t,e){const n=ue(t);try{const r=await a5(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ue(o.wa):i.removedDocuments.size>0&&(Ue(o.wa),o.wa=!1))}),await ac(n,r,e)}catch(r){await nc(r)}}function G1(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const p of d.U_)p.j_(a)&&(c=!0)}),c&&l0(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function G5(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Je(ie.comparator);o=o.insert(s,Yt.newNoDocument(s,le.min()));const a=ge().add(s),l=new Zf(le.min(),new Map,new Je(xe),o,a);await Qk(r,l),r.va=r.va.remove(s),r.Fa.delete(e),u0(r)}else await C_(r.localStore,e,!1).then(()=>A_(r,e,n)).catch(nc)}async function K5(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await o5(n.localStore,e);Xk(n,r,null),Yk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ac(n,i)}catch(i){await nc(i)}}async function Q5(t,e,n){const r=ue(t);try{const i=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(Ue(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);Xk(r,e,n),Yk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ac(r,i)}catch(i){await nc(i)}}function Yk(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Xk(t,e,n){const r=ue(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function A_(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Jk(t,r)})}function Jk(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(n0(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),u0(t))}function K1(t,e,n){for(const r of n)r instanceof Hk?(t.Ma.addReference(r.key,e),Y5(t,r)):r instanceof Gk?(J("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Jk(t,r.key)):ae()}function Y5(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(J("SyncEngine","New document in limbo: "+n),t.Ca.add(r),u0(t))}function u0(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ie(nt.fromString(e)),r=t.Na.next();t.Fa.set(r,new U5(n)),t.va=t.va.insert(n,r),Fk(t.remoteStore,new ki(vr(Kf(n.path)),r,"TargetPurposeLimboResolution",Wv.oe))}}async function ac(t,e,n){const r=ue(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=t0.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=ue(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(c,p=>$.forEach(p.qi,_=>h.persistence.referenceDelegate.addReference(d,p.targetId,_)).next(()=>$.forEach(p.Qi,_=>h.persistence.referenceDelegate.removeReference(d,p.targetId,_)))))}catch(d){if(!rc(d))throw d;J("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const _=h.ns.get(p),v=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(v);h.ns=h.ns.insert(p,I)}}}(r.localStore,s))}async function X5(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await Ok(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new ne(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ac(n,r.us)}}function J5(t,e){const n=ue(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function Zk(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=J5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=G5.bind(null,e),e.Sa.h_=L5.bind(null,e.eventManager),e.Sa.ka=M5.bind(null,e.eventManager),e}function Z5(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=K5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Q5.bind(null,e),e}class Q1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ep(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return s5(this.persistence,new r5,e.initialUser,this.serializer)}createPersistence(e){return new e5(e0.Hr,this.serializer)}createSharedClientState(e){return new d5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class e6{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>G1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=X5.bind(null,this.syncEngine),await N5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new D5}()}createDatastore(e){const n=ep(e.databaseInfo.databaseId),r=function(s){return new g5(s)}(e.databaseInfo);return function(s,o,a,l){return new v5(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new E5(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>G1(this.syncEngine,n,0),function(){return B1.D()?new B1:new f5}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const d=new j5(i,s,o,a,l,c);return h&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ue(r);J("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await oc(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class eP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ni("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class t6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ht.UNAUTHENTICATED,this.clientId=ZR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ne(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=a0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nm(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ok(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Y1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await r6(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>W1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>W1(e.remoteStore,i)),t._onlineComponents=e}function n6(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function r6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!n6(n))throw n;fa("Error using user provided cache. Falling back to memory cache: "+n),await Nm(t,new Q1)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Nm(t,new Q1);return t._offlineComponents}async function tP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Y1(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Y1(t,new e6))),t._onlineComponents}function i6(t){return tP(t).then(e=>e.syncEngine)}async function R_(t){const e=await tP(t),n=e.eventManager;return n.onListen=$5.bind(null,e.syncEngine),n.onUnlisten=W5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=z5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=q5.bind(null,e.syncEngine),n}function s6(t,e,n={}){const r=new Bi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new eP({next:p=>{o.enqueueAndForget(()=>Wk(s,d));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new ne(z.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&l&&l.source==="server"?c.reject(new ne(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new qk(Kf(a.path),h,{includeMetadataChanges:!0,ra:!0});return Bk(s,d)}(await R_(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function nP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const X1=new Map;/**
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
 */function o6(t,e,n){if(!n)throw new ne(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function a6(t,e,n,r){if(e===!0&&r===!0)throw new ne(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function J1(t){if(!ie.isDocumentKey(t))throw new ne(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function c0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=c0(t);throw new ne(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Z1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}a6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ne(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class h0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ne(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ne(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new I$;switch(r.type){case"firstParty":return new A$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=X1.get(n);r&&(J("ComponentProvider","Removing Datastore"),X1.delete(n),r.terminate())}(this),Promise.resolve()}}function l6(t,e,n,r={}){var i;const s=(t=Tr(t,h0))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ht.MOCK_USER;else{a=nv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ne(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ht(c)}t._authCredentials=new S$(new JR(a,l))}}/**
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
 */class rp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rp(this.firestore,e,this._query)}}class _n{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class bu extends rp{constructor(e,n,r){super(e,n,Kf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new ie(e))}withConverter(e){return new bu(this.firestore,e,this._path)}}function Qd(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=ZR.newId()),o6("doc","path",e),t instanceof h0){const r=nt.fromString(e,...n);return J1(r),new _n(t,null,new ie(r))}{if(!(t instanceof _n||t instanceof bu))throw new ne(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return J1(r),new _n(t.firestore,t instanceof bu?t.converter:null,new ie(r))}}/**
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
 */class u6{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Lk(this,"async_queue_retry"),this.hu=()=>{const n=bm();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=bm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=bm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Bi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!rc(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ni("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=o0.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ae()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function eI(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class wa extends h0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new u6}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rP(this),this._firestoreClient.terminate()}}function c6(t,e){const n=typeof t=="object"?t:Df(),r=typeof t=="string"?t:e||"(default)",i=qu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ev("firestore");s&&l6(i,...s)}return i}function d0(t){return t._firestoreClient||rP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new j$(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,nP(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new t6(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ea{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ea(Jt.fromBase64String(e))}catch(n){throw new ne(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ea(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ip{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sp{constructor(e){this._methodName=e}}/**
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
 */class f0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */const h6=/^__.*__$/;class d6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rs(e,this.data,this.fieldMask,n,this.fieldTransforms):new ic(e,this.data,n,this.fieldTransforms)}}class iP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class op{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Yd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(sP(this.fu)&&h6.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class f6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ep(e)}Fu(e,n,r,i=!1){return new op({fu:e,methodName:n,vu:r,path:Dt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oP(t){const e=t._freezeSettings(),n=ep(t._databaseId);return new f6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function p6(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);m0("Data must be an object, but it was:",o,r);const a=aP(r,o);let l,c;if(s.merge)l=new Cn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=k_(e,d,n);if(!o.contains(p))throw new ne(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uP(h,p)||h.push(p)}l=new Cn(h),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new d6(new cn(a),l,c)}class ap extends sp{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ap}}function m6(t,e,n){return new op({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class p0 extends sp{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=m6(this,e,!0),r=this.Mu.map(s=>lc(s,n)),i=new _a(r);return new h9(e.path,i)}isEqual(e){return e instanceof p0&&gu(this.Mu,e.Mu)}}function g6(t,e,n,r){const i=t.Fu(1,e,n);m0("Data must be an object, but it was:",i,r);const s=[],o=cn.empty();Xs(r,(l,c)=>{const h=g0(e,l,n);c=Xe(c);const d=i.Su(h);if(c instanceof ap)s.push(h);else{const p=lc(c,d);p!=null&&(s.push(h),o.set(h,p))}});const a=new Cn(s);return new iP(o,a,i.fieldTransforms)}function _6(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[k_(e,r,n)],l=[i];if(s.length%2!=0)throw new ne(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(k_(e,s[p])),l.push(s[p+1]);const c=[],h=cn.empty();for(let p=a.length-1;p>=0;--p)if(!uP(c,a[p])){const _=a[p];let v=l[p];v=Xe(v);const I=o.Su(_);if(v instanceof ap)c.push(_);else{const R=lc(v,I);R!=null&&(c.push(_),h.set(_,R))}}const d=new Cn(c);return new iP(h,d,o.fieldTransforms)}function lc(t,e){if(lP(t=Xe(t)))return m0("Unsupported field value:",e,t),aP(t,e);if(t instanceof sp)return function(r,i){if(!sP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=lc(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return l9(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=wt.fromDate(r);return{timestampValue:Gd(i.serializer,s)}}if(r instanceof wt){const s=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gd(i.serializer,s)}}if(r instanceof f0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ea)return{bytesValue:xk(i.serializer,r._byteString)};if(r instanceof _n){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${c0(r)}`)}(t,e)}function aP(t,e){const n={};return ek(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xs(t,(r,i)=>{const s=lc(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof f0||t instanceof Ea||t instanceof _n||t instanceof sp)}function m0(t,e,n){if(!lP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=c0(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function k_(t,e,n){if((e=Xe(e))instanceof ip)return e._internalPath;if(typeof e=="string")return g0(t,e);throw Yd("Field path arguments must be of type string or ",t,!1,void 0,n)}const y6=new RegExp("[~\\*/\\[\\]]");function g0(t,e,n){if(e.search(y6)>=0)throw Yd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ip(...e.split("."))._internalPath}catch{throw Yd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ne(z.INVALID_ARGUMENT,a+t+l)}function uP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cP{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new v6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hP("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class v6 extends cP{data(){return super.data()}}function hP(t,e){return typeof e=="string"?g0(t,e):e instanceof ip?e._internalPath:e._delegate._internalPath}/**
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
 */function w6(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class E6{convertValue(e,n="none"){switch(zs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new f0(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Hv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Au(e));default:return null}}convertTimestamp(e){const n=Yi(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=nt.fromString(e);Ue(Nk(r));const i=new Ru(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||ni(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function T6(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class kl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dP extends cP{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hP("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Nh extends dP{data(e={}){return super.data(e)}}class I6{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new kl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nh(this._firestore,this._userDataWriter,r.key,r,new kl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Nh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new kl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Nh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new kl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:S6(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function S6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
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
 */function tI(t){t=Tr(t,_n);const e=Tr(t.firestore,wa);return s6(d0(e),t._key).then(n=>mP(e,t,n))}class fP extends E6{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ea(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function C6(t,e,n){t=Tr(t,_n);const r=Tr(t.firestore,wa),i=T6(t.converter,e,n);return pP(r,[p6(oP(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wr.none())])}function nI(t,e,n,...r){t=Tr(t,_n);const i=Tr(t.firestore,wa),s=oP(i);let o;return o=typeof(e=Xe(e))=="string"||e instanceof ip?_6(s,"updateDoc",t._key,e,n,r):g6(s,"updateDoc",t._key,e),pP(i,[o.toMutation(t._key,wr.exists(!0))])}function x6(t,...e){var n,r,i;t=Xe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||eI(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(eI(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,c,h;if(t instanceof _n)c=Tr(t.firestore,wa),h=Kf(t._key.path),l={next:d=>{e[o]&&e[o](mP(c,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Tr(t,rp);c=Tr(d.firestore,wa),h=d._query;const p=new fP(c);l={next:_=>{e[o]&&e[o](new I6(c,p,d,_))},error:e[o+1],complete:e[o+2]},w6(t._query)}return function(p,_,v,I){const R=new eP(I),T=new qk(_,R,v);return p.asyncQueue.enqueueAndForget(async()=>Bk(await R_(p),T)),()=>{R.$a(),p.asyncQueue.enqueueAndForget(async()=>Wk(await R_(p),T))}}(d0(c),h,a,l)}function pP(t,e){return function(r,i){const s=new Bi;return r.asyncQueue.enqueueAndForget(async()=>H5(await i6(r),i,s)),s.promise}(d0(t),e)}function mP(t,e,n){const r=n.docs.get(e._key),i=new fP(t);return new dP(t,i,e._key,r,new kl(n.hasPendingWrites,n.fromCache),e.converter)}function A6(...t){return new p0("arrayUnion",t)}(function(e,n=!0){(function(i){Fa=i})(ts),Hi(new Zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new wa(new C$(r.getProvider("auth-internal")),new k$(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ne(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ru(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Fn(E1,"4.6.3",e),Fn(E1,"4.6.3","esm2017")})();/**
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
 */const gP="firebasestorage.googleapis.com",R6="storageBucket",k6=2*60*1e3,P6=10*60*1e3;/**
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
 */class kr extends Rr{constructor(e,n,r=0){super(Om(e),`Firebase Storage: ${n} (${Om(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Om(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ar;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ar||(Ar={}));function Om(t){return"storage/"+t}function b6(){const t="An unknown error occurred, please check the error payload for server response.";return new kr(Ar.UNKNOWN,t)}function N6(){return new kr(Ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function O6(){return new kr(Ar.CANCELED,"User canceled the upload/download.")}function D6(t){return new kr(Ar.INVALID_URL,"Invalid URL '"+t+"'.")}function L6(t){return new kr(Ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rI(t){return new kr(Ar.INVALID_ARGUMENT,t)}function _P(){return new kr(Ar.APP_DELETED,"The Firebase app was deleted.")}function M6(t){return new kr(Ar.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(r.path==="")return r;throw L6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},I=n===gP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",T=new RegExp(`^https?://${I}/${i}/${R}`,"i"),S=[{regex:a,indices:l,postModify:s},{regex:_,indices:v,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<S.length;O++){const L=S[O],V=L.regex.exec(e);if(V){const w=V[L.indices.bucket];let E=V[L.indices.path];E||(E=""),r=new Xn(w,E),L.postModify(r);break}}if(r==null)throw D6(e);return r}}class F6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function V6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...R){c||(c=!0,e.apply(null,R))}function d(R){i=setTimeout(()=>{i=null,t(_,l())},R)}function p(){s&&clearTimeout(s)}function _(R,...T){if(c){p();return}if(R){p(),h.call(null,R,...T);return}if(l()||o){p(),h.call(null,R,...T);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,d(S)}let v=!1;function I(R){v||(v=!0,p(),!c&&(i!==null?(R||(a=2),clearTimeout(i),d(0)):R||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,I(!0)},n),I}function U6(t){t(!1)}/**
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
 */function j6(t){return t!==void 0}function iI(t,e,n,r){if(r<e)throw rI(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rI(`Invalid value for '${t}'. Expected ${n} or less.`)}function $6(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Xd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Xd||(Xd={}));/**
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
 */function z6(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class B6{constructor(e,n,r,i,s,o,a,l,c,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new eh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Xd.NO_ERROR,l=s.getStatus();if(!a||z6(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Xd.ABORT;r(!1,new eh(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new eh(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());j6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=b6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?_P():O6();o(l)}else{const l=N6();o(l)}};this.canceled_?n(!1,new eh(!1,null,!0)):this.backoffId_=V6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&U6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class eh{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function W6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function H6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function G6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function K6(t,e,n,r,i,s,o=!0){const a=$6(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return H6(c,e),W6(c,n),q6(c,s),G6(c,r),new B6(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function Q6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Y6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Jd{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Jd(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Y6(this._location.path)}get storage(){return this._service}get parent(){const e=Q6(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new Jd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw M6(e)}}function sI(t,e){const n=e==null?void 0:e[R6];return n==null?null:Xn.makeFromBucketSpec(n,t)}function X6(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nv(i,t.app.options.projectId))}class J6{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=k6,this._maxUploadRetryTime=P6,this._requests=new Set,i!=null?this._bucket=Xn.makeFromBucketSpec(i,this._host):this._bucket=sI(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=sI(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iI("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iI("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jd(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new F6(_P());{const o=K6(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const oI="@firebase/storage",aI="0.12.5";/**
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
 */const yP="storage";function Z6(t=Df(),e){t=Xe(t);const r=qu(t,yP).getImmediate({identifier:e}),i=ev("storage");return i&&ez(r,...i),r}function ez(t,e,n,r={}){X6(t,e,n,r)}function tz(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new J6(n,r,i,e,ts)}function nz(){Hi(new Zr(yP,tz,"PUBLIC").setMultipleInstances(!0)),Fn(oI,aI,""),Fn(oI,aI,"esm2017")}nz();const rz={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET,databaseURL:{}.VITE_FIREBASE_DATABASE_URL,messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID},iz=Hx(rz),th=Da(iz),sz=w$();Z6();const Zd=c6(),vP=j.createContext(),oz=({children:t})=>{const[e,n]=j.useState(null),r=(o,a)=>YV(th,o,a),i=(o,a)=>XV(th,o,a),s=()=>n4(th);return j.useEffect(()=>yA(th,a=>{n(a)}),[]),P.jsx(vP.Provider,{value:{currentUser:e,signup:r,login:i,logout:s},children:t})},_0=()=>j.useContext(vP),az=({isModalOpen:t,closeModal:e})=>{const{login:n}=_0(),r=Pf().shape({email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:dr().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Wy({resolver:qy(r),mode:"onChange"}),a=async({email:l,password:c},h)=>{h.preventDefault();try{await n(l,c),e()}catch(d){console.error("Error logging in:",d)}};return t?P.jsx(P.Fragment,{children:t&&P.jsx(Xy,{onClose:e,children:P.jsxs(_M,{children:[P.jsx(yM,{onClick:e,children:P.jsx(Jy,{size:32})}),P.jsxs(vM,{children:[P.jsx("h2",{children:"Log In"}),P.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),P.jsxs(wM,{onSubmit:s(a),noValidate:!0,children:[P.jsxs(uT,{children:[P.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),P.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&P.jsx(cT,{children:o.email.message})]}),P.jsxs(uT,{children:[P.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),P.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&P.jsx(cT,{children:o.phone.message})]}),P.jsx(EM,{type:"submit",children:"Log In"})]})]})})}):null},lz=re.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  background-color: #fff;
  border-radius: 30px;
  padding: 64px;
  margin: 0;
`,uz=re.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,cz=re.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;

  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }
`,hz=re.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,Dm=re.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  width: 100%;
  padding: 0;
  margin: 0;

  label {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 22px;
    color: var(--primary-text-color);

    padding: 0 4px;
    margin: 0;
    pointer-events: none;
    transition: top 0.2s ease;
  }

  input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    padding: 16px 18px;
    margin: 0;
    outline: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      color: var(--btn-color);
      background-color: #eee;
    }

    &:focus {
      border: 1px solid var(--btn-color);
    }

    &.error + label {
      color: red;
    }

    &.error {
      border-color: red;
    }
  }
`,Lm=re.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,dz=re.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  border: none;
  background-color: var(--btn-color);
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-color);
  }
`,fz=({isModalOpen:t,closeModal:e})=>{const{signup:n}=_0(),r=Pf().shape({name:dr().min(2,"Name must be at least 2 characters").required("Name is required"),email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:dr().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Wy({resolver:qy(r),mode:"onChange"}),a=async({name:l,email:c,password:h},d)=>{d.preventDefault();try{await n(c,h);const _=Da().currentUser;await ZV(_,{displayName:l}),await C6(Qd(Zd,"users",_.uid),{email:_.email,name:_.displayName,id:_.uid,favorites:[]}),e(),alert("Form submitted successfully!")}catch(p){console.error("Error signing up:",p)}};return t?P.jsx(P.Fragment,{children:t&&P.jsx(Xy,{onClose:e,children:P.jsxs(lz,{children:[P.jsx(uz,{onClick:e,children:P.jsx(Jy,{size:32})}),P.jsxs(cz,{children:[P.jsx("h2",{children:"Sign Up"}),P.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),P.jsxs(hz,{onSubmit:s(a),noValidate:!0,children:[P.jsxs(Dm,{children:[P.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),P.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&P.jsx(Lm,{children:o.name.message})]}),P.jsxs(Dm,{children:[P.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),P.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&P.jsx(Lm,{children:o.email.message})]}),P.jsxs(Dm,{children:[P.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),P.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&P.jsx(Lm,{children:o.phone.message})]}),P.jsx(dz,{type:"submit",children:"Sing Up"})]})]})})}):null},pz=()=>{const[t,e]=j.useState(!1),[n,r]=j.useState(!1),i=Aa(),{currentUser:s,logout:o}=_0(),a=()=>{e(!0)},l=()=>{e(!1)},c=()=>{r(!0)},h=()=>{r(!1)},d=()=>{o()},p=_=>i.pathname===_;return P.jsxs(LD,{children:[P.jsxs(MD,{to:"/home",children:[P.jsx("img",{src:jD,alt:"Logo",width:28,height:28}),P.jsx("span",{children:"LearnLingo"})]}),P.jsxs(FD,{children:[P.jsx(Wc,{to:"/home",className:p("/home")?"active":"",children:"Home"}),P.jsx(Wc,{to:"/teachers",className:p("/teachers")?"active":"",children:"Teachers"}),s?P.jsx(Wc,{to:"/favorites",className:p("/favorites")?"active":"",children:"Favorites"}):P.jsx(Wc,{to:"/favorites",style:{pointerEvents:"none",cursor:"default",color:"var(--subtitle-text-color)"},children:"Favorites"})]}),P.jsx(VD,{children:s?P.jsxs(BE,{onClick:d,children:[s.displayName,"Log Out",P.jsx(QD,{size:20,color:"#f4c550"})]}):P.jsxs(P.Fragment,{children:[P.jsxs(BE,{onClick:a,children:[P.jsx(KD,{size:20,color:"#f4c550"}),P.jsx("span",{children:"Login"})]}),t&&P.jsx(az,{isModalOpen:t,closeModal:l}),P.jsx(UD,{onClick:c,children:"Registration"}),n&&P.jsx(fz,{isModalOpen:n,closeModal:h})]})})]})},mz=re.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
  width: 1440px;
  margin: 0 auto;
`,gz=({children:t})=>P.jsx(mz,{children:t}),_z=()=>P.jsxs(gz,{children:[P.jsx(pz,{}),P.jsx(j.Suspense,{fallback:null,children:P.jsx(B_,{})})]});function P_(){return P_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},P_.apply(this,arguments)}function yz(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function vz(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var wz=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(vz(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=yz(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),qt="-ms-",ef="-moz-",Se="-webkit-",wP="comm",y0="rule",v0="decl",Ez="@import",EP="@keyframes",Tz="@layer",Iz=Math.abs,lp=String.fromCharCode,Sz=Object.assign;function Cz(t,e){return Ot(t,0)^45?(((e<<2^Ot(t,0))<<2^Ot(t,1))<<2^Ot(t,2))<<2^Ot(t,3):0}function TP(t){return t.trim()}function xz(t,e){return(t=e.exec(t))?t[0]:t}function Ce(t,e,n){return t.replace(e,n)}function b_(t,e){return t.indexOf(e)}function Ot(t,e){return t.charCodeAt(e)|0}function Nu(t,e,n){return t.slice(e,n)}function lr(t){return t.length}function w0(t){return t.length}function nh(t,e){return e.push(t),t}function Az(t,e){return t.map(e).join("")}var up=1,Ta=1,IP=0,vn=0,dt=0,ja="";function cp(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:up,column:Ta,length:o,return:""}}function gl(t,e){return Sz(cp("",null,null,"",null,null,0),t,{length:-t.length},e)}function Rz(){return dt}function kz(){return dt=vn>0?Ot(ja,--vn):0,Ta--,dt===10&&(Ta=1,up--),dt}function Rn(){return dt=vn<IP?Ot(ja,vn++):0,Ta++,dt===10&&(Ta=1,up++),dt}function Ir(){return Ot(ja,vn)}function Oh(){return vn}function uc(t,e){return Nu(ja,t,e)}function Ou(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function SP(t){return up=Ta=1,IP=lr(ja=t),vn=0,[]}function CP(t){return ja="",t}function Dh(t){return TP(uc(vn-1,N_(t===91?t+2:t===40?t+1:t)))}function Pz(t){for(;(dt=Ir())&&dt<33;)Rn();return Ou(t)>2||Ou(dt)>3?"":" "}function bz(t,e){for(;--e&&Rn()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return uc(t,Oh()+(e<6&&Ir()==32&&Rn()==32))}function N_(t){for(;Rn();)switch(dt){case t:return vn;case 34:case 39:t!==34&&t!==39&&N_(dt);break;case 40:t===41&&N_(t);break;case 92:Rn();break}return vn}function Nz(t,e){for(;Rn()&&t+dt!==47+10;)if(t+dt===42+42&&Ir()===47)break;return"/*"+uc(e,vn-1)+"*"+lp(t===47?t:Rn())}function Oz(t){for(;!Ou(Ir());)Rn();return uc(t,vn)}function Dz(t){return CP(Lh("",null,null,null,[""],t=SP(t),0,[0],t))}function Lh(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,d=o,p=0,_=0,v=0,I=1,R=1,T=1,g=0,S="",O=i,L=s,V=r,w=S;R;)switch(v=g,g=Rn()){case 40:if(v!=108&&Ot(w,d-1)==58){b_(w+=Ce(Dh(g),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:w+=Dh(g);break;case 9:case 10:case 13:case 32:w+=Pz(v);break;case 92:w+=bz(Oh()-1,7);continue;case 47:switch(Ir()){case 42:case 47:nh(Lz(Nz(Rn(),Oh()),e,n),l);break;default:w+="/"}break;case 123*I:a[c++]=lr(w)*T;case 125*I:case 59:case 0:switch(g){case 0:case 125:R=0;case 59+h:T==-1&&(w=Ce(w,/\f/g,"")),_>0&&lr(w)-d&&nh(_>32?uI(w+";",r,n,d-1):uI(Ce(w," ","")+";",r,n,d-2),l);break;case 59:w+=";";default:if(nh(V=lI(w,e,n,c,h,i,a,S,O=[],L=[],d),s),g===123)if(h===0)Lh(w,e,V,V,O,s,d,a,L);else switch(p===99&&Ot(w,3)===110?100:p){case 100:case 108:case 109:case 115:Lh(t,V,V,r&&nh(lI(t,V,V,0,0,i,a,S,i,O=[],d),L),i,L,d,a,r?O:L);break;default:Lh(w,V,V,V,[""],L,0,a,L)}}c=h=_=0,I=T=1,S=w="",d=o;break;case 58:d=1+lr(w),_=v;default:if(I<1){if(g==123)--I;else if(g==125&&I++==0&&kz()==125)continue}switch(w+=lp(g),g*I){case 38:T=h>0?1:(w+="\f",-1);break;case 44:a[c++]=(lr(w)-1)*T,T=1;break;case 64:Ir()===45&&(w+=Dh(Rn())),p=Ir(),h=d=lr(S=w+=Oz(Oh())),g++;break;case 45:v===45&&lr(w)==2&&(I=0)}}return s}function lI(t,e,n,r,i,s,o,a,l,c,h){for(var d=i-1,p=i===0?s:[""],_=w0(p),v=0,I=0,R=0;v<r;++v)for(var T=0,g=Nu(t,d+1,d=Iz(I=o[v])),S=t;T<_;++T)(S=TP(I>0?p[T]+" "+g:Ce(g,/&\f/g,p[T])))&&(l[R++]=S);return cp(t,e,n,i===0?y0:a,l,c,h)}function Lz(t,e,n){return cp(t,e,n,wP,lp(Rz()),Nu(t,2,-2),0)}function uI(t,e,n,r){return cp(t,e,n,v0,Nu(t,0,r),Nu(t,r+1,-1),r)}function Qo(t,e){for(var n="",r=w0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function Mz(t,e,n,r){switch(t.type){case Tz:if(t.children.length)break;case Ez:case v0:return t.return=t.return||t.value;case wP:return"";case EP:return t.return=t.value+"{"+Qo(t.children,r)+"}";case y0:t.value=t.props.join(",")}return lr(n=Qo(t.children,r))?t.return=t.value+"{"+n+"}":""}function Fz(t){var e=w0(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Vz(t){return function(e){e.root||(e=e.return)&&t(e)}}var Uz=function(e,n,r){for(var i=0,s=0;i=s,s=Ir(),i===38&&s===12&&(n[r]=1),!Ou(s);)Rn();return uc(e,vn)},jz=function(e,n){var r=-1,i=44;do switch(Ou(i)){case 0:i===38&&Ir()===12&&(n[r]=1),e[r]+=Uz(vn-1,n,r);break;case 2:e[r]+=Dh(i);break;case 4:if(i===44){e[++r]=Ir()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=lp(i)}while(i=Rn());return e},$z=function(e,n){return CP(jz(SP(e),n))},cI=new WeakMap,zz=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!cI.get(r))&&!i){cI.set(e,!0);for(var s=[],o=$z(n,s),a=r.props,l=0,c=0;l<o.length;l++)for(var h=0;h<a.length;h++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[h]):a[h]+" "+o[l]}}},Bz=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function xP(t,e){switch(Cz(t,e)){case 5103:return Se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+t+ef+t+qt+t+t;case 6828:case 4268:return Se+t+qt+t+t;case 6165:return Se+t+qt+"flex-"+t+t;case 5187:return Se+t+Ce(t,/(\w+).+(:[^]+)/,Se+"box-$1$2"+qt+"flex-$1$2")+t;case 5443:return Se+t+qt+"flex-item-"+Ce(t,/flex-|-self/,"")+t;case 4675:return Se+t+qt+"flex-line-pack"+Ce(t,/align-content|flex-|-self/,"")+t;case 5548:return Se+t+qt+Ce(t,"shrink","negative")+t;case 5292:return Se+t+qt+Ce(t,"basis","preferred-size")+t;case 6060:return Se+"box-"+Ce(t,"-grow","")+Se+t+qt+Ce(t,"grow","positive")+t;case 4554:return Se+Ce(t,/([^-])(transform)/g,"$1"+Se+"$2")+t;case 6187:return Ce(Ce(Ce(t,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),t,"")+t;case 5495:case 3959:return Ce(t,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return Ce(Ce(t,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+qt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+t+t;case 4095:case 3583:case 4068:case 2532:return Ce(t,/(.+)-inline(.+)/,Se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lr(t)-1-e>6)switch(Ot(t,e+1)){case 109:if(Ot(t,e+4)!==45)break;case 102:return Ce(t,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+ef+(Ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~b_(t,"stretch")?xP(Ce(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ot(t,e+1)!==115)break;case 6444:switch(Ot(t,lr(t)-3-(~b_(t,"!important")&&10))){case 107:return Ce(t,":",":"+Se)+t;case 101:return Ce(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Se+(Ot(t,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+qt+"$2box$3")+t}break;case 5936:switch(Ot(t,e+11)){case 114:return Se+t+qt+Ce(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Se+t+qt+Ce(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Se+t+qt+Ce(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Se+t+qt+t+t}return t}var Wz=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case v0:e.return=xP(e.value,e.length);break;case EP:return Qo([gl(e,{value:Ce(e.value,"@","@"+Se)})],i);case y0:if(e.length)return Az(e.props,function(s){switch(xz(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Qo([gl(e,{props:[Ce(s,/:(read-\w+)/,":"+ef+"$1")]})],i);case"::placeholder":return Qo([gl(e,{props:[Ce(s,/:(plac\w+)/,":"+Se+"input-$1")]}),gl(e,{props:[Ce(s,/:(plac\w+)/,":"+ef+"$1")]}),gl(e,{props:[Ce(s,/:(plac\w+)/,qt+"input-$1")]})],i)}return""})}},qz=[Wz],Hz=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(I){var R=I.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(I),I.setAttribute("data-s",""))})}var i=e.stylisPlugins||qz,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(I){for(var R=I.getAttribute("data-emotion").split(" "),T=1;T<R.length;T++)s[R[T]]=!0;a.push(I)});var l,c=[zz,Bz];{var h,d=[Mz,Vz(function(I){h.insert(I)})],p=Fz(c.concat(i,d)),_=function(R){return Qo(Dz(R),p)};l=function(R,T,g,S){h=g,_(R?R+"{"+T.styles+"}":T.styles),S&&(v.inserted[T.name]=!0)}}var v={key:n,sheet:new wz({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},Gz=!0;function Kz(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var AP=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Gz===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Qz=function(e,n,r){AP(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Yz(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Xz=/[A-Z]|^ms/g,Jz=/_EMO_([^_]+?)_([^]*?)_EMO_/g,RP=function(e){return e.charCodeAt(1)===45},hI=function(e){return e!=null&&typeof e!="boolean"},Mm=BC(function(t){return RP(t)?t:t.replace(Xz,"-$&").toLowerCase()}),dI=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Jz,function(r,i,s){return ur={name:i,styles:s,next:ur},i})}return YC[e]!==1&&!RP(e)&&typeof n=="number"&&n!==0?n+"px":n};function Du(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ur={name:n.name,styles:n.styles,next:ur},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ur={name:r.name,styles:r.styles,next:ur},r=r.next;var i=n.styles+";";return i}return Zz(t,e,n)}case"function":{if(t!==void 0){var s=ur,o=n(t);return ur=s,Du(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function Zz(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Du(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":hI(o)&&(r+=Mm(s)+":"+dI(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)hI(o[a])&&(r+=Mm(s)+":"+dI(s,o[a])+";");else{var l=Du(t,e,o);switch(s){case"animation":case"animationName":{r+=Mm(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var fI=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ur,eB=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";ur=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Du(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Du(r,n,e[a]),i&&(s+=o[a]);fI.lastIndex=0;for(var l="",c;(c=fI.exec(s))!==null;)l+="-"+c[1];var h=Yz(s)+l;return{name:h,styles:s,next:ur}},tB=function(e){return e()},nB=Vm["useInsertionEffect"]?Vm["useInsertionEffect"]:!1,rB=nB||tB,kP=j.createContext(typeof HTMLElement<"u"?Hz({key:"css"}):null);kP.Provider;var iB=function(e){return j.forwardRef(function(n,r){var i=j.useContext(kP);return e(n,i,r)})},sB=j.createContext({}),oB=NO,aB=function(e){return e!=="theme"},pI=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?oB:aB},mI=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},lB=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return AP(n,r,i),rB(function(){return Qz(n,r,i)}),null},uB=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=mI(e,n,r),l=a||pI(i),c=!l("as");return function(){var h=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)d.push.apply(d,h);else{d.push(h[0][0]);for(var p=h.length,_=1;_<p;_++)d.push(h[_],h[0][_])}var v=iB(function(I,R,T){var g=c&&I.as||i,S="",O=[],L=I;if(I.theme==null){L={};for(var V in I)L[V]=I[V];L.theme=j.useContext(sB)}typeof I.className=="string"?S=Kz(R.registered,O,I.className):I.className!=null&&(S=I.className+" ");var w=eB(d.concat(O),R.registered,L);S+=R.key+"-"+w.name,o!==void 0&&(S+=" "+o);var E=c&&a===void 0?pI(g):l,C={};for(var A in I)c&&A==="as"||E(A)&&(C[A]=I[A]);return C.className=S,C.ref=T,j.createElement(j.Fragment,null,j.createElement(lB,{cache:R,serialized:w,isStringTag:typeof g=="string"}),j.createElement(g,C))});return v.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return"."+o}}),v.withComponent=function(I,R){return t(I,P_({},n,R,{shouldForwardProp:mI(v,R,!0)})).apply(void 0,d)},v}},cB=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Lu=uB.bind();cB.forEach(function(t){Lu[t]=Lu(t)});const hB=Lu.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,dB=Lu.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,fB=()=>P.jsx(hB,{children:P.jsx(dB,{children:"404"})});const pB=Lu.div`
  width: 100%;
  height: 100vh;
`,mB="/LearnLingo/assets/face_x1-b65e11cd.png",gB="/LearnLingo/assets/iMac-8b3b4ee4.png",_B=re.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`,yB=re.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 98px 64px;
  gap: 32px;
  width: 720px;

  h1 {
    font-family: 'Roboto-Medium';
    font-size: 48px;
    font-weight: 600;
    line-height: 56px;
    letter-spacing: -0.02em;
    text-align: left;
    color: var(--primary-text-color);

    span {
      background-color: var(--bg-secondary-color);
      font-family: 'Roboto-Regular', sans-serif;
      font-weight: 400;
      font-style: italic;
    }
  }

  p {
    width: 471px;
  }
`,vB=re(of)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 88px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  background-color: var(--btn-color);
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-color);
  }
`,wB=re.div`
  display: block;
  position: relative;
  background-color: var(--bg-secondary-color);
  width: 568px;
  height: 530px;
  border-radius: 30px;
  overflow: hidden;

  img {
    position: absolute;
  }

  img:nth-child(1) {
    top: 80px;
    left: 114px;
    animation: greeting 1.5s ease-in-out;
  }

  @keyframes greeting {
    0% {
      transform: translatey(50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  img:nth-child(2) {
    top: 354px;
    left: 103.64px;
  }
`,EB=re.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  padding: 40px 123px;
  margin: 0 auto;
  border: 1.5px dashed var(--btn-color);
  border-radius: 30px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px;
    gap: 16px;
  }

  h3 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: -0.02em;
    text-align: left;
    color: var(--primary-text-color);
    padding: 0;
    margin: 0;
  }

  p {
    width: 74px;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(18, 20, 23, 0.7);
    padding: 0;
    margin: 0;
  }
`;var E0={},tf=function(){return tf=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},tf.apply(this,arguments)},TB=function(){function t(e,n,r){var i=this;this.endVal=n,this.options=r,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){i.startTime||(i.startTime=s);var o=s-i.startTime;i.remaining=i.duration-o,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(o,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(o,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(o/i.duration);var a=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=a?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),o<i.duration?i.rAF=requestAnimationFrame(i.count):i.finalEndVal!==null?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(s){var o,a,l,c,h=s<0?"-":"";o=Math.abs(s).toFixed(i.options.decimalPlaces);var d=(o+="").split(".");if(a=d[0],l=d.length>1?i.options.decimal+d[1]:"",i.options.useGrouping){c="";for(var p=3,_=0,v=0,I=a.length;v<I;++v)i.options.useIndianSeparators&&v===4&&(p=2,_=1),v!==0&&_%p==0&&(c=i.options.separator+c),_++,c=a[I-v-1]+c;a=c}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,function(R){return i.options.numerals[+R]}),l=l.replace(/[0-9]/g,function(R){return i.options.numerals[+R]})),h+i.options.prefix+a+l+i.options.suffix},this.easeOutExpo=function(s,o,a,l){return a*(1-Math.pow(2,-10*s/l))*1024/1023+o},this.options=tf(tf({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),i=r.top+window.pageYOffset,s=r.top+r.height+window.pageYOffset;s<n&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||i>n)&&!e.paused&&e.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var r=this.countDown?1:-1;this.endVal=e+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(e){var n;if(this.el){var r=this.formattingFn(e);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,r):this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r}},t.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},t.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();const IB=Object.freeze(Object.defineProperty({__proto__:null,CountUp:TB},Symbol.toStringTag,{value:"Module"})),SB=ob(IB);Object.defineProperty(E0,"__esModule",{value:!0});var At=j,CB=SB;function xB(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(h){c=!0,i=h}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return a}}function gI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gI(Object(n),!0).forEach(function(r){kB(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function AB(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function RB(t){var e=AB(t,"string");return typeof e=="symbol"?e:String(e)}function kB(t,e,n){return e=RB(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O_(){return O_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},O_.apply(this,arguments)}function PB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PP(t,e){if(t==null)return{};var n=PB(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function bB(t,e){return NB(t)||xB(t,e)||OB(t,e)||DB()}function NB(t){if(Array.isArray(t))return t}function OB(t,e){if(t){if(typeof t=="string")return _I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _I(t,e)}}function _I(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function DB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var LB=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?At.useLayoutEffect:At.useEffect;function Wn(t){var e=At.useRef(t);return LB(function(){e.current=t}),At.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var MB=function(e,n){var r=n.decimal,i=n.decimals,s=n.duration,o=n.easingFn,a=n.end,l=n.formattingFn,c=n.numerals,h=n.prefix,d=n.separator,p=n.start,_=n.suffix,v=n.useEasing,I=n.useGrouping,R=n.useIndianSeparators,T=n.enableScrollSpy,g=n.scrollSpyDelay,S=n.scrollSpyOnce,O=n.plugin;return new CB.CountUp(e,a,{startVal:p,duration:s,decimal:r,decimalPlaces:i,easingFn:o,formattingFn:l,numerals:c,separator:d,prefix:h,suffix:_,plugin:O,useEasing:v,useIndianSeparators:R,useGrouping:I,enableScrollSpy:T,scrollSpyDelay:g,scrollSpyOnce:S})},FB=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],VB={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},bP=function(e){var n=Object.fromEntries(Object.entries(e).filter(function(C){var A=bB(C,2),k=A[1];return k!==void 0})),r=At.useMemo(function(){return nf(nf({},VB),n)},[e]),i=r.ref,s=r.startOnMount,o=r.enableReinitialize,a=r.delay,l=r.onEnd,c=r.onStart,h=r.onPauseResume,d=r.onReset,p=r.onUpdate,_=PP(r,FB),v=At.useRef(),I=At.useRef(),R=At.useRef(!1),T=Wn(function(){return MB(typeof i=="string"?i:i.current,_)}),g=Wn(function(C){var A=v.current;if(A&&!C)return A;var k=T();return v.current=k,k}),S=Wn(function(){var C=function(){return g(!0).start(function(){l==null||l({pauseResume:O,reset:L,start:w,update:V})})};a&&a>0?I.current=setTimeout(C,a*1e3):C(),c==null||c({pauseResume:O,reset:L,update:V})}),O=Wn(function(){g().pauseResume(),h==null||h({reset:L,start:w,update:V})}),L=Wn(function(){g().el&&(I.current&&clearTimeout(I.current),g().reset(),d==null||d({pauseResume:O,start:w,update:V}))}),V=Wn(function(C){g().update(C),p==null||p({pauseResume:O,reset:L,start:w})}),w=Wn(function(){L(),S()}),E=Wn(function(C){s&&(C&&L(),S())});return At.useEffect(function(){R.current?o&&E(!0):(R.current=!0,E())},[o,R,E,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),At.useEffect(function(){return function(){L()}},[L]),{start:w,pauseResume:O,reset:L,update:V,getCountUp:g}},UB=["className","redraw","containerProps","children","style"],jB=function(e){var n=e.className,r=e.redraw,i=e.containerProps,s=e.children,o=e.style,a=PP(e,UB),l=At.useRef(null),c=At.useRef(!1),h=bP(nf(nf({},a),{},{ref:l,startOnMount:typeof s!="function"||e.delay===0,enableReinitialize:!1})),d=h.start,p=h.reset,_=h.update,v=h.pauseResume,I=h.getCountUp,R=Wn(function(){d()}),T=Wn(function(O){e.preserveValue||p(),_(O)}),g=Wn(function(){if(typeof e.children=="function"&&!(l.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}I()});At.useEffect(function(){g()},[g]),At.useEffect(function(){c.current&&T(e.end)},[e.end,T]);var S=r&&e;return At.useEffect(function(){r&&c.current&&R()},[R,r,S]),At.useEffect(function(){!r&&c.current&&R()},[R,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),At.useEffect(function(){c.current=!0},[]),typeof s=="function"?s({countUpRef:l,start:d,reset:p,update:_,pauseResume:v,getCountUp:I}):At.createElement("span",O_({className:n,ref:l,style:o},i),typeof e.start<"u"?I().formattingFn(e.start):"")},$B=E0.default=jB;E0.useCountUp=bP;const yI=()=>{const t=[{value:32e3,text:"Experienced tutors"},{value:3e5,text:"5-star tutor reviews"},{value:120,text:"Subjects taught"},{value:200,text:"Tutor nationalities"}];return P.jsxs(P.Fragment,{children:[P.jsxs(_B,{children:[P.jsxs(yB,{children:[P.jsxs("h1",{children:["Unlock your potential with the best ",P.jsx("span",{children:"language"})," tutors"]}),P.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),P.jsx(vB,{to:"/teachers",children:"Get started"})]}),P.jsxs(wB,{children:[P.jsx("img",{src:mB,width:339,height:339,alt:""}),P.jsx("img",{src:gB,width:360,height:247,alt:""})]})]}),P.jsx(EB,{children:t.map((e,n)=>P.jsxs("li",{children:[P.jsxs("h3",{children:[P.jsx($B,{start:0,end:e.value,duration:2.75,separator:","})," +"]}),P.jsx("p",{children:e.text})]},n))})]})},zB=re.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 48px;
  padding: 24px;
  width: 1184px;
`,BB=re.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
`,WB=re.div`
  width: 968px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;

  span {
    font-family: 'Roboto-Medium', sans-serif;
    color: var(--primary-text-color);
  }
`,qB=re.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding: 0;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-right: 64px;

    li {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 8px;
      padding: 1px 16px;

      margin: 0;

      p {
        padding: 0;
        margin: 0;
      }

      span {
        color: #38cd3e;
      }
    }

    li:not(:last-child) {
      border-right: 1px solid rgba(12, 14, 17, 0.2);
    }
  }
`,rh=re.p`
  color: var(--subtitle-text-color);
  padding: 0;
  margin: 0;
`,HB=re(of)`
  text-decoration: underline;
  font-style: 16px;
  line-height: 24px;
  margin: 8px 0 24px 0;
`,GB=re.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin-bottom: 24px;

  li {
    padding: 8px 12px;
    margin: 0;
    border-radius: 35px;
    border: 1px solid rgba(18, 20, 23, 0.2);
  }
`,KB=re.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
`,QB=re.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  border: none;
  background-color: var(--btn-color);
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-color);
  }
`;function NP(t){return qs({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function YB(t){return qs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"},child:[]}]})(t)}function XB(t){return qs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"},child:[]}]})(t)}function JB(t){return qs({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}const ZB=re.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
  padding: 0;
`,e8=re.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px;
  padding: 0;
`,t8=re.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 12px;
  padding: 0;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
`,n8=re.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 0;

  p {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0em;
    color: var(--subtitle-text-color);
    padding: 0;
    margin: 0;
  }
`,r8=re.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 8px;
  padding: 0;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
`,i8=({reviews:t})=>P.jsx(ZB,{children:t.map((e,n)=>P.jsxs(e8,{children:[P.jsxs(t8,{children:[e.reviewer_avatar?P.jsx("img",{src:e.reviewer_avatar,alt:"Reviewer Avatar"}):P.jsx(YB,{size:44}),P.jsxs(n8,{children:[P.jsx("p",{children:e.reviewer_name}),P.jsxs(r8,{children:[P.jsx(NP,{size:16,color:"#FFC531"}),P.jsx("p",{children:e.reviewer_rating})]})]})]}),P.jsx("p",{children:e.comment})]},n))}),s8=re.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  max-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  background-color: #fff;
  border-radius: 30px;
  padding: 64px;
  margin: 0;
`,o8=re.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,a8=re.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  gap: 20px;
  padding: 0;
  margin: 0;

  h2 {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -0.02em;
    margin: 0;
  }

  p {
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 16px;
    line-height: 22px;
    margin: 0;
  }
`,l8=re.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  width: 100%;
  padding: 0;
  margin: 0;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
  }

  h3,
  p {
    font-family: 'Roboto-Medium', sans-serif;
    margin: 0;
  }

  h3 {
    font-size: 16;
    line-height: 24px;
  }

  p {
    font-size: 12px;
    line-height: 16px;
    color: var(--subtitle-text-color);
    margin-bottom: 4px;
  }
`,u8=re.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 0;
  margin: 0;
  overflow-y: auto;

  .form-section {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 18px;
    width: 100%;
    padding: 0;
    margin: 0;
  }
`,_l=re.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 0;
  margin: 0;

  input {
    appearance: none;
    width: 24px;
    height: 24px;
    border: 2.5px solid var(--subtitle-text-color);
    border-radius: 50%;
    position: relative;
    cursor: pointer;
    transition: baorder-color 0.2s ease;
  }

  input:checked {
    border-color: var(--btn-color);
  }

  input:checked::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--btn-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    text-align: center;
  }
`,Fm=re.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  width: 100%;
  padding: 0;
  margin: 0;

  label {
    position: absolute;
    top: 50%;
    left: 18px;
    transform: translateY(-50%);
    font-size: 16px;
    line-height: 22px;
    color: var(--primary-text-color);

    padding: 0 4px;
    margin: 0;
    pointer-events: none;
    transition: top 0.2s ease;
  }

  input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    font-size: 16px;
    line-height: 22px;
    width: 100%;
    padding: 16px 18px;
    margin: 0;
    outline: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      color: var(--btn-color);
      background-color: #eee;
    }

    &:focus {
      border: 1px solid var(--btn-color);
    }

    &.error + label {
      color: red;
    }

    &.error {
      border-color: red;
    }
  }
`,ih=re.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,c8=re.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 48px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  border: none;
  background-color: var(--btn-color);
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--btn-hover-color);
  }
`,h8=({isModalOpen:t,closeModal:e,teacher:n})=>{const r=Pf().shape({name:dr().required("Name is required"),email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),phone:dr().matches(/^\+?[0-9]*$/,"Phone number must be in format +380XXXXXXXXX").min(13,"Phone number must be in format +380XXXXXXXXX").required("Phone is required"),reason:dr().required("Reason is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Wy({resolver:qy(r),mode:"onChange"}),a=l=>{console.log(l),e(),alert("Form submitted successfully!")};return t?P.jsx(P.Fragment,{children:t&&P.jsx(Xy,{onClose:e,children:P.jsxs(s8,{children:[P.jsx(o8,{onClick:e,children:P.jsx(Jy,{size:32})}),P.jsxs(a8,{children:[P.jsx("h2",{children:"Book trial lesson"}),P.jsx("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),P.jsxs(l8,{children:[P.jsx("img",{src:n.avatar_url,alt:n.name}),P.jsxs("div",{children:[P.jsx("p",{children:"Your teacher"}),P.jsxs("h3",{children:[n.name," ",n.surname]})]})]})]}),P.jsxs(u8,{onSubmit:s(a),noValidate:!0,children:[P.jsxs("div",{className:"form-section",children:[P.jsx("h2",{children:"What is your main reason for learning English?"}),P.jsxs(_l,{children:[P.jsx("input",{type:"radio",value:"career",...i("reason"),defaultChecked:!0}),"Career and business"]}),P.jsxs(_l,{children:[P.jsx("input",{type:"radio",value:"kids",...i("reason")}),"Lesson for kids"]}),P.jsxs(_l,{children:[P.jsx("input",{type:"radio",value:"abroad",...i("reason")}),"Living abroad"]}),P.jsxs(_l,{children:[P.jsx("input",{type:"radio",value:"exams",...i("reason")}),"Exams and coursework"]}),P.jsxs(_l,{children:[P.jsx("input",{type:"radio",value:"hobby",...i("reason")}),"Culture, travel or hobby"]}),o.reason&&P.jsx(ih,{children:o.reason.message})]}),P.jsxs("div",{className:"form-section",children:[P.jsxs(Fm,{children:[P.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),P.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&P.jsx(ih,{children:o.name.message})]}),P.jsxs(Fm,{children:[P.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),P.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&P.jsx(ih,{children:o.email.message})]}),P.jsxs(Fm,{children:[P.jsx("input",{type:"number",...i("phone"),className:o.phone?"error":"",placeholder:" "}),P.jsx("label",{className:o.phone?"error":"",children:"Phone"}),o.phone&&P.jsx(ih,{children:o.phone.message})]})]}),P.jsx(c8,{type:"submit",children:"Book"})]})]})})}):null},OP=({teacher:t})=>{const e=t.languages.reduce((v,I,R)=>R<t.languages.length-1?[...v,P.jsx("span",{children:I},R),", "]:[...v,P.jsx("span",{children:I},R)],[]),[n,r]=j.useState(!1),[i,s]=j.useState(!1),[o,a]=j.useState(!1),c=Da().currentUser,h=()=>{s(!0)},d=()=>{s(!1)},p=()=>{r(!n)};j.useEffect(()=>{(async()=>{if(c){const I=Qd(Zd,"users",c.uid),R=await tI(I);if(R.exists()){const T=R.data();a(T.favorites.some(g=>g.id===t.id))}}})()},[c,t.id]);const _=async()=>{if(!c)return;const v=Qd(Zd,"users",c.uid),I=await tI(v);if(I.exists()){const T=I.data().favorites||[];if(T.findIndex(S=>S.id===t.id)!==-1){const S=T.filter(O=>O.id!==t.id);await nI(v,{favorites:S}),a(!1)}else await nI(v,{favorites:A6(t)}),a(!0)}};return P.jsxs(zB,{children:[P.jsx(BB,{src:t.avatar_url,alt:t.name}),P.jsxs(WB,{children:[P.jsxs(qB,{children:[P.jsx(rh,{style:{marginRight:"192px"},children:"Languages"}),P.jsxs("ul",{children:[P.jsx("li",{children:P.jsx("p",{children:"Lessons online"})}),P.jsx("li",{children:P.jsxs("p",{children:["Lessons done: ",t.lessons_done]})}),P.jsxs("li",{children:[P.jsx(NP,{size:16,color:"#FFC531"}),P.jsxs("p",{children:["Rating: ",t.rating]})]}),P.jsx("li",{children:P.jsxs("p",{children:["Price/1 hour: ",P.jsxs("span",{children:["$",t.price_per_hour]})]})})]}),o?P.jsx(XB,{size:22,onClick:_}):P.jsx(JB,{size:22,onClick:_})]}),P.jsxs("h3",{children:[t.name," ",t.surname]}),P.jsxs(rh,{children:["Speaks: ",P.jsx("span",{children:e})]}),P.jsxs(rh,{children:["Lesson Info: ",P.jsxs("span",{children:[" ",t.lesson_info]})]}),P.jsxs(rh,{children:["Conditions: ",P.jsx("span",{children:t.conditions})]}),!n&&P.jsx(HB,{onClick:p,children:"Read more"}),n&&P.jsxs(KB,{children:[P.jsx("p",{children:t.experience}),P.jsx(i8,{reviews:t.reviews})]}),P.jsx(GB,{children:t.levels.map((v,I)=>P.jsxs("li",{children:["#",v]},I))}),n&&P.jsx(QB,{onClick:h,children:"Book trial lesson"}),i&&P.jsx(h8,{isModalOpen:i,closeModal:d,teacher:t})]})]})},d8=re.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 88px;
  font-family: 'Roboto-Bold', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: var(--primary-text-color);
  background-color: var(--btn-color);
  border: none;
  border-radius: 12px;
  transition: background-color 0.3s ease-in-out;
  margin: 32px auto;

  &:hover {
    background-color: var(--btn-hover-color);
  }
`,f8=()=>{const[t,e]=j.useState(4),[n,r]=j.useState([]);j.useEffect(()=>{const s=c$(sz,"teachers");d$(s,o=>{const a=o.val();a&&r(Object.values(a))})},[]);const i=()=>{e(s=>s+4)};return P.jsxs(P.Fragment,{children:[n.slice(0,t).map((s,o)=>P.jsx(OP,{teacher:s},o)),t<n.length&&P.jsx(d8,{onClick:i,children:"Load More"})]})},p8=()=>P.jsx(f8,{}),m8=()=>Da().currentUser?P.jsx(UI,{to:"/home"}):P.jsx(B_,{}),g8=()=>Da().currentUser?P.jsx(B_,{}):P.jsx(UI,{to:"/home",replace:!0}),_8=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,s]=j.useState(null),o=Da();return j.useEffect(()=>{let a;const c=yA(o,h=>{if(h){const d=Qd(Zd,"users",h.uid);a=x6(d,p=>{if(p.exists()){const _=p.data().favorites||[];e(_)}else s("No favorites found"),e([]);r(!1)},p=>{console.error("Error fetching favorites:",p),s("Failed to fetch favorites"),r(!1)})}else r(!1),s("User not authenticated")});return()=>{a&&a(),c()}},[o]),n?P.jsx("div",{children:"Loading..."}):i?P.jsxs("div",{children:["Error: ",i]}):P.jsxs("div",{children:[P.jsxs("h2",{children:["Favorites List [",t.length,"]"]}),P.jsx("ul",{children:t.map((a,l)=>P.jsx("li",{children:P.jsx(OP,{teacher:a})},l))})]})},y8=()=>P.jsx("div",{children:P.jsx(_8,{})});function v8(){return P.jsx(pB,{children:P.jsx(_N,{children:P.jsxs(Mr,{path:"/",element:P.jsx(_z,{}),children:[P.jsx(Mr,{index:!0,element:P.jsx(yI,{})}),P.jsxs(Mr,{element:P.jsx(m8,{}),children:[P.jsx(Mr,{path:"home",element:P.jsx(yI,{})}),P.jsx(Mr,{path:"teachers",element:P.jsx(p8,{})})]}),P.jsx(Mr,{element:P.jsx(g8,{}),children:P.jsx(Mr,{path:"favorites",element:P.jsx(y8,{})})}),P.jsx(Mr,{path:"*",element:P.jsx(fB,{})})]})})})}zm.createRoot(document.getElementById("root")).render(P.jsx(Me.StrictMode,{children:P.jsx(IN,{basename:"/LearnLingo",children:P.jsx(oz,{children:P.jsx(v8,{})})})}));