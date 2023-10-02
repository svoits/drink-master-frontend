import{r as s,_ as de,o as k,p as le,R as I,T as q,q as S,v as Z,G as se,s as l,t as f,F as B,d as _,f as K,h as C,c as V,e as T,i as ce,w as pe,j as n,m as R,E as P,a as ue,k as xe,x as he,y as me,z as ge,A as fe,b as we,B as be,S as ve,D as $e,H as ye,L as Se,C as ke}from"./index-497510b8.js";import{_ as je,m as _e,d as Ce,a as E,b as A,S as O}from"./react-select.esm-39a4cf9b.js";import{P as Te}from"./PageTitle-b3e55571.js";function L(e,t){var i=function(o){return t&&s.isValidElement(o)?t(o):o},a=Object.create(null);return e&&s.Children.map(e,function(r){return r}).forEach(function(r){a[r.key]=i(r)}),a}function Ee(e,t){e=e||{},t=t||{};function i(h){return h in t?t[h]:e[h]}var a=Object.create(null),r=[];for(var o in e)o in t?r.length&&(a[o]=r,r=[]):r.push(o);var d,c={};for(var p in t){if(a[p])for(d=0;d<a[p].length;d++){var x=a[p][d];c[a[p][d]]=i(x)}c[p]=i(p)}for(d=0;d<r.length;d++)c[r[d]]=i(r[d]);return c}function j(e,t,i){return i[t]!=null?i[t]:e.props[t]}function Fe(e,t){return L(e.children,function(i){return s.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:j(i,"appear",e),enter:j(i,"enter",e),exit:j(i,"exit",e)})})}function De(e,t,i){var a=L(e.children),r=Ee(t,a);return Object.keys(r).forEach(function(o){var d=r[o];if(s.isValidElement(d)){var c=o in t,p=o in a,x=t[o],h=s.isValidElement(x)&&!x.props.in;p&&(!c||h)?r[o]=s.cloneElement(d,{onExited:i.bind(null,d),in:!0,exit:j(d,"exit",e),enter:j(d,"enter",e)}):!p&&c&&!h?r[o]=s.cloneElement(d,{in:!1}):p&&c&&s.isValidElement(x)&&(r[o]=s.cloneElement(d,{onExited:i.bind(null,d),in:x.props.in,exit:j(d,"exit",e),enter:j(d,"enter",e)}))}}),r}var Ie=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},Pe={component:"div",childFactory:function(t){return t}},N=function(e){de(t,e);function t(a,r){var o;o=e.call(this,a,r)||this;var d=o.handleExited.bind(je(o));return o.state={contextValue:{isMounting:!0},handleExited:d,firstRender:!0},o}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var d=o.children,c=o.handleExited,p=o.firstRender;return{children:p?Fe(r,c):De(r,d,c),firstRender:!1}},i.handleExited=function(r,o){var d=L(this.props.children);r.key in d||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var p=k({},c.children);return delete p[r.key],{children:p}}))},i.render=function(){var r=this.props,o=r.component,d=r.childFactory,c=le(r,["component","childFactory"]),p=this.state.contextValue,x=Ie(this.state.children).map(d);return delete c.appear,delete c.enter,delete c.exit,o===null?I.createElement(q.Provider,{value:p},x):I.createElement(q.Provider,{value:p},I.createElement(o,c,x))},t}(I.Component);N.propTypes={};N.defaultProps=Pe;const ee=N;var Ve=["in","onExited","appear","enter","exit"],Ae=function(t){return function(i){i.in,i.onExited,i.appear,i.enter,i.exit;var a=E(i,Ve);return s.createElement(t,a)}},ze=Ae,Me=["component","duration","in","onExited"],ne=function(t){var i=t.component,a=t.duration,r=a===void 0?1:a,o=t.in;t.onExited;var d=E(t,Me),c=s.useRef(null),p={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(r,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(Z,{mountOnEnter:!0,unmountOnExit:!0,in:o,timeout:r,nodeRef:c},function(x){var h={style:S({},p[x]),ref:c};return s.createElement(i,k({innerProps:h},d))})},z=260,Be=function(t){var i=t.children,a=t.in,r=t.onExited,o=s.useRef(null),d=s.useState("auto"),c=A(d,2),p=c[0],x=c[1];s.useEffect(function(){var v=o.current;if(v){var m=window.requestAnimationFrame(function(){return x(v.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(m)}}},[]);var h=function(m){switch(m){default:return{width:p};case"exiting":return{width:0,transition:"width ".concat(z,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(Z,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:a,onExited:function(){var m=o.current;m&&(r==null||r(m))},timeout:z,nodeRef:o},function(v){return s.createElement("div",{ref:o,style:S({overflow:"hidden",whiteSpace:"nowrap"},h(v))},i)})},Re=["in","onExited"],Oe=function(t){return function(i){var a=i.in,r=i.onExited,o=E(i,Re);return s.createElement(Be,{in:a,onExited:r},s.createElement(t,k({cropWithEllipsis:a},o)))}},Le=Oe,Ne=function(t){return function(i){return s.createElement(ne,k({component:t,duration:i.isMulti?z:1},i))}},qe=Ne,We=function(t){return function(i){return s.createElement(ne,k({component:t},i))}},Ge=We,Ue=["component"],Ye=["children"],He=function(t){return function(i){return i.isMulti?s.createElement(Je,k({component:t},i)):s.createElement(ee,k({component:t},i))}},Je=function(t){var i=t.component,a=E(t,Ue),r=Xe(a);return s.createElement(ee,k({component:i},r))},Xe=function(t){var i=t.children,a=E(t,Ye),r=a.isMulti,o=a.hasValue,d=a.innerProps,c=a.selectProps,p=c.components,x=c.controlShouldRenderValue,h=s.useState(r&&x&&o),v=A(h,2),m=v[0],$=v[1],w=s.useState(!1),y=A(w,2),b=y[0],u=y[1];s.useEffect(function(){o&&!m&&$(!0)},[o,m]),s.useEffect(function(){b&&!o&&m&&$(!1),u(!1)},[b,o,m]);var g=function(){return u(!0)},ie=function(F){if(r&&s.isValidElement(F)){if(F.type===p.MultiValue)return s.cloneElement(F,{onExited:g});if(F.type===p.Placeholder&&m)return null}return F},re=S(S({},d),{},{style:S(S({},d==null?void 0:d.style),{},{display:r&&o||m?"flex":"grid"})}),oe=S(S({},a),{},{innerProps:re,children:s.Children.toArray(i).map(ie)});return oe},Qe=He,Ze=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],te=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=Ce({components:t}),a=i.Input,r=i.MultiValue,o=i.Placeholder,d=i.SingleValue,c=i.ValueContainer,p=E(i,Ze);return S({Input:ze(a),MultiValue:Le(r),Placeholder:qe(o),SingleValue:Ge(d),ValueContainer:Qe(c)},p)},D=te();D.Input;D.MultiValue;D.Placeholder;D.SingleValue;D.ValueContainer;var Ke=_e(te);function en(e){return se({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}const nn=l.div`
  width: 100%;
  margin-bottom: 80px;

`,tn=l(B)`
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
`,rn=l.label`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  cursor: pointer;

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
`,on=l.img`
  height: 100%;
  position: absolute;
  width: 100%;
  object-fit: cover;
`,an=l(_)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`,dn=l.button`
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
`,ln=l.div`
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
`,sn=l.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media screen and (min-width: 1440px) {
    row-gap: 40px;
  }
`,W=l(_)`
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
  transition: border-color ${f};

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
`,G=l.label`
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
`,U=l.p`
  // padding-bottom: 15px;
  width: 100%;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.selectDownOptionRegular};
  font-size: 14px;
  font-weight: 400;

  line-height: 1.357;
  transition: border-color ${f};

  @media screen and (min-width: 768px) {
    font-size: 16px;

    line-height: 22px;

    padding-bottom: 19px;
  }
`,Y=l(O)`
  & .Select__control {
    min-width: 100px;
    padding-bottom: 15px;

    background-color: transparent;
    border: none;
    box-shadow: none;
    cursor: pointer;
    border-bottom: 1px solid ${({theme:e})=>e.inputBorder};

    svg {
      transform: rotate(0deg);
      transition: transform ${f};
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
    padding: 0 8px;
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
    max-width: 150px;
    width: 100%;

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
      min-width: 180px;
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
      color ${f},
      background-color ${f};
    background-color: transparent;
    cursor: pointer;
    line-height: 1.285;
    font-size: 12px;

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
`,cn=l.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`,H=l.label`
  color: ${({theme:e})=>e.inputBorder};
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
`,M=l(_)`
  appearance: none;
  width: 20px;
  height: 20px;

  border: 2px solid ${({theme:e})=>e.selectDownOptionText};;
  border-radius: 50%;
  background-color: transparent;
  transition: border-color ${f};
  cursor: pointer;
  position: relative;

  &:not(:checked) {
    // border: 2px solid #F3F3F380
    // border: 2px solid #0A0A1180
    border: 1px solid  ${({theme:e})=>e.selectDownOptionRegular};

  }

  &:checked::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 3.2px;
    top: 3.2px;
    background-color: ${({theme:e})=>e.selectDownOptionText};
    border-radius: 50%;
  }

  &:not(:checked)::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 3.2px;
    top: 3.2px;
    background-color: transparent;
    border-radius: 50%;
    transition: background-color ${f};
  }
`,J=l.span`
  transition: color ${f};
  ${M}:checked ~ & {
    // color: ${({theme:e})=>e.mainText};
    color: ${({theme:e})=>e.mainText};
  }
`,pn={backgroundColor:"#F3F3F3",width:"50px",height:"50px",borderRadius:"6px",color:"#161F37"},un=K().shape({drinkThumb:C().required("Cocktail photo is a mandatory field").url(),drink:C().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),description:C().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:C().required("Cocktail category is a required field"),glass:C().required("Cocktail glass is a required field")}),xn=Ke(),hn=({formData:e,setFormData:t,refId:i})=>{const a=V(),r=T(b=>b.filters.categories),o=T(b=>b.filters.glasses),[d,c]=s.useState(null),[p,x]=s.useState(!1),[h,v]=s.useState(""),[m,$]=s.useState("");s.useEffect(()=>{a(ce()),a(pe())},[a]);const w=b=>{const u=b.target.files[0];if(u){const g=URL.createObjectURL(u);t({...e,drinkThumb:u}),c(g),x(!0)}},y=b=>{const{name:u,value:g}=b.target;t({...e,[u]:g})};return n.jsx(nn,{children:n.jsx(R,{initialValues:e,validationSchema:un,innerRef:i,children:n.jsxs(tn,{children:[n.jsxs(rn,{htmlFor:"drinkThumb",children:[n.jsx(an,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:w,style:{display:"none"}}),n.jsxs(dn,{type:"button",children:[n.jsx(en,{style:pn}),n.jsx("span",{children:"Add image"})]}),d&&n.jsx(on,{src:d,alt:"Preview"}),n.jsx(P,{name:"drinkThumb",component:"div"})]}),n.jsxs(ln,{children:[n.jsxs(sn,{children:[n.jsx(W,{name:"drink",value:e.drink,onChange:y,placeholder:"Enter item drink"}),n.jsx(P,{name:"drink",component:"div"}),n.jsx(W,{name:"description",value:e.description,onChange:y,placeholder:"Enter about description"}),n.jsx(P,{name:"description",component:"div"}),n.jsxs(G,{htmlFor:"category",children:[n.jsx(U,{children:"Category"}),n.jsx(_,{name:"category",value:e.category,onChange:y,placeholder:"Category",children:({field:b,form:u})=>n.jsx(Y,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:r.map(g=>({value:g,label:g})),name:b.name,id:"cocktail",...b,value:h?{value:h,label:h}:"",onChange:g=>{v(g?g.value:""),u.setFieldValue("category",g?g.value:"")},placeholder:"Cocktail"})})]}),n.jsxs(G,{htmlFor:"glass",children:[n.jsx(U,{children:"Glasses"}),n.jsx(_,{name:"glass",value:e.glass,onChange:y,placeholder:"Glasses",children:({field:b,form:u})=>n.jsx(Y,{classNamePrefix:"Select",closeMenuOnSelect:!0,components:xn,isClearable:!0,options:o.map(g=>({value:g,label:g})),name:b.name,id:"glasses",...b,value:m?{value:m,label:m}:"",onChange:g=>{g&&($(g.value),u.setFieldValue("glass",g.value))},placeholder:"Glasses"})})]})]}),n.jsxs(cn,{children:[n.jsxs(H,{children:[n.jsx(M,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:()=>t({...e,alcoholic:"Alcoholic"})}),n.jsx(J,{children:"Alcoholic"})]}),n.jsxs(H,{children:[n.jsx(M,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:()=>t({...e,alcoholic:"Non alcoholic"})}),n.jsx(J,{children:"Non-alcoholic"})]})]})]})]})})})},mn=l.div`
  position: relative;
  margin-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,gn=l.h2`
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
`,fn=l(B)`
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
`,wn=l.label`
  flex: 2;

  @media screen and (min-width: 768px) {
    flex: 2.22;
  }
`,bn=l.div`
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
`,X=l.button`
  padding: 0;
  background-color: transparent;
  color: ${({theme:e})=>e.mainText};
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform ${f};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  @media screen and (min-width: 768px) {
  }
`,vn=l.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,$n=l.div`
  display: flex;
  align-items: center;
  row-gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,yn=l.div`
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
`,Sn=l.div`
  display: flex;
  column-gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,kn=l.div`
  flex: 1;
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 40px;
  border: 1px solid ${({theme:e})=>e.inputBorder};
  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${f};
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
`,jn=l(_)`
  background-color: transparent;
  max-width: 35px;
  display: inline-block;
  padding: 15px 17px;
  padding-right: 0;
  border: none;

  color: ${({theme:e})=>e.mainText};
  line-height: 1.285;
  transition: border-color ${f};

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
`,_n=l(O)`
  & .Select__control {
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    display: flex;

    svg {
      transform: rotate(0deg);
      transition: transform ${f};
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
      color ${f},
      background-color ${f};
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

    @media screen and (min-width: 1440px) {
      font-size: 16px;
    }
  }
`,Cn=l(O)`
  & .Select__control {
    width: 100%;
    background-color: transparent;
    border: none;
    border-radius: 40px;
    box-shadow: none;
    cursor: pointer;
    border: 1px solid ${({theme:e})=>e.inputBorder};
    transition: border-color ${f};

    &:hover {
      border-color: ${({theme:e})=>e.inputBorder};
    }
    &.Select__control--is-focused {
      border-color: ${({theme:e})=>e.inputBorderFocus};
    }
    svg {
      transform: rotate(0deg);
      transition: transform ${f};
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
    color: ${({theme:e})=>e.selectDropdownOptionTextActive};
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
      color ${f},
      background-color ${f};
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
`,Tn=l.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color: ${({theme:e})=>e.mainText};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform ${f};

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`,Q=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],En=({formData:e,setFormData:t,refId:i})=>{const{width:a}=ue(),r=a>=768?20:18,o=10,d=V(),c=T($=>$.filters.ingredients),[p,x]=s.useState(e.ingredients.length),h=($,w,y)=>{const b=[...e.ingredients];b[y][$]=w,t(u=>({...u,ingredients:b}))};s.useEffect(()=>{d(xe())},[d]);const v=()=>{p<o&&(t($=>({...$,ingredients:[...$.ingredients,{ingredient:"",measure:"",quantity:""}]})),x(p+1))},m=$=>{if(p>1){const w=[...e.ingredients];w.splice($,1),t(y=>({...y,ingredients:w})),x(p-1)}};return n.jsxs(mn,{children:[n.jsx(gn,{children:"Ingredients"}),n.jsx(R,{initialValues:e,innerRef:i,children:n.jsx(fn,{children:n.jsx(he,{name:"ingredients",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(bn,{children:[n.jsx(X,{type:"button",onClick:()=>m(),children:n.jsx(me,{size:16})}),n.jsx(vn,{children:p}),n.jsx(X,{type:"button",onClick:v,children:n.jsx(ge,{size:16})})]}),c&&n.jsx($n,{children:e.ingredients.map(($,w)=>{const y=Q.find(u=>u.value===$.measure),b=c.find(u=>u.title===$.ingredient);return n.jsxs(yn,{children:[n.jsxs(Sn,{children:[n.jsx(wn,{htmlFor:`ingredients[${w}]`,children:n.jsx(Cn,{className:"basic-single",classNamePrefix:"Select",closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:c.map(({_id:u,title:g})=>({value:u,label:g})),name:`ingredients[${w}]`,id:`ingredient${w}`,value:b,onChange:({value:u})=>h("ingredientId",u,w),placeholder:"Ingredient",blurInputOnSelect:!0})}),n.jsxs(kn,{children:[n.jsx(jn,{name:`ingredients[${w}].quantity`,value:$.quantity||"",onChange:u=>h("quantity",parseInt(u.target.value,10),w)}),n.jsx("label",{htmlFor:`ingredients[${w}].measure`,children:n.jsx(_n,{className:"basic-single",classNamePrefix:"Select",options:Q,name:`ingredients[${w}].measure`,value:y||"",onChange:({value:u})=>h("measure",u,w),placeholder:"cl",isSearchable:!1})})]})]}),n.jsx(Tn,{type:"button",onClick:m,children:n.jsx(fe,{size:r})})]},w)})})]})})})})]})},Fn=l.h2`
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
`,Dn=l(B)`
  width: 100%;
  margin-bottom: 20px;
`,In=l.textarea`
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

  transition: border-color ${f};

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
`,Pn=K().shape({instructions:C().min(100,"You need to add a description of at least 100 symbols")}),Vn=({formData:e,refId:t})=>n.jsx(n.Fragment,{children:n.jsx(R,{initialValues:e,validationSchema:Pn,innerRef:t,children:n.jsxs(Dn,{children:[n.jsx(Fn,{htmlFor:"instructions",children:"Recipe Preparation"}),n.jsx(_,{name:"instructions",children:({field:i})=>n.jsx(In,{...i,id:"instructions",placeholder:"Enter the recipe"})}),n.jsx(P,{name:"textareaValue",component:"div"})]})})}),An=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 80px;
`,zn=l.button`
  border-radius: 42px;

  background: ${({theme:e})=>e.hoverBackgroundColorLink};
  padding: 13px 39px;
  border: 1px solid transparent;

  color: ${({theme:e})=>e.hoverColorTextLink};

  font-weight: 600;
  line-height: 1.2;
  transition: color ${f};
  transition: background-color ${f};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.activeNavLinkText};
    background: ${({theme:e})=>e.activeNavLinkBg};
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
`,Mn=()=>{const e=V(),t=T(v=>v.auth.user.birthDate),i=s.useRef(),a=s.useRef(),r=s.useRef(),o=new Date,d=new Date(t),c=o.getFullYear()-d.getFullYear(),[p,x]=s.useState({drink:"",description:"",alcoholic:c>=18?"Alcoholic":"Non alcoholic",category:"",glass:"",instructions:"",drinkThumb:"",ingredients:[{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""}]}),h=()=>{if(i.current&&a.current&&r.current){i.current.handleSubmit(),a.current.handleSubmit(),r.current.handleSubmit();const{values:v}=i.current,{values:m}=a.current,{values:$}=r.current,w={...p,alcoholic:v.alcoholic,category:v.category,glass:v.glass,ingredients:JSON.stringify(m.ingredients.filter(y=>y.ingredientId)),instructions:$.instructions};e(be(w))}};return n.jsxs(An,{children:[n.jsx(hn,{formData:p,setFormData:x,refId:i}),n.jsx(En,{formData:p,setFormData:x,refId:a}),n.jsx(Vn,{formData:p,setFormData:x,refId:r}),n.jsx(we,{to:"/my",children:n.jsx(zn,{type:"submit",onClick:h,children:"Add"})})]})},Bn=Mn,Rn=l.h3`
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
`,On=l.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Ln=()=>n.jsxs(On,{children:[n.jsx(Rn,{children:"Follow Us"}),n.jsx(ve,{})]}),Nn=Ln,qn=l.h3`
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
`,Wn=l.ul`
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
`,Gn=l.li`
  display: flex;
  align-items: center;
`,Un=l.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  column-gap: 14px;
`,Yn=l.img`
  border-radius: 8px;
`,Hn=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  text-overflow: ellipsis;
`,Jn=l.h3`
  color: ${({theme:e})=>e.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,Xn=l.p`
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
`,Qn=()=>{const e=V(),t=T(r=>r.drinks.popularDrinks.slice(0,4)),{isLoading:i,error:a}=T($e);return s.useEffect(()=>{e(ye())},[e]),n.jsxs("div",{children:[n.jsx(qn,{children:"Popular drinks"}),i&&n.jsx(Se,{}),a&&n.jsx("p",{children:"Sorry. There are no images ... 😭"}),n.jsx(Wn,{children:t.map(({_id:r,drinkThumb:o,drink:d,shortDescription:c})=>n.jsx(Gn,{children:n.jsxs(Un,{href:`/api/drinks/popular/${r}`,children:[n.jsx(Yn,{src:o,alt:d,width:90,height:90}),n.jsxs(Hn,{children:[n.jsx(Jn,{children:d}),n.jsx(Xn,{children:c})]})]})},r))})]})},Zn=Qn,Kn=l.section`
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
`,et=l.div`
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
`;function rt(){return n.jsx(Kn,{children:n.jsxs(ke,{children:[n.jsx(Te,{title:"Add drink"}),n.jsxs(et,{children:[n.jsx("div",{children:n.jsx(Bn,{})}),n.jsxs("div",{children:[n.jsx(Nn,{}),n.jsx(Zn,{})]})]})]})})}export{rt as default};
