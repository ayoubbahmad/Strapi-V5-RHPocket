function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["MagicLinkEE-vQcgXndx-NL5Uk-ZE.js","strapi-Ddy60Q00.js","strapi-COJtagOC.css","SelectRoles-Kzqv2-TI-DCwbN9Cb.js","useAdminRoles-uRNvxyDX-jyjoXyKl.js","CreateActionEE-X2nnG2dm-DR676whO.js","isNil-CE68rpqV.js","ListPage-LIn0aEKt-_qoWv1r4.js","useLicenseLimitNotification-Qx_rSpUQ-iexhPsfO.js","users-a4KTyEyc-MOwOr-tf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as g,o as z,p as e,Z as R,cn as re,s as ie,v as B,w as f,bz as ne,a5 as Q,bg as W,a9 as le,M as oe,K as X,aX as de,bl as ce,co as ue,cp as M,cq as E,cr as me,x as v,Y as V,af as ge,bh as I,bi as n,T as A,F as P,at as $,ad as pe,as as he,au as xe,bj as N,am as fe,an as be,cs as je,ct as Me,aw as b,ax as Ee,ay as Ae,aA as Se,B as T,G as j,aB as Y,bE as ye}from"./strapi-Ddy60Q00.js";import{g as G}from"./users-a4KTyEyc-MOwOr-tf.js";import{M as Ce,S as _e}from"./SelectRoles-Kzqv2-TI-DCwbN9Cb.js";import"./useAdminRoles-uRNvxyDX-jyjoXyKl.js";const Le=g.forwardRef((a,l)=>{const{formatMessage:p}=z();return e.jsx(R,{ref:l,startIcon:e.jsx(re,{}),size:"S",...a,children:p({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})})}),Ie=({onToggle:a})=>{const[l,p]=g.useState("create"),[F,k]=g.useState(""),{formatMessage:t}=z(),{toggleNotification:m}=X(),{_unstableFormatAPIError:w,_unstableFormatValidationErrors:S}=Q(),c=M(Te,async()=>(await E(()=>import("./ModalForm-Gh2063zZ-CamjQBT3.js"),__vite__mapDeps([]))).ROLE_LAYOUT,{combine(o,d){return[...o,...d]},defaultValue:[]}),D=M(K,async()=>(await E(()=>import("./ModalForm-Gh2063zZ-CamjQBT3.js"),__vite__mapDeps([]))).FORM_INITIAL_VALUES,{combine(o,d){return{...o,...d}},defaultValue:K}),y=M(Ce,async()=>(await E(()=>import("./MagicLinkEE-vQcgXndx-NL5Uk-ZE.js"),__vite__mapDeps([0,1,2,3,4]))).MagicLinkEE),[h]=Me(),C=t({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),U=async(o,{setErrors:d})=>{const r=await h({...o,roles:o.roles??[]});"data"in r?(r.data.registrationToken&&k(r.data.registrationToken),O()):(m({type:"danger",message:w(r.error)}),ye(r.error)&&r.error.name==="ValidationError"&&d(S(r.error)))},O=()=>{L?p(L):a()},{buttonSubmitLabel:_,isDisabled:x,next:L}=Pe[l];return y?e.jsx(b.Root,{defaultOpen:!0,onOpenChange:a,children:e.jsxs(b.Content,{children:[e.jsx(b.Header,{children:e.jsx(Ee,{label:C,children:e.jsx(Ae,{isCurrent:!0,children:C})})}),e.jsx(Se,{method:l==="create"?"POST":"PUT",initialValues:D??{},onSubmit:U,validationSchema:ve,children:({isSubmitting:o})=>e.jsxs(e.Fragment,{children:[e.jsx(b.Body,{children:e.jsxs(P,{direction:"column",alignItems:"stretch",gap:6,children:[l!=="create"&&e.jsx(y,{registrationToken:F}),e.jsxs(T,{children:[e.jsx(A,{variant:"beta",tag:"h2",children:t({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})}),e.jsx(T,{paddingTop:4,children:e.jsx(P,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(j.Root,{gap:5,children:Re.map(d=>d.map(({size:r,...i})=>e.jsx(j.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Y,{...i,disabled:x,label:t(i.label),placeholder:t(i.placeholder)})},i.name)))})})})]}),e.jsxs(T,{children:[e.jsx(A,{variant:"beta",tag:"h2",children:t({id:"global.roles",defaultMessage:"User's role"})}),e.jsx(T,{paddingTop:4,children:e.jsxs(j.Root,{gap:5,children:[e.jsx(j.Item,{col:6,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(_e,{disabled:x})}),c.map(d=>d.map(({size:r,...i})=>e.jsx(j.Item,{col:r,direction:"column",alignItems:"stretch",children:e.jsx(Y,{...i,disabled:x,label:t(i.label),placeholder:i.placeholder?t(i.placeholder):void 0,hint:i.hint?t(i.hint):void 0})},i.name)))]})})]})]})}),e.jsxs(b.Footer,{children:[e.jsx(R,{variant:"tertiary",onClick:a,type:"button",children:t({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),l==="create"?e.jsx(R,{type:"submit",loading:o,children:t(_)}):e.jsx(R,{type:"button",loading:o,onClick:a,children:t(_)})]})]})})]})}):null},K={firstname:"",lastname:"",email:"",roles:[]},Te=[],Re=[[{label:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"string",size:6,required:!0},{label:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"string",size:6}],[{label:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:6,required:!0}]],ve=ie().shape({firstname:B().trim().required({id:f.required.id,defaultMessage:"This field is required"}).nullable(),lastname:B(),email:B().email(f.email).required({id:f.required.id,defaultMessage:"This field is required"}).nullable(),roles:ne().min(1,{id:f.required.id,defaultMessage:"This field is required"}).required({id:f.required.id,defaultMessage:"This field is required"})}),Pe={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}},Fe=()=>{const{_unstableFormatAPIError:a}=Q(),[l,p]=g.useState(!1),F=W(s=>s.admin_app.permissions),{allowedActions:{canCreate:k,canDelete:t,canRead:m}}=le(F.settings?.users),w=oe(),{toggleNotification:S}=X(),{formatMessage:c}=z(),{search:D}=de(),[y,h]=g.useState(!1),[C,U]=g.useState([]),{data:O,isError:_,isLoading:x}=ce(ue.parse(D,{ignoreQueryPrefix:!0})),{pagination:L,users:o=[]}=O??{},d=M(Le,async()=>(await E(()=>import("./CreateActionEE-X2nnG2dm-DR676whO.js"),__vite__mapDeps([5,1,2,6]))).CreateActionEE),r=ke.map(s=>({...s,label:c(s.label)})),i=c({id:"global.users",defaultMessage:"Users"}),H=()=>{p(s=>!s)},[Z]=me(),J=async s=>{try{const u=await Z({ids:s});"error"in u&&S({type:"danger",message:a(u.error)})}catch{S({type:"danger",message:c({id:"global.error",defaultMessage:"An error occurred"})})}},ee=s=>()=>{m&&w(s.toString())},se=s=>async()=>{U([s]),h(!0)},ae=async()=>{await J(C),h(!1)};return d?_?e.jsx(v.Error,{}):e.jsxs(v.Main,{"aria-busy":x,children:[e.jsx(v.Title,{children:c({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Users"})}),e.jsx(V.Header,{primaryAction:k&&e.jsx(d,{onClick:H}),title:i,subtitle:c({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),e.jsx(V.Action,{startActions:e.jsxs(e.Fragment,{children:[e.jsx(ge,{label:c({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:i})}),e.jsxs(I.Root,{options:we,children:[e.jsx(I.Trigger,{}),e.jsx(I.Popover,{}),e.jsx(I.List,{})]})]})}),e.jsxs(V.Content,{children:[e.jsxs(n.Root,{rows:o,headers:r,children:[e.jsx(n.ActionBar,{}),e.jsxs(n.Content,{children:[e.jsxs(n.Head,{children:[t?e.jsx(n.HeaderCheckboxCell,{}):null,r.map(s=>e.jsx(n.HeaderCell,{...s},s.name))]}),e.jsx(n.Empty,{}),e.jsx(n.Loading,{}),e.jsx(n.Body,{children:o.map(s=>e.jsxs(n.Row,{onClick:ee(s.id),cursor:m?"pointer":"default",children:[t?e.jsx(n.CheckboxCell,{id:s.id}):null,r.map(({cellFormatter:u,name:q,...te})=>e.jsx(n.Cell,{children:typeof u=="function"?u(s,{name:q,...te}):e.jsx(A,{textColor:"neutral800",children:s[q]||"-"})},q)),m||t?e.jsx(n.Cell,{onClick:u=>u.stopPropagation(),children:e.jsxs(P,{justifyContent:"end",children:[m?e.jsx($,{tag:pe,to:s.id.toString(),label:c({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:G(s)}),variant:"ghost",children:e.jsx(he,{})}):null,t?e.jsx($,{onClick:se(s.id),label:c({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:G(s)}),variant:"ghost",children:e.jsx(xe,{})}):null]})}):null]},s.id))})]})]}),e.jsxs(N.Root,{...L,children:[e.jsx(N.PageSize,{}),e.jsx(N.Links,{})]})]}),l&&e.jsx(Ie,{onToggle:H}),e.jsx(fe.Root,{open:y,onOpenChange:h,children:e.jsx(be,{onConfirm:ae})})]}):null},ke=[{name:"firstname",label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0},{name:"lastname",label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0},{name:"email",label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0},{name:"roles",label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1,cellFormatter({roles:a}){return e.jsx(A,{textColor:"neutral800",children:a.map(l=>l.name).join(`,
`)})}},{name:"username",label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0},{name:"isActive",label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1,cellFormatter({isActive:a}){return e.jsx(P,{children:e.jsx(je,{size:"S",borderWidth:0,background:"transparent",color:"neutral800",variant:a?"success":"danger",children:e.jsx(A,{children:a?"Active":"Inactive"})})})}}],we=[{name:"firstname",label:"Firstname",type:"string"},{name:"lastname",label:"Lastname",type:"string"},{name:"email",label:"Email",type:"email"},{name:"username",label:"Username",type:"string"},{name:"isActive",label:"Active user",type:"boolean"}],De=()=>{const a=M(Fe,async()=>(await E(()=>import("./ListPage-LIn0aEKt-_qoWv1r4.js"),__vite__mapDeps([7,1,2,8,6,9,3,4]))).UserListPageEE);return a?e.jsx(a,{}):null},Ve=()=>{const a=W(l=>l.admin_app.permissions.settings?.users.read);return e.jsx(v.Protect,{permissions:a,children:e.jsx(De,{})})};export{De as ListPage,Fe as ListPageCE,Ve as ProtectedListPage};