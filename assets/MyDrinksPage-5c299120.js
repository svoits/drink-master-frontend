import{r as o,s as e,t as r,N as b,u as l,j as t,a3 as j,a4 as D,L as v,C as P}from"./index-4f01b5d2.js";import{C as y}from"./hero-img-desc-2x-e8906f30.js";import{P as C}from"./PageTitle-25ead4e9.js";import{P as L}from"./Paginator-955021c5.js";import{u as M}from"./useDrink-2a253bc7.js";import"./drinks-selectors-db0f3074.js";const $=i=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:22,fill:"none",...i},o.createElement("path",{d:"M14 5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C12.48 1 11.92 1 10.8 1H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 2.52 6 3.08 6 4.2V5m2 5.5v5m4-5v5M1 5h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C14.72 21 13.88 21 12.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V5"})),E=e.ul`
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
`,I=e.li`
  margin-left: auto;
  margin-right: auto;
`,z=e.img`
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
`,S=e.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,N=e.span`
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
`,R=e.p`
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
`,T=e.div`
  display: flex;
  column-gap: 8px;
`,A=e(b)`
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
`,m=e.button`
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
  }
`,O=e($)`
  width: 24px;
  height: 24px;
  stroke: #f3f3f3;

  transition:
    stroke ${r},

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
  
   ${m}:hover &,
   ${m}:focus & {
    stroke: #161f37;
  }
`,B=({drinks:i})=>{const s=l(),p=n=>{s(j(n))};return t.jsx(E,{children:i.map(({_id:n,drinkThumb:d,drink:c,category:a,description:x})=>t.jsxs(I,{children:[t.jsx(z,{src:d!==""?d:y,alt:`${c}`}),t.jsx(S,{children:c}),t.jsx(N,{children:a}),t.jsx(R,{children:x}),t.jsxs(T,{children:[t.jsx(A,{to:`/drinks/${n}`,children:"See more"}),t.jsx(m,{onClick:()=>p(n),children:t.jsx(O,{})})]})]},n))})},G=e.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`,H=e.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function J(){const i=l(),{total:s,drinks:p}=M(),[n,d]=o.useState(""),[c,a]=o.useState(!0),[x,f]=o.useState(1),u=5,h=6,w=g=>{f(g)},k=Math.ceil(s/h);return o.useEffect(()=>{a(!0),i(D({page:x,limit:h})).then(()=>a(!1)).catch(g=>{console.error(g),d("Something went wrong, please try later."),a(!1)})},[x,i,h]),c?t.jsx(v,{}):t.jsx(G,{children:t.jsxs(P,{children:[t.jsx(C,{title:"My Drinks"}),s===0&&t.jsx("p",{children:"You have no own drinks, try to set more own drinks..."}),p.length>0&&t.jsx(H,{children:t.jsx(B,{drinks:p})}),n&&t.jsx("p",{children:n}),k>1&&t.jsx(L,{drinksPerPage:h,totalDrinks:s,onPageChange:w,pageNumbersToShow:u})]})})}export{J as default};
