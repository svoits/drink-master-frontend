import{s as r,u as d,l as g,r as l,p as y,j as e,L as h,i as k,k as m,q as D,F as P,E as S}from"./index-47120812.js";import{a as f}from"./drinks-selectors-b8032fb2.js";import{c as b,a as L}from"./index.esm-f82f6aba.js";import{C as w,S as E,P as F}from"./Pagination-37208a1e.js";import"./setPrototypeOf-8d862a7d.js";const T=r.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,C=r.li`
  width: 400px;
  height: 438px;
`,x=r.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,M=r.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:t})=>t.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,v=r.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,I=r.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,z=()=>{const t=d(),{drinks:s,isLoading:a,error:i}=g(f);return l.useEffect(()=>{t(y())},[t]),e.jsxs(T,{children:[a&&e.jsx(h,{}),i&&e.jsx("p",{children:"Sorry. There are no images ... 😭"}),s.map(({id:n,drink:o,drinkThumb:c})=>e.jsxs(C,{children:[c?e.jsx(x,{src:c,alt:o}):e.jsx(x,{src:""}),e.jsxs(I,{children:[e.jsx(M,{children:o}),e.jsx(v,{children:"See more"})]})]},n))]})},O=t=>t.filter.categories,$=r(k)`
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
`,B=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],Q={name:"",category:""},V=b({category:L().required("Please select a category").oneOf(B)}),G=r.p`
  color: red;
`,H=({name:t})=>e.jsx(S,{name:t,render:s=>e.jsx(G,{children:s})}),R=()=>{const t=d(),s=g(O);l.useEffect(()=>{t(D())},[t]);const a=(i,{resetForm:n})=>{console.log(i),n()};return e.jsx(P,{initialValues:Q,validationSchema:V,onSubmit:a,children:e.jsxs($,{children:[e.jsx("div",{children:e.jsxs("label",{htmlFor:"name",children:[e.jsx(m,{name:"name",type:"text"}),e.jsx(H,{name:"name"})]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"categoty"}),e.jsx("div",{children:e.jsxs(q,{name:"categoty",as:"select",children:[e.jsx("option",{value:"",children:"All categories"}),s.map(({id:i,category:n})=>e.jsx(A,{value:n,children:n},i))]})})]}),e.jsx("button",{type:"submit",children:"submit"})]})})},U=r.h1`
  margin-top: 160px;
  margin-bottom: 80px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.mainText};
`;function Y(){const{drinks:t,isLoading:s,error:a}=g(f),[i,n]=l.useState(1),[o,c]=l.useState(0),u=12;c(Math.ceil(t.length/u));const j=(X,p)=>{n(p),datapag.jump(p)};return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:"Drinks"}),s&&!a&&e.jsx(h,{}),e.jsx(R,{}),e.jsx(w,{children:e.jsxs(E,{spacing:2,children:[t.length>0&&e.jsx(z,{}),e.jsx(F,{color:"primary",count:o,page:i,onChange:j})]})})]})}export{Y as default};
