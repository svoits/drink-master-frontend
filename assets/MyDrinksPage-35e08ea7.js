import{s as i,t as a,N as b,W as D,c as m,j as t,a6 as j,u as y,a as P,r as x,a7 as v,L as C,C as L}from"./index-208a6d6a.js";import{P as I}from"./PageTitle-563d2414.js";import{P as z}from"./Paginator-006dfa93.js";import{C as M}from"./hero-img-desc-2x-e8906f30.js";import{D as $}from"./stub-256c6b64.js";const E=i.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,T=i.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`,N=i.div`
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
`,R=i.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,S=i.img`
  width: 100%;
  object-fit: contain;
`,A=i.ul`
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
`,O=i.li`
  margin-left: auto;
  margin-right: auto;
`,B=i.img`
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
`,G=i.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,K=i.span`
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
`,W=i.p`
  height: 75px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 18px;
  margin-bottom: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.38;
    margin-top: 24px;
    margin-bottom: 24px;
    -webkit-line-clamp: 5;
  }

  @media screen and (min-width: 1440px) {
    height: 90px;
    -webkit-line-clamp: 4;
  }
`,Y=i.div`
  display: flex;
  column-gap: 8px;
`,F=i(b)`
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
`,q=i.button`
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
  }y
`,H=i(D)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,J=({drinks:s})=>{const p=m(),n=e=>{p(j(e))};return t.jsx(A,{children:s.map(({_id:e,drinkThumb:o,drink:d,category:l,description:r})=>t.jsxs(O,{children:[t.jsx(B,{src:o!==""?o:$,alt:`${d}`}),t.jsx(G,{children:d}),t.jsx(K,{children:l}),t.jsx(W,{children:r}),t.jsxs(Y,{children:[t.jsx(F,{to:`/drinks/${e}`,children:"See more"}),t.jsx(q,{onClick:()=>n(e),children:t.jsx(H,{})})]})]},e))})};function _(){const s=m(),{total:p,drinks:n}=y(),{width:e}=P(),[o,d]=x.useState(""),[l,r]=x.useState(!0),[h,f]=x.useState(1),w=e<768?5:8,c=6,u=g=>{f(g)},k=Math.ceil(p/c);return x.useEffect(()=>{r(!0),s(v({page:h,limit:c})).then(()=>r(!1)).catch(g=>{console.error(g),d("Something went wrong, please try later."),r(!1)})},[h,s,c]),l?t.jsx(C,{}):t.jsx(E,{children:t.jsxs(L,{children:[t.jsx(I,{title:"My Drinks"}),!n.length&&t.jsxs(N,{children:[t.jsx(S,{src:M,alt:"Cocktail"}),t.jsx(R,{children:"You haven't added any own cocktails yet"})]}),n.length>0&&t.jsx(T,{children:t.jsx(J,{drinks:n})}),o&&t.jsx("p",{children:o}),k>1&&t.jsx(z,{currentPage:h,drinksPerPage:c,totalDrinks:p,onPageChange:u,pageNumbersToShow:w})]})})}export{_ as default};
