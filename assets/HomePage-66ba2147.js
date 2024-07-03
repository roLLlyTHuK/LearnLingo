import{s as O,L as z,g as L,r as G,j as d}from"./index-5adf4671.js";const q=""+new URL("face_x1-b65e11cd.png",import.meta.url).href,H=""+new URL("iMac-8b3b4ee4.png",import.meta.url).href,Y=O.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,B=O.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`,W=O.div`
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
      position: relative;
      font-family: 'Roboto-Regular', sans-serif;
      font-weight: 400;
      font-style: italic;
      z-index: 1;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: var(--bg-secondary-color);
        z-index: -1;
        animation: backgroundFill 2s ease-in-out forwards;
      }
    }

    @keyframes backgroundFill {
      0% {
        width: 0%;
      }
      100% {
        width: 100%;
      }
    }
  }

  p {
    width: 471px;
  }
`,$=O(z)`
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
`,K=O.div`
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
      transform: translateY(50%);
    }
    100% {
      transform: translateX(0);
    }
  }

  img:nth-child(2) {
    top: 354px;
    left: 103.64px;
  }
`,J=O.ul`
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
`;var I={},U=function(){return U=Object.assign||function(r){for(var t,e=1,i=arguments.length;e<i;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},U.apply(this,arguments)},X=function(){function r(t,e,i){var n=this;this.endVal=e,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){n.startTime||(n.startTime=a);var l=a-n.startTime;n.remaining=n.duration-l,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(l,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(l,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(l/n.duration);var o=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=o?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),l<n.duration?n.rAF=requestAnimationFrame(n.count):n.finalEndVal!==null?n.update(n.finalEndVal):n.options.onCompleteCallback&&n.options.onCompleteCallback()},this.formatNumber=function(a){var l,o,s,u,f=a<0?"-":"";l=Math.abs(a).toFixed(n.options.decimalPlaces);var h=(l+="").split(".");if(o=h[0],s=h.length>1?n.options.decimal+h[1]:"",n.options.useGrouping){u="";for(var y=3,x=0,m=0,g=o.length;m<g;++m)n.options.useIndianSeparators&&m===4&&(y=2,x=1),m!==0&&x%y==0&&(u=n.options.separator+u),x++,u=o[g-m-1]+u;o=u}return n.options.numerals&&n.options.numerals.length&&(o=o.replace(/[0-9]/g,function(p){return n.options.numerals[+p]}),s=s.replace(/[0-9]/g,function(p){return n.options.numerals[+p]})),f+n.options.prefix+o+s+n.options.suffix},this.easeOutExpo=function(a,l,o,s){return o*(1-Math.pow(2,-10*a/s))*1024/1023+l},this.options=U(U({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return n.handleScroll(n)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return r.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),n=i.top+window.pageYOffset,a=i.top+i.height+window.pageYOffset;a<e&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||n>e)&&!t.paused&&t.reset()}},r.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},r.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},r.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},r.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},r.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},r.prototype.printValue=function(t){var e;if(this.el){var i=this.formattingFn(t);!((e=this.options.plugin)===null||e===void 0)&&e.render?this.options.plugin.render(this.el,i):this.el.tagName==="INPUT"?this.el.value=i:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=i:this.el.innerHTML=i}},r.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},r.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},r.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},r}();const Q=Object.freeze(Object.defineProperty({__proto__:null,CountUp:X},Symbol.toStringTag,{value:"Module"})),Z=L(Q);Object.defineProperty(I,"__esModule",{value:!0});var c=G,tt=Z;function et(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var i,n,a,l,o=[],s=!0,u=!1;try{if(a=(e=e.call(r)).next,t===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(i=a.call(e)).done)&&(o.push(i.value),o.length!==t);s=!0);}catch(f){u=!0,n=f}finally{try{if(!s&&e.return!=null&&(l=e.return(),Object(l)!==l))return}finally{if(u)throw n}}return o}}function _(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),e.push.apply(e,i)}return e}function A(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?_(Object(e),!0).forEach(function(i){it(r,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(e,i))})}return r}function nt(r,t){if(typeof r!="object"||!r)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var i=e.call(r,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function rt(r){var t=nt(r,"string");return typeof t=="symbol"?t:String(t)}function it(r,t,e){return t=rt(t),t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function D(){return D=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},D.apply(this,arguments)}function at(r,t){if(r==null)return{};var e={},i=Object.keys(r),n,a;for(a=0;a<i.length;a++)n=i[a],!(t.indexOf(n)>=0)&&(e[n]=r[n]);return e}function N(r,t){if(r==null)return{};var e=at(r,t),i,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(n=0;n<a.length;n++)i=a[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(r,i)&&(e[i]=r[i])}return e}function ot(r,t){return st(r)||et(r,t)||lt(r,t)||ut()}function st(r){if(Array.isArray(r))return r}function lt(r,t){if(r){if(typeof r=="string")return M(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M(r,t)}}function M(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,i=new Array(t);e<t;e++)i[e]=r[e];return i}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ct=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?c.useLayoutEffect:c.useEffect;function b(r){var t=c.useRef(r);return ct(function(){t.current=r}),c.useCallback(function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return t.current.apply(void 0,i)},[])}var ft=function(t,e){var i=e.decimal,n=e.decimals,a=e.duration,l=e.easingFn,o=e.end,s=e.formattingFn,u=e.numerals,f=e.prefix,h=e.separator,y=e.start,x=e.suffix,m=e.useEasing,g=e.useGrouping,p=e.useIndianSeparators,S=e.enableScrollSpy,v=e.scrollSpyDelay,j=e.scrollSpyOnce,V=e.plugin;return new tt.CountUp(t,o,{startVal:y,duration:a,decimal:i,decimalPlaces:n,easingFn:l,formattingFn:s,numerals:u,separator:h,prefix:f,suffix:x,plugin:V,useEasing:m,useIndianSeparators:p,useGrouping:g,enableScrollSpy:S,scrollSpyDelay:v,scrollSpyOnce:j})},dt=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],pt={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},k=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(w){var P=ot(w,2),C=P[1];return C!==void 0})),i=c.useMemo(function(){return A(A({},pt),e)},[t]),n=i.ref,a=i.startOnMount,l=i.enableReinitialize,o=i.delay,s=i.onEnd,u=i.onStart,f=i.onPauseResume,h=i.onReset,y=i.onUpdate,x=N(i,dt),m=c.useRef(),g=c.useRef(),p=c.useRef(!1),S=b(function(){return ft(typeof n=="string"?n:n.current,x)}),v=b(function(w){var P=m.current;if(P&&!w)return P;var C=S();return m.current=C,C}),j=b(function(){var w=function(){return v(!0).start(function(){s==null||s({pauseResume:V,reset:E,start:F,update:R})})};o&&o>0?g.current=setTimeout(w,o*1e3):w(),u==null||u({pauseResume:V,reset:E,update:R})}),V=b(function(){v().pauseResume(),f==null||f({reset:E,start:F,update:R})}),E=b(function(){v().el&&(g.current&&clearTimeout(g.current),v().reset(),h==null||h({pauseResume:V,start:F,update:R}))}),R=b(function(w){v().update(w),y==null||y({pauseResume:V,reset:E,start:F})}),F=b(function(){E(),j()}),T=b(function(w){a&&(w&&E(),j())});return c.useEffect(function(){p.current?l&&T(!0):(p.current=!0,T())},[l,p,T,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),c.useEffect(function(){return function(){E()}},[E]),{start:F,pauseResume:V,reset:E,update:R,getCountUp:v}},ht=["className","redraw","containerProps","children","style"],mt=function(t){var e=t.className,i=t.redraw,n=t.containerProps,a=t.children,l=t.style,o=N(t,ht),s=c.useRef(null),u=c.useRef(!1),f=k(A(A({},o),{},{ref:s,startOnMount:typeof a!="function"||t.delay===0,enableReinitialize:!1})),h=f.start,y=f.reset,x=f.update,m=f.pauseResume,g=f.getCountUp,p=b(function(){h()}),S=b(function(V){t.preserveValue||y(),x(V)}),v=b(function(){if(typeof t.children=="function"&&!(s.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}g()});c.useEffect(function(){v()},[v]),c.useEffect(function(){u.current&&S(t.end)},[t.end,S]);var j=i&&t;return c.useEffect(function(){i&&u.current&&p()},[p,i,j]),c.useEffect(function(){!i&&u.current&&p()},[p,i,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),c.useEffect(function(){u.current=!0},[]),typeof a=="function"?a({countUpRef:s,start:h,reset:y,update:x,pauseResume:m,getCountUp:g}):c.createElement("span",D({className:e,ref:s,style:l},n),typeof t.start<"u"?g().formattingFn(t.start):"")},gt=I.default=mt;I.useCountUp=k;const vt=()=>{const r=[{value:32e3,text:"Experienced tutors"},{value:3e5,text:"5-star tutor reviews"},{value:120,text:"Subjects taught"},{value:200,text:"Tutor nationalities"}];return d.jsxs(Y,{children:[d.jsxs(B,{children:[d.jsxs(W,{children:[d.jsxs("h1",{children:["Unlock your potential with the best ",d.jsx("span",{children:"language"})," tutors"]}),d.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),d.jsx($,{to:"/teachers",children:"Get started"})]}),d.jsxs(K,{id:"hero",children:[d.jsx("img",{src:q,width:339,height:339,alt:""}),d.jsx("img",{src:H,width:360,height:247,alt:""})]})]}),d.jsx(J,{children:r.map((t,e)=>d.jsxs("li",{children:[d.jsxs("h3",{children:[d.jsx(gt,{start:0,end:t.value,duration:2.75,separator:","})," +"]}),d.jsx("p",{children:t.text})]},e))})]})};export{vt as default};
