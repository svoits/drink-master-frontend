import{s as r,t as s,r as w,j as e,a5 as f,a6 as v}from"./index-32fefd10.js";const b=r.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 14px;

  @media screen and (max-width: 374.98px) {
    column-gap: 3.7vw;
  }

  @media screen and (max-width: 319.98px) {
    column-gap: 11.5px;
  }
`,j=r.button`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: ${({theme:n})=>n.paginatorBtnText};
  transition:
    background-color ${s},
    color ${s};
  padding: 0;
  font-size: 12px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  font-style: normal;

  &.active,
  &:hover,
  &:focus {
    color: ${({theme:n})=>n.paginatorBtnTextActive};
    background-color: ${({theme:n})=>n.paginatorBtnBgActive};
  }
`,$=r.div`
  padding: 14px 0px;
`,x=r.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${({theme:n})=>n.paginatorArrow};
  background-color: transparent;
  border: none;
  padding: 0;
  transition: color ${s};

  &:first-child {
    margin-right: 30px;

    @media screen and (max-width: 374.98px) {
      margin-right: 8vw;
    }

    @media screen and (max-width: 354.98px) {
      margin-right: 6vw;
    }

    @media screen and (max-width: 334.98px) {
      margin-right: 4vw;
    }

    @media screen and (max-width: 319.98px) {
      margin-right: 12.8px;
    }
  }

  &:last-child {
    margin-left: 30px;

    @media screen and (max-width: 374.98px) {
      margin-left: 8vw;
    }

    @media screen and (max-width: 354.98px) {
      margin-left: 6vw;
    }

    @media screen and (max-width: 334.98px) {
      margin-left: 4vw;
    }

    @media screen and (max-width: 319.98px) {
      margin-left: 12.8px;
    }
  }

  &:disabled {
    cursor: default;
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${({theme:n})=>n.paginatorArrowHover};
  }
`,y=({drinksPerPage:n,totalDrinks:d,onPageChange:g,pageNumbersToShow:c})=>{const[a,p]=w.useState(1),o=t=>{p(t),g(t)},i=[];for(let t=1;t<=Math.ceil(d/n);t++)i.push(t);const h=()=>{const t=Math.floor(c/2),m=i.indexOf(a),l=Math.max(0,m-t),u=Math.min(i.length-1,l+c-1);return i.slice(l,u+1)};return e.jsx($,{children:e.jsxs(b,{children:[e.jsx(x,{type:"button",onClick:()=>o(a-1),disabled:a===1,children:e.jsx(f,{size:24})}),h().map(t=>e.jsx("li",{children:e.jsx(j,{onClick:()=>o(t),className:t===a?"active":"",children:t})},t)),e.jsx(x,{onClick:()=>o(a+1),disabled:a===Math.ceil(d/n),children:e.jsx(v,{size:24})})]})})},P=y;export{P};
