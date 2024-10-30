import{i as Oe,bZ as Ve,b_ as Ge,by as We,bu as $e,b$ as Ke,c0 as Xe,c1 as Ye,c2 as Ze,c3 as qe,bt as ve,c4 as ze,c5 as Je,m as v,F as y,b0 as Qe,B as O,T as E,l as Ue,a as A,o as _,p as n,Z as ie,ap as es,E as z,c6 as U,c7 as F,H as Te,c8 as oe,D as k,I as R,c9 as N,ca as ss,cb as Me,C as Z,cc as ce,ao as L,G as he,aw as B,aH as ts,cd as ge,ax as ns,ay as os,J as is,ce as rs,cf as as,cg as ls}from"./strapi-Ddy60Q00.js";import{_ as cs}from"./_baseEach-RPJecHJH.js";var ds=Ve,us=Ge,ps=We,hs=$e,gs=Ke,fs=ve,ms=Xe,xs=Ye,Cs=Ze,bs=qe;function js(e,s,o){var t=fs(e),i=t||ms(e)||bs(e);if(s=hs(s),o==null){var a=e&&e.constructor;i?o=t?new a:[]:Cs(e)?o=xs(a)?us(gs(e)):{}:o={}}return(i?ds:ps)(e,function(l,r,c){return s(o,l,r,c)}),o}var ys=js;const As=Oe(ys);function ks(e,s,o,t){for(var i=-1,a=e==null?0:e.length;++i<a;){var l=e[i];s(t,l,o(l),e)}return t}var Ss=ks,Os=cs;function $s(e,s,o,t){return Os(e,function(i,a,l){s(t,i,o(i),l)}),t}var vs=$s,Ts=Ss,Ms=vs,ws=$e,_s=ve;function Ps(e,s){return function(o,t){var i=_s(o)?Ts:Ms,a=s?s():{};return i(o,e,ws(t),a)}}var Es=Ps,Ls=ze,Rs=Es,Is=Object.prototype,Bs=Is.hasOwnProperty,Ns=Rs(function(e,s,o){Bs.call(e,o)?e[o].push(s):Ls(e,o,[s])}),Ds=Ns;const re=Oe(Ds),[Hs,Fs]=Je("PermissionsDataManager"),Y=()=>Fs("usePermissionsDataManager");function fe(e,s){function o(t,i){return As(t,(a,l,r)=>(ts(l,i[r])||(a[r]=ge(l)&&ge(i[r])?o(l,i[r]):l),a))}return o(e,s)}const we=e=>Array.isArray(e)?e.reduce((s,o)=>(Array.isArray(o)?s.push(...we(o)):s.push(o),s),[]):[],V=e=>N(e)?we(Object.values(e).map(s=>N(s)?V(s):s)):[],_e=(e,s,o)=>e.find(t=>t.action===s&&t.subject===o),Vs=e=>{const s=me(e.plugins),o=me(e.settings),t=xe(e.collectionTypes),i=xe(e.singleTypes);return[...s,...o,...t,...i]},me=e=>Object.values(e).reduce((s,o)=>{const t=Object.values(o).reduce((i,a)=>{const l=Object.entries(a).reduce((r,[c,{conditions:d,properties:{enabled:u}}])=>(u&&r.push({action:c,subject:null,conditions:ae(d),properties:{}}),r),[]);return[...i,...l]},[]);return[...s,...t]},[]),xe=e=>Object.entries(e).reduce((o,t)=>{const[i,a]=t,l=Object.entries(a).reduce((r,c)=>{const[d,u]=c;if(!V(u).some(h=>h))return r;if(!u?.properties?.enabled){const h=Object.entries(u.properties).reduce((C,m)=>{const[p,f]=m;return C.properties[p]=Pe(f),C},{action:d,subject:i,conditions:ae(u.conditions),properties:{}});return[...r,h]}return u.properties.enabled&&r.push({action:d,subject:i,properties:{},conditions:ae(u.conditions)}),r},[]);return[...o,...l]},[]),Pe=(e,s="")=>Object.entries(e).reduce((o,t)=>{const[i,a]=t;return N(a)?[...o,...Pe(a,`${s}${i}.`)]:(a&&!N(a)&&o.push(`${s}${i}`),o)},[]),ae=e=>Object.entries(e).filter(([,s])=>s).map(([s])=>s),Ee=(e,s=[])=>e.reduce((o,t)=>(o[t.id]=s.indexOf(t.id)!==-1,o),{}),Ce=(e,s,o=[])=>e.reduce((t,{categoryId:i,childrenForm:a})=>{const l=a.reduce((r,c)=>(r[c.subCategoryId]=c.actions.reduce((d,u)=>{const g=_e(o,u.action,null);return d[u.action]={properties:{enabled:g!==void 0},conditions:Ee(s,g?.conditions??[])},d},{}),r),{});return t[i]=l,t},{}),Gs=(e,s,o)=>{const t=({children:i=[]},a,l="")=>i.reduce((r,c)=>{if(c.children)return{...r,[c.value]:t(c,a,`${l}${c.value}.`)};const d=a.indexOf(`${l}${c.value}`)!==-1;return r[c.value]=d,r},{});return e.reduce((i,a)=>{const l=s.properties.find(({value:r})=>r===a);if(l){const r=o?.properties[l.value]??[],c=t(l,r);i.properties[a]=c}return i},{properties:{}})},be=({subjects:e,actions:s=[]},o,t=[])=>s.reduce((i,a)=>{const l=a.subjects.reduce((c,d)=>{const u=e.find(({uid:g})=>g===d)||null;return u&&(c[d]=u),c},{});if(z(l))return i;const r=Object.keys(l).reduce((c,d)=>{const{actionId:u,applyToProperties:g}=a,m=l[d].properties.map(({value:x})=>x).every(x=>(g||[]).indexOf(x)===-1),p=_e(t,u,d),f=Ee(o,p?.conditions??[]);if(c[d]||(c[d]={}),z(g)||m)return c[d][u]={properties:{enabled:p!==void 0},conditions:f},c;const b=Gs(g,l[d],p);return c[d][u]={...b,conditions:f},c},{});return ss(i,r)},{}),je=(e,s)=>Object.entries(re(e,s)).map(([o,t])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(re(t,"subCategory")).map(([i,a])=>({subCategoryName:i,subCategoryId:i.split(" ").join("-"),actions:a}))})),Q=e=>Object.keys(e).reduce((s,o)=>{const t=e[o];if(N(t)&&!U(t,"conditions"))return{...s,[o]:Q(t)};if(N(t)&&U(t,"conditions")&&!V(Me(t,"conditions")).some(a=>a)){const a=Object.keys(t.conditions).reduce((l,r)=>(l[r]=!1,l),{});return{...s,[o]:{...t,conditions:a}}}return s[o]=t,s},{}),q=(e,s,o=!1)=>Object.keys(e).reduce((t,i)=>{const a=e[i];return i==="conditions"&&!o?(t[i]=a,t):N(a)?{...t,[i]:q(a,s,i==="fields")}:(t[i]=s,t)},{}),I="12rem",de="20rem",se="5.3rem",ue=e=>e?Object.entries(e).reduce((s,[o,t])=>(o!=="conditions"&&(s[o]=t),s),{}):null,G=e=>{const s=ue(e),o=V(s);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const t=o.every(a=>a),i=o.some(a=>a)&&!t;return{hasAllActionsSelected:t,hasSomeActionsSelected:i}},Le=v(y)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({$isCollapsable:e})=>e&&"cursor: pointer;"}
`,pe=v.div`
  width: ${I};
