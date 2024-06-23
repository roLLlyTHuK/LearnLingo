function MS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function qv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function jS(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Kv={exports:{}},Du={},Yv={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),$S=Symbol.for("react.portal"),US=Symbol.for("react.fragment"),VS=Symbol.for("react.strict_mode"),zS=Symbol.for("react.profiler"),BS=Symbol.for("react.provider"),WS=Symbol.for("react.context"),HS=Symbol.for("react.forward_ref"),GS=Symbol.for("react.suspense"),qS=Symbol.for("react.memo"),KS=Symbol.for("react.lazy"),Rm=Symbol.iterator;function YS(t){return t===null||typeof t!="object"?null:(t=Rm&&t[Rm]||t["@@iterator"],typeof t=="function"?t:null)}var Qv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xv=Object.assign,Jv={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Qv}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zv(){}Zv.prototype=Cs.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=Jv,this.updater=n||Qv}var dh=ch.prototype=new Zv;dh.constructor=ch;Xv(dh,Cs.prototype);dh.isPureReactComponent=!0;var Pm=Array.isArray,e_=Object.prototype.hasOwnProperty,fh={current:null},t_={key:!0,ref:!0,__self:!0,__source:!0};function n_(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)e_.call(e,r)&&!t_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:sa,type:t,key:s,ref:o,props:i,_owner:fh.current}}function QS(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function XS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Nm=/\/+/g;function Cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XS(""+t.key):e.toString(36)}function Za(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case $S:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cc(o,0):r,Pm(i)?(n="",t!=null&&(n=t.replace(Nm,"$&/")+"/"),Za(i,e,n,"",function(u){return u})):i!=null&&(hh(i)&&(i=QS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Nm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Pm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Cc(s,a);o+=Za(s,e,n,l,i)}else if(l=YS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Cc(s,a++),o+=Za(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],i=0;return Za(t,r,"","",function(s){return e.call(n,s,i++)}),r}function JS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ft={current:null},el={transition:null},ZS={ReactCurrentDispatcher:ft,ReactCurrentBatchConfig:el,ReactCurrentOwner:fh};Z.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Cs;Z.Fragment=US;Z.Profiler=zS;Z.PureComponent=ch;Z.StrictMode=VS;Z.Suspense=GS;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ZS;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Xv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=fh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)e_.call(e,l)&&!t_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:sa,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:WS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:BS,_context:t},t.Consumer=t};Z.createElement=n_;Z.createFactory=function(t){var e=n_.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:HS,render:t}};Z.isValidElement=hh;Z.lazy=function(t){return{$$typeof:KS,_payload:{_status:-1,_result:t},_init:JS}};Z.memo=function(t,e){return{$$typeof:qS,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=el.transition;el.transition={};try{t()}finally{el.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return ft.current.useCallback(t,e)};Z.useContext=function(t){return ft.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ft.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ft.current.useEffect(t,e)};Z.useId=function(){return ft.current.useId()};Z.useImperativeHandle=function(t,e,n){return ft.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ft.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ft.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ft.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ft.current.useReducer(t,e,n)};Z.useRef=function(t){return ft.current.useRef(t)};Z.useState=function(t){return ft.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ft.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ft.current.useTransition()};Z.version="18.2.0";Yv.exports=Z;var R=Yv.exports;const de=qv(R),bd=MS({__proto__:null,default:de},[R]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex=R,tx=Symbol.for("react.element"),nx=Symbol.for("react.fragment"),rx=Object.prototype.hasOwnProperty,ix=ex.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sx={key:!0,ref:!0,__self:!0,__source:!0};function r_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rx.call(e,r)&&!sx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tx,type:t,key:s,ref:o,props:i,_owner:ix.current}}Du.Fragment=nx;Du.jsx=r_;Du.jsxs=r_;Kv.exports=Du;var _=Kv.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}var ur;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ur||(ur={}));const Am="popstate";function ox(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Rd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Cl(i)}return lx(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ph(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ax(){return Math.random().toString(36).substr(2,8)}function Om(t,e){return{usr:t.state,key:t.key,idx:e}}function Rd(t,e,n,r){return n===void 0&&(n=null),ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ks(e):e,{state:n,key:e&&e.key||r||ax()})}function Cl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ks(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function lx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=ur.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ko({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=ur.Pop;let C=d(),p=C==null?null:C-u;u=C,l&&l({action:a,location:v.location,delta:p})}function f(C,p){a=ur.Push;let h=Rd(v.location,C,p);n&&n(h,C),u=d()+1;let m=Om(h,u),E=v.createHref(h);try{o.pushState(m,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function g(C,p){a=ur.Replace;let h=Rd(v.location,C,p);n&&n(h,C),u=d();let m=Om(h,u),E=v.createHref(h);o.replaceState(m,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function y(C){let p=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof C=="string"?C:Cl(C);return Re(p,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,p)}let v={get action(){return a},get location(){return t(i,o)},listen(C){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Am,c),l=C,()=>{i.removeEventListener(Am,c),l=null}},createHref(C){return e(i,C)},createURL:y,encodeLocation(C){let p=y(C);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:f,replace:g,go(C){return o.go(C)}};return v}var Dm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dm||(Dm={}));function ux(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ks(e):e,i=mh(r.pathname||"/",n);if(i==null)return null;let s=i_(t);cx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=_x(s[a],Sx(i));return o}function i_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),i_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:yx(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of s_(s.path))i(s,o,l)}),e}function s_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=s_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function cx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:vx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const dx=/^:\w+$/,fx=3,hx=2,px=1,mx=10,gx=-2,Lm=t=>t==="*";function yx(t,e){let n=t.split("/"),r=n.length;return n.some(Lm)&&(r+=gx),e&&(r+=hx),n.filter(i=>!Lm(i)).reduce((i,s)=>i+(dx.test(s)?fx:s===""?px:mx),r)}function vx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function _x(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=wx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let c=a.route;s.push({params:r,pathname:hr([i,d.pathname]),pathnameBase:Ix(hr([i,d.pathnameBase])),route:c}),d.pathnameBase!=="/"&&(i=hr([i,d.pathnameBase]))}return s}function wx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Ex(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{if(d==="*"){let f=a[c]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[d]=xx(a[c]||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Ex(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ph(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Sx(t){try{return decodeURI(t)}catch(e){return ph(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function xx(t,e){try{return decodeURIComponent(t)}catch(n){return ph(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function mh(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Cx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ks(t):t;return{pathname:n?n.startsWith("/")?n:kx(n,e):e,search:Tx(r),hash:bx(i)}}function kx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function kc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gh(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yh(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ks(t):(i=ko({},t),Re(!i.pathname||!i.pathname.includes("?"),kc("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),kc("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),kc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let c=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=Cx(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),Ix=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Tx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Rx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const o_=["post","put","patch","delete"];new Set(o_);const Px=["get",...o_];new Set(Px);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},kl.apply(this,arguments)}const vh=R.createContext(null),Nx=R.createContext(null),Is=R.createContext(null),Lu=R.createContext(null),qn=R.createContext({outlet:null,matches:[],isDataRoute:!1}),a_=R.createContext(null);function Ax(t,e){let{relative:n}=e===void 0?{}:e;Ts()||Re(!1);let{basename:r,navigator:i}=R.useContext(Is),{hash:s,pathname:o,search:a}=c_(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ts(){return R.useContext(Lu)!=null}function bs(){return Ts()||Re(!1),R.useContext(Lu).location}function l_(t){R.useContext(Is).static||R.useLayoutEffect(t)}function u_(){let{isDataRoute:t}=R.useContext(qn);return t?qx():Ox()}function Ox(){Ts()||Re(!1);let t=R.useContext(vh),{basename:e,navigator:n}=R.useContext(Is),{matches:r}=R.useContext(qn),{pathname:i}=bs(),s=JSON.stringify(gh(r).map(l=>l.pathnameBase)),o=R.useRef(!1);return l_(()=>{o.current=!0}),R.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let d=yh(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:hr([e,d.pathname])),(u.replace?n.replace:n.push)(d,u.state,u)},[e,n,s,i,t])}const Dx=R.createContext(null);function Lx(t){let e=R.useContext(qn).outlet;return e&&R.createElement(Dx.Provider,{value:t},e)}function c_(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=R.useContext(qn),{pathname:i}=bs(),s=JSON.stringify(gh(r).map(o=>o.pathnameBase));return R.useMemo(()=>yh(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function Fx(t,e){return Mx(t,e)}function Mx(t,e,n){Ts()||Re(!1);let{navigator:r}=R.useContext(Is),{matches:i}=R.useContext(qn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=bs(),u;if(e){var d;let v=typeof e=="string"?ks(e):e;a==="/"||(d=v.pathname)!=null&&d.startsWith(a)||Re(!1),u=v}else u=l;let c=u.pathname||"/",f=a==="/"?c:c.slice(a.length)||"/",g=ux(t,{pathname:f}),y=zx(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:hr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:hr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&y?R.createElement(Lu.Provider,{value:{location:kl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:ur.Pop}},y):y}function jx(){let t=Gx(),e=Rx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return R.createElement(R.Fragment,null,R.createElement("h2",null,"Unexpected Application Error!"),R.createElement("h3",{style:{fontStyle:"italic"}},e),n?R.createElement("pre",{style:i},n):null,s)}const $x=R.createElement(jx,null);class Ux extends R.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?R.createElement(qn.Provider,{value:this.props.routeContext},R.createElement(a_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vx(t){let{routeContext:e,match:n,children:r}=t,i=R.useContext(vh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),R.createElement(qn.Provider,{value:e},r)}function zx(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let d=l.route.id?o==null?void 0:o[l.route.id]:null,c=null;n&&(c=l.route.errorElement||$x);let f=e.concat(s.slice(0,u+1)),g=()=>{let y;return d?y=c:l.route.Component?y=R.createElement(l.route.Component,null):l.route.element?y=l.route.element:y=a,R.createElement(Vx,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:y})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?R.createElement(Ux,{location:n.location,revalidation:n.revalidation,component:c,error:d,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var d_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(d_||{}),Il=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Il||{});function Bx(t){let e=R.useContext(vh);return e||Re(!1),e}function Wx(t){let e=R.useContext(Nx);return e||Re(!1),e}function Hx(t){let e=R.useContext(qn);return e||Re(!1),e}function f_(t){let e=Hx(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function Gx(){var t;let e=R.useContext(a_),n=Wx(Il.UseRouteError),r=f_(Il.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function qx(){let{router:t}=Bx(d_.UseNavigateStable),e=f_(Il.UseNavigateStable),n=R.useRef(!1);return l_(()=>{n.current=!0}),R.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,kl({fromRouteId:e},s)))},[t,e])}function h_(t){let{to:e,replace:n,state:r,relative:i}=t;Ts()||Re(!1);let{matches:s}=R.useContext(qn),{pathname:o}=bs(),a=u_(),l=yh(e,gh(s).map(d=>d.pathnameBase),o,i==="path"),u=JSON.stringify(l);return R.useEffect(()=>a(JSON.parse(u),{replace:n,state:r,relative:i}),[a,u,i,n,r]),null}function _h(t){return Lx(t.context)}function bn(t){Re(!1)}function Kx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=ur.Pop,navigator:s,static:o=!1}=t;Ts()&&Re(!1);let a=e.replace(/^\/*/,"/"),l=R.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ks(r));let{pathname:u="/",search:d="",hash:c="",state:f=null,key:g="default"}=r,y=R.useMemo(()=>{let v=mh(u,a);return v==null?null:{location:{pathname:v,search:d,hash:c,state:f,key:g},navigationType:i}},[a,u,d,c,f,g,i]);return y==null?null:R.createElement(Is.Provider,{value:l},R.createElement(Lu.Provider,{children:n,value:y}))}function Yx(t){let{children:e,location:n}=t;return Fx(Pd(e),n)}new Promise(()=>{});function Pd(t,e){e===void 0&&(e=[]);let n=[];return R.Children.forEach(t,(r,i)=>{if(!R.isValidElement(r))return;let s=[...e,i];if(r.type===R.Fragment){n.push.apply(n,Pd(r.props.children,s));return}r.type!==bn&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Pd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Nd.apply(this,arguments)}function Qx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Xx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Jx(t,e){return t.button===0&&(!e||e==="_self")&&!Xx(t)}const Zx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],eC="startTransition",Fm=bd[eC];function tC(t){let{basename:e,children:n,future:r,window:i}=t,s=R.useRef();s.current==null&&(s.current=ox({window:i,v5Compat:!0}));let o=s.current,[a,l]=R.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=R.useCallback(c=>{u&&Fm?Fm(()=>l(c)):l(c)},[l,u]);return R.useLayoutEffect(()=>o.listen(d),[o,d]),R.createElement(Kx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const nC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Fu=R.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d}=e,c=Qx(e,Zx),{basename:f}=R.useContext(Is),g,y=!1;if(typeof u=="string"&&rC.test(u)&&(g=u,nC))try{let h=new URL(window.location.href),m=u.startsWith("//")?new URL(h.protocol+u):new URL(u),E=mh(m.pathname,f);m.origin===h.origin&&E!=null?u=E+m.search+m.hash:y=!0}catch{}let v=Ax(u,{relative:i}),C=iC(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i});function p(h){r&&r(h),h.defaultPrevented||C(h)}return R.createElement("a",Nd({},c,{href:g||v,onClick:y||s?r:p,ref:n,target:l}))});var Mm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Mm||(Mm={}));var jm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jm||(jm={}));function iC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=u_(),l=bs(),u=c_(t,{relative:o});return R.useCallback(d=>{if(Jx(d,n)){d.preventDefault();let c=r!==void 0?r:Cl(l)===Cl(u);a(t,{replace:c,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Ad={},p_={exports:{}},Dt={},m_={exports:{}},g_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,V){var z=O.length;O.push(V);e:for(;0<z;){var ue=z-1>>>1,me=O[ue];if(0<i(me,V))O[ue]=V,O[z]=me,z=ue;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var V=O[0],z=O.pop();if(z!==V){O[0]=z;e:for(var ue=0,me=O.length,Ht=me>>>1;ue<Ht;){var Ze=2*(ue+1)-1,ln=O[Ze],Ke=Ze+1,lt=O[Ke];if(0>i(ln,z))Ke<me&&0>i(lt,ln)?(O[ue]=lt,O[Ke]=z,ue=Ke):(O[ue]=ln,O[Ze]=z,ue=Ze);else if(Ke<me&&0>i(lt,z))O[ue]=lt,O[Ke]=z,ue=Ke;else break e}}return V}function i(O,V){var z=O.sortIndex-V.sortIndex;return z!==0?z:O.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,g=!1,y=!1,v=!1,C=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(O){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=O)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function E(O){if(v=!1,m(O),!y)if(n(l)!==null)y=!0,Le(S);else{var V=n(u);V!==null&&pe(E,V.startTime-O)}}function S(O,V){y=!1,v&&(v=!1,p(A),A=-1),g=!0;var z=f;try{for(m(V),c=n(l);c!==null&&(!(c.expirationTime>V)||O&&!q());){var ue=c.callback;if(typeof ue=="function"){c.callback=null,f=c.priorityLevel;var me=ue(c.expirationTime<=V);V=t.unstable_now(),typeof me=="function"?c.callback=me:c===n(l)&&r(l),m(V)}else r(l);c=n(l)}if(c!==null)var Ht=!0;else{var Ze=n(u);Ze!==null&&pe(E,Ze.startTime-V),Ht=!1}return Ht}finally{c=null,f=z,g=!1}}var T=!1,k=null,A=-1,$=5,M=-1;function q(){return!(t.unstable_now()-M<$)}function W(){if(k!==null){var O=t.unstable_now();M=O;var V=!0;try{V=k(!0,O)}finally{V?K():(T=!1,k=null)}}else T=!1}var K;if(typeof h=="function")K=function(){h(W)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Pe=le.port2;le.port1.onmessage=W,K=function(){Pe.postMessage(null)}}else K=function(){C(W,0)};function Le(O){k=O,T||(T=!0,K())}function pe(O,V){A=C(function(){O(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Le(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var V=3;break;default:V=f}var z=f;f=V;try{return O()}finally{f=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,V){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=f;f=O;try{return V()}finally{f=z}},t.unstable_scheduleCallback=function(O,V,z){var ue=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ue+z:ue):z=ue,O){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=z+me,O={id:d++,callback:V,priorityLevel:O,startTime:z,expirationTime:me,sortIndex:-1},z>ue?(O.sortIndex=z,e(u,O),n(l)===null&&O===n(u)&&(v?(p(A),A=-1):v=!0,pe(E,z-ue))):(O.sortIndex=me,e(l,O),y||g||(y=!0,Le(S))),O},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(O){var V=f;return function(){var z=f;f=V;try{return O.apply(this,arguments)}finally{f=z}}}})(g_);m_.exports=g_;var sC=m_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_=R,Ot=sC;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v_=new Set,Io={};function mi(t,e){os(t,e),os(t+"Capture",e)}function os(t,e){for(Io[t]=e,t=0;t<e.length;t++)v_.add(e[t])}var Vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,oC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$m={},Um={};function aC(t){return Od.call(Um,t)?!0:Od.call($m,t)?!1:oC.test(t)?Um[t]=!0:($m[t]=!0,!1)}function lC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uC(t,e,n,r){if(e===null||typeof e>"u"||lC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wh,Eh);Je[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wh,Eh);Je[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wh,Eh);Je[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sh(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uC(e,n,i,r)&&(n=null),r||i===null?aC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=y_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ta=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),w_=Symbol.for("react.context"),Ch=Symbol.for("react.forward_ref"),Ld=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),E_=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Vm&&t[Vm]||t["@@iterator"],typeof t=="function"?t:null)}var Ce=Object.assign,Ic;function to(t){if(Ic===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ic=e&&e[1]||""}return`
`+Ic+t}var Tc=!1;function bc(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function cC(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=bc(t.type,!1),t;case 11:return t=bc(t.type.render,!1),t;case 1:return t=bc(t.type,!0),t;default:return""}}function Md(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case bi:return"Portal";case Dd:return"Profiler";case xh:return"StrictMode";case Ld:return"Suspense";case Fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case w_:return(t.displayName||"Context")+".Consumer";case __:return(t._context.displayName||"Context")+".Provider";case Ch:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kh:return e=t.displayName||null,e!==null?e:Md(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Md(t(e))}catch{}}return null}function dC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Md(e);case 8:return e===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function S_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function fC(t){var e=S_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ba(t){t._valueTracker||(t._valueTracker=fC(t))}function x_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=S_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Tl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function jd(t,e){var n=e.checked;return Ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C_(t,e){e=e.checked,e!=null&&Sh(t,"checked",e,!1)}function $d(t,e){C_(t,e);var n=Tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||Tl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(no(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function k_(t,e){var n=Tr(e.value),r=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function I_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?I_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,T_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hC=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){hC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function b_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function R_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=b_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var pC=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bd(t,e){if(e){if(pC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hd=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gd=null,qi=null,Ki=null;function Gm(t){if(t=la(t)){if(typeof Gd!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Vu(e),Gd(t.stateNode,t.type,e))}}function P_(t){qi?Ki?Ki.push(t):Ki=[t]:qi=t}function N_(){if(qi){var t=qi,e=Ki;if(Ki=qi=null,Gm(t),e)for(t=0;t<e.length;t++)Gm(e[t])}}function A_(t,e){return t(e)}function O_(){}var Rc=!1;function D_(t,e,n){if(Rc)return t(e,n);Rc=!0;try{return A_(t,e,n)}finally{Rc=!1,(qi!==null||Ki!==null)&&(O_(),N_())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Vu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var qd=!1;if(Vn)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){qd=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{qd=!1}function mC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var uo=!1,bl=null,Rl=!1,Kd=null,gC={onError:function(t){uo=!0,bl=t}};function yC(t,e,n,r,i,s,o,a,l){uo=!1,bl=null,mC.apply(gC,arguments)}function vC(t,e,n,r,i,s,o,a,l){if(yC.apply(this,arguments),uo){if(uo){var u=bl;uo=!1,bl=null}else throw Error(b(198));Rl||(Rl=!0,Kd=u)}}function gi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qm(t){if(gi(t)!==t)throw Error(b(188))}function _C(t){var e=t.alternate;if(!e){if(e=gi(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qm(i),t;if(s===r)return qm(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function F_(t){return t=_C(t),t!==null?M_(t):null}function M_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=M_(t);if(e!==null)return e;t=t.sibling}return null}var j_=Ot.unstable_scheduleCallback,Km=Ot.unstable_cancelCallback,wC=Ot.unstable_shouldYield,EC=Ot.unstable_requestPaint,be=Ot.unstable_now,SC=Ot.unstable_getCurrentPriorityLevel,Th=Ot.unstable_ImmediatePriority,$_=Ot.unstable_UserBlockingPriority,Pl=Ot.unstable_NormalPriority,xC=Ot.unstable_LowPriority,U_=Ot.unstable_IdlePriority,Mu=null,wn=null;function CC(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Mu,t,void 0,(t.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:TC,kC=Math.log,IC=Math.LN2;function TC(t){return t>>>=0,t===0?32:31-(kC(t)/IC|0)|0}var Pa=64,Na=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ro(a):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-tn(e),i=1<<n,r|=t[n],e&=~i;return r}function bC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-tn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=bC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Yd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function V_(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-tn(e),t[e]=n}function PC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-tn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function bh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-tn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B_,Rh,W_,H_,G_,Qd=!1,Aa=[],pr=null,mr=null,gr=null,Ro=new Map,Po=new Map,nr=[],NC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ym(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Ro.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=la(e),e!==null&&Rh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AC(t,e,n,r,i){switch(e){case"focusin":return pr=zs(pr,t,e,n,r,i),!0;case"dragenter":return mr=zs(mr,t,e,n,r,i),!0;case"mouseover":return gr=zs(gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ro.set(s,zs(Ro.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,zs(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function q_(t){var e=Br(t.target);if(e!==null){var n=gi(e);if(n!==null){if(e=n.tag,e===13){if(e=L_(n),e!==null){t.blockedOn=e,G_(t.priority,function(){W_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hd=r,n.target.dispatchEvent(r),Hd=null}else return e=la(n),e!==null&&Rh(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){tl(t)&&n.delete(e)}function OC(){Qd=!1,pr!==null&&tl(pr)&&(pr=null),mr!==null&&tl(mr)&&(mr=null),gr!==null&&tl(gr)&&(gr=null),Ro.forEach(Qm),Po.forEach(Qm)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,Qd||(Qd=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,OC)))}function No(t){function e(i){return Bs(i,t)}if(0<Aa.length){Bs(Aa[0],t);for(var n=1;n<Aa.length;n++){var r=Aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&Bs(pr,t),mr!==null&&Bs(mr,t),gr!==null&&Bs(gr,t),Ro.forEach(e),Po.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)q_(n),n.blockedOn===null&&nr.shift()}var Yi=Kn.ReactCurrentBatchConfig,Al=!0;function DC(t,e,n,r){var i=oe,s=Yi.transition;Yi.transition=null;try{oe=1,Ph(t,e,n,r)}finally{oe=i,Yi.transition=s}}function LC(t,e,n,r){var i=oe,s=Yi.transition;Yi.transition=null;try{oe=4,Ph(t,e,n,r)}finally{oe=i,Yi.transition=s}}function Ph(t,e,n,r){if(Al){var i=Xd(t,e,n,r);if(i===null)Uc(t,e,r,Ol,n),Ym(t,r);else if(AC(i,t,e,n,r))r.stopPropagation();else if(Ym(t,r),e&4&&-1<NC.indexOf(t)){for(;i!==null;){var s=la(i);if(s!==null&&B_(s),s=Xd(t,e,n,r),s===null&&Uc(t,e,r,Ol,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uc(t,e,r,null,n)}}var Ol=null;function Xd(t,e,n,r){if(Ol=null,t=Ih(r),t=Br(t),t!==null)if(e=gi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=L_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function K_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SC()){case Th:return 1;case $_:return 4;case Pl:case xC:return 16;case U_:return 536870912;default:return 16}default:return 16}}var cr=null,Nh=null,nl=null;function Y_(){if(nl)return nl;var t,e=Nh,n=e.length,r,i="value"in cr?cr.value:cr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return nl=i.slice(t,1<r?1-r:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Xm(){return!1}function Lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:Xm,this.isPropagationStopped=Xm,this}return Ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ah=Lt(Rs),aa=Ce({},Rs,{view:0,detail:0}),FC=Lt(aa),Nc,Ac,Ws,ju=Ce({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(Nc=t.screenX-Ws.screenX,Ac=t.screenY-Ws.screenY):Ac=Nc=0,Ws=t),Nc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Jm=Lt(ju),MC=Ce({},ju,{dataTransfer:0}),jC=Lt(MC),$C=Ce({},aa,{relatedTarget:0}),Oc=Lt($C),UC=Ce({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),VC=Lt(UC),zC=Ce({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),BC=Lt(zC),WC=Ce({},Rs,{data:0}),Zm=Lt(WC),HC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function KC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qC[t])?!!e[t]:!1}function Oh(){return KC}var YC=Ce({},aa,{key:function(t){if(t.key){var e=HC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oh,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),QC=Lt(YC),XC=Ce({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Lt(XC),JC=Ce({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oh}),ZC=Lt(JC),ek=Ce({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),tk=Lt(ek),nk=Ce({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rk=Lt(nk),ik=[9,13,27,32],Dh=Vn&&"CompositionEvent"in window,co=null;Vn&&"documentMode"in document&&(co=document.documentMode);var sk=Vn&&"TextEvent"in window&&!co,Q_=Vn&&(!Dh||co&&8<co&&11>=co),tg=String.fromCharCode(32),ng=!1;function X_(t,e){switch(t){case"keyup":return ik.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function J_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pi=!1;function ok(t,e){switch(t){case"compositionend":return J_(e);case"keypress":return e.which!==32?null:(ng=!0,tg);case"textInput":return t=e.data,t===tg&&ng?null:t;default:return null}}function ak(t,e){if(Pi)return t==="compositionend"||!Dh&&X_(t,e)?(t=Y_(),nl=Nh=cr=null,Pi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Q_&&e.locale!=="ko"?null:e.data;default:return null}}var lk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!lk[t.type]:e==="textarea"}function Z_(t,e,n,r){P_(r),e=Dl(e,"onChange"),0<e.length&&(n=new Ah("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,Ao=null;function uk(t){c0(t,0)}function $u(t){var e=Oi(t);if(x_(e))return t}function ck(t,e){if(t==="change")return e}var e0=!1;if(Vn){var Dc;if(Vn){var Lc="oninput"in document;if(!Lc){var ig=document.createElement("div");ig.setAttribute("oninput","return;"),Lc=typeof ig.oninput=="function"}Dc=Lc}else Dc=!1;e0=Dc&&(!document.documentMode||9<document.documentMode)}function sg(){fo&&(fo.detachEvent("onpropertychange",t0),Ao=fo=null)}function t0(t){if(t.propertyName==="value"&&$u(Ao)){var e=[];Z_(e,Ao,t,Ih(t)),D_(uk,e)}}function dk(t,e,n){t==="focusin"?(sg(),fo=e,Ao=n,fo.attachEvent("onpropertychange",t0)):t==="focusout"&&sg()}function fk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $u(Ao)}function hk(t,e){if(t==="click")return $u(e)}function pk(t,e){if(t==="input"||t==="change")return $u(e)}function mk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var on=typeof Object.is=="function"?Object.is:mk;function Oo(t,e){if(on(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Od.call(e,i)||!on(t[i],e[i]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ag(t,e){var n=og(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=og(n)}}function n0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r0(){for(var t=window,e=Tl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tl(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function gk(t){var e=r0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n0(n.ownerDocument.documentElement,n)){if(r!==null&&Lh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ag(n,s);var o=ag(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var yk=Vn&&"documentMode"in document&&11>=document.documentMode,Ni=null,Jd=null,ho=null,Zd=!1;function lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zd||Ni==null||Ni!==Tl(r)||(r=Ni,"selectionStart"in r&&Lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ho&&Oo(ho,r)||(ho=r,r=Dl(Jd,"onSelect"),0<r.length&&(e=new Ah("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ni)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Fc={},i0={};Vn&&(i0=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function Uu(t){if(Fc[t])return Fc[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i0)return Fc[t]=e[n];return t}var s0=Uu("animationend"),o0=Uu("animationiteration"),a0=Uu("animationstart"),l0=Uu("transitionend"),u0=new Map,ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){u0.set(t,e),mi(e,[t])}for(var Mc=0;Mc<ug.length;Mc++){var jc=ug[Mc],vk=jc.toLowerCase(),_k=jc[0].toUpperCase()+jc.slice(1);Nr(vk,"on"+_k)}Nr(s0,"onAnimationEnd");Nr(o0,"onAnimationIteration");Nr(a0,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(l0,"onTransitionEnd");os("onMouseEnter",["mouseout","mouseover"]);os("onMouseLeave",["mouseout","mouseover"]);os("onPointerEnter",["pointerout","pointerover"]);os("onPointerLeave",["pointerout","pointerover"]);mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wk=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,vC(r,e,void 0,t),t.currentTarget=null}function c0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}}}if(Rl)throw t=Kd,Rl=!1,Kd=null,t}function ge(t,e){var n=e[sf];n===void 0&&(n=e[sf]=new Set);var r=t+"__bubble";n.has(r)||(d0(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),d0(n,t,r,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function Do(t){if(!t[La]){t[La]=!0,v_.forEach(function(n){n!=="selectionchange"&&(wk.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[La]||(e[La]=!0,$c("selectionchange",!1,e))}}function d0(t,e,n,r){switch(K_(e)){case 1:var i=DC;break;case 4:i=LC;break;default:i=Ph}n=i.bind(null,e,n,t),i=void 0,!qd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Br(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}D_(function(){var u=s,d=Ih(n),c=[];e:{var f=u0.get(t);if(f!==void 0){var g=Ah,y=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":g=QC;break;case"focusin":y="focus",g=Oc;break;case"focusout":y="blur",g=Oc;break;case"beforeblur":case"afterblur":g=Oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=jC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ZC;break;case s0:case o0:case a0:g=VC;break;case l0:g=tk;break;case"scroll":g=FC;break;case"wheel":g=rk;break;case"copy":case"cut":case"paste":g=BC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=eg}var v=(e&4)!==0,C=!v&&t==="scroll",p=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,m;h!==null;){m=h;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,p!==null&&(E=bo(h,p),E!=null&&v.push(Lo(h,E,m)))),C)break;h=h.return}0<v.length&&(f=new g(f,y,null,n,d),c.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Hd&&(y=n.relatedTarget||n.fromElement)&&(Br(y)||y[zn]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Br(y):null,y!==null&&(C=gi(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Jm,E="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(v=eg,E="onPointerLeave",p="onPointerEnter",h="pointer"),C=g==null?f:Oi(g),m=y==null?f:Oi(y),f=new v(E,h+"leave",g,n,d),f.target=C,f.relatedTarget=m,E=null,Br(d)===u&&(v=new v(p,h+"enter",y,n,d),v.target=m,v.relatedTarget=C,E=v),C=E,g&&y)t:{for(v=g,p=y,h=0,m=v;m;m=xi(m))h++;for(m=0,E=p;E;E=xi(E))m++;for(;0<h-m;)v=xi(v),h--;for(;0<m-h;)p=xi(p),m--;for(;h--;){if(v===p||p!==null&&v===p.alternate)break t;v=xi(v),p=xi(p)}v=null}else v=null;g!==null&&dg(c,f,g,v,!1),y!==null&&C!==null&&dg(c,C,y,v,!0)}}e:{if(f=u?Oi(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=ck;else if(rg(f))if(e0)S=pk;else{S=fk;var T=dk}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=hk);if(S&&(S=S(t,u))){Z_(c,S,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ud(f,"number",f.value)}switch(T=u?Oi(u):window,t){case"focusin":(rg(T)||T.contentEditable==="true")&&(Ni=T,Jd=u,ho=null);break;case"focusout":ho=Jd=Ni=null;break;case"mousedown":Zd=!0;break;case"contextmenu":case"mouseup":case"dragend":Zd=!1,lg(c,n,d);break;case"selectionchange":if(yk)break;case"keydown":case"keyup":lg(c,n,d)}var k;if(Dh)e:{switch(t){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else Pi?X_(t,n)&&(A="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Q_&&n.locale!=="ko"&&(Pi||A!=="onCompositionStart"?A==="onCompositionEnd"&&Pi&&(k=Y_()):(cr=d,Nh="value"in cr?cr.value:cr.textContent,Pi=!0)),T=Dl(u,A),0<T.length&&(A=new Zm(A,t,null,n,d),c.push({event:A,listeners:T}),k?A.data=k:(k=J_(n),k!==null&&(A.data=k)))),(k=sk?ok(t,n):ak(t,n))&&(u=Dl(u,"onBeforeInput"),0<u.length&&(d=new Zm("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=k))}c0(c,e)})}function Lo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bo(t,n),s!=null&&r.unshift(Lo(t,s,i)),s=bo(t,e),s!=null&&r.push(Lo(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function dg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=bo(n,s),l!=null&&o.unshift(Lo(n,l,a))):i||(l=bo(n,s),l!=null&&o.push(Lo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ek=/\r\n?/g,Sk=/\u0000|\uFFFD/g;function fg(t){return(typeof t=="string"?t:""+t).replace(Ek,`
`).replace(Sk,"")}function Fa(t,e,n){if(e=fg(e),fg(t)!==e&&n)throw Error(b(425))}function Ll(){}var ef=null,tf=null;function nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rf=typeof setTimeout=="function"?setTimeout:void 0,xk=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,Ck=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(kk)}:rf;function kk(t){setTimeout(function(){throw t})}function Vc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),gn="__reactFiber$"+Ps,Fo="__reactProps$"+Ps,zn="__reactContainer$"+Ps,sf="__reactEvents$"+Ps,Ik="__reactListeners$"+Ps,Tk="__reactHandles$"+Ps;function Br(t){var e=t[gn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[gn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pg(t);t!==null;){if(n=t[gn])return n;t=pg(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[gn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Oi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Vu(t){return t[Fo]||null}var of=[],Di=-1;function Ar(t){return{current:t}}function we(t){0>Di||(t.current=of[Di],of[Di]=null,Di--)}function he(t,e){Di++,of[Di]=t.current,t.current=e}var br={},ot=Ar(br),Et=Ar(!1),ni=br;function as(t,e){var n=t.type.contextTypes;if(!n)return br;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function Fl(){we(Et),we(ot)}function mg(t,e,n){if(ot.current!==br)throw Error(b(168));he(ot,e),he(Et,n)}function f0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,dC(t)||"Unknown",i));return Ce({},n,r)}function Ml(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,ni=ot.current,he(ot,t),he(Et,Et.current),!0}function gg(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=f0(t,e,ni),r.__reactInternalMemoizedMergedChildContext=t,we(Et),we(ot),he(ot,t)):we(Et),he(Et,n)}var Nn=null,zu=!1,zc=!1;function h0(t){Nn===null?Nn=[t]:Nn.push(t)}function bk(t){zu=!0,h0(t)}function Or(){if(!zc&&Nn!==null){zc=!0;var t=0,e=oe;try{var n=Nn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,zu=!1}catch(i){throw Nn!==null&&(Nn=Nn.slice(t+1)),j_(Th,Or),i}finally{oe=e,zc=!1}}return null}var Li=[],Fi=0,jl=null,$l=0,jt=[],$t=0,ri=null,An=1,On="";function $r(t,e){Li[Fi++]=$l,Li[Fi++]=jl,jl=t,$l=e}function p0(t,e,n){jt[$t++]=An,jt[$t++]=On,jt[$t++]=ri,ri=t;var r=An;t=On;var i=32-tn(r)-1;r&=~(1<<i),n+=1;var s=32-tn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,An=1<<32-tn(e)+i|n<<i|r,On=s+t}else An=1<<s|n<<i|r,On=t}function Fh(t){t.return!==null&&($r(t,1),p0(t,1,0))}function Mh(t){for(;t===jl;)jl=Li[--Fi],Li[Fi]=null,$l=Li[--Fi],Li[Fi]=null;for(;t===ri;)ri=jt[--$t],jt[$t]=null,On=jt[--$t],jt[$t]=null,An=jt[--$t],jt[$t]=null}var Pt=null,Rt=null,Ee=!1,Qt=null;function m0(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ri!==null?{id:An,overflow:On}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Rt=null,!0):!1;default:return!1}}function af(t){return(t.mode&1)!==0&&(t.flags&128)===0}function lf(t){if(Ee){var e=Rt;if(e){var n=e;if(!yg(t,e)){if(af(t))throw Error(b(418));e=yr(n.nextSibling);var r=Pt;e&&yg(t,e)?m0(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Pt=t)}}else{if(af(t))throw Error(b(418));t.flags=t.flags&-4097|2,Ee=!1,Pt=t}}}function vg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Ma(t){if(t!==Pt)return!1;if(!Ee)return vg(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nf(t.type,t.memoizedProps)),e&&(e=Rt)){if(af(t))throw g0(),Error(b(418));for(;e;)m0(t,e),e=yr(e.nextSibling)}if(vg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Pt?yr(t.stateNode.nextSibling):null;return!0}function g0(){for(var t=Rt;t;)t=yr(t.nextSibling)}function ls(){Rt=Pt=null,Ee=!1}function jh(t){Qt===null?Qt=[t]:Qt.push(t)}var Rk=Kn.ReactCurrentBatchConfig;function qt(t,e){if(t&&t.defaultProps){e=Ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ul=Ar(null),Vl=null,Mi=null,$h=null;function Uh(){$h=Mi=Vl=null}function Vh(t){var e=Ul.current;we(Ul),t._currentValue=e}function uf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Qi(t,e){Vl=t,$h=Mi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},Mi===null){if(Vl===null)throw Error(b(308));Mi=t,Vl.dependencies={lanes:0,firstContext:t}}else Mi=Mi.next=t;return e}var Wr=null;function zh(t){Wr===null?Wr=[t]:Wr.push(t)}function y0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function v0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bn(t,n)}return i=r.interleaved,i===null?(e.next=e,zh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bn(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bh(t,n)}}function _g(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zl(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(f=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){c=y.call(g,c,f);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(g,c,f):y,f==null)break e;c=Ce({},c,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=g,l=c):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);si|=o,t.lanes=o,t.memoizedState=c}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var _0=new y_.Component().refs;function cf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bu={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=dt(),i=wr(t),s=jn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(nn(e,t,i,r),il(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=dt(),i=wr(t),s=jn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(nn(e,t,i,r),il(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dt(),r=wr(t),i=jn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(nn(e,t,r,n),il(e,t,r))}};function Eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function w0(t,e,n){var r=!1,i=br,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=St(e)?ni:ot.current,r=e.contextTypes,s=(r=r!=null)?as(t,i):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Sg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bu.enqueueReplaceState(e,e.state,null)}function df(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=_0,Bh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=St(e)?ni:ot.current,i.context=as(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bu.enqueueReplaceState(i,i.state,null),zl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===_0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function ja(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xg(t){var e=t._init;return e(t._payload)}function E0(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=Er(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,E){return h===null||h.tag!==6?(h=Yc(m,p.mode,E),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,E){var S=m.type;return S===Ri?d(p,h,m.props.children,E,m.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===er&&xg(S)===h.type)?(E=i(h,m.props),E.ref=Hs(p,h,m),E.return=p,E):(E=cl(m.type,m.key,m.props,null,p.mode,E),E.ref=Hs(p,h,m),E.return=p,E)}function u(p,h,m,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Qc(m,p.mode,E),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function d(p,h,m,E,S){return h===null||h.tag!==7?(h=Xr(m,p.mode,E,S),h.return=p,h):(h=i(h,m),h.return=p,h)}function c(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Yc(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ta:return m=cl(h.type,h.key,h.props,null,p.mode,m),m.ref=Hs(p,null,h),m.return=p,m;case bi:return h=Qc(h,p.mode,m),h.return=p,h;case er:var E=h._init;return c(p,E(h._payload),m)}if(no(h)||Us(h))return h=Xr(h,p.mode,m,null),h.return=p,h;ja(p,h)}return null}function f(p,h,m,E){var S=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(p,h,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ta:return m.key===S?l(p,h,m,E):null;case bi:return m.key===S?u(p,h,m,E):null;case er:return S=m._init,f(p,h,S(m._payload),E)}if(no(m)||Us(m))return S!==null?null:d(p,h,m,E,null);ja(p,m)}return null}function g(p,h,m,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(m)||null,a(h,p,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ta:return p=p.get(E.key===null?m:E.key)||null,l(h,p,E,S);case bi:return p=p.get(E.key===null?m:E.key)||null,u(h,p,E,S);case er:var T=E._init;return g(p,h,m,T(E._payload),S)}if(no(E)||Us(E))return p=p.get(m)||null,d(h,p,E,S,null);ja(h,E)}return null}function y(p,h,m,E){for(var S=null,T=null,k=h,A=h=0,$=null;k!==null&&A<m.length;A++){k.index>A?($=k,k=null):$=k.sibling;var M=f(p,k,m[A],E);if(M===null){k===null&&(k=$);break}t&&k&&M.alternate===null&&e(p,k),h=s(M,h,A),T===null?S=M:T.sibling=M,T=M,k=$}if(A===m.length)return n(p,k),Ee&&$r(p,A),S;if(k===null){for(;A<m.length;A++)k=c(p,m[A],E),k!==null&&(h=s(k,h,A),T===null?S=k:T.sibling=k,T=k);return Ee&&$r(p,A),S}for(k=r(p,k);A<m.length;A++)$=g(k,p,A,m[A],E),$!==null&&(t&&$.alternate!==null&&k.delete($.key===null?A:$.key),h=s($,h,A),T===null?S=$:T.sibling=$,T=$);return t&&k.forEach(function(q){return e(p,q)}),Ee&&$r(p,A),S}function v(p,h,m,E){var S=Us(m);if(typeof S!="function")throw Error(b(150));if(m=S.call(m),m==null)throw Error(b(151));for(var T=S=null,k=h,A=h=0,$=null,M=m.next();k!==null&&!M.done;A++,M=m.next()){k.index>A?($=k,k=null):$=k.sibling;var q=f(p,k,M.value,E);if(q===null){k===null&&(k=$);break}t&&k&&q.alternate===null&&e(p,k),h=s(q,h,A),T===null?S=q:T.sibling=q,T=q,k=$}if(M.done)return n(p,k),Ee&&$r(p,A),S;if(k===null){for(;!M.done;A++,M=m.next())M=c(p,M.value,E),M!==null&&(h=s(M,h,A),T===null?S=M:T.sibling=M,T=M);return Ee&&$r(p,A),S}for(k=r(p,k);!M.done;A++,M=m.next())M=g(k,p,A,M.value,E),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?A:M.key),h=s(M,h,A),T===null?S=M:T.sibling=M,T=M);return t&&k.forEach(function(W){return e(p,W)}),Ee&&$r(p,A),S}function C(p,h,m,E){if(typeof m=="object"&&m!==null&&m.type===Ri&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Ta:e:{for(var S=m.key,T=h;T!==null;){if(T.key===S){if(S=m.type,S===Ri){if(T.tag===7){n(p,T.sibling),h=i(T,m.props.children),h.return=p,p=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===er&&xg(S)===T.type){n(p,T.sibling),h=i(T,m.props),h.ref=Hs(p,T,m),h.return=p,p=h;break e}n(p,T);break}else e(p,T);T=T.sibling}m.type===Ri?(h=Xr(m.props.children,p.mode,E,m.key),h.return=p,p=h):(E=cl(m.type,m.key,m.props,null,p.mode,E),E.ref=Hs(p,h,m),E.return=p,p=E)}return o(p);case bi:e:{for(T=m.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=Qc(m,p.mode,E),h.return=p,p=h}return o(p);case er:return T=m._init,C(p,h,T(m._payload),E)}if(no(m))return y(p,h,m,E);if(Us(m))return v(p,h,m,E);ja(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=Yc(m,p.mode,E),h.return=p,p=h),o(p)):n(p,h)}return C}var us=E0(!0),S0=E0(!1),ua={},En=Ar(ua),Mo=Ar(ua),jo=Ar(ua);function Hr(t){if(t===ua)throw Error(b(174));return t}function Wh(t,e){switch(he(jo,e),he(Mo,t),he(En,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zd(e,t)}we(En),he(En,e)}function cs(){we(En),we(Mo),we(jo)}function x0(t){Hr(jo.current);var e=Hr(En.current),n=zd(e,t.type);e!==n&&(he(Mo,t),he(En,n))}function Hh(t){Mo.current===t&&(we(En),we(Mo))}var Se=Ar(0);function Bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function Gh(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var sl=Kn.ReactCurrentDispatcher,Wc=Kn.ReactCurrentBatchConfig,ii=0,xe=null,Me=null,ze=null,Wl=!1,po=!1,$o=0,Pk=0;function et(){throw Error(b(321))}function qh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!on(t[n],e[n]))return!1;return!0}function Kh(t,e,n,r,i,s){if(ii=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,sl.current=t===null||t.memoizedState===null?Dk:Lk,t=n(r,i),po){s=0;do{if(po=!1,$o=0,25<=s)throw Error(b(301));s+=1,ze=Me=null,e.updateQueue=null,sl.current=Fk,t=n(r,i)}while(po)}if(sl.current=Hl,e=Me!==null&&Me.next!==null,ii=0,ze=Me=xe=null,Wl=!1,e)throw Error(b(300));return t}function Yh(){var t=$o!==0;return $o=0,t}function dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?xe.memoizedState=ze=t:ze=ze.next=t,ze}function Bt(){if(Me===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=ze===null?xe.memoizedState:ze.next;if(e!==null)ze=e,Me=t;else{if(t===null)throw Error(b(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},ze===null?xe.memoizedState=ze=t:ze=ze.next=t}return ze}function Uo(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((ii&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,xe.lanes|=d,si|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,on(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,si|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Bt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);on(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function C0(){}function k0(t,e){var n=xe,r=Bt(),i=e(),s=!on(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Qh(b0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ze!==null&&ze.memoizedState.tag&1){if(n.flags|=2048,Vo(9,T0.bind(null,n,r,i,e),void 0,null),qe===null)throw Error(b(349));ii&30||I0(n,e,i)}return i}function I0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,r){e.value=n,e.getSnapshot=r,R0(e)&&P0(t)}function b0(t,e,n){return n(function(){R0(e)&&P0(t)})}function R0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!on(t,n)}catch{return!0}}function P0(t){var e=Bn(t,1);e!==null&&nn(e,t,1,-1)}function Cg(t){var e=dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Uo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ok.bind(null,xe,t),[e.memoizedState,t]}function Vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N0(){return Bt().memoizedState}function ol(t,e,n,r){var i=dn();xe.flags|=t,i.memoizedState=Vo(1|e,n,void 0,r===void 0?null:r)}function Wu(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&qh(r,o.deps)){i.memoizedState=Vo(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Vo(1|e,n,s,r)}function kg(t,e){return ol(8390656,8,t,e)}function Qh(t,e){return Wu(2048,8,t,e)}function A0(t,e){return Wu(4,2,t,e)}function O0(t,e){return Wu(4,4,t,e)}function D0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function L0(t,e,n){return n=n!=null?n.concat([t]):null,Wu(4,4,D0.bind(null,e,t),n)}function Xh(){}function F0(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function M0(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j0(t,e,n){return ii&21?(on(n,e)||(n=V_(),xe.lanes|=n,si|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function Nk(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{oe=n,Wc.transition=r}}function $0(){return Bt().memoizedState}function Ak(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},U0(t))V0(e,n);else if(n=y0(t,e,n,r),n!==null){var i=dt();nn(n,t,r,i),z0(n,e,r)}}function Ok(t,e,n){var r=wr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(U0(t))V0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,on(a,o)){var l=e.interleaved;l===null?(i.next=i,zh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=y0(t,e,i,r),n!==null&&(i=dt(),nn(n,t,r,i),z0(n,e,r))}}function U0(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function V0(t,e){po=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,bh(t,n)}}var Hl={readContext:zt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},Dk={readContext:zt,useCallback:function(t,e){return dn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,D0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ak.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=dn();return t={current:t},e.memoizedState=t},useState:Cg,useDebugValue:Xh,useDeferredValue:function(t){return dn().memoizedState=t},useTransition:function(){var t=Cg(!1),e=t[0];return t=Nk.bind(null,t[1]),dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=dn();if(Ee){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),qe===null)throw Error(b(349));ii&30||I0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kg(b0.bind(null,r,s,t),[t]),r.flags|=2048,Vo(9,T0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=dn(),e=qe.identifierPrefix;if(Ee){var n=On,r=An;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lk={readContext:zt,useCallback:F0,useContext:zt,useEffect:Qh,useImperativeHandle:L0,useInsertionEffect:A0,useLayoutEffect:O0,useMemo:M0,useReducer:Hc,useRef:N0,useState:function(){return Hc(Uo)},useDebugValue:Xh,useDeferredValue:function(t){var e=Bt();return j0(e,Me.memoizedState,t)},useTransition:function(){var t=Hc(Uo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:C0,useSyncExternalStore:k0,useId:$0,unstable_isNewReconciler:!1},Fk={readContext:zt,useCallback:F0,useContext:zt,useEffect:Qh,useImperativeHandle:L0,useInsertionEffect:A0,useLayoutEffect:O0,useMemo:M0,useReducer:Gc,useRef:N0,useState:function(){return Gc(Uo)},useDebugValue:Xh,useDeferredValue:function(t){var e=Bt();return Me===null?e.memoizedState=t:j0(e,Me.memoizedState,t)},useTransition:function(){var t=Gc(Uo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:C0,useSyncExternalStore:k0,useId:$0,unstable_isNewReconciler:!1};function ds(t,e){try{var n="",r=e;do n+=cC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ff(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mk=typeof WeakMap=="function"?WeakMap:Map;function B0(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ql||(ql=!0,Sf=r),ff(t,e)},n}function W0(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ff(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ff(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Xk.bind(null,t,e,n),e.then(t,t))}function Tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var jk=Kn.ReactCurrentOwner,yt=!1;function ut(t,e,n,r){e.child=t===null?S0(e,null,n,r):us(e,t.child,n,r)}function Rg(t,e,n,r,i){n=n.render;var s=e.ref;return Qi(e,i),r=Kh(t,e,n,r,s,i),n=Yh(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ee&&n&&Fh(e),e.flags|=1,ut(t,e,r,i),e.child)}function Pg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!sp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H0(t,e,s,r,i)):(t=cl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return Wn(t,e,i)}return e.flags|=1,t=Er(s,r),t.ref=e.ref,t.return=e,e.child=t}function H0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Wn(t,e,i)}return hf(t,e,n,r,i)}function G0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},he($i,bt),bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,he($i,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,he($i,bt),bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,he($i,bt),bt|=r;return ut(t,e,i,n),e.child}function q0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hf(t,e,n,r,i){var s=St(n)?ni:ot.current;return s=as(e,s),Qi(e,i),n=Kh(t,e,n,r,s,i),r=Yh(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wn(t,e,i)):(Ee&&r&&Fh(e),e.flags|=1,ut(t,e,n,i),e.child)}function Ng(t,e,n,r,i){if(St(n)){var s=!0;Ml(e)}else s=!1;if(Qi(e,i),e.stateNode===null)al(t,e),w0(e,n,r),df(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=St(n)?ni:ot.current,u=as(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Sg(e,o,r,u),tr=!1;var f=e.memoizedState;o.state=f,zl(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Et.current||tr?(typeof d=="function"&&(cf(e,n,d,r),l=e.memoizedState),(a=tr||Eg(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,v0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=St(n)?ni:ot.current,l=as(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&Sg(e,o,r,l),tr=!1,f=e.memoizedState,o.state=f,zl(e,r,o,i);var y=e.memoizedState;a!==c||f!==y||Et.current||tr?(typeof g=="function"&&(cf(e,n,g,r),y=e.memoizedState),(u=tr||Eg(e,n,u,r,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return pf(t,e,n,r,s,i)}function pf(t,e,n,r,i,s){q0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gg(e,n,!1),Wn(t,e,s);r=e.stateNode,jk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=us(e,t.child,null,s),e.child=us(e,null,a,s)):ut(t,e,a,s),e.memoizedState=r.state,i&&gg(e,n,!0),e.child}function K0(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),Wh(t,e.containerInfo)}function Ag(t,e,n,r,i){return ls(),jh(i),e.flags|=256,ut(t,e,n,r),e.child}var mf={dehydrated:null,treeContext:null,retryLane:0};function gf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Y0(t,e,n){var r=e.pendingProps,i=Se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),he(Se,i&1),t===null)return lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=qu(o,r,0,null),t=Xr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=gf(n),e.memoizedState=mf,t):Jh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $k(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Er(a,s):(s=Xr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?gf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=mf,r}return s=t.child,t=s.sibling,r=Er(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jh(t,e){return e=qu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&jh(r),us(e,t.child,null,n),t=Jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $k(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qc(Error(b(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=qu({mode:"visible",children:r.children},i,0,null),s=Xr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&us(e,t.child,null,o),e.child.memoizedState=gf(o),e.memoizedState=mf,s);if(!(e.mode&1))return $a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=qc(s,r,void 0),$a(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=qe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bn(t,i),nn(r,t,i,-1))}return ip(),r=qc(Error(b(421))),$a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Jk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Rt=yr(i.nextSibling),Pt=e,Ee=!0,Qt=null,t!==null&&(jt[$t++]=An,jt[$t++]=On,jt[$t++]=ri,An=t.id,On=t.overflow,ri=e),e=Jh(e,r.children),e.flags|=4096,e)}function Og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),uf(t.return,e,n)}function Kc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Q0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ut(t,e,r.children,n),r=Se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,n,e);else if(t.tag===19)Og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(he(Se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kc(e,!0,n,null,s);break;case"together":Kc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),si|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Uk(t,e,n){switch(e.tag){case 3:K0(e),ls();break;case 5:x0(e);break;case 1:St(e.type)&&Ml(e);break;case 4:Wh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;he(Ul,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(he(Se,Se.current&1),e.flags|=128,null):n&e.child.childLanes?Y0(t,e,n):(he(Se,Se.current&1),t=Wn(t,e,n),t!==null?t.sibling:null);he(Se,Se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Q0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),he(Se,Se.current),r)break;return null;case 22:case 23:return e.lanes=0,G0(t,e,n)}return Wn(t,e,n)}var X0,yf,J0,Z0;X0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yf=function(){};J0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hr(En.current);var s=null;switch(n){case"input":i=jd(t,i),r=jd(t,r),s=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),s=[];break;case"textarea":i=Vd(t,i),r=Vd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ll)}Bd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ge("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Z0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gs(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Vk(t,e,n){var r=e.pendingProps;switch(Mh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return St(e.type)&&Fl(),tt(e),null;case 3:return r=e.stateNode,cs(),we(Et),we(ot),Gh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Qt!==null&&(kf(Qt),Qt=null))),yf(t,e),tt(e),null;case 5:Hh(e);var i=Hr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)J0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return tt(e),null}if(t=Hr(En.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gn]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)ge(io[i],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":zm(r,s),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ge("invalid",r);break;case"textarea":Wm(r,s),ge("invalid",r)}Bd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Fa(r.textContent,a,t),i=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ge("scroll",r)}switch(n){case"input":ba(r),Bm(r,s,!0);break;case"textarea":ba(r),Hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ll)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=I_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gn]=e,t[Fo]=r,X0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Wd(n,r),n){case"dialog":ge("cancel",t),ge("close",t),i=r;break;case"iframe":case"object":case"embed":ge("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)ge(io[i],t);i=r;break;case"source":ge("error",t),i=r;break;case"img":case"image":case"link":ge("error",t),ge("load",t),i=r;break;case"details":ge("toggle",t),i=r;break;case"input":zm(t,r),i=jd(t,r),ge("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ge("invalid",t);break;case"textarea":Wm(t,r),i=Vd(t,r),ge("invalid",t);break;default:i=r}Bd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?R_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&T_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&To(t,l):typeof l=="number"&&To(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ge("scroll",t):l!=null&&Sh(t,s,l,o))}switch(n){case"input":ba(t),Bm(t,r,!1);break;case"textarea":ba(t),Hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ll)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)Z0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Hr(jo.current),Hr(En.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[gn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Fa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gn]=e,e.stateNode=r}return tt(e),null;case 13:if(we(Se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&Rt!==null&&e.mode&1&&!(e.flags&128))g0(),ls(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[gn]=e}else ls(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else Qt!==null&&(kf(Qt),Qt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Se.current&1?$e===0&&($e=3):ip())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return cs(),yf(t,e),t===null&&Do(e.stateNode.containerInfo),tt(e),null;case 10:return Vh(e.type._context),tt(e),null;case 17:return St(e.type)&&Fl(),tt(e),null;case 19:if(we(Se),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Gs(s,!1);else{if($e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Bl(t),o!==null){for(e.flags|=128,Gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return he(Se,Se.current&1|2),e.child}t=t.sibling}s.tail!==null&&be()>fs&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Bl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ee)return tt(e),null}else 2*be()-s.renderingStartTime>fs&&n!==1073741824&&(e.flags|=128,r=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=be(),e.sibling=null,n=Se.current,he(Se,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return rp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function zk(t,e){switch(Mh(e),e.tag){case 1:return St(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),we(Et),we(ot),Gh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(we(Se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ls()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Se),null;case 4:return cs(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return rp(),null;case 24:return null;default:return null}}var Ua=!1,rt=!1,Bk=typeof WeakSet=="function"?WeakSet:Set,j=null;function ji(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function vf(t,e,n){try{n()}catch(r){ke(t,e,r)}}var Dg=!1;function Wk(t,e){if(ef=Al,t=r0(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var g;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(g=c.firstChild)!==null;)f=c,c=g;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(g=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tf={focusedElem:t,selectionRange:n},Al=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,C=y.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:qt(e.type,v),C);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){ke(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return y=Dg,Dg=!1,y}function mo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&vf(e,n,s)}i=i.next}while(i!==r)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function _f(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ew(t){var e=t.alternate;e!==null&&(t.alternate=null,ew(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gn],delete e[Fo],delete e[sf],delete e[Ik],delete e[Tk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tw(t){return t.tag===5||t.tag===3||t.tag===4}function Lg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ll));else if(r!==4&&(t=t.child,t!==null))for(wf(t,e,n),t=t.sibling;t!==null;)wf(t,e,n),t=t.sibling}function Ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Ef(t,e,n),t=t.sibling;t!==null;)Ef(t,e,n),t=t.sibling}var Ye=null,Yt=!1;function Xn(t,e,n){for(n=n.child;n!==null;)nw(t,e,n),n=n.sibling}function nw(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Mu,n)}catch{}switch(n.tag){case 5:rt||ji(n,e);case 6:var r=Ye,i=Yt;Ye=null,Xn(t,e,n),Ye=r,Yt=i,Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?Vc(t.parentNode,n):t.nodeType===1&&Vc(t,n),No(t)):Vc(Ye,n.stateNode));break;case 4:r=Ye,i=Yt,Ye=n.stateNode.containerInfo,Yt=!0,Xn(t,e,n),Ye=r,Yt=i;break;case 0:case 11:case 14:case 15:if(!rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vf(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!rt&&(ji(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ke(n,e,a)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(rt=(r=rt)||n.memoizedState!==null,Xn(t,e,n),rt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Fg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bk),e.forEach(function(r){var i=Zk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ye=a.stateNode,Yt=!1;break e;case 3:Ye=a.stateNode.containerInfo,Yt=!0;break e;case 4:Ye=a.stateNode.containerInfo,Yt=!0;break e}a=a.return}if(Ye===null)throw Error(b(160));nw(s,o,i),Ye=null,Yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)rw(e,t),e=e.sibling}function rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),cn(t),r&4){try{mo(3,t,t.return),Hu(3,t)}catch(v){ke(t,t.return,v)}try{mo(5,t,t.return)}catch(v){ke(t,t.return,v)}}break;case 1:Gt(e,t),cn(t),r&512&&n!==null&&ji(n,n.return);break;case 5:if(Gt(e,t),cn(t),r&512&&n!==null&&ji(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(v){ke(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&C_(i,s),Wd(a,o);var u=Wd(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?R_(i,c):d==="dangerouslySetInnerHTML"?T_(i,c):d==="children"?To(i,c):Sh(i,d,c,u)}switch(a){case"input":$d(i,s);break;case"textarea":k_(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Gi(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(v){ke(t,t.return,v)}}break;case 6:if(Gt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ke(t,t.return,v)}}break;case 3:if(Gt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(v){ke(t,t.return,v)}break;case 4:Gt(e,t),cn(t);break;case 13:Gt(e,t),cn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tp=be())),r&4&&Fg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(rt=(u=rt)||d,Gt(e,t),rt=u):Gt(e,t),cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(j=t,d=t.child;d!==null;){for(c=j=d;j!==null;){switch(f=j,g=f.child,f.tag){case 0:case 11:case 14:case 15:mo(4,f,f.return);break;case 1:ji(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ke(r,n,v)}}break;case 5:ji(f,f.return);break;case 22:if(f.memoizedState!==null){jg(c);continue}}g!==null?(g.return=f,j=g):jg(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=b_("display",o))}catch(v){ke(t,t.return,v)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(v){ke(t,t.return,v)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Gt(e,t),cn(t),r&4&&Fg(t);break;case 21:break;default:Gt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tw(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=Lg(t);Ef(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Lg(t);wf(t,a,o);break;default:throw Error(b(161))}}catch(l){ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Hk(t,e,n){j=t,iw(t)}function iw(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||rt;a=Ua;var u=rt;if(Ua=o,(rt=l)&&!u)for(j=i;j!==null;)o=j,l=o.child,o.tag===22&&o.memoizedState!==null?$g(i):l!==null?(l.return=o,j=l):$g(i);for(;s!==null;)j=s,iw(s),s=s.sibling;j=i,Ua=a,rt=u}Mg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):Mg(t)}}function Mg(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rt||Hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!rt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&No(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}rt||e.flags&512&&_f(e)}catch(f){ke(e,e.return,f)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function jg(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function $g(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(l){ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ke(e,i,l)}}var s=e.return;try{_f(e)}catch(l){ke(e,s,l)}break;case 5:var o=e.return;try{_f(e)}catch(l){ke(e,o,l)}}}catch(l){ke(e,e.return,l)}if(e===t){j=null;break}var a=e.sibling;if(a!==null){a.return=e.return,j=a;break}j=e.return}}var Gk=Math.ceil,Gl=Kn.ReactCurrentDispatcher,Zh=Kn.ReactCurrentOwner,Vt=Kn.ReactCurrentBatchConfig,ee=0,qe=null,De=null,Xe=0,bt=0,$i=Ar(0),$e=0,zo=null,si=0,Gu=0,ep=0,go=null,mt=null,tp=0,fs=1/0,Rn=null,ql=!1,Sf=null,_r=null,Va=!1,dr=null,Kl=0,yo=0,xf=null,ll=-1,ul=0;function dt(){return ee&6?be():ll!==-1?ll:ll=be()}function wr(t){return t.mode&1?ee&2&&Xe!==0?Xe&-Xe:Rk.transition!==null?(ul===0&&(ul=V_()),ul):(t=oe,t!==0||(t=window.event,t=t===void 0?16:K_(t.type)),t):1}function nn(t,e,n,r){if(50<yo)throw yo=0,xf=null,Error(b(185));oa(t,n,r),(!(ee&2)||t!==qe)&&(t===qe&&(!(ee&2)&&(Gu|=n),$e===4&&rr(t,Xe)),xt(t,r),n===1&&ee===0&&!(e.mode&1)&&(fs=be()+500,zu&&Or()))}function xt(t,e){var n=t.callbackNode;RC(t,e);var r=Nl(t,t===qe?Xe:0);if(r===0)n!==null&&Km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Km(n),e===1)t.tag===0?bk(Ug.bind(null,t)):h0(Ug.bind(null,t)),Ck(function(){!(ee&6)&&Or()}),n=null;else{switch(z_(r)){case 1:n=Th;break;case 4:n=$_;break;case 16:n=Pl;break;case 536870912:n=U_;break;default:n=Pl}n=fw(n,sw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sw(t,e){if(ll=-1,ul=0,ee&6)throw Error(b(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Nl(t,t===qe?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Yl(t,r);else{e=r;var i=ee;ee|=2;var s=aw();(qe!==t||Xe!==e)&&(Rn=null,fs=be()+500,Qr(t,e));do try{Yk();break}catch(a){ow(t,a)}while(1);Uh(),Gl.current=s,ee=i,De!==null?e=0:(qe=null,Xe=0,e=$e)}if(e!==0){if(e===2&&(i=Yd(t),i!==0&&(r=i,e=Cf(t,i))),e===1)throw n=zo,Qr(t,0),rr(t,r),xt(t,be()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!qk(i)&&(e=Yl(t,r),e===2&&(s=Yd(t),s!==0&&(r=s,e=Cf(t,s))),e===1))throw n=zo,Qr(t,0),rr(t,r),xt(t,be()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:Ur(t,mt,Rn);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=tp+500-be(),10<e)){if(Nl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=rf(Ur.bind(null,t,mt,Rn),e);break}Ur(t,mt,Rn);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-tn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Gk(r/1960))-r,10<r){t.timeoutHandle=rf(Ur.bind(null,t,mt,Rn),r);break}Ur(t,mt,Rn);break;case 5:Ur(t,mt,Rn);break;default:throw Error(b(329))}}}return xt(t,be()),t.callbackNode===n?sw.bind(null,t):null}function Cf(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Qr(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=mt,mt=n,e!==null&&kf(e)),t}function kf(t){mt===null?mt=t:mt.push.apply(mt,t)}function qk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!on(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~ep,e&=~Gu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-tn(e),r=1<<n;t[n]=-1,e&=~r}}function Ug(t){if(ee&6)throw Error(b(327));Xi();var e=Nl(t,0);if(!(e&1))return xt(t,be()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var r=Yd(t);r!==0&&(e=r,n=Cf(t,r))}if(n===1)throw n=zo,Qr(t,0),rr(t,e),xt(t,be()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ur(t,mt,Rn),xt(t,be()),null}function np(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(fs=be()+500,zu&&Or())}}function oi(t){dr!==null&&dr.tag===0&&!(ee&6)&&Xi();var e=ee;ee|=1;var n=Vt.transition,r=oe;try{if(Vt.transition=null,oe=1,t)return t()}finally{oe=r,Vt.transition=n,ee=e,!(ee&6)&&Or()}}function rp(){bt=$i.current,we($i)}function Qr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xk(n)),De!==null)for(n=De.return;n!==null;){var r=n;switch(Mh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:cs(),we(Et),we(ot),Gh();break;case 5:Hh(r);break;case 4:cs();break;case 13:we(Se);break;case 19:we(Se);break;case 10:Vh(r.type._context);break;case 22:case 23:rp()}n=n.return}if(qe=t,De=t=Er(t.current,null),Xe=bt=e,$e=0,zo=null,ep=Gu=si=0,mt=go=null,Wr!==null){for(e=0;e<Wr.length;e++)if(n=Wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wr=null}return t}function ow(t,e){do{var n=De;try{if(Uh(),sl.current=Hl,Wl){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wl=!1}if(ii=0,ze=Me=xe=null,po=!1,$o=0,Zh.current=null,n===null||n.return===null){$e=1,zo=e,De=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Tg(o);if(g!==null){g.flags&=-257,bg(g,o,a,s,e),g.mode&1&&Ig(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){Ig(s,u,e),ip();break e}l=Error(b(426))}}else if(Ee&&a.mode&1){var C=Tg(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),bg(C,o,a,s,e),jh(ds(l,a));break e}}s=l=ds(l,a),$e!==4&&($e=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=B0(s,l,e);_g(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_r===null||!_r.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=W0(s,a,e);_g(s,E);break e}}s=s.return}while(s!==null)}uw(n)}catch(S){e=S,De===n&&n!==null&&(De=n=n.return);continue}break}while(1)}function aw(){var t=Gl.current;return Gl.current=Hl,t===null?Hl:t}function ip(){($e===0||$e===3||$e===2)&&($e=4),qe===null||!(si&268435455)&&!(Gu&268435455)||rr(qe,Xe)}function Yl(t,e){var n=ee;ee|=2;var r=aw();(qe!==t||Xe!==e)&&(Rn=null,Qr(t,e));do try{Kk();break}catch(i){ow(t,i)}while(1);if(Uh(),ee=n,Gl.current=r,De!==null)throw Error(b(261));return qe=null,Xe=0,$e}function Kk(){for(;De!==null;)lw(De)}function Yk(){for(;De!==null&&!wC();)lw(De)}function lw(t){var e=dw(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?uw(t):De=e,Zh.current=null}function uw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zk(n,e),n!==null){n.flags&=32767,De=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$e=6,De=null;return}}else if(n=Vk(n,e,bt),n!==null){De=n;return}if(e=e.sibling,e!==null){De=e;return}De=e=t}while(e!==null);$e===0&&($e=5)}function Ur(t,e,n){var r=oe,i=Vt.transition;try{Vt.transition=null,oe=1,Qk(t,e,n,r)}finally{Vt.transition=i,oe=r}return null}function Qk(t,e,n,r){do Xi();while(dr!==null);if(ee&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(PC(t,s),t===qe&&(De=qe=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,fw(Pl,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Vt.transition,Vt.transition=null;var o=oe;oe=1;var a=ee;ee|=4,Zh.current=null,Wk(t,n),rw(n,t),gk(tf),Al=!!ef,tf=ef=null,t.current=n,Hk(n),EC(),ee=a,oe=o,Vt.transition=s}else t.current=n;if(Va&&(Va=!1,dr=t,Kl=i),s=t.pendingLanes,s===0&&(_r=null),CC(n.stateNode),xt(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ql)throw ql=!1,t=Sf,Sf=null,t;return Kl&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===xf?yo++:(yo=0,xf=t):yo=0,Or(),null}function Xi(){if(dr!==null){var t=z_(Kl),e=Vt.transition,n=oe;try{if(Vt.transition=null,oe=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,Kl=0,ee&6)throw Error(b(331));var i=ee;for(ee|=4,j=t.current;j!==null;){var s=j,o=s.child;if(j.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(j=u;j!==null;){var d=j;switch(d.tag){case 0:case 11:case 15:mo(8,d,s)}var c=d.child;if(c!==null)c.return=d,j=c;else for(;j!==null;){d=j;var f=d.sibling,g=d.return;if(ew(d),d===u){j=null;break}if(f!==null){f.return=g,j=f;break}j=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var C=v.sibling;v.sibling=null,v=C}while(v!==null)}}j=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,j=o;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,j=p;break e}j=s.return}}var h=t.current;for(j=h;j!==null;){o=j;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,j=m;else e:for(o=h;j!==null;){if(a=j,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hu(9,a)}}catch(S){ke(a,a.return,S)}if(a===o){j=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,j=E;break e}j=a.return}}if(ee=i,Or(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Mu,t)}catch{}r=!0}return r}finally{oe=n,Vt.transition=e}}return!1}function Vg(t,e,n){e=ds(n,e),e=B0(t,e,1),t=vr(t,e,1),e=dt(),t!==null&&(oa(t,1,e),xt(t,e))}function ke(t,e,n){if(t.tag===3)Vg(t,t,n);else for(;e!==null;){if(e.tag===3){Vg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=ds(n,t),t=W0(e,t,1),e=vr(e,t,1),t=dt(),e!==null&&(oa(e,1,t),xt(e,t));break}}e=e.return}}function Xk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=dt(),t.pingedLanes|=t.suspendedLanes&n,qe===t&&(Xe&n)===n&&($e===4||$e===3&&(Xe&130023424)===Xe&&500>be()-tp?Qr(t,0):ep|=n),xt(t,e)}function cw(t,e){e===0&&(t.mode&1?(e=Na,Na<<=1,!(Na&130023424)&&(Na=4194304)):e=1);var n=dt();t=Bn(t,e),t!==null&&(oa(t,e,n),xt(t,n))}function Jk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cw(t,n)}function Zk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),cw(t,n)}var dw;dw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Et.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,Uk(t,e,n);yt=!!(t.flags&131072)}else yt=!1,Ee&&e.flags&1048576&&p0(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;al(t,e),t=e.pendingProps;var i=as(e,ot.current);Qi(e,n),i=Kh(null,e,r,t,i,n);var s=Yh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,Ml(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bh(e),i.updater=Bu,e.stateNode=i,i._reactInternals=e,df(e,r,t,n),e=pf(null,e,r,!0,s,n)):(e.tag=0,Ee&&s&&Fh(e),ut(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=tI(r),t=qt(r,t),i){case 0:e=hf(null,e,r,t,n);break e;case 1:e=Ng(null,e,r,t,n);break e;case 11:e=Rg(null,e,r,t,n);break e;case 14:e=Pg(null,e,r,qt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),hf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Ng(t,e,r,i,n);case 3:e:{if(K0(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,v0(t,e),zl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ds(Error(b(423)),e),e=Ag(t,e,r,n,i);break e}else if(r!==i){i=ds(Error(b(424)),e),e=Ag(t,e,r,n,i);break e}else for(Rt=yr(e.stateNode.containerInfo.firstChild),Pt=e,Ee=!0,Qt=null,n=S0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ls(),r===i){e=Wn(t,e,n);break e}ut(t,e,r,n)}e=e.child}return e;case 5:return x0(e),t===null&&lf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nf(r,i)?o=null:s!==null&&nf(r,s)&&(e.flags|=32),q0(t,e),ut(t,e,o,n),e.child;case 6:return t===null&&lf(e),null;case 13:return Y0(t,e,n);case 4:return Wh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=us(e,null,r,n):ut(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Rg(t,e,r,i,n);case 7:return ut(t,e,e.pendingProps,n),e.child;case 8:return ut(t,e,e.pendingProps.children,n),e.child;case 12:return ut(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,he(Ul,r._currentValue),r._currentValue=o,s!==null)if(on(s.value,o)){if(s.children===i.children&&!Et.current){e=Wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=jn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),uf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),uf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ut(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Qi(e,n),i=zt(i),r=r(i),e.flags|=1,ut(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),Pg(t,e,r,i,n);case 15:return H0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),al(t,e),e.tag=1,St(r)?(t=!0,Ml(e)):t=!1,Qi(e,n),w0(e,r,i),df(e,r,i,n),pf(null,e,r,!0,t,n);case 19:return Q0(t,e,n);case 22:return G0(t,e,n)}throw Error(b(156,e.tag))};function fw(t,e){return j_(t,e)}function eI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new eI(t,e,n,r)}function sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function tI(t){if(typeof t=="function")return sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ch)return 11;if(t===kh)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")sp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Xr(n.children,i,s,e);case xh:o=8,i|=8;break;case Dd:return t=Ut(12,n,e,i|2),t.elementType=Dd,t.lanes=s,t;case Ld:return t=Ut(13,n,e,i),t.elementType=Ld,t.lanes=s,t;case Fd:return t=Ut(19,n,e,i),t.elementType=Fd,t.lanes=s,t;case E_:return qu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case __:o=10;break e;case w_:o=9;break e;case Ch:o=11;break e;case kh:o=14;break e;case er:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function qu(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=E_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Qc(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function nI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pc(0),this.expirationTimes=Pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function op(t,e,n,r,i,s,o,a,l){return t=new nI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),t}function rI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function hw(t){if(!t)return br;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(St(n))return f0(t,n,e)}return e}function pw(t,e,n,r,i,s,o,a,l){return t=op(n,r,!0,t,i,s,o,a,l),t.context=hw(null),n=t.current,r=dt(),i=wr(n),s=jn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,oa(t,i,r),xt(t,r),t}function Ku(t,e,n,r){var i=e.current,s=dt(),o=wr(i);return n=hw(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(nn(t,i,o,s),il(t,i,o)),o}function Ql(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function zg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ap(t,e){zg(t,e),(t=t.alternate)&&zg(t,e)}function iI(){return null}var mw=typeof reportError=="function"?reportError:function(t){console.error(t)};function lp(t){this._internalRoot=t}Yu.prototype.render=lp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Ku(t,e,null,null)};Yu.prototype.unmount=lp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;oi(function(){Ku(null,t,null,null)}),e[zn]=null}};function Yu(t){this._internalRoot=t}Yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=H_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&q_(t)}};function up(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bg(){}function sI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ql(o);s.call(u)}}var o=pw(e,r,t,0,null,!1,!1,"",Bg);return t._reactRootContainer=o,t[zn]=o.current,Do(t.nodeType===8?t.parentNode:t),oi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ql(l);a.call(u)}}var l=op(t,0,!1,null,null,!1,!1,"",Bg);return t._reactRootContainer=l,t[zn]=l.current,Do(t.nodeType===8?t.parentNode:t),oi(function(){Ku(e,l,n,r)}),l}function Xu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ql(o);a.call(l)}}Ku(e,o,t,i)}else o=sI(n,e,t,i,r);return Ql(o)}B_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(bh(e,n|1),xt(e,be()),!(ee&6)&&(fs=be()+500,Or()))}break;case 13:oi(function(){var r=Bn(t,1);if(r!==null){var i=dt();nn(r,t,1,i)}}),ap(t,1)}};Rh=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=dt();nn(e,t,134217728,n)}ap(t,134217728)}};W_=function(t){if(t.tag===13){var e=wr(t),n=Bn(t,e);if(n!==null){var r=dt();nn(n,t,e,r)}ap(t,e)}};H_=function(){return oe};G_=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Gd=function(t,e,n){switch(e){case"input":if($d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Vu(r);if(!i)throw Error(b(90));x_(r),$d(r,i)}}}break;case"textarea":k_(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};A_=np;O_=oi;var oI={usingClientEntryPoint:!1,Events:[la,Oi,Vu,P_,N_,np]},qs={findFiberByHostInstance:Br,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},aI={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=F_(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||iI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{Mu=za.inject(aI),wn=za}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oI;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!up(e))throw Error(b(200));return rI(t,e,null,n)};Dt.createRoot=function(t,e){if(!up(t))throw Error(b(299));var n=!1,r="",i=mw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=op(t,1,!1,null,null,n,!1,r,i),t[zn]=e.current,Do(t.nodeType===8?t.parentNode:t),new lp(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=F_(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return oi(t)};Dt.hydrate=function(t,e,n){if(!Qu(e))throw Error(b(200));return Xu(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!up(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=mw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=pw(e,null,t,1,n??null,i,!1,s,o),t[zn]=e.current,Do(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Yu(e)};Dt.render=function(t,e,n){if(!Qu(e))throw Error(b(200));return Xu(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!Qu(t))throw Error(b(40));return t._reactRootContainer?(oi(function(){Xu(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Dt.unstable_batchedUpdates=np;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qu(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Xu(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function gw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gw)}catch(t){console.error(t)}}gw(),p_.exports=Dt;var lI=p_.exports,Wg=lI;Ad.createRoot=Wg.createRoot,Ad.hydrateRoot=Wg.hydrateRoot;var vt=function(){return vt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vt.apply(this,arguments)};function cp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Xl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function yw(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var uI=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,cI=yw(function(t){return uI.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ye="-ms-",vo="-moz-",se="-webkit-",vw="comm",Ju="rule",dp="decl",dI="@import",_w="@keyframes",fI="@layer",hI=Math.abs,fp=String.fromCharCode,If=Object.assign;function pI(t,e){return Be(t,0)^45?(((e<<2^Be(t,0))<<2^Be(t,1))<<2^Be(t,2))<<2^Be(t,3):0}function ww(t){return t.trim()}function Pn(t,e){return(t=e.exec(t))?t[0]:t}function Y(t,e,n){return t.replace(e,n)}function dl(t,e){return t.indexOf(e)}function Be(t,e){return t.charCodeAt(e)|0}function hs(t,e,n){return t.slice(e,n)}function hn(t){return t.length}function Ew(t){return t.length}function so(t,e){return e.push(t),t}function mI(t,e){return t.map(e).join("")}function Hg(t,e){return t.filter(function(n){return!Pn(n,e)})}var Zu=1,ps=1,Sw=0,Wt=0,Ae=0,Ns="";function ec(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Zu,column:ps,length:o,return:"",siblings:a}}function Zn(t,e){return If(ec("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ci(t){for(;t.root;)t=Zn(t.root,{children:[t]});so(t,t.siblings)}function gI(){return Ae}function yI(){return Ae=Wt>0?Be(Ns,--Wt):0,ps--,Ae===10&&(ps=1,Zu--),Ae}function rn(){return Ae=Wt<Sw?Be(Ns,Wt++):0,ps++,Ae===10&&(ps=1,Zu++),Ae}function Jr(){return Be(Ns,Wt)}function fl(){return Wt}function tc(t,e){return hs(Ns,t,e)}function Tf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vI(t){return Zu=ps=1,Sw=hn(Ns=t),Wt=0,[]}function _I(t){return Ns="",t}function Xc(t){return ww(tc(Wt-1,bf(t===91?t+2:t===40?t+1:t)))}function wI(t){for(;(Ae=Jr())&&Ae<33;)rn();return Tf(t)>2||Tf(Ae)>3?"":" "}function EI(t,e){for(;--e&&rn()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return tc(t,fl()+(e<6&&Jr()==32&&rn()==32))}function bf(t){for(;rn();)switch(Ae){case t:return Wt;case 34:case 39:t!==34&&t!==39&&bf(Ae);break;case 40:t===41&&bf(t);break;case 92:rn();break}return Wt}function SI(t,e){for(;rn()&&t+Ae!==47+10;)if(t+Ae===42+42&&Jr()===47)break;return"/*"+tc(e,Wt-1)+"*"+fp(t===47?t:rn())}function xI(t){for(;!Tf(Jr());)rn();return tc(t,Wt)}function CI(t){return _I(hl("",null,null,null,[""],t=vI(t),0,[0],t))}function hl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,g=0,y=0,v=1,C=1,p=1,h=0,m="",E=i,S=s,T=r,k=m;C;)switch(y=h,h=rn()){case 40:if(y!=108&&Be(k,c-1)==58){dl(k+=Y(Xc(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=Xc(h);break;case 9:case 10:case 13:case 32:k+=wI(y);break;case 92:k+=EI(fl()-1,7);continue;case 47:switch(Jr()){case 42:case 47:so(kI(SI(rn(),fl()),e,n,l),l);break;default:k+="/"}break;case 123*v:a[u++]=hn(k)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:C=0;case 59+d:p==-1&&(k=Y(k,/\f/g,"")),g>0&&hn(k)-c&&so(g>32?qg(k+";",r,n,c-1,l):qg(Y(k," ","")+";",r,n,c-2,l),l);break;case 59:k+=";";default:if(so(T=Gg(k,e,n,u,d,i,a,m,E=[],S=[],c,s),s),h===123)if(d===0)hl(k,e,T,T,E,s,c,a,S);else switch(f===99&&Be(k,3)===110?100:f){case 100:case 108:case 109:case 115:hl(t,T,T,r&&so(Gg(t,T,T,0,0,i,a,m,i,E=[],c,S),S),i,S,c,a,r?E:S);break;default:hl(k,T,T,T,[""],S,0,a,S)}}u=d=g=0,v=p=1,m=k="",c=o;break;case 58:c=1+hn(k),g=y;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&yI()==125)continue}switch(k+=fp(h),h*v){case 38:p=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(hn(k)-1)*p,p=1;break;case 64:Jr()===45&&(k+=Xc(rn())),f=Jr(),d=c=hn(m=k+=xI(fl())),h++;break;case 45:y===45&&hn(k)==2&&(v=0)}}return s}function Gg(t,e,n,r,i,s,o,a,l,u,d,c){for(var f=i-1,g=i===0?s:[""],y=Ew(g),v=0,C=0,p=0;v<r;++v)for(var h=0,m=hs(t,f+1,f=hI(C=o[v])),E=t;h<y;++h)(E=ww(C>0?g[h]+" "+m:Y(m,/&\f/g,g[h])))&&(l[p++]=E);return ec(t,e,n,i===0?Ju:a,l,u,d,c)}function kI(t,e,n,r){return ec(t,e,n,vw,fp(gI()),hs(t,2,-2),0,r)}function qg(t,e,n,r,i){return ec(t,e,n,dp,hs(t,0,r),hs(t,r+1,-1),r,i)}function xw(t,e,n){switch(pI(t,e)){case 5103:return se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return se+t+t;case 4789:return vo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return se+t+vo+t+ye+t+t;case 5936:switch(Be(t,e+11)){case 114:return se+t+ye+Y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return se+t+ye+Y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return se+t+ye+Y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return se+t+ye+t+t;case 6165:return se+t+ye+"flex-"+t+t;case 5187:return se+t+Y(t,/(\w+).+(:[^]+)/,se+"box-$1$2"+ye+"flex-$1$2")+t;case 5443:return se+t+ye+"flex-item-"+Y(t,/flex-|-self/g,"")+(Pn(t,/flex-|baseline/)?"":ye+"grid-row-"+Y(t,/flex-|-self/g,""))+t;case 4675:return se+t+ye+"flex-line-pack"+Y(t,/align-content|flex-|-self/g,"")+t;case 5548:return se+t+ye+Y(t,"shrink","negative")+t;case 5292:return se+t+ye+Y(t,"basis","preferred-size")+t;case 6060:return se+"box-"+Y(t,"-grow","")+se+t+ye+Y(t,"grow","positive")+t;case 4554:return se+Y(t,/([^-])(transform)/g,"$1"+se+"$2")+t;case 6187:return Y(Y(Y(t,/(zoom-|grab)/,se+"$1"),/(image-set)/,se+"$1"),t,"")+t;case 5495:case 3959:return Y(t,/(image-set\([^]*)/,se+"$1$`$1");case 4968:return Y(Y(t,/(.+:)(flex-)?(.*)/,se+"box-pack:$3"+ye+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+se+t+t;case 4200:if(!Pn(t,/flex-|baseline/))return ye+"grid-column-align"+hs(t,e)+t;break;case 2592:case 3360:return ye+Y(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Pn(r.props,/grid-\w+-end/)})?~dl(t+(n=n[e].value),"span")?t:ye+Y(t,"-start","")+t+ye+"grid-row-span:"+(~dl(n,"span")?Pn(n,/\d+/):+Pn(n,/\d+/)-+Pn(t,/\d+/))+";":ye+Y(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Pn(r.props,/grid-\w+-start/)})?t:ye+Y(Y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Y(t,/(.+)-inline(.+)/,se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(hn(t)-1-e>6)switch(Be(t,e+1)){case 109:if(Be(t,e+4)!==45)break;case 102:return Y(t,/(.+:)(.+)-([^]+)/,"$1"+se+"$2-$3$1"+vo+(Be(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~dl(t,"stretch")?xw(Y(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return ye+i+":"+s+u+(o?ye+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(Be(t,e+6)===121)return Y(t,":",":"+se)+t;break;case 6444:switch(Be(t,Be(t,14)===45?18:11)){case 120:return Y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+se+(Be(t,14)===45?"inline-":"")+"box$3$1"+se+"$2$3$1"+ye+"$2box$3")+t;case 100:return Y(t,":",":"+ye)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Y(t,"scroll-","scroll-snap-")+t}return t}function Jl(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function II(t,e,n,r){switch(t.type){case fI:if(t.children.length)break;case dI:case dp:return t.return=t.return||t.value;case vw:return"";case _w:return t.return=t.value+"{"+Jl(t.children,r)+"}";case Ju:if(!hn(t.value=t.props.join(",")))return""}return hn(n=Jl(t.children,r))?t.return=t.value+"{"+n+"}":""}function TI(t){var e=Ew(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function bI(t){return function(e){e.root||(e=e.return)&&t(e)}}function RI(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case dp:t.return=xw(t.value,t.length,n);return;case _w:return Jl([Zn(t,{value:Y(t.value,"@","@"+se)})],r);case Ju:if(t.length)return mI(n=t.props,function(i){switch(Pn(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ci(Zn(t,{props:[Y(i,/:(read-\w+)/,":"+vo+"$1")]})),Ci(Zn(t,{props:[i]})),If(t,{props:Hg(n,r)});break;case"::placeholder":Ci(Zn(t,{props:[Y(i,/:(plac\w+)/,":"+se+"input-$1")]})),Ci(Zn(t,{props:[Y(i,/:(plac\w+)/,":"+vo+"$1")]})),Ci(Zn(t,{props:[Y(i,/:(plac\w+)/,ye+"input-$1")]})),Ci(Zn(t,{props:[i]})),If(t,{props:Hg(n,r)});break}return""})}}var Cw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ms=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",hp=typeof window<"u"&&"HTMLElement"in window,PI=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),nc=Object.freeze([]),gs=Object.freeze({});function NI(t,e,n){return n===void 0&&(n=gs),t.theme!==n.theme&&t.theme||e||n.theme}var kw=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),AI=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OI=/(^-|-$)/g;function Kg(t){return t.replace(AI,"-").replace(OI,"")}var DI=/(a)(d)/gi,Yg=function(t){return String.fromCharCode(t+(t>25?39:97))};function Rf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Yg(e%52)+n;return(Yg(e%52)+n).replace(DI,"$1-$2")}var Jc,Ui=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Iw=function(t){return Ui(5381,t)};function LI(t){return Rf(Iw(t)>>>0)}function FI(t){return t.displayName||t.name||"Component"}function Zc(t){return typeof t=="string"&&!0}var Tw=typeof Symbol=="function"&&Symbol.for,bw=Tw?Symbol.for("react.memo"):60115,MI=Tw?Symbol.for("react.forward_ref"):60112,jI={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$I={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Rw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},UI=((Jc={})[MI]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Jc[bw]=Rw,Jc);function Qg(t){return("type"in(e=t)&&e.type.$$typeof)===bw?Rw:"$$typeof"in t?UI[t.$$typeof]:jI;var e}var VI=Object.defineProperty,zI=Object.getOwnPropertyNames,Xg=Object.getOwnPropertySymbols,BI=Object.getOwnPropertyDescriptor,WI=Object.getPrototypeOf,Jg=Object.prototype;function Pw(t,e,n){if(typeof e!="string"){if(Jg){var r=WI(e);r&&r!==Jg&&Pw(t,r,n)}var i=zI(e);Xg&&(i=i.concat(Xg(e)));for(var s=Qg(t),o=Qg(e),a=0;a<i.length;++a){var l=i[a];if(!(l in $I||n&&n[l]||o&&l in o||s&&l in s)){var u=BI(e,l);try{VI(t,l,u)}catch{}}}}return t}function ys(t){return typeof t=="function"}function pp(t){return typeof t=="object"&&"styledComponentId"in t}function Gr(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Zg(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function Bo(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Pf(t,e,n){if(n===void 0&&(n=!1),!n&&!Bo(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Pf(t[r],e[r]);else if(Bo(e))for(var r in e)t[r]=Pf(t[r],e[r]);return t}function mp(t,e){Object.defineProperty(t,"toString",{value:e})}function ca(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var HI=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ca(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),pl=new Map,Zl=new Map,ed=1,Ba=function(t){if(pl.has(t))return pl.get(t);for(;Zl.has(ed);)ed++;var e=ed++;return pl.set(t,e),Zl.set(e,t),e},GI=function(t,e){pl.set(t,e),Zl.set(e,t)},qI="style[".concat(ms,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),KI=new RegExp("^".concat(ms,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YI=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},QI=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(KI);if(l){var u=0|parseInt(l[1],10),d=l[2];u!==0&&(GI(d,u),YI(t,d,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function XI(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Nw=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(ms,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(ms,"active"),r.setAttribute("data-styled-version","6.0.7");var o=XI();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},JI=function(){function t(e){this.element=Nw(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ca(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),ZI=function(){function t(e){this.element=Nw(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),eT=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),ey=hp,tT={isServer:!hp,useCSSOMInjection:!PI},Aw=function(){function t(e,n,r){e===void 0&&(e=gs),n===void 0&&(n={});var i=this;this.options=vt(vt({},tT),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&hp&&ey&&(ey=!1,function(s){for(var o=document.querySelectorAll(qI),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(ms)!=="active"&&(QI(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),mp(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(c){var f=function(p){return Zl.get(p)}(c);if(f===void 0)return"continue";var g=s.names.get(f),y=o.getGroup(c);if(g===void 0||y.length===0)return"continue";var v="".concat(ms,".g").concat(c,'[id="').concat(f,'"]'),C="";g!==void 0&&g.forEach(function(p){p.length>0&&(C+="".concat(p,","))}),l+="".concat(y).concat(v,'{content:"').concat(C,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return l}(i)})}return t.registerId=function(e){return Ba(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(vt(vt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new eT(i):r?new JI(i):new ZI(i)}(this.options),new HI(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Ba(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Ba(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Ba(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),nT=/&/g,rT=/^\s*\/\/.*$/gm;function Ow(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ow(n.children,e)),n})}function iT(t){var e,n,r,i=t===void 0?gs:t,s=i.options,o=s===void 0?gs:s,a=i.plugins,l=a===void 0?nc:a,u=function(f,g,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(e):f},d=l.slice();d.push(function(f){f.type===Ju&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(nT,n).replace(r,u))}),o.prefix&&d.push(RI),d.push(II);var c=function(f,g,y,v){g===void 0&&(g=""),y===void 0&&(y=""),v===void 0&&(v="&"),e=v,n=g,r=new RegExp("\\".concat(n,"\\b"),"g");var C=f.replace(rT,""),p=CI(y||g?"".concat(y," ").concat(g," { ").concat(C," }"):C);o.namespace&&(p=Ow(p,o.namespace));var h=[];return Jl(p,TI(d.concat(bI(function(m){return h.push(m)})))),h};return c.hash=l.length?l.reduce(function(f,g){return g.name||ca(15),Ui(f,g.name)},5381).toString():"",c}var sT=new Aw,Nf=iT(),Dw=de.createContext({shouldForwardProp:void 0,styleSheet:sT,stylis:Nf});Dw.Consumer;de.createContext(void 0);function ty(){return R.useContext(Dw)}var oT=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Nf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,mp(this,function(){throw ca(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Nf),this.name+e.hash},t}(),aT=function(t){return t>="A"&&t<="Z"};function ny(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;aT(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var Lw=function(t){return t==null||t===!1||t===""},Fw=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!Lw(s)&&(Array.isArray(s)&&s.isCss||ys(s)?r.push("".concat(ny(i),":"),s,";"):Bo(s)?r.push.apply(r,Xl(Xl(["".concat(i," {")],Fw(s),!1),["}"],!1)):r.push("".concat(ny(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Cw||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Zr(t,e,n,r){if(Lw(t))return[];if(pp(t))return[".".concat(t.styledComponentId)];if(ys(t)){if(!ys(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Zr(i,e,n,r)}var s;return t instanceof oT?n?(t.inject(n,r),[t.getName(r)]):[t]:Bo(t)?Fw(t):Array.isArray(t)?Array.prototype.concat.apply(nc,t.map(function(o){return Zr(o,e,n,r)})):[t.toString()]}function lT(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(ys(n)&&!pp(n))return!1}return!0}var uT=Iw("6.0.7"),cT=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&lT(e),this.componentId=n,this.baseHash=Ui(uT,n),this.baseStyle=r,Aw.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Gr(i,this.staticRulesId);else{var s=Zg(Zr(this.rules,e,n,r)),o=Rf(Ui(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Gr(i,o),this.staticRulesId=o}else{for(var l=Ui(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=Zg(Zr(c,e,n,r));l=Ui(l,f),u+=f}}if(u){var g=Rf(l>>>0);n.hasNameForId(this.componentId,g)||n.insertRules(this.componentId,g,r(u,".".concat(g),void 0,this.componentId)),i=Gr(i,g)}}return i},t}(),Mw=de.createContext(void 0);Mw.Consumer;var td={};function dT(t,e,n){var r=pp(t),i=t,s=!Zc(t),o=e.attrs,a=o===void 0?nc:o,l=e.componentId,u=l===void 0?function(m,E){var S=typeof m!="string"?"sc":Kg(m);td[S]=(td[S]||0)+1;var T="".concat(S,"-").concat(LI("6.0.7"+S+td[S]));return E?"".concat(E,"-").concat(T):T}(e.displayName,e.parentComponentId):l,d=e.displayName;d===void 0&&function(m){return Zc(m)?"styled.".concat(m):"Styled(".concat(FI(m),")")}(t);var c=e.displayName&&e.componentId?"".concat(Kg(e.displayName),"-").concat(e.componentId):e.componentId||u,f=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,g=e.shouldForwardProp;if(r&&i.shouldForwardProp){var y=i.shouldForwardProp;if(e.shouldForwardProp){var v=e.shouldForwardProp;g=function(m,E){return y(m,E)&&v(m,E)}}else g=y}var C=new cT(n,c,r?i.componentStyle:void 0);function p(m,E){return function(S,T,k){var A=S.attrs,$=S.componentStyle,M=S.defaultProps,q=S.foldedComponentIds,W=S.styledComponentId,K=S.target,le=de.useContext(Mw),Pe=ty(),Le=S.shouldForwardProp||Pe.shouldForwardProp,pe=function(Ht,Ze,ln){for(var Ke,lt=vt(vt({},Ze),{className:void 0,theme:ln}),Mr=0;Mr<Ht.length;Mr+=1){var jr=ys(Ke=Ht[Mr])?Ke(lt):Ke;for(var un in jr)lt[un]=un==="className"?Gr(lt[un],jr[un]):un==="style"?vt(vt({},lt[un]),jr[un]):jr[un]}return Ze.className&&(lt.className=Gr(lt.className,Ze.className)),lt}(A,T,NI(T,le,M)||gs),O=pe.as||K,V={};for(var z in pe)pe[z]===void 0||z[0]==="$"||z==="as"||z==="theme"||(z==="forwardedAs"?V.as=pe.forwardedAs:Le&&!Le(z,O)||(V[z]=pe[z]));var ue=function(Ht,Ze){var ln=ty(),Ke=Ht.generateAndInjectStyles(Ze,ln.styleSheet,ln.stylis);return Ke}($,pe),me=Gr(q,W);return ue&&(me+=" "+ue),pe.className&&(me+=" "+pe.className),V[Zc(O)&&!kw.has(O)?"class":"className"]=me,V.ref=k,R.createElement(O,V)}(h,m,E)}var h=de.forwardRef(p);return h.attrs=f,h.componentStyle=C,h.shouldForwardProp=g,h.foldedComponentIds=r?Gr(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=c,h.target=r?i.target:t,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(m){this._foldedDefaultProps=r?function(E){for(var S=[],T=1;T<arguments.length;T++)S[T-1]=arguments[T];for(var k=0,A=S;k<A.length;k++)Pf(E,A[k],!0);return E}({},i.defaultProps,m):m}}),mp(h,function(){return".".concat(h.styledComponentId)}),s&&Pw(h,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function ry(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var iy=function(t){return Object.assign(t,{isCss:!0})};function fT(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ys(t)||Bo(t)){var r=t;return iy(Zr(ry(nc,Xl([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Zr(i):iy(Zr(ry(i,e)))}function Af(t,e,n){if(n===void 0&&(n=gs),!e)throw ca(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,fT.apply(void 0,Xl([i],s,!1)))};return r.attrs=function(i){return Af(t,e,vt(vt({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return Af(t,e,vt(vt({},n),i))},r}var jw=function(t){return Af(dT,t)},B=jw;kw.forEach(function(t){B[t]=jw(t)});const hT=B.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`,pT=B(Fu)`
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
`,mT=B.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,nd=B(Fu)`
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
`,gT=B.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`,sy=B.button`
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
`,yT=B.button`
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
`,vT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgBvZY/UsJQEMa/fS926uANYuVYiXoAQe3FE4hHsNGxcqgYPAWeAOxV4ABKrBhtzA1k0E7y1vcCBPkfgeTXEPIy+7HLt9klhCCZ/0pZgk6YOAWCDUbCPyA09bVDTE5b8b1zvVadFYumHe7dtrIEcQOwjVCQy1C5l8v14sQnxt1M5j9tS66UGJzEXJDreT9p53rDHT4Rwzf2C99n0rLq84sZ2JbSqu8XWpmRnzIoph8gKmGZMGWfr1bvRgRNGU1mgSGWR9Pz2ru98gYllXKlEoGYIaHLG1TNFzRuDO/EuUh2NLqCHetHS0+DTFNLiQpigDykhZAqg5hQpDKCSOwgJkiIA6GduUCD/xvbmCaKVphEgvj9mBEjAsRNxEdTmDc74sPRpuEa4kLRq4BHZcQFc9mfFvx29KHHko0oYXZp63GzMy0U5xA1XY1gHur2qOuPaF4C3ezMZX/F8Nqn0bSIjqm8dO9bIEjbVRdtvsCyYZz7sYcFO6JPRZ3+kjI1MdS5LuVAF4xdE7mRsiFkZQHnOuYv+pvZVMG+8GEWgm5CC2tzGDf6lZoAIUycxrFe8TmjxfXsNPsqdSeMKRsZkZpeB8u0/VCdFesXTIytwiPfYywAAAAASUVORK5CYII=";var $w={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},oy=de.createContext&&de.createContext($w),_T=["attr","size","title"];function wT(t,e){if(t==null)return{};var n=ET(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function ET(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function eu(){return eu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eu.apply(this,arguments)}function ay(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function tu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ay(Object(n),!0).forEach(function(r){ST(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ay(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ST(t,e,n){return e=xT(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xT(t){var e=CT(t,"string");return typeof e=="symbol"?e:e+""}function CT(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Uw(t){return t&&t.map((e,n)=>de.createElement(e.tag,tu({key:n},e.attr),Uw(e.child)))}function As(t){return e=>de.createElement(kT,eu({attr:tu({},t.attr)},e),Uw(t.child))}function kT(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=wT(t,_T),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),de.createElement("svg",eu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:tu(tu({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&de.createElement("title",null,s),t.children)};return oy!==void 0?de.createElement(oy.Consumer,null,n=>e(n)):e($w)}function IT(t){return As({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"},child:[]},{tag:"polyline",attr:{points:"10 17 15 12 10 7"},child:[]},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"},child:[]}]})(t)}function TT(t){return As({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}var da=t=>t.type==="checkbox",Vi=t=>t instanceof Date,ct=t=>t==null;const Vw=t=>typeof t=="object";var Ue=t=>!ct(t)&&!Array.isArray(t)&&Vw(t)&&!Vi(t),bT=t=>Ue(t)&&t.target?da(t.target)?t.target.checked:t.target.value:t,RT=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,PT=(t,e)=>t.has(RT(e)),NT=t=>{const e=t.constructor&&t.constructor.prototype;return Ue(e)&&e.hasOwnProperty("isPrototypeOf")},gp=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Mt(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(gp&&(t instanceof Blob||t instanceof FileList))&&(n||Ue(t)))if(e=n?[]:{},!n&&!NT(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Mt(t[r]));else return t;return e}var fa=t=>Array.isArray(t)?t.filter(Boolean):[],Te=t=>t===void 0,F=(t,e,n)=>{if(!e||!Ue(t))return n;const r=fa(e.split(/[,[\].]+?/)).reduce((i,s)=>ct(i)?i:i[s],t);return Te(r)||r===t?Te(t[e])?n:t[e]:r},ir=t=>typeof t=="boolean",yp=t=>/^\w*$/.test(t),zw=t=>fa(t.replace(/["|']|\]/g,"").split(/\.|\[/)),ve=(t,e,n)=>{let r=-1;const i=yp(e)?[e]:zw(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=Ue(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}if(a==="__proto__")return;t[a]=l,t=t[a]}return t};const ly={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Xt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},In={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};de.createContext(null);var AT=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Xt.all&&(e._proxyFormState[o]=!r||Xt.all),n&&(n[o]=!0),t[o]}});return i},Tt=t=>Ue(t)&&!Object.keys(t).length,OT=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return Tt(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||Xt.all))},rd=t=>Array.isArray(t)?t:[t];function DT(t){const e=de.useRef(t);e.current=t,de.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var yn=t=>typeof t=="string",LT=(t,e,n,r,i)=>yn(t)?(r&&e.watch.add(t),F(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),F(n,s))):(r&&(e.watchAll=!0),n),Bw=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},uy=t=>({isOnSubmit:!t||t===Xt.onSubmit,isOnBlur:t===Xt.onBlur,isOnChange:t===Xt.onChange,isOnAll:t===Xt.all,isOnTouch:t===Xt.onTouched}),cy=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const _o=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=F(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;_o(a,e)}else Ue(a)&&_o(a,e)}}};var FT=(t,e,n)=>{const r=fa(F(t,n));return ve(r,"root",e[n]),ve(t,n,r),t},vp=t=>t.type==="file",fr=t=>typeof t=="function",nu=t=>{if(!gp)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},ml=t=>yn(t),_p=t=>t.type==="radio",ru=t=>t instanceof RegExp;const dy={value:!1,isValid:!1},fy={value:!0,isValid:!0};var Ww=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Te(t[0].attributes.value)?Te(t[0].value)||t[0].value===""?fy:{value:t[0].value,isValid:!0}:fy:dy}return dy};const hy={isValid:!1,value:null};var Hw=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,hy):hy;function py(t,e,n="validate"){if(ml(t)||Array.isArray(t)&&t.every(ml)||ir(t)&&!t)return{type:n,message:ml(t)?t:"",ref:e}}var ki=t=>Ue(t)&&!ru(t)?t:{value:t,message:""},my=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:d,max:c,pattern:f,validate:g,name:y,valueAsNumber:v,mount:C,disabled:p}=t._f,h=F(e,y);if(!C||p)return{};const m=o?o[0]:s,E=W=>{r&&m.reportValidity&&(m.setCustomValidity(ir(W)?"":W||""),m.reportValidity())},S={},T=_p(s),k=da(s),A=T||k,$=(v||vp(s))&&Te(s.value)&&Te(h)||nu(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,M=Bw.bind(null,y,n,S),q=(W,K,le,Pe=In.maxLength,Le=In.minLength)=>{const pe=W?K:le;S[y]={type:W?Pe:Le,message:pe,ref:s,...M(W?Pe:Le,pe)}};if(i?!Array.isArray(h)||!h.length:a&&(!A&&($||ct(h))||ir(h)&&!h||k&&!Ww(o).isValid||T&&!Hw(o).isValid)){const{value:W,message:K}=ml(a)?{value:!!a,message:a}:ki(a);if(W&&(S[y]={type:In.required,message:K,ref:m,...M(In.required,K)},!n))return E(K),S}if(!$&&(!ct(d)||!ct(c))){let W,K;const le=ki(c),Pe=ki(d);if(!ct(h)&&!isNaN(h)){const Le=s.valueAsNumber||h&&+h;ct(le.value)||(W=Le>le.value),ct(Pe.value)||(K=Le<Pe.value)}else{const Le=s.valueAsDate||new Date(h),pe=z=>new Date(new Date().toDateString()+" "+z),O=s.type=="time",V=s.type=="week";yn(le.value)&&h&&(W=O?pe(h)>pe(le.value):V?h>le.value:Le>new Date(le.value)),yn(Pe.value)&&h&&(K=O?pe(h)<pe(Pe.value):V?h<Pe.value:Le<new Date(Pe.value))}if((W||K)&&(q(!!W,le.message,Pe.message,In.max,In.min),!n))return E(S[y].message),S}if((l||u)&&!$&&(yn(h)||i&&Array.isArray(h))){const W=ki(l),K=ki(u),le=!ct(W.value)&&h.length>+W.value,Pe=!ct(K.value)&&h.length<+K.value;if((le||Pe)&&(q(le,W.message,K.message),!n))return E(S[y].message),S}if(f&&!$&&yn(h)){const{value:W,message:K}=ki(f);if(ru(W)&&!h.match(W)&&(S[y]={type:In.pattern,message:K,ref:s,...M(In.pattern,K)},!n))return E(K),S}if(g){if(fr(g)){const W=await g(h,e),K=py(W,m);if(K&&(S[y]={...K,...M(In.validate,K.message)},!n))return E(K.message),S}else if(Ue(g)){let W={};for(const K in g){if(!Tt(W)&&!n)break;const le=py(await g[K](h,e),m,K);le&&(W={...le,...M(K,le.message)},E(le.message),n&&(S[y]=W))}if(!Tt(W)&&(S[y]={ref:m,...W},!n))return S}}return E(!0),S};function MT(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Te(t)?r++:t[e[r++]];return t}function jT(t){for(const e in t)if(t.hasOwnProperty(e)&&!Te(t[e]))return!1;return!0}function Fe(t,e){const n=Array.isArray(e)?e:yp(e)?[e]:zw(e),r=n.length===1?t:MT(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Ue(r)&&Tt(r)||Array.isArray(r)&&jT(r))&&Fe(t,n.slice(0,-1)),t}var id=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},iu=t=>ct(t)||!Vw(t);function qr(t,e){if(iu(t)||iu(e))return t===e;if(Vi(t)&&Vi(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Vi(s)&&Vi(o)||Ue(s)&&Ue(o)||Array.isArray(s)&&Array.isArray(o)?!qr(s,o):s!==o)return!1}}return!0}var Gw=t=>t.type==="select-multiple",$T=t=>_p(t)||da(t),sd=t=>nu(t)&&t.isConnected,qw=t=>{for(const e in t)if(fr(t[e]))return!0;return!1};function su(t,e={}){const n=Array.isArray(t);if(Ue(t)||n)for(const r in t)Array.isArray(t[r])||Ue(t[r])&&!qw(t[r])?(e[r]=Array.isArray(t[r])?[]:{},su(t[r],e[r])):ct(t[r])||(e[r]=!0);return e}function Kw(t,e,n){const r=Array.isArray(t);if(Ue(t)||r)for(const i in t)Array.isArray(t[i])||Ue(t[i])&&!qw(t[i])?Te(e)||iu(n[i])?n[i]=Array.isArray(t[i])?su(t[i],[]):{...su(t[i])}:Kw(t[i],ct(e)?{}:e[i],n[i]):n[i]=!qr(t[i],e[i]);return n}var Wa=(t,e)=>Kw(t,e,su(e)),Yw=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Te(t)?t:e?t===""?NaN:t&&+t:n&&yn(t)?new Date(t):r?r(t):t;function od(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return vp(e)?e.files:_p(e)?Hw(t.refs).value:Gw(e)?[...e.selectedOptions].map(({value:n})=>n):da(e)?Ww(t.refs).value:Yw(Te(e.value)?t.ref.value:e.value,t)}var UT=(t,e,n,r)=>{const i={};for(const s of t){const o=F(e,s);o&&ve(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Ks=t=>Te(t)?t:ru(t)?t.source:Ue(t)?ru(t.value)?t.value.source:t.value:t,VT=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function gy(t,e,n){const r=F(t,n);if(r||yp(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=F(e,s),a=F(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var zT=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,BT=(t,e)=>!fa(F(t,e)).length&&Fe(t,e);const WT={mode:Xt.onSubmit,reValidateMode:Xt.onChange,shouldFocusError:!0};function HT(t={}){let e={...WT,...t},n={submitCount:0,isDirty:!1,isLoading:fr(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=Ue(e.defaultValues)||Ue(e.values)?Mt(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:Mt(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,u=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},c={values:id(),array:id(),state:id()},f=uy(e.mode),g=uy(e.reValidateMode),y=e.criteriaMode===Xt.all,v=w=>x=>{clearTimeout(u),u=setTimeout(w,x)},C=async w=>{if(d.isValid||w){const x=e.resolver?Tt((await A()).errors):await M(r,!0);x!==n.isValid&&c.state.next({isValid:x})}},p=(w,x)=>{(d.isValidating||d.validatingFields)&&((w||Array.from(a.mount)).forEach(I=>{I&&(x?ve(n.validatingFields,I,x):Fe(n.validatingFields,I))}),c.state.next({validatingFields:n.validatingFields,isValidating:!Tt(n.validatingFields)}))},h=(w,x=[],I,L,D=!0,P=!0)=>{if(L&&I){if(o.action=!0,P&&Array.isArray(F(r,w))){const U=I(F(r,w),L.argA,L.argB);D&&ve(r,w,U)}if(P&&Array.isArray(F(n.errors,w))){const U=I(F(n.errors,w),L.argA,L.argB);D&&ve(n.errors,w,U),BT(n.errors,w)}if(d.touchedFields&&P&&Array.isArray(F(n.touchedFields,w))){const U=I(F(n.touchedFields,w),L.argA,L.argB);D&&ve(n.touchedFields,w,U)}d.dirtyFields&&(n.dirtyFields=Wa(i,s)),c.state.next({name:w,isDirty:W(w,x),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ve(s,w,x)},m=(w,x)=>{ve(n.errors,w,x),c.state.next({errors:n.errors})},E=w=>{n.errors=w,c.state.next({errors:n.errors,isValid:!1})},S=(w,x,I,L)=>{const D=F(r,w);if(D){const P=F(s,w,Te(I)?F(i,w):I);Te(P)||L&&L.defaultChecked||x?ve(s,w,x?P:od(D._f)):Pe(w,P),o.mount&&C()}},T=(w,x,I,L,D)=>{let P=!1,U=!1;const ie={name:w},Ne=!!(F(r,w)&&F(r,w)._f&&F(r,w)._f.disabled);if(!I||L){d.isDirty&&(U=n.isDirty,n.isDirty=ie.isDirty=W(),P=U!==ie.isDirty);const It=Ne||qr(F(i,w),x);U=!!(!Ne&&F(n.dirtyFields,w)),It||Ne?Fe(n.dirtyFields,w):ve(n.dirtyFields,w,!0),ie.dirtyFields=n.dirtyFields,P=P||d.dirtyFields&&U!==!It}if(I){const It=F(n.touchedFields,w);It||(ve(n.touchedFields,w,I),ie.touchedFields=n.touchedFields,P=P||d.touchedFields&&It!==I)}return P&&D&&c.state.next(ie),P?ie:{}},k=(w,x,I,L)=>{const D=F(n.errors,w),P=d.isValid&&ir(x)&&n.isValid!==x;if(t.delayError&&I?(l=v(()=>m(w,I)),l(t.delayError)):(clearTimeout(u),l=null,I?ve(n.errors,w,I):Fe(n.errors,w)),(I?!qr(D,I):D)||!Tt(L)||P){const U={...L,...P&&ir(x)?{isValid:x}:{},errors:n.errors,name:w};n={...n,...U},c.state.next(U)}},A=async w=>{p(w,!0);const x=await e.resolver(s,e.context,UT(w||a.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return p(w),x},$=async w=>{const{errors:x}=await A(w);if(w)for(const I of w){const L=F(x,I);L?ve(n.errors,I,L):Fe(n.errors,I)}else n.errors=x;return x},M=async(w,x,I={valid:!0})=>{for(const L in w){const D=w[L];if(D){const{_f:P,...U}=D;if(P){const ie=a.array.has(P.name);p([L],!0);const Ne=await my(D,s,y,e.shouldUseNativeValidation&&!x,ie);if(p([L]),Ne[P.name]&&(I.valid=!1,x))break;!x&&(F(Ne,P.name)?ie?FT(n.errors,Ne,P.name):ve(n.errors,P.name,Ne[P.name]):Fe(n.errors,P.name))}U&&await M(U,x,I)}}return I.valid},q=()=>{for(const w of a.unMount){const x=F(r,w);x&&(x._f.refs?x._f.refs.every(I=>!sd(I)):!sd(x._f.ref))&&Ke(w)}a.unMount=new Set},W=(w,x)=>(w&&x&&ve(s,w,x),!qr(ue(),i)),K=(w,x,I)=>LT(w,a,{...o.mount?s:Te(x)?i:yn(w)?{[w]:x}:x},I,x),le=w=>fa(F(o.mount?s:i,w,t.shouldUnregister?F(i,w,[]):[])),Pe=(w,x,I={})=>{const L=F(r,w);let D=x;if(L){const P=L._f;P&&(!P.disabled&&ve(s,w,Yw(x,P)),D=nu(P.ref)&&ct(x)?"":x,Gw(P.ref)?[...P.ref.options].forEach(U=>U.selected=D.includes(U.value)):P.refs?da(P.ref)?P.refs.length>1?P.refs.forEach(U=>(!U.defaultChecked||!U.disabled)&&(U.checked=Array.isArray(D)?!!D.find(ie=>ie===U.value):D===U.value)):P.refs[0]&&(P.refs[0].checked=!!D):P.refs.forEach(U=>U.checked=U.value===D):vp(P.ref)?P.ref.value="":(P.ref.value=D,P.ref.type||c.values.next({name:w,values:{...s}})))}(I.shouldDirty||I.shouldTouch)&&T(w,D,I.shouldTouch,I.shouldDirty,!0),I.shouldValidate&&z(w)},Le=(w,x,I)=>{for(const L in x){const D=x[L],P=`${w}.${L}`,U=F(r,P);(a.array.has(w)||!iu(D)||U&&!U._f)&&!Vi(D)?Le(P,D,I):Pe(P,D,I)}},pe=(w,x,I={})=>{const L=F(r,w),D=a.array.has(w),P=Mt(x);ve(s,w,P),D?(c.array.next({name:w,values:{...s}}),(d.isDirty||d.dirtyFields)&&I.shouldDirty&&c.state.next({name:w,dirtyFields:Wa(i,s),isDirty:W(w,P)})):L&&!L._f&&!ct(P)?Le(w,P,I):Pe(w,P,I),cy(w,a)&&c.state.next({...n}),c.values.next({name:o.mount?w:void 0,values:{...s}})},O=async w=>{o.mount=!0;const x=w.target;let I=x.name,L=!0;const D=F(r,I),P=()=>x.type?od(D._f):bT(w),U=ie=>{L=Number.isNaN(ie)||ie===F(s,I,ie)};if(D){let ie,Ne;const It=P(),Si=w.type===ly.BLUR||w.type===ly.FOCUS_OUT,DS=!VT(D._f)&&!e.resolver&&!F(n.errors,I)&&!D._f.deps||zT(Si,F(n.touchedFields,I),n.isSubmitted,g,f),Sc=cy(I,a,Si);ve(s,I,It),Si?(D._f.onBlur&&D._f.onBlur(w),l&&l(0)):D._f.onChange&&D._f.onChange(w);const xc=T(I,It,Si,!1),LS=!Tt(xc)||Sc;if(!Si&&c.values.next({name:I,type:w.type,values:{...s}}),DS)return d.isValid&&C(),LS&&c.state.next({name:I,...Sc?{}:xc});if(!Si&&Sc&&c.state.next({...n}),e.resolver){const{errors:Tm}=await A([I]);if(U(It),L){const FS=gy(n.errors,r,I),bm=gy(Tm,r,FS.name||I);ie=bm.error,I=bm.name,Ne=Tt(Tm)}}else p([I],!0),ie=(await my(D,s,y,e.shouldUseNativeValidation))[I],p([I]),U(It),L&&(ie?Ne=!1:d.isValid&&(Ne=await M(r,!0)));L&&(D._f.deps&&z(D._f.deps),k(I,Ne,ie,xc))}},V=(w,x)=>{if(F(n.errors,x)&&w.focus)return w.focus(),1},z=async(w,x={})=>{let I,L;const D=rd(w);if(e.resolver){const P=await $(Te(w)?w:D);I=Tt(P),L=w?!D.some(U=>F(P,U)):I}else w?(L=(await Promise.all(D.map(async P=>{const U=F(r,P);return await M(U&&U._f?{[P]:U}:U)}))).every(Boolean),!(!L&&!n.isValid)&&C()):L=I=await M(r);return c.state.next({...!yn(w)||d.isValid&&I!==n.isValid?{}:{name:w},...e.resolver||!w?{isValid:I}:{},errors:n.errors}),x.shouldFocus&&!L&&_o(r,V,w?D:a.mount),L},ue=w=>{const x={...o.mount?s:i};return Te(w)?x:yn(w)?F(x,w):w.map(I=>F(x,I))},me=(w,x)=>({invalid:!!F((x||n).errors,w),isDirty:!!F((x||n).dirtyFields,w),error:F((x||n).errors,w),isValidating:!!F(n.validatingFields,w),isTouched:!!F((x||n).touchedFields,w)}),Ht=w=>{w&&rd(w).forEach(x=>Fe(n.errors,x)),c.state.next({errors:w?n.errors:{}})},Ze=(w,x,I)=>{const L=(F(r,w,{_f:{}})._f||{}).ref,D=F(n.errors,w)||{},{ref:P,message:U,type:ie,...Ne}=D;ve(n.errors,w,{...Ne,...x,ref:L}),c.state.next({name:w,errors:n.errors,isValid:!1}),I&&I.shouldFocus&&L&&L.focus&&L.focus()},ln=(w,x)=>fr(w)?c.values.subscribe({next:I=>w(K(void 0,x),I)}):K(w,x,!0),Ke=(w,x={})=>{for(const I of w?rd(w):a.mount)a.mount.delete(I),a.array.delete(I),x.keepValue||(Fe(r,I),Fe(s,I)),!x.keepError&&Fe(n.errors,I),!x.keepDirty&&Fe(n.dirtyFields,I),!x.keepTouched&&Fe(n.touchedFields,I),!x.keepIsValidating&&Fe(n.validatingFields,I),!e.shouldUnregister&&!x.keepDefaultValue&&Fe(i,I);c.values.next({values:{...s}}),c.state.next({...n,...x.keepDirty?{isDirty:W()}:{}}),!x.keepIsValid&&C()},lt=({disabled:w,name:x,field:I,fields:L,value:D})=>{if(ir(w)&&o.mount||w){const P=w?void 0:Te(D)?od(I?I._f:F(L,x)._f):D;ve(s,x,P),T(x,P,!1,!1,!0)}},Mr=(w,x={})=>{let I=F(r,w);const L=ir(x.disabled);return ve(r,w,{...I||{},_f:{...I&&I._f?I._f:{ref:{name:w}},name:w,mount:!0,...x}}),a.mount.add(w),I?lt({field:I,disabled:x.disabled,name:w,value:x.value}):S(w,!0,x.value),{...L?{disabled:x.disabled}:{},...e.progressive?{required:!!x.required,min:Ks(x.min),max:Ks(x.max),minLength:Ks(x.minLength),maxLength:Ks(x.maxLength),pattern:Ks(x.pattern)}:{},name:w,onChange:O,onBlur:O,ref:D=>{if(D){Mr(w,x),I=F(r,w);const P=Te(D.value)&&D.querySelectorAll&&D.querySelectorAll("input,select,textarea")[0]||D,U=$T(P),ie=I._f.refs||[];if(U?ie.find(Ne=>Ne===P):P===I._f.ref)return;ve(r,w,{_f:{...I._f,...U?{refs:[...ie.filter(sd),P,...Array.isArray(F(i,w))?[{}]:[]],ref:{type:P.type,name:w}}:{ref:P}}}),S(w,!1,void 0,P)}else I=F(r,w,{}),I._f&&(I._f.mount=!1),(e.shouldUnregister||x.shouldUnregister)&&!(PT(a.array,w)&&o.action)&&a.unMount.add(w)}}},jr=()=>e.shouldFocusError&&_o(r,V,a.mount),un=w=>{ir(w)&&(c.state.next({disabled:w}),_o(r,(x,I)=>{const L=F(r,I);L&&(x.disabled=L._f.disabled||w,Array.isArray(L._f.refs)&&L._f.refs.forEach(D=>{D.disabled=L._f.disabled||w}))},0,!1))},Cm=(w,x)=>async I=>{let L;I&&(I.preventDefault&&I.preventDefault(),I.persist&&I.persist());let D=Mt(s);if(c.state.next({isSubmitting:!0}),e.resolver){const{errors:P,values:U}=await A();n.errors=P,D=U}else await M(r);if(Fe(n.errors,"root"),Tt(n.errors)){c.state.next({errors:{}});try{await w(D,I)}catch(P){L=P}}else x&&await x({...n.errors},I),jr(),setTimeout(jr);if(c.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Tt(n.errors)&&!L,submitCount:n.submitCount+1,errors:n.errors}),L)throw L},OS=(w,x={})=>{F(r,w)&&(Te(x.defaultValue)?pe(w,Mt(F(i,w))):(pe(w,x.defaultValue),ve(i,w,Mt(x.defaultValue))),x.keepTouched||Fe(n.touchedFields,w),x.keepDirty||(Fe(n.dirtyFields,w),n.isDirty=x.defaultValue?W(w,Mt(F(i,w))):W()),x.keepError||(Fe(n.errors,w),d.isValid&&C()),c.state.next({...n}))},km=(w,x={})=>{const I=w?Mt(w):i,L=Mt(I),D=Tt(w),P=D?i:L;if(x.keepDefaultValues||(i=I),!x.keepValues){if(x.keepDirtyValues)for(const U of a.mount)F(n.dirtyFields,U)?ve(P,U,F(s,U)):pe(U,F(P,U));else{if(gp&&Te(w))for(const U of a.mount){const ie=F(r,U);if(ie&&ie._f){const Ne=Array.isArray(ie._f.refs)?ie._f.refs[0]:ie._f.ref;if(nu(Ne)){const It=Ne.closest("form");if(It){It.reset();break}}}}r={}}s=t.shouldUnregister?x.keepDefaultValues?Mt(i):{}:Mt(P),c.array.next({values:{...P}}),c.values.next({values:{...P}})}a={mount:x.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!d.isValid||!!x.keepIsValid||!!x.keepDirtyValues,o.watch=!!t.shouldUnregister,c.state.next({submitCount:x.keepSubmitCount?n.submitCount:0,isDirty:D?!1:x.keepDirty?n.isDirty:!!(x.keepDefaultValues&&!qr(w,i)),isSubmitted:x.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:D?[]:x.keepDirtyValues?x.keepDefaultValues&&s?Wa(i,s):n.dirtyFields:x.keepDefaultValues&&w?Wa(i,w):x.keepDirty?n.dirtyFields:{},touchedFields:x.keepTouched?n.touchedFields:{},errors:x.keepErrors?n.errors:{},isSubmitSuccessful:x.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},Im=(w,x)=>km(fr(w)?w(s):w,x);return{control:{register:Mr,unregister:Ke,getFieldState:me,handleSubmit:Cm,setError:Ze,_executeSchema:A,_getWatch:K,_getDirty:W,_updateValid:C,_removeUnmounted:q,_updateFieldArray:h,_updateDisabledField:lt,_getFieldArray:le,_reset:km,_resetDefaultValues:()=>fr(e.defaultValues)&&e.defaultValues().then(w=>{Im(w,e.resetOptions),c.state.next({isLoading:!1})}),_updateFormState:w=>{n={...n,...w}},_disableForm:un,_subjects:c,_proxyFormState:d,_setErrors:E,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(w){o=w},get _defaultValues(){return i},get _names(){return a},set _names(w){a=w},get _formState(){return n},set _formState(w){n=w},get _options(){return e},set _options(w){e={...e,...w}}},trigger:z,register:Mr,handleSubmit:Cm,watch:ln,setValue:pe,getValues:ue,reset:Im,resetField:OS,clearErrors:Ht,unregister:Ke,setError:Ze,setFocus:(w,x={})=>{const I=F(r,w),L=I&&I._f;if(L){const D=L.refs?L.refs[0]:L.ref;D.focus&&(D.focus(),x.shouldSelect&&D.select())}},getFieldState:me}}function wp(t={}){const e=de.useRef(),n=de.useRef(),[r,i]=de.useState({isDirty:!1,isValidating:!1,isLoading:fr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:fr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...HT(t),formState:r});const s=e.current.control;return s._options=t,DT({subject:s._subjects.state,next:o=>{OT(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),de.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),de.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),de.useEffect(()=>{t.values&&!qr(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),de.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),de.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),de.useEffect(()=>{t.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[t.shouldUnregister,s]),e.current.formState=AT(r,s),e.current}var yy=function(t,e,n){if(t&&"reportValidity"in t){var r=F(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},Qw=function(t,e){var n=function(i){var s=e.fields[i];s&&s.ref&&"reportValidity"in s.ref?yy(s.ref,i,t):s.refs&&s.refs.forEach(function(o){return yy(o,i,t)})};for(var r in e.fields)n(r)},GT=function(t){return t instanceof Date},qT=function(t){return t==null},KT=function(t){return typeof t=="object"},YT=function(t){return!qT(t)&&!Array.isArray(t)&&KT(t)&&!GT(t)},QT=function(t){return/^\w*$/.test(t)},ad=function(t,e,n){for(var r=-1,i=QT(e)?[e]:function(d){return c=d.replace(/["|']|\]/g,"").split(/\.|\[/),Array.isArray(c)?c.filter(Boolean):[];var c}(e),s=i.length,o=s-1;++r<s;){var a=i[r],l=n;if(r!==o){var u=t[a];l=YT(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t},XT=function(t,e){e.shouldUseNativeValidation&&Qw(t,e);var n={};for(var r in t){var i=F(e.fields,r),s=Object.assign(t[r]||{},{ref:i&&i.ref});if(JT(e.names||Object.keys(t),r)){var o=Object.assign({},F(n,r));ad(o,"root",s),ad(n,r,o)}else ad(n,r,s)}return n},JT=function(t,e){return t.some(function(n){return n.startsWith(e+".")})};function Ep(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=(e.context,Promise.resolve(t[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:i}))).then(function(u){return s.shouldUseNativeValidation&&Qw({},s),{values:n.raw?r:u,errors:{}}}))}catch(u){return a(u)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:XT((a=o,l=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(a.inner||[]).reduce(function(u,d){if(u[d.path]||(u[d.path]={message:d.message,type:d.type}),l){var c=u[d.path].types,f=c&&c[d.type];u[d.path]=Bw(d.path,l,u,d.type,f?[].concat(f,d.message):d.message)}return u},{})),s)};var a,l}))}catch(o){return Promise.reject(o)}}}function yi(t){this._maxSize=t,this.clear()}yi.prototype.clear=function(){this._size=0,this._values=Object.create(null)};yi.prototype.get=function(t){return this._values[t]};yi.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var ZT=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Xw=/^\d+$/,eb=/^\d/,tb=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,nb=/^\s*(['"]?)(.*?)(\1)\s*$/,Sp=512,vy=new yi(Sp),_y=new yi(Sp),wy=new yi(Sp),ei={Cache:yi,split:Of,normalizePath:ld,setter:function(t){var e=ld(t);return _y.get(t)||_y.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=ld(t);return wy.get(t)||wy.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(xp(n)||Xw.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){rb(Array.isArray(t)?t:Of(t),e,n)}};function ld(t){return vy.get(t)||vy.set(t,Of(t).map(function(e){return e.replace(nb,"$2")}))}function Of(t){return t.match(ZT)||[""]}function rb(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(ob(i)&&(i='"'+i+'"'),a=xp(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function xp(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function ib(t){return t.match(eb)&&!t.match(Xw)}function sb(t){return tb.test(t)}function ob(t){return!xp(t)&&(ib(t)||sb(t))}const ab=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,rc=t=>t.match(ab)||[],ic=t=>t[0].toUpperCase()+t.slice(1),Cp=(t,e)=>rc(t).join(e).toLowerCase(),Jw=t=>rc(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),lb=t=>ic(Jw(t)),ub=t=>Cp(t,"_"),cb=t=>Cp(t,"-"),db=t=>ic(Cp(t," ")),fb=t=>rc(t).map(ic).join(" ");var ud={words:rc,upperFirst:ic,camelCase:Jw,pascalCase:lb,snakeCase:ub,kebabCase:cb,sentenceCase:db,titleCase:fb},kp={exports:{}};kp.exports=function(t){return Zw(hb(t),t)};kp.exports.array=Zw;function Zw(t,e){var n=t.length,r=new Array(n),i={},s=n,o=pb(e),a=mb(t);for(e.forEach(function(u){if(!a.has(u[0])||!a.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(u,d,c){if(c.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!a.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!i[d]){i[d]=!0;var g=o.get(u)||new Set;if(g=Array.from(g),d=g.length){c.add(u);do{var y=g[--d];l(y,a.get(y),c)}while(d);c.delete(u)}r[--n]=u}}}function hb(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function pb(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function mb(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var gb=kp.exports;const yb=qv(gb),vb=Object.prototype.toString,_b=Error.prototype.toString,wb=RegExp.prototype.toString,Eb=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",Sb=/^Symbol\((.*)\)(.*)$/;function xb(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function Ey(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return xb(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return Eb.call(t).replace(Sb,"Symbol($1)");const r=vb.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+_b.call(t)+"]":r==="RegExp"?wb.call(t):null}function Sr(t,e){let n=Ey(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=Ey(this[r],e);return s!==null?s:i},2)}function eE(t){return t==null?[]:[].concat(t)}let tE,nE,rE,Cb=/\$\{\s*(\w+)\s*\}/g;tE=Symbol.toStringTag;class Sy{constructor(e,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[tE]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],eE(e).forEach(s=>{if(gt.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}nE=Symbol.hasInstance;rE=Symbol.toStringTag;class gt extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(Cb,(i,s)=>Sr(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){const o=new Sy(e,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[rE]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,gt)}static[nE](e){return Sy[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let fn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Sr(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Sr(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Sr(n,!0)}\``+i}},pt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},kb={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Df={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},Ib={isValue:"${path} field must be ${value}"},Lf={noUnknown:"${path} field has unspecified keys: ${unknown}"},Tb={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},bb={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Sr(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Sr(n,!0)}\``}return gt.formatError(fn.notType,t)}};Object.assign(Object.create(null),{mixed:fn,string:pt,number:kb,date:Df,object:Lf,array:Tb,boolean:Ib,tuple:bb});const Ip=t=>t&&t.__isYupSchema__;class ou{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new ou(e,(a,l)=>{var u;let d=o(...a)?i:s;return(u=d==null?void 0:d(l))!=null?u:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Ip(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const Ha={context:"$",value:"."};class vi{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===Ha.context,this.isValue=this.key[0]===Ha.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?Ha.context:this.isValue?Ha.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&ei.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}}vi.prototype.__isYupRef=!0;const Kr=t=>t==null;function Ii(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:u,test:d,params:c,message:f,skipAbsent:g}=t;let{parent:y,context:v,abortEarly:C=o.spec.abortEarly,disableStackTrace:p=o.spec.disableStackTrace}=i;function h(q){return vi.isRef(q)?q.getValue(n,y,v):q}function m(q={}){const W=Object.assign({value:n,originalValue:s,label:o.spec.label,path:q.path||r,spec:o.spec,disableStackTrace:q.disableStackTrace||p},c,q.params);for(const le of Object.keys(W))W[le]=h(W[le]);const K=new gt(gt.formatError(q.message||f,W),n,W.path,q.type||u,W.disableStackTrace);return K.params=W,K}const E=C?a:l;let S={path:r,parent:y,type:u,from:i.from,createError:m,resolve:h,options:i,originalValue:s,schema:o};const T=q=>{gt.isError(q)?E(q):q?l(null):E(m())},k=q=>{gt.isError(q)?E(q):a(q)};if(g&&Kr(n))return T(!0);let $;try{var M;if($=d.call(S,n,S),typeof((M=$)==null?void 0:M.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${S.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve($).then(T,k)}}catch(q){k(q);return}T($)}return e.OPTIONS=t,e}function Rb(t,e,n,r=n){let i,s,o;return e?(ei.forEach(e,(a,l,u)=>{let d=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let c=t.type==="tuple",f=u?parseInt(d,10):0;if(t.innerType||c){if(c&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[f],t=c?t.spec.types[f]:t.innerType}if(!u){if(!t.fields||!t.fields[d])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[d],t=t.fields[d]}s=d,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class au extends Set{describe(){const e=[];for(const n of this.values())e.push(vi.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new au(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function zi(t,e=new Map){if(Ip(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=zi(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,zi(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(zi(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=zi(i,e)}else throw Error(`Unable to clone ${t}`);return n}class kn{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new au,this._blacklist=new au,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(fn.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=zi(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&Kr(s))return s;let o=Sr(e),a=Sr(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let u=[];for(let d of Object.values(this.internalTests))d&&u.push(d);this.runTests({path:s,value:l,originalValue:o,options:n,tests:u},r,d=>{if(d.length)return i(d,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:u}=e,d=v=>{i||(i=!0,n(v,o))},c=v=>{i||(i=!0,r(v,o))},f=s.length,g=[];if(!f)return c([]);let y={value:o,originalValue:a,path:l,options:u,schema:this};for(let v=0;v<s.length;v++){const C=s[v];C(y,d,function(h){h&&(Array.isArray(h)?g.push(...h):g.push(h)),--f<=0&&c(g)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let u=r[a];const d=Object.assign({},o,{strict:!0,parent:r,value:u,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(c,f,g)=>this.resolve(d)._validate(u,d,f,g)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,u)=>{gt.isError(l)&&(l.value=u),a(l)},(l,u)=>{l.length?a(new gt(l,u,void 0,void 0,s)):o(u)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw gt.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new gt(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(gt.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(gt.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):zi(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=Ii({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=Ii({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=fn.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=fn.notNull){return this.nullability(!1,e)}required(e=fn.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=fn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=Ii(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=eE(e).map(s=>new vi(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new ou(i,n):ou.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=Ii({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=fn.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=Ii({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=fn.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=Ii({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,u,d)=>d.findIndex(c=>c.name===l.name)===u)}}}kn.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])kn.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=Rb(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])kn.prototype[t]=kn.prototype.oneOf;for(const t of["not","nope"])kn.prototype[t]=kn.prototype.notOneOf;const Pb=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function Nb(t){const e=Ff(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function Ff(t){var e,n;const r=Pb.exec(t);return r?{year:Tn(r[1]),month:Tn(r[2],1)-1,day:Tn(r[3],1),hour:Tn(r[4]),minute:Tn(r[5]),second:Tn(r[6]),millisecond:r[7]?Tn(r[7].substring(0,3)):0,precision:(e=(n=r[7])==null?void 0:n.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Tn(r[10]),minuteOffset:Tn(r[11])}:null}function Tn(t,e=0){return Number(t)||e}let Ab=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ob=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,Db=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,Lb="^\\d{4}-\\d{2}-\\d{2}",Fb="\\d{2}:\\d{2}:\\d{2}",Mb="(([+-]\\d{2}(:?\\d{2})?)|Z)",jb=new RegExp(`${Lb}T${Fb}(\\.\\d+)?${Mb}$`),$b=t=>Kr(t)||t===t.trim(),Ub={}.toString();function vn(){return new iE}class iE extends kn{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===Ub?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||fn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=pt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=pt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=pt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||pt.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=pt.email){return this.matches(Ab,{name:"email",message:e,excludeEmptyString:!0})}url(e=pt.url){return this.matches(Ob,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=pt.uuid){return this.matches(Db,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",r,i;return e&&(typeof e=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=e:n=e),this.matches(jb,{name:"datetime",message:n||pt.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||pt.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=Ff(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||pt.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=Ff(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=pt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:$b})}lowercase(e=pt.lowercase){return this.transform(n=>Kr(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Kr(n)||n===n.toLowerCase()})}uppercase(e=pt.uppercase){return this.transform(n=>Kr(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>Kr(n)||n===n.toUpperCase()})}}vn.prototype=iE.prototype;let Vb=new Date(""),zb=t=>Object.prototype.toString.call(t)==="[object Date]";class sc extends kn{constructor(){super({type:"date",check(e){return zb(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=Nb(e),isNaN(e)?sc.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(vi.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Df.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Df.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}sc.INVALID_DATE=Vb;sc.prototype;function Bb(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=ei.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),vi.isRef(a)&&a.isSibling?s(a.path,o):Ip(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return yb.array(Array.from(r),n).reverse()}function xy(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function sE(t){return(e,n)=>xy(t,e)-xy(t,n)}const Wb=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function gl(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=gl(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=gl(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(gl)}):"optional"in t?t.optional():t}const Hb=(t,e)=>{const n=[...ei.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=ei.getter(ei.join(n),!0)(t);return!!(i&&r in i)};let Cy=t=>Object.prototype.toString.call(t)==="[object Object]";function Gb(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const qb=sE([]);function oc(t){return new oE(t)}class oE extends kn{constructor(e){super({type:"object",check(n){return Cy(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=qb,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(c=>!this._nodes.includes(c))),l={},u=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),d=!1;for(const c of a){let f=s[c],g=c in i;if(f){let y,v=i[c];u.path=(n.path?`${n.path}.`:"")+c,f=f.resolve({value:v,context:n.context,parent:l});let C=f instanceof kn?f.spec:void 0,p=C==null?void 0:C.strict;if(C!=null&&C.strip){d=d||c in i;continue}y=!n.__validating||!p?f.cast(i[c],u):i[c],y!==void 0&&(l[c]=y)}else g&&!o&&(l[c]=i[c]);(g!==c in l||l[c]!==i[c])&&(d=!0)}return d?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,u)=>{if(!a||!Cy(u)){i(l,u);return}o=o||u;let d=[];for(let c of this._nodes){let f=this.fields[c];!f||vi.isRef(f)||d.push(f.asNestedTest({options:n,key:c,parent:u,parentPath:n.path,originalParent:o}))}this.runTests({tests:d,value:u,originalValue:o,options:n},r,c=>{i(c.sort(this._sortErrors).concat(l),u)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=Bb(e,n),r._sortErrors=sE(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return gl(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=ei.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return Hb(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(Wb)}noUnknown(e=!0,n=Lf.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=Gb(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Lf.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(ud.camelCase)}snakeCase(){return this.transformKeys(ud.snakeCase)}constantCase(){return this.transformKeys(e=>ud.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}oc.prototype=oE.prototype;const Kb=B.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`,Tp=({onClose:t,children:e})=>{R.useEffect(()=>(window.addEventListener("keydown",n),document.documentElement.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.documentElement.style.overflow="visible"}));const n=i=>{i.code==="Escape"&&t()},r=i=>{i.target===i.currentTarget&&t()};return _.jsx(Kb,{onClick:r,children:e})};function bp(t){return As({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const Yb=B.div`
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
`,Qb=B.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,Xb=B.div`
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
`,Jb=B.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,ky=B.div`
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
`,Iy=B.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,Zb=B.button`
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
 */const aE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Os(e)},Os=function(t){return new Error("Firebase Database ("+aE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},eR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[d],n[c],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new tR;const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),c!==64){const y=u<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(t){const e=lE(t);return Rp.encodeByteArray(e,!0)},lu=function(t){return uE(t).replace(/\./g,"")},uu=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t){return cE(void 0,t)}function cE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!rR(n)||(t[n]=cE(t[n],e[n]));return t}function rR(t){return t!=="__proto__"}/**
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
 */function iR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sR=()=>iR().__FIREBASE_DEFAULTS__,oR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},aR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uu(t[1]);return e&&JSON.parse(e)},Pp=()=>{try{return sR()||oR()||aR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dE=t=>{var e,n;return(n=(e=Pp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lR=t=>{const e=dE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fE=()=>{var t;return(t=Pp())===null||t===void 0?void 0:t.config},hE=t=>{var e;return(e=Pp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function uR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[lu(JSON.stringify(n)),lu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function cR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dR(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mE(){return aE.NODE_ADMIN===!0}function fR(){try{return typeof indexedDB=="object"}catch{return!1}}function hR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR="FirebaseError";class Dr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pR,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ha.prototype.create)}}class ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?mR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dr(i,a,r)}}function mR(t,e){return t.replace(gR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const gR=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t){return JSON.parse(t)}function Ge(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Wo(uu(s[0])||""),n=Wo(uu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},yR=function(t){const e=gE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},vR=function(t){const e=gE(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Mf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function du(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ty(s)&&Ty(o)){if(!du(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ty(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function wR(t,e){const n=new ER(t,e);return n.subscribe.bind(n)}class ER{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=cd),i.error===void 0&&(i.error=cd),i.complete===void 0&&(i.complete=cd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cd(){}function yE(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ac=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Ft(t){return t&&t._delegate?t._delegate:t}class ai{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Vr="[DEFAULT]";/**
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
 */class CR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Np;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IR(e))try{this.getOrInitializeService({instanceIdentifier:Vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Vr){return this.instances.has(e)}getOptions(e=Vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Vr){return this.component?this.component.multipleInstances?e:Vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kR(t){return t===Vr?void 0:t}function IR(t){return t.instantiationMode==="EAGER"}/**
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
 */class TR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new CR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const bR={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},RR=ae.INFO,PR={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},NR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=PR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Op{constructor(e){this.name=e,this._logLevel=RR,this._logHandler=NR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const AR=(t,e)=>e.some(n=>t instanceof n);let by,Ry;function OR(){return by||(by=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DR(){return Ry||(Ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vE=new WeakMap,jf=new WeakMap,_E=new WeakMap,dd=new WeakMap,Dp=new WeakMap;function LR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(xr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&vE.set(n,t)}).catch(()=>{}),Dp.set(e,t),e}function FR(t){if(jf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});jf.set(t,e)}let $f={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_E.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MR(t){$f=t($f)}function jR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fd(this),e,...n);return _E.set(r,e.sort?e.sort():[e]),xr(r)}:DR().includes(t)?function(...e){return t.apply(fd(this),e),xr(vE.get(this))}:function(...e){return xr(t.apply(fd(this),e))}}function $R(t){return typeof t=="function"?jR(t):(t instanceof IDBTransaction&&FR(t),AR(t,OR())?new Proxy(t,$f):t)}function xr(t){if(t instanceof IDBRequest)return LR(t);if(dd.has(t))return dd.get(t);const e=$R(t);return e!==t&&(dd.set(t,e),Dp.set(e,t)),e}const fd=t=>Dp.get(t);function UR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=xr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(xr(o.result),l.oldVersion,l.newVersion,xr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const VR=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],hd=new Map;function Py(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hd.get(e))return hd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||VR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return hd.set(e,s),s}MR(t=>({...t,get:(e,n,r)=>Py(e,n)||t.get(e,n,r),has:(e,n)=>!!Py(e,n)||t.has(e,n)}));/**
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
 */class BR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uf="@firebase/app",Ny="0.10.5";/**
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
 */const li=new Op("@firebase/app"),HR="@firebase/app-compat",GR="@firebase/analytics-compat",qR="@firebase/analytics",KR="@firebase/app-check-compat",YR="@firebase/app-check",QR="@firebase/auth",XR="@firebase/auth-compat",JR="@firebase/database",ZR="@firebase/database-compat",eP="@firebase/functions",tP="@firebase/functions-compat",nP="@firebase/installations",rP="@firebase/installations-compat",iP="@firebase/messaging",sP="@firebase/messaging-compat",oP="@firebase/performance",aP="@firebase/performance-compat",lP="@firebase/remote-config",uP="@firebase/remote-config-compat",cP="@firebase/storage",dP="@firebase/storage-compat",fP="@firebase/firestore",hP="@firebase/vertexai-preview",pP="@firebase/firestore-compat",mP="firebase",gP="10.12.2";/**
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
 */const Vf="[DEFAULT]",yP={[Uf]:"fire-core",[HR]:"fire-core-compat",[qR]:"fire-analytics",[GR]:"fire-analytics-compat",[YR]:"fire-app-check",[KR]:"fire-app-check-compat",[QR]:"fire-auth",[XR]:"fire-auth-compat",[JR]:"fire-rtdb",[ZR]:"fire-rtdb-compat",[eP]:"fire-fn",[tP]:"fire-fn-compat",[nP]:"fire-iid",[rP]:"fire-iid-compat",[iP]:"fire-fcm",[sP]:"fire-fcm-compat",[oP]:"fire-perf",[aP]:"fire-perf-compat",[lP]:"fire-rc",[uP]:"fire-rc-compat",[cP]:"fire-gcs",[dP]:"fire-gcs-compat",[fP]:"fire-fst",[pP]:"fire-fst-compat",[hP]:"fire-vertex","fire-js":"fire-js",[mP]:"fire-js-all"};/**
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
 */const fu=new Map,vP=new Map,zf=new Map;function Ay(t,e){try{t.container.addComponent(e)}catch(n){li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _s(t){const e=t.name;if(zf.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;zf.set(e,t);for(const n of fu.values())Ay(n,t);for(const n of vP.values())Ay(n,t);return!0}function Lp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _n(t){return t.settings!==void 0}/**
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
 */const _P={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Cr=new ha("app","Firebase",_P);/**
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
 */class wP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ls=gP;function wE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=fE()),!n)throw Cr.create("no-options");const s=fu.get(i);if(s){if(du(n,s.options)&&du(r,s.config))return s;throw Cr.create("duplicate-app",{appName:i})}const o=new TR(i);for(const l of zf.values())o.addComponent(l);const a=new wP(n,r,o);return fu.set(i,a),a}function EE(t=Vf){const e=fu.get(t);if(!e&&t===Vf&&fE())return wE();if(!e)throw Cr.create("no-app",{appName:t});return e}function kr(t,e,n){var r;let i=(r=yP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(a.join(" "));return}_s(new ai(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const EP="firebase-heartbeat-database",SP=1,Ho="firebase-heartbeat-store";let pd=null;function SE(){return pd||(pd=UR(EP,SP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),pd}async function xP(t){try{const n=(await SE()).transaction(Ho),r=await n.objectStore(Ho).get(xE(t));return await n.done,r}catch(e){if(e instanceof Dr)li.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(n.message)}}}async function Oy(t,e){try{const r=(await SE()).transaction(Ho,"readwrite");await r.objectStore(Ho).put(e,xE(t)),await r.done}catch(n){if(n instanceof Dr)li.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});li.warn(r.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CP=1024,kP=30*24*60*60*1e3;class IP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Dy(),{heartbeatsToSend:r,unsentEntries:i}=TP(this._heartbeatsCache.heartbeats),s=lu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Dy(){return new Date().toISOString().substring(0,10)}function TP(t,e=CP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ly(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ly(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fR()?hR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await xP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ly(t){return lu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function RP(t){_s(new ai("platform-logger",e=>new BR(e),"PRIVATE")),_s(new ai("heartbeat",e=>new IP(e),"PRIVATE")),kr(Uf,Ny,t),kr(Uf,Ny,"esm2017"),kr("fire-js","")}RP("");var PP="firebase",NP="10.12.2";/**
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
 */kr(PP,NP,"app");function CE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AP=CE,kE=new ha("auth","Firebase",CE());/**
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
 */const hu=new Op("@firebase/auth");function OP(t,...e){hu.logLevel<=ae.WARN&&hu.warn(`Auth (${Ls}): ${t}`,...e)}function yl(t,...e){hu.logLevel<=ae.ERROR&&hu.error(`Auth (${Ls}): ${t}`,...e)}/**
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
 */function an(t,...e){throw Fp(t,...e)}function Sn(t,...e){return Fp(t,...e)}function IE(t,e,n){const r=Object.assign(Object.assign({},AP()),{[e]:n});return new ha("auth","Firebase",r).create(e,{appName:t.name})}function $n(t){return IE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kE.create(t,...e)}function H(t,e,...n){if(!t)throw Fp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yl(e),new Error(e)}function Hn(t,e){t||Dn(e)}/**
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
 */function Bf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function DP(){return Fy()==="http:"||Fy()==="https:"}function Fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function LP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DP()||cR()||"connection"in navigator)?navigator.onLine:!0}function FP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ap()||pE()}get(){return LP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mp(t,e){Hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class TE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const MP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const jP=new pa(3e4,6e4);function Lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Fr(t,e,n,r,i={}){return bE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ds(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),TE.fetch()(RE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function bE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},MP),e);try{const i=new UP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ga(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw IE(t,d,u);an(t,d)}}catch(i){if(i instanceof Dr)throw i;an(t,"network-request-failed",{message:String(i)})}}async function ma(t,e,n,r,i={}){const s=await Fr(t,e,n,r,i);return"mfaPendingCredential"in s&&an(t,"multi-factor-auth-required",{_serverResponse:s}),s}function RE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mp(t.config,i):`${t.config.apiScheme}://${i}`}function $P(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),jP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Sn(t,e,r);return i.customData._tokenResponse=n,i}function My(t){return t!==void 0&&t.enterprise!==void 0}class VP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $P(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zP(t,e){return Fr(t,"GET","/v2/recaptchaConfig",Lr(t,e))}/**
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
 */async function BP(t,e){return Fr(t,"POST","/v1/accounts:delete",e)}async function PE(t,e){return Fr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WP(t,e=!1){const n=Ft(t),r=await n.getIdToken(e),i=jp(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(md(i.auth_time)),issuedAtTime:wo(md(i.iat)),expirationTime:wo(md(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function md(t){return Number(t)*1e3}function jp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yl("JWT malformed, contained fewer than 3 sections"),null;try{const i=uu(n);return i?JSON.parse(i):(yl("Failed to decode base64 JWT payload"),null)}catch(i){return yl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jy(t){const e=jp(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Go(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dr&&HP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Go(t,PE(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?NE(s.providerUserInfo):[],a=KP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Wf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function qP(t){const e=Ft(t);await pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function NE(t){return t.map(e=>{var{providerId:n}=e,r=cp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function YP(t,e){const n=await bE(t,{},async()=>{const r=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=RE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",TE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QP(t,e){return Fr(t,"POST","/v2/accounts:revokeToken",Lr(t,e))}/**
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
 */class Ji{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=jy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await YP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ji;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ji,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
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
 */function Jn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ln{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Wf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Go(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WP(this,e)}reload(){return qP(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_n(this.auth.app))return Promise.reject($n(this.auth));const e=await this.getIdToken();return await Go(this,BP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:E,isAnonymous:S,providerData:T,stsTokenManager:k}=n;H(m&&k,e,"internal-error");const A=Ji.fromJSON(this.name,k);H(typeof m=="string",e,"internal-error"),Jn(c,e.name),Jn(f,e.name),H(typeof E=="boolean",e,"internal-error"),H(typeof S=="boolean",e,"internal-error"),Jn(g,e.name),Jn(y,e.name),Jn(v,e.name),Jn(C,e.name),Jn(p,e.name),Jn(h,e.name);const $=new Ln({uid:m,auth:e,email:f,emailVerified:E,displayName:c,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:A,createdAt:p,lastLoginAt:h});return T&&Array.isArray(T)&&($.providerData=T.map(M=>Object.assign({},M))),C&&($._redirectEventId=C),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ji;i.updateFromServerResponse(n);const s=new Ln({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await pu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?NE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Ji;a.updateFromIdToken(r);const l=new Ln({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Wf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const $y=new Map;function Fn(t){Hn(t instanceof Function,"Expected a class definition");let e=$y.get(t);return e?(Hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,$y.set(t,e),e)}/**
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
 */class AE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AE.type="NONE";const Uy=AE;/**
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
 */function vl(t,e,n){return`firebase:${t}:${e}:${n}`}class Zi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=vl(this.userKey,i.apiKey,s),this.fullPersistenceKey=vl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ln._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zi(Fn(Uy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Fn(Uy);const o=vl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Ln._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Zi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Zi(s,e,r))}}/**
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
 */function Vy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(LE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(OE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(jE(e))return"Webos";if($p(e))return"Safari";if((e.includes("chrome/")||DE(e))&&!e.includes("edge/"))return"Chrome";if(FE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function OE(t=at()){return/firefox\//i.test(t)}function $p(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function DE(t=at()){return/crios\//i.test(t)}function LE(t=at()){return/iemobile/i.test(t)}function FE(t=at()){return/android/i.test(t)}function ME(t=at()){return/blackberry/i.test(t)}function jE(t=at()){return/webos/i.test(t)}function lc(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XP(t=at()){var e;return lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JP(){return dR()&&document.documentMode===10}function $E(t=at()){return lc(t)||FE(t)||jE(t)||ME(t)||/windows phone/i.test(t)||LE(t)}function ZP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function UE(t,e=[]){let n;switch(t){case"Browser":n=Vy(at());break;case"Worker":n=`${Vy(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ls}/${r}`}/**
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
 */class eN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function tN(t,e={}){return Fr(t,"GET","/v2/passwordPolicy",Lr(t,e))}/**
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
 */const nN=6;class rN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class iN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zy(this),this.idTokenSubscription=new zy(this),this.beforeStateQueue=new eN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Zi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await PE(this,{idToken:e}),r=await Ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(_n(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_n(this.app))return Promise.reject($n(this));const n=e?Ft(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _n(this.app)?Promise.reject($n(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _n(this.app)?Promise.reject($n(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tN(this),n=new rN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Fn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Zi.create(this,[Fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&OP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _i(t){return Ft(t)}class zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=wR(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sN(t){uc=t}function VE(t){return uc.loadJS(t)}function oN(){return uc.recaptchaEnterpriseScript}function aN(){return uc.gapiScript}function lN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const uN="recaptcha-enterprise",cN="NO_RECAPTCHA";class dN{constructor(e){this.type=uN,this.auth=_i(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zP(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new VP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;My(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(cN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&My(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=oN();l.length!==0&&(l+=a),VE(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function By(t,e,n,r=!1){const i=new dN(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Hf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await By(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await By(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function fN(t,e){const n=Lp(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(du(s,e??{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function hN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pN(t,e,n){const r=_i(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=zE(e),{host:o,port:a}=mN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gN()}function zE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mN(t){const e=zE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Wy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Wy(o)}}}function Wy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}async function yN(t,e){return Fr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vN(t,e){return ma(t,"POST","/v1/accounts:signInWithPassword",Lr(t,e))}/**
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
 */async function _N(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}async function wN(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Lr(t,e))}/**
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
 */class qo extends Up{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,n,"signInWithPassword",vN);case"emailLink":return _N(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hf(e,r,"signUpPassword",yN);case"emailLink":return wN(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function es(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",Lr(t,e))}/**
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
 */const EN="http://localhost";class ui extends Up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ui(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:EN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ds(n)}return e}}/**
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
 */function SN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xN(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class Vp{constructor(e){var n,r,i,s,o,a;const l=oo(ao(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=SN((i=l.mode)!==null&&i!==void 0?i:null);H(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=xN(e);try{return new Vp(n)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return qo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vp.parseLink(n);return H(r,"argument-error"),qo._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class BE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends BE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends ga{constructor(){super("facebook.com")}static credential(e){return ui._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class or extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ui._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return or.credential(n,r)}catch{return null}}}or.GOOGLE_SIGN_IN_METHOD="google.com";or.PROVIDER_ID="google.com";/**
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
 */class ar extends ga{constructor(){super("github.com")}static credential(e){return ui._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.GITHUB_SIGN_IN_METHOD="github.com";ar.PROVIDER_ID="github.com";/**
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
 */class lr extends ga{constructor(){super("twitter.com")}static credential(e,n){return ui._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.TWITTER_SIGN_IN_METHOD="twitter.com";lr.PROVIDER_ID="twitter.com";/**
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
 */async function CN(t,e){return ma(t,"POST","/v1/accounts:signUp",Lr(t,e))}/**
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
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ln._fromIdTokenResponse(e,r,i),o=Hy(r);return new ci({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Hy(r);return new ci({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Hy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mu extends Dr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new mu(e,n,r,i)}}function WE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?mu._fromErrorAndOperation(t,s,e,r):s})}async function kN(t,e,n=!1){const r=await Go(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ci._forOperation(t,"link",r)}/**
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
 */async function IN(t,e,n=!1){const{auth:r}=t;if(_n(r.app))return Promise.reject($n(r));const i="reauthenticate";try{const s=await Go(t,WE(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=jp(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),ci._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&an(r,"user-mismatch"),s}}/**
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
 */async function HE(t,e,n=!1){if(_n(t.app))return Promise.reject($n(t));const r="signIn",i=await WE(t,r,e),s=await ci._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function TN(t,e){return HE(_i(t),e)}/**
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
 */async function GE(t){const e=_i(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bN(t,e,n){if(_n(t.app))return Promise.reject($n(t));const r=_i(t),o=await Hf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CN).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&GE(t),l}),a=await ci._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function RN(t,e,n){return _n(t.app)?Promise.reject($n(t)):TN(Ft(t),Fs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&GE(t),r})}function PN(t,e,n,r){return Ft(t).onIdTokenChanged(e,n,r)}function NN(t,e,n){return Ft(t).beforeAuthStateChanged(e,n)}function AN(t,e,n,r){return Ft(t).onAuthStateChanged(e,n,r)}function ON(t){return Ft(t).signOut()}const gu="__sak";/**
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
 */class qE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gu,"1"),this.storage.removeItem(gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function DN(){const t=at();return $p(t)||lc(t)}const LN=1e3,FN=10;class KE extends qE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DN()&&ZP(),this.fallbackToPolling=$E(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},LN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}KE.type="LOCAL";const MN=KE;/**
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
 */class YE extends qE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YE.type="SESSION";const QE=YE;/**
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
 */function jN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await jN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cc.receivers=[];/**
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
 */function zp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=zp("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xn(){return window}function UN(t){xn().location.href=t}/**
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
 */function XE(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function VN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BN(){return XE()?self:null}/**
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
 */const JE="firebaseLocalStorageDb",WN=1,yu="firebaseLocalStorage",ZE="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function dc(t,e){return t.transaction([yu],e?"readwrite":"readonly").objectStore(yu)}function HN(){const t=indexedDB.deleteDatabase(JE);return new ya(t).toPromise()}function Gf(){const t=indexedDB.open(JE,WN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yu,{keyPath:ZE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yu)?e(r):(r.close(),await HN(),e(await Gf()))})})}async function Gy(t,e,n){const r=dc(t,!0).put({[ZE]:e,value:n});return new ya(r).toPromise()}async function GN(t,e){const n=dc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function qy(t,e){const n=dc(t,!0).delete(e);return new ya(n).toPromise()}const qN=800,KN=3;class e1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>KN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return XE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cc._getInstance(BN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VN(),!this.activeServiceWorker)return;this.sender=new $N(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gf();return await Gy(e,gu,"1"),await qy(e,gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=dc(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}e1.type="LOCAL";const YN=e1;new pa(3e4,6e4);/**
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
 */function QN(t,e){return e?Fn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bp extends Up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function XN(t){return HE(t.auth,new Bp(t),t.bypassAuthState)}function JN(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),IN(n,new Bp(t),t.bypassAuthState)}async function ZN(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),kN(n,new Bp(t),t.bypassAuthState)}/**
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
 */class t1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return XN;case"linkViaPopup":case"linkViaRedirect":return ZN;case"reauthViaPopup":case"reauthViaRedirect":return JN;default:an(this.auth,"internal-error")}}resolve(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eA=new pa(2e3,1e4);class Bi extends t1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Bi.currentPopupAction&&Bi.currentPopupAction.cancel(),Bi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const e=zp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eA.get())};e()}}Bi.currentPopupAction=null;/**
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
 */const tA="pendingRedirect",_l=new Map;class nA extends t1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await rA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rA(t,e){const n=oA(e),r=sA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iA(t,e){_l.set(t._key(),e)}function sA(t){return Fn(t._redirectPersistence)}function oA(t){return vl(tA,t.config.apiKey,t.name)}async function aA(t,e,n=!1){if(_n(t.app))return Promise.reject($n(t));const r=_i(t),i=QN(r,e),o=await new nA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lA=10*60*1e3;class uA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!n1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ky(e))}saveEventToCache(e){this.cachedEventUids.add(Ky(e)),this.lastProcessedEventTime=Date.now()}}function Ky(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function n1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return n1(t);default:return!1}}/**
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
 */async function dA(t,e={}){return Fr(t,"GET","/v1/projects",e)}/**
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
 */const fA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hA=/^https?/;async function pA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dA(t);for(const n of e)try{if(mA(n))return}catch{}an(t,"unauthorized-domain")}function mA(t){const e=Bf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hA.test(n))return!1;if(fA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const gA=new pa(3e4,6e4);function Yy(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yA(t){return new Promise((e,n)=>{var r,i,s;function o(){Yy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Yy(),n(Sn(t,"network-request-failed"))},timeout:gA.get()})}if(!((i=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=xn().gapi)===null||s===void 0)&&s.load)o();else{const a=lN("iframefcb");return xn()[a]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},VE(`${aN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wl=null,e})}let wl=null;function vA(t){return wl=wl||yA(t),wl}/**
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
 */const _A=new pa(5e3,15e3),wA="__/auth/iframe",EA="emulator/auth/iframe",SA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CA(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mp(e,EA):`https://${t.config.authDomain}/${wA}`,r={apiKey:e.apiKey,appName:t.name,v:Ls},i=xA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ds(r).slice(1)}`}async function kA(t){const e=await vA(t),n=xn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:CA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),a=xn().setTimeout(()=>{s(o)},_A.get());function l(){xn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const IA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},TA=500,bA=600,RA="_blank",PA="http://localhost";class Qy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(t,e,n,r=TA,i=bA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},IA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=at().toLowerCase();n&&(a=DE(u)?RA:n),OE(u)&&(e=e||PA,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(XP(u)&&a!=="_self")return AA(e||"",a),new Qy(null);const c=window.open(e||"",a,d);H(c,t,"popup-blocked");try{c.focus()}catch{}return new Qy(c)}function AA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const OA="__/auth/handler",DA="emulator/auth/handler",LA=encodeURIComponent("fac");async function Xy(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ls,eventId:i};if(e instanceof BE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Mf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries(s||{}))o[d]=c}if(e instanceof ga){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${LA}=${encodeURIComponent(l)}`:"";return`${FA(t)}?${Ds(a).slice(1)}${u}`}function FA({config:t}){return t.emulator?Mp(t,DA):`https://${t.authDomain}/${OA}`}/**
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
 */const gd="webStorageSupport";class MA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QE,this._completeRedirectFn=aA,this._overrideRedirectResult=iA}async _openPopup(e,n,r,i){var s;Hn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Xy(e,n,r,Bf(),i);return NA(e,o,zp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Xy(e,n,r,Bf(),i);return UN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Hn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kA(e),r=new uA(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gd,{type:gd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[gd];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $E()||$p()||lc()}}const jA=MA;var Jy="@firebase/auth",Zy="1.7.4";/**
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
 */class $A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function UA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VA(t){_s(new ai("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UE(t)},u=new iN(r,i,s,l);return hN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_s(new ai("auth-internal",e=>{const n=_i(e.getProvider("auth").getImmediate());return(r=>new $A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kr(Jy,Zy,UA(t)),kr(Jy,Zy,"esm2017")}/**
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
 */const zA=5*60,BA=hE("authIdTokenMaxAge")||zA;let ev=null;const WA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>BA)return;const i=n==null?void 0:n.token;ev!==i&&(ev=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HA(t=EE()){const e=Lp(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fN(t,{popupRedirectResolver:jA,persistence:[YN,MN,QE]}),r=hE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=WA(s.toString());NN(n,o,()=>o(n.currentUser)),PN(n,a=>o(a))}}const i=dE("auth");return i&&pN(n,`http://${i}`),n}function GA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}sN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Sn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VA("Browser");const tv="@firebase/database",nv="1.0.5";/**
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
 */let r1="";function qA(t){r1=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ge(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Wo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new KA(e)}}catch{}return new YA},Yr=i1("localStorage"),qf=i1("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new Op("@firebase/database"),QA=function(){let t=1;return function(){return t++}}(),s1=function(t){const e=xR(t),n=new _R;n.update(e);const r=n.digest();return Rp.encodeByteArray(r)},va=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=va.apply(null,r):typeof r=="object"?e+=Ge(r):e+=r,e+=" "}return e};let ti=null,rv=!0;const XA=function(t,e){N(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ts.logLevel=ae.VERBOSE,ti=ts.log.bind(ts),e&&qf.set("logging_enabled",!0)):typeof t=="function"?ti=t:(ti=null,qf.remove("logging_enabled"))},it=function(...t){if(rv===!0&&(rv=!1,ti===null&&qf.get("logging_enabled")===!0&&XA(!0)),ti){const e=va.apply(null,t);ti(e)}},_a=function(t){return function(...e){it(t,...e)}},Kf=function(...t){const e="FIREBASE INTERNAL ERROR: "+va(...t);ts.error(e)},Gn=function(...t){const e=`FIREBASE FATAL ERROR: ${va(...t)}`;throw ts.error(e),new Error(e)},Nt=function(...t){const e="FIREBASE WARNING: "+va(...t);ts.warn(e)},JA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},o1=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ZA=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ws="[MIN_NAME]",di="[MAX_NAME]",Ms=function(t,e){if(t===e)return 0;if(t===ws||e===di)return-1;if(e===ws||t===di)return 1;{const n=iv(t),r=iv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},eO=function(t,e){return t===e?0:t<e?-1:1},Ys=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ge(e))},Wp=function(t){if(typeof t!="object"||t===null)return Ge(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ge(e[r]),n+=":",n+=Wp(t[e[r]]);return n+="}",n},a1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ct(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const l1=function(t){N(!o1(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},tO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function rO(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const iO=new RegExp("^-?(0*)\\d{1,10}$"),sO=-2147483648,oO=2147483647,iv=function(t){if(iO.test(t)){const e=Number(t);if(e>=sO&&e<=oO)return e}return null},wa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},aO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Eo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class lO{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Nt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(it("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nt(e)}}class ns{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ns.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="5",u1="v",c1="s",d1="r",f1="f",h1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,p1="ls",m1="p",Yf="ac",g1="websocket",y1="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function cO(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function _1(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===g1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===y1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cO(t)&&(n.ns=t.namespace);const i=[];return Ct(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dO{constructor(){this.counters_={}}incrementCounter(e,n=1){Yn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return nR(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd={},vd={};function Gp(t){const e=t.toString();return yd[e]||(yd[e]=new dO),yd[e]}function fO(t,e){const n=t.toString();return vd[n]||(vd[n]=e()),vd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&wa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="start",pO="close",mO="pLPCommand",gO="pRTLPCB",w1="id",E1="pw",S1="ser",yO="cb",vO="seg",_O="ts",wO="d",EO="dframe",x1=1870,C1=30,SO=x1-C1,xO=25e3,CO=3e4;class Wi{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=_a(e),this.stats_=Gp(n),this.urlFn=l=>(this.appCheckToken&&(l[Yf]=this.appCheckToken),_1(n,y1,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new hO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(CO)),ZA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qp((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===sv)this.id=a,this.password=l;else if(o===pO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[sv]="t",r[S1]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[u1]=Hp,this.transportSessionId&&(r[c1]=this.transportSessionId),this.lastSessionId&&(r[p1]=this.lastSessionId),this.applicationId&&(r[m1]=this.applicationId),this.appCheckToken&&(r[Yf]=this.appCheckToken),typeof location<"u"&&location.hostname&&h1.test(location.hostname)&&(r[d1]=f1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wi.forceAllow_=!0}static forceDisallow(){Wi.forceDisallow_=!0}static isAvailable(){return Wi.forceAllow_?!0:!Wi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tO()&&!nO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=uE(n),i=a1(r,SO);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[EO]="t",r[w1]=e,r[E1]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ge(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=QA(),window[mO+this.uniqueCallbackIdentifier]=e,window[gO+this.uniqueCallbackIdentifier]=n,this.myIFrame=qp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){it("frame writing exception"),a.stack&&it(a.stack),it(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||it("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[w1]=this.myID,e[E1]=this.myPW,e[S1]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+C1+r.length<=x1;){const o=this.pendingSegs.shift();r=r+"&"+vO+i+"="+o.seg+"&"+_O+i+"="+o.ts+"&"+wO+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(xO)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{it("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kO=16384,IO=45e3;let vu=null;typeof MozWebSocket<"u"?vu=MozWebSocket:typeof WebSocket<"u"&&(vu=WebSocket);class Jt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=_a(this.connId),this.stats_=Gp(n),this.connURL=Jt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[u1]=Hp,typeof location<"u"&&location.hostname&&h1.test(location.hostname)&&(o[d1]=f1),n&&(o[c1]=n),r&&(o[p1]=r),i&&(o[Yf]=i),s&&(o[m1]=s),_1(e,g1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yr.set("previous_websocket_failure",!0);try{let r;mE(),this.mySock=new vu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&vu!==null&&!Jt.forceDisallow_}static previouslyFailed(){return Yr.isInMemoryStorage||Yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Wo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ge(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=a1(n,kO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(IO))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2;Jt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wi,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Jt&&Jt.isAvailable();let r=n&&!Jt.previouslyFailed();if(e.webSocketOnly&&(n||Nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Jt];else{const i=this.transports_=[];for(const s of Ko.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ko.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ko.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=6e4,bO=5e3,RO=10*1024,PO=100*1024,_d="t",ov="d",NO="s",av="r",AO="e",lv="o",uv="a",cv="n",dv="p",OO="h";class DO{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=_a("c:"+this.id+":"),this.transportManager_=new Ko(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Eo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(_d in e){const n=e[_d];n===uv?this.upgradeIfSecondaryHealthy_():n===av?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===lv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ys("t",e),r=Ys("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:dv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:uv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:cv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ys("t",e),r=Ys("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ys(_d,e);if(ov in e){const r=e[ov];if(n===OO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===cv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===NO?this.onConnectionShutdown_(r):n===av?this.onReset_(r):n===AO?Kf("Server Error: "+r):n===lv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Kf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Hp!==r&&Nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Eo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(TO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Eo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(bO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:dv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends I1{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ap()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _u}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=32,hv=768;class ce{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function re(){return new ce("")}function X(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rr(t){return t.pieces_.length-t.pieceNum_}function fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ce(t.pieces_,e)}function T1(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function LO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function b1(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function R1(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ce(e,0)}function je(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ce)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ce(n,0)}function J(t){return t.pieceNum_>=t.pieces_.length}function _t(t,e){const n=X(t),r=X(e);if(n===null)return e;if(n===r)return _t(fe(t),fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Kp(t,e){if(Rr(t)!==Rr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Zt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Rr(t)>Rr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FO{constructor(e,n){this.errorPrefix_=n,this.parts_=b1(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ac(this.parts_[r]);P1(this)}}function MO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ac(e),P1(t)}function jO(t){const e=t.parts_.pop();t.byteLength_-=ac(e),t.parts_.length>0&&(t.byteLength_-=1)}function P1(t){if(t.byteLength_>hv)throw new Error(t.errorPrefix_+"has a key path longer than "+hv+" bytes ("+t.byteLength_+").");if(t.parts_.length>fv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+fv+") or object contains a cycle "+zr(t))}function zr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp extends I1{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Yp}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=1e3,$O=60*5*1e3,pv=30*1e3,UO=1.3,VO=3e4,zO="server_kill",mv=3;class Un extends k1{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Un.nextPersistentConnectionId_++,this.log_=_a("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qs,this.maxReconnectDelay_=$O,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!mE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_u.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ge(s)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Np,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Un.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yn(e,"w")){const r=vs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||vR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=pv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=yR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ge(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Kf("Unrecognized action received from server: "+Ge(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>VO&&(this.reconnectDelay_=Qs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Un.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?it("getToken() completed but was canceled"):(it("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new DO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Nt(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(zO)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Nt(c),l())}}}interrupt(e){it("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){it("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Mf(this.interruptReasons_)&&(this.reconnectDelay_=Qs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Wp(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ce(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){it("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mv&&(this.reconnectDelay_=pv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){it("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+r1.replace(/\./g,"-")]=1,Ap()?e["framework.cordova"]=1:pE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_u.getInstance().currentlyOnline();return Mf(this.interruptReasons_)&&e}}Un.nextPersistentConnectionId_=0;Un.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new Q(ws,e),i=new Q(ws,n);return this.compare(r,i)!==0}minPost(){return Q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa;class N1 extends fc{static get __EMPTY_NODE(){return qa}static set __EMPTY_NODE(e){qa=e}compare(e,n){return Ms(e.name,n.name)}isDefinedOn(e){throw Os("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Q.MIN}maxPost(){return new Q(di,qa)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new Q(e,qa)}toString(){return".key"}}const rs=new N1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??wt.EMPTY_NODE,this.right=s??wt.EMPTY_NODE}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return wt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}We.RED=!0;We.BLACK=!1;class BO{copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class wt{constructor(e,n=wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,We.BLACK,null,null))}remove(e){return new wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,We.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ka(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Ka(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Ka(this.root_,null,this.comparator_,!0,e)}}wt.EMPTY_NODE=new BO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t,e){return Ms(t.name,e.name)}function Qp(t,e){return Ms(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qf;function HO(t){Qf=t}const A1=function(t){return typeof t=="number"?"number:"+l1(t):"string:"+t},O1=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yn(e,".sv"),"Priority must be a string or number.")}else N(t===Qf||t.isEmpty(),"priority of unexpected type.");N(t===Qf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gv;class Ve{constructor(e,n=Ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),O1(this.priorityNode_)}static set __childrenNodeConstructor(e){gv=e}static get __childrenNodeConstructor(){return gv}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return J(e)?this:X(e)===".priority"?this.priorityNode_:Ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=X(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Rr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+A1(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=l1(this.value_):e+=this.value_,this.lazyHash_=s1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ve.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ve.VALUE_TYPE_ORDER.indexOf(n),s=Ve.VALUE_TYPE_ORDER.indexOf(r);return N(i>=0,"Unknown leaf type: "+n),N(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D1,L1;function GO(t){D1=t}function qO(t){L1=t}class KO extends fc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ms(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Q.MIN}maxPost(){return new Q(di,new Ve("[PRIORITY-POST]",L1))}makePost(e,n){const r=D1(e);return new Q(n,new Ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ie=new KO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=Math.log(2);class QO{constructor(e){const n=s=>parseInt(Math.log(s)/YO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wu=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new We(f,c.node,We.BLACK,null,null);{const g=parseInt(d/2,10)+l,y=i(l,g),v=i(g+1,u);return c=t[g],f=n?n(c):c,new We(f,c.node,We.BLACK,y,v)}},s=function(l){let u=null,d=null,c=t.length;const f=function(y,v){const C=c-y,p=c;c-=y;const h=i(C+1,p),m=t[C],E=n?n(m):m;g(new We(E,m.node,v,null,h))},g=function(y){u?(u.left=y,u=y):(d=y,u=y)};for(let y=0;y<l.count;++y){const v=l.nextBitIsOne(),C=Math.pow(2,l.count-(y+1));v?f(C,We.BLACK):(f(C,We.BLACK),f(C,We.RED))}return d},o=new QO(t.length),a=s(o);return new wt(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;const Ti={};class Mn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Ti&&Ie,"ChildrenNode.ts has not been loaded"),wd=wd||new Mn({".priority":Ti},{".priority":Ie}),wd}get(e){const n=vs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof wt?n:null}hasIndex(e){return Yn(this.indexSet_,e.toString())}addIndex(e,n){N(e!==rs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(Q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=wu(r,e.getCompare()):a=Ti;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Mn(d,u)}addToIndexes(e,n){const r=cu(this.indexes_,(i,s)=>{const o=vs(this.indexSet_,s);if(N(o,"Missing index implementation for "+s),i===Ti)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),wu(a,o.getCompare())}else return Ti;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new Q(e.name,a))),l.insert(e,e.node)}});return new Mn(r,this.indexSet_)}removeFromIndexes(e,n){const r=cu(this.indexes_,i=>{if(i===Ti)return i;{const s=n.get(e.name);return s?i.remove(new Q(e.name,s)):i}});return new Mn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs;class G{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&O1(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Xs||(Xs=new G(new wt(Qp),null,Mn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xs}updatePriority(e){return this.children_.isEmpty()?this:new G(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Xs:n}}getChild(e){const n=X(e);return n===null?this:this.getImmediateChild(n).getChild(fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new Q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Xs:this.priorityNode_;return new G(i,o,s)}}updateChild(e,n){const r=X(e);if(r===null)return n;{N(X(e)!==".priority"||Rr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(fe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ie,(o,a)=>{n[o]=a.val(e),r++,s&&G.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+A1(this.getPriority().val())+":"),this.forEachChild(Ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":s1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new Q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===rs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new G(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===rs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ie),i=n.getIterator(Ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===rs?null:this.indexMap_.get(e.toString())}}G.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class XO extends G{constructor(){super(new wt(Qp),G.EMPTY_NODE,Mn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return G.EMPTY_NODE}isEmpty(){return!1}}const Ea=new XO;Object.defineProperties(Q,{MIN:{value:new Q(ws,G.EMPTY_NODE)},MAX:{value:new Q(di,Ea)}});N1.__EMPTY_NODE=G.EMPTY_NODE;Ve.__childrenNodeConstructor=G;HO(Ea);qO(Ea);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=!0;function st(t,e=null){if(t===null)return G.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ve(n,st(e))}if(!(t instanceof Array)&&JO){const n=[];let r=!1;if(Ct(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=st(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new Q(o,l)))}}),n.length===0)return G.EMPTY_NODE;const s=wu(n,WO,o=>o.name,Qp);if(r){const o=wu(n,Ie.getCompare());return new G(s,st(e),new Mn({".priority":o},{".priority":Ie}))}else return new G(s,st(e),Mn.Default)}else{let n=G.EMPTY_NODE;return Ct(t,(r,i)=>{if(Yn(t,r)&&r.substring(0,1)!=="."){const s=st(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(st(e))}}GO(st);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZO extends fc{constructor(e){super(),this.indexPath_=e,N(!J(e)&&X(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ms(e.name,n.name):s}makePost(e,n){const r=st(e),i=G.EMPTY_NODE.updateChild(this.indexPath_,r);return new Q(n,i)}maxPost(){const e=G.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new Q(di,e)}toString(){return b1(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2 extends fc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Ms(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Q.MIN}maxPost(){return Q.MAX}makePost(e,n){const r=st(e);return new Q(n,r)}toString(){return".value"}}const t2=new e2;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(t){return{type:"value",snapshotNode:t}}function Es(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Qo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function n2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Yo(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Es(n,r)):o.trackChildChange(Qo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(Yo(i,s))}),n.isLeafNode()||n.forEachChild(Ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Qo(i,s,o))}else r.trackChildChange(Es(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?G.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){this.indexedFilter_=new Xp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xo.getStartPost_(e),this.endPost_=Xo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new Q(n,r))||(r=G.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=G.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(G.EMPTY_NODE);const s=this;return n.forEachChild(Ie,(o,a)=>{s.matches(new Q(o,a))||(i=i.updateImmediateChild(o,G.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Xo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new Q(n,r))||(r=G.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=G.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=G.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(G.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,G.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,g)=>c(g,f)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new Q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(d&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(Qo(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Yo(n,c));const v=a.updateImmediateChild(n,G.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Es(f.name,f.node)),v.updateImmediateChild(f.name,f.node)):v}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Yo(u.name,u.node)),s.trackChildChange(Es(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,G.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ws}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:di}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ie}copy(){const e=new Jp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function i2(t){return t.loadsAllData()?new Xp(t.getIndex()):t.hasLimit()?new r2(t):new Xo(t)}function yv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ie?n="$priority":t.index_===t2?n="$value":t.index_===rs?n="$key":(N(t.index_ instanceof ZO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ge(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ge(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ge(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ge(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ge(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function vv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends k1{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=_a("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Eu.getListenId_(e,r),a={};this.listens_[o]=a;const l=yv(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),vs(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Eu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=yv(e._queryParams),r=e._path.toString(),i=new Np;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ds(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Wo(a.responseText)}catch{Nt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Nt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.rootNode_=G.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(){return{value:null,children:new Map}}function M1(t,e,n){if(J(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=X(e);t.children.has(r)||t.children.set(r,Su());const i=t.children.get(r);e=fe(e),M1(i,e,n)}}function Xf(t,e,n){t.value!==null?n(e,t.value):o2(t,(r,i)=>{const s=new ce(e.toString()+"/"+r);Xf(i,s,n)})}function o2(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ct(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=10*1e3,l2=30*1e3,u2=5*60*1e3;class c2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new a2(e);const r=_v+(l2-_v)*Math.random();Eo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ct(e,(i,s)=>{s>0&&Yn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Eo(this.reportStats_.bind(this),Math.floor(Math.random()*2*u2))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var en;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(en||(en={}));function j1(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function em(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=en.ACK_USER_WRITE,this.source=j1()}operationForChild(e){if(J(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ce(e));return new xu(re(),n,this.revert)}}else return N(X(this.path)===e,"operationForChild called for unrelated child."),new xu(fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.source=e,this.path=n,this.type=en.LISTEN_COMPLETE}operationForChild(e){return J(this.path)?new Jo(this.source,re()):new Jo(this.source,fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=en.OVERWRITE}operationForChild(e){return J(this.path)?new fi(this.source,re(),this.snap.getImmediateChild(e)):new fi(this.source,fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=en.MERGE}operationForChild(e){if(J(this.path)){const n=this.children.subtree(new ce(e));return n.isEmpty()?null:n.value?new fi(this.source,re(),n.value):new Zo(this.source,re(),n)}else return N(X(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Zo(this.source,fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(J(e))return this.isFullyInitialized()&&!this.filtered_;const n=X(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function f2(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(n2(o.childName,o.snapshotNode))}),Js(t,i,"child_removed",e,r,n),Js(t,i,"child_added",e,r,n),Js(t,i,"child_moved",s,r,n),Js(t,i,"child_changed",e,r,n),Js(t,i,"value",e,r,n),i}function Js(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>p2(t,a,l)),o.forEach(a=>{const l=h2(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function h2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function p2(t,e,n){if(e.childName==null||n.childName==null)throw Os("Should only compare child_ events.");const r=new Q(e.childName,e.snapshotNode),i=new Q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t,e){return{eventCache:t,serverCache:e}}function So(t,e,n,r){return hc(new hi(e,n,r),t.serverCache)}function $1(t,e,n,r){return hc(t.eventCache,new hi(e,n,r))}function Jf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ed;const m2=()=>(Ed||(Ed=new wt(eO)),Ed);class _e{constructor(e,n=m2()){this.value=e,this.children=n}static fromObject(e){let n=new _e(null);return Ct(e,(r,i)=>{n=n.set(new ce(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(J(e))return null;{const r=X(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(fe(e),n);return s!=null?{path:je(new ce(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(J(e))return this;{const n=X(e),r=this.children.get(n);return r!==null?r.subtree(fe(e)):new _e(null)}}set(e,n){if(J(e))return new _e(n,this.children);{const r=X(e),s=(this.children.get(r)||new _e(null)).set(fe(e),n),o=this.children.insert(r,s);return new _e(this.value,o)}}remove(e){if(J(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=X(e),r=this.children.get(n);if(r){const i=r.remove(fe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new _e(null):new _e(this.value,s)}else return this}}get(e){if(J(e))return this.value;{const n=X(e),r=this.children.get(n);return r?r.get(fe(e)):null}}setTree(e,n){if(J(e))return n;{const r=X(e),s=(this.children.get(r)||new _e(null)).setTree(fe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new _e(this.value,o)}}fold(e){return this.fold_(re(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(je(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,re(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(J(e))return null;{const s=X(e),o=this.children.get(s);return o?o.findOnPath_(fe(e),je(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,re(),n)}foreachOnPath_(e,n,r){if(J(e))return this;{this.value&&r(n,this.value);const i=X(e),s=this.children.get(i);return s?s.foreachOnPath_(fe(e),je(n,i),r):new _e(null)}}foreach(e){this.foreach_(re(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(je(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.writeTree_=e}static empty(){return new sn(new _e(null))}}function xo(t,e,n){if(J(e))return new sn(new _e(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=_t(i,e);return s=s.updateChild(o,n),new sn(t.writeTree_.set(i,s))}else{const i=new _e(n),s=t.writeTree_.setTree(e,i);return new sn(s)}}}function wv(t,e,n){let r=t;return Ct(n,(i,s)=>{r=xo(r,je(e,i),s)}),r}function Ev(t,e){if(J(e))return sn.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new sn(n)}}function Zf(t,e){return wi(t,e)!=null}function wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(_t(n.path,e)):null}function Sv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ie,(r,i)=>{e.push(new Q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Q(r,i.value))}),e}function Ir(t,e){if(J(e))return t;{const n=wi(t,e);return n!=null?new sn(new _e(n)):new sn(t.writeTree_.subtree(e))}}function eh(t){return t.writeTree_.isEmpty()}function Ss(t,e){return U1(re(),t.writeTree_,e)}function U1(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(N(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=U1(je(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(je(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t,e){return W1(e,t)}function g2(t,e,n,r,i){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xo(t.visibleWrites,e,n)),t.lastWriteId=r}function y2(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function v2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&_2(a,r.path)?i=!1:Zt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return w2(t),!0;if(r.snap)t.visibleWrites=Ev(t.visibleWrites,r.path);else{const a=r.children;Ct(a,l=>{t.visibleWrites=Ev(t.visibleWrites,je(r.path,l))})}return!0}else return!1}function _2(t,e){if(t.snap)return Zt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Zt(je(t.path,n),e))return!0;return!1}function w2(t){t.visibleWrites=V1(t.allWrites,E2,re()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function E2(t){return t.visible}function V1(t,e,n){let r=sn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Zt(n,o)?(a=_t(n,o),r=xo(r,a,s.snap)):Zt(o,n)&&(a=_t(o,n),r=xo(r,re(),s.snap.getChild(a)));else if(s.children){if(Zt(n,o))a=_t(n,o),r=wv(r,a,s.children);else if(Zt(o,n))if(a=_t(o,n),J(a))r=wv(r,re(),s.children);else{const l=vs(s.children,X(a));if(l){const u=l.getChild(fe(a));r=xo(r,re(),u)}}}else throw Os("WriteRecord should have .snap or .children")}}return r}function z1(t,e,n,r,i){if(!r&&!i){const s=wi(t.visibleWrites,e);if(s!=null)return s;{const o=Ir(t.visibleWrites,e);if(eh(o))return n;if(n==null&&!Zf(o,re()))return null;{const a=n||G.EMPTY_NODE;return Ss(o,a)}}}else{const s=Ir(t.visibleWrites,e);if(!i&&eh(s))return n;if(!i&&n==null&&!Zf(s,re()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Zt(u.path,e)||Zt(e,u.path))},a=V1(t.allWrites,o,e),l=n||G.EMPTY_NODE;return Ss(a,l)}}}function S2(t,e,n){let r=G.EMPTY_NODE;const i=wi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Ir(t.visibleWrites,e);return n.forEachChild(Ie,(o,a)=>{const l=Ss(Ir(s,new ce(o)),a);r=r.updateImmediateChild(o,l)}),Sv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Ir(t.visibleWrites,e);return Sv(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function x2(t,e,n,r,i){N(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=je(e,n);if(Zf(t.visibleWrites,s))return null;{const o=Ir(t.visibleWrites,s);return eh(o)?i.getChild(n):Ss(o,i.getChild(n))}}function C2(t,e,n,r){const i=je(e,n),s=wi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Ir(t.visibleWrites,i);return Ss(o,r.getNode().getImmediateChild(n))}else return null}function k2(t,e){return wi(t.visibleWrites,e)}function I2(t,e,n,r,i,s,o){let a;const l=Ir(t.visibleWrites,e),u=wi(l,re());if(u!=null)a=u;else if(n!=null)a=Ss(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&d.length<i;)c(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function T2(){return{visibleWrites:sn.empty(),allWrites:[],lastWriteId:-1}}function Cu(t,e,n,r){return z1(t.writeTree,t.treePath,e,n,r)}function nm(t,e){return S2(t.writeTree,t.treePath,e)}function xv(t,e,n,r){return x2(t.writeTree,t.treePath,e,n,r)}function ku(t,e){return k2(t.writeTree,je(t.treePath,e))}function b2(t,e,n,r,i,s){return I2(t.writeTree,t.treePath,e,n,r,i,s)}function rm(t,e,n){return C2(t.writeTree,t.treePath,e,n)}function B1(t,e){return W1(je(t.treePath,e),t.writeTree)}function W1(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Qo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Yo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Es(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Qo(r,e.snapshotNode,i.oldSnap));else throw Os("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const H1=new P2;class im{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new hi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pi(this.viewCache_),s=b2(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N2(t){return{filter:t}}function A2(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function O2(t,e,n,r,i){const s=new R2;let o,a;if(n.type===en.OVERWRITE){const u=n;u.source.fromUser?o=th(t,e,u.path,u.snap,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!J(u.path),o=Iu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===en.MERGE){const u=n;u.source.fromUser?o=L2(t,e,u.path,u.children,r,i,s):(N(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=nh(t,e,u.path,u.children,r,i,a,s))}else if(n.type===en.ACK_USER_WRITE){const u=n;u.revert?o=j2(t,e,u.path,r,i,s):o=F2(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===en.LISTEN_COMPLETE)o=M2(t,e,n.path,r,s);else throw Os("Unknown operation type: "+n.type);const l=s.getChanges();return D2(e,o,l),{viewCache:o,changes:l}}function D2(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Jf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(F1(Jf(e)))}}function G1(t,e,n,r,i,s){const o=e.eventCache;if(ku(r,n)!=null)return e;{let a,l;if(J(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=pi(e),d=u instanceof G?u:G.EMPTY_NODE,c=nm(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=Cu(r,pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=X(n);if(u===".priority"){N(Rr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=xv(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=fe(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=xv(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=rm(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return So(e,a,o.isFullyInitialized()||J(n),t.filter.filtersNodes())}}function Iu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(J(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),g,null)}else{const g=X(n);if(!l.isCompleteForPath(n)&&Rr(n)>1)return e;const y=fe(n),C=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?u=d.updatePriority(l.getNode(),C):u=d.updateChild(l.getNode(),g,C,y,H1,null)}const c=$1(e,u,l.isFullyInitialized()||J(n),d.filtersNodes()),f=new im(i,c,s);return G1(t,c,n,i,f,a)}function th(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new im(i,e,s);if(J(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=So(e,u,!0,t.filter.filtersNodes());else{const c=X(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=So(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=fe(n),g=a.getNode().getImmediateChild(c);let y;if(J(f))y=r;else{const v=d.getCompleteChild(c);v!=null?T1(f)===".priority"&&v.getChild(R1(f)).isEmpty()?y=v:y=v.updateChild(f,r):y=G.EMPTY_NODE}if(g.equals(y))l=e;else{const v=t.filter.updateChild(a.getNode(),c,y,f,d,o);l=So(e,v,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cv(t,e){return t.eventCache.isCompleteForChild(e)}function L2(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=je(n,l);Cv(e,X(d))&&(a=th(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=je(n,l);Cv(e,X(d))||(a=th(t,a,d,u,i,s,o))}),a}function kv(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function nh(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;J(n)?u=r:u=new _e(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const g=e.serverCache.getNode().getImmediateChild(c),y=kv(t,g,f);l=Iu(t,l,new ce(c),y,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const g=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!g){const y=e.serverCache.getNode().getImmediateChild(c),v=kv(t,y,f);l=Iu(t,l,new ce(c),v,i,s,o,a)}}),l}function F2(t,e,n,r,i,s,o){if(ku(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(J(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Iu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(J(n)){let u=new _e(null);return l.getNode().forEachChild(rs,(d,c)=>{u=u.set(new ce(d),c)}),nh(t,e,n,u,i,s,a,o)}else return e}else{let u=new _e(null);return r.foreach((d,c)=>{const f=je(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),nh(t,e,n,u,i,s,a,o)}}function M2(t,e,n,r,i){const s=e.serverCache,o=$1(e,s.getNode(),s.isFullyInitialized()||J(n),s.isFiltered());return G1(t,o,n,r,H1,i)}function j2(t,e,n,r,i,s){let o;if(ku(r,n)!=null)return e;{const a=new im(r,e,i),l=e.eventCache.getNode();let u;if(J(n)||X(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Cu(r,pi(e));else{const c=e.serverCache.getNode();N(c instanceof G,"serverChildren would be complete if leaf node"),d=nm(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=X(n);let c=rm(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,fe(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,G.EMPTY_NODE,fe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Cu(r,pi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ku(r,re())!=null,So(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Xp(r.getIndex()),s=i2(r);this.processor_=N2(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(G.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(G.EMPTY_NODE,a.getNode(),null),d=new hi(l,o.isFullyInitialized(),i.filtersNodes()),c=new hi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=hc(c,d),this.eventGenerator_=new d2(this.query_)}get query(){return this.query_}}function U2(t){return t.viewCache_.serverCache.getNode()}function V2(t,e){const n=pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!J(e)&&!n.getImmediateChild(X(e)).isEmpty())?n.getChild(e):null}function Iv(t){return t.eventRegistrations_.length===0}function z2(t,e){t.eventRegistrations_.push(e)}function Tv(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function bv(t,e,n,r){e.type===en.MERGE&&e.source.queryId!==null&&(N(pi(t.viewCache_),"We should always have a full cache before handling merges"),N(Jf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=O2(t.processor_,i,e,n,r);return A2(t.processor_,s.viewCache),N(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,q1(t,s.changes,s.viewCache.eventCache.getNode(),null)}function B2(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ie,(s,o)=>{r.push(Es(s,o))}),n.isFullyInitialized()&&r.push(F1(n.getNode())),q1(t,r,n.getNode(),e)}function q1(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return f2(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;class W2{constructor(){this.views=new Map}}function H2(t){N(!Tu,"__referenceConstructor has already been defined"),Tu=t}function G2(){return N(Tu,"Reference.ts has not been loaded"),Tu}function q2(t){return t.views.size===0}function sm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return N(s!=null,"SyncTree gave us an op for an invalid query."),bv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(bv(o,e,n,r));return s}}function K2(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Cu(n,i?r:null),l=!1;a?l=!0:r instanceof G?(a=nm(n,r),l=!1):(a=G.EMPTY_NODE,l=!1);const u=hc(new hi(a,l,!1),new hi(r,i,!1));return new $2(e,u)}return o}function Y2(t,e,n,r,i,s){const o=K2(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),z2(o,n),B2(o,n)}function Q2(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Pr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Tv(u,n,r)),Iv(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Tv(l,n,r)),Iv(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Pr(t)&&s.push(new(G2())(e._repo,e._path)),{removed:s,events:o}}function K1(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function is(t,e){let n=null;for(const r of t.views.values())n=n||V2(r,e);return n}function Y1(t,e){if(e._queryParams.loadsAllData())return pc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Q1(t,e){return Y1(t,e)!=null}function Pr(t){return pc(t)!=null}function pc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bu;function X2(t){N(!bu,"__referenceConstructor has already been defined"),bu=t}function J2(){return N(bu,"Reference.ts has not been loaded"),bu}let Z2=1;class Rv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=T2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function eD(t,e,n,r,i){return g2(t.pendingWriteTree_,e,n,r,i),i?Sa(t,new fi(j1(),e,n)):[]}function Hi(t,e,n=!1){const r=y2(t.pendingWriteTree_,e);if(v2(t.pendingWriteTree_,e)){let s=new _e(null);return r.snap!=null?s=s.set(re(),!0):Ct(r.children,o=>{s=s.set(new ce(o),!0)}),Sa(t,new xu(r.path,s,n))}else return[]}function mc(t,e,n){return Sa(t,new fi(Zp(),e,n))}function tD(t,e,n){const r=_e.fromObject(n);return Sa(t,new Zo(Zp(),e,r))}function nD(t,e){return Sa(t,new Jo(Zp(),e))}function rD(t,e,n){const r=om(t,n);if(r){const i=am(r),s=i.path,o=i.queryId,a=_t(s,e),l=new Jo(em(o),a);return lm(t,s,l)}else return[]}function rh(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Q1(o,e))){const l=Q2(o,e,n,r);q2(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,g)=>Pr(g));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=oD(f);for(let y=0;y<g.length;++y){const v=g[y],C=v.query,p=eS(t,v);t.listenProvider_.startListening(Co(C),Ru(t,C),p.hashFn,p.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(Co(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(gc(f));t.listenProvider_.stopListening(Co(f),g)}))}aD(t,u)}return a}function iD(t,e,n,r){const i=om(t,r);if(i!=null){const s=am(i),o=s.path,a=s.queryId,l=_t(o,e),u=new fi(em(a),l,n);return lm(t,o,u)}else return[]}function sD(t,e,n,r){const i=om(t,r);if(i){const s=am(i),o=s.path,a=s.queryId,l=_t(o,e),u=_e.fromObject(n),d=new Zo(em(a),l,u);return lm(t,o,d)}else return[]}function Pv(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const y=_t(f,i);s=s||is(g,y),o=o||Pr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Pr(a),s=s||is(a,re())):(a=new W2,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=G.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,y)=>{const v=is(y,re());v&&(s=s.updateImmediateChild(g,v))}));const u=Q1(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=gc(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=lD();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const d=tm(t.pendingWriteTree_,i);let c=Y2(a,e,n,d,s,l);if(!u&&!o&&!r){const f=Y1(a,e);c=c.concat(uD(t,e,f))}return c}function X1(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=_t(o,e),u=is(a,l);if(u)return u});return z1(i,e,s,n,!0)}function Sa(t,e){return J1(e,t.syncPointTree_,null,tm(t.pendingWriteTree_,re()))}function J1(t,e,n,r){if(J(t.path))return Z1(t,e,n,r);{const i=e.get(re());n==null&&i!=null&&(n=is(i,re()));let s=[];const o=X(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=B1(r,o);s=s.concat(J1(a,l,u,d))}return i&&(s=s.concat(sm(i,t,r,n))),s}}function Z1(t,e,n,r){const i=e.get(re());n==null&&i!=null&&(n=is(i,re()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=B1(r,o),d=t.operationForChild(o);d&&(s=s.concat(Z1(d,a,l,u)))}),i&&(s=s.concat(sm(i,t,r,n))),s}function eS(t,e){const n=e.query,r=Ru(t,n);return{hashFn:()=>(U2(e)||G.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?rD(t,n._path,r):nD(t,n._path);{const s=rO(i,n);return rh(t,n,null,s)}}}}function Ru(t,e){const n=gc(e);return t.queryToTagMap.get(n)}function gc(t){return t._path.toString()+"$"+t._queryIdentifier}function om(t,e){return t.tagToQueryMap.get(e)}function am(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ce(t.substr(0,e))}}function lm(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const i=tm(t.pendingWriteTree_,e);return sm(r,n,i,null)}function oD(t){return t.fold((e,n,r)=>{if(n&&Pr(n))return[pc(n)];{let i=[];return n&&(i=K1(n)),Ct(r,(s,o)=>{i=i.concat(o)}),i}})}function Co(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(J2())(t._repo,t._path):t}function aD(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=gc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function lD(){return Z2++}function uD(t,e,n){const r=e._path,i=Ru(t,e),s=eS(t,n),o=t.listenProvider_.startListening(Co(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)N(!Pr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!J(u)&&d&&Pr(d))return[pc(d).query];{let f=[];return d&&(f=f.concat(K1(d).map(g=>g.query))),Ct(c,(g,y)=>{f=f.concat(y)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(Co(d),Ru(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new um(n)}node(){return this.node_}}class cm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=je(this.path_,e);return new cm(this.syncTree_,n)}node(){return X1(this.syncTree_,this.path_)}}const cD=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Nv=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dD(t[".sv"],e,n);if(typeof t[".sv"]=="object")return fD(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dD=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},fD=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const i=e.node();if(N(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},hD=function(t,e,n,r){return dm(e,new cm(n,t),r)},pD=function(t,e,n){return dm(t,new um(e),n)};function dm(t,e,n){const r=t.getPriority().val(),i=Nv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Nv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ve(a,st(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ve(i))),o.forEachChild(Ie,(a,l)=>{const u=dm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function hm(t,e){let n=e instanceof ce?e:new ce(e),r=t,i=X(n);for(;i!==null;){const s=vs(r.node.children,i)||{children:{},childCount:0};r=new fm(i,r,s),n=fe(n),i=X(n)}return r}function js(t){return t.node.value}function tS(t,e){t.node.value=e,ih(t)}function nS(t){return t.node.childCount>0}function mD(t){return js(t)===void 0&&!nS(t)}function yc(t,e){Ct(t.node.children,(n,r)=>{e(new fm(n,t,r))})}function rS(t,e,n,r){n&&!r&&e(t),yc(t,i=>{rS(i,e,!0,r)}),n&&r&&e(t)}function gD(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function xa(t){return new ce(t.parent===null?t.name:xa(t.parent)+"/"+t.name)}function ih(t){t.parent!==null&&yD(t.parent,t.name,t)}function yD(t,e,n){const r=mD(n),i=Yn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,ih(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,ih(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD=/[\[\].#$\/\u0000-\u001F\u007F]/,_D=/[\[\].#$\u0000-\u001F\u007F]/,Sd=10*1024*1024,iS=function(t){return typeof t=="string"&&t.length!==0&&!vD.test(t)},sS=function(t){return typeof t=="string"&&t.length!==0&&!_D.test(t)},wD=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sS(t)},oS=function(t,e,n){const r=n instanceof ce?new FO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+zr(r));if(typeof e=="function")throw new Error(t+"contains a function "+zr(r)+" with contents = "+e.toString());if(o1(e))throw new Error(t+"contains "+e.toString()+" "+zr(r));if(typeof e=="string"&&e.length>Sd/3&&ac(e)>Sd)throw new Error(t+"contains a string greater than "+Sd+" utf8 bytes "+zr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ct(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!iS(o)))throw new Error(t+" contains an invalid key ("+o+") "+zr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MO(r,o),oS(t,a,r),jO(r)}),i&&s)throw new Error(t+' contains ".value" child '+zr(r)+" in addition to actual children.")}},aS=function(t,e,n,r){if(!(r&&n===void 0)&&!sS(n))throw new Error(yE(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ED=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),aS(t,e,n,r)},SD=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!iS(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!wD(n))throw new Error(yE(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lS(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Kp(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function uS(t,e,n){lS(t,n),cS(t,r=>Kp(r,e))}function Ei(t,e,n){lS(t,n),cS(t,r=>Zt(r,e)||Zt(e,r))}function cS(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(CD(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function CD(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ti&&it("event: "+n.toString()),wa(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD="repo_interrupt",ID=25;class TD{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new xD,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Su(),this.transactionQueueTree_=new fm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function bD(t,e,n){if(t.stats_=Gp(t.repoInfo_),t.forceRestClient_||aO())t.server_=new Eu(t.repoInfo_,(r,i,s,o)=>{Av(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Ov(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ge(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Un(t.repoInfo_,e,(r,i,s,o)=>{Av(t,r,i,s,o)},r=>{Ov(t,r)},r=>{PD(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=fO(t.repoInfo_,()=>new c2(t.stats_,t.server_)),t.infoData_=new s2,t.infoSyncTree_=new Rv({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=mc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),pm(t,"connected",!1),t.serverSyncTree_=new Rv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ei(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function RD(t){const n=t.infoData_.getNode(new ce(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function dS(t){return cD({timestamp:RD(t)})}function Av(t,e,n,r,i){t.dataUpdateCount++;const s=new ce(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=cu(n,u=>st(u));o=sD(t.serverSyncTree_,s,l,i)}else{const l=st(n);o=iD(t.serverSyncTree_,s,l,i)}else if(r){const l=cu(n,u=>st(u));o=tD(t.serverSyncTree_,s,l)}else{const l=st(n);o=mc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=gm(t,s)),Ei(t.eventQueue_,a,o)}function Ov(t,e){pm(t,"connected",e),e===!1&&AD(t)}function PD(t,e){Ct(e,(n,r)=>{pm(t,n,r)})}function pm(t,e,n){const r=new ce("/.info/"+e),i=st(n);t.infoData_.updateSnapshot(r,i);const s=mc(t.infoSyncTree_,r,i);Ei(t.eventQueue_,r,s)}function ND(t){return t.nextWriteId_++}function AD(t){fS(t,"onDisconnectEvents");const e=dS(t),n=Su();Xf(t.onDisconnect_,re(),(i,s)=>{const o=hD(i,s,t.serverSyncTree_,e);M1(n,i,o)});let r=[];Xf(n,re(),(i,s)=>{r=r.concat(mc(t.serverSyncTree_,i,s));const o=MD(t,i);gm(t,o)}),t.onDisconnect_=Su(),Ei(t.eventQueue_,re(),r)}function OD(t,e,n){let r;X(e._path)===".info"?r=Pv(t.infoSyncTree_,e,n):r=Pv(t.serverSyncTree_,e,n),uS(t.eventQueue_,e._path,r)}function Dv(t,e,n){let r;X(e._path)===".info"?r=rh(t.infoSyncTree_,e,n):r=rh(t.serverSyncTree_,e,n),uS(t.eventQueue_,e._path,r)}function DD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(kD)}function fS(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),it(n,...e)}function hS(t,e,n){return X1(t.serverSyncTree_,e,n)||G.EMPTY_NODE}function mm(t,e=t.transactionQueueTree_){if(e||vc(t,e),js(e)){const n=mS(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&LD(t,xa(e),n)}else nS(e)&&yc(e,n=>{mm(t,n)})}function LD(t,e,n){const r=n.map(u=>u.currentWriteId),i=hS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];N(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=_t(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{fS(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Hi(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();vc(t,hm(t.transactionQueueTree_,e)),mm(t,t.transactionQueueTree_),Ei(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)wa(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Nt("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}gm(t,e)}},o)}function gm(t,e){const n=pS(t,e),r=xa(n),i=mS(t,n);return FD(t,i,r),r}function FD(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=_t(n,l.path);let d=!1,c;if(N(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat(Hi(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ID)d=!0,c="maxretry",i=i.concat(Hi(t.serverSyncTree_,l.currentWriteId,!0));else{const f=hS(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){oS("transaction failed: Data returned ",g,l.path);let y=st(g);typeof g=="object"&&g!=null&&Yn(g,".priority")||(y=y.updatePriority(f.getPriority()));const C=l.currentWriteId,p=dS(t),h=pD(y,f,p);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=h,l.currentWriteId=ND(t),o.splice(o.indexOf(C),1),i=i.concat(eD(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Hi(t.serverSyncTree_,C,!0))}else d=!0,c="nodata",i=i.concat(Hi(t.serverSyncTree_,l.currentWriteId,!0))}Ei(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}vc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)wa(r[a]);mm(t,t.transactionQueueTree_)}function pS(t,e){let n,r=t.transactionQueueTree_;for(n=X(e);n!==null&&js(r)===void 0;)r=hm(r,n),e=fe(e),n=X(e);return r}function mS(t,e){const n=[];return gS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function gS(t,e,n){const r=js(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);yc(e,i=>{gS(t,i,n)})}function vc(t,e){const n=js(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,tS(e,n.length>0?n:void 0)}yc(e,r=>{vc(t,r)})}function MD(t,e){const n=xa(pS(t,e)),r=hm(t.transactionQueueTree_,e);return gD(r,i=>{xd(t,i)}),xd(t,r),rS(r,i=>{xd(t,i)}),n}function xd(t,e){const n=js(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hi(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?tS(e,void 0):n.length=s+1,Ei(t.eventQueue_,xa(e),i);for(let o=0;o<r.length;o++)wa(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $D(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Lv=function(t,e){const n=UD(t),r=n.namespace;n.domain==="firebase.com"&&Gn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||JA();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new v1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ce(n.pathString)}},UD=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=jD(t.substring(d,c)));const f=$D(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ge(this.snapshot.exportVal())}}class vS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ym{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return J(this._path)?null:T1(this._path)}get ref(){return new Qn(this._repo,this._path)}get _queryIdentifier(){const e=vv(this._queryParams),n=Wp(e);return n==="{}"?"default":n}get _queryObject(){return vv(this._queryParams)}isEqual(e){if(e=Ft(e),!(e instanceof ym))return!1;const n=this._repo===e._repo,r=Kp(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+LO(this._path)}}class Qn extends ym{constructor(e,n){super(e,n,new Jp,!1)}get parent(){const e=R1(this._path);return e===null?null:new Qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ea{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ce(e),r=Pu(this.ref,e);return new ea(this._node.getChild(n),r,Ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ea(i,Pu(this.ref,r),Ie)))}hasChild(e){const n=new ce(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zD(t,e){return t=Ft(t),t._checkNotDeleted("ref"),e!==void 0?Pu(t._root,e):t._root}function Pu(t,e){return t=Ft(t),X(t._path)===null?ED("child","path",e,!1):aS("child","path",e,!1),new Qn(t._repo,je(t._path,e))}class vm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new yS("value",this,new ea(e.snapshotNode,new Qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vS(this,e,n):null}matches(e){return e instanceof vm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class _m{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new vS(this,e,n):null}createEvent(e,n){N(e.childName!=null,"Child events should have a childName.");const r=Pu(new Qn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new yS(e.type,this,new ea(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof _m?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function BD(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(d,c)=>{Dv(t._repo,t,a),l(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new VD(n,s||void 0),a=e==="value"?new vm(o):new _m(e,o);return OD(t._repo,t,a),()=>Dv(t._repo,t,a)}function WD(t,e,n,r){return BD(t,"value",e,n,r)}H2(Qn);X2(Qn);/**
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
 */const HD="FIREBASE_DATABASE_EMULATOR_HOST",sh={};let GD=!1;function qD(t,e,n,r){t.repoInfo_=new v1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function KD(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),it("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Lv(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[HD]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Lv(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const d=i&&l?new ns(ns.OWNER):new uO(t.name,t.options,e);SD("Invalid Firebase Database URL",o),J(o.path)||Gn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=QD(a,t,d,new lO(t.name,n));return new XD(c,t)}function YD(t,e){const n=sh[e];(!n||n[t.key]!==t)&&Gn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),DD(t),delete n[t.key]}function QD(t,e,n,r){let i=sh[e.name];i||(i={},sh[e.name]=i);let s=i[t.toURLString()];return s&&Gn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new TD(t,GD,n,r),i[t.toURLString()]=s,s}class XD{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(bD(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qn(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(YD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gn("Cannot call "+e+" on a deleted database.")}}function JD(t=EE(),e){const n=Lp(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=lR("database");r&&ZD(n,...r)}return n}function ZD(t,e,n,r={}){t=Ft(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Gn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Gn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ns(ns.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:uR(r.mockUserToken,t.app.options.projectId);s=new ns(o)}qD(i,e,n,s)}/**
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
 */function eL(t){qA(Ls),_s(new ai("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return KD(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),kr(tv,nv,t),kr(tv,nv,"esm2017")}Un.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Un.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};eL();const tL={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET,databaseURL:{}.VITE_FIREBASE_DATABASE_URL,messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID},nL=wE(tL),Ya=HA(nL),rL=JD(),_S=R.createContext(),iL=({children:t})=>{const[e,n]=R.useState(null),r=(o,a)=>bN(Ya,o,a),i=(o,a)=>RN(Ya,o,a),s=()=>ON(Ya);return R.useEffect(()=>AN(Ya,a=>{n(a)}),[]),_.jsx(_S.Provider,{value:{currentUser:e,signup:r,login:i,logout:s},children:t})},Ca=()=>R.useContext(_S),sL=({isModalOpen:t,closeModal:e})=>{const{login:n}=Ca(),r=oc().shape({email:vn().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:vn().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=wp({resolver:Ep(r),mode:"onChange"}),a=async({email:l,password:u},d)=>{d.preventDefault();try{await n(l,u),e()}catch(c){console.error("Error logging in:",c)}};return t?_.jsx(_.Fragment,{children:t&&_.jsx(Tp,{onClose:e,children:_.jsxs(Yb,{children:[_.jsx(Qb,{onClick:e,children:_.jsx(bp,{size:32})}),_.jsxs(Xb,{children:[_.jsx("h2",{children:"Log In"}),_.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),_.jsxs(Jb,{onSubmit:s(a),noValidate:!0,children:[_.jsxs(ky,{children:[_.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),_.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&_.jsx(Iy,{children:o.email.message})]}),_.jsxs(ky,{children:[_.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),_.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&_.jsx(Iy,{children:o.phone.message})]}),_.jsx(Zb,{type:"submit",children:"Log In"})]})]})})}):null},oL=B.div`
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
`,aL=B.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,lL=B.div`
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
`,uL=B.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,Cd=B.div`
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
`,kd=B.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,cL=B.button`
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
`,dL=({isModalOpen:t,closeModal:e})=>{const{signup:n}=Ca(),r=oc().shape({name:vn().min(2,"Name must be at least 2 characters").required("Name is required"),email:vn().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:vn().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=wp({resolver:Ep(r),mode:"onChange"}),a=async({name:l,email:u,password:d},c)=>{c.preventDefault();try{await n(l,u,d),e(),alert("Form submitted successfully!")}catch(f){console.error("Error signing up:",f)}};return t?_.jsx(_.Fragment,{children:t&&_.jsx(Tp,{onClose:e,children:_.jsxs(oL,{children:[_.jsx(aL,{onClick:e,children:_.jsx(bp,{size:32})}),_.jsxs(lL,{children:[_.jsx("h2",{children:"Sign Up"}),_.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),_.jsxs(uL,{onSubmit:s(a),noValidate:!0,children:[_.jsxs(Cd,{children:[_.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),_.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&_.jsx(kd,{children:o.name.message})]}),_.jsxs(Cd,{children:[_.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),_.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&_.jsx(kd,{children:o.email.message})]}),_.jsxs(Cd,{children:[_.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),_.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&_.jsx(kd,{children:o.phone.message})]}),_.jsx(cL,{type:"submit",children:"Sing Up"})]})]})})}):null},fL=()=>{const[t,e]=R.useState(!1),[n,r]=R.useState(!1),i=bs(),{currentUser:s,logout:o}=Ca(),a=()=>{e(!0)},l=()=>{e(!1)},u=()=>{r(!0)},d=()=>{r(!1)},c=f=>i.pathname===f;return _.jsxs(hT,{children:[_.jsxs(pT,{to:"/home",children:[_.jsx("img",{src:vT,alt:"Logo",width:28,height:28}),_.jsx("span",{children:"LearnLingo"})]}),_.jsxs(mT,{children:[_.jsx(nd,{to:"/home",className:c("/home")?"active":"",children:"Home"}),_.jsx(nd,{to:"/teachers",className:c("/teachers")?"active":"",children:"Teachers"}),s&&_.jsx(nd,{to:"/favorites",className:c("/favorites")?"active":"",children:"Favorites"})]}),_.jsx(gT,{children:s?_.jsxs(sy,{onClick:o,children:[s.email,_.jsx(TT,{size:20,color:"#f4c550"})]}):_.jsxs(_.Fragment,{children:[_.jsxs(sy,{onClick:a,children:[_.jsx(IT,{size:20,color:"#f4c550"}),_.jsx("span",{children:"Login"})]}),t&&_.jsx(sL,{isModalOpen:t,closeModal:l}),_.jsx(yT,{onClick:u,children:"Registration"}),n&&_.jsx(dL,{isModalOpen:n,closeModal:d})]})})]})},hL=B.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
  width: 1440px;
  margin: 0 auto;
`,pL=({children:t})=>_.jsx(hL,{children:t}),mL=()=>_.jsxs(pL,{children:[_.jsx(fL,{}),_.jsx(R.Suspense,{fallback:null,children:_.jsx(_h,{})})]});function oh(){return oh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oh.apply(this,arguments)}function gL(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function yL(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var vL=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(yL(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=gL(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),nt="-ms-",Nu="-moz-",te="-webkit-",wS="comm",wm="rule",Em="decl",_L="@import",ES="@keyframes",wL="@layer",EL=Math.abs,_c=String.fromCharCode,SL=Object.assign;function xL(t,e){return Qe(t,0)^45?(((e<<2^Qe(t,0))<<2^Qe(t,1))<<2^Qe(t,2))<<2^Qe(t,3):0}function SS(t){return t.trim()}function CL(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function ah(t,e){return t.indexOf(e)}function Qe(t,e){return t.charCodeAt(e)|0}function ta(t,e,n){return t.slice(e,n)}function pn(t){return t.length}function Sm(t){return t.length}function Qa(t,e){return e.push(t),t}function kL(t,e){return t.map(e).join("")}var wc=1,xs=1,xS=0,kt=0,Oe=0,$s="";function Ec(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:wc,column:xs,length:o,return:""}}function Zs(t,e){return SL(Ec("",null,null,"",null,null,0),t,{length:-t.length},e)}function IL(){return Oe}function TL(){return Oe=kt>0?Qe($s,--kt):0,xs--,Oe===10&&(xs=1,wc--),Oe}function At(){return Oe=kt<xS?Qe($s,kt++):0,xs++,Oe===10&&(xs=1,wc++),Oe}function Cn(){return Qe($s,kt)}function El(){return kt}function ka(t,e){return ta($s,t,e)}function na(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function CS(t){return wc=xs=1,xS=pn($s=t),kt=0,[]}function kS(t){return $s="",t}function Sl(t){return SS(ka(kt-1,lh(t===91?t+2:t===40?t+1:t)))}function bL(t){for(;(Oe=Cn())&&Oe<33;)At();return na(t)>2||na(Oe)>3?"":" "}function RL(t,e){for(;--e&&At()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return ka(t,El()+(e<6&&Cn()==32&&At()==32))}function lh(t){for(;At();)switch(Oe){case t:return kt;case 34:case 39:t!==34&&t!==39&&lh(Oe);break;case 40:t===41&&lh(t);break;case 92:At();break}return kt}function PL(t,e){for(;At()&&t+Oe!==47+10;)if(t+Oe===42+42&&Cn()===47)break;return"/*"+ka(e,kt-1)+"*"+_c(t===47?t:At())}function NL(t){for(;!na(Cn());)At();return ka(t,kt)}function AL(t){return kS(xl("",null,null,null,[""],t=CS(t),0,[0],t))}function xl(t,e,n,r,i,s,o,a,l){for(var u=0,d=0,c=o,f=0,g=0,y=0,v=1,C=1,p=1,h=0,m="",E=i,S=s,T=r,k=m;C;)switch(y=h,h=At()){case 40:if(y!=108&&Qe(k,c-1)==58){ah(k+=ne(Sl(h),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:k+=Sl(h);break;case 9:case 10:case 13:case 32:k+=bL(y);break;case 92:k+=RL(El()-1,7);continue;case 47:switch(Cn()){case 42:case 47:Qa(OL(PL(At(),El()),e,n),l);break;default:k+="/"}break;case 123*v:a[u++]=pn(k)*p;case 125*v:case 59:case 0:switch(h){case 0:case 125:C=0;case 59+d:p==-1&&(k=ne(k,/\f/g,"")),g>0&&pn(k)-c&&Qa(g>32?Mv(k+";",r,n,c-1):Mv(ne(k," ","")+";",r,n,c-2),l);break;case 59:k+=";";default:if(Qa(T=Fv(k,e,n,u,d,i,a,m,E=[],S=[],c),s),h===123)if(d===0)xl(k,e,T,T,E,s,c,a,S);else switch(f===99&&Qe(k,3)===110?100:f){case 100:case 108:case 109:case 115:xl(t,T,T,r&&Qa(Fv(t,T,T,0,0,i,a,m,i,E=[],c),S),i,S,c,a,r?E:S);break;default:xl(k,T,T,T,[""],S,0,a,S)}}u=d=g=0,v=p=1,m=k="",c=o;break;case 58:c=1+pn(k),g=y;default:if(v<1){if(h==123)--v;else if(h==125&&v++==0&&TL()==125)continue}switch(k+=_c(h),h*v){case 38:p=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(pn(k)-1)*p,p=1;break;case 64:Cn()===45&&(k+=Sl(At())),f=Cn(),d=c=pn(m=k+=NL(El())),h++;break;case 45:y===45&&pn(k)==2&&(v=0)}}return s}function Fv(t,e,n,r,i,s,o,a,l,u,d){for(var c=i-1,f=i===0?s:[""],g=Sm(f),y=0,v=0,C=0;y<r;++y)for(var p=0,h=ta(t,c+1,c=EL(v=o[y])),m=t;p<g;++p)(m=SS(v>0?f[p]+" "+h:ne(h,/&\f/g,f[p])))&&(l[C++]=m);return Ec(t,e,n,i===0?wm:a,l,u,d)}function OL(t,e,n){return Ec(t,e,n,wS,_c(IL()),ta(t,2,-2),0)}function Mv(t,e,n,r){return Ec(t,e,n,Em,ta(t,0,r),ta(t,r+1,-1),r)}function ss(t,e){for(var n="",r=Sm(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function DL(t,e,n,r){switch(t.type){case wL:if(t.children.length)break;case _L:case Em:return t.return=t.return||t.value;case wS:return"";case ES:return t.return=t.value+"{"+ss(t.children,r)+"}";case wm:t.value=t.props.join(",")}return pn(n=ss(t.children,r))?t.return=t.value+"{"+n+"}":""}function LL(t){var e=Sm(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function FL(t){return function(e){e.root||(e=e.return)&&t(e)}}var ML=function(e,n,r){for(var i=0,s=0;i=s,s=Cn(),i===38&&s===12&&(n[r]=1),!na(s);)At();return ka(e,kt)},jL=function(e,n){var r=-1,i=44;do switch(na(i)){case 0:i===38&&Cn()===12&&(n[r]=1),e[r]+=ML(kt-1,n,r);break;case 2:e[r]+=Sl(i);break;case 4:if(i===44){e[++r]=Cn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=_c(i)}while(i=At());return e},$L=function(e,n){return kS(jL(CS(e),n))},jv=new WeakMap,UL=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!jv.get(r))&&!i){jv.set(e,!0);for(var s=[],o=$L(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var d=0;d<a.length;d++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[d]):a[d]+" "+o[l]}}},VL=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function IS(t,e){switch(xL(t,e)){case 5103:return te+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return te+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return te+t+Nu+t+nt+t+t;case 6828:case 4268:return te+t+nt+t+t;case 6165:return te+t+nt+"flex-"+t+t;case 5187:return te+t+ne(t,/(\w+).+(:[^]+)/,te+"box-$1$2"+nt+"flex-$1$2")+t;case 5443:return te+t+nt+"flex-item-"+ne(t,/flex-|-self/,"")+t;case 4675:return te+t+nt+"flex-line-pack"+ne(t,/align-content|flex-|-self/,"")+t;case 5548:return te+t+nt+ne(t,"shrink","negative")+t;case 5292:return te+t+nt+ne(t,"basis","preferred-size")+t;case 6060:return te+"box-"+ne(t,"-grow","")+te+t+nt+ne(t,"grow","positive")+t;case 4554:return te+ne(t,/([^-])(transform)/g,"$1"+te+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,te+"$1"),/(image-set)/,te+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,te+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,te+"box-pack:$3"+nt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+te+t+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,te+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(pn(t)-1-e>6)switch(Qe(t,e+1)){case 109:if(Qe(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+te+"$2-$3$1"+Nu+(Qe(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ah(t,"stretch")?IS(ne(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Qe(t,e+1)!==115)break;case 6444:switch(Qe(t,pn(t)-3-(~ah(t,"!important")&&10))){case 107:return ne(t,":",":"+te)+t;case 101:return ne(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+te+(Qe(t,14)===45?"inline-":"")+"box$3$1"+te+"$2$3$1"+nt+"$2box$3")+t}break;case 5936:switch(Qe(t,e+11)){case 114:return te+t+nt+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return te+t+nt+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return te+t+nt+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return te+t+nt+t+t}return t}var zL=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Em:e.return=IS(e.value,e.length);break;case ES:return ss([Zs(e,{value:ne(e.value,"@","@"+te)})],i);case wm:if(e.length)return kL(e.props,function(s){switch(CL(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ss([Zs(e,{props:[ne(s,/:(read-\w+)/,":"+Nu+"$1")]})],i);case"::placeholder":return ss([Zs(e,{props:[ne(s,/:(plac\w+)/,":"+te+"input-$1")]}),Zs(e,{props:[ne(s,/:(plac\w+)/,":"+Nu+"$1")]}),Zs(e,{props:[ne(s,/:(plac\w+)/,nt+"input-$1")]})],i)}return""})}},BL=[zL],WL=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var C=v.getAttribute("data-emotion");C.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=e.stylisPlugins||BL,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var C=v.getAttribute("data-emotion").split(" "),p=1;p<C.length;p++)s[C[p]]=!0;a.push(v)});var l,u=[UL,VL];{var d,c=[DL,FL(function(v){d.insert(v)})],f=LL(u.concat(i,c)),g=function(C){return ss(AL(C),f)};l=function(C,p,h,m){d=h,g(C?C+"{"+p.styles+"}":p.styles),m&&(y.inserted[p.name]=!0)}}var y={key:n,sheet:new vL({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return y.sheet.hydrate(a),y},HL=!0;function GL(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var TS=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||HL===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},qL=function(e,n,r){TS(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function KL(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var YL=/[A-Z]|^ms/g,QL=/_EMO_([^_]+?)_([^]*?)_EMO_/g,bS=function(e){return e.charCodeAt(1)===45},$v=function(e){return e!=null&&typeof e!="boolean"},Id=yw(function(t){return bS(t)?t:t.replace(YL,"-$&").toLowerCase()}),Uv=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(QL,function(r,i,s){return mn={name:i,styles:s,next:mn},i})}return Cw[e]!==1&&!bS(e)&&typeof n=="number"&&n!==0?n+"px":n};function ra(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return mn={name:n.name,styles:n.styles,next:mn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)mn={name:r.name,styles:r.styles,next:mn},r=r.next;var i=n.styles+";";return i}return XL(t,e,n)}case"function":{if(t!==void 0){var s=mn,o=n(t);return mn=s,ra(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function XL(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ra(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":$v(o)&&(r+=Id(s)+":"+Uv(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)$v(o[a])&&(r+=Id(s)+":"+Uv(s,o[a])+";");else{var l=ra(t,e,o);switch(s){case"animation":case"animationName":{r+=Id(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var Vv=/label:\s*([^\s;\n{]+)\s*(;|$)/g,mn,JL=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";mn=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=ra(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=ra(r,n,e[a]),i&&(s+=o[a]);Vv.lastIndex=0;for(var l="",u;(u=Vv.exec(s))!==null;)l+="-"+u[1];var d=KL(s)+l;return{name:d,styles:s,next:mn}},ZL=function(e){return e()},eF=bd["useInsertionEffect"]?bd["useInsertionEffect"]:!1,tF=eF||ZL,RS=R.createContext(typeof HTMLElement<"u"?WL({key:"css"}):null);RS.Provider;var nF=function(e){return R.forwardRef(function(n,r){var i=R.useContext(RS);return e(n,i,r)})},rF=R.createContext({}),iF=cI,sF=function(e){return e!=="theme"},zv=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?iF:sF},Bv=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},oF=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return TS(n,r,i),tF(function(){return qL(n,r,i)}),null},aF=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=Bv(e,n,r),l=a||zv(i),u=!l("as");return function(){var d=arguments,c=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&c.push("label:"+s+";"),d[0]==null||d[0].raw===void 0)c.push.apply(c,d);else{c.push(d[0][0]);for(var f=d.length,g=1;g<f;g++)c.push(d[g],d[0][g])}var y=nF(function(v,C,p){var h=u&&v.as||i,m="",E=[],S=v;if(v.theme==null){S={};for(var T in v)S[T]=v[T];S.theme=R.useContext(rF)}typeof v.className=="string"?m=GL(C.registered,E,v.className):v.className!=null&&(m=v.className+" ");var k=JL(c.concat(E),C.registered,S);m+=C.key+"-"+k.name,o!==void 0&&(m+=" "+o);var A=u&&a===void 0?zv(h):l,$={};for(var M in v)u&&M==="as"||A(M)&&($[M]=v[M]);return $.className=m,$.ref=p,R.createElement(R.Fragment,null,R.createElement(oF,{cache:C,serialized:k,isStringTag:typeof h=="string"}),R.createElement(h,$))});return y.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",y.defaultProps=e.defaultProps,y.__emotion_real=y,y.__emotion_base=i,y.__emotion_styles=c,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return"."+o}}),y.withComponent=function(v,C){return t(v,oh({},n,C,{shouldForwardProp:Bv(y,C,!0)})).apply(void 0,c)},y}},lF=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],ia=aF.bind();lF.forEach(function(t){ia[t]=ia(t)});const uF=ia.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,cF=ia.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,dF=()=>_.jsx(uF,{children:_.jsx(cF,{children:"404"})});const fF=ia.div`
  width: 100%;
  height: 100vh;
`,hF="/LearnLingo/assets/face_x1-b65e11cd.png",pF="/LearnLingo/assets/iMac-8b3b4ee4.png",mF=B.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`,gF=B.div`
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
`,yF=B(Fu)`
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
`,vF=B.div`
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
`,_F=B.ul`
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
`;var xm={},Au=function(){return Au=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Au.apply(this,arguments)},wF=function(){function t(e,n,r){var i=this;this.endVal=n,this.options=r,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){i.startTime||(i.startTime=s);var o=s-i.startTime;i.remaining=i.duration-o,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(o,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(o,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(o/i.duration);var a=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=a?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),o<i.duration?i.rAF=requestAnimationFrame(i.count):i.finalEndVal!==null?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(s){var o,a,l,u,d=s<0?"-":"";o=Math.abs(s).toFixed(i.options.decimalPlaces);var c=(o+="").split(".");if(a=c[0],l=c.length>1?i.options.decimal+c[1]:"",i.options.useGrouping){u="";for(var f=3,g=0,y=0,v=a.length;y<v;++y)i.options.useIndianSeparators&&y===4&&(f=2,g=1),y!==0&&g%f==0&&(u=i.options.separator+u),g++,u=a[v-y-1]+u;a=u}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,function(C){return i.options.numerals[+C]}),l=l.replace(/[0-9]/g,function(C){return i.options.numerals[+C]})),d+i.options.prefix+a+l+i.options.suffix},this.easeOutExpo=function(s,o,a,l){return a*(1-Math.pow(2,-10*s/l))*1024/1023+o},this.options=Au(Au({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),i=r.top+window.pageYOffset,s=r.top+r.height+window.pageYOffset;s<n&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||i>n)&&!e.paused&&e.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var r=this.countDown?1:-1;this.endVal=e+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(e){var n;if(this.el){var r=this.formattingFn(e);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,r):this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r}},t.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},t.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();const EF=Object.freeze(Object.defineProperty({__proto__:null,CountUp:wF},Symbol.toStringTag,{value:"Module"})),SF=jS(EF);Object.defineProperty(xm,"__esModule",{value:!0});var He=R,xF=SF;function CF(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function Wv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ou(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Wv(Object(n),!0).forEach(function(r){TF(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Wv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kF(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function IF(t){var e=kF(t,"string");return typeof e=="symbol"?e:String(e)}function TF(t,e,n){return e=IF(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function uh(){return uh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},uh.apply(this,arguments)}function bF(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PS(t,e){if(t==null)return{};var n=bF(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function RF(t,e){return PF(t)||CF(t,e)||NF(t,e)||AF()}function PF(t){if(Array.isArray(t))return t}function NF(t,e){if(t){if(typeof t=="string")return Hv(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hv(t,e)}}function Hv(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function AF(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var OF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?He.useLayoutEffect:He.useEffect;function Kt(t){var e=He.useRef(t);return OF(function(){e.current=t}),He.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var DF=function(e,n){var r=n.decimal,i=n.decimals,s=n.duration,o=n.easingFn,a=n.end,l=n.formattingFn,u=n.numerals,d=n.prefix,c=n.separator,f=n.start,g=n.suffix,y=n.useEasing,v=n.useGrouping,C=n.useIndianSeparators,p=n.enableScrollSpy,h=n.scrollSpyDelay,m=n.scrollSpyOnce,E=n.plugin;return new xF.CountUp(e,a,{startVal:f,duration:s,decimal:r,decimalPlaces:i,easingFn:o,formattingFn:l,numerals:u,separator:c,prefix:d,suffix:g,plugin:E,useEasing:y,useIndianSeparators:C,useGrouping:v,enableScrollSpy:p,scrollSpyDelay:h,scrollSpyOnce:m})},LF=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],FF={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},NS=function(e){var n=Object.fromEntries(Object.entries(e).filter(function($){var M=RF($,2),q=M[1];return q!==void 0})),r=He.useMemo(function(){return Ou(Ou({},FF),n)},[e]),i=r.ref,s=r.startOnMount,o=r.enableReinitialize,a=r.delay,l=r.onEnd,u=r.onStart,d=r.onPauseResume,c=r.onReset,f=r.onUpdate,g=PS(r,LF),y=He.useRef(),v=He.useRef(),C=He.useRef(!1),p=Kt(function(){return DF(typeof i=="string"?i:i.current,g)}),h=Kt(function($){var M=y.current;if(M&&!$)return M;var q=p();return y.current=q,q}),m=Kt(function(){var $=function(){return h(!0).start(function(){l==null||l({pauseResume:E,reset:S,start:k,update:T})})};a&&a>0?v.current=setTimeout($,a*1e3):$(),u==null||u({pauseResume:E,reset:S,update:T})}),E=Kt(function(){h().pauseResume(),d==null||d({reset:S,start:k,update:T})}),S=Kt(function(){h().el&&(v.current&&clearTimeout(v.current),h().reset(),c==null||c({pauseResume:E,start:k,update:T}))}),T=Kt(function($){h().update($),f==null||f({pauseResume:E,reset:S,start:k})}),k=Kt(function(){S(),m()}),A=Kt(function($){s&&($&&S(),m())});return He.useEffect(function(){C.current?o&&A(!0):(C.current=!0,A())},[o,C,A,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),He.useEffect(function(){return function(){S()}},[S]),{start:k,pauseResume:E,reset:S,update:T,getCountUp:h}},MF=["className","redraw","containerProps","children","style"],jF=function(e){var n=e.className,r=e.redraw,i=e.containerProps,s=e.children,o=e.style,a=PS(e,MF),l=He.useRef(null),u=He.useRef(!1),d=NS(Ou(Ou({},a),{},{ref:l,startOnMount:typeof s!="function"||e.delay===0,enableReinitialize:!1})),c=d.start,f=d.reset,g=d.update,y=d.pauseResume,v=d.getCountUp,C=Kt(function(){c()}),p=Kt(function(E){e.preserveValue||f(),g(E)}),h=Kt(function(){if(typeof e.children=="function"&&!(l.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}v()});He.useEffect(function(){h()},[h]),He.useEffect(function(){u.current&&p(e.end)},[e.end,p]);var m=r&&e;return He.useEffect(function(){r&&u.current&&C()},[C,r,m]),He.useEffect(function(){!r&&u.current&&C()},[C,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),He.useEffect(function(){u.current=!0},[]),typeof s=="function"?s({countUpRef:l,start:c,reset:f,update:g,pauseResume:y,getCountUp:v}):He.createElement("span",uh({className:n,ref:l,style:o},i),typeof e.start<"u"?v().formattingFn(e.start):"")},$F=xm.default=jF;xm.useCountUp=NS;const Gv=()=>{const t=[{value:32e3,text:"Experienced tutors"},{value:3e5,text:"5-star tutor reviews"},{value:120,text:"Subjects taught"},{value:200,text:"Tutor nationalities"}];return _.jsxs(_.Fragment,{children:[_.jsxs(mF,{children:[_.jsxs(gF,{children:[_.jsxs("h1",{children:["Unlock your potential with the best ",_.jsx("span",{children:"language"})," tutors"]}),_.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),_.jsx(yF,{to:"/teachers",children:"Get started"})]}),_.jsxs(vF,{children:[_.jsx("img",{src:hF,width:339,height:339,alt:""}),_.jsx("img",{src:pF,width:360,height:247,alt:""})]})]}),_.jsx(_F,{children:t.map((e,n)=>_.jsxs("li",{children:[_.jsxs("h3",{children:[_.jsx($F,{start:0,end:e.value,duration:2.75,separator:","})," +"]}),_.jsx("p",{children:e.text})]},n))})]})},UF=B.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 48px;
  padding: 24px;
  width: 1184px;
`,VF=B.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
`,zF=B.div`
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
`,BF=B.div`
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
`,Xa=B.p`
  color: var(--subtitle-text-color);
  padding: 0;
  margin: 0;
`,WF=B(Fu)`
  text-decoration: underline;
  font-style: 16px;
  line-height: 24px;
  margin: 8px 0 24px 0;
`,HF=B.ul`
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
`,GF=B.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
`,qF=B.button`
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
`;function AS(t){return As({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function KF(t){return As({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"},child:[]}]})(t)}function YF(t){return As({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}const QF=B.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
  padding: 0;
`,XF=B.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px;
  padding: 0;
`,JF=B.div`
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
`,ZF=B.div`
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
`,eM=B.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 8px;
  padding: 0;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
`,tM=({reviews:t})=>_.jsx(QF,{children:t.map((e,n)=>_.jsxs(XF,{children:[_.jsxs(JF,{children:[e.reviewer_avatar?_.jsx("img",{src:e.reviewer_avatar,alt:"Reviewer Avatar"}):_.jsx(KF,{size:44}),_.jsxs(ZF,{children:[_.jsx("p",{children:e.reviewer_name}),_.jsxs(eM,{children:[_.jsx(AS,{size:16,color:"#FFC531"}),_.jsx("p",{children:e.reviewer_rating})]})]})]}),_.jsx("p",{children:e.comment})]},n))}),nM=B.div`
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
`,rM=B.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,iM=B.div`
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
`,sM=B.div`
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
`,oM=B.form`
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
`,eo=B.label`
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
`,Td=B.div`
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
`,Ja=B.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,aM=B.button`
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
`,lM=({isModalOpen:t,closeModal:e,teacher:n})=>{const r=oc().shape({name:vn().required("Name is required"),email:vn().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),phone:vn().matches(/^\+?[0-9]*$/,"Phone number must be in format +380XXXXXXXXX").min(13,"Phone number must be in format +380XXXXXXXXX").required("Phone is required"),reason:vn().required("Reason is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=wp({resolver:Ep(r),mode:"onChange"}),a=l=>{console.log(l),e(),alert("Form submitted successfully!")};return t?_.jsx(_.Fragment,{children:t&&_.jsx(Tp,{onClose:e,children:_.jsxs(nM,{children:[_.jsx(rM,{onClick:e,children:_.jsx(bp,{size:32})}),_.jsxs(iM,{children:[_.jsx("h2",{children:"Book trial lesson"}),_.jsx("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),_.jsxs(sM,{children:[_.jsx("img",{src:n.avatar_url,alt:n.name}),_.jsxs("div",{children:[_.jsx("p",{children:"Your teacher"}),_.jsxs("h3",{children:[n.name," ",n.surname]})]})]})]}),_.jsxs(oM,{onSubmit:s(a),noValidate:!0,children:[_.jsxs("div",{className:"form-section",children:[_.jsx("h2",{children:"What is your main reason for learning English?"}),_.jsxs(eo,{children:[_.jsx("input",{type:"radio",value:"career",...i("reason"),defaultChecked:!0}),"Career and business"]}),_.jsxs(eo,{children:[_.jsx("input",{type:"radio",value:"kids",...i("reason")}),"Lesson for kids"]}),_.jsxs(eo,{children:[_.jsx("input",{type:"radio",value:"abroad",...i("reason")}),"Living abroad"]}),_.jsxs(eo,{children:[_.jsx("input",{type:"radio",value:"exams",...i("reason")}),"Exams and coursework"]}),_.jsxs(eo,{children:[_.jsx("input",{type:"radio",value:"hobby",...i("reason")}),"Culture, travel or hobby"]}),o.reason&&_.jsx(Ja,{children:o.reason.message})]}),_.jsxs("div",{className:"form-section",children:[_.jsxs(Td,{children:[_.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),_.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&_.jsx(Ja,{children:o.name.message})]}),_.jsxs(Td,{children:[_.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),_.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&_.jsx(Ja,{children:o.email.message})]}),_.jsxs(Td,{children:[_.jsx("input",{type:"number",...i("phone"),className:o.phone?"error":"",placeholder:" "}),_.jsx("label",{className:o.phone?"error":"",children:"Phone"}),o.phone&&_.jsx(Ja,{children:o.phone.message})]})]}),_.jsx(aM,{type:"submit",children:"Book"})]})]})})}):null},uM=({teacher:t})=>{const e=t.languages.reduce((u,d,c)=>c<t.languages.length-1?[...u,_.jsx("span",{children:d},c),", "]:[...u,_.jsx("span",{children:d},c)],[]),[n,r]=R.useState(!1),[i,s]=R.useState(!1),o=()=>{s(!0)},a=()=>{s(!1)},l=()=>{r(!n)};return _.jsxs(UF,{children:[_.jsx(VF,{src:t.avatar_url,alt:t.name}),_.jsxs(zF,{children:[_.jsxs(BF,{children:[_.jsx(Xa,{style:{marginRight:"192px"},children:"Languages"}),_.jsxs("ul",{children:[_.jsx("li",{children:_.jsx("p",{children:"Lessons online"})}),_.jsx("li",{children:_.jsxs("p",{children:["Lessons done: ",t.lessons_done]})}),_.jsxs("li",{children:[_.jsx(AS,{size:16,color:"#FFC531"}),_.jsxs("p",{children:["Rating: ",t.rating]})]}),_.jsx("li",{children:_.jsxs("p",{children:["Price/1 hour: ",_.jsxs("span",{children:["$",t.price_per_hour]})]})})]}),_.jsx(YF,{size:22})]}),_.jsxs("h3",{children:[t.name," ",t.surname]}),_.jsxs(Xa,{children:["Speaks: ",_.jsx("span",{children:e})]}),_.jsxs(Xa,{children:["Lesson Info: ",_.jsxs("span",{children:[" ",t.lesson_info]})]}),_.jsxs(Xa,{children:["Conditions: ",_.jsx("span",{children:t.conditions})]}),!n&&_.jsx(WF,{onClick:l,children:"Read more"}),n&&_.jsxs(GF,{children:[_.jsx("p",{children:t.experience}),_.jsx(tM,{reviews:t.reviews})]}),_.jsx(HF,{children:t.levels.map((u,d)=>_.jsxs("li",{children:["#",u]},d))}),n&&_.jsx(qF,{onClick:o,children:"Book trial lesson"}),i&&_.jsx(lM,{isModalOpen:i,closeModal:a,teacher:t})]})]})},cM=B.button`
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
`,dM=()=>{const[t,e]=R.useState(4),[n,r]=R.useState([]);R.useEffect(()=>{const s=zD(rL,"teachers");WD(s,o=>{const a=o.val();a&&r(Object.values(a))})},[]);const i=()=>{e(s=>s+4)};return _.jsxs(_.Fragment,{children:[n.slice(0,t).map((s,o)=>_.jsx(uM,{teacher:s},o)),t<n.length&&_.jsx(cM,{onClick:i,children:"Load More"})]})},fM=()=>_.jsx(dM,{}),hM=()=>{const{isAuthenticated:t}=Ca();return console.log("isAuthenticated",t),t?_.jsx(h_,{to:"/home"}):_.jsx(_h,{})},pM=()=>Ca()?_.jsx(_h,{}):_.jsx(h_,{to:"/home"}),mM=()=>_.jsx("div",{children:"FavoritesPage"});function gM(){return _.jsx(fF,{children:_.jsx(Yx,{children:_.jsxs(bn,{path:"/",element:_.jsx(mL,{}),children:[_.jsx(bn,{index:!0,element:_.jsx(Gv,{})}),_.jsxs(bn,{element:_.jsx(hM,{}),children:[_.jsx(bn,{path:"home",element:_.jsx(Gv,{})}),_.jsx(bn,{path:"teachers",element:_.jsx(fM,{})})]}),_.jsx(bn,{element:_.jsx(pM,{}),children:_.jsx(bn,{path:"favorites",element:_.jsx(mM,{})})}),_.jsx(bn,{path:"*",element:_.jsx(dF,{})})]})})})}Ad.createRoot(document.getElementById("root")).render(_.jsx(de.StrictMode,{children:_.jsx(tC,{basename:"/LearnLingo",children:_.jsx(iL,{children:_.jsx(gM,{})})})}));
