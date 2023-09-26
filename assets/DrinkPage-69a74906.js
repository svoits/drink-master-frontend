import{s as t,u as x,r as c,t as j,l as h,j as e,x as k,y as D,z as T,A as v,B as I,C as z}from"./index-920a2eda.js";import{c as $,d as P}from"./drinks-selectors-571ed20b.js";import{a as S}from"./selectors-db944dbc.js";const g="/drink-master-frontend/assets/stub-74419cb3.svg",y=t.h1`
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
`,F=t.h3`
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
`,R=t.p`
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
`,m=t.button`
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
`,B=t.div`
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
`,E=t.div`
  @media screen and (min-width: 1440px) {
    max-width: 593px;
  }
`,C=({id:i,name:s,glass:n,alcoholic:r,description:p,imgPath:d})=>{const o=x();c.useEffect(()=>{o(j())},[o]);const a=h($),u=w=>{if(a)return a.find(b=>b._id===w)},f=d?`${d}`:g;return e.jsx(e.Fragment,{children:a&&e.jsxs(A,{children:[e.jsxs(E,{children:[e.jsx(y,{children:s}),e.jsxs(F,{children:[n," / ",r]}),e.jsx(R,{children:p}),u(i)?e.jsx(m,{onClick:()=>o(D(i)),children:"Delete from favorite drinks"}):e.jsx(m,{onClick:()=>o(k(i)),children:"Add to favorite drinks"})]}),e.jsx(B,{children:e.jsx(W,{src:f,alt:"img"})})]})})},L=t.div`
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
`,M=t.img`
  width: 107px;
  height: 107px;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
`,_=t.div`
  width: 157px;
  height: 157px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 31px;
`,H=t.p`
  width: 100px;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`,U=t.p`
  margin-bottom: 0;
  color: ${({theme:i})=>i.subTitleText};
  font-size: 14px;
  line-height: 18px;
  text-align: end;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 20px;
  }
`,q=({id:i,title:s,measure:n,images:r})=>r.ingredientThumb===""?r.ingredientThumb=g:e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:r.ingredientThumb}),e.jsx("source",{media:"(min-width: 768px)",srcSet:r["thumb-medium"]}),e.jsx("source",{media:"(min-width: 375px)",srcSet:r["thumb-small"]}),e.jsx(M,{src:r.ingredientThumb,alt:"ingredient photo"})]})}),e.jsxs(L,{children:[e.jsx(H,{children:s}),e.jsx(U,{children:n})]})]}),G=t.h4`
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
`,J=t.div`
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
`,K=({ingredients:i})=>{const s=x();c.useEffect(()=>{s(T())},[s]);const n=h(S);return e.jsxs("div",{children:[e.jsx(G,{children:"Ingredients"}),n.length&&e.jsx(J,{children:i.map(r=>{const p=n.find(o=>o._id===r.ingredientId),d={ingredientThumb:"","thumb-medium":"","thumb-small":""};return p&&(d.ingredientThumb=p.ingredientThumb,d["thumb-medium"]=p["thumb-medium"],d["thumb-small"]=p["thumb-small"]),e.jsx("div",{children:e.jsx(q,{id:r.ingredientId,title:r.title,measure:r.measure,images:d})},r.ingredientId)})})]})},l="/drink-master-frontend/assets/recipe-default-mobile-024f5e03.jpg",N="/drink-master-frontend/assets/recipe-default-mobile@2x-087cb7d6.jpg",O="/drink-master-frontend/assets/recipe-default-tablet-d31df6dd.jpg",Q="/drink-master-frontend/assets/recipe-default-tablet@2x-026033bc.jpg",V="/drink-master-frontend/assets/recipe-default-desktop-0b296897.jpg",X="/drink-master-frontend/assets/recipe-default-desktop@2x-1473f0df.jpg",Y=t.h2`
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
`,Z=t.p`
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
`,ee=t.img`
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
`,ie=t.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    column-gap: 60px;
  }
`,te=({instructions:i})=>e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:"Recipe Preparation"}),e.jsxs(ie,{children:[e.jsx(Z,{children:i}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${V} 1x, ${X} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${O} 1x, ${Q} 2x`}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${l} 1x, ${N} 2x`}),e.jsx(ee,{src:l,alt:"drins photo"})]})})]})]}),ne=t.div`
  background-color: ${({theme:i})=>i.mainBackground};
`;function pe(){const i=x(),{drinkId:s}=v(),n=h(r=>P(r,s));return c.useEffect(()=>{i(I(s))},[i]),e.jsx(ne,{children:e.jsx(z,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(C,{id:n._id,name:n.drink,glass:n.glass,alcoholic:n.alcoholic,description:n.description,imgPath:n.drinkThumb}),e.jsx(K,{ingredients:n.ingredients}),e.jsx(te,{instructions:n.instructions})]})})})}export{pe as default};
