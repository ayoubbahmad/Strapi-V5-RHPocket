function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["strapi-Ddy60Q00.js","strapi-COJtagOC.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{m as P,dk as _,dl as w,a3 as T,o as j,p as i,x as M,bL as D,Y as A,dm as C,a as g,d0 as O,da as U,dn as R,b9 as B,dp as H,cp as $,cq as q,N as G,aX as K,dq as V,dr as Y,ds as F,dt as J,ad as W}from"./strapi-Ddy60Q00.js";import{s as X}from"./sortBy-p3NedMot.js";import{s as z}from"./selectors--muHmKGe-stsSCaN8.js";import"./_baseMap-rKQkCNwE.js";import"./_baseEach-RPJecHJH.js";const Q=n=>n.map(a=>{const r=a.links.map(o=>({...o,isDisplayed:!1}));return{...a,links:r}}),Z=()=>{const[{isLoading:n,menu:a},r]=g.useState({isLoading:!0,menu:[]}),o=O("useSettingsMenu",s=>s.checkUserHasPermissions),h=U("useSettingsMenu",s=>s.shouldUpdateStrapi),u=R("useSettingsMenu",s=>s.settings),d=B(z),f=g.useMemo(()=>H(),[]),{admin:e,global:t}=$(f,async()=>(await q(()=>import("./strapi-Ddy60Q00.js").then(s=>s.ia),__vite__mapDeps([0,1])).then(s=>s.J)).SETTINGS_LINKS_EE(),{combine(s,l){return{admin:[...l.admin,...s.admin],global:[...s.global,...l.global]}},defaultValue:{admin:[],global:[]}}),b=g.useCallback(s=>{if(!s.id)throw new Error("The settings menu item must have an id attribute.");return{...s,permissions:d.settings?.[s.id]?.main??[]}},[d.settings]);return g.useEffect(()=>{const s=async()=>{const I=await(S=>Promise.all(S.reduce((c,L,k)=>{const x=L.links.map(async(v,p)=>({hasPermission:(await o(v.permissions)).length>0,sectionIndex:k,linkIndex:p}));return[...c,...x]},[])))(N);r(S=>({...S,isLoading:!1,menu:N.map((c,L)=>({...c,links:c.links.map((k,x)=>{const v=I.find(p=>p.sectionIndex===L&&p.linkIndex===x);return{...k,isDisplayed:!!v?.hasPermission}})}))}))},{global:l,...E}=u,N=Q([{...l,links:X([...l.links,...t.map(b)],m=>m.id).map(m=>({...m,hasNotification:m.id==="000-application-infos"&&h}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:e.map(b)},...Object.values(E)]);s()},[e,t,u,h,b,o]),{isLoading:n,menu:a.map(s=>({...s,links:s.links.filter(l=>l.isDisplayed)}))}},y=P(_)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({theme:n})=>n.colors.warning500};
  }
`,ss=P(w)`
  &.active ${y} {
    right: 13px;
  }
`,ts=({menu:n})=>{const{formatMessage:a}=j(),{trackUsage:r}=G(),{pathname:o}=K(),u=n.filter(e=>!e.links.every(t=>t.isDisplayed===!1)).map(e=>({...e,title:e.intlLabel,links:e.links.map(t=>({...t,title:t.intlLabel,name:t.id}))})),d=a({id:"global.settings",defaultMessage:"Settings"}),f=e=>()=>{r("willNavigate",{from:o,to:e})};return i.jsxs(V,{"aria-label":d,children:[i.jsx(Y,{label:d}),i.jsx(F,{children:u.map(e=>i.jsx(J,{label:a(e.intlLabel),children:e.links.map(t=>i.jsxs(ss,{tag:W,withBullet:t.hasNotification,to:t.to,onClick:f(t.to),position:"relative",children:[a(t.intlLabel),t?.licenseOnly&&i.jsx(y,{width:"1.5rem",height:"1.5rem"})]},t.id))},e.id))})]})},rs=()=>{const n=T("/settings/:settingId/*"),{formatMessage:a}=j(),{isLoading:r,menu:o}=Z();return r?i.jsx(M.Loading,{}):n?.params.settingId?i.jsxs(A.Root,{sideNav:i.jsx(ts,{menu:o}),children:[i.jsx(M.Title,{children:a({id:"global.settings",defaultMessage:"Settings"})}),i.jsx(C,{})]}):i.jsx(D,{to:"application-infos"})};export{rs as Layout};
