import{s as i,t as r,N as D,U as j,a as l,j as t,a3 as b,r as g,a4 as P,L as y,C as v}from"./index-a0f7dbc8.js";import{C as m}from"./hero-img-desc-2x-e8906f30.js";import{P as C}from"./PageTitle-7ee38cc5.js";import{P as L}from"./Paginator-a3ba9909.js";import{u as z}from"./useDrink-57a74ffb.js";import"./drinks-selectors-db0f3074.js";const I=i.ul`
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
`,M=i.li`
  margin-left: auto;
  margin-right: auto;
`,E=i.img`
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
`,T=i.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,$=i.span`
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
`,N=i.p`
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
`,S=i.div`
  display: flex;
  column-gap: 8px;
`,R=i(D)`
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
`,A=i.button`
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
  }y
`,O=i(j)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,B=({drinks:s})=>{const e=l(),a=n=>{e(b(n))};return t.jsx(I,{children:s.map(({_id:n,drinkThumb:p,drink:d,category:o,description:c})=>t.jsxs(M,{children:[t.jsx(E,{src:p!==""?p:m,alt:`${d}`}),t.jsx(T,{children:d}),t.jsx($,{children:o}),t.jsx(N,{children:c}),t.jsxs(S,{children:[t.jsx(R,{to:`/drinks/${n}`,children:"See more"}),t.jsx(A,{onClick:()=>a(n),children:t.jsx(O,{})})]})]},n))})},G=i.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,K=i.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`,Y=i.div`
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
`,F=i.p`
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
`,U=i.img`
  width: 100%;
`;function X(){const s=l(),{total:e,drinks:a}=z(),[n,p]=g.useState(""),[d,o]=g.useState(!0),[c,f]=g.useState(1),u=5,x=6,w=h=>{f(h)},k=Math.ceil(e/x);return g.useEffect(()=>{o(!0),s(P({page:c,limit:x})).then(()=>o(!1)).catch(h=>{console.error(h),p("Something went wrong, please try later."),o(!1)})},[c,s,x]),d?t.jsx(y,{}):t.jsx(G,{children:t.jsxs(v,{children:[t.jsx(C,{title:"My Drinks"}),e===0&&t.jsxs(Y,{children:[t.jsx(U,{src:m,alt:"Cocktail"}),t.jsx(F,{children:"You have no own drinks, try to set more own drinks..."})]}),a.length>0&&t.jsx(K,{children:t.jsx(B,{drinks:a})}),n&&t.jsx("p",{children:n}),k>1&&t.jsx(L,{drinksPerPage:x,totalDrinks:e,onPageChange:w,pageNumbersToShow:u})]})})}export{X as default};
