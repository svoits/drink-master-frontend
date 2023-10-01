import{s as t,t as x,u as $,c as m,r as h,W as I,e as g,X as P,j as e,Y as S,V as z,Z as u,$ as y,a0 as R,k as F,a1 as W,a2 as B,a3 as L,C}from"./index-92ebc615.js";import{S as j}from"./stub-a773f534.js";import{P as A}from"./PageTitle-553d684b.js";import{a as E}from"./selectors-a7d85374.js";const H=t.p`
  color: ${({theme:i})=>i.drinkPageSubtitle};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  margin-top: 8px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,M=t.p`
  color: ${({theme:i})=>i.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  margin-top: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }
`,f=t.button`
  padding: 13.5px 39px;
  color: ${({theme:i})=>i.themeSwitcher};
  font-family: inherit;
  font: inherit;
  font-weight: 600;
  line-height: 1.285;
  margin-top: 40px;

  background-color: ${({theme:i})=>i.mainAccent};
  border-radius: 42px;
  border: 1px solid transparent;
  transition:
    color ${x},
    background-color ${x},
    border ${x};

  &:active {
    border: 1px solid rgba(64, 112, 205, 0.5);
  }

  &:hover,
  &:focus {
    color: ${({theme:i})=>i.activeNavLinkText};
    background: ${({theme:i})=>i.activeNavLinkBg};
  }

  &:disabled {
    color: ${({theme:i})=>i.navLinkBorder};
    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.16;
    padding: 17px 43.5px;
  }
`,_=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,N=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`,O=t.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,Q=t.div`
  @media screen and (min-width: 1440px) {
    padding-top: 26px;
    max-width: 592px;
  }
`,V=t.div`
  padding: 133px 102px;
  margin-top: 80px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
    padding: 133px 286px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
    padding: 133px 135px;
  }
`,b=(i={})=>({position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",...i}),X=({id:i,name:r,glass:n,alcoholic:s,description:o,imgPath:d})=>{const p=()=>u.success("Added to favorites",b({icon:e.jsx(y,{})})),k=()=>u.info("Removed from favorites",b({icon:e.jsx(R,{})})),{isLoading:l}=$(),a=m();h.useEffect(()=>{a(I())},[a]);const c=g(P),v=D=>{if(c)return c.find(T=>T._id===D)};return e.jsx(e.Fragment,{children:c&&e.jsxs(N,{children:[e.jsxs(Q,{children:[e.jsx(A,{title:r}),e.jsxs(H,{children:[n," / ",s]}),e.jsx(M,{children:o}),v(i)?e.jsx(f,{onClick:()=>a(z(i)).then(()=>k()),disabled:l,children:"Remove from favorite drinks"}):e.jsx(f,{onClick:()=>a(S(i)).then(()=>p()),disabled:l,children:"Add to favorite drinks"})]}),d?e.jsx(O,{children:e.jsx(_,{src:d,alt:"img"})}):e.jsx(V,{children:e.jsx(j,{})})]})})},Y=t.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: ${({theme:i})=>i.mainText};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    margin-top: 14px;
  }
`,Z=t.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`,q=t.div`
  width: 100%;
  /* max-width: 158px; */
  padding: 25px;
  border-radius: 8px;
  background-color: ${({theme:i})=>i.drinkPageIngredientBg};

  @media screen and (min-width: 768px) {
    height: 220px;
    padding: 31px;
  }
`,G=t.p`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`,J=t.p`
  margin-bottom: 0;
  color: ${({theme:i})=>i.subTitleText};
  font-size: 14px;
  line-height: 1.29;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,K=t.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`,U=({title:i,measure:r,images:n})=>e.jsxs(e.Fragment,{children:[e.jsx(q,{children:n.ingredientThumb===""?e.jsx(K,{children:e.jsx(j,{width:"100%",height:"100%"})}):e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:n.ingredientThumb}),e.jsx("source",{media:"(min-width: 768px)",srcSet:n["thumb-medium"]}),e.jsx("source",{media:"(min-width: 375px)",srcSet:n["thumb-small"]}),e.jsx(Z,{src:n.ingredientThumb,alt:"ingredient photo"})]})}),e.jsxs(Y,{children:[e.jsx(G,{children:i}),e.jsx(J,{children:r})]})]}),ee=t.h2`
  color: ${({theme:i})=>i.drinkPageSubtitle};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  margin-top: 18px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`,ie=t.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  margin-top: 42px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 22px;
    grid-row-gap: 22px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(5, 1fr);

    grid-column-gap: 35px;
    grid-row-gap: 35px;
  }
`,te=({ingredients:i})=>{const r=m();h.useEffect(()=>{r(F())},[r]);const n=g(E);return e.jsxs(e.Fragment,{children:[e.jsx(ee,{children:"Ingredients"}),n.length&&e.jsx(ie,{children:i.map(s=>{const o=n.find(p=>p._id===s.ingredientId),d={ingredientThumb:"","thumb-medium":"","thumb-small":""};return o&&(d.ingredientThumb=o.ingredientThumb,d["thumb-medium"]=o["thumb-medium"],d["thumb-small"]=o["thumb-small"]),e.jsx("li",{children:e.jsx(U,{title:s.title,measure:s.measure,images:d})},s.ingredientId)})})]})},w="/drink-master-frontend/assets/recipe-default-mobile-024f5e03.jpg",ne="/drink-master-frontend/assets/recipe-default-mobile@2x-087cb7d6.jpg",re="/drink-master-frontend/assets/recipe-default-tablet-d31df6dd.jpg",se="/drink-master-frontend/assets/recipe-default-tablet@2x-026033bc.jpg",de="/drink-master-frontend/assets/recipe-default-desktop-0b296897.jpg",oe="/drink-master-frontend/assets/recipe-default-desktop@2x-1473f0df.jpg",ae=t.h2`
  color: ${({theme:i})=>i.mainText};
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`,pe=t.p`
  color: ${({theme:i})=>i.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;
  margin-top: 40px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`,ce=t.img`
  width: 100%;
  height: 430px;
  object-fit: cover;
  margin-top: 40px;
  border-radius: 10px;

  @media screen and (min-width: 1440px) {
    margin: 0;
    height: 480px;
    min-width: 631px;
  }
`,xe=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,me=({instructions:i})=>e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:"Recipe Preparation"}),e.jsxs(xe,{children:[e.jsx(pe,{children:i}),e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${de} 1x, ${oe} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${re} 1x, ${se} 2x`}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${w} 1x, ${ne} 2x`}),e.jsx(ce,{src:w,alt:"drinks photo"})]})]})]}),he=t.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`;function be(){const i=m(),{drinkId:r}=W(),n=g(s=>B(s,r));return h.useEffect(()=>{i(L(r))},[i,r]),e.jsx(he,{children:e.jsx(C,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(X,{id:n._id,name:n.drink,glass:n.glass,alcoholic:n.alcoholic,description:n.description,imgPath:n.drinkThumb}),e.jsx(te,{ingredients:n.ingredients}),e.jsx(me,{instructions:n.instructions})]})})})}export{be as default};
