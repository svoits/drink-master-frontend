import{s as i,t as s,N as m,X as j,c as f,j as e,Y as v,u as y,a as D,r as c,Z as P,C as S,L as F}from"./index-3681b435.js";import{D as C,P as z}from"./PageTitle-56af4459.js";import{C as I}from"./hero-img-desc-2x-e8906f30.js";import{P as L}from"./Paginator-2a2e9859.js";const $=i.li`
  margin-left: auto;
  margin-right: auto;
`,A=i.img`
  width: 100%;
  border-radius: 8px;
  height: 360px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 342px;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,T=i.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 4px;
  color: var(--text-btn-color);
  opacity: 0.5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.13;
  }
`,E=i.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
  }
`,M=i.p`
  height: 73px;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-top: 18px;
  margin-bottom: 18px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    height: 110px;
    font-size: 16px;
    line-height: 1.38;
    margin-top: 24px;
    margin-bottom: 24px;
    -webkit-line-clamp: 5;
  }

  @media screen and (min-width: 1440px) {
    height: 90px;
    -webkit-line-clamp: 4;
  }
`,N=i.div`
  display: flex;
  column-gap: 8px;
`;i(m)`
  padding: 14px 40px 14px 40px;
  cursor: pointer;
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
`;const R=i(m)`
  border-radius: 42px;
  background-color: #161f37;
  color: #f3f3f3;
  padding: 14px 40px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border: 1px solid transparent;
  transition:
    background-color ${s},
    border-color ${s},
    color ${s};

  &:hover {
    background-color: #f3f3f3;
    color: #161f37;
  }

  @media (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: calc(18 / 16);
  }
`,B=i(j)`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`,Y=i.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 40px;
  border: none;
  padding: 0;
  background-color: #161f37;
  color: #f3f3f3;

  transition:
    background-color ${s},
    color ${s};

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
  }

  &:hover,
  &:focus {
    background-color: #f3f3f3;
    color: #161f37;
  }
`;function _({drink:t}){const n=f(),{_id:o,drink:r,alcoholic:d,drinkThumb:l,description:x}=t,a=()=>{n(v(o))};return e.jsxs($,{children:[e.jsx(A,{src:l||C,alt:r}),e.jsx(E,{children:r}),e.jsx(T,{children:d?"Alcoholic":"NonAlcoholic"}),e.jsx(M,{children:x}),e.jsxs(N,{children:[e.jsx(R,{to:`/drinks/${o}`,children:"See More"}),e.jsx(Y,{onClick:a,children:e.jsx(B,{})})]})]})}const W=i.ul`
  display: grid;
  grid-row-gap: 40px;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 80px;
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 62px;
  }
`;function X({drinks:t}){return e.jsx(W,{children:Array.isArray(t)&&t.map(n=>e.jsx(_,{drink:n},n._id))})}const Z=i.section`
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
  }
`;i.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`;const q=i.div`
  margin: 0 auto;
  padding-top: 91px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 204px;
  row-gap: 32px;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    width: 260px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 67px;
  }
`,G=i.p`
  font-weight: 500;
  line-height: 1.28;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
  }
`,H=i.img`
  width: 100%;
  object-fit: contain;
`,J=i.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;function V(){const t=f(),{total:n,favoriteDrinks:o}=y(),{width:r}=D(),[d,l]=c.useState(""),[x,a]=c.useState(!0),[h,u]=c.useState(1),w=r<768?5:8,p=r<1440?8:9,b=g=>{u(g)};c.useEffect(()=>{a(!0),t(P({page:h,limit:p})).then(()=>a(!1)).catch(g=>{console.error(g),l("Something went wrong, please try later."),a(!1)})},[h,t,p]);const k=Math.ceil(n/p);return e.jsx(Z,{children:e.jsxs(S,{children:[e.jsx(z,{title:"Favorites"}),x&&e.jsx(F,{}),!o.length&&e.jsxs(q,{children:[e.jsx(H,{src:I,alt:"Cocktail"}),e.jsx(G,{children:"You have not added any cocktails yet"})]}),o.length>0&&e.jsx(J,{children:e.jsx(X,{drinks:o})}),d&&e.jsx("div",{children:d}),k>1&&e.jsx(L,{currentPage:h,drinksPerPage:p,totalDrinks:n,onPageChange:b,pageNumbersToShow:w})]})})}export{V as default};
