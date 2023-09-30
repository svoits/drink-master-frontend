import{r as s,_ as Z,n as S,o as K,R as A,T as O,p as y,q as N,s as g,c as j,e as T,f as E,a as R,d as $,h as ee,v as te,j as e,l as L,F as U,A as ne,w as ie,E as k,x as ae,y as re,i as oe,t as W,z as le,S as se,B as de,L as ue,C as ce}from"./index-f7d10a81.js";import{_ as pe,m as me,d as he,a as P,b as q,S as D}from"./react-select.esm-58b50b04.js";import{s as xe}from"./drinks-selectors-db0f3074.js";import{P as fe}from"./PageTitle-9af16b46.js";function _(i,t){var n=function(r){return t&&s.isValidElement(r)?t(r):r},o=Object.create(null);return i&&s.Children.map(i,function(a){return a}).forEach(function(a){o[a.key]=n(a)}),o}function ge(i,t){i=i||{},t=t||{};function n(x){return x in t?t[x]:i[x]}var o=Object.create(null),a=[];for(var r in i)r in t?a.length&&(o[r]=a,a=[]):a.push(r);var l,d={};for(var u in t){if(o[u])for(l=0;l<o[u].length;l++){var m=o[u][l];d[o[u][l]]=n(m)}d[u]=n(u)}for(l=0;l<a.length;l++)d[a[l]]=n(a[l]);return d}function w(i,t,n){return n[t]!=null?n[t]:i.props[t]}function ve(i,t){return _(i.children,function(n){return s.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:w(n,"appear",i),enter:w(n,"enter",i),exit:w(n,"exit",i)})})}function be(i,t,n){var o=_(i.children),a=ge(t,o);return Object.keys(a).forEach(function(r){var l=a[r];if(s.isValidElement(l)){var d=r in t,u=r in o,m=t[r],x=s.isValidElement(m)&&!m.props.in;u&&(!d||x)?a[r]=s.cloneElement(l,{onExited:n.bind(null,l),in:!0,exit:w(l,"exit",i),enter:w(l,"enter",i)}):!u&&d&&!x?a[r]=s.cloneElement(l,{in:!1}):u&&d&&s.isValidElement(m)&&(a[r]=s.cloneElement(l,{onExited:n.bind(null,l),in:m.props.in,exit:w(l,"exit",i),enter:w(l,"enter",i)}))}}),a}var je=Object.values||function(i){return Object.keys(i).map(function(t){return i[t]})},ye={component:"div",childFactory:function(t){return t}},G=function(i){Z(t,i);function t(o,a){var r;r=i.call(this,o,a)||this;var l=r.handleExited.bind(pe(r));return r.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(a,r){var l=r.children,d=r.handleExited,u=r.firstRender;return{children:u?ve(a,d):be(a,l,d),firstRender:!1}},n.handleExited=function(a,r){var l=_(this.props.children);a.key in l||(a.props.onExited&&a.props.onExited(r),this.mounted&&this.setState(function(d){var u=S({},d.children);return delete u[a.key],{children:u}}))},n.render=function(){var a=this.props,r=a.component,l=a.childFactory,d=K(a,["component","childFactory"]),u=this.state.contextValue,m=je(this.state.children).map(l);return delete d.appear,delete d.enter,delete d.exit,r===null?A.createElement(O.Provider,{value:u},m):A.createElement(O.Provider,{value:u},A.createElement(r,d,m))},t}(A.Component);G.propTypes={};G.defaultProps=ye;const B=G;var Ee=["in","onExited","appear","enter","exit"],Se=function(t){return function(n){n.in,n.onExited,n.appear,n.enter,n.exit;var o=P(n,Ee);return s.createElement(t,o)}},we=Se,Ce=["component","duration","in","onExited"],Q=function(t){var n=t.component,o=t.duration,a=o===void 0?1:o,r=t.in;t.onExited;var l=P(t,Ce),d=s.useRef(null),u={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(a,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(N,{mountOnEnter:!0,unmountOnExit:!0,in:r,timeout:a,nodeRef:d},function(m){var x={style:y({},u[m]),ref:d};return s.createElement(n,S({innerProps:x},l))})},z=260,Ve=function(t){var n=t.children,o=t.in,a=t.onExited,r=s.useRef(null),l=s.useState("auto"),d=q(l,2),u=d[0],m=d[1];s.useEffect(function(){var b=r.current;if(b){var h=window.requestAnimationFrame(function(){return m(b.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(h)}}},[]);var x=function(h){switch(h){default:return{width:u};case"exiting":return{width:0,transition:"width ".concat(z,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(N,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:o,onExited:function(){var h=r.current;h&&(a==null||a(h))},timeout:z,nodeRef:r},function(b){return s.createElement("div",{ref:r,style:y({overflow:"hidden",whiteSpace:"nowrap"},x(b))},n)})},Pe=["in","onExited"],Me=function(t){return function(n){var o=n.in,a=n.onExited,r=P(n,Pe);return s.createElement(Ve,{in:o,onExited:a},s.createElement(t,S({cropWithEllipsis:o},r)))}},Fe=Me,ke=function(t){return function(n){return s.createElement(Q,S({component:t,duration:n.isMulti?z:1},n))}},$e=ke,Ie=function(t){return function(n){return s.createElement(Q,S({component:t},n))}},Ae=Ie,Te=["component"],De=["children"],Re=function(t){return function(n){return n.isMulti?s.createElement(qe,S({component:t},n)):s.createElement(B,S({component:t},n))}},qe=function(t){var n=t.component,o=P(t,Te),a=ze(o);return s.createElement(B,S({component:n},a))},ze=function(t){var n=t.children,o=P(t,De),a=o.isMulti,r=o.hasValue,l=o.innerProps,d=o.selectProps,u=d.components,m=d.controlShouldRenderValue,x=s.useState(a&&m&&r),b=q(x,2),h=b[0],C=b[1],M=s.useState(!1),v=q(M,2),c=v[0],f=v[1];s.useEffect(function(){r&&!h&&C(!0)},[r,h]),s.useEffect(function(){c&&!r&&h&&C(!1),f(!1)},[c,r,h]);var p=function(){return f(!0)},V=function(F){if(a&&s.isValidElement(F)){if(F.type===u.MultiValue)return s.cloneElement(F,{onExited:p});if(F.type===u.Placeholder&&h)return null}return F},Y=y(y({},l),{},{style:y(y({},l==null?void 0:l.style),{},{display:a&&r||h?"flex":"grid"})}),H=y(y({},o),{},{innerProps:Y,children:s.Children.toArray(n).map(V)});return H},Le=Re,Ue=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],X=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=he({components:t}),o=n.Input,a=n.MultiValue,r=n.Placeholder,l=n.SingleValue,d=n.ValueContainer,u=P(n,Ue);return y({Input:we(o),MultiValue:Fe(a),Placeholder:$e(r),SingleValue:Ae(l),ValueContainer:Le(d)},u)},I=X();I.Input;I.MultiValue;I.Placeholder;I.SingleValue;I.ValueContainer;var _e=me(X);const Ge=g.label`
    display: block;
    width: 335px;
    height: 320px;
`,Oe=g.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
`,We=g(j)`
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
`,Ne=T().shape({photo:E().required("Cocktail photo is a mandatory field").url(),title:E().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),recipe:E().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:E().required("Cocktail category is a required field"),glasses:E().required("Cocktail glasses is a required field")}),Be=_e(),Qe=({formData:i,setFormData:t,handleSubmit:n})=>{const o=R(),a=$(c=>c.filters.categories),r=$(c=>c.filters.glasses),[l,d]=s.useState(null),[u,m]=s.useState(!1),[x,b]=s.useState(null),[h,C]=s.useState(null);s.useEffect(()=>{o(ee()),o(te())},[o]);const M=c=>{const f=c.target.files[0];if(f){const p=URL.createObjectURL(f);t({...i,photo:f}),d(p)}},v=()=>{t({...i,photo:null}),d(null),m(!1)};return e.jsx("div",{children:e.jsx(L,{initialValues:i,validationSchema:Ne,onSubmit:c=>{t({...i,...c}),n()},children:e.jsxs(U,{children:[e.jsxs(Ge,{htmlFor:"photo",children:[e.jsx(We,{type:"file",id:"photo",name:"photo",onChange:M,style:{display:"none"}}),u?e.jsxs("button",{type:"button",onClick:v,children:[e.jsx(ne,{}),"Delete image"]}):e.jsxs("button",{type:"button",children:[e.jsx(ie,{})," Add image"]}),l&&e.jsx(Oe,{src:l,alt:"Preview"}),e.jsx(k,{name:"photo",component:"div"})]}),e.jsx(j,{name:"title",placeholder:"Enter item title"}),e.jsx(k,{name:"title",component:"div"}),e.jsx(j,{name:"recipe",placeholder:"Enter about recipe"}),e.jsx(k,{name:"recipe",component:"div"}),e.jsx("label",{htmlFor:"category",children:e.jsx(j,{name:"category",children:({field:c,form:f})=>e.jsx(D,{closeMenuOnSelect:!0,isClearable:!0,classNames:{control:p=>p.isFocused?"border-orange-600":"border-grey-300"},options:a.map(p=>({value:p,label:p})),name:c.name,id:"categories",...c,value:x?{value:x,label:x}:null,onChange:p=>{b(p?p.value:null),f.setFieldValue("categories",p?p.value:null)},placeholder:"Category"})})}),e.jsx("label",{htmlFor:"glasses",children:e.jsx(j,{name:"glasses",children:({field:c,form:f})=>e.jsx(D,{closeMenuOnSelect:!0,components:Be,isClearable:!0,classNames:{control:p=>p.isFocused?"border-orange-600":"border-grey-300"},options:r.map(p=>({value:p,label:p})),name:c.name,id:"glasses",...c,value:h?{value:h,label:h}:null,onChange:p=>{C(p?p.value:null),f.setFieldValue("glasses",p?p.value:null)},placeholder:"Glasses"})})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx(j,{type:"radio",name:"strength",value:"alcoholic"}),e.jsx("span",{children:"Alcoholic"})]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx(j,{type:"radio",name:"strength",value:"nonAlcoholic"}),e.jsx("span",{children:"Non-alcoholic"})]})})]})})})},Xe=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],Ye=T().shape({ingredients:ae().of(T().shape({ingredient:E().required("The ingredient is mandatory"),measure:E().required("Measure is mandatory"),quantity:re().typeError("The quantity must be a number").positive("The number must be positive").required("Quantity is required")}))}),He=({formData:i,setFormData:t,handleSubmit:n})=>{const o=R(),[a,r]=s.useState(null),[l,d]=s.useState(null),[u,m]=s.useState(3),x=$(v=>v.filters.ingredients),b=10,h=(v,c)=>{r(v),d(v),c.setFieldValue("ingredients",v?v.value:"")};s.useEffect(()=>{o(oe())},[o]);const C=()=>{u<b&&m(u+1)},M=()=>{u>1&&m(u-1)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Ingredients"}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:M,children:"-"}),e.jsx("span",{children:u}),e.jsx("button",{type:"button",onClick:C,children:"+"})]}),e.jsx(L,{initialValues:i,validationSchema:Ye,onSubmit:v=>{t({...i,...v}),n()},children:e.jsx(U,{children:[...Array(u)].map((v,c)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`ingredient${c}`,children:e.jsx(j,{name:`ingredient${c}`,children:({field:f,form:p})=>e.jsx(D,{closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:x.map(({title:V})=>({value:V,label:V})),name:f.name,id:`ingredient${c}`,...f,value:a,onChange:V=>h(V,p),placeholder:""})})}),e.jsxs("div",{children:[e.jsx(j,{name:`quantity${c}`,placeholder:"Enter the quantity"}),e.jsx(k,{name:`quantity${c}`,component:"div"}),e.jsx("label",{htmlFor:`measure${c}`,children:e.jsx(D,{options:Xe,name:`measure${c}`,value:l,onChange:f=>d(f),placeholder:"cl"})}),e.jsx("button",{children:"X"})]})]},c))})})]})},Je=g.h2`
  margin-bottom: 40px;

  color: #f3f3f3;
  color: ${({theme:i})=>i.mainText};
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.1;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`,Ze=g.textarea`
  padding-top: 16px;
  padding-bottom: 16;
  padding-left: 18px;
  padding-right: 18px;
  margin-bottom: 20px;

  resize: none;
  border-radius: 14px;
  border: 1px solid rgba(243, 243, 243, 0.5);
  border: 1px solid ${({theme:i})=>i.mainText};
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
`,Ke=T().shape({textareaRecipe:E().min(100,"You need to add a description of at least 100 symbols")}),et=({formData:i,setFormData:t,handleSubmit:n})=>e.jsx(e.Fragment,{children:e.jsx(L,{initialValues:i,validationSchema:Ke,onSubmit:o=>{t({...i,...o}),n()},children:e.jsxs(U,{children:[e.jsx(Je,{htmlFor:"textareaRecipe",children:"Recipe Preparation"}),e.jsx(j,{name:"textareaRecipe",children:({field:o})=>e.jsx(Ze,{...o,id:"textareaValue",placeholder:"Enter the recipe"})}),e.jsx(k,{name:"textareaValue",component:"div"})]})})}),tt=g.button`
  margin-bottom: 80px;
  border-radius: 42px;
  background: #f3f3f3;
  background: ${({theme:i})=>i.userPopupBtnText};
  padding: 14px 40px;
  border: 2px solid transparent;

  color: #161f37;
  color: ${({theme:i})=>i.userPopupText};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.2;
  transition: color ${W};
  transition: background ${W};

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
`,nt=()=>{const i=R(),[t,n]=s.useState({photo:"",title:"",recipe:"",category:"",glasses:"",strength:"",ingredients:[{ingredient:"",measure:"",quantity:""},{ingredient:"",measure:"",quantity:""},{ingredient:"",measure:"",quantity:""}],textareaRecipe:""}),o=()=>{i(le(t)),console.log(t)};return e.jsxs(e.Fragment,{children:[e.jsx(Qe,{formData:t,setFormData:n}),e.jsx(He,{formData:t,setFormData:n}),e.jsx(et,{formData:t,setFormData:n}),e.jsx(tt,{type:"button",onClick:o,children:"Add"})]})},it=nt,at=g.h3`
  margin-bottom: 20px;

  color: #f3f3f3;
  color: ${({theme:i})=>i.mainText};
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
`,rt=g.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,ot=()=>e.jsxs(rt,{children:[e.jsx(at,{children:"Follow Us"}),e.jsx(se,{})]}),lt=ot,st=g.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
    width: 704px;
    margin-bottom: 140px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 0px;
  }
`,dt=g.li`
  display: flex;
  align-items: center;
`,ut=g.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
`,ct=g.img`
  border-radius: 7px;
`,pt=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 232px;
  margin-left: 14px;
`,mt=g.h3`
  color: #f3f3f3;
  color: ${({theme:i})=>i.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,ht=g.p`
  overflow: hidden;
  color: rgba(243, 243, 243, 0.5);
  color: ${({theme:i})=>i.subTitleText};
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
`,xt=()=>{const i=R(),t=$(a=>a.drinks.popularDrinks),{isLoading:n,error:o}=$(xe);return s.useEffect(()=>{i(de())},[i]),e.jsxs("div",{children:[n&&e.jsx(ue,{}),o&&e.jsx("p",{children:"Sorry. There are no images ... 😭"}),e.jsx(st,{children:t.map(({_id:a,drinkThumb:r,drink:l,shortDescription:d})=>e.jsx(dt,{children:e.jsxs(ut,{href:`/api/drinks/popular/${a}`,children:[e.jsx(ct,{src:r,alt:l,width:90,height:90}),e.jsxs(pt,{children:[e.jsx(mt,{children:l}),e.jsx(ht,{children:d})]})]})},a))})]})},ft=xt;function yt(){return e.jsx("div",{children:e.jsxs(ce,{children:[e.jsx(fe,{title:"Add drink"}),e.jsx(it,{}),e.jsx(lt,{}),e.jsx(ft,{})]})})}export{yt as default};
