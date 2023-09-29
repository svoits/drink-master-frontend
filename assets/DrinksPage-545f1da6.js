import{s as r,a as D,j as e,G as P,F as I,b,c as C,d as w,r as h,u as y,e as j,f as L,h as z,i as v,k as F,Q as T,C as M,L as E}from"./index-a74a948a.js";import{P as Q}from"./Paginator-97f81055.js";import{u as W}from"./useDrink-9a4045b7.js";import{D as $}from"./stub-911fb552.js";import{s as H,a as R}from"./selectors-dcee3de9.js";import{S}from"./react-select.esm-4ed59bfe.js";import"./drinks-selectors-db0f3074.js";const A=r.ul`
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
`,G=r.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,V=r.img`
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
`,N=r.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,q=r.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,B=r(D)`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.subTitleText};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`,X=({drinks:t})=>e.jsx(e.Fragment,{children:e.jsx(A,{children:t.length>0?t.map(({_id:a,drink:n,drinkThumb:s})=>e.jsxs(G,{children:[e.jsx(V,{src:s||$}),e.jsxs(N,{children:[e.jsx(q,{children:n}),e.jsx(B,{to:`/drinks/${a}`,children:"See more"})]})]},a)):t.length===0?e.jsx("p",{children:"Sorry. There are no coctails ... 😭"}):null})});function J(t){return P({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(t)}const k={control:(t,{isFocused:a})=>({...t,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:"#f3f3f3",borderColor:a?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1440px)":{width:"199px",height:"56px"}}),indicatorSeparator:t=>({...t,background:"none"}),placeholder:t=>({...t,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),input:t=>({...t,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),menuList:t=>({...t,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(t,{isFocused:a,isSelected:n})=>({...t,background:a?"#161f37":n?"#4f5f88":void 0,zIndex:1,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",borderRadius:"20px"}),menu:t=>({...t,zIndex:100,borderRadius:"20px"})};r(S)`
&. control  {
  background-color: #161f37;
}
    &.Select--multi  {

        .Select-value {
            display: inline-flex;
            align-items: center;
        }
    }

    & .Select-placeholder {
      color: #f3f3f3;
      fontSize: 17px;
      fontWeight: 400;
      lineHeight: 1.5;
      letterSpacing: 0em;
      textAlign: center;
    }
`;const K=r.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,U=r.div`
  position: relative;

  @media screen and (min-width: 768px) {
    width: 262px;
    // border-radius: 50%;
    // height: 80px;
    // width: 80px;
    // margin-bottom: 38px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Y=r(I)`
  display: flex;
  color: #f3f3f3;
  align-items: center;
  margin-bottom: 40px;
  gap: 8px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
  }
`,Z=r.input`
  position: relative;

  background-color: #161f37;
  opacity: 0.8px;
  width: 335px;
  height: 54px;

  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: 1px solid #f3f3f333;

  color: #f3f3f3;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;

  ::placeholder {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: 0em;
    text-align: center;

    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 264px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 264px;
    height: 56px;
  }
`;r(b)`
  background-color: #161f37;

  width: 335px;
  height: 54px;

  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: none;

  color: #f3f3f3;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: center;
  &.active {
    background-color: var(--brand-orange);
    color: var(--text-white);
  }
  &::placeholder {
    color: #f3f3f3;
  }

  @media screen and (min-width: 768px) {
    width: 199px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 199px;
    height: 56px;
  }
`;const _={searchQuery:"",categories:"",ingredients:""},O=C().shape({searchQuery:w(),categories:w(),ingredients:w()}),ee=()=>{const[t,a]=h.useState(""),[n,s]=h.useState(""),[d,m]=h.useState(""),c=y(),p=j(H),g=j(R),f=o=>{if(t.trim()===""){T("🦄 Type a name of picture.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}a(o.searchQuery),s(o.categories),m(o.ingredients),console.log(n),a("")};h.useEffect(()=>{c(L()),c(z()),c(v({query:t,category:n,ingredient:d}))},[c,t,n,d]),console.log(n);const u=o=>a(o.target.value);return e.jsx(F,{initialValues:_,validationSchema:O,onSubmit:f,children:o=>e.jsxs(Y,{onSubmit:o.handleSubmit,children:[e.jsx("div",{children:e.jsx(U,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(Z,{name:"searchQuery",type:"text",placeholder:"Enter the text",onChange:u}),e.jsx(K,{children:e.jsx(J,{size:24})})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(b,{name:"categories",children:({field:l,form:x})=>e.jsx(S,{styles:k,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:i=>i.isFocused?"border-orange-600":"border-grey-300"},options:p.map(i=>({value:i,label:i})),name:l.name,id:"categories",...l,value:n?{value:n,label:n}:"",onChange:i=>{s(i?i.value:""),x.setFieldValue("categories",i?i.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(b,{name:"ingredients",children:({field:l,form:x})=>e.jsx(S,{styles:k,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:i=>i.isFocused?"border-orange-600":"border-grey-300"},options:g.map(i=>({value:i.title,label:i.title})),name:l.name,id:"ingredients",...l,value:d?{value:d,label:d}:"",onChange:i=>{m(i?i.value:""),x.setFieldValue("ingredient",i?i.value:"")},placeholder:"Ingredients"})})})})]})})},te=r.h1`
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:t})=>t.mainText};

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
    font-size: 64px;
    line-height: 1;
  }
`,ie=r.div`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`;function ce(){const t=y(),{isLoading:a,drinks:n,error:s}=W(),[d,m]=h.useState(1),c=5,p=n.length;console.log(p);const g=9,f=Math.ceil(p/g),u=(d-1)*g,o=Math.min(u+g,p);h.useEffect(()=>{t(v())},[t]);const l=x=>{m(x)};return e.jsx(M,{children:e.jsxs(ie,{children:[e.jsx(te,{children:"Drinks"}),e.jsx(ee,{}),e.jsxs("div",{children:[a&&e.jsx(E,{}),s&&e.jsx("p",{children:s}),n.length>0&&e.jsx(X,{drinks:n.slice(u,o)})]}),f>1&&e.jsx(Q,{drinksPerPage:g,totalDrinks:p,onPageChange:l,pageNumbersToShow:c})]})})}export{ce as default};
