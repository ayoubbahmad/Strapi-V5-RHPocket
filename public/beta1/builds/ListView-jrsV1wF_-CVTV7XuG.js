import{o as I,K as C,bg as w,a9 as N,M as D,N as V,cQ as F,a5 as R,a as o,co as _,p as e,x as d,Y as T,ac as A,bK as h,ae as y,al as x,cP as S}from"./strapi-Ddy60Q00.js";import{u as v}from"./useOnce-GJ2Ta2mZ-Co_YhB5R.js";import{u as U,a as B}from"./apiTokens-GQe-GqwZ-C6xF2EWK.js";import{A as r}from"./constants-EoEtSd4i-Q2dfXdfa.js";import{T as H}from"./Table-ARSVxoYe-BsUUgWTA.js";const K=[{name:"name",label:{id:"Settings.apiTokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0},{name:"description",label:{id:"Settings.apiTokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1},{name:"createdAt",label:{id:"Settings.apiTokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1},{name:"lastUsedAt",label:{id:"Settings.apiTokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}],Y=()=>{const{formatMessage:t}=I(),{toggleNotification:a}=C(),b=w(s=>s.admin_app.permissions.settings?.["api-tokens"]),{allowedActions:{canRead:u,canCreate:c,canDelete:L,canUpdate:P}}=N(b),p=D(),{trackUsage:i}=V(),m=F("ListView",s=>s.startSection),{_unstableFormatAPIError:l}=R();o.useEffect(()=>{m("apiTokens")},[m]),o.useEffect(()=>{p({search:_.stringify({sort:"name:ASC"},{encode:!1})})},[p]);const j=K.map(s=>({...s,label:t(s.label)}));v(()=>{i("willAccessTokenList",{tokenType:r})});const{data:n=[],isLoading:f,error:g}=U();o.useEffect(()=>{g&&a({type:"danger",message:l(g)})},[g,l,a]),o.useEffect(()=>{i("didAccessTokenList",{number:n.length,tokenType:r})},[n,i]);const[M]=B(),E=async s=>{try{const k=await M(s);if("error"in k){a({type:"danger",message:l(k.error)});return}i("didDeleteToken")}catch{a({type:"danger",message:t({id:"notification.error",defaultMessage:"Something went wrong"})})}};return e.jsxs(e.Fragment,{children:[e.jsx(d.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"API Tokens"})}),e.jsx(T.Header,{title:t({id:"Settings.apiTokens.title",defaultMessage:"API Tokens"}),subtitle:t({id:"Settings.apiTokens.description",defaultMessage:"List of generated tokens to consume the API"}),primaryAction:c&&e.jsx(A,{tag:h,"data-testid":"create-api-token-button",startIcon:e.jsx(y,{}),size:"S",onClick:()=>i("willAddTokenFromList",{tokenType:r}),to:"/settings/api-tokens/create",children:t({id:"Settings.apiTokens.create",defaultMessage:"Create new API Token"})})}),u?e.jsx(d.Main,{"aria-busy":f,children:e.jsxs(T.Content,{children:[n.length>0&&e.jsx(H,{permissions:{canRead:u,canDelete:L,canUpdate:P},headers:j,isLoading:f,onConfirmDelete:E,tokens:n,tokenType:r}),c&&n.length===0?e.jsx(x,{icon:e.jsx(S,{width:"16rem"}),content:t({id:"Settings.apiTokens.addFirstToken",defaultMessage:"Add your first API Token"}),action:e.jsx(A,{tag:h,variant:"secondary",startIcon:e.jsx(y,{}),to:"/settings/api-tokens/create",children:t({id:"Settings.apiTokens.addNewToken",defaultMessage:"Add new API Token"})})}):null,!c&&n.length===0?e.jsx(x,{icon:e.jsx(S,{width:"16rem"}),content:t({id:"Settings.apiTokens.emptyStateLayout",defaultMessage:"You don’t have any content yet..."})}):null]})}):e.jsx(d.NoPermissions,{})]})},J=()=>{const t=w(a=>a.admin_app.permissions.settings?.["api-tokens"].main);return e.jsx(d.Protect,{permissions:t,children:e.jsx(Y,{})})};export{Y as ListView,J as ProtectedListView};
