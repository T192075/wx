require("../../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/tickets/buytickets/noticeDetail/noticeDetail","pages/tickets/components/ui-fit/index"],{3849:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,n.default={props:{src:{type:String,default:function(){return"https://industry.map.qq.com/cloud/file/2022/06/23/1655970511514_XWesS4XH.png"}},width:{type:Number,default:function(){return 750}},height:{type:Number,default:function(){return 1624}}},methods:{}}},5292:function(e,n,t){t.r(n);var o=t("fcfc"),i=t("bdb7");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("1100");var c=t("f0c5"),u=Object(c.a)(i.default,o.b,o.c,!1,null,"8343deec",null,!1,o.a,void 0);n.default=u.exports},"5f93":function(e,n,t){t.r(n);var o=t("3849"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n.default=i.a},"85a5":function(e,n,t){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t("2eee")),a=o(t("c973")),c=o(t("a712")),u=t("b35a"),r=null;n.default={name:"NoticeDetails",data:function(){return{uiFit:c.default,notice:{},pageMeta:{name:"公告详情页",category:"推荐",type:"详情页",column:"购票约展",plate:"公告"}}},onLoad:function(e){var n=this;return(0,a.default)(i.default.mark((function t(){var o;return i.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e,"******pages onload options*******"),o=e.id,t.next=4,(0,u.getStrategyGridDetail)({id:o});case 4:n.notice=t.sent,console.log(n.notice,"this.notice");case 6:case"end":return t.stop()}}),t)})))()},onShow:function(){r=new Date,console.log("onShow",r)},onUnload:function(){if("故宫博物院订票须知"===this.notice.name){var e=new Date-r;console.log("onUnload",e,"故宫博物院订票须知"),this.handleCommonUma("Um_Event_BookingNoticePageView",{Um_Key_Duration:e})}},onHide:function(){if("故宫博物院订票须知"===this.notice.name){var e=new Date-r;console.log("onHide",e,"故宫博物院订票须知"),this.handleCommonUma("Um_Event_BookingNoticePageView",{Um_Key_Duration:e})}},methods:{linkTap:function(e){this.handleLinkRoute(e.href)}}}},"8d7c":function(e,n,t){t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){}));var o=function(){this.$createElement;this._self._c},i=[]},a712:function(e,n,t){t.r(n);var o=t("8d7c"),i=t("5f93");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("d30a");var c=t("f0c5"),u=Object(c.a)(i.default,o.b,o.c,!1,null,"ca9d94f8",null,!1,o.a,void 0);n.default=u.exports},bdb7:function(e,n,t){t.r(n);var o=t("85a5"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n.default=i.a},be27:function(e,n,t){(function(e,n){var o=t("4ea4");t("6cdc"),o(t("66fd"));var i=o(t("5292"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(i.default)}).call(this,t("bc2e").default,t("543d").createPage)},fcfc:function(e,n,t){t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={topBar:function(){return Promise.all([t.e("common/vendor"),t.e("pages/components/top-bar/index")]).then(t.bind(null,"6ebb"))},mpHtml:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/mp-html/components/mp-html/mp-html")]).then(t.bind(null,"e46e"))}},i=function(){this.$createElement;this._self._c},a=[]}},[["be27","common/runtime","common/vendor","pages/tickets/common/vendor"]]]);