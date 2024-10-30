import{o as O,bg as _,a5 as I,K as N,a as M,a8 as $,a9 as q,M as H,O as V,p as e,x as f,Y as R,Z as W,ae as w,af as U,ag as Q,bQ as z,ah as K,ai as L,aj as x,T as i,ak as Y,aq as Z,bR as G,as as J,au as X,am as ee,an as se,H as ae,ar as p,F as te,B as ne,at as oe,bS as le}from"./strapi-Ddy60Q00.js";import{u as ie}from"./useAdminRoles-uRNvxyDX-jyjoXyKl.js";import{s as re}from"./selectors--muHmKGe-stsSCaN8.js";const de=({id:s,name:o,description:t,usersCount:d,icons:c,rowIndex:m,canUpdate:u})=>{const{formatMessage:g}=O(),[,r]=c,j=g({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:d});return e.jsxs(L,{"aria-rowindex":m,onClick:u?r.onClick:void 0,children:[e.jsx(p,{maxWidth:"13rem",children:e.jsx(i,{ellipsis:!0,textColor:"neutral800",children:o})}),e.jsx(p,{maxWidth:"25rem",children:e.jsx(i,{ellipsis:!0,textColor:"neutral800",children:t})}),e.jsx(p,{children:e.jsx(i,{textColor:"neutral800",children:j})}),e.jsx(p,{children:e.jsx(te,{justifyContent:"flex-end",onClick:n=>n.stopPropagation(),children:c.map((n,h)=>n?e.jsx(ne,{paddingLeft:h===0?0:1,children:e.jsx(oe,{...n,variant:"ghost"})},n.label):null)})})]},s)},ce=()=>{const{formatMessage:s}=O(),o=_(re),{formatAPIError:t}=I(),{toggleNotification:d}=N(),[c,m]=M.useState(!1),[{query:u}]=$(),{isLoading:g,allowedActions:{canCreate:r,canDelete:j,canRead:n,canUpdate:h}}=q(o.settings?.roles),{roles:T,refetch:A}=ie({filters:u?._q?{name:{$containsi:u._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:g||!n}),E=H(),[{roleToDelete:y},C]=M.useReducer(ge,ue),{post:k}=V(),P=async()=>{try{C({type:"ON_REMOVE_ROLES"}),await k("/admin/roles/batch-delete",{ids:[y]}),await A(),C({type:"RESET_DATA_TO_DELETE"})}catch(a){le(a)&&d({type:"danger",message:t(a)})}},b=()=>E("new"),D=()=>m(a=>!a),S=a=>l=>{l.preventDefault(),l.stopPropagation(),a.usersCount?d({type:"info",message:s({id:"Roles.ListPage.notification.delete-not-allowed"})}):(C({type:"SET_ROLE_TO_DELETE",id:a.id}),D())},F=a=>l=>{l.preventDefault(),l.stopPropagation(),E(`duplicate/${a.id}`)},v=T.length+1,B=6;return g?e.jsx(f.Loading,{}):e.jsxs(f.Main,{children:[e.jsx(f.Title,{children:s({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(R.Header,{primaryAction:r?e.jsx(W,{onClick:b,startIcon:e.jsx(w,{}),size:"S",children:s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:s({id:"global.roles",defaultMessage:"roles"}),subtitle:s({id:"Settings.roles.list.description",defaultMessage:"List of roles"})}),n&&e.jsx(R.Action,{startActions:e.jsx(U,{label:s({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:s({id:"global.roles",defaultMessage:"roles"})})})}),n&&e.jsx(R.Content,{children:e.jsxs(Q,{colCount:B,rowCount:v,footer:r?e.jsx(z,{onClick:b,icon:e.jsx(w,{}),children:s({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[e.jsx(K,{children:e.jsxs(L,{"aria-rowindex":1,children:[e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.name",defaultMessage:"Name"})})}),e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.description",defaultMessage:"Description"})})}),e.jsx(x,{children:e.jsx(i,{variant:"sigma",textColor:"neutral600",children:s({id:"global.users",defaultMessage:"Users"})})}),e.jsx(x,{children:e.jsx(Y,{children:s({id:"global.actions",defaultMessage:"Actions"})})})]})}),e.jsx(Z,{children:T?.map((a,l)=>e.jsx(de,{id:a.id,name:a.name,description:a.description,usersCount:a.usersCount,icons:[r&&{onClick:F(a),label:s({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),children:e.jsx(G,{})},h&&{onClick:()=>E(a.id.toString()),label:s({id:"app.utils.edit",defaultMessage:"Edit"}),children:e.jsx(J,{})},j&&{onClick:S(a),label:s({id:"global.delete",defaultMessage:"Delete"}),children:e.jsx(X,{})}].filter(Boolean),rowIndex:l+2,canUpdate:h},a.id))})]})}),e.jsx(ee.Root,{open:c,onOpenChange:D,children:e.jsx(se,{onConfirm:P})})]})},ue={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},ge=(s,o)=>ae(s,t=>{switch(o.type){case"ON_REMOVE_ROLES":{t.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{t.shouldRefetchData=!0,t.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{t.shouldRefetchData=!1,t.roleToDelete=null,t.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{t.roleToDelete=o.id;break}default:return t}}),fe=()=>{const s=_(o=>o.admin_app.permissions.settings?.roles.read);return e.jsx(f.Protect,{permissions:s,children:e.jsx(ce,{})})};export{ce as ListPage,fe as ProtectedListPage};