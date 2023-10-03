import{r as l,_ as le,o as k,p as ce,R as A,T as U,q as j,v as te,G as pe,s,t as m,F as q,d as C,f as ie,h as T,c as z,e as E,i as ue,w as xe,j as n,m as L,x as P,a as he,k as me,y as ge,z as fe,A as be,B as we,E as ve,b as $e,D as Se,S as ye,H as je,I as ke,L as _e,Q as Ce,C as Te}from"./index-02e09e0f.js";import{_ as Ee,m as De,d as Ie,a as D,b as M,S as N}from"./react-select.esm-f8800266.js";import{D as Fe}from"./stub-038aaa05.js";import{P as Pe}from"./PageTitle-862a06d6.js";function W(e,t){var i=function(o){return t&&l.isValidElement(o)?t(o):o},d=Object.create(null);return e&&l.Children.map(e,function(r){return r}).forEach(function(r){d[r.key]=i(r)}),d}function Ve(e,t){e=e||{},t=t||{};function i(g){return g in t?t[g]:e[g]}var d=Object.create(null),r=[];for(var o in e)o in t?r.length&&(d[o]=r,r=[]):r.push(o);var a,c={};for(var p in t){if(d[p])for(a=0;a<d[p].length;a++){var h=d[p][a];c[d[p][a]]=i(h)}c[p]=i(p)}for(a=0;a<r.length;a++)c[r[a]]=i(r[a]);return c}function _(e,t,i){return i[t]!=null?i[t]:e.props[t]}function Ae(e,t){return W(e.children,function(i){return l.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:_(i,"appear",e),enter:_(i,"enter",e),exit:_(i,"exit",e)})})}function Be(e,t,i){var d=W(e.children),r=Ve(t,d);return Object.keys(r).forEach(function(o){var a=r[o];if(l.isValidElement(a)){var c=o in t,p=o in d,h=t[o],g=l.isValidElement(h)&&!h.props.in;p&&(!c||g)?r[o]=l.cloneElement(a,{onExited:i.bind(null,a),in:!0,exit:_(a,"exit",e),enter:_(a,"enter",e)}):!p&&c&&!g?r[o]=l.cloneElement(a,{in:!1}):p&&c&&l.isValidElement(h)&&(r[o]=l.cloneElement(a,{onExited:i.bind(null,a),in:h.props.in,exit:_(a,"exit",e),enter:_(a,"enter",e)}))}}),r}var ze=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Me={component:"div",childFactory:function(t){return t}},G=function(e){le(t,e);function t(d,r){var o;o=e.call(this,d,r)||this;var a=o.handleExited.bind(Ee(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var a=o.children,c=o.handleExited,p=o.firstRender;return{children:p?Ae(r,c):Be(r,a,c),firstRender:!1}},i.handleExited=function(r,o){var a=W(this.props.children);r.key in a||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var p=k({},c.children);return delete p[r.key],{children:p}}))},i.render=function(){var r=this.props,o=r.component,a=r.childFactory,c=ce(r,["component","childFactory"]),p=this.state.contextValue,h=ze(this.state.children).map(a);return delete c.appear,delete c.enter,delete c.exit,o===null?A.createElement(U.Provider,{value:p},h):A.createElement(U.Provider,{value:p},A.createElement(o,c,h))},t}(A.Component);G.propTypes={};G.defaultProps=Me;const re=G;var Re=["in","onExited","appear","enter","exit"],Oe=function(t){return function(i){i.in,i.onExited,i.appear,i.enter,i.exit;var d=D(i,Re);return l.createElement(t,d)}},qe=Oe,Le=["component","duration","in","onExited"],oe=function(t){var i=t.component,d=t.duration,r=d===void 0?1:d,o=t.in;t.onExited;var a=D(t,Le),c=l.useRef(null),p={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(r,"ms")},exiting:{opacity:0},exited:{opacity:0}};return l.createElement(te,{mountOnEnter:!0,unmountOnExit:!0,in:o,timeout:r,nodeRef:c},function(h){var g={style:j({},p[h]),ref:c};return l.createElement(i,k({innerProps:g},a))})},R=260,Ne=function(t){var i=t.children,d=t.in,r=t.onExited,o=l.useRef(null),a=l.useState("auto"),c=M(a,2),p=c[0],h=c[1];l.useEffect(function(){var v=o.current;if(v){var f=window.requestAnimationFrame(function(){return h(v.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(f)}}},[]);var g=function(f){switch(f){default:return{width:p};case"exiting":return{width:0,transition:"width ".concat(R,"ms ease-out")};case"exited":return{width:0}}};return l.createElement(te,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:d,onExited:function(){var f=o.current;f&&(r==null||r(f))},timeout:R,nodeRef:o},function(v){return l.createElement("div",{ref:o,style:j({overflow:"hidden",whiteSpace:"nowrap"},g(v))},i)})},We=["in","onExited"],Ge=function(t){return function(i){var d=i.in,r=i.onExited,o=D(i,We);return l.createElement(Ne,{in:d,onExited:r},l.createElement(t,k({cropWithEllipsis:d},o)))}},Ue=Ge,He=function(t){return function(i){return l.createElement(oe,k({component:t,duration:i.isMulti?R:1},i))}},Ye=He,Je=function(t){return function(i){return l.createElement(oe,k({component:t},i))}},Qe=Je,Xe=["component"],Ze=["children"],Ke=function(t){return function(i){return i.isMulti?l.createElement(en,k({component:t},i)):l.createElement(re,k({component:t},i))}},en=function(t){var i=t.component,d=D(t,Xe),r=nn(d);return l.createElement(re,k({component:i},r))},nn=function(t){var i=t.children,d=D(t,Ze),r=d.isMulti,o=d.hasValue,a=d.innerProps,c=d.selectProps,p=c.components,h=c.controlShouldRenderValue,g=l.useState(r&&h&&o),v=M(g,2),f=v[0],$=v[1],b=l.useState(!1),y=M(b,2),w=y[0],u=y[1];l.useEffect(function(){o&&!f&&$(!0)},[o,f]),l.useEffect(function(){w&&!o&&f&&$(!1),u(!1)},[w,o,f]);var x=function(){return u(!0)},I=function(F){if(r&&l.isValidElement(F)){if(F.type===p.MultiValue)return l.cloneElement(F,{onExited:x});if(F.type===p.Placeholder&&f)return null}return F},S=j(j({},a),{},{style:j(j({},a==null?void 0:a.style),{},{display:r&&o||f?"flex":"grid"})}),de=j(j({},d),{},{innerProps:S,children:l.Children.toArray(i).map(I)});return de},tn=Ke,rn=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],ae=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=Ie({components:t}),d=i.Input,r=i.MultiValue,o=i.Placeholder,a=i.SingleValue,c=i.ValueContainer,p=D(i,rn);return j({Input:qe(d),MultiValue:Ue(r),Placeholder:Ye(o),SingleValue:Qe(a),ValueContainer:tn(c)},p)},V=ae();V.Input;V.MultiValue;V.Placeholder;V.SingleValue;V.ValueContainer;var on=De(ae);function an(e){return pe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}const dn=s.div`
  width: 100%;
  margin-bottom: 70px;
`,sn=s(q)`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  align-content: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    column-gap: 40px;
  }
`,ln=s.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  width: 100%;
  height: 320px;
  background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};

  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 320px;
    height: 320px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 400px;
    height: 400px;
  }
