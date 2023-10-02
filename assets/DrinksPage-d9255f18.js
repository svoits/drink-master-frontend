import{G as D,s as i,t as m,F as $,d as k,e as S,f as y,h as v,r as p,c as C,i as P,k as T,l as I,j as t,m as z,n as F,b as L,a as A,u as B,C as E,L as Q}from"./index-ed3a3845.js";import{P as M}from"./Paginator-0f3306b7.js";import{S as W}from"./react-select.esm-9d9016d5.js";import{s as G,a as N,b as R}from"./selectors-a7d85374.js";import{D as V,P as q}from"./PageTitle-29933c3d.js";import{C as H}from"./hero-img-desc-2x-e8906f30.js";function J(e){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(e)}const j=i(W)`
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
`,K=i.span`
  position: absolute;
  top: 17px;
  right: 24px;
  pointer-events: none;
  color: ${({theme:e})=>e.mainText};
`,U=i.div`
  position: relative;
  width: 100%;
`,X=i($)`
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
`,Y=i(k)`
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
`,Z=()=>{const e=S(G),r=S(N),a=S(R);return{categories:e,ingredients:r,glasses:a}},O={searchQuery:"",categories:"",ingredients:""},ee=y().shape({searchQuery:v(),categories:v(),ingredients:v()}),te=({page:e,limit:r})=>{const[a,o]=p.useState(""),[s,g]=p.useState(""),[c,u]=p.useState(""),{categories:x,ingredients:f}=Z(),d=C(),w=l=>{F(()=>o(l.searchQuery),300),g(l.categories),u(l.ingredients),o("")};p.useEffect(()=>{d(P()),d(T())},[d]),p.useEffect(()=>{d(I({query:a,category:s,ingredient:c,page:e,limit:r}))},[d,a,s,c,e,r]);const _=l=>{o(l.target.value)};return t.jsx(z,{initialValues:O,validationSchema:ee,onSubmit:w,children:l=>t.jsxs(X,{onSubmit:l.handleSubmit,children:[t.jsxs(U,{children:[t.jsx(Y,{name:"searchQuery",type:"text",value:a,placeholder:"Enter the text",onChange:_}),t.jsx(K,{children:t.jsx(J,{size:20})})]}),t.jsx(k,{name:"categories",children:({field:h,form:b})=>t.jsx(j,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:[{value:"",label:"All categories"},...x.map(n=>({value:n,label:n}))],name:h.name,id:"categories",...h,value:s?{value:s,label:s}:{value:"",label:"All categories"},onChange:n=>{g(n?n.value:""),b.setFieldValue("categories",n?n.value:"")},placeholder:"All categories"})}),t.jsx(k,{name:"ingredients",children:({field:h,form:b})=>t.jsx(j,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:[{value:"",label:"All ingredients"},...f.map(n=>({value:n.title,label:n.title}))],name:h.name,id:"ingredients",...h,value:c?{value:c,label:c}:{value:"",label:"All ingredients"},onChange:n=>{u(n?n.value:""),b.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})]})})},ne=i.ul`
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
  object-fit: cover;
  border-radius: 8px;
  background: #161f37;
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
`,ce=({drinks:e})=>t.jsx(t.Fragment,{children:t.jsx(ne,{children:e.length>0?e.map(({_id:r,drink:a,drinkThumb:o})=>t.jsxs(ie,{children:[t.jsx(re,{src:o||V}),t.jsxs(ae,{children:[t.jsx(oe,{children:a}),t.jsx(se,{to:`/drinks/${r}`,children:"See more"})]})]},r)):e.length===0?t.jsx("p",{children:"Sorry. There are no cocktails ... 😭"}):null})}),de=i.section`
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
`,le=i.div`
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
`;function be(){const{width:e}=A(),{isLoading:r,drinks:a,error:o,total:s}=B(),[g,c]=p.useState(1),u=e<768?5:8,x=e<1440?10:9,f=Math.ceil(s/x),d=w=>{c(w)};return t.jsx(de,{children:t.jsxs(E,{children:[t.jsx(q,{title:"Drinks"}),t.jsx(te,{page:g,limit:x}),r&&t.jsx(Q,{}),s>0&&!o&&t.jsx(ce,{drinks:a}),o&&t.jsxs(le,{children:[t.jsx(ge,{src:H,alt:"Cocktail"}),t.jsx(pe,{children:"Sorry. There are no cocktails ... 😭Please try again."})]}),f>1&&!o&&t.jsx(M,{currentPage:g,drinksPerPage:x,totalDrinks:s,onPageChange:d,pageNumbersToShow:u})]})})}export{be as default};
