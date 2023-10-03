import{s as e,t as a,N as b,X as j,c as m,j as t,a6 as D,u as y,a as P,r as x,a7 as v,L as C,C as L}from"./index-6cd295ec.js";import{P as I}from"./PageTitle-60b9778c.js";import{P as z}from"./Paginator-8e6d0c39.js";import{C as M}from"./hero-img-desc-2x-e8906f30.js";import{D as $}from"./stub-e3cf52d6.js";const E=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,T=e.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`,N=e.div`
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
`,R=e.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,S=e.img`
  width: 100%;
  object-fit: contain;
`,A=e.ul`
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
`,O=e.li`
  margin-left: auto;
  margin-right: auto;
`,B=e.img`
  width: 100%;
  border-radius: 8px;
  height: 360px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 342px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,G=e.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,K=e.span`
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
`,Y=e.p`
  height: 73px;
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
`,F=e.div`
  display: flex;
  column-gap: 8px;
`,W=e(b)`
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
`,X=e.button`
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
`,q=e(j)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,H=({drinks:s})=>{const p=m(),n=i=>{p(D(i))};return t.jsx(A,{children:s.map(({_id:i,drinkThumb:o,drink:d,category:l,description:r})=>t.jsxs(O,{children:[t.jsx(B,{src:o!==""?o:$,alt:`${d}`}),t.jsx(G,{children:d}),t.jsx(K,{children:l}),t.jsx(Y,{children:r}),t.jsxs(F,{children:[t.jsx(W,{to:`/drinks/${i}`,children:"See more"}),t.jsx(X,{onClick:()=>n(i),children:t.jsx(q,{})})]})]},i))})};function _(){const s=m(),{total:p,drinks:n}=y(),{width:i}=P(),[o,d]=x.useState(""),[l,r]=x.useState(!0),[h,f]=x.useState(1),w=i<768?5:8,c=6,u=g=>{f(g)},k=Math.ceil(p/c);return x.useEffect(()=>{r(!0),s(v({page:h,limit:c})).then(()=>r(!1)).catch(g=>{console.error(g),d("Something went wrong, please try later."),r(!1)})},[h,s,c]),l?t.jsx(C,{}):t.jsx(E,{children:t.jsxs(L,{children:[t.jsx(I,{title:"My Drinks"}),!n.length&&t.jsxs(N,{children:[t.jsx(S,{src:M,alt:"Cocktail"}),t.jsx(R,{children:"You haven't added any own cocktails yet"})]}),n.length>0&&t.jsx(T,{children:t.jsx(H,{drinks:n})}),o&&t.jsx("p",{children:o}),k>1&&t.jsx(z,{currentPage:h,drinksPerPage:c,totalDrinks:p,onPageChange:u,pageNumbersToShow:w})]})})}export{_ as default};
