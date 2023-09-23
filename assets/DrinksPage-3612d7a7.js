import{s as t,j as e}from"./index-e585f362.js";import{r as c}from"./recipes-c8bb5d97.js";import{F as l,a as s,c as x,d as p,b as d,E as g}from"./index.esm-2ff6c759.js";const h=t.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,m=t.li`
  width: 400px;
  height: 438px;
`,o=t.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,f=t.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:n})=>n.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,u=t.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,j=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;function y(){return e.jsx("div",{children:e.jsx(h,{children:c.map(({id:n,drink:r,drinkThumb:i})=>e.jsxs(m,{children:[i?e.jsx(o,{src:i,alt:r}):e.jsx(o,{src:""}),e.jsxs(j,{children:[e.jsx(f,{children:r}),e.jsx(u,{children:"See more"})]})]},n))})})}const k=t(l)`
  display: flex;
  align-items: center;
  gap: 8px;
`,D=t(s)`
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
`;const b=t.option`
  background-color: #161f37;
`,a=[{id:"1",category:"Ordinary Drink"},{id:"2",category:"Cocktail"},{id:"3",category:"Shake"},{id:"4",category:"Other/Unknown"},{id:"5",category:"Cocoa"},{id:"6",category:"Shot"},{id:"7",category:"Coffee/Tea"},{id:"8",category:"Homemade Liqueur"},{id:"9",category:"Punch/Party Drink"},{id:"10",category:"Beer"},{id:"11",category:"Soft Drink"}],w={name:"",category:""},S=x({category:p().required("Please select a category").oneOf(a)}),F=t.p`
  color: red;
`,v=({name:n})=>e.jsx(g,{name:n,render:r=>e.jsx(F,{children:r})}),E=()=>{const n=(r,{resetForm:i})=>{console.log(r),i()};return e.jsx(d,{initialValues:w,validationSchema:S,onSubmit:n,children:e.jsxs(k,{children:[e.jsx("div",{children:e.jsxs("label",{htmlFor:"name",children:[e.jsx(s,{name:"name",type:"text"}),e.jsx(v,{name:"name"})]})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"categoty"}),e.jsx("div",{children:e.jsxs(D,{name:"categoty",as:"select",children:[e.jsx("option",{value:"",children:"All categories"}),a.map(({id:r,category:i})=>e.jsx(b,{value:i,children:i},r))]})})]}),e.jsx("button",{type:"submit",children:"submit"})]})})},H=t.h1`
  margin-top: 160px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f3;
`;function I(){return e.jsxs(e.Fragment,{children:[e.jsx(H,{children:"Drinks"}),e.jsx(E,{}),e.jsx(y,{})]})}export{I as default};
