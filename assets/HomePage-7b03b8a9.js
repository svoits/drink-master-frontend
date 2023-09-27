import{s as i,j as e,t as o,L as p,C as c,u as l,r as h,o as m,p as g}from"./index-fc79be6e.js";import{u as x}from"./useDrink-654f1d76.js";import"./drinks-selectors-47583310.js";const f=i.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,u=i.li`
  width: 400px;
  height: 438px;
`,a=i.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,b=i.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:t})=>t.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,w=i.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,j=i.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,k=({id:t,drink:n,drinkThumb:r})=>e.jsx(e.Fragment,{children:e.jsxs(u,{children:[r?e.jsx(a,{src:r,alt:n}):e.jsx(a,{src:""}),e.jsxs(j,{children:[e.jsx(b,{children:n}),e.jsx(w,{children:"See more"})]})]},t)}),y=()=>{const{mainPageDrinks:t}=x();return e.jsx(e.Fragment,{children:Object.keys(t).length>0&&Object.keys(t).map((n,r)=>e.jsxs("div",{children:[e.jsxs("p",{children:[n," "]}),e.jsx(f,{children:t[n].map(s=>e.jsx(k,{item:s},s._id))})]},r))})},D=i.div`
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
`,z=i.div`
  /* padding-left: 100px; */
`,I=i.h1`
  width: 335px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    width: 641px;
    font-size: 56px;
    line-height: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 715px;
    font-size: 64px;
    line-height: 68px;
  }
`,v=i.p`
  max-width: 335px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    max-width: 619px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 486px;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 40px;
  }
`,M=i(p)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 151px;
  height: 46px;
  border-radius: 42px;
  background: #f3f3f3;

  color: #161f37;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  border: 2px solid transparent;
  transition: color ${o};
  transition: background ${o};

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
`,L=i.div`
  position: relative;
  height: 100%;
  z-index: 2;
`,S=i.div`
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
`,$=i.div`
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
`,H=i.div`
  position: absolute;
  left: -590px;
  top: 60px;
  z-index: -1;

  width: 784px;
  height: 849px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`,E="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",P="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",d="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",T="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",B="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png",C="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function A(){return e.jsx("section",{children:e.jsx(c,{children:e.jsxs(D,{children:[e.jsxs(z,{children:[e.jsx(I,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(H,{}),e.jsx(v,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),e.jsx(M,{to:"/add",children:"Add drink"})]}),e.jsxs(L,{children:[e.jsx(S,{}),e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width:1200px)",srcSet:`${d} 1x, ${C} 2x`}),e.jsx("source",{media:"(min-width:768px)",srcSet:`${P} 1x, ${B} 2x`}),e.jsx("source",{media:"(max-width:767px)",srcSet:`${E} 1x, ${T} 2x`}),e.jsx("img",{src:d,alt:"main-coctail"})]}),e.jsx($,{})]})]})})})}function O(){const t=l(),{isLoading:n,error:r}=x();return h.useEffect(()=>{t(m())},[t]),e.jsxs(e.Fragment,{children:[n&&e.jsx(g,{}),r&&e.jsx("p",{children:r}),e.jsx(A,{}),e.jsx(y,{})]})}export{O as default};