`,cn=s.img`
  height: 100%;
  position: absolute;
  width: 100%;
  object-fit: cover;
`,pn=s(C)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`,un=s.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 18px;
  padding: 0;
  color: #f3f3f3;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  background-color: transparent;
  border: none;
  pointer-events: none;
`,xn=s.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    row-gap: 40px;
  }
  @media screen and (min-width: 1440px) {
    width: 394px;
  }
`,hn=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media screen and (min-width: 1440px) {
    row-gap: 40px;
  }
`,B=s.div`
  position: relative;
`,H=s(C)`
  padding: 0;
  padding-bottom: 14px;

  width: 100%;

  border: none;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  font-size: 14px;
  font-weight: 400;

  line-height: 1.357;
  transition: border-color ${m};

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    // color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 1.285;

    padding-bottom: 18px;
  }
`,Y=s.label`
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
`,J=s.p`
  // padding-bottom: 15px;
  width: 100%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.selectDownOptionRegular};
  font-size: 14px;
  font-weight: 400;

  line-height: 1.357;
  transition: border-color ${m};

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
  }
`,Q=s(N)`
  & .Select__control {
    min-width: 100px;
    padding-bottom: 15px;

    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
    border-radius: 0;

    svg {
      transform: rotate(0deg);
      transition: transform ${m};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-170deg);
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
    padding: 0;
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({theme:e})=>e.selectDownOptionText};
    padding: 0;

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
    color: ${({theme:e})=>e.mainText};
    margin: 0;
    padding: 0;

    &:hover {
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
    max-width: 150px;
    width: 100%;
    padding-right: 12px;

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }

  & .Select__menu {
    margin: 0;
    margin-top: 4px;
    border-radius: 12px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    overflow: hidden;

    min-width: 135px;

    top: 32px;
    right: 0;

    @media screen and (min-width: 768px) {
      border-radius: 20px;
      min-width: 155px;
    }

    @media screen and (min-width: 1440px) {
      border-radius: 20px;
      min-width: 170px;
    }
  }

  & .Select__menu-list {
    padding: 8px;
    border-radius: 12px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    max-height: 300px;

    @media screen and (min-width: 768px) {
      padding: 12px;

      border-radius: 20px;
      max-height: 400px;
    }

    @media screen and (min-width: 768px) {
      padding: 12px;

      border-radius: 20px;
      max-height: 460px;
    }
  }

  & .Select__option {
    padding: 4px 6px;
    border-radius: 12px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${m},
      background-color ${m};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;
    font-size: 12px;
    overflow-wrap: break-word;

    &:hover,
    &:focus {
      color: ${({theme:e})=>e.mainText};
    }

    &:active {
      color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      background-color: ${({theme:e})=>e.selectDropdownOptionBgActive};
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.56;
      border-radius: 16px;
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }
`,mn=s.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`,X=s.label`
  color: ${({theme:e})=>e.selectDownOptionRegular};
  line-height: 1.35;
  letter-spacing: -0.02em;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  column-gap: 6px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 22px;
    column-gap: 8px;
  }
`,O=s(C)`
  appearance: none;
  min-width: 20px;
  height: 20px;
  border: 2px solid ${({theme:e})=>e.selectDownOptionRegular};
  border-radius: 50%;
  background-color: transparent;
  transition: border-color ${m};
  cursor: pointer;
  position: relative;

  &:checked {
    border-color: ${({theme:e})=>e.mainText};
  }

  &::before {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    left: 2.35px;
    top: 2.35px;
    background-color: transparent;
    border-radius: 50%;
    transition: background-color ${m};
  }

  &:checked::before {
    content: '';
    position: absolute;
    width: 70%;
    height: 70%;
    left: 2.35px;
    top: 2.35px;
    background-color: ${({theme:e})=>e.selectDownOptionText};
    border-radius: 50%;
  }
`,Z=s.span`
  transition: color ${m};
  ${O}:checked ~ & {
    // color: ${({theme:e})=>e.mainText};
    color: ${({theme:e})=>e.mainText};
  }
`,gn={backgroundColor:"#F3F3F3",width:"50px",height:"50px",borderRadius:"6px",color:"#161F37"},fn=ie().shape({drinkThumb:T().url().required("Cocktail photo is required"),drink:T().min(3,"Cocktail name must contain at least 3 symbols").required("Cocktail title is required"),description:T().min(10,"The cocktail description must contain at least 10 symbols").required("Description of the cocktail is required"),category:T().required("Cocktail category is a required"),glass:T().required("Cocktail glass is a required")}),bn=on(),wn=({formData:e,setFormData:t,refId:i})=>{const d=z(),r=E(w=>w.filters.categories),o=E(w=>w.filters.glasses),[a,c]=l.useState(null),[p,h]=l.useState(!1),[g,v]=l.useState(""),[f,$]=l.useState("");l.useEffect(()=>{d(ue()),d(xe())},[d]);const b=w=>{const u=w.target.files[0];if(u){const x=URL.createObjectURL(u);t({...e,drinkThumb:u}),c(x),h(!0)}},y=w=>{const{name:u,value:x}=w.target;console.log(e),t({...e,[u]:x})};return n.jsx(dn,{children:n.jsx(L,{initialValues:{drink:e.drink,description:e.description,category:e.category,glass:e.glass,alcoholic:e.alcoholic,drinkThumb:e.drinkThumb},validationSchema:fn,innerRef:i,children:({values:w,handleChange:u})=>n.jsxs(sn,{children:[n.jsxs(ln,{children:[n.jsx(pn,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:b,style:{display:"none"}}),n.jsxs(un,{type:"button",children:[n.jsx(an,{style:gn}),n.jsx("span",{children:"Add image"})]}),a&&n.jsx(cn,{src:a,alt:"Preview"}),n.jsx(P,{absolute:!0,name:"drinkThumb"})]}),n.jsxs(xn,{children:[n.jsxs(hn,{children:[n.jsxs(B,{children:[n.jsx(H,{name:"drink",value:w.drink,onChange:x=>{y(x),u(x)},placeholder:"Enter item drink"}),n.jsx(P,{absolute:!0,name:"drink"})]}),n.jsxs(B,{children:[n.jsx(H,{name:"description",value:w.description,onChange:x=>{y(x),u(x)},placeholder:"Enter about description"}),n.jsx(P,{absolute:!0,name:"description"})]}),n.jsxs(Y,{children:[n.jsx(J,{children:"Category"}),n.jsxs(B,{children:[n.jsx(C,{name:"category",value:w.category,onChange:x=>{y(x),u(x)},placeholder:"Category",children:({field:x,form:I})=>n.jsx(Q,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:r.map(S=>({value:S,label:S})),name:x.name,id:"cocktail",...x,value:g?{value:g,label:g}:"",onChange:S=>{v(S?S.value:""),I.setFieldValue("category",S?S.value:"")},placeholder:"Cocktail"})}),n.jsx(P,{name:"category"})]})]}),n.jsxs(Y,{children:[n.jsx(J,{children:"Glasses"}),n.jsxs(B,{children:[n.jsx(C,{name:"glass",value:w.glass,onChange:x=>{y(x),u(x)},placeholder:"Glasses",children:({field:x,form:I})=>n.jsx(Q,{classNamePrefix:"Select",closeMenuOnSelect:!0,components:bn,isClearable:!0,options:o.map(S=>({value:S,label:S})),name:x.name,id:"glasses",...x,value:f?{value:f,label:f}:"",onChange:S=>{S&&($(S.value),I.setFieldValue("glass",S.value))},placeholder:"Glasses"})}),n.jsx(P,{name:"glass"})]})]})]}),n.jsxs(mn,{children:[n.jsxs(X,{children:[n.jsx(O,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:()=>t({...e,alcoholic:"Alcoholic"})}),n.jsx(Z,{children:"Alcoholic"})]}),n.jsxs(X,{children:[n.jsx(O,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:()=>t({...e,alcoholic:"Non alcoholic"})}),n.jsx(Z,{children:"Non-alcoholic"})]})]})]})]})})})},vn=s.div`
  position: relative;
  margin-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,$n=s.h2`
  margin-bottom: 40px;

  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 0em;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 40px;

    line-height: 1.1;
  }
