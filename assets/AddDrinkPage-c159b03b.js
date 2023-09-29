import{r as s,_ as J,m as Z,n as S,o as K,p as $,T as O,q as E,v as W,s as b,b as j,c as D,d as y,u as q,e as A,f as ee,w as te,j as e,k as _,F as G,A as ne,x as ie,E as I,y as ae,z as re,h as le,B as oe,S as se,D as ue,L as ce}from"./index-6bf151e2.js";import{m as de,d as pe,_ as P,a as T,S as R}from"./react-select.esm-400700fe.js";import{s as me}from"./drinks-selectors-db0f3074.js";import{P as he}from"./PageTitle-04c6f6e6.js";function U(a,t){var n=function(r){return t&&s.isValidElement(r)?t(r):r},l=Object.create(null);return a&&s.Children.map(a,function(i){return i}).forEach(function(i){l[i.key]=n(i)}),l}function xe(a,t){a=a||{},t=t||{};function n(x){return x in t?t[x]:a[x]}var l=Object.create(null),i=[];for(var r in a)r in t?i.length&&(l[r]=i,i=[]):i.push(r);var o,u={};for(var c in t){if(l[c])for(o=0;o<l[c].length;o++){var m=l[c][o];u[l[c][o]]=n(m)}u[c]=n(c)}for(o=0;o<i.length;o++)u[i[o]]=n(i[o]);return u}function C(a,t,n){return n[t]!=null?n[t]:a.props[t]}function fe(a,t){return U(a.children,function(n){return s.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:C(n,"appear",a),enter:C(n,"enter",a),exit:C(n,"exit",a)})})}function ge(a,t,n){var l=U(a.children),i=xe(t,l);return Object.keys(i).forEach(function(r){var o=i[r];if(s.isValidElement(o)){var u=r in t,c=r in l,m=t[r],x=s.isValidElement(m)&&!m.props.in;c&&(!u||x)?i[r]=s.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:C(o,"exit",a),enter:C(o,"enter",a)}):!c&&u&&!x?i[r]=s.cloneElement(o,{in:!1}):c&&u&&s.isValidElement(m)&&(i[r]=s.cloneElement(o,{onExited:n.bind(null,o),in:m.props.in,exit:C(o,"exit",a),enter:C(o,"enter",a)}))}}),i}var ve=Object.values||function(a){return Object.keys(a).map(function(t){return a[t]})},je={component:"div",childFactory:function(t){return t}},z=function(a){J(t,a);function t(l,i){var r;r=a.call(this,l,i)||this;var o=r.handleExited.bind(Z(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(i,r){var o=r.children,u=r.handleExited,c=r.firstRender;return{children:c?fe(i,u):ge(i,o,u),firstRender:!1}},n.handleExited=function(i,r){var o=U(this.props.children);i.key in o||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(u){var c=S({},u.children);return delete c[i.key],{children:c}}))},n.render=function(){var i=this.props,r=i.component,o=i.childFactory,u=K(i,["component","childFactory"]),c=this.state.contextValue,m=ve(this.state.children).map(o);return delete u.appear,delete u.enter,delete u.exit,r===null?$.createElement(O.Provider,{value:c},m):$.createElement(O.Provider,{value:c},$.createElement(r,u,m))},t}($.Component);z.propTypes={};z.defaultProps=je;const N=z;var be=["in","onExited","appear","enter","exit"],Ee=function(t){return function(n){n.in,n.onExited,n.appear,n.enter,n.exit;var l=P(n,be);return s.createElement(t,l)}},ye=Ee,Se=["component","duration","in","onExited"],B=function(t){var n=t.component,l=t.duration,i=l===void 0?1:l,r=t.in;t.onExited;var o=P(t,Se),u=s.useRef(null),c={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(i,"ms")},exiting:{opacity:0},exited:{opacity:0}};return s.createElement(W,{mountOnEnter:!0,unmountOnExit:!0,in:r,timeout:i,nodeRef:u},function(m){var x={style:E({},c[m]),ref:u};return s.createElement(n,S({innerProps:x},o))})},L=260,Ce=function(t){var n=t.children,l=t.in,i=t.onExited,r=s.useRef(null),o=s.useState("auto"),u=T(o,2),c=u[0],m=u[1];s.useEffect(function(){var v=r.current;if(v){var h=window.requestAnimationFrame(function(){return m(v.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(h)}}},[]);var x=function(h){switch(h){default:return{width:c};case"exiting":return{width:0,transition:"width ".concat(L,"ms ease-out")};case"exited":return{width:0}}};return s.createElement(W,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:l,onExited:function(){var h=r.current;h&&(i==null||i(h))},timeout:L,nodeRef:r},function(v){return s.createElement("div",{ref:r,style:E({overflow:"hidden",whiteSpace:"nowrap"},x(v))},n)})},Ve=["in","onExited"],we=function(t){return function(n){var l=n.in,i=n.onExited,r=P(n,Ve);return s.createElement(Ce,{in:l,onExited:i},s.createElement(t,S({cropWithEllipsis:l},r)))}},Pe=we,Me=function(t){return function(n){return s.createElement(B,S({component:t,duration:n.isMulti?L:1},n))}},Fe=Me,Ie=function(t){return function(n){return s.createElement(B,S({component:t},n))}},Ae=Ie,ke=["component"],$e=["children"],De=function(t){return function(n){return n.isMulti?s.createElement(Re,S({component:t},n)):s.createElement(N,S({component:t},n))}},Re=function(t){var n=t.component,l=P(t,ke),i=qe(l);return s.createElement(N,S({component:n},i))},qe=function(t){var n=t.children,l=P(t,$e),i=l.isMulti,r=l.hasValue,o=l.innerProps,u=l.selectProps,c=u.components,m=u.controlShouldRenderValue,x=s.useState(i&&m&&r),v=T(x,2),h=v[0],V=v[1],M=s.useState(!1),g=T(M,2),d=g[0],f=g[1];s.useEffect(function(){r&&!h&&V(!0)},[r,h]),s.useEffect(function(){d&&!r&&h&&V(!1),f(!1)},[d,r,h]);var p=function(){return f(!0)},w=function(F){if(i&&s.isValidElement(F)){if(F.type===c.MultiValue)return s.cloneElement(F,{onExited:p});if(F.type===c.Placeholder&&h)return null}return F},X=E(E({},o),{},{style:E(E({},o==null?void 0:o.style),{},{display:i&&r||h?"flex":"grid"})}),Y=E(E({},l),{},{innerProps:X,children:s.Children.toArray(n).map(w)});return Y},Te=De,Le=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],Q=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=pe({components:t}),l=n.Input,i=n.MultiValue,r=n.Placeholder,o=n.SingleValue,u=n.ValueContainer,c=P(n,Le);return E({Input:ye(l),MultiValue:Pe(i),Placeholder:Fe(r),SingleValue:Ae(o),ValueContainer:Te(u)},c)},k=Q();k.Input;k.MultiValue;k.Placeholder;k.SingleValue;k.ValueContainer;var _e=de(Q);const Ge=b.label`
    display: block;
    width: 335px;
    height: 320px;
`,Ue=b.img`
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
`,ze=b(j)`
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
`,Oe=D().shape({photo:y().required("Cocktail photo is a mandatory field").url(),title:y().required("Cocktail title is a mandatory field").min(3,"Cocktail name must contain at least 3 symbols"),recipe:y().required("Description of the cocktail is a mandatory field").min(10,"The cocktail description must contain at least 10 symbols"),category:y().required("Cocktail category is a required field"),glasses:y().required("Cocktail glasses is a required field")}),We=_e(),Ne=({formData:a,setFormData:t,handleSubmit:n})=>{const l=q(),i=A(d=>d.filters.categories),r=A(d=>d.filters.glasses),[o,u]=s.useState(null),[c,m]=s.useState(!1),[x,v]=s.useState(null),[h,V]=s.useState(null);s.useEffect(()=>{l(ee()),l(te())},[l]);const M=d=>{const f=d.target.files[0];if(f){const p=URL.createObjectURL(f);t({...a,photo:f}),u(p)}},g=()=>{t({...a,photo:null}),u(null),m(!1)};return e.jsx("div",{children:e.jsx(_,{initialValues:a,validationSchema:Oe,onSubmit:d=>{t({...a,...d}),n()},children:e.jsxs(G,{children:[e.jsxs(Ge,{htmlFor:"photo",children:[e.jsx(ze,{type:"file",id:"photo",name:"photo",onChange:M,style:{display:"none"}}),c?e.jsxs("button",{type:"button",onClick:g,children:[e.jsx(ne,{}),"Delete image"]}):e.jsxs("button",{type:"button",children:[e.jsx(ie,{})," Add image"]}),o&&e.jsx(Ue,{src:o,alt:"Preview"}),e.jsx(I,{name:"photo",component:"div"})]}),e.jsx(j,{name:"title",placeholder:"Enter item title"}),e.jsx(I,{name:"title",component:"div"}),e.jsx(j,{name:"recipe",placeholder:"Enter about recipe"}),e.jsx(I,{name:"recipe",component:"div"}),e.jsx("label",{htmlFor:"category",children:e.jsx(j,{name:"category",children:({field:d,form:f})=>e.jsx(R,{closeMenuOnSelect:!0,isClearable:!0,classNames:{control:p=>p.isFocused?"border-orange-600":"border-grey-300"},options:i.map(p=>({value:p,label:p})),name:d.name,id:"categories",...d,value:x?{value:x,label:x}:null,onChange:p=>{v(p?p.value:null),f.setFieldValue("categories",p?p.value:null)},placeholder:"Category"})})}),e.jsx("label",{htmlFor:"glasses",children:e.jsx(j,{name:"glasses",children:({field:d,form:f})=>e.jsx(R,{closeMenuOnSelect:!0,components:We,isClearable:!0,classNames:{control:p=>p.isFocused?"border-orange-600":"border-grey-300"},options:r.map(p=>({value:p,label:p})),name:d.name,id:"glasses",...d,value:h?{value:h,label:h}:null,onChange:p=>{V(p?p.value:null),f.setFieldValue("glasses",p?p.value:null)},placeholder:"Glasses"})})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx(j,{type:"radio",name:"strength",value:"alcoholic"}),e.jsx("span",{children:"Alcoholic"})]})}),e.jsx("div",{children:e.jsxs("label",{children:[e.jsx(j,{type:"radio",name:"strength",value:"nonAlcoholic"}),e.jsx("span",{children:"Non-alcoholic"})]})})]})})})},Be=[{value:"ml",label:"ml"},{value:"oz",label:"oz"},{value:"cl",label:"cl"},{value:"tsp",label:"tsp"},{value:"pinch",label:"pinch"},{value:"sprigs",label:"sprigs"},{value:"cup",label:"cup"},{value:"cups",label:"cups"},{value:"tblsp",label:"tblsp"}],Qe=D().shape({ingredients:ae().of(D().shape({ingredient:y().required("The ingredient is mandatory"),measure:y().required("Measure is mandatory"),quantity:re().typeError("The quantity must be a number").positive("The number must be positive").required("Quantity is required")}))}),Xe=({formData:a,setFormData:t,handleSubmit:n})=>{const l=q(),[i,r]=s.useState(null),[o,u]=s.useState(null),[c,m]=s.useState(3),x=A(g=>g.filters.ingredients),v=10,h=(g,d)=>{r(g),u(g),d.setFieldValue("ingredients",g?g.value:"")};s.useEffect(()=>{l(le())},[l]);const V=()=>{c<v&&m(c+1)},M=()=>{c>1&&m(c-1)};return e.jsxs("div",{children:[e.jsx("h2",{children:"Ingredients"}),e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:M,children:"-"}),e.jsx("span",{children:c}),e.jsx("button",{type:"button",onClick:V,children:"+"})]}),e.jsx(_,{initialValues:a,validationSchema:Qe,onSubmit:g=>{t({...a,...g}),n()},children:e.jsx(G,{children:[...Array(c)].map((g,d)=>e.jsxs("div",{children:[e.jsx("label",{htmlFor:`ingredient${d}`,children:e.jsx(j,{name:`ingredient${d}`,children:({field:f,form:p})=>e.jsx(R,{closeMenuOnSelect:!0,isMulti:!1,isClearable:!0,options:x.map(({title:w})=>({value:w,label:w})),name:f.name,id:`ingredient${d}`,...f,value:i,onChange:w=>h(w,p),placeholder:""})})}),e.jsxs("div",{children:[e.jsx(j,{name:`quantity${d}`,placeholder:"Enter the quantity"}),e.jsx(I,{name:`quantity${d}`,component:"div"}),e.jsx("label",{htmlFor:`measure${d}`,children:e.jsx(R,{options:Be,name:`measure${d}`,value:o,onChange:f=>u(f),placeholder:"cl"})}),e.jsx("button",{children:"X"})]})]},d))})})]})},Ye=D().shape({textareaRecipe:y().min(100,"You need to add a description of at least 100 symbols")}),He=({formData:a,setFormData:t,handleSubmit:n})=>e.jsx(e.Fragment,{children:e.jsx(_,{initialValues:a,validationSchema:Ye,onSubmit:l=>{t({...a,...l}),n()},children:e.jsxs(G,{children:[e.jsx("h2",{htmlFor:"textareaRecipe",children:"Recipe Preparation"}),e.jsx(j,{name:"textareaRecipe",children:({field:l})=>e.jsx("textarea",{...l,id:"textareaValue",placeholder:"Enter the recipe"})}),e.jsx(I,{name:"textareaValue",component:"div"})]})})}),Je=()=>{const a=q(),[t,n]=s.useState({photo:"",title:"",recipe:"",category:"",glasses:"",strength:"",ingredients:[{ingredient:"",measure:"",quantity:""},{ingredient:"",measure:"",quantity:""},{ingredient:"",measure:"",quantity:""}],textareaRecipe:""}),l=()=>{a(oe(t)),console.log(t)};return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{formData:t,setFormData:n}),e.jsx(Xe,{formData:t,setFormData:n}),e.jsx(He,{formData:t,setFormData:n}),e.jsx("button",{type:"button",onClick:l,children:"Add"})]})},Ze=Je,Ke=()=>e.jsxs("div",{children:[e.jsx("h3",{children:"Follow Us"}),e.jsx(se,{})]}),et=Ke,tt=b.ul`
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
`,nt=b.li`
  display: flex;
  align-items: center;
`,it=b.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
`,at=b.img`
  border-radius: 7px;
