import{r as s,_ as le,o as j,p as de,R as A,T as N,q as $,v as Z,G as K,s as d,t as w,F as B,d as C,f as ee,h as T,c as V,e as E,i as se,w as ce,j as n,m as O,A as pe,E as I,a as ue,k as xe,x as he,b as me,y as ge,S as fe,z as be,B as ve,L as we,C as ye}from"./index-92ebc615.js";import{_ as Se,m as ke,d as $e,a as D,b as M,S as R}from"./react-select.esm-ad6b314e.js";import{P as je}from"./PageTitle-553d684b.js";function L(e,t){var i=function(r){return t&&s.isValidElement(r)?t(r):r},a=Object.create(null);return e&&s.Children.map(e,function(o){return o}).forEach(function(o){a[o.key]=i(o)}),a}function _e(e,t){e=e||{},t=t||{};function i(m){return m in t?t[m]:e[m]}var a=Object.create(null),o=[];for(var r in e)r in t?o.length&&(a[r]=o,o=[]):o.push(r);var l,c={};for(var p in t){if(a[p])for(l=0;l<a[p].length;l++){var x=a[p][l];c[a[p][l]]=i(x)}c[p]=i(p)}for(l=0;l<o.length;l++)c[o[l]]=i(o[l]);return c}function _(e,t,i){return i[t]!=null?i[t]:e.props[t]}function Ce(e,t){return L(e.children,function(i){return s.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:_(i,"appear",e),enter:_(i,"enter",e),exit:_(i,"exit",e)})})}function Te(e,t,i){var a=L(e.children),o=_e(t,a);return Object.keys(o).forEach(function(r){var l=o[r];if(s.isValidElement(l)){var c=r in t,p=r in a,x=t[r],m=s.isValidElement(x)&&!x.props.in;p&&(!c||m)?o[r]=s.cloneElement(l,{onExited:i.bind(null,l),in:!0,exit:_(l,"exit",e),enter:_(l,"enter",e)}):!p&&c&&!m?o[r]=s.cloneElement(l,{in:!1}):p&&c&&s.isValidElement(x)&&(o[r]=s.cloneElement(l,{onExited:i.bind(null,l),in:x.props.in,exit:_(l,"exit",e),enter:_(l,"enter",e)}))}}),o}var Ee=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},De={component:"div",childFactory:function(t){return t}},q=function(e){le(t,e);function t(a,o){var r;r=e.call(this,a,o)||this;var l=r.handleExited.bind(Se(r));return r.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},r}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var l=r.children,c=r.handleExited,p=r.firstRender;return{children:p?Ce(o,c):Te(o,l,c),firstRender:!1}},i.handleExited=function(o,r){var l=L(this.props.children);o.key in l||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var p=j({},c.children);return delete p[o.key],{children:p}}))},i.render=function(){var o=this.props,r=o.component,l=o.childFactory,c=de(o,["component","childFactory"]),p=this.state.contextValue,x=Ee(this.state.children).map(l);return delete c.appear,delete c.enter,delete c.exit,r===null?A.createElement(N.Provider,{value:p},x):A.createElement(N.Provider,{value:p},A.createElement(r,c,x))},t}(A.Component);q.propTypes={};q.defaultProps=De;const ne=q;var Fe=["in","onExited","appear","enter","exit"],Pe=function(t){return function(i){i.in,i.onExited,i.appear,i.enter,i.exit;var a=D(i,Fe);return s.createElement(t,a)}},Ae=Pe,Ie=["component","duration","in","onExited"],te=function(t){var i=t.component,a=t.duration,o=a===void 0?1:a,r=t.in;t.onExited;var l=D(t,Ie),c=s.useRef(null),p={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(o,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(Z,{mountOnEnter:!0,unmountOnExit:!0,in:r,timeout:o,nodeRef:c},function(x){var m={style:$({},p[x]),ref:c};return s.createElement(i,j({innerProps:m},l))})},z=260,Ve=function(t){var i=t.children,a=t.in,o=t.onExited,r=s.useRef(null),l=s.useState("auto"),c=M(l,2),p=c[0],x=c[1];s.useEffect(function(){var b=r.current;if(b){var g=window.requestAnimationFrame(function(){return x(b.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(g)}}},[]);var m=function(g){switch(g){default:return{width:p};case"exiting":return{width:0,transition:"width ".concat(z,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(Z,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:a,onExited:function(){var g=r.current;g&&(o==null||o(g))},timeout:z,nodeRef:r},function(b){return s.createElement("div",{ref:r,style:$({overflow:"hidden",whiteSpace:"nowrap"},m(b))},i)})},Me=["in","onExited"],ze=function(t){return function(i){var a=i.in,o=i.onExited,r=D(i,Me);return s.createElement(Ve,{in:a,onExited:o},s.createElement(t,j({cropWithEllipsis:a},r)))}},Be=ze,Oe=function(t){return function(i){return s.createElement(te,j({component:t,duration:i.isMulti?z:1},i))}},Re=Oe,Le=function(t){return function(i){return s.createElement(te,j({component:t},i))}},qe=Le,Ne=["component"],Ge=["children"],Ue=function(t){return function(i){return i.isMulti?s.createElement(We,j({component:t},i)):s.createElement(ne,j({component:t},i))}},We=function(t){var i=t.component,a=D(t,Ne),o=Ye(a);return s.createElement(ne,j({component:i},o))},Ye=function(t){var i=t.children,a=D(t,Ge),o=a.isMulti,r=a.hasValue,l=a.innerProps,c=a.selectProps,p=c.components,x=c.controlShouldRenderValue,m=s.useState(o&&x&&r),b=M(m,2),g=b[0],v=b[1],f=s.useState(!1),S=M(f,2),k=S[0],u=S[1];s.useEffect(function(){r&&!g&&v(!0)},[r,g]),s.useEffect(function(){k&&!r&&g&&v(!1),u(!1)},[k,r,g]);var y=function(){return u(!0)},h=function(F){if(o&&s.isValidElement(F)){if(F.type===p.MultiValue)return s.cloneElement(F,{onExited:y});if(F.type===p.Placeholder&&g)return null}return F},oe=$($({},l),{},{style:$($({},l==null?void 0:l.style),{},{display:o&&r||g?"flex":"grid"})}),re=$($({},a),{},{innerProps:oe,children:s.Children.toArray(i).map(h)});return re},Je=Ue,He=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],ie=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=$e({components:t}),a=i.Input,o=i.MultiValue,r=i.Placeholder,l=i.SingleValue,c=i.ValueContainer,p=D(i,He);return $({Input:Ae(a),MultiValue:Be(o),Placeholder:Re(r),SingleValue:qe(l),ValueContainer:Je(c)},p)},P=ie();P.Input;P.MultiValue;P.Placeholder;P.SingleValue;P.ValueContainer;var Qe=ke(ie);function Xe(e){return K({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}const Ze=d.div`
  margin-top: 40px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`,Ke=d(B)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`,en=d.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 335px;
  height: 320px;
  background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    width: 320px;
    height: auto;
  }
  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`,nn=d.img`
  // background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`,tn=d(C)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`,on=d.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  background-color: transparent;
  border: none;
`,rn=d.div`
  display: flex;
  gap: 40px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,an=d.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`,G=d(C)`
  padding-bottom: 15px;

  width: 100%;

  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  font-size: 14px;
  font-weight: 400;

  line-height: 2.41;
  transition: border-color ${w};

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    // color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    // width: 352px;
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
  }
`,U=d.label`
  color: ${({theme:e})=>e.mainText};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
  }
  // #categories {
  //   width: 100%;
  // }

  // #ingredients {
  //   width: 100%;
  // }
`,W=d.p`
  // padding-bottom: 15px;
  width: 100%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.selectDownOptionRegular};
  font-size: 14px;
  font-weight: 400;

  line-height: 2.41;
  transition: border-color ${w};

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
  }
`,Y=d(R)`
  & .Select__control {
    width: 150px;
    padding-bottom: 15px;

    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    border-bottom: 1px solid ${({theme:e})=>e.inputBorder};

    svg {
      transform: rotate(0deg);
      transition: transform ${w};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
    @media screen and (min-width: 768px) {
      // padding-bottom: 19px;
    }
    &:active,
    &:hover,
    &:focus {
      border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
    }
  }

  & .Select__value-container {
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({theme:e})=>e.selectDownOptionText};
    // padding: 17px 24px;
    // padding-left: 8px;
    // padding-bottom: 19px;
    cursor: pointer;

    &:hover {
      //   color: #f3f3f3;
      color: ${({theme:e})=>e.selectDownOptionText};
    }

    @media screen and (min-width: 768px) {
      // padding: 18px 24px;
      // padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({theme:e})=>e.selectDropdownOptionTextActive};
    margin: 0;
    padding: 0;

    &:hover {
      // color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }
  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: ${({theme:e})=>e.selectDownOptionText};
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
    border-radius: 20px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${w},
      background-color ${w};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;

    &:hover,
    &:focus {
      color: ${({theme:e})=>e.mainText};
    }

    &:active {
      color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      background-color: ${({theme:e})=>e.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`,ln=d.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,J=d.label`
  color: ${({theme:e})=>e.inputBorder};
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: -0.02em;
  text-align: left;

  display: flex;

  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 4px;

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    gap: 8px;
  }
`,H=d(C)`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  background-color: transparent;

  cursor: pointer;
  position: relative;

  &:checked::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    background-color: #f3f3f3;
    border-radius: 50%;
  }

  &:not(:checked) {
    border: 2px solid rgba(243, 243, 243, 0.5);
  }
`;d.span`
  // &::before {
  //   width: 24px;
  //   height: 24px;
  //   border-radius: 50%;
  //   background: white;
  //   border: 1px solid #ccc;
  //   // border-color: ${({theme:e})=>e.inputBorderFocus};
  // }
`;const dn={backgroundColor:"#F3F3F3",width:"50px",height:"50px",borderRadius:"6px",color:"#161F37"},sn=ee().shape({drinkThumb:T().required("Cocktail photo is a mandatory field").url(),drink:T().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),description:T().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:T().required("Cocktail category is a required field"),glass:T().required("Cocktail glass is a required field")}),cn=Qe(),pn=({formData:e,setFormData:t,refId:i})=>{const a=V(),o=E(u=>u.filters.categories),r=E(u=>u.filters.glasses),[l,c]=s.useState(null),[p,x]=s.useState(!1),[m,b]=s.useState(null),[g,v]=s.useState("");s.useEffect(()=>{a(se()),a(ce())},[a]);const f=u=>{const y=u.target.files[0];if(y){const h=URL.createObjectURL(y);t({...e,drinkThumb:y}),c(h),x(!0)}},S=()=>{t({...e,drinkThumb:""}),c(null),x(!1)},k=u=>{const{name:y,value:h}=u.target;t({...e,[y]:h})};return n.jsx(Ze,{children:n.jsx(O,{initialValues:e,validationSchema:sn,innerRef:i,children:n.jsxs(Ke,{children:[n.jsxs(en,{htmlFor:"drinkThumb",children:[n.jsx(tn,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:f,style:{display:"none"}}),p?n.jsxs("button",{type:"button",onClick:S,children:[n.jsx(pe,{}),"Change image"]}):n.jsxs(on,{type:"button",children:[n.jsx(Xe,{style:dn}),n.jsx("span",{children:"Add image"})]}),l&&n.jsx(nn,{src:l,alt:"Preview"}),n.jsx(I,{name:"drinkThumb",component:"div"})]}),n.jsxs(rn,{children:[n.jsxs(an,{children:[n.jsx(G,{name:"drink",value:e.drink,onChange:k,placeholder:"Enter item drink"}),n.jsx(I,{name:"drink",component:"div"}),n.jsx(G,{name:"description",value:e.description,onChange:k,placeholder:"Enter about description"}),n.jsx(I,{name:"description",component:"div"}),n.jsxs(U,{htmlFor:"category",children:[n.jsx(W,{children:"Category"}),n.jsx(C,{name:"category",value:e.category,onChange:k,placeholder:"Category",children:({field:u,form:y})=>n.jsx(Y,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,classNames:{control:h=>h.isFocused?"border-orange-600":"border-grey-300"},options:o.map(h=>({value:h,label:h})),name:u.name,id:"category",...u,value:m?{value:m,label:m}:null,onChange:h=>{b(h?h.value:null),y.setFieldValue("category",h?h.value:null)},placeholder:"Cocktail"})})]}),n.jsxs(U,{htmlFor:"glass",children:[n.jsx(W,{children:"Glasses"}),n.jsx(C,{name:"glass",value:e.glass,onChange:k,placeholder:"Glasses",children:({field:u,form:y})=>n.jsx(Y,{classNamePrefix:"Select",closeMenuOnSelect:!0,components:cn,isClearable:!0,classNames:{control:h=>h.isFocused?"border-orange-600":"border-grey-300"},options:r.map(h=>({value:h,label:h})),name:u.name,id:"glass",...u,value:g?{value:g,label:g}:"",onChange:h=>{h&&(v(h.value),y.setFieldValue("glass",h.value))},placeholder:"Glasses"})})]})]}),n.jsxs(ln,{children:[n.jsxs(J,{children:[n.jsx(H,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:()=>t({...e,alcoholic:"Alcoholic"})}),n.jsx("span",{children:"Alcoholic"})]}),n.jsxs(J,{children:[n.jsx(H,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:()=>t({...e,alcoholic:"Non alcoholic"})}),n.jsx("span",{children:"Non-alcoholic"})]})]})]})]})})})};function un(e){return K({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}const xn=d.div`
  position: relative;
  margin-bottom: 80px;
`,hn=d.h2`
  margin-bottom: 40px;

  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 0em;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 40px;

    line-height: 2.24;
  }
`,mn=d(B)`
  width: 335px;
  // margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 540px;
  }

  //   #categories {
  //     width: 100%;
  //   }

  //   #ingredients {
  //     width: 100%;
  //   }
`,gn=d.div`
  position: absolute;
  top: -2%;
  left: 69%;
  display: flex;
  padding: 10px 16px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  max-width: 104px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  border-radius: 40px;
  box-shadow: none;

  @media screen and (min-width: 768px) {
    top: 5%;
    left: 84%;
    gap: 18px;
    max-width: 114px;
  }
  @media screen and (min-width: 1440px) {
    left: 79%;
  }
`,Q=d.button`
  font-size: 16px;
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  border: none;

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }
  @media screen and (min-width: 768px) {
  }
`,fn=d.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 27px;
  }
`,bn=d.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,vn=d.div`
  // width: 335px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 188px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`,wn=d.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,yn=d.div`
  display: flex;
  width: 101px;
  background-color: transparent;

  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${w};

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Sn=d(C)`
  background-color: transparent;
  width: 35px;
  padding: 16px 24px;
  padding-right: 0;
  border: none;

  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${w};

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    width: 45px;
  }
`,kn=d(R)`
  & .Select__control {
    width: 67px;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform ${w};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
    @media screen and (min-width: 768px) {
      width: 95px;
    }
  }

  & .Select__value-container {
    padding: 17px 0;
    padding-right: 0;

    @media screen and (min-width: 768px) {
      padding: 17px 18px;
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({theme:e})=>e.selectDownOptionText};
    // padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      //   color: #f3f3f3;
      color: ${({theme:e})=>e.selectDownOptionText};
    }

    @media screen and (min-width: 768px) {
      // padding: 18px 24px;
      // padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({theme:e})=>e.selectDropdownOptionTextActive};
    margin: 0;
    padding: 0;

    &:hover {
      // color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }

  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: ${({theme:e})=>e.selectDownOptionText};
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
    border-radius: 20px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${w},
      background-color ${w};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;

    &:hover,
    &:focus {
      color: ${({theme:e})=>e.mainText};
    }

    &:active {
      color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      background-color: ${({theme:e})=>e.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`,$n=d(R)`
  & .Select__control {
    width: 200px;
    // width: 100%;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    border: 1px solid ${({theme:e})=>e.inputBorder};

    svg {
      transform: rotate(0deg);
      transition: transform ${w};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
    @media screen and (min-width: 768px) {
      width: 332px;
    }
    @media screen and (min-width: 1440px) {
      width: 316px;
    }
  }

  & .Select__value-container {
    padding: 17px 24px;
    padding-right: 0;

    @media screen and (min-width: 768px) {
      padding: 15px 24px;
      padding-right: 0;
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({theme:e})=>e.selectDownOptionText};
    padding: 17px 24px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      //   color: #f3f3f3;
      color: ${({theme:e})=>e.selectDownOptionText};
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({theme:e})=>e.selectDropdownOptionTextActive};
    margin: 0;
    padding: 0;

    &:hover {
      // color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      color: #f3f3f3;
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }
  }

  & .Select__input {
    line-height: 1.285 !important;

    @media screen and (min-width: 768px) {
      line-height: 1.56 !important;
    }
  }

  & .Select__placeholder,
  & .Select__single-value {
    color: ${({theme:e})=>e.selectDownOptionText};
    line-height: 1.285;
    margin: 0;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
  }

  & .Select__menu-list {
    padding: 10px;
    border-radius: 24px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    max-height: 400px;
  }

  & .Select__option {
    padding: 4px 14px;
    border-radius: 20px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${w},
      background-color ${w};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;

    &:hover,
    &:focus {
      color: ${({theme:e})=>e.mainText};
    }

    &:active {
      color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      background-color: ${({theme:e})=>e.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
`,jn=d.button`
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.mainText};
`,X=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],_n=({formData:e,setFormData:t,refId:i})=>{const{width:a}=ue(),o=a>=768?20:18,r=10,l=V(),c=E(v=>v.filters.ingredients),[p,x]=s.useState(e.ingredients.length),m=(v,f,S)=>{const k=[...e.ingredients];k[S][v]=f,t(u=>({...u,ingredients:k}))};s.useEffect(()=>{l(xe())},[l]);const b=()=>{p<r&&(t(v=>({...v,ingredients:[...v.ingredients,{ingredient:"",measure:"",quantity:""}]})),x(p+1))},g=v=>{if(p>1){const f=[...e.ingredients];f.splice(v,1),t(S=>({...S,ingredients:f})),x(p-1)}};return n.jsxs(xn,{children:[n.jsx(hn,{children:"Ingredients"}),n.jsx(O,{initialValues:e,innerRef:i,children:n.jsx(mn,{children:n.jsx(he,{name:"ingredients",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(gn,{children:[n.jsx(Q,{type:"button",onClick:()=>g(),children:"-"}),n.jsx(fn,{children:p}),n.jsx(Q,{type:"button",onClick:b,children:"+"})]}),c&&n.jsx(bn,{children:e.ingredients.map((v,f)=>{const S=X.find(u=>u.value===v.measure),k=c.find(u=>u.title===v.ingredient);return n.jsxs(vn,{children:[n.jsxs(wn,{children:[n.jsx("label",{htmlFor:`ingredients[${f}]`,children:n.jsx($n,{className:"basic-single",classNamePrefix:"Select",closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:c.map(({_id:u,title:y})=>({value:u,label:y})),name:`ingredients[${f}]`,id:`ingredient${f}`,value:k,onChange:({value:u})=>m("ingredientId",u,f),placeholder:"Lem"})}),n.jsxs(yn,{children:[n.jsx(Sn,{name:`ingredients[${f}].quantity`,value:v.quantity||"",onChange:u=>m("quantity",parseInt(u.target.value,10),f)}),n.jsx("label",{htmlFor:`ingredients[${f}].measure`,children:n.jsx(kn,{className:"basic-single",classNamePrefix:"Select",options:X,name:`ingredients[${f}].measure`,value:S||"",onChange:({value:u})=>m("measure",u,f),placeholder:"cl"})})]})]}),n.jsx(jn,{type:"button",onClick:g,children:n.jsx(un,{size:o})})]},f)})})]})})})})]})},Cn=d.h2`
  margin-bottom: 40px;

  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`,Tn=d.textarea`
  padding-top: 16px;
  padding-bottom: 16;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 20px;

  resize: none;
  border-radius: 14px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border: 1px solid ${({theme:e})=>e.mainText};
  opacity: 0.8;
  background: transparent;

  color: rgba(243, 243, 243, 0.5);
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
  width: 335px;
  height: 184px;

  @media screen and (min-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 24px;
    padding-right: 24px;

    width: 480px;
    height: 184px;
    border-radius: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,En=ee().shape({instructions:T().min(100,"You need to add a description of at least 100 symbols")}),Dn=({formData:e,refId:t})=>n.jsx(n.Fragment,{children:n.jsx(O,{initialValues:e,validationSchema:En,innerRef:t,children:n.jsxs(B,{children:[n.jsx(Cn,{htmlFor:"instructions",children:"Recipe Preparation"}),n.jsx(C,{name:"instructions",children:({field:i})=>n.jsx(Tn,{...i,id:"instructions",placeholder:"Enter the recipe"})}),n.jsx(I,{name:"textareaValue",component:"div"})]})})}),Fn=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 80px;
`,Pn=d.button`
  margin-bottom: 80px;
  border-radius: 42px;
  background: #f3f3f3;
  background: ${({theme:e})=>e.userPopupBtnText};
  padding: 14px 40px;
  border: 2px solid transparent;

  color: #161f37;
  color: ${({theme:e})=>e.userPopupText};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  transition: color ${w};
  transition: background ${w};

  &:active {
    border: 2px solid rgba(64, 112, 205, 0.5);
  }

  &:hover {
    color: #f3f3f3;
    background: #161f37;
  }

  &:focus {
    color: #f3f3f3;
    background: #161f37;
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);

    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    font-size: 16px;
    line-height: 1.1;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`,An=()=>{const e=V(),t=E(b=>b.auth.user.birthDate),i=s.useRef(),a=s.useRef(),o=s.useRef(),r=new Date,l=new Date(t),c=r.getFullYear()-l.getFullYear(),[p,x]=s.useState({drink:"",description:"",alcoholic:c>=18?"Alcoholic":"Non alcoholic",category:"",glass:"",instructions:"",drinkThumb:"",ingredients:[{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""}]}),m=()=>{if(i.current&&a.current&&o.current){i.current.handleSubmit(),a.current.handleSubmit(),o.current.handleSubmit();const{values:b}=i.current,{values:g}=a.current,{values:v}=o.current,f={...p,alcoholic:b.alcoholic,category:b.category,glass:b.glass,ingredients:JSON.stringify(g.ingredients.filter(S=>S.ingredientId)),instructions:v.instructions};e(ge(f))}};return n.jsxs(Fn,{children:[n.jsx(pn,{formData:p,setFormData:x,refId:i}),n.jsx(_n,{formData:p,setFormData:x,refId:a}),n.jsx(Dn,{formData:p,setFormData:x,refId:o}),n.jsx(me,{to:"/my",children:n.jsx(Pn,{type:"submit",onClick:m,children:"Add"})})]})},In=An,Vn=d.h3`
  margin-bottom: 20px;

  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 24px;
    line-height: 1.3;
  }
`,Mn=d.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,zn=()=>n.jsxs(Mn,{children:[n.jsx(Vn,{children:"Follow Us"}),n.jsx(fe,{})]}),Bn=zn,On=d.h3`
  margin-bottom: 28px;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;

  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1.33;
  }
`,Rn=d.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    // width: 704px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 0px;
  }
