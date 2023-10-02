import{r as s,_ as le,o as $,p as de,R as P,T as q,q as k,v as X,G as Z,s as d,t as S,F as z,d as _,f as K,h as C,c as V,e as T,i as se,w as ce,j as n,m as B,E as I,a as pe,k as ue,x as xe,b as he,y as me,S as ge,z as fe,A as ve,L as be,C as we}from"./index-975c6b9a.js";import{_ as ye,m as Se,d as ke,a as E,b as A,S as R}from"./react-select.esm-10b0fc2d.js";import{P as $e}from"./PageTitle-4170ea27.js";function O(e,t){var i=function(r){return t&&s.isValidElement(r)?t(r):r},a=Object.create(null);return e&&s.Children.map(e,function(o){return o}).forEach(function(o){a[o.key]=i(o)}),a}function je(e,t){e=e||{},t=t||{};function i(m){return m in t?t[m]:e[m]}var a=Object.create(null),o=[];for(var r in e)r in t?o.length&&(a[r]=o,o=[]):o.push(r);var l,c={};for(var p in t){if(a[p])for(l=0;l<a[p].length;l++){var h=a[p][l];c[a[p][l]]=i(h)}c[p]=i(p)}for(l=0;l<o.length;l++)c[o[l]]=i(o[l]);return c}function j(e,t,i){return i[t]!=null?i[t]:e.props[t]}function _e(e,t){return O(e.children,function(i){return s.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:j(i,"appear",e),enter:j(i,"enter",e),exit:j(i,"exit",e)})})}function Ce(e,t,i){var a=O(e.children),o=je(t,a);return Object.keys(o).forEach(function(r){var l=o[r];if(s.isValidElement(l)){var c=r in t,p=r in a,h=t[r],m=s.isValidElement(h)&&!h.props.in;p&&(!c||m)?o[r]=s.cloneElement(l,{onExited:i.bind(null,l),in:!0,exit:j(l,"exit",e),enter:j(l,"enter",e)}):!p&&c&&!m?o[r]=s.cloneElement(l,{in:!1}):p&&c&&s.isValidElement(h)&&(o[r]=s.cloneElement(l,{onExited:i.bind(null,l),in:h.props.in,exit:j(l,"exit",e),enter:j(l,"enter",e)}))}}),o}var Te=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Ee={component:"div",childFactory:function(t){return t}},L=function(e){le(t,e);function t(a,o){var r;r=e.call(this,a,o)||this;var l=r.handleExited.bind(ye(r));return r.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},r}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(o,r){var l=r.children,c=r.handleExited,p=r.firstRender;return{children:p?_e(o,c):Ce(o,l,c),firstRender:!1}},i.handleExited=function(o,r){var l=O(this.props.children);o.key in l||(o.props.onExited&&o.props.onExited(r),this.mounted&&this.setState(function(c){var p=$({},c.children);return delete p[o.key],{children:p}}))},i.render=function(){var o=this.props,r=o.component,l=o.childFactory,c=de(o,["component","childFactory"]),p=this.state.contextValue,h=Te(this.state.children).map(l);return delete c.appear,delete c.enter,delete c.exit,r===null?P.createElement(q.Provider,{value:p},h):P.createElement(q.Provider,{value:p},P.createElement(r,c,h))},t}(P.Component);L.propTypes={};L.defaultProps=Ee;const ee=L;var De=["in","onExited","appear","enter","exit"],Fe=function(t){return function(i){i.in,i.onExited,i.appear,i.enter,i.exit;var a=E(i,De);return s.createElement(t,a)}},Pe=Fe,Ie=["component","duration","in","onExited"],ne=function(t){var i=t.component,a=t.duration,o=a===void 0?1:a,r=t.in;t.onExited;var l=E(t,Ie),c=s.useRef(null),p={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(o,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(X,{mountOnEnter:!0,unmountOnExit:!0,in:r,timeout:o,nodeRef:c},function(h){var m={style:k({},p[h]),ref:c};return s.createElement(i,$({innerProps:m},l))})},M=260,Ve=function(t){var i=t.children,a=t.in,o=t.onExited,r=s.useRef(null),l=s.useState("auto"),c=A(l,2),p=c[0],h=c[1];s.useEffect(function(){var b=r.current;if(b){var g=window.requestAnimationFrame(function(){return h(b.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(g)}}},[]);var m=function(g){switch(g){default:return{width:p};case"exiting":return{width:0,transition:"width ".concat(M,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(X,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:a,onExited:function(){var g=r.current;g&&(o==null||o(g))},timeout:M,nodeRef:r},function(b){return s.createElement("div",{ref:r,style:k({overflow:"hidden",whiteSpace:"nowrap"},m(b))},i)})},Ae=["in","onExited"],Me=function(t){return function(i){var a=i.in,o=i.onExited,r=E(i,Ae);return s.createElement(Ve,{in:a,onExited:o},s.createElement(t,$({cropWithEllipsis:a},r)))}},ze=Me,Be=function(t){return function(i){return s.createElement(ne,$({component:t,duration:i.isMulti?M:1},i))}},Re=Be,Oe=function(t){return function(i){return s.createElement(ne,$({component:t},i))}},Le=Oe,qe=["component"],Ne=["children"],Ge=function(t){return function(i){return i.isMulti?s.createElement(Ue,$({component:t},i)):s.createElement(ee,$({component:t},i))}},Ue=function(t){var i=t.component,a=E(t,qe),o=We(a);return s.createElement(ee,$({component:i},o))},We=function(t){var i=t.children,a=E(t,Ne),o=a.isMulti,r=a.hasValue,l=a.innerProps,c=a.selectProps,p=c.components,h=c.controlShouldRenderValue,m=s.useState(o&&h&&r),b=A(m,2),g=b[0],w=b[1],f=s.useState(!1),y=A(f,2),v=y[0],u=y[1];s.useEffect(function(){r&&!g&&w(!0)},[r,g]),s.useEffect(function(){v&&!r&&g&&w(!1),u(!1)},[v,r,g]);var x=function(){return u(!0)},ie=function(D){if(o&&s.isValidElement(D)){if(D.type===p.MultiValue)return s.cloneElement(D,{onExited:x});if(D.type===p.Placeholder&&g)return null}return D},oe=k(k({},l),{},{style:k(k({},l==null?void 0:l.style),{},{display:o&&r||g?"flex":"grid"})}),re=k(k({},a),{},{innerProps:oe,children:s.Children.toArray(i).map(ie)});return re},Ye=Ge,Je=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],te=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=ke({components:t}),a=i.Input,o=i.MultiValue,r=i.Placeholder,l=i.SingleValue,c=i.ValueContainer,p=E(i,Je);return k({Input:Pe(a),MultiValue:ze(o),Placeholder:Re(r),SingleValue:Le(l),ValueContainer:Ye(c)},p)},F=te();F.Input;F.MultiValue;F.Placeholder;F.SingleValue;F.ValueContainer;var He=Se(te);function Qe(e){return Z({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}const Xe=d.div`
  margin-top: 40px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`,Ze=d(z)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`,Ke=d.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

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
`,en=d.img`
  // background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};
  /* max-width: 100%; */
  /* max-height: 100%; */
  /* width: auto; */
  height: 100%;
  position: absolute;
`,nn=d(_)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`,tn=d.button`
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
  pointer-events: none;
`,on=d.div`
  display: flex;
  gap: 40px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`,rn=d.div`
  display: flex;
  flex-direction: column;
  gap: 31px;

  @media screen and (min-width: 768px) {
    width: 352px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`,N=d(_)`
  padding-bottom: 15px;

  width: 100%;

  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  font-size: 14px;
  font-weight: 400;

  line-height: 2.41;
  transition: border-color ${S};

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
`,G=d.label`
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
`,U=d.p`
  // padding-bottom: 15px;
  width: 100%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.selectDownOptionRegular};
  font-size: 14px;
  font-weight: 400;

  line-height: 2.41;
  transition: border-color ${S};

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
  }
`,W=d(R)`
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
      transition: transform ${S};
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
      color ${S},
      background-color ${S};
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
`,an=d.div`
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
`,J=d(_)`
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
`;const ln={backgroundColor:"#F3F3F3",width:"50px",height:"50px",borderRadius:"6px",color:"#161F37"},dn=K().shape({drinkThumb:C().required("Cocktail photo is a mandatory field").url(),drink:C().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),description:C().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:C().required("Cocktail category is a required field"),glass:C().required("Cocktail glass is a required field")}),sn=He(),cn=({formData:e,setFormData:t,refId:i})=>{const a=V(),o=T(v=>v.filters.categories),r=T(v=>v.filters.glasses),[l,c]=s.useState(null),[p,h]=s.useState(!1),[m,b]=s.useState(null),[g,w]=s.useState("");s.useEffect(()=>{a(se()),a(ce())},[a]);const f=v=>{const u=v.target.files[0];if(u){const x=URL.createObjectURL(u);t({...e,drinkThumb:u}),c(x),h(!0)}},y=v=>{const{name:u,value:x}=v.target;t({...e,[u]:x})};return n.jsx(Xe,{children:n.jsx(B,{initialValues:e,validationSchema:dn,innerRef:i,children:n.jsxs(Ze,{children:[n.jsxs(Ke,{htmlFor:"drinkThumb",children:[n.jsx(nn,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:f,style:{display:"none"}}),n.jsxs(tn,{type:"button",children:[n.jsx(Qe,{style:ln}),n.jsx("span",{children:"Add image"})]}),l&&n.jsx(en,{src:l,alt:"Preview"}),n.jsx(I,{name:"drinkThumb",component:"div"})]}),n.jsxs(on,{children:[n.jsxs(rn,{children:[n.jsx(N,{name:"drink",value:e.drink,onChange:y,placeholder:"Enter item drink"}),n.jsx(I,{name:"drink",component:"div"}),n.jsx(N,{name:"description",value:e.description,onChange:y,placeholder:"Enter about description"}),n.jsx(I,{name:"description",component:"div"}),n.jsxs(G,{htmlFor:"category",children:[n.jsx(U,{children:"Category"}),n.jsx(_,{name:"category",value:e.category,onChange:y,placeholder:"Category",children:({field:v,form:u})=>n.jsx(W,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,classNames:{control:x=>x.isFocused?"border-orange-600":"border-grey-300"},options:o.map(x=>({value:x,label:x})),name:v.name,id:"category",...v,value:m?{value:m,label:m}:null,onChange:x=>{b(x?x.value:null),u.setFieldValue("category",x?x.value:null)},placeholder:"Cocktail"})})]}),n.jsxs(G,{htmlFor:"glass",children:[n.jsx(U,{children:"Glasses"}),n.jsx(_,{name:"glass",value:e.glass,onChange:y,placeholder:"Glasses",children:({field:v,form:u})=>n.jsx(W,{classNamePrefix:"Select",closeMenuOnSelect:!0,components:sn,isClearable:!0,classNames:{control:x=>x.isFocused?"border-orange-600":"border-grey-300"},options:r.map(x=>({value:x,label:x})),name:v.name,id:"glass",...v,value:g?{value:g,label:g}:"",onChange:x=>{x&&(w(x.value),u.setFieldValue("glass",x.value))},placeholder:"Glasses"})})]})]}),n.jsxs(an,{children:[n.jsxs(Y,{children:[n.jsx(J,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:()=>t({...e,alcoholic:"Alcoholic"})}),n.jsx("span",{children:"Alcoholic"})]}),n.jsxs(Y,{children:[n.jsx(J,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:()=>t({...e,alcoholic:"Non alcoholic"})}),n.jsx("span",{children:"Non-alcoholic"})]})]})]})]})})})};function pn(e){return Z({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"}}]})(e)}const un=d.div`
  position: relative;
  margin-bottom: 80px;
`,xn=d.h2`
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
`,hn=d(z)`
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
`,mn=d.div`
  position: absolute;
  top: -5px;
  right: 0;
  display: flex;
  padding: 8px 16px;
  gap: 16px;
  justify-content: center;
  align-items: center;
  max-width: 104px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  border-radius: 40px;
  box-shadow: none;

  @media screen and (min-width: 768px) {
    top: 24px;
    gap: 18px;
    max-width: 114px;
  }
`,H=d.button`
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
`,gn=d.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 27px;
  }
`,fn=d.div`
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
`,bn=d.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,wn=d.div`
  display: flex;
  width: 101px;
  background-color: transparent;

  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${S};

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
`,yn=d(_)`
  background-color: transparent;
  width: 35px;
  padding: 16px 24px;
  padding-right: 0;
  border: none;

  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${S};

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
`,Sn=d(R)`
  & .Select__control {
    width: 67px;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    display: flex;

    svg {
      transform: rotate(0deg);
      transition: transform ${S};
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
      color ${S},
      background-color ${S};
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
`,kn=d(R)`
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
      transition: transform ${S};
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
      color ${S},
      background-color ${S};
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
`,$n=d.button`
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.mainText};
`,Q=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],jn=({formData:e,setFormData:t,refId:i})=>{const{width:a}=pe(),o=a>=768?20:18,r=10,l=V(),c=T(w=>w.filters.ingredients),[p,h]=s.useState(e.ingredients.length),m=(w,f,y)=>{const v=[...e.ingredients];v[y][w]=f,t(u=>({...u,ingredients:v}))};s.useEffect(()=>{l(ue())},[l]);const b=()=>{p<r&&(t(w=>({...w,ingredients:[...w.ingredients,{ingredient:"",measure:"",quantity:""}]})),h(p+1))},g=w=>{if(p>1){const f=[...e.ingredients];f.splice(w,1),t(y=>({...y,ingredients:f})),h(p-1)}};return n.jsxs(un,{children:[n.jsx(xn,{children:"Ingredients"}),n.jsx(B,{initialValues:e,innerRef:i,children:n.jsx(hn,{children:n.jsx(xe,{name:"ingredients",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(mn,{children:[n.jsx(H,{type:"button",onClick:()=>g(),children:"-"}),n.jsx(gn,{children:p}),n.jsx(H,{type:"button",onClick:b,children:"+"})]}),c&&n.jsx(fn,{children:e.ingredients.map((w,f)=>{const y=Q.find(u=>u.value===w.measure),v=c.find(u=>u.title===w.ingredient);return n.jsxs(vn,{children:[n.jsxs(bn,{children:[n.jsx("label",{htmlFor:`ingredients[${f}]`,children:n.jsx(kn,{className:"basic-single",classNamePrefix:"Select",closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:c.map(({_id:u,title:x})=>({value:u,label:x})),name:`ingredients[${f}]`,id:`ingredient${f}`,value:v,onChange:({value:u})=>m("ingredientId",u,f),placeholder:"Ingredient"})}),n.jsxs(wn,{children:[n.jsx(yn,{name:`ingredients[${f}].quantity`,value:w.quantity||"",onChange:u=>m("quantity",parseInt(u.target.value,10),f)}),n.jsx("label",{htmlFor:`ingredients[${f}].measure`,children:n.jsx(Sn,{className:"basic-single",classNamePrefix:"Select",options:Q,name:`ingredients[${f}].measure`,value:y||"",onChange:({value:u})=>m("measure",u,f),placeholder:"cl"})})]})]}),n.jsx($n,{type:"button",onClick:g,children:n.jsx(pn,{size:o})})]},f)})})]})})})})]})},_n=d.h2`
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
`,Cn=d.textarea`
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
`,Tn=K().shape({instructions:C().min(100,"You need to add a description of at least 100 symbols")}),En=({formData:e,refId:t})=>n.jsx(n.Fragment,{children:n.jsx(B,{initialValues:e,validationSchema:Tn,innerRef:t,children:n.jsxs(z,{children:[n.jsx(_n,{htmlFor:"instructions",children:"Recipe Preparation"}),n.jsx(_,{name:"instructions",children:({field:i})=>n.jsx(Cn,{...i,id:"instructions",placeholder:"Enter the recipe"})}),n.jsx(I,{name:"textareaValue",component:"div"})]})})}),Dn=d.div`
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
  transition: color ${S};
  transition: background ${S};

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
`,Pn=()=>{const e=V(),t=T(b=>b.auth.user.birthDate),i=s.useRef(),a=s.useRef(),o=s.useRef(),r=new Date,l=new Date(t),c=r.getFullYear()-l.getFullYear(),[p,h]=s.useState({drink:"",description:"",alcoholic:c>=18?"Alcoholic":"Non alcoholic",category:"",glass:"",instructions:"",drinkThumb:"",ingredients:[{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""}]}),m=()=>{if(i.current&&a.current&&o.current){i.current.handleSubmit(),a.current.handleSubmit(),o.current.handleSubmit();const{values:b}=i.current,{values:g}=a.current,{values:w}=o.current,f={...p,alcoholic:b.alcoholic,category:b.category,glass:b.glass,ingredients:JSON.stringify(g.ingredients.filter(y=>y.ingredientId)),instructions:w.instructions};e(me(f))}};return n.jsxs(Dn,{children:[n.jsx(cn,{formData:p,setFormData:h,refId:i}),n.jsx(jn,{formData:p,setFormData:h,refId:a}),n.jsx(En,{formData:p,setFormData:h,refId:o}),n.jsx(he,{to:"/my",children:n.jsx(Fn,{type:"submit",onClick:m,children:"Add"})})]})},In=Pn,Vn=d.h3`
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
`,Mn=()=>n.jsxs(An,{children:[n.jsx(Vn,{children:"Follow Us"}),n.jsx(ge,{})]}),zn=Mn,Bn=d.h3`
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
`,Nn=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 232px;
  margin-left: 14px;
`,Gn=d.h3`
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
`,Wn=()=>{const e=V(),t=T(o=>o.drinks.popularDrinks.slice(0,4)),{isLoading:i,error:a}=T(fe);return s.useEffect(()=>{e(ve())},[e]),n.jsxs("div",{children:[n.jsx(Bn,{children:"Popular drinks"}),i&&n.jsx(be,{}),a&&n.jsx("p",{children:"Sorry. There are no images ... 😭"}),n.jsx(Rn,{children:t.map(({_id:o,drinkThumb:r,drink:l,shortDescription:c})=>n.jsx(On,{children:n.jsxs(Ln,{href:`/api/drinks/popular/${o}`,children:[n.jsx(qn,{src:r,alt:l,width:90,height:90}),n.jsxs(Nn,{children:[n.jsx(Gn,{children:l}),n.jsx(Un,{children:c})]})]})},o))})]})},Yn=Wn,Jn=d.section`
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
`;function Kn(){return n.jsx(Jn,{children:n.jsxs(we,{children:[n.jsx($e,{title:"Add drink"}),n.jsxs(Hn,{children:[n.jsx("div",{children:n.jsx(In,{})}),n.jsxs("div",{children:[n.jsx(zn,{}),n.jsx(Yn,{})]})]})]})})}export{Kn as default};
