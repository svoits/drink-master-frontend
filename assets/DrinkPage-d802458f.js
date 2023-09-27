import{s as t,t as m,u as x,r as c,z as k,v as h,j as e,A as D,y as v,x as T,B as $,D as I,C as z}from"./index-8281ffcf.js";import{s as P,a as S}from"./drinks-selectors-47583310.js";import{a as y}from"./selectors-dcee3de9.js";import{r as F}from"./recipe-default-desktop-81da6c38.js";const u="/drink-master-frontend/assets/stub-74419cb3.svg",R=t.h1`
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
`,B=t.h3`
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
`,L=t.p`
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
`,l=t.button`
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
    color ${m},
    background-color ${m};

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
`,W=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 4px;

  @media screen and (min-width: 1440px) {
    width: 400px;
  }
`,A=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    column-gap: 249px;
  }
`,E=t.div`
  width: 335px;
  height: 400px;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    width: 704px;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,C=t.div`
  @media screen and (min-width: 1440px) {
    max-width: 593px;
  }
`,M=({id:i,name:s,glass:n,alcoholic:r,description:o,imgPath:d})=>{const p=x();c.useEffect(()=>{p(k())},[p]);const a=h(P),f=b=>{if(a)return a.find(j=>j._id===b)},w=d?`${d}`:u;return e.jsx(e.Fragment,{children:a&&e.jsxs(A,{children:[e.jsxs(C,{children:[e.jsx(R,{children:s}),e.jsxs(B,{children:[n," / ",r]}),e.jsx(L,{children:o}),f(i)?e.jsx(l,{onClick:()=>p(v(i)),children:"Remove from favorite drinks"}):e.jsx(l,{onClick:()=>p(D(i)),children:"Add to favorite drinks"})]}),e.jsx(E,{children:e.jsx(W,{src:w,alt:"img"})})]})})},_=t.div`
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
`,H=t.img`
  width: 107px;
  height: 107px;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
`,N=t.div`
  width: 157px;
  height: 157px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 31px;
`,U=t.p`
  width: 100px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`,q=t.p`
  margin-bottom: 0;
  color: ${({theme:i})=>i.subTitleText};
  font-size: 14px;
  line-height: 18px;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,G=({id:i,title:s,measure:n,images:r})=>r.ingredientThumb===""?r.ingredientThumb=u:e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:r.ingredientThumb}),e.jsx("source",{media:"(min-width: 768px)",srcSet:r["thumb-medium"]}),e.jsx("source",{media:"(min-width: 375px)",srcSet:r["thumb-small"]}),e.jsx(H,{src:r.ingredientThumb,alt:"ingredient photo"})]})}),e.jsxs(_,{children:[e.jsx(U,{children:s}),e.jsx(q,{children:n})]})]}),J=t.h4`
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
`,K=t.div`
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
`,O=({ingredients:i})=>{const s=x();c.useEffect(()=>{s(T())},[s]);const n=h(y);return e.jsxs("div",{children:[e.jsx(J,{children:"Ingredients"}),n.length&&e.jsx(K,{children:i.map(r=>{const o=n.find(p=>p._id===r.ingredientId),d={ingredientThumb:"","thumb-medium":"","thumb-small":""};return o&&(d.ingredientThumb=o.ingredientThumb,d["thumb-medium"]=o["thumb-medium"],d["thumb-small"]=o["thumb-small"]),e.jsx("div",{children:e.jsx(G,{id:r.ingredientId,title:r.title,measure:r.measure,images:d})},r.ingredientId)})})]})},g="/drink-master-frontend/assets/recipe-default-mobile-024f5e03.jpg",Q="/drink-master-frontend/assets/recipe-default-mobile@2x-087cb7d6.jpg",V="/drink-master-frontend/assets/recipe-default-tablet-d31df6dd.jpg",X="/drink-master-frontend/assets/recipe-default-tablet@2x-026033bc.jpg",Y="/drink-master-frontend/assets/recipe-default-desktop@2x-1473f0df.jpg",Z=t.h2`
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
`,ee=t.p`
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
`,ie=t.img`
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
`,te=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
  }
`,ne=({instructions:i})=>e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:"Recipe Preparation"}),e.jsxs(te,{children:[e.jsx(ee,{children:i}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${F} 1x, ${Y} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${V} 1x, ${X} 2x`}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${g} 1x, ${Q} 2x`}),e.jsx(ie,{src:g,alt:"drins photo"})]})})]})]}),re=t.div`
  background-color: ${({theme:i})=>i.mainBackground};
`;function ae(){const i=x(),{drinkId:s}=$(),n=h(r=>S(r,s));return c.useEffect(()=>{i(I(s))},[i]),e.jsx(re,{children:e.jsx(z,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(M,{id:n._id,name:n.drink,glass:n.glass,alcoholic:n.alcoholic,description:n.description,imgPath:n.drinkThumb}),e.jsx(O,{ingredients:n.ingredients}),e.jsx(ne,{instructions:n.instructions})]})})})}export{ae as default};
