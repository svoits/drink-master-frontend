import{s as i,t as s,N as m,P as k,a as f,j as t,Q as v,u as y,r as c,U as D,C as P,L as S}from"./index-807a6fb2.js";import{D as F}from"./stub-14c8272a.js";import{C}from"./hero-img-desc-2x-e8906f30.js";import{P as z}from"./PageTitle-1df7dafd.js";import{P as I}from"./Paginator-cc184fb2.js";import{u as L}from"./useDrink-d89d275f.js";const $=i.li`
  margin-left: auto;
  margin-right: auto;
`,A=i.img`
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
`,T=i.h3`
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
`,E=i.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,M=i.p`
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
`,N=i.div`
  display: flex;
  column-gap: 8px;
`;i(m)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const R=i(m)`
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
`,B=i(k)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,_=i.button`
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
`;function Q({drink:n}){const e=f(),{_id:o,drink:r,alcoholic:d,drinkThumb:x,description:l}=n,a=()=>{e(v(o))};return t.jsxs($,{children:[t.jsx(A,{src:x||F,alt:r}),t.jsx(E,{children:r}),t.jsx(T,{children:d?"Alcoholic":"NonAlcoholic"}),t.jsx(M,{children:l}),t.jsxs(N,{children:[t.jsx(R,{to:`/drinks/${o}`,children:"See More"}),t.jsx(_,{onClick:a,children:t.jsx(B,{})})]})]})}const U=i.ul`
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
`;function W({drinks:n}){return t.jsx(U,{children:Array.isArray(n)&&n.map(e=>t.jsx(Q,{drink:e},e._id))})}const Y=i.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`;i.div`
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
`;const q=i.div`
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
`,G=i.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,H=i.img`
  width: 100%;
  object-fit: contain;
`,J=i.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function it(){const n=f(),{total:e,favoriteDrinks:o}=L(),{width:r}=y(),[d,x]=c.useState(""),[l,a]=c.useState(!0),[h,u]=c.useState(1),w=r<768?5:8,p=r<1440?8:9,b=g=>{u(g)};c.useEffect(()=>{a(!0),n(D({page:h,limit:p})).then(()=>a(!1)).catch(g=>{console.error(g),x("Something went wrong, please try later."),a(!1)})},[h,n,p]);const j=Math.ceil(e/p);return t.jsx(Y,{children:t.jsxs(P,{children:[t.jsx(z,{title:"Favorites"}),l&&t.jsx(S,{}),e===0&&t.jsxs(q,{children:[t.jsx(H,{src:C,alt:"Cocktail"}),t.jsx(G,{children:"You have not added any cocktails yet"})]}),o.length>0&&t.jsx(J,{children:t.jsx(W,{drinks:o})}),d&&t.jsx("div",{children:d}),j>1&&t.jsx(I,{currentPage:h,drinksPerPage:p,totalDrinks:e,onPageChange:b,pageNumbersToShow:w})]})})}export{it as default};
