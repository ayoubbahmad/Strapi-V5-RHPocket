import{o as _,M as H,N as P,a as f,hY as $,hV as G,hZ as v,a9 as K,h_ as Q,p as e,x as y,ac as U,ae as j,ad as V,bi as o,bQ as Y,T as u,F as z,at as C,bK as Z,as as q,au as J,am as X,an as ee,h$ as m}from"./strapi-Ddy60Q00.js";import{u as te,H as se,R as oe}from"./Layout-BJOxxAeM-CMMrSEQZ.js";import"./useDragLayer-Ce9_GfxR.js";const ie=()=>{const{formatMessage:s}=_(),l=H(),{trackUsage:M}=P(),[d,c]=f.useState(null),[S,w]=f.useState(!1),{data:b,isLoading:T}=$(),{meta:i,workflows:g,isLoading:r,delete:L}=te(),{getFeature:R,isLoading:p}=G(),D=v(t=>t.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:h,canRead:E,canUpdate:W,canDelete:F}}=K(D),a=R("review-workflows")?.[Q],I=t=>{c(t)},N=()=>{c(null)},A=async()=>{d&&(await L(d),c(null))},x=t=>{t.preventDefault(),a&&i&&i?.workflowCount>=parseInt(a,10)?(t.preventDefault(),w(!0)):(l("create"),M("willCreateWorkflow"))};f.useEffect(()=>{!r&&!p&&a&&i&&i?.workflowCount>parseInt(a,10)&&w(!0)},[p,r,i,i?.workflowCount,a]);const k=[{label:s({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"}),name:"name"},{label:s({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"}),name:"stages"},{label:s({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"}),name:"content-types"}];if(r||T)return e.jsx(y.Loading,{});const B=Object.values(b??{}).reduce((t,n)=>(t.push(...n),t),[]);return e.jsxs(e.Fragment,{children:[e.jsx(se,{primaryAction:h?e.jsx(U,{startIcon:e.jsx(j,{}),size:"S",tag:V,to:"create",onClick:x,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,subtitle:s({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:s({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),e.jsxs(oe,{children:[e.jsx(o.Root,{isLoading:r,rows:g,footer:h?e.jsx(Y,{icon:e.jsx(j,{}),onClick:x,children:s({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}):null,headers:k,children:e.jsxs(o.Content,{children:[e.jsx(o.Head,{children:k.map(t=>e.jsx(o.HeaderCell,{...t},t.name))}),e.jsx(o.Body,{children:g.map(t=>e.jsxs(o.Row,{onClick:()=>{l(`${t.id}`)},children:[e.jsx(o.Cell,{width:"25rem",children:e.jsx(u,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:t.name})}),e.jsx(o.Cell,{children:e.jsx(u,{textColor:"neutral800",children:t.stages.length})}),e.jsx(o.Cell,{children:e.jsx(u,{textColor:"neutral800",children:t.contentTypes.map(n=>B.find(O=>O.uid===n)?.info.displayName??"").join(", ")})}),e.jsx(o.Cell,{children:e.jsxs(z,{alignItems:"center",justifyContent:"end",children:[E||W?e.jsx(C,{tag:Z,to:t.id.toString(),label:s({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:t.name}),variant:"ghost",children:e.jsx(q,{})}):null,g.length>1&&F?e.jsx(C,{withTooltip:!1,label:s({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),variant:"ghost",onClick:n=>{n.stopPropagation(),I(String(t.id))},children:e.jsx(J,{})}):null]})})]},t.id))})]})}),e.jsx(X.Root,{open:!!d,onOpenChange:N,children:e.jsx(ee,{onConfirm:A,children:s({id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"})})}),e.jsxs(m.Root,{open:S,onOpenChange:()=>w(!1),children:[e.jsx(m.Title,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You’ve reached the limit of workflows in your plan"})}),e.jsx(m.Body,{children:s({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},ce=()=>{const s=v(l=>l.admin_app.permissions.settings?.["review-workflows"]?.main);return e.jsx(y.Protect,{permissions:s,children:e.jsx(ie,{})})};export{ce as ProtectedListPage,ie as ReviewWorkflowsListView};
