import{s as t,u as a,r as l,p as o,j as s,N as c,y as d}from"./index-7741aceb.js";const p=t.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 80px;
`,x=()=>{const i=a();l.useEffect(()=>{i(o())},[i]);const n=e=>{i(d(e))},r=["Berry Deadly","English Rose Cocktail","Elderflower Caipirinha","Blueberry Mojito","Greyhound","Gin Lemon"];return s.jsx(s.Fragment,{children:r.length>0&&s.jsx(p,{children:r.map(e=>s.jsxs("li",{children:[s.jsxs("h5",{children:["Drink Title",e]}),s.jsx("img",{src:"drink"}),s.jsxs("span",{children:["Drink category",e.category]}),s.jsxs("p",{children:["Drink discription",e.description]}),s.jsxs("div",{children:[s.jsx(c,{to:`/drink/${e._id}`,children:"See more"}),s.jsx("button",{onClick:()=>n(e._id),children:"Delete"})]})]},r.indexOf(e)))})})};export{x as D};
