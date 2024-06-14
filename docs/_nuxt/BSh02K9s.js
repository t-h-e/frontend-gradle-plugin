import{_ as R}from"./Dq5EYBAl.js";import{g as k,o as n,f,w as p,d as t,t as h,k as m,i as E,u as b,n as B,c as a,l as G,a as d,b as c,F as u,j as i,r as F}from"./F1WuTW_A.js";import{b as N,_ as A,a as U}from"./CB0qIKt7.js";import{b as Y}from"./CuArXVD-.js";import{_ as O}from"./C6ZCEtV2.js";import{_ as I}from"./DlAUqK2U.js";import{_ as j}from"./BL2FobuT.js";const ie=k({__name:"gradle-task-outcome-link",props:{outcome:{}},setup(l){return(r,_)=>{const e=R;return n(),f(e,{path:"/current/userguide/more_about_tasks.html#sec:task_outcomes"},{default:p(()=>[t(h(r.outcome),1)]),_:1})}}}),ce=k({__name:"gradle-guides-link",props:{path:{default:null}},setup(l){return(r,_)=>{const e=N;return n(),f(e,{href:`https://guides.gradle.org${r.path}`},{default:p(()=>[m(r.$slots,"default")]),_:3},8,["href"])}}}),w=k({__name:"task-link-anchor",props:{name:{}},setup(l){return(r,_)=>{const e=Y;return n(),f(e,{name:r.name,path:r.$config.public.paths.tasks},null,8,["name","path"])}}});var o=(l=>(l.DIRECTORY="D",l.EXECUTABLE_TYPE="ET",l.FILE="F",l.STRING="S",l.REGULAR_FILE="RF",l))(o||{});const V=k({__name:"task-property-type",props:{type:{}},setup(l){const r=l,_=E(()=>{switch(r.type){case o.DIRECTORY:return"/current/javadoc/org/gradle/api/file/DirectoryProperty.html";case o.REGULAR_FILE:return"/current/javadoc/org/gradle/api/file/RegularFileProperty.html";case o.EXECUTABLE_TYPE:case o.FILE:case o.STRING:return"/current/javadoc/org/gradle/api/provider/Property.html";default:return null}}),e=E(()=>{switch(r.type){case o.DIRECTORY:return"Provider of org.gradle.api.file.DirectoryProperty instance (task is out-of-date if the content changes)";case o.EXECUTABLE_TYPE:return"Provider of org.siouan.frontendgradleplugin.domain.ExecutableType instance (task is out-of-date if the value changes)";case o.FILE:return"Provider of java.io.File instance (task is out-of-date if the path changes)";case o.REGULAR_FILE:return"Provider of org.gradle.api.file.RegularFile instance (task is out-of-date if the content changes)";case o.STRING:return"Provider of java.lang.String instance (task is out-of-date if the value changes)";default:return null}}),T=E(()=>{switch(r.type){case o.EXECUTABLE_TYPE:return"text-bg-dark";case o.FILE:case o.STRING:return"text-bg-primary";case o.DIRECTORY:case o.REGULAR_FILE:return"text-bg-danger";default:return null}});return(v,y)=>{const L=R;return n(),f(L,{path:b(_),title:b(e),class:B(["badge me-1",b(T)]),"hover-style-disabled":""},{default:p(()=>[t(h(v.type),1)]),_:1},8,["path","title","class"])}}}),X={},H={class:"badge fgp-optional-task-property"};function z(l,r){return n(),a("span",H,"Optional")}const q=I(X,[["render",z],["__scopeId","data-v-e358bb7d"]]),J={class:"mb-3 border-bottom"},K={key:0},M={key:1},Q={key:2},W={key:3},Z={key:4},x={class:"px-3"},ee=k({__name:"task",props:{name:{},type:{type:Boolean,default:!1},dependingTaskNames:{default:()=>[]},inputs:{default:()=>[]},outputs:{default:()=>[]},cacheable:{type:Boolean,default:!1},customEnvironmentVariablesSupported:{type:Boolean}},setup(l){const r=G(),_=E(()=>!!r.skipConditions);return(e,T)=>{const v=w,y=A,L=R,$=U,S=O,C=V,D=q,P=j;return n(),a("article",J,[d("header",null,[d("h4",null,[c(v,{name:e.name},null,8,["name"]),t(),e.type?(n(),a(u,{key:0},[t("Type")],64)):(n(),a(u,{key:1},[t("Task")],64)),t(),c(y,null,{default:p(()=>[t(h(e.name),1)]),_:1}),t(" - "),m(e.$slots,"title",{},void 0,!0),t(),e.cacheable?(n(),f(L,{key:2,path:"/current/userguide/build_cache.html#sec:task_output_caching_details",title:"Cacheable task",class:"badge fgp-cacheable-task","hover-style-disabled":""},{default:p(()=>[t("C")]),_:1})):i("",!0),t(),c($,{path:`${e.$config.public.paths.tasks}#app`,class:"small text-info"},{default:p(()=>[t("↑")]),_:1},8,["path"])]),d("ul",null,[e.dependingTaskNames.length>0?(n(),a("li",K,[t(" Depends on: "),(n(!0),a(u,null,F(e.dependingTaskNames,(s,g)=>(n(),a("span",{key:s},[c(S,{name:s},null,8,["name"]),g<e.dependingTaskNames.length-1?(n(),a(u,{key:0},[t(", ")],64)):i("",!0)]))),128))])):i("",!0),e.inputs.length>0?(n(),a("li",M,[t(" Inputs: "),d("ul",null,[(n(!0),a(u,null,F(e.inputs,(s,g)=>(n(),a("li",{key:g},[c(C,{type:s.type},null,8,["type"]),s.optionalHint?(n(),f(D,{key:0,title:s.optionalHint},null,8,["title"])):i("",!0),t(),c(y,null,{default:p(()=>[t(h(s.name),1)]),_:2},1024),t(": "),s.binding==="P"?(n(),a(u,{key:1},[c(P,{name:s.property},null,8,["name"]),t(" property ")],64)):i("",!0),s.binding==="C"?m(e.$slots,s.name,{key:2},void 0,!0):i("",!0)]))),128))])])):i("",!0),e.outputs.length>0?(n(),a("li",Q,[t(" Outputs: "),d("ul",null,[(n(!0),a(u,null,F(e.outputs,(s,g)=>(n(),a("li",{key:g},[c(C,{type:s.type},null,8,["type"]),t(),c(y,null,{default:p(()=>[t(h(s.name),1)]),_:2},1024),t(": "),s.binding==="C"?m(e.$slots,s.name,{key:0},void 0,!0):i("",!0)]))),128))])])):i("",!0),b(_)?(n(),a("li",W,[t("Skipped when "),m(e.$slots,"skipConditions",{},void 0,!0)])):i("",!0),e.customEnvironmentVariablesSupported?(n(),a("li",Z,[t("Supports "),c($,{path:`${e.$config.public.paths.tasks}#custom-environment-variables`},{default:p(()=>[t("custom environment variables")]),_:1},8,["path"])])):i("",!0)])]),d("section",x,[m(e.$slots,"description",{},void 0,!0)])])}}}),pe=I(ee,[["__scopeId","data-v-587c1598"]]);export{ie as _,ce as a,pe as b};
