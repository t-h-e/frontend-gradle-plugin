(window.webpackJsonp=window.webpackJsonp||[]).push([[55,28],{308:function(e,t,n){"use strict";n.r(t);n(113),n(31);var o=n(0),code=n(112),r=n(140),l=n(85),f=o.a.component("fgp-property-link",{components:{fgpCode:code.default,fgpSiteLink:r.default},mixins:[l.a],props:{name:{type:String,required:!0}}}),d=n(13),component=Object(d.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-site-link",{attrs:{path:"".concat(e.fgp.paths.configuration,"#").concat(e.name)}},[e.$slots.default?[e._t("default")]:t("fgp-code",[e._v(e._s(e.name))])],2)}),[],!1,null,null,null);t.default=component.exports},357:function(e,t,n){"use strict";n.r(t);var o=n(0),code=n(112),r=n(309),l=n(308),f=o.a.component("fgp-node-version-property",{components:{fgpCode:code.default,fgpProperty:r.default,fgpPropertyLink:l.default}}),d=n(13),component=Object(d.a)(f,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("fgp-property",{attrs:{name:"nodeVersion",type:"java.lang.String",required:!1,"default-value":null,example:"18.17.1",tasks:["installNode"]}},[t("p",[e._v("\n        The version number is used to build the exact URL to download the distribution. Though it is not required,\n        it must be defined when\n        "),t("fgp-property-link",{attrs:{name:"nodeDistributionProvided"}}),e._v(" property is "),t("fgp-code",[e._v("false")]),e._v(" and\n        "),t("fgp-property-link",{attrs:{name:"nodeDistributionUrlPathPattern"}}),e._v(" property contains the\n        "),t("fgp-code",[e._v("VERSION")]),e._v(" token.\n    ")],1)])}),[],!1,null,null,null);t.default=component.exports}}]);