`,Sn=s(q)`
  width: 100%;
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
`,yn=s.label`
  flex: 2;

  @media screen and (min-width: 768px) {
    flex: 2.22;
  }
`,jn=s.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 10px 15px;
  column-gap: 16px;
  justify-content: space-between;
  align-items: center;
  min-width: 104px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  border-radius: 40px;
  box-shadow: none;

  @media screen and (min-width: 768px) {
    padding: 11px 17px;

    max-width: 114px;
  }
`,K=s.button`
  padding: 0;
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform ${m};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
  }
`,kn=s.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,_n=s.div`
  display: flex;
  align-items: center;
  row-gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,Cn=s.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 188px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`,Tn=s.div`
  display: flex;
  column-gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,En=s.div`
  flex: 1;
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${m};
  justify-content: space-between;

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 1440px) {
  }
`,Dn=s(C)`
  background-color: transparent;
  max-width: 35px;
  display: inline-block;
  padding: 15px 17px;
  padding-right: 0;
  padding-top: 18px;
  border: none;

  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${m};

  &:focus {
    outline: transparent;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  &::placeholder {
    color: ${({theme:e})=>e.mainText};
    line-height: 1.285;
  }

  @media screen and (min-width: 768px) {
    min-width: 65px;
    padding-left: 23px;
  }
`,In=s(N)`
  & .Select__control {
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    display: flex;

    svg {
      transform: rotate(0deg);
      transition: transform ${m};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }
    @media screen and (min-width: 768px) {
      width: 80px;
    }
  }

  & .Select__value-container {
    padding: 15px 0;
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({theme:e})=>e.mainText};
    padding: 15px 17px;
    padding-left: 8px;

    cursor: pointer;

    &:hover {
      color: ${({theme:e})=>e.mainText};
    }

    @media screen and (min-width: 768px) {
      padding: 17px 23px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({theme:e})=>e.selectDropdownOptionTextActive};
    margin: 0;
    padding: 0;

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
    border-radius: 12px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    min-width: 62px;
    right: 0;

    @media screen and (min-width: 768px) {
      border-radius: 20px;
    }
  }

  & .Select__menu-list {
    padding: 8px;
    border-radius: 12px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    max-height: 400px;

    @media screen and (min-width: 768px) {
      padding: 10px;
      border-radius: 20px;
    }
  }

  & .Select__option {
    padding: 4px;
    border-radius: 12px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${m},
      background-color ${m};
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
      font-size: 16px;
    }
  }