`,Re=()=>n.jsx(O,{color:"danger700",paddingLeft:1,children:"*"}),Ie=({checkboxName:e="",children:s,isActive:o=!1,isCollapsable:t=!1,isFormDisabled:i=!1,label:a,onChange:l,onClick:r,someChecked:c=!1,value:d})=>{const{formatMessage:u}=_(),g={title:a,alignItems:"center",$isCollapsable:t};return t&&Object.assign(g,{onClick:r,"aria-expanded":o,onKeyDown({key:h}){(h==="Enter"||h===" ")&&r()},tabIndex:0,role:"button"}),n.jsxs(y,{alignItems:"center",paddingLeft:6,width:de,shrink:0,children:[n.jsx(O,{paddingRight:2,children:n.jsx(L,{name:e,"aria-label":u({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:i,onCheckedChange:h=>l({target:{name:e,value:!!h}}),checked:c?"indeterminate":d})}),n.jsxs(Le,{...g,children:[n.jsx(E,{ellipsis:!0,children:a}),s]})]})},Ws=({availableActions:e=[],childrenForm:s=[],isFormDisabled:o,label:t,pathToData:i,propertyName:a})=>{const l=A.useMemo(()=>e.map(r=>{const c=Array.isArray(r.applyToProperties)&&r.applyToProperties.indexOf(a)!==-1&&r.isDisplayed;return{label:r.label,actionId:r.actionId,isActionRelatedToCurrentProperty:c}}),[e,a]);return n.jsxs(y,{display:"inline-flex",direction:"column",alignItems:"stretch",minWidth:0,children:[n.jsx(et,{label:t,headers:l}),n.jsx(O,{children:s.map(({children:r,label:c,value:d,required:u},g)=>n.jsx(Ks,{childrenForm:r,label:c,isFormDisabled:o,name:d,required:u,propertyActions:l,pathToData:i,propertyName:a,isOdd:g%2===0},d))})]})},Ks=({childrenForm:e=[],label:s,isFormDisabled:o=!1,name:t,required:i=!1,pathToData:a,propertyActions:l,propertyName:r,isOdd:c=!1})=>{const{formatMessage:d}=_(),[u,g]=A.useState(null),{modifiedData:h,onChangeCollectionTypeLeftActionRowCheckbox:C,onChangeParentCheckbox:m,onChangeSimpleCheckbox:p}=Y(),f=u===t,b=A.useMemo(()=>Array.isArray(e)?e:[],[e]),x=b.length>0,j=A.useCallback(()=>{x&&g(S=>S===t?null:t)},[x,t]),$=({target:{value:S}})=>{C(a,r,t,S)},{hasAllActionsSelected:M,hasSomeActionsSelected:w}=A.useMemo(()=>Xs(l,h,a,r,t),[l,h,a,r,t]);return n.jsxs(n.Fragment,{children:[n.jsx(Ys,{alignItems:"center",$isCollapsable:x,$isActive:f,background:c?"neutral100":"neutral0",children:n.jsxs(y,{children:[n.jsxs(Ie,{onChange:$,onClick:j,isCollapsable:x,isFormDisabled:o,label:s,someChecked:w,value:M,isActive:f,children:[i&&n.jsx(Re,{}),n.jsx(J,{$isActive:f})]}),n.jsx(y,{children:l.map(({label:S,isActionRelatedToCurrentProperty:P,actionId:W})=>{if(!P)return n.jsx(pe,{},S);const T=[...a.split(".."),W,"properties",r,t];if(!x){const H=k(h,T,!1);return n.jsx(y,{width:I,position:"relative",justifyContent:"center",alignItems:"center",children:n.jsx(L,{disabled:o,name:T.join(".."),"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${S}`}),onCheckedChange:Fe=>{p({target:{name:T.join(".."),value:!!Fe}})},checked:H})},W)}const K=k(h,T,{}),{hasAllActionsSelected:D,hasSomeActionsSelected:ne}=G(K);return n.jsx(y,{width:I,position:"relative",justifyContent:"center",alignItems:"center",children:n.jsx(L,{disabled:o,name:T.join(".."),onCheckedChange:H=>{m({target:{name:T.join(".."),value:!!H}})},"aria-label":d({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${t} ${S}`}),checked:ne?"indeterminate":D})},S)})})]})}),f&&n.jsx(Be,{childrenForm:b,isFormDisabled:o,parentName:t,pathToDataFromActionRow:a,propertyName:r,propertyActions:l,recursiveLevel:0})]})},Xs=(e,s,o,t,i)=>{const l=e.reduce((r,c)=>(c.isActionRelatedToCurrentProperty&&r.push(c.actionId),r),[]).reduce((r,c)=>{const d=k(s,[...o.split(".."),c,"properties",t,i],!1);return r[c]=d,r},{});return G(l)},Ys=v(y)`
  height: ${se};
  flex: 1;

  &:hover {
    ${({$isCollapsable:e,theme:s})=>e&&ee(s)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${J} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:s})=>e&&ee(s)};
`,J=v(Qe)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.neutral200};
  }

  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,Be=({childrenForm:e=[],isFormDisabled:s,recursiveLevel:o,pathToDataFromActionRow:t,propertyActions:i,parentName:a,propertyName:l})=>{const{formatMessage:r}=_(),{modifiedData:c,onChangeParentCheckbox:d,onChangeSimpleCheckbox:u}=Y(),[g,h]=A.useState(null),C=p=>{h(f=>f===p?null:p)},m=A.useMemo(()=>g?e.find(({value:p})=>p===g):null,[g,e]);return n.jsxs(O,{paddingLeft:"3.2rem",children:[n.jsx(Js,{}),e.map(({label:p,value:f,required:b,children:x},j)=>{const $=j+1<e.length,M=Array.isArray(x),w=g===f;return n.jsxs(Zs,{$isVisible:$,children:[n.jsxs(y,{height:se,children:[n.jsx(Qs,{children:n.jsx(Us,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",$color:"primary200",children:n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),n.jsxs(y,{style:{flex:1},children:[n.jsx(qs,{$level:o,$isActive:w,$isCollapsable:M,children:n.jsxs(Le,{alignItems:"center",$isCollapsable:M,...M&&{onClick:()=>C(f),"aria-expanded":w,onKeyDown:({key:S})=>(S==="Enter"||S===" ")&&C(f),tabIndex:0,role:"button"},title:p,children:[n.jsx(zs,{ellipsis:!0,children:p}),b&&n.jsx(Re,{}),n.jsx(J,{$isActive:w})]})}),n.jsx(y,{style:{flex:1},children:i.map(({actionId:S,label:P,isActionRelatedToCurrentProperty:W})=>{if(!W)return n.jsx(pe,{},S);const T=[...t.split(".."),S,"properties",l,...a.split(".."),f],K=k(c,T,!1);if(!x)return n.jsx(y,{position:"relative",width:I,justifyContent:"center",alignItems:"center",children:n.jsx(L,{disabled:s,name:T.join(".."),"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${p} ${P}`}),onCheckedChange:H=>{u({target:{name:T.join(".."),value:!!H}})},checked:K})},P);const{hasAllActionsSelected:D,hasSomeActionsSelected:ne}=G(K);return n.jsx(y,{position:"relative",width:I,justifyContent:"center",alignItems:"center",children:n.jsx(L,{disabled:s,name:T.join(".."),"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${p} ${P}`}),onCheckedChange:H=>{d({target:{name:T.join(".."),value:!!H}})},checked:ne?"indeterminate":D},P)},P)})})]})]}),m&&w&&n.jsx(O,{paddingBottom:2,children:n.jsx(Be,{isFormDisabled:s,parentName:`${a}..${f}`,pathToDataFromActionRow:t,propertyActions:i,propertyName:l,recursiveLevel:o+1,childrenForm:m.children})})]},f)})]})},Zs=v(O)`
  border-left: ${({$isVisible:e,theme:s})=>e?`4px solid ${s.colors.primary200}`:"4px solid transparent"};
`,qs=v(y)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({$level:e})=>145-e*36}px;

  &:hover {
    ${({$isCollapsable:e,theme:s})=>e&&ee(s)}
  }

  ${({$isCollapsable:e})=>e&&`
      ${J} {
        display: flex;
      }
  `}
  ${({$isActive:e,theme:s})=>e&&ee(s)};
`,zs=v(E)``,Js=v.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: 0.4rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,Qs=v(O)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,Us=v.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,$color:s})=>e.colors[s]};
  }
