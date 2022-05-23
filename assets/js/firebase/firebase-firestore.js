! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = t || self).firebase) }(this, function(ad) { "use strict"; try {
        (function() { ad = ad && Object.prototype.hasOwnProperty.call(ad, "default") ? ad.default : ad; var r = function(t, e) { return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, e) { t.__proto__ = e } || function(t, e) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]) })(t, e) };

            function t(t, e) {
                function n() { this.constructor = t } r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n) } var e, o, n, f = function() { return (f = Object.assign || function(t) { for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]); return t }).apply(this, arguments) };

            function p(t, s, a, u) { return new(a = a || Promise)(function(e, n) {
                    function r(t) { try { o(u.next(t)) } catch (t) { n(t) } }

                    function i(t) { try { o(u.throw(t)) } catch (t) { n(t) } }

                    function o(t) { t.done ? e(t.value) : function(e) { return e instanceof a ? e : new a(function(t) { t(e) }) }(t.value).then(r, i) } o((u = u.apply(t, s || [])).next()) }) }

            function v(n, r) { var i, o, s, t, a = { label: 0, sent: function() { if (1 & s[0]) throw s[1]; return s[1] }, trys: [], ops: [] }; return t = { next: e(0), throw: e(1), return: e(2) }, "function" == typeof Symbol && (t[Symbol.iterator] = function() { return this }), t;

                function e(e) { return function(t) { return function(e) { if (i) throw new TypeError("Generator is already executing."); for (; a;) try { if (i = 1, o && (s = 2 & e[0] ? o.return : e[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, e[1])).done) return s; switch (o = 0, s && (e = [2 & e[0], s.value]), e[0]) {
                                    case 0:
                                    case 1:
                                        s = e; break;
                                    case 4:
                                        return a.label++, { value: e[1], done: !1 };
                                    case 5:
                                        a.label++, o = e[1], e = [0]; continue;
                                    case 7:
                                        e = a.ops.pop(), a.trys.pop(); continue;
                                    default:
                                        if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === e[0] || 2 === e[0])) { a = 0; continue } if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) { a.label = e[1]; break } if (6 === e[0] && a.label < s[1]) { a.label = s[1], s = e; break } if (s && a.label < s[2]) { a.label = s[2], a.ops.push(e); break } s[2] && a.ops.pop(), a.trys.pop(); continue } e = r.call(n, a) } catch (t) { e = [6, t], o = 0 } finally { i = s = 0 }
                            if (5 & e[0]) throw e[1]; return { value: e[0] ? e[1] : void 0, done: !0 } }([e, t]) } } }

            function s() { for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length; var r = Array(t),
                    i = 0; for (e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s]; return r }

            function a() { for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length; var r = Array(t),
                    i = 0; for (e = 0; e < n; e++)
                    for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s]; return r }(n = o = o || {})[n.DEBUG = 0] = "DEBUG", n[n.VERBOSE = 1] = "VERBOSE", n[n.INFO = 2] = "INFO", n[n.WARN = 3] = "WARN", n[n.ERROR = 4] = "ERROR", n[n.SILENT = 5] = "SILENT";
            o.DEBUG, o.VERBOSE, o.INFO, o.WARN, o.ERROR, o.SILENT;

            function i(t, e) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; if (!(e < t.logLevel)) { var i = (new Date).toISOString(),
                        o = h[e]; if (!o) throw new Error("Attempted to log a message with an invalid logType (value: " + e + ")");
                    console[o].apply(console, a(["[" + i + "]  " + t.name + ":"], n)) } } var u = o.INFO,
                h = ((e = {})[o.DEBUG] = "log", e[o.VERBOSE] = "log", e[o.INFO] = "info", e[o.WARN] = "warn", e[o.ERROR] = "error", e),
                c = (Object.defineProperty(l.prototype, "logLevel", { get: function() { return this._logLevel }, set: function(t) { if (!(t in o)) throw new TypeError("Invalid value assigned to `logLevel`");
                        this._logLevel = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(l.prototype, "logHandler", { get: function() { return this._logHandler }, set: function(t) { if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
                        this._logHandler = t }, enumerable: !0, configurable: !0 }), Object.defineProperty(l.prototype, "userLogHandler", { get: function() { return this._userLogHandler }, set: function(t) { this._userLogHandler = t }, enumerable: !0, configurable: !0 }), l.prototype.debug = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, o.DEBUG], t)), this._logHandler.apply(this, a([this, o.DEBUG], t)) }, l.prototype.log = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, o.VERBOSE], t)), this._logHandler.apply(this, a([this, o.VERBOSE], t)) }, l.prototype.info = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, o.INFO], t)), this._logHandler.apply(this, a([this, o.INFO], t)) }, l.prototype.warn = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, o.WARN], t)), this._logHandler.apply(this, a([this, o.WARN], t)) }, l.prototype.error = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    this._userLogHandler && this._userLogHandler.apply(this, a([this, o.ERROR], t)), this._logHandler.apply(this, a([this, o.ERROR], t)) }, l);

            function l(t) { this.name = t, this._logLevel = u, this._logHandler = i, this._userLogHandler = null }

            function d() { return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "" } var y, m = (t(g, y = Error), g);

            function g(t, e) { var n = y.call(this, e) || this; return n.code = t, n.name = "FirebaseError", Object.setPrototypeOf(n, g.prototype), Error.captureStackTrace && Error.captureStackTrace(n, w.prototype.create), n } var w = (b.prototype.create = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; for (var r = e[0] || {}, i = this.service + "/" + t, o = this.errors[t], s = o ? function(t, r) { return t.replace(E, function(t, e) { var n = r[e]; return null != n ? n.toString() : "<" + e + "?>" }) }(o, r) : "Error", a = this.serviceName + ": " + s + " (" + i + ").", u = new m(i, a), h = 0, c = Object.keys(r); h < c.length; h++) { var f = c[h]; "_" !== f.slice(-1) && (f in u && console.warn('Overwriting FirebaseError base field "' + f + '" can cause unexpected behavior.'), u[f] = r[f]) } return u }, b);

            function b(t, e, n) { this.service = t, this.serviceName = e, this.errors = n } var E = /\{\$([^}]+)}/g,
                I = (T.prototype.setInstantiationMode = function(t) { return this.instantiationMode = t, this }, T.prototype.setMultipleInstances = function(t) { return this.multipleInstances = t, this }, T.prototype.setServiceProps = function(t) { return this.serviceProps = t, this }, T);

            function T(t, e, n) { this.name = t, this.instanceFactory = e, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY" } var N, A = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
                S = S || {},
                k = A;

            function D(t) { return "string" == typeof t }

            function R(t) { return "number" == typeof t }

            function C(t, e) { t = t.split("."), e = e || k; for (var n = 0; n < t.length; n++)
                    if (null == (e = e[t[n]])) return null; return e }

            function O() {}

            function x(t) { var e = typeof t; if ("object" == e) { if (!t) return "null"; if (t instanceof Array) return "array"; if (t instanceof Object) return e; var n = Object.prototype.toString.call(t); if ("[object Window]" == n) return "object"; if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function" } else if ("function" == e && void 0 === t.call) return "object"; return e }

            function L(t) { return "array" == x(t) }

            function P(t) { var e = x(t); return "array" == e || "object" == e && "number" == typeof t.length }

            function _(t) { var e = typeof t; return "object" == e && null != t || "function" == e } var U = "closure_uid_" + (1e9 * Math.random() >>> 0),
                q = 0;

            function M(t, e, n) { return t.call.apply(t.bind, arguments) }

            function V(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var r = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, r), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

            function F(t, e, n) { return (F = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? M : V).apply(null, arguments) }

            function j(e, t) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } } var G = Date.now || function() { return +new Date };

            function B(t, o) {
                function e() {} e.prototype = o.prototype, t.N = o.prototype, t.prototype = new e, (t.prototype.constructor = t).yb = function(t, e, n) { for (var r = Array(arguments.length - 2), i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return o.prototype[e].apply(t, r) } }

            function z() { this.j = this.j, this.i = this.i } z.prototype.j = !1, z.prototype.la = function() { if (!this.j && (this.j = !0, this.G(), 0)) this[U] || (this[U] = ++q) }, z.prototype.G = function() { if (this.i)
                    for (; this.i.length;) this.i.shift()() }; var H = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) { if (D(t)) return D(e) && 1 == e.length ? t.indexOf(e, 0) : -1; for (var n = 0; n < t.length; n++)
                        if (n in t && t[n] === e) return n; return -1 },
                K = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var r = t.length, i = D(t) ? t.split("") : t, o = 0; o < r; o++) o in i && e.call(n, i[o], o, t) };

            function W(t) { return Array.prototype.concat.apply([], arguments) }

            function J(t) { var e = t.length; if (0 < e) { for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r]; return n } return [] }

            function Y(t) { return /^[\s\xa0]*$/.test(t) } var Q, X = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] };

            function $(t, e) { return -1 != t.indexOf(e) }

            function Z(t, e) { return t < e ? -1 : e < t ? 1 : 0 } t: { var tt = k.navigator; if (tt) { var et = tt.userAgent; if (et) { Q = et; break t } } Q = "" }

            function nt(t, e, n) { for (var r in t) e.call(n, t[r], r, t) }

            function rt(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n } var it = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

            function ot(t, e) { for (var n, r, i = 1; i < arguments.length; i++) { for (n in r = arguments[i]) t[n] = r[n]; for (var o = 0; o < it.length; o++) n = it[o], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]) } }

            function st(t) { return st[" "](t), t } st[" "] = O; var at, ut, ht = $(Q, "Opera"),
                ct = $(Q, "Trident") || $(Q, "MSIE"),
                ft = $(Q, "Edge"),
                lt = ft || ct,
                pt = $(Q, "Gecko") && !($(Q.toLowerCase(), "webkit") && !$(Q, "Edge")) && !($(Q, "Trident") || $(Q, "MSIE")) && !$(Q, "Edge"),
                dt = $(Q.toLowerCase(), "webkit") && !$(Q, "Edge");

            function vt() { var t = k.document; return t ? t.documentMode : void 0 } t: { var yt = "",
                    mt = (ut = Q, pt ? /rv:([^\);]+)(\)|;)/.exec(ut) : ft ? /Edge\/([\d\.]+)/.exec(ut) : ct ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ut) : dt ? /WebKit\/(\S+)/.exec(ut) : ht ? /(?:Version)[ \/]?(\S+)/.exec(ut) : void 0); if (mt && (yt = mt ? mt[1] : ""), ct) { var gt = vt(); if (null != gt && gt > parseFloat(yt)) { at = String(gt); break t } } at = yt }
            var wt, bt = {};

            function Et(a) { return function(t, e) { var n = bt; return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t) }(a, function() { for (var t = 0, e = X(String(at)).split("."), n = X(String(a)).split("."), r = Math.max(e.length, n.length), i = 0; 0 == t && i < r; i++) { var o = e[i] || "",
                            s = n[i] || "";
                        do { if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == o[0].length && 0 == s[0].length) break;
                            t = Z(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || Z(0 == o[2].length, 0 == s[2].length) || Z(o[2], s[2]), o = o[3], s = s[3] } while (0 == t) } return 0 <= t }) } var It = k.document;
            wt = It && ct ? vt() || ("CSS1Compat" == It.compatMode ? parseInt(at, 10) : 5) : void 0; var Tt = !ct || 9 <= Number(wt),
                Nt = ct && !Et("9"),
                At = function() { if (!k.addEventListener || !Object.defineProperty) return !1; var t = !1,
                        e = Object.defineProperty({}, "passive", { get: function() { t = !0 } }); try { k.addEventListener("test", O, e), k.removeEventListener("test", O, e) } catch (t) {} return t }();

            function St(t, e) { this.type = t, this.a = this.target = e, this.Ia = !0 }

            function kt(t, e) { if (St.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) { var n = this.type = t.type,
                        r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null; if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) { if (pt) { t: { try { st(e.nodeName); var i = !0; break t } catch (t) {} i = !1 } i || (e = null) } } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                    this.relatedTarget = e, r ? (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = D(t.pointerType) ? t.pointerType : Dt[t.pointerType] || "", (this.c = t).defaultPrevented && this.b() } } St.prototype.b = function() { this.Ia = !1 }, B(kt, St); var Dt = { 2: "touch", 3: "pen", 4: "mouse" };
            kt.prototype.b = function() { kt.N.b.call(this); var t = this.c; if (t.preventDefault) t.preventDefault();
                else if (t.returnValue = !1, Nt) try {
                    (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1) } catch (t) {} }; var Rt = "closure_listenable_" + (1e6 * Math.random() | 0),
                Ct = 0;

            function Ot(t, e, n, r, i) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!r, this.da = i, this.key = ++Ct, this.X = this.Z = !1 }

            function xt(t) { t.X = !0, t.listener = null, t.proxy = null, t.src = null, t.da = null }

            function Lt(t) { this.src = t, this.a = {}, this.b = 0 }

            function Pt(t, e) { var n = e.type; if (n in t.a) { var r, i = t.a[n],
                        o = H(i, e);
                    (r = 0 <= o) && Array.prototype.splice.call(i, o, 1), r && (xt(e), 0 == t.a[n].length && (delete t.a[n], t.b--)) } }

            function _t(t, e, n, r) { for (var i = 0; i < t.length; ++i) { var o = t[i]; if (!o.X && o.listener == e && o.capture == !!n && o.da == r) return i } return -1 } Lt.prototype.add = function(t, e, n, r, i) { var o = t.toString();
                (t = this.a[o]) || (t = this.a[o] = [], this.b++); var s = _t(t, e, r, i); return -1 < s ? (e = t[s], n || (e.Z = !1)) : ((e = new Ot(e, this.src, o, !!r, i)).Z = n, t.push(e)), e }; var Ut = "closure_lm_" + (1e6 * Math.random() | 0),
                qt = {};

            function Mt(t, e, n, r, i) { if (r && r.once) return function t(e, n, r, i, o) { if (L(n)) { for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o); return null } r = Kt(r); return e && e[Rt] ? e.Aa(n, r, _(i) ? !!i.capture : !!i, o) : Vt(e, n, r, !0, i, o) }(t, e, n, r, i); if (L(e)) { for (var o = 0; o < e.length; o++) Mt(t, e[o], n, r, i); return null } return n = Kt(n), t && t[Rt] ? t.za(e, n, _(r) ? !!r.capture : !!r, i) : Vt(t, e, n, !1, r, i) }

            function Vt(t, e, n, r, i, o) { if (!e) throw Error("Invalid event type"); var s = _(i) ? !!i.capture : !!i; if (s && !Tt) return null; var a = zt(t); if (a || (t[Ut] = a = new Lt(t)), (n = a.add(e, n, r, s, o)).proxy) return n; if (r = function() { var e = Bt,
                            n = Tt ? function(t) { return e.call(n.src, n.listener, t) } : function(t) { if (!(t = e.call(n.src, n.listener, t))) return t }; return n }(), (n.proxy = r).src = t, r.listener = n, t.addEventListener) At || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
                else if (t.attachEvent) t.attachEvent(jt(e.toString()), r);
                else { if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                    t.addListener(r) } return n }

            function Ft(t) { if (!R(t) && t && !t.X) { var e = t.src; if (e && e[Rt]) Pt(e.c, t);
                    else { var n = t.type,
                            r = t.proxy;
                        e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(jt(n), r) : e.addListener && e.removeListener && e.removeListener(r), (n = zt(e)) ? (Pt(n, t), 0 == n.b && (n.src = null, e[Ut] = null)) : xt(t) } } }

            function jt(t) { return t in qt ? qt[t] : qt[t] = "on" + t }

            function Gt(t, e) { var n = t.listener,
                    r = t.da || t.src; return t.Z && Ft(t), n.call(r, e) }

            function Bt(t, e) { return !!t.X || (Tt ? Gt(t, new kt(e, this)) : Gt(t, e = new kt(e || C("window.event"), this))) }

            function zt(t) { return (t = t[Ut]) instanceof Lt ? t : null } var Ht = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

            function Kt(e) { return "function" == x(e) ? e : (e[Ht] || (e[Ht] = function(t) { return e.handleEvent(t) }), e[Ht]) }

            function Wt() { z.call(this), this.c = new Lt(this), (this.J = this).B = null }

            function Jt(t, e, n, r) { if (!(e = t.c.a[String(e)])) return !0;
                e = e.concat(); for (var i = !0, o = 0; o < e.length; ++o) { var s = e[o]; if (s && !s.X && s.capture == n) { var a = s.listener,
                            u = s.da || s.src;
                        s.Z && Pt(t.c, s), i = !1 !== a.call(u, r) && i } } return i && 0 != r.Ia } B(Wt, z), Wt.prototype[Rt] = !0, (N = Wt.prototype).addEventListener = function(t, e, n, r) { Mt(this, t, e, n, r) }, N.removeEventListener = function(t, e, n, r) {! function t(e, n, r, i, o) { if (L(n))
                        for (var s = 0; s < n.length; s++) t(e, n[s], r, i, o);
                    else i = _(i) ? !!i.capture : !!i, r = Kt(r), e && e[Rt] ? (e = e.c, (n = String(n).toString()) in e.a && -1 < (r = _t(s = e.a[n], r, i, o)) && (xt(s[r]), Array.prototype.splice.call(s, r, 1), 0 == s.length && (delete e.a[n], e.b--))) : (e = e && zt(e)) && (n = e.a[n.toString()], e = -1, n && (e = _t(n, r, i, o)), (r = -1 < e ? n[e] : null) && Ft(r)) }(this, t, e, n, r) }, N.dispatchEvent = function(t) { var e, n = this.B; if (n)
                    for (e = []; n; n = n.B) e.push(n);
                n = this.J; var r = t.type || t; if (D(t)) t = new St(t, n);
                else if (t instanceof St) t.target = t.target || n;
                else { var i = t;
                    ot(t = new St(r, n), i) } if (i = !0, e)
                    for (var o = e.length - 1; 0 <= o; o--) { var s = t.a = e[o];
                        i = Jt(s, r, !0, t) && i }
                if (i = Jt(s = t.a = n, r, !0, t) && i, i = Jt(s, r, !1, t) && i, e)
                    for (o = 0; o < e.length; o++) i = Jt(s = t.a = e[o], r, !1, t) && i; return i }, N.G = function() { if (Wt.N.G.call(this), this.c) { var t, e = this.c; for (t in e.a) { for (var n = e.a[t], r = 0; r < n.length; r++) xt(n[r]);
                        delete e.a[t], e.b-- } } this.B = null }, N.za = function(t, e, n, r) { return this.c.add(String(t), e, !1, n, r) }, N.Aa = function(t, e, n, r) { return this.c.add(String(t), e, !0, n, r) }; var Yt = k.JSON.stringify;

            function Qt(t, e) { this.c = t, this.f = e, this.b = 0, this.a = null }

            function Xt() { this.b = this.a = null } Qt.prototype.get = function() { if (0 < this.b) { this.b--; var t = this.a;
                    this.a = t.next, t.next = null } else t = this.c(); return t }; var $t, Zt = new Qt(function() { return new te }, function(t) { t.reset() });

            function te() { this.next = this.b = this.a = null }

            function ee(t) { k.setTimeout(function() { throw t }, 0) }

            function ne(t, e) { $t || function() { var t = k.Promise.resolve(void 0);
                    $t = function() { t.then(oe) } }(), re || ($t(), re = !0), ie.add(t, e) } Xt.prototype.add = function(t, e) { var n = Zt.get();
                n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n }, te.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null }; var re = !(te.prototype.reset = function() { this.next = this.b = this.a = null }),
                ie = new Xt;

            function oe() { for (var t; r = n = void 0, r = null, (n = ie).a && (r = n.a, n.a = n.a.next, n.a || (n.b = null), r.next = null), t = r;) { try { t.a.call(t.b) } catch (t) { ee(t) } var e = Zt;
                    e.f(t), e.b < 100 && (e.b++, t.next = e.a, e.a = t) } var n, r;
                re = !1 }

            function se(t, e) { Wt.call(this), this.b = t || 1, this.a = e || k, this.f = F(this.gb, this), this.g = G() }

            function ae(t) { t.ba = !1, t.L && (t.a.clearTimeout(t.L), t.L = null) }

            function ue(t, e, n) { if ("function" == x(t)) n && (t = F(t, n));
                else { if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                    t = F(t.handleEvent, t) } return 2147483647 < Number(e) ? -1 : k.setTimeout(t, e || 0) }

            function he(t, e, n) { z.call(this), this.f = null != n ? F(t, n) : t, this.c = e, this.b = F(this.$a, this), this.a = [] }

            function ce(t) { t.U = ue(t.b, t.c), t.f.apply(null, t.a) }

            function fe(t) { z.call(this), this.b = t, this.a = {} } B(se, Wt), (N = se.prototype).ba = !1, N.L = null, N.gb = function() { if (this.ba) { var t = G() - this.g;
                    0 < t && t < .8 * this.b ? this.L = this.a.setTimeout(this.f, this.b - t) : (this.L && (this.a.clearTimeout(this.L), this.L = null), this.dispatchEvent("tick"), this.ba && (ae(this), this.start())) } }, N.start = function() { this.ba = !0, this.L || (this.L = this.a.setTimeout(this.f, this.b), this.g = G()) }, N.G = function() { se.N.G.call(this), ae(this), delete this.a }, B(he, z), (N = he.prototype).ea = !1, N.U = null, N.Ta = function(t) { this.a = arguments, this.U ? this.ea = !0 : ce(this) }, N.G = function() { he.N.G.call(this), this.U && (k.clearTimeout(this.U), this.U = null, this.ea = !1, this.a = []) }, N.$a = function() { this.U = null, this.ea && (this.ea = !1, ce(this)) }, B(fe, z); var le = [];

            function pe(t, e, n, r) { L(n) || (n && (le[0] = n.toString()), n = le); for (var i = 0; i < n.length; i++) { var o = Mt(e, n[i], r || t.handleEvent, !1, t.b || t); if (!o) break;
                    t.a[o.key] = o } }

            function de(t) { nt(t.a, function(t, e) { this.a.hasOwnProperty(e) && Ft(t) }, t), t.a = {} }

            function ve() {} fe.prototype.G = function() { fe.N.G.call(this), de(this) }, fe.prototype.handleEvent = function() { throw Error("EventHandler.handleEvent not implemented") }; var ye = new Wt;

            function me(t) { St.call(this, "serverreachability", t) }

            function ge(t) { ye.dispatchEvent(new me(ye, t)) }

            function we(t) { St.call(this, "statevent", t) }

            function be(t) { ye.dispatchEvent(new we(ye, t)) }

            function Ee(t) { St.call(this, "timingevent", t) }

            function Ie(t, e) { if ("function" != x(t)) throw Error("Fn must not be null and must be a function"); return k.setTimeout(function() { t() }, e) } B(me, St), B(we, St), B(Ee, St); var Te = { NO_ERROR: 0, hb: 1, ob: 2, nb: 3, kb: 4, mb: 5, pb: 6, La: 7, TIMEOUT: 8, sb: 9 },
                Ne = { jb: "complete", wb: "success", Ma: "error", La: "abort", ub: "ready", vb: "readystatechange", TIMEOUT: "timeout", qb: "incrementaldata", tb: "progress", lb: "downloadprogress", xb: "uploadprogress" };

            function Ae() {}

            function Se(t) { var e; return (e = t.a) || (e = t.a = {}), e }

            function ke() {} Ae.prototype.a = null; var De, Re = { OPEN: "a", ib: "b", Ma: "c", rb: "d" };

            function Ce() { St.call(this, "d") }

            function Oe() { St.call(this, "c") }

            function xe() {}

            function Le(t, e, n) { this.g = t, this.W = e, this.V = n || 1, this.I = new fe(this), this.O = Pe, t = lt ? 125 : void 0, this.P = new se(t), this.h = null, this.b = !1, this.l = this.D = this.f = this.F = this.v = this.R = this.i = null, this.j = [], this.a = null, this.A = 0, this.c = this.w = null, this.o = -1, this.m = !1, this.J = 0, this.B = null, this.s = this.S = this.H = !1 } B(Ce, St), B(Oe, St), B(xe, Ae), De = new xe; var Pe = 45e3,
                _e = {},
                Ue = {};

            function qe(t, e, n) { t.F = 1, t.f = hn(en(e)), t.l = n, t.H = !0, Ve(t, null) }

            function Me(t, e, n, r) { t.F = 1, t.f = hn(en(e)), t.l = null, t.H = n, Ve(t, r) }

            function Ve(t, e) { t.v = G(), Ge(t), t.D = en(t.f), un(t.D, "t", t.V), t.A = 0, t.a = t.g.$(t.g.Y() ? e : null), 0 < t.J && (t.B = new he(F(t.Ja, t, t.a), t.J)), pe(t.I, t.a, "readystatechange", t.cb), e = t.h ? rt(t.h) : {}, t.l ? (t.w || (t.w = "POST"), e["Content-Type"] = "application/x-www-form-urlencoded", t.a.ca(t.D, t.w, t.l, e)) : (t.w = "GET", t.a.ca(t.D, t.w, null, e)), ge(1) }

            function Fe(t, e, n) { for (var r = !0; !t.m && t.A < n.length;) { var i = je(t, n); if (i == Ue) { 4 == e && (t.c = 4, be(14), r = !1); break } if (i == _e) { t.c = 4, be(15), r = !1; break } We(t, i) } 4 == e && 0 == n.length && (t.c = 1, be(16), r = !1), t.b = t.b && r, r || (Ke(t), He(t)) }

            function je(t, e) { var n = t.A,
                    r = e.indexOf("\n", n); return -1 == r ? Ue : (n = Number(e.substring(n, r)), isNaN(n) ? _e : (r += 1) + n > e.length ? Ue : (e = e.substr(r, n), t.A = r + n, e)) }

            function Ge(t) { t.R = G() + t.O, Be(t, t.O) }

            function Be(t, e) { if (null != t.i) throw Error("WatchDog timer not null");
                t.i = Ie(F(t.ab, t), e) }

            function ze(t) { t.i && (k.clearTimeout(t.i), t.i = null) }

            function He(t) { t.g.Ca() || t.m || t.g.na(t) }

            function Ke(t) { ze(t); var e = t.B;
                e && "function" == typeof e.la && e.la(), t.B = null, ae(t.P), de(t.I), t.a && (e = t.a, t.a = null, e.abort(), e.la()) }

            function We(t, e) { try { t.g.Fa(t, e), ge(4) } catch (t) {} }

            function Je(t, e) { if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                else if (P(t) || D(t)) K(t, e, void 0);
                else { if (t.K && "function" == typeof t.K) var n = t.K();
                    else if (t.C && "function" == typeof t.C) n = void 0;
                    else if (P(t) || D(t)) { n = []; for (var r = t.length, i = 0; i < r; i++) n.push(i) } else
                        for (i in n = [], r = 0, t) n[r++] = i;
                    i = (r = function(t) { if (t.C && "function" == typeof t.C) return t.C(); if (D(t)) return t.split(""); if (P(t)) { for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]); return e } for (r in e = [], n = 0, t) e[n++] = t[r]; return e }(t)).length; for (var o = 0; o < i; o++) e.call(void 0, r[o], n && n[o], t) } }

            function Ye(t, e) { this.b = {}, this.a = [], this.c = 0; var n = arguments.length; if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]) } else if (t)
                    if (t instanceof Ye)
                        for (n = t.K(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
                    else
                        for (r in t) this.set(r, t[r]) }

            function Qe(t, e) { $e(t.b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && Xe(t)) }

            function Xe(t) { if (t.c != t.a.length) { for (var e = 0, n = 0; e < t.a.length;) { var r = t.a[e];
                        $e(t.b, r) && (t.a[n++] = r), e++ } t.a.length = n } if (t.c != t.a.length) { var i = {}; for (n = e = 0; e < t.a.length;) $e(i, r = t.a[e]) || (i[t.a[n++] = r] = 1), e++;
                    t.a.length = n } }

            function $e(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }(N = Le.prototype).setTimeout = function(t) { this.O = t }, N.cb = function(t) { t = t.target; var e = this.B;
                e && 3 == er(t) ? e.Ta() : this.Ja(t) }, N.Ja = function(t) { try { if (t == this.a) t: { var e = er(this.a),
                            n = this.a.ya(),
                            r = this.a.T(); if (!(e < 3 || 3 == e && !lt && !this.a.aa())) { this.m || 4 != e || 7 == n || ge(8 == n || r <= 0 ? 3 : 2), ze(this); var i = this.a.T();
                            this.o = i; var o = this.a.aa(); if (this.b = 200 == i) { if (this.S && !this.s) { e: { if (this.a) { var s = nr(this.a, "X-HTTP-Initial-Response"); if (s && !Y(s)) { var a = s; break e } } a = null } if (!a) { this.b = !1, this.c = 3, be(12), Ke(this), He(this); break t } this.s = !0, We(this, a) } this.H ? (Fe(this, e, o), lt && this.b && 3 == e && (pe(this.I, this.P, "tick", this.bb), this.P.start())) : We(this, o), 4 == e && Ke(this), this.b && !this.m && (4 == e ? this.g.na(this) : (this.b = !1, Ge(this))) } else 400 == i && 0 < o.indexOf("Unknown SID") ? (this.c = 3, be(12)) : (this.c = 0, be(13)), Ke(this), He(this) } } } catch (t) {} }, N.bb = function() { if (this.a) { var t = er(this.a),
                        e = this.a.aa();
                    this.A < e.length && (ze(this), Fe(this, t, e), this.b && 4 != t && Ge(this)) } }, N.cancel = function() { this.m = !0, Ke(this) }, N.ab = function() { this.i = null; var t = G();
                0 <= t - this.R ? (2 != this.F && (ge(3), be(17)), Ke(this), this.c = 2, He(this)) : Be(this, this.R - t) }, (N = Ye.prototype).C = function() { Xe(this); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, N.K = function() { return Xe(this), this.a.concat() }, N.get = function(t, e) { return $e(this.b, t) ? this.b[t] : e }, N.set = function(t, e) { $e(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, N.forEach = function(t, e) { for (var n = this.K(), r = 0; r < n.length; r++) { var i = n[r],
                        o = this.get(i);
                    t.call(e, o, i, this) } }; var Ze = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

            function tn(t, e) { var n;
                this.b = this.j = this.f = "", this.i = null, this.g = this.a = "", this.h = !1, t instanceof tn ? (this.h = void 0 !== e ? e : t.h, nn(this, t.f), this.j = t.j, rn(this, t.b), on(this, t.i), this.a = t.a, sn(this, Tn(t.c)), this.g = t.g) : t && (n = String(t).match(Ze)) ? (this.h = !!e, nn(this, n[1] || "", !0), this.j = cn(n[2] || ""), rn(this, n[3] || "", !0), on(this, n[4]), this.a = cn(n[5] || "", !0), sn(this, n[6] || "", !0), this.g = cn(n[7] || "")) : (this.h = !!e, this.c = new gn(null, this.h)) }

            function en(t) { return new tn(t) }

            function nn(t, e, n) { t.f = n ? cn(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, "")) }

            function rn(t, e, n) { t.b = n ? cn(e, !0) : e }

            function on(t, e) { if (e) { if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                    t.i = e } else t.i = null }

            function sn(t, e, n) { e instanceof gn ? (t.c = e, function(t, e) { e && !t.f && (wn(t), t.c = null, t.a.forEach(function(t, e) { var n = e.toLowerCase();
                        e != n && (bn(this, e), In(this, n, t)) }, t)), t.f = e }(t.c, t.h)) : (n || (e = fn(e, yn)), t.c = new gn(e, t.h)) }

            function an(t, e, n) { t.c.set(e, n) }

            function un(t, e, n) { L(n) || (n = [String(n)]), In(t.c, e, n) }

            function hn(t) { return an(t, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ G()).toString(36)), t }

            function cn(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

            function fn(t, e, n) { return D(t) ? (t = encodeURI(t).replace(e, ln), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null }

            function ln(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) } tn.prototype.toString = function() { var t = [],
                    e = this.f;
                e && t.push(fn(e, pn, !0), ":"); var n = this.b; return !n && "file" != e || (t.push("//"), (e = this.j) && t.push(fn(e, pn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && t.push(":", String(n))), (n = this.a) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(fn(n, "/" == n.charAt(0) ? vn : dn, !0))), (n = this.c.toString()) && t.push("?", n), (n = this.g) && t.push("#", fn(n, mn)), t.join("") }, tn.prototype.resolve = function(t) { var e = en(this),
                    n = !!t.f;
                n ? nn(e, t.f) : n = !!t.j, n ? e.j = t.j : n = !!t.b, n ? rn(e, t.b) : n = null != t.i; var r = t.a; if (n) on(e, t.i);
                else if (n = !!t.a) { if ("/" != r.charAt(0))
                        if (this.b && !this.a) r = "/" + r;
                        else { var i = e.a.lastIndexOf("/"); - 1 != i && (r = e.a.substr(0, i + 1) + r) } if (".." == (i = r) || "." == i) r = "";
                    else if ($(i, "./") || $(i, "/.")) { r = 0 == i.lastIndexOf("/", 0), i = i.split("/"); for (var o = [], s = 0; s < i.length;) { var a = i[s++]; "." == a ? r && s == i.length && o.push("") : ".." == a ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && s == i.length && o.push("")) : (o.push(a), r = !0) } r = o.join("/") } else r = i } return n ? e.a = r : n = "" !== t.c.toString(), n ? sn(e, Tn(t.c)) : n = !!t.g, n && (e.g = t.g), e }; var pn = /[#\/\?@]/g,
                dn = /[#\?:]/g,
                vn = /[#\?]/g,
                yn = /[#\?@]/g,
                mn = /#/g;

            function gn(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

            function wn(n) { n.a || (n.a = new Ye, n.b = 0, n.c && function(t, e) { if (t) { t = t.split("&"); for (var n = 0; n < t.length; n++) { var r = t[n].indexOf("="),
                                i = null; if (0 <= r) { var o = t[n].substring(0, r);
                                i = t[n].substring(r + 1) } else o = t[n];
                            e(o, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "") } } }(n.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) })) }

            function bn(t, e) { wn(t), e = Nn(t, e), $e(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, Qe(t.a, e)) }

            function En(t, e) { return wn(t), e = Nn(t, e), $e(t.a.b, e) }

            function In(t, e, n) { bn(t, e), 0 < n.length && (t.c = null, t.a.set(Nn(t, e), J(n)), t.b += n.length) }

            function Tn(t) { var e = new gn; return e.c = t.c, t.a && (e.a = new Ye(t.a), e.b = t.b), e }

            function Nn(t, e) { return e = String(e), t.f && (e = e.toLowerCase()), e }

            function An(t) { this.a = t, this.b = this.h = null, this.g = !1, this.i = null, this.c = -1, this.l = this.f = null }

            function Sn(t) { var e = t.a.F.a; if (null != e) be(4), e ? (be(10), dr(t.a, t, !1)) : (be(11), dr(t.a, t, !0));
                else { t.b = new Le(t, void 0, void 0), t.b.h = t.h, e = wr(e = t.a, e.Y() ? t.f : null, t.i), be(4), un(e, "TYPE", "xmlhttp"); var n = t.a.j,
                        r = t.a.I;
                    n && r && an(e, n, r), Me(t.b, e, !1, t.f) } }

            function kn() { this.a = this.b = null }

            function Dn() { this.a = new Ye }

            function Rn(t) { var e = typeof t; return "object" == e && t || "function" == e ? "o" + (t[U] || (t[U] = ++q)) : e.charAt(0) + t }

            function Cn(t, e) { this.b = t, this.a = e }

            function On(t) { this.g = t || xn, t = k.PerformanceNavigationTiming ? 0 < (t = k.performance.getEntriesByType("navigation")).length && ("hq" == t[0].nextHopProtocol || "h2" == t[0].nextHopProtocol) : !!(k.ka && k.ka.Da && k.ka.Da() && k.ka.Da().zb), this.f = t ? this.g : 1, this.a = null, 1 < this.f && (this.a = new Dn), this.b = null, this.c = [] }(N = gn.prototype).add = function(t, e) { wn(this), this.c = null, t = Nn(this, t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, N.forEach = function(n, r) { wn(this), this.a.forEach(function(t, e) { K(t, function(t) { n.call(r, t, e, this) }, this) }, this) }, N.K = function() { wn(this); for (var t = this.a.C(), e = this.a.K(), n = [], r = 0; r < e.length; r++)
                    for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]); return n }, N.C = function(t) { wn(this); var e = []; if (D(t)) En(this, t) && (e = W(e, this.a.get(Nn(this, t))));
                else { t = this.a.C(); for (var n = 0; n < t.length; n++) e = W(e, t[n]) } return e }, N.set = function(t, e) { return wn(this), this.c = null, En(this, t = Nn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, N.get = function(t, e) { return t && 0 < (t = this.C(t)).length ? String(t[0]) : e }, N.toString = function() { if (this.c) return this.c; if (!this.a) return ""; for (var t = [], e = this.a.K(), n = 0; n < e.length; n++) { var r = e[n],
                        i = encodeURIComponent(String(r));
                    r = this.C(r); for (var o = 0; o < r.length; o++) { var s = i; "" !== r[o] && (s += "=" + encodeURIComponent(String(r[o]))), t.push(s) } } return this.c = t.join("&") }, B(function() {}, function() {}), (N = An.prototype).M = null, N.$ = function(t) { return this.a.$(t) }, N.abort = function() { this.b && (this.b.cancel(), this.b = null), this.c = -1 }, N.Ca = function() { return !1 }, N.Fa = function(t, e) { if (this.c = t.o, 0 == this.M) { if (!this.a.o && (t = t.a)) { var n = nr(t, "X-Client-Wire-Protocol");
                        this.l = n || null, this.a.j && (t = nr(t, "X-HTTP-Session-Id")) && (this.a.I = t) } if (e) { try { var r = this.a.ja.a.parse(e) } catch (t) { return (e = this.a).m = this.c, void mr(e, 2) } this.f = r[0] } else(e = this.a).m = this.c, mr(e, 2) } else 1 == this.M && (this.g ? be(6) : "11111" == e ? (be(5), this.g = !0, (!ct || 10 <= Number(wt)) && (this.c = 200, this.b.cancel(), be(11), dr(this.a, this, !0))) : (be(7), this.g = !1)) }, N.na = function() { if (this.c = this.b.o, this.b.b) 0 == this.M ? (this.M = 1, Sn(this)) : 1 == this.M && (this.g ? (be(11), dr(this.a, this, !0)) : (be(10), dr(this.a, this, !1)));
                else { 0 == this.M ? be(8) : 1 == this.M && be(9); var t = this.a;
                    t.m = this.c, mr(t, 2) } }, N.Y = function() { return this.a.Y() }, N.ma = function() { return this.a.ma() }, Dn.prototype.add = function(t) { this.a.set(Rn(t), t) }, Dn.prototype.C = function() { return this.a.C() }; var xn = 10;

            function Ln(t, e) {!t.a && ($(e, "spdy") || $(e, "quic") || $(e, "h2")) && (t.f = t.g, t.a = new Dn, t.b && (qn(t, t.b), t.b = null)) }

            function Pn(t) { return !!t.b || !!t.a && t.a.a.c >= t.f }

            function _n(t) { return t.b ? 1 : t.a ? t.a.a.c : 0 }

            function Un(t, e) { return t = t.b ? t.b == e : !!t.a && (e = Rn(e), $e(t.a.a.b, e)) }

            function qn(t, e) { t.a ? t.a.add(e) : t.b = e }

            function Mn(t, e) { var n;
                t.b && t.b == e ? t.b = null : ((n = t.a) && (n = Rn(e), n = $e(t.a.a.b, n)), n && Qe(t.a.a, Rn(e))) }

            function Vn(t) { if (null != t.b) return t.c.concat(t.b.j); if (null == t.a || 0 == t.a.a.c) return J(t.c); var e = t.c; return K(t.a.C(), function(t) { e = e.concat(t.j) }), e }

            function Fn() {}

            function jn() { this.a = new Fn }

            function Gn(t, r, e) { var i = e || ""; try { Je(t, function(t, e) { var n = t;
                        _(t) && (n = Yt(t)), r.push(i + e + "=" + encodeURIComponent(n)) }) } catch (t) { throw r.push(i + "type=" + encodeURIComponent("_badmap")), t } }

            function Bn(t, e, n, r, i) { try { e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, i(r) } catch (t) {} } On.prototype.cancel = function() { this.c = Vn(this), this.b ? (this.b.cancel(), this.b = null) : this.a && 0 != this.a.a.c && (K(this.a.C(), function(t) { t.cancel() }), function(t) { t.b = {}, t.a.length = 0, t.c = 0 }(this.a.a)) }, Fn.prototype.stringify = function(t) { return k.JSON.stringify(t, void 0) }, Fn.prototype.parse = function(t) { return k.JSON.parse(t, void 0) }; var zn = k.JSON.parse;

            function Hn(t) { Wt.call(this), this.headers = new Ye, this.H = t || null, this.b = !1, this.s = this.a = null, this.A = "", this.h = 0, this.f = "", this.g = this.w = this.l = this.v = !1, this.o = 0, this.m = null, this.I = Kn, this.D = this.F = !1 } B(Hn, Wt); var Kn = "",
                Wn = /^https?$/i,
                Jn = ["POST", "PUT"];

            function Yn(t) { return "content-type" == t.toLowerCase() }

            function Qn(t, e) { t.b = !1, t.a && (t.g = !0, t.a.abort(), t.g = !1), t.f = e, t.h = 5, Xn(t), Zn(t) }

            function Xn(t) { t.v || (t.v = !0, t.dispatchEvent("complete"), t.dispatchEvent("error")) }

            function $n(t) { if (t.b && void 0 !== S && (!t.s[1] || 4 != er(t) || 2 != t.T()))
                    if (t.l && 4 == er(t)) ue(t.Ea, 0, t);
                    else if (t.dispatchEvent("readystatechange"), 4 == er(t)) { t.b = !1; try { var e, n = t.T();
                        t: switch (n) {
                            case 200:
                            case 201:
                            case 202:
                            case 204:
                            case 206:
                            case 304:
                            case 1223:
                                var r = !0; break t;
                            default:
                                r = !1 }
                        if (!(e = r)) { var i; if (i = 0 === n) { var o = String(t.A).match(Ze)[1] || null; if (!o && k.self && k.self.location) { var s = k.self.location.protocol;
                                    o = s.substr(0, s.length - 1) } i = !Wn.test(o ? o.toLowerCase() : "") } e = i } if (e) t.dispatchEvent("complete"), t.dispatchEvent("success");
                        else { t.h = 6; try { var a = 2 < er(t) ? t.a.statusText : "" } catch (t) { a = "" } t.f = a + " [" + t.T() + "]", Xn(t) } } finally { Zn(t) } } }

            function Zn(t, e) { if (t.a) { tr(t); var n = t.a,
                        r = t.s[0] ? O : null;
                    t.a = null, t.s = null, e || t.dispatchEvent("ready"); try { n.onreadystatechange = r } catch (t) {} } }

            function tr(t) { t.a && t.D && (t.a.ontimeout = null), t.m && (k.clearTimeout(t.m), t.m = null) }

            function er(t) { return t.a ? t.a.readyState : 0 }

            function nr(t, e) { return t.a ? t.a.getResponseHeader(e) : null }

            function rr(t, e, n) { t: { for (r in n) { var r = !1; break t } r = !0 } if (r) return t; if (n = function(t) { var n = ""; return nt(t, function(t, e) { n += e, n += ":", n += t, n += "\r\n" }), n }(n), D(t)) { if (e = encodeURIComponent(String(e)), e += n = null != n ? "=" + encodeURIComponent(String(n)) : "") { if ((n = t.indexOf("#")) < 0 && (n = t.length), (r = t.indexOf("?")) < 0 || n < r) { r = n; var i = "" } else i = t.substring(r + 1, n);
                        n = (t = [t.substr(0, r), i, t.substr(n)])[1], t[1] = e ? n ? n + "&" + e : e : n, t = t[0] + (t[1] ? "?" + t[1] : "") + t[2] } return t } return an(t, e, n), t }

            function ir(t) { this.f = [], this.F = new kn, this.ga = this.pa = this.B = this.ha = this.a = this.I = this.j = this.V = this.g = this.J = this.i = null, this.Qa = this.P = 0, this.Oa = !!C("internalChannelParams.failFast", t), this.ia = this.w = this.s = this.l = this.h = this.c = null, this.oa = !0, this.m = this.ra = this.O = -1, this.S = this.v = this.A = 0, this.Na = C("internalChannelParams.baseRetryDelayMs", t) || 5e3, this.Ra = C("internalChannelParams.retryDelaySeedMs", t) || 1e4, this.Pa = C("internalChannelParams.forwardChannelMaxRetries", t) || 2, this.qa = C("internalChannelParams.forwardChannelRequestTimeoutMs", t) || 2e4, this.Ka = t && t.Ab || void 0, this.D = void 0, this.R = t && t.supportsCrossDomainXhr || !1, this.H = "", this.b = new On(t && t.concurrentRequestLimit), this.ja = new jn, this.o = !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest, (this.W = t && t.fastHandshake || !1) && !this.o && (this.o = !0), t && t.forceLongPolling && (this.oa = !1), this.fa = void 0 }

            function or(t) { if (sr(t), 3 == t.u) { var e = t.P++,
                        n = en(t.B);
                    an(n, "SID", t.H), an(n, "RID", e), an(n, "TYPE", "terminate"), cr(t, n), (e = new Le(t, e, void 0)).F = 2, e.f = hn(en(n)), n = !1, k.navigator && k.navigator.sendBeacon && (n = k.navigator.sendBeacon(e.f.toString(), "")), !n && k.Image && ((new Image).src = e.f, n = !0), n || (e.a = e.g.$(null), e.a.ca(e.f)), e.v = G(), Ge(e) } gr(t) }

            function sr(t) { t.w && (t.w.abort(), t.w = null), t.a && (t.a.cancel(), t.a = null), t.l && (k.clearTimeout(t.l), t.l = null), vr(t), t.b.cancel(), t.h && (R(t.h) && k.clearTimeout(t.h), t.h = null) }

            function ar(t, e) { t.f.push(new Cn(t.Qa++, e)), 3 == t.u && ur(t) }

            function ur(t) { Pn(t.b) || t.h || (t.h = !0, ne(t.Ha, t), t.A = 0) }

            function hr(t, e) { var n;
                n = e ? e.W : t.P++; var r = en(t.B);
                an(r, "SID", t.H), an(r, "RID", n), an(r, "AID", t.O), cr(t, r), t.g && t.i && rr(r, t.g, t.i), n = new Le(t, n, t.A + 1), null === t.g && (n.h = t.i), e && (t.f = e.j.concat(t.f)), e = fr(t, n, 1e3), n.setTimeout(Math.round(.5 * t.qa) + Math.round(.5 * t.qa * Math.random())), qn(t.b, n), qe(n, r, e) }

            function cr(t, n) { t.c && Je({}, function(t, e) { an(n, e, t) }) }

            function fr(t, e, n) { n = Math.min(t.f.length, n); var r = t.c ? F(t.c.Sa, t.c, t) : null;
                t: for (var i = t.f, o = -1;;) { var s = ["count=" + n]; - 1 == o ? 0 < n ? (o = i[0].b, s.push("ofs=" + o)) : o = 0 : s.push("ofs=" + o); for (var a = !0, u = 0; u < n; u++) { var h = i[u].b,
                            c = i[u].a; if ((h -= o) < 0) o = Math.max(0, i[u].b - 100), a = !1;
                        else try { Gn(c, s, "req" + h + "_") } catch (t) { r && r(c) } } if (a) { r = s.join("&"); break t } }
                return t = t.f.splice(0, n), e.j = t, r }

            function lr(t) { t.a || t.l || (t.S = 1, ne(t.Ga, t), t.v = 0) }

            function pr(t) { return !(t.a || t.l || 3 <= t.v) && (t.S++, t.l = Ie(F(t.Ga, t), yr(t, t.v)), t.v++, !0) }

            function dr(t, e, n) { var r = e.l;
                r && Ln(t.b, r), t.ia = t.oa && n, t.m = e.c, t.B = wr(t, null, t.ha), ur(t) }

            function vr(t) { null != t.s && (k.clearTimeout(t.s), t.s = null) }

            function yr(t, e) { var n = t.Na + Math.floor(Math.random() * t.Ra); return t.ma() || (n *= 2), n * e }

            function mr(t, e) { if (2 == e) { var n = null;
                    t.c && (n = null); var r = F(t.eb, t);
                    n || (n = new tn("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || nn(n, "https"), hn(n)),
                        function(t, e) { var n = new ve; if (k.Image) { var r = new Image;
                                r.onload = j(Bn, n, r, "TestLoadImage: loaded", !0, e), r.onerror = j(Bn, n, r, "TestLoadImage: error", !1, e), r.onabort = j(Bn, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = j(Bn, n, r, "TestLoadImage: timeout", !1, e), k.setTimeout(function() { r.ontimeout && r.ontimeout() }, 1e4), r.src = t } else e(!1) }(n.toString(), r) } else be(2);
                t.u = 0, t.c && t.c.ta(e), gr(t), sr(t) }

            function gr(t) { t.u = 0, t.m = -1, t.c && (0 == Vn(t.b).length && 0 == t.f.length || (t.b.c.length = 0, J(t.f), t.f.length = 0), t.c.sa()) }

            function wr(t, e, n) { var r = function(t) { return t instanceof tn ? en(t) : new tn(t, void 0) }(n); if ("" != r.b) e && rn(r, e + "." + r.b), on(r, r.i);
                else { var i, o = k.location;
                    i = e ? e + "." + o.hostname : o.hostname, r = function(t, e, n, r) { var i = new tn(null, void 0); return t && nn(i, t), e && rn(i, e), n && on(i, n), r && (i.a = r), i }(o.protocol, i, +o.port, n) } return t.V && nt(t.V, function(t, e) { an(r, e, t) }), e = t.j, n = t.I, e && n && an(r, e, n), an(r, "VER", t.wa), cr(t, r), r }

            function br() {}

            function Er() { if (ct && !(10 <= Number(wt))) throw Error("Environmental error: no available transport.") }

            function Ir(t, e) { Wt.call(this), this.a = new ir(e), this.g = t, this.m = e && e.fb ? e.fb : function(t) { for (var e = t, n = 1; n < arguments.length; n++) { var r, i = arguments[n]; if (0 == i.lastIndexOf("/", 0)) e = i;
                        else(r = "" == e) || (r = 0 <= (r = e.length - 1) && e.indexOf("/", r) == r), e += r ? i : "/" + i } return e }(this.g, "test"), this.b = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = { "X-Client-Protocol": "webchannel" }), this.a.i = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = { "X-WebChannel-Content-Type": e.messageContentType }), e && e.xa && (t ? t["X-WebChannel-Client-Profile"] = e.xa : t = { "X-WebChannel-Client-Profile": e.xa }), this.a.J = t, (t = e && e.httpHeadersOverwriteParam) && !Y(t) && (this.a.g = t), this.l = e && e.supportsCrossDomainXhr || !1, this.h = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !Y(e) && (this.a.j = e, null !== (t = this.b) && e in t && (e in (t = this.b) && delete t[e])), this.f = new Ar(this) }

            function Tr(t) { Ce.call(this); var e = t.__sm__; if (e) { t: { for (var n in e) { t = n; break t } t = void 0 }(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e } else this.data = t }

            function Nr() { Oe.call(this), this.status = 1 }

            function Ar(t) { this.a = t }(N = Hn.prototype).ca = function(t, e, n, r) { if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.A + "; newUri=" + t);
                e = e ? e.toUpperCase() : "GET", this.A = t, this.f = "", this.h = 0, this.v = !1, this.b = !0, this.a = new XMLHttpRequest, this.s = this.H ? Se(this.H) : Se(De), this.a.onreadystatechange = F(this.Ea, this); try { this.w = !0, this.a.open(e, String(t), !0), this.w = !1 } catch (t) { return void Qn(this, t) } t = n || ""; var i = new Ye(this.headers);
                r && Je(r, function(t, e) { i.set(e, t) }), r = function(t) { t: { for (var e = Yn, n = t.length, r = D(t) ? t.split("") : t, i = 0; i < n; i++)
                            if (i in r && e.call(void 0, r[i], i, t)) { e = i; break t } e = -1 } return e < 0 ? null : D(t) ? t.charAt(e) : t[e] }(i.K()), n = k.FormData && t instanceof k.FormData, 0 <= H(Jn, e) && !r && !n && i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), i.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, this), this.I && (this.a.responseType = this.I), "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F); try { tr(this), 0 < this.o && ((this.D = function(t) { return ct && Et(9) && R(t.timeout) && void 0 !== t.ontimeout }(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = F(this.Ba, this)) : this.m = ue(this.Ba, this.o, this)), this.l = !0, this.a.send(t), this.l = !1 } catch (t) { Qn(this, t) } }, N.Ba = function() { void 0 !== S && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, this.dispatchEvent("timeout"), this.abort(8)) }, N.abort = function(t) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Zn(this)) }, N.G = function() { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), Zn(this, !0)), Hn.N.G.call(this) }, N.Ea = function() { this.j || (this.w || this.l || this.g ? $n(this) : this.Za()) }, N.Za = function() { $n(this) }, N.T = function() { try { return 2 < er(this) ? this.a.status : -1 } catch (t) { return -1 } }, N.aa = function() { try { return this.a ? this.a.responseText : "" } catch (t) { return "" } }, N.Ua = function(t) { if (this.a) { var e = this.a.responseText; return t && 0 == e.indexOf(t) && (e = e.substring(t.length)), zn(e) } }, N.ya = function() { return this.h }, N.Xa = function() { return D(this.f) ? this.f : String(this.f) }, (N = ir.prototype).wa = 8, N.u = 1, N.Ca = function() { return 0 == this.u }, N.Ha = function(t) { if (this.h)
                    if (this.h = null, 1 == this.u) { if (!t) { this.P = Math.floor(1e5 * Math.random()), t = this.P++; var e, n = new Le(this, t, void 0),
                                r = this.i; if (this.J && (r ? ot(r = rt(r), this.J) : r = this.J), null === this.g && (n.h = r), this.W) t: { for (var i = e = 0; i < this.f.length; i++) { var o = this.f[i]; if (void 0 === (o = "__data__" in o.a && D(o = o.a.__data__) ? o.length : void 0)) break; if (4096 < (e += o)) { e = i; break t } if (4096 === e || i === this.f.length - 1) { e = i + 1; break t } } e = 1e3 }
                            else e = 1e3;
                            e = fr(this, n, e), an(i = en(this.B), "RID", t), an(i, "CVER", 22), this.o && this.j && an(i, "X-HTTP-Session-Id", this.j), cr(this, i), this.g && r && rr(i, this.g, r), qn(this.b, n), this.W ? (an(i, "$req", e), an(i, "SID", "null"), n.S = !0, qe(n, i, null)) : qe(n, i, e), this.u = 2 } } else 3 == this.u && (t ? hr(this, t) : 0 == this.f.length || Pn(this.b) || hr(this)) }, N.Ga = function() { this.l = null, this.a = new Le(this, "rpc", this.S), null === this.g && (this.a.h = this.i), this.a.J = 0; var t = en(this.pa);
                an(t, "RID", "rpc"), an(t, "SID", this.H), an(t, "CI", this.ia ? "0" : "1"), an(t, "AID", this.O), cr(this, t), an(t, "TYPE", "xmlhttp"), this.g && this.i && rr(t, this.g, this.i), this.D && this.a.setTimeout(this.D), Me(this.a, t, !0, this.ga) }, N.Fa = function(t, e) { if (0 != this.u && (this.a == t || Un(this.b, t)))
                    if (this.m = t.o, !t.s && Un(this.b, t) && 3 == this.u) { try { var n = this.ja.a.parse(e) } catch (t) { n = null } if (L(n) && 3 == n.length) { if (0 == (e = n)[0]) { t: if (!this.l) { if (this.a) { if (!(this.a.v + 3e3 < t.v)) break t;
                                        vr(this), this.a.cancel(), this.a = null } pr(this), be(18) } } else this.ra = e[1], 0 < this.ra - this.O && e[2] < 37500 && this.ia && 0 == this.v && !this.s && (this.s = Ie(F(this.Ya, this), 6e3)); if (_n(this.b) <= 1 && this.fa) { try { this.fa() } catch (t) {} this.fa = void 0 } } else mr(this, 11) } else if (!t.s && this.a != t || vr(this), !Y(e))
                    for (e = n = this.ja.a.parse(e), n = 0; n < e.length; n++) { var r = e[n]; if (this.O = r[0], r = r[1], 2 == this.u)
                            if ("c" == r[0]) { this.H = r[1], this.ga = r[2]; var i = r[3];
                                null != i && (this.wa = i), null != (r = r[5]) && R(r) && 0 < r && (this.D = 1.5 * r), this.o && (r = t.a) && ((i = nr(r, "X-Client-Wire-Protocol")) && Ln(this.b, i), this.j && (r = nr(r, "X-HTTP-Session-Id"))) && (this.I = r, an(this.B, this.j, r)), this.u = 3, this.c && this.c.va(), r = t, this.pa = wr(this, this.Y() ? this.ga : null, this.ha), r.s ? (Mn(this.b, r), (i = this.D) && r.setTimeout(i), r.i && (ze(r), Ge(r)), this.a = r) : lr(this), 0 < this.f.length && ur(this) } else "stop" != r[0] && "close" != r[0] || mr(this, 7);
                        else 3 == this.u && ("stop" == r[0] || "close" == r[0] ? "stop" == r[0] ? mr(this, 7) : or(this) : "noop" != r[0] && this.c && this.c.ua(r), this.v = 0) } }, N.Ya = function() { null != this.s && (this.s = null, this.a.cancel(), this.a = null, pr(this), be(19)) }, N.na = function(t) { var e = null; if (this.a == t) { vr(this), this.a = null; var n = 2 } else { if (!Un(this.b, t)) return;
                    e = t.j, Mn(this.b, t), n = 1 } if (this.m = t.o, 0 != this.u)
                    if (t.b) 1 == n ? (e = G() - t.v, ye.dispatchEvent(new Ee(ye, t.l ? t.l.length : 0, e, this.A)), ur(this)) : lr(this);
                    else { var r = t.c; if (3 == r || 0 == r && 0 < this.m || !(1 == n && function(t, e) { return !(_n(t.b) >= t.b.f - (t.h ? 1 : 0)) && (t.h ? (t.f = e.j.concat(t.f), !0) : !(1 == t.u || 2 == t.u || t.A >= (t.Oa ? 0 : t.Pa)) && (t.h = Ie(F(t.Ha, t, e), yr(t, t.A)), t.A++, !0)) }(this, t) || 2 == n && pr(this))) switch (e && 0 < e.length && (t = this.b, t.c = t.c.concat(e)), r) {
                            case 1:
                                mr(this, 5); break;
                            case 4:
                                mr(this, 10); break;
                            case 3:
                                mr(this, 6); break;
                            default:
                                mr(this, 2) } } }, N.eb = function(t) { be(t ? 2 : 1) }, N.$ = function(t) { if (t && !this.R) throw Error("Can't create secondary domain capable XhrIo object."); return (t = new Hn(this.Ka)).F = this.R, t }, N.ma = function() { return !!this.c && !0 }, N.Y = function() { return this.R }, (N = br.prototype).va = function() {}, N.ua = function() {}, N.ta = function() {}, N.sa = function() {}, N.Sa = function() {}, Er.prototype.a = function(t, e) { return new Ir(t, e) }, B(Ir, Wt), (N = Ir.prototype).addEventListener = function(t, e, n, r) { Ir.N.addEventListener.call(this, t, e, n, r) }, N.removeEventListener = function(t, e, n, r) { Ir.N.removeEventListener.call(this, t, e, n, r) }, N.Va = function() { this.a.c = this.f, this.l && (this.a.R = !0); var t = this.a,
                    e = this.m,
                    n = this.g,
                    r = this.b || void 0;
                be(0), t.ha = n, t.V = r || {}, t.o && (t.F.b = [], t.F.a = !1), t.w = new An(t), null === t.g && (t.w.h = t.i), n = e, t.g && t.i && (n = rr(e, t.g, t.i)), (t = t.w).i = n, e = wr(t.a, null, t.i), be(3), null != (n = t.a.F.b) ? (t.f = n[0], t.M = 1, Sn(t)) : (un(e, "MODE", "init"), !t.a.o && t.a.j && un(e, "X-HTTP-Session-Id", t.a.j), t.b = new Le(t, void 0, void 0), t.b.h = t.h, Me(t.b, e, !1, null), t.M = 0) }, N.close = function() { or(this.a) }, N.Wa = function(t) { if (D(t)) { var e = {};
                    e.__data__ = t, ar(this.a, e) } else this.h ? ((e = {}).__data__ = Yt(t), ar(this.a, e)) : ar(this.a, t) }, N.G = function() { this.a.c = null, delete this.f, or(this.a), delete this.a, Ir.N.G.call(this) }, B(Tr, Ce), B(Nr, Oe), B(Ar, br), Ar.prototype.va = function() { this.a.dispatchEvent("a") }, Ar.prototype.ua = function(t) { this.a.dispatchEvent(new Tr(t)) }, Ar.prototype.ta = function(t) { this.a.dispatchEvent(new Nr(t)) }, Ar.prototype.sa = function() { this.a.dispatchEvent("b") }; var Sr = j(function(t, e) {
                function n() {} n.prototype = t.prototype; var r = new n; return t.apply(r, Array.prototype.slice.call(arguments, 1)), r }, Er);
            Er.prototype.createWebChannel = Er.prototype.a, Ir.prototype.send = Ir.prototype.Wa, Ir.prototype.open = Ir.prototype.Va, Ir.prototype.close = Ir.prototype.close, Te.NO_ERROR = 0, Te.TIMEOUT = 8, Te.HTTP_ERROR = 6, Ne.COMPLETE = "complete", (ke.EventType = Re).OPEN = "a", Re.CLOSE = "b", Re.ERROR = "c", Re.MESSAGE = "d", Wt.prototype.listen = Wt.prototype.za, Hn.prototype.listenOnce = Hn.prototype.Aa, Hn.prototype.getLastError = Hn.prototype.Xa, Hn.prototype.getLastErrorCode = Hn.prototype.ya, Hn.prototype.getStatus = Hn.prototype.T, Hn.prototype.getResponseJson = Hn.prototype.Ua, Hn.prototype.getResponseText = Hn.prototype.aa, Hn.prototype.send = Hn.prototype.ca;

            function kr(t, e) { this.user = e, this.type = "OAuth", this.o = {}, this.o.Authorization = "Bearer " + t } var Dr, Rr = { createWebChannelTransport: Sr, ErrorCode: Te, EventType: Ne, WebChannel: ke, XhrIo: Hn },
                Cr = Rr.createWebChannelTransport,
                Or = Rr.ErrorCode,
                xr = Rr.EventType,
                Lr = Rr.WebChannel,
                Pr = Rr.XhrIo,
                _r = ad.SDK_VERSION,
                Ur = (Jr.prototype.t = function() { return null != this.uid }, Jr.prototype.i = function() { return this.t() ? "uid:" + this.uid : "anonymous-user" }, Jr.prototype.isEqual = function(t) { return t.uid === this.uid }, Jr.UNAUTHENTICATED = new Jr(null), Jr.u = new Jr("google-credentials-uid"), Jr.s = new Jr("first-party-uid"), Jr),
                qr = { OK: "ok", CANCELLED: "cancelled", UNKNOWN: "unknown", INVALID_ARGUMENT: "invalid-argument", DEADLINE_EXCEEDED: "deadline-exceeded", NOT_FOUND: "not-found", ALREADY_EXISTS: "already-exists", PERMISSION_DENIED: "permission-denied", UNAUTHENTICATED: "unauthenticated", RESOURCE_EXHAUSTED: "resource-exhausted", FAILED_PRECONDITION: "failed-precondition", ABORTED: "aborted", OUT_OF_RANGE: "out-of-range", UNIMPLEMENTED: "unimplemented", INTERNAL: "internal", UNAVAILABLE: "unavailable", DATA_LOSS: "data-loss" },
                Mr = (t(Wr, Dr = Error), Wr),
                Vr = (Kr.prototype.getToken = function() { return Promise.resolve(null) }, Kr.prototype.l = function() {}, Kr.prototype.v = function(t) { Tu(!this.h, "Can only call setChangeListener() once."), (this.h = t)(Ur.UNAUTHENTICATED) }, Kr.prototype.m = function() { Tu(null !== this.h, "removeChangeListener() when no listener registered"), this.h = null }, Kr),
                Fr = (Hr.prototype.getToken = function() { var e = this;
                    Tu(null != this.g, "getToken cannot be called after listener removed."); var n = this._,
                        t = this.forceRefresh; return this.forceRefresh = !1, this.auth ? this.auth.getToken(t).then(function(t) { if (e._ !== n) throw new Mr(qr.ABORTED, "getToken aborted due to token change."); return t ? (Tu("string" == typeof t.accessToken, "Invalid tokenData returned from getToken():" + t), new kr(t.accessToken, e.currentUser)) : null }) : Promise.resolve(null) }, Hr.prototype.l = function() { this.forceRefresh = !0 }, Hr.prototype.v = function(t) { Tu(!this.h, "Can only call setChangeListener() once."), this.h = t, this.p && t(this.currentUser) }, Hr.prototype.m = function() { Tu(null != this.g, "removeChangeListener() called twice"), Tu(null !== this.h, "removeChangeListener() called when no listener registered"), this.auth && this.auth.removeAuthTokenListener(this.g), this.g = null, this.h = null }, Hr.prototype.I = function() { var t = this.auth && this.auth.getUid(); return Tu(null === t || "string" == typeof t, "Received invalid UID: " + t), new Ur(t) }, Hr),
                jr = (Object.defineProperty(zr.prototype, "o", { get: function() { var t = { "X-Goog-AuthUser": this.D },
                            e = this.T.auth.R([]); return e && (t.Authorization = e), t }, enumerable: !0, configurable: !0 }), zr),
                Gr = (Br.prototype.getToken = function() { return Promise.resolve(new jr(this.T, this.D)) }, Br.prototype.v = function(t) { t(Ur.s) }, Br.prototype.m = function() {}, Br.prototype.l = function() {}, Br);

            function Br(t, e) { this.T = t, this.D = e }

            function zr(t, e) { this.T = t, this.D = e, this.type = "FirstParty", this.user = Ur.s }

            function Hr(t) { var e = this;
                this.g = null, this.currentUser = Ur.UNAUTHENTICATED, this.p = !1, this._ = 0, this.h = null, this.forceRefresh = !1, this.g = function() { e._++, e.currentUser = e.I(), e.p = !0, e.h && e.h(e.currentUser) }, this._ = 0, this.auth = t.getImmediate({ optional: !0 }), this.auth ? this.auth.addAuthTokenListener(this.g) : (this.g(null), t.get().then(function(t) { e.auth = t, e.g && e.auth.addAuthTokenListener(e.g) }, function() {})) }

            function Kr() { this.h = null }

            function Wr(t, e) { var n = Dr.call(this, e) || this; return n.code = t, n.message = e, n.name = "FirebaseError", n.toString = function() { return n.name + ": [code=" + n.code + "]: " + n.message }, n }

            function Jr(t) { this.uid = t }

            function Yr(t, e) {
                function n() { var t = "This constructor is private."; throw e && (t += " ", t += e), new Mr(qr.INVALID_ARGUMENT, t) } return n.prototype = t.prototype, Object.assign(n, t), n }

            function Qr(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }

            function Xr(t, e) { return void 0 !== t ? t : e }

            function $r(t, e) { for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) { var r = Number(n);
                        isNaN(r) || e(r, t[n]) } }

            function Zr(t, e) { for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]) }

            function ti(t) { for (var e in Tu(null != t && "object" == typeof t, "isEmpty() expects object parameter."), t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1; return !0 }

            function ei(t, e) { if (0 !== e.length) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() does not support arguments, but was called with " + gi(e.length, "argument") + ".") }

            function ni(t, e, n) { if (e.length !== n) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires " + gi(n, "argument") + ", but was called with " + gi(e.length, "argument") + ".") }

            function ri(t, e, n) { if (e.length < n) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires at least " + gi(n, "argument") + ", but was called with " + gi(e.length, "argument") + ".") }

            function ii(t, e, n, r) { if (e.length < n || e.length > r) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + gi(e.length, "argument") + ".") }

            function oi(t, e, n, r) { ci(t, e, mi(n) + " argument", r) }

            function si(t, e, n, r) { void 0 !== r && oi(t, e, n, r) }

            function ai(t, e, n, r) { ci(t, e, n + " option", r) }

            function ui(t, e, n, r) { void 0 !== r && ai(t, e, n, r) }

            function hi(t, e, n, r, h) { void 0 !== r && function(t, e, n, r) { for (var i = [], o = 0, s = h; o < s.length; o++) { var a = s[o]; if (a === r) return;
                        i.push(li(a)) } var u = li(r); throw new Mr(qr.INVALID_ARGUMENT, "Invalid value " + u + " provided to function " + t + '() for option "' + n + '". Acceptable values: ' + i.join(", ")) }(t, 0, n, r) }

            function ci(t, e, n, r) { if (!("object" === e ? fi(r) : "non-empty string" === e ? "string" == typeof r && "" !== r : typeof r === e)) { var i = li(r); throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + i) } }

            function fi(t) { return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t)) }

            function li(t) { if (void 0 === t) return "undefined"; if (null === t) return "null"; if ("string" == typeof t) return 20 < t.length && (t = t.substring(0, 20) + "..."), JSON.stringify(t); if ("number" == typeof t || "boolean" == typeof t) return "" + t; if ("object" != typeof t) return "function" == typeof t ? "a function" : Iu("Unknown wrong type: " + typeof t); if (t instanceof Array) return "an array"; var e = function(t) { if (t.constructor) { var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString()); if (e && 1 < e.length) return e[1] } return null }(t); return e ? "a custom " + e + " object" : "an object" }

            function pi(t, e, n) { if (void 0 === n) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + mi(e) + " argument, but it was undefined.") }

            function di(n, t, r) { Zr(t, function(t, e) { if (r.indexOf(t) < 0) throw new Mr(qr.INVALID_ARGUMENT, "Unknown option '" + t + "' passed to function " + n + "(). Available options: " + r.join(", ")) }) }

            function vi(t, e, n, r) { var i = li(r); return new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires its " + mi(n) + " argument to be a " + e + ", but it was: " + i) }

            function yi(t, e, n) { if (n <= 0) throw new Mr(qr.INVALID_ARGUMENT, 'Function "' + t + '()" requires its ' + mi(e) + " argument to be a positive number, but it was: " + n + ".") }

            function mi(t) { switch (t) {
                    case 1:
                        return "first";
                    case 2:
                        return "second";
                    case 3:
                        return "third";
                    default:
                        return t + "th" } }

            function gi(t, e) { return t + " " + e + (1 === t ? "" : "s") } var wi = (bi.fromBase64String = function(t) { return new bi(pu.C().atob(t)) }, bi.fromUint8Array = function(t) { return new bi(Ei(t)) }, bi.prototype.toBase64 = function() { return pu.C().btoa(this.A) }, bi.prototype.toUint8Array = function() { return Ii(this.A) }, bi.prototype.P = function() { return 2 * this.A.length }, bi.prototype.isEqual = function(t) { return this.A === t.A }, bi.k = new bi(""), bi);

            function bi(t) { this.A = t }

            function Ei(t) { for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]); return e }

            function Ii(t) { for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n); return e }

            function Ti() { if ("undefined" == typeof Uint8Array) throw new Mr(qr.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.") }

            function Ni() { if (!pu.C().N) throw new Mr(qr.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.") } var Ai, Si, ki = ($i.fromBase64String = function(t) { ni("Blob.fromBase64String", arguments, 1), oi("Blob.fromBase64String", "string", 1, t), Ni(); try { return new $i(pu.C().atob(t)) } catch (t) { throw new Mr(qr.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t) } }, $i.fromUint8Array = function(t) { if (ni("Blob.fromUint8Array", arguments, 1), Ti(), !(t instanceof Uint8Array)) throw vi("Blob.fromUint8Array", "Uint8Array", 1, t); return new $i(Ei(t)) }, $i.prototype.toBase64 = function() { return ni("Blob.toBase64", arguments, 0), Ni(), pu.C().btoa(this.A) }, $i.prototype.toUint8Array = function() { return ni("Blob.toUint8Array", arguments, 0), Ti(), Ii(this.A) }, $i.prototype.toString = function() { return "Blob(base64: " + this.toBase64() + ")" }, $i.prototype.isEqual = function(t) { return this.A === t.A }, $i.prototype.O = function() { return 2 * this.A.length }, $i.prototype.F = function(t) { return Su(this.A, t.A) }, $i),
                Di = Yr(ki, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
                Ri = (Object.defineProperty(Xi.prototype, "latitude", { get: function() { return this.V }, enumerable: !0, configurable: !0 }), Object.defineProperty(Xi.prototype, "longitude", { get: function() { return this.U }, enumerable: !0, configurable: !0 }), Xi.prototype.isEqual = function(t) { return this.V === t.V && this.U === t.U }, Xi.prototype.F = function(t) { return Su(this.V, t.V) || Su(this.U, t.U) }, Xi),
                Ci = (Qi.now = function() { return Qi.fromMillis(Date.now()) }, Qi.fromDate = function(t) { return Qi.fromMillis(t.getTime()) }, Qi.fromMillis = function(t) { var e = Math.floor(t / 1e3); return new Qi(e, 1e6 * (t - 1e3 * e)) }, Qi.prototype.toDate = function() { return new Date(this.toMillis()) }, Qi.prototype.toMillis = function() { return 1e3 * this.seconds + this.nanoseconds / 1e6 }, Qi.prototype.F = function(t) { return this.seconds === t.seconds ? Su(this.nanoseconds, t.nanoseconds) : Su(this.seconds, t.seconds) }, Qi.prototype.isEqual = function(t) { return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds }, Qi.prototype.toString = function() { return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")" }, Qi.prototype.valueOf = function() { var t = this.seconds - -62135596800; return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0") }, Qi),
                Oi = (Yi.j = function(t) { var e = Math.floor(t / 1e6); return new Yi(new Ci(e, t % 1e6 * 1e3)) }, Yi.L = function(t) { return new Yi(t) }, Yi.q = function() { return Yi.MIN }, Yi.prototype.B = function(t) { return this.timestamp.F(t.timestamp) }, Yi.prototype.isEqual = function(t) { return this.timestamp.isEqual(t.timestamp) }, Yi.prototype.M = function() { return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3 }, Yi.prototype.toString = function() { return "SnapshotVersion(" + this.timestamp.toString() + ")" }, Yi.prototype.G = function() { return this.timestamp }, Yi.MIN = new Yi(new Ci(0, 0)), Yi),
                xi = (Object.defineProperty(Ji.prototype, "length", { get: function() { return this.len }, enumerable: !0, configurable: !0 }), Ji.prototype.isEqual = function(t) { return 0 === Ji.W(this, t) }, Ji.prototype.child = function(t) { var e = this.segments.slice(this.offset, this.limit()); return t instanceof Ji ? t.forEach(function(t) { e.push(t) }) : e.push(t), this.K(e) }, Ji.prototype.limit = function() { return this.offset + this.length }, Ji.prototype.H = function(t) { return t = void 0 === t ? 1 : t, Tu(this.length >= t, "Can't call popFirst() with less segments"), this.K(this.segments, this.offset + t, this.length - t) }, Ji.prototype.J = function() { return Tu(!this.Y(), "Can't call popLast() on empty path"), this.K(this.segments, this.offset, this.length - 1) }, Ji.prototype.X = function() { return Tu(!this.Y(), "Can't call firstSegment() on empty path"), this.segments[this.offset] }, Ji.prototype.$ = function() { return this.get(this.length - 1) }, Ji.prototype.get = function(t) { return Tu(t < this.length, "Index out of range"), this.segments[this.offset + t] }, Ji.prototype.Y = function() { return 0 === this.length }, Ji.prototype.Z = function(t) { if (t.length < this.length) return !1; for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1; return !0 }, Ji.prototype.tt = function(t) { if (this.length + 1 !== t.length) return !1; for (var e = 0; e < this.length; e++)
                        if (this.get(e) !== t.get(e)) return !1; return !0 }, Ji.prototype.forEach = function(t) { for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]) }, Ji.prototype.nt = function() { return this.segments.slice(this.offset, this.limit()) }, Ji.W = function(t, e) { for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) { var i = t.get(r),
                            o = e.get(r); if (i < o) return -1; if (o < i) return 1 } return t.length < e.length ? -1 : t.length > e.length ? 1 : 0 }, Ji),
                Li = (t(Wi, Si = xi), Wi.prototype.K = function(t, e, n) { return new Wi(t, e, n) }, Wi.prototype.it = function() { return this.nt().join("/") }, Wi.prototype.toString = function() { return this.it() }, Wi.et = function(t) { if (0 <= t.indexOf("//")) throw new Mr(qr.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them."); return new Wi(t.split("/").filter(function(t) { return 0 < t.length })) }, Wi.rt = new Wi([]), Wi),
                Pi = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                _i = (t(Ki, Ai = xi), Ki.prototype.K = function(t, e, n) { return new Ki(t, e, n) }, Ki.ut = function(t) { return Pi.test(t) }, Ki.prototype.it = function() { return this.nt().map(function(t) { return t = t.replace("\\", "\\\\").replace("`", "\\`"), Ki.ut(t) || (t = "`" + t + "`"), t }).join(".") }, Ki.prototype.toString = function() { return this.it() }, Ki.prototype.st = function() { return 1 === this.length && "__name__" === this.get(0) }, Ki.ot = function() { return new Ki(["__name__"]) }, Ki.ht = function(t) { for (var e = [], n = "", r = 0, i = function() { if (0 === n.length) throw new Mr(qr.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                            e.push(n), n = "" }, o = !1; r < t.length;) { var s = t[r]; if ("\\" === s) { if (r + 1 === t.length) throw new Mr(qr.INVALID_ARGUMENT, "Path has trailing escape character: " + t); var a = t[r + 1]; if ("\\" !== a && "." !== a && "`" !== a) throw new Mr(qr.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                            n += a, r += 2 } else "`" === s ? o = !o : "." !== s || o ? n += s : i(), r++ } if (i(), o) throw new Mr(qr.INVALID_ARGUMENT, "Unterminated ` in path: " + t); return new Ki(e) }, Ki.rt = new Ki([]), Ki),
                Ui = (Hi.prototype.at = function(t) { return 2 <= this.path.length && this.path.get(this.path.length - 2) === t }, Hi.prototype.isEqual = function(t) { return null !== t && 0 === Li.W(this.path, t.path) }, Hi.prototype.toString = function() { return this.path.toString() }, Hi.W = function(t, e) { return Li.W(t.path, e.path) }, Hi.ct = function(t) { return t.length % 2 == 0 }, Hi.ft = function(t) { return new Hi(new Li(t.slice())) }, Hi.lt = function(t) { return new Hi(Li.et(t)) }, Hi.EMPTY = new Hi(new Li([])), Hi),
                qi = (zi.prototype.dt = function(t, e) { return new zi(this.W, this.root.dt(t, e, this.W).copy(null, null, Vi.vt, null, null)) }, zi.prototype.remove = function(t) { return new zi(this.W, this.root.remove(t, this.W).copy(null, null, Vi.vt, null, null)) }, zi.prototype.get = function(t) { for (var e = this.root; !e.Y();) { var n = this.W(t, e.key); if (0 === n) return e.value;
                        n < 0 ? e = e.left : 0 < n && (e = e.right) } return null }, zi.prototype.indexOf = function(t) { for (var e = 0, n = this.root; !n.Y();) { var r = this.W(t, n.key); if (0 === r) return e + n.left.size;
                        n = r < 0 ? n.left : (e += n.left.size + 1, n.right) } return -1 }, zi.prototype.Y = function() { return this.root.Y() }, Object.defineProperty(zi.prototype, "size", { get: function() { return this.root.size }, enumerable: !0, configurable: !0 }), zi.prototype.wt = function() { return this.root.wt() }, zi.prototype.gt = function() { return this.root.gt() }, zi.prototype.bt = function(t) { return this.root.bt(t) }, zi.prototype.forEach = function(n) { this.bt(function(t, e) { return n(t, e), !1 }) }, zi.prototype.toString = function() { var n = []; return this.bt(function(t, e) { return n.push(t + ":" + e), !1 }), "{" + n.join(", ") + "}" }, zi.prototype.pt = function(t) { return this.root.pt(t) }, zi.prototype.yt = function() { return new Mi(this.root, null, this.W, !1) }, zi.prototype._t = function(t) { return new Mi(this.root, t, this.W, !1) }, zi.prototype.It = function() { return new Mi(this.root, null, this.W, !0) }, zi.prototype.Tt = function(t) { return new Mi(this.root, t, this.W, !0) }, zi),
                Mi = (Bi.prototype.Rt = function() { Tu(0 < this.Dt.length, "getNext() called on iterator when hasNext() is false."); var t = this.Dt.pop(),
                        e = { key: t.key, value: t.value }; if (this.Et)
                        for (t = t.left; !t.Y();) this.Dt.push(t), t = t.right;
                    else
                        for (t = t.right; !t.Y();) this.Dt.push(t), t = t.left; return e }, Bi.prototype.St = function() { return 0 < this.Dt.length }, Bi.prototype.At = function() { if (0 === this.Dt.length) return null; var t = this.Dt[this.Dt.length - 1]; return { key: t.key, value: t.value } }, Bi),
                Vi = (Gi.prototype.copy = function(t, e, n, r, i) { return new Gi(null != t ? t : this.key, null != e ? e : this.value, null != n ? n : this.color, null != r ? r : this.left, null != i ? i : this.right) }, Gi.prototype.Y = function() { return !1 }, Gi.prototype.bt = function(t) { return this.left.bt(t) || t(this.key, this.value) || this.right.bt(t) }, Gi.prototype.pt = function(t) { return this.right.pt(t) || t(this.key, this.value) || this.left.pt(t) }, Gi.prototype.min = function() { return this.left.Y() ? this : this.left.min() }, Gi.prototype.wt = function() { return this.min().key }, Gi.prototype.gt = function() { return this.right.Y() ? this.key : this.right.gt() }, Gi.prototype.dt = function(t, e, n) { var r = this,
                        i = n(t, r.key); return (r = i < 0 ? r.copy(null, null, null, r.left.dt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.dt(t, e, n))).Ct() }, Gi.prototype.Pt = function() { if (this.left.Y()) return Gi.EMPTY; var t = this; return t.left.kt() || t.left.left.kt() || (t = t.Nt()), (t = t.copy(null, null, null, t.left.Pt(), null)).Ct() }, Gi.prototype.remove = function(t, e) { var n, r = this; if (e(t, r.key) < 0) r.left.Y() || r.left.kt() || r.left.left.kt() || (r = r.Nt()), r = r.copy(null, null, null, r.left.remove(t, e), null);
                    else { if (r.left.kt() && (r = r.Ot()), r.right.Y() || r.right.kt() || r.right.left.kt() || (r = r.Ft()), 0 === e(t, r.key)) { if (r.right.Y()) return Gi.EMPTY;
                            n = r.right.min(), r = r.copy(n.key, n.value, null, null, r.right.Pt()) } r = r.copy(null, null, null, null, r.right.remove(t, e)) } return r.Ct() }, Gi.prototype.kt = function() { return this.color }, Gi.prototype.Ct = function() { var t = this; return t.right.kt() && !t.left.kt() && (t = t.Vt()), t.left.kt() && t.left.left.kt() && (t = t.Ot()), t.left.kt() && t.right.kt() && (t = t.Ut()), t }, Gi.prototype.Nt = function() { var t = this.Ut(); return t.right.left.kt() && (t = (t = (t = t.copy(null, null, null, null, t.right.Ot())).Vt()).Ut()), t }, Gi.prototype.Ft = function() { var t = this.Ut(); return t.left.left.kt() && (t = (t = t.Ot()).Ut()), t }, Gi.prototype.Vt = function() { var t = this.copy(null, null, Gi.RED, null, this.right.left); return this.right.copy(null, null, this.color, t, null) }, Gi.prototype.Ot = function() { var t = this.copy(null, null, Gi.RED, this.left.right, null); return this.left.copy(null, null, this.color, null, t) }, Gi.prototype.Ut = function() { var t = this.left.copy(null, null, !this.left.color, null, null),
                        e = this.right.copy(null, null, !this.right.color, null, null); return this.copy(null, null, !this.color, t, e) }, Gi.prototype.xt = function() { var t = this.jt(); return Math.pow(2, t) <= this.size + 1 }, Gi.prototype.jt = function() { if (this.kt() && this.left.kt()) throw Iu("Red node has red child(" + this.key + "," + this.value + ")"); if (this.right.kt()) throw Iu("Right child of (" + this.key + "," + this.value + ") is red"); var t = this.left.jt(); if (t !== this.right.jt()) throw Iu("Black depths differ"); return t + (this.kt() ? 0 : 1) }, Gi.EMPTY = null, Gi.RED = !0, Gi.vt = !1, Gi),
                Fi = (Object.defineProperty(ji.prototype, "key", { get: function() { throw Iu("LLRBEmptyNode has no key.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(ji.prototype, "value", { get: function() { throw Iu("LLRBEmptyNode has no value.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(ji.prototype, "color", { get: function() { throw Iu("LLRBEmptyNode has no color.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(ji.prototype, "left", { get: function() { throw Iu("LLRBEmptyNode has no left child.") }, enumerable: !0, configurable: !0 }), Object.defineProperty(ji.prototype, "right", { get: function() { throw Iu("LLRBEmptyNode has no right child.") }, enumerable: !0, configurable: !0 }), ji.prototype.copy = function(t, e, n, r, i) { return this }, ji.prototype.dt = function(t, e, n) { return new Vi(t, e) }, ji.prototype.remove = function(t, e) { return this }, ji.prototype.Y = function() { return !0 }, ji.prototype.bt = function(t) { return !1 }, ji.prototype.pt = function(t) { return !1 }, ji.prototype.wt = function() { return null }, ji.prototype.gt = function() { return null }, ji.prototype.kt = function() { return !1 }, ji.prototype.xt = function() { return !0 }, ji.prototype.jt = function() { return 0 }, ji);

            function ji() { this.size = 0 }

            function Gi(t, e, n, r, i) { this.key = t, this.value = e, this.color = null != n ? n : Gi.RED, this.left = null != r ? r : Gi.EMPTY, this.right = null != i ? i : Gi.EMPTY, this.size = this.left.size + 1 + this.right.size }

            function Bi(t, e, n, r) { this.Et = r, this.Dt = []; for (var i = 1; !t.Y();)
                    if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.Et ? t.left : t.right;
                    else { if (0 === i) { this.Dt.push(t); break } this.Dt.push(t), t = this.Et ? t.right : t.left } }

            function zi(t, e) { this.W = t, this.root = e || Vi.EMPTY }

            function Hi(t) { this.path = t, Tu(Hi.ct(t), "Invalid DocumentKey with an odd number of segments: " + t.nt().join("/")) }

            function Ki() { return null !== Ai && Ai.apply(this, arguments) || this }

            function Wi() { return null !== Si && Si.apply(this, arguments) || this }

            function Ji(t, e, n) { void 0 === e ? e = 0 : e > t.length && Iu("offset " + e + " out of range " + t.length), void 0 === n ? n = t.length - e : n > t.length - e && Iu("length " + n + " out of range " + (t.length - e)), this.segments = t, this.offset = e, this.len = n }

            function Yi(t) { this.timestamp = t }

            function Qi(t, e) { if (this.seconds = t, (this.nanoseconds = e) < 0) throw new Mr(qr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (1e9 <= e) throw new Mr(qr.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e); if (t < -62135596800) throw new Mr(qr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t); if (253402300800 <= t) throw new Mr(qr.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t) }

            function Xi(t, e) { if (ni("GeoPoint", arguments, 2), oi("GeoPoint", "number", 1, t), oi("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || 90 < t) throw new Mr(qr.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t); if (!isFinite(e) || e < -180 || 180 < e) throw new Mr(qr.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                this.V = t, this.U = e }

            function $i(t) { Ni(), this.A = t } Vi.EMPTY = new Fi; var Zi = (co.Lt = function(t) { var e = new co(t.W); return t.forEach(function(t) { e = e.add(t) }), e }, co.prototype.has = function(t) { return null !== this.data.get(t) }, co.prototype.first = function() { return this.data.wt() }, co.prototype.last = function() { return this.data.gt() }, Object.defineProperty(co.prototype, "size", { get: function() { return this.data.size }, enumerable: !0, configurable: !0 }), co.prototype.indexOf = function(t) { return this.data.indexOf(t) }, co.prototype.forEach = function(n) { this.data.bt(function(t, e) { return n(t), !1 }) }, co.prototype.qt = function(t, e) { for (var n = this.data._t(t[0]); n.St();) { var r = n.Rt(); if (0 <= this.W(r.key, t[1])) return;
                        e(r.key) } }, co.prototype.Bt = function(t, e) { var n; for (n = void 0 !== e ? this.data._t(e) : this.data.yt(); n.St();)
                        if (!t(n.Rt().key)) return }, co.prototype.Mt = function(t) { var e = this.data._t(t); return e.St() ? e.Rt().key : null }, co.prototype.yt = function() { return new to(this.data.yt()) }, co.prototype._t = function(t) { return new to(this.data._t(t)) }, co.prototype.add = function(t) { return this.copy(this.data.remove(t).dt(t, !0)) }, co.prototype.delete = function(t) { return this.has(t) ? this.copy(this.data.remove(t)) : this }, co.prototype.Y = function() { return this.data.Y() }, co.prototype.Qt = function(t) { var e = this; return e.size < t.size && (e = t, t = this), t.forEach(function(t) { e = e.add(t) }), e }, co.prototype.isEqual = function(t) { if (!(t instanceof co)) return !1; if (this.size !== t.size) return !1; for (var e = this.data.yt(), n = t.data.yt(); e.St();) { var r = e.Rt().key,
                            i = n.Rt().key; if (0 !== this.W(r, i)) return !1 } return !0 }, co.prototype.nt = function() { var e = []; return this.forEach(function(t) { e.push(t) }), e }, co.prototype.toString = function() { var e = []; return this.forEach(function(t) { return e.push(t) }), "SortedSet(" + e.toString() + ")" }, co.prototype.copy = function(t) { var e = new co(this.W); return e.data = t, e }, co),
                to = (ho.prototype.Rt = function() { return this.Gt.Rt().key }, ho.prototype.St = function() { return this.Gt.St() }, ho),
                eo = (uo.prototype.Wt = function(t, e) { return new ds(e, t) }, uo.prototype.zt = function(t, e) { return e }, uo.prototype.Kt = function(t) { return null }, uo.prototype.isEqual = function(t) { return t instanceof uo }, uo.instance = new uo, uo),
                no = (ao.prototype.Wt = function(t, e) { return this.apply(t) }, ao.prototype.zt = function(t, e) { return this.apply(t) }, ao.prototype.apply = function(t) { for (var n = fo(t), e = function(e) { n.find(function(t) { return t.isEqual(e) }) || n.push(e) }, r = 0, i = this.elements; r < i.length; r++) e(i[r]); return new bs(n) }, ao.prototype.Kt = function(t) { return null }, ao.prototype.isEqual = function(t) { return t instanceof ao && ku(t.elements, this.elements) }, ao),
                ro = (so.prototype.Wt = function(t, e) { return this.apply(t) }, so.prototype.zt = function(t, e) { return this.apply(t) }, so.prototype.apply = function(t) { for (var n = fo(t), e = function(e) { n = n.filter(function(t) { return !t.isEqual(e) }) }, r = 0, i = this.elements; r < i.length; r++) e(i[r]); return new bs(n) }, so.prototype.Kt = function(t) { return null }, so.prototype.isEqual = function(t) { return t instanceof so && ku(t.elements, this.elements) }, so),
                io = (oo.prototype.Wt = function(t, e) { var n = this.Kt(t); if (n instanceof cs && this.Ht instanceof cs) { var r = n.Jt + this.Ht.Jt; return new cs(r) } return r = n.Jt + this.Ht.Jt, new fs(r) }, oo.prototype.zt = function(t, e) { return Tu(null !== e, "Didn't receive transformResult for NUMERIC_ADD transform"), e }, oo.prototype.Kt = function(t) { return t instanceof _o ? t : new cs(0) }, oo.prototype.isEqual = function(t) { return t instanceof oo && this.Ht.isEqual(t.Ht) }, oo);

            function oo(t) { this.Ht = t }

            function so(t) { this.elements = t }

            function ao(t) { this.elements = t }

            function uo() {}

            function ho(t) { this.Gt = t }

            function co(t) { this.W = t, this.data = new qi(this.W) }

            function fo(t) { return t instanceof bs ? t.Jt.slice() : [] }

            function lo(t, e) { this.version = t, this.transformResults = e } var po, vo, yo, mo, go, wo, bo, Eo, Io = (Yo.Yt = function(t) { return new Yo(t) }, Yo.Xt = function(t) { var e = new Zi(_i.W); return t.forEach(function(t) { return e = e.add(t) }), new Yo(e) }, Yo.prototype.$t = function(e) { var n = !1; return this.fields.forEach(function(t) { t.Z(e) && (n = !0) }), n }, Yo.prototype.isEqual = function(t) { return this.fields.isEqual(t.fields) }, Yo),
                To = (Jo.prototype.isEqual = function(t) { return this.field.isEqual(t.field) && this.transform.isEqual(t.transform) }, Jo),
                No = (Wo.exists = function(t) { return new Wo(void 0, t) }, Wo.updateTime = function(t) { return new Wo(t) }, Object.defineProperty(Wo.prototype, "Zt", { get: function() { return void 0 === this.updateTime && void 0 === this.exists }, enumerable: !0, configurable: !0 }), Wo.prototype.tn = function(t) { return void 0 !== this.updateTime ? t instanceof Is && t.version.isEqual(this.updateTime) : void 0 !== this.exists ? this.exists === t instanceof Is : (Tu(this.Zt, "Precondition should be empty"), !0) }, Wo.prototype.isEqual = function(t) { return e = this.updateTime, n = t.updateTime, !((null != e ? !n || !e.isEqual(n) : e !== n) || this.exists !== t.exists); var e, n }, Wo.NONE = new Wo, Wo),
                Ao = (Ko.prototype.nn = function(t) { null != t && Tu(t.key.isEqual(this.key), "Can only apply a mutation to a document with the same key") }, Ko.in = function(t) { return t instanceof Is ? t.version : Oi.MIN }, Ko),
                So = (t(Ho, Eo = Ao), Ho.prototype.zt = function(t, e) { this.nn(t), Tu(null == e.transformResults, "Transform results received by SetMutation."); var n = e.version; return new Is(this.key, n, { hasCommittedMutations: !0 }, this.value) }, Ho.prototype.Wt = function(t, e, n) { if (this.nn(t), !this.en.tn(t)) return t; var r = Ao.in(t); return new Is(this.key, r, { rn: !0 }, this.value) }, Ho.prototype.un = function(t) { return null }, Ho.prototype.isEqual = function(t) { return t instanceof Ho && this.key.isEqual(t.key) && this.value.isEqual(t.value) && this.en.isEqual(t.en) }, Ho),
                ko = (t(zo, bo = Ao), zo.prototype.zt = function(t, e) { if (this.nn(t), Tu(null == e.transformResults, "Transform results received by PatchMutation."), !this.en.tn(t)) return new Ns(this.key, e.version); var n = this.on(t); return new Is(this.key, e.version, { hasCommittedMutations: !0 }, n) }, zo.prototype.Wt = function(t, e, n) { if (this.nn(t), !this.en.tn(t)) return t; var r = Ao.in(t),
                        i = this.on(t); return new Is(this.key, r, { rn: !0 }, i) }, zo.prototype.un = function(t) { return null }, zo.prototype.isEqual = function(t) { return t instanceof zo && this.key.isEqual(t.key) && this.sn.isEqual(t.sn) && this.en.isEqual(t.en) }, zo.prototype.on = function(t) { var e; return e = t instanceof Is ? t.data() : gs.EMPTY, this.hn(e) }, zo.prototype.hn = function(t) { var n = this,
                        r = t.cn(); return this.sn.fields.forEach(function(t) { if (!t.Y()) { var e = n.data.field(t);
                            null !== e ? r.set(t, e) : r.delete(t) } }), r.an() }, zo),
                Do = (t(Bo, wo = Ao), Bo.prototype.zt = function(t, e) { if (this.nn(t), Tu(null != e.transformResults, "Transform results missing for TransformMutation."), !this.en.tn(t)) return new Ns(this.key, e.version); var n = this.fn(t),
                        r = this.ln(t, e.transformResults),
                        i = e.version,
                        o = this.dn(n.data(), r); return new Is(this.key, i, { hasCommittedMutations: !0 }, o) }, Bo.prototype.Wt = function(t, e, n) { if (this.nn(t), !this.en.tn(t)) return t; var r = this.fn(t),
                        i = this.vn(n, t, e),
                        o = this.dn(r.data(), i); return new Is(this.key, r.version, { rn: !0 }, o) }, Bo.prototype.un = function(t) { for (var e = null, n = 0, r = this.fieldTransforms; n < r.length; n++) { var i = r[n],
                            o = t instanceof Is ? t.field(i.field) : void 0,
                            s = i.transform.Kt(o || null);
                        null != s && (e = null == e ? gs.wn().set(i.field, s) : e.set(i.field, s)) } return e ? e.an() : null }, Bo.prototype.isEqual = function(t) { return t instanceof Bo && this.key.isEqual(t.key) && ku(this.fieldTransforms, t.fieldTransforms) && this.en.isEqual(t.en) }, Bo.prototype.fn = function(t) { return Tu(t instanceof Is, "Unknown MaybeDocument type " + t), Tu(t.key.isEqual(this.key), "Can only transform a document with the same key"), t }, Bo.prototype.ln = function(t, e) { var n = [];
                    Tu(this.fieldTransforms.length === e.length, "server transform result count (" + e.length + ") should match field transform count (" + this.fieldTransforms.length + ")"); for (var r = 0; r < e.length; r++) { var i = this.fieldTransforms[r],
                            o = i.transform,
                            s = null;
                        t instanceof Is && (s = t.field(i.field)), n.push(o.zt(s, e[r])) } return n }, Bo.prototype.vn = function(t, e, n) { for (var r = [], i = 0, o = this.fieldTransforms; i < o.length; i++) { var s = o[i],
                            a = s.transform,
                            u = null;
                        e instanceof Is && (u = e.field(s.field)), null === u && n instanceof Is && (u = n.field(s.field)), r.push(a.Wt(u, t)) } return r }, Bo.prototype.dn = function(t, e) { Tu(e.length === this.fieldTransforms.length, "TransformResults length mismatch."); for (var n = t.cn(), r = 0; r < this.fieldTransforms.length; r++) { var i = this.fieldTransforms[r].field;
                        n.set(i, e[r]) } return n.an() }, Bo),
                Ro = (t(Go, go = Ao), Go.prototype.zt = function(t, e) { return this.nn(t), Tu(null == e.transformResults, "Transform results received by DeleteMutation."), new Ts(this.key, e.version, { hasCommittedMutations: !0 }) }, Go.prototype.Wt = function(t, e, n) { return this.nn(t), this.en.tn(t) ? (t && Tu(t.key.isEqual(this.key), "Can only apply mutation to document with same key"), new Ts(this.key, Oi.q())) : t }, Go.prototype.un = function(t) { return null }, Go.prototype.isEqual = function(t) { return t instanceof Go && this.key.isEqual(t.key) && this.en.isEqual(t.en) }, Go),
                Co = (t(jo, mo = Ao), jo.prototype.zt = function(t, e) { Iu("VerifyMutation should only be used in Transactions.") }, jo.prototype.Wt = function(t, e, n) { Iu("VerifyMutation should only be used in Transactions.") }, jo.prototype.un = function(t) { Iu("VerifyMutation should only be used in Transactions.") }, jo.prototype.isEqual = function(t) { return t instanceof jo && this.key.isEqual(t.key) && this.en.isEqual(t.en) }, jo),
                Oo = (Fo.gn = function(t, e) { switch (t.serverTimestamps) {
                        case "estimate":
                            return new Fo(1, e);
                        case "previous":
                            return new Fo(2, e);
                        case "none":
                        case void 0:
                            return new Fo(0, e);
                        default:
                            return Iu("fromSnapshotOptions() called with invalid options.") } }, Fo),
                xo = (Vo.prototype.toString = function() { var t = this.value(); return null === t ? "null" : t.toString() }, Vo.prototype.bn = function(t) { return Tu(this.pn !== t.pn, "Default compareTo should not be used for values of same type."), Su(this.pn, t.pn) }, Vo),
                Lo = (t(Mo, yo = xo), Mo.prototype.value = function(t) { return null }, Mo.prototype.isEqual = function(t) { return t instanceof Mo }, Mo.prototype.B = function(t) { return t instanceof Mo ? 0 : this.bn(t) }, Mo.prototype.P = function() { return 4 }, Mo.yn = new Mo, Mo),
                Po = (t(qo, vo = xo), qo.prototype.value = function(t) { return this.Jt }, qo.prototype.isEqual = function(t) { return t instanceof qo && this.Jt === t.Jt }, qo.prototype.B = function(t) { return t instanceof qo ? Su(this.Jt, t.Jt) : this.bn(t) }, qo.prototype.P = function() { return 4 }, qo.of = function(t) { return t ? qo._n : qo.In }, qo._n = new qo(!0), qo.In = new qo(!1), qo),
                _o = (t(Uo, po = xo), Uo.prototype.value = function(t) { return this.Jt }, Uo.prototype.B = function(t) { return t instanceof Uo ? (e = this.Jt) < (n = t.Jt) ? -1 : n < e ? 1 : e === n ? 0 : isNaN(e) ? isNaN(n) ? 0 : -1 : 1 : this.bn(t); var e, n }, Uo.prototype.P = function() { return 8 }, Uo);

            function Uo(t) { var e = po.call(this) || this; return e.Jt = t, e.pn = 2, e }

            function qo(t) { var e = vo.call(this) || this; return e.Jt = t, e.pn = 1, e }

            function Mo() { var t = yo.call(this) || this; return t.pn = 0, t.Jt = null, t }

            function Vo() {}

            function Fo(t, e) { this.mn = t, this.timestampsInSnapshots = e }

            function jo(t, e) { var n = mo.call(this) || this; return n.key = t, n.en = e, n.type = 4, n }

            function Go(t, e) { var n = go.call(this) || this; return n.key = t, n.en = e, n.type = 3, n }

            function Bo(t, e) { var n = wo.call(this) || this; return n.key = t, n.fieldTransforms = e, n.type = 2, n.en = No.exists(!0), n }

            function zo(t, e, n, r) { var i = bo.call(this) || this; return i.key = t, i.data = e, i.sn = n, i.en = r, i.type = 1, i }

            function Ho(t, e, n) { var r = Eo.call(this) || this; return r.key = t, r.value = e, r.en = n, r.type = 0, r }

            function Ko() {}

            function Wo(t, e) { this.updateTime = t, this.exists = e, Tu(void 0 === t || void 0 === e, 'Precondition can specify "exists" or "updateTime" but not both') }

            function Jo(t, e) { this.field = t, this.transform = e }

            function Yo(t) { this.fields = t }

            function Qo(t, e) { return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e } var Xo, $o, Zo, ts, es, ns, rs, is, os, ss, as, us, hs, cs = (t(Vs, hs = _o), Vs.prototype.isEqual = function(t) { return t instanceof Vs && Qo(this.Jt, t.Jt) }, Vs),
                fs = (t(Ms, us = _o), Ms.prototype.isEqual = function(t) { return t instanceof Ms && Qo(this.Jt, t.Jt) }, Ms.Tn = new Ms(NaN), Ms.POSITIVE_INFINITY = new Ms(1 / 0), Ms.NEGATIVE_INFINITY = new Ms(-1 / 0), Ms),
                ls = (t(qs, as = xo), qs.prototype.value = function(t) { return this.Jt }, qs.prototype.isEqual = function(t) { return t instanceof qs && this.Jt === t.Jt }, qs.prototype.B = function(t) { return t instanceof qs ? Su(this.Jt, t.Jt) : this.bn(t) }, qs.prototype.P = function() { return 2 * this.Jt.length }, qs),
                ps = (t(Us, ss = xo), Us.prototype.value = function(t) { return !t || t.timestampsInSnapshots ? this.Jt : this.Jt.toDate() }, Us.prototype.isEqual = function(t) { return t instanceof Us && this.Jt.isEqual(t.Jt) }, Us.prototype.B = function(t) { return t instanceof Us ? this.Jt.F(t.Jt) : t instanceof ds ? -1 : this.bn(t) }, Us.prototype.P = function() { return 16 }, Us),
                ds = (t(_s, os = xo), _s.prototype.value = function(t) { return t && 1 === t.mn ? new ps(this.En).value(t) : t && 2 === t.mn && this.previousValue ? this.previousValue.value(t) : null }, _s.prototype.isEqual = function(t) { return t instanceof _s && this.En.isEqual(t.En) }, _s.prototype.B = function(t) { return t instanceof _s ? this.En.F(t.En) : t instanceof ps ? 1 : this.bn(t) }, _s.prototype.toString = function() { return "<ServerTimestamp localTime=" + this.En.toString() + ">" }, _s.prototype.P = function() { return 16 + (this.previousValue ? this.previousValue.P() : 0) }, _s),
                vs = (t(Ps, is = xo), Ps.prototype.value = function(t) { return this.Jt }, Ps.prototype.isEqual = function(t) { return t instanceof Ps && this.Jt.isEqual(t.Jt) }, Ps.prototype.B = function(t) { return t instanceof Ps ? this.Jt.F(t.Jt) : this.bn(t) }, Ps.prototype.P = function() { return this.Jt.O() }, Ps),
                ys = (t(Ls, rs = xo), Ls.prototype.value = function(t) { return this.key }, Ls.prototype.isEqual = function(t) { return t instanceof Ls && this.key.isEqual(t.key) && this.Dn.isEqual(t.Dn) }, Ls.prototype.B = function(t) { if (t instanceof Ls) { var e = this.Dn.B(t.Dn); return 0 !== e ? e : Ui.W(this.key, t.key) } return this.bn(t) }, Ls.prototype.P = function() { return this.Dn.projectId.length + this.Dn.database.length + this.key.toString().length }, Ls),
                ms = (t(xs, ns = xo), xs.prototype.value = function(t) { return this.Jt }, xs.prototype.isEqual = function(t) { return t instanceof xs && this.Jt.isEqual(t.Jt) }, xs.prototype.B = function(t) { return t instanceof xs ? this.Jt.F(t.Jt) : this.bn(t) }, xs.prototype.P = function() { return 16 }, xs),
                gs = (t(Os, es = xo), Os.wn = function() { return new ws(Os.EMPTY.Jt) }, Os.prototype.value = function(n) { var r = {}; return this.Jt.bt(function(t, e) { r[t] = e.value(n) }), r }, Os.prototype.forEach = function(t) { this.Jt.bt(t) }, Os.prototype.isEqual = function(t) { if (t instanceof Os) { for (var e = this.Jt.yt(), n = t.Jt.yt(); e.St() && n.St();) { var r = e.Rt(),
                                i = n.Rt(); if (r.key !== i.key || !r.value.isEqual(i.value)) return !1 } return !e.St() && !n.St() } return !1 }, Os.prototype.B = function(t) { if (t instanceof Os) { for (var e = this.Jt.yt(), n = t.Jt.yt(); e.St() && n.St();) { var r = e.Rt(),
                                i = n.Rt(),
                                o = Su(r.key, i.key) || r.value.B(i.value); if (o) return o } return Su(e.St(), n.St()) } return this.bn(t) }, Os.prototype.contains = function(t) { return null !== this.field(t) }, Os.prototype.field = function(t) { Tu(!t.Y(), "Can't get field of empty path"); var e = this; return t.forEach(function(t) { e = e instanceof Os ? e.Jt.get(t) : null }), e }, Os.prototype.sn = function() { var i = new Zi(_i.W); return this.Jt.forEach(function(t, e) { var n = new _i([t]); if (e instanceof Os) { var r = e.sn().fields;
                            r.Y() ? i = i.add(n) : r.forEach(function(t) { i = i.add(n.child(t)) }) } else i = i.add(n) }), Io.Yt(i) }, Os.prototype.P = function() { var n = 0; return this.Jt.bt(function(t, e) { n += t.length + e.P() }), n }, Os.prototype.toString = function() { return this.Jt.toString() }, Os.prototype.cn = function() { return new ws(this.Jt) }, Os.EMPTY = new Os(new qi(Su)), Os),
                ws = (Cs.prototype.set = function(t, e) { Tu(!t.Y(), "Cannot set field for empty path on ObjectValue"); var n = t.X(); if (1 === t.length) this.Jt = this.Jt.dt(n, e);
                    else { var r = this.Jt.get(n),
                            i = (r instanceof gs ? r : gs.EMPTY).cn().set(t.H(), e).an();
                        this.Jt = this.Jt.dt(n, i) } return this }, Cs.prototype.delete = function(t) { Tu(!t.Y(), "Cannot delete field for empty path on ObjectValue"); var e = t.X(); if (1 === t.length) this.Jt = this.Jt.remove(e);
                    else { var n = this.Jt.get(e); if (n instanceof gs) { var r = n.cn().delete(t.H()).an();
                            this.Jt = this.Jt.dt(t.X(), r) } } return this }, Cs.prototype.an = function() { return new gs(this.Jt) }, Cs),
                bs = (t(Rs, ts = xo), Rs.prototype.value = function(e) { return this.Jt.map(function(t) { return t.value(e) }) }, Rs.prototype.contains = function(t) { for (var e = 0, n = this.Jt; e < n.length; e++)
                        if (n[e].isEqual(t)) return !0; return !1 }, Rs.prototype.forEach = function(t) { this.Jt.forEach(t) }, Rs.prototype.isEqual = function(t) { if (t instanceof Rs) { if (this.Jt.length !== t.Jt.length) return !1; for (var e = 0; e < this.Jt.length; e++)
                            if (!this.Jt[e].isEqual(t.Jt[e])) return !1; return !0 } return !1 }, Rs.prototype.B = function(t) { if (t instanceof Rs) { for (var e = Math.min(this.Jt.length, t.Jt.length), n = 0; n < e; n++) { var r = this.Jt[n].B(t.Jt[n]); if (r) return r } return Su(this.Jt.length, t.Jt.length) } return this.bn(t) }, Rs.prototype.P = function() { return this.Jt.reduce(function(t, e) { return t + e.P() }, 0) }, Rs.prototype.toString = function() { return "[" + this.Jt.map(function(t) { return t.toString() }).join(",") + "]" }, Rs),
                Es = (Ds.Rn = function(t, e) { return Ui.W(t.key, e.key) }, Ds),
                Is = (t(ks, Zo = Es), ks.prototype.field = function(t) { if (this.Sn) return this.Sn.field(t);
                    this.An || (this.An = new Map); var e = t.it(),
                        n = this.An.get(e); if (void 0 === n) { var r = this.Cn(t);
                        n = void 0 === r ? null : this.converter(r), this.An.set(e, n) } return n }, ks.prototype.data = function() { var n = this; if (!this.Sn) { var r = gs.wn();
                        Zr(this.proto.fields || {}, function(t, e) { r.set(new _i([t]), n.converter(e)) }), this.Sn = r.an(), this.An = void 0 } return this.Sn }, ks.prototype.value = function() { return this.data().value() }, ks.prototype.isEqual = function(t) { return t instanceof ks && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.rn === t.rn && this.hasCommittedMutations === t.hasCommittedMutations && this.data().isEqual(t.data()) }, ks.prototype.toString = function() { return "Document(" + this.key + ", " + this.version + ", " + this.data().toString() + ", {hasLocalMutations: " + this.rn + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})" }, Object.defineProperty(ks.prototype, "hasPendingWrites", { get: function() { return this.rn || this.hasCommittedMutations }, enumerable: !0, configurable: !0 }), ks.prototype.Cn = function(t) { Tu(void 0 !== this.proto, "Can only call getProtoField() when proto is defined"); for (var e = this.proto.fields ? this.proto.fields[t.X()] : void 0, n = 1; n < t.length; ++n) { if (!e || !e.mapValue || !e.mapValue.fields) return;
                        e = e.mapValue.fields[t.get(n)] } return e }, ks.Pn = function(t, e, n) { var r = e.field(t),
                        i = n.field(t); return null !== r && null !== i ? r.B(i) : Iu("Trying to compare documents on fields that don't exist") }, ks),
                Ts = (t(Ss, $o = Es), Ss.prototype.toString = function() { return "NoDocument(" + this.key + ", " + this.version + ")" }, Object.defineProperty(Ss.prototype, "hasPendingWrites", { get: function() { return this.hasCommittedMutations }, enumerable: !0, configurable: !0 }), Ss.prototype.isEqual = function(t) { return t instanceof Ss && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key) }, Ss),
                Ns = (t(As, Xo = Es), As.prototype.toString = function() { return "UnknownDocument(" + this.key + ", " + this.version + ")" }, Object.defineProperty(As.prototype, "hasPendingWrites", { get: function() { return !0 }, enumerable: !0, configurable: !0 }), As.prototype.isEqual = function(t) { return t instanceof As && t.version.isEqual(this.version) && t.key.isEqual(this.key) }, As);

            function As() { return null !== Xo && Xo.apply(this, arguments) || this }

            function Ss(t, e, n) { var r = $o.call(this, t, e) || this; return r.hasCommittedMutations = !(!n || !n.hasCommittedMutations), r }

            function ks(t, e, n, r, i, o) { var s = Zo.call(this, t, e) || this; return s.Sn = r, s.proto = i, s.converter = o, Tu(void 0 !== s.Sn || void 0 !== s.proto && void 0 !== s.converter, "If objectValue is not defined, proto and converter need to be set."), s.rn = !!n.rn, s.hasCommittedMutations = !!n.hasCommittedMutations, s }

            function Ds(t, e) { this.key = t, this.version = e }

            function Rs(t) { var e = ts.call(this) || this; return e.Jt = t, e.pn = 8, e }

            function Cs(t) { this.Jt = t }

            function Os(t) { var e = es.call(this) || this; return e.Jt = t, e.pn = 9, e }

            function xs(t) { var e = ns.call(this) || this; return e.Jt = t, e.pn = 7, e }

            function Ls(t, e) { var n = rs.call(this) || this; return n.Dn = t, n.key = e, n.pn = 6, n }

            function Ps(t) { var e = is.call(this) || this; return e.Jt = t, e.pn = 5, e }

            function _s(t, e) { var n = os.call(this) || this; return n.En = t, n.previousValue = e, n.pn = 3, n }

            function Us(t) { var e = ss.call(this) || this; return e.Jt = t, e.pn = 3, e }

            function qs(t) { var e = as.call(this) || this; return e.Jt = t, e.pn = 4, e }

            function Ms() { return null !== us && us.apply(this, arguments) || this }

            function Vs() { return null !== hs && hs.apply(this, arguments) || this }

            function Fs(t) { return null == t }

            function js(t) { return -0 === t && 1 / t == -1 / 0 }

            function Gs(t) { return "number" == typeof t && Number.isInteger(t) && !js(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER } var Bs, zs, Hs, Ks, Ws, Js, Ys, Qs, Xs = (Sa.prototype.canonicalId = function() { if (null === this.kn) { var t = this.path.it();
                        null !== this.collectionGroup && (t += "|cg:" + this.collectionGroup), t += "|f:"; for (var e = 0, n = this.filters; e < n.length; e++) t += n[e].canonicalId(), t += ",";
                        t += "|ob:"; for (var r = 0, i = this.orderBy; r < i.length; r++) t += i[r].canonicalId(), t += ",";
                        Fs(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.kn = t } return this.kn }, Sa.prototype.toString = function() { var t = this.path.it(); return null !== this.collectionGroup && (t += " collectionGroup=" + this.collectionGroup), 0 < this.filters.length && (t += ", filters: [" + this.filters.join(", ") + "]"), Fs(this.limit) || (t += ", limit: " + this.limit), 0 < this.orderBy.length && (t += ", orderBy: [" + this.orderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), "Target(" + t + ")" }, Sa.prototype.isEqual = function(t) { if (this.limit !== t.limit) return !1; if (this.orderBy.length !== t.orderBy.length) return !1; for (var e = 0; e < this.orderBy.length; e++)
                        if (!this.orderBy[e].isEqual(t.orderBy[e])) return !1; if (this.filters.length !== t.filters.length) return !1; for (e = 0; e < this.filters.length; e++)
                        if (!this.filters[e].isEqual(t.filters[e])) return !1; return this.collectionGroup === t.collectionGroup && !!this.path.isEqual(t.path) && !!(null !== this.startAt ? this.startAt.isEqual(t.startAt) : null === t.startAt) && (null !== this.endAt ? this.endAt.isEqual(t.endAt) : null === t.endAt) }, Sa.prototype.Nn = function() { return Ui.ct(this.path) && null === this.collectionGroup && 0 === this.filters.length }, Sa),
                $s = (Aa.jn = function(t) { return new Aa(t) }, Object.defineProperty(Aa.prototype, "orderBy", { get: function() { if (null === this.Vn) { var t = this.Ln(),
                                e = this.qn(); if (null !== t && null === e) t.st() ? this.Vn = [ha] : this.Vn = [new ua(t), ha];
                            else { Tu(null === t || null !== e && t.isEqual(e), "First orderBy should match inequality field."); for (var n = !(this.Vn = []), r = 0, i = this.On; r < i.length; r++) { var o = i[r];
                                    this.Vn.push(o), o.field.st() && (n = !0) } if (!n) { var s = 0 < this.On.length ? this.On[this.On.length - 1].dir : sa.ASCENDING;
                                    this.Vn.push(s === sa.ASCENDING ? ha : ca) } } } return this.Vn }, enumerable: !0, configurable: !0 }), Aa.prototype.Bn = function(t) { Tu(null == this.Ln() || !(t instanceof ta) || !t.Mn() || t.field.isEqual(this.Ln()), "Query must only have one inequality field."), Tu(!this.Nn(), "No filtering allowed for document query"); var e = this.filters.concat([t]); return new Aa(this.path, this.collectionGroup, this.On.slice(), e, this.limit, this.Fn, this.startAt, this.endAt) }, Aa.prototype.Qn = function(t) { Tu(!this.startAt && !this.endAt, "Bounds must be set after orderBy"); var e = this.On.concat([t]); return new Aa(this.path, this.collectionGroup, e, this.filters.slice(), this.limit, this.Fn, this.startAt, this.endAt) }, Aa.prototype.Gn = function(t) { return new Aa(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), t, "F", this.startAt, this.endAt) }, Aa.prototype.Wn = function(t) { return new Aa(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), t, "L", this.startAt, this.endAt) }, Aa.prototype.zn = function(t) { return new Aa(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), this.limit, this.Fn, t, this.endAt) }, Aa.prototype.Kn = function(t) { return new Aa(this.path, this.collectionGroup, this.On.slice(), this.filters.slice(), this.limit, this.Fn, this.startAt, t) }, Aa.prototype.Hn = function(t) { return new Aa(t, null, this.On.slice(), this.filters.slice(), this.limit, this.Fn, this.startAt, this.endAt) }, Aa.prototype.Jn = function() { return 0 === this.filters.length && null === this.limit && null == this.startAt && null == this.endAt && (0 === this.On.length || 1 === this.On.length && this.On[0].field.st()) }, Aa.prototype.canonicalId = function() { return this.Yn().canonicalId() + "|lt:" + this.Fn }, Aa.prototype.toString = function() { return "Query(target=" + this.Yn().toString() + "; limitType=" + this.Fn + ")" }, Aa.prototype.isEqual = function(t) { return this.Yn().isEqual(t.Yn()) && this.Fn === t.Fn }, Aa.prototype.Xn = function(t, e) { for (var n = !1, r = 0, i = this.orderBy; r < i.length; r++) { var o = i[r],
                            s = o.compare(t, e); if (0 !== s) return s;
                        n = n || o.field.st() } return Tu(n, "orderBy used that doesn't compare on key field"), 0 }, Aa.prototype.matches = function(t) { return this.$n(t) && this.Zn(t) && this.ti(t) && this.ni(t) }, Aa.prototype.ii = function() { return !Fs(this.limit) && "F" === this.Fn }, Aa.prototype.ei = function() { return !Fs(this.limit) && "L" === this.Fn }, Aa.prototype.qn = function() { return 0 < this.On.length ? this.On[0].field : null }, Aa.prototype.Ln = function() { for (var t = 0, e = this.filters; t < e.length; t++) { var n = e[t]; if (n instanceof ta && n.Mn()) return n.field } return null }, Aa.prototype.ri = function(t) { for (var e = 0, n = this.filters; e < n.length; e++) { var r = n[e]; if (r instanceof ta && 0 <= t.indexOf(r.op)) return r.op } return null }, Aa.prototype.Nn = function() { return this.Yn().Nn() }, Aa.prototype.ui = function() { return null !== this.collectionGroup }, Aa.prototype.Yn = function() { if (!this.Un)
                        if ("F" === this.Fn) this.Un = new Xs(this.path, this.collectionGroup, this.orderBy, this.filters, this.limit, this.startAt, this.endAt);
                        else { for (var t = [], e = 0, n = this.orderBy; e < n.length; e++) { var r = n[e],
                                    i = r.dir === sa.DESCENDING ? sa.ASCENDING : sa.DESCENDING;
                                t.push(new ua(r.field, i)) } var o = this.endAt ? new aa(this.endAt.position, !this.endAt.before) : null,
                                s = this.startAt ? new aa(this.startAt.position, !this.startAt.before) : null;
                            this.Un = new Xs(this.path, this.collectionGroup, t, this.filters, this.limit, o, s) } return this.Un }, Aa.prototype.$n = function(t) { var e = t.key.path; return null !== this.collectionGroup ? t.key.at(this.collectionGroup) && this.path.Z(e) : Ui.ct(this.path) ? this.path.isEqual(e) : this.path.tt(e) }, Aa.prototype.Zn = function(t) { for (var e = 0, n = this.On; e < n.length; e++) { var r = n[e]; if (!r.field.st() && null === t.field(r.field)) return !1 } return !0 }, Aa.prototype.ti = function(t) { for (var e = 0, n = this.filters; e < n.length; e++)
                        if (!n[e].matches(t)) return !1; return !0 }, Aa.prototype.ni = function(t) { return !(this.startAt && !this.startAt.si(this.orderBy, t) || this.endAt && this.endAt.si(this.orderBy, t)) }, Aa.prototype.xn = function(t) { Tu(t.position.length <= this.orderBy.length, "Bound is longer than orderBy") }, Aa),
                Zs = (Na.et = function(t) { switch (t) {
                        case "<":
                            return Na.LESS_THAN;
                        case "<=":
                            return Na.LESS_THAN_OR_EQUAL;
                        case "==":
                            return Na.EQUAL;
                        case ">=":
                            return Na.GREATER_THAN_OR_EQUAL;
                        case ">":
                            return Na.GREATER_THAN;
                        case "array-contains":
                            return Na.ARRAY_CONTAINS;
                        case "in":
                            return Na.IN;
                        case "array-contains-any":
                            return Na.ARRAY_CONTAINS_ANY;
                        default:
                            return Iu("Unknown FieldFilter operator: " + t) } }, Na.prototype.toString = function() { return this.name }, Na.prototype.isEqual = function(t) { return this.name === t.name }, Na.LESS_THAN = new Na("<"), Na.LESS_THAN_OR_EQUAL = new Na("<="), Na.EQUAL = new Na("=="), Na.GREATER_THAN = new Na(">"), Na.GREATER_THAN_OR_EQUAL = new Na(">="), Na.ARRAY_CONTAINS = new Na("array-contains"), Na.IN = new Na("in"), Na.ARRAY_CONTAINS_ANY = new Na("array-contains-any"), Na),
                ta = (t(Ta, Qs = function() {}), Ta.create = function(t, e, n) { if (t.st()) return e === Zs.IN ? (Tu(n instanceof bs, "Comparing on key with IN, but filter value not an ArrayValue"), Tu(n.Jt.every(function(t) { return t instanceof ys }), "Comparing on key with IN, but an array value was not a RefValue"), new na(t, n)) : (Tu(n instanceof ys, "Comparing on key, but filter value not a RefValue"), Tu(e !== Zs.ARRAY_CONTAINS && e !== Zs.ARRAY_CONTAINS_ANY, "'" + e.toString() + "' queries don't make sense on document keys."), new ea(t, e, n)); if (n.isEqual(Lo.yn)) { if (e !== Zs.EQUAL) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. Null supports only equality comparisons."); return new Ta(t, e, n) } if (n.isEqual(fs.Tn)) { if (e !== Zs.EQUAL) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. NaN supports only equality comparisons."); return new Ta(t, e, n) } return e === Zs.ARRAY_CONTAINS ? new ra(t, n) : e === Zs.IN ? (Tu(n instanceof bs, "IN filter has invalid value: " + n.toString()), new ia(t, n)) : e === Zs.ARRAY_CONTAINS_ANY ? (Tu(n instanceof bs, "ARRAY_CONTAINS_ANY filter has invalid value: " + n.toString()), new oa(t, n)) : new Ta(t, e, n) }, Ta.prototype.matches = function(t) { var e = t.field(this.field); return null !== e && this.value.pn === e.pn && this.oi(e.B(this.value)) }, Ta.prototype.oi = function(t) { switch (this.op) {
                        case Zs.LESS_THAN:
                            return t < 0;
                        case Zs.LESS_THAN_OR_EQUAL:
                            return t <= 0;
                        case Zs.EQUAL:
                            return 0 === t;
                        case Zs.GREATER_THAN:
                            return 0 < t;
                        case Zs.GREATER_THAN_OR_EQUAL:
                            return 0 <= t;
                        default:
                            return Iu("Unknown FieldFilter operator: " + this.op) } }, Ta.prototype.Mn = function() { return 0 <= [Zs.LESS_THAN, Zs.LESS_THAN_OR_EQUAL, Zs.GREATER_THAN, Zs.GREATER_THAN_OR_EQUAL].indexOf(this.op) }, Ta.prototype.canonicalId = function() { return this.field.it() + this.op.toString() + this.value.toString() }, Ta.prototype.isEqual = function(t) { return t instanceof Ta && this.op.isEqual(t.op) && this.field.isEqual(t.field) && this.value.isEqual(t.value) }, Ta.prototype.toString = function() { return this.field.it() + " " + this.op + " " + this.value.value() }, Ta),
                ea = (t(Ia, Ys = ta), Ia.prototype.matches = function(t) { var e = this.value,
                        n = Ui.W(t.key, e.key); return this.oi(n) }, Ia),
                na = (t(Ea, Js = ta), Ea.prototype.matches = function(e) { return this.value.Jt.some(function(t) { return e.key.isEqual(t.key) }) }, Ea),
                ra = (t(ba, Ws = ta), ba.prototype.matches = function(t) { var e = t.field(this.field); return e instanceof bs && e.contains(this.value) }, ba),
                ia = (t(wa, Ks = ta), wa.prototype.matches = function(t) { var e = this.value,
                        n = t.field(this.field); return null !== n && e.contains(n) }, wa),
                oa = (t(ga, Hs = ta), ga.prototype.matches = function(t) { var e = this,
                        n = t.field(this.field); return n instanceof bs && n.Jt.some(function(t) { return e.value.contains(t) }) }, ga),
                sa = (ma.prototype.toString = function() { return this.name }, ma.ASCENDING = new ma("asc"), ma.DESCENDING = new ma("desc"), ma),
                aa = (ya.prototype.canonicalId = function() { for (var t = this.before ? "b:" : "a:", e = 0, n = this.position; e < n.length; e++) t += n[e].toString(); return t }, ya.prototype.si = function(t, e) { Tu(this.position.length <= t.length, "Bound has more components than query's orderBy"); for (var n = 0, r = 0; r < this.position.length; r++) { var i = t[r],
                            o = this.position[r]; if (i.field.st()) Tu(o instanceof ys, "Bound has a non-key value where the key path is being used."), n = Ui.W(o.key, e.key);
                        else { var s = e.field(i.field);
                            Tu(null !== s, "Field should exist since document matched the orderBy already."), n = o.B(s) } if (i.dir === sa.DESCENDING && (n *= -1), 0 !== n) break } return this.before ? n <= 0 : n < 0 }, ya.prototype.isEqual = function(t) { if (null === t) return !1; if (this.before !== t.before || this.position.length !== t.position.length) return !1; for (var e = 0; e < this.position.length; e++) { var n = this.position[e],
                            r = t.position[e]; if (!n.isEqual(r)) return !1 } return !0 }, ya),
                ua = (va.prototype.compare = function(t, e) { var n = this.hi ? Is.Rn(t, e) : Is.Pn(this.field, t, e); switch (this.dir) {
                        case sa.ASCENDING:
                            return n;
                        case sa.DESCENDING:
                            return -1 * n;
                        default:
                            return Iu("Unknown direction: " + this.dir) } }, va.prototype.canonicalId = function() { return this.field.it() + this.dir.toString() }, va.prototype.toString = function() { return this.field.it() + " (" + this.dir + ")" }, va.prototype.isEqual = function(t) { return this.dir === t.dir && this.field.isEqual(t.field) }, va),
                ha = new ua(_i.ot(), sa.ASCENDING),
                ca = new ua(_i.ot(), sa.DESCENDING),
                fa = (da.prototype.fi = function(t) { return new da(this.target, this.targetId, this.ci, t, this.ai, this.lastLimboFreeSnapshotVersion, this.resumeToken) }, da.prototype.li = function(t, e) { return new da(this.target, this.targetId, this.ci, this.sequenceNumber, e, this.lastLimboFreeSnapshotVersion, t) }, da.prototype.di = function(t) { return new da(this.target, this.targetId, this.ci, this.sequenceNumber, this.ai, t, this.resumeToken) }, da.prototype.isEqual = function(t) { return this.targetId === t.targetId && this.ci === t.ci && this.sequenceNumber === t.sequenceNumber && this.ai.isEqual(t.ai) && this.lastLimboFreeSnapshotVersion.isEqual(t.lastLimboFreeSnapshotVersion) && this.resumeToken.isEqual(t.resumeToken) && this.target.isEqual(t.target) }, da),
                la = (pa.prototype.isEqual = function(t) { return t && t.count === this.count }, pa);

            function pa(t) { this.count = t }

            function da(t, e, n, r, i, o, s) { void 0 === i && (i = Oi.MIN), void 0 === o && (o = Oi.MIN), void 0 === s && (s = wi.k), this.target = t, this.targetId = e, this.ci = n, this.sequenceNumber = r, this.ai = i, this.lastLimboFreeSnapshotVersion = o, this.resumeToken = s }

            function va(t, e) { this.field = t, void 0 === e && (e = sa.ASCENDING), this.dir = e, this.hi = t.st() }

            function ya(t, e) { this.position = t, this.before = e }

            function ma(t) { this.name = t }

            function ga(t, e) { var n = Hs.call(this, t, Zs.ARRAY_CONTAINS_ANY, e) || this; return n.value = e, n }

            function wa(t, e) { var n = Ks.call(this, t, Zs.IN, e) || this; return n.value = e, n }

            function ba(t, e) { return Ws.call(this, t, Zs.ARRAY_CONTAINS, e) || this }

            function Ea(t, e) { var n = Js.call(this, t, Zs.IN, e) || this; return n.value = e, n }

            function Ia() { return null !== Ys && Ys.apply(this, arguments) || this }

            function Ta(t, e, n) { var r = Qs.call(this) || this; return r.field = t, r.op = e, r.value = n, r }

            function Na(t) { this.name = t }

            function Aa(t, e, n, r, i, o, s, a) { void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === s && (s = null), void 0 === a && (a = null), this.path = t, this.collectionGroup = e, this.On = n, this.filters = r, this.limit = i, this.Fn = o, this.startAt = s, this.endAt = a, this.Vn = null, this.Un = null, this.startAt && this.xn(this.startAt), this.endAt && this.xn(this.endAt) }

            function Sa(t, e, n, r, i, o, s) { void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = null), void 0 === o && (o = null), void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, this.startAt = o, this.endAt = s, this.kn = null }

            function ka(t) { switch (t) {
                    case qr.OK:
                        return Iu("Treated status OK as error");
                    case qr.CANCELLED:
                    case qr.UNKNOWN:
                    case qr.DEADLINE_EXCEEDED:
                    case qr.RESOURCE_EXHAUSTED:
                    case qr.INTERNAL:
                    case qr.UNAVAILABLE:
                    case qr.UNAUTHENTICATED:
                        return !1;
                    case qr.INVALID_ARGUMENT:
                    case qr.NOT_FOUND:
                    case qr.ALREADY_EXISTS:
                    case qr.PERMISSION_DENIED:
                    case qr.FAILED_PRECONDITION:
                    case qr.ABORTED:
                    case qr.OUT_OF_RANGE:
                    case qr.UNIMPLEMENTED:
                    case qr.DATA_LOSS:
                        return !0;
                    default:
                        return Iu("Unknown status code: " + t) } }

            function Da(t) { if (void 0 === t) return bu("GRPC error has no .code"), qr.UNKNOWN; switch (t) {
                    case Bs.OK:
                        return qr.OK;
                    case Bs.CANCELLED:
                        return qr.CANCELLED;
                    case Bs.UNKNOWN:
                        return qr.UNKNOWN;
                    case Bs.DEADLINE_EXCEEDED:
                        return qr.DEADLINE_EXCEEDED;
                    case Bs.RESOURCE_EXHAUSTED:
                        return qr.RESOURCE_EXHAUSTED;
                    case Bs.INTERNAL:
                        return qr.INTERNAL;
                    case Bs.UNAVAILABLE:
                        return qr.UNAVAILABLE;
                    case Bs.UNAUTHENTICATED:
                        return qr.UNAUTHENTICATED;
                    case Bs.INVALID_ARGUMENT:
                        return qr.INVALID_ARGUMENT;
                    case Bs.NOT_FOUND:
                        return qr.NOT_FOUND;
                    case Bs.ALREADY_EXISTS:
                        return qr.ALREADY_EXISTS;
                    case Bs.PERMISSION_DENIED:
                        return qr.PERMISSION_DENIED;
                    case Bs.FAILED_PRECONDITION:
                        return qr.FAILED_PRECONDITION;
                    case Bs.ABORTED:
                        return qr.ABORTED;
                    case Bs.OUT_OF_RANGE:
                        return qr.OUT_OF_RANGE;
                    case Bs.UNIMPLEMENTED:
                        return qr.UNIMPLEMENTED;
                    case Bs.DATA_LOSS:
                        return qr.DATA_LOSS;
                    default:
                        return Iu("Unknown status code: " + t) } }(zs = Bs = Bs || {})[zs.OK = 0] = "OK", zs[zs.CANCELLED = 1] = "CANCELLED", zs[zs.UNKNOWN = 2] = "UNKNOWN", zs[zs.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", zs[zs.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", zs[zs.NOT_FOUND = 5] = "NOT_FOUND", zs[zs.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", zs[zs.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", zs[zs.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", zs[zs.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", zs[zs.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", zs[zs.ABORTED = 10] = "ABORTED", zs[zs.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", zs[zs.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", zs[zs.INTERNAL = 13] = "INTERNAL", zs[zs.UNAVAILABLE = 14] = "UNAVAILABLE", zs[zs.DATA_LOSS = 15] = "DATA_LOSS"; var Ra = new qi(Ui.W);

            function Ca() { return Ra }

            function Oa() { return Ca() } var xa = new qi(Ui.W);

            function La() { return xa } var Pa = new qi(Ui.W);

            function _a() { return Pa } var Ua = new Zi(Ui.W);

            function qa() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; for (var n = Ua, r = 0, i = t; r < i.length; r++) { var o = i[r];
                    n = n.add(o) } return n } var Ma = new Zi(Su);

            function Va() { return Ma }

            function Fa(t, e, n, r) { this.Fi = t, this.removedTargetIds = e, this.key = n, this.Vi = r }

            function ja(t, e) { this.targetId = t, this.Ui = e }

            function Ga(t, e, n, r) { void 0 === n && (n = wi.k), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r } var Ba = (nu.mi = function(t) { return new nu(t.W) }, nu.prototype.has = function(t) { return null != this.vi.get(t) }, nu.prototype.get = function(t) { return this.vi.get(t) }, nu.prototype.first = function() { return this.wi.wt() }, nu.prototype.last = function() { return this.wi.gt() }, nu.prototype.Y = function() { return this.wi.Y() }, nu.prototype.indexOf = function(t) { var e = this.vi.get(t); return e ? this.wi.indexOf(e) : -1 }, Object.defineProperty(nu.prototype, "size", { get: function() { return this.wi.size }, enumerable: !0, configurable: !0 }), nu.prototype.forEach = function(n) { this.wi.bt(function(t, e) { return n(t), !1 }) }, nu.prototype.add = function(t) { var e = this.delete(t.key); return e.copy(e.vi.dt(t.key, t), e.wi.dt(t, null)) }, nu.prototype.delete = function(t) { var e = this.get(t); return e ? this.copy(this.vi.remove(t), this.wi.remove(e)) : this }, nu.prototype.isEqual = function(t) { if (!(t instanceof nu)) return !1; if (this.size !== t.size) return !1; for (var e = this.wi.yt(), n = t.wi.yt(); e.St();) { var r = e.Rt().key,
                            i = n.Rt().key; if (!r.isEqual(i)) return !1 } return !0 }, nu.prototype.toString = function() { var e = []; return this.forEach(function(t) { e.push(t.toString()) }), 0 === e.length ? "DocumentSet ()" : "DocumentSet (\n  " + e.join("  \n") + "\n)" }, nu.prototype.copy = function(t, e) { var n = new nu; return n.W = this.W, n.vi = t, n.wi = e, n }, nu),
                za = (eu.prototype.track = function(t) { var e = t.doc.key,
                        n = this.gi.get(e);
                    n ? 0 !== t.type && 3 === n.type ? this.gi = this.gi.dt(e, t) : 3 === t.type && 1 !== n.type ? this.gi = this.gi.dt(e, { type: n.type, doc: t.doc }) : 2 === t.type && 2 === n.type ? this.gi = this.gi.dt(e, { type: 2, doc: t.doc }) : 2 === t.type && 0 === n.type ? this.gi = this.gi.dt(e, { type: 0, doc: t.doc }) : 1 === t.type && 0 === n.type ? this.gi = this.gi.remove(e) : 1 === t.type && 2 === n.type ? this.gi = this.gi.dt(e, { type: 1, doc: n.doc }) : 0 === t.type && 1 === n.type ? this.gi = this.gi.dt(e, { type: 2, doc: t.doc }) : Iu("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n)) : this.gi = this.gi.dt(e, t) }, eu.prototype.bi = function() { var n = []; return this.gi.bt(function(t, e) { n.push(e) }), n }, eu),
                Ha = (tu.Ti = function(t, e, n, r) { var i = []; return e.forEach(function(t) { i.push({ type: 0, doc: t }) }), new tu(t, e, Ba.mi(e), i, n, r, !0, !1) }, Object.defineProperty(tu.prototype, "hasPendingWrites", { get: function() { return !this.yi.Y() }, enumerable: !0, configurable: !0 }), tu.prototype.isEqual = function(t) { if (!(this.fromCache === t.fromCache && this._i === t._i && this.yi.isEqual(t.yi) && this.query.isEqual(t.query) && this.docs.isEqual(t.docs) && this.pi.isEqual(t.pi))) return !1; var e = this.docChanges,
                        n = t.docChanges; if (e.length !== n.length) return !1; for (var r = 0; r < e.length; r++)
                        if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1; return !0 }, tu),
                Ka = (Za.Ai = function(t, e) { var n, r = ((n = {})[t] = Wa.Ci(t, e), n); return new Za(Oi.MIN, r, Va(), Ca(), qa()) }, Za),
                Wa = ($a.Ci = function(t, e) { return new $a(wi.k, e, qa(), qa(), qa()) }, $a),
                Ja = (Object.defineProperty(Xa.prototype, "Pi", { get: function() { return this.qi }, enumerable: !0, configurable: !0 }), Object.defineProperty(Xa.prototype, "resumeToken", { get: function() { return this.Li }, enumerable: !0, configurable: !0 }), Object.defineProperty(Xa.prototype, "Mi", { get: function() { return 0 !== this.xi }, enumerable: !0, configurable: !0 }), Object.defineProperty(Xa.prototype, "Qi", { get: function() { return this.Bi }, enumerable: !0, configurable: !0 }), Xa.prototype.Gi = function(t) { 0 < t.P() && (this.Bi = !0, this.Li = t) }, Xa.prototype.Wi = function() { var n = qa(),
                        r = qa(),
                        i = qa(); return this.ji.forEach(function(t, e) { switch (e) {
                            case 0:
                                n = n.add(t); break;
                            case 2:
                                r = r.add(t); break;
                            case 1:
                                i = i.add(t); break;
                            default:
                                Iu("Encountered invalid change type: " + e) } }), new Wa(this.Li, this.qi, n, r, i) }, Xa.prototype.zi = function() { this.Bi = !1, this.ji = iu() }, Xa.prototype.Ki = function(t, e) { this.Bi = !0, this.ji = this.ji.dt(t, e) }, Xa.prototype.Hi = function(t) { this.Bi = !0, this.ji = this.ji.remove(t) }, Xa.prototype.Ji = function() { this.xi += 1 }, Xa.prototype.Yi = function() { this.xi -= 1 }, Xa.prototype.Xi = function() { this.Bi = !0, this.qi = !0 }, Xa),
                Ya = (Qa.prototype.ee = function(t) { for (var e = 0, n = t.Fi; e < n.length; e++) { var r = n[e];
                        t.Vi instanceof Is ? this.re(r, t.Vi) : t.Vi instanceof Ts && this.ue(r, t.key, t.Vi) } for (var i = 0, o = t.removedTargetIds; i < o.length; i++) r = o[i], this.ue(r, t.key, t.Vi) }, Qa.prototype.se = function(n) { var r = this;
                    this.oe(n, function(t) { var e = r.he(t); switch (n.state) {
                            case 0:
                                r.ce(t) && e.Gi(n.resumeToken); break;
                            case 1:
                                e.Yi(), e.Mi || e.zi(), e.Gi(n.resumeToken); break;
                            case 2:
                                e.Yi(), e.Mi || r.removeTarget(t), Tu(!n.cause, "WatchChangeAggregator does not handle errored targets"); break;
                            case 3:
                                r.ce(t) && (e.Xi(), e.Gi(n.resumeToken)); break;
                            case 4:
                                r.ce(t) && (r.ae(t), e.Gi(n.resumeToken)); break;
                            default:
                                Iu("Unknown target watch change state: " + n.state) } }) }, Qa.prototype.oe = function(t, e) { 0 < t.targetIds.length ? t.targetIds.forEach(e) : $r(this.Zi, e) }, Qa.prototype.fe = function(t) { var e = t.targetId,
                        n = t.Ui.count,
                        r = this.le(e); if (r) { var i = r.target; if (i.Nn())
                            if (0 === n) { var o = new Ui(i.path);
                                this.ue(e, o, new Ts(o, Oi.q())) } else Tu(1 === n, "Single document existence filter with count: " + n);
                        else this.de(e) !== n && (this.ae(e), this.ie = this.ie.add(e)) } }, Qa.prototype.ve = function(i) { var o = this,
                        s = {};
                    $r(this.Zi, function(t, e) { var n = o.le(t); if (n) { if (e.Pi && n.target.Nn()) { var r = new Ui(n.target.path);
                                null !== o.te.get(r) || o.we(t, r) || o.ue(t, r, new Ts(r, i)) } e.Qi && (s[t] = e.Wi(), e.zi()) } }); var r = qa();
                    this.ne.forEach(function(t, e) { var n = !0;
                        e.Bt(function(t) { var e = o.le(t); return !e || 2 === e.ci || (n = !1) }), n && (r = r.add(t)) }); var t = new Ka(i, s, this.ie, this.te, r); return this.te = Ca(), this.ne = ru(), this.ie = new Zi(Su), t }, Qa.prototype.re = function(t, e) { if (this.ce(t)) { var n = this.we(t, e.key) ? 2 : 0;
                        this.he(t).Ki(e.key, n), this.te = this.te.dt(e.key, e), this.ne = this.ne.dt(e.key, this.me(e.key).add(t)) } }, Qa.prototype.ue = function(t, e, n) { if (this.ce(t)) { var r = this.he(t);
                        this.we(t, e) ? r.Ki(e, 1) : r.Hi(e), this.ne = this.ne.dt(e, this.me(e).delete(t)), n && (this.te = this.te.dt(e, n)) } }, Qa.prototype.removeTarget = function(t) { delete this.Zi[t] }, Qa.prototype.de = function(t) { var e = this.he(t).Wi(); return this.$i.ge(t).size + e.ki.size - e.Oi.size }, Qa.prototype.Ji = function(t) { this.he(t).Ji() }, Qa.prototype.he = function(t) { return this.Zi[t] || (this.Zi[t] = new Ja), this.Zi[t] }, Qa.prototype.me = function(t) { var e = this.ne.get(t); return e || (e = new Zi(Su), this.ne = this.ne.dt(t, e)), e }, Qa.prototype.ce = function(t) { var e = null !== this.le(t); return e || wu("WatchChangeAggregator", "Detected inactive target", t), e }, Qa.prototype.le = function(t) { var e = this.Zi[t]; return e && e.Mi ? null : this.$i.be(t) }, Qa.prototype.ae = function(e) { var n = this;
                    Tu(!this.Zi[e].Mi, "Should only reset active targets"), this.Zi[e] = new Ja, this.$i.ge(e).forEach(function(t) { n.ue(e, t, null) }) }, Qa.prototype.we = function(t, e) { return this.$i.ge(t).has(e) }, Qa);

            function Qa(t) { this.$i = t, this.Zi = {}, this.te = Ca(), this.ne = ru(), this.ie = new Zi(Su) }

            function Xa() { this.xi = 0, this.ji = iu(), this.Li = wi.k, this.qi = !1, this.Bi = !0 }

            function $a(t, e, n, r, i) { this.resumeToken = t, this.Pi = e, this.ki = n, this.Ni = r, this.Oi = i }

            function Za(t, e, n, r, i) { this.ai = t, this.Ei = e, this.Di = n, this.Ri = r, this.Si = i }

            function tu(t, e, n, r, i, o, s, a) { this.query = t, this.docs = e, this.pi = n, this.docChanges = r, this.yi = i, this.fromCache = o, this._i = s, this.Ii = a }

            function eu() { this.gi = new qi(Ui.W) }

            function nu(n) { this.W = n ? function(t, e) { return n(t, e) || Ui.W(t.key, e.key) } : function(t, e) { return Ui.W(t.key, e.key) }, this.vi = La(), this.wi = new qi(this.W) }

            function ru() { return new qi(Ui.W) }

            function iu() { return new qi(Ui.W) } var ou, su, au = ((ou = {})[sa.ASCENDING.name] = "ASCENDING", ou[sa.DESCENDING.name] = "DESCENDING", ou),
                uu = ((su = {})[Zs.LESS_THAN.name] = "LESS_THAN", su[Zs.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", su[Zs.GREATER_THAN.name] = "GREATER_THAN", su[Zs.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", su[Zs.EQUAL.name] = "EQUAL", su[Zs.ARRAY_CONTAINS.name] = "ARRAY_CONTAINS", su[Zs.IN.name] = "IN", su[Zs.ARRAY_CONTAINS_ANY.name] = "ARRAY_CONTAINS_ANY", su),
                hu = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

            function cu(t, e) { Tu(!Fs(t), e + " is missing") }

            function fu(t) { return "number" == typeof t ? t : "string" == typeof t ? Number(t) : Iu("can't parse " + t) } var lu = (yu.prototype.pe = function(t) { var e = void 0 === t.code ? qr.UNKNOWN : Da(t.code); return new Mr(e, t.message || "") }, yu.prototype.ye = function(t) { return this.options._e || Fs(t) ? t : { value: t } }, yu.prototype.Ie = function(t) { var e; return Fs(e = "object" == typeof t ? t.value : t) ? null : e }, yu.prototype.G = function(t) { return this.options._e ? new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + t.nanoseconds).slice(-9) + "Z" : { seconds: "" + t.seconds, nanos: t.nanoseconds } }, yu.prototype.L = function(t) { if ("string" == typeof t) return this.Te(t);
                    Tu(!!t, "Cannot deserialize null or undefined timestamp."); var e = fu(t.seconds || "0"),
                        n = t.nanos || 0; return new Ci(e, n) }, yu.prototype.Te = function(t) { var e = 0,
                        n = hu.exec(t); if (Tu(!!n, "invalid timestamp: " + t), n[1]) { var r = n[1];
                        r = (r + "000000000").substr(0, 9), e = Number(r) } var i = new Date(t),
                        o = Math.floor(i.getTime() / 1e3); return new Ci(o, e) }, yu.prototype.Ee = function(t) { return this.options._e ? t.toBase64() : t.toUint8Array() }, yu.prototype.De = function(t) { return this.options._e ? (Tu(void 0 === t || "string" == typeof t, "value must be undefined or a string when using proto3 Json"), wi.fromBase64String(t || "")) : (Tu(void 0 === t || t instanceof Uint8Array, "value must be undefined or Uint8Array"), wi.fromUint8Array(t || new Uint8Array)) }, yu.prototype.Re = function(t) { return "string" == typeof t ? (Tu(this.options._e, "Expected bytes to be passed in as Uint8Array, but got a string instead."), ki.fromBase64String(t)) : (Tu(!this.options._e, "Expected bytes to be passed in as Uint8Array, but got a string instead."), ki.fromUint8Array(t)) }, yu.prototype.toVersion = function(t) { return this.G(t.G()) }, yu.prototype.fromVersion = function(t) { return Tu(!!t, "Trying to deserialize version that isn't set"), Oi.L(this.L(t)) }, yu.prototype.Se = function(t, e) { return this.Ae(t).child("documents").child(e).it() }, yu.prototype.Ce = function(t) { var e = Li.et(t); return Tu(this.Pe(e), "Tried to deserialize invalid key " + e.toString()), e }, yu.prototype.ke = function(t) { return this.Se(this.Dn, t.path) }, yu.prototype.Ne = function(t) { var e = this.Ce(t); return Tu(e.get(1) === this.Dn.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.Dn.projectId), Tu(!e.get(3) && !this.Dn.database || e.get(3) === this.Dn.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.Dn.database), new Ui(this.Oe(e)) }, yu.prototype.Fe = function(t) { return this.Se(this.Dn, t) }, yu.prototype.Ve = function(t) { var e = this.Ce(t); return 4 === e.length ? Li.rt : this.Oe(e) }, Object.defineProperty(yu.prototype, "Ue", { get: function() { return new Li(["projects", this.Dn.projectId, "databases", this.Dn.database]).it() }, enumerable: !0, configurable: !0 }), yu.prototype.Ae = function(t) { return new Li(["projects", t.projectId, "databases", t.database]) }, yu.prototype.Oe = function(t) { return Tu(4 < t.length && "documents" === t.get(4), "tried to deserialize invalid key " + t.toString()), t.H(5) }, yu.prototype.Pe = function(t) { return 4 <= t.length && "projects" === t.get(0) && "databases" === t.get(2) }, yu.prototype.xe = function(t) { if (t instanceof Lo) return { nullValue: "NULL_VALUE" }; if (t instanceof Po) return { booleanValue: t.value() }; if (t instanceof cs) return { integerValue: "" + t.value() }; if (t instanceof fs) { var e = t.value(); if (this.options._e) { if (isNaN(e)) return { doubleValue: "NaN" }; if (e === 1 / 0) return { doubleValue: "Infinity" }; if (e === -1 / 0) return { doubleValue: "-Infinity" }; if (js(e)) return { doubleValue: "-0" } } return { doubleValue: t.value() } } return t instanceof ls ? { stringValue: t.value() } : t instanceof gs ? { mapValue: this.je(t) } : t instanceof bs ? { arrayValue: this.Le(t) } : t instanceof ps ? { timestampValue: this.G(t.Jt) } : t instanceof ms ? { geoPointValue: { latitude: t.value().latitude, longitude: t.value().longitude } } : t instanceof vs ? { bytesValue: this.Ee(t.value()) } : t instanceof ys ? { referenceValue: this.Se(t.Dn, t.key.path) } : Iu("Unknown FieldValue " + JSON.stringify(t)) }, yu.prototype.qe = function(t) { var e = this; if ("nullValue" in t) return Lo.yn; if ("booleanValue" in t) return Po.of(t.booleanValue); if ("integerValue" in t) return new cs(fu(t.integerValue)); if ("doubleValue" in t) { if (this.options._e) { if ("NaN" === t.doubleValue) return fs.Tn; if ("Infinity" === t.doubleValue) return fs.POSITIVE_INFINITY; if ("-Infinity" === t.doubleValue) return fs.NEGATIVE_INFINITY; if ("-0" === t.doubleValue) return new fs(-0) } return new fs(t.doubleValue) } if ("stringValue" in t) return new ls(t.stringValue); if ("mapValue" in t) return this.Be(t.mapValue.fields || {}); if ("arrayValue" in t) { cu(t.arrayValue, "arrayValue"); var n = t.arrayValue.values || []; return new bs(n.map(function(t) { return e.qe(t) })) } if ("timestampValue" in t) return cu(t.timestampValue, "timestampValue"), new ps(this.L(t.timestampValue)); if ("geoPointValue" in t) { cu(t.geoPointValue, "geoPointValue"); var r = t.geoPointValue.latitude || 0,
                            i = t.geoPointValue.longitude || 0; return new ms(new Ri(r, i)) } if ("bytesValue" in t) { cu(t.bytesValue, "bytesValue"); var o = this.Re(t.bytesValue); return new vs(o) } if ("referenceValue" in t) { cu(t.referenceValue, "referenceValue"); var s = this.Ce(t.referenceValue),
                            a = new Ou(s.get(1), s.get(3)),
                            u = new Ui(this.Oe(s)); return new ys(a, u) } return Iu("Unknown Value proto " + JSON.stringify(t)) }, yu.prototype.Me = function(t, e) { return { name: this.ke(t), fields: this.Qe(e) } }, yu.prototype.Ge = function(t) { return Tu(!t.rn, "Can't serialize documents with mutations."), { name: this.ke(t.key), fields: this.Qe(t.data()), updateTime: this.G(t.version.G()) } }, yu.prototype.We = function(t, e) { var n = this,
                        r = this.Ne(t.name),
                        i = this.fromVersion(t.updateTime); return new Is(r, i, { hasCommittedMutations: !!e }, void 0, t, function(t) { return n.qe(t) }) }, yu.prototype.Qe = function(t) { var n = this,
                        r = {}; return t.forEach(function(t, e) { r[t] = n.xe(e) }), r }, yu.prototype.Be = function(t) { var n = this,
                        e = t,
                        r = gs.wn(); return Zr(e, function(t, e) { r.set(new _i([t]), n.qe(e)) }), r.an() }, yu.prototype.je = function(t) { return { fields: this.Qe(t) } }, yu.prototype.Le = function(t) { var e = this,
                        n = []; return t.forEach(function(t) { n.push(e.xe(t)) }), { values: n } }, yu.prototype.ze = function(t) { var e = this;
                    Tu(!!t.found, "Tried to deserialize a found document from a missing document."), cu(t.found.name, "doc.found.name"), cu(t.found.updateTime, "doc.found.updateTime"); var n = this.Ne(t.found.name),
                        r = this.fromVersion(t.found.updateTime); return new Is(n, r, {}, void 0, t.found, function(t) { return e.qe(t) }) }, yu.prototype.Ke = function(t) { Tu(!!t.missing, "Tried to deserialize a missing document from a found document."), Tu(!!t.readTime, "Tried to deserialize a missing document without a read time."); var e = this.Ne(t.missing),
                        n = this.fromVersion(t.readTime); return new Ts(e, n) }, yu.prototype.He = function(t) { return "found" in t ? this.ze(t) : "missing" in t ? this.Ke(t) : Iu("invalid batch get response: " + JSON.stringify(t)) }, yu.prototype.Je = function(t) { switch (t) {
                        case 1:
                            return "ADD";
                        case 3:
                            return "CURRENT";
                        case 0:
                            return "NO_CHANGE";
                        case 2:
                            return "REMOVE";
                        case 4:
                            return "RESET";
                        default:
                            return Iu("Unknown WatchTargetChangeState: " + t) } }, yu.prototype.Ye = function(t) { if (t instanceof ja) return { filter: { count: t.Ui.count, targetId: t.targetId } }; if (t instanceof Fa) { if (t.Vi instanceof Is) { var e = t.Vi; return { documentChange: { document: { name: this.ke(e.key), fields: this.Qe(e.data()), updateTime: this.toVersion(e.version) }, targetIds: t.Fi, removedTargetIds: t.removedTargetIds } } } if (t.Vi instanceof Ts) return e = t.Vi, { documentDelete: { document: this.ke(e.key), readTime: this.toVersion(e.version), removedTargetIds: t.removedTargetIds } }; if (null === t.Vi) return { documentRemove: { document: this.ke(t.key), removedTargetIds: t.removedTargetIds } } } if (t instanceof Ga) { var n = void 0; return t.cause && (n = { code: function(t) { if (void 0 === t) return Bs.OK; switch (t) {
                                    case qr.OK:
                                        return Bs.OK;
                                    case qr.CANCELLED:
                                        return Bs.CANCELLED;
                                    case qr.UNKNOWN:
                                        return Bs.UNKNOWN;
                                    case qr.DEADLINE_EXCEEDED:
                                        return Bs.DEADLINE_EXCEEDED;
                                    case qr.RESOURCE_EXHAUSTED:
                                        return Bs.RESOURCE_EXHAUSTED;
                                    case qr.INTERNAL:
                                        return Bs.INTERNAL;
                                    case qr.UNAVAILABLE:
                                        return Bs.UNAVAILABLE;
                                    case qr.UNAUTHENTICATED:
                                        return Bs.UNAUTHENTICATED;
                                    case qr.INVALID_ARGUMENT:
                                        return Bs.INVALID_ARGUMENT;
                                    case qr.NOT_FOUND:
                                        return Bs.NOT_FOUND;
                                    case qr.ALREADY_EXISTS:
                                        return Bs.ALREADY_EXISTS;
                                    case qr.PERMISSION_DENIED:
                                        return Bs.PERMISSION_DENIED;
                                    case qr.FAILED_PRECONDITION:
                                        return Bs.FAILED_PRECONDITION;
                                    case qr.ABORTED:
                                        return Bs.ABORTED;
                                    case qr.OUT_OF_RANGE:
                                        return Bs.OUT_OF_RANGE;
                                    case qr.UNIMPLEMENTED:
                                        return Bs.UNIMPLEMENTED;
                                    case qr.DATA_LOSS:
                                        return Bs.DATA_LOSS;
                                    default:
                                        return Iu("Unknown status code: " + t) } }(t.cause.code), message: t.cause.message }), { targetChange: { targetChangeType: this.Je(t.state), targetIds: t.targetIds, resumeToken: this.Ee(t.resumeToken), cause: n } } } return Iu("Unrecognized watch change: " + JSON.stringify(t)) }, yu.prototype.Xe = function(t) { var e, n = this; if ("targetChange" in t) { cu(t.targetChange, "targetChange"); var r = this.$e(t.targetChange.targetChangeType || "NO_CHANGE"),
                            i = t.targetChange.targetIds || [],
                            o = this.De(t.targetChange.resumeToken),
                            s = t.targetChange.cause,
                            a = s && this.pe(s);
                        e = new Ga(r, i, o, a || null) } else if ("documentChange" in t) { cu(t.documentChange, "documentChange"); var u = t.documentChange;
                        cu(u.document, "documentChange.name"), cu(u.document.name, "documentChange.document.name"), cu(u.document.updateTime, "documentChange.document.updateTime"); var h = this.Ne(u.document.name),
                            c = this.fromVersion(u.document.updateTime),
                            f = new Is(h, c, {}, void 0, u.document, function(t) { return n.qe(t) }),
                            l = u.targetIds || [],
                            p = u.removedTargetIds || [];
                        e = new Fa(l, p, f.key, f) } else if ("documentDelete" in t) { cu(t.documentDelete, "documentDelete"); var d = t.documentDelete;
                        cu(d.document, "documentDelete.document"), h = this.Ne(d.document), c = d.readTime ? this.fromVersion(d.readTime) : Oi.q(), f = new Ts(h, c), p = d.removedTargetIds || [], e = new Fa([], p, f.key, f) } else if ("documentRemove" in t) { cu(t.documentRemove, "documentRemove"); var v = t.documentRemove;
                        cu(v.document, "documentRemove"), h = this.Ne(v.document), p = v.removedTargetIds || [], e = new Fa([], p, h, null) } else { if (!("filter" in t)) return Iu("Unknown change type " + JSON.stringify(t));
                        cu(t.filter, "filter"); var y = t.filter;
                        cu(y.targetId, "filter.targetId"); var m = y.count || 0,
                            g = new la(m),
                            w = y.targetId;
                        e = new ja(w, g) } return e }, yu.prototype.$e = function(t) { return "NO_CHANGE" === t ? 0 : "ADD" === t ? 1 : "REMOVE" === t ? 2 : "CURRENT" === t ? 3 : "RESET" === t ? 4 : Iu("Got unexpected TargetChange.state: " + t) }, yu.prototype.Ze = function(t) { if (!("targetChange" in t)) return Oi.MIN; var e = t.targetChange; return e.targetIds && e.targetIds.length ? Oi.MIN : e.readTime ? this.fromVersion(e.readTime) : Oi.MIN }, yu.prototype.tr = function(t) { var e, n = this; if (t instanceof So) e = { update: this.Me(t.key, t.value) };
                    else if (t instanceof Ro) e = { delete: this.ke(t.key) };
                    else if (t instanceof ko) e = { update: this.Me(t.key, t.data), updateMask: this.nr(t.sn) };
                    else if (t instanceof Do) e = { transform: { document: this.ke(t.key), fieldTransforms: t.fieldTransforms.map(function(t) { return n.ir(t) }) } };
                    else { if (!(t instanceof Co)) return Iu("Unknown mutation type " + t.type);
                        e = { verify: this.ke(t.key) } } return t.en.Zt || (e.currentDocument = this.er(t.en)), e }, yu.prototype.rr = function(t) { var e = this,
                        n = t.currentDocument ? this.ur(t.currentDocument) : No.NONE; if (t.update) { cu(t.update.name, "name"); var r = this.Ne(t.update.name),
                            i = this.Be(t.update.fields || {}); if (t.updateMask) { var o = this.sr(t.updateMask); return new ko(r, i, o, n) } return new So(r, i, n) } if (t.delete) return r = this.Ne(t.delete), new Ro(r, n); if (t.transform) { r = this.Ne(t.transform.document); var s = t.transform.fieldTransforms.map(function(t) { return e.or(t) }); return Tu(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new Do(r, s) } return t.verify ? (r = this.Ne(t.verify), new Co(r, n)) : Iu("unknown mutation proto: " + JSON.stringify(t)) }, yu.prototype.er = function(t) { return Tu(!t.Zt, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? { updateTime: this.toVersion(t.updateTime) } : void 0 !== t.exists ? { exists: t.exists } : Iu("Unknown precondition") }, yu.prototype.ur = function(t) { return void 0 !== t.updateTime ? No.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? No.exists(t.exists) : No.NONE }, yu.prototype.hr = function(t, e) { var n = this,
                        r = t.updateTime ? this.fromVersion(t.updateTime) : this.fromVersion(e);
                    r.isEqual(Oi.MIN) && (r = this.fromVersion(e)); var i = null; return t.transformResults && 0 < t.transformResults.length && (i = t.transformResults.map(function(t) { return n.qe(t) })), new lo(r, i) }, yu.prototype.cr = function(t, e) { var n = this; return t && 0 < t.length ? (Tu(void 0 !== e, "Received a write result without a commit time"), t.map(function(t) { return n.hr(t, e) })) : [] }, yu.prototype.ir = function(t) { var e = this,
                        n = t.transform; if (n instanceof eo) return { fieldPath: t.field.it(), setToServerValue: "REQUEST_TIME" }; if (n instanceof no) return { fieldPath: t.field.it(), appendMissingElements: { values: n.elements.map(function(t) { return e.xe(t) }) } }; if (n instanceof ro) return { fieldPath: t.field.it(), removeAllFromArray: { values: n.elements.map(function(t) { return e.xe(t) }) } }; if (n instanceof io) return { fieldPath: t.field.it(), increment: this.xe(n.Ht) }; throw Iu("Unknown transform: " + t.transform) }, yu.prototype.or = function(t) { var e = this,
                        n = null; if ("setToServerValue" in t) Tu("REQUEST_TIME" === t.setToServerValue, "Unknown server value transform proto: " + JSON.stringify(t)), n = eo.instance;
                    else if ("appendMissingElements" in t) { var r = t.appendMissingElements.values || [];
                        n = new no(r.map(function(t) { return e.qe(t) })) } else if ("removeAllFromArray" in t) r = t.removeAllFromArray.values || [], n = new ro(r.map(function(t) { return e.qe(t) }));
                    else if ("increment" in t) { var i = this.qe(t.increment);
                        Tu(i instanceof _o, "NUMERIC_ADD transform requires a NumberValue"), n = new io(i) } else Iu("Unknown transform proto: " + JSON.stringify(t)); var o = _i.ht(t.fieldPath); return new To(o, n) }, yu.prototype.ar = function(t) { return { documents: [this.Fe(t.path)] } }, yu.prototype.lr = function(t) { var e = t.documents.length;
                    Tu(1 === e, "DocumentsTarget contained other than 1 document: " + e); var n = t.documents[0]; return $s.jn(this.Ve(n)).Yn() }, yu.prototype.dr = function(t) { var e = { structuredQuery: {} },
                        n = t.path;
                    null !== t.collectionGroup ? (Tu(n.length % 2 == 0, "Collection Group queries should be within a document path or root."), e.parent = this.Fe(n), e.structuredQuery.from = [{ collectionId: t.collectionGroup, allDescendants: !0 }]) : (Tu(n.length % 2 != 0, "Document queries with filters are not supported."), e.parent = this.Fe(n.J()), e.structuredQuery.from = [{ collectionId: n.$() }]); var r = this.vr(t.filters);
                    r && (e.structuredQuery.where = r); var i = this.wr(t.orderBy);
                    i && (e.structuredQuery.orderBy = i); var o = this.ye(t.limit); return null !== o && (e.structuredQuery.limit = o), t.startAt && (e.structuredQuery.startAt = this.mr(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.mr(t.endAt)), e }, yu.prototype.gr = function(t) { var e = this.Ve(t.parent),
                        n = t.structuredQuery,
                        r = n.from ? n.from.length : 0,
                        i = null; if (0 < r) { Tu(1 === r, "StructuredQuery.from with more than one collection is not supported."); var o = n.from[0];
                        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId) } var s = [];
                    n.where && (s = this.br(n.where)); var a = [];
                    n.orderBy && (a = this.pr(n.orderBy)); var u = null;
                    n.limit && (u = this.Ie(n.limit)); var h = null;
                    n.startAt && (h = this.yr(n.startAt)); var c = null; return n.endAt && (c = this.yr(n.endAt)), new $s(e, i, a, s, u, "F", h, c).Yn() }, yu.prototype._r = function(t) { var e = this.Ir(t.ci); return null == e ? null : { "goog-listen-tags": e } }, yu.prototype.Ir = function(t) { switch (t) {
                        case 0:
                            return null;
                        case 1:
                            return "existence-filter-mismatch";
                        case 2:
                            return "limbo-document";
                        default:
                            return Iu("Unrecognized query purpose: " + t) } }, yu.prototype.Yn = function(t) { var e, n = t.target; return (e = n.Nn() ? { documents: this.ar(n) } : { query: this.dr(n) }).targetId = t.targetId, 0 < t.resumeToken.P() && (e.resumeToken = this.Ee(t.resumeToken)), e }, yu.prototype.vr = function(t) { var e = this; if (0 !== t.length) { var n = t.map(function(t) { return t instanceof ta ? e.Tr(t) : Iu("Unrecognized filter: " + JSON.stringify(t)) }); return 1 === n.length ? n[0] : { compositeFilter: { op: "AND", filters: n } } } }, yu.prototype.br = function(t) { var e = this; return t ? void 0 !== t.unaryFilter ? [this.Er(t)] : void 0 !== t.fieldFilter ? [this.Dr(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) { return e.br(t) }).reduce(function(t, e) { return t.concat(e) }) : Iu("Unknown filter: " + JSON.stringify(t)) : [] }, yu.prototype.wr = function(t) { var e = this; if (0 !== t.length) return t.map(function(t) { return e.Rr(t) }) }, yu.prototype.pr = function(t) { var e = this; return t.map(function(t) { return e.Sr(t) }) }, yu.prototype.mr = function(t) { var e = this; return { before: t.before, values: t.position.map(function(t) { return e.xe(t) }) } }, yu.prototype.yr = function(t) { var e = this,
                        n = !!t.before,
                        r = t.values.map(function(t) { return e.qe(t) }); return new aa(r, n) }, yu.prototype.Ar = function(t) { return au[t.name] }, yu.prototype.Cr = function(t) { switch (t) {
                        case "ASCENDING":
                            return sa.ASCENDING;
                        case "DESCENDING":
                            return sa.DESCENDING;
                        default:
                            return } }, yu.prototype.Pr = function(t) { return uu[t.name] }, yu.prototype.kr = function(t) { switch (t) {
                        case "EQUAL":
                            return Zs.EQUAL;
                        case "GREATER_THAN":
                            return Zs.GREATER_THAN;
                        case "GREATER_THAN_OR_EQUAL":
                            return Zs.GREATER_THAN_OR_EQUAL;
                        case "LESS_THAN":
                            return Zs.LESS_THAN;
                        case "LESS_THAN_OR_EQUAL":
                            return Zs.LESS_THAN_OR_EQUAL;
                        case "ARRAY_CONTAINS":
                            return Zs.ARRAY_CONTAINS;
                        case "IN":
                            return Zs.IN;
                        case "ARRAY_CONTAINS_ANY":
                            return Zs.ARRAY_CONTAINS_ANY;
                        case "OPERATOR_UNSPECIFIED":
                            return Iu("Unspecified operator");
                        default:
                            return Iu("Unknown operator") } }, yu.prototype.Nr = function(t) { return { fieldPath: t.it() } }, yu.prototype.Or = function(t) { return _i.ht(t.fieldPath) }, yu.prototype.Rr = function(t) { return { field: this.Nr(t.field), direction: this.Ar(t.dir) } }, yu.prototype.Sr = function(t) { return new ua(this.Or(t.field), this.Cr(t.direction)) }, yu.prototype.Dr = function(t) { return ta.create(this.Or(t.fieldFilter.field), this.kr(t.fieldFilter.op), this.qe(t.fieldFilter.value)) }, yu.prototype.Tr = function(t) { if (t.op === Zs.EQUAL) { if (t.value.isEqual(fs.Tn)) return { unaryFilter: { field: this.Nr(t.field), op: "IS_NAN" } }; if (t.value.isEqual(Lo.yn)) return { unaryFilter: { field: this.Nr(t.field), op: "IS_NULL" } } } return { fieldFilter: { field: this.Nr(t.field), op: this.Pr(t.op), value: this.xe(t.value) } } }, yu.prototype.Er = function(t) { switch (t.unaryFilter.op) {
                        case "IS_NAN":
                            var e = this.Or(t.unaryFilter.field); return ta.create(e, Zs.EQUAL, fs.Tn);
                        case "IS_NULL":
                            var n = this.Or(t.unaryFilter.field); return ta.create(n, Zs.EQUAL, Lo.yn);
                        case "OPERATOR_UNSPECIFIED":
                            return Iu("Unspecified filter");
                        default:
                            return Iu("Unknown filter") } }, yu.prototype.nr = function(t) { var e = []; return t.fields.forEach(function(t) { return e.push(t.it()) }), { fieldPaths: e } }, yu.prototype.sr = function(t) { var e = (t.fieldPaths || []).map(function(t) { return _i.ht(t) }); return Io.Xt(e) }, yu),
                pu = (vu.Fr = function(t) { vu.platform && Iu("Platform already defined"), vu.platform = t }, vu.C = function() { return vu.platform || Iu("Platform not set"), vu.platform }, vu),
                du = new c("@firebase/firestore");

            function vu() {}

            function yu(t, e) { this.Dn = t, this.options = e }

            function mu() { return du.logLevel === o.DEBUG ? 0 : du.logLevel === o.SILENT ? 2 : 1 }

            function gu(t) { switch (t) {
                    case 0:
                        du.logLevel = o.DEBUG; break;
                    case 1:
                        du.logLevel = o.ERROR; break;
                    case 2:
                        du.logLevel = o.SILENT; break;
                    default:
                        du.error("Firestore (" + _r + "): Invalid value passed to `setLogLevel`") } }

            function wu(t, e) { for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r]; if (du.logLevel <= o.DEBUG) { var i = n.map(Eu);
                    du.debug.apply(du, s(["Firestore (" + _r + ") [" + t + "]: " + e], i)) } }

            function bu(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n]; if (du.logLevel <= o.ERROR) { var r = e.map(Eu);
                    du.error.apply(du, s(["Firestore (" + _r + "): " + t], r)) } }

            function Eu(t) { if ("string" == typeof t) return t; var e = pu.C(); try { return e.Vr(t) } catch (e) { return t } }

            function Iu(t) { var e = "FIRESTORE (" + _r + ") INTERNAL ASSERTION FAILED: " + t; throw bu(e), new Error(e) }

            function Tu(t, e) { t || Iu(e) } var Nu = (Au.Ur = function() { for (var e = ""; e.length < 20;) pu.C().randomBytes(40).forEach(function(t) { e.length < 20 && t <= 247 && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(t % 62)) }); return Tu(20 === e.length, "Invalid auto ID: " + e), e }, Au);

            function Au() {}

            function Su(t, e) { return t < e ? -1 : e < t ? 1 : 0 }

            function ku(t, e) { if (t.length !== e.length) return !1; for (var n = 0; n < t.length; n++)
                    if (!t[n].isEqual(e[n])) return !1; return !0 }

            function Du(t) { return t + "\0" }

            function Ru(t, e, n, r, i) { this.Dn = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i }

            function Cu() { var n = this;
                this.promise = new Promise(function(t, e) { n.resolve = t, n.reject = e }) } var Ou = (Object.defineProperty(Ju.prototype, "xr", { get: function() { return "(default)" === this.database }, enumerable: !0, configurable: !0 }), Ju.prototype.isEqual = function(t) { return t instanceof Ju && t.projectId === this.projectId && t.database === this.database }, Ju.prototype.B = function(t) { return Su(this.projectId, t.projectId) || Su(this.database, t.database) }, Ju),
                xu = (Wu.prototype.zt = function(t, e, n) { e && Tu(e.key.isEqual(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + e.key); var r = n.jr;
                    Tu(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ")."); for (var i = 0; i < this.mutations.length; i++) { var o = this.mutations[i]; if (o.key.isEqual(t)) { var s = r[i];
                            e = o.zt(e, s) } } return e }, Wu.prototype.Wt = function(t, e) { e && Tu(e.key.isEqual(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + e.key); for (var n = 0, r = this.baseMutations; n < r.length; n++)(a = r[n]).key.isEqual(t) && (e = a.Wt(e, e, this.En)); for (var i = e, o = 0, s = this.mutations; o < s.length; o++) { var a;
                        (a = s[o]).key.isEqual(t) && (e = a.Wt(e, i, this.En)) } return e }, Wu.prototype.Lr = function(n) { var r = this,
                        i = n; return this.mutations.forEach(function(t) { var e = r.Wt(t.key, n.get(t.key));
                        e && (i = i.dt(t.key, e)) }), i }, Wu.prototype.keys = function() { return this.mutations.reduce(function(t, e) { return t.add(e.key) }, qa()) }, Wu.prototype.isEqual = function(t) { return this.batchId === t.batchId && ku(this.mutations, t.mutations) && ku(this.baseMutations, t.baseMutations) }, Wu),
                Lu = (Ku.from = function(t, e, n, r) { Tu(t.mutations.length === n.length, "Mutations sent " + t.mutations.length + " must equal results received " + n.length); for (var i = _a(), o = t.mutations, s = 0; s < o.length; s++) i = i.dt(o[s].key, n[s].version); return new Ku(t, e, n, r, i) }, Ku),
                Pu = (Hu.prototype.get = function(t) { var e = this.Mr(t),
                        n = this.Qr[e]; if (void 0 !== n)
                        for (var r = 0, i = n; r < i.length; r++) { var o = i[r],
                                s = o[0],
                                a = o[1]; if (s.isEqual(t)) return a } }, Hu.prototype.has = function(t) { return void 0 !== this.get(t) }, Hu.prototype.set = function(t, e) { var n = this.Mr(t),
                        r = this.Qr[n]; if (void 0 !== r) { for (var i = 0; i < r.length; i++)
                            if (r[i][0].isEqual(t)) return void(r[i] = [t, e]);
                        r.push([t, e]) } else this.Qr[n] = [
                        [t, e]
                    ] }, Hu.prototype.delete = function(t) { var e = this.Mr(t),
                        n = this.Qr[e]; if (void 0 === n) return !1; for (var r = 0; r < n.length; r++)
                        if (n[r][0].isEqual(t)) return 1 === n.length ? delete this.Qr[e] : n.splice(r, 1), !0; return !1 }, Hu.prototype.forEach = function(a) { Zr(this.Qr, function(t, e) { for (var n = 0, r = e; n < r.length; n++) { var i = r[n],
                                o = i[0],
                                s = i[1];
                            a(o, s) } }) }, Hu.prototype.Y = function() { return ti(this.Qr) }, Hu),
                _u = (zu.zr = function(t, e) { for (var n = qa(), r = qa(), i = 0, o = e.docChanges; i < o.length; i++) { var s = o[i]; switch (s.type) {
                            case 0:
                                n = n.add(s.doc.key); break;
                            case 1:
                                r = r.add(s.doc.key) } } return new zu(t, e.fromCache, n, r) }, zu),
                Uu = (Bu.prototype.Hr = function(t) { return this.previousValue = Math.max(t, this.previousValue), this.previousValue }, Bu.prototype.next = function() { var t = ++this.previousValue; return this.Jr && this.Jr(t), t }, Bu.Xr = -1, Bu),
                qu = (Gu.eu = function(t, e, n, r, i) { var o = new Gu(t, e, Date.now() + n, r, i); return o.start(n), o }, Gu.prototype.start = function(t) { var e = this;
                    this.ru = setTimeout(function() { return e.uu() }, t) }, Gu.prototype.su = function() { return this.uu() }, Gu.prototype.cancel = function(t) { null !== this.ru && (this.clearTimeout(), this.iu.reject(new Mr(qr.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")))) }, Gu.prototype.uu = function() { var e = this;
                    this.$r.ou(function() { return null !== e.ru ? (e.clearTimeout(), e.op().then(function(t) { return e.iu.resolve(t) })) : Promise.resolve() }) }, Gu.prototype.clearTimeout = function() { null !== this.ru && (this.nu(this), clearTimeout(this.ru), this.ru = null) }, Gu),
                Mu = (Object.defineProperty(ju.prototype, "vu", { get: function() { return this.cu }, enumerable: !0, configurable: !0 }), ju.prototype.ou = function(t) { this.enqueue(t) }, ju.prototype.wu = function(t) { this.mu(), this.gu(t) }, ju.prototype.bu = function(t) { return this.mu(), this.gu(t) }, ju.prototype.pu = function(e) { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.mu(), this.cu ? [3, 2] : (this.cu = !0, [4, this.bu(e)]);
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2] } }) }) }, ju.prototype.enqueue = function(t) { return this.mu(), this.cu ? new Promise(function(t) {}) : this.gu(t) }, ju.prototype.gu = function(t) { var n = this,
                        e = this.hu.then(function() { return n.lu = !0, t().catch(function(t) { n.fu = t, n.lu = !1; var e = t.stack || t.message || ""; throw bu("INTERNAL UNHANDLED ERROR: ", e), e.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function() { throw t }, 0), t }).then(function(t) { return n.lu = !1, t }) }); return this.hu = e }, ju.prototype.yu = function(t, e, n) { var r = this;
                    this.mu(), Tu(0 <= e, "Attempted to schedule an operation with a negative delay of " + e), -1 < this.du.indexOf(t) && (e = 0); var i = qu.eu(this, t, e, n, function(t) { return r._u(t) }); return this.au.push(i), i }, ju.prototype.mu = function() { this.fu && Iu("AsyncQueue is already failed: " + (this.fu.stack || this.fu.message)) }, ju.prototype.Iu = function() { Tu(this.lu, "verifyOpInProgress() called when no op in progress on this queue.") }, ju.prototype.Tu = function() { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return [4, e = this.hu];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    if (e !== this.hu) return [3, 0];
                                    t.label = 3;
                                case 3:
                                    return [2] } }) }) }, ju.prototype.Eu = function(t) { for (var e = 0, n = this.au; e < n.length; e++)
                        if (n[e].Zr === t) return !0; return !1 }, ju.prototype.Du = function(r) { var i = this; return this.Tu().then(function() { Tu("all" === r || i.Eu(r), "Attempted to drain to missing operation " + r), i.au.sort(function(t, e) { return t.tu - e.tu }); for (var t = 0, e = i.au; t < e.length; t++) { var n = e[t]; if (n.su(), "all" !== r && n.Zr === r) break } return i.Tu() }) }, ju.prototype.Ru = function(t) { this.du.push(t) }, ju.prototype._u = function(t) { var e = this.au.indexOf(t);
                    Tu(0 <= e, "Delayed operation not found."), this.au.splice(e, 1) }, ju),
                Vu = (Fu.prototype.catch = function(t) { return this.next(void 0, t) }, Fu.prototype.next = function(r, i) { var o = this; return this.Pu && Iu("Called next() or catch() twice for PersistencePromise"), this.Pu = !0, this.Cu ? this.error ? this.ku(i, this.error) : this.Nu(r, this.result) : new Fu(function(e, n) { o.Su = function(t) { o.Nu(r, t).next(e, n) }, o.Au = function(t) { o.ku(i, t).next(e, n) } }) }, Fu.prototype.Ou = function() { var n = this; return new Promise(function(t, e) { n.next(t, e) }) }, Fu.prototype.Fu = function(t) { try { var e = t(); return e instanceof Fu ? e : Fu.resolve(e) } catch (t) { return Fu.reject(t) } }, Fu.prototype.Nu = function(t, e) { return t ? this.Fu(function() { return t(e) }) : Fu.resolve(e) }, Fu.prototype.ku = function(t, e) { return t ? this.Fu(function() { return t(e) }) : Fu.reject(e) }, Fu.resolve = function(n) { return new Fu(function(t, e) { t(n) }) }, Fu.reject = function(n) { return new Fu(function(t, e) { e(n) }) }, Fu.Vu = function(t) { return new Fu(function(e, n) { var r = 0,
                            i = 0,
                            o = !1;
                        t.forEach(function(t) {++r, t.next(function() {++i, o && i === r && e() }, function(t) { return n(t) }) }), o = !0, i === r && e() }) }, Fu.Uu = function(t) { for (var n = Fu.resolve(!1), e = function(e) { n = n.next(function(t) { return t ? Fu.resolve(t) : e() }) }, r = 0, i = t; r < i.length; r++) e(i[r]); return n }, Fu.forEach = function(t, n) { var r = this,
                        i = []; return t.forEach(function(t, e) { i.push(n.call(r, t, e)) }), this.Vu(i) }, Fu);

            function Fu(t) { var e = this;
                this.Su = null, this.Au = null, this.result = void 0, this.error = void 0, this.Cu = !1, this.Pu = !1, t(function(t) { e.Cu = !0, e.result = t, e.Su && e.Su(t) }, function(t) { e.Cu = !0, e.error = t, e.Au && e.Au(t) }) }

            function ju() { this.hu = Promise.resolve(), this.cu = !1, this.au = [], this.fu = null, this.lu = !1, this.du = [] }

            function Gu(t, e, n, r, i) { this.$r = t, this.Zr = e, this.tu = n, this.op = r, this.nu = i, this.iu = new Cu, this.then = this.iu.promise.then.bind(this.iu.promise), this.catch = this.iu.promise.catch.bind(this.iu.promise), this.iu.promise.catch(function(t) {}) }

            function Bu(t, e) { var n = this;
                this.previousValue = t, e && (e.Kr = function(t) { return n.Hr(t) }, this.Jr = function(t) { return e.Yr(t) }) }

            function zu(t, e, n, r) { this.targetId = t, this.fromCache = e, this.Gr = n, this.Wr = r }

            function Hu(t) { this.Mr = t, this.Qr = {} }

            function Ku(t, e, n, r, i) { this.batch = t, this.qr = e, this.jr = n, this.streamToken = r, this.Br = i }

            function Wu(t, e, n, r) { this.batchId = t, this.En = e, this.baseMutations = n, Tu(0 < (this.mutations = r).length, "Cannot create an empty mutation batch") }

            function Ju(t, e) { this.projectId = t, this.database = e || "(default)" }

            function Yu(t, e) { var n = t[0],
                    r = t[1],
                    i = e[0],
                    o = e[1],
                    s = Su(n, i); return 0 === s ? Su(r, o) : s } var Qu = (lh.prototype.Lu = function() { return ++this.ju }, lh.prototype.qu = function(t) { var e = [t, this.Lu()]; if (this.buffer.size < this.xu) this.buffer = this.buffer.add(e);
                    else { var n = this.buffer.last();
                        Yu(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e)) } }, Object.defineProperty(lh.prototype, "maxValue", { get: function() { return this.buffer.last()[0] }, enumerable: !0, configurable: !0 }), lh),
                Xu = { Bu: !1, Mu: 0, Qu: 0, Gu: 0 },
                $u = (fh.Hu = function(t) { return new fh(t, fh.Ju, fh.Yu) }, fh.Xu = -1, fh.$u = 1048576, fh.ts = new fh(fh.Zu = 41943040, fh.Ju = 10, fh.Yu = 1e3), fh.DISABLED = new fh(fh.Xu, 0, 0), fh),
                Zu = (ch.prototype.start = function(t) { Tu(null === this.rs, "Cannot start an already started LruScheduler"), this.ns.params.Wu !== $u.Xu && this.us(t) }, ch.prototype.stop = function() { this.rs && (this.rs.cancel(), this.rs = null) }, Object.defineProperty(ch.prototype, "ss", { get: function() { return null !== this.rs }, enumerable: !0, configurable: !0 }), ch.prototype.us = function(t) { var e = this;
                    Tu(null === this.rs, "Cannot schedule GC while a task is pending"); var n = this.es ? 3e5 : 6e4;
                    wu("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.rs = this.$r.yu("lru_garbage_collection", n, function() { return e.rs = null, e.es = !0, t.os(e.ns).then(function() { return e.us(t) }).catch(ph) }) }, ch),
                th = (hh.prototype.cs = function(t, e) { return this.hs.as(t).next(function(t) { return Math.floor(e / 100 * t) }) }, hh.prototype.fs = function(t, e) { var n = this; if (0 === e) return Vu.resolve(Uu.Xr); var r = new Qu(e); return this.hs.oe(t, function(t) { return r.qu(t.sequenceNumber) }).next(function() { return n.hs.ls(t, function(t) { return r.qu(t) }) }).next(function() { return r.maxValue }) }, hh.prototype.ds = function(t, e, n) { return this.hs.ds(t, e, n) }, hh.prototype.vs = function(t, e) { return this.hs.vs(t, e) }, hh.prototype.ws = function(e, n) { var r = this; return this.params.Wu === $u.Xu ? (wu("LruGarbageCollector", "Garbage collection skipped; disabled"), Vu.resolve(Xu)) : this.ms(e).next(function(t) { return t < r.params.Wu ? (wu("LruGarbageCollector", "Garbage collection skipped; Cache size " + t + " is lower than threshold " + r.params.Wu), Xu) : r.gs(e, n) }) }, hh.prototype.ms = function(t) { return this.hs.ms(t) }, hh.prototype.gs = function(e, n) { var r, i, o, s, a, u, h, c = this,
                        f = Date.now(); return this.cs(e, this.params.zu).next(function(t) { return i = t > c.params.Ku ? (wu("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + c.params.Ku + " from " + t), c.params.Ku) : t, s = Date.now(), c.fs(e, i) }).next(function(t) { return r = t, a = Date.now(), c.ds(e, r, n) }).next(function(t) { return o = t, u = Date.now(), c.vs(e, r) }).next(function(t) { return h = Date.now(), mu() <= 0 && wu("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (s - f) + "ms\n\tDetermined least recently used " + i + " in " + (a - s) + "ms\n\tRemoved " + o + " targets in " + (u - a) + "ms\n\tRemoved " + t + " documents in " + (h - u) + "ms\nTotal Duration: " + (h - f) + "ms"), Vu.resolve({ Bu: !0, Mu: i, Qu: o, Gu: t }) }) }, hh),
                eh = (uh.prototype.Y = function() { return this.bs.Y() }, uh.prototype._s = function(t, e) { var n = new nh(t, e);
                    this.bs = this.bs.add(n), this.ps = this.ps.add(n) }, uh.prototype.Is = function(t, e) { var n = this;
                    t.forEach(function(t) { return n._s(t, e) }) }, uh.prototype.Ts = function(t, e) { this.Es(new nh(t, e)) }, uh.prototype.Ds = function(t, e) { var n = this;
                    t.forEach(function(t) { return n.Ts(t, e) }) }, uh.prototype.Rs = function(t) { var e = this,
                        n = Ui.EMPTY,
                        r = new nh(n, t),
                        i = new nh(n, t + 1),
                        o = []; return this.ps.qt([r, i], function(t) { e.Es(t), o.push(t.key) }), o }, uh.prototype.Ss = function() { var e = this;
                    this.bs.forEach(function(t) { return e.Es(t) }) }, uh.prototype.Es = function(t) { this.bs = this.bs.delete(t), this.ps = this.ps.delete(t) }, uh.prototype.As = function(t) { var e = Ui.EMPTY,
                        n = new nh(e, t),
                        r = new nh(e, t + 1),
                        i = qa(); return this.ps.qt([n, r], function(t) { i = i.add(t.key) }), i }, uh.prototype.Cs = function(t) { var e = new nh(t, 0),
                        n = this.bs.Mt(e); return null !== n && t.isEqual(n.key) }, uh),
                nh = (ah.Rn = function(t, e) { return Ui.W(t.key, e.key) || Su(t.Ps, e.Ps) }, ah.ys = function(t, e) { return Su(t.Ps, e.Ps) || Ui.W(t.key, e.key) }, ah),
                rh = (Object.defineProperty(sh.prototype, "readTime", { get: function() { return Tu(void 0 !== this.Os, "Read time is not set. All removeEntry() calls must include a readTime if `trackRemovals` is used."), this.Os }, set: function(t) { Tu(void 0 === this.Os || this.Os.isEqual(t), "All changes in a RemoteDocumentChangeBuffer must have the same read time"), this.Os = t }, enumerable: !0, configurable: !0 }), sh.prototype.Fs = function(t, e) { this.Vs(), this.readTime = e, this.ks.set(t.key, t) }, sh.prototype.Us = function(t, e) { this.Vs(), e && (this.readTime = e), this.ks.set(t, null) }, sh.prototype.xs = function(t, e) { this.Vs(); var n = this.ks.get(e); return void 0 !== n ? Vu.resolve(n) : this.js(t, e) }, sh.prototype.getEntries = function(t, e) { return this.Ls(t, e) }, sh.prototype.apply = function(t) { return this.Vs(), this.Ns = !0, this.qs(t) }, sh.prototype.Vs = function() { Tu(!this.Ns, "Changes have already been applied.") }, sh),
                ih = (oh.prototype.start = function() { return this.eo() }, oh.prototype.ro = function(i) { return p(this, void 0, void 0, function() { var e, y, n, r = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return e = this.Hs, y = this.to, [4, this.persistence.runTransaction("Handle user change", "readonly", function(d) { var v; return r.Hs.uo(d).next(function(t) { return v = t, e = r.persistence.Js(i), y = new xh(r.Ys, e, r.persistence.no()), e.uo(d) }).next(function(t) { for (var e = [], n = [], r = qa(), i = 0, o = v; i < o.length; i++) { var s = o[i];
                                                e.push(s.batchId); for (var a = 0, u = s.mutations; a < u.length; a++) { var h = u[a];
                                                    r = r.add(h.key) } } for (var c = 0, f = t; c < f.length; c++) { s = f[c], n.push(s.batchId); for (var l = 0, p = s.mutations; l < p.length; l++) h = p[l], r = r.add(h.key) } return y.so(d, r).next(function(t) { return { oo: t, ho: e, co: n } }) }) })];
                                case 1:
                                    return n = t.sent(), this.Hs = e, this.to = y, this.Bs.io(this.to), [2, n] } }) }) }, oh.prototype.ao = function(a) { var u, h = this,
                        c = Ci.now(),
                        t = a.reduce(function(t, e) { return t.add(e.key) }, qa()); return this.persistence.runTransaction("Locally write mutations", "readwrite", function(s) { return h.to.so(s, t).next(function(t) { u = t; for (var e = [], n = 0, r = a; n < r.length; n++) { var i = r[n],
                                    o = i.un(u.get(i.key));
                                null != o && e.push(new ko(i.key, o, o.sn(), No.exists(!0))) } return h.Hs.fo(s, c, e, a) }) }).then(function(t) { var e = t.Lr(u); return { batchId: t.batchId, ks: e } }) }, oh.prototype.lo = function(t) { var n = this; return this.persistence.runTransaction("Lookup mutation documents", "readonly", function(e) { return n.Hs.do(e, t).next(function(t) { return t ? n.to.so(e, t) : Vu.resolve(null) }) }) }, oh.prototype.vo = function(r) { var i = this; return this.persistence.runTransaction("Acknowledge batch", "readwrite-primary", function(t) { var e = r.batch.keys(),
                            n = i.Ys.wo({ mo: !0 }); return i.Hs.vo(t, r.batch, r.streamToken).next(function() { return i.bo(t, r, n) }).next(function() { return n.apply(t) }).next(function() { return i.Hs.po(t) }).next(function() { return i.to.so(t, e) }) }) }, oh.prototype.yo = function(t) { var r = this; return this.persistence.runTransaction("Reject batch", "readwrite-primary", function(e) { var n; return r.Hs._o(e, t).next(function(t) { return Tu(null !== t, "Attempt to reject nonexistent batch!"), n = t.keys(), r.Hs.Io(e, t) }).next(function() { return r.Hs.po(e) }).next(function() { return r.to.so(e, n) }) }) }, oh.prototype.To = function() { var e = this; return this.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", function(t) { return e.Hs.To(t) }) }, oh.prototype.Eo = function() { var e = this; return this.persistence.runTransaction("Get last stream token", "readonly", function(t) { return e.Hs.Eo(t) }) }, oh.prototype.Do = function(e) { var n = this; return this.persistence.runTransaction("Set last stream token", "readwrite-primary", function(t) { return n.Hs.Do(t, e) }) }, oh.prototype.Ro = function() { var e = this; return this.persistence.runTransaction("Get last remote snapshot version", "readonly", function(t) { return e.$s.Ro(t) }) }, oh.prototype.So = function(u) { var h = this,
                        c = u.ai,
                        f = this.Qs; return this.persistence.runTransaction("Apply remote event", "readwrite-primary", function(o) { var i = h.Ys.wo({ mo: !0 });
                        f = h.Qs; var s = [];
                        $r(u.Ei, function(t, e) { var n = f.get(t); if (n) { s.push(h.$s.Ao(o, e.Oi, t).next(function() { return h.$s.Co(o, e.ki, t) })); var r = e.resumeToken; if (0 < r.P()) { var i = n.li(r, c).fi(o.Po);
                                    f = f.dt(t, i), oh.ko(n, i, e) && s.push(h.$s.No(o, i)) } } }); var a = Ca(),
                            n = qa(); if (u.Ri.forEach(function(t, e) { n = n.add(t) }), s.push(i.getEntries(o, n).next(function(r) { u.Ri.forEach(function(t, e) { var n = r.get(t);
                                    e instanceof Ts && e.version.isEqual(Oi.MIN) ? (i.Us(t, c), a = a.dt(t, e)) : null == n || 0 < e.version.B(n.version) || 0 === e.version.B(n.version) && n.hasPendingWrites ? (Tu(!Oi.MIN.isEqual(c), "Cannot add a document when the remote version is zero"), i.Fs(e, c), a = a.dt(t, e)) : wu("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", n.version, " Watch version:", e.version), u.Si.has(t) && s.push(h.persistence.Ks.Oo(o, t)) }) })), !c.isEqual(Oi.MIN)) { var t = h.$s.Ro(o).next(function(t) { return Tu(0 <= c.B(t), "Watch stream reverted to previous snapshot?? " + c + " < " + t), h.$s.Fo(o, o.Po, c) });
                            s.push(t) } return Vu.Vu(s).next(function() { return i.apply(o) }).next(function() { return h.to.Vo(o, a) }) }).then(function(t) { return h.Qs = f, t }) }, oh.ko = function(t, e, n) { return Tu(0 < e.resumeToken.P(), "Attempted to persist target data with no resume token"), 0 === t.resumeToken.P() || e.ai.M() - t.ai.M() >= this.Uo || 0 < n.ki.size + n.Ni.size + n.Oi.size }, oh.prototype.xo = function(t) { for (var n = this, e = 0, r = t; e < r.length; e++) { var i = r[e],
                            o = i.targetId; if (this.Ms.Is(i.Gr, o), this.Ms.Ds(i.Wr, o), !i.fromCache) { var s = this.Qs.get(o);
                            Tu(null !== s, "Can't set limbo-free snapshot version for unknown target: " + o); var a = s.ai,
                                u = s.di(a);
                            this.Qs = this.Qs.dt(o, u) } } return this.persistence.runTransaction("notifyLocalViewChanges", "readwrite", function(e) { return Vu.forEach(t, function(t) { return Vu.forEach(t.Wr, function(t) { return n.persistence.Ks.Ts(e, t) }) }) }) }, oh.prototype.jo = function(e) { var n = this; return this.persistence.runTransaction("Get next mutation batch", "readonly", function(t) { return void 0 === e && (e = -1), n.Hs.Lo(t, e) }) }, oh.prototype.qo = function(e) { var n = this; return this.persistence.runTransaction("read document", "readonly", function(t) { return n.to.Bo(t, e) }) }, oh.prototype.Mo = function(r) { var i = this; return this.persistence.runTransaction("Allocate target", "readwrite", function(e) { var n; return i.$s.Qo(e, r).next(function(t) { return t ? (n = t, Vu.resolve(n)) : i.$s.Go(e).next(function(t) { return n = new fa(r, t, 0, e.Po), i.$s.Wo(e, n).next(function() { return n }) }) }) }).then(function(t) { return null === i.Qs.get(t.targetId) && (i.Qs = i.Qs.dt(t.targetId, t), i.Gs.set(r, t.targetId)), t }) }, oh.prototype.Qo = function(t, e) { var n = this.Gs.get(e); return void 0 !== n ? Vu.resolve(this.Qs.get(n)) : this.$s.Qo(t, e) }, oh.prototype.zo = function(n, r) { var i = this,
                        o = this.Qs.get(n);
                    Tu(null !== o, "Tried to release nonexistent target: " + n); var t = r ? "readwrite" : "readwrite-primary"; return this.persistence.runTransaction("Release target", t, function(e) { var t = i.Ms.Rs(n); return r ? Vu.resolve() : Vu.forEach(t, function(t) { return i.persistence.Ks.Ts(e, t) }).next(function() { i.persistence.Ks.removeTarget(e, o) }) }).then(function() { i.Qs = i.Qs.remove(n), i.Gs.delete(o.target) }) }, oh.prototype.Ko = function(t, n) { var r = this,
                        i = Oi.MIN,
                        o = qa(); return this.persistence.runTransaction("Execute query", "readonly", function(e) { return r.Qo(e, t.Yn()).next(function(t) { if (t) return i = t.lastLimboFreeSnapshotVersion, r.$s.Ho(e, t.targetId).next(function(t) { o = t }) }).next(function() { return r.Bs.Jo(e, t, n ? i : Oi.MIN, n ? o : qa()) }).next(function(t) { return { documents: t, Yo: o } }) }) }, oh.prototype.Xo = function(e) { var n = this; return this.persistence.runTransaction("Remote document keys", "readonly", function(t) { return n.$s.Ho(t, e) }) }, oh.prototype.$o = function() { return this.persistence.$o() }, oh.prototype.Zo = function(t) { this.Hs.th(t) }, oh.prototype.nh = function(t) { this.persistence.nh(t) }, oh.prototype.bo = function(t, i, o) { var e = this,
                        s = i.batch,
                        n = s.keys(),
                        a = Vu.resolve(); return n.forEach(function(r) { a = a.next(function() { return o.xs(t, r) }).next(function(t) { var e = t,
                                n = i.Br.get(r);
                            Tu(null !== n, "ackVersions should contain every doc in the write."), (!e || e.version.B(n) < 0) && ((e = s.zt(r, e, i)) ? o.Fs(e, i.qr) : Tu(!t, "Mutation batch " + s + " applied to document " + t + " resulted in null")) }) }), a.next(function() { return e.Hs.Io(t, s) }) }, oh.prototype.os = function(e) { var n = this; return this.persistence.runTransaction("Collect garbage", "readwrite-primary", function(t) { return e.ws(t, n.Qs) }) }, oh.prototype.ih = function(e) { var n = this,
                        t = this.Qs.get(e); return t ? Promise.resolve(t.target) : this.persistence.runTransaction("Get target data", "readonly", function(t) { return n.$s.be(t, e).next(function(t) { return t ? t.target : null }) }) }, oh.prototype.eh = function() { var r = this; return this.persistence.runTransaction("Get new document changes", "readonly", function(t) { return r.Ys.eh(t, r.Ws) }).then(function(t) { var e = t.rh,
                            n = t.readTime; return r.Ws = n, e }) }, oh.prototype.eo = function() { return p(this, void 0, void 0, function() { var e, n = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return [4, (e = this).persistence.runTransaction("Synchronize last document change read time", "readonly", function(t) { return n.Ys.uh(t) })];
                                case 1:
                                    return e.Ws = t.sent(), [2] } }) }) }, oh.Uo = 3e8, oh);

            function oh(t, e, n) { this.persistence = t, this.Bs = e, this.Ms = new eh, this.Qs = new qi(Su), this.Gs = new Pu(function(t) { return t.canonicalId() }), this.Ws = Oi.MIN, Tu(t.ss, "LocalStore was passed an unstarted persistence implementation"), this.persistence.Ks.zs(this.Ms), this.Hs = t.Js(n), this.Ys = t.Xs(), this.$s = t.Zs(), this.to = new xh(this.Ys, this.Hs, this.persistence.no()), this.Bs.io(this.to) }

            function sh() { this.ks = new Pu(function(t) { return t.toString() }), this.Ns = !1 }

            function ah(t, e) { this.key = t, this.Ps = e }

            function uh() { this.bs = new Zi(nh.Rn), this.ps = new Zi(nh.ys) }

            function hh(t, e) { this.hs = t, this.params = e }

            function ch(t, e) { this.ns = t, this.$r = e, this.es = !1, this.rs = null }

            function fh(t, e, n) { this.Wu = t, this.zu = e, this.Ku = n }

            function lh(t) { this.xu = t, this.buffer = new Zi(Yu), this.ju = 0 }

            function ph(e) { return p(this, void 0, void 0, function() { return v(this, function(t) { if (e.code !== qr.FAILED_PRECONDITION || e.message !== Ch) throw e; return wu("LocalStore", "Unexpectedly lost primary lease"), [2] }) }) }

            function dh(t, e) { return Tu(-1 === e.indexOf("_"), "Client key cannot contain '_', but was '" + e + "'"), "firestore_clients_" + t + "_" + e }

            function vh(t, e, n) { var r = "firestore_mutations_" + t + "_" + n; return e.t() && (r += "_" + e.uid), r }

            function yh(t, e) { return "firestore_targets_" + t + "_" + e } var mh = (Dh.sh = function(t, e, n) { var r = JSON.parse(n),
                        i = "object" == typeof r && -1 !== ["pending", "acknowledged", "rejected"].indexOf(r.state) && (void 0 === r.error || "object" == typeof r.error),
                        o = void 0; return i && r.error && (i = "string" == typeof r.error.message && "string" == typeof r.error.code) && (o = new Mr(r.error.code, r.error.message)), i ? new Dh(t, e, r.state, o) : (bu("SharedClientState", "Failed to parse mutation state for ID '" + e + "': " + n), null) }, Dh.prototype.oh = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, Dh),
                gh = (kh.sh = function(t, e) { var n = JSON.parse(e),
                        r = "object" == typeof n && -1 !== ["not-current", "current", "rejected"].indexOf(n.state) && (void 0 === n.error || "object" == typeof n.error),
                        i = void 0; return r && n.error && (r = "string" == typeof n.error.message && "string" == typeof n.error.code) && (i = new Mr(n.error.code, n.error.message)), r ? new kh(t, n.state, i) : (bu("SharedClientState", "Failed to parse target state for ID '" + t + "': " + e), null) }, kh.prototype.oh = function() { var t = { state: this.state, updateTimeMs: Date.now() }; return this.error && (t.error = { code: this.error.code, message: this.error.message }), JSON.stringify(t) }, kh),
                wh = (Sh.sh = function(t, e) { for (var n = JSON.parse(e), r = "object" == typeof n && n.activeTargetIds instanceof Array, i = Va(), o = 0; r && o < n.activeTargetIds.length; ++o) r = Gs(n.activeTargetIds[o]), i = i.add(n.activeTargetIds[o]); return r ? new Sh(t, i) : (bu("SharedClientState", "Failed to parse client data for instance '" + t + "': " + e), null) }, Sh),
                bh = (Ah.sh = function(t) { var e = JSON.parse(t); return "object" == typeof e && -1 !== ["Unknown", "Online", "Offline"].indexOf(e.onlineState) && "string" == typeof e.clientId ? new Ah(e.clientId, e.onlineState) : (bu("SharedClientState", "Failed to parse online state: " + t), null) }, Ah),
                Eh = (Nh.prototype.hh = function(t) { this.activeTargetIds = this.activeTargetIds.add(t) }, Nh.prototype.ah = function(t) { this.activeTargetIds = this.activeTargetIds.delete(t) }, Nh.prototype.oh = function() { var t = { activeTargetIds: this.activeTargetIds.nt(), updateTimeMs: Date.now() }; return JSON.stringify(t) }, Nh),
                Ih = (Th.ph = function(t) { return !(!t.window || null == t.window.localStorage) }, Th.prototype.start = function() { return p(this, void 0, void 0, function() { var e, n, r, i, o, s, a, u, h, c, f, l = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return Tu(!this.ss, "WebStorageSharedClientState already started"), Tu(null !== this.dh, "syncEngine property must be set before calling start()"), Tu(null !== this.vh, "onlineStateHandler property must be set before calling start()"), [4, this.dh.$o()];
                                case 1:
                                    for (e = t.sent(), n = 0, r = e; n < r.length; n++)(i = r[n]) !== this.lh && (o = this.getItem(dh(this.persistenceKey, i))) && (s = wh.sh(i, o)) && (this.wh[s.clientId] = s); for (this.Rh(), (a = this.storage.getItem(this.Dh)) && (u = this.Sh(a)) && this.Ah(u), h = 0, c = this.bh; h < c.length; h++) f = c[h], this.gh(f); return this.bh = [], this.platform.window.addEventListener("unload", function() { return l.shutdown() }), this.ss = !0, [2] } }) }) }, Th.prototype.Yr = function(t) { this.setItem(this._h, JSON.stringify(t)) }, Th.prototype.Ch = function() { var n = Va(); return Zr(this.wh, function(t, e) { n = n.Qt(e.activeTargetIds) }), n }, Th.prototype.Ph = function(t) { for (var e in this.wh)
                        if (this.wh.hasOwnProperty(e) && this.wh[e].activeTargetIds.has(t)) return !0; return !1 }, Th.prototype.kh = function(t) { this.Nh(t, "pending") }, Th.prototype.Oh = function(t, e, n) { this.Nh(t, e, n), this.Fh(t) }, Th.prototype.Vh = function(t) { var e = "not-current"; if (this.Ph(t)) { var n = this.storage.getItem(yh(this.persistenceKey, t)); if (n) { var r = gh.sh(t, n);
                            r && (e = r.state) } } return this.Uh.hh(t), this.Rh(), e }, Th.prototype.xh = function(t) { this.Uh.ah(t), this.Rh() }, Th.prototype.jh = function(t) { return this.Uh.activeTargetIds.has(t) }, Th.prototype.Lh = function(t) { this.removeItem(yh(this.persistenceKey, t)) }, Th.prototype.qh = function(t, e, n) { this.Bh(t, e, n) }, Th.prototype.ro = function(t, e, n) { var r = this;
                    e.forEach(function(t) { r.Fh(t) }), this.currentUser = t, n.forEach(function(t) { r.kh(t) }) }, Th.prototype.Mh = function(t) { this.Qh(t) }, Th.prototype.shutdown = function() { this.ss && (this.platform.window.removeEventListener("storage", this.mh), this.removeItem(this.yh), this.ss = !1) }, Th.prototype.getItem = function(t) { var e = this.storage.getItem(t); return wu("SharedClientState", "READ", t, e), e }, Th.prototype.setItem = function(t, e) { wu("SharedClientState", "SET", t, e), this.storage.setItem(t, e) }, Th.prototype.removeItem = function(t) { wu("SharedClientState", "REMOVE", t), this.storage.removeItem(t) }, Th.prototype.gh = function(a) { var t = this; if (a.storageArea === this.storage) { if (wu("SharedClientState", "EVENT", a.key, a.newValue), a.key === this.yh) return void bu("Received WebStorage notification for local change. Another client might have garbage-collected our state");
                        this.fh.ou(function() { return p(t, void 0, void 0, function() { var e, n, r, i, o, s; return v(this, function(t) { if (!this.ss) return this.bh.push(a), [2]; if (null === a.key) return [2]; if (this.Ih.test(a.key)) { if (null == a.newValue) return n = this.Gh(a.key), [2, this.Wh(n, null)]; if (e = this.zh(a.key, a.newValue)) return [2, this.Wh(e.clientId, e)] } else if (this.Th.test(a.key)) { if (null !== a.newValue && (r = this.Kh(a.key, a.newValue))) return [2, this.Hh(r)] } else if (this.Eh.test(a.key)) { if (null !== a.newValue && (i = this.Jh(a.key, a.newValue))) return [2, this.Yh(i)] } else if (a.key === this.Dh) { if (null !== a.newValue && (o = this.Sh(a.newValue))) return [2, this.Ah(o)] } else a.key === this._h && (Tu(!!this.Kr, "Missing sequenceNumberHandler"), (s = function(t) { var e = Uu.Xr; if (null != t) try { var n = JSON.parse(t);
                                            Tu("number" == typeof n, "Found non-numeric sequence number"), e = n } catch (t) { bu("SharedClientState", "Failed to read sequence number from WebStorage", t) }
                                        return e }(a.newValue)) !== Uu.Xr && this.Kr(s)); return [2] }) }) }) } }, Object.defineProperty(Th.prototype, "Uh", { get: function() { return this.wh[this.lh] }, enumerable: !0, configurable: !0 }), Th.prototype.Rh = function() { this.setItem(this.yh, this.Uh.oh()) }, Th.prototype.Nh = function(t, e, n) { var r = new mh(this.currentUser, t, e, n),
                        i = vh(this.persistenceKey, this.currentUser, t);
                    this.setItem(i, r.oh()) }, Th.prototype.Fh = function(t) { var e = vh(this.persistenceKey, this.currentUser, t);
                    this.removeItem(e) }, Th.prototype.Qh = function(t) { var e = { clientId: this.lh, onlineState: t };
                    this.storage.setItem(this.Dh, JSON.stringify(e)) }, Th.prototype.Bh = function(t, e, n) { var r = yh(this.persistenceKey, t),
                        i = new gh(t, e, n);
                    this.setItem(r, i.oh()) }, Th.prototype.Gh = function(t) { var e = this.Ih.exec(t); return e ? e[1] : null }, Th.prototype.zh = function(t, e) { var n = this.Gh(t); return Tu(null !== n, "Cannot parse client state key '" + t + "'"), wh.sh(n, e) }, Th.prototype.Kh = function(t, e) { var n = this.Th.exec(t);
                    Tu(null !== n, "Cannot parse mutation batch key '" + t + "'"); var r = Number(n[1]),
                        i = void 0 !== n[2] ? n[2] : null; return mh.sh(new Ur(i), r, e) }, Th.prototype.Jh = function(t, e) { var n = this.Eh.exec(t);
                    Tu(null !== n, "Cannot parse query target key '" + t + "'"); var r = Number(n[1]); return gh.sh(r, e) }, Th.prototype.Sh = function(t) { return bh.sh(t) }, Th.prototype.Hh = function(e) { return p(this, void 0, void 0, function() { return v(this, function(t) { return e.user.uid !== this.currentUser.uid ? (wu("SharedClientState", "Ignoring mutation for non-active user " + e.user.uid), [2]) : [2, this.dh.Xh(e.batchId, e.state, e.error)] }) }) }, Th.prototype.Yh = function(t) { return this.dh.$h(t.targetId, t.state, t.error) }, Th.prototype.Wh = function(t, e) { var n = this,
                        r = this.Ch();
                    e ? this.wh[t] = e : delete this.wh[t]; var i = this.Ch(),
                        o = [],
                        s = []; return i.forEach(function(e) { return p(n, void 0, void 0, function() { return v(this, function(t) { return r.has(e) || o.push(e), [2] }) }) }), r.forEach(function(e) { return p(n, void 0, void 0, function() { return v(this, function(t) { return i.has(e) || s.push(e), [2] }) }) }), this.dh.Zh(o, s) }, Th.prototype.Ah = function(t) { this.wh[t.clientId] && this.vh(t.onlineState) }, Th);

            function Th(t, e, n, r, i) { if (this.fh = t, this.platform = e, this.persistenceKey = n, this.lh = r, this.dh = null, this.vh = null, this.Kr = null, this.wh = {}, this.mh = this.gh.bind(this), this.ss = !1, this.bh = [], !Th.ph(this.platform)) throw new Mr(qr.UNIMPLEMENTED, "LocalStorage is not available on this platform."); var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
                this.storage = this.platform.window.localStorage, this.currentUser = i, this.yh = dh(this.persistenceKey, this.lh), this._h = "firestore_sequence_number_" + this.persistenceKey, this.wh[this.lh] = new Eh, this.Ih = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), this.Th = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Eh = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), this.Dh = "firestore_online_state_" + this.persistenceKey, this.platform.window.addEventListener("storage", this.mh) }

            function Nh() { this.activeTargetIds = Va() }

            function Ah(t, e) { this.clientId = t, this.onlineState = e }

            function Sh(t, e) { this.clientId = t, this.activeTargetIds = e }

            function kh(t, e, n) { this.targetId = t, this.state = e, Tu(void 0 !== (this.error = n) == ("rejected" === e), "QueryTargetMetadata must contain an error iff state is 'rejected'") }

            function Dh(t, e, n, r) { this.user = t, this.batchId = e, this.state = n, Tu(void 0 !== (this.error = r) == ("rejected" === n), "MutationMetadata must contain an error iff state is 'rejected'") } var Rh = (qh.prototype.kh = function(t) {}, qh.prototype.Oh = function(t, e, n) {}, qh.prototype.Vh = function(t) { return this.tc.hh(t), this.nc[t] || "not-current" }, qh.prototype.qh = function(t, e, n) { this.nc[t] = e }, qh.prototype.xh = function(t) { this.tc.ah(t) }, qh.prototype.jh = function(t) { return this.tc.activeTargetIds.has(t) }, qh.prototype.Lh = function(t) { delete this.nc[t] }, qh.prototype.Ch = function() { return this.tc.activeTargetIds }, qh.prototype.Ph = function(t) { return this.tc.activeTargetIds.has(t) }, qh.prototype.start = function() { return this.tc = new Eh, Promise.resolve() }, qh.prototype.ro = function(t, e, n) {}, qh.prototype.Mh = function(t) {}, qh.prototype.shutdown = function() {}, qh.prototype.Yr = function(t) {}, qh),
                Ch = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",
                Oh = (Uh.prototype.ec = function(t) { this.ic.push(t) }, Uh.prototype.rc = function() { this.ic.forEach(function(t) { return t() }) }, Uh),
                xh = (_h.prototype.Bo = function(e, n) { var r = this; return this.Hs.oc(e, n).next(function(t) { return r.hc(e, n, t) }) }, _h.prototype.hc = function(t, r, i) { return this.uc.xs(t, r).next(function(t) { for (var e = 0, n = i; e < n.length; e++) t = n[e].Wt(r, t); return t }) }, _h.prototype.cc = function(t, e, i) { var o = Oa(); return e.forEach(function(t, e) { for (var n = 0, r = i; n < r.length; n++) e = r[n].Wt(t, e);
                        o = o.dt(t, e) }), o }, _h.prototype.so = function(e, t) { var n = this; return this.uc.getEntries(e, t).next(function(t) { return n.Vo(e, t) }) }, _h.prototype.Vo = function(r, i) { var o = this; return this.Hs.ac(r, i).next(function(t) { var e = o.cc(r, i, t),
                            n = Ca(); return e.forEach(function(t, e) { e = e || new Ts(t, Oi.q()), n = n.dt(t, e) }), n }) }, _h.prototype.Jo = function(t, e, n) { return e.Nn() ? this.fc(t, e.path) : e.ui() ? this.lc(t, e, n) : this.dc(t, e, n) }, _h.prototype.fc = function(t, e) { return this.Bo(t, new Ui(e)).next(function(t) { var e = La(); return t instanceof Is && (e = e.dt(t.key, t)), e }) }, _h.prototype.lc = function(n, r, i) { var o = this;
                    Tu(r.path.Y(), "Currently we only support collection group queries at the root."); var s = r.collectionGroup,
                        a = La(); return this.sc.vc(n, s).next(function(t) { return Vu.forEach(t, function(t) { var e = r.Hn(t.child(s)); return o.dc(n, e, i).next(function(t) { t.forEach(function(t, e) { a = a.dt(t, e) }) }) }).next(function() { return a }) }) }, _h.prototype.dc = function(e, n, t) { var c, f, r = this; return this.uc.Jo(e, n, t).next(function(t) { return c = t, r.Hs.wc(e, n) }).next(function(t) { return f = t, r.mc(e, f, c).next(function(t) { c = t; for (var e = 0, n = f; e < n.length; e++)
                                for (var r = n[e], i = 0, o = r.mutations; i < o.length; i++) { var s = o[i],
                                        a = s.key,
                                        u = c.get(a),
                                        h = s.Wt(u, u, r.En);
                                    c = h instanceof Is ? c.dt(a, h) : c.remove(a) } }) }).next(function() { return c.forEach(function(t, e) { n.matches(e) || (c = c.remove(t)) }), c }) }, _h.prototype.mc = function(t, e, n) { for (var r = qa(), i = 0, o = e; i < o.length; i++)
                        for (var s = 0, a = o[i].mutations; s < a.length; s++) { var u = a[s];
                            u instanceof ko && null === n.get(u.key) && (r = r.add(u.key)) }
                    var h = n; return this.uc.getEntries(t, r).next(function(t) { return t.forEach(function(t, e) { null !== e && e instanceof Is && (h = h.dt(t, e)) }), h }) }, _h),
                Lh = (Ph.prototype.io = function(t) { this.gc = t }, Ph.prototype.Jo = function(e, r, i, o) { var s = this; return Tu(void 0 !== this.gc, "setLocalDocumentsView() not called"), r.Jn() || i.isEqual(Oi.MIN) ? this.bc(e, r) : this.gc.so(e, o).next(function(t) { var n = s.pc(r, t); return (r.ii() || r.ei()) && s.yc(r.Fn, n, o, i) ? s.bc(e, r) : (mu() <= 0 && wu("IndexFreeQueryEngine", "Re-using previous result from %s to execute query: %s", i.toString(), r.toString()), s.gc.Jo(e, r, i).next(function(e) { return n.forEach(function(t) { e = e.dt(t.key, t) }), e })) }) }, Ph.prototype.pc = function(n, t) { var r = new Zi(function(t, e) { return n.Xn(t, e) }); return t.forEach(function(t, e) { e instanceof Is && n.matches(e) && (r = r.add(e)) }), r }, Ph.prototype.yc = function(t, e, n, r) { if (n.size !== e.size) return !0; var i = "F" === t ? e.last() : e.first(); return !!i && (i.hasPendingWrites || 0 < i.version.B(r)) }, Ph.prototype.bc = function(t, e) { return mu() <= 0 && wu("IndexFreeQueryEngine", "Using full collection scan to execute query: %s", e.toString()), this.gc.Jo(t, e, Oi.MIN) }, Ph);

            function Ph() {}

            function _h(t, e, n) { this.uc = t, this.Hs = e, this.sc = n }

            function Uh() { this.ic = [] }

            function qh() { this.tc = new Eh, this.nc = {}, this.dh = null, this.vh = null, this.Kr = null }

            function Mh(t) { for (var e = "", n = 0; n < t.length; n++) 0 < e.length && (e = Fh(e)), e = Vh(t.get(n), e); return Fh(e) }

            function Vh(t, e) { for (var n = e, r = t.length, i = 0; i < r; i++) { var o = t.charAt(i); switch (o) {
                        case "\0":
                            n += ""; break;
                        case "":
                            n += ""; break;
                        default:
                            n += o } } return n }

            function Fh(t) { return t + "" }

            function jh(t) { var e = t.length; if (Tu(2 <= e, "Invalid path " + t), 2 === e) return Tu("" === t.charAt(0) && "" === t.charAt(1), "Non-empty path " + t + " had length 2"), Li.rt; for (var n = e - 2, r = [], i = "", o = 0; o < e;) { var s = t.indexOf("", o); switch ((s < 0 || n < s) && Iu('Invalid encoded resource path: "' + t + '"'), t.charAt(s + 1)) {
                        case "":
                            var a = t.substring(o, s),
                                u = void 0;
                            0 === i.length ? u = a : (u = i += a, i = ""), r.push(u); break;
                        case "":
                            i += t.substring(o, s), i += "\0"; break;
                        case "":
                            i += t.substring(o, s + 1); break;
                        default:
                            Iu('Invalid encoded resource path: "' + t + '"') } o = s + 2 } return new Li(r) } var Gh = (Wh.prototype.Ic = function(t, e) { return this._c.add(e), Vu.resolve() }, Wh.prototype.vc = function(t, e) { return Vu.resolve(this._c.getEntries(e)) }, Wh),
                Bh = (Kh.prototype.add = function(t) { Tu(t.length % 2 == 1, "Expected a collection path."); var e = t.$(),
                        n = t.J(),
                        r = this.index[e] || new Zi(Li.W),
                        i = !r.has(n); return this.index[e] = r.add(n), i }, Kh.prototype.has = function(t) { var e = t.$(),
                        n = t.J(),
                        r = this.index[e]; return r && r.has(n) }, Kh.prototype.getEntries = function(t) { return (this.index[t] || new Zi(Li.W)).nt() }, Kh),
                zh = (Hh.prototype.Dc = function(t) { return Vu.resolve(0 === this.Hs.length) }, Hh.prototype.vo = function(t, e, n) { var r = e.batchId,
                        i = this.Rc(r, "acknowledged");
                    Tu(0 === i, "Can only acknowledge the first batch in the mutation queue"); var o = this.Hs[i]; return Tu(r === o.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + o.batchId), this.lastStreamToken = n, Vu.resolve() }, Hh.prototype.Eo = function(t) { return Vu.resolve(this.lastStreamToken) }, Hh.prototype.Do = function(t, e) { return this.lastStreamToken = e, Vu.resolve() }, Hh.prototype.fo = function(t, e, n, r) { Tu(0 !== r.length, "Mutation batches should not be empty"); var i = this.Tc;
                    this.Tc++, 0 < this.Hs.length && Tu(this.Hs[this.Hs.length - 1].batchId < i, "Mutation batchIDs must be monotonically increasing order"); var o = new xu(i, e, n, r);
                    this.Hs.push(o); for (var s = 0, a = r; s < a.length; s++) { var u = a[s];
                        this.Ec = this.Ec.add(new nh(u.key, i)), this.sc.Ic(t, u.key.path.J()) } return Vu.resolve(o) }, Hh.prototype._o = function(t, e) { return Vu.resolve(this.Sc(e)) }, Hh.prototype.do = function(t, e) { var n = this.Sc(e); return Tu(null != n, "Failed to find local mutation batch."), Vu.resolve(n.keys()) }, Hh.prototype.Lo = function(t, e) { var n = e + 1,
                        r = this.Ac(n),
                        i = r < 0 ? 0 : r; return Vu.resolve(this.Hs.length > i ? this.Hs[i] : null) }, Hh.prototype.To = function() { return Vu.resolve(0 === this.Hs.length ? -1 : this.Tc - 1) }, Hh.prototype.uo = function(t) { return Vu.resolve(this.Hs.slice()) }, Hh.prototype.oc = function(t, n) { var r = this,
                        e = new nh(n, 0),
                        i = new nh(n, Number.POSITIVE_INFINITY),
                        o = []; return this.Ec.qt([e, i], function(t) { Tu(n.isEqual(t.key), "Should only iterate over a single key's batches"); var e = r.Sc(t.Ps);
                        Tu(null !== e, "Batches in the index must exist in the main table"), o.push(e) }), Vu.resolve(o) }, Hh.prototype.ac = function(t, e) { var r = this,
                        i = new Zi(Su); return e.forEach(function(e) { var t = new nh(e, 0),
                            n = new nh(e, Number.POSITIVE_INFINITY);
                        r.Ec.qt([t, n], function(t) { Tu(e.isEqual(t.key), "For each key, should only iterate over a single key's batches"), i = i.add(t.Ps) }) }), Vu.resolve(this.Cc(i)) }, Hh.prototype.wc = function(t, e) { Tu(!e.ui(), "CollectionGroup queries should be handled in LocalDocumentsView"); var n = e.path,
                        r = n.length + 1,
                        i = n;
                    Ui.ct(i) || (i = i.child("")); var o = new nh(new Ui(i), 0),
                        s = new Zi(Su); return this.Ec.Bt(function(t) { var e = t.key.path; return !!n.Z(e) && (e.length === r && (s = s.add(t.Ps)), !0) }, o), Vu.resolve(this.Cc(s)) }, Hh.prototype.Cc = function(t) { var n = this,
                        r = []; return t.forEach(function(t) { var e = n.Sc(t);
                        null !== e && r.push(e) }), r }, Hh.prototype.Io = function(n, r) { var i = this;
                    Tu(0 === this.Rc(r.batchId, "removed"), "Can only remove the first entry of the mutation queue"), this.Hs.shift(); var o = this.Ec; return Vu.forEach(r.mutations, function(t) { var e = new nh(t.key, r.batchId); return o = o.delete(e), i.Ks.Pc(n, t.key) }).next(function() { i.Ec = o }) }, Hh.prototype.th = function(t) {}, Hh.prototype.Cs = function(t, e) { var n = new nh(e, 0),
                        r = this.Ec.Mt(n); return Vu.resolve(e.isEqual(r && r.key)) }, Hh.prototype.po = function(t) { return 0 === this.Hs.length && Tu(this.Ec.Y(), "Document leak -- detected dangling mutation references when queue is empty."), Vu.resolve() }, Hh.prototype.Rc = function(t, e) { var n = this.Ac(t); return Tu(0 <= n && n < this.Hs.length, "Batches must exist to be " + e), n }, Hh.prototype.Ac = function(t) { return 0 === this.Hs.length ? 0 : t - this.Hs[0].batchId }, Hh.prototype.Sc = function(t) { var e = this.Ac(t); if (e < 0 || e >= this.Hs.length) return null; var n = this.Hs[e]; return Tu(n.batchId === t, "If found batch must match"), n }, Hh);

            function Hh(t, e) { this.sc = t, this.Ks = e, this.Hs = [], this.Tc = 1, this.lastStreamToken = wi.k, this.Ec = new Zi(nh.Rn) }

            function Kh() { this.index = {} }

            function Wh() { this._c = new Bh } var Jh, Yh, Qh, Xh, $h = (Ac.prototype.Fs = function(t, e, n) { Tu(!n.isEqual(Oi.MIN), "Cannot add a document with a read time of zero"); var r = e.key,
                        i = this.docs.get(r),
                        o = i ? i.size : 0,
                        s = this.kc(e); return this.docs = this.docs.dt(r, { Nc: e, size: s, readTime: n }), this.size += s - o, this.sc.Ic(t, r.path.J()) }, Ac.prototype.Us = function(t) { var e = this.docs.get(t);
                    e && (this.docs = this.docs.remove(t), this.size -= e.size) }, Ac.prototype.xs = function(t, e) { var n = this.docs.get(e); return Vu.resolve(n ? n.Nc : null) }, Ac.prototype.getEntries = function(t, e) { var n = this,
                        r = Oa(); return e.forEach(function(t) { var e = n.docs.get(t);
                        r = r.dt(t, e ? e.Nc : null) }), Vu.resolve(r) }, Ac.prototype.Jo = function(t, e, n) { Tu(!e.ui(), "CollectionGroup queries should be handled in LocalDocumentsView"); for (var r = La(), i = new Ui(e.path.child("")), o = this.docs._t(i); o.St();) { var s = o.Rt(),
                            a = s.key,
                            u = s.value,
                            h = u.Nc,
                            c = u.readTime; if (!e.path.Z(a.path)) break;
                        c.B(n) <= 0 || h instanceof Is && e.matches(h) && (r = r.dt(h.key, h)) } return Vu.resolve(r) }, Ac.prototype.Oc = function(t, e) { return Vu.forEach(this.docs, function(t) { return e(t) }) }, Ac.prototype.eh = function(t, e) { throw new Error("getNewDocumentChanges() is not supported with MemoryPersistence") }, Ac.prototype.uh = function(t) { return Vu.resolve(Oi.MIN) }, Ac.prototype.wo = function(t) { return new Ac.Fc(this) }, Ac.prototype.Vc = function(t) { return Vu.resolve(this.size) }, Ac.Fc = (t(Sc, Xh = rh), Sc.prototype.qs = function(n) { var r = this,
                        i = []; return this.ks.forEach(function(t, e) { e ? i.push(r.Uc.Fs(n, e, r.readTime)) : r.Uc.Us(t) }), Vu.Vu(i) }, Sc.prototype.js = function(t, e) { return this.Uc.xs(t, e) }, Sc.prototype.Ls = function(t, e) { return this.Uc.getEntries(t, e) }, Sc), Ac),
                Zh = (Nc.prototype.next = function() { var t = this.Lc; return this.Lc += 2, t }, Nc.prototype.after = function(t) { return this.jc(t + 2), this.next() }, Nc.prototype.jc = function(t) { Tu((1 & t) === this.xc, "Cannot supply target ID from different generator ID"), this.Lc = t }, Nc.qc = function() { return new Nc(0, 2) }, Nc.Bc = function() { return new Nc(1) }, Nc),
                tc = (Tc.prototype.oe = function(t, n) { return this.Mc.forEach(function(t, e) { return n(e) }), Vu.resolve() }, Tc.prototype.Ro = function(t) { return Vu.resolve(this.lastRemoteSnapshotVersion) }, Tc.prototype.zc = function(t) { return Vu.resolve(this.Qc) }, Tc.prototype.Go = function(t) { var e = this.Wc.after(this.highestTargetId); return this.highestTargetId = e, Vu.resolve(e) }, Tc.prototype.Fo = function(t, e, n) { return n && (this.lastRemoteSnapshotVersion = n), e > this.Qc && (this.Qc = e), Vu.resolve() }, Tc.prototype.Kc = function(t) { this.Mc.set(t.target, t); var e = t.targetId;
                    e > this.highestTargetId && (this.highestTargetId = e), t.sequenceNumber > this.Qc && (this.Qc = t.sequenceNumber) }, Tc.prototype.Wo = function(t, e) { return Tu(!this.Mc.has(e.target), "Adding a target that already exists"), this.Kc(e), this.targetCount += 1, Vu.resolve() }, Tc.prototype.No = function(t, e) { return Tu(this.Mc.has(e.target), "Updating a non-existent target"), this.Kc(e), Vu.resolve() }, Tc.prototype.Hc = function(t, e) { return Tu(0 < this.targetCount, "Removing a target from an empty cache"), Tu(this.Mc.has(e.target), "Removing a non-existent target from the cache"), this.Mc.delete(e.target), this.Gc.Rs(e.targetId), this.targetCount -= 1, Vu.resolve() }, Tc.prototype.ds = function(n, r, i) { var o = this,
                        s = 0,
                        a = []; return this.Mc.forEach(function(t, e) { e.sequenceNumber <= r && null === i.get(e.targetId) && (o.Mc.delete(t), a.push(o.Jc(n, e.targetId)), s++) }), Vu.Vu(a).next(function() { return s }) }, Tc.prototype.Yc = function(t) { return Vu.resolve(this.targetCount) }, Tc.prototype.Qo = function(t, e) { var n = this.Mc.get(e) || null; return Vu.resolve(n) }, Tc.prototype.be = function(t, e) { return Iu("Not yet implemented.") }, Tc.prototype.Co = function(e, t, n) { this.Gc.Is(t, n); var r = this.persistence.Ks,
                        i = []; return r && t.forEach(function(t) { i.push(r._s(e, t)) }), Vu.Vu(i) }, Tc.prototype.Ao = function(e, t, n) { this.Gc.Ds(t, n); var r = this.persistence.Ks,
                        i = []; return r && t.forEach(function(t) { i.push(r.Ts(e, t)) }), Vu.Vu(i) }, Tc.prototype.Jc = function(t, e) { return this.Gc.Rs(e), Vu.resolve() }, Tc.prototype.Ho = function(t, e) { var n = this.Gc.As(e); return Vu.resolve(n) }, Tc.prototype.Cs = function(t, e) { return Vu.resolve(this.Gc.Cs(e)) }, Tc),
                ec = "You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",
                nc = (Ic.prototype.shutdown = function() { return this.Zc = !1, Promise.resolve() }, Object.defineProperty(Ic.prototype, "ss", { get: function() { return this.Zc }, enumerable: !0, configurable: !0 }), Ic.prototype.$o = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { return [2, [this.clientId]] }) }) }, Ic.prototype.na = function(t) { return t(!0) }, Ic.prototype.ia = function() {}, Ic.prototype.nh = function(t) {}, Ic.prototype.no = function() { return this.sc }, Ic.prototype.Js = function(t) { var e = this.Xc[t.i()]; return e || (e = new zh(this.sc, this.Ks), this.Xc[t.i()] = e), e }, Ic.prototype.Zs = function() { return this.$s }, Ic.prototype.Xs = function() { return this.uc }, Ic.prototype.runTransaction = function(t, e, n) { var r = this;
                    wu("MemoryPersistence", "Starting transaction:", t); var i = new rc(this.$c.next()); return this.Ks.ea(), n(i).next(function(t) { return r.Ks.ra(i).next(function() { return t }) }).Ou().then(function(t) { return i.rc(), t }) }, Ic.prototype.ua = function(e, n) { return Vu.Uu((t = this.Xc, r = [], Zr(t, function(t, e) { return r.push(e) }), r).map(function(t) { return function() { return t.Cs(e, n) } })); var t, r }, Ic),
                rc = (t(Ec, Qh = Oh), Ec),
                ic = (Object.defineProperty(bc.prototype, "ha", { get: function() { if (this.oa) return this.oa; throw Iu("orphanedDocuments is only valid during a transaction.") }, enumerable: !0, configurable: !0 }), bc.prototype.zs = function(t) { this.sa = t }, bc.prototype._s = function(t, e) { return this.ha.delete(e), Vu.resolve() }, bc.prototype.Ts = function(t, e) { return this.ha.add(e), Vu.resolve() }, bc.prototype.Pc = function(t, e) { return this.ha.add(e), Vu.resolve() }, bc.prototype.removeTarget = function(t, e) { var n = this,
                        r = this.persistence.Zs(); return r.Ho(t, e.targetId).next(function(t) { t.forEach(function(t) { return n.ha.add(t) }) }).next(function() { return r.Hc(t, e) }) }, bc.prototype.ea = function() { this.oa = new Set }, bc.prototype.ra = function(t) { var n = this,
                        r = this.persistence.Xs().wo(); return Vu.forEach(this.ha, function(e) { return n.ca(t, e).next(function(t) { t || r.Us(e) }) }).next(function() { return n.oa = null, r.apply(t) }) }, bc.prototype.Oo = function(t, e) { var n = this; return this.ca(t, e).next(function(t) { t ? n.ha.delete(e) : n.ha.add(e) }) }, bc.prototype.ta = function(t) { return 0 }, bc.prototype.ca = function(t, e) { var n = this; return Vu.Uu([function() { return n.persistence.Zs().Cs(t, e) }, function() { return n.persistence.ua(t, e) }, function() { return Vu.resolve(n.sa.Cs(e)) }]) }, bc),
                oc = (wc.prototype.initialize = function(t, e, n, r, i, o) { if (o.aa) throw new Mr(qr.FAILED_PRECONDITION, ec); return this.clientId = r, Promise.resolve() }, wc.prototype.fa = function() { var t = !1; return { ss: t, start: function() { return t = !0 }, stop: function() { return t = !1 } } }, wc.prototype.la = function() { return Tu(!!this.clientId, "initialize() not called"), new nc(this.clientId, function(t) { return new ic(t) }) }, wc.prototype.da = function() { return new Rh }, wc.prototype.clearPersistence = function() { throw new Mr(qr.FAILED_PRECONDITION, ec) }, wc),
                sc = (gc.prototype.reset = function() { this.ga = 0 }, gc.prototype.ya = function() { this.ga = this.ma }, gc.prototype._a = function(t) { var e = this;
                    this.cancel(); var n = Math.floor(this.ga + this.Ia()),
                        r = Math.max(0, Date.now() - this.pa),
                        i = Math.max(0, n - r);
                    0 < this.ga && wu("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.ga + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), this.ba = this.fh.yu(this.Zr, i, function() { return e.pa = Date.now(), t() }), this.ga *= this.wa, this.ga < this.va && (this.ga = this.va), this.ga > this.ma && (this.ga = this.ma) }, gc.prototype.cancel = function() { null !== this.ba && (this.ba.cancel(), this.ba = null) }, gc.prototype.Ia = function() { return (Math.random() - .5) * this.ga }, gc),
                ac = (mc.prototype.Aa = function() { return 1 === this.state || 2 === this.state || 4 === this.state }, mc.prototype.Ca = function() { return 2 === this.state }, mc.prototype.start = function() { 3 !== this.state ? (Tu(0 === this.state, "Already started"), this.auth()) : this.Pa() }, mc.prototype.stop = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.Aa() ? [4, this.close(0)] : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2] } }) }) }, mc.prototype.ka = function() { Tu(!this.Aa(), "Can only inhibit backoff in a stopped state"), this.state = 0, this.Sa.reset() }, mc.prototype.Na = function() { var t = this;
                    this.Ca() && null === this.Ra && (this.Ra = this.fh.yu(this.Ta, 6e4, function() { return t.Oa() })) }, mc.prototype.Fa = function(t) { this.Va(), this.stream.send(t) }, mc.prototype.Oa = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { return this.Ca() ? [2, this.close(0)] : [2] }) }) }, mc.prototype.Va = function() { this.Ra && (this.Ra.cancel(), this.Ra = null) }, mc.prototype.close = function(e, n) { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return Tu(this.Aa(), "Only started streams should be closed."), Tu(3 === e || Fs(n), "Can't provide an error when not in an error state."), this.Va(), this.Sa.cancel(), this.Da++, 3 !== e ? this.Sa.reset() : n && n.code === qr.RESOURCE_EXHAUSTED ? (bu(n.toString()), bu("Using maximum backoff delay to prevent overloading the backend."), this.Sa.ya()) : n && n.code === qr.UNAUTHENTICATED && this.Ea.l(), null !== this.stream && (this.Ua(), this.stream.close(), this.stream = null), this.state = e, [4, this.listener.xa(n)];
                                case 1:
                                    return t.sent(), [2] } }) }) }, mc.prototype.Ua = function() {}, mc.prototype.auth = function() { var n = this;
                    Tu(0 === this.state, "Must be in initial state to auth"), this.state = 1; var t = this.ja(this.Da),
                        e = this.Da;
                    this.Ea.getToken().then(function(t) { n.Da === e && n.La(t) }, function(e) { t(function() { var t = new Mr(qr.UNKNOWN, "Fetching auth token failed: " + e.message); return n.qa(t) }) }) }, mc.prototype.La = function(t) { var e = this;
                    Tu(1 === this.state, "Trying to start stream in a non-starting state"); var n = this.ja(this.Da);
                    this.stream = this.Ba(t), this.stream.Ma(function() { n(function() { return Tu(1 === e.state, "Expected stream to be in state Starting, but was " + e.state), e.state = 2, e.listener.Ma() }) }), this.stream.xa(function(t) { n(function() { return e.qa(t) }) }), this.stream.onMessage(function(t) { n(function() { return e.onMessage(t) }) }) }, mc.prototype.Pa = function() { var t = this;
                    Tu(3 === this.state, "Should only perform backoff when in Error state"), this.state = 4, this.Sa._a(function() { return p(t, void 0, void 0, function() { return v(this, function(t) { return Tu(4 === this.state, "Backoff elapsed but state is now: " + this.state), this.state = 0, this.start(), Tu(this.Aa(), "PersistentStream should have started"), [2] }) }) }) }, mc.prototype.qa = function(t) { return Tu(this.Aa(), "Can't handle server close on non-started stream"), wu("PersistentStream", "close with error: " + t), this.stream = null, this.close(3, t) }, mc.prototype.ja = function(e) { var n = this; return function(t) { n.fh.ou(function() { return n.Da === e ? t() : (wu("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), Promise.resolve()) }) } }, mc),
                uc = (t(yc, Yh = ac), yc.prototype.Ba = function(t) { return this.connection.Qa("Listen", t) }, yc.prototype.onMessage = function(t) { this.Sa.reset(); var e = this.serializer.Xe(t),
                        n = this.serializer.Ze(t); return this.listener.Ga(e, n) }, yc.prototype.watch = function(t) { var e = {};
                    e.database = this.serializer.Ue, e.addTarget = this.serializer.Yn(t); var n = this.serializer._r(t);
                    n && (e.labels = n), this.Fa(e) }, yc.prototype.Wa = function(t) { var e = {};
                    e.database = this.serializer.Ue, e.removeTarget = t, this.Fa(e) }, yc),
                hc = (t(vc, Jh = ac), Object.defineProperty(vc.prototype, "Ka", { get: function() { return this.za }, enumerable: !0, configurable: !0 }), vc.prototype.start = function() { this.za = !1, Jh.prototype.start.call(this) }, vc.prototype.Ua = function() { this.za && this.Ha([]) }, vc.prototype.Ba = function(t) { return this.connection.Qa("Write", t) }, vc.prototype.onMessage = function(t) { if (Tu(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = this.serializer.De(t.streamToken), this.za) { this.Sa.reset(); var e = this.serializer.cr(t.writeResults, t.commitTime),
                            n = this.serializer.fromVersion(t.commitTime); return this.listener.Ja(n, e) } return Tu(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), this.za = !0, this.listener.Ya() }, vc.prototype.Xa = function() { Tu(this.Ca(), "Writing handshake requires an opened stream"), Tu(!this.za, "Handshake already completed"); var t = {};
                    t.database = this.serializer.Ue, this.Fa(t) }, vc.prototype.Ha = function(t) { var e = this;
                    Tu(this.Ca(), "Writing mutations requires an opened stream"), Tu(this.za, "Handshake must be complete before writing mutations"), Tu(0 < this.lastStreamToken.P(), "Trying to write mutation without a token"); var n = { streamToken: this.serializer.Ee(this.lastStreamToken), writes: t.map(function(t) { return e.serializer.tr(t) }) };
                    this.Fa(n) }, vc),
                cc = (dc.prototype.$a = function(t) { return new hc(this.fh, this.connection, this.credentials, this.serializer, t) }, dc.prototype.Za = function(t) { return new uc(this.fh, this.connection, this.credentials, this.serializer, t) }, dc.prototype.commit = function(t) { var e = this,
                        n = { database: this.serializer.Ue, writes: t.map(function(t) { return e.serializer.tr(t) }) }; return this.tf("Commit", n).then(function(t) { return e.serializer.cr(t.writeResults, t.commitTime) }) }, dc.prototype.lookup = function(e) { var i = this,
                        t = { database: this.serializer.Ue, documents: e.map(function(t) { return i.serializer.ke(t) }) }; return this.nf("BatchGetDocuments", t).then(function(t) { var n = Ca();
                        t.forEach(function(t) { var e = i.serializer.He(t);
                            n = n.dt(e.key, e) }); var r = []; return e.forEach(function(t) { var e = n.get(t);
                            Tu(!!e, "Missing entity in write response for " + t), r.push(e) }), r }) }, dc.prototype.tf = function(e, n) { var r = this; return this.credentials.getToken().then(function(t) { return r.connection.tf(e, n, t) }).catch(function(t) { throw t.code === qr.UNAUTHENTICATED && r.credentials.l(), t }) }, dc.prototype.nf = function(e, n) { var r = this; return this.credentials.getToken().then(function(t) { return r.connection.nf(e, n, t) }).catch(function(t) { throw t.code === qr.UNAUTHENTICATED && r.credentials.l(), t }) }, dc),
                fc = (pc.documentId = function() { return pc.ef }, pc.prototype.isEqual = function(t) { if (!(t instanceof pc)) throw vi("isEqual", "FieldPath", 1, t); return this.if.isEqual(t.if) }, pc.ef = new pc(_i.ot().it()), pc),
                lc = new RegExp("[~\\*/\\[\\]]");

            function pc() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];! function(t, e, n, r) { if (!(e instanceof Array) || e.length < r) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " argument to be an array with at least " + gi(r, "element") + ".") }("FieldPath", t, "fieldNames", 1); for (var n = 0; n < t.length; ++n)
                    if (oi("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new Mr(qr.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                this.if = new _i(t) }

            function dc(t, e, n, r) { this.fh = t, this.connection = e, this.credentials = n, this.serializer = r }

            function vc(t, e, n, r, i) { var o = Jh.call(this, t, "write_stream_connection_backoff", "write_stream_idle", e, n, i) || this; return o.serializer = r, o.za = !1, o.lastStreamToken = wi.k, o }

            function yc(t, e, n, r, i) { var o = Yh.call(this, t, "listen_stream_connection_backoff", "listen_stream_idle", e, n, i) || this; return o.serializer = r, o }

            function mc(t, e, n, r, i, o) { this.fh = t, this.Ta = n, this.connection = r, this.Ea = i, this.listener = o, this.state = 0, this.Da = 0, this.Ra = null, this.stream = null, this.Sa = new sc(t, e) }

            function gc(t, e, n, r, i) { void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), this.fh = t, this.Zr = e, this.va = n, this.wa = r, this.ma = i, this.ga = 0, this.ba = null, this.pa = Date.now(), this.reset() }

            function wc() {}

            function bc(t) { this.persistence = t, this.sa = null, this.oa = null }

            function Ec(t) { var e = Qh.call(this) || this; return e.Po = t, e }

            function Ic(t, e) { var n = this;
                this.clientId = t, this.Xc = {}, this.$c = new Uu(0), this.Zc = !1, this.Zc = !0, this.Ks = e(this), this.$s = new tc(this), this.sc = new Gh, this.uc = new $h(this.sc, function(t) { return n.Ks.ta(t) }) }

            function Tc(t) { this.persistence = t, this.Mc = new Pu(function(t) { return t.canonicalId() }), this.lastRemoteSnapshotVersion = Oi.MIN, this.highestTargetId = 0, this.Qc = 0, this.Gc = new eh, this.targetCount = 0, this.Wc = Zh.qc() }

            function Nc(t, e) { Tu((1 & (this.xc = t)) === t, "Generator ID " + t + " contains more than 1 reserved bits"), this.jc(void 0 !== e ? e : this.xc) }

            function Ac(t, e) { this.sc = t, this.kc = e, this.docs = new qi(Ui.W), this.size = 0 }

            function Sc(t) { var e = Xh.call(this) || this; return e.Uc = t, e } var kc, Dc, Rc, Cc, Oc, xc = (Yc.delete = function() { return ei("FieldValue.delete", arguments), Lc.instance }, Yc.serverTimestamp = function() { return ei("FieldValue.serverTimestamp", arguments), Pc.instance }, Yc.arrayUnion = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return ri("FieldValue.arrayUnion", arguments, 1), new _c(t) }, Yc.arrayRemove = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]; return ri("FieldValue.arrayRemove", arguments, 1), new Uc(t) }, Yc.increment = function(t) { return oi("FieldValue.increment", "number", 1, t), ni("FieldValue.increment", arguments, 1), new qc(t) }, Yc.prototype.isEqual = function(t) { return this === t }, Yc),
                Lc = (t(Jc, Oc = xc), Jc.instance = new Jc, Jc),
                Pc = (t(Wc, Cc = xc), Wc.instance = new Wc, Wc),
                _c = (t(Kc, Rc = xc), Kc),
                Uc = (t(Hc, Dc = xc), Hc),
                qc = (t(zc, kc = xc), zc),
                Mc = Yr(xc, "Use FieldValue.<field>() instead."),
                Vc = /^__.*__$/,
                Fc = (Bc.prototype.hf = function(t, e) { var n = []; return null !== this.sn ? n.push(new ko(t, this.data, this.sn, e)) : n.push(new So(t, this.data, e)), 0 < this.fieldTransforms.length && n.push(new Do(t, this.fieldTransforms)), n }, Bc),
                jc = (Gc.prototype.hf = function(t, e) { var n = [new ko(t, this.data, this.sn, e)]; return 0 < this.fieldTransforms.length && n.push(new Do(t, this.fieldTransforms)), n }, Gc);

            function Gc(t, e, n) { this.data = t, this.sn = e, this.fieldTransforms = n }

            function Bc(t, e, n) { this.data = t, this.sn = e, this.fieldTransforms = n }

            function zc(t) { var e = kc.call(this, "FieldValue.increment") || this; return e.sf = t, e }

            function Hc(t) { var e = Dc.call(this, "FieldValue.arrayRemove") || this; return e.uf = t, e }

            function Kc(t) { var e = Rc.call(this, "FieldValue.arrayUnion") || this; return e.uf = t, e }

            function Wc() { return Cc.call(this, "FieldValue.serverTimestamp") || this }

            function Jc() { return Oc.call(this, "FieldValue.delete") || this }

            function Yc(t) { this.rf = t }

            function Qc(t) { switch (t) {
                    case 0:
                    case 2:
                    case 1:
                        return !0;
                    case 3:
                    case 4:
                        return !1;
                    default:
                        throw Iu("Unexpected case for UserDataSource: " + t) } } var Xc = (ef.prototype.lf = function(t) { var e = null == this.path ? null : this.path.child(t),
                        n = new ef(this.cf, this.methodName, e, !1, this.fieldTransforms, this.sn); return n.df(t), n }, ef.prototype.vf = function(t) { var e = null == this.path ? null : this.path.child(t),
                        n = new ef(this.cf, this.methodName, e, !1, this.fieldTransforms, this.sn); return n.ff(), n }, ef.prototype.wf = function(t) { return new ef(this.cf, this.methodName, null, !0, this.fieldTransforms, this.sn) }, ef.prototype.mf = function(t) { var e = null === this.path || this.path.Y() ? "" : " (found in field " + this.path.toString() + ")"; return new Mr(qr.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e) }, ef.prototype.contains = function(e) { return void 0 !== this.sn.find(function(t) { return e.Z(t) }) || void 0 !== this.fieldTransforms.find(function(t) { return e.Z(t.field) }) }, ef.prototype.ff = function() { if (null !== this.path)
                        for (var t = 0; t < this.path.length; t++) this.df(this.path.get(t)) }, ef.prototype.df = function(t) { if (0 === t.length) throw this.mf("Document fields must not be empty"); if (Qc(this.cf) && Vc.test(t)) throw this.mf('Document fields cannot begin and end with "__"') }, ef),
                $c = function(t, e) { this.Dn = t, this.key = e },
                Zc = (tf.prototype.bf = function(t, e) { var n = new Xc(0, t, _i.rt);
                    rf("Data must be an object, but it was:", n, e); var r = this.pf(e, n); return new Fc(r, null, n.fieldTransforms) }, tf.prototype.yf = function(t, e, n) { var r = new Xc(2, t, _i.rt);
                    rf("Data must be an object, but it was:", r, e); var i, o, s = this.pf(e, r); if (n) { for (var a = new Zi(_i.W), u = 0, h = n; u < h.length; u++) { var c = h[u],
                                f = void 0; if (c instanceof fc) f = c.if;
                            else { if ("string" != typeof c) throw Iu("Expected stringOrFieldPath to be a string or a FieldPath");
                                f = sf(t, c) } if (!r.contains(f)) throw new Mr(qr.INVALID_ARGUMENT, "Field '" + f + "' is specified in your field mask but missing from your input data.");
                            a = a.add(f) } i = Io.Yt(a), o = r.fieldTransforms.filter(function(t) { return i.$t(t.field) }) } else i = Io.Xt(r.sn), o = r.fieldTransforms; return new Fc(s, i, o) }, tf.prototype._f = function(o, t) { var s = this,
                        a = new Xc(1, o, _i.rt);
                    rf("Data must be an object, but it was:", a, t); var u = new Zi(_i.W),
                        h = gs.wn();
                    Zr(t, function(t, e) { var n = sf(o, t),
                            r = a.vf(n); if ((e = s.If(e, r)) instanceof Lc) u = u.add(n);
                        else { var i = s.pf(e, r);
                            null != i && (u = u.add(n), h.set(n, i)) } }); var e = Io.Yt(u); return new jc(h.an(), e, a.fieldTransforms) }, tf.prototype.Tf = function(t, e, n, r) { var i = new Xc(1, t, _i.rt),
                        o = [ of (t, e)],
                        s = [n]; if (r.length % 2 != 0) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values."); for (var a = 0; a < r.length; a += 2) o.push( of (t, r[a])), s.push(r[a + 1]); var u = new Zi(_i.W),
                        h = gs.wn(); for (a = 0; a < o.length; ++a) { var c = o[a],
                            f = i.vf(c),
                            l = this.If(s[a], f); if (l instanceof Lc) u = u.add(c);
                        else { var p = this.pf(l, f);
                            null != p && (u = u.add(c), h.set(c, p)) } } var d = Io.Yt(u); return new jc(h.an(), d, i.fieldTransforms) }, tf.prototype.Ef = function(t, e, n) { void 0 === n && (n = !1); var r = new Xc(n ? 4 : 3, t, _i.rt),
                        i = this.pf(e, r); return Tu(null != i, "Parsed data should not be null."), Tu(0 === r.fieldTransforms.length, "Field transforms should have been disallowed."), i }, tf.prototype.If = function(t, e) { try { return this.gf(t) } catch (t) { var n = af(t); throw e.mf(n) } }, tf.prototype.pf = function(t, e) { if (nf(t = this.If(t, e))) return rf("Unsupported field value:", e, t), this.Df(t, e); if (t instanceof xc) return this.Rf(t, e), null; if (e.path && e.sn.push(e.path), t instanceof Array) { if (e.af && 4 !== e.cf) throw e.mf("Nested arrays are not supported"); return this.Sf(t, e) } return this.Af(t, e) }, tf.prototype.Df = function(t, r) { var i = this,
                        o = new qi(Su); return ti(t) ? r.path && 0 < r.path.length && r.sn.push(r.path) : Zr(t, function(t, e) { var n = i.pf(e, r.lf(t));
                        null != n && (o = o.dt(t, n)) }), new gs(o) }, tf.prototype.Sf = function(t, e) { for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) { var s = o[i],
                            a = this.pf(s, e.wf(r));
                        null == a && (a = Lo.yn), n.push(a), r++ } return new bs(n) }, tf.prototype.Rf = function(t, e) { if (!Qc(e.cf)) throw e.mf(t.rf + "() can only be used with update() and set()"); if (null === e.path) throw e.mf(t.rf + "() is not currently supported inside arrays"); if (t instanceof Lc) { if (2 !== e.cf) throw 1 === e.cf ? (Tu(0 < e.path.length, "FieldValue.delete() at the top level should have already been handled."), e.mf("FieldValue.delete() can only appear at the top level of your update data")) : e.mf("FieldValue.delete() cannot be used with set() unless you pass {merge:true}");
                        e.sn.push(e.path) } else if (t instanceof Pc) e.fieldTransforms.push(new To(e.path, eo.instance));
                    else if (t instanceof _c) { var n = this.Cf(t.rf, t.uf),
                            r = new no(n);
                        e.fieldTransforms.push(new To(e.path, r)) } else if (t instanceof Uc) { n = this.Cf(t.rf, t.uf); var i = new ro(n);
                        e.fieldTransforms.push(new To(e.path, i)) } else if (t instanceof qc) { var o = this.Ef("FieldValue.increment", t.sf),
                            s = new io(o);
                        e.fieldTransforms.push(new To(e.path, s)) } else Iu("Unknown FieldValue type: " + t) }, tf.prototype.Af = function(t, e) { if (null === t) return Lo.yn; if ("number" == typeof t) return Gs(t) ? new cs(t) : new fs(t); if ("boolean" == typeof t) return Po.of(t); if ("string" == typeof t) return new ls(t); if (t instanceof Date) return new ps(Ci.fromDate(t)); if (t instanceof Ci) return new ps(new Ci(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))); if (t instanceof Ri) return new ms(t); if (t instanceof ki) return new vs(t); if (t instanceof $c) return new ys(t.Dn, t.key); throw e.mf("Unsupported field value: " + li(t)) }, tf.prototype.Cf = function(r, t) { var i = this; return t.map(function(t, e) { var n = new Xc(3, r, _i.rt); return i.pf(t, n.wf(e)) }) }, tf);

            function tf(t) { this.gf = t }

            function ef(t, e, n, r, i, o) { this.cf = t, this.methodName = e, this.path = n, this.af = r, void 0 === i && this.ff(), this.af = void 0 !== r && r, this.fieldTransforms = i || [], this.sn = o || [] }

            function nf(t) { return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof Ci || t instanceof Ri || t instanceof ki || t instanceof $c || t instanceof xc) }

            function rf(t, e, n) { if (!nf(n) || !fi(n)) { var r = li(n); throw "an object" === r ? e.mf(t + " a custom object") : e.mf(t + " " + r) } }

            function of (t, e) { if (e instanceof fc) return e.if; if ("string" == typeof e) return sf(t, e); throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.") }

            function sf(t, e) { try { return function(e) { if (0 <= e.search(lc)) throw new Mr(qr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'"); try { return new(fc.bind.apply(fc, s([void 0], e.split(".")))) } catch (t) { throw new Mr(qr.INVALID_ARGUMENT, "Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'") } }(e).if } catch (e) { var n = af(e); throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n) } }

            function af(t) { return t instanceof Error ? t.message : t.toString() }

            function uf(t) { this.key = t }

            function hf(t) { this.key = t } var cf = (mf.prototype.lookup = function(r) { return p(this, void 0, void 0, function() { var e, n = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    if (this.Vf(), 0 < this.mutations.length) throw new Mr(qr.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes."); return [4, this.Pf.lookup(r)];
                                case 1:
                                    return (e = t.sent()).forEach(function(t) { t instanceof Ts || t instanceof Is ? n.Uf(t) : Iu("Document in a transaction was a " + t.constructor.name) }), [2, e] } }) }) }, mf.prototype.set = function(t, e) { this.write(e.hf(t, this.en(t))), this.Ff.add(t) }, mf.prototype.update = function(t, e) { try { this.write(e.hf(t, this.xf(t))) } catch (t) { this.Of = t } this.Ff.add(t) }, mf.prototype.delete = function(t) { this.write([new Ro(t, this.en(t))]), this.Ff.add(t) }, mf.prototype.commit = function() { return p(this, void 0, void 0, function() { var e, n = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    if (this.Vf(), this.Of) throw this.Of; return e = this.kf, this.mutations.forEach(function(t) { e = e.remove(t.key) }), e.forEach(function(t, e) { n.mutations.push(new Co(t, n.en(t))) }), [4, this.Pf.commit(this.mutations)];
                                case 1:
                                    return t.sent(), this.Nf = !0, [2] } }) }) }, mf.prototype.Uf = function(t) { var e; if (t instanceof Is) e = t.version;
                    else { if (!(t instanceof Ts)) throw Iu("Document in a transaction was a " + t.constructor.name);
                        e = Oi.q() } var n = this.kf.get(t.key); if (null !== n) { if (!e.isEqual(n)) throw new Mr(qr.ABORTED, "Document version changed between two reads.") } else this.kf = this.kf.dt(t.key, e) }, mf.prototype.en = function(t) { var e = this.kf.get(t); return !this.Ff.has(t) && e ? No.updateTime(e) : No.NONE }, mf.prototype.xf = function(t) { var e = this.kf.get(t); if (this.Ff.has(t) || !e) return No.exists(!0); if (e.isEqual(Oi.q())) throw new Mr(qr.INVALID_ARGUMENT, "Can't update a document that doesn't exist."); return No.updateTime(e) }, mf.prototype.write = function(t) { this.Vf(), this.mutations = this.mutations.concat(t) }, mf.prototype.Vf = function() { Tu(!this.Nf, "A transaction object cannot be used after its update callback has been invoked.") }, mf),
                ff = (yf.prototype.Bf = function() { var t = this;
                    0 === this.jf && (this.Mf("Unknown"), Tu(null === this.Lf, "onlineStateTimer shouldn't be started yet"), this.Lf = this.$r.yu("online_state_timeout", 1e4, function() { return t.Lf = null, Tu("Unknown" === t.state, "Timer should be canceled if we transitioned to a different state."), t.Qf("Backend didn't respond within 10 seconds."), t.Mf("Offline"), Promise.resolve() })) }, yf.prototype.Gf = function(t) { "Online" === this.state ? (this.Mf("Unknown"), Tu(0 === this.jf, "watchStreamFailures must be 0"), Tu(null === this.Lf, "onlineStateTimer must be null")) : (this.jf++, 1 <= this.jf && (this.Wf(), this.Qf("Connection failed 1 times. Most recent error: " + t.toString()), this.Mf("Offline"))) }, yf.prototype.set = function(t) { this.Wf(), this.jf = 0, "Online" === t && (this.qf = !1), this.Mf(t) }, yf.prototype.Mf = function(t) { t !== this.state && (this.state = t, this.vh(t)) }, yf.prototype.Qf = function(t) { var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
                    this.qf ? (bu(e), this.qf = !1) : wu("OnlineStateTracker", e) }, yf.prototype.Wf = function() { null !== this.Lf && (this.Lf.cancel(), this.Lf = null) }, yf),
                lf = (vf.prototype.start = function() { return this.enableNetwork() }, vf.prototype.enableNetwork = function() { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !0, this.$f() ? (e = this.ul, [4, this.zf.Eo()]) : [3, 3];
                                case 1:
                                    return e.lastStreamToken = t.sent(), this.cl() ? this.al() : this.tl.set("Unknown"), [4, this.fl()];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2] } }) }) }, vf.prototype.disableNetwork = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.ll()];
                                case 1:
                                    return t.sent(), this.tl.set("Offline"), [2] } }) }) }, vf.prototype.ll = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return [4, this.ul.stop()];
                                case 1:
                                    return t.sent(), [4, this.nl.stop()];
                                case 2:
                                    return t.sent(), 0 < this.Kf.length && (wu("RemoteStore", "Stopping write stream with " + this.Kf.length + " pending writes"), this.Kf = []), this.dl(), [2] } }) }) }, vf.prototype.shutdown = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return wu("RemoteStore", "RemoteStore shutting down."), this.networkEnabled = !1, [4, this.ll()];
                                case 1:
                                    return t.sent(), this.Yf.shutdown(), this.tl.set("Unknown"), [2] } }) }) }, vf.prototype.listen = function(t) { Qr(this.Hf, t.targetId) || (this.Hf[t.targetId] = t, this.cl() ? this.al() : this.nl.Ca() && this.vl(t)) }, vf.prototype.wl = function(t) { Tu(Qr(this.Hf, t), "unlisten called on target no currently watched: " + t), delete this.Hf[t], this.nl.Ca() && this.ml(t), ti(this.Hf) && (this.nl.Ca() ? this.nl.Na() : this.$f() && this.tl.set("Unknown")) }, vf.prototype.be = function(t) { return this.Hf[t] || null }, vf.prototype.ge = function(t) { return this.dh.ge(t) }, vf.prototype.vl = function(t) { this.Jf.Ji(t.targetId), this.nl.watch(t) }, vf.prototype.ml = function(t) { this.Jf.Ji(t), this.nl.Wa(t) }, vf.prototype.al = function() { Tu(this.cl(), "startWatchStream() called when shouldStartWatchStream() is false."), this.Jf = new Ya(this), this.nl.start(), this.tl.Bf() }, vf.prototype.cl = function() { return this.$f() && !this.nl.Aa() && !ti(this.Hf) }, vf.prototype.$f = function() { return this.isPrimary && this.networkEnabled }, vf.prototype.dl = function() { this.Jf = null }, vf.prototype.il = function() { return p(this, void 0, void 0, function() { var n = this; return v(this, function(t) { return $r(this.Hf, function(t, e) { n.vl(e) }), [2] }) }) }, vf.prototype.el = function(e) { return p(this, void 0, void 0, function() { return v(this, function(t) { return void 0 === e && Tu(!this.cl(), "Watch stream was stopped gracefully while still needed."), this.dl(), this.cl() ? (this.tl.Gf(e), this.al()) : this.tl.set("Unknown"), [2] }) }) }, vf.prototype.rl = function(n, r) { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.tl.set("Online"), n instanceof Ga && 2 === n.state && n.cause ? [2, this.gl(n)] : (n instanceof Fa ? this.Jf.ee(n) : n instanceof ja ? this.Jf.fe(n) : (Tu(n instanceof Ga, "Expected watchChange to be an instance of WatchTargetChange"), this.Jf.se(n)), r.isEqual(Oi.MIN) ? [3, 3] : [4, this.zf.Ro()]);
                                case 1:
                                    return e = t.sent(), 0 <= r.B(e) ? [4, this.bl(r)] : [3, 3];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2] } }) }) }, vf.prototype.bl = function(r) { var i = this;
                    Tu(!r.isEqual(Oi.MIN), "Can't raise event for unknown SnapshotVersion"); var t = this.Jf.ve(r); return $r(t.Ei, function(t, e) { if (0 < e.resumeToken.P()) { var n = i.Hf[t];
                            n && (i.Hf[t] = n.li(e.resumeToken, r)) } }), t.Di.forEach(function(t) { var e = i.Hf[t]; if (e) { i.Hf[t] = e.li(wi.k, e.ai), i.ml(t); var n = new fa(e.target, t, 1, e.sequenceNumber);
                            i.vl(n) } }), this.dh.So(t) }, vf.prototype.gl = function(t) { var n = this;
                    Tu(!!t.cause, "Handling target error without a cause"); var r = t.cause,
                        i = Promise.resolve(); return t.targetIds.forEach(function(e) { i = i.then(function() { return p(n, void 0, void 0, function() { return v(this, function(t) { return Qr(this.Hf, e) ? (delete this.Hf[e], this.Jf.removeTarget(e), [2, this.dh.pl(e, r)]) : [2] }) }) }) }), i }, vf.prototype.fl = function() { return p(this, void 0, void 0, function() { var e, n; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.yl() ? (e = 0 < this.Kf.length ? this.Kf[this.Kf.length - 1].batchId : -1, [4, this.zf.jo(e)]) : [3, 4];
                                case 1:
                                    return null !== (n = t.sent()) ? [3, 2] : (0 === this.Kf.length && this.ul.Na(), [3, 4]);
                                case 2:
                                    return this._l(n), [4, this.fl()];
                                case 3:
                                    t.sent(), t.label = 4;
                                case 4:
                                    return this.Il() && this.Tl(), [2] } }) }) }, vf.prototype.yl = function() { return this.$f() && this.Kf.length < 10 }, vf.prototype.El = function() { return this.Kf.length }, vf.prototype._l = function(t) { Tu(this.yl(), "addToWritePipeline called when pipeline is full"), this.Kf.push(t), this.ul.Ca() && this.ul.Ka && this.ul.Ha(t.mutations) }, vf.prototype.Il = function() { return this.$f() && !this.ul.Aa() && 0 < this.Kf.length }, vf.prototype.Tl = function() { Tu(this.Il(), "startWriteStream() called when shouldStartWriteStream() is false."), this.ul.start() }, vf.prototype.sl = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { return this.ul.Xa(), [2] }) }) }, vf.prototype.hl = function() { var r = this; return this.zf.Do(this.ul.lastStreamToken).then(function() { for (var t = 0, e = r.Kf; t < e.length; t++) { var n = e[t];
                            r.ul.Ha(n.mutations) } }).catch(ph) }, vf.prototype.Ja = function(t, e) { var n = this;
                    Tu(0 < this.Kf.length, "Got result for empty write pipeline"); var r = this.Kf.shift(),
                        i = Lu.from(r, t, e, this.ul.lastStreamToken); return this.dh.Dl(i).then(function() { return n.fl() }) }, vf.prototype.ol = function(n) { return p(this, void 0, void 0, function() { var e = this; return v(this, function(t) { return void 0 === n && Tu(!this.Il(), "Write stream was stopped gracefully while still needed."), n && 0 < this.Kf.length ? [2, (this.ul.Ka ? this.Rl(n) : this.Sl(n)).then(function() { e.Il() && e.Tl() })] : [2] }) }) }, vf.prototype.Sl = function(e) { return p(this, void 0, void 0, function() { return v(this, function(t) { return ka(e.code) ? (wu("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.ul.lastStreamToken), this.ul.lastStreamToken = wi.k, [2, this.zf.Do(wi.k).catch(ph)]) : [2] }) }) }, vf.prototype.Rl = function(i) { return p(this, void 0, void 0, function() { var n, r = this; return v(this, function(t) { return ka(e = i.code) && e !== qr.ABORTED ? (n = this.Kf.shift(), this.ul.ka(), [2, this.dh.Al(n.batchId, i).then(function() { return r.fl() })]) : [2]; var e }) }) }, vf.prototype.Cl = function() { return new cf(this.Pf) }, vf.prototype.Zf = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.networkEnabled = !1, [4, this.ll()];
                                case 1:
                                    return t.sent(), this.tl.set("Unknown"), [4, this.enableNetwork()];
                                case 2:
                                    return t.sent(), [2] } }) }) }, vf.prototype.Pl = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.$f() ? (wu("RemoteStore", "RemoteStore restarting streams for new credential"), [4, this.Zf()]) : [3, 2];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [2] } }) }) }, vf.prototype.kl = function(e) { return p(this, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return (this.isPrimary = e) && this.networkEnabled ? [4, this.enableNetwork()] : [3, 2];
                                case 1:
                                    return t.sent(), [3, 4];
                                case 2:
                                    return e ? [3, 4] : [4, this.ll()];
                                case 3:
                                    t.sent(), this.tl.set("Unknown"), t.label = 4;
                                case 4:
                                    return [2] } }) }) }, vf),
                pf = (Object.defineProperty(df.prototype, "Ul", { get: function() { return this.Nl }, enumerable: !0, configurable: !0 }), df.prototype.xl = function(t, e) { var a = this,
                        u = e ? e.jl : new za,
                        h = e ? e.Vl : this.Vl,
                        c = e ? e.yi : this.yi,
                        f = h,
                        l = !1,
                        p = this.query.ii() && h.size === this.query.limit ? h.last() : null,
                        d = this.query.ei() && h.size === this.query.limit ? h.first() : null; if (t.bt(function(t, e) { var n = h.get(t),
                                r = e instanceof Is ? e : null;
                            r && (Tu(t.isEqual(r.key), "Mismatching keys found in document changes: " + t + " != " + r.key), r = a.query.matches(r) ? r : null); var i = !!n && a.yi.has(n.key),
                                o = !!r && (r.rn || a.yi.has(r.key) && r.hasCommittedMutations),
                                s = !1;
                            n && r ? n.data().isEqual(r.data()) ? i !== o && (u.track({ type: 3, doc: r }), s = !0) : a.Ll(n, r) || (u.track({ type: 2, doc: r }), s = !0, (p && 0 < a.query.Xn(r, p) || d && a.query.Xn(r, d) < 0) && (l = !0)) : !n && r ? (u.track({ type: 0, doc: r }), s = !0) : n && !r && (u.track({ type: 1, doc: n }), s = !0, (p || d) && (l = !0)), s && (c = r ? (f = f.add(r), o ? c.add(t) : c.delete(t)) : (f = f.delete(t), c.delete(t))) }), this.query.ii() || this.query.ei())
                        for (; f.size > this.query.limit;) { var n = this.query.ii() ? f.last() : f.first();
                            f = f.delete(n.key), c = c.delete(n.key), u.track({ type: 1, doc: n }) }
                    return Tu(!l || !e, "View was refilled using docs that themselves needed refilling."), { Vl: f, jl: u, yc: l, yi: c } }, df.prototype.Ll = function(t, e) { return t.rn && e.hasCommittedMutations && !e.rn }, df.prototype.qs = function(t, e, n) { var o = this;
                    Tu(!t.yc, "Cannot apply changes that need a refill"); var r = this.Vl;
                    this.Vl = t.Vl, this.yi = t.yi; var i = t.jl.bi();
                    i.sort(function(t, e) { return r = t.type, i = e.type, n(r) - n(i) || o.query.Xn(t.doc, e.doc);

                        function n(t) { switch (t) {
                                case 0:
                                    return 1;
                                case 2:
                                case 3:
                                    return 2;
                                case 1:
                                    return 0;
                                default:
                                    return Iu("Unknown ChangeType: " + t) } } var r, i }), this.ql(n); var s = e ? this.Bl() : [],
                        a = 0 === this.Fl.size && this.Pi ? 1 : 0,
                        u = a !== this.Ol; return this.Ol = a, 0 !== i.length || u ? { snapshot: new Ha(this.query, t.Vl, r, i, t.yi, 0 == a, u, !1), Ml: s } : { Ml: s } }, df.prototype.Ql = function(t) { return this.Pi && "Offline" === t ? (this.Pi = !1, this.qs({ Vl: this.Vl, jl: new za, yi: this.yi, yc: !1 }, !1)) : { Ml: [] } }, df.prototype.Gl = function(t) { return !this.Nl.has(t) && !!this.Vl.has(t) && !this.Vl.get(t).rn }, df.prototype.ql = function(t) { var e = this;
                    t && (t.ki.forEach(function(t) { return e.Nl = e.Nl.add(t) }), t.Ni.forEach(function(t) { return Tu(e.Nl.has(t), "Modified document " + t + " not found in view.") }), t.Oi.forEach(function(t) { return e.Nl = e.Nl.delete(t) }), this.Pi = t.Pi) }, df.prototype.Bl = function() { var e = this; if (!this.Pi) return []; var n = this.Fl;
                    this.Fl = qa(), this.Vl.forEach(function(t) { e.Gl(t.key) && (e.Fl = e.Fl.add(t.key)) }); var r = []; return n.forEach(function(t) { e.Fl.has(t) || r.push(new hf(t)) }), this.Fl.forEach(function(t) { n.has(t) || r.push(new uf(t)) }), r }, df.prototype.Wl = function(t) { this.Nl = t.Yo, this.Fl = qa(); var e = this.xl(t.documents); return this.qs(e, !0) }, df.prototype.zl = function() { return Ha.Ti(this.query, this.Vl, this.yi, 0 === this.Ol) }, df);

            function df(t, e) { this.query = t, this.Nl = e, this.Ol = null, this.Pi = !1, this.Fl = qa(), this.yi = qa(), this.Vl = new Ba(t.Xn.bind(t)) }

            function vf(t, e, n, r, i) { var o = this;
                this.zf = t, this.Pf = e, this.Kf = [], this.Hf = {}, this.Jf = null, this.networkEnabled = !1, this.isPrimary = !1, this.Yf = i, this.Yf.Xf(function(t) { n.ou(function() { return p(o, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                    case 0:
                                        return this.$f() ? (wu("RemoteStore", "Restarting streams for network reachability change."), [4, this.Zf()]) : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2] } }) }) }) }), this.tl = new ff(n, r), this.nl = this.Pf.Za({ Ma: this.il.bind(this), xa: this.el.bind(this), Ga: this.rl.bind(this) }), this.ul = this.Pf.$a({ Ma: this.sl.bind(this), xa: this.ol.bind(this), Ya: this.hl.bind(this), Ja: this.Ja.bind(this) }) }

            function yf(t, e) { this.$r = t, this.vh = e, this.state = "Unknown", this.jf = 0, this.Lf = null, this.qf = !0 }

            function mf(t) { this.Pf = t, this.kf = _a(), this.mutations = [], this.Nf = !1, this.Of = null, this.Ff = new Set }

            function gf(t, e, n) { this.query = t, this.targetId = e, this.view = n }

            function wf(t) { this.key = t, this.Zl = !1 }

            function bf() { this.Nd = null, this.targetId = 0, this.listeners = [] } var Ef = (xf.prototype.run = function() { this.Jl() }, xf.prototype.Jl = function() { var t = this;
                    this.Sa._a(function() { return p(t, void 0, void 0, function() { var e, n, r = this; return v(this, function(t) { return e = this.Kl.Cl(), (n = this.Yl(e)) && n.then(function(t) { r.$r.ou(function() { return e.commit().then(function() { r.iu.resolve(t) }).catch(function(t) { r.Xl(t) }) }) }).catch(function(t) { r.Xl(t) }), [2] }) }) }) }, xf.prototype.Yl = function(t) { try { var e = this.updateFunction(t); return !Fs(e) && e.catch && e.then ? e : (this.iu.reject(Error("Transaction callback must return a Promise")), null) } catch (t) { return this.iu.reject(t), null } }, xf.prototype.Xl = function(t) { var e = this;
                    0 < this.Hl && this.$l(t) ? (this.Hl -= 1, this.$r.ou(function() { return e.Jl(), Promise.resolve() })) : this.iu.reject(t) }, xf.prototype.$l = function(t) { if ("FirebaseError" !== t.name) return !1; var e = t.code; return "aborted" === e || "failed-precondition" === e || !ka(e) }, xf),
                If = (Object.defineProperty(Of.prototype, "ld", { get: function() { return !0 === this.isPrimary }, enumerable: !0, configurable: !0 }), Of.prototype.subscribe = function(t) { Tu(null !== t, "SyncEngine listener cannot be null"), Tu(null === this.nd, "SyncEngine already has a subscriber."), this.nd = t }, Of.prototype.listen = function(s) { return p(this, void 0, void 0, function() { var e, n, r, i, o; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.dd("listen()"), (r = this.ed.get(s)) ? (e = r.targetId, this.td.Vh(e), n = r.view.zl(), [3, 4]) : [3, 1];
                                case 1:
                                    return [4, this.zf.Mo(s.Yn())];
                                case 2:
                                    return i = t.sent(), o = this.td.Vh(i.targetId), e = i.targetId, [4, this.vd(s, e, "current" === o)];
                                case 3:
                                    n = t.sent(), this.isPrimary && this.Kl.listen(i), t.label = 4;
                                case 4:
                                    return this.nd.Ga([n]), [2, e] } }) }) }, Of.prototype.vd = function(a, u, h) { return p(this, void 0, void 0, function() { var e, n, r, i, o, s; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return [4, this.zf.Ko(a, !0)];
                                case 1:
                                    return e = t.sent(), n = new pf(a, e.Yo), r = n.xl(e.documents), i = Wa.Ci(u, h && "Offline" !== this.onlineState), Tu(0 === (o = n.qs(r, !0 === this.isPrimary, i)).Ml.length, "View returned limbo docs before target ack from the server."), Tu(!!o.snapshot, "applyChanges for new view should always return a snapshot"), s = new gf(a, u, n), this.ed.set(a, s), this.rd[u] || (this.rd[u] = []), this.rd[u].push(a), [2, o.snapshot] } }) }) }, Of.prototype.wd = function(r) { return p(this, void 0, void 0, function() { var e, n; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return [4, this.zf.Ko(r.query, !0)];
                                case 1:
                                    return e = t.sent(), n = r.view.Wl(e), this.isPrimary && this.md(r.targetId, n.Ml), [2, n] } }) }) }, Of.prototype.wl = function(i) { return p(this, void 0, void 0, function() { var e, n, r = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.dd("unlisten()"), Tu(!!(e = this.ed.get(i)), "Trying to unlisten on query not found:" + i), 1 < (n = this.rd[e.targetId]).length ? (this.rd[e.targetId] = n.filter(function(t) { return !t.isEqual(i) }), this.ed.delete(i), [2]) : this.isPrimary ? (this.td.xh(e.targetId), this.td.Ph(e.targetId) ? [3, 2] : [4, this.zf.zo(e.targetId, !1).then(function() { r.td.Lh(e.targetId), r.Kl.wl(e.targetId), r.gd(e.targetId) }).catch(ph)]) : [3, 3];
                                case 1:
                                    t.sent(), t.label = 2;
                                case 2:
                                    return [3, 5];
                                case 3:
                                    return this.gd(e.targetId), [4, this.zf.zo(e.targetId, !0)];
                                case 4:
                                    t.sent(), t.label = 5;
                                case 5:
                                    return [2] } }) }) }, Of.prototype.write = function(n, r) { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.dd("write()"), [4, this.zf.ao(n)];
                                case 1:
                                    return e = t.sent(), this.td.kh(e.batchId), this.bd(e.batchId, r), [4, this.pd(e.ks)];
                                case 2:
                                    return t.sent(), [4, this.Kl.fl()];
                                case 3:
                                    return t.sent(), [2] } }) }) }, Of.prototype.runTransaction = function(t, e, n) { new Ef(t, this.Kl, e, n).run() }, Of.prototype.So = function(n) { return p(this, void 0, void 0, function() { var e, r = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    this.dd("applyRemoteEvent()"), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.zf.So(n)];
                                case 2:
                                    return e = t.sent(), Zr(n.Ei, function(t, e) { var n = r.sd[Number(t)];
                                        n && (Tu(e.ki.size + e.Ni.size + e.Oi.size <= 1, "Limbo resolution for single document contains multiple changes."), 0 < e.ki.size ? n.Zl = !0 : 0 < e.Ni.size ? Tu(n.Zl, "Received change for limbo target document without add.") : 0 < e.Oi.size && (Tu(n.Zl, "Received remove for limbo target document without add."), n.Zl = !1)) }), [4, this.pd(e, n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, ph(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2] } }) }) }, Of.prototype.Ql = function(r, t) { if (this.isPrimary && 0 === t || !this.isPrimary && 1 === t) { this.dd("applyOnlineStateChange()"); var i = [];
                        this.ed.forEach(function(t, e) { var n = e.view.Ql(r);
                            Tu(0 === n.Ml.length, "OnlineState should not affect limbo documents."), n.snapshot && i.push(n.snapshot) }), this.nd.yd(r), this.nd.Ga(i), this.onlineState = r, this.isPrimary && this.td.Mh(r) } }, Of.prototype.pl = function(a, u) { return p(this, void 0, void 0, function() { var e, n, r, i, o, s = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.dd("rejectListens()"), this.td.qh(a, "rejected", u), e = this.sd[a], (n = e && e.key) ? (this.ud = this.ud.remove(n), delete this.sd[a], r = (r = new qi(Ui.W)).dt(n, new Ts(n, Oi.q())), i = qa().add(n), o = new Ka(Oi.MIN, {}, new Zi(Su), r, i), [2, this.So(o)]) : [3, 1];
                                case 1:
                                    return [4, this.zf.zo(a, !1).then(function() { return s.gd(a, u) }).catch(ph)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [2] } }) }) }, Of.prototype.Xh = function(n, r, i) { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.dd("applyBatchState()"), [4, this.zf.lo(n)];
                                case 1:
                                    return null === (e = t.sent()) ? (wu("SyncEngine", "Cannot apply mutation batch with id: " + n), [2]) : "pending" !== r ? [3, 3] : [4, this.Kl.fl()];
                                case 2:
                                    return t.sent(), [3, 4];
                                case 3:
                                    "acknowledged" === r || "rejected" === r ? (this._d(n, i || null), this.zf.Zo(n)) : Iu("Unknown batchState: " + r), t.label = 4;
                                case 4:
                                    return [4, this.pd(e)];
                                case 5:
                                    return t.sent(), [2] } }) }) }, Of.prototype.Dl = function(r) { return p(this, void 0, void 0, function() { var e, n; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    this.dd("applySuccessfulWrite()"), e = r.batch.batchId, this._d(e, null), this.Id(e), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.zf.vo(r)];
                                case 2:
                                    return n = t.sent(), this.td.Oh(e, "acknowledged"), [4, this.pd(n)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, ph(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2] } }) }) }, Of.prototype.Al = function(n, r) { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    this.dd("rejectFailedWrite()"), this._d(n, r), this.Id(n), t.label = 1;
                                case 1:
                                    return t.trys.push([1, 4, , 6]), [4, this.zf.yo(n)];
                                case 2:
                                    return e = t.sent(), this.td.Oh(n, "rejected", r), [4, this.pd(e)];
                                case 3:
                                    return t.sent(), [3, 6];
                                case 4:
                                    return [4, ph(t.sent())];
                                case 5:
                                    return t.sent(), [3, 6];
                                case 6:
                                    return [2] } }) }) }, Of.prototype.Td = function(r) { return p(this, void 0, void 0, function() { var e, n; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.Kl.$f() || wu("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), [4, this.zf.To()];
                                case 1:
                                    return -1 === (e = t.sent()) ? r.resolve() : ((n = this.ad.get(e) || []).push(r), this.ad.set(e, n)), [2] } }) }) }, Of.prototype.Id = function(t) {
                    (this.ad.get(t) || []).forEach(function(t) { t.resolve() }), this.ad.delete(t) }, Of.prototype.Ed = function(e) { this.ad.forEach(function(t) { t.forEach(function(t) { t.reject(new Mr(qr.CANCELLED, e)) }) }), this.ad.clear() }, Of.prototype.bd = function(t, e) { var n = this.hd[this.currentUser.i()];
                    n = (n = n || new qi(Su)).dt(t, e), this.hd[this.currentUser.i()] = n }, Of.prototype._d = function(t, e) { var n = this.hd[this.currentUser.i()]; if (n) { var r = n.get(t);
                        r && (Tu(t === n.wt(), "Mutation callbacks processed out-of-order?"), e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.hd[this.currentUser.i()] = n } }, Of.prototype.gd = function(t, e) { var n = this;
                    void 0 === e && (e = null), this.td.xh(t), Tu(this.rd[t] && 0 !== this.rd[t].length, "There are no queries mapped to target id " + t); for (var r = 0, i = this.rd[t]; r < i.length; r++) { var o = i[r];
                        this.ed.delete(o), e && this.nd.Dd(o, e) } if (delete this.rd[t], this.isPrimary) { var s = this.od.As(t);
                        this.od.Rs(t), s.forEach(function(t) { n.od.Cs(t) || n.Rd(t) }) } }, Of.prototype.Rd = function(t) { var e = this.ud.get(t);
                    null !== e && (this.Kl.wl(e), this.ud = this.ud.remove(t), delete this.sd[e]) }, Of.prototype.md = function(t, e) { for (var n = 0, r = e; n < r.length; n++) { var i = r[n];
                        i instanceof uf ? (this.od._s(i.key, t), this.Sd(i)) : i instanceof hf ? (wu("SyncEngine", "Document no longer in limbo: " + i.key), this.od.Ts(i.key, t), this.od.Cs(i.key) || this.Rd(i.key)) : Iu("Unknown limbo change: " + JSON.stringify(i)) } }, Of.prototype.Sd = function(t) { var e = t.key; if (!this.ud.get(e)) { wu("SyncEngine", "New document in limbo: " + e); var n = this.fd.next(),
                            r = $s.jn(e.path);
                        this.sd[n] = new wf(e), this.Kl.listen(new fa(r.Yn(), n, 2, Uu.Xr)), this.ud = this.ud.dt(e, n) } }, Of.prototype.Ad = function() { return this.ud }, Of.prototype.pd = function(r, u) { return p(this, void 0, void 0, function() { var o, s, e, a = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return o = [], s = [], e = [], this.ed.forEach(function(t, i) { e.push(Promise.resolve().then(function() { var n = i.view.xl(r); return n.yc ? a.zf.Ko(i.query, !1).then(function(t) { var e = t.documents; return i.view.xl(e, n) }) : n }).then(function(t) { var e = u && u.Ei[i.targetId],
                                                n = i.view.qs(t, !0 === a.isPrimary, e); if (a.md(i.targetId, n.Ml), n.snapshot) { a.isPrimary && a.td.qh(i.targetId, n.snapshot.fromCache ? "not-current" : "current"), o.push(n.snapshot); var r = _u.zr(i.targetId, n.snapshot);
                                                s.push(r) } })) }), [4, Promise.all(e)];
                                case 1:
                                    return t.sent(), this.nd.Ga(o), [4, this.zf.xo(s)];
                                case 2:
                                    return t.sent(), [2] } }) }) }, Of.prototype.dd = function(t) { Tu(null !== this.nd, "Trying to call " + t + " before calling subscribe().") }, Of.prototype.Pl = function(r) { return p(this, void 0, void 0, function() { var e, n; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return e = !this.currentUser.isEqual(r), this.currentUser = r, e ? (this.Ed("'waitForPendingWrites' promise is rejected due to a user change."), [4, this.zf.ro(r)]) : [3, 3];
                                case 1:
                                    return n = t.sent(), this.td.ro(r, n.ho, n.co), [4, this.pd(n.oo)];
                                case 2:
                                    t.sent(), t.label = 3;
                                case 3:
                                    return [4, this.Kl.Pl()];
                                case 4:
                                    return t.sent(), [2] } }) }) }, Of.prototype.kl = function(u) { return p(this, void 0, void 0, function() { var e, n, r, i, o, s, a = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return !0 !== u || !0 === this.isPrimary ? [3, 3] : (this.isPrimary = !0, [4, this.Kl.kl(!0)]);
                                case 1:
                                    return t.sent(), o = this.td.Ch(), [4, this.Cd(o.nt())];
                                case 2:
                                    for (e = t.sent(), n = 0, r = e; n < r.length; n++) i = r[n], this.Kl.listen(i); return [3, 7];
                                case 3:
                                    return !1 !== u || !1 === this.isPrimary ? [3, 7] : (this.isPrimary = !1, o = [], s = Promise.resolve(), $r(this.rd, function(t, e) { a.td.jh(t) ? o.push(t) : s = s.then(function() { return a.gd(t), a.zf.zo(t, !0) }), a.Kl.wl(t) }), [4, s]);
                                case 4:
                                    return t.sent(), [4, this.Cd(o)];
                                case 5:
                                    return t.sent(), this.Pd(), [4, this.Kl.kl(!1)];
                                case 6:
                                    t.sent(), t.label = 7;
                                case 7:
                                    return [2] } }) }) }, Of.prototype.Pd = function() { var e = this;
                    $r(this.sd, function(t) { e.Kl.wl(t) }), this.od.Ss(), this.sd = [], this.ud = new qi(Ui.W) }, Of.prototype.Cd = function(d) { return p(this, void 0, void 0, function() { var e, n, r, i, o, s, a, u, h, c, f, l, p; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    e = [], n = [], r = 0, i = d, t.label = 1;
                                case 1:
                                    return r < i.length ? (o = i[r], s = void 0, (a = this.rd[o]) && 0 !== a.length ? [4, this.zf.zo(o, !0)] : [3, 8]) : [3, 14];
                                case 2:
                                    return t.sent(), [4, this.zf.Mo(a[0].Yn())];
                                case 3:
                                    s = t.sent(), u = 0, h = a, t.label = 4;
                                case 4:
                                    return u < h.length ? (c = h[u], Tu(!!(f = this.ed.get(c)), "No query view found for " + c), [4, this.wd(f)]) : [3, 7];
                                case 5:
                                    (l = t.sent()).snapshot && n.push(l.snapshot), t.label = 6;
                                case 6:
                                    return u++, [3, 4];
                                case 7:
                                    return [3, 12];
                                case 8:
                                    return Tu(!0 === this.isPrimary, "A secondary tab should never have an active target without an active query."), [4, this.zf.ih(o)];
                                case 9:
                                    return Tu(!!(p = t.sent()), "Target for id " + o + " not found"), [4, this.zf.Mo(p)];
                                case 10:
                                    return s = t.sent(), [4, this.vd(this.kd(p), o, !1)];
                                case 11:
                                    t.sent(), t.label = 12;
                                case 12:
                                    e.push(s), t.label = 13;
                                case 13:
                                    return r++, [3, 1];
                                case 14:
                                    return this.nd.Ga(n), [2, e] } }) }) }, Of.prototype.kd = function(t) { return new $s(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F", t.startAt, t.endAt) }, Of.prototype.$o = function() { return this.zf.$o() }, Of.prototype.$h = function(r, i, o) { return p(this, void 0, void 0, function() { var e, n; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    if (this.isPrimary) return wu("SyncEngine", "Ignoring unexpected query state notification."), [2]; if (!this.rd[r]) return [3, 7]; switch (i) {
                                        case "current":
                                        case "not-current":
                                            return [3, 1];
                                        case "rejected":
                                            return [3, 4] } return [3, 6];
                                case 1:
                                    return [4, this.zf.eh()];
                                case 2:
                                    return e = t.sent(), n = Ka.Ai(r, "current" === i), [4, this.pd(e, n)];
                                case 3:
                                    return t.sent(), [3, 7];
                                case 4:
                                    return [4, this.zf.zo(r, !0)];
                                case 5:
                                    return t.sent(), this.gd(r, o), [3, 7];
                                case 6:
                                    Iu("Unexpected target state: " + i), t.label = 7;
                                case 7:
                                    return [2] } }) }) }, Of.prototype.Zh = function(f, l) { return p(this, void 0, void 0, function() { var e, n, r, i, o, s, a, u, h, c = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    if (!this.isPrimary) return [2];
                                    e = 0, n = f, t.label = 1;
                                case 1:
                                    return e < n.length ? (h = n[e], Tu(!this.rd[h], "Trying to add an already active target"), [4, this.zf.ih(h)]) : [3, 6];
                                case 2:
                                    return Tu(!!(r = t.sent()), "Query data for active target " + h + " not found"), [4, this.zf.Mo(r)];
                                case 3:
                                    return i = t.sent(), [4, this.vd(this.kd(r), i.targetId, !1)];
                                case 4:
                                    t.sent(), this.Kl.listen(i), t.label = 5;
                                case 5:
                                    return e++, [3, 1];
                                case 6:
                                    o = function(e) { return v(this, function(t) { switch (t.label) {
                                                case 0:
                                                    return s.rd[e] ? [4, s.zf.zo(e, !1).then(function() { c.Kl.wl(e), c.gd(e) }).catch(ph)] : [2, "continue"];
                                                case 1:
                                                    return t.sent(), [2] } }) }, s = this, a = 0, u = l, t.label = 7;
                                case 7:
                                    return a < u.length ? (h = u[a], [5, o(h)]) : [3, 10];
                                case 8:
                                    t.sent(), t.label = 9;
                                case 9:
                                    return a++, [3, 7];
                                case 10:
                                    return [2] } }) }) }, Of.prototype.enableNetwork = function() { return this.zf.nh(!0), this.Kl.enableNetwork() }, Of.prototype.disableNetwork = function() { return this.zf.nh(!1), this.Kl.disableNetwork() }, Of.prototype.ge = function(t) { var e = this.sd[t]; if (e && e.Zl) return qa().add(e.key); var n = qa(),
                        r = this.rd[t]; if (!r) return n; for (var i = 0, o = r; i < o.length; i++) { var s = o[i],
                            a = this.ed.get(s);
                        Tu(!!a, "No query view found for " + s), n = n.Qt(a.view.Ul) } return n }, Of),
                Tf = (Cf.prototype.listen = function(t) { var e = t.query,
                        n = !1,
                        r = this.Od.get(e); return r || (n = !0, r = new bf, this.Od.set(e, r)), r.listeners.push(t), Tu(!t.Ql(this.onlineState), "applyOnlineStateChange() shouldn't raise an event for brand-new listeners."), r.Nd && t.Vd(r.Nd) && this.Ud(), n ? this.dh.listen(e).then(function(t) { return r.targetId = t }) : Promise.resolve(r.targetId) }, Cf.prototype.wl = function(o) { return p(this, void 0, void 0, function() { var e, n, r, i; return v(this, function(t) { return e = o.query, n = !1, (r = this.Od.get(e)) && 0 <= (i = r.listeners.indexOf(o)) && (r.listeners.splice(i, 1), n = 0 === r.listeners.length), n ? (this.Od.delete(e), [2, this.dh.wl(e)]) : [2] }) }) }, Cf.prototype.Ga = function(t) { for (var e = !1, n = 0, r = t; n < r.length; n++) { var i = r[n],
                            o = i.query,
                            s = this.Od.get(o); if (s) { for (var a = 0, u = s.listeners; a < u.length; a++) u[a].Vd(i) && (e = !0);
                            s.Nd = i } } e && this.Ud() }, Cf.prototype.Dd = function(t, e) { var n = this.Od.get(t); if (n)
                        for (var r = 0, i = n.listeners; r < i.length; r++) i[r].onError(e);
                    this.Od.delete(t) }, Cf.prototype.yd = function(i) { this.onlineState = i; var o = !1;
                    this.Od.forEach(function(t, e) { for (var n = 0, r = e.listeners; n < r.length; n++) r[n].Ql(i) && (o = !0) }), o && this.Ud() }, Cf.prototype.xd = function(t) { this.Fd.add(t), t.next() }, Cf.prototype.jd = function(t) { this.Fd.delete(t) }, Cf.prototype.Ud = function() { this.Fd.forEach(function(t) { t.next() }) }, Cf),
                Nf = (Rf.prototype.Vd = function(t) { if (Tu(0 < t.docChanges.length || t._i, "We got a new snapshot with no changes?"), !this.options.includeMetadataChanges) { for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) { var i = r[n];
                            3 !== i.type && e.push(i) } t = new Ha(t.query, t.docs, t.pi, e, t.yi, t.fromCache, t._i, !0) } var o = !1; return this.qd ? this.Md(t) && (this.Ld.next(t), o = !0) : this.Qd(t, this.onlineState) && (this.Gd(t), o = !0), this.Bd = t, o }, Rf.prototype.onError = function(t) { this.Ld.error(t) }, Rf.prototype.Ql = function(t) { this.onlineState = t; var e = !1; return this.Bd && !this.qd && this.Qd(this.Bd, t) && (this.Gd(this.Bd), e = !0), e }, Rf.prototype.Qd = function(t, e) { if (Tu(!this.qd, "Determining whether to raise first event but already had first event"), !t.fromCache) return !0; var n = "Offline" !== e; return this.options.Wd && n ? (Tu(t.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !t.docs.Y() || "Offline" === e }, Rf.prototype.Md = function(t) { if (0 < t.docChanges.length) return !0; var e = this.Bd && this.Bd.hasPendingWrites !== t.hasPendingWrites; return !(!t._i && !e) && !0 === this.options.includeMetadataChanges }, Rf.prototype.Gd = function(t) { Tu(!this.qd, "Trying to raise initial events for second time"), t = Ha.Ti(t.query, t.docs, t.yi, t.fromCache), this.qd = !0, this.Ld.next(t) }, Rf),
                Af = (Df.prototype.start = function(e, n) { var r = this;
                    this.Kd(); var i = new Cu,
                        o = new Cu,
                        s = !1; return this.credentials.v(function(t) { s ? r.$r.ou(function() { return r.Pl(t) }) : (s = !0, r.Hd(e, n, t, o).then(function() { return r.Jd(t) }).then(i.resolve, i.reject)) }), this.$r.ou(function() { return i.promise }), o.promise }, Df.prototype.enableNetwork = function() { var t = this; return this.Kd(), this.$r.enqueue(function() { return t.dh.enableNetwork() }) }, Df.prototype.Hd = function(n, r, i, o) { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return t.trys.push([0, 2, , 3]), [4, n.initialize(this.$r, this.zd, this.platform, this.clientId, i, r)];
                                case 1:
                                    return t.sent(), this.persistence = n.la(), this.Yd = n.fa(), this.td = n.da(), o.resolve(), [3, 3];
                                case 2:
                                    if (e = t.sent(), o.reject(e), !this.Xd(e)) throw e; return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + e), [2, this.Hd(new oc, { aa: !1 }, i, o)];
                                case 3:
                                    return [2] } }) }) }, Df.prototype.Xd = function(t) { return "FirebaseError" === t.name ? t.code === qr.FAILED_PRECONDITION || t.code === qr.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || 22 === t.code || 20 === t.code || 11 === t.code }, Df.prototype.Kd = function() { if (this.$r.vu) throw new Mr(qr.FAILED_PRECONDITION, "The client has already been terminated.") }, Df.prototype.Jd = function(h) { var t = this; return wu("FirestoreClient", "Initializing. user=", h.uid), this.platform.$d(this.zd).then(function(u) { return p(t, void 0, void 0, function() { var e, n, r, i, o, s, a = this; return v(this, function(t) { switch (t.label) {
                                    case 0:
                                        return e = new Lh, this.zf = new ih(this.persistence, e, h), [4, this.zf.start()];
                                    case 1:
                                        return t.sent(), n = this.platform.Zd(), r = this.platform.tv(this.zd.Dn), i = new cc(this.$r, u, this.credentials, r), o = function(t) { return a.dh.Ql(t, 0) }, s = function(t) { return a.dh.Ql(t, 1) }, this.Kl = new lf(this.zf, i, this.$r, o, n), this.dh = new If(this.zf, this.Kl, this.td, h), this.td.vh = s, this.Kl.dh = this.dh, this.td.dh = this.dh, this.nv = new Tf(this.dh), [4, this.td.start()];
                                    case 2:
                                        return t.sent(), [4, this.Kl.start()];
                                    case 3:
                                        return t.sent(), [4, this.persistence.na(function(e) { return p(a, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                                        case 0:
                                                            return [4, this.dh.kl(e)];
                                                        case 1:
                                                            return t.sent(), e && !this.Yd.ss ? this.Yd.start(this.zf) : e || this.Yd.stop(), [2] } }) }) })];
                                    case 4:
                                        return t.sent(), [4, this.persistence.ia(function() { return p(a, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                                        case 0:
                                                            return [4, this.terminate()];
                                                        case 1:
                                                            return t.sent(), [2] } }) }) })];
                                    case 5:
                                        return t.sent(), [2] } }) }) }) }, Df.prototype.Pl = function(t) { return this.$r.Iu(), wu("FirestoreClient", "Credential Changed. Current user: " + t.uid), this.dh.Pl(t) }, Df.prototype.disableNetwork = function() { var t = this; return this.Kd(), this.$r.enqueue(function() { return t.dh.disableNetwork() }) }, Df.prototype.terminate = function() { var t = this; return this.$r.pu(function() { return p(t, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                    case 0:
                                        return this.Yd.stop(), [4, this.Kl.shutdown()];
                                    case 1:
                                        return t.sent(), [4, this.td.shutdown()];
                                    case 2:
                                        return t.sent(), [4, this.persistence.shutdown()];
                                    case 3:
                                        return t.sent(), this.credentials.m(), [2] } }) }) }) }, Df.prototype.waitForPendingWrites = function() { var t = this;
                    this.Kd(); var e = new Cu; return this.$r.ou(function() { return t.dh.Td(e) }), e.promise }, Df.prototype.listen = function(t, e, n) { var r = this;
                    this.Kd(); var i = new Nf(t, e, n); return this.$r.ou(function() { return r.nv.listen(i) }), i }, Df.prototype.wl = function(t) { var e = this;
                    this.iv || this.$r.ou(function() { return e.nv.wl(t) }) }, Df.prototype.ev = function(t) { var e = this; return this.Kd(), this.$r.enqueue(function() { return e.zf.qo(t) }).then(function(t) { if (t instanceof Is) return t; if (t instanceof Ts) return null; throw new Mr(qr.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)") }) }, Df.prototype.rv = function(i) { var t = this; return this.Kd(), this.$r.enqueue(function() { return p(t, void 0, void 0, function() { var e, n, r; return v(this, function(t) { switch (t.label) {
                                    case 0:
                                        return [4, this.zf.Ko(i, !0)];
                                    case 1:
                                        return e = t.sent(), n = new pf(i, e.Yo), r = n.xl(e.documents), [2, n.qs(r, !1).snapshot] } }) }) }) }, Df.prototype.write = function(t) { var e = this;
                    this.Kd(); var n = new Cu; return this.$r.ou(function() { return e.dh.write(t, n) }), n.promise }, Df.prototype.Dn = function() { return this.zd.Dn }, Df.prototype.xd = function(t) { var e = this;
                    this.Kd(), this.$r.ou(function() { return e.nv.xd(t), Promise.resolve() }) }, Df.prototype.jd = function(t) { this.iv || this.nv.jd(t) }, Object.defineProperty(Df.prototype, "iv", { get: function() { return this.$r.vu }, enumerable: !0, configurable: !0 }), Df.prototype.transaction = function(t) { var e = this;
                    this.Kd(); var n = new Cu; return this.$r.ou(function() { return e.dh.runTransaction(e.$r, t, n), Promise.resolve() }), n.promise }, Df),
                Sf = (kf.prototype.next = function(t) { this.uv(this.observer.next, t) }, kf.prototype.error = function(t) { this.uv(this.observer.error, t) }, kf.prototype.sv = function() { this.muted = !0 }, kf.prototype.uv = function(t, e) { var n = this;
                    this.muted || setTimeout(function() { n.muted || t(e) }, 0) }, kf);

            function kf(t) { this.observer = t, this.muted = !1 }

            function Df(t, e, n, r) { this.platform = t, this.zd = e, this.credentials = n, this.$r = r, this.clientId = Nu.Ur() }

            function Rf(t, e, n) { this.query = t, this.Ld = e, this.qd = !1, this.Bd = null, this.onlineState = "Unknown", this.options = n || {} }

            function Cf(t) { this.dh = t, this.Od = new Pu(function(t) { return t.canonicalId() }), this.onlineState = "Unknown", this.Fd = new Set, this.dh.subscribe(this) }

            function Of(t, e, n, r) { this.zf = t, this.Kl = e, this.td = n, this.currentUser = r, this.nd = null, this.ed = new Pu(function(t) { return t.canonicalId() }), this.rd = {}, this.ud = new qi(Ui.W), this.sd = {}, this.od = new eh, this.hd = {}, this.ad = new Map, this.fd = Zh.Bc(), this.isPrimary = void 0, this.onlineState = "Unknown" }

            function xf(t, e, n, r) { this.$r = t, this.Kl = e, this.updateFunction = n, this.iu = r, this.Hl = 5, this.Sa = new sc(this.$r, "retry_transaction") }

            function Lf(i) { return function() { if ("object" != typeof i || null === i) return !1; for (var t = i, e = 0, n = ["next", "error", "complete"]; e < n.length; e++) { var r = n[e]; if (r in t && "function" == typeof t[r]) return !0 } return !1 }() } var Pf, _f = $u.Xu,
                Uf = (el.prototype.isEqual = function(t) { return this.host === t.host && this.ssl === t.ssl && this.timestampsInSnapshots === t.timestampsInSnapshots && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.forceLongPolling === t.forceLongPolling }, el),
                qf = (tl.prototype.settings = function(t) { if (ni("Firestore.settings", arguments, 1), oi("Firestore.settings", "object", 1, t), Qr(t, "persistence")) throw new Mr(qr.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().'); var e = new Uf(t); if (this.av && !this.mv.isEqual(e)) throw new Mr(qr.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                    void 0 !== (this.mv = e).credentials && (this.vv = function(t) { if (!t) return new Vr; switch (t.type) {
                            case "gapi":
                                var e = t.S; return Tu(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty), "unexpected gapi interface"), new Gr(e, t.D || "0");
                            case "provider":
                                return t.S;
                            default:
                                throw new Mr(qr.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type") } }(e.credentials)) }, tl.prototype.enableNetwork = function() { return this.cv(), this.av.enableNetwork() }, tl.prototype.disableNetwork = function() { return this.cv(), this.av.disableNetwork() }, tl.prototype.enablePersistence = function(t) { if (this.av) throw new Mr(qr.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object."); var e = !1; return t && (void 0 !== t.experimentalTabSynchronization && bu("The 'experimentalTabSynchronization' setting has been renamed to 'synchronizeTabs'. In a future release, the setting will be removed and it is recommended that you update your firestore.enablePersistence() call to use 'synchronizeTabs'."), e = Xr(void 0 !== t.synchronizeTabs ? t.synchronizeTabs : t.experimentalTabSynchronization, !1)), this.pv(this.wv, { aa: !0, cacheSizeBytes: this.mv.cacheSizeBytes, synchronizeTabs: e }) }, tl.prototype.clearPersistence = function() { return p(this, void 0, void 0, function() { var r, e = this; return v(this, function(t) { if (void 0 !== this.av && !this.av.iv) throw new Mr(qr.FAILED_PRECONDITION, "Persistence cannot be cleared after this Firestore instance is initialized."); return r = new Cu, this.hv.wu(function() { return p(e, void 0, void 0, function() { var e, n; return v(this, function(t) { switch (t.label) {
                                            case 0:
                                                return t.trys.push([0, 2, , 3]), e = this.yv(), [4, this.wv.clearPersistence(e)];
                                            case 1:
                                                return t.sent(), r.resolve(), [3, 3];
                                            case 2:
                                                return n = t.sent(), r.reject(n), [3, 3];
                                            case 3:
                                                return [2] } }) }) }), [2, r.promise] }) }) }, tl.prototype.terminate = function() { return this.app._removeServiceInstance("firestore"), this.INTERNAL.delete() }, Object.defineProperty(tl.prototype, "_v", { get: function() { return this.cv(), this.av.iv }, enumerable: !0, configurable: !0 }), tl.prototype.waitForPendingWrites = function() { return this.cv(), this.av.waitForPendingWrites() }, tl.prototype.onSnapshotsInSync = function(t) { if (this.cv(), Lf(t)) return this.Iv(t);
                    oi("Firestore.onSnapshotsInSync", "function", 1, t); var e = { next: t }; return this.Iv(e) }, tl.prototype.Iv = function(t) { var e = this,
                        n = new Sf({ next: function() { t.next && t.next() }, error: function(t) { throw Iu("Uncaught Error in onSnapshotsInSync") } }); return this.av.xd(n),
                        function() { n.sv(), e.av.jd(n) } }, tl.prototype.cv = function() { return this.av || this.pv(new oc, { aa: !1 }), this.av }, tl.prototype.yv = function() { return new Ru(this.fv, this.dv, this.mv.host, this.mv.ssl, this.mv.forceLongPolling) }, tl.prototype.pv = function(t, e) { Tu(!!this.mv.host, "FirestoreSettings.host is not set"), Tu(!this.av, "configureClient() called multiple times"); var n = this.yv(); return this.av = new Af(pu.C(), n, this.vv, this.hv), this.av.start(t, e) }, tl.prototype.bv = function(r) { return new Zc(function(t) { if (t instanceof Ff) { var e = r,
                                n = t.firestore.fv; if (!n.isEqual(e)) throw new Mr(qr.INVALID_ARGUMENT, "Document reference is for database " + n.projectId + "/" + n.database + " but should be for database " + e.projectId + "/" + e.database); return new $c(r, t.Tv) } return t }) }, tl.lv = function(t) { var e = t.options; if (!Qr(e, "projectId")) throw new Mr(qr.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.'); var n = e.projectId; if (!n || "string" != typeof n) throw new Mr(qr.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options"); return new Ou(n) }, Object.defineProperty(tl.prototype, "app", { get: function() { if (!this.ov) throw new Mr(qr.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available"); return this.ov }, enumerable: !0, configurable: !0 }), tl.prototype.collection = function(t) { return ni("Firestore.collection", arguments, 1), oi("Firestore.collection", "non-empty string", 1, t), this.cv(), new rl(Li.et(t), this) }, tl.prototype.doc = function(t) { return ni("Firestore.doc", arguments, 1), oi("Firestore.doc", "non-empty string", 1, t), this.cv(), Ff.Ev(Li.et(t), this) }, tl.prototype.collectionGroup = function(t) { if (ni("Firestore.collectionGroup", arguments, 1), oi("Firestore.collectionGroup", "non-empty string", 1, t), 0 <= t.indexOf("/")) throw new Mr(qr.INVALID_ARGUMENT, "Invalid collection ID '" + t + "' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'."); return this.cv(), new zf(new $s(Li.rt, t), this) }, tl.prototype.runTransaction = function(e) { var n = this; return ni("Firestore.runTransaction", arguments, 1), oi("Firestore.runTransaction", "function", 1, e), this.cv().transaction(function(t) { return e(new Mf(n, t)) }) }, tl.prototype.batch = function() { return this.cv(), new Vf(this) }, Object.defineProperty(tl, "logLevel", { get: function() { switch (mu()) {
                            case 0:
                                return "debug";
                            case 1:
                                return "error";
                            case 2:
                                return "silent";
                            default:
                                return Iu("Unknown log level: " + mu()) } }, enumerable: !0, configurable: !0 }), tl.setLogLevel = function(t) { switch (ni("Firestore.setLogLevel", arguments, 1), oi("Firestore.setLogLevel", "non-empty string", 1, t), t) {
                        case "debug":
                            gu(0); break;
                        case "error":
                            gu(1); break;
                        case "silent":
                            gu(2); break;
                        default:
                            throw new Mr(qr.INVALID_ARGUMENT, "Invalid log level: " + t) } }, tl.prototype.Dv = function() { return this.mv.timestampsInSnapshots }, tl),
                Mf = (Zf.prototype.get = function(t) { var n = this;
                    ni("Transaction.get", arguments, 1); var r = ul("Transaction.get", t, this.Rv); return this.Sv.lookup([r.Tv]).then(function(t) { if (!t || 1 !== t.length) return Iu("Mismatch in docs returned from document lookup."); var e = t[0]; if (e instanceof Ts) return new Gf(n.Rv, r.Tv, null, !1, !1, r.Av); if (e instanceof Is) return new Gf(n.Rv, r.Tv, e, !1, !1, r.Av); throw Iu("BatchGetDocumentsRequest returned unexpected document type: " + e.constructor.name) }) }, Zf.prototype.set = function(t, e, n) { ii("Transaction.set", arguments, 2, 3); var r = ul("Transaction.set", t, this.Rv);
                    n = ol("Transaction.set", n); var i = hl(r.Av, e, "Transaction.set"),
                        o = i[0],
                        s = i[1],
                        a = n.merge || n.mergeFields ? this.Rv.gv.yf(s, o, n.mergeFields) : this.Rv.gv.bf(s, o); return this.Sv.set(r.Tv, a), this }, Zf.prototype.update = function(t, e, n) { for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s]; return i = "string" == typeof e || e instanceof fc ? (ri("Transaction.update", arguments, 3), r = ul("Transaction.update", t, this.Rv), this.Rv.gv.Tf("Transaction.update", e, n, o)) : (ni("Transaction.update", arguments, 2), r = ul("Transaction.update", t, this.Rv), this.Rv.gv._f("Transaction.update", e)), this.Sv.update(r.Tv, i), this }, Zf.prototype.delete = function(t) { ni("Transaction.delete", arguments, 1); var e = ul("Transaction.delete", t, this.Rv); return this.Sv.delete(e.Tv), this }, Zf),
                Vf = ($f.prototype.set = function(t, e, n) { ii("WriteBatch.set", arguments, 2, 3), this.kv(); var r = ul("WriteBatch.set", t, this.Rv);
                    n = ol("WriteBatch.set", n); var i = hl(r.Av, e, "WriteBatch.set"),
                        o = i[0],
                        s = i[1],
                        a = n.merge || n.mergeFields ? this.Rv.gv.yf(s, o, n.mergeFields) : this.Rv.gv.bf(s, o); return this.Cv = this.Cv.concat(a.hf(r.Tv, No.NONE)), this }, $f.prototype.update = function(t, e, n) { for (var r, i, o = [], s = 3; s < arguments.length; s++) o[s - 3] = arguments[s]; return this.kv(), i = "string" == typeof e || e instanceof fc ? (ri("WriteBatch.update", arguments, 3), r = ul("WriteBatch.update", t, this.Rv), this.Rv.gv.Tf("WriteBatch.update", e, n, o)) : (ni("WriteBatch.update", arguments, 2), r = ul("WriteBatch.update", t, this.Rv), this.Rv.gv._f("WriteBatch.update", e)), this.Cv = this.Cv.concat(i.hf(r.Tv, No.exists(!0))), this }, $f.prototype.delete = function(t) { ni("WriteBatch.delete", arguments, 1), this.kv(); var e = ul("WriteBatch.delete", t, this.Rv); return this.Cv = this.Cv.concat(new Ro(e.Tv, No.NONE)), this }, $f.prototype.commit = function() { return p(this, void 0, void 0, function() { return v(this, function(t) { return this.kv(), this.Pv = !0, 0 < this.Cv.length ? [2, this.Rv.cv().write(this.Cv)] : [2] }) }) }, $f.prototype.kv = function() { if (this.Pv) throw new Mr(qr.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.") }, $f),
                Ff = (Xf.Ev = function(t, e, n) { if (t.length % 2 != 0) throw new Mr(qr.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.it() + " has " + t.length); return new Xf(new Ui(t), e, n) }, Object.defineProperty(Xf.prototype, "id", { get: function() { return this.Tv.path.$() }, enumerable: !0, configurable: !0 }), Object.defineProperty(Xf.prototype, "parent", { get: function() { return new rl(this.Tv.path.J(), this.firestore, this.Av) }, enumerable: !0, configurable: !0 }), Object.defineProperty(Xf.prototype, "path", { get: function() { return this.Tv.path.it() }, enumerable: !0, configurable: !0 }), Xf.prototype.collection = function(t) { if (ni("DocumentReference.collection", arguments, 1), oi("DocumentReference.collection", "non-empty string", 1, t), !t) throw new Mr(qr.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()"); var e = Li.et(t); return new rl(this.Tv.path.child(e), this.firestore) }, Xf.prototype.isEqual = function(t) { if (!(t instanceof Xf)) throw vi("isEqual", "DocumentReference", 1, t); return this.firestore === t.firestore && this.Tv.isEqual(t.Tv) && this.Av === t.Av }, Xf.prototype.set = function(t, e) { ii("DocumentReference.set", arguments, 1, 2), e = ol("DocumentReference.set", e); var n = hl(this.Av, t, "DocumentReference.set"),
                        r = n[0],
                        i = n[1],
                        o = e.merge || e.mergeFields ? this.firestore.gv.yf(i, r, e.mergeFields) : this.firestore.gv.bf(i, r); return this.av.write(o.hf(this.Tv, No.NONE)) }, Xf.prototype.update = function(t, e) { for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i]; return n = "string" == typeof t || t instanceof fc ? (ri("DocumentReference.update", arguments, 2), this.firestore.gv.Tf("DocumentReference.update", t, e, r)) : (ni("DocumentReference.update", arguments, 1), this.firestore.gv._f("DocumentReference.update", t)), this.av.write(n.hf(this.Tv, No.exists(!0))) }, Xf.prototype.delete = function() { return ni("DocumentReference.delete", arguments, 0), this.av.write([new Ro(this.Tv, No.NONE)]) }, Xf.prototype.onSnapshot = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    ii("DocumentReference.onSnapshot", arguments, 1, 4); var n, r = { includeMetadataChanges: !1 },
                        i = 0; "object" != typeof t[i] || Lf(t[i]) || (di("DocumentReference.onSnapshot", r = t[i], ["includeMetadataChanges"]), ui("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++); var o = { includeMetadataChanges: r.includeMetadataChanges }; return n = Lf(t[i]) ? t[i] : (oi("DocumentReference.onSnapshot", "function", i, t[i]), si("DocumentReference.onSnapshot", "function", i + 1, t[i + 1]), si("DocumentReference.onSnapshot", "function", i + 2, t[i + 2]), { next: t[i], error: t[i + 1], complete: t[i + 2] }), this.Nv(o, n) }, Xf.prototype.Nv = function(t, n) { var r = this,
                        e = function(t) { console.error("Uncaught Error in onSnapshot:", t) };
                    n.error && (e = n.error.bind(n)); var i = new Sf({ next: function(t) { if (n.next) { Tu(t.docs.size <= 1, "Too many documents returned on a document query"); var e = t.docs.get(r.Tv);
                                    n.next(new Gf(r.firestore, r.Tv, e, t.fromCache, t.hasPendingWrites, r.Av)) } }, error: e }),
                        o = this.av.listen($s.jn(this.Tv.path), i, t); return function() { i.sv(), r.av.wl(o) } }, Xf.prototype.get = function(n) { var r = this; return ii("DocumentReference.get", arguments, 0, 1), al("DocumentReference.get", n), new Promise(function(e, t) { n && "cache" === n.source ? r.firestore.cv().ev(r.Tv).then(function(t) { e(new Gf(r.firestore, r.Tv, t, !0, t instanceof Is && t.rn, r.Av)) }, t) : r.Ov(e, t, n) }) }, Xf.prototype.Ov = function(e, n, r) { var i = this.Nv({ includeMetadataChanges: !0, Wd: !0 }, { next: function(t) { i(), !t.exists && t.metadata.fromCache ? n(new Mr(qr.UNAVAILABLE, "Failed to get document because the client is offline.")) : t.exists && t.metadata.fromCache && r && "server" === r.source ? n(new Mr(qr.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : e(t) }, error: n }) }, Xf.prototype.withConverter = function(t) { return new Xf(this.Tv, this.firestore, t) }, Xf),
                jf = (Qf.prototype.isEqual = function(t) { return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache }, Qf),
                Gf = (Yf.prototype.data = function(t) { if (ii("DocumentSnapshot.data", arguments, 0, 1), t = sl("DocumentSnapshot.data", t), this.Fv) { if (this.Av) { var e = new Bf(this.Rv, this.Tv, this.Fv, this.Vv, this.Uv); return this.Av.fromFirestore(e, t) } return this.xv(this.Fv.data(), Oo.gn(t, this.Rv.Dv())) } }, Yf.prototype.get = function(t, e) { if (ii("DocumentSnapshot.get", arguments, 1, 2), e = sl("DocumentSnapshot.get", e), this.Fv) { var n = this.Fv.data().field( of ("DocumentSnapshot.get", t)); if (null !== n) return this.jv(n, Oo.gn(e, this.Rv.Dv())) } }, Object.defineProperty(Yf.prototype, "id", { get: function() { return this.Tv.path.$() }, enumerable: !0, configurable: !0 }), Object.defineProperty(Yf.prototype, "ref", { get: function() { return new Ff(this.Tv, this.Rv, this.Av) }, enumerable: !0, configurable: !0 }), Object.defineProperty(Yf.prototype, "exists", { get: function() { return null !== this.Fv }, enumerable: !0, configurable: !0 }), Object.defineProperty(Yf.prototype, "metadata", { get: function() { return new jf(this.Uv, this.Vv) }, enumerable: !0, configurable: !0 }), Yf.prototype.isEqual = function(t) { if (!(t instanceof Yf)) throw vi("isEqual", "DocumentSnapshot", 1, t); return this.Rv === t.Rv && this.Vv === t.Vv && this.Tv.isEqual(t.Tv) && (null === this.Fv ? null === t.Fv : this.Fv.isEqual(t.Fv)) && this.Av === t.Av }, Yf.prototype.xv = function(t, n) { var r = this,
                        i = {}; return t.forEach(function(t, e) { i[t] = r.jv(e, n) }), i }, Yf.prototype.jv = function(t, e) { if (t instanceof gs) return this.xv(t, e); if (t instanceof bs) return this.Lv(t, e); if (t instanceof ys) { var n = t.value(e),
                            r = this.Rv.cv().Dn(); return t.Dn.isEqual(r) || bu("Document " + this.Tv.path + " contains a document reference within a different database (" + t.Dn.projectId + "/" + t.Dn.database + ") which is not supported. It will be treated as a reference in the current database (" + r.projectId + "/" + r.database + ") instead."), new Ff(n, this.Rv, this.Av) } return t.value(e) }, Yf.prototype.Lv = function(t, e) { var n = this; return t.Jt.map(function(t) { return n.jv(t, e) }) }, Yf),
                Bf = (t(Jf, Pf = Gf), Jf.prototype.data = function(t) { var e = Pf.prototype.data.call(this, t); return Tu(void 0 !== e, "Document in a QueryDocumentSnapshot should exist"), e }, Jf),
                zf = (Wf.prototype.where = function(t, e, n) { var r;
                    ni("Query.where", arguments, 3), pi("Query.where", 3, n),
                        function(t, e, n, r) { if (!e.some(function(t) { return t === r })) throw new Mr(qr.INVALID_ARGUMENT, "Invalid value " + li(r) + " provided to function " + t + "() for its " + mi(n) + " argument. Acceptable values: " + e.join(", ")) }("Query.where", ["<", "<=", "==", ">=", ">", "array-contains", "in", "array-contains-any"], 2, e); var i = of ("Query.where", t),
                        o = Zs.et(e); if (i.st()) { if (o === Zs.ARRAY_CONTAINS || o === Zs.ARRAY_CONTAINS_ANY) throw new Mr(qr.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o.toString() + "' queries on FieldPath.documentId()."); if (o === Zs.IN) { this.Bv(n, o); for (var s = [], a = 0, u = n; a < u.length; a++) { var h = u[a];
                                s.push(this.Mv(h)) } r = new bs(s) } else r = this.Mv(n) } else o !== Zs.IN && o !== Zs.ARRAY_CONTAINS_ANY || this.Bv(n, o), r = this.firestore.gv.Ef("Query.where", n, o === Zs.IN); var c = ta.create(i, o, r); return this.Qv(c), new Wf(this.qv.Bn(c), this.firestore, this.Av) }, Wf.prototype.orderBy = function(t, e) { var n; if (ii("Query.orderBy", arguments, 1, 2), si("Query.orderBy", "non-empty string", 2, e), void 0 === e || "asc" === e) n = sa.ASCENDING;
                    else { if ("desc" !== e) throw new Mr(qr.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + e + "', expected 'asc' or 'desc'.");
                        n = sa.DESCENDING } if (null !== this.qv.startAt) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy()."); if (null !== this.qv.endAt) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy()."); var r = of ("Query.orderBy", t),
                        i = new ua(r, n); return this.Gv(i), new Wf(this.qv.Qn(i), this.firestore, this.Av) }, Wf.prototype.limit = function(t) { return ni("Query.limit", arguments, 1), oi("Query.limit", "number", 1, t), yi("Query.limit", 1, t), new Wf(this.qv.Gn(t), this.firestore, this.Av) }, Wf.prototype.limitToLast = function(t) { return ni("Query.limitToLast", arguments, 1), oi("Query.limitToLast", "number", 1, t), yi("Query.limitToLast", 1, t), new Wf(this.qv.Wn(t), this.firestore, this.Av) }, Wf.prototype.startAt = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    ri("Query.startAt", arguments, 1); var r = this.Wv("Query.startAt", t, e, !0); return new Wf(this.qv.zn(r), this.firestore, this.Av) }, Wf.prototype.startAfter = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    ri("Query.startAfter", arguments, 1); var r = this.Wv("Query.startAfter", t, e, !1); return new Wf(this.qv.zn(r), this.firestore, this.Av) }, Wf.prototype.endBefore = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    ri("Query.endBefore", arguments, 1); var r = this.Wv("Query.endBefore", t, e, !0); return new Wf(this.qv.Kn(r), this.firestore, this.Av) }, Wf.prototype.endAt = function(t) { for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                    ri("Query.endAt", arguments, 1); var r = this.Wv("Query.endAt", t, e, !1); return new Wf(this.qv.Kn(r), this.firestore, this.Av) }, Wf.prototype.isEqual = function(t) { if (!(t instanceof Wf)) throw vi("isEqual", "Query", 1, t); return this.firestore === t.firestore && this.qv.isEqual(t.qv) }, Wf.prototype.withConverter = function(t) { return new Wf(this.qv, this.firestore, t) }, Wf.prototype.Wv = function(t, e, n, r) { if (pi(t, 1, e), e instanceof Gf) { if (0 < n.length) throw new Mr(qr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "()."); var i = e; if (!i.exists) throw new Mr(qr.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "()."); return this.zv(t, i.Fv, r) } var o = [e].concat(n); return this.Kv(t, o, r) }, Wf.prototype.zv = function(t, e, n) { for (var r = [], i = 0, o = this.qv.orderBy; i < o.length; i++) { var s = o[i]; if (s.field.st()) r.push(new ys(this.firestore.fv, e.key));
                        else { var a = e.field(s.field); if (a instanceof ds) throw new Mr(qr.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + s.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'); if (null === a) { var u = s.field.it(); throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.") } r.push(a) } } return new aa(r, n) }, Wf.prototype.Kv = function(t, e, n) { var r = this.qv.On; if (e.length > r.length) throw new Mr(qr.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses"); for (var i = [], o = 0; o < e.length; o++) { var s = e[o]; if (r[o].field.st()) { if ("string" != typeof s) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof s); if (!this.qv.ui() && -1 !== s.indexOf("/")) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + t + "() must be a plain document ID, but '" + s + "' contains a slash."); var a = this.qv.path.child(Li.et(s)); if (!Ui.ct(a)) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + t + "() must result in a valid document path, but '" + a + "' is not because it contains an odd number of segments."); var u = new Ui(a);
                            i.push(new ys(this.firestore.fv, u)) } else { var h = this.firestore.gv.Ef(t, s);
                            i.push(h) } } return new aa(i, n) }, Wf.prototype.onSnapshot = function() { for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    ii("Query.onSnapshot", arguments, 1, 4); var n, r = {},
                        i = 0; return "object" != typeof t[i] || Lf(t[i]) || (di("Query.onSnapshot", r = t[i], ["includeMetadataChanges"]), ui("Query.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), i++), n = Lf(t[i]) ? t[i] : (oi("Query.onSnapshot", "function", i, t[i]), si("Query.onSnapshot", "function", i + 1, t[i + 1]), si("Query.onSnapshot", "function", i + 2, t[i + 2]), { next: t[i], error: t[i + 1], complete: t[i + 2] }), this.Hv(this.qv), this.Nv(r, n) }, Wf.prototype.Nv = function(t, e) { var n = this,
                        r = function(t) { console.error("Uncaught Error in onSnapshot:", t) };
                    e.error && (r = e.error.bind(e)); var i = new Sf({ next: function(t) { e.next && e.next(new Hf(n.firestore, n.qv, t, n.Av)) }, error: r }),
                        o = this.firestore.cv(),
                        s = o.listen(this.qv, i, t); return function() { i.sv(), o.wl(s) } }, Wf.prototype.Hv = function(t) { if (t.ei() && 0 === t.On.length) throw new Mr(qr.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause") }, Wf.prototype.get = function(n) { var r = this; return ii("Query.get", arguments, 0, 1), al("Query.get", n), this.Hv(this.qv), new Promise(function(e, t) { n && "cache" === n.source ? r.firestore.cv().rv(r.qv).then(function(t) { e(new Hf(r.firestore, r.qv, t, r.Av)) }, t) : r.Ov(e, t, n) }) }, Wf.prototype.Ov = function(e, n, r) { var i = this.Nv({ includeMetadataChanges: !0, Wd: !0 }, { next: function(t) { i(), t.metadata.fromCache && r && "server" === r.source ? n(new Mr(qr.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : e(t) }, error: n }) }, Wf.prototype.Mv = function(t) { if ("string" == typeof t) { if ("" === t) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string."); if (!this.qv.ui() && -1 !== t.indexOf("/")) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + t + "' contains a '/' character."); var e = this.qv.path.child(Li.et(t)); if (!Ui.ct(e)) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + e + "' is not because it has an odd number of segments (" + e.length + ")."); return new ys(this.firestore.fv, new Ui(e)) } if (t instanceof Ff) { var n = t; return new ys(this.firestore.fv, n.Tv) } throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + li(t) + ".") }, Wf.prototype.Bv = function(t, e) { if (!Array.isArray(t) || 0 === t.length) throw new Mr(qr.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters."); if (10 < t.length) throw new Mr(qr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array."); if (0 <= t.indexOf(null)) throw new Mr(qr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'null' in the value array."); if (0 < t.filter(function(t) { return Number.isNaN(t) }).length) throw new Mr(qr.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters cannot contain 'NaN' in the value array.") }, Wf.prototype.Qv = function(t) { if (t instanceof ta) { var e = [Zs.ARRAY_CONTAINS, Zs.ARRAY_CONTAINS_ANY],
                            n = [Zs.IN, Zs.ARRAY_CONTAINS_ANY],
                            r = 0 <= e.indexOf(t.op),
                            i = 0 <= n.indexOf(t.op); if (t.Mn()) { var o = this.qv.Ln(); if (null !== o && !o.isEqual(t.field)) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + o.toString() + "' and '" + t.field.toString() + "'"); var s = this.qv.qn();
                            null !== s && this.Jv(t.field, s) } else if (i || r) { var a = null; if (i && (a = this.qv.ri(n)), null === a && r && (a = this.qv.ri(e)), null != a) throw a === t.op ? new Mr(qr.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + t.op.toString() + "' filter.") : new Mr(qr.INVALID_ARGUMENT, "Invalid query. You cannot use '" + t.op.toString() + "' filters with '" + a.toString() + "' filters.") } } }, Wf.prototype.Gv = function(t) { if (null === this.qv.qn()) { var e = this.qv.Ln();
                        null !== e && this.Jv(e, t.field) } }, Wf.prototype.Jv = function(t, e) { if (!e.isEqual(t)) throw new Mr(qr.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t.toString() + "' and so you must also use '" + t.toString() + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e.toString() + "' instead.") }, Wf),
                Hf = (Object.defineProperty(Kf.prototype, "docs", { get: function() { var e = []; return this.forEach(function(t) { return e.push(t) }), e }, enumerable: !0, configurable: !0 }), Object.defineProperty(Kf.prototype, "empty", { get: function() { return this.Xv.docs.Y() }, enumerable: !0, configurable: !0 }), Object.defineProperty(Kf.prototype, "size", { get: function() { return this.Xv.docs.size }, enumerable: !0, configurable: !0 }), Kf.prototype.forEach = function(e, n) { var r = this;
                    ii("QuerySnapshot.forEach", arguments, 1, 2), oi("QuerySnapshot.forEach", "function", 1, e), this.Xv.docs.forEach(function(t) { e.call(n, r.tw(t)) }) }, Object.defineProperty(Kf.prototype, "query", { get: function() { return new zf(this.Yv, this.Rv, this.Av) }, enumerable: !0, configurable: !0 }), Kf.prototype.docChanges = function(t) { t && (di("QuerySnapshot.docChanges", t, ["includeMetadataChanges"]), ui("QuerySnapshot.docChanges", "boolean", "includeMetadataChanges", t.includeMetadataChanges)); var e = !(!t || !t.includeMetadataChanges); if (e && this.Xv.Ii) throw new Mr(qr.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."); return this.$v && this.Zv === e || (this.$v = function(i, e, o, s) { if (o.pi.Y()) { var n, r = 0; return o.docChanges.map(function(t) { var e = new Bf(i, t.doc.key, t.doc, o.fromCache, o.yi.has(t.doc.key), s); return Tu(0 === t.type, "Invalid event type for first snapshot"), Tu(!n || o.query.Xn(n, t.doc) < 0, "Got added events in wrong order"), n = t.doc, { type: "added", doc: e, oldIndex: -1, newIndex: r++ } }) } var a = o.pi; return o.docChanges.filter(function(t) { return e || 3 !== t.type }).map(function(t) { var e = new Bf(i, t.doc.key, t.doc, o.fromCache, o.yi.has(t.doc.key), s),
                                n = -1,
                                r = -1; return 0 !== t.type && (Tu(0 <= (n = a.indexOf(t.doc.key)), "Index for document not found"), a = a.delete(t.doc.key)), 1 !== t.type && (r = (a = a.add(t.doc)).indexOf(t.doc.key)), { type: function(t) { switch (t) {
                                        case 0:
                                            return "added";
                                        case 2:
                                        case 3:
                                            return "modified";
                                        case 1:
                                            return "removed";
                                        default:
                                            return Iu("Unknown change type: " + t) } }(t.type), doc: e, oldIndex: n, newIndex: r } }) }(this.Rv, e, this.Xv, this.Av), this.Zv = e), this.$v }, Kf.prototype.isEqual = function(t) { if (!(t instanceof Kf)) throw vi("isEqual", "QuerySnapshot", 1, t); return this.Rv === t.Rv && this.Yv.isEqual(t.Yv) && this.Xv.isEqual(t.Xv) && this.Av === t.Av }, Kf.prototype.tw = function(t) { return new Bf(this.Rv, t.key, t, this.metadata.fromCache, this.Xv.yi.has(t.key), this.Av) }, Kf);

            function Kf(t, e, n, r) { this.Rv = t, this.Yv = e, this.Xv = n, this.Av = r, this.$v = null, this.Zv = null, this.metadata = new jf(n.hasPendingWrites, n.fromCache) }

            function Wf(t, e, n) { this.qv = t, this.firestore = e, this.Av = n }

            function Jf() { return null !== Pf && Pf.apply(this, arguments) || this }

            function Yf(t, e, n, r, i, o) { this.Rv = t, this.Tv = e, this.Fv = n, this.Vv = r, this.Uv = i, this.Av = o }

            function Qf(t, e) { this.hasPendingWrites = t, this.fromCache = e }

            function Xf(t, e, n) { this.Tv = t, this.firestore = e, this.Av = n, this.av = this.firestore.cv() }

            function $f(t) { this.Rv = t, this.Cv = [], this.Pv = !1 }

            function Zf(t, e) { this.Rv = t, this.Sv = e }

            function tl(t, e, n) { var r = this; if (void 0 === n && (n = new oc), this.ov = null, this.hv = new Mu, this.INTERNAL = { delete: function() { return p(r, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                        case 0:
                                            return this.cv(), [4, this.av.terminate()];
                                        case 1:
                                            return t.sent(), [2] } }) }) } }, "object" == typeof t.options) { var i = t;
                    this.ov = i, this.fv = tl.lv(i), this.dv = i.name, this.vv = new Fr(e) } else { var o = t; if (!o.projectId) throw new Mr(qr.INVALID_ARGUMENT, "Must provide projectId");
                    this.fv = new Ou(o.projectId, o.database), this.dv = "[DEFAULT]", this.vv = new Vr } this.wv = n, this.mv = new Uf({}), this.gv = this.bv(this.fv) }

            function el(t) { if (void 0 === t.host) { if (void 0 !== t.ssl) throw new Mr(qr.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                    this.host = "firestore.googleapis.com", this.ssl = !0 } else ai("settings", "non-empty string", "host", t.host), this.host = t.host, ui("settings", "boolean", "ssl", t.ssl), this.ssl = Xr(t.ssl, !0); if (di("settings", t, ["host", "ssl", "credentials", "timestampsInSnapshots", "cacheSizeBytes", "experimentalForceLongPolling"]), ui("settings", "object", "credentials", t.credentials), this.credentials = t.credentials, ui("settings", "boolean", "timestampsInSnapshots", t.timestampsInSnapshots), !0 === t.timestampsInSnapshots ? bu("\n  The timestampsInSnapshots setting now defaults to true and you no\n  longer need to explicitly set it. In a future release, the setting\n  will be removed entirely and so it is recommended that you remove it\n  from your firestore.settings() call now.") : !1 === t.timestampsInSnapshots && bu("\n  The timestampsInSnapshots setting will soon be removed. YOU MUST UPDATE\n  YOUR CODE.\n\n  To hide this warning, stop using the timestampsInSnapshots setting in your\n  firestore.settings({ ... }) call.\n\n  Once you remove the setting, Timestamps stored in Cloud Firestore will be\n  read back as Firebase Timestamp objects instead of as system Date objects.\n  So you will also need to update code expecting a Date to instead expect a\n  Timestamp. For example:\n\n  // Old:\n  const date = snapshot.get('created_at');\n  // New:\n  const timestamp = snapshot.get('created_at'); const date =\n  timestamp.toDate();\n\n  Please audit all existing usages of Date when you enable the new\n  behavior."), this.timestampsInSnapshots = Xr(t.timestampsInSnapshots, !0), ui("settings", "number", "cacheSizeBytes", t.cacheSizeBytes), void 0 === t.cacheSizeBytes) this.cacheSizeBytes = $u.Zu;
                else { if (t.cacheSizeBytes !== _f && t.cacheSizeBytes < $u.$u) throw new Mr(qr.INVALID_ARGUMENT, "cacheSizeBytes must be at least " + $u.$u);
                    this.cacheSizeBytes = t.cacheSizeBytes } ui("settings", "boolean", "experimentalForceLongPolling", t.experimentalForceLongPolling), this.forceLongPolling = void 0 !== t.experimentalForceLongPolling && t.experimentalForceLongPolling } s(["length", "forEach", "map"], "undefined" != typeof Symbol ? [Symbol.iterator] : []).forEach(function(t) { try { Object.defineProperty(Hf.prototype.docChanges, t, { get: function() { return function() { throw new Mr(qr.INVALID_ARGUMENT, 'QuerySnapshot.docChanges has been changed from a property into a method, so usages like "querySnapshot.docChanges" should become "querySnapshot.docChanges()"') }() } }) } catch (t) {} }); var nl, rl = (t(il, nl = zf), Object.defineProperty(il.prototype, "id", { get: function() { return this.qv.path.$() }, enumerable: !0, configurable: !0 }), Object.defineProperty(il.prototype, "parent", { get: function() { var t = this.qv.path.J(); return t.Y() ? null : new Ff(new Ui(t), this.firestore) }, enumerable: !0, configurable: !0 }), Object.defineProperty(il.prototype, "path", { get: function() { return this.qv.path.it() }, enumerable: !0, configurable: !0 }), il.prototype.doc = function(t) { if (ii("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = Nu.Ur()), oi("CollectionReference.doc", "non-empty string", 1, t), "" === t) throw new Mr(qr.INVALID_ARGUMENT, "Document path must be a non-empty string"); var e = Li.et(t); return Ff.Ev(this.qv.path.child(e), this.firestore, this.Av) }, il.prototype.add = function(t) { ni("CollectionReference.add", arguments, 1), oi("CollectionReference.add", "object", 1, this.Av ? this.Av.toFirestore(t) : t); var e = this.doc(); return e.set(t).then(function() { return e }) }, il.prototype.withConverter = function(t) { return new il(this.nw, this.firestore, t) }, il);

            function il(t, e, n) { var r = nl.call(this, $s.jn(t), e, n) || this; if ((r.nw = t).length % 2 != 1) throw new Mr(qr.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t.it() + " has " + t.length); return r }

            function ol(t, e) { if (void 0 === e) return { merge: !1 }; if (di(t, e, ["merge", "mergeFields"]), ui(t, "boolean", "merge", e.merge), function(t, e, n, r, i) { void 0 !== r && function(t, e, n, r, i) { if (!(r instanceof Array)) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires its " + e + " option to be an array, but it was: " + li(r)); for (var o = 0; o < r.length; ++o)
                                if (!i(r[o])) throw new Mr(qr.INVALID_ARGUMENT, "Function " + t + "() requires all " + e + " elements to be " + n + ", but the value at index " + o + " was: " + li(r[o])) }(t, e, n, r, i) }(t, "mergeFields", "a string or a FieldPath", e.mergeFields, function(t) { return "string" == typeof t || t instanceof fc }), void 0 !== e.mergeFields && void 0 !== e.merge) throw new Mr(qr.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".'); return e }

            function sl(t, e) { return void 0 === e ? {} : (di(t, e, ["serverTimestamps"]), hi(t, 0, "serverTimestamps", e.serverTimestamps, ["estimate", "previous", "none"]), e) }

            function al(t, e) { si(t, "object", 1, e), e && (di(t, e, ["source"]), hi(t, 0, "source", e.source, ["default", "server", "cache"])) }

            function ul(t, e, n) { if (e instanceof Ff) { if (e.firestore !== n) throw new Mr(qr.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance."); return e } throw vi(t, "DocumentReference", 1, e) }

            function hl(t, e, n) { var r; return t ? (r = t.toFirestore(e), n = "toFirestore() in " + n) : r = e, [r, n] } var cl = Yr(qf, "Use firebase.firestore() instead."),
                fl = Yr(Mf, "Use firebase.firestore().runTransaction() instead."),
                ll = Yr(Vf, "Use firebase.firestore().batch() instead."),
                pl = Yr(Ff, "Use firebase.firestore().doc() instead."),
                dl = Yr(Gf),
                vl = Yr(Bf),
                yl = Yr(zf),
                ml = Yr(Hf),
                gl = Yr(rl, "Use firebase.firestore().collection() instead."),
                wl = (Sl.ew = function(o, t, s) { return Tu(Sl.ph(), "IndexedDB not supported in current environment."), wu("SimpleDb", "Opening database:", o), new Vu(function(n, r) { var i = window.indexedDB.open(o, t);
                        i.onsuccess = function(t) { var e = t.target.result;
                            n(new Sl(e)) }, i.onblocked = function() { r(new Mr(qr.FAILED_PRECONDITION, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.")) }, i.onerror = function(t) { var e = t.target.error; "VersionError" === e.name ? r(new Mr(qr.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(e) }, i.onupgradeneeded = function(t) { wu("SimpleDb", 'Database "' + o + '" requires upgrade from version:', t.oldVersion); var e = t.target.result;
                            s.createOrUpgrade(e, i.transaction, t.oldVersion, Xl).next(function() { wu("SimpleDb", "Database upgrade to version " + Xl + " complete") }) } }).Ou() }, Sl.delete = function(t) { return wu("SimpleDb", "Removing database:", t), kl(window.indexedDB.deleteDatabase(t)).Ou() }, Sl.ph = function() { if ("undefined" == typeof window || null == window.indexedDB) return !1; if (Sl.rw()) return !0; if (void 0 === window.navigator) return !1; var t = d(),
                        e = Sl.iw(t),
                        n = 0 < e && e < 10,
                        r = Sl.uw(t),
                        i = 0 < r && r < 4.5; return !(0 < t.indexOf("MSIE ") || 0 < t.indexOf("Trident/") || 0 < t.indexOf("Edge/") || n || i) }, Sl.rw = function() { var t; return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.sw) }, Sl.ow = function(t, e) { return t.store(e) }, Sl.iw = function(t) { var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                        n = e ? e[1].split("_").slice(0, 2).join(".") : "-1"; return Number(n) }, Sl.uw = function(t) { var e = t.match(/Android ([\d.]+)/i),
                        n = e ? e[1].split(".").slice(0, 2).join(".") : "-1"; return Number(n) }, Sl.prototype.hw = function(e) { this.db.onversionchange = function(t) { return e(t) } }, Sl.prototype.runTransaction = function(r, u, h) { return p(this, void 0, void 0, function() { var o, s, e, a, n; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    o = "readonly" === r, s = 0, e = function() { var e, n, r, i; return v(this, function(t) { switch (t.label) {
                                                case 0:
                                                    ++s, e = El.open(a.db, o ? "readonly" : "readwrite", u), t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]), (n = h(e).catch(function(t) { return e.abort(t), Vu.reject(t) }).Ou()).catch(function() {}), [4, e.cw];
                                                case 2:
                                                    return t.sent(), [2, { value: n }];
                                                case 3:
                                                    return r = t.sent(), i = "FirebaseError" !== r.name && s < 3, wu("SimpleDb", "Transaction failed with error: %s. Retrying: %s.", r.message, i), i ? [3, 4] : [2, { value: Promise.reject(r) }];
                                                case 4:
                                                    return [2] } }) }, a = this, t.label = 1;
                                case 1:
                                    return [5, e()];
                                case 2:
                                    return "object" == typeof(n = t.sent()) ? [2, n.value] : [3, 1];
                                case 3:
                                    return [2] } }) }) }, Sl.prototype.close = function() { this.db.close() }, Sl),
                bl = (Object.defineProperty(Al.prototype, "Cu", { get: function() { return this.fw }, enumerable: !0, configurable: !0 }), Object.defineProperty(Al.prototype, "dw", { get: function() { return this.lw }, enumerable: !0, configurable: !0 }), Object.defineProperty(Al.prototype, "cursor", { set: function(t) { this.aw = t }, enumerable: !0, configurable: !0 }), Al.prototype.done = function() { this.fw = !0 }, Al.prototype.vw = function(t) { this.lw = t }, Al.prototype.delete = function() { return kl(this.aw.delete()) }, Al),
                El = (Nl.open = function(t, e, n) { return new Nl(t.transaction(n, e)) }, Object.defineProperty(Nl.prototype, "cw", { get: function() { return this.ww.promise }, enumerable: !0, configurable: !0 }), Nl.prototype.abort = function(t) { t && this.ww.reject(t), this.aborted || (wu("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), this.aborted = !0, this.transaction.abort()) }, Nl.prototype.store = function(t) { var e = this.transaction.objectStore(t); return Tu(!!e, "Object store not part of transaction: " + t), new Il(e) }, Nl),
                Il = (Tl.prototype.put = function(t, e) { return kl(void 0 !== e ? (wu("SimpleDb", "PUT", this.store.name, t, e), this.store.put(e, t)) : (wu("SimpleDb", "PUT", this.store.name, "<auto-key>", t), this.store.put(t))) }, Tl.prototype.add = function(t) { return wu("SimpleDb", "ADD", this.store.name, t, t), kl(this.store.add(t)) }, Tl.prototype.get = function(e) { var n = this; return kl(this.store.get(e)).next(function(t) { return void 0 === t && (t = null), wu("SimpleDb", "GET", n.store.name, e, t), t }) }, Tl.prototype.delete = function(t) { return wu("SimpleDb", "DELETE", this.store.name, t), kl(this.store.delete(t)) }, Tl.prototype.count = function() { return wu("SimpleDb", "COUNT", this.store.name), kl(this.store.count()) }, Tl.prototype.mw = function(t, e) { var n = this.cursor(this.options(t, e)),
                        r = []; return this.gw(n, function(t, e) { r.push(e) }).next(function() { return r }) }, Tl.prototype.bw = function(t, e) { wu("SimpleDb", "DELETE ALL", this.store.name); var n = this.options(t, e);
                    n.pw = !1; var r = this.cursor(n); return this.gw(r, function(t, e, n) { return n.delete() }) }, Tl.prototype.yw = function(t, e) { var n;
                    e ? n = t : (n = {}, e = t); var r = this.cursor(n); return this.gw(r, e) }, Tl.prototype._w = function(i) { var t = this.cursor({}); return new Vu(function(n, r) { t.onerror = function(t) { var e = Rl(t.target.error);
                            r(e) }, t.onsuccess = function(t) { var e = t.target.result;
                            e ? i(e.primaryKey, e.value).next(function(t) { t ? e.continue() : n() }) : n() } }) }, Tl.prototype.gw = function(t, s) { var a = []; return new Vu(function(o, e) { t.onerror = function(t) { e(t.target.error) }, t.onsuccess = function(t) { var e = t.target.result; if (e) { var n = new bl(e),
                                    r = s(e.primaryKey, e.value, n); if (r instanceof Vu) { var i = r.catch(function(t) { return n.done(), Vu.reject(t) });
                                    a.push(i) } n.Cu ? o() : null === n.dw ? e.continue() : e.continue(n.dw) } else o() } }).next(function() { return Vu.Vu(a) }) }, Tl.prototype.options = function(t, e) { var n = void 0; return void 0 !== t && ("string" == typeof t ? n = t : (Tu(void 0 === e, "3rd argument must not be defined if 2nd is a range."), e = t)), { index: n, range: e } }, Tl.prototype.cursor = function(t) { var e = "next"; if (t.reverse && (e = "prev"), t.index) { var n = this.store.index(t.index); return t.pw ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e) } return this.store.openCursor(t.range, e) }, Tl);

            function Tl(t) { this.store = t }

            function Nl(t) { var n = this;
                this.transaction = t, this.aborted = !1, this.ww = new Cu, this.transaction.oncomplete = function() { n.ww.resolve() }, this.transaction.onabort = function() { t.error ? n.ww.reject(t.error) : n.ww.resolve() }, this.transaction.onerror = function(t) { var e = Rl(t.target.error);
                    n.ww.reject(e) } }

            function Al(t) { this.aw = t, this.fw = !1, this.lw = null }

            function Sl(t) { this.db = t, 12.2 === Sl.iw(d()) && bu("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.") }

            function kl(t) { return new Vu(function(n, r) { t.onsuccess = function(t) { var e = t.target.result;
                        n(e) }, t.onerror = function(t) { var e = Rl(t.target.error);
                        r(e) } }) } var Dl = !1;

            function Rl(t) { var e = wl.iw(d()); if (12.2 <= e && e < 13) { var n = "An internal error was encountered in the Indexed Database server"; if (0 <= t.message.indexOf(n)) { var r = new Mr("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + n + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."); return Dl || (Dl = !0, setTimeout(function() { throw r }, 0)), r } } return t } var Cl = (Ol.Tw = function(t, e, n, r) { return Tu("" !== t.uid, "UserID must not be an empty string."), new Ol(t.t() ? t.uid : "", e, n, r) }, Ol.prototype.Dc = function(t) { var r = !0,
                    e = IDBKeyRange.bound([this.userId, Number.NEGATIVE_INFINITY], [this.userId, Number.POSITIVE_INFINITY]); return Pl(t).yw({ index: ip.userMutationsIndex, range: e }, function(t, e, n) { r = !1, n.done() }).next(function() { return r }) }, Ol.prototype.vo = function(e, t, n) { return this.Ew(e).next(function(t) { return t.lastStreamToken = n.toBase64(), Ul(e).put(t) }) }, Ol.prototype.Eo = function(t) { return this.Ew(t).next(function(t) { return wi.fromBase64String(t.lastStreamToken) }) }, Ol.prototype.Do = function(e, n) { return this.Ew(e).next(function(t) { return t.lastStreamToken = n.toBase64(), Ul(e).put(t) }) }, Ol.prototype.fo = function(h, c, f, l) { var p = this,
                    d = _l(h),
                    v = Pl(h); return v.add({}).next(function(t) { Tu("number" == typeof t, "Auto-generated key is not a number"); for (var e = new xu(t, c, f, l), n = p.serializer.Dw(p.userId, e), r = [], i = new Zi(function(t, e) { return Su(t.it(), e.it()) }), o = 0, s = l; o < s.length; o++) { var a = s[o],
                            u = ap.key(p.userId, a.key.path, t);
                        i = i.add(a.key.path.J()), r.push(v.put(n)), r.push(d.put(u, ap.PLACEHOLDER)) } return i.forEach(function(t) { r.push(p.sc.Ic(h, t)) }), h.ec(function() { p.Iw[t] = e.keys() }), Vu.Vu(r).next(function() { return e }) }) }, Ol.prototype._o = function(t, e) { var n = this; return Pl(t).get(e).next(function(t) { return t ? (Tu(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), n.serializer.Rw(t)) : null }) }, Ol.prototype.do = function(t, n) { var r = this; return this.Iw[n] ? Vu.resolve(this.Iw[n]) : this._o(t, n).next(function(t) { if (t) { var e = t.keys(); return r.Iw[n] = e } return null }) }, Ol.prototype.Lo = function(t, e) { var r = this,
                    i = e + 1,
                    n = IDBKeyRange.lowerBound([this.userId, i]),
                    o = null; return Pl(t).yw({ index: ip.userMutationsIndex, range: n }, function(t, e, n) { e.userId === r.userId && (Tu(e.batchId >= i, "Should have found mutation after " + i), o = r.serializer.Rw(e)), n.done() }).next(function() { return o }) }, Ol.prototype.To = function(t) { var e = IDBKeyRange.upperBound([this.userId, Number.POSITIVE_INFINITY]),
                    r = -1; return Pl(t).yw({ index: ip.userMutationsIndex, range: e, reverse: !0 }, function(t, e, n) { r = e.batchId, n.done() }).next(function() { return r }) }, Ol.prototype.uo = function(t) { var e = this,
                    n = IDBKeyRange.bound([this.userId, -1], [this.userId, Number.POSITIVE_INFINITY]); return Pl(t).mw(ip.userMutationsIndex, n).next(function(t) { return t.map(function(t) { return e.serializer.Rw(t) }) }) }, Ol.prototype.oc = function(a, u) { var h = this,
                    t = ap.prefixForPath(this.userId, u.path),
                    e = IDBKeyRange.lowerBound(t),
                    c = []; return _l(a).yw({ range: e }, function(e, t, n) { var r = e[0],
                        i = e[1],
                        o = e[2],
                        s = jh(i); if (r === h.userId && u.path.isEqual(s)) return Pl(a).get(o).next(function(t) { if (!t) throw Iu("Dangling document-mutation reference found: " + e + " which points to " + o);
                        Tu(t.userId === h.userId, "Unexpected user '" + t.userId + "' for mutation batch " + o), c.push(h.serializer.Rw(t)) });
                    n.done() }).next(function() { return c }) }, Ol.prototype.ac = function(r, t) { var u = this,
                    h = new Zi(Su),
                    i = []; return t.forEach(function(a) { var t = ap.prefixForPath(u.userId, a.path),
                        e = IDBKeyRange.lowerBound(t),
                        n = _l(r).yw({ range: e }, function(t, e, n) { var r = t[0],
                                i = t[1],
                                o = t[2],
                                s = jh(i);
                            r === u.userId && a.path.isEqual(s) ? h = h.add(o) : n.done() });
                    i.push(n) }), Vu.Vu(i).next(function() { return u.Sw(r, h) }) }, Ol.prototype.wc = function(t, e) { var a = this;
                Tu(!e.Nn(), "Document queries shouldn't go down this path"), Tu(!e.ui(), "CollectionGroup queries should be handled in LocalDocumentsView"); var u = e.path,
                    h = u.length + 1,
                    n = ap.prefixForPath(this.userId, u),
                    r = IDBKeyRange.lowerBound(n),
                    c = new Zi(Su); return _l(t).yw({ range: r }, function(t, e, n) { var r = t[0],
                        i = t[1],
                        o = t[2],
                        s = jh(i);
                    r === a.userId && u.Z(s) ? s.length === h && (c = c.add(o)) : n.done() }).next(function() { return a.Sw(t, c) }) }, Ol.prototype.Sw = function(t, e) { var n = this,
                    r = [],
                    i = []; return e.forEach(function(e) { i.push(Pl(t).get(e).next(function(t) { if (null === t) throw Iu("Dangling document-mutation reference found, which points to " + e);
                        Tu(t.userId === n.userId, "Unexpected user '" + t.userId + "' for mutation batch " + e), r.push(n.serializer.Rw(t)) })) }), Vu.Vu(i).next(function() { return r }) }, Ol.prototype.Io = function(e, n) { var r = this; return Ll(e.Aw, this.userId, n).next(function(t) { return e.ec(function() { r.th(n.batchId) }), Vu.forEach(t, function(t) { return r.Ks.Pc(e, t) }) }) }, Ol.prototype.th = function(t) { delete this.Iw[t] }, Ol.prototype.po = function(n) { var o = this; return this.Dc(n).next(function(t) { if (!t) return Vu.resolve(); var e = IDBKeyRange.lowerBound(ap.prefixForUser(o.userId)),
                        i = []; return _l(n).yw({ range: e }, function(t, e, n) { if (t[0] === o.userId) { var r = jh(t[1]);
                            i.push(r) } else n.done() }).next(function() { Tu(0 === i.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + i.map(function(t) { return t.it() })) }) }) }, Ol.prototype.Cs = function(t, e) { return xl(t, this.userId, e) }, Ol.prototype.Ew = function(t) { var e = this; return Ul(t).get(this.userId).next(function(t) { return t || new rp(e.userId, -1, "") }) }, Ol);

            function Ol(t, e, n, r) { this.userId = t, this.serializer = e, this.sc = n, this.Ks = r, this.Iw = {} }

            function xl(t, o, e) { var n = ap.prefixForPath(o, e.path),
                    s = n[1],
                    r = IDBKeyRange.lowerBound(n),
                    a = !1; return _l(t).yw({ range: r, pw: !0 }, function(t, e, n) { var r = t[0],
                        i = t[1];
                    t[2], r === o && i === s && (a = !0), n.done() }).next(function() { return a }) }

            function Ll(t, e, n) { var r = t.store(ip.store),
                    i = t.store(ap.store),
                    o = [],
                    s = IDBKeyRange.only(n.batchId),
                    a = 0,
                    u = r.yw({ range: s }, function(t, e, n) { return a++, n.delete() });
                o.push(u.next(function() { Tu(1 === a, "Dangling document-mutation reference found: Missing batch " + n.batchId) })); for (var h = [], c = 0, f = n.mutations; c < f.length; c++) { var l = f[c],
                        p = ap.key(e, l.key.path, n.batchId);
                    o.push(i.delete(p)), h.push(l.key) } return Vu.Vu(o).next(function() { return h }) }

            function Pl(t) { return _p.ow(t, ip.store) }

            function _l(t) { return _p.ow(t, ap.store) }

            function Ul(t) { return _p.ow(t, rp.store) } var ql = (Ml.prototype.Go = function(e) { var n = this; return this.Cw(e).next(function(t) { return t.highestTargetId = n.Wc.after(t.highestTargetId), n.Pw(e, t).next(function() { return t.highestTargetId }) }) }, Ml.prototype.Ro = function(t) { return this.Cw(t).next(function(t) { return Oi.L(new Ci(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds)) }) }, Ml.prototype.zc = function(t) { return jl(t.Aw) }, Ml.prototype.Fo = function(e, n, r) { var i = this; return this.Cw(e).next(function(t) { return t.highestListenSequenceNumber = n, r && (t.lastRemoteSnapshotVersion = r.G()), n > t.highestListenSequenceNumber && (t.highestListenSequenceNumber = n), i.Pw(e, t) }) }, Ml.prototype.Wo = function(e, n) { var r = this; return this.Kc(e, n).next(function() { return r.Cw(e).next(function(t) { return t.targetCount += 1, r.kw(n, t), r.Pw(e, t) }) }) }, Ml.prototype.No = function(t, e) { return this.Kc(t, e) }, Ml.prototype.Hc = function(e, t) { var n = this; return this.Jc(e, t.targetId).next(function() { return Vl(e).delete(t.targetId) }).next(function() { return n.Cw(e) }).next(function(t) { return Tu(0 < t.targetCount, "Removing from an empty target cache"), t.targetCount -= 1, n.Pw(e, t) }) }, Ml.prototype.ds = function(r, i, o) { var s = this,
                    a = 0,
                    u = []; return Vl(r).yw(function(t, e) { var n = s.serializer.Nw(e);
                    n.sequenceNumber <= i && null === o.get(n.targetId) && (a++, u.push(s.Hc(r, n))) }).next(function() { return Vu.Vu(u) }).next(function() { return a }) }, Ml.prototype.oe = function(t, r) { var i = this; return Vl(t).yw(function(t, e) { var n = i.serializer.Nw(e);
                    r(n) }) }, Ml.prototype.Cw = function(t) { return Fl(t.Aw) }, Ml.prototype.Pw = function(t, e) { return (n = t, _p.ow(n, mp.store)).put(mp.key, e); var n }, Ml.prototype.Kc = function(t, e) { return Vl(t).put(this.serializer.Ow(e)) }, Ml.prototype.kw = function(t, e) { var n = !1; return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, n = !0), n }, Ml.prototype.Yc = function(t) { return this.Cw(t).next(function(t) { return t.targetCount }) }, Ml.prototype.Qo = function(t, i) { var o = this,
                    e = i.canonicalId(),
                    n = IDBKeyRange.bound([e, Number.NEGATIVE_INFINITY], [e, Number.POSITIVE_INFINITY]),
                    s = null; return Vl(t).yw({ range: n, index: vp.queryTargetsIndexName }, function(t, e, n) { var r = o.serializer.Nw(e);
                    i.isEqual(r.target) && (s = r, n.done()) }).next(function() { return s }) }, Ml.prototype.Co = function(n, t, r) { var i = this,
                    o = [],
                    s = Gl(n); return t.forEach(function(t) { var e = Mh(t.path);
                    o.push(s.put(new yp(r, e))), o.push(i.Ks._s(n, t)) }), Vu.Vu(o) }, Ml.prototype.Ao = function(n, t, r) { var i = this,
                    o = Gl(n); return Vu.forEach(t, function(t) { var e = Mh(t.path); return Vu.Vu([o.delete([r, e]), i.Ks.Ts(n, t)]) }) }, Ml.prototype.Jc = function(t, e) { var n = Gl(t),
                    r = IDBKeyRange.bound([e], [e + 1], !1, !0); return n.delete(r) }, Ml.prototype.Ho = function(t, e) { var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                    r = Gl(t),
                    o = qa(); return r.yw({ range: n, pw: !0 }, function(t, e, n) { var r = jh(t[1]),
                        i = new Ui(r);
                    o = o.add(i) }).next(function() { return o }) }, Ml.prototype.Cs = function(t, e) { var n = Mh(e.path),
                    r = IDBKeyRange.bound([n], [Du(n)], !1, !0),
                    i = 0; return Gl(t).yw({ index: yp.documentTargetsIndex, pw: !0, range: r }, function(t, e, n) { var r = t[0];
                    t[1], 0 !== r && (i++, n.done()) }).next(function() { return 0 < i }) }, Ml.prototype.be = function(t, e) { var n = this; return Vl(t).get(e).next(function(t) { return t ? n.serializer.Nw(t) : null }) }, Ml);

            function Ml(t, e) { this.Ks = t, this.serializer = e, this.Wc = Zh.qc() }

            function Vl(t) { return _p.ow(t, vp.store) }

            function Fl(t) { return wl.ow(t, mp.store).get(mp.key).next(function(t) { return Tu(null !== t, "Missing metadata row."), t }) }

            function jl(t) { return Fl(t).next(function(t) { return t.highestListenSequenceNumber }) }

            function Gl(t) { return _p.ow(t, yp.store) } var Bl, zl = (Hl.prototype.Fs = function(t, e, n) { return Jl(t).put(Yl(e), n) }, Hl.prototype.Us = function(t, e) { var n = Jl(t),
                    r = Yl(e); return n.delete(r) }, Hl.prototype.updateMetadata = function(e, n) { var r = this; return this.getMetadata(e).next(function(t) { return t.byteSize += n, r.Fw(e, t) }) }, Hl.prototype.xs = function(t, e) { var n = this; return Jl(t).get(Yl(e)).next(function(t) { return n.Vw(t) }) }, Hl.prototype.Uw = function(t, e) { var n = this; return Jl(t).get(Yl(e)).next(function(t) { var e = n.Vw(t); return e ? { Nc: e, size: Ql(t) } : null }) }, Hl.prototype.getEntries = function(t, e) { var r = this,
                    i = Oa(); return this.xw(t, e, function(t, e) { var n = r.Vw(e);
                    i = i.dt(t, n) }).next(function() { return i }) }, Hl.prototype.jw = function(t, e) { var r = this,
                    i = Oa(),
                    o = new qi(Ui.W); return this.xw(t, e, function(t, e) { var n = r.Vw(e);
                    o = n ? (i = i.dt(t, n), o.dt(t, Ql(e))) : (i = i.dt(t, null), o.dt(t, 0)) }).next(function() { return { Lw: i, qw: o } }) }, Hl.prototype.xw = function(t, e, i) { if (e.Y()) return Vu.resolve(); var n = IDBKeyRange.bound(e.first().path.nt(), e.last().path.nt()),
                    o = e.yt(),
                    s = o.Rt(); return Jl(t).yw({ range: n }, function(t, e, n) { for (var r = Ui.ft(t); s && Ui.W(s, r) < 0;) i(s, null), s = o.Rt();
                    s && s.isEqual(r) && (i(s, e), s = o.St() ? o.Rt() : null), s ? n.vw(s.path.nt()) : n.done() }).next(function() { for (; s;) i(s, null), s = o.St() ? o.Rt() : null }) }, Hl.prototype.Jo = function(t, i, e) { var o = this;
                Tu(!i.ui(), "CollectionGroup queries should be handled in LocalDocumentsView"); var s = La(),
                    a = i.path.length + 1,
                    n = {}; if (e.isEqual(Oi.MIN)) { var r = i.path.nt();
                    n.range = IDBKeyRange.lowerBound(r) } else { var u = i.path.nt(),
                        h = this.serializer.Bw(e);
                    n.range = IDBKeyRange.lowerBound([u, h], !0), n.index = fp.collectionReadTimeIndex } return Jl(t).yw(n, function(t, e, n) { if (t.length === a) { var r = o.serializer.Mw(e);
                        i.path.Z(r.key.path) ? r instanceof Is && i.matches(r) && (s = s.dt(r.key, r)) : n.done() } }).next(function() { return s }) }, Hl.prototype.eh = function(t, e) { var r = this,
                    i = Ca(),
                    o = this.serializer.Bw(e),
                    n = Jl(t),
                    s = IDBKeyRange.lowerBound(o, !0); return n.yw({ index: fp.readTimeIndex, range: s }, function(t, e) { var n = r.serializer.Mw(e);
                    i = i.dt(n.key, n), o = e.readTime }).next(function() { return { rh: i, readTime: r.serializer.Qw(o) } }) }, Hl.prototype.uh = function(t) { var r = this,
                    e = Jl(t),
                    i = Oi.MIN; return e.yw({ index: fp.readTimeIndex, reverse: !0 }, function(t, e, n) { e.readTime && (i = r.serializer.Qw(e.readTime)), n.done() }).next(function() { return i }) }, Hl.prototype.wo = function(t) { return new Hl.Fc(this, !!t && t.mo) }, Hl.prototype.Vc = function(t) { return this.getMetadata(t).next(function(t) { return t.byteSize }) }, Hl.prototype.getMetadata = function(t) { return Wl(t).get(lp.key).next(function(t) { return Tu(!!t, "Missing document cache metadata"), t }) }, Hl.prototype.Fw = function(t, e) { return Wl(t).put(lp.key, e) }, Hl.prototype.Vw = function(t) { if (t) { var e = this.serializer.Mw(t); return e instanceof Ts && e.version.isEqual(Oi.q()) ? null : e } return null }, Hl.Fc = (t(Kl, Bl = rh), Kl.prototype.qs = function(s) { var a = this,
                    u = [],
                    h = 0,
                    c = new Zi(function(t, e) { return Su(t.it(), e.it()) }); return this.ks.forEach(function(t, e) { var n = a.Gw.get(t); if (Tu(void 0 !== n, "Cannot modify a document that wasn't read (for " + t + ")"), e) { Tu(!a.readTime.isEqual(Oi.MIN), "Cannot add a document with a read time of zero"); var r = a.Uc.serializer.Ww(e, a.readTime);
                        c = c.add(t.path.J()); var i = Ql(r);
                        h += i - n, u.push(a.Uc.Fs(s, t, r)) } else if (h -= n, a.mo) { var o = a.Uc.serializer.Ww(new Ts(t, Oi.q()), a.readTime);
                        u.push(a.Uc.Fs(s, t, o)) } else u.push(a.Uc.Us(s, t)) }), c.forEach(function(t) { u.push(a.Uc.sc.Ic(s, t)) }), u.push(this.Uc.updateMetadata(s, h)), Vu.Vu(u) }, Kl.prototype.js = function(t, e) { var n = this; return this.Uc.Uw(t, e).next(function(t) { return null === t ? (n.Gw.set(e, 0), null) : (n.Gw.set(e, t.size), t.Nc) }) }, Kl.prototype.Ls = function(t, e) { var n = this; return this.Uc.jw(t, e).next(function(t) { var e = t.Lw; return t.qw.forEach(function(t, e) { n.Gw.set(t, e) }), e }) }, Kl), Hl);

            function Hl(t, e) { this.serializer = t, this.sc = e }

            function Kl(t, e) { var n = Bl.call(this) || this; return n.Uc = t, n.mo = e, n.Gw = new Pu(function(t) { return t.toString() }), n }

            function Wl(t) { return _p.ow(t, lp.store) }

            function Jl(t) { return _p.ow(t, fp.store) }

            function Yl(t) { return t.path.nt() }

            function Ql(t) { var e; if (t.document) e = t.document;
                else if (t.unknownDocument) e = t.unknownDocument;
                else { if (!t.noDocument) throw Iu("Unknown remote document type");
                    e = t.noDocument } return JSON.stringify(e).length } var Xl = 9,
                $l = (Zl.prototype.createOrUpgrade = function(n, r, t, e) { var i = this;
                    Tu(t < e && 0 <= t && e <= Xl, "Unexpected schema upgrade from v" + t + " to v{toVersion}."); var o, s = new El(r);
                    t < 1 && 1 <= e && (n.createObjectStore(ep.store), (o = n).createObjectStore(rp.store, { keyPath: rp.keyPath }), o.createObjectStore(ip.store, { keyPath: ip.keyPath, autoIncrement: !0 }).createIndex(ip.userMutationsIndex, ip.userMutationsKeyPath, { unique: !0 }), o.createObjectStore(ap.store), Tp(n), n.createObjectStore(fp.store)); var a, u = Vu.resolve(); return t < 3 && 3 <= e && (0 !== t && ((a = n).deleteObjectStore(yp.store), a.deleteObjectStore(vp.store), a.deleteObjectStore(mp.store), Tp(n)), u = u.next(function() { return t = s.store(mp.store), e = new mp(0, 0, Oi.MIN.G(), 0), t.put(mp.key, e); var t, e })), t < 4 && 4 <= e && (0 !== t && (u = u.next(function() { return r = n, (i = s).store(ip.store).mw().next(function(t) { r.deleteObjectStore(ip.store), r.createObjectStore(ip.store, { keyPath: ip.keyPath, autoIncrement: !0 }).createIndex(ip.userMutationsIndex, ip.userMutationsKeyPath, { unique: !0 }); var e = i.store(ip.store),
                                n = t.map(function(t) { return e.put(t) }); return Vu.Vu(n) }); var r, i })), u = u.next(function() { n.createObjectStore(Np.store, { keyPath: Np.keyPath }) })), t < 5 && 5 <= e && (u = u.next(function() { return i.removeAcknowledgedMutations(s) })), t < 6 && 6 <= e && (u = u.next(function() { return n.createObjectStore(lp.store), i.addDocumentGlobal(s) })), t < 7 && 7 <= e && (u = u.next(function() { return i.ensureSequenceNumbers(s) })), t < 8 && 8 <= e && (u = u.next(function() { return i.createCollectionParentIndex(n, s) })), t < 9 && 9 <= e && (u = u.next(function() { var t, e;
                        (e = n).objectStoreNames.contains("remoteDocumentChanges") && e.deleteObjectStore("remoteDocumentChanges"), (t = r.objectStore(fp.store)).createIndex(fp.readTimeIndex, fp.readTimeIndexPath, { unique: !1 }), t.createIndex(fp.collectionReadTimeIndex, fp.collectionReadTimeIndexPath, { unique: !1 }) })), u }, Zl.prototype.addDocumentGlobal = function(e) { var n = 0; return e.store(fp.store).yw(function(t, e) { n += Ql(e) }).next(function() { var t = new lp(n); return e.store(lp.store).put(lp.key, t) }) }, Zl.prototype.removeAcknowledgedMutations = function(r) { var i = this,
                        t = r.store(rp.store),
                        e = r.store(ip.store); return t.mw().next(function(t) { return Vu.forEach(t, function(n) { var t = IDBKeyRange.bound([n.userId, -1], [n.userId, n.lastAcknowledgedBatchId]); return e.mw(ip.userMutationsIndex, t).next(function(t) { return Vu.forEach(t, function(t) { Tu(t.userId === n.userId, "Cannot process batch " + t.batchId + " from unexpected user"); var e = i.serializer.Rw(t); return Ll(r, n.userId, e).next(function() {}) }) }) }) }) }, Zl.prototype.ensureSequenceNumbers = function(t) { var s = t.store(yp.store),
                        e = t.store(fp.store); return jl(t).next(function(i) { var o = []; return e.yw(function(t, e) { var n = new Li(t),
                                r = [0, Mh(n)];
                            o.push(s.get(r).next(function(t) { return t ? Vu.resolve() : (e = n, s.put(new yp(0, Mh(e), i))); var e })) }).next(function() { return Vu.Vu(o) }) }) }, Zl.prototype.createCollectionParentIndex = function(t, e) {
                    function i(t) { if (o.add(t)) { var e = t.$(),
                                n = t.J(); return r.put({ collectionId: e, parent: Mh(n) }) } } t.createObjectStore(gp.store, { keyPath: gp.keyPath }); var r = e.store(gp.store),
                        o = new Bh; return e.store(fp.store).yw({ pw: !0 }, function(t, e) { var n = new Li(t); return i(n.J()) }).next(function() { return e.store(ap.store).yw({ pw: !0 }, function(t, e) { t[0]; var n = t[1],
                                r = (t[2], jh(n)); return i(r.J()) }) }) }, Zl);

            function Zl(t) { this.serializer = t }

            function tp(t, e) { this.seconds = t, this.nanoseconds = e } var ep = (np.store = "owner", np.key = "owner", np);

            function np(t, e, n) { this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n } var rp = (sp.store = "mutationQueues", sp.keyPath = "userId", sp),
                ip = (op.store = "mutations", op.keyPath = "batchId", op.userMutationsIndex = "userMutationsIndex", op.userMutationsKeyPath = ["userId", "batchId"], op);

            function op(t, e, n, r, i) { this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, this.mutations = i }

            function sp(t, e, n) { this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n } var ap = (up.prefixForUser = function(t) { return [t] }, up.prefixForPath = function(t, e) { return [t, Mh(e)] }, up.key = function(t, e, n) { return [t, Mh(e), n] }, up.store = "documentMutations", up.PLACEHOLDER = new up, up);

            function up() {}

            function hp(t, e) { this.path = t, this.readTime = e }

            function cp(t, e) { this.path = t, this.version = e } var fp = (dp.store = "remoteDocuments", dp.readTimeIndex = "readTimeIndex", dp.readTimeIndexPath = "readTime", dp.collectionReadTimeIndex = "collectionReadTimeIndex", dp.collectionReadTimeIndexPath = ["parentPath", "readTime"], dp),
                lp = (pp.store = "remoteDocumentGlobal", pp.key = "remoteDocumentGlobalKey", pp);

            function pp(t) { this.byteSize = t }

            function dp(t, e, n, r, i, o) { this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, this.readTime = i, this.parentPath = o } var vp = (Ip.store = "targets", Ip.keyPath = "targetId", Ip.queryTargetsIndexName = "queryTargetsIndex", Ip.queryTargetsKeyPath = ["canonicalId", "targetId"], Ip),
                yp = (Ep.store = "targetDocuments", Ep.keyPath = ["targetId", "path"], Ep.documentTargetsIndex = "documentTargetsIndex", Ep.documentTargetsKeyPath = ["path", "targetId"], Ep),
                mp = (bp.key = "targetGlobalKey", bp.store = "targetGlobal", bp),
                gp = (wp.store = "collectionParents", wp.keyPath = ["collectionId", "parent"], wp);

            function wp(t, e) { this.collectionId = t, this.parent = e }

            function bp(t, e, n, r) { this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, this.targetCount = r }

            function Ep(t, e, n) { this.targetId = t, this.path = e, Tu(0 === t == (void 0 !== (this.sequenceNumber = n)), "A target-document row must either have targetId == 0 and a defined sequence number, or a non-zero targetId and no sequence number") }

            function Ip(t, e, n, r, i, o, s) { this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = s }

            function Tp(t) { t.createObjectStore(yp.store, { keyPath: yp.keyPath }).createIndex(yp.documentTargetsIndex, yp.documentTargetsKeyPath, { unique: !0 }), t.createObjectStore(vp.store, { keyPath: vp.keyPath }).createIndex(vp.queryTargetsIndexName, vp.queryTargetsKeyPath, { unique: !0 }), t.createObjectStore(mp.store) } var Np = (Ap.store = "clientMetadata", Ap.keyPath = "clientId", Ap);

            function Ap(t, e, n, r) { this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r } var Sp = s(s(s([rp.store, ip.store, ap.store, fp.store, vp.store, ep.store, mp.store, yp.store], [Np.store]), [lp.store]), [gp.store]),
                kp = (Dp.prototype.Ic = function(t, e) { var n = this; if (Tu(e.length % 2 == 1, "Expected a collection path."), this.zw.has(e)) return Vu.resolve(); var r = e.$(),
                        i = e.J();
                    t.ec(function() { n.zw.add(e) }); var o = { collectionId: r, parent: Mh(i) }; return Rp(t).put(o) }, Dp.prototype.vc = function(t, i) { var o = [],
                        e = IDBKeyRange.bound([i, ""], [Du(i), ""], !1, !0); return Rp(t).mw(e).next(function(t) { for (var e = 0, n = t; e < n.length; e++) { var r = n[e]; if (r.collectionId !== i) break;
                            o.push(jh(r.parent)) } return o }) }, Dp);

            function Dp() { this.zw = new Bh }

            function Rp(t) { return _p.ow(t, gp.store) } var Cp = (Op.prototype.Mw = function(t) { if (t.document) return this.Kw.We(t.document, !!t.hasCommittedMutations); if (t.noDocument) { var e = Ui.ft(t.noDocument.path),
                        n = this.Hw(t.noDocument.readTime); return new Ts(e, n, { hasCommittedMutations: !!t.hasCommittedMutations }) } return t.unknownDocument ? (e = Ui.ft(t.unknownDocument.path), n = this.Hw(t.unknownDocument.version), new Ns(e, n)) : Iu("Unexpected DbRemoteDocument") }, Op.prototype.Ww = function(t, e) { var n = this.Bw(e),
                    r = t.key.path.J().nt(); if (t instanceof Is) { var i = t.proto ? t.proto : this.Kw.Ge(t),
                        o = t.hasCommittedMutations; return new fp(null, null, i, o, n, r) } if (t instanceof Ts) { var s = t.key.path.nt(),
                        a = this.Jw(t.version); return o = t.hasCommittedMutations, new fp(null, new hp(s, a), null, o, n, r) } if (t instanceof Ns) { s = t.key.path.nt(); var u = this.Jw(t.version); return new fp(new cp(s, u), null, null, !0, n, r) } return Iu("Unexpected MaybeDocument") }, Op.prototype.Bw = function(t) { var e = t.G(); return [e.seconds, e.nanoseconds] }, Op.prototype.Qw = function(t) { var e = new Ci(t[0], t[1]); return Oi.L(e) }, Op.prototype.Jw = function(t) { var e = t.G(); return new tp(e.seconds, e.nanoseconds) }, Op.prototype.Hw = function(t) { var e = new Ci(t.seconds, t.nanoseconds); return Oi.L(e) }, Op.prototype.Dw = function(t, e) { var n = this,
                    r = e.baseMutations.map(function(t) { return n.Kw.tr(t) }),
                    i = e.mutations.map(function(t) { return n.Kw.tr(t) }); return new ip(t, e.batchId, e.En.toMillis(), r, i) }, Op.prototype.Rw = function(t) { var e = this,
                    n = (t.baseMutations || []).map(function(t) { return e.Kw.rr(t) }),
                    r = t.mutations.map(function(t) { return e.Kw.rr(t) }),
                    i = Ci.fromMillis(t.localWriteTimeMs); return new xu(t.batchId, i, n, r) }, Op.prototype.Yw = function(t) { var e = []; return t.forEach(function(t) { e.push(Mh(t.path)) }), e }, Op.prototype.Xw = function(t) { for (var e = qa(), n = 0, r = t; n < r.length; n++) { var i = r[n];
                    e = e.add(new Ui(jh(i))) } return e }, Op.prototype.Nw = function(t) { var e, n = this.Hw(t.readTime),
                    r = void 0 !== t.lastLimboFreeSnapshotVersion ? this.Hw(t.lastLimboFreeSnapshotVersion) : Oi.MIN; return e = void 0 !== t.query.documents ? this.Kw.lr(t.query) : this.Kw.gr(t.query), new fa(e, t.targetId, 0, t.lastListenSequenceNumber, n, r, wi.fromBase64String(t.resumeToken)) }, Op.prototype.Ow = function(t) { Tu(0 === t.ci, "Only queries with purpose 0 may be stored, got " + t.ci); var e, n = this.Jw(t.ai),
                    r = this.Jw(t.lastLimboFreeSnapshotVersion);
                e = t.target.Nn() ? this.Kw.ar(t.target) : this.Kw.dr(t.target); var i = t.resumeToken.toBase64(); return new vp(t.targetId, t.target.canonicalId(), n, i, t.sequenceNumber, r, e) }, Op);

            function Op(t) { this.Kw = t } var xp, Lp = "Another tab has exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs.",
                Pp = (t(qp, xp = Oh), qp),
                _p = (Up.ow = function(t, e) { if (t instanceof Pp) return wl.ow(t.Aw, e); throw Iu("IndexedDbPersistence must use instances of IndexedDbTransaction") }, Up.om = function(n) { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    if (!Up.ph()) throw new Mr(qr.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."); return [4, (e = new Up(n.allowTabSynchronization, n.persistenceKey, n.clientId, n.platform, n.hm, n.fh, n.serializer, n.$w)).start()];
                                case 1:
                                    return t.sent(), [2, e] } }) }) }, Up.prototype.start = function() { var e = this; return Tu(!this.ss, "IndexedDbPersistence double-started!"), Tu(null !== this.window, "Expected 'window' to be defined"), wl.ew(this.rm, Xl, new $l(this.serializer)).then(function(t) { return e.cm = t, e.am() }).then(function() { return e.fm(), e.lm(), e.dm(), e.cm.runTransaction("readonly", [mp.store], function(t) { return jl(t) }) }).then(function(t) { e.$c = new Uu(t, e.$w) }).then(function() { e.Zc = !0 }).catch(function(t) { return e.cm && e.cm.close(), Promise.reject(t) }) }, Up.prototype.na = function(n) { var t = this; return this.em = function(e) { return p(t, void 0, void 0, function() { return v(this, function(t) { return this.ss ? [2, n(e)] : [2] }) }) }, n(this.isPrimary) }, Up.prototype.ia = function(n) { var t = this;
                    this.cm.hw(function(e) { return p(t, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                    case 0:
                                        return null !== e.newVersion ? [3, 2] : [4, n()];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2] } }) }) }) }, Up.prototype.nh = function(t) { var e = this;
                    this.networkEnabled !== t && (this.networkEnabled = t, this.fh.ou(function() { return p(e, void 0, void 0, function() { return v(this, function(t) { switch (t.label) {
                                    case 0:
                                        return this.ss ? [4, this.am()] : [3, 2];
                                    case 1:
                                        t.sent(), t.label = 2;
                                    case 2:
                                        return [2] } }) }) })) }, Up.prototype.am = function() { var n = this; return this.cm.runTransaction("readwrite", Sp, function(e) { return Vp(e).put(new Np(n.clientId, Date.now(), n.networkEnabled, n.inForeground)).next(function() { if (n.isPrimary) return n.vm(e).next(function(t) { t || (n.isPrimary = !1, n.fh.ou(function() { return n.em(!1) })) }) }).next(function() { return n.wm(e) }).next(function(t) { return n.isPrimary && !t ? n.mm(e).next(function() { return !1 }) : !!t && n.gm(e).next(function() { return !0 }) }) }).catch(function(t) { if (!n.allowTabSynchronization) throw t; return wu("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", t), !1 }).then(function(t) { n.isPrimary !== t && n.fh.ou(function() { return n.em(t) }), n.isPrimary = t }) }, Up.prototype.vm = function(t) { var e = this; return Mp(t).get(ep.key).next(function(t) { return Vu.resolve(e.bm(t)) }) }, Up.prototype.pm = function(t) { return Vp(t).delete(this.clientId) }, Up.prototype.ym = function() { return p(this, void 0, void 0, function() { var i = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return !this.isPrimary || this._m(this.im, 18e5) ? [3, 2] : (this.im = Date.now(), [4, this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", function(t) { var r = Up.ow(t, Np.store); return r.mw().next(function(t) { var e = i.Im(t, 18e5),
                                                n = t.filter(function(t) { return -1 === e.indexOf(t) }); return Vu.forEach(n, function(t) { return r.delete(t.clientId) }).next(function() { return n }) }) }).catch(function() { return [] })]);
                                case 1:
                                    t.sent().forEach(function(t) { i.window.localStorage.removeItem(i.Tm(t.clientId)) }), t.label = 2;
                                case 2:
                                    return [2] } }) }) }, Up.prototype.dm = function() { var t = this;
                    this.nm = this.fh.yu("client_metadata_refresh", 4e3, function() { return t.am().then(function() { return t.ym() }).then(function() { return t.dm() }) }) }, Up.prototype.bm = function(t) { return !!t && t.ownerId === this.clientId }, Up.prototype.wm = function(e) { var i = this; return Mp(e).get(ep.key).next(function(t) { if (null !== t && i._m(t.leaseTimestampMs, 5e3) && !i.Em(t.ownerId)) { if (i.bm(t) && i.networkEnabled) return !0; if (!i.bm(t)) { if (!t.allowTabSynchronization) throw new Mr(qr.FAILED_PRECONDITION, Lp); return !1 } } return !(!i.networkEnabled || !i.inForeground) || Vp(e).mw().next(function(t) { return void 0 === i.Im(t, 5e3).find(function(t) { if (i.clientId !== t.clientId) { var e = !i.networkEnabled && t.networkEnabled,
                                        n = !i.inForeground && t.inForeground,
                                        r = i.networkEnabled === t.networkEnabled; if (e || n && r) return !0 } return !1 }) }) }).next(function(t) { return i.isPrimary !== t && wu("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), t }) }, Up.prototype.shutdown = function() { return p(this, void 0, void 0, function() { var e = this; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return this.Zc = !1, this.Dm(), this.nm && (this.nm.cancel(), this.nm = null), this.Rm(), this.Sm(), [4, this.cm.runTransaction("readwrite", [ep.store, Np.store], function(t) { return e.mm(t).next(function() { return e.pm(t) }) })];
                                case 1:
                                    return t.sent(), this.cm.close(), this.Am(), [2] } }) }) }, Up.prototype.Im = function(t, e) { var n = this; return t.filter(function(t) { return n._m(t.updateTimeMs, e) && !n.Em(t.clientId) }) }, Up.prototype.$o = function() { var e = this; return this.cm.runTransaction("readonly", [Np.store], function(t) { return Vp(t).mw().next(function(t) { return e.Im(t, 18e5).map(function(t) { return t.clientId }) }) }) }, Up.clearPersistence = function(n) { return p(this, void 0, void 0, function() { var e; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    return Up.ph() ? (e = n + Up.um, [4, wl.delete(e)]) : [2, Promise.resolve()];
                                case 1:
                                    return t.sent(), [2] } }) }) }, Object.defineProperty(Up.prototype, "ss", { get: function() { return this.Zc }, enumerable: !0, configurable: !0 }), Up.prototype.Js = function(t) { return Tu(this.ss, "Cannot initialize MutationQueue before persistence is started."), Cl.Tw(t, this.serializer, this.sc, this.Ks) }, Up.prototype.Zs = function() { return Tu(this.ss, "Cannot initialize TargetCache before persistence is started."), this.$s }, Up.prototype.Xs = function() { return Tu(this.ss, "Cannot initialize RemoteDocumentCache before persistence is started."), this.uc }, Up.prototype.no = function() { return Tu(this.ss, "Cannot initialize IndexManager before persistence is started."), this.sc }, Up.prototype.runTransaction = function(n, t, r) { var i = this;
                    wu("IndexedDbPersistence", "Starting transaction:", n); var o, e = "readonly" === t ? "readonly" : "readwrite"; return this.cm.runTransaction(e, Sp, function(e) { return o = new Pp(e, i.$c.next()), "readwrite-primary" === t ? i.vm(e).next(function(t) { return !!t || i.wm(e) }).next(function(t) { if (!t) throw bu("Failed to obtain primary lease for action '" + n + "'."), i.isPrimary = !1, i.fh.ou(function() { return i.em(!1) }), new Mr(qr.FAILED_PRECONDITION, Ch); return r(o) }).next(function(t) { return i.gm(e).next(function() { return t }) }) : i.Cm(e).next(function() { return r(o) }) }).then(function(t) { return o.rc(), t }) }, Up.prototype.Cm = function(t) { var e = this; return Mp(t).get(ep.key).next(function(t) { if (null !== t && e._m(t.leaseTimestampMs, 5e3) && !e.Em(t.ownerId) && !e.bm(t) && !t.allowTabSynchronization) throw new Mr(qr.FAILED_PRECONDITION, Lp) }) }, Up.prototype.gm = function(t) { var e = new ep(this.clientId, this.allowTabSynchronization, Date.now()); return Mp(t).put(ep.key, e) }, Up.ph = function() { return wl.ph() }, Up.Pm = function(t) { var e = t.Dn.projectId; return t.Dn.xr || (e += "." + t.Dn.database), "firestore/" + t.persistenceKey + "/" + e + "/" }, Up.prototype.mm = function(t) { var e = this,
                        n = Mp(t); return n.get(ep.key).next(function(t) { return e.bm(t) ? (wu("IndexedDbPersistence", "Releasing primary lease."), n.delete(ep.key)) : Vu.resolve() }) }, Up.prototype._m = function(t, e) { var n = Date.now(); return !(t < n - e || n < t && (bu("Detected an update time that is in the future: " + t + " > " + n), 1)) }, Up.prototype.fm = function() { var t = this;
                    null !== this.document && "function" == typeof this.document.addEventListener && (this.tm = function() { t.fh.ou(function() { return t.inForeground = "visible" === t.document.visibilityState, t.am() }) }, this.document.addEventListener("visibilitychange", this.tm), this.inForeground = "visible" === this.document.visibilityState) }, Up.prototype.Rm = function() { this.tm && (Tu(null !== this.document && "function" == typeof this.document.addEventListener, "Expected 'document.addEventListener' to be a function"), this.document.removeEventListener("visibilitychange", this.tm), this.tm = null) }, Up.prototype.lm = function() { var t = this; "function" == typeof this.window.addEventListener && (this.Zw = function() { t.Dm(), t.fh.ou(function() { return t.shutdown() }) }, this.window.addEventListener("unload", this.Zw)) }, Up.prototype.Sm = function() { this.Zw && (Tu("function" == typeof this.window.removeEventListener, "Expected 'window.removeEventListener' to be a function"), this.window.removeEventListener("unload", this.Zw), this.Zw = null) }, Up.prototype.Em = function(t) { try { var e = null !== this.sm.getItem(this.Tm(t)); return wu("IndexedDbPersistence", "Client '" + t + "' " + (e ? "is" : "is not") + " zombied in LocalStorage"), e } catch (t) { return bu("IndexedDbPersistence", "Failed to get zombied client id.", t), !1 } }, Up.prototype.Dm = function() { try { this.sm.setItem(this.Tm(this.clientId), String(Date.now())) } catch (t) { bu("Failed to set zombie client id.", t) } }, Up.prototype.Am = function() { try { this.sm.removeItem(this.Tm(this.clientId)) } catch (t) {} }, Up.prototype.Tm = function(t) { return "firestore_zombie_" + this.persistenceKey + "_" + t }, Up.um = "main", Up);

            function Up(t, e, n, r, i, o, s, a) { if (this.allowTabSynchronization = t, this.persistenceKey = e, this.clientId = n, this.fh = o, this.$w = a, this.Zc = !1, this.isPrimary = !1, this.networkEnabled = !0, this.Zw = null, this.inForeground = !1, this.tm = null, this.nm = null, this.im = Number.NEGATIVE_INFINITY, this.em = function(t) { return Promise.resolve() }, this.Ks = new Fp(this, i), this.rm = e + Up.um, this.serializer = new Cp(s), this.document = r.document, this.$s = new ql(this.Ks, this.serializer), this.sc = new kp, this.uc = new zl(this.serializer, this.sc), !r.window || !r.window.localStorage) throw new Mr(qr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
                this.window = r.window, this.sm = this.window.localStorage }

            function qp(t, e) { var n = xp.call(this) || this; return n.Aw = t, n.Po = e, n }

            function Mp(t) { return t.store(ep.store) }

            function Vp(t) { return t.store(Np.store) } var Fp = (jp.prototype.as = function(t) { var n = this.km(t); return this.db.Zs().Yc(t).next(function(e) { return n.next(function(t) { return e + t }) }) }, jp.prototype.km = function(t) { var e = 0; return this.ls(t, function(t) { e++ }).next(function() { return e }) }, jp.prototype.oe = function(t, e) { return this.db.Zs().oe(t, e) }, jp.prototype.ls = function(t, n) { return this.Nm(t, function(t, e) { return n(e) }) }, jp.prototype.zs = function(t) { this.sa = t }, jp.prototype._s = function(t, e) { return Gp(t, e) }, jp.prototype.Ts = function(t, e) { return Gp(t, e) }, jp.prototype.ds = function(t, e, n) { return this.db.Zs().ds(t, e, n) }, jp.prototype.Pc = function(t, e) { return Gp(t, e) }, jp.prototype.Om = function(t, e) { return this.sa.Cs(e) ? Vu.resolve(!0) : (r = e, i = !1, Ul(n = t)._w(function(t) { return xl(n, t, r).next(function(t) { return t && (i = !0), Vu.resolve(!t) }) }).next(function() { return i })); var n, r, i }, jp.prototype.vs = function(r, i) { var o = this,
                    s = this.db.Xs().wo(),
                    a = [],
                    u = 0; return this.Nm(r, function(e, t) { if (t <= i) { var n = o.Om(r, e).next(function(t) { if (!t) return u++, s.xs(r, e).next(function() { return s.Us(e), Gl(r).delete([0, Mh(e.path)]) }) });
                        a.push(n) } }).next(function() { return Vu.Vu(a) }).next(function() { return s.apply(r) }).next(function() { return u }) }, jp.prototype.removeTarget = function(t, e) { var n = e.fi(t.Po); return this.db.Zs().No(t, n) }, jp.prototype.Oo = function(t, e) { return Gp(t, e) }, jp.prototype.Nm = function(t, o) { var s, e = Gl(t),
                    a = Uu.Xr; return e.yw({ index: yp.documentTargetsIndex }, function(t, e) { var n = t[0],
                        r = (t[1], e.path),
                        i = e.sequenceNumber;
                    0 === n ? (a !== Uu.Xr && o(new Ui(jh(s)), a), a = i, s = r) : a = Uu.Xr }).next(function() { a !== Uu.Xr && o(new Ui(jh(s)), a) }) }, jp.prototype.ms = function(t) { return this.db.Xs().Vc(t) }, jp);

            function jp(t, e) { this.db = t, this.sa = null, this.ns = new th(this, e) }

            function Gp(t, e) { return Gl(t).put((n = e, r = t.Po, new yp(0, Mh(n.path), r))); var n, r } var Bp = (Hp.prototype.initialize = function(o, s, a, u, h, c) { return p(this, void 0, void 0, function() { var e, n, r, i; return v(this, function(t) { switch (t.label) {
                                case 0:
                                    if (Tu(c.aa, "IndexedDbPersistenceProvider can only provide durable persistence"), Tu(!this.persistence, "configure() already called"), e = _p.Pm(s), n = new lu(s.Dn, { _e: !0 }), !Ih.ph(a)) throw new Mr(qr.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage."); return this.td = c.synchronizeTabs ? new Ih(o, a, e, u, h) : new Rh, r = this, [4, _p.om({ allowTabSynchronization: c.synchronizeTabs, persistenceKey: e, clientId: u, platform: a, fh: o, serializer: n, hm: $u.Hu(c.cacheSizeBytes), $w: this.td })];
                                case 1:
                                    return r.persistence = t.sent(), i = this.persistence.Ks.ns, this.Yd = new Zu(i, o), [2] } }) }) }, Hp.prototype.la = function() { return Tu(!!this.persistence, "initialize() not called"), this.persistence }, Hp.prototype.da = function() { return Tu(!!this.td, "initialize() not called"), this.td }, Hp.prototype.fa = function() { return Tu(!!this.Yd, "initialize() not called"), this.Yd }, Hp.prototype.clearPersistence = function(t) { var e = _p.Pm(t); return _p.clearPersistence(e) }, Hp),
                zp = { Firestore: cl, GeoPoint: Ri, Timestamp: Ci, Blob: Di, Transaction: fl, WriteBatch: ll, DocumentReference: pl, DocumentSnapshot: dl, Query: yl, QueryDocumentSnapshot: vl, QuerySnapshot: ml, CollectionReference: gl, FieldPath: fc, FieldValue: Mc, setLogLevel: qf.setLogLevel, CACHE_SIZE_UNLIMITED: _f };

            function Hp() {} var Kp, Wp, Jp, Yp = (sd.prototype.Xf = function(t) {}, sd.prototype.shutdown = function() {}, sd),
                Qp = (od.prototype.Xf = function(t) { this.jm.push(t) }, od.prototype.shutdown = function() { window.removeEventListener("online", this.Fm), window.removeEventListener("offline", this.Um) }, od.prototype.Lm = function() { window.addEventListener("online", this.Fm), window.addEventListener("offline", this.Um) }, od.prototype.Vm = function() { wu("ConnectivityMonitor", "Network connectivity changed: AVAILABLE"); for (var t = 0, e = this.jm; t < e.length; t++)(0, e[t])(0) }, od.prototype.xm = function() { wu("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE"); for (var t = 0, e = this.jm; t < e.length; t++)(0, e[t])(1) }, od.ph = function() { return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener }, od),
                Xp = (id.prototype.Ma = function(t) { Tu(!this.Mm, "Called onOpen on stream twice!"), this.Mm = t }, id.prototype.xa = function(t) { Tu(!this.Qm, "Called onClose on stream twice!"), this.Qm = t }, id.prototype.onMessage = function(t) { Tu(!this.Gm, "Called onMessage on stream twice!"), this.Gm = t }, id.prototype.close = function() { this.Bm() }, id.prototype.send = function(t) { this.qm(t) }, id.prototype.Wm = function() { Tu(void 0 !== this.Mm, "Cannot call onOpen because no callback was set"), this.Mm() }, id.prototype.zm = function(t) { Tu(void 0 !== this.Qm, "Cannot call onClose because no callback was set"), this.Qm(t) }, id.prototype.Km = function(t) { Tu(void 0 !== this.Gm, "Cannot call onMessage because no callback was set"), this.Gm(t) }, id),
                $p = { BatchGetDocuments: "batchGet", Commit: "commit" },
                Zp = "gl-js/ fire/" + _r,
                td = (rd.prototype.Jm = function(t, e) { if (e)
                        for (var n in e.o) e.o.hasOwnProperty(n) && (t[n] = e.o[n]);
                    t["X-Goog-Api-Client"] = Zp }, rd.prototype.tf = function(u, r, i) { var h = this,
                        c = this.Ym(u); return new Promise(function(o, s) { var a = new Pr;
                        a.listenOnce(xr.COMPLETE, function() { try { switch (a.getLastErrorCode()) {
                                    case Or.NO_ERROR:
                                        var t = a.getResponseJson();
                                        wu("Connection", "XHR received:", JSON.stringify(t)), o(t); break;
                                    case Or.TIMEOUT:
                                        wu("Connection", 'RPC "' + u + '" timed out'), s(new Mr(qr.DEADLINE_EXCEEDED, "Request time out")); break;
                                    case Or.HTTP_ERROR:
                                        var e = a.getStatus(); if (wu("Connection", 'RPC "' + u + '" failed with status:', e, "response text:", a.getResponseText()), 0 < e) { var n = a.getResponseJson().error; if (n && n.status && n.message) { var r = (i = n.status.toLowerCase().replace("_", "-"), 0 <= Object.values(qr).indexOf(i) ? i : qr.UNKNOWN);
                                                s(new Mr(r, n.message)) } else s(new Mr(qr.UNKNOWN, "Server responded with status " + a.getStatus())) } else wu("Connection", 'RPC "' + u + '" failed'), s(new Mr(qr.UNAVAILABLE, "Connection failed.")); break;
                                    default:
                                        Iu('RPC "' + u + '" failed with unanticipated webchannel error ' + a.getLastErrorCode() + ": " + a.getLastError() + ", giving up.") } } finally { wu("Connection", 'RPC "' + u + '" completed.') } var i }); var t = f({}, r);
                        delete t.database; var e = JSON.stringify(t);
                        wu("Connection", "XHR sending: ", c + " " + e); var n = { "Content-Type": "text/plain" };
                        h.Jm(n, i), a.send(c, "POST", e, n, 15) }) }, rd.prototype.nf = function(t, e, n) { return this.tf(t, e, n) }, rd.prototype.Qa = function(t, e) { var n = [this.Hm, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
                        r = Cr(),
                        i = { httpSessionIdParam: "gsessionid", initMessageHeaders: {}, messageUrlParams: { database: "projects/" + this.Dn.projectId + "/databases/" + this.Dn.database }, sendRawJson: !0, supportsCrossDomainXhr: !0, internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 }, forceLongPolling: this.forceLongPolling };
                    this.Jm(i.initMessageHeaders, e), "undefined" != typeof window && (window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d()) || "object" == typeof navigator && "ReactNative" === navigator.product || 0 <= d().indexOf("Electron/") || function() { var t = d(); return 0 <= t.indexOf("MSIE ") || 0 <= t.indexOf("Trident/") }() || 0 <= d().indexOf("MSAppHost/") || function() { var t = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0; return "object" == typeof t && void 0 !== t.id }() || (i.httpHeadersOverwriteParam = "$httpHeaders"); var o = n.join("");

                    function s(t, e) { u.listen(t, function(t) { try { e(t) } catch (t) { setTimeout(function() { throw t }, 0) } }) } wu("Connection", "Creating WebChannel: " + o + " " + i); var u = r.createWebChannel(o, i),
                        a = !1,
                        h = !1,
                        c = new Xp({ qm: function(t) { h ? wu("Connection", "Not sending because WebChannel is closed:", t) : (a || (wu("Connection", "Opening WebChannel transport."), u.open(), a = !0), wu("Connection", "WebChannel sending:", t), u.send(t)) }, Bm: function() { return u.close() } }); return s(Lr.EventType.OPEN, function() { h || wu("Connection", "WebChannel transport opened.") }), s(Lr.EventType.CLOSE, function() { h || (h = !0, wu("Connection", "WebChannel transport closed"), c.zm()) }), s(Lr.EventType.ERROR, function(t) { h || (h = !0, wu("Connection", "WebChannel transport errored:", t), c.zm(new Mr(qr.UNAVAILABLE, "The operation could not be completed"))) }), s(Lr.EventType.MESSAGE, function(t) { var e; if (!h) { var n = t.data[0];
                            Tu(!!n, "Got a webchannel message without data."); var r = n,
                                i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error); if (i) { wu("Connection", "WebChannel received error:", i); var o = i.status,
                                    s = function() { var t = Bs[o]; if (void 0 !== t) return Da(t) }(),
                                    a = i.message;
                                void 0 === s && (s = qr.INTERNAL, a = "Unknown error status: " + o + " with message " + i.message), h = !0, c.zm(new Mr(s, a)), u.close() } else wu("Connection", "WebChannel received:", n), c.Km(n) } }), setTimeout(function() { c.Wm() }, 0), c }, rd.prototype.Ym = function(t) { var e = $p[t]; return Tu(void 0 !== e, "Unknown REST mapping for: " + t), this.Hm + "/v1/projects/" + this.Dn.projectId + "/databases/" + this.Dn.database + "/documents:" + e }, rd),
                ed = (Object.defineProperty(nd.prototype, "document", { get: function() { return "undefined" != typeof document ? document : null }, enumerable: !0, configurable: !0 }), Object.defineProperty(nd.prototype, "window", { get: function() { return "undefined" != typeof window ? window : null }, enumerable: !0, configurable: !0 }), nd.prototype.$d = function(t) { return Promise.resolve(new td(t)) }, nd.prototype.Zd = function() { return Qp.ph() ? new Qp : new Yp }, nd.prototype.tv = function(t) { return new lu(t, { _e: !0 }) }, nd.prototype.Vr = function(t) { return JSON.stringify(t) }, nd.prototype.atob = function(t) { return atob(t) }, nd.prototype.btoa = function(t) { return btoa(t) }, nd.prototype.randomBytes = function(t) { if (t <= 0) return new Uint8Array; var e = new Uint8Array(t); return crypto.getRandomValues(e), e }, nd);

            function nd() { this.N = "undefined" != typeof atob }

            function rd(t) { this.Dn = t.Dn; var e = t.ssl ? "https" : "http";
                this.Hm = e + "://" + t.host, this.forceLongPolling = t.forceLongPolling }

            function id(t) { this.qm = t.qm, this.Bm = t.Bm }

            function od() { var t = this;
                this.Fm = function() { return t.Vm() }, this.Um = function() { return t.xm() }, this.jm = [], this.Lm() }

            function sd() {} pu.Fr(new ed), Kp = function(t, e) { return new qf(t, e, new Bp) }, (Jp = ad).INTERNAL.registerComponent(new I("firestore", function(t) { var e = t.getProvider("app").getImmediate(); return Kp(e, t.getProvider("auth-internal")) }, "PUBLIC").setServiceProps((Tu((Wp = zp) && "object" == typeof Wp, "shallowCopy() expects object parameter."), f({}, Wp)))), Jp.registerVersion("@firebase/firestore", "1.13.0") }).apply(this, arguments) } catch (t) { throw console.error(t), new Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.") } });
//# sourceMappingURL=firebase-firestore.js.map