`,Fn=s(N)`
  & .Select__control {
    width: 100%;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    border: 1px solid ${({theme:e})=>e.inputBorder};
    transition: border-color ${m};

    &:hover {
      border-color: ${({theme:e})=>e.inputBorder};
    }
    &.Select__control--is-focused {
      border-color: ${({theme:e})=>e.inputBorderFocus};
    }
    svg {
      transform: rotate(0deg);
      transition: transform ${m};
    }

    &.Select__control--menu-is-open {
      svg {
        transform: rotate(-180deg);
      }
    }

    @media screen and (min-width: 1440px) {
      width: 316px;
    }
  }

  & .Select__value-container {
    padding: 15px 17px;
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
    padding: 15px 17px;
    padding-left: 8px;
    cursor: pointer;

    &:hover {
      color: ${({theme:e})=>e.mainText};
      /* color: ${({theme:e})=>e.selectDownOptionText}; */
    }

    @media screen and (min-width: 768px) {
      padding: 18px 24px;
      padding-left: 8px;
    }
  }

  & .Select__input-container {
    color: ${({theme:e})=>e.mainText};
    margin: 0;
    padding: 0;

    &:hover {
      // color: ${({theme:e})=>e.selectDropdownOptionTextActive};
      /* color: #f3f3f3; */
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

  & .Select__placeholder {
    line-height: 1.285;
    color: ${({theme:e})=>e.subTitleText};

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
    }
  }
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
    border-radius: 12px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    overflow: hidden;

    @media screen and (min-width: 768px) {
      border-radius: 20px;
    }
  }

  & .Select__menu-list {
    padding: 8px;
    border-radius: 12px;
    background-color: ${({theme:e})=>e.selectDropdownBackground};
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    max-height: 400px;

    @media screen and (min-width: 768px) {
      padding: 12px;

      border-radius: 20px;
    }
  }

  & .Select__option {
    padding: 4px;
    border-radius: 12px;
    color: ${({theme:e})=>e.selectDropdownOptionText};
    transition:
      color ${m},
      background-color ${m};
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
      border-radius: 20px;
    }

    @media screen and (min-width: 1440px) {
      padding: 4px 6px;
      font-size: 16px;
    }
  }