`,et=({headers:e=[],label:s})=>{const{formatMessage:o}=_();return n.jsxs(y,{children:[n.jsx(y,{width:de,height:se,shrink:0,alignItems:"center",paddingLeft:6,children:n.jsx(E,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:s})})}),e.map(t=>t.isActionRelatedToCurrentProperty?n.jsx(y,{width:I,shrink:0,justifyContent:"center",children:n.jsx(E,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${t.label.toLowerCase()}`,defaultMessage:t.label})})},t.label):n.jsx(y,{width:I,shrink:0},t.label))]})},ee=e=>Ue`
  color: ${e.colors.primary600};
  font-weight: ${e.fontWeights.bold};

  ${J} {
    path {
      fill: ${e.colors.primary600};
    }
  }
`,st=A.forwardRef(({onClick:e,className:s,hasConditions:o=!1,variant:t="tertiary"},i)=>{const{formatMessage:a}=_();return n.jsx(tt,{$hasConditions:o,className:s,children:n.jsx(ie,{variant:t,startIcon:n.jsx(es,{}),onClick:e,ref:i,children:a({id:"global.settings",defaultMessage:"Settings"})})})}),tt=v(O)`
  ${({$hasConditions:e,theme:s})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: 2rem;
      background: ${s.colors.primary600};
    }
  `}
