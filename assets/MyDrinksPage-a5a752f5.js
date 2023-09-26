import{b as e,N as o,a as p,u as d,j as i,r as a}from"./index-1a7ac950.js";import{a as x}from"./drinks-selectors-571ed20b.js";import{P as c}from"./PageTitle-e43efe82.js";const l=e.ul`
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
`,m=e.li`
  max-width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    height: auto;
  }
`,h=e.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,g=e.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,u=e.span`
  font-size: 14px;
  color: #F3F3F380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

`,w=e.p`
  font-size: 14px;
  line-height: 18px;
  
  margin: 24px 0; /* Забезпечуємо відсутність внутрішніх відступів */
  white-space: normal; /* Забезпечуємо відображення кількох рядків тексту */
  -webkit-line-clamp: 4; /* Встановлюємо максимальну кількість видимих рядків */
  -webkit-box-orient: vertical;
  display: -webkit-box;
  text-overflow: ellipsis; /* Вставляємо трьохкрапку, якщо текст не вміщується */
  overflow: hidden;
  font-size: 14px;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`,b=e.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`,k=e(o)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;
`,D=e.button`
  width: 100%;
  padding: 11px 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 40px;
  background-color: #161F37;
  color: #F3F3F3;
  border: none;
`,f=()=>{const r=p(),{drinks:t,isLoading:F,error:v}=d(x),s=n=>{r(a(n))};return i.jsx(i.Fragment,{children:t.length>0&&i.jsx(l,{children:t.map(n=>i.jsxs(m,{children:[i.jsx(h,{src:n.drinkThumb}),i.jsxs(g,{children:[" ",n.drink," "]}),i.jsxs(u,{children:[" ",n.category," "]}),i.jsxs(w,{children:[" ",n.description," "]}),i.jsxs(b,{children:[i.jsx(k,{to:`/drink/${n._id}`,children:"See more"}),i.jsx(D,{onClick:()=>s(n._id),children:"Del"})]})]},n._id))})})},j=e.div` 
  width: 335px; 
  margin: 0 auto;

  @media screen and (min-width: 768px){
    width: calc((342px * 2) + 20px);
  }

  @media screen and (min-width: 1440px){
    width: calc((400px * 3) + 40px);
  }
`;function P(){return i.jsxs(j,{children:[i.jsx(c,{title:"My Drinks"}),i.jsx(f,{})]})}export{P as default};
