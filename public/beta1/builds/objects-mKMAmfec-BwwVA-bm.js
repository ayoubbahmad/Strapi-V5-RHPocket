import{aZ as u,aY as f}from"./strapi-Ddy60Q00.js";function h(t,l,i,n=0){const e=f(l);for(;t&&n<e.length;)t=t[e[n++]];return n!==e.length&&!t||t===void 0?i:t}const g=t=>t!==null&&typeof t=="object"&&!Array.isArray(t),y=t=>String(Math.floor(Number(t)))===t;function m(t,l,i){const n=u(t);let e=n,r=0;const s=f(l);for(;r<s.length-1;r++){const a=s[r],c=h(t,s.slice(0,r+1));if(c&&(g(c)||Array.isArray(c)))e=e[a]=u(c);else{const o=s[r+1];e=e[a]=y(o)&&Number(o)>=0?[]:{}}}return(r===0?t:e)[s[r]]===i?t:(delete e[s[r]],r===0&&i===void 0&&delete n[s[r]],n)}export{h as g,m as s};
