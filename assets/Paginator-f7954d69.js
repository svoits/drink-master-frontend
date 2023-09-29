import{s as d,r as b,j as n,F as f,b as j}from"./index-9b1d0686.js";const m=d.div`
  padding: 14px 0;
  @media screen and (min-width: 768px) {
    padding: 14px 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    color: #f3f3f3;
    transition: background-color 0.5s;
    font-size: 12px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    font-style: normal;
    margin: 0 10px;
  }

  button.active {
    background-color: rgba(64, 112, 205, 0.5);
  }
`,l=d.button`
  width: 27px;
  height: 27px;
  fill: rgba(243, 243, 243, 0.3);
  background-color: transparent;
  border: none;
  margin: 0 10px;
`,P=({drinksPerPage:a,totalDrinks:r,onPageChange:h,pageNumbersToShow:i})=>{const[e,x]=b.useState(1),s=t=>{x(t),h(t)},o=[];for(let t=1;t<=Math.ceil(r/a);t++)o.push(t);const g=()=>{const t=Math.floor(i/2),p=o.indexOf(e),c=Math.max(0,p-t),u=Math.min(o.length-1,c+i-1);return o.slice(c,u+1)};return n.jsx(m,{children:n.jsxs("ul",{children:[n.jsx(l,{type:"button",onClick:()=>s(e-1),disabled:e===1,children:n.jsx(f,{size:20})}),g().map(t=>n.jsx("li",{children:n.jsx("button",{onClick:()=>s(t),className:t===e?"active":"",children:t})},t)),n.jsx(l,{onClick:()=>s(e+1),disabled:e===Math.ceil(r/a),children:n.jsx(j,{size:20})})]})})},C=P;export{C as P};
