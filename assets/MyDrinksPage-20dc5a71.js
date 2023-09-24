import{s as t,r as a,k as o,j as e,N as l,n as c}from"./index-0ce440d9.js";import{u as d}from"./useDispatch-be8c1e0f.js";import{P as p}from"./PageTitle-2af179c1.js";const x=t.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 80px;
`,h=()=>{const r=d();a.useEffect(()=>{r(o())},[r]);const n=s=>{r(c(s))},i=["Berry Deadly","English Rose Cocktail","Elderflower Caipirinha","Blueberry Mojito","Greyhound","Gin Lemon"];return e.jsx(e.Fragment,{children:i.length>0&&e.jsx(x,{children:i.map(s=>e.jsxs("li",{children:[e.jsxs("h5",{children:["Drink Title",s]}),e.jsx("img",{src:"drink"}),e.jsxs("span",{children:["Drink category",s.category]}),e.jsxs("p",{children:["Drink discription",s.description]}),e.jsxs("div",{children:[e.jsx(l,{to:`/drink/${s._id}`,children:"See more"}),e.jsx("button",{onClick:()=>n(s._id),children:"Delete"})]})]},i.indexOf(s)))})})};function u(){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"My Drinks"}),e.jsx(h,{})]})}export{u as default};
