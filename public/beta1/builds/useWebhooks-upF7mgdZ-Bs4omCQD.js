import{bf as k}from"./strapi-Ddy60Q00.js";const b=k.enhanceEndpoints({addTagTypes:["Webhook"]}).injectEndpoints({endpoints:t=>({getWebhooks:t.query({query:e=>({url:`/admin/webhooks/${e?.id??""}`,method:"GET"}),transformResponse:e=>Array.isArray(e.data)?e.data:[e.data],providesTags:(e,r,o)=>typeof o=="object"&&"id"in o?[{type:"Webhook",id:o.id}]:[...e?.map(({id:a})=>({type:"Webhook",id:a}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:t.mutation({query:e=>({url:"/admin/webhooks",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:t.mutation({query:({id:e,...r})=>({url:`/admin/webhooks/${e}`,method:"PUT",data:r}),transformResponse:e=>e.data,invalidatesTags:(e,r,{id:o})=>[{type:"Webhook",id:o}]}),triggerWebhook:t.mutation({query:e=>({url:`/admin/webhooks/${e}/trigger`,method:"POST"}),transformResponse:e=>e.data}),deleteManyWebhooks:t.mutation({query:e=>({url:"/admin/webhooks/batch-delete",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:(e,r,{ids:o})=>o.map(a=>({type:"Webhook",id:a}))})}),overrideExisting:!1}),{useGetWebhooksQuery:m,useCreateWebhookMutation:p,useUpdateWebhookMutation:W,useTriggerWebhookMutation:y,useDeleteManyWebhooksMutation:c}=b,T=(t=void 0,e)=>{const{data:r,isLoading:o,error:a}=m(t,e),[s,{error:n}]=p(),[i,{error:d}]=W(),[h]=y(),[u]=c();return{webhooks:r,isLoading:o,error:a||n||d,createWebhook:s,updateWebhook:i,triggerWebhook:h,deleteManyWebhooks:u}};export{T as u};
