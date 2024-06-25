function sb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function wI(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function ob(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var EI={exports:{}},rf={},TI={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lu=Symbol.for("react.element"),ab=Symbol.for("react.portal"),lb=Symbol.for("react.fragment"),ub=Symbol.for("react.strict_mode"),cb=Symbol.for("react.profiler"),hb=Symbol.for("react.provider"),db=Symbol.for("react.context"),fb=Symbol.for("react.forward_ref"),pb=Symbol.for("react.suspense"),mb=Symbol.for("react.memo"),gb=Symbol.for("react.lazy"),fw=Symbol.iterator;function _b(t){return t===null||typeof t!="object"?null:(t=fw&&t[fw]||t["@@iterator"],typeof t=="function"?t:null)}var II={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},SI=Object.assign,CI={};function Sa(t,e,n){this.props=t,this.context=e,this.refs=CI,this.updater=n||II}Sa.prototype.isReactComponent={};Sa.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Sa.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xI(){}xI.prototype=Sa.prototype;function D_(t,e,n){this.props=t,this.context=e,this.refs=CI,this.updater=n||II}var L_=D_.prototype=new xI;L_.constructor=D_;SI(L_,Sa.prototype);L_.isPureReactComponent=!0;var pw=Array.isArray,AI=Object.prototype.hasOwnProperty,M_={current:null},RI={key:!0,ref:!0,__self:!0,__source:!0};function kI(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)AI.call(e,r)&&!RI.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Lu,type:t,key:s,ref:o,props:i,_owner:M_.current}}function yb(t,e){return{$$typeof:Lu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function F_(t){return typeof t=="object"&&t!==null&&t.$$typeof===Lu}function vb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var mw=/\/+/g;function Pp(t,e){return typeof t=="object"&&t!==null&&t.key!=null?vb(""+t.key):e.toString(36)}function sh(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Lu:case ab:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Pp(o,0):r,pw(i)?(n="",t!=null&&(n=t.replace(mw,"$&/")+"/"),sh(i,e,n,"",function(c){return c})):i!=null&&(F_(i)&&(i=yb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(mw,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",pw(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Pp(s,a);o+=sh(s,e,n,l,i)}else if(l=_b(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Pp(s,a++),o+=sh(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xc(t,e,n){if(t==null)return t;var r=[],i=0;return sh(t,r,"","",function(s){return e.call(n,s,i++)}),r}function wb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},oh={transition:null},Eb={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:oh,ReactCurrentOwner:M_};_e.Children={map:xc,forEach:function(t,e,n){xc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xc(t,function(){e++}),e},toArray:function(t){return xc(t,function(e){return e})||[]},only:function(t){if(!F_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};_e.Component=Sa;_e.Fragment=lb;_e.Profiler=cb;_e.PureComponent=D_;_e.StrictMode=ub;_e.Suspense=pb;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eb;_e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=SI({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=M_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)AI.call(e,l)&&!RI.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Lu,type:t.type,key:i,ref:s,props:r,_owner:o}};_e.createContext=function(t){return t={$$typeof:db,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hb,_context:t},t.Consumer=t};_e.createElement=kI;_e.createFactory=function(t){var e=kI.bind(null,t);return e.type=t,e};_e.createRef=function(){return{current:null}};_e.forwardRef=function(t){return{$$typeof:fb,render:t}};_e.isValidElement=F_;_e.lazy=function(t){return{$$typeof:gb,_payload:{_status:-1,_result:t},_init:wb}};_e.memo=function(t,e){return{$$typeof:mb,type:t,compare:e===void 0?null:e}};_e.startTransition=function(t){var e=oh.transition;oh.transition={};try{t()}finally{oh.transition=e}};_e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};_e.useCallback=function(t,e){return sn.current.useCallback(t,e)};_e.useContext=function(t){return sn.current.useContext(t)};_e.useDebugValue=function(){};_e.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};_e.useEffect=function(t,e){return sn.current.useEffect(t,e)};_e.useId=function(){return sn.current.useId()};_e.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};_e.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};_e.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};_e.useMemo=function(t,e){return sn.current.useMemo(t,e)};_e.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};_e.useRef=function(t){return sn.current.useRef(t)};_e.useState=function(t){return sn.current.useState(t)};_e.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};_e.useTransition=function(){return sn.current.useTransition()};_e.version="18.2.0";TI.exports=_e;var j=TI.exports;const Me=wI(j),Vm=sb({__proto__:null,default:Me},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb=j,Ib=Symbol.for("react.element"),Sb=Symbol.for("react.fragment"),Cb=Object.prototype.hasOwnProperty,xb=Tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ab={key:!0,ref:!0,__self:!0,__source:!0};function PI(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Cb.call(e,r)&&!Ab.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ib,type:t,key:s,ref:o,props:i,_owner:xb.current}}rf.Fragment=Sb;rf.jsx=PI;rf.jsxs=PI;EI.exports=rf;var R=EI.exports;/**
 * @remix-run/router v1.8.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ql(){return Ql=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ql.apply(this,arguments)}var Ci;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ci||(Ci={}));const gw="popstate";function Rb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Um("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Mh(i)}return Pb(e,n,null,t)}function lt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function V_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function kb(){return Math.random().toString(36).substr(2,8)}function _w(t,e){return{usr:t.state,key:t.key,idx:e}}function Um(t,e,n,r){return n===void 0&&(n=null),Ql({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ca(e):e,{state:n,key:e&&e.key||r||kb()})}function Mh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ca(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Pb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Ci.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Ql({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function d(){a=Ci.Pop;let k=h(),w=k==null?null:k-c;c=k,l&&l({action:a,location:I.location,delta:w})}function p(k,w){a=Ci.Push;let g=Um(I.location,k,w);n&&n(g,k),c=h()+1;let S=_w(g,c),O=I.createHref(g);try{o.pushState(S,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(O)}s&&l&&l({action:a,location:I.location,delta:1})}function _(k,w){a=Ci.Replace;let g=Um(I.location,k,w);n&&n(g,k),c=h();let S=_w(g,c),O=I.createHref(g);o.replaceState(S,"",O),s&&l&&l({action:a,location:I.location,delta:0})}function v(k){let w=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof k=="string"?k:Mh(k);return lt(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let I={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(gw,d),l=k,()=>{i.removeEventListener(gw,d),l=null}},createHref(k){return e(i,k)},createURL:v,encodeLocation(k){let w=v(k);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:p,replace:_,go(k){return o.go(k)}};return I}var yw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(yw||(yw={}));function bb(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ca(e):e,i=U_(r.pathname||"/",n);if(i==null)return null;let s=bI(t);Nb(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=$b(s[a],Wb(i));return o}function bI(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(lt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Pi([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(lt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),bI(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Ub(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of NI(s.path))i(s,o,l)}),e}function NI(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=NI(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Nb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jb(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ob=/^:\w+$/,Db=3,Lb=2,Mb=1,Fb=10,Vb=-2,vw=t=>t==="*";function Ub(t,e){let n=t.split("/"),r=n.length;return n.some(vw)&&(r+=Vb),e&&(r+=Lb),n.filter(i=>!vw(i)).reduce((i,s)=>i+(Ob.test(s)?Db:s===""?Mb:Fb),r)}function jb(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $b(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,c=i==="/"?e:e.slice(i.length)||"/",h=zb({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},c);if(!h)return null;Object.assign(r,h.params);let d=a.route;s.push({params:r,pathname:Pi([i,h.pathname]),pathnameBase:Kb(Pi([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=Pi([i,h.pathnameBase]))}return s}function zb(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Bb(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,d)=>{if(h==="*"){let p=a[d]||"";o=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}return c[h]=Hb(a[d]||"",h),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Bb(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),V_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Wb(t){try{return decodeURI(t)}catch(e){return V_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Hb(t,e){try{return decodeURIComponent(t)}catch(n){return V_(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function U_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qb(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ca(t):t;return{pathname:n?n.startsWith("/")?n:Gb(n,e):e,search:Qb(r),hash:Yb(i)}}function Gb(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function bp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j_(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ca(t):(i=Ql({},t),lt(!i.pathname||!i.pathname.includes("?"),bp("?","pathname","search",i)),lt(!i.pathname||!i.pathname.includes("#"),bp("#","pathname","hash",i)),lt(!i.search||!i.search.includes("#"),bp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}a=d>=0?e[d]:"/"}let l=qb(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const Pi=t=>t.join("/").replace(/\/\/+/g,"/"),Kb=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Qb=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Yb=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Xb(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const OI=["post","put","patch","delete"];new Set(OI);const Jb=["get",...OI];new Set(Jb);/**
 * React Router v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fh(){return Fh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fh.apply(this,arguments)}const z_=j.createContext(null),Zb=j.createContext(null),xa=j.createContext(null),sf=j.createContext(null),ri=j.createContext({outlet:null,matches:[],isDataRoute:!1}),DI=j.createContext(null);function eN(t,e){let{relative:n}=e===void 0?{}:e;Aa()||lt(!1);let{basename:r,navigator:i}=j.useContext(xa),{hash:s,pathname:o,search:a}=MI(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pi([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Aa(){return j.useContext(sf)!=null}function Ws(){return Aa()||lt(!1),j.useContext(sf).location}function LI(t){j.useContext(xa).static||j.useLayoutEffect(t)}function B_(){let{isDataRoute:t}=j.useContext(ri);return t?mN():tN()}function tN(){Aa()||lt(!1);let t=j.useContext(z_),{basename:e,navigator:n}=j.useContext(xa),{matches:r}=j.useContext(ri),{pathname:i}=Ws(),s=JSON.stringify(j_(r).map(l=>l.pathnameBase)),o=j.useRef(!1);return LI(()=>{o.current=!0}),j.useCallback(function(l,c){if(c===void 0&&(c={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=$_(l,JSON.parse(s),i,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Pi([e,h.pathname])),(c.replace?n.replace:n.push)(h,c.state,c)},[e,n,s,i,t])}const nN=j.createContext(null);function rN(t){let e=j.useContext(ri).outlet;return e&&j.createElement(nN.Provider,{value:t},e)}function MI(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=j.useContext(ri),{pathname:i}=Ws(),s=JSON.stringify(j_(r).map(o=>o.pathnameBase));return j.useMemo(()=>$_(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function iN(t,e){return sN(t,e)}function sN(t,e,n){Aa()||lt(!1);let{navigator:r}=j.useContext(xa),{matches:i}=j.useContext(ri),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Ws(),c;if(e){var h;let I=typeof e=="string"?Ca(e):e;a==="/"||(h=I.pathname)!=null&&h.startsWith(a)||lt(!1),c=I}else c=l;let d=c.pathname||"/",p=a==="/"?d:d.slice(a.length)||"/",_=bb(t,{pathname:p}),v=cN(_&&_.map(I=>Object.assign({},I,{params:Object.assign({},o,I.params),pathname:Pi([a,r.encodeLocation?r.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?a:Pi([a,r.encodeLocation?r.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),i,n);return e&&v?j.createElement(sf.Provider,{value:{location:Fh({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Ci.Pop}},v):v}function oN(){let t=pN(),e=Xb(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,s)}const aN=j.createElement(oN,null);class lN extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?j.createElement(ri.Provider,{value:this.props.routeContext},j.createElement(DI.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uN(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(z_);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(ri.Provider,{value:e},r)}function cN(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||lt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,c)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||aN);let p=e.concat(s.slice(0,c+1)),_=()=>{let v;return h?v=d:l.route.Component?v=j.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,j.createElement(uN,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||c===0)?j.createElement(lN,{location:n.location,revalidation:n.revalidation,component:d,error:h,children:_(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):_()},null)}var FI=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(FI||{}),Vh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vh||{});function hN(t){let e=j.useContext(z_);return e||lt(!1),e}function dN(t){let e=j.useContext(Zb);return e||lt(!1),e}function fN(t){let e=j.useContext(ri);return e||lt(!1),e}function VI(t){let e=fN(),n=e.matches[e.matches.length-1];return n.route.id||lt(!1),n.route.id}function pN(){var t;let e=j.useContext(DI),n=dN(Vh.UseRouteError),r=VI(Vh.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function mN(){let{router:t}=hN(FI.UseNavigateStable),e=VI(Vh.UseNavigateStable),n=j.useRef(!1);return LI(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Fh({fromRouteId:e},s)))},[t,e])}function gN(t){let{to:e,replace:n,state:r,relative:i}=t;Aa()||lt(!1);let{matches:s}=j.useContext(ri),{pathname:o}=Ws(),a=B_(),l=$_(e,j_(s).map(h=>h.pathnameBase),o,i==="path"),c=JSON.stringify(l);return j.useEffect(()=>a(JSON.parse(c),{replace:n,state:r,relative:i}),[a,c,i,n,r]),null}function UI(t){return rN(t.context)}function pi(t){lt(!1)}function _N(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Ci.Pop,navigator:s,static:o=!1}=t;Aa()&&lt(!1);let a=e.replace(/^\/*/,"/"),l=j.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ca(r));let{pathname:c="/",search:h="",hash:d="",state:p=null,key:_="default"}=r,v=j.useMemo(()=>{let I=U_(c,a);return I==null?null:{location:{pathname:I,search:h,hash:d,state:p,key:_},navigationType:i}},[a,c,h,d,p,_,i]);return v==null?null:j.createElement(xa.Provider,{value:l},j.createElement(sf.Provider,{children:n,value:v}))}function yN(t){let{children:e,location:n}=t;return iN(jm(e),n)}new Promise(()=>{});function jm(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,jm(r.props.children,s));return}r.type!==pi&&lt(!1),!r.props.index||!r.props.children||lt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=jm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $m(){return $m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$m.apply(this,arguments)}function vN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function wN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function EN(t,e){return t.button===0&&(!e||e==="_self")&&!wN(t)}const TN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],IN="startTransition",ww=Vm[IN];function SN(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=Rb({window:i,v5Compat:!0}));let o=s.current,[a,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=j.useCallback(d=>{c&&ww?ww(()=>l(d)):l(d)},[l,c]);return j.useLayoutEffect(()=>o.listen(h),[o,h]),j.createElement(_N,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const CN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,of=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h}=e,d=vN(e,TN),{basename:p}=j.useContext(xa),_,v=!1;if(typeof c=="string"&&xN.test(c)&&(_=c,CN))try{let g=new URL(window.location.href),S=c.startsWith("//")?new URL(g.protocol+c):new URL(c),O=U_(S.pathname,p);S.origin===g.origin&&O!=null?c=O+S.search+S.hash:v=!0}catch{}let I=eN(c,{relative:i}),k=AN(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function w(g){r&&r(g),g.defaultPrevented||k(g)}return j.createElement("a",$m({},d,{href:_||I,onClick:v||s?r:w,ref:n,target:l}))});var Ew;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Ew||(Ew={}));var Tw;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Tw||(Tw={}));function AN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=B_(),l=Ws(),c=MI(t,{relative:o});return j.useCallback(h=>{if(EN(h,n)){h.preventDefault();let d=r!==void 0?r:Mh(l)===Mh(c);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,c,r,i,n,t,s,o])}var zm={},jI={exports:{}},Pn={},$I={exports:{}},zI={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(q,ee){var te=q.length;q.push(ee);e:for(;0<te;){var Pe=te-1>>>1,ye=q[Pe];if(0<i(ye,ee))q[Pe]=ee,q[te]=ye,te=Pe;else break e}}function n(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ee=q[0],te=q.pop();if(te!==ee){q[0]=te;e:for(var Pe=0,ye=q.length,Ne=ye>>>1;Pe<Ne;){var Tt=2*(Pe+1)-1,Ut=q[Tt],pt=Tt+1,st=q[pt];if(0>i(Ut,te))pt<ye&&0>i(st,Ut)?(q[Pe]=st,q[pt]=te,Pe=pt):(q[Pe]=Ut,q[Tt]=te,Pe=Tt);else if(pt<ye&&0>i(st,te))q[Pe]=st,q[pt]=te,Pe=pt;else break e}}return ee}function i(q,ee){var te=q.sortIndex-ee.sortIndex;return te!==0?te:q.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,d=null,p=3,_=!1,v=!1,I=!1,k=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(q){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=q)r(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function O(q){if(I=!1,S(q),!v)if(n(l)!==null)v=!0,it(L);else{var ee=n(c);ee!==null&&Ie(O,ee.startTime-q)}}function L(q,ee){v=!1,I&&(I=!1,w(T),T=-1),_=!0;var te=p;try{for(S(ee),d=n(l);d!==null&&(!(d.expirationTime>ee)||q&&!P());){var Pe=d.callback;if(typeof Pe=="function"){d.callback=null,p=d.priorityLevel;var ye=Pe(d.expirationTime<=ee);ee=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&r(l),S(ee)}else r(l);d=n(l)}if(d!==null)var Ne=!0;else{var Tt=n(c);Tt!==null&&Ie(O,Tt.startTime-ee),Ne=!1}return Ne}finally{d=null,p=te,_=!1}}var V=!1,E=null,T=-1,C=5,A=-1;function P(){return!(t.unstable_now()-A<C)}function b(){if(E!==null){var q=t.unstable_now();A=q;var ee=!0;try{ee=E(!0,q)}finally{ee?x():(V=!1,E=null)}}else V=!1}var x;if(typeof g=="function")x=function(){g(b)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Le=de.port2;de.port1.onmessage=b,x=function(){Le.postMessage(null)}}else x=function(){k(b,0)};function it(q){E=q,V||(V=!0,x())}function Ie(q,ee){T=k(function(){q(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(q){q.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,it(L))},t.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<q?Math.floor(1e3/q):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(q){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var te=p;p=ee;try{return q()}finally{p=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(q,ee){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var te=p;p=q;try{return ee()}finally{p=te}},t.unstable_scheduleCallback=function(q,ee,te){var Pe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Pe+te:Pe):te=Pe,q){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=te+ye,q={id:h++,callback:ee,priorityLevel:q,startTime:te,expirationTime:ye,sortIndex:-1},te>Pe?(q.sortIndex=te,e(c,q),n(l)===null&&q===n(c)&&(I?(w(T),T=-1):I=!0,Ie(O,te-Pe))):(q.sortIndex=ye,e(l,q),v||_||(v=!0,it(L))),q},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(q){var ee=p;return function(){var te=p;p=ee;try{return q.apply(this,arguments)}finally{p=te}}}})(zI);$I.exports=zI;var RN=$I.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var BI=j,kn=RN;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var WI=new Set,Yl={};function Hs(t,e){Xo(t,e),Xo(t+"Capture",e)}function Xo(t,e){for(Yl[t]=e,t=0;t<e.length;t++)WI.add(e[t])}var Kr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bm=Object.prototype.hasOwnProperty,kN=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Iw={},Sw={};function PN(t){return Bm.call(Sw,t)?!0:Bm.call(Iw,t)?!1:kN.test(t)?Sw[t]=!0:(Iw[t]=!0,!1)}function bN(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NN(t,e,n,r){if(e===null||typeof e>"u"||bN(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var W_=/[\-:]([a-z])/g;function H_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(W_,H_);Ft[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(W_,H_);Ft[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(W_,H_);Ft[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function q_(t,e,n,r){var i=Ft.hasOwnProperty(e)?Ft[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NN(e,n,i,r)&&(n=null),r||i===null?PN(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ii=BI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ac=Symbol.for("react.element"),yo=Symbol.for("react.portal"),vo=Symbol.for("react.fragment"),G_=Symbol.for("react.strict_mode"),Wm=Symbol.for("react.profiler"),HI=Symbol.for("react.provider"),qI=Symbol.for("react.context"),K_=Symbol.for("react.forward_ref"),Hm=Symbol.for("react.suspense"),qm=Symbol.for("react.suspense_list"),Q_=Symbol.for("react.memo"),gi=Symbol.for("react.lazy"),GI=Symbol.for("react.offscreen"),Cw=Symbol.iterator;function tl(t){return t===null||typeof t!="object"?null:(t=Cw&&t[Cw]||t["@@iterator"],typeof t=="function"?t:null)}var Ye=Object.assign,Np;function _l(t){if(Np===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Np=e&&e[1]||""}return`
`+Np+t}var Op=!1;function Dp(t,e){if(!t||Op)return"";Op=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Op=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?_l(t):""}function ON(t){switch(t.tag){case 5:return _l(t.type);case 16:return _l("Lazy");case 13:return _l("Suspense");case 19:return _l("SuspenseList");case 0:case 2:case 15:return t=Dp(t.type,!1),t;case 11:return t=Dp(t.type.render,!1),t;case 1:return t=Dp(t.type,!0),t;default:return""}}function Gm(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vo:return"Fragment";case yo:return"Portal";case Wm:return"Profiler";case G_:return"StrictMode";case Hm:return"Suspense";case qm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case qI:return(t.displayName||"Context")+".Consumer";case HI:return(t._context.displayName||"Context")+".Provider";case K_:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Q_:return e=t.displayName||null,e!==null?e:Gm(t.type)||"Memo";case gi:e=t._payload,t=t._init;try{return Gm(t(e))}catch{}}return null}function DN(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gm(e);case 8:return e===G_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Wi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function KI(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LN(t){var e=KI(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Rc(t){t._valueTracker||(t._valueTracker=LN(t))}function QI(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=KI(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Uh(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Km(t,e){var n=e.checked;return Ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xw(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Wi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function YI(t,e){e=e.checked,e!=null&&q_(t,"checked",e,!1)}function Qm(t,e){YI(t,e);var n=Wi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ym(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ym(t,e.type,Wi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Aw(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ym(t,e,n){(e!=="number"||Uh(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yl=Array.isArray;function Mo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Wi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Xm(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Rw(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(yl(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Wi(n)}}function XI(t,e){var n=Wi(e.value),r=Wi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function kw(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function JI(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jm(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?JI(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kc,ZI=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kc=kc||document.createElement("div"),kc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var kl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},MN=["Webkit","ms","Moz","O"];Object.keys(kl).forEach(function(t){MN.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),kl[e]=kl[t]})});function eS(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||kl.hasOwnProperty(t)&&kl[t]?(""+e).trim():e+"px"}function tS(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=eS(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var FN=Ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zm(t,e){if(e){if(FN[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function eg(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tg=null;function Y_(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ng=null,Fo=null,Vo=null;function Pw(t){if(t=Vu(t)){if(typeof ng!="function")throw Error(B(280));var e=t.stateNode;e&&(e=hf(e),ng(t.stateNode,t.type,e))}}function nS(t){Fo?Vo?Vo.push(t):Vo=[t]:Fo=t}function rS(){if(Fo){var t=Fo,e=Vo;if(Vo=Fo=null,Pw(t),e)for(t=0;t<e.length;t++)Pw(e[t])}}function iS(t,e){return t(e)}function sS(){}var Lp=!1;function oS(t,e,n){if(Lp)return t(e,n);Lp=!0;try{return iS(t,e,n)}finally{Lp=!1,(Fo!==null||Vo!==null)&&(sS(),rS())}}function Jl(t,e){var n=t.stateNode;if(n===null)return null;var r=hf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var rg=!1;if(Kr)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){rg=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{rg=!1}function VN(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var Pl=!1,jh=null,$h=!1,ig=null,UN={onError:function(t){Pl=!0,jh=t}};function jN(t,e,n,r,i,s,o,a,l){Pl=!1,jh=null,VN.apply(UN,arguments)}function $N(t,e,n,r,i,s,o,a,l){if(jN.apply(this,arguments),Pl){if(Pl){var c=jh;Pl=!1,jh=null}else throw Error(B(198));$h||($h=!0,ig=c)}}function qs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function aS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bw(t){if(qs(t)!==t)throw Error(B(188))}function zN(t){var e=t.alternate;if(!e){if(e=qs(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bw(i),t;if(s===r)return bw(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function lS(t){return t=zN(t),t!==null?uS(t):null}function uS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=uS(t);if(e!==null)return e;t=t.sibling}return null}var cS=kn.unstable_scheduleCallback,Nw=kn.unstable_cancelCallback,BN=kn.unstable_shouldYield,WN=kn.unstable_requestPaint,at=kn.unstable_now,HN=kn.unstable_getCurrentPriorityLevel,X_=kn.unstable_ImmediatePriority,hS=kn.unstable_UserBlockingPriority,zh=kn.unstable_NormalPriority,qN=kn.unstable_LowPriority,dS=kn.unstable_IdlePriority,af=null,mr=null;function GN(t){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(af,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:YN,KN=Math.log,QN=Math.LN2;function YN(t){return t>>>=0,t===0?32:31-(KN(t)/QN|0)|0}var Pc=64,bc=4194304;function vl(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Bh(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=vl(a):(s&=o,s!==0&&(r=vl(s)))}else o=n&~i,o!==0?r=vl(o):s!==0&&(r=vl(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jn(e),i=1<<n,r|=t[n],e&=~i;return r}function XN(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JN(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Jn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=XN(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sg(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fS(){var t=Pc;return Pc<<=1,!(Pc&4194240)&&(Pc=64),t}function Mp(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function ZN(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Jn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function J_(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var be=0;function pS(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var mS,Z_,gS,_S,yS,og=!1,Nc=[],bi=null,Ni=null,Oi=null,Zl=new Map,eu=new Map,yi=[],e2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ow(t,e){switch(t){case"focusin":case"focusout":bi=null;break;case"dragenter":case"dragleave":Ni=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Zl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":eu.delete(e.pointerId)}}function rl(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vu(e),e!==null&&Z_(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function t2(t,e,n,r,i){switch(e){case"focusin":return bi=rl(bi,t,e,n,r,i),!0;case"dragenter":return Ni=rl(Ni,t,e,n,r,i),!0;case"mouseover":return Oi=rl(Oi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Zl.set(s,rl(Zl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,eu.set(s,rl(eu.get(s)||null,t,e,n,r,i)),!0}return!1}function vS(t){var e=ps(t.target);if(e!==null){var n=qs(e);if(n!==null){if(e=n.tag,e===13){if(e=aS(n),e!==null){t.blockedOn=e,yS(t.priority,function(){gS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ah(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ag(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);tg=r,n.target.dispatchEvent(r),tg=null}else return e=Vu(n),e!==null&&Z_(e),t.blockedOn=n,!1;e.shift()}return!0}function Dw(t,e,n){ah(t)&&n.delete(e)}function n2(){og=!1,bi!==null&&ah(bi)&&(bi=null),Ni!==null&&ah(Ni)&&(Ni=null),Oi!==null&&ah(Oi)&&(Oi=null),Zl.forEach(Dw),eu.forEach(Dw)}function il(t,e){t.blockedOn===e&&(t.blockedOn=null,og||(og=!0,kn.unstable_scheduleCallback(kn.unstable_NormalPriority,n2)))}function tu(t){function e(i){return il(i,t)}if(0<Nc.length){il(Nc[0],t);for(var n=1;n<Nc.length;n++){var r=Nc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bi!==null&&il(bi,t),Ni!==null&&il(Ni,t),Oi!==null&&il(Oi,t),Zl.forEach(e),eu.forEach(e),n=0;n<yi.length;n++)r=yi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<yi.length&&(n=yi[0],n.blockedOn===null);)vS(n),n.blockedOn===null&&yi.shift()}var Uo=ii.ReactCurrentBatchConfig,Wh=!0;function r2(t,e,n,r){var i=be,s=Uo.transition;Uo.transition=null;try{be=1,ey(t,e,n,r)}finally{be=i,Uo.transition=s}}function i2(t,e,n,r){var i=be,s=Uo.transition;Uo.transition=null;try{be=4,ey(t,e,n,r)}finally{be=i,Uo.transition=s}}function ey(t,e,n,r){if(Wh){var i=ag(t,e,n,r);if(i===null)qp(t,e,r,Hh,n),Ow(t,r);else if(t2(i,t,e,n,r))r.stopPropagation();else if(Ow(t,r),e&4&&-1<e2.indexOf(t)){for(;i!==null;){var s=Vu(i);if(s!==null&&mS(s),s=ag(t,e,n,r),s===null&&qp(t,e,r,Hh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else qp(t,e,r,null,n)}}var Hh=null;function ag(t,e,n,r){if(Hh=null,t=Y_(r),t=ps(t),t!==null)if(e=qs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=aS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hh=t,null}function wS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HN()){case X_:return 1;case hS:return 4;case zh:case qN:return 16;case dS:return 536870912;default:return 16}default:return 16}}var xi=null,ty=null,lh=null;function ES(){if(lh)return lh;var t,e=ty,n=e.length,r,i="value"in xi?xi.value:xi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return lh=i.slice(t,1<r?1-r:void 0)}function uh(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oc(){return!0}function Lw(){return!1}function bn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oc:Lw,this.isPropagationStopped=Lw,this}return Ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oc)},persist:function(){},isPersistent:Oc}),e}var Ra={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ny=bn(Ra),Fu=Ye({},Ra,{view:0,detail:0}),s2=bn(Fu),Fp,Vp,sl,lf=Ye({},Fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ry,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sl&&(sl&&t.type==="mousemove"?(Fp=t.screenX-sl.screenX,Vp=t.screenY-sl.screenY):Vp=Fp=0,sl=t),Fp)},movementY:function(t){return"movementY"in t?t.movementY:Vp}}),Mw=bn(lf),o2=Ye({},lf,{dataTransfer:0}),a2=bn(o2),l2=Ye({},Fu,{relatedTarget:0}),Up=bn(l2),u2=Ye({},Ra,{animationName:0,elapsedTime:0,pseudoElement:0}),c2=bn(u2),h2=Ye({},Ra,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d2=bn(h2),f2=Ye({},Ra,{data:0}),Fw=bn(f2),p2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g2[t])?!!e[t]:!1}function ry(){return _2}var y2=Ye({},Fu,{key:function(t){if(t.key){var e=p2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=uh(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?m2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ry,charCode:function(t){return t.type==="keypress"?uh(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?uh(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v2=bn(y2),w2=Ye({},lf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vw=bn(w2),E2=Ye({},Fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ry}),T2=bn(E2),I2=Ye({},Ra,{propertyName:0,elapsedTime:0,pseudoElement:0}),S2=bn(I2),C2=Ye({},lf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x2=bn(C2),A2=[9,13,27,32],iy=Kr&&"CompositionEvent"in window,bl=null;Kr&&"documentMode"in document&&(bl=document.documentMode);var R2=Kr&&"TextEvent"in window&&!bl,TS=Kr&&(!iy||bl&&8<bl&&11>=bl),Uw=String.fromCharCode(32),jw=!1;function IS(t,e){switch(t){case"keyup":return A2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function SS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wo=!1;function k2(t,e){switch(t){case"compositionend":return SS(e);case"keypress":return e.which!==32?null:(jw=!0,Uw);case"textInput":return t=e.data,t===Uw&&jw?null:t;default:return null}}function P2(t,e){if(wo)return t==="compositionend"||!iy&&IS(t,e)?(t=ES(),lh=ty=xi=null,wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return TS&&e.locale!=="ko"?null:e.data;default:return null}}var b2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $w(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!b2[t.type]:e==="textarea"}function CS(t,e,n,r){nS(r),e=qh(e,"onChange"),0<e.length&&(n=new ny("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Nl=null,nu=null;function N2(t){MS(t,0)}function uf(t){var e=Io(t);if(QI(e))return t}function O2(t,e){if(t==="change")return e}var xS=!1;if(Kr){var jp;if(Kr){var $p="oninput"in document;if(!$p){var zw=document.createElement("div");zw.setAttribute("oninput","return;"),$p=typeof zw.oninput=="function"}jp=$p}else jp=!1;xS=jp&&(!document.documentMode||9<document.documentMode)}function Bw(){Nl&&(Nl.detachEvent("onpropertychange",AS),nu=Nl=null)}function AS(t){if(t.propertyName==="value"&&uf(nu)){var e=[];CS(e,nu,t,Y_(t)),oS(N2,e)}}function D2(t,e,n){t==="focusin"?(Bw(),Nl=e,nu=n,Nl.attachEvent("onpropertychange",AS)):t==="focusout"&&Bw()}function L2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uf(nu)}function M2(t,e){if(t==="click")return uf(e)}function F2(t,e){if(t==="input"||t==="change")return uf(e)}function V2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nr=typeof Object.is=="function"?Object.is:V2;function ru(t,e){if(nr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Bm.call(e,i)||!nr(t[i],e[i]))return!1}return!0}function Ww(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hw(t,e){var n=Ww(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ww(n)}}function RS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?RS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function kS(){for(var t=window,e=Uh();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Uh(t.document)}return e}function sy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function U2(t){var e=kS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&RS(n.ownerDocument.documentElement,n)){if(r!==null&&sy(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hw(n,s);var o=Hw(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var j2=Kr&&"documentMode"in document&&11>=document.documentMode,Eo=null,lg=null,Ol=null,ug=!1;function qw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ug||Eo==null||Eo!==Uh(r)||(r=Eo,"selectionStart"in r&&sy(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ol&&ru(Ol,r)||(Ol=r,r=qh(lg,"onSelect"),0<r.length&&(e=new ny("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Eo)))}function Dc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var To={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},zp={},PS={};Kr&&(PS=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function cf(t){if(zp[t])return zp[t];if(!To[t])return t;var e=To[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in PS)return zp[t]=e[n];return t}var bS=cf("animationend"),NS=cf("animationiteration"),OS=cf("animationstart"),DS=cf("transitionend"),LS=new Map,Gw="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ji(t,e){LS.set(t,e),Hs(e,[t])}for(var Bp=0;Bp<Gw.length;Bp++){var Wp=Gw[Bp],$2=Wp.toLowerCase(),z2=Wp[0].toUpperCase()+Wp.slice(1);Ji($2,"on"+z2)}Ji(bS,"onAnimationEnd");Ji(NS,"onAnimationIteration");Ji(OS,"onAnimationStart");Ji("dblclick","onDoubleClick");Ji("focusin","onFocus");Ji("focusout","onBlur");Ji(DS,"onTransitionEnd");Xo("onMouseEnter",["mouseout","mouseover"]);Xo("onMouseLeave",["mouseout","mouseover"]);Xo("onPointerEnter",["pointerout","pointerover"]);Xo("onPointerLeave",["pointerout","pointerover"]);Hs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B2=new Set("cancel close invalid load scroll toggle".split(" ").concat(wl));function Kw(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$N(r,e,void 0,t),t.currentTarget=null}function MS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Kw(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Kw(i,a,c),s=l}}}if($h)throw t=ig,$h=!1,ig=null,t}function $e(t,e){var n=e[pg];n===void 0&&(n=e[pg]=new Set);var r=t+"__bubble";n.has(r)||(FS(e,t,2,!1),n.add(r))}function Hp(t,e,n){var r=0;e&&(r|=4),FS(n,t,r,e)}var Lc="_reactListening"+Math.random().toString(36).slice(2);function iu(t){if(!t[Lc]){t[Lc]=!0,WI.forEach(function(n){n!=="selectionchange"&&(B2.has(n)||Hp(n,!1,t),Hp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lc]||(e[Lc]=!0,Hp("selectionchange",!1,e))}}function FS(t,e,n,r){switch(wS(e)){case 1:var i=r2;break;case 4:i=i2;break;default:i=ey}n=i.bind(null,e,n,t),i=void 0,!rg||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function qp(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ps(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}oS(function(){var c=s,h=Y_(n),d=[];e:{var p=LS.get(t);if(p!==void 0){var _=ny,v=t;switch(t){case"keypress":if(uh(n)===0)break e;case"keydown":case"keyup":_=v2;break;case"focusin":v="focus",_=Up;break;case"focusout":v="blur",_=Up;break;case"beforeblur":case"afterblur":_=Up;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Mw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=a2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=T2;break;case bS:case NS:case OS:_=c2;break;case DS:_=S2;break;case"scroll":_=s2;break;case"wheel":_=x2;break;case"copy":case"cut":case"paste":_=d2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Vw}var I=(e&4)!==0,k=!I&&t==="scroll",w=I?p!==null?p+"Capture":null:p;I=[];for(var g=c,S;g!==null;){S=g;var O=S.stateNode;if(S.tag===5&&O!==null&&(S=O,w!==null&&(O=Jl(g,w),O!=null&&I.push(su(g,O,S)))),k)break;g=g.return}0<I.length&&(p=new _(p,v,null,n,h),d.push({event:p,listeners:I}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==tg&&(v=n.relatedTarget||n.fromElement)&&(ps(v)||v[Qr]))break e;if((_||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=c,v=v?ps(v):null,v!==null&&(k=qs(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=c),_!==v)){if(I=Mw,O="onMouseLeave",w="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(I=Vw,O="onPointerLeave",w="onPointerEnter",g="pointer"),k=_==null?p:Io(_),S=v==null?p:Io(v),p=new I(O,g+"leave",_,n,h),p.target=k,p.relatedTarget=S,O=null,ps(h)===c&&(I=new I(w,g+"enter",v,n,h),I.target=S,I.relatedTarget=k,O=I),k=O,_&&v)t:{for(I=_,w=v,g=0,S=I;S;S=uo(S))g++;for(S=0,O=w;O;O=uo(O))S++;for(;0<g-S;)I=uo(I),g--;for(;0<S-g;)w=uo(w),S--;for(;g--;){if(I===w||w!==null&&I===w.alternate)break t;I=uo(I),w=uo(w)}I=null}else I=null;_!==null&&Qw(d,p,_,I,!1),v!==null&&k!==null&&Qw(d,k,v,I,!0)}}e:{if(p=c?Io(c):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var L=O2;else if($w(p))if(xS)L=F2;else{L=L2;var V=D2}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(L=M2);if(L&&(L=L(t,c))){CS(d,L,n,h);break e}V&&V(t,p,c),t==="focusout"&&(V=p._wrapperState)&&V.controlled&&p.type==="number"&&Ym(p,"number",p.value)}switch(V=c?Io(c):window,t){case"focusin":($w(V)||V.contentEditable==="true")&&(Eo=V,lg=c,Ol=null);break;case"focusout":Ol=lg=Eo=null;break;case"mousedown":ug=!0;break;case"contextmenu":case"mouseup":case"dragend":ug=!1,qw(d,n,h);break;case"selectionchange":if(j2)break;case"keydown":case"keyup":qw(d,n,h)}var E;if(iy)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else wo?IS(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(TS&&n.locale!=="ko"&&(wo||T!=="onCompositionStart"?T==="onCompositionEnd"&&wo&&(E=ES()):(xi=h,ty="value"in xi?xi.value:xi.textContent,wo=!0)),V=qh(c,T),0<V.length&&(T=new Fw(T,t,null,n,h),d.push({event:T,listeners:V}),E?T.data=E:(E=SS(n),E!==null&&(T.data=E)))),(E=R2?k2(t,n):P2(t,n))&&(c=qh(c,"onBeforeInput"),0<c.length&&(h=new Fw("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:c}),h.data=E))}MS(d,e)})}function su(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Jl(t,n),s!=null&&r.unshift(su(t,s,i)),s=Jl(t,e),s!=null&&r.push(su(t,s,i))),t=t.return}return r}function uo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Qw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Jl(n,s),l!=null&&o.unshift(su(n,l,a))):i||(l=Jl(n,s),l!=null&&o.push(su(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var W2=/\r\n?/g,H2=/\u0000|\uFFFD/g;function Yw(t){return(typeof t=="string"?t:""+t).replace(W2,`
`).replace(H2,"")}function Mc(t,e,n){if(e=Yw(e),Yw(t)!==e&&n)throw Error(B(425))}function Gh(){}var cg=null,hg=null;function dg(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fg=typeof setTimeout=="function"?setTimeout:void 0,q2=typeof clearTimeout=="function"?clearTimeout:void 0,Xw=typeof Promise=="function"?Promise:void 0,G2=typeof queueMicrotask=="function"?queueMicrotask:typeof Xw<"u"?function(t){return Xw.resolve(null).then(t).catch(K2)}:fg;function K2(t){setTimeout(function(){throw t})}function Gp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),tu(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);tu(e)}function Di(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Jw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ka=Math.random().toString(36).slice(2),cr="__reactFiber$"+ka,ou="__reactProps$"+ka,Qr="__reactContainer$"+ka,pg="__reactEvents$"+ka,Q2="__reactListeners$"+ka,Y2="__reactHandles$"+ka;function ps(t){var e=t[cr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qr]||n[cr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Jw(t);t!==null;){if(n=t[cr])return n;t=Jw(t)}return e}t=n,n=t.parentNode}return null}function Vu(t){return t=t[cr]||t[Qr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Io(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function hf(t){return t[ou]||null}var mg=[],So=-1;function Zi(t){return{current:t}}function He(t){0>So||(t.current=mg[So],mg[So]=null,So--)}function Ve(t,e){So++,mg[So]=t.current,t.current=e}var Hi={},Xt=Zi(Hi),pn=Zi(!1),ks=Hi;function Jo(t,e){var n=t.type.contextTypes;if(!n)return Hi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function mn(t){return t=t.childContextTypes,t!=null}function Kh(){He(pn),He(Xt)}function Zw(t,e,n){if(Xt.current!==Hi)throw Error(B(168));Ve(Xt,e),Ve(pn,n)}function VS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,DN(t)||"Unknown",i));return Ye({},n,r)}function Qh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Hi,ks=Xt.current,Ve(Xt,t),Ve(pn,pn.current),!0}function eE(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=VS(t,e,ks),r.__reactInternalMemoizedMergedChildContext=t,He(pn),He(Xt),Ve(Xt,t)):He(pn),Ve(pn,n)}var Vr=null,df=!1,Kp=!1;function US(t){Vr===null?Vr=[t]:Vr.push(t)}function X2(t){df=!0,US(t)}function es(){if(!Kp&&Vr!==null){Kp=!0;var t=0,e=be;try{var n=Vr;for(be=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vr=null,df=!1}catch(i){throw Vr!==null&&(Vr=Vr.slice(t+1)),cS(X_,es),i}finally{be=e,Kp=!1}}return null}var Co=[],xo=0,Yh=null,Xh=0,On=[],Dn=0,Ps=null,Ur=1,jr="";function cs(t,e){Co[xo++]=Xh,Co[xo++]=Yh,Yh=t,Xh=e}function jS(t,e,n){On[Dn++]=Ur,On[Dn++]=jr,On[Dn++]=Ps,Ps=t;var r=Ur;t=jr;var i=32-Jn(r)-1;r&=~(1<<i),n+=1;var s=32-Jn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ur=1<<32-Jn(e)+i|n<<i|r,jr=s+t}else Ur=1<<s|n<<i|r,jr=t}function oy(t){t.return!==null&&(cs(t,1),jS(t,1,0))}function ay(t){for(;t===Yh;)Yh=Co[--xo],Co[xo]=null,Xh=Co[--xo],Co[xo]=null;for(;t===Ps;)Ps=On[--Dn],On[Dn]=null,jr=On[--Dn],On[Dn]=null,Ur=On[--Dn],On[Dn]=null}var xn=null,Sn=null,Ge=!1,qn=null;function $S(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function tE(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,Sn=Di(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,Sn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ps!==null?{id:Ur,overflow:jr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,Sn=null,!0):!1;default:return!1}}function gg(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _g(t){if(Ge){var e=Sn;if(e){var n=e;if(!tE(t,e)){if(gg(t))throw Error(B(418));e=Di(n.nextSibling);var r=xn;e&&tE(t,e)?$S(r,n):(t.flags=t.flags&-4097|2,Ge=!1,xn=t)}}else{if(gg(t))throw Error(B(418));t.flags=t.flags&-4097|2,Ge=!1,xn=t}}}function nE(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Fc(t){if(t!==xn)return!1;if(!Ge)return nE(t),Ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dg(t.type,t.memoizedProps)),e&&(e=Sn)){if(gg(t))throw zS(),Error(B(418));for(;e;)$S(t,e),e=Di(e.nextSibling)}if(nE(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Sn=Di(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Sn=null}}else Sn=xn?Di(t.stateNode.nextSibling):null;return!0}function zS(){for(var t=Sn;t;)t=Di(t.nextSibling)}function Zo(){Sn=xn=null,Ge=!1}function ly(t){qn===null?qn=[t]:qn.push(t)}var J2=ii.ReactCurrentBatchConfig;function Bn(t,e){if(t&&t.defaultProps){e=Ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Jh=Zi(null),Zh=null,Ao=null,uy=null;function cy(){uy=Ao=Zh=null}function hy(t){var e=Jh.current;He(Jh),t._currentValue=e}function yg(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function jo(t,e){Zh=t,uy=Ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(uy!==t)if(t={context:t,memoizedValue:e,next:null},Ao===null){if(Zh===null)throw Error(B(308));Ao=t,Zh.dependencies={lanes:0,firstContext:t}}else Ao=Ao.next=t;return e}var ms=null;function dy(t){ms===null?ms=[t]:ms.push(t)}function BS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dy(e)):(n.next=i.next,i.next=n),e.interleaved=n,Yr(t,r)}function Yr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var _i=!1;function fy(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function WS(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Hr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Li(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Yr(t,n)}return i=r.interleaved,i===null?(e.next=e,dy(r)):(e.next=i.next,i.next=e),r.interleaved=e,Yr(t,n)}function ch(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,J_(t,n)}}function rE(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ed(t,e,n,r){var i=t.updateQueue;_i=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=c=l=null,a=s;do{var p=a.lane,_=a.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,I=a;switch(p=e,_=n,I.tag){case 1:if(v=I.payload,typeof v=="function"){d=v.call(_,d,p);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=I.payload,p=typeof v=="function"?v.call(_,d,p):v,p==null)break e;d=Ye({},d,p);break e;case 2:_i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=_,l=d):h=h.next=_,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ns|=o,t.lanes=o,t.memoizedState=d}}function iE(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var HS=new BI.Component().refs;function vg(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ff={isMounted:function(t){return(t=t._reactInternals)?qs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rn(),i=Fi(t),s=Hr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Li(t,s,i),e!==null&&(Zn(e,t,i,r),ch(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rn(),i=Fi(t),s=Hr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Li(t,s,i),e!==null&&(Zn(e,t,i,r),ch(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),r=Fi(t),i=Hr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Li(t,i,r),e!==null&&(Zn(e,t,r,n),ch(e,t,r))}};function sE(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ru(n,r)||!ru(i,s):!0}function qS(t,e,n){var r=!1,i=Hi,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(i=mn(e)?ks:Xt.current,r=e.contextTypes,s=(r=r!=null)?Jo(t,i):Hi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ff,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function oE(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ff.enqueueReplaceState(e,e.state,null)}function wg(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=HS,fy(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Vn(s):(s=mn(e)?ks:Xt.current,i.context=Jo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vg(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ff.enqueueReplaceState(i,i.state,null),ed(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ol(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===HS&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function Vc(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function aE(t){var e=t._init;return e(t._payload)}function GS(t){function e(w,g){if(t){var S=w.deletions;S===null?(w.deletions=[g],w.flags|=16):S.push(g)}}function n(w,g){if(!t)return null;for(;g!==null;)e(w,g),g=g.sibling;return null}function r(w,g){for(w=new Map;g!==null;)g.key!==null?w.set(g.key,g):w.set(g.index,g),g=g.sibling;return w}function i(w,g){return w=Vi(w,g),w.index=0,w.sibling=null,w}function s(w,g,S){return w.index=S,t?(S=w.alternate,S!==null?(S=S.index,S<g?(w.flags|=2,g):S):(w.flags|=2,g)):(w.flags|=1048576,g)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function a(w,g,S,O){return g===null||g.tag!==6?(g=tm(S,w.mode,O),g.return=w,g):(g=i(g,S),g.return=w,g)}function l(w,g,S,O){var L=S.type;return L===vo?h(w,g,S.props.children,O,S.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gi&&aE(L)===g.type)?(O=i(g,S.props),O.ref=ol(w,g,S),O.return=w,O):(O=gh(S.type,S.key,S.props,null,w.mode,O),O.ref=ol(w,g,S),O.return=w,O)}function c(w,g,S,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=nm(S,w.mode,O),g.return=w,g):(g=i(g,S.children||[]),g.return=w,g)}function h(w,g,S,O,L){return g===null||g.tag!==7?(g=Is(S,w.mode,O,L),g.return=w,g):(g=i(g,S),g.return=w,g)}function d(w,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return g=tm(""+g,w.mode,S),g.return=w,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ac:return S=gh(g.type,g.key,g.props,null,w.mode,S),S.ref=ol(w,null,g),S.return=w,S;case yo:return g=nm(g,w.mode,S),g.return=w,g;case gi:var O=g._init;return d(w,O(g._payload),S)}if(yl(g)||tl(g))return g=Is(g,w.mode,S,null),g.return=w,g;Vc(w,g)}return null}function p(w,g,S,O){var L=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return L!==null?null:a(w,g,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ac:return S.key===L?l(w,g,S,O):null;case yo:return S.key===L?c(w,g,S,O):null;case gi:return L=S._init,p(w,g,L(S._payload),O)}if(yl(S)||tl(S))return L!==null?null:h(w,g,S,O,null);Vc(w,S)}return null}function _(w,g,S,O,L){if(typeof O=="string"&&O!==""||typeof O=="number")return w=w.get(S)||null,a(g,w,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ac:return w=w.get(O.key===null?S:O.key)||null,l(g,w,O,L);case yo:return w=w.get(O.key===null?S:O.key)||null,c(g,w,O,L);case gi:var V=O._init;return _(w,g,S,V(O._payload),L)}if(yl(O)||tl(O))return w=w.get(S)||null,h(g,w,O,L,null);Vc(g,O)}return null}function v(w,g,S,O){for(var L=null,V=null,E=g,T=g=0,C=null;E!==null&&T<S.length;T++){E.index>T?(C=E,E=null):C=E.sibling;var A=p(w,E,S[T],O);if(A===null){E===null&&(E=C);break}t&&E&&A.alternate===null&&e(w,E),g=s(A,g,T),V===null?L=A:V.sibling=A,V=A,E=C}if(T===S.length)return n(w,E),Ge&&cs(w,T),L;if(E===null){for(;T<S.length;T++)E=d(w,S[T],O),E!==null&&(g=s(E,g,T),V===null?L=E:V.sibling=E,V=E);return Ge&&cs(w,T),L}for(E=r(w,E);T<S.length;T++)C=_(E,w,T,S[T],O),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?T:C.key),g=s(C,g,T),V===null?L=C:V.sibling=C,V=C);return t&&E.forEach(function(P){return e(w,P)}),Ge&&cs(w,T),L}function I(w,g,S,O){var L=tl(S);if(typeof L!="function")throw Error(B(150));if(S=L.call(S),S==null)throw Error(B(151));for(var V=L=null,E=g,T=g=0,C=null,A=S.next();E!==null&&!A.done;T++,A=S.next()){E.index>T?(C=E,E=null):C=E.sibling;var P=p(w,E,A.value,O);if(P===null){E===null&&(E=C);break}t&&E&&P.alternate===null&&e(w,E),g=s(P,g,T),V===null?L=P:V.sibling=P,V=P,E=C}if(A.done)return n(w,E),Ge&&cs(w,T),L;if(E===null){for(;!A.done;T++,A=S.next())A=d(w,A.value,O),A!==null&&(g=s(A,g,T),V===null?L=A:V.sibling=A,V=A);return Ge&&cs(w,T),L}for(E=r(w,E);!A.done;T++,A=S.next())A=_(E,w,T,A.value,O),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?T:A.key),g=s(A,g,T),V===null?L=A:V.sibling=A,V=A);return t&&E.forEach(function(b){return e(w,b)}),Ge&&cs(w,T),L}function k(w,g,S,O){if(typeof S=="object"&&S!==null&&S.type===vo&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ac:e:{for(var L=S.key,V=g;V!==null;){if(V.key===L){if(L=S.type,L===vo){if(V.tag===7){n(w,V.sibling),g=i(V,S.props.children),g.return=w,w=g;break e}}else if(V.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===gi&&aE(L)===V.type){n(w,V.sibling),g=i(V,S.props),g.ref=ol(w,V,S),g.return=w,w=g;break e}n(w,V);break}else e(w,V);V=V.sibling}S.type===vo?(g=Is(S.props.children,w.mode,O,S.key),g.return=w,w=g):(O=gh(S.type,S.key,S.props,null,w.mode,O),O.ref=ol(w,g,S),O.return=w,w=O)}return o(w);case yo:e:{for(V=S.key;g!==null;){if(g.key===V)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(w,g.sibling),g=i(g,S.children||[]),g.return=w,w=g;break e}else{n(w,g);break}else e(w,g);g=g.sibling}g=nm(S,w.mode,O),g.return=w,w=g}return o(w);case gi:return V=S._init,k(w,g,V(S._payload),O)}if(yl(S))return v(w,g,S,O);if(tl(S))return I(w,g,S,O);Vc(w,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,g!==null&&g.tag===6?(n(w,g.sibling),g=i(g,S),g.return=w,w=g):(n(w,g),g=tm(S,w.mode,O),g.return=w,w=g),o(w)):n(w,g)}return k}var ea=GS(!0),KS=GS(!1),Uu={},gr=Zi(Uu),au=Zi(Uu),lu=Zi(Uu);function gs(t){if(t===Uu)throw Error(B(174));return t}function py(t,e){switch(Ve(lu,e),Ve(au,t),Ve(gr,Uu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jm(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jm(e,t)}He(gr),Ve(gr,e)}function ta(){He(gr),He(au),He(lu)}function QS(t){gs(lu.current);var e=gs(gr.current),n=Jm(e,t.type);e!==n&&(Ve(au,t),Ve(gr,n))}function my(t){au.current===t&&(He(gr),He(au))}var Ke=Zi(0);function td(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Qp=[];function gy(){for(var t=0;t<Qp.length;t++)Qp[t]._workInProgressVersionPrimary=null;Qp.length=0}var hh=ii.ReactCurrentDispatcher,Yp=ii.ReactCurrentBatchConfig,bs=0,Qe=null,gt=null,Ct=null,nd=!1,Dl=!1,uu=0,Z2=0;function zt(){throw Error(B(321))}function _y(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!nr(t[n],e[n]))return!1;return!0}function yy(t,e,n,r,i,s){if(bs=s,Qe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hh.current=t===null||t.memoizedState===null?rO:iO,t=n(r,i),Dl){s=0;do{if(Dl=!1,uu=0,25<=s)throw Error(B(301));s+=1,Ct=gt=null,e.updateQueue=null,hh.current=sO,t=n(r,i)}while(Dl)}if(hh.current=rd,e=gt!==null&&gt.next!==null,bs=0,Ct=gt=Qe=null,nd=!1,e)throw Error(B(300));return t}function vy(){var t=uu!==0;return uu=0,t}function sr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Qe.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Un(){if(gt===null){var t=Qe.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=Ct===null?Qe.memoizedState:Ct.next;if(e!==null)Ct=e,gt=t;else{if(t===null)throw Error(B(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Ct===null?Qe.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function cu(t,e){return typeof e=="function"?e(t):e}function Xp(t){var e=Un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((bs&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Qe.lanes|=h,Ns|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,nr(r,e.memoizedState)||(hn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Qe.lanes|=s,Ns|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Jp(t){var e=Un(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);nr(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function YS(){}function XS(t,e){var n=Qe,r=Un(),i=e(),s=!nr(r.memoizedState,i);if(s&&(r.memoizedState=i,hn=!0),r=r.queue,wy(eC.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,hu(9,ZS.bind(null,n,r,i,e),void 0,null),kt===null)throw Error(B(349));bs&30||JS(n,e,i)}return i}function JS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ZS(t,e,n,r){e.value=n,e.getSnapshot=r,tC(e)&&nC(t)}function eC(t,e,n){return n(function(){tC(e)&&nC(t)})}function tC(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nr(t,n)}catch{return!0}}function nC(t){var e=Yr(t,1);e!==null&&Zn(e,t,1,-1)}function lE(t){var e=sr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:cu,lastRenderedState:t},e.queue=t,t=t.dispatch=nO.bind(null,Qe,t),[e.memoizedState,t]}function hu(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Qe.updateQueue,e===null?(e={lastEffect:null,stores:null},Qe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function rC(){return Un().memoizedState}function dh(t,e,n,r){var i=sr();Qe.flags|=t,i.memoizedState=hu(1|e,n,void 0,r===void 0?null:r)}function pf(t,e,n,r){var i=Un();r=r===void 0?null:r;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,r!==null&&_y(r,o.deps)){i.memoizedState=hu(e,n,s,r);return}}Qe.flags|=t,i.memoizedState=hu(1|e,n,s,r)}function uE(t,e){return dh(8390656,8,t,e)}function wy(t,e){return pf(2048,8,t,e)}function iC(t,e){return pf(4,2,t,e)}function sC(t,e){return pf(4,4,t,e)}function oC(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function aC(t,e,n){return n=n!=null?n.concat([t]):null,pf(4,4,oC.bind(null,e,t),n)}function Ey(){}function lC(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_y(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uC(t,e){var n=Un();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_y(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cC(t,e,n){return bs&21?(nr(n,e)||(n=fS(),Qe.lanes|=n,Ns|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function eO(t,e){var n=be;be=n!==0&&4>n?n:4,t(!0);var r=Yp.transition;Yp.transition={};try{t(!1),e()}finally{be=n,Yp.transition=r}}function hC(){return Un().memoizedState}function tO(t,e,n){var r=Fi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},dC(t))fC(e,n);else if(n=BS(t,e,n,r),n!==null){var i=rn();Zn(n,t,r,i),pC(n,e,r)}}function nO(t,e,n){var r=Fi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(dC(t))fC(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,nr(a,o)){var l=e.interleaved;l===null?(i.next=i,dy(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=BS(t,e,i,r),n!==null&&(i=rn(),Zn(n,t,r,i),pC(n,e,r))}}function dC(t){var e=t.alternate;return t===Qe||e!==null&&e===Qe}function fC(t,e){Dl=nd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function pC(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,J_(t,n)}}var rd={readContext:Vn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},rO={readContext:Vn,useCallback:function(t,e){return sr().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:uE,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,dh(4194308,4,oC.bind(null,e,t),n)},useLayoutEffect:function(t,e){return dh(4194308,4,t,e)},useInsertionEffect:function(t,e){return dh(4,2,t,e)},useMemo:function(t,e){var n=sr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=tO.bind(null,Qe,t),[r.memoizedState,t]},useRef:function(t){var e=sr();return t={current:t},e.memoizedState=t},useState:lE,useDebugValue:Ey,useDeferredValue:function(t){return sr().memoizedState=t},useTransition:function(){var t=lE(!1),e=t[0];return t=eO.bind(null,t[1]),sr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Qe,i=sr();if(Ge){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),kt===null)throw Error(B(349));bs&30||JS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uE(eC.bind(null,r,s,t),[t]),r.flags|=2048,hu(9,ZS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sr(),e=kt.identifierPrefix;if(Ge){var n=jr,r=Ur;n=(r&~(1<<32-Jn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=uu++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Z2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iO={readContext:Vn,useCallback:lC,useContext:Vn,useEffect:wy,useImperativeHandle:aC,useInsertionEffect:iC,useLayoutEffect:sC,useMemo:uC,useReducer:Xp,useRef:rC,useState:function(){return Xp(cu)},useDebugValue:Ey,useDeferredValue:function(t){var e=Un();return cC(e,gt.memoizedState,t)},useTransition:function(){var t=Xp(cu)[0],e=Un().memoizedState;return[t,e]},useMutableSource:YS,useSyncExternalStore:XS,useId:hC,unstable_isNewReconciler:!1},sO={readContext:Vn,useCallback:lC,useContext:Vn,useEffect:wy,useImperativeHandle:aC,useInsertionEffect:iC,useLayoutEffect:sC,useMemo:uC,useReducer:Jp,useRef:rC,useState:function(){return Jp(cu)},useDebugValue:Ey,useDeferredValue:function(t){var e=Un();return gt===null?e.memoizedState=t:cC(e,gt.memoizedState,t)},useTransition:function(){var t=Jp(cu)[0],e=Un().memoizedState;return[t,e]},useMutableSource:YS,useSyncExternalStore:XS,useId:hC,unstable_isNewReconciler:!1};function na(t,e){try{var n="",r=e;do n+=ON(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Zp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eg(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var oO=typeof WeakMap=="function"?WeakMap:Map;function mC(t,e,n){n=Hr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){sd||(sd=!0,bg=r),Eg(t,e)},n}function gC(t,e,n){n=Hr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Eg(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eg(t,e),typeof r!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function cE(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new oO;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wO.bind(null,t,e,n),e.then(t,t))}function hE(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function dE(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Hr(-1,1),e.tag=2,Li(n,e,1))),n.lanes|=1),t)}var aO=ii.ReactCurrentOwner,hn=!1;function tn(t,e,n,r){e.child=t===null?KS(e,null,n,r):ea(e,t.child,n,r)}function fE(t,e,n,r,i){n=n.render;var s=e.ref;return jo(e,i),r=yy(t,e,n,r,s,i),n=vy(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xr(t,e,i)):(Ge&&n&&oy(e),e.flags|=1,tn(t,e,r,i),e.child)}function pE(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ky(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_C(t,e,s,r,i)):(t=gh(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ru,n(o,r)&&t.ref===e.ref)return Xr(t,e,i)}return e.flags|=1,t=Vi(s,r),t.ref=e.ref,t.return=e,e.child=t}function _C(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ru(s,r)&&t.ref===e.ref)if(hn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Xr(t,e,i)}return Tg(t,e,n,r,i)}function yC(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ve(ko,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ve(ko,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ve(ko,Tn),Tn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ve(ko,Tn),Tn|=r;return tn(t,e,i,n),e.child}function vC(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Tg(t,e,n,r,i){var s=mn(n)?ks:Xt.current;return s=Jo(e,s),jo(e,i),n=yy(t,e,n,r,s,i),r=vy(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Xr(t,e,i)):(Ge&&r&&oy(e),e.flags|=1,tn(t,e,n,i),e.child)}function mE(t,e,n,r,i){if(mn(n)){var s=!0;Qh(e)}else s=!1;if(jo(e,i),e.stateNode===null)fh(t,e),qS(e,n,r),wg(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Vn(c):(c=mn(n)?ks:Xt.current,c=Jo(e,c));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&oE(e,o,r,c),_i=!1;var p=e.memoizedState;o.state=p,ed(e,r,o,i),l=e.memoizedState,a!==r||p!==l||pn.current||_i?(typeof h=="function"&&(vg(e,n,h,r),l=e.memoizedState),(a=_i||sE(e,n,a,r,p,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,WS(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,d=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Vn(l):(l=mn(n)?ks:Xt.current,l=Jo(e,l));var _=n.getDerivedStateFromProps;(h=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||p!==l)&&oE(e,o,r,l),_i=!1,p=e.memoizedState,o.state=p,ed(e,r,o,i);var v=e.memoizedState;a!==d||p!==v||pn.current||_i?(typeof _=="function"&&(vg(e,n,_,r),v=e.memoizedState),(c=_i||sE(e,n,c,r,p,v,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return Ig(t,e,n,r,s,i)}function Ig(t,e,n,r,i,s){vC(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&eE(e,n,!1),Xr(t,e,s);r=e.stateNode,aO.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ea(e,t.child,null,s),e.child=ea(e,null,a,s)):tn(t,e,a,s),e.memoizedState=r.state,i&&eE(e,n,!0),e.child}function wC(t){var e=t.stateNode;e.pendingContext?Zw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zw(t,e.context,!1),py(t,e.containerInfo)}function gE(t,e,n,r,i){return Zo(),ly(i),e.flags|=256,tn(t,e,n,r),e.child}var Sg={dehydrated:null,treeContext:null,retryLane:0};function Cg(t){return{baseLanes:t,cachePool:null,transitions:null}}function EC(t,e,n){var r=e.pendingProps,i=Ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ve(Ke,i&1),t===null)return _g(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_f(o,r,0,null),t=Is(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cg(n),e.memoizedState=Sg,t):Ty(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return lO(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vi(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Vi(a,s):(s=Is(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Cg(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sg,r}return s=t.child,t=s.sibling,r=Vi(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ty(t,e){return e=_f({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uc(t,e,n,r){return r!==null&&ly(r),ea(e,t.child,null,n),t=Ty(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function lO(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Zp(Error(B(422))),Uc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=_f({mode:"visible",children:r.children},i,0,null),s=Is(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ea(e,t.child,null,o),e.child.memoizedState=Cg(o),e.memoizedState=Sg,s);if(!(e.mode&1))return Uc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(B(419)),r=Zp(s,r,void 0),Uc(t,e,o,r)}if(a=(o&t.childLanes)!==0,hn||a){if(r=kt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Yr(t,i),Zn(r,t,i,-1))}return Ry(),r=Zp(Error(B(421))),Uc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=EO.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Sn=Di(i.nextSibling),xn=e,Ge=!0,qn=null,t!==null&&(On[Dn++]=Ur,On[Dn++]=jr,On[Dn++]=Ps,Ur=t.id,jr=t.overflow,Ps=e),e=Ty(e,r.children),e.flags|=4096,e)}function _E(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yg(t.return,e,n)}function em(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function TC(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(tn(t,e,r.children,n),r=Ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_E(t,n,e);else if(t.tag===19)_E(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ve(Ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&td(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),em(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&td(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}em(e,!0,n,null,s);break;case"together":em(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function fh(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Xr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ns|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Vi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uO(t,e,n){switch(e.tag){case 3:wC(e),Zo();break;case 5:QS(e);break;case 1:mn(e.type)&&Qh(e);break;case 4:py(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ve(Jh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ve(Ke,Ke.current&1),e.flags|=128,null):n&e.child.childLanes?EC(t,e,n):(Ve(Ke,Ke.current&1),t=Xr(t,e,n),t!==null?t.sibling:null);Ve(Ke,Ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return TC(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ve(Ke,Ke.current),r)break;return null;case 22:case 23:return e.lanes=0,yC(t,e,n)}return Xr(t,e,n)}var IC,xg,SC,CC;IC=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xg=function(){};SC=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,gs(gr.current);var s=null;switch(n){case"input":i=Km(t,i),r=Km(t,r),s=[];break;case"select":i=Ye({},i,{value:void 0}),r=Ye({},r,{value:void 0}),s=[];break;case"textarea":i=Xm(t,i),r=Xm(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Gh)}Zm(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&$e("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};CC=function(t,e,n,r){n!==r&&(e.flags|=4)};function al(t,e){if(!Ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cO(t,e,n){var r=e.pendingProps;switch(ay(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return mn(e.type)&&Kh(),Bt(e),null;case 3:return r=e.stateNode,ta(),He(pn),He(Xt),gy(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Dg(qn),qn=null))),xg(t,e),Bt(e),null;case 5:my(e);var i=gs(lu.current);if(n=e.type,t!==null&&e.stateNode!=null)SC(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return Bt(e),null}if(t=gs(gr.current),Fc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cr]=e,r[ou]=s,t=(e.mode&1)!==0,n){case"dialog":$e("cancel",r),$e("close",r);break;case"iframe":case"object":case"embed":$e("load",r);break;case"video":case"audio":for(i=0;i<wl.length;i++)$e(wl[i],r);break;case"source":$e("error",r);break;case"img":case"image":case"link":$e("error",r),$e("load",r);break;case"details":$e("toggle",r);break;case"input":xw(r,s),$e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},$e("invalid",r);break;case"textarea":Rw(r,s),$e("invalid",r)}Zm(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Mc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Mc(r.textContent,a,t),i=["children",""+a]):Yl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&$e("scroll",r)}switch(n){case"input":Rc(r),Aw(r,s,!0);break;case"textarea":Rc(r),kw(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Gh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=JI(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cr]=e,t[ou]=r,IC(t,e,!1,!1),e.stateNode=t;e:{switch(o=eg(n,r),n){case"dialog":$e("cancel",t),$e("close",t),i=r;break;case"iframe":case"object":case"embed":$e("load",t),i=r;break;case"video":case"audio":for(i=0;i<wl.length;i++)$e(wl[i],t);i=r;break;case"source":$e("error",t),i=r;break;case"img":case"image":case"link":$e("error",t),$e("load",t),i=r;break;case"details":$e("toggle",t),i=r;break;case"input":xw(t,r),i=Km(t,r),$e("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ye({},r,{value:void 0}),$e("invalid",t);break;case"textarea":Rw(t,r),i=Xm(t,r),$e("invalid",t);break;default:i=r}Zm(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?tS(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ZI(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xl(t,l):typeof l=="number"&&Xl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&$e("scroll",t):l!=null&&q_(t,s,l,o))}switch(n){case"input":Rc(t),Aw(t,r,!1);break;case"textarea":Rc(t),kw(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Wi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mo(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Gh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)CC(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=gs(lu.current),gs(gr.current),Fc(e)){if(r=e.stateNode,n=e.memoizedProps,r[cr]=e,(s=r.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Mc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cr]=e,e.stateNode=r}return Bt(e),null;case 13:if(He(Ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ge&&Sn!==null&&e.mode&1&&!(e.flags&128))zS(),Zo(),e.flags|=98560,s=!1;else if(s=Fc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[cr]=e}else Zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),s=!1}else qn!==null&&(Dg(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ke.current&1?vt===0&&(vt=3):Ry())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return ta(),xg(t,e),t===null&&iu(e.stateNode.containerInfo),Bt(e),null;case 10:return hy(e.type._context),Bt(e),null;case 17:return mn(e.type)&&Kh(),Bt(e),null;case 19:if(He(Ke),s=e.memoizedState,s===null)return Bt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)al(s,!1);else{if(vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=td(t),o!==null){for(e.flags|=128,al(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ve(Ke,Ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&at()>ra&&(e.flags|=128,r=!0,al(s,!1),e.lanes=4194304)}else{if(!r)if(t=td(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),al(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ge)return Bt(e),null}else 2*at()-s.renderingStartTime>ra&&n!==1073741824&&(e.flags|=128,r=!0,al(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=at(),e.sibling=null,n=Ke.current,Ve(Ke,r?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Ay(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Tn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function hO(t,e){switch(ay(e),e.tag){case 1:return mn(e.type)&&Kh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ta(),He(pn),He(Xt),gy(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return my(e),null;case 13:if(He(Ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));Zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return He(Ke),null;case 4:return ta(),null;case 10:return hy(e.type._context),null;case 22:case 23:return Ay(),null;case 24:return null;default:return null}}var jc=!1,Gt=!1,dO=typeof WeakSet=="function"?WeakSet:Set,X=null;function Ro(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){tt(t,e,r)}else n.current=null}function Ag(t,e,n){try{n()}catch(r){tt(t,e,r)}}var yE=!1;function fO(t,e){if(cg=Wh,t=kS(),sy(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,d=t,p=null;t:for(;;){for(var _;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(_=d.firstChild)!==null;)p=d,d=_;for(;;){if(d===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++h===r&&(l=o),(_=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hg={focusedElem:t,selectionRange:n},Wh=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var I=v.memoizedProps,k=v.memoizedState,w=e.stateNode,g=w.getSnapshotBeforeUpdate(e.elementType===e.type?I:Bn(e.type,I),k);w.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){tt(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return v=yE,yE=!1,v}function Ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ag(e,n,s)}i=i.next}while(i!==r)}}function mf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rg(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function xC(t){var e=t.alternate;e!==null&&(t.alternate=null,xC(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cr],delete e[ou],delete e[pg],delete e[Q2],delete e[Y2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function AC(t){return t.tag===5||t.tag===3||t.tag===4}function vE(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||AC(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function kg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gh));else if(r!==4&&(t=t.child,t!==null))for(kg(t,e,n),t=t.sibling;t!==null;)kg(t,e,n),t=t.sibling}function Pg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pg(t,e,n),t=t.sibling;t!==null;)Pg(t,e,n),t=t.sibling}var bt=null,Hn=!1;function di(t,e,n){for(n=n.child;n!==null;)RC(t,e,n),n=n.sibling}function RC(t,e,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(af,n)}catch{}switch(n.tag){case 5:Gt||Ro(n,e);case 6:var r=bt,i=Hn;bt=null,di(t,e,n),bt=r,Hn=i,bt!==null&&(Hn?(t=bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Hn?(t=bt,n=n.stateNode,t.nodeType===8?Gp(t.parentNode,n):t.nodeType===1&&Gp(t,n),tu(t)):Gp(bt,n.stateNode));break;case 4:r=bt,i=Hn,bt=n.stateNode.containerInfo,Hn=!0,di(t,e,n),bt=r,Hn=i;break;case 0:case 11:case 14:case 15:if(!Gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ag(n,e,o),i=i.next}while(i!==r)}di(t,e,n);break;case 1:if(!Gt&&(Ro(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){tt(n,e,a)}di(t,e,n);break;case 21:di(t,e,n);break;case 22:n.mode&1?(Gt=(r=Gt)||n.memoizedState!==null,di(t,e,n),Gt=r):di(t,e,n);break;default:di(t,e,n)}}function wE(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dO),e.forEach(function(r){var i=TO.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:bt=a.stateNode,Hn=!1;break e;case 3:bt=a.stateNode.containerInfo,Hn=!0;break e;case 4:bt=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(bt===null)throw Error(B(160));RC(s,o,i),bt=null,Hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){tt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kC(e,t),e=e.sibling}function kC(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ir(t),r&4){try{Ll(3,t,t.return),mf(3,t)}catch(I){tt(t,t.return,I)}try{Ll(5,t,t.return)}catch(I){tt(t,t.return,I)}}break;case 1:zn(e,t),ir(t),r&512&&n!==null&&Ro(n,n.return);break;case 5:if(zn(e,t),ir(t),r&512&&n!==null&&Ro(n,n.return),t.flags&32){var i=t.stateNode;try{Xl(i,"")}catch(I){tt(t,t.return,I)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&YI(i,s),eg(a,o);var c=eg(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?tS(i,d):h==="dangerouslySetInnerHTML"?ZI(i,d):h==="children"?Xl(i,d):q_(i,h,d,c)}switch(a){case"input":Qm(i,s);break;case"textarea":XI(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Mo(i,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?Mo(i,!!s.multiple,s.defaultValue,!0):Mo(i,!!s.multiple,s.multiple?[]:"",!1))}i[ou]=s}catch(I){tt(t,t.return,I)}}break;case 6:if(zn(e,t),ir(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(I){tt(t,t.return,I)}}break;case 3:if(zn(e,t),ir(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{tu(e.containerInfo)}catch(I){tt(t,t.return,I)}break;case 4:zn(e,t),ir(t);break;case 13:zn(e,t),ir(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cy=at())),r&4&&wE(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Gt=(c=Gt)||h,zn(e,t),Gt=c):zn(e,t),ir(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(X=t,h=t.child;h!==null;){for(d=X=h;X!==null;){switch(p=X,_=p.child,p.tag){case 0:case 11:case 14:case 15:Ll(4,p,p.return);break;case 1:Ro(p,p.return);var v=p.stateNode;if(typeof v.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(I){tt(r,n,I)}}break;case 5:Ro(p,p.return);break;case 22:if(p.memoizedState!==null){TE(d);continue}}_!==null?(_.return=p,X=_):TE(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=eS("display",o))}catch(I){tt(t,t.return,I)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(I){tt(t,t.return,I)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(e,t),ir(t),r&4&&wE(t);break;case 21:break;default:zn(e,t),ir(t)}}function ir(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(AC(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Xl(i,""),r.flags&=-33);var s=vE(t);Pg(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=vE(t);kg(t,a,o);break;default:throw Error(B(161))}}catch(l){tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pO(t,e,n){X=t,PC(t)}function PC(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||jc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Gt;a=jc;var c=Gt;if(jc=o,(Gt=l)&&!c)for(X=i;X!==null;)o=X,l=o.child,o.tag===22&&o.memoizedState!==null?IE(i):l!==null?(l.return=o,X=l):IE(i);for(;s!==null;)X=s,PC(s),s=s.sibling;X=i,jc=a,Gt=c}EE(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):EE(t)}}function EE(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Gt||mf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Gt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&iE(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}iE(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&tu(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Gt||e.flags&512&&Rg(e)}catch(p){tt(e,e.return,p)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function TE(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function IE(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mf(4,e)}catch(l){tt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){tt(e,i,l)}}var s=e.return;try{Rg(e)}catch(l){tt(e,s,l)}break;case 5:var o=e.return;try{Rg(e)}catch(l){tt(e,o,l)}}}catch(l){tt(e,e.return,l)}if(e===t){X=null;break}var a=e.sibling;if(a!==null){a.return=e.return,X=a;break}X=e.return}}var mO=Math.ceil,id=ii.ReactCurrentDispatcher,Iy=ii.ReactCurrentOwner,Mn=ii.ReactCurrentBatchConfig,Ee=0,kt=null,ft=null,Lt=0,Tn=0,ko=Zi(0),vt=0,du=null,Ns=0,gf=0,Sy=0,Ml=null,ln=null,Cy=0,ra=1/0,Mr=null,sd=!1,bg=null,Mi=null,$c=!1,Ai=null,od=0,Fl=0,Ng=null,ph=-1,mh=0;function rn(){return Ee&6?at():ph!==-1?ph:ph=at()}function Fi(t){return t.mode&1?Ee&2&&Lt!==0?Lt&-Lt:J2.transition!==null?(mh===0&&(mh=fS()),mh):(t=be,t!==0||(t=window.event,t=t===void 0?16:wS(t.type)),t):1}function Zn(t,e,n,r){if(50<Fl)throw Fl=0,Ng=null,Error(B(185));Mu(t,n,r),(!(Ee&2)||t!==kt)&&(t===kt&&(!(Ee&2)&&(gf|=n),vt===4&&vi(t,Lt)),gn(t,r),n===1&&Ee===0&&!(e.mode&1)&&(ra=at()+500,df&&es()))}function gn(t,e){var n=t.callbackNode;JN(t,e);var r=Bh(t,t===kt?Lt:0);if(r===0)n!==null&&Nw(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Nw(n),e===1)t.tag===0?X2(SE.bind(null,t)):US(SE.bind(null,t)),G2(function(){!(Ee&6)&&es()}),n=null;else{switch(pS(r)){case 1:n=X_;break;case 4:n=hS;break;case 16:n=zh;break;case 536870912:n=dS;break;default:n=zh}n=VC(n,bC.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function bC(t,e){if(ph=-1,mh=0,Ee&6)throw Error(B(327));var n=t.callbackNode;if($o()&&t.callbackNode!==n)return null;var r=Bh(t,t===kt?Lt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ad(t,r);else{e=r;var i=Ee;Ee|=2;var s=OC();(kt!==t||Lt!==e)&&(Mr=null,ra=at()+500,Ts(t,e));do try{yO();break}catch(a){NC(t,a)}while(1);cy(),id.current=s,Ee=i,ft!==null?e=0:(kt=null,Lt=0,e=vt)}if(e!==0){if(e===2&&(i=sg(t),i!==0&&(r=i,e=Og(t,i))),e===1)throw n=du,Ts(t,0),vi(t,r),gn(t,at()),n;if(e===6)vi(t,r);else{if(i=t.current.alternate,!(r&30)&&!gO(i)&&(e=ad(t,r),e===2&&(s=sg(t),s!==0&&(r=s,e=Og(t,s))),e===1))throw n=du,Ts(t,0),vi(t,r),gn(t,at()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:hs(t,ln,Mr);break;case 3:if(vi(t,r),(r&130023424)===r&&(e=Cy+500-at(),10<e)){if(Bh(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fg(hs.bind(null,t,ln,Mr),e);break}hs(t,ln,Mr);break;case 4:if(vi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Jn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=at()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*mO(r/1960))-r,10<r){t.timeoutHandle=fg(hs.bind(null,t,ln,Mr),r);break}hs(t,ln,Mr);break;case 5:hs(t,ln,Mr);break;default:throw Error(B(329))}}}return gn(t,at()),t.callbackNode===n?bC.bind(null,t):null}function Og(t,e){var n=Ml;return t.current.memoizedState.isDehydrated&&(Ts(t,e).flags|=256),t=ad(t,e),t!==2&&(e=ln,ln=n,e!==null&&Dg(e)),t}function Dg(t){ln===null?ln=t:ln.push.apply(ln,t)}function gO(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!nr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vi(t,e){for(e&=~Sy,e&=~gf,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),r=1<<n;t[n]=-1,e&=~r}}function SE(t){if(Ee&6)throw Error(B(327));$o();var e=Bh(t,0);if(!(e&1))return gn(t,at()),null;var n=ad(t,e);if(t.tag!==0&&n===2){var r=sg(t);r!==0&&(e=r,n=Og(t,r))}if(n===1)throw n=du,Ts(t,0),vi(t,e),gn(t,at()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,hs(t,ln,Mr),gn(t,at()),null}function xy(t,e){var n=Ee;Ee|=1;try{return t(e)}finally{Ee=n,Ee===0&&(ra=at()+500,df&&es())}}function Os(t){Ai!==null&&Ai.tag===0&&!(Ee&6)&&$o();var e=Ee;Ee|=1;var n=Mn.transition,r=be;try{if(Mn.transition=null,be=1,t)return t()}finally{be=r,Mn.transition=n,Ee=e,!(Ee&6)&&es()}}function Ay(){Tn=ko.current,He(ko)}function Ts(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q2(n)),ft!==null)for(n=ft.return;n!==null;){var r=n;switch(ay(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kh();break;case 3:ta(),He(pn),He(Xt),gy();break;case 5:my(r);break;case 4:ta();break;case 13:He(Ke);break;case 19:He(Ke);break;case 10:hy(r.type._context);break;case 22:case 23:Ay()}n=n.return}if(kt=t,ft=t=Vi(t.current,null),Lt=Tn=e,vt=0,du=null,Sy=gf=Ns=0,ln=Ml=null,ms!==null){for(e=0;e<ms.length;e++)if(n=ms[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ms=null}return t}function NC(t,e){do{var n=ft;try{if(cy(),hh.current=rd,nd){for(var r=Qe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nd=!1}if(bs=0,Ct=gt=Qe=null,Dl=!1,uu=0,Iy.current=null,n===null||n.return===null){vt=1,du=e,ft=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Lt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var _=hE(o);if(_!==null){_.flags&=-257,dE(_,o,a,s,e),_.mode&1&&cE(s,c,e),e=_,l=c;var v=e.updateQueue;if(v===null){var I=new Set;I.add(l),e.updateQueue=I}else v.add(l);break e}else{if(!(e&1)){cE(s,c,e),Ry();break e}l=Error(B(426))}}else if(Ge&&a.mode&1){var k=hE(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),dE(k,o,a,s,e),ly(na(l,a));break e}}s=l=na(l,a),vt!==4&&(vt=2),Ml===null?Ml=[s]:Ml.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=mC(s,l,e);rE(s,w);break e;case 1:a=l;var g=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Mi===null||!Mi.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=gC(s,a,e);rE(s,O);break e}}s=s.return}while(s!==null)}LC(n)}catch(L){e=L,ft===n&&n!==null&&(ft=n=n.return);continue}break}while(1)}function OC(){var t=id.current;return id.current=rd,t===null?rd:t}function Ry(){(vt===0||vt===3||vt===2)&&(vt=4),kt===null||!(Ns&268435455)&&!(gf&268435455)||vi(kt,Lt)}function ad(t,e){var n=Ee;Ee|=2;var r=OC();(kt!==t||Lt!==e)&&(Mr=null,Ts(t,e));do try{_O();break}catch(i){NC(t,i)}while(1);if(cy(),Ee=n,id.current=r,ft!==null)throw Error(B(261));return kt=null,Lt=0,vt}function _O(){for(;ft!==null;)DC(ft)}function yO(){for(;ft!==null&&!BN();)DC(ft)}function DC(t){var e=FC(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?LC(t):ft=e,Iy.current=null}function LC(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hO(n,e),n!==null){n.flags&=32767,ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{vt=6,ft=null;return}}else if(n=cO(n,e,Tn),n!==null){ft=n;return}if(e=e.sibling,e!==null){ft=e;return}ft=e=t}while(e!==null);vt===0&&(vt=5)}function hs(t,e,n){var r=be,i=Mn.transition;try{Mn.transition=null,be=1,vO(t,e,n,r)}finally{Mn.transition=i,be=r}return null}function vO(t,e,n,r){do $o();while(Ai!==null);if(Ee&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ZN(t,s),t===kt&&(ft=kt=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$c||($c=!0,VC(zh,function(){return $o(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mn.transition,Mn.transition=null;var o=be;be=1;var a=Ee;Ee|=4,Iy.current=null,fO(t,n),kC(n,t),U2(hg),Wh=!!cg,hg=cg=null,t.current=n,pO(n),WN(),Ee=a,be=o,Mn.transition=s}else t.current=n;if($c&&($c=!1,Ai=t,od=i),s=t.pendingLanes,s===0&&(Mi=null),GN(n.stateNode),gn(t,at()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sd)throw sd=!1,t=bg,bg=null,t;return od&1&&t.tag!==0&&$o(),s=t.pendingLanes,s&1?t===Ng?Fl++:(Fl=0,Ng=t):Fl=0,es(),null}function $o(){if(Ai!==null){var t=pS(od),e=Mn.transition,n=be;try{if(Mn.transition=null,be=16>t?16:t,Ai===null)var r=!1;else{if(t=Ai,Ai=null,od=0,Ee&6)throw Error(B(331));var i=Ee;for(Ee|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(X=c;X!==null;){var h=X;switch(h.tag){case 0:case 11:case 15:Ll(8,h,s)}var d=h.child;if(d!==null)d.return=h,X=d;else for(;X!==null;){h=X;var p=h.sibling,_=h.return;if(xC(h),h===c){X=null;break}if(p!==null){p.return=_,X=p;break}X=_}}}var v=s.alternate;if(v!==null){var I=v.child;if(I!==null){v.child=null;do{var k=I.sibling;I.sibling=null,I=k}while(I!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ll(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,X=w;break e}X=s.return}}var g=t.current;for(X=g;X!==null;){o=X;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,X=S;else e:for(o=g;X!==null;){if(a=X,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mf(9,a)}}catch(L){tt(a,a.return,L)}if(a===o){X=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,X=O;break e}X=a.return}}if(Ee=i,es(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(af,t)}catch{}r=!0}return r}finally{be=n,Mn.transition=e}}return!1}function CE(t,e,n){e=na(n,e),e=mC(t,e,1),t=Li(t,e,1),e=rn(),t!==null&&(Mu(t,1,e),gn(t,e))}function tt(t,e,n){if(t.tag===3)CE(t,t,n);else for(;e!==null;){if(e.tag===3){CE(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mi===null||!Mi.has(r))){t=na(n,t),t=gC(e,t,1),e=Li(e,t,1),t=rn(),e!==null&&(Mu(e,1,t),gn(e,t));break}}e=e.return}}function wO(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Lt&n)===n&&(vt===4||vt===3&&(Lt&130023424)===Lt&&500>at()-Cy?Ts(t,0):Sy|=n),gn(t,e)}function MC(t,e){e===0&&(t.mode&1?(e=bc,bc<<=1,!(bc&130023424)&&(bc=4194304)):e=1);var n=rn();t=Yr(t,e),t!==null&&(Mu(t,e,n),gn(t,n))}function EO(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),MC(t,n)}function TO(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),MC(t,n)}var FC;FC=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,uO(t,e,n);hn=!!(t.flags&131072)}else hn=!1,Ge&&e.flags&1048576&&jS(e,Xh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;fh(t,e),t=e.pendingProps;var i=Jo(e,Xt.current);jo(e,n),i=yy(null,e,r,t,i,n);var s=vy();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(r)?(s=!0,Qh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fy(e),i.updater=ff,e.stateNode=i,i._reactInternals=e,wg(e,r,t,n),e=Ig(null,e,r,!0,s,n)):(e.tag=0,Ge&&s&&oy(e),tn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(fh(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SO(r),t=Bn(r,t),i){case 0:e=Tg(null,e,r,t,n);break e;case 1:e=mE(null,e,r,t,n);break e;case 11:e=fE(null,e,r,t,n);break e;case 14:e=pE(null,e,r,Bn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),Tg(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),mE(t,e,r,i,n);case 3:e:{if(wC(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,WS(t,e),ed(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=na(Error(B(423)),e),e=gE(t,e,r,n,i);break e}else if(r!==i){i=na(Error(B(424)),e),e=gE(t,e,r,n,i);break e}else for(Sn=Di(e.stateNode.containerInfo.firstChild),xn=e,Ge=!0,qn=null,n=KS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zo(),r===i){e=Xr(t,e,n);break e}tn(t,e,r,n)}e=e.child}return e;case 5:return QS(e),t===null&&_g(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dg(r,i)?o=null:s!==null&&dg(r,s)&&(e.flags|=32),vC(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&_g(e),null;case 13:return EC(t,e,n);case 4:return py(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ea(e,null,r,n):tn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),fE(t,e,r,i,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ve(Jh,r._currentValue),r._currentValue=o,s!==null)if(nr(s.value,o)){if(s.children===i.children&&!pn.current){e=Xr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Hr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yg(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yg(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,jo(e,n),i=Vn(i),r=r(i),e.flags|=1,tn(t,e,r,n),e.child;case 14:return r=e.type,i=Bn(r,e.pendingProps),i=Bn(r.type,i),pE(t,e,r,i,n);case 15:return _C(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bn(r,i),fh(t,e),e.tag=1,mn(r)?(t=!0,Qh(e)):t=!1,jo(e,n),qS(e,r,i),wg(e,r,i,n),Ig(null,e,r,!0,t,n);case 19:return TC(t,e,n);case 22:return yC(t,e,n)}throw Error(B(156,e.tag))};function VC(t,e){return cS(t,e)}function IO(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,r){return new IO(t,e,n,r)}function ky(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SO(t){if(typeof t=="function")return ky(t)?1:0;if(t!=null){if(t=t.$$typeof,t===K_)return 11;if(t===Q_)return 14}return 2}function Vi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function gh(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ky(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case vo:return Is(n.children,i,s,e);case G_:o=8,i|=8;break;case Wm:return t=Ln(12,n,e,i|2),t.elementType=Wm,t.lanes=s,t;case Hm:return t=Ln(13,n,e,i),t.elementType=Hm,t.lanes=s,t;case qm:return t=Ln(19,n,e,i),t.elementType=qm,t.lanes=s,t;case GI:return _f(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case HI:o=10;break e;case qI:o=9;break e;case K_:o=11;break e;case Q_:o=14;break e;case gi:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Is(t,e,n,r){return t=Ln(7,t,r,e),t.lanes=n,t}function _f(t,e,n,r){return t=Ln(22,t,r,e),t.elementType=GI,t.lanes=n,t.stateNode={isHidden:!1},t}function tm(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function nm(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CO(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mp(0),this.expirationTimes=Mp(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mp(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Py(t,e,n,r,i,s,o,a,l){return t=new CO(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fy(s),t}function xO(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function UC(t){if(!t)return Hi;t=t._reactInternals;e:{if(qs(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(mn(n))return VS(t,n,e)}return e}function jC(t,e,n,r,i,s,o,a,l){return t=Py(n,r,!0,t,i,s,o,a,l),t.context=UC(null),n=t.current,r=rn(),i=Fi(n),s=Hr(r,i),s.callback=e??null,Li(n,s,i),t.current.lanes=i,Mu(t,i,r),gn(t,r),t}function yf(t,e,n,r){var i=e.current,s=rn(),o=Fi(i);return n=UC(n),e.context===null?e.context=n:e.pendingContext=n,e=Hr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Li(i,e,o),t!==null&&(Zn(t,i,o,s),ch(t,i,o)),o}function ld(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xE(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function by(t,e){xE(t,e),(t=t.alternate)&&xE(t,e)}function AO(){return null}var $C=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ny(t){this._internalRoot=t}vf.prototype.render=Ny.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));yf(t,e,null,null)};vf.prototype.unmount=Ny.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Os(function(){yf(null,t,null,null)}),e[Qr]=null}};function vf(t){this._internalRoot=t}vf.prototype.unstable_scheduleHydration=function(t){if(t){var e=_S();t={blockedOn:null,target:t,priority:e};for(var n=0;n<yi.length&&e!==0&&e<yi[n].priority;n++);yi.splice(n,0,t),n===0&&vS(t)}};function Oy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function wf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function AE(){}function RO(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ld(o);s.call(c)}}var o=jC(e,r,t,0,null,!1,!1,"",AE);return t._reactRootContainer=o,t[Qr]=o.current,iu(t.nodeType===8?t.parentNode:t),Os(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ld(l);a.call(c)}}var l=Py(t,0,!1,null,null,!1,!1,"",AE);return t._reactRootContainer=l,t[Qr]=l.current,iu(t.nodeType===8?t.parentNode:t),Os(function(){yf(e,l,n,r)}),l}function Ef(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ld(o);a.call(l)}}yf(e,o,t,i)}else o=RO(n,e,t,i,r);return ld(o)}mS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vl(e.pendingLanes);n!==0&&(J_(e,n|1),gn(e,at()),!(Ee&6)&&(ra=at()+500,es()))}break;case 13:Os(function(){var r=Yr(t,1);if(r!==null){var i=rn();Zn(r,t,1,i)}}),by(t,1)}};Z_=function(t){if(t.tag===13){var e=Yr(t,134217728);if(e!==null){var n=rn();Zn(e,t,134217728,n)}by(t,134217728)}};gS=function(t){if(t.tag===13){var e=Fi(t),n=Yr(t,e);if(n!==null){var r=rn();Zn(n,t,e,r)}by(t,e)}};_S=function(){return be};yS=function(t,e){var n=be;try{return be=t,e()}finally{be=n}};ng=function(t,e,n){switch(e){case"input":if(Qm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hf(r);if(!i)throw Error(B(90));QI(r),Qm(r,i)}}}break;case"textarea":XI(t,n);break;case"select":e=n.value,e!=null&&Mo(t,!!n.multiple,e,!1)}};iS=xy;sS=Os;var kO={usingClientEntryPoint:!1,Events:[Vu,Io,hf,nS,rS,xy]},ll={findFiberByHostInstance:ps,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},PO={bundleType:ll.bundleType,version:ll.version,rendererPackageName:ll.rendererPackageName,rendererConfig:ll.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lS(t),t===null?null:t.stateNode},findFiberByHostInstance:ll.findFiberByHostInstance||AO,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zc.isDisabled&&zc.supportsFiber)try{af=zc.inject(PO),mr=zc}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kO;Pn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oy(e))throw Error(B(200));return xO(t,e,null,n)};Pn.createRoot=function(t,e){if(!Oy(t))throw Error(B(299));var n=!1,r="",i=$C;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Py(t,1,!1,null,null,n,!1,r,i),t[Qr]=e.current,iu(t.nodeType===8?t.parentNode:t),new Ny(e)};Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=lS(e),t=t===null?null:t.stateNode,t};Pn.flushSync=function(t){return Os(t)};Pn.hydrate=function(t,e,n){if(!wf(e))throw Error(B(200));return Ef(null,t,e,!0,n)};Pn.hydrateRoot=function(t,e,n){if(!Oy(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=$C;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jC(e,null,t,1,n??null,i,!1,s,o),t[Qr]=e.current,iu(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new vf(e)};Pn.render=function(t,e,n){if(!wf(e))throw Error(B(200));return Ef(null,t,e,!1,n)};Pn.unmountComponentAtNode=function(t){if(!wf(t))throw Error(B(40));return t._reactRootContainer?(Os(function(){Ef(null,null,t,!1,function(){t._reactRootContainer=null,t[Qr]=null})}),!0):!1};Pn.unstable_batchedUpdates=xy;Pn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!wf(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Ef(t,e,n,!1,r)};Pn.version="18.2.0-next-9e3b772b8-20220608";function zC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zC)}catch(t){console.error(t)}}zC(),jI.exports=Pn;var bO=jI.exports,RE=bO;zm.createRoot=RE.createRoot,zm.hydrateRoot=RE.hydrateRoot;var dn=function(){return dn=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},dn.apply(this,arguments)};function Dy(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ud(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}function BC(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var NO=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,OO=BC(function(t){return NO.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),ze="-ms-",Vl="-moz-",ke="-webkit-",WC="comm",Tf="rule",Ly="decl",DO="@import",HC="@keyframes",LO="@layer",MO=Math.abs,My=String.fromCharCode,Lg=Object.assign;function FO(t,e){return xt(t,0)^45?(((e<<2^xt(t,0))<<2^xt(t,1))<<2^xt(t,2))<<2^xt(t,3):0}function qC(t){return t.trim()}function Fr(t,e){return(t=e.exec(t))?t[0]:t}function ce(t,e,n){return t.replace(e,n)}function _h(t,e){return t.indexOf(e)}function xt(t,e){return t.charCodeAt(e)|0}function ia(t,e,n){return t.slice(e,n)}function ar(t){return t.length}function GC(t){return t.length}function El(t,e){return e.push(t),t}function VO(t,e){return t.map(e).join("")}function kE(t,e){return t.filter(function(n){return!Fr(n,e)})}var If=1,sa=1,KC=0,jn=0,ht=0,Pa="";function Sf(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:If,column:sa,length:o,return:"",siblings:a}}function mi(t,e){return Lg(Sf("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function co(t){for(;t.root;)t=mi(t.root,{children:[t]});El(t,t.siblings)}function UO(){return ht}function jO(){return ht=jn>0?xt(Pa,--jn):0,sa--,ht===10&&(sa=1,If--),ht}function er(){return ht=jn<KC?xt(Pa,jn++):0,sa++,ht===10&&(sa=1,If++),ht}function Ss(){return xt(Pa,jn)}function yh(){return jn}function Cf(t,e){return ia(Pa,t,e)}function Mg(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function $O(t){return If=sa=1,KC=ar(Pa=t),jn=0,[]}function zO(t){return Pa="",t}function rm(t){return qC(Cf(jn-1,Fg(t===91?t+2:t===40?t+1:t)))}function BO(t){for(;(ht=Ss())&&ht<33;)er();return Mg(t)>2||Mg(ht)>3?"":" "}function WO(t,e){for(;--e&&er()&&!(ht<48||ht>102||ht>57&&ht<65||ht>70&&ht<97););return Cf(t,yh()+(e<6&&Ss()==32&&er()==32))}function Fg(t){for(;er();)switch(ht){case t:return jn;case 34:case 39:t!==34&&t!==39&&Fg(ht);break;case 40:t===41&&Fg(t);break;case 92:er();break}return jn}function HO(t,e){for(;er()&&t+ht!==47+10;)if(t+ht===42+42&&Ss()===47)break;return"/*"+Cf(e,jn-1)+"*"+My(t===47?t:er())}function qO(t){for(;!Mg(Ss());)er();return Cf(t,jn)}function GO(t){return zO(vh("",null,null,null,[""],t=$O(t),0,[0],t))}function vh(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,d=o,p=0,_=0,v=0,I=1,k=1,w=1,g=0,S="",O=i,L=s,V=r,E=S;k;)switch(v=g,g=er()){case 40:if(v!=108&&xt(E,d-1)==58){_h(E+=ce(rm(g),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:E+=rm(g);break;case 9:case 10:case 13:case 32:E+=BO(v);break;case 92:E+=WO(yh()-1,7);continue;case 47:switch(Ss()){case 42:case 47:El(KO(HO(er(),yh()),e,n,l),l);break;default:E+="/"}break;case 123*I:a[c++]=ar(E)*w;case 125*I:case 59:case 0:switch(g){case 0:case 125:k=0;case 59+h:w==-1&&(E=ce(E,/\f/g,"")),_>0&&ar(E)-d&&El(_>32?bE(E+";",r,n,d-1,l):bE(ce(E," ","")+";",r,n,d-2,l),l);break;case 59:E+=";";default:if(El(V=PE(E,e,n,c,h,i,a,S,O=[],L=[],d,s),s),g===123)if(h===0)vh(E,e,V,V,O,s,d,a,L);else switch(p===99&&xt(E,3)===110?100:p){case 100:case 108:case 109:case 115:vh(t,V,V,r&&El(PE(t,V,V,0,0,i,a,S,i,O=[],d,L),L),i,L,d,a,r?O:L);break;default:vh(E,V,V,V,[""],L,0,a,L)}}c=h=_=0,I=w=1,S=E="",d=o;break;case 58:d=1+ar(E),_=v;default:if(I<1){if(g==123)--I;else if(g==125&&I++==0&&jO()==125)continue}switch(E+=My(g),g*I){case 38:w=h>0?1:(E+="\f",-1);break;case 44:a[c++]=(ar(E)-1)*w,w=1;break;case 64:Ss()===45&&(E+=rm(er())),p=Ss(),h=d=ar(S=E+=qO(yh())),g++;break;case 45:v===45&&ar(E)==2&&(I=0)}}return s}function PE(t,e,n,r,i,s,o,a,l,c,h,d){for(var p=i-1,_=i===0?s:[""],v=GC(_),I=0,k=0,w=0;I<r;++I)for(var g=0,S=ia(t,p+1,p=MO(k=o[I])),O=t;g<v;++g)(O=qC(k>0?_[g]+" "+S:ce(S,/&\f/g,_[g])))&&(l[w++]=O);return Sf(t,e,n,i===0?Tf:a,l,c,h,d)}function KO(t,e,n,r){return Sf(t,e,n,WC,My(UO()),ia(t,2,-2),0,r)}function bE(t,e,n,r,i){return Sf(t,e,n,Ly,ia(t,0,r),ia(t,r+1,-1),r,i)}function QC(t,e,n){switch(FO(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return Vl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+Vl+t+ze+t+t;case 5936:switch(xt(t,e+11)){case 114:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+ze+ce(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+ze+t+t;case 6165:return ke+t+ze+"flex-"+t+t;case 5187:return ke+t+ce(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+ze+"flex-$1$2")+t;case 5443:return ke+t+ze+"flex-item-"+ce(t,/flex-|-self/g,"")+(Fr(t,/flex-|baseline/)?"":ze+"grid-row-"+ce(t,/flex-|-self/g,""))+t;case 4675:return ke+t+ze+"flex-line-pack"+ce(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+ze+ce(t,"shrink","negative")+t;case 5292:return ke+t+ze+ce(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+ce(t,"-grow","")+ke+t+ze+ce(t,"grow","positive")+t;case 4554:return ke+ce(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return ce(ce(ce(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return ce(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return ce(ce(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!Fr(t,/flex-|baseline/))return ze+"grid-column-align"+ia(t,e)+t;break;case 2592:case 3360:return ze+ce(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,Fr(r.props,/grid-\w+-end/)})?~_h(t+(n=n[e].value),"span")?t:ze+ce(t,"-start","")+t+ze+"grid-row-span:"+(~_h(n,"span")?Fr(n,/\d+/):+Fr(n,/\d+/)-+Fr(t,/\d+/))+";":ze+ce(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Fr(r.props,/grid-\w+-start/)})?t:ze+ce(ce(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ce(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ar(t)-1-e>6)switch(xt(t,e+1)){case 109:if(xt(t,e+4)!==45)break;case 102:return ce(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Vl+(xt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~_h(t,"stretch")?QC(ce(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ce(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,c){return ze+i+":"+s+c+(o?ze+i+"-span:"+(a?l:+l-+s)+c:"")+t});case 4949:if(xt(t,e+6)===121)return ce(t,":",":"+ke)+t;break;case 6444:switch(xt(t,xt(t,14)===45?18:11)){case 120:return ce(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(xt(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+ze+"$2box$3")+t;case 100:return ce(t,":",":"+ze)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ce(t,"scroll-","scroll-snap-")+t}return t}function cd(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function QO(t,e,n,r){switch(t.type){case LO:if(t.children.length)break;case DO:case Ly:return t.return=t.return||t.value;case WC:return"";case HC:return t.return=t.value+"{"+cd(t.children,r)+"}";case Tf:if(!ar(t.value=t.props.join(",")))return""}return ar(n=cd(t.children,r))?t.return=t.value+"{"+n+"}":""}function YO(t){var e=GC(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function XO(t){return function(e){e.root||(e=e.return)&&t(e)}}function JO(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Ly:t.return=QC(t.value,t.length,n);return;case HC:return cd([mi(t,{value:ce(t.value,"@","@"+ke)})],r);case Tf:if(t.length)return VO(n=t.props,function(i){switch(Fr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":co(mi(t,{props:[ce(i,/:(read-\w+)/,":"+Vl+"$1")]})),co(mi(t,{props:[i]})),Lg(t,{props:kE(n,r)});break;case"::placeholder":co(mi(t,{props:[ce(i,/:(plac\w+)/,":"+ke+"input-$1")]})),co(mi(t,{props:[ce(i,/:(plac\w+)/,":"+Vl+"$1")]})),co(mi(t,{props:[ce(i,/:(plac\w+)/,ze+"input-$1")]})),co(mi(t,{props:[i]})),Lg(t,{props:kE(n,r)});break}return""})}}var YC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},oa=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Fy=typeof window<"u"&&"HTMLElement"in window,ZO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),xf=Object.freeze([]),aa=Object.freeze({});function eD(t,e,n){return n===void 0&&(n=aa),t.theme!==n.theme&&t.theme||e||n.theme}var XC=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tD=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nD=/(^-|-$)/g;function NE(t){return t.replace(tD,"-").replace(nD,"")}var rD=/(a)(d)/gi,OE=function(t){return String.fromCharCode(t+(t>25?39:97))};function Vg(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=OE(e%52)+n;return(OE(e%52)+n).replace(rD,"$1-$2")}var im,Po=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},JC=function(t){return Po(5381,t)};function iD(t){return Vg(JC(t)>>>0)}function sD(t){return t.displayName||t.name||"Component"}function sm(t){return typeof t=="string"&&!0}var ZC=typeof Symbol=="function"&&Symbol.for,ex=ZC?Symbol.for("react.memo"):60115,oD=ZC?Symbol.for("react.forward_ref"):60112,aD={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lD={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},tx={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uD=((im={})[oD]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},im[ex]=tx,im);function DE(t){return("type"in(e=t)&&e.type.$$typeof)===ex?tx:"$$typeof"in t?uD[t.$$typeof]:aD;var e}var cD=Object.defineProperty,hD=Object.getOwnPropertyNames,LE=Object.getOwnPropertySymbols,dD=Object.getOwnPropertyDescriptor,fD=Object.getPrototypeOf,ME=Object.prototype;function nx(t,e,n){if(typeof e!="string"){if(ME){var r=fD(e);r&&r!==ME&&nx(t,r,n)}var i=hD(e);LE&&(i=i.concat(LE(e)));for(var s=DE(t),o=DE(e),a=0;a<i.length;++a){var l=i[a];if(!(l in lD||n&&n[l]||o&&l in o||s&&l in s)){var c=dD(e,l);try{cD(t,l,c)}catch{}}}}return t}function la(t){return typeof t=="function"}function Vy(t){return typeof t=="object"&&"styledComponentId"in t}function _s(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function FE(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function fu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Ug(t,e,n){if(n===void 0&&(n=!1),!n&&!fu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=Ug(t[r],e[r]);else if(fu(e))for(var r in e)t[r]=Ug(t[r],e[r]);return t}function Uy(t,e){Object.defineProperty(t,"toString",{value:e})}function ju(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var pD=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw ju(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},t}(),wh=new Map,hd=new Map,om=1,Bc=function(t){if(wh.has(t))return wh.get(t);for(;hd.has(om);)om++;var e=om++;return wh.set(t,e),hd.set(e,t),e},mD=function(t,e){wh.set(t,e),hd.set(e,t)},gD="style[".concat(oa,"][").concat("data-styled-version",'="').concat("6.0.7",'"]'),_D=new RegExp("^".concat(oa,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),yD=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},vD=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(_D);if(l){var c=0|parseInt(l[1],10),h=l[2];c!==0&&(mD(h,c),yD(t,h,l[3]),t.getTag().insertRules(c,i)),i.length=0}else i.push(a)}}};function wD(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var rx=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(oa,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(oa,"active"),r.setAttribute("data-styled-version","6.0.7");var o=wD();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},ED=function(){function t(e){this.element=rx(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw ju(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),TD=function(){function t(e){this.element=rx(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),ID=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),VE=Fy,SD={isServer:!Fy,useCSSOMInjection:!ZO},ix=function(){function t(e,n,r){e===void 0&&(e=aa),n===void 0&&(n={});var i=this;this.options=dn(dn({},SD),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&Fy&&VE&&(VE=!1,function(s){for(var o=document.querySelectorAll(gD),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(oa)!=="active"&&(vD(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),Uy(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(d){var p=function(w){return hd.get(w)}(d);if(p===void 0)return"continue";var _=s.names.get(p),v=o.getGroup(d);if(_===void 0||v.length===0)return"continue";var I="".concat(oa,".g").concat(d,'[id="').concat(p,'"]'),k="";_!==void 0&&_.forEach(function(w){w.length>0&&(k+="".concat(w,","))}),l+="".concat(v).concat(I,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},h=0;h<a;h++)c(h);return l}(i)})}return t.registerId=function(e){return Bc(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(dn(dn({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ID(i):r?new ED(i):new TD(i)}(this.options),new pD(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Bc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Bc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Bc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),CD=/&/g,xD=/^\s*\/\/.*$/gm;function sx(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=sx(n.children,e)),n})}function AD(t){var e,n,r,i=t===void 0?aa:t,s=i.options,o=s===void 0?aa:s,a=i.plugins,l=a===void 0?xf:a,c=function(p,_,v){return v===n||v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):p},h=l.slice();h.push(function(p){p.type===Tf&&p.value.includes("&")&&(p.props[0]=p.props[0].replace(CD,n).replace(r,c))}),o.prefix&&h.push(JO),h.push(QO);var d=function(p,_,v,I){_===void 0&&(_=""),v===void 0&&(v=""),I===void 0&&(I="&"),e=I,n=_,r=new RegExp("\\".concat(n,"\\b"),"g");var k=p.replace(xD,""),w=GO(v||_?"".concat(v," ").concat(_," { ").concat(k," }"):k);o.namespace&&(w=sx(w,o.namespace));var g=[];return cd(w,YO(h.concat(XO(function(S){return g.push(S)})))),g};return d.hash=l.length?l.reduce(function(p,_){return _.name||ju(15),Po(p,_.name)},5381).toString():"",d}var RD=new ix,jg=AD(),ox=Me.createContext({shouldForwardProp:void 0,styleSheet:RD,stylis:jg});ox.Consumer;Me.createContext(void 0);function UE(){return j.useContext(ox)}var kD=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=jg);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Uy(this,function(){throw ju(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=jg),this.name+e.hash},t}(),PD=function(t){return t>="A"&&t<="Z"};function jE(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;PD(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var ax=function(t){return t==null||t===!1||t===""},lx=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!ax(s)&&(Array.isArray(s)&&s.isCss||la(s)?r.push("".concat(jE(i),":"),s,";"):fu(s)?r.push.apply(r,ud(ud(["".concat(i," {")],lx(s),!1),["}"],!1)):r.push("".concat(jE(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in YC||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cs(t,e,n,r){if(ax(t))return[];if(Vy(t))return[".".concat(t.styledComponentId)];if(la(t)){if(!la(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return Cs(i,e,n,r)}var s;return t instanceof kD?n?(t.inject(n,r),[t.getName(r)]):[t]:fu(t)?lx(t):Array.isArray(t)?Array.prototype.concat.apply(xf,t.map(function(o){return Cs(o,e,n,r)})):[t.toString()]}function bD(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(la(n)&&!Vy(n))return!1}return!0}var ND=JC("6.0.7"),OD=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&bD(e),this.componentId=n,this.baseHash=Po(ND,n),this.baseStyle=r,ix.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=_s(i,this.staticRulesId);else{var s=FE(Cs(this.rules,e,n,r)),o=Vg(Po(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=_s(i,o),this.staticRulesId=o}else{for(var l=Po(this.baseHash,r.hash),c="",h=0;h<this.rules.length;h++){var d=this.rules[h];if(typeof d=="string")c+=d;else if(d){var p=FE(Cs(d,e,n,r));l=Po(l,p),c+=p}}if(c){var _=Vg(l>>>0);n.hasNameForId(this.componentId,_)||n.insertRules(this.componentId,_,r(c,".".concat(_),void 0,this.componentId)),i=_s(i,_)}}return i},t}(),ux=Me.createContext(void 0);ux.Consumer;var am={};function DD(t,e,n){var r=Vy(t),i=t,s=!sm(t),o=e.attrs,a=o===void 0?xf:o,l=e.componentId,c=l===void 0?function(S,O){var L=typeof S!="string"?"sc":NE(S);am[L]=(am[L]||0)+1;var V="".concat(L,"-").concat(iD("6.0.7"+L+am[L]));return O?"".concat(O,"-").concat(V):V}(e.displayName,e.parentComponentId):l,h=e.displayName;h===void 0&&function(S){return sm(S)?"styled.".concat(S):"Styled(".concat(sD(S),")")}(t);var d=e.displayName&&e.componentId?"".concat(NE(e.displayName),"-").concat(e.componentId):e.componentId||c,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(e.shouldForwardProp){var I=e.shouldForwardProp;_=function(S,O){return v(S,O)&&I(S,O)}}else _=v}var k=new OD(n,d,r?i.componentStyle:void 0);function w(S,O){return function(L,V,E){var T=L.attrs,C=L.componentStyle,A=L.defaultProps,P=L.foldedComponentIds,b=L.styledComponentId,x=L.target,de=Me.useContext(ux),Le=UE(),it=L.shouldForwardProp||Le.shouldForwardProp,Ie=function(Ne,Tt,Ut){for(var pt,st=dn(dn({},Tt),{className:void 0,theme:Ut}),Pr=0;Pr<Ne.length;Pr+=1){var br=la(pt=Ne[Pr])?pt(st):pt;for(var Zt in br)st[Zt]=Zt==="className"?_s(st[Zt],br[Zt]):Zt==="style"?dn(dn({},st[Zt]),br[Zt]):br[Zt]}return Tt.className&&(st.className=_s(st.className,Tt.className)),st}(T,V,eD(V,de,A)||aa),q=Ie.as||x,ee={};for(var te in Ie)Ie[te]===void 0||te[0]==="$"||te==="as"||te==="theme"||(te==="forwardedAs"?ee.as=Ie.forwardedAs:it&&!it(te,q)||(ee[te]=Ie[te]));var Pe=function(Ne,Tt){var Ut=UE(),pt=Ne.generateAndInjectStyles(Tt,Ut.styleSheet,Ut.stylis);return pt}(C,Ie),ye=_s(P,b);return Pe&&(ye+=" "+Pe),Ie.className&&(ye+=" "+Ie.className),ee[sm(q)&&!XC.has(q)?"class":"className"]=ye,ee.ref=E,j.createElement(q,ee)}(g,S,O)}var g=Me.forwardRef(w);return g.attrs=p,g.componentStyle=k,g.shouldForwardProp=_,g.foldedComponentIds=r?_s(i.foldedComponentIds,i.styledComponentId):"",g.styledComponentId=d,g.target=r?i.target:t,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(O){for(var L=[],V=1;V<arguments.length;V++)L[V-1]=arguments[V];for(var E=0,T=L;E<T.length;E++)Ug(O,T[E],!0);return O}({},i.defaultProps,S):S}}),Uy(g,function(){return".".concat(g.styledComponentId)}),s&&nx(g,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function $E(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var zE=function(t){return Object.assign(t,{isCss:!0})};function LD(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(la(t)||fu(t)){var r=t;return zE(Cs($E(xf,ud([r],e,!0))))}var i=t;return e.length===0&&i.length===1&&typeof i[0]=="string"?Cs(i):zE(Cs($E(i,e)))}function $g(t,e,n){if(n===void 0&&(n=aa),!e)throw ju(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,LD.apply(void 0,ud([i],s,!1)))};return r.attrs=function(i){return $g(t,e,dn(dn({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return $g(t,e,dn(dn({},n),i))},r}var cx=function(t){return $g(DD,t)},ne=cx;XC.forEach(function(t){ne[t]=cx(t)});const MD=ne.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`,FD=ne(of)`
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
`,VD=ne.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,Wc=ne(of)`
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
`,UD=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 14px;
`,BE=ne.button`
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
`,jD=ne.button`
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
`,$D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHLSURBVHgBvZY/UsJQEMa/fS926uANYuVYiXoAQe3FE4hHsNGxcqgYPAWeAOxV4ABKrBhtzA1k0E7y1vcCBPkfgeTXEPIy+7HLt9klhCCZ/0pZgk6YOAWCDUbCPyA09bVDTE5b8b1zvVadFYumHe7dtrIEcQOwjVCQy1C5l8v14sQnxt1M5j9tS66UGJzEXJDreT9p53rDHT4Rwzf2C99n0rLq84sZ2JbSqu8XWpmRnzIoph8gKmGZMGWfr1bvRgRNGU1mgSGWR9Pz2ru98gYllXKlEoGYIaHLG1TNFzRuDO/EuUh2NLqCHetHS0+DTFNLiQpigDykhZAqg5hQpDKCSOwgJkiIA6GduUCD/xvbmCaKVphEgvj9mBEjAsRNxEdTmDc74sPRpuEa4kLRq4BHZcQFc9mfFvx29KHHko0oYXZp63GzMy0U5xA1XY1gHur2qOuPaF4C3ezMZX/F8Nqn0bSIjqm8dO9bIEjbVRdtvsCyYZz7sYcFO6JPRZ3+kjI1MdS5LuVAF4xdE7mRsiFkZQHnOuYv+pvZVMG+8GEWgm5CC2tzGDf6lZoAIUycxrFe8TmjxfXsNPsqdSeMKRsZkZpeB8u0/VCdFesXTIytwiPfYywAAAAASUVORK5CYII=";var hx={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},WE=Me.createContext&&Me.createContext(hx),zD=["attr","size","title"];function BD(t,e){if(t==null)return{};var n=WD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function WD(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function dd(){return dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},dd.apply(this,arguments)}function HE(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fd(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?HE(Object(n),!0).forEach(function(r){HD(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):HE(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function HD(t,e,n){return e=qD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qD(t){var e=GD(t,"string");return typeof e=="symbol"?e:e+""}function GD(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function dx(t){return t&&t.map((e,n)=>Me.createElement(e.tag,fd({key:n},e.attr),dx(e.child)))}function ts(t){return e=>Me.createElement(KD,dd({attr:fd({},t.attr)},e),dx(t.child))}function KD(t){var e=n=>{var{attr:r,size:i,title:s}=t,o=BD(t,zD),a=i||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),Me.createElement("svg",dd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:fd(fd({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&Me.createElement("title",null,s),t.children)};return WE!==void 0?Me.createElement(WE.Consumer,null,n=>e(n)):e(hx)}function QD(t){return ts({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"},child:[]},{tag:"polyline",attr:{points:"10 17 15 12 10 7"},child:[]},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"},child:[]}]})(t)}function YD(t){return ts({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"},child:[]},{tag:"polyline",attr:{points:"16 17 21 12 16 7"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"9",y2:"12"},child:[]}]})(t)}var $u=t=>t.type==="checkbox",bo=t=>t instanceof Date,nn=t=>t==null;const fx=t=>typeof t=="object";var Et=t=>!nn(t)&&!Array.isArray(t)&&fx(t)&&!bo(t),XD=t=>Et(t)&&t.target?$u(t.target)?t.target.checked:t.target.value:t,JD=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,ZD=(t,e)=>t.has(JD(e)),eL=t=>{const e=t.constructor&&t.constructor.prototype;return Et(e)&&e.hasOwnProperty("isPrototypeOf")},jy=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Nn(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(jy&&(t instanceof Blob||t instanceof FileList))&&(n||Et(t)))if(e=n?[]:{},!n&&!eL(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=Nn(t[r]));else return t;return e}var zu=t=>Array.isArray(t)?t.filter(Boolean):[],ot=t=>t===void 0,Y=(t,e,n)=>{if(!e||!Et(t))return n;const r=zu(e.split(/[,[\].]+?/)).reduce((i,s)=>nn(i)?i:i[s],t);return ot(r)||r===t?ot(t[e])?n:t[e]:r},wi=t=>typeof t=="boolean",$y=t=>/^\w*$/.test(t),px=t=>zu(t.replace(/["|']|\]/g,"").split(/\.|\[/)),Be=(t,e,n)=>{let r=-1;const i=$y(e)?[e]:px(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const c=t[a];l=Et(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}if(a==="__proto__")return;t[a]=l,t=t[a]}return t};const qE={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},Gn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Dr={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Me.createContext(null);var tL=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==Gn.all&&(e._proxyFormState[o]=!r||Gn.all),n&&(n[o]=!0),t[o]}});return i},En=t=>Et(t)&&!Object.keys(t).length,nL=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return En(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||Gn.all))},lm=t=>Array.isArray(t)?t:[t];function rL(t){const e=Me.useRef(t);e.current=t,Me.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var hr=t=>typeof t=="string",iL=(t,e,n,r,i)=>hr(t)?(r&&e.watch.add(t),Y(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),Y(n,s))):(r&&(e.watchAll=!0),n),mx=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},GE=t=>({isOnSubmit:!t||t===Gn.onSubmit,isOnBlur:t===Gn.onBlur,isOnChange:t===Gn.onChange,isOnAll:t===Gn.all,isOnTouch:t===Gn.onTouched}),KE=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const Ul=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=Y(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;Ul(a,e)}else Et(a)&&Ul(a,e)}}};var sL=(t,e,n)=>{const r=zu(Y(t,n));return Be(r,"root",e[n]),Be(t,n,r),t},zy=t=>t.type==="file",Ri=t=>typeof t=="function",pd=t=>{if(!jy)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Eh=t=>hr(t),By=t=>t.type==="radio",md=t=>t instanceof RegExp;const QE={value:!1,isValid:!1},YE={value:!0,isValid:!0};var gx=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!ot(t[0].attributes.value)?ot(t[0].value)||t[0].value===""?YE:{value:t[0].value,isValid:!0}:YE:QE}return QE};const XE={isValid:!1,value:null};var _x=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,XE):XE;function JE(t,e,n="validate"){if(Eh(t)||Array.isArray(t)&&t.every(Eh)||wi(t)&&!t)return{type:n,message:Eh(t)?t:"",ref:e}}var ho=t=>Et(t)&&!md(t)?t:{value:t,message:""},ZE=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:c,min:h,max:d,pattern:p,validate:_,name:v,valueAsNumber:I,mount:k,disabled:w}=t._f,g=Y(e,v);if(!k||w)return{};const S=o?o[0]:s,O=b=>{r&&S.reportValidity&&(S.setCustomValidity(wi(b)?"":b||""),S.reportValidity())},L={},V=By(s),E=$u(s),T=V||E,C=(I||zy(s))&&ot(s.value)&&ot(g)||pd(s)&&s.value===""||g===""||Array.isArray(g)&&!g.length,A=mx.bind(null,v,n,L),P=(b,x,de,Le=Dr.maxLength,it=Dr.minLength)=>{const Ie=b?x:de;L[v]={type:b?Le:it,message:Ie,ref:s,...A(b?Le:it,Ie)}};if(i?!Array.isArray(g)||!g.length:a&&(!T&&(C||nn(g))||wi(g)&&!g||E&&!gx(o).isValid||V&&!_x(o).isValid)){const{value:b,message:x}=Eh(a)?{value:!!a,message:a}:ho(a);if(b&&(L[v]={type:Dr.required,message:x,ref:S,...A(Dr.required,x)},!n))return O(x),L}if(!C&&(!nn(h)||!nn(d))){let b,x;const de=ho(d),Le=ho(h);if(!nn(g)&&!isNaN(g)){const it=s.valueAsNumber||g&&+g;nn(de.value)||(b=it>de.value),nn(Le.value)||(x=it<Le.value)}else{const it=s.valueAsDate||new Date(g),Ie=te=>new Date(new Date().toDateString()+" "+te),q=s.type=="time",ee=s.type=="week";hr(de.value)&&g&&(b=q?Ie(g)>Ie(de.value):ee?g>de.value:it>new Date(de.value)),hr(Le.value)&&g&&(x=q?Ie(g)<Ie(Le.value):ee?g<Le.value:it<new Date(Le.value))}if((b||x)&&(P(!!b,de.message,Le.message,Dr.max,Dr.min),!n))return O(L[v].message),L}if((l||c)&&!C&&(hr(g)||i&&Array.isArray(g))){const b=ho(l),x=ho(c),de=!nn(b.value)&&g.length>+b.value,Le=!nn(x.value)&&g.length<+x.value;if((de||Le)&&(P(de,b.message,x.message),!n))return O(L[v].message),L}if(p&&!C&&hr(g)){const{value:b,message:x}=ho(p);if(md(b)&&!g.match(b)&&(L[v]={type:Dr.pattern,message:x,ref:s,...A(Dr.pattern,x)},!n))return O(x),L}if(_){if(Ri(_)){const b=await _(g,e),x=JE(b,S);if(x&&(L[v]={...x,...A(Dr.validate,x.message)},!n))return O(x.message),L}else if(Et(_)){let b={};for(const x in _){if(!En(b)&&!n)break;const de=JE(await _[x](g,e),S,x);de&&(b={...de,...A(x,de.message)},O(de.message),n&&(L[v]=b))}if(!En(b)&&(L[v]={ref:S,...b},!n))return L}}return O(!0),L};function oL(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=ot(t)?r++:t[e[r++]];return t}function aL(t){for(const e in t)if(t.hasOwnProperty(e)&&!ot(t[e]))return!1;return!0}function mt(t,e){const n=Array.isArray(e)?e:$y(e)?[e]:px(e),r=n.length===1?t:oL(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Et(r)&&En(r)||Array.isArray(r)&&aL(r))&&mt(t,n.slice(0,-1)),t}var um=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},gd=t=>nn(t)||!fx(t);function ys(t,e){if(gd(t)||gd(e))return t===e;if(bo(t)&&bo(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(bo(s)&&bo(o)||Et(s)&&Et(o)||Array.isArray(s)&&Array.isArray(o)?!ys(s,o):s!==o)return!1}}return!0}var yx=t=>t.type==="select-multiple",lL=t=>By(t)||$u(t),cm=t=>pd(t)&&t.isConnected,vx=t=>{for(const e in t)if(Ri(t[e]))return!0;return!1};function _d(t,e={}){const n=Array.isArray(t);if(Et(t)||n)for(const r in t)Array.isArray(t[r])||Et(t[r])&&!vx(t[r])?(e[r]=Array.isArray(t[r])?[]:{},_d(t[r],e[r])):nn(t[r])||(e[r]=!0);return e}function wx(t,e,n){const r=Array.isArray(t);if(Et(t)||r)for(const i in t)Array.isArray(t[i])||Et(t[i])&&!vx(t[i])?ot(e)||gd(n[i])?n[i]=Array.isArray(t[i])?_d(t[i],[]):{..._d(t[i])}:wx(t[i],nn(e)?{}:e[i],n[i]):n[i]=!ys(t[i],e[i]);return n}var Hc=(t,e)=>wx(t,e,_d(e)),Ex=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>ot(t)?t:e?t===""?NaN:t&&+t:n&&hr(t)?new Date(t):r?r(t):t;function hm(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return zy(e)?e.files:By(e)?_x(t.refs).value:yx(e)?[...e.selectedOptions].map(({value:n})=>n):$u(e)?gx(t.refs).value:Ex(ot(e.value)?t.ref.value:e.value,t)}var uL=(t,e,n,r)=>{const i={};for(const s of t){const o=Y(e,s);o&&Be(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},ul=t=>ot(t)?t:md(t)?t.source:Et(t)?md(t.value)?t.value.source:t.value:t,cL=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function eT(t,e,n){const r=Y(t,n);if(r||$y(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=Y(e,s),a=Y(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var hL=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,dL=(t,e)=>!zu(Y(t,e)).length&&mt(t,e);const fL={mode:Gn.onSubmit,reValidateMode:Gn.onChange,shouldFocusError:!0};function pL(t={}){let e={...fL,...t},n={submitCount:0,isDirty:!1,isLoading:Ri(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},i=Et(e.defaultValues)||Et(e.values)?Nn(e.defaultValues||e.values)||{}:{},s=e.shouldUnregister?{}:Nn(i),o={action:!1,mount:!1,watch:!1},a={mount:new Set,unMount:new Set,array:new Set,watch:new Set},l,c=0;const h={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:um(),array:um(),state:um()},p=GE(e.mode),_=GE(e.reValidateMode),v=e.criteriaMode===Gn.all,I=N=>M=>{clearTimeout(c),c=setTimeout(N,M)},k=async N=>{if(h.isValid||N){const M=e.resolver?En((await T()).errors):await A(r,!0);M!==n.isValid&&d.state.next({isValid:M})}},w=(N,M)=>{(h.isValidating||h.validatingFields)&&((N||Array.from(a.mount)).forEach(U=>{U&&(M?Be(n.validatingFields,U,M):mt(n.validatingFields,U))}),d.state.next({validatingFields:n.validatingFields,isValidating:!En(n.validatingFields)}))},g=(N,M=[],U,Q,K=!0,W=!0)=>{if(Q&&U){if(o.action=!0,W&&Array.isArray(Y(r,N))){const Z=U(Y(r,N),Q.argA,Q.argB);K&&Be(r,N,Z)}if(W&&Array.isArray(Y(n.errors,N))){const Z=U(Y(n.errors,N),Q.argA,Q.argB);K&&Be(n.errors,N,Z),dL(n.errors,N)}if(h.touchedFields&&W&&Array.isArray(Y(n.touchedFields,N))){const Z=U(Y(n.touchedFields,N),Q.argA,Q.argB);K&&Be(n.touchedFields,N,Z)}h.dirtyFields&&(n.dirtyFields=Hc(i,s)),d.state.next({name:N,isDirty:b(N,M),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else Be(s,N,M)},S=(N,M)=>{Be(n.errors,N,M),d.state.next({errors:n.errors})},O=N=>{n.errors=N,d.state.next({errors:n.errors,isValid:!1})},L=(N,M,U,Q)=>{const K=Y(r,N);if(K){const W=Y(s,N,ot(U)?Y(i,N):U);ot(W)||Q&&Q.defaultChecked||M?Be(s,N,M?W:hm(K._f)):Le(N,W),o.mount&&k()}},V=(N,M,U,Q,K)=>{let W=!1,Z=!1;const ve={name:N},qe=!!(Y(r,N)&&Y(r,N)._f&&Y(r,N)._f.disabled);if(!U||Q){h.isDirty&&(Z=n.isDirty,n.isDirty=ve.isDirty=b(),W=Z!==ve.isDirty);const Re=qe||ys(Y(i,N),M);Z=!!(!qe&&Y(n.dirtyFields,N)),Re||qe?mt(n.dirtyFields,N):Be(n.dirtyFields,N,!0),ve.dirtyFields=n.dirtyFields,W=W||h.dirtyFields&&Z!==!Re}if(U){const Re=Y(n.touchedFields,N);Re||(Be(n.touchedFields,N,U),ve.touchedFields=n.touchedFields,W=W||h.touchedFields&&Re!==U)}return W&&K&&d.state.next(ve),W?ve:{}},E=(N,M,U,Q)=>{const K=Y(n.errors,N),W=h.isValid&&wi(M)&&n.isValid!==M;if(t.delayError&&U?(l=I(()=>S(N,U)),l(t.delayError)):(clearTimeout(c),l=null,U?Be(n.errors,N,U):mt(n.errors,N)),(U?!ys(K,U):K)||!En(Q)||W){const Z={...Q,...W&&wi(M)?{isValid:M}:{},errors:n.errors,name:N};n={...n,...Z},d.state.next(Z)}},T=async N=>{w(N,!0);const M=await e.resolver(s,e.context,uL(N||a.mount,r,e.criteriaMode,e.shouldUseNativeValidation));return w(N),M},C=async N=>{const{errors:M}=await T(N);if(N)for(const U of N){const Q=Y(M,U);Q?Be(n.errors,U,Q):mt(n.errors,U)}else n.errors=M;return M},A=async(N,M,U={valid:!0})=>{for(const Q in N){const K=N[Q];if(K){const{_f:W,...Z}=K;if(W){const ve=a.array.has(W.name);w([Q],!0);const qe=await ZE(K,s,v,e.shouldUseNativeValidation&&!M,ve);if(w([Q]),qe[W.name]&&(U.valid=!1,M))break;!M&&(Y(qe,W.name)?ve?sL(n.errors,qe,W.name):Be(n.errors,W.name,qe[W.name]):mt(n.errors,W.name))}Z&&await A(Z,M,U)}}return U.valid},P=()=>{for(const N of a.unMount){const M=Y(r,N);M&&(M._f.refs?M._f.refs.every(U=>!cm(U)):!cm(M._f.ref))&&pt(N)}a.unMount=new Set},b=(N,M)=>(N&&M&&Be(s,N,M),!ys(Pe(),i)),x=(N,M,U)=>iL(N,a,{...o.mount?s:ot(M)?i:hr(N)?{[N]:M}:M},U,M),de=N=>zu(Y(o.mount?s:i,N,t.shouldUnregister?Y(i,N,[]):[])),Le=(N,M,U={})=>{const Q=Y(r,N);let K=M;if(Q){const W=Q._f;W&&(!W.disabled&&Be(s,N,Ex(M,W)),K=pd(W.ref)&&nn(M)?"":M,yx(W.ref)?[...W.ref.options].forEach(Z=>Z.selected=K.includes(Z.value)):W.refs?$u(W.ref)?W.refs.length>1?W.refs.forEach(Z=>(!Z.defaultChecked||!Z.disabled)&&(Z.checked=Array.isArray(K)?!!K.find(ve=>ve===Z.value):K===Z.value)):W.refs[0]&&(W.refs[0].checked=!!K):W.refs.forEach(Z=>Z.checked=Z.value===K):zy(W.ref)?W.ref.value="":(W.ref.value=K,W.ref.type||d.values.next({name:N,values:{...s}})))}(U.shouldDirty||U.shouldTouch)&&V(N,K,U.shouldTouch,U.shouldDirty,!0),U.shouldValidate&&te(N)},it=(N,M,U)=>{for(const Q in M){const K=M[Q],W=`${N}.${Q}`,Z=Y(r,W);(a.array.has(N)||!gd(K)||Z&&!Z._f)&&!bo(K)?it(W,K,U):Le(W,K,U)}},Ie=(N,M,U={})=>{const Q=Y(r,N),K=a.array.has(N),W=Nn(M);Be(s,N,W),K?(d.array.next({name:N,values:{...s}}),(h.isDirty||h.dirtyFields)&&U.shouldDirty&&d.state.next({name:N,dirtyFields:Hc(i,s),isDirty:b(N,W)})):Q&&!Q._f&&!nn(W)?it(N,W,U):Le(N,W,U),KE(N,a)&&d.state.next({...n}),d.values.next({name:o.mount?N:void 0,values:{...s}})},q=async N=>{o.mount=!0;const M=N.target;let U=M.name,Q=!0;const K=Y(r,U),W=()=>M.type?hm(K._f):XD(N),Z=ve=>{Q=Number.isNaN(ve)||ve===Y(s,U,ve)};if(K){let ve,qe;const Re=W(),Ze=N.type===qE.BLUR||N.type===qE.FOCUS_OUT,no=!cL(K._f)&&!e.resolver&&!Y(n.errors,U)&&!K._f.deps||hL(Ze,Y(n.touchedFields,U),n.isSubmitted,_,p),ro=KE(U,a,Ze);Be(s,U,Re),Ze?(K._f.onBlur&&K._f.onBlur(N),l&&l(0)):K._f.onChange&&K._f.onChange(N);const io=V(U,Re,Ze,!1),fp=!En(io)||ro;if(!Ze&&d.values.next({name:U,type:N.type,values:{...s}}),no)return h.isValid&&k(),fp&&d.state.next({name:U,...ro?{}:io});if(!Ze&&ro&&d.state.next({...n}),e.resolver){const{errors:li}=await T([U]);if(Z(Re),Q){const hc=eT(n.errors,r,U),$a=eT(li,r,hc.name||U);ve=$a.error,U=$a.name,qe=En(li)}}else w([U],!0),ve=(await ZE(K,s,v,e.shouldUseNativeValidation))[U],w([U]),Z(Re),Q&&(ve?qe=!1:h.isValid&&(qe=await A(r,!0)));Q&&(K._f.deps&&te(K._f.deps),E(U,qe,ve,io))}},ee=(N,M)=>{if(Y(n.errors,M)&&N.focus)return N.focus(),1},te=async(N,M={})=>{let U,Q;const K=lm(N);if(e.resolver){const W=await C(ot(N)?N:K);U=En(W),Q=N?!K.some(Z=>Y(W,Z)):U}else N?(Q=(await Promise.all(K.map(async W=>{const Z=Y(r,W);return await A(Z&&Z._f?{[W]:Z}:Z)}))).every(Boolean),!(!Q&&!n.isValid)&&k()):Q=U=await A(r);return d.state.next({...!hr(N)||h.isValid&&U!==n.isValid?{}:{name:N},...e.resolver||!N?{isValid:U}:{},errors:n.errors}),M.shouldFocus&&!Q&&Ul(r,ee,N?K:a.mount),Q},Pe=N=>{const M={...o.mount?s:i};return ot(N)?M:hr(N)?Y(M,N):N.map(U=>Y(M,U))},ye=(N,M)=>({invalid:!!Y((M||n).errors,N),isDirty:!!Y((M||n).dirtyFields,N),error:Y((M||n).errors,N),isValidating:!!Y(n.validatingFields,N),isTouched:!!Y((M||n).touchedFields,N)}),Ne=N=>{N&&lm(N).forEach(M=>mt(n.errors,M)),d.state.next({errors:N?n.errors:{}})},Tt=(N,M,U)=>{const Q=(Y(r,N,{_f:{}})._f||{}).ref,K=Y(n.errors,N)||{},{ref:W,message:Z,type:ve,...qe}=K;Be(n.errors,N,{...qe,...M,ref:Q}),d.state.next({name:N,errors:n.errors,isValid:!1}),U&&U.shouldFocus&&Q&&Q.focus&&Q.focus()},Ut=(N,M)=>Ri(N)?d.values.subscribe({next:U=>N(x(void 0,M),U)}):x(N,M,!0),pt=(N,M={})=>{for(const U of N?lm(N):a.mount)a.mount.delete(U),a.array.delete(U),M.keepValue||(mt(r,U),mt(s,U)),!M.keepError&&mt(n.errors,U),!M.keepDirty&&mt(n.dirtyFields,U),!M.keepTouched&&mt(n.touchedFields,U),!M.keepIsValidating&&mt(n.validatingFields,U),!e.shouldUnregister&&!M.keepDefaultValue&&mt(i,U);d.values.next({values:{...s}}),d.state.next({...n,...M.keepDirty?{isDirty:b()}:{}}),!M.keepIsValid&&k()},st=({disabled:N,name:M,field:U,fields:Q,value:K})=>{if(wi(N)&&o.mount||N){const W=N?void 0:ot(K)?hm(U?U._f:Y(Q,M)._f):K;Be(s,M,W),V(M,W,!1,!1,!0)}},Pr=(N,M={})=>{let U=Y(r,N);const Q=wi(M.disabled);return Be(r,N,{...U||{},_f:{...U&&U._f?U._f:{ref:{name:N}},name:N,mount:!0,...M}}),a.mount.add(N),U?st({field:U,disabled:M.disabled,name:N,value:M.value}):L(N,!0,M.value),{...Q?{disabled:M.disabled}:{},...e.progressive?{required:!!M.required,min:ul(M.min),max:ul(M.max),minLength:ul(M.minLength),maxLength:ul(M.maxLength),pattern:ul(M.pattern)}:{},name:N,onChange:q,onBlur:q,ref:K=>{if(K){Pr(N,M),U=Y(r,N);const W=ot(K.value)&&K.querySelectorAll&&K.querySelectorAll("input,select,textarea")[0]||K,Z=lL(W),ve=U._f.refs||[];if(Z?ve.find(qe=>qe===W):W===U._f.ref)return;Be(r,N,{_f:{...U._f,...Z?{refs:[...ve.filter(cm),W,...Array.isArray(Y(i,N))?[{}]:[]],ref:{type:W.type,name:N}}:{ref:W}}}),L(N,!1,void 0,W)}else U=Y(r,N,{}),U._f&&(U._f.mount=!1),(e.shouldUnregister||M.shouldUnregister)&&!(ZD(a.array,N)&&o.action)&&a.unMount.add(N)}}},br=()=>e.shouldFocusError&&Ul(r,ee,a.mount),Zt=N=>{wi(N)&&(d.state.next({disabled:N}),Ul(r,(M,U)=>{const Q=Y(r,U);Q&&(M.disabled=Q._f.disabled||N,Array.isArray(Q._f.refs)&&Q._f.refs.forEach(K=>{K.disabled=Q._f.disabled||N}))},0,!1))},ss=(N,M)=>async U=>{let Q;U&&(U.preventDefault&&U.preventDefault(),U.persist&&U.persist());let K=Nn(s);if(d.state.next({isSubmitting:!0}),e.resolver){const{errors:W,values:Z}=await T();n.errors=W,K=Z}else await A(r);if(mt(n.errors,"root"),En(n.errors)){d.state.next({errors:{}});try{await N(K,U)}catch(W){Q=W}}else M&&await M({...n.errors},U),br(),setTimeout(br);if(d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:En(n.errors)&&!Q,submitCount:n.submitCount+1,errors:n.errors}),Q)throw Q},ja=(N,M={})=>{Y(r,N)&&(ot(M.defaultValue)?Ie(N,Nn(Y(i,N))):(Ie(N,M.defaultValue),Be(i,N,Nn(M.defaultValue))),M.keepTouched||mt(n.touchedFields,N),M.keepDirty||(mt(n.dirtyFields,N),n.isDirty=M.defaultValue?b(N,Nn(Y(i,N))):b()),M.keepError||(mt(n.errors,N),h.isValid&&k()),d.state.next({...n}))},eo=(N,M={})=>{const U=N?Nn(N):i,Q=Nn(U),K=En(N),W=K?i:Q;if(M.keepDefaultValues||(i=U),!M.keepValues){if(M.keepDirtyValues)for(const Z of a.mount)Y(n.dirtyFields,Z)?Be(W,Z,Y(s,Z)):Ie(Z,Y(W,Z));else{if(jy&&ot(N))for(const Z of a.mount){const ve=Y(r,Z);if(ve&&ve._f){const qe=Array.isArray(ve._f.refs)?ve._f.refs[0]:ve._f.ref;if(pd(qe)){const Re=qe.closest("form");if(Re){Re.reset();break}}}}r={}}s=t.shouldUnregister?M.keepDefaultValues?Nn(i):{}:Nn(W),d.array.next({values:{...W}}),d.values.next({values:{...W}})}a={mount:M.keepDirtyValues?a.mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!h.isValid||!!M.keepIsValid||!!M.keepDirtyValues,o.watch=!!t.shouldUnregister,d.state.next({submitCount:M.keepSubmitCount?n.submitCount:0,isDirty:K?!1:M.keepDirty?n.isDirty:!!(M.keepDefaultValues&&!ys(N,i)),isSubmitted:M.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:K?[]:M.keepDirtyValues?M.keepDefaultValues&&s?Hc(i,s):n.dirtyFields:M.keepDefaultValues&&N?Hc(i,N):M.keepDirty?n.dirtyFields:{},touchedFields:M.keepTouched?n.touchedFields:{},errors:M.keepErrors?n.errors:{},isSubmitSuccessful:M.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1})},to=(N,M)=>eo(Ri(N)?N(s):N,M);return{control:{register:Pr,unregister:pt,getFieldState:ye,handleSubmit:ss,setError:Tt,_executeSchema:T,_getWatch:x,_getDirty:b,_updateValid:k,_removeUnmounted:P,_updateFieldArray:g,_updateDisabledField:st,_getFieldArray:de,_reset:eo,_resetDefaultValues:()=>Ri(e.defaultValues)&&e.defaultValues().then(N=>{to(N,e.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:N=>{n={...n,...N}},_disableForm:Zt,_subjects:d,_proxyFormState:h,_setErrors:O,get _fields(){return r},get _formValues(){return s},get _state(){return o},set _state(N){o=N},get _defaultValues(){return i},get _names(){return a},set _names(N){a=N},get _formState(){return n},set _formState(N){n=N},get _options(){return e},set _options(N){e={...e,...N}}},trigger:te,register:Pr,handleSubmit:ss,watch:Ut,setValue:Ie,getValues:Pe,reset:to,resetField:ja,clearErrors:Ne,unregister:pt,setError:Tt,setFocus:(N,M={})=>{const U=Y(r,N),Q=U&&U._f;if(Q){const K=Q.refs?Q.refs[0]:Q.ref;K.focus&&(K.focus(),M.shouldSelect&&K.select())}},getFieldState:ye}}function Wy(t={}){const e=Me.useRef(),n=Me.useRef(),[r,i]=Me.useState({isDirty:!1,isValidating:!1,isLoading:Ri(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,defaultValues:Ri(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...pL(t),formState:r});const s=e.current.control;return s._options=t,rL({subject:s._subjects.state,next:o=>{nL(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),Me.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),Me.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),Me.useEffect(()=>{t.values&&!ys(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),Me.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),Me.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),Me.useEffect(()=>{t.shouldUnregister&&s._subjects.values.next({values:s._getWatch()})},[t.shouldUnregister,s]),e.current.formState=tL(r,s),e.current}var tT=function(t,e,n){if(t&&"reportValidity"in t){var r=Y(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},Tx=function(t,e){var n=function(i){var s=e.fields[i];s&&s.ref&&"reportValidity"in s.ref?tT(s.ref,i,t):s.refs&&s.refs.forEach(function(o){return tT(o,i,t)})};for(var r in e.fields)n(r)},mL=function(t){return t instanceof Date},gL=function(t){return t==null},_L=function(t){return typeof t=="object"},yL=function(t){return!gL(t)&&!Array.isArray(t)&&_L(t)&&!mL(t)},vL=function(t){return/^\w*$/.test(t)},dm=function(t,e,n){for(var r=-1,i=vL(e)?[e]:function(h){return d=h.replace(/["|']|\]/g,"").split(/\.|\[/),Array.isArray(d)?d.filter(Boolean):[];var d}(e),s=i.length,o=s-1;++r<s;){var a=i[r],l=n;if(r!==o){var c=t[a];l=yL(c)||Array.isArray(c)?c:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t},wL=function(t,e){e.shouldUseNativeValidation&&Tx(t,e);var n={};for(var r in t){var i=Y(e.fields,r),s=Object.assign(t[r]||{},{ref:i&&i.ref});if(EL(e.names||Object.keys(t),r)){var o=Object.assign({},Y(n,r));dm(o,"root",s),dm(n,r,o)}else dm(n,r,s)}return n},EL=function(t,e){return t.some(function(n){return n.startsWith(e+".")})};function Hy(t,e,n){return e===void 0&&(e={}),n===void 0&&(n={}),function(r,i,s){try{return Promise.resolve(function(o,a){try{var l=(e.context,Promise.resolve(t[n.mode==="sync"?"validateSync":"validate"](r,Object.assign({abortEarly:!1},e,{context:i}))).then(function(c){return s.shouldUseNativeValidation&&Tx({},s),{values:n.raw?r:c,errors:{}}}))}catch(c){return a(c)}return l&&l.then?l.then(void 0,a):l}(0,function(o){if(!o.inner)throw o;return{values:{},errors:wL((a=o,l=!s.shouldUseNativeValidation&&s.criteriaMode==="all",(a.inner||[]).reduce(function(c,h){if(c[h.path]||(c[h.path]={message:h.message,type:h.type}),l){var d=c[h.path].types,p=d&&d[h.type];c[h.path]=mx(h.path,l,c,h.type,p?[].concat(p,h.message):h.message)}return c},{})),s)};var a,l}))}catch(o){return Promise.reject(o)}}}function Gs(t){this._maxSize=t,this.clear()}Gs.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Gs.prototype.get=function(t){return this._values[t]};Gs.prototype.set=function(t,e){return this._size>=this._maxSize&&this.clear(),t in this._values||this._size++,this._values[t]=e};var TL=/[^.^\]^[]+|(?=\[\]|\.\.)/g,Ix=/^\d+$/,IL=/^\d/,SL=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,CL=/^\s*(['"]?)(.*?)(\1)\s*$/,qy=512,nT=new Gs(qy),rT=new Gs(qy),iT=new Gs(qy),xs={Cache:Gs,split:zg,normalizePath:fm,setter:function(t){var e=fm(t);return rT.get(t)||rT.set(t,function(r,i){for(var s=0,o=e.length,a=r;s<o-1;){var l=e[s];if(l==="__proto__"||l==="constructor"||l==="prototype")return r;a=a[e[s++]]}a[e[s]]=i})},getter:function(t,e){var n=fm(t);return iT.get(t)||iT.set(t,function(i){for(var s=0,o=n.length;s<o;)if(i!=null||!e)i=i[n[s++]];else return;return i})},join:function(t){return t.reduce(function(e,n){return e+(Gy(n)||Ix.test(n)?"["+n+"]":(e?".":"")+n)},"")},forEach:function(t,e,n){xL(Array.isArray(t)?t:zg(t),e,n)}};function fm(t){return nT.get(t)||nT.set(t,zg(t).map(function(e){return e.replace(CL,"$2")}))}function zg(t){return t.match(TL)||[""]}function xL(t,e,n){var r=t.length,i,s,o,a;for(s=0;s<r;s++)i=t[s],i&&(kL(i)&&(i='"'+i+'"'),a=Gy(i),o=!a&&/^\d+$/.test(i),e.call(n,i,a,o,s,t))}function Gy(t){return typeof t=="string"&&t&&["'",'"'].indexOf(t.charAt(0))!==-1}function AL(t){return t.match(IL)&&!t.match(Ix)}function RL(t){return SL.test(t)}function kL(t){return!Gy(t)&&(AL(t)||RL(t))}const PL=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Af=t=>t.match(PL)||[],Rf=t=>t[0].toUpperCase()+t.slice(1),Ky=(t,e)=>Af(t).join(e).toLowerCase(),Sx=t=>Af(t).reduce((e,n)=>`${e}${e?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),bL=t=>Rf(Sx(t)),NL=t=>Ky(t,"_"),OL=t=>Ky(t,"-"),DL=t=>Rf(Ky(t," ")),LL=t=>Af(t).map(Rf).join(" ");var pm={words:Af,upperFirst:Rf,camelCase:Sx,pascalCase:bL,snakeCase:NL,kebabCase:OL,sentenceCase:DL,titleCase:LL},Qy={exports:{}};Qy.exports=function(t){return Cx(ML(t),t)};Qy.exports.array=Cx;function Cx(t,e){var n=t.length,r=new Array(n),i={},s=n,o=FL(e),a=VL(t);for(e.forEach(function(c){if(!a.has(c[0])||!a.has(c[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});s--;)i[s]||l(t[s],s,new Set);return r;function l(c,h,d){if(d.has(c)){var p;try{p=", node was:"+JSON.stringify(c)}catch{p=""}throw new Error("Cyclic dependency"+p)}if(!a.has(c))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(c));if(!i[h]){i[h]=!0;var _=o.get(c)||new Set;if(_=Array.from(_),h=_.length){d.add(c);do{var v=_[--h];l(v,a.get(v),d)}while(h);d.delete(c)}r[--n]=c}}}function ML(t){for(var e=new Set,n=0,r=t.length;n<r;n++){var i=t[n];e.add(i[0]),e.add(i[1])}return Array.from(e)}function FL(t){for(var e=new Map,n=0,r=t.length;n<r;n++){var i=t[n];e.has(i[0])||e.set(i[0],new Set),e.has(i[1])||e.set(i[1],new Set),e.get(i[0]).add(i[1])}return e}function VL(t){for(var e=new Map,n=0,r=t.length;n<r;n++)e.set(t[n],n);return e}var UL=Qy.exports;const jL=wI(UL),$L=Object.prototype.toString,zL=Error.prototype.toString,BL=RegExp.prototype.toString,WL=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",HL=/^Symbol\((.*)\)(.*)$/;function qL(t){return t!=+t?"NaN":t===0&&1/t<0?"-0":""+t}function sT(t,e=!1){if(t==null||t===!0||t===!1)return""+t;const n=typeof t;if(n==="number")return qL(t);if(n==="string")return e?`"${t}"`:t;if(n==="function")return"[Function "+(t.name||"anonymous")+"]";if(n==="symbol")return WL.call(t).replace(HL,"Symbol($1)");const r=$L.call(t).slice(8,-1);return r==="Date"?isNaN(t.getTime())?""+t:t.toISOString(t):r==="Error"||t instanceof Error?"["+zL.call(t)+"]":r==="RegExp"?BL.call(t):null}function Ui(t,e){let n=sT(t,e);return n!==null?n:JSON.stringify(t,function(r,i){let s=sT(this[r],e);return s!==null?s:i},2)}function xx(t){return t==null?[]:[].concat(t)}let Ax,Rx,kx,GL=/\$\{\s*(\w+)\s*\}/g;Ax=Symbol.toStringTag;class oT{constructor(e,n,r,i){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[Ax]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=i,this.errors=[],this.inner=[],xx(e).forEach(s=>{if(un.isError(s)){this.errors.push(...s.errors);const o=s.inner.length?s.inner:[s];this.inner.push(...o)}else this.errors.push(s)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Rx=Symbol.hasInstance;kx=Symbol.toStringTag;class un extends Error{static formatError(e,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof e=="string"?e.replace(GL,(i,s)=>Ui(n[s])):typeof e=="function"?e(n):e}static isError(e){return e&&e.name==="ValidationError"}constructor(e,n,r,i,s){const o=new oT(e,n,r,i);if(s)return o;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[kx]="Error",this.name=o.name,this.message=o.message,this.type=o.type,this.value=o.value,this.path=o.path,this.errors=o.errors,this.inner=o.inner,Error.captureStackTrace&&Error.captureStackTrace(this,un)}static[Rx](e){return oT[Symbol.hasInstance](e)||super[Symbol.hasInstance](e)}}let or={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:t,type:e,value:n,originalValue:r})=>{const i=r!=null&&r!==n?` (cast from the value \`${Ui(r,!0)}\`).`:".";return e!=="mixed"?`${t} must be a \`${e}\` type, but the final value was: \`${Ui(n,!0)}\``+i:`${t} must match the configured type. The validated value was: \`${Ui(n,!0)}\``+i}},an={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},KL={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Bg={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},QL={isValue:"${path} field must be ${value}"},Wg={noUnknown:"${path} field has unspecified keys: ${unknown}"},YL={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},XL={notType:t=>{const{path:e,value:n,spec:r}=t,i=r.types.length;if(Array.isArray(n)){if(n.length<i)return`${e} tuple value has too few items, expected a length of ${i} but got ${n.length} for value: \`${Ui(n,!0)}\``;if(n.length>i)return`${e} tuple value has too many items, expected a length of ${i} but got ${n.length} for value: \`${Ui(n,!0)}\``}return un.formatError(or.notType,t)}};Object.assign(Object.create(null),{mixed:or,string:an,number:KL,date:Bg,object:Wg,array:YL,boolean:QL,tuple:XL});const Yy=t=>t&&t.__isYupSchema__;class yd{static fromOptions(e,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:i,otherwise:s}=n,o=typeof r=="function"?r:(...a)=>a.every(l=>l===r);return new yd(e,(a,l)=>{var c;let h=o(...a)?i:s;return(c=h==null?void 0:h(l))!=null?c:l})}constructor(e,n){this.fn=void 0,this.refs=e,this.refs=e,this.fn=n}resolve(e,n){let r=this.refs.map(s=>s.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),i=this.fn(r,e,n);if(i===void 0||i===e)return e;if(!Yy(i))throw new TypeError("conditions must return a schema object");return i.resolve(n)}}const qc={context:"$",value:"."};let Ks=class{constructor(e,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof e!="string")throw new TypeError("ref must be a string, got: "+e);if(this.key=e.trim(),e==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===qc.context,this.isValue=this.key[0]===qc.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?qc.context:this.isValue?qc.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&xs.getter(this.path,!0),this.map=n.map}getValue(e,n,r){let i=this.isContext?r:this.isValue?e:n;return this.getter&&(i=this.getter(i||{})),this.map&&(i=this.map(i)),i}cast(e,n){return this.getValue(e,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(e){return e&&e.__isYupRef}};Ks.prototype.__isYupRef=!0;const vs=t=>t==null;function fo(t){function e({value:n,path:r="",options:i,originalValue:s,schema:o},a,l){const{name:c,test:h,params:d,message:p,skipAbsent:_}=t;let{parent:v,context:I,abortEarly:k=o.spec.abortEarly,disableStackTrace:w=o.spec.disableStackTrace}=i;function g(P){return Ks.isRef(P)?P.getValue(n,v,I):P}function S(P={}){const b=Object.assign({value:n,originalValue:s,label:o.spec.label,path:P.path||r,spec:o.spec,disableStackTrace:P.disableStackTrace||w},d,P.params);for(const de of Object.keys(b))b[de]=g(b[de]);const x=new un(un.formatError(P.message||p,b),n,b.path,P.type||c,b.disableStackTrace);return x.params=b,x}const O=k?a:l;let L={path:r,parent:v,type:c,from:i.from,createError:S,resolve:g,options:i,originalValue:s,schema:o};const V=P=>{un.isError(P)?O(P):P?l(null):O(S())},E=P=>{un.isError(P)?O(P):a(P)};if(_&&vs(n))return V(!0);let C;try{var A;if(C=h.call(L,n,L),typeof((A=C)==null?void 0:A.then)=="function"){if(i.sync)throw new Error(`Validation test of type: "${L.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(C).then(V,E)}}catch(P){E(P);return}V(C)}return e.OPTIONS=t,e}function JL(t,e,n,r=n){let i,s,o;return e?(xs.forEach(e,(a,l,c)=>{let h=l?a.slice(1,a.length-1):a;t=t.resolve({context:r,parent:i,value:n});let d=t.type==="tuple",p=c?parseInt(h,10):0;if(t.innerType||d){if(d&&!c)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`);if(n&&p>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${a}, in the path: ${e}. because there is no value at that index. `);i=n,n=n&&n[p],t=d?t.spec.types[p]:t.innerType}if(!c){if(!t.fields||!t.fields[h])throw new Error(`The schema does not contain the path: ${e}. (failed at: ${o} which is a type: "${t.type}")`);i=n,n=n&&n[h],t=t.fields[h]}s=h,o=l?"["+a+"]":"."+a}),{schema:t,parent:i,parentPath:s}):{parent:i,parentPath:e,schema:t}}class vd extends Set{describe(){const e=[];for(const n of this.values())e.push(Ks.isRef(n)?n.describe():n);return e}resolveAll(e){let n=[];for(const r of this.values())n.push(e(r));return n}clone(){return new vd(this.values())}merge(e,n){const r=this.clone();return e.forEach(i=>r.add(i)),n.forEach(i=>r.delete(i)),r}}function No(t,e=new Map){if(Yy(t)||!t||typeof t!="object")return t;if(e.has(t))return e.get(t);let n;if(t instanceof Date)n=new Date(t.getTime()),e.set(t,n);else if(t instanceof RegExp)n=new RegExp(t),e.set(t,n);else if(Array.isArray(t)){n=new Array(t.length),e.set(t,n);for(let r=0;r<t.length;r++)n[r]=No(t[r],e)}else if(t instanceof Map){n=new Map,e.set(t,n);for(const[r,i]of t.entries())n.set(r,No(i,e))}else if(t instanceof Set){n=new Set,e.set(t,n);for(const r of t)n.add(No(r,e))}else if(t instanceof Object){n={},e.set(t,n);for(const[r,i]of Object.entries(t))n[r]=No(i,e)}else throw Error(`Unable to clone ${t}`);return n}class Sr{constructor(e){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new vd,this._blacklist=new vd,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(or.notType)}),this.type=e.type,this._typeCheck=e.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},e==null?void 0:e.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(e){if(this._mutate)return e&&Object.assign(this.spec,e),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=No(Object.assign({},this.spec,e)),n}label(e){let n=this.clone();return n.spec.label=e,n}meta(...e){if(e.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},e[0]),n}withMutation(e){let n=this._mutate;this._mutate=!0;let r=e(this);return this._mutate=n,r}concat(e){if(!e||e===this)return this;if(e.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${e.type}`);let n=this,r=e.clone();const i=Object.assign({},n.spec,r.spec);return r.spec=i,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(e._whitelist,e._blacklist),r._blacklist=n._blacklist.merge(e._blacklist,e._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(s=>{e.tests.forEach(o=>{s.test(o.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(e){return e==null?!!(this.spec.nullable&&e===null||this.spec.optional&&e===void 0):this._typeCheck(e)}resolve(e){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((i,s)=>s.resolve(i,e),n),n=n.resolve(e)}return n}resolveOptions(e){var n,r,i,s;return Object.assign({},e,{from:e.from||[],strict:(n=e.strict)!=null?n:this.spec.strict,abortEarly:(r=e.abortEarly)!=null?r:this.spec.abortEarly,recursive:(i=e.recursive)!=null?i:this.spec.recursive,disableStackTrace:(s=e.disableStackTrace)!=null?s:this.spec.disableStackTrace})}cast(e,n={}){let r=this.resolve(Object.assign({value:e},n)),i=n.assert==="ignore-optionality",s=r._cast(e,n);if(n.assert!==!1&&!r.isType(s)){if(i&&vs(s))return s;let o=Ui(e),a=Ui(s);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${o} 
`+(a!==o?`result of cast: ${a}`:""))}return s}_cast(e,n){let r=e===void 0?e:this.transforms.reduce((i,s)=>s.call(this,i,e,this),e);return r===void 0&&(r=this.getDefault(n)),r}_validate(e,n={},r,i){let{path:s,originalValue:o=e,strict:a=this.spec.strict}=n,l=e;a||(l=this._cast(l,Object.assign({assert:!1},n)));let c=[];for(let h of Object.values(this.internalTests))h&&c.push(h);this.runTests({path:s,value:l,originalValue:o,options:n,tests:c},r,h=>{if(h.length)return i(h,l);this.runTests({path:s,value:l,originalValue:o,options:n,tests:this.tests},r,i)})}runTests(e,n,r){let i=!1,{tests:s,value:o,originalValue:a,path:l,options:c}=e,h=I=>{i||(i=!0,n(I,o))},d=I=>{i||(i=!0,r(I,o))},p=s.length,_=[];if(!p)return d([]);let v={value:o,originalValue:a,path:l,options:c,schema:this};for(let I=0;I<s.length;I++){const k=s[I];k(v,h,function(g){g&&(Array.isArray(g)?_.push(...g):_.push(g)),--p<=0&&d(_)})}}asNestedTest({key:e,index:n,parent:r,parentPath:i,originalParent:s,options:o}){const a=e??n;if(a==null)throw TypeError("Must include `key` or `index` for nested validations");const l=typeof a=="number";let c=r[a];const h=Object.assign({},o,{strict:!0,parent:r,value:c,originalValue:s[a],key:void 0,[l?"index":"key"]:a,path:l||a.includes(".")?`${i||""}[${l?a:`"${a}"`}]`:(i?`${i}.`:"")+e});return(d,p,_)=>this.resolve(h)._validate(c,h,p,_)}validate(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return new Promise((o,a)=>i._validate(e,n,(l,c)=>{un.isError(l)&&(l.value=c),a(l)},(l,c)=>{l.length?a(new un(l,c,void 0,void 0,s)):o(c)}))}validateSync(e,n){var r;let i=this.resolve(Object.assign({},n,{value:e})),s,o=(r=n==null?void 0:n.disableStackTrace)!=null?r:i.spec.disableStackTrace;return i._validate(e,Object.assign({},n,{sync:!0}),(a,l)=>{throw un.isError(a)&&(a.value=l),a},(a,l)=>{if(a.length)throw new un(a,e,void 0,void 0,o);s=l}),s}isValid(e,n){return this.validate(e,n).then(()=>!0,r=>{if(un.isError(r))return!1;throw r})}isValidSync(e,n){try{return this.validateSync(e,n),!0}catch(r){if(un.isError(r))return!1;throw r}}_getDefault(e){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,e):No(n)}getDefault(e){return this.resolve(e||{})._getDefault(e)}default(e){return arguments.length===0?this._getDefault():this.clone({default:e})}strict(e=!0){return this.clone({strict:e})}nullability(e,n){const r=this.clone({nullable:e});return r.internalTests.nullable=fo({message:n,name:"nullable",test(i){return i===null?this.schema.spec.nullable:!0}}),r}optionality(e,n){const r=this.clone({optional:e});return r.internalTests.optionality=fo({message:n,name:"optionality",test(i){return i===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(e=or.defined){return this.optionality(!1,e)}nullable(){return this.nullability(!0)}nonNullable(e=or.notNull){return this.nullability(!1,e)}required(e=or.required){return this.clone().withMutation(n=>n.nonNullable(e).defined(e))}notRequired(){return this.clone().withMutation(e=>e.nullable().optional())}transform(e){let n=this.clone();return n.transforms.push(e),n}test(...e){let n;if(e.length===1?typeof e[0]=="function"?n={test:e[0]}:n=e[0]:e.length===2?n={name:e[0],test:e[1]}:n={name:e[0],message:e[1],test:e[2]},n.message===void 0&&(n.message=or.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),i=fo(n),s=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(o=>!(o.OPTIONS.name===n.name&&(s||o.OPTIONS.test===i.OPTIONS.test))),r.tests.push(i),r}when(e,n){!Array.isArray(e)&&typeof e!="string"&&(n=e,e=".");let r=this.clone(),i=xx(e).map(s=>new Ks(s));return i.forEach(s=>{s.isSibling&&r.deps.push(s.key)}),r.conditions.push(typeof n=="function"?new yd(i,n):yd.fromOptions(i,n)),r}typeError(e){let n=this.clone();return n.internalTests.typeError=fo({message:e,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(e,n=or.oneOf){let r=this.clone();return e.forEach(i=>{r._whitelist.add(i),r._blacklist.delete(i)}),r.internalTests.whiteList=fo({message:n,name:"oneOf",skipAbsent:!0,test(i){let s=this.schema._whitelist,o=s.resolveAll(this.resolve);return o.includes(i)?!0:this.createError({params:{values:Array.from(s).join(", "),resolved:o}})}}),r}notOneOf(e,n=or.notOneOf){let r=this.clone();return e.forEach(i=>{r._blacklist.add(i),r._whitelist.delete(i)}),r.internalTests.blacklist=fo({message:n,name:"notOneOf",test(i){let s=this.schema._blacklist,o=s.resolveAll(this.resolve);return o.includes(i)?this.createError({params:{values:Array.from(s).join(", "),resolved:o}}):!0}}),r}strip(e=!0){let n=this.clone();return n.spec.strip=e,n}describe(e){const n=(e?this.resolve(e):this).clone(),{label:r,meta:i,optional:s,nullable:o}=n.spec;return{meta:i,label:r,optional:s,nullable:o,default:n.getDefault(e),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(l=>({name:l.OPTIONS.name,params:l.OPTIONS.params})).filter((l,c,h)=>h.findIndex(d=>d.name===l.name)===c)}}}Sr.prototype.__isYupSchema__=!0;for(const t of["validate","validateSync"])Sr.prototype[`${t}At`]=function(e,n,r={}){const{parent:i,parentPath:s,schema:o}=JL(this,e,n,r.context);return o[t](i&&i[s],Object.assign({},r,{parent:i,path:e}))};for(const t of["equals","is"])Sr.prototype[t]=Sr.prototype.oneOf;for(const t of["not","nope"])Sr.prototype[t]=Sr.prototype.notOneOf;const ZL=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function eM(t){const e=Hg(t);if(!e)return Date.parse?Date.parse(t):Number.NaN;if(e.z===void 0&&e.plusMinus===void 0)return new Date(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond).valueOf();let n=0;return e.z!=="Z"&&e.plusMinus!==void 0&&(n=e.hourOffset*60+e.minuteOffset,e.plusMinus==="+"&&(n=0-n)),Date.UTC(e.year,e.month,e.day,e.hour,e.minute+n,e.second,e.millisecond)}function Hg(t){var e,n;const r=ZL.exec(t);return r?{year:Lr(r[1]),month:Lr(r[2],1)-1,day:Lr(r[3],1),hour:Lr(r[4]),minute:Lr(r[5]),second:Lr(r[6]),millisecond:r[7]?Lr(r[7].substring(0,3)):0,precision:(e=(n=r[7])==null?void 0:n.length)!=null?e:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:Lr(r[10]),minuteOffset:Lr(r[11])}:null}function Lr(t,e=0){return Number(t)||e}let tM=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,nM=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,rM=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,iM="^\\d{4}-\\d{2}-\\d{2}",sM="\\d{2}:\\d{2}:\\d{2}",oM="(([+-]\\d{2}(:?\\d{2})?)|Z)",aM=new RegExp(`${iM}T${sM}(\\.\\d+)?${oM}$`),lM=t=>vs(t)||t===t.trim(),uM={}.toString();function dr(){return new Px}class Px extends Sr{constructor(){super({type:"string",check(e){return e instanceof String&&(e=e.valueOf()),typeof e=="string"}}),this.withMutation(()=>{this.transform((e,n,r)=>{if(!r.spec.coerce||r.isType(e)||Array.isArray(e))return e;const i=e!=null&&e.toString?e.toString():e;return i===uM?e:i})})}required(e){return super.required(e).withMutation(n=>n.test({message:e||or.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(e=>(e.tests=e.tests.filter(n=>n.OPTIONS.name!=="required"),e))}length(e,n=an.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:e},skipAbsent:!0,test(r){return r.length===this.resolve(e)}})}min(e,n=an.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(r){return r.length>=this.resolve(e)}})}max(e,n=an.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:e},skipAbsent:!0,test(r){return r.length<=this.resolve(e)}})}matches(e,n){let r=!1,i,s;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:i,name:s}=n:i=n),this.test({name:s||"matches",message:i||an.matches,params:{regex:e},skipAbsent:!0,test:o=>o===""&&r||o.search(e)!==-1})}email(e=an.email){return this.matches(tM,{name:"email",message:e,excludeEmptyString:!0})}url(e=an.url){return this.matches(nM,{name:"url",message:e,excludeEmptyString:!0})}uuid(e=an.uuid){return this.matches(rM,{name:"uuid",message:e,excludeEmptyString:!1})}datetime(e){let n="",r,i;return e&&(typeof e=="object"?{message:n="",allowOffset:r=!1,precision:i=void 0}=e:n=e),this.matches(aM,{name:"datetime",message:n||an.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||an.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:s=>{if(!s||r)return!0;const o=Hg(s);return o?!!o.z:!1}}).test({name:"datetime_precision",message:n||an.datetime_precision,params:{precision:i},skipAbsent:!0,test:s=>{if(!s||i==null)return!0;const o=Hg(s);return o?o.precision===i:!1}})}ensure(){return this.default("").transform(e=>e===null?"":e)}trim(e=an.trim){return this.transform(n=>n!=null?n.trim():n).test({message:e,name:"trim",test:lM})}lowercase(e=an.lowercase){return this.transform(n=>vs(n)?n:n.toLowerCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>vs(n)||n===n.toLowerCase()})}uppercase(e=an.uppercase){return this.transform(n=>vs(n)?n:n.toUpperCase()).test({message:e,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>vs(n)||n===n.toUpperCase()})}}dr.prototype=Px.prototype;let cM=new Date(""),hM=t=>Object.prototype.toString.call(t)==="[object Date]";class kf extends Sr{constructor(){super({type:"date",check(e){return hM(e)&&!isNaN(e.getTime())}}),this.withMutation(()=>{this.transform((e,n,r)=>!r.spec.coerce||r.isType(e)||e===null?e:(e=eM(e),isNaN(e)?kf.INVALID_DATE:new Date(e)))})}prepareParam(e,n){let r;if(Ks.isRef(e))r=e;else{let i=this.cast(e);if(!this._typeCheck(i))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=i}return r}min(e,n=Bg.min){let r=this.prepareParam(e,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:e},skipAbsent:!0,test(i){return i>=this.resolve(r)}})}max(e,n=Bg.max){let r=this.prepareParam(e,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:e},skipAbsent:!0,test(i){return i<=this.resolve(r)}})}}kf.INVALID_DATE=cM;kf.prototype;function dM(t,e=[]){let n=[],r=new Set,i=new Set(e.map(([o,a])=>`${o}-${a}`));function s(o,a){let l=xs.split(o)[0];r.add(l),i.has(`${a}-${l}`)||n.push([a,l])}for(const o of Object.keys(t)){let a=t[o];r.add(o),Ks.isRef(a)&&a.isSibling?s(a.path,o):Yy(a)&&"deps"in a&&a.deps.forEach(l=>s(l,o))}return jL.array(Array.from(r),n).reverse()}function aT(t,e){let n=1/0;return t.some((r,i)=>{var s;if((s=e.path)!=null&&s.includes(r))return n=i,!0}),n}function bx(t){return(e,n)=>aT(t,e)-aT(t,n)}const fM=(t,e,n)=>{if(typeof t!="string")return t;let r=t;try{r=JSON.parse(t)}catch{}return n.isType(r)?r:t};function Th(t){if("fields"in t){const e={};for(const[n,r]of Object.entries(t.fields))e[n]=Th(r);return t.setFields(e)}if(t.type==="array"){const e=t.optional();return e.innerType&&(e.innerType=Th(e.innerType)),e}return t.type==="tuple"?t.optional().clone({types:t.spec.types.map(Th)}):"optional"in t?t.optional():t}const pM=(t,e)=>{const n=[...xs.normalizePath(e)];if(n.length===1)return n[0]in t;let r=n.pop(),i=xs.getter(xs.join(n),!0)(t);return!!(i&&r in i)};let lT=t=>Object.prototype.toString.call(t)==="[object Object]";function mM(t,e){let n=Object.keys(t.fields);return Object.keys(e).filter(r=>n.indexOf(r)===-1)}const gM=bx([]);function Pf(t){return new Nx(t)}class Nx extends Sr{constructor(e){super({type:"object",check(n){return lT(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=gM,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{e&&this.shape(e)})}_cast(e,n={}){var r;let i=super._cast(e,n);if(i===void 0)return this.getDefault(n);if(!this._typeCheck(i))return i;let s=this.fields,o=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,a=[].concat(this._nodes,Object.keys(i).filter(d=>!this._nodes.includes(d))),l={},c=Object.assign({},n,{parent:l,__validating:n.__validating||!1}),h=!1;for(const d of a){let p=s[d],_=d in i;if(p){let v,I=i[d];c.path=(n.path?`${n.path}.`:"")+d,p=p.resolve({value:I,context:n.context,parent:l});let k=p instanceof Sr?p.spec:void 0,w=k==null?void 0:k.strict;if(k!=null&&k.strip){h=h||d in i;continue}v=!n.__validating||!w?p.cast(i[d],c):i[d],v!==void 0&&(l[d]=v)}else _&&!o&&(l[d]=i[d]);(_!==d in l||l[d]!==i[d])&&(h=!0)}return h?l:i}_validate(e,n={},r,i){let{from:s=[],originalValue:o=e,recursive:a=this.spec.recursive}=n;n.from=[{schema:this,value:o},...s],n.__validating=!0,n.originalValue=o,super._validate(e,n,r,(l,c)=>{if(!a||!lT(c)){i(l,c);return}o=o||c;let h=[];for(let d of this._nodes){let p=this.fields[d];!p||Ks.isRef(p)||h.push(p.asNestedTest({options:n,key:d,parent:c,parentPath:n.path,originalParent:o}))}this.runTests({tests:h,value:c,originalValue:o,options:n},r,d=>{i(d.sort(this._sortErrors).concat(l),c)})})}clone(e){const n=super.clone(e);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(e){let n=super.concat(e),r=n.fields;for(let[i,s]of Object.entries(this.fields)){const o=r[i];r[i]=o===void 0?s:o}return n.withMutation(i=>i.setFields(r,[...this._excludedEdges,...e._excludedEdges]))}_getDefault(e){if("default"in this.spec)return super._getDefault(e);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var i;const s=this.fields[r];let o=e;(i=o)!=null&&i.value&&(o=Object.assign({},o,{parent:o.value,value:o.value[r]})),n[r]=s&&"getDefault"in s?s.getDefault(o):void 0}),n}setFields(e,n){let r=this.clone();return r.fields=e,r._nodes=dM(e,n),r._sortErrors=bx(Object.keys(e)),n&&(r._excludedEdges=n),r}shape(e,n=[]){return this.clone().withMutation(r=>{let i=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),i=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,e),i)})}partial(){const e={};for(const[n,r]of Object.entries(this.fields))e[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(e)}deepPartial(){return Th(this)}pick(e){const n={};for(const r of e)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,i])=>e.includes(r)&&e.includes(i)))}omit(e){const n=[];for(const r of Object.keys(this.fields))e.includes(r)||n.push(r);return this.pick(n)}from(e,n,r){let i=xs.getter(e,!0);return this.transform(s=>{if(!s)return s;let o=s;return pM(s,e)&&(o=Object.assign({},s),r||delete o[e],o[n]=i(s)),o})}json(){return this.transform(fM)}noUnknown(e=!0,n=Wg.noUnknown){typeof e!="boolean"&&(n=e,e=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(i){if(i==null)return!0;const s=mM(this.schema,i);return!e||s.length===0||this.createError({params:{unknown:s.join(", ")}})}});return r.spec.noUnknown=e,r}unknown(e=!0,n=Wg.noUnknown){return this.noUnknown(!e,n)}transformKeys(e){return this.transform(n=>{if(!n)return n;const r={};for(const i of Object.keys(n))r[e(i)]=n[i];return r})}camelCase(){return this.transformKeys(pm.camelCase)}snakeCase(){return this.transformKeys(pm.snakeCase)}constantCase(){return this.transformKeys(e=>pm.snakeCase(e).toUpperCase())}describe(e){const n=(e?this.resolve(e):this).clone(),r=super.describe(e);r.fields={};for(const[s,o]of Object.entries(n.fields)){var i;let a=e;(i=a)!=null&&i.value&&(a=Object.assign({},a,{parent:a.value,value:a.value[s]})),r.fields[s]=o.describe(a)}return r}}Pf.prototype=Nx.prototype;const _M=ne.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
`,Xy=({onClose:t,children:e})=>{j.useEffect(()=>(window.addEventListener("keydown",n),document.documentElement.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.documentElement.style.overflow="visible"}));const n=i=>{i.code==="Escape"&&t()},r=i=>{i.target===i.currentTarget&&t()};return R.jsx(_M,{onClick:r,children:e})};function Jy(t){return ts({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(t)}const yM=ne.div`
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
`,vM=ne.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,wM=ne.div`
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
`,EM=ne.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,uT=ne.div`
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
`,cT=ne.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,TM=ne.button`
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
 */const H=function(t,e){if(!t)throw ba(e)},ba=function(t){return new Error("Firebase Database ("+Ox.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},IM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Zy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),r.push(n[h],n[d],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dx(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):IM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new SM;const p=s<<2|a>>4;if(r.push(p),c!==64){const _=a<<4&240|c>>2;if(r.push(_),d!==64){const v=c<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class SM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lx=function(t){const e=Dx(t);return Zy.encodeByteArray(e,!0)},wd=function(t){return Lx(t).replace(/\./g,"")},Ed=function(t){try{return Zy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){return Mx(void 0,t)}function Mx(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!xM(n)||(t[n]=Mx(t[n],e[n]));return t}function xM(t){return t!=="__proto__"}/**
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
 */function AM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RM=()=>AM().__FIREBASE_DEFAULTS__,kM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ed(t[1]);return e&&JSON.parse(e)},bf=()=>{try{return RM()||kM()||PM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fx=t=>{var e,n;return(n=(e=bf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ev=t=>{const e=Fx(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Vx=()=>{var t;return(t=bf())===null||t===void 0?void 0:t.config},Ux=t=>{var e;return(e=bf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function bM(){var t;const e=(t=bf())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NM(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OM(){const t=Vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function $x(){return Ox.NODE_ADMIN===!0}function DM(){return!bM()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LM(){try{return typeof indexedDB=="object"}catch{return!1}}function MM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FM="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FM,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bu.prototype.create)}}class Bu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?VM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rr(i,a,r)}}function VM(t,e){return t.replace(UM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const UM=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(t){return JSON.parse(t)}function Rt(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=pu(Ed(s[0])||""),n=pu(Ed(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},jM=function(t){const e=zx(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$M=function(t){const e=zx(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ua(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function qg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Td(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function mu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(hT(s)&&hT(o)){if(!mu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function hT(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Tl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Il(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zM{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const p=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(p<<1|p>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),h=1518500249):(c=s^o^a,h=1859775393):d<60?(c=s&o|a&(s|o),h=2400959708):(c=s^o^a,h=3395469782);const p=(i<<5|i>>>27)+c+l+h+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=p}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function BM(t,e){const n=new WM(t,e);return n.subscribe.bind(n)}class WM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");HM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mm),i.error===void 0&&(i.error=mm),i.complete===void 0&&(i.complete=mm);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function HM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mm(){}function Bx(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qM=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,H(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nf=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Jr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ds="[DEFAULT]";/**
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
 */class GM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tv;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QM(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KM(t){return t===ds?void 0:t}function QM(t){return t.instantiationMode==="EAGER"}/**
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
 */class YM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new GM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const XM={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},JM=me.INFO,ZM={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},eF=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ZM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=JM,this._logHandler=eF,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?XM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const tF=(t,e)=>e.some(n=>t instanceof n);let dT,fT;function nF(){return dT||(dT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rF(){return fT||(fT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wx=new WeakMap,Gg=new WeakMap,Hx=new WeakMap,gm=new WeakMap,iv=new WeakMap;function iF(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ji(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Wx.set(n,t)}).catch(()=>{}),iv.set(e,t),e}function sF(t){if(Gg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gg.set(t,e)}let Kg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Hx.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ji(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function oF(t){Kg=t(Kg)}function aF(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(_m(this),e,...n);return Hx.set(r,e.sort?e.sort():[e]),ji(r)}:rF().includes(t)?function(...e){return t.apply(_m(this),e),ji(Wx.get(this))}:function(...e){return ji(t.apply(_m(this),e))}}function lF(t){return typeof t=="function"?aF(t):(t instanceof IDBTransaction&&sF(t),tF(t,nF())?new Proxy(t,Kg):t)}function ji(t){if(t instanceof IDBRequest)return iF(t);if(gm.has(t))return gm.get(t);const e=lF(t);return e!==t&&(gm.set(t,e),iv.set(e,t)),e}const _m=t=>iv.get(t);function uF(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ji(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ji(o.result),l.oldVersion,l.newVersion,ji(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const cF=["get","getKey","getAll","getAllKeys","count"],hF=["put","add","delete","clear"],ym=new Map;function pT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ym.get(e))return ym.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=hF.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cF.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return ym.set(e,s),s}oF(t=>({...t,get:(e,n,r)=>pT(e,n)||t.get(e,n,r),has:(e,n)=>!!pT(e,n)||t.has(e,n)}));/**
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
 */class dF{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fF(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fF(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qg="@firebase/app",mT="0.10.5";/**
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
 */const Ds=new Of("@firebase/app"),pF="@firebase/app-compat",mF="@firebase/analytics-compat",gF="@firebase/analytics",_F="@firebase/app-check-compat",yF="@firebase/app-check",vF="@firebase/auth",wF="@firebase/auth-compat",EF="@firebase/database",TF="@firebase/database-compat",IF="@firebase/functions",SF="@firebase/functions-compat",CF="@firebase/installations",xF="@firebase/installations-compat",AF="@firebase/messaging",RF="@firebase/messaging-compat",kF="@firebase/performance",PF="@firebase/performance-compat",bF="@firebase/remote-config",NF="@firebase/remote-config-compat",OF="@firebase/storage",DF="@firebase/storage-compat",LF="@firebase/firestore",MF="@firebase/vertexai-preview",FF="@firebase/firestore-compat",VF="firebase",UF="10.12.2";/**
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
 */const Yg="[DEFAULT]",jF={[Qg]:"fire-core",[pF]:"fire-core-compat",[gF]:"fire-analytics",[mF]:"fire-analytics-compat",[yF]:"fire-app-check",[_F]:"fire-app-check-compat",[vF]:"fire-auth",[wF]:"fire-auth-compat",[EF]:"fire-rtdb",[TF]:"fire-rtdb-compat",[IF]:"fire-fn",[SF]:"fire-fn-compat",[CF]:"fire-iid",[xF]:"fire-iid-compat",[AF]:"fire-fcm",[RF]:"fire-fcm-compat",[kF]:"fire-perf",[PF]:"fire-perf-compat",[bF]:"fire-rc",[NF]:"fire-rc-compat",[OF]:"fire-gcs",[DF]:"fire-gcs-compat",[LF]:"fire-fst",[FF]:"fire-fst-compat",[MF]:"fire-vertex","fire-js":"fire-js",[VF]:"fire-js-all"};/**
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
 */const Id=new Map,$F=new Map,Xg=new Map;function gT(t,e){try{t.container.addComponent(e)}catch(n){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qi(t){const e=t.name;if(Xg.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;Xg.set(e,t);for(const n of Id.values())gT(n,t);for(const n of $F.values())gT(n,t);return!0}function Wu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function fr(t){return t.settings!==void 0}/**
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
 */const zF={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$i=new Bu("app","Firebase",zF);/**
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
 */class BF{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $i.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=UF;function qx(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Yg,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $i.create("bad-app-name",{appName:String(i)});if(n||(n=Vx()),!n)throw $i.create("no-options");const s=Id.get(i);if(s){if(mu(n,s.options)&&mu(r,s.config))return s;throw $i.create("duplicate-app",{appName:i})}const o=new YM(i);for(const l of Xg.values())o.addComponent(l);const a=new BF(n,r,o);return Id.set(i,a),a}function Df(t=Yg){const e=Id.get(t);if(!e&&t===Yg&&Vx())return qx();if(!e)throw $i.create("no-app",{appName:t});return e}function Fn(t,e,n){var r;let i=(r=jF[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(a.join(" "));return}qi(new Jr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const WF="firebase-heartbeat-database",HF=1,gu="firebase-heartbeat-store";let vm=null;function Gx(){return vm||(vm=uF(WF,HF,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gu)}catch(n){console.warn(n)}}}}).catch(t=>{throw $i.create("idb-open",{originalErrorMessage:t.message})})),vm}async function qF(t){try{const n=(await Gx()).transaction(gu),r=await n.objectStore(gu).get(Kx(t));return await n.done,r}catch(e){if(e instanceof Rr)Ds.warn(e.message);else{const n=$i.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ds.warn(n.message)}}}async function _T(t,e){try{const r=(await Gx()).transaction(gu,"readwrite");await r.objectStore(gu).put(e,Kx(t)),await r.done}catch(n){if(n instanceof Rr)Ds.warn(n.message);else{const r=$i.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ds.warn(r.message)}}}function Kx(t){return`${t.name}!${t.options.appId}`}/**
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
 */const GF=1024,KF=30*24*60*60*1e3;class QF{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XF(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yT();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=KF}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yT(),{heartbeatsToSend:r,unsentEntries:i}=YF(this._heartbeatsCache.heartbeats),s=wd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function yT(){return new Date().toISOString().substring(0,10)}function YF(t,e=GF){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vT(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vT(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XF{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LM()?MM().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await qF(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _T(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return _T(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vT(t){return wd(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function JF(t){qi(new Jr("platform-logger",e=>new dF(e),"PRIVATE")),qi(new Jr("heartbeat",e=>new QF(e),"PRIVATE")),Fn(Qg,mT,t),Fn(Qg,mT,"esm2017"),Fn("fire-js","")}JF("");var ZF="firebase",eV="10.12.2";/**
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
 */Fn(ZF,eV,"app");function Qx(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tV=Qx,Yx=new Bu("auth","Firebase",Qx());/**
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
 */const Sd=new Of("@firebase/auth");function nV(t,...e){Sd.logLevel<=me.WARN&&Sd.warn(`Auth (${ns}): ${t}`,...e)}function Ih(t,...e){Sd.logLevel<=me.ERROR&&Sd.error(`Auth (${ns}): ${t}`,...e)}/**
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
 */function rr(t,...e){throw sv(t,...e)}function _r(t,...e){return sv(t,...e)}function Xx(t,e,n){const r=Object.assign(Object.assign({},tV()),{[e]:n});return new Bu("auth","Firebase",r).create(e,{appName:t.name})}function qr(t){return Xx(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sv(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Yx.create(t,...e)}function se(t,e,...n){if(!t)throw sv(e,...n)}function $r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ih(e),new Error(e)}function Zr(t,e){t||$r(e)}/**
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
 */function Jg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rV(){return wT()==="http:"||wT()==="https:"}function wT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iV(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rV()||NM()||"connection"in navigator)?navigator.onLine:!0}function sV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Hu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zr(n>e,"Short delay should be less than long delay!"),this.isMobile=rv()||jx()}get(){return iV()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ov(t,e){Zr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Jx{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aV=new Hu(3e4,6e4);function rs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function oi(t,e,n,r,i={}){return Zx(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Na(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Jx.fetch()(eA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Zx(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oV),e);try{const i=new uV(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Gc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gc(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Xx(t,h,c);rr(t,h)}}catch(i){if(i instanceof Rr)throw i;rr(t,"network-request-failed",{message:String(i)})}}async function qu(t,e,n,r,i={}){const s=await oi(t,e,n,r,i);return"mfaPendingCredential"in s&&rr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function eA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ov(t.config,i):`${t.config.apiScheme}://${i}`}function lV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_r(this.auth,"network-request-failed")),aV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=_r(t,e,r);return i.customData._tokenResponse=n,i}function ET(t){return t!==void 0&&t.enterprise!==void 0}class cV{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hV(t,e){return oi(t,"GET","/v2/recaptchaConfig",rs(t,e))}/**
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
 */async function dV(t,e){return oi(t,"POST","/v1/accounts:delete",e)}async function tA(t,e){return oi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fV(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=av(r);se(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:jl(wm(i.auth_time)),issuedAtTime:jl(wm(i.iat)),expirationTime:jl(wm(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function wm(t){return Number(t)*1e3}function av(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ih("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ed(n);return i?JSON.parse(i):(Ih("Failed to decode base64 JWT payload"),null)}catch(i){return Ih("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function TT(t){const e=av(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ca(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rr&&pV(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pV({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class mV{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Zg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jl(this.lastLoginAt),this.creationTime=jl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Cd(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ca(t,tA(n,{idToken:r}));se(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?nA(s.providerUserInfo):[],a=_V(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zg(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function gV(t){const e=Xe(t);await Cd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _V(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function nA(t){return t.map(e=>{var{providerId:n}=e,r=Dy(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yV(t,e){const n=await Zx(t,{},async()=>{const r=Na({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=eA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Jx.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vV(t,e){return oi(t,"POST","/v2/accounts:revokeToken",rs(t,e))}/**
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
 */class zo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):TT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=TT(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await yV(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new zo;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(se(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(se(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zo,this.toJSON())}_performRefresh(){return $r("not implemented")}}/**
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
 */function fi(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Dy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mV(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zg(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ca(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fV(this,e)}reload(){return gV(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Cd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fr(this.auth.app))return Promise.reject(qr(this.auth));const e=await this.getIdToken();return await ca(this,dV(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,g=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:S,emailVerified:O,isAnonymous:L,providerData:V,stsTokenManager:E}=n;se(S&&E,e,"internal-error");const T=zo.fromJSON(this.name,E);se(typeof S=="string",e,"internal-error"),fi(d,e.name),fi(p,e.name),se(typeof O=="boolean",e,"internal-error"),se(typeof L=="boolean",e,"internal-error"),fi(_,e.name),fi(v,e.name),fi(I,e.name),fi(k,e.name),fi(w,e.name),fi(g,e.name);const C=new zr({uid:S,auth:e,email:p,emailVerified:O,displayName:d,isAnonymous:L,photoURL:v,phoneNumber:_,tenantId:I,stsTokenManager:T,createdAt:w,lastLoginAt:g});return V&&Array.isArray(V)&&(C.providerData=V.map(A=>Object.assign({},A))),k&&(C._redirectEventId=k),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new zo;i.updateFromServerResponse(n);const s=new zr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Cd(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];se(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?nA(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new zo;a.updateFromIdToken(r);const l=new zr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const IT=new Map;function Br(t){Zr(t instanceof Function,"Expected a class definition");let e=IT.get(t);return e?(Zr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,IT.set(t,e),e)}/**
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
 */function Sh(t,e,n){return`firebase:${t}:${e}:${n}`}class Bo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Sh(this.userKey,i.apiKey,s),this.fullPersistenceKey=Sh("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bo(Br(ST),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Br(ST);const o=Sh(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const d=zr._fromJSON(e,h);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Bo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Bo(s,e,r))}}/**
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
 */function CT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(oA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(iA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lA(e))return"Blackberry";if(uA(e))return"Webos";if(lv(e))return"Safari";if((e.includes("chrome/")||sA(e))&&!e.includes("edge/"))return"Chrome";if(aA(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function iA(t=Vt()){return/firefox\//i.test(t)}function lv(t=Vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sA(t=Vt()){return/crios\//i.test(t)}function oA(t=Vt()){return/iemobile/i.test(t)}function aA(t=Vt()){return/android/i.test(t)}function lA(t=Vt()){return/blackberry/i.test(t)}function uA(t=Vt()){return/webos/i.test(t)}function Lf(t=Vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wV(t=Vt()){var e;return Lf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EV(){return OM()&&document.documentMode===10}function cA(t=Vt()){return Lf(t)||aA(t)||uA(t)||lA(t)||/windows phone/i.test(t)||oA(t)}function TV(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function hA(t,e=[]){let n;switch(t){case"Browser":n=CT(Vt());break;case"Worker":n=`${CT(Vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ns}/${r}`}/**
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
 */class IV{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SV(t,e={}){return oi(t,"GET","/v2/passwordPolicy",rs(t,e))}/**
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
 */const CV=6;class xV{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CV,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class AV{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xT(this),this.idTokenSubscription=new xT(this),this.beforeStateQueue=new IV(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yx,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Br(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Bo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tA(this,{idToken:e}),r=await zr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(fr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Cd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fr(this.app))return Promise.reject(qr(this));const n=e?Xe(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fr(this.app)?Promise.reject(qr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fr(this.app)?Promise.reject(qr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Br(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SV(this),n=new xV(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vV(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Br(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await Bo.create(this,[Br(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Qs(t){return Xe(t)}class xT{constructor(e){this.auth=e,this.observer=null,this.addObserver=BM(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RV(t){Mf=t}function dA(t){return Mf.loadJS(t)}function kV(){return Mf.recaptchaEnterpriseScript}function PV(){return Mf.gapiScript}function bV(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NV="recaptcha-enterprise",OV="NO_RECAPTCHA";class DV{constructor(e){this.type=NV,this.auth=Qs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{hV(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new cV(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ET(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(OV)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ET(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=kV();l.length!==0&&(l+=a),dA(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function AT(t,e,n,r=!1){const i=new DV(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function e_(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await AT(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await AT(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function LV(t,e){const n=Wu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mu(s,e??{}))return i;rr(i,"already-initialized")}return n.initialize({options:e})}function MV(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Br);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FV(t,e,n){const r=Qs(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=fA(e),{host:o,port:a}=VV(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UV()}function fA(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VV(t){const e=fA(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:RT(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:RT(o)}}}function RT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UV(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class uv{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $r("not implemented")}_getIdTokenResponse(e){return $r("not implemented")}_linkToIdToken(e,n){return $r("not implemented")}_getReauthenticationResolver(e){return $r("not implemented")}}async function jV(t,e){return oi(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $V(t,e){return qu(t,"POST","/v1/accounts:signInWithPassword",rs(t,e))}/**
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
 */async function zV(t,e){return qu(t,"POST","/v1/accounts:signInWithEmailLink",rs(t,e))}async function BV(t,e){return qu(t,"POST","/v1/accounts:signInWithEmailLink",rs(t,e))}/**
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
 */class _u extends uv{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new _u(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new _u(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return e_(e,n,"signInWithPassword",$V);case"emailLink":return zV(e,{email:this._email,oobCode:this._password});default:rr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return e_(e,r,"signUpPassword",jV);case"emailLink":return BV(e,{idToken:n,email:this._email,oobCode:this._password});default:rr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Wo(t,e){return qu(t,"POST","/v1/accounts:signInWithIdp",rs(t,e))}/**
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
 */const WV="http://localhost";class Ls extends uv{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ls(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Dy(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ls(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Wo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Wo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wo(e,n)}buildRequest(){const e={requestUri:WV,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Na(n)}return e}}/**
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
 */function HV(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qV(t){const e=Tl(Il(t)).link,n=e?Tl(Il(e)).deep_link_id:null,r=Tl(Il(t)).deep_link_id;return(r?Tl(Il(r)).link:null)||r||n||e||t}class cv{constructor(e){var n,r,i,s,o,a;const l=Tl(Il(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=HV((i=l.mode)!==null&&i!==void 0?i:null);se(c&&h&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qV(e);try{return new cv(n)}catch{return null}}}/**
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
 */class Oa{constructor(){this.providerId=Oa.PROVIDER_ID}static credential(e,n){return _u._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cv.parseLink(n);return se(r,"argument-error"),_u._fromEmailAndCode(e,r.code,r.tenantId)}}Oa.PROVIDER_ID="password";Oa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Gu extends pA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ei extends Gu{constructor(){super("facebook.com")}static credential(e){return Ls._fromParams({providerId:Ei.PROVIDER_ID,signInMethod:Ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ei.credentialFromTaggedObject(e)}static credentialFromError(e){return Ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ei.credential(e.oauthAccessToken)}catch{return null}}}Ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ei.PROVIDER_ID="facebook.com";/**
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
 */class Ti extends Gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ls._fromParams({providerId:Ti.PROVIDER_ID,signInMethod:Ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ti.credentialFromTaggedObject(e)}static credentialFromError(e){return Ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ti.credential(n,r)}catch{return null}}}Ti.GOOGLE_SIGN_IN_METHOD="google.com";Ti.PROVIDER_ID="google.com";/**
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
 */class Ii extends Gu{constructor(){super("github.com")}static credential(e){return Ls._fromParams({providerId:Ii.PROVIDER_ID,signInMethod:Ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ii.credentialFromTaggedObject(e)}static credentialFromError(e){return Ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ii.credential(e.oauthAccessToken)}catch{return null}}}Ii.GITHUB_SIGN_IN_METHOD="github.com";Ii.PROVIDER_ID="github.com";/**
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
 */class Si extends Gu{constructor(){super("twitter.com")}static credential(e,n){return Ls._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Si.credentialFromTaggedObject(e)}static credentialFromError(e){return Si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Si.credential(n,r)}catch{return null}}}Si.TWITTER_SIGN_IN_METHOD="twitter.com";Si.PROVIDER_ID="twitter.com";/**
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
 */async function GV(t,e){return qu(t,"POST","/v1/accounts:signUp",rs(t,e))}/**
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
 */class Ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await zr._fromIdTokenResponse(e,r,i),o=kT(r);return new Ms({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kT(r);return new Ms({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xd extends Rr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xd.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xd(e,n,r,i)}}function mA(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xd._fromErrorAndOperation(t,s,e,r):s})}async function KV(t,e,n=!1){const r=await ca(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ms._forOperation(t,"link",r)}/**
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
 */async function QV(t,e,n=!1){const{auth:r}=t;if(fr(r.app))return Promise.reject(qr(r));const i="reauthenticate";try{const s=await ca(t,mA(r,i,e,t),n);se(s.idToken,r,"internal-error");const o=av(s.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(t.uid===a,r,"user-mismatch"),Ms._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rr(r,"user-mismatch"),s}}/**
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
 */async function gA(t,e,n=!1){if(fr(t.app))return Promise.reject(qr(t));const r="signIn",i=await mA(t,r,e),s=await Ms._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function YV(t,e){return gA(Qs(t),e)}/**
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
 */async function _A(t){const e=Qs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XV(t,e,n){if(fr(t.app))return Promise.reject(qr(t));const r=Qs(t),o=await e_(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GV).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_A(t),l}),a=await Ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function JV(t,e,n){return fr(t.app)?Promise.reject(qr(t)):YV(Xe(t),Oa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&_A(t),r})}/**
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
 */async function ZV(t,e){return oi(t,"POST","/v1/accounts:update",e)}/**
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
 */async function e4(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Xe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ca(r,ZV(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function t4(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function n4(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function yA(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function r4(t){return Xe(t).signOut()}const Ad="__sak";/**
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
 */function i4(){const t=Vt();return lv(t)||Lf(t)}const s4=1e3,o4=10;class wA extends vA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=i4()&&TV(),this.fallbackToPolling=cA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);EV()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,o4):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},s4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wA.type="LOCAL";const a4=wA;/**
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
 */function l4(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ff{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ff(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await l4(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ff.receivers=[];/**
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
 */class u4{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=hv("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const p=d;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yr(){return window}function c4(t){yr().location.href=t}/**
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
 */function IA(){return typeof yr().WorkerGlobalScope<"u"&&typeof yr().importScripts=="function"}async function h4(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function d4(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function f4(){return IA()?self:null}/**
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
 */const SA="firebaseLocalStorageDb",p4=1,Rd="firebaseLocalStorage",CA="fbase_key";class Ku{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vf(t,e){return t.transaction([Rd],e?"readwrite":"readonly").objectStore(Rd)}function m4(){const t=indexedDB.deleteDatabase(SA);return new Ku(t).toPromise()}function t_(){const t=indexedDB.open(SA,p4);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rd,{keyPath:CA})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rd)?e(r):(r.close(),await m4(),e(await t_()))})})}async function PT(t,e,n){const r=Vf(t,!0).put({[CA]:e,value:n});return new Ku(r).toPromise()}async function g4(t,e){const n=Vf(t,!1).get(e),r=await new Ku(n).toPromise();return r===void 0?null:r.value}function bT(t,e){const n=Vf(t,!0).delete(e);return new Ku(n).toPromise()}const _4=800,y4=3;class xA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await t_(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>y4)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return IA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ff._getInstance(f4()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await h4(),!this.activeServiceWorker)return;this.sender=new u4(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||d4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await t_();return await PT(e,Ad,"1"),await bT(e,Ad),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>PT(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g4(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vf(i,!1).getAll();return new Ku(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xA.type="LOCAL";const v4=xA;new Hu(3e4,6e4);/**
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
 */function w4(t,e){return e?Br(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dv extends uv{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function E4(t){return gA(t.auth,new dv(t),t.bypassAuthState)}function T4(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),QV(n,new dv(t),t.bypassAuthState)}async function I4(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),KV(n,new dv(t),t.bypassAuthState)}/**
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
 */class AA{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return E4;case"linkViaPopup":case"linkViaRedirect":return I4;case"reauthViaPopup":case"reauthViaRedirect":return T4;default:rr(this.auth,"internal-error")}}resolve(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const S4=new Hu(2e3,1e4);class Oo extends AA{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Oo.currentPopupAction&&Oo.currentPopupAction.cancel(),Oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Zr(this.filter.length===1,"Popup operations only handle one event");const e=hv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_r(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_r(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_r(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S4.get())};e()}}Oo.currentPopupAction=null;/**
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
 */const C4="pendingRedirect",Ch=new Map;class x4 extends AA{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ch.get(this.auth._key());if(!e){try{const r=await A4(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ch.set(this.auth._key(),e)}return this.bypassAuthState||Ch.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function A4(t,e){const n=P4(e),r=k4(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function R4(t,e){Ch.set(t._key(),e)}function k4(t){return Br(t._redirectPersistence)}function P4(t){return Sh(C4,t.config.apiKey,t.name)}async function b4(t,e,n=!1){if(fr(t.app))return Promise.reject(qr(t));const r=Qs(t),i=w4(r,e),o=await new x4(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const N4=10*60*1e3;class O4{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D4(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!RA(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_r(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N4&&this.cachedEventUids.clear(),this.cachedEventUids.has(NT(e))}saveEventToCache(e){this.cachedEventUids.add(NT(e)),this.lastProcessedEventTime=Date.now()}}function NT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function RA({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D4(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return RA(t);default:return!1}}/**
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
 */async function L4(t,e={}){return oi(t,"GET","/v1/projects",e)}/**
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
 */const M4=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,F4=/^https?/;async function V4(t){if(t.config.emulator)return;const{authorizedDomains:e}=await L4(t);for(const n of e)try{if(U4(n))return}catch{}rr(t,"unauthorized-domain")}function U4(t){const e=Jg(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!F4.test(n))return!1;if(M4.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const j4=new Hu(3e4,6e4);function OT(){const t=yr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $4(t){return new Promise((e,n)=>{var r,i,s;function o(){OT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{OT(),n(_r(t,"network-request-failed"))},timeout:j4.get()})}if(!((i=(r=yr().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yr().gapi)===null||s===void 0)&&s.load)o();else{const a=bV("iframefcb");return yr()[a]=()=>{gapi.load?o():n(_r(t,"network-request-failed"))},dA(`${PV()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw xh=null,e})}let xh=null;function z4(t){return xh=xh||$4(t),xh}/**
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
 */const B4=new Hu(5e3,15e3),W4="__/auth/iframe",H4="emulator/auth/iframe",q4={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G4=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K4(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ov(e,H4):`https://${t.config.authDomain}/${W4}`,r={apiKey:e.apiKey,appName:t.name,v:ns},i=G4.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Na(r).slice(1)}`}async function Q4(t){const e=await z4(t),n=yr().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:K4(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q4,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=_r(t,"network-request-failed"),a=yr().setTimeout(()=>{s(o)},B4.get());function l(){yr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Y4={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},X4=500,J4=600,Z4="_blank",eU="http://localhost";class DT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tU(t,e,n,r=X4,i=J4){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Y4),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Vt().toLowerCase();n&&(a=sA(c)?Z4:n),iA(c)&&(e=e||eU,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[_,v])=>`${p}${_}=${v},`,"");if(wV(c)&&a!=="_self")return nU(e||"",a),new DT(null);const d=window.open(e||"",a,h);se(d,t,"popup-blocked");try{d.focus()}catch{}return new DT(d)}function nU(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rU="__/auth/handler",iU="emulator/auth/handler",sU=encodeURIComponent("fac");async function LT(t,e,n,r,i,s){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ns,eventId:i};if(e instanceof pA){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries(s||{}))o[h]=d}if(e instanceof Gu){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${sU}=${encodeURIComponent(l)}`:"";return`${oU(t)}?${Na(a).slice(1)}${c}`}function oU({config:t}){return t.emulator?ov(t,iU):`https://${t.authDomain}/${rU}`}/**
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
 */const Em="webStorageSupport";class aU{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=TA,this._completeRedirectFn=b4,this._overrideRedirectResult=R4}async _openPopup(e,n,r,i){var s;Zr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await LT(e,n,r,Jg(),i);return tU(e,o,hv())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await LT(e,n,r,Jg(),i);return c4(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Q4(e),r=new O4(e);return n.register("authEvent",i=>(se(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Em,{type:Em},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Em];o!==void 0&&n(!!o),rr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=V4(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return cA()||lv()||Lf()}}const lU=aU;var MT="@firebase/auth",FT="1.7.4";/**
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
 */class uU{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cU(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hU(t){qi(new Jr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hA(t)},c=new AV(r,i,s,l);return MV(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qi(new Jr("auth-internal",e=>{const n=Qs(e.getProvider("auth").getImmediate());return(r=>new uU(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fn(MT,FT,cU(t)),Fn(MT,FT,"esm2017")}/**
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
 */const dU=5*60,fU=Ux("authIdTokenMaxAge")||dU;let VT=null;const pU=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fU)return;const i=n==null?void 0:n.token;VT!==i&&(VT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Qu(t=Df()){const e=Wu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LV(t,{popupRedirectResolver:lU,persistence:[v4,a4,TA]}),r=Ux("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=pU(s.toString());n4(n,o,()=>o(n.currentUser)),t4(n,a=>o(a))}}const i=Fx("auth");return i&&FV(n,`http://${i}`),n}function mU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RV({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=_r("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",mU().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hU("Browser");const UT="@firebase/database",jT="1.0.5";/**
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
 */let kA="";function gU(t){kA=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Rt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:pu(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return si(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new _U(e)}}catch{}return new yU},ws=PA("localStorage"),n_=PA("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Of("@firebase/database"),vU=function(){let t=1;return function(){return t++}}(),bA=function(t){const e=qM(t),n=new zM;n.update(e);const r=n.digest();return Zy.encodeByteArray(r)},Yu=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Yu.apply(null,r):typeof r=="object"?e+=Rt(r):e+=r,e+=" "}return e};let As=null,$T=!0;const wU=function(t,e){H(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ho.logLevel=me.VERBOSE,As=Ho.log.bind(Ho),e&&n_.set("logging_enabled",!0)):typeof t=="function"?As=t:(As=null,n_.remove("logging_enabled"))},Kt=function(...t){if($T===!0&&($T=!1,As===null&&n_.get("logging_enabled")===!0&&wU(!0)),As){const e=Yu.apply(null,t);As(e)}},Xu=function(t){return function(...e){Kt(t,...e)}},r_=function(...t){const e="FIREBASE INTERNAL ERROR: "+Yu(...t);Ho.error(e)},ei=function(...t){const e=`FIREBASE FATAL ERROR: ${Yu(...t)}`;throw Ho.error(e),new Error(e)},An=function(...t){const e="FIREBASE WARNING: "+Yu(...t);Ho.warn(e)},EU=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NA=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},TU=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ha="[MIN_NAME]",Fs="[MAX_NAME]",Da=function(t,e){if(t===e)return 0;if(t===ha||e===Fs)return-1;if(e===ha||t===Fs)return 1;{const n=zT(t),r=zT(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},IU=function(t,e){return t===e?0:t<e?-1:1},cl=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Rt(e))},fv=function(t){if(typeof t!="object"||t===null)return Rt(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Rt(e[r]),n+=":",n+=fv(t[e[r]]);return n+="}",n},OA=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function yn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const DA=function(t){H(!NA(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),d=d+p}return d.toLowerCase()},SU=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CU=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xU(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const AU=new RegExp("^-?(0*)\\d{1,10}$"),RU=-2147483648,kU=2147483647,zT=function(t){if(AU.test(t)){const e=Number(t);if(e>=RU&&e<=kU)return e}return null},Ju=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw An("Exception was thrown by user callback.",n),e},Math.floor(0))}},PU=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},$l=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class bU{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class qo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WA{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ws.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ws.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function OU(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function HA(t,e,n){H(typeof e=="string","typeof type must == string"),H(typeof n=="object","typeof params must == object");let r;if(e===zA)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===BA)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);OU(t)&&(n.ns=t.namespace);const i=[];return yn(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU{constructor(){this.counters_={}}incrementCounter(e,n=1){si(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return CM(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm={},Im={};function mv(t){const e=t.toString();return Tm[e]||(Tm[e]=new DU),Tm[e]}function LU(t,e){const n=t.toString();return Im[n]||(Im[n]=e()),Im[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ju(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT="start",FU="close",VU="pLPCommand",UU="pRTLPCB",qA="id",GA="pw",KA="ser",jU="cb",$U="seg",zU="ts",BU="d",WU="dframe",QA=1870,YA=30,HU=QA-YA,qU=25e3,GU=3e4;class Do{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Xu(e),this.stats_=mv(n),this.urlFn=l=>(this.appCheckToken&&(l[i_]=this.appCheckToken),HA(n,BA,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new MU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(GU)),TU(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gv((...s)=>{const[o,a,l,c,h]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===BT)this.id=a,this.password=l;else if(o===FU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[BT]="t",r[KA]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[jU]=this.scriptTagHolder.uniqueCallbackIdentifier),r[LA]=pv,this.transportSessionId&&(r[MA]=this.transportSessionId),this.lastSessionId&&(r[jA]=this.lastSessionId),this.applicationId&&(r[$A]=this.applicationId),this.appCheckToken&&(r[i_]=this.appCheckToken),typeof location<"u"&&location.hostname&&UA.test(location.hostname)&&(r[FA]=VA);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Do.forceAllow_=!0}static forceDisallow(){Do.forceDisallow_=!0}static isAvailable(){return Do.forceAllow_?!0:!Do.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SU()&&!CU()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Lx(n),i=OA(r,HU);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[WU]="t",r[qA]=e,r[GA]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Rt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class gv{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=vU(),window[VU+this.uniqueCallbackIdentifier]=e,window[UU+this.uniqueCallbackIdentifier]=n,this.myIFrame=gv.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Kt("frame writing exception"),a.stack&&Kt(a.stack),Kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Kt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[qA]=this.myID,e[GA]=this.myPW,e[KA]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+YA+r.length<=QA;){const o=this.pendingSegs.shift();r=r+"&"+$U+i+"="+o.seg+"&"+zU+i+"="+o.ts+"&"+BU+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(qU)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KU=16384,QU=45e3;let kd=null;typeof MozWebSocket<"u"?kd=MozWebSocket:typeof WebSocket<"u"&&(kd=WebSocket);class Kn{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Xu(this.connId),this.stats_=mv(n),this.connURL=Kn.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[LA]=pv,typeof location<"u"&&location.hostname&&UA.test(location.hostname)&&(o[FA]=VA),n&&(o[MA]=n),r&&(o[jA]=r),i&&(o[i_]=i),s&&(o[$A]=s),HA(e,zA,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ws.set("previous_websocket_failure",!0);try{let r;$x(),this.mySock=new kd(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&kd!==null&&!Kn.forceDisallow_}static previouslyFailed(){return ws.isInMemoryStorage||ws.get("previous_websocket_failure")===!0}markConnectionHealthy(){ws.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=pu(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Rt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=OA(n,KU);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(QU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kn.responsesRequiredToBeHealthy=2;Kn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Do,Kn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kn&&Kn.isAvailable();let r=n&&!Kn.previouslyFailed();if(e.webSocketOnly&&(n||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kn];else{const i=this.transports_=[];for(const s of yu.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);yu.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yu.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YU=6e4,XU=5e3,JU=10*1024,ZU=100*1024,Sm="t",WT="d",ej="s",HT="r",tj="e",qT="o",GT="a",KT="n",QT="p",nj="h";class rj{constructor(e,n,r,i,s,o,a,l,c,h){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Xu("c:"+this.id+":"),this.transportManager_=new yu(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=$l(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ZU?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>JU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Sm in e){const n=e[Sm];n===GT?this.upgradeIfSecondaryHealthy_():n===HT?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===qT&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=cl("t",e),r=cl("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:QT,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:GT,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:KT,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=cl("t",e),r=cl("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=cl(Sm,e);if(WT in e){const r=e[WT];if(n===nj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===KT){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ej?this.onConnectionShutdown_(r):n===HT?this.onReset_(r):n===tj?r_("Server Error: "+r):n===qT?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):r_("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),pv!==r&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),$l(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(YU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):$l(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(XU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:QT,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ws.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JA{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){H(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends JA{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!rv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Pd}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=32,XT=768;class De{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ae(){return new De("")}function fe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gi(t){return t.pieces_.length-t.pieceNum_}function Fe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new De(t.pieces_,e)}function ZA(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ij(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function eR(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function tR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new De(e,0)}function _t(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof De)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new De(n,0)}function pe(t){return t.pieceNum_>=t.pieces_.length}function fn(t,e){const n=fe(t),r=fe(e);if(n===null)return e;if(n===r)return fn(Fe(t),Fe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function _v(t,e){if(Gi(t)!==Gi(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Qn(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Gi(t)>Gi(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class sj{constructor(e,n){this.errorPrefix_=n,this.parts_=eR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nf(this.parts_[r]);nR(this)}}function oj(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nf(e),nR(t)}function aj(t){const e=t.parts_.pop();t.byteLength_-=Nf(e),t.parts_.length>0&&(t.byteLength_-=1)}function nR(t){if(t.byteLength_>XT)throw new Error(t.errorPrefix_+"has a key path longer than "+XT+" bytes ("+t.byteLength_+").");if(t.parts_.length>YT)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+YT+") or object contains a cycle "+fs(t))}function fs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends JA{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new yv}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=1e3,lj=60*5*1e3,JT=30*1e3,uj=1.3,cj=3e4,hj="server_kill",ZT=3;class Gr extends XA{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Gr.nextPersistentConnectionId_++,this.log_=Xu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hl,this.maxReconnectDelay_=lj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!$x())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yv.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pd.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Rt(s)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new tv,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Gr.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&si(e,"w")){const r=ua(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$M(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=JT)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=jM(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Rt(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):r_("Unrecognized action received from server: "+Rt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>cj&&(this.reconnectDelay_=hl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*uj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Gr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Kt("getToken() completed but was canceled"):(Kt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=p&&p.token,a=new rj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{An(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(hj)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&An(d),l())}}}interrupt(e){Kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],qg(this.interruptReasons_)&&(this.reconnectDelay_=hl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>fv(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new De(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ZT&&(this.reconnectDelay_=JT,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ZT&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kA.replace(/\./g,"-")]=1,rv()?e["framework.cordova"]=1:jx()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pd.getInstance().currentlyOnline();return qg(this.interruptReasons_)&&e}}Gr.nextPersistentConnectionId_=0;Gr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new he(ha,e),i=new he(ha,n);return this.compare(r,i)!==0}minPost(){return he.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kc;class rR extends Uf{static get __EMPTY_NODE(){return Kc}static set __EMPTY_NODE(e){Kc=e}compare(e,n){return Da(e.name,n.name)}isDefinedOn(e){throw ba("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return he.MIN}maxPost(){return new he(Fs,Kc)}makePost(e,n){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new he(e,Kc)}toString(){return".key"}}const Go=new rR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qc=class{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},In=class Sl{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Sl.RED,this.left=i??pr.EMPTY_NODE,this.right=s??pr.EMPTY_NODE}copy(e,n,r,i,s){return new Sl(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return pr.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return pr.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Sl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Sl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};In.RED=!0;In.BLACK=!1;class dj{copy(e,n,r,i,s){return this}insert(e,n,r){return new In(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let pr=class Ah{constructor(e,n=Ah.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ah(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,In.BLACK,null,null))}remove(e){return new Ah(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,In.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qc(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qc(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qc(this.root_,null,this.comparator_,!0,e)}};pr.EMPTY_NODE=new dj;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fj(t,e){return Da(t.name,e.name)}function vv(t,e){return Da(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s_;function pj(t){s_=t}const iR=function(t){return typeof t=="number"?"number:"+DA(t):"string:"+t},sR=function(t){if(t.isLeafNode()){const e=t.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&si(e,".sv"),"Priority must be a string or number.")}else H(t===s_||t.isEmpty(),"priority of unexpected type.");H(t===s_||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e1;class It{constructor(e,n=It.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sR(this.priorityNode_)}static set __childrenNodeConstructor(e){e1=e}static get __childrenNodeConstructor(){return e1}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new It(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return pe(e)?this:fe(e)===".priority"?this.priorityNode_:It.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:It.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=fe(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(H(r!==".priority"||Gi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,It.__childrenNodeConstructor.EMPTY_NODE.updateChild(Fe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+iR(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=DA(this.value_):e+=this.value_,this.lazyHash_=bA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===It.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof It.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=It.VALUE_TYPE_ORDER.indexOf(n),s=It.VALUE_TYPE_ORDER.indexOf(r);return H(i>=0,"Unknown leaf type: "+n),H(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}It.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oR,aR;function mj(t){oR=t}function gj(t){aR=t}class _j extends Uf{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Da(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return he.MIN}maxPost(){return new he(Fs,new It("[PRIORITY-POST]",aR))}makePost(e,n){const r=oR(e);return new he(n,new It("[PRIORITY-POST]",r))}toString(){return".priority"}}const rt=new _j;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yj=Math.log(2);class vj{constructor(e){const n=s=>parseInt(Math.log(s)/yj,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bd=function(t,e,n,r){t.sort(e);const i=function(l,c){const h=c-l;let d,p;if(h===0)return null;if(h===1)return d=t[l],p=n?n(d):d,new In(p,d.node,In.BLACK,null,null);{const _=parseInt(h/2,10)+l,v=i(l,_),I=i(_+1,c);return d=t[_],p=n?n(d):d,new In(p,d.node,In.BLACK,v,I)}},s=function(l){let c=null,h=null,d=t.length;const p=function(v,I){const k=d-v,w=d;d-=v;const g=i(k+1,w),S=t[k],O=n?n(S):S;_(new In(O,S.node,I,null,g))},_=function(v){c?(c.left=v,c=v):(h=v,c=v)};for(let v=0;v<l.count;++v){const I=l.nextBitIsOne(),k=Math.pow(2,l.count-(v+1));I?p(k,In.BLACK):(p(k,In.BLACK),p(k,In.RED))}return h},o=new vj(t.length),a=s(o);return new pr(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cm;const po={};class Wr{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return H(po&&rt,"ChildrenNode.ts has not been loaded"),Cm=Cm||new Wr({".priority":po},{".priority":rt}),Cm}get(e){const n=ua(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof pr?n:null}hasIndex(e){return si(this.indexSet_,e.toString())}addIndex(e,n){H(e!==Go,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(he.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=bd(r,e.getCompare()):a=po;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Wr(h,c)}addToIndexes(e,n){const r=Td(this.indexes_,(i,s)=>{const o=ua(this.indexSet_,s);if(H(o,"Missing index implementation for "+s),i===po)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(he.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),bd(a,o.getCompare())}else return po;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new he(e.name,a))),l.insert(e,e.node)}});return new Wr(r,this.indexSet_)}removeFromIndexes(e,n){const r=Td(this.indexes_,i=>{if(i===po)return i;{const s=n.get(e.name);return s?i.remove(new he(e.name,s)):i}});return new Wr(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dl;class oe{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&sR(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return dl||(dl=new oe(new pr(vv),null,Wr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||dl}updatePriority(e){return this.children_.isEmpty()?this:new oe(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?dl:n}}getChild(e){const n=fe(e);return n===null?this:this.getImmediateChild(n).getChild(Fe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(H(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new he(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?dl:this.priorityNode_;return new oe(i,o,s)}}updateChild(e,n){const r=fe(e);if(r===null)return n;{H(fe(e)!==".priority"||Gi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(Fe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(rt,(o,a)=>{n[o]=a.val(e),r++,s&&oe.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+iR(this.getPriority().val())+":"),this.forEachChild(rt,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":bA(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new he(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new he(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new he(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,he.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zu?-1:0}withIndex(e){if(e===Go||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new oe(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Go||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(rt),i=n.getIterator(rt);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Go?null:this.indexMap_.get(e.toString())}}oe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class wj extends oe{constructor(){super(new pr(vv),oe.EMPTY_NODE,Wr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return oe.EMPTY_NODE}isEmpty(){return!1}}const Zu=new wj;Object.defineProperties(he,{MIN:{value:new he(ha,oe.EMPTY_NODE)},MAX:{value:new he(Fs,Zu)}});rR.__EMPTY_NODE=oe.EMPTY_NODE;It.__childrenNodeConstructor=oe;pj(Zu);gj(Zu);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ej=!0;function Qt(t,e=null){if(t===null)return oe.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new It(n,Qt(e))}if(!(t instanceof Array)&&Ej){const n=[];let r=!1;if(yn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Qt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new he(o,l)))}}),n.length===0)return oe.EMPTY_NODE;const s=bd(n,fj,o=>o.name,vv);if(r){const o=bd(n,rt.getCompare());return new oe(s,Qt(e),new Wr({".priority":o},{".priority":rt}))}else return new oe(s,Qt(e),Wr.Default)}else{let n=oe.EMPTY_NODE;return yn(t,(r,i)=>{if(si(t,r)&&r.substring(0,1)!=="."){const s=Qt(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Qt(e))}}mj(Qt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tj extends Uf{constructor(e){super(),this.indexPath_=e,H(!pe(e)&&fe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Da(e.name,n.name):s}makePost(e,n){const r=Qt(e),i=oe.EMPTY_NODE.updateChild(this.indexPath_,r);return new he(n,i)}maxPost(){const e=oe.EMPTY_NODE.updateChild(this.indexPath_,Zu);return new he(Fs,e)}toString(){return eR(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ij extends Uf{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Da(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return he.MIN}maxPost(){return he.MAX}makePost(e,n){const r=Qt(e);return new he(n,r)}toString(){return".value"}}const Sj=new Ij;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(t){return{type:"value",snapshotNode:t}}function da(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vu(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function wu(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Cj(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(vu(n,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(da(n,r)):o.trackChildChange(wu(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(rt,(i,s)=>{n.hasChild(i)||r.trackChildChange(vu(i,s))}),n.isLeafNode()||n.forEachChild(rt,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(wu(i,s,o))}else r.trackChildChange(da(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?oe.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.indexedFilter_=new wv(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Eu.getStartPost_(e),this.endPost_=Eu.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new he(n,r))||(r=oe.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=oe.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(oe.EMPTY_NODE);const s=this;return n.forEachChild(rt,(o,a)=>{s.matches(new he(o,a))||(i=i.updateImmediateChild(o,oe.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xj{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Eu(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new he(n,r))||(r=oe.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=oe.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=oe.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(oe.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,oe.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(p,_)=>d(_,p)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const l=new he(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let p=i.getChildAfterChild(this.index_,c,this.reverse_);for(;p!=null&&(p.name===n||a.hasChild(p.name));)p=i.getChildAfterChild(this.index_,p,this.reverse_);const _=p==null?1:o(p,l);if(h&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(wu(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(vu(n,d));const I=a.updateImmediateChild(n,oe.EMPTY_NODE);return p!=null&&this.rangedFilter_.matches(p)?(s!=null&&s.trackChildChange(da(p.name,p.node)),I.updateImmediateChild(p.name,p.node)):I}}else return r.isEmpty()?e:h&&o(c,l)>=0?(s!=null&&(s.trackChildChange(vu(c.name,c.node)),s.trackChildChange(da(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,oe.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ha}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Fs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rt}copy(){const e=new Ev;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Aj(t){return t.loadsAllData()?new wv(t.getIndex()):t.hasLimit()?new xj(t):new Eu(t)}function t1(t){const e={};if(t.isDefault())return e;let n;if(t.index_===rt?n="$priority":t.index_===Sj?n="$value":t.index_===Go?n="$key":(H(t.index_ instanceof Tj,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Rt(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Rt(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Rt(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Rt(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Rt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function n1(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==rt&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends XA{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Xu("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Nd.getListenId_(e,r),a={};this.listens_[o]=a;const l=t1(e._queryParams);this.restRequest_(s+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),ua(this.listens_,o)===a){let p;c?c===401?p="permission_denied":p="rest_error:"+c:p="ok",i(p,null)}})}unlisten(e,n){const r=Nd.getListenId_(e,n);delete this.listens_[r]}get(e){const n=t1(e._queryParams),r=e._path.toString(),i=new tv;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Na(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=pu(a.responseText)}catch{An("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&An("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rj{constructor(){this.rootNode_=oe.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(){return{value:null,children:new Map}}function uR(t,e,n){if(pe(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=fe(e);t.children.has(r)||t.children.set(r,Od());const i=t.children.get(r);e=Fe(e),uR(i,e,n)}}function o_(t,e,n){t.value!==null?n(e,t.value):kj(t,(r,i)=>{const s=new De(e.toString()+"/"+r);o_(i,s,n)})}function kj(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pj{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&yn(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=10*1e3,bj=30*1e3,Nj=5*60*1e3;class Oj{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Pj(e);const r=r1+(bj-r1)*Math.random();$l(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;yn(e,(i,s)=>{s>0&&si(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),$l(this.reportStats_.bind(this),Math.floor(Math.random()*2*Nj))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dd{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Yn.ACK_USER_WRITE,this.source=cR()}operationForChild(e){if(pe(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new De(e));return new Dd(Ae(),n,this.revert)}}else return H(fe(this.path)===e,"operationForChild called for unrelated child."),new Dd(Fe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n){this.source=e,this.path=n,this.type=Yn.LISTEN_COMPLETE}operationForChild(e){return pe(this.path)?new Tu(this.source,Ae()):new Tu(this.source,Fe(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Yn.OVERWRITE}operationForChild(e){return pe(this.path)?new Vs(this.source,Ae(),this.snap.getImmediateChild(e)):new Vs(this.source,Fe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Yn.MERGE}operationForChild(e){if(pe(this.path)){const n=this.children.subtree(new De(e));return n.isEmpty()?null:n.value?new Vs(this.source,Ae(),n.value):new Iu(this.source,Ae(),n)}else return H(fe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Iu(this.source,Fe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(pe(e))return this.isFullyInitialized()&&!this.filtered_;const n=fe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dj{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Lj(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(Cj(o.childName,o.snapshotNode))}),fl(t,i,"child_removed",e,r,n),fl(t,i,"child_added",e,r,n),fl(t,i,"child_moved",s,r,n),fl(t,i,"child_changed",e,r,n),fl(t,i,"value",e,r,n),i}function fl(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Fj(t,a,l)),o.forEach(a=>{const l=Mj(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Mj(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Fj(t,e,n){if(e.childName==null||n.childName==null)throw ba("Should only compare child_ events.");const r=new he(e.childName,e.snapshotNode),i=new he(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(t,e){return{eventCache:t,serverCache:e}}function zl(t,e,n,r){return jf(new Us(e,n,r),t.serverCache)}function hR(t,e,n,r){return jf(t.eventCache,new Us(e,n,r))}function a_(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function js(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xm;const Vj=()=>(xm||(xm=new pr(IU)),xm);class We{constructor(e,n=Vj()){this.value=e,this.children=n}static fromObject(e){let n=new We(null);return yn(e,(r,i)=>{n=n.set(new De(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ae(),value:this.value};if(pe(e))return null;{const r=fe(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(Fe(e),n);return s!=null?{path:_t(new De(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(pe(e))return this;{const n=fe(e),r=this.children.get(n);return r!==null?r.subtree(Fe(e)):new We(null)}}set(e,n){if(pe(e))return new We(n,this.children);{const r=fe(e),s=(this.children.get(r)||new We(null)).set(Fe(e),n),o=this.children.insert(r,s);return new We(this.value,o)}}remove(e){if(pe(e))return this.children.isEmpty()?new We(null):new We(null,this.children);{const n=fe(e),r=this.children.get(n);if(r){const i=r.remove(Fe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new We(null):new We(this.value,s)}else return this}}get(e){if(pe(e))return this.value;{const n=fe(e),r=this.children.get(n);return r?r.get(Fe(e)):null}}setTree(e,n){if(pe(e))return n;{const r=fe(e),s=(this.children.get(r)||new We(null)).setTree(Fe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new We(this.value,o)}}fold(e){return this.fold_(Ae(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(_t(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Ae(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(pe(e))return null;{const s=fe(e),o=this.children.get(s);return o?o.findOnPath_(Fe(e),_t(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ae(),n)}foreachOnPath_(e,n,r){if(pe(e))return this;{this.value&&r(n,this.value);const i=fe(e),s=this.children.get(i);return s?s.foreachOnPath_(Fe(e),_t(n,i),r):new We(null)}}foreach(e){this.foreach_(Ae(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(_t(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.writeTree_=e}static empty(){return new tr(new We(null))}}function Bl(t,e,n){if(pe(e))return new tr(new We(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=fn(i,e);return s=s.updateChild(o,n),new tr(t.writeTree_.set(i,s))}else{const i=new We(n),s=t.writeTree_.setTree(e,i);return new tr(s)}}}function i1(t,e,n){let r=t;return yn(n,(i,s)=>{r=Bl(r,_t(e,i),s)}),r}function s1(t,e){if(pe(e))return tr.empty();{const n=t.writeTree_.setTree(e,new We(null));return new tr(n)}}function l_(t,e){return Ys(t,e)!=null}function Ys(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(fn(n.path,e)):null}function o1(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(rt,(r,i)=>{e.push(new he(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new he(r,i.value))}),e}function zi(t,e){if(pe(e))return t;{const n=Ys(t,e);return n!=null?new tr(new We(n)):new tr(t.writeTree_.subtree(e))}}function u_(t){return t.writeTree_.isEmpty()}function fa(t,e){return dR(Ae(),t.writeTree_,e)}function dR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(H(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=dR(_t(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(_t(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t,e){return gR(e,t)}function Uj(t,e,n,r,i){H(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Bl(t.visibleWrites,e,n)),t.lastWriteId=r}function jj(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function $j(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);H(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&zj(a,r.path)?i=!1:Qn(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Bj(t),!0;if(r.snap)t.visibleWrites=s1(t.visibleWrites,r.path);else{const a=r.children;yn(a,l=>{t.visibleWrites=s1(t.visibleWrites,_t(r.path,l))})}return!0}else return!1}function zj(t,e){if(t.snap)return Qn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Qn(_t(t.path,n),e))return!0;return!1}function Bj(t){t.visibleWrites=fR(t.allWrites,Wj,Ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Wj(t){return t.visible}function fR(t,e,n){let r=tr.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Qn(n,o)?(a=fn(n,o),r=Bl(r,a,s.snap)):Qn(o,n)&&(a=fn(o,n),r=Bl(r,Ae(),s.snap.getChild(a)));else if(s.children){if(Qn(n,o))a=fn(n,o),r=i1(r,a,s.children);else if(Qn(o,n))if(a=fn(o,n),pe(a))r=i1(r,Ae(),s.children);else{const l=ua(s.children,fe(a));if(l){const c=l.getChild(Fe(a));r=Bl(r,Ae(),c)}}}else throw ba("WriteRecord should have .snap or .children")}}return r}function pR(t,e,n,r,i){if(!r&&!i){const s=Ys(t.visibleWrites,e);if(s!=null)return s;{const o=zi(t.visibleWrites,e);if(u_(o))return n;if(n==null&&!l_(o,Ae()))return null;{const a=n||oe.EMPTY_NODE;return fa(o,a)}}}else{const s=zi(t.visibleWrites,e);if(!i&&u_(s))return n;if(!i&&n==null&&!l_(s,Ae()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(Qn(c.path,e)||Qn(e,c.path))},a=fR(t.allWrites,o,e),l=n||oe.EMPTY_NODE;return fa(a,l)}}}function Hj(t,e,n){let r=oe.EMPTY_NODE;const i=Ys(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(rt,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=zi(t.visibleWrites,e);return n.forEachChild(rt,(o,a)=>{const l=fa(zi(s,new De(o)),a);r=r.updateImmediateChild(o,l)}),o1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=zi(t.visibleWrites,e);return o1(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function qj(t,e,n,r,i){H(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=_t(e,n);if(l_(t.visibleWrites,s))return null;{const o=zi(t.visibleWrites,s);return u_(o)?i.getChild(n):fa(o,i.getChild(n))}}function Gj(t,e,n,r){const i=_t(e,n),s=Ys(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=zi(t.visibleWrites,i);return fa(o,r.getNode().getImmediateChild(n))}else return null}function Kj(t,e){return Ys(t.visibleWrites,e)}function Qj(t,e,n,r,i,s,o){let a;const l=zi(t.visibleWrites,e),c=Ys(l,Ae());if(c!=null)a=c;else if(n!=null)a=fa(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),p=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=p.getNext();for(;_&&h.length<i;)d(_,r)!==0&&h.push(_),_=p.getNext();return h}else return[]}function Yj(){return{visibleWrites:tr.empty(),allWrites:[],lastWriteId:-1}}function Ld(t,e,n,r){return pR(t.writeTree,t.treePath,e,n,r)}function Cv(t,e){return Hj(t.writeTree,t.treePath,e)}function a1(t,e,n,r){return qj(t.writeTree,t.treePath,e,n,r)}function Md(t,e){return Kj(t.writeTree,_t(t.treePath,e))}function Xj(t,e,n,r,i,s){return Qj(t.writeTree,t.treePath,e,n,r,i,s)}function xv(t,e,n){return Gj(t.writeTree,t.treePath,e,n)}function mR(t,e){return gR(_t(t.treePath,e),t.writeTree)}function gR(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jj{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;H(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),H(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,wu(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,vu(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,da(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,wu(r,e.snapshotNode,i.oldSnap));else throw ba("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zj{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const _R=new Zj;class Av{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Us(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xv(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:js(this.viewCache_),s=Xj(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e3(t){return{filter:t}}function t3(t,e){H(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function n3(t,e,n,r,i){const s=new Jj;let o,a;if(n.type===Yn.OVERWRITE){const c=n;c.source.fromUser?o=c_(t,e,c.path,c.snap,r,i,s):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!pe(c.path),o=Fd(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===Yn.MERGE){const c=n;c.source.fromUser?o=i3(t,e,c.path,c.children,r,i,s):(H(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=h_(t,e,c.path,c.children,r,i,a,s))}else if(n.type===Yn.ACK_USER_WRITE){const c=n;c.revert?o=a3(t,e,c.path,r,i,s):o=s3(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===Yn.LISTEN_COMPLETE)o=o3(t,e,n.path,r,s);else throw ba("Unknown operation type: "+n.type);const l=s.getChanges();return r3(e,o,l),{viewCache:o,changes:l}}function r3(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=a_(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(lR(a_(e)))}}function yR(t,e,n,r,i,s){const o=e.eventCache;if(Md(r,n)!=null)return e;{let a,l;if(pe(n))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=js(e),h=c instanceof oe?c:oe.EMPTY_NODE,d=Cv(r,h);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=Ld(r,js(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=fe(n);if(c===".priority"){H(Gi(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=a1(r,n,h,l);d!=null?a=t.filter.updatePriority(h,d):a=o.getNode()}else{const h=Fe(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const p=a1(r,n,o.getNode(),l);p!=null?d=o.getNode().getImmediateChild(c).updateChild(h,p):d=o.getNode().getImmediateChild(c)}else d=xv(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,h,i,s):a=o.getNode()}}return zl(e,a,o.isFullyInitialized()||pe(n),t.filter.filtersNodes())}}function Fd(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const h=o?t.filter:t.filter.getIndexedFilter();if(pe(n))c=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);c=h.updateFullNode(l.getNode(),_,null)}else{const _=fe(n);if(!l.isCompleteForPath(n)&&Gi(n)>1)return e;const v=Fe(n),k=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?c=h.updatePriority(l.getNode(),k):c=h.updateChild(l.getNode(),_,k,v,_R,null)}const d=hR(e,c,l.isFullyInitialized()||pe(n),h.filtersNodes()),p=new Av(i,d,s);return yR(t,d,n,i,p,a)}function c_(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const h=new Av(i,e,s);if(pe(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=zl(e,c,!0,t.filter.filtersNodes());else{const d=fe(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=zl(e,c,a.isFullyInitialized(),a.isFiltered());else{const p=Fe(n),_=a.getNode().getImmediateChild(d);let v;if(pe(p))v=r;else{const I=h.getCompleteChild(d);I!=null?ZA(p)===".priority"&&I.getChild(tR(p)).isEmpty()?v=I:v=I.updateChild(p,r):v=oe.EMPTY_NODE}if(_.equals(v))l=e;else{const I=t.filter.updateChild(a.getNode(),d,v,p,h,o);l=zl(e,I,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function l1(t,e){return t.eventCache.isCompleteForChild(e)}function i3(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const h=_t(n,l);l1(e,fe(h))&&(a=c_(t,a,h,c,i,s,o))}),r.foreach((l,c)=>{const h=_t(n,l);l1(e,fe(h))||(a=c_(t,a,h,c,i,s,o))}),a}function u1(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function h_(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;pe(n)?c=r:c=new We(null).setTree(n,r);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,p)=>{if(h.hasChild(d)){const _=e.serverCache.getNode().getImmediateChild(d),v=u1(t,_,p);l=Fd(t,l,new De(d),v,i,s,o,a)}}),c.children.inorderTraversal((d,p)=>{const _=!e.serverCache.isCompleteForChild(d)&&p.value===null;if(!h.hasChild(d)&&!_){const v=e.serverCache.getNode().getImmediateChild(d),I=u1(t,v,p);l=Fd(t,l,new De(d),I,i,s,o,a)}}),l}function s3(t,e,n,r,i,s,o){if(Md(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(pe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Fd(t,e,n,l.getNode().getChild(n),i,s,a,o);if(pe(n)){let c=new We(null);return l.getNode().forEachChild(Go,(h,d)=>{c=c.set(new De(h),d)}),h_(t,e,n,c,i,s,a,o)}else return e}else{let c=new We(null);return r.foreach((h,d)=>{const p=_t(n,h);l.isCompleteForPath(p)&&(c=c.set(h,l.getNode().getChild(p)))}),h_(t,e,n,c,i,s,a,o)}}function o3(t,e,n,r,i){const s=e.serverCache,o=hR(e,s.getNode(),s.isFullyInitialized()||pe(n),s.isFiltered());return yR(t,o,n,r,_R,i)}function a3(t,e,n,r,i,s){let o;if(Md(r,n)!=null)return e;{const a=new Av(r,e,i),l=e.eventCache.getNode();let c;if(pe(n)||fe(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Ld(r,js(e));else{const d=e.serverCache.getNode();H(d instanceof oe,"serverChildren would be complete if leaf node"),h=Cv(r,d)}h=h,c=t.filter.updateFullNode(l,h,s)}else{const h=fe(n);let d=xv(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=t.filter.updateChild(l,h,d,Fe(n),a,s):e.eventCache.getNode().hasChild(h)?c=t.filter.updateChild(l,h,oe.EMPTY_NODE,Fe(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ld(r,js(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Md(r,Ae())!=null,zl(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new wv(r.getIndex()),s=Aj(r);this.processor_=e3(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(oe.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(oe.EMPTY_NODE,a.getNode(),null),h=new Us(l,o.isFullyInitialized(),i.filtersNodes()),d=new Us(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=jf(d,h),this.eventGenerator_=new Dj(this.query_)}get query(){return this.query_}}function u3(t){return t.viewCache_.serverCache.getNode()}function c3(t,e){const n=js(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!pe(e)&&!n.getImmediateChild(fe(e)).isEmpty())?n.getChild(e):null}function c1(t){return t.eventRegistrations_.length===0}function h3(t,e){t.eventRegistrations_.push(e)}function h1(t,e,n){const r=[];if(n){H(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function d1(t,e,n,r){e.type===Yn.MERGE&&e.source.queryId!==null&&(H(js(t.viewCache_),"We should always have a full cache before handling merges"),H(a_(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=n3(t.processor_,i,e,n,r);return t3(t.processor_,s.viewCache),H(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,vR(t,s.changes,s.viewCache.eventCache.getNode(),null)}function d3(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(rt,(s,o)=>{r.push(da(s,o))}),n.isFullyInitialized()&&r.push(lR(n.getNode())),vR(t,r,n.getNode(),e)}function vR(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Lj(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vd;class f3{constructor(){this.views=new Map}}function p3(t){H(!Vd,"__referenceConstructor has already been defined"),Vd=t}function m3(){return H(Vd,"Reference.ts has not been loaded"),Vd}function g3(t){return t.views.size===0}function Rv(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return H(s!=null,"SyncTree gave us an op for an invalid query."),d1(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(d1(o,e,n,r));return s}}function _3(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ld(n,i?r:null),l=!1;a?l=!0:r instanceof oe?(a=Cv(n,r),l=!1):(a=oe.EMPTY_NODE,l=!1);const c=jf(new Us(a,l,!1),new Us(r,i,!1));return new l3(e,c)}return o}function y3(t,e,n,r,i,s){const o=_3(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),h3(o,n),d3(o,n)}function v3(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Ki(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(h1(c,n,r)),c1(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(h1(l,n,r)),c1(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Ki(t)&&s.push(new(m3())(e._repo,e._path)),{removed:s,events:o}}function wR(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ko(t,e){let n=null;for(const r of t.views.values())n=n||c3(r,e);return n}function ER(t,e){if(e._queryParams.loadsAllData())return $f(t);{const r=e._queryIdentifier;return t.views.get(r)}}function TR(t,e){return ER(t,e)!=null}function Ki(t){return $f(t)!=null}function $f(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ud;function w3(t){H(!Ud,"__referenceConstructor has already been defined"),Ud=t}function E3(){return H(Ud,"Reference.ts has not been loaded"),Ud}let T3=1;class f1{constructor(e){this.listenProvider_=e,this.syncPointTree_=new We(null),this.pendingWriteTree_=Yj(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function I3(t,e,n,r,i){return Uj(t.pendingWriteTree_,e,n,r,i),i?ec(t,new Vs(cR(),e,n)):[]}function Lo(t,e,n=!1){const r=jj(t.pendingWriteTree_,e);if($j(t.pendingWriteTree_,e)){let s=new We(null);return r.snap!=null?s=s.set(Ae(),!0):yn(r.children,o=>{s=s.set(new De(o),!0)}),ec(t,new Dd(r.path,s,n))}else return[]}function zf(t,e,n){return ec(t,new Vs(Tv(),e,n))}function S3(t,e,n){const r=We.fromObject(n);return ec(t,new Iu(Tv(),e,r))}function C3(t,e){return ec(t,new Tu(Tv(),e))}function x3(t,e,n){const r=kv(t,n);if(r){const i=Pv(r),s=i.path,o=i.queryId,a=fn(s,e),l=new Tu(Iv(o),a);return bv(t,s,l)}else return[]}function d_(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||TR(o,e))){const l=v3(o,e,n,r);g3(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(p=>p._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(p,_)=>Ki(_));if(h&&!d){const p=t.syncPointTree_.subtree(s);if(!p.isEmpty()){const _=k3(p);for(let v=0;v<_.length;++v){const I=_[v],k=I.query,w=xR(t,I);t.listenProvider_.startListening(Wl(k),jd(t,k),w.hashFn,w.onComplete)}}}!d&&c.length>0&&!r&&(h?t.listenProvider_.stopListening(Wl(e),null):c.forEach(p=>{const _=t.queryToTagMap.get(Bf(p));t.listenProvider_.stopListening(Wl(p),_)}))}P3(t,c)}return a}function A3(t,e,n,r){const i=kv(t,r);if(i!=null){const s=Pv(i),o=s.path,a=s.queryId,l=fn(o,e),c=new Vs(Iv(a),l,n);return bv(t,o,c)}else return[]}function R3(t,e,n,r){const i=kv(t,r);if(i){const s=Pv(i),o=s.path,a=s.queryId,l=fn(o,e),c=We.fromObject(n),h=new Iu(Iv(a),l,c);return bv(t,o,h)}else return[]}function p1(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(p,_)=>{const v=fn(p,i);s=s||Ko(_,v),o=o||Ki(_)});let a=t.syncPointTree_.get(i);a?(o=o||Ki(a),s=s||Ko(a,Ae())):(a=new f3,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=oe.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const I=Ko(v,Ae());I&&(s=s.updateImmediateChild(_,I))}));const c=TR(a,e);if(!c&&!e._queryParams.loadsAllData()){const p=Bf(e);H(!t.queryToTagMap.has(p),"View does not exist, but we have a tag");const _=b3();t.queryToTagMap.set(p,_),t.tagToQueryMap.set(_,p)}const h=Sv(t.pendingWriteTree_,i);let d=y3(a,e,n,h,s,l);if(!c&&!o&&!r){const p=ER(a,e);d=d.concat(N3(t,e,p))}return d}function IR(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=fn(o,e),c=Ko(a,l);if(c)return c});return pR(i,e,s,n,!0)}function ec(t,e){return SR(e,t.syncPointTree_,null,Sv(t.pendingWriteTree_,Ae()))}function SR(t,e,n,r){if(pe(t.path))return CR(t,e,n,r);{const i=e.get(Ae());n==null&&i!=null&&(n=Ko(i,Ae()));let s=[];const o=fe(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,h=mR(r,o);s=s.concat(SR(a,l,c,h))}return i&&(s=s.concat(Rv(i,t,r,n))),s}}function CR(t,e,n,r){const i=e.get(Ae());n==null&&i!=null&&(n=Ko(i,Ae()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=mR(r,o),h=t.operationForChild(o);h&&(s=s.concat(CR(h,a,l,c)))}),i&&(s=s.concat(Rv(i,t,r,n))),s}function xR(t,e){const n=e.query,r=jd(t,n);return{hashFn:()=>(u3(e)||oe.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?x3(t,n._path,r):C3(t,n._path);{const s=xU(i,n);return d_(t,n,null,s)}}}}function jd(t,e){const n=Bf(e);return t.queryToTagMap.get(n)}function Bf(t){return t._path.toString()+"$"+t._queryIdentifier}function kv(t,e){return t.tagToQueryMap.get(e)}function Pv(t){const e=t.indexOf("$");return H(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new De(t.substr(0,e))}}function bv(t,e,n){const r=t.syncPointTree_.get(e);H(r,"Missing sync point for query tag that we're tracking");const i=Sv(t.pendingWriteTree_,e);return Rv(r,n,i,null)}function k3(t){return t.fold((e,n,r)=>{if(n&&Ki(n))return[$f(n)];{let i=[];return n&&(i=wR(n)),yn(r,(s,o)=>{i=i.concat(o)}),i}})}function Wl(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(E3())(t._repo,t._path):t}function P3(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Bf(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function b3(){return T3++}function N3(t,e,n){const r=e._path,i=jd(t,e),s=xR(t,n),o=t.listenProvider_.startListening(Wl(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)H(!Ki(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!pe(c)&&h&&Ki(h))return[$f(h).query];{let p=[];return h&&(p=p.concat(wR(h).map(_=>_.query))),yn(d,(_,v)=>{p=p.concat(v)}),p}});for(let c=0;c<l.length;++c){const h=l[c];t.listenProvider_.stopListening(Wl(h),jd(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Nv(n)}node(){return this.node_}}class Ov{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=_t(this.path_,e);return new Ov(this.syncTree_,n)}node(){return IR(this.syncTree_,this.path_)}}const O3=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},m1=function(t,e,n){if(!t||typeof t!="object")return t;if(H(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return D3(t[".sv"],e,n);if(typeof t[".sv"]=="object")return L3(t[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},D3=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:H(!1,"Unexpected server value: "+t)}},L3=function(t,e,n){t.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&H(!1,"Unexpected increment value: "+r);const i=e.node();if(H(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},M3=function(t,e,n,r){return Dv(e,new Ov(n,t),r)},F3=function(t,e,n){return Dv(t,new Nv(e),n)};function Dv(t,e,n){const r=t.getPriority().val(),i=m1(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=m1(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new It(a,Qt(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new It(i))),o.forEachChild(rt,(a,l)=>{const c=Dv(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Mv(t,e){let n=e instanceof De?e:new De(e),r=t,i=fe(n);for(;i!==null;){const s=ua(r.node.children,i)||{children:{},childCount:0};r=new Lv(i,r,s),n=Fe(n),i=fe(n)}return r}function La(t){return t.node.value}function AR(t,e){t.node.value=e,f_(t)}function RR(t){return t.node.childCount>0}function V3(t){return La(t)===void 0&&!RR(t)}function Wf(t,e){yn(t.node.children,(n,r)=>{e(new Lv(n,t,r))})}function kR(t,e,n,r){n&&!r&&e(t),Wf(t,i=>{kR(i,e,!0,r)}),n&&r&&e(t)}function U3(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function tc(t){return new De(t.parent===null?t.name:tc(t.parent)+"/"+t.name)}function f_(t){t.parent!==null&&j3(t.parent,t.name,t)}function j3(t,e,n){const r=V3(n),i=si(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,f_(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,f_(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $3=/[\[\].#$\/\u0000-\u001F\u007F]/,z3=/[\[\].#$\u0000-\u001F\u007F]/,Am=10*1024*1024,PR=function(t){return typeof t=="string"&&t.length!==0&&!$3.test(t)},bR=function(t){return typeof t=="string"&&t.length!==0&&!z3.test(t)},B3=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bR(t)},NR=function(t,e,n){const r=n instanceof De?new sj(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fs(r));if(typeof e=="function")throw new Error(t+"contains a function "+fs(r)+" with contents = "+e.toString());if(NA(e))throw new Error(t+"contains "+e.toString()+" "+fs(r));if(typeof e=="string"&&e.length>Am/3&&Nf(e)>Am)throw new Error(t+"contains a string greater than "+Am+" utf8 bytes "+fs(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(yn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!PR(o)))throw new Error(t+" contains an invalid key ("+o+") "+fs(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);oj(r,o),NR(t,a,r),aj(r)}),i&&s)throw new Error(t+' contains ".value" child '+fs(r)+" in addition to actual children.")}},OR=function(t,e,n,r){if(!(r&&n===void 0)&&!bR(n))throw new Error(Bx(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},W3=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OR(t,e,n,r)},H3=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!PR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!B3(n))throw new Error(Bx(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q3{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function DR(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!_v(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function LR(t,e,n){DR(t,n),MR(t,r=>_v(r,e))}function Xs(t,e,n){DR(t,n),MR(t,r=>Qn(r,e)||Qn(e,r))}function MR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(G3(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function G3(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();As&&Kt("event: "+n.toString()),Ju(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3="repo_interrupt",Q3=25;class Y3{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new q3,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Od(),this.transactionQueueTree_=new Lv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function X3(t,e,n){if(t.stats_=mv(t.repoInfo_),t.forceRestClient_||PU())t.server_=new Nd(t.repoInfo_,(r,i,s,o)=>{g1(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_1(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Rt(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Gr(t.repoInfo_,e,(r,i,s,o)=>{g1(t,r,i,s,o)},r=>{_1(t,r)},r=>{Z3(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=LU(t.repoInfo_,()=>new Oj(t.stats_,t.server_)),t.infoData_=new Rj,t.infoSyncTree_=new f1({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=zf(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Fv(t,"connected",!1),t.serverSyncTree_=new f1({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Xs(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function J3(t){const n=t.infoData_.getNode(new De(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function FR(t){return O3({timestamp:J3(t)})}function g1(t,e,n,r,i){t.dataUpdateCount++;const s=new De(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Td(n,c=>Qt(c));o=R3(t.serverSyncTree_,s,l,i)}else{const l=Qt(n);o=A3(t.serverSyncTree_,s,l,i)}else if(r){const l=Td(n,c=>Qt(c));o=S3(t.serverSyncTree_,s,l)}else{const l=Qt(n);o=zf(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Uv(t,s)),Xs(t.eventQueue_,a,o)}function _1(t,e){Fv(t,"connected",e),e===!1&&t$(t)}function Z3(t,e){yn(e,(n,r)=>{Fv(t,n,r)})}function Fv(t,e,n){const r=new De("/.info/"+e),i=Qt(n);t.infoData_.updateSnapshot(r,i);const s=zf(t.infoSyncTree_,r,i);Xs(t.eventQueue_,r,s)}function e$(t){return t.nextWriteId_++}function t$(t){VR(t,"onDisconnectEvents");const e=FR(t),n=Od();o_(t.onDisconnect_,Ae(),(i,s)=>{const o=M3(i,s,t.serverSyncTree_,e);uR(n,i,o)});let r=[];o_(n,Ae(),(i,s)=>{r=r.concat(zf(t.serverSyncTree_,i,s));const o=o$(t,i);Uv(t,o)}),t.onDisconnect_=Od(),Xs(t.eventQueue_,Ae(),r)}function n$(t,e,n){let r;fe(e._path)===".info"?r=p1(t.infoSyncTree_,e,n):r=p1(t.serverSyncTree_,e,n),LR(t.eventQueue_,e._path,r)}function y1(t,e,n){let r;fe(e._path)===".info"?r=d_(t.infoSyncTree_,e,n):r=d_(t.serverSyncTree_,e,n),LR(t.eventQueue_,e._path,r)}function r$(t){t.persistentConnection_&&t.persistentConnection_.interrupt(K3)}function VR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Kt(n,...e)}function UR(t,e,n){return IR(t.serverSyncTree_,e,n)||oe.EMPTY_NODE}function Vv(t,e=t.transactionQueueTree_){if(e||Hf(t,e),La(e)){const n=$R(t,e);H(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&i$(t,tc(e),n)}else RR(e)&&Wf(e,n=>{Vv(t,n)})}function i$(t,e,n){const r=n.map(c=>c.currentWriteId),i=UR(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const h=n[c];H(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=fn(e,h.path);s=s.updateChild(d,h.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{VR(t,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(Lo(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&d.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Hf(t,Mv(t.transactionQueueTree_,e)),Vv(t,t.transactionQueueTree_),Xs(t.eventQueue_,e,h);for(let p=0;p<d.length;p++)Ju(d[p])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{An("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Uv(t,e)}},o)}function Uv(t,e){const n=jR(t,e),r=tc(n),i=$R(t,n);return s$(t,i,r),r}function s$(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=fn(n,l.path);let h=!1,d;if(H(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(Lo(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Q3)h=!0,d="maxretry",i=i.concat(Lo(t.serverSyncTree_,l.currentWriteId,!0));else{const p=UR(t,l.path,o);l.currentInputSnapshot=p;const _=e[a].update(p.val());if(_!==void 0){NR("transaction failed: Data returned ",_,l.path);let v=Qt(_);typeof _=="object"&&_!=null&&si(_,".priority")||(v=v.updatePriority(p.getPriority()));const k=l.currentWriteId,w=FR(t),g=F3(v,p,w);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=g,l.currentWriteId=e$(t),o.splice(o.indexOf(k),1),i=i.concat(I3(t.serverSyncTree_,l.path,g,l.currentWriteId,l.applyLocally)),i=i.concat(Lo(t.serverSyncTree_,k,!0))}else h=!0,d="nodata",i=i.concat(Lo(t.serverSyncTree_,l.currentWriteId,!0))}Xs(t.eventQueue_,n,i),i=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Hf(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ju(r[a]);Vv(t,t.transactionQueueTree_)}function jR(t,e){let n,r=t.transactionQueueTree_;for(n=fe(e);n!==null&&La(r)===void 0;)r=Mv(r,n),e=Fe(e),n=fe(e);return r}function $R(t,e){const n=[];return zR(t,e,n),n.sort((r,i)=>r.order-i.order),n}function zR(t,e,n){const r=La(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Wf(e,i=>{zR(t,i,n)})}function Hf(t,e){const n=La(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,AR(e,n.length>0?n:void 0)}Wf(e,r=>{Hf(t,r)})}function o$(t,e){const n=tc(jR(t,e)),r=Mv(t.transactionQueueTree_,e);return U3(r,i=>{Rm(t,i)}),Rm(t,r),kR(r,i=>{Rm(t,i)}),n}function Rm(t,e){const n=La(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(H(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(H(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Lo(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?AR(e,void 0):n.length=s+1,Xs(t.eventQueue_,tc(e),i);for(let o=0;o<r.length;o++)Ju(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a$(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function l$(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):An(`Invalid query segment '${n}' in query '${t}'`)}return e}const v1=function(t,e){const n=u$(t),r=n.namespace;n.domain==="firebase.com"&&ei(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ei("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||EU();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new WA(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new De(n.pathString)}},u$=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let h=t.indexOf("/");h===-1&&(h=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(h,d)),h<d&&(i=a$(t.substring(h,d)));const p=l$(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const _=e.slice(0,c);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in p&&(s=p.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class c${constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jv{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return pe(this._path)?null:ZA(this._path)}get ref(){return new ai(this._repo,this._path)}get _queryIdentifier(){const e=n1(this._queryParams),n=fv(e);return n==="{}"?"default":n}get _queryObject(){return n1(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof jv))return!1;const n=this._repo===e._repo,r=_v(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ij(this._path)}}class ai extends jv{constructor(e,n){super(e,n,new Ev,!1)}get parent(){const e=tR(this._path);return e===null?null:new ai(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Su{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new De(e),r=$d(this.ref,e);return new Su(this._node.getChild(n),r,rt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Su(i,$d(this.ref,r),rt)))}hasChild(e){const n=new De(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function h$(t,e){return t=Xe(t),t._checkNotDeleted("ref"),e!==void 0?$d(t._root,e):t._root}function $d(t,e){return t=Xe(t),fe(t._path)===null?W3("child","path",e,!1):OR("child","path",e,!1),new ai(t._repo,_t(t._path,e))}class $v{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new BR("value",this,new Su(e.snapshotNode,new ai(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WR(this,e,n):null}matches(e){return e instanceof $v?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class zv{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new WR(this,e,n):null}createEvent(e,n){H(e.childName!=null,"Child events should have a childName.");const r=$d(new ai(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new BR(e.type,this,new Su(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof zv?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function d$(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(h,d)=>{y1(t._repo,t,a),l(h,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new c$(n,s||void 0),a=e==="value"?new $v(o):new zv(e,o);return n$(t._repo,t,a),()=>y1(t._repo,t,a)}function f$(t,e,n,r){return d$(t,"value",e,n,r)}p3(ai);w3(ai);/**
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
 */const p$="FIREBASE_DATABASE_EMULATOR_HOST",p_={};let m$=!1;function g$(t,e,n,r){t.repoInfo_=new WA(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function _$(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||ei("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Kt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=v1(s,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[p$]),c?(l=!0,s=`http://${c}?ns=${a.namespace}`,o=v1(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const h=i&&l?new qo(qo.OWNER):new NU(t.name,t.options,e);H3("Invalid Firebase Database URL",o),pe(o.path)||ei("Database URL must point to the root of a Firebase Database (not including a child path).");const d=v$(a,t,h,new bU(t.name,n));return new w$(d,t)}function y$(t,e){const n=p_[e];(!n||n[t.key]!==t)&&ei(`Database ${e}(${t.repoInfo_}) has already been deleted.`),r$(t),delete n[t.key]}function v$(t,e,n,r){let i=p_[e.name];i||(i={},p_[e.name]=i);let s=i[t.toURLString()];return s&&ei("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Y3(t,m$,n,r),i[t.toURLString()]=s,s}class w${constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(X3(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ai(this._repo,Ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(y$(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ei("Cannot call "+e+" on a deleted database.")}}function E$(t=Df(),e){const n=Wu(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=ev("database");r&&T$(n,...r)}return n}function T$(t,e,n,r={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ei("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ei('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new qo(qo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:nv(r.mockUserToken,t.app.options.projectId);s=new qo(o)}g$(i,e,n,s)}/**
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
 */function I$(t){gU(ns),qi(new Jr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return _$(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Fn(UT,jT,t),Fn(UT,jT,"esm2017")}Gr.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Gr.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};I$();var w1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rs,HR;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,T){function C(){}C.prototype=T.prototype,E.D=T.prototype,E.prototype=new C,E.prototype.constructor=E,E.C=function(A,P,b){for(var x=Array(arguments.length-2),de=2;de<arguments.length;de++)x[de-2]=arguments[de];return T.prototype[P].apply(A,x)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,T,C){C||(C=0);var A=Array(16);if(typeof T=="string")for(var P=0;16>P;++P)A[P]=T.charCodeAt(C++)|T.charCodeAt(C++)<<8|T.charCodeAt(C++)<<16|T.charCodeAt(C++)<<24;else for(P=0;16>P;++P)A[P]=T[C++]|T[C++]<<8|T[C++]<<16|T[C++]<<24;T=E.g[0],C=E.g[1],P=E.g[2];var b=E.g[3],x=T+(b^C&(P^b))+A[0]+3614090360&4294967295;T=C+(x<<7&4294967295|x>>>25),x=b+(P^T&(C^P))+A[1]+3905402710&4294967295,b=T+(x<<12&4294967295|x>>>20),x=P+(C^b&(T^C))+A[2]+606105819&4294967295,P=b+(x<<17&4294967295|x>>>15),x=C+(T^P&(b^T))+A[3]+3250441966&4294967295,C=P+(x<<22&4294967295|x>>>10),x=T+(b^C&(P^b))+A[4]+4118548399&4294967295,T=C+(x<<7&4294967295|x>>>25),x=b+(P^T&(C^P))+A[5]+1200080426&4294967295,b=T+(x<<12&4294967295|x>>>20),x=P+(C^b&(T^C))+A[6]+2821735955&4294967295,P=b+(x<<17&4294967295|x>>>15),x=C+(T^P&(b^T))+A[7]+4249261313&4294967295,C=P+(x<<22&4294967295|x>>>10),x=T+(b^C&(P^b))+A[8]+1770035416&4294967295,T=C+(x<<7&4294967295|x>>>25),x=b+(P^T&(C^P))+A[9]+2336552879&4294967295,b=T+(x<<12&4294967295|x>>>20),x=P+(C^b&(T^C))+A[10]+4294925233&4294967295,P=b+(x<<17&4294967295|x>>>15),x=C+(T^P&(b^T))+A[11]+2304563134&4294967295,C=P+(x<<22&4294967295|x>>>10),x=T+(b^C&(P^b))+A[12]+1804603682&4294967295,T=C+(x<<7&4294967295|x>>>25),x=b+(P^T&(C^P))+A[13]+4254626195&4294967295,b=T+(x<<12&4294967295|x>>>20),x=P+(C^b&(T^C))+A[14]+2792965006&4294967295,P=b+(x<<17&4294967295|x>>>15),x=C+(T^P&(b^T))+A[15]+1236535329&4294967295,C=P+(x<<22&4294967295|x>>>10),x=T+(P^b&(C^P))+A[1]+4129170786&4294967295,T=C+(x<<5&4294967295|x>>>27),x=b+(C^P&(T^C))+A[6]+3225465664&4294967295,b=T+(x<<9&4294967295|x>>>23),x=P+(T^C&(b^T))+A[11]+643717713&4294967295,P=b+(x<<14&4294967295|x>>>18),x=C+(b^T&(P^b))+A[0]+3921069994&4294967295,C=P+(x<<20&4294967295|x>>>12),x=T+(P^b&(C^P))+A[5]+3593408605&4294967295,T=C+(x<<5&4294967295|x>>>27),x=b+(C^P&(T^C))+A[10]+38016083&4294967295,b=T+(x<<9&4294967295|x>>>23),x=P+(T^C&(b^T))+A[15]+3634488961&4294967295,P=b+(x<<14&4294967295|x>>>18),x=C+(b^T&(P^b))+A[4]+3889429448&4294967295,C=P+(x<<20&4294967295|x>>>12),x=T+(P^b&(C^P))+A[9]+568446438&4294967295,T=C+(x<<5&4294967295|x>>>27),x=b+(C^P&(T^C))+A[14]+3275163606&4294967295,b=T+(x<<9&4294967295|x>>>23),x=P+(T^C&(b^T))+A[3]+4107603335&4294967295,P=b+(x<<14&4294967295|x>>>18),x=C+(b^T&(P^b))+A[8]+1163531501&4294967295,C=P+(x<<20&4294967295|x>>>12),x=T+(P^b&(C^P))+A[13]+2850285829&4294967295,T=C+(x<<5&4294967295|x>>>27),x=b+(C^P&(T^C))+A[2]+4243563512&4294967295,b=T+(x<<9&4294967295|x>>>23),x=P+(T^C&(b^T))+A[7]+1735328473&4294967295,P=b+(x<<14&4294967295|x>>>18),x=C+(b^T&(P^b))+A[12]+2368359562&4294967295,C=P+(x<<20&4294967295|x>>>12),x=T+(C^P^b)+A[5]+4294588738&4294967295,T=C+(x<<4&4294967295|x>>>28),x=b+(T^C^P)+A[8]+2272392833&4294967295,b=T+(x<<11&4294967295|x>>>21),x=P+(b^T^C)+A[11]+1839030562&4294967295,P=b+(x<<16&4294967295|x>>>16),x=C+(P^b^T)+A[14]+4259657740&4294967295,C=P+(x<<23&4294967295|x>>>9),x=T+(C^P^b)+A[1]+2763975236&4294967295,T=C+(x<<4&4294967295|x>>>28),x=b+(T^C^P)+A[4]+1272893353&4294967295,b=T+(x<<11&4294967295|x>>>21),x=P+(b^T^C)+A[7]+4139469664&4294967295,P=b+(x<<16&4294967295|x>>>16),x=C+(P^b^T)+A[10]+3200236656&4294967295,C=P+(x<<23&4294967295|x>>>9),x=T+(C^P^b)+A[13]+681279174&4294967295,T=C+(x<<4&4294967295|x>>>28),x=b+(T^C^P)+A[0]+3936430074&4294967295,b=T+(x<<11&4294967295|x>>>21),x=P+(b^T^C)+A[3]+3572445317&4294967295,P=b+(x<<16&4294967295|x>>>16),x=C+(P^b^T)+A[6]+76029189&4294967295,C=P+(x<<23&4294967295|x>>>9),x=T+(C^P^b)+A[9]+3654602809&4294967295,T=C+(x<<4&4294967295|x>>>28),x=b+(T^C^P)+A[12]+3873151461&4294967295,b=T+(x<<11&4294967295|x>>>21),x=P+(b^T^C)+A[15]+530742520&4294967295,P=b+(x<<16&4294967295|x>>>16),x=C+(P^b^T)+A[2]+3299628645&4294967295,C=P+(x<<23&4294967295|x>>>9),x=T+(P^(C|~b))+A[0]+4096336452&4294967295,T=C+(x<<6&4294967295|x>>>26),x=b+(C^(T|~P))+A[7]+1126891415&4294967295,b=T+(x<<10&4294967295|x>>>22),x=P+(T^(b|~C))+A[14]+2878612391&4294967295,P=b+(x<<15&4294967295|x>>>17),x=C+(b^(P|~T))+A[5]+4237533241&4294967295,C=P+(x<<21&4294967295|x>>>11),x=T+(P^(C|~b))+A[12]+1700485571&4294967295,T=C+(x<<6&4294967295|x>>>26),x=b+(C^(T|~P))+A[3]+2399980690&4294967295,b=T+(x<<10&4294967295|x>>>22),x=P+(T^(b|~C))+A[10]+4293915773&4294967295,P=b+(x<<15&4294967295|x>>>17),x=C+(b^(P|~T))+A[1]+2240044497&4294967295,C=P+(x<<21&4294967295|x>>>11),x=T+(P^(C|~b))+A[8]+1873313359&4294967295,T=C+(x<<6&4294967295|x>>>26),x=b+(C^(T|~P))+A[15]+4264355552&4294967295,b=T+(x<<10&4294967295|x>>>22),x=P+(T^(b|~C))+A[6]+2734768916&4294967295,P=b+(x<<15&4294967295|x>>>17),x=C+(b^(P|~T))+A[13]+1309151649&4294967295,C=P+(x<<21&4294967295|x>>>11),x=T+(P^(C|~b))+A[4]+4149444226&4294967295,T=C+(x<<6&4294967295|x>>>26),x=b+(C^(T|~P))+A[11]+3174756917&4294967295,b=T+(x<<10&4294967295|x>>>22),x=P+(T^(b|~C))+A[2]+718787259&4294967295,P=b+(x<<15&4294967295|x>>>17),x=C+(b^(P|~T))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+T&4294967295,E.g[1]=E.g[1]+(P+(x<<21&4294967295|x>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+b&4294967295}r.prototype.u=function(E,T){T===void 0&&(T=E.length);for(var C=T-this.blockSize,A=this.B,P=this.h,b=0;b<T;){if(P==0)for(;b<=C;)i(this,E,b),b+=this.blockSize;if(typeof E=="string"){for(;b<T;)if(A[P++]=E.charCodeAt(b++),P==this.blockSize){i(this,A),P=0;break}}else for(;b<T;)if(A[P++]=E[b++],P==this.blockSize){i(this,A),P=0;break}}this.h=P,this.o+=T},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var T=1;T<E.length-8;++T)E[T]=0;var C=8*this.o;for(T=E.length-8;T<E.length;++T)E[T]=C&255,C/=256;for(this.u(E),E=Array(16),T=C=0;4>T;++T)for(var A=0;32>A;A+=8)E[C++]=this.g[T]>>>A&255;return E};function s(E,T){var C=a;return Object.prototype.hasOwnProperty.call(C,E)?C[E]:C[E]=T(E)}function o(E,T){this.h=T;for(var C=[],A=!0,P=E.length-1;0<=P;P--){var b=E[P]|0;A&&b==T||(C[P]=b,A=!1)}this.g=C}var a={};function l(E){return-128<=E&&128>E?s(E,function(T){return new o([T|0],0>T?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return d;if(0>E)return k(c(-E));for(var T=[],C=1,A=0;E>=C;A++)T[A]=E/C|0,C*=4294967296;return new o(T,0)}function h(E,T){if(E.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(E.charAt(0)=="-")return k(h(E.substring(1),T));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=c(Math.pow(T,8)),A=d,P=0;P<E.length;P+=8){var b=Math.min(8,E.length-P),x=parseInt(E.substring(P,P+b),T);8>b?(b=c(Math.pow(T,b)),A=A.j(b).add(c(x))):(A=A.j(C),A=A.add(c(x)))}return A}var d=l(0),p=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(I(this))return-k(this).m();for(var E=0,T=1,C=0;C<this.g.length;C++){var A=this.i(C);E+=(0<=A?A:4294967296+A)*T,T*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(v(this))return"0";if(I(this))return"-"+k(this).toString(E);for(var T=c(Math.pow(E,6)),C=this,A="";;){var P=O(C,T).g;C=w(C,P.j(T));var b=((0<C.g.length?C.g[0]:C.h)>>>0).toString(E);if(C=P,v(C))return b+A;for(;6>b.length;)b="0"+b;A=b+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function v(E){if(E.h!=0)return!1;for(var T=0;T<E.g.length;T++)if(E.g[T]!=0)return!1;return!0}function I(E){return E.h==-1}t.l=function(E){return E=w(this,E),I(E)?-1:v(E)?0:1};function k(E){for(var T=E.g.length,C=[],A=0;A<T;A++)C[A]=~E.g[A];return new o(C,~E.h).add(p)}t.abs=function(){return I(this)?k(this):this},t.add=function(E){for(var T=Math.max(this.g.length,E.g.length),C=[],A=0,P=0;P<=T;P++){var b=A+(this.i(P)&65535)+(E.i(P)&65535),x=(b>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);A=x>>>16,b&=65535,x&=65535,C[P]=x<<16|b}return new o(C,C[C.length-1]&-2147483648?-1:0)};function w(E,T){return E.add(k(T))}t.j=function(E){if(v(this)||v(E))return d;if(I(this))return I(E)?k(this).j(k(E)):k(k(this).j(E));if(I(E))return k(this.j(k(E)));if(0>this.l(_)&&0>E.l(_))return c(this.m()*E.m());for(var T=this.g.length+E.g.length,C=[],A=0;A<2*T;A++)C[A]=0;for(A=0;A<this.g.length;A++)for(var P=0;P<E.g.length;P++){var b=this.i(A)>>>16,x=this.i(A)&65535,de=E.i(P)>>>16,Le=E.i(P)&65535;C[2*A+2*P]+=x*Le,g(C,2*A+2*P),C[2*A+2*P+1]+=b*Le,g(C,2*A+2*P+1),C[2*A+2*P+1]+=x*de,g(C,2*A+2*P+1),C[2*A+2*P+2]+=b*de,g(C,2*A+2*P+2)}for(A=0;A<T;A++)C[A]=C[2*A+1]<<16|C[2*A];for(A=T;A<2*T;A++)C[A]=0;return new o(C,0)};function g(E,T){for(;(E[T]&65535)!=E[T];)E[T+1]+=E[T]>>>16,E[T]&=65535,T++}function S(E,T){this.g=E,this.h=T}function O(E,T){if(v(T))throw Error("division by zero");if(v(E))return new S(d,d);if(I(E))return T=O(k(E),T),new S(k(T.g),k(T.h));if(I(T))return T=O(E,k(T)),new S(k(T.g),T.h);if(30<E.g.length){if(I(E)||I(T))throw Error("slowDivide_ only works with positive integers.");for(var C=p,A=T;0>=A.l(E);)C=L(C),A=L(A);var P=V(C,1),b=V(A,1);for(A=V(A,2),C=V(C,2);!v(A);){var x=b.add(A);0>=x.l(E)&&(P=P.add(C),b=x),A=V(A,1),C=V(C,1)}return T=w(E,P.j(T)),new S(P,T)}for(P=d;0<=E.l(T);){for(C=Math.max(1,Math.floor(E.m()/T.m())),A=Math.ceil(Math.log(C)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),b=c(C),x=b.j(T);I(x)||0<x.l(E);)C-=A,b=c(C),x=b.j(T);v(b)&&(b=p),P=P.add(b),E=w(E,x)}return new S(P,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var T=Math.max(this.g.length,E.g.length),C=[],A=0;A<T;A++)C[A]=this.i(A)&E.i(A);return new o(C,this.h&E.h)},t.or=function(E){for(var T=Math.max(this.g.length,E.g.length),C=[],A=0;A<T;A++)C[A]=this.i(A)|E.i(A);return new o(C,this.h|E.h)},t.xor=function(E){for(var T=Math.max(this.g.length,E.g.length),C=[],A=0;A<T;A++)C[A]=this.i(A)^E.i(A);return new o(C,this.h^E.h)};function L(E){for(var T=E.g.length+1,C=[],A=0;A<T;A++)C[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(C,E.h)}function V(E,T){var C=T>>5;T%=32;for(var A=E.g.length-C,P=[],b=0;b<A;b++)P[b]=0<T?E.i(b+C)>>>T|E.i(b+C+1)<<32-T:E.i(b+C);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,HR=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Rs=o}).apply(typeof w1<"u"?w1:typeof self<"u"?self:typeof window<"u"?window:{});var Yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qR,GR,Cl,KR,Rh,m_,QR,YR,XR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,f,m){return u==Array.prototype||u==Object.prototype||(u[f]=m.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yc=="object"&&Yc];for(var f=0;f<u.length;++f){var m=u[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=n(this);function i(u,f){if(f)e:{var m=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var D=u[y];if(!(D in m))break e;m=m[D]}u=u[u.length-1],y=m[u],f=f(y),f!=y&&f!=null&&e(m,u,{configurable:!0,writable:!0,value:f})}}function s(u,f){u instanceof String&&(u+="");var m=0,y=!1,D={next:function(){if(!y&&m<u.length){var F=m++;return{value:f(F,u[F]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(f,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var f=typeof u;return f=f!="object"?f:u?Array.isArray(u)?"array":f:"null",f=="array"||f=="object"&&typeof u.length=="number"}function c(u){var f=typeof u;return f=="object"&&u!=null||f=="function"}function h(u,f,m){return u.call.apply(u.bind,arguments)}function d(u,f,m){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),u.apply(f,D)}}return function(){return u.apply(f,arguments)}}function p(u,f,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function _(u,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function v(u,f){function m(){}m.prototype=f.prototype,u.aa=f.prototype,u.prototype=new m,u.prototype.constructor=u,u.Qb=function(y,D,F){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return f.prototype[D].apply(y,G)}}function I(u){const f=u.length;if(0<f){const m=Array(f);for(let y=0;y<f;y++)m[y]=u[y];return m}return[]}function k(u,f){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(l(y)){const D=u.length||0,F=y.length||0;u.length=D+F;for(let G=0;G<F;G++)u[D+G]=y[G]}else u.push(y)}}class w{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function g(u){return/^[\s\xa0]*$/.test(u)}function S(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function O(u){return O[" "](u),u}O[" "]=function(){};var L=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function V(u,f,m){for(const y in u)f.call(m,u[y],y,u)}function E(u,f){for(const m in u)f.call(void 0,u[m],m,u)}function T(u){const f={};for(const m in u)f[m]=u[m];return f}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,f){let m,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(m in y)u[m]=y[m];for(let F=0;F<C.length;F++)m=C[F],Object.prototype.hasOwnProperty.call(y,m)&&(u[m]=y[m])}}function P(u){var f=1;u=u.split(":");const m=[];for(;0<f&&u.length;)m.push(u.shift()),f--;return u.length&&m.push(u.join(":")),m}function b(u){a.setTimeout(()=>{throw u},0)}function x(){var u=ee;let f=null;return u.g&&(f=u.g,u.g=u.g.next,u.g||(u.h=null),f.next=null),f}class de{constructor(){this.h=this.g=null}add(f,m){const y=Le.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Le=new w(()=>new it,u=>u.reset());class it{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,q=!1,ee=new de,te=()=>{const u=a.Promise.resolve(void 0);Ie=()=>{u.then(Pe)}};var Pe=()=>{for(var u;u=x();){try{u.h.call(u.g)}catch(m){b(m)}var f=Le;f.j(u),100>f.h&&(f.h++,u.next=f.g,f.g=u)}q=!1};function ye(){this.s=this.s,this.C=this.C}ye.prototype.s=!1,ye.prototype.ma=function(){this.s||(this.s=!0,this.N())},ye.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(u,f){this.type=u,this.g=this.target=f,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Tt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,f=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};a.addEventListener("test",m,f),a.removeEventListener("test",m,f)}catch{}return u}();function Ut(u,f){if(Ne.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var m=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=f,f=u.relatedTarget){if(L){e:{try{O(f.nodeName);var D=!0;break e}catch{}D=!1}D||(f=null)}}else m=="mouseover"?f=u.fromElement:m=="mouseout"&&(f=u.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:pt[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ut.aa.h.call(this)}}v(Ut,Ne);var pt={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var st="closure_listenable_"+(1e6*Math.random()|0),Pr=0;function br(u,f,m,y,D){this.listener=u,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=D,this.key=++Pr,this.da=this.fa=!1}function Zt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ss(u){this.src=u,this.g={},this.h=0}ss.prototype.add=function(u,f,m,y,D){var F=u.toString();u=this.g[F],u||(u=this.g[F]=[],this.h++);var G=eo(u,f,y,D);return-1<G?(f=u[G],m||(f.fa=!1)):(f=new br(f,this.src,F,!!y,D),f.fa=m,u.push(f)),f};function ja(u,f){var m=f.type;if(m in u.g){var y=u.g[m],D=Array.prototype.indexOf.call(y,f,void 0),F;(F=0<=D)&&Array.prototype.splice.call(y,D,1),F&&(Zt(f),u.g[m].length==0&&(delete u.g[m],u.h--))}}function eo(u,f,m,y){for(var D=0;D<u.length;++D){var F=u[D];if(!F.da&&F.listener==f&&F.capture==!!m&&F.ha==y)return D}return-1}var to="closure_lm_"+(1e6*Math.random()|0),cc={};function hp(u,f,m,y,D){if(y&&y.once)return M(u,f,m,y,D);if(Array.isArray(f)){for(var F=0;F<f.length;F++)hp(u,f[F],m,y,D);return null}return m=qe(m),u&&u[st]?u.K(f,m,c(y)?!!y.capture:!!y,D):dp(u,f,m,!1,y,D)}function dp(u,f,m,y,D,F){if(!f)throw Error("Invalid event type");var G=c(D)?!!D.capture:!!D,Oe=Z(u);if(Oe||(u[to]=Oe=new ss(u)),m=Oe.add(f,m,y,G,F),m.proxy)return m;if(y=N(),m.proxy=y,y.src=u,y.listener=m,u.addEventListener)Tt||(D=G),D===void 0&&(D=!1),u.addEventListener(f.toString(),y,D);else if(u.attachEvent)u.attachEvent(K(f.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function N(){function u(m){return f.call(u.src,u.listener,m)}const f=W;return u}function M(u,f,m,y,D){if(Array.isArray(f)){for(var F=0;F<f.length;F++)M(u,f[F],m,y,D);return null}return m=qe(m),u&&u[st]?u.L(f,m,c(y)?!!y.capture:!!y,D):dp(u,f,m,!0,y,D)}function U(u,f,m,y,D){if(Array.isArray(f))for(var F=0;F<f.length;F++)U(u,f[F],m,y,D);else y=c(y)?!!y.capture:!!y,m=qe(m),u&&u[st]?(u=u.i,f=String(f).toString(),f in u.g&&(F=u.g[f],m=eo(F,m,y,D),-1<m&&(Zt(F[m]),Array.prototype.splice.call(F,m,1),F.length==0&&(delete u.g[f],u.h--)))):u&&(u=Z(u))&&(f=u.g[f.toString()],u=-1,f&&(u=eo(f,m,y,D)),(m=-1<u?f[u]:null)&&Q(m))}function Q(u){if(typeof u!="number"&&u&&!u.da){var f=u.src;if(f&&f[st])ja(f.i,u);else{var m=u.type,y=u.proxy;f.removeEventListener?f.removeEventListener(m,y,u.capture):f.detachEvent?f.detachEvent(K(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=Z(f))?(ja(m,u),m.h==0&&(m.src=null,f[to]=null)):Zt(u)}}}function K(u){return u in cc?cc[u]:cc[u]="on"+u}function W(u,f){if(u.da)u=!0;else{f=new Ut(f,this);var m=u.listener,y=u.ha||u.src;u.fa&&Q(u),u=m.call(y,f)}return u}function Z(u){return u=u[to],u instanceof ss?u:null}var ve="__closure_events_fn_"+(1e9*Math.random()>>>0);function qe(u){return typeof u=="function"?u:(u[ve]||(u[ve]=function(f){return u.handleEvent(f)}),u[ve])}function Re(){ye.call(this),this.i=new ss(this),this.M=this,this.F=null}v(Re,ye),Re.prototype[st]=!0,Re.prototype.removeEventListener=function(u,f,m,y){U(this,u,f,m,y)};function Ze(u,f){var m,y=u.F;if(y)for(m=[];y;y=y.F)m.push(y);if(u=u.M,y=f.type||f,typeof f=="string")f=new Ne(f,u);else if(f instanceof Ne)f.target=f.target||u;else{var D=f;f=new Ne(y,u),A(f,D)}if(D=!0,m)for(var F=m.length-1;0<=F;F--){var G=f.g=m[F];D=no(G,y,!0,f)&&D}if(G=f.g=u,D=no(G,y,!0,f)&&D,D=no(G,y,!1,f)&&D,m)for(F=0;F<m.length;F++)G=f.g=m[F],D=no(G,y,!1,f)&&D}Re.prototype.N=function(){if(Re.aa.N.call(this),this.i){var u=this.i,f;for(f in u.g){for(var m=u.g[f],y=0;y<m.length;y++)Zt(m[y]);delete u.g[f],u.h--}}this.F=null},Re.prototype.K=function(u,f,m,y){return this.i.add(String(u),f,!1,m,y)},Re.prototype.L=function(u,f,m,y){return this.i.add(String(u),f,!0,m,y)};function no(u,f,m,y){if(f=u.i.g[String(f)],!f)return!0;f=f.concat();for(var D=!0,F=0;F<f.length;++F){var G=f[F];if(G&&!G.da&&G.capture==m){var Oe=G.listener,Pt=G.ha||G.src;G.fa&&ja(u.i,G),D=Oe.call(Pt,y)!==!1&&D}}return D&&!y.defaultPrevented}function ro(u,f,m){if(typeof u=="function")m&&(u=p(u,m));else if(u&&typeof u.handleEvent=="function")u=p(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(u,f||0)}function io(u){u.g=ro(()=>{u.g=null,u.i&&(u.i=!1,io(u))},u.l);const f=u.h;u.h=null,u.m.apply(null,f)}class fp extends ye{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:io(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function li(u){ye.call(this),this.h=u,this.g={}}v(li,ye);var hc=[];function $a(u){V(u.g,function(f,m){this.g.hasOwnProperty(m)&&Q(f)},u),u.g={}}li.prototype.N=function(){li.aa.N.call(this),$a(this)},li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pp=a.JSON.stringify,DP=a.JSON.parse,LP=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function mp(){}mp.prototype.h=null;function T0(u){return u.h||(u.h=u.i())}function I0(){}var za={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function gp(){Ne.call(this,"d")}v(gp,Ne);function _p(){Ne.call(this,"c")}v(_p,Ne);var os={},S0=null;function dc(){return S0=S0||new Re}os.La="serverreachability";function C0(u){Ne.call(this,os.La,u)}v(C0,Ne);function Ba(u){const f=dc();Ze(f,new C0(f))}os.STAT_EVENT="statevent";function x0(u,f){Ne.call(this,os.STAT_EVENT,u),this.stat=f}v(x0,Ne);function en(u){const f=dc();Ze(f,new x0(f,u))}os.Ma="timingevent";function A0(u,f){Ne.call(this,os.Ma,u),this.size=f}v(A0,Ne);function Wa(u,f){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},f)}function Ha(){this.g=!0}Ha.prototype.xa=function(){this.g=!1};function MP(u,f,m,y,D,F){u.info(function(){if(u.g)if(F)for(var G="",Oe=F.split("&"),Pt=0;Pt<Oe.length;Pt++){var Te=Oe[Pt].split("=");if(1<Te.length){var jt=Te[0];Te=Te[1];var $t=jt.split("_");G=2<=$t.length&&$t[1]=="type"?G+(jt+"="+Te+"&"):G+(jt+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+f+`
`+m+`
`+G})}function FP(u,f,m,y,D,F,G){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+f+`
`+m+`
`+F+" "+G})}function so(u,f,m,y){u.info(function(){return"XMLHTTP TEXT ("+f+"): "+UP(u,m)+(y?" "+y:"")})}function VP(u,f){u.info(function(){return"TIMEOUT: "+f})}Ha.prototype.info=function(){};function UP(u,f){if(!u.g)return f;if(!f)return null;try{var m=JSON.parse(f);if(m){for(u=0;u<m.length;u++)if(Array.isArray(m[u])){var y=m[u];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var F=D[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return pp(m)}catch{return f}}var fc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},R0={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yp;function pc(){}v(pc,mp),pc.prototype.g=function(){return new XMLHttpRequest},pc.prototype.i=function(){return{}},yp=new pc;function ui(u,f,m,y){this.j=u,this.i=f,this.l=m,this.R=y||1,this.U=new li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new k0}function k0(){this.i=null,this.g="",this.h=!1}var P0={},vp={};function wp(u,f,m){u.L=1,u.v=yc(Nr(f)),u.m=m,u.P=!0,b0(u,null)}function b0(u,f){u.F=Date.now(),mc(u),u.A=Nr(u.v);var m=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),H0(m.i,"t",y),u.C=0,m=u.j.J,u.h=new k0,u.g=uw(u.j,m?f:null,!u.m),0<u.O&&(u.M=new fp(p(u.Y,u,u.g),u.O)),f=u.U,m=u.g,y=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(hc[0]=D.toString()),D=hc);for(var F=0;F<D.length;F++){var G=hp(m,D[F],y||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,f)):(u.u="GET",u.g.ea(u.A,u.u,null,f)),Ba(),MP(u.i,u.u,u.A,u.l,u.R,u.m)}ui.prototype.ca=function(u){u=u.target;const f=this.M;f&&Or(u)==3?f.j():this.Y(u)},ui.prototype.Y=function(u){try{if(u==this.g)e:{const $t=Or(this.g);var f=this.g.Ba();const lo=this.g.Z();if(!(3>$t)&&($t!=3||this.g&&(this.h.h||this.g.oa()||J0(this.g)))){this.J||$t!=4||f==7||(f==8||0>=lo?Ba(3):Ba(2)),Ep(this);var m=this.g.Z();this.X=m;t:if(N0(this)){var y=J0(this.g);u="";var D=y.length,F=Or(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),qa(this);var G="";break t}this.h.i=new a.TextDecoder}for(f=0;f<D;f++)this.h.h=!0,u+=this.h.i.decode(y[f],{stream:!(F&&f==D-1)});y.length=0,this.h.g+=u,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=m==200,FP(this.i,this.u,this.A,this.l,this.R,$t,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,Pt=this.g;if((Oe=Pt.g?Pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(Oe)){var Te=Oe;break t}}Te=null}if(m=Te)so(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Tp(this,m);else{this.o=!1,this.s=3,en(12),as(this),qa(this);break e}}if(this.P){m=!0;let $n;for(;!this.J&&this.C<G.length;)if($n=jP(this,G),$n==vp){$t==4&&(this.s=4,en(14),m=!1),so(this.i,this.l,null,"[Incomplete Response]");break}else if($n==P0){this.s=4,en(15),so(this.i,this.l,G,"[Invalid Chunk]"),m=!1;break}else so(this.i,this.l,$n,null),Tp(this,$n);if(N0(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$t!=4||G.length!=0||this.h.h||(this.s=1,en(16),m=!1),this.o=this.o&&m,!m)so(this.i,this.l,G,"[Invalid Chunked Response]"),as(this),qa(this);else if(0<G.length&&!this.W){this.W=!0;var jt=this.j;jt.g==this&&jt.ba&&!jt.M&&(jt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Rp(jt),jt.M=!0,en(11))}}else so(this.i,this.l,G,null),Tp(this,G);$t==4&&as(this),this.o&&!this.J&&($t==4?sw(this.j,this):(this.o=!1,mc(this)))}else rb(this.g),m==400&&0<G.indexOf("Unknown SID")?(this.s=3,en(12)):(this.s=0,en(13)),as(this),qa(this)}}}catch{}finally{}};function N0(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function jP(u,f){var m=u.C,y=f.indexOf(`
`,m);return y==-1?vp:(m=Number(f.substring(m,y)),isNaN(m)?P0:(y+=1,y+m>f.length?vp:(f=f.slice(y,y+m),u.C=y+m,f)))}ui.prototype.cancel=function(){this.J=!0,as(this)};function mc(u){u.S=Date.now()+u.I,O0(u,u.I)}function O0(u,f){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Wa(p(u.ba,u),f)}function Ep(u){u.B&&(a.clearTimeout(u.B),u.B=null)}ui.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(VP(this.i,this.A),this.L!=2&&(Ba(),en(17)),as(this),this.s=2,qa(this)):O0(this,this.S-u)};function qa(u){u.j.G==0||u.J||sw(u.j,u)}function as(u){Ep(u);var f=u.M;f&&typeof f.ma=="function"&&f.ma(),u.M=null,$a(u.U),u.g&&(f=u.g,u.g=null,f.abort(),f.ma())}function Tp(u,f){try{var m=u.j;if(m.G!=0&&(m.g==u||Ip(m.h,u))){if(!u.K&&Ip(m.h,u)&&m.G==3){try{var y=m.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<u.F)Ic(m),Ec(m);else break e;Ap(m),en(18)}}else m.za=D[1],0<m.za-m.T&&37500>D[2]&&m.F&&m.v==0&&!m.C&&(m.C=Wa(p(m.Za,m),6e3));if(1>=M0(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else us(m,11)}else if((u.K||m.g==u)&&Ic(m),!g(f))for(D=m.Da.g.parse(f),f=0;f<D.length;f++){let Te=D[f];if(m.T=Te[0],Te=Te[1],m.G==2)if(Te[0]=="c"){m.K=Te[1],m.ia=Te[2];const jt=Te[3];jt!=null&&(m.la=jt,m.j.info("VER="+m.la));const $t=Te[4];$t!=null&&(m.Aa=$t,m.j.info("SVER="+m.Aa));const lo=Te[5];lo!=null&&typeof lo=="number"&&0<lo&&(y=1.5*lo,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const $n=u.g;if($n){const Cc=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cc){var F=y.h;F.g||Cc.indexOf("spdy")==-1&&Cc.indexOf("quic")==-1&&Cc.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Sp(F,F.h),F.h=null))}if(y.D){const kp=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;kp&&(y.ya=kp,je(y.I,y.D,kp))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-u.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var G=u;if(y.qa=lw(y,y.J?y.ia:null,y.W),G.K){F0(y.h,G);var Oe=G,Pt=y.L;Pt&&(Oe.I=Pt),Oe.B&&(Ep(Oe),mc(Oe)),y.g=G}else rw(y);0<m.i.length&&Tc(m)}else Te[0]!="stop"&&Te[0]!="close"||us(m,7);else m.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?us(m,7):xp(m):Te[0]!="noop"&&m.l&&m.l.ta(Te),m.v=0)}}Ba(4)}catch{}}var $P=class{constructor(u,f){this.g=u,this.map=f}};function D0(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function L0(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function M0(u){return u.h?1:u.g?u.g.size:0}function Ip(u,f){return u.h?u.h==f:u.g?u.g.has(f):!1}function Sp(u,f){u.g?u.g.add(f):u.h=f}function F0(u,f){u.h&&u.h==f?u.h=null:u.g&&u.g.has(f)&&u.g.delete(f)}D0.prototype.cancel=function(){if(this.i=V0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function V0(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let f=u.i;for(const m of u.g.values())f=f.concat(m.D);return f}return I(u.i)}function zP(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var f=[],m=u.length,y=0;y<m;y++)f.push(u[y]);return f}f=[],m=0;for(y in u)f[m++]=u[y];return f}function BP(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var f=[];u=u.length;for(var m=0;m<u;m++)f.push(m);return f}f=[],m=0;for(const y in u)f[m++]=y;return f}}}function U0(u,f){if(u.forEach&&typeof u.forEach=="function")u.forEach(f,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,f,void 0);else for(var m=BP(u),y=zP(u),D=y.length,F=0;F<D;F++)f.call(void 0,y[F],m&&m[F],u)}var j0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WP(u,f){if(u){u=u.split("&");for(var m=0;m<u.length;m++){var y=u[m].indexOf("="),D=null;if(0<=y){var F=u[m].substring(0,y);D=u[m].substring(y+1)}else F=u[m];f(F,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function ls(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ls){this.h=u.h,gc(this,u.j),this.o=u.o,this.g=u.g,_c(this,u.s),this.l=u.l;var f=u.i,m=new Qa;m.i=f.i,f.g&&(m.g=new Map(f.g),m.h=f.h),$0(this,m),this.m=u.m}else u&&(f=String(u).match(j0))?(this.h=!1,gc(this,f[1]||"",!0),this.o=Ga(f[2]||""),this.g=Ga(f[3]||"",!0),_c(this,f[4]),this.l=Ga(f[5]||"",!0),$0(this,f[6]||"",!0),this.m=Ga(f[7]||"")):(this.h=!1,this.i=new Qa(null,this.h))}ls.prototype.toString=function(){var u=[],f=this.j;f&&u.push(Ka(f,z0,!0),":");var m=this.g;return(m||f=="file")&&(u.push("//"),(f=this.o)&&u.push(Ka(f,z0,!0),"@"),u.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&u.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Ka(m,m.charAt(0)=="/"?GP:qP,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Ka(m,QP)),u.join("")};function Nr(u){return new ls(u)}function gc(u,f,m){u.j=m?Ga(f,!0):f,u.j&&(u.j=u.j.replace(/:$/,""))}function _c(u,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);u.s=f}else u.s=null}function $0(u,f,m){f instanceof Qa?(u.i=f,YP(u.i,u.h)):(m||(f=Ka(f,KP)),u.i=new Qa(f,u.h))}function je(u,f,m){u.i.set(f,m)}function yc(u){return je(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ga(u,f){return u?f?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ka(u,f,m){return typeof u=="string"?(u=encodeURI(u).replace(f,HP),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function HP(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var z0=/[#\/\?@]/g,qP=/[#\?:]/g,GP=/[#\?]/g,KP=/[#\?@]/g,QP=/#/g;function Qa(u,f){this.h=this.g=null,this.i=u||null,this.j=!!f}function ci(u){u.g||(u.g=new Map,u.h=0,u.i&&WP(u.i,function(f,m){u.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Qa.prototype,t.add=function(u,f){ci(this),this.i=null,u=oo(this,u);var m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(f),this.h+=1,this};function B0(u,f){ci(u),f=oo(u,f),u.g.has(f)&&(u.i=null,u.h-=u.g.get(f).length,u.g.delete(f))}function W0(u,f){return ci(u),f=oo(u,f),u.g.has(f)}t.forEach=function(u,f){ci(this),this.g.forEach(function(m,y){m.forEach(function(D){u.call(f,D,y,this)},this)},this)},t.na=function(){ci(this);const u=Array.from(this.g.values()),f=Array.from(this.g.keys()),m=[];for(let y=0;y<f.length;y++){const D=u[y];for(let F=0;F<D.length;F++)m.push(f[y])}return m},t.V=function(u){ci(this);let f=[];if(typeof u=="string")W0(this,u)&&(f=f.concat(this.g.get(oo(this,u))));else{u=Array.from(this.g.values());for(let m=0;m<u.length;m++)f=f.concat(u[m])}return f},t.set=function(u,f){return ci(this),this.i=null,u=oo(this,u),W0(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[f]),this.h+=1,this},t.get=function(u,f){return u?(u=this.V(u),0<u.length?String(u[0]):f):f};function H0(u,f,m){B0(u,f),0<m.length&&(u.i=null,u.g.set(oo(u,f),I(m)),u.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],f=Array.from(this.g.keys());for(var m=0;m<f.length;m++){var y=f[m];const F=encodeURIComponent(String(y)),G=this.V(y);for(y=0;y<G.length;y++){var D=F;G[y]!==""&&(D+="="+encodeURIComponent(String(G[y]))),u.push(D)}}return this.i=u.join("&")};function oo(u,f){return f=String(f),u.j&&(f=f.toLowerCase()),f}function YP(u,f){f&&!u.j&&(ci(u),u.i=null,u.g.forEach(function(m,y){var D=y.toLowerCase();y!=D&&(B0(this,y),H0(this,D,m))},u)),u.j=f}function XP(u,f){const m=new Ha;if(a.Image){const y=new Image;y.onload=_(hi,m,"TestLoadImage: loaded",!0,f,y),y.onerror=_(hi,m,"TestLoadImage: error",!1,f,y),y.onabort=_(hi,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=_(hi,m,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else f(!1)}function JP(u,f){const m=new Ha,y=new AbortController,D=setTimeout(()=>{y.abort(),hi(m,"TestPingServer: timeout",!1,f)},1e4);fetch(u,{signal:y.signal}).then(F=>{clearTimeout(D),F.ok?hi(m,"TestPingServer: ok",!0,f):hi(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(D),hi(m,"TestPingServer: error",!1,f)})}function hi(u,f,m,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(m)}catch{}}function ZP(){this.g=new LP}function eb(u,f,m){const y=m||"";try{U0(u,function(D,F){let G=D;c(D)&&(G=pp(D)),f.push(y+F+"="+encodeURIComponent(G))})}catch(D){throw f.push(y+"type="+encodeURIComponent("_badmap")),D}}function Ya(u){this.l=u.Ub||null,this.j=u.eb||!1}v(Ya,mp),Ya.prototype.g=function(){return new vc(this.l,this.j)},Ya.prototype.i=function(u){return function(){return u}}({});function vc(u,f){Re.call(this),this.D=u,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}v(vc,Re),t=vc.prototype,t.open=function(u,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=f,this.readyState=1,Ja(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(f.body=u),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ja(this)),this.g&&(this.readyState=3,Ja(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;q0(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function q0(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var f=u.value?u.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!u.done}))&&(this.response=this.responseText+=f)}u.done?Xa(this):Ja(this),this.readyState==3&&q0(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Xa(this))},t.Qa=function(u){this.g&&(this.response=u,Xa(this))},t.ga=function(){this.g&&Xa(this)};function Xa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ja(u)}t.setRequestHeader=function(u,f){this.u.append(u,f)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=f.next();return u.join(`\r
`)};function Ja(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(vc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function G0(u){let f="";return V(u,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function Cp(u,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=G0(m),typeof u=="string"?m!=null&&encodeURIComponent(String(m)):je(u,f,m))}function et(u){Re.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}v(et,Re);var tb=/^https?$/i,nb=["POST","PUT"];t=et.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);f=f?f.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yp.g(),this.v=this.o?T0(this.o):T0(yp),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(f,String(u),!0),this.B=!1}catch(F){K0(this,F);return}if(u=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)m.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const F of y.keys())m.set(F,y.get(F));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(F=>F.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(nb,f,void 0))||y||D||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of m)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{X0(this),this.u=!0,this.g.send(u),this.u=!1}catch(F){K0(this,F)}};function K0(u,f){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=f,u.m=5,Q0(u),wc(u)}function Q0(u){u.A||(u.A=!0,Ze(u,"complete"),Ze(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Ze(this,"complete"),Ze(this,"abort"),wc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),wc(this,!0)),et.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Y0(this):this.bb())},t.bb=function(){Y0(this)};function Y0(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Or(u)!=4||u.Z()!=2)){if(u.u&&Or(u)==4)ro(u.Ea,0,u);else if(Ze(u,"readystatechange"),Or(u)==4){u.h=!1;try{const G=u.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=G===0){var D=String(u.D).match(j0)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!tb.test(D?D.toLowerCase():"")}m=y}if(m)Ze(u,"complete"),Ze(u,"success");else{u.m=6;try{var F=2<Or(u)?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.Z()+"]",Q0(u)}}finally{wc(u)}}}}function wc(u,f){if(u.g){X0(u);const m=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,f||Ze(u,"ready");try{m.onreadystatechange=y}catch{}}}function X0(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function Or(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<Or(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var f=this.g.responseText;return u&&f.indexOf(u)==0&&(f=f.substring(u.length)),DP(f)}};function J0(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function rb(u){const f={};u=(u.g&&2<=Or(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(g(u[y]))continue;var m=P(u[y]);const D=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const F=f[D]||[];f[D]=F,F.push(m)}E(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Za(u,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||f}function Z0(u){this.Aa=0,this.i=[],this.j=new Ha,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Za("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Za("baseRetryDelayMs",5e3,u),this.cb=Za("retryDelaySeedMs",1e4,u),this.Wa=Za("forwardChannelMaxRetries",2,u),this.wa=Za("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new D0(u&&u.concurrentRequestLimit),this.Da=new ZP,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Z0.prototype,t.la=8,t.G=1,t.connect=function(u,f,m,y){en(0),this.W=u,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=lw(this,null,this.W),Tc(this)};function xp(u){if(ew(u),u.G==3){var f=u.U++,m=Nr(u.I);if(je(m,"SID",u.K),je(m,"RID",f),je(m,"TYPE","terminate"),el(u,m),f=new ui(u,u.j,f),f.L=2,f.v=yc(Nr(m)),m=!1,a.navigator&&a.navigator.sendBeacon)try{m=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!m&&a.Image&&(new Image().src=f.v,m=!0),m||(f.g=uw(f.j,null),f.g.ea(f.v)),f.F=Date.now(),mc(f)}aw(u)}function Ec(u){u.g&&(Rp(u),u.g.cancel(),u.g=null)}function ew(u){Ec(u),u.u&&(a.clearTimeout(u.u),u.u=null),Ic(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Tc(u){if(!L0(u.h)&&!u.s){u.s=!0;var f=u.Ga;Ie||te(),q||(Ie(),q=!0),ee.add(f,u),u.B=0}}function ib(u,f){return M0(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=f.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Wa(p(u.Ga,u,f),ow(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new ui(this,this.j,u);let F=this.o;if(this.S&&(F?(F=T(F),A(F,this.S)):F=this.S),this.m!==null||this.O||(D.H=F,F=null),this.P)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=nw(this,D,f),m=Nr(this.I),je(m,"RID",u),je(m,"CVER",22),this.D&&je(m,"X-HTTP-Session-Id",this.D),el(this,m),F&&(this.O?f="headers="+encodeURIComponent(String(G0(F)))+"&"+f:this.m&&Cp(m,this.m,F)),Sp(this.h,D),this.Ua&&je(m,"TYPE","init"),this.P?(je(m,"$req",f),je(m,"SID","null"),D.T=!0,wp(D,m,null)):wp(D,m,f),this.G=2}}else this.G==3&&(u?tw(this,u):this.i.length==0||L0(this.h)||tw(this))};function tw(u,f){var m;f?m=f.l:m=u.U++;const y=Nr(u.I);je(y,"SID",u.K),je(y,"RID",m),je(y,"AID",u.T),el(u,y),u.m&&u.o&&Cp(y,u.m,u.o),m=new ui(u,u.j,m,u.B+1),u.m===null&&(m.H=u.o),f&&(u.i=f.D.concat(u.i)),f=nw(u,m,1e3),m.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Sp(u.h,m),wp(m,y,f)}function el(u,f){u.H&&V(u.H,function(m,y){je(f,y,m)}),u.l&&U0({},function(m,y){je(f,y,m)})}function nw(u,f,m){m=Math.min(u.i.length,m);var y=u.l?p(u.l.Na,u.l,u):null;e:{var D=u.i;let F=-1;for(;;){const G=["count="+m];F==-1?0<m?(F=D[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Oe=!0;for(let Pt=0;Pt<m;Pt++){let Te=D[Pt].g;const jt=D[Pt].map;if(Te-=F,0>Te)F=Math.max(0,D[Pt].g-100),Oe=!1;else try{eb(jt,G,"req"+Te+"_")}catch{y&&y(jt)}}if(Oe){y=G.join("&");break e}}}return u=u.i.splice(0,m),f.D=u,y}function rw(u){if(!u.g&&!u.u){u.Y=1;var f=u.Fa;Ie||te(),q||(Ie(),q=!0),ee.add(f,u),u.v=0}}function Ap(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Wa(p(u.Fa,u),ow(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,iw(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Wa(p(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,en(10),Ec(this),iw(this))};function Rp(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function iw(u){u.g=new ui(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var f=Nr(u.qa);je(f,"RID","rpc"),je(f,"SID",u.K),je(f,"AID",u.T),je(f,"CI",u.F?"0":"1"),!u.F&&u.ja&&je(f,"TO",u.ja),je(f,"TYPE","xmlhttp"),el(u,f),u.m&&u.o&&Cp(f,u.m,u.o),u.L&&(u.g.I=u.L);var m=u.g;u=u.ia,m.L=1,m.v=yc(Nr(f)),m.m=null,m.P=!0,b0(m,u)}t.Za=function(){this.C!=null&&(this.C=null,Ec(this),Ap(this),en(19))};function Ic(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function sw(u,f){var m=null;if(u.g==f){Ic(u),Rp(u),u.g=null;var y=2}else if(Ip(u.h,f))m=f.D,F0(u.h,f),y=1;else return;if(u.G!=0){if(f.o)if(y==1){m=f.m?f.m.length:0,f=Date.now()-f.F;var D=u.B;y=dc(),Ze(y,new A0(y,m)),Tc(u)}else rw(u);else if(D=f.s,D==3||D==0&&0<f.X||!(y==1&&ib(u,f)||y==2&&Ap(u)))switch(m&&0<m.length&&(f=u.h,f.i=f.i.concat(m)),D){case 1:us(u,5);break;case 4:us(u,10);break;case 3:us(u,6);break;default:us(u,2)}}}function ow(u,f){let m=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(m*=2),m*f}function us(u,f){if(u.j.info("Error code "+f),f==2){var m=p(u.fb,u),y=u.Xa;const D=!y;y=new ls(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||gc(y,"https"),yc(y),D?XP(y.toString(),m):JP(y.toString(),m)}else en(2);u.G=0,u.l&&u.l.sa(f),aw(u),ew(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),en(2)):(this.j.info("Failed to ping google.com"),en(1))};function aw(u){if(u.G=0,u.ka=[],u.l){const f=V0(u.h);(f.length!=0||u.i.length!=0)&&(k(u.ka,f),k(u.ka,u.i),u.h.i.length=0,I(u.i),u.i.length=0),u.l.ra()}}function lw(u,f,m){var y=m instanceof ls?Nr(m):new ls(m);if(y.g!="")f&&(y.g=f+"."+y.g),_c(y,y.s);else{var D=a.location;y=D.protocol,f=f?f+"."+D.hostname:D.hostname,D=+D.port;var F=new ls(null);y&&gc(F,y),f&&(F.g=f),D&&_c(F,D),m&&(F.l=m),y=F}return m=u.D,f=u.ya,m&&f&&je(y,m,f),je(y,"VER",u.la),el(u,y),y}function uw(u,f,m){if(f&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=u.Ca&&!u.pa?new et(new Ya({eb:m})):new et(u.pa),f.Ha(u.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function cw(){}t=cw.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sc(){}Sc.prototype.g=function(u,f){return new wn(u,f)};function wn(u,f){Re.call(this),this.g=new Z0(f),this.l=u,this.h=f&&f.messageUrlParams||null,u=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(u?u["X-WebChannel-Content-Type"]=f.messageContentType:u={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(u?u["X-WebChannel-Client-Profile"]=f.va:u={"X-WebChannel-Client-Profile":f.va}),this.g.S=u,(u=f&&f.Sb)&&!g(u)&&(this.g.m=u),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!g(f)&&(this.g.D=f,u=this.h,u!==null&&f in u&&(u=this.h,f in u&&delete u[f])),this.j=new ao(this)}v(wn,Re),wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wn.prototype.close=function(){xp(this.g)},wn.prototype.o=function(u){var f=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.u&&(m={},m.__data__=pp(u),u=m);f.i.push(new $P(f.Ya++,u)),f.G==3&&Tc(f)},wn.prototype.N=function(){this.g.l=null,delete this.j,xp(this.g),delete this.g,wn.aa.N.call(this)};function hw(u){gp.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var f=u.__sm__;if(f){e:{for(const m in f){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,f=f!==null&&u in f?f[u]:void 0),this.data=f}else this.data=u}v(hw,gp);function dw(){_p.call(this),this.status=1}v(dw,_p);function ao(u){this.g=u}v(ao,cw),ao.prototype.ua=function(){Ze(this.g,"a")},ao.prototype.ta=function(u){Ze(this.g,new hw(u))},ao.prototype.sa=function(u){Ze(this.g,new dw)},ao.prototype.ra=function(){Ze(this.g,"b")},Sc.prototype.createWebChannel=Sc.prototype.g,wn.prototype.send=wn.prototype.o,wn.prototype.open=wn.prototype.m,wn.prototype.close=wn.prototype.close,XR=function(){return new Sc},YR=function(){return dc()},QR=os,m_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fc.NO_ERROR=0,fc.TIMEOUT=8,fc.HTTP_ERROR=6,Rh=fc,R0.COMPLETE="complete",KR=R0,I0.EventType=za,za.OPEN="a",za.CLOSE="b",za.ERROR="c",za.MESSAGE="d",Re.prototype.listen=Re.prototype.K,Cl=I0,GR=Ya,et.prototype.listenOnce=et.prototype.L,et.prototype.getLastError=et.prototype.Ka,et.prototype.getLastErrorCode=et.prototype.Ba,et.prototype.getStatus=et.prototype.Z,et.prototype.getResponseJson=et.prototype.Oa,et.prototype.getResponseText=et.prototype.oa,et.prototype.send=et.prototype.ea,et.prototype.setWithCredentials=et.prototype.Ha,qR=et}).apply(typeof Yc<"u"?Yc:typeof self<"u"?self:typeof window<"u"?window:{});const E1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ma="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s=new Of("@firebase/firestore");function pl(){return $s.logLevel}function J(t,...e){if($s.logLevel<=me.DEBUG){const n=e.map(Bv);$s.debug(`Firestore (${Ma}): ${t}`,...n)}}function ti(t,...e){if($s.logLevel<=me.ERROR){const n=e.map(Bv);$s.error(`Firestore (${Ma}): ${t}`,...n)}}function pa(t,...e){if($s.logLevel<=me.WARN){const n=e.map(Bv);$s.warn(`Firestore (${Ma}): ${t}`,...n)}}function Bv(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${Ma}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function Ue(t,e){t||ae()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qt.UNAUTHENTICATED))}shutdown(){}}class C${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class x${constructor(e){this.t=e,this.currentUser=qt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Bi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bi,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bi)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new JR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new qt(e)}}class A${constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=qt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class R${constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new A$(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(qt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class k${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class P${constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new k$(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function b$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=b$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function ma(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wt.fromMillis(Date.now())}static fromDate(e){return wt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new wt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Cu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Cu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends Cu{construct(e,n,r){return new nt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const N$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Cu{construct(e,n,r){return new Dt(e,n,r)}static isValidIdentifier(e){return N$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new re(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new re(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new re(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Dt(n)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.path=e}static fromPath(e){return new ie(nt.fromString(e))}static fromName(e){return new ie(nt.fromString(e).popFirst(5))}static empty(){return new ie(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ie(new nt(e.slice()))}}function O$(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new wt(n+1,0):new wt(n,r));return new Qi(i,ie.empty(),e)}function D$(t){return new Qi(t.readTime,t.key,-1)}class Qi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Qi(le.min(),ie.empty(),-1)}static max(){return new Qi(le.max(),ie.empty(),-1)}}function L$(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ie.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
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
 */const M$="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class F${constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nc(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==M$)throw t;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function V$(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function rc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Wv{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Wv.oe=-1;function qf(t){return t==null}function zd(t){return t===0&&1/t==-1/0}function U$(t){return typeof t=="number"&&Number.isInteger(t)&&!zd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ek(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cn{constructor(e){this.fields=e,e.sort(Dt.comparator)}static empty(){return new Cn([])}unionWith(e){let n=new Mt(Dt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Cn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ma(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Jt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new tk("Invalid base64 string: "+s):s}}(e);return new Jt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Jt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const j$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yi(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=j$.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zs(t){return typeof t=="string"?Jt.fromBase64String(t):Jt.fromUint8Array(t)}/**
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
 */function Hv(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function qv(t){const e=t.mapValue.fields.__previous_value__;return Hv(e)?qv(e):e}function xu(t){const e=Yi(t.mapValue.fields.__local_write_time__.timestampValue);return new wt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Au{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Au("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Au&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hv(t)?4:z$(t)?9007199254740991:10:ae()}function Cr(t,e){if(t===e)return!0;const n=Bs(t);if(n!==Bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return xu(t).isEqual(xu(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Yi(i.timestampValue),a=Yi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return zs(i.bytesValue).isEqual(zs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ct(i.geoPointValue.latitude)===ct(s.geoPointValue.latitude)&&ct(i.geoPointValue.longitude)===ct(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ct(i.integerValue)===ct(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ct(i.doubleValue),a=ct(s.doubleValue);return o===a?zd(o)===zd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ma(t.arrayValue.values||[],e.arrayValue.values||[],Cr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(T1(o)!==T1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Cr(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function Ru(t,e){return(t.values||[]).find(n=>Cr(n,e))!==void 0}function ga(t,e){if(t===e)return 0;const n=Bs(t),r=Bs(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=ct(s.integerValue||s.doubleValue),l=ct(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return S1(t.timestampValue,e.timestampValue);case 4:return S1(xu(t),xu(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=zs(s),l=zs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=xe(a[c],l[c]);if(h!==0)return h}return xe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=xe(ct(s.latitude),ct(o.latitude));return a!==0?a:xe(ct(s.longitude),ct(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=ga(a[c],l[c]);if(h)return h}return xe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Jc.mapValue&&o===Jc.mapValue)return 0;if(s===Jc.mapValue)return 1;if(o===Jc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const p=xe(l[d],h[d]);if(p!==0)return p;const _=ga(a[l[d]],c[h[d]]);if(_!==0)return _}return xe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw ae()}}function S1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Yi(t),r=Yi(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function _a(t){return g_(t)}function g_(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return zs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=g_(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${g_(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function __(t){return!!t&&"integerValue"in t}function Gv(t){return!!t&&"arrayValue"in t}function C1(t){return!!t&&"nullValue"in t}function x1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kh(t){return!!t&&"mapValue"in t}function Hl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Hl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function z$(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.value=e}static empty(){return new cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hl(n)}setAll(e){let n=Dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Hl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new cn(Hl(this.value))}}function nk(t){const e=[];return Js(t.fields,(n,r)=>{const i=new Dt([n]);if(kh(r)){const s=nk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Cn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bd{constructor(e,n){this.position=e,this.inclusive=n}}function A1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ie.comparator(ie.fromName(o.referenceValue),n.key):r=ga(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function R1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wd{constructor(e,n="asc"){this.field=e,this.dir=n}}function B$(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class rk{}class yt extends rk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new H$(e,n,r):n==="array-contains"?new K$(e,r):n==="in"?new Q$(e,r):n==="not-in"?new Y$(e,r):n==="array-contains-any"?new X$(e,r):new yt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new q$(e,r):new G$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ga(n,this.value)):n!==null&&Bs(this.value)===Bs(n)&&this.matchesComparison(ga(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xr extends rk{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xr(e,n)}matches(e){return ik(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ik(t){return t.op==="and"}function sk(t){return W$(t)&&ik(t)}function W$(t){for(const e of t.filters)if(e instanceof xr)return!1;return!0}function y_(t){if(t instanceof yt)return t.field.canonicalString()+t.op.toString()+_a(t.value);if(sk(t))return t.filters.map(e=>y_(e)).join(",");{const e=t.filters.map(n=>y_(n)).join(",");return`${t.op}(${e})`}}function ok(t,e){return t instanceof yt?function(r,i){return i instanceof yt&&r.op===i.op&&r.field.isEqual(i.field)&&Cr(r.value,i.value)}(t,e):t instanceof xr?function(r,i){return i instanceof xr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ok(o,i.filters[a]),!0):!1}(t,e):void ae()}function ak(t){return t instanceof yt?function(n){return`${n.field.canonicalString()} ${n.op} ${_a(n.value)}`}(t):t instanceof xr?function(n){return n.op.toString()+" {"+n.getFilters().map(ak).join(" ,")+"}"}(t):"Filter"}class H$ extends yt{constructor(e,n,r){super(e,n,r),this.key=ie.fromName(r.referenceValue)}matches(e){const n=ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class q$ extends yt{constructor(e,n){super(e,"in",n),this.keys=lk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G$ extends yt{constructor(e,n){super(e,"not-in",n),this.keys=lk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ie.fromName(r.referenceValue))}class K$ extends yt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gv(n)&&Ru(n.arrayValue,this.value)}}class Q$ extends yt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ru(this.value.arrayValue,n)}}class Y$ extends yt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ru(this.value.arrayValue,n)}}class X$ extends yt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gv(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ru(this.value.arrayValue,r))}}/**
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
 */class J${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function k1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new J$(t,e,n,r,i,s,o)}function Kv(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>y_(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qf(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_a(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_a(r)).join(",")),e.ue=n}return e.ue}function Qv(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!B$(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!ok(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R1(t.startAt,e.startAt)&&R1(t.endAt,e.endAt)}function v_(t){return ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Z$(t,e,n,r,i,s,o,a){return new Gf(t,e,n,r,i,s,o,a)}function Kf(t){return new Gf(t)}function P1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function e9(t){return t.collectionGroup!==null}function ql(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Mt(Dt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Wd(s,r))}),n.has(Dt.keyField().canonicalString())||e.ce.push(new Wd(Dt.keyField(),r))}return e.ce}function vr(t){const e=ue(t);return e.le||(e.le=t9(e,ql(t))),e.le}function t9(t,e){if(t.limitType==="F")return k1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wd(i.field,s)});const n=t.endAt?new Bd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bd(t.startAt.position,t.startAt.inclusive):null;return k1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function w_(t,e,n){return new Gf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qf(t,e){return Qv(vr(t),vr(e))&&t.limitType===e.limitType}function uk(t){return`${Kv(vr(t))}|lt:${t.limitType}`}function mo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>ak(i)).join(", ")}]`),qf(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>_a(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>_a(i)).join(",")),`Target(${r})`}(vr(t))}; limitType=${t.limitType})`}function Yf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ie.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ql(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=A1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ql(r),i)||r.endAt&&!function(o,a,l){const c=A1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ql(r),i))}(t,e)}function n9(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ck(t){return(e,n)=>{let r=!1;for(const i of ql(t)){const s=r9(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function r9(t,e,n){const r=t.field.isKeyField()?ie.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?ga(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ek(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i9=new Je(ie.comparator);function ni(){return i9}const hk=new Je(ie.comparator);function xl(...t){let e=hk;for(const n of t)e=e.insert(n.key,n);return e}function dk(t){let e=hk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Es(){return Gl()}function fk(){return Gl()}function Gl(){return new Fa(t=>t.toString(),(t,e)=>t.isEqual(e))}const s9=new Je(ie.comparator),o9=new Mt(ie.comparator);function ge(...t){let e=o9;for(const n of t)e=e.add(n);return e}const a9=new Mt(xe);function l9(){return a9}/**
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
 */function pk(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zd(e)?"-0":e}}function mk(t){return{integerValue:""+t}}function u9(t,e){return U$(e)?mk(e):pk(t,e)}/**
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
 */class Xf{constructor(){this._=void 0}}function c9(t,e,n){return t instanceof Hd?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Hv(s)&&(s=qv(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ya?_k(t,e):t instanceof ku?yk(t,e):function(i,s){const o=gk(i,s),a=b1(o)+b1(i.Pe);return __(o)&&__(i.Pe)?mk(a):pk(i.serializer,a)}(t,e)}function h9(t,e,n){return t instanceof ya?_k(t,e):t instanceof ku?yk(t,e):n}function gk(t,e){return t instanceof qd?function(r){return __(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Hd extends Xf{}class ya extends Xf{constructor(e){super(),this.elements=e}}function _k(t,e){const n=vk(e);for(const r of t.elements)n.some(i=>Cr(i,r))||n.push(r);return{arrayValue:{values:n}}}class ku extends Xf{constructor(e){super(),this.elements=e}}function yk(t,e){let n=vk(e);for(const r of t.elements)n=n.filter(i=>!Cr(i,r));return{arrayValue:{values:n}}}class qd extends Xf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function b1(t){return ct(t.integerValue||t.doubleValue)}function vk(t){return Gv(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d9{constructor(e,n){this.field=e,this.transform=n}}function f9(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ya&&i instanceof ya||r instanceof ku&&i instanceof ku?ma(r.elements,i.elements,Cr):r instanceof qd&&i instanceof qd?Cr(r.Pe,i.Pe):r instanceof Hd&&i instanceof Hd}(t.transform,e.transform)}class p9{constructor(e,n){this.version=e,this.transformResults=n}}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ph(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jf{}function wk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tk(t.key,wr.none()):new ic(t.key,t.data,wr.none());{const n=t.data,r=cn.empty();let i=new Mt(Dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new is(t.key,r,new Cn(i.toArray()),wr.none())}}function m9(t,e,n){t instanceof ic?function(i,s,o){const a=i.value.clone(),l=O1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof is?function(i,s,o){if(!Ph(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=O1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Ek(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Kl(t,e,n,r){return t instanceof ic?function(s,o,a,l){if(!Ph(s.precondition,o))return a;const c=s.value.clone(),h=D1(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof is?function(s,o,a,l){if(!Ph(s.precondition,o))return a;const c=D1(s.fieldTransforms,l,o),h=o.data;return h.setAll(Ek(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Ph(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function g9(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=gk(r.transform,i||null);s!=null&&(n===null&&(n=cn.empty()),n.set(r.field,s))}return n||null}function N1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ma(r,i,(s,o)=>f9(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ic extends Jf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class is extends Jf{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ek(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function O1(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,h9(o,a,n[i]))}return r}function D1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,c9(s,o,e))}return r}class Tk extends Jf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _9 extends Jf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&m9(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Kl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Kl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=wk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&ma(this.mutations,e.mutations,(n,r)=>N1(n,r))&&ma(this.baseMutations,e.baseMutations,(n,r)=>N1(n,r))}}class Yv{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ue(e.mutations.length===r.length);let i=function(){return s9}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yv(e,n,r,i)}}/**
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
 */class v9{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w9{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut,we;function E9(t){switch(t){default:return ae();case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0}}function Ik(t){if(t===void 0)return ti("GRPC error has no .code"),z.UNKNOWN;switch(t){case ut.OK:return z.OK;case ut.CANCELLED:return z.CANCELLED;case ut.UNKNOWN:return z.UNKNOWN;case ut.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case ut.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case ut.INTERNAL:return z.INTERNAL;case ut.UNAVAILABLE:return z.UNAVAILABLE;case ut.UNAUTHENTICATED:return z.UNAUTHENTICATED;case ut.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case ut.NOT_FOUND:return z.NOT_FOUND;case ut.ALREADY_EXISTS:return z.ALREADY_EXISTS;case ut.PERMISSION_DENIED:return z.PERMISSION_DENIED;case ut.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case ut.ABORTED:return z.ABORTED;case ut.OUT_OF_RANGE:return z.OUT_OF_RANGE;case ut.UNIMPLEMENTED:return z.UNIMPLEMENTED;case ut.DATA_LOSS:return z.DATA_LOSS;default:return ae()}}(we=ut||(ut={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function T9(){return new TextEncoder}/**
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
 */const I9=new Rs([4294967295,4294967295],0);function L1(t){const e=T9().encode(t),n=new HR;return n.update(e),new Uint8Array(n.digest())}function M1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Rs([n,r],0),new Rs([i,s],0)]}class Xv{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Al(`Invalid padding: ${n}`);if(r<0)throw new Al(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Al(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Al(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Rs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Rs.fromNumber(r)));return i.compare(I9)===1&&(i=new Rs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=L1(e),[r,i]=M1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Xv(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=L1(e),[r,i]=M1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Al extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,sc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zf(le.min(),i,new Je(xe),ni(),ge())}}class sc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new sc(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Sk{constructor(e,n){this.targetId=e,this.me=n}}class Ck{constructor(e,n,r=Jt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class F1{constructor(){this.fe=0,this.ge=U1(),this.pe=Jt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new sc(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=U1()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class S9{constructor(e){this.Le=e,this.Be=new Map,this.ke=ni(),this.qe=V1(),this.Qe=new Je(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(v_(s))if(r===0){const o=new ie(s.path);this.Ue(n,o,Yt.newNoDocument(o,le.min()))}else Ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=zs(r).toUint8Array()}catch(l){if(l instanceof tk)return pa("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Xv(o,i,s)}catch(l){return pa(l instanceof Al?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&v_(a.target)){const l=new ie(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Yt.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ge();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Zf(e,n,this.Qe,this.ke,r);return this.ke=ni(),this.qe=V1(),this.Qe=new Je(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new F1,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Mt(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||J("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new F1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function V1(){return new Je(ie.comparator)}function U1(){return new Je(ie.comparator)}const C9=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),x9=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),A9=(()=>({and:"AND",or:"OR"}))();class R9{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function E_(t,e){return t.useProto3Json||qf(e)?e:{value:e}}function Gd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function k9(t,e){return Gd(t,e.toTimestamp())}function Er(t){return Ue(!!t),le.fromTimestamp(function(n){const r=Yi(n);return new wt(r.seconds,r.nanos)}(t))}function Jv(t,e){return T_(t,e).canonicalString()}function T_(t,e){const n=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Ak(t){const e=nt.fromString(t);return Ue(Nk(e)),e}function I_(t,e){return Jv(t.databaseId,e.path)}function km(t,e){const n=Ak(e);if(n.get(1)!==t.databaseId.projectId)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ie(kk(n))}function Rk(t,e){return Jv(t.databaseId,e)}function P9(t){const e=Ak(t);return e.length===4?nt.emptyPath():kk(e)}function S_(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kk(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function j1(t,e,n){return{name:I_(t,e),fields:n.value.mapValue.fields}}function b9(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ue(h===void 0||typeof h=="string"),Jt.fromBase64String(h||"")):(Ue(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Jt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?z.UNKNOWN:Ik(c.code);return new re(h,c.message||"")}(o);n=new Ck(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=km(t,r.document.name),s=Er(r.document.updateTime),o=r.document.createTime?Er(r.document.createTime):le.min(),a=new cn({mapValue:{fields:r.document.fields}}),l=Yt.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new bh(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=km(t,r.document),s=r.readTime?Er(r.readTime):le.min(),o=Yt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new bh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=km(t,r.document),s=r.removedTargetIds||[];n=new bh([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new w9(i,s),a=r.targetId;n=new Sk(a,o)}}return n}function N9(t,e){let n;if(e instanceof ic)n={update:j1(t,e.key,e.value)};else if(e instanceof Tk)n={delete:I_(t,e.key)};else if(e instanceof is)n={update:j1(t,e.key,e.data),updateMask:$9(e.fieldMask)};else{if(!(e instanceof _9))return ae();n={verify:I_(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Hd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ku)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof qd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:k9(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function O9(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Er(i.updateTime):Er(s);return o.isEqual(le.min())&&(o=Er(s)),new p9(o,i.transformResults||[])}(n,e))):[]}function D9(t,e){return{documents:[Rk(t,e.path)]}}function L9(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rk(t,i);const s=function(c){if(c.length!==0)return bk(xr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:go(p.field),direction:V9(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=E_(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function M9(t){let e=P9(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(d){const p=Pk(d);return p instanceof xr&&sk(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(p=>function(v){return new Wd(_o(v.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,qf(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,_=d.values||[];return new Bd(_,p)}(n.startAt));let c=null;return n.endAt&&(c=function(d){const p=!d.before,_=d.values||[];return new Bd(_,p)}(n.endAt)),Z$(e,i,o,s,a,"F",l,c)}function F9(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pk(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_o(n.unaryFilter.field);return yt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_o(n.unaryFilter.field);return yt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_o(n.unaryFilter.field);return yt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_o(n.unaryFilter.field);return yt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return yt.create(_o(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xr.create(n.compositeFilter.filters.map(r=>Pk(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function V9(t){return C9[t]}function U9(t){return x9[t]}function j9(t){return A9[t]}function go(t){return{fieldPath:t.canonicalString()}}function _o(t){return Dt.fromServerFormat(t.fieldPath)}function bk(t){return t instanceof yt?function(n){if(n.op==="=="){if(x1(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NAN"}};if(C1(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(x1(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NOT_NAN"}};if(C1(n.value))return{unaryFilter:{field:go(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:go(n.field),op:U9(n.op),value:n.value}}}(t):t instanceof xr?function(n){const r=n.getFilters().map(i=>bk(i));return r.length===1?r[0]:{compositeFilter:{op:j9(n.op),filters:r}}}(t):ae()}function $9(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Nk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class z9{constructor(e){this.ct=e}}function B9(t){const e=M9({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?w_(e,e.limit,"L"):e}/**
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
 */class W9{constructor(){this._n=new H9}addToCollectionParentIndex(e,n){return this._n.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(Qi.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(Qi.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class H9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Mt(nt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Mt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new va(0)}static Ln(){return new va(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q9{constructor(){this.changes=new Fa(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class G9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Kl(r.mutation,i,Cn.empty(),wt.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=Es();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=xl();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Es();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ni();const o=Gl(),a=function(){return Gl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof is)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Kl(h.mutation,c,h.mutation.getFieldMask(),wt.now())):o.set(c.key,Cn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var d;return a.set(c,new G9(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Gl();let i=new Je((o,a)=>o-a),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||Cn.empty();h=a.applyToLocalView(c,h),r.set(l,h);const d=(i.get(a.batchId)||ge()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=fk();h.forEach(p=>{if(!s.has(p)){const _=wk(n.get(p),r.get(p));_!==null&&d.set(p,_),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,d))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ie.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):e9(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(Es());let a=-1,l=s;return o.next(c=>$.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?$.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ge())).next(h=>({batchId:a,changes:dk(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ie(n)).next(r=>{let i=xl();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=xl();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,l=>{const c=function(d,p){return new Gf(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((d,p)=>{o=o.insert(d,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Yt.newInvalidDocument(h)))});let a=xl();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Kl(h.mutation,c,Cn.empty(),wt.now()),Yf(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class Q9{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return $.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Er(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:B9(i.bundledQuery),readTime:Er(i.readTime)}}(n)),$.resolve()}}/**
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
 */class Y9{constructor(){this.overlays=new Je(ie.comparator),this.hr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Es();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=Es(),s=n.length+1,o=new ie(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Je((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Es(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Es(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new v9(n,r));let s=this.hr.get(n);s===void 0&&(s=ge(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class X9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Mt(St.Ir)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new y9(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new St(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new St(n,0),i=new St(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Mt(xe);return n.forEach(i=>{const s=new St(i,0),o=new St(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),$.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ie.isDocumentKey(s)||(s=s.child(""));const o=new St(new ie(s),0);let a=new Mt(xe);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),$.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return $.forEach(n.mutations,i=>{const s=new St(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new St(n,0),i=this.wr.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J9{constructor(e){this.vr=e,this.docs=function(){return new Je(ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():Yt.newInvalidDocument(n))}getEntries(e,n){let r=ni();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Yt.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=ni();const o=n.path,a=new ie(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||L$(D$(h),r)<=0||(i.has(h.key)||Yf(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Fr(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Z9(this)}getSize(e){return $.resolve(this.size)}}class Z9 extends q9{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e5{constructor(e){this.persistence=e,this.Mr=new Fa(n=>Kv(n),Qv),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Zv,this.targetCount=0,this.Lr=va.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),$.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new va(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.qn(n),$.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n){this.Br={},this.overlays={},this.kr=new Wv(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new e5(this),this.indexManager=new W9,this.remoteDocumentCache=function(i){return new J9(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new z9(n),this.$r=new Q9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Y9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new X9(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){J("MemoryPersistence","Starting transaction:",e);const i=new n5(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return $.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class n5 extends F${constructor(e){super(),this.currentSequenceNumber=e}}class e0{constructor(e){this.persistence=e,this.zr=new Zv,this.jr=null}static Hr(e){return new e0(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),$.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Jr,r=>{const i=ie.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return $.or([()=>$.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class r5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class i5{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return DM()?8:V$(Vt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new r5;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(pl()<=me.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",mo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),$.resolve()):(pl()<=me.DEBUG&&J("QueryEngine","Query:",mo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(pl()<=me.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",mo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vr(n))):$.resolve())}ji(e,n){if(P1(n))return $.resolve(null);let r=vr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=w_(n,null,"F"),r=vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,w_(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return P1(n)||i.isEqual(le.min())?$.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?$.resolve(null):(pl()<=me.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mo(n)),this.es(e,o,n,O$(i,-1)).next(a=>a))})}Zi(e,n){let r=new Mt(ck(e));return n.forEach((i,s)=>{Yf(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return pl()<=me.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",mo(n)),this.zi.getDocumentsMatchingQuery(e,n,Qi.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class s5{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Je(xe),this.rs=new Fa(s=>Kv(s),Qv),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new K9(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function o5(t,e,n,r){return new s5(t,e,n,r)}async function Ok(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ge();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function a5(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,p=d.keys();let _=$.resolve();return p.forEach(v=>{_=_.next(()=>h.getEntry(l,v)).next(I=>{const k=c.docVersions.get(v);Ue(k!==null),I.version.compareTo(k)<0&&(d.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),h.addEntry(I)))})}),_.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ge();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function Dk(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function l5(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,d)=>{const p=i.get(d);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,d)));let _=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(Jt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,r)),i=i.insert(d,_),function(I,k,w){return I.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(p,_,h)&&a.push(n.Qr.updateTargetData(s,_))});let l=ni(),c=ge();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(u5(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(le.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(d=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function u5(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ni();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):J("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function c5(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function h5(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new ki(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function C_(t,e,n){const r=ue(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!rc(o))throw o;J("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function $1(t,e,n){const r=ue(t);let i=le.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const d=ue(l),p=d.rs.get(h);return p!==void 0?$.resolve(d.ns.get(p)):d.Qr.getTargetData(c,h)}(r,o,vr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:ge())).next(a=>(d5(r,n9(e),a),{documents:a,hs:s})))}function d5(t,e,n){let r=t.ss.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class z1{constructor(){this.activeTargetIds=l9()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class f5{constructor(){this.no=new z1,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new z1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class p5{io(e){}shutdown(){}}/**
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
 */const m5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g5{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="WebChannelConnection";class _5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Pm(),l=this.vo(n,r.toUriEncodedString());J("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(J("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw pa("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ma}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=m5[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Pm();return new Promise((o,a)=>{const l=new qR;l.setWithCredentials(!0),l.listenOnce(KR.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Rh.NO_ERROR:const h=l.getResponseJson();J(Wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Rh.TIMEOUT:J(Wt,`RPC '${e}' ${s} timed out`),a(new re(z.DEADLINE_EXCEEDED,"Request time out"));break;case Rh.HTTP_ERROR:const d=l.getStatus();if(J(Wt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const _=p==null?void 0:p.error;if(_&&_.status&&_.message){const v=function(k){const w=k.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(w)>=0?w:z.UNKNOWN}(_.status);a(new re(v,_.message))}else a(new re(z.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new re(z.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{J(Wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);J(Wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Pm(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=XR(),a=YR(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new GR({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");J(Wt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,_=!1;const v=new g5({lo:k=>{_?J(Wt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(p||(J(Wt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),J(Wt,`RPC '${e}' stream ${i} sending:`,k),d.send(k))},ho:()=>d.close()}),I=(k,w,g)=>{k.listen(w,S=>{try{g(S)}catch(O){setTimeout(()=>{throw O},0)}})};return I(d,Cl.EventType.OPEN,()=>{_||(J(Wt,`RPC '${e}' stream ${i} transport opened.`),v.mo())}),I(d,Cl.EventType.CLOSE,()=>{_||(_=!0,J(Wt,`RPC '${e}' stream ${i} transport closed`),v.po())}),I(d,Cl.EventType.ERROR,k=>{_||(_=!0,pa(Wt,`RPC '${e}' stream ${i} transport errored:`,k),v.po(new re(z.UNAVAILABLE,"The operation could not be completed")))}),I(d,Cl.EventType.MESSAGE,k=>{var w;if(!_){const g=k.data[0];Ue(!!g);const S=g,O=S.error||((w=S[0])===null||w===void 0?void 0:w.error);if(O){J(Wt,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let V=function(C){const A=ut[C];if(A!==void 0)return Ik(A)}(L),E=O.message;V===void 0&&(V=z.INTERNAL,E="Unknown error status: "+L+" with message "+O.message),_=!0,v.po(new re(V,E)),d.close()}else J(Wt,`RPC '${e}' stream ${i} received:`,g),v.yo(g)}}),I(a,QR.STAT_EVENT,k=>{k.stat===m_.PROXY?J(Wt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===m_.NOPROXY&&J(Wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function bm(){return typeof document<"u"?document:null}/**
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
 */function ep(t){return new R9(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mk{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Lk(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(ti(n.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new re(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return J("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(J("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class y5 extends Mk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=b9(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?Er(o.readTime):le.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=S_(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=v_(l)?{documents:D9(s,l)}:{query:L9(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xk(s,o.resumeToken);const c=E_(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=Gd(s,o.snapshotVersion.toTimestamp());const c=E_(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=F9(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=S_(this.serializer),n.removeTarget=e,this.i_(n)}}class v5 extends Mk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=O9(e.writeResults,e.commitTime),r=Er(e.commitTime);return this.listener.A_(r,n)}return Ue(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=S_(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>N9(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w5 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,T_(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(z.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,T_(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(z.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class E5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class T5{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Zs(this)&&(J("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ue(l);c.M_.add(4),await oc(c),c.N_.set("Unknown"),c.M_.delete(4),await tp(c)}(this))})}),this.N_=new E5(r,i)}}async function tp(t){if(Zs(t))for(const e of t.x_)await e(!0)}async function oc(t){for(const e of t.x_)await e(!1)}function Fk(t,e){const n=ue(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),s0(n)?i0(n):Va(n).Xo()&&r0(n,e))}function n0(t,e){const n=ue(t),r=Va(n);n.F_.delete(e),r.Xo()&&Vk(n,e),n.F_.size===0&&(r.Xo()?r.n_():Zs(n)&&n.N_.set("Unknown"))}function r0(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Va(t).P_(e)}function Vk(t,e){t.L_.xe(e),Va(t).I_(e)}function i0(t){t.L_=new S9({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Va(t).start(),t.N_.w_()}function s0(t){return Zs(t)&&!Va(t).Zo()&&t.F_.size>0}function Zs(t){return ue(t).M_.size===0}function Uk(t){t.L_=void 0}async function I5(t){t.N_.set("Online")}async function S5(t){t.F_.forEach((e,n)=>{r0(t,e)})}async function C5(t,e){Uk(t),s0(t)?(t.N_.D_(e),i0(t)):t.N_.set("Unknown")}async function x5(t,e,n){if(t.N_.set("Online"),e instanceof Ck&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){J("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Kd(t,r)}else if(e instanceof bh?t.L_.Ke(e):e instanceof Sk?t.L_.He(e):t.L_.We(e),!n.isEqual(le.min()))try{const r=await Dk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(Jt.EMPTY_BYTE_STRING,h.snapshotVersion)),Vk(s,l);const d=new ki(h.target,l,c,h.sequenceNumber);r0(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){J("RemoteStore","Failed to raise snapshot:",r),await Kd(t,r)}}async function Kd(t,e,n){if(!rc(e))throw e;t.M_.add(1),await oc(t),t.N_.set("Offline"),n||(n=()=>Dk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{J("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await tp(t)})}function jk(t,e){return e().catch(n=>Kd(t,n,e))}async function np(t){const e=ue(t),n=Xi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;A5(e);)try{const i=await c5(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,R5(e,i)}catch(i){await Kd(e,i)}$k(e)&&zk(e)}function A5(t){return Zs(t)&&t.v_.length<10}function R5(t,e){t.v_.push(e);const n=Xi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function $k(t){return Zs(t)&&!Xi(t).Zo()&&t.v_.length>0}function zk(t){Xi(t).start()}async function k5(t){Xi(t).V_()}async function P5(t){const e=Xi(t);for(const n of t.v_)e.d_(n.mutations)}async function b5(t,e,n){const r=t.v_.shift(),i=Yv.from(r,e,n);await jk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await np(t)}async function N5(t,e){e&&Xi(t).E_&&await async function(r,i){if(function(o){return E9(o)&&o!==z.ABORTED}(i.code)){const s=r.v_.shift();Xi(r).t_(),await jk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await np(r)}}(t,e),$k(t)&&zk(t)}async function W1(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),J("RemoteStore","RemoteStore received new credentials");const r=Zs(n);n.M_.add(3),await oc(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await tp(n)}async function O5(t,e){const n=ue(t);e?(n.M_.delete(2),await tp(n)):e||(n.M_.add(2),await oc(n),n.N_.set("Unknown"))}function Va(t){return t.B_||(t.B_=function(n,r,i){const s=ue(n);return s.f_(),new y5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:I5.bind(null,t),To:S5.bind(null,t),Ao:C5.bind(null,t),h_:x5.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),s0(t)?i0(t):t.N_.set("Unknown")):(await t.B_.stop(),Uk(t))})),t.B_}function Xi(t){return t.k_||(t.k_=function(n,r,i){const s=ue(n);return s.f_(),new v5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:k5.bind(null,t),Ao:N5.bind(null,t),R_:P5.bind(null,t),A_:b5.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await np(t)):(await t.k_.stop(),t.v_.length>0&&(J("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new o0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function a0(t,e){if(ti("AsyncQueue",`${e}: ${t}`),rc(t))return new re(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ie.comparator(n.key,r.key):(n,r)=>ie.comparator(n.key,r.key),this.keyedMap=xl(),this.sortedSet=new Je(this.comparator)}static emptySet(e){return new Qo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Qo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(){this.q_=new Je(ie.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ae():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class wa{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wa(e,n,Qo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D5{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class L5{constructor(){this.queries=new Fa(e=>uk(e),Qf),this.onlineState="Unknown",this.z_=new Set}}async function Bk(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new D5,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=a0(o,`Initialization of query '${mo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&l0(n)}async function Wk(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function M5(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&l0(n)}function F5(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function l0(t){t.z_.forEach(e=>{e.next()})}var x_,q1;(q1=x_||(x_={})).J_="default",q1.Cache="cache";class Hk{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new wa(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=wa.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==x_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e){this.key=e}}class Gk{constructor(e){this.key=e}}class V5{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ge(),this.mutatedKeys=ge(),this.Ia=ck(e),this.Ta=new Qo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new H1,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const p=i.get(h),_=Yf(this.query,d)?d:null,v=!!p&&this.mutatedKeys.has(p.key),I=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let k=!1;p&&_?p.data.isEqual(_.data)?v!==I&&(r.track({type:3,doc:_}),k=!0):this.Ra(p,_)||(r.track({type:2,doc:_}),k=!0,(l&&this.Ia(_,l)>0||c&&this.Ia(_,c)<0)&&(a=!0)):!p&&_?(r.track({type:0,doc:_}),k=!0):p&&!_&&(r.track({type:1,doc:p}),k=!0,(l||c)&&(a=!0)),k&&(_?(o=o.add(_),s=I?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,d)=>function(_,v){const I=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return I(_)-I(v)}(h.type,d.type)||this.Ia(h.doc,d.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new wa(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new H1,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ge(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Gk(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new qk(r))}),n}pa(e){this.la=e.hs,this.Pa=ge();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return wa.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class U5{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class j5{constructor(e){this.key=e,this.wa=!1}}class $5{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Fa(a=>uk(a),Qf),this.Da=new Map,this.Ca=new Set,this.va=new Je(ie.comparator),this.Fa=new Map,this.Ma=new Zv,this.xa={},this.Oa=new Map,this.Na=va.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function z5(t,e,n=!0){const r=Zk(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await Kk(r,e,n,!0),i}async function B5(t,e){const n=Zk(t);await Kk(n,e,!0,!1)}async function Kk(t,e,n,r){const i=await h5(t.localStore,vr(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await W5(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&Fk(t.remoteStore,i),a}async function W5(t,e,n,r,i){t.Ba=(d,p,_)=>async function(I,k,w,g){let S=k.view.da(w);S.Xi&&(S=await $1(I.localStore,k.query,!1).then(({documents:E})=>k.view.da(E,S)));const O=g&&g.targetChanges.get(k.targetId),L=g&&g.targetMismatches.get(k.targetId)!=null,V=k.view.applyChanges(S,I.isPrimaryClient,O,L);return K1(I,k.targetId,V.fa),V.snapshot}(t,d,p,_);const s=await $1(t.localStore,e,!0),o=new V5(e,s.hs),a=o.da(s.documents),l=sc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);K1(t,n,c.fa);const h=new U5(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function H5(t,e,n){const r=ue(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Qf(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await C_(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&n0(r.remoteStore,i.targetId),A_(r,i.targetId)}).catch(nc)):(A_(r,i.targetId),await C_(r.localStore,i.targetId,!0))}async function q5(t,e){const n=ue(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),n0(n.remoteStore,r.targetId))}async function G5(t,e,n){const r=e6(t);try{const i=await function(o,a){const l=ue(o),c=wt.now(),h=a.reduce((_,v)=>_.add(v.key),ge());let d,p;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let v=ni(),I=ge();return l.os.getEntries(_,h).next(k=>{v=k,v.forEach((w,g)=>{g.isValidDocument()||(I=I.add(w))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,v)).next(k=>{d=k;const w=[];for(const g of a){const S=g9(g,d.get(g.key).overlayedDocument);S!=null&&w.push(new is(g.key,S,nk(S.value.mapValue),wr.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,w,a)}).next(k=>{p=k;const w=k.applyToLocalDocumentSet(d,I);return l.documentOverlayCache.saveOverlays(_,k.batchId,w)})}).then(()=>({batchId:p.batchId,changes:dk(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new Je(xe)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ac(r,i.changes),await np(r.remoteStore)}catch(i){const s=a0(i,"Failed to persist write");n.reject(s)}}async function Qk(t,e){const n=ue(t);try{const r=await l5(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Ue(o.wa):i.removedDocuments.size>0&&(Ue(o.wa),o.wa=!1))}),await ac(n,r,e)}catch(r){await nc(r)}}function G1(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const p of d.U_)p.j_(a)&&(c=!0)}),c&&l0(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function K5(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Je(ie.comparator);o=o.insert(s,Yt.newNoDocument(s,le.min()));const a=ge().add(s),l=new Zf(le.min(),new Map,new Je(xe),o,a);await Qk(r,l),r.va=r.va.remove(s),r.Fa.delete(e),u0(r)}else await C_(r.localStore,e,!1).then(()=>A_(r,e,n)).catch(nc)}async function Q5(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await a5(n.localStore,e);Xk(n,r,null),Yk(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ac(n,i)}catch(i){await nc(i)}}async function Y5(t,e,n){const r=ue(t);try{const i=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(Ue(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);Xk(r,e,n),Yk(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ac(r,i)}catch(i){await nc(i)}}function Yk(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Xk(t,e,n){const r=ue(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function A_(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Jk(t,r)})}function Jk(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(n0(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),u0(t))}function K1(t,e,n){for(const r of n)r instanceof qk?(t.Ma.addReference(r.key,e),X5(t,r)):r instanceof Gk?(J("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Jk(t,r.key)):ae()}function X5(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(J("SyncEngine","New document in limbo: "+n),t.Ca.add(r),u0(t))}function u0(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new ie(nt.fromString(e)),r=t.Na.next();t.Fa.set(r,new j5(n)),t.va=t.va.insert(n,r),Fk(t.remoteStore,new ki(vr(Kf(n.path)),r,"TargetPurposeLimboResolution",Wv.oe))}}async function ac(t,e,n){const r=ue(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=t0.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=ue(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>$.forEach(c,p=>$.forEach(p.qi,_=>h.persistence.referenceDelegate.addReference(d,p.targetId,_)).next(()=>$.forEach(p.Qi,_=>h.persistence.referenceDelegate.removeReference(d,p.targetId,_)))))}catch(d){if(!rc(d))throw d;J("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const p=d.targetId;if(!d.fromCache){const _=h.ns.get(p),v=_.snapshotVersion,I=_.withLastLimboFreeSnapshotVersion(v);h.ns=h.ns.insert(p,I)}}}(r.localStore,s))}async function J5(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){J("SyncEngine","User change. New user:",e.toKey());const r=await Ok(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new re(z.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ac(n,r.us)}}function Z5(t,e){const n=ue(t),r=n.Fa.get(e);if(r&&r.wa)return ge().add(r.key);{let i=ge();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}function Zk(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qk.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Z5.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=K5.bind(null,e),e.Sa.h_=M5.bind(null,e.eventManager),e.Sa.ka=F5.bind(null,e.eventManager),e}function e6(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Q5.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Y5.bind(null,e),e}class Q1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ep(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return o5(this.persistence,new i5,e.initialUser,this.serializer)}createPersistence(e){return new t5(e0.Hr,this.serializer)}createSharedClientState(e){return new f5}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class t6{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>G1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=J5.bind(null,this.syncEngine),await O5(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new L5}()}createDatastore(e){const n=ep(e.databaseInfo.databaseId),r=function(s){return new _5(s)}(e.databaseInfo);return function(s,o,a,l){return new w5(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new T5(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>G1(this.syncEngine,n,0),function(){return B1.D()?new B1:new p5}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const d=new $5(i,s,o,a,l,c);return h&&(d.La=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=ue(r);J("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await oc(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class eP{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):ti("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qt.UNAUTHENTICATED,this.clientId=ZR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{J("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(J("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=a0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nm(t,e){t.asyncQueue.verifyOperationInProgress(),J("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ok(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Y1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await i6(t);J("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>W1(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>W1(e.remoteStore,i)),t._onlineComponents=e}function r6(t){return t.name==="FirebaseError"?t.code===z.FAILED_PRECONDITION||t.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function i6(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){J("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!r6(n))throw n;pa("Error using user provided cache. Falling back to memory cache: "+n),await Nm(t,new Q1)}}else J("FirestoreClient","Using default OfflineComponentProvider"),await Nm(t,new Q1);return t._offlineComponents}async function tP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(J("FirestoreClient","Using user provided OnlineComponentProvider"),await Y1(t,t._uninitializedComponentsProvider._online)):(J("FirestoreClient","Using default OnlineComponentProvider"),await Y1(t,new t6))),t._onlineComponents}function s6(t){return tP(t).then(e=>e.syncEngine)}async function R_(t){const e=await tP(t),n=e.eventManager;return n.onListen=z5.bind(null,e.syncEngine),n.onUnlisten=H5.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=B5.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=q5.bind(null,e.syncEngine),n}function o6(t,e,n={}){const r=new Bi;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new eP({next:p=>{o.enqueueAndForget(()=>Wk(s,d));const _=p.docs.has(a);!_&&p.fromCache?c.reject(new re(z.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&p.fromCache&&l&&l.source==="server"?c.reject(new re(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),d=new Hk(Kf(a.path),h,{includeMetadataChanges:!0,ra:!0});return Bk(s,d)}(await R_(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function a6(t,e,n){if(!n)throw new re(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function l6(t,e,n,r){if(e===!0&&r===!0)throw new re(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function J1(t){if(!ie.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function c0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Tr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=c0(t);throw new re(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Z1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new re(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}l6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class h0{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Z1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new re(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new re(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Z1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new S$;switch(r.type){case"firstParty":return new R$(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=X1.get(n);r&&(J("ComponentProvider","Removing Datastore"),X1.delete(n),r.terminate())}(this),Promise.resolve()}}function u6(t,e,n,r={}){var i;const s=(t=Tr(t,h0))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&pa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=qt.MOCK_USER;else{a=nv(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new re(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new qt(c)}t._authCredentials=new C$(new JR(a,l))}}/**
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
 */class rp{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rp(this.firestore,e,this._query)}}class _n{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _n(this.firestore,e,this._key)}}class Pu extends rp{constructor(e,n,r){super(e,n,Kf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _n(this.firestore,null,new ie(e))}withConverter(e){return new Pu(this.firestore,e,this._path)}}function Qd(t,e,...n){if(t=Xe(t),arguments.length===1&&(e=ZR.newId()),a6("doc","path",e),t instanceof h0){const r=nt.fromString(e,...n);return J1(r),new _n(t,null,new ie(r))}{if(!(t instanceof _n||t instanceof Pu))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return J1(r),new _n(t.firestore,t instanceof Pu?t.converter:null,new ie(r))}}/**
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
 */class c6{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Lk(this,"async_queue_retry"),this.hu=()=>{const n=bm();n&&J("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=bm();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=bm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Bi;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!rc(e))throw e;J("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ti("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=o0.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&ae()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function eI(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Ea extends h0{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new c6}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rP(this),this._firestoreClient.terminate()}}function h6(t,e){const n=typeof t=="object"?t:Df(),r=typeof t=="string"?t:e||"(default)",i=Wu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ev("firestore");s&&u6(i,...s)}return i}function d0(t){return t._firestoreClient||rP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function rP(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new $$(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,nP(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new n6(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Ta{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ta(Jt.fromBase64String(e))}catch(n){throw new re(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ta(Jt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ip{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class f0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d6=/^__.*__$/;class f6{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new is(e,this.data,this.fieldMask,n,this.fieldTransforms):new ic(e,this.data,n,this.fieldTransforms)}}class iP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new is(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class op{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new op(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Yd(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(sP(this.fu)&&d6.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class p6{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ep(e)}Fu(e,n,r,i=!1){return new op({fu:e,methodName:n,vu:r,path:Dt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function oP(t){const e=t._freezeSettings(),n=ep(t._databaseId);return new p6(t._databaseId,!!e.ignoreUndefinedProperties,n)}function m6(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);m0("Data must be an object, but it was:",o,r);const a=aP(r,o);let l,c;if(s.merge)l=new Cn(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=k_(e,d,n);if(!o.contains(p))throw new re(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);uP(h,p)||h.push(p)}l=new Cn(h),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new f6(new cn(a),l,c)}class ap extends sp{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ap}}function g6(t,e,n){return new op({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class p0 extends sp{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=g6(this,e,!0),r=this.Mu.map(s=>lc(s,n)),i=new ya(r);return new d9(e.path,i)}isEqual(e){return e instanceof p0&&mu(this.Mu,e.Mu)}}function _6(t,e,n,r){const i=t.Fu(1,e,n);m0("Data must be an object, but it was:",i,r);const s=[],o=cn.empty();Js(r,(l,c)=>{const h=g0(e,l,n);c=Xe(c);const d=i.Su(h);if(c instanceof ap)s.push(h);else{const p=lc(c,d);p!=null&&(s.push(h),o.set(h,p))}});const a=new Cn(s);return new iP(o,a,i.fieldTransforms)}function y6(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[k_(e,r,n)],l=[i];if(s.length%2!=0)throw new re(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(k_(e,s[p])),l.push(s[p+1]);const c=[],h=cn.empty();for(let p=a.length-1;p>=0;--p)if(!uP(c,a[p])){const _=a[p];let v=l[p];v=Xe(v);const I=o.Su(_);if(v instanceof ap)c.push(_);else{const k=lc(v,I);k!=null&&(c.push(_),h.set(_,k))}}const d=new Cn(c);return new iP(h,d,o.fieldTransforms)}function lc(t,e){if(lP(t=Xe(t)))return m0("Unsupported field value:",e,t),aP(t,e);if(t instanceof sp)return function(r,i){if(!sP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=lc(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return u9(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=wt.fromDate(r);return{timestampValue:Gd(i.serializer,s)}}if(r instanceof wt){const s=new wt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Gd(i.serializer,s)}}if(r instanceof f0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ta)return{bytesValue:xk(i.serializer,r._byteString)};if(r instanceof _n){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Jv(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${c0(r)}`)}(t,e)}function aP(t,e){const n={};return ek(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(r,i)=>{const s=lc(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function lP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof wt||t instanceof f0||t instanceof Ta||t instanceof _n||t instanceof sp)}function m0(t,e,n){if(!lP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=c0(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function k_(t,e,n){if((e=Xe(e))instanceof ip)return e._internalPath;if(typeof e=="string")return g0(t,e);throw Yd("Field path arguments must be of type string or ",t,!1,void 0,n)}const v6=new RegExp("[~\\*/\\[\\]]");function g0(t,e,n){if(e.search(v6)>=0)throw Yd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ip(...e.split("."))._internalPath}catch{throw Yd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new re(z.INVALID_ARGUMENT,a+t+l)}function uP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cP{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new w6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hP("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class w6 extends cP{data(){return super.data()}}function hP(t,e){return typeof e=="string"?g0(t,e):e instanceof ip?e._internalPath:e._delegate._internalPath}/**
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
 */function E6(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class T6{convertValue(e,n="none"){switch(Bs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Js(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new f0(ct(e.latitude),ct(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=qv(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(xu(e));default:return null}}convertTimestamp(e){const n=Yi(e);return new wt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=nt.fromString(e);Ue(Nk(r));const i=new Au(r.get(1),r.get(3)),s=new ie(r.popFirst(5));return i.isEqual(n)||ti(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function I6(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Rl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class dP extends cP{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Nh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hP("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Nh extends dP{data(e={}){return super.data(e)}}class S6{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Rl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Nh(this._firestore,this._userDataWriter,r.key,r,new Rl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Nh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Nh(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:C6(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function C6(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
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
 */function tI(t){t=Tr(t,_n);const e=Tr(t.firestore,Ea);return o6(d0(e),t._key).then(n=>mP(e,t,n))}class fP extends T6{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ta(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function x6(t,e,n){t=Tr(t,_n);const r=Tr(t.firestore,Ea),i=I6(t.converter,e,n);return pP(r,[m6(oP(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,wr.none())])}function nI(t,e,n,...r){t=Tr(t,_n);const i=Tr(t.firestore,Ea),s=oP(i);let o;return o=typeof(e=Xe(e))=="string"||e instanceof ip?y6(s,"updateDoc",t._key,e,n,r):_6(s,"updateDoc",t._key,e),pP(i,[o.toMutation(t._key,wr.exists(!0))])}function A6(t,...e){var n,r,i;t=Xe(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||eI(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(eI(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(i=d.complete)===null||i===void 0?void 0:i.bind(d)}let l,c,h;if(t instanceof _n)c=Tr(t.firestore,Ea),h=Kf(t._key.path),l={next:d=>{e[o]&&e[o](mP(c,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Tr(t,rp);c=Tr(d.firestore,Ea),h=d._query;const p=new fP(c);l={next:_=>{e[o]&&e[o](new S6(c,p,d,_))},error:e[o+1],complete:e[o+2]},E6(t._query)}return function(p,_,v,I){const k=new eP(I),w=new Hk(_,k,v);return p.asyncQueue.enqueueAndForget(async()=>Bk(await R_(p),w)),()=>{k.$a(),p.asyncQueue.enqueueAndForget(async()=>Wk(await R_(p),w))}}(d0(c),h,a,l)}function pP(t,e){return function(r,i){const s=new Bi;return r.asyncQueue.enqueueAndForget(async()=>G5(await s6(r),i,s)),s.promise}(d0(t),e)}function mP(t,e,n){const r=n.docs.get(e._key),i=new fP(t);return new dP(t,i,e._key,r,new Rl(n.hasPendingWrites,n.fromCache),e.converter)}function R6(...t){return new p0("arrayUnion",t)}(function(e,n=!0){(function(i){Ma=i})(ns),qi(new Jr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ea(new x$(r.getProvider("auth-internal")),new P$(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Au(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Fn(E1,"4.6.3",e),Fn(E1,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP="firebasestorage.googleapis.com",k6="storageBucket",P6=2*60*1e3,b6=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ar;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ar||(Ar={}));function Om(t){return"storage/"+t}function N6(){const t="An unknown error occurred, please check the error payload for server response.";return new kr(Ar.UNKNOWN,t)}function O6(){return new kr(Ar.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function D6(){return new kr(Ar.CANCELED,"User canceled the upload/download.")}function L6(t){return new kr(Ar.INVALID_URL,"Invalid URL '"+t+"'.")}function M6(t){return new kr(Ar.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function rI(t){return new kr(Ar.INVALID_ARGUMENT,t)}function _P(){return new kr(Ar.APP_DELETED,"The Firebase app was deleted.")}function F6(t){return new kr(Ar.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Xn.makeFromUrl(e,n)}catch{return new Xn(e,"")}if(r.path==="")return r;throw M6(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(O){O.path_=decodeURIComponent(O.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",_=new RegExp(`^https?://${d}/${h}/b/${i}/o${p}`,"i"),v={bucket:1,path:3},I=n===gP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",w=new RegExp(`^https?://${I}/${i}/${k}`,"i"),S=[{regex:a,indices:l,postModify:s},{regex:_,indices:v,postModify:c},{regex:w,indices:{bucket:1,path:2},postModify:c}];for(let O=0;O<S.length;O++){const L=S[O],V=L.regex.exec(e);if(V){const E=V[L.indices.bucket];let T=V[L.indices.path];T||(T=""),r=new Xn(E,T),L.postModify(r);break}}if(r==null)throw L6(e);return r}}class V6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U6(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...k){c||(c=!0,e.apply(null,k))}function d(k){i=setTimeout(()=>{i=null,t(_,l())},k)}function p(){s&&clearTimeout(s)}function _(k,...w){if(c){p();return}if(k){p(),h.call(null,k,...w);return}if(l()||o){p(),h.call(null,k,...w);return}r<64&&(r*=2);let S;a===1?(a=2,S=0):S=(r+Math.random())*1e3,d(S)}let v=!1;function I(k){v||(v=!0,p(),!c&&(i!==null?(k||(a=2),clearTimeout(i),d(0)):k||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,I(!0)},n),I}function j6(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $6(t){return t!==void 0}function iI(t,e,n,r){if(r<e)throw rI(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rI(`Invalid value for '${t}'. Expected ${n} or less.`)}function z6(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function B6(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e,n,r,i,s,o,a,l,c,h,d,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new eh(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Xd.NO_ERROR,l=s.getStatus();if(!a||B6(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===Xd.ABORT;r(!1,new eh(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new eh(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());$6(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=N6();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?_P():D6();o(l)}else{const l=O6();o(l)}};this.canceled_?n(!1,new eh(!1,null,!0)):this.backoffId_=U6(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&j6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class eh{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function H6(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function q6(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function G6(t,e){e&&(t["X-Firebase-GMPID"]=e)}function K6(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Q6(t,e,n,r,i,s,o=!0){const a=z6(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return G6(c,e),H6(c,n),q6(c,s),K6(c,r),new W6(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y6(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function X6(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Jd{constructor(e,n){this._service=e,n instanceof Xn?this._location=n:this._location=Xn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Jd(e,n)}get root(){const e=new Xn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return X6(this._location.path)}get storage(){return this._service}get parent(){const e=Y6(this._location.path);if(e===null)return null;const n=new Xn(this._location.bucket,e);return new Jd(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw F6(e)}}function sI(t,e){const n=e==null?void 0:e[k6];return n==null?null:Xn.makeFromBucketSpec(n,t)}function J6(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:nv(i,t.app.options.projectId))}class Z6{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=P6,this._maxUploadRetryTime=b6,this._requests=new Set,i!=null?this._bucket=Xn.makeFromBucketSpec(i,this._host):this._bucket=sI(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xn.makeFromBucketSpec(this._url,e):this._bucket=sI(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iI("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iI("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jd(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new V6(_P());{const o=Q6(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const oI="@firebase/storage",aI="0.12.5";/**
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
 */const yP="storage";function ez(t=Df(),e){t=Xe(t);const r=Wu(t,yP).getImmediate({identifier:e}),i=ev("storage");return i&&tz(r,...i),r}function tz(t,e,n,r={}){J6(t,e,n,r)}function nz(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Z6(n,r,i,e,ns)}function rz(){qi(new Jr(yP,nz,"PUBLIC").setMultipleInstances(!0)),Fn(oI,aI,""),Fn(oI,aI,"esm2017")}rz();const iz={apiKey:{}.VITE_FIREBASE_API_KEY,authDomain:{}.VITE_FIREBASE_AUTH_DOMAIN,projectId:{}.VITE_FIREBASE_PROJECT_ID,storageBucket:{}.VITE_FIREBASE_STORAGE_BUCKET,databaseURL:{}.VITE_FIREBASE_DATABASE_URL,messagingSenderId:{}.VITE_FIREBASE_MESSAGING_SENDER_ID,appId:{}.VITE_FIREBASE_APP_ID},sz=qx(iz),th=Qu(sz),oz=E$();ez();const Zd=h6(),vP=j.createContext(),az=({children:t})=>{const[e,n]=j.useState(null),r=(o,a)=>XV(th,o,a),i=(o,a)=>JV(th,o,a),s=()=>r4(th);return j.useEffect(()=>yA(th,a=>{n(a)}),[]),R.jsx(vP.Provider,{value:{currentUser:e,signup:r,login:i,logout:s},children:t})},_0=()=>j.useContext(vP),lz=({isModalOpen:t,closeModal:e})=>{const{login:n}=_0(),r=Pf().shape({email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:dr().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Wy({resolver:Hy(r),mode:"onChange"}),a=async({email:l,password:c},h)=>{h.preventDefault();try{await n(l,c),e()}catch(d){console.error("Error logging in:",d)}};return t?R.jsx(R.Fragment,{children:t&&R.jsx(Xy,{onClose:e,children:R.jsxs(yM,{children:[R.jsx(vM,{onClick:e,children:R.jsx(Jy,{size:32})}),R.jsxs(wM,{children:[R.jsx("h2",{children:"Log In"}),R.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),R.jsxs(EM,{onSubmit:s(a),noValidate:!0,children:[R.jsxs(uT,{children:[R.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),R.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&R.jsx(cT,{children:o.email.message})]}),R.jsxs(uT,{children:[R.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),R.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&R.jsx(cT,{children:o.phone.message})]}),R.jsx(TM,{type:"submit",children:"Log In"})]})]})})}):null},uz=ne.div`
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
`,cz=ne.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,hz=ne.div`
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
`,dz=ne.form`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  overflow-y: auto;
`,Dm=ne.div`
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
`,Lm=ne.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,fz=ne.button`
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
`,pz=({isModalOpen:t,closeModal:e})=>{const{signup:n}=_0(),r=Pf().shape({name:dr().min(2,"Name must be at least 2 characters").required("Name is required"),email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),password:dr().min(6,"Password must be at least 6 characters").required("Password is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Wy({resolver:Hy(r),mode:"onChange"}),a=async({name:l,email:c,password:h},d)=>{d.preventDefault();try{await n(c,h);const _=Qu().currentUser;await e4(_,{displayName:l}),await x6(Qd(Zd,"users",_.uid),{email:_.email,name:_.displayName,id:_.uid,favorites:[]}),e(),alert("Form submitted successfully!")}catch(p){console.error("Error signing up:",p)}};return t?R.jsx(R.Fragment,{children:t&&R.jsx(Xy,{onClose:e,children:R.jsxs(uz,{children:[R.jsx(cz,{onClick:e,children:R.jsx(Jy,{size:32})}),R.jsxs(hz,{children:[R.jsx("h2",{children:"Sign Up"}),R.jsx("p",{children:"Welcome back! Please enter your credentials to access your account and continue your search for an teacher."})]}),R.jsxs(dz,{onSubmit:s(a),noValidate:!0,children:[R.jsxs(Dm,{children:[R.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),R.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&R.jsx(Lm,{children:o.name.message})]}),R.jsxs(Dm,{children:[R.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),R.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&R.jsx(Lm,{children:o.email.message})]}),R.jsxs(Dm,{children:[R.jsx("input",{type:"password",...i("password"),className:o.password?"error":"",placeholder:" "}),R.jsx("label",{className:o.password?"error":"",children:"Password"}),o.phone&&R.jsx(Lm,{children:o.phone.message})]}),R.jsx(fz,{type:"submit",children:"Sing Up"})]})]})})}):null},mz=()=>{const[t,e]=j.useState(!1),[n,r]=j.useState(!1),i=Ws(),s=B_(),{currentUser:o,logout:a}=_0(),l=()=>{e(!0)},c=()=>{e(!1)},h=()=>{r(!0)},d=()=>{r(!1)},p=()=>{a(),s("/home")},_=v=>i.pathname===v;return R.jsxs(MD,{children:[R.jsxs(FD,{to:"/home",children:[R.jsx("img",{src:$D,alt:"Logo",width:28,height:28}),R.jsx("span",{children:"LearnLingo"})]}),R.jsxs(VD,{children:[R.jsx(Wc,{to:"/home",className:_("/home")?"active":"",children:"Home"}),R.jsx(Wc,{to:"/teachers",className:_("/teachers")?"active":"",children:"Teachers"}),o?R.jsx(Wc,{to:"/favorites",className:_("/favorites")?"active":"",children:"Favorites"}):R.jsx(Wc,{to:"/favorites",style:{pointerEvents:"none",cursor:"default",color:"var(--subtitle-text-color)"},children:"Favorites"})]}),R.jsx(UD,{children:o?R.jsxs(R.Fragment,{children:[R.jsx("span",{children:o.displayName?o.displayName:o.email}),R.jsx(BE,{onClick:p,children:R.jsx(YD,{size:20,color:"#f4c550"})})]}):R.jsxs(R.Fragment,{children:[R.jsxs(BE,{onClick:l,children:[R.jsx(QD,{size:20,color:"#f4c550"}),R.jsx("span",{children:"Login"})]}),t&&R.jsx(lz,{isModalOpen:t,closeModal:c}),R.jsx(jD,{onClick:h,children:"Registration"}),n&&R.jsx(pz,{isModalOpen:n,closeModal:d})]})})]})},gz=ne.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 64px;
  width: 1440px;
  margin: 0 auto;
`,_z=({children:t})=>R.jsx(gz,{children:t}),yz=()=>R.jsxs(_z,{children:[R.jsx(mz,{}),R.jsx(j.Suspense,{fallback:null,children:R.jsx(UI,{})})]});function P_(){return P_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},P_.apply(this,arguments)}function vz(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function wz(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var Ez=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(wz(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=vz(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),Ht="-ms-",ef="-moz-",Se="-webkit-",wP="comm",y0="rule",v0="decl",Tz="@import",EP="@keyframes",Iz="@layer",Sz=Math.abs,lp=String.fromCharCode,Cz=Object.assign;function xz(t,e){return Ot(t,0)^45?(((e<<2^Ot(t,0))<<2^Ot(t,1))<<2^Ot(t,2))<<2^Ot(t,3):0}function TP(t){return t.trim()}function Az(t,e){return(t=e.exec(t))?t[0]:t}function Ce(t,e,n){return t.replace(e,n)}function b_(t,e){return t.indexOf(e)}function Ot(t,e){return t.charCodeAt(e)|0}function bu(t,e,n){return t.slice(e,n)}function lr(t){return t.length}function w0(t){return t.length}function nh(t,e){return e.push(t),t}function Rz(t,e){return t.map(e).join("")}var up=1,Ia=1,IP=0,vn=0,dt=0,Ua="";function cp(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:up,column:Ia,length:o,return:""}}function ml(t,e){return Cz(cp("",null,null,"",null,null,0),t,{length:-t.length},e)}function kz(){return dt}function Pz(){return dt=vn>0?Ot(Ua,--vn):0,Ia--,dt===10&&(Ia=1,up--),dt}function Rn(){return dt=vn<IP?Ot(Ua,vn++):0,Ia++,dt===10&&(Ia=1,up++),dt}function Ir(){return Ot(Ua,vn)}function Oh(){return vn}function uc(t,e){return bu(Ua,t,e)}function Nu(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function SP(t){return up=Ia=1,IP=lr(Ua=t),vn=0,[]}function CP(t){return Ua="",t}function Dh(t){return TP(uc(vn-1,N_(t===91?t+2:t===40?t+1:t)))}function bz(t){for(;(dt=Ir())&&dt<33;)Rn();return Nu(t)>2||Nu(dt)>3?"":" "}function Nz(t,e){for(;--e&&Rn()&&!(dt<48||dt>102||dt>57&&dt<65||dt>70&&dt<97););return uc(t,Oh()+(e<6&&Ir()==32&&Rn()==32))}function N_(t){for(;Rn();)switch(dt){case t:return vn;case 34:case 39:t!==34&&t!==39&&N_(dt);break;case 40:t===41&&N_(t);break;case 92:Rn();break}return vn}function Oz(t,e){for(;Rn()&&t+dt!==47+10;)if(t+dt===42+42&&Ir()===47)break;return"/*"+uc(e,vn-1)+"*"+lp(t===47?t:Rn())}function Dz(t){for(;!Nu(Ir());)Rn();return uc(t,vn)}function Lz(t){return CP(Lh("",null,null,null,[""],t=SP(t),0,[0],t))}function Lh(t,e,n,r,i,s,o,a,l){for(var c=0,h=0,d=o,p=0,_=0,v=0,I=1,k=1,w=1,g=0,S="",O=i,L=s,V=r,E=S;k;)switch(v=g,g=Rn()){case 40:if(v!=108&&Ot(E,d-1)==58){b_(E+=Ce(Dh(g),"&","&\f"),"&\f")!=-1&&(w=-1);break}case 34:case 39:case 91:E+=Dh(g);break;case 9:case 10:case 13:case 32:E+=bz(v);break;case 92:E+=Nz(Oh()-1,7);continue;case 47:switch(Ir()){case 42:case 47:nh(Mz(Oz(Rn(),Oh()),e,n),l);break;default:E+="/"}break;case 123*I:a[c++]=lr(E)*w;case 125*I:case 59:case 0:switch(g){case 0:case 125:k=0;case 59+h:w==-1&&(E=Ce(E,/\f/g,"")),_>0&&lr(E)-d&&nh(_>32?uI(E+";",r,n,d-1):uI(Ce(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(nh(V=lI(E,e,n,c,h,i,a,S,O=[],L=[],d),s),g===123)if(h===0)Lh(E,e,V,V,O,s,d,a,L);else switch(p===99&&Ot(E,3)===110?100:p){case 100:case 108:case 109:case 115:Lh(t,V,V,r&&nh(lI(t,V,V,0,0,i,a,S,i,O=[],d),L),i,L,d,a,r?O:L);break;default:Lh(E,V,V,V,[""],L,0,a,L)}}c=h=_=0,I=w=1,S=E="",d=o;break;case 58:d=1+lr(E),_=v;default:if(I<1){if(g==123)--I;else if(g==125&&I++==0&&Pz()==125)continue}switch(E+=lp(g),g*I){case 38:w=h>0?1:(E+="\f",-1);break;case 44:a[c++]=(lr(E)-1)*w,w=1;break;case 64:Ir()===45&&(E+=Dh(Rn())),p=Ir(),h=d=lr(S=E+=Dz(Oh())),g++;break;case 45:v===45&&lr(E)==2&&(I=0)}}return s}function lI(t,e,n,r,i,s,o,a,l,c,h){for(var d=i-1,p=i===0?s:[""],_=w0(p),v=0,I=0,k=0;v<r;++v)for(var w=0,g=bu(t,d+1,d=Sz(I=o[v])),S=t;w<_;++w)(S=TP(I>0?p[w]+" "+g:Ce(g,/&\f/g,p[w])))&&(l[k++]=S);return cp(t,e,n,i===0?y0:a,l,c,h)}function Mz(t,e,n){return cp(t,e,n,wP,lp(kz()),bu(t,2,-2),0)}function uI(t,e,n,r){return cp(t,e,n,v0,bu(t,0,r),bu(t,r+1,-1),r)}function Yo(t,e){for(var n="",r=w0(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function Fz(t,e,n,r){switch(t.type){case Iz:if(t.children.length)break;case Tz:case v0:return t.return=t.return||t.value;case wP:return"";case EP:return t.return=t.value+"{"+Yo(t.children,r)+"}";case y0:t.value=t.props.join(",")}return lr(n=Yo(t.children,r))?t.return=t.value+"{"+n+"}":""}function Vz(t){var e=w0(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function Uz(t){return function(e){e.root||(e=e.return)&&t(e)}}var jz=function(e,n,r){for(var i=0,s=0;i=s,s=Ir(),i===38&&s===12&&(n[r]=1),!Nu(s);)Rn();return uc(e,vn)},$z=function(e,n){var r=-1,i=44;do switch(Nu(i)){case 0:i===38&&Ir()===12&&(n[r]=1),e[r]+=jz(vn-1,n,r);break;case 2:e[r]+=Dh(i);break;case 4:if(i===44){e[++r]=Ir()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=lp(i)}while(i=Rn());return e},zz=function(e,n){return CP($z(SP(e),n))},cI=new WeakMap,Bz=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!cI.get(r))&&!i){cI.set(e,!0);for(var s=[],o=zz(n,s),a=r.props,l=0,c=0;l<o.length;l++)for(var h=0;h<a.length;h++,c++)e.props[c]=s[l]?o[l].replace(/&\f/g,a[h]):a[h]+" "+o[l]}}},Wz=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function xP(t,e){switch(xz(t,e)){case 5103:return Se+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Se+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Se+t+ef+t+Ht+t+t;case 6828:case 4268:return Se+t+Ht+t+t;case 6165:return Se+t+Ht+"flex-"+t+t;case 5187:return Se+t+Ce(t,/(\w+).+(:[^]+)/,Se+"box-$1$2"+Ht+"flex-$1$2")+t;case 5443:return Se+t+Ht+"flex-item-"+Ce(t,/flex-|-self/,"")+t;case 4675:return Se+t+Ht+"flex-line-pack"+Ce(t,/align-content|flex-|-self/,"")+t;case 5548:return Se+t+Ht+Ce(t,"shrink","negative")+t;case 5292:return Se+t+Ht+Ce(t,"basis","preferred-size")+t;case 6060:return Se+"box-"+Ce(t,"-grow","")+Se+t+Ht+Ce(t,"grow","positive")+t;case 4554:return Se+Ce(t,/([^-])(transform)/g,"$1"+Se+"$2")+t;case 6187:return Ce(Ce(Ce(t,/(zoom-|grab)/,Se+"$1"),/(image-set)/,Se+"$1"),t,"")+t;case 5495:case 3959:return Ce(t,/(image-set\([^]*)/,Se+"$1$`$1");case 4968:return Ce(Ce(t,/(.+:)(flex-)?(.*)/,Se+"box-pack:$3"+Ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Se+t+t;case 4095:case 3583:case 4068:case 2532:return Ce(t,/(.+)-inline(.+)/,Se+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(lr(t)-1-e>6)switch(Ot(t,e+1)){case 109:if(Ot(t,e+4)!==45)break;case 102:return Ce(t,/(.+:)(.+)-([^]+)/,"$1"+Se+"$2-$3$1"+ef+(Ot(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~b_(t,"stretch")?xP(Ce(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ot(t,e+1)!==115)break;case 6444:switch(Ot(t,lr(t)-3-(~b_(t,"!important")&&10))){case 107:return Ce(t,":",":"+Se)+t;case 101:return Ce(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Se+(Ot(t,14)===45?"inline-":"")+"box$3$1"+Se+"$2$3$1"+Ht+"$2box$3")+t}break;case 5936:switch(Ot(t,e+11)){case 114:return Se+t+Ht+Ce(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Se+t+Ht+Ce(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Se+t+Ht+Ce(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Se+t+Ht+t+t}return t}var Hz=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case v0:e.return=xP(e.value,e.length);break;case EP:return Yo([ml(e,{value:Ce(e.value,"@","@"+Se)})],i);case y0:if(e.length)return Rz(e.props,function(s){switch(Az(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Yo([ml(e,{props:[Ce(s,/:(read-\w+)/,":"+ef+"$1")]})],i);case"::placeholder":return Yo([ml(e,{props:[Ce(s,/:(plac\w+)/,":"+Se+"input-$1")]}),ml(e,{props:[Ce(s,/:(plac\w+)/,":"+ef+"$1")]}),ml(e,{props:[Ce(s,/:(plac\w+)/,Ht+"input-$1")]})],i)}return""})}},qz=[Hz],Gz=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(I){var k=I.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(I),I.setAttribute("data-s",""))})}var i=e.stylisPlugins||qz,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(I){for(var k=I.getAttribute("data-emotion").split(" "),w=1;w<k.length;w++)s[k[w]]=!0;a.push(I)});var l,c=[Bz,Wz];{var h,d=[Fz,Uz(function(I){h.insert(I)})],p=Vz(c.concat(i,d)),_=function(k){return Yo(Lz(k),p)};l=function(k,w,g,S){h=g,_(k?k+"{"+w.styles+"}":w.styles),S&&(v.inserted[w.name]=!0)}}var v={key:n,sheet:new Ez({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},Kz=!0;function Qz(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var AP=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||Kz===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},Yz=function(e,n,r){AP(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function Xz(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Jz=/[A-Z]|^ms/g,Zz=/_EMO_([^_]+?)_([^]*?)_EMO_/g,RP=function(e){return e.charCodeAt(1)===45},hI=function(e){return e!=null&&typeof e!="boolean"},Mm=BC(function(t){return RP(t)?t:t.replace(Jz,"-$&").toLowerCase()}),dI=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Zz,function(r,i,s){return ur={name:i,styles:s,next:ur},i})}return YC[e]!==1&&!RP(e)&&typeof n=="number"&&n!==0?n+"px":n};function Ou(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return ur={name:n.name,styles:n.styles,next:ur},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)ur={name:r.name,styles:r.styles,next:ur},r=r.next;var i=n.styles+";";return i}return eB(t,e,n)}case"function":{if(t!==void 0){var s=ur,o=n(t);return ur=s,Ou(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function eB(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=Ou(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":hI(o)&&(r+=Mm(s)+":"+dI(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)hI(o[a])&&(r+=Mm(s)+":"+dI(s,o[a])+";");else{var l=Ou(t,e,o);switch(s){case"animation":case"animationName":{r+=Mm(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var fI=/label:\s*([^\s;\n{]+)\s*(;|$)/g,ur,tB=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";ur=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=Ou(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=Ou(r,n,e[a]),i&&(s+=o[a]);fI.lastIndex=0;for(var l="",c;(c=fI.exec(s))!==null;)l+="-"+c[1];var h=Xz(s)+l;return{name:h,styles:s,next:ur}},nB=function(e){return e()},rB=Vm["useInsertionEffect"]?Vm["useInsertionEffect"]:!1,iB=rB||nB,kP=j.createContext(typeof HTMLElement<"u"?Gz({key:"css"}):null);kP.Provider;var sB=function(e){return j.forwardRef(function(n,r){var i=j.useContext(kP);return e(n,i,r)})},oB=j.createContext({}),aB=OO,lB=function(e){return e!=="theme"},pI=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?aB:lB},mI=function(e,n,r){var i;if(n){var s=n.shouldForwardProp;i=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=e.__emotion_forwardProp),i},uB=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return AP(n,r,i),iB(function(){return Yz(n,r,i)}),null},cB=function t(e,n){var r=e.__emotion_real===e,i=r&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=mI(e,n,r),l=a||pI(i),c=!l("as");return function(){var h=arguments,d=r&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&d.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)d.push.apply(d,h);else{d.push(h[0][0]);for(var p=h.length,_=1;_<p;_++)d.push(h[_],h[0][_])}var v=sB(function(I,k,w){var g=c&&I.as||i,S="",O=[],L=I;if(I.theme==null){L={};for(var V in I)L[V]=I[V];L.theme=j.useContext(oB)}typeof I.className=="string"?S=Qz(k.registered,O,I.className):I.className!=null&&(S=I.className+" ");var E=tB(d.concat(O),k.registered,L);S+=k.key+"-"+E.name,o!==void 0&&(S+=" "+o);var T=c&&a===void 0?pI(g):l,C={};for(var A in I)c&&A==="as"||T(A)&&(C[A]=I[A]);return C.className=S,C.ref=w,j.createElement(j.Fragment,null,j.createElement(uB,{cache:k,serialized:E,isStringTag:typeof g=="string"}),j.createElement(g,C))});return v.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=i,v.__emotion_styles=d,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return"."+o}}),v.withComponent=function(I,k){return t(I,P_({},n,k,{shouldForwardProp:mI(v,k,!0)})).apply(void 0,d)},v}},hB=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Du=cB.bind();hB.forEach(function(t){Du[t]=Du(t)});const dB=Du.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,fB=Du.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,pB=()=>R.jsx(dB,{children:R.jsx(fB,{children:"404"})});const mB=Du.div`
  width: 100%;
  height: 100vh;
`,gB="/LearnLingo/assets/face_x1-b65e11cd.png",_B="/LearnLingo/assets/iMac-8b3b4ee4.png",yB=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`,vB=ne.div`
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
`,wB=ne(of)`
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
`,EB=ne.div`
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
`,TB=ne.ul`
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
`;var E0={},tf=function(){return tf=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},tf.apply(this,arguments)},IB=function(){function t(e,n,r){var i=this;this.endVal=n,this.options=r,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(s){i.startTime||(i.startTime=s);var o=s-i.startTime;i.remaining=i.duration-o,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(o,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(o,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(o/i.duration);var a=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=a?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),o<i.duration?i.rAF=requestAnimationFrame(i.count):i.finalEndVal!==null?i.update(i.finalEndVal):i.options.onCompleteCallback&&i.options.onCompleteCallback()},this.formatNumber=function(s){var o,a,l,c,h=s<0?"-":"";o=Math.abs(s).toFixed(i.options.decimalPlaces);var d=(o+="").split(".");if(a=d[0],l=d.length>1?i.options.decimal+d[1]:"",i.options.useGrouping){c="";for(var p=3,_=0,v=0,I=a.length;v<I;++v)i.options.useIndianSeparators&&v===4&&(p=2,_=1),v!==0&&_%p==0&&(c=i.options.separator+c),_++,c=a[I-v-1]+c;a=c}return i.options.numerals&&i.options.numerals.length&&(a=a.replace(/[0-9]/g,function(k){return i.options.numerals[+k]}),l=l.replace(/[0-9]/g,function(k){return i.options.numerals[+k]})),h+i.options.prefix+a+l+i.options.suffix},this.easeOutExpo=function(s,o,a,l){return a*(1-Math.pow(2,-10*s/l))*1024/1023+o},this.options=tf(tf({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof e=="string"?document.getElementById(e):e,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,e):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return i.handleScroll(i)}),window.onscroll=function(){window.onScrollFns.forEach(function(s){return s()})},this.handleScroll(this)))}return t.prototype.handleScroll=function(e){if(e&&window&&!e.once){var n=window.innerHeight+window.scrollY,r=e.el.getBoundingClientRect(),i=r.top+window.pageYOffset,s=r.top+r.height+window.pageYOffset;s<n&&s>window.scrollY&&e.paused?(e.paused=!1,setTimeout(function(){return e.start()},e.options.scrollSpyDelay),e.options.scrollSpyOnce&&(e.once=!0)):(window.scrollY>s||i>n)&&!e.paused&&e.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var e=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>e;var n=e-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=e;var r=this.countDown?1:-1;this.endVal=e+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=e,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(e){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),e&&(this.options.onCompleteCallback=e),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(e){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(e),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(e){var n;if(this.el){var r=this.formattingFn(e);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,r):this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r}},t.prototype.ensureNumber=function(e){return typeof e=="number"&&!isNaN(e)},t.prototype.validateValue=function(e){var n=Number(e);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(e),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}();const SB=Object.freeze(Object.defineProperty({__proto__:null,CountUp:IB},Symbol.toStringTag,{value:"Module"})),CB=ob(SB);Object.defineProperty(E0,"__esModule",{value:!0});var At=j,xB=CB;function AB(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,c=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(h){c=!0,i=h}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw i}}return a}}function gI(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nf(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gI(Object(n),!0).forEach(function(r){PB(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gI(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function RB(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function kB(t){var e=RB(t,"string");return typeof e=="symbol"?e:String(e)}function PB(t,e,n){return e=kB(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O_(){return O_=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},O_.apply(this,arguments)}function bB(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PP(t,e){if(t==null)return{};var n=bB(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function NB(t,e){return OB(t)||AB(t,e)||DB(t,e)||LB()}function OB(t){if(Array.isArray(t))return t}function DB(t,e){if(t){if(typeof t=="string")return _I(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _I(t,e)}}function _I(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function LB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var MB=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?At.useLayoutEffect:At.useEffect;function Wn(t){var e=At.useRef(t);return MB(function(){e.current=t}),At.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current.apply(void 0,r)},[])}var FB=function(e,n){var r=n.decimal,i=n.decimals,s=n.duration,o=n.easingFn,a=n.end,l=n.formattingFn,c=n.numerals,h=n.prefix,d=n.separator,p=n.start,_=n.suffix,v=n.useEasing,I=n.useGrouping,k=n.useIndianSeparators,w=n.enableScrollSpy,g=n.scrollSpyDelay,S=n.scrollSpyOnce,O=n.plugin;return new xB.CountUp(e,a,{startVal:p,duration:s,decimal:r,decimalPlaces:i,easingFn:o,formattingFn:l,numerals:c,separator:d,prefix:h,suffix:_,plugin:O,useEasing:v,useIndianSeparators:k,useGrouping:I,enableScrollSpy:w,scrollSpyDelay:g,scrollSpyOnce:S})},VB=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],UB={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},bP=function(e){var n=Object.fromEntries(Object.entries(e).filter(function(C){var A=NB(C,2),P=A[1];return P!==void 0})),r=At.useMemo(function(){return nf(nf({},UB),n)},[e]),i=r.ref,s=r.startOnMount,o=r.enableReinitialize,a=r.delay,l=r.onEnd,c=r.onStart,h=r.onPauseResume,d=r.onReset,p=r.onUpdate,_=PP(r,VB),v=At.useRef(),I=At.useRef(),k=At.useRef(!1),w=Wn(function(){return FB(typeof i=="string"?i:i.current,_)}),g=Wn(function(C){var A=v.current;if(A&&!C)return A;var P=w();return v.current=P,P}),S=Wn(function(){var C=function(){return g(!0).start(function(){l==null||l({pauseResume:O,reset:L,start:E,update:V})})};a&&a>0?I.current=setTimeout(C,a*1e3):C(),c==null||c({pauseResume:O,reset:L,update:V})}),O=Wn(function(){g().pauseResume(),h==null||h({reset:L,start:E,update:V})}),L=Wn(function(){g().el&&(I.current&&clearTimeout(I.current),g().reset(),d==null||d({pauseResume:O,start:E,update:V}))}),V=Wn(function(C){g().update(C),p==null||p({pauseResume:O,reset:L,start:E})}),E=Wn(function(){L(),S()}),T=Wn(function(C){s&&(C&&L(),S())});return At.useEffect(function(){k.current?o&&T(!0):(k.current=!0,T())},[o,k,T,a,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),At.useEffect(function(){return function(){L()}},[L]),{start:E,pauseResume:O,reset:L,update:V,getCountUp:g}},jB=["className","redraw","containerProps","children","style"],$B=function(e){var n=e.className,r=e.redraw,i=e.containerProps,s=e.children,o=e.style,a=PP(e,jB),l=At.useRef(null),c=At.useRef(!1),h=bP(nf(nf({},a),{},{ref:l,startOnMount:typeof s!="function"||e.delay===0,enableReinitialize:!1})),d=h.start,p=h.reset,_=h.update,v=h.pauseResume,I=h.getCountUp,k=Wn(function(){d()}),w=Wn(function(O){e.preserveValue||p(),_(O)}),g=Wn(function(){if(typeof e.children=="function"&&!(l.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}I()});At.useEffect(function(){g()},[g]),At.useEffect(function(){c.current&&w(e.end)},[e.end,w]);var S=r&&e;return At.useEffect(function(){r&&c.current&&k()},[k,r,S]),At.useEffect(function(){!r&&c.current&&k()},[k,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),At.useEffect(function(){c.current=!0},[]),typeof s=="function"?s({countUpRef:l,start:d,reset:p,update:_,pauseResume:v,getCountUp:I}):At.createElement("span",O_({className:n,ref:l,style:o},i),typeof e.start<"u"?I().formattingFn(e.start):"")},zB=E0.default=$B;E0.useCountUp=bP;const yI=()=>{const t=[{value:32e3,text:"Experienced tutors"},{value:3e5,text:"5-star tutor reviews"},{value:120,text:"Subjects taught"},{value:200,text:"Tutor nationalities"}];return R.jsxs(R.Fragment,{children:[R.jsxs(yB,{children:[R.jsxs(vB,{children:[R.jsxs("h1",{children:["Unlock your potential with the best ",R.jsx("span",{children:"language"})," tutors"]}),R.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),R.jsx(wB,{to:"/teachers",children:"Get started"})]}),R.jsxs(EB,{children:[R.jsx("img",{src:gB,width:339,height:339,alt:""}),R.jsx("img",{src:_B,width:360,height:247,alt:""})]})]}),R.jsx(TB,{children:t.map((e,n)=>R.jsxs("li",{children:[R.jsxs("h3",{children:[R.jsx(zB,{start:0,end:e.value,duration:2.75,separator:","})," +"]}),R.jsx("p",{children:e.text})]},n))})]})},BB=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 48px;
  padding: 24px;
  width: 1184px;
`,WB=ne.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
`,HB=ne.div`
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
`,qB=ne.div`
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
`,rh=ne.p`
  color: var(--subtitle-text-color);
  padding: 0;
  margin: 0;
`,GB=ne(of)`
  text-decoration: underline;
  font-style: 16px;
  line-height: 24px;
  margin: 8px 0 24px 0;
`,KB=ne.ul`
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
`,QB=ne.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
`,YB=ne.button`
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
`;ne.button`
  border: none;
  padding: 0;
  margin: 0;
`;function NP(t){return ts({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}const XB=ne.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
  padding: 0;
`,JB=ne.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px;
  padding: 0;
`,ZB=ne.div`
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
`,e8=ne.div`
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
`,t8=ne.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 8px;
  padding: 0;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
`;function n8(t){return ts({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"},child:[]}]})(t)}function r8(t){return ts({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"},child:[]}]})(t)}function i8(t){return ts({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"},child:[]}]})(t)}function s8(t){return ts({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"},child:[]}]})(t)}const o8=({reviews:t})=>R.jsx(XB,{children:t.map((e,n)=>R.jsxs(JB,{children:[R.jsxs(ZB,{children:[e.reviewer_avatar?R.jsx("img",{src:e.reviewer_avatar,alt:"Reviewer Avatar"}):R.jsx(n8,{size:44}),R.jsxs(e8,{children:[R.jsx("p",{children:e.reviewer_name}),R.jsxs(t8,{children:[R.jsx(NP,{size:16,color:"#FFC531"}),R.jsx("p",{children:e.reviewer_rating})]})]})]}),R.jsx("p",{children:e.comment})]},n))}),a8=ne.div`
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
`,l8=ne.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,u8=ne.div`
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
`,c8=ne.div`
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
`,h8=ne.form`
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
`,gl=ne.label`
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
`,Fm=ne.div`
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
`,ih=ne.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,d8=ne.button`
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
`,f8=({isModalOpen:t,closeModal:e,teacher:n})=>{const r=Pf().shape({name:dr().required("Name is required"),email:dr().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),phone:dr().matches(/^\+?[0-9]*$/,"Phone number must be in format +380XXXXXXXXX").min(13,"Phone number must be in format +380XXXXXXXXX").required("Phone is required"),reason:dr().required("Reason is required")}),{register:i,handleSubmit:s,formState:{errors:o}}=Wy({resolver:Hy(r),mode:"onChange"}),a=l=>{console.log(l),e(),alert("Form submitted successfully!")};return t?R.jsx(R.Fragment,{children:t&&R.jsx(Xy,{onClose:e,children:R.jsxs(a8,{children:[R.jsx(l8,{onClick:e,children:R.jsx(Jy,{size:32})}),R.jsxs(u8,{children:[R.jsx("h2",{children:"Book trial lesson"}),R.jsx("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),R.jsxs(c8,{children:[R.jsx("img",{src:n.avatar_url,alt:n.name}),R.jsxs("div",{children:[R.jsx("p",{children:"Your teacher"}),R.jsxs("h3",{children:[n.name," ",n.surname]})]})]})]}),R.jsxs(h8,{onSubmit:s(a),noValidate:!0,children:[R.jsxs("div",{className:"form-section",children:[R.jsx("h2",{children:"What is your main reason for learning English?"}),R.jsxs(gl,{children:[R.jsx("input",{type:"radio",value:"career",...i("reason"),defaultChecked:!0}),"Career and business"]}),R.jsxs(gl,{children:[R.jsx("input",{type:"radio",value:"kids",...i("reason")}),"Lesson for kids"]}),R.jsxs(gl,{children:[R.jsx("input",{type:"radio",value:"abroad",...i("reason")}),"Living abroad"]}),R.jsxs(gl,{children:[R.jsx("input",{type:"radio",value:"exams",...i("reason")}),"Exams and coursework"]}),R.jsxs(gl,{children:[R.jsx("input",{type:"radio",value:"hobby",...i("reason")}),"Culture, travel or hobby"]}),o.reason&&R.jsx(ih,{children:o.reason.message})]}),R.jsxs("div",{className:"form-section",children:[R.jsxs(Fm,{children:[R.jsx("input",{type:"text",...i("name"),className:o.name?"error":"",placeholder:" "}),R.jsx("label",{className:o.name?"error":"",children:"Name"}),o.name&&R.jsx(ih,{children:o.name.message})]}),R.jsxs(Fm,{children:[R.jsx("input",{type:"email",...i("email"),className:o.email?"error":"",placeholder:" "}),R.jsx("label",{className:o.email?"error":"",children:"Email"}),o.email&&R.jsx(ih,{children:o.email.message})]}),R.jsxs(Fm,{children:[R.jsx("input",{type:"number",...i("phone"),className:o.phone?"error":"",placeholder:" "}),R.jsx("label",{className:o.phone?"error":"",children:"Phone"}),o.phone&&R.jsx(ih,{children:o.phone.message})]})]}),R.jsx(d8,{type:"submit",children:"Book"})]})]})})}):null},vI=ne.button`
  border: none;
  padding: 0;
  margin: 0;
`,p8=({teacher:t})=>{const[e,n]=j.useState(!1),i=Qu().currentUser,s=Ws();j.useEffect(()=>{(async()=>{if(i){const l=Qd(Zd,"users",i.uid),c=await tI(l);if(c.exists()){const h=c.data();n(h.favorites.some(d=>d.id===t.id))}}})()},[i,t.id]);const o=async()=>{if(!i)return;const a=Qd(Zd,"users",i.uid),l=await tI(a);if(l.exists()){const h=l.data().favorites||[];if(h.findIndex(p=>p.id===t.id)!==-1){const p=h.filter(_=>_.id!==t.id);await nI(a,{favorites:p}),n(!1)}else await nI(a,{favorites:R6(t)}),n(!0)}};return s.pathname==="/teachers"?R.jsx(vI,{onClick:o,children:e?R.jsx(r8,{size:22,style:{color:"var(--btn-color)"}}):R.jsx(s8,{size:22,style:{color:"var(--btn-color)"}})}):R.jsx(vI,{onClick:o,children:R.jsx(i8,{size:22,style:{color:"var(--btn-color)"}})})},OP=({teacher:t,selectedLevel:e})=>{const n=t.languages.reduce((h,d,p)=>p<t.languages.length-1?[...h,R.jsx("span",{children:d},p),", "]:[...h,R.jsx("span",{children:d},p)],[]),[r,i]=j.useState(!1),[s,o]=j.useState(!1),a=()=>{o(!0)},l=()=>{o(!1)},c=()=>{i(!r)};return R.jsxs(BB,{children:[R.jsx(WB,{src:t.avatar_url,alt:t.name}),R.jsxs(HB,{children:[R.jsxs(qB,{children:[R.jsx(rh,{style:{marginRight:"192px"},children:"Languages"}),R.jsxs("ul",{children:[R.jsx("li",{children:R.jsx("p",{children:"Lessons online"})}),R.jsx("li",{children:R.jsxs("p",{children:["Lessons done: ",t.lessons_done]})}),R.jsxs("li",{children:[R.jsx(NP,{size:16,color:"#FFC531"}),R.jsxs("p",{children:["Rating: ",t.rating]})]}),R.jsx("li",{children:R.jsxs("p",{children:["Price/1 hour: ",R.jsxs("span",{children:["$",t.price_per_hour]})]})})]}),R.jsx(p8,{teacher:t})]}),R.jsxs("h3",{children:[t.name," ",t.surname]}),R.jsxs(rh,{children:["Speaks: ",R.jsx("span",{children:n})]}),R.jsxs(rh,{children:["Lesson Info: ",R.jsxs("span",{children:[" ",t.lesson_info]})]}),R.jsxs(rh,{children:["Conditions: ",R.jsx("span",{children:t.conditions})]}),!r&&R.jsx(GB,{onClick:c,children:"Read more"}),r&&R.jsxs(QB,{children:[R.jsx("p",{children:t.experience}),R.jsx(o8,{reviews:t.reviews})]}),R.jsx(KB,{children:t.levels.map((h,d)=>R.jsxs("li",{style:{backgroundColor:e===h?"var(--btn-color)":"#fff"},children:["#",h]},d))}),r&&R.jsx(YB,{onClick:a,children:"Book trial lesson"}),s&&R.jsx(f8,{isModalOpen:s,closeModal:l,teacher:t})]})]})},m8=({teachers:t,onFilterChange:e})=>{const[n,r]=j.useState([]),[i,s]=j.useState([]),[o,a]=j.useState([]),[l,c]=j.useState(""),[h,d]=j.useState(""),[p,_]=j.useState("");j.useEffect(()=>{const w=new Set,g=new Set,S=new Set;t.forEach(O=>{O.languages.forEach(L=>w.add(L)),O.levels.forEach(L=>g.add(L)),S.add(O.price_per_hour)}),r(Array.from(w)),s(Array.from(g)),a(Array.from(S).sort((O,L)=>O-L))},[t]);const v=w=>{c(w.target.value),e({language:w.target.value,level:h,price:p})},I=w=>{d(w.target.value),e({language:l,level:w.target.value,price:p})},k=w=>{_(w.target.value),e({language:l,level:h,price:w.target.value})};return R.jsxs("div",{children:[R.jsxs("select",{onChange:v,value:l,children:[R.jsx("option",{value:"",children:"Select Language"}),n.map((w,g)=>R.jsx("option",{value:w,children:w},g))]}),R.jsxs("select",{onChange:I,value:h,children:[R.jsx("option",{value:"",children:"Select Level"}),i.map((w,g)=>R.jsx("option",{value:w,children:w},g))]}),R.jsxs("select",{onChange:k,value:p,children:[R.jsx("option",{value:"",children:"Select Price"}),o.map((w,g)=>R.jsx("option",{value:w,children:w},g))]})]})},g8=ne.button`
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
`,_8=()=>{const[t,e]=j.useState(4),[n,r]=j.useState([]),[i,s]=j.useState([]),[o,a]=j.useState("");j.useEffect(()=>{const h=h$(oz,"teachers");f$(h,d=>{const p=d.val();if(p){const _=Object.values(p);r(_),s(_)}})},[]);const l=()=>{e(h=>h+4)},c=h=>{const{language:d,level:p,price:_}=h;let v=n;d&&(v=v.filter(I=>I.languages.includes(d))),p&&(v=v.filter(I=>I.levels.includes(p))),_&&(v=v.filter(I=>I.price_per_hour===Number(_))),a(p),s(v),e(4)};return R.jsxs(R.Fragment,{children:[R.jsx(m8,{teachers:n,onFilterChange:c}),i.slice(0,t).map((h,d)=>R.jsx(OP,{teacher:h,selectedLevel:o},d)),t<i.length&&R.jsx(g8,{onClick:l,children:"Load More"})]})},y8=()=>R.jsx(_8,{}),v8=()=>Qu().currentUser?R.jsx(UI,{}):R.jsx(gN,{to:"/home",replace:!0}),w8=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,s]=j.useState(null),o=Qu();return j.useEffect(()=>{let a;const c=yA(o,h=>{if(h){const d=Qd(Zd,"users",h.uid);a=A6(d,p=>{if(p.exists()){const _=p.data().favorites||[];e(_)}else s("No favorites found"),e([]);r(!1)},p=>{console.error("Error fetching favorites:",p),s("Failed to fetch favorites"),r(!1)})}else r(!1),s("User not authenticated")});return()=>{a&&a(),c()}},[o]),n?R.jsx("div",{children:"Loading..."}):i?R.jsxs("div",{children:["Error: ",i]}):R.jsxs("div",{children:[R.jsxs("h2",{children:["Favorites List [",t.length,"]"]}),R.jsx("ul",{children:t.map((a,l)=>R.jsx("li",{children:R.jsx(OP,{teacher:a})},l))})]})},E8=()=>R.jsx("div",{children:R.jsx(w8,{})});function T8(){return R.jsx(mB,{children:R.jsx(yN,{children:R.jsxs(pi,{path:"/",element:R.jsx(yz,{}),children:[R.jsx(pi,{index:!0,element:R.jsx(yI,{})}),R.jsx(pi,{path:"home",element:R.jsx(yI,{})}),R.jsx(pi,{path:"teachers",element:R.jsx(y8,{})}),R.jsx(pi,{element:R.jsx(v8,{}),children:R.jsx(pi,{path:"favorites",element:R.jsx(E8,{})})}),R.jsx(pi,{path:"*",element:R.jsx(pB,{})})]})})})}zm.createRoot(document.getElementById("root")).render(R.jsx(Me.StrictMode,{children:R.jsx(SN,{basename:"/LearnLingo/",children:R.jsx(az,{children:R.jsx(T8,{})})})}));
