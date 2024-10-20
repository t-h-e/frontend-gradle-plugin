import{_ as F}from"./BFASJRg5.js";import{u as $,a as L,_ as G}from"./BkGJl2ZQ.js";import{_ as C}from"./D3M5zWk8.js";import{_ as N}from"./BnmEXoAC.js";import{_ as T}from"./BSZXaiZV.js";import{_ as M}from"./dvIwE-KW.js";import{_ as P}from"./DQimxJDu.js";import{b as B,a as S,_ as j}from"./zck6Z6fF.js";import{_ as z}from"./GCGlyXyH.js";import{_ as D}from"./CxKyWrla.js";import{_ as I}from"./CHnPAX8H.js";import{_ as U}from"./BFqTcm4f.js";import{g as q,c as A,b as t,w as a,a as n,d as e,u as V,o as Y,t as H}from"./0eoLPSdn.js";import{u as J}from"./abRkgXpJ.js";import"./DlAUqK2U.js";import"./D4IM-IFr.js";const R={class:"fs-2 text-center"},E={class:"card my-3"},O={class:"card-body"},W=n("h5",{class:"card-title"},"Under the hood",-1),K={class:"card-text"},Q=n("strong",null,"Lazy configuration",-1),X=n("strong",null,"Self-contained domain design",-1),h="Gradle Node/NPM/PNPM/Yarn plugin to build Javascript applications",b="All-in-one Gradle Node plugin, Gradle NPM plugin, Gradle PNPM plugin, Gradle Yarn plugin to build Javascript applications with Gradle: distribution management, built-in tasks",he=q({__name:"index",setup(Z){const m=V(),f=`${m.public.canonicalBaseUrl}${m.public.paths.overview}`;return J({link:[{rel:"canonical",href:f}]}),$({description:b,ogDescription:b,ogTitle:h,ogUrl:f,title:h}),(r,ee)=>{const k=F,y=L,o=G,v=C,i=N,c=T,p=M,d=P,u=B,_=S,w=z,x=D,s=I,l=j,g=U;return Y(),A("section",null,[t(y,{class:"text-center"},{default:a(()=>[e(" Frontend Gradle plugin "),t(k,{href:"https://github.com/siouan/frontend-gradle-plugin/releases/tag/v8.1.0",src:"https://img.shields.io/badge/Latest%20release-8.1.0-blue.svg",alt:"Latest release 8.1.0",class:"ml-1"})]),_:1}),n("p",R,[e("Build "),t(o),e("-based applications with "),t(v),e(" and "),t(i)]),n("p",null,[e(" This plugin allows to build a "),t(o),e("-based application relying on a package manager supported by "),t(i),e(": "),t(c),e(", "),t(p),e(", "),t(d),e(". It is inspired by the philosophy of the "),t(u,{href:"https://github.com/eirslett/frontend-maven-plugin"},{default:a(()=>[e("Frontend Maven plugin")]),_:1}),e(", an equivalent plugin for "),t(u,{href:"https://maven.apache.org",title:"Apache Maven Project"},{default:a(()=>[e("Maven")]),_:1}),e(". Follow the "),t(_,{path:r.$config.public.paths.gettingStarted},{default:a(()=>[e("quick start guide")]),_:1},8,["path"]),e(", and build your frontend application. Take a look at the "),t(w,{path:"/releases",class:"text-lowercase"},{default:a(()=>[e(H(r.$t("navigation.repository.releases.label")),1)]),_:1}),e(" if you are migrating from a previous version. ")]),t(x,null,{default:a(()=>[e("Features")]),_:1}),t(s,{title:"Distribution management","icon-class":"fa fa-cloud-download-alt text-primary"},{default:a(()=>[e(" By default, the plugin downloads and installs a "),t(o),e(" distribution. Multiple Gradle (sub-)projects may use the distribution downloaded by one of them, or even use a distribution already installed in the workstation to avoid network overhead and duplication. The plugin may also use a HTTP proxy server when downloading the "),t(o),e(" distribution, to take advantage of any caching facility, and submit to the organization's security rules. Basic authentication scheme is supported for both distribution and proxy servers. In case of connectivity issues, downloading the "),t(o),e(" distribution is also retryable, with a configurable exponential backoff strategy. ")]),_:1}),t(s,{title:"Support of multiple package managers","icon-class":"fas fa-dice-d6"},{default:a(()=>[e(" The plugin delegates installation of your favorite package manager to "),t(i),e(". Choose your package manager among "),t(c),e(", "),t(p),e(", "),t(d),e(", set the "),t(o,{path:"/api/packages.html#packagemanager",label:"packageManager"}),e(" property in your "),t(l,null,{default:a(()=>[e("package.json")]),_:1}),e(" file, and "),t(i),e(" downloads and activates the distribution expected for each (sub-)project. ")]),_:1}),t(s,{title:"Configurable dependencies installation","icon-class":"fa fa-cogs text-secondary"},{default:a(()=>[e(" Depending on the environment, installing frontend dependencies using the "),t(l,null,{default:a(()=>[e("package.json")]),_:1}),e(" file may require a different command (e.g. "),t(l,null,{default:a(()=>[e("npm ci")]),_:1}),e("). ")]),_:1}),t(s,{title:"Built-in tasks","icon-class":"fa fa-plug text-danger"},{default:a(()=>[e(" No need to define tasks to build, clean, check, or publish the frontend application through Gradle lifecycle. The plugin provides ready-to-use "),t(_,{path:r.$config.public.paths.tasks},{default:a(()=>[e("tasks")]),_:1},8,["path"]),e(" out of the box, and ensures their implementation matches Gradle's "),t(g,{path:"/current/userguide/task_configuration_avoidance.html"},{default:a(()=>[e("recommendations")]),_:1}),e(". Plug scripts from a "),t(l,null,{default:a(()=>[e("package.json")]),_:1}),e(" file with the "),t(_,{path:r.$config.public.paths.configuration},{default:a(()=>[e("DSL")]),_:1},8,["path"]),e(", and run "),t(l,null,{default:a(()=>[e("gradlew build")]),_:1}),e(". ")]),_:1}),t(s,{title:"Customization","icon-class":"fa fa-code-branch text-warning"},{default:a(()=>[e(" For more complex use cases, the plugin provides types to create tasks and run custom commands with "),t(o),e(", "),t(i),e(", "),t(c),e(", "),t(p),e(", "),t(d),e(". ")]),_:1}),n("div",E,[n("div",O,[W,n("ul",K,[n("li",null,[Q,e(": tasks configuration is delayed until necessary thanks to the use of Gradle "),t(g,{path:"/current/userguide/lazy_configuration.html"},{default:a(()=>[e("lazy configuration API")]),_:1}),e(", to optimize performance of builds and ease chaining tasks I/O. ")]),n("li",null,[X,e(": the plugin design is influenced by "),t(u,{href:"http://cleancoder.com/",title:"Clean coder"},{default:a(()=>[e("clean coding")]),_:1}),e(" principles. The domain layer is isolated from any framework and infrastructure. Writing cross-platform unit tests and maintaining the plugin is easier. Code coverage and predictability increase. ")])])])])])}}});export{he as default};