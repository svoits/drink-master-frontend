import{s as e,j as r,C as i}from"./index-1d07d95e.js";const o=e.section`
  position: relative;
  padding-left: 47px;
  padding-right: 47px;
  padding-top: 188px;
  padding-bottom: 260px;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 520px;
    height: 550px;
    transform: translate(-120%, -60%);
    background: rgba(64, 112, 205, 0.5);
    border-radius: 550px;
    filter: blur(104.8543701171875px);
    z-index: 1;

    @media screen and (min-width: 768px) {
      width: 784px;
      height: 829.931px;
      border-radius: 829.931px;
      top: 130%;
      left: 3%;
      transform: translate(-110%, -120%);
    }
    @media screen and (min-width: 1440px) {
      height: 849px;
      border-radius: 849px;
      left: 8%;
      transform: translate(-120%, -100%);
    }
  }
`,a=e.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,t=e.div`
  color:${({theme:s})=>s.errorFour};
  font-size: 120px;
  font-weight: 600;
  line-height: 1.02;

  @media screen and (min-width: 768px) {
    font-size: 150px;
    line-height: 1.23;
  }
  @media screen and (min-width: 1440px) {
    font-size: 200px;
    line-height: 1;
  }
`,d="/drink-master-frontend/assets/error-coctail-mobile-9e28f2f3.png",c="/drink-master-frontend/assets/error-coctail-mobile@2x-9dbc10cc.png",x="/drink-master-frontend/assets/error-coctail-desc-88019530.png",p="/drink-master-frontend/assets/error-coctail-desc@2x-35a7d91e.png",n="/drink-master-frontend/assets/error-coctail-desc-88019530.png",l="/drink-master-frontend/assets/error-coctail-desc@2x-35a7d91e.png",g=()=>r.jsx(r.Fragment,{children:r.jsx(i,{children:r.jsx(o,{children:r.jsxs(a,{children:[r.jsx(t,{children:"4"}),r.jsxs("picture",{children:[r.jsx("source",{media:"(min-width:1200px)",srcSet:`${n} 1x, ${l} 2x`}),r.jsx("source",{media:"(min-width:768px)",srcSet:`${x} 1x, ${p} 2x`}),r.jsx("source",{media:"(max-width:767.98px)",srcSet:`${d} 1x, ${c} 2x`}),r.jsx("img",{src:n,alt:"cocktail"})]}),r.jsx(t,{children:"4"})]})})})});export{g as default};