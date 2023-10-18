import{s as t,t as r,N as m,$ as v,c as f,j as e,a0 as j,u as y,a as D,r as l,a1 as P,C as $,L as S}from"./index-2035ede7.js";import{D as F}from"./stub-44ee8217.js";import{C}from"./hero-img-desc-2x-e8906f30.js";import{P as z}from"./PageTitle-6bd0b221.js";import{P as I}from"./Paginator-bcccaf38.js";const L=t.li`
  margin-left: auto;
  margin-right: auto;
`,B=t.img`
  width: 100%;
  border-radius: 8px;
  height: 360px;

  object-fit: ${({placeholder:i})=>i==="true"?"contain":"cover"};
  background-color: #161f37;
  padding: ${({placeholder:i})=>i==="true"?"28px":0};

  @media screen and (min-width: 768px) {
    width: 342px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,A=t.h3`
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
`,T=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,E=t.p`
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
`,M=t.div`
  display: flex;
  column-gap: 8px;
`;t(m)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const N=t(m)`
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
    border-color: ${({theme:i})=>i.basicBtnBorderHover};
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,R=t(v)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,H=t.button`
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
  border: 1px solid transparent;
  transition:
    background-color ${r},
    color ${r},
    border-color ${r};

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #161f37;
    border-color: ${({theme:i})=>i.basicBtnBorderHover};
  }
`;function _({drink:i}){const n=f(),{_id:o,drink:a,alcoholic:d,drinkThumb:p,description:x}=i,s=()=>{n(j(o))};return e.jsxs(L,{children:[e.jsx(B,{src:p||F,alt:a,placeholder:p?"false":"true"}),e.jsx(T,{children:a}),e.jsx(A,{children:d?"Alcoholic":"NonAlcoholic"}),e.jsx(E,{children:x}),e.jsxs(M,{children:[e.jsx(N,{to:`/drinks/${o}`,children:"See More"}),e.jsx(H,{onClick:s,children:e.jsx(R,{})})]})]})}const W=t.ul`
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
`;function Y({drinks:i}){return e.jsx(W,{children:Array.isArray(i)&&i.map(n=>e.jsx(_,{drink:n},n._id))})}const q=t.section`
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
`;const G=t.div`
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
`,J=t.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,K=t.img`
  width: 100%;
  object-fit: contain;
`,O=t.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function ee(){const i=f(),{total:n,favoriteDrinks:o}=y(),{width:a}=D(),[d,p]=l.useState(""),[x,s]=l.useState(!0),[h,u]=l.useState(1),w=a<768?5:8,c=a<1440?8:9,b=g=>{u(g)};l.useEffect(()=>{s(!0),i(P({page:h,limit:c})).unwrap().then(()=>s(!1)).catch(g=>{console.error(g),p("Something went wrong, please try later."),s(!1)})},[h,i,c]);const k=Math.ceil(n/c);return e.jsx(q,{children:e.jsxs($,{children:[e.jsx(z,{title:"Favorites"}),x&&e.jsx(S,{}),!o.length&&e.jsxs(G,{children:[e.jsx(K,{src:C,alt:"Cocktail"}),e.jsx(J,{children:"You have not added any cocktails yet"})]}),o.length>0&&e.jsx(O,{children:e.jsx(Y,{drinks:o})}),d&&e.jsx("div",{children:d}),k>1&&e.jsx(I,{currentPage:h,drinksPerPage:c,totalDrinks:n,onPageChange:b,pageNumbersToShow:w})]})})}export{ee as default};
