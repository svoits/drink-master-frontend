import{r as s,_ as le,o as k,p as se,R as I,T as q,q as S,v as K,G as ce,s as l,t as f,F as B,d as _,f as ee,h as C,c as A,e as T,i as pe,w as ue,j as n,m as R,E as P,a as xe,k as he,x as me,y as ge,z as fe,A as we,b as be,B as ve,S as $e,D as ye,H as Se,L as ke,Q as je,C as _e}from"./index-44ec8daf.js";import{_ as Ce,m as Te,d as Ee,a as E,b as V,S as O}from"./react-select.esm-226acfee.js";import{D as De,P as Fe}from"./PageTitle-6c43ace6.js";function L(e,t){var i=function(o){return t&&s.isValidElement(o)?t(o):o},d=Object.create(null);return e&&s.Children.map(e,function(r){return r}).forEach(function(r){d[r.key]=i(r)}),d}function Ie(e,t){e=e||{},t=t||{};function i(h){return h in t?t[h]:e[h]}var d=Object.create(null),r=[];for(var o in e)o in t?r.length&&(d[o]=r,r=[]):r.push(o);var a,c={};for(var p in t){if(d[p])for(a=0;a<d[p].length;a++){var x=d[p][a];c[d[p][a]]=i(x)}c[p]=i(p)}for(a=0;a<r.length;a++)c[r[a]]=i(r[a]);return c}function j(e,t,i){return i[t]!=null?i[t]:e.props[t]}function Pe(e,t){return L(e.children,function(i){return s.cloneElement(i,{onExited:t.bind(null,i),in:!0,appear:j(i,"appear",e),enter:j(i,"enter",e),exit:j(i,"exit",e)})})}function Ae(e,t,i){var d=L(e.children),r=Ie(t,d);return Object.keys(r).forEach(function(o){var a=r[o];if(s.isValidElement(a)){var c=o in t,p=o in d,x=t[o],h=s.isValidElement(x)&&!x.props.in;p&&(!c||h)?r[o]=s.cloneElement(a,{onExited:i.bind(null,a),in:!0,exit:j(a,"exit",e),enter:j(a,"enter",e)}):!p&&c&&!h?r[o]=s.cloneElement(a,{in:!1}):p&&c&&s.isValidElement(x)&&(r[o]=s.cloneElement(a,{onExited:i.bind(null,a),in:x.props.in,exit:j(a,"exit",e),enter:j(a,"enter",e)}))}}),r}var Ve=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},ze={component:"div",childFactory:function(t){return t}},N=function(e){le(t,e);function t(d,r){var o;o=e.call(this,d,r)||this;var a=o.handleExited.bind(Ce(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}var i=t.prototype;return i.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},i.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,o){var a=o.children,c=o.handleExited,p=o.firstRender;return{children:p?Pe(r,c):Ae(r,a,c),firstRender:!1}},i.handleExited=function(r,o){var a=L(this.props.children);r.key in a||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var p=k({},c.children);return delete p[r.key],{children:p}}))},i.render=function(){var r=this.props,o=r.component,a=r.childFactory,c=se(r,["component","childFactory"]),p=this.state.contextValue,x=Ve(this.state.children).map(a);return delete c.appear,delete c.enter,delete c.exit,o===null?I.createElement(q.Provider,{value:p},x):I.createElement(q.Provider,{value:p},I.createElement(o,c,x))},t}(I.Component);N.propTypes={};N.defaultProps=ze;const ne=N;var Me=["in","onExited","appear","enter","exit"],Be=function(t){return function(i){i.in,i.onExited,i.appear,i.enter,i.exit;var d=E(i,Me);return s.createElement(t,d)}},Re=Be,Oe=["component","duration","in","onExited"],te=function(t){var i=t.component,d=t.duration,r=d===void 0?1:d,o=t.in;t.onExited;var a=E(t,Oe),c=s.useRef(null),p={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(r,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(K,{mountOnEnter:!0,unmountOnExit:!0,in:o,timeout:r,nodeRef:c},function(x){var h={style:S({},p[x]),ref:c};return s.createElement(i,k({innerProps:h},a))})},z=260,Le=function(t){var i=t.children,d=t.in,r=t.onExited,o=s.useRef(null),a=s.useState("auto"),c=V(a,2),p=c[0],x=c[1];s.useEffect(function(){var v=o.current;if(v){var m=window.requestAnimationFrame(function(){return x(v.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(m)}}},[]);var h=function(m){switch(m){default:return{width:p};case"exiting":return{width:0,transition:"width ".concat(z,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(K,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:d,onExited:function(){var m=o.current;m&&(r==null||r(m))},timeout:z,nodeRef:o},function(v){return s.createElement("div",{ref:o,style:S({overflow:"hidden",whiteSpace:"nowrap"},h(v))},i)})},Ne=["in","onExited"],qe=function(t){return function(i){var d=i.in,r=i.onExited,o=E(i,Ne);return s.createElement(Le,{in:d,onExited:r},s.createElement(t,k({cropWithEllipsis:d},o)))}},We=qe,Ge=function(t){return function(i){return s.createElement(te,k({component:t,duration:i.isMulti?z:1},i))}},Ue=Ge,Ye=function(t){return function(i){return s.createElement(te,k({component:t},i))}},He=Ye,Je=["component"],Qe=["children"],Xe=function(t){return function(i){return i.isMulti?s.createElement(Ze,k({component:t},i)):s.createElement(ne,k({component:t},i))}},Ze=function(t){var i=t.component,d=E(t,Je),r=Ke(d);return s.createElement(ne,k({component:i},r))},Ke=function(t){var i=t.children,d=E(t,Qe),r=d.isMulti,o=d.hasValue,a=d.innerProps,c=d.selectProps,p=c.components,x=c.controlShouldRenderValue,h=s.useState(r&&x&&o),v=V(h,2),m=v[0],$=v[1],w=s.useState(!1),y=V(w,2),b=y[0],u=y[1];s.useEffect(function(){o&&!m&&$(!0)},[o,m]),s.useEffect(function(){b&&!o&&m&&$(!1),u(!1)},[b,o,m]);var g=function(){return u(!0)},re=function(D){if(r&&s.isValidElement(D)){if(D.type===p.MultiValue)return s.cloneElement(D,{onExited:g});if(D.type===p.Placeholder&&m)return null}return D},oe=S(S({},a),{},{style:S(S({},a==null?void 0:a.style),{},{display:r&&o||m?"flex":"grid"})}),ae=S(S({},d),{},{innerProps:oe,children:s.Children.toArray(i).map(re)});return ae},en=Xe,nn=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],ie=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=Ee({components:t}),d=i.Input,r=i.MultiValue,o=i.Placeholder,a=i.SingleValue,c=i.ValueContainer,p=E(i,nn);return S({Input:Re(d),MultiValue:We(r),Placeholder:Ue(o),SingleValue:He(a),ValueContainer:en(c)},p)},F=ie();F.Input;F.MultiValue;F.Placeholder;F.SingleValue;F.ValueContainer;var tn=Te(ie);function rn(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}const on=l.div`
  width: 100%;
  margin-bottom: 80px;

`,an=l(B)`
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
`,dn=l.label`
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
`,ln=l.img`
  height: 100%;
  position: absolute;
  width: 100%;
  object-fit: cover;
`,sn=l(_)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`,cn=l.button`
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
`,pn=l.div`
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
`,un=l.div`
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
`,xn=l.div`
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
`,hn={backgroundColor:"#F3F3F3",width:"50px",height:"50px",borderRadius:"6px",color:"#161F37"},mn=ee().shape({drinkThumb:C().required("Cocktail photo is a mandatory field").url(),drink:C().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),description:C().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:C().required("Cocktail category is a required field"),glass:C().required("Cocktail glass is a required field")}),gn=tn(),fn=({formData:e,setFormData:t,refId:i})=>{const d=A(),r=T(b=>b.filters.categories),o=T(b=>b.filters.glasses),[a,c]=s.useState(null),[p,x]=s.useState(!1),[h,v]=s.useState(""),[m,$]=s.useState("");s.useEffect(()=>{d(pe()),d(ue())},[d]);const w=b=>{const u=b.target.files[0];if(u){const g=URL.createObjectURL(u);t({...e,drinkThumb:u}),c(g),x(!0)}},y=b=>{const{name:u,value:g}=b.target;t({...e,[u]:g})};return n.jsx(on,{children:n.jsx(R,{initialValues:e,validationSchema:mn,innerRef:i,children:n.jsxs(an,{children:[n.jsxs(dn,{htmlFor:"drinkThumb",children:[n.jsx(sn,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:w,style:{display:"none"}}),n.jsxs(cn,{type:"button",children:[n.jsx(rn,{style:hn}),n.jsx("span",{children:"Add image"})]}),a&&n.jsx(ln,{src:a,alt:"Preview"}),n.jsx(P,{name:"drinkThumb",component:"div"})]}),n.jsxs(pn,{children:[n.jsxs(un,{children:[n.jsx(W,{name:"drink",value:e.drink,onChange:y,placeholder:"Enter item drink"}),n.jsx(P,{name:"drink",component:"div"}),n.jsx(W,{name:"description",value:e.description,onChange:y,placeholder:"Enter about description"}),n.jsx(P,{name:"description",component:"div"}),n.jsxs(G,{htmlFor:"category",children:[n.jsx(U,{children:"Category"}),n.jsx(_,{name:"category",value:e.category,onChange:y,placeholder:"Category",children:({field:b,form:u})=>n.jsx(Y,{classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:r.map(g=>({value:g,label:g})),name:b.name,id:"cocktail",...b,value:h?{value:h,label:h}:"",onChange:g=>{v(g?g.value:""),u.setFieldValue("category",g?g.value:"")},placeholder:"Cocktail"})})]}),n.jsxs(G,{htmlFor:"glass",children:[n.jsx(U,{children:"Glasses"}),n.jsx(_,{name:"glass",value:e.glass,onChange:y,placeholder:"Glasses",children:({field:b,form:u})=>n.jsx(Y,{classNamePrefix:"Select",closeMenuOnSelect:!0,components:gn,isClearable:!0,options:o.map(g=>({value:g,label:g})),name:b.name,id:"glasses",...b,value:m?{value:m,label:m}:"",onChange:g=>{g&&($(g.value),u.setFieldValue("glass",g.value))},placeholder:"Glasses"})})]})]}),n.jsxs(xn,{children:[n.jsxs(H,{children:[n.jsx(M,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:e.alcoholic==="Alcoholic",onChange:()=>t({...e,alcoholic:"Alcoholic"})}),n.jsx(J,{children:"Alcoholic"})]}),n.jsxs(H,{children:[n.jsx(M,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:e.alcoholic==="Non alcoholic",onChange:()=>t({...e,alcoholic:"Non alcoholic"})}),n.jsx(J,{children:"Non-alcoholic"})]})]})]})]})})})},wn=l.div`
  position: relative;
  margin-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,bn=l.h2`
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
`,vn=l(B)`
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
`,$n=l.label`
  flex: 2;

  @media screen and (min-width: 768px) {
    flex: 2.22;
  }
`,yn=l.div`
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
`,Q=l.button`
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
`,Sn=l.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,kn=l.div`
  display: flex;
  align-items: center;
  row-gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,jn=l.div`
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
`,_n=l.div`
  display: flex;
  column-gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,Cn=l.div`
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
`,Tn=l(_)`
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
`,En=l(O)`
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
`,Dn=l(O)`
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
`,Fn=l.button`
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
`,X=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],In=({formData:e,setFormData:t,refId:i})=>{const{width:d}=xe(),r=d>=768?20:18,o=10,a=A(),c=T($=>$.filters.ingredients),[p,x]=s.useState(e.ingredients.length),h=($,w,y)=>{const b=[...e.ingredients];b[y][$]=w,t(u=>({...u,ingredients:b}))};s.useEffect(()=>{a(he())},[a]);const v=()=>{p<o&&(t($=>({...$,ingredients:[...$.ingredients,{ingredient:"",measure:"",quantity:""}]})),x(p+1))},m=$=>{if(p>1){const w=[...e.ingredients];w.splice($,1),t(y=>({...y,ingredients:w})),x(p-1)}};return n.jsxs(wn,{children:[n.jsx(bn,{children:"Ingredients"}),n.jsx(R,{initialValues:e,innerRef:i,children:n.jsx(vn,{children:n.jsx(me,{name:"ingredients",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(yn,{children:[n.jsx(Q,{type:"button",onClick:()=>m(),children:n.jsx(ge,{size:16})}),n.jsx(Sn,{children:p}),n.jsx(Q,{type:"button",onClick:v,children:n.jsx(fe,{size:16})})]}),c&&n.jsx(kn,{children:e.ingredients.map(($,w)=>{const y=X.find(u=>u.value===$.measure),b=c.find(u=>u.title===$.ingredient);return n.jsxs(jn,{children:[n.jsxs(_n,{children:[n.jsx($n,{htmlFor:`ingredients[${w}]`,children:n.jsx(Dn,{className:"basic-single",classNamePrefix:"Select",closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:c.map(({_id:u,title:g})=>({value:u,label:g})),name:`ingredients[${w}]`,id:`ingredient${w}`,value:b,onChange:({value:u})=>h("ingredientId",u,w),placeholder:"Ingredient",blurInputOnSelect:!0})}),n.jsxs(Cn,{children:[n.jsx(Tn,{name:`ingredients[${w}].quantity`,value:$.quantity||"",onChange:u=>h("quantity",parseInt(u.target.value,10),w)}),n.jsx("label",{htmlFor:`ingredients[${w}].measure`,children:n.jsx(En,{className:"basic-single",classNamePrefix:"Select",options:X,name:`ingredients[${w}].measure`,value:y||"",onChange:({value:u})=>h("measure",u,w),placeholder:"cl",isSearchable:!1})})]})]}),n.jsx(Fn,{type:"button",onClick:m,children:n.jsx(we,{size:r})})]},w)})})]})})})})]})},Pn=l.h2`
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
`,An=l(B)`
  width: 100%;
  margin-bottom: 20px;
`,Vn=l.textarea`
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
`,zn=ee().shape({instructions:C().min(100,"You need to add a description of at least 100 symbols")}),Mn=({formData:e,refId:t})=>n.jsx(n.Fragment,{children:n.jsx(R,{initialValues:e,validationSchema:zn,innerRef:t,children:n.jsxs(An,{children:[n.jsx(Pn,{htmlFor:"instructions",children:"Recipe Preparation"}),n.jsx(_,{name:"instructions",children:({field:i})=>n.jsx(Vn,{...i,id:"instructions",placeholder:"Enter the recipe"})}),n.jsx(P,{name:"textareaValue",component:"div"})]})})}),Bn=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 80px;
`,Rn=l.button`
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
`,On=()=>{const e=A(),t=T(v=>v.auth.user.birthDate),i=s.useRef(),d=s.useRef(),r=s.useRef(),o=new Date,a=new Date(t),c=o.getFullYear()-a.getFullYear(),[p,x]=s.useState({drink:"",description:"",alcoholic:c>=18?"Alcoholic":"Non alcoholic",category:"",glass:"",instructions:"",drinkThumb:"",ingredients:[{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""},{ingredientId:"",measure:"",quantity:""}]}),h=()=>{if(i.current&&d.current&&r.current){i.current.handleSubmit(),d.current.handleSubmit(),r.current.handleSubmit();const{values:v}=i.current,{values:m}=d.current,{values:$}=r.current,w={...p,alcoholic:v.alcoholic,category:v.category,glass:v.glass,ingredients:JSON.stringify(m.ingredients.filter(y=>y.ingredientId)),instructions:$.instructions};e(ve(w))}};return n.jsxs(Bn,{children:[n.jsx(fn,{formData:p,setFormData:x,refId:i}),n.jsx(In,{formData:p,setFormData:x,refId:d}),n.jsx(Mn,{formData:p,setFormData:x,refId:r}),n.jsx(be,{to:"/my",children:n.jsx(Rn,{type:"submit",onClick:h,children:"Add"})})]})},Ln=On,Nn=l.h3`
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
`,qn=l.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Wn=()=>n.jsxs(qn,{children:[n.jsx(Nn,{children:"Follow Us"}),n.jsx($e,{})]}),Gn=Wn,Un=l.h3`
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
`,Yn=l.ul`
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
`,Hn=l.li`
  display: flex;
  align-items: center;
`,Jn=l.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  column-gap: 14px;
`,Z=l.img`
  border-radius: 8px;
`,Qn=l.div`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  padding: 15px;
  background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};
`,Xn=l.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  text-overflow: ellipsis;
`,Zn=l.h3`
  color: ${({theme:e})=>e.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,Kn=l.p`
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
`,et=()=>{const e=A(),t=T(r=>r.drinks.popularDrinks.slice(0,4)),{isLoading:i,error:d}=T(ye);return s.useEffect(()=>{e(Se())},[e]),n.jsxs("div",{children:[n.jsx(Un,{children:"Popular drinks"}),i&&n.jsx(ke,{}),d&&je.error("Sorry. There are no images ... 😭"),n.jsx(Yn,{children:t.map(({_id:r,drinkThumb:o,drink:a,shortDescription:c})=>n.jsx(Hn,{children:n.jsxs(Jn,{href:`drinks/${r}`,children:[o?n.jsx(Z,{src:o,alt:a,width:90,height:90}):n.jsx(Qn,{children:n.jsx(Z,{src:De,alt:a,width:60,height:60})}),n.jsxs(Xn,{children:[n.jsx(Zn,{children:a}),n.jsx(Kn,{children:c})]})]})},r))})]})},nt=et,tt=l.section`
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
`,it=l.div`
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
`;function dt(){return n.jsx(tt,{children:n.jsxs(_e,{children:[n.jsx(Fe,{title:"Add drink"}),n.jsxs(it,{children:[n.jsx("div",{children:n.jsx(Ln,{})}),n.jsxs("div",{children:[n.jsx(Gn,{}),n.jsx(nt,{})]})]})]})})}export{dt as default};
