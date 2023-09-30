import{s as i,b as P,j as t,G as $,t as u,F as y,c as j,d as S,e as L,f as k,r as x,a as T,h as C,i as I,k as z,l as F,m as B,u as E,C as M,L as Q}from"./index-dbf27f9f.js";import{P as G}from"./Paginator-7fcd6fe9.js";import{u as D}from"./useDrink-9709f9e3.js";import{D as V}from"./stub-16f7e0b5.js";import{S as A}from"./react-select.esm-9de4cc36.js";import{s as N,a as R,b as W}from"./selectors-a7d85374.js";import{P as q}from"./PageTitle-44de75c8.js";import"./drinks-selectors-db0f3074.js";const H=i.ul`
  margin-bottom: 40px;

  display: grid;
  grid-row-gap: 40px;
  list-style: none;

  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,X=i.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,J=i.img`
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
`,K=i.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,U=i.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Y=i(P)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:e})=>e.subTitleText};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Z=({drinks:e})=>t.jsx(t.Fragment,{children:t.jsx(H,{children:e.length>0?e.map(({_id:r,drink:a,drinkThumb:s})=>t.jsxs(X,{children:[t.jsx(J,{src:s||V}),t.jsxs(K,{children:[t.jsx(U,{children:a}),t.jsx(Y,{to:`/drinks/${r}`,children:"See more"})]})]},r)):e.length===0?t.jsx("p",{children:"Sorry. There are no coctails ... 😭"}):null})});function O(e){return $({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(e)}const v=i(A)`
  & .Select__control {
    width: 100%;
    background-color: #161f37;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform ${u};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  & .Select__value-container {
    padding: 17px 24px;
    padding-right: 0;

    @media screen and (min-width: 768px) {
      padding: 15px 24px;
      padding-right: 0;
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: #f3f3f3;
    padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: #f3f3f3;
    margin: 0;
    padding: 0;

    &:hover {
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }

  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: #f3f3f3;
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
    border-radius: 20px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${u},
      background-color ${u};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;

    &:hover,
    &:focus {
      color: ${({theme:e})=>e.mainText};
    }

    &:active {
      color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      background-color: ${({theme:e})=>e.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`,ee=i.span`
  position: absolute;
  top: 17px;
  right: 24px;
  pointer-events: none;
  color: ${({theme:e})=>e.mainText};
`,te=i.div`
  position: relative;
  width: 100%;
`,ne=i(y)`
  display: flex;
  color: #f3f3f3;
  align-items: center;
  margin-bottom: 40px;
  row-gap: 14px;
  flex-direction: column;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 8px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 680px;
    margin-top: 80px;
  }

  #categories {
    width: 100%;
  }

  #ingredients {
    width: 100%;
  }
`,ie=i(j)`
  position: relative;
  background-color: transparent;
  width: 100%;
  padding: 17px 23px;
  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${u};

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 23px;
  }
`,re=()=>{const e=S(N),r=S(R),a=S(W);return{categories:e,ingredients:r,glasses:a}},ae={searchQuery:"",categories:"",ingredients:""},oe=L().shape({searchQuery:k(),categories:k(),ingredients:k()}),se=({page:e,limit:r})=>{const[a,s]=x.useState(""),[o,m]=x.useState(""),[d,h]=x.useState(""),{categories:p,ingredients:f}=re();D();const l=T(),w=c=>{B(()=>s(c.searchQuery),300),m(c.categories),h(c.ingredients),s("")};x.useEffect(()=>{l(C()),l(I()),l(z({query:a,category:o,ingredient:d,page:e,limit:r}))},[l,a,o,d,e,r]);const _=c=>{s(c.target.value)};return t.jsx(F,{initialValues:ae,validationSchema:oe,onSubmit:w,children:c=>t.jsxs(ne,{onSubmit:c.handleSubmit,children:[t.jsxs(te,{children:[t.jsx(ie,{name:"searchQuery",type:"text",value:a,placeholder:"Enter the text",onChange:_}),t.jsx(ee,{children:t.jsx(O,{size:20})})]}),t.jsx(j,{name:"categories",children:({field:g,form:b})=>t.jsx(v,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:p.map(n=>({value:n,label:n})),name:g.name,id:"categories",...g,value:o?{value:o,label:o}:"",onChange:n=>{m(n?n.value:""),b.setFieldValue("categories",n?n.value:"")},placeholder:"All categories"})}),t.jsx(j,{name:"ingredients",children:({field:g,form:b})=>t.jsx(v,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:f.map(n=>({value:n.title,label:n.title})),name:g.name,id:"ingredients",...g,value:d?{value:d,label:d}:"",onChange:n=>{h(n?n.value:""),b.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})]})})},de=i.section`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
`;function fe(){const{width:e}=E(),{isLoading:r,drinks:a,error:s,total:o}=D(),[m,d]=x.useState(1),h=e<768?5:8,p=e<1440?10:9,f=Math.ceil(o/p),l=w=>{d(w)};return t.jsx(de,{children:t.jsxs(M,{children:[t.jsx(q,{title:"Drinks"}),t.jsx(se,{page:m,limit:p}),r&&t.jsx(Q,{}),o>0&&!s&&t.jsx(Z,{drinks:a}),f>1&&t.jsx(G,{drinksPerPage:p,totalDrinks:o,onPageChange:l,pageNumbersToShow:h})]})})}export{fe as default};
