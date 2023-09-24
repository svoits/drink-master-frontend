import{s as t,k as a,r as l,l as o,j as e,N as c,o as d}from"./index-90be9044.js";import{P as p}from"./PageTitle-a55ca886.js";const x=t.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 80px;
`,h=()=>{const i=a();l.useEffect(()=>{i(o())},[i]);const n=s=>{i(d(s))},r=["Berry Deadly","English Rose Cocktail","Elderflower Caipirinha","Blueberry Mojito","Greyhound","Gin Lemon"];return e.jsx(e.Fragment,{children:r.length>0&&e.jsx(x,{children:r.map(s=>e.jsxs("li",{children:[e.jsxs("h5",{children:["Drink Title",s]}),e.jsx("img",{src:"drink"}),e.jsxs("span",{children:["Drink category",s.category]}),e.jsxs("p",{children:["Drink discription",s.description]}),e.jsxs("div",{children:[e.jsx(c,{to:`/drink/${s._id}`,children:"See more"}),e.jsx("button",{onClick:()=>n(s._id),children:"Delete"})]})]},r.indexOf(s)))})})};function m(){return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"My Drinks"}),e.jsx(h,{})]})}export{m as default};
