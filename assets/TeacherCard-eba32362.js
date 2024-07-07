import{G as S,p as n,r as u,j as e,L as B,F as I,i as X,k as m,u as T,M as P,I as N,l as E,m as _,b as M,n as q,c as A,q as V,s as D,t as O,e as w,f as k,v as z,S as U,w as C,x as $}from"./index-34dde199.js";function H(o){return S({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"},child:[]}]})(o)}function L(o){return S({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(o)}const Y=n.button`
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: var(--btn-color);
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  z-index: 1000;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--btn-hover-color);
  }

  &:focus {
    outline: none;
  }
`,me=()=>{const[o,r]=u.useState(!1),i=()=>{window.scrollTo({top:0,behavior:"smooth"})},s=()=>{window.pageYOffset>300?r(!0):r(!1)};return window.addEventListener("scroll",s),e.jsx(e.Fragment,{children:o&&e.jsx(Y,{onClick:i,children:e.jsx(H,{})})})},G=n.div`
  width: 1184px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 48px;
  padding: 24px;
  background-color: #fff;
  border-radius: 24px;
  margin-bottom: 32px;
`,W=n.img`
  border-radius: 50%;
  width: 96px;
  height: 96px;
`,J=n.div`
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
`,K=n.div`
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
`,b=n.p`
  color: var(--subtitle-text-color);
  padding: 0;
  margin: 0;
`,Q=n(B)`
  all: unset;
  text-decoration: underline;
  font-style: 16px;
  line-height: 24px;
  margin: 8px 0 24px 0;
  cursor: pointer;
`,Z=n.ul`
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
  }
`,ee=n.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 4px;
  margin: 16px 0;
`,oe=n.button`
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
`;n.button`
  border: none;
  padding: 0;
  margin: 0;
`;const ne=n.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 32px;
  padding: 0;
`,te=n.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 6px;
  padding: 0;
`,re=n.div`
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
`,se=n.div`
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
`,ie=n.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 0;
  font-family: 'Roboto-Medium', sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0em;
`,ae=({reviews:o})=>e.jsx(ne,{children:o.map((r,i)=>e.jsxs(te,{children:[e.jsxs(re,{children:[r.reviewer_avatar?e.jsx("img",{src:r.reviewer_avatar,alt:"Reviewer Avatar"}):e.jsx(I,{size:44}),e.jsxs(se,{children:[e.jsx("p",{children:r.reviewer_name}),e.jsxs(ie,{children:[e.jsx(L,{size:16,color:"#FFC531"}),e.jsx("p",{children:r.reviewer_rating})]})]})]}),e.jsx("p",{children:r.comment})]},i))}),le=n.div`
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
`,ce=n.button`
  position: absolute;
  top: 28px;
  right: 28px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`,de=n.div`
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
`,pe=n.div`
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
`,xe=n.form`
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
`,h=n.label`
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
`,y=n.div`
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
    background-color: transparent;
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
    background-color: #fff;
    margin: 0;
    outline: none;

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: 0;
      color: var(--btn-color);
      background-color: #fff;
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
`,j=n.p`
  position: absolute;
  bottom: -25px;
  right: 0;
  font-size: 12px;
  color: red;
