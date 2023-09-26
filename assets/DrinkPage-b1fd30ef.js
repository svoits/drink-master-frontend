import{b as t,t as m,a as x,r as c,v as k,u as h,j as e,w as v,x as D,l as T,y as $,z as I,C as z}from"./index-57b64c05.js";import{c as P,d as S}from"./drinks-selectors-4d719f03.js";import{a as y}from"./selectors-db944dbc.js";const u="/drink-master-frontend/assets/stub-74419cb3.svg",F=t.h1`
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
`,R=t.h3`
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
`,B=t.div`
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
`,A=t.div`
  @media screen and (min-width: 1440px) {
    max-width: 593px;
  }
`,C=({id:i,name:s,glass:n,alcoholic:r,description:o,imgPath:d})=>{const p=x();c.useEffect(()=>{p(k())},[p]);const a=h(P),f=b=>{if(a)return a.find(j=>j._id===b)},w=d?`${d}`:u;return e.jsx(e.Fragment,{children:a&&e.jsxs(B,{children:[e.jsxs(A,{children:[e.jsx(F,{children:s}),e.jsxs(R,{children:[n," / ",r]}),e.jsx(L,{children:o}),f(i)?e.jsx(l,{onClick:()=>p(D(i)),children:"Remove from favorite drinks"}):e.jsx(l,{onClick:()=>p(v(i)),children:"Add to favorite drinks"})]}),e.jsx(E,{children:e.jsx(W,{src:w,alt:"img"})})]})})},M=t.div`
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
`,_=t.img`
  width: 107px;
  height: 107px;

  @media screen and (min-width: 768px) {
    width: 157px;
    height: 157px;
`,H=t.div`
  width: 157px;
  height: 157px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgba(22, 31, 55, 0.5);

  @media screen and (min-width: 768px) {
    width: 220px;
    height: 220px;
    padding: 31px;
`,N=t.p`
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
`,q=({id:i,title:s,measure:n,images:r})=>r.ingredientThumb===""?r.ingredientThumb=u:e.jsxs(e.Fragment,{children:[e.jsx(H,{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:r.ingredientThumb}),e.jsx("source",{media:"(min-width: 768px)",srcSet:r["thumb-medium"]}),e.jsx("source",{media:"(min-width: 375px)",srcSet:r["thumb-small"]}),e.jsx(_,{src:r.ingredientThumb,alt:"ingredient photo"})]})}),e.jsxs(M,{children:[e.jsx(N,{children:s}),e.jsx(U,{children:n})]})]}),G=t.h4`
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
`,K=({ingredients:i})=>{const s=x();c.useEffect(()=>{s(T())},[s]);const n=h(y);return e.jsxs("div",{children:[e.jsx(G,{children:"Ingredients"}),n.length&&e.jsx(J,{children:i.map(r=>{const o=n.find(p=>p._id===r.ingredientId),d={ingredientThumb:"","thumb-medium":"","thumb-small":""};return o&&(d.ingredientThumb=o.ingredientThumb,d["thumb-medium"]=o["thumb-medium"],d["thumb-small"]=o["thumb-small"]),e.jsx("div",{children:e.jsx(q,{id:r.ingredientId,title:r.title,measure:r.measure,images:d})},r.ingredientId)})})]})},g="/drink-master-frontend/assets/recipe-default-mobile-024f5e03.jpg",O="/drink-master-frontend/assets/recipe-default-mobile@2x-087cb7d6.jpg",Q="/drink-master-frontend/assets/recipe-default-tablet-d31df6dd.jpg",V="/drink-master-frontend/assets/recipe-default-tablet@2x-026033bc.jpg",X="/drink-master-frontend/assets/recipe-default-desktop-0b296897.jpg",Y="/drink-master-frontend/assets/recipe-default-desktop@2x-1473f0df.jpg",Z=t.h2`
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
`,ne=({instructions:i})=>e.jsxs(e.Fragment,{children:[e.jsx(Z,{children:"Recipe Preparation"}),e.jsxs(te,{children:[e.jsx(ee,{children:i}),e.jsx("div",{children:e.jsxs("picture",{children:[e.jsx("source",{media:"(min-width: 1440px)",srcSet:`${X} 1x, ${Y} 2x`}),e.jsx("source",{media:"(min-width: 768px)",srcSet:`${Q} 1x, ${V} 2x`}),e.jsx("source",{media:"(min-width: 375px)",srcSet:`${g} 1x, ${O} 2x`}),e.jsx(ie,{src:g,alt:"drins photo"})]})})]})]}),re=t.div`
  background-color: ${({theme:i})=>i.mainBackground};
`;function pe(){const i=x(),{drinkId:s}=$(),n=h(r=>S(r,s));return c.useEffect(()=>{i(I(s))},[i]),e.jsx(re,{children:e.jsx(z,{children:n&&e.jsxs(e.Fragment,{children:[e.jsx(C,{id:n._id,name:n.drink,glass:n.glass,alcoholic:n.alcoholic,description:n.description,imgPath:n.drinkThumb}),e.jsx(K,{ingredients:n.ingredients}),e.jsx(ne,{instructions:n.instructions})]})})})}export{pe as default};
