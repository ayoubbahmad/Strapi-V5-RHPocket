import{m as h,bG as c,M as u,o as x,bH as p,p as s,bL as g,bM as j,V as f,bN as m,bO as v,bP as b,B as t,T as a,F as n,bk as w,Z as L,L as C,ad as S}from"./strapi-Ddy60Q00.js";import{S as k}from"./SSOProviders-sy3Xon2A-DMjsvTO4.js";const y=()=>{const d=u(),{formatMessage:i}=x(),{isLoading:e,data:r=[]}=p(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)}),l=()=>{d("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!e&&r.length===0?s.jsx(g,{to:"/auth/login"}):s.jsx(j,{children:s.jsxs(f,{children:[s.jsxs(m,{children:[s.jsxs(v,{children:[s.jsx(b,{}),s.jsx(t,{paddingTop:6,paddingBottom:1,children:s.jsx(a,{tag:"h1",variant:"alpha",children:i({id:"Auth.form.welcome.title"})})}),s.jsx(t,{paddingBottom:7,children:s.jsx(a,{variant:"epsilon",textColor:"neutral600",children:i({id:"Auth.login.sso.subtitle"})})})]}),s.jsxs(n,{direction:"column",alignItems:"stretch",gap:7,children:[e?s.jsx(n,{justifyContent:"center",children:s.jsx(w,{children:i({id:"Auth.login.sso.loading"})})}):s.jsx(k,{providers:r}),s.jsxs(n,{children:[s.jsx(o,{}),s.jsx(t,{paddingLeft:3,paddingRight:3,children:s.jsx(a,{variant:"sigma",textColor:"neutral600",children:i({id:"or"})})}),s.jsx(o,{})]}),s.jsx(L,{fullWidth:!0,size:"L",onClick:l,children:i({id:"Auth.form.button.login.strapi"})})]})]}),s.jsx(n,{justifyContent:"center",children:s.jsx(t,{paddingTop:4,children:s.jsx(C,{tag:S,to:"/auth/forgot-password",children:s.jsx(a,{variant:"pi",children:i({id:"Auth.link.forgot-password"})})})})})]})})},o=h(c)`
  flex: 1;
`,M={providers:y};export{M as FORMS};