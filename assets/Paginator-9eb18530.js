import{s,t as i,r as b,j as n,ab as j,ac as m}from"./index-7394366a.js";const y=s.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
`,v=s.button`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: #f3f3f3;
  transition:
    background-color ${i},
    color ${i};
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  font-style: normal;

  &.active,
  &:hover,
  &:focus {
    background-color: rgba(64, 112, 205, 0.5);
  }
`,C=s.div`
  padding: 14px 0px;
`,h=s.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: rgba(243, 243, 243, 0.3);
  background-color: transparent;
  border: none;
  padding: 0;
  transition: color ${i};

  &:first-child {
    margin-right: 30px;
  }

  &:last-child {
    margin-left: 30px;
  }

  &:hover:not([disabled]),
  &:focus:not([disabled]) {
    color: #f3f3f3;
  }
`,P=({drinksPerPage:a,totalDrinks:c,onPageChange:g,pageNumbersToShow:l})=>{const[e,p]=b.useState(1),r=t=>{p(t),g(t)},o=[];for(let t=1;t<=Math.ceil(c/a);t++)o.push(t);const x=()=>{const t=Math.floor(l/2),f=o.indexOf(e),d=Math.max(0,f-t),u=Math.min(o.length-1,d+l-1);return o.slice(d,u+1)};return n.jsx(C,{children:n.jsxs(y,{children:[n.jsx(h,{type:"button",onClick:()=>r(e-1),disabled:e===1,children:n.jsx(j,{size:24})}),x().map(t=>n.jsx("li",{children:n.jsx(v,{onClick:()=>r(t),className:t===e?"active":"",children:t})},t)),n.jsx(h,{onClick:()=>r(e+1),disabled:e===Math.ceil(c/a),children:n.jsx(m,{size:24})})]})})},M=P;export{M as P};
