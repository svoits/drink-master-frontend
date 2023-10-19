import{s as t,t as s,N as k,$ as j,c as m,j as e,a9 as D,u as v,a as y,r as l,aa as P,L as $,C}from"./index-059d999e.js";import{P as L}from"./PageTitle-68aedede.js";import{P as I}from"./Paginator-b0711a5c.js";import{C as z}from"./hero-img-desc-2x-e8906f30.js";import{D as M}from"./stub-0063ae73.js";const E=t.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,T=t.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`,B=t.div`
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
`,N=t.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,R=t.img`
  width: 100%;
  object-fit: contain;
`,S=t.ul`
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
`,A=t.li`
  margin-left: auto;
  margin-right: auto;
`,O=t.img`
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
`,G=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,H=t.span`
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
`,K=t.p`
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
`,Y=t.div`
  display: flex;
  column-gap: 8px;
`,F=t(k)`
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
    border-color: ${({theme:i})=>i.basicBtnBorderHover};
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
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
  border: 1px solid transparent;
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
    border-color: ${({theme:i})=>i.basicBtnBorderHover};
  }
`,q=t(j)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,J=({drinks:i})=>{const d=m(),o=n=>{d(D(n))};return e.jsx(S,{children:i.map(({_id:n,drinkThumb:r,drink:p,category:x,description:a})=>e.jsxs(A,{children:[e.jsx(O,{src:r||M,alt:`${p}`,placeholder:r?"false":"true"}),e.jsx(G,{children:p}),e.jsx(H,{children:x}),e.jsx(K,{children:a}),e.jsxs(Y,{children:[e.jsx(F,{to:`/drinks/${n}`,children:"See more"}),e.jsx(W,{onClick:()=>o(n),children:e.jsx(q,{})})]})]},n))})};function _(){const i=m(),{total:d,drinks:o}=v(),{width:n}=y(),[r,p]=l.useState(""),[x,a]=l.useState(!0),[h,f]=l.useState(1),u=n<768?5:8,c=6,w=g=>{f(g)},b=Math.ceil(d/c);return l.useEffect(()=>{a(!0),i(P({page:h,limit:c})).then(()=>a(!1)).catch(g=>{console.error(g),p("Something went wrong, please try later."),a(!1)})},[h,i,c]),x?e.jsx($,{}):e.jsx(E,{children:e.jsxs(C,{children:[e.jsx(L,{title:"My Drinks"}),!o.length&&e.jsxs(B,{children:[e.jsx(R,{src:z,alt:"Cocktail"}),e.jsx(N,{children:"You haven't added any own cocktails yet"})]}),o.length>0&&e.jsx(T,{children:e.jsx(J,{drinks:o})}),r&&e.jsx("p",{children:r}),b>1&&e.jsx(I,{currentPage:h,drinksPerPage:c,totalDrinks:d,onPageChange:w,pageNumbersToShow:u})]})})}export{_ as default};
