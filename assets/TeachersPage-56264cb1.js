import{s as m,r as s,j as e,a as w,o as A,d as E}from"./index-5adf4671.js";import{T as P,S as k}from"./TeacherCard-99338758.js";const F=m.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 20px;
  margin-bottom: 32px;
`,y=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;

  label {
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 14px;
    line-height: 18px;
    text-align: left;
    color: var(--subtitle-text-color);
  }

  select {
    border: none;
    padding: 14px 18px;
    border-radius: 8px;
    font-family: 'Roboto-Medium', sans-serif;
    font-size: 18px;
    line-height: 20px;
    text-align: left;
    color: var(--primary-text-color);
    background-color: #fff;
  }

  select:focus {
    outline: none;
  }
  option {
    padding: 8px;
  }
`,M=({teachers:u,onFilterChange:d})=>{const[h,j]=s.useState([]),[f,v]=s.useState([]),[b,S]=s.useState([]),[g,L]=s.useState(""),[n,r]=s.useState(""),[a,i]=s.useState("");s.useEffect(()=>{const t=new Set,o=new Set,C=new Set;u.forEach(x=>{x.languages.forEach(p=>t.add(p)),x.levels.forEach(p=>o.add(p)),C.add(x.price_per_hour)}),j(Array.from(t)),v(Array.from(o)),S(Array.from(C).sort((x,p)=>x-p))},[u]);const l=t=>{L(t.target.value),d({language:t.target.value,level:n,price:a})},c=t=>{r(t.target.value),d({language:g,level:t.target.value,price:a})},T=t=>{i(t.target.value),d({language:g,level:n,price:t.target.value})};return e.jsxs(F,{children:[e.jsxs(y,{children:[e.jsx("label",{children:"Languages"}),e.jsxs("select",{onChange:l,value:g,children:[e.jsx("option",{value:"",children:"All"}),h.map((t,o)=>e.jsx("option",{value:t,children:t},o))]})]}),e.jsxs(y,{children:[e.jsx("label",{children:"Level of knowledge"}),e.jsxs("select",{onChange:c,value:n,children:[e.jsx("option",{value:"",children:"All"}),f.map((t,o)=>e.jsx("option",{value:t,children:t},o))]})]}),e.jsxs(y,{children:[e.jsx("label",{children:"Price"}),e.jsxs("select",{onChange:T,value:a,children:[e.jsx("option",{value:"",children:"All"}),b.map((t,o)=>e.jsx("option",{value:t,children:t},o))]})]})]})},R=m.div`
  margin: 48px 64px;
`,_=m.button`
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
`,q=()=>{const[u,d]=s.useState(4),[h,j]=s.useState([]),[f,v]=s.useState([]),[b,S]=s.useState("");s.useEffect(()=>{const n=w(E,"teachers");A(n,r=>{const a=r.val();if(a){const i=Object.values(a);j(i),v(i)}})},[]);const g=()=>{d(n=>n+4)},L=n=>{const{language:r,level:a,price:i}=n;let l=h;r&&(l=l.filter(c=>c.languages.includes(r))),a&&(l=l.filter(c=>c.levels.includes(a))),i&&(l=l.filter(c=>c.price_per_hour===Number(i))),S(a),v(l),d(4)};return e.jsxs(R,{children:[e.jsx(M,{teachers:h,onFilterChange:L}),f.slice(0,u).map((n,r)=>e.jsx(P,{teacher:n,selectedLevel:b},r)),u<f.length&&e.jsx(_,{onClick:g,children:"Load More"})]})},V=()=>e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx(k,{})]});export{V as default};
