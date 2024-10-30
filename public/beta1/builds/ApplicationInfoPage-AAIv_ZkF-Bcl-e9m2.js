function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["AdminSeatInfo-qIgh5-QA-0yf47-fi.js","strapi-Ddy60Q00.js","strapi-COJtagOC.css","selectors--muHmKGe-stsSCaN8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{du as k,c5 as O,m as $,a0 as b,N,o as M,dv as H,a as h,b9 as G,da as w,cp as V,a9 as W,p as e,Y as A,x as T,Z as C,$ as K,F as I,B as x,T as L,G as F,aw as m,dw as Z,dx as q,at as B,ae as J,aC as Y,dy as Q,c7 as z,a1 as X,dz as ee,dA as te,dB as ae,dC as oe,dD as ie,dE as se,dF as ne,dG as le,dH as de,cq as re}from"./strapi-Ddy60Q00.js";import{s as ce}from"./selectors--muHmKGe-stsSCaN8.js";const{Axios:be,AxiosError:ue,CanceledError:Ie,isCancel:Le,CancelToken:Re,VERSION:we,all:ve,Cancel:ye,isAxiosError:Ae,spread:Fe,toFormData:Ee,AxiosHeaders:Te,HttpStatusCode:Be,formToJSON:De,getAdapter:Pe,mergeConfig:ke}=k,R=750,y=100,U=["image/jpeg","image/png","image/svg+xml"],ge={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},D={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},_=async t=>{if(!U.includes(t.type))throw new v("File format",ge);const o=await new Promise(l=>{const d=new FileReader;d.onload=()=>{const r=new Image;r.onload=()=>{l({width:r.width,height:r.height})},r.src=d.result},d.readAsDataURL(t)});if(!(o.width<=R&&o.height<=R))throw new v("File sizing",D);const s={ext:t.name.split(".").pop(),size:t.size/1e3,name:t.name,url:URL.createObjectURL(t),rawFile:t,width:o.width,height:o.height};if(!(s.size<=y))throw new v("File sizing",D);return s};class v extends Error{displayMessage;constructor(a,o,u){super(a,u),this.displayMessage=o}}const[pe,E]=O("LogoInput"),P=({canUpdate:t,customLogo:a,defaultLogo:o,hint:u,label:s,onChangeLogo:n})=>{const[l,d]=h.useState(),[r,g]=h.useState(),{formatMessage:c}=M(),f=()=>{d(void 0),g(void 0)};return e.jsx(m.Root,{open:!!r,onOpenChange:j=>{j===!1&&f()},children:e.jsxs(pe,{setLocalImage:d,localImage:l,goToStep:g,onClose:f,children:[e.jsx(Z,{label:s,selectedSlide:0,hint:u,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:a?.name||"logo.png",actions:e.jsxs(q,{children:[e.jsx(m.Trigger,{children:e.jsx(B,{disabled:!t,onClick:()=>g("upload"),label:c({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),children:e.jsx(J,{})})}),a?.url&&e.jsx(B,{disabled:!t,onClick:()=>n(null),label:c({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),children:e.jsx(Y,{})})]}),children:e.jsx(Q,{label:c({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"}),children:e.jsx(x,{maxHeight:"40%",maxWidth:"40%",tag:"img",src:a?.url||o,alt:c({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})})})}),e.jsxs(m.Content,{children:[e.jsx(m.Header,{children:e.jsx(m.Title,{children:c(r==="upload"?{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"}:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"})})}),r==="upload"?e.jsx(me,{}):e.jsx(je,{onChangeLogo:n})]})]})})},me=()=>{const{formatMessage:t}=M();return e.jsxs(z.Root,{variant:"simple",defaultValue:"computer",children:[e.jsx(x,{paddingLeft:8,paddingRight:8,children:e.jsxs(z.List,{"aria-label":t({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),children:[e.jsx(z.Trigger,{value:"computer",children:t({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})}),e.jsx(z.Trigger,{value:"url",children:t({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"})})]})}),e.jsx(z.Content,{value:"computer",children:e.jsx(xe,{})}),e.jsx(z.Content,{value:"url",children:e.jsx(he,{})})]})},he=()=>{const{formatMessage:t}=M(),[a,o]=h.useState(""),[u,s]=h.useState(),{setLocalImage:n,goToStep:l,onClose:d}=E("URLForm"),r=c=>{o(c.target.value)},g=async c=>{c.preventDefault();const j=new FormData(c.target).get("logo-url");if(j)try{const i=await k.get(j.toString(),{responseType:"blob",timeout:8e3}),S=new File([i.data],i.config.url??"",{type:i.headers["content-type"]}),p=await _(S);n(p),l("pending")}catch(i){if(i instanceof ue)s(t({id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"}));else if(i instanceof v)s(t(i.displayMessage,{size:y,dimension:R}));else throw i}};return e.jsxs("form",{onSubmit:g,children:[e.jsx(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:e.jsxs(b.Root,{error:u,name:"logo-url",children:[e.jsx(b.Label,{children:t({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"})}),e.jsx(X,{onChange:r,value:a}),e.jsx(b.Error,{})]})}),e.jsxs(m.Footer,{children:[e.jsx(C,{onClick:d,variant:"tertiary",children:t({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(C,{type:"submit",children:t({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"})})]})]})},xe=()=>{const{formatMessage:t}=M(),[a,o]=h.useState(!1),[u,s]=h.useState(),n=h.useRef(null),l=h.useId(),{setLocalImage:d,goToStep:r,onClose:g}=E("ComputerForm"),c=()=>{o(!0)},f=()=>{o(!1)},j=S=>{S.preventDefault(),n.current.click()},i=async()=>{if(f(),!n.current.files)return;const[S]=n.current.files;try{const p=await _(S);d(p),r("pending")}catch(p){if(p instanceof v)s(t(p.displayMessage,{size:y,dimension:R})),n.current.focus();else throw p}};return e.jsxs(e.Fragment,{children:[e.jsx("form",{children:e.jsx(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:e.jsx(b.Root,{name:l,error:u,children:e.jsxs(I,{direction:"column",alignItems:"stretch",gap:2,children:[e.jsxs(I,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:a?"primary100":"neutral100",borderColor:a?"primary500":u?"danger600":"neutral300",borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:c,onDragLeave:f,children:[e.jsx(ee,{fill:"primary600",width:"6rem",height:"6rem","aria-hidden":!0}),e.jsx(x,{paddingTop:3,paddingBottom:5,children:e.jsx(L,{variant:"delta",tag:"label",htmlFor:l,children:t({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"})})}),e.jsx(x,{position:"relative",children:e.jsx(fe,{accept:U.join(", "),type:"file",name:"files",tabIndex:-1,onChange:i,ref:n,id:l})}),e.jsx(C,{type:"button",onClick:j,children:t({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})}),e.jsx(x,{paddingTop:6,children:e.jsx(L,{variant:"pi",textColor:"neutral600",children:t({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:y,dimension:R})})})]}),e.jsx(b.Error,{})]})})})}),e.jsx(m.Footer,{children:e.jsx(C,{onClick:g,variant:"tertiary",children:t({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})},fe=$(b.Input)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,je=({onChangeLogo:t})=>{const{formatMessage:a}=M(),{localImage:o,setLocalImage:u,goToStep:s,onClose:n}=E("PendingLogoDialog"),l=()=>{u(void 0),s("upload")},d=()=>{o&&t(o),n()};return e.jsxs(e.Fragment,{children:[e.jsx(m.Body,{children:e.jsxs(x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6,children:[e.jsxs(I,{justifyContent:"space-between",paddingBottom:6,children:[e.jsxs(I,{direction:"column",alignItems:"flex-start",children:[e.jsx(L,{variant:"pi",fontWeight:"bold",children:a({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})}),e.jsx(L,{variant:"pi",textColor:"neutral500",children:a({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"})})]}),e.jsx(C,{onClick:l,variant:"secondary",children:a({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"})})]}),e.jsx(x,{maxWidth:"18rem",children:o?.url?e.jsx(Se,{asset:o}):null})]})}),e.jsxs(m.Footer,{children:[e.jsx(m.Close,{children:e.jsx(C,{onClick:n,variant:"tertiary",children:a({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})})}),e.jsx(C,{onClick:d,children:a({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"})})]})]})},Se=({asset:t})=>{const{formatMessage:a}=M();return e.jsxs(te,{children:[e.jsx(ae,{children:e.jsx(oe,{size:"S",src:t.url})}),e.jsxs(ie,{children:[e.jsxs(se,{children:[e.jsx(ne,{children:t.name}),e.jsx(le,{children:`${t.ext?.toUpperCase()} - ${t.width}✕${t.height}`})]}),e.jsx(de,{children:a({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"})})]})]})},Ce=()=>null,Ue=()=>{const{trackUsage:t}=N(),{formatMessage:a}=M(),{logos:o,updateProjectSettings:u}=H("ApplicationInfoPage"),[s,n]=h.useState({menu:o.menu,auth:o.auth}),{settings:l}=G(ce);w("ApplicationInfoPage",i=>i.communityEdition),w("ApplicationInfoPage",i=>i.latestStrapiReleaseTag),w("ApplicationInfoPage",i=>i.nodeVersion),w("ApplicationInfoPage",i=>i.shouldUpdateStrapi),w("ApplicationInfoPage",i=>i.strapiVersion);const d=V(Ce,async()=>(await re(()=>import("./AdminSeatInfo-qIgh5-QA-0yf47-fi.js"),__vite__mapDeps([0,1,2,3]))).AdminSeatInfoEE),{allowedActions:{canRead:r,canUpdate:g}}=W(l?l["project-settings"]:{}),c=i=>{i.preventDefault(),u({authLogo:s.auth.custom??null,menuLogo:s.menu.custom??null})},f=i=>S=>{S===null&&t("didClickResetLogo",{logo:i}),n(p=>({...p,[i]:{...p[i],custom:S}}))};if(h.useEffect(()=>{n({menu:o.menu,auth:o.auth})},[o]),!d)return null;const j=s.auth.custom===o.auth.custom&&s.menu.custom===o.menu.custom;return e.jsxs(A.Root,{children:[e.jsx(T.Title,{children:a({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:a({id:"Settings.application.header",defaultMessage:"Application"})})}),e.jsx(T.Main,{children:e.jsxs("form",{onSubmit:c,children:[e.jsx(A.Header,{title:a({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:a({id:"Settings.application.description",defaultMessage:"Administration panel’s global information"}),primaryAction:g&&e.jsx(C,{disabled:j,type:"submit",startIcon:e.jsx(K,{}),children:a({id:"global.save",defaultMessage:"Save"})})}),e.jsx(A.Content,{children:e.jsxs(I,{direction:"column",alignItems:"stretch",gap:6,children:[e.jsxs(I,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[]}),r&&e.jsxs(x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7,children:[e.jsx(L,{variant:"delta",tag:"h3",children:a({id:"Settings.application.customization",defaultMessage:"Customization"})}),e.jsx(L,{variant:"pi",textColor:"neutral600",children:a({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}×{dimension}, Max file size: {size}KB"},{dimension:R,size:y})}),e.jsxs(F.Root,{paddingTop:4,gap:4,children:[e.jsx(F.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(P,{canUpdate:g,customLogo:s.menu.custom,defaultLogo:s.menu.default,hint:a({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:a({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:f("menu")})}),e.jsx(F.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:e.jsx(P,{canUpdate:g,customLogo:s.auth.custom,defaultLogo:s.auth.default,hint:a({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:a({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:f("auth")})})]})]})]})})]})})]})};export{Ue as ApplicationInfoPage};
