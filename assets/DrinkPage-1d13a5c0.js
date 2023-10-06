import{s as t,t as m,u as j,c as h,r as g,a1 as I,y as k,a2 as P,j as e,a3 as S,a0 as y,Q as u,a4 as z,a5 as F,i as R,a6 as B,a7 as W,a8 as L,C}from"./index-35fbe8a3.js";import{S as v}from"./stub-33980911.js";import{P as A}from"./PageTitle-c6f3a8f9.js";const E=t.p`
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
`,H=t.p`
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
    color ${m},
    background-color ${m},
    border ${m};

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
`,M=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;
`,_=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`,N=t.div`
  width: 100%;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;

  @media screen and (min-width: 1440px) {
    margin: 0;
    width: 400px;
  }
`,O=t.div`
  @media screen and (min-width: 1440px) {
    padding-top: 26px;
    max-width: 592px;
  }
`,q=t.div`
  margin-top: 80px;
  background-color: ${({theme:i})=>i.drinkPageIngredientBg};
  border-radius: 8px;
  padding: 28px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,b=(i={})=>({position:"top-right",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",...i}),Q=({id:i,name:s,glass:n,alcoholic:r,description:d,imgPath:o})=>{const a=()=>u.success("Added to favorites",b({icon:e.jsx(z,{})})),c=()=>u.info("Removed from favorites",b({icon:e.jsx(F,{})})),{isLoading:l}=j(),p=h();g.useEffect(()=>{p(I())},[p]);const x=k(P),D=$=>{if(x)return x.find(T=>T._id===$)};return e.jsx(e.Fragment,{children:x&&e.jsxs(_,{children:[e.jsxs(O,{children:[e.jsx(A,{title:s}),e.jsxs(E,{children:[n," / ",r]}),e.jsx(H,{children:d}),D(i)?e.jsx(f,{onClick:()=>p(y(i)).then(()=>c()),disabled:l,children:"Remove from favorite drinks"}):e.jsx(f,{onClick:()=>p(S(i)).then(()=>a()),disabled:l,children:"Add to favorite drinks"})]}),o?e.jsx(N,{children:e.jsx(M,{src:o,alt:"img"})}):e.jsx(q,{children:e.jsx(v,{width:"100%",height:"100%"})})]})})},G=t.div`
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
`,J=t.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`,K=t.div`
  width: 100%;
  /* max-width: 158px; */
  padding: 25px;
  border-radius: 8px;
  background-color: ${({theme:i})=>i.drinkPageIngredientBg};

  @media screen and (min-width: 768px) {
    height: 220px;
    padding: 31px;
  }
`,U=t.p`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`,V=t.p`
  margin-bottom: 0;
  color: ${({theme:i})=>i.subTitleText};
  font-size: 14px;
  line-height: 1.29;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.25;
  }
`,X=t.div`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
  }
`,Y=({title:i,measure:s,quantity:n,images:r})=>e.jsxs(e.Fragment,{children:[e.jsx(K,{children:r.ingredientThumb===""?e.jsx(X,{children:e.jsx(v,{width:"100%",height:"100%"})}):e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:r.ingredientThumb}),e.jsx("source",{media:"(min-width: 768px)",srcSet:r["thumb-medium"]}),e.jsx("source",{media:"(min-width: 375px)",srcSet:r["thumb-small"]}),e.jsx(J,{src:r.ingredientThumb,alt:"ingredient photo"})]})}),e.jsxs(G,{children:[e.jsx(U,{children:i}),e.jsx(V,{children:n?`${n} ${s}`:s})]})]}),Z=t.h2`
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
`,ee=t.ul`
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
`,ie=({ingredients:i})=>{const s=h();g.useEffect(()=>{s(R())},[s]);const{drinks:n}=j(),r=n[0].ingredients;return e.jsx(e.Fragment,{children:r.length>0&&e.jsxs(e.Fragment,{children:[" ",e.jsx(Z,{children:"Ingredients"}),e.jsx(ee,{children:i.map(d=>{const o=r.find(c=>c._id===d.ingredientId),a={ingredientThumb:"","thumb-medium":"","thumb-small":""};return o&&(a.ingredientThumb=o.ingredientThumb,a["thumb-medium"]=o["thumb-medium"],a["thumb-small"]=o["thumb-small"]),e.jsx("li",{children:e.jsx(Y,{title:d.title,measure:d.measure,quantity:d.quantity,images:a})},d.ingredientId)})})]})})},w="/drink-master-frontend/assets/recipe-default-mobile-024f5e03.jpg",te="/drink-master-frontend/assets/recipe-default-mobile@2x-087cb7d6.jpg",ne="/drink-master-frontend/assets/recipe-default-tablet-d31df6dd.jpg",re="/drink-master-frontend/assets/recipe-default-tablet@2x-026033bc.jpg",se="/drink-master-frontend/assets/recipe-default-desktop-0b296897.jpg",de="/drink-master-frontend/assets/recipe-default-desktop@2x-1473f0df.jpg",oe=t.h2`
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
`,ae=t.p`
  color: ${({theme:i})=>i.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;
  margin-top: 40px;
  margin-bottom: 0;
  overflow-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.375;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
`,pe=t.img`
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
`,ce=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
    margin-top: 60px;
    justify-content: flex-end;
  }
`,xe=({instructions:i})=>e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:"Recipe Preparation"}),e.jsxs(ce,{children:[e.jsx(ae,{children:i}),e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${se} 1x, ${de} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${ne} 1x, ${re} 2x`}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${w} 1x, ${te} 2x`}),e.jsx(pe,{src:w,alt:"drinks photo"})]})]})]}),me=t.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
`;function ue(){const i=h(),{drinkId:s}=B(),n=k(r=>W(r,s));return g.useEffect(()=>{i(L(s))},[i,s]),e.jsx(me,{children:e.jsx(C,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(Q,{id:n._id,name:n.drink,glass:n.glass,alcoholic:n.alcoholic,description:n.description,imgPath:n.drinkThumb}),e.jsx(ie,{ingredients:n.ingredients}),e.jsx(xe,{instructions:n.instructions})]})})})}export{ue as default};
