(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{198:function(t,n,e){"use strict";var r=e(0).a.component("fgp-info",{}),o=e(4),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("p",{staticClass:"text-info px-2"},[n("i",{staticClass:"fas fa-info-circle mr-1"}),this._t("default")],2)}),[],!1,null,null,null);n.a=component.exports},200:function(t,n,e){"use strict";e(206);var r=e(0),o=e(52),l=r.a.component("fgp-yarn-link",{components:{fgpLink:o.a},props:{version:{type:Number,default:1}},data:function(){return{yarnUrls:["https://classic.yarnpkg.com/","https://yarnpkg.com/"]}}}),c=e(4),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("fgp-link",{attrs:{href:t.yarnUrls[t.version-1],title:t.$t("navigation.yarn"+t.version+".title")}},[t._v(t._s(t.$t("navigation.yarn"+t.version+".label")))])}),[],!1,null,null,null);n.a=component.exports},201:function(t,n,e){"use strict";e(17),e(202);n.a={head:function(){var t={meta:[],link:[]};return t.title=this.htmlTitle?this.htmlTitle:"Frontend Gradle plugin",this.metaDescription&&t.meta.push({hid:"description",name:"description",content:this.metaDescription}),t.meta.push({name:"og:title",content:t.title}),t.meta.push({name:"og:description",content:t.meta.find((function(meta){return"description"===meta.name})).content}),this.linkCanonicalHref&&t.link.push({rel:"canonical",href:this.linkCanonicalHref}),t}}},202:function(t,n,e){"use strict";var r=e(7),o=e(203)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(90)("find")},203:function(t,n,e){var r=e(29),o=e(88),l=e(32),c=e(16),f=e(204);t.exports=function(t,n){var e=1==t,d=2==t,v=3==t,_=4==t,h=6==t,m=5==t||h,k=n||f;return function(n,f,y){for(var j,O,x=l(n),C=o(x),N=r(f,y,3),T=c(C.length),w=0,E=e?k(n,T):d?k(n,0):void 0;T>w;w++)if((m||w in C)&&(O=N(j=C[w],w,x),t))if(e)E[w]=O;else if(O)switch(t){case 3:return!0;case 5:return j;case 6:return w;case 2:E.push(j)}else if(_)return!1;return h?-1:v||_?_:E}}},204:function(t,n,e){var r=e(205);t.exports=function(t,n){return new(r(t))(n)}},205:function(t,n,e){var r=e(13),o=e(124),l=e(3)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[l])&&(n=void 0)),void 0===n?Array:n}},206:function(t,n,e){"use strict";var r=e(5),o=e(22),l=e(30),c=e(125),f=e(69),d=e(12),v=e(54).f,_=e(70).f,h=e(10).f,m=e(207).trim,k=r.Number,y=k,j=k.prototype,O="Number"==l(e(89)(j)),x="trim"in String.prototype,C=function(t){var n=f(t,!1);if("string"==typeof n&&n.length>2){var e,r,o,l=(n=x?n.trim():m(n,3)).charCodeAt(0);if(43===l||45===l){if(88===(e=n.charCodeAt(2))||120===e)return NaN}else if(48===l){switch(n.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+n}for(var code,c=n.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+n};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof k&&(O?d((function(){j.valueOf.call(e)})):"Number"!=l(e))?c(new y(C(n)),e,k):C(n)};for(var N,T=e(8)?v(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;T.length>w;w++)o(y,N=T[w])&&!o(k,N)&&h(k,N,_(y,N));k.prototype=j,j.constructor=k,e(14)(r,"Number",k)}},207:function(t,n,e){var r=e(7),o=e(31),l=e(12),c=e(208),f="["+c+"]",d=RegExp("^"+f+f+"*"),v=RegExp(f+f+"*$"),_=function(t,n,e){var o={},f=l((function(){return!!c[t]()||"​"!="​"[t]()})),d=o[t]=f?n(h):c[t];e&&(o[e]=d),r(r.P+r.F*f,"String",o)},h=_.trim=function(t,n){return t=String(o(t)),1&n&&(t=t.replace(d,"")),2&n&&(t=t.replace(v,"")),t};t.exports=_},208:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},209:function(t,n,e){"use strict";var r=e(0).a.component("fgp-main-title",{}),o=e(4),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("header",[n("h1",[this._t("default")],2)])}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Header:e(68).default})},210:function(t,n,e){"use strict";var r=e(0).a.component("fgp-nodejs-link",{}),o=e(4),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("fgp-link",{attrs:{href:"https://nodejs.org/"}},[this._v(this._s(this.$t("navigation.nodejs.label")))])}),[],!1,null,null,null);n.a=component.exports},211:function(t,n,e){"use strict";e(71),e(23),e(24),e(11),e(55);var r=e(36),o=e(0),l=e(49);function c(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var d=o.a.component("fgp-gradle-scripts",{computed:f({groovyTabClass:function(){return{active:this.groovyTabVisible}},kotlinTabClass:function(){return{active:this.kotlinTabVisible}}},Object(l.b)("gradle-scripts",["groovyTabVisible","kotlinTabVisible"])),methods:f({},Object(l.c)("gradle-scripts",["setGroovyTabVisible","setKotlinTabVisible"]))}),v=e(4),component=Object(v.a)(d,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mb-2"},[e("ul",{staticClass:"nav nav-tabs"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:t.groovyTabClass,attrs:{to:"#",append:"",event:""},nativeOn:{click:function(n){return n.preventDefault(),t.setGroovyTabVisible(n)}}},[t._v("Groovy")])],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:t.kotlinTabClass,attrs:{to:"#",append:"",event:""},nativeOn:{click:function(n){return n.preventDefault(),t.setKotlinTabVisible(n)}}},[t._v("Kotlin")])],1)]),t._v(" "),e("div",{staticClass:"pt-3 pb-1 pl-3 bg-light"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.groovyTabVisible,expression:"groovyTabVisible"}]},[t._t("groovy")],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.kotlinTabVisible,expression:"kotlinTabVisible"}]},[t._t("kotlin")],2)])])}),[],!1,null,null,null);n.a=component.exports},212:function(t,n,e){"use strict";var r=e(0).a.component("fgp-sub-title",{}),o=e(4),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("header",[n("h2",[this._t("default")],2)])}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Header:e(68).default})},213:function(t,n,e){"use strict";var r=e(0).a.component("fgp-code-comment",{}),o=e(4),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"text-muted"},[this._t("default")],2)}),[],!1,null,null,null);n.a=component.exports},214:function(t,n,e){"use strict";var r=e(0),o=e(52),l=r.a.component("fgp-gradle-docs-link",{components:{fgpLink:o.a},props:{path:{type:String,default:null}}}),c=e(4),component=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("fgp-link",{attrs:{href:"https://docs.gradle.org"+this.path}},[this._t("default")],2)}),[],!1,null,null,null);n.a=component.exports},216:function(t,n,e){"use strict";var r=e(0),o=e(52),l=r.a.component("fgp-gradle-link",{components:{fgpLink:o.a},props:{path:{type:String,default:null}},computed:{gradleUrl:function(){return this.path?"".concat("https://gradle.org").concat(this.path):"https://gradle.org"}}}),c=e(4),component=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("fgp-link",{attrs:{href:this.gradleUrl}},[this._v(this._s(this.$t("navigation.gradle.label")))])}),[],!1,null,null,null);n.a=component.exports},222:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(53),code=e(67),l=e(213),c=e(214),f=e(216),d=e(211),v=e(198),_=e(209),h=e(210),m=e(201),k=e(91),y=e(87),j=e(212),O=e(200),x=r.a.component("fgp-getting-started",{components:{fgpCode:code.default,fgpCodeComment:l.a,fgpGradleDocsLink:c.a,fgpGradleLink:f.a,fgpGradleScripts:d.a,fgpInfo:v.a,fgpMainTitle:_.a,fgpNodejsLink:h.a,fgpRepoLink:k.a,fgpSiteLink:y.a,fgpSubTitle:j.a,fgpYarnLink:O.a},mixins:[o.a,m.a],data:function(){return{htmlTitle:"Getting started: building a Javascript application with Gradle and Node.js",linkCanonicalHref:"https://siouan.github.io/frontend-gradle-plugin/getting-started/",metaDescription:"Guide to get started with the plugin: requirements, supported Node.js and Yarn distributions, installation steps."}}}),C=e(4),component=Object(C.a)(x,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("fgp-main-title",[t._v("Getting started")]),t._v(" "),e("fgp-sub-title",[t._v("Requirements")]),t._v(" "),e("ul",[e("li",[e("fgp-gradle-link"),t._v(" 5.1+")],1),t._v(" "),e("li",[t._v("JDK 8+ 64 bits")]),t._v(" "),e("li",[t._v("\n                The plugin is built and tested on Linux, Mac OS, Windows (see the list of build environments used in\n                the "),e("fgp-repo-link",{attrs:{path:"/blob/master/CONTRIBUTING.md"}},[t._v("contributing notes")]),t._v(").\n            ")],1)]),t._v(" "),e("fgp-sub-title",[t._v("Supported distributions")]),t._v(" "),e("ul",[e("li",[e("fgp-nodejs-link"),t._v(" 6.2.1+")],1),t._v(" "),e("li",[e("fgp-yarn-link"),t._v(" 1.0+ ("),e("fgp-yarn-link",{attrs:{version:2}}),t._v(" initial support planned in release 6.0.0)")],1)]),t._v(" "),e("fgp-sub-title",[t._v("Steps")]),t._v(" "),e("fgp-info",[t._v("\n            Starting from release "),e("fgp-repo-link",{attrs:{path:"/releases/tag/v3.0.1"}},[t._v("3.0.1")]),t._v(", ID\n            "),e("fgp-code",[t._v("org.siouan.frontend")]),t._v(" and classpath\n            "),e("fgp-code",[t._v("org.siouan:frontend-gradle-plugin:<version>")]),t._v(" are deprecated. If you are already using\n            the plugin, we recommend "),e("fgp-repo-link",{attrs:{path:"/releases/tag/v5.0.0"}},[t._v("upgrading")]),t._v(" to the latest\n            release as soon as possible.\n        ")],1),t._v(" "),e("ol",[e("li",[t._v("\n                Install the plugin.\n                "),e("ul",{staticClass:"list-unstyled my-2 mr-3"},[e("li",[e("p",{staticClass:"mb-2"},[t._v("\n                            Using\n                            "),e("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/plugins.html#sec:plugins_block"}},[t._v("Gradle DSL")]),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("(recommended)")])],1),t._v(" "),e("fgp-gradle-scripts",{attrs:{id:"install-gradle-dsl"},scopedSlots:t._u([{key:"groovy",fn:function(){return[e("pre",[e("fgp-code",[t._v("plugins {\n    "),e("fgp-code-comment",[t._v("// For JDK 11+")]),t._v("\n    id 'org.siouan.frontend-jdk11' version '5.0.0'\n    "),e("fgp-code-comment",[t._v("// For JDK 8+")]),t._v("\n    id 'org.siouan.frontend-jdk8' version '5.0.0'\n}")],1)],1)]},proxy:!0},{key:"kotlin",fn:function(){return[e("pre",[e("fgp-code",[t._v("plugins {\n    "),e("fgp-code-comment",[t._v("// For JDK 11+")]),t._v('\n    id("org.siouan.frontend-jdk11") version "5.0.0"\n    '),e("fgp-code-comment",[t._v("// For JDK 8+")]),t._v('\n    id("org.siouan.frontend-jdk8") version "5.0.0"\n}')],1)],1)]},proxy:!0}])})],1),t._v(" "),e("li",[e("p",{staticClass:"mb-2"},[t._v("\n                            Using\n                            "),e("fgp-gradle-docs-link",{attrs:{path:"/current/userguide/plugins.html#sec:applying_plugins_buildscript"}},[t._v("Gradle build script block")])],1),t._v(" "),e("fgp-gradle-scripts",{attrs:{id:"install-build-script-block"},scopedSlots:t._u([{key:"groovy",fn:function(){return[e("pre",[e("fgp-code",[t._v("buildscript {\n    repositories {\n        url 'https://plugins.gradle.org/m2/'\n    }\n    dependencies {\n        "),e("fgp-code-comment",[t._v("// For JDK 11+")]),t._v("\n        classpath 'org.siouan:frontend-gradle-plugin-jdk11:5.0.0'\n        "),e("fgp-code-comment",[t._v("// For JDK 8+")]),t._v("\n        classpath 'org.siouan:frontend-gradle-plugin-jdk8:5.0.0'\n    }\n}\n\n"),e("fgp-code-comment",[t._v("// For JDK 11+")]),t._v("\napply plugin: 'org.siouan.frontend-jdk11'\n"),e("fgp-code-comment",[t._v("// For JDK 8+")]),t._v("\napply plugin: 'org.siouan.frontend-jdk8'")],1)],1)]},proxy:!0},{key:"kotlin",fn:function(){return[e("pre",[e("fgp-code",[t._v('buildscript {\n    repositories {\n        url = uri("https://plugins.gradle.org/m2/")\n    }\n    dependencies {\n        '),e("fgp-code-comment",[t._v("// For JDK 11+")]),t._v('\n        classpath("org.siouan:frontend-gradle-plugin-jdk11:5.0.0")\n        '),e("fgp-code-comment",[t._v("// For JDK 8+")]),t._v('\n        classpath("org.siouan:frontend-gradle-plugin-jdk8:5.0.0")\n    }\n}\n\n'),e("fgp-code-comment",[t._v("// For JDK 11+")]),t._v('\napply(plugin = "org.siouan.frontend-jdk11")\n'),e("fgp-code-comment",[t._v("// For JDK 8+")]),t._v('\napply(plugin = "org.siouan.frontend-jdk8")')],1)],1)]},proxy:!0}])})],1)])]),t._v(" "),e("li",[e("fgp-site-link",{attrs:{path:t.fgp.paths.configuration}},[t._v("Configure")]),t._v(" your project, optionally\n                with the help of "),e("fgp-repo-link",{attrs:{path:"/tree/master/examples"}},[t._v("examples")]),t._v(" provided for\n                typical use cases.\n            ")],1),t._v(" "),e("li",[t._v("Run "),e("fgp-code",[t._v("gradlew build")]),t._v(".")],1),t._v(" "),e("li",[t._v("\n                If you need to run\n                "),e("fgp-code",[t._v("node")]),t._v("/"),e("fgp-code",[t._v("npm")]),t._v("/"),e("fgp-code",[t._v("npx")]),t._v("/"),e("fgp-code",[t._v("yarn")]),t._v("\n                executables from a command line (e.g. to start a development server), take a look at the\n                "),e("fgp-site-link",{attrs:{path:t.fgp.paths.faqs}},[t._v("FAQ")]),t._v(".\n            ")],1)])],1)}),[],!1,null,null,null);n.default=component.exports}}]);