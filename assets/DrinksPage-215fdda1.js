import{s as n,a as D,j as e,G as z,F as C,b as S,c as L,d as b,r as g,u as v,e as k,f as F,h as I,i as T,k as M,Q as E,l as Q,C as R,L as W}from"./index-d4c2d01e.js";import{P as $}from"./Paginator-27f4186f.js";import{u as H}from"./useDrink-6e210531.js";import{D as A}from"./stub-df37cee3.js";import{s as G,a as N}from"./selectors-dcee3de9.js";import{S as j}from"./react-select.esm-f2e8b960.js";import"./drinks-selectors-db0f3074.js";const V=n.ul`
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
`,q=n.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,B=n.img`
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
`,X=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,J=n.h5`
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
`,K=n(D)`
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
`,U=({drinks:t})=>e.jsx(e.Fragment,{children:e.jsx(V,{children:t.length>0?t.map(({_id:r,drink:o,drinkThumb:s})=>e.jsxs(q,{children:[e.jsx(B,{src:s||A}),e.jsxs(X,{children:[e.jsx(J,{children:o}),e.jsx(K,{to:`/drinks/${r}`,children:"See more"})]})]},r)):t.length===0?e.jsx("p",{children:"Sorry. There are no coctails ... 😭"}):null})});function Y(t){return z({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(t)}const y={control:(t,{isFocused:r})=>({...t,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:"#f3f3f3",borderColor:r?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1440px)":{width:"199px",height:"56px"}}),indicatorSeparator:t=>({...t,background:"none"}),placeholder:t=>({...t,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),input:t=>({...t,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),menuList:t=>({...t,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(t,{isFocused:r,isSelected:o})=>({...t,background:r?"#161f37":o?"#4f5f88":void 0,zIndex:1,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",borderRadius:"20px"}),menu:t=>({...t,zIndex:100,borderRadius:"20px"})};n(j)`
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
`;const Z=n.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,_=n.div`
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
`,O=n(C)`
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
`,ee=n.input`
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
`;n(S)`
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
`;const te={searchQuery:"",categories:"",ingredients:""},ie=L().shape({searchQuery:b(),categories:b(),ingredients:b()}),ne=({page:t,limit:r})=>{const[o,s]=g.useState(""),[a,h]=g.useState(""),[l,x]=g.useState(""),d=v(),m=k(G),u=k(N),f=c=>{if(o.trim()===""){E("🦄 Type a name of picture.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}s(c.searchQuery),h(c.categories),x(c.ingredients),console.log(a),s("")};g.useEffect(()=>{d(F()),d(I()),d(T({query:o,category:a,ingredient:l,page:t,limit:r}))},[d,o,a,l,t,r]),console.log(a);const P=c=>s(c.target.value);return e.jsx(M,{initialValues:te,validationSchema:ie,onSubmit:f,children:c=>e.jsxs(O,{onSubmit:c.handleSubmit,children:[e.jsx("div",{children:e.jsx(_,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(ee,{name:"searchQuery",type:"text",placeholder:"Enter the text",onChange:P}),e.jsx(Z,{children:e.jsx(Y,{size:24})})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(S,{name:"categories",children:({field:p,form:w})=>e.jsx(j,{styles:y,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:i=>i.isFocused?"border-orange-600":"border-grey-300"},options:m.map(i=>({value:i,label:i})),name:p.name,id:"categories",...p,value:a?{value:a,label:a}:"",onChange:i=>{h(i?i.value:""),w.setFieldValue("categories",i?i.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(S,{name:"ingredients",children:({field:p,form:w})=>e.jsx(j,{styles:y,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:i=>i.isFocused?"border-orange-600":"border-grey-300"},options:u.map(i=>({value:i.title,label:i.title})),name:p.name,id:"ingredients",...p,value:l?{value:l,label:l}:"",onChange:i=>{x(i?i.value:""),w.setFieldValue("ingredient",i?i.value:"")},placeholder:"Ingredients"})})})})]})})},re=n.h1`
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
`,ae=n.div`
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
`;function he(){v();const{width:t}=Q(),{isLoading:r,drinks:o,error:s,total:a}=H(),[h,l]=g.useState(1),x=5,d=t<1440?10:9,m=Math.ceil(a/d),u=f=>{l(f)};return e.jsx(R,{children:e.jsxs(ae,{children:[e.jsx(re,{children:"Drinks"}),e.jsx(ne,{page:h,limit:d}),e.jsxs("div",{children:[r&&e.jsx(W,{}),s&&e.jsx("p",{children:"No drinks found for your query. Please try again."}),a>0&&!s&&e.jsx(U,{drinks:o})]}),m>1&&e.jsx($,{drinksPerPage:d,totalDrinks:a,onPageChange:u,pageNumbersToShow:x})]})})}export{he as default};
