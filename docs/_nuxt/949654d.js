(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2,4,17,18],{215:function(e,t,n){"use strict";n.r(t);var o=n(0).a.component("fgp-nodejs-link",{}),r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("fgp-link",{attrs:{href:"https://nodejs.org/"}},[e._v(e._s(e.$t("navigation.nodejs.label")))])}),[],!1,null,null,null);t.default=component.exports},221:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(90),l=o.a.component("fgp-faq",{components:{fgpSiteLink:r.default}}),c=n(4),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("article",{staticClass:"mt-4 pb-2 border-bottom"},[n("header",[n("h4",[e._t("question"),e._v(" "),n("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[e._v("↑")])],2)]),e._v(" "),n("section",{staticClass:"px-3"},[e._t("answer")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(69).default})},224:function(e,t,n){var content=n(230);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(35).default)("1251d6bd",content,!0,{sourceMap:!1})},229:function(e,t,n){"use strict";n(224)},230:function(e,t,n){var o=n(34)(!1);o.push([e.i,".fgp-block-quote[data-v-21395b0f]{color:#9f9f9f;border:solid #cfcfcf;border-width:0 0 0 3px;font-size:1rem}",""]),e.exports=o},232:function(e,t,n){"use strict";n.r(t);var o=n(0).a.component("fgp-block-quote",{}),r=(n(229),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("blockquote",{staticClass:"blockquote mt-3 px-3 fgp-block-quote"},[e._t("default")],2)}),[],!1,null,"21395b0f",null);t.default=component.exports},233:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(53),l=o.a.component("fgp-java-system-properties-link",{components:{fgpLink:r.default}}),c=n(4),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("fgp-link",{attrs:{href:"https://docs.oracle.com/javase/tutorial/essential/environment/sysprop.html"}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},267:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n(232),code=n(68),l=n(221),c=n(233),f=n(215),d=o.a.component("fgp-unsupported-platform-exception-faq",{components:{fgpBlockQuote:r.default,fgpCode:code.default,fgpFaq:l.default,fgpNodejsLink:f.default,fgpJavaSystemPropertiesLink:c.default}}),v=n(4),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fgp-faq",{scopedSlots:e._u([{key:"question",fn:function(){return[e._v("\n        What should I do when error\n        "),n("fgp-code",[e._v("UnsupportedPlatformException")]),e._v("\n        occurs?\n    ")]},proxy:!0},{key:"answer",fn:function(){return[e._v('\n        By default, the plugin uses an automatic resolution process to "guess" the most relevant\n        '),n("fgp-nodejs-link"),e._v("\n        distribution applicable for your O/S and CPU architecture. Technically speaking, the plugin relies on\n        "),n("fgp-java-system-properties-link",[e._v("JVM system properties")]),e._v(" named\n        "),n("fgp-code",[e._v("os.name")]),e._v(" and "),n("fgp-code",[e._v("os.arch")]),e._v(". If the plugin gets values it does not expect\n        from these system properties, the following error shall occur during the build:\n\n        "),n("fgp-block-quote",[e._v("\n            Execution failed for task ':installNode'.\n            > org.siouan.frontendgradleplugin.domain.exception.UnsupportedPlatformException: This platform is not\n            supported yet: Platform {jvmArch=<os.name>, osName=<os.arch>, environment=...}\n        ")]),e._v("\n\n        In this case, please open an issue in the project's "),n("fgp-repo-link",[e._v("issue tracker")]),e._v(", and\n        provide the entire error message above. As a workaround, consider using property\n        "),n("fgp-property-link",{attrs:{name:"nodeDistributionUrlPathPattern"}}),e._v(" and specify a hard-coded path to download the\n        relevant distribution from the "),n("fgp-nodejs-link"),e._v(" distribution server.\n    ")]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports}}]);