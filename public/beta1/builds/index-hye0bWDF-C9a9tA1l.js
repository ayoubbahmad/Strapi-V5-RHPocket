import{P as a,s as F,av as U,w as l,v as i,q as n,o as D,u as oe,a as T,K as le,O as ue,a5 as ce,ab as pe,a9 as he,y as ae,a4 as me,U as be,p as e,x as k,ag as ge,ah as fe,ai as G,aj as E,T as M,ak as ve,aq as xe,ar as z,at as je,as as ye,J as Pe,aw as L,ax as qe,ay as Me,W as Le,X as we,F as Re,G as J,Z as K,a0 as y,az as Te,a1 as ke}from"./strapi-Ddy60Q00.js";import{u as Ce,L as I}from"./index-hoTsgrwy-BfJxOAzF-CMuE5GEN.js";const H=({description:r,disabled:v,intlLabel:m,error:u,name:c,onChange:x,placeholder:t,providerToEditName:b,type:h,value:o})=>{const{formatMessage:d}=D(),g=c==="noName"?`${window.strapi.backendURL}/api/connect/${b}/callback`:o,j=d({id:m.id,defaultMessage:m.defaultMessage},{provider:b,...m.values}),p=r?d({id:r.id,defaultMessage:r.defaultMessage},{provider:b,...r.values}):"";if(h==="bool")return e.jsxs(y.Root,{hint:p,name:c,children:[e.jsx(y.Label,{children:j}),e.jsx(Te,{"aria-label":c,checked:o,disabled:v,offLabel:d({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:d({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:q=>{x({target:{name:c,value:q.target.checked}})}}),e.jsx(y.Hint,{})]});const P=t?d({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):"",C=u?d({id:u,defaultMessage:u}):"";return e.jsxs(y.Root,{error:C,name:c,children:[e.jsx(y.Label,{children:j}),e.jsx(ke,{disabled:v,onChange:x,placeholder:P,type:h,value:g}),e.jsx(y.Error,{})]})};H.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""};H.propTypes={description:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}),disabled:a.bool,error:a.string,intlLabel:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}).isRequired,name:a.string.isRequired,onChange:a.func.isRequired,placeholder:a.shape({id:a.string.isRequired,defaultMessage:a.string.isRequired,values:a.object}),providerToEditName:a.string.isRequired,type:a.string.isRequired,value:a.oneOfType([a.bool,a.string])};const A=({headerBreadcrumbs:r,initialData:v,isSubmiting:m,layout:u,isOpen:c,onSubmit:x,onToggle:t,providerToEditName:b})=>{const{formatMessage:h}=D();return e.jsx(L.Root,{open:c,onOpenChange:t,children:e.jsxs(L.Content,{children:[e.jsx(L.Header,{children:e.jsx(qe,{label:r.join(", "),children:r.map((o,d,g)=>e.jsx(Me,{isCurrent:d===g.length-1,children:o},o))})}),e.jsx(Le,{onSubmit:o=>x(o),initialValues:v,validationSchema:u.schema,validateOnChange:!1,children:({errors:o,handleChange:d,values:g})=>e.jsxs(we,{children:[e.jsx(L.Body,{children:e.jsx(Re,{direction:"column",alignItems:"stretch",gap:1,children:e.jsx(J.Root,{gap:5,children:u.form.map(j=>j.map(p=>e.jsx(J.Item,{col:p.size,xs:12,direction:"column",alignItems:"stretch",children:e.jsx(H,{...p,error:o[p.name],onChange:d,value:g[p.name],providerToEditName:b})},p.name)))})})}),e.jsxs(L.Footer,{children:[e.jsx(K,{variant:"tertiary",onClick:t,type:"button",children:h({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(K,{type:"submit",loading:m,children:h({id:"global.save",defaultMessage:"Save"})})]})]})})]})})};A.defaultProps={initialData:null,providerToEditName:null};A.propTypes={headerBreadcrumbs:a.arrayOf(a.string).isRequired,initialData:a.object,layout:a.shape({form:a.arrayOf(a.array),schema:a.object}).isRequired,isOpen:a.bool.isRequired,isSubmiting:a.bool.isRequired,onSubmit:a.func.isRequired,onToggle:a.func.isRequired,providerToEditName:a.string};const X={id:n("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},Z={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},O={id:n("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},N={id:n("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},Y={id:n("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},_={id:n("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},w={id:n("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},ee={id:n("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},B={email:{form:[[{intlLabel:N,name:"enabled",type:"bool",description:O,size:6}]],schema:F().shape({enabled:U().required(l.required.id)})},providers:{form:[[{intlLabel:N,name:"enabled",type:"bool",description:O,size:6,validations:{required:!0}}],[{intlLabel:Y,name:"key",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:X,placeholder:Z,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:_,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:F().shape({enabled:U().required(l.required.id),key:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()})})},providersWithSubdomain:{form:[[{intlLabel:N,name:"enabled",type:"bool",description:O,size:6,validations:{required:!0}}],[{intlLabel:Y,name:"key",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:ee,name:"secret",type:"text",placeholder:w,size:12,validations:{required:!0}}],[{intlLabel:{id:n({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:w,size:12,validations:{required:!1}}],[{intlLabel:{id:n("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:n("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:X,placeholder:Z,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:_,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:F().shape({enabled:U().required(l.required.id),key:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),secret:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),subdomain:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()}),callback:i().when("enabled",{is:!0,then:i().required(l.required.id),otherwise:i()})})}},Se=()=>{const{formatMessage:r,locale:v}=D(),m=oe(),{trackUsage:u}=Ce(),[c,x]=T.useState(!1),[t,b]=T.useState(null),{toggleNotification:h}=le(),{get:o,put:d}=ue(),{formatAPIError:g}=ce(),j=pe(v,{sensitivity:"base"}),{isLoading:p,allowedActions:{canUpdate:P}}=he({update:ae.updateProviders}),{isLoading:C,data:q}=me(["users-permissions","get-providers"],async()=>{const{data:s}=await o("/users-permissions/providers");return s},{initialData:{}}),W=be(s=>d("/users-permissions/providers",s),{async onSuccess(){await m.invalidateQueries(["users-permissions","get-providers"]),h({type:"success",message:r({id:n("notification.success.submit")})}),u("didEditAuthenticationProvider"),S()},onError(s){h({type:"danger",message:g(s)})},refetchActive:!1}),R=Object.entries(q).reduce((s,[f,te])=>{const{icon:V,enabled:ne,subdomain:de}=te;return s.push({name:f,icon:V==="envelope"?["fas","envelope"]:["fab",V],enabled:ne,subdomain:de}),s},[]).sort((s,f)=>j.compare(s.name,f.name)),se=C||p,$=T.useMemo(()=>t?!!R.find(f=>f.name===t)?.subdomain:!1,[R,t]),ie=T.useMemo(()=>t==="email"?B.email:$?B.providersWithSubdomain:B.providers,[t,$]),S=()=>{x(s=>!s)},Q=s=>{P&&(b(s.name),S())},re=async s=>{u("willEditAuthenticationProvider"),W.mutate({providers:{...q,[t]:s}})};return se?e.jsx(k.Loading,{}):e.jsxs(I.Root,{children:[e.jsx(k.Title,{children:r({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})})}),e.jsxs(k.Main,{children:[e.jsx(I.Header,{title:r({id:n("HeaderNav.link.providers"),defaultMessage:"Providers"})}),e.jsx(I.Content,{children:e.jsxs(ge,{colCount:3,rowCount:R.length+1,children:[e.jsx(fe,{children:e.jsxs(G,{children:[e.jsx(E,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:"global.name",defaultMessage:"Name"})})}),e.jsx(E,{children:e.jsx(M,{variant:"sigma",textColor:"neutral600",children:r({id:n("Providers.status"),defaultMessage:"Status"})})}),e.jsx(E,{children:e.jsx(M,{variant:"sigma",children:e.jsx(ve,{children:r({id:"global.settings",defaultMessage:"Settings"})})})})]})}),e.jsx(xe,{children:R.map(s=>e.jsxs(G,{onClick:()=>P?Q(s):void 0,children:[e.jsx(z,{width:"45%",children:e.jsx(M,{fontWeight:"semiBold",textColor:"neutral800",children:s.name})}),e.jsx(z,{width:"65%",children:e.jsx(M,{textColor:s.enabled?"success600":"danger600","data-testid":`enable-${s.name}`,children:s.enabled?r({id:"global.enabled",defaultMessage:"Enabled"}):r({id:"global.disabled",defaultMessage:"Disabled"})})}),e.jsx(z,{onClick:f=>f.stopPropagation(),children:P&&e.jsx(je,{onClick:()=>Q(s),variant:"ghost",label:"Edit",children:e.jsx(ye,{})})})]},s.name))})]})})]}),e.jsx(A,{initialData:q[t],isOpen:c,isSubmiting:W.isLoading,layout:ie,headerBreadcrumbs:[r({id:n("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),Pe(t)],onToggle:S,onSubmit:re,providerToEditName:t})]})},Ee=()=>e.jsx(k.Protect,{permissions:ae.readProviders,children:e.jsx(Se,{})});export{Se as ProvidersPage,Ee as default};