`,Pn=s.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: ${({theme:e})=>e.mainText};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform ${m};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`,ee=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],Vn=({formData:e,setFormData:t,refId:i})=>{const{width:d}=he(),r=d>=768?20:18,o=10,a=z(),c=E($=>$.filters.ingredients),[p,h]=l.useState(e.ingredients.length),g=($,b,y)=>{const w=[...e.ingredients];w[y][$]=b,t(u=>({...u,ingredients:w}))};l.useEffect(()=>{a(me())},[a]);const v=()=>{p<o&&(t($=>({...$,ingredients:[...$.ingredients,{ingredient:"",measure:"",quantity:""}]})),h(p+1))},f=$=>{if(p>1){const b=[...e.ingredients];b.splice($,1),t(y=>({...y,ingredients:b})),h(p-1)}};return n.jsxs(vn,{children:[n.jsx($n,{children:"Ingredients"}),n.jsx(L,{initialValues:e,innerRef:i,children:n.jsx(Sn,{children:n.jsx(ge,{name:"ingredients",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(jn,{children:[n.jsx(K,{type:"button",onClick:()=>f(),children:n.jsx(fe,{size:16})}),n.jsx(kn,{children:p}),n.jsx(K,{type:"button",onClick:v,children:n.jsx(be,{size:16})})]}),c&&n.jsx(_n,{children:e.ingredients.map(($,b)=>{const y=ee.find(u=>u.value===$.measure),w=c.find(u=>u.title===$.ingredient);return n.jsxs(Cn,{children:[n.jsxs(Tn,{children:[n.jsx(yn,{htmlFor:`ingredients[${b}]`,children:n.jsx(Fn,{className:"basic-single",classNamePrefix:"Select",closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:c.map(({_id:u,title:x})=>({value:u,label:x})),name:`ingredients[${b}]`,id:`ingredient${b}`,value:w,onChange:({value:u})=>g("ingredientId",u,b),placeholder:"Ingredient",blurInputOnSelect:!0})}),n.jsxs(En,{children:[n.jsx(Dn,{name:`ingredients[${b}].quantity`,value:$.quantity||"",onChange:u=>g("quantity",parseInt(u.target.value,10),b)}),n.jsx("label",{htmlFor:`ingredients[${b}].measure`,children:n.jsx(In,{className:"basic-single",classNamePrefix:"Select",options:ee,name:`ingredients[${b}].measure`,value:y||"",onChange:({value:u})=>g("measure",u,b),placeholder:"cl",isSearchable:!1})})]})]}),n.jsx(Pn,{type:"button",onClick:f,children:n.jsx(we,{size:r})})]},b)})})]})})})})]})},An=s.h2`
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
`,Bn=s(q)`
  width: 100%;
  margin-bottom: 20px;
`,zn=s.textarea`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 18px;
  padding-right: 18px;

  resize: none;
  border-radius: 14px;
  border: 1px solid ${({theme:e})=>e.inputBorder};

  opacity: 0.8;
  background: transparent;

  color: ${({theme:e})=>e.mainText};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;

  width: 100%;
  height: 184px;

  transition: border-color ${m};

  &:focus {
    outline: none;
    border-color: ${({theme:e})=>e.inputBorderFocus};
  }

  @media screen and (min-width: 768px) {
    padding-top: 14px;
    padding-bottom: 14px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 17px;
    line-height: 1.56;
    width: 480px;

    border-radius: 20px;
  }

  @media screen and (min-width: 1440px) {
  }
`,Mn=ie().shape({instructions:T().min(100,"You need to add a description of at least 100 symbols")}),Rn=({formData:e,refId:t})=>n.jsx(n.Fragment,{children:n.jsx(L,{initialValues:e,validationSchema:Mn,innerRef:t,children:n.jsxs(Bn,{children:[n.jsx(An,{htmlFor:"instructions",children:"Recipe Preparation"}),n.jsx(C,{name:"instructions",children:({field:i})=>n.jsx(zn,{...i,id:"instructions",placeholder:"Enter the recipe"})}),n.jsx(ve,{name:"textareaValue",component:"div"})]})})}),On=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 80px;
`,qn=s.button`
  border-radius: 42px;

  background: ${({theme:e})=>e.basicBtnBg};
  padding: 13px 39px;
  border: 1px solid ${({theme:e})=>e.basicBtnBg};

  color: ${({theme:e})=>e.basicBtnText};

  font-weight: 600;
  line-height: 1.2;
  transition: color ${m};
  transition:
    color ${m},
    background-color ${m},
    border-color ${m};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.basicBtnTextHover};
    background-color: ${({theme:e})=>e.basicBtnBgHover};
    border-color: ${({theme:e})=>e.basicBtnBorderHover};
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    padding: 17.5px 43px;
    font-size: 16px;
    line-height: 1.125;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`,Ln=()=>{const e=z(),t=E(v=>v.auth.user.birthDate),i=l.useRef(),d=l.useRef(),r=l.useRef(),o=new Date,a=new Date(t),c=o.getFullYear()-a.getFullYear(),[p,h]=l.useState({drink:"",description:"",alcoholic:c>=18?"Alcoholic":"Non alcoholic",category:"",glass:"",instructions:"",drinkThumb:"",ingredients:[{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""}]}),g=()=>{if(i.current&&d.current&&r.current){i.current.handleSubmit(),d.current.handleSubmit(),r.current.handleSubmit();const{values:v}=i.current,{values:f}=d.current,{values:$}=r.current,b={...p,alcoholic:v.alcoholic,category:v.category,glass:v.glass,ingredients:JSON.stringify(f.ingredients.filter(y=>y.ingredientId)),instructions:$.instructions};e(Se(b))}};return n.jsxs(On,{children:[n.jsx(wn,{formData:p,setFormData:h,refId:i}),n.jsx(Vn,{formData:p,setFormData:h,refId:d}),n.jsx(Rn,{formData:p,setFormData:h,refId:r}),n.jsx($e,{to:"/my",children:n.jsx(qn,{type:"submit",onClick:g,children:"Add"})})]})},Nn=Ln,Wn=s.h3`
  margin-bottom: 20px;

  color: #f3f3f3;
  color: ${({theme:e})=>e.mainText};
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;

    font-size: 24px;
  }
