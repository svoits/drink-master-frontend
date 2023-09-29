import{s as e,t as a,N as f,$ as k,u,j as t,a0 as y,h as D,r as p,a1 as P,C as S,L as F}from"./index-b978d3bf.js";import{a as I}from"./drinks-selectors-db0f3074.js";import{D as C}from"./stub-1db631af.js";import{C as z}from"./hero-img-desc-2x-e8906f30.js";import{P as L}from"./PageTitle-88da2c4b.js";import{P as $}from"./Paginator-71b1acbf.js";const A=e.li`
  margin-left: auto;
  margin-right: auto;
`,M=e.img`
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
`,N=e.p`
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
`,R=e.div`
  display: flex;
  column-gap: 8px;
`;e(f)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const B=e(f)`
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
`,_=e(k)`
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
`;function Y({drink:n}){const i=u(),{_id:o,drink:s,alcoholic:c,drinkThumb:r,description:x}=n,l=()=>{i(y(o))};return t.jsxs(A,{children:[t.jsx(M,{src:r||C,alt:s}),t.jsx(E,{children:s}),t.jsx(T,{children:c?"Alcoholic":"NonAlcoholic"}),t.jsx(N,{children:x}),t.jsxs(R,{children:[t.jsx(B,{to:`/drinks/${o}`,children:"See More"}),t.jsx(W,{onClick:l,children:t.jsx(_,{})})]})]})}const q=e.ul`
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
`;function G({drinks:n}){return t.jsx(q,{children:Array.isArray(n)&&n.map(i=>t.jsx(Y,{drink:i},i._id))})}const H=e.section`
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
`;const J=e.div`
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
`,K=e.p`
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
`,O=e.img`
  width: 100%;
`,Q=e.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function it(){const n=u(),i=D(I),[o,s]=p.useState(""),[c,r]=p.useState(!0),[x,l]=p.useState(1),w=5,b=g=>{l(g)};p.useEffect(()=>{r(!0),n(P()).then(()=>r(!1)).catch(g=>{console.error(g),s("Something went wrong, please try later."),r(!1)})},[n]);const h=i.length,d=9,j=Math.ceil(h/d),m=(x-1)*d,v=Math.min(m+d,h);return t.jsx(H,{children:t.jsxs(S,{children:[t.jsx(L,{title:"Favorite"}),c&&t.jsx(F,{}),i.length===0&&t.jsxs(J,{children:[t.jsx(O,{src:z,alt:"Cocktail"}),t.jsx(K,{children:"You have not added any cocktails yet"})]}),i.length>0&&t.jsx(Q,{children:t.jsx(G,{drinks:i.slice(m,v)})}),o&&t.jsx("div",{children:o}),j>1&&t.jsx($,{drinksPerPage:d,totalDrinks:h,onPageChange:b,pageNumbersToShow:w})]})})}export{it as default};
