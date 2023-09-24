import{s as r,k as x,u as a,r as p,l as m,j as e,L as d,h as u,i as h,m as j,F as y,E as k}from"./index-90be9044.js";import{a as f}from"./HomeDrinksList.styled-7cd2479a.js";import{c as D,a as b}from"./index.esm-22eb841a.js";const L=r.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,P=r.li`
  width: 400px;
  height: 438px;
`,g=r.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,S=r.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:t})=>t.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,w=r.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,E=r.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,F=()=>{const t=x(),{drinks:i,isLoading:n,error:o}=a(f);return p.useEffect(()=>{t(m())},[t]),e.jsxs(L,{children:[n&&e.jsx(d,{}),o&&e.jsx("p",{children:"Sorry. There are no images ... 😭"}),i.map(({id:s,drink:c,drinkThumb:l})=>e.jsxs(P,{children:[l?e.jsx(g,{src:l,alt:c}):e.jsx(g,{src:""}),e.jsxs(E,{children:[e.jsx(S,{children:c}),e.jsx(w,{children:"See more"})]})]},s))]})},T=t=>t.filter.categories,M=r(u)`
  display: flex;
  align-items: center;
  gap: 8px;
`,v=r(h)`
  // background-color: #161F37;
  background-color: pink;
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
`;const C=r.option`
  background-color: #161f37;
`,I=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],z={name:"",category:""},O=D({category:b().required("Please select a category").oneOf(I)}),$=r.p`
  color: red;
`,q=({name:t})=>e.jsx(k,{name:t,render:i=>e.jsx($,{children:i})}),A=()=>{const t=x(),i=a(T);p.useEffect(()=>{t(j())},[t]);const n=(o,{resetForm:s})=>{console.log(o),s()};return e.jsx(y,{initialValues:z,validationSchema:O,onSubmit:n,children:e.jsxs(M,{children:[e.jsx("div",{children:e.jsxs("label",{htmlFor:"name",children:[e.jsx(h,{name:"name",type:"text"}),e.jsx(q,{name:"name"})]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"categoty"}),e.jsx("div",{children:e.jsxs(v,{name:"categoty",as:"select",children:[e.jsx("option",{value:"",children:"All categories"}),i.map(({id:o,category:s})=>e.jsx(C,{value:s,children:s},o))]})})]}),e.jsx("button",{type:"submit",children:"submit"})]})})},B=r.h1`
  margin-top: 160px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f3;
`;function R(){const{drinks:t,isLoading:i,error:n}=a(f);return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Drinks"}),i&&!n&&e.jsx(d,{}),e.jsx(A,{}),t.length>0&&e.jsx(F,{})]})}export{R as default};
