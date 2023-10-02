import{s as n,t as s,N as l,j as i,u as m,a as b,C as g,L as h,b as k,c as w,r as j,g as y}from"./index-975c6b9a.js";import{C as D}from"./hero-img-desc-2x-e8906f30.js";import{P as v}from"./PageTitle-4170ea27.js";const $=n.section`
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
`,p=n.img`
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
  transition: color ${s};

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
  transition: color ${s};
  transition: background-color ${s};
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
`,W=({item:e})=>{const{_id:r,drink:t,drinkThumb:o}=e;return i.jsxs(L,{children:[o?i.jsx(p,{src:o,alt:t}):i.jsx(p,{src:"",alt:t}),i.jsxs(P,{children:[i.jsx(S,{children:t}),i.jsx(M,{to:`/drinks/${r}`,children:"See more"})]})]},r)},A=()=>{const{mainPageDrinks:e,isLoading:r,error:t}=m(),{width:o}=b(),f=o<768?1:o<1440?2:3,a=Object.keys(e).slice(0,4);return i.jsx(i.Fragment,{children:i.jsx($,{children:i.jsxs(g,{children:[i.jsx(C,{children:r?i.jsx(h,{}):a.length>0&&a.map((d,u)=>i.jsxs(T,{children:[i.jsxs(z,{children:[d," "]}),i.jsx(I,{children:e[d].slice(0,f).map(c=>i.jsx(W,{item:c},c._id))})]},u))}),i.jsx(E,{to:"/drinks",children:"Other drinks"})]})})})},R=n.section`
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
`,B=n.div`
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
`,F=n.div`
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
`,N=n(k)`
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
  transition: color ${s};
  transition: background-color ${s};

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
    top: 110px;
    left: -145px;
    width: 387px;
    height: 381px;
    border-radius: 387px;
    background: rgba(188, 230, 210, 0.3);
    filter: blur(104.8543701171875px);
  }
`;const _="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",G="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",x="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",U="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",V="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function X(){return i.jsx(R,{children:i.jsx(g,{children:i.jsxs(B,{children:[i.jsxs(F,{children:[i.jsx(v,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(H,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(N,{to:"/add",children:"Add drink"})]}),i.jsx(O,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width:1200px)",srcSet:`${x} 1x, ${D} 2x`}),i.jsx("source",{media:"(min-width:768px)",srcSet:`${G} 1x, ${V} 2x`}),i.jsx("source",{media:"(max-width:767px)",srcSet:`${_} 1x, ${U} 2x`}),i.jsx("img",{src:x,alt:"main-coctail"})]})})]})})})}function K(){const e=w(),{isLoading:r,error:t}=m();return j.useEffect(()=>{e(y())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(X,{}),r&&i.jsx(h,{}),t&&i.jsx("p",{children:t}),i.jsx(A,{})]})}export{K as default};
