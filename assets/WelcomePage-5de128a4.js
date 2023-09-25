import{s as i,N as r,j as e,C as a}from"./index-7bf67d03.js";import{S as s,B as t,W as c,a as d,b as l}from"./WelcomePage.styled-53195713.js";const o=i(r)`
  text-decoration: none;
  background-color: transparent;
  border-radius: 42px;
  padding: 14px 40px;
  color: ${({theme:n})=>n.mainText};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 1px solid rgba(243, 243, 243, 0.2);
  &:hover {
    background-color: ${({theme:n})=>n.mainText};
    color: #161f37;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`,p=i.nav`
  display: flex;
  gap: 14px;
`;function x(){return e.jsxs(p,{children:[e.jsx(o,{to:"/signup",children:"Sign Up"}),e.jsx(o,{to:"/signin",children:"Sign In"})]})}function m(){return e.jsx(e.Fragment,{children:e.jsxs(s,{children:[e.jsx(t,{}),e.jsx(a,{children:e.jsxs(c,{children:[e.jsx(d,{children:"Welcome to the app!"}),e.jsx(l,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),e.jsx(x,{})]})})]})})}export{m as default};
