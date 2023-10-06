import{r as l,_ as xe,n as T,o as me,R as B,T as J,p as D,q as oe,G as he,s,t as m,F as q,d as I,e as ae,v as ge,f as A,c as M,h as fe,w as be,j as n,l as W,x as z,y as G,a as we,i as ve,z as $e,A as ye,B as Se,D as je,E as ke,u as de,H as _e,I as De,Q as R,S as Ce,J as Te,K as Ee,L as Ie,C as Pe}from"./index-35fbe8a3.js";import{_ as Ae,m as Fe,d as Be,a as P,b as O,S as U,u as ze}from"./useFilter-fd01ec22.js";import{D as Ve}from"./stub-33980911.js";import{P as Me}from"./PageTitle-c6f3a8f9.js";function Y(e,i){var t=function(o){return i&&l.isValidElement(o)?i(o):o},d=Object.create(null);return e&&l.Children.map(e,function(r){return r}).forEach(function(r){d[r.key]=t(r)}),d}function Re(e,i){e=e||{},i=i||{};function t(w){return w in i?i[w]:e[w]}var d=Object.create(null),r=[];for(var o in e)o in i?r.length&&(d[o]=r,r=[]):r.push(o);var a,c={};for(var p in i){if(d[p])for(a=0;a<d[p].length;a++){var g=d[p][a];c[d[p][a]]=t(g)}c[p]=t(p)}for(a=0;a<r.length;a++)c[r[a]]=t(r[a]);return c}function E(e,i,t){return t[i]!=null?t[i]:e.props[i]}function Oe(e,i){return Y(e.children,function(t){return l.cloneElement(t,{onExited:i.bind(null,t),in:!0,appear:E(t,"appear",e),enter:E(t,"enter",e),exit:E(t,"exit",e)})})}function Le(e,i,t){var d=Y(e.children),r=Re(i,d);return Object.keys(r).forEach(function(o){var a=r[o];if(l.isValidElement(a)){var c=o in i,p=o in d,g=i[o],w=l.isValidElement(g)&&!g.props.in;p&&(!c||w)?r[o]=l.cloneElement(a,{onExited:t.bind(null,a),in:!0,exit:E(a,"exit",e),enter:E(a,"enter",e)}):!p&&c&&!w?r[o]=l.cloneElement(a,{in:!1}):p&&c&&l.isValidElement(g)&&(r[o]=l.cloneElement(a,{onExited:t.bind(null,a),in:g.props.in,exit:E(a,"exit",e),enter:E(a,"enter",e)}))}}),r}var Ne=Object.values||function(e){return Object.keys(e).map(function(i){return e[i]})},qe={component:"div",childFactory:function(i){return i}},H=function(e){xe(i,e);function i(d,r){var o;o=e.call(this,d,r)||this;var a=o.handleExited.bind(Ae(o));return o.state={contextValue:{isMounting:!0},handleExited:a,firstRender:!0},o}var t=i.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},i.getDerivedStateFromProps=function(r,o){var a=o.children,c=o.handleExited,p=o.firstRender;return{children:p?Oe(r,c):Le(r,a,c),firstRender:!1}},t.handleExited=function(r,o){var a=Y(this.props.children);r.key in a||(r.props.onExited&&r.props.onExited(o),this.mounted&&this.setState(function(c){var p=T({},c.children);return delete p[r.key],{children:p}}))},t.render=function(){var r=this.props,o=r.component,a=r.childFactory,c=me(r,["component","childFactory"]),p=this.state.contextValue,g=Ne(this.state.children).map(a);return delete c.appear,delete c.enter,delete c.exit,o===null?B.createElement(J.Provider,{value:p},g):B.createElement(J.Provider,{value:p},B.createElement(o,c,g))},i}(B.Component);H.propTypes={};H.defaultProps=qe;const se=H;var We=["in","onExited","appear","enter","exit"],Ge=function(i){return function(t){t.in,t.onExited,t.appear,t.enter,t.exit;var d=P(t,We);return l.createElement(i,d)}},Ue=Ge,Ye=["component","duration","in","onExited"],le=function(i){var t=i.component,d=i.duration,r=d===void 0?1:d,o=i.in;i.onExited;var a=P(i,Ye),c=l.useRef(null),p={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(r,"ms")},exiting:{opacity:0},exited:{opacity:0}};return l.createElement(oe,{mountOnEnter:!0,unmountOnExit:!0,in:o,timeout:r,nodeRef:c},function(g){var w={style:D({},p[g]),ref:c};return l.createElement(t,T({innerProps:w},a))})},L=260,He=function(i){var t=i.children,d=i.in,r=i.onExited,o=l.useRef(null),a=l.useState("auto"),c=O(a,2),p=c[0],g=c[1];l.useEffect(function(){var y=o.current;if(y){var f=window.requestAnimationFrame(function(){return g(y.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(f)}}},[]);var w=function(f){switch(f){default:return{width:p};case"exiting":return{width:0,transition:"width ".concat(L,"ms ease-out")};case"exited":return{width:0}}};return l.createElement(oe,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:d,onExited:function(){var f=o.current;f&&(r==null||r(f))},timeout:L,nodeRef:o},function(y){return l.createElement("div",{ref:o,style:D({overflow:"hidden",whiteSpace:"nowrap"},w(y))},t)})},Je=["in","onExited"],Qe=function(i){return function(t){var d=t.in,r=t.onExited,o=P(t,Je);return l.createElement(He,{in:d,onExited:r},l.createElement(i,T({cropWithEllipsis:d},o)))}},Xe=Qe,Ze=function(i){return function(t){return l.createElement(le,T({component:i,duration:t.isMulti?L:1},t))}},Ke=Ze,en=function(i){return function(t){return l.createElement(le,T({component:i},t))}},nn=en,tn=["component"],rn=["children"],on=function(i){return function(t){return t.isMulti?l.createElement(an,T({component:i},t)):l.createElement(se,T({component:i},t))}},an=function(i){var t=i.component,d=P(i,tn),r=dn(d);return l.createElement(se,T({component:t},r))},dn=function(i){var t=i.children,d=P(i,rn),r=d.isMulti,o=d.hasValue,a=d.innerProps,c=d.selectProps,p=c.components,g=c.controlShouldRenderValue,w=l.useState(r&&g&&o),y=O(w,2),f=y[0],C=y[1],u=l.useState(!1),h=O(u,2),S=h[0],v=h[1];l.useEffect(function(){o&&!f&&C(!0)},[o,f]),l.useEffect(function(){S&&!o&&f&&C(!1),v(!1)},[S,o,f]);var k=function(){return v(!0)},$=function(b){if(r&&l.isValidElement(b)){if(b.type===p.MultiValue)return l.cloneElement(b,{onExited:k});if(b.type===p.Placeholder&&f)return null}return b},x=D(D({},a),{},{style:D(D({},a==null?void 0:a.style),{},{display:r&&o||f?"flex":"grid"})}),j=D(D({},d),{},{innerProps:x,children:l.Children.toArray(t).map($)});return j},sn=on,ln=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],ce=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=Be({components:i}),d=t.Input,r=t.MultiValue,o=t.Placeholder,a=t.SingleValue,c=t.ValueContainer,p=P(t,ln);return D({Input:Ue(d),MultiValue:Xe(r),Placeholder:Ke(o),SingleValue:nn(a),ValueContainer:sn(c)},p)},F=ce();F.Input;F.MultiValue;F.Placeholder;F.SingleValue;F.ValueContainer;var cn=Fe(ce);function pn(e){return he({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"}}]})(e)}const un=s.div`
  width: 100%;
  margin-bottom: 70px;
`,xn=s(q)`
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
`,mn=s.label`
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
`,hn=s.img`
  height: 100%;
  position: absolute;
  width: 100%;
  object-fit: cover;
`,gn=s(I)`
  // background-color: pink;
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // visibility: hidden;
  // overflow: hidden;
`,fn=s.button`
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
`,bn=s(pn)`
  background-color: #f3f3f3;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  color: #161f37;
`,wn=s.div`
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
`,vn=s.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  @media screen and (min-width: 1440px) {
    row-gap: 40px;
  }
`,V=s.div`
  position: relative;

  .select-category {
    .Select__option {
      white-space: nowrap;
    }
  }
`,Q=s(I)`
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
`,X=s.label`
  color: ${({theme:e})=>e.mainText};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,Z=s.p`
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
`,K=s(U)`
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
      min-width: 174px;
    }

    @media screen and (min-width: 1440px) {
      border-radius: 20px;
      min-width: 178px;
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
`,$n=s.div`
  display: flex;
  align-items: center;
  column-gap: 14px;
`,ee=s.label`
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
`,N=s(I)`
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
`,ne=s.span`
  transition: color ${m};
  ${N}:checked ~ & {
    // color: ${({theme:e})=>e.mainText};
    color: ${({theme:e})=>e.mainText};
  }
`,yn=ae().shape({drinkThumb:ge(),drink:A().min(3,"Cocktail name must contain at least 3 symbols").required("Cocktail title is required"),description:A().min(10,"The cocktail description must contain at least 10 symbols").required("Description of the cocktail is required"),category:A().required("Cocktail category is required"),glass:A().required("Cocktail glass is required")}),Sn=cn(),jn=({formData:e,refId:i,setDrinkThumb:t})=>{const[d,r]=l.useState(null),[o,a]=l.useState(""),[c,p]=l.useState(""),{categories:g,glasses:w}=ze(),y=M(),{drink:f,description:C,category:u,glass:h,alcoholic:S,drinkThumb:v}=e;l.useEffect(()=>{y(fe()),y(be())},[y]);const k=$=>{const x=$.target.files[0];if(x){const j=URL.createObjectURL(x);t(x),r(j)}};return n.jsx(un,{children:n.jsx(W,{initialValues:{drink:f,description:C,category:u,glass:h,alcoholic:S,drinkThumb:v},validationSchema:yn,innerRef:i,children:({values:$,handleChange:x,setFieldValue:j})=>n.jsxs(xn,{children:[n.jsxs(mn,{children:[n.jsx(gn,{type:"file",id:"drinkThumb",name:"drinkThumb",onChange:k,style:{display:"none"}}),n.jsxs(fn,{type:"button",children:[n.jsx(bn,{}),n.jsx("span",{children:"Add image"})]}),d&&n.jsx(hn,{src:d,alt:"Preview"})]}),n.jsxs(wn,{children:[n.jsxs(vn,{children:[n.jsxs(V,{children:[n.jsx(Q,{name:"drink",value:$.drink,onChange:x,placeholder:"Enter item drink"}),n.jsx(z,{absolute:!0,name:"drink"})]}),n.jsxs(V,{children:[n.jsx(Q,{name:"description",value:$.description,onChange:x,placeholder:"Enter about description"}),n.jsx(z,{absolute:!0,name:"description"})]}),n.jsxs(X,{htmlFor:"category",children:[n.jsx(Z,{children:"Category"}),n.jsxs(V,{children:[n.jsx(I,{name:"category",value:$.category,onChange:x,placeholder:"Category",children:({field:_})=>n.jsx(K,{className:"select-category",classNamePrefix:"Select",closeMenuOnSelect:!0,isClearable:!0,options:g.map(b=>({value:b,label:b})),name:_.name,id:"cocktail",..._,value:o?{value:o,label:o}:"",onChange:b=>{b&&(a(b.value),j("category",b.value))},placeholder:"Cocktail"})}),n.jsx(z,{name:"category",select:!0})]})]}),n.jsxs(X,{htmlFor:"glass",children:[n.jsx(Z,{children:"Glasses"}),n.jsxs(V,{children:[n.jsx(I,{name:"glass",value:$.glass,onChange:x,placeholder:"Glasses",children:({field:_})=>n.jsx(K,{className:"select-glass",classNamePrefix:"Select",closeMenuOnSelect:!0,components:Sn,isClearable:!0,options:w.map(b=>({value:b,label:b})),name:_.name,id:"glasses",..._,value:c?{value:c,label:c}:"",onChange:b=>{b&&(p(b.value),j("glass",b.value))},placeholder:"Glasses"})}),n.jsx(z,{name:"glass",select:!0})]})]})]}),n.jsxs($n,{children:[n.jsxs(ee,{children:[n.jsx(N,{type:"radio",name:"alcoholic",value:"Alcoholic",checked:$.alcoholic==="Alcoholic",onChange:()=>j("alcoholic","Alcoholic")}),n.jsx(ne,{children:"Alcoholic"})]}),n.jsxs(ee,{children:[n.jsx(N,{type:"radio",name:"alcoholic",value:"Non alcoholic",checked:$.alcoholic==="Non alcoholic",onChange:()=>j("alcoholic","Non alcoholic")}),n.jsx(ne,{children:"Non-alcoholic"})]})]})]})]})})})},kn=s.div`
  position: relative;
  margin-bottom: 80px;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`,_n=s.h2`
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
`,Dn=s(q)`
  width: 100%;
  // margin-bottom: 80px;
  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 540px;
  }

  .select-ingredient {
    flex: 2;

    @media screen and (max-width: 355px) {
      flex: 1.8;
    }

    @media screen and (max-width: 335px) {
      flex: 1.65;
    }
    @media screen and (max-width: 320px) {
      flex: 1.55;
    }

    @media screen and (min-width: 768px) {
      flex: 2.22;
    }

    @media screen and (min-width: 1440px) {
      flex: 2.1;
    }
  }

  .select-measure {
    width: 100%;
  }
`,Cn=s.div`
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
`,te=s.button`
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
    transform: scale(1.3);
  }

  &:disabled {
    color: ${({theme:e})=>e.paginatorArrow};
    cursor: default;
    transform: unset;
  }
`,Tn=s.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.285;

  color: ${({theme:e})=>e.mainText};

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`,En=s.div`
  display: flex;
  align-items: center;
  row-gap: 18px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,In=s.div`
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
`,Pn=s.div`
  display: flex;
  column-gap: 8px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`,An=s.div`
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
`,Fn=s(I)`
  background-color: transparent;
  max-width: 38px;
  display: inline-block;
  padding: 17px 4px 15px 14px;
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
    min-width: 50px;
    padding-left: 23px;
  }
