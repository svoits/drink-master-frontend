import{s as i,N as m,r as s,u as g,U as a,j as e,a as u,V as w,P as k}from"./index-f361c452.js";import{u as f}from"./useDrink-14b6bec2.js";import"./drinks-selectors-89e130f8.js";const j=i.ul`
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
`,D=i.li`
  max-width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    height: auto;
  }
`,b=i.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,v=i.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,F=i.span`
  font-size: 14px;
  color: #F3F3F380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,y=i.p`
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
`,L=i.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`,z=i(m)`
  padding: 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;
  text-align: center;
`,E=i.button`
  width: 100%;
  padding: 11px 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50px;
  background-color: #161F37;
  color: #F3F3F3;
  border: none;
`,C=n=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:22,fill:"none",...n},s.createElement("path",{stroke:"#F3F3F3",d:"M14 5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C12.48 1 11.92 1 10.8 1H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 2.52 6 3.08 6 4.2V5m2 5.5v5m4-5v5M1 5h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C14.72 21 13.88 21 12.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V5"})),I=()=>{const n=g(),{isLoading:d,drinks:r,error:o}=f();s.useEffect(()=>{n(a())},[n]);const p=t=>{n(w(t)).then(()=>{n(a())})};return e.jsxs(j,{children:[d?e.jsx(u,{}):r.length>0?r.map(({_id:t,drinkThumb:c,drink:x,category:l,description:h})=>e.jsxs(D,{children:[e.jsx(b,{src:c}),e.jsxs(v,{children:[" ",x," "]}),e.jsxs(F,{children:[" ",l," "]}),e.jsxs(y,{children:[" ",h," "]}),e.jsxs(L,{children:[e.jsx(z,{to:`/drinks/${t}`,children:"See more"}),e.jsx(E,{onClick:()=>p(t),children:e.jsx(C,{width:"18",height:"22"})})]})]},t)):r.length===0?e.jsx("p",{children:"You have no own drinks left or reached the end of your Drink List, try to set more own drinks..."}):null,o&&e.jsx("p",{children:o})]})},M=i.div` 
  width: 335px; 
  margin: 0 auto;

  @media screen and (min-width: 768px){
    width: calc((342px * 2) + 20px);
  }

  @media screen and (min-width: 1440px){
    width: calc((400px * 3) + 40px);
  }
`;function T(){return e.jsxs(M,{children:[e.jsx(k,{title:"My Drinks"}),e.jsx(I,{})]})}export{T as default};