`,Ln=d.li`
  display: flex;
  align-items: center;
`,qn=d.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
`,Nn=d.img`
  border-radius: 7px;
`,Gn=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 232px;
  margin-left: 14px;
`,Un=d.h3`
  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,Wn=d.p`
  overflow: hidden;
  color: rgba(243, 243, 243, 0.5);
  color: ${({theme:e})=>e.subTitleText};
  text-overflow: ellipsis;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    width: 232px;
  }

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`,Yn=()=>{const e=V(),t=E(o=>o.drinks.popularDrinks),{isLoading:i,error:a}=E(be);return s.useEffect(()=>{e(ve())},[e]),n.jsxs("div",{children:[n.jsx(On,{children:"Popular drinks"}),i&&n.jsx(we,{}),a&&n.jsx("p",{children:"Sorry. There are no images ... 😭"}),n.jsx(Rn,{children:t.map(({_id:o,drinkThumb:r,drink:l,shortDescription:c})=>n.jsx(Ln,{children:n.jsxs(qn,{href:`/api/drinks/popular/${o}`,children:[n.jsx(Nn,{src:r,alt:l,width:90,height:90}),n.jsxs(Gn,{children:[n.jsx(Un,{children:l}),n.jsx(Wn,{children:c})]})]})},o))})]})},Jn=Yn,Hn=d.section`
  width: 100%;
  margin: 0;
  padding-top: 80px;
  padding-bottom: 80px;

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 160px;
    padding-bottom: 160px;
  }
`,Qn=d.div`
      display: flex;
      flex-direction: column;
      gap: 80px;

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
  }
`;function et(){return n.jsx(Hn,{children:n.jsxs(ye,{children:[n.jsx(je,{title:"Add drink"}),n.jsxs(Qn,{children:[n.jsx("div",{children:n.jsx(In,{})}),n.jsxs("div",{children:[n.jsx(Bn,{}),n.jsx(Jn,{})]})]})]})})}export{et as default};
