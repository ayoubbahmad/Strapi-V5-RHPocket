import{o as N,K as R,bg as L,a9 as F,M as v,N as I,a5 as V,a as g,co as D,p as e,x as i,Y as T,ac as p,bK as y,ae as x,al as b,cP as h}from"./strapi-Ddy60Q00.js";import{u as _}from"./useOnce-GJ2Ta2mZ-Co_YhB5R.js";import{d as U,e as B}from"./transferTokens-v8tNpI_l-DbDYF8Rx.js";import{T as o}from"./constants-EoEtSd4i-Q2dfXdfa.js";import{T as H}from"./Table-ARSVxoYe-BsUUgWTA.js";const K=[{name:"name",label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0},{name:"description",label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1},{name:"createdAt",label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1},{name:"lastUsedAt",label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}],Y=()=>{const{formatMessage:s}=N(),{toggleNotification:a}=R(),A=L(n=>n.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:j,allowedActions:{canCreate:d,canDelete:S,canUpdate:w,canRead:c}}=F(A),u=v(),{trackUsage:r}=I(),{_unstableFormatAPIError:l}=V();g.useEffect(()=>{u({search:D.stringify({sort:"name:ASC"},{encode:!1})})},[u]),_(()=>{r("willAccessTokenList",{tokenType:o})});const M=K.map(n=>({...n,label:s(n.label)})),{data:t=[],isLoading:E,error:f}=U(void 0,{skip:!c});g.useEffect(()=>{t&&r("didAccessTokenList",{number:t.length,tokenType:o})},[r,t]),g.useEffect(()=>{f&&a({type:"danger",message:l(f)})},[f,l,a]);const[P]=B(),C=async n=>{try{const k=await P(n);"error"in k&&a({type:"danger",message:l(k.error)})}catch{a({type:"danger",message:s({id:"notification.error",defaultMessage:"An error occured"})})}},m=E||j;return e.jsxs(e.Fragment,{children:[e.jsx(i.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Transfer Tokens"})}),e.jsx(T.Header,{title:s({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:s({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:d?e.jsx(p,{role:"button",tag:y,"data-testid":"create-transfer-token-button",startIcon:e.jsx(x,{}),size:"S",onClick:()=>r("willAddTokenFromList",{tokenType:o}),to:"/settings/transfer-tokens/create",children:s({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),c?e.jsx(i.Main,{"aria-busy":m,children:e.jsxs(T.Content,{children:[t.length>0&&e.jsx(H,{permissions:{canRead:c,canDelete:S,canUpdate:w},headers:M,isLoading:m,onConfirmDelete:C,tokens:t,tokenType:o}),d&&t.length===0?e.jsx(b,{action:e.jsx(p,{tag:y,variant:"secondary",startIcon:e.jsx(x,{}),to:"/settings/transfer-tokens/create",children:s({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})}),icon:e.jsx(h,{width:"16rem"}),content:s({id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"})}):null,!d&&t.length===0?e.jsx(b,{icon:e.jsx(h,{width:"16rem"}),content:s({id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don’t have any content yet..."})}):null]})}):e.jsx(i.NoPermissions,{})]})},Q=()=>{const s=L(a=>a.admin_app.permissions.settings?.["transfer-tokens"].main);return e.jsx(i.Protect,{permissions:s,children:e.jsx(Y,{})})};export{Y as ListView,Q as ProtectedListView};