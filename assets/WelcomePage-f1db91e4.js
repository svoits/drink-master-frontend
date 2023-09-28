import{s as r,t as n,N as t,j as o}from"./index-7d55b1b4.js";import{S as a,W as s,a as c,b as l}from"./WelcomePage.styled-9eec5f47.js";const i=r(t)`
  text-decoration: none;
  background-color: transparent;
  border-radius: 42px;
  padding: 14px 40px;
  color: #f3f3f3;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 1px solid rgba(243, 243, 243, 0.2);
  transition: border-color ${n};

  &:hover {
    background-color: ${({theme:e})=>e.hoverBackgroundColorLink};
    color: ${({theme:e})=>e.colorTextBtn};
    transition: background-color ${n};
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.12;
  }
`,d=r.nav`
  display: flex;
  gap: 14px;
`;function p(){return o.jsxs(d,{children:[o.jsx(i,{to:"/signup",children:"Sign Up"}),o.jsx(i,{to:"/signin",children:"Sign In"})]})}function g(){return o.jsx(o.Fragment,{children:o.jsx(a,{children:o.jsxs(s,{children:[o.jsx(c,{children:"Welcome to the app!"}),o.jsx(l,{children:"This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time."}),o.jsx(p,{})]})})})}export{g as default};
