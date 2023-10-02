import{s as n,t as s,N as p,j as i,u as l,a as k,C as g,L as m,b as u,c as b,r as w,g as j}from"./index-ad01a815.js";import{D as v}from"./stub-823d2b12.js";import{C as D}from"./hero-img-desc-2x-e8906f30.js";import{P as y}from"./PageTitle-13290e97.js";const $=n.section`
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
`,L=n.div``,T=n.h2`
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
`,z=n.li`
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
`,P=n(p)`
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
`,N=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,E=n(p)`
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
`,B=({item:e})=>{const{_id:t,drink:r,drinkThumb:o}=e;return i.jsxs(z,{children:[i.jsx(S,{src:o!==""?o:v,alt:r}),i.jsxs(N,{children:[i.jsx(M,{children:r}),i.jsx(P,{to:`/drinks/${t}`,children:"See more"})]})]},t)},W=()=>{const{mainPageDrinks:e,isLoading:t,error:r}=l(),{width:o}=k(),h=o<768?1:o<1440?2:3,a=Object.keys(e).slice(0,4);return i.jsx(i.Fragment,{children:i.jsx($,{children:i.jsxs(g,{children:[i.jsx(C,{children:t?i.jsx(m,{}):a.length>0&&a.map((d,f)=>i.jsxs(L,{children:[i.jsxs(T,{children:[d," "]}),i.jsx(I,{children:e[d].slice(0,h).map(c=>i.jsx(B,{item:c},c._id))})]},f))}),i.jsx(E,{to:"/drinks",children:"Other drinks"})]})})})},A=n.section`
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
`,R=n.div`
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
`,O=n(u)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 42px;
  border-radius: 42px;

  background: ${({theme:e})=>e.hoverBackgroundColorLink};
  color: ${({theme:e})=>e.hoverColorTextLink};

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
    color: ${({theme:e})=>e.activeNavLinkText};
    background: ${({theme:e})=>e.activeNavLinkBg};
  }

  &:focus {
    color: ${({theme:e})=>e.activeNavLinkText};
    background: ${({theme:e})=>e.activeNavLinkBg};
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
`;const G="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",U="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",x="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",V="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",X="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function Y(){return i.jsx(A,{children:i.jsx(g,{children:i.jsxs(R,{children:[i.jsxs(F,{children:[i.jsx(y,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(H,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(O,{to:"/add",children:"Add drink"})]}),i.jsx(_,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width:1200px)",srcSet:`${x} 1x, ${D} 2x`}),i.jsx("source",{media:"(min-width:768px)",srcSet:`${U} 1x, ${X} 2x`}),i.jsx("source",{media:"(max-width:767px)",srcSet:`${G} 1x, ${V} 2x`}),i.jsx("img",{src:x,alt:"main-coctail"})]})})]})})})}function Z(){const e=b(),{isLoading:t,error:r}=l();return w.useEffect(()=>{e(j())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(Y,{}),t&&i.jsx(m,{}),r&&i.jsx("p",{children:r}),i.jsx(W,{})]})}export{Z as default};
