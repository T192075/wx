require("../common/vendor.js"),(global.webpackJsonp=global.webpackJsonp||[]).push([["pages/tickets/my/my"],{"09c5":function(e,t,n){n.r(t);var o=n("8585"),r=n("c0c2");for(var a in r)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("5f1b");var i=n("f0c5"),s=Object(i.a)(r.default,o.b,o.c,!1,null,"22363672",null,!1,o.a,void 0);t.default=s.exports},"305e":function(e,t,n){(function(e,t){var o=n("4ea4");n("6cdc"),o(n("66fd"));var r=o(n("09c5"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("bc2e").default,n("543d").createPage)},8585:function(e,t,n){n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={topBar:function(){return Promise.all([n.e("common/vendor"),n.e("pages/components/top-bar/index")]).then(n.bind(null,"6ebb"))},imageView:function(){return Promise.all([n.e("common/vendor"),n.e("pages/components/image-view/index")]).then(n.bind(null,"2ff9"))},uniPopup:function(){return n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(n.bind(null,"27c0"))}},r=function(){var e=this,t=(e.$createElement,e._self._c,e.isLogin&&e.list.length>0);e.$mp.data=Object.assign({},{$root:{g0:t}})},a=[]},c0c2:function(e,t,n){n.r(t);var o=n("e1db"),r=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t.default=r.a},e1db:function(e,t,n){(function(e,o){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("2eee")),i=r(n("c973")),s=r(n("9523")),c=r(n("5a0c")),u=r(n("2ef0")),l=n("f1c8"),d=n("f1c8"),p=n("f2d7"),f=n("a887"),h=n("26cb"),m=n("3a85"),v=n("b35a");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=null;t.default={components:{uiFit:function(){Promise.all([n.e("pages/tickets/common/vendor"),n.e("pages/tickets/components/ui-fit/index")]).then(function(){return resolve(n("a712"))}.bind(null,n)).catch(n.oe)},tabBar:function(){Promise.all([n.e("pages/tickets/common/vendor"),n.e("pages/tickets/components/tab-bar/tab-bar")]).then(function(){return resolve(n("b6dd"))}.bind(null,n)).catch(n.oe)},headBg:function(){Promise.all([n.e("common/vendor"),n.e("pages/components/head-bg/index")]).then(function(){return resolve(n("f909"))}.bind(null,n)).catch(n.oe)},UniPopup:function(){n.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(function(){return resolve(n("27c0"))}.bind(null,n)).catch(n.oe)},loginBtn:function(){Promise.all([n.e("common/vendor"),n.e("pages/components/login-btn/index")]).then(function(){return resolve(n("87b0"))}.bind(null,n)).catch(n.oe)},privacyModal:function(){Promise.all([n.e("common/vendor"),n.e("pages/components/privacy-modal/index")]).then(function(){return resolve(n("831f"))}.bind(null,n)).catch(n.oe)},KefuBar:function(){Promise.all([n.e("common/vendor"),n.e("pages/tickets/common/vendor"),n.e("pages/tickets/components/kefu-bar/index")]).then(function(){return resolve(n("fe65"))}.bind(null,n)).catch(n.oe)}},data:function(){return{COS_PATH:d.COS_PATH,cardList:[],allIn:!1,disabled:!0,toastTitle:"",list:[],person:{name:"",cardType:{id:0,name:"身份证"},idCard:""},nameError:!1,cardError:!1,pageMeta:{name:"个人页",category:"推荐",type:"tab页",column:"购票约展",plate:"个人"},isYearModal:!1,showYearInfo:!1,yearItem:{roleError:!0},staffPhoneList:[]}},computed:y(y({},(0,h.mapGetters)({token:"getMallLoginToken",buyer:"getMallBuyerData"})),(0,h.mapState)({checkInData:function(e){return e.user.checkInData},isAgreePravicy:function(e){return e.user.isAgreePravicy}})),onLoad:function(e){var t=this;return(0,i.default)(a.default.mark((function n(){return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e,"******pages onload options*******"),t.getContactsListData(),t.getCardList();case 3:case"end":return n.stop()}}),n)})))()},onShow:function(){b=new Date,console.log("onShow",b)},onUnload:function(){var e=new Date-b;console.log("onUnload",e),this.handleCommonUma("Um_Event_PersonPageView",{Um_Key_Duration:e})},onHide:function(){var e=new Date-b;console.log("onHide",e),this.handleCommonUma("Um_Event_PersonPageView",{Um_Key_Duration:e})},methods:y(y(y({},(0,h.mapMutations)(["setBuyerDataByKey"])),(0,h.mapActions)(["pluginMallDecryptData","pluginMallContactsInfo"])),{},{getCardList:function(){this.cardList=u.default.filter(l.ID_TYPE,(function(e){return 1==e.modalList}))},getContactsListData:function(){var e=this;return(0,i.default)(a.default.mark((function t(){var n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.getMallContactsList)();case 2:n=t.sent,e.list=n.data||[],e.list.map((function(t,n){var o=t.type;t.cardType=e.cardList.filter((function(e){return e.id===o}))[0]}));case 5:case"end":return t.stop()}}),t)})))()},getPhoneNumber:function(e){var t=this;return(0,i.default)(a.default.mark((function n(){var o,r,i,s,c;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("getPhoneNumber:ok"!=e.detail.errMsg){n.next=9;break}return o=e.detail,r=o.encryptedData,i=o.iv,n.next=4,t.pluginMallDecryptData({data:r,iv:i});case 4:s=n.sent,c=s.phoneNumber,t.putUserPhone(c),n.next=10;break;case 9:console.log("取消授权");case 10:case"end":return n.stop()}}),n)})))()},putUserPhone:function(e){return(0,i.default)(a.default.mark((function t(){return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,f.putMallContactsPhone)({phone:e});case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},saveContacts:function(){var t=this;return(0,i.default)(a.default.mark((function n(){var o,r,i,s,c;return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.handleCommonUma("Um_Event_PersonButtonClick",{Um_Key_ButtonName:"保存"}),t.disabled=!0,r={id:t.person.id||"",name:t.person.name,idCard:t.person.idCard,type:(null===(o=t.person.cardType)||void 0===o?void 0:o.id)||0},n.next=5,(0,f.setUpMallContacts)(r);case 5:i=n.sent,s=i.code,c=i.message,u.default.eq(s,200)||(t.toastTitle=c),t.getContactsListData(),t.handleCloseAudience(),e.showToast({title:t.toastTitle,duration:2e3,icon:"none",mask:!0});case 12:case"end":return n.stop()}}),n)})))()},delContacts:function(){var t=this;return(0,i.default)(a.default.mark((function n(){return a.default.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.deleteContactsById)(t.person.id);case 2:n.sent,t.getContactsListData(),t.closeDelPopup(),t.handleCloseAudience(),e.showToast({title:"观众删除成功",duration:2e3,icon:"none",mask:!0});case 7:case"end":return n.stop()}}),n)})))()},handleDelAudience:function(e){this.handleCommonUma("Um_Event_PersonButtonClick",{Um_Key_ButtonName:"删除"}),this.$refs.delPopup.open("center")},closeDelPopup:function(e){this.$refs.delPopup.close()},handleAddAudience:function(t){this.handleCommonUma("Um_Event_PersonButtonClick",{Um_Key_ButtonName:"新增常用观众"}),this.isLogin?!t&&this.list.length>=5?e.showToast({title:"最多添加5位",duration:2e3,icon:"none",mask:!0}):(this.toastTitle=t?"信息保存成功":"观众新增成功",t&&(this.person=y({},t)),this.$refs.popupAudience.open("bottom")):e.showToast({title:"请登录",duration:2e3,icon:"none",mask:!0})},handleCloseAudience:function(){var e=this;this.$refs.popupAudience.close(),setTimeout((function(){e.person={cardType:{id:0,name:"身份证"}},e.nameError=!1,e.cardError=!1}),200)},selectCardlist:function(){e.hideKeyboard(),this.$refs.popupCard.open("bottom")},onSelectCard:function(e){this.person.cardType=e,console.log("this.person.cardType",this.person.cardType),this.$refs.popupCard.close(),this.person.idCard&&this.checkCardInput()},closeTypePop:function(){this.$refs.popupCard.close()},checkCardInput:function(){this.cardError=!1;var e=this.person.cardType.id,t=this.person.idCard;u.default.eq(e,0)?(this.cardError=!(0,p.checkIdcard)(t),t&&u.default.endsWith(t,"x")&&(this.person.idCard=(0,p.xToUpperCase)(t))):t&&u.default.trim(t)?this.cardError=(0,p.checkIdcard)(t):this.cardError=!0,this.handleCheckAllIn()},checkYearUser:function(){var e=this;return(0,i.default)(a.default.mark((function t(){var n,o;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,m.getVerifiyYearCard)({certNo:e.person.idCard,certType:null===(n=e.person.cardType)||void 0===n?void 0:n.id,tradeDate:(0,c.default)(new Date).format("YYYY-MM-DD")});case 2:1===(o=t.sent).yearCardType?(e.yearItem.roleError=!1,e.yearItem.totalNum=o.totalNum,e.yearItem.canUseNum=o.canUseNum):2===o.yearCardType&&(e.yearItem.roleError=!0),e.showYearInfo=!0;case 5:case"end":return t.stop()}}),t)})))()},checkNameInput:function(e){e&&u.default.trim(e)?this.nameError=!1:this.nameError=!0,this.handleCheckAllIn()},handleCheckAllIn:function(){console.log("信息是否完全填入，更新确认按钮状态"),this.person.name&&!this.nameError&&this.person.idCard&&!this.cardError?this.allIn=!0:this.allIn=!1,this.disabled=!this.allIn,this.isYearModal&&this.allIn?this.checkYearUser():this.showYearInfo=!1},signInHide:function(){this.signModalShow=!1},setLogin:function(){if(this.handleCommonUma("Um_Event_PersonButtonClick",{Um_Key_ButtonName:"登录"}),this.isAgreePravicy){o.showLoading({title:"登录中",mask:!0});try{this.loginWX((function(){o.hideLoading()}),!0)}catch(e){o.hideLoading()}}else this.$refs.privacyModal.show(),this.signModalShow=!0},toSearchYear:function(){this.isYearModal=!0,this.$refs.popupYear.open("bottom")},handleCloseYear:function(){var e=this;this.$refs.popupYear.close(),setTimeout((function(){e.person={cardType:{id:0,name:"身份证"}},e.nameError=!1,e.cardError=!1,e.isYearModal=!1,e.showYearInfo=!1,e.yearItem={}}),200)},openPhoneModal:function(){var e=this;return(0,i.default)(a.default.mark((function t(){var n;return a.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,v.getSysParamByKey)({key:"gugong_customerServiceTel"});case 2:n=t.sent,console.log(n,"getSysParamByKey"),200===n.status&&(e.staffPhoneList=n.message.split(","),e.$refs.popupPhone.open("bottom"));case 5:case"end":return t.stop()}}),t)})))()},callStaffPhone:function(e){o.makePhoneCall({phoneNumber:e}),this.$refs.popupPhone.close()},closePhoneModal:function(){this.$refs.popupPhone.close()}})}}).call(this,n("bc2e").default,n("543d").default)}},[["305e","common/runtime","common/vendor","pages/tickets/common/vendor"]]]);