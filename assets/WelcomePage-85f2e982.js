import{b as r,t as o,N as t,j as e,C as a}from"./index-57b64c05.js";import{S as s,B as c,W as d,a as l,b as p}from"./WelcomePage.styled-d1544626.js";const i=r(t)`
  text-decoration: none;
  background-color: transparent;
  border-radius: 42px;
  padding: 14px 40px;
  color: ${({theme:n})=>n.mainText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: border-color ${o};

  &:hover {
    background-color: ${({theme:n})=>n.mainText};
    color: #161f37;
    transition: background-color ${o};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`,x=r.nav`
  display: flex;
  gap: 14px;
`;function g(){return e.jsxs(x,{children:[e.jsx(i,{to:"/signup",children:"Sign Up"}),e.jsx(i,{to:"/signin",children:"Sign In"})]})}function u(){return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[e.jsx(c,{}),e.jsx(a,{children:e.jsxs(d,{children:[e.jsx(l,{children:"Welcome to the app!"}),e.jsx(p,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(g,{})]})})]})})}export{u as default};
