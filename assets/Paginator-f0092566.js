import{s as e,t as r,j as a,a9 as w,aa as f}from"./index-a9a8bd60.js";const u=e.ul`
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
`,v=e.button`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  color: ${({theme:n})=>n.paginatorBtnText};
  transition:
    background-color ${r},
    color ${r};
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
`,b=e.div`
  padding: 14px 0px;
`,x=e.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  color: ${({theme:n})=>n.paginatorArrow};
  background-color: transparent;
  border: none;
  padding: 0;
  transition: color ${r};

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
`,j=({currentPage:n,drinksPerPage:s,totalDrinks:d,onPageChange:p,pageNumbersToShow:c})=>{const o=t=>{p(t)},i=[];for(let t=1;t<=Math.ceil(d/s);t++)i.push(t);const h=()=>{const t=Math.floor(c/2),m=i.indexOf(n),l=Math.max(0,m-t),g=Math.min(i.length-1,l+c-1);return i.slice(l,g+1)};return a.jsx(b,{children:a.jsxs(u,{children:[a.jsx(x,{type:"button",onClick:()=>o(n-1),disabled:n===1,children:a.jsx(w,{size:24})}),h().map(t=>a.jsx("li",{children:a.jsx(v,{onClick:()=>o(t),className:t===n?"active":"",children:t})},t)),a.jsx(x,{onClick:()=>o(n+1),disabled:n===Math.ceil(d/s),children:a.jsx(f,{size:24})})]})})},y=j;export{y as P};
