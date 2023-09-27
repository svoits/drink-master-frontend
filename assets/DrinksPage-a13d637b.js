import{s as i,L as f,u as l,r as m,q as w,j as e,l as u,m as g,v as p,w as j,x as k,F as b}from"./index-8281ffcf.js";import{u as D}from"./useDrink-11386744.js";import{s as y,a as v}from"./selectors-dcee3de9.js";import{c as L,a as x}from"./index.esm-bc8f3ca8.js";import"./drinks-selectors-47583310.js";const P=i.ul`
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
`,S=i.li`
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
`,o=i.img`
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
`,F=i.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,z=i.h5`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:n})=>n.mainText};

  @media screen and (min-width: 768px) {
    font-size: 18px;

    line-height: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,I=i(f)`
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
`,E=()=>{const n=l(),{drinks:r}=D();return m.useEffect(()=>{n(w())},[n]),e.jsx(e.Fragment,{children:e.jsx(P,{children:r.map(({_id:a,drink:s,drinkThumb:t})=>e.jsxs(S,{children:[t?e.jsx(o,{src:t,alt:s}):e.jsx(o,{src:""}),e.jsxs(F,{children:[e.jsx(z,{children:s}),e.jsx(I,{to:`/drinks/${a}`,children:"See more"})]})]},a))})})},M=i(u)`
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
`,T=i(g)`
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
`,c=i(g)`
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

  @media screen and (min-width: 768px) {
    width: 199px;
    height: 56px;
  }

  @media screen and (min-width: 1440px) {
    width: 199px;
    height: 56px;
  }
`;i.ul`
  background-color: #161f37;
  width: 199px;
  height: 405px;
  padding: 14px, 23px, 14px, 23px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;const h=i.option`
  background-color: #161f37;
  width: 199px;
  height: 405px;
  padding: 14px, 23px, 14px, 23px;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`,C={searchQuery:"",category:"",ingredient:""},$=L({category:x().required("Please select a category"),ingredient:x().required("Please select a category")}),q=()=>{const n=l(),r=p(y),a=p(v);m.useEffect(()=>{n(j()),n(k())},[n]);const s=(t,d)=>{console.log(t),d.resetForm()};return e.jsx(b,{initialValues:C,validationSchema:$,onSubmit:s,children:e.jsxs(M,{autoComplete:"off",children:[e.jsx("div",{children:e.jsx("label",{htmlFor:"name",children:e.jsx(T,{name:"searchQuery",type:"text",placeholder:"Enter the text"})})}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"category"}),e.jsx("div",{children:r.length>0&&e.jsxs(c,{name:"categories",as:"select",children:[e.jsx("option",{value:"",children:"All categories"}),r.map(t=>e.jsx(h,{value:t,children:t},t))]})})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"ingredient"}),e.jsx("div",{children:a.length>0&&e.jsxs(c,{name:"ingredients",as:"select",children:[e.jsx("option",{value:"",children:"Ingredients"}),a.map(({_id:t,title:d})=>e.jsx(h,{value:d,children:d},t))]})})]})]})})},G=i.h1`
  // margin-top: 80px;
  margin-bottom: 40px;
  font-family: Manrope;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: left;
  color: ${({theme:n})=>n.mainText};

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
`,O=i.section`
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
`,Q=i.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;function X(){return e.jsx(O,{children:e.jsxs(Q,{children:[e.jsx(G,{children:"Drinks"}),e.jsx(q,{}),e.jsx(E,{})]})})}export{X as default};
