import{s as e,t as a,N as m,U as v,a as f,j as t,V as k,u as y,r as c,W as D,C as P,L as S}from"./index-12865810.js";import{D as F}from"./stub-caa39441.js";import{C as z}from"./hero-img-desc-2x-e8906f30.js";import{P as C}from"./PageTitle-56df5574.js";import{P as I}from"./Paginator-1723231f.js";import{u as L}from"./useDrink-394f5dac.js";import"./drinks-selectors-db0f3074.js";const $=e.li`
  margin-left: auto;
  margin-right: auto;
`,A=e.img`
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
`,T=e.h3`
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
`,E=e.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,M=e.p`
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
`,N=e.div`
  display: flex;
  column-gap: 8px;
`;e(m)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const R=e(m)`
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
  padding: 14px 40px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  transition:
    background-color ${a},
    border-color ${a},
    color ${a};

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,B=e(v)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,W=e.button`
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
    background-color ${a},
    color ${a};

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #161f37;
  }
`;function _({drink:n}){const i=f(),{_id:o,drink:s,alcoholic:d,drinkThumb:x,description:l}=n,r=()=>{i(k(o))};return t.jsxs($,{children:[t.jsx(A,{src:x||F,alt:s}),t.jsx(E,{children:s}),t.jsx(T,{children:d?"Alcoholic":"NonAlcoholic"}),t.jsx(M,{children:l}),t.jsxs(N,{children:[t.jsx(R,{to:`/drinks/${o}`,children:"See More"}),t.jsx(W,{onClick:r,children:t.jsx(B,{})})]})]})}const U=e.ul`
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
`;function V({drinks:n}){return t.jsx(U,{children:Array.isArray(n)&&n.map(i=>t.jsx(_,{drink:i},i._id))})}const Y=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`;e.div`
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
`;const q=e.div`
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
`,G=e.p`
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
`,H=e.img`
  width: 100%;
`,J=e.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function it(){const n=f(),{total:i,favoriteDrinks:o}=L(),{width:s}=y(),[d,x]=c.useState(""),[l,r]=c.useState(!0),[h,u]=c.useState(1),w=5,p=s<1440?8:9,b=g=>{u(g)};c.useEffect(()=>{r(!0),n(D({page:h,limit:p})).then(()=>r(!1)).catch(g=>{console.error(g),x("Something went wrong, please try later."),r(!1)})},[h,n,p]);const j=Math.ceil(i/p);return t.jsx(Y,{children:t.jsxs(P,{children:[t.jsx(C,{title:"Favorites"}),l&&t.jsx(S,{}),i===0&&t.jsxs(q,{children:[t.jsx(H,{src:z,alt:"Cocktail"}),t.jsx(G,{children:"You have not added any cocktails yet"})]}),!o.length&&t.jsx(J,{children:t.jsx(V,{drinks:o})}),d&&t.jsx("div",{children:d}),j>1&&t.jsx(I,{drinksPerPage:p,totalDrinks:i,onPageChange:b,pageNumbersToShow:w})]})})}export{it as default};