import{m as l,bG as p,o as x,bH as u,p as s,bI as r,B as a,F as t,T as c}from"./strapi-Ddy60Q00.js";import{S as g}from"./SSOProviders-sy3Xon2A-DMjsvTO4.js";const d=l(p)`
  flex: 1;
`,j=i=>{const{formatMessage:n}=x(),{isLoading:o,data:e=[]}=u(void 0,{skip:!window.strapi.features.isEnabled(window.strapi.features.SSO)});return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!o&&e.length===0?s.jsx(r,{...i}):s.jsx(r,{...i,children:s.jsx(a,{paddingTop:7,children:s.jsxs(t,{direction:"column",alignItems:"stretch",gap:7,children:[s.jsxs(t,{children:[s.jsx(d,{}),s.jsx(a,{paddingLeft:3,paddingRight:3,children:s.jsx(c,{variant:"sigma",textColor:"neutral600",children:n({id:"Auth.login.sso.divider"})})}),s.jsx(d,{})]}),s.jsx(g,{providers:e,displayAllProviders:!1})]})})})};export{j as LoginEE};