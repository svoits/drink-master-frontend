import{s as n,t as d,N as l,u as j,j as i,a as g,r as h,g as m,b as f,C as u,L as b,c as y}from"./index-c79e0293.js";import{C as D}from"./hero-img-desc-2x-e8906f30.js";import{P as v}from"./PageTitle-e6eabedc.js";const $=n.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }
`,C=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    row-gap: 80px;
  }
`,T=n.div``,z=n.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,I=n.ul`
  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
  }
`,L=n.li`
  width: 100%;
`,c=n.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,S=n.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,M=n(l)`
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;

  color: ${({theme:e})=>e.subTitleText};
  transition: color ${d};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.subTitleTextHover};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,P=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,E=n(l)`
  display: block;
  width: 185px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 14px 40px;

  background: ${({theme:e})=>e.hoverBackgroundColorLink};
  color: ${({theme:e})=>e.themeSwitcher};
  border: 2px solid transparent;
  border-radius: 42px;
  transition: color ${d};
  transition: background-color ${d};
  font-weight: 500;
  line-height: 1.285;

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover,
  &:focus {
    color: #f3f3f3;
    background: #161f37;
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 40px;
    margin: 80px auto 0px;
  }
`,W=({item:e,idx:t})=>{const{width:r}=j();if(r<=768&&t>0||r<=1440&&t>1)return"";const{_id:a,drink:o,drinkThumb:s}=e;return i.jsxs(L,{children:[s?i.jsx(c,{src:s,alt:o}):i.jsx(c,{src:"",alt:o}),i.jsxs(P,{children:[i.jsx(S,{children:o}),i.jsx(M,{to:`/drinks/${a}`,children:"See more"})]})]},a)},A=()=>{const e=g();h.useEffect(()=>{e(m())},[e]);const{mainPageDrinks:t,isLoading:r,error:a}=f(),o=Object.keys(t).slice(0,4);return i.jsx(i.Fragment,{children:i.jsx($,{children:i.jsxs(u,{children:[i.jsx(C,{children:r?i.jsx(b,{}):o.length>0&&o.map((s,k)=>i.jsxs(T,{children:[i.jsxs(z,{children:[s," "]}),i.jsx(I,{children:t[s].map((p,w)=>i.jsx(W,{item:p,idx:w},p._id))})]},k))}),i.jsx(E,{to:"/drinks",children:"Other drinks"})]})})})},B=n.section`
  padding-top: 80px;
  padding-bottom: 112px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 124px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 128px;
    padding-bottom: 160px;
  }
`,F=n.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 47px;

  @media screen and (min-width: 768px) {
    row-gap: 54px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    column-gap: 130px;
  }
`,G=n.div`
  max-width: 716px;
`,H=n.p`
  line-height: 1.4;
  margin-top: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 48px;
    margin-top: 28px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 486px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 40px;
  }
`,N=n(y)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 42px;
  border-radius: 42px;
  background: #f3f3f3;
  background: ${({theme:e})=>e.userPopupBtnText};

  color: #161f37;
  color: ${({theme:e})=>e.userPopupText};

  font-weight: 600;
  line-height: 1.285;
  border: 2px solid transparent;
  transition: color ${d};
  transition: background-color ${d};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 15px 47px;
  }

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    color: #f3f3f3;
    background: #161f37;
  }

  &:focus {
    color: #f3f3f3;
    background: #161f37;
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }
`,O=n.div`
  position: relative;

  z-index: 2;
`;n.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
    position: absolute;
    z-index: -1;
    top: 225px;
    left: -145px;
    width: 387px;
    height: 381px;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.3);
    filter: blur(104.8543701171875px);
  }
`;n.div`
  position: absolute;
  width: 549px;
  height: 543px;
  right: -680px;
  top: 100px;

  border-radius: 549px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);

  @media screen and (min-width: 768px) {
    top: -40px;
    right: -680px;
  }

  @media screen and (min-width: 1440px) {
    top: 340px;
    right: -470px;
  }
`;const R=n.div`
  position: absolute;
  left: -590px;
  top: 60px;
  z-index: -1;

  width: 784px;
  height: 849px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`,_="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",U="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",x="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",V="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",X="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function Y(){return i.jsx(B,{children:i.jsx(u,{children:i.jsxs(F,{children:[i.jsxs(G,{children:[i.jsx(v,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(R,{}),i.jsx(H,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(N,{to:"/add",children:"Add drink"})]}),i.jsx(O,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width:1200px)",srcSet:`${x} 1x, ${D} 2x`}),i.jsx("source",{media:"(min-width:768px)",srcSet:`${U} 1x, ${X} 2x`}),i.jsx("source",{media:"(max-width:767px)",srcSet:`${_} 1x, ${V} 2x`}),i.jsx("img",{src:x,alt:"main-coctail"})]})})]})})})}function Q(){const e=g(),{isLoading:t,error:r}=f();return h.useEffect(()=>{e(m())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(Y,{}),t&&i.jsx(b,{}),r&&i.jsx("p",{children:r}),i.jsx(A,{})]})}export{Q as default};
