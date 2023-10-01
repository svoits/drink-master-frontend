import{s as e,j as t}from"./index-e7266b2e.js";const o=s=>s.drinks.isLoading,d=s=>s.drinks.mainPageDrinks,c=s=>s.drinks.drinks,k=s=>s.drinks.error,l=(s,n)=>s.drinks.drinks.find(i=>i._id===n),x=s=>s.drinks.favoriteDrinks,f=s=>s.drinks.total,r=e.h1`
  color: ${({theme:s})=>s.mainText};
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1875;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
  }
`;function h({title:s}){return t.jsx(r,{children:s})}export{h as P,x as a,l as b,o as c,d,k as e,f,c as s};