`,te=v(st)``,Ne=({actions:e=[],headerBreadCrumbs:s=[],isFormDisabled:o,onClose:t})=>{const{formatMessage:i}=_(),{availableConditions:a,modifiedData:l,onChangeConditions:r}=Y(),c=A.useMemo(()=>Object.entries(re(a,"category")),[a]),d=e.filter(({isDisplayed:p,hasSomeActionsSelected:f,hasAllActionsSelected:b})=>p&&!!(f||b)),[u,g]=A.useState(ye(d,l,c)),h=(p,f)=>{g(Te(b=>{b[p]||(b[p]={}),b[p].default||(b[p].default={}),b[p].default=f}))},C=()=>{const p=Object.entries(u).reduce((f,b)=>{const[x,j]=b,$=Object.values(j).reduce((M,w)=>({...M,...w}),{});return f[x]=$,f},{});r(p),t&&t()},m=()=>{g(ye(d,l,c)),t&&t()};return n.jsxs(B.Content,{children:[n.jsx(B.Header,{children:n.jsx(ns,{id:"condition-modal-breadcrumbs",label:s.join(", "),children:s.map((p,f,b)=>n.jsx(os,{isCurrent:f===b.length-1,children:is(i({id:p,defaultMessage:p}))},p))})}),n.jsxs(B.Body,{children:[d.length===0&&n.jsx(E,{children:i({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),n.jsx("ul",{children:d.map(({actionId:p,label:f,pathToConditionsObject:b},x)=>{const j=b.join("..");return n.jsx(nt,{arrayOfOptionsGroupedByCategory:c,label:f,isFormDisabled:o,isGrey:x%2===0,name:j,onChange:h,value:k(u,j,{})},p)})})]}),n.jsxs(B.Footer,{children:[n.jsx(ie,{variant:"tertiary",onClick:()=>m(),children:i({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),n.jsx(ie,{onClick:C,children:i({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})]})]})},ye=(e,s,o)=>e.reduce((t,i)=>{const a=k(s,[...i.pathToConditionsObject,"conditions"],{}),l=o.reduce((r,c)=>{const[d,u]=c,g=u.reduce((h,C)=>(h[C.id]=k(a,C.id,!1),h),{});return r[d]=g,r},{});return t[i.pathToConditionsObject.join("..")]=l,t},{}),nt=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:s=!1,isGrey:o=!1,label:t,name:i,onChange:a,value:l})=>{const{formatMessage:r}=_(),c=d=>{a&&a(i,rt(e,d))};return n.jsxs(y,{tag:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[n.jsxs(y,{paddingLeft:6,style:{width:180},children:[n.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[r({id:"Settings.permissions.conditions.can",defaultMessage:"Can"})," "]}),n.jsx(E,{variant:"sigma",title:t,textColor:"primary600",ellipsis:!0,children:r({id:`Settings.roles.form.permissions.${t.toLowerCase()}`,defaultMessage:t})}),n.jsxs(E,{variant:"sigma",textColor:"neutral600",children:[" ",r({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),n.jsx(O,{style:{maxWidth:430,width:"100%"},children:n.jsx(rs,{id:i,customizeContent:(d=[])=>`${d.length} currently selected`,onChange:c,value:ot(l),options:it(e),disabled:s})})]})},ot=e=>Object.values(e).map(s=>Object.entries(s).filter(([,o])=>o).map(([o])=>o)).flat(),it=e=>e.reduce((s,[o,t])=>(s.push({label:ce(o),children:t.map(i=>({label:i.displayName,value:i.id}))}),s),[]),rt=(e,s)=>e.map(([,o])=>o).flat().reduce((o,t)=>({[t.id]:s.includes(t.id),...o}),{}),at=({actions:e=[],isFormDisabled:s,pathToData:o,subjects:t=[]})=>{const[i,a]=A.useState(null),l=r=>()=>{a(i===r?null:r)};return n.jsx(n.Fragment,{children:t.map(({uid:r,label:c,properties:d},u)=>{const g=i===r,h=e.map(C=>({...C,isDisplayed:Array.isArray(C.subjects)&&C.subjects.indexOf(r)!==-1}));return n.jsxs(y,{direction:"column",display:"inline-flex",alignItems:"stretch",minWidth:"100%",borderColor:g?"primary600":void 0,children:[n.jsx(lt,{availableActions:h,isActive:g,isGrey:u%2===0,isFormDisabled:s,label:c,onClickToggle:l(r),pathToData:[o,r].join("..")}),g&&d.map(({label:C,value:m,children:p})=>n.jsx(Ws,{availableActions:h,childrenForm:p,isFormDisabled:s,label:C,pathToData:[o,r].join(".."),propertyName:m},m))]},r)})})},lt=({availableActions:e=[],isActive:s=!1,isGrey:o=!1,isFormDisabled:t=!1,label:i,onClickToggle:a,pathToData:l})=>{const{formatMessage:r}=_(),{modifiedData:c,onChangeParentCheckbox:d,onChangeSimpleCheckbox:u}=Y(),[g,h]=A.useState(!1),C=k(c,l.split(".."),{}),m=A.useMemo(()=>Object.keys(C).reduce((j,$)=>(j[$]=Me(C[$],"conditions"),j),{}),[C]),{hasAllActionsSelected:p,hasSomeActionsSelected:f}=G(m),b=A.useMemo(()=>ct(e,c,l),[e,c,l]),x=b.some(j=>j.hasConditions);return n.jsxs(dt,{$isActive:s,children:[n.jsxs(De,{height:se,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[n.jsx(Ie,{isCollapsable:!0,isFormDisabled:t,label:ce(i),checkboxName:l,onChange:d,onClick:a,someChecked:f,value:p,isActive:s,children:n.jsx(He,{paddingLeft:2,children:s?n.jsx(as,{}):n.jsx(ls,{})})}),n.jsx(y,{style:{flex:1},children:b.map(({actionId:j,hasSomeActionsSelected:$,isDisplayed:M,...w})=>{if(!M)return n.jsx(pe,{},j);const{hasConditions:S,hasAllActionsSelected:P,isParentCheckbox:W,checkboxName:T,label:K}=w;return W?n.jsxs(Ae,{justifyContent:"center",alignItems:"center",children:[S&&n.jsx(O,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),n.jsx(L,{disabled:t,name:T,"aria-label":r({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${K} ${i}`}),onCheckedChange:D=>{d({target:{name:T,value:!!D}})},checked:$?"indeterminate":P})]},j):n.jsxs(Ae,{justifyContent:"center",alignItems:"center",children:[S&&n.jsx(O,{tag:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),n.jsx(L,{disabled:t,name:T,onCheckedChange:D=>{u({target:{name:T,value:!!D}})},checked:S?"indeterminate":P})]},j)})})]}),n.jsx(O,{bottom:"10px",right:"9px",position:"absolute",children:n.jsxs(B.Root,{open:g,onOpenChange:()=>{h(j=>!j)},children:[n.jsx(B.Trigger,{children:n.jsx(te,{hasConditions:x})}),n.jsx(Ne,{headerBreadCrumbs:[i,"Settings.permissions.conditions.conditions"],actions:b,isFormDisabled:t,onClose:()=>{h(!1)}})]})})]})},ct=(e,s,o)=>e.map(({actionId:t,isDisplayed:i,applyToProperties:a,label:l})=>{if(!i)return{actionId:t,hasSomeActionsSelected:!1,isDisplayed:i};const r=[...o.split(".."),t],c=z(a)?[...r,"properties","enabled"]:r,d=k(s,[...r,"conditions"],null),u={actionId:t,checkboxName:c.join(".."),hasConditions:V(d).some(m=>m),isDisplayed:i,label:l,pathToConditionsObject:r};if(z(a)){const m=k(s,c,!1);return{...u,hasAllActionsSelected:m,hasSomeActionsSelected:m,isParentCheckbox:!1}}const g=k(s,c,null),{hasAllActionsSelected:h,hasSomeActionsSelected:C}=G(g);return{...u,hasAllActionsSelected:h,hasSomeActionsSelected:C,isParentCheckbox:!0}}),le=(e,s)=>`
  ${De} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${s?"2px 2px 0 0":"2px"};
    font-weight: ${e.fontWeights.bold};
  }

  ${He} {
    display: flex;
  }
  ${te} {
    display: block;
  }

  &:focus-within {
    ${()=>le(e,s)}
  }
`,De=v(y)`
  border: 1px solid transparent;
`,dt=v.div`
  display: inline-flex;
  min-width: 100%;
  position: relative;

  ${te} {
    display: none;
  }

  ${({$isActive:e,theme:s})=>e&&le(s,e)}

  &:hover {
    ${({theme:e,$isActive:s})=>le(e,s)}
  }
`,Ae=v(y)`
  width: ${I};
  position: relative;
`,He=v(O)`
  display: none;

  svg {
    width: 1.4rem;
  }

  path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,ut=({actions:e=[],isFormDisabled:s,kind:o})=>{const{formatMessage:t}=_(),{modifiedData:i,onChangeCollectionTypeGlobalActionCheckbox:a}=Y(),l=e.filter(({subjects:c})=>c&&c.length),r=A.useMemo(()=>{const c=l.map(({actionId:h})=>h),d=i[o],u=c.reduce((h,C)=>(Object.keys(d).forEach(m=>{const p=k(d,[m,C]),f={[m]:ue(p)};h[C]?h[C]={...h[C],...f}:h[C]=f}),h),{});return Object.keys(u).reduce((h,C)=>(h[C]=G(u[C]),h),{})},[i,l,o]);return n.jsx(O,{paddingBottom:4,paddingTop:6,style:{paddingLeft:de},children:n.jsx(y,{gap:0,children:l.map(({label:c,actionId:d})=>n.jsxs(y,{shrink:0,width:I,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[n.jsx(E,{variant:"sigma",textColor:"neutral500",children:t({id:`Settings.roles.form.permissions.${c.toLowerCase()}`,defaultMessage:c})}),n.jsx(L,{disabled:s,onCheckedChange:u=>{a(o,d,!!u)},name:d,"aria-label":t({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:t({id:`Settings.roles.form.permissions.${c.toLowerCase()}`,defaultMessage:c})}),checked:k(r,[d,"hasSomeActionsSelected"],!1)?"indeterminate":k(r,[d,"hasAllActionsSelected"],!1)})]},d))})})},ke=({isFormDisabled:e,kind:s,layout:{actions:o,subjects:t}})=>{const i=[...t].sort((a,l)=>a.label.localeCompare(l.label));return n.jsxs(O,{background:"neutral0",children:[n.jsx(ut,{actions:o,kind:s,isFormDisabled:e}),n.jsx(at,{actions:o,isFormDisabled:e,pathToData:s,subjects:i})]})},Se=({layout:e,...s})=>n.jsx(O,{padding:6,background:"neutral0",children:n.jsx(Z.Root,{size:"M",children:e.map(({category:o,categoryId:t,childrenForm:i},a)=>n.jsx(pt,{childrenForm:i,variant:a%2===1?"primary":"secondary",name:o,pathToData:[s.kind,t],...s},o))})}),pt=({childrenForm:e,kind:s,name:o,isFormDisabled:t=!1,variant:i,pathToData:a})=>{const{formatMessage:l}=_(),r=o.split("::").pop()??"";return n.jsxs(Z.Item,{value:o,children:[n.jsx(Z.Header,{variant:i,children:n.jsx(Z.Trigger,{caretPosition:"right",description:`${l({id:"Settings.permissions.category",defaultMessage:r},{category:r})} ${s==="plugins"?"plugin":s}`,children:ce(r)})}),n.jsx(Z.Content,{children:n.jsx(O,{padding:6,children:e.map(({actions:c,subCategoryName:d,subCategoryId:u})=>n.jsx(ht,{actions:c,categoryName:r,isFormDisabled:t,subCategoryName:d,pathToData:[...a,u]},d))})})]})},ht=({actions:e=[],categoryName:s,isFormDisabled:o,subCategoryName:t,pathToData:i})=>{const{modifiedData:a,onChangeParentCheckbox:l,onChangeSimpleCheckbox:r}=Y(),[c,d]=A.useState(!1),{formatMessage:u}=_(),g=k(a,i,{}),h=A.useMemo(()=>Object.keys(g).reduce((x,j)=>(x[j]=ue(g[j]),x),{}),[g]),{hasAllActionsSelected:C,hasSomeActionsSelected:m}=G(h),p=A.useMemo(()=>e.map(x=>{const j=[...i,x.action,"properties","enabled"],$=k(a,j,!1),M=k(a,[...i,x.action,"conditions"],{}),w=V(M).some(S=>S);return{...x,isDisplayed:$,checkboxName:j.join(".."),hasSomeActionsSelected:$,value:$,hasConditions:w,label:x.displayName,actionId:x.action,pathToConditionsObject:[...i,x.action]}}),[e,a,i]),f=k(a,[...i],{}),b=V(Object.entries(f).reduce((x,j)=>{const[$,{conditions:M}]=j;return x[$]=M,x},{})).some(x=>x);return n.jsx(n.Fragment,{children:n.jsxs(O,{children:[n.jsxs(y,{justifyContent:"space-between",alignItems:"center",children:[n.jsx(O,{paddingRight:4,children:n.jsx(E,{variant:"sigma",textColor:"neutral600",children:t})}),n.jsx(gt,{flex:1}),n.jsx(O,{paddingLeft:4,children:n.jsx(L,{name:i.join(".."),disabled:o,onCheckedChange:x=>{l({target:{name:i.join(".."),value:!!x}})},checked:m?"indeterminate":C,children:u({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),n.jsxs(y,{paddingTop:6,paddingBottom:6,children:[n.jsx(he.Root,{gap:2,style:{flex:1},children:p.map(({checkboxName:x,value:j,action:$,displayName:M,hasConditions:w})=>n.jsx(he.Item,{col:3,direction:"column",alignItems:"start",children:n.jsx(ft,{$disabled:o,$hasConditions:w,children:n.jsx(L,{name:x,disabled:o,onCheckedChange:S=>{r({target:{name:x,value:!!S}})},checked:j,children:M})})},$))}),n.jsxs(B.Root,{open:c,onOpenChange:()=>{d(x=>!x)},children:[n.jsx(B.Trigger,{children:n.jsx(te,{hasConditions:b})}),n.jsx(Ne,{headerBreadCrumbs:[s,t],actions:p,isFormDisabled:o,onClose:()=>{d(!1)}})]})]})]})})},gt=v(O)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,ft=v.div`
  position: relative;
  word-break: keep-all;
  ${({$hasConditions:e,$disabled:s,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -0.4rem;
      left: -0.8rem;
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 2rem;
      background: ${s?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,X=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],yt=A.forwardRef(({layout:e,isFormDisabled:s,permissions:o=[]},t)=>{const[{initialData:i,layouts:a,modifiedData:l},r]=A.useReducer(xt,mt,()=>Ct(e,o)),{formatMessage:c}=_();A.useImperativeHandle(t,()=>({getPermissions(){const m=fe(i.collectionTypes,l.collectionTypes),p=fe(i.singleTypes,l.singleTypes),f={...m,...p};let b;return z(f)?b=!1:b=Object.values(f).some((x={})=>Object.values(x).some(j=>U(j,"conditions"))),{permissionsToSend:Vs(l),didUpdateConditions:b}},resetForm(){r({type:"RESET_FORM"})},setFormAfterSubmit(){r({type:"SET_FORM_AFTER_SUBMIT"})}}));const d=(m,p,f,b)=>{r({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:m,propertyName:p,rowName:f,value:b})},u=(m,p,f)=>{r({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:m,actionId:p,value:f})},g=m=>{r({type:"ON_CHANGE_CONDITIONS",conditions:m})},h=A.useCallback(({target:{name:m,value:p}})=>{r({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:m,value:p})},[]),C=A.useCallback(({target:{name:m,value:p}})=>{r({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:m,value:p})},[]);return n.jsx(Hs,{availableConditions:e.conditions,modifiedData:l,onChangeConditions:g,onChangeSimpleCheckbox:h,onChangeParentCheckbox:C,onChangeCollectionTypeLeftActionRowCheckbox:d,onChangeCollectionTypeGlobalActionCheckbox:u,children:n.jsxs(F.Root,{defaultValue:X[0].id,children:[n.jsx(F.List,{"aria-label":c({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:X.map(m=>n.jsx(F.Trigger,{value:m.id,children:c({id:m.labelId,defaultMessage:m.defaultMessage})},m.id))}),n.jsx(F.Content,{value:X[0].id,children:n.jsx(ke,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:s})}),n.jsx(F.Content,{value:X[1].id,children:n.jsx(ke,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:s})}),n.jsx(F.Content,{value:X[2].id,children:n.jsx(Se,{layout:a.plugins,kind:"plugins",isFormDisabled:s})}),n.jsx(F.Content,{value:X[3].id,children:n.jsx(Se,{layout:a.settings,kind:"settings",isFormDisabled:s})})]})})}),mt={initialData:{},modifiedData:{},layouts:{}},xt=(e,s)=>Te(e,o=>{switch(s.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:t,actionId:i,value:a}=s,l=["modifiedData",t];Object.keys(k(e,l)).forEach(r=>{const c=k(e,[...l,r,i],void 0);if(c){let d=q(c,a);if(!a&&d.conditions){const u=q(d.conditions,!1);d={...d,conditions:u}}R(o,[...l,r,i],d)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:t,propertyName:i,rowName:a,value:l}=s;let r=oe(e.modifiedData);const c=t.split(".."),d=k(r,c,{});Object.keys(d).forEach(u=>{if(U(d[u],`properties.${i}`)){const g=k(d,[u,"properties",i,a]),h=[...c,u,"properties",i,a];if(!N(g))R(r,h,l);else{const C=q(g,l);R(r,h,C)}}}),l||(r=Q(r)),R(o,"modifiedData",r);break}case"ON_CHANGE_CONDITIONS":{Object.entries(s.conditions).forEach(t=>{const[i,a]=t;R(o,["modifiedData",...i.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let t=oe(e.modifiedData);R(t,[...s.keys.split("..")],s.value),s.value||(t=Q(t)),R(o,"modifiedData",t);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:t,value:i}=s,a=[...t.split("..")];let l=oe(e.modifiedData);const r=k(l,a,{}),c=q(r,i);R(l,a,c),i||(l=Q(l)),R(o,["modifiedData"],l);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),Ct=(e,s)=>{const{conditions:o,sections:{collectionTypes:t,singleTypes:i,plugins:a,settings:l}}=e,r={collectionTypes:t,singleTypes:i,plugins:je(a,"plugin"),settings:je(l,"category")},c={collectionTypes:be(t,o,s),singleTypes:be(i,o,s),plugins:Ce(r.plugins,o,s),settings:Ce(r.settings,o,s)};return{initialData:c,modifiedData:c,layouts:r}};export{yt as P};
