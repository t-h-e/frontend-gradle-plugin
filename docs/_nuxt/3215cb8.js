(window.webpackJsonp=window.webpackJsonp||[]).push([[83,14,16,28,30,31,74,81],{308:function(e,t,n){"use strict";n.r(t);n(113),n(31);var r=n(0),code=n(112),o=n(140),l=n(85),c=r.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:o.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),f=n(13),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-site-link",{attrs:{path:"".concat(e.fgp.paths.configuration,"#").concat(e.name)}},[e.$slots.default?[e._t("default")]:t("fgp-code",[e._v(e._s(e.name))])],2)}),[],!1,null,null,null);t.default=component.exports},310:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(84),l=r.a.component("fgp-gradle-docs-link",{components:{fgpLink:o.default},props:{path:{type:String,default:null},hoverStyleDisabled:{type:Boolean,default:!1}}}),c=n(13),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-link",{attrs:{href:"https://docs.gradle.org".concat(e.path),"hover-style-disabled":e.hoverStyleDisabled}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},311:function(e,t,n){"use strict";n.r(t);n(113),n(31);var r=n(0),code=n(112),o=n(140),l=n(85),c=r.a.component("fgp-task-link",{components:{fgpCode:code.default,fgpSiteLink:o.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),f=n(13),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-site-link",{attrs:{path:"".concat(e.fgp.paths.tasks,"#").concat(e.name)}},[t("fgp-code",[e._v(e._s(e.name))])],1)}),[],!1,null,null,null);t.default=component.exports},312:function(e,t,n){"use strict";n.r(t);n(31);var r=n(0),o=n(310),l=n(308),c=n(140),f=n(311),d=n(313),_=n(314),k=r.a.component("fgp-task",{components:{fgpGradleDocsLink:o.default,fgpPropertyLink:l.default,fgpSiteLink:c.default,fgpTaskLink:f.default,fgpTaskLinkAnchor:d.default,fgpTaskPropertyType:_.default},props:{name:{type:String,required:!0},type:{type:Boolean,default:!1},dependingTasks:{type:Array,default:function(){return[]}},inputs:{type:Array,default:function(){return[]}},outputs:{type:Array,default:function(){return[]}},cacheable:{type:Boolean,default:!1}},computed:{skippable:function(){return!!this.$slots.skipConditions}}}),v=n(13),component=Object(v.a)(k,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("article",{staticClass:"mb-3 border-bottom"},[t("header",[t("h4",[t("fgp-task-link-anchor",{attrs:{name:e.name}}),e._v(" "),e.type?[e._v("Type")]:[e._v("Task")],e._v(" "),t("fgp-code",[e._v("\n                "+e._s(e.name)+"\n            ")]),e._v("\n            -\n            "),e._t("title"),e._v(" "),e.cacheable?t("fgp-gradle-docs-link",{staticClass:"badge badge-dark",attrs:{path:"/current/userguide/build_cache.html#sec:task_output_caching_details",title:"Cacheable task","hover-style-disabled":""}},[e._v("C")]):e._e(),e._v(" "),t("fgp-site-link",{staticClass:"small text-info",attrs:{path:"#app"}},[e._v("↑")])],2),e._v(" "),t("ul",[e.dependingTasks.length>0?t("li",[e._v("\n                Depends on:\n                "),e._l(e.dependingTasks,(function(n,r){return t("span",{key:n},[t("fgp-task-link",{attrs:{name:n}}),r<e.dependingTasks.length-1?[e._v(", ")]:e._e()],2)}))],2):e._e(),e._v(" "),e.inputs.length>0?t("li",[e._v("\n                Inputs:\n                "),t("ul",e._l(e.inputs,(function(input,n){return t("li",{key:n},[t("fgp-task-property-type",{attrs:{type:input.type}}),t("fgp-code",[e._v(e._s(input.name))]),e._v(":\n                        "),"P"===input.binding?[t("fgp-property-link",{attrs:{name:input.property}}),e._v(" property\n                        ")]:e._e(),e._v(" "),"C"===input.binding?e._t(input.name):e._e()],2)})),0)]):e._e(),e._v(" "),e.outputs.length>0?t("li",[e._v("\n                Outputs:\n                "),t("ul",e._l(e.outputs,(function(output,n){return t("li",{key:n},[t("fgp-task-property-type",{attrs:{type:output.type}}),t("fgp-code",[e._v(e._s(output.name))]),e._v(":\n                        "),"C"===output.binding?e._t(output.name):e._e()],2)})),0)]):e._e(),e._v(" "),e.skippable?t("li",[e._v("\n                Skipped when "),e._t("skipConditions")],2):e._e()])]),e._v(" "),t("section",{staticClass:"px-3"},[e._t("description")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Header:n(114).default})},313:function(e,t,n){"use strict";n.r(t);n(31);var r=n(0).a.component("fgp-task-link-anchor",{props:{name:{type:String,required:!0}}}),o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("span",{staticClass:"text-info",attrs:{id:e.name}},[e._v("#")])}),[],!1,null,null,null);t.default=component.exports},314:function(e,t,n){"use strict";n.r(t);n(46);var r=n(0),o=n(310),l="ET",c="F",f="S",d="RF",_=r.a.component("fgp-task-property-type",{components:{fgpGradleDocsLink:o.default},props:{type:{type:String,required:!0,validator:function(e){return[l,c,d,f].includes(e)}}},computed:{gradleDocsLinkPath:function(){switch(this.type){case d:return"/current/javadoc/org/gradle/api/file/RegularFileProperty.html";case l:case c:case f:return"/current/javadoc/org/gradle/api/provider/Property.html";default:return null}},gradleDocsLinkTitle:function(){switch(this.type){case l:return"Provider of org.siouan.frontendgradleplugin.domain.ExecutableType instance (task is out-of-date if the value changes)";case c:return"Provider of java.io.File instance (task is out-of-date if the path changes)";case d:return"Provider of org.gradle.api.file.RegularFile instance (task is out-of-date if the content changes)";case f:return"Provider of java.lang.String instance (task is out-of-date if the value changes)";default:return null}},chipClass:function(){switch(this.type){case l:return"badge-dark";case c:case f:return"badge-primary";case d:return"badge-danger";default:return null}}}}),k=n(13),component=Object(k.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-gradle-docs-link",{staticClass:"badge mr-1",class:e.chipClass,attrs:{path:e.gradleDocsLinkPath,title:e.gradleDocsLinkTitle,"hover-style-disabled":""}},[e._v(e._s(e.type))])}),[],!1,null,null,null);t.default=component.exports},315:function(e,t,n){"use strict";n.r(t);var r=n(0).a.component("fgp-info",{}),o=n(13),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",{staticClass:"text-info px-2"},[t("i",{staticClass:"fas fa-info-circle mr-1"}),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},392:function(e,t,n){"use strict";n.r(t);var r=n(0),code=n(112),o=n(315),l=n(312),c=r.a.component("fgp-resolve-package-manager-task",{components:{fgpCode:code.default,fgpInfo:o.default,fgpTask:l.default},data:function(){return{inputs:[{name:"packageJsonFile",type:"RF",binding:"C"},{name:"nodeInstallDirectory",type:"F",binding:"P",property:"nodeInstallDirectory"}],outputs:[{name:"packageManagerSpecificationFile",type:"RF",binding:"C"},{name:"packageManagerExecutablePathFile",type:"RF",binding:"C"}]}}}),f=n(13),component=Object(f.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-task",{attrs:{name:"resolvePackageManager","depending-tasks":["installNode"],inputs:e.inputs,outputs:e.outputs,cacheable:""},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("Resolve package manager")]},proxy:!0},{key:"packageJsonFile",fn:function(){return[t("fgp-property-link",{attrs:{name:"packageJsonDirectory"}}),t("fgp-code",[e._v("/package.json")])]},proxy:!0},{key:"packageManagerSpecificationFile",fn:function(){return[t("fgp-property-link",{attrs:{name:"cacheDirectory"}}),t("fgp-code",[e._v("/resolvePackageManager/package-manager-specification.txt")])]},proxy:!0},{key:"packageManagerExecutablePathFile",fn:function(){return[t("fgp-property-link",{attrs:{name:"cacheDirectory"}}),t("fgp-code",[e._v("/resolvePackageManager/package-manager-executable-path.txt")])]},proxy:!0},{key:"skipConditions",fn:function(){return[t("fgp-property-link",{attrs:{name:"packageJsonDirectory"}}),t("fgp-code",[e._v("/package.json")]),e._v(" file does not exist.\n    ")]},proxy:!0},{key:"description",fn:function(){return[t("p",[e._v("\n            The task identifies the name and the version of the package manager applicable to the project by parsing\n            the "),t("fgp-nodejs-link",{attrs:{path:"/api/packages.html#packagemanager",label:"packageManager"}}),e._v(" property located\n            in the "),t("fgp-code",[e._v("package.json")]),e._v(" file (pointed by the\n            "),t("fgp-property-link",{attrs:{name:"packageJsonDirectory"}}),e._v(" property). For example, if the\n            "),t("fgp-code",[e._v("package.json")]),e._v(" file contains "),t("fgp-code",[e._v('"packageManager": "npm@9.6.7"')]),e._v(",\n            the task resolves "),t("fgp-code",[e._v("npm")]),e._v(" as the name of the package manager, and\n            "),t("fgp-code",[e._v("9.6.7")]),e._v(" as its version.\n        ")],1),e._v(" "),t("p",[e._v("\n            The task takes advantage of\n            "),t("fgp-gradle-guides-link",{attrs:{path:"/performance/#incremental_build"}},[e._v("Gradle incremental build")]),e._v(", and is not executed again unless one of its\n            inputs/outputs changed. Consequently, if the task takes part of a Gradle build, its outcome will be\n            "),t("fgp-gradle-task-outcome-link",{attrs:{outcome:"UP-TO-DATE"}}),e._v(".\n        ")],1),e._v(" "),t("fgp-info",[e._v("\n            This task should not be executed directly. Gradle executes it if the build requires it.\n        ")])]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports}}]);