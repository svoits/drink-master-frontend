import{s as t,t as a,N as l,u as j,j as i,a as h,r as g,g as m,C as f,L as b,b as y}from"./index-62df3d71.js";import{u}from"./useDrink-13dd26e1.js";import{C as D}from"./hero-img-desc-2x-e8906f30.js";import"./drinks-selectors-db0f3074.js";const v=t.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,z=t.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 24px;
`,$=t.ul`
 
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  

  @media screen and (min-width: 768px) {
    display: flex;
    gap:20px;
  }
`,C=t.li`
  width: 335px;
  height: 360px;
`,p=t.img`
  width: 335px;
  height: 360px;
  border-radius: 8px;
`,I=t.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
 
`,T=t(l)`
  
  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: ${({theme:e})=>e.subTitleText};
  
`,L=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,M=t(l)`
  display: block;
  max-width: 168px;
  min-height: 46px;
  margin: 60px auto;
  padding: 14px 40px;


  background: ${({theme:e})=>e.hoverBackgroundColorLink};
  color: ${({theme:e})=>e.themeSwitcher};
  border: 2px solid transparent;
  border-radius: 42px;
  transition: color ${a};
  transition: background ${a};
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

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
`,S=({item:e,idx:n})=>{const{width:r}=j();if(r<=768&&n>0||r<=1440&&n>1)return"";const{_id:d,drink:o,drinkThumb:s}=e;return i.jsxs(C,{children:[s?i.jsx(p,{src:s,alt:o}):i.jsx(p,{src:"",alt:o}),i.jsxs(L,{children:[i.jsx(I,{children:o}),i.jsx(T,{to:`/drinks/${d}`,children:"See more"})]})]},d)},P=()=>{const e=h();g.useEffect(()=>{e(m())},[e]);const{mainPageDrinks:n,isLoading:r,error:d}=u(),o=Object.keys(n).slice(0,4);return console.log(o),i.jsx(i.Fragment,{children:i.jsx("section",{children:i.jsxs(f,{children:[r?i.jsx(b,{}):o.length>0&&o.map((s,k)=>i.jsxs(v,{children:[i.jsxs(z,{children:[s," "]}),i.jsx($,{children:n[s].map((x,w)=>i.jsx(S,{item:x,idx:w},x._id))})]},k)),i.jsx("div",{children:i.jsx(M,{to:"/drinks",children:"Other drinks"})})]})})})},E=t.div`
  padding-top: 80px;
  padding-bottom: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 47px;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    padding-bottom: 123px;
    gap: 54px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 185px;
    padding-bottom: 218px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 130px;
  }
`,A=t.div`
  /* padding-left: 100px; */
`,B=t.h1`
  width: 335px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 641px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1440px) {
    width: 715px;
    font-size: 64px;
    line-height: 1.06;
  }
`,W=t.p`
  max-width: 335px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 486px;
    font-size: 18px;
    line-height: 1.3;
    margin-bottom: 40px;
  }
`,F=t(y)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background: #f3f3f3;
  background: ${({theme:e})=>e.userPopupBtnText};

  color: #161f37;
  color: ${({theme:e})=>e.userPopupText};

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border: 2px solid transparent;
  transition: color ${a};
  transition: background ${a};

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    width: 160px;
    height: 54px;
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
`,G=t.div`
  position: relative;
  height: 100%;
  z-index: 2;
`,N=t.div`
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
`;t.div`
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
`;const O=t.div`
  position: absolute;
  left: -590px;
  top: 60px;
  z-index: -1;

  width: 784px;
  height: 849px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`,R="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",Y="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",c="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",_="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",H="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function U(){return i.jsx("section",{children:i.jsx(f,{children:i.jsxs(E,{children:[i.jsxs(A,{children:[i.jsx(B,{children:"Craft Your Perfect Drink with Drink Master"}),i.jsx(O,{}),i.jsx(W,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),i.jsx(F,{to:"/add",children:"Add drink"})]}),i.jsxs(G,{children:[i.jsx(N,{}),i.jsxs("picture",{children:[i.jsx("source",{media:"(min-width:1200px)",srcSet:`${c} 1x, ${D} 2x`}),i.jsx("source",{media:"(min-width:768px)",srcSet:`${Y} 1x, ${H} 2x`}),i.jsx("source",{media:"(max-width:767px)",srcSet:`${R} 1x, ${_} 2x`}),i.jsx("img",{src:c,alt:"main-coctail"})]})]})]})})})}function K(){const e=h(),{isLoading:n,error:r}=u();return g.useEffect(()=>{e(m())},[e]),i.jsxs(i.Fragment,{children:[i.jsx(U,{}),n&&i.jsx(b,{}),r&&i.jsx("p",{children:r}),i.jsx(P,{})]})}export{K as default};
