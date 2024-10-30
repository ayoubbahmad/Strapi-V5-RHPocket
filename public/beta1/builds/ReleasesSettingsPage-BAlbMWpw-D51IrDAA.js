import{i as z,s as q,v as d,w as D,av as X,p as i,x as T,b9 as ee,o as Z,a5 as te,K as re,hS as ne,hT as ae,a9 as W,hU as k,Y as w,aA as se,Z as ie,$ as oe,F as le,T as ue,G as y,bn as ce,a0 as h,bo as de,bp as fe,bS as pe}from"./strapi-Ddy60Q00.js";var G={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(G);var ge=G.exports,Y={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){if(n===null||n===!0||n===!1)return NaN;var a=Number(n);return isNaN(a)?a:a<0?Math.ceil(a):Math.floor(a)}e.exports=t.default})(Y,Y.exports);var ve=Y.exports;const me=z(ve);var b={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n){var a=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return a.setUTCFullYear(n.getFullYear()),n.getTime()-a.getTime()}e.exports=t.default})(b,b.exports);var De=b.exports;const H=z(De);function he(e,t){var r=Me(t);return r.formatToParts?we(r,e):xe(r,e)}var Te={year:0,month:1,day:2,hour:3,minute:4,second:5};function we(e,t){try{for(var r=e.formatToParts(t),n=[],a=0;a<r.length;a++){var s=Te[r[a].type];s>=0&&(n[s]=parseInt(r[a].value,10))}return n}catch(o){if(o instanceof RangeError)return[NaN];throw o}}function xe(e,t){var r=e.format(t),n=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(r);return[n[3],n[1],n[2],n[4],n[5],n[6]]}var x={};function Me(e){if(!x[e]){var t=new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:"America/New_York",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(new Date("2014-06-25T04:00:00.123Z")),r=t==="06/25/2014, 00:00:00"||t==="‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";x[e]=r?new Intl.DateTimeFormat("en-US",{hourCycle:"h23",timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}):new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"numeric",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}return x[e]}function C(e,t,r,n,a,s,o){var c=new Date(0);return c.setUTCFullYear(e,t,r),c.setUTCHours(n,a,s,o),c}var O=36e5,Ne=6e4,M={timezone:/([Z+-].*)$/,timezoneZ:/^(Z)$/,timezoneHH:/^([+-]\d{2})$/,timezoneHHMM:/^([+-])(\d{2}):?(\d{2})$/};function B(e,t,r){var n,a;if(!e||(n=M.timezoneZ.exec(e),n))return 0;var s;if(n=M.timezoneHH.exec(e),n)return s=parseInt(n[1],10),F(s)?-(s*O):NaN;if(n=M.timezoneHHMM.exec(e),n){s=parseInt(n[2],10);var o=parseInt(n[3],10);return F(s,o)?(a=Math.abs(s)*O+o*Ne,n[1]==="+"?-a:a):NaN}if(be(e)){t=new Date(t||Date.now());var c=Ie(t),f=S(c,e),p=Ye(t,f,e);return-p}return NaN}function Ie(e){return C(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}function S(e,t){var r=he(e,t),n=C(r[0],r[1]-1,r[2],r[3]%24,r[4],r[5],0).getTime(),a=e.getTime(),s=a%1e3;return a-=s>=0?s:1e3+s,n-a}function Ye(e,t,r){var n=e.getTime(),a=n-t,s=S(new Date(a),r);if(t===s)return t;a-=s-t;var o=S(new Date(a),r);return s===o?s:Math.max(s,o)}function F(e,t){return-23<=e&&e<=23&&(t==null||0<=t&&t<=59)}var $={};function be(e){if($[e])return!0;try{return new Intl.DateTimeFormat(void 0,{timeZone:e}),$[e]=!0,!0}catch{return!1}}var V=/(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,N=36e5,A=6e4,Se=2,l={dateTimePattern:/^([0-9W+-]+)(T| )(.*)/,datePattern:/^([0-9W+-]+)(.*)/,plainTime:/:/,YY:/^(\d{2})$/,YYY:[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],YYYY:/^(\d{4})/,YYYYY:[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],MM:/^-(\d{2})$/,DDD:/^-?(\d{3})$/,MMDD:/^-?(\d{2})-?(\d{2})$/,Www:/^-?W(\d{2})$/,WwwD:/^-?W(\d{2})-?(\d{1})$/,HH:/^(\d{2}([.,]\d*)?)$/,HHMM:/^(\d{2}):?(\d{2}([.,]\d*)?)$/,HHMMSS:/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,timeZone:V};function E(e,t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");if(e===null)return new Date(NaN);var r=t||{},n=r.additionalDigits==null?Se:me(r.additionalDigits);if(n!==2&&n!==1&&n!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]")return new Date(e.getTime());if(typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]")return new Date(e);if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var a=je(e),s=_e(a.date,n),o=s.year,c=s.restDateString,f=ze(c,o);if(isNaN(f))return new Date(NaN);if(f){var p=f.getTime(),g=0,u;if(a.time&&(g=Ce(a.time),isNaN(g)))return new Date(NaN);if(a.timeZone||r.timeZone){if(u=B(a.timeZone||r.timeZone,new Date(p+g)),isNaN(u))return new Date(NaN)}else u=H(new Date(p+g)),u=H(new Date(p+g+u));return new Date(p+g+u)}else return new Date(NaN)}function je(e){var t={},r=l.dateTimePattern.exec(e),n;if(r?(t.date=r[1],n=r[3]):(r=l.datePattern.exec(e),r?(t.date=r[1],n=r[2]):(t.date=null,n=e)),n){var a=l.timeZone.exec(n);a?(t.time=n.replace(a[1],""),t.timeZone=a[1].trim()):t.time=n}return t}function _e(e,t){var r=l.YYY[t],n=l.YYYYY[t],a;if(a=l.YYYY.exec(e)||n.exec(e),a){var s=a[1];return{year:parseInt(s,10),restDateString:e.slice(s.length)}}if(a=l.YY.exec(e)||r.exec(e),a){var o=a[1];return{year:parseInt(o,10)*100,restDateString:e.slice(o.length)}}return{year:null}}function ze(e,t){if(t===null)return null;var r,n,a,s;if(e.length===0)return n=new Date(0),n.setUTCFullYear(t),n;if(r=l.MM.exec(e),r)return n=new Date(0),a=parseInt(r[1],10)-1,R(t,a)?(n.setUTCFullYear(t,a),n):new Date(NaN);if(r=l.DDD.exec(e),r){n=new Date(0);var o=parseInt(r[1],10);return He(t,o)?(n.setUTCFullYear(t,0,o),n):new Date(NaN)}if(r=l.MMDD.exec(e),r){n=new Date(0),a=parseInt(r[1],10)-1;var c=parseInt(r[2],10);return R(t,a,c)?(n.setUTCFullYear(t,a,c),n):new Date(NaN)}if(r=l.Www.exec(e),r)return s=parseInt(r[1],10)-1,L(t,s)?P(t,s):new Date(NaN);if(r=l.WwwD.exec(e),r){s=parseInt(r[1],10)-1;var f=parseInt(r[2],10)-1;return L(t,s,f)?P(t,s,f):new Date(NaN)}return null}function Ce(e){var t,r,n;if(t=l.HH.exec(e),t)return r=parseFloat(t[1].replace(",",".")),I(r)?r%24*N:NaN;if(t=l.HHMM.exec(e),t)return r=parseInt(t[1],10),n=parseFloat(t[2].replace(",",".")),I(r,n)?r%24*N+n*A:NaN;if(t=l.HHMMSS.exec(e),t){r=parseInt(t[1],10),n=parseInt(t[2],10);var a=parseFloat(t[3].replace(",","."));return I(r,n,a)?r%24*N+n*A+a*1e3:NaN}return null}function P(e,t,r){t=t||0,r=r||0;var n=new Date(0);n.setUTCFullYear(e,0,4);var a=n.getUTCDay()||7,s=t*7+r+1-a;return n.setUTCDate(n.getUTCDate()+s),n}var Ue=[31,28,31,30,31,30,31,31,30,31,30,31],ye=[31,29,31,30,31,30,31,31,30,31,30,31];function J(e){return e%400===0||e%4===0&&e%100!==0}function R(e,t,r){if(t<0||t>11)return!1;if(r!=null){if(r<1)return!1;var n=J(e);if(n&&r>ye[t]||!n&&r>Ue[t])return!1}return!0}function He(e,t){if(t<1)return!1;var r=J(e);return!(r&&t>366||!r&&t>365)}function L(e,t,r){return!(t<0||t>52||r!=null&&(r<0||r>6))}function I(e,t,r){return!(e!=null&&(e<0||e>=25)||t!=null&&(t<0||t>=60)||r!=null&&(r<0||r>=60))}var j={exports:{}},_={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;function r(n,a){if(n==null)throw new TypeError("assign requires that input parameter not be null or undefined");for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s]);return n}e.exports=t.default})(_,_.exports);var Oe=_.exports;(function(e,t){var r=ge.default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var n=r(Oe);function a(s){return(0,n.default)({},s)}e.exports=t.default})(j,j.exports);var Fe=j.exports;const $e=z(Fe);function Ae(e,t,r){if(typeof e=="string"&&!e.match(V)){var n=$e(r);return n.timeZone=t,E(e,n)}var a=E(e,r),s=C(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()).getTime(),o=B(t,new Date(s));return new Date(s+o)}q().shape({name:d().trim().required(D.required.id).nullable(),scheduledAt:d().nullable(),isScheduled:X().optional(),time:d().when("isScheduled",{is:!0,then:d().trim().required(D.required.id),otherwise:d().nullable()}).test("time-in-future-if-today","content-releases.modal.form.time.has-passed",function(e){const{date:t,timezone:r}=this.parent;if(!t||!r||!e)return!0;const n=r.split("&")[1];return Ae(`${t} ${e}`,n)>new Date}),timezone:d().when("isScheduled",{is:!0,then:d().required(D.required.id).nullable(),otherwise:d().nullable()}),date:d().when("isScheduled",{is:!0,then:d().required(D.required.id).nullable(),otherwise:d().nullable()})}).required().noUnknown();const Ee=q().shape({defaultTimezone:d().nullable().default(null)}).required().noUnknown(),U=ee,Pe=()=>{const{formatMessage:e}=Z(),{formatAPIError:t}=te(),{toggleNotification:r}=re(),{data:n,isLoading:a}=ne(),[s,{isLoading:o}]=ae(),c=U(u=>u.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:f}}=W(c),{timezoneList:p}=k(new Date),g=async u=>{const{defaultTimezone:m}=u,K=p.some(v=>v.value===m),Q=!m||!K?{defaultTimezone:null}:{...u};try{const v=await s(Q);"data"in v?r({type:"success",message:e({id:"content-releases.pages.Settings.releases.setting.default-timezone-notification-success",defaultMessage:"Default timezone updated."})}):pe(v.error)?r({type:"danger",message:t(v.error)}):r({type:"danger",message:e({id:"notification.error",defaultMessage:"An error occurred"})})}catch{r({type:"danger",message:e({id:"notification.error",defaultMessage:"An error occurred"})})}};return a?i.jsx(T.Loading,{}):i.jsxs(w.Root,{children:[i.jsx(T.Title,{children:e({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Releases"})}),i.jsx(T.Main,{"aria-busy":a,tabIndex:-1,children:i.jsx(se,{method:"PUT",initialValues:{defaultTimezone:n?.data.defaultTimezone},onSubmit:g,validationSchema:Ee,children:({modified:u,isSubmitting:m})=>i.jsxs(i.Fragment,{children:[i.jsx(w.Header,{primaryAction:f?i.jsx(ie,{disabled:!u||o,loading:m,startIcon:i.jsx(oe,{}),type:"submit",children:e({id:"global.save",defaultMessage:"Save"})}):null,title:e({id:"content-releases.pages.Settings.releases.title",defaultMessage:"Releases"}),subtitle:e({id:"content-releases.pages.Settings.releases.description",defaultMessage:"Create and manage content updates"})}),i.jsx(w.Content,{children:i.jsxs(le,{direction:"column",background:"neutral0",alignItems:"stretch",padding:6,gap:6,shadow:"filterShadow",hasRadius:!0,children:[i.jsx(ue,{variant:"delta",tag:"h2",children:e({id:"content-releases.pages.Settings.releases.preferences.title",defaultMessage:"Preferences"})}),i.jsx(y.Root,{children:i.jsx(y.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:i.jsx(Re,{})})})]})})]})})})]})},Re=()=>{const e=U(s=>s.admin_app.permissions.settings?.releases),{allowedActions:{canUpdate:t}}=W(e),{formatMessage:r}=Z(),{timezoneList:n}=k(new Date),a=ce("defaultTimezone");return i.jsxs(h.Root,{name:"defaultTimezone",hint:r({id:"content-releases.pages.Settings.releases.timezone.hint",defaultMessage:"The timezone of every release can still be changed individually. "}),error:a.error,children:[i.jsx(h.Label,{children:r({id:"content-releases.pages.Settings.releases.timezone.label",defaultMessage:"Default timezone"})}),i.jsx(de,{autocomplete:{type:"list",filter:"contains"},onChange:s=>a.onChange("defaultTimezone",s),onTextValueChange:s=>a.onChange("defaultTimezone",s),onClear:()=>a.onChange("defaultTimezone",""),value:a.value,disabled:!t,children:n.map(s=>i.jsx(fe,{value:s.value,children:s.value.replace(/&/," ")},s.value))}),i.jsx(h.Hint,{}),i.jsx(h.Error,{})]})},qe=()=>{const e=U(t=>t.admin_app.permissions.settings?.releases?.read);return i.jsx(T.Protect,{permissions:e,children:i.jsx(Pe,{})})};export{qe as ProtectedReleasesSettingsPage};