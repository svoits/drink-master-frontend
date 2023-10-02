import{s as n,t as o,N as x,j as i,u as l,a as u,C as m,L as g,b,c as k,r as w,g as j}from"./index-c5a9e1b2.js";import{D}from"./stub-f9df9752.js";import{C as y}from"./hero-img-desc-2x-e8906f30.js";import{P as v}from"./PageTitle-4d80790a.js";const $=n.section`
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
`,T=n.div``,I=n.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,z=n.ul`
  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
  }
`,L=n.li`
  width: 100%;
`,S=n.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  background: #161f37;
  @media screen and (min-width: 1440px) {
    height: 400px;
  }
`,M=n.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,P=n(x)`
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;

  color: ${({theme:e})=>e.subTitleText};
  transition: color ${o};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.subTitleTextHover};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,E=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,W=n(x)`
  display: block;
  width: 185px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 14px 40px;

  background: ${({theme:e})=>e.hoverBackgroundColorLink};
  color: ${({theme:e})=>e.themeSwitcher};
  border: 2px solid transparent;
  border-radius: 42px;
  transition: color ${o};
  transition: background-color ${o};
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
`,A=({item:e})=>{const{_id:t,drink:r,drinkThumb:s}=e;return i.jsxs(L,{children:[i.jsx(S,{src:s||D,alt:r}),i.jsxs(E,{children:[i.jsx(M,{children:r}),i.jsx(P,{to:`/drinks/${t}`,children:"See more"})]})]},t)},R=()=>{const{mainPageDrinks:e,isLoading:t,error:r}=l(),{width:s}=u(),h=s<768?1:s<1440?2:3,a=Object.keys(e).slice(0,4);return i.jsx(i.Fragment,{children:i.jsx($,{children:i.jsxs(m,{children:[i.jsx(C,{children:t?i.jsx(g,{}):a.length>0&&a.map((d,f)=>i.jsxs(T,{children:[i.jsxs(I,{children:[d," "]}),i.jsx(z,{children:e[d].slice(0,h).map(c=>i.jsx(A,{item:c},c._id))})]},f))}),i.jsx(W,{to:"/drinks",children:"Other drinks"})]})})})},B=n.section`
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
`,H=n.div`
  max-width: 716px;
`,N=n.p`
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
`,O=n(b)`
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
  transition: color ${o};
  transition: background-color ${o};

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
`,_=n.div`
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
`;const G="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",U="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",p="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",V="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",X="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function Y(){return i.jsx(B,{children:i.jsx(m,{children:i.jsxs(F,{children:[i.jsxs(H,{children:[i.jsx(v,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(N,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(O,{to:"/add",children:"Add drink"})]}),i.jsx(_,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width:1200px)",srcSet:`${p} 1x, ${y} 2x`}),i.jsx("source",{media:"(min-width:768px)",srcSet:`${U} 1x, ${X} 2x`}),i.jsx("source",{media:"(max-width:767px)",srcSet:`${G} 1x, ${V} 2x`}),i.jsx("img",{src:p,alt:"main-coctail"})]})})]})})})}function Z(){const e=k(),{isLoading:t,error:r}=l();return w.useEffect(()=>{e(j())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(Y,{}),t&&i.jsx(g,{}),r&&i.jsx("p",{children:r}),i.jsx(R,{})]})}export{Z as default};
