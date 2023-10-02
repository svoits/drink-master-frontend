import{G as $,s as r,t as m,F as D,d as v,e as S,f as y,h as k,r as h,c as P,i as T,k as C,l as I,j as t,m as F,n as L,b as z,a as B,u as Q,C as A,L as E}from"./index-ad835bc9.js";import{P as M}from"./Paginator-68a0421e.js";import{S as W}from"./react-select.esm-9466d165.js";import{s as G,a as N,b as R}from"./selectors-a7d85374.js";import{P as V}from"./PageTitle-efdac7ff.js";import{D as q}from"./stub-065f3fc6.js";function H(e){return $({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(e)}const j=r(W)`
  & .Select__control {
    width: 100%;
    background-color: #161f37;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform ${m};
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
    overflow: hidden;
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
      color ${m},
      background-color ${m};
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
`,J=r.span`
  position: absolute;
  top: 17px;
  right: 24px;
  pointer-events: none;
  color: ${({theme:e})=>e.mainText};
`,K=r.div`
  position: relative;
  width: 100%;
`,U=r(D)`
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
`,X=r(v)`
  position: relative;
  background-color: transparent;
  width: 100%;
  padding: 17px 23px;
  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${m};

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
`,Y=()=>{const e=S(G),i=S(N),o=S(R);return{categories:e,ingredients:i,glasses:o}},Z={searchQuery:"",categories:"",ingredients:""},O=y().shape({searchQuery:k(),categories:k(),ingredients:k()}),ee=({page:e,limit:i})=>{const[o,s]=h.useState(""),[a,p]=h.useState(""),[c,u]=h.useState(""),{categories:g,ingredients:f}=Y(),l=P(),w=d=>{L(()=>s(d.searchQuery),300),p(d.categories),u(d.ingredients),s("")};h.useEffect(()=>{l(T()),l(C()),l(I({query:o,category:a,ingredient:c,page:e,limit:i}))},[l,o,a,c,e,i]);const _=d=>{s(d.target.value)};return t.jsx(F,{initialValues:Z,validationSchema:O,onSubmit:w,children:d=>t.jsxs(U,{onSubmit:d.handleSubmit,children:[t.jsxs(K,{children:[t.jsx(X,{name:"searchQuery",type:"text",value:o,placeholder:"Enter the text",onChange:_}),t.jsx(J,{children:t.jsx(H,{size:20})})]}),t.jsx(v,{name:"categories",children:({field:x,form:b})=>t.jsx(j,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:g.map(n=>({value:n,label:n})),name:x.name,id:"categories",...x,value:a?{value:a,label:a}:"",onChange:n=>{p(n?n.value:""),b.setFieldValue("categories",n?n.value:"")},placeholder:"All categories"})}),t.jsx(v,{name:"ingredients",children:({field:x,form:b})=>t.jsx(j,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:f.map(n=>({value:n.title,label:n.title})),name:x.name,id:"ingredients",...x,value:c?{value:c,label:c}:"",onChange:n=>{u(n?n.value:""),b.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})]})})},te=r.section`
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
`,ne=r.ul`
  margin-bottom: 40px;
  display: grid;
  grid-row-gap: 28px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 80px;
  }
`,re=r.li`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`,ie=r.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  background: #161f37;
  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,oe=r.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,ae=r.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,se=r(z)`
  font-weight: 500;
  line-height: 1.285;
  color: ${({theme:e})=>e.subTitleText};
  transition: color ${m};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.subTitleTextHover};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,ce=({drinks:e})=>t.jsx(t.Fragment,{children:t.jsx(ne,{children:e.length>0?e.map(({_id:i,drink:o,drinkThumb:s})=>t.jsxs(re,{children:[t.jsx(ie,{src:s||q}),t.jsxs(oe,{children:[t.jsx(ae,{children:o}),t.jsx(se,{to:`/drinks/${i}`,children:"See more"})]})]},i)):e.length===0?t.jsx("p",{children:"Sorry. There are no cocktails ... 😭"}):null})});function me(){const{width:e}=B(),{isLoading:i,drinks:o,error:s,total:a}=Q(),[p,c]=h.useState(1),u=e<768?5:8,g=e<1440?10:9,f=Math.ceil(a/g),l=w=>{c(w)};return t.jsx(te,{children:t.jsxs(A,{children:[t.jsx(V,{title:"Drinks"}),t.jsx(ee,{page:p,limit:g}),i&&t.jsx(E,{}),a>0&&!s&&t.jsx(ce,{drinks:o}),f>1&&t.jsx(M,{currentPage:p,drinksPerPage:g,totalDrinks:a,onPageChange:l,pageNumbersToShow:u})]})})}export{me as default};
