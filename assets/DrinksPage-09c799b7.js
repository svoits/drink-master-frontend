import{s as r,u as d,l as g,r as l,p as y,j as e,q as h,i as k,k as m,v as D,F as P,E as S}from"./index-7a2156fc.js";import{a as f}from"./drinks-selectors-571ed20b.js";import{s as b}from"./selectors-db944dbc.js";import{c as w,a as L}from"./index.esm-30c0ce22.js";import{C as E,S as F,P as T}from"./Pagination-1708864a.js";import"./setPrototypeOf-8d862a7d.js";const C=r.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,M=r.li`
  width: 400px;
  height: 438px;
`,x=r.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,v=r.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:t})=>t.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,I=r.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,z=r.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,O=()=>{const t=d(),{drinks:s,isLoading:a,error:i}=g(f);return l.useEffect(()=>{t(y())},[t]),e.jsxs(C,{children:[a&&e.jsx(h,{}),i&&e.jsx("p",{children:"Sorry. There are no images ... 😭"}),s.map(({id:n,drink:o,drinkThumb:c})=>e.jsxs(M,{children:[c?e.jsx(x,{src:c,alt:o}):e.jsx(x,{src:""}),e.jsxs(z,{children:[e.jsx(v,{children:o}),e.jsx(I,{children:"See more"})]})]},n))]})},$=r(k)`
  display: flex;
  align-items: center;
  gap: 8px;
`,q=r(m)`
  background-color: #161F37;
  width: 199px;
  height: 56px;
  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: none;

  color: #f3f3f3;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;
`;r.ul`
  background-color: #161f37;
  width: 199px;
  height: 405px;
  padding: 14px, 23px, 14px, 23px;
  border-radius: 20px;
`;const A=r.option`
  background-color: #161f37;
`,B=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],Q={name:"",category:""},V=w({category:L().required("Please select a category").oneOf(B)}),G=r.p`
  color: red;
`,H=({name:t})=>e.jsx(S,{name:t,render:s=>e.jsx(G,{children:s})}),R=()=>{const t=d(),s=g(b);l.useEffect(()=>{t(D())},[t]);const a=(i,{resetForm:n})=>{console.log(i),n()};return e.jsx(P,{initialValues:Q,validationSchema:V,onSubmit:a,children:e.jsxs($,{children:[e.jsx("div",{children:e.jsxs("label",{htmlFor:"name",children:[e.jsx(m,{name:"name",type:"text"}),e.jsx(H,{name:"name"})]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"categoty"}),e.jsx("div",{children:e.jsxs(q,{name:"categoty",as:"select",children:[e.jsx("option",{value:"",children:"All categories"}),s.map(({id:i,category:n})=>e.jsx(A,{value:n,children:n},i))]})})]}),e.jsx("button",{type:"submit",children:"submit"})]})})},U=r.h1`
  margin-top: 160px;
  margin-bottom: 80px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.mainText};
`;function Z(){const{drinks:t,isLoading:s,error:a}=g(f),[i,n]=l.useState(1),[o,c]=l.useState(0),u=12;c(Math.ceil(t.length/u));const j=(X,p)=>{n(p),datapag.jump(p)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:"Drinks"}),s&&!a&&e.jsx(h,{}),e.jsx(R,{}),e.jsx(E,{children:e.jsxs(F,{spacing:2,children:[t.length>0&&e.jsx(O,{}),e.jsx(T,{color:"primary",count:o,page:i,onChange:j})]})})]})}export{Z as default};
