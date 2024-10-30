function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["index-Df1alkCk-BD9UpjgA.js","strapi-Ddy60Q00.js","strapi-COJtagOC.css","Layout-BJOxxAeM-CMMrSEQZ.js","useDragLayer-Ce9_GfxR.js","_id-6LK95-rZ-DBAuvQpd.js","getEmptyImage-CjqolaH3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{a as o,cq as a,p as e,z as s,A as r}from"./strapi-Ddy60Q00.js";const d=o.lazy(()=>a(()=>import("./index-Df1alkCk-BD9UpjgA.js"),__vite__mapDeps([0,1,2,3,4])).then(t=>({default:t.ProtectedListPage}))),i=o.lazy(()=>a(()=>import("./_id-6LK95-rZ-DBAuvQpd.js"),__vite__mapDeps([5,1,2,3,4,6])).then(t=>({default:t.ProtectedEditPage}))),p=[{path:"/",Component:d},{path:":id",Component:i}],_=()=>e.jsx(s,{children:p.map(t=>e.jsx(r,{...t},t.path))});export{_ as Router};
