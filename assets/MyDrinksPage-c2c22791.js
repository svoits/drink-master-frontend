import{s as e,j as t}from"./index-ffe2a83b.js";import{r as a}from"./recipes-c8bb5d97.js";import{P as x}from"./PageTitle-5bd2922d.js";const l=e.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  column-gap: 14px;
  row-gap: 80px;
`,g=e.li`
  width: 400px;
  height: 676px;
  // margin-bottom: 80px;
  // &:nth-child(2n){
  //     margin-right: 0;}
`,o=e.img`
  width: 400px;
  height: 400px;
  border-radius: 8px;
`,c=e.h5`
  margin-top: 24px;
  margin-bottom: 0;
  font-family: Manrope;
  color: ${({theme:n})=>n.mainText};
  // color: #f3f3f3;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`,f=e.span`
  margin-top: 4px;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #f3f3f380;
`,h=e.p`
  height: 92px;
  overflow: hidden;

  margin-top: 24px;
  font-family: Manrope;
  color: ${({theme:n})=>n.mainText};
  // color: #f3f3f3;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`,d=e.div`
  margin-top: 24px;
  display: flex;
  gap: 8px;
  align-items: center;
`,m=e.button`
  width: 160px;
  height: 54px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 44px;
  padding-left: 44px;
  // padding: 18px, 44px, 18px, 44px;
  border-radius: 42px;
  border: none;
  gap: 10px;
  // background-color: #161f37;
  background-color: ${({theme:n})=>n.activeNavLinkBg};
  color: ${({theme:n})=>n.mainText};
  // color: #f3f3f3;
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;e.div`
  margin-top: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;const j=()=>t.jsx(t.Fragment,{children:t.jsx(l,{children:a.map(({id:n,drink:i,category:p,description:s,drinkThumb:r})=>t.jsxs(g,{children:[r?t.jsx(o,{src:r,alt:i}):t.jsx(o,{src:""}),t.jsx(c,{children:i}),t.jsxs(f,{children:[" ",p]}),t.jsx(h,{children:s}),t.jsxs(d,{children:[t.jsx(m,{children:"See more"}),t.jsx("button",{children:"Delete"})]})]},n))})});function w(){return t.jsxs(t.Fragment,{children:[t.jsx(x,{}),t.jsx(j,{})]})}export{w as default};
