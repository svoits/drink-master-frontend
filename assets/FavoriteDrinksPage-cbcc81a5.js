import{s as i,N as c,K as g,u as l,j as e,M as m,A as f,r as p,O as u,C as w,o as v}from"./index-0f03dfb0.js";import{P as b}from"./PageTitle-48dc8586.js";import{s as j}from"./drinks-selectors-89e130f8.js";import{r as k}from"./recipe-default-desktop-81da6c38.js";const y=i.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,D=i.img`
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
`,z=i.p`
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
`,A=i.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`;i(c)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const T=i(c)`
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
`,E=i.button`
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
`;function L({drink:t}){const r=l(),{_id:o,drink:n,alcoholic:s,drinkThumb:d,description:x}=t,h=()=>{r(m(o))};return e.jsxs(y,{children:[e.jsx(D,{src:d||k,alt:n}),e.jsx(S,{children:n}),e.jsx(F,{children:s?"Alcoholic":"NonAlcoholic"}),e.jsx(z,{children:x}),e.jsxs(A,{children:[e.jsx(T,{to:`/drinks/${o}`,children:"See More"}),e.jsxs(E,{onClick:h,children:[" ",e.jsx(a,{})]})]})]})}const M=i.ul`
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
`;function P({drinks:t}){return e.jsx(M,{children:Array.isArray(t)&&t.map(r=>e.jsx(L,{drink:r},r._id))})}function R(){const t=l(),r=f(j),[o,n,s]=p.useState("");return p.useEffect(()=>{t(u()).catch(d=>{console.error(d),n("Something went wrong please try later.")})},[t]),e.jsxs(w,{children:[e.jsx(b,{title:"Favorite"}),s&&e.jsx(v,{}),o&&e.jsx("div",{children:o}),e.jsx("div",{children:r.length!==0?e.jsx(P,{drinks:r}):e.jsx("p",{children:"You have not added any cocktails yet"})})]})}export{R as default};
