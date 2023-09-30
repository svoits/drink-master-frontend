import{s as t,t as r,N as h,U as v,u as f,j as i,V as k,m as y,r as c,W as D,C as P,L as S}from"./index-1ad72cd1.js";import{D as F}from"./stub-4dfc7161.js";import{C as z}from"./hero-img-desc-2x-e8906f30.js";import{P as C}from"./PageTitle-98bc27bd.js";import{P as I}from"./Paginator-402d136a.js";import{u as L}from"./useDrink-d894bdb7.js";import"./drinks-selectors-db0f3074.js";const $=t.li`
  margin-left: auto;
  margin-right: auto;
`,A=t.img`
  width: 100%;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,T=t.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 4px;
  color: var(--text-btn-color);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,E=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,M=t.p`
  height: 74px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 18px;
  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.38;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    height: 90px;
  }
`,N=t.div`
  display: flex;
  column-gap: 8px;
`;t(h)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const R=t(h)`
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
  padding: 14px 40px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  transition:
    background-color ${r},
    border-color ${r},
    color ${r};

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,B=t(v)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,W=t.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  padding: 0;
  background-color: #161f37;
  color: #f3f3f3;

  transition:
    background-color ${r},
    color ${r};

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #161f37;
  }
`;function _({drink:n}){const e=f(),{_id:a,drink:s,alcoholic:d,drinkThumb:x,description:l}=n,o=()=>{e(k(a))};return i.jsxs($,{children:[i.jsx(A,{src:x||F,alt:s}),i.jsx(E,{children:s}),i.jsx(T,{children:d?"Alcoholic":"NonAlcoholic"}),i.jsx(M,{children:l}),i.jsxs(N,{children:[i.jsx(R,{to:`/drinks/${a}`,children:"See More"}),i.jsx(W,{onClick:o,children:i.jsx(B,{})})]})]})}const U=t.ul`
  display: grid;
  grid-row-gap: 40px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 62px;
  }
`;function V({drinks:n}){return i.jsx(U,{children:Array.isArray(n)&&n.map(e=>i.jsx(_,{drink:e},e._id))})}const Y=t.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`;t.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`;const q=t.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`,G=t.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin-top: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,H=t.img`
  width: 100%;
`,J=t.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function ei(){const n=f(),{total:e,favoriteDrinks:a}=L(),{width:s}=y(),[d,x]=c.useState(""),[l,o]=c.useState(!0),[g,u]=c.useState(1),w=5,p=s<1440?8:9,b=m=>{u(m)};c.useEffect(()=>{o(!0),n(D({page:g,limit:p})).then(()=>o(!1)).catch(m=>{console.error(m),x("Something went wrong, please try later."),o(!1)})},[g,n,p]);const j=Math.ceil(e/p);return i.jsx(Y,{children:i.jsxs(P,{children:[i.jsx(C,{title:"Favorites"}),l&&i.jsx(S,{}),e===0&&i.jsxs(q,{children:[i.jsx(H,{src:z,alt:"Cocktail"}),i.jsx(G,{children:"You have not added any cocktails yet"})]}),e>0&&i.jsx(J,{children:i.jsx(V,{drinks:a})}),d&&i.jsx("div",{children:d}),j>1&&i.jsx(I,{drinksPerPage:p,totalDrinks:e,onPageChange:b,pageNumbersToShow:w})]})})}export{ei as default};
