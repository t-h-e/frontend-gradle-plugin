(window.webpackJsonp=window.webpackJsonp||[]).push([[81,2,4,5,6,7,10,17,18,21,25,28],{210:function(e,t,n){"use strict";n.r(t);var o=n(0),code=n(71),r=n(94),l=n(53),f=o.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:r.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),c=n(4),component=Object(c.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-site-link",{attrs:{path:e.fgp.paths.configuration+"#"+e.name}},[n("fgp-code",[e._v(e._s(e.name))])],1)}),[],!1,null,null,null);t.default=component.exports},213:function(e,t,n){"use strict";n.r(t);var o=n(0).a.component("fgp-info",{}),r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"text-info px-2"},[n("i",{staticClass:"fas fa-info-circle mr-1"}),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},216:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(54),l=o.a.component("fgp-yarn-link",{components:{fgpLink:r.default},props:{labelKey:{type:String,default:"navigation.yarnBerry.label"}},computed:{label:function(){return this.$t(this.labelKey)}}}),f=n(4),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("fgp-link",{attrs:{href:"https://yarnpkg.com/",title:e.$t("navigation.yarnBerry.title")}},[e._v(e._s(e.label))])}),[],!1,null,null,null);t.default=component.exports},217:function(e,t,n){"use strict";n.r(t);var o=n(0).a.component("fgp-nodejs-link",{}),r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("fgp-link",{attrs:{href:"https://nodejs.org/"}},[e._v(e._s(e.$t("navigation.nodejs.label")))])}),[],!1,null,null,null);t.default=component.exports},221:function(e,t,n){"use strict";n.r(t);var o=n(0).a.component("fgp-main-title",{}),r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(72).default})},222:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(94),l=o.a.component("fgp-faq",{components:{fgpSiteLink:r.default}}),f=n(4),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"mt-4 pb-2 border-bottom"},[n("header",[n("h4",[e._t("question"),e._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[e._v("↑")])],2)]),e._v(" "),n("section",{staticClass:"px-3"},[e._t("answer")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(72).default})},223:function(e,t,n){"use strict";n(224),n(17);t.a={head:function(){var e={meta:[],link:[]};return e.title=this.htmlTitle?this.htmlTitle:"Frontend Gradle plugin",this.metaDescription&&e.meta.push({hid:"description",name:"description",content:this.metaDescription}),e.meta.push({name:"og:title",content:e.title}),e.meta.push({name:"og:description",content:e.meta.find((function(meta){return"description"===meta.name})).content}),this.linkCanonicalHref&&e.link.push({rel:"canonical",href:this.linkCanonicalHref}),e}}},224:function(e,t,n){"use strict";var o=n(5),r=n(96)(5),l="find",f=!0;l in[]&&Array(1).find((function(){f=!1})),o(o.P+o.F*f,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n(95)(l)},225:function(e,t,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("1251d6bd",content,!0,{sourceMap:!1})},230:function(e,t,n){"use strict";n(225)},231:function(e,t,n){var o=n(33)(!1);o.push([e.i,".fgp-block-quote[data-v-21395b0f]{color:#9f9f9f;border:solid #cfcfcf;border-width:0 0 0 3px;font-size:1rem}",""]),e.exports=o},233:function(e,t,n){"use strict";n.r(t);var o=n(0).a.component("fgp-block-quote",{}),r=(n(230),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("blockquote",{staticClass:"blockquote mt-3 px-3 fgp-block-quote"},[e._t("default")],2)}),[],!1,null,"21395b0f",null);t.default=component.exports},234:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(54),l=o.a.component("fgp-java-system-properties-link",{components:{fgpLink:r.default}}),f=n(4),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("fgp-link",{attrs:{href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html"}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},268:function(e,t,n){"use strict";n.r(t);var o=n(0),code=n(71),r=n(222),l=n(213),f=n(217),c=n(210),d=o.a.component("fgp-node-npm-npx-direct-use-faq",{components:{fgpCode:code.default,fgpFaq:r.default,fgpInfo:l.default,fgpNodejsLink:f.default,fgpPropertyLink:c.default}}),v=n(4),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n        How to use "),n("fgp-code",[e._v("node")]),e._v("/"),n("fgp-code",[e._v("npm")]),e._v("/"),n("fgp-code",[e._v("npx")]),e._v(" executables apart\n        from Gradle when the "),n("fgp-nodejs-link"),e._v(" distribution is downloaded by the plugin?\n    ")]},proxy:!0},{key:"answer",fn:function(){return[n("ul",[n("li",[e._v("\n                Create a "),n("fgp-code",[e._v("NODEJS_HOME")]),e._v(" environment variable containing the real path set in the\n                "),n("fgp-property-link",{attrs:{name:"nodeInstallDirectory"}}),e._v(" property.\n            ")],1),e._v(" "),n("li",[e._v("\n                Add the directory containing executables to the "),n("fgp-code",[e._v("PATH")]),e._v(" environment variable:\n                "),n("ul",[n("li",[e._v("On Unix-like O/S, add the "),n("fgp-code",[e._v("$NODEJS_HOME/bin")]),e._v(" path.")],1),e._v(" "),n("li",[e._v("On Windows O/S, add "),n("fgp-code",[e._v("%NODEJS_HOME%")]),e._v(" path.")],1)])],1)]),e._v(" "),n("fgp-info",[e._v("\n            Applies only when the "),n("fgp-property-link",{attrs:{name:"nodeDistributionProvided"}}),e._v(" property is\n            "),n("fgp-code",[e._v("false")]),e._v(".\n        ")],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},269:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(233),code=n(71),l=n(222),f=n(234),c=n(217),d=o.a.component("fgp-unsupported-platform-exception-faq",{components:{fgpBlockQuote:r.default,fgpCode:code.default,fgpFaq:l.default,fgpNodejsLink:c.default,fgpJavaSystemPropertiesLink:f.default}}),v=n(4),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n        What should I do when error\n        "),n("fgp-code",[e._v("UnsupportedPlatformException")]),e._v("\n        occurs?\n    ")]},proxy:!0},{key:"answer",fn:function(){return[e._v('\n        By default, the plugin uses an automatic resolution process to "guess" the most relevant\n        '),n("fgp-nodejs-link"),e._v("\n        distribution applicable for your O/S and CPU architecture. Technically speaking, the plugin relies on\n        "),n("fgp-java-system-properties-link",[e._v("JVM system properties")]),e._v(" named\n        "),n("fgp-code",[e._v("os.name")]),e._v(" and "),n("fgp-code",[e._v("os.arch")]),e._v(". If the plugin gets values it does not expect\n        from these system properties, the following error shall occur during the build:\n\n        "),n("fgp-block-quote",[e._v("\n            Execution failed for task ':installNode'.\n            > org.siouan.frontendgradleplugin.domain.exception.UnsupportedPlatformException: This platform is not\n            supported yet: Platform {jvmArch=<os.name>, osName=<os.arch>, environment=...}\n        ")]),e._v("\n\n        In this case, please open an issue in the project's "),n("fgp-repo-link",[e._v("issue tracker")]),e._v(", and\n        provide the entire error message above. As a workaround, consider using property\n        "),n("fgp-property-link",{attrs:{name:"nodeDistributionUrlPathPattern"}}),e._v(" and specify a hard-coded path to download the\n        relevant distribution from the "),n("fgp-nodejs-link"),e._v(" distribution server.\n    ")]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},270:function(e,t,n){"use strict";n.r(t);var o=n(0),code=n(71),r=n(222),l=n(213),f=n(210),c=n(216),d=o.a.component("fgp-yarn-direct-use-faq",{components:{fgpCode:code.default,fgpFaq:r.default,fgpInfo:l.default,fgpPropertyLink:f.default,fgpYarnLink:c.default}}),v=n(4),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n        How to use "),n("fgp-code",[e._v("yarn")]),e._v(" executable apart from Gradle when the "),n("fgp-yarn-link"),e._v("\n        distribution is downloaded by the plugin?\n    ")]},proxy:!0},{key:"answer",fn:function(){return[n("ul",[n("li",[e._v("\n                Create a "),n("fgp-code",[e._v("YARN_HOME")]),e._v(" environment variable containing the real path set in the\n                "),n("fgp-property-link",{attrs:{name:"yarnInstallDirectory"}}),e._v(" property.\n            ")],1),e._v(" "),n("li",[e._v("\n                Add the directory containing executables to the "),n("fgp-code",[e._v("PATH")]),e._v(" environment variable:\n                "),n("ul",[n("li",[e._v("On Unix-like O/S, add the "),n("fgp-code",[e._v("$YARN_HOME/bin")]),e._v(" path.")],1),e._v(" "),n("li",[e._v("On Windows O/S, add "),n("fgp-code",[e._v("%YARN_HOME%\\bin")]),e._v(" path.")],1)])],1)]),e._v(" "),n("fgp-info",[e._v("\n            Releases < 6.0.0: applies only when the "),n("fgp-property-link",{attrs:{name:"yarnDistributionProvided"}}),e._v(" property\n            is "),n("fgp-code",[e._v("false")]),e._v(".\n        ")],1)]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},291:function(e,t,n){"use strict";n.r(t);var o=n(0),code=n(71),r=n(221),l=n(268),f=n(223),c=n(94),d=n(269),v=n(270),_=o.a.component("fgp-faqs",{components:{fgpCode:code.default,fgpMainTitle:r.default,fgpNodeNpmNpxDirectUseFaq:l.default,fgpSiteLink:c.default,fgpUnsupportedPlatformExceptionFaq:d.default,fgpYarnDirectUseFaq:v.default},mixins:[f.a],data:function(){return{htmlTitle:"Frequently asked questions",metaDescription:"Using node, npm, npx, yarn executables apart from Gradle and resolving common issues.",linkCanonicalHref:"https://siouan.github.io/frontend-gradle-plugin/faqs/"}}}),m=n(4),component=Object(m.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("fgp-main-title",[e._v("Frequently asked questions")]),e._v(" "),n("nav",[n("ul",[n("li",[n("fgp-site-link",{attrs:{path:"#node-npm-npx-direct-use"}},[e._v("\n                    How to use "),n("fgp-code",[e._v("node")]),e._v("/"),n("fgp-code",[e._v("npm")]),e._v("/"),n("fgp-code",[e._v("npx")]),e._v("\n                    executables apart from Gradle when the Node.js distribution is downloaded by the plugin?\n                ")],1)],1),e._v(" "),n("li",[n("fgp-site-link",{attrs:{path:"#yarn-direct-use"}},[e._v("\n                    How to use "),n("fgp-code",[e._v("yarn")]),e._v(" executable apart from Gradle when the Yarn distribution is\n                    downloaded by the plugin?\n                ")],1)],1),e._v(" "),n("li",[n("fgp-site-link",{attrs:{path:"#unsupported-platform-exception"}},[e._v("\n                    What should I do when error "),n("fgp-code",[e._v("UnsupportedPlatformException")]),e._v(" occurs?\n                ")],1)],1)])]),e._v(" "),n("fgp-node-npm-npx-direct-use-faq",{attrs:{id:"node-npm-npx-direct-use"}}),e._v(" "),n("fgp-yarn-direct-use-faq",{attrs:{id:"yarn-direct-use"}}),e._v(" "),n("fgp-unsupported-platform-exception-faq",{attrs:{id:"unsupported-platform-exception"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);