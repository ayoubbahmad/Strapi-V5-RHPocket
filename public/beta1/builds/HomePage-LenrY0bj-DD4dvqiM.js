function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["HomePage-NdId9gqT-M3Cp1YYZ.js","strapi-Ddy60Q00.js","strapi-COJtagOC.css","useLicenseLimitNotification-Qx_rSpUQ-iexhPsfO.js","isNil-CE68rpqV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{bf as y,o as v,cQ as c,M as x,p as t,x as f,Y as T,V as w,B as l,G as d,F as u,T as g,m as o,d1 as P,d2 as j,d3 as b,d4 as k,d5 as G,d6 as O,ac as E,cp as F,a5 as S,K as C,a as M,cq as Z}from"./strapi-Ddy60Q00.js";const z=y.injectEndpoints({endpoints:e=>({getContentTypes:e.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:s=>s.data.reduce((a,r)=>(r.isDisplayed&&a[r.kind].push(r),a),{collectionType:[],singleType:[]})})}),overrideExisting:!0}),{useGetContentTypesQuery:H}=z;function L(){const{_unstableFormatAPIError:e}=S(),{toggleNotification:s}=C(),{data:a,isLoading:r,error:i}=H();return M.useEffect(()=>{i&&s({type:"danger",message:e(i)})},[i,e,s]),{isLoading:r,collectionTypes:a?.collectionType??[],singleTypes:a?.singleType??[]}}const Q="data:image/svg+xml,%3csvg%20width='148'%20height='148'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='.8'%20fill-rule='evenodd'%20clip-rule='evenodd'%3e%3cpath%20opacity='.15'%20d='M110.81%2037H73.97V74.1h36.84V37Z'%20fill='url(%23a)'/%3e%3cpath%20opacity='.07'%20d='M36.84%200H0v37.08h36.84V0Z'%20fill='url(%23b)'/%3e%3cpath%20opacity='.07'%20d='M73.92%2073.95H37.08v37.08h36.84V73.95Z'%20fill='url(%23c)'/%3e%3cpath%20opacity='.07'%20d='M147.99%20110.92h-37.3V148H148v-37.08Z'%20fill='url(%23d)'/%3e%3cpath%20opacity='.15'%20d='M73.83%2037H36.84L73.83%200v37Z'%20fill='url(%23e)'/%3e%3cpath%20opacity='.15'%20d='M110.6%20111.02v-37h36.98l-36.99%2037Z'%20fill='url(%23f)'/%3e%3cpath%20opacity='.4'%20d='M73.83%200v37h36.98v37.01h37V3a3%203%200%200%200-3-3H73.82Z'%20fill='url(%23g)'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='a'%20x1='91.31'%20y1='83.31'%20x2='118.24'%20y2='56.59'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='b'%20x1='40.99'%20y1='13.88'%20x2='.01'%20y2='11.64'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23A8B8FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='c'%20x1='54.41'%20y1='120.25'%20x2='81.35'%20y2='93.52'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23A8B8FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='d'%20x1='128.24'%20y1='157.22'%20x2='155.17'%20y2='130.17'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23A8B8FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='e'%20x1='54.24'%20y1='46.21'%20x2='81.12'%20y2='19.38'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='f'%20x1='126.28'%20y1='74.05'%20x2='124.94'%20y2='111.07'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233253EA'/%3e%3c/linearGradient%3e%3clinearGradient%20id='g'%20x1='73.37'%20y1='36.87'%20x2='132.87'%20y2='66.74'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%237A92FF'/%3e%3cstop%20offset='1'%20stop-color='%233858EA'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e",U="data:image/png;base64,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",D=()=>{const{formatMessage:e}=v(),{collectionTypes:s,singleTypes:a,isLoading:r}=L(),i=c("HomePage",n=>n.guidedTourState),h=c("HomePage",n=>n.isGuidedTourVisible),A=c("HomePage",n=>n.isSkipped);Object.values(i).every(n=>Object.values(n).every(m=>m)),x();const p=s.length>1||a.length>0;return r?t.jsx(f.Loading,{}):t.jsxs(T.Root,{children:[t.jsx(f.Title,{children:e({id:"HomePage.head.title",defaultMessage:"Homepage"})}),t.jsxs(w,{children:[t.jsx(B,{children:t.jsx("img",{alt:"","aria-hidden":!0,src:Q})}),t.jsxs(l,{padding:10,children:[t.jsx(d.Root,{children:t.jsx(d.Item,{col:8,s:12,direction:"column",alignItems:"stretch",children:t.jsx("div",{children:t.jsx(l,{paddingLeft:6,paddingBottom:10,children:t.jsxs(u,{direction:"column",alignItems:"flex-start",gap:5,children:[t.jsx(g,{tag:"h1",variant:"alpha",children:e(p?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome 👋"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})}),t.jsx(W,{textColor:"neutral600",variant:"epsilon",children:e(p?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})})]})})})})})]})]})]})},B=o(l)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: 15rem;
  }
`,W=o(g)`
  word-break: break-word;
`;o.a`
  text-decoration: none;
`;o(l)`
  background-image: url(${U});
`;o(u)`
  background: rgba(255, 255, 255, 0.3);
`;o(P)`
  path {
    fill: ${e=>e.theme.colors.neutral800} !important;
  }
`;o(j)`
  path {
    fill: #7289da !important;
  }
`;o(b)`
  > path:first-child {
    fill: #ff4500;
  }

  > path:nth-child(2) {
    fill: #fff;
  }
`;o(k)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`;o(G)`
  path:first-child {
    fill: #fff;
  }

  path:nth-child(2) {
    fill: #000 !important;
  }
`;o(O)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`;o(E)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:e})=>e.spaces[6]};
    height: ${({theme:e})=>e.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`;o(d.Root)`
  row-gap: ${({theme:e})=>e.spaces[2]};
  column-gap: ${({theme:e})=>e.spaces[4]};
`;const q=()=>{const e=F(D,async()=>(await Z(()=>import("./HomePage-NdId9gqT-M3Cp1YYZ.js"),__vite__mapDeps([0,1,2,3,4]))).HomePageEE);return e?t.jsx(e,{}):null};export{q as HomePage,D as HomePageCE};
