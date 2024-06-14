import{u as D,a as J,_ as K}from"./B3Uso2j1.js";import{_ as y}from"./QmxwIEzA.js";import{_ as v}from"./CTYHHnZi.js";import{_ as x}from"./BazXjdVw.js";import{_ as L}from"./CwGFdNW4.js";import{_ as N}from"./BifUc8Yf.js";import{_ as G}from"./Deewjiqo.js";import{_ as $}from"./DCkGD3g2.js";import{_ as w}from"./D5XL0elt.js";import{_ as S}from"./DM2uf8uD.js";import{_ as T,a as C}from"./BOqwjjew.js";import{_ as M}from"./BEHa1Srm.js";import{u as B}from"./CUOE0wSc.js";import{g as P,c as U,b as l,w as t,a as e,d as n,o as q}from"./D71axJVe.js";import"./DlAUqK2U.js";import"./BfsWJKyW.js";const I=e("p",null,"The following tools must be installed to use the plugin:",-1),R={class:"list-unstyled my-2 me-3"},V={class:"mb-2"},A=e("span",{class:"text-muted"},"(recommended)",-1),O={class:"mb-2"},f="https://siouan.github.io/frontend-gradle-plugin/getting-started",m="Building a Javascript application with the Gradle Node plugin",h="Guide to get started with the plugin: requirements, supported Node.js, NPM, PNPM, Yarn distributions, installation steps.",pn=P({__name:"getting-started",setup(Y){return B({link:[{rel:"canonical",href:f}]}),D({description:h,ogDescription:h,ogTitle:m,ogUrl:f,title:m}),(d,E)=>{const k=J,i=y,u=v,r=x,p=L,s=K,F=N,b=G,j=$,_=w,o=S,a=T,c=M,g=C;return q(),U("section",null,[l(k,null,{default:t(()=>[n("Getting started")]),_:1}),l(i,null,{default:t(()=>[n("Requirements")]),_:1}),I,e("ul",null,[e("li",null,[l(u,{path:"/plugin/org.siouan.frontend-jdk21"},{default:t(()=>[n("JDK 21 build")]),_:1}),n(": "),l(r),n(" 8.5+ ")]),e("li",null,[l(u,{path:"/plugin/org.siouan.frontend-jdk17"},{default:t(()=>[n("JDK 17 build")]),_:1}),n(": "),l(r),n(" 8.5+ ")]),e("li",null,[l(u,{path:"/plugin/org.siouan.frontend-jdk11"},{default:t(()=>[n("JDK 11 build")]),_:1}),n(": "),l(r),n(" 8.5+ ")])]),e("p",null,[n(" The plugin is built and tested on Linux, Mac OS, Windows (see the list of build environments used in the "),l(p,{path:"/blob/main/CONTRIBUTING.md"},{default:t(()=>[n("contributing notes")]),_:1}),n("). ")]),l(i,null,{default:t(()=>[n("Supported distributions")]),_:1}),e("ul",null,[e("li",null,[l(s),n(": ^14.19.0, ≥16.9.0")]),e("li",null,[l(F),n(": any")]),e("li",null,[l(b),n(": ^5.0.0 (requires "),l(s),n(" 14), ≥6.0.0")]),e("li",null,[l(j),n(": ≥1.0.0")])]),l(i,null,{default:t(()=>[n("Steps")]),_:1}),e("ol",null,[e("li",null,[n(" Install the plugin. "),e("ul",R,[e("li",null,[e("p",V,[n(" Using "),l(_,{path:"/current/userguide/plugins.html#sec:plugins_block"},{default:t(()=>[n("Gradle DSL")]),_:1}),n(),A]),l(c,{id:"install-gradle-dsl"},{groovy:t(()=>[e("pre",null,[l(a,null,{default:t(()=>[n(`plugins {
    `),l(o,null,{default:t(()=>[n("// For JDK 21+")]),_:1}),n(`
    id 'org.siouan.frontend-jdk21' version '8.1.0'
    `),l(o,null,{default:t(()=>[n("// For JDK 17+")]),_:1}),n(`
    id 'org.siouan.frontend-jdk17' version '8.1.0'
    `),l(o,null,{default:t(()=>[n("// For JDK 11+")]),_:1}),n(`
    id 'org.siouan.frontend-jdk11' version '8.1.0'
}`)]),_:1})])]),kotlin:t(()=>[e("pre",null,[l(a,null,{default:t(()=>[n(`plugins {
    `),l(o,null,{default:t(()=>[n("// For JDK 21+")]),_:1}),n(`
    id("org.siouan.frontend-jdk21") version "8.1.0"
    `),l(o,null,{default:t(()=>[n("// For JDK 17+")]),_:1}),n(`
    id("org.siouan.frontend-jdk17") version "8.1.0"
    `),l(o,null,{default:t(()=>[n("// For JDK 11+")]),_:1}),n(`
    id("org.siouan.frontend-jdk11") version "8.1.0"
}`)]),_:1})])]),_:1})]),e("li",null,[e("p",O,[n(" Using "),l(_,{path:"/current/userguide/plugins.html#sec:applying_plugins_buildscript"},{default:t(()=>[n("Gradle build script block")]),_:1})]),l(c,{id:"install-build-script-block"},{groovy:t(()=>[e("pre",null,[l(a,null,{default:t(()=>[n(`buildscript {
    repositories {
        url 'https://plugins.gradle.org/m2/'
    }
    dependencies {
        `),l(o,null,{default:t(()=>[n("// For JDK 21+")]),_:1}),n(`
        classpath 'org.siouan:frontend-gradle-plugin-jdk21:8.1.0'
        `),l(o,null,{default:t(()=>[n("// For JDK 17+")]),_:1}),n(`
        classpath 'org.siouan:frontend-gradle-plugin-jdk17:8.1.0'
        `),l(o,null,{default:t(()=>[n("// For JDK 11+")]),_:1}),n(`
        classpath 'org.siouan:frontend-gradle-plugin-jdk11:8.1.0'
    }
}

`),l(o,null,{default:t(()=>[n("// For JDK 21+")]),_:1}),n(`
apply plugin: 'org.siouan.frontend-jdk21'
`),l(o,null,{default:t(()=>[n("// For JDK 17+")]),_:1}),n(`
apply plugin: 'org.siouan.frontend-jdk17'
`),l(o,null,{default:t(()=>[n("// For JDK 11+")]),_:1}),n(`
apply plugin: 'org.siouan.frontend-jdk11'`)]),_:1})])]),kotlin:t(()=>[e("pre",null,[l(a,null,{default:t(()=>[n(`buildscript {
    repositories {
        url = uri("https://plugins.gradle.org/m2/")
    }
    dependencies {
        `),l(o,null,{default:t(()=>[n("// For JDK 21+")]),_:1}),n(`
        classpath("org.siouan:frontend-gradle-plugin-jdk21:8.1.0")
        `),l(o,null,{default:t(()=>[n("// For JDK 17+")]),_:1}),n(`
        classpath("org.siouan:frontend-gradle-plugin-jdk17:8.1.0")
        `),l(o,null,{default:t(()=>[n("// For JDK 11+")]),_:1}),n(`
        classpath("org.siouan:frontend-gradle-plugin-jdk11:8.1.0")
    }
}

`),l(o,null,{default:t(()=>[n("// For JDK 21+")]),_:1}),n(`
apply(plugin = "org.siouan.frontend-jdk21")
`),l(o,null,{default:t(()=>[n("// For JDK 17+")]),_:1}),n(`
apply(plugin = "org.siouan.frontend-jdk17")
`),l(o,null,{default:t(()=>[n("// For JDK 11+")]),_:1}),n(`
apply(plugin = "org.siouan.frontend-jdk11")`)]),_:1})])]),_:1})])])]),e("li",null,[n(" Define the "),l(a,null,{default:t(()=>[l(s,{path:"/api/packages.html#packagemanager",label:"packageManager"})]),_:1}),n(" property in the "),l(a,null,{default:t(()=>[n("package.json")]),_:1}),n(" file. ")]),e("li",null,[n("Add "),l(a,null,{default:t(()=>[n(".frontend-gradle-plugin/")]),_:1}),n(" directory to "),l(a,null,{default:t(()=>[n(".gitignore")]),_:1}),n(" file(s).")]),e("li",null,[l(g,{path:d.$config.public.paths.configuration},{default:t(()=>[n("Configure")]),_:1},8,["path"]),n(" your project, optionally with the help of "),l(p,{path:"/tree/main/examples"},{default:t(()=>[n("examples")]),_:1}),n(" provided for typical use cases. ")]),e("li",null,[n("Run "),l(a,null,{default:t(()=>[n("gradlew build")]),_:1}),n(".")]),e("li",null,[n(" If you need to run "),l(a,null,{default:t(()=>[n("node")]),_:1}),n("/"),l(a,null,{default:t(()=>[n("corepack")]),_:1}),n("/"),l(a,null,{default:t(()=>[n("npm")]),_:1}),n("/"),l(a,null,{default:t(()=>[n("pnpm")]),_:1}),n("/"),l(a,null,{default:t(()=>[n("yarn")]),_:1}),n(" executables from a command line (e.g. to start a development server), take a look at the "),l(g,{path:d.$config.public.paths.faqs},{default:t(()=>[n("FAQ")]),_:1},8,["path"]),n(". ")])])])}}});export{pn as default};
