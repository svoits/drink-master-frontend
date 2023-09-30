import{s as i,t as s,N as j,U as b,a as m,j as t,a3 as P,u as y,r as x,a4 as v,L as C,C as L}from"./index-32fefd10.js";import{C as f}from"./hero-img-desc-2x-e8906f30.js";import{P as z}from"./PageTitle-e9617e47.js";import{P as I}from"./Paginator-8e0d0294.js";import{u as M}from"./useDrink-31e998c6.js";import"./drinks-selectors-db0f3074.js";const E=i.ul`
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
`,T=i.li`
  margin-left: auto;
  margin-right: auto;
`,$=i.img`
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
`,N=i.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,R=i.span`
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
`,S=i.p`
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
`,A=i.div`
  display: flex;
  column-gap: 8px;
`,O=i(j)`
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
`,B=i.button`
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
  }y
`,G=i(b)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,K=({drinks:a})=>{const e=m(),p=n=>{e(P(n))};return t.jsx(E,{children:a.map(({_id:n,drinkThumb:o,drink:d,category:h,description:r})=>t.jsxs(T,{children:[t.jsx($,{src:o!==""?o:f,alt:`${d}`}),t.jsx(N,{children:d}),t.jsx(R,{children:h}),t.jsx(S,{children:r}),t.jsxs(A,{children:[t.jsx(O,{to:`/drinks/${n}`,children:"See more"}),t.jsx(B,{onClick:()=>p(n),children:t.jsx(G,{})})]})]},n))})},Y=i.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,F=i.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`,U=i.div`
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
`,W=i.p`
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
`,q=i.img`
  width: 100%;
`;function _(){const a=m(),{total:e,drinks:p}=M(),{width:n}=y(),[o,d]=x.useState(""),[h,r]=x.useState(!0),[l,u]=x.useState(1),w=n<768?5:8,c=6,k=g=>{u(g)},D=Math.ceil(e/c);return x.useEffect(()=>{r(!0),a(v({page:l,limit:c})).then(()=>r(!1)).catch(g=>{console.error(g),d("Something went wrong, please try later."),r(!1)})},[l,a,c]),h?t.jsx(C,{}):t.jsx(Y,{children:t.jsxs(L,{children:[t.jsx(z,{title:"My Drinks"}),e===0&&t.jsxs(U,{children:[t.jsx(q,{src:f,alt:"Cocktail"}),t.jsx(W,{children:"You have no own drinks, try to set more own drinks..."})]}),p.length>0&&t.jsx(F,{children:t.jsx(K,{drinks:p})}),o&&t.jsx("p",{children:o}),D>1&&t.jsx(I,{drinksPerPage:c,totalDrinks:e,onPageChange:k,pageNumbersToShow:w})]})})}export{_ as default};