`,rt=b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 232px;
  margin-left: 14px;
`,lt=b.h3`
  color: #f3f3f3;
  color: ${({theme:a})=>a.mainText};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`,ot=b.p`
  overflow: hidden;
  color: rgba(243, 243, 243, 0.5);
  color: ${({theme:a})=>a.subTitleText};
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
`,st=()=>{const a=q(),t=A(i=>i.drinks.popularDrinks),{isLoading:n,error:l}=A(me);return s.useEffect(()=>{a(ue())},[a]),e.jsxs("div",{children:[n&&e.jsx(ce,{}),l&&e.jsx("p",{children:"Sorry. There are no images ... 😭"}),e.jsx(tt,{children:t.map(({_id:i,drinkThumb:r,drink:o,shortDescription:u})=>e.jsx(nt,{children:e.jsxs(it,{href:`/api/drinks/popular/${i}`,children:[e.jsx(at,{src:r,alt:o,width:90,height:90}),e.jsxs(rt,{children:[e.jsx(lt,{children:o}),e.jsx(ot,{children:u})]})]})},i))})]})},ut=st;function ht(){return e.jsxs("div",{children:[e.jsx(he,{title:"Add drink"}),e.jsx(Ze,{}),e.jsx(et,{}),e.jsx(ut,{})]})}export{ht as default};
