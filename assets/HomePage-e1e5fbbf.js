import{l as r,s as i,j as e,m as l,n as x,o as p,u as g,r as d,p as m,L as h}from"./index-7741aceb.js";import{s as f,a as j,b as u}from"./drinks-selectors-b8032fb2.js";const a=()=>{const s=r(f),n=r(j),t=r(u);return{isLoading:s,drinks:n,error:t}},k=i.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,D=i.li`
  width: 400px;
  height: 438px;
`,c=i.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,I=i.p`
  font-family: Manrope;
  color: #f3f3f3;
  color: ${({theme:s})=>s.mainText};
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,L=i.p`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: right;
  color: #f3f3f380;
`,w=i.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,y=({id:s,drink:n,drinkThumb:t})=>e.jsx(e.Fragment,{children:e.jsxs(D,{children:[t?e.jsx(c,{src:t,alt:n}):e.jsx(c,{src:""}),e.jsxs(w,{children:[e.jsx(I,{children:n}),e.jsx(L,{children:"See more"})]})]},s)}),H=()=>{const{drinks:s}=a();return console.log(s),e.jsx(e.Fragment,{children:Object.keys(s).length>0&&Object.keys(s).map((n,t)=>e.jsxs("div",{children:[e.jsxs("p",{children:[n," "]}),e.jsx(k,{children:s[n].map(o=>e.jsx(y,{item:o},o._id))})]},t))})},E=()=>{const s=r(l),n=r(x),t=r(p);return{isLoggedIn:s,name:n,user:t}};function F(){const s=g(),{isLoggedIn:n}=E(),{isLoading:t,error:o}=a();return d.useEffect(()=>{n&&s(m())},[s,n]),e.jsxs(e.Fragment,{children:[t&&e.jsx(h,{}),o&&e.jsx("p",{children:o}),e.jsx("div",{children:"FirstBlock"}),e.jsx(H,{})]})}export{F as default};
