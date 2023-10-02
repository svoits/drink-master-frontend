import{s as e,t as s,N as m,Q as k,c as f,j as t,U as v,u as y,a as D,r as c,V as P,C as S,L as F}from"./index-fc42256f.js";import{D as C}from"./stub-2a43d409.js";import{C as z}from"./hero-img-desc-2x-e8906f30.js";import{P as I}from"./PageTitle-2d989cff.js";import{P as L}from"./Paginator-0d23fba3.js";const $=e.li`
  margin-left: auto;
  margin-right: auto;
`,A=e.img`
  width: 100%;
  border-radius: 8px;
  background: #161f37;

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
    background-color ${s},
    border-color ${s},
    color ${s};

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,B=e(k)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,_=e.button`
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
    background-color ${s},
    color ${s};

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #161f37;
  }
`;function Q({drink:i}){const n=f(),{_id:o,drink:r,alcoholic:d,drinkThumb:x,description:l}=i,a=()=>{n(v(o))};return t.jsxs($,{children:[t.jsx(A,{src:x||C,alt:r}),t.jsx(E,{children:r}),t.jsx(T,{children:d?"Alcoholic":"NonAlcoholic"}),t.jsx(M,{children:l}),t.jsxs(N,{children:[t.jsx(R,{to:`/drinks/${o}`,children:"See More"}),t.jsx(_,{onClick:a,children:t.jsx(B,{})})]})]})}const U=e.ul`
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
`;function V({drinks:i}){return t.jsx(U,{children:Array.isArray(i)&&i.map(n=>t.jsx(Q,{drink:n},n._id))})}const W=e.section`
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
`;const Y=e.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 204px;
  row-gap: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`,q=e.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,G=e.img`
  width: 100%;
  object-fit: contain;
`,H=e.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function tt(){const i=f(),{total:n,favoriteDrinks:o}=y(),{width:r}=D(),[d,x]=c.useState(""),[l,a]=c.useState(!0),[h,u]=c.useState(1),w=r<768?5:8,p=r<1440?8:9,b=g=>{u(g)};c.useEffect(()=>{a(!0),i(P({page:h,limit:p})).then(()=>a(!1)).catch(g=>{console.error(g),x("Something went wrong, please try later."),a(!1)})},[h,i,p]);const j=Math.ceil(n/p);return t.jsx(W,{children:t.jsxs(S,{children:[t.jsx(I,{title:"Favorites"}),l&&t.jsx(F,{}),!o.length&&t.jsxs(Y,{children:[t.jsx(G,{src:z,alt:"Cocktail"}),t.jsx(q,{children:"You have not added any cocktails yet"})]}),o.length>0&&t.jsx(H,{children:t.jsx(V,{drinks:o})}),d&&t.jsx("div",{children:d}),j>1&&t.jsx(L,{currentPage:h,drinksPerPage:p,totalDrinks:n,onPageChange:b,pageNumbersToShow:w})]})})}export{tt as default};
