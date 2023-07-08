(window.webpackJsonp=window.webpackJsonp||[]).push([[59,25,26,27,32],{308:function(t,e,n){"use strict";n.r(e);n(113),n(31);var r=n(0),code=n(112),l=n(140),o=n(85),f=r.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:l.default},mixins:[o.a],props:{name:{type:String,required:!0}}}),c=n(13),component=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-site-link",{attrs:{path:"".concat(t.fgp.paths.tasks,"#").concat(t.name)}},[e("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},309:function(t,e,n){"use strict";n.r(e);n(31),n(26),n(46);var r=n(0),code=n(112),l=n(84),o=n(311),f=n(140),c=n(308),d=/^javax?\.([a-z]\w+\.)+[A-Z]\w+$/,_="java.lang.String",v=r.a.component("fgp-property",{components:{fgpCode:code.default,fgpLink:l.default,fgpPropertyLinkAnchor:o.default,fgpSiteLink:f.default,fgpTaskLink:c.default},props:{name:{type:String,required:!0},type:{type:String,required:!0},required:{type:Boolean,default:!0},defaultValue:{type:String,default:null},example:{type:String,default:null},tasks:{type:Array,required:!0}},computed:{defaultScriptValue:function(){return null===this.defaultValue?"null":this.type===_?'"'.concat(this.defaultValue,'"'):this.defaultValue},jdkHref:function(){return this.type&&d.test(this.type)?"https://docs.oracle.com/javase/8/docs/api/index.html?".concat(this.type.replace(/\./,"/"),".html"):null},scriptExample:function(){return this.type===_?'"'.concat(this.example,'"'):this.example}}}),y=n(13),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("article",{staticClass:"mb-3 border-bottom"},[e("header",[e("h4",[e("fgp-property-link-anchor",{attrs:{name:t.name}}),t._v("\n            Property\n            "),e("fgp-code",[t._v("\n                "+t._s(t.name)+"\n            ")]),t._v(" "),e("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[t._v("↑")])],1),t._v(" "),e("ul",[t.tasks.length>0?e("li",[t._v("\n                Related tasks:\n                "),t._l(t.tasks,(function(n,r){return e("span",{key:n},[e("fgp-task-link",{attrs:{name:n}}),r<t.tasks.length-1?[t._v(", ")]:t._e()],2)}))],2):t._e(),t._v(" "),e("li",[t._v("\n                Type:\n                "),t.jdkHref?[e("fgp-link",{attrs:{href:t.jdkHref}},[e("fgp-code",[t._v(t._s(t.type))])],1)]:[e("fgp-code",[t._v(t._s(t.type))])]],2),t._v(" "),e("li",[t._v("\n                Required: "),e("fgp-code",[t._v(t._s(t.required))])],1),t._v(" "),e("li",[t._v("\n                Default value: "),e("fgp-code",[t._v(t._s(t.defaultScriptValue))])],1),t._v(" "),t.example?e("li",[t._v("\n                Example: "),e("fgp-code",[t._v(t._s(t.scriptExample))])],1):t._e()])]),t._v(" "),e("section",{staticClass:"px-3"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(114).default})},310:function(t,e,n){"use strict";n.r(e);n(113),n(31);var r=n(0),code=n(112),l=n(140),o=n(85),f=r.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:l.default},mixins:[o.a],props:{name:{type:String,required:!0}}}),c=n(13),component=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-site-link",{attrs:{path:"".concat(t.fgp.paths.configuration,"#").concat(t.name)}},[e("fgp-code",[t._v(t._s(t.name))])],1)}),[],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n.r(e);n(31);var r=n(0).a.component("fgp-property-link-anchor",{props:{name:{type:String,required:!0}}}),l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"text-info",attrs:{id:t.name}},[t._v("#")])}),[],!1,null,null,null);e.default=component.exports},366:function(t,e,n){"use strict";n.r(e);var r=n(0),code=n(112),l=n(309),o=n(310),f=r.a.component("fgp-yarn-distribution-url-path-pattern-property",{components:{fgpCode:code.default,fgpProperty:l.default,fgpPropertyLink:o.default}}),c=n(13),component=Object(c.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("fgp-property",{attrs:{name:"yarnDistributionUrlPathPattern",type:"java.lang.String","default-value":"vVERSION/yarn-vVERSION.tar.gz",tasks:["installYarn"]}},[e("p",[t._v("\n        This property is used to build the exact URL to download the distribution, by appending its value to the\n        value of the "),e("fgp-property-link",{attrs:{name:"yarnDistributionUrlRoot"}}),t._v(" property. This property may be set with a\n        fixed trailing path part (e.g. "),e("fgp-code",[t._v("dist/yarn-v1.22.10.tar.gz")]),t._v("), or take advantage of the\n        automatic distribution resolution in the plugin, using specific token in the pattern such as\n        "),e("fgp-code",[t._v("VERSION")]),t._v(" (see the "),e("fgp-task-link",{attrs:{name:"installYarn"}}),t._v(" task).\n    ")],1),t._v(" "),e("p",[t._v("\n        Then, the exact URL used by default to download the distribution is\n        "),e("fgp-code",[t._v("https://github.com/yarnpkg/yarn/releases/download/vVERSION/yarn-vVERSION.tar.gz")]),t._v(".\n    ")],1),t._v(" "),e("div",{staticClass:"card my-3"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v("About URL pattern token")]),t._v(" "),e("p",{staticClass:"card-text"},[t._v("\n                The "),e("fgp-property-link",{attrs:{name:"yarnDistributionUrlRoot"}}),t._v(" property and this property offer a\n                convenient way to download distributions from a custom website - e.g. a website mirroring the\n                official "),e("fgp-yarn-link"),t._v(" website, and still take advantage of the automatic resolution of the\n                exact URL. The property may contain the following token:\n            ")],1),t._v(" "),e("ul",{staticClass:"card-text"},[e("li",[e("fgp-code",[t._v("VERSION")]),t._v(": automatically replaced with the version number set in the\n                    "),e("fgp-property-link",{attrs:{name:"yarnVersion"}}),t._v(" property.\n                ")],1)])])])])}),[],!1,null,null,null);e.default=component.exports}}]);