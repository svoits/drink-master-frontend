import{b as i,N as h,a as m,r as g,g as o,j as e,L as u,e as k}from"./index-b3df9a6b.js";import{u as w}from"./useDrink-fb7920b3.js";import{P as f}from"./PageTitle-b4ded667.js";import"./drinks-selectors-4d719f03.js";const j=i.ul`
  display: grid;
  grid-template-columns: repeat(1, 335px);
  justify-content: center;
  grid-row-gap: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 342px);
    grid-gap: 80px 20px;
  }

  @media screen and (min-width: 1440px){
    grid-template-columns: repeat(3, 400px);
  }
`,b=i.li`
  max-width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    height: auto;
  }
`,D=i.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,F=i.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,L=i.span`
  font-size: 14px;
  color: #F3F3F380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,v=i.p`
  font-size: 14px;
  line-height: 18px;
  
  margin: 24px 0;
  white-space: normal;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`,y=i.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`,z=i(h)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;
`,E=i.button`
  width: 100%;
  padding: 11px 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50px;
  background-color: #161F37;
  color: #F3F3F3;
  border: none;
`,P=()=>{const r=m(),{isLoading:d,drinks:t,error:s}=w();g.useEffect(()=>{r(o())},[r]);const p=n=>{r(k(n)).then(()=>{r(o())})};return e.jsx(e.Fragment,{children:e.jsxs(j,{children:[d&&e.jsx(u,{}),s&&e.jsxs("p",{children:[" ",s," "]}),t.drinks?t.drinks.map(({_id:n,drinkThumb:a,drink:x,category:c,description:l})=>e.jsxs(b,{children:[e.jsx(D,{src:a}),e.jsxs(F,{children:[" ",x," "]}),e.jsxs(L,{children:[" ",c," "]}),e.jsxs(v,{children:[" ",l," "]}),e.jsxs(y,{children:[e.jsx(z,{to:`/drink/${n}`,children:"See more"}),e.jsx(E,{onClick:()=>p(n),children:"x"})]})]},n)):e.jsx("p",{children:"You have rached the end of your Drink List, try to set more own drinks..."})]})})},I=i.div` 
  width: 335px; 
  margin: 0 auto;

  @media screen and (min-width: 768px){
    width: calc((342px * 2) + 20px);
  }

  @media screen and (min-width: 1440px){
    width: calc((400px * 3) + 40px);
  }
`;function A(){return e.jsxs(I,{children:[e.jsx(f,{title:"My Drinks"}),e.jsx(P,{})]})}export{A as default};
