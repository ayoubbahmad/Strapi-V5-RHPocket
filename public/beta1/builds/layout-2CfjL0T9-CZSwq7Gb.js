import{m as P,a3 as H,aX as G,o as O,cQ as Q,a as m,p as e,x as k,ex as x,bL as D,Y,dm as K,B as M,F as y,b0 as U,T as _,at as E,au as V,eX as A,ee as q,cN as X,dl as Z,a8 as J,gC as ee,aa as te,ab as se,dq as ne,dr as ae,ds as ie,dt as re,ad as oe,co as v,K as le,dn as ce,a7 as de,a5 as ue,d0 as pe,gZ as ge,h2 as he,h3 as fe,e1 as me,eO as ye,gG as xe}from"./strapi-Ddy60Q00.js";import{C as Te}from"./CardDragPreview-DOxamsuj-CZo-jamN.js";import{F as je,L as Le,D as be}from"./Relations-BTcf5xaw-Bj4YC1B1.js";import{u as N,a as Se}from"./hooks-E5u1mcgM-ysADSLIC.js";import{I as S}from"./useDragAndDrop-DdHgKsqq-BL0loorR.js";import{u as Ce}from"./useDragLayer-Ce9_GfxR.js";import"./relations-C0w0GcXi-DJ9hxzkR.js";import"./getEmptyImage-CjqolaH3.js";function Ie(s,a,n){if(!s||!a||!n)return{display:"none"};const{x:t,y:p}=n;return{transform:`translate(${t}px, ${p}px)`}}const Me=({renderItem:s})=>{const{itemType:a,isDragging:n,item:t,initialOffset:p,currentOffset:l,mouseOffset:g}=Ce(i=>({item:i.getItem(),itemType:i.getItemType(),initialOffset:i.getInitialSourceClientOffset(),currentOffset:i.getSourceClientOffset(),isDragging:i.isDragging(),mouseOffset:i.getClientOffset()}));return n?e.jsx(M,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%",children:e.jsx(M,{style:Ie(p,l,g),children:s({type:a,item:t})})}):null},we=({displayedValue:s})=>e.jsxs(y,{background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:3,padding:3,width:"30rem",children:[e.jsx(De,{type:"button",children:e.jsxs(y,{gap:6,children:[e.jsx(ke,{alignItems:"center",justifyContent:"center",background:"neutral200",height:"3.2rem",width:"3.2rem",children:e.jsx(U,{})}),e.jsx(y,{maxWidth:"15rem",children:e.jsx(_,{textColor:"neutral700",ellipsis:!0,children:s})})]})}),e.jsxs(y,{gap:2,children:[e.jsx(E,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(V,{})}),e.jsx(E,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(A,{})})]})]}),ke=P(y)`
  border-radius: 50%;

  svg {
    height: 0.6rem;
    width: 1.1rem;
    > path {
      fill: ${({theme:s})=>s.colors.neutral600};
    }
  }
`,De=P.button`
  border: none;
  background: transparent;
  display: block;
  width: 100%;
  text-align: unset;
  padding: 0;
`,Ee=({status:s,displayedValue:a,width:n})=>e.jsx(M,{style:{width:n},children:e.jsxs(y,{paddingTop:2,paddingBottom:2,paddingLeft:2,paddingRight:4,hasRadius:!0,borderWidth:1,background:"neutral0",borderColor:"neutral200",justifyContent:"space-between",gap:4,children:[e.jsxs(je,{gap:1,children:[e.jsx(E,{withTooltip:!1,label:"",variant:"ghost",children:e.jsx(A,{})}),e.jsxs(y,{width:"100%",minWidth:0,justifyContent:"space-between",children:[e.jsx(M,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4,children:e.jsx(Le,{href:"",children:e.jsx(_,{textColor:"primary600",ellipsis:!0,children:a})})}),s?e.jsx(q,{status:s}):null]})]}),e.jsx(be,{type:"button",children:e.jsx(X,{width:"12px"})})]})}),ve=P(Z)`
  div {
    width: inherit;
    span:nth-child(2) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: inherit;
    }
  }
`,Ne=()=>{const[s,a]=m.useState(""),[{query:n}]=J(),{formatMessage:t,locale:p}=O(),l=N(o=>o["content-manager"].app.collectionTypeLinks),g=N(o=>o["content-manager"].app.singleTypeLinks),{schemas:i}=ee(),{startsWith:r}=te(p,{sensitivity:"base"}),c=se(p,{sensitivity:"base"}),T=m.useMemo(()=>[{id:"collectionTypes",title:t({id:x("components.LeftMenu.collection-types"),defaultMessage:"Collection Types"}),searchable:!0,links:l},{id:"singleTypes",title:t({id:x("components.LeftMenu.single-types"),defaultMessage:"Single Types"}),searchable:!0,links:g}].map(o=>({...o,links:o.links.filter(d=>r(d.title,s)).sort((d,j)=>c.compare(d.title,j.title)).map(d=>({...d,title:t({id:d.title,defaultMessage:d.title})}))})),[l,s,g,r,t,c]),u=()=>{a("")},h=({target:{value:o}})=>{a(o)},C=t({id:x("header.name"),defaultMessage:"Content Manager"}),w=o=>{const j=!!i.find(L=>L.uid===o.uid)?.pluginOptions?.i18n?.localized;if(n.plugins&&"i18n"in n.plugins){const{i18n:L,...I}=n.plugins;return j?{i18n:L,...I}:I}return n.plugins};return e.jsxs(ne,{"aria-label":C,children:[e.jsx(ae,{label:C,searchable:!0,value:s,onChange:h,onClear:u,searchLabel:t({id:"content-manager.components.LeftMenu.Search.label",defaultMessage:"Search for a content type"})}),e.jsx(ie,{children:T.map(o=>e.jsx(re,{label:o.title,badgeLabel:o.links.length.toString(),children:o.links.map(d=>e.jsx(ve,{tag:oe,to:{pathname:d.to,search:v.stringify({...v.parse(d.search??""),plugins:w(d)})},width:"100%",children:d.title},d.uid))},o.id))})]})},{MUTATE_COLLECTION_TYPES_LINKS:Pe,MUTATE_SINGLE_TYPES_LINKS:Oe}=xe,Fe=()=>{const{toggleNotification:s}=le(),a=Se(),n=ce("useContentManagerInitData",u=>u.runHookWaterfall),{notifyStatus:t}=de(),{formatMessage:p}=O(),{_unstableFormatAPIError:l}=ue(x),g=pe("useContentManagerInitData",u=>u.checkUserHasPermissions),i=N(u=>u["content-manager"].app),r=ge(void 0,{refetchOnMountOrArgChange:!0});m.useEffect(()=>{r.data&&t(p({id:x("App.schemas.data-loaded"),defaultMessage:"The schemas have been successfully loaded."}))},[p,r.data,t]),m.useEffect(()=>{r.error&&s({type:"danger",message:l(r.error)})},[l,r.error,s]);const c=he();m.useEffect(()=>{c.error&&s({type:"danger",message:l(c.error)})},[l,c.error,s]);const T=async(u,h,C,w)=>{const{collectionType:o,singleType:d}=h.reduce((f,b)=>(f[b.kind].push(b),f),{collectionType:[],singleType:[]}),j=F(o,"collectionTypes",w),L=F(d,"singleTypes"),I=await Promise.all(j.map(({permissions:f})=>g(f))),R=j.filter((f,b)=>I[b].length>0),$=await Promise.all(L.map(({permissions:f})=>g(f))),z=L.filter((f,b)=>$[b].length>0),{ctLinks:B}=n(Pe,{ctLinks:R,models:h}),{stLinks:W}=n(Oe,{stLinks:z,models:h});a(fe({authorizedCollectionTypeLinks:B,authorizedSingleTypeLinks:W,components:u,contentTypeSchemas:h,fieldSizes:C}))};return m.useEffect(()=>{r.data&&c.data&&T(r.data.components,r.data.contentTypes,r.data.fieldSizes,c.data)},[r.data,c.data]),{...i}},F=(s,a,n=[])=>s.filter(t=>t.isDisplayed).map(t=>{const p=[{action:"plugin::content-manager.explorer.create",subject:t.uid},{action:"plugin::content-manager.explorer.read",subject:t.uid}],l=[{action:"plugin::content-manager.explorer.read",subject:t.uid}],g=a==="collectionTypes"?p:l,i=n.find(({uid:c})=>c===t.uid);let r=null;if(i){const c={page:1,pageSize:i.settings.pageSize,sort:`${i.settings.defaultSortBy}:${i.settings.defaultSortOrder}`};r=v.stringify(c,{encode:!1})}return{permissions:g,search:r,kind:t.kind,title:t.info.displayName,to:`/content-manager/${t.kind==="collectionType"?me:ye}/${t.uid}`,uid:t.uid,name:t.uid,isDisplayed:t.isDisplayed}}),Qe=()=>{const s=H("/content-manager/:kind/:uid/*"),{isLoading:a,collectionTypeLinks:n,models:t,singleTypeLinks:p}=Fe(),l=[...n,...p].sort((u,h)=>u.title.localeCompare(h.title)),{pathname:g}=G(),{formatMessage:i}=O(),r=Q("Layout",u=>u.startSection),c=m.useRef(r);if(m.useEffect(()=>{c.current&&c.current("contentManager")},[]),a)return e.jsxs(e.Fragment,{children:[e.jsx(k.Title,{children:i({id:x("plugin.name"),defaultMessage:"Content Manager"})}),e.jsx(k.Loading,{})]});const T=t.filter(({isDisplayed:u})=>u);return l.length===0&&T.length>0&&g!=="/content-manager/403"?e.jsx(D,{to:"/403"}):T.length===0&&g!=="/no-content-types"?e.jsx(D,{to:"/no-content-types"}):!s&&l.length>0?e.jsx(D,{to:{pathname:l[0].to,search:l[0].search??""},replace:!0}):e.jsxs(e.Fragment,{children:[e.jsx(k.Title,{children:i({id:x("plugin.name"),defaultMessage:"Content Manager"})}),e.jsxs(Y.Root,{sideNav:e.jsx(Ne,{}),children:[e.jsx(Me,{renderItem:_e}),e.jsx(K,{})]})]})};function _e({type:s,item:a}){if(!s||s&&typeof s!="string")return null;const[n]=s.split("_");switch(n){case S.EDIT_FIELD:case S.FIELD:return e.jsx(Te,{label:a.label});case S.COMPONENT:case S.DYNAMIC_ZONE:return e.jsx(we,{displayedValue:a.displayedValue});case S.RELATION:return e.jsx(Ee,{...a});default:return null}}export{Qe as Layout};