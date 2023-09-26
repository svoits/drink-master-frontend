import{l as r,s as t,j as e,m as c,n as l,o as g,t as a,L as h,C as m,u as f,r as u,p as b,q as w}from"./index-7a2156fc.js";import{s as j,a as k,b as y}from"./drinks-selectors-571ed20b.js";const p=()=>{const n=r(j),i=r(k),s=r(y);return{isLoading:n,drinks:i,error:s}},D=t.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,I=t.li`
  width: 400px;
  height: 438px;
`,d=t.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,z=t.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:n})=>n.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,L=t.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,v=t.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,M=({id:n,drink:i,drinkThumb:s})=>e.jsx(e.Fragment,{children:e.jsxs(I,{children:[s?e.jsx(d,{src:s,alt:i}):e.jsx(d,{src:""}),e.jsxs(v,{children:[e.jsx(z,{children:i}),e.jsx(L,{children:"See more"})]})]},n)}),S=()=>{const{drinks:n}=p();return console.log(n),e.jsx(e.Fragment,{children:Object.keys(n).length>0&&Object.keys(n).map((i,s)=>e.jsxs("div",{children:[e.jsxs("p",{children:[i," "]}),e.jsx(D,{children:n[i].map(o=>e.jsx(M,{item:o},o._id))})]},s))})},$=()=>{const n=r(c),i=r(l),s=r(g);return{isLoggedIn:n,name:i,user:s}},H=t.div`
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
`,E=t.div`
  /* padding-left: 100px; */
`,T=t.h1`
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
`,A=t.p`
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
`,B=t(h)`
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
`,C=t.div`
  position: relative;
  height: 100%;
  z-index: 2;
`,P=t.div`
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
`,F=t.div`
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
`,U=t.div`
  position: absolute;
  left: -590px;
  top: 60px;
  z-index: -1;

  width: 784px;
  height: 849px;

  border-radius: 849px;
  background: rgba(64, 112, 205, 0.5);
  filter: blur(104.8543701171875px);
`,W="/drink-master-frontend/assets/hero-img-mobile-1x-e307f486.png",G="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",x="/drink-master-frontend/assets/hero-img-desc-1x-42dd7e18.png",O="/drink-master-frontend/assets/hero-img-mobile-2x-f9eefe96.png",Y="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png",q="/drink-master-frontend/assets/hero-img-desc-2x-9ccd0b0a.png";function N(){return e.jsx("section",{children:e.jsx(m,{children:e.jsxs(H,{children:[e.jsxs(E,{children:[e.jsx(T,{children:"Craft Your Perfect Drink with Drink Master"}),e.jsx(U,{}),e.jsx(A,{children:"Unlock your inner mixologist with Drink Master, your one-stop destination for exploring, crafting, and mastering the world`s finest beverages."}),e.jsx(B,{to:"/add",children:"Add drink"})]}),e.jsxs(C,{children:[e.jsx(P,{}),e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width:1200px)",srcSet:`${x} 1x, ${q} 2x`}),e.jsx("source",{media:"(min-width:768px)",srcSet:`${G} 1x, ${Y} 2x`}),e.jsx("source",{media:"(max-width:767px)",srcSet:`${W} 1x, ${O} 2x`}),e.jsx("img",{src:x,alt:"main-coctail"})]}),e.jsx(F,{})]})]})})})}function X(){const n=f(),{isLoggedIn:i}=$(),{isLoading:s,error:o}=p();return u.useEffect(()=>{i&&n(b())},[n,i]),e.jsxs(e.Fragment,{children:[s&&e.jsx(w,{}),o&&e.jsx("p",{children:o}),e.jsx(N,{}),e.jsx(S,{})]})}export{X as default};
