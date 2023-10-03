import{G as $,s as i,t as m,F as D,d as j,e as S,f as y,h as v,r as p,c as C,i as P,k as T,l as I,j as t,m as z,n as F,b as L,a as A,u as B,C as E,L as Q}from"./index-02e09e0f.js";import{P as M}from"./Paginator-8cc377aa.js";import{S as W}from"./react-select.esm-f8800266.js";import{D as G}from"./stub-038aaa05.js";import{P as N}from"./PageTitle-862a06d6.js";import{C as R}from"./hero-img-desc-2x-e8906f30.js";function V(e){return $({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(e)}const k=i(W)`
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
`,q=i.span`
  position: absolute;
  top: 17px;
  right: 24px;
  pointer-events: none;
  color: ${({theme:e})=>e.mainText};
`,H=i.div`
  position: relative;
  width: 100%;
`,J=i(D)`
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
`,K=i(j)`
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
`,U=e=>e.filters.categories,X=e=>e.filters.ingredients,Y=e=>e.filters.glasses,Z=()=>{const e=S(U),a=S(X),o=S(Y);return{categories:e,ingredients:a,glasses:o}},O={searchQuery:"",categories:"",ingredients:""},ee=y().shape({searchQuery:v(),categories:v(),ingredients:v()}),te=({page:e,limit:a})=>{const[o,r]=p.useState(""),[s,g]=p.useState(""),[c,u]=p.useState(""),{categories:x,ingredients:f}=Z(),l=C(),w=d=>{F(()=>r(d.searchQuery),300),g(d.categories),u(d.ingredients),r("")};p.useEffect(()=>{l(P()),l(T())},[l]),p.useEffect(()=>{l(I({query:o,category:s,ingredient:c,page:e,limit:a}))},[l,o,s,c,e,a]);const _=d=>{r(d.target.value)};return t.jsx(z,{initialValues:O,validationSchema:ee,onSubmit:w,children:d=>t.jsxs(J,{onSubmit:d.handleSubmit,children:[t.jsxs(H,{children:[t.jsx(K,{name:"searchQuery",type:"text",value:o,placeholder:"Enter the text",onChange:_}),t.jsx(q,{children:t.jsx(V,{size:20})})]}),t.jsx(j,{name:"categories",children:({field:h,form:b})=>t.jsx(k,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:[{value:"",label:"All categories"},...x.map(n=>({value:n,label:n}))],name:h.name,id:"categories",...h,value:s?{value:s,label:s}:{value:"",label:"All categories"},onChange:n=>{g(n?n.value:""),b.setFieldValue("categories",n?n.value:"")},placeholder:"All categories"})}),t.jsx(j,{name:"ingredients",children:({field:h,form:b})=>t.jsx(k,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:[{value:"",label:"All ingredients"},...f.map(n=>({value:n.title,label:n.title}))],name:h.name,id:"ingredients",...h,value:c?{value:c,label:c}:{value:"",label:"All ingredients"},onChange:n=>{u(n?n.value:""),b.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})]})})},ne=i.ul`
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
`,ie=i.li`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`,re=i.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  object-fit: ${({placeholder:e})=>e==="true"?"contain":"cover"};
  background-color: #161f37;
  padding: ${({placeholder:e})=>e==="true"?"28px":0};

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,ae=i.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,oe=i.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`,se=i(L)`
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
`,ce=({drinks:e})=>t.jsx(t.Fragment,{children:t.jsx(ne,{children:e.length>0?e.map(({_id:a,drink:o,drinkThumb:r})=>t.jsxs(ie,{children:[t.jsx(re,{src:r||G,placeholder:!r&&"true"}),t.jsxs(ae,{children:[t.jsx(oe,{children:o}),t.jsx(se,{to:`/drinks/${a}`,children:"See more"})]})]},a)):e.length===0?t.jsx("p",{children:"Sorry. There are no cocktails ... 😭"}):null})}),le=i.section`
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
`,de=i.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 204px;
  row-gap: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`,pe=i.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,ge=i.img`
  width: 100%;
  object-fit: contain;
`;function be(){const{width:e}=A(),{isLoading:a,drinks:o,error:r,total:s}=B(),[g,c]=p.useState(1),u=e<768?5:8,x=e<1440?10:9,f=Math.ceil(s/x),l=w=>{c(w)};return t.jsx(le,{children:t.jsxs(E,{children:[t.jsx(N,{title:"Drinks"}),t.jsx(te,{page:g,limit:x}),a&&t.jsx(Q,{}),s>0&&!r&&t.jsx(ce,{drinks:o}),r&&t.jsxs(de,{children:[t.jsx(ge,{src:R,alt:"Cocktail"}),t.jsx(pe,{children:"Sorry. There are no cocktails ... 😭Please try again."})]}),f>1&&!r&&t.jsx(M,{currentPage:g,drinksPerPage:x,totalDrinks:s,onPageChange:l,pageNumbersToShow:u})]})})}export{be as default};
