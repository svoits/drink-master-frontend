import{s as n,N as o,u as p,l as d,j as e,D as a}from"./index-ce4012c0.js";import{a as x}from"./drinks-selectors-571ed20b.js";const c=n.ul`
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
`,l=n.li`
  max-width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    height: auto;
  }
`,m=n.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,h=n.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,g=n.span`
  font-size: 14px;
  color: #F3F3F380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

`,u=n.p`
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
`,b=n.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`,w=n(o)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;
`,D=n.button`
  width: 100%;
  padding: 11px 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 40px;
  background-color: #161F37;
  color: #F3F3F3;
  border: none;
`,z=()=>{const r=p(),{drinks:t,isLoading:k,error:f}=d(x),s=i=>{r(a(i))};return e.jsx(e.Fragment,{children:t.length>0&&e.jsx(c,{children:t.map(i=>e.jsxs(l,{children:[e.jsx(m,{src:i.drinkThumb}),e.jsxs(h,{children:[" ",i.drink," "]}),e.jsxs(g,{children:[" ",i.category," "]}),e.jsxs(u,{children:[" ",i.description," "]}),e.jsxs(b,{children:[e.jsx(w,{to:`/drink/${i._id}`,children:"See more"}),e.jsx(D,{onClick:()=>s(i._id),children:"Del"})]})]},i._id))})})};export{z as D};
