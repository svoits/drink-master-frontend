import{s as i,N as x,H as g,u as c,j as e,I as m,y as f,r as s,J as u,C as w,a as v}from"./index-8fbdc1ea.js";import{s as b}from"./drinks-selectors-89e130f8.js";import{D as j}from"./stub-5a3fe548.js";import{C as y}from"./hero-img-desc-2x-e8906f30.js";import{P as k}from"./PageTitle-8b1ee6ee.js";const D=i.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,z=i.img`
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
`,F=i.h3`
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
`,S=i.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,C=i.p`
  height: 74px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.38;
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    height: 90px;
  }
`,I=i.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`;i(x)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const T=i(x)`
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
`,a=i(g)`
  fill: ${({theme:t})=>t.mainText};
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,$=i.button`
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

  ${a} {
    color: #f3f3f3; /* Default color */
  }

  &:hover ${a}, &:active ${a} {
    color: #161f37; /* Color on hover or active state */
  }
`;function A({drink:t}){const n=c(),{_id:o,drink:r,alcoholic:d,drinkThumb:p,description:l}=t,h=()=>{n(m(o))};return e.jsxs(D,{children:[e.jsx(z,{src:p||j,alt:r}),e.jsx(S,{children:r}),e.jsx(F,{children:d?"Alcoholic":"NonAlcoholic"}),e.jsx(C,{children:l}),e.jsxs(I,{children:[e.jsx(T,{to:`/drinks/${o}`,children:"See More"}),e.jsxs($,{onClick:h,children:[" ",e.jsx(a,{})]})]})]})}const E=i.ul`
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
`;function L({drinks:t}){return e.jsx(E,{children:Array.isArray(t)&&t.map(n=>e.jsx(A,{drink:n},n._id))})}const M=i.div`
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
`;i.h1`
  margin-top: 160px;
  margin-bottom: 62px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.mainText};
`;i.div`
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
`;const P=i.div`
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
`,N=i.p`
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
`,R=i.img`
  width: 198px;
  height: 247px;

  @media screen and (min-width: 768px) {
    width: 261px;
    height: 326px;
  }
`;function Y(){const t=c(),n=f(b),[o,r,d]=s.useState("");return s.useEffect(()=>{t(u()).catch(p=>{console.error(p),r("Something went wrong please try later.")})},[t]),e.jsx(w,{children:e.jsxs(M,{children:[e.jsx(k,{title:"Favorite"}),d&&e.jsx(v,{}),n.length===0&&e.jsxs(P,{children:[e.jsx(R,{src:y,alt:"Cocktail"}),e.jsx(N,{children:"You have not added any cocktails yet"})]}),n.length>0&&e.jsx("div",{children:e.jsx(L,{drinks:n})}),o&&e.jsx("div",{children:o})]})})}export{Y as default};
