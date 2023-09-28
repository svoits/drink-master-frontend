import{s as t,L as v,j as e,G as D,F,b as g,c as L,d as h,r as c,u as z,e as f,f as I,h as M,i as C,k as P}from"./index-b05abc74.js";import{u as E}from"./useDrink-be37ddee.js";import{s as T,a as Q}from"./selectors-dcee3de9.js";import{S as u}from"./react-select.esm-ec05c256.js";import"./drinks-selectors-db0f3074.js";const R=t.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  column-gap: 28px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 20px;
    row-gap: 40px;
    margin-bottom: 80px;
  }

  @media screen and (min-width: 1440px) {
    row-gap: 80px;
  }
`,$=t.li`
  width: 335px;
  height: 392px;

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 398px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 438px;
  }
`,w=t.img`
  width: 335px;
  height: 360px;

  border-radius: 8px;

  // Linear Gradient
  // rgba(10, 10, 17, 0.02)
  // rgba(10, 10, 17, 0.77)

  @media screen and (min-width: 768px) {
    width: 342px;
    height: 360px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,G=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,H=t.h5`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:i})=>i.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,V=t(v)`
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f380;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
  }
`,W=()=>{const{drinks:i}=E();return e.jsx(e.Fragment,{children:e.jsx(R,{children:i.map(({_id:a,drink:r,drinkThumb:s})=>e.jsxs($,{children:[s?e.jsx(w,{src:s,alt:r}):e.jsx(w,{src:""}),e.jsxs(G,{children:[e.jsx(H,{children:r}),e.jsx(V,{to:`/drinks/${a}`,children:"See more"})]})]},a))})})};function A(i){return D({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"path",attr:{d:"m21 21-4.3-4.3"}}]})(i)}const b={control:(i,{isFocused:a})=>({...i,background:"#161f37",width:"199px",height:"56px",borderRadius:"20px",borderStyle:"none",color:"#f3f3f3",borderColor:a?"orange":"grey"}),indicatorSeparator:i=>({...i,background:"none"}),placeholder:i=>({...i,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"27px",letterSpacing:"0em",textAlign:"center"}),input:i=>({...i,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"27px",letterSpacing:"0em",textAlign:"center"}),menuList:i=>({...i,background:"#161f37",borderRadius:"20px",padding:"14px 23px"}),option:(i,{isFocused:a,isSelected:r})=>({...i,background:a?"#161f37":r?"#4f5f88":void 0,zIndex:1,color:"#f3f3f3",fontFamily:"Manrope",fontSize:"17px",fontWeight:"400",lineHeight:"27px",letterSpacing:"0em",borderRadius:"20px"}),menu:i=>({...i,zIndex:100,borderRadius:"20px"})},N=t(F)`
  display: flex;
  // width: 678px;
  // height: 465px;
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
`,q=t.input`
  position: relative;

  background-color: #161f37;
  opacity: 0.8px;
  width: 335px;
  height: 54px;

  // padding: 15px, 68px, 15px, 24px;
  border-radius: 200px;
  border: 1px solid #f3f3f333;

  color: #f3f3f3;
  font-family: Manrope;
  font-size: 17px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: center;

  ::placeholder {
    font-family: Manrope;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
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
`;t(g)`
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
  line-height: 27px;
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
`;t.ul`
  background-color: #161f37;
  width: 199px;
  height: 405px;
  padding: 14px, 23px, 14px, 23px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;t.option`
  background-color: #161f37;
  width: 199px;
  height: 405px;
  padding: 14px, 23px, 14px, 23px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const B={searchQuery:"",categories:"",ingredients:""},X=L().shape({searchQuery:h(),categories:h(),ingredients:h()}),J=()=>{const[i,a]=c.useState(""),[r,s]=c.useState(""),[d,m]=c.useState(""),x=z(),k=f(T),y=f(Q),j=o=>{a(o.searchQuery),s(o.categories),m(o.ingredients),console.log(r)};c.useEffect(()=>{x(I()),x(M()),x(C({query:i,category:r,ingredient:d}))},[x,i,r,d]),console.log(r);const S=o=>a(o.target.value);return e.jsx(P,{initialValues:B,validationSchema:X,onSubmit:j,children:o=>e.jsxs(N,{onSubmit:o.handleSubmit,children:[e.jsx("div",{children:e.jsxs("label",{htmlFor:"searchQuery",children:[e.jsx(q,{name:"searchQuery",type:"text",placeholder:"Enter the text",onChange:S}),e.jsx(A,{style:{color:"#F3F3F3",position:"absolute",width:"20px",height:"20px",top:"10%",left:"37%"}})]})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"categories",children:e.jsx(g,{name:"categories",children:({field:p,form:l})=>e.jsx(u,{styles:b,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:k.map(n=>({value:n,label:n})),name:p.name,id:"categories",...p,value:r?{value:r,label:r}:"",onChange:n=>{s(n?n.value:""),l.setFieldValue("categories",n?n.value:"")},handleGategory:!0,placeholder:"All categories"})})})}),e.jsx("div",{children:e.jsx("label",{htmlFor:"ingredients",children:e.jsx(g,{name:"ingredients",children:({field:p,form:l})=>e.jsx(u,{styles:b,closeMenuOnSelect:!0,isClearable:!0,classNames:{control:n=>n.isFocused?"border-orange-600":"border-grey-300"},options:y.map(n=>({value:n.title,label:n.title})),name:p.name,id:"ingredients",...p,value:d?{value:d,label:d}:"",onChange:n=>{m(n?n.value:""),l.setFieldValue("ingredient",n?n.value:"")},placeholder:"Ingredients"})})})})]})})},K=t.h1`
  // margin-top: 80px;
  margin-bottom: 40px;
  font-family: Manrope;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:i})=>i.mainText};

  @media screen and (min-width: 768px) {
    // margin-top: 140px;
    margin-bottom: 60px;

    font-size: 56px;

    line-height: 60px;
  }

  @media screen and (min-width: 1440px) {
    // margin-top: 160px;
    margin-bottom: 80px;

    font-size: 64px;
    line-height: 68px;
  }
`,U=t.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 365px;
  padding: 100px 15px;

  @media screen and (min-width: 768px) {
    max-width: 734px;
    padding: 100px 15px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1270px;
  }
`,Y=t.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;function ne(){return e.jsx(U,{children:e.jsxs(Y,{children:[e.jsx(K,{children:"Drinks"}),e.jsx(J,{}),e.jsx(W,{})]})})}export{ne as default};
