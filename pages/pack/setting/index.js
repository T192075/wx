require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/pack/setting/index"],{6567:function(e,n,t){t.r(n);var r=t("ebae"),o=t("81bb");for(var i in o)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(i);t("ffb2");var c=t("f0c5"),a=Object(c.a)(o.default,r.b,r.c,!1,null,"0d138502",null,!1,r.a,void 0);n.default=a.exports},"81bb":function(e,n,t){t.r(n);var r=t("aa22"),o=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n.default=o.a},aa22:function(e,n,t){(function(e){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(t("2eee")),i=r(t("c973")),c=r(t("9523")),a=t("26cb");function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,c.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default={name:"AccountSetting",data:function(){return{pageMeta:{name:"账户设置",category:"我的",type:"列表页",column:"",plate:""}}},computed:{list:function(){return[{icon:"",title:"隐私政策",link:this.app.link.privacy,eventCode:""},{icon:"",title:"权限管理",link:"setting",eventCode:""}]}},methods:f(f({},(0,a.mapActions)(["exitLogin"])),{},{goLink:function(n){"setting"===n.link?e.openSetting():this.handleLinkRoute(n.link)},doExit:function(){var e=this;return(0,i.default)(o.default.mark((function n(){return o.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.exitLogin(),n.next=3,e.$nextTick();case 3:e.handleLinkRoute("/pages/mine/index | switchTab");case 4:case"end":return n.stop()}}),n)})))()}})}}).call(this,t("543d").default)},ebae:function(e,n,t){t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={topBar:function(){return Promise.all([t.e("common/vendor"),t.e("pages/components/top-bar/index")]).then(t.bind(null,"6ebb"))},tmIcon:function(){return Promise.all([t.e("common/vendor"),t.e("components/tm-icon/index")]).then(t.bind(null,"f4eb"))}},o=function(){this.$createElement;this._self._c},i=[]},edfa:function(e,n,t){(function(e,n){var r=t("4ea4");t("6cdc"),r(t("66fd"));var o=r(t("6567"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("bc2e").default,t("543d").createPage)}},[["edfa","common/runtime","common/vendor","pages/pack/common/vendor"]]]);