import{r as s,_ as se,o as $,p as ce,R as P,T as G,q as S,v as K,G as ee,s as d,t as b,F as B,d as C,f as ne,h as _,a as A,e as T,i as pe,w as ue,j as n,m as R,B as xe,E as I,u as he,k as me,x as ge,y as fe,S as be,z as ve,A as we,L as Se,C as ye}from"./index-7b4f4d67.js";import{_ as $e,m as je,d as ke,a as D,b as M,S as O}from"./react-select.esm-188e85ce.js";import{P as _e}from"./PageTitle-a660d629.js";function L(e,t){var o=function(r){return t&&s.isValidElement(r)?t(r):r},a=Object.create(null);return e&&s.Children.map(e,function(i){return i}).forEach(function(i){a[i.key]=o(i)}),a}function Ce(e,t){e=e||{},t=t||{};function o(g){return g in t?t[g]:e[g]}var a=Object.create(null),i=[];for(var r in e)r in t?i.length&&(a[r]=i,i=[]):i.push(r);var l,c={};for(var p in t){if(a[p])for(l=0;l<a[p].length;l++){var h=a[p][l];c[a[p][l]]=o(h)}c[p]=o(p)}for(l=0;l<i.length;l++)c[i[l]]=o(i[l]);return c}function k(e,t,o){return o[t]!=null?o[t]:e.props[t]}function De(e,t){return L(e.children,function(o){return s.cloneElement(o,{onExited:t.bind(null,o),in:!0,appear:k(o,"appear",e),enter:k(o,"enter",e),exit:k(o,"exit",e)})})}function Ee(e,t,o){var a=L(e.children),i=Ce(t,a);return Object.keys(i).forEach(function(r){var l=i[r];if(s.isValidElement(l)){var c=r in t,p=r in a,h=t[r],g=s.isValidElement(h)&&!h.props.in;p&&(!c||g)?i[r]=s.cloneElement(l,{onExited:o.bind(null,l),in:!0,exit:k(l,"exit",e),enter:k(l,"enter",e)}):!p&&c&&!g?i[r]=s.cloneElement(l,{in:!1}):p&&c&&s.isValidElement(h)&&(i[r]=s.cloneElement(l,{onExited:o.bind(null,l),in:h.props.in,exit:k(l,"exit",e),enter:k(l,"enter",e)}))}}),i}var Te=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Fe={component:"div",childFactory:function(t){return t}},q=function(e){se(t,e);function t(a,i){var r;r=e.call(this,a,i)||this;var l=r.handleExited.bind($e(r));return r.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},r}var o=t.prototype;return o.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},o.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var l=r.children,c=r.handleExited,p=r.firstRender;return{children:p?De(i,c):Ee(i,l,c),firstRender:!1}},o.handleExited=function(i,r){var l=L(this.props.children);i.key in l||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(c){var p=$({},c.children);return delete p[i.key],{children:p}}))},o.render=function(){var i=this.props,r=i.component,l=i.childFactory,c=ce(i,["component","childFactory"]),p=this.state.contextValue,h=Te(this.state.children).map(l);return delete c.appear,delete c.enter,delete c.exit,r===null?P.createElement(G.Provider,{value:p},h):P.createElement(G.Provider,{value:p},P.createElement(r,c,h))},t}(P.Component);q.propTypes={};q.defaultProps=Fe;const te=q;var Pe=["in","onExited","appear","enter","exit"],Ve=function(t){return function(o){o.in,o.onExited,o.appear,o.enter,o.exit;var a=D(o,Pe);return s.createElement(t,a)}},Ie=Ve,Ae=["component","duration","in","onExited"],ie=function(t){var o=t.component,a=t.duration,i=a===void 0?1:a,r=t.in;t.onExited;var l=D(t,Ae),c=s.useRef(null),p={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(i,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(K,{mountOnEnter:!0,unmountOnExit:!0,in:r,timeout:i,nodeRef:c},function(h){var g={style:S({},p[h]),ref:c};return s.createElement(o,$({innerProps:g},l))})},z=260,Me=function(t){var o=t.children,a=t.in,i=t.onExited,r=s.useRef(null),l=s.useState("auto"),c=M(l,2),p=c[0],h=c[1];s.useEffect(function(){var v=r.current;if(v){var x=window.requestAnimationFrame(function(){return h(v.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(x)}}},[]);var g=function(x){switch(x){default:return{width:p};case"exiting":return{width:0,transition:"width ".concat(z,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(K,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:a,onExited:function(){var x=r.current;x&&(i==null||i(x))},timeout:z,nodeRef:r},function(v){return s.createElement("div",{ref:r,style:S({overflow:"hidden",whiteSpace:"nowrap"},g(v))},o)})},ze=["in","onExited"],Be=function(t){return function(o){var a=o.in,i=o.onExited,r=D(o,ze);return s.createElement(Me,{in:a,onExited:i},s.createElement(t,$({cropWithEllipsis:a},r)))}},Re=Be,Oe=function(t){return function(o){return s.createElement(ie,$({component:t,duration:o.isMulti?z:1},o))}},Le=Oe,qe=function(t){return function(o){return s.createElement(ie,$({component:t},o))}},Ge=qe,Ne=["component"],Ue=["children"],We=function(t){return function(o){return o.isMulti?s.createElement(Je,$({component:t},o)):s.createElement(te,$({component:t},o))}},Je=function(t){var o=t.component,a=D(t,Ne),i=Ye(a);return s.createElement(te,$({component:o},i))},Ye=function(t){var o=t.children,a=D(t,Ue),i=a.isMulti,r=a.hasValue,l=a.innerProps,c=a.selectProps,p=c.components,h=c.controlShouldRenderValue,g=s.useState(i&&h&&r),v=M(g,2),x=v[0],f=v[1],y=s.useState(!1),j=M(y,2),u=j[0],w=j[1];s.useEffect(function(){r&&!x&&f(!0)},[r,x]),s.useEffect(function(){u&&!r&&x&&f(!1),w(!1)},[u,r,x]);var m=function(){return w(!0)},re=function(E){if(i&&s.isValidElement(E)){if(E.type===p.MultiValue)return s.cloneElement(E,{onExited:m});if(E.type===p.Placeholder&&x)return null}return E},ae=S(S({},l),{},{style:S(S({},l==null?void 0:l.style),{},{display:i&&r||x?"flex":"grid"})}),le=S(S({},a),{},{innerProps:ae,children:s.Children.toArray(o).map(re)});return le},He=We,Qe=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],oe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=ke({components:t}),a=o.Input,i=o.MultiValue,r=o.Placeholder,l=o.SingleValue,c=o.ValueContainer,p=D(o,Qe);return S({Input:Ie(a),MultiValue:Re(i),Placeholder:Le(r),SingleValue:Ge(l),ValueContainer:He(c)},p)},F=oe();F.Input;F.MultiValue;F.Placeholder;F.SingleValue;F.ValueContainer;var Xe=je(oe);function Ze(e){return ee({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}const Ke=d.div`
  margin-top: 40px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`,en=d(B)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`,nn=d.label`
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
`,tn=d.img`
  // background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
`,on=d(C)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`,N=d.button`
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
`,V=d(C)`
  padding-bottom: 15px;

  width: 100%;

  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  font-size: 14px;
  font-weight: 400;

  line-height: 2.41;
  transition: border-color ${b};

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

  //   position: relative;

  @media screen and (min-width: 768px) {
  }
  // #categories {
  //   width: 100%;
  // }

  // #ingredients {
  //   width: 100%;
  // }
`,W=d(C)`
  width: 120px;
  padding-bottom: 15px;

  // width: 100%;

  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  font-size: 14px;
  font-weight: 400;

  line-height: 2.41;
  transition: border-color ${b};

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
`,J=d(O)`
  & .Select__control {
    width: 150px;
    padding-top: 10px;

    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    border-bottom: 1px solid ${({theme:e})=>e.inputBorder};

    svg {
      transform: rotate(0deg);
      transition: transform ${b};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
  }

  & .Select__value-container {
    padding-top: 2px;

    padding-right: 0;
    padding-bottom: 19px;

    @media screen and (min-width: 768px) {
      // padding: 15px 24px;
      // padding-right: 0;
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
      color ${b},
      background-color ${b};
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
`,Y=d.label`
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
`,dn=d.span`
  // &::before {
  //   width: 24px;
  //   height: 24px;
  //   border-radius: 50%;
  //   background: white;
  //   border: 1px solid #ccc;
  //   // border-color: ${({theme:e})=>e.inputBorderFocus};
  // }
`,Q={backgroundColor:"#F3F3F3",width:"50px",height:"50px",borderRadius:"6px",color:"#161F37"},sn=ne().shape({photo:_().required("Cocktail photo is a mandatory field").url(),title:_().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),recipe:_().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:_().required("Cocktail category is a required field"),glasses:_().required("Cocktail glasses is a required field")}),cn=Xe(),pn=({formData:e,setFormData:t,handleSubmit:o})=>{const a=A(),i=T(u=>u.filters.categories),r=T(u=>u.filters.glasses),[l,c]=s.useState(null),[p,h]=s.useState(!1),[g,v]=s.useState(null),[x,f]=s.useState(null);s.useEffect(()=>{a(pe()),a(ue())},[a]);const y=u=>{const[w]=u.target.files;if(w){const m=URL.createObjectURL(w);t({...e,drinkThumb:w}),c(m)}},j=()=>{t({...e,drinkThumb:null}),c(null),h(!1)};return n.jsx(Ke,{children:n.jsx(R,{initialValues:e,validationSchema:sn,onSubmit:u=>{t({...e,...u}),o()},children:n.jsxs(en,{children:[n.jsxs(nn,{htmlFor:"photo",children:[n.jsx(on,{type:"file",id:"photo",name:"photo",onChange:y,style:{display:"none"}}),p?n.jsxs(N,{type:"button",onClick:j,children:[n.jsx(xe,{style:Q}),"Delete image"]}):n.jsxs(N,{type:"button",children:[n.jsx(Ze,{style:Q}),n.jsx("span",{children:"Add image"})]}),l&&n.jsx(tn,{src:l,alt:"Preview"}),n.jsx(I,{name:"photo",component:"div"})]}),n.jsxs(rn,{children:[n.jsxs(an,{children:[n.jsx(V,{name:"title",placeholder:"Enter item title"}),n.jsx(I,{name:"title",component:"div"}),n.jsx(V,{name:"recipe",placeholder:"Enter about recipe"}),n.jsx(I,{name:"recipe",component:"div"}),n.jsxs(U,{htmlFor:"category",children:[n.jsx(V,{name:"category",placeholder:"Category"}),n.jsx(W,{name:"category",placeholder:"Category",children:({field:u,form:w})=>n.jsx(J,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,classNames:{control:m=>m.isFocused?"border-orange-600":"border-grey-300"},options:i.map(m=>({value:m,label:m})),name:u.name,id:"categories",...u,value:g?{value:g,label:g}:null,onChange:m=>{v(m?m.value:null),w.setFieldValue("categories",m?m.value:null)},placeholder:"Cocktail"})})]}),n.jsxs(U,{htmlFor:"glasses",children:[n.jsx(V,{name:"category",placeholder:"Glasses"}),n.jsx(W,{name:"glasses",placeholder:"Glasses",children:({field:u,form:w})=>n.jsx(J,{classNamePrefix:"Select",closeMenuOnSelect:!0,components:cn,isClearable:!0,classNames:{control:m=>m.isFocused?"border-orange-600":"border-grey-300"},options:r.map(m=>({value:m,label:m})),name:u.name,id:"glasses",...u,value:x?{value:x,label:x}:null,onChange:m=>{f(m?m.value:null),w.setFieldValue("glasses",m?m.value:null)},placeholder:"Glasses"})})]})]}),n.jsxs(ln,{children:[n.jsxs(Y,{children:[n.jsx(H,{type:"radio",name:"strength",value:"alcoholic"}),n.jsx(dn,{children:"Alcoholic"})]}),n.jsxs(Y,{children:[n.jsx(H,{type:"radio",name:"strength",value:"nonAlcoholic"}),n.jsx("span",{children:"Non-alcoholic"})]})]})]})]})})})},un=d.h2`
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
`,xn=d.textarea`
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
`;ne().shape({instructions:_().min(100,"You need to add a description of at least 100 symbols")});const hn=({formData:e,setFormData:t,handleSubmit:o,refId:a})=>n.jsx(n.Fragment,{children:n.jsx(R,{innerRef:a,initialValues:e,children:n.jsxs(B,{children:[n.jsx(un,{htmlFor:"instructions",children:"Recipe Preparation"}),n.jsx(C,{name:"instructions",children:({field:i})=>n.jsx(xn,{...i,id:"textareaValue",placeholder:"Enter the recipe"})}),n.jsx(I,{name:"textareaValue",component:"div"})]})})});function mn(e){return ee({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}const gn=d.div`
  position: relative;
  margin-bottom: 80px;
`,fn=d.h2`
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
`,bn=d(B)`
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
`,vn=d.div`
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
`,X=d.button`
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
`,wn=d.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 27px;
  }
`,Sn=d.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,yn=d.div`
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
`,$n=d.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,jn=d.div`
  display: flex;
  width: 101px;
  background-color: transparent;

  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${b};

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
`,kn=d(C)`
  background-color: transparent;
  width: 35px;
  padding: 16px 24px;
  padding-right: 0;
  border: none;

  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${b};

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
`,_n=d(O)`
  & .Select__control {
    width: 67px;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;

    svg {
      transform: rotate(0deg);
      transition: transform ${b};
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
      color ${b},
      background-color ${b};
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
`,Cn=d(O)`
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
      transition: transform ${b};
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
      color ${b},
      background-color ${b};
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
`,Dn=d.button`
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.mainText};
`,Z=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],En=({formData:e,setFormData:t,refId:o})=>{const{width:a}=he(),i=a>=768?20:18,r=10,l=A(),c=T(x=>x.filters.ingredients);let p=e.ingredients.length;console.log(c);const h=(x,f,y)=>{if(e.ingredients[y]){const u=[...e.ingredients];u[y][x]=f,t({...e,ingredients:u})}};s.useEffect(()=>{l(me())},[l]);const g=()=>{if(p<r)return p+=1},v=()=>{if(p>1)return p-=1};return n.jsxs(gn,{children:[n.jsx(fn,{children:"Ingredients"}),n.jsx(R,{initialValues:{...e},innerRef:o,children:n.jsx(bn,{children:n.jsx(ge,{name:"ingredients",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(vn,{children:[n.jsx(X,{type:"button",onClick:()=>v(),children:"-"}),n.jsx(wn,{children:p}),n.jsx(X,{type:"button",onClick:g,children:"+"})]}),c&&n.jsx(Sn,{children:e.ingredients.map((x,f)=>{const y=Z.find(u=>u.value===x.measure),j=c.find(u=>u.title===x.ingredient);return n.jsxs(yn,{children:[n.jsxs($n,{children:[n.jsx("label",{htmlFor:`ingredients[${f}]`,children:n.jsx(Cn,{className:"basic-single",classNamePrefix:"Select",closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:c.map(({_id:u,title:w})=>({value:u,label:w})),name:`ingredients[${f}]`,id:`ingredient${f}`,value:j,onChange:({value:u})=>h("ingredientId",u,f),placeholder:"Lem"})}),n.jsxs(jn,{children:[n.jsx(kn,{name:`ingredients[${f}].quantity`,value:x.quantity,onChange:u=>h("quantity",parseInt(u.target.value,10),f)}),n.jsx("label",{htmlFor:`ingredients[${f}].measure`,children:n.jsx(_n,{className:"basic-single",classNamePrefix:"Select",options:Z,name:`ingredients[${f}].measure`,value:y,onChange:({value:u})=>h("measure",u,f),placeholder:"cl"})})]})]}),n.jsx(Dn,{type:"button",onClick:v,children:n.jsx(mn,{size:i})})]},f)})})]})})})})]})},Tn=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 80px;
`,Fn=d.button`
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
  transition: color ${b};
  transition: background ${b};

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
`,Pn=()=>{const e=A(),t=s.useRef(),o=s.useRef(),a=s.useRef(),[i,r]=s.useState({drink:"",description:"",alcoholic:"",category:"",glass:"",instructions:"",drinkThumb:"",ingredients:[{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""}]}),l=()=>{t.current.handleSubmit(),o.current.handleSubmit(),a.current.handleSubmit();const{values:c}=t.current,{values:p}=a.current,{values:h}=o.current,g={...c,ingredients:JSON.stringify(i.ingredients),drinkThumb:i.drinkThumb,instructions:p.instructions};console.log({formData:i,valuesPrep:p,valuesIng:h,data:g}),e(fe(g))};return n.jsxs(Tn,{children:[n.jsx(pn,{formData:i,setFormData:r,refId:t}),n.jsx(En,{formData:i,setFormData:r,refId:o}),n.jsx(hn,{formData:i,setFormData:r,refId:a}),n.jsx(Fn,{type:"button",onClick:l,children:"Add"})]})},Vn=Pn,In=d.h3`
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
`,An=d.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Mn=()=>n.jsxs(An,{children:[n.jsx(In,{children:"Follow Us"}),n.jsx(be,{})]}),zn=Mn,Bn=d.h3`
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
`,On=d.li`
  display: flex;
  align-items: center;
`,Ln=d.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
`,qn=d.img`
  border-radius: 7px;
`,Gn=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 232px;
  margin-left: 14px;
`,Nn=d.h3`
  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,Un=d.p`
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
`,Wn=()=>{const e=A(),t=T(i=>i.drinks.popularDrinks),{isLoading:o,error:a}=T(ve);return s.useEffect(()=>{e(we())},[e]),n.jsxs("div",{children:[n.jsx(Bn,{children:"Popular drinks"}),o&&n.jsx(Se,{}),a&&n.jsx("p",{children:"Sorry. There are no images ... 😭"}),n.jsx(Rn,{children:t.map(({_id:i,drinkThumb:r,drink:l,shortDescription:c})=>n.jsx(On,{children:n.jsxs(Ln,{href:`/api/drinks/popular/${i}`,children:[n.jsx(qn,{src:r,alt:l,width:90,height:90}),n.jsxs(Gn,{children:[n.jsx(Nn,{children:l}),n.jsx(Un,{children:c})]})]})},i))})]})},Jn=Wn,Yn=d.section`
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
`,Hn=d.div`
      display: flex;
      flex-direction: column;
      gap: 80px;

  @media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 94px;
  }
`;function Kn(){return n.jsx(Yn,{children:n.jsxs(ye,{children:[n.jsx(_e,{title:"Add drink"}),n.jsxs(Hn,{children:[n.jsx("div",{children:n.jsx(Vn,{})}),n.jsxs("div",{children:[n.jsx(zn,{}),n.jsx(Jn,{})]})]})]})})}export{Kn as default};