`,ue=n.button`
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
`,ge=({isModalOpen:o,closeModal:r,teacher:i})=>{const s=X().shape({name:m().required("Name is required"),email:m().email("Invalid email. Please enter a valid email").matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"Invalid email").required("Email is required"),phone:m().matches(/^\+?[0-9]*$/,"Phone number must be in format +380XXXXXXXXX").min(13,"Phone number must be in format +380XXXXXXXXX").required("Phone is required"),reason:m().required("Reason is required")}),{register:a,handleSubmit:x,formState:{errors:t}}=T({resolver:E(s),mode:"onChange"}),g=_(),l=p=>{console.log(p),r(),g("Thank you for your interest in learning English with us!","success")};return o?e.jsx(e.Fragment,{children:o&&e.jsx(P,{onClose:r,children:e.jsxs(le,{children:[e.jsx(ce,{onClick:r,children:e.jsx(N,{size:32})}),e.jsxs(de,{children:[e.jsx("h2",{children:"Book trial lesson"}),e.jsx("p",{children:"Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."}),e.jsxs(pe,{children:[e.jsx("img",{src:i.avatar_url,alt:i.name}),e.jsxs("div",{children:[e.jsx("p",{children:"Your teacher"}),e.jsxs("h3",{children:[i.name," ",i.surname]})]})]})]}),e.jsxs(xe,{onSubmit:x(l),noValidate:!0,children:[e.jsxs("div",{className:"form-section",children:[e.jsx("h2",{children:"What is your main reason for learning English?"}),e.jsxs(h,{children:[e.jsx("input",{type:"radio",value:"career",...a("reason"),defaultChecked:!0}),"Career and business"]}),e.jsxs(h,{children:[e.jsx("input",{type:"radio",value:"kids",...a("reason")}),"Lesson for kids"]}),e.jsxs(h,{children:[e.jsx("input",{type:"radio",value:"abroad",...a("reason")}),"Living abroad"]}),e.jsxs(h,{children:[e.jsx("input",{type:"radio",value:"exams",...a("reason")}),"Exams and coursework"]}),e.jsxs(h,{children:[e.jsx("input",{type:"radio",value:"hobby",...a("reason")}),"Culture, travel or hobby"]}),t.reason&&e.jsx(j,{children:t.reason.message})]}),e.jsxs("div",{className:"form-section",children:[e.jsxs(y,{children:[e.jsx("input",{type:"text",...a("name"),className:t.name?"error":"",placeholder:" "}),e.jsx("label",{className:t.name?"error":"",children:"Name"}),t.name&&e.jsx(j,{children:t.name.message})]}),e.jsxs(y,{children:[e.jsx("input",{type:"email",...a("email"),className:t.email?"error":"",placeholder:" "}),e.jsx("label",{className:t.email?"error":"",children:"Email"}),t.email&&e.jsx(j,{children:t.email.message})]}),e.jsxs(y,{children:[e.jsx("input",{type:"tel",...a("phone"),className:t.phone?"error":"",placeholder:" "}),e.jsx("label",{className:t.phone?"error":"",children:"Phone"}),t.phone&&e.jsx(j,{children:t.phone.message})]})]}),e.jsx(ue,{type:"submit",children:"Book"})]})]})})}):null},F=n.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: transparent;
  cursor: pointer;
`,fe=({teacher:o})=>{const[r,i]=u.useState(!1),[s,a]=u.useState(null),x=M(),t=q();u.useEffect(()=>{A(x,l=>{a(l)})},[x]),u.useEffect(()=>{s&&(async()=>{if(s){const p=w(k,"users",s.uid),c=await z(p);if(c.exists()){const d=c.data();i(d.favorites.some(f=>f.id===o.id))}}})()},[s,o.id]);const g=async()=>{if(!s){U.fire({icon:"error",title:"Oops...",text:"You must be logged in to add favorites",confirmButtonColor:"var(--btn-color)"});return}const l=w(k,"users",s.uid),p=await z(l);if(p.exists()){const d=p.data().favorites||[];if(d.findIndex(v=>v.id===o.id)!==-1){const v=d.filter(R=>R.id!==o.id);await C(l,{favorites:v}),i(!1)}else await C(l,{favorites:$(o)}),i(!0)}};return t.pathname==="/teachers"?e.jsx(F,{onClick:g,children:r?e.jsx(V,{size:22,style:{color:"var(--btn-color)"}}):e.jsx(D,{size:22,style:{color:"var(--btn-color)"}})}):e.jsx(F,{onClick:g,children:e.jsx(O,{size:22,style:{color:"var(--btn-color)"}})})},be=({teacher:o,selectedLevel:r})=>{const i=o.languages.reduce((c,d,f)=>f<o.languages.length-1?[...c,e.jsx("span",{children:d},f),", "]:[...c,e.jsx("span",{children:d},f)],[]),[s,a]=u.useState(!1),[x,t]=u.useState(!1),g=()=>{t(!0)},l=()=>{t(!1)},p=()=>{a(!s)};return e.jsxs(G,{children:[e.jsx(W,{src:o.avatar_url,alt:o.name}),e.jsxs(J,{children:[e.jsxs(K,{children:[e.jsx(b,{style:{marginRight:"192px"},children:"Languages"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("p",{children:"Lessons online"})}),e.jsx("li",{children:e.jsxs("p",{children:["Lessons done: ",o.lessons_done]})}),e.jsxs("li",{children:[e.jsx(L,{size:16,color:"#FFC531"}),e.jsxs("p",{children:["Rating: ",o.rating]})]}),e.jsx("li",{children:e.jsxs("p",{children:["Price/1 hour: ",e.jsxs("span",{children:["$",o.price_per_hour]})]})})]}),e.jsx(fe,{teacher:o})]}),e.jsxs("h3",{children:[o.name," ",o.surname]}),e.jsxs(b,{children:["Speaks: ",e.jsx("span",{children:i})]}),e.jsxs(b,{children:["Lesson Info: ",e.jsxs("span",{children:[" ",o.lesson_info]})]}),e.jsxs(b,{children:["Conditions: ",e.jsx("span",{children:o.conditions})]}),!s&&e.jsx(Q,{onClick:p,children:"Read more"}),s&&e.jsxs(ee,{children:[e.jsx("p",{children:o.experience}),e.jsx(ae,{reviews:o.reviews})]}),e.jsx(Z,{children:o.levels.map((c,d)=>e.jsxs("li",{style:{backgroundColor:r===c?"var(--btn-color)":"#fff",border:r===c?"none":"1px solid rgba(12, 14, 17, 0.2)"},children:["#",c]},d))}),s&&e.jsx(oe,{onClick:g,children:"Book trial lesson"}),x&&e.jsx(ge,{isModalOpen:x,closeModal:l,teacher:o})]})]})};export{me as S,be as T};
