import{p as O,L as z,g as L,r as G,j as d}from"./index-34dde199.js";const Y=""+new URL("face_x1-b65e11cd.png",import.meta.url).href,q=""+new URL("iMac-8b3b4ee4.png",import.meta.url).href,H=O.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`,B=O.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 0;

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
  }
`,W=O.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 24px;

  h1 {
    width: 100%;
    font-family: 'Roboto-Medium';
    font-size: 36px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: -0.02em;
    text-align: center;
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
    width: 100%;
  }

  @media screen and (min-width: 1280px) {
    align-items: start;
    gap: 32px;
    width: 720px;
    padding: 98px 64px;

    h1 {
      font-size: 36px;
      line-height: 40px;
    }

    p {
      width: 471px;
    }
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
  width: 320px;
  height: 320px;
  border-radius: 30px;
  overflow: hidden;

  img {
    position: absolute;
    width: 100%;
  }

  img:nth-child(1) {
    top: 5px;
    left: 10px;
    animation: greeting 1.5s ease-in-out;
  }

  @keyframes greeting {
    0% {
      transform: translateY(50%);
    }
    100% {
      transform: translateY(0);
    }
  }

  img:nth-child(2) {
    top: 70%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  @media screen and (min-width: 1280px) {
    width: 568px;
    height: 530px;
    img {
      position: absolute;
    }

    img:nth-child(1) {
      width: 339px;
      height: 339px;
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
      width: 360px;
      height: 247px;
      top: 354px;
      left: 103.64px;
      transform: translate(0, 0);
    }
  }
`,J=O.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 24px;
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
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    text-align: left;
    color: var(--primary-text-color);
    padding: 0;
    margin: 0;
  }

  p {
    width: 74px;
    font-family: 'Roboto-Regular', sans-serif;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(18, 20, 23, 0.7);
    padding: 0;
    margin: 0;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 100px;
    padding: 40px 123px;

    h3 {
      font-size: 28px;
      line-height: 32px;
    }

    p {
      font-size: 14px;
      line-height: 18px;
    }
  }
`;var I={},U=function(){return U=Object.assign||function(i){for(var t,e=1,r=arguments.length;e<r;e++)for(var n in t=arguments[e])Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},U.apply(this,arguments)},X=function(){function i(t,e,r){var n=this;this.endVal=e,this.options=r,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(a){n.startTime||(n.startTime=a);var l=a-n.startTime;n.remaining=n.duration-l,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(l,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(l,n.startVal,n.endVal-n.startVal,n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(l/n.duration);var o=n.countDown?n.frameVal<n.endVal:n.frameVal>n.endVal;n.frameVal=o?n.endVal:n.frameVal,n.frameVal=Number(n.frameVal.toFixed(n.options.decimalPlaces)),n.printValue(n.frameVal),l<n.duration?n.rAF=requestAnimationFrame(n.count):n.finalEndVal!==null?n.update(n.finalEndVal):n.options.onCompleteCallback&&n.options.onCompleteCallback()},this.formatNumber=function(a){var l,o,s,u,f=a<0?"-":"";l=Math.abs(a).toFixed(n.options.decimalPlaces);var h=(l+="").split(".");if(o=h[0],s=h.length>1?n.options.decimal+h[1]:"",n.options.useGrouping){u="";for(var y=3,b=0,m=0,g=o.length;m<g;++m)n.options.useIndianSeparators&&m===4&&(y=2,b=1),m!==0&&b%y==0&&(u=n.options.separator+u),b++,u=o[g-m-1]+u;o=u}return n.options.numerals&&n.options.numerals.length&&(o=o.replace(/[0-9]/g,function(p){return n.options.numerals[+p]}),s=s.replace(/[0-9]/g,function(p){return n.options.numerals[+p]})),f+n.options.prefix+o+s+n.options.suffix},this.easeOutExpo=function(a,l,o,s){return o*(1-Math.pow(2,-10*a/s))*1024/1023+l},this.options=U(U({},this.defaults),r),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return n.handleScroll(n)}),window.onscroll=function(){window.onScrollFns.forEach(function(a){return a()})},this.handleScroll(this)))}return i.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,r=t.el.getBoundingClientRect(),n=r.top+window.pageYOffset,a=r.top+r.height+window.pageYOffset;a<e&&a>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>a||n>e)&&!t.paused&&t.reset()}},i.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var r=this.countDown?1:-1;this.endVal=t+r*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(t){var e;if(this.el){var r=this.formattingFn(t);!((e=this.options.plugin)===null||e===void 0)&&e.render?this.options.plugin.render(this.el,r):this.el.tagName==="INPUT"?this.el.value=r:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=r:this.el.innerHTML=r}},i.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},i.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}();const Q=Object.freeze(Object.defineProperty({__proto__:null,CountUp:X},Symbol.toStringTag,{value:"Module"})),Z=L(Q);Object.defineProperty(I,"__esModule",{value:!0});var c=G,tt=Z;function et(i,t){var e=i==null?null:typeof Symbol<"u"&&i[Symbol.iterator]||i["@@iterator"];if(e!=null){var r,n,a,l,o=[],s=!0,u=!1;try{if(a=(e=e.call(i)).next,t===0){if(Object(e)!==e)return;s=!1}else for(;!(s=(r=a.call(e)).done)&&(o.push(r.value),o.length!==t);s=!0);}catch(f){u=!0,n=f}finally{try{if(!s&&e.return!=null&&(l=e.return(),Object(l)!==l))return}finally{if(u)throw n}}return o}}function _(i,t){var e=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable})),e.push.apply(e,r)}return e}function A(i){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?_(Object(e),!0).forEach(function(r){rt(i,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(e,r))})}return i}function nt(i,t){if(typeof i!="object"||!i)return i;var e=i[Symbol.toPrimitive];if(e!==void 0){var r=e.call(i,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(i)}function it(i){var t=nt(i,"string");return typeof t=="symbol"?t:String(t)}function rt(i,t,e){return t=it(t),t in i?Object.defineProperty(i,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[t]=e,i}function D(){return D=Object.assign?Object.assign.bind():function(i){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},D.apply(this,arguments)}function at(i,t){if(i==null)return{};var e={},r=Object.keys(i),n,a;for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&(e[n]=i[n]);return e}function N(i,t){if(i==null)return{};var e=at(i,t),r,n;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(i,r)&&(e[r]=i[r])}return e}function ot(i,t){return st(i)||et(i,t)||lt(i,t)||ut()}function st(i){if(Array.isArray(i))return i}function lt(i,t){if(i){if(typeof i=="string")return M(i,t);var e=Object.prototype.toString.call(i).slice(8,-1);if(e==="Object"&&i.constructor&&(e=i.constructor.name),e==="Map"||e==="Set")return Array.from(i);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return M(i,t)}}function M(i,t){(t==null||t>i.length)&&(t=i.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=i[e];return r}function ut(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ct=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?c.useLayoutEffect:c.useEffect;function v(i){var t=c.useRef(i);return ct(function(){t.current=i}),c.useCallback(function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.current.apply(void 0,r)},[])}var ft=function(t,e){var r=e.decimal,n=e.decimals,a=e.duration,l=e.easingFn,o=e.end,s=e.formattingFn,u=e.numerals,f=e.prefix,h=e.separator,y=e.start,b=e.suffix,m=e.useEasing,g=e.useGrouping,p=e.useIndianSeparators,j=e.enableScrollSpy,x=e.scrollSpyDelay,S=e.scrollSpyOnce,V=e.plugin;return new tt.CountUp(t,o,{startVal:y,duration:a,decimal:r,decimalPlaces:n,easingFn:l,formattingFn:s,numerals:u,separator:h,prefix:f,suffix:b,plugin:V,useEasing:m,useIndianSeparators:p,useGrouping:g,enableScrollSpy:j,scrollSpyDelay:x,scrollSpyOnce:S})},dt=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],pt={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},k=function(t){var e=Object.fromEntries(Object.entries(t).filter(function(w){var P=ot(w,2),C=P[1];return C!==void 0})),r=c.useMemo(function(){return A(A({},pt),e)},[t]),n=r.ref,a=r.startOnMount,l=r.enableReinitialize,o=r.delay,s=r.onEnd,u=r.onStart,f=r.onPauseResume,h=r.onReset,y=r.onUpdate,b=N(r,dt),m=c.useRef(),g=c.useRef(),p=c.useRef(!1),j=v(function(){return ft(typeof n=="string"?n:n.current,b)}),x=v(function(w){var P=m.current;if(P&&!w)return P;var C=j();return m.current=C,C}),S=v(function(){var w=function(){return x(!0).start(function(){s==null||s({pauseResume:V,reset:E,start:F,update:R})})};o&&o>0?g.current=setTimeout(w,o*1e3):w(),u==null||u({pauseResume:V,reset:E,update:R})}),V=v(function(){x().pauseResume(),f==null||f({reset:E,start:F,update:R})}),E=v(function(){x().el&&(g.current&&clearTimeout(g.current),x().reset(),h==null||h({pauseResume:V,start:F,update:R}))}),R=v(function(w){x().update(w),y==null||y({pauseResume:V,reset:E,start:F})}),F=v(function(){E(),S()}),T=v(function(w){a&&(w&&E(),S())});return c.useEffect(function(){p.current?l&&T(!0):(p.current=!0,T())},[l,p,T,o,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),c.useEffect(function(){return function(){E()}},[E]),{start:F,pauseResume:V,reset:E,update:R,getCountUp:x}},ht=["className","redraw","containerProps","children","style"],mt=function(t){var e=t.className,r=t.redraw,n=t.containerProps,a=t.children,l=t.style,o=N(t,ht),s=c.useRef(null),u=c.useRef(!1),f=k(A(A({},o),{},{ref:s,startOnMount:typeof a!="function"||t.delay===0,enableReinitialize:!1})),h=f.start,y=f.reset,b=f.update,m=f.pauseResume,g=f.getCountUp,p=v(function(){h()}),j=v(function(V){t.preserveValue||y(),b(V)}),x=v(function(){if(typeof t.children=="function"&&!(s.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}g()});c.useEffect(function(){x()},[x]),c.useEffect(function(){u.current&&j(t.end)},[t.end,j]);var S=r&&t;return c.useEffect(function(){r&&u.current&&p()},[p,r,S]),c.useEffect(function(){!r&&u.current&&p()},[p,r,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),c.useEffect(function(){u.current=!0},[]),typeof a=="function"?a({countUpRef:s,start:h,reset:y,update:b,pauseResume:m,getCountUp:g}):c.createElement("span",D({className:e,ref:s,style:l},n),typeof t.start<"u"?g().formattingFn(t.start):"")},gt=I.default=mt;I.useCountUp=k;const xt=()=>{const i=[{value:32e3,text:"Experienced tutors"},{value:3e5,text:"5-star tutor reviews"},{value:120,text:"Subjects taught"},{value:200,text:"Tutor nationalities"}];return d.jsxs(H,{children:[d.jsxs(B,{children:[d.jsxs(W,{children:[d.jsxs("h1",{children:["Unlock your potential with the best ",d.jsx("span",{children:"language"})," tutors"]}),d.jsx("p",{children:"Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors."}),d.jsx($,{to:"/teachers",children:"Get started"})]}),d.jsxs(K,{id:"hero",children:[d.jsx("img",{src:Y,alt:""}),d.jsx("img",{src:q,alt:""})]})]}),d.jsx(J,{children:i.map((t,e)=>d.jsxs("li",{children:[d.jsxs("h3",{children:[d.jsx(gt,{start:0,end:t.value,duration:2.75,separator:","})," +"]}),d.jsx("p",{children:t.text})]},e))})]})};export{xt as default};
