import{s as t,u as g,k as a,r as x,l as m,j as e,L as d,h as u,i as h,m as y,F as j,E as k}from"./index-16b58938.js";import{c as w,a as D}from"./index.esm-e5785cf0.js";const f=i=>i.drinks,b=t.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,L=t.li`
  width: 400px;
  height: 438px;
`,p=t.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,P=t.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:i})=>i.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,S=t.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,E=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,F=()=>{const i=g(),{drinks:n,isLoading:s,error:o}=a(f);return x.useEffect(()=>{i(m())},[i]),e.jsxs(b,{children:[s&&e.jsx(d,{}),o&&e.jsx("p",{children:"Sorry. There are no images ... 😭"}),n.map(({id:r,drink:c,drinkThumb:l})=>e.jsxs(L,{children:[l?e.jsx(p,{src:l,alt:c}):e.jsx(p,{src:""}),e.jsxs(E,{children:[e.jsx(P,{children:c}),e.jsx(S,{children:"See more"})]})]},r))]})},M=i=>i.filter.categories,T=t(u)`
  display: flex;
  align-items: center;
  gap: 8px;
`,v=t(h)`
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
`;t.ul`
  background-color: #161f37;
  width: 199px;
  height: 405px;
  padding: 14px, 23px, 14px, 23px;
  border-radius: 20px;
`;const z=t.option`
  background-color: #161f37;
`,C=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],I={name:"",category:""},O=w({category:D().required("Please select a category").oneOf(C)}),$=t.p`
  color: red;
`,q=({name:i})=>e.jsx(k,{name:i,render:n=>e.jsx($,{children:n})}),A=()=>{const i=g(),n=a(M);x.useEffect(()=>{i(y())},[i]);const s=(o,{resetForm:r})=>{console.log(o),r()};return e.jsx(j,{initialValues:I,validationSchema:O,onSubmit:s,children:e.jsxs(T,{children:[e.jsx("div",{children:e.jsxs("label",{htmlFor:"name",children:[e.jsx(h,{name:"name",type:"text"}),e.jsx(q,{name:"name"})]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"categoty"}),e.jsx("div",{children:e.jsxs(v,{name:"categoty",as:"select",children:[e.jsx("option",{value:"",children:"All categories"}),n.map(({id:o,category:r})=>e.jsx(z,{value:r,children:r},o))]})})]}),e.jsx("button",{type:"submit",children:"submit"})]})})};t.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`;t.li`
  width: 400px;
  height: 438px;
`;t.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`;t.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:i})=>i.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;t.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`;t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;const B=t.h1`
  margin-top: 160px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f3;
`;function H(){const{drinks:i,isLoading:n,error:s}=a(f);return e.jsxs(e.Fragment,{children:[e.jsx(B,{children:"Drinks"}),n&&!s&&e.jsx(d,{}),e.jsx(A,{}),i.length>0&&e.jsx(F,{})]})}export{H as default};
