import{s as a,r as x,j as e,F as P,b as z,a as D,G as I,c as L,d as w,e as F,f as b,u as v,h as k,i as M,k as T,l as C,m as E,Q,C as R,L as W}from"./index-f9e9477c.js";import{u as $}from"./useDrink-e6a7cb7c.js";import{D as H}from"./stub-58d235ae.js";import{s as A,a as N}from"./selectors-dcee3de9.js";import{S as j}from"./react-select.esm-42199af7.js";import"./drinks-selectors-db0f3074.js";const V=a.div`
  padding: 14px 0;
  @media screen and (min-width: 768px) {
    padding: 14px 24px;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    color: #f3f3f3;
    transition: background-color 0.5s;
    font-size: 12px;
    font-weight: 500;
    background-color: transparent;
    border: none;
    font-style: normal;
    margin: 0 10px;
  }
  button.active {
    background-color: rgba(64, 112, 205, 0.5);
  }
`,y=a.button`
  width: 27px;
  height: 27px;
  fill: rgba(243, 243, 243, 0.3);
  background-color: transparent;
  border: none;
  margin: 0 10px;
`,G=({drinksPerPage:t,totalDrinks:o,onPageChange:i,pageNumbersToShow:c})=>{const[s,m]=x.useState(1),p=r=>{m(r),i(r)},l=[];for(let r=1;r<=Math.ceil(o/t);r++)l.push(r);const h=()=>{const r=Math.floor(c/2),u=l.indexOf(s),d=Math.max(0,u-r),g=Math.min(l.length-1,d+c-1);return l.slice(d,g+1)};return e.jsx(V,{children:e.jsxs("ul",{children:[e.jsx(y,{type:"button",onClick:()=>p(s-1),disabled:s===1,children:e.jsx(P,{size:20})}),h().map(r=>e.jsx("li",{children:e.jsx("button",{onClick:()=>p(r),className:r===s?"active":"",children:r})},r)),e.jsx(y,{onClick:()=>p(s+1),disabled:s===Math.ceil(o/t),children:e.jsx(z,{size:20})})]})})},q=a.ul`
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
`,B=a.li`
  width: 335px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 342px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,X=a.img`
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
`,J=a.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,K=a.h5`
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
`,U=a(D)`
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
`,Y=({drinks:t})=>e.jsx(e.Fragment,{children:e.jsx(q,{children:t.length>0?t.map(({_id:o,drink:i,drinkThumb:c})=>e.jsxs(B,{children:[e.jsx(X,{src:c||H}),e.jsxs(J,{children:[e.jsx(K,{children:i}),e.jsx(U,{to:`/drinks/${o}`,children:"See more"})]})]},o)):t.length===0?e.jsx("p",{children:"Sorry. There are no coctails ... 😭"}):null})});function Z(t){return I({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(t)}const S={control:(t,{isFocused:o})=>({...t,background:"#161f37",width:"335px",height:"54px",borderRadius:"20px",borderStyle:"none",color:"#f3f3f3",borderColor:o?"orange":"grey","@media only screen and (min-width: 768px)":{width:"199px",height:"56px"},"@media only screen and (min-width: 1440px)":{width:"199px",height:"56px"}}),indicatorSeparator:t=>({...t,background:"none"}),placeholder:t=>({...t,color:"#f3f3f3",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),input:t=>({...t,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",textAlign:"center"}),menuList:t=>({...t,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(t,{isFocused:o,isSelected:i})=>({...t,background:o?"#161f37":i?"#4f5f88":void 0,zIndex:1,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"1.5",letterSpacing:"0em",borderRadius:"20px"}),menu:t=>({...t,zIndex:100,borderRadius:"20px"})};a(j)`
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
`;const O=a.span`
  position: absolute;
  top: 16px;
  right: 24px;
  pointer-events: none;
`,_=a.div`
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
`,ee=a(L)`
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
`,te=a.input`
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
`;a(w)`
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
`;const ne={searchQuery:"",categories:"",ingredients:""},ie=F().shape({searchQuery:b(),categories:b(),ingredients:b()}),re=()=>{const[t,o]=x.useState(""),[i,c]=x.useState(""),[s,m]=x.useState(""),p=v(),l=k(A),h=k(N),r=d=>{if(t.trim()===""){Q("🦄 Type a name of picture.",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"});return}o(d.searchQuery),c(d.categories),m(d.ingredients),console.log(i),o("")};x.useEffect(()=>{p(M()),p(T()),p(C({query:t,category:i,ingredient:s}))},[p,t,i,s]),console.log(i);const u=d=>o(d.target.value);return e.jsx(E,{initialValues:ne,validationSchema:ie,onSubmit:r,children:d=>e.jsxs(ee,{onSubmit:d.handleSubmit,children:[e.jsx("div",{children:e.jsx(_,{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(te,{name:"searchQuery",type:"text",placeholder:"Enter the text",onChange:u}),e.jsx(O,{children:e.jsx(Z,{size:24})})]})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(w,{name:"categories",children:({field:g,form:f})=>e.jsx(j,{styles:S,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:l.map(n=>({value:n,label:n})),name:g.name,id:"categories",...g,value:i?{value:i,label:i}:"",onChange:n=>{c(n?n.value:""),f.setFieldValue("categories",n?n.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(w,{name:"ingredients",children:({field:g,form:f})=>e.jsx(j,{styles:S,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:h.map(n=>({value:n.title,label:n.title})),name:g.name,id:"ingredients",...g,value:s?{value:s,label:s}:"",onChange:n=>{m(n?n.value:""),f.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})})})]})})},ae=a.h1`
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
`,oe=a.div`
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
`;function he(){const t=v(),{isLoading:o,drinks:i,error:c}=$(),[s,m]=x.useState(1),p=5,l=i.length;console.log(l);const h=9,r=Math.ceil(l/h),u=(s-1)*h,d=Math.min(u+h,l);x.useEffect(()=>{t(C())},[t]);const g=f=>{m(f)};return e.jsx(R,{children:e.jsxs(oe,{children:[e.jsx(ae,{children:"Drinks"}),e.jsx(re,{}),e.jsxs("div",{children:[o&&e.jsx(W,{}),c&&e.jsx("p",{children:c}),i.length>0&&e.jsx(Y,{drinks:i.slice(u,d)})]}),r>1&&e.jsx(G,{drinksPerPage:h,totalDrinks:l,onPageChange:g,pageNumbersToShow:p})]})})}export{he as default};
