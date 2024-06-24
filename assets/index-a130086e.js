function UP(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function rI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function jP(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var iI={exports:{}},Yd={},sI={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nu=Symbol.for("react.element"),$P=Symbol.for("react.portal"),zP=Symbol.for("react.fragment"),BP=Symbol.for("react.strict_mode"),WP=Symbol.for("react.profiler"),HP=Symbol.for("react.provider"),qP=Symbol.for("react.context"),GP=Symbol.for("react.forward_ref"),KP=Symbol.for("react.suspense"),QP=Symbol.for("react.memo"),YP=Symbol.for("react.lazy"),eE=Symbol.iterator;function XP(t){return t===null||typeof t!="object"?null:(t=eE&&t[eE]||t["@@iterator"],typeof t=="function"?t:null)}var oI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},aI=Object.assign,lI={};function ya(t,e,n){this.props=t,this.context=e,this.refs=lI,this.updater=n||oI}ya.prototype.isReactComponent={};ya.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ya.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function uI(){}uI.prototype=ya.prototype;function E_(t,e,n){this.props=t,this.context=e,this.refs=lI,this.updater=n||oI}var w_=E_.prototype=new uI;w_.constructor=E_;aI(w_,ya.prototype);w_.isPureReactComponent=!0;var tE=Array.isArray,cI=Object.prototype.hasOwnProperty,T_={current:null},hI={key:!0,ref:!0,__self:!0,__source:!0};function dI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)cI.call(e,r)&&!hI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Nu,type:t,key:s,ref:o,props:i,_owner:T_.current}}function JP(t,e){return{$$typeof:Nu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function I_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Nu}function ZP(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nE=/\/+/g;function _p(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ZP(""+t.key):e.toString(36)}function eh(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Nu:case $P:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_p(o,0):r,tE(i)?(n="",t!=null&&(n=t.replace(nE,"$&/")+"/"),eh(i,e,n,"",function(c){return c})):i!=null&&(I_(i)&&(i=JP(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nE,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tE(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_p(s,a);o+=eh(s,e,n,l,i)}else if(l=XP(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_p(s,a++),o+=eh(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Tc(t,e,n){if(t==null)return t;var r=[],i=0;return eh(t,r,"","",function(s){return e.call(n,s,i++)}),r}function eb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},th={transition:null},tb={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:th,ReactCurrentOwner:T_};_e.Children={map:Tc,forEach:function(t,e,n){Tc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Tc(t,function(){e++}),e},toArray:function(t){return Tc(t,function(e){return e})||[]},only:function(t){if(!I_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_e.Component=ya;_e.Fragment=zP;_e.Profiler=WP;_e.PureComponent=E_;_e.StrictMode=BP;_e.Suspense=KP;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tb;_e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=aI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=T_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)cI.call(e,l)&&!hI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Nu,type:t.type,key:i,ref:s,props:r,_owner:o}};_e.createContext=function(t){return t={$$typeof:qP,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HP,_context:t},t.Consumer=t};_e.createElement=dI;_e.createFactory=function(t){var e=dI.bind(null,t);return e.type=t,e};_e.createRef=function(){return{current:null}};_e.forwardRef=function(t){return{$$typeof:GP,render:t}};_e.isValidElement=I_;_e.lazy=function(t){return{$$typeof:YP,_payload:{_status:-1,_result:t},_init:eb}};_e.memo=function(t,e){return{$$typeof:QP,type:t,compare:e===void 0?null:e}};_e.startTransition=function(t){var e=th.transition;th.transition={};try{t()}finally{th.transition=e}};_e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_e.useCallback=function(t,e){return sn.current.useCallback(t,e)};_e.useContext=function(t){return sn.current.useContext(t)};_e.useDebugValue=function(){};_e.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};_e.useEffect=function(t,e){return sn.current.useEffect(t,e)};_e.useId=function(){return sn.current.useId()};_e.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};_e.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};_e.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};_e.useMemo=function(t,e){return sn.current.useMemo(t,e)};_e.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};_e.useRef=function(t){return sn.current.useRef(t)};_e.useState=function(t){return sn.current.useState(t)};_e.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};_e.useTransition=function(){return sn.current.useTransition()};_e.version="18.2.0";sI.exports=_e;var $=sI.exports;const Me=rI($),xm=UP({__proto__:null,default:Me},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nb=$,rb=Symbol.for("react.element"),ib=Symbol.for("react.fragment"),sb=Object.prototype.hasOwnProperty,ob=nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ab={key:!0,ref:!0,__self:!0,__source:!0};function fI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sb.call(e,r)&&!ab.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rb,type:t,key:s,ref:o,props:i,_owner:ob.current}}Yd.Fragment=ib;Yd.jsx=fI;Yd.jsxs=fI;iI.exports=Yd;var P=iI.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hl(){return Hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hl.apply(this,arguments)}var Si;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Si||(Si={}));const rE="popstate";function lb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Am("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ph(i)}return cb(e,n,null,t)}function at(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function S_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ub(){return Math.random().toString(36).substr(2,8)}function iE(t,e){return{usr:t.state,key:t.key,idx:e}}function Am(t,e,n,r){return n===void 0&&(n=null),Hl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?va(e):e,{state:n,key:e&&e.key||r||ub()})}function Ph(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function va(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Si.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Hl({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Si.Pop;let R=h(),T=R==null?null:R-c;c=R,l&&l({action:a,location:S.location,delta:T})}function m(R,T){a=Si.Push;let g=Am(S.location,R,T);n&&n(g,R),c=h()+1;let I=iE(g,c),O=S.createHref(g);try{o.pushState(I,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(O)}s&&l&&l({action:a,location:S.location,delta:1})}function _(R,T){a=Si.Replace;let g=Am(S.location,R,T);n&&n(g,R),c=h();let I=iE(g,c),O=S.createHref(g);o.replaceState(I,"",O),s&&l&&l({action:a,location:S.location,delta:0})}function w(R){let T=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof R=="string"?R:Ph(R);return at(T,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,T)}let S={get action(){return a},get location(){return t(i,o)},listen(R){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(rE,f),l=R,()=>{i.removeEventListener(rE,f),l=null}},createHref(R){return e(i,R)},createURL:w,encodeLocation(R){let T=w(R);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:_,go(R){return o.go(R)}};return S}var sE;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(sE||(sE={}));function hb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?va(e):e,i=C_(r.pathname||"/",n);if(i==null)return null;let s=pI(t);db(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=wb(s[a],Sb(i));return o}function pI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(at(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ki([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(at(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),pI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:vb(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of mI(s.path))i(s,o,l)}),e}function mI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=mI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function db(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Eb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fb=/^:\w+$/,pb=3,mb=2,gb=1,_b=10,yb=-2,oE=t=>t==="*";function vb(t,e){let n=t.split("/"),r=n.length;return n.some(oE)&&(r+=yb),e&&(r+=mb),n.filter(i=>!oE(i)).reduce((i,s)=>i+(fb.test(s)?pb:s===""?gb:_b),r)}function Eb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function wb(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=Tb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!h)return null;Object.assign(r,h.params);let f=a.route;s.push({params:r,pathname:ki([i,h.pathname]),pathnameBase:Rb(ki([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=ki([i,h.pathnameBase]))}return s}function Tb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ib(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{if(h==="*"){let m=a[f]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}return c[h]=Cb(a[f]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Ib(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),S_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Sb(t){try{return decodeURI(t)}catch(e){return S_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cb(t,e){try{return decodeURIComponent(t)}catch(n){return S_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function C_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function xb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?va(t):t;return{pathname:n?n.startsWith("/")?n:Ab(n,e):e,search:kb(r),hash:Pb(i)}}function Ab(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function A_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=va(t):(i=Hl({},t),at(!i.pathname||!i.pathname.includes("?"),yp("?","pathname","search",i)),at(!i.pathname||!i.pathname.includes("#"),yp("#","pathname","hash",i)),at(!i.search||!i.search.includes("#"),yp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=xb(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const ki=t=>t.join("/").replace(/\/\/+/g,"/"),Rb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),kb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Pb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function bb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const gI=["post","put","patch","delete"];new Set(gI);const Nb=["get",...gI];new Set(Nb);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bh(){return bh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bh.apply(this,arguments)}const R_=$.createContext(null),Ob=$.createContext(null),Ea=$.createContext(null),Xd=$.createContext(null),ri=$.createContext({outlet:null,matches:[],isDataRoute:!1}),_I=$.createContext(null);function Db(t,e){let{relative:n}=e===void 0?{}:e;wa()||at(!1);let{basename:r,navigator:i}=$.useContext(Ea),{hash:s,pathname:o,search:a}=EI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ki([r,o])),i.createHref({pathname:l,search:a,hash:s})}function wa(){return $.useContext(Xd)!=null}function Ta(){return wa()||at(!1),$.useContext(Xd).location}function yI(t){$.useContext(Ea).static||$.useLayoutEffect(t)}function vI(){let{isDataRoute:t}=$.useContext(ri);return t?Qb():Lb()}function Lb(){wa()||at(!1);let t=$.useContext(R_),{basename:e,navigator:n}=$.useContext(Ea),{matches:r}=$.useContext(ri),{pathname:i}=Ta(),s=JSON.stringify(x_(r).map(l=>l.pathnameBase)),o=$.useRef(!1);return yI(()=>{o.current=!0}),$.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=A_(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:ki([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,s,i,t])}const Mb=$.createContext(null);function Fb(t){let e=$.useContext(ri).outlet;return e&&$.createElement(Mb.Provider,{value:t},e)}function EI(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=$.useContext(ri),{pathname:i}=Ta(),s=JSON.stringify(x_(r).map(o=>o.pathnameBase));return $.useMemo(()=>A_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Vb(t,e){return Ub(t,e)}function Ub(t,e,n){wa()||at(!1);let{navigator:r}=$.useContext(Ea),{matches:i}=$.useContext(ri),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ta(),c;if(e){var h;let S=typeof e=="string"?va(e):e;a==="/"||(h=S.pathname)!=null&&h.startsWith(a)||at(!1),c=S}else c=l;let f=c.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",_=hb(t,{pathname:m}),w=Wb(_&&_.map(S=>Object.assign({},S,{params:Object.assign({},o,S.params),pathname:ki([a,r.encodeLocation?r.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?a:ki([a,r.encodeLocation?r.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),i,n);return e&&w?$.createElement(Xd.Provider,{value:{location:bh({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Si.Pop}},w):w}function jb(){let t=Kb(),e=bb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:i},n):null,s)}const $b=$.createElement(jb,null);class zb extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?$.createElement(ri.Provider,{value:this.props.routeContext},$.createElement(_I.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bb(t){let{routeContext:e,match:n,children:r}=t,i=$.useContext(R_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(ri.Provider,{value:e},r)}function Wb(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||at(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||$b);let m=e.concat(s.slice(0,c+1)),_=()=>{let w;return h?w=f:l.route.Component?w=$.createElement(l.route.Component,null):l.route.element?w=l.route.element:w=a,$.createElement(Bb,{match:l,routeContext:{outlet:a,matches:m,isDataRoute:n!=null},children:w})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?$.createElement(zb,{location:n.location,revalidation:n.revalidation,component:f,error:h,children:_(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):_()},null)}var wI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(wI||{}),Nh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Nh||{});function Hb(t){let e=$.useContext(R_);return e||at(!1),e}function qb(t){let e=$.useContext(Ob);return e||at(!1),e}function Gb(t){let e=$.useContext(ri);return e||at(!1),e}function TI(t){let e=Gb(),n=e.matches[e.matches.length-1];return n.route.id||at(!1),n.route.id}function Kb(){var t;let e=$.useContext(_I),n=qb(Nh.UseRouteError),r=TI(Nh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Qb(){let{router:t}=Hb(wI.UseNavigateStable),e=TI(Nh.UseNavigateStable),n=$.useRef(!1);return yI(()=>{n.current=!0}),$.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,bh({fromRouteId:e},s)))},[t,e])}function II(t){let{to:e,replace:n,state:r,relative:i}=t;wa()||at(!1);let{matches:s}=$.useContext(ri),{pathname:o}=Ta(),a=vI(),l=A_(e,x_(s).map(h=>h.pathnameBase),o,i==="path"),c=JSON.stringify(l);return $.useEffect(()=>a(JSON.parse(c),{replace:n,state:r,relative:i}),[a,c,i,n,r]),null}function k_(t){return Fb(t.context)}function Dr(t){at(!1)}function Yb(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Si.Pop,navigator:s,static:o=!1}=t;wa()&&at(!1);let a=e.replace(/^\/*/,"/"),l=$.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=va(r));let{pathname:c="/",search:h="",hash:f="",state:m=null,key:_="default"}=r,w=$.useMemo(()=>{let S=C_(c,a);return S==null?null:{location:{pathname:S,search:h,hash:f,state:m,key:_},navigationType:i}},[a,c,h,f,m,_,i]);return w==null?null:$.createElement(Ea.Provider,{value:l},$.createElement(Xd.Provider,{children:n,value:w}))}function Xb(t){let{children:e,location:n}=t;return Vb(Rm(e),n)}new Promise(()=>{});function Rm(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(r,i)=>{if(!$.isValidElement(r))return;let s=[...e,i];if(r.type===$.Fragment){n.push.apply(n,Rm(r.props.children,s));return}r.type!==Dr&&at(!1),!r.props.index||!r.props.children||at(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function km(){return km=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},km.apply(this,arguments)}function Jb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Zb(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function eN(t,e){return t.button===0&&(!e||e==="_self")&&!Zb(t)}const tN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],nN="startTransition",aE=xm[nN];function rN(t){let{basename:e,children:n,future:r,window:i}=t,s=$.useRef();s.current==null&&(s.current=lb({window:i,v5Compat:!0}));let o=s.current,[a,l]=$.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=$.useCallback(f=>{c&&aE?aE(()=>l(f)):l(f)},[l,c]);return $.useLayoutEffect(()=>o.listen(h),[o,h]),$.createElement(Yb,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const iN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jd=$.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h}=e,f=Jb(e,tN),{basename:m}=$.useContext(Ea),_,w=!1;if(typeof c=="string"&&sN.test(c)&&(_=c,iN))try{let g=new URL(window.location.href),I=c.startsWith("//")?new URL(g.protocol+c):new URL(c),O=C_(I.pathname,m);I.origin===g.origin&&O!=null?c=O+I.search+I.hash:w=!0}catch{}let S=Db(c,{relative:i}),R=oN(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function T(g){r&&r(g),g.defaultPrevented||R(g)}return $.createElement("a",km({},f,{href:_||S,onClick:w||s?r:T,ref:n,target:l}))});var lE;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(lE||(lE={}));var uE;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(uE||(uE={}));function oN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=vI(),l=Ta(),c=EI(t,{relative:o});return $.useCallback(h=>{if(eN(h,n)){h.preventDefault();let f=r!==void 0?r:Ph(l)===Ph(c);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}var Pm={},SI={exports:{}},An={},CI={exports:{}},xI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,ee){var te=q.length;q.push(ee);e:for(;0<te;){var Pe=te-1>>>1,ye=q[Pe];if(0<i(ye,ee))q[Pe]=ee,q[te]=ye,te=Pe;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],te=q.pop();if(te!==ee){q[0]=te;e:for(var Pe=0,ye=q.length,Ne=ye>>>1;Pe<Ne;){var Tt=2*(Pe+1)-1,Ut=q[Tt],ft=Tt+1,it=q[ft];if(0>i(Ut,te))ft<ye&&0>i(it,Ut)?(q[Pe]=it,q[ft]=te,Pe=ft):(q[Pe]=Ut,q[Tt]=te,Pe=Tt);else if(ft<ye&&0>i(it,te))q[Pe]=it,q[ft]=te,Pe=ft;else break e}}return ee}function i(q,ee){var te=q.sortIndex-ee.sortIndex;return te!==0?te:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,_=!1,w=!1,S=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(q){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=q)r(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function O(q){if(S=!1,I(q),!w)if(n(l)!==null)w=!0,rt(L);else{var ee=n(c);ee!==null&&Ie(O,ee.startTime-q)}}function L(q,ee){w=!1,S&&(S=!1,T(E),E=-1),_=!0;var te=m;try{for(I(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||q&&!k());){var Pe=f.callback;if(typeof Pe=="function"){f.callback=null,m=f.priorityLevel;var ye=Pe(f.expirationTime<=ee);ee=t.unstable_now(),typeof ye=="function"?f.callback=ye:f===n(l)&&r(l),I(ee)}else r(l);f=n(l)}if(f!==null)var Ne=!0;else{var Tt=n(c);Tt!==null&&Ie(O,Tt.startTime-ee),Ne=!1}return Ne}finally{f=null,m=te,_=!1}}var V=!1,v=null,E=-1,C=5,A=-1;function k(){return!(t.unstable_now()-A<C)}function b(){if(v!==null){var q=t.unstable_now();A=q;var ee=!0;try{ee=v(!0,q)}finally{ee?x():(V=!1,v=null)}}else V=!1}var x;if(typeof g=="function")x=function(){g(b)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Le=de.port2;de.port1.onmessage=b,x=function(){Le.postMessage(null)}}else x=function(){R(b,0)};function rt(q){v=q,V||(V=!0,x())}function Ie(q,ee){E=R(function(){q(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){w||_||(w=!0,rt(L))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(q){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var te=m;m=ee;try{return q()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var te=m;m=q;try{return ee()}finally{m=te}},t.unstable_scheduleCallback=function(q,ee,te){var Pe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Pe+te:Pe):te=Pe,q){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,q={id:h++,callback:ee,priorityLevel:q,startTime:te,expirationTime:ye,sortIndex:-1},te>Pe?(q.sortIndex=te,e(c,q),n(l)===null&&q===n(c)&&(S?(T(E),E=-1):S=!0,Ie(O,te-Pe))):(q.sortIndex=ye,e(l,q),w||_||(w=!0,rt(L))),q},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(q){var ee=m;return function(){var te=m;m=ee;try{return q.apply(this,arguments)}finally{m=te}}}})(xI);CI.exports=xI;var aN=CI.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var AI=$,xn=aN;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var RI=new Set,ql={};function $s(t,e){Go(t,e),Go(t+"Capture",e)}function Go(t,e){for(ql[t]=e,t=0;t<e.length;t++)RI.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bm=Object.prototype.hasOwnProperty,lN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cE={},hE={};function uN(t){return bm.call(hE,t)?!0:bm.call(cE,t)?!1:lN.test(t)?hE[t]=!0:(cE[t]=!0,!1)}function cN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hN(t,e,n,r){if(e===null||typeof e>"u"||cN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var P_=/[\-:]([a-z])/g;function b_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(P_,b_);Ft[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(P_,b_);Ft[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(P_,b_);Ft[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function N_(t,e,n,r){var i=Ft.hasOwnProperty(e)?Ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hN(e,n,i,r)&&(n=null),r||i===null?uN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ii=AI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ic=Symbol.for("react.element"),po=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),O_=Symbol.for("react.strict_mode"),Nm=Symbol.for("react.profiler"),kI=Symbol.for("react.provider"),PI=Symbol.for("react.context"),D_=Symbol.for("react.forward_ref"),Om=Symbol.for("react.suspense"),Dm=Symbol.for("react.suspense_list"),L_=Symbol.for("react.memo"),mi=Symbol.for("react.lazy"),bI=Symbol.for("react.offscreen"),dE=Symbol.iterator;function Ja(t){return t===null||typeof t!="object"?null:(t=dE&&t[dE]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,vp;function pl(t){if(vp===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vp=e&&e[1]||""}return`
`+vp+t}var Ep=!1;function wp(t,e){if(!t||Ep)return"";Ep=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ep=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pl(t):""}function dN(t){switch(t.tag){case 5:return pl(t.type);case 16:return pl("Lazy");case 13:return pl("Suspense");case 19:return pl("SuspenseList");case 0:case 2:case 15:return t=wp(t.type,!1),t;case 11:return t=wp(t.type.render,!1),t;case 1:return t=wp(t.type,!0),t;default:return""}}function Lm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mo:return"Fragment";case po:return"Portal";case Nm:return"Profiler";case O_:return"StrictMode";case Om:return"Suspense";case Dm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case PI:return(t.displayName||"Context")+".Consumer";case kI:return(t._context.displayName||"Context")+".Provider";case D_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case L_:return e=t.displayName||null,e!==null?e:Lm(t.type)||"Memo";case mi:e=t._payload,t=t._init;try{return Lm(t(e))}catch{}}return null}function fN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lm(e);case 8:return e===O_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Bi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function NI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pN(t){var e=NI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sc(t){t._valueTracker||(t._valueTracker=pN(t))}function OI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=NI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Oh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mm(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fE(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Bi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function DI(t,e){e=e.checked,e!=null&&N_(t,"checked",e,!1)}function Fm(t,e){DI(t,e);var n=Bi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vm(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vm(t,e.type,Bi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pE(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vm(t,e,n){(e!=="number"||Oh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ml=Array.isArray;function No(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Bi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Um(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mE(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ml(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Bi(n)}}function LI(t,e){var n=Bi(e.value),r=Bi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function gE(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function MI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?MI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cc,FI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Cc=Cc||document.createElement("div"),Cc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Cc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Gl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mN=["Webkit","ms","Moz","O"];Object.keys(Cl).forEach(function(t){mN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cl[e]=Cl[t]})});function VI(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cl.hasOwnProperty(t)&&Cl[t]?(""+e).trim():e+"px"}function UI(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=VI(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gN=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $m(t,e){if(e){if(gN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function zm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bm=null;function M_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wm=null,Oo=null,Do=null;function _E(t){if(t=Lu(t)){if(typeof Wm!="function")throw Error(B(280));var e=t.stateNode;e&&(e=rf(e),Wm(t.stateNode,t.type,e))}}function jI(t){Oo?Do?Do.push(t):Do=[t]:Oo=t}function $I(){if(Oo){var t=Oo,e=Do;if(Do=Oo=null,_E(t),e)for(t=0;t<e.length;t++)_E(e[t])}}function zI(t,e){return t(e)}function BI(){}var Tp=!1;function WI(t,e,n){if(Tp)return t(e,n);Tp=!0;try{return zI(t,e,n)}finally{Tp=!1,(Oo!==null||Do!==null)&&(BI(),$I())}}function Kl(t,e){var n=t.stateNode;if(n===null)return null;var r=rf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var Hm=!1;if(Kr)try{var Za={};Object.defineProperty(Za,"passive",{get:function(){Hm=!0}}),window.addEventListener("test",Za,Za),window.removeEventListener("test",Za,Za)}catch{Hm=!1}function _N(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var xl=!1,Dh=null,Lh=!1,qm=null,yN={onError:function(t){xl=!0,Dh=t}};function vN(t,e,n,r,i,s,o,a,l){xl=!1,Dh=null,_N.apply(yN,arguments)}function EN(t,e,n,r,i,s,o,a,l){if(vN.apply(this,arguments),xl){if(xl){var c=Dh;xl=!1,Dh=null}else throw Error(B(198));Lh||(Lh=!0,qm=c)}}function zs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function HI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function yE(t){if(zs(t)!==t)throw Error(B(188))}function wN(t){var e=t.alternate;if(!e){if(e=zs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return yE(i),t;if(s===r)return yE(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function qI(t){return t=wN(t),t!==null?GI(t):null}function GI(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=GI(t);if(e!==null)return e;t=t.sibling}return null}var KI=xn.unstable_scheduleCallback,vE=xn.unstable_cancelCallback,TN=xn.unstable_shouldYield,IN=xn.unstable_requestPaint,ot=xn.unstable_now,SN=xn.unstable_getCurrentPriorityLevel,F_=xn.unstable_ImmediatePriority,QI=xn.unstable_UserBlockingPriority,Mh=xn.unstable_NormalPriority,CN=xn.unstable_LowPriority,YI=xn.unstable_IdlePriority,Zd=null,mr=null;function xN(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(Zd,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:kN,AN=Math.log,RN=Math.LN2;function kN(t){return t>>>=0,t===0?32:31-(AN(t)/RN|0)|0}var xc=64,Ac=4194304;function gl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=gl(a):(s&=o,s!==0&&(r=gl(s)))}else o=n&~i,o!==0?r=gl(o):s!==0&&(r=gl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function PN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=PN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gm(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function XI(){var t=xc;return xc<<=1,!(xc&4194240)&&(xc=64),t}function Ip(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ou(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function NN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function V_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var be=0;function JI(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ZI,U_,eS,tS,nS,Km=!1,Rc=[],Pi=null,bi=null,Ni=null,Ql=new Map,Yl=new Map,_i=[],ON="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function EE(t,e){switch(t){case"focusin":case"focusout":Pi=null;break;case"dragenter":case"dragleave":bi=null;break;case"mouseover":case"mouseout":Ni=null;break;case"pointerover":case"pointerout":Ql.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yl.delete(e.pointerId)}}function el(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Lu(e),e!==null&&U_(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function DN(t,e,n,r,i){switch(e){case"focusin":return Pi=el(Pi,t,e,n,r,i),!0;case"dragenter":return bi=el(bi,t,e,n,r,i),!0;case"mouseover":return Ni=el(Ni,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ql.set(s,el(Ql.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yl.set(s,el(Yl.get(s)||null,t,e,n,r,i)),!0}return!1}function rS(t){var e=hs(t.target);if(e!==null){var n=zs(e);if(n!==null){if(e=n.tag,e===13){if(e=HI(n),e!==null){t.blockedOn=e,nS(t.priority,function(){eS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Qm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Bm=r,n.target.dispatchEvent(r),Bm=null}else return e=Lu(n),e!==null&&U_(e),t.blockedOn=n,!1;e.shift()}return!0}function wE(t,e,n){nh(t)&&n.delete(e)}function LN(){Km=!1,Pi!==null&&nh(Pi)&&(Pi=null),bi!==null&&nh(bi)&&(bi=null),Ni!==null&&nh(Ni)&&(Ni=null),Ql.forEach(wE),Yl.forEach(wE)}function tl(t,e){t.blockedOn===e&&(t.blockedOn=null,Km||(Km=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,LN)))}function Xl(t){function e(i){return tl(i,t)}if(0<Rc.length){tl(Rc[0],t);for(var n=1;n<Rc.length;n++){var r=Rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Pi!==null&&tl(Pi,t),bi!==null&&tl(bi,t),Ni!==null&&tl(Ni,t),Ql.forEach(e),Yl.forEach(e),n=0;n<_i.length;n++)r=_i[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<_i.length&&(n=_i[0],n.blockedOn===null);)rS(n),n.blockedOn===null&&_i.shift()}var Lo=ii.ReactCurrentBatchConfig,Vh=!0;function MN(t,e,n,r){var i=be,s=Lo.transition;Lo.transition=null;try{be=1,j_(t,e,n,r)}finally{be=i,Lo.transition=s}}function FN(t,e,n,r){var i=be,s=Lo.transition;Lo.transition=null;try{be=4,j_(t,e,n,r)}finally{be=i,Lo.transition=s}}function j_(t,e,n,r){if(Vh){var i=Qm(t,e,n,r);if(i===null)Op(t,e,r,Uh,n),EE(t,r);else if(DN(i,t,e,n,r))r.stopPropagation();else if(EE(t,r),e&4&&-1<ON.indexOf(t)){for(;i!==null;){var s=Lu(i);if(s!==null&&ZI(s),s=Qm(t,e,n,r),s===null&&Op(t,e,r,Uh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Op(t,e,r,null,n)}}var Uh=null;function Qm(t,e,n,r){if(Uh=null,t=M_(r),t=hs(t),t!==null)if(e=zs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=HI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Uh=t,null}function iS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SN()){case F_:return 1;case QI:return 4;case Mh:case CN:return 16;case YI:return 536870912;default:return 16}default:return 16}}var Ci=null,$_=null,rh=null;function sS(){if(rh)return rh;var t,e=$_,n=e.length,r,i="value"in Ci?Ci.value:Ci.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return rh=i.slice(t,1<r?1-r:void 0)}function ih(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function kc(){return!0}function TE(){return!1}function Rn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?kc:TE,this.isPropagationStopped=TE,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=kc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=kc)},persist:function(){},isPersistent:kc}),e}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},z_=Rn(Ia),Du=Ye({},Ia,{view:0,detail:0}),VN=Rn(Du),Sp,Cp,nl,ef=Ye({},Du,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:B_,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==nl&&(nl&&t.type==="mousemove"?(Sp=t.screenX-nl.screenX,Cp=t.screenY-nl.screenY):Cp=Sp=0,nl=t),Sp)},movementY:function(t){return"movementY"in t?t.movementY:Cp}}),IE=Rn(ef),UN=Ye({},ef,{dataTransfer:0}),jN=Rn(UN),$N=Ye({},Du,{relatedTarget:0}),xp=Rn($N),zN=Ye({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),BN=Rn(zN),WN=Ye({},Ia,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HN=Rn(WN),qN=Ye({},Ia,{data:0}),SE=Rn(qN),GN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function YN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QN[t])?!!e[t]:!1}function B_(){return YN}var XN=Ye({},Du,{key:function(t){if(t.key){var e=GN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ih(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:B_,charCode:function(t){return t.type==="keypress"?ih(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ih(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JN=Rn(XN),ZN=Ye({},ef,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),CE=Rn(ZN),e2=Ye({},Du,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:B_}),t2=Rn(e2),n2=Ye({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),r2=Rn(n2),i2=Ye({},ef,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s2=Rn(i2),o2=[9,13,27,32],W_=Kr&&"CompositionEvent"in window,Al=null;Kr&&"documentMode"in document&&(Al=document.documentMode);var a2=Kr&&"TextEvent"in window&&!Al,oS=Kr&&(!W_||Al&&8<Al&&11>=Al),xE=String.fromCharCode(32),AE=!1;function aS(t,e){switch(t){case"keyup":return o2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var go=!1;function l2(t,e){switch(t){case"compositionend":return lS(e);case"keypress":return e.which!==32?null:(AE=!0,xE);case"textInput":return t=e.data,t===xE&&AE?null:t;default:return null}}function u2(t,e){if(go)return t==="compositionend"||!W_&&aS(t,e)?(t=sS(),rh=$_=Ci=null,go=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return oS&&e.locale!=="ko"?null:e.data;default:return null}}var c2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function RE(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c2[t.type]:e==="textarea"}function uS(t,e,n,r){jI(r),e=jh(e,"onChange"),0<e.length&&(n=new z_("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Rl=null,Jl=null;function h2(t){ES(t,0)}function tf(t){var e=vo(t);if(OI(e))return t}function d2(t,e){if(t==="change")return e}var cS=!1;if(Kr){var Ap;if(Kr){var Rp="oninput"in document;if(!Rp){var kE=document.createElement("div");kE.setAttribute("oninput","return;"),Rp=typeof kE.oninput=="function"}Ap=Rp}else Ap=!1;cS=Ap&&(!document.documentMode||9<document.documentMode)}function PE(){Rl&&(Rl.detachEvent("onpropertychange",hS),Jl=Rl=null)}function hS(t){if(t.propertyName==="value"&&tf(Jl)){var e=[];uS(e,Jl,t,M_(t)),WI(h2,e)}}function f2(t,e,n){t==="focusin"?(PE(),Rl=e,Jl=n,Rl.attachEvent("onpropertychange",hS)):t==="focusout"&&PE()}function p2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return tf(Jl)}function m2(t,e){if(t==="click")return tf(e)}function g2(t,e){if(t==="input"||t==="change")return tf(e)}function _2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:_2;function Zl(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!bm.call(e,i)||!nr(t[i],e[i]))return!1}return!0}function bE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function NE(t,e){var n=bE(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bE(n)}}function dS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fS(){for(var t=window,e=Oh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oh(t.document)}return e}function H_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function y2(t){var e=fS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dS(n.ownerDocument.documentElement,n)){if(r!==null&&H_(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=NE(n,s);var o=NE(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var v2=Kr&&"documentMode"in document&&11>=document.documentMode,_o=null,Ym=null,kl=null,Xm=!1;function OE(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xm||_o==null||_o!==Oh(r)||(r=_o,"selectionStart"in r&&H_(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),kl&&Zl(kl,r)||(kl=r,r=jh(Ym,"onSelect"),0<r.length&&(e=new z_("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_o)))}function Pc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yo={animationend:Pc("Animation","AnimationEnd"),animationiteration:Pc("Animation","AnimationIteration"),animationstart:Pc("Animation","AnimationStart"),transitionend:Pc("Transition","TransitionEnd")},kp={},pS={};Kr&&(pS=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function nf(t){if(kp[t])return kp[t];if(!yo[t])return t;var e=yo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pS)return kp[t]=e[n];return t}var mS=nf("animationend"),gS=nf("animationiteration"),_S=nf("animationstart"),yS=nf("transitionend"),vS=new Map,DE="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){vS.set(t,e),$s(e,[t])}for(var Pp=0;Pp<DE.length;Pp++){var bp=DE[Pp],E2=bp.toLowerCase(),w2=bp[0].toUpperCase()+bp.slice(1);Xi(E2,"on"+w2)}Xi(mS,"onAnimationEnd");Xi(gS,"onAnimationIteration");Xi(_S,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(yS,"onTransitionEnd");Go("onMouseEnter",["mouseout","mouseover"]);Go("onMouseLeave",["mouseout","mouseover"]);Go("onPointerEnter",["pointerout","pointerover"]);Go("onPointerLeave",["pointerout","pointerover"]);$s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$s("onBeforeInput",["compositionend","keypress","textInput","paste"]);$s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),T2=new Set("cancel close invalid load scroll toggle".split(" ").concat(_l));function LE(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,EN(r,e,void 0,t),t.currentTarget=null}function ES(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;LE(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;LE(i,a,c),s=l}}}if(Lh)throw t=qm,Lh=!1,qm=null,t}function $e(t,e){var n=e[ng];n===void 0&&(n=e[ng]=new Set);var r=t+"__bubble";n.has(r)||(wS(e,t,2,!1),n.add(r))}function Np(t,e,n){var r=0;e&&(r|=4),wS(n,t,r,e)}var bc="_reactListening"+Math.random().toString(36).slice(2);function eu(t){if(!t[bc]){t[bc]=!0,RI.forEach(function(n){n!=="selectionchange"&&(T2.has(n)||Np(n,!1,t),Np(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bc]||(e[bc]=!0,Np("selectionchange",!1,e))}}function wS(t,e,n,r){switch(iS(e)){case 1:var i=MN;break;case 4:i=FN;break;default:i=j_}n=i.bind(null,e,n,t),i=void 0,!Hm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Op(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=hs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}WI(function(){var c=s,h=M_(n),f=[];e:{var m=vS.get(t);if(m!==void 0){var _=z_,w=t;switch(t){case"keypress":if(ih(n)===0)break e;case"keydown":case"keyup":_=JN;break;case"focusin":w="focus",_=xp;break;case"focusout":w="blur",_=xp;break;case"beforeblur":case"afterblur":_=xp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=IE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=jN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=t2;break;case mS:case gS:case _S:_=BN;break;case yS:_=r2;break;case"scroll":_=VN;break;case"wheel":_=s2;break;case"copy":case"cut":case"paste":_=HN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=CE}var S=(e&4)!==0,R=!S&&t==="scroll",T=S?m!==null?m+"Capture":null:m;S=[];for(var g=c,I;g!==null;){I=g;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,T!==null&&(O=Kl(g,T),O!=null&&S.push(tu(g,O,I)))),R)break;g=g.return}0<S.length&&(m=new _(m,w,null,n,h),f.push({event:m,listeners:S}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Bm&&(w=n.relatedTarget||n.fromElement)&&(hs(w)||w[Qr]))break e;if((_||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,_?(w=n.relatedTarget||n.toElement,_=c,w=w?hs(w):null,w!==null&&(R=zs(w),w!==R||w.tag!==5&&w.tag!==6)&&(w=null)):(_=null,w=c),_!==w)){if(S=IE,O="onMouseLeave",T="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(S=CE,O="onPointerLeave",T="onPointerEnter",g="pointer"),R=_==null?m:vo(_),I=w==null?m:vo(w),m=new S(O,g+"leave",_,n,h),m.target=R,m.relatedTarget=I,O=null,hs(h)===c&&(S=new S(T,g+"enter",w,n,h),S.target=I,S.relatedTarget=R,O=S),R=O,_&&w)t:{for(S=_,T=w,g=0,I=S;I;I=so(I))g++;for(I=0,O=T;O;O=so(O))I++;for(;0<g-I;)S=so(S),g--;for(;0<I-g;)T=so(T),I--;for(;g--;){if(S===T||T!==null&&S===T.alternate)break t;S=so(S),T=so(T)}S=null}else S=null;_!==null&&ME(f,m,_,S,!1),w!==null&&R!==null&&ME(f,R,w,S,!0)}}e:{if(m=c?vo(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var L=d2;else if(RE(m))if(cS)L=g2;else{L=p2;var V=f2}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=m2);if(L&&(L=L(t,c))){uS(f,L,n,h);break e}V&&V(t,m,c),t==="focusout"&&(V=m._wrapperState)&&V.controlled&&m.type==="number"&&Vm(m,"number",m.value)}switch(V=c?vo(c):window,t){case"focusin":(RE(V)||V.contentEditable==="true")&&(_o=V,Ym=c,kl=null);break;case"focusout":kl=Ym=_o=null;break;case"mousedown":Xm=!0;break;case"contextmenu":case"mouseup":case"dragend":Xm=!1,OE(f,n,h);break;case"selectionchange":if(v2)break;case"keydown":case"keyup":OE(f,n,h)}var v;if(W_)e:{switch(t){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else go?aS(t,n)&&(E="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(oS&&n.locale!=="ko"&&(go||E!=="onCompositionStart"?E==="onCompositionEnd"&&go&&(v=sS()):(Ci=h,$_="value"in Ci?Ci.value:Ci.textContent,go=!0)),V=jh(c,E),0<V.length&&(E=new SE(E,t,null,n,h),f.push({event:E,listeners:V}),v?E.data=v:(v=lS(n),v!==null&&(E.data=v)))),(v=a2?l2(t,n):u2(t,n))&&(c=jh(c,"onBeforeInput"),0<c.length&&(h=new SE("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=v))}ES(f,e)})}function tu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Kl(t,n),s!=null&&r.unshift(tu(t,s,i)),s=Kl(t,e),s!=null&&r.push(tu(t,s,i))),t=t.return}return r}function so(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ME(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Kl(n,s),l!=null&&o.unshift(tu(n,l,a))):i||(l=Kl(n,s),l!=null&&o.push(tu(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var I2=/\r\n?/g,S2=/\u0000|\uFFFD/g;function FE(t){return(typeof t=="string"?t:""+t).replace(I2,`
`).replace(S2,"")}function Nc(t,e,n){if(e=FE(e),FE(t)!==e&&n)throw Error(B(425))}function $h(){}var Jm=null,Zm=null;function eg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tg=typeof setTimeout=="function"?setTimeout:void 0,C2=typeof clearTimeout=="function"?clearTimeout:void 0,VE=typeof Promise=="function"?Promise:void 0,x2=typeof queueMicrotask=="function"?queueMicrotask:typeof VE<"u"?function(t){return VE.resolve(null).then(t).catch(A2)}:tg;function A2(t){setTimeout(function(){throw t})}function Dp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Xl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xl(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function UE(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Sa=Math.random().toString(36).slice(2),cr="__reactFiber$"+Sa,nu="__reactProps$"+Sa,Qr="__reactContainer$"+Sa,ng="__reactEvents$"+Sa,R2="__reactListeners$"+Sa,k2="__reactHandles$"+Sa;function hs(t){var e=t[cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qr]||n[cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=UE(t);t!==null;){if(n=t[cr])return n;t=UE(t)}return e}t=n,n=t.parentNode}return null}function Lu(t){return t=t[cr]||t[Qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function rf(t){return t[nu]||null}var rg=[],Eo=-1;function Ji(t){return{current:t}}function He(t){0>Eo||(t.current=rg[Eo],rg[Eo]=null,Eo--)}function Ve(t,e){Eo++,rg[Eo]=t.current,t.current=e}var Wi={},Xt=Ji(Wi),fn=Ji(!1),xs=Wi;function Ko(t,e){var n=t.type.contextTypes;if(!n)return Wi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pn(t){return t=t.childContextTypes,t!=null}function zh(){He(fn),He(Xt)}function jE(t,e,n){if(Xt.current!==Wi)throw Error(B(168));Ve(Xt,e),Ve(fn,n)}function TS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,fN(t)||"Unknown",i));return Ye({},n,r)}function Bh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,xs=Xt.current,Ve(Xt,t),Ve(fn,fn.current),!0}function $E(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=TS(t,e,xs),r.__reactInternalMemoizedMergedChildContext=t,He(fn),He(Xt),Ve(Xt,t)):He(fn),Ve(fn,n)}var Fr=null,sf=!1,Lp=!1;function IS(t){Fr===null?Fr=[t]:Fr.push(t)}function P2(t){sf=!0,IS(t)}function Zi(){if(!Lp&&Fr!==null){Lp=!0;var t=0,e=be;try{var n=Fr;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fr=null,sf=!1}catch(i){throw Fr!==null&&(Fr=Fr.slice(t+1)),KI(F_,Zi),i}finally{be=e,Lp=!1}}return null}var wo=[],To=0,Wh=null,Hh=0,Pn=[],bn=0,As=null,Vr=1,Ur="";function as(t,e){wo[To++]=Hh,wo[To++]=Wh,Wh=t,Hh=e}function SS(t,e,n){Pn[bn++]=Vr,Pn[bn++]=Ur,Pn[bn++]=As,As=t;var r=Vr;t=Ur;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var s=32-Jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vr=1<<32-Jn(e)+i|n<<i|r,Ur=s+t}else Vr=1<<s|n<<i|r,Ur=t}function q_(t){t.return!==null&&(as(t,1),SS(t,1,0))}function G_(t){for(;t===Wh;)Wh=wo[--To],wo[To]=null,Hh=wo[--To],wo[To]=null;for(;t===As;)As=Pn[--bn],Pn[bn]=null,Ur=Pn[--bn],Pn[bn]=null,Vr=Pn[--bn],Pn[bn]=null}var In=null,Tn=null,Ge=!1,Hn=null;function CS(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Tn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=As!==null?{id:Vr,overflow:Ur}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Tn=null,!0):!1;default:return!1}}function ig(t){return(t.mode&1)!==0&&(t.flags&128)===0}function sg(t){if(Ge){var e=Tn;if(e){var n=e;if(!zE(t,e)){if(ig(t))throw Error(B(418));e=Oi(n.nextSibling);var r=In;e&&zE(t,e)?CS(r,n):(t.flags=t.flags&-4097|2,Ge=!1,In=t)}}else{if(ig(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ge=!1,In=t}}}function BE(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function Oc(t){if(t!==In)return!1;if(!Ge)return BE(t),Ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eg(t.type,t.memoizedProps)),e&&(e=Tn)){if(ig(t))throw xS(),Error(B(418));for(;e;)CS(t,e),e=Oi(e.nextSibling)}if(BE(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=In?Oi(t.stateNode.nextSibling):null;return!0}function xS(){for(var t=Tn;t;)t=Oi(t.nextSibling)}function Qo(){Tn=In=null,Ge=!1}function K_(t){Hn===null?Hn=[t]:Hn.push(t)}var b2=ii.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var qh=Ji(null),Gh=null,Io=null,Q_=null;function Y_(){Q_=Io=Gh=null}function X_(t){var e=qh.current;He(qh),t._currentValue=e}function og(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Mo(t,e){Gh=t,Q_=Io=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function Fn(t){var e=t._currentValue;if(Q_!==t)if(t={context:t,memoizedValue:e,next:null},Io===null){if(Gh===null)throw Error(B(308));Io=t,Gh.dependencies={lanes:0,firstContext:t}}else Io=Io.next=t;return e}var ds=null;function J_(t){ds===null?ds=[t]:ds.push(t)}function AS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,J_(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yr(t,r)}function Yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gi=!1;function Z_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function RS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Di(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,we&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yr(t,n)}return i=r.interleaved,i===null?(e.next=e,J_(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yr(t,n)}function sh(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,V_(t,n)}}function WE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kh(t,e,n,r){var i=t.updateQueue;gi=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,_=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,S=a;switch(m=e,_=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){f=w.call(_,f,m);break e}f=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(_,f,m):w,m==null)break e;f=Ye({},f,m);break e;case 2:gi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else _={eventTime:_,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,l=f):h=h.next=_,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ks|=o,t.lanes=o,t.memoizedState=f}}function HE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var kS=new AI.Component().refs;function ag(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var of={isMounted:function(t){return(t=t._reactInternals)?zs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rn(),i=Mi(t),s=Wr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,i),e!==null&&(Zn(e,t,i,r),sh(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rn(),i=Mi(t),s=Wr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Di(t,s,i),e!==null&&(Zn(e,t,i,r),sh(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),r=Mi(t),i=Wr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Di(t,i,r),e!==null&&(Zn(e,t,r,n),sh(e,t,r))}};function qE(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zl(n,r)||!Zl(i,s):!0}function PS(t,e,n){var r=!1,i=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Fn(s):(i=pn(e)?xs:Xt.current,r=e.contextTypes,s=(r=r!=null)?Ko(t,i):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=of,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function GE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&of.enqueueReplaceState(e,e.state,null)}function lg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=kS,Z_(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Fn(s):(s=pn(e)?xs:Xt.current,i.context=Ko(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ag(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&of.enqueueReplaceState(i,i.state,null),Kh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function rl(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===kS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Dc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function KE(t){var e=t._init;return e(t._payload)}function bS(t){function e(T,g){if(t){var I=T.deletions;I===null?(T.deletions=[g],T.flags|=16):I.push(g)}}function n(T,g){if(!t)return null;for(;g!==null;)e(T,g),g=g.sibling;return null}function r(T,g){for(T=new Map;g!==null;)g.key!==null?T.set(g.key,g):T.set(g.index,g),g=g.sibling;return T}function i(T,g){return T=Fi(T,g),T.index=0,T.sibling=null,T}function s(T,g,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<g?(T.flags|=2,g):I):(T.flags|=2,g)):(T.flags|=1048576,g)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function a(T,g,I,O){return g===null||g.tag!==6?(g=zp(I,T.mode,O),g.return=T,g):(g=i(g,I),g.return=T,g)}function l(T,g,I,O){var L=I.type;return L===mo?h(T,g,I.props.children,O,I.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mi&&KE(L)===g.type)?(O=i(g,I.props),O.ref=rl(T,g,I),O.return=T,O):(O=hh(I.type,I.key,I.props,null,T.mode,O),O.ref=rl(T,g,I),O.return=T,O)}function c(T,g,I,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==I.containerInfo||g.stateNode.implementation!==I.implementation?(g=Bp(I,T.mode,O),g.return=T,g):(g=i(g,I.children||[]),g.return=T,g)}function h(T,g,I,O,L){return g===null||g.tag!==7?(g=Es(I,T.mode,O,L),g.return=T,g):(g=i(g,I),g.return=T,g)}function f(T,g,I){if(typeof g=="string"&&g!==""||typeof g=="number")return g=zp(""+g,T.mode,I),g.return=T,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ic:return I=hh(g.type,g.key,g.props,null,T.mode,I),I.ref=rl(T,null,g),I.return=T,I;case po:return g=Bp(g,T.mode,I),g.return=T,g;case mi:var O=g._init;return f(T,O(g._payload),I)}if(ml(g)||Ja(g))return g=Es(g,T.mode,I,null),g.return=T,g;Dc(T,g)}return null}function m(T,g,I,O){var L=g!==null?g.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:a(T,g,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Ic:return I.key===L?l(T,g,I,O):null;case po:return I.key===L?c(T,g,I,O):null;case mi:return L=I._init,m(T,g,L(I._payload),O)}if(ml(I)||Ja(I))return L!==null?null:h(T,g,I,O,null);Dc(T,I)}return null}function _(T,g,I,O,L){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(I)||null,a(g,T,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ic:return T=T.get(O.key===null?I:O.key)||null,l(g,T,O,L);case po:return T=T.get(O.key===null?I:O.key)||null,c(g,T,O,L);case mi:var V=O._init;return _(T,g,I,V(O._payload),L)}if(ml(O)||Ja(O))return T=T.get(I)||null,h(g,T,O,L,null);Dc(g,O)}return null}function w(T,g,I,O){for(var L=null,V=null,v=g,E=g=0,C=null;v!==null&&E<I.length;E++){v.index>E?(C=v,v=null):C=v.sibling;var A=m(T,v,I[E],O);if(A===null){v===null&&(v=C);break}t&&v&&A.alternate===null&&e(T,v),g=s(A,g,E),V===null?L=A:V.sibling=A,V=A,v=C}if(E===I.length)return n(T,v),Ge&&as(T,E),L;if(v===null){for(;E<I.length;E++)v=f(T,I[E],O),v!==null&&(g=s(v,g,E),V===null?L=v:V.sibling=v,V=v);return Ge&&as(T,E),L}for(v=r(T,v);E<I.length;E++)C=_(v,T,E,I[E],O),C!==null&&(t&&C.alternate!==null&&v.delete(C.key===null?E:C.key),g=s(C,g,E),V===null?L=C:V.sibling=C,V=C);return t&&v.forEach(function(k){return e(T,k)}),Ge&&as(T,E),L}function S(T,g,I,O){var L=Ja(I);if(typeof L!="function")throw Error(B(150));if(I=L.call(I),I==null)throw Error(B(151));for(var V=L=null,v=g,E=g=0,C=null,A=I.next();v!==null&&!A.done;E++,A=I.next()){v.index>E?(C=v,v=null):C=v.sibling;var k=m(T,v,A.value,O);if(k===null){v===null&&(v=C);break}t&&v&&k.alternate===null&&e(T,v),g=s(k,g,E),V===null?L=k:V.sibling=k,V=k,v=C}if(A.done)return n(T,v),Ge&&as(T,E),L;if(v===null){for(;!A.done;E++,A=I.next())A=f(T,A.value,O),A!==null&&(g=s(A,g,E),V===null?L=A:V.sibling=A,V=A);return Ge&&as(T,E),L}for(v=r(T,v);!A.done;E++,A=I.next())A=_(v,T,E,A.value,O),A!==null&&(t&&A.alternate!==null&&v.delete(A.key===null?E:A.key),g=s(A,g,E),V===null?L=A:V.sibling=A,V=A);return t&&v.forEach(function(b){return e(T,b)}),Ge&&as(T,E),L}function R(T,g,I,O){if(typeof I=="object"&&I!==null&&I.type===mo&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Ic:e:{for(var L=I.key,V=g;V!==null;){if(V.key===L){if(L=I.type,L===mo){if(V.tag===7){n(T,V.sibling),g=i(V,I.props.children),g.return=T,T=g;break e}}else if(V.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===mi&&KE(L)===V.type){n(T,V.sibling),g=i(V,I.props),g.ref=rl(T,V,I),g.return=T,T=g;break e}n(T,V);break}else e(T,V);V=V.sibling}I.type===mo?(g=Es(I.props.children,T.mode,O,I.key),g.return=T,T=g):(O=hh(I.type,I.key,I.props,null,T.mode,O),O.ref=rl(T,g,I),O.return=T,T=O)}return o(T);case po:e:{for(V=I.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===I.containerInfo&&g.stateNode.implementation===I.implementation){n(T,g.sibling),g=i(g,I.children||[]),g.return=T,T=g;break e}else{n(T,g);break}else e(T,g);g=g.sibling}g=Bp(I,T.mode,O),g.return=T,T=g}return o(T);case mi:return V=I._init,R(T,g,V(I._payload),O)}if(ml(I))return w(T,g,I,O);if(Ja(I))return S(T,g,I,O);Dc(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,g!==null&&g.tag===6?(n(T,g.sibling),g=i(g,I),g.return=T,T=g):(n(T,g),g=zp(I,T.mode,O),g.return=T,T=g),o(T)):n(T,g)}return R}var Yo=bS(!0),NS=bS(!1),Mu={},gr=Ji(Mu),ru=Ji(Mu),iu=Ji(Mu);function fs(t){if(t===Mu)throw Error(B(174));return t}function ey(t,e){switch(Ve(iu,e),Ve(ru,t),Ve(gr,Mu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=jm(e,t)}He(gr),Ve(gr,e)}function Xo(){He(gr),He(ru),He(iu)}function OS(t){fs(iu.current);var e=fs(gr.current),n=jm(e,t.type);e!==n&&(Ve(ru,t),Ve(gr,n))}function ty(t){ru.current===t&&(He(gr),He(ru))}var Ke=Ji(0);function Qh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mp=[];function ny(){for(var t=0;t<Mp.length;t++)Mp[t]._workInProgressVersionPrimary=null;Mp.length=0}var oh=ii.ReactCurrentDispatcher,Fp=ii.ReactCurrentBatchConfig,Rs=0,Qe=null,mt=null,Ct=null,Yh=!1,Pl=!1,su=0,N2=0;function zt(){throw Error(B(321))}function ry(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function iy(t,e,n,r,i,s){if(Rs=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oh.current=t===null||t.memoizedState===null?M2:F2,t=n(r,i),Pl){s=0;do{if(Pl=!1,su=0,25<=s)throw Error(B(301));s+=1,Ct=mt=null,e.updateQueue=null,oh.current=V2,t=n(r,i)}while(Pl)}if(oh.current=Xh,e=mt!==null&&mt.next!==null,Rs=0,Ct=mt=Qe=null,Yh=!1,e)throw Error(B(300));return t}function sy(){var t=su!==0;return su=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Qe.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Vn(){if(mt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=mt.next;var e=Ct===null?Qe.memoizedState:Ct.next;if(e!==null)Ct=e,mt=t;else{if(t===null)throw Error(B(310));mt=t,t={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Ct===null?Qe.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function ou(t,e){return typeof e=="function"?e(t):e}function Vp(t){var e=Vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=mt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((Rs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Qe.lanes|=h,ks|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,nr(r,e.memoizedState)||(cn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,ks|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Up(t){var e=Vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nr(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function DS(){}function LS(t,e){var n=Qe,r=Vn(),i=e(),s=!nr(r.memoizedState,i);if(s&&(r.memoizedState=i,cn=!0),r=r.queue,oy(VS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,au(9,FS.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(B(349));Rs&30||MS(n,e,i)}return i}function MS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function FS(t,e,n,r){e.value=n,e.getSnapshot=r,US(e)&&jS(t)}function VS(t,e,n){return n(function(){US(e)&&jS(t)})}function US(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function jS(t){var e=Yr(t,1);e!==null&&Zn(e,t,1,-1)}function QE(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ou,lastRenderedState:t},e.queue=t,t=t.dispatch=L2.bind(null,Qe,t),[e.memoizedState,t]}function au(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $S(){return Vn().memoizedState}function ah(t,e,n,r){var i=sr();Qe.flags|=t,i.memoizedState=au(1|e,n,void 0,r===void 0?null:r)}function af(t,e,n,r){var i=Vn();r=r===void 0?null:r;var s=void 0;if(mt!==null){var o=mt.memoizedState;if(s=o.destroy,r!==null&&ry(r,o.deps)){i.memoizedState=au(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=au(1|e,n,s,r)}function YE(t,e){return ah(8390656,8,t,e)}function oy(t,e){return af(2048,8,t,e)}function zS(t,e){return af(4,2,t,e)}function BS(t,e){return af(4,4,t,e)}function WS(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function HS(t,e,n){return n=n!=null?n.concat([t]):null,af(4,4,WS.bind(null,e,t),n)}function ay(){}function qS(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ry(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function GS(t,e){var n=Vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ry(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function KS(t,e,n){return Rs&21?(nr(n,e)||(n=XI(),Qe.lanes|=n,ks|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function O2(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Fp.transition;Fp.transition={};try{t(!1),e()}finally{be=n,Fp.transition=r}}function QS(){return Vn().memoizedState}function D2(t,e,n){var r=Mi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},YS(t))XS(e,n);else if(n=AS(t,e,n,r),n!==null){var i=rn();Zn(n,t,r,i),JS(n,e,r)}}function L2(t,e,n){var r=Mi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(YS(t))XS(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nr(a,o)){var l=e.interleaved;l===null?(i.next=i,J_(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=AS(t,e,i,r),n!==null&&(i=rn(),Zn(n,t,r,i),JS(n,e,r))}}function YS(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function XS(t,e){Pl=Yh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function JS(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,V_(t,n)}}var Xh={readContext:Fn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},M2={readContext:Fn,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Fn,useEffect:YE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ah(4194308,4,WS.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ah(4194308,4,t,e)},useInsertionEffect:function(t,e){return ah(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=D2.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:QE,useDebugValue:ay,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=QE(!1),e=t[0];return t=O2.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=sr();if(Ge){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),kt===null)throw Error(B(349));Rs&30||MS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,YE(VS.bind(null,r,s,t),[t]),r.flags|=2048,au(9,FS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=kt.identifierPrefix;if(Ge){var n=Ur,r=Vr;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=su++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=N2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F2={readContext:Fn,useCallback:qS,useContext:Fn,useEffect:oy,useImperativeHandle:HS,useInsertionEffect:zS,useLayoutEffect:BS,useMemo:GS,useReducer:Vp,useRef:$S,useState:function(){return Vp(ou)},useDebugValue:ay,useDeferredValue:function(t){var e=Vn();return KS(e,mt.memoizedState,t)},useTransition:function(){var t=Vp(ou)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:DS,useSyncExternalStore:LS,useId:QS,unstable_isNewReconciler:!1},V2={readContext:Fn,useCallback:qS,useContext:Fn,useEffect:oy,useImperativeHandle:HS,useInsertionEffect:zS,useLayoutEffect:BS,useMemo:GS,useReducer:Up,useRef:$S,useState:function(){return Up(ou)},useDebugValue:ay,useDeferredValue:function(t){var e=Vn();return mt===null?e.memoizedState=t:KS(e,mt.memoizedState,t)},useTransition:function(){var t=Up(ou)[0],e=Vn().memoizedState;return[t,e]},useMutableSource:DS,useSyncExternalStore:LS,useId:QS,unstable_isNewReconciler:!1};function Jo(t,e){try{var n="",r=e;do n+=dN(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function jp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ug(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var U2=typeof WeakMap=="function"?WeakMap:Map;function ZS(t,e,n){n=Wr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Zh||(Zh=!0,vg=r),ug(t,e)},n}function eC(t,e,n){n=Wr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ug(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ug(t,e),typeof r!="function"&&(Li===null?Li=new Set([this]):Li.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function XE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new U2;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Z2.bind(null,t,e,n),e.then(t,t))}function JE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ZE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wr(-1,1),e.tag=2,Di(n,e,1))),n.lanes|=1),t)}var j2=ii.ReactCurrentOwner,cn=!1;function tn(t,e,n,r){e.child=t===null?NS(e,null,n,r):Yo(e,t.child,n,r)}function ew(t,e,n,r,i){n=n.render;var s=e.ref;return Mo(e,i),r=iy(t,e,n,r,s,i),n=sy(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xr(t,e,i)):(Ge&&n&&q_(e),e.flags|=1,tn(t,e,r,i),e.child)}function tw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!my(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,tC(t,e,s,r,i)):(t=hh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Zl,n(o,r)&&t.ref===e.ref)return Xr(t,e,i)}return e.flags|=1,t=Fi(s,r),t.ref=e.ref,t.return=e,e.child=t}function tC(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Zl(s,r)&&t.ref===e.ref)if(cn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Xr(t,e,i)}return cg(t,e,n,r,i)}function nC(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(Co,En),En|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(Co,En),En|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ve(Co,En),En|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ve(Co,En),En|=r;return tn(t,e,i,n),e.child}function rC(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cg(t,e,n,r,i){var s=pn(n)?xs:Xt.current;return s=Ko(e,s),Mo(e,i),n=iy(t,e,n,r,s,i),r=sy(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xr(t,e,i)):(Ge&&r&&q_(e),e.flags|=1,tn(t,e,n,i),e.child)}function nw(t,e,n,r,i){if(pn(n)){var s=!0;Bh(e)}else s=!1;if(Mo(e,i),e.stateNode===null)lh(t,e),PS(e,n,r),lg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Fn(c):(c=pn(n)?xs:Xt.current,c=Ko(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&GE(e,o,r,c),gi=!1;var m=e.memoizedState;o.state=m,Kh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||fn.current||gi?(typeof h=="function"&&(ag(e,n,h,r),l=e.memoizedState),(a=gi||qE(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,RS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Fn(l):(l=pn(n)?xs:Xt.current,l=Ko(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&GE(e,o,r,l),gi=!1,m=e.memoizedState,o.state=m,Kh(e,r,o,i);var w=e.memoizedState;a!==f||m!==w||fn.current||gi?(typeof _=="function"&&(ag(e,n,_,r),w=e.memoizedState),(c=gi||qE(e,n,c,r,m,w,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return hg(t,e,n,r,s,i)}function hg(t,e,n,r,i,s){rC(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$E(e,n,!1),Xr(t,e,s);r=e.stateNode,j2.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Yo(e,t.child,null,s),e.child=Yo(e,null,a,s)):tn(t,e,a,s),e.memoizedState=r.state,i&&$E(e,n,!0),e.child}function iC(t){var e=t.stateNode;e.pendingContext?jE(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jE(t,e.context,!1),ey(t,e.containerInfo)}function rw(t,e,n,r,i){return Qo(),K_(i),e.flags|=256,tn(t,e,n,r),e.child}var dg={dehydrated:null,treeContext:null,retryLane:0};function fg(t){return{baseLanes:t,cachePool:null,transitions:null}}function sC(t,e,n){var r=e.pendingProps,i=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ve(Ke,i&1),t===null)return sg(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=cf(o,r,0,null),t=Es(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fg(n),e.memoizedState=dg,t):ly(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $2(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Fi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Fi(a,s):(s=Es(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?fg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=dg,r}return s=t.child,t=s.sibling,r=Fi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ly(t,e){return e=cf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Lc(t,e,n,r){return r!==null&&K_(r),Yo(e,t.child,null,n),t=ly(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $2(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=jp(Error(B(422))),Lc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=cf({mode:"visible",children:r.children},i,0,null),s=Es(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Yo(e,t.child,null,o),e.child.memoizedState=fg(o),e.memoizedState=dg,s);if(!(e.mode&1))return Lc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=jp(s,r,void 0),Lc(t,e,o,r)}if(a=(o&t.childLanes)!==0,cn||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yr(t,i),Zn(r,t,i,-1))}return py(),r=jp(Error(B(421))),Lc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=eO.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Tn=Oi(i.nextSibling),In=e,Ge=!0,Hn=null,t!==null&&(Pn[bn++]=Vr,Pn[bn++]=Ur,Pn[bn++]=As,Vr=t.id,Ur=t.overflow,As=e),e=ly(e,r.children),e.flags|=4096,e)}function iw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),og(t.return,e,n)}function $p(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function oC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tn(t,e,r.children,n),r=Ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&iw(t,n,e);else if(t.tag===19)iw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ve(Ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$p(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$p(e,!0,n,null,s);break;case"together":$p(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function lh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ks|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Fi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Fi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function z2(t,e,n){switch(e.tag){case 3:iC(e),Qo();break;case 5:OS(e);break;case 1:pn(e.type)&&Bh(e);break;case 4:ey(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ve(qh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ve(Ke,Ke.current&1),e.flags|=128,null):n&e.child.childLanes?sC(t,e,n):(Ve(Ke,Ke.current&1),t=Xr(t,e,n),t!==null?t.sibling:null);Ve(Ke,Ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return oC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(Ke,Ke.current),r)break;return null;case 22:case 23:return e.lanes=0,nC(t,e,n)}return Xr(t,e,n)}var aC,pg,lC,uC;aC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pg=function(){};lC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,fs(gr.current);var s=null;switch(n){case"input":i=Mm(t,i),r=Mm(t,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=Um(t,i),r=Um(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=$h)}$m(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ql.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ql.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};uC=function(t,e,n,r){n!==r&&(e.flags|=4)};function il(t,e){if(!Ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function B2(t,e,n){var r=e.pendingProps;switch(G_(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return pn(e.type)&&zh(),Bt(e),null;case 3:return r=e.stateNode,Xo(),He(fn),He(Xt),ny(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Tg(Hn),Hn=null))),pg(t,e),Bt(e),null;case 5:ty(e);var i=fs(iu.current);if(n=e.type,t!==null&&e.stateNode!=null)lC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Bt(e),null}if(t=fs(gr.current),Oc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cr]=e,r[nu]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(i=0;i<_l.length;i++)$e(_l[i],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":fE(r,s),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$e("invalid",r);break;case"textarea":mE(r,s),$e("invalid",r)}$m(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Nc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Nc(r.textContent,a,t),i=["children",""+a]):ql.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",r)}switch(n){case"input":Sc(r),pE(r,s,!0);break;case"textarea":Sc(r),gE(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=$h)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=MI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cr]=e,t[nu]=r,aC(t,e,!1,!1),e.stateNode=t;e:{switch(o=zm(n,r),n){case"dialog":$e("cancel",t),$e("close",t),i=r;break;case"iframe":case"object":case"embed":$e("load",t),i=r;break;case"video":case"audio":for(i=0;i<_l.length;i++)$e(_l[i],t);i=r;break;case"source":$e("error",t),i=r;break;case"img":case"image":case"link":$e("error",t),$e("load",t),i=r;break;case"details":$e("toggle",t),i=r;break;case"input":fE(t,r),i=Mm(t,r),$e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),$e("invalid",t);break;case"textarea":mE(t,r),i=Um(t,r),$e("invalid",t);break;default:i=r}$m(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?UI(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&FI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Gl(t,l):typeof l=="number"&&Gl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ql.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&N_(t,s,l,o))}switch(n){case"input":Sc(t),pE(t,r,!1);break;case"textarea":Sc(t),gE(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Bi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?No(t,!!r.multiple,s,!1):r.defaultValue!=null&&No(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=$h)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)uC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=fs(iu.current),fs(gr.current),Oc(e)){if(r=e.stateNode,n=e.memoizedProps,r[cr]=e,(s=r.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:Nc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Nc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cr]=e,e.stateNode=r}return Bt(e),null;case 13:if(He(Ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ge&&Tn!==null&&e.mode&1&&!(e.flags&128))xS(),Qo(),e.flags|=98560,s=!1;else if(s=Oc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[cr]=e}else Qo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else Hn!==null&&(Tg(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ke.current&1?yt===0&&(yt=3):py())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Xo(),pg(t,e),t===null&&eu(e.stateNode.containerInfo),Bt(e),null;case 10:return X_(e.type._context),Bt(e),null;case 17:return pn(e.type)&&zh(),Bt(e),null;case 19:if(He(Ke),s=e.memoizedState,s===null)return Bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)il(s,!1);else{if(yt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qh(t),o!==null){for(e.flags|=128,il(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&ot()>Zo&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),il(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ge)return Bt(e),null}else 2*ot()-s.renderingStartTime>Zo&&n!==1073741824&&(e.flags|=128,r=!0,il(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ot(),e.sibling=null,n=Ke.current,Ve(Ke,r?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return fy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?En&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function W2(t,e){switch(G_(e),e.tag){case 1:return pn(e.type)&&zh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xo(),He(fn),He(Xt),ny(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ty(e),null;case 13:if(He(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Qo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Ke),null;case 4:return Xo(),null;case 10:return X_(e.type._context),null;case 22:case 23:return fy(),null;case 24:return null;default:return null}}var Mc=!1,Gt=!1,H2=typeof WeakSet=="function"?WeakSet:Set,X=null;function So(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){et(t,e,r)}else n.current=null}function mg(t,e,n){try{n()}catch(r){et(t,e,r)}}var sw=!1;function q2(t,e){if(Jm=Vh,t=fS(),H_(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var _;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zm={focusedElem:t,selectionRange:n},Vh=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,R=w.memoizedState,T=e.stateNode,g=T.getSnapshotBeforeUpdate(e.elementType===e.type?S:zn(e.type,S),R);T.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){et(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return w=sw,sw=!1,w}function bl(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&mg(e,n,s)}i=i.next}while(i!==r)}}function lf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function gg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cC(t){var e=t.alternate;e!==null&&(t.alternate=null,cC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cr],delete e[nu],delete e[ng],delete e[R2],delete e[k2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hC(t){return t.tag===5||t.tag===3||t.tag===4}function ow(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _g(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=$h));else if(r!==4&&(t=t.child,t!==null))for(_g(t,e,n),t=t.sibling;t!==null;)_g(t,e,n),t=t.sibling}function yg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yg(t,e,n),t=t.sibling;t!==null;)yg(t,e,n),t=t.sibling}var bt=null,Wn=!1;function di(t,e,n){for(n=n.child;n!==null;)dC(t,e,n),n=n.sibling}function dC(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(Zd,n)}catch{}switch(n.tag){case 5:Gt||So(n,e);case 6:var r=bt,i=Wn;bt=null,di(t,e,n),bt=r,Wn=i,bt!==null&&(Wn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Wn?(t=bt,n=n.stateNode,t.nodeType===8?Dp(t.parentNode,n):t.nodeType===1&&Dp(t,n),Xl(t)):Dp(bt,n.stateNode));break;case 4:r=bt,i=Wn,bt=n.stateNode.containerInfo,Wn=!0,di(t,e,n),bt=r,Wn=i;break;case 0:case 11:case 14:case 15:if(!Gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&mg(n,e,o),i=i.next}while(i!==r)}di(t,e,n);break;case 1:if(!Gt&&(So(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){et(n,e,a)}di(t,e,n);break;case 21:di(t,e,n);break;case 22:n.mode&1?(Gt=(r=Gt)||n.memoizedState!==null,di(t,e,n),Gt=r):di(t,e,n);break;default:di(t,e,n)}}function aw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new H2),e.forEach(function(r){var i=tO.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Wn=!1;break e;case 3:bt=a.stateNode.containerInfo,Wn=!0;break e;case 4:bt=a.stateNode.containerInfo,Wn=!0;break e}a=a.return}if(bt===null)throw Error(B(160));dC(s,o,i),bt=null,Wn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){et(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fC(e,t),e=e.sibling}function fC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ir(t),r&4){try{bl(3,t,t.return),lf(3,t)}catch(S){et(t,t.return,S)}try{bl(5,t,t.return)}catch(S){et(t,t.return,S)}}break;case 1:$n(e,t),ir(t),r&512&&n!==null&&So(n,n.return);break;case 5:if($n(e,t),ir(t),r&512&&n!==null&&So(n,n.return),t.flags&32){var i=t.stateNode;try{Gl(i,"")}catch(S){et(t,t.return,S)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&DI(i,s),zm(a,o);var c=zm(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?UI(i,f):h==="dangerouslySetInnerHTML"?FI(i,f):h==="children"?Gl(i,f):N_(i,h,f,c)}switch(a){case"input":Fm(i,s);break;case"textarea":LI(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?No(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?No(i,!!s.multiple,s.defaultValue,!0):No(i,!!s.multiple,s.multiple?[]:"",!1))}i[nu]=s}catch(S){et(t,t.return,S)}}break;case 6:if($n(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(S){et(t,t.return,S)}}break;case 3:if($n(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xl(e.containerInfo)}catch(S){et(t,t.return,S)}break;case 4:$n(e,t),ir(t);break;case 13:$n(e,t),ir(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hy=ot())),r&4&&aw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||h,$n(e,t),Gt=c):$n(e,t),ir(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(X=t,h=t.child;h!==null;){for(f=X=h;X!==null;){switch(m=X,_=m.child,m.tag){case 0:case 11:case 14:case 15:bl(4,m,m.return);break;case 1:So(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(S){et(r,n,S)}}break;case 5:So(m,m.return);break;case 22:if(m.memoizedState!==null){uw(f);continue}}_!==null?(_.return=m,X=_):uw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=VI("display",o))}catch(S){et(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){et(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),ir(t),r&4&&aw(t);break;case 21:break;default:$n(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hC(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Gl(i,""),r.flags&=-33);var s=ow(t);yg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ow(t);_g(t,a,o);break;default:throw Error(B(161))}}catch(l){et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function G2(t,e,n){X=t,pC(t)}function pC(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Mc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=Mc;var c=Gt;if(Mc=o,(Gt=l)&&!c)for(X=i;X!==null;)o=X,l=o.child,o.tag===22&&o.memoizedState!==null?cw(i):l!==null?(l.return=o,X=l):cw(i);for(;s!==null;)X=s,pC(s),s=s.sibling;X=i,Mc=a,Gt=c}lw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):lw(t)}}function lw(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||lf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&HE(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}HE(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Xl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Gt||e.flags&512&&gg(e)}catch(m){et(e,e.return,m)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function uw(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function cw(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lf(4,e)}catch(l){et(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){et(e,i,l)}}var s=e.return;try{gg(e)}catch(l){et(e,s,l)}break;case 5:var o=e.return;try{gg(e)}catch(l){et(e,o,l)}}}catch(l){et(e,e.return,l)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var K2=Math.ceil,Jh=ii.ReactCurrentDispatcher,uy=ii.ReactCurrentOwner,Dn=ii.ReactCurrentBatchConfig,we=0,kt=null,dt=null,Lt=0,En=0,Co=Ji(0),yt=0,lu=null,ks=0,uf=0,cy=0,Nl=null,ln=null,hy=0,Zo=1/0,Lr=null,Zh=!1,vg=null,Li=null,Fc=!1,xi=null,ed=0,Ol=0,Eg=null,uh=-1,ch=0;function rn(){return we&6?ot():uh!==-1?uh:uh=ot()}function Mi(t){return t.mode&1?we&2&&Lt!==0?Lt&-Lt:b2.transition!==null?(ch===0&&(ch=XI()),ch):(t=be,t!==0||(t=window.event,t=t===void 0?16:iS(t.type)),t):1}function Zn(t,e,n,r){if(50<Ol)throw Ol=0,Eg=null,Error(B(185));Ou(t,n,r),(!(we&2)||t!==kt)&&(t===kt&&(!(we&2)&&(uf|=n),yt===4&&yi(t,Lt)),mn(t,r),n===1&&we===0&&!(e.mode&1)&&(Zo=ot()+500,sf&&Zi()))}function mn(t,e){var n=t.callbackNode;bN(t,e);var r=Fh(t,t===kt?Lt:0);if(r===0)n!==null&&vE(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vE(n),e===1)t.tag===0?P2(hw.bind(null,t)):IS(hw.bind(null,t)),x2(function(){!(we&6)&&Zi()}),n=null;else{switch(JI(r)){case 1:n=F_;break;case 4:n=QI;break;case 16:n=Mh;break;case 536870912:n=YI;break;default:n=Mh}n=TC(n,mC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function mC(t,e){if(uh=-1,ch=0,we&6)throw Error(B(327));var n=t.callbackNode;if(Fo()&&t.callbackNode!==n)return null;var r=Fh(t,t===kt?Lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=td(t,r);else{e=r;var i=we;we|=2;var s=_C();(kt!==t||Lt!==e)&&(Lr=null,Zo=ot()+500,vs(t,e));do try{X2();break}catch(a){gC(t,a)}while(1);Y_(),Jh.current=s,we=i,dt!==null?e=0:(kt=null,Lt=0,e=yt)}if(e!==0){if(e===2&&(i=Gm(t),i!==0&&(r=i,e=wg(t,i))),e===1)throw n=lu,vs(t,0),yi(t,r),mn(t,ot()),n;if(e===6)yi(t,r);else{if(i=t.current.alternate,!(r&30)&&!Q2(i)&&(e=td(t,r),e===2&&(s=Gm(t),s!==0&&(r=s,e=wg(t,s))),e===1))throw n=lu,vs(t,0),yi(t,r),mn(t,ot()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ls(t,ln,Lr);break;case 3:if(yi(t,r),(r&130023424)===r&&(e=hy+500-ot(),10<e)){if(Fh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tg(ls.bind(null,t,ln,Lr),e);break}ls(t,ln,Lr);break;case 4:if(yi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*K2(r/1960))-r,10<r){t.timeoutHandle=tg(ls.bind(null,t,ln,Lr),r);break}ls(t,ln,Lr);break;case 5:ls(t,ln,Lr);break;default:throw Error(B(329))}}}return mn(t,ot()),t.callbackNode===n?mC.bind(null,t):null}function wg(t,e){var n=Nl;return t.current.memoizedState.isDehydrated&&(vs(t,e).flags|=256),t=td(t,e),t!==2&&(e=ln,ln=n,e!==null&&Tg(e)),t}function Tg(t){ln===null?ln=t:ln.push.apply(ln,t)}function Q2(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yi(t,e){for(e&=~cy,e&=~uf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function hw(t){if(we&6)throw Error(B(327));Fo();var e=Fh(t,0);if(!(e&1))return mn(t,ot()),null;var n=td(t,e);if(t.tag!==0&&n===2){var r=Gm(t);r!==0&&(e=r,n=wg(t,r))}if(n===1)throw n=lu,vs(t,0),yi(t,e),mn(t,ot()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ls(t,ln,Lr),mn(t,ot()),null}function dy(t,e){var n=we;we|=1;try{return t(e)}finally{we=n,we===0&&(Zo=ot()+500,sf&&Zi())}}function Ps(t){xi!==null&&xi.tag===0&&!(we&6)&&Fo();var e=we;we|=1;var n=Dn.transition,r=be;try{if(Dn.transition=null,be=1,t)return t()}finally{be=r,Dn.transition=n,we=e,!(we&6)&&Zi()}}function fy(){En=Co.current,He(Co)}function vs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,C2(n)),dt!==null)for(n=dt.return;n!==null;){var r=n;switch(G_(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&zh();break;case 3:Xo(),He(fn),He(Xt),ny();break;case 5:ty(r);break;case 4:Xo();break;case 13:He(Ke);break;case 19:He(Ke);break;case 10:X_(r.type._context);break;case 22:case 23:fy()}n=n.return}if(kt=t,dt=t=Fi(t.current,null),Lt=En=e,yt=0,lu=null,cy=uf=ks=0,ln=Nl=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ds=null}return t}function gC(t,e){do{var n=dt;try{if(Y_(),oh.current=Xh,Yh){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yh=!1}if(Rs=0,Ct=mt=Qe=null,Pl=!1,su=0,uy.current=null,n===null||n.return===null){yt=1,lu=e,dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=JE(o);if(_!==null){_.flags&=-257,ZE(_,o,a,s,e),_.mode&1&&XE(s,c,e),e=_,l=c;var w=e.updateQueue;if(w===null){var S=new Set;S.add(l),e.updateQueue=S}else w.add(l);break e}else{if(!(e&1)){XE(s,c,e),py();break e}l=Error(B(426))}}else if(Ge&&a.mode&1){var R=JE(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),ZE(R,o,a,s,e),K_(Jo(l,a));break e}}s=l=Jo(l,a),yt!==4&&(yt=2),Nl===null?Nl=[s]:Nl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=ZS(s,l,e);WE(s,T);break e;case 1:a=l;var g=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Li===null||!Li.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=eC(s,a,e);WE(s,O);break e}}s=s.return}while(s!==null)}vC(n)}catch(L){e=L,dt===n&&n!==null&&(dt=n=n.return);continue}break}while(1)}function _C(){var t=Jh.current;return Jh.current=Xh,t===null?Xh:t}function py(){(yt===0||yt===3||yt===2)&&(yt=4),kt===null||!(ks&268435455)&&!(uf&268435455)||yi(kt,Lt)}function td(t,e){var n=we;we|=2;var r=_C();(kt!==t||Lt!==e)&&(Lr=null,vs(t,e));do try{Y2();break}catch(i){gC(t,i)}while(1);if(Y_(),we=n,Jh.current=r,dt!==null)throw Error(B(261));return kt=null,Lt=0,yt}function Y2(){for(;dt!==null;)yC(dt)}function X2(){for(;dt!==null&&!TN();)yC(dt)}function yC(t){var e=wC(t.alternate,t,En);t.memoizedProps=t.pendingProps,e===null?vC(t):dt=e,uy.current=null}function vC(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=W2(n,e),n!==null){n.flags&=32767,dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,dt=null;return}}else if(n=B2(n,e,En),n!==null){dt=n;return}if(e=e.sibling,e!==null){dt=e;return}dt=e=t}while(e!==null);yt===0&&(yt=5)}function ls(t,e,n){var r=be,i=Dn.transition;try{Dn.transition=null,be=1,J2(t,e,n,r)}finally{Dn.transition=i,be=r}return null}function J2(t,e,n,r){do Fo();while(xi!==null);if(we&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NN(t,s),t===kt&&(dt=kt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fc||(Fc=!0,TC(Mh,function(){return Fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=be;be=1;var a=we;we|=4,uy.current=null,q2(t,n),fC(n,t),y2(Zm),Vh=!!Jm,Zm=Jm=null,t.current=n,G2(n),IN(),we=a,be=o,Dn.transition=s}else t.current=n;if(Fc&&(Fc=!1,xi=t,ed=i),s=t.pendingLanes,s===0&&(Li=null),xN(n.stateNode),mn(t,ot()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Zh)throw Zh=!1,t=vg,vg=null,t;return ed&1&&t.tag!==0&&Fo(),s=t.pendingLanes,s&1?t===Eg?Ol++:(Ol=0,Eg=t):Ol=0,Zi(),null}function Fo(){if(xi!==null){var t=JI(ed),e=Dn.transition,n=be;try{if(Dn.transition=null,be=16>t?16:t,xi===null)var r=!1;else{if(t=xi,xi=null,ed=0,we&6)throw Error(B(331));var i=we;for(we|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(X=c;X!==null;){var h=X;switch(h.tag){case 0:case 11:case 15:bl(8,h,s)}var f=h.child;if(f!==null)f.return=h,X=f;else for(;X!==null;){h=X;var m=h.sibling,_=h.return;if(cC(h),h===c){X=null;break}if(m!==null){m.return=_,X=m;break}X=_}}}var w=s.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var R=S.sibling;S.sibling=null,S=R}while(S!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bl(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,X=T;break e}X=s.return}}var g=t.current;for(X=g;X!==null;){o=X;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,X=I;else e:for(o=g;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lf(9,a)}}catch(L){et(a,a.return,L)}if(a===o){X=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,X=O;break e}X=a.return}}if(we=i,Zi(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(Zd,t)}catch{}r=!0}return r}finally{be=n,Dn.transition=e}}return!1}function dw(t,e,n){e=Jo(n,e),e=ZS(t,e,1),t=Di(t,e,1),e=rn(),t!==null&&(Ou(t,1,e),mn(t,e))}function et(t,e,n){if(t.tag===3)dw(t,t,n);else for(;e!==null;){if(e.tag===3){dw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Li===null||!Li.has(r))){t=Jo(n,t),t=eC(e,t,1),e=Di(e,t,1),t=rn(),e!==null&&(Ou(e,1,t),mn(e,t));break}}e=e.return}}function Z2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Lt&n)===n&&(yt===4||yt===3&&(Lt&130023424)===Lt&&500>ot()-hy?vs(t,0):cy|=n),mn(t,e)}function EC(t,e){e===0&&(t.mode&1?(e=Ac,Ac<<=1,!(Ac&130023424)&&(Ac=4194304)):e=1);var n=rn();t=Yr(t,e),t!==null&&(Ou(t,e,n),mn(t,n))}function eO(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),EC(t,n)}function tO(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),EC(t,n)}var wC;wC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,z2(t,e,n);cn=!!(t.flags&131072)}else cn=!1,Ge&&e.flags&1048576&&SS(e,Hh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;lh(t,e),t=e.pendingProps;var i=Ko(e,Xt.current);Mo(e,n),i=iy(null,e,r,t,i,n);var s=sy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(r)?(s=!0,Bh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Z_(e),i.updater=of,e.stateNode=i,i._reactInternals=e,lg(e,r,t,n),e=hg(null,e,r,!0,s,n)):(e.tag=0,Ge&&s&&q_(e),tn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(lh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=rO(r),t=zn(r,t),i){case 0:e=cg(null,e,r,t,n);break e;case 1:e=nw(null,e,r,t,n);break e;case 11:e=ew(null,e,r,t,n);break e;case 14:e=tw(null,e,r,zn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),cg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),nw(t,e,r,i,n);case 3:e:{if(iC(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,RS(t,e),Kh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Jo(Error(B(423)),e),e=rw(t,e,r,n,i);break e}else if(r!==i){i=Jo(Error(B(424)),e),e=rw(t,e,r,n,i);break e}else for(Tn=Oi(e.stateNode.containerInfo.firstChild),In=e,Ge=!0,Hn=null,n=NS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qo(),r===i){e=Xr(t,e,n);break e}tn(t,e,r,n)}e=e.child}return e;case 5:return OS(e),t===null&&sg(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,eg(r,i)?o=null:s!==null&&eg(r,s)&&(e.flags|=32),rC(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&sg(e),null;case 13:return sC(t,e,n);case 4:return ey(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Yo(e,null,r,n):tn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),ew(t,e,r,i,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ve(qh,r._currentValue),r._currentValue=o,s!==null)if(nr(s.value,o)){if(s.children===i.children&&!fn.current){e=Xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),og(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),og(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Mo(e,n),i=Fn(i),r=r(i),e.flags|=1,tn(t,e,r,n),e.child;case 14:return r=e.type,i=zn(r,e.pendingProps),i=zn(r.type,i),tw(t,e,r,i,n);case 15:return tC(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zn(r,i),lh(t,e),e.tag=1,pn(r)?(t=!0,Bh(e)):t=!1,Mo(e,n),PS(e,r,i),lg(e,r,i,n),hg(null,e,r,!0,t,n);case 19:return oC(t,e,n);case 22:return nC(t,e,n)}throw Error(B(156,e.tag))};function TC(t,e){return KI(t,e)}function nO(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,r){return new nO(t,e,n,r)}function my(t){return t=t.prototype,!(!t||!t.isReactComponent)}function rO(t){if(typeof t=="function")return my(t)?1:0;if(t!=null){if(t=t.$$typeof,t===D_)return 11;if(t===L_)return 14}return 2}function Fi(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")my(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mo:return Es(n.children,i,s,e);case O_:o=8,i|=8;break;case Nm:return t=On(12,n,e,i|2),t.elementType=Nm,t.lanes=s,t;case Om:return t=On(13,n,e,i),t.elementType=Om,t.lanes=s,t;case Dm:return t=On(19,n,e,i),t.elementType=Dm,t.lanes=s,t;case bI:return cf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case kI:o=10;break e;case PI:o=9;break e;case D_:o=11;break e;case L_:o=14;break e;case mi:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=On(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Es(t,e,n,r){return t=On(7,t,r,e),t.lanes=n,t}function cf(t,e,n,r){return t=On(22,t,r,e),t.elementType=bI,t.lanes=n,t.stateNode={isHidden:!1},t}function zp(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Bp(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iO(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ip(0),this.expirationTimes=Ip(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ip(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gy(t,e,n,r,i,s,o,a,l){return t=new iO(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Z_(s),t}function sO(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:po,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function IC(t){if(!t)return Wi;t=t._reactInternals;e:{if(zs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(pn(n))return TS(t,n,e)}return e}function SC(t,e,n,r,i,s,o,a,l){return t=gy(n,r,!0,t,i,s,o,a,l),t.context=IC(null),n=t.current,r=rn(),i=Mi(n),s=Wr(r,i),s.callback=e??null,Di(n,s,i),t.current.lanes=i,Ou(t,i,r),mn(t,r),t}function hf(t,e,n,r){var i=e.current,s=rn(),o=Mi(i);return n=IC(n),e.context===null?e.context=n:e.pendingContext=n,e=Wr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Di(i,e,o),t!==null&&(Zn(t,i,o,s),sh(t,i,o)),o}function nd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function _y(t,e){fw(t,e),(t=t.alternate)&&fw(t,e)}function oO(){return null}var CC=typeof reportError=="function"?reportError:function(t){console.error(t)};function yy(t){this._internalRoot=t}df.prototype.render=yy.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));hf(t,e,null,null)};df.prototype.unmount=yy.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ps(function(){hf(null,t,null,null)}),e[Qr]=null}};function df(t){this._internalRoot=t}df.prototype.unstable_scheduleHydration=function(t){if(t){var e=tS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_i.length&&e!==0&&e<_i[n].priority;n++);_i.splice(n,0,t),n===0&&rS(t)}};function vy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function pw(){}function aO(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=nd(o);s.call(c)}}var o=SC(e,r,t,0,null,!1,!1,"",pw);return t._reactRootContainer=o,t[Qr]=o.current,eu(t.nodeType===8?t.parentNode:t),Ps(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=nd(l);a.call(c)}}var l=gy(t,0,!1,null,null,!1,!1,"",pw);return t._reactRootContainer=l,t[Qr]=l.current,eu(t.nodeType===8?t.parentNode:t),Ps(function(){hf(e,l,n,r)}),l}function pf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=nd(o);a.call(l)}}hf(e,o,t,i)}else o=aO(n,e,t,i,r);return nd(o)}ZI=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=gl(e.pendingLanes);n!==0&&(V_(e,n|1),mn(e,ot()),!(we&6)&&(Zo=ot()+500,Zi()))}break;case 13:Ps(function(){var r=Yr(t,1);if(r!==null){var i=rn();Zn(r,t,1,i)}}),_y(t,1)}};U_=function(t){if(t.tag===13){var e=Yr(t,134217728);if(e!==null){var n=rn();Zn(e,t,134217728,n)}_y(t,134217728)}};eS=function(t){if(t.tag===13){var e=Mi(t),n=Yr(t,e);if(n!==null){var r=rn();Zn(n,t,e,r)}_y(t,e)}};tS=function(){return be};nS=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};Wm=function(t,e,n){switch(e){case"input":if(Fm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=rf(r);if(!i)throw Error(B(90));OI(r),Fm(r,i)}}}break;case"textarea":LI(t,n);break;case"select":e=n.value,e!=null&&No(t,!!n.multiple,e,!1)}};zI=dy;BI=Ps;var lO={usingClientEntryPoint:!1,Events:[Lu,vo,rf,jI,$I,dy]},sl={findFiberByHostInstance:hs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uO={bundleType:sl.bundleType,version:sl.version,rendererPackageName:sl.rendererPackageName,rendererConfig:sl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qI(t),t===null?null:t.stateNode},findFiberByHostInstance:sl.findFiberByHostInstance||oO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vc.isDisabled&&Vc.supportsFiber)try{Zd=Vc.inject(uO),mr=Vc}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lO;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vy(e))throw Error(B(200));return sO(t,e,null,n)};An.createRoot=function(t,e){if(!vy(t))throw Error(B(299));var n=!1,r="",i=CC;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gy(t,1,!1,null,null,n,!1,r,i),t[Qr]=e.current,eu(t.nodeType===8?t.parentNode:t),new yy(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=qI(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Ps(t)};An.hydrate=function(t,e,n){if(!ff(e))throw Error(B(200));return pf(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!vy(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=CC;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=SC(e,null,t,1,n??null,i,!1,s,o),t[Qr]=e.current,eu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new df(e)};An.render=function(t,e,n){if(!ff(e))throw Error(B(200));return pf(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!ff(t))throw Error(B(40));return t._reactRootContainer?(Ps(function(){pf(null,null,t,!1,function(){t._reactRootContainer=null,t[Qr]=null})}),!0):!1};An.unstable_batchedUpdates=dy;An.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ff(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return pf(t,e,n,!1,r)};An.version="18.2.0-next-9e3b772b8-20220608";function xC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xC)}catch(t){console.error(t)}}xC(),SI.exports=An;var cO=SI.exports,mw=cO;Pm.createRoot=mw.createRoot,Pm.hydrateRoot=mw.hydrateRoot;var hn=function(){return hn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},hn.apply(this,arguments)};function Ey(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function rd(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function AC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var hO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,dO=AC(function(t){return hO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ze="-ms-",Dl="-moz-",ke="-webkit-",RC="comm",mf="rule",wy="decl",fO="@import",kC="@keyframes",pO="@layer",mO=Math.abs,Ty=String.fromCharCode,Ig=Object.assign;function gO(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function PC(t){return t.trim()}function Mr(t,e){return(t=e.exec(t))?t[0]:t}function ce(t,e,n){return t.replace(e,n)}function dh(t,e){return t.indexOf(e)}function xt(t,e){return t.charCodeAt(e)|0}function ea(t,e,n){return t.slice(e,n)}function ar(t){return t.length}function bC(t){return t.length}function yl(t,e){return e.push(t),t}function _O(t,e){return t.map(e).join("")}function gw(t,e){return t.filter(function(n){return!Mr(n,e)})}var gf=1,ta=1,NC=0,Un=0,ct=0,Ca="";function _f(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:gf,column:ta,length:o,return:"",siblings:a}}function pi(t,e){return Ig(_f("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function oo(t){for(;t.root;)t=pi(t.root,{children:[t]});yl(t,t.siblings)}function yO(){return ct}function vO(){return ct=Un>0?xt(Ca,--Un):0,ta--,ct===10&&(ta=1,gf--),ct}function er(){return ct=Un<NC?xt(Ca,Un++):0,ta++,ct===10&&(ta=1,gf++),ct}function ws(){return xt(Ca,Un)}function fh(){return Un}function yf(t,e){return ea(Ca,t,e)}function Sg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function EO(t){return gf=ta=1,NC=ar(Ca=t),Un=0,[]}function wO(t){return Ca="",t}function Wp(t){return PC(yf(Un-1,Cg(t===91?t+2:t===40?t+1:t)))}function TO(t){for(;(ct=ws())&&ct<33;)er();return Sg(t)>2||Sg(ct)>3?"":" "}function IO(t,e){for(;--e&&er()&&!(ct<48||ct>102||ct>57&&ct<65||ct>70&&ct<97););return yf(t,fh()+(e<6&&ws()==32&&er()==32))}function Cg(t){for(;er();)switch(ct){case t:return Un;case 34:case 39:t!==34&&t!==39&&Cg(ct);break;case 40:t===41&&Cg(t);break;case 92:er();break}return Un}function SO(t,e){for(;er()&&t+ct!==47+10;)if(t+ct===42+42&&ws()===47)break;return"/*"+yf(e,Un-1)+"*"+Ty(t===47?t:er())}function CO(t){for(;!Sg(ws());)er();return yf(t,Un)}function xO(t){return wO(ph("",null,null,null,[""],t=EO(t),0,[0],t))}function ph(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,f=o,m=0,_=0,w=0,S=1,R=1,T=1,g=0,I="",O=i,L=s,V=r,v=I;R;)switch(w=g,g=er()){case 40:if(w!=108&&xt(v,f-1)==58){dh(v+=ce(Wp(g),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:v+=Wp(g);break;case 9:case 10:case 13:case 32:v+=TO(w);break;case 92:v+=IO(fh()-1,7);continue;case 47:switch(ws()){case 42:case 47:yl(AO(SO(er(),fh()),e,n,l),l);break;default:v+="/"}break;case 123*S:a[c++]=ar(v)*T;case 125*S:case 59:case 0:switch(g){case 0:case 125:R=0;case 59+h:T==-1&&(v=ce(v,/\f/g,"")),_>0&&ar(v)-f&&yl(_>32?yw(v+";",r,n,f-1,l):yw(ce(v," ","")+";",r,n,f-2,l),l);break;case 59:v+=";";default:if(yl(V=_w(v,e,n,c,h,i,a,I,O=[],L=[],f,s),s),g===123)if(h===0)ph(v,e,V,V,O,s,f,a,L);else switch(m===99&&xt(v,3)===110?100:m){case 100:case 108:case 109:case 115:ph(t,V,V,r&&yl(_w(t,V,V,0,0,i,a,I,i,O=[],f,L),L),i,L,f,a,r?O:L);break;default:ph(v,V,V,V,[""],L,0,a,L)}}c=h=_=0,S=T=1,I=v="",f=o;break;case 58:f=1+ar(v),_=w;default:if(S<1){if(g==123)--S;else if(g==125&&S++==0&&vO()==125)continue}switch(v+=Ty(g),g*S){case 38:T=h>0?1:(v+="\f",-1);break;case 44:a[c++]=(ar(v)-1)*T,T=1;break;case 64:ws()===45&&(v+=Wp(er())),m=ws(),h=f=ar(I=v+=CO(fh())),g++;break;case 45:w===45&&ar(v)==2&&(S=0)}}return s}function _w(t,e,n,r,i,s,o,a,l,c,h,f){for(var m=i-1,_=i===0?s:[""],w=bC(_),S=0,R=0,T=0;S<r;++S)for(var g=0,I=ea(t,m+1,m=mO(R=o[S])),O=t;g<w;++g)(O=PC(R>0?_[g]+" "+I:ce(I,/&\f/g,_[g])))&&(l[T++]=O);return _f(t,e,n,i===0?mf:a,l,c,h,f)}function AO(t,e,n,r){return _f(t,e,n,RC,Ty(yO()),ea(t,2,-2),0,r)}function yw(t,e,n,r,i){return _f(t,e,n,wy,ea(t,0,r),ea(t,r+1,-1),r,i)}function OC(t,e,n){switch(gO(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return Dl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+Dl+t+ze+t+t;case 5936:switch(xt(t,e+11)){case 114:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+ze+t+t;case 6165:return ke+t+ze+"flex-"+t+t;case 5187:return ke+t+ce(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+ze+"flex-$1$2")+t;case 5443:return ke+t+ze+"flex-item-"+ce(t,/flex-|-self/g,"")+(Mr(t,/flex-|baseline/)?"":ze+"grid-row-"+ce(t,/flex-|-self/g,""))+t;case 4675:return ke+t+ze+"flex-line-pack"+ce(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+ze+ce(t,"shrink","negative")+t;case 5292:return ke+t+ze+ce(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+ce(t,"-grow","")+ke+t+ze+ce(t,"grow","positive")+t;case 4554:return ke+ce(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return ce(ce(ce(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return ce(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return ce(ce(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!Mr(t,/flex-|baseline/))return ze+"grid-column-align"+ea(t,e)+t;break;case 2592:case 3360:return ze+ce(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Mr(r.props,/grid-\w+-end/)})?~dh(t+(n=n[e].value),"span")?t:ze+ce(t,"-start","")+t+ze+"grid-row-span:"+(~dh(n,"span")?Mr(n,/\d+/):+Mr(n,/\d+/)-+Mr(t,/\d+/))+";":ze+ce(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Mr(r.props,/grid-\w+-start/)})?t:ze+ce(ce(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ce(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ar(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return ce(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Dl+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~dh(t,"stretch")?OC(ce(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ce(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return ze+i+":"+s+c+(o?ze+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(xt(t,e+6)===121)return ce(t,":",":"+ke)+t;break;case 6444:switch(xt(t,xt(t,14)===45?18:11)){case 120:return ce(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(xt(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+ze+"$2box$3")+t;case 100:return ce(t,":",":"+ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(t,"scroll-","scroll-snap-")+t}return t}function id(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function RO(t,e,n,r){switch(t.type){case pO:if(t.children.length)break;case fO:case wy:return t.return=t.return||t.value;case RC:return"";case kC:return t.return=t.value+"{"+id(t.children,r)+"}";case mf:if(!ar(t.value=t.props.join(",")))return""}return ar(n=id(t.children,r))?t.return=t.value+"{"+n+"}":""}function kO(t){var e=bC(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function PO(t){return function(e){e.root||(e=e.return)&&t(e)}}function bO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case wy:t.return=OC(t.value,t.length,n);return;case kC:return id([pi(t,{value:ce(t.value,"@","@"+ke)})],r);case mf:if(t.length)return _O(n=t.props,function(i){switch(Mr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":oo(pi(t,{props:[ce(i,/:(read-\w+)/,":"+Dl+"$1")]})),oo(pi(t,{props:[i]})),Ig(t,{props:gw(n,r)});break;case"::placeholder":oo(pi(t,{props:[ce(i,/:(plac\w+)/,":"+ke+"input-$1")]})),oo(pi(t,{props:[ce(i,/:(plac\w+)/,":"+Dl+"$1")]})),oo(pi(t,{props:[ce(i,/:(plac\w+)/,ze+"input-$1")]})),oo(pi(t,{props:[i]})),Ig(t,{props:gw(n,r)});break}return""})}}var DC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},na=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Iy=typeof window<"u"&&"HTMLElement"in window,NO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),vf=Object.freeze([]),ra=Object.freeze({});function OO(t,e,n){return n===void 0&&(n=ra),t.theme!==n.theme&&t.theme||e||n.theme}var LC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),DO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,LO=/(^-|-$)/g;function vw(t){return t.replace(DO,"-").replace(LO,"")}var MO=/(a)(d)/gi,Ew=function(t){return String.fromCharCode(t+(t>25?39:97))};function xg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Ew(e%52)+n;return(Ew(e%52)+n).replace(MO,"$1-$2")}var Hp,xo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},MC=function(t){return xo(5381,t)};function FO(t){return xg(MC(t)>>>0)}function VO(t){return t.displayName||t.name||"Component"}function qp(t){return typeof t=="string"&&!0}var FC=typeof Symbol=="function"&&Symbol.for,VC=FC?Symbol.for("react.memo"):60115,UO=FC?Symbol.for("react.forward_ref"):60112,jO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$O={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},UC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zO=((Hp={})[UO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hp[VC]=UC,Hp);function ww(t){return("type"in(e=t)&&e.type.$$typeof)===VC?UC:"$$typeof"in t?zO[t.$$typeof]:jO;var e}var BO=Object.defineProperty,WO=Object.getOwnPropertyNames,Tw=Object.getOwnPropertySymbols,HO=Object.getOwnPropertyDescriptor,qO=Object.getPrototypeOf,Iw=Object.prototype;function jC(t,e,n){if(typeof e!="string"){if(Iw){var r=qO(e);r&&r!==Iw&&jC(t,r,n)}var i=WO(e);Tw&&(i=i.concat(Tw(e)));for(var s=ww(t),o=ww(e),a=0;a<i.length;++a){var l=i[a];if(!(l in $O||n&&n[l]||o&&l in o||s&&l in s)){var c=HO(e,l);try{BO(t,l,c)}catch{}}}}return t}function ia(t){return typeof t=="function"}function Sy(t){return typeof t=="object"&&"styledComponentId"in t}function ps(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Sw(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function uu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ag(t,e,n){if(n===void 0&&(n=!1),!n&&!uu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ag(t[r],e[r]);else if(uu(e))for(var r in e)t[r]=Ag(t[r],e[r]);return t}function Cy(t,e){Object.defineProperty(t,"toString",{value:e})}function Fu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var GO=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw Fu(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),mh=new Map,sd=new Map,Gp=1,Uc=function(t){if(mh.has(t))return mh.get(t);for(;sd.has(Gp);)Gp++;var e=Gp++;return mh.set(t,e),sd.set(e,t),e},KO=function(t,e){mh.set(t,e),sd.set(e,t)},QO="style[".concat(na,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),YO=new RegExp("^".concat(na,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),XO=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},JO=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(YO);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(KO(h,c),XO(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function ZO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var $C=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(na,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(na,"active"),r.setAttribute("data-styled-version","6.0.7");var o=ZO();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},eD=function(){function t(e){this.element=$C(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw Fu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),tD=function(){function t(e){this.element=$C(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),nD=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Cw=Iy,rD={isServer:!Iy,useCSSOMInjection:!NO},zC=function(){function t(e,n,r){e===void 0&&(e=ra),n===void 0&&(n={});var i=this;this.options=hn(hn({},rD),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Iy&&Cw&&(Cw=!1,function(s){for(var o=document.querySelectorAll(QO),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(na)!=="active"&&(JO(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Cy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var m=function(T){return sd.get(T)}(f);if(m===void 0)return"continue";var _=s.names.get(m),w=o.getGroup(f);if(_===void 0||w.length===0)return"continue";var S="".concat(na,".g").concat(f,'[id="').concat(m,'"]'),R="";_!==void 0&&_.forEach(function(T){T.length>0&&(R+="".concat(T,","))}),l+="".concat(w).concat(S,'{content:"').concat(R,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return Uc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(hn(hn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new nD(i):r?new eD(i):new tD(i)}(this.options),new GO(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Uc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Uc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Uc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),iD=/&/g,sD=/^\s*\/\/.*$/gm;function BC(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=BC(n.children,e)),n})}function oD(t){var e,n,r,i=t===void 0?ra:t,s=i.options,o=s===void 0?ra:s,a=i.plugins,l=a===void 0?vf:a,c=function(m,_,w){return w===n||w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(e):m},h=l.slice();h.push(function(m){m.type===mf&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(iD,n).replace(r,c))}),o.prefix&&h.push(bO),h.push(RO);var f=function(m,_,w,S){_===void 0&&(_=""),w===void 0&&(w=""),S===void 0&&(S="&"),e=S,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var R=m.replace(sD,""),T=xO(w||_?"".concat(w," ").concat(_," { ").concat(R," }"):R);o.namespace&&(T=BC(T,o.namespace));var g=[];return id(T,kO(h.concat(PO(function(I){return g.push(I)})))),g};return f.hash=l.length?l.reduce(function(m,_){return _.name||Fu(15),xo(m,_.name)},5381).toString():"",f}var aD=new zC,Rg=oD(),WC=Me.createContext({shouldForwardProp:void 0,styleSheet:aD,stylis:Rg});WC.Consumer;Me.createContext(void 0);function xw(){return $.useContext(WC)}var lD=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Rg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Cy(this,function(){throw Fu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Rg),this.name+e.hash},t}(),uD=function(t){return t>="A"&&t<="Z"};function Aw(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;uD(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var HC=function(t){return t==null||t===!1||t===""},qC=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!HC(s)&&(Array.isArray(s)&&s.isCss||ia(s)?r.push("".concat(Aw(i),":"),s,";"):uu(s)?r.push.apply(r,rd(rd(["".concat(i," {")],qC(s),!1),["}"],!1)):r.push("".concat(Aw(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in DC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ts(t,e,n,r){if(HC(t))return[];if(Sy(t))return[".".concat(t.styledComponentId)];if(ia(t)){if(!ia(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Ts(i,e,n,r)}var s;return t instanceof lD?n?(t.inject(n,r),[t.getName(r)]):[t]:uu(t)?qC(t):Array.isArray(t)?Array.prototype.concat.apply(vf,t.map(function(o){return Ts(o,e,n,r)})):[t.toString()]}function cD(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ia(n)&&!Sy(n))return!1}return!0}var hD=MC("6.0.7"),dD=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&cD(e),this.componentId=n,this.baseHash=xo(hD,n),this.baseStyle=r,zC.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=ps(i,this.staticRulesId);else{var s=Sw(Ts(this.rules,e,n,r)),o=xg(xo(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=ps(i,o),this.staticRulesId=o}else{for(var l=xo(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var f=this.rules[h];if(typeof f=="string")c+=f;else if(f){var m=Sw(Ts(f,e,n,r));l=xo(l,m),c+=m}}if(c){var _=xg(l>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=ps(i,_)}}return i},t}(),GC=Me.createContext(void 0);GC.Consumer;var Kp={};function fD(t,e,n){var r=Sy(t),i=t,s=!qp(t),o=e.attrs,a=o===void 0?vf:o,l=e.componentId,c=l===void 0?function(I,O){var L=typeof I!="string"?"sc":vw(I);Kp[L]=(Kp[L]||0)+1;var V="".concat(L,"-").concat(FO("6.0.7"+L+Kp[L]));return O?"".concat(O,"-").concat(V):V}(e.displayName,e.parentComponentId):l,h=e.displayName;h===void 0&&function(I){return qp(I)?"styled.".concat(I):"Styled(".concat(VO(I),")")}(t);var f=e.displayName&&e.componentId?"".concat(vw(e.displayName),"-").concat(e.componentId):e.componentId||c,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(e.shouldForwardProp){var S=e.shouldForwardProp;_=function(I,O){return w(I,O)&&S(I,O)}}else _=w}var R=new dD(n,f,r?i.componentStyle:void 0);function T(I,O){return function(L,V,v){var E=L.attrs,C=L.componentStyle,A=L.defaultProps,k=L.foldedComponentIds,b=L.styledComponentId,x=L.target,de=Me.useContext(GC),Le=xw(),rt=L.shouldForwardProp||Le.shouldForwardProp,Ie=function(Ne,Tt,Ut){for(var ft,it=hn(hn({},Tt),{className:void 0,theme:Ut}),Rr=0;Rr<Ne.length;Rr+=1){var kr=ia(ft=Ne[Rr])?ft(it):ft;for(var Zt in kr)it[Zt]=Zt==="className"?ps(it[Zt],kr[Zt]):Zt==="style"?hn(hn({},it[Zt]),kr[Zt]):kr[Zt]}return Tt.className&&(it.className=ps(it.className,Tt.className)),it}(E,V,OO(V,de,A)||ra),q=Ie.as||x,ee={};for(var te in Ie)Ie[te]===void 0||te[0]==="$"||te==="as"||te==="theme"||(te==="forwardedAs"?ee.as=Ie.forwardedAs:rt&&!rt(te,q)||(ee[te]=Ie[te]));var Pe=function(Ne,Tt){var Ut=xw(),ft=Ne.generateAndInjectStyles(Tt,Ut.styleSheet,Ut.stylis);return ft}(C,Ie),ye=ps(k,b);return Pe&&(ye+=" "+Pe),Ie.className&&(ye+=" "+Ie.className),ee[qp(q)&&!LC.has(q)?"class":"className"]=ye,ee.ref=v,$.createElement(q,ee)}(g,I,O)}var g=Me.forwardRef(T);return g.attrs=m,g.componentStyle=R,g.shouldForwardProp=_,g.foldedComponentIds=r?ps(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=f,g.target=r?i.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(I){this._foldedDefaultProps=r?function(O){for(var L=[],V=1;V<arguments.length;V++)L[V-1]=arguments[V];for(var v=0,E=L;v<E.length;v++)Ag(O,E[v],!0);return O}({},i.defaultProps,I):I}}),Cy(g,function(){return".".concat(g.styledComponentId)}),s&&jC(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Rw(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var kw=function(t){return Object.assign(t,{isCss:!0})};function pD(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ia(t)||uu(t)){var r=t;return kw(Ts(Rw(vf,rd([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Ts(i):kw(Ts(Rw(i,e)))}function kg(t,e,n){if(n===void 0&&(n=ra),!e)throw Fu(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,pD.apply(void 0,rd([i],s,!1)))};return r.attrs=function(i){return kg(t,e,hn(hn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return kg(t,e,hn(hn({},n),i))},r}var KC=function(t){return kg(fD,t)},ne=KC;LC.forEach(function(t){ne[t]=KC(t)});const mD=ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`,gD=ne(Jd)`
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
`,_D=ne.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,Qp=ne(Jd)`
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
`,yD=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`,Pw=ne.button`
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
`,vD=ne.button`
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
`,ED="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgBvZY/UsJQEMa/fS926uANYuVYiXoAQe3FE4hHsNGxcqgYPAWeAOxV4ABKrBhtzA1k0E7y1vcCBPkfgeTXEPIy+7HLt9klhCCZ/0pZgk6YOAWCDUbCPyA09bVDTE5b8b1zvVadFYumHe7dtrIEcQOwjVCQy1C5l8v14sQnxt1M5j9tS66UGJzEXJDreT9p53rDHT4Rwzf2C99n0rLq84sZ2JbSqu8XWpmRnzIoph8gKmGZMGWfr1bvRgRNGU1mgSGWR9Pz2ru98gYllXKlEoGYIaHLG1TNFzRuDO/EuUh2NLqCHetHS0+DTFNLiQpigDykhZAqg5hQpDKCSOwgJkiIA6GduUCD/xvbmCaKVphEgvj9mBEjAsRNxEdTmDc74sPRpuEa4kLRq4BHZcQFc9mfFvx29KHHko0oYXZp63GzMy0U5xA1XY1gHur2qOuPaF4C3ezMZX/F8Nqn0bSIjqm8dO9bIEjbVRdtvsCyYZz7sYcFO6JPRZ3+kjI1MdS5LuVAF4xdE7mRsiFkZQHnOuYv+pvZVMG+8GEWgm5CC2tzGDf6lZoAIUycxrFe8TmjxfXsNPsqdSeMKRsZkZpeB8u0/VCdFesXTIytwiPfYywAAAAASUVORK5CYII=";var QC={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},bw=Me.createContext&&Me.createContext(QC),wD=["attr","size","title"];function TD(t,e){if(t==null)return{};var n=ID(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ID(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function od(){return od=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},od.apply(this,arguments)}function Nw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ad(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nw(Object(n),!0).forEach(function(r){SD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function SD(t,e,n){return e=CD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function CD(t){var e=xD(t,"string");return typeof e=="symbol"?e:e+""}function xD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function YC(t){return t&&t.map((e,n)=>Me.createElement(e.tag,ad({key:n},e.attr),YC(e.child)))}function xa(t){return e=>Me.createElement(AD,od({attr:ad({},t.attr)},e),YC(t.child))}function AD(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=TD(t,wD),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Me.createElement("svg",od({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:ad(ad({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Me.createElement("title",null,s),t.children)};return bw!==void 0?Me.createElement(bw.Consumer,null,n=>e(n)):e(QC)}function RD(t){return xa({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"},child:[]},{tag:"polyline",attr:{points:"10 17 15 12 10 7"},child:[]},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"},child:[]}]})(t)}function kD(t){return xa({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}var Vu=t=>t.type==="checkbox",Ao=t=>t instanceof Date,nn=t=>t==null;const XC=t=>typeof t=="object";var Et=t=>!nn(t)&&!Array.isArray(t)&&XC(t)&&!Ao(t),PD=t=>Et(t)&&t.target?Vu(t.target)?t.target.checked:t.target.value:t,bD=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,ND=(t,e)=>t.has(bD(e)),OD=t=>{const e=t.constructor&&t.constructor.prototype;return Et(e)&&e.hasOwnProperty("isPrototypeOf")},xy=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function kn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(xy&&(t instanceof Blob||t instanceof FileList))&&(n||Et(t)))if(e=n?[]:{},!n&&!OD(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=kn(t[r]));else return t;return e}var Uu=t=>Array.isArray(t)?t.filter(Boolean):[],st=t=>t===void 0,Y=(t,e,n)=>{if(!e||!Et(t))return n;const r=Uu(e.split(/[,[\].]+?/)).reduce((i,s)=>nn(i)?i:i[s],t);return st(r)||r===t?st(t[e])?n:t[e]:r},vi=t=>typeof t=="boolean",Ay=t=>/^\w*$/.test(t),JC=t=>Uu(t.replace(/["|']|\]/g,"").split(/\.|\[/)),Be=(t,e,n)=>{let r=-1;const i=Ay(e)?[e]:JC(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const c=t[a];l=Et(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}if(a==="__proto__")return;t[a]=l,t=t[a]}return t};const Ow={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},qn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Nr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Me.createContext(null);var DD=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==qn.all&&(e._proxyFormState[o]=!r||qn.all),n&&(n[o]=!0),t[o]}});return i},vn=t=>Et(t)&&!Object.keys(t).length,LD=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return vn(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||qn.all))},Yp=t=>Array.isArray(t)?t:[t];function MD(t){const e=Me.useRef(t);e.current=t,Me.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var hr=t=>typeof t=="string",FD=(t,e,n,r,i)=>hr(t)?(r&&e.watch.add(t),Y(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),Y(n,s))):(r&&(e.watchAll=!0),n),ZC=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},Dw=t=>({isOnSubmit:!t||t===qn.onSubmit,isOnBlur:t===qn.onBlur,isOnChange:t===qn.onChange,isOnAll:t===qn.all,isOnTouch:t===qn.onTouched}),Lw=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const Ll=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=Y(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;Ll(a,e)}else Et(a)&&Ll(a,e)}}};var VD=(t,e,n)=>{const r=Uu(Y(t,n));return Be(r,"root",e[n]),Be(t,n,r),t},Ry=t=>t.type==="file",Ai=t=>typeof t=="function",ld=t=>{if(!xy)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},gh=t=>hr(t),ky=t=>t.type==="radio",ud=t=>t instanceof RegExp;const Mw={value:!1,isValid:!1},Fw={value:!0,isValid:!0};var ex=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!st(t[0].attributes.value)?st(t[0].value)||t[0].value===""?Fw:{value:t[0].value,isValid:!0}:Fw:Mw}return Mw};const Vw={isValid:!1,value:null};var tx=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,Vw):Vw;function Uw(t,e,n="validate"){if(gh(t)||Array.isArray(t)&&t.every(gh)||vi(t)&&!t)return{type:n,message:gh(t)?t:"",ref:e}}var ao=t=>Et(t)&&!ud(t)?t:{value:t,message:""},jw=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:c,min:h,max:f,pattern:m,validate:_,name:w,valueAsNumber:S,mount:R,disabled:T}=t._f,g=Y(e,w);if(!R||T)return{};const I=o?o[0]:s,O=b=>{r&&I.reportValidity&&(I.setCustomValidity(vi(b)?"":b||""),I.reportValidity())},L={},V=ky(s),v=Vu(s),E=V||v,C=(S||Ry(s))&&st(s.value)&&st(g)||ld(s)&&s.value===""||g===""||Array.isArray(g)&&!g.length,A=ZC.bind(null,w,n,L),k=(b,x,de,Le=Nr.maxLength,rt=Nr.minLength)=>{const Ie=b?x:de;L[w]={type:b?Le:rt,message:Ie,ref:s,...A(b?Le:rt,Ie)}};if(i?!Array.isArray(g)||!g.length:a&&(!E&&(C||nn(g))||vi(g)&&!g||v&&!ex(o).isValid||V&&!tx(o).isValid)){const{value:b,message:x}=gh(a)?{value:!!a,message:a}:ao(a);if(b&&(L[w]={type:Nr.required,message:x,ref:I,...A(Nr.required,x)},!n))return O(x),L}if(!C&&(!nn(h)||!nn(f))){let b,x;const de=ao(f),Le=ao(h);if(!nn(g)&&!isNaN(g)){const rt=s.valueAsNumber||g&&+g;nn(de.value)||(b=rt>de.value),nn(Le.value)||(x=rt<Le.value)}else{const rt=s.valueAsDate||new Date(g),Ie=te=>new Date(new Date().toDateString()+" "+te),q=s.type=="time",ee=s.type=="week";hr(de.value)&&g&&(b=q?Ie(g)>Ie(de.value):ee?g>de.value:rt>new Date(de.value)),hr(Le.value)&&g&&(x=q?Ie(g)<Ie(Le.value):ee?g<Le.value:rt<new Date(Le.value))}if((b||x)&&(k(!!b,de.message,Le.message,Nr.max,Nr.min),!n))return O(L[w].message),L}if((l||c)&&!C&&(hr(g)||i&&Array.isArray(g))){const b=ao(l),x=ao(c),de=!nn(b.value)&&g.length>+b.value,Le=!nn(x.value)&&g.length<+x.value;if((de||Le)&&(k(de,b.message,x.message),!n))return O(L[w].message),L}if(m&&!C&&hr(g)){const{value:b,message:x}=ao(m);if(ud(b)&&!g.match(b)&&(L[w]={type:Nr.pattern,message:x,ref:s,...A(Nr.pattern,x)},!n))return O(x),L}if(_){if(Ai(_)){const b=await _(g,e),x=Uw(b,I);if(x&&(L[w]={...x,...A(Nr.validate,x.message)},!n))return O(x.message),L}else if(Et(_)){let b={};for(const x in _){if(!vn(b)&&!n)break;const de=Uw(await _[x](g,e),I,x);de&&(b={...de,...A(x,de.message)},O(de.message),n&&(L[w]=b))}if(!vn(b)&&(L[w]={ref:I,...b},!n))return L}}return O(!0),L};function UD(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=st(t)?r++:t[e[r++]];return t}function jD(t){for(const e in t)if(t.hasOwnProperty(e)&&!st(t[e]))return!1;return!0}function pt(t,e){const n=Array.isArray(e)?e:Ay(e)?[e]:JC(e),r=n.length===1?t:UD(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Et(r)&&vn(r)||Array.isArray(r)&&jD(r))&&pt(t,n.slice(0,-1)),t}var Xp=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},cd=t=>nn(t)||!XC(t);function ms(t,e){if(cd(t)||cd(e))return t===e;if(Ao(t)&&Ao(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Ao(s)&&Ao(o)||Et(s)&&Et(o)||Array.isArray(s)&&Array.isArray(o)?!ms(s,o):s!==o)return!1}}return!0}var nx=t=>t.type==="select-multiple",$D=t=>ky(t)||Vu(t),Jp=t=>ld(t)&&t.isConnected,rx=t=>{for(const e in t)if(Ai(t[e]))return!0;return!1};function hd(t,e={}){const n=Array.isArray(t);if(Et(t)||n)for(const r in t)Array.isArray(t[r])||Et(t[r])&&!rx(t[r])?(e[r]=Array.isArray(t[r])?[]:{},hd(t[r],e[r])):nn(t[r])||(e[r]=!0);return e}function ix(t,e,n){const r=Array.isArray(t);if(Et(t)||r)for(const i in t)Array.isArray(t[i])||Et(t[i])&&!rx(t[i])?st(e)||cd(n[i])?n[i]=Array.isArray(t[i])?hd(t[i],[]):{...hd(t[i])}:ix(t[i],nn(e)?{}:e[i],n[i]):n[i]=!ms(t[i],e[i]);return n}var jc=(t,e)=>ix(t,e,hd(e)),sx=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>st(t)?t:e?t===""?NaN:t&&+t:n&&hr(t)?new Date(t):r?r(t):t;function Zp(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Ry(e)?e.files:ky(e)?tx(t.refs).value:nx(e)?[...e.selectedOptions].map(({value:n})=>n):Vu(e)?ex(t.refs).value:sx(st(e.value)?t.ref.value:e.value,t)}var zD=(t,e,n,r)=>{const i={};for(const s of t){const o=Y(e,s);o&&Be(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},ol=t=>st(t)?t:ud(t)?t.source:Et(t)?ud(t.value)?t.value.source:t.value:t,BD=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function $w(t,e,n){const r=Y(t,n);if(r||Ay(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Y(e,s),a=Y(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var WD=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,HD=(t,e)=>!Uu(Y(t,e)).length&&pt(t,e);const qD={mode:qn.onSubmit,reValidateMode:qn.onChange,shouldFocusError:!0};function GD(t={}){let e={...qD,...t},n={submitCount:0,isDirty:!1,isLoading:Ai(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=Et(e.defaultValues)||Et(e.values)?kn(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:kn(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,c=0;const h={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={values:Xp(),array:Xp(),state:Xp()},m=Dw(e.mode),_=Dw(e.reValidateMode),w=e.criteriaMode===qn.all,S=N=>M=>{clearTimeout(c),c=setTimeout(N,M)},R=async N=>{if(h.isValid||N){const M=e.resolver?vn((await E()).errors):await A(r,!0);M!==n.isValid&&f.state.next({isValid:M})}},T=(N,M)=>{(h.isValidating||h.validatingFields)&&((N||Array.from(a.mount)).forEach(U=>{U&&(M?Be(n.validatingFields,U,M):pt(n.validatingFields,U))}),f.state.next({validatingFields:n.validatingFields,isValidating:!vn(n.validatingFields)}))},g=(N,M=[],U,Q,K=!0,W=!0)=>{if(Q&&U){if(o.action=!0,W&&Array.isArray(Y(r,N))){const Z=U(Y(r,N),Q.argA,Q.argB);K&&Be(r,N,Z)}if(W&&Array.isArray(Y(n.errors,N))){const Z=U(Y(n.errors,N),Q.argA,Q.argB);K&&Be(n.errors,N,Z),HD(n.errors,N)}if(h.touchedFields&&W&&Array.isArray(Y(n.touchedFields,N))){const Z=U(Y(n.touchedFields,N),Q.argA,Q.argB);K&&Be(n.touchedFields,N,Z)}h.dirtyFields&&(n.dirtyFields=jc(i,s)),f.state.next({name:N,isDirty:b(N,M),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Be(s,N,M)},I=(N,M)=>{Be(n.errors,N,M),f.state.next({errors:n.errors})},O=N=>{n.errors=N,f.state.next({errors:n.errors,isValid:!1})},L=(N,M,U,Q)=>{const K=Y(r,N);if(K){const W=Y(s,N,st(U)?Y(i,N):U);st(W)||Q&&Q.defaultChecked||M?Be(s,N,M?W:Zp(K._f)):Le(N,W),o.mount&&R()}},V=(N,M,U,Q,K)=>{let W=!1,Z=!1;const ve={name:N},qe=!!(Y(r,N)&&Y(r,N)._f&&Y(r,N)._f.disabled);if(!U||Q){h.isDirty&&(Z=n.isDirty,n.isDirty=ve.isDirty=b(),W=Z!==ve.isDirty);const Re=qe||ms(Y(i,N),M);Z=!!(!qe&&Y(n.dirtyFields,N)),Re||qe?pt(n.dirtyFields,N):Be(n.dirtyFields,N,!0),ve.dirtyFields=n.dirtyFields,W=W||h.dirtyFields&&Z!==!Re}if(U){const Re=Y(n.touchedFields,N);Re||(Be(n.touchedFields,N,U),ve.touchedFields=n.touchedFields,W=W||h.touchedFields&&Re!==U)}return W&&K&&f.state.next(ve),W?ve:{}},v=(N,M,U,Q)=>{const K=Y(n.errors,N),W=h.isValid&&vi(M)&&n.isValid!==M;if(t.delayError&&U?(l=S(()=>I(N,U)),l(t.delayError)):(clearTimeout(c),l=null,U?Be(n.errors,N,U):pt(n.errors,N)),(U?!ms(K,U):K)||!vn(Q)||W){const Z={...Q,...W&&vi(M)?{isValid:M}:{},errors:n.errors,name:N};n={...n,...Z},f.state.next(Z)}},E=async N=>{T(N,!0);const M=await e.resolver(s,e.context,zD(N||a.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return T(N),M},C=async N=>{const{errors:M}=await E(N);if(N)for(const U of N){const Q=Y(M,U);Q?Be(n.errors,U,Q):pt(n.errors,U)}else n.errors=M;return M},A=async(N,M,U={valid:!0})=>{for(const Q in N){const K=N[Q];if(K){const{_f:W,...Z}=K;if(W){const ve=a.array.has(W.name);T([Q],!0);const qe=await jw(K,s,w,e.shouldUseNativeValidation&&!M,ve);if(T([Q]),qe[W.name]&&(U.valid=!1,M))break;!M&&(Y(qe,W.name)?ve?VD(n.errors,qe,W.name):Be(n.errors,W.name,qe[W.name]):pt(n.errors,W.name))}Z&&await A(Z,M,U)}}return U.valid},k=()=>{for(const N of a.unMount){const M=Y(r,N);M&&(M._f.refs?M._f.refs.every(U=>!Jp(U)):!Jp(M._f.ref))&&ft(N)}a.unMount=new Set},b=(N,M)=>(N&&M&&Be(s,N,M),!ms(Pe(),i)),x=(N,M,U)=>FD(N,a,{...o.mount?s:st(M)?i:hr(N)?{[N]:M}:M},U,M),de=N=>Uu(Y(o.mount?s:i,N,t.shouldUnregister?Y(i,N,[]):[])),Le=(N,M,U={})=>{const Q=Y(r,N);let K=M;if(Q){const W=Q._f;W&&(!W.disabled&&Be(s,N,sx(M,W)),K=ld(W.ref)&&nn(M)?"":M,nx(W.ref)?[...W.ref.options].forEach(Z=>Z.selected=K.includes(Z.value)):W.refs?Vu(W.ref)?W.refs.length>1?W.refs.forEach(Z=>(!Z.defaultChecked||!Z.disabled)&&(Z.checked=Array.isArray(K)?!!K.find(ve=>ve===Z.value):K===Z.value)):W.refs[0]&&(W.refs[0].checked=!!K):W.refs.forEach(Z=>Z.checked=Z.value===K):Ry(W.ref)?W.ref.value="":(W.ref.value=K,W.ref.type||f.values.next({name:N,values:{...s}})))}(U.shouldDirty||U.shouldTouch)&&V(N,K,U.shouldTouch,U.shouldDirty,!0),U.shouldValidate&&te(N)},rt=(N,M,U)=>{for(const Q in M){const K=M[Q],W=`${N}.${Q}`,Z=Y(r,W);(a.array.has(N)||!cd(K)||Z&&!Z._f)&&!Ao(K)?rt(W,K,U):Le(W,K,U)}},Ie=(N,M,U={})=>{const Q=Y(r,N),K=a.array.has(N),W=kn(M);Be(s,N,W),K?(f.array.next({name:N,values:{...s}}),(h.isDirty||h.dirtyFields)&&U.shouldDirty&&f.state.next({name:N,dirtyFields:jc(i,s),isDirty:b(N,W)})):Q&&!Q._f&&!nn(W)?rt(N,W,U):Le(N,W,U),Lw(N,a)&&f.state.next({...n}),f.values.next({name:o.mount?N:void 0,values:{...s}})},q=async N=>{o.mount=!0;const M=N.target;let U=M.name,Q=!0;const K=Y(r,U),W=()=>M.type?Zp(K._f):PD(N),Z=ve=>{Q=Number.isNaN(ve)||ve===Y(s,U,ve)};if(K){let ve,qe;const Re=W(),Je=N.type===Ow.BLUR||N.type===Ow.FOCUS_OUT,Js=!BD(K._f)&&!e.resolver&&!Y(n.errors,U)&&!K._f.deps||WD(Je,Y(n.touchedFields,U),n.isSubmitted,_,m),Zs=Lw(U,a,Je);Be(s,U,Re),Je?(K._f.onBlur&&K._f.onBlur(N),l&&l(0)):K._f.onChange&&K._f.onChange(N);const eo=V(U,Re,Je,!1),ep=!vn(eo)||Zs;if(!Je&&f.values.next({name:U,type:N.type,values:{...s}}),Js)return h.isValid&&R(),ep&&f.state.next({name:U,...Zs?{}:eo});if(!Je&&Zs&&f.state.next({...n}),e.resolver){const{errors:li}=await E([U]);if(Z(Re),Q){const ac=$w(n.errors,r,U),Va=$w(li,r,ac.name||U);ve=Va.error,U=Va.name,qe=vn(li)}}else T([U],!0),ve=(await jw(K,s,w,e.shouldUseNativeValidation))[U],T([U]),Z(Re),Q&&(ve?qe=!1:h.isValid&&(qe=await A(r,!0)));Q&&(K._f.deps&&te(K._f.deps),v(U,qe,ve,eo))}},ee=(N,M)=>{if(Y(n.errors,M)&&N.focus)return N.focus(),1},te=async(N,M={})=>{let U,Q;const K=Yp(N);if(e.resolver){const W=await C(st(N)?N:K);U=vn(W),Q=N?!K.some(Z=>Y(W,Z)):U}else N?(Q=(await Promise.all(K.map(async W=>{const Z=Y(r,W);return await A(Z&&Z._f?{[W]:Z}:Z)}))).every(Boolean),!(!Q&&!n.isValid)&&R()):Q=U=await A(r);return f.state.next({...!hr(N)||h.isValid&&U!==n.isValid?{}:{name:N},...e.resolver||!N?{isValid:U}:{},errors:n.errors}),M.shouldFocus&&!Q&&Ll(r,ee,N?K:a.mount),Q},Pe=N=>{const M={...o.mount?s:i};return st(N)?M:hr(N)?Y(M,N):N.map(U=>Y(M,U))},ye=(N,M)=>({invalid:!!Y((M||n).errors,N),isDirty:!!Y((M||n).dirtyFields,N),error:Y((M||n).errors,N),isValidating:!!Y(n.validatingFields,N),isTouched:!!Y((M||n).touchedFields,N)}),Ne=N=>{N&&Yp(N).forEach(M=>pt(n.errors,M)),f.state.next({errors:N?n.errors:{}})},Tt=(N,M,U)=>{const Q=(Y(r,N,{_f:{}})._f||{}).ref,K=Y(n.errors,N)||{},{ref:W,message:Z,type:ve,...qe}=K;Be(n.errors,N,{...qe,...M,ref:Q}),f.state.next({name:N,errors:n.errors,isValid:!1}),U&&U.shouldFocus&&Q&&Q.focus&&Q.focus()},Ut=(N,M)=>Ai(N)?f.values.subscribe({next:U=>N(x(void 0,M),U)}):x(N,M,!0),ft=(N,M={})=>{for(const U of N?Yp(N):a.mount)a.mount.delete(U),a.array.delete(U),M.keepValue||(pt(r,U),pt(s,U)),!M.keepError&&pt(n.errors,U),!M.keepDirty&&pt(n.dirtyFields,U),!M.keepTouched&&pt(n.touchedFields,U),!M.keepIsValidating&&pt(n.validatingFields,U),!e.shouldUnregister&&!M.keepDefaultValue&&pt(i,U);f.values.next({values:{...s}}),f.state.next({...n,...M.keepDirty?{isDirty:b()}:{}}),!M.keepIsValid&&R()},it=({disabled:N,name:M,field:U,fields:Q,value:K})=>{if(vi(N)&&o.mount||N){const W=N?void 0:st(K)?Zp(U?U._f:Y(Q,M)._f):K;Be(s,M,W),V(M,W,!1,!1,!0)}},Rr=(N,M={})=>{let U=Y(r,N);const Q=vi(M.disabled);return Be(r,N,{...U||{},_f:{...U&&U._f?U._f:{ref:{name:N}},name:N,mount:!0,...M}}),a.mount.add(N),U?it({field:U,disabled:M.disabled,name:N,value:M.value}):L(N,!0,M.value),{...Q?{disabled:M.disabled}:{},...e.progressive?{required:!!M.required,min:ol(M.min),max:ol(M.max),minLength:ol(M.minLength),maxLength:ol(M.maxLength),pattern:ol(M.pattern)}:{},name:N,onChange:q,onBlur:q,ref:K=>{if(K){Rr(N,M),U=Y(r,N);const W=st(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,Z=$D(W),ve=U._f.refs||[];if(Z?ve.find(qe=>qe===W):W===U._f.ref)return;Be(r,N,{_f:{...U._f,...Z?{refs:[...ve.filter(Jp),W,...Array.isArray(Y(i,N))?[{}]:[]],ref:{type:W.type,name:N}}:{ref:W}}}),L(N,!1,void 0,W)}else U=Y(r,N,{}),U._f&&(U._f.mount=!1),(e.shouldUnregister||M.shouldUnregister)&&!(ND(a.array,N)&&o.action)&&a.unMount.add(N)}}},kr=()=>e.shouldFocusError&&Ll(r,ee,a.mount),Zt=N=>{vi(N)&&(f.state.next({disabled:N}),Ll(r,(M,U)=>{const Q=Y(r,U);Q&&(M.disabled=Q._f.disabled||N,Array.isArray(Q._f.refs)&&Q._f.refs.forEach(K=>{K.disabled=Q._f.disabled||N}))},0,!1))},ns=(N,M)=>async U=>{let Q;U&&(U.preventDefault&&U.preventDefault(),U.persist&&U.persist());let K=kn(s);if(f.state.next({isSubmitting:!0}),e.resolver){const{errors:W,values:Z}=await E();n.errors=W,K=Z}else await A(r);if(pt(n.errors,"root"),vn(n.errors)){f.state.next({errors:{}});try{await N(K,U)}catch(W){Q=W}}else M&&await M({...n.errors},U),kr(),setTimeout(kr);if(f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:vn(n.errors)&&!Q,submitCount:n.submitCount+1,errors:n.errors}),Q)throw Q},Fa=(N,M={})=>{Y(r,N)&&(st(M.defaultValue)?Ie(N,kn(Y(i,N))):(Ie(N,M.defaultValue),Be(i,N,kn(M.defaultValue))),M.keepTouched||pt(n.touchedFields,N),M.keepDirty||(pt(n.dirtyFields,N),n.isDirty=M.defaultValue?b(N,kn(Y(i,N))):b()),M.keepError||(pt(n.errors,N),h.isValid&&R()),f.state.next({...n}))},Ys=(N,M={})=>{const U=N?kn(N):i,Q=kn(U),K=vn(N),W=K?i:Q;if(M.keepDefaultValues||(i=U),!M.keepValues){if(M.keepDirtyValues)for(const Z of a.mount)Y(n.dirtyFields,Z)?Be(W,Z,Y(s,Z)):Ie(Z,Y(W,Z));else{if(xy&&st(N))for(const Z of a.mount){const ve=Y(r,Z);if(ve&&ve._f){const qe=Array.isArray(ve._f.refs)?ve._f.refs[0]:ve._f.ref;if(ld(qe)){const Re=qe.closest("form");if(Re){Re.reset();break}}}}r={}}s=t.shouldUnregister?M.keepDefaultValues?kn(i):{}:kn(W),f.array.next({values:{...W}}),f.values.next({values:{...W}})}a={mount:M.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!h.isValid||!!M.keepIsValid||!!M.keepDirtyValues,o.watch=!!t.shouldUnregister,f.state.next({submitCount:M.keepSubmitCount?n.submitCount:0,isDirty:K?!1:M.keepDirty?n.isDirty:!!(M.keepDefaultValues&&!ms(N,i)),isSubmitted:M.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:K?[]:M.keepDirtyValues?M.keepDefaultValues&&s?jc(i,s):n.dirtyFields:M.keepDefaultValues&&N?jc(i,N):M.keepDirty?n.dirtyFields:{},touchedFields:M.keepTouched?n.touchedFields:{},errors:M.keepErrors?n.errors:{},isSubmitSuccessful:M.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Xs=(N,M)=>Ys(Ai(N)?N(s):N,M);return{control:{register:Rr,unregister:ft,getFieldState:ye,handleSubmit:ns,setError:Tt,_executeSchema:E,_getWatch:x,_getDirty:b,_updateValid:R,_removeUnmounted:k,_updateFieldArray:g,_updateDisabledField:it,_getFieldArray:de,_reset:Ys,_resetDefaultValues:()=>Ai(e.defaultValues)&&e.defaultValues().then(N=>{Xs(N,e.resetOptions),f.state.next({isLoading:!1})}),_updateFormState:N=>{n={...n,...N}},_disableForm:Zt,_subjects:f,_proxyFormState:h,_setErrors:O,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(N){o=N},get _defaultValues(){return i},get _names(){return a},set _names(N){a=N},get _formState(){return n},set _formState(N){n=N},get _options(){return e},set _options(N){e={...e,...N}}},trigger:te,register:Rr,handleSubmit:ns,watch:Ut,setValue:Ie,getValues:Pe,reset:Xs,resetField:Fa,clearErrors:Ne,unregister:ft,setError:Tt,setFocus:(N,M={})=>{const U=Y(r,N),Q=U&&U._f;if(Q){const K=Q.refs?Q.refs[0]:Q.ref;K.focus&&(K.focus(),M.shouldSelect&&K.select())}},getFieldState:ye}}function Py(t={}){const e=Me.useRef(),n=Me.useRef(),[r,i]=Me.useState({isDirty:!1,isValidating:!1,isLoading:Ai(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:Ai(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...GD(t),formState:r});const s=e.current.control;return s._options=t,MD({subject:s._subjects.state,next:o=>{LD(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Me.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),Me.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),Me.useEffect(()=>{t.values&&!ms(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),Me.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),Me.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),Me.useEffect(()=>{t.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[t.shouldUnregister,s]),e.current.formState=DD(r,s),e.current}var zw=function(t,e,n){if(t&&"reportValidity"in t){var r=Y(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},ox=function(t,e){var n=function(i){var s=e.fields[i];s&&s.ref&&"reportValidity"in s.ref?zw(s.ref,i,t):s.refs&&s.refs.forEach(function(o){return zw(o,i,t)})};for(var r in e.fields)n(r)},KD=function(t){return t instanceof Date},QD=function(t){return t==null},YD=function(t){return typeof t=="object"},XD=function(t){return!QD(t)&&!Array.isArray(t)&&YD(t)&&!KD(t)},JD=function(t){return/^\w*$/.test(t)},em=function(t,e,n){for(var r=-1,i=JD(e)?[e]:function(h){return f=h.replace(/["|']|\]/g,"").split(/\.|\[/),Array.isArray(f)?f.filter(Boolean):[];var f}(e),s=i.length,o=s-1;++r<s;){var a=i[r],l=n;if(r!==o){var c=t[a];l=XD(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t},ZD=function(t,e){e.shouldUseNativeValidation&&ox(t,e);var n={};for(var r in t){var i=Y(e.fields,r),s=Object.assign(t[r]||{},{ref:i&&i.ref});if(eL(e.names||Object.keys(t),r)){var o=Object.assign({},Y(n,r));em(o,"root",s),em(n,r,o)}else em(n,r,s)}return n},eL=function(t,e){return t.some(function(n){return n.startsWith(e+".")})};function by(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=(e.context,Promise.resolve(t[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:i}))).then(function(c){return s.shouldUseNativeValidation&&ox({},s),{values:n.raw?r:c,errors:{}}}))}catch(c){return a(c)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:ZD((a=o,l=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(a.inner||[]).reduce(function(c,h){if(c[h.path]||(c[h.path]={message:h.message,type:h.type}),l){var f=c[h.path].types,m=f&&f[h.type];c[h.path]=ZC(h.path,l,c,h.type,m?[].concat(m,h.message):h.message)}return c},{})),s)};var a,l}))}catch(o){return Promise.reject(o)}}}function Bs(t){this._maxSize=t,this.clear()}Bs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Bs.prototype.get=function(t){return this._values[t]};Bs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var tL=/[^.^\]^[]+|(?=\[\]|\.\.)/g,ax=/^\d+$/,nL=/^\d/,rL=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,iL=/^\s*(['"]?)(.*?)(\1)\s*$/,Ny=512,Bw=new Bs(Ny),Ww=new Bs(Ny),Hw=new Bs(Ny),Is={Cache:Bs,split:Pg,normalizePath:tm,setter:function(t){var e=tm(t);return Ww.get(t)||Ww.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=tm(t);return Hw.get(t)||Hw.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Oy(n)||ax.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){sL(Array.isArray(t)?t:Pg(t),e,n)}};function tm(t){return Bw.get(t)||Bw.set(t,Pg(t).map(function(e){return e.replace(iL,"$2")}))}function Pg(t){return t.match(tL)||[""]}function sL(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(lL(i)&&(i='"'+i+'"'),a=Oy(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Oy(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function oL(t){return t.match(nL)&&!t.match(ax)}function aL(t){return rL.test(t)}function lL(t){return!Oy(t)&&(oL(t)||aL(t))}const uL=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ef=t=>t.match(uL)||[],wf=t=>t[0].toUpperCase()+t.slice(1),Dy=(t,e)=>Ef(t).join(e).toLowerCase(),lx=t=>Ef(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),cL=t=>wf(lx(t)),hL=t=>Dy(t,"_"),dL=t=>Dy(t,"-"),fL=t=>wf(Dy(t," ")),pL=t=>Ef(t).map(wf).join(" ");var nm={words:Ef,upperFirst:wf,camelCase:lx,pascalCase:cL,snakeCase:hL,kebabCase:dL,sentenceCase:fL,titleCase:pL},Ly={exports:{}};Ly.exports=function(t){return ux(mL(t),t)};Ly.exports.array=ux;function ux(t,e){var n=t.length,r=new Array(n),i={},s=n,o=gL(e),a=_L(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(c,h,f){if(f.has(c)){var m;try{m=", node was:"+JSON.stringify(c)}catch{m=""}throw new Error("Cyclic dependency"+m)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[h]){i[h]=!0;var _=o.get(c)||new Set;if(_=Array.from(_),h=_.length){f.add(c);do{var w=_[--h];l(w,a.get(w),f)}while(h);f.delete(c)}r[--n]=c}}}function mL(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function gL(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function _L(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var yL=Ly.exports;const vL=rI(yL),EL=Object.prototype.toString,wL=Error.prototype.toString,TL=RegExp.prototype.toString,IL=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",SL=/^Symbol\((.*)\)(.*)$/;function CL(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function qw(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return CL(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return IL.call(t).replace(SL,"Symbol($1)");const r=EL.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+wL.call(t)+"]":r==="RegExp"?TL.call(t):null}function Vi(t,e){let n=qw(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=qw(this[r],e);return s!==null?s:i},2)}function cx(t){return t==null?[]:[].concat(t)}let hx,dx,fx,xL=/\$\{\s*(\w+)\s*\}/g;hx=Symbol.toStringTag;class Gw{constructor(e,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[hx]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],cx(e).forEach(s=>{if(un.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}dx=Symbol.hasInstance;fx=Symbol.toStringTag;class un extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(xL,(i,s)=>Vi(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){const o=new Gw(e,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[fx]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,un)}static[dx](e){return Gw[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let or={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Vi(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Vi(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Vi(n,!0)}\``+i}},an={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},AL={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},bg={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},RL={isValue:"${path} field must be ${value}"},Ng={noUnknown:"${path} field has unspecified keys: ${unknown}"},kL={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},PL={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Vi(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Vi(n,!0)}\``}return un.formatError(or.notType,t)}};Object.assign(Object.create(null),{mixed:or,string:an,number:AL,date:bg,object:Ng,array:kL,boolean:RL,tuple:PL});const My=t=>t&&t.__isYupSchema__;class dd{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new dd(e,(a,l)=>{var c;let h=o(...a)?i:s;return(c=h==null?void 0:h(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!My(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const $c={context:"$",value:"."};let Ws=class{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===$c.context,this.isValue=this.key[0]===$c.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?$c.context:this.isValue?$c.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Is.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}};Ws.prototype.__isYupRef=!0;const gs=t=>t==null;function lo(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:c,test:h,params:f,message:m,skipAbsent:_}=t;let{parent:w,context:S,abortEarly:R=o.spec.abortEarly,disableStackTrace:T=o.spec.disableStackTrace}=i;function g(k){return Ws.isRef(k)?k.getValue(n,w,S):k}function I(k={}){const b=Object.assign({value:n,originalValue:s,label:o.spec.label,path:k.path||r,spec:o.spec,disableStackTrace:k.disableStackTrace||T},f,k.params);for(const de of Object.keys(b))b[de]=g(b[de]);const x=new un(un.formatError(k.message||m,b),n,b.path,k.type||c,b.disableStackTrace);return x.params=b,x}const O=R?a:l;let L={path:r,parent:w,type:c,from:i.from,createError:I,resolve:g,options:i,originalValue:s,schema:o};const V=k=>{un.isError(k)?O(k):k?l(null):O(I())},v=k=>{un.isError(k)?O(k):a(k)};if(_&&gs(n))return V(!0);let C;try{var A;if(C=h.call(L,n,L),typeof((A=C)==null?void 0:A.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${L.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(C).then(V,v)}}catch(k){v(k);return}V(C)}return e.OPTIONS=t,e}function bL(t,e,n,r=n){let i,s,o;return e?(Is.forEach(e,(a,l,c)=>{let h=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let f=t.type==="tuple",m=c?parseInt(h,10):0;if(t.innerType||f){if(f&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&m>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[m],t=f?t.spec.types[m]:t.innerType}if(!c){if(!t.fields||!t.fields[h])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[h],t=t.fields[h]}s=h,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class fd extends Set{describe(){const e=[];for(const n of this.values())e.push(Ws.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new fd(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function Ro(t,e=new Map){if(My(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=Ro(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,Ro(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(Ro(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=Ro(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Tr{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new fd,this._blacklist=new fd,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(or.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=Ro(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&gs(s))return s;let o=Vi(e),a=Vi(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let h of Object.values(this.internalTests))h&&c.push(h);this.runTests({path:s,value:l,originalValue:o,options:n,tests:c},r,h=>{if(h.length)return i(h,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:c}=e,h=S=>{i||(i=!0,n(S,o))},f=S=>{i||(i=!0,r(S,o))},m=s.length,_=[];if(!m)return f([]);let w={value:o,originalValue:a,path:l,options:c,schema:this};for(let S=0;S<s.length;S++){const R=s[S];R(w,h,function(g){g&&(Array.isArray(g)?_.push(...g):_.push(g)),--m<=0&&f(_)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=r[a];const h=Object.assign({},o,{strict:!0,parent:r,value:c,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(f,m,_)=>this.resolve(h)._validate(c,h,m,_)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,c)=>{un.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new un(l,c,void 0,void 0,s)):o(c)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw un.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new un(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(un.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(un.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):Ro(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=lo({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=lo({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=or.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=or.notNull){return this.nullability(!1,e)}required(e=or.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=or.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=lo(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=cx(e).map(s=>new Ws(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new dd(i,n):dd.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=lo({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=or.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=lo({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=or.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=lo({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,h)=>h.findIndex(f=>f.name===l.name)===c)}}}Tr.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Tr.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=bL(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Tr.prototype[t]=Tr.prototype.oneOf;for(const t of["not","nope"])Tr.prototype[t]=Tr.prototype.notOneOf;const NL=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function OL(t){const e=Og(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function Og(t){var e,n;const r=NL.exec(t);return r?{year:Or(r[1]),month:Or(r[2],1)-1,day:Or(r[3],1),hour:Or(r[4]),minute:Or(r[5]),second:Or(r[6]),millisecond:r[7]?Or(r[7].substring(0,3)):0,precision:(e=(n=r[7])==null?void 0:n.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Or(r[10]),minuteOffset:Or(r[11])}:null}function Or(t,e=0){return Number(t)||e}let DL=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,LL=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,ML=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,FL="^\\d{4}-\\d{2}-\\d{2}",VL="\\d{2}:\\d{2}:\\d{2}",UL="(([+-]\\d{2}(:?\\d{2})?)|Z)",jL=new RegExp(`${FL}T${VL}(\\.\\d+)?${UL}$`),$L=t=>gs(t)||t===t.trim(),zL={}.toString();function dr(){return new px}class px extends Tr{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===zL?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||or.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=an.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=an.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=an.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||an.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=an.email){return this.matches(DL,{name:"email",message:e,excludeEmptyString:!0})}url(e=an.url){return this.matches(LL,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=an.uuid){return this.matches(ML,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",r,i;return e&&(typeof e=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=e:n=e),this.matches(jL,{name:"datetime",message:n||an.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||an.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=Og(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||an.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=Og(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=an.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:$L})}lowercase(e=an.lowercase){return this.transform(n=>gs(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gs(n)||n===n.toLowerCase()})}uppercase(e=an.uppercase){return this.transform(n=>gs(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>gs(n)||n===n.toUpperCase()})}}dr.prototype=px.prototype;let BL=new Date(""),WL=t=>Object.prototype.toString.call(t)==="[object Date]";class Tf extends Tr{constructor(){super({type:"date",check(e){return WL(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=OL(e),isNaN(e)?Tf.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Ws.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=bg.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=bg.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}Tf.INVALID_DATE=BL;Tf.prototype;function HL(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=Is.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Ws.isRef(a)&&a.isSibling?s(a.path,o):My(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return vL.array(Array.from(r),n).reverse()}function Kw(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function mx(t){return(e,n)=>Kw(t,e)-Kw(t,n)}const qL=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function _h(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=_h(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=_h(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(_h)}):"optional"in t?t.optional():t}const GL=(t,e)=>{const n=[...Is.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=Is.getter(Is.join(n),!0)(t);return!!(i&&r in i)};let Qw=t=>Object.prototype.toString.call(t)==="[object Object]";function KL(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const QL=mx([]);function If(t){return new gx(t)}class gx extends Tr{constructor(e){super({type:"object",check(n){return Qw(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=QL,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(f=>!this._nodes.includes(f))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),h=!1;for(const f of a){let m=s[f],_=f in i;if(m){let w,S=i[f];c.path=(n.path?`${n.path}.`:"")+f,m=m.resolve({value:S,context:n.context,parent:l});let R=m instanceof Tr?m.spec:void 0,T=R==null?void 0:R.strict;if(R!=null&&R.strip){h=h||f in i;continue}w=!n.__validating||!T?m.cast(i[f],c):i[f],w!==void 0&&(l[f]=w)}else _&&!o&&(l[f]=i[f]);(_!==f in l||l[f]!==i[f])&&(h=!0)}return h?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,c)=>{if(!a||!Qw(c)){i(l,c);return}o=o||c;let h=[];for(let f of this._nodes){let m=this.fields[f];!m||Ws.isRef(m)||h.push(m.asNestedTest({options:n,key:f,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:h,value:c,originalValue:o,options:n},r,f=>{i(f.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=HL(e,n),r._sortErrors=mx(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return _h(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=Is.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return GL(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(qL)}noUnknown(e=!0,n=Ng.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=KL(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Ng.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(nm.camelCase)}snakeCase(){return this.transformKeys(nm.snakeCase)}constantCase(){return this.transformKeys(e=>nm.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}If.prototype=gx.prototype;const YL=ne.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`,Fy=({onClose:t,children:e})=>{$.useEffect(()=>(window.addEventListener("keydown",n),document.documentElement.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.documentElement.style.overflow="visible"}));const n=i=>{i.code==="Escape"&&t()},r=i=>{i.target===i.currentTarget&&t()};return P.jsx(YL,{onClick:r,children:e})};function Vy(t){return xa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const XL=ne.div`
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
`,JL=ne.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,ZL=ne.div`
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
`,eM=ne.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,Yw=ne.div`
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
`,Xw=ne.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,tM=ne.button`
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
 */const _x={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const H=function(t,e){if(!t)throw Aa(e)},Aa=function(t){return new Error("Firebase Database ("+_x.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const yx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},nM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Uy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(m=64)),r.push(n[h],n[f],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new rM;const m=s<<2|a>>4;if(r.push(m),c!==64){const _=a<<4&240|c>>2;if(r.push(_),f!==64){const w=c<<6&192|f;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vx=function(t){const e=yx(t);return Uy.encodeByteArray(e,!0)},pd=function(t){return vx(t).replace(/\./g,"")},md=function(t){try{return Uy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iM(t){return Ex(void 0,t)}function Ex(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!sM(n)||(t[n]=Ex(t[n],e[n]));return t}function sM(t){return t!=="__proto__"}/**
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
 */function oM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aM=()=>oM().__FIREBASE_DEFAULTS__,lM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},uM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&md(t[1]);return e&&JSON.parse(e)},Sf=()=>{try{return aM()||lM()||uM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wx=t=>{var e,n;return(n=(e=Sf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},jy=t=>{const e=wx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Tx=()=>{var t;return(t=Sf())===null||t===void 0?void 0:t.config},Ix=t=>{var e;return(e=Sf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class $y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function zy(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pd(JSON.stringify(n)),pd(JSON.stringify(o)),a].join(".")}/**
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function By(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function cM(){var t;const e=(t=Sf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function hM(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Sx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dM(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Cx(){return _x.NODE_ADMIN===!0}function fM(){return!cM()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pM(){try{return typeof indexedDB=="object"}catch{return!1}}function mM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const gM="FirebaseError";class xr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gM,Object.setPrototypeOf(this,xr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ju.prototype.create)}}class ju{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_M(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xr(i,a,r)}}function _M(t,e){return t.replace(yM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const yM=/\{\$([^}]+)}/g;/**
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
 */function cu(t){return JSON.parse(t)}function Rt(t){return JSON.stringify(t)}/**
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
 */const xx=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=cu(md(s[0])||""),n=cu(md(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},vM=function(t){const e=xx(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},EM=function(t){const e=xx(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function si(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function sa(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Dg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gd(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _d(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jw(s)&&Jw(o)){if(!_d(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jw(t){return t!==null&&typeof t=="object"}/**
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
 */function Ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function vl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function El(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class wM{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let f=0;f<80;f++){f<40?f<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):f<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const m=(i<<5|i>>>27)+c+l+h+r[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function TM(t,e){const n=new IM(t,e);return n.subscribe.bind(n)}class IM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rm),i.error===void 0&&(i.error=rm),i.complete===void 0&&(i.complete=rm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rm(){}function Ax(t,e){return`${t} failed: ${e} argument `}/**
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
 */const CM=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,H(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cf=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class xM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $y;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RM(e))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=us){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=us){return this.instances.has(e)}getOptions(e=us){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:AM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=us){return this.component?this.component.multipleInstances?e:us:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AM(t){return t===us?void 0:t}function RM(t){return t.instantiationMode==="EAGER"}/**
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
 */class kM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const PM={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},bM=me.INFO,NM={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},OM=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xf{constructor(e){this.name=e,this._logLevel=bM,this._logHandler=OM,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const DM=(t,e)=>e.some(n=>t instanceof n);let Zw,eT;function LM(){return Zw||(Zw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MM(){return eT||(eT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rx=new WeakMap,Lg=new WeakMap,kx=new WeakMap,im=new WeakMap,Wy=new WeakMap;function FM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ui(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Rx.set(n,t)}).catch(()=>{}),Wy.set(e,t),e}function VM(t){if(Lg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Lg.set(t,e)}let Mg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UM(t){Mg=t(Mg)}function jM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sm(this),e,...n);return kx.set(r,e.sort?e.sort():[e]),Ui(r)}:MM().includes(t)?function(...e){return t.apply(sm(this),e),Ui(Rx.get(this))}:function(...e){return Ui(t.apply(sm(this),e))}}function $M(t){return typeof t=="function"?jM(t):(t instanceof IDBTransaction&&VM(t),DM(t,LM())?new Proxy(t,Mg):t)}function Ui(t){if(t instanceof IDBRequest)return FM(t);if(im.has(t))return im.get(t);const e=$M(t);return e!==t&&(im.set(t,e),Wy.set(e,t)),e}const sm=t=>Wy.get(t);function zM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ui(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ui(o.result),l.oldVersion,l.newVersion,Ui(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const BM=["get","getKey","getAll","getAllKeys","count"],WM=["put","add","delete","clear"],om=new Map;function tT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(om.get(e))return om.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WM.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||BM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return om.set(e,s),s}UM(t=>({...t,get:(e,n,r)=>tT(e,n)||t.get(e,n,r),has:(e,n)=>!!tT(e,n)||t.has(e,n)}));/**
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
 */class HM{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qM(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function qM(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fg="@firebase/app",nT="0.10.5";/**
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
 */const bs=new xf("@firebase/app"),GM="@firebase/app-compat",KM="@firebase/analytics-compat",QM="@firebase/analytics",YM="@firebase/app-check-compat",XM="@firebase/app-check",JM="@firebase/auth",ZM="@firebase/auth-compat",eF="@firebase/database",tF="@firebase/database-compat",nF="@firebase/functions",rF="@firebase/functions-compat",iF="@firebase/installations",sF="@firebase/installations-compat",oF="@firebase/messaging",aF="@firebase/messaging-compat",lF="@firebase/performance",uF="@firebase/performance-compat",cF="@firebase/remote-config",hF="@firebase/remote-config-compat",dF="@firebase/storage",fF="@firebase/storage-compat",pF="@firebase/firestore",mF="@firebase/vertexai-preview",gF="@firebase/firestore-compat",_F="firebase",yF="10.12.2";/**
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
 */const Vg="[DEFAULT]",vF={[Fg]:"fire-core",[GM]:"fire-core-compat",[QM]:"fire-analytics",[KM]:"fire-analytics-compat",[XM]:"fire-app-check",[YM]:"fire-app-check-compat",[JM]:"fire-auth",[ZM]:"fire-auth-compat",[eF]:"fire-rtdb",[tF]:"fire-rtdb-compat",[nF]:"fire-fn",[rF]:"fire-fn-compat",[iF]:"fire-iid",[sF]:"fire-iid-compat",[oF]:"fire-fcm",[aF]:"fire-fcm-compat",[lF]:"fire-perf",[uF]:"fire-perf-compat",[cF]:"fire-rc",[hF]:"fire-rc-compat",[dF]:"fire-gcs",[fF]:"fire-gcs-compat",[pF]:"fire-fst",[gF]:"fire-fst-compat",[mF]:"fire-vertex","fire-js":"fire-js",[_F]:"fire-js-all"};/**
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
 */const yd=new Map,EF=new Map,Ug=new Map;function rT(t,e){try{t.container.addComponent(e)}catch(n){bs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hi(t){const e=t.name;if(Ug.has(e))return bs.debug(`There were multiple attempts to register component ${e}.`),!1;Ug.set(e,t);for(const n of yd.values())rT(n,t);for(const n of EF.values())rT(n,t);return!0}function $u(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fr(t){return t.settings!==void 0}/**
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
 */const wF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ji=new ju("app","Firebase",wF);/**
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
 */class TF{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ji.create("app-deleted",{appName:this._name})}}/**
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
 */const es=yF;function Px(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ji.create("bad-app-name",{appName:String(i)});if(n||(n=Tx()),!n)throw ji.create("no-options");const s=yd.get(i);if(s){if(_d(n,s.options)&&_d(r,s.config))return s;throw ji.create("duplicate-app",{appName:i})}const o=new kM(i);for(const l of Ug.values())o.addComponent(l);const a=new TF(n,r,o);return yd.set(i,a),a}function Af(t=Vg){const e=yd.get(t);if(!e&&t===Vg&&Tx())return Px();if(!e)throw ji.create("no-app",{appName:t});return e}function Ln(t,e,n){var r;let i=(r=vF[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bs.warn(a.join(" "));return}Hi(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const IF="firebase-heartbeat-database",SF=1,hu="firebase-heartbeat-store";let am=null;function bx(){return am||(am=zM(IF,SF,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(hu)}catch(n){console.warn(n)}}}}).catch(t=>{throw ji.create("idb-open",{originalErrorMessage:t.message})})),am}async function CF(t){try{const n=(await bx()).transaction(hu),r=await n.objectStore(hu).get(Nx(t));return await n.done,r}catch(e){if(e instanceof xr)bs.warn(e.message);else{const n=ji.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bs.warn(n.message)}}}async function iT(t,e){try{const r=(await bx()).transaction(hu,"readwrite");await r.objectStore(hu).put(e,Nx(t)),await r.done}catch(n){if(n instanceof xr)bs.warn(n.message);else{const r=ji.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bs.warn(r.message)}}}function Nx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const xF=1024,AF=30*24*60*60*1e3;class RF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sT();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=AF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sT(),{heartbeatsToSend:r,unsentEntries:i}=kF(this._heartbeatsCache.heartbeats),s=pd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sT(){return new Date().toISOString().substring(0,10)}function kF(t,e=xF){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),oT(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),oT(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class PF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pM()?mM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iT(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iT(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function oT(t){return pd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bF(t){Hi(new Jr("platform-logger",e=>new HM(e),"PRIVATE")),Hi(new Jr("heartbeat",e=>new RF(e),"PRIVATE")),Ln(Fg,nT,t),Ln(Fg,nT,"esm2017"),Ln("fire-js","")}bF("");var NF="firebase",OF="10.12.2";/**
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
 */Ln(NF,OF,"app");function Ox(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DF=Ox,Dx=new ju("auth","Firebase",Ox());/**
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
 */const vd=new xf("@firebase/auth");function LF(t,...e){vd.logLevel<=me.WARN&&vd.warn(`Auth (${es}): ${t}`,...e)}function yh(t,...e){vd.logLevel<=me.ERROR&&vd.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function rr(t,...e){throw Hy(t,...e)}function _r(t,...e){return Hy(t,...e)}function Lx(t,e,n){const r=Object.assign(Object.assign({},DF()),{[e]:n});return new ju("auth","Firebase",r).create(e,{appName:t.name})}function Hr(t){return Lx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dx.create(t,...e)}function se(t,e,...n){if(!t)throw Hy(e,...n)}function jr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yh(e),new Error(e)}function Zr(t,e){t||jr(e)}/**
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
 */function jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MF(){return aT()==="http:"||aT()==="https:"}function aT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function FF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MF()||hM()||"connection"in navigator)?navigator.onLine:!0}function VF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zr(n>e,"Short delay should be less than long delay!"),this.isMobile=By()||Sx()}get(){return FF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function qy(t,e){Zr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const UF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jF=new zu(3e4,6e4);function ts(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oi(t,e,n,r,i={}){return Fx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ra(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mx.fetch()(Vx(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Fx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UF),e);try{const i=new zF(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw zc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Lx(t,h,c);rr(t,h)}}catch(i){if(i instanceof xr)throw i;rr(t,"network-request-failed",{message:String(i)})}}async function Bu(t,e,n,r,i={}){const s=await oi(t,e,n,r,i);return"mfaPendingCredential"in s&&rr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Vx(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?qy(t.config,i):`${t.config.apiScheme}://${i}`}function $F(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zF{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_r(this.auth,"network-request-failed")),jF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function zc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_r(t,e,r);return i.customData._tokenResponse=n,i}function lT(t){return t!==void 0&&t.enterprise!==void 0}class BF{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $F(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function WF(t,e){return oi(t,"GET","/v2/recaptchaConfig",ts(t,e))}/**
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
 */async function HF(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function Ux(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ml(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qF(t,e=!1){const n=wt(t),r=await n.getIdToken(e),i=Gy(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ml(lm(i.auth_time)),issuedAtTime:Ml(lm(i.iat)),expirationTime:Ml(lm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lm(t){return Number(t)*1e3}function Gy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yh("JWT malformed, contained fewer than 3 sections"),null;try{const i=md(n);return i?JSON.parse(i):(yh("Failed to decode base64 JWT payload"),null)}catch(i){return yh("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function uT(t){const e=Gy(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oa(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xr&&GF(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GF({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class KF{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $g{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ml(this.lastLoginAt),this.creationTime=Ml(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ed(t){var e;const n=t.auth,r=await t.getIdToken(),i=await oa(t,Ux(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?jx(s.providerUserInfo):[],a=YF(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new $g(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function QF(t){const e=wt(t);await Ed(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YF(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jx(t){return t.map(e=>{var{providerId:n}=e,r=Ey(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function XF(t,e){const n=await Fx(t,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Vx(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JF(t,e){return oi(t,"POST","/v2/accounts:revokeToken",ts(t,e))}/**
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
 */class Vo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=uT(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XF(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Vo;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vo,this.toJSON())}_performRefresh(){return jr("not implemented")}}/**
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
 */function fi(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $r{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ey(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KF(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new $g(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await oa(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qF(this,e)}reload(){return QF(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $r(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ed(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(Hr(this.auth));const e=await this.getIdToken();return await oa(this,HF(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:I,emailVerified:O,isAnonymous:L,providerData:V,stsTokenManager:v}=n;se(I&&v,e,"internal-error");const E=Vo.fromJSON(this.name,v);se(typeof I=="string",e,"internal-error"),fi(f,e.name),fi(m,e.name),se(typeof O=="boolean",e,"internal-error"),se(typeof L=="boolean",e,"internal-error"),fi(_,e.name),fi(w,e.name),fi(S,e.name),fi(R,e.name),fi(T,e.name),fi(g,e.name);const C=new $r({uid:I,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:L,photoURL:w,phoneNumber:_,tenantId:S,stsTokenManager:E,createdAt:T,lastLoginAt:g});return V&&Array.isArray(V)&&(C.providerData=V.map(A=>Object.assign({},A))),R&&(C._redirectEventId=R),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Vo;i.updateFromServerResponse(n);const s=new $r({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ed(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?jx(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Vo;a.updateFromIdToken(r);const l=new $r({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new $g(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const cT=new Map;function zr(t){Zr(t instanceof Function,"Expected a class definition");let e=cT.get(t);return e?(Zr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cT.set(t,e),e)}/**
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
 */class $x{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$x.type="NONE";const hT=$x;/**
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
 */function vh(t,e,n){return`firebase:${t}:${e}:${n}`}class Uo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vh(this.userKey,i.apiKey,s),this.fullPersistenceKey=vh("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?$r._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Uo(zr(hT),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||zr(hT);const o=vh(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=$r._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Uo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Uo(s,e,r))}}/**
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
 */function dT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wx(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zx(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(qx(e))return"Blackberry";if(Gx(e))return"Webos";if(Ky(e))return"Safari";if((e.includes("chrome/")||Bx(e))&&!e.includes("edge/"))return"Chrome";if(Hx(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zx(t=Vt()){return/firefox\//i.test(t)}function Ky(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Bx(t=Vt()){return/crios\//i.test(t)}function Wx(t=Vt()){return/iemobile/i.test(t)}function Hx(t=Vt()){return/android/i.test(t)}function qx(t=Vt()){return/blackberry/i.test(t)}function Gx(t=Vt()){return/webos/i.test(t)}function Rf(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZF(t=Vt()){var e;return Rf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eV(){return dM()&&document.documentMode===10}function Kx(t=Vt()){return Rf(t)||Hx(t)||Gx(t)||qx(t)||/windows phone/i.test(t)||Wx(t)}function tV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Qx(t,e=[]){let n;switch(t){case"Browser":n=dT(Vt());break;case"Worker":n=`${dT(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class nV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function rV(t,e={}){return oi(t,"GET","/v2/passwordPolicy",ts(t,e))}/**
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
 */const iV=6;class sV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:iV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class oV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fT(this),this.idTokenSubscription=new fT(this),this.beforeStateQueue=new nV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Uo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ux(this,{idToken:e}),r=await $r._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ed(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(Hr(this));const n=e?wt(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(Hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(Hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rV(this),n=new sV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ju("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JF(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zr(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Uo.create(this,[zr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qx(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hs(t){return wt(t)}class fT{constructor(e){this.auth=e,this.observer=null,this.addObserver=TM(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aV(t){kf=t}function Yx(t){return kf.loadJS(t)}function lV(){return kf.recaptchaEnterpriseScript}function uV(){return kf.gapiScript}function cV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hV="recaptcha-enterprise",dV="NO_RECAPTCHA";class fV{constructor(e){this.type=hV,this.auth=Hs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{WF(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new BF(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;lT(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(dV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&lT(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=lV();l.length!==0&&(l+=a),Yx(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function pT(t,e,n,r=!1){const i=new fV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function zg(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await pT(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await pT(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function pV(t,e){const n=$u(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_d(s,e??{}))return i;rr(i,"already-initialized")}return n.initialize({options:e})}function mV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function gV(t,e,n){const r=Hs(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Xx(e),{host:o,port:a}=_V(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yV()}function Xx(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _V(t){const e=Xx(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:mT(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:mT(o)}}}function mT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jr("not implemented")}_getIdTokenResponse(e){return jr("not implemented")}_linkToIdToken(e,n){return jr("not implemented")}_getReauthenticationResolver(e){return jr("not implemented")}}async function vV(t,e){return oi(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function EV(t,e){return Bu(t,"POST","/v1/accounts:signInWithPassword",ts(t,e))}/**
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
 */async function wV(t,e){return Bu(t,"POST","/v1/accounts:signInWithEmailLink",ts(t,e))}async function TV(t,e){return Bu(t,"POST","/v1/accounts:signInWithEmailLink",ts(t,e))}/**
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
 */class du extends Qy{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new du(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new du(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zg(e,n,"signInWithPassword",EV);case"emailLink":return wV(e,{email:this._email,oobCode:this._password});default:rr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zg(e,r,"signUpPassword",vV);case"emailLink":return TV(e,{idToken:n,email:this._email,oobCode:this._password});default:rr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jo(t,e){return Bu(t,"POST","/v1/accounts:signInWithIdp",ts(t,e))}/**
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
 */const IV="http://localhost";class Ns extends Qy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ns(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ey(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ns(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jo(e,n)}buildRequest(){const e={requestUri:IV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ra(n)}return e}}/**
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
 */function SV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CV(t){const e=vl(El(t)).link,n=e?vl(El(e)).deep_link_id:null,r=vl(El(t)).deep_link_id;return(r?vl(El(r)).link:null)||r||n||e||t}class Yy{constructor(e){var n,r,i,s,o,a;const l=vl(El(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=SV((i=l.mode)!==null&&i!==void 0?i:null);se(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=CV(e);try{return new Yy(n)}catch{return null}}}/**
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
 */class ka{constructor(){this.providerId=ka.PROVIDER_ID}static credential(e,n){return du._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yy.parseLink(n);return se(r,"argument-error"),du._fromEmailAndCode(e,r.code,r.tenantId)}}ka.PROVIDER_ID="password";ka.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ka.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Jx{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wu extends Jx{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends Wu{constructor(){super("facebook.com")}static credential(e){return Ns._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class wi extends Wu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ns._fromParams({providerId:wi.PROVIDER_ID,signInMethod:wi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wi.credentialFromTaggedObject(e)}static credentialFromError(e){return wi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wi.credential(n,r)}catch{return null}}}wi.GOOGLE_SIGN_IN_METHOD="google.com";wi.PROVIDER_ID="google.com";/**
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
 */class Ti extends Wu{constructor(){super("github.com")}static credential(e){return Ns._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ti.credential(e.oauthAccessToken)}catch{return null}}}Ti.GITHUB_SIGN_IN_METHOD="github.com";Ti.PROVIDER_ID="github.com";/**
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
 */class Ii extends Wu{constructor(){super("twitter.com")}static credential(e,n){return Ns._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ii.credential(n,r)}catch{return null}}}Ii.TWITTER_SIGN_IN_METHOD="twitter.com";Ii.PROVIDER_ID="twitter.com";/**
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
 */async function xV(t,e){return Bu(t,"POST","/v1/accounts:signUp",ts(t,e))}/**
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
 */class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $r._fromIdTokenResponse(e,r,i),o=gT(r);return new Os({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=gT(r);return new Os({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function gT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class wd extends xr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new wd(e,n,r,i)}}function Zx(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wd._fromErrorAndOperation(t,s,e,r):s})}async function AV(t,e,n=!1){const r=await oa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Os._forOperation(t,"link",r)}/**
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
 */async function RV(t,e,n=!1){const{auth:r}=t;if(fr(r.app))return Promise.reject(Hr(r));const i="reauthenticate";try{const s=await oa(t,Zx(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=Gy(s.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(t.uid===a,r,"user-mismatch"),Os._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rr(r,"user-mismatch"),s}}/**
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
 */async function eA(t,e,n=!1){if(fr(t.app))return Promise.reject(Hr(t));const r="signIn",i=await Zx(t,r,e),s=await Os._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kV(t,e){return eA(Hs(t),e)}/**
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
 */async function tA(t){const e=Hs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PV(t,e,n){if(fr(t.app))return Promise.reject(Hr(t));const r=Hs(t),o=await zg(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",xV).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tA(t),l}),a=await Os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function bV(t,e,n){return fr(t.app)?Promise.reject(Hr(t)):kV(wt(t),ka.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&tA(t),r})}/**
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
 */async function NV(t,e){return oi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function OV(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=wt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await oa(r,NV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function DV(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function LV(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function nA(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function MV(t){return wt(t).signOut()}const Td="__sak";/**
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
 */class rA{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Td,"1"),this.storage.removeItem(Td),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function FV(){const t=Vt();return Ky(t)||Rf(t)}const VV=1e3,UV=10;class iA extends rA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=FV()&&tV(),this.fallbackToPolling=Kx(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);eV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,UV):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}iA.type="LOCAL";const jV=iA;/**
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
 */class sA extends rA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sA.type="SESSION";const oA=sA;/**
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
 */function $V(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await $V(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pf.receivers=[];/**
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
 */function Xy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Xy("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yr(){return window}function BV(t){yr().location.href=t}/**
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
 */function aA(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function WV(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HV(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qV(){return aA()?self:null}/**
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
 */const lA="firebaseLocalStorageDb",GV=1,Id="firebaseLocalStorage",uA="fbase_key";class Hu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bf(t,e){return t.transaction([Id],e?"readwrite":"readonly").objectStore(Id)}function KV(){const t=indexedDB.deleteDatabase(lA);return new Hu(t).toPromise()}function Bg(){const t=indexedDB.open(lA,GV);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Id,{keyPath:uA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Id)?e(r):(r.close(),await KV(),e(await Bg()))})})}async function _T(t,e,n){const r=bf(t,!0).put({[uA]:e,value:n});return new Hu(r).toPromise()}async function QV(t,e){const n=bf(t,!1).get(e),r=await new Hu(n).toPromise();return r===void 0?null:r.value}function yT(t,e){const n=bf(t,!0).delete(e);return new Hu(n).toPromise()}const YV=800,XV=3;class cA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bg(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>XV)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pf._getInstance(qV()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WV(),!this.activeServiceWorker)return;this.sender=new zV(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bg();return await _T(e,Td,"1"),await yT(e,Td),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>_T(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QV(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bf(i,!1).getAll();return new Hu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),YV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}cA.type="LOCAL";const JV=cA;new zu(3e4,6e4);/**
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
 */function ZV(t,e){return e?zr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jy extends Qy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function e4(t){return eA(t.auth,new Jy(t),t.bypassAuthState)}function t4(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),RV(n,new Jy(t),t.bypassAuthState)}async function n4(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),AV(n,new Jy(t),t.bypassAuthState)}/**
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
 */class hA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return e4;case"linkViaPopup":case"linkViaRedirect":return n4;case"reauthViaPopup":case"reauthViaRedirect":return t4;default:rr(this.auth,"internal-error")}}resolve(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const r4=new zu(2e3,1e4);class ko extends hA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ko.currentPopupAction&&ko.currentPopupAction.cancel(),ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Zr(this.filter.length===1,"Popup operations only handle one event");const e=Xy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,r4.get())};e()}}ko.currentPopupAction=null;/**
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
 */const i4="pendingRedirect",Eh=new Map;class s4 extends hA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eh.get(this.auth._key());if(!e){try{const r=await o4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eh.set(this.auth._key(),e)}return this.bypassAuthState||Eh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function o4(t,e){const n=u4(e),r=l4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function a4(t,e){Eh.set(t._key(),e)}function l4(t){return zr(t._redirectPersistence)}function u4(t){return vh(i4,t.config.apiKey,t.name)}async function c4(t,e,n=!1){if(fr(t.app))return Promise.reject(Hr(t));const r=Hs(t),i=ZV(r,e),o=await new s4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const h4=10*60*1e3;class d4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!f4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_r(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=h4&&this.cachedEventUids.clear(),this.cachedEventUids.has(vT(e))}saveEventToCache(e){this.cachedEventUids.add(vT(e)),this.lastProcessedEventTime=Date.now()}}function vT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function f4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dA(t);default:return!1}}/**
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
 */async function p4(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
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
 */const m4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,g4=/^https?/;async function _4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await p4(t);for(const n of e)try{if(y4(n))return}catch{}rr(t,"unauthorized-domain")}function y4(t){const e=jg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!g4.test(n))return!1;if(m4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const v4=new zu(3e4,6e4);function ET(){const t=yr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function E4(t){return new Promise((e,n)=>{var r,i,s;function o(){ET(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ET(),n(_r(t,"network-request-failed"))},timeout:v4.get()})}if(!((i=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yr().gapi)===null||s===void 0)&&s.load)o();else{const a=cV("iframefcb");return yr()[a]=()=>{gapi.load?o():n(_r(t,"network-request-failed"))},Yx(`${uV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wh=null,e})}let wh=null;function w4(t){return wh=wh||E4(t),wh}/**
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
 */const T4=new zu(5e3,15e3),I4="__/auth/iframe",S4="emulator/auth/iframe",C4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},x4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function A4(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qy(e,S4):`https://${t.config.authDomain}/${I4}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=x4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ra(r).slice(1)}`}async function R4(t){const e=await w4(t),n=yr().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:A4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:C4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_r(t,"network-request-failed"),a=yr().setTimeout(()=>{s(o)},T4.get());function l(){yr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const k4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},P4=500,b4=600,N4="_blank",O4="http://localhost";class wT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function D4(t,e,n,r=P4,i=b4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},k4),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Vt().toLowerCase();n&&(a=Bx(c)?N4:n),zx(c)&&(e=e||O4,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[_,w])=>`${m}${_}=${w},`,"");if(ZF(c)&&a!=="_self")return L4(e||"",a),new wT(null);const f=window.open(e||"",a,h);se(f,t,"popup-blocked");try{f.focus()}catch{}return new wT(f)}function L4(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const M4="__/auth/handler",F4="emulator/auth/handler",V4=encodeURIComponent("fac");async function TT(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof Jx){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Dg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof Wu){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${V4}=${encodeURIComponent(l)}`:"";return`${U4(t)}?${Ra(a).slice(1)}${c}`}function U4({config:t}){return t.emulator?qy(t,F4):`https://${t.authDomain}/${M4}`}/**
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
 */const um="webStorageSupport";class j4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oA,this._completeRedirectFn=c4,this._overrideRedirectResult=a4}async _openPopup(e,n,r,i){var s;Zr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await TT(e,n,r,jg(),i);return D4(e,o,Xy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await TT(e,n,r,jg(),i);return BV(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await R4(e),r=new d4(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(um,{type:um},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[um];o!==void 0&&n(!!o),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kx()||Ky()||Rf()}}const $4=j4;var IT="@firebase/auth",ST="1.7.4";/**
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
 */class z4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function B4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function W4(t){Hi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qx(t)},c=new oV(r,i,s,l);return mV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hi(new Jr("auth-internal",e=>{const n=Hs(e.getProvider("auth").getImmediate());return(r=>new z4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(IT,ST,B4(t)),Ln(IT,ST,"esm2017")}/**
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
 */const H4=5*60,q4=Ix("authIdTokenMaxAge")||H4;let CT=null;const G4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>q4)return;const i=n==null?void 0:n.token;CT!==i&&(CT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zy(t=Af()){const e=$u(t,"auth");if(e.isInitialized())return e.getImmediate();const n=pV(t,{popupRedirectResolver:$4,persistence:[JV,jV,oA]}),r=Ix("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=G4(s.toString());LV(n,o,()=>o(n.currentUser)),DV(n,a=>o(a))}}const i=wx("auth");return i&&gV(n,`http://${i}`),n}function K4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}aV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_r("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",K4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});W4("Browser");const xT="@firebase/database",AT="1.0.5";/**
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
 */let fA="";function Q4(t){fA=t}/**
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
 */class Y4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:cu(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class X4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return si(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const pA=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Y4(e)}}catch{}return new X4},_s=pA("localStorage"),Wg=pA("sessionStorage");/**
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
 */const $o=new xf("@firebase/database"),J4=function(){let t=1;return function(){return t++}}(),mA=function(t){const e=CM(t),n=new wM;n.update(e);const r=n.digest();return Uy.encodeByteArray(r)},qu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=qu.apply(null,r):typeof r=="object"?e+=Rt(r):e+=r,e+=" "}return e};let Ss=null,RT=!0;const Z4=function(t,e){H(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?($o.logLevel=me.VERBOSE,Ss=$o.log.bind($o),e&&Wg.set("logging_enabled",!0)):typeof t=="function"?Ss=t:(Ss=null,Wg.remove("logging_enabled"))},Kt=function(...t){if(RT===!0&&(RT=!1,Ss===null&&Wg.get("logging_enabled")===!0&&Z4(!0)),Ss){const e=qu.apply(null,t);Ss(e)}},Gu=function(t){return function(...e){Kt(t,...e)}},Hg=function(...t){const e="FIREBASE INTERNAL ERROR: "+qu(...t);$o.error(e)},ei=function(...t){const e=`FIREBASE FATAL ERROR: ${qu(...t)}`;throw $o.error(e),new Error(e)},Sn=function(...t){const e="FIREBASE WARNING: "+qu(...t);$o.warn(e)},eU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},gA=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},tU=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},aa="[MIN_NAME]",Ds="[MAX_NAME]",Pa=function(t,e){if(t===e)return 0;if(t===aa||e===Ds)return-1;if(e===aa||t===Ds)return 1;{const n=kT(t),r=kT(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},nU=function(t,e){return t===e?0:t<e?-1:1},al=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Rt(e))},ev=function(t){if(typeof t!="object"||t===null)return Rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Rt(e[r]),n+=":",n+=ev(t[e[r]]);return n+="}",n},_A=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function gn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const yA=function(t){H(!gA(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let f="";for(l=0;l<64;l+=8){let m=parseInt(h.substr(l,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},rU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},iU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sU(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const oU=new RegExp("^-?(0*)\\d{1,10}$"),aU=-2147483648,lU=2147483647,kT=function(t){if(oU.test(t)){const e=Number(t);if(e>=aU&&e<=lU)return e}return null},Ku=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Sn("Exception was thrown by user callback.",n),e},Math.floor(0))}},uU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fl=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class cU{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class hU{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}zo.OWNER="owner";/**
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
 */const tv="5",vA="v",EA="s",wA="r",TA="f",IA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,SA="ls",CA="p",qg="ac",xA="websocket",AA="long_polling";/**
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
 */class RA{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_s.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_s.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dU(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kA(t,e,n){H(typeof e=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let r;if(e===xA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===AA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dU(t)&&(n.ns=t.namespace);const i=[];return gn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class fU{constructor(){this.counters_={}}incrementCounter(e,n=1){si(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return iM(this.counters_)}}/**
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
 */const cm={},hm={};function nv(t){const e=t.toString();return cm[e]||(cm[e]=new fU),cm[e]}function pU(t,e){const n=t.toString();return hm[n]||(hm[n]=e()),hm[n]}/**
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
 */class mU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ku(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const PT="start",gU="close",_U="pLPCommand",yU="pRTLPCB",PA="id",bA="pw",NA="ser",vU="cb",EU="seg",wU="ts",TU="d",IU="dframe",OA=1870,DA=30,SU=OA-DA,CU=25e3,xU=3e4;class Po{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gu(e),this.stats_=nv(n),this.urlFn=l=>(this.appCheckToken&&(l[qg]=this.appCheckToken),kA(n,AA,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new mU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xU)),tU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rv((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===PT)this.id=a,this.password=l;else if(o===gU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[PT]="t",r[NA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vU]=this.scriptTagHolder.uniqueCallbackIdentifier),r[vA]=tv,this.transportSessionId&&(r[EA]=this.transportSessionId),this.lastSessionId&&(r[SA]=this.lastSessionId),this.applicationId&&(r[CA]=this.applicationId),this.appCheckToken&&(r[qg]=this.appCheckToken),typeof location<"u"&&location.hostname&&IA.test(location.hostname)&&(r[wA]=TA);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Po.forceAllow_=!0}static forceDisallow(){Po.forceDisallow_=!0}static isAvailable(){return Po.forceAllow_?!0:!Po.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rU()&&!iU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=vx(n),i=_A(r,SU);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[IU]="t",r[PA]=e,r[bA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=J4(),window[_U+this.uniqueCallbackIdentifier]=e,window[yU+this.uniqueCallbackIdentifier]=n,this.myIFrame=rv.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Kt("frame writing exception"),a.stack&&Kt(a.stack),Kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[PA]=this.myID,e[bA]=this.myPW,e[NA]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+DA+r.length<=OA;){const o=this.pendingSegs.shift();r=r+"&"+EU+i+"="+o.seg+"&"+wU+i+"="+o.ts+"&"+TU+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(CU)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const AU=16384,RU=45e3;let Sd=null;typeof MozWebSocket<"u"?Sd=MozWebSocket:typeof WebSocket<"u"&&(Sd=WebSocket);class Gn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gu(this.connId),this.stats_=nv(n),this.connURL=Gn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[vA]=tv,typeof location<"u"&&location.hostname&&IA.test(location.hostname)&&(o[wA]=TA),n&&(o[EA]=n),r&&(o[SA]=r),i&&(o[qg]=i),s&&(o[CA]=s),kA(e,xA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_s.set("previous_websocket_failure",!0);try{let r;Cx(),this.mySock=new Sd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Gn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Sd!==null&&!Gn.forceDisallow_}static previouslyFailed(){return _s.isInMemoryStorage||_s.get("previous_websocket_failure")===!0}markConnectionHealthy(){_s.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=cu(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_A(n,AU);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Gn.responsesRequiredToBeHealthy=2;Gn.healthyTimeout=3e4;/**
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
 */class fu{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Po,Gn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Gn&&Gn.isAvailable();let r=n&&!Gn.previouslyFailed();if(e.webSocketOnly&&(n||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Gn];else{const i=this.transports_=[];for(const s of fu.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);fu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}fu.globalTransportInitialized_=!1;/**
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
 */const kU=6e4,PU=5e3,bU=10*1024,NU=100*1024,dm="t",bT="d",OU="s",NT="r",DU="e",OT="o",DT="a",LT="n",MT="p",LU="h";class MU{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gu("c:"+this.id+":"),this.transportManager_=new fu(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>NU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>bU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(dm in e){const n=e[dm];n===DT?this.upgradeIfSecondaryHealthy_():n===NT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===OT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=al("t",e),r=al("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:MT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:DT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:LT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=al("t",e),r=al("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=al(dm,e);if(bT in e){const r=e[bT];if(n===LU){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===LT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===OU?this.onConnectionShutdown_(r):n===NT?this.onReset_(r):n===DU?Hg("Server Error: "+r):n===OT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Hg("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tv!==r&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:MT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_s.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class LA{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class MA{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){H(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Cd extends MA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!By()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Cd}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const FT=32,VT=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new De("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qi(t){return t.pieces_.length-t.pieceNum_}function Fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function FA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function FU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function VA(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function UA(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function gt(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof De)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new De(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function dn(t,e){const n=fe(t),r=fe(e);if(n===null)return e;if(n===r)return dn(Fe(t),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iv(t,e){if(qi(t)!==qi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Kn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(qi(t)>qi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class VU{constructor(e,n){this.errorPrefix_=n,this.parts_=VA(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Cf(this.parts_[r]);jA(this)}}function UU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cf(e),jA(t)}function jU(t){const e=t.parts_.pop();t.byteLength_-=Cf(e),t.parts_.length>0&&(t.byteLength_-=1)}function jA(t){if(t.byteLength_>VT)throw new Error(t.errorPrefix_+"has a key path longer than "+VT+" bytes ("+t.byteLength_+").");if(t.parts_.length>FT)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+FT+") or object contains a cycle "+cs(t))}function cs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class sv extends MA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sv}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ll=1e3,$U=60*5*1e3,UT=30*1e3,zU=1.3,BU=3e4,WU="server_kill",jT=3;class qr extends LA{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=qr.nextPersistentConnectionId_++,this.log_=Gu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ll,this.maxReconnectDelay_=$U,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Cx())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Cd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Rt(s)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new $y,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;qr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&si(e,"w")){const r=sa(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||EM(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=UT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=vM(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Hg("Unrecognized action received from server: "+Rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ll,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ll,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BU&&(this.reconnectDelay_=ll),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*zU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+qr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(f){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new MU(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{Sn(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(WU)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Sn(f),l())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Dg(this.interruptReasons_)&&(this.reconnectDelay_=ll,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ev(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new De(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=jT&&(this.reconnectDelay_=UT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=jT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+fA.replace(/\./g,"-")]=1,By()?e["framework.cordova"]=1:Sx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Cd.getInstance().currentlyOnline();return Dg(this.interruptReasons_)&&e}}qr.nextPersistentConnectionId_=0;qr.nextConnectionId_=0;/**
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
 */class Nf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new he(aa,e),i=new he(aa,n);return this.compare(r,i)!==0}minPost(){return he.MIN}}/**
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
 */let Bc;class $A extends Nf{static get __EMPTY_NODE(){return Bc}static set __EMPTY_NODE(e){Bc=e}compare(e,n){return Pa(e.name,n.name)}isDefinedOn(e){throw Aa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Ds,Bc)}makePost(e,n){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,Bc)}toString(){return".key"}}const Bo=new $A;/**
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
 */let Wc=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},wn=class wl{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??wl.RED,this.left=i??pr.EMPTY_NODE,this.right=s??pr.EMPTY_NODE}copy(e,n,r,i,s){return new wl(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pr.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,wl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,wl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};wn.RED=!0;wn.BLACK=!1;class HU{copy(e,n,r,i,s){return this}insert(e,n,r){return new wn(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let pr=class Th{constructor(e,n=Th.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Th(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,wn.BLACK,null,null))}remove(e){return new Th(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,wn.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Wc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Wc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Wc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Wc(this.root_,null,this.comparator_,!0,e)}};pr.EMPTY_NODE=new HU;/**
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
 */function qU(t,e){return Pa(t.name,e.name)}function ov(t,e){return Pa(t,e)}/**
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
 */let Gg;function GU(t){Gg=t}const zA=function(t){return typeof t=="number"?"number:"+yA(t):"string:"+t},BA=function(t){if(t.isLeafNode()){const e=t.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&si(e,".sv"),"Priority must be a string or number.")}else H(t===Gg||t.isEmpty(),"priority of unexpected type.");H(t===Gg||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $T;class It{constructor(e,n=It.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),BA(this.priorityNode_)}static set __childrenNodeConstructor(e){$T=e}static get __childrenNodeConstructor(){return $T}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new It(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:fe(e)===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:It.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=fe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||qi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,It.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+zA(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=yA(this.value_):e+=this.value_,this.lazyHash_=mA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===It.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof It.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=It.VALUE_TYPE_ORDER.indexOf(n),s=It.VALUE_TYPE_ORDER.indexOf(r);return H(i>=0,"Unknown leaf type: "+n),H(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}It.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let WA,HA;function KU(t){WA=t}function QU(t){HA=t}class YU extends Nf{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Pa(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Ds,new It("[PRIORITY-POST]",HA))}makePost(e,n){const r=WA(e);return new he(n,new It("[PRIORITY-POST]",r))}toString(){return".priority"}}const nt=new YU;/**
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
 */const XU=Math.log(2);class JU{constructor(e){const n=s=>parseInt(Math.log(s)/XU,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xd=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let f,m;if(h===0)return null;if(h===1)return f=t[l],m=n?n(f):f,new wn(m,f.node,wn.BLACK,null,null);{const _=parseInt(h/2,10)+l,w=i(l,_),S=i(_+1,c);return f=t[_],m=n?n(f):f,new wn(m,f.node,wn.BLACK,w,S)}},s=function(l){let c=null,h=null,f=t.length;const m=function(w,S){const R=f-w,T=f;f-=w;const g=i(R+1,T),I=t[R],O=n?n(I):I;_(new wn(O,I.node,S,null,g))},_=function(w){c?(c.left=w,c=w):(h=w,c=w)};for(let w=0;w<l.count;++w){const S=l.nextBitIsOne(),R=Math.pow(2,l.count-(w+1));S?m(R,wn.BLACK):(m(R,wn.BLACK),m(R,wn.RED))}return h},o=new JU(t.length),a=s(o);return new pr(r||e,a)};/**
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
 */let fm;const uo={};class Br{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return H(uo&&nt,"ChildrenNode.ts has not been loaded"),fm=fm||new Br({".priority":uo},{".priority":nt}),fm}get(e){const n=sa(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pr?n:null}hasIndex(e){return si(this.indexSet_,e.toString())}addIndex(e,n){H(e!==Bo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(he.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=xd(r,e.getCompare()):a=uo;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Br(h,c)}addToIndexes(e,n){const r=gd(this.indexes_,(i,s)=>{const o=sa(this.indexSet_,s);if(H(o,"Missing index implementation for "+s),i===uo)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),xd(a,o.getCompare())}else return uo;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new Br(r,this.indexSet_)}removeFromIndexes(e,n){const r=gd(this.indexes_,i=>{if(i===uo)return i;{const s=n.get(e.name);return s?i.remove(new he(e.name,s)):i}});return new Br(r,this.indexSet_)}}/**
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
 */let ul;class oe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&BA(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ul||(ul=new oe(new pr(ov),null,Br.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ul}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ul:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(H(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new he(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ul:this.priorityNode_;return new oe(i,o,s)}}updateChild(e,n){const r=fe(e);if(r===null)return n;{H(fe(e)!==".priority"||qi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Fe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(nt,(o,a)=>{n[o]=a.val(e),r++,s&&oe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+zA(this.getPriority().val())+":"),this.forEachChild(nt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":mA(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new he(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qu?-1:0}withIndex(e){if(e===Bo||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Bo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(nt),i=n.getIterator(nt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Bo?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ZU extends oe{constructor(){super(new pr(ov),oe.EMPTY_NODE,Br.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const Qu=new ZU;Object.defineProperties(he,{MIN:{value:new he(aa,oe.EMPTY_NODE)},MAX:{value:new he(Ds,Qu)}});$A.__EMPTY_NODE=oe.EMPTY_NODE;It.__childrenNodeConstructor=oe;GU(Qu);QU(Qu);/**
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
 */const ej=!0;function Qt(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new It(n,Qt(e))}if(!(t instanceof Array)&&ej){const n=[];let r=!1;if(gn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Qt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return oe.EMPTY_NODE;const s=xd(n,qU,o=>o.name,ov);if(r){const o=xd(n,nt.getCompare());return new oe(s,Qt(e),new Br({".priority":o},{".priority":nt}))}else return new oe(s,Qt(e),Br.Default)}else{let n=oe.EMPTY_NODE;return gn(t,(r,i)=>{if(si(t,r)&&r.substring(0,1)!=="."){const s=Qt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Qt(e))}}KU(Qt);/**
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
 */class tj extends Nf{constructor(e){super(),this.indexPath_=e,H(!pe(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Pa(e.name,n.name):s}makePost(e,n){const r=Qt(e),i=oe.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(n,i)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,Qu);return new he(Ds,e)}toString(){return VA(this.indexPath_,0).join("/")}}/**
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
 */class nj extends Nf{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Pa(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const r=Qt(e);return new he(n,r)}toString(){return".value"}}const rj=new nj;/**
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
 */function qA(t){return{type:"value",snapshotNode:t}}function la(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function pu(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function mu(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function ij(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class av{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(pu(n,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(la(n,r)):o.trackChildChange(mu(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(nt,(i,s)=>{n.hasChild(i)||r.trackChildChange(pu(i,s))}),n.isLeafNode()||n.forEachChild(nt,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(mu(i,s,o))}else r.trackChildChange(la(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class gu{constructor(e){this.indexedFilter_=new av(e.getIndex()),this.index_=e.getIndex(),this.startPost_=gu.getStartPost_(e),this.endPost_=gu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new he(n,r))||(r=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=oe.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(oe.EMPTY_NODE);const s=this;return n.forEachChild(nt,(o,a)=>{s.matches(new he(o,a))||(i=i.updateImmediateChild(o,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class sj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new gu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new he(n,r))||(r=oe.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=oe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(oe.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,_)=>f(_,m)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const l=new he(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,c,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const _=m==null?1:o(m,l);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(mu(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(pu(n,f));const S=a.updateImmediateChild(n,oe.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(la(m.name,m.node)),S.updateImmediateChild(m.name,m.node)):S}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(pu(c.name,c.node)),s.trackChildChange(la(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,oe.EMPTY_NODE)):e}}/**
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
 */class lv{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=nt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:aa}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ds}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===nt}copy(){const e=new lv;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oj(t){return t.loadsAllData()?new av(t.getIndex()):t.hasLimit()?new sj(t):new gu(t)}function zT(t){const e={};if(t.isDefault())return e;let n;if(t.index_===nt?n="$priority":t.index_===rj?n="$value":t.index_===Bo?n="$key":(H(t.index_ instanceof tj,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function BT(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==nt&&(e.i=t.index_.toString()),e}/**
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
 */class Ad extends LA{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Gu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Ad.getListenId_(e,r),a={};this.listens_[o]=a;const l=zT(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let f=h;if(c===404&&(f=null,c=null),c===null&&this.onDataUpdate_(s,f,!1,r),sa(this.listens_,o)===a){let m;c?c===401?m="permission_denied":m="rest_error:"+c:m="ok",i(m,null)}})}unlisten(e,n){const r=Ad.getListenId_(e,n);delete this.listens_[r]}get(e){const n=zT(e._queryParams),r=e._path.toString(),i=new $y;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ra(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=cu(a.responseText)}catch{Sn("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Sn("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class aj{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Rd(){return{value:null,children:new Map}}function GA(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=fe(e);t.children.has(r)||t.children.set(r,Rd());const i=t.children.get(r);e=Fe(e),GA(i,e,n)}}function Kg(t,e,n){t.value!==null?n(e,t.value):lj(t,(r,i)=>{const s=new De(e.toString()+"/"+r);Kg(i,s,n)})}function lj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class uj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&gn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const WT=10*1e3,cj=30*1e3,hj=5*60*1e3;class dj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uj(e);const r=WT+(cj-WT)*Math.random();Fl(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;gn(e,(i,s)=>{s>0&&si(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*hj))}}/**
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
 */var Qn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Qn||(Qn={}));function KA(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function uv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class kd{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Qn.ACK_USER_WRITE,this.source=KA()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new kd(Ae(),n,this.revert)}}else return H(fe(this.path)===e,"operationForChild called for unrelated child."),new kd(Fe(this.path),this.affectedTree,this.revert)}}/**
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
 */class _u{constructor(e,n){this.source=e,this.path=n,this.type=Qn.LISTEN_COMPLETE}operationForChild(e){return pe(this.path)?new _u(this.source,Ae()):new _u(this.source,Fe(this.path))}}/**
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
 */class Ls{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Qn.OVERWRITE}operationForChild(e){return pe(this.path)?new Ls(this.source,Ae(),this.snap.getImmediateChild(e)):new Ls(this.source,Fe(this.path),this.snap)}}/**
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
 */class yu{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Qn.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new Ls(this.source,Ae(),n.value):new yu(this.source,Ae(),n)}else return H(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new yu(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ms{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class fj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pj(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ij(o.childName,o.snapshotNode))}),cl(t,i,"child_removed",e,r,n),cl(t,i,"child_added",e,r,n),cl(t,i,"child_moved",s,r,n),cl(t,i,"child_changed",e,r,n),cl(t,i,"value",e,r,n),i}function cl(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gj(t,a,l)),o.forEach(a=>{const l=mj(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function mj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gj(t,e,n){if(e.childName==null||n.childName==null)throw Aa("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Of(t,e){return{eventCache:t,serverCache:e}}function Vl(t,e,n,r){return Of(new Ms(e,n,r),t.serverCache)}function QA(t,e,n,r){return Of(t.eventCache,new Ms(e,n,r))}function Qg(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Fs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let pm;const _j=()=>(pm||(pm=new pr(nU)),pm);class We{constructor(e,n=_j()){this.value=e,this.children=n}static fromObject(e){let n=new We(null);return gn(e,(r,i)=>{n=n.set(new De(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(pe(e))return null;{const r=fe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Fe(e),n);return s!=null?{path:gt(new De(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=fe(e),r=this.children.get(n);return r!==null?r.subtree(Fe(e)):new We(null)}}set(e,n){if(pe(e))return new We(n,this.children);{const r=fe(e),s=(this.children.get(r)||new We(null)).set(Fe(e),n),o=this.children.insert(r,s);return new We(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new We(null):new We(null,this.children);{const n=fe(e),r=this.children.get(n);if(r){const i=r.remove(Fe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new We(null):new We(this.value,s)}else return this}}get(e){if(pe(e))return this.value;{const n=fe(e),r=this.children.get(n);return r?r.get(Fe(e)):null}}setTree(e,n){if(pe(e))return n;{const r=fe(e),s=(this.children.get(r)||new We(null)).setTree(Fe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new We(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(gt(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(pe(e))return null;{const s=fe(e),o=this.children.get(s);return o?o.findOnPath_(Fe(e),gt(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,r){if(pe(e))return this;{this.value&&r(n,this.value);const i=fe(e),s=this.children.get(i);return s?s.foreachOnPath_(Fe(e),gt(n,i),r):new We(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(gt(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class tr{constructor(e){this.writeTree_=e}static empty(){return new tr(new We(null))}}function Ul(t,e,n){if(pe(e))return new tr(new We(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=dn(i,e);return s=s.updateChild(o,n),new tr(t.writeTree_.set(i,s))}else{const i=new We(n),s=t.writeTree_.setTree(e,i);return new tr(s)}}}function HT(t,e,n){let r=t;return gn(n,(i,s)=>{r=Ul(r,gt(e,i),s)}),r}function qT(t,e){if(pe(e))return tr.empty();{const n=t.writeTree_.setTree(e,new We(null));return new tr(n)}}function Yg(t,e){return qs(t,e)!=null}function qs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(dn(n.path,e)):null}function GT(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(nt,(r,i)=>{e.push(new he(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new he(r,i.value))}),e}function $i(t,e){if(pe(e))return t;{const n=qs(t,e);return n!=null?new tr(new We(n)):new tr(t.writeTree_.subtree(e))}}function Xg(t){return t.writeTree_.isEmpty()}function ua(t,e){return YA(Ae(),t.writeTree_,e)}function YA(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(H(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=YA(gt(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(gt(t,".priority"),r)),n}}/**
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
 */function hv(t,e){return eR(e,t)}function yj(t,e,n,r,i){H(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ul(t.visibleWrites,e,n)),t.lastWriteId=r}function vj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Ej(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);H(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&wj(a,r.path)?i=!1:Kn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Tj(t),!0;if(r.snap)t.visibleWrites=qT(t.visibleWrites,r.path);else{const a=r.children;gn(a,l=>{t.visibleWrites=qT(t.visibleWrites,gt(r.path,l))})}return!0}else return!1}function wj(t,e){if(t.snap)return Kn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Kn(gt(t.path,n),e))return!0;return!1}function Tj(t){t.visibleWrites=XA(t.allWrites,Ij,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ij(t){return t.visible}function XA(t,e,n){let r=tr.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Kn(n,o)?(a=dn(n,o),r=Ul(r,a,s.snap)):Kn(o,n)&&(a=dn(o,n),r=Ul(r,Ae(),s.snap.getChild(a)));else if(s.children){if(Kn(n,o))a=dn(n,o),r=HT(r,a,s.children);else if(Kn(o,n))if(a=dn(o,n),pe(a))r=HT(r,Ae(),s.children);else{const l=sa(s.children,fe(a));if(l){const c=l.getChild(Fe(a));r=Ul(r,Ae(),c)}}}else throw Aa("WriteRecord should have .snap or .children")}}return r}function JA(t,e,n,r,i){if(!r&&!i){const s=qs(t.visibleWrites,e);if(s!=null)return s;{const o=$i(t.visibleWrites,e);if(Xg(o))return n;if(n==null&&!Yg(o,Ae()))return null;{const a=n||oe.EMPTY_NODE;return ua(o,a)}}}else{const s=$i(t.visibleWrites,e);if(!i&&Xg(s))return n;if(!i&&n==null&&!Yg(s,Ae()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Kn(c.path,e)||Kn(e,c.path))},a=XA(t.allWrites,o,e),l=n||oe.EMPTY_NODE;return ua(a,l)}}}function Sj(t,e,n){let r=oe.EMPTY_NODE;const i=qs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(nt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=$i(t.visibleWrites,e);return n.forEachChild(nt,(o,a)=>{const l=ua($i(s,new De(o)),a);r=r.updateImmediateChild(o,l)}),GT(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=$i(t.visibleWrites,e);return GT(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Cj(t,e,n,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=gt(e,n);if(Yg(t.visibleWrites,s))return null;{const o=$i(t.visibleWrites,s);return Xg(o)?i.getChild(n):ua(o,i.getChild(n))}}function xj(t,e,n,r){const i=gt(e,n),s=qs(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=$i(t.visibleWrites,i);return ua(o,r.getNode().getImmediateChild(n))}else return null}function Aj(t,e){return qs(t.visibleWrites,e)}function Rj(t,e,n,r,i,s,o){let a;const l=$i(t.visibleWrites,e),c=qs(l,Ae());if(c!=null)a=c;else if(n!=null)a=ua(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=m.getNext();for(;_&&h.length<i;)f(_,r)!==0&&h.push(_),_=m.getNext();return h}else return[]}function kj(){return{visibleWrites:tr.empty(),allWrites:[],lastWriteId:-1}}function Pd(t,e,n,r){return JA(t.writeTree,t.treePath,e,n,r)}function dv(t,e){return Sj(t.writeTree,t.treePath,e)}function KT(t,e,n,r){return Cj(t.writeTree,t.treePath,e,n,r)}function bd(t,e){return Aj(t.writeTree,gt(t.treePath,e))}function Pj(t,e,n,r,i,s){return Rj(t.writeTree,t.treePath,e,n,r,i,s)}function fv(t,e,n){return xj(t.writeTree,t.treePath,e,n)}function ZA(t,e){return eR(gt(t.treePath,e),t.writeTree)}function eR(t,e){return{treePath:t,writeTree:e}}/**
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
 */class bj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,mu(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,pu(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,la(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,mu(r,e.snapshotNode,i.oldSnap));else throw Aa("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Nj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const tR=new Nj;class pv{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Ms(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Fs(this.viewCache_),s=Pj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function Oj(t){return{filter:t}}function Dj(t,e){H(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Lj(t,e,n,r,i){const s=new bj;let o,a;if(n.type===Qn.OVERWRITE){const c=n;c.source.fromUser?o=Jg(t,e,c.path,c.snap,r,i,s):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Nd(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Qn.MERGE){const c=n;c.source.fromUser?o=Fj(t,e,c.path,c.children,r,i,s):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Zg(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Qn.ACK_USER_WRITE){const c=n;c.revert?o=jj(t,e,c.path,r,i,s):o=Vj(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Qn.LISTEN_COMPLETE)o=Uj(t,e,n.path,r,s);else throw Aa("Unknown operation type: "+n.type);const l=s.getChanges();return Mj(e,o,l),{viewCache:o,changes:l}}function Mj(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Qg(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(qA(Qg(e)))}}function nR(t,e,n,r,i,s){const o=e.eventCache;if(bd(r,n)!=null)return e;{let a,l;if(pe(n))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Fs(e),h=c instanceof oe?c:oe.EMPTY_NODE,f=dv(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const c=Pd(r,Fs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=fe(n);if(c===".priority"){H(qi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=KT(r,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=Fe(n);let f;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const m=KT(r,n,o.getNode(),l);m!=null?f=o.getNode().getImmediateChild(c).updateChild(h,m):f=o.getNode().getImmediateChild(c)}else f=fv(r,c,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),c,f,h,i,s):a=o.getNode()}}return Vl(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function Nd(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),_,null)}else{const _=fe(n);if(!l.isCompleteForPath(n)&&qi(n)>1)return e;const w=Fe(n),R=l.getNode().getImmediateChild(_).updateChild(w,r);_===".priority"?c=h.updatePriority(l.getNode(),R):c=h.updateChild(l.getNode(),_,R,w,tR,null)}const f=QA(e,c,l.isFullyInitialized()||pe(n),h.filtersNodes()),m=new pv(i,f,s);return nR(t,f,n,i,m,a)}function Jg(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new pv(i,e,s);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Vl(e,c,!0,t.filter.filtersNodes());else{const f=fe(n);if(f===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Vl(e,c,a.isFullyInitialized(),a.isFiltered());else{const m=Fe(n),_=a.getNode().getImmediateChild(f);let w;if(pe(m))w=r;else{const S=h.getCompleteChild(f);S!=null?FA(m)===".priority"&&S.getChild(UA(m)).isEmpty()?w=S:w=S.updateChild(m,r):w=oe.EMPTY_NODE}if(_.equals(w))l=e;else{const S=t.filter.updateChild(a.getNode(),f,w,m,h,o);l=Vl(e,S,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function QT(t,e){return t.eventCache.isCompleteForChild(e)}function Fj(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=gt(n,l);QT(e,fe(h))&&(a=Jg(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=gt(n,l);QT(e,fe(h))||(a=Jg(t,a,h,c,i,s,o))}),a}function YT(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Zg(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=r:c=new We(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((f,m)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),w=YT(t,_,m);l=Nd(t,l,new De(f),w,i,s,o,a)}}),c.children.inorderTraversal((f,m)=>{const _=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!h.hasChild(f)&&!_){const w=e.serverCache.getNode().getImmediateChild(f),S=YT(t,w,m);l=Nd(t,l,new De(f),S,i,s,o,a)}}),l}function Vj(t,e,n,r,i,s,o){if(bd(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Nd(t,e,n,l.getNode().getChild(n),i,s,a,o);if(pe(n)){let c=new We(null);return l.getNode().forEachChild(Bo,(h,f)=>{c=c.set(new De(h),f)}),Zg(t,e,n,c,i,s,a,o)}else return e}else{let c=new We(null);return r.foreach((h,f)=>{const m=gt(n,h);l.isCompleteForPath(m)&&(c=c.set(h,l.getNode().getChild(m)))}),Zg(t,e,n,c,i,s,a,o)}}function Uj(t,e,n,r,i){const s=e.serverCache,o=QA(e,s.getNode(),s.isFullyInitialized()||pe(n),s.isFiltered());return nR(t,o,n,r,tR,i)}function jj(t,e,n,r,i,s){let o;if(bd(r,n)!=null)return e;{const a=new pv(r,e,i),l=e.eventCache.getNode();let c;if(pe(n)||fe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Pd(r,Fs(e));else{const f=e.serverCache.getNode();H(f instanceof oe,"serverChildren would be complete if leaf node"),h=dv(r,f)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=fe(n);let f=fv(r,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?c=t.filter.updateChild(l,h,f,Fe(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,oe.EMPTY_NODE,Fe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pd(r,Fs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||bd(r,Ae())!=null,Vl(e,c,o,t.filter.filtersNodes())}}/**
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
 */class $j{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new av(r.getIndex()),s=oj(r);this.processor_=Oj(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(oe.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(oe.EMPTY_NODE,a.getNode(),null),h=new Ms(l,o.isFullyInitialized(),i.filtersNodes()),f=new Ms(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Of(f,h),this.eventGenerator_=new fj(this.query_)}get query(){return this.query_}}function zj(t){return t.viewCache_.serverCache.getNode()}function Bj(t,e){const n=Fs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function XT(t){return t.eventRegistrations_.length===0}function Wj(t,e){t.eventRegistrations_.push(e)}function JT(t,e,n){const r=[];if(n){H(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ZT(t,e,n,r){e.type===Qn.MERGE&&e.source.queryId!==null&&(H(Fs(t.viewCache_),"We should always have a full cache before handling merges"),H(Qg(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Lj(t.processor_,i,e,n,r);return Dj(t.processor_,s.viewCache),H(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,rR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function Hj(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(nt,(s,o)=>{r.push(la(s,o))}),n.isFullyInitialized()&&r.push(qA(n.getNode())),rR(t,r,n.getNode(),e)}function rR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return pj(t.eventGenerator_,e,n,i)}/**
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
 */let Od;class qj{constructor(){this.views=new Map}}function Gj(t){H(!Od,"__referenceConstructor has already been defined"),Od=t}function Kj(){return H(Od,"Reference.ts has not been loaded"),Od}function Qj(t){return t.views.size===0}function mv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return H(s!=null,"SyncTree gave us an op for an invalid query."),ZT(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ZT(o,e,n,r));return s}}function Yj(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Pd(n,i?r:null),l=!1;a?l=!0:r instanceof oe?(a=dv(n,r),l=!1):(a=oe.EMPTY_NODE,l=!1);const c=Of(new Ms(a,l,!1),new Ms(r,i,!1));return new $j(e,c)}return o}function Xj(t,e,n,r,i,s){const o=Yj(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Wj(o,n),Hj(o,n)}function Jj(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Gi(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(JT(c,n,r)),XT(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(JT(l,n,r)),XT(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Gi(t)&&s.push(new(Kj())(e._repo,e._path)),{removed:s,events:o}}function iR(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Wo(t,e){let n=null;for(const r of t.views.values())n=n||Bj(r,e);return n}function sR(t,e){if(e._queryParams.loadsAllData())return Df(t);{const r=e._queryIdentifier;return t.views.get(r)}}function oR(t,e){return sR(t,e)!=null}function Gi(t){return Df(t)!=null}function Df(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Dd;function Zj(t){H(!Dd,"__referenceConstructor has already been defined"),Dd=t}function e3(){return H(Dd,"Reference.ts has not been loaded"),Dd}let t3=1;class e1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new We(null),this.pendingWriteTree_=kj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function n3(t,e,n,r,i){return yj(t.pendingWriteTree_,e,n,r,i),i?Yu(t,new Ls(KA(),e,n)):[]}function bo(t,e,n=!1){const r=vj(t.pendingWriteTree_,e);if(Ej(t.pendingWriteTree_,e)){let s=new We(null);return r.snap!=null?s=s.set(Ae(),!0):gn(r.children,o=>{s=s.set(new De(o),!0)}),Yu(t,new kd(r.path,s,n))}else return[]}function Lf(t,e,n){return Yu(t,new Ls(uv(),e,n))}function r3(t,e,n){const r=We.fromObject(n);return Yu(t,new yu(uv(),e,r))}function i3(t,e){return Yu(t,new _u(uv(),e))}function s3(t,e,n){const r=gv(t,n);if(r){const i=_v(r),s=i.path,o=i.queryId,a=dn(s,e),l=new _u(cv(o),a);return yv(t,s,l)}else return[]}function e_(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||oR(o,e))){const l=Jj(o,e,n,r);Qj(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,_)=>Gi(_));if(h&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const _=l3(m);for(let w=0;w<_.length;++w){const S=_[w],R=S.query,T=cR(t,S);t.listenProvider_.startListening(jl(R),Ld(t,R),T.hashFn,T.onComplete)}}}!f&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(jl(e),null):c.forEach(m=>{const _=t.queryToTagMap.get(Mf(m));t.listenProvider_.stopListening(jl(m),_)}))}u3(t,c)}return a}function o3(t,e,n,r){const i=gv(t,r);if(i!=null){const s=_v(i),o=s.path,a=s.queryId,l=dn(o,e),c=new Ls(cv(a),l,n);return yv(t,o,c)}else return[]}function a3(t,e,n,r){const i=gv(t,r);if(i){const s=_v(i),o=s.path,a=s.queryId,l=dn(o,e),c=We.fromObject(n),h=new yu(cv(a),l,c);return yv(t,o,h)}else return[]}function t1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,_)=>{const w=dn(m,i);s=s||Wo(_,w),o=o||Gi(_)});let a=t.syncPointTree_.get(i);a?(o=o||Gi(a),s=s||Wo(a,Ae())):(a=new qj,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=oe.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,w)=>{const S=Wo(w,Ae());S&&(s=s.updateImmediateChild(_,S))}));const c=oR(a,e);if(!c&&!e._queryParams.loadsAllData()){const m=Mf(e);H(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const _=c3();t.queryToTagMap.set(m,_),t.tagToQueryMap.set(_,m)}const h=hv(t.pendingWriteTree_,i);let f=Xj(a,e,n,h,s,l);if(!c&&!o&&!r){const m=sR(a,e);f=f.concat(h3(t,e,m))}return f}function aR(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=dn(o,e),c=Wo(a,l);if(c)return c});return JA(i,e,s,n,!0)}function Yu(t,e){return lR(e,t.syncPointTree_,null,hv(t.pendingWriteTree_,Ae()))}function lR(t,e,n,r){if(pe(t.path))return uR(t,e,n,r);{const i=e.get(Ae());n==null&&i!=null&&(n=Wo(i,Ae()));let s=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=ZA(r,o);s=s.concat(lR(a,l,c,h))}return i&&(s=s.concat(mv(i,t,r,n))),s}}function uR(t,e,n,r){const i=e.get(Ae());n==null&&i!=null&&(n=Wo(i,Ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ZA(r,o),h=t.operationForChild(o);h&&(s=s.concat(uR(h,a,l,c)))}),i&&(s=s.concat(mv(i,t,r,n))),s}function cR(t,e){const n=e.query,r=Ld(t,n);return{hashFn:()=>(zj(e)||oe.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?s3(t,n._path,r):i3(t,n._path);{const s=sU(i,n);return e_(t,n,null,s)}}}}function Ld(t,e){const n=Mf(e);return t.queryToTagMap.get(n)}function Mf(t){return t._path.toString()+"$"+t._queryIdentifier}function gv(t,e){return t.tagToQueryMap.get(e)}function _v(t){const e=t.indexOf("$");return H(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function yv(t,e,n){const r=t.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const i=hv(t.pendingWriteTree_,e);return mv(r,n,i,null)}function l3(t){return t.fold((e,n,r)=>{if(n&&Gi(n))return[Df(n)];{let i=[];return n&&(i=iR(n)),gn(r,(s,o)=>{i=i.concat(o)}),i}})}function jl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(e3())(t._repo,t._path):t}function u3(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Mf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function c3(){return t3++}function h3(t,e,n){const r=e._path,i=Ld(t,e),s=cR(t,n),o=t.listenProvider_.startListening(jl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)H(!Gi(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,f)=>{if(!pe(c)&&h&&Gi(h))return[Df(h).query];{let m=[];return h&&(m=m.concat(iR(h).map(_=>_.query))),gn(f,(_,w)=>{m=m.concat(w)}),m}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(jl(h),Ld(t,h))}}return o}/**
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
 */class vv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vv(n)}node(){return this.node_}}class Ev{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=gt(this.path_,e);return new Ev(this.syncTree_,n)}node(){return aR(this.syncTree_,this.path_)}}const d3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},n1=function(t,e,n){if(!t||typeof t!="object")return t;if(H(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return f3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return p3(t[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},f3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+t)}},p3=function(t,e,n){t.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const i=e.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},m3=function(t,e,n,r){return wv(e,new Ev(n,t),r)},g3=function(t,e,n){return wv(t,new vv(e),n)};function wv(t,e,n){const r=t.getPriority().val(),i=n1(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=n1(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new It(a,Qt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new It(i))),o.forEachChild(nt,(a,l)=>{const c=wv(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class Tv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Iv(t,e){let n=e instanceof De?e:new De(e),r=t,i=fe(n);for(;i!==null;){const s=sa(r.node.children,i)||{children:{},childCount:0};r=new Tv(i,r,s),n=Fe(n),i=fe(n)}return r}function ba(t){return t.node.value}function hR(t,e){t.node.value=e,t_(t)}function dR(t){return t.node.childCount>0}function _3(t){return ba(t)===void 0&&!dR(t)}function Ff(t,e){gn(t.node.children,(n,r)=>{e(new Tv(n,t,r))})}function fR(t,e,n,r){n&&!r&&e(t),Ff(t,i=>{fR(i,e,!0,r)}),n&&r&&e(t)}function y3(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Xu(t){return new De(t.parent===null?t.name:Xu(t.parent)+"/"+t.name)}function t_(t){t.parent!==null&&v3(t.parent,t.name,t)}function v3(t,e,n){const r=_3(n),i=si(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,t_(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,t_(t))}/**
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
 */const E3=/[\[\].#$\/\u0000-\u001F\u007F]/,w3=/[\[\].#$\u0000-\u001F\u007F]/,mm=10*1024*1024,pR=function(t){return typeof t=="string"&&t.length!==0&&!E3.test(t)},mR=function(t){return typeof t=="string"&&t.length!==0&&!w3.test(t)},T3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),mR(t)},gR=function(t,e,n){const r=n instanceof De?new VU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+cs(r));if(typeof e=="function")throw new Error(t+"contains a function "+cs(r)+" with contents = "+e.toString());if(gA(e))throw new Error(t+"contains "+e.toString()+" "+cs(r));if(typeof e=="string"&&e.length>mm/3&&Cf(e)>mm)throw new Error(t+"contains a string greater than "+mm+" utf8 bytes "+cs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(gn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!pR(o)))throw new Error(t+" contains an invalid key ("+o+") "+cs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);UU(r,o),gR(t,a,r),jU(r)}),i&&s)throw new Error(t+' contains ".value" child '+cs(r)+" in addition to actual children.")}},_R=function(t,e,n,r){if(!(r&&n===void 0)&&!mR(n))throw new Error(Ax(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},I3=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_R(t,e,n,r)},S3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!T3(n))throw new Error(Ax(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class C3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yR(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!iv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function vR(t,e,n){yR(t,n),ER(t,r=>iv(r,e))}function Gs(t,e,n){yR(t,n),ER(t,r=>Kn(r,e)||Kn(e,r))}function ER(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(x3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function x3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ss&&Kt("event: "+n.toString()),Ku(r)}}}/**
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
 */const A3="repo_interrupt",R3=25;class k3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new C3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Rd(),this.transactionQueueTree_=new Tv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function P3(t,e,n){if(t.stats_=nv(t.repoInfo_),t.forceRestClient_||uU())t.server_=new Ad(t.repoInfo_,(r,i,s,o)=>{r1(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>i1(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new qr(t.repoInfo_,e,(r,i,s,o)=>{r1(t,r,i,s,o)},r=>{i1(t,r)},r=>{N3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=pU(t.repoInfo_,()=>new dj(t.stats_,t.server_)),t.infoData_=new aj,t.infoSyncTree_=new e1({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Lf(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sv(t,"connected",!1),t.serverSyncTree_=new e1({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Gs(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function b3(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function wR(t){return d3({timestamp:b3(t)})}function r1(t,e,n,r,i){t.dataUpdateCount++;const s=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=gd(n,c=>Qt(c));o=a3(t.serverSyncTree_,s,l,i)}else{const l=Qt(n);o=o3(t.serverSyncTree_,s,l,i)}else if(r){const l=gd(n,c=>Qt(c));o=r3(t.serverSyncTree_,s,l)}else{const l=Qt(n);o=Lf(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=xv(t,s)),Gs(t.eventQueue_,a,o)}function i1(t,e){Sv(t,"connected",e),e===!1&&D3(t)}function N3(t,e){gn(e,(n,r)=>{Sv(t,n,r)})}function Sv(t,e,n){const r=new De("/.info/"+e),i=Qt(n);t.infoData_.updateSnapshot(r,i);const s=Lf(t.infoSyncTree_,r,i);Gs(t.eventQueue_,r,s)}function O3(t){return t.nextWriteId_++}function D3(t){TR(t,"onDisconnectEvents");const e=wR(t),n=Rd();Kg(t.onDisconnect_,Ae(),(i,s)=>{const o=m3(i,s,t.serverSyncTree_,e);GA(n,i,o)});let r=[];Kg(n,Ae(),(i,s)=>{r=r.concat(Lf(t.serverSyncTree_,i,s));const o=U3(t,i);xv(t,o)}),t.onDisconnect_=Rd(),Gs(t.eventQueue_,Ae(),r)}function L3(t,e,n){let r;fe(e._path)===".info"?r=t1(t.infoSyncTree_,e,n):r=t1(t.serverSyncTree_,e,n),vR(t.eventQueue_,e._path,r)}function s1(t,e,n){let r;fe(e._path)===".info"?r=e_(t.infoSyncTree_,e,n):r=e_(t.serverSyncTree_,e,n),vR(t.eventQueue_,e._path,r)}function M3(t){t.persistentConnection_&&t.persistentConnection_.interrupt(A3)}function TR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Kt(n,...e)}function IR(t,e,n){return aR(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function Cv(t,e=t.transactionQueueTree_){if(e||Vf(t,e),ba(e)){const n=CR(t,e);H(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&F3(t,Xu(e),n)}else dR(e)&&Ff(e,n=>{Cv(t,n)})}function F3(t,e,n){const r=n.map(c=>c.currentWriteId),i=IR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];H(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=dn(e,h.path);s=s.updateChild(f,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{TR(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,h=h.concat(bo(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Vf(t,Iv(t.transactionQueueTree_,e)),Cv(t,t.transactionQueueTree_),Gs(t.eventQueue_,e,h);for(let m=0;m<f.length;m++)Ku(f[m])}else{if(c==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Sn("transaction at "+l.toString()+" failed: "+c);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=c}xv(t,e)}},o)}function xv(t,e){const n=SR(t,e),r=Xu(n),i=CR(t,n);return V3(t,i,r),r}function V3(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=dn(n,l.path);let h=!1,f;if(H(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,i=i.concat(bo(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=R3)h=!0,f="maxretry",i=i.concat(bo(t.serverSyncTree_,l.currentWriteId,!0));else{const m=IR(t,l.path,o);l.currentInputSnapshot=m;const _=e[a].update(m.val());if(_!==void 0){gR("transaction failed: Data returned ",_,l.path);let w=Qt(_);typeof _=="object"&&_!=null&&si(_,".priority")||(w=w.updatePriority(m.getPriority()));const R=l.currentWriteId,T=wR(t),g=g3(w,m,T);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=g,l.currentWriteId=O3(t),o.splice(o.indexOf(R),1),i=i.concat(n3(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(bo(t.serverSyncTree_,R,!0))}else h=!0,f="nodata",i=i.concat(bo(t.serverSyncTree_,l.currentWriteId,!0))}Gs(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Vf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ku(r[a]);Cv(t,t.transactionQueueTree_)}function SR(t,e){let n,r=t.transactionQueueTree_;for(n=fe(e);n!==null&&ba(r)===void 0;)r=Iv(r,n),e=Fe(e),n=fe(e);return r}function CR(t,e){const n=[];return xR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function xR(t,e,n){const r=ba(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Ff(e,i=>{xR(t,i,n)})}function Vf(t,e){const n=ba(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,hR(e,n.length>0?n:void 0)}Ff(e,r=>{Vf(t,r)})}function U3(t,e){const n=Xu(SR(t,e)),r=Iv(t.transactionQueueTree_,e);return y3(r,i=>{gm(t,i)}),gm(t,r),fR(r,i=>{gm(t,i)}),n}function gm(t,e){const n=ba(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(H(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(H(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(bo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?hR(e,void 0):n.length=s+1,Gs(t.eventQueue_,Xu(e),i);for(let o=0;o<r.length;o++)Ku(r[o])}}/**
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
 */function j3(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $3(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Sn(`Invalid query segment '${n}' in query '${t}'`)}return e}const o1=function(t,e){const n=z3(t),r=n.namespace;n.domain==="firebase.com"&&ei(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ei("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||eU();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new RA(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new De(n.pathString)}},z3=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(i=j3(t.substring(h,f)));const m=$3(t.substring(Math.min(t.length,f)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),n=e.substring(w+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class AR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Rt(this.snapshot.exportVal())}}class RR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class B3{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Av{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return pe(this._path)?null:FA(this._path)}get ref(){return new ai(this._repo,this._path)}get _queryIdentifier(){const e=BT(this._queryParams),n=ev(e);return n==="{}"?"default":n}get _queryObject(){return BT(this._queryParams)}isEqual(e){if(e=wt(e),!(e instanceof Av))return!1;const n=this._repo===e._repo,r=iv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+FU(this._path)}}class ai extends Av{constructor(e,n){super(e,n,new lv,!1)}get parent(){const e=UA(this._path);return e===null?null:new ai(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class vu{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new De(e),r=Md(this.ref,e);return new vu(this._node.getChild(n),r,nt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new vu(i,Md(this.ref,r),nt)))}hasChild(e){const n=new De(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function W3(t,e){return t=wt(t),t._checkNotDeleted("ref"),e!==void 0?Md(t._root,e):t._root}function Md(t,e){return t=wt(t),fe(t._path)===null?I3("child","path",e,!1):_R("child","path",e,!1),new ai(t._repo,gt(t._path,e))}class Rv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new AR("value",this,new vu(e.snapshotNode,new ai(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RR(this,e,n):null}matches(e){return e instanceof Rv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class kv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new RR(this,e,n):null}createEvent(e,n){H(e.childName!=null,"Child events should have a childName.");const r=Md(new ai(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new AR(e.type,this,new vu(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof kv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function H3(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,f)=>{s1(t._repo,t,a),l(h,f)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new B3(n,s||void 0),a=e==="value"?new Rv(o):new kv(e,o);return L3(t._repo,t,a),()=>s1(t._repo,t,a)}function q3(t,e,n,r){return H3(t,"value",e,n,r)}Gj(ai);Zj(ai);/**
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
 */const G3="FIREBASE_DATABASE_EMULATOR_HOST",n_={};let K3=!1;function Q3(t,e,n,r){t.repoInfo_=new RA(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function Y3(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ei("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=o1(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[G3]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=o1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new zo(zo.OWNER):new hU(t.name,t.options,e);S3("Invalid Firebase Database URL",o),pe(o.path)||ei("Database URL must point to the root of a Firebase Database (not including a child path).");const f=J3(a,t,h,new cU(t.name,n));return new Z3(f,t)}function X3(t,e){const n=n_[e];(!n||n[t.key]!==t)&&ei(`Database ${e}(${t.repoInfo_}) has already been deleted.`),M3(t),delete n[t.key]}function J3(t,e,n,r){let i=n_[e.name];i||(i={},n_[e.name]=i);let s=i[t.toURLString()];return s&&ei("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new k3(t,K3,n,r),i[t.toURLString()]=s,s}class Z3{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(P3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ai(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(X3(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ei("Cannot call "+e+" on a deleted database.")}}function e$(t=Af(),e){const n=$u(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=jy("database");r&&t$(n,...r)}return n}function t$(t,e,n,r={}){t=wt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ei("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ei('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new zo(zo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:zy(r.mockUserToken,t.app.options.projectId);s=new zo(o)}Q3(i,e,n,s)}/**
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
 */function n$(t){Q4(es),Hi(new Jr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return Y3(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ln(xT,AT,t),Ln(xT,AT,"esm2017")}qr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};qr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};n$();var a1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,kR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function C(){}C.prototype=E.prototype,v.D=E.prototype,v.prototype=new C,v.prototype.constructor=v,v.C=function(A,k,b){for(var x=Array(arguments.length-2),de=2;de<arguments.length;de++)x[de-2]=arguments[de];return E.prototype[k].apply(A,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,E,C){C||(C=0);var A=Array(16);if(typeof E=="string")for(var k=0;16>k;++k)A[k]=E.charCodeAt(C++)|E.charCodeAt(C++)<<8|E.charCodeAt(C++)<<16|E.charCodeAt(C++)<<24;else for(k=0;16>k;++k)A[k]=E[C++]|E[C++]<<8|E[C++]<<16|E[C++]<<24;E=v.g[0],C=v.g[1],k=v.g[2];var b=v.g[3],x=E+(b^C&(k^b))+A[0]+3614090360&4294967295;E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[1]+3905402710&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[2]+606105819&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[3]+3250441966&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(b^C&(k^b))+A[4]+4118548399&4294967295,E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[5]+1200080426&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[6]+2821735955&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[7]+4249261313&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(b^C&(k^b))+A[8]+1770035416&4294967295,E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[9]+2336552879&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[10]+4294925233&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[11]+2304563134&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(b^C&(k^b))+A[12]+1804603682&4294967295,E=C+(x<<7&4294967295|x>>>25),x=b+(k^E&(C^k))+A[13]+4254626195&4294967295,b=E+(x<<12&4294967295|x>>>20),x=k+(C^b&(E^C))+A[14]+2792965006&4294967295,k=b+(x<<17&4294967295|x>>>15),x=C+(E^k&(b^E))+A[15]+1236535329&4294967295,C=k+(x<<22&4294967295|x>>>10),x=E+(k^b&(C^k))+A[1]+4129170786&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[6]+3225465664&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[11]+643717713&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[0]+3921069994&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(k^b&(C^k))+A[5]+3593408605&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[10]+38016083&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[15]+3634488961&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[4]+3889429448&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(k^b&(C^k))+A[9]+568446438&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[14]+3275163606&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[3]+4107603335&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[8]+1163531501&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(k^b&(C^k))+A[13]+2850285829&4294967295,E=C+(x<<5&4294967295|x>>>27),x=b+(C^k&(E^C))+A[2]+4243563512&4294967295,b=E+(x<<9&4294967295|x>>>23),x=k+(E^C&(b^E))+A[7]+1735328473&4294967295,k=b+(x<<14&4294967295|x>>>18),x=C+(b^E&(k^b))+A[12]+2368359562&4294967295,C=k+(x<<20&4294967295|x>>>12),x=E+(C^k^b)+A[5]+4294588738&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[8]+2272392833&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[11]+1839030562&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[14]+4259657740&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(C^k^b)+A[1]+2763975236&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[4]+1272893353&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[7]+4139469664&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[10]+3200236656&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(C^k^b)+A[13]+681279174&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[0]+3936430074&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[3]+3572445317&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[6]+76029189&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(C^k^b)+A[9]+3654602809&4294967295,E=C+(x<<4&4294967295|x>>>28),x=b+(E^C^k)+A[12]+3873151461&4294967295,b=E+(x<<11&4294967295|x>>>21),x=k+(b^E^C)+A[15]+530742520&4294967295,k=b+(x<<16&4294967295|x>>>16),x=C+(k^b^E)+A[2]+3299628645&4294967295,C=k+(x<<23&4294967295|x>>>9),x=E+(k^(C|~b))+A[0]+4096336452&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[7]+1126891415&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[14]+2878612391&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[5]+4237533241&4294967295,C=k+(x<<21&4294967295|x>>>11),x=E+(k^(C|~b))+A[12]+1700485571&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[3]+2399980690&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[10]+4293915773&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[1]+2240044497&4294967295,C=k+(x<<21&4294967295|x>>>11),x=E+(k^(C|~b))+A[8]+1873313359&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[15]+4264355552&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[6]+2734768916&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[13]+1309151649&4294967295,C=k+(x<<21&4294967295|x>>>11),x=E+(k^(C|~b))+A[4]+4149444226&4294967295,E=C+(x<<6&4294967295|x>>>26),x=b+(C^(E|~k))+A[11]+3174756917&4294967295,b=E+(x<<10&4294967295|x>>>22),x=k+(E^(b|~C))+A[2]+718787259&4294967295,k=b+(x<<15&4294967295|x>>>17),x=C+(b^(k|~E))+A[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(k+(x<<21&4294967295|x>>>11))&4294967295,v.g[2]=v.g[2]+k&4294967295,v.g[3]=v.g[3]+b&4294967295}r.prototype.u=function(v,E){E===void 0&&(E=v.length);for(var C=E-this.blockSize,A=this.B,k=this.h,b=0;b<E;){if(k==0)for(;b<=C;)i(this,v,b),b+=this.blockSize;if(typeof v=="string"){for(;b<E;)if(A[k++]=v.charCodeAt(b++),k==this.blockSize){i(this,A),k=0;break}}else for(;b<E;)if(A[k++]=v[b++],k==this.blockSize){i(this,A),k=0;break}}this.h=k,this.o+=E},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;var C=8*this.o;for(E=v.length-8;E<v.length;++E)v[E]=C&255,C/=256;for(this.u(v),v=Array(16),E=C=0;4>E;++E)for(var A=0;32>A;A+=8)v[C++]=this.g[E]>>>A&255;return v};function s(v,E){var C=a;return Object.prototype.hasOwnProperty.call(C,v)?C[v]:C[v]=E(v)}function o(v,E){this.h=E;for(var C=[],A=!0,k=v.length-1;0<=k;k--){var b=v[k]|0;A&&b==E||(C[k]=b,A=!1)}this.g=C}var a={};function l(v){return-128<=v&&128>v?s(v,function(E){return new o([E|0],0>E?-1:0)}):new o([v|0],0>v?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return f;if(0>v)return R(c(-v));for(var E=[],C=1,A=0;v>=C;A++)E[A]=v/C|0,C*=4294967296;return new o(E,0)}function h(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return R(h(v.substring(1),E));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(E,8)),A=f,k=0;k<v.length;k+=8){var b=Math.min(8,v.length-k),x=parseInt(v.substring(k,k+b),E);8>b?(b=c(Math.pow(E,b)),A=A.j(b).add(c(x))):(A=A.j(C),A=A.add(c(x)))}return A}var f=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-R(this).m();for(var v=0,E=1,C=0;C<this.g.length;C++){var A=this.i(C);v+=(0<=A?A:4294967296+A)*E,E*=4294967296}return v},t.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w(this))return"0";if(S(this))return"-"+R(this).toString(v);for(var E=c(Math.pow(v,6)),C=this,A="";;){var k=O(C,E).g;C=T(C,k.j(E));var b=((0<C.g.length?C.g[0]:C.h)>>>0).toString(v);if(C=k,w(C))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function w(v){if(v.h!=0)return!1;for(var E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function S(v){return v.h==-1}t.l=function(v){return v=T(this,v),S(v)?-1:w(v)?0:1};function R(v){for(var E=v.g.length,C=[],A=0;A<E;A++)C[A]=~v.g[A];return new o(C,~v.h).add(m)}t.abs=function(){return S(this)?R(this):this},t.add=function(v){for(var E=Math.max(this.g.length,v.g.length),C=[],A=0,k=0;k<=E;k++){var b=A+(this.i(k)&65535)+(v.i(k)&65535),x=(b>>>16)+(this.i(k)>>>16)+(v.i(k)>>>16);A=x>>>16,b&=65535,x&=65535,C[k]=x<<16|b}return new o(C,C[C.length-1]&-2147483648?-1:0)};function T(v,E){return v.add(R(E))}t.j=function(v){if(w(this)||w(v))return f;if(S(this))return S(v)?R(this).j(R(v)):R(R(this).j(v));if(S(v))return R(this.j(R(v)));if(0>this.l(_)&&0>v.l(_))return c(this.m()*v.m());for(var E=this.g.length+v.g.length,C=[],A=0;A<2*E;A++)C[A]=0;for(A=0;A<this.g.length;A++)for(var k=0;k<v.g.length;k++){var b=this.i(A)>>>16,x=this.i(A)&65535,de=v.i(k)>>>16,Le=v.i(k)&65535;C[2*A+2*k]+=x*Le,g(C,2*A+2*k),C[2*A+2*k+1]+=b*Le,g(C,2*A+2*k+1),C[2*A+2*k+1]+=x*de,g(C,2*A+2*k+1),C[2*A+2*k+2]+=b*de,g(C,2*A+2*k+2)}for(A=0;A<E;A++)C[A]=C[2*A+1]<<16|C[2*A];for(A=E;A<2*E;A++)C[A]=0;return new o(C,0)};function g(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function I(v,E){this.g=v,this.h=E}function O(v,E){if(w(E))throw Error("division by zero");if(w(v))return new I(f,f);if(S(v))return E=O(R(v),E),new I(R(E.g),R(E.h));if(S(E))return E=O(v,R(E)),new I(R(E.g),E.h);if(30<v.g.length){if(S(v)||S(E))throw Error("slowDivide_ only works with positive integers.");for(var C=m,A=E;0>=A.l(v);)C=L(C),A=L(A);var k=V(C,1),b=V(A,1);for(A=V(A,2),C=V(C,2);!w(A);){var x=b.add(A);0>=x.l(v)&&(k=k.add(C),b=x),A=V(A,1),C=V(C,1)}return E=T(v,k.j(E)),new I(k,E)}for(k=f;0<=v.l(E);){for(C=Math.max(1,Math.floor(v.m()/E.m())),A=Math.ceil(Math.log(C)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(C),x=b.j(E);S(x)||0<x.l(v);)C-=A,b=c(C),x=b.j(E);w(b)&&(b=m),k=k.add(b),v=T(v,x)}return new I(k,v)}t.A=function(v){return O(this,v).h},t.and=function(v){for(var E=Math.max(this.g.length,v.g.length),C=[],A=0;A<E;A++)C[A]=this.i(A)&v.i(A);return new o(C,this.h&v.h)},t.or=function(v){for(var E=Math.max(this.g.length,v.g.length),C=[],A=0;A<E;A++)C[A]=this.i(A)|v.i(A);return new o(C,this.h|v.h)},t.xor=function(v){for(var E=Math.max(this.g.length,v.g.length),C=[],A=0;A<E;A++)C[A]=this.i(A)^v.i(A);return new o(C,this.h^v.h)};function L(v){for(var E=v.g.length+1,C=[],A=0;A<E;A++)C[A]=v.i(A)<<1|v.i(A-1)>>>31;return new o(C,v.h)}function V(v,E){var C=E>>5;E%=32;for(var A=v.g.length-C,k=[],b=0;b<A;b++)k[b]=0<E?v.i(b+C)>>>E|v.i(b+C+1)<<32-E:v.i(b+C);return new o(k,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,kR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Cs=o}).apply(typeof a1<"u"?a1:typeof self<"u"?self:typeof window<"u"?window:{});var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var PR,bR,Tl,NR,Ih,r_,OR,DR,LR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hc=="object"&&Hc];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var p=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var D=u[y];if(!(D in p))break e;p=p[D]}u=u[u.length-1],y=p[u],d=d(y),d!=y&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var p=0,y=!1,D={next:function(){if(!y&&p<u.length){var F=p++;return{value:d(F,u[F]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function _(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function w(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(y,D,F){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return d.prototype[D].apply(y,G)}}function S(u){const d=u.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=u[y];return p}return[]}function R(u,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const D=u.length||0,F=y.length||0;u.length=D+F;for(let G=0;G<F;G++)u[D+G]=y[G]}else u.push(y)}}class T{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function g(u){return/^[\s\xa0]*$/.test(u)}function I(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function V(u,d,p){for(const y in u)d.call(p,u[y],y,u)}function v(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function E(u){const d={};for(const p in u)d[p]=u[p];return d}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,d){let p,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(p in y)u[p]=y[p];for(let F=0;F<C.length;F++)p=C[F],Object.prototype.hasOwnProperty.call(y,p)&&(u[p]=y[p])}}function k(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function b(u){a.setTimeout(()=>{throw u},0)}function x(){var u=ee;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class de{constructor(){this.h=this.g=null}add(d,p){const y=Le.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var Le=new T(()=>new rt,u=>u.reset());class rt{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,q=!1,ee=new de,te=()=>{const u=a.Promise.resolve(void 0);Ie=()=>{u.then(Pe)}};var Pe=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(p){b(p)}var d=Le;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}q=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Tt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function Ut(u,d){if(Ne.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(L){e:{try{O(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:ft[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ut.aa.h.call(this)}}w(Ut,Ne);var ft={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),Rr=0;function kr(u,d,p,y,D){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=D,this.key=++Rr,this.da=this.fa=!1}function Zt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ns(u){this.src=u,this.g={},this.h=0}ns.prototype.add=function(u,d,p,y,D){var F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);var G=Ys(u,d,y,D);return-1<G?(d=u[G],p||(d.fa=!1)):(d=new kr(d,this.src,F,!!y,D),d.fa=p,u.push(d)),d};function Fa(u,d){var p=d.type;if(p in u.g){var y=u.g[p],D=Array.prototype.indexOf.call(y,d,void 0),F;(F=0<=D)&&Array.prototype.splice.call(y,D,1),F&&(Zt(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Ys(u,d,p,y){for(var D=0;D<u.length;++D){var F=u[D];if(!F.da&&F.listener==d&&F.capture==!!p&&F.ha==y)return D}return-1}var Xs="closure_lm_"+(1e6*Math.random()|0),oc={};function Jf(u,d,p,y,D){if(y&&y.once)return M(u,d,p,y,D);if(Array.isArray(d)){for(var F=0;F<d.length;F++)Jf(u,d[F],p,y,D);return null}return p=qe(p),u&&u[it]?u.K(d,p,c(y)?!!y.capture:!!y,D):Zf(u,d,p,!1,y,D)}function Zf(u,d,p,y,D,F){if(!d)throw Error("Invalid event type");var G=c(D)?!!D.capture:!!D,Oe=Z(u);if(Oe||(u[Xs]=Oe=new ns(u)),p=Oe.add(d,p,y,G,F),p.proxy)return p;if(y=N(),p.proxy=y,y.src=u,y.listener=p,u.addEventListener)Tt||(D=G),D===void 0&&(D=!1),u.addEventListener(d.toString(),y,D);else if(u.attachEvent)u.attachEvent(K(d.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function N(){function u(p){return d.call(u.src,u.listener,p)}const d=W;return u}function M(u,d,p,y,D){if(Array.isArray(d)){for(var F=0;F<d.length;F++)M(u,d[F],p,y,D);return null}return p=qe(p),u&&u[it]?u.L(d,p,c(y)?!!y.capture:!!y,D):Zf(u,d,p,!0,y,D)}function U(u,d,p,y,D){if(Array.isArray(d))for(var F=0;F<d.length;F++)U(u,d[F],p,y,D);else y=c(y)?!!y.capture:!!y,p=qe(p),u&&u[it]?(u=u.i,d=String(d).toString(),d in u.g&&(F=u.g[d],p=Ys(F,p,y,D),-1<p&&(Zt(F[p]),Array.prototype.splice.call(F,p,1),F.length==0&&(delete u.g[d],u.h--)))):u&&(u=Z(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Ys(d,p,y,D)),(p=-1<u?d[u]:null)&&Q(p))}function Q(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[it])Fa(d.i,u);else{var p=u.type,y=u.proxy;d.removeEventListener?d.removeEventListener(p,y,u.capture):d.detachEvent?d.detachEvent(K(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Z(d))?(Fa(p,u),p.h==0&&(p.src=null,d[Xs]=null)):Zt(u)}}}function K(u){return u in oc?oc[u]:oc[u]="on"+u}function W(u,d){if(u.da)u=!0;else{d=new Ut(d,this);var p=u.listener,y=u.ha||u.src;u.fa&&Q(u),u=p.call(y,d)}return u}function Z(u){return u=u[Xs],u instanceof ns?u:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function qe(u){return typeof u=="function"?u:(u[ve]||(u[ve]=function(d){return u.handleEvent(d)}),u[ve])}function Re(){ye.call(this),this.i=new ns(this),this.M=this,this.F=null}w(Re,ye),Re.prototype[it]=!0,Re.prototype.removeEventListener=function(u,d,p,y){U(this,u,d,p,y)};function Je(u,d){var p,y=u.F;if(y)for(p=[];y;y=y.F)p.push(y);if(u=u.M,y=d.type||d,typeof d=="string")d=new Ne(d,u);else if(d instanceof Ne)d.target=d.target||u;else{var D=d;d=new Ne(y,u),A(d,D)}if(D=!0,p)for(var F=p.length-1;0<=F;F--){var G=d.g=p[F];D=Js(G,y,!0,d)&&D}if(G=d.g=u,D=Js(G,y,!0,d)&&D,D=Js(G,y,!1,d)&&D,p)for(F=0;F<p.length;F++)G=d.g=p[F],D=Js(G,y,!1,d)&&D}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],y=0;y<p.length;y++)Zt(p[y]);delete u.g[d],u.h--}}this.F=null},Re.prototype.K=function(u,d,p,y){return this.i.add(String(u),d,!1,p,y)},Re.prototype.L=function(u,d,p,y){return this.i.add(String(u),d,!0,p,y)};function Js(u,d,p,y){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,F=0;F<d.length;++F){var G=d[F];if(G&&!G.da&&G.capture==p){var Oe=G.listener,Pt=G.ha||G.src;G.fa&&Fa(u.i,G),D=Oe.call(Pt,y)!==!1&&D}}return D&&!y.defaultPrevented}function Zs(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function eo(u){u.g=Zs(()=>{u.g=null,u.i&&(u.i=!1,eo(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class ep extends ye{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:eo(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(u){ye.call(this),this.h=u,this.g={}}w(li,ye);var ac=[];function Va(u){V(u.g,function(d,p){this.g.hasOwnProperty(p)&&Q(d)},u),u.g={}}li.prototype.N=function(){li.aa.N.call(this),Va(this)},li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tp=a.JSON.stringify,pP=a.JSON.parse,mP=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function np(){}np.prototype.h=null;function u0(u){return u.h||(u.h=u.i())}function c0(){}var Ua={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rp(){Ne.call(this,"d")}w(rp,Ne);function ip(){Ne.call(this,"c")}w(ip,Ne);var rs={},h0=null;function lc(){return h0=h0||new Re}rs.La="serverreachability";function d0(u){Ne.call(this,rs.La,u)}w(d0,Ne);function ja(u){const d=lc();Je(d,new d0(d))}rs.STAT_EVENT="statevent";function f0(u,d){Ne.call(this,rs.STAT_EVENT,u),this.stat=d}w(f0,Ne);function en(u){const d=lc();Je(d,new f0(d,u))}rs.Ma="timingevent";function p0(u,d){Ne.call(this,rs.Ma,u),this.size=d}w(p0,Ne);function $a(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function za(){this.g=!0}za.prototype.xa=function(){this.g=!1};function gP(u,d,p,y,D,F){u.info(function(){if(u.g)if(F)for(var G="",Oe=F.split("&"),Pt=0;Pt<Oe.length;Pt++){var Te=Oe[Pt].split("=");if(1<Te.length){var jt=Te[0];Te=Te[1];var $t=jt.split("_");G=2<=$t.length&&$t[1]=="type"?G+(jt+"="+Te+"&"):G+(jt+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+p+`
`+G})}function _P(u,d,p,y,D,F,G){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+p+`
`+F+" "+G})}function to(u,d,p,y){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+vP(u,p)+(y?" "+y:"")})}function yP(u,d){u.info(function(){return"TIMEOUT: "+d})}za.prototype.info=function(){};function vP(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var y=p[u];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return tp(p)}catch{return d}}var uc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},m0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sp;function cc(){}w(cc,np),cc.prototype.g=function(){return new XMLHttpRequest},cc.prototype.i=function(){return{}},sp=new cc;function ui(u,d,p,y){this.j=u,this.i=d,this.l=p,this.R=y||1,this.U=new li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new g0}function g0(){this.i=null,this.g="",this.h=!1}var _0={},op={};function ap(u,d,p){u.L=1,u.v=pc(Pr(d)),u.m=p,u.P=!0,y0(u,null)}function y0(u,d){u.F=Date.now(),hc(u),u.A=Pr(u.v);var p=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),N0(p.i,"t",y),u.C=0,p=u.j.J,u.h=new g0,u.g=Y0(u.j,p?d:null,!u.m),0<u.O&&(u.M=new ep(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,y=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(ac[0]=D.toString()),D=ac);for(var F=0;F<D.length;F++){var G=Jf(p,D[F],y||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=u.H?E(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),ja(),gP(u.i,u.u,u.A,u.l,u.R,u.m)}ui.prototype.ca=function(u){u=u.target;const d=this.M;d&&br(u)==3?d.j():this.Y(u)},ui.prototype.Y=function(u){try{if(u==this.g)e:{const $t=br(this.g);var d=this.g.Ba();const io=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||U0(this.g)))){this.J||$t!=4||d==7||(d==8||0>=io?ja(3):ja(2)),lp(this);var p=this.g.Z();this.X=p;t:if(v0(this)){var y=U0(this.g);u="";var D=y.length,F=br(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){is(this),Ba(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(y[d],{stream:!(F&&d==D-1)});y.length=0,this.h.g+=u,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=p==200,_P(this.i,this.u,this.A,this.l,this.R,$t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Pt=this.g;if((Oe=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Oe)){var Te=Oe;break t}}Te=null}if(p=Te)to(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,up(this,p);else{this.o=!1,this.s=3,en(12),is(this),Ba(this);break e}}if(this.P){p=!0;let jn;for(;!this.J&&this.C<G.length;)if(jn=EP(this,G),jn==op){$t==4&&(this.s=4,en(14),p=!1),to(this.i,this.l,null,"[Incomplete Response]");break}else if(jn==_0){this.s=4,en(15),to(this.i,this.l,G,"[Invalid Chunk]"),p=!1;break}else to(this.i,this.l,jn,null),up(this,jn);if(v0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||G.length!=0||this.h.h||(this.s=1,en(16),p=!1),this.o=this.o&&p,!p)to(this.i,this.l,G,"[Invalid Chunked Response]"),is(this),Ba(this);else if(0<G.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),mp(jt),jt.M=!0,en(11))}}else to(this.i,this.l,G,null),up(this,G);$t==4&&is(this),this.o&&!this.J&&($t==4?q0(this.j,this):(this.o=!1,hc(this)))}else FP(this.g),p==400&&0<G.indexOf("Unknown SID")?(this.s=3,en(12)):(this.s=0,en(13)),is(this),Ba(this)}}}catch{}finally{}};function v0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function EP(u,d){var p=u.C,y=d.indexOf(`
`,p);return y==-1?op:(p=Number(d.substring(p,y)),isNaN(p)?_0:(y+=1,y+p>d.length?op:(d=d.slice(y,y+p),u.C=y+p,d)))}ui.prototype.cancel=function(){this.J=!0,is(this)};function hc(u){u.S=Date.now()+u.I,E0(u,u.I)}function E0(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=$a(m(u.ba,u),d)}function lp(u){u.B&&(a.clearTimeout(u.B),u.B=null)}ui.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(yP(this.i,this.A),this.L!=2&&(ja(),en(17)),is(this),this.s=2,Ba(this)):E0(this,this.S-u)};function Ba(u){u.j.G==0||u.J||q0(u.j,u)}function is(u){lp(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,Va(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function up(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||cp(p.h,u))){if(!u.K&&cp(p.h,u)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)vc(p),_c(p);else break e;pp(p),en(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=$a(m(p.Za,p),6e3));if(1>=I0(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else os(p,11)}else if((u.K||p.g==u)&&vc(p),!g(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let Te=D[d];if(p.T=Te[0],Te=Te[1],p.G==2)if(Te[0]=="c"){p.K=Te[1],p.ia=Te[2];const jt=Te[3];jt!=null&&(p.la=jt,p.j.info("VER="+p.la));const $t=Te[4];$t!=null&&(p.Aa=$t,p.j.info("SVER="+p.Aa));const io=Te[5];io!=null&&typeof io=="number"&&0<io&&(y=1.5*io,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const jn=u.g;if(jn){const wc=jn.g?jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wc){var F=y.h;F.g||wc.indexOf("spdy")==-1&&wc.indexOf("quic")==-1&&wc.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(hp(F,F.h),F.h=null))}if(y.D){const gp=jn.g?jn.g.getResponseHeader("X-HTTP-Session-Id"):null;gp&&(y.ya=gp,je(y.I,y.D,gp))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var G=u;if(y.qa=Q0(y,y.J?y.ia:null,y.W),G.K){S0(y.h,G);var Oe=G,Pt=y.L;Pt&&(Oe.I=Pt),Oe.B&&(lp(Oe),hc(Oe)),y.g=G}else W0(y);0<p.i.length&&yc(p)}else Te[0]!="stop"&&Te[0]!="close"||os(p,7);else p.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?os(p,7):fp(p):Te[0]!="noop"&&p.l&&p.l.ta(Te),p.v=0)}}ja(4)}catch{}}var wP=class{constructor(u,d){this.g=u,this.map=d}};function w0(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function T0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function I0(u){return u.h?1:u.g?u.g.size:0}function cp(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function hp(u,d){u.g?u.g.add(d):u.h=d}function S0(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}w0.prototype.cancel=function(){if(this.i=C0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function C0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return S(u.i)}function TP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],p=u.length,y=0;y<p;y++)d.push(u[y]);return d}d=[],p=0;for(y in u)d[p++]=u[y];return d}function IP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const y in u)d[p++]=y;return d}}}function x0(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=IP(u),y=TP(u),D=y.length,F=0;F<D;F++)d.call(void 0,y[F],p&&p[F],u)}var A0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SP(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var y=u[p].indexOf("="),D=null;if(0<=y){var F=u[p].substring(0,y);D=u[p].substring(y+1)}else F=u[p];d(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ss(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ss){this.h=u.h,dc(this,u.j),this.o=u.o,this.g=u.g,fc(this,u.s),this.l=u.l;var d=u.i,p=new qa;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),R0(this,p),this.m=u.m}else u&&(d=String(u).match(A0))?(this.h=!1,dc(this,d[1]||"",!0),this.o=Wa(d[2]||""),this.g=Wa(d[3]||"",!0),fc(this,d[4]),this.l=Wa(d[5]||"",!0),R0(this,d[6]||"",!0),this.m=Wa(d[7]||"")):(this.h=!1,this.i=new qa(null,this.h))}ss.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Ha(d,k0,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Ha(d,k0,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Ha(p,p.charAt(0)=="/"?AP:xP,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Ha(p,kP)),u.join("")};function Pr(u){return new ss(u)}function dc(u,d,p){u.j=p?Wa(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function fc(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function R0(u,d,p){d instanceof qa?(u.i=d,PP(u.i,u.h)):(p||(d=Ha(d,RP)),u.i=new qa(d,u.h))}function je(u,d,p){u.i.set(d,p)}function pc(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Wa(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ha(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,CP),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function CP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var k0=/[#\/\?@]/g,xP=/[#\?:]/g,AP=/[#\?]/g,RP=/[#\?@]/g,kP=/#/g;function qa(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function ci(u){u.g||(u.g=new Map,u.h=0,u.i&&SP(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=qa.prototype,t.add=function(u,d){ci(this),this.i=null,u=no(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function P0(u,d){ci(u),d=no(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function b0(u,d){return ci(u),d=no(u,d),u.g.has(d)}t.forEach=function(u,d){ci(this),this.g.forEach(function(p,y){p.forEach(function(D){u.call(d,D,y,this)},this)},this)},t.na=function(){ci(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const D=u[y];for(let F=0;F<D.length;F++)p.push(d[y])}return p},t.V=function(u){ci(this);let d=[];if(typeof u=="string")b0(this,u)&&(d=d.concat(this.g.get(no(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},t.set=function(u,d){return ci(this),this.i=null,u=no(this,u),b0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function N0(u,d,p){P0(u,d),0<p.length&&(u.i=null,u.g.set(no(u,d),S(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const F=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var D=F;G[y]!==""&&(D+="="+encodeURIComponent(String(G[y]))),u.push(D)}}return this.i=u.join("&")};function no(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function PP(u,d){d&&!u.j&&(ci(u),u.i=null,u.g.forEach(function(p,y){var D=y.toLowerCase();y!=D&&(P0(this,y),N0(this,D,p))},u)),u.j=d}function bP(u,d){const p=new za;if(a.Image){const y=new Image;y.onload=_(hi,p,"TestLoadImage: loaded",!0,d,y),y.onerror=_(hi,p,"TestLoadImage: error",!1,d,y),y.onabort=_(hi,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=_(hi,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else d(!1)}function NP(u,d){const p=new za,y=new AbortController,D=setTimeout(()=>{y.abort(),hi(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:y.signal}).then(F=>{clearTimeout(D),F.ok?hi(p,"TestPingServer: ok",!0,d):hi(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),hi(p,"TestPingServer: error",!1,d)})}function hi(u,d,p,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(p)}catch{}}function OP(){this.g=new mP}function DP(u,d,p){const y=p||"";try{x0(u,function(D,F){let G=D;c(D)&&(G=tp(D)),d.push(y+F+"="+encodeURIComponent(G))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function Ga(u){this.l=u.Ub||null,this.j=u.eb||!1}w(Ga,np),Ga.prototype.g=function(){return new mc(this.l,this.j)},Ga.prototype.i=function(u){return function(){return u}}({});function mc(u,d){Re.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(mc,Re),t=mc.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Qa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ka(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Qa(this)),this.g&&(this.readyState=3,Qa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;O0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function O0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Ka(this):Qa(this),this.readyState==3&&O0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ka(this))},t.Qa=function(u){this.g&&(this.response=u,Ka(this))},t.ga=function(){this.g&&Ka(this)};function Ka(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Qa(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function Qa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(mc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function D0(u){let d="";return V(u,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function dp(u,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=D0(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):je(u,d,p))}function Ze(u){Re.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Ze,Re);var LP=/^https?$/i,MP=["POST","PUT"];t=Ze.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sp.g(),this.v=this.o?u0(this.o):u0(sp),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(F){L0(this,F);return}if(u=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)p.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const F of y.keys())p.set(F,y.get(F));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(F=>F.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(MP,d,void 0))||y||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of p)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{V0(this),this.u=!0,this.g.send(u),this.u=!1}catch(F){L0(this,F)}};function L0(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,M0(u),gc(u)}function M0(u){u.A||(u.A=!0,Je(u,"complete"),Je(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Je(this,"complete"),Je(this,"abort"),gc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gc(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?F0(this):this.bb())},t.bb=function(){F0(this)};function F0(u){if(u.h&&typeof o<"u"&&(!u.v[1]||br(u)!=4||u.Z()!=2)){if(u.u&&br(u)==4)Zs(u.Ea,0,u);else if(Je(u,"readystatechange"),br(u)==4){u.h=!1;try{const G=u.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=G===0){var D=String(u.D).match(A0)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!LP.test(D?D.toLowerCase():"")}p=y}if(p)Je(u,"complete"),Je(u,"success");else{u.m=6;try{var F=2<br(u)?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.Z()+"]",M0(u)}}finally{gc(u)}}}}function gc(u,d){if(u.g){V0(u);const p=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||Je(u,"ready");try{p.onreadystatechange=y}catch{}}}function V0(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function br(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<br(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),pP(d)}};function U0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function FP(u){const d={};u=(u.g&&2<=br(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(g(u[y]))continue;var p=k(u[y]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const F=d[D]||[];d[D]=F,F.push(p)}v(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ya(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function j0(u){this.Aa=0,this.i=[],this.j=new za,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ya("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ya("baseRetryDelayMs",5e3,u),this.cb=Ya("retryDelaySeedMs",1e4,u),this.Wa=Ya("forwardChannelMaxRetries",2,u),this.wa=Ya("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new w0(u&&u.concurrentRequestLimit),this.Da=new OP,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=j0.prototype,t.la=8,t.G=1,t.connect=function(u,d,p,y){en(0),this.W=u,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=Q0(this,null,this.W),yc(this)};function fp(u){if($0(u),u.G==3){var d=u.U++,p=Pr(u.I);if(je(p,"SID",u.K),je(p,"RID",d),je(p,"TYPE","terminate"),Xa(u,p),d=new ui(u,u.j,d),d.L=2,d.v=pc(Pr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=Y0(d.j,null),d.g.ea(d.v)),d.F=Date.now(),hc(d)}K0(u)}function _c(u){u.g&&(mp(u),u.g.cancel(),u.g=null)}function $0(u){_c(u),u.u&&(a.clearTimeout(u.u),u.u=null),vc(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function yc(u){if(!T0(u.h)&&!u.s){u.s=!0;var d=u.Ga;Ie||te(),q||(Ie(),q=!0),ee.add(d,u),u.B=0}}function VP(u,d){return I0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=$a(m(u.Ga,u,d),G0(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new ui(this,this.j,u);let F=this.o;if(this.S&&(F?(F=E(F),A(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=B0(this,D,d),p=Pr(this.I),je(p,"RID",u),je(p,"CVER",22),this.D&&je(p,"X-HTTP-Session-Id",this.D),Xa(this,p),F&&(this.O?d="headers="+encodeURIComponent(String(D0(F)))+"&"+d:this.m&&dp(p,this.m,F)),hp(this.h,D),this.Ua&&je(p,"TYPE","init"),this.P?(je(p,"$req",d),je(p,"SID","null"),D.T=!0,ap(D,p,null)):ap(D,p,d),this.G=2}}else this.G==3&&(u?z0(this,u):this.i.length==0||T0(this.h)||z0(this))};function z0(u,d){var p;d?p=d.l:p=u.U++;const y=Pr(u.I);je(y,"SID",u.K),je(y,"RID",p),je(y,"AID",u.T),Xa(u,y),u.m&&u.o&&dp(y,u.m,u.o),p=new ui(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=B0(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),hp(u.h,p),ap(p,y,d)}function Xa(u,d){u.H&&V(u.H,function(p,y){je(d,y,p)}),u.l&&x0({},function(p,y){je(d,y,p)})}function B0(u,d,p){p=Math.min(u.i.length,p);var y=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let F=-1;for(;;){const G=["count="+p];F==-1?0<p?(F=D[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Oe=!0;for(let Pt=0;Pt<p;Pt++){let Te=D[Pt].g;const jt=D[Pt].map;if(Te-=F,0>Te)F=Math.max(0,D[Pt].g-100),Oe=!1;else try{DP(jt,G,"req"+Te+"_")}catch{y&&y(jt)}}if(Oe){y=G.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,y}function W0(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Ie||te(),q||(Ie(),q=!0),ee.add(d,u),u.v=0}}function pp(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=$a(m(u.Fa,u),G0(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,H0(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=$a(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,en(10),_c(this),H0(this))};function mp(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function H0(u){u.g=new ui(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=Pr(u.qa);je(d,"RID","rpc"),je(d,"SID",u.K),je(d,"AID",u.T),je(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(d,"TO",u.ja),je(d,"TYPE","xmlhttp"),Xa(u,d),u.m&&u.o&&dp(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=pc(Pr(d)),p.m=null,p.P=!0,y0(p,u)}t.Za=function(){this.C!=null&&(this.C=null,_c(this),pp(this),en(19))};function vc(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function q0(u,d){var p=null;if(u.g==d){vc(u),mp(u),u.g=null;var y=2}else if(cp(u.h,d))p=d.D,S0(u.h,d),y=1;else return;if(u.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;y=lc(),Je(y,new p0(y,p)),yc(u)}else W0(u);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&VP(u,d)||y==2&&pp(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),D){case 1:os(u,5);break;case 4:os(u,10);break;case 3:os(u,6);break;default:os(u,2)}}}function G0(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function os(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),y=u.Xa;const D=!y;y=new ss(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||dc(y,"https"),pc(y),D?bP(y.toString(),p):NP(y.toString(),p)}else en(2);u.G=0,u.l&&u.l.sa(d),K0(u),$0(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),en(2)):(this.j.info("Failed to ping google.com"),en(1))};function K0(u){if(u.G=0,u.ka=[],u.l){const d=C0(u.h);(d.length!=0||u.i.length!=0)&&(R(u.ka,d),R(u.ka,u.i),u.h.i.length=0,S(u.i),u.i.length=0),u.l.ra()}}function Q0(u,d,p){var y=p instanceof ss?Pr(p):new ss(p);if(y.g!="")d&&(y.g=d+"."+y.g),fc(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var F=new ss(null);y&&dc(F,y),d&&(F.g=d),D&&fc(F,D),p&&(F.l=p),y=F}return p=u.D,d=u.ya,p&&d&&je(y,p,d),je(y,"VER",u.la),Xa(u,y),y}function Y0(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ze(new Ga({eb:p})):new Ze(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function X0(){}t=X0.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ec(){}Ec.prototype.g=function(u,d){return new yn(u,d)};function yn(u,d){Re.call(this),this.g=new j0(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!g(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!g(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new ro(this)}w(yn,Re),yn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yn.prototype.close=function(){fp(this.g)},yn.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=tp(u),u=p);d.i.push(new wP(d.Ya++,u)),d.G==3&&yc(d)},yn.prototype.N=function(){this.g.l=null,delete this.j,fp(this.g),delete this.g,yn.aa.N.call(this)};function J0(u){rp.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}w(J0,rp);function Z0(){ip.call(this),this.status=1}w(Z0,ip);function ro(u){this.g=u}w(ro,X0),ro.prototype.ua=function(){Je(this.g,"a")},ro.prototype.ta=function(u){Je(this.g,new J0(u))},ro.prototype.sa=function(u){Je(this.g,new Z0)},ro.prototype.ra=function(){Je(this.g,"b")},Ec.prototype.createWebChannel=Ec.prototype.g,yn.prototype.send=yn.prototype.o,yn.prototype.open=yn.prototype.m,yn.prototype.close=yn.prototype.close,LR=function(){return new Ec},DR=function(){return lc()},OR=rs,r_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},uc.NO_ERROR=0,uc.TIMEOUT=8,uc.HTTP_ERROR=6,Ih=uc,m0.COMPLETE="complete",NR=m0,c0.EventType=Ua,Ua.OPEN="a",Ua.CLOSE="b",Ua.ERROR="c",Ua.MESSAGE="d",Re.prototype.listen=Re.prototype.K,Tl=c0,bR=Ga,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,PR=Ze}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});const l1="@firebase/firestore";/**
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
 */class qt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qt.UNAUTHENTICATED=new qt(null),qt.GOOGLE_CREDENTIALS=new qt("google-credentials-uid"),qt.FIRST_PARTY=new qt("first-party-uid"),qt.MOCK_USER=new qt("mock-user");/**
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
 */let Na="10.12.1";/**
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
 */const Vs=new xf("@firebase/firestore");function hl(){return Vs.logLevel}function J(t,...e){if(Vs.logLevel<=me.DEBUG){const n=e.map(Pv);Vs.debug(`Firestore (${Na}): ${t}`,...n)}}function ti(t,...e){if(Vs.logLevel<=me.ERROR){const n=e.map(Pv);Vs.error(`Firestore (${Na}): ${t}`,...n)}}function ca(t,...e){if(Vs.logLevel<=me.WARN){const n=e.map(Pv);Vs.warn(`Firestore (${Na}): ${t}`,...n)}}function Pv(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function Ue(t,e){t||ae()}function ue(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends xr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class MR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class r${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class i${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class s${constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new zi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new zi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new MR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new qt(e)}}class o${constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class a${constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new o$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class l${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class u${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new l$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function c$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class FR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=c$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function ha(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class vt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return vt.fromMillis(Date.now())}static fromDate(e){return vt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new vt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new vt(0,0))}static max(){return new le(new vt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Eu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class tt extends Eu{construct(e,n,r){return new tt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ie(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new tt(n)}static emptyPath(){return new tt([])}}const h$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Eu{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return h$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ie(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ie(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ie(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ie(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(tt.fromString(e))}static fromName(e){return new re(tt.fromString(e).popFirst(5))}static empty(){return new re(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return tt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new tt(e.slice()))}}function d$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new vt(n+1,0):new vt(n,r));return new Ki(i,re.empty(),e)}function f$(t){return new Ki(t.readTime,t.key,-1)}class Ki{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ki(le.min(),re.empty(),-1)}static max(){return new Ki(le.max(),re.empty(),-1)}}function p$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const m$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class g${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ju(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==m$)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function _$(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Zu(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class bv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}bv.oe=-1;function Uf(t){return t==null}function Fd(t){return t===0&&1/t==-1/0}function y$(t){return typeof t=="number"&&Number.isInteger(t)&&!Fd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function u1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Oa(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||Nt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qc(this.root,e,this.comparator,!1)}getReverseIterator(){return new qc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qc(this.root,e,this.comparator,!0)}}class qc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Nt.RED,this.left=i??Nt.EMPTY,this.right=s??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Nt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Nt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mt{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new c1(this.data.getIterator())}getIteratorFrom(e){return new c1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Mt(this.comparator);return n.data=e,n}}class c1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Yn([])}unionWith(e){let n=new Mt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ha(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class UR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new UR("Invalid base64 string: "+s):s}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const v$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qi(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=v$.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ut(t.seconds),nanos:ut(t.nanos)}}function ut(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Us(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
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
 */function Nv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ov(t){const e=t.mapValue.fields.__previous_value__;return Nv(e)?Ov(e):e}function wu(t){const e=Qi(t.mapValue.fields.__local_write_time__.timestampValue);return new vt(e.seconds,e.nanos)}/**
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
 */class E${constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Tu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Tu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Nv(t)?4:w$(t)?9007199254740991:10:ae()}function Ir(t,e){if(t===e)return!0;const n=js(t);if(n!==js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wu(t).isEqual(wu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Qi(i.timestampValue),a=Qi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Us(i.bytesValue).isEqual(Us(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ut(i.geoPointValue.latitude)===ut(s.geoPointValue.latitude)&&ut(i.geoPointValue.longitude)===ut(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ut(i.integerValue)===ut(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ut(i.doubleValue),a=ut(s.doubleValue);return o===a?Fd(o)===Fd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ha(t.arrayValue.values||[],e.arrayValue.values||[],Ir);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(u1(o)!==u1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Ir(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function Iu(t,e){return(t.values||[]).find(n=>Ir(n,e))!==void 0}function da(t,e){if(t===e)return 0;const n=js(t),r=js(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ut(s.integerValue||s.doubleValue),l=ut(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return h1(t.timestampValue,e.timestampValue);case 4:return h1(wu(t),wu(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Us(s),l=Us(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=xe(a[c],l[c]);if(h!==0)return h}return xe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(ut(s.latitude),ut(o.latitude));return a!==0?a:xe(ut(s.longitude),ut(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=da(a[c],l[c]);if(h)return h}return xe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Gc.mapValue&&o===Gc.mapValue)return 0;if(s===Gc.mapValue)return 1;if(o===Gc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=xe(l[f],h[f]);if(m!==0)return m;const _=da(a[l[f]],c[h[f]]);if(_!==0)return _}return xe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ae()}}function h1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Qi(t),r=Qi(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function fa(t){return i_(t)}function i_(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=i_(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${i_(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function s_(t){return!!t&&"integerValue"in t}function Dv(t){return!!t&&"arrayValue"in t}function d1(t){return!!t&&"nullValue"in t}function f1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Sh(t){return!!t&&"mapValue"in t}function $l(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Oa(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$l(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$l(t.arrayValue.values[n]);return e}return Object.assign({},t)}function w$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nn{constructor(e){this.value=e}static empty(){return new Nn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Sh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$l(n)}setAll(e){let n=Dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$l(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Sh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ir(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Sh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Oa(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nn($l(this.value))}}function jR(t){const e=[];return Oa(t.fields,(n,r)=>{const i=new Dt([n]);if(Sh(r)){const s=jR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Yn(e)}/**
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
 */class Yt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Yt(e,0,le.min(),le.min(),le.min(),Nn.empty(),0)}static newFoundDocument(e,n,r,i){return new Yt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Yt(e,2,n,le.min(),le.min(),Nn.empty(),0)}static newUnknownDocument(e,n){return new Yt(e,3,n,le.min(),le.min(),Nn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vd{constructor(e,n){this.position=e,this.inclusive=n}}function p1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=da(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function m1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ir(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ud{constructor(e,n="asc"){this.field=e,this.dir=n}}function T$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $R{}class _t extends $R{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new S$(e,n,r):n==="array-contains"?new A$(e,r):n==="in"?new R$(e,r):n==="not-in"?new k$(e,r):n==="array-contains-any"?new P$(e,r):new _t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new C$(e,r):new x$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(da(n,this.value)):n!==null&&js(this.value)===js(n)&&this.matchesComparison(da(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Sr extends $R{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Sr(e,n)}matches(e){return zR(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zR(t){return t.op==="and"}function BR(t){return I$(t)&&zR(t)}function I$(t){for(const e of t.filters)if(e instanceof Sr)return!1;return!0}function o_(t){if(t instanceof _t)return t.field.canonicalString()+t.op.toString()+fa(t.value);if(BR(t))return t.filters.map(e=>o_(e)).join(",");{const e=t.filters.map(n=>o_(n)).join(",");return`${t.op}(${e})`}}function WR(t,e){return t instanceof _t?function(r,i){return i instanceof _t&&r.op===i.op&&r.field.isEqual(i.field)&&Ir(r.value,i.value)}(t,e):t instanceof Sr?function(r,i){return i instanceof Sr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&WR(o,i.filters[a]),!0):!1}(t,e):void ae()}function HR(t){return t instanceof _t?function(n){return`${n.field.canonicalString()} ${n.op} ${fa(n.value)}`}(t):t instanceof Sr?function(n){return n.op.toString()+" {"+n.getFilters().map(HR).join(" ,")+"}"}(t):"Filter"}class S$ extends _t{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class C$ extends _t{constructor(e,n){super(e,"in",n),this.keys=qR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class x$ extends _t{constructor(e,n){super(e,"not-in",n),this.keys=qR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class A$ extends _t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dv(n)&&Iu(n.arrayValue,this.value)}}class R$ extends _t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Iu(this.value.arrayValue,n)}}class k$ extends _t{constructor(e,n){super(e,"not-in",n)}matches(e){if(Iu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Iu(this.value.arrayValue,n)}}class P$ extends _t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Iu(this.value.arrayValue,r))}}/**
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
 */class b${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function g1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new b$(t,e,n,r,i,s,o)}function Lv(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>o_(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Uf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>fa(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>fa(r)).join(",")),e.ue=n}return e.ue}function Mv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!T$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!m1(t.startAt,e.startAt)&&m1(t.endAt,e.endAt)}function a_(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class jf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function N$(t,e,n,r,i,s,o,a){return new jf(t,e,n,r,i,s,o,a)}function Fv(t){return new jf(t)}function _1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function O$(t){return t.collectionGroup!==null}function zl(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Mt(Dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ud(s,r))}),n.has(Dt.keyField().canonicalString())||e.ce.push(new Ud(Dt.keyField(),r))}return e.ce}function vr(t){const e=ue(t);return e.le||(e.le=D$(e,zl(t))),e.le}function D$(t,e){if(t.limitType==="F")return g1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ud(i.field,s)});const n=t.endAt?new Vd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Vd(t.startAt.position,t.startAt.inclusive):null;return g1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function l_(t,e,n){return new jf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $f(t,e){return Mv(vr(t),vr(e))&&t.limitType===e.limitType}function GR(t){return`${Lv(vr(t))}|lt:${t.limitType}`}function co(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>HR(i)).join(", ")}]`),Uf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>fa(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>fa(i)).join(",")),`Target(${r})`}(vr(t))}; limitType=${t.limitType})`}function zf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):re.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of zl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=p1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,zl(r),i)||r.endAt&&!function(o,a,l){const c=p1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,zl(r),i))}(t,e)}function L$(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function KR(t){return(e,n)=>{let r=!1;for(const i of zl(t)){const s=M$(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function M$(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?da(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
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
 */class Da{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Oa(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VR(this.inner)}size(){return this.innerSize}}/**
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
 */const F$=new Xe(re.comparator);function ni(){return F$}const QR=new Xe(re.comparator);function Il(...t){let e=QR;for(const n of t)e=e.insert(n.key,n);return e}function YR(t){let e=QR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ys(){return Bl()}function XR(){return Bl()}function Bl(){return new Da(t=>t.toString(),(t,e)=>t.isEqual(e))}const V$=new Xe(re.comparator),U$=new Mt(re.comparator);function ge(...t){let e=U$;for(const n of t)e=e.add(n);return e}const j$=new Mt(xe);function $$(){return j$}/**
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
 */function JR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fd(e)?"-0":e}}function ZR(t){return{integerValue:""+t}}function z$(t,e){return y$(e)?ZR(e):JR(t,e)}/**
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
 */class Bf{constructor(){this._=void 0}}function B$(t,e,n){return t instanceof jd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Nv(s)&&(s=Ov(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Su?tk(t,e):t instanceof Cu?nk(t,e):function(i,s){const o=ek(i,s),a=y1(o)+y1(i.Pe);return s_(o)&&s_(i.Pe)?ZR(a):JR(i.serializer,a)}(t,e)}function W$(t,e,n){return t instanceof Su?tk(t,e):t instanceof Cu?nk(t,e):n}function ek(t,e){return t instanceof $d?function(r){return s_(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class jd extends Bf{}class Su extends Bf{constructor(e){super(),this.elements=e}}function tk(t,e){const n=rk(e);for(const r of t.elements)n.some(i=>Ir(i,r))||n.push(r);return{arrayValue:{values:n}}}class Cu extends Bf{constructor(e){super(),this.elements=e}}function nk(t,e){let n=rk(e);for(const r of t.elements)n=n.filter(i=>!Ir(i,r));return{arrayValue:{values:n}}}class $d extends Bf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function y1(t){return ut(t.integerValue||t.doubleValue)}function rk(t){return Dv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function H$(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Su&&i instanceof Su||r instanceof Cu&&i instanceof Cu?ha(r.elements,i.elements,Ir):r instanceof $d&&i instanceof $d?Ir(r.Pe,i.Pe):r instanceof jd&&i instanceof jd}(t.transform,e.transform)}class q${constructor(e,n){this.version=e,this.transformResults=n}}class Gr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gr}static exists(e){return new Gr(void 0,e)}static updateTime(e){return new Gr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ch(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Wf{}function ik(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ok(t.key,Gr.none()):new ec(t.key,t.data,Gr.none());{const n=t.data,r=Nn.empty();let i=new Mt(Dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ks(t.key,r,new Yn(i.toArray()),Gr.none())}}function G$(t,e,n){t instanceof ec?function(i,s,o){const a=i.value.clone(),l=E1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ks?function(i,s,o){if(!Ch(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=E1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(sk(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Wl(t,e,n,r){return t instanceof ec?function(s,o,a,l){if(!Ch(s.precondition,o))return a;const c=s.value.clone(),h=w1(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ks?function(s,o,a,l){if(!Ch(s.precondition,o))return a;const c=w1(s.fieldTransforms,l,o),h=o.data;return h.setAll(sk(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Ch(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function K$(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ek(r.transform,i||null);s!=null&&(n===null&&(n=Nn.empty()),n.set(r.field,s))}return n||null}function v1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ha(r,i,(s,o)=>H$(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ec extends Wf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ks extends Wf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function sk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function E1(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,W$(o,a,n[i]))}return r}function w1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,B$(s,o,e))}return r}class ok extends Wf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q$ extends Wf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Y${constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&G$(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Wl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Wl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=XR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=ik(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ha(this.mutations,e.mutations,(n,r)=>v1(n,r))&&ha(this.baseMutations,e.baseMutations,(n,r)=>v1(n,r))}}class Vv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ue(e.mutations.length===r.length);let i=function(){return V$}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Vv(e,n,r,i)}}/**
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
 */class X${constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class J${constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var lt,Ee;function Z$(t){switch(t){default:return ae();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function ak(t){if(t===void 0)return ti("GRPC error has no .code"),z.UNKNOWN;switch(t){case lt.OK:return z.OK;case lt.CANCELLED:return z.CANCELLED;case lt.UNKNOWN:return z.UNKNOWN;case lt.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case lt.INTERNAL:return z.INTERNAL;case lt.UNAVAILABLE:return z.UNAVAILABLE;case lt.UNAUTHENTICATED:return z.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case lt.NOT_FOUND:return z.NOT_FOUND;case lt.ALREADY_EXISTS:return z.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return z.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case lt.ABORTED:return z.ABORTED;case lt.OUT_OF_RANGE:return z.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return z.UNIMPLEMENTED;case lt.DATA_LOSS:return z.DATA_LOSS;default:return ae()}}(Ee=lt||(lt={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function e9(){return new TextEncoder}/**
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
 */const t9=new Cs([4294967295,4294967295],0);function T1(t){const e=e9().encode(t),n=new kR;return n.update(e),new Uint8Array(n.digest())}function I1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Cs([n,r],0),new Cs([i,s],0)]}class Uv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Sl(`Invalid padding: ${n}`);if(r<0)throw new Sl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Sl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Sl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Cs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Cs.fromNumber(r)));return i.compare(t9)===1&&(i=new Cs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=T1(e),[r,i]=I1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Uv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=T1(e),[r,i]=I1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Sl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Hf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Hf(le.min(),i,new Xe(xe),ni(),ge())}}class tc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tc(r,n,ge(),ge(),ge())}}/**
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
 */class xh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class lk{constructor(e,n){this.targetId=e,this.me=n}}class uk{constructor(e,n,r=Jt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class S1{constructor(){this.fe=0,this.ge=x1(),this.pe=Jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new tc(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=x1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class n9{constructor(e){this.Le=e,this.Be=new Map,this.ke=ni(),this.qe=C1(),this.Qe=new Xe(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(a_(s))if(r===0){const o=new re(s.path);this.Ue(n,o,Yt.newNoDocument(o,le.min()))}else Ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Us(r).toUint8Array()}catch(l){if(l instanceof UR)return ca("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Uv(o,i,s)}catch(l){return ca(l instanceof Sl?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&a_(a.target)){const l=new re(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Yt.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ge();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Hf(e,n,this.Qe,this.ke,r);return this.ke=ni(),this.qe=C1(),this.Qe=new Xe(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new S1,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Mt(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new S1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function C1(){return new Xe(re.comparator)}function x1(){return new Xe(re.comparator)}const r9=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),i9=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),s9=(()=>({and:"AND",or:"OR"}))();class o9{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function u_(t,e){return t.useProto3Json||Uf(e)?e:{value:e}}function zd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ck(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function a9(t,e){return zd(t,e.toTimestamp())}function Er(t){return Ue(!!t),le.fromTimestamp(function(n){const r=Qi(n);return new vt(r.seconds,r.nanos)}(t))}function jv(t,e){return c_(t,e).canonicalString()}function c_(t,e){const n=function(i){return new tt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hk(t){const e=tt.fromString(t);return Ue(gk(e)),e}function h_(t,e){return jv(t.databaseId,e.path)}function _m(t,e){const n=hk(e);if(n.get(1)!==t.databaseId.projectId)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ie(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(fk(n))}function dk(t,e){return jv(t.databaseId,e)}function l9(t){const e=hk(t);return e.length===4?tt.emptyPath():fk(e)}function d_(t){return new tt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fk(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function A1(t,e,n){return{name:h_(t,e),fields:n.value.mapValue.fields}}function u9(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ue(h===void 0||typeof h=="string"),Jt.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Jt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?z.UNKNOWN:ak(c.code);return new ie(h,c.message||"")}(o);n=new uk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=_m(t,r.document.name),s=Er(r.document.updateTime),o=r.document.createTime?Er(r.document.createTime):le.min(),a=new Nn({mapValue:{fields:r.document.fields}}),l=Yt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new xh(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=_m(t,r.document),s=r.readTime?Er(r.readTime):le.min(),o=Yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new xh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=_m(t,r.document),s=r.removedTargetIds||[];n=new xh([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new J$(i,s),a=r.targetId;n=new lk(a,o)}}return n}function c9(t,e){let n;if(e instanceof ec)n={update:A1(t,e.key,e.value)};else if(e instanceof ok)n={delete:h_(t,e.key)};else if(e instanceof Ks)n={update:A1(t,e.key,e.data),updateMask:v9(e.fieldMask)};else{if(!(e instanceof Q$))return ae();n={verify:h_(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof jd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Su)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Cu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $d)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:a9(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function h9(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Er(i.updateTime):Er(s);return o.isEqual(le.min())&&(o=Er(s)),new q$(o,i.transformResults||[])}(n,e))):[]}function d9(t,e){return{documents:[dk(t,e.path)]}}function f9(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=dk(t,i);const s=function(c){if(c.length!==0)return mk(Sr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:ho(m.field),direction:g9(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=u_(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function p9(t){let e=l9(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=pk(f);return m instanceof Sr&&BR(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(w){return new Ud(fo(w.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,Uf(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,_=f.values||[];return new Vd(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,_=f.values||[];return new Vd(_,m)}(n.endAt)),N$(e,i,o,s,a,"F",l,c)}function m9(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fo(n.unaryFilter.field);return _t.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fo(n.unaryFilter.field);return _t.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fo(n.unaryFilter.field);return _t.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fo(n.unaryFilter.field);return _t.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return _t.create(fo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Sr.create(n.compositeFilter.filters.map(r=>pk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function g9(t){return r9[t]}function _9(t){return i9[t]}function y9(t){return s9[t]}function ho(t){return{fieldPath:t.canonicalString()}}function fo(t){return Dt.fromServerFormat(t.fieldPath)}function mk(t){return t instanceof _t?function(n){if(n.op==="=="){if(f1(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NAN"}};if(d1(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(f1(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NAN"}};if(d1(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(n.field),op:_9(n.op),value:n.value}}}(t):t instanceof Sr?function(n){const r=n.getFilters().map(i=>mk(i));return r.length===1?r[0]:{compositeFilter:{op:y9(n.op),filters:r}}}(t):ae()}function v9(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ri{constructor(e,n,r,i,s=le.min(),o=le.min(),a=Jt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ri(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ri(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class E9{constructor(e){this.ct=e}}function w9(t){const e=p9({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?l_(e,e.limit,"L"):e}/**
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
 */class T9{constructor(){this._n=new I9}addToCollectionParentIndex(e,n){return this._n.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Ki.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Ki.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class I9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Mt(tt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Mt(tt.comparator)).toArray()}}/**
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
 */class pa{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new pa(0)}static Ln(){return new pa(-1)}}/**
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
 */class S9{constructor(){this.changes=new Da(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class C9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class x9{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Wl(r.mutation,i,Yn.empty(),vt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=ys();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Il();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ys();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ni();const o=Bl(),a=function(){return Bl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ks)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Wl(h.mutation,c,h.mutation.getFieldMask(),vt.now())):o.set(c.key,Yn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new C9(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bl();let i=new Xe((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Yn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||ge()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=XR();h.forEach(m=>{if(!s.has(m)){const _=ik(n.get(m),r.get(m));_!==null&&f.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):O$(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(ys());let a=-1,l=s;return o.next(c=>j.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ge())).next(h=>({batchId:a,changes:YR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=Il();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Il();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,l=>{const c=function(f,m){return new jf(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Yt.newInvalidDocument(h)))});let a=Il();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Wl(h.mutation,c,Yn.empty(),vt.now()),zf(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class A9{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return j.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Er(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:w9(i.bundledQuery),readTime:Er(i.readTime)}}(n)),j.resolve()}}/**
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
 */class R9{constructor(){this.overlays=new Xe(re.comparator),this.hr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ys();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=ys(),s=n.length+1,o=new re(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Xe((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=ys(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=ys(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return j.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new X$(n,r));let s=this.hr.get(n);s===void 0&&(s=ge(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class $v{constructor(){this.Pr=new Mt(St.Ir),this.Tr=new Mt(St.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new St(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new St(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new re(new tt([])),r=new St(n,e),i=new St(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new re(new tt([])),r=new St(n,e),i=new St(n,e+1);let s=ge();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new St(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class St{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return re.comparator(e.key,n.key)||xe(e.pr,n.pr)}static Er(e,n){return xe(e.pr,n.pr)||re.comparator(e.key,n.key)}}/**
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
 */class k9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Mt(St.Ir)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Y$(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new St(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new St(n,0),i=new St(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Mt(xe);return n.forEach(i=>{const s=new St(i,0),o=new St(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),j.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new St(new re(s),0);let a=new Mt(xe);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),j.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return j.forEach(n.mutations,i=>{const s=new St(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new St(n,0),i=this.wr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class P9{constructor(e){this.vr=e,this.docs=function(){return new Xe(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let r=ni();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Yt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ni();const o=n.path,a=new re(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||p$(f$(h),r)<=0||(i.has(h.key)||zf(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Fr(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new b9(this)}getSize(e){return j.resolve(this.size)}}class b9 extends S9{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class N9{constructor(e){this.persistence=e,this.Mr=new Da(n=>Lv(n),Mv),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new $v,this.targetCount=0,this.Lr=pa.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),j.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new pa(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.qn(n),j.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.Nr.containsKey(n))}}/**
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
 */class O9{constructor(e,n){this.Br={},this.overlays={},this.kr=new bv(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new N9(this),this.indexManager=new T9,this.remoteDocumentCache=function(i){return new P9(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new E9(n),this.$r=new A9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new R9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new k9(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new D9(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return j.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class D9 extends g${constructor(e){super(),this.currentSequenceNumber=e}}class zv{constructor(e){this.persistence=e,this.zr=new $v,this.jr=null}static Hr(e){return new zv(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),j.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Jr,r=>{const i=re.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return j.or([()=>j.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Bv{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Bv(e,n.fromCache,r,i)}}/**
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
 */class L9{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class M9{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return fM()?8:_$(Vt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new L9;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(hl()<=me.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",co(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),j.resolve()):(hl()<=me.DEBUG&&J("QueryEngine","Query:",co(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(hl()<=me.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",co(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vr(n))):j.resolve())}ji(e,n){if(_1(n))return j.resolve(null);let r=vr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=l_(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,l_(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return _1(n)||i.isEqual(le.min())?j.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?j.resolve(null):(hl()<=me.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),co(n)),this.es(e,o,n,d$(i,-1)).next(a=>a))})}Zi(e,n){let r=new Mt(KR(e));return n.forEach((i,s)=>{zf(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return hl()<=me.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",co(n)),this.zi.getDocumentsMatchingQuery(e,n,Ki.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class F9{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Xe(xe),this.rs=new Da(s=>Lv(s),Mv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new x9(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function V9(t,e,n,r){return new F9(t,e,n,r)}async function _k(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ge();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function U9(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let _=j.resolve();return m.forEach(w=>{_=_.next(()=>h.getEntry(l,w)).next(S=>{const R=c.docVersions.get(w);Ue(R!==null),S.version.compareTo(R)<0&&(f.applyToRemoteDocument(S,c),S.isValidDocument()&&(S.setReadTime(c.commitVersion),h.addEntry(S)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yk(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function j9(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Jt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(f,_),function(S,R,T){return S.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,_,h)&&a.push(n.Qr.updateTargetData(s,_))});let l=ni(),c=ge();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push($9(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(le.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function $9(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ni();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function z9(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function B9(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ri(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function f_(t,e,n){const r=ue(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Zu(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function R1(t,e,n){const r=ue(t);let i=le.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=ue(l),m=f.rs.get(h);return m!==void 0?j.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,vr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:ge())).next(a=>(W9(r,L$(e),a),{documents:a,hs:s})))}function W9(t,e,n){let r=t.ss.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class k1{constructor(){this.activeTargetIds=$$()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class H9{constructor(){this.no=new k1,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new k1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class q9{io(e){}shutdown(){}}/**
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
 */class P1{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){J("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){J("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Kc=null;function ym(){return Kc===null?Kc=function(){return 268435456+Math.round(2147483648*Math.random())}():Kc++,"0x"+Kc.toString(16)}/**
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
 */const G9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class K9{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Wt="WebChannelConnection";class Q9 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=ym(),l=this.vo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(J("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ca("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Na}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=G9[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ym();return new Promise((o,a)=>{const l=new PR;l.setWithCredentials(!0),l.listenOnce(NR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ih.NO_ERROR:const h=l.getResponseJson();J(Wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Ih.TIMEOUT:J(Wt,`RPC '${e}' ${s} timed out`),a(new ie(z.DEADLINE_EXCEEDED,"Request time out"));break;case Ih.HTTP_ERROR:const f=l.getStatus();if(J(Wt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const w=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(T)>=0?T:z.UNKNOWN}(_.status);a(new ie(w,_.message))}else a(new ie(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ie(z.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{J(Wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);J(Wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ym(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LR(),a=DR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new bR({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");J(Wt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,_=!1;const w=new K9({lo:R=>{_?J(Wt,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(J(Wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),J(Wt,`RPC '${e}' stream ${i} sending:`,R),f.send(R))},ho:()=>f.close()}),S=(R,T,g)=>{R.listen(T,I=>{try{g(I)}catch(O){setTimeout(()=>{throw O},0)}})};return S(f,Tl.EventType.OPEN,()=>{_||(J(Wt,`RPC '${e}' stream ${i} transport opened.`),w.mo())}),S(f,Tl.EventType.CLOSE,()=>{_||(_=!0,J(Wt,`RPC '${e}' stream ${i} transport closed`),w.po())}),S(f,Tl.EventType.ERROR,R=>{_||(_=!0,ca(Wt,`RPC '${e}' stream ${i} transport errored:`,R),w.po(new ie(z.UNAVAILABLE,"The operation could not be completed")))}),S(f,Tl.EventType.MESSAGE,R=>{var T;if(!_){const g=R.data[0];Ue(!!g);const I=g,O=I.error||((T=I[0])===null||T===void 0?void 0:T.error);if(O){J(Wt,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let V=function(C){const A=lt[C];if(A!==void 0)return ak(A)}(L),v=O.message;V===void 0&&(V=z.INTERNAL,v="Unknown error status: "+L+" with message "+O.message),_=!0,w.po(new ie(V,v)),f.close()}else J(Wt,`RPC '${e}' stream ${i} received:`,g),w.yo(g)}}),S(a,OR.STAT_EVENT,R=>{R.stat===r_.PROXY?J(Wt,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===r_.NOPROXY&&J(Wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function vm(){return typeof document<"u"?document:null}/**
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
 */function qf(t){return new o9(t,!0)}/**
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
 */class vk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&J("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class Ek{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new vk(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(ti(n.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ie(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Y9 extends Ek{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=u9(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?Er(o.readTime):le.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=d_(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=a_(l)?{documents:d9(s,l)}:{query:f9(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ck(s,o.resumeToken);const c=u_(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=zd(s,o.snapshotVersion.toTimestamp());const c=u_(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=m9(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=d_(this.serializer),n.removeTarget=e,this.i_(n)}}class X9 extends Ek{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=h9(e.writeResults,e.commitTime),r=Er(e.commitTime);return this.listener.A_(r,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=d_(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>c9(this.serializer,r))};this.i_(n)}}/**
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
 */class J9 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,c_(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ie(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,c_(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ie(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Z9{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(ti(n),this.y_=!1):J("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class e5{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Qs(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.M_.add(4),await nc(c),c.N_.set("Unknown"),c.M_.delete(4),await Gf(c)}(this))})}),this.N_=new Z9(r,i)}}async function Gf(t){if(Qs(t))for(const e of t.x_)await e(!0)}async function nc(t){for(const e of t.x_)await e(!1)}function wk(t,e){const n=ue(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Gv(n)?qv(n):La(n).Xo()&&Hv(n,e))}function Wv(t,e){const n=ue(t),r=La(n);n.F_.delete(e),r.Xo()&&Tk(n,e),n.F_.size===0&&(r.Xo()?r.n_():Qs(n)&&n.N_.set("Unknown"))}function Hv(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}La(t).P_(e)}function Tk(t,e){t.L_.xe(e),La(t).I_(e)}function qv(t){t.L_=new n9({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),La(t).start(),t.N_.w_()}function Gv(t){return Qs(t)&&!La(t).Zo()&&t.F_.size>0}function Qs(t){return ue(t).M_.size===0}function Ik(t){t.L_=void 0}async function t5(t){t.N_.set("Online")}async function n5(t){t.F_.forEach((e,n)=>{Hv(t,e)})}async function r5(t,e){Ik(t),Gv(t)?(t.N_.D_(e),qv(t)):t.N_.set("Unknown")}async function i5(t,e,n){if(t.N_.set("Online"),e instanceof uk&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bd(t,r)}else if(e instanceof xh?t.L_.Ke(e):e instanceof lk?t.L_.He(e):t.L_.We(e),!n.isEqual(le.min()))try{const r=await yk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(Jt.EMPTY_BYTE_STRING,h.snapshotVersion)),Tk(s,l);const f=new Ri(h.target,l,c,h.sequenceNumber);Hv(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Bd(t,r)}}async function Bd(t,e,n){if(!Zu(e))throw e;t.M_.add(1),await nc(t),t.N_.set("Offline"),n||(n=()=>yk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Gf(t)})}function Sk(t,e){return e().catch(n=>Bd(t,n,e))}async function Kf(t){const e=ue(t),n=Yi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;s5(e);)try{const i=await z9(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,o5(e,i)}catch(i){await Bd(e,i)}Ck(e)&&xk(e)}function s5(t){return Qs(t)&&t.v_.length<10}function o5(t,e){t.v_.push(e);const n=Yi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Ck(t){return Qs(t)&&!Yi(t).Zo()&&t.v_.length>0}function xk(t){Yi(t).start()}async function a5(t){Yi(t).V_()}async function l5(t){const e=Yi(t);for(const n of t.v_)e.d_(n.mutations)}async function u5(t,e,n){const r=t.v_.shift(),i=Vv.from(r,e,n);await Sk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Kf(t)}async function c5(t,e){e&&Yi(t).E_&&await async function(r,i){if(function(o){return Z$(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();Yi(r).t_(),await Sk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Kf(r)}}(t,e),Ck(t)&&xk(t)}async function b1(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Qs(n);n.M_.add(3),await nc(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Gf(n)}async function h5(t,e){const n=ue(t);e?(n.M_.delete(2),await Gf(n)):e||(n.M_.add(2),await nc(n),n.N_.set("Unknown"))}function La(t){return t.B_||(t.B_=function(n,r,i){const s=ue(n);return s.f_(),new Y9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:t5.bind(null,t),To:n5.bind(null,t),Ao:r5.bind(null,t),h_:i5.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Gv(t)?qv(t):t.N_.set("Unknown")):(await t.B_.stop(),Ik(t))})),t.B_}function Yi(t){return t.k_||(t.k_=function(n,r,i){const s=ue(n);return s.f_(),new X9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:a5.bind(null,t),Ao:c5.bind(null,t),R_:l5.bind(null,t),A_:u5.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Kf(t)):(await t.k_.stop(),t.v_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Kv{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Kv(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qv(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Zu(t))return new ie(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ho{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Il(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Ho(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ho)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ho;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class N1{constructor(){this.q_=new Xe(re.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ae():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ma{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ma(e,n,Ho.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$f(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class d5{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class f5{constructor(){this.queries=new Da(e=>GR(e),$f),this.onlineState="Unknown",this.z_=new Set}}async function p5(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new d5,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=Qv(o,`Initialization of query '${co(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Yv(n)}async function m5(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function g5(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&Yv(n)}function _5(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Yv(t){t.z_.forEach(e=>{e.next()})}var p_,O1;(O1=p_||(p_={})).J_="default",O1.Cache="cache";class y5{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ma(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ma.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==p_.Cache}}/**
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
 */class Ak{constructor(e){this.key=e}}class Rk{constructor(e){this.key=e}}class v5{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=KR(e),this.Ta=new Ho(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new N1,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),_=zf(this.query,f)?f:null,w=!!m&&this.mutatedKeys.has(m.key),S=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?w!==S&&(r.track({type:3,doc:_}),R=!0):this.Ra(m,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.Ia(_,l)>0||c&&this.Ia(_,c)<0)&&(a=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(l||c)&&(a=!0)),R&&(_?(o=o.add(_),s=S?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(_,w){const S=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return S(_)-S(w)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new ma(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new N1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Rk(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Ak(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ma.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class E5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class w5{constructor(e){this.key=e,this.wa=!1}}class T5{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Da(a=>GR(a),$f),this.Da=new Map,this.Ca=new Set,this.va=new Xe(re.comparator),this.Fa=new Map,this.Ma=new $v,this.xa={},this.Oa=new Map,this.Na=pa.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function I5(t,e,n=!0){const r=Dk(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await kk(r,e,n,!0),i}async function S5(t,e){const n=Dk(t);await kk(n,e,!0,!1)}async function kk(t,e,n,r){const i=await B9(t.localStore,vr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await C5(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&wk(t.remoteStore,i),a}async function C5(t,e,n,r,i){t.Ba=(f,m,_)=>async function(S,R,T,g){let I=R.view.da(T);I.Xi&&(I=await R1(S.localStore,R.query,!1).then(({documents:v})=>R.view.da(v,I)));const O=g&&g.targetChanges.get(R.targetId),L=g&&g.targetMismatches.get(R.targetId)!=null,V=R.view.applyChanges(I,S.isPrimaryClient,O,L);return L1(S,R.targetId,V.fa),V.snapshot}(t,f,m,_);const s=await R1(t.localStore,e,!0),o=new v5(e,s.hs),a=o.da(s.documents),l=tc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);L1(t,n,c.fa);const h=new E5(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function x5(t,e,n){const r=ue(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!$f(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await f_(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Wv(r.remoteStore,i.targetId),m_(r,i.targetId)}).catch(Ju)):(m_(r,i.targetId),await f_(r.localStore,i.targetId,!0))}async function A5(t,e){const n=ue(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Wv(n.remoteStore,r.targetId))}async function R5(t,e,n){const r=L5(t);try{const i=await function(o,a){const l=ue(o),c=vt.now(),h=a.reduce((_,w)=>_.add(w.key),ge());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let w=ni(),S=ge();return l.os.getEntries(_,h).next(R=>{w=R,w.forEach((T,g)=>{g.isValidDocument()||(S=S.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,w)).next(R=>{f=R;const T=[];for(const g of a){const I=K$(g,f.get(g.key).overlayedDocument);I!=null&&T.push(new Ks(g.key,I,jR(I.value.mapValue),Gr.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,T,a)}).next(R=>{m=R;const T=R.applyToLocalDocumentSet(f,S);return l.documentOverlayCache.saveOverlays(_,R.batchId,T)})}).then(()=>({batchId:m.batchId,changes:YR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Xe(xe)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await rc(r,i.changes),await Kf(r.remoteStore)}catch(i){const s=Qv(i,"Failed to persist write");n.reject(s)}}async function Pk(t,e){const n=ue(t);try{const r=await j9(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ue(o.wa):i.removedDocuments.size>0&&(Ue(o.wa),o.wa=!1))}),await rc(n,r,e)}catch(r){await Ju(r)}}function D1(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&Yv(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function k5(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Xe(re.comparator);o=o.insert(s,Yt.newNoDocument(s,le.min()));const a=ge().add(s),l=new Hf(le.min(),new Map,new Xe(xe),o,a);await Pk(r,l),r.va=r.va.remove(s),r.Fa.delete(e),Xv(r)}else await f_(r.localStore,e,!1).then(()=>m_(r,e,n)).catch(Ju)}async function P5(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await U9(n.localStore,e);Nk(n,r,null),bk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rc(n,i)}catch(i){await Ju(i)}}async function b5(t,e,n){const r=ue(t);try{const i=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ue(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);Nk(r,e,n),bk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await rc(r,i)}catch(i){await Ju(i)}}function bk(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Nk(t,e,n){const r=ue(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function m_(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Ok(t,r)})}function Ok(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Wv(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Xv(t))}function L1(t,e,n){for(const r of n)r instanceof Ak?(t.Ma.addReference(r.key,e),N5(t,r)):r instanceof Rk?(J("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Ok(t,r.key)):ae()}function N5(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(J("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Xv(t))}function Xv(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new re(tt.fromString(e)),r=t.Na.next();t.Fa.set(r,new w5(n)),t.va=t.va.insert(n,r),wk(t.remoteStore,new Ri(vr(Fv(n.path)),r,"TargetPurposeLimboResolution",bv.oe))}}async function rc(t,e,n){const r=ue(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=Bv.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=ue(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,m=>j.forEach(m.qi,_=>h.persistence.referenceDelegate.addReference(f,m.targetId,_)).next(()=>j.forEach(m.Qi,_=>h.persistence.referenceDelegate.removeReference(f,m.targetId,_)))))}catch(f){if(!Zu(f))throw f;J("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const _=h.ns.get(m),w=_.snapshotVersion,S=_.withLastLimboFreeSnapshotVersion(w);h.ns=h.ns.insert(m,S)}}}(r.localStore,s))}async function O5(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await _k(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new ie(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rc(n,r.us)}}function D5(t,e){const n=ue(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function Dk(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=D5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=k5.bind(null,e),e.Sa.h_=g5.bind(null,e.eventManager),e.Sa.ka=_5.bind(null,e.eventManager),e}function L5(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=P5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=b5.bind(null,e),e}class M1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return V9(this.persistence,new M9,e.initialUser,this.serializer)}createPersistence(e){return new O9(zv.Hr,this.serializer)}createSharedClientState(e){return new H9}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class M5{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>D1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=O5.bind(null,this.syncEngine),await h5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new f5}()}createDatastore(e){const n=qf(e.databaseInfo.databaseId),r=function(s){return new Q9(s)}(e.databaseInfo);return function(s,o,a,l){return new J9(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new e5(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>D1(this.syncEngine,n,0),function(){return P1.D()?new P1:new q9}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new T5(i,s,o,a,l,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ue(r);J("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await nc(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class F5{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ti("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class V5{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qt.UNAUTHENTICATED,this.clientId=FR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ie(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qv(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Em(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await _k(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function F1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await j5(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>b1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>b1(e.remoteStore,i)),t._onlineComponents=e}function U5(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function j5(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Em(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!U5(n))throw n;ca("Error using user provided cache. Falling back to memory cache: "+n),await Em(t,new M1)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Em(t,new M1);return t._offlineComponents}async function Lk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await F1(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await F1(t,new M5))),t._onlineComponents}function $5(t){return Lk(t).then(e=>e.syncEngine)}async function z5(t){const e=await Lk(t),n=e.eventManager;return n.onListen=I5.bind(null,e.syncEngine),n.onUnlisten=x5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=S5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=A5.bind(null,e.syncEngine),n}function B5(t,e,n={}){const r=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new F5({next:m=>{o.enqueueAndForget(()=>m5(s,f));const _=m.docs.has(a);!_&&m.fromCache?c.reject(new ie(z.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?c.reject(new ie(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new y5(Fv(a.path),h,{includeMetadataChanges:!0,ra:!0});return p5(s,f)}(await z5(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function Mk(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const V1=new Map;/**
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
 */function W5(t,e,n){if(!n)throw new ie(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function H5(t,e,n,r){if(e===!0&&r===!0)throw new ie(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function U1(t){if(!re.isDocumentKey(t))throw new ie(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function xu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ie(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jv(t);throw new ie(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class j1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ie(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ie(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}H5("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mk((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new j1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ie(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ie(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new j1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new r$;switch(r.type){case"firstParty":return new a$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ie(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=V1.get(n);r&&(J("ComponentProvider","Removing Datastore"),V1.delete(n),r.terminate())}(this),Promise.resolve()}}function q5(t,e,n,r={}){var i;const s=(t=xu(t,Zv))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ca("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qt.MOCK_USER;else{a=zy(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ie(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qt(c)}t._authCredentials=new i$(new MR(a,l))}}/**
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
 */class e0{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new e0(this.firestore,e,this._query)}}class Mn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Au(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mn(this.firestore,e,this._key)}}class Au extends e0{constructor(e,n,r){super(e,n,Fv(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mn(this.firestore,null,new re(e))}withConverter(e){return new Au(this.firestore,e,this._path)}}function Fk(t,e,...n){if(t=wt(t),arguments.length===1&&(e=FR.newId()),W5("doc","path",e),t instanceof Zv){const r=tt.fromString(e,...n);return U1(r),new Mn(t,null,new re(r))}{if(!(t instanceof Mn||t instanceof Au))throw new ie(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(tt.fromString(e,...n));return U1(r),new Mn(t.firestore,t instanceof Au?t.converter:null,new re(r))}}/**
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
 */class G5{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new vk(this,"async_queue_retry"),this.hu=()=>{const n=vm();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=vm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=vm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new zi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Zu(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ti("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Kv.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ae()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class t0 extends Zv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new G5}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Uk(this),this._firestoreClient.terminate()}}function K5(t,e){const n=typeof t=="object"?t:Af(),r=typeof t=="string"?t:e||"(default)",i=$u(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=jy("firestore");s&&q5(i,...s)}return i}function Vk(t){return t._firestoreClient||Uk(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Uk(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new E$(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Mk(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new V5(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class ga{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ga(Jt.fromBase64String(e))}catch(n){throw new ie(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ga(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class n0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class jk{constructor(e){this._methodName=e}}/**
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
 */class r0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
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
 */const Q5=/^__.*__$/;class Y5{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ks(e,this.data,this.fieldMask,n,this.fieldTransforms):new ec(e,this.data,n,this.fieldTransforms)}}function $k(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class i0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new i0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Wd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if($k(this.fu)&&Q5.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class X5{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||qf(e)}Fu(e,n,r,i=!1){return new i0({fu:e,methodName:n,vu:r,path:Dt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function J5(t){const e=t._freezeSettings(),n=qf(t._databaseId);return new X5(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Z5(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Hk("Data must be an object, but it was:",o,r);const a=Bk(r,o);let l,c;if(s.merge)l=new Yn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=e6(e,f,n);if(!o.contains(m))throw new ie(z.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);n6(h,m)||h.push(m)}l=new Yn(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new Y5(new Nn(a),l,c)}function zk(t,e){if(Wk(t=wt(t)))return Hk("Unsupported field value:",e,t),Bk(t,e);if(t instanceof jk)return function(r,i){if(!$k(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=zk(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return z$(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=vt.fromDate(r);return{timestampValue:zd(i.serializer,s)}}if(r instanceof vt){const s=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zd(i.serializer,s)}}if(r instanceof r0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ga)return{bytesValue:ck(i.serializer,r._byteString)};if(r instanceof Mn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:jv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Jv(r)}`)}(t,e)}function Bk(t,e){const n={};return VR(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oa(t,(r,i)=>{const s=zk(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Wk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof vt||t instanceof r0||t instanceof ga||t instanceof Mn||t instanceof jk)}function Hk(t,e,n){if(!Wk(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Jv(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function e6(t,e,n){if((e=wt(e))instanceof n0)return e._internalPath;if(typeof e=="string")return qk(t,e);throw Wd("Field path arguments must be of type string or ",t,!1,void 0,n)}const t6=new RegExp("[~\\*/\\[\\]]");function qk(t,e,n){if(e.search(t6)>=0)throw Wd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new n0(...e.split("."))._internalPath}catch{throw Wd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ie(z.INVALID_ARGUMENT,a+t+l)}function n6(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Gk{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new r6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kk("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class r6 extends Gk{data(){return super.data()}}function Kk(t,e){return typeof e=="string"?qk(t,e):e instanceof n0?e._internalPath:e._delegate._internalPath}class i6{convertValue(e,n="none"){switch(js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ut(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Oa(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new r0(ut(e.latitude),ut(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ov(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wu(e));default:return null}}convertTimestamp(e){const n=Qi(e);return new vt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=tt.fromString(e);Ue(gk(r));const i=new Tu(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||ti(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function s6(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class o6{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qk extends Gk{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new a6(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kk("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class a6 extends Qk{data(e={}){return super.data(e)}}/**
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
 */function l6(t){t=xu(t,Mn);const e=xu(t.firestore,t0);return B5(Vk(e),t._key).then(n=>d6(e,t,n))}class u6 extends i6{constructor(e){super(),this.firestore=e}convertBytes(e){return new ga(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mn(this.firestore,null,n)}}function c6(t,e,n){t=xu(t,Mn);const r=xu(t.firestore,t0),i=s6(t.converter,e,n);return h6(r,[Z5(J5(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Gr.none())])}function h6(t,e){return function(r,i){const s=new zi;return r.asyncQueue.enqueueAndForget(async()=>R5(await $5(r),i,s)),s.promise}(Vk(t),e)}function d6(t,e,n){const r=n.docs.get(e._key),i=new u6(t);return new Qk(t,i,e._key,r,new o6(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Na=i})(es),Hi(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new t0(new s$(r.getProvider("auth-internal")),new u$(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ie(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tu(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ln(l1,"4.6.3",e),Ln(l1,"4.6.3","esm2017")})();/**
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
 */const Yk="firebasestorage.googleapis.com",f6="storageBucket",p6=2*60*1e3,m6=10*60*1e3;/**
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
 */class Ar extends xr{constructor(e,n,r=0){super(wm(e),`Firebase Storage: ${n} (${wm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ar.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Cr;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Cr||(Cr={}));function wm(t){return"storage/"+t}function g6(){const t="An unknown error occurred, please check the error payload for server response.";return new Ar(Cr.UNKNOWN,t)}function _6(){return new Ar(Cr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function y6(){return new Ar(Cr.CANCELED,"User canceled the upload/download.")}function v6(t){return new Ar(Cr.INVALID_URL,"Invalid URL '"+t+"'.")}function E6(t){return new Ar(Cr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function $1(t){return new Ar(Cr.INVALID_ARGUMENT,t)}function Xk(){return new Ar(Cr.APP_DELETED,"The Firebase app was deleted.")}function w6(t){return new Ar(Cr.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(r.path==="")return r;throw E6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),w={bucket:1,path:3},S=n===Yk?"(?:storage.googleapis.com|storage.cloud.google.com)":n,R="([^?#]*)",T=new RegExp(`^https?://${S}/${i}/${R}`,"i"),I=[{regex:a,indices:l,postModify:s},{regex:_,indices:w,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<I.length;O++){const L=I[O],V=L.regex.exec(e);if(V){const v=V[L.indices.bucket];let E=V[L.indices.path];E||(E=""),r=new Xn(v,E),L.postModify(r);break}}if(r==null)throw v6(e);return r}}class T6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function I6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...R){c||(c=!0,e.apply(null,R))}function f(R){i=setTimeout(()=>{i=null,t(_,l())},R)}function m(){s&&clearTimeout(s)}function _(R,...T){if(c){m();return}if(R){m(),h.call(null,R,...T);return}if(l()||o){m(),h.call(null,R,...T);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let w=!1;function S(R){w||(w=!0,m(),!c&&(i!==null?(R||(a=2),clearTimeout(i),f(0)):R||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,S(!0)},n),S}function S6(t){t(!1)}/**
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
 */function C6(t){return t!==void 0}function z1(t,e,n,r){if(r<e)throw $1(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw $1(`Invalid value for '${t}'. Expected ${n} or less.`)}function x6(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Hd;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Hd||(Hd={}));/**
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
 */function A6(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class R6{constructor(e,n,r,i,s,o,a,l,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,w)=>{this.resolve_=_,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Qc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Hd.NO_ERROR,l=s.getStatus();if(!a||A6(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Hd.ABORT;r(!1,new Qc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Qc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());C6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=g6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Xk():y6();o(l)}else{const l=_6();o(l)}};this.canceled_?n(!1,new Qc(!1,null,!0)):this.backoffId_=I6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&S6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Qc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function k6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function P6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function b6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function N6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function O6(t,e,n,r,i,s,o=!0){const a=x6(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return b6(c,e),k6(c,n),P6(c,s),N6(c,r),new R6(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function D6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function L6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class qd{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new qd(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return L6(this._location.path)}get storage(){return this._service}get parent(){const e=D6(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new qd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw w6(e)}}function B1(t,e){const n=e==null?void 0:e[f6];return n==null?null:Xn.makeFromBucketSpec(n,t)}function M6(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:zy(i,t.app.options.projectId))}class F6{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Yk,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=p6,this._maxUploadRetryTime=m6,this._requests=new Set,i!=null?this._bucket=Xn.makeFromBucketSpec(i,this._host):this._bucket=B1(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=B1(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){z1("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){z1("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qd(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new T6(Xk());{const o=O6(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const W1="@firebase/storage",H1="0.12.5";/**
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
 */const Jk="storage";function V6(t=Af(),e){t=wt(t);const r=$u(t,Jk).getImmediate({identifier:e}),i=jy("storage");return i&&U6(r,...i),r}function U6(t,e,n,r={}){M6(t,e,n,r)}function j6(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new F6(n,r,i,e,es)}function $6(){Hi(new Jr(Jk,j6,"PUBLIC").setMultipleInstances(!0)),Ln(W1,H1,""),Ln(W1,H1,"esm2017")}$6();const z6={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET,databaseURL:{}.VITE_FIREBASE_DATABASE_URL,messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID},B6=Px(z6),Yc=Zy(B6),W6=e$();V6();const Zk=K5(),eP=$.createContext(),H6=({children:t})=>{const[e,n]=$.useState(null),r=(o,a)=>PV(Yc,o,a),i=(o,a)=>bV(Yc,o,a),s=()=>MV(Yc);return $.useEffect(()=>nA(Yc,a=>{n(a)}),[]),P.jsx(eP.Provider,{value:{currentUser:e,signup:r,login:i,logout:s},children:t})},ic=()=>$.useContext(eP),q6=({isModalOpen:t,closeModal:e})=>{const{login:n}=ic(),r=If().shape({email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:dr().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Py({resolver:by(r),mode:"onChange"}),a=async({email:l,password:c},h)=>{h.preventDefault();try{await n(l,c),e()}catch(f){console.error("Error logging in:",f)}};return t?P.jsx(P.Fragment,{children:t&&P.jsx(Fy,{onClose:e,children:P.jsxs(XL,{children:[P.jsx(JL,{onClick:e,children:P.jsx(Vy,{size:32})}),P.jsxs(ZL,{children:[P.jsx("h2",{children:"Log In"}),P.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),P.jsxs(eM,{onSubmit:s(a),noValidate:!0,children:[P.jsxs(Yw,{children:[P.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),P.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&P.jsx(Xw,{children:o.email.message})]}),P.jsxs(Yw,{children:[P.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),P.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&P.jsx(Xw,{children:o.phone.message})]}),P.jsx(tM,{type:"submit",children:"Log In"})]})]})})}):null},G6=ne.div`
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
`,K6=ne.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,Q6=ne.div`
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
`,Y6=ne.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,Tm=ne.div`
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
`,Im=ne.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,X6=ne.button`
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
`,J6=({isModalOpen:t,closeModal:e})=>{const{signup:n}=ic(),r=If().shape({name:dr().min(2,"Name must be at least 2 characters").required("Name is required"),email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:dr().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Py({resolver:by(r),mode:"onChange"}),a=async({name:l,email:c,password:h},f)=>{f.preventDefault();try{await n(c,h);const _=Zy().currentUser;await OV(_,{displayName:l}),await c6(Fk(Zk,"users",_.uid),{email:_.email,name:_.displayName,id:_.uid,favorites:[]}),e(),alert("Form submitted successfully!")}catch(m){console.error("Error signing up:",m)}};return t?P.jsx(P.Fragment,{children:t&&P.jsx(Fy,{onClose:e,children:P.jsxs(G6,{children:[P.jsx(K6,{onClick:e,children:P.jsx(Vy,{size:32})}),P.jsxs(Q6,{children:[P.jsx("h2",{children:"Sign Up"}),P.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),P.jsxs(Y6,{onSubmit:s(a),noValidate:!0,children:[P.jsxs(Tm,{children:[P.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),P.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&P.jsx(Im,{children:o.name.message})]}),P.jsxs(Tm,{children:[P.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),P.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&P.jsx(Im,{children:o.email.message})]}),P.jsxs(Tm,{children:[P.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),P.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&P.jsx(Im,{children:o.phone.message})]}),P.jsx(X6,{type:"submit",children:"Sing Up"})]})]})})}):null},Z6=()=>{const[t,e]=$.useState(!1),[n,r]=$.useState(!1),i=Ta(),{currentUser:s,logout:o}=ic(),a=()=>{e(!0)},l=()=>{e(!1)},c=()=>{r(!0)},h=()=>{r(!1)},f=m=>i.pathname===m;return P.jsxs(mD,{children:[P.jsxs(gD,{to:"/home",children:[P.jsx("img",{src:ED,alt:"Logo",width:28,height:28}),P.jsx("span",{children:"LearnLingo"})]}),P.jsxs(_D,{children:[P.jsx(Qp,{to:"/home",className:f("/home")?"active":"",children:"Home"}),P.jsx(Qp,{to:"/teachers",className:f("/teachers")?"active":"",children:"Teachers"}),s&&P.jsx(Qp,{to:"/favorites",className:f("/favorites")?"active":"",children:"Favorites"})]}),P.jsx(yD,{children:s?P.jsxs(Pw,{onClick:o,children:[s.displayName,P.jsx(kD,{size:20,color:"#f4c550"})]}):P.jsxs(P.Fragment,{children:[P.jsxs(Pw,{onClick:a,children:[P.jsx(RD,{size:20,color:"#f4c550"}),P.jsx("span",{children:"Login"})]}),t&&P.jsx(q6,{isModalOpen:t,closeModal:l}),P.jsx(vD,{onClick:c,children:"Registration"}),n&&P.jsx(J6,{isModalOpen:n,closeModal:h})]})})]})},ez=ne.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
  width: 1440px;
  margin: 0 auto;
`,tz=({children:t})=>P.jsx(ez,{children:t}),nz=()=>P.jsxs(tz,{children:[P.jsx(Z6,{}),P.jsx($.Suspense,{fallback:null,children:P.jsx(k_,{})})]});function g_(){return g_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},g_.apply(this,arguments)}function rz(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function iz(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var sz=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(iz(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=rz(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Ht="-ms-",Gd="-moz-",Se="-webkit-",tP="comm",s0="rule",o0="decl",oz="@import",nP="@keyframes",az="@layer",lz=Math.abs,Qf=String.fromCharCode,uz=Object.assign;function cz(t,e){return Ot(t,0)^45?(((e<<2^Ot(t,0))<<2^Ot(t,1))<<2^Ot(t,2))<<2^Ot(t,3):0}function rP(t){return t.trim()}function hz(t,e){return(t=e.exec(t))?t[0]:t}function Ce(t,e,n){return t.replace(e,n)}function __(t,e){return t.indexOf(e)}function Ot(t,e){return t.charCodeAt(e)|0}function Ru(t,e,n){return t.slice(e,n)}function lr(t){return t.length}function a0(t){return t.length}function Xc(t,e){return e.push(t),t}function dz(t,e){return t.map(e).join("")}var Yf=1,_a=1,iP=0,_n=0,ht=0,Ma="";function Xf(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Yf,column:_a,length:o,return:""}}function dl(t,e){return uz(Xf("",null,null,"",null,null,0),t,{length:-t.length},e)}function fz(){return ht}function pz(){return ht=_n>0?Ot(Ma,--_n):0,_a--,ht===10&&(_a=1,Yf--),ht}function Cn(){return ht=_n<iP?Ot(Ma,_n++):0,_a++,ht===10&&(_a=1,Yf++),ht}function wr(){return Ot(Ma,_n)}function Ah(){return _n}function sc(t,e){return Ru(Ma,t,e)}function ku(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function sP(t){return Yf=_a=1,iP=lr(Ma=t),_n=0,[]}function oP(t){return Ma="",t}function Rh(t){return rP(sc(_n-1,y_(t===91?t+2:t===40?t+1:t)))}function mz(t){for(;(ht=wr())&&ht<33;)Cn();return ku(t)>2||ku(ht)>3?"":" "}function gz(t,e){for(;--e&&Cn()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return sc(t,Ah()+(e<6&&wr()==32&&Cn()==32))}function y_(t){for(;Cn();)switch(ht){case t:return _n;case 34:case 39:t!==34&&t!==39&&y_(ht);break;case 40:t===41&&y_(t);break;case 92:Cn();break}return _n}function _z(t,e){for(;Cn()&&t+ht!==47+10;)if(t+ht===42+42&&wr()===47)break;return"/*"+sc(e,_n-1)+"*"+Qf(t===47?t:Cn())}function yz(t){for(;!ku(wr());)Cn();return sc(t,_n)}function vz(t){return oP(kh("",null,null,null,[""],t=sP(t),0,[0],t))}function kh(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,f=o,m=0,_=0,w=0,S=1,R=1,T=1,g=0,I="",O=i,L=s,V=r,v=I;R;)switch(w=g,g=Cn()){case 40:if(w!=108&&Ot(v,f-1)==58){__(v+=Ce(Rh(g),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:v+=Rh(g);break;case 9:case 10:case 13:case 32:v+=mz(w);break;case 92:v+=gz(Ah()-1,7);continue;case 47:switch(wr()){case 42:case 47:Xc(Ez(_z(Cn(),Ah()),e,n),l);break;default:v+="/"}break;case 123*S:a[c++]=lr(v)*T;case 125*S:case 59:case 0:switch(g){case 0:case 125:R=0;case 59+h:T==-1&&(v=Ce(v,/\f/g,"")),_>0&&lr(v)-f&&Xc(_>32?G1(v+";",r,n,f-1):G1(Ce(v," ","")+";",r,n,f-2),l);break;case 59:v+=";";default:if(Xc(V=q1(v,e,n,c,h,i,a,I,O=[],L=[],f),s),g===123)if(h===0)kh(v,e,V,V,O,s,f,a,L);else switch(m===99&&Ot(v,3)===110?100:m){case 100:case 108:case 109:case 115:kh(t,V,V,r&&Xc(q1(t,V,V,0,0,i,a,I,i,O=[],f),L),i,L,f,a,r?O:L);break;default:kh(v,V,V,V,[""],L,0,a,L)}}c=h=_=0,S=T=1,I=v="",f=o;break;case 58:f=1+lr(v),_=w;default:if(S<1){if(g==123)--S;else if(g==125&&S++==0&&pz()==125)continue}switch(v+=Qf(g),g*S){case 38:T=h>0?1:(v+="\f",-1);break;case 44:a[c++]=(lr(v)-1)*T,T=1;break;case 64:wr()===45&&(v+=Rh(Cn())),m=wr(),h=f=lr(I=v+=yz(Ah())),g++;break;case 45:w===45&&lr(v)==2&&(S=0)}}return s}function q1(t,e,n,r,i,s,o,a,l,c,h){for(var f=i-1,m=i===0?s:[""],_=a0(m),w=0,S=0,R=0;w<r;++w)for(var T=0,g=Ru(t,f+1,f=lz(S=o[w])),I=t;T<_;++T)(I=rP(S>0?m[T]+" "+g:Ce(g,/&\f/g,m[T])))&&(l[R++]=I);return Xf(t,e,n,i===0?s0:a,l,c,h)}function Ez(t,e,n){return Xf(t,e,n,tP,Qf(fz()),Ru(t,2,-2),0)}function G1(t,e,n,r){return Xf(t,e,n,o0,Ru(t,0,r),Ru(t,r+1,-1),r)}function qo(t,e){for(var n="",r=a0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function wz(t,e,n,r){switch(t.type){case az:if(t.children.length)break;case oz:case o0:return t.return=t.return||t.value;case tP:return"";case nP:return t.return=t.value+"{"+qo(t.children,r)+"}";case s0:t.value=t.props.join(",")}return lr(n=qo(t.children,r))?t.return=t.value+"{"+n+"}":""}function Tz(t){var e=a0(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Iz(t){return function(e){e.root||(e=e.return)&&t(e)}}var Sz=function(e,n,r){for(var i=0,s=0;i=s,s=wr(),i===38&&s===12&&(n[r]=1),!ku(s);)Cn();return sc(e,_n)},Cz=function(e,n){var r=-1,i=44;do switch(ku(i)){case 0:i===38&&wr()===12&&(n[r]=1),e[r]+=Sz(_n-1,n,r);break;case 2:e[r]+=Rh(i);break;case 4:if(i===44){e[++r]=wr()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Qf(i)}while(i=Cn());return e},xz=function(e,n){return oP(Cz(sP(e),n))},K1=new WeakMap,Az=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!K1.get(r))&&!i){K1.set(e,!0);for(var s=[],o=xz(n,s),a=r.props,l=0,c=0;l<o.length;l++)for(var h=0;h<a.length;h++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[h]):a[h]+" "+o[l]}}},Rz=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function aP(t,e){switch(cz(t,e)){case 5103:return Se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+t+Gd+t+Ht+t+t;case 6828:case 4268:return Se+t+Ht+t+t;case 6165:return Se+t+Ht+"flex-"+t+t;case 5187:return Se+t+Ce(t,/(\w+).+(:[^]+)/,Se+"box-$1$2"+Ht+"flex-$1$2")+t;case 5443:return Se+t+Ht+"flex-item-"+Ce(t,/flex-|-self/,"")+t;case 4675:return Se+t+Ht+"flex-line-pack"+Ce(t,/align-content|flex-|-self/,"")+t;case 5548:return Se+t+Ht+Ce(t,"shrink","negative")+t;case 5292:return Se+t+Ht+Ce(t,"basis","preferred-size")+t;case 6060:return Se+"box-"+Ce(t,"-grow","")+Se+t+Ht+Ce(t,"grow","positive")+t;case 4554:return Se+Ce(t,/([^-])(transform)/g,"$1"+Se+"$2")+t;case 6187:return Ce(Ce(Ce(t,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),t,"")+t;case 5495:case 3959:return Ce(t,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return Ce(Ce(t,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+Ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+t+t;case 4095:case 3583:case 4068:case 2532:return Ce(t,/(.+)-inline(.+)/,Se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lr(t)-1-e>6)switch(Ot(t,e+1)){case 109:if(Ot(t,e+4)!==45)break;case 102:return Ce(t,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+Gd+(Ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~__(t,"stretch")?aP(Ce(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ot(t,e+1)!==115)break;case 6444:switch(Ot(t,lr(t)-3-(~__(t,"!important")&&10))){case 107:return Ce(t,":",":"+Se)+t;case 101:return Ce(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Se+(Ot(t,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+Ht+"$2box$3")+t}break;case 5936:switch(Ot(t,e+11)){case 114:return Se+t+Ht+Ce(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Se+t+Ht+Ce(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Se+t+Ht+Ce(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Se+t+Ht+t+t}return t}var kz=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case o0:e.return=aP(e.value,e.length);break;case nP:return qo([dl(e,{value:Ce(e.value,"@","@"+Se)})],i);case s0:if(e.length)return dz(e.props,function(s){switch(hz(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return qo([dl(e,{props:[Ce(s,/:(read-\w+)/,":"+Gd+"$1")]})],i);case"::placeholder":return qo([dl(e,{props:[Ce(s,/:(plac\w+)/,":"+Se+"input-$1")]}),dl(e,{props:[Ce(s,/:(plac\w+)/,":"+Gd+"$1")]}),dl(e,{props:[Ce(s,/:(plac\w+)/,Ht+"input-$1")]})],i)}return""})}},Pz=[kz],bz=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(S){var R=S.getAttribute("data-emotion");R.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var i=e.stylisPlugins||Pz,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var R=S.getAttribute("data-emotion").split(" "),T=1;T<R.length;T++)s[R[T]]=!0;a.push(S)});var l,c=[Az,Rz];{var h,f=[wz,Iz(function(S){h.insert(S)})],m=Tz(c.concat(i,f)),_=function(R){return qo(vz(R),m)};l=function(R,T,g,I){h=g,_(R?R+"{"+T.styles+"}":T.styles),I&&(w.inserted[T.name]=!0)}}var w={key:n,sheet:new sz({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return w.sheet.hydrate(a),w},Nz=!0;function Oz(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var lP=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Nz===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Dz=function(e,n,r){lP(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Lz(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Mz=/[A-Z]|^ms/g,Fz=/_EMO_([^_]+?)_([^]*?)_EMO_/g,uP=function(e){return e.charCodeAt(1)===45},Q1=function(e){return e!=null&&typeof e!="boolean"},Sm=AC(function(t){return uP(t)?t:t.replace(Mz,"-$&").toLowerCase()}),Y1=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Fz,function(r,i,s){return ur={name:i,styles:s,next:ur},i})}return DC[e]!==1&&!uP(e)&&typeof n=="number"&&n!==0?n+"px":n};function Pu(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ur={name:n.name,styles:n.styles,next:ur},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ur={name:r.name,styles:r.styles,next:ur},r=r.next;var i=n.styles+";";return i}return Vz(t,e,n)}case"function":{if(t!==void 0){var s=ur,o=n(t);return ur=s,Pu(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function Vz(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Pu(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":Q1(o)&&(r+=Sm(s)+":"+Y1(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)Q1(o[a])&&(r+=Sm(s)+":"+Y1(s,o[a])+";");else{var l=Pu(t,e,o);switch(s){case"animation":case"animationName":{r+=Sm(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var X1=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ur,Uz=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";ur=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Pu(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Pu(r,n,e[a]),i&&(s+=o[a]);X1.lastIndex=0;for(var l="",c;(c=X1.exec(s))!==null;)l+="-"+c[1];var h=Lz(s)+l;return{name:h,styles:s,next:ur}},jz=function(e){return e()},$z=xm["useInsertionEffect"]?xm["useInsertionEffect"]:!1,zz=$z||jz,cP=$.createContext(typeof HTMLElement<"u"?bz({key:"css"}):null);cP.Provider;var Bz=function(e){return $.forwardRef(function(n,r){var i=$.useContext(cP);return e(n,i,r)})},Wz=$.createContext({}),Hz=dO,qz=function(e){return e!=="theme"},J1=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Hz:qz},Z1=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},Gz=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return lP(n,r,i),zz(function(){return Dz(n,r,i)}),null},Kz=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=Z1(e,n,r),l=a||J1(i),c=!l("as");return function(){var h=arguments,f=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)f.push.apply(f,h);else{f.push(h[0][0]);for(var m=h.length,_=1;_<m;_++)f.push(h[_],h[0][_])}var w=Bz(function(S,R,T){var g=c&&S.as||i,I="",O=[],L=S;if(S.theme==null){L={};for(var V in S)L[V]=S[V];L.theme=$.useContext(Wz)}typeof S.className=="string"?I=Oz(R.registered,O,S.className):S.className!=null&&(I=S.className+" ");var v=Uz(f.concat(O),R.registered,L);I+=R.key+"-"+v.name,o!==void 0&&(I+=" "+o);var E=c&&a===void 0?J1(g):l,C={};for(var A in S)c&&A==="as"||E(A)&&(C[A]=S[A]);return C.className=I,C.ref=T,$.createElement($.Fragment,null,$.createElement(Gz,{cache:R,serialized:v,isStringTag:typeof g=="string"}),$.createElement(g,C))});return w.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",w.defaultProps=e.defaultProps,w.__emotion_real=w,w.__emotion_base=i,w.__emotion_styles=f,w.__emotion_forwardProp=a,Object.defineProperty(w,"toString",{value:function(){return"."+o}}),w.withComponent=function(S,R){return t(S,g_({},n,R,{shouldForwardProp:Z1(w,R,!0)})).apply(void 0,f)},w}},Qz=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],bu=Kz.bind();Qz.forEach(function(t){bu[t]=bu(t)});const Yz=bu.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,Xz=bu.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,Jz=()=>P.jsx(Yz,{children:P.jsx(Xz,{children:"404"})});const Zz=bu.div`
  width: 100%;
  height: 100vh;
`,eB="/LearnLingo/assets/face_x1-b65e11cd.png",tB="/LearnLingo/assets/iMac-8b3b4ee4.png",nB=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`,rB=ne.div`
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
`,iB=ne(Jd)`
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
`,sB=ne.div`
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
`,oB=ne.ul`
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
`;var l0={},Kd=function(){return Kd=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Kd.apply(this,arguments)},aB=function(){function t(e,n,r){var i=this;this.endVal=n,this.options=r,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){i.startTime||(i.startTime=s);var o=s-i.startTime;i.remaining=i.duration-o,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(o,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(o,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(o/i.duration);var a=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=a?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),o<i.duration?i.rAF=requestAnimationFrame(i.count):i.finalEndVal!==null?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(s){var o,a,l,c,h=s<0?"-":"";o=Math.abs(s).toFixed(i.options.decimalPlaces);var f=(o+="").split(".");if(a=f[0],l=f.length>1?i.options.decimal+f[1]:"",i.options.useGrouping){c="";for(var m=3,_=0,w=0,S=a.length;w<S;++w)i.options.useIndianSeparators&&w===4&&(m=2,_=1),w!==0&&_%m==0&&(c=i.options.separator+c),_++,c=a[S-w-1]+c;a=c}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,function(R){return i.options.numerals[+R]}),l=l.replace(/[0-9]/g,function(R){return i.options.numerals[+R]})),h+i.options.prefix+a+l+i.options.suffix},this.easeOutExpo=function(s,o,a,l){return a*(1-Math.pow(2,-10*s/l))*1024/1023+o},this.options=Kd(Kd({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),i=r.top+window.pageYOffset,s=r.top+r.height+window.pageYOffset;s<n&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||i>n)&&!e.paused&&e.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var r=this.countDown?1:-1;this.endVal=e+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(e){var n;if(this.el){var r=this.formattingFn(e);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,r):this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r}},t.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},t.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();const lB=Object.freeze(Object.defineProperty({__proto__:null,CountUp:aB},Symbol.toStringTag,{value:"Module"})),uB=jP(lB);Object.defineProperty(l0,"__esModule",{value:!0});var At=$,cB=uB;function hB(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(h){c=!0,i=h}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return a}}function eI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Qd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?eI(Object(n),!0).forEach(function(r){pB(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):eI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dB(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fB(t){var e=dB(t,"string");return typeof e=="symbol"?e:String(e)}function pB(t,e,n){return e=fB(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function v_(){return v_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v_.apply(this,arguments)}function mB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hP(t,e){if(t==null)return{};var n=mB(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function gB(t,e){return _B(t)||hB(t,e)||yB(t,e)||vB()}function _B(t){if(Array.isArray(t))return t}function yB(t,e){if(t){if(typeof t=="string")return tI(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tI(t,e)}}function tI(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function vB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var EB=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?At.useLayoutEffect:At.useEffect;function Bn(t){var e=At.useRef(t);return EB(function(){e.current=t}),At.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var wB=function(e,n){var r=n.decimal,i=n.decimals,s=n.duration,o=n.easingFn,a=n.end,l=n.formattingFn,c=n.numerals,h=n.prefix,f=n.separator,m=n.start,_=n.suffix,w=n.useEasing,S=n.useGrouping,R=n.useIndianSeparators,T=n.enableScrollSpy,g=n.scrollSpyDelay,I=n.scrollSpyOnce,O=n.plugin;return new cB.CountUp(e,a,{startVal:m,duration:s,decimal:r,decimalPlaces:i,easingFn:o,formattingFn:l,numerals:c,separator:f,prefix:h,suffix:_,plugin:O,useEasing:w,useIndianSeparators:R,useGrouping:S,enableScrollSpy:T,scrollSpyDelay:g,scrollSpyOnce:I})},TB=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],IB={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},dP=function(e){var n=Object.fromEntries(Object.entries(e).filter(function(C){var A=gB(C,2),k=A[1];return k!==void 0})),r=At.useMemo(function(){return Qd(Qd({},IB),n)},[e]),i=r.ref,s=r.startOnMount,o=r.enableReinitialize,a=r.delay,l=r.onEnd,c=r.onStart,h=r.onPauseResume,f=r.onReset,m=r.onUpdate,_=hP(r,TB),w=At.useRef(),S=At.useRef(),R=At.useRef(!1),T=Bn(function(){return wB(typeof i=="string"?i:i.current,_)}),g=Bn(function(C){var A=w.current;if(A&&!C)return A;var k=T();return w.current=k,k}),I=Bn(function(){var C=function(){return g(!0).start(function(){l==null||l({pauseResume:O,reset:L,start:v,update:V})})};a&&a>0?S.current=setTimeout(C,a*1e3):C(),c==null||c({pauseResume:O,reset:L,update:V})}),O=Bn(function(){g().pauseResume(),h==null||h({reset:L,start:v,update:V})}),L=Bn(function(){g().el&&(S.current&&clearTimeout(S.current),g().reset(),f==null||f({pauseResume:O,start:v,update:V}))}),V=Bn(function(C){g().update(C),m==null||m({pauseResume:O,reset:L,start:v})}),v=Bn(function(){L(),I()}),E=Bn(function(C){s&&(C&&L(),I())});return At.useEffect(function(){R.current?o&&E(!0):(R.current=!0,E())},[o,R,E,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),At.useEffect(function(){return function(){L()}},[L]),{start:v,pauseResume:O,reset:L,update:V,getCountUp:g}},SB=["className","redraw","containerProps","children","style"],CB=function(e){var n=e.className,r=e.redraw,i=e.containerProps,s=e.children,o=e.style,a=hP(e,SB),l=At.useRef(null),c=At.useRef(!1),h=dP(Qd(Qd({},a),{},{ref:l,startOnMount:typeof s!="function"||e.delay===0,enableReinitialize:!1})),f=h.start,m=h.reset,_=h.update,w=h.pauseResume,S=h.getCountUp,R=Bn(function(){f()}),T=Bn(function(O){e.preserveValue||m(),_(O)}),g=Bn(function(){if(typeof e.children=="function"&&!(l.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}S()});At.useEffect(function(){g()},[g]),At.useEffect(function(){c.current&&T(e.end)},[e.end,T]);var I=r&&e;return At.useEffect(function(){r&&c.current&&R()},[R,r,I]),At.useEffect(function(){!r&&c.current&&R()},[R,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),At.useEffect(function(){c.current=!0},[]),typeof s=="function"?s({countUpRef:l,start:f,reset:m,update:_,pauseResume:w,getCountUp:S}):At.createElement("span",v_({className:n,ref:l,style:o},i),typeof e.start<"u"?S().formattingFn(e.start):"")},xB=l0.default=CB;l0.useCountUp=dP;const nI=()=>{const t=[{value:32e3,text:"Experienced tutors"},{value:3e5,text:"5-star tutor reviews"},{value:120,text:"Subjects taught"},{value:200,text:"Tutor nationalities"}];return P.jsxs(P.Fragment,{children:[P.jsxs(nB,{children:[P.jsxs(rB,{children:[P.jsxs("h1",{children:["Unlock your potential with the best ",P.jsx("span",{children:"language"})," tutors"]}),P.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),P.jsx(iB,{to:"/teachers",children:"Get started"})]}),P.jsxs(sB,{children:[P.jsx("img",{src:eB,width:339,height:339,alt:""}),P.jsx("img",{src:tB,width:360,height:247,alt:""})]})]}),P.jsx(oB,{children:t.map((e,n)=>P.jsxs("li",{children:[P.jsxs("h3",{children:[P.jsx(xB,{start:0,end:e.value,duration:2.75,separator:","})," +"]}),P.jsx("p",{children:e.text})]},n))})]})},AB=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 48px;
  padding: 24px;
  width: 1184px;
`,RB=ne.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
`,kB=ne.div`
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
`,PB=ne.div`
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
`,Jc=ne.p`
  color: var(--subtitle-text-color);
  padding: 0;
  margin: 0;
`,bB=ne(Jd)`
  text-decoration: underline;
  font-style: 16px;
  line-height: 24px;
  margin: 8px 0 24px 0;
`,NB=ne.ul`
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
`,OB=ne.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
`,DB=ne.button`
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
`;function fP(t){return xa({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function LB(t){return xa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"},child:[]}]})(t)}function MB(t){return xa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}const FB=ne.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
  padding: 0;
`,VB=ne.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px;
  padding: 0;
`,UB=ne.div`
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
`,jB=ne.div`
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
`,$B=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 8px;
  padding: 0;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
`,zB=({reviews:t})=>P.jsx(FB,{children:t.map((e,n)=>P.jsxs(VB,{children:[P.jsxs(UB,{children:[e.reviewer_avatar?P.jsx("img",{src:e.reviewer_avatar,alt:"Reviewer Avatar"}):P.jsx(LB,{size:44}),P.jsxs(jB,{children:[P.jsx("p",{children:e.reviewer_name}),P.jsxs($B,{children:[P.jsx(fP,{size:16,color:"#FFC531"}),P.jsx("p",{children:e.reviewer_rating})]})]})]}),P.jsx("p",{children:e.comment})]},n))}),BB=ne.div`
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
`,WB=ne.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,HB=ne.div`
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
`,qB=ne.div`
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
`,GB=ne.form`
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
`,fl=ne.label`
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
`,Cm=ne.div`
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
`,Zc=ne.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,KB=ne.button`
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
`,QB=({isModalOpen:t,closeModal:e,teacher:n})=>{const r=If().shape({name:dr().required("Name is required"),email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),phone:dr().matches(/^\+?[0-9]*$/,"Phone number must be in format +380XXXXXXXXX").min(13,"Phone number must be in format +380XXXXXXXXX").required("Phone is required"),reason:dr().required("Reason is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Py({resolver:by(r),mode:"onChange"}),a=l=>{console.log(l),e(),alert("Form submitted successfully!")};return t?P.jsx(P.Fragment,{children:t&&P.jsx(Fy,{onClose:e,children:P.jsxs(BB,{children:[P.jsx(WB,{onClick:e,children:P.jsx(Vy,{size:32})}),P.jsxs(HB,{children:[P.jsx("h2",{children:"Book trial lesson"}),P.jsx("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),P.jsxs(qB,{children:[P.jsx("img",{src:n.avatar_url,alt:n.name}),P.jsxs("div",{children:[P.jsx("p",{children:"Your teacher"}),P.jsxs("h3",{children:[n.name," ",n.surname]})]})]})]}),P.jsxs(GB,{onSubmit:s(a),noValidate:!0,children:[P.jsxs("div",{className:"form-section",children:[P.jsx("h2",{children:"What is your main reason for learning English?"}),P.jsxs(fl,{children:[P.jsx("input",{type:"radio",value:"career",...i("reason"),defaultChecked:!0}),"Career and business"]}),P.jsxs(fl,{children:[P.jsx("input",{type:"radio",value:"kids",...i("reason")}),"Lesson for kids"]}),P.jsxs(fl,{children:[P.jsx("input",{type:"radio",value:"abroad",...i("reason")}),"Living abroad"]}),P.jsxs(fl,{children:[P.jsx("input",{type:"radio",value:"exams",...i("reason")}),"Exams and coursework"]}),P.jsxs(fl,{children:[P.jsx("input",{type:"radio",value:"hobby",...i("reason")}),"Culture, travel or hobby"]}),o.reason&&P.jsx(Zc,{children:o.reason.message})]}),P.jsxs("div",{className:"form-section",children:[P.jsxs(Cm,{children:[P.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),P.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&P.jsx(Zc,{children:o.name.message})]}),P.jsxs(Cm,{children:[P.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),P.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&P.jsx(Zc,{children:o.email.message})]}),P.jsxs(Cm,{children:[P.jsx("input",{type:"number",...i("phone"),className:o.phone?"error":"",placeholder:" "}),P.jsx("label",{className:o.phone?"error":"",children:"Phone"}),o.phone&&P.jsx(Zc,{children:o.phone.message})]})]}),P.jsx(KB,{type:"submit",children:"Book"})]})]})})}):null},YB=({teacher:t})=>{const e=t.languages.reduce((c,h,f)=>f<t.languages.length-1?[...c,P.jsx("span",{children:h},f),", "]:[...c,P.jsx("span",{children:h},f)],[]),[n,r]=$.useState(!1),[i,s]=$.useState(!1),o=()=>{s(!0)},a=()=>{s(!1)},l=()=>{r(!n)};return P.jsxs(AB,{children:[P.jsx(RB,{src:t.avatar_url,alt:t.name}),P.jsxs(kB,{children:[P.jsxs(PB,{children:[P.jsx(Jc,{style:{marginRight:"192px"},children:"Languages"}),P.jsxs("ul",{children:[P.jsx("li",{children:P.jsx("p",{children:"Lessons online"})}),P.jsx("li",{children:P.jsxs("p",{children:["Lessons done: ",t.lessons_done]})}),P.jsxs("li",{children:[P.jsx(fP,{size:16,color:"#FFC531"}),P.jsxs("p",{children:["Rating: ",t.rating]})]}),P.jsx("li",{children:P.jsxs("p",{children:["Price/1 hour: ",P.jsxs("span",{children:["$",t.price_per_hour]})]})})]}),P.jsx(MB,{size:22})]}),P.jsxs("h3",{children:[t.name," ",t.surname]}),P.jsxs(Jc,{children:["Speaks: ",P.jsx("span",{children:e})]}),P.jsxs(Jc,{children:["Lesson Info: ",P.jsxs("span",{children:[" ",t.lesson_info]})]}),P.jsxs(Jc,{children:["Conditions: ",P.jsx("span",{children:t.conditions})]}),!n&&P.jsx(bB,{onClick:l,children:"Read more"}),n&&P.jsxs(OB,{children:[P.jsx("p",{children:t.experience}),P.jsx(zB,{reviews:t.reviews})]}),P.jsx(NB,{children:t.levels.map((c,h)=>P.jsxs("li",{children:["#",c]},h))}),n&&P.jsx(DB,{onClick:o,children:"Book trial lesson"}),i&&P.jsx(QB,{isModalOpen:i,closeModal:a,teacher:t})]})]})},XB=ne.button`
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
`,JB=()=>{const[t,e]=$.useState(4),[n,r]=$.useState([]);$.useEffect(()=>{const s=W3(W6,"teachers");q3(s,o=>{const a=o.val();a&&r(Object.values(a))})},[]);const i=()=>{e(s=>s+4)};return P.jsxs(P.Fragment,{children:[n.slice(0,t).map((s,o)=>P.jsx(YB,{teacher:s},o)),t<n.length&&P.jsx(XB,{onClick:i,children:"Load More"})]})},ZB=()=>P.jsx(JB,{}),e8=()=>{const{isAuthenticated:t}=ic();return t?P.jsx(II,{to:"/home"}):P.jsx(k_,{})},t8=()=>ic()?P.jsx(k_,{}):P.jsx(II,{to:"/home"}),n8=()=>{const[t,e]=$.useState([]),[n,r]=$.useState(!0),[i,s]=$.useState(null);return $.useEffect(()=>{const o=Zy(),a=nA(o,async l=>{if(l)try{const c=Fk(Zk,"users",l.uid),h=await l6(c);if(h.exists()){const f=h.data().favorites||[];e(f)}else s("No favorites found")}catch(c){console.error("Error fetching favorites:",c),s("Failed to fetch favorites")}finally{r(!1)}else r(!1),s("User not authenticated")});return()=>a()},[t.length]),n?P.jsx("div",{children:"Loading..."}):i?P.jsxs("div",{children:["Error: ",i]}):P.jsxs("div",{children:[P.jsxs("h2",{children:["Favorites List [",t.length,"]"]}),P.jsx("ul",{children:t.map((o,a)=>P.jsx("li",{children:o},a))})]})},r8=()=>P.jsx("div",{children:P.jsx(n8,{})});function i8(){return P.jsx(Zz,{children:P.jsx(Xb,{children:P.jsxs(Dr,{path:"/",element:P.jsx(nz,{}),children:[P.jsx(Dr,{index:!0,element:P.jsx(nI,{})}),P.jsxs(Dr,{element:P.jsx(e8,{}),children:[P.jsx(Dr,{path:"home",element:P.jsx(nI,{})}),P.jsx(Dr,{path:"teachers",element:P.jsx(ZB,{})})]}),P.jsx(Dr,{element:P.jsx(t8,{}),children:P.jsx(Dr,{path:"favorites",element:P.jsx(r8,{})})}),P.jsx(Dr,{path:"*",element:P.jsx(Jz,{})})]})})})}Pm.createRoot(document.getElementById("root")).render(P.jsx(Me.StrictMode,{children:P.jsx(rN,{basename:"/LearnLingo",children:P.jsx(H6,{children:P.jsx(i8,{})})})}));