`,Gn=s.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Un=()=>n.jsxs(Gn,{children:[n.jsx(Wn,{children:"Follow Us"}),n.jsx(ye,{isInFooter:!1})]}),Hn=Un,Yn=s.h3`
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
`,Jn=s.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
`,Qn=s.li`
  display: flex;
  align-items: center;
`,Xn=s.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  column-gap: 14px;
`,ne=s.img`
  border-radius: 8px;
`,Zn=s.div`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  padding: 15px;
  background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};
`,Kn=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  text-overflow: ellipsis;
`,et=s.h3`
  color: ${({theme:e})=>e.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,nt=s.p`
  overflow: hidden;

  color: ${({theme:e})=>e.subTitleText};
  text-overflow: ellipsis;

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media screen and (min-width: 768px) {
    width: 232px;
  }

  @media screen and (min-width: 1440px) {
    width: 209px;
  }
`,tt=()=>{const e=z(),t=E(r=>r.drinks.popularDrinks.slice(0,4)),{isLoading:i,error:d}=E(je);return l.useEffect(()=>{e(ke())},[e]),n.jsxs("div",{children:[n.jsx(Yn,{children:"Popular drinks"}),i&&n.jsx(_e,{}),d&&Ce.error("Sorry. There are no images ... 😭"),n.jsx(Jn,{children:t.map(({_id:r,drinkThumb:o,drink:a,shortDescription:c})=>n.jsx(Qn,{children:n.jsxs(Xn,{href:`drinks/${r}`,children:[o?n.jsx(ne,{src:o,alt:a,width:90,height:90}):n.jsx(Zn,{children:n.jsx(ne,{src:Fe,alt:a,width:60,height:60})}),n.jsxs(Kn,{children:[n.jsx(et,{children:a}),n.jsx(nt,{children:c})]})]})},r))})]})},it=tt,rt=s.section`
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
`,ot=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 80px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;function ct(){return n.jsx(rt,{children:n.jsxs(Te,{children:[n.jsx(Pe,{title:"Add drink"}),n.jsxs(ot,{children:[n.jsx("div",{children:n.jsx(Nn,{})}),n.jsxs("div",{children:[n.jsx(Hn,{}),n.jsx(it,{})]})]})]})})}export{ct as default};
