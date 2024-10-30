import{s as T,v as b,w as y,bU as $,K as F,o as D,M as N,a as k,N as B,a5 as V,bV as q,bW as G,bX as U,bY as _,p as e,x as p,V as z,W as H,X as O,Y as R,F as u,Z as P,a6 as Q,B as l,T as M,G as g,a0 as d,a1 as W,a2 as X,m as Y,bg as K,bE as S}from"./strapi-Ddy60Q00.js";import{P as Z}from"./Permissions-aSGK8VGG-DWr4PMXv.js";import{f as J}from"./index-BlrZkCRf.js";import"./_baseEach-RPJecHJH.js";const ee=T().shape({name:b().required(y.required.id),description:b().required(y.required.id)}),se=()=>{const{id:s}=$(),{toggleNotification:o}=F(),{formatMessage:r}=D(),E=N(),m=k.useRef(null),{trackUsage:h}=B(),{_unstableFormatAPIError:f,_unstableFormatValidationErrors:x}=V(),{isLoading:C,currentData:j}=q({role:s??""}),{currentData:w,isLoading:v}=G({id:s},{skip:!s,refetchOnMountOrArgChange:!0}),[L]=U(),[A]=_(),I=async(c,t)=>{try{h(s?"willDuplicateRole":"willCreateNewRole");const a=await L(c);if("error"in a){S(a.error)&&a.error.name==="ValidationError"?t.setErrors(x(a.error)):o({type:"danger",message:f(a.error)});return}const{permissionsToSend:n}=m.current?.getPermissions()??{};if(a.data.id&&Array.isArray(n)&&n.length>0){const i=await A({id:a.data.id,permissions:n});if("error"in i){S(i.error)&&i.error.name==="ValidationError"?t.setErrors(x(i.error)):o({type:"danger",message:f(i.error)});return}}o({type:"success",message:r({id:"Settings.roles.created",defaultMessage:"created"})}),E(`../roles/${a.data.id.toString()}`,{replace:!0})}catch{o({type:"danger",message:r({id:"notification.error",defaultMessage:"An error occurred"})})}};return C&&v||!j?e.jsx(p.Loading,{}):e.jsxs(z,{children:[e.jsx(p.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Roles"})}),e.jsx(H,{initialValues:{name:"",description:`${r({id:"Settings.roles.form.created",defaultMessage:"Created"})} ${J(new Date,"PPP")}`},onSubmit:I,validationSchema:ee,validateOnChange:!1,children:({values:c,errors:t,handleReset:a,handleChange:n,isSubmitting:i})=>e.jsx(O,{children:e.jsxs(e.Fragment,{children:[e.jsx(R.Header,{primaryAction:e.jsxs(u,{gap:2,children:[e.jsx(P,{variant:"secondary",onClick:()=>{a(),m.current?.resetForm()},size:"L",children:r({id:"app.components.Button.reset",defaultMessage:"Reset"})}),e.jsx(P,{type:"submit",loading:i,size:"L",children:r({id:"global.save",defaultMessage:"Save"})})]}),title:r({id:"Settings.roles.create.title",defaultMessage:"Create a role"}),subtitle:r({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:e.jsx(Q,{})}),e.jsx(R.Content,{children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsx(l,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:e.jsxs(u,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsxs(u,{justifyContent:"space-between",children:[e.jsxs(l,{children:[e.jsx(l,{children:e.jsx(M,{fontWeight:"bold",children:r({id:"global.details",defaultMessage:"Details"})})}),e.jsx(l,{children:e.jsx(M,{variant:"pi",textColor:"neutral600",children:r({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),e.jsx(re,{children:r({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:0})})]}),e.jsxs(g.Root,{gap:4,children:[e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{name:"name",error:t.name&&r({id:t.name}),required:!0,children:[e.jsx(d.Label,{children:r({id:"global.name",defaultMessage:"Name"})}),e.jsx(W,{onChange:n,value:c.name}),e.jsx(d.Error,{})]})}),e.jsx(g.Item,{col:6,direction:"column",alignItems:"stretch",children:e.jsxs(d.Root,{name:"description",error:t.description&&r({id:t.description}),children:[e.jsx(d.Label,{children:r({id:"global.description",defaultMessage:"Description"})}),e.jsx(X,{onChange:n,value:c.description})]})})]})]})}),e.jsx(l,{shadow:"filterShadow",hasRadius:!0,children:e.jsx(Z,{isFormDisabled:!1,ref:m,permissions:w,layout:j})})]})})]})})})]})},re=Y.div`
  border: 1px solid ${({theme:s})=>s.colors.primary200};
  background: ${({theme:s})=>s.colors.primary100};
  padding: ${({theme:s})=>`${s.spaces[2]} ${s.spaces[4]}`};
  color: ${({theme:s})=>s.colors.primary600};
  border-radius: ${({theme:s})=>s.borderRadius};
  font-size: 1.2rem;
  font-weight: bold;
`,ne=()=>{const s=K(o=>o.admin_app.permissions.settings?.roles.create);return e.jsx(p.Protect,{permissions:s,children:e.jsx(se,{})})};export{se as CreatePage,ne as ProtectedCreatePage};