`,Bn=s(U)`
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
  }

  & .Select__value-container {
    padding: 16px 0;

    @media screen and (min-width: 768px) {
      padding: 15px 0;
    }
  }

  & .Select__indicator-separator {
    display: none;
  }

  & .Select__clear-indicator {
    display: none;
  }

  & .Select__indicator {
    color: ${({theme:e})=>e.mainText};
    padding: 15px 10px;
    padding-left: 0px;

    cursor: pointer;

    &:hover {
      color: ${({theme:e})=>e.mainText};
    }

    @media screen and (min-width: 768px) {
      padding: 17px 23px;
      padding-left: 7px;
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
    text-align: center;
    /* padding-left: 4px; */

    @media screen and (min-width: 768px) {
      font-size: 17px;
      line-height: 1.56;
      text-overflow: clip;
      text-align: right;
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
`,zn=s(U)`
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
    padding: 15px 14px;
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
    padding: 15px 10px;
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
`,Vn=s.button`
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
`,ie=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],Mn=({formData:e,refId:i})=>{const t=G(u=>u.filters.ingredients),[d,r]=l.useState(e.ingredients.length),{width:o}=we(),a=M(),c=o>=768?20:18,p=10,{ingredients:g}=e;l.useEffect(()=>{a(ve())},[a]);const w=(u,h,S,v,k)=>{const $=v.ingredients;$[S][u]=h,k("ingredients",$)},y=({ingredients:u},h)=>{d<p&&(h("ingredients",[...u,{ingredient:"",measure:"cl",quantity:"1"}]),r(S=>S+1))},f=({ingredients:u},h)=>{u.length>1&&(u.pop(),h("ingredients",u),r(d-1))},C=(u,{ingredients:h},S)=>{if(h.length>1){const v=[...h];v.splice(u,1),S("ingredients",v),r(k=>k-1)}};return n.jsxs(kn,{children:[n.jsx(_n,{children:"Ingredients"}),n.jsx(W,{initialValues:{ingredients:g},innerRef:i,children:({values:u,setFieldValue:h})=>n.jsx(Dn,{children:n.jsx($e,{name:"ingredients",render:()=>n.jsxs(n.Fragment,{children:[n.jsxs(Cn,{children:[n.jsx(te,{type:"button",onClick:()=>f(u,h),disabled:d===1,children:n.jsx(ye,{size:16})}),n.jsx(Tn,{children:d}),n.jsx(te,{type:"button",onClick:()=>y(u,h),children:n.jsx(Se,{size:16})})]}),t&&n.jsx(En,{children:u.ingredients.map((S,v)=>{const k=ie.find(x=>x.value===S.measure),$=t.find(x=>x.title===S.ingredient);return n.jsxs(In,{children:[n.jsxs(Pn,{children:[n.jsx(zn,{className:"select-ingredient",classNamePrefix:"Select",closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:t.map(({_id:x,title:j})=>({value:x,label:j})),name:"ingredient",id:"ingredient",value:$,onChange:({value:x})=>w("ingredientId",x,v,u,h),placeholder:"Ingredient",blurInputOnSelect:!0}),n.jsxs(An,{children:[n.jsx(Fn,{name:"ingredientQuantity",value:S.quantity||"",onChange:x=>w("quantity",parseInt(x.target.value,10),v,u,h)}),n.jsx(Bn,{className:"select-measure",classNamePrefix:"Select",options:ie,name:"measure",id:"measure",value:k||"",onChange:({value:x})=>w("measure",x,v,u,h),placeholder:"cl",isSearchable:!1})]})]}),n.jsx(Vn,{type:"button",onClick:()=>C(v,u,h),children:n.jsx(je,{size:c})})]},v)})})]})})})})]})},Rn=s.h2`
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
`,On=s(q)`
  width: 100%;
  margin-bottom: 20px;
`,Ln=s.textarea`
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

  &::-webkit-scrollbar {
    display: none;
  }
`,Nn=ae().shape({instructions:A().min(10,"You need to add a description of at least 10 symbols")}),qn=({formData:e,refId:i})=>n.jsx(n.Fragment,{children:n.jsx(W,{initialValues:{instructions:e.instructions},validationSchema:Nn,innerRef:i,children:({values:t,handleChange:d})=>n.jsxs(On,{children:[n.jsx(Rn,{htmlFor:"instructions",children:"Recipe Preparation"}),n.jsx(I,{name:"instructions",children:({field:r})=>n.jsx(Ln,{...r,id:"instructions",placeholder:"Enter the recipe",value:t.instructions,onChange:d})})]})})}),Wn=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  // gap: 80px;
`,Gn=s.button`
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
`,Un=s.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`,Yn=()=>n.jsx(Un,{children:n.jsx(ke,{color:"#2eb7e9",size:60})}),Hn=()=>{const e=M(),{isLoading:i}=de(),t=_e(),d=G(u=>u.auth.user.birthDate),[r,o]=l.useState(null),a=l.useRef(),c=l.useRef(),p=l.useRef(),g=new Date,w=new Date(d),f={drink:"",description:"",alcoholic:g.getFullYear()-w.getFullYear()>=18?"Alcoholic":"Non alcoholic",category:"",glass:"",instructions:"",drinkThumb:"",ingredients:[{ingredientId:"",measure:"cl",quantity:"1"},{ingredientId:"",measure:"cl",quantity:"1"},{ingredientId:"",measure:"cl",quantity:"1"}]},C=()=>{if(a.current&&c.current&&p.current){a.current.handleSubmit(),c.current.handleSubmit(),p.current.handleSubmit();const{values:u}=a.current,{values:h}=c.current,{values:S}=p.current,{drink:v,description:k,alcoholic:$,category:x,glass:j}=u,{ingredients:_}=h,{instructions:b}=S,pe={drinkThumb:r,drink:v,description:k,alcoholic:$,category:x,glass:j,ingredients:JSON.stringify(_.filter(ue=>ue.ingredientId)),instructions:b};e(De(pe)).unwrap().then(()=>{t("/my"),R.success(`You have successfully added a drink ${v}`)}).catch(()=>{R.error("You should fill all required fields")})}};return n.jsxs(Wn,{children:[n.jsx(jn,{formData:f,refId:a,setDrinkThumb:o}),n.jsx(Mn,{formData:f,refId:c}),n.jsx(qn,{formData:f,refId:p}),n.jsx(Gn,{type:"submit",onClick:C,children:"Add"}),i&&n.jsx(Yn,{})]})},Jn=Hn,Qn=s.h3`
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
`,Xn=s.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,Zn=()=>n.jsxs(Xn,{children:[n.jsx(Qn,{children:"Follow Us"}),n.jsx(Ce,{isInFooter:!1})]}),Kn=Zn,et=s.h3`
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
`,nt=s.ul`
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
`,tt=s.li`
  display: flex;
  align-items: center;
`,it=s.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  column-gap: 14px;
`,re=s.img`
  border-radius: 8px;
`,rt=s.div`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  padding: 15px;
  background-color: ${({theme:e})=>e.AddPhotoBackgroundColor};
`,ot=s.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 8px;
  text-overflow: ellipsis;
`,at=s.h3`
  color: ${({theme:e})=>e.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,dt=s.p`
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
`,st=()=>{const e=M(),{popularDrinks:i}=de(),{isLoading:t,error:d}=G(Te);return l.useEffect(()=>{e(Ee())},[e]),n.jsxs("div",{children:[n.jsx(et,{children:"Popular drinks"}),t&&n.jsx(Ie,{}),d&&R.error("Sorry. There are no images ... 😭"),n.jsx(nt,{children:i.map(({_id:r,drinkThumb:o,drink:a,shortDescription:c})=>n.jsx(tt,{children:n.jsxs(it,{href:`drinks/${r}`,children:[o?n.jsx(re,{src:o,alt:a,width:90,height:90}):n.jsx(rt,{children:n.jsx(re,{src:Ve,alt:a,width:60,height:60})}),n.jsxs(ot,{children:[n.jsx(at,{children:a}),n.jsx(dt,{children:c})]})]})},r))})]})},lt=st,ct=s.section`
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
`,pt=s.div`
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
`;function gt(){return n.jsx(ct,{children:n.jsxs(Pe,{children:[n.jsx(Me,{title:"Add drink"}),n.jsxs(pt,{children:[n.jsx("div",{children:n.jsx(Jn,{})}),n.jsxs("div",{children:[n.jsx(Kn,{}),n.jsx(lt,{})]})]})]})})}export{gt as default};
