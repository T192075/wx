(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/components/home-top/index"],{8924:function(e,n,t){t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return o}));var o={imageView:function(){return Promise.all([t.e("common/vendor"),t.e("pages/components/image-view/index")]).then(t.bind(null,"2ff9"))}},i=function(){var e=this,n=(e.$createElement,e._self._c,e.list.length);e.$mp.data=Object.assign({},{$root:{g0:n}})},a=[]},9090:function(e,n,t){t.r(n);var o=t("ec8e"),i=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n.default=i.a},"96cc":function(e,n,t){t.r(n);var o=t("8924"),i=t("9090");for(var a in i)["default"].indexOf(a)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("a074");var c=t("f0c5"),r=Object(c.a)(i.default,o.b,o.c,!1,null,"616f32dd",null,!1,o.a,void 0);n.default=r.exports},ec8e:function(e,n,t){(function(e){var o=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(t("9523")),a=t("26cb");function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default={name:"HomeTop",components:{snow:function(){Promise.all([t.e("common/vendor"),t.e("pages/components/snow/index")]).then(function(){return resolve(t("e50f"))}.bind(null,t)).catch(t.oe)},leaf:function(){Promise.all([t.e("common/vendor"),t.e("pages/components/leaf/index")]).then(function(){return resolve(t("f06f"))}.bind(null,t)).catch(t.oe)},summer:function(){Promise.all([t.e("common/vendor"),t.e("pages/components/summer/index")]).then(function(){return resolve(t("f341"))}.bind(null,t)).catch(t.oe)},autumn:function(){Promise.all([t.e("common/vendor"),t.e("pages/components/autumn/index")]).then(function(){return resolve(t("617e"))}.bind(null,t)).catch(t.oe)}},props:{list:{type:Array,default:function(){return[]}},quickEntry:{type:Array,default:function(){return[]}},pageName:{type:String,default:""},openInfo:{type:String,default:""},weather:{type:Object,default:function(){}}},data:function(){return{animationData:"",currentIndex:0,swiperDirection:"next",time:"",isLoadVideoFinish:!1,season:""}},mounted:function(){var e=new Date,n=e.getMonth()+1,t=e.getDate();this.time="".concat(n,"月").concat(t,"日"),this.season=this.getSeason()},methods:r(r({},(0,a.mapMutations)(["commonUpdate"])),{},{bindtimeupdate:function(e){e.detail.currentTime>0&&(this.isLoadVideoFinish=!0)},swiperTransition:function(e){this.swiperDirection=e.detail.dx>this.prevX?"next":"prev",this.prevX=e.detail.dx},swiperChange:function(e){var n=e.detail.current;this.currentIndex=n},goLink:function(e){e.link&&this.handleLinkRoute(e.link),e.eventCode&&this.handleCommonBeacon(e.eventCode),"游故宫首页"===this.pageName?this.handleCommonUma("Um_Event_TopClick",{Um_Key_ButtonName:e.text}):this.handleCommonUma("Um_Event_ProductClick",{Um_Key_ProductName:e.text,Um_Key_PageCategory:this.pageName})},goDetail:function(n,t){var o=n.jump_url,i=n.desc,a=n.type,c=n.title,r=n.id,s=n.image,u=n.jump_type,d=n.jump_page,p=n.jump_appid,l=n.code;if(this.handleCommonBeacon("find_banner_click",{banner_name:c}),1===u){if(2===a)this.commonUpdate({module:"home",type:"shareData",value:{title:c,desc:i,pic:s,type:"节气",path:"pages/index/index",scene:"_c_t=".concat(Date.now())}}),this.handleLinkRoute("/pages/pack/share/index?id=".concat(r));else if(3===a){var m="/pages/pack/wenwu-detail/index?code=".concat(l);this.handleLinkRoute(m)}}else if(3===u&&o)this.handleLinkRoute(o);else if(2===u&&d)if(p)e.navigateToMiniProgram({appId:p,path:d});else{var f=d;3===a?f="/pages/pack/wenwu-detail/index?code=".concat(l):2===a&&(this.commonUpdate({module:"home",type:"shareData",value:{title:c,desc:i,pic:s,type:"节气",path:"pages/index/index",scene:"_c_t=".concat(Date.now())}}),f="/pages/pack/share/index?id=".concat(r)),this.handleLinkRoute(f)}else this.handleLinkRoute(o);this.handleCommonUma("Um_Event_FocusClick",{Um_Key_FocusName:c,Um_Key_FocusPosition:t})},toTicket:function(){this.goLink({url:"https://gugong-tx-1259446244.cos.ap-beijing.myqcloud.com/wxa/shortcut/gmmp.png",text:"购票约展",link:"/pages/tickets/buytickets/home/home",eventCode:"find_icon_tickets_click"})},toMap:function(){this.goLink({url:"https://gugong-tx-1259446244.cos.ap-beijing.myqcloud.com/wxa/shortcut/dtdl.png",text:"地图导览",link:"/modules/guide/pages/index/index",eventCode:"find_icon_guide_click"})},getSeason:function(){var e=new Date,n=e.getMonth()+1,t=e.getDate();return 2===n&&t>=4||3===n||4===n||5===n&&t<5?1:5===n&&t>=5||6===n||7===n||8===n&&t<7?2:8===n&&t>=7||9===n||10===n||11===n&&t<7?3:4}})}}).call(this,t("543d").default)}}]),(global.webpackJsonp=global.webpackJsonp||[]).push(["pages/components/home-top/index-create-component",{"pages/components/home-top/index-create-component":function(e,n,t){t("543d").createComponent(t("96cc"))}},[["pages/components/home-top/index-create-component"]]]);