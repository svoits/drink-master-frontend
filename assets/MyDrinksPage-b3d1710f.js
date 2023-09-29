import{s as t,N as f,r as a,j as e,u as j,a7 as h,L as D,a8 as b}from"./index-a03da337.js";import{C as v}from"./hero-img-desc-2x-e8906f30.js";import{P}from"./PageTitle-edbc540c.js";import{P as F}from"./Paginator-638e6a7d.js";import{u as C}from"./useDrink-85de6f69.js";import"./drinks-selectors-db0f3074.js";const I=t.ul`
  display: grid;
  grid-template-columns: repeat(1, 335px);
  justify-content: center;
  grid-row-gap: 40px;
  padding-top: 40px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 342px);
    grid-gap: 80px 20px;
    padding-top: 60px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px){
    grid-template-columns: repeat(3, 400px);
    padding-top: 62px;
  }
`,L=t.li`
  max-width: 100%;
  height: auto;
  
  @media screen and (min-width: 768px) {
    height: auto;
  }
`,y=t.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`,z=t.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`,E=t.span`
  font-size: 14px;
  color: #F3F3F380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,M=t.p`
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
`,N=t.div`
  display: grid;
  grid-template-columns: 143px 46px;
  grid-column-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 160px 56px;
  }
`,R=t(f)`
  padding: 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161F37;
  color: #F3F3F3;
  text-align: center;
`,T=t.button`
  width: 100%;
  padding: 11px 0;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50px;
  background-color: #161F37;
  color: #F3F3F3;
  border: none;
`,S=n=>a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:22,fill:"none",...n},a.createElement("path",{stroke:"#F3F3F3",d:"M14 5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C12.48 1 11.92 1 10.8 1H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 2.52 6 3.08 6 4.2V5m2 5.5v5m4-5v5M1 5h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C14.72 21 13.88 21 12.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V5"})),A=({drinks:n,deleteDrink:d})=>e.jsx(I,{children:n.map(({_id:i,drinkThumb:r,drink:s,category:p,description:c})=>e.jsxs(L,{children:[e.jsx(y,{src:r!==""?r:v,alt:`${s}`}),e.jsx(z,{children:s}),e.jsx(E,{children:p}),e.jsx(M,{children:c}),e.jsxs(N,{children:[e.jsx(R,{to:`/drinks/${i}`,children:"See more"}),e.jsx(T,{onClick:()=>d(i),children:e.jsx(S,{width:"18",height:"22"})})]})]},i))}),O=t.div` 
  width: 335px; 
  margin: 0 auto;

  @media screen and (min-width: 768px){
    width: calc((342px * 2) + 20px);
  }

  @media screen and (min-width: 1440px){
    width: calc((400px * 3) + 40px);
  }
`;function Y(){const n=j(),{isLoading:d,drinks:i,error:r}=C(),[s,p]=a.useState(1),c=5,x=i.length,o=6,g=Math.ceil(x/o),m=(s-1)*o,u=Math.min(m+o,x);a.useEffect(()=>{n(h())},[n]);const w=l=>{n(b(l)).then(()=>{n(h())})},k=l=>{p(l)};return e.jsxs(O,{children:[e.jsx(P,{title:"My Drinks"}),d&&e.jsx(D,{}),r&&e.jsx("p",{children:r}),i.length>0?e.jsx(A,{drinks:i.slice(m,u),deleteDrink:w}):e.jsx("p",{children:"You have no own drinks left or reached the end of your Drink List, try to set more own drinks..."}),g>1&&e.jsx("div",{className:"paginator",children:e.jsx(F,{className:"paginator",drinksPerPage:o,totalDrinks:x,onPageChange:k,pageNumbersToShow:c})})]})}export{Y as default};
