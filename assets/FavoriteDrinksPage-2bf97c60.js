import{s as t,N as f,$ as k,u,j as e,a0 as y,h as D,r as d,a1 as P,C as S,L as z}from"./index-9b1d0686.js";import{a as C}from"./drinks-selectors-db0f3074.js";import{D as F}from"./stub-024d55e7.js";import{C as I}from"./hero-img-desc-2x-e8906f30.js";import{P as T}from"./PageTitle-5511ed47.js";import{P as $}from"./Paginator-f7954d69.js";const L=t.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,M=t.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
  background:
    linear-gradient(
      180deg,
      rgba(10, 10, 17, 0.02) 51.18%,
      rgba(10, 10, 17, 0.77) 97.66%
    ),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
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
`,E=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,N=t.p`
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
`,R=t.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`;t(f)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const B=t(f)`
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
  //   font-size: 14px;
  //   font-weight: 600;
  //   line-height: calc(18 / 14);
  //   text-align: center;
  padding: 14px 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  transition:
    background-color 400ms ease,
    border-color 400ms ease,
    color 400ms ease;

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,p=t(k)`
  fill: ${({theme:i})=>i.mainText};
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,_=t.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  background-color: #161f37;
  transition: background-color 0.3s ease;
  margin-left: 8px;

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }

  &:hover,
  &:active {
    background-color: #f3f3f3;
  }

  ${p} {
    color: #f3f3f3; /* Default color */
  }

  &:hover ${p}, &:active ${p} {
    color: #161f37; /* Color on hover or active state */
  }
`;function W({drink:i}){const n=u(),{_id:o,drink:a,alcoholic:c,drinkThumb:r,description:x}=i,l=()=>{n(y(o))};return e.jsxs(L,{children:[e.jsx(M,{src:r||F,alt:a}),e.jsx(E,{children:a}),e.jsx(A,{children:c?"Alcoholic":"NonAlcoholic"}),e.jsx(N,{children:x}),e.jsxs(R,{children:[e.jsx(B,{to:`/drinks/${o}`,children:"See More"}),e.jsxs(_,{onClick:l,children:[" ",e.jsx(p,{})]})]})]})}const Y=t.ul`
  display: grid;
  grid-row-gap: 40px;
  list-style: none;
  margin-top: 40px;

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
`;function q({drinks:i}){return e.jsx(Y,{children:Array.isArray(i)&&i.map(n=>e.jsx(W,{drink:n},n._id))})}const G=t.div`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 158px;
    padding-bottom: 140px;
  }
`;t.h1`
  margin-top: 160px;
  margin-bottom: 62px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:i})=>i.mainText};
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
`;const H=t.div`
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
`,J=t.p`
  width: 205px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  margin-top: 32px;
  text-align: center;

  @media screen and (min-width: 768px) {
    width: 236px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,K=t.img`
  width: 198px;
  height: 247px;

  @media screen and (min-width: 768px) {
    width: 261px;
    height: 326px;
  }
`;function ee(){const i=u(),n=D(C),[o,a]=d.useState(""),[c,r]=d.useState(!0),[x,l]=d.useState(1),w=5,v=g=>{l(g)};d.useEffect(()=>{r(!0),i(P()).then(()=>r(!1)).catch(g=>{console.error(g),a("Something went wrong, please try later."),r(!1)})},[i]);const h=n.length,s=9,b=Math.ceil(h/s),m=(x-1)*s,j=Math.min(m+s,h);return e.jsxs(S,{children:[e.jsxs(G,{children:[e.jsx(T,{title:"Favorite"}),c&&e.jsx(z,{}),n.length===0&&e.jsxs(H,{children:[e.jsx(K,{src:I,alt:"Cocktail"}),e.jsx(J,{children:"You have not added any cocktails yet"})]}),n.length>0&&e.jsx("div",{children:e.jsx(q,{drinks:n.slice(m,j)})}),o&&e.jsx("div",{children:o})]}),b>1&&e.jsx($,{drinksPerPage:s,totalDrinks:h,onPageChange:v,pageNumbersToShow:w})]})}export{ee as default};
