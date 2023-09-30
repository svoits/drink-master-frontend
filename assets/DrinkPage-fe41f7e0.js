import{s as t,t as l,a as c,r as h,W as $,d as m,j as e,X as I,V as z,Y as P,Z as u,$ as S,a0 as R,i as y,a1 as W,a2 as B,C as F}from"./index-f7d10a81.js";import{u as L}from"./useDrink-46dde5f5.js";import{a as C,b as A}from"./drinks-selectors-db0f3074.js";import{S as j}from"./stub-29c70c96.js";import{a as E}from"./selectors-a7d85374.js";const H=t.h1`
  color: ${({theme:i})=>i.mainText};
  text-shadow:
    0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 56px;
    line-height: 60px;
    margin-top: 140px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 64px;
    line-height: 68px;
    margin-top: 158px;
  }
`,M=t.h3`
  color: ${({theme:i})=>i.subTitleText};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,_=t.p`
  color: ${({theme:i})=>i.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }
`,f=t.button`
  width: 224px;
  height: 46px;
  color: ${({theme:i})=>i.themeSwitcher};
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-top: 40px;

  background-color: ${({theme:i})=>i.mainAccent};
  border-radius: 42px;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    color ${l},
    background-color ${l};

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
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
    width: 250px;
    height: 54px;
    font-size: 16px;
  }
`,N=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,O=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 249px;
  }
`,Q=t.div`
  width: 335px;
  height: 400px;
  margin-top: 80px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,V=t.div`
  @media screen and (min-width: 1440px) {
    max-width: 593px;
  }
`,X=t.div`
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
`,w=(i={})=>({position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored",...i}),Y=({id:i,name:s,glass:n,alcoholic:r,description:o,imgPath:d})=>{const p=()=>u.success("Added to favorites",w({icon:e.jsx(S,{})})),k=()=>u.info("Removed from favorites",w({icon:e.jsx(R,{})})),{isLoading:g}=L(),a=c();h.useEffect(()=>{a($())},[a]);const x=m(C),v=D=>{if(x)return x.find(T=>T._id===D)};return e.jsx(e.Fragment,{children:x&&e.jsxs(O,{children:[e.jsxs(V,{children:[e.jsx(H,{children:s}),e.jsxs(M,{children:[n," / ",r]}),e.jsx(_,{children:o}),v(i)?e.jsx(f,{onClick:()=>a(z(i)).then(()=>k()),disabled:g,children:"Remove from favorite drinks"}):e.jsx(f,{onClick:()=>a(I(i)).then(()=>p()),disabled:g,children:"Add to favorite drinks"}),e.jsx(P,{icon:!1})]}),d?e.jsx(Q,{children:e.jsx(N,{src:d,alt:"img"})}):e.jsx(X,{children:e.jsx(j,{})})]})})},Z=t.div`
  width: 157px;
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: ${({theme:i})=>i.mainText};
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 220px;
    font-size: 18px;
    line-height: 24px;
    margin-top: 14px;
  }
`,q=t.img`
  width: 107px;
  height: 107px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
`,G=t.div`
  width: 157px;
  height: 157px;
  padding: 25px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 31px;
`,J=t.p`
  width: 100px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`,K=t.p`
  margin-bottom: 0;
  color: ${({theme:i})=>i.subTitleText};
  font-size: 14px;
  line-height: 18px;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,U=t.div`
  width: 107px;
  height: 107px;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
`,ee=({id:i,title:s,measure:n,images:r})=>e.jsxs(e.Fragment,{children:[e.jsx(G,{children:r.ingredientThumb===""?e.jsx(U,{children:e.jsx(j,{width:"100%",height:"100%"})}):e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:r.ingredientThumb}),e.jsx("source",{media:"(min-width: 768px)",srcSet:r["thumb-medium"]}),e.jsx("source",{media:"(min-width: 375px)",srcSet:r["thumb-small"]}),e.jsx(q,{src:r.ingredientThumb,alt:"ingredient photo"})]})}),e.jsxs(Z,{children:[e.jsx(J,{children:s}),e.jsx(K,{children:n})]})]}),ie=t.h4`
  color: ${({theme:i})=>i.subTitleText};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 18px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`,te=t.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 21px;
  row-gap: 20px;
  margin-top: 42px;

  @media screen and (min-width: 768px) {
    column-gap: 22px;
    row-gap: 22px;
    margin-top: 24px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 35px;
  }
`,ne=({ingredients:i})=>{const s=c();h.useEffect(()=>{s(y())},[s]);const n=m(E);return e.jsxs("div",{children:[e.jsx(ie,{children:"Ingredients"}),n.length&&e.jsx(te,{children:i.map(r=>{const o=n.find(p=>p._id===r.ingredientId),d={ingredientThumb:"","thumb-medium":"","thumb-small":""};return o&&(d.ingredientThumb=o.ingredientThumb,d["thumb-medium"]=o["thumb-medium"],d["thumb-small"]=o["thumb-small"]),e.jsx("div",{children:e.jsx(ee,{id:r.ingredientId,title:r.title,measure:r.measure,images:d})},r.ingredientId)})})]})},b="/drink-master-frontend/assets/recipe-default-mobile-024f5e03.jpg",re="/drink-master-frontend/assets/recipe-default-mobile@2x-087cb7d6.jpg",se="/drink-master-frontend/assets/recipe-default-tablet-d31df6dd.jpg",de="/drink-master-frontend/assets/recipe-default-tablet@2x-026033bc.jpg",oe="/drink-master-frontend/assets/recipe-default-desktop-0b296897.jpg",ae="/drink-master-frontend/assets/recipe-default-desktop@2x-1473f0df.jpg",pe=t.h2`
  color: ${({theme:i})=>i.mainText};
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
  margin-top: 80px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 44px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`,xe=t.p`
  color: ${({theme:i})=>i.mainText};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 40px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 60px;
  }
`,ce=t.img`
  width: 335px;
  height: 430px;
  margin-top: 40px;
  margin-bottom: 80px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 430px;
  }

  @media screen and (min-width: 1440px) {
    width: 631px;
    height: 480px;
  }
`,he=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
  }
`,me=({instructions:i})=>e.jsxs(e.Fragment,{children:[e.jsx(pe,{children:"Recipe Preparation"}),e.jsxs(he,{children:[e.jsx(xe,{children:i}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${oe} 1x, ${ae} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${se} 1x, ${de} 2x`}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${b} 1x, ${re} 2x`}),e.jsx(ce,{src:b,alt:"drins photo"})]})})]})]}),ge=t.div`
  background-color: ${({theme:i})=>i.mainBackground};
`;function je(){const i=c(),{drinkId:s}=W(),n=m(r=>A(r,s));return h.useEffect(()=>{i(B(s))},[i]),e.jsx(ge,{children:e.jsx(F,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(Y,{id:n._id,name:n.drink,glass:n.glass,alcoholic:n.alcoholic,description:n.description,imgPath:n.drinkThumb}),e.jsx(ne,{ingredients:n.ingredients}),e.jsx(me,{instructions:n.instructions})]})})})}export{je as default};
