import{_ as we,a as O,el as Te,e$ as ae,e2 as Re,e9 as Ce,o as ee,a8 as ge,e8 as ve,bn as te,e1 as se,bb as xe,p,F as V,cC as Me,aC as Oe,ex as F,m as K,K as ze,ez as Le,a0 as Y,bo as Ee,bp as De,T as be,ee as ye,ak as le,aJ as Fe,B as U,at as ce,eX as ke,bJ as Pe,ad as je,cN as $e,cK as de,e_ as Se,L as Ne}from"./strapi-Ddy60Q00.js";import{u as Ae,I as We,a as Ve}from"./useDragAndDrop-DdHgKsqq-BL0loorR.js";import{u as He,g as ie,a as qe}from"./relations-C0w0GcXi-DJ9hxzkR.js";import{g as Be}from"./getEmptyImage-CjqolaH3.js";var ue=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Ue(n,t){return!!(n===t||ue(n)&&ue(t))}function Ke(n,t){if(n.length!==t.length)return!1;for(var o=0;o<n.length;o++)if(!Ue(n[o],t[o]))return!1;return!0}function ne(n,t){t===void 0&&(t=Ke);var o,s=[],c,m=!1;function b(){for(var g=[],R=0;R<arguments.length;R++)g[R]=arguments[R];return m&&o===this&&t(g,s)||(c=n.apply(this,g),m=!0,o=this,s=g),c}return b}var Ge=typeof performance=="object"&&typeof performance.now=="function",he=Ge?function(){return performance.now()}:function(){return Date.now()};function pe(n){cancelAnimationFrame(n.id)}function Ye(n,t){var o=he();function s(){he()-o>=t?n.call(null):c.id=requestAnimationFrame(s)}var c={id:requestAnimationFrame(s)};return c}var oe=-1;function fe(n){if(n===void 0&&(n=!1),oe===-1||n){var t=document.createElement("div"),o=t.style;o.width="50px",o.height="50px",o.overflow="scroll",document.body.appendChild(t),oe=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return oe}var W=null;function me(n){if(n===void 0&&(n=!1),W===null||n){var t=document.createElement("div"),o=t.style;o.width="50px",o.height="50px",o.overflow="scroll",o.direction="rtl";var s=document.createElement("div"),c=s.style;return c.width="100px",c.height="100px",t.appendChild(s),document.body.appendChild(t),t.scrollLeft>0?W="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?W="negative":W="positive-ascending"),document.body.removeChild(t),W}return W}var Qe=150,Je=function(t,o){return t},J=null,X=null;typeof window<"u"&&typeof window.WeakSet<"u"&&(J=new WeakSet,X=new WeakSet);function Xe(n){var t,o=n.getItemOffset,s=n.getEstimatedTotalSize,c=n.getItemSize,m=n.getOffsetForIndexAndAlignment,b=n.getStartIndexForOffset,g=n.getStopIndexForStartIndex,R=n.initInstanceProps,C=n.shouldResetStyleCacheOnItemSizeChange,x=n.validateProps;return t=function(M){we(L,M);function L(v){var e;return e=M.call(this,v)||this,e._instanceProps=R(e.props,ae(e)),e._outerRef=void 0,e._resetIsScrollingTimeoutId=null,e.state={instance:ae(e),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof e.props.initialScrollOffset=="number"?e.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},e._callOnItemsRendered=void 0,e._callOnItemsRendered=ne(function(r,a,u,l){return e.props.onItemsRendered({overscanStartIndex:r,overscanStopIndex:a,visibleStartIndex:u,visibleStopIndex:l})}),e._callOnScroll=void 0,e._callOnScroll=ne(function(r,a,u){return e.props.onScroll({scrollDirection:r,scrollOffset:a,scrollUpdateWasRequested:u})}),e._getItemStyle=void 0,e._getItemStyle=function(r){var a=e.props,u=a.direction,l=a.itemSize,y=a.layout,d=e._getItemStyleCache(C&&l,C&&y,C&&u),f;if(d.hasOwnProperty(r))f=d[r];else{var i=o(e.props,r,e._instanceProps),h=c(e.props,r,e._instanceProps),w=u==="horizontal"||y==="horizontal",T=u==="rtl",E=w?i:0;d[r]=f={position:"absolute",left:T?void 0:E,right:T?E:void 0,top:w?0:i,height:w?"100%":h,width:w?h:"100%"}}return f},e._getItemStyleCache=void 0,e._getItemStyleCache=ne(function(r,a,u){return{}}),e._onScrollHorizontal=function(r){var a=r.currentTarget,u=a.clientWidth,l=a.scrollLeft,y=a.scrollWidth;e.setState(function(d){if(d.scrollOffset===l)return null;var f=e.props.direction,i=l;if(f==="rtl")switch(me()){case"negative":i=-l;break;case"positive-descending":i=y-u-l;break}return i=Math.max(0,Math.min(i,y-u)),{isScrolling:!0,scrollDirection:d.scrollOffset<i?"forward":"backward",scrollOffset:i,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._onScrollVertical=function(r){var a=r.currentTarget,u=a.clientHeight,l=a.scrollHeight,y=a.scrollTop;e.setState(function(d){if(d.scrollOffset===y)return null;var f=Math.max(0,Math.min(y,l-u));return{isScrolling:!0,scrollDirection:d.scrollOffset<f?"forward":"backward",scrollOffset:f,scrollUpdateWasRequested:!1}},e._resetIsScrollingDebounced)},e._outerRefSetter=function(r){var a=e.props.outerRef;e._outerRef=r,typeof a=="function"?a(r):a!=null&&typeof a=="object"&&a.hasOwnProperty("current")&&(a.current=r)},e._resetIsScrollingDebounced=function(){e._resetIsScrollingTimeoutId!==null&&pe(e._resetIsScrollingTimeoutId),e._resetIsScrollingTimeoutId=Ye(e._resetIsScrolling,Qe)},e._resetIsScrolling=function(){e._resetIsScrollingTimeoutId=null,e.setState({isScrolling:!1},function(){e._getItemStyleCache(-1,null)})},e}L.getDerivedStateFromProps=function(e,r){return Ze(e,r),x(e),null};var I=L.prototype;return I.scrollTo=function(e){e=Math.max(0,e),this.setState(function(r){return r.scrollOffset===e?null:{scrollDirection:r.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},I.scrollToItem=function(e,r){r===void 0&&(r="auto");var a=this.props,u=a.itemCount,l=a.layout,y=this.state.scrollOffset;e=Math.max(0,Math.min(e,u-1));var d=0;if(this._outerRef){var f=this._outerRef;l==="vertical"?d=f.scrollWidth>f.clientWidth?fe():0:d=f.scrollHeight>f.clientHeight?fe():0}this.scrollTo(m(this.props,e,r,y,this._instanceProps,d))},I.componentDidMount=function(){var e=this.props,r=e.direction,a=e.initialScrollOffset,u=e.layout;if(typeof a=="number"&&this._outerRef!=null){var l=this._outerRef;r==="horizontal"||u==="horizontal"?l.scrollLeft=a:l.scrollTop=a}this._callPropsCallbacks()},I.componentDidUpdate=function(){var e=this.props,r=e.direction,a=e.layout,u=this.state,l=u.scrollOffset,y=u.scrollUpdateWasRequested;if(y&&this._outerRef!=null){var d=this._outerRef;if(r==="horizontal"||a==="horizontal")if(r==="rtl")switch(me()){case"negative":d.scrollLeft=-l;break;case"positive-ascending":d.scrollLeft=l;break;default:var f=d.clientWidth,i=d.scrollWidth;d.scrollLeft=i-f-l;break}else d.scrollLeft=l;else d.scrollTop=l}this._callPropsCallbacks()},I.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&pe(this._resetIsScrollingTimeoutId)},I.render=function(){var e=this.props,r=e.children,a=e.className,u=e.direction,l=e.height,y=e.innerRef,d=e.innerElementType,f=e.innerTagName,i=e.itemCount,h=e.itemData,w=e.itemKey,T=w===void 0?Je:w,E=e.layout,k=e.outerElementType,P=e.outerTagName,_=e.style,z=e.useIsScrolling,S=e.width,D=this.state.isScrolling,j=u==="horizontal"||E==="horizontal",N=j?this._onScrollHorizontal:this._onScrollVertical,$=this._getRangeToRender(),A=$[0],H=$[1],G=[];if(i>0)for(var q=A;q<=H;q++)G.push(O.createElement(r,{data:h,key:T(q,h),index:q,isScrolling:z?D:void 0,style:this._getItemStyle(q)}));var re=s(this.props,this._instanceProps);return O.createElement(k||P||"div",{className:a,onScroll:N,ref:this._outerRefSetter,style:Te({position:"relative",height:l,width:S,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:u},_)},O.createElement(d||f||"div",{children:G,ref:y,style:{height:j?"100%":re,pointerEvents:D?"none":void 0,width:j?re:"100%"}}))},I._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var e=this.props.itemCount;if(e>0){var r=this._getRangeToRender(),a=r[0],u=r[1],l=r[2],y=r[3];this._callOnItemsRendered(a,u,l,y)}}if(typeof this.props.onScroll=="function"){var d=this.state,f=d.scrollDirection,i=d.scrollOffset,h=d.scrollUpdateWasRequested;this._callOnScroll(f,i,h)}},I._getRangeToRender=function(){var e=this.props,r=e.itemCount,a=e.overscanCount,u=this.state,l=u.isScrolling,y=u.scrollDirection,d=u.scrollOffset;if(r===0)return[0,0,0,0];var f=b(this.props,d,this._instanceProps),i=g(this.props,f,d,this._instanceProps),h=!l||y==="backward"?Math.max(1,a):1,w=!l||y==="forward"?Math.max(1,a):1;return[Math.max(0,f-h),Math.max(0,Math.min(r-1,i+w)),f,i]},L}(O.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var Ze=function(t,o){var s=t.children,c=t.direction,m=t.height,b=t.layout,g=t.innerTagName,R=t.outerTagName,C=t.width,x=o.instance;{(g!=null||R!=null)&&X&&!X.has(x)&&(X.add(x),console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead."));var M=c==="horizontal"||b==="horizontal";switch(c){case"horizontal":case"vertical":J&&!J.has(x)&&(J.add(x),console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.'));break;case"ltr":case"rtl":break;default:throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". '+('"'+c+'" was specified.'))}switch(b){case"horizontal":case"vertical":break;default:throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". '+('"'+b+'" was specified.'))}if(s==null)throw Error('An invalid "children" prop has been specified. Value should be a React component. '+('"'+(s===null?"null":typeof s)+'" was specified.'));if(M&&typeof C!="number")throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. '+('"'+(C===null?"null":typeof C)+'" was specified.'));if(!M&&typeof m!="number")throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. '+('"'+(m===null?"null":typeof m)+'" was specified.'))}},et=Xe({getItemOffset:function(t,o){var s=t.itemSize;return o*s},getItemSize:function(t,o){var s=t.itemSize;return s},getEstimatedTotalSize:function(t){var o=t.itemCount,s=t.itemSize;return s*o},getOffsetForIndexAndAlignment:function(t,o,s,c,m,b){var g=t.direction,R=t.height,C=t.itemCount,x=t.itemSize,M=t.layout,L=t.width,I=g==="horizontal"||M==="horizontal",v=I?L:R,e=Math.max(0,C*x-v),r=Math.min(e,o*x),a=Math.max(0,o*x-v+x+b);switch(s==="smart"&&(c>=a-v&&c<=r+v?s="auto":s="center"),s){case"start":return r;case"end":return a;case"center":{var u=Math.round(a+(r-a)/2);return u<Math.ceil(v/2)?0:u>e+Math.floor(v/2)?e:u}case"auto":default:return c>=a&&c<=r?c:c<a?a:r}},getStartIndexForOffset:function(t,o){var s=t.itemCount,c=t.itemSize;return Math.max(0,Math.min(s-1,Math.floor(o/c)))},getStopIndexForStartIndex:function(t,o,s){var c=t.direction,m=t.height,b=t.itemCount,g=t.itemSize,R=t.layout,C=t.width,x=c==="horizontal"||R==="horizontal",M=o*g,L=x?C:m,I=Math.ceil((L+s-M)/g);return Math.max(0,Math.min(b-1,o+I-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){var o=t.itemSize;if(typeof o!="number")throw Error('An invalid "itemSize" prop has been specified. Value should be a number. '+('"'+(o===null?"null":typeof o)+'" was specified.'))}});const[bt,tt]=Re("ComponentContext",{id:void 0,level:-1,uid:void 0,type:void 0});function Ie(n,t){const o=te(n),s=de(t,b=>b.removeFieldRow),c=de(t,b=>b.addFieldRow);return b=>{if(o.value&&o.value.connect){const g=o.value.connect.findIndex(R=>R.id===b.id);if(g>=0){s(`${n}.connect`,g);return}}c(`${n}.disconnect`,{id:b.id})}}const B=5,_e=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"],nt=O.forwardRef(({disabled:n,label:t,...o},s)=>{const[c,m]=O.useState(1),{document:b,model:g}=Ce(),R=b?.documentId,{formatMessage:C}=ee(),[{query:x}]=ge(),M=ve(x),I=o.attribute.relation.toLowerCase().includes("morph")||n,{id:v,uid:e}=tt("RelationsField",({uid:S,id:D})=>({id:D,uid:S})),r=v?v.toString():R,a=e??g,[u]=o.name.split(".").slice(-1),{data:l,isLoading:y,isFetching:d}=He({model:a,targetField:u,id:r,params:{...M,pageSize:B,page:c}},{refetchOnMountOrArgChange:!0,skip:!r,selectFromResult:S=>({...S,data:{...S.data,results:S.data?.results?S.data.results:[]}})}),f=()=>{m(S=>S+1)},i=te(o.name),h=y||d,w="pagination"in l&&l.pagination?l.pagination.total:0,T=(i.value?.connect??[]).filter(S=>l.results.findIndex(D=>D.id===S.id)===-1).length??0,E=i.value?.disconnect?.length??0,k=w+T-E,P=O.useMemo(()=>{const S={field:i.value,href:`../${se}/${o.attribute.targetModel}`,mainField:o.mainField};return[...xe(it(S),rt(S),at(S))([...l.results]),...i.value?.connect??[]].sort((N,$)=>N.__temp_key__<$.__temp_key__?-1:N.__temp_key__>$.__temp_key__?1:0)},[l.results,i.value,o.attribute.targetModel,o.mainField]),_=Ie(o.name,"RelationsField"),z=S=>{const[D]=P.slice(-1),j={id:S.id,status:S.status,__temp_key__:Se(D?.__temp_key__??null,null,1)[0],[o.mainField?.name??"documentId"]:S[o.mainField?.name??"documentId"],label:ie(S,o.mainField),href:`../${se}/${o.attribute.targetModel}/${S.documentId}`};_e.includes(o.attribute.relation)?(i.value?.connect?.forEach(_),P.forEach(_),i.onChange(`${o.name}.connect`,[j])):i.onChange(`${o.name}.connect`,[...i.value?.connect??[],j])};return p.jsxs(V,{ref:s,direction:"column",gap:3,justifyContent:"space-between",alignItems:"stretch",wrap:"wrap",children:[p.jsxs(ot,{direction:"column",alignItems:"start",gap:2,width:"100%",children:[p.jsx(st,{disabled:I,id:r,label:`${t} ${k>0?`(${k})`:""}`,model:a,onChange:z,...o}),"pagination"in l&&l.pagination&&l.pagination.pageCount>l.pagination.page?p.jsx(Me,{disabled:h,onClick:f,loading:h,startIcon:p.jsx(Oe,{}),shrink:0,children:C({id:F("relation.loadMore"),defaultMessage:"Load More"})}):null]}),p.jsx(lt,{data:P,serverData:l.results,disabled:I,name:o.name,isLoading:h,relationType:o.attribute.relation})]})}),ot=K(V)`
  & > div {
    width: 100%;
  }
`,it=({field:n})=>t=>t.filter(o=>(n?.connect??[]).findIndex(c=>c.id===o.id)===-1),rt=({field:n})=>t=>t.filter(o=>(n?.disconnect??[]).findIndex(c=>c.id===o.id)===-1),at=({mainField:n,href:t})=>o=>o.map(s=>({...s,[n?.name??"documentId"]:s[n?.name??"documentId"],label:ie(s,n),href:`${t}/${s.documentId}`})),st=({hint:n,id:t,model:o,label:s,labelAction:c,name:m,mainField:b,placeholder:g,required:R,unique:C,"aria-label":x,onChange:M,...L})=>{const[I,v]=O.useState(""),[e,r]=O.useState({_q:"",page:1}),{toggleNotification:a}=ze(),[{query:u}]=ge(),{formatMessage:l}=ee(),y=Le(m),d=te(m),[f,{data:i,isLoading:h}]=qe();O.useEffect(()=>{const[_]=m.split(".").slice(-1);f({model:o,targetField:_,params:{...ve(u),id:t??"",pageSize:10,idsToInclude:d.value?.disconnect?.map(z=>z.id.toString())??[],idsToOmit:d.value?.connect?.map(z=>z.id.toString())??[],...e}})},[d.value?.connect,d.value?.disconnect,t,o,m,u,f,e]);const w=async _=>{r(z=>({...z,_q:_,page:1}))},T=i?.pagination?i.pagination.page<i.pagination.pageCount:!1,E=i?.results??[],k=_=>{if(!_)return;const z=E.find(S=>S.id.toString()===_);if(!z){console.error("You've tried to add a relation with an id that does not exist in the options you can see, this is likely a bug with Strapi. Please open an issue."),a({message:l({id:F("relation.error-adding-relation"),defaultMessage:"An error occurred while trying to add the relation."}),type:"danger"});return}M(z)},P=()=>{!i||!i.pagination||i.pagination.page<i.pagination.pageCount&&r(_=>({..._,page:_.page+1}))};return O.useLayoutEffect(()=>{v("")},[d.value]),p.jsxs(Y.Root,{error:d.error,hint:n,name:m,required:R,children:[p.jsx(Y.Label,{action:c,children:s}),p.jsx(Ee,{ref:y,name:m,autocomplete:"list",placeholder:g||l({id:F("relation.add"),defaultMessage:"Add relation"}),hasMoreItems:T,loading:h,onOpenChange:()=>{w(I??"")},noOptionsMessage:()=>l({id:F("relation.notAvailable"),defaultMessage:"No relations available"}),loadingMessage:l({id:F("relation.isLoading"),defaultMessage:"Relations are loading"}),onLoadMore:P,textValue:I,onChange:k,onTextValueChange:_=>{v(_)},onInputChange:_=>{w(_.currentTarget.value)},...L,children:E.map(_=>{const z=ie(_,b);return p.jsx(De,{value:_.id.toString(),textValue:z,children:p.jsxs(V,{gap:2,justifyContent:"space-between",children:[p.jsx(be,{ellipsis:!0,children:z}),_.status?p.jsx(ye,{status:_.status}):null]})},_.id)})}),p.jsx(Y.Error,{}),p.jsx(Y.Hint,{})]})},Q=50,Z=4,lt=({data:n,serverData:t,disabled:o,name:s,isLoading:c,relationType:m})=>{const b=O.useId(),{formatMessage:g}=ee(),R=O.useRef(null),C=O.useRef(null),[x,M]=O.useState(),[L,I]=O.useState(""),v=te(s);O.useEffect(()=>{if(n.length<=B)return M(void 0);const i=w=>{const T=w.target,E=T.parentNode.scrollHeight,k=T.scrollHeight-T.scrollTop;return T.scrollTop===0?M("bottom"):M(k===E?"top":"top-bottom")},h=C?.current;return!c&&n.length>0&&h&&C.current.addEventListener("scroll",i),()=>{h&&h.removeEventListener("scroll",i)}},[c,n.length]);const e=i=>`${i+1} of ${n.length}`,r=(i,h)=>{const w=n[h];I(g({id:F("dnd.reorder"),defaultMessage:"{item}, moved. New position in list: {position}."},{item:w.label??w.documentId,position:e(i)}));const T=[...n],E=n[h],k=h>i?T[i-1]?.__temp_key__:T[i]?.__temp_key__,P=h>i?T[i]?.__temp_key__:T[i+1]?.__temp_key__,[_]=Se(k,P,1);T.splice(h,1),T.splice(i,0,{...E,__temp_key__:_});const z=T.reduce((S,D,j,N)=>{const $=t.find(H=>H.documentId===D.documentId),A=N[j+1];if(!$||$.__temp_key__!==D.__temp_key__){const H=A?{before:A.documentId,locale:A.locale,status:A.status}:{end:!0},G={...D,position:H};return[...S,G]}return S},[]).toReversed();v.onChange(`${s}.connect`,z)},a=i=>{const h=n[i];I(g({id:F("dnd.grab-item"),defaultMessage:"{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel."},{item:h.label??h.documentId,position:e(i)}))},u=i=>{const{href:h,label:w,...T}=n[i];I(g({id:F("dnd.drop-item"),defaultMessage:"{item}, dropped. Final position in list: {position}."},{item:w??T.documentId,position:e(i)}))},l=i=>{const h=n[i];I(g({id:F("dnd.cancel-item"),defaultMessage:"{item}, dropped. Re-order cancelled."},{item:h.label??h.documentId}))},y=Ie(s,"RelationsList"),d=!_e.includes(m),f=n.length>B?Math.min(n.length,B)*(Q+Z)+Q/2:Math.min(n.length,B)*(Q+Z);return p.jsxs(ct,{$overflowDirection:x,children:[p.jsx(le,{id:b,children:g({id:F("dnd.instructions"),defaultMessage:"Press spacebar to grab and re-order"})}),p.jsx(le,{"aria-live":"assertive",children:L}),p.jsx(et,{height:f,ref:R,outerRef:C,itemCount:n.length,itemSize:Q+Z,itemData:{ariaDescribedBy:b,canDrag:d,disabled:o,handleCancel:l,handleDropItem:u,handleGrabItem:a,handleMoveItem:r,name:s,handleDisconnect:y,relations:n},itemKey:i=>n[i].id,innerElementType:"ol",children:dt})]})},ct=K(U)`
  position: relative;
  overflow: hidden;
  flex: 1;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({$overflowDirection:n})=>n==="top-bottom"||n==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({$overflowDirection:n})=>n==="top-bottom"||n==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`,dt=({data:n,index:t,style:o})=>{const{ariaDescribedBy:s,canDrag:c=!1,disabled:m=!1,handleCancel:b,handleDisconnect:g,handleDropItem:R,handleGrabItem:C,handleMoveItem:x,name:M,relations:L}=n,{formatMessage:I}=ee(),{href:v,documentId:e,label:r,status:a}=L[t],[{handlerId:u,isDragging:l,handleKeyDown:y},d,f,i,h]=Ae(c&&!m,{type:`${We.RELATION}_${M}`,index:t,item:{displayedValue:r,status:a,id:e,index:t},onMoveItem:x,onDropItem:R,onGrabItem:C,onCancel:b,dropSensitivity:Ve.REGULAR}),w=Fe(d,i);return O.useEffect(()=>{h(Be())},[h]),p.jsx(U,{style:o,tag:"li",ref:f,"aria-describedby":s,cursor:c?"all-scroll":"default",children:l?p.jsx(pt,{}):p.jsxs(V,{paddingTop:2,paddingBottom:2,paddingLeft:c?2:4,paddingRight:4,hasRadius:!0,borderColor:"neutral200",background:m?"neutral150":"neutral0",justifyContent:"space-between",ref:w,"data-handler-id":u,children:[p.jsxs(ut,{gap:1,children:[c?p.jsx(ce,{tag:"div",role:"button",tabIndex:0,withTooltip:!1,label:I({id:F("components.RelationInput.icon-button-aria-label"),defaultMessage:"Drag"}),variant:"ghost",onKeyDown:y,disabled:m,children:p.jsx(ke,{})}):null,p.jsxs(V,{width:"100%",minWidth:0,justifyContent:"space-between",children:[p.jsx(U,{minWidth:0,paddingTop:1,paddingBottom:1,paddingRight:4,children:p.jsx(Pe,{description:r,children:v?p.jsx(ht,{tag:je,to:v,isExternal:!1,children:r}):p.jsx(be,{textColor:m?"neutral600":"primary600",ellipsis:!0,children:r})})}),a?p.jsx(ye,{status:a}):null]})]}),p.jsx(U,{paddingLeft:4,children:p.jsx(ce,{onClick:()=>g(L[t]),disabled:m,label:I({id:F("relation.disconnect"),defaultMessage:"Remove"}),variant:"ghost",size:"S",children:p.jsx($e,{})})})]})})},ut=K(V)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`,yt=K.button`
  svg path {
    fill: ${({theme:n,disabled:t})=>t?n.colors.neutral600:n.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:n,disabled:t})=>!t&&n.colors.neutral600};
  }
`,ht=K(Ne)`
  display: block;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`,pt=()=>p.jsx(U,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,hasRadius:!0,borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",background:"primary100",height:`calc(100% - ${Z}px)`}),St=O.memo(nt);export{bt as C,yt as D,ut as F,ht as L,St as M,tt as u};
