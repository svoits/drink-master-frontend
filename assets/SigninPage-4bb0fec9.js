import{r as w,u as x,j as s,F as j,k as g,Q as n}from"./index-7d55b1b4.js";import{P as S}from"./PageTitle-0b15f5b6.js";import{c as P,a as i}from"./index.esm-e44bec3f.js";import{a as f,P as o,I as m,F as l,E as I,S as y,T as E,b as F,c as b,B as T,W as k,N as q,L as B}from"./SignupPage.styled-e2607b69.js";import{S as L}from"./WelcomePage.styled-9eec5f47.js";const W={email:"",password:""},$=P().shape({email:i().email("Invalid email format, test@mail.com").required("Email is required").matches(/\.(com|net)$/,"Email must end with .com or .net"),password:i().min(3,"Password must be 3 characters at minimum").required("Password is required").matches(/[a-zA-Z]/,"Password must contain at least one letter").matches(/[0-9]/,"Password must contain at least one number")});function A(){const[r,c]=w.useState(!1),d=()=>{c(!r)},u=x(),p=(e,{resetForm:a})=>{const{email:t,password:h}=e;u(g({email:t,password:h})).unwrap().then(()=>n.success("Login  succesfully")).catch(()=>n.error("Something went wrong. Try again")),a()};return s.jsx(j,{initialValues:W,validationSchema:$,onSubmit:p,children:({values:e,errors:a,touched:t})=>s.jsxs(f,{children:[s.jsxs(s.Fragment,{children:[s.jsxs(o,{children:[s.jsx(m,{type:"email",name:"email",placeholder:"Email",error:a.email&&t.email?"true":"false",success:e.email&&!a.email?"true":"false"}),s.jsx(l,{name:"email"}),a.email&&t.email?s.jsx(I,{}):e.email&&!a.email?s.jsx(y,{}):null]}),s.jsxs(o,{children:[s.jsx(m,{type:r?"text":"password",value:e.password,name:"password",placeholder:"Password",error:a.password&&t.password?"true":"false",success:e.password&&!a.password?"true":"false"}),s.jsx(l,{name:"password"}),s.jsx(E,{type:"button",onClick:d,children:r?s.jsx(F,{}):s.jsx(b,{})})]})]}),s.jsx(T,{type:"submit",children:"Sign In"})]})})}function Q(){return s.jsx(s.Fragment,{children:s.jsx(L,{children:s.jsxs(k,{children:[s.jsx(S,{title:"Sign In"}),s.jsx(A,{}),s.jsx(q,{children:s.jsx(B,{to:"/signup",children:" Sign Up"})})]})})})}export{Q as default};
