(global.webpackJsonp = global.webpackJsonp || []).push([
  ["common/main"], {
    "23be": function (e, t, n) {
      n.r(t);
      var o = n("e4a4"),
        a = n.n(o);
      for (var r in o)["default"].indexOf(r) < 0 && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(r);
      t.default = a.a
    },
    "3dfd": function (e, t, n) {
      n.r(t);
      var o = n("23be");
      for (var a in o)["default"].indexOf(a) < 0 && function (e) {
        n.d(t, e, (function () {
          return o[e]
        }))
      }(a);
      n("8abd");
      var r = n("f0c5"),
        c = Object(r.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
      t.default = c.exports
    },
    "56d7": function (e, t, n) {
      (function (e, t) {
        var o = n("4ea4"),
          a = o(n("9523"));
        n("6cdc");
        var r = o(n("45ee")),
          c = o(n("66fd")),
          i = o(n("3dfd")),
          u = o(n("4360")),
          l = o(n("b775")),
          f = o(n("2708"));

        function s(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }
        e.__webpack_require_UNI_MP_PLUGIN__ = n, r.default.init({
          appKey: "5f0f530f978eea08cad0c571",
          useOpenid: !0,
          autoGetOpenid: !0,
          debug: !1
        }), c.default.config.productionTip = !1, c.default.prototype.$api = l.default, c.default.prototype.$store = u.default, r.default.install = function (e) {
          e.prototype.$uma = r.default
        }, c.default.use(r.default), c.default.mixin(f.default), i.default.mpType = "app";
        var d = new c.default(function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? s(Object(n), !0).forEach((function (t) {
              (0, a.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }({
          store: u.default
        }, i.default));
        t(d).$mount()
      }).call(this, n("bc2e").default, n("543d").createApp)
    },
    e4a4: function (e, t, n) {
      (function (e, o) {
        var a = n("4ea4");
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var r = a(n("9523")),
          c = a(n("66fd")),
          i = n("26cb"),
          u = a(n("5a0c"));

        function l(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
          }
          return n
        }

        function f(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? l(Object(n), !0).forEach((function (t) {
              (0, r.default)(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
          }
          return e
        }
        var s = "",
          d = n("23ad");
        u.default.extend(d), c.default.prototype.$dayjs = u.default, t.default = {
          onLaunch: function () {
            this.getGlobalDataSource(), this.pluginMallLoginGetToken();
            var t = e.getUpdateManager();
            t.onCheckForUpdate((function (e) {
              console.warn("".concat(e.hasUpdate ? "" : "没有", "发现新版本"), e.hasUpdate)
            })), t.onUpdateReady((function (n) {
              e.showModal({
                title: "更新提示",
                content: "发现新版本，是否重启应用？",
                success: function (e) {
                  e.confirm && t.applyUpdate()
                }
              })
            })), t.onUpdateFailed((function (e) {
              console.log("新版本下载失败")
            }));
            var n = e.getSystemInfoSync(),
              a = n.statusBarHeight;
            n.titleBarHeight, n.safeArea;
            try {
              var r = e.getMenuButtonBoundingClientRect();
              n.customBar = r.bottom + r.top - a
            } catch (e) {
              console.warn("未获取到顶部栏信息", e), n.customBar = a + 45
            }
            o.getUserProfile ? this.setCanIUseGetUserProfile(!0) : this.setCanIUseGetUserProfile(!1), c.default.prototype.systemInfo = n, e.loadFontFace({
              family: "fzqkbys",
              global: !0,
              source: 'url("https://gugong-tx-1259446244.cos.ap-beijing.myqcloud.com/wxa/fonts/HYXinRenWenSong65W.ttf")',
              scopes: ["webview", "native"],
              success: console.log,
              fail: console.log
            }), this.isLogin && this.loginWX("", !0), s && s(this.app.core.arLicense)
          },
          onShow: function () {
            console.log("App Show"), e.hideTabBar()
          },
          onHide: function () {
            console.log("App Hide")
          },
          onPageNotFound: function (t) {
            console.log("not found", t), e.switchTab({
              url: "/pages/index/index"
            })
          },
          methods: f(f(f({}, (0, i.mapMutations)(["setCanIUseGetUserProfile"])), (0, i.mapActions)(["getGlobalDataSource", "pluginMallLoginGetToken"])), {}, {
            beaconTarEvent: function () {},
            umaTarEvent: function () {
              this.handleCommonUma.apply(this, arguments)
            },
            beaconInit: function () {}
          })
        }
      }).call(this, n("543d").default, n("bc2e").default)
    }
  },
  [
    ["56d7", "common/runtime", "common/vendor"]
  ]
]);