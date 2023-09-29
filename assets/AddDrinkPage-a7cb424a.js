import{r as s,_ as Z,m as K,n as S,o as ee,p as A,T as O,q as y,v as N,s as g,b as j,c as T,d as E,u as R,e as $,f as ne,w as te,j as e,k as L,F as U,A as ie,x as re,E as k,y as ae,z as oe,h as le,t as W,B as se,S as de,D as ue,L as ce,C as pe}from"./index-a03da337.js";import{m as me,d as he,_ as P,a as q,S as D}from"./react-select.esm-d483e479.js";import{s as xe}from"./drinks-selectors-db0f3074.js";import{P as fe}from"./PageTitle-edbc540c.js";function _(i,n){var t=function(a){return n&&s.isValidElement(a)?n(a):a},o=Object.create(null);return i&&s.Children.map(i,function(r){return r}).forEach(function(r){o[r.key]=t(r)}),o}function ge(i,n){i=i||{},n=n||{};function t(x){return x in n?n[x]:i[x]}var o=Object.create(null),r=[];for(var a in i)a in n?r.length&&(o[a]=r,r=[]):r.push(a);var l,d={};for(var u in n){if(o[u])for(l=0;l<o[u].length;l++){var m=o[u][l];d[o[u][l]]=t(m)}d[u]=t(u)}for(l=0;l<r.length;l++)d[r[l]]=t(r[l]);return d}function w(i,n,t){return t[n]!=null?t[n]:i.props[n]}function ve(i,n){return _(i.children,function(t){return s.cloneElement(t,{onExited:n.bind(null,t),in:!0,appear:w(t,"appear",i),enter:w(t,"enter",i),exit:w(t,"exit",i)})})}function be(i,n,t){var o=_(i.children),r=ge(n,o);return Object.keys(r).forEach(function(a){var l=r[a];if(s.isValidElement(l)){var d=a in n,u=a in o,m=n[a],x=s.isValidElement(m)&&!m.props.in;u&&(!d||x)?r[a]=s.cloneElement(l,{onExited:t.bind(null,l),in:!0,exit:w(l,"exit",i),enter:w(l,"enter",i)}):!u&&d&&!x?r[a]=s.cloneElement(l,{in:!1}):u&&d&&s.isValidElement(m)&&(r[a]=s.cloneElement(l,{onExited:t.bind(null,l),in:m.props.in,exit:w(l,"exit",i),enter:w(l,"enter",i)}))}}),r}var je=Object.values||function(i){return Object.keys(i).map(function(n){return i[n]})},ye={component:"div",childFactory:function(n){return n}},G=function(i){Z(n,i);function n(o,r){var a;a=i.call(this,o,r)||this;var l=a.handleExited.bind(K(a));return a.state={contextValue:{isMounting:!0},handleExited:l,firstRender:!0},a}var t=n.prototype;return t.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},t.componentWillUnmount=function(){this.mounted=!1},n.getDerivedStateFromProps=function(r,a){var l=a.children,d=a.handleExited,u=a.firstRender;return{children:u?ve(r,d):be(r,l,d),firstRender:!1}},t.handleExited=function(r,a){var l=_(this.props.children);r.key in l||(r.props.onExited&&r.props.onExited(a),this.mounted&&this.setState(function(d){var u=S({},d.children);return delete u[r.key],{children:u}}))},t.render=function(){var r=this.props,a=r.component,l=r.childFactory,d=ee(r,["component","childFactory"]),u=this.state.contextValue,m=je(this.state.children).map(l);return delete d.appear,delete d.enter,delete d.exit,a===null?A.createElement(O.Provider,{value:u},m):A.createElement(O.Provider,{value:u},A.createElement(a,d,m))},n}(A.Component);G.propTypes={};G.defaultProps=ye;const B=G;var Ee=["in","onExited","appear","enter","exit"],Se=function(n){return function(t){t.in,t.onExited,t.appear,t.enter,t.exit;var o=P(t,Ee);return s.createElement(n,o)}},we=Se,Ce=["component","duration","in","onExited"],Q=function(n){var t=n.component,o=n.duration,r=o===void 0?1:o,a=n.in;n.onExited;var l=P(n,Ce),d=s.useRef(null),u={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(r,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(N,{mountOnEnter:!0,unmountOnExit:!0,in:a,timeout:r,nodeRef:d},function(m){var x={style:y({},u[m]),ref:d};return s.createElement(t,S({innerProps:x},l))})},z=260,Ve=function(n){var t=n.children,o=n.in,r=n.onExited,a=s.useRef(null),l=s.useState("auto"),d=q(l,2),u=d[0],m=d[1];s.useEffect(function(){var b=a.current;if(b){var h=window.requestAnimationFrame(function(){return m(b.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(h)}}},[]);var x=function(h){switch(h){default:return{width:u};case"exiting":return{width:0,transition:"width ".concat(z,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(N,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:o,onExited:function(){var h=a.current;h&&(r==null||r(h))},timeout:z,nodeRef:a},function(b){return s.createElement("div",{ref:a,style:y({overflow:"hidden",whiteSpace:"nowrap"},x(b))},t)})},Pe=["in","onExited"],Me=function(n){return function(t){var o=t.in,r=t.onExited,a=P(t,Pe);return s.createElement(Ve,{in:o,onExited:r},s.createElement(n,S({cropWithEllipsis:o},a)))}},Fe=Me,ke=function(n){return function(t){return s.createElement(Q,S({component:n,duration:t.isMulti?z:1},t))}},$e=ke,Ie=function(n){return function(t){return s.createElement(Q,S({component:n},t))}},Ae=Ie,Te=["component"],De=["children"],Re=function(n){return function(t){return t.isMulti?s.createElement(qe,S({component:n},t)):s.createElement(B,S({component:n},t))}},qe=function(n){var t=n.component,o=P(n,Te),r=ze(o);return s.createElement(B,S({component:t},r))},ze=function(n){var t=n.children,o=P(n,De),r=o.isMulti,a=o.hasValue,l=o.innerProps,d=o.selectProps,u=d.components,m=d.controlShouldRenderValue,x=s.useState(r&&m&&a),b=q(x,2),h=b[0],C=b[1],M=s.useState(!1),v=q(M,2),c=v[0],f=v[1];s.useEffect(function(){a&&!h&&C(!0)},[a,h]),s.useEffect(function(){c&&!a&&h&&C(!1),f(!1)},[c,a,h]);var p=function(){return f(!0)},V=function(F){if(r&&s.isValidElement(F)){if(F.type===u.MultiValue)return s.cloneElement(F,{onExited:p});if(F.type===u.Placeholder&&h)return null}return F},Y=y(y({},l),{},{style:y(y({},l==null?void 0:l.style),{},{display:r&&a||h?"flex":"grid"})}),H=y(y({},o),{},{innerProps:Y,children:s.Children.toArray(t).map(V)});return H},Le=Re,Ue=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],X=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=he({components:n}),o=t.Input,r=t.MultiValue,a=t.Placeholder,l=t.SingleValue,d=t.ValueContainer,u=P(t,Ue);return y({Input:we(o),MultiValue:Fe(r),Placeholder:$e(a),SingleValue:Ae(l),ValueContainer:Le(d)},u)},I=X();I.Input;I.MultiValue;I.Placeholder;I.SingleValue;I.ValueContainer;var _e=me(X);const Ge=g.label`
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
`,Ne=T().shape({photo:E().required("Cocktail photo is a mandatory field").url(),title:E().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),recipe:E().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:E().required("Cocktail category is a required field"),glasses:E().required("Cocktail glasses is a required field")}),Be=_e(),Qe=({formData:i,setFormData:n,handleSubmit:t})=>{const o=R(),r=$(c=>c.filters.categories),a=$(c=>c.filters.glasses),[l,d]=s.useState(null),[u,m]=s.useState(!1),[x,b]=s.useState(null),[h,C]=s.useState(null);s.useEffect(()=>{o(ne()),o(te())},[o]);const M=c=>{const f=c.target.files[0];if(f){const p=URL.createObjectURL(f);n({...i,photo:f}),d(p)}},v=()=>{n({...i,photo:null}),d(null),m(!1)};return e.jsx("div",{children:e.jsx(L,{initialValues:i,validationSchema:Ne,onSubmit:c=>{n({...i,...c}),t()},children:e.jsxs(U,{children:[e.jsxs(Ge,{htmlFor:"photo",children:[e.jsx(We,{type:"file",id:"photo",name:"photo",onChange:M,style:{display:"none"}}),u?e.jsxs("button",{type:"button",onClick:v,children:[e.jsx(ie,{}),"Delete image"]}):e.jsxs("button",{type:"button",children:[e.jsx(re,{})," Add image"]}),l&&e.jsx(Oe,{src:l,alt:"Preview"}),e.jsx(k,{name:"photo",component:"div"})]}),e.jsx(j,{name:"title",placeholder:"Enter item title"}),e.jsx(k,{name:"title",component:"div"}),e.jsx(j,{name:"recipe",placeholder:"Enter about recipe"}),e.jsx(k,{name:"recipe",component:"div"}),e.jsx("label",{htmlFor:"category",children:e.jsx(j,{name:"category",children:({field:c,form:f})=>e.jsx(D,{closeMenuOnSelect:!0,isClearable:!0,classNames:{control:p=>p.isFocused?"border-orange-600":"border-grey-300"},options:r.map(p=>({value:p,label:p})),name:c.name,id:"categories",...c,value:x?{value:x,label:x}:null,onChange:p=>{b(p?p.value:null),f.setFieldValue("categories",p?p.value:null)},placeholder:"Category"})})}),e.jsx("label",{htmlFor:"glasses",children:e.jsx(j,{name:"glasses",children:({field:c,form:f})=>e.jsx(D,{closeMenuOnSelect:!0,components:Be,isClearable:!0,classNames:{control:p=>p.isFocused?"border-orange-600":"border-grey-300"},options:a.map(p=>({value:p,label:p})),name:c.name,id:"glasses",...c,value:h?{value:h,label:h}:null,onChange:p=>{C(p?p.value:null),f.setFieldValue("glasses",p?p.value:null)},placeholder:"Glasses"})})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx(j,{type:"radio",name:"strength",value:"alcoholic"}),e.jsx("span",{children:"Alcoholic"})]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx(j,{type:"radio",name:"strength",value:"nonAlcoholic"}),e.jsx("span",{children:"Non-alcoholic"})]})})]})})})},Xe=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],Ye=T().shape({ingredients:ae().of(T().shape({ingredient:E().required("The ingredient is mandatory"),measure:E().required("Measure is mandatory"),quantity:oe().typeError("The quantity must be a number").positive("The number must be positive").required("Quantity is required")}))}),He=({formData:i,setFormData:n,handleSubmit:t})=>{const o=R(),[r,a]=s.useState(null),[l,d]=s.useState(null),[u,m]=s.useState(3),x=$(v=>v.filters.ingredients),b=10,h=(v,c)=>{a(v),d(v),c.setFieldValue("ingredients",v?v.value:"")};s.useEffect(()=>{o(le())},[o]);const C=()=>{u<b&&m(u+1)},M=()=>{u>1&&m(u-1)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Ingredients"}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:M,children:"-"}),e.jsx("span",{children:u}),e.jsx("button",{type:"button",onClick:C,children:"+"})]}),e.jsx(L,{initialValues:i,validationSchema:Ye,onSubmit:v=>{n({...i,...v}),t()},children:e.jsx(U,{children:[...Array(u)].map((v,c)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`ingredient${c}`,children:e.jsx(j,{name:`ingredient${c}`,children:({field:f,form:p})=>e.jsx(D,{closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:x.map(({title:V})=>({value:V,label:V})),name:f.name,id:`ingredient${c}`,...f,value:r,onChange:V=>h(V,p),placeholder:""})})}),e.jsxs("div",{children:[e.jsx(j,{name:`quantity${c}`,placeholder:"Enter the quantity"}),e.jsx(k,{name:`quantity${c}`,component:"div"}),e.jsx("label",{htmlFor:`measure${c}`,children:e.jsx(D,{options:Xe,name:`measure${c}`,value:l,onChange:f=>d(f),placeholder:"cl"})}),e.jsx("button",{children:"X"})]})]},c))})})]})},Je=g.h2`
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
`,Ke=T().shape({textareaRecipe:E().min(100,"You need to add a description of at least 100 symbols")}),en=({formData:i,setFormData:n,handleSubmit:t})=>e.jsx(e.Fragment,{children:e.jsx(L,{initialValues:i,validationSchema:Ke,onSubmit:o=>{n({...i,...o}),t()},children:e.jsxs(U,{children:[e.jsx(Je,{htmlFor:"textareaRecipe",children:"Recipe Preparation"}),e.jsx(j,{name:"textareaRecipe",children:({field:o})=>e.jsx(Ze,{...o,id:"textareaValue",placeholder:"Enter the recipe"})}),e.jsx(k,{name:"textareaValue",component:"div"})]})})}),nn=g.button`
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
`,tn=()=>{const i=R(),[n,t]=s.useState({photo:"",title:"",recipe:"",category:"",glasses:"",strength:"",ingredients:[{ingredient:"",measure:"",quantity:""},{ingredient:"",measure:"",quantity:""},{ingredient:"",measure:"",quantity:""}],textareaRecipe:""}),o=()=>{i(se(n)),console.log(n)};return e.jsxs(e.Fragment,{children:[e.jsx(Qe,{formData:n,setFormData:t}),e.jsx(He,{formData:n,setFormData:t}),e.jsx(en,{formData:n,setFormData:t}),e.jsx(nn,{type:"button",onClick:o,children:"Add"})]})},rn=tn,an=g.h3`
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
`,on=g.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 80px;
  }
`,ln=()=>e.jsxs(on,{children:[e.jsx(an,{children:"Follow Us"}),e.jsx(de,{})]}),sn=ln,dn=g.ul`
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
`,un=g.li`
  display: flex;
  align-items: center;
`,cn=g.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
`,pn=g.img`
  border-radius: 7px;
`,mn=g.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 232px;
  margin-left: 14px;
`,hn=g.h3`
  color: #f3f3f3;
  color: ${({theme:i})=>i.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,xn=g.p`
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
`,fn=()=>{const i=R(),n=$(r=>r.drinks.popularDrinks),{isLoading:t,error:o}=$(xe);return s.useEffect(()=>{i(ue())},[i]),e.jsxs("div",{children:[t&&e.jsx(ce,{}),o&&e.jsx("p",{children:"Sorry. There are no images ... 😭"}),e.jsx(dn,{children:n.map(({_id:r,drinkThumb:a,drink:l,shortDescription:d})=>e.jsx(un,{children:e.jsxs(cn,{href:`/api/drinks/popular/${r}`,children:[e.jsx(pn,{src:a,alt:l,width:90,height:90}),e.jsxs(mn,{children:[e.jsx(hn,{children:l}),e.jsx(xn,{children:d})]})]})},r))})]})},gn=fn;function En(){return e.jsx("div",{children:e.jsxs(pe,{children:[e.jsx(fe,{title:"Add drink"}),e.jsx(rn,{}),e.jsx(sn,{}),e.jsx(gn,{})]})})}export{En as default};
