import{s as i,j as e,N as c,u as l,r as h,g,L as m,t as d,a as b,C as j}from"./index-b978d3bf.js";import{u as f}from"./useDrink-e60cdd3b.js";import{C as k}from"./hero-img-desc-2x-e8906f30.js";import"./drinks-selectors-db0f3074.js";const w=i.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,y=i.li`
  width: 400px;
  height: 438px;
`,x=i.img`
  width: 335px;
  height: 448px;
  border-radius: 8px;
`,D=i.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:n})=>n.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;i.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`;const v=i.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,z=({item:n})=>{const{_id:t,drink:r,drinkThumb:s}=n;return e.jsxs(y,{children:[s?e.jsx(x,{src:s,alt:r}):e.jsx(x,{src:"",alt:r}),e.jsxs(v,{children:[e.jsx(D,{children:r}),e.jsx(c,{to:`/drinks/${t}`,children:"See more"})]})]},t)},I=()=>{const n=l();h.useEffect(()=>{console.log("mainPageDrinks"),n(g())},[n]);const{mainPageDrinks:t,isLoading:r,error:s}=f();return console.log(t),e.jsx(e.Fragment,{children:e.jsx("section",{children:e.jsxs("div",{children:[r?e.jsx(m,{}):Object.keys(t).length>0&&Object.keys(t).map((o,u)=>e.jsxs("div",{children:[e.jsxs("p",{children:[o," "]}),e.jsx(w,{children:t[o].map(a=>e.jsx(z,{item:a},a._id))})]},u)),e.jsx("div",{children:e.jsx(c,{to:"/drinks",children:"See more"})})]})})})},$=i.div`
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
`,C=i.div`
  /* padding-left: 100px; */
`,M=i.h1`
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
`,L=i.p`
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
`,S=i(b)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background: #f3f3f3;
  background: ${({theme:n})=>n.userPopupBtnText};

  color: #161f37;
  color: ${({theme:n})=>n.userPopupText};

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border: 2px solid transparent;
  transition: color ${d};
  transition: background ${d};

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
`,T=i.div`
  position: relative;
  height: 100%;
  z-index: 2;
`,P=i.div`
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
`;i.div`
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
`;const E=i.div`
  position: absolute;
  left: -590px;
  top: 60px;
  z-index: -1;

  width: 784px;
  height: 849px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`,A="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",W="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",p="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",B="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",F="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function G(){return e.jsx("section",{children:e.jsx(j,{children:e.jsxs($,{children:[e.jsxs(C,{children:[e.jsx(M,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(E,{}),e.jsx(L,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),e.jsx(S,{to:"/add",children:"Add drink"})]}),e.jsxs(T,{children:[e.jsx(P,{}),e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width:1200px)",srcSet:`${p} 1x, ${k} 2x`}),e.jsx("source",{media:"(min-width:768px)",srcSet:`${W} 1x, ${F} 2x`}),e.jsx("source",{media:"(max-width:767px)",srcSet:`${A} 1x, ${B} 2x`}),e.jsx("img",{src:p,alt:"main-coctail"})]})]})]})})})}function H(){const n=l(),{isLoading:t,error:r}=f();return h.useEffect(()=>{n(g())},[n]),e.jsxs(e.Fragment,{children:[t&&e.jsx(m,{}),r&&e.jsx("p",{children:r}),e.jsx(G,{}),e.jsx(I,{})]})}export{H as default};
