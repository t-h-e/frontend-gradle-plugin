import{_ as L,u as q,a as X}from"./B3Uso2j1.js";import{_ as w}from"./D5XL0elt.js";import{_ as k,a as I}from"./BOqwjjew.js";import{_ as z}from"./QmxwIEzA.js";import{_ as B,a as H,b as Z,c as K,d as W,e as Q,f as ee}from"./DQdY6t8U.js";import{a as te,_ as ne}from"./BtNWQ_Pt.js";import{_ as b}from"./BSZ3xRWO.js";import{_ as S,a as $,b as F}from"./C_hFKjrj.js";import{_ as j}from"./B1Cn1jyM.js";import{g as h,o as f,f as T,w as n,d as e,b as t,a as s,c as ae}from"./D71axJVe.js";import{_ as x}from"./DBovWzHr.js";import{_ as oe}from"./CwGFdNW4.js";import{_ as se}from"./BifUc8Yf.js";import{_ as ie}from"./Deewjiqo.js";import{_ as le}from"./DCkGD3g2.js";import{_ as re}from"./DM2uf8uD.js";import{_ as ce}from"./BEHa1Srm.js";import{u as pe}from"./CUOE0wSc.js";import"./DlAUqK2U.js";import"./BfsWJKyW.js";const de=h({__name:"install-node-task-v7",setup(g){const c=[{name:"nodeVersion",type:"S",binding:"P",property:"nodeVersion"},{name:"nodeDistributionUrlRoot",type:"S",binding:"P",property:"nodeDistributionUrlRoot"},{name:"nodeDistributionUrlPathPattern",type:"S",binding:"P",property:"nodeDistributionUrlPathPattern"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"}],p=[{name:"nodeExecutableFile",type:"RF",binding:"C"}];return(_,i)=>{const a=L,o=b,l=k,r=te,d=S,u=$,m=j,v=F;return f(),T(v,{name:"installNode",inputs:c,outputs:p},{title:n(()=>[e("Install "),t(a)]),nodeExecutableFile:n(()=>[t(o,{name:"nodeInstallDirectory"}),t(l,null,{default:n(()=>[e("/node.exe")]),_:1}),e(" or "),t(o,{name:"nodeInstallDirectory"}),t(l,null,{default:n(()=>[e("/bin/node")]),_:1}),e(" depending on the O/S. ")]),skipConditions:n(()=>[e(" property "),t(o,{name:"nodeDistributionProvided"}),e(" is "),t(l,null,{default:n(()=>[e("true")]),_:1}),e(". ")]),description:n(()=>[s("p",null,[e(" The task downloads a "),t(a),e(" distribution, verifies its integrity, and installs it in the directory pointed by the "),t(o,{name:"nodeInstallDirectory"}),e(" property. The URL used to download the distribution is resolved using the "),t(o,{name:"nodeDistributionUrlRoot"}),e(" property and the "),t(o,{name:"nodeDistributionUrlPathPattern"}),e(" property. Checking the distribution integrity consists of downloading a file providing the distribution shasum. This file is expected to be in the same remote web directory than the distribution archive. For example, if the distribution is located at "),t(l,null,{default:n(()=>[e("https://nodejs.org/dist/vX.Y.Z/node-vX.Y.Z-win-x64.zip")]),_:1}),e(", the plugin attempts to download the shasum file located at "),t(l,null,{default:n(()=>[e("https://nodejs.org/dist/vX.Y.Z/SHASUMS256.txt")]),_:1}),e(". By default, the plugin relies on the VM "),t(r,null,{default:n(()=>[e("network properties")]),_:1}),e(" to know if a proxy server shall be used when downloading the distribution and the shasum. A custom proxy server may also be used by defining "),t(o,{name:"httpsProxyHost"}),e(" property (respectively "),t(o,{name:"httpProxyHost"}),e(" property) if the "),t(o,{name:"nodeDistributionUrlRoot"}),e(" property uses the "),t(l,null,{default:n(()=>[e("https")]),_:1}),e(" protocol (resp. uses the "),t(l,null,{default:n(()=>[e("http")]),_:1}),e(" protocol). ")]),s("p",null,[e(" If a "),t(a),e(" distribution is already installed in the system - either as a global installation or as an installation performed by another Gradle (sub-)project - and shall be used instead of a downloaded distribution, take a look at the "),t(o,{name:"nodeDistributionProvided"}),e(" property instead: when "),t(l,null,{default:n(()=>[e("true")]),_:1}),e(", this task is ignored if invoked during a Gradle build, and its outcome will always be "),t(d,{outcome:"SKIPPED"}),e(". ")]),s("p",null,[e(" The task takes advantage of "),t(u,{path:"/performance/#incremental_build"},{default:n(()=>[e("Gradle incremental build")]),_:1}),e(", and is not executed again unless one of its inputs/outputs changed. Consequently, if the task takes part of a Gradle build, its outcome will be "),t(d,{outcome:"UP-TO-DATE"}),e(". ")]),t(m,null,{default:n(()=>[e(" This task should not be executed directly. Gradle executes it if the build requires it. ")]),_:1})]),_:1})}}}),ue=h({__name:"resolve-package-manager-task-v7",setup(g){const c=[{name:"packageJsonFile",type:"RF",binding:"C"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"}],p=[{name:"packageManagerSpecificationFile",type:"RF",binding:"C"},{name:"packageManagerExecutablePathFile",type:"RF",binding:"C"}];return(_,i)=>{const a=b,o=k,l=L,r=$,d=S,u=j,m=F;return f(),T(m,{name:"resolvePackageManager",inputs:c,outputs:p,cacheable:""},{title:n(()=>[e("Resolve package manager")]),packageJsonFile:n(()=>[t(a,{name:"packageJsonDirectory"}),t(o,null,{default:n(()=>[e("/package.json")]),_:1})]),packageManagerSpecificationFile:n(()=>[t(a,{name:"cacheDirectory"}),t(o,null,{default:n(()=>[e("/resolvePackageManager/package-manager-specification.txt")]),_:1})]),packageManagerExecutablePathFile:n(()=>[t(a,{name:"cacheDirectory"}),t(o,null,{default:n(()=>[e("/resolvePackageManager/package-manager-executable-path.txt")]),_:1})]),skipConditions:n(()=>[t(a,{name:"packageJsonDirectory"}),t(o,null,{default:n(()=>[e("/package.json")]),_:1}),e(" file does not exist. ")]),description:n(()=>[s("p",null,[e(" The task identifies the name and the version of the package manager applicable to the project by parsing the "),t(l,{path:"/api/packages.html#packagemanager",label:"packageManager"}),e(" property located in the "),t(o,null,{default:n(()=>[e("package.json")]),_:1}),e(" file (pointed by the "),t(a,{name:"packageJsonDirectory"}),e(" property). For example, if the "),t(o,null,{default:n(()=>[e("package.json")]),_:1}),e(" file contains "),t(o,null,{default:n(()=>[e('"packageManager": "npm@9.6.7"')]),_:1}),e(", the task resolves "),t(o,null,{default:n(()=>[e("npm")]),_:1}),e(" as the name of the package manager, and "),t(o,null,{default:n(()=>[e("9.6.7")]),_:1}),e(" as its version. ")]),s("p",null,[e(" The task takes advantage of "),t(r,{path:"/performance/#incremental_build"},{default:n(()=>[e("Gradle incremental build")]),_:1}),e(", and is not executed again unless one of its inputs/outputs changed. Consequently, if the task takes part of a Gradle build, its outcome will be "),t(d,{outcome:"UP-TO-DATE"}),e(". ")]),t(u,null,{default:n(()=>[e(" This task should not be executed directly. Gradle executes it if the build requires it. ")]),_:1})]),_:1})}}}),_e=h({__name:"install-package-manager-task-v7",setup(g){const c=[{name:"packageManagerSpecificationFile",type:"RF",binding:"C"}],p=[{name:"packageManagerExecutableFile",type:"RF",binding:"C"}];return(_,i)=>{const a=b,o=k,l=x,r=$,d=S,u=j,m=F;return f(),T(m,{name:"installPackageManager",inputs:c,outputs:p},{title:n(()=>[e("Install package manager")]),packageManagerSpecificationFile:n(()=>[t(a,{name:"cacheDirectory"}),t(o,null,{default:n(()=>[e("/resolvePackageManager/package-manager-specification.txt")]),_:1})]),packageManagerExecutableFile:n(()=>[t(a,{name:"nodeInstallDirectory"}),t(o,null,{default:n(()=>[e("/[npm|pnpm|yarn].cmd")]),_:1}),e(" or "),t(a,{name:"nodeInstallDirectory"}),t(o,null,{default:n(()=>[e("/bin/[npm|pnpm|yarn]")]),_:1}),e(" depending on the O/S. ")]),skipConditions:n(()=>[e(" file "),t(a,{name:"cacheDirectory"}),t(o,null,{default:n(()=>[e("/resolvePackageManager/package-manager-executable-path.txt")]),_:1}),e(" does not exist. ")]),description:n(()=>[s("p",null,[e(" The task installs the package manager resolved with task "),t(l,{name:"resolvePackageManager"}),e(", by executing command "),t(o,null,{default:n(()=>[e("corepack enable <package-manager>")]),_:1}),e(". ")]),s("p",null,[e(" The task takes advantage of "),t(r,{path:"/performance/#incremental_build"},{default:n(()=>[e("Gradle incremental build")]),_:1}),e(", and is not executed again unless one of its inputs/outputs changed. Consequently, if the task takes part of a Gradle build, its outcome will be "),t(d,{outcome:"UP-TO-DATE"}),e(". ")]),t(u,null,{default:n(()=>[e(" This task should not be executed directly. Gradle executes it if the build requires it. ")]),_:1})]),_:1})}}}),me={class:"card my-3"},ke={class:"card-body"},he={class:"card-title"},fe={class:"card-text"},ge=s("span",{class:"font-italic"},"by default",-1),ye=h({__name:"install-frontend-task-v7",setup(g){const c=[{name:"packageJsonDirectory",type:"F",binding:"P",property:"packageJsonDirectory"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"},{name:"script",type:"S",binding:"P",property:"installScript"}];return(p,_)=>{const i=b,a=k,o=L,l=w,r=S,d=x,u=oe,m=se,v=B,P=ie,D=le,C=I,G=F;return f(),T(G,{name:"installFrontend",inputs:c},{title:n(()=>[e("Install frontend dependencies")]),skipConditions:n(()=>[e(" file "),t(i,{name:"cacheDirectory"}),t(a,null,{default:n(()=>[e("/resolvePackageManager/package-manager-specification.txt")]),_:1}),e(" does not exist. ")]),description:n(()=>[s("p",null,[e(" Depending on the package manager, this task executes either command "),t(a,null,{default:n(()=>[e("npm install")]),_:1}),e(", or command "),t(a,null,{default:n(()=>[e("pnpm install")]),_:1}),e(", or command "),t(a,null,{default:n(()=>[e("yarn install")]),_:1}),e(", by default. Consequently, the command shall install project dependencies according to the algorithm followed by each package manager (see hereafter). Optionally, this command may be customized with the "),t(i,{name:"installScript"}),e(" property (e.g. to run a "),t(a,null,{default:n(()=>[e("npm ci")]),_:1}),e(" command instead). On a developer workstation, executing this task is a good starting point to setup a workspace for development as it will install the "),t(o),e(" distribution (if not provided) as well as dependencies. ")]),s("div",me,[s("div",ke,[s("h5",he,[e(" About "),t(l,{path:"/current/userguide/incremental_build.html"},{default:n(()=>[e("incremental build")]),_:1}),e(" and up-to-date checks ")]),s("div",fe,[s("p",null,[e(" If you execute this task several times in a row, you may notice the "),t(a,null,{default:n(()=>[e("npm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("pnpm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("yarn")]),_:1}),e(" command is always executed: Gradle does not reuse task outputs based on a previous execution with the "),t(r,{outcome:"SUCCESS"}),e(" outcome. This is the expected behaviour "),ge,e(" because the task does not declare any relevant input(s) and output(s) Gradle could track to know the task is already "),t(r,{outcome:"UP-TO-DATE"}),e(" (e.g. unlike the "),t(d,{name:"installNode"}),e(" task). Resolving these inputs/outputs is a bit complex, since it depends on the package manager, the value of the "),t(i,{name:"installScript"}),e(" property, and the files present in the project. That's why incremental build for this task is not available out-of-the-box by now. However, some "),t(u,{path:"/tree/main/examples"},{default:n(()=>[e("examples")]),_:1}),e(" provide guidelines to customize this task and limit executions under certain circumstances. Notes hereafter provide also some unofficial ideas: ")]),s("ul",null,[s("li",null,[t(m),e(": inputs may be one or more of files "),t(a,null,{default:n(()=>[e("package.json")]),_:1}),e(", "),t(a,null,{default:n(()=>[e("npm-shrinkwrap.json")]),_:1}),e(", "),t(a,null,{default:n(()=>[e("package-lock.json")]),_:1}),e(", "),t(a,null,{default:n(()=>[e("yarn.lock")]),_:1}),e(", while outputs may be the "),t(a,null,{default:n(()=>[e("node_modules")]),_:1}),e(" directory and the "),t(a,null,{default:n(()=>[e("package-lock.json")]),_:1}),e(" file (see "),t(v,{path:"/cli/v10/commands/npm-install"},{default:n(()=>[e("npm install")]),_:1}),e("). If the "),t(i,{name:"installScript"}),e(" property is set with "),t(a,null,{default:n(()=>[e("ci")]),_:1}),e(", files "),t(a,null,{default:n(()=>[e("npm-shrinkwrap.json")]),_:1}),e(" and "),t(a,null,{default:n(()=>[e("package-lock.json")]),_:1}),e(" may be the only possible input file, if one or the other exists, and the "),t(a,null,{default:n(()=>[e("node_modules")]),_:1}),e(" directory the only output. ")]),s("li",null,[t(P),e(": inputs may be one or more of files "),t(a,null,{default:n(()=>[e("package.json")]),_:1}),e(", "),t(a,null,{default:n(()=>[e("pnpm-lock.yaml")]),_:1}),e(", while outputs may be the "),t(a,null,{default:n(()=>[e("node_modules")]),_:1}),e(" directory and the "),t(a,null,{default:n(()=>[e("pnpm-lock.yaml")]),_:1}),e(" file. ")]),s("li",null,[t(D),e(": inputs may be one or more of files "),t(a,null,{default:n(()=>[e("package.json")]),_:1}),e(", "),t(a,null,{default:n(()=>[e("yarn.lock")]),_:1}),e(", while outputs may be the "),t(a,null,{default:n(()=>[e("node_modules")]),_:1}),e(" directory, or the "),t(a,null,{default:n(()=>[e(".pnp.cjs")]),_:1}),e(" file and the "),t(a,null,{default:n(()=>[e(".yarn/cache")]),_:1}),e(" directory ("),t(D,{label:"Zero-installs",title:"Zero-Install feature"}),e("), and the "),t(a,null,{default:n(()=>[e("yarn.lock")]),_:1}),e(" file. ")])]),s("p",null,[e(" If you are about to tweak this task to declare additional inputs and outputs, take a look at these "),t(C,{path:`${p.$config.public.paths.tasks}#tweaking-tasks`},{default:n(()=>[e("recommendations")]),_:1},8,["path"]),e(". ")])])])])]),_:1})}}}),be=h({__name:"clean-frontend-task-v7",setup(g){const c=[{name:"packageJsonDirectory",type:"F",binding:"P",property:"packageJsonDirectory"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"},{name:"script",type:"S",binding:"P",property:"cleanScript"}];return(p,_)=>{const i=b,a=k,o=x,l=w,r=F;return f(),T(r,{name:"cleanFrontend",inputs:c},{title:n(()=>[e("Clean frontend artifacts")]),skipConditions:n(()=>[e(" property "),t(i,{name:"cleanScript"}),e(" is not "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". ")]),description:n(()=>[s("p",null,[e(" This task does nothing by default, considering frontend artifacts (minimified Javascript, CSS, HTML files...) are generated in the "),t(a,null,{default:n(()=>[e("${project.buildDir}")]),_:1}),e(" directory. If it is not the case, this task may be useful to clean the relevant directory. A clean script shall be defined in the "),t(a,null,{default:n(()=>[e("package.json")]),_:1}),e(" file, and the "),t(i,{name:"cleanScript"}),e(" property shall be set with the corresponding "),t(a,null,{default:n(()=>[e("npm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("pnpm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("yarn")]),_:1}),e(" command. This task depends on the "),t(o,{name:"installFrontend"}),e(" task, and is skipped if the "),t(i,{name:"cleanScript"}),e(" property is "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". Apart from direct execution, the task is also executed when the Gradle lifecycle "),t(l,{path:"/current/userguide/base_plugin.html#sec:base_tasks"},{default:n(()=>[e("clean")]),_:1}),e(" task is executed. ")])]),_:1})}}}),Fe={class:"card my-3"},Te={class:"card-body"},xe=s("h5",{class:"card-title"},"About task execution and up-to-date checks",-1),ve={class:"card-text"},we=h({__name:"assemble-frontend-task-v7",setup(g){const c=[{name:"packageJsonDirectory",type:"F",binding:"P",property:"packageJsonDirectory"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"},{name:"script",type:"S",binding:"P",property:"assembleScript"}];return(p,_)=>{const i=b,a=k,o=x,l=w,r=S,d=I,u=F;return f(),T(u,{name:"assembleFrontend",inputs:c},{title:n(()=>[e("Assemble frontend artifacts")]),skipConditions:n(()=>[e(" property "),t(i,{name:"assembleScript"}),e(" is not "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". ")]),description:n(()=>[e(" This task allows to execute a build script as part of a Gradle build. The build script shall be defined in the "),t(a,null,{default:n(()=>[e("package.json")]),_:1}),e(" file, and the "),t(i,{name:"assembleScript"}),e(" property shall be set with the corresponding "),t(a,null,{default:n(()=>[e("npm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("pnpm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("yarn")]),_:1}),e(" command. This task depends on the "),t(o,{name:"installFrontend"}),e(" task, and is skipped if the "),t(i,{name:"assembleScript"}),e(" property is "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". Apart from direct execution, the task is also executed when the Gradle lifecycle "),t(l,{path:"/current/userguide/base_plugin.html#sec:base_tasks"},{default:n(()=>[e("assemble")]),_:1}),e(" task is executed. "),s("div",Fe,[s("div",Te,[xe,s("p",ve,[e(" If you execute this task several times in a row, you may notice the "),t(a,null,{default:n(()=>[e("npm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("pnpm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("yarn")]),_:1}),e(" command is always executed: Gradle does not skip the task based on a previous execution with the "),t(r,{outcome:"SUCCESS"}),e(" outcome. This is the expected behaviour because the task does not declare any input/output Gradle could track, to know the task is already "),t(r,{outcome:"UP-TO-DATE"}),e(" (e.g. unlike task "),t(o,{name:"installNode"}),e("). The task provides the ability to plug the developer's own Javascript build process to Gradle, and nothing more. Every Javascript build process is unique: it depends on the project, the languages involved (e.g. TypeScript, JSX, ECMA script, SASS, SCSS...), the directory layout, the build utilities (Webpack...), etc., chosen by the team. Moreover, some build utilities are already able to build artifacts incrementally. The plugin does not duplicate this logic. If you are about to tweak this task, take a look at these "),t(d,{path:`${p.$config.public.paths.tasks}#tweaking-tasks`},{default:n(()=>[e("recommendations")]),_:1},8,["path"]),e(". ")])])])]),_:1})}}}),Se=h({__name:"check-frontend-task-v7",setup(g){const c=[{name:"packageJsonDirectory",type:"F",binding:"P",property:"packageJsonDirectory"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"},{name:"script",type:"S",binding:"P",property:"checkScript"}];return(p,_)=>{const i=b,a=k,o=x,l=w,r=F;return f(),T(r,{name:"checkFrontend",inputs:c},{title:n(()=>[e("Check frontend application")]),skipConditions:n(()=>[e(" property "),t(i,{name:"checkScript"}),e(" is not "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". ")]),description:n(()=>[s("p",null,[e(" This task may be used to integrate a check script into a Gradle build. The check script shall be defined in the "),t(a,null,{default:n(()=>[e("package.json")]),_:1}),e(" file, and the "),t(i,{name:"checkScript"}),e(" property shall be set with the corresponding "),t(a,null,{default:n(()=>[e("npm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("pnpm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("yarn")]),_:1}),e(" command. A typical check script may lint source files, execute tests, and/or perform additional analysis actions. This task depends on the "),t(o,{name:"installFrontend"}),e(" task, and is skipped if the "),t(i,{name:"checkScript"}),e(" property is "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". Apart from direct execution, the task is also executed when the Gradle lifecycle "),t(l,{path:"/current/userguide/base_plugin.html#sec:base_tasks"},{default:n(()=>[e("check")]),_:1}),e(" task is executed. ")])]),_:1})}}}),De=h({__name:"publish-frontend-task-v7",setup(g){const c=[{name:"packageJsonDirectory",type:"F",binding:"P",property:"packageJsonDirectory"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"},{name:"script",type:"S",binding:"P",property:"publishScript"}];return(p,_)=>{const i=b,a=k,o=x,l=F;return f(),T(l,{name:"publishFrontend",inputs:c},{title:n(()=>[e("Publish frontend artifacts")]),skipConditions:n(()=>[e(" property "),t(i,{name:"assembleScript"}),e(" is "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(" or property "),t(i,{name:"publishScript"}),e(" is "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". ")]),description:n(()=>[s("p",null,[e(" This task may be used to integrate a publish script into a Gradle build. The publish script shall be defined in the "),t(a,null,{default:n(()=>[e("package.json")]),_:1}),e(" file, and the "),t(i,{name:"publishScript"}),e(" property shall be set with the corresponding "),t(a,null,{default:n(()=>[e("npm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("pnpm")]),_:1}),e("/"),t(a,null,{default:n(()=>[e("yarn")]),_:1}),e(" command. This task depends on the "),t(o,{name:"assembleFrontend"}),e(" task, and is skipped either if the "),t(i,{name:"assembleScript"}),e(" property is "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(", or if the "),t(i,{name:"publishScript"}),e(" property is "),t(a,null,{default:n(()=>[e("null")]),_:1}),e(". Apart from direct execution, the task is also executed when the Gradle "),t(a,null,{default:n(()=>[e("publish")]),_:1}),e(" task is executed. ")])]),_:1})}}}),Pe=s("p",null,"The plugin registers multiple tasks, that may have dependencies with each other, and also with:",-1),Ce={class:"text-center"},A="https://siouan.github.io/frontend-gradle-plugin/node-corepack-npm-pnpm-yarn-tasks",M="Gradle tasks to run node, corepack, npm, pnpm, yarn commands",N="Gradle tasks and types provided by the plugin to run node/corepack/npm/pnpm/yarn: integration, dependencies, customization, recommendations",Ze=h({__name:"node-corepack-npm-pnpm-yarn-tasks",setup(g){return pe({link:[{rel:"canonical",href:A}]}),q({description:N,ogDescription:N,ogTitle:M,ogUrl:A,title:M}),(c,p)=>{const _=X,i=w,a=k,o=z,l=H,r=ne,d=de,u=ue,m=_e,v=ye,P=be,D=we,C=Se,G=De,O=Z,E=K,R=W,J=Q,U=ee,Y=I,y=re,V=ce;return f(),ae("section",null,[t(_,null,{default:n(()=>[e("Tasks")]),_:1}),Pe,s("ul",null,[s("li",null,[e(" Gradle lifecycle tasks defined in the "),t(i,{path:"/current/userguide/base_plugin.html"},{default:n(()=>[e("Gradle Base plugin")]),_:1}),e(": "),t(a,null,{default:n(()=>[e("clean")]),_:1}),e(", "),t(a,null,{default:n(()=>[e("assemble")]),_:1}),e(", "),t(a,null,{default:n(()=>[e("check")]),_:1}),e(". ")]),s("li",null,[e(" Tasks defined in the Gradle Publishing plugin: "),t(a,null,{default:n(()=>[e("publish")]),_:1}),e(". ")])]),t(o,null,{default:n(()=>[e("Dependency tree")]),_:1}),s("p",Ce,[t(l,{class:"w-100"})]),t(o,null,{default:n(()=>[e("Reference")]),_:1}),s("section",null,[t(r,null,{default:n(()=>[e("Built-in tasks")]),_:1}),t(d),t(u),t(m),t(v),t(P),t(D),t(C),t(G)]),s("section",null,[t(r,null,{default:n(()=>[e("Additional types")]),_:1}),t(O),t(E),t(R),t(J),t(U)]),s("section",null,[t(r,{id:"tweaking-tasks"},{default:n(()=>[e(" Tweaking the built-in tasks "),t(Y,{path:`${c.$config.public.paths.tasks}#app`,class:"small text-info"},{default:n(()=>[e("↑")]),_:1},8,["path"])]),_:1}),s("p",null,[e(" If you need to customize the plugin's built-in tasks (e.g. declare additional I/O or dependencies), it is important to conform to the "),t(i,{path:"/current/userguide/task_configuration_avoidance.html#sec:old_vs_new_configuration_api_overview"},{default:n(()=>[e("Configuration avoidance API")]),_:1}),e(": use references of task providers instead of references of tasks, and continue taking advantage of the lazy configuration strategy the plugin already implements. The examples below introduce the implementation expected with simple cases: ")]),t(V,{id:"lazy-configuration-examples"},{groovy:n(()=>[s("pre",null,[t(a,null,{default:n(()=>[t(y,null,{default:n(()=>[e(`// Configuring a predefined task.
// LEGACY SYNTAX: task 'installFrontend' is immediately created and configured, as well as task
// 'otherTask', even if both tasks are not executed.`)]),_:1}),e(`
installFrontend {
    dependsOn 'otherTask'
    inputs.files('package.json', 'package-lock.json')
}
`),t(y,null,{default:n(()=>[e(`// MODERN SYNTAX: task 'installFrontend' is created and configured only when Gradle is about to execute it.
// Consequently, task 'otherTask' is also created and configured later. Let's also reinforce this behaviour
// by using its provider to retrieve the task.`)]),_:1}),e(`
tasks.named('installFrontend') {
    dependsOn tasks.named('otherTask')
    inputs.files('package.json', 'package-lock.json')
}

`),t(y,null,{default:n(()=>[e(`// Defining a new task
// LEGACY SYNTAX: task 'eagerTask' is immediately created and configured, as well as task
// 'installFrontend', even if both tasks are not executed.`)]),_:1}),e(`
task eagerTask {
    dependsOn 'installFrontend'
}
`),t(y,null,{default:n(()=>[e(`// MODERN SYNTAX: task 'lazyTask' is created and configured only when Gradle is about to execute it.
// Consequently, task 'installFrontend' is also created and configured later. Let's also reinforce this
// behaviour by using its provider to retrieve the task.`)]),_:1}),e(`
tasks.register('lazyTask') {
    dependsOn tasks.named('installFrontend')
}`)]),_:1})])]),kotlin:n(()=>[s("pre",null,[t(a,null,{default:n(()=>[t(y,null,{default:n(()=>[e(`// Configuring a predefined task.
// LEGACY SYNTAX: task 'installFrontend' is immediately created and configured, as well as task
// 'otherTask', even if both tasks are not executed.`)]),_:1}),e(`
installFrontend {
    dependsOn("otherTask")
    inputs.files("package.json", "package-lock.json")
}
`),t(y,null,{default:n(()=>[e(`// MODERN SYNTAX: task 'installFrontend' is created and configured only when Gradle is about to execute it.
// Consequently, task 'otherTask' is also created and configured later.`)]),_:1}),e(`
tasks.named<InstallTask>("installFrontend") {
    dependsOn(tasks.named("otherTask"))
    inputs.files("package.json", "package-lock.json")
}

`),t(y,null,{default:n(()=>[e(`// Defining a new task
// LEGACY SYNTAX: task 'eagerTask' is immediately created and configured, as well as task
// 'installFrontend', even if both tasks are not executed.`)]),_:1}),e(`
task eagerTask {
    dependsOn("installFrontend")
}
`),t(y,null,{default:n(()=>[e(`// MODERN SYNTAX: task 'lazyTask' is created and configured only when Gradle is about to execute it.
// Consequently, task 'installFrontend' is also created and configured later. Let's also reinforce this
// behaviour by using its provider to retrieve the task.`)]),_:1}),e(`
tasks.register("lazyTask") {
    dependsOn(tasks.named("installFrontend"))
}`)]),_:1})])]),_:1}),s("p",null,[e(" If your application uses the legacy syntax, you may find further instructions to migrate to the modern syntax in this Gradle "),t(i,{path:"/current/userguide/task_configuration_avoidance.html#sec:task_configuration_avoidance_migration_guidelines"},{default:n(()=>[e("guide")]),_:1}),e(". ")])])])}}});export{Ze as default};
