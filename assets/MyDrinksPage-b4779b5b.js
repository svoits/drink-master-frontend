import{s as e,N as l,u as h,r as m,H as s,j as i,p as g,I as u}from"./index-ebc0d42d.js";import{u as k}from"./useDrink-9899c9a8.js";import{P as w}from"./PageTitle-8cb0c415.js";import"./drinks-selectors-47583310.js";const f=e.ul`
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
`,D=e.li`
  max-width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    height: auto;
  }
`,b=e.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,j=e.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,F=e.span`
  font-size: 14px;
  color: #F3F3F380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,v=e.p`
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
`,y=e.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`,L=e(l)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;
`,z=e.button`
  width: 100%;
  padding: 11px 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50px;
  background-color: #161F37;
  color: #F3F3F3;
  border: none;
`,E=()=>{const r=h(),{isLoading:o,drinks:t,error:P}=k();m.useEffect(()=>{r(s())},[r]);const d=n=>{r(u(n)).then(()=>{r(s())})};return i.jsx(f,{children:o?i.jsx(g,{}):t.drinks&&t.drinks.length>0?t.drinks.map(({_id:n,drinkThumb:p,drink:a,category:x,description:c})=>i.jsxs(D,{children:[i.jsx(b,{src:p}),i.jsxs(j,{children:[" ",a," "]}),i.jsxs(F,{children:[" ",x," "]}),i.jsxs(v,{children:[" ",c," "]}),i.jsxs(y,{children:[i.jsx(L,{to:`/drinks/${n}`,children:"See more"}),i.jsx(z,{onClick:()=>d(n),children:"x"})]})]},n)):t.drinks!==null?i.jsx("p",{children:"You have no own drinks left or reached the end of your Drink List, try to set more own drinks..."}):null})},I=e.div` 
  width: 335px; 
  margin: 0 auto;

  @media screen and (min-width: 768px){
    width: calc((342px * 2) + 20px);
  }

  @media screen and (min-width: 1440px){
    width: calc((400px * 3) + 40px);
  }
`;function A(){return i.jsxs(I,{children:[i.jsx(w,{title:"My Drinks"}),i.jsx(E,{})]})}export{A as default};
