import{s as t,W as v,X as y,u as j,j as e,Y as P,r as h,Z as C,$ as D,e as S,a0 as z,C as F,a as I}from"./index-b05abc74.js";import{a as M}from"./drinks-selectors-db0f3074.js";import{D as $}from"./stub-7073bc98.js";import{C as T}from"./hero-img-desc-2x-e8906f30.js";import{P as A}from"./PageTitle-05bb034d.js";const L=t.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,N=t.img`
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
`,E=t.h3`
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
`,R=t.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,B=t.p`
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
`,W=t.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`;t(v)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const Y=t(v)`
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
`,g=t(y)`
  fill: ${({theme:n})=>n.mainText};
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

  ${g} {
    color: #f3f3f3; /* Default color */
  }

  &:hover ${g}, &:active ${g} {
    color: #161f37; /* Color on hover or active state */
  }
`;function O({drink:n}){const o=j(),{_id:s,drink:d,alcoholic:a,drinkThumb:p,description:c}=n,r=()=>{o(P(s))};return e.jsxs(L,{children:[e.jsx(N,{src:p||$,alt:d}),e.jsx(R,{children:d}),e.jsx(E,{children:a?"Alcoholic":"NonAlcoholic"}),e.jsx(B,{children:c}),e.jsxs(W,{children:[e.jsx(Y,{to:`/drinks/${s}`,children:"See More"}),e.jsxs(_,{onClick:r,children:[" ",e.jsx(g,{})]})]})]})}const V=t.ul`
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
`;function X({drinks:n}){return e.jsx(V,{children:Array.isArray(n)&&n.map(o=>e.jsx(O,{drink:o},o._id))})}const Z=t.div`
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
  color: ${({theme:n})=>n.mainText};
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
`;const q=t.div`
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
`,G=t.p`
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
`,H=t.img`
  width: 198px;
  height: 247px;

  @media screen and (min-width: 768px) {
    width: 261px;
    height: 326px;
  }
`,J=t.div`
  padding: 14px 0;
  @media screen and (min-width: 768px) {
    padding: 14px 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    color: #f3f3f3;
    transition: background-color 0.5s;
    font-size: 12px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    font-style: normal;
    margin: 0 10px;
  }

  button.active {
    background-color: rgba(64, 112, 205, 0.5);
  }
`,b=t.button`
  width: 27px;
  height: 27px;
  fill: rgba(243, 243, 243, 0.3);
  background-color: transparent;
  border: none;
  margin: 0 10px;
`,K=({drinksPerPage:n,totalDrinks:o,onPageChange:s,pageNumbersToShow:d})=>{const[a,p]=h.useState(1),c=i=>{p(i),s(i)},r=[];for(let i=1;i<=Math.ceil(o/n);i++)r.push(i);const m=()=>{const i=Math.floor(d/2),x=r.indexOf(a),l=Math.max(0,x-i),f=Math.min(r.length-1,l+d-1);return r.slice(l,f+1)};return e.jsx(J,{children:e.jsxs("ul",{children:[e.jsx(b,{type:"button",onClick:()=>c(a-1),disabled:a===1,children:e.jsx(C,{size:20})}),m().map(i=>e.jsx("li",{children:e.jsx("button",{onClick:()=>c(i),className:i===a?"active":"",children:i})},i)),e.jsx(b,{onClick:()=>c(a+1),disabled:a===Math.ceil(o/n),children:e.jsx(D,{size:20})})]})})},Q=K;function oe(){const n=j(),o=S(M),[s,d]=h.useState(""),[a,p]=h.useState(!0),[c,r]=h.useState(1),m=5,i=u=>{r(u)};h.useEffect(()=>{p(!0),n(z()).then(()=>p(!1)).catch(u=>{console.error(u),d("Something went wrong, please try later."),p(!1)})},[n]);const x=o.length,l=9,f=Math.ceil(x/l),w=(c-1)*l,k=Math.min(w+l,x);return e.jsxs(F,{children:[e.jsxs(Z,{children:[e.jsx(A,{title:"Favorite"}),a&&e.jsx(I,{}),o.length===0&&e.jsxs(q,{children:[e.jsx(H,{src:T,alt:"Cocktail"}),e.jsx(G,{children:"You have not added any cocktails yet"})]}),o.length>0&&e.jsx("div",{children:e.jsx(X,{drinks:o.slice(w,k)})}),s&&e.jsx("div",{children:s})]}),f>1&&e.jsx(Q,{drinksPerPage:l,totalDrinks:x,onPageChange:i,pageNumbersToShow:m})]})}export{oe as default};
