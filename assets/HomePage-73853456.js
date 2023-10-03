import{s as n,t,N as p,j as i,u as m,a as b,C as l,L as g,b as u,c as k,r as w,g as j}from"./index-a9a8bd60.js";import{D as $}from"./stub-8141962f.js";import{C as D}from"./hero-img-desc-2x-e8906f30.js";import{P as y}from"./PageTitle-355f3a2e.js";const v=n.section`
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-bottom: 140px;
  }
`,B=n.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  @media screen and (min-width: 768px) {
    row-gap: 80px;
  }
`,T=n.div``,C=n.h2`
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
`,L=n.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 8px;
  background: #161f37;
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
`,M=n(p)`
  font-weight: 500;
  line-height: 18px;
  white-space: nowrap;

  color: ${({theme:e})=>e.subTitleText};
  transition: color ${t};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.subTitleTextHover};
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,H=n.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
`,P=n(p)`
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
    color ${t},
    background-color ${t},
    border-color ${t};

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
`,E=({item:e})=>{const{_id:r,drink:o,drinkThumb:s}=e;return i.jsxs(z,{children:[i.jsx(L,{src:s!==""?s:$,alt:o}),i.jsxs(H,{children:[i.jsx(S,{children:o}),i.jsx(M,{to:`/drinks/${r}`,children:"See more"})]})]},r)},W=()=>{const{mainPageDrinks:e,isLoading:r,error:o}=m(),{width:s}=b(),h=s<768?1:s<1440?2:3,a=Object.keys(e).slice(0,4);return i.jsx(i.Fragment,{children:i.jsx(v,{children:i.jsxs(l,{children:[i.jsx(B,{children:r?i.jsx(g,{}):a.length>0&&a.map((d,f)=>i.jsxs(T,{children:[i.jsxs(C,{children:[d," "]}),i.jsx(I,{children:e[d].slice(0,h).map(c=>i.jsx(E,{item:c},c._id))})]},f))}),i.jsx(P,{to:"/drinks",children:"Other drinks"})]})})})},A=n.section`
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
`,O=n(u)`
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
    color ${t},
    background-color ${t},
    border-color ${t};

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
`;const G="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",U="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",x="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",V="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",X="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function Y(){return i.jsx(A,{children:i.jsx(l,{children:i.jsxs(R,{children:[i.jsxs(F,{children:[i.jsx(y,{title:"Craft Your Perfect Drink with Drink Master"}),i.jsx(N,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(O,{to:"/add",children:"Add drink"})]}),i.jsx(_,{children:i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width:1200px)",srcSet:`${x} 1x, ${D} 2x`}),i.jsx("source",{media:"(min-width:768px)",srcSet:`${U} 1x, ${X} 2x`}),i.jsx("source",{media:"(max-width:767px)",srcSet:`${G} 1x, ${V} 2x`}),i.jsx("img",{src:x,alt:"main-coctail"})]})})]})})})}function Z(){const e=k(),{isLoading:r,error:o}=m();return w.useEffect(()=>{e(j())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(Y,{}),r&&i.jsx(g,{}),o&&i.jsx("p",{children:o}),i.jsx(W,{})]})}export{Z as default};
