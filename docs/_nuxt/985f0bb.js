(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{321:function(t,n,e){"use strict";e.r(n);var l=e(0),r=e(84),o=l.a.component("fgp-yarn-link",{components:{fgpLink:r.default},props:{label:{type:String,default:null},labelKey:{type:String,default:"navigation.yarnBerry.label"},path:{type:String,default:""},title:{type:String,default:null}},computed:{href:function(){return"https://yarnpkg.com/".concat(this.path)},internalLabel:function(){return this.label||this.$t(this.labelKey)},internalTitle:function(){return this.title||this.$t("navigation.yarnBerry.title")}}}),f=e(13),component=Object(f.a)(o,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("fgp-link",{attrs:{href:t.href,title:t.internalTitle}},[t._v(t._s(t.internalLabel))])}),[],!1,null,null,null);n.default=component.exports}}]);