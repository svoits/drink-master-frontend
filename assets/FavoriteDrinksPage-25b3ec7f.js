import{s as x,u as h,l as f,r as s,w as d,j as t,q as j}from"./index-7a2156fc.js";import{a as u}from"./drinks-selectors-571ed20b.js";import{D as k}from"./DrinksList-9425404e.js";import{C as D,S as P,P as v}from"./Pagination-1708864a.js";import"./setPrototypeOf-8d862a7d.js";const F=x.h1`
  margin-top: 160px;
  margin-bottom: 62px;
  font-family: Manrope;
  font-size: 64px;
  font-weight: 600;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:e})=>e.mainText};
`,w=()=>{const e=h(),{drinks:a,isLoading:r,error:o}=f(u);s.useEffect(()=>{e(d())},[e]);const[i,c]=s.useState(1),[p,g]=s.useState(0),l=12;g(Math.ceil(a.length/l));const m=(S,n)=>{c(n),datapag.jump(n)};return t.jsxs(t.Fragment,{children:[t.jsx(F,{children:"Favorites"}),r&&!o&&t.jsx(j,{}),t.jsx(D,{children:t.jsxs(P,{spacing:2,children:[a.length>0&&t.jsx(k,{}),t.jsx(v,{color:"primary",count:p,page:i,onChange:m})]})})]})};export{w as FavoriteDrinksPage};
