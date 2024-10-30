import{s as G,v as Y,av as K,m as T,o as I,N as J,K as N,a5 as X,e9 as $,ed as q,gJ as Q,a as f,eO as Z,p as e,bL as ee,x as L,Y as A,V as te,aA as z,F as M,bG as se,cK as j,a6 as ae,Z as k,ex as u,gK as H,ab as ne,T as B,G as D,aB as _,e7 as oe,gF as ie,B as V,dM as w,ak as re,ae as le,aJ as de,eX as ce,aw as C,as as ue,cN as pe,bn as me}from"./strapi-Ddy60Q00.js";import{u as ge}from"./hooks-E5u1mcgM-ysADSLIC.js";import{s as fe}from"./objects-mKMAmfec-BwwVA-bm.js";import{C as O}from"./CardDragPreview-DOxamsuj-CZo-jamN.js";import{u as he,I as be}from"./useDragAndDrop-DdHgKsqq-BL0loorR.js";import{F as ye}from"./FieldTypeIcon-CMlNO8PE-Cvy-XVzN.js";import{g as xe}from"./getEmptyImage-CjqolaH3.js";const je=({name:t})=>{const{formatMessage:c}=I(),l=j("Header",m=>m.modified),n=j("Header",m=>m.isSubmitting);return e.jsx(A.Header,{navigationAction:e.jsx(ae,{}),primaryAction:e.jsx(k,{size:"S",disabled:!l,type:"submit",loading:n,children:c({id:"global.save",defaultMessage:"Save"})}),subtitle:c({id:u("components.SettingsViewWrapper.pluginHeader.description.list-settings"),defaultMessage:"Define the settings of the list view."}),title:c({id:u("components.SettingsViewWrapper.pluginHeader.title"),defaultMessage:"Configure the view - {name}"},{name:H(t)})})},Me=["media","richtext","dynamiczone","relation","component","json","blocks"],Se=()=>{const{formatMessage:t,locale:c}=I(),l=ne(c,{sensitivity:"base"}),{schema:n}=$(),m=j("Settings",o=>o.values.layout??[]),g=j("Settings",o=>o.values.settings.defaultSortBy),b=j("Settings",o=>o.onChange),i=f.useMemo(()=>Object.values(m).reduce((o,a)=>(n&&!Me.includes(n.attributes[a.name].type)&&o.push({value:a.name,label:typeof a.label!="string"?t(a.label):a.label}),o),[]),[t,m,n]).sort((o,a)=>l.compare(o.label,a.label));f.useEffect(()=>{i.findIndex(o=>o.value===g)===-1&&b("settings.defaultSortBy",i[0]?.value)},[g,b,i]);const h=f.useMemo(()=>ve.map(o=>o.map(a=>a.type==="enumeration"?{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label),options:a.name==="settings.defaultSortBy"?i:a.options}:{...a,hint:a.hint?t(a.hint):void 0,label:t(a.label)})),[t,i]);return e.jsxs(M,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(B,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.settings"),defaultMessage:"Settings"})}),e.jsx(D.Root,{gap:4,children:h.map(o=>o.map(({size:a,...p})=>e.jsx(D.Item,{s:12,col:a,direction:"column",alignItems:"stretch",children:e.jsx(_,{...p})},p.name)))},"bottom")]})},ve=[[{label:{id:u("form.Input.search"),defaultMessage:"Enable search"},name:"settings.searchable",size:4,type:"boolean"},{label:{id:u("form.Input.filters"),defaultMessage:"Enable filters"},name:"settings.filterable",size:4,type:"boolean"},{label:{id:u("form.Input.bulkActions"),defaultMessage:"Enable bulk actions"},name:"settings.bulkable",size:4,type:"boolean"}],[{hint:{id:u("form.Input.pageEntries.inputDescription"),defaultMessage:"Note: You can override this value in the Collection Type settings page."},label:{id:u("form.Input.pageEntries"),defaultMessage:"Entries per page"},name:"settings.pageSize",options:["10","20","50","100"].map(t=>({value:t,label:t})),size:6,type:"enumeration"},{label:{id:u("form.Input.defaultSort"),defaultMessage:"Default sort attribute"},name:"settings.defaultSortBy",options:[],size:3,type:"enumeration"},{label:{id:u("form.Input.sort.order"),defaultMessage:"Default sort order"},name:"settings.defaultSortOrder",options:["ASC","DESC"].map(t=>({value:t,label:t})),size:3,type:"enumeration"}]],Ce=G().shape({label:Y().required(),sortable:K()}),Fe=({attribute:t,name:c,onClose:l})=>{const{formatMessage:n}=I(),{toggleNotification:m}=N(),{value:g,onChange:b}=me(c);if(!g)return console.error("You've opened a field to edit without it being part of the form, this is likely a bug with Strapi. Please open an issue."),m({message:n({id:"content-manager.containers.list-settings.modal-form.error",defaultMessage:"An error occurred while trying to open the form."}),type:"danger"}),null;let d=!["media","relation"].includes(t.type);return"relation"in t&&["oneWay","oneToOne","manyToOne"].includes(t.relation)&&(d=!0),e.jsx(C.Content,{children:e.jsxs(z,{method:"PUT",initialValues:g,validationSchema:Ce,onSubmit:i=>{b(c,i),l()},children:[e.jsx(C.Header,{children:e.jsxs(Ie,{children:[e.jsx(ye,{type:t.type}),e.jsx(C.Title,{children:n({id:u("containers.list-settings.modal-form.label"),defaultMessage:"Edit {fieldName}"},{fieldName:H(g.label)})})]})}),e.jsx(C.Body,{children:e.jsx(D.Root,{gap:4,children:[{name:"label",label:n({id:u("form.Input.label"),defaultMessage:"Label"}),hint:n({id:u("form.Input.label.inputDescription"),defaultMessage:"This value overrides the label displayed in the table's head"}),size:6,type:"string"},{label:n({id:u("form.Input.sort.field"),defaultMessage:"Enable sort on this field"}),name:"sortable",size:6,type:"boolean"}].filter(i=>i.name!=="sortable"||i.name==="sortable"&&d).map(({size:i,...h})=>e.jsx(D.Item,{s:12,col:i,direction:"column",alignItems:"stretch",children:e.jsx(_,{...h})},h.name))})}),e.jsxs(C.Footer,{children:[e.jsx(k,{onClick:l,variant:"tertiary",children:n({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),e.jsx(k,{type:"submit",children:n({id:"global.finish",defaultMessage:"Finish"})})]})]})})},Ie=T(M)`
  svg {
    width: 3.2rem;
    margin-right: ${({theme:t})=>t.spaces[3]};
  }
`,Re=({attribute:t,index:c,isDraggingSibling:l,label:n,name:m,onMoveField:g,onRemoveField:b,setIsDraggingSibling:d})=>{const[i,h]=f.useState(!1),{formatMessage:o}=I(),[,a]=f.useState(!1),[{isDragging:p},y,S,F,x]=he(!0,{type:be.FIELD,item:{index:c,label:n,name:m},index:c,onMoveItem:g,onEnd:()=>d(!1)});f.useEffect(()=>{x(xe(),{captureDraggingState:!1})},[x]),f.useEffect(()=>{p&&d(!0)},[p,d]),f.useEffect(()=>{l||a(r=>!r)},[l]);const s=de(S,y);return e.jsxs(we,{ref:s,children:[p&&e.jsx(O,{label:n}),!p&&l&&e.jsx(O,{isSibling:!0,label:n}),!p&&!l&&e.jsxs(Ee,{borderColor:"neutral150",background:"neutral100",hasRadius:!0,justifyContent:"space-between",onClick:()=>h(!0),children:[e.jsxs(M,{gap:3,children:[e.jsx(Te,{ref:F,"aria-label":o({id:u("components.DraggableCard.move.field"),defaultMessage:"Move {item}"},{item:n}),onClick:r=>r.stopPropagation(),children:e.jsx(ce,{})}),e.jsx(B,{fontWeight:"bold",children:n})]}),e.jsxs(M,{paddingLeft:3,onClick:r=>r.stopPropagation(),children:[e.jsxs(C.Root,{open:i,onOpenChange:h,children:[e.jsx(C.Trigger,{children:e.jsx(P,{onClick:r=>{r.stopPropagation()},"aria-label":o({id:u("components.DraggableCard.edit.field"),defaultMessage:"Edit {item}"},{item:n}),type:"button",children:e.jsx(ue,{width:"1.2rem",height:"1.2rem"})})}),e.jsx(Fe,{attribute:t,name:`layout.${c}`,onClose:()=>{h(!1)}})]}),e.jsx(P,{onClick:b,"data-testid":`delete-${m}`,"aria-label":o({id:u("components.DraggableCard.delete.field"),defaultMessage:"Delete {item}"},{item:n}),type:"button",children:e.jsx(pe,{width:"1.2rem",height:"1.2rem"})})]})]})]})},P=T.button`
  display: flex;
  align-items: center;
  height: ${({theme:t})=>t.spaces[7]};
  color: ${({theme:t})=>t.colors.neutral600};

  &:hover {
    color: ${({theme:t})=>t.colors.neutral700};
  }

  &:last-child {
    padding: 0 ${({theme:t})=>t.spaces[3]};
  }
`,Te=T(P)`
  padding: 0 ${({theme:t})=>t.spaces[3]};
  border-right: 1px solid ${({theme:t})=>t.colors.neutral150};
  cursor: all-scroll;
`,Ee=T(M)`
  max-height: 3.2rem;
  cursor: pointer;
`,we=T(V)`
  &:last-child {
    padding-right: ${({theme:t})=>t.spaces[3]};
  }
`,De=()=>{const{formatMessage:t}=I(),{model:c,schema:l}=$(),[n,m]=f.useState(!1),[g,b]=f.useState(null),d=f.useRef(null),i=j("SortDisplayedFields",s=>s.values.layout??[]),h=j("SortDisplayedFields",s=>s.addFieldRow),o=j("SortDisplayedFields",s=>s.removeFieldRow),a=j("SortDisplayedFields",s=>s.moveFieldRow),{metadata:p}=oe(c,{selectFromResult:({data:s})=>({metadata:s?.contentType.metadatas??{}})}),y=f.useMemo(()=>{if(!l)return[];const s=i.map(r=>r.name);return Object.entries(l.attributes).reduce((r,[v,R])=>{if(!s.includes(v)&&ie(R)){const{list:E}=p[v];r.push({name:v,label:E.label||v,sortable:E.sortable})}return r},[])},[p,i,l]),S=s=>{b("add"),h("layout",s)},F=s=>{b("remove"),o("layout",s)},x=(s,r)=>{a("layout",s,r)};return f.useEffect(()=>{g==="add"&&d?.current&&(d.current.scrollLeft=d.current.scrollWidth)},[g]),e.jsxs(M,{alignItems:"stretch",direction:"column",gap:4,children:[e.jsx(B,{variant:"delta",tag:"h2",children:t({id:u("containers.SettingPage.view"),defaultMessage:"View"})}),e.jsxs(M,{padding:4,borderColor:"neutral300",borderStyle:"dashed",borderWidth:"1px",hasRadius:!0,children:[e.jsx(V,{flex:"1",overflow:"auto hidden",ref:d,children:e.jsx(M,{gap:3,children:i.map((s,r)=>e.jsx(Re,{index:r,isDraggingSibling:n,onMoveField:x,onRemoveField:()=>F(r),setIsDraggingSibling:m,...s,attribute:l.attributes[s.name],label:typeof s.label=="object"?t(s.label):s.label},s.name))})}),e.jsxs(w.Root,{children:[e.jsxs(w.Trigger,{paddingLeft:2,paddingRight:2,justifyContent:"center",endIcon:null,disabled:y.length===0,variant:"tertiary",children:[e.jsx(re,{tag:"span",children:t({id:u("components.FieldSelect.label"),defaultMessage:"Add a field"})}),e.jsx(le,{"aria-hidden":!0,focusable:!1,style:{position:"relative",top:2}})]}),e.jsx(w.Content,{children:y.map(s=>e.jsx(w.Item,{onSelect:()=>S(s),children:typeof s.label=="object"?t(s.label):s.label},s.name))})]})]})]})},Le=()=>{const{formatMessage:t}=I(),{trackUsage:c}=J(),{toggleNotification:l}=N(),{_unstableFormatAPIError:n}=X(),{model:m,collectionType:g}=$(),{isLoading:b,list:d,edit:i}=q(),[h]=Q(),o=async p=>{try{c("willSaveContentTypeLayout");const y=p.layout??[],S=Object.entries(i.metadatas).reduce((x,[s,r])=>{const{mainField:v,...R}=d.metadatas[s],{label:E,sortable:U}=y.find(W=>W.name===s)??{};return x[s]={edit:r,list:{...R,label:E||R.label,sortable:U||R.sortable}},x},{}),F=await h({layouts:{edit:i.layout.flatMap(x=>x.map(s=>s.map(({name:r,size:v})=>({name:r,size:v})))),list:y.map(x=>x.name)},settings:fe(p.settings,"displayName",void 0),metadatas:S,uid:m});"data"in F?(c("didEditListSettings"),l({type:"success",message:t({id:"notification.success.saved",defaultMessage:"Saved"})})):l({type:"danger",message:n(F.error)})}catch(y){console.error(y),l({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},a=f.useMemo(()=>({layout:d.layout.map(({label:p,sortable:y,name:S})=>({label:typeof p=="string"?p:t(p),sortable:y,name:S})),settings:d.settings}),[t,d.layout,d.settings]);return g===Z?e.jsx(ee,{to:`/single-types/${m}`}):b?e.jsx(L.Loading,{}):e.jsxs(A.Root,{children:[e.jsx(L.Title,{children:`Configure ${d.settings.displayName} List View`}),e.jsx(te,{children:e.jsxs(z,{initialValues:a,onSubmit:o,method:"PUT",children:[e.jsx(je,{collectionType:g,model:m,name:d.settings.displayName??""}),e.jsx(A.Content,{children:e.jsxs(M,{alignItems:"stretch",background:"neutral0",direction:"column",gap:6,hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[e.jsx(Se,{}),e.jsx(se,{}),e.jsx(De,{})]})})]})})]})},ze=()=>{const t=ge(c=>c.admin_app.permissions.contentManager?.collectionTypesConfigurations);return e.jsx(L.Protect,{permissions:t,children:e.jsx(Le,{})})};export{Le as ListConfiguration,ze as ProtectedListConfiguration};