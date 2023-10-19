import{s as n,t as r,N as p,j as i,u as l,a as h,C as m,L as f,b,c as u,r as k,g as w}from"./index-059d999e.js";import{D as j}from"./stub-0063ae73.js";import{C as $}from"./hero-img-desc-2x-e8906f30.js";import{P as D}from"./PageTitle-68aedede.js";const y=n.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }
`,v=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    row-gap: 80px;
  }
`,B=n.div``,T=n.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 1.14;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`,C=n.ul`
  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    column-gap: 20px;
  }
`,I=n.li`
  width: 100%;
`,z=n.img`
  width: 100%;
  height: 360px;
  border-radius: 8px;
  object-fit: ${({placeholder:e})=>e==="true"?"contain":"cover"};
  background-color: #161f37;
  padding: ${({placeholder:e})=>e==="true"?"28px":0};

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
`,L=n(p)`
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;

  color: ${({theme:e})=>e.subTitleText};
  transition: color ${r};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.subTitleTextHover};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,M=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,H=n(p)`
  display: block;
  width: 185px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 15px 41px;
  text-align: center;
  background: ${({theme:e})=>e.basicBtnBg};
  color: ${({theme:e})=>e.basicBtnText};
  border: 1px solid transparent;
  border-radius: 42px;
  font-weight: 500;
  line-height: 1.285;
  transition:
    color ${r},
    background-color ${r},
    border-color ${r};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.basicBtnTextHover};
    background: ${({theme:e})=>e.basicBtnBgHover};
    border-color: ${({theme:e})=>e.basicBtnBorderHover};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 40px;
    margin: 80px auto 0px;
  }
`,P=({item:e})=>{const{_id:t,drink:o,drinkThumb:s}=e;return i.jsxs(I,{children:[i.jsx(z,{src:s||j,alt:o,placeholder:s?"false":"true"}),i.jsxs(M,{children:[i.jsx(S,{children:o}),i.jsx(L,{to:`/drinks/${t}`,children:"See more"})]})]},t)},E=()=>{const{mainPageDrinks:e,isLoading:t}=l(),{width:o}=h(),s=o<768?1:o<1440?2:3,a=Object.keys(e).slice(0,4);return i.jsx(i.Fragment,{children:i.jsx(y,{children:i.jsxs(m,{children:[i.jsx(v,{children:t?i.jsx(f,{}):a.length>0&&a.map((d,g)=>i.jsxs(B,{children:[i.jsxs(T,{children:[d," "]}),i.jsx(C,{children:e[d].slice(0,s).map(c=>i.jsx(P,{item:c},c._id))})]},g))}),!t&&i.jsx(H,{to:"/drinks",children:"Other drinks"})]})})})},W=n.section`
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
`,A=n.div`
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
`,R=n.div`
  max-width: 716px;
`,F=n.p`
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
`,N=n(b)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 43px;
  border-radius: 42px;

  background: ${({theme:e})=>e.basicBtnBg};
  color: ${({theme:e})=>e.basicBtnText};

  font-weight: 600;
  line-height: 1.285;
  border: 1px solid ${({theme:e})=>e.basicBtnBg};
  transition:
    color ${r},
    background-color ${r},
    border-color ${r};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 16px 48px;
  }

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.basicBtnTextHover};
    background: ${({theme:e})=>e.basicBtnBgHover};
    border-color: ${({theme:e})=>e.basicBtnBorderHover};
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
`;const _="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",G="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",x="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",U="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",V="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function X(){return i.jsx(W,{children:i.jsx(m,{children:i.jsxs(A,{children:[i.jsxs(R,{children:[i.jsx(D,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(F,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(N,{to:"/add",children:"Add drink"})]}),i.jsx(O,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width:1200px)",srcSet:`${x} 1x, ${$} 2x`}),i.jsx("source",{media:"(min-width:768px)",srcSet:`${G} 1x, ${V} 2x`}),i.jsx("source",{media:"(max-width:767px)",srcSet:`${_} 1x, ${U} 2x`}),i.jsx("img",{src:x,alt:"main-coctail"})]})})]})})})}function Q(){const e=u(),{error:t}=l();return k.useEffect(()=>{e(w())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(X,{}),t&&i.jsx("p",{children:t}),i.jsx(E,{})]})}export{Q as default};
