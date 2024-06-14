import{_ as m}from"./BL2FobuT.js";import{_ as R}from"./D2a5xX6z.js";import{_ as u}from"./DlAUqK2U.js";import{g as C,o as l,f as c,i as P,c as y,a,b as t,d as e,w as n,t as x,F as L,r as D,j as S,u as F,k as w}from"./F1WuTW_A.js";import{_ as f,a as g,b as A}from"./CB0qIKt7.js";import{_ as k}from"./CK4tp4Ei.js";import{b as V}from"./CuArXVD-.js";import{_ as Y}from"./C6ZCEtV2.js";const H=C({__name:"property-link-anchor",props:{name:{}},setup(i){return(p,o)=>{const r=V;return l(),c(r,{name:p.name,path:p.$config.public.paths.configuration},null,8,["name","path"])}}}),B={class:"mb-3 border-bottom"},O={key:0},W={key:1},G={class:"px-3"},N="java.lang.String",_=C({__name:"property",props:{name:{},type:{},required:{type:Boolean,default:!0},defaultValue:{default:null},example:{default:null},taskNames:{}},setup(i){const p=/^(?<fqcn>javax?\.(?:[a-z]\w+\.)+[A-Z]\w+?)(?:<[\w.]+>)?$/,o=i,r=P(()=>o.defaultValue===null?"null":o.type===N?`"${o.defaultValue}"`:o.defaultValue),s=P(()=>{var h;if(o.type){const $=p.exec(o.type);if($&&((h=$.groups)!=null&&h.fqcn))return`https://docs.oracle.com/en/java/javase/21/docs/api/java.base/${$.groups.fqcn.replace(/\./g,"/")}.html`}return null}),d=P(()=>o.type===N?`"${o.example}"`:o.example);return(h,$)=>{const I=H,b=f,j=g,U=Y,E=A;return l(),y("article",B,[a("header",null,[a("h4",null,[t(I,{name:h.name},null,8,["name"]),e(" Property "),t(b,null,{default:n(()=>[e(x(h.name),1)]),_:1}),e(),t(j,{path:`${h.$config.public.paths.configuration}#app`,class:"small text-info"},{default:n(()=>[e("↑")]),_:1},8,["path"])]),a("ul",null,[h.taskNames.length>0?(l(),y("li",O,[e(" Related tasks: "),(l(!0),y(L,null,D(h.taskNames,(T,q)=>(l(),y("span",{key:T},[t(U,{name:T},null,8,["name"]),q<h.taskNames.length-1?(l(),y(L,{key:0},[e(", ")],64)):S("",!0)]))),128))])):S("",!0),a("li",null,[e(" Type: "),F(s)?(l(),c(E,{key:0,href:F(s)},{default:n(()=>[t(b,null,{default:n(()=>[e(x(h.type),1)]),_:1})]),_:1},8,["href"])):(l(),c(b,{key:1},{default:n(()=>[e(x(h.type),1)]),_:1}))]),a("li",null,[e(" Required: "),t(b,null,{default:n(()=>[e(x(h.required),1)]),_:1})]),a("li",null,[e(" Default value: "),h.$slots.defaultValue?w(h.$slots,"defaultValue",{key:1}):(l(),c(b,{key:0},{default:n(()=>[e(x(F(r)),1)]),_:1}))]),h.example?(l(),y("li",W,[e(" Example: "),t(b,null,{default:n(()=>[e(x(F(d)),1)]),_:1})])):S("",!0)])]),a("section",G,[w(h.$slots,"default")])])}}}),z={};function M(i,p){const o=m,r=R,s=_;return l(),c(s,{name:"nodeDistributionUrlRoot",type:"java.lang.String","default-value":"https://nodejs.org/dist/","task-names":["installNode"]},{default:n(()=>[a("p",null,[e(" This property is used to build the exact URL to download the distribution, by appending the value of the "),t(o,{name:"nodeDistributionUrlPathPattern"}),e(" property to its value. By default, the plugin attempts to download the distribution from the "),t(r),e(" website. ")])]),_:1})}const Ke=u(z,[["render",M]]),J={},K={class:"card my-3"},Q={class:"card-body"},X=a("h5",{class:"card-title"},"About URL pattern tokens",-1),Z={class:"card-text"},ee={class:"card-text"};function te(i,p){const o=m,r=f,s=R,d=_;return l(),c(d,{name:"nodeDistributionUrlPathPattern",type:"java.lang.String","default-value":"vVERSION/node-vVERSION-ARCH.TYPE","task-names":["installNode"]},{default:n(()=>[a("p",null,[e(" This property is used to build the exact URL to download the distribution, by appending its value to the value of the "),t(o,{name:"nodeDistributionUrlRoot"}),e(" property. This property may be set with a fixed trailing path part (e.g. "),t(r,null,{default:n(()=>[e("dist/node-v20.14.0-win-x64.zip")]),_:1}),e("), or take advantage of the automatic distribution resolution in the plugin, using specific tokens in the pattern such as "),t(r,null,{default:n(()=>[e("VERSION")]),_:1}),e(", "),t(r,null,{default:n(()=>[e("ARCH")]),_:1}),e(", "),t(r,null,{default:n(()=>[e("TYPE")]),_:1}),e(". Then, the exact URL used by default to download the distribution is "),t(r,null,{default:n(()=>[e("https://nodejs.org/dist/vVERSION/node-vVERSION-ARCH.TYPE")]),_:1}),e(". ")]),a("div",K,[a("div",Q,[X,a("p",Z,[e(" The "),t(o,{name:"nodeDistributionUrlRoot"}),e(" property and this property offer a convenient way to download distributions from a custom website - e.g. a website mirroring the official "),t(s),e(" website, and still take advantage of the automatic resolution of the exact URL, based on the current platform's architecture. The property may contain the following tokens: ")]),a("ul",ee,[a("li",null,[t(r,null,{default:n(()=>[e("VERSION")]),_:1}),e(": automatically replaced with the version number set in the "),t(o,{name:"nodeVersion"}),e(" property. ")]),a("li",null,[t(r,null,{default:n(()=>[e("ARCH")]),_:1}),e(": automatically replaced with the architecture ID matching the current platform. For example, if the current O/S is MacOS 64 bits, the plugin replaces the token with "),t(r,null,{default:n(()=>[e("darwin-x64")]),_:1}),e(". ")]),a("li",null,[t(r,null,{default:n(()=>[e("TYPE")]),_:1}),e(": automatically replaced with the type of the distribution file expected for the current platform. For example, if the current O/S is Windows, the plugin replaces the token with "),t(r,null,{default:n(()=>[e("zip")]),_:1}),e(". ")])])])])]),_:1})}const Qe=u(J,[["render",te]]),ne={},oe={class:"text-danger px-2"},re=a("i",{class:"fas fa-exclamation-triangle me-1"},null,-1);function ae(i,p){return l(),y("p",oe,[re,w(i.$slots,"default")])}const v=u(ne,[["render",ae]]),se={};function ie(i,p){const o=f,r=m,s=v,d=_;return l(),c(d,{name:"nodeDistributionServerUsername",type:"java.lang.String",required:!1,"task-names":["installNode"]},{default:n(()=>[a("p",null,[e(" This property may be used to download the distribution with a given identity (BASIC scheme server-side). When not "),t(o,null,{default:n(()=>[e("null")]),_:1}),e(", the "),t(r,{name:"nodeDistributionServerPassword"}),e(" property is also required. ")]),t(s,null,{default:n(()=>[e(" SECURITY: do not to store a plain text username in the build script. Store it in an environment variable or an external user property, and use one or the other as the value of this property. ")]),_:1})]),_:1})}const Xe=u(se,[["render",ie]]),le={};function pe(i,p){const o=m,r=f,s=v,d=_;return l(),c(d,{name:"nodeDistributionServerPassword",type:"java.lang.String",required:!1,"task-names":["installNode"]},{default:n(()=>[a("p",null,[e(" Set this property to authenticate the distribution download (BASIC scheme server-side). The property is ignored if the "),t(o,{name:"nodeDistributionServerUsername"}),e(" property is "),t(r,null,{default:n(()=>[e("null")]),_:1}),e(". ")]),t(s,null,{default:n(()=>[e(" SECURITY: do not to store a plain text password in the build script. Store it in an environment variable or an external user property, and use one or the other as the value of this property. ")]),_:1})]),_:1})}const Ze=u(le,[["render",pe]]),ce={},ue=a("p",null,"This property may be used to customize the command line to install frontend dependencies.",-1);function _e(i,p){const o=g,r=k,s=_;return l(),c(s,{name:"installScript",type:"java.lang.String","default-value":"install",example:"ci","task-names":["installFrontend"]},{default:n(()=>[ue,t(r,null,{default:n(()=>[e(" Take a look at this "),t(o,{path:`${i.$config.public.paths.configuration}#script-settings`},{default:n(()=>[e("guide")]),_:1},8,["path"]),e(" about script settings. ")]),_:1})]),_:1})}const et=u(ce,[["render",_e]]),de={};function he(i,p){const o=f,r=g,s=k,d=_;return l(),c(d,{name:"cleanScript",type:"java.lang.String",required:!1,example:"run clean","task-names":["cleanFrontend"]},{default:n(()=>[a("p",null,[e(" This property may be used to clean frontend's compiled artifacts, when they are generated out of the "),t(o,null,{default:n(()=>[e("${project.buildDir}")]),_:1}),e(" directory. ")]),t(s,null,{default:n(()=>[e(" Take a look at this "),t(r,{path:`${i.$config.public.paths.configuration}#script-settings`},{default:n(()=>[e("guide")]),_:1},8,["path"]),e(" about script settings. ")]),_:1})]),_:1})}const tt=u(de,[["render",he]]),me={},fe=a("p",null,"Script called to build frontend artifacts.",-1);function ge(i,p){const o=g,r=k,s=_;return l(),c(s,{name:"assembleScript",type:"java.lang.String",required:!1,example:"run assemble","task-names":["assembleFrontend","publishFrontend"]},{default:n(()=>[fe,t(r,null,{default:n(()=>[e(" Take a look at this "),t(o,{path:`${i.$config.public.paths.configuration}#script-settings`},{default:n(()=>[e("guide")]),_:1},8,["path"]),e(" about script settings. ")]),_:1})]),_:1})}const nt=u(me,[["render",ge]]),ye={},be=a("p",null,"Script called to check the frontend application.",-1);function xe(i,p){const o=g,r=k,s=_;return l(),c(s,{name:"checkScript",type:"java.lang.String",required:!1,example:"run check","task-names":["checkFrontend"]},{default:n(()=>[be,t(r,null,{default:n(()=>[e(" Take a look at this "),t(o,{path:`${i.$config.public.paths.configuration}#script-settings`},{default:n(()=>[e("guide")]),_:1},8,["path"]),e(" about script settings. ")]),_:1})]),_:1})}const ot=u(ye,[["render",xe]]),ve={},ke=a("p",null,"Script called to publish the frontend artifacts.",-1);function $e(i,p){const o=g,r=k,s=_;return l(),c(s,{name:"publishScript",type:"java.lang.String",required:!1,example:"run publish","task-names":["publishFrontend"]},{default:n(()=>[ke,t(r,null,{default:n(()=>[e(" Take a look at this "),t(o,{path:`${i.$config.public.paths.configuration}#script-settings`},{default:n(()=>[e("guide")]),_:1},8,["path"]),e(" about script settings. ")]),_:1})]),_:1})}const rt=u(ve,[["render",$e]]),Fe={};function Pe(i,p){const o=m,r=f,s=g,d=_;return l(),c(d,{name:"httpsProxyHost",type:"java.lang.String",required:!1,example:"127.0.0.1","task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" IP address or domain name of a HTTP proxy server to use when downloading distributions with a secure HTTP protocol (e.g. the "),t(o,{name:"nodeDistributionUrlRoot"}),e(" property and/or the "),t(o,{name:"yarnDistributionUrlRoot"}),e(" property use the "),t(r,null,{default:n(()=>[e("https")]),_:1}),e(" protocol). The "),t(s,{path:`${i.$config.public.paths.configuration}#proxy-resolution-process`},{default:n(()=>[e("proxy resolution process")]),_:1},8,["path"]),e(" hereafter explains how this setting apply. ")])]),_:1})}const at=u(Fe,[["render",Pe]]),Se={};function we(i,p){const o=m,r=_;return l(),c(r,{name:"httpsProxyPort",type:"int","default-value":"443","task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" Port of the proxy server used for secure HTTP requests. This property is ignored unless the "),t(o,{name:"httpsProxyHost"}),e(" property is defined. ")])]),_:1})}const st=u(Se,[["render",we]]),Te={};function Le(i,p){const o=m,r=v,s=_;return l(),c(s,{name:"httpsProxyUsername",type:"java.lang.String",required:!1,"task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" This property may be used to download distributions through the proxy server with a given identity (BASIC scheme server-side). This property is ignored when no proxy server is used (see the "),t(o,{name:"httpsProxyHost"}),e(" property). Otherwise, the "),t(o,{name:"httpsProxyPassword"}),e(" property is also required. ")]),t(r,null,{default:n(()=>[e(" SECURITY: do not to store a plain text username in the build script. Store it in an environment variable or an external user property, and use one or the other as the value of this property. ")]),_:1})]),_:1})}const it=u(Te,[["render",Le]]),Ne={};function Re(i,p){const o=m,r=f,s=v,d=_;return l(),c(d,{name:"httpsProxyPassword",type:"java.lang.String",required:!1,"task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" Set this property to download distributions through the proxy server with an authenticated identity (BASIC scheme server-side). The property is ignored unless the "),t(o,{name:"httpsProxyUsername"}),e(" property is not "),t(r,null,{default:n(()=>[e("null")]),_:1}),e(". ")]),t(s,null,{default:n(()=>[e(" SECURITY: do not to store a plain text password in the build script. Store it in an environment variable or an external user property, and use one or the other as the value of this property. ")]),_:1})]),_:1})}const lt=u(Ne,[["render",Re]]),Ce={};function Ie(i,p){const o=m,r=f,s=g,d=_;return l(),c(d,{name:"httpProxyHost",type:"java.lang.String",required:!1,example:"127.0.0.1","task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" IP address or domain name of a HTTP proxy server to use when downloading distributions with a non-secure HTTP protocol (e.g. the "),t(o,{name:"nodeDistributionUrlRoot"}),e(" property and/or the "),t(o,{name:"yarnDistributionUrlRoot"}),e(" property use the "),t(r,null,{default:n(()=>[e("http")]),_:1}),e(" protocol). The "),t(s,{path:`${i.$config.public.paths.configuration}#proxy-resolution-process`},{default:n(()=>[e("proxy resolution process")]),_:1},8,["path"]),e(" hereafter explains how this setting apply. ")])]),_:1})}const pt=u(Ce,[["render",Ie]]),je={};function Ue(i,p){const o=m,r=_;return l(),c(r,{name:"httpProxyPort",type:"int","default-value":"443","task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" Port of the proxy server used for secure HTTP requests. This property is ignored unless the "),t(o,{name:"httpProxyHost"}),e(" property is defined. ")])]),_:1})}const ct=u(je,[["render",Ue]]),Ee={};function qe(i,p){const o=m,r=v,s=_;return l(),c(s,{name:"httpProxyUsername",type:"java.lang.String",required:!1,"task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" This property may be used to download distributions through the proxy server with a given identity (BASIC scheme server-side). This property is ignored when no proxy server is used (see the "),t(o,{name:"httpProxyHost"}),e(" property). Otherwise, the "),t(o,{name:"httpProxyPassword"}),e(" property is also required. ")]),t(r,null,{default:n(()=>[e(" SECURITY: do not to store a plain text username in the build script. Store it in an environment variable or an external user property, and use one or the other as the value of this property. ")]),_:1})]),_:1})}const ut=u(Ee,[["render",qe]]),De={};function Ae(i,p){const o=m,r=f,s=v,d=_;return l(),c(d,{name:"httpProxyPassword",type:"java.lang.String",required:!1,"task-names":["installNode","installYarn"]},{default:n(()=>[a("p",null,[e(" Set this property to download distributions through the proxy server with an authenticated identity (BASIC scheme server-side). The property is ignored unless the "),t(o,{name:"httpProxyUsername"}),e(" property is not "),t(r,null,{default:n(()=>[e("null")]),_:1}),e(". ")]),t(s,null,{default:n(()=>[e(" SECURITY: do not to store a plain text password in the build script. Store it in an environment variable or an external user property, and use one or the other as the value of this property. ")]),_:1})]),_:1})}const _t=u(De,[["render",Ae]]),Ve={};function Ye(i,p){const o=f,r=_;return l(),c(r,{name:"verboseModeEnabled",type:"boolean","default-value":"false","task-names":[]},{default:n(()=>[a("p",null,[e(" Whether the plugin shall log additional messages whatever Gradle's logging level is. Technically speaking, messages logged by the plugin with the "),t(o,null,{default:n(()=>[e("INFO")]),_:1}),e(" level are made visible. This property allows to track the plugin execution without activating Gradle's "),t(o,null,{default:n(()=>[e("INFO")]),_:1}),e(" or "),t(o,null,{default:n(()=>[e("DEBUG")]),_:1}),e(" levels, that may be too much verbose on a global point of view. ")])]),_:1})}const dt=u(Ve,[["render",Ye]]);export{_,v as a,Ke as b,Qe as c,Xe as d,Ze as e,et as f,tt as g,nt as h,ot as i,rt as j,at as k,st as l,it as m,lt as n,pt as o,ct as p,ut as q,_t as r,dt as s};
