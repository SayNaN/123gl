!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t), r.loaded=!0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
    function i(e, t) {
        t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
        var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"), i = n.exec(t);
        return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
    }
    function r(e) {
        var t;
        return function(e) {
            if (!e)
                return e;
            for (; e != unescape(e);)
                e = unescape(e);
            for (var t = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], n = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], i = 0; i < t.length; i++)
                e = e.replace(new RegExp(t[i], "gi"), n[i]);
            return e
        }((t = document.cookie.match(RegExp("(^|;\\s*)" + e + "=([^;]*)(;|$)"))) ? unescape(t[2]) : "")
    }
    var o = this && this.__awaiter || function(e, t, n, i) {
        return new (n || (n = Promise))(function(r, o) {
            function a(e) {
                try {
                    l(i.next(e))
                } catch (t) {
                    o(t)
                }
            }
            function s(e) {
                try {
                    l(i["throw"](e))
                } catch (t) {
                    o(t)
                }
            }
            function l(e) {
                e.done ? r(e.value) : new n(function(t) {
                    t(e.value)
                }).then(a, s)
            }
            l((i = i.apply(e, t || [])).next())
        })
    }, a = this && this.__generator || function(e, t) {
        function n(e) {
            return function(t) {
                return i([e, t])
            }
        }
        function i(n) {
            if (r)
                throw new TypeError("Generator is already executing.");
            for (; l;)
                try {
                    if (r = 1, o && (a = o[2 & n[0] ? "return": n[0] ? "throw": "next"])&&!(a = a.call(o, n[1])).done)
                        return a;
                        switch (o = 0, a && (n = [0, a.value]), n[0]) {
                        case 0:
                        case 1:
                            a = n;
                            break;
                        case 4:
                            return l.label++, {
                                value: n[1],
                                done: !1
                            };
                        case 5:
                            l.label++, o = n[1], n = [0];
                            continue;
                        case 7:
                            n = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (a = l.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                l.label = n[1];
                                break
                            }
                            if (6 === n[0] && l.label < a[1]) {
                                l.label = a[1], a = n;
                                break
                            }
                            if (a && l.label < a[2]) {
                                l.label = a[2], l.ops.push(n);
                                break
                            }
                            a[2] && l.ops.pop(), l.trys.pop();
                            continue
                        }
                        n = t.call(e, l)
            } catch (i) {
                n = [6, i], o = 0
            } finally {
                r = a = 0
            }
            if (5 & n[0])
                throw n[1];
            return {
                value: n[0] ? n[1]: void 0,
                done: !0
            }
        }
        var r, o, a, s, l = {
            label: 0,
            sent: function() {
                if (1 & a[0])
                    throw a[1];
                return a[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: n(0),
            "throw": n(1),
            "return": n(2)
        }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s
    }, s = n(1), l = n(4);
    Object.keys || l(".upgrade-tips").show(), s.bindingHandlers.hasHover = {
        init: function(e, t, n) {
            var i = function(e) {
                t()(e)
            };
            s.utils.registerEventHandler(e, "mouseover", i.bind(null, !0)), s.utils.registerEventHandler(e, "mouseout", i.bind(null, !1))
        }
    }, n(5), n(6).polyfill();
    var u = n(9), c = n(10), p = n(11), d = n(12), f = n(13), h = n(14);
    h.country_list = f, d.country_list = p, c.country_list = u, window.monitor = function(e, t, n) {
        var i = "/cgi-bin/common/attr?id=" + encodeURIComponent(e) + "&r=" + Math.random(), r = document.createElement("img"), o=!1, a = function() {
            o || (o=!0, t())
        };
        "function" == typeof t && (n || (n = 100), r.onload = a, r.onerror = a, setTimeout(a, n)), r.src = i
    }, l(function() {
        !function(e) {
            var t, n, i = e.charAt(0).toUpperCase() + e.slice(1), r = ["Moz", "Webkit", "O", "ms"], o = document.createElement("div");
            if (e in o.style)
                n = e;
            else 
                for (var a = 0; a < r.length; a++)
                    if ((t = r[a] + i)in o.style) {
                        n = t;
                        break
                    }
            return o = null, n
        }("borderRadius") && navigator.userAgent.match(/msie/i)
    });
    var m = function() {
        function e() {
            var e = this;
            this.lang = function() {
                switch (window.lang) {
                case 2052:
                case 1033:
                case 1028:
                    return s.observable(window.lang);
                default:
                    var e = navigator.language;
                    return e || (e = navigator.browserLanguage), /zh-tw|zh-hk/i.test(e) ? s.observable(1028) : /en-/.test(e) ? s.observable(1033) : s.observable(2052)
                }
            }(), this.reg_type = function() {
                var t = parseInt(i("type"));
                switch (t) {
                case 0:
                case 1:
                case 2:
                    return s.observable(t);
                case 3:
                    if (2052 == e.lang())
                        return s.observable(3);
                    s.observable(0);
                default:
                    return s.observable(0)
                }
            }(), this.chs = h, this.cht = l.extend({}, h, d), this.en = l.extend({}, h, c), this.str = function() {
                switch (e.lang()) {
                case 1033:
                    return s.observable(e.en);
                case 1028:
                    return s.observable(e.cht);
                case 2052:
                default:
                    return s.observable(e.chs)
                }
            }(), this.error = s.observable(0), this.errorMsg = s.computed(function() {
                switch (e.error()) {
                case 9999:
                    return e.str().frq_error;
                case 9997:
                    return "你肿么现在才来，今天的靓号早被抢光了，明天要早点来啊！";
                case 8:
                    return e.str().mail_binded;
                case 10:
                    return e.str().mail_duplicate;
                case 11:
                    return e.str().mail_expire;
                case 3:
                case 21:
                case 9996:
                    return e.str().evil_error;
                case 9:
                case 1:
                case 9998:
                default:
                    return e.str().system_busy
                }
            }), this.succ = s.observable(!1), this.active = s.observable(!1), this.qq = s.observable(""), this.country_list = s.observableArray(this.str().country_list), this.mail_list = s.observableArray(["@foxmail.com", "@qq.com"]), this.nickname = s.observable(""), this.nicknameStatus = s.observable(0), this.nicknameTips = s.computed(function() {
                if ("string" == typeof e.nicknameStatus())
                    return e.nicknameStatus();
                switch (e.nicknameStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().nick_plz_input
                }
            }), this.password = s.observable(""), this.encryptedPassword = s.computed(function() {
                var t = new RSAKey;
                return t.setPublic("C4D23C2DB0ECC904FE0CD0CBBCDC988C039D79E1BDA8ED4BFD4D43754EC9693460D15271AB43A59AD6D0F0EEE95424F70920F2C4A08DFDF03661300047CA3A6212E48204C1BE71A846E08DD2D9F1CBDDFF40CA00C10C62B1DD42486C70A09C454293BCA9ED4E7D6657E3F62076A14304943252A88EFA416770E0FBA270A141E7", "10001"), t.encrypt(e.password())
            }), this.passwordFocus = s.observable(!1), this.passwordStatus = s.observable(0), this.passwordTips = s.computed(function() {
                if (e.passwordFocus())
                    return "";
                if ("string" == typeof e.passwordStatus())
                    return e.passwordStatus();
                switch (e.passwordStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().password_input
                }
            }), this.show_password = s.observable(!1), this.passwordHasBlank = s.pureComputed(function() {
                return / /.test(e.password())
            }), this.passwordBadLength = s.pureComputed(function() {
                return !/^.{8,16}$/.test(e.password())
            }), this.passwordSimple = s.pureComputed(function() {
                return (e.password().match(/\d/) ? 1 : 0) + (e.password().match(/[a-z]/i) ? 1 : 0) + (e.password().match(/[^\da-zA-Z\s]/) ? 1 : 0) < 2
            }), this.phoneFocus = s.observable(!1), this.phoneStatus = s.observable(0), this.phoneTips = s.computed(function() {
                if ("string" == typeof e.phoneStatus())
                    return e.phoneStatus();
                switch (e.phoneStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().phone_null
                }
            }), this._phone = s.observable(""), this.phone = s.computed({
                read: function() {
                    return e._phone()
                },
                write: function(t) {
                    e._phone(t)
                }
            }), this.code = s.observable(""), this._country = s.observable("+" + this.str().country_list[0].c), this.country = s.computed({
                read: function() {
                    return e._country()
                },
                write: function(t) {
                    e._country(t);
                    var n = new RegExp(t.replace(/[^a-z0-9]/i, "").split("").join(".{0,}"), "i");
                    e.country_list(l(e.str().country_list).filter(function(e, t) {
                        return !!(n.test(t.c) || n.test(t.p) || n.test(t.n))
                    }).toArray())
                }
            }), this.phoneSubmit = s.computed(function() {
                return 0 === e.phone().length ? "" : e.country().replace("+", "00") + e.phone()
            }), this.qzone = s.observable(!0), this.agree = s.observable(!0), this.phone_tips = s.computed(function() {
                var t = e.phone();
                return "+86" != e.country() && (t = "00" + e.country().replace("+", "") + e.phone()), e.str().phone_tips_succ.replace("{phone}", t)
            }), this.send_sms = s.observable(this.str().send_sms), this.mail = s.observable(""), this.othermail_tips = s.computed(function() {
                return e.str().mail_tips_succ.replace("{mail}", e.mail())
            }), this._qqmail = s.observable(this.mail_list()[1]), this.qqmail = s.computed({
                read: function() {
                    return e._qqmail()
                },
                write: function(t) {
                    e._qqmail(t), e.checkMail(null, !0)
                }
            }), this.qqmail_tips = s.computed(function() {
                return e.str().qqmail_tips_succ.replace("{mail}", e.mail() + e.qqmail())
            }), this.mailStatus = s.observable(0), this.mailTips = s.computed(function() {
                if ("string" == typeof e.mailStatus())
                    return e.mailStatus();
                switch (e.mailStatus()) {
                case 0:
                case 1:
                    return "";
                default:
                    return e.str().mail_plz_input
                }
            }), this.mail_has_send = s.computed(function() {
                return e.str().mail_has_send.replace("{mail}", e.mail())
            }), this.mail_has_resend = s.computed(function() {
                return e.str().mail_has_resend.replace("{mail}", e.mail())
            }), this.isSelectingCountry = s.observable(!1), this.lianghaoKey = s.observable(""), this.lianghaoFocus = s.observable(!1), this.lianghaoEntryHovered = s.observable(!1), this.lianghaoDetailHovered = s.observable(!1), this.lianghaoOpened = s.computed(function() {
                return e.lianghaoEntryHovered() || e.lianghaoDetailHovered() || e.lianghaoFocus()
            }), this.langOpened = s.observable(!1), this.side = ["img/01-1.jpg", "img/01-3.jpg", "img/01-4.jpg"], this.currentSide = s.observable(0), this.currentSideUrl = s.computed(function() {
                return "url(//4.url.cn/zc/v3/" + e.side[e.currentSide()] + ")"
            }), this.up_sms_port = s.observable("10690700511"), this.up_sms_port_string = s.computed(function() {
                return e.up_sms_port().match(/\d{1,4}/g).join(" ")
            }), this.up_error_msg = s.observable(this.str().up_sms_failed), this._is_up_sms = s.observable(!1), this.is_up_sms = s.computed({
                read: function() {
                    return e._is_up_sms()
                },
                write: function(t) {
                    !e._is_up_sms() && t && (e.up_error_msg(""), e.up_error_count(0), e.up_port_updated(!1)), e._is_up_sms(t), window.scrollTo(0, 0)
                }
            }), this.up_port_updated = s.observable(!1), this.up_error_count = s.observable(0), this.isSelectingMail = s.observable(!1), this.blackPhone = [], this.sendSMSHover = s.observable(!1), this._friends = s.observableArray([]), this.friends = s.computed({
                read: function() {
                    return e._friends()
                },
                write: function(t) {
                    for (var n in t)
                        e.loadAvatar(t[n].qq);
                    e._friends(t)
                }
            }), this.getNumTips = s.observable(""), this.codeTips = s.observable(""), this.includeNum = ["168", "560", "1314", "200", "230", "300", "510", "521", "530", "609", "6699", "920", "930"], this.includeMean = ["一路发", "我念你", "一生一世", "爱你哦", "爱死你", "想你哦", "我依你", "我愿意", "我想你", "到永久", "顺顺利利", "就爱你", "好想你"], this.lianghao_list = s.observableArray([]), this.lianghao = s.observable(""), this.lianghao_html = s.computed(function() {
                for (var t = e.lianghao(), n = 0, i = e.includeNum; n < i.length; n++) {
                    var r = i[n];
                    if (t.indexOf(r) >= 0) {
                        return t.replace(r, "<span class='linght-num'>" + r + "</span>")
                    }
                }
                for (var o = 0; o < e.lianghao_list().length; ++o)
                    if (e.lianghao_list()[o][0] == e.lianghao())
                        switch (e.lianghao_list()[o][1]) {
                        case 3:
                            for (var a = 0; a < e.includeNum.length; ++a)
                                if (e.lianghao().indexOf(e.includeNum[a]) >= 0)
                                    return t.replace(e.includeNum[a], "<span class='linght-num'>" + e.includeNum[a] + "</span>");
                                    return "";
                                case 4:
                                case 5:
                                    var s = e.lianghao_list()[o][1] - 2;
                                    return "<span class='linght-num'>" + t.substring(0, s) + "</span>" + t.substr(s, t.length - 2 * s) + "<span class='linght-num'>" + t.substring( - s, s) + "</span>"
                        }
                return t
            }), this.lianghao_mean = s.computed(function() {
                for (var t = 0; t < e.lianghao_list().length; ++t)
                    if (e.lianghao_list()[t][0] == e.lianghao())
                        switch (e.lianghao_list()[t][1]) {
                        case 2:
                            return "（9位靓号）";
                        case 3:
                            for (var n = 0; n < e.includeNum.length; ++n)
                                if (e.lianghao().indexOf(e.includeNum[n]) >= 0)
                                    return "（寓意：" + e.includeMean[n] + "）";
                                    return "";
                                case 4:
                                case 5:
                                    return "（寓意：首尾呼应）";
                                case 1:
                                default:
                                    return ""
                        }
                return ""
            }), this._is_verify = s.observable(!1), this.is_verify = s.computed({
                read: function() {
                    return e._is_verify()
                },
                write: function(t) {
                    if (e._is_verify(t), t)
                        if (window.scrollTo(0, 0), window.capInit)
                            window.capRefresh();
                        else {
                            var n = ("https:" == location.protocol ? "https://ssl.captcha.qq.com" : "http://captcha.qq.com") + "/template/TCapIframeApi.js?aid=1600000592&clientype=2&lang=" + e.lang() + "&captype=" + e.capt_type() + "&disturblevel=" + e.capt_level();
                            l.getScript(n, function() {
                                window.capInit(l("#verify-content")[0], {
                                    type: "embed",
                                    callback: function(t) {
                                        if (0 != t.ret)
                                            return void window.capRefresh();
                                            switch (e.verify_type()) {
                                            case 0:
                                                e.onLianghaoVerifyOK(t);
                                                break;
                                            case 1:
                                                e.onEmailVerifyOK(t);
                                                break;
                                            case 2:
                                                e.onSMSVerifyOK(t);
                                                break;
                                            case 3:
                                                e.onGetNumVerifyOK(t)
                                            }
                                        }
                                    })
                                })
                        }
                }
            }), this._elevel = s.observable(0), this.elevel = s.computed({
                read: function() {
                    return e._elevel()
                },
                write: function(t) {
                    switch (e._elevel(t), t%10) {
                    case 6:
                        e.error(9996)
                    }
                }
            }), this.capt_type = s.pureComputed(function() {
                return Math.floor(e.elevel() / 10)
            }), this.capt_level = s.pureComputed(function() {
                return e.elevel()%10
            }), this.verify_type = s.observable(3), this.can_close_verify = s.computed(function() {
                return 1 != e.verify_type()
            }), this.knownEmail = {
                "sina.com": "http://mail.sina.com",
                "163.com": "http://mail.163.com",
                "126.com": "http://mail.126.com",
                "vip.sina.com": "http://vip.sina.com.cn/",
                "sina.cn": "http://mail.sina.com.cn/cnmail/",
                "hotmail.com": "http://www.hotmail.com",
                "gmail.com": "http://mail.google.com",
                "sohu.com": "http://mail.sohu.com",
                "yahoo.cn": "http://mail.cn.yahoo.com/",
                "yahoo.com.cn": "http://mail.cn.yahoo.com/",
                "yahoo.com": "https://login.yahoo.com/",
                "139.com": "http://mail.10086.cn/",
                "wo.com.cn": "http://mail.wo.com.cn/",
                "189.cn": "http://www.189.cn/webmail/",
                "yahoo.com.tw": "http://mail.yahoo.com.tw/",
                "yahoo.com.hk": "http://mail.yahoo.com.hk/",
                "yeah.net": "http://www.yeah.net",
                "hotmail.com.hk": "http://hotmail.com.hk/",
                "hotmail.com.tw": "http://hotmail.com.tw/",
                "live.com": "http://live.com",
                "live.cn": "http://live.cn",
                "live.hk": "http://live.hk"
            }, this.IsKnownEmail = s.computed(function() {
                var t = e.mail(), n = t.substr(t.lastIndexOf("@") + 1);
                return !!e.knownEmail.hasOwnProperty(n)
            }), this.agreementOpened = s.observable(!1);
            var t = this;
            t.sideTimer || (t.sideTimer = 0, t.startSide());
            var n = function() {
                var e = l(".side"), n = l(window), i = l(".main"), r = l(".main-wraper"), o = l(".footer");
                n.width() > 1200 ? (e.show(), r.css({
                    margin: ""
                }), e.css({
                    width: ""
                })) : n.width() > 1e3 ? (e.show(), e.css({
                    width: "240px"
                }), r.css({
                    margin: "0 0 0 240px"
                })) : (e.hide(), r.css({
                    margin: 0
                }));
                var a = o.hasClass(".bottom") ? 0: o.outerHeight(!0);
                i.outerHeight(!0) + i.offset().top + a < n.height() ? (o.addClass("bottom"), o.width(i.width())) : (o.removeClass("bottom"), o.width("")), t.resizeContent()
            };
            l(n), l(window).resize(n), l(document.body).on("keydown", function(t) {
                if (e.isSelectingCountry()) {
                    var n;
                    switch (t.which) {
                    case 38:
                        n =- 1;
                        break;
                    case 40:
                        n = 1;
                        break;
                    case 13:
                        n = 0;
                        break;
                    default:
                        return 
                    }
                    var i, r = l(".country li.focus");
                    if (0 === r.length)
                        i = l(".country li:first");
                    else {
                        var o = l(".country li"), a = o.index(r), s = a + n;
                        s <= 0 ? s = 0 : s >= o.length && (s = o.length - 1), r.removeClass("focus"), i = l(o[s])
                    }
                    if (0 === n)
                        return e.setCountry(parseInt(i.text().replace(/[^\d]/g, ""))), !1;
                    i.addClass("focus");
                    var u = l(".country"), c = l(".country li:first"), p = i.offset().top - c.offset().top, d = p + i.height(), f = u.scrollTop();
                    return d > f + u.height() ? u.scrollTop(p - u.height() + i.height()) : p < f && u.scrollTop(p), !1
                }
            }), l.ajax({
                url: "/cgi-bin/common/getUpPort?r=" + Math.random()
            }).done(function(e) {
                0 == e.ec && t.up_sms_port(e.upport)
            }), l(document.body).on("click", function(t) {
                return 0 === l(t.target).parents("input.nation, ul.options.country").length&&-1 === l("input.nation, ul.options.country").index(t.target) && e.endSelectCountry(), 0 === l(t.target).parents(".input-outer.qqmail-outer").length&&-1 === l(".input-outer.qqmail-outer").index(t.target) && e.isSelectingMail(!1), !0
            });
            var o = i("ADTAG") || "", a = i("regkey") || "", u = new Date;
            u.setTime(u.getTime() + 2628e3), document.cookie = "ADTAG=" + o + "; expires=" + u.toUTCString() + "; domain=.zc.qq.com; path=/", document.cookie = "regkey=" + a + "; expires=" + u.toUTCString() + "; domain=.zc.qq.com; path=/";
            var p = i("email"), f = i("uin"), m = i("key2"), g = (i("telphone"), i("ec"));
            if (g)
                return void this.error(parseInt(g));
            if (p && f && m) {
                this.qq(f), this.mail(p), this.succ(!0), this.reg_type(2), this.friends([]);
                for (var y = 0, v = [1, 2, 3]; y < v.length; y++) {
                    var b = v[y], w = r("fuin" + b), x = r("nick" + b);
                    w && x && this.friends().push({
                        qq: w,
                        nickname: x,
                        status: 0,
                        tips: "",
                        icon: ""
                    })
                }
                return void this.friends(this.friends())
            }
            this.initSession()
        }
        return e.prototype.openBeginPage = function(e, t) {
            var n;
            switch (e) {
            case 1033:
                n = "en";
                break;
            case 1028:
                n = "cht";
                break;
            case 2052:
            default:
                n = "chs"
            }
            location.href = "/v3/index-" + n + ".html?" + l.param({
                type: t
            })
        }, e.prototype.switchLanguage = function(e) {
            if (0 != this.lang() && e != this.lang())
                return void(2052 != e && 3 == this.reg_type() ? this.openBeginPage(e, 0) : this.openBeginPage(e, this.reg_type()));
            switch (e) {
            case 1028:
                this.lang(1028), this.str(this.cht);
                break;
            case 1033:
                this.lang(1033), this.str(this.en);
                break;
            default:
                this.lang(2052), this.str(this.chs)
            }
            this.isChs() || 3 != this.reg_type() || this.reg_type(0), this.initSession()
        }, e.prototype.initSession = function() {
            var e, t = this;
            e = this.isLianghao() ? "/cgi-bin/chs/zc_new/init" : "/cgi-bin/zc/init", l.ajax({
                url: e,
                data: {
                    r: Math.random(),
                    accounttype: this.reg_type(),
                    lang: this.lang()
                }
            }).then(function(e) {
                if (t.isLianghao()) {
                    if (0 != e.ec)
                        return void t.error(parseInt(e.ec));
                    switch (e.hasOwnProperty("elevel") && t.elevel(parseInt(e.elevel)), parseInt(e.elevel)) {
                    case 0:
                        t.onLianghaoVerifyOK();
                        break;
                    case 6:
                        1 == parseInt(e.reason) ? t.error(9997) : t.error(9999);
                        break;
                    case 1:
                        t.verify_type(0), t.is_verify(!0);
                        break;
                    default:
                    case 2:
                        t.error(9997)
                    }
                } else 
                    e.hasOwnProperty("elevel") && t.elevel(parseInt(e.elevel));
                switch (parseInt(e.ec)) {
                case 0:
                    break;
                case 6:
                    t.error(9996);
                    break;
                default:
                    t.error(9998)
                }
            }, function() {
                t.error(9998)
            })
        }, e.prototype.isChs = function() {
            return this.str().now_language == this.chs.now_language
        }, e.prototype.isCht = function() {
            return this.str().now_language == this.cht.now_language
        }, e.prototype.isEn = function() {
            return this.str().now_language == this.en.now_language
        }, e.prototype.checkDirtyNickname = function(e) {
            var t = this, n = this.nickname();
            return 0 == n.length ? void this.nicknameStatus(this.str().nick_null) : "" == n.trim() ? void this.nicknameStatus(this.str().nick_blank) : encodeURIComponent(n).match(/%[0-9a-z]{2}|./gi).length > 36 ? void this.nicknameStatus(this.str().nick_max) : void(!1 !== e && l.ajax({
                url: this.isLianghao() ? "/cgi-bin/chs/common/dirty_check": "/cgi-bin/zc/dirty_check",
                data: {
                    r: Math.random(),
                    nick: this.nickname()
                },
                method: "GET"
            }).then(function(e) {
                if (t.nickname() == n) {
                    if (!e ||!e.hasOwnProperty("ec"))
                        return void t.nicknameStatus(t.str().nick_invalid);
                    switch (parseInt(e.ec)) {
                    case 0:
                        t.nicknameStatus(1);
                        break;
                    case 15:
                    default:
                        t.nicknameStatus(t.str().nick_invalid)
                    }
                }
            }, function() {
                t.nicknameStatus(t.str().nick_invalid)
            }))
        }, e.prototype.checkPassword = function(e) {
            var t = this;
            this.passwordStatus(function() {
                return 0 == t.password().length ? t.str().password_null : t.passwordHasBlank() ? t.str().password_blank : t.passwordBadLength() ? t.str().password_length : t.passwordSimple() ? t.str().password_simple : 1
            }()), this.passwordFocus(!1), this.isLianghao() ||!1 !== e && l.ajax({
                url: "/cgi-bin/zc/pwd_check",
                method: "POST",
                data: {
                    nick: this.nickname(),
                    mobile: this.country() + this.phone(),
                    password: this.encryptedPassword()
                }
            }).then(function(e) {
                switch (parseInt(e.ec)) {
                case 0:
                    e.hasOwnProperty("elevel") && t.elevel(parseInt(e.elevel));
                    break;
                case 21:
                    t.error(9996)
                }
            }, function() {})
        }, e.prototype.onPasswordFocus = function() {
            this.passwordFocus(!0), this.passwordStatus(0)
        }, e.prototype.onNicknameFocus = function() {
            this.nicknameStatus(0)
        }, e.prototype.onMailFocus = function() {
            this.mailStatus(0)
        }, e.prototype.onPhoneFocus = function() {
            this.phoneStatus(0)
        }, e.prototype.checkPhone = function() {
            if (this.isLianghao()) {
                if ("+86" != this.country())
                    return void this.phoneStatus("只支持国内手机号");
                0 === this.phone().length ? this.phoneStatus(this.str().phone_null) : this.phone().match(/^\d+$/)?-1 !== this.blackPhone.indexOf(this.phoneSubmit()) ? this.phoneStatus(this.str().phone_error) : this.phoneStatus(1) : this.phoneStatus(this.str().phone_invalid)
            } else 
                this.phone().length||-1 !== [3, 4].indexOf(this.capt_level()) ? 0 === this.phone().length ? this.phoneStatus(this.str().phone_null) : this.phone().match(/^\d+$/)?-1 !== this.blackPhone.indexOf(this.phoneSubmit()) ? this.phoneStatus(this.str().phone_error) : this.phoneStatus(1) : this.phoneStatus(this.str().phone_invalid) : this.phoneStatus(0)
        }, e.prototype.clearCode = function() {
            this.getNumTips(""), this.codeTips("")
        }, e.prototype.checkMail = function(e, t) {
            var n = this;
            if (0 == this.mail().length)
                return void(!0 === t ? this.mailStatus(0) : this.mailStatus(this.str().mail_plz_input));
            if (this.isQQMail()) {
                if (/^[^a-z]+/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_start_limit);
                if (/[^a-z0-9_.-]/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_char_limit);
                if (/[._-]{2,}/.test(this.mail()))
                    return void this.mailStatus(this.str().mail_special_limit);
                if (/[^a-z0-9]+$/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_end_limit)
            } else {
                if (/^[^a-z0-9]/i.test(this.mail()))
                    return void this.mailStatus(this.str().mail_illeagl);
                if (/@(qq|foxmail)\.com$/.test(this.mail()))
                    return void this.mailStatus(this.str().mail_not_qq)
            }
            if (!1 !== e) {
                var i = {
                    r: Math.random(),
                    nick: this.nickname()
                };
                return e && e.ticket && e.randstr && (i.tk = e.ticket, i.verifycode = e.randstr), this.isQQMail() ? i.email = this.mail() + this.qqmail() : i.other_email = this.mail(), l.ajax({
                    url: "/cgi-bin/zc/check_mail",
                    data: i,
                    method: "GET"
                }).then(function(e) {
                    switch (e.hasOwnProperty("elevel") && n.elevel(parseInt(e.elevel)), parseInt(e.ec)) {
                    case 0:
                        n.mailStatus(1);
                        break;
                    case 7:
                    case 4:
                        n.mailStatus(n.str().mail_illeagl);
                        break;
                    case 8:
                    case 9:
                        n.mailStatus(n.str().mail_exist);
                        break;
                    case 2:
                    case 12:
                        n.verify_type(1), n.is_verify(!0);
                        break;
                    default:
                        n.mailStatus(n.str().mail_exist)
                    }
                }, function() {
                    n.mailStatus(n.str().mail_exist)
                }), 0
            }
        }, e.prototype.beginSelectCountry = function() {
            this.country_list(this.str().country_list), this.isSelectingCountry(!0)
        }, e.prototype.endSelectCountry = function() {
            this.isSelectingCountry(!1), this.checkCountry()
        }, e.prototype.togglerCountry = function() {
            this.isSelectingCountry() ? this.checkCountry() : this.country_list(this.str().country_list), this.isSelectingCountry(!this.isSelectingCountry())
        }, e.prototype.setCountry = function(e) {
            this._country("+" + e), this.isSelectingCountry(!1), this.checkCountry()
        }, e.prototype.checkCountry = function() {
            this._country(this._country().trim()), /^\+\d+$/.test(this._country()) || this._country("+" + this.str().country_list[0].c)
        }, e.prototype.searchLianghao = function() {
            window.monitor(2759875), window.open("//haoma.qq.com/shop.html#num=" + encodeURIComponent(this.lianghaoKey()) + "&from=zc")
        }, e.prototype.typeLianghao = function(e, t) {
            return 13 !== t.keyCode || (e.searchLianghao(), !1)
        }, e.prototype.toggleLang = function() {
            this.langOpened(!this.langOpened())
        }, e.prototype.openLang = function() {
            this.langOpened(!0)
        }, e.prototype.closeLang = function() {
            this.langOpened(!1)
        }, e.prototype.sideTo = function(e) {
            this.currentSide(e)
        }, e.prototype.stopSide = function() {
            clearInterval(this.sideTimer)
        }, e.prototype.startSide = function() {
            clearInterval(this.sideTimer);
            var e = this;
            this.sideTimer = setInterval(function() {
                e.sideTo((e.currentSide() + 1)%e.side.length)
            }, 5e3)
        }, e.prototype.toQQ = function() {
            this.openBeginPage(this.lang(), 0)
        }, e.prototype.toMail = function() {
            this.openBeginPage(this.lang(), 2)
        }, e.prototype.toQQMail = function() {
            this.openBeginPage(this.lang(), 1)
        }, e.prototype.toLianghao = function() {
            var e = this;
            window.monitor(2759876, function() {
                e.openBeginPage(e.lang(), 3)
            })
        }, e.prototype.isMail = function() {
            return 2 == this.reg_type()
        }, e.prototype.isQQMail = function() {
            return 1 == this.reg_type()
        }, e.prototype.isQQ = function() {
            return 0 == this.reg_type()
        }, e.prototype.isLianghao = function() {
            return 3 == this.reg_type()
        }, e.prototype.setMail = function(e) {
            this.qqmail(e), this.isSelectingMail(!1)
        }, e.prototype.beginSelectMail = function() {
            this.isSelectingMail(!0)
        }, e.prototype.toggleSelectMail = function() {
            this.isSelectingMail(!this.isSelectingMail())
        }, e.prototype.sendSMS = function(e) {
            var t = this;
            switch (this.phoneStatus()) {
            case 0:
                this.phoneStatus(this.str().phone_null);
                break;
            case 1:
                break;
            default:
                return 
            }
            if (4 == this.capt_level())
                return void this.is_up_sms(!0);
            var n = 60, i = this;
            if (i.send_sms() == i.str().send_sms) {
                l("#send-sms").attr("disabled", "disabled");
                var r = {
                    telphone: i.phoneSubmit(),
                    nick: i.nickname(),
                    elevel: i.elevel()
                };
                e && e.ticket && e.randstr && (r.tk = e.ticket, r.verifycode = e.randstr), l.ajax({
                    url: this.isLianghao() ? "/cgi-bin/chs/zc_new/sms_send": "/cgi-bin/zc/sms_send",
                    method: "POST",
                    data: r
                }).then(function(e) {
                    var r = function() {
                        i.send_sms(n.toString());
                        var e = setInterval(function() {
                            n--, i.send_sms(n.toString()), 0 == n && (l("#send-sms").removeAttr("disabled"), clearInterval(e), i.send_sms(i.str().send_sms))
                        }, 1e3)
                    };
                    if (t.isLianghao())
                        switch (parseInt(e.ec)) {
                        case 0:
                            r(), l("input.code").focus();
                            break;
                        case 1:
                            t.phoneStatus("抱歉，服务器繁忙，请稍后再试。");
                            break;
                        case 31:
                            t.phoneStatus(t.str().phone_error), t.blackPhone.push(i.phoneSubmit());
                            break;
                        case 12:
                            t.phoneStatus("手机号码出错");
                            break;
                        case 10:
                        case 11:
                        case 14:
                        case 15:
                            t.phoneStatus("该手机号码今天接收验证码数目已达上限，建议尝试其他手机号码");
                            break;
                        case 21:
                            t.error(9996);
                            break;
                        case 22:
                            t.error(9997);
                            break;
                        case 23:
                            t.phoneStatus("该号码已经参加过该活动");
                            break;
                        case 26:
                            t.error(9996)
                        } else 
                            switch (parseInt(e.ec)) {
                            case 0:
                                r(), l("input.code").focus();
                                break;
                            case 1:
                                t.error(9998);
                                break;
                            case 14:
                                t.error(9999);
                                break;
                            case 4:
                            case 31:
                                t.phoneStatus(t.str().phone_error), t.blackPhone.push(i.phoneSubmit());
                                break;
                            case 26:
                                t.is_up_sms(!0);
                                break;
                            case 21:
                                t.error(9996);
                                break;
                            default:
                                t.error(9998)
                            }
                    0 != e.ec && l("#send-sms").removeAttr("disabled"), e.hasOwnProperty("elevel") && t.elevel(parseInt(e.elevel))
                }, function() {})
            }
        }, e.prototype.addFriend = function(e) {
            for (var t = this, n = 0, i = this.friends(); n < i.length; n++) {
                var r = i[n];
                if (r.qq == e && 1 == r.status)
                    return 
            }
            var o = function() {
                for (var n = t.friends(), i = 0, r = n; i < r.length; i++) {
                    var o = r[i];
                    if (o.qq == e)
                        return o.status = 0, o.tips = t.str().friends_failed, t.friends([]), void t.friends(n)
                }
            };
            l.ajax({
                url: "/cgi-bin/zc/add_friend",
                method: "POST",
                data: {
                    uin: this.qq(),
                    fuin: e
                }
            }).then(function(n) {
                switch (parseInt(n.ec)) {
                case 0:
                    for (var i = t.friends(), r = 0; r < i.length; ++r) {
                        var a = i[r];
                        if (a.qq == e)
                            return a.status = 1, a.tips = t.str().friends_succ, t.friends([]), void t.friends(i)
                    }
                    break;
                default:
                    o()
                }
            }, function() {
                o()
            })
        }, e.prototype.loadAvatar = function(e) {
            l.ajax({
                url: ("https:" === location.protocol ? "https://ssl." : "http://") + "ptlogin2.qq.com/getface?appid=1&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + encodeURIComponent(e) + "&r=" + Math.random(),
                dataType: "jsonp"
            })
        }, e.prototype.submit = function(e) {
            var t = this;
            this._is_up_sms() && (this.up_error_msg(""), this.up_port_updated(!1));
            var n=!1;
            if (this.checkPassword(!1), this.checkDirtyNickname(!1), this.checkPhone(), (this.isMail() || this.isQQMail()) && this.checkMail(!1), this.agree() || (this.getNumTips(this.str().agreement_need), n=!0), this.isMail() && 1 !== this.mailStatus() && (n=!0), this.isQQMail() && 1 !== this.mailStatus() && (n=!0), 1 !== this.nicknameStatus() && (n=!0), 1 !== this.passwordStatus() && (n=!0), "number" != typeof this.phoneStatus() && (n=!0), this.phone().length) {
                if (this.capt_level() <= 3)
                    0 === this.code().length && (this.codeTips(this.str().code_null), n=!0);
                else if (4 === this.capt_level()&&!this.is_up_sms())
                    return void this.is_up_sms(!0)
            } else ( - 1 !== [3, 4].indexOf(this.capt_level()) || this.isLianghao()
                ) && (this.codeTips(this.str().code_null), n=!0);
            if (!n) {
                var i = {
                    qzone_flag: this.qzone(),
                    nick: this.nickname(),
                    telphone: this.phoneSubmit(),
                    password: this.encryptedPassword(),
                    smsvc: this.code()
                };
                if (this.isLianghao() && (i.bind_uin = this.lianghao(), i.act_lsig = this.act_lsig, i.elevel = this.elevel()), this.isQQMail() && (i.email = this.mail() + this.qqmail()), this.isMail() && (i.other_email = this.mail()), - 1 !== [1, 2].indexOf(this.capt_level()) && 0 == this.code().length) {
                    if (!(e && e.ticket && e.randstr))
                        return this.verify_type(3), void this.is_verify(!0);
                    i.verifycode = e.randstr, i.tk = e.ticket
                }
                return l("#get_acc").attr("disabled", "disabled").addClass("disabled"), l.ajax({
                    url: this.isLianghao() ? "/cgi-bin/chs/lh_activity/bind_acc": "/cgi-bin/zc/get_acc",
                    method: "POST",
                    data: i
                }).then(function(e) {
                    if (t.isLianghao())
                        switch (parseInt(e.ec)) {
                        case 0:
                            t.succ(!0), t.qq(e.uin), window.monitor(2891812);
                            break;
                        case 2:
                            t.codeTips("验证码错误");
                            break;
                        case 40:
                            t.getNumTips("号码已绑定，请更换号码");
                            break;
                        case 41:
                            t.getNumTips("页面超时，请刷新页面重试");
                            break;
                        case 21:
                        default:
                            t.error(parseInt(e.ec))
                        } else 
                            switch (parseInt(e.ec)) {
                            case 0:
                                t.succ(!0), t.qq(e.uin), t.isMail() && t.active(!0), t.friends([]);
                                for (var n = 1; n < 4; ++n)
                                    e["fuin" + n] && e["nick" + n] && t.friends().push({
                                        qq: e["fuin" + n],
                                        nickname: e["nick" + n],
                                        status: 0,
                                        tips: "",
                                        icon: ""
                                    });
                                    t.friends(t.friends()), window.monitor(2892272);
                                    break;
                                case 2:
                                case 16:
                                    t.codeTips(t.str().verify_code_error);
                                    break;
                                case 17:
                                    t.up_error_msg(t.str().up_sms_failed), t.up_error_count(t.up_error_count() + 1);
                                    break;
                                case 18:
                                    t.getNumTips(t.str().need_send_sms);
                                    break;
                                case 31:
                                    t.phoneStatus(t.str().phone_error), t.blackPhone.push(t.phoneSubmit());
                                    break;
                                case 8:
                                case 9:
                                    t.mailStatus(t.str().mail_exist);
                                    break;
                                case 13:
                                case 15:
                                    t.nicknameStatus(t.str().nick_invalid);
                                    break;
                                case 26:
                                    t.is_up_sms(!0);
                                    break;
                                case 21:
                                    t.error(9996);
                                    break;
                                default:
                                    t.error(parseInt(e.ec))
                            }
                    - 1 == [17, 26].indexOf(parseInt(e.ec)) && t.is_up_sms(!1)
                }, function() {}).always(function() {
                    return l("#get_acc").removeAttr("disabled").removeClass("disabled")
                }), !1
            }
        }, e.prototype.changeLianghao = function() {
            for (var e = 0; e < this.lianghao_list().length; ++e)
                if (this.lianghao_list()[e][0] == this.lianghao())
                    return void this.lianghao(this.lianghao_list()[(e + 1)%this.lianghao_list().length][0])
        }, e.prototype.onLianghaoVerifyOK = function(e) {
            var t = this;
            this.is_verify(!1);
            var n = {
                elevel: this.elevel()
            };
            e && e.randstr && (n.verifycode = e.randstr), l.ajax({
                url: "/cgi-bin/chs/lh_activity/get_acc",
                method: "POST",
                data: n
            }).then(function(e) {
                if (0 != e.ec)
                    return void t.error(9998);
                t.lianghao_list([]);
                for (var n = 0; n < e.uin_cnt; ++n)
                    t.lianghao_list.push([e["new_uin_" + n], parseInt(e["keep_type_" + n])]);
                t.lianghao_list(t.lianghao_list()), t.lianghao(t.lianghao_list()[0][0]), t.act_lsig = e.act_lsig
            }, function() {
                t.error(9998)
            })
        }, e.prototype.onEmailVerifyOK = function(e) {
            this.is_verify(!1), this.checkMail(e)
        }, e.prototype.onSMSVerifyOK = function(e) {
            this.is_verify(!1), this.sendSMS(e)
        }, e.prototype.onGetNumVerifyOK = function(e) {
            this.is_verify(!1), this.submit(e)
        }, e.prototype.download = function() {
            location.href = "/cgi-bin/zc/download?" + l.param({
                uin: this.qq(),
                lang: this.lang()
            })
        }, e.prototype.resend = function() {
            l.ajax({
                url: "/cgi-bin/zc/re_act",
                data: {
                    uin: this.qq(),
                    other_email: this.mail(),
                    telphone: this.phoneSubmit()
                },
                method: "GET"
            }), alert(this.mail_has_resend())
        }, e.prototype.resizeContent = function() {
            var e = l(".main"), t = l(window);
            if (e.outerHeight() + 300 < t.outerHeight()) {
                var n = {
                    top: "50%"
                };
                "100px" === e.css("top") && (n.marginTop = "-" + (e.outerHeight() / 2 + 50) + "px"), e.css(n)
            } else 
                e.css({
                    top: "",
                    marginTop: ""
                })
        }, e.prototype.startClient = function() {
            var e, t, n, i = this, r = function() {
                var e = document.createElement("iframe");
                e.style.height = "0px", e.style.width = "0px", e.src = "tencent://OpenQQLogin/?FUIN=" + i.qq(), document.body.appendChild(e)
            }, o=!1;
            try {
                navigator.mimeTypes["application/qscall-plugin"] ? (e = document.createElement("embed"), e.type = "application/qscall-plugin", e.style.width = "0px", e.style.height = "0px", document.body.appendChild(e), e.InitActiveX("TimwpDll.TimwpCheck")) : e = new ActiveXObject("TimwpDll.TimwpCheck"), n = e.GetHummerQQVersion(), o = n >= 2509
            } catch (a) {
                o=!1
            }
            if (o)
                try {
                    navigator.mimeTypes["application/qscall-plugin"] ? (t = document.createElement("embed"), t.type = "application/qscall-plugin", t.style.width = "0px", t.style.height = "0px", document.body.appendChild(t), t.InitActiveX("QQCPHelper.CPAdder")) : t = new ActiveXObject("QQCPHelper.CPAdder"), t.StartupIM(this.qq())
            } catch (a) {
                return r(), !1
            } else 
                r()
        }, e.prototype.openMail = function() {
            var e = this.mail(), t = e.substr(e.lastIndexOf("@") + 1);
            this.knownEmail.hasOwnProperty(t) && window.open(this.knownEmail[t])
        }, e.prototype.feedback = function() {
            if (this.isEn())
                return void(window.location.href = "mailto:qqimail@tencent.com?subject=Feedback from English signup page");
            r("sessionCookie"), r("machineCookie"), r("skey"), r("uin");
            window.open("https://support.qq.com/products/14802")
        }, e.prototype.errorReturn = function() {
            var e = i("ec");
            if (e)
                switch (parseInt(e)) {
                case 8:
                case 10:
                    return void this.openBeginPage(this.lang(), 2);
                default:
                    location.href = location.pathname
                } else 
                    location.reload()
        }, e.prototype.home = function() {
            this.openBeginPage(this.lang(), 0)
        }, e.prototype.switchAgreement = function() {
            this.agreementOpened(!this.agreementOpened())
        }, e.prototype.closeVerify = function() {
            switch (this.verify_type()) {
            case 0:
                this.openBeginPage(this.lang(), 0);
                break;
            case 3:
            case 2:
                this.is_verify(!1)
            }
        }, e.prototype.getUpPortAsync = function() {
            return new Promise(function(e, t) {
                l.get("/cgi-bin/common/getUpPort?r=" + Math.random()).done(function(n) {
                    0 == n.ec ? e(n.upport) : t(n.ec)
                }).fail(function(e) {
                    t(e)
                })
            })
        }, e.prototype.switchUpPort = function() {
            return o(this, void 0, void 0, function() {
                var e, t, n;
                return a(this, function(i) {
                    switch (i.label) {
                    case 0:
                        e = this.up_sms_port(), i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]), [4, this.getUpPortAsync()];
                    case 2:
                        return t = i.sent(), t != e ? (this.up_sms_port(t), [3, 5]) : [3, 4];
                    case 3:
                        return n = i.sent(), [3, 5];
                    case 4:
                        return [3, 1];
                    case 5:
                        return this.up_port_updated(!0), [2]
                    }
                })
            })
        }, e
    }(), g = new m;
    window.app = g, s.applyBindings(g), document.body.style.display = "block", setTimeout(function() {
        return document.body.style.opacity = "1"
    }, 0), window.pt = {
        setHeader: function(e) {
            for (var t in e)
                for (var n = g.friends(), i = 0, r = n; i < r.length; i++) {
                    var o = r[i];
                    if (o.qq == t)
                        return void(o.icon != e[t] && (o.icon = e[t], g._friends([]), g._friends(n)))
                }
        }
    }
}, function(e, t, n) {
    var i, r, o;
    (function(e) {
        !function() {
            !function(a) {
                var s = this || (0, eval)("this"), l = s.document, u = s.navigator, c = s.jQuery, p = s.JSON;
                !function(s) {
                    n(3).amd ? (r = [t, n], i = s, (o = "function" == typeof i ? i.apply(t, r) : i) !== a && (e.exports = o)) : s(e.exports || t)
                }(function(e, t) {
                    function n(e, t) {
                        return !!(null === e || typeof e in y) && e === t
                    }
                    function i(e, t) {
                        var n;
                        return function() {
                            n || (n = g.utils.setTimeout(function() {
                                n = a, e()
                            }, t))
                        }
                    }
                    function r(e, t) {
                        var n;
                        return function() {
                            clearTimeout(n), n = g.utils.setTimeout(e, t)
                        }
                    }
                    function o(e) {
                        var t = this;
                        return e && g.utils.objectForEach(e, function(e, n) {
                            var i = g.extenders[e];
                            "function" == typeof i && (t = i(t, n) || t)
                        }), t
                    }
                    function d(e, t) {
                        t && t !== v ? "beforeChange" === t ? this._limitBeforeChange(e) : this._origNotifySubscribers(e, t) : this._limitChange(e)
                    }
                    function f(e, t) {
                        null !== t && t.dispose && t.dispose()
                    }
                    function h(e, t) {
                        var n = this.computedObservable, i = n[k];
                        i.isDisposed || (this.disposalCount && this.disposalCandidates[t] ? (n.addDependencyTracking(t, e, this.disposalCandidates[t]), this.disposalCandidates[t] = null, --this.disposalCount) : i.dependencyTracking[t] || n.addDependencyTracking(t, e, i.isSleeping ? {
                            _target: e
                        } : n.subscribeToDependency(e)), e._notificationIsPending && e._notifyNextChangeIfValueIsDifferent())
                    }
                    function m(e, t, n, i) {
                        g.bindingHandlers[e] = {
                            init: function(e, r, o, a, s) {
                                var l, u;
                                return g.computed(function() {
                                    var o = r(), a = g.utils.unwrapObservable(o), c=!n!=!a, p=!u;
                                    (p || t || c !== l) && (p && g.computedContext.getDependenciesCount() && (u = g.utils.cloneNodes(g.virtualElements.childNodes(e), !0)), c ? (p || g.virtualElements.setDomNodeChildren(e, g.utils.cloneNodes(u)), g.applyBindingsToDescendants(i ? i(s, o) : s, e)) : g.virtualElements.emptyNode(e), l = c)
                                }, null, {
                                    disposeWhenNodeIsRemoved: e
                                }), {
                                    controlsDescendantBindings: !0
                                }
                            }
                        }, g.expressionRewriting.bindingRewriteValidators[e]=!1, g.virtualElements.allowedBindings[e]=!0
                    }
                    var g = void 0 !== e ? e : {};
                    g.exportSymbol = function(e, t) {
                        for (var n = e.split("."), i = g, r = 0; r < n.length - 1; r++)
                            i = i[n[r]];
                        i[n[n.length - 1]] = t
                    }, g.exportProperty = function(e, t, n) {
                        e[t] = n
                    }, g.version = "3.4.2", g.exportSymbol("version", g.version), g.options = {
                        deferUpdates: !1,
                        useOnlyNativeEvents: !1
                    }, g.utils = function() {
                        function e(e, t) {
                            for (var n in e)
                                e.hasOwnProperty(n) && t(n, e[n])
                        }
                        function t(e, t) {
                            if (t)
                                for (var n in t)
                                    t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        }
                        function n(e, t) {
                            return e.__proto__ = t, e
                        }
                        function i(e, t) {
                            if ("input" !== g.utils.tagNameLower(e) ||!e.type)
                                return !1;
                            if ("click" != t.toLowerCase())
                                return !1;
                            var n = e.type;
                            return "checkbox" == n || "radio" == n
                        }
                        function r(e, t, n) {
                            var i;
                            t && ("object" == typeof e.classList ? (i = e.classList[n ? "add": "remove"], g.utils.arrayForEach(t.match(w), function(t) {
                                i.call(e.classList, t)
                            })) : "string" == typeof e.className.baseVal ? o(e.className, "baseVal", t, n) : o(e, "className", t, n))
                        }
                        function o(e, t, n, i) {
                            var r = e[t].match(w) || [];
                            g.utils.arrayForEach(n.match(w), function(e) {
                                g.utils.addOrRemoveItem(r, e, i)
                            }), e[t] = r.join(" ")
                        }
                        var d = {
                            __proto__: []
                        }
                        instanceof Array, f = {}, h = {};
                        f[u && /Firefox\/2/i.test(u.userAgent) ? "KeyboardEvent": "UIEvents"] = ["keyup", "keydown", "keypress"], f.MouseEvents = ["click", "dblclick", "mousedown", "mouseup", "mousemove", "mouseover", "mouseout", "mouseenter", "mouseleave"], e(f, function(e, t) {
                            if (t.length)
                                for (var n = 0, i = t.length; n < i; n++)
                                    h[t[n]] = e
                        });
                        var m = {
                            propertychange: !0
                        }, y = l && function() {
                            for (var e = 3, t = l.createElement("div"), n = t.getElementsByTagName("i"); t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e", n[0];);
                            return e > 4 ? e : a
                        }(), v = 6 === y, b = 7 === y, w = /\S+/g;
                        return {
                            fieldsIncludedWithJsonPost: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
                            arrayForEach: function(e, t) {
                                for (var n = 0, i = e.length; n < i; n++)
                                    t(e[n], n)
                            },
                            arrayIndexOf: function(e, t) {
                                if ("function" == typeof Array.prototype.indexOf)
                                    return Array.prototype.indexOf.call(e, t);
                                for (var n = 0, i = e.length; n < i; n++)
                                    if (e[n] === t)
                                        return n;
                                return - 1
                            },
                            arrayFirst: function(e, t, n) {
                                for (var i = 0, r = e.length; i < r; i++)
                                    if (t.call(n, e[i], i))
                                        return e[i];
                                return null
                            },
                            arrayRemoveItem: function(e, t) {
                                var n = g.utils.arrayIndexOf(e, t);
                                n > 0 ? e.splice(n, 1) : 0 === n && e.shift()
                            },
                            arrayGetDistinctValues: function(e) {
                                e = e || [];
                                for (var t = [], n = 0, i = e.length; n < i; n++)
                                    g.utils.arrayIndexOf(t, e[n]) < 0 && t.push(e[n]);
                                return t
                            },
                            arrayMap: function(e, t) {
                                e = e || [];
                                for (var n = [], i = 0, r = e.length; i < r; i++)
                                    n.push(t(e[i], i));
                                return n
                            },
                            arrayFilter: function(e, t) {
                                e = e || [];
                                for (var n = [], i = 0, r = e.length; i < r; i++)
                                    t(e[i], i) && n.push(e[i]);
                                return n
                            },
                            arrayPushAll: function(e, t) {
                                if (t instanceof Array)
                                    e.push.apply(e, t);
                                else 
                                    for (var n = 0, i = t.length; n < i; n++)
                                        e.push(t[n]);
                                return e
                            },
                            addOrRemoveItem: function(e, t, n) {
                                var i = g.utils.arrayIndexOf(g.utils.peekObservable(e), t);
                                i < 0 ? n && e.push(t) : n || e.splice(i, 1)
                            },
                            canSetPrototype: d,
                            extend: t,
                            setPrototypeOf: n,
                            setPrototypeOfOrExtend: d ? n: t,
                            objectForEach: e,
                            objectMap: function(e, t) {
                                if (!e)
                                    return e;
                                var n = {};
                                for (var i in e)
                                    e.hasOwnProperty(i) && (n[i] = t(e[i], i, e));
                                return n
                            },
                            emptyDomNode: function(e) {
                                for (; e.firstChild;)
                                    g.removeNode(e.firstChild)
                            },
                            moveCleanedNodesToContainerElement: function(e) {
                                for (var t = g.utils.makeArray(e), n = t[0] && t[0].ownerDocument || l, i = n.createElement("div"), r = 0, o = t.length; r < o; r++)
                                    i.appendChild(g.cleanNode(t[r]));
                                return i
                            },
                            cloneNodes: function(e, t) {
                                for (var n = 0, i = e.length, r = []; n < i; n++) {
                                    var o = e[n].cloneNode(!0);
                                    r.push(t ? g.cleanNode(o) : o)
                                }
                                return r
                            },
                            setDomNodeChildren: function(e, t) {
                                if (g.utils.emptyDomNode(e), t)
                                    for (var n = 0, i = t.length; n < i; n++)
                                        e.appendChild(t[n])
                            },
                            replaceDomNodes: function(e, t) {
                                var n = e.nodeType ? [e]: e;
                                if (n.length > 0) {
                                    for (var i = n[0], r = i.parentNode, o = 0, a = t.length; o < a; o++)
                                        r.insertBefore(t[o], i);
                                    for (var o = 0, a = n.length; o < a; o++)
                                        g.removeNode(n[o])
                                }
                            },
                            fixUpContinuousNodeArray: function(e, t) {
                                if (e.length) {
                                    for (t = 8 === t.nodeType && t.parentNode || t; e.length && e[0].parentNode !== t;)
                                        e.splice(0, 1);
                                    for (; e.length > 1 && e[e.length - 1].parentNode !== t;)
                                        e.length--;
                                    if (e.length > 1) {
                                        var n = e[0], i = e[e.length - 1];
                                        for (e.length = 0; n !== i;)
                                            e.push(n), n = n.nextSibling;
                                        e.push(i)
                                    }
                                }
                                return e
                            },
                            setOptionNodeSelectionState: function(e, t) {
                                y < 7 ? e.setAttribute("selected", t) : e.selected = t
                            },
                            stringTrim: function(e) {
                                return null === e || e === a ? "" : e.trim ? e.trim() : e.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                            },
                            stringStartsWith: function(e, t) {
                                return e = e || "", !(t.length > e.length) && e.substring(0, t.length) === t
                            },
                            domNodeIsContainedBy: function(e, t) {
                                if (e === t)
                                    return !0;
                                if (11 === e.nodeType)
                                    return !1;
                                if (t.contains)
                                    return t.contains(3 === e.nodeType ? e.parentNode : e);
                                if (t.compareDocumentPosition)
                                    return 16 == (16 & t.compareDocumentPosition(e));
                                for (; e && e != t;)
                                    e = e.parentNode;
                                return !!e
                            },
                            domNodeIsAttachedToDocument: function(e) {
                                return g.utils.domNodeIsContainedBy(e, e.ownerDocument.documentElement)
                            },
                            anyDomNodeIsAttachedToDocument: function(e) {
                                return !!g.utils.arrayFirst(e, g.utils.domNodeIsAttachedToDocument)
                            },
                            tagNameLower: function(e) {
                                return e && e.tagName && e.tagName.toLowerCase()
                            },
                            catchFunctionErrors: function(e) {
                                return g.onError ? function() {
                                    try {
                                        return e.apply(this, arguments)
                                    } catch (t) {
                                        throw g.onError && g.onError(t), t
                                    }
                                } : e
                            },
                            setTimeout: function(e, t) {
                                return setTimeout(g.utils.catchFunctionErrors(e), t)
                            },
                            deferError: function(e) {
                                setTimeout(function() {
                                    throw g.onError && g.onError(e), e
                                }, 0)
                            },
                            registerEventHandler: function(e, t, n) {
                                var i = g.utils.catchFunctionErrors(n), r = y && m[t];
                                if (g.options.useOnlyNativeEvents || r ||!c)
                                    if (r || "function" != typeof e.addEventListener) {
                                        if ("undefined" == typeof e.attachEvent)
                                            throw new Error("Browser doesn't support addEventListener or attachEvent");
                                            var o = function(t) {
                                                i.call(e, t)
                                            }, a = "on" + t;
                                            e.attachEvent(a, o), g.utils.domNodeDisposal.addDisposeCallback(e, function() {
                                                e.detachEvent(a, o)
                                            })
                                    } else 
                                        e.addEventListener(t, i, !1);
                                    else 
                                        c(e).bind(t, i)
                            },
                            triggerEvent: function(e, t) {
                                if (!e ||!e.nodeType)
                                    throw new Error("element must be a DOM node when calling triggerEvent");
                                var n = i(e, t);
                                if (g.options.useOnlyNativeEvents ||!c || n)
                                    if ("function" == typeof l.createEvent) {
                                        if ("function" != typeof e.dispatchEvent)
                                            throw new Error("The supplied element doesn't support dispatchEvent");
                                            var r = h[t] || "HTMLEvents", o = l.createEvent(r);
                                            o.initEvent(t, !0, !0, s, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, e), e.dispatchEvent(o)
                                    } else if (n && e.click)
                                        e.click();
                                    else {
                                        if ("undefined" == typeof e.fireEvent)
                                            throw new Error("Browser doesn't support triggering events");
                                            e.fireEvent("on" + t)
                                    } else 
                                        c(e).trigger(t)
                            },
                            unwrapObservable: function(e) {
                                return g.isObservable(e) ? e() : e
                            },
                            peekObservable: function(e) {
                                return g.isObservable(e) ? e.peek() : e
                            },
                            toggleDomNodeCssClass: r,
                            setTextContent: function(e, t) {
                                var n = g.utils.unwrapObservable(t);
                                null !== n && n !== a || (n = "");
                                var i = g.virtualElements.firstChild(e);
                                !i || 3 != i.nodeType || g.virtualElements.nextSibling(i) ? g.virtualElements.setDomNodeChildren(e, [e.ownerDocument.createTextNode(n)]) : i.data = n, g.utils.forceRefresh(e)
                            },
                            setElementName: function(e, t) {
                                if (e.name = t, y <= 7)
                                    try {
                                        e.mergeAttributes(l.createElement("<input name='" + e.name + "'/>"), !1)
                                } catch (n) {}
                            },
                            forceRefresh: function(e) {
                                if (y >= 9) {
                                    var t = 1 == e.nodeType ? e: e.parentNode;
                                    t.style && (t.style.zoom = t.style.zoom)
                                }
                            },
                            ensureSelectElementIsRenderedCorrectly: function(e) {
                                if (y) {
                                    var t = e.style.width;
                                    e.style.width = 0, e.style.width = t
                                }
                            },
                            range: function(e, t) {
                                e = g.utils.unwrapObservable(e), t = g.utils.unwrapObservable(t);
                                for (var n = [], i = e; i <= t; i++)
                                    n.push(i);
                                return n
                            },
                            makeArray: function(e) {
                                for (var t = [], n = 0, i = e.length; n < i; n++)
                                    t.push(e[n]);
                                return t
                            },
                            createSymbolOrString: function(e) {
                                return e
                            },
                            isIe6: v,
                            isIe7: b,
                            ieVersion: y,
                            getFormFields: function(e, t) {
                                for (var n = g.utils.makeArray(e.getElementsByTagName("input")).concat(g.utils.makeArray(e.getElementsByTagName("textarea"))), i = "string" == typeof t ? function(e) {
                                    return e.name === t
                                } : function(e) {
                                    return t.test(e.name)
                                }, r = [], o = n.length - 1; o >= 0; o--)
                                    i(n[o]) && r.push(n[o]);
                                return r
                            },
                            parseJson: function(e) {
                                return "string" == typeof e && (e = g.utils.stringTrim(e)) ? p && p.parse ? p.parse(e) : new Function("return " + e)() : null
                            },
                            stringifyJson: function(e, t, n) {
                                if (!p ||!p.stringify)
                                    throw new Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
                                return p.stringify(g.utils.unwrapObservable(e), t, n)
                            },
                            postJson: function(t, n, i) {
                                i = i || {};
                                var r = i.params || {}, o = i.includeFields || this.fieldsIncludedWithJsonPost, a = t;
                                if ("object" == typeof t && "form" === g.utils.tagNameLower(t)) {
                                    var s = t;
                                    a = s.action;
                                    for (var u = o.length - 1; u >= 0; u--)
                                        for (var c = g.utils.getFormFields(s, o[u]), p = c.length - 1; p >= 0; p--)
                                            r[c[p].name] = c[p].value
                                }
                                n = g.utils.unwrapObservable(n);
                                var d = l.createElement("form");
                                d.style.display = "none", d.action = a, d.method = "post";
                                for (var f in n) {
                                    var h = l.createElement("input");
                                    h.type = "hidden", h.name = f, h.value = g.utils.stringifyJson(g.utils.unwrapObservable(n[f])), d.appendChild(h)
                                }
                                e(r, function(e, t) {
                                    var n = l.createElement("input");
                                    n.type = "hidden", n.name = e, n.value = t, d.appendChild(n)
                                }), l.body.appendChild(d), i.submitter ? i.submitter(d) : d.submit(), setTimeout(function() {
                                    d.parentNode.removeChild(d)
                                }, 0)
                            }
                        }
                    }(), g.exportSymbol("utils", g.utils), g.exportSymbol("utils.arrayForEach", g.utils.arrayForEach), g.exportSymbol("utils.arrayFirst", g.utils.arrayFirst), g.exportSymbol("utils.arrayFilter", g.utils.arrayFilter), g.exportSymbol("utils.arrayGetDistinctValues", g.utils.arrayGetDistinctValues), g.exportSymbol("utils.arrayIndexOf", g.utils.arrayIndexOf), g.exportSymbol("utils.arrayMap", g.utils.arrayMap), g.exportSymbol("utils.arrayPushAll", g.utils.arrayPushAll), g.exportSymbol("utils.arrayRemoveItem", g.utils.arrayRemoveItem), g.exportSymbol("utils.extend", g.utils.extend), g.exportSymbol("utils.fieldsIncludedWithJsonPost", g.utils.fieldsIncludedWithJsonPost), g.exportSymbol("utils.getFormFields", g.utils.getFormFields), g.exportSymbol("utils.peekObservable", g.utils.peekObservable), g.exportSymbol("utils.postJson", g.utils.postJson), g.exportSymbol("utils.parseJson", g.utils.parseJson), g.exportSymbol("utils.registerEventHandler", g.utils.registerEventHandler), g.exportSymbol("utils.stringifyJson", g.utils.stringifyJson), g.exportSymbol("utils.range", g.utils.range), g.exportSymbol("utils.toggleDomNodeCssClass", g.utils.toggleDomNodeCssClass), g.exportSymbol("utils.triggerEvent", g.utils.triggerEvent), g.exportSymbol("utils.unwrapObservable", g.utils.unwrapObservable), g.exportSymbol("utils.objectForEach", g.utils.objectForEach), g.exportSymbol("utils.addOrRemoveItem", g.utils.addOrRemoveItem), g.exportSymbol("utils.setTextContent", g.utils.setTextContent), g.exportSymbol("unwrap", g.utils.unwrapObservable), Function.prototype.bind || (Function.prototype.bind = function(e) {
                        var t = this;
                        if (1 === arguments.length)
                            return function() {
                                return t.apply(e, arguments)
                            };
                        var n = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var i = n.slice(0);
                            return i.push.apply(i, arguments), t.apply(e, i)
                        }
                    }), g.utils.domData = new function() {
                        function e(e, r) {
                            var o = e[n];
                            if (!o || "null" === o ||!i[o]) {
                                if (!r)
                                    return a;
                                o = e[n] = "ko" + t++, i[o] = {}
                            }
                            return i[o]
                        }
                        var t = 0, n = "__ko__" + (new Date).getTime(), i = {};
                        return {
                            get: function(t, n) {
                                var i = e(t, !1);
                                return i === a ? a : i[n]
                            },
                            set: function(t, n, i) {
                                if (i !== a || e(t, !1) !== a) {
                                    e(t, !0)[n] = i
                                }
                            },
                            clear: function(e) {
                                var t = e[n];
                                return !!t && (delete i[t], e[n] = null, !0)
                            },
                            nextKey: function() {
                                return t+++n
                            }
                        }
                    }, g.exportSymbol("utils.domData", g.utils.domData), g.exportSymbol("utils.domData.clear", g.utils.domData.clear), g.utils.domNodeDisposal = new function() {
                        function e(e, t) {
                            var n = g.utils.domData.get(e, r);
                            return n === a && t && (n = [], g.utils.domData.set(e, r, n)), n
                        }
                        function t(e) {
                            g.utils.domData.set(e, r, a)
                        }
                        function n(t) {
                            var n = e(t, !1);
                            if (n) {
                                n = n.slice(0);
                                for (var r = 0; r < n.length; r++)
                                    n[r](t)
                            }
                            g.utils.domData.clear(t), g.utils.domNodeDisposal.cleanExternalData(t), s[t.nodeType] && i(t)
                        }
                        function i(e) {
                            for (var t, i = e.firstChild; t = i;)
                                i = t.nextSibling, 8 === t.nodeType && n(t)
                        }
                        var r = g.utils.domData.nextKey(), o = {
                            1: !0,
                            8: !0,
                            9: !0
                        }, s = {
                            1: !0,
                            9: !0
                        };
                        return {
                            addDisposeCallback: function(t, n) {
                                if ("function" != typeof n)
                                    throw new Error("Callback must be a function");
                                e(t, !0).push(n)
                            },
                            removeDisposeCallback: function(n, i) {
                                var r = e(n, !1);
                                r && (g.utils.arrayRemoveItem(r, i), 0 == r.length && t(n))
                            },
                            cleanNode: function(e) {
                                if (o[e.nodeType] && (n(e), s[e.nodeType])) {
                                    var t = [];
                                    g.utils.arrayPushAll(t, e.getElementsByTagName("*"));
                                    for (var i = 0, r = t.length; i < r; i++)
                                        n(t[i])
                                }
                                return e
                            },
                            removeNode: function(e) {
                                g.cleanNode(e), e.parentNode && e.parentNode.removeChild(e)
                            },
                            cleanExternalData: function(e) {
                                c && "function" == typeof c.cleanData && c.cleanData([e])
                            }
                        }
                    }, g.cleanNode = g.utils.domNodeDisposal.cleanNode, g.removeNode = g.utils.domNodeDisposal.removeNode, g.exportSymbol("cleanNode", g.cleanNode), g.exportSymbol("removeNode", g.removeNode), g.exportSymbol("utils.domNodeDisposal", g.utils.domNodeDisposal), g.exportSymbol("utils.domNodeDisposal.addDisposeCallback", g.utils.domNodeDisposal.addDisposeCallback), g.exportSymbol("utils.domNodeDisposal.removeDisposeCallback", g.utils.domNodeDisposal.removeDisposeCallback), function() {
                        function e(e) {
                            var t = e.match(/^<([a-z]+)[ >]/);
                            return t && d[t[1]] || i
                        }
                        function t(t, n) {
                            n || (n = l);
                            var i = n.parentWindow || n.defaultView || s, r = g.utils.stringTrim(t).toLowerCase(), o = n.createElement("div"), a = e(r), u = a[0], c = "ignored<div>" + a[1] + t + a[2] + "</div>";
                            for ("function" == typeof i.innerShiv ? o.appendChild(i.innerShiv(c)) : (f && n.appendChild(o), o.innerHTML = c, f && o.parentNode.removeChild(o)); u--;)
                                o = o.lastChild;
                            return g.utils.makeArray(o.lastChild.childNodes)
                        }
                        function n(e, t) {
                            if (c.parseHTML)
                                return c.parseHTML(e, t) || [];
                            var n = c.clean([e], t);
                            if (n && n[0]) {
                                for (var i = n[0]; i.parentNode && 11 !== i.parentNode.nodeType;)
                                    i = i.parentNode;
                                i.parentNode && i.parentNode.removeChild(i)
                            }
                            return n
                        }
                        var i = [0, "", ""], r = [1, "<table>", "</table>"], o = [2, "<table><tbody>", "</tbody></table>"], u = [3, "<table><tbody><tr>", "</tr></tbody></table>"], p = [1, "<select multiple='multiple'>", "</select>"], d = {
                            thead: r,
                            tbody: r,
                            tfoot: r,
                            tr: o,
                            td: u,
                            th: u,
                            option: p,
                            optgroup: p
                        }, f = g.utils.ieVersion <= 8;
                        g.utils.parseHtmlFragment = function(e, i) {
                            return c ? n(e, i) : t(e, i)
                        }, g.utils.setHtml = function(e, t) {
                            if (g.utils.emptyDomNode(e), null !== (t = g.utils.unwrapObservable(t)) && t !== a)
                                if ("string" != typeof t && (t = t.toString()), c)
                                    c(e).html(t);
                                else 
                                    for (var n = g.utils.parseHtmlFragment(t, e.ownerDocument), i = 0; i < n.length; i++)
                                        e.appendChild(n[i])
                        }
                    }(), g.exportSymbol("utils.parseHtmlFragment", g.utils.parseHtmlFragment), g.exportSymbol("utils.setHtml", g.utils.setHtml), g.memoization = function() {
                        function e() {
                            return (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1)
                        }
                        function t() {
                            return e() + e()
                        }
                        function n(e, t) {
                            if (e)
                                if (8 == e.nodeType) {
                                    var i = g.memoization.parseMemoText(e.nodeValue);
                                    null != i && t.push({
                                        domNode: e,
                                        memoId: i
                                    })
                                } else if (1 == e.nodeType)
                                    for (var r = 0, o = e.childNodes, a = o.length; r < a; r++)
                                        n(o[r], t)
                        }
                        var i = {};
                        return {
                            memoize: function(e) {
                                if ("function" != typeof e)
                                    throw new Error("You can only pass a function to ko.memoization.memoize()");
                                var n = t();
                                return i[n] = e, "\x3c!--[ko_memo:" + n + "]--\x3e"
                            },
                            unmemoize: function(e, t) {
                                var n = i[e];
                                if (n === a)
                                    throw new Error("Couldn't find any memo with ID " + e + ". Perhaps it's already been unmemoized.");
                                try {
                                    return n.apply(null, t || []), !0
                                } finally {
                                    delete i[e]
                                }
                            },
                            unmemoizeDomNodeAndDescendants: function(e, t) {
                                var i = [];
                                n(e, i);
                                for (var r = 0, o = i.length; r < o; r++) {
                                    var a = i[r].domNode, s = [a];
                                    t && g.utils.arrayPushAll(s, t), g.memoization.unmemoize(i[r].memoId, s), a.nodeValue = "", a.parentNode && a.parentNode.removeChild(a)
                                }
                            },
                            parseMemoText: function(e) {
                                var t = e.match(/^\[ko_memo\:(.*?)\]$/);
                                return t ? t[1] : null
                            }
                        }
                    }(), g.exportSymbol("memoization", g.memoization), g.exportSymbol("memoization.memoize", g.memoization.memoize), g.exportSymbol("memoization.unmemoize", g.memoization.unmemoize), g.exportSymbol("memoization.parseMemoText", g.memoization.parseMemoText), g.exportSymbol("memoization.unmemoizeDomNodeAndDescendants", g.memoization.unmemoizeDomNodeAndDescendants), g.tasks = function() {
                        function e() {
                            if (o)
                                for (var e, t = o, n = 0; u < o;)
                                    if (e = r[u++]) {
                                        if (u > t) {
                                            if (++n >= 5e3) {
                                                u = o, g.utils.deferError(Error("'Too much recursion' after processing " + n + " task groups."));
                                                break
                                            }
                                            t = o
                                        }
                                        try {
                                            e()
                                        } catch (i) {
                                            g.utils.deferError(i)
                                        }
                                    }
                        }
                        function t() {
                            e(), u = o = r.length = 0
                        }
                        function n() {
                            g.tasks.scheduler(t)
                        }
                        var i, r = [], o = 0, a = 1, u = 0;
                        return i = s.MutationObserver ? function(e) {
                            var t = l.createElement("div");
                            return new MutationObserver(e).observe(t, {
                                attributes: !0
                            }), function() {
                                t.classList.toggle("foo")
                            }
                        }(t) : l && "onreadystatechange"in l.createElement("script") ? function(e) {
                            var t = l.createElement("script");
                            t.onreadystatechange = function() {
                                t.onreadystatechange = null, l.documentElement.removeChild(t), t = null, e()
                            }, l.documentElement.appendChild(t)
                        } : function(e) {
                            setTimeout(e, 0)
                        }, {
                            scheduler: i,
                            schedule: function(e) {
                                return o || n(), r[o++] = e, a++
                            },
                            cancel: function(e) {
                                var t = e - (a - o);
                                t >= u && t < o && (r[t] = null)
                            },
                            resetForTesting: function() {
                                var e = o - u;
                                return u = o = r.length = 0, e
                            },
                            runEarly: e
                        }
                    }(), g.exportSymbol("tasks", g.tasks), g.exportSymbol("tasks.schedule", g.tasks.schedule), g.exportSymbol("tasks.runEarly", g.tasks.runEarly), g.extenders = {
                        throttle: function(e, t) {
                            e.throttleEvaluation = t;
                            var n = null;
                            return g.dependentObservable({
                                read: e,
                                write: function(i) {
                                    clearTimeout(n), n = g.utils.setTimeout(function() {
                                        e(i)
                                    }, t)
                                }
                            })
                        },
                        rateLimit: function(e, t) {
                            var n, o, a;
                            "number" == typeof t ? n = t : (n = t.timeout, o = t.method), e._deferUpdates=!1, a = "notifyWhenChangesStop" == o ? r : i, e.limit(function(e) {
                                return a(e, n)
                            })
                        },
                        deferred: function(e, t) {
                            if (!0 !== t)
                                throw new Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
                            e._deferUpdates || (e._deferUpdates=!0, e.limit(function(t) {
                                var n, i=!1;
                                return function() {
                                    if (!i) {
                                        g.tasks.cancel(n), n = g.tasks.schedule(t);
                                        try {
                                            i=!0, e.notifySubscribers(a, "dirty")
                                        } finally {
                                            i=!1
                                        }
                                    }
                                }
                            }))
                        },
                        notify: function(e, t) {
                            e.equalityComparer = "always" == t ? null : n
                        }
                    };
                    var y = {
                        undefined: 1,
                        "boolean": 1,
                        number: 1,
                        string: 1
                    };
                    g.exportSymbol("extenders", g.extenders), g.subscription = function(e, t, n) {
                        this._target = e, this.callback = t, this.disposeCallback = n, this.isDisposed=!1, g.exportProperty(this, "dispose", this.dispose)
                    }, g.subscription.prototype.dispose = function() {
                        this.isDisposed=!0, this.disposeCallback()
                    }, g.subscribable = function() {
                        g.utils.setPrototypeOfOrExtend(this, b), b.init(this)
                    };
                    var v = "change", b = {
                        init: function(e) {
                            e._subscriptions = {
                                change: []
                            }, e._versionNumber = 1
                        },
                        subscribe: function(e, t, n) {
                            var i = this;
                            n = n || v;
                            var r = t ? e.bind(t): e, o = new g.subscription(i, r, function() {
                                g.utils.arrayRemoveItem(i._subscriptions[n], o), i.afterSubscriptionRemove && i.afterSubscriptionRemove(n)
                            });
                            return i.beforeSubscriptionAdd && i.beforeSubscriptionAdd(n), i._subscriptions[n] || (i._subscriptions[n] = []), i._subscriptions[n].push(o), o
                        },
                        notifySubscribers: function(e, t) {
                            if (t = t || v, t === v && this.updateVersion(), this.hasSubscriptionsForEvent(t)) {
                                var n = t === v && this._changeSubscriptions || this._subscriptions[t].slice(0);
                                try {
                                    g.dependencyDetection.begin();
                                    for (var i, r = 0; i = n[r]; ++r)
                                        i.isDisposed || i.callback(e)
                                    } finally {
                                    g.dependencyDetection.end()
                                }
                            }
                        },
                        getVersion: function() {
                            return this._versionNumber
                        },
                        hasChanged: function(e) {
                            return this.getVersion() !== e
                        },
                        updateVersion: function() {
                            ++this._versionNumber
                        },
                        limit: function(e) {
                            var t, n, i, r, o = this, a = g.isObservable(o);
                            o._origNotifySubscribers || (o._origNotifySubscribers = o.notifySubscribers, o.notifySubscribers = d);
                            var s = e(function() {
                                o._notificationIsPending=!1, a && r === o && (r = o._evalIfChanged ? o._evalIfChanged() : o());
                                var e = n || o.isDifferent(i, r);
                                n = t=!1, e && o._origNotifySubscribers(i = r)
                            });
                            o._limitChange = function(e) {
                                o._changeSubscriptions = o._subscriptions[v].slice(0), o._notificationIsPending = t=!0, r = e, s()
                            }, o._limitBeforeChange = function(e) {
                                t || (i = e, o._origNotifySubscribers(e, "beforeChange"))
                            }, o._notifyNextChangeIfValueIsDifferent = function() {
                                o.isDifferent(i, o.peek(!0)) && (n=!0)
                            }
                        },
                        hasSubscriptionsForEvent: function(e) {
                            return this._subscriptions[e] && this._subscriptions[e].length
                        },
                        getSubscriptionsCount: function(e) {
                            if (e)
                                return this._subscriptions[e] && this._subscriptions[e].length || 0;
                            var t = 0;
                            return g.utils.objectForEach(this._subscriptions, function(e, n) {
                                "dirty" !== e && (t += n.length)
                            }), t
                        },
                        isDifferent: function(e, t) {
                            return !this.equalityComparer ||!this.equalityComparer(e, t)
                        },
                        extend: o
                    };
                    g.exportProperty(b, "subscribe", b.subscribe), g.exportProperty(b, "extend", b.extend), g.exportProperty(b, "getSubscriptionsCount", b.getSubscriptionsCount), g.utils.canSetPrototype && g.utils.setPrototypeOf(b, Function.prototype), g.subscribable.fn = b, g.isSubscribable = function(e) {
                        return null != e && "function" == typeof e.subscribe && "function" == typeof e.notifySubscribers
                    }, g.exportSymbol("subscribable", g.subscribable), g.exportSymbol("isSubscribable", g.isSubscribable), g.computedContext = g.dependencyDetection = function() {
                        function e() {
                            return ++o
                        }
                        function t(e) {
                            r.push(i), i = e
                        }
                        function n() {
                            i = r.pop()
                        }
                        var i, r = [], o = 0;
                        return {
                            begin: t,
                            end: n,
                            registerDependency: function(t) {
                                if (i) {
                                    if (!g.isSubscribable(t))
                                        throw new Error("Only subscribable things can act as dependencies");
                                    i.callback.call(i.callbackTarget, t, t._id || (t._id = e()))
                                }
                            },
                            ignore: function(e, i, r) {
                                try {
                                    return t(), e.apply(i, r || [])
                                } finally {
                                    n()
                                }
                            },
                            getDependenciesCount: function() {
                                if (i)
                                    return i.computed.getDependenciesCount()
                            },
                            isInitial: function() {
                                if (i)
                                    return i.isInitial
                            }
                        }
                    }(), g.exportSymbol("computedContext", g.computedContext), g.exportSymbol("computedContext.getDependenciesCount", g.computedContext.getDependenciesCount), g.exportSymbol("computedContext.isInitial", g.computedContext.isInitial), g.exportSymbol("ignoreDependencies", g.ignoreDependencies = g.dependencyDetection.ignore);
                    var w = g.utils.createSymbolOrString("_latestValue");
                    g.observable = function(e) {
                        function t() {
                            return arguments.length > 0 ? (t.isDifferent(t[w], arguments[0]) && (t.valueWillMutate(), t[w] = arguments[0], t.valueHasMutated()), this) : (g.dependencyDetection.registerDependency(t), t[w])
                        }
                        return t[w] = e, g.utils.canSetPrototype || g.utils.extend(t, g.subscribable.fn), g.subscribable.fn.init(t), g.utils.setPrototypeOfOrExtend(t, x), g.options.deferUpdates && g.extenders.deferred(t, !0), t
                    };
                    var x = {
                        equalityComparer: n,
                        peek: function() {
                            return this[w]
                        },
                        valueHasMutated: function() {
                            this.notifySubscribers(this[w])
                        },
                        valueWillMutate: function() {
                            this.notifySubscribers(this[w], "beforeChange")
                        }
                    };
                    g.utils.canSetPrototype && g.utils.setPrototypeOf(x, g.subscribable.fn);
                    var _ = g.observable.protoProperty = "__ko_proto__";
                    x[_] = g.observable, g.hasPrototype = function(e, t) {
                        return null !== e && e !== a && e[_] !== a && (e[_] === t || g.hasPrototype(e[_], t))
                    }, g.isObservable = function(e) {
                        return g.hasPrototype(e, g.observable)
                    }, g.isWriteableObservable = function(e) {
                        return "function" == typeof e && e[_] === g.observable ||!("function" != typeof e || e[_] !== g.dependentObservable ||!e.hasWriteFunction)
                    }, g.exportSymbol("observable", g.observable), g.exportSymbol("isObservable", g.isObservable), g.exportSymbol("isWriteableObservable", g.isWriteableObservable), g.exportSymbol("isWritableObservable", g.isWriteableObservable), g.exportSymbol("observable.fn", x), g.exportProperty(x, "peek", x.peek), g.exportProperty(x, "valueHasMutated", x.valueHasMutated), g.exportProperty(x, "valueWillMutate", x.valueWillMutate), g.observableArray = function(e) {
                        if ("object" != typeof(e = e || []) ||!("length"in e))
                            throw new Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
                        var t = g.observable(e);
                        return g.utils.setPrototypeOfOrExtend(t, g.observableArray.fn), t.extend({
                            trackArrayChanges: !0
                        })
                    }, g.observableArray.fn = {
                        remove: function(e) {
                            for (var t = this.peek(), n = [], i = "function" != typeof e || g.isObservable(e) ? function(t) {
                                return t === e
                            } : e, r = 0; r < t.length; r++) {
                                var o = t[r];
                                i(o) && (0 === n.length && this.valueWillMutate(), n.push(o), t.splice(r, 1), r--)
                            }
                            return n.length && this.valueHasMutated(), n
                        },
                        removeAll: function(e) {
                            if (e === a) {
                                var t = this.peek(), n = t.slice(0);
                                return this.valueWillMutate(), t.splice(0, t.length), this.valueHasMutated(), n
                            }
                            return e ? this.remove(function(t) {
                                return g.utils.arrayIndexOf(e, t) >= 0
                            }) : []
                        },
                        destroy: function(e) {
                            var t = this.peek(), n = "function" != typeof e || g.isObservable(e) ? function(t) {
                                return t === e
                            }
                            : e;
                            this.valueWillMutate();
                            for (var i = t.length - 1; i >= 0; i--) {
                                n(t[i]) && (t[i]._destroy=!0)
                            }
                            this.valueHasMutated()
                        },
                        destroyAll: function(e) {
                            return e === a ? this.destroy(function() {
                                return !0
                            }) : e ? this.destroy(function(t) {
                                return g.utils.arrayIndexOf(e, t) >= 0
                            }) : []
                        },
                        indexOf: function(e) {
                            var t = this ();
                            return g.utils.arrayIndexOf(t, e)
                        },
                        replace: function(e, t) {
                            var n = this.indexOf(e);
                            n >= 0 && (this.valueWillMutate(), this.peek()[n] = t, this.valueHasMutated())
                        }
                    }, g.utils.canSetPrototype && g.utils.setPrototypeOf(g.observableArray.fn, g.observable.fn), g.utils.arrayForEach(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                        g.observableArray.fn[e] = function() {
                            var t = this.peek();
                            this.valueWillMutate(), this.cacheDiffForKnownOperation(t, e, arguments);
                            var n = t[e].apply(t, arguments);
                            return this.valueHasMutated(), n === t ? this : n
                        }
                    }), g.utils.arrayForEach(["slice"], function(e) {
                        g.observableArray.fn[e] = function() {
                            var t = this ();
                            return t[e].apply(t, arguments)
                        }
                    }), g.exportSymbol("observableArray", g.observableArray);
                    var S = "arrayChange";
                    g.extenders.trackArrayChanges = function(e, t) {
                        function n() {
                            if (!s) {
                                s=!0, o = e.notifySubscribers, e.notifySubscribers = function(e, t) {
                                    return t && t !== v||++u, o.apply(this, arguments)
                                };
                                var t = [].concat(e.peek() || []);
                                l = null, r = e.subscribe(function(n) {
                                    if (n = [].concat(n || []), e.hasSubscriptionsForEvent(S))
                                        var r = i(t, n);
                                    t = n, l = null, u = 0, r && r.length && e.notifySubscribers(r, S)
                                })
                            }
                        }
                        function i(t, n) {
                            return (!l || u > 1) && (l = g.utils.compareArrays(t, n, e.compareArrayOptions)), l
                        }
                        if (e.compareArrayOptions = {}, t && "object" == typeof t && g.utils.extend(e.compareArrayOptions, t), e.compareArrayOptions.sparse=!0, !e.cacheDiffForKnownOperation) {
                            var r, o, s=!1, l = null, u = 0, c = e.beforeSubscriptionAdd, p = e.afterSubscriptionRemove;
                            e.beforeSubscriptionAdd = function(t) {
                                c && c.call(e, t), t === S && n()
                            }, e.afterSubscriptionRemove = function(t) {
                                p && p.call(e, t), t !== S || e.hasSubscriptionsForEvent(S) || (o && (e.notifySubscribers = o, o = a), r.dispose(), s=!1)
                            }, e.cacheDiffForKnownOperation = function(e, t, n) {
                                function i(e, t, n) {
                                    return r[r.length] = {
                                        status: e,
                                        value: t,
                                        index: n
                                    }
                                }
                                if (s&&!u) {
                                    var r = [], o = e.length, a = n.length, c = 0;
                                    switch (t) {
                                    case"push":
                                        c = o;
                                    case"unshift":
                                        for (var p = 0; p < a; p++)
                                            i("added", n[p], c + p);
                                        break;
                                    case"pop":
                                        c = o - 1;
                                    case"shift":
                                        o && i("deleted", e[c], c);
                                        break;
                                    case"splice":
                                        for (var d = Math.min(Math.max(0, n[0] < 0 ? o + n[0] : n[0]), o), f = 1 === a ? o : Math.min(d + (n[1] || 0), o), h = d + a - 2, m = Math.max(f, h), y = [], v = [], p = d, b = 2; p < m; ++p, ++b)
                                            p < f && v.push(i("deleted", e[p], p)), p < h && y.push(i("added", n[b], p));
                                        g.utils.findMovesInArrayComparison(v, y);
                                        break;
                                    default:
                                        return 
                                    }
                                    l = r
                                }
                            }
                        }
                    };
                    var k = g.utils.createSymbolOrString("_state");
                    g.computed = g.dependentObservable = function(e, t, n) {
                        function i() {
                            if (arguments.length > 0) {
                                if ("function" != typeof r)
                                    throw new Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
                                return r.apply(o.evaluatorFunctionTarget, arguments), this
                            }
                            return g.dependencyDetection.registerDependency(i), (o.isDirty || o.isSleeping && i.haveDependenciesChanged()) && i.evaluateImmediate(), o.latestValue
                        }
                        if ("object" == typeof e ? n = e : (n = n || {}, e && (n.read = e)), "function" != typeof n.read)
                            throw Error("Pass a function that returns the value of the ko.computed");
                        var r = n.write, o = {
                            latestValue: a,
                            isStale: !0,
                            isDirty: !0,
                            isBeingEvaluated: !1,
                            suppressDisposalUntilDisposeWhenReturnsFalse: !1,
                            isDisposed: !1,
                            pure: !1,
                            isSleeping: !1,
                            readFunction: n.read,
                            evaluatorFunctionTarget: t || n.owner,
                            disposeWhenNodeIsRemoved: n.disposeWhenNodeIsRemoved || n.disposeWhenNodeIsRemoved || null,
                            disposeWhen: n.disposeWhen || n.disposeWhen,
                            domNodeDisposalCallback: null,
                            dependencyTracking: {},
                            dependenciesCount: 0,
                            evaluationTimeoutInstance: null
                        };
                        return i[k] = o, i.hasWriteFunction = "function" == typeof r, g.utils.canSetPrototype || g.utils.extend(i, g.subscribable.fn), g.subscribable.fn.init(i), g.utils.setPrototypeOfOrExtend(i, T), n.pure ? (o.pure=!0, o.isSleeping=!0, g.utils.extend(i, E)) : n.deferEvaluation && g.utils.extend(i, C), g.options.deferUpdates && g.extenders.deferred(i, !0), i._options = n, o.disposeWhenNodeIsRemoved && (o.suppressDisposalUntilDisposeWhenReturnsFalse=!0, o.disposeWhenNodeIsRemoved.nodeType || (o.disposeWhenNodeIsRemoved = null)), o.isSleeping || n.deferEvaluation || i.evaluateImmediate(), o.disposeWhenNodeIsRemoved && i.isActive() && g.utils.domNodeDisposal.addDisposeCallback(o.disposeWhenNodeIsRemoved, o.domNodeDisposalCallback = function() {
                            i.dispose()
                        }), i
                    };
                    var T = {
                        equalityComparer: n,
                        getDependenciesCount: function() {
                            return this[k].dependenciesCount
                        },
                        addDependencyTracking: function(e, t, n) {
                            if (this[k].pure && t === this)
                                throw Error("A 'pure' computed must not be called recursively");
                            this[k].dependencyTracking[e] = n, n._order = this[k].dependenciesCount++, n._version = t.getVersion()
                        },
                        haveDependenciesChanged: function() {
                            var e, t, n = this[k].dependencyTracking;
                            for (e in n)
                                if (n.hasOwnProperty(e) && (t = n[e], this._evalDelayed && t._target._notificationIsPending || t._target.hasChanged(t._version)))
                                    return !0
                        },
                        markDirty: function() {
                            this._evalDelayed&&!this[k].isBeingEvaluated && this._evalDelayed(!1)
                        },
                        isActive: function() {
                            var e = this[k];
                            return e.isDirty || e.dependenciesCount > 0
                        },
                        respondToChange: function() {
                            this._notificationIsPending ? this[k].isDirty && (this[k].isStale=!0) : this.evaluatePossiblyAsync()
                        },
                        subscribeToDependency: function(e) {
                            if (e._deferUpdates&&!this[k].disposeWhenNodeIsRemoved) {
                                var t = e.subscribe(this.markDirty, this, "dirty"), n = e.subscribe(this.respondToChange, this);
                                return {
                                    _target: e,
                                    dispose: function() {
                                        t.dispose(), n.dispose()
                                    }
                                }
                            }
                            return e.subscribe(this.evaluatePossiblyAsync, this)
                        },
                        evaluatePossiblyAsync: function() {
                            var e = this, t = e.throttleEvaluation;
                            t && t >= 0 ? (clearTimeout(this[k].evaluationTimeoutInstance), this[k].evaluationTimeoutInstance = g.utils.setTimeout(function() {
                                e.evaluateImmediate(!0)
                            }, t)) : e._evalDelayed ? e._evalDelayed(!0) : e.evaluateImmediate(!0)
                        },
                        evaluateImmediate: function(e) {
                            var t = this, n = t[k], i = n.disposeWhen, r=!1;
                            if (!n.isBeingEvaluated&&!n.isDisposed) {
                                if (n.disposeWhenNodeIsRemoved&&!g.utils.domNodeIsAttachedToDocument(n.disposeWhenNodeIsRemoved) || i && i()) {
                                    if (!n.suppressDisposalUntilDisposeWhenReturnsFalse)
                                        return void t.dispose()
                                } else 
                                    n.suppressDisposalUntilDisposeWhenReturnsFalse=!1;
                                n.isBeingEvaluated=!0;
                                try {
                                    r = this.evaluateImmediate_CallReadWithDependencyDetection(e)
                                } finally {
                                    n.isBeingEvaluated=!1
                                }
                                return n.dependenciesCount || t.dispose(), r
                            }
                        },
                        evaluateImmediate_CallReadWithDependencyDetection: function(e) {
                            var t = this, n = t[k], i=!1, r = n.pure ? a : !n.dependenciesCount, o = {
                                computedObservable: t,
                                disposalCandidates: n.dependencyTracking,
                                disposalCount: n.dependenciesCount
                            };
                            g.dependencyDetection.begin({
                                callbackTarget: o,
                                callback: h,
                                computed: t,
                                isInitial: r
                            }), n.dependencyTracking = {}, n.dependenciesCount = 0;
                            var s = this.evaluateImmediate_CallReadThenEndDependencyDetection(n, o);
                            return t.isDifferent(n.latestValue, s) && (n.isSleeping || t.notifySubscribers(n.latestValue, "beforeChange"), n.latestValue = s, t._latestValue = s, n.isSleeping ? t.updateVersion() : e && t.notifySubscribers(n.latestValue), i=!0), r && t.notifySubscribers(n.latestValue, "awake"), i
                        },
                        evaluateImmediate_CallReadThenEndDependencyDetection: function(e, t) {
                            try {
                                var n = e.readFunction;
                                return e.evaluatorFunctionTarget ? n.call(e.evaluatorFunctionTarget) : n()
                            } finally {
                                g.dependencyDetection.end(), t.disposalCount&&!e.isSleeping && g.utils.objectForEach(t.disposalCandidates, f), e.isStale = e.isDirty=!1
                            }
                        },
                        peek: function(e) {
                            var t = this[k]
                            ;
                            return (t.isDirty && (e ||!t.dependenciesCount) || t.isSleeping && this.haveDependenciesChanged()) && this.evaluateImmediate(), t.latestValue
                        },
                        limit: function(e) {
                            g.subscribable.fn.limit.call(this, e), this._evalIfChanged = function() {
                                return this[k].isStale ? this.evaluateImmediate() : this[k].isDirty=!1, this[k].latestValue
                            }, this._evalDelayed = function(e) {
                                this._limitBeforeChange(this[k].latestValue), this[k].isDirty=!0, e && (this[k].isStale=!0), this._limitChange(this)
                            }
                        },
                        dispose: function() {
                            var e = this[k];
                            !e.isSleeping && e.dependencyTracking && g.utils.objectForEach(e.dependencyTracking, function(e, t) {
                                t.dispose && t.dispose()
                            }), e.disposeWhenNodeIsRemoved && e.domNodeDisposalCallback && g.utils.domNodeDisposal.removeDisposeCallback(e.disposeWhenNodeIsRemoved, e.domNodeDisposalCallback), e.dependencyTracking = null, e.dependenciesCount = 0, e.isDisposed=!0, e.isStale=!1, e.isDirty=!1, e.isSleeping=!1, e.disposeWhenNodeIsRemoved = null
                        }
                    }, E = {
                        beforeSubscriptionAdd: function(e) {
                            var t = this, n = t[k];
                            if (!n.isDisposed && n.isSleeping && "change" == e) {
                                if (n.isSleeping=!1, n.isStale || t.haveDependenciesChanged())
                                    n.dependencyTracking = null, n.dependenciesCount = 0, t.evaluateImmediate() && t.updateVersion();
                                else {
                                    var i = [];
                                    g.utils.objectForEach(n.dependencyTracking, function(e, t) {
                                        i[t._order] = e
                                    }), g.utils.arrayForEach(i, function(e, i) {
                                        var r = n.dependencyTracking[e], o = t.subscribeToDependency(r._target);
                                        o._order = i, o._version = r._version, n.dependencyTracking[e] = o
                                    })
                                }
                                n.isDisposed || t.notifySubscribers(n.latestValue, "awake")
                            }
                        },
                        afterSubscriptionRemove: function(e) {
                            var t = this[k];
                            t.isDisposed || "change" != e || this.hasSubscriptionsForEvent("change") || (g.utils.objectForEach(t.dependencyTracking, function(e, n) {
                                n.dispose && (t.dependencyTracking[e] = {
                                    _target: n._target,
                                    _order: n._order,
                                    _version: n._version
                                }, n.dispose())
                            }), t.isSleeping=!0, this.notifySubscribers(a, "asleep"))
                        },
                        getVersion: function() {
                            var e = this[k];
                            return e.isSleeping && (e.isStale || this.haveDependenciesChanged()) && this.evaluateImmediate(), g.subscribable.fn.getVersion.call(this)
                        }
                    }, C = {
                        beforeSubscriptionAdd: function(e) {
                            "change" != e && "beforeChange" != e || this.peek()
                        }
                    };
                    g.utils.canSetPrototype && g.utils.setPrototypeOf(T, g.subscribable.fn);
                    var D = g.observable.protoProperty;
                    g.computed[D] = g.observable, T[D] = g.computed, g.isComputed = function(e) {
                        return g.hasPrototype(e, g.computed)
                    }, g.isPureComputed = function(e) {
                        return g.hasPrototype(e, g.computed) && e[k] && e[k].pure
                    }, g.exportSymbol("computed", g.computed), g.exportSymbol("dependentObservable", g.computed), g.exportSymbol("isComputed", g.isComputed), g.exportSymbol("isPureComputed", g.isPureComputed), g.exportSymbol("computed.fn", T), g.exportProperty(T, "peek", T.peek), g.exportProperty(T, "dispose", T.dispose), g.exportProperty(T, "isActive", T.isActive), g.exportProperty(T, "getDependenciesCount", T.getDependenciesCount), g.pureComputed = function(e, t) {
                        return "function" == typeof e ? g.computed(e, t, {
                            pure: !0
                        }) : (e = g.utils.extend({}, e), e.pure=!0, g.computed(e, t))
                    }, g.exportSymbol("pureComputed", g.pureComputed), function() {
                        function e(i, r, o) {
                            if (o = o || new n, !!("object" != typeof(i = r(i)) || null === i || i === a || i instanceof RegExp || i instanceof Date || i instanceof String || i instanceof Number || i instanceof Boolean))
                                return i;
                            var s = i instanceof Array ? []: {};
                            return o.save(i, s), t(i, function(t) {
                                var n = r(i[t]);
                                switch (typeof n) {
                                case"boolean":
                                case"number":
                                case"string":
                                case"function":
                                    s[t] = n;
                                    break;
                                case"object":
                                case"undefined":
                                    var l = o.get(n);
                                    s[t] = l !== a ? l : e(n, r, o)
                                }
                            }), s
                        }
                        function t(e, t) {
                            if (e instanceof Array) {
                                for (var n = 0; n < e.length; n++)
                                    t(n);
                                "function" == typeof e.toJSON && t("toJSON")
                            } else 
                                for (var i in e)
                                    t(i)
                        }
                        function n() {
                            this.keys = [], this.values = []
                        }
                        g.toJS = function(t) {
                            if (0 == arguments.length)
                                throw new Error("When calling ko.toJS, pass the object you want to convert.");
                            return e(t, function(e) {
                                for (var t = 0; g.isObservable(e) && t < 10; t++)
                                    e = e();
                                return e
                            })
                        }, g.toJSON = function(e, t, n) {
                            var i = g.toJS(e);
                            return g.utils.stringifyJson(i, t, n)
                        }, n.prototype = {
                            constructor: n,
                            save: function(e, t) {
                                var n = g.utils.arrayIndexOf(this.keys, e);
                                n >= 0 ? this.values[n] = t : (this.keys.push(e), this.values.push(t))
                            },
                            get: function(e) {
                                var t = g.utils.arrayIndexOf(this.keys, e);
                                return t >= 0 ? this.values[t] : a
                            }
                        }
                    }(), g.exportSymbol("toJS", g.toJS), g.exportSymbol("toJSON", g.toJSON), function() {
                        g.selectExtensions = {
                            readValue: function(e) {
                                switch (g.utils.tagNameLower(e)) {
                                case"option":
                                    return !0 === e.__ko__hasDomDataOptionValue__ ? g.utils.domData.get(e, g.bindingHandlers.options.optionValueDomDataKey) : g.utils.ieVersion <= 7 ? e.getAttributeNode("value") && e.getAttributeNode("value").specified ? e.value : e.text : e.value;
                                case"select":
                                    return e.selectedIndex >= 0 ? g.selectExtensions.readValue(e.options[e.selectedIndex]) : a;
                                default:
                                    return e.value
                                }
                            },
                            writeValue: function(e, t, n) {
                                switch (g.utils.tagNameLower(e)) {
                                case"option":
                                    switch (typeof t) {
                                    case"string":
                                        g.utils.domData.set(e, g.bindingHandlers.options.optionValueDomDataKey, a), "__ko__hasDomDataOptionValue__"in e && delete e.__ko__hasDomDataOptionValue__, e.value = t;
                                        break;
                                    default:
                                        g.utils.domData.set(e, g.bindingHandlers.options.optionValueDomDataKey, t), e.__ko__hasDomDataOptionValue__=!0, e.value = "number" == typeof t ? t : ""
                                    }
                                    break;
                                case"select":
                                    "" !== t && null !== t || (t = a);
                                    for (var i, r =- 1, o = 0, s = e.options.length; o < s; ++o)
                                        if ((i = g.selectExtensions.readValue(e.options[o])) == t || "" == i && t === a) {
                                            r = o;
                                            break
                                        }(n || r >= 0 || t === a && e.size > 1) && (e.selectedIndex = r);
                                    break;
                                default:
                                    null !== t && t !== a || (t = ""), e.value = t
                                }
                            }
                        }
                    }(), g.exportSymbol("selectExtensions", g.selectExtensions), g.exportSymbol("selectExtensions.readValue", g.selectExtensions.readValue), g.exportSymbol("selectExtensions.writeValue", g.selectExtensions.writeValue), g.expressionRewriting = function() {
                        function e(e) {
                            if (g.utils.arrayIndexOf(i, e) >= 0)
                                return !1;
                            var t = e.match(r);
                            return null !== t && (t[1] ? "Object(" + t[1] + ")" + t[2] : e)
                        }
                        function t(e) {
                            var t = g.utils.stringTrim(e);
                            123 === t.charCodeAt(0) && (t = t.slice(1, - 1));
                            var n, i = [], r = t.match(o), l = [], u = 0;
                            if (r) {
                                r.push(",");
                                for (var c, p = 0; c = r[p]; ++p) {
                                    var d = c.charCodeAt(0);
                                    if (44 === d) {
                                        if (u <= 0) {
                                            i.push(n && l.length ? {
                                                key: n,
                                                value: l.join("")
                                            } : {
                                                unknown: n || l.join("")
                                            }), n = u = 0, l = [];
                                            continue
                                        }
                                    } else if (58 === d) {
                                        if (!u&&!n && 1 === l.length) {
                                            n = l.pop();
                                            continue
                                        }
                                    } else if (47 === d && p && c.length > 1) {
                                        var f = r[p - 1].match(a);
                                        f&&!s[f[0]] && (t = t.substr(t.indexOf(c) + 1), r = t.match(o), r.push(","), p =- 1, c = "/")
                                    } else 
                                        40 === d || 123 === d || 91 === d?++u:
                                    41 === d || 125 === d || 93 === d?--u:
                                    n || l.length || 34 !== d && 39 !== d || (c = c.slice(1, - 1));
                                    l.push(c)
                                }
                            }
                            return i
                        }
                        function n(n, i) {
                            function r(t, n) {
                                var i;
                                if (!u) {
                                    if (!function(e) {
                                        return !e ||!e.preprocess || (n = e.preprocess(n, t, r))
                                    }(g.getBindingHandler(t)))
                                        return;
                                    l[t] && (i = e(n)) && a.push("'" + t + "':function(_z){" + i + "=_z}")
                                }
                                s && (n = "function(){return " + n + " }"), o.push("'" + t + "':" + n)
                            }
                            i = i || {};
                            var o = [], a = [], s = i.valueAccessors, u = i.bindingParams, c = "string" == typeof n ? t(n): n;
                            return g.utils.arrayForEach(c, function(e) {
                                r(e.key || e.unknown, e.value)
                            }), a.length && r("_ko_property_writers", "{" + a.join(",") + " }"), o.join(",")
                        }
                        var i = ["true", "false", "null", "undefined"], r = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, o = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"), a = /[\])"'A-Za-z0-9_$]+$/, s = {
                            "in": 1,
                            "return": 1,
                            "typeof": 1
                        }, l = {};
                        return {
                            bindingRewriteValidators: [],
                            twoWayBindings: l,
                            parseObjectLiteral: t,
                            preProcessBindings: n,
                            keyValueArrayContainsKey: function(e, t) {
                                for (var n = 0; n < e.length; n++)
                                    if (e[n].key == t)
                                        return !0;
                                return !1
                            },
                            writeValueToProperty: function(e, t, n, i, r) {
                                if (e && g.isObservable(e))!g.isWriteableObservable(e) || r && e.peek() === i || e(i);
                                else {
                                    var o = t.get("_ko_property_writers");
                                    o && o[n] && o[n](i)
                                }
                            }
                        }
                    }(), g.exportSymbol("expressionRewriting", g.expressionRewriting), g.exportSymbol("expressionRewriting.bindingRewriteValidators", g.expressionRewriting.bindingRewriteValidators), g.exportSymbol("expressionRewriting.parseObjectLiteral", g.expressionRewriting.parseObjectLiteral), g.exportSymbol("expressionRewriting.preProcessBindings", g.expressionRewriting.preProcessBindings), g.exportSymbol("expressionRewriting._twoWayBindings", g.expressionRewriting.twoWayBindings), g.exportSymbol("jsonExpressionRewriting", g.expressionRewriting), g.exportSymbol("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", g.expressionRewriting.preProcessBindings), function() {
                        function e(e) {
                            return 8 == e.nodeType && a.test(o ? e.text : e.nodeValue)
                        }
                        function t(e) {
                            return 8 == e.nodeType && s.test(o ? e.text : e.nodeValue)
                        }
                        function n(n, i) {
                            for (var r = n, o = 1, a = []; r = r.nextSibling;) {
                                if (t(r) && 0===--o)
                                    return a;
                                a.push(r), e(r) && o++
                            }
                            if (!i)
                                throw new Error("Cannot find closing comment tag to match: " + n.nodeValue);
                            return null
                        }
                        function i(e, t) {
                            var i = n(e, t);
                            return i ? i.length > 0 ? i[i.length - 1].nextSibling : e.nextSibling : null
                        }
                        function r(n) {
                            var r = n.firstChild, o = null;
                            if (r)
                                do {
                                    if (o)
                                        o.push(r);
                                    else if (e(r)) {
                                        var a = i(r, !0);
                                        a ? r = a : o = [r]
                                    } else 
                                        t(r) && (o = [r])
                                }
                            while (r = r.nextSibling);
                            return o
                        }
                        var o = l && "\x3c!--test--\x3e" === l.createComment("test").text, a = o ? /^<!--\s*ko(?:\s+([\s\S]+))?\s*-->$/: /^\s*ko(?:\s+([\s\S]+))?\s*$/, s = o ? /^<!--\s*\/ko\s*-->$/: /^\s*\/ko\s*$/, u = {
                            ul: !0,
                            ol: !0
                        };
                        g.virtualElements = {
                            allowedBindings: {},
                            childNodes: function(t) {
                                return e(t) ? n(t) : t.childNodes
                            },
                            emptyNode: function(t) {
                                if (e(t))
                                    for (var n = g.virtualElements.childNodes(t), i = 0, r = n.length; i < r; i++)
                                        g.removeNode(n[i]);
                                else 
                                    g.utils.emptyDomNode(t)
                            },
                            setDomNodeChildren: function(t, n) {
                                if (e(t)) {
                                    g.virtualElements.emptyNode(t);
                                    for (var i = t.nextSibling, r = 0, o = n.length; r < o; r++)
                                        i.parentNode.insertBefore(n[r], i)
                                } else 
                                    g.utils.setDomNodeChildren(t, n)
                            },
                            prepend: function(t, n) {
                                e(t) ? t.parentNode.insertBefore(n, t.nextSibling) : t.firstChild ? t.insertBefore(n, t.firstChild) : t.appendChild(n)
                            },
                            insertAfter: function(t, n, i) {
                                i ? e(t) ? t.parentNode.insertBefore(n, i.nextSibling) : i.nextSibling ? t.insertBefore(n, i.nextSibling) : t.appendChild(n) : g.virtualElements.prepend(t, n)
                            },
                            firstChild: function(n) {
                                return e(n)?!n.nextSibling || t(n.nextSibling) ? null : n.nextSibling : n.firstChild
                            },
                            nextSibling: function(n) {
                                return e(n) && (n = i(n)), n.nextSibling && t(n.nextSibling) ? null : n.nextSibling
                            },
                            hasBindingValue: e,
                            virtualNodeBindingValue: function(e) {
                                var t = (o ? e.text : e.nodeValue).match(a);
                                return t ? t[1] : null
                            },
                            normaliseVirtualElementDomStructure: function(e) {
                                if (u[g.utils.tagNameLower(e)]) {
                                    var t = e.firstChild;
                                    if (t)
                                        do {
                                            if (1 === t.nodeType) {
                                                var n = r(t);
                                                if (n)
                                                    for (var i = t.nextSibling, o = 0; o < n.length; o++)
                                                        i ? e.insertBefore(n[o], i) : e.appendChild(n[o])
                                                    }
                                        }
                                    while (t = t.nextSibling)
                                    }
                                }
                        }
                    }(), g.exportSymbol("virtualElements", g.virtualElements), g.exportSymbol("virtualElements.allowedBindings", g.virtualElements.allowedBindings), g.exportSymbol("virtualElements.emptyNode", g.virtualElements.emptyNode), g.exportSymbol("virtualElements.insertAfter", g.virtualElements.insertAfter), g.exportSymbol("virtualElements.prepend", g.virtualElements.prepend), g.exportSymbol("virtualElements.setDomNodeChildren", g.virtualElements.setDomNodeChildren), function() {
                        function e(e, n, i) {
                            var r = e + (i && i.valueAccessors || "");
                            return n[r] || (n[r] = t(e, i))
                        }
                        function t(e, t) {
                            var n = g.expressionRewriting.preProcessBindings(e, t), i = "with($context){with($data||{}){return{" + n + "}}}";
                            return new Function("$context", "$element", i)
                        }
                        g.bindingProvider = function() {
                            this.bindingCache = {}
                        }, g.utils.extend(g.bindingProvider.prototype, {
                            nodeHasBindings: function(e) {
                                switch (e.nodeType) {
                                case 1:
                                    return null != e.getAttribute("data-bind") || g.components.getComponentNameForNode(e);
                                case 8:
                                    return g.virtualElements.hasBindingValue(e);
                                default:
                                    return !1
                                }
                            },
                            getBindings: function(e, t) {
                                var n = this.getBindingsString(e, t), i = n ? this.parseBindingsString(n, t, e): null;
                                return g.components.addBindingsForCustomElement(i, e, t, !1)
                            },
                            getBindingAccessors: function(e, t) {
                                var n = this.getBindingsString(e, t), i = n ? this.parseBindingsString(n, t, e, {
                                    valueAccessors: !0
                                }): null;
                                return g.components.addBindingsForCustomElement(i, e, t, !0)
                            },
                            getBindingsString: function(e, t) {
                                switch (e.nodeType) {
                                case 1:
                                    return e.getAttribute("data-bind");
                                case 8:
                                    return g.virtualElements.virtualNodeBindingValue(e);
                                default:
                                    return null
                                }
                            },
                            parseBindingsString: function(t, n, i, r) {
                                try {
                                    return e(t, this.bindingCache, r)(n, i)
                                } catch (o) {
                                    throw o.message = "Unable to parse bindings.\nBindings value: " + t + "\nMessage: " + o.message, o
                                }
                            }
                        }), g.bindingProvider.instance = new g.bindingProvider
                    }(), g.exportSymbol("bindingProvider", g.bindingProvider), function() {
                        function e(e) {
                            return function() {
                                return e
                            }
                        }
                        function t(e) {
                            return e()
                        }
                        function n(e) {
                            return g.utils.objectMap(g.dependencyDetection.ignore(e), function(t, n) {
                                return function() {
                                    return e()[n]
                                }
                            })
                        }
                        function i(t, i, r) {
                            return "function" == typeof t ? n(t.bind(null, i, r)) : g.utils.objectMap(t, e)
                        }
                        function r(e, t) {
                            return n(this.getBindings.bind(this, e, t))
                        }
                        function o(e) {
                            if (!g.virtualElements.allowedBindings[e])
                                throw new Error("The binding '" + e + "' cannot be used with virtual elements")
                        }
                        function l(e, t, n) {
                            var i, r = g.virtualElements.firstChild(t), o = g.bindingProvider.instance, a = o.preprocessNode;
                            if (a) {
                                for (; i = r;)
                                    r = g.virtualElements.nextSibling(i), a.call(o, i);
                                r = g.virtualElements.firstChild(t)
                            }
                            for (; i = r;)
                                r = g.virtualElements.nextSibling(i), u(e, i, n)
                        }
                        function u(e, t, n) {
                            var i=!0, r = 1 === t.nodeType;
                            r && g.virtualElements.normaliseVirtualElementDomStructure(t), (r && n || g.bindingProvider.instance.nodeHasBindings(t)) && (i = d(t, null, e, n).shouldBindDescendants), i&&!h[g.utils.tagNameLower(t)] && l(e, t, !r)
                        }
                        function p(e) {
                            var t = [], n = {}, i = [];
                            return g.utils.objectForEach(e, function r(o) {
                                if (!n[o]) {
                                    var a = g.getBindingHandler(o);
                                    a && (a.after && (i.push(o), g.utils.arrayForEach(a.after, function(t) {
                                        if (e[t]) {
                                            if ( - 1 !== g.utils.arrayIndexOf(i, t))
                                                throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + i.join(", "));
                                            r(t)
                                        }
                                    }), i.length--), t.push({
                                        key: o,
                                        handler: a
                                    })), n[o]=!0
                                }
                            }), t
                        }
                        function d(e, n, i, s) {
                            function l() {
                                return g.utils.objectMap(h ? h() : c, t)
                            }
                            var u = g.utils.domData.get(e, m);
                            if (!n) {
                                if (u)
                                    throw Error("You cannot apply bindings multiple times to the same element.");
                                g.utils.domData.set(e, m, !0)
                            }
                            !u && s && g.storedBindingContextForNode(e, i);
                            var c;
                            if (n && "function" != typeof n)
                                c = n;
                            else {
                                var d = g.bindingProvider.instance, f = d.getBindingAccessors || r, h = g.dependentObservable(function() {
                                    return c = n ? n(i, e) : f.call(d, e, i), c && i._subscribable && i._subscribable(), c
                                }, null, {
                                    disposeWhenNodeIsRemoved: e
                                });
                                c && h.isActive() || (h = null)
                            }
                            var y;
                            if (c) {
                                var v = h ? function(e) {
                                    return function() {
                                        return t(h()[e])
                                    }
                                }
                                : function(e) {
                                    return c[e]
                                };
                                l.get = function(e) {
                                    return c[e] && t(v(e))
                                }, l.has = function(e) {
                                    return e in c
                                };
                                var b = p(c);
                                g.utils.arrayForEach(b, function(t) {
                                    var n = t.handler.init, r = t.handler.update, s = t.key;
                                    8 === e.nodeType && o(s);
                                    try {
                                        "function" == typeof n && g.dependencyDetection.ignore(function() {
                                            var t = n(e, v(s), l, i.$data, i);
                                            if (t && t.controlsDescendantBindings) {
                                                if (y !== a)
                                                    throw new Error("Multiple bindings (" + y + " and " + s + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                                                y = s
                                            }
                                        }), "function" == typeof r && g.dependentObservable(function() {
                                            r(e, v(s), l, i.$data, i)
                                        }, null, {
                                            disposeWhenNodeIsRemoved: e
                                        })
                                    } catch (u) {
                                        throw u.message = 'Unable to process binding "' + s + ": " + c[s] + '"\nMessage: ' + u.message, u
                                    }
                                })
                            }
                            return {
                                shouldBindDescendants: y === a
                            }
                        }
                        function f(e) {
                            return e && e instanceof g.bindingContext ? e : new g.bindingContext(e)
                        }
                        g.bindingHandlers = {};
                        var h = {
                            script: !0,
                            textarea: !0,
                            template: !0
                        };
                        g.getBindingHandler = function(e) {
                            return g.bindingHandlers[e]
                        }, g.bindingContext = function(e, t, n, i, r) {
                            function o() {
                                var r = p ? e(): e, o = g.utils.unwrapObservable(r);
                                return t ? (t._subscribable && t._subscribable(), g.utils.extend(c, t), c._subscribable = u) : (c.$parents = [], c.$root = o, c.ko = g), c.$rawData = r, c.$data = o, n && (c[n] = o), i && i(c, t, o), c.$data
                            }
                            function s() {
                                return l&&!g.utils.anyDomNodeIsAttachedToDocument(l)
                            }
                            var l, u, c = this, p = "function" == typeof e&&!g.isObservable(e);
                            r && r.exportDependencies ? o() : (u = g.dependentObservable(o, null, {
                                disposeWhen: s,
                                disposeWhenNodeIsRemoved: !0
                            }), u.isActive() && (c._subscribable = u, u.equalityComparer = null, l = [], u._addNode = function(e) {
                                l.push(e), g.utils.domNodeDisposal.addDisposeCallback(e, function(e) {
                                    g.utils.arrayRemoveItem(l, e), l.length || (u.dispose(), c._subscribable = u = a)
                                })
                            }))
                        }, g.bindingContext.prototype.createChildContext = function(e, t, n, i) {
                            return new g.bindingContext(e, this, t, function(e, t) {
                                e.$parentContext = t, e.$parent = t.$data, e.$parents = (t.$parents || []).slice(0), e.$parents.unshift(e.$parent), n && n(e)
                            }, i)
                        }, g.bindingContext.prototype.extend = function(e) {
                            return new g.bindingContext(this._subscribable || this.$data, this, null, function(t, n) {
                                t.$rawData = n.$rawData, g.utils.extend(t, "function" == typeof e ? e() : e)
                            })
                        }, g.bindingContext.prototype.createStaticChildContext = function(e, t) {
                            return this.createChildContext(e, t, null, {
                                exportDependencies: !0
                            })
                        };
                        var m = g.utils.domData.nextKey(), y = g.utils.domData.nextKey();
                        g.storedBindingContextForNode = function(e, t) {
                            if (2 != arguments.length)
                                return g.utils.domData.get(e, y);
                            g.utils.domData.set(e, y, t), t._subscribable && t._subscribable._addNode(e)
                        }, g.applyBindingAccessorsToNode = function(e, t, n) {
                            return 1 === e.nodeType && g.virtualElements.normaliseVirtualElementDomStructure(e), d(e, t, f(n), !0)
                        }, g.applyBindingsToNode = function(e, t, n) {
                            var r = f(n);
                            return g.applyBindingAccessorsToNode(e, i(t, r, e), r)
                        }, g.applyBindingsToDescendants = function(e, t) {
                            1 !== t.nodeType && 8 !== t.nodeType || l(f(e), t, !0)
                        }, g.applyBindings = function(e, t) {
                            if (!c && s.jQuery && (c = s.jQuery), t && 1 !== t.nodeType && 8 !== t.nodeType)
                                throw new Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
                            t = t || s.document.body, u(f(e), t, !0)
                        }, g.contextFor = function(e) {
                            switch (e.nodeType) {
                            case 1:
                            case 8:
                                var t = g.storedBindingContextForNode(e);
                                if (t)
                                    return t;
                                if (e.parentNode)
                                    return g.contextFor(e.parentNode)
                            }
                            return a
                        }, g.dataFor = function(e) {
                            var t = g.contextFor(e);
                            return t ? t.$data : a
                        }, g.exportSymbol("bindingHandlers", g.bindingHandlers), g.exportSymbol("applyBindings", g.applyBindings), g.exportSymbol("applyBindingsToDescendants", g.applyBindingsToDescendants), g.exportSymbol("applyBindingAccessorsToNode", g.applyBindingAccessorsToNode), g.exportSymbol("applyBindingsToNode", g.applyBindingsToNode), g.exportSymbol("contextFor", g.contextFor), g.exportSymbol("dataFor", g.dataFor)
                    }(), function(e) {
                        function t(t, n) {
                            return t.hasOwnProperty(n) ? t[n] : e
                        }
                        function n(e, n) {
                            var r, s = t(o, e);
                            s ? s.subscribe(n) : (s = o[e] = new g.subscribable, s.subscribe(n), i(e, function(t, n) {
                                var i=!(!n ||!n.synchronous);
                                a[e] = {
                                    definition: t,
                                    isSynchronousComponent: i
                                }, delete o[e], r || i ? s.notifySubscribers(t) : g.tasks.schedule(function() {
                                    s.notifySubscribers(t)
                                })
                            }), r=!0)
                        }
                        function i(e, t) {
                            r("getConfig", [e], function(n) {
                                n ? r("loadComponent", [e, n], function(e) {
                                    t(e, n)
                                }) : t(null, null)
                            })
                        }
                        function r(t, n, i, o) {
                            o || (o = g.components.loaders.slice(0));
                            var a = o.shift();
                            if (a) {
                                var s = a[t];
                                if (s) {
                                    var l=!1;
                                    if (s.apply(a, n.concat(function(e) {
                                        l ? i(null) : null !== e ? i(e) : r(t, n, i, o)
                                    })) !== e && (l=!0, !a.suppressLoaderExceptions))
                                        throw new Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.")
                                    } else 
                                        r(t, n, i, o)
                            } else 
                                i(null)
                        }
                        var o = {}, a = {};
                        g.components = {
                            get: function(e, i) {
                                var r = t(a, e);
                                r ? r.isSynchronousComponent ? g.dependencyDetection.ignore(function() {
                                    i(r.definition)
                                }) : g.tasks.schedule(function() {
                                    i(r.definition)
                                }) : n(e, i)
                            },
                            clearCachedDefinition: function(e) {
                                delete a[e]
                            },
                            _getFirstResultFromLoaders: r
                        }, g.components.loaders = [], g.exportSymbol("components", g.components), g.exportSymbol("components.get", g.components.get), g.exportSymbol("components.clearCachedDefinition", g.components.clearCachedDefinition)
                    }(), function(e) {
                        function n(e, t, n, i) {
                            var r = {}, o = 2, a = function() {
                                0==--o && i(r)
                            }, s = n.template, l = n.viewModel;
                            s ? c(t, s, function(t) {
                                g.components._getFirstResultFromLoaders("loadTemplate", [e, t], function(e) {
                                    r.template = e, a()
                                })
                            }) : a(), l ? c(t, l, function(t) {
                                g.components._getFirstResultFromLoaders("loadViewModel", [e, t], function(e) {
                                    r[f] = e, a()
                                })
                            }) : a()
                        }
                        function i(e, t, n) {
                            if ("string" == typeof t)
                                n(g.utils.parseHtmlFragment(t));
                            else if (t instanceof Array)
                                n(t);
                            else if (u(t))
                                n(g.utils.makeArray(t.childNodes));
                            else if (t.element) {
                                var i = t.element;
                                if (a(i))
                                    n(o(i));
                                else if ("string" == typeof i) {
                                    var r = l.getElementById(i);
                                    r ? n(o(r)) : e("Cannot find element with ID " + i)
                                } else 
                                    e("Unknown element type: " + i)
                            } else 
                                e("Unknown template value: " + t)
                        }
                        function r(e, t, n) {
                            if ("function" == typeof t)
                                n(function(e) {
                                    return new t(e)
                                });
                            else if ("function" == typeof t[f])
                                n(t[f]);
                            else if ("instance"in t) {
                                var i = t.instance;
                                n(function(e, t) {
                                    return i
                                })
                            } else 
                                "viewModel"in t ? r(e, t.viewModel, n) : e("Unknown viewModel value: " + t)
                        }
                        function o(e) {
                            switch (g.utils.tagNameLower(e)) {
                            case"script":
                                return g.utils.parseHtmlFragment(e.text);
                            case"textarea":
                                return g.utils.parseHtmlFragment(e.value);
                            case"template":
                                if (u(e.content))
                                    return g.utils.cloneNodes(e.content.childNodes)
                            }
                            return g.utils.cloneNodes(e.childNodes)
                        }
                        function a(e) {
                            return s.HTMLElement ? e instanceof HTMLElement : e && e.tagName && 1 === e.nodeType
                        }
                        function u(e) {
                            return s.DocumentFragment ? e instanceof DocumentFragment : e && 11 === e.nodeType
                        }
                        function c(e, n, i) {
                            "string" == typeof n.require ? t || s.require ? (t || s.require)([n.require], i) : e("Uses require, but no AMD loader is present") : i(n)
                        }
                        function p(e) {
                            return function(t) {
                                throw new Error("Component '" + e + "': " + t)
                            }
                        }
                        var d = {};
                        g.components.register = function(e, t) {
                            if (!t)
                                throw new Error("Invalid configuration for " + e);
                            if (g.components.isRegistered(e))
                                throw new Error("Component " + e + " is already registered");
                            d[e] = t
                        }, g.components.isRegistered = function(e) {
                            return d.hasOwnProperty(e)
                        }, g.components.unregister = function(e) {
                            delete d[e], g.components.clearCachedDefinition(e)
                        }, g.components.defaultLoader = {
                            getConfig: function(e, t) {
                                t(d.hasOwnProperty(e) ? d[e] : null)
                            },
                            loadComponent: function(e, t, i) {
                                var r = p(e);
                                c(r, t, function(t) {
                                    n(e, r, t, i)
                                })
                            },
                            loadTemplate: function(e, t, n) {
                                i(p(e), t, n)
                            },
                            loadViewModel: function(e, t, n) {
                                r(p(e), t, n)
                            }
                        };
                        var f = "createViewModel";
                        g.exportSymbol("components.register", g.components.register), g.exportSymbol("components.isRegistered", g.components.isRegistered), g.exportSymbol("components.unregister", g.components.unregister), g.exportSymbol("components.defaultLoader", g.components.defaultLoader), g.components.loaders.push(g.components.defaultLoader), g.components._allRegisteredComponents = d
                    }(), function(e) {
                        function t(e, t) {
                            var i = e.getAttribute("params");
                            if (i) {
                                var r = n.parseBindingsString(i, t, e, {
                                    valueAccessors: !0,
                                    bindingParams: !0
                                }), o = g.utils.objectMap(r, function(t, n) {
                                    return g.computed(t, null, {
                                        disposeWhenNodeIsRemoved: e
                                    })
                                }), a = g.utils.objectMap(o, function(t, n) {
                                    var i = t.peek();
                                    return t.isActive() ? g.computed({
                                        read: function() {
                                            return g.utils.unwrapObservable(t())
                                        },
                                        write: g.isWriteableObservable(i) && function(e) {
                                            t()(e)
                                        },
                                        disposeWhenNodeIsRemoved: e
                                    }) : i
                                });
                                return a.hasOwnProperty("$raw") || (a.$raw = o), a
                            }
                            return {
                                $raw: {}
                            }
                        }
                        g.components.getComponentNameForNode = function(e) {
                            var t = g.utils.tagNameLower(e);
                            if (g.components.isRegistered(t) && ( - 1 != t.indexOf("-") || "" + e == "[object HTMLUnknownElement]" || g.utils.ieVersion <= 8 && e.tagName === t))
                                return t
                        }, g.components.addBindingsForCustomElement = function(e, n, i, r) {
                            if (1 === n.nodeType) {
                                var o = g.components.getComponentNameForNode(n);
                                if (o) {
                                    if (e = e || {}, e.component)
                                        throw new Error('Cannot use the "component" binding on a custom element matching a component');
                                    var a = {
                                        name: o,
                                        params: t(n, i)
                                    };
                                    e.component = r ? function() {
                                        return a
                                    } : a
                                }
                            }
                            return e
                        };
                        var n = new g.bindingProvider;
                        g.utils.ieVersion < 9 && (g.components.register = function(e) {
                            return function(t) {
                                return l.createElement(t), e.apply(this, arguments)
                            }
                        }(g.components.register), l.createDocumentFragment = function(e) {
                            return function() {
                                var t = e(), n = g.components._allRegisteredComponents;
                                for (var i in n)
                                    n.hasOwnProperty(i) && t.createElement(i);
                                return t
                            }
                        }(l.createDocumentFragment))
                    }(), function(e) {
                        function t(e, t, n) {
                            var i = t.template;
                            if (!i)
                                throw new Error("Component '" + e + "' has no template");
                            var r = g.utils.cloneNodes(i);
                            g.virtualElements.setDomNodeChildren(n, r)
                        }
                        function n(e, t, n, i) {
                            var r = e.createViewModel;
                            return r ? r.call(e, i, {
                                element: t,
                                templateNodes: n
                            }) : i
                        }
                        var i = 0;
                        g.bindingHandlers.component = {
                            init: function(e, r, o, a, s) {
                                var l, u, c = function() {
                                    var e = l && l.dispose;
                                    "function" == typeof e && e.call(l), l = null, u = null
                                }, p = g.utils.makeArray(g.virtualElements.childNodes(e));
                                return g.utils.domNodeDisposal.addDisposeCallback(e, c), g.computed(function() {
                                    var o, a, d = g.utils.unwrapObservable(r());
                                    if ("string" == typeof d ? o = d : (o = g.utils.unwrapObservable(d.name), a = g.utils.unwrapObservable(d.params)), !o)
                                        throw new Error("No component name specified");
                                    var f = u=++i;
                                    g.components.get(o, function(i) {
                                        if (u === f) {
                                            if (c(), !i)
                                                throw new Error("Unknown component '" + o + "'");
                                            t(o, i, e);
                                            var r = n(i, e, p, a), d = s.createChildContext(r, void 0, function(e) {
                                                e.$component = r, e.$componentTemplateNodes = p
                                            });
                                            l = r, g.applyBindingsToDescendants(d, e)
                                        }
                                    })
                                }, null, {
                                    disposeWhenNodeIsRemoved: e
                                }), {
                                    controlsDescendantBindings: !0
                                }
                            }
                        }, g.virtualElements.allowedBindings.component=!0
                    }();
                    var N = {
                        "class": "className",
                        "for": "htmlFor"
                    };
                    g.bindingHandlers.attr = {
                        update: function(e, t, n) {
                            var i = g.utils.unwrapObservable(t()) || {};
                            g.utils.objectForEach(i, function(t, n) {
                                n = g.utils.unwrapObservable(n);
                                var i=!1 === n || null === n || n === a;
                                i && e.removeAttribute(t), g.utils.ieVersion <= 8 && t in N ? (t = N[t], i ? e.removeAttribute(t) : e[t] = n) : i || e.setAttribute(t, n.toString()), "name" === t && g.utils.setElementName(e, i ? "" : n.toString())
                            })
                        }
                    }, function() {
                        g.bindingHandlers.checked = {
                            after: ["value", "attr"],
                            init: function(e, t, n) {
                                function i() {
                                    var i = e.checked, r = f ? o(): i;
                                    if (!g.computedContext.isInitial() && (!l || i)) {
                                        var a = g.dependencyDetection.ignore(t);
                                        if (c) {
                                            var s = p ? a.peek(): a;
                                            d !== r ? (i && (g.utils.addOrRemoveItem(s, r, !0), g.utils.addOrRemoveItem(s, d, !1)), d = r) : g.utils.addOrRemoveItem(s, r, i), p && g.isWriteableObservable(a) && a(s)
                                        } else 
                                            g.expressionRewriting.writeValueToProperty(a, n, "checked", r, !0)
                                    }
                                }
                                function r() {
                                    var n = g.utils.unwrapObservable(t());
                                    e.checked = c ? g.utils.arrayIndexOf(n, o()) >= 0 : s ? n : o() === n
                                }
                                var o = g.pureComputed(function() {
                                    return n.has("checkedValue") ? g.utils.unwrapObservable(n.get("checkedValue")) : n.has("value") ? g.utils.unwrapObservable(n.get("value")) : e.value
                                }), s = "checkbox" == e.type, l = "radio" == e.type;
                                if (s || l) {
                                    var u = t(), c = s && g.utils.unwrapObservable(u)instanceof Array, p=!(c && u.push && u.splice), d = c ? o() : a, f = l || c;
                                    l&&!e.name && g.bindingHandlers.uniqueName.init(e, function() {
                                        return !0
                                    }), g.computed(i, null, {
                                        disposeWhenNodeIsRemoved: e
                                    }), g.utils.registerEventHandler(e, "click", i), g.computed(r, null, {
                                        disposeWhenNodeIsRemoved: e
                                    }), u = a
                                }
                            }
                        }, g.expressionRewriting.twoWayBindings.checked=!0, g.bindingHandlers.checkedValue = {
                            update: function(e, t) {
                                e.value = g.utils.unwrapObservable(t())
                            }
                        }
                    }();
                    g.bindingHandlers.css = {
                        update: function(e, t) {
                            var n = g.utils.unwrapObservable(t());
                            null !== n && "object" == typeof n ? g.utils.objectForEach(n, function(t, n) {
                                n = g.utils.unwrapObservable(n), g.utils.toggleDomNodeCssClass(e, t, n)
                            }) : (n = g.utils.stringTrim(String(n || "")), g.utils.toggleDomNodeCssClass(e, e.__ko__cssValue, !1), e.__ko__cssValue = n, g.utils.toggleDomNodeCssClass(e, n, !0))
                        }
                    }, g.bindingHandlers.enable = {
                        update: function(e, t) {
                            var n = g.utils.unwrapObservable(t());
                            n && e.disabled ? e.removeAttribute("disabled") : n || e.disabled || (e.disabled=!0)
                        }
                    }, g.bindingHandlers.disable = {
                        update: function(e, t) {
                            g.bindingHandlers.enable.update(e, function() {
                                return !g.utils.unwrapObservable(t())
                            })
                        }
                    }, g.bindingHandlers.event = {
                        init: function(e, t, n, i, r) {
                            var o = t() || {};
                            g.utils.objectForEach(o, function(o) {
                                "string" == typeof o && g.utils.registerEventHandler(e, o, function(e) {
                                    var a, s = t()[o];
                                    if (s) {
                                        try {
                                            var l = g.utils.makeArray(arguments);
                                            i = r.$data, l.unshift(i), a = s.apply(i, l)
                                        } finally {
                                            !0 !== a && (e.preventDefault ? e.preventDefault() : e.returnValue=!1)
                                        }
                                        !1 !== n.get(o + "Bubble") || (e.cancelBubble=!0, e.stopPropagation && e.stopPropagation())
                                    }
                                })
                            })
                        }
                    }, g.bindingHandlers.foreach = {
                        makeTemplateValueAccessor: function(e) {
                            return function() {
                                var t = e(), n = g.utils.peekObservable(t);
                                return n && "number" != typeof n.length ? (g.utils.unwrapObservable(t), {
                                    foreach: n.data,
                                    as: n.as,
                                    includeDestroyed: n.includeDestroyed,
                                    afterAdd: n.afterAdd,
                                    beforeRemove: n.beforeRemove,
                                    afterRender: n.afterRender,
                                    beforeMove: n.beforeMove,
                                    afterMove: n.afterMove,
                                    templateEngine: g.nativeTemplateEngine.instance
                                }) : {
                                    foreach: t,
                                    templateEngine: g.nativeTemplateEngine.instance
                                }
                            }
                        },
                        init: function(e, t, n, i, r) {
                            return g.bindingHandlers.template.init(e, g.bindingHandlers.foreach.makeTemplateValueAccessor(t))
                        },
                        update: function(e, t, n, i, r) {
                            return g.bindingHandlers.template.update(e, g.bindingHandlers.foreach.makeTemplateValueAccessor(t), n, i, r)
                        }
                    }, g.expressionRewriting.bindingRewriteValidators.foreach=!1, g.virtualElements.allowedBindings.foreach=!0;
                    g.bindingHandlers.hasfocus = {
                        init: function(e, t, n) {
                            var i = function(i) {
                                e.__ko_hasfocusUpdating=!0;
                                var r = e.ownerDocument;
                                if ("activeElement"in r) {
                                    var o;
                                    try {
                                        o = r.activeElement
                                    } catch (s) {
                                        o = r.body
                                    }
                                    i = o === e
                                }
                                var a = t();
                                g.expressionRewriting.writeValueToProperty(a, n, "hasfocus", i, !0), e.__ko_hasfocusLastValue = i, e.__ko_hasfocusUpdating=!1
                            }, r = i.bind(null, !0), o = i.bind(null, !1);
                            g.utils.registerEventHandler(e, "focus", r), g.utils.registerEventHandler(e, "focusin", r), g.utils.registerEventHandler(e, "blur", o), g.utils.registerEventHandler(e, "focusout", o)
                        },
                        update: function(e, t) {
                            var n=!!g.utils.unwrapObservable(t());
                            e.__ko_hasfocusUpdating || e.__ko_hasfocusLastValue === n || (n ? e.focus() : e.blur(), !n && e.__ko_hasfocusLastValue && e.ownerDocument.body.focus(), g.dependencyDetection.ignore(g.utils.triggerEvent, null, [e, n ? "focusin": "focusout"]))
                        }
                    }, g.expressionRewriting.twoWayBindings.hasfocus=!0, g.bindingHandlers.hasFocus = g.bindingHandlers.hasfocus, g.expressionRewriting.twoWayBindings.hasFocus=!0, g.bindingHandlers.html = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(e, t) {
                            g.utils.setHtml(e, t())
                        }
                    }, m("if"), m("ifnot", !1, !0), m("with", !0, !1, function(e, t) {
                        return e.createStaticChildContext(t)
                    });
                    var A = {};
                    g.bindingHandlers.options = {
                        init: function(e) {
                            if ("select" !== g.utils.tagNameLower(e))
                                throw new Error("options binding applies only to SELECT elements");
                            for (; e.length > 0;)
                                e.remove(0);
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(e, t, n) {
                            function i() {
                                return g.utils.arrayFilter(e.options, function(e) {
                                    return e.selected
                                })
                            }
                            function r(e, t, n) {
                                var i = typeof t;
                                return "function" == i ? t(e) : "string" == i ? e[t] : n
                            }
                            function o(t, i, o) {
                                o.length && (v=!h && o[0].selected ? [g.selectExtensions.readValue(o[0])] : [], b=!0);
                                var s = e.ownerDocument.createElement("option");
                                if (t === A)
                                    g.utils.setTextContent(s, n.get("optionsCaption")), g.selectExtensions.writeValue(s, a);
                                else {
                                    var l = r(t, n.get("optionsValue"), t);
                                    g.selectExtensions.writeValue(s, g.utils.unwrapObservable(l));
                                    var u = r(t, n.get("optionsText"), l);
                                    g.utils.setTextContent(s, u)
                                }
                                return [s]
                            }
                            function s(t, i) {
                                if (b && h)
                                    g.selectExtensions.writeValue(e, g.utils.unwrapObservable(n.get("value")), !0);
                                else if (v.length) {
                                    var r = g.utils.arrayIndexOf(v, g.selectExtensions.readValue(i[0])) >= 0;
                                    g.utils.setOptionNodeSelectionState(i[0], r), b&&!r && g.dependencyDetection.ignore(g.utils.triggerEvent, null, [e, "change"])
                                }
                            }
                            var l, u, c = 0 == e.length, p = e.multiple, d=!c && p ? e.scrollTop : null, f = g.utils.unwrapObservable(t()), h = n.get("valueAllowUnset") && n.has("value"), m = n.get("optionsIncludeDestroyed"), y = {}, v = [];
                            h || (p ? v = g.utils.arrayMap(i(), g.selectExtensions.readValue) : e.selectedIndex >= 0 && v.push(g.selectExtensions.readValue(e.options[e.selectedIndex]))), f && ("undefined" == typeof f.length && (f = [f]), u = g.utils.arrayFilter(f, function(e) {
                                return m || e === a || null === e ||!g.utils.unwrapObservable(e._destroy)
                            }), n.has("optionsCaption") && null !== (l = g.utils.unwrapObservable(n.get("optionsCaption"))) && l !== a && u.unshift(A));
                            var b=!1;
                            y.beforeRemove = function(t) {
                                e.removeChild(t)
                            };
                            var w = s;
                            n.has("optionsAfterRender") && "function" == typeof n.get("optionsAfterRender") && (w = function(e, t) {
                                s(e, t), g.dependencyDetection.ignore(n.get("optionsAfterRender"), null, [t[0], e !== A ? e: a])
                            }), g.utils.setDomNodeChildrenFromArrayMapping(e, u, o, y, w), g.dependencyDetection.ignore(function() {
                                if (h)
                                    g.selectExtensions.writeValue(e, g.utils.unwrapObservable(n.get("value")), !0);
                                else {
                                    var t;
                                    t = p ? v.length && i().length < v.length : v.length && e.selectedIndex >= 0 ? g.selectExtensions.readValue(e.options[e.selectedIndex]) !== v[0] : v.length || e.selectedIndex >= 0, t && g.utils.triggerEvent(e, "change")
                                }
                            }), g.utils.ensureSelectElementIsRenderedCorrectly(e), d && Math.abs(d - e.scrollTop) > 20 && (e.scrollTop = d)
                        }
                    }, g.bindingHandlers.options.optionValueDomDataKey = g.utils.domData.nextKey(), g.bindingHandlers.selectedOptions = {
                        after: ["options", "foreach"],
                        init: function(e, t, n) {
                            g.utils.registerEventHandler(e, "change", function() {
                                var i = t(), r = [];
                                g.utils.arrayForEach(e.getElementsByTagName("option"), function(e) {
                                    e.selected && r.push(g.selectExtensions.readValue(e))
                                }), g.expressionRewriting.writeValueToProperty(i, n, "selectedOptions", r)
                            })
                        },
                        update: function(e, t) {
                            if ("select" != g.utils.tagNameLower(e))
                                throw new Error("values binding applies only to SELECT elements");
                            var n = g.utils.unwrapObservable(t()), i = e.scrollTop;
                            n && "number" == typeof n.length && g.utils.arrayForEach(e.getElementsByTagName("option"), function(e) {
                                var t = g.utils.arrayIndexOf(n, g.selectExtensions.readValue(e)) >= 0
                                ;
                                e.selected != t && g.utils.setOptionNodeSelectionState(e, t)
                            }), e.scrollTop = i
                        }
                    }, g.expressionRewriting.twoWayBindings.selectedOptions=!0, g.bindingHandlers.style = {
                        update: function(e, t) {
                            var n = g.utils.unwrapObservable(t() || {});
                            g.utils.objectForEach(n, function(t, n) {
                                n = g.utils.unwrapObservable(n), null !== n && n !== a&&!1 !== n || (n = ""), e.style[t] = n
                            })
                        }
                    }, g.bindingHandlers.submit = {
                        init: function(e, t, n, i, r) {
                            if ("function" != typeof t())
                                throw new Error("The value for a submit binding must be a function");
                            g.utils.registerEventHandler(e, "submit", function(n) {
                                var i, o = t();
                                try {
                                    i = o.call(r.$data, e)
                                } finally {
                                    !0 !== i && (n.preventDefault ? n.preventDefault() : n.returnValue=!1)
                                }
                            })
                        }
                    }, g.bindingHandlers.text = {
                        init: function() {
                            return {
                                controlsDescendantBindings: !0
                            }
                        },
                        update: function(e, t) {
                            g.utils.setTextContent(e, t())
                        }
                    }, g.virtualElements.allowedBindings.text=!0, function() {
                        if (s && s.navigator)
                            var e = function(e) {
                                if (e)
                                    return parseFloat(e[1])
                                }, t = s.opera && s.opera.version && parseInt(s.opera.version()), n = s.navigator.userAgent, i = e(n.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)), r = e(n.match(/Firefox\/([^ ]*)/));
                        if (g.utils.ieVersion < 10)
                            var o = g.utils.domData.nextKey(), l = g.utils.domData.nextKey(), u = function(e) {
                                var t = this.activeElement, n = t && g.utils.domData.get(t, l);
                                n && n(e)
                            }, c = function(e, t) {
                                var n = e.ownerDocument;
                                g.utils.domData.get(n, o) || (g.utils.domData.set(n, o, !0), g.utils.registerEventHandler(n, "selectionchange", u)), g.utils.domData.set(e, l, t)
                            };
                        g.bindingHandlers.textInput = {
                            init: function(e, n, o) {
                                var s, l, u = e.value, p = function(t) {
                                    clearTimeout(s), l = s = a;
                                    var i = e.value;
                                    u !== i && (t && (e._ko_textInputProcessedEvent = t.type), u = i, g.expressionRewriting.writeValueToProperty(n(), o, "textInput", i))
                                }, d = function(t) {
                                    if (!s) {
                                        l = e.value;
                                        var n = p.bind(e, {
                                            type: t.type
                                        });
                                        s = g.utils.setTimeout(n, 4)
                                    }
                                }, f = 9 == g.utils.ieVersion ? d: p, h = function() {
                                    var t = g.utils.unwrapObservable(n());
                                    if (null !== t && t !== a || (t = ""), l !== a && t === l)
                                        return void g.utils.setTimeout(h, 4);
                                    e.value !== t && (u = t, e.value = t)
                                }, m = function(t, n) {
                                    g.utils.registerEventHandler(e, t, n)
                                };
                                g.bindingHandlers.textInput._forceUpdateOn ? g.utils.arrayForEach(g.bindingHandlers.textInput._forceUpdateOn, function(e) {
                                    "after" == e.slice(0, 5) ? m(e.slice(5), d) : m(e, p)
                                }) : g.utils.ieVersion < 10 ? (m("propertychange", function(e) {
                                    "value" === e.propertyName && f(e)
                                }), 8 == g.utils.ieVersion && (m("keyup", p), m("keydown", p)), g.utils.ieVersion >= 8 && (c(e, f), m("dragend", d))) : (m("input", p), i < 5 && "textarea" === g.utils.tagNameLower(e) ? (m("keydown", d), m("paste", d), m("cut", d)) : t < 11 ? m("keydown", d) : r < 4 && (m("DOMAutoComplete", p), m("dragdrop", p), m("drop", p))), m("change", p), g.computed(h, null, {
                                    disposeWhenNodeIsRemoved: e
                                })
                            }
                        }, g.expressionRewriting.twoWayBindings.textInput=!0, g.bindingHandlers.textinput = {
                            preprocess: function(e, t, n) {
                                n("textInput", e)
                            }
                        }
                    }(), g.bindingHandlers.uniqueName = {
                        init: function(e, t) {
                            if (t()) {
                                var n = "ko_unique_" + ++g.bindingHandlers.uniqueName.currentIndex;
                                g.utils.setElementName(e, n)
                            }
                        }
                    }, g.bindingHandlers.uniqueName.currentIndex = 0, g.bindingHandlers.value = {
                        after: ["options", "foreach"],
                        init: function(e, t, n) {
                            if ("input" == e.tagName.toLowerCase() && ("checkbox" == e.type || "radio" == e.type))
                                return void g.applyBindingAccessorsToNode(e, {
                                checkedValue: t
                            });
                            var i = ["change"], r = n.get("valueUpdate"), o=!1, a = null;
                            r && ("string" == typeof r && (r = [r]), g.utils.arrayPushAll(i, r), i = g.utils.arrayGetDistinctValues(i));
                            var s = function() {
                                a = null, o=!1;
                                var i = t(), r = g.selectExtensions.readValue(e);
                                g.expressionRewriting.writeValueToProperty(i, n, "value", r)
                            };
                            g.utils.ieVersion && "input" == e.tagName.toLowerCase() && "text" == e.type && "off" != e.autocomplete && (!e.form || "off" != e.form.autocomplete)&&-1 == g.utils.arrayIndexOf(i, "propertychange") && (g.utils.registerEventHandler(e, "propertychange", function() {
                                o=!0
                            }), g.utils.registerEventHandler(e, "focus", function() {
                                o=!1
                            }), g.utils.registerEventHandler(e, "blur", function() {
                                o && s()
                            })), g.utils.arrayForEach(i, function(t) {
                                var n = s;
                                g.utils.stringStartsWith(t, "after") && (n = function() {
                                    a = g.selectExtensions.readValue(e), g.utils.setTimeout(s, 0)
                                }, t = t.substring("after".length)), g.utils.registerEventHandler(e, t, n)
                            });
                            var l = function() {
                                var i = g.utils.unwrapObservable(t()), r = g.selectExtensions.readValue(e);
                                if (null !== a && i === a)
                                    return void g.utils.setTimeout(l, 0);
                                if (i !== r)
                                    if ("select" === g.utils.tagNameLower(e)) {
                                        var o = n.get("valueAllowUnset"), s = function() {
                                            g.selectExtensions.writeValue(e, i, o)
                                        };
                                        s(), o || i === g.selectExtensions.readValue(e) ? g.utils.setTimeout(s, 0) : g.dependencyDetection.ignore(g.utils.triggerEvent, null, [e, "change"])
                                    } else 
                                        g.selectExtensions.writeValue(e, i)
                            };
                            g.computed(l, null, {
                                disposeWhenNodeIsRemoved: e
                            })
                        },
                        update: function() {}
                    }, g.expressionRewriting.twoWayBindings.value=!0, g.bindingHandlers.visible = {
                        update: function(e, t) {
                            var n = g.utils.unwrapObservable(t()), i=!("none" == e.style.display);
                            n&&!i ? e.style.display = "" : !n && i && (e.style.display = "none")
                        }
                    }, function(e) {
                        g.bindingHandlers[e] = {
                            init: function(t, n, i, r, o) {
                                var a = function() {
                                    var t = {};
                                    return t[e] = n(), t
                                };
                                return g.bindingHandlers.event.init.call(this, t, a, i, r, o)
                            }
                        }
                    }("click"), g.templateEngine = function() {}, g.templateEngine.prototype.renderTemplateSource = function(e, t, n, i) {
                        throw new Error("Override renderTemplateSource")
                    }, g.templateEngine.prototype.createJavaScriptEvaluatorBlock = function(e) {
                        throw new Error("Override createJavaScriptEvaluatorBlock")
                    }, g.templateEngine.prototype.makeTemplateSource = function(e, t) {
                        if ("string" == typeof e) {
                            t = t || l;
                            var n = t.getElementById(e);
                            if (!n)
                                throw new Error("Cannot find template with ID " + e);
                            return new g.templateSources.domElement(n)
                        }
                        if (1 == e.nodeType || 8 == e.nodeType)
                            return new g.templateSources.anonymousTemplate(e);
                        throw new Error("Unknown template type: " + e)
                    }, g.templateEngine.prototype.renderTemplate = function(e, t, n, i) {
                        var r = this.makeTemplateSource(e, i);
                        return this.renderTemplateSource(r, t, n, i)
                    }, g.templateEngine.prototype.isTemplateRewritten = function(e, t) {
                        return !1 === this.allowTemplateRewriting || this.makeTemplateSource(e, t).data("isRewritten")
                    }, g.templateEngine.prototype.rewriteTemplate = function(e, t, n) {
                        var i = this.makeTemplateSource(e, n), r = t(i.text());
                        i.text(r), i.data("isRewritten", !0)
                    }, g.exportSymbol("templateEngine", g.templateEngine), g.templateRewriting = function() {
                        function e(e) {
                            for (var t = g.expressionRewriting.bindingRewriteValidators, n = 0; n < e.length; n++) {
                                var i = e[n].key;
                                if (t.hasOwnProperty(i)) {
                                    var r = t[i];
                                    if ("function" == typeof r) {
                                        var o = r(e[n].value);
                                        if (o)
                                            throw new Error(o)
                                        } else if (!r)
                                        throw new Error("This template engine does not support the '" + i + "' binding within its templates")
                                    }
                            }
                        }
                        function t(t, n, i, r) {
                            var o = g.expressionRewriting.parseObjectLiteral(t);
                            e(o);
                            var a = g.expressionRewriting.preProcessBindings(o, {
                                valueAccessors: !0
                            }), s = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a + " } })()},'" + i.toLowerCase() + "')";
                            return r.createJavaScriptEvaluatorBlock(s) + n
                        }
                        var n = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, i = /<!--\s*ko\b\s*([\s\S]*?)\s*-->/g;
                        return {
                            ensureTemplateIsRewritten: function(e, t, n) {
                                t.isTemplateRewritten(e, n) || t.rewriteTemplate(e, function(e) {
                                    return g.templateRewriting.memoizeBindingAttributeSyntax(e, t)
                                }, n)
                            },
                            memoizeBindingAttributeSyntax: function(e, r) {
                                return e.replace(n, function() {
                                    return t(arguments[4], arguments[1], arguments[2], r)
                                }).replace(i, function() {
                                    return t(arguments[1], "\x3c!-- ko --\x3e", "#comment", r)
                                })
                            },
                            applyMemoizedBindingsToNextSibling: function(e, t) {
                                return g.memoization.memoize(function(n, i) {
                                    var r = n.nextSibling;
                                    r && r.nodeName.toLowerCase() === t && g.applyBindingAccessorsToNode(r, e, i)
                                })
                            }
                        }
                    }(), g.exportSymbol("__tr_ambtns", g.templateRewriting.applyMemoizedBindingsToNextSibling), function() {
                        function e(e) {
                            return g.utils.domData.get(e, i) || {}
                        }
                        function t(e, t) {
                            g.utils.domData.set(e, i, t)
                        }
                        g.templateSources = {};
                        g.templateSources.domElement = function(e) {
                            if (this.domElement = e, e) {
                                var t = g.utils.tagNameLower(e);
                                this.templateType = "script" === t ? 1 : "textarea" === t ? 2 : "template" == t && e.content && 11 === e.content.nodeType ? 3 : 4
                            }
                        }, g.templateSources.domElement.prototype.text = function() {
                            var e = 1 === this.templateType ? "text": 2 === this.templateType ? "value": "innerHTML";
                            if (0 == arguments.length)
                                return this.domElement[e];
                            var t = arguments[0];
                            "innerHTML" === e ? g.utils.setHtml(this.domElement, t) : this.domElement[e] = t
                        };
                        var n = g.utils.domData.nextKey() + "_";
                        g.templateSources.domElement.prototype.data = function(e) {
                            if (1 === arguments.length)
                                return g.utils.domData.get(this.domElement, n + e);
                            g.utils.domData.set(this.domElement, n + e, arguments[1])
                        };
                        var i = g.utils.domData.nextKey();
                        g.templateSources.domElement.prototype.nodes = function() {
                            var n = this.domElement;
                            if (0 == arguments.length) {
                                return e(n).containerData || (3 === this.templateType ? n.content : 4 === this.templateType ? n : a)
                            }
                            t(n, {
                                containerData: arguments[0]
                            })
                        }, g.templateSources.anonymousTemplate = function(e) {
                            this.domElement = e
                        }, g.templateSources.anonymousTemplate.prototype = new g.templateSources.domElement, g.templateSources.anonymousTemplate.prototype.constructor = g.templateSources.anonymousTemplate, g.templateSources.anonymousTemplate.prototype.text = function() {
                            if (0 == arguments.length) {
                                var n = e(this.domElement);
                                return n.textData === a && n.containerData && (n.textData = n.containerData.innerHTML), n.textData
                            }
                            var i = arguments[0];
                            t(this.domElement, {
                                textData: i
                            })
                        }, g.exportSymbol("templateSources", g.templateSources), g.exportSymbol("templateSources.domElement", g.templateSources.domElement), g.exportSymbol("templateSources.anonymousTemplate", g.templateSources.anonymousTemplate)
                    }(), function() {
                        function e(e, t, n) {
                            for (var i, r = e, o = g.virtualElements.nextSibling(t); r && (i = r) !== o;)
                                r = g.virtualElements.nextSibling(i), n(i, r)
                        }
                        function t(t, n) {
                            if (t.length) {
                                var i = t[0], r = t[t.length - 1], o = i.parentNode, a = g.bindingProvider.instance, s = a.preprocessNode;
                                if (s) {
                                    if (e(i, r, function(e, t) {
                                        var n = e.previousSibling, o = s.call(a, e);
                                        o && (e === i && (i = o[0] || t), e === r && (r = o[o.length - 1] || n))
                                    }), t.length = 0, !i)
                                        return;
                                    i === r ? t.push(i) : (t.push(i, r), g.utils.fixUpContinuousNodeArray(t, o))
                                }
                                e(i, r, function(e) {
                                    1 !== e.nodeType && 8 !== e.nodeType || g.applyBindings(n, e)
                                }), e(i, r, function(e) {
                                    1 !== e.nodeType && 8 !== e.nodeType || g.memoization.unmemoizeDomNodeAndDescendants(e, [n])
                                }), g.utils.fixUpContinuousNodeArray(t, o)
                            }
                        }
                        function n(e) {
                            return e.nodeType ? e : e.length > 0 ? e[0] : null
                        }
                        function i(e, i, r, o, a) {
                            a = a || {};
                            var l = e && n(e), u = (l || r || {}).ownerDocument, c = a.templateEngine || s;
                            g.templateRewriting.ensureTemplateIsRewritten(r, c, u);
                            var p = c.renderTemplate(r, o, a, u);
                            if ("number" != typeof p.length || p.length > 0 && "number" != typeof p[0].nodeType)
                                throw new Error("Template engine must return an array of DOM nodes");
                            var d=!1;
                            switch (i) {
                            case"replaceChildren":
                                g.virtualElements.setDomNodeChildren(e, p), d=!0;
                                break;
                            case"replaceNode":
                                g.utils.replaceDomNodes(e, p), d=!0;
                                break;
                            case"ignoreTargetNode":
                                break;
                            default:
                                throw new Error("Unknown renderMode: " + i)
                            }
                            return d && (t(p, o), a.afterRender && g.dependencyDetection.ignore(a.afterRender, null, [p, o.$data])), p
                        }
                        function r(e, t, n) {
                            return g.isObservable(e) ? e() : "function" == typeof e ? e(t, n) : e
                        }
                        function o(e, t) {
                            var n = g.utils.domData.get(e, l);
                            n && "function" == typeof n.dispose && n.dispose(), g.utils.domData.set(e, l, t && t.isActive() ? t : a)
                        }
                        var s;
                        g.setTemplateEngine = function(e) {
                            if (e != a&&!(e instanceof g.templateEngine))
                                throw new Error("templateEngine must inherit from ko.templateEngine");
                            s = e
                        }, g.renderTemplate = function(e, t, o, l, u) {
                            if (o = o || {}, (o.templateEngine || s) == a)
                                throw new Error("Set a template engine before calling renderTemplate");
                            if (u = u || "replaceChildren", l) {
                                var c = n(l), p = function() {
                                    return !c ||!g.utils.domNodeIsAttachedToDocument(c)
                                }, d = c && "replaceNode" == u ? c.parentNode: c;
                                return g.dependentObservable(function() {
                                    var a = t && t instanceof g.bindingContext ? t: new g.bindingContext(t, null, null, null, {
                                        exportDependencies: !0
                                    }), s = r(e, a.$data, a), p = i(l, u, s, a, o);
                                    "replaceNode" == u && (l = p, c = n(l))
                                }, null, {
                                    disposeWhen: p,
                                    disposeWhenNodeIsRemoved: d
                                })
                            }
                            return g.memoization.memoize(function(n) {
                                g.renderTemplate(e, t, o, n, "replaceNode")
                            })
                        }, g.renderTemplateForEach = function(e, n, o, s, l) {
                            var u, c = function(t, n) {
                                return u = l.createChildContext(t, o.as, function(e) {
                                    e.$index = n
                                }), i(null, "ignoreTargetNode", r(e, t, u), u, o)
                            }, p = function(e, n, i) {
                                t(n, u), o.afterRender && o.afterRender(n, e), u = null
                            };
                            return g.dependentObservable(function() {
                                var e = g.utils.unwrapObservable(n) || [];
                                "undefined" == typeof e.length && (e = [e]);
                                var t = g.utils.arrayFilter(e, function(e) {
                                    return o.includeDestroyed || e === a || null === e ||!g.utils.unwrapObservable(e._destroy)
                                });
                                g.dependencyDetection.ignore(g.utils.setDomNodeChildrenFromArrayMapping, null, [s, t, c, o, p])
                            }, null, {
                                disposeWhenNodeIsRemoved: s
                            })
                        };
                        var l = g.utils.domData.nextKey();
                        g.bindingHandlers.template = {
                            init: function(e, t) {
                                var n = g.utils.unwrapObservable(t());
                                if ("string" == typeof n || n.name)
                                    g.virtualElements.emptyNode(e);
                                else if ("nodes"in n) {
                                    var i = n.nodes || [];
                                    if (g.isObservable(i))
                                        throw new Error('The "nodes" option must be a plain, non-observable array.');
                                    var r = g.utils.moveCleanedNodesToContainerElement(i);
                                    new g.templateSources.anonymousTemplate(e).nodes(r)
                                } else {
                                    var o = g.virtualElements.childNodes(e), r = g.utils.moveCleanedNodesToContainerElement(o);
                                    new g.templateSources.anonymousTemplate(e).nodes(r)
                                }
                                return {
                                    controlsDescendantBindings: !0
                                }
                            },
                            update: function(e, t, n, i, r) {
                                var a, s = t(), l = g.utils.unwrapObservable(s), u=!0, c = null;
                                if ("string" == typeof l ? (a = s, l = {}) : (a = l.name, "if"in l && (u = g.utils.unwrapObservable(l["if"])), u && "ifnot"in l && (u=!g.utils.unwrapObservable(l.ifnot))), "foreach"in l) {
                                    var p = u && l.foreach || [];
                                    c = g.renderTemplateForEach(a || e, p, l, e, r)
                                } else if (u) {
                                    var d = "data"in l ? r.createStaticChildContext(l.data, l.as): r;
                                    c = g.renderTemplate(a || e, d, l, e)
                                } else 
                                    g.virtualElements.emptyNode(e);
                                o(e, c)
                            }
                        }, g.expressionRewriting.bindingRewriteValidators.template = function(e) {
                            var t = g.expressionRewriting.parseObjectLiteral(e);
                            return 1 == t.length && t[0].unknown ? null : g.expressionRewriting.keyValueArrayContainsKey(t, "name") ? null : "This template engine does not support anonymous templates nested within its templates"
                        }, g.virtualElements.allowedBindings.template=!0
                    }(), g.exportSymbol("setTemplateEngine", g.setTemplateEngine), g.exportSymbol("renderTemplate", g.renderTemplate), g.utils.findMovesInArrayComparison = function(e, t, n) {
                        if (e.length && t.length) {
                            var i, r, o, a, s;
                            for (i = r = 0; (!n || i < n) && (a = e[r]); ++r) {
                                for (o = 0; s = t[o]; ++o)
                                    if (a.value === s.value) {
                                        a.moved = s.index, s.moved = a.index, t.splice(o, 1), i = o = 0;
                                        break
                                    }
                                i += o
                            }
                        }
                    }, g.utils.compareArrays = function() {
                        function e(e, r, o) {
                            return o = "boolean" == typeof o ? {
                                dontLimitMoves: o
                            } : o || {}, e = e || [], r = r || [], e.length < r.length ? t(e, r, n, i, o) : t(r, e, i, n, o)
                        }
                        function t(e, t, n, i, r) {
                            var o, a, s, l, u, c, p = Math.min, d = Math.max, f = [], h = e.length, m = t.length, y = m - h || 1, v = h + m + 1;
                            for (o = 0; o <= h; o++)
                                for (l = s, f.push(s = []), u = p(m, o + y), c = d(0, o - 1), a = c; a <= u; a++)
                                    if (a)
                                        if (o)
                                            if (e[o - 1] === t[a - 1])
                                                s[a] = l[a - 1];
                                            else {
                                                var b = l[a] || v, w = s[a - 1] || v;
                                                s[a] = p(b, w) + 1
                                            } else 
                                                s[a] = a + 1;
                            else 
                                s[a] = o + 1;
                            var x, _ = [], S = [], k = [];
                            for (o = h, a = m; o || a;)
                                x = f[o][a] - 1, a && x === f[o][a - 1] ? S.push(_[_.length] = {
                                    status: n,
                                    value: t[--a],
                                    index: a
                                }) : o && x === f[o - 1][a] ? k.push(_[_.length] = {
                                    status: i,
                                    value: e[--o],
                                    index: o
                                }) : (--a, --o, r.sparse || _.push({
                                    status: "retained",
                                    value: t[a]
                                }));
                            return g.utils.findMovesInArrayComparison(k, S, !r.dontLimitMoves && 10 * h), _.reverse()
                        }
                        var n = "added", i = "deleted";
                        return e
                    }(), g.exportSymbol("utils.compareArrays", g.utils.compareArrays), function() {
                        function e(e, t, n, i, r) {
                            var o = [], s = g.dependentObservable(function() {
                                var a = t(n, r, g.utils.fixUpContinuousNodeArray(o, e)) || [];
                                o.length > 0 && (g.utils.replaceDomNodes(o, a), i && g.dependencyDetection.ignore(i, null, [n, a, r])), o.length = 0, g.utils.arrayPushAll(o, a)
                            }, null, {
                                disposeWhenNodeIsRemoved: e,
                                disposeWhen: function() {
                                    return !g.utils.anyDomNodeIsAttachedToDocument(o)
                                }
                            });
                            return {
                                mappedNodes: o,
                                dependentObservable: s.isActive() ? s: a
                            }
                        }
                        var t = g.utils.domData.nextKey(), n = g.utils.domData.nextKey();
                        g.utils.setDomNodeChildrenFromArrayMapping = function(i, r, o, s, l) {
                            function u(e, t) {
                                p = m[t], x !== t && (T[e] = p), p.indexObservable(x++), g.utils.fixUpContinuousNodeArray(p.mappedNodes, i), b.push(p), S.push(p)
                            }
                            function c(e, t) {
                                if (e)
                                    for (var n = 0, i = t.length; n < i; n++)
                                        t[n] && g.utils.arrayForEach(t[n].mappedNodes, function(i) {
                                            e(i, n, t[n].arrayEntry)
                                        })
                            }
                            r = r || [], s = s || {};
                            for (var p, d, f, h = g.utils.domData.get(i, t) === a, m = g.utils.domData.get(i, t) || [], y = g.utils.arrayMap(m, function(e) {
                                return e.arrayEntry
                            }), v = g.utils.compareArrays(y, r, s.dontLimitMoves), b = [], w = 0, x = 0, _ = [], S = [], k = [], T = [], E = [], C = 0; d = v[C]; C++)
                                switch (f = d.moved, d.status) {
                                case"deleted":
                                    f === a && (p = m[w], p.dependentObservable && (p.dependentObservable.dispose(), p.dependentObservable = a), g.utils.fixUpContinuousNodeArray(p.mappedNodes, i).length && (s.beforeRemove && (b.push(p), S.push(p), p.arrayEntry === n ? p = null : k[C] = p), p && _.push.apply(_, p.mappedNodes))), w++;
                                    break;
                                case"retained":
                                    u(C, w++);
                                    break;
                                case"added":
                                    f !== a ? u(C, f) : (p = {
                                        arrayEntry: d.value,
                                        indexObservable: g.observable(x++)
                                    }, b.push(p), S.push(p), h || (E[C] = p))
                                }
                            g.utils.domData.set(i, t, b), c(s.beforeMove, T), g.utils.arrayForEach(_, s.beforeRemove ? g.cleanNode : g.removeNode);
                            for (var D, N, C = 0, A = g.virtualElements.firstChild(i); p = S[C]; C++) {
                                p.mappedNodes || g.utils.extend(p, e(i, o, p.arrayEntry, l, p.indexObservable));
                                for (var O = 0; N = p.mappedNodes[O]; A = N.nextSibling, D = N, O++)
                                    N !== A && g.virtualElements.insertAfter(i, N, D);
                                !p.initialized && l && (l(p.arrayEntry, p.mappedNodes, p.indexObservable), p.initialized=!0)
                            }
                            for (c(s.beforeRemove, k)
                                , C = 0;
                            C < k.length;
                            ++C)k[C] && (k[C].arrayEntry = n);
                            c(s.afterMove, T), c(s.afterAdd, E)
                        }
                    }(), g.exportSymbol("utils.setDomNodeChildrenFromArrayMapping", g.utils.setDomNodeChildrenFromArrayMapping), g.nativeTemplateEngine = function() {
                        this.allowTemplateRewriting=!1
                    }, g.nativeTemplateEngine.prototype = new g.templateEngine, g.nativeTemplateEngine.prototype.constructor = g.nativeTemplateEngine, g.nativeTemplateEngine.prototype.renderTemplateSource = function(e, t, n, i) {
                        var r=!(g.utils.ieVersion < 9), o = r ? e.nodes : null, a = o ? e.nodes() : null;
                        if (a)
                            return g.utils.makeArray(a.cloneNode(!0).childNodes);
                        var s = e.text();
                        return g.utils.parseHtmlFragment(s, i)
                    }, g.nativeTemplateEngine.instance = new g.nativeTemplateEngine, g.setTemplateEngine(g.nativeTemplateEngine.instance), g.exportSymbol("nativeTemplateEngine", g.nativeTemplateEngine), function() {
                        g.jqueryTmplTemplateEngine = function() {
                            function e() {
                                if (n < 2)
                                    throw new Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.")
                            }
                            function t(e, t, n) {
                                return c.tmpl(e, t, n)
                            }
                            var n = this.jQueryTmplVersion = function() {
                                if (!c ||!c.tmpl)
                                    return 0;
                                try {
                                    if (c.tmpl.tag.tmpl.open.toString().indexOf("__") >= 0)
                                        return 2
                                } catch (e) {}
                                return 1
                            }();
                            this.renderTemplateSource = function(n, i, r, o) {
                                o = o || l, r = r || {}, e();
                                var a = n.data("precompiled");
                                if (!a) {
                                    var s = n.text() || "";
                                    s = "{{ko_with $item.koBindingContext}}" + s + "{{/ko_with}}", a = c.template(null, s), n.data("precompiled", a)
                                }
                                var u = [i.$data], p = c.extend({
                                    koBindingContext: i
                                }, r.templateOptions), d = t(a, u, p);
                                return d.appendTo(o.createElement("div")), c.fragments = {}, d
                            }, this.createJavaScriptEvaluatorBlock = function(e) {
                                return "{{ko_code ((function() { return " + e + " })()) }}"
                            }, this.addTemplate = function(e, t) {
                                l.write("<script type='text/html' id='" + e + "'>" + t + "<\/script>")
                            }, n > 0 && (c.tmpl.tag.ko_code = {
                                open: "__.push($1 || '');"
                            }, c.tmpl.tag.ko_with = {
                                open: "with($1) {",
                                close: "} "
                            })
                        }, g.jqueryTmplTemplateEngine.prototype = new g.templateEngine, g.jqueryTmplTemplateEngine.prototype.constructor = g.jqueryTmplTemplateEngine;
                        var e = new g.jqueryTmplTemplateEngine;
                        e.jQueryTmplVersion > 0 && g.setTemplateEngine(e), g.exportSymbol("jqueryTmplTemplateEngine", g.jqueryTmplTemplateEngine)
                    }()
                })
            }()
        }()
    }).call(t, n(2)(e))
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    e.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}, function(e, t, n) {
    var i, r;
    !function(t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        } : n(t)
    }("undefined" != typeof window ? window : this, function(n, o) {
        function a(e) {
            var t=!!e && "length"in e && e.length, n = ge.type(e);
            return "function" !== n&&!ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function s(e, t, n) {
            if (ge.isFunction(t))
                return ge.grep(e, function(e, i) {
                    return !!t.call(e, i, e) !== n
                });
            if (t.nodeType)
                return ge.grep(e, function(e) {
                    return e === t !== n
                });
            if ("string" == typeof t) {
                if (Ee.test(t))
                    return ge.filter(t, e, n);
                t = ge.filter(t, e)
            }
            return ge.grep(e, function(e) {
                return ge.inArray(e, t)>-1 !== n
            })
        }
        function l(e, t) {
            do {
                e = e[t]
            }
            while (e && 1 !== e.nodeType);
            return e
        }
        function u(e) {
            var t = {};
            return ge.each(e.match(Oe) || [], function(e, n) {
                t[n]=!0
            }), t
        }
        function c() {
            se.addEventListener ? (se.removeEventListener("DOMContentLoaded", p), n.removeEventListener("load", p)) : (se.detachEvent("onreadystatechange", p), n.detachEvent("onload", p))
        }
        function p() {
            (se.addEventListener || "load" === n.event.type || "complete" === se.readyState) && (c(), ge.ready())
        }
        function d(e, t, n) {
            if (n === undefined && 1 === e.nodeType) {
                var i = "data-" + t.replace(Pe, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : + n + "" === n?+n : Me.test(n) ? ge.parseJSON(n) : n)
                    } catch (r) {}
                    ge.data(e, t, n)
                } else 
                    n = undefined
            }
            return n
        }
        function f(e) {
            var t;
            for (t in e)
                if (("data" !== t ||!ge.isEmptyObject(e[t])) && "toJSON" !== t)
                    return !1;
            return !0
        }
        function h(e, t, n, i) {
            if (Ie(e)) {
                var r, o, a = ge.expando, s = e.nodeType, l = s ? ge.cache: e, u = s ? e[a]: e[a] && a;
                if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof t)
                    return u || (u = s ? e[a] = ae.pop() || ge.guid++ : a), l[u] || (l[u] = s ? {} : {
                        toJSON: ge.noop
                    }), "object" != typeof t && "function" != typeof t || (i ? l[u] = ge.extend(l[u], t) : l[u].data = ge.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[ge.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[ge.camelCase(t)]) : r = o, r
            }
        }
        function m(e, t, n) {
            if (Ie(e)) {
                var i, r, o = e.nodeType, a = o ? ge.cache: e, s = o ? e[ge.expando]: ge.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        ge.isArray(t) ? t = t.concat(ge.map(t, ge.camelCase)) : t in i ? t = [t] : (t = ge.camelCase(t), t = t in i ? [t] : t.split(" ")), r = t.length;
                        for (; r--;)
                            delete i[t[r]];
                        if (n?!f(i) : !ge.isEmptyObject(i)
                            )return 
                    }(n || (delete a[s].data, f(a[s]))) && (o ? ge.cleanData([e], !0) : me.deleteExpando || a != a.window ? delete a[s] : a[s] = undefined)
                }
            }
        }
        function g(e, t, n, i) {
            var r, o = 1, a = 20, s = i ? function() {
                return i.cur()
            }
            : function() {
                return ge.css(e, t, "")
            }, l = s(), u = n && n[3] || (ge.cssNumber[t] ? "" : "px"), c = (ge.cssNumber[t] || "px" !== u&&+l) && Be.exec(ge.css(e, t));
            if (c && c[3] !== u) {
                u = u || c[3], n = n || [], c =+ l || 1;
                do {
                    o = o || ".5", c/=o, ge.style(e, t, c + u)
                }
                while (o !== (o = s() / l) && 1 !== o&&--a)
                }
            return n && (c =+ c||+l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : + n[2], i && (i.unit = u, i.start = c, i.end = r)), r
        }
        function y(e) {
            var t = Qe.split("|"), n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;)
                    n.createElement(t.pop());
            return n
        }
        function v(e, t) {
            var n, i, r = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*"): "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*"): undefined;
            if (!o)
                for (o = [], n = e.childNodes || e; null != (i = n[r]); r++)
                    !t || ge.nodeName(i, t) ? o.push(i) : ge.merge(o, v(i, t));
            return t === undefined || t && ge.nodeName(e, t) ? ge.merge([e], o) : o
        }
        function b(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++)
                ge._data(n, "globalEval", !t || ge._data(t[i], "globalEval"))
        }
        function w(e) {
            ze.test(e.type) && (e.defaultChecked = e.checked)
        }
        function x(e, t, n, i, r) {
            for (var o, a, s, l, u, c, p, d = e.length, f = y(t), h = [], m = 0; m < d; m++)
                if ((a = e[m]) || 0 === a)
                    if ("object" === ge.type(a))
                        ge.merge(h, a.nodeType ? [a] : a);
                    else if (Ke.test(a)) {
                        for (l = l || f.appendChild(t.createElement("div")), u = (Ve.exec(a) || ["", ""])[1].toLowerCase(), p = Ue[u] || Ue._default, l.innerHTML = p[1] + ge.htmlPrefilter(a) + p[2], o = p[0]; o--;)
                            l = l.lastChild;
                            if (!me.leadingWhitespace && $e.test(a) && h.push(t.createTextNode($e.exec(a)[0])), !me.tbody)
                                for (a = "table" !== u || Ge.test(a) ? "<table>" !== p[1] || Ge.test(a) ? 0 : l : l.firstChild, o = a && a.childNodes.length; o--;)
                                    ge.nodeName(c = a.childNodes[o], "tbody")&&!c.childNodes.length && a.removeChild(c);
                                    for (ge.merge(h, l.childNodes), l.textContent = ""; l.firstChild;)
                                        l.removeChild(l.firstChild);
                                        l = f.lastChild
                    } else 
                        h.push(t.createTextNode(a));
            for (l && f.removeChild(l), me.appendChecked || ge.grep(v(h, "input"), w), m = 0; a = h[m++];)
                if (i && ge.inArray(a, i)>-1)
                    r && r.push(a);
                else if (s = ge.contains(a.ownerDocument, a), l = v(f.appendChild(a), "script"), s && b(l), n)
                    for (o = 0; a = l[o++];)
                        We.test(a.type || "") && n.push(a);
            return l = null, f
        }
        function _() {
            return !0
        }
        function S() {
            return !1
        }
        function k() {
            try {
                return se.activeElement
            } catch (e) {}
        }
        function T(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
                "string" != typeof n && (i = i || n, n = undefined);
                for (s in t)
                    T(e, s, n, i, t[s], o);
                return e
            }
            if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r)
                r = S;
            else if (!r)
                return e;
            return 1 === o && (a = r, r = function(e) {
                return ge().off(e), a.apply(this, arguments)
            }, r.guid = a.guid || (a.guid = ge.guid++)), e.each(function() {
                ge.event.add(this, t, r, i, n)
            })
        }
        function E(e, t) {
            return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function C(e) {
            return e.type = (null !== ge.find.attr(e, "type")) + "/" + e.type, e
        }
        function D(e) {
            var t = at.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }
        function N(e, t) {
            if (1 === t.nodeType && ge.hasData(e)) {
                var n, i, r, o = ge._data(e), a = ge._data(t, o), s = o.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, r = s[n].length; i < r; i++)
                            ge.event.add(t, n, s[n][i])
                        }
                a.data && (a.data = ge.extend({}, a.data))
            }
        }
        function A(e, t) {
            var n, i, r;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !me.noCloneEvent && t[ge.expando]) {
                    r = ge._data(t);
                    for (i in r.events)
                        ge.removeEvent(t, i, r.handle);
                    t.removeAttribute(ge.expando)
                }
                "script" === n && t.text !== e.text ? (C(t).text = e.text, D(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), me.html5Clone && e.innerHTML&&!ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && ze.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
            }
        }
        function O(e, t, n, i) {
            t = ue.apply([], t);
            var r, o, a, s, l, u, c = 0, p = e.length, d = p - 1, f = t[0], h = ge.isFunction(f);
            if (h || p > 1 && "string" == typeof f&&!me.checkClone && ot.test(f))
                return e.each(function(r) {
                    var o = e.eq(r);
                    h && (t[0] = f.call(this, r, o.html())), O(o, t, n, i)
                });
            if (p && (u = x(t, e[0].ownerDocument, !1, e, i), r = u.firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
                for (s = ge.map(v(u, "script"), C), a = s.length; c < p; c++)
                    o = u, c !== d && (o = ge.clone(o, !0, !0), a && ge.merge(s, v(o, "script"))), n.call(e[c], o, c);
                if (a)
                    for (l = s[s.length - 1].ownerDocument, ge.map(s, D), c = 0; c < a; c++)
                        o = s[c], We.test(o.type || "")&&!ge._data(o, "globalEval") && ge.contains(l, o) && (o.src ? ge._evalUrl && ge._evalUrl(o.src) : ge.globalEval((o.text || o.textContent || o.innerHTML || "").replace(st, "")));
                u = r = null
            }
            return e
        }
        function j(e, t, n) {
            for (var i, r = t ? ge.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                n || 1 !== i.nodeType || ge.cleanData(v(i)), i.parentNode && (n && ge.contains(i.ownerDocument, i) && b(v(i, "script")), i.parentNode.removeChild(i));
            return e
        }
        function q(e, t) {
            var n = ge(t.createElement(e)).appendTo(t.body), i = ge.css(n[0], "display");
            return n.detach(), i
        }
        function I(e) {
            var t = se, n = pt[e];
            return n || (n = q(e, t), "none" !== n && n || (ct = (ct || ge("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (ct[0].contentWindow || ct[0].contentDocument).document, t.write(), t.close(), n = q(e, t), ct.detach()), pt[e] = n), n
        }
        function M(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        function P(e) {
            if (e in Et)
                return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Tt.length; n--;)
                if ((e = Tt[n] + t)in Et)
                    return e
        }
        function F(e, t) {
            for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)
                i = e[a], i.style && (o[a] = ge._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Le(i) && (o[a] = ge._data(i, "olddisplay", I(i.nodeName)))) : (r = Le(i), (n && "none" !== n ||!r) && ge._data(i, "olddisplay", r ? n : ge.css(i, "display"))));
            for (a = 0; a < s; a++)
                i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none"));
            return e
        }
        function B(e, t, n) {
            var i = _t.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }
        function R(e, t, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2)
                "margin" === n && (a += ge.css(e, n + Re[o], !0, r)), i ? ("content" === n && (a -= ge.css(e, "padding" + Re[o], !0, r)), "margin" !== n && (a -= ge.css(e, "border" + Re[o] + "Width", !0, r))) : (a += ge.css(e, "padding" + Re[o], !0, r), "padding" !== n && (a += ge.css(e, "border" + Re[o] + "Width", !0, r)));
            return a
        }
        function L(e, t, n) {
            var i=!0, r = "width" === t ? e.offsetWidth : e.offsetHeight, o = gt(e), a = me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, o);
            if (r <= 0 || null == r) {
                if (r = yt(e, t, o), (r < 0 || null == r) && (r = e.style[t]), ft.test(r))
                    return r;
                i = a && (me.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
            }
            return r + R(e, t, n || (a ? "border" : "content"), i, o) + "px"
        }
        function H(e, t, n, i, r) {
            return new H.prototype.init(e, t, n, i, r)
        }
        function z() {
            return n.setTimeout(function() {
                Ct = undefined
            }), Ct = ge.now()
        }
        function V(e, t) {
            var n, i = {
                height: e
            }, r = 0;
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                n = Re[r], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }
        function W(e, t, n) {
            for (var i, r = (U.tweeners[t] || []).concat(U.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e))
                    return i
        }
        function $(e, t, n) {
            var i, r, o, a, s, l, u, c = this, p = {}, d = e.style, f = e.nodeType && Le(e), h = ge._data(e, "fxshow");
            n.queue || (s = ge._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, ge.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = ge.css(e, "display"), "inline" === ("none" === u ? ge._data(e, "olddisplay") || I(e.nodeName) : u) && "none" === ge.css(e, "float") && (me.inlineBlockNeedsLayout && "inline" !== I(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", me.shrinkWrapBlocks() || c.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (r = t[i], Nt.exec(r)) {
                    if (delete t[i], o = o || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r ||!h || h[i] === undefined)
                            continue;
                            f=!0
                    }
                    p[i] = h && h[i] || ge.style(e, i)
                } else 
                    u = undefined;
            if (ge.isEmptyObject(p))
                "inline" === ("none" === u ? I(e.nodeName) : u) && (d.display = u);
            else {
                h ? "hidden"in h && (f = h.hidden) : h = ge._data(e, "fxshow", {}), o && (h.hidden=!f), f ? ge(e).show() : c.done(function() {
                    ge(e).hide()
                }), c.done(function() {
                    var t;
                    ge._removeData(e, "fxshow");
                    for (t in p)
                        ge.style(e, t, p[t])
                });
                for (i in p)
                    a = W(f ? h[i] : 0, i, c), i in h || (h[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }
        function Q(e, t) {
            var n, i, r, o, a;
            for (n in e)
                if (i = ge.camelCase(n), r = t[i], o = e[n], ge.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = ge.cssHooks[i]) && "expand"in a) {
                    o = a.expand(o), delete e[i];
                    for (n in o)
                        n in e || (e[n] = o[n], t[n] = r)
                } else 
                    t[i] = r
        }
        function U(e, t, n) {
            var i, r, o = 0, a = U.prefilters.length, s = ge.Deferred().always(function() {
                delete l.elem
            }), l = function() {
                if (r)
                    return !1;
                for (var t = Ct || z(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, o = 1 - i, a = 0, l = u.tweens.length; a < l; a++)
                    u.tweens[a].run(o);
                return s.notifyWith(e, [u, o, n]), o < 1 && l ? n : (s.resolveWith(e, [u]), !1)
            }, u = s.promise({
                elem: e,
                props: ge.extend({}, t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Ct || z(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = ge.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0, i = t ? u.tweens.length: 0;
                    if (r)
                        return this;
                    for (r=!0; n < i; n++)
                        u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this
                }
            }), c = u.props;
            for (Q(c, u.opts.specialEasing);
            o < a;
            o++)if (i = U.prefilters[o].call(u, e, c, u.opts))
                return ge.isFunction(i.stop) && (ge._queueHooks(u.elem, u.opts.queue).stop = ge.proxy(i.stop, i)), i;
            return ge.map(c, W, u), ge.isFunction(u.opts.start) && u.opts.start.call(e, u), ge.fx.timer(ge.extend(l, {
                elem: e,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }
        function K(e) {
            return ge.attr(e, "class") || ""
        }
        function G(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, r = 0, o = t.toLowerCase().match(Oe) || [];
                if (ge.isFunction(n))
                    for (; i = o[r++];)
                        "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }
        function J(e, t, n, i) {
            function r(s) {
                var l;
                return o[s]=!0, ge.each(e[s] || [], function(e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || a || o[u] ? a?!(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {}, a = e === en;
            return r(t.dataTypes[0]) ||!o["*"] && r("*")
        }
        function X(e, t) {
            var n, i, r = ge.ajaxSettings.flatOptions || {};
            for (i in t)
                t[i] !== undefined && ((r[i] ? e : n || (n = {}))[i] = t[i]);
            return n && ge.extend(!0, e, n), e
        }
        function Y(e, t, n) {
            for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];)
                l.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (a in s)
                    if (s[a] && s[a].test(r)) {
                        l.unshift(a);
                        break
                    }
            if (l[0]in n)
                o = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    i || (i = a)
                }
                o = o || i
            }
            if (o)
                return o !== l[0] && l.unshift(o), n[o]
        }
        function Z(e, t, n, i) {
            var r, o, a, s, l, u = {}, c = e.dataTypes.slice();
            if (c[1])
                for (a in e.converters)
                    u[a.toLowerCase()] = e.converters[a];
            for (o = c.shift(); o;)
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                    if ("*" === o)
                        o = l;
                    else if ("*" !== l && l !== o) {
                        if (!(a = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if (s = r.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                                if (!0 !== a)
                                    if (a && e["throws"])
                                        t = a(t);
                                    else 
                                        try {
                                            t = a(t)
                                        } catch (p) {
                                            return {
                                                state: "parsererror",
                                                error: a ? p: "No conversion from " + l + " to " + o
                                            }
                                        }
                                    }
            return {
                state: "success",
                data: t
            }
        }
        function ee(e) {
            return e.style && e.style.display || ge.css(e, "display")
        }
        function te(e) {
            if (!ge.contains(e.ownerDocument || se, e))
                return !0;
            for (; e && 1 === e.nodeType;) {
                if ("none" === ee(e) || "hidden" === e.type)
                    return !0;
                e = e.parentNode
            }
            return !1
        }
        function ne(e, t, n, i) {
            var r;
            if (ge.isArray(t))
                ge.each(t, function(t, r) {
                    n || an.test(e) ? i(e, r) : ne(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                });
            else if (n || "object" !== ge.type(t))
                i(e, t);
            else 
                for (r in t)
                    ne(e + "[" + r + "]", t[r], n, i)
        }
        function ie() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        function re() {
            try {
                return new n.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }
        function oe(e) {
            return ge.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var ae = [], se = n.document, le = ae.slice, ue = ae.concat, ce = ae.push, pe = ae.indexOf, de = {}, fe = de.toString, he = de.hasOwnProperty, me = {}, ge = function(e, t) {
            return new ge.fn.init(e, t)
        }, ye = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ve = /^-ms-/, be = /-([\da-z])/gi, we = function(e, t) {
            return t.toUpperCase()
        };
        ge.fn = ge.prototype = {
            jquery: "1.12.4",
            constructor: ge,
            selector: "",
            length: 0,
            toArray: function() {
                return le.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : le.call(this)
            },
            pushStack: function(e) {
                var t = ge.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e) {
                return ge.each(this, e)
            },
            map: function(e) {
                return this.pushStack(ge.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(le.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            eq: function(e) {
                var t = this.length, n =+ e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ce,
            sort: ae.sort,
            splice: ae.splice
        }, ge.extend = ge.fn.extend = function() {
            var e, t, n, i, r, o, a = arguments[0] || {}, s = 1, l = arguments.length, u=!1;
            for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || ge.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
                if (null != (r = arguments[s]))
                    for (i in r)
                        e = a[i], n = r[i], a !== n && (u && n && (ge.isPlainObject(n) || (t = ge.isArray(n))) ? (t ? (t=!1, o = e && ge.isArray(e) ? e : []) : o = e && ge.isPlainObject(e) ? e : {}, a[i] = ge.extend(u, o, n)) : n !== undefined && (a[i] = n));
            return a
        }, ge.extend({
            expando: "jQuery" + ("1.12.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === ge.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ge.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !ge.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e))
                    return !1;
                try {
                    if (e.constructor&&!he.call(e, "constructor")&&!he.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                if (!me.ownFirst)
                    for (t in e)
                        return he.call(e, t);
                for (t in e);
                return t === undefined || he.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[fe.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                e && ge.trim(e) && (n.execScript || function(e) {
                    n.eval.call(n, e)
                })(e)
            },
            camelCase: function(e) {
                return e.replace(ve, "ms-").replace(be, we)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, i = 0;
                if (a(e))
                    for (n = e.length; i < n&&!1 !== t.call(e[i], i, e[i]); i++);
                else 
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ye, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ce.call(n, e)), n
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (pe)
                        return pe.call(t, e, n);
                    for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return - 1
            },
            merge: function(e, t) {
                for (var n =+ t.length, i = 0, r = e.length; i < n;)
                    e[r++] = t[i++];
                if (n !== n)
                    for (; t[i] !== undefined;)
                        e[r++] = t[i++];
                return e.length = r, e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, a=!n; r < o; r++)
                    !t(e[r], r) !== a && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, o = 0, s = [];
                if (a(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && s.push(r);
                else 
                    for (o in e)
                        null != (r = t(e[o], o, n)) && s.push(r);
                return ue.apply([], s)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t], t = e, e = r), ge.isFunction(e) ? (n = le.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(le.call(arguments)))
                }, i.guid = e.guid = e.guid || ge.guid++, i) : undefined
            },
            now: function() {
                return + new Date
            },
            support: me
        }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = ae[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            de["[object " + t + "]"] = t.toLowerCase()
        });
        var xe = function(e) {
            function t(e, t, n, i) {
                var r, o, a, s, u, p, d, f, h = t && t.ownerDocument, m = t ? t.nodeType: 9;
                if (n = n || [], "string" != typeof e ||!e || 1 !== m && 9 !== m && 11 !== m)
                    return n;
                if (!i && ((t ? t.ownerDocument || t : B) !== A && N(t), t = t || A, j)) {
                    if (11 !== m && (p = me.exec(e)))
                        if (r = p[1]) {
                            if (9 === m) {
                                if (!(a = t.getElementById(r)))
                                    return n;
                                    if (a.id === r)
                                        return n.push(a), n
                            } else if (h && (a = h.getElementById(r)) && P(t, a) && a.id === r)
                                return n.push(a), n
                        } else {
                            if (p[2])
                                return J.apply(n, t.getElementsByTagName(e)), n;
                                if ((r = p[3]) && b.getElementsByClassName && t.getElementsByClassName)
                                    return J.apply(n, t.getElementsByClassName(r)), n
                        }
                    if (b.qsa&&!V[e + " "] && (!q ||!q.test(e))) {
                        if (1 !== m)
                            h = t, f = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(ye, "\\$&") : t.setAttribute("id", s = F), d = S(e), o = d.length, u = ce.test(s) ? "#" + s : "[id='" + s + "']"; o--;)
                                d[o] = u + " " + c(d[o]);
                            f = d.join(","), h = ge.test(e) && l(t.parentNode) || t
                        }
                        if (f)
                            try {
                                return J.apply(n, h.querySelectorAll(f)), n
                        } catch (g) {} finally {
                            s === F && t.removeAttribute("id")
                        }
                    }
                }
                return T(e.replace(oe, "$1"), t, n, i)
            }
            function n() {
                function e(n, i) {
                    return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }
            function i(e) {
                return e[F]=!0, e
            }
            function r(e) {
                var t = A.createElement("div");
                try {
                    return !!e(t)
                } catch (n) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }
            function o(e, t) {
                for (var n = e.split("|"), i = n.length; i--;)
                    w.attrHandle[n[i]] = t
            }
            function a(e, t) {
                var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || $) - (~e.sourceIndex || $);
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t)
                            return - 1;
                return e ? 1 : - 1
            }
            function s(e) {
                return i(function(t) {
                    return t =+ t, i(function(n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--;)
                            n[r = o[a]] && (n[r]=!(i[r] = n[r]))
                    })
                })
            }
            function l(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function u() {}
            function c(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function p(e, t, n) {
                var i = t.dir, r = n && "parentNode" === i, o = L++;
                return t.first ? function(t, n, o) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || r)
                            return e(t, n, o)
                } : function(t, n, a) {
                    var s, l, u, c = [R, o];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || r) && e(t, n, a))
                                return !0
                    } else 
                        for (; t = t[i];)
                            if (1 === t.nodeType || r) {
                                if (u = t[F] || (t[F] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (s = l[i]) && s[0] === R && s[1] === o)
                                    return c[2] = s[2];
                                    if (l[i] = c, c[2] = e(t, n, a))
                                        return !0
                            }
                }
            }
            function d(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var r = e.length; r--;)
                        if (!e[r](t, n, i))
                            return !1;
                    return !0
                } : e[0]
            }
            function f(e, n, i) {
                for (var r = 0, o = n.length; r < o; r++)
                    t(e, n[r], i);
                return i
            }
            function h(e, t, n, i, r) {
                for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)(o = e[s]) 
                    && (n&&!n(o, i, r) || (a.push(o), u && t.push(s)));
                return a
            }
            function m(e, t, n, r, o, a) {
                return r&&!r[F] && (r = m(r)), o&&!o[F] && (o = m(o, a)), i(function(i, a, s, l) {
                    var u, c, p, d = [], m = [], g = a.length, y = i || f(t || "*", s.nodeType ? [s] : s, []), v=!e ||!i && t ? y : h(y, d, e, s, l), b = n ? o || (i ? e : g || r) ? [] : a : v;
                    if (n && n(v, b, s, l), r)
                        for (u = h(b, m), r(u, [], s, l), c = u.length; c--;)(p = u[c]) 
                            && (b[m[c]]=!(v[m[c]] = p));
                    if (i) {
                        if (o || e) {
                            if (o) {
                                for (u = [], c = b.length; c--;)(p = b[c]) 
                                    && u.push(v[c] = p);
                                o(null, b = [], u, l)
                            }
                            for (c = b.length; c--;)(p = b[c]) 
                                && (u = o ? Y(i, p) : d[c])>-1 && (i[u]=!(a[u] = p))
                            }
                    } else 
                        b = h(b === a ? b.splice(g, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
                })
            }
            function g(e) {
                for (var t, n, i, r = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], s = o ? 1 : 0, l = p(function(e) {
                    return e === t
                }, a, !0), u = p(function(e) {
                    return Y(t, e)>-1
                }, a, !0), f = [function(e, n, i) {
                    var r=!o && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                    return t = null, r
                }
                ]; s < r; s++)
                    if (n = w.relative[e[s].type])
                        f = [p(d(f), n)];
                    else {
                        if (n = w.filter[e[s].type].apply(null, e[s].matches), n[F]) {
                            for (i=++s; i < r&&!w.relative[e[i].type]; i++);
                            return m(s > 1 && d(f), s > 1 && c(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*": ""
                            })).replace(oe, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && c(e))
                        }
                        f.push(n)
                    }
                return d(f)
            }
            function y(e, n) {
                var r = n.length > 0, o = e.length > 0, a = function(i, a, s, l, u) {
                    var c, p, d, f = 0, m = "0", g = i && [], y = [], v = E, b = i || o && w.find.TAG("*", u), x = R += null == v ? 1: Math.random() || .1, _ = b.length;
                    for (u && (E = a === A || a || u); m !== _ && null != (c = b[m]); m++) {
                        if (o && c) {
                            for (p = 0, a || c.ownerDocument === A || (N(c), s=!j); d = e[p++];)
                                if (d(c, a || A, s)) {
                                    l.push(c);
                                    break
                                }
                            u && (R = x)
                        }
                        r && ((c=!d && c) && f--, i && g.push(c))
                    }
                    if (f += m, r && m !== f) {
                        for (p = 0; d = n[p++];)
                            d(g, y, a, s);
                        if (i) {
                            if (f > 0)
                                for (; m--;)
                                    g[m] || y[m] || (y[m] = K.call(l));
                            y = h(y)
                        }
                        J.apply(l, y), u&&!i && y.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (R = x, E = v), g
                };
                return r ? i(a) : a
            }
            var v, b, w, x, _, S, k, T, E, C, D, N, A, O, j, q, I, M, P, F = "sizzle" + 1 * new Date, B = e.document, R = 0, L = 0, H = n(), z = n(), V = n(), W = function(e, t) {
                return e === t && (D=!0), 0
            }, $ = 1<<31, Q = {}.hasOwnProperty, U = [], K = U.pop, G = U.push, J = U.push, X = U.slice, Y = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return - 1
            }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie), ce = new RegExp("^" + te + "$"), pe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            }, de = /^(?:input|select|textarea|button)$/i, fe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ye = /'|\\/g, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), be = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i>>10 | 55296, 1023 & i | 56320)
            }, we = function() {
                N()
            };
            try {
                J.apply(U = X.call(B.childNodes), B.childNodes), U[B.childNodes.length].nodeType
            } catch (xe) {
                J = {
                    apply: U.length ? function(e, t) {
                        G.apply(e, X.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            b = t.support = {}, _ = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, N = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e: B;
                return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, O = A.documentElement, j=!_(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), b.attributes = r(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), b.getElementsByTagName = r(function(e) {
                    return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
                }), b.getElementsByClassName = he.test(A.getElementsByClassName), b.getById = r(function(e) {
                    return O.appendChild(e).id = F, !A.getElementsByName ||!A.getElementsByName(F).length
                }), b.getById ? (w.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && j) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }, w.filter.ID = function(e) {
                    var t = e.replace(ve, be);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete w.find.ID, w.filter.ID = function(e) {
                    var t = e.replace(ve, be);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), w.find.TAG = b.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [], r = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[r++];)
                            1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, w.find.CLASS = b.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && j)
                        return t.getElementsByClassName(e)
                }, I = [], q = [], (b.qsa = he.test(A.querySelectorAll)) && (r(function(e) {
                    O.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + F + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || q.push(".#.+[+~]")
                }), r(function(e) {
                    var t = A.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
                })), (b.matchesSelector = he.test(M = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(e) {
                    b.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), I.push("!=", ie)
                }), q = q.length && new RegExp(q.join("|")), I = I.length && new RegExp(I.join("|")), t = he.test(O.compareDocumentPosition), P = t || he.test(O.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement: e, i = t && t.parentNode;
                    return e === i ||!(!i || 1 !== i.nodeType ||!(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e)
                                return !0;
                    return !1
                }, W = t ? function(e, t) {
                    if (e === t)
                        return D=!0, 0;
                    var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
                    return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n ||!b.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === B && P(B, e)?-1 : t === A || t.ownerDocument === B && P(B, t) ? 1 : C ? Y(C, e) - Y(C, t) : 0 : 4 & n?-1 : 1)
                } : function(e, t) {
                    if (e === t)
                        return D=!0, 0;
                    var n, i = 0, r = e.parentNode, o = t.parentNode, s = [e], l = [t];
                    if (!r ||!o)
                        return e === A?-1 : t === A ? 1 : r?-1 : o ? 1 : C ? Y(C, e) - Y(C, t) : 0;
                    if (r === o)
                        return a(e, t);
                    for (n = e; n = n.parentNode;)
                        s.unshift(n);
                    for (n = t; n = n.parentNode;)
                        l.unshift(n);
                    for (; s[i] === l[i];)
                        i++;
                    return i ? a(s[i], l[i]) : s[i] === B?-1 : l[i] === B ? 1 : 0
                }, A) : A
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== A && N(e), n = n.replace(le, "='$1']"), b.matchesSelector && j&&!V[n + " "] && (!I ||!I.test(n)) && (!q ||!q.test(n)))
                    try {
                        var i = M.call(e, n);
                        if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                } catch (xe) {}
                return t(n, A, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== A && N(e), P(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== A && N(e);
                var n = w.attrHandle[t.toLowerCase()], i = n && Q.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !j): undefined;
                return i !== undefined ? i : b.attributes ||!j ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [], i = 0, r = 0;
                if (D=!b.detectDuplicates, C=!b.sortStable && e.slice(0), e.sort(W), D) {
                    for (; t = e[r++];)
                        t === e[r] && (i = n.push(r));
                    for (; i--;)
                        e.splice(n[i], 1)
                }
                return C = null, e
            }, x = t.getText = function(e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += x(e)
                        } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else 
                    for (; t = e[i++];)
                        n += x(t);
                return n
            }, w = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(ve, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ve, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] =+ (e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] =+ (e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n=!e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(ve, be).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = H[e + " "];
                        return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && H(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var o = t.attr(r, e);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i)>-1 : "$=" === n ? i && o.slice( - i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i)>-1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice( - 4), s = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var u, c, p, d, f, h, m = o !== a ? "nextSibling": "previousSibling", g = t.parentNode, y = s && t.nodeName.toLowerCase(), v=!l&&!s, b=!1;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (d = t; d = d[m];)
                                            if (s ? d.nodeName.toLowerCase() === y : 1 === d.nodeType)
                                                return !1;
                                        h = m = "only" === e&&!h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [a ? g.firstChild: g.lastChild], a && v) {
                                    for (d = g, p = d[F] || (d[F] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === R && u[1], b = f && u[2], d = f && g.childNodes[f]; d=++f && d && d[m] || (b = f = 0) 
                                        || h.pop();
                                    )if (1 === d.nodeType&&++b && d === t) {
                                        c[e] = [R, f, b];
                                        break
                                    }
                                } else if (v && (d = t, p = d[F] || (d[F] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), u = c[e] || [], f = u[0] === R && u[1], b = f), !1 === b)
                                    for (; (d=++f && d && d[m] || (b = f = 0) || h.pop()) 
                                        && ((s ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType)||!++b || (v && (p = d[F] || (d[F] = {}), c = p[d.uniqueID] || (p[d.uniqueID] = {}), c[e] = [R, b]), d !== t));
                                );
                                return (b -= r) === i || b%i == 0 && b / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[F] ? o(n) : o.length > 1 ? (r = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, r = o(e, n), a = r.length; a--;)
                                i = Y(e, r[a]), e[i]=!(t[i] = r[a])
                        }) : function(e) {
                            return o(e, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [], n = [], r = k(e.replace(oe, "$1"));
                        return r[F] ? i(function(e, t, n, i) {
                            for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) 
                                && (e[s]=!(t[s] = o))
                        }) : function(e, i, o) {
                            return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(ve, be), function(t) {
                            return (t.textContent || t.innerText || x(t)).indexOf(e)>-1
                        }
                    }),
                    lang: i(function(e) {
                        return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ve, be).toLowerCase(), function(t) {
                            var n;
                            do {
                                if (n = j ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            }
                            while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === O
                    },
                    focus: function(e) {
                        return e === A.activeElement && (!A.hasFocus || A.hasFocus())&&!!(e.type || e.href||~e.tabIndex)
                    },
                    enabled: function(e) {
                        return !1 === e.disabled
                    },
                    disabled: function(e) {
                        return !0 === e.disabled
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t&&!!e.checked || "option" === t&&!!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return fe.test(e.nodeName)
                    },
                    input: function(e) {
                        return de.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: s(function() {
                        return [0]
                    }),
                    last: s(function(e, t) {
                        return [t - 1]
                    }),
                    eq: s(function(e, t, n) {
                        return [n < 0 ? n + t: n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; --i >= 0;)
                            e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;)
                            e.push(i);
                        return e
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (v in{
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                w.pseudos[v] = function(e) {
                    return function(t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e
                    }
                }(v);
            for (v in{
                submit: !0,
                reset: !0
            })
                w.pseudos[v] = function(e) {
                    return function(t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e
                    }
                }(v);
            return u.prototype = w.filters = w.pseudos, w.setFilters = new u, S = t.tokenize = function(e, n) {
                var i, r, o, a, s, l, u, c = z[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (s = e, l = [], u = w.preFilter; s;) {
                    i&&!(r = ae.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), i=!1, (r = se.exec(s)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(oe, " ")
                    }), s = s.slice(i.length));
                    for (a in w.filter)
                        !(r = pe[a].exec(s)) || u[a]&&!(r = u[a](r)) || (i = r.shift(), o.push({
                            value: i,
                            type: a,
                            matches: r
                        }), s = s.slice(i.length));
                    if (!i)
                        break
                }
                return n ? s.length : s ? t.error(e) : z(e, l).slice(0)
            }, k = t.compile = function(e, t) {
                var n, i = [], r = [], o = V[e + " "];
                if (!o) {
                    for (t || (t = S(e)), n = t.length; n--;)
                        o = g(t[n]), o[F] ? i.push(o) : r.push(o);
                    o = V(e, y(r, i)), o.selector = e
                }
                return o
            }, T = t.select = function(e, t, n, i) {
                var r, o, a, s, u, p = "function" == typeof e && e, d=!i && S(e = p.selector || e);
                if (n = n || [], 1 === d.length) {
                    if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === t.nodeType && j && w.relative[o[1].type]) {
                        if (!(t = (w.find.ID(a.matches[0].replace(ve, be), t) || [])[0]))
                            return n;
                        p && (t = t.parentNode), e = e.slice(o.shift().value.length)
                    }
                    for (r = pe.needsContext.test(e) ? 0 : o.length; r--&&(a = o[r], !w.relative[s = a.type]);)
                        if ((u = w.find[s]) && (i = u(a.matches[0].replace(ve, be), ge.test(o[0].type) && l(t.parentNode) || t))) {
                            if (o.splice(r, 1), !(e = i.length && c(o)))
                                return J.apply(n, i), n;
                                break
                        }
                }
                return (p || k(e, d))(i, t, !j, n, !t || ge.test(e) && l(t.parentNode) || t), n
            }, b.sortStable = F.split("").sort(W).join("") === F, b.detectDuplicates=!!D, N(), b.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(A.createElement("div"))
            }), r(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), b.attributes && r(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }), r(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(Z, function(e, t, n) {
                var i;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(n);
        ge.find = xe, ge.expr = xe.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = xe.uniqueSort, ge.text = xe.getText, ge.isXMLDoc = xe.isXML, ge.contains = xe.contains;
        var _e = function(e, t, n) {
            for (var i = [], r = n !== undefined; (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ge(e).is(n))
                        break;
                        i.push(e)
                }
            return i
        }, Se = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }, ke = ge.expr.match.needsContext, Te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, Ee = /^.[^:#\[\.,]*$/;
        ge.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? ge.find.matchesSelector(i, e) ? [i] : [] : ge.find.matches(e, ge.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, ge.fn.extend({
            find: function(e) {
                var t, n = [], i = this, r = i.length;
                if ("string" != typeof e)
                    return this.pushStack(ge(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (ge.contains(i[t], this))
                                return !0
                            }));
                for (t = 0; t < r; t++)
                    ge.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? ge.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(s(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(s(this, e || [], !0))
            },
            is: function(e) {
                return !!s(this, "string" == typeof e && ke.test(e) ? ge(e) : e || [], !1).length
            }
        });
        var Ce, De = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ge.fn.init = function(e, t, n) {
            var i, r;
            if (!e)
                return this;
            if (n = n || Ce, "string" == typeof e) {
                if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : De.exec(e)) ||!i[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (i[1]) {
                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : se, !0)), Te.test(i[1]) && ge.isPlainObject(t))
                        for (i in t)
                            ge.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                    return this
                }
                if ((r = se.getElementById(i[2])) && r.parentNode) {
                    if (r.id !== i[2])
                        return Ce.find(e);
                    this.length = 1, this[0] = r
                }
                return this.context = se, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ge.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(ge) : (e.selector !== undefined && (this.selector = e.selector, this.context = e.context), ge.makeArray(e, this))
        }).prototype = ge.fn, Ce = ge(se);
        var Ne = /^(?:parents|prev(?:Until|All))/, Ae = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ge.fn.extend({
            has: function(e) {
                var t, n = ge(e, this), i = n.length;
                return this.filter(function() {
                    for (t = 0; t < i; t++)
                        if (ge.contains(this, n[t]))
                            return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, o = [], a = ke.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n)>-1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
            },
            add: function(e, t) {
                return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), ge.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return _e(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return _e(e, "parentNode", n)
            },
            next: function(e) {
                return l(e, "nextSibling")
            },
            prev: function(e) {
                return l(e, "previousSibling")
            },
            nextAll: function(e) {
                return _e(e, "nextSibling")
            },
            prevAll: function(e) {
                return _e(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return _e(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return _e(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Se((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Se(e.firstChild)
            },
            contents: function(e) {
                return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ge.merge([], e.childNodes)
            }
        }, function(e, t) {
            ge.fn[e] = function(n, i) {
                var r = ge.map(this, t, n);
                return "Until" !== e.slice( - 5) && (i = n), i && "string" == typeof i && (r = ge.filter(i, r)), this.length > 1 && (Ae[e] || (r = ge.uniqueSort(r)), Ne.test(e) && (r = r.reverse())), this.pushStack(r)
            }
        });
        var Oe = /\S+/g;
        ge.Callbacks = function(e) {
            e = "string" == typeof e ? u(e) : ge.extend({}, e);
            var t, n, i, r, o = [], a = [], s =- 1, l = function() {
                for (r = e.once, i = t=!0; a.length; s =- 1)
                    for (n = a.shift(); ++s < o.length;)
                        !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n=!1);
                e.memory || (n=!1), t=!1, r && (o = n ? [] : "")
            }, c = {
                add: function() {
                    return o && (n&&!t && (s = o.length - 1, a.push(n)), function i(t) {
                        ge.each(t, function(t, n) {
                            ge.isFunction(n) ? e.unique && c.has(n) || o.push(n) : n && n.length && "string" !== ge.type(n) && i(n)
                        })
                    }(arguments), n&&!t && l()), this
                },
                remove: function() {
                    return ge.each(arguments, function(e, t) {
                        for (var n; (n = ge.inArray(t, o, n))>-1;)
                            o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? ge.inArray(e, o)>-1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r=!0, n || c.disable(), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice(): n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
            return c
        }, ge.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", ge.Callbacks("once memory"), "resolved"], ["reject", "fail", ge.Callbacks("once memory"), "rejected"], ["notify", "progress", ge.Callbacks("memory")]], n = "pending", i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return ge.Deferred(function(n) {
                            ge.each(t, function(t, o) {
                                var a = ge.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = a && a.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, i) : i
                    }
                }, r = {};
                return i.pipe = i.then, ge.each(t, function(e, o) {
                    var a = o[2], s = o[3];
                    i[o[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1^e][2].disable, t[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = a.fireWith
                }), i.promise(r), e && e.call(r, r), r
            },
            when: function(e) {
                var t, n, i, r = 0, o = le.call(arguments), a = o.length, s = 1 !== a || e && ge.isFunction(e.promise) ? a: 0, l = 1 === s ? e: ge.Deferred(), u = function(e, n, i) {
                    return function(r) {
                        n[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                    }
                };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); r < a; r++)
                        o[r] && ge.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --s;
                return s || l.resolveWith(i, o), l.promise()
            }
        });
        var je;
        ge.fn.ready = function(e) {
            return ge.ready.promise().done(e), this
        }, ge.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ge.readyWait++ : ge.ready(!0)
            },
            ready: function(e) {
                (!0 === e?--ge.readyWait : ge.isReady) || (ge.isReady=!0, !0 !== e&&--ge.readyWait > 0 || (je.resolveWith(se, [ge]), ge.fn.triggerHandler && (ge(se).triggerHandler("ready"), ge(se).off("ready"))))
            }
        }), ge.ready.promise = function(e) {
            if (!je)
                if (je = ge.Deferred(), "complete" === se.readyState || "loading" !== se.readyState&&!se.documentElement.doScroll)
                    n.setTimeout(ge.ready);
                else if (se.addEventListener)
                    se.addEventListener("DOMContentLoaded", p), n.addEventListener("load", p);
                else {
                    se.attachEvent("onreadystatechange", p), n.attachEvent("onload", p);
                    var t=!1;
                    try {
                        t = null == n.frameElement && se.documentElement
                    } catch (i) {}
                    t && t.doScroll && function r() {
                        if (!ge.isReady) {
                            try {
                                t.doScroll("left")
                            } catch (i) {
                                return n.setTimeout(r, 50)
                            }
                            c(), ge.ready()
                        }
                    }()
                }
            return je.promise(e)
        }, ge.ready.promise();
        var qe;
        for (qe in ge(me))
            break;
        me.ownFirst = "0" === qe, me.inlineBlockNeedsLayout=!1, ge(function() {
            var e, t, n, i;
            (n = se.getElementsByTagName("body")[0]) && n.style && (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", me.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i))
        }), function() {
            var e = se.createElement("div");
            me.deleteExpando=!0;
            try {
                delete e.test
            } catch (t) {
                me.deleteExpando=!1
            }
            e = null
        }();
        var Ie = function(e) {
            var t = ge.noData[(e.nodeName + " ").toLowerCase()], n =+ e.nodeType || 1;
            return (1 === n || 9 === n) && (!t ||!0 !== t && e.getAttribute("classid") === t)
        }, Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Pe = /([A-Z])/g;
        ge.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando])&&!f(e)
            },
            data: function(e, t, n) {
                return h(e, t, n)
            },
            removeData: function(e, t) {
                return m(e, t)
            },
            _data: function(e, t, n) {
                return h(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return m(e, t, !0)
            }
        }), ge.fn.extend({
            data: function(e, t) {
                var n, i, r, o = this[0], a = o && o.attributes;
                if (e === undefined) {
                    if (this.length && (r = ge.data(o), 1 === o.nodeType&&!ge._data(o, "parsedAttrs"))) {
                        for (n = a.length; n--;)
                            a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ge.camelCase(i.slice(5)), d(o, i, r[i])));
                        ge._data(o, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    ge.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    ge.data(this, e, t)
                }) : o ? d(o, e, ge.data(o, e)) : undefined
            },
            removeData: function(e) {
                return this.each(function() {
                    ge.removeData(this, e)
                })
            }
        }), ge.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return t = (t || "fx") + "queue", i = ge._data(e, t), n && (!i || ge.isArray(n) ? i = ge._data(e, t, ge.makeArray(n)) : i.push(n)), i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = ge.queue(e, t), i = n.length, r = n.shift(), o = ge._queueHooks(e, t), a = function() {
                    ge.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, a, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return ge._data(e, n) || ge._data(e, n, {
                    empty: ge.Callbacks("once memory").add(function() {
                        ge._removeData(e, t + "queue"), ge._removeData(e, n)
                    })
                })
            }
        }), ge.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : t === undefined ? this : this.each(function() {
                    var n = ge.queue(this, e, t);
                    ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ge.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1, r = ge.Deferred(), o = this, a = this.length, s = function() {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; a--;)(n = ge._data(o[a], e + "queueHooks")
                    ) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t)
            }
        }), function() {
            var e;
            me.shrinkWrapBlocks = function() {
                if (null != e)
                    return e;
                e=!1;
                var t, n, i;
                return (n = se.getElementsByTagName("body")[0]) && n.style ? (t = se.createElement("div"), i = se.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(se.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(i), e) : void 0
            }
        }();
        var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Be = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"), Re = ["Top", "Right", "Bottom", "Left"], Le = function(e, t) {
            return e = t || e, "none" === ge.css(e, "display") ||!ge.contains(e.ownerDocument, e)
        }, He = function(e, t, n, i, r, o, a) {
            var s = 0, l = e.length, u = null == n;
            if ("object" === ge.type(n)) {
                r=!0;
                for (s in n)
                    He(e, t, s, n[s], !0, o, a)
            } else if (i !== undefined && (r=!0, ge.isFunction(i) || (a=!0), u && (a ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                return u.call(ge(e), n)
            })), t))
                for (; s < l; s++)
                    t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
        }, ze = /^(?:checkbox|radio)$/i, Ve = /<([\w:-]+)/, We = /^$|\/(?:java|ecma)script/i, $e = /^\s+/, Qe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
        !function() {
            var e = se.createElement("div"), t = se.createDocumentFragment(), n = se.createElement("input");
            e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", me.leadingWhitespace = 3 === e.firstChild.nodeType, me.tbody=!e.getElementsByTagName("tbody").length, me.htmlSerialize=!!e.getElementsByTagName("link").length, me.html5Clone = "<:nav></:nav>" !== se.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked=!0, t.appendChild(n), me.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", me.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), n = se.createElement("input"), n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), me.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, me.noCloneEvent=!!e.addEventListener, e[ge.expando] = 1, me.attributes=!e.getAttribute(ge.expando)
        }();
        var Ue = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: me.htmlSerialize ? [0, "", ""]: [1, "X<div>", "</div>"]
        };
        Ue.optgroup = Ue.option, Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead, Ue.th = Ue.td;
        var Ke = /<|&#?\w+;/, Ge = /<tbody/i;
        !function() {
            var e, t, i = se.createElement("div");
            for (e in{
                submit: !0,
                change: !0,
                focusin: !0
            })
                t = "on" + e, (me[e] = t in n) || (i.setAttribute(t, "t"), me[e]=!1 === i.attributes[t].expando);
            i = null
        }();
        var Je = /^(?:input|select|textarea)$/i, Xe = /^key/, Ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ze = /^(?:focusinfocus|focusoutblur)$/, et = /^([^.]*)(?:\.(.+)|)/;
        ge.event = {
            global: {},
            add: function(e, t, n, i, r) {
                var o, a, s, l, u, c, p, d, f, h, m, g = ge._data(e);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, r = l.selector), n.guid || (n.guid = ge.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(e) {
                        return void 0 === ge || e && ge.event.triggered === e.type ? undefined : ge.event.dispatch.apply(c.elem, arguments)
                    }, c.elem = e), t = (t || "").match(Oe) || [""], s = t.length; s--;)
                        o = et.exec(t[s]) || [], f = m = o[1], h = (o[2] || "").split(".").sort(), f && (u = ge.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = ge.event.special[f] || {}, p = ge.extend({
                            type: f,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && ge.expr.match.needsContext.test(r),
                            namespace: h.join(".")
                        }, l), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, u.setup&&!1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))), u.add && (u.add.call(e, p), p.handler.guid || (p.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), ge.event.global[f]=!0);
                    e = null
                }
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, l, u, c, p, d, f, h, m, g = ge.hasData(e) && ge._data(e);
                if (g && (c = g.events)) {
                    for (t = (t || "").match(Oe) || [""], u = t.length; u--;)
                        if (s = et.exec(t[u]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                            for (p = ge.event.special[f] || {}, f = (i ? p.delegateType : p.bindType) || f, d = c[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;)
                                a = d[o], !r && m !== a.origType || n && n.guid !== a.guid || s&&!s.test(a.namespace) || i && i !== a.selector && ("**" !== i ||!a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, p.remove && p.remove.call(e, a));
                                l&&!d.length && (p.teardown&&!1 !== p.teardown.call(e, h, g.handle) || ge.removeEvent(e, f, g.handle), delete c[f])
                        } else 
                            for (f in c)
                                ge.event.remove(e, f + t[u], n, i, !0);
                    ge.isEmptyObject(c) && (delete g.handle, ge._removeData(e, "events"))
                }
            },
            trigger: function(e, t, i, r) {
                var o, a, s, l, u, c, p, d = [i || se], f = he.call(e, "type") ? e.type: e, h = he.call(e, "namespace") ? e.namespace.split("."): [];
                if (s = c = i = i || se, 3 !== i.nodeType && 8 !== i.nodeType&&!Ze.test(f + ge.event.triggered) && (f.indexOf(".")>-1 && (h = f.split("."), f = h.shift(), h.sort()), a = f.indexOf(":") < 0 && "on" + f, e = e[ge.expando] ? e : new ge.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = i), t = null == t ? [e] : ge.makeArray(t, [e]), u = ge.event.special[f] || {}, r ||!u.trigger ||!1 !== u.trigger.apply(i, t))) {
                    if (!r&&!u.noBubble&&!ge.isWindow(i)) {
                        for (l = u.delegateType || f, Ze.test(l + f) || (s = s.parentNode); s; s = s.parentNode)
                            d.push(s), c = s;
                        c === (i.ownerDocument || se) && d.push(c.defaultView || c.parentWindow || n)
                    }
                    for (p = 0; (s = d[p++])&&!e.isPropagationStopped();)
                        e.type = p > 1 ? l : u.bindType || f, o = (ge._data(s, "events") || {})[e.type] && ge._data(s, "handle"), o && o.apply(s, t), (o = a && s[a]) && o.apply && Ie(s) && (e.result = o.apply(s, t), !1 === e.result && e.preventDefault());
                    if (e.type = f, !r&&!e.isDefaultPrevented() && (!u._default ||!1 === u._default.apply(d.pop(), t)) && Ie(i) && a && i[f]&&!ge.isWindow(i)) {
                        c = i[a], c && (i[a] = null), ge.event.triggered = f;
                        try {
                            i[f]()
                        } catch (m) {}
                        ge.event.triggered = undefined, c && (i[a] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(e) {
                e = ge.event.fix(e);
                var t, n, i, r, o, a = [], s = le.call(arguments), l = (ge._data(this, "events") || {})[e.type] || [], u = ge.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !u.preDispatch ||!1 !== u.preDispatch.call(this, e)) {
                    for (a = ge.event.handlers.call(this, e, l), t = 0; (r = a[t++])&&!e.isPropagationStopped();)
                        for (e.currentTarget = r.elem, n = 0; (o = r.handlers[n++])&&!e.isImmediatePropagationStopped();)
                            e.rnamespace&&!e.rnamespace.test(o.namespace) || (e.handleObj = o, e.data = o.data, (i = ((ge.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) !== undefined&&!1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a = [], s = t.delegateCount, l = e.target;
                if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (i = [], n = 0; n < s; n++)
                                o = t[n], r = o.selector + " ", i[r] === undefined && (i[r] = o.needsContext ? ge(r, this).index(l)>-1 : ge.find(r, this, null, [l]).length), i[r] && i.push(o);
                                i.length && a.push({
                                    elem: l,
                                    handlers: i
                                })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[ge.expando])
                    return e;
                var t, n, i, r = e.type, o = e, a = this.fixHooks[r];
                for (a || (this.fixHooks[r] = a = Ye.test(r) ? this.mouseHooks : Xe.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new ge.Event(o), t = i.length; t--;)
                    n = i[t], e[n] = o[n];
                return e.target || (e.target = o.srcElement || se), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey=!!e.metaKey, a.filter ? a.filter(e, o) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, r, o = t.button, a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || se, r = i.documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || o === undefined || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== k() && this.focus)
                            try {
                                return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === k() && this.blur)
                            return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click)
                            return this.click(), !1
                    },
                    _default: function(e) {
                        return ge.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n) {
                var i = ge.extend(new ge.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                ge.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault()
            }
        }, ge.removeEvent = se.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
        }, ge.Event = function(e, t) {
            if (!(this instanceof ge.Event))
                return new ge.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined&&!1 === e.returnValue ? _ : S) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), this[ge.expando]=!0
        }, ge.Event.prototype = {
            constructor: ge.Event,
            isDefaultPrevented: S,
            isPropagationStopped: S,
            isImmediatePropagationStopped: S,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = _, e && (e.preventDefault ? e.preventDefault() : e.returnValue=!1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = _, e&&!this.isSimulated && (e.stopPropagation && e.stopPropagation(), e.cancelBubble=!0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = _, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ge.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            ge.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this, r = e.relatedTarget, o = e.handleObj;
                    return r && (r === i || ge.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), me.submit || (ge.event.special.submit = {
            setup: function() {
                if (ge.nodeName(this, "form"))
                    return !1;
                ge.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target, n = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? ge.prop(t, "form"): undefined;
                    n&&!ge._data(n, "submit") && (ge.event.add(n, "submit._submit", function(e) {
                        e._submitBubble=!0
                    }), ge._data(n, "submit", !0))
                })
            },
            postDispatch: function(e) {
                e._submitBubble && (delete e._submitBubble, this.parentNode&&!e.isTrigger && ge.event.simulate("submit", this.parentNode, e))
            },
            teardown: function() {
                if (ge.nodeName(this, "form"))
                    return !1;
                ge.event.remove(this, "._submit")
            }
        }), me.change || (ge.event.special.change = {
            setup: function() {
                if (Je.test(this.nodeName))
                    return "checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change", function(e) {
                        "checked" === e.originalEvent.propertyName && (this._justChanged=!0)
                    }), ge.event.add(this, "click._change", function(e) {
                        this._justChanged&&!e.isTrigger && (this._justChanged=!1), ge.event.simulate("change", this, e)
                    })), !1;
                ge.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Je.test(t.nodeName)&&!ge._data(t, "change") && (ge.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e)
                    }), ge._data(t, "change", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                    return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return ge.event.remove(this, "._change"), !Je.test(this.nodeName)
            }
        }), me.focusin || ge.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                ge.event.simulate(t, e.target, ge.event.fix(e))
            };
            ge.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this, r = ge._data(i, t);
                    r || i.addEventListener(e, n, !0), ge._data(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this, r = ge._data(i, t) - 1;
                    r ? ge._data(i, t, r) : (i.removeEventListener(e, n, !0), ge._removeData(i, t))
                }
            }
        }), ge.fn.extend({
            on: function(e, t, n, i) {
                return T(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return T(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj, ge(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e)
                        this.off(r, t, e[r]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = S), this.each(function() {
                    ge.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ge.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return ge.event.trigger(e, t, n, !0)
            }
        });
        var tt = / jQuery\d+="(?:null|\d+)"/g, nt = new RegExp("<(?:" + Qe + ")[\\s/>]", "i"), it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, rt = /<script|<style|<link/i, ot = /checked\s*(?:[^=]|=\s*.checked.)/i, at = /^true\/(.*)/, st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, lt = y(se), ut = lt.appendChild(se.createElement("div"));
        ge.extend({
            htmlPrefilter: function(e) {
                return e.replace(it, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, a, s, l = ge.contains(e.ownerDocument, e);
                if (me.html5Clone || ge.isXMLDoc(e) ||!nt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ut.innerHTML = e.outerHTML, ut.removeChild(o = ut.firstChild)), !(me.noCloneEvent && me.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                    for (i = v(o), s = v(e), a = 0; null != (r = s[a]); ++a)
                        i[a] && A(r, i[a]);
                if (t)
                    if (n)
                        for (s = s || v(e), i = i || v(o), a = 0; null != (r = s[a]); a++)
                            N(r, i[a]);
                    else 
                        N(e, o);
                return i = v(o, "script"), i.length > 0 && b(i, !l && v(e, "script")), i = s = r = null, o
            },
            cleanData: function(e, t) {
                for (var n, i, r, o, a = 0, s = ge.expando, l = ge.cache, u = me.attributes, c = ge.event.special; null != (n = e[a]); a++)
                    if ((t || Ie(n)) && (r = n[s], o = r && l[r])) {
                        if (o.events)
                            for (i in o.events)
                                c[i] ? ge.event.remove(n, i) : ge.removeEvent(n, i, o.handle);
                                l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[s] = undefined : n.removeAttribute(s), ae.push(r))
                    }
            }
        }), ge.fn.extend({
            domManip: O,
            detach: function(e) {
                return j(this, e, !0)
            },
            remove: function(e) {
                return j(this, e)
            },
            text: function(e) {
                return He(this, function(e) {
                    return e === undefined ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || se).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return O(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        E(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return O(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = E(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return O(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return O(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ge.cleanData(v(e, !1)); e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.options && ge.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return ge.clone(this, e, t)
                })
            },
            html: function(e) {
                return He(this, function(e) {
                    var t = this[0] || {}, n = 0, i = this.length;
                    if (e === undefined)
                        return 1 === t.nodeType ? t.innerHTML.replace(tt, "") : undefined;
                    if ("string" == typeof e&&!rt.test(e) && (me.htmlSerialize ||!nt.test(e)) && (me.leadingWhitespace ||!$e.test(e))&&!Ue[(Ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = ge.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)
                                t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(v(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return O(this, arguments, function(t) {
                    var n = this.parentNode;
                    ge.inArray(this, e) < 0 && (ge.cleanData(v(this)), n && n.replaceChild(t, this))
                }, e)
            }
        }), ge.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            ge.fn[e] = function(e) {
                for (var n, i = 0, r = [], o = ge(e), a = o.length - 1; i <= a; i++)
                    n = i === a ? this : this.clone(!0), ge(o[i])[t](n), ce.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ct, pt = {
            HTML: "block",
            BODY: "block"
        }, dt = /^margin/, ft = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"), ht = function(e, t, n, i) {
            var r, o, a = {};
            for (o in t)
                a[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t)
                e.style[o] = a[o];
            return r
        }, mt = se.documentElement;
        !function() {
            function e() {
                var e, c, p = se.documentElement;
                p.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = r = s=!1, i = a=!0, n.getComputedStyle && (c = n.getComputedStyle(u), t = "1%" !== (c || {}).top, s = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, e = u.appendChild(se.createElement("div")), e.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", a=!parseFloat((n.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", o = 0 === u.getClientRects().length, o && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", e = u.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), p.removeChild(l)
            }
            var t, i, r, o, a, s, l = se.createElement("div"), u = se.createElement("div");
            u.style && (u.style.cssText = "float:left;opacity:.5", me.opacity = "0.5" === u.style.opacity, me.cssFloat=!!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", me.clearCloneStyle = "content-box" === u.style.backgroundClip, l = se.createElement("div"), l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), me.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ge.extend(me, {
                reliableHiddenOffsets: function() {
                    return null == t && e(), o
                },
                boxSizingReliable: function() {
                    return null == t && e(), r
                },
                pixelMarginRight: function() {
                    return null == t && e(), i
                },
                pixelPosition: function() {
                    return null == t && e(), t
                },
                reliableMarginRight: function() {
                    return null == t && e(), a
                },
                reliableMarginLeft: function() {
                    return null == t && e(), s
                }
            }))
        }();
        var gt, yt, vt = /^(top|right|bottom|left)$/;
        n.getComputedStyle ? (gt = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n), t.getComputedStyle(e)
        }, yt = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || gt(e), a = n ? n.getPropertyValue(t) || n[t] : undefined, "" !== a && a !== undefined || ge.contains(e.ownerDocument, e) || (a = ge.style(e, t)), n&&!me.pixelMarginRight() && ft.test(a) && dt.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o), a === undefined ? a : a + ""
        }) : mt.currentStyle && (gt = function(e) {
            return e.currentStyle
        }, yt = function(e, t, n) {
            var i, r, o, a, s = e.style;
            return n = n || gt(e), a = n ? n[t] : undefined, null == a && s && s[t] && (a = s[t]), ft.test(a)&&!vt.test(t) && (i = s.left, r = e.runtimeStyle, o = r && r.left, o && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), a === undefined ? a : a + "" || "auto"
        });
        var bt = /alpha\([^)]*\)/i, wt = /opacity\s*=\s*([^)]*)/i, xt = /^(none|table(?!-c[ea]).+)/, _t = new RegExp("^(" + Fe + ")(.*)$", "i"), St = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, kt = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Tt = ["Webkit", "O", "Moz", "ms"], Et = se.createElement("div").style;
        ge.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = yt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": me.cssFloat ? "cssFloat": "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = ge.camelCase(t), l = e.style;
                    if (t = ge.cssProps[s] || (ge.cssProps[s] = P(s) || s), a = ge.cssHooks[t] || ge.cssHooks[s], n === undefined)
                        return a && "get"in a && (r = a.get(e, !1, i)) !== undefined ? r : l[t];
                    if (o = typeof n, "string" === o && (r = Be.exec(n)) && r[1] && (n = g(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ge.cssNumber[s] ? "" : "px")), me.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set"in a && (n = a.set(e, n, i)) === undefined)))
                        try {
                            l[t] = n
                    } catch (u) {}
                }
            },
            css: function(e, t, n, i) {
                var r, o, a, s = ge.camelCase(t);
                return t = ge.cssProps[s] || (ge.cssProps[s] = P(s) || s), a = ge.cssHooks[t] || ge.cssHooks[s], a && "get"in a && (o = a.get(e, !0, n)), o === undefined && (o = yt(e, t, i)), "normal" === o && t in kt && (o = kt[t]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
            }
        }), ge.each(["height", "width"], function(e, t) {
            ge.cssHooks[t] = {
                get: function(e, n, i) {
                    if (n)
                        return xt.test(ge.css(e, "display")) && 0 === e.offsetWidth ? ht(e, St, function() {
                            return L(e, t, i)
                        }) : L(e, t, i)
                },
                set: function(e, n, i) {
                    var r = i && gt(e);
                    return B(e, n, i ? R(e, t, i, me.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }), me.opacity || (ge.cssHooks.opacity = {
            get: function(e, t) {
                return wt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style, i = e.currentStyle, r = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "", o = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === ge.trim(o.replace(bt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i&&!i.filter) || (n.filter = bt.test(o) ? o.replace(bt, r) : o + " " + r)
            }
        }), ge.cssHooks.marginRight = M(me.reliableMarginRight, function(e, t) {
            if (t)
                return ht(e, {
                    display: "inline-block"
                }, yt, [e, "marginRight"])
        }), ge.cssHooks.marginLeft = M(me.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(yt(e, "marginLeft")) || (ge.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - ht(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                }) : 0)) + "px"
        }), ge.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ge.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                        r[e + Re[i] + t] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, dt.test(e) || (ge.cssHooks[e + t].set = B)
        }), ge.fn.extend({
            css: function(e, t) {
                return He(this, function(e, t, n) {
                    var i, r, o = {}, a = 0;
                    if (ge.isArray(t)) {
                        for (i = gt(e), r = t.length; a < r; a++)
                            o[t[a]] = ge.css(e, t[a], !1, i);
                        return o
                    }
                    return n !== undefined ? ge.style(e, t, n) : ge.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return F(this, !0)
            },
            hide: function() {
                return F(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Le(this) ? ge(this).show() : ge(this).hide()
                })
            }
        }), ge.Tween = H, H.prototype = {
            constructor: H,
            init: function(e, t, n, i, r, o) {
                this.elem = e, this.prop = n, this.easing = r || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ge.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = H.propHooks[this.prop];
                return e && e.get ? e.get(this) : H.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]]&&!ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, ge.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        }, ge.fx = H.prototype.init, ge.fx.step = {};
        var Ct, Dt, Nt = /^(?:toggle|show|hide)$/, At = /queueHooks$/;
        ge.Animation = ge.extend(U, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return g(n.elem, e, Be.exec(t), n), n
                }
                ]
            },
            tweener: function(e, t) {
                ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
                for (var n, i = 0, r = e.length; i < r; i++)
                    n = e[i], U.tweeners[n] = U.tweeners[n] || [], U.tweeners[n].unshift(t)
            },
            prefilters: [$],
            prefilter: function(e, t) {
                t ? U.prefilters.unshift(e) : U.prefilters.push(e)
            }
        }), ge.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? ge.extend({}, e): {
                complete: n ||!n && t || ge.isFunction(e) && e,
                duration: e,
                easing: n && t || t&&!ge.isFunction(t) && t
            };
            return i.duration = ge.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ge.fx.speeds ? ge.fx.speeds[i.duration] : ge.fx.speeds._default, null != i.queue&&!0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                ge.isFunction(i.old) && i.old.call(this), i.queue && ge.dequeue(this, i.queue)
            }, i
        }, ge.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Le).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = ge.isEmptyObject(e), o = ge.speed(t, n, i), a = function() {
                    var t = U(this, ge.extend({}, e), o);
                    (r || ge._data(this, "finish")) && t.stop(!0)
                };
                return a.finish = a, r ||!1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t&&!1 !== e && this.queue(e || "fx", []), this.each(function() {
                    var t=!0, r = null != e && e + "queueHooks", o = ge.timers, a = ge._data(this);
                    if (r)
                        a[r] && a[r].stop && i(a[r]);
                    else 
                        for (r in a)
                            a[r] && a[r].stop && At.test(r) && i(a[r]);
                    for (r = o.length; r--;)
                        o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t=!1, o.splice(r, 1));
                    !t && n || ge.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = ge._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = ge.timers, a = i ? i.length: 0;
                    for (n.finish=!0, ge.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;)
                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < a; t++)
                        i[t] && i[t].finish && i[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ge.each(["toggle", "show", "hide"], function(e, t) {
            var n = ge.fn[t];
            ge.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, i, r)
            }
        }), ge.each({
            slideDown: V("show"),
            slideUp: V("hide"),
            slideToggle: V("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ge.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }), ge.timers = [], ge.fx.tick = function() {
            var e, t = ge.timers, n = 0;
            for (Ct = ge.now(); n < t.length; n++)(e = t[n])() 
                || t[n] !== e || t.splice(n--, 1);
            t.length || ge.fx.stop(), Ct = undefined
        }, ge.fx.timer = function(e) {
            ge.timers.push(e), e() ? ge.fx.start() : ge.timers.pop()
        }, ge.fx.interval = 13, ge.fx.start = function() {
            Dt || (Dt = n.setInterval(ge.fx.tick, ge.fx.interval))
        }, ge.fx.stop = function() {
            n.clearInterval(Dt), Dt = null
        }, ge.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ge.fn.delay = function(e, t) {
            return e = ge.fx ? ge.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
                var r = n.setTimeout(t, e);
                i.stop = function() {
                    n.clearTimeout(r)
                }
            })
        }, function() {
            var e, t = se.createElement("input"), n = se.createElement("div"), i = se.createElement("select"), r = i.appendChild(se.createElement("option"));
            n = se.createElement("div"), n.setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), e = n.getElementsByTagName("a")[0], e.style.cssText = "top:1px", me.getSetAttribute = "t" !== n.className, me.style = /top/.test(e.getAttribute("style")), me.hrefNormalized = "/a" === e.getAttribute("href"), me.checkOn=!!t.value, me.optSelected = r.selected, me.enctype=!!se.createElement("form").enctype, i.disabled=!0, me.optDisabled=!r.disabled, t = se.createElement("input"), t.setAttribute("value", ""), me.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), me.radioValue = "t" === t.value
        }();
        var Ot = /\r/g, jt = /[\x20\t\r\n\f]+/g;
        ge.fn.extend({
            val: function(e) {
                var t, n, i, r = this[0];
                {
                    if (arguments.length)
                        return i = ge.isFunction(e), this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = i ? e.call(this, n, ge(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ge.isArray(r) && (r = ge.map(r, function(e) {
                                return null == e ? "" : e + ""
                            })), (t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set"in t && t.set(this, r, "value") !== undefined || (this.value = r))
                        });
                    if (r)
                        return (t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()]) && "get"in t && (n = t.get(r, "value")) !== undefined ? n : (n = r.value,
                        "string" == typeof n ? n.replace(Ot, "") : null == n ? "" : n)
                }
            }
        }), ge.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = ge.find.attr(e, "value");
                        return null != t ? t : ge.trim(ge.text(e)).replace(jt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                            if (n = i[l], (n.selected || l === r) && (me.optDisabled?!n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled ||!ge.nodeName(n.parentNode, "optgroup"))
                                ) {
                            if (t = ge(n).val(), o)
                                return t;
                            a.push(t)
                        }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = ge.makeArray(t), a = r.length; a--;)
                            if (i = r[a], ge.inArray(ge.valHooks.option.get(i), o)>-1)
                                try {
                                    i.selected = n=!0
                        } catch (s) {
                            i.scrollHeight
                        } else 
                            i.selected=!1;
                        return n || (e.selectedIndex =- 1), r
                    }
                }
            }
        }), ge.each(["radio", "checkbox"], function() {
            ge.valHooks[this] = {
                set: function(e, t) {
                    if (ge.isArray(t))
                        return e.checked = ge.inArray(ge(e).val(), t)>-1
                }
            }, me.checkOn || (ge.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var qt, It, Mt = ge.expr.attrHandle, Pt = /^(?:checked|selected)$/i, Ft = me.getSetAttribute, Bt = me.input;
        ge.fn.extend({
            attr: function(e, t) {
                return He(this, ge.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    ge.removeAttr(this, e)
                })
            }
        }), ge.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (t = t.toLowerCase(), r = ge.attrHooks[t] || (ge.expr.match.bool.test(t) ? It : qt)), n !== undefined ? null === n ? void ge.removeAttr(e, t) : r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : (e.setAttribute(t, n + ""), n) : r && "get"in r && null !== (i = r.get(e, t)) ? i : (i = ge.find.attr(e, t), null == i ? undefined : i))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!me.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i, r = 0, o = t && t.match(Oe);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];)
                        i = ge.propFix[n] || n, ge.expr.match.bool.test(n) ? Bt && Ft ||!Pt.test(n) ? e[i]=!1 : e[ge.camelCase("default-" + n)] = e[i]=!1 : ge.attr(e, n, ""), e.removeAttribute(Ft ? n : i)
            }
        }), It = {
            set: function(e, t, n) {
                return !1 === t ? ge.removeAttr(e, n) : Bt && Ft ||!Pt.test(n) ? e.setAttribute(!Ft && ge.propFix[n] || n, n) : e[ge.camelCase("default-" + n)] = e[n]=!0, n
            }
        }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Mt[t] || ge.find.attr;
            Bt && Ft ||!Pt.test(t) ? Mt[t] = function(e, t, i) {
                var r, o;
                return i || (o = Mt[t], Mt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, Mt[t] = o), r
            } : Mt[t] = function(e, t, n) {
                if (!n)
                    return e[ge.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Bt && Ft || (ge.attrHooks.value = {
            set: function(e, t, n) {
                if (!ge.nodeName(e, "input"))
                    return qt && qt.set(e, t, n);
                e.defaultValue = t
            }
        }), Ft || (qt = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                if (i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n))
                    return t
            }
        }, Mt.id = Mt.name = Mt.coords = function(e, t, n) {
            var i;
            if (!n)
                return (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, ge.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                if (n && n.specified)
                    return n.value
            },
            set: qt.set
        }, ge.attrHooks.contenteditable = {
            set: function(e, t, n) {
                qt.set(e, "" !== t && t, n)
            }
        }, ge.each(["width", "height"], function(e, t) {
            ge.attrHooks[t] = {
                set: function(e, n) {
                    if ("" === n)
                        return e.setAttribute(t, "auto"), n
                }
            }
        })), me.style || (ge.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || undefined
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var Rt = /^(?:input|select|textarea|button|object)$/i, Lt = /^(?:a|area)$/i;
        ge.fn.extend({
            prop: function(e, t) {
                return He(this, ge.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = ge.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = undefined, delete this[e]
                    } catch (t) {}
                })
            }
        }), ge.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, r = ge.propHooks[t]), n !== undefined ? r && "set"in r && (i = r.set(e, n, t)) !== undefined ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = ge.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : Rt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : - 1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), me.hrefNormalized || ge.each(["href", "src"], function(e, t) {
            ge.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), me.optSelected || (ge.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ge.propFix[this.toLowerCase()] = this
        }), me.enctype || (ge.propFix.enctype = "encoding");
        var Ht = /[\t\r\n\f]/g;
        ge.fn.extend({
            addClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (ge.isFunction(e))
                    return this.each(function(t) {
                        ge(this).addClass(e.call(this, t, K(this)))
                    });
                if ("string" == typeof e && e)
                    for (t = e.match(Oe) || []; n = this[l++];)
                        if (r = K(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                            for (a = 0; o = t[a++];)
                                i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                s = ge.trim(i), r !== s && ge.attr(n, "class", s)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, r, o, a, s, l = 0;
                if (ge.isFunction(e))
                    return this.each(function(t) {
                        ge(this).removeClass(e.call(this, t, K(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(Oe) || []; n = this[l++];)
                        if (r = K(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ht, " ")) {
                            for (a = 0; o = t[a++];)
                                for (; i.indexOf(" " + o + " ")>-1;)
                                    i = i.replace(" " + o + " ", " ");
                                    s = ge.trim(i), r !== s && ge.attr(n, "class", s)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                    ge(this).toggleClass(e.call(this, n, K(this), t), t)
                }) : this.each(function() {
                    var t, i, r, o;
                    if ("string" === n)
                        for (i = 0, r = ge(this), o = e.match(Oe) || []; t = o[i++];)
                            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                    else 
                        e !== undefined && "boolean" !== n || (t = K(this), t && ge._data(this, "__className__", t), ge.attr(this, "class", t ||!1 === e ? "" : ge._data(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, i = 0;
                for (t = " " + e + " "; n = this[i++];)
                    if (1 === n.nodeType && (" " + K(n) + " ").replace(Ht, " ").indexOf(t)>-1)
                        return !0;
                return !1
            }
        }), ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            ge.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), ge.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        });
        var zt = n.location, Vt = ge.now(), Wt = /\?/, $t = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ge.parseJSON = function(e) {
            if (n.JSON && n.JSON.parse)
                return n.JSON.parse(e + "");
            var t, i = null, r = ge.trim(e + "");
            return r&&!ge.trim(r.replace($t, function(e, n, r, o) {
                return t && n && (i = 0), 0 === i ? e : (t = r || n, i+=!o-!r, "")
            })) ? Function("return " + r)() : ge.error("Invalid JSON: " + e)
        }, ge.parseXML = function(e) {
            var t, i;
            if (!e || "string" != typeof e)
                return null;
            try {
                n.DOMParser ? (i = new n.DOMParser, t = i.parseFromString(e, "text/xml")) : (t = new n.ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
            } catch (r) {
                t = undefined
            }
            return t && t.documentElement&&!t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e), t
        };
        var Qt = /#.*$/, Ut = /([?&])_=[^&]*/, Kt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Jt = /^(?:GET|HEAD)$/, Xt = /^\/\//, Yt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Zt = {}, en = {}, tn = "*/".concat("*"), nn = zt.href, rn = Yt.exec(nn.toLowerCase()) || [];
        ge.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: nn,
                type: "GET",
                isLocal: Gt.test(rn[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": tn,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ge.parseJSON,
                    "text xml": ge.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? X(X(e, ge.ajaxSettings), t) : X(ge.ajaxSettings, e)
            },
            ajaxPrefilter: G(Zt),
            ajaxTransport: G(en),
            ajax: function(e, t) {
                function i(e, t, i, r) {
                    var o, p, v, b, x, S = t;
                    2 !== w && (w = 2, l && n.clearTimeout(l), c = undefined, s = r || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (b = Y(d, _, i)), b = Z(d, b, _, o), o ? (d.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (ge.lastModified[a] = x), (x = _.getResponseHeader("etag")) && (ge.etag[a] = x)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, p = b.data, v = b.error, o=!v)) : (v = S, !e && S || (S = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || S) + "", o ? m.resolveWith(f, [p, S, _]) : m.rejectWith(f, [_, S, v]), _.statusCode(y), y = undefined, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? p: v]), g.fireWith(f, [_, S]), u && (h.trigger("ajaxComplete", [_, d]), --ge.active || ge.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = undefined), t = t || {};
                var r, o, a, s, l, u, c, p, d = ge.ajaxSetup({}, t), f = d.context || d, h = d.context && (f.nodeType || f.jquery) ? ge(f): ge.event, m = ge.Deferred(), g = ge.Callbacks("once memory"), y = d.statusCode || {}, v = {}, b = {}, w = 0, x = "canceled", _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!p)
                                for (p = {}; t = Kt.exec(s);)
                                    p[t[1].toLowerCase()] = t[2];
                            t = p[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, v[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return w || (d.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (w < 2)
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                            else 
                                _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return c && c.abort(t), i(0, t), this
                    }
                };
                if (m.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, d.url = ((e || d.url || nn) + "").replace(Qt, "").replace(Xt, rn[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = ge.trim(d.dataType || "*").toLowerCase().match(Oe) || [""], null == d.crossDomain && (r = Yt.exec(d.url.toLowerCase()), d.crossDomain=!(!r || r[1] === rn[1] && r[2] === rn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (rn[3] || ("http:" === rn[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ge.param(d.data, d.traditional)), J(Zt, d, t, _), 2 === w)
                    return _;
                u = ge.event && d.global, u && 0 == ge.active++&&ge.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent=!Jt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Wt.test(a) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = Ut.test(a) ? a.replace(Ut, "$1_=" + Vt++) : a + (Wt.test(a) ? "&" : "?") + "_=" + Vt++)), d.ifModified && (ge.lastModified[a] && _.setRequestHeader("If-Modified-Since", ge.lastModified[a]), ge.etag[a] && _.setRequestHeader("If-None-Match", ge.etag[a])), (d.data && d.hasContent&&!1 !== d.contentType || t.contentType) && _.setRequestHeader("Content-Type", d.contentType), _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + tn + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers)
                    _.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, _, d) || 2 === w))
                    return _.abort();
                x = "abort";
                for (o in{
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    _[o](d[o]);
                if (c = J(en, d, t, _)) {
                    if (_.readyState = 1, u && h.trigger("ajaxSend", [_, d]), 2 === w)
                        return _;
                    d.async && d.timeout > 0 && (l = n.setTimeout(function() {
                        _.abort("timeout")
                    }, d.timeout));
                    try {
                        w = 1, c.send(v, i)
                    } catch (S) {
                        if (!(w < 2))
                            throw S;
                        i( - 1, S)
                    }
                } else 
                    i( - 1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return ge.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return ge.get(e, undefined, t, "script")
            }
        }), ge.each(["get", "post"], function(e, t) {
            ge[t] = function(e, n, i, r) {
                return ge.isFunction(n) && (r = r || i, i = n, n = undefined), ge.ajax(ge.extend({
                    url: e,
                    type: t,
                    dataType: r,
                    data: n,
                    success: i
                }, ge.isPlainObject(e) && e))
            }
        }), ge._evalUrl = function(e) {
            return ge.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ge.fn.extend({
            wrapAll: function(e) {
                if (ge.isFunction(e))
                    return this.each(function(t) {
                        ge(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = ge(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)
                            e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return ge.isFunction(e) ? this.each(function(t) {
                    ge(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = ge(this), n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = ge.isFunction(e);
                return this.each(function(n) {
                    ge(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ge.expr.filters.hidden = function(e) {
            return me.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0&&!e.getClientRects().length : te(e)
        }, ge.expr.filters.visible = function(e) {
            return !ge.expr.filters.hidden(e)
        };
        var on = /%20/g, an = /\[\]$/, sn = /\r?\n/g, ln = /^(?:submit|button|image|reset|file)$/i, un = /^(?:input|select|textarea|keygen)/i;
        ge.param = function(e, t) {
            var n, i = [], r = function(e, t) {
                t = ge.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (t === undefined && (t = ge.ajaxSettings && ge.ajaxSettings.traditional), ge.isArray(e) || e.jquery&&!ge.isPlainObject(e))
                ge.each(e, function() {
                    r(this.name, this.value)
                });
            else 
                for (n in e)
                    ne(n, e[n], t, r);
            return i.join("&").replace(on, "+")
        }, ge.fn.extend({
            serialize: function() {
                return ge.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = ge.prop(this, "elements");
                    return e ? ge.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name&&!ge(this).is(":disabled") && un.test(this.nodeName)&&!ln.test(e) && (this.checked ||!ze.test(e))
                }).map(function(e, t) {
                    var n = ge(this).val();
                    return null == n ? null : ge.isArray(n) ? ge.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(sn, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(sn, "\r\n")
                    }
                }).get()
            }
        }), ge.ajaxSettings.xhr = n.ActiveXObject !== undefined ? function() {
            return this.isLocal ? re() : se.documentMode > 8 ? ie() : /^(get|post|head|put|delete|options)$/i.test(this.type) && ie() || re()
        } : ie;
        var cn = 0, pn = {}, dn = ge.ajaxSettings.xhr();
        n.attachEvent && n.attachEvent("onunload", function() {
            for (var e in pn)
                pn[e](undefined, !0)
        }), me.cors=!!dn && "withCredentials"in dn, dn = me.ajax=!!dn, dn && ge.ajaxTransport(function(e) {
            if (!e.crossDomain || me.cors) {
                var t;
                return {
                    send: function(i, r) {
                        var o, a = e.xhr(), s=++cn;
                        if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields)
                                a[o] = e.xhrFields[o];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (o in i)
                            i[o] !== undefined && a.setRequestHeader(o, i[o] + "");
                        a.send(e.hasContent && e.data || null), t = function(n, i) {
                            var o, l, u;
                            if (t && (i || 4 === a.readyState))
                                if (delete pn[s], t = undefined, a.onreadystatechange = ge.noop, i)
                                    4 !== a.readyState && a.abort();
                                else {
                                    u = {}, o = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    o ||!e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                                }
                            u && r(o, l, u, a.getAllResponseHeaders())
                        }, e.async ? 4 === a.readyState ? n.setTimeout(t) : a.onreadystatechange = pn[s] = t : t()
                    },
                    abort: function() {
                        t && t(undefined, !0)
                    }
                }
            }
        }), ge.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return ge.globalEval(e), e
                }
            }
        }), ge.ajaxPrefilter("script", function(e) {
            e.cache === undefined && (e.cache=!1), e.crossDomain && (e.type = "GET", e.global=!1)
        }), ge.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = se.head || ge("head")[0] || se.documentElement;
                return {
                    send: function(i, r) {
                        t = se.createElement("script"), t.async=!0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n ||!t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || r(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(undefined, !0)
                    }
                }
            }
        });
        var fn = [], hn = /(=)\?(?=&|$)|\?\?/;
        ge.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = fn.pop() || ge.expando + "_" + Vt++;
                return this[e]=!0, e
            }
        }), ge.ajaxPrefilter("json jsonp", function(e, t, i) {
            var r, o, a, s=!1 !== e.jsonp && (hn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && hn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(hn, "$1" + r) : !1 !== e.jsonp && (e.url += (Wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                    return a || ge.error(r + " was not called"), a[0]
                }, e.dataTypes[0] = "json", o = n[r], n[r] = function() {
                    a = arguments
                }, i.always(function() {
                    o === undefined ? ge(n).removeProp(r) : n[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, fn.push(r)), a && ge.isFunction(o) && o(a[0]), a = o = undefined
                }), "script"
        }), ge.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t, t=!1), t = t || se;
            var i = Te.exec(e), r=!n && [];
            return i ? [t.createElement(i[1])] : (i = x([e], t, r), r && r.length && ge(r).remove(), ge.merge([], i.childNodes))
        };
        var mn = ge.fn.load;
        ge.fn.load = function(e, t, n) {
            if ("string" != typeof e && mn)
                return mn.apply(this, arguments);
            var i, r, o, a = this, s = e.indexOf(" ");
            return s>-1 && (i = ge.trim(e.slice(s, e.length)), e = e.slice(0, s)), ge.isFunction(t) ? (n = t, t = undefined) : t && "object" == typeof t && (r = "POST"), a.length > 0 && ge.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? ge("<div>").append(ge.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }), this
        }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ge.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), ge.expr.filters.animated = function(e) {
            return ge.grep(ge.timers, function(t) {
                return e === t.elem
            }).length
        }, ge.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s, l, u, c = ge.css(e, "position"), p = ge(e), d = {};
                "static" === c && (e.style.position = "relative"), s = p.offset(), o = ge.css(e, "top"), l = ge.css(e, "left"), u = ("absolute" === c || "fixed" === c) && ge.inArray("auto", [o, l])>-1, u ? (i = p.position(), a = i.top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using"in t ? t.using.call(e, d) : p.css(d)
            }
        }, ge.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return e === undefined ? this : this.each(function(t) {
                        ge.offset.setOffset(this, e, t)
                    });
                var t, n, i = {
                    top: 0,
                    left: 0
                }, r = this[0], o = r && r.ownerDocument;
                if (o)
                    return t = o.documentElement, ge.contains(t, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = oe(o), {
                        top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                        left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                    }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                    return "fixed" === ge.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ge.nodeName(e[0], "html") || (n = e.offset()), n.top += ge.css(e[0], "borderTopWidth", !0), n.left += ge.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - ge.css(i, "marginTop", !0),
                        left: t.left - n.left - ge.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e&&!ge.nodeName(e, "html") && "static" === ge.css(e, "position");)
                        e = e.offsetParent;
                    return e || mt
                })
            }
        }), ge.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            ge.fn[e] = function(i) {
                return He(this, function(e, i, r) {
                    var o = oe(e);
                    if (r === undefined)
                        return o ? t in o ? o[t] : o.document.documentElement[i] : e[i];
                    o ? o.scrollTo(n ? ge(o).scrollLeft() : r, n ? r : ge(o).scrollTop()) : e[i] = r
                }, e, i, arguments.length, null)
            }
        }), ge.each(["top", "left"], function(e, t) {
            ge.cssHooks[t] = M(me.pixelPosition, function(e, n) {
                if (n)
                    return n = yt(e, t), ft.test(n) ? ge(e).position()[t] + "px" : n
            })
        }), ge.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            ge.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                ge.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i), a = n || (!0 === i ||!0 === r ? "margin" : "border");
                    return He(this, function(t, n, i) {
                        var r;
                        return ge.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : i === undefined ? ge.css(t, n, a) : ge.style(t, n, i, a)
                    }, t, o ? i : undefined, o, null)
                }
            })
        }), ge.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }), ge.fn.size = function() {
            return this.length
        }, ge.fn.andSelf = ge.fn.addBack, i = [], (r = function() {
            return ge
        }.apply(t, i)) !== undefined && (e.exports = r);
        var gn = n.jQuery, yn = n.$;
        return ge.noConflict = function(e) {
            return n.$ === ge && (n.$ = yn), e && n.jQuery === ge && (n.jQuery = gn), ge
        }, o || (n.jQuery = n.$ = ge), ge
    })
}, function(e, t, n) {
    var i, r;
    !function(o, a) {
        "use strict";
        i = a, (r = "function" == typeof i ? i.call(t, n, t, e) : i) !== undefined && (e.exports = r)
    }(0, function() {
        var e, t, n = Array, i = n.prototype, r = Object, o = r.prototype, a = Function, s = a.prototype, l = String, u = l.prototype, c = Number, p = c.prototype, d = i.slice, f = i.splice, h = i.push, m = i.unshift, g = i.concat, y = i.join, v = s.call, b = s.apply, w = Math.max, x = Math.min, _ = o.toString, S = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag, k = Function.prototype.toString, T = /^\s*class /, E = function(e) {
            try {
                var t = k.call(e), n = t.replace(/\/\/.*\n/g, ""), i = n.replace(/\/\*[.\s\S]*\*\//g, ""), r = i.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return T.test(r)
            } catch (o) {
                return !1
            }
        }, C = function(e) {
            try {
                return !E(e) && (k.call(e), !0)
            } catch (t) {
                return !1
            }
        }, e = function(e) {
            if (!e)
                return !1;
            if ("function" != typeof e && "object" != typeof e)
                return !1;
            if (S)
                return C(e);
            if (E(e))
                return !1;
            var t = _.call(e);
            return "[object Function]" === t || "[object GeneratorFunction]" === t
        }, D = RegExp.prototype.exec, N = function(e) {
            try {
                return D.call(e), !0
            } catch (t) {
                return !1
            }
        };
        t = function(e) {
            return "object" == typeof e && (S ? N(e) : "[object RegExp]" === _.call(e))
        };
        var A, O = String.prototype.valueOf, j = function(e) {
            try {
                return O.call(e), !0
            } catch (t) {
                return !1
            }
        };
        A = function(e) {
            return "string" == typeof e || "object" == typeof e && (S ? j(e) : "[object String]" === _.call(e))
        };
        var q = r.defineProperty && function() {
            try {
                var e = {};
                r.defineProperty(e, "x", {
                    enumerable: !1,
                    value: e
                });
                for (var t in e)
                    return !1;
                return e.x === e
            } catch (n) {
                return !1
            }
        }(), I = function(e) {
            var t;
            return t = q ? function(e, t, n, i) {
                !i && t in e || r.defineProperty(e, t, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: n
                })
            } : function(e, t, n, i) {
                !i && t in e || (e[t] = n)
            }, function(n, i, r) {
                for (var o in i)
                    e.call(i, o) && t(n, o, i[o], r)
            }
        }(o.hasOwnProperty), M = function(e) {
            var t = typeof e;
            return null === e || "object" !== t && "function" !== t
        }, P = c.isNaN || function(e) {
            return e !== e
        }, F = {
            ToInteger: function(e) {
                var t =+ e;
                return P(t) ? t = 0 : 0 !== t && t !== 1 / 0 && t!==-1 / 0 && (t = (t > 0||-1) * Math.floor(Math.abs(t))), t
            },
            ToPrimitive: function(t) {
                var n, i, r;
                if (M(t))
                    return t;
                if (i = t.valueOf, e(i) && (n = i.call(t), M(n)))
                    return n;
                if (r = t.toString, e(r) && (n = r.call(t), M(n)))
                    return n;
                throw new TypeError
            },
            ToObject: function(e) {
                if (null == e)
                    throw new TypeError("can't convert " + e + " to object");
                return r(e)
            },
            ToUint32: function(e) {
                return e>>>0
            }
        }, B = function() {};
        I(s, {
            bind: function(t) {
                var n = this;
                if (!e(n))
                    throw new TypeError("Function.prototype.bind called on incompatible " + n);
                for (var i, o = d.call(arguments, 1), s = function() {
                    if (this instanceof i) {
                        var e = b.call(n, this, g.call(o, d.call(arguments)));
                        return r(e) === e ? e : this
                    }
                    return b.call(n, t, g.call(o, d.call(arguments)))
                }, l = w(0, n.length - o.length), u = [], c = 0; c < l; c++)
                    h.call(u, "$" + c);
                return i = a("binder", "return function (" + y.call(u, ",") + "){ return binder.apply(this, arguments); }")(s), n.prototype && (B.prototype = n.prototype, i.prototype = new B, B.prototype = null), i
            }
        });
        var R = v.bind(o.hasOwnProperty), L = v.bind(o.toString), H = v.bind(d), z = b.bind(d), V = v.bind(u.slice), W = v.bind(u.split), $ = v.bind(u.indexOf), Q = v.bind(h), U = v.bind(o.propertyIsEnumerable), K = v.bind(i.sort), G = n.isArray || function(e) {
            return "[object Array]" === L(e)
        }, J = 1 !== [].unshift(0);
        I(i, {
            unshift: function() {
                return m.apply(this, arguments), this.length
            }
        }, J), I(n, {
            isArray: G
        });
        var X = r("a"), Y = "a" !== X[0] ||!(0 in X), Z = function(e) {
            var t=!0, n=!0, i=!1;
            if (e)
                try {
                    e.call("foo", function(e, n, i) {
                        "object" != typeof i && (t=!1)
                    }), e.call([1], function() {
                        "use strict";
                        n = "string" == typeof this
                    }, "x")
            } catch (r) {
                i=!0
            }
            return !!e&&!i && t && n
        };
        I(i, {
            forEach: function(t) {
                var n, i = F.ToObject(this), r = Y && A(this) ? W(this, ""): i, o =- 1, a = F.ToUint32(r.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t))
                    throw new TypeError("Array.prototype.forEach callback must be a function");
                for (; ++o < a;)
                    o in r && (void 0 === n ? t(r[o], o, i) : t.call(n, r[o], o, i))
            }
        }, !Z(i.forEach)), I(i, {
            map: function(t) {
                var i, r = F.ToObject(this), o = Y && A(this) ? W(this, ""): r, a = F.ToUint32(o.length), s = n(a);
                if (arguments.length > 1 && (i = arguments[1]), !e(t))
                    throw new TypeError("Array.prototype.map callback must be a function");
                for (var l = 0; l < a; l++)
                    l in o && (s[l] = void 0 === i ? t(o[l], l, r) : t.call(i, o[l], l, r));
                return s
            }
        }, !Z(i.map)), I(i, {
            filter: function(t) {
                var n, i, r = F.ToObject(this), o = Y && A(this) ? W(this, ""): r, a = F.ToUint32(o.length), s = [];
                if (arguments.length > 1 && (i = arguments[1]), !e(t))
                    throw new TypeError("Array.prototype.filter callback must be a function");
                for (var l = 0; l < a; l++)
                    l in o && (n = o[l], (void 0 === i ? t(n, l, r) : t.call(i, n, l, r)) && Q(s, n));
                return s
            }
        }, !Z(i.filter)), I(i, {
            every: function(t) {
                var n, i = F.ToObject(this), r = Y && A(this) ? W(this, ""): i, o = F.ToUint32(r.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t))
                    throw new TypeError("Array.prototype.every callback must be a function");
                for (var a = 0; a < o; a++)
                    if (a in r&&!(void 0 === n ? t(r[a], a, i) : t.call(n, r[a], a, i)
                        ))return !1;
                return !0
            }
        }, !Z(i.every)), I(i, {
            some: function(t) {
                var n, i = F.ToObject(this), r = Y && A(this) ? W(this, ""): i, o = F.ToUint32(r.length);
                if (arguments.length > 1 && (n = arguments[1]), !e(t))
                    throw new TypeError("Array.prototype.some callback must be a function");
                for (var a = 0; a < o; a++)
                    if (a in r && (void 0 === n ? t(r[a], a, i) : t.call(n, r[a], a, i)
                        ))return !0;
                return !1
            }
        }, !Z(i.some));
        var ee=!1;
        i.reduce && (ee = "object" == typeof i.reduce.call("es5", function(e, t, n, i) {
            return i
        })), I(i, {
            reduce: function(t) {
                var n = F.ToObject(this), i = Y && A(this) ? W(this, ""): n, r = F.ToUint32(i.length);
                if (!e(t))
                    throw new TypeError("Array.prototype.reduce callback must be a function");
                if (0 === r && 1 === arguments.length)
                    throw new TypeError("reduce of empty array with no initial value");
                var o, a = 0;
                if (arguments.length >= 2)
                    o = arguments[1];
                else 
                    for (; ;) {
                        if (a in i) {
                            o = i[a++];
                            break
                        }
                        if (++a >= r)
                            throw new TypeError("reduce of empty array with no initial value")
                    }
                for (; a < r; a++)
                    a in i && (o = t(o, i[a], a, n));
                return o
            }
        }, !ee);
        var te=!1;
        i.reduceRight && (te = "object" == typeof i.reduceRight.call("es5", function(e, t, n, i) {
            return i
        })), I(i, {
            reduceRight: function(t) {
                var n = F.ToObject(this), i = Y && A(this) ? W(this, ""): n, r = F.ToUint32(i.length);
                if (!e(t))
                    throw new TypeError("Array.prototype.reduceRight callback must be a function");
                if (0 === r && 1 === arguments.length)
                    throw new TypeError("reduceRight of empty array with no initial value");
                var o, a = r - 1;
                if (arguments.length >= 2)
                    o = arguments[1];
                else 
                    for (; ;) {
                        if (a in i) {
                            o = i[a--];
                            break
                        }
                        if (--a < 0)
                            throw new TypeError("reduceRight of empty array with no initial value")
                    }
                if (a < 0)
                    return o;
                do {
                    a in i && (o = t(o, i[a], a, n))
                }
                while (a--);
                return o
            }
        }, !te);
        var ne = i.indexOf&&-1 !== [0, 1].indexOf(1, 2);
        I(i, {
            indexOf: function(e) {
                var t = Y && A(this) ? W(this, ""): F.ToObject(this), n = F.ToUint32(t.length);
                if (0 === n)
                    return - 1;
                var i = 0;
                for (arguments.length > 1 && (i = F.ToInteger(arguments[1])), i = i >= 0 ? i : w(0, n + i); i < n; i++)
                    if (i in t && t[i] === e)
                        return i;
                return - 1
            }
        }, ne);
        var ie = i.lastIndexOf&&-1 !== [0, 1].lastIndexOf(0, - 3);
        I(i, {
            lastIndexOf: function(e) {
                var t = Y && A(this) ? W(this, ""): F.ToObject(this), n = F.ToUint32(t.length);
                if (0 === n)
                    return - 1;
                var i = n - 1;
                for (arguments.length > 1 && (i = x(i, F.ToInteger(arguments[1]))), i = i >= 0 ? i : n - Math.abs(i); i >= 0; i--)
                    if (i in t && e === t[i])
                        return i;
                return - 1
            }
        }, ie);
        var re = function() {
            var e = [1, 2], t = e.splice();
            return 2 === e.length && G(t) && 0 === t.length
        }();
        I(i, {
            splice: function(e, t) {
                return 0 === arguments.length ? [] : f.apply(this, arguments)
            }
        }, !re);
        var oe = function() {
            var e = {};
            return i.splice.call(e, 0, 0, 1), 1 === e.length
        }();
        I(i, {
            splice: function(e, t) {
                if (0 === arguments.length)
                    return [];
                var n = arguments;
                return this.length = w(F.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof t && (n = H(arguments), n.length < 2 ? Q(n, this.length - e) : n[1] = F.ToInteger(t)), f.apply(this, n)
            }
        }, !oe);
        var ae = function() {
            var e = new n(1e5);
            return e[8] = "x", e.splice(1, 1), 7 === e.indexOf("x")
        }(), se = function() {
            var e = [];
            return e[256] = "a", e.splice(257, 0, "b"), "a" === e[256]
        }();
        I(i, {
            splice: function(e, t) {
                for (var n, i = F.ToObject(this), r = [], o = F.ToUint32(i.length), a = F.ToInteger(e), s = a < 0 ? w(o + a, 0) : x(a, o), u = x(w(F.ToInteger(t), 0), o - s), c = 0; c < u;)
                    n = l(s + c), R(i, n) && (r[c] = i[n]), c += 1;
                var p, d = H(arguments, 2), f = d.length;
                if (f < u) {
                    c = s;
                    for (var h = o - u; c < h;)
                        n = l(c + u), p = l(c + f), R(i, n) ? i[p] = i[n] : delete i[p], c += 1;
                    c = o;
                    for (var m = o - u + f; c > m;)
                        delete i[c - 1], c -= 1
                } else if (f > u)
                    for (c = o - u; c > s;)
                        n = l(c + u - 1), p = l(c + f - 1), R(i, n) ? i[p] = i[n] : delete i[p], c -= 1;
                c = s;
                for (var g = 0; g < d.length; ++g)
                    i[c] = d[g], c += 1;
                return i.length = o - u + f, r
            }
        }, !ae ||!se);
        var le, ue = i.join;
        try {
            le = "1,2,3" !== Array.prototype.join.call("123", ",")
        } catch (kt) {
            le=!0
        }
        le && I(i, {
            join: function(e) {
                var t = void 0 === e ? "," : e;
                return ue.call(A(this) ? W(this, "") : this, t)
            }
        }, le);
        var ce = "1,2" !== [1, 2].join(undefined);
        ce && I(i, {
            join: function(e) {
                var t = void 0 === e ? "," : e;
                return ue.call(this, t)
            }
        }, ce);
        var pe = function(e) {
            for (var t = F.ToObject(this), n = F.ToUint32(t.length), i = 0; i < arguments.length;)
                t[n + i] = arguments[i], i += 1;
            return t.length = n + i, n + i
        }, de = function() {
            var e = {};
            return 1 !== Array.prototype.push.call(e, undefined) || 1 !== e.length || "undefined" != typeof e[0] ||!R(e, 0)
        }();
        I(i, {
            push: function(e) {
                return G(this) ? h.apply(this, arguments) : pe.apply(this, arguments)
            }
        }, de);
        var fe = function() {
            var e = [];
            return 1 !== e.push(undefined) || 1 !== e.length || "undefined" != typeof e[0] ||!R(e, 0)
        }();
        I(i, {
            push: pe
        }, fe), I(i, {
            slice: function(e, t) {
                var n = A(this) ? W(this, ""): this;
                return z(n, arguments)
            }
        }, Y);
        var he = function() {
            try {
                return [1, 2].sort(null), [1, 2].sort({}), !0
            } catch (kt) {}
            return !1
        }(), me = function() {
            try {
                return [1, 2].sort(/a/), !1
            } catch (kt) {}
            return !0
        }(), ge = function() {
            try {
                return [1, 2].sort(undefined), !0
            } catch (kt) {}
            return !1
        }();
        I(i, {
            sort: function(t) {
                if (void 0 === t)
                    return K(this);
                if (!e(t))
                    throw new TypeError("Array.prototype.sort callback must be a function");
                return K(this, t)
            }
        }, he ||!ge ||!me);
        var ye=!U({
            toString: null
        }, "toString"), ve = U(function() {}, "prototype"), be=!R("x", "0"), we = function(e) {
            var t = e.constructor;
            return t && t.prototype === e
        }, xe = {
            $window: !0,
            $console: !0,
            $parent: !0,
            $self: !0,
            $frame: !0,
            $frames: !0,
            $frameElement: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $external: !0
        }, _e = function() {
            if ("undefined" == typeof window)
                return !1;
            for (var e in window)
                try {
                    !xe["$" + e] && R(window, e) && null !== window[e] && "object" == typeof window[e] && we(window[e])
            } catch (kt) {
                return !0
            }
            return !1
        }(), Se = function(e) {
            if ("undefined" == typeof window ||!_e)
                return we(e);
            try {
                return we(e)
            } catch (kt) {
                return !1
            }
        }, ke = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], Te = ke.length, Ee = function(e) {
            return "[object Arguments]" === L(e)
        }, Ce = function(t) {
            return null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0&&!G(t) && e(t.callee)
        }, De = Ee(arguments) ? Ee : Ce;
        I(r, {
            keys: function(t) {
                var n = e(t), i = De(t), r = null !== t && "object" == typeof t, o = r && A(t);
                if (!r&&!n&&!i)
                    throw new TypeError("Object.keys called on a non-object");
                var a = [], s = ve && n;
                if (o && be || i)
                    for (var u = 0; u < t.length; ++u)
                        Q(a, l(u));
                if (!i)
                    for (var c in t)
                        s && "prototype" === c ||!R(t, c) || Q(a, l(c));
                if (ye)
                    for (var p = Se(t), d = 0; d < Te; d++) {
                        var f = ke[d];
                        p && "constructor" === f ||!R(t, f) || Q(a, f)
                    }
                return a
            }
        });
        var Ne = r.keys && function() {
            return 2 === r.keys(arguments).length
        }(1, 2), Ae = r.keys && function() {
            var e = r.keys(arguments);
            return 1 !== arguments.length || 1 !== e.length || 1 !== e[0]
        }(1), Oe = r.keys;
        I(r, {
            keys: function(e) {
                return Oe(De(e) ? H(e) : e)
            }
        }, !Ne || Ae)
        ;
        var je, qe, Ie = 0 !== new Date( - 0xc782b5b342b24).getUTCMonth(), Me = new Date( - 0x55d318d56a724), Pe = new Date(14496624e5), Fe = "Mon, 01 Jan -45875 11:59:59 GMT" !== Me.toUTCString();
        Me.getTimezoneOffset()<-720 ? (je = "Tue Jan 02 -45875" !== Me.toDateString(), qe=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Pe.toString())) : (je = "Mon Jan 01 -45875" !== Me.toDateString(), qe=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Pe.toString()));
        var Be = v.bind(Date.prototype.getFullYear), Re = v.bind(Date.prototype.getMonth), Le = v.bind(Date.prototype.getDate), He = v.bind(Date.prototype.getUTCFullYear), ze = v.bind(Date.prototype.getUTCMonth), Ve = v.bind(Date.prototype.getUTCDate), We = v.bind(Date.prototype.getUTCDay), $e = v.bind(Date.prototype.getUTCHours), Qe = v.bind(Date.prototype.getUTCMinutes), Ue = v.bind(Date.prototype.getUTCSeconds), Ke = v.bind(Date.prototype.getUTCMilliseconds), Ge = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], Je = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], Xe = function(e, t) {
            return Le(new Date(t, e, 0))
        };
        I(Date.prototype, {
            getFullYear: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = Be(this);
                return e < 0 && Re(this) > 11 ? e + 1 : e
            },
            getMonth: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = Be(this), t = Re(this);
                return e < 0 && t > 11 ? 0 : t
            },
            getDate: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = Be(this), t = Re(this), n = Le(this);
                if (e < 0 && t > 11) {
                    if (12 === t)
                        return n;
                    return Xe(0, e + 1) - n + 1
                }
                return n
            },
            getUTCFullYear: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = He(this);
                return e < 0 && ze(this) > 11 ? e + 1 : e
            },
            getUTCMonth: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = He(this), t = ze(this);
                return e < 0 && t > 11 ? 0 : t
            },
            getUTCDate: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = He(this), t = ze(this), n = Ve(this);
                if (e < 0 && t > 11) {
                    if (12 === t)
                        return n;
                    return Xe(0, e + 1) - n + 1
                }
                return n
            }
        }, Ie), I(Date.prototype, {
            toUTCString: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = We(this), t = Ve(this), n = ze(this), i = He(this), r = $e(this), o = Qe(this), a = Ue(this);
                return Ge[e] + ", " + (t < 10 ? "0" + t : t) + " " + Je[n] + " " + i + " " + (r < 10 ? "0" + r : r) + ":" + (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + " GMT"
            }
        }, Ie || Fe), I(Date.prototype, {
            toDateString: function() {
                if (!(this && this instanceof Date))
                    throw new TypeError("this is not a Date object.");
                var e = this.getDay(), t = this.getDate(), n = this.getMonth(), i = this.getFullYear();
                return Ge[e] + " " + Je[n] + " " + (t < 10 ? "0" + t : t) + " " + i
            }
        }, Ie || je), (Ie || qe) && (Date.prototype.toString = function() {
            if (!(this && this instanceof Date))
                throw new TypeError("this is not a Date object.");
            var e = this.getDay(), t = this.getDate(), n = this.getMonth(), i = this.getFullYear(), r = this.getHours(), o = this.getMinutes(), a = this.getSeconds(), s = this.getTimezoneOffset(), l = Math.floor(Math.abs(s) / 60), u = Math.floor(Math.abs(s)%60);
            return Ge[e] + " " + Je[n] + " " + (t < 10 ? "0" + t : t) + " " + i + " " + (r < 10 ? "0" + r : r) + ":" + (o < 10 ? "0" + o : o) + ":" + (a < 10 ? "0" + a : a) + " GMT" + (s > 0 ? "-" : "+") + (l < 10 ? "0" + l : l) + (u < 10 ? "0" + u : u)
        }, q && r.defineProperty(Date.prototype, "toString", {
            configurable: !0,
            enumerable: !1,
            writable: !0
        }));
        var Ye = Date.prototype.toISOString&&-1 === new Date( - 621987552e5).toISOString().indexOf("-000001"), Ze = Date.prototype.toISOString && "1969-12-31T23:59:59.999Z" !== new Date( - 1).toISOString(), et = v.bind(Date.prototype.getTime);
        I(Date.prototype, {
            toISOString: function() {
                if (!isFinite(this) ||!isFinite(et(this)))
                    throw new RangeError("Date.prototype.toISOString called on non-finite value.");
                var e = He(this), t = ze(this);
                e += Math.floor(t / 12), t = (t%12 + 12)%12;
                var n = [t + 1, Ve(this), $e(this), Qe(this), Ue(this)];
                e = (e < 0 ? "-" : e > 9999 ? "+" : "") + V("00000" + Math.abs(e), 0 <= e && e <= 9999?-4 : - 6);
                for (var i = 0; i < n.length; ++i)
                    n[i] = V("00" + n[i], - 2);
                return e + "-" + H(n, 0, 2).join("-") + "T" + H(n, 2).join(":") + "." + V("000" + Ke(this), - 3) + "Z"
            }
        }, Ye || Ze), function() {
            try {
                return Date.prototype.toJSON && null === new Date(NaN).toJSON()&&-1 !== new Date( - 621987552e5).toJSON().indexOf("-000001") && Date.prototype.toJSON.call({
                    toISOString: function() {
                        return !0
                    }
                })
            } catch (kt) {
                return !1
            }
        }() || (Date.prototype.toJSON = function(t) {
            var n = r(this), i = F.ToPrimitive(n);
            if ("number" == typeof i&&!isFinite(i))
                return null;
            var o = n.toISOString;
            if (!e(o))
                throw new TypeError("toISOString property is not callable");
            return o.call(n)
        });
        var tt = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"), nt=!isNaN(Date.parse("2012-04-04T24:00:00.500Z")) ||!isNaN(Date.parse("2012-11-31T23:59:59.000Z")) ||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
        if (isNaN(Date.parse("2000-01-01T00:00:00.000Z")) || nt ||!tt) {
            var it = Math.pow(2, 31) - 1, rt = P(new Date(1970, 0, 1, 0, 0, 0, it + 1).getTime());
            Date = function(e) {
                var t = function(n, i, r, o, a, s, u) {
                    var c, p = arguments.length;
                    if (this instanceof e) {
                        var d = s, f = u;
                        if (rt && p >= 7 && u > it) {
                            var h = Math.floor(u / it) * it, m = Math.floor(h / 1e3);
                            d += m, f -= 1e3 * m
                        }
                        c = 1 === p && l(n) === n ? new e(t.parse(n)) : p >= 7 ? new e(n, i, r, o, a, d, f) : p >= 6 ? new e(n, i, r, o, a, d) : p >= 5 ? new e(n, i, r, o, a) : p >= 4 ? new e(n, i, r, o) : p >= 3 ? new e(n, i, r) : p >= 2 ? new e(n, i) : p >= 1 ? new e(n instanceof e?+n : n) : new e
                    } else 
                        c = e.apply(this, arguments);
                    return M(c) || I(c, {
                        constructor: t
                    }, !0), c
                }, n = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"), i = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365], r = function(e, t) {
                    var n = t > 1 ? 1: 0;
                    return i[t] + Math.floor((e - 1969 + n) / 4) - Math.floor((e - 1901 + n) / 100) + Math.floor((e - 1601 + n) / 400) + 365 * (e - 1970)
                }, o = function(t) {
                    var n = 0, i = t;
                    if (rt && i > it) {
                        var r = Math.floor(i / it) * it, o = Math.floor(r / 1e3);
                        n += o, i -= 1e3 * o
                    }
                    return c(new e(1970, 0, 1, 0, 0, n, i))
                };
                for (var a in e)
                    R(e, a) && (t[a] = e[a]);
                return I(t, {
                    now: e.now,
                    UTC: e.UTC
                }, !0), t.prototype = e.prototype, I(t.prototype, {
                    constructor: t
                }, !0), I(t, {
                    parse: function(t) {
                        var i = n.exec(t);
                        if (i) {
                            var a, s = c(i[1]), l = c(i[2] || 1) - 1, u = c(i[3] || 1) - 1, p = c(i[4] || 0), d = c(i[5] || 0), f = c(i[6] || 0), h = Math.floor(1e3 * c(i[7] || 0)), m = Boolean(i[4]&&!i[8]), g = "-" === i[9] ? 1: - 1, y = c(i[10] || 0), v = c(i[11] || 0);
                            return p < (d > 0 || f > 0 || h > 0 ? 24 : 25) && d < 60 && f < 60 && h < 1e3 && l>-1 && l < 12 && y < 24 && v < 60 && u>-1 && u < r(s, l + 1) - r(s, l) && (a = 60 * (24 * (r(s, l) + u) + p + y * g), a = 1e3 * (60 * (a + d + v * g) + f) + h, m && (a = o(a)), - 864e13 <= a && a <= 864e13) ? a : NaN
                        }
                        return e.parse.apply(this, arguments)
                    }
                }), t
            }(Date)
        }
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        });
        var ot = p.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)), at = {
            base: 1e7,
            size: 6,
            data: [0, 0, 0, 0, 0, 0],
            multiply: function(e, t) {
                for (var n =- 1, i = t; ++n < at.size;)
                    i += e * at.data[n], at.data[n] = i%at.base, i = Math.floor(i / at.base)
            },
            divide: function(e) {
                for (var t = at.size, n = 0; --t >= 0;)
                    n += at.data[t], at.data[t] = Math.floor(n / e), n = n%e * at.base
            },
            numToString: function() {
                for (var e = at.size, t = ""; --e >= 0;)
                    if ("" !== t || 0 === e || 0 !== at.data[e]) {
                        var n = l(at.data[e]);
                        "" === t ? t = n : t += V("0000000", 0, 7 - n.length) + n
                    }
                return t
            },
            pow: function Tt(e, t, n) {
                return 0 === t ? n : t%2 == 1 ? Tt(e, t - 1, n * e) : Tt(e * e, t / 2, n)
            },
            log: function(e) {
                for (var t = 0, n = e; n >= 4096;)
                    t += 12, n/=4096;
                for (; n >= 2;)
                    t += 1, n/=2;
                return t
            }
        };
        I(p, {
            toFixed: function(e) {
                var t, n, i, r, o, a, s, u;
                if (t = c(e), (t = P(t) ? 0 : Math.floor(t)) < 0 || t > 20)
                    throw new RangeError("Number.toFixed called with invalid number of decimals");
                if (n = c(this), P(n))
                    return "NaN";
                if (n<=-1e21 || n >= 1e21)
                    return l(n);
                if (i = "", n < 0 && (i = "-", n =- n), r = "0", n > 1e-21)
                    if (o = at.log(n * at.pow(2, 69, 1)) - 69, a = o < 0 ? n * at.pow(2, - o, 1) : n / at.pow(2, o, 1), a*=4503599627370496, (o = 52 - o) > 0) {
                        for (at.multiply(0, a), s = t; s >= 7;)
                            at.multiply(1e7, 0), s -= 7;
                            for (at.multiply(at.pow(10, s, 1), 0), s = o - 1; s >= 23;)
                                at.divide(1<<23), s -= 23;
                                at.divide(1<<s), at.multiply(1, 1), at.divide(2), r = at.numToString()
                    } else 
                        at.multiply(0, a), at.multiply(1<<-o, 0), r = at.numToString() + V("0.00000000000000000000", 2, 2 + t);
                return t > 0 ? (u = r.length, r = u <= t ? i + V("0.0000000000000000000", 0, t - u + 2) + r : i + V(r, 0, u - t) + "." + V(r, u - t)) : r = i + r, r
            }
        }, ot);
        var st = function() {
            try {
                return "1" === 1..toPrecision(undefined)
            } catch (kt) {
                return !0
            }
        }(), lt = p.toPrecision;
        I(p, {
            toPrecision: function(e) {
                return void 0 === e ? lt.call(this) : lt.call(this, e)
            }
        }, st), 2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, - 1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? function() {
            var e = "undefined" == typeof/()??/.exec("")[1], n = Math.pow(2, 32) - 1;
            u.split = function(i, r) {
                var o = String(this);
                if (void 0 === i && 0 === r)
                    return [];
                if (!t(i))
                    return W(this, i, r);
                var a, s, l, u, c = [], p = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""), d = 0, f = new RegExp(i.source, p + "g");
                e || (a = new RegExp("^" + f.source + "$(?!\\s)", p));
                var m = void 0 === r ? n : F.ToUint32(r);
                for (s = f.exec(o); s&&!((l = s.index + s[0].length) > d && (Q(c, V(o, d, s.index)), !e && s.length > 1 && s[0].replace(a, function() {
                    for (var e = 1; e < arguments.length - 2; e++)
                        "undefined" == typeof arguments[e] && (s[e] = void 0)
                }), s.length > 1 && s.index < o.length && h.apply(c, H(s, 1)), u = s[0].length, d = l, c.length >= m));)
                    f.lastIndex === s.index && f.lastIndex++, s = f.exec(o);
                return d === o.length?!u && f.test("") || Q(c, "") : Q(c, V(o, d)), c.length > m ? H(c, 0, m) : c
            }
        }() : "0".split(void 0, 0).length && (u.split = function(e, t) {
            return void 0 === e && 0 === t ? [] : W(this, e, t)
        });
        var ut = u.replace;
        (function() {
            var e = [];
            return "x".replace(/x(.)?/g, function(t, n) {
                Q(e, n)
            }), 1 === e.length && "undefined" == typeof e[0]
        })() || (u.replace = function(n, i) {
            var r = e(i), o = t(n) && /\)[*?]/.test(n.source);
            if (r && o) {
                var a = function(e) {
                    var t = arguments.length, r = n.lastIndex;
                    n.lastIndex = 0;
                    var o = n.exec(e) || [];
                    return n.lastIndex = r, Q(o, arguments[t - 2], arguments[t - 1]), i.apply(this, o)
                };
                return ut.call(this, n, a)
            }
            return ut.call(this, n, i)
        });
        var ct = u.substr, pt = "".substr && "b" !== "0b".substr( - 1);
        I(u, {
            substr: function(e, t) {
                var n = e;
                return e < 0 && (n = w(this.length + e, 0)), ct.call(this, n, t)
            }
        }, pt);
        var dt = "\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff", ft = "​", ht = "[" + dt + "]", mt = new RegExp("^" + ht + ht + "*"), gt = new RegExp(ht + ht + "*$"), yt = u.trim && (dt.trim() ||!ft.trim());
        I(u, {
            trim: function() {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                return l(this).replace(mt, "").replace(gt, "")
            }
        }, yt);
        var vt = v.bind(String.prototype.trim), bt = u.lastIndexOf&&-1 !== "abcあい".lastIndexOf("あい", 2);
        I(u, {
            lastIndexOf: function(e) {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                for (var t = l(this), n = l(e), i = arguments.length > 1 ? c(arguments[1]) : NaN, r = P(i) ? Infinity : F.ToInteger(i), o = x(w(r, 0), t.length), a = n.length, s = o + a; s > 0;) {
                    s = w(0, s - a);
                    var u = $(V(t, s, o + a), n);
                    if ( - 1 !== u)
                        return s + u
                }
                return - 1
            }
        }, bt);
        var wt = u.lastIndexOf;
        if (I(u, {
            lastIndexOf: function(e) {
                return wt.apply(this, arguments)
            }
        }, 1 !== u.lastIndexOf.length), 8 === parseInt(dt + "08") && 22 === parseInt(dt + "0x16") || (parseInt = function(e) {
            var t = /^[\-+]?0[xX]/;
            return function(n, i) {
                var r = vt(String(n)), o = c(i) || (t.test(r) ? 16 : 10);
                return e(r, o)
            }
        }(parseInt)), 1 / parseFloat("-0")!=-Infinity && (parseFloat = function(e) {
            return function(t) {
                var n = vt(String(t)), i = e(n);
                return 0 === i && "-" === V(n, 0, 1)?-0 : i
            }
        }(parseFloat)), "RangeError: test" !== String(new RangeError("test"))) {
            var xt = function() {
                if (void 0 === this || null === this)
                    throw new TypeError("can't convert " + this + " to object");
                var e = this.name;
                void 0 === e ? e = "Error" : "string" != typeof e && (e = l(e));
                var t = this.message;
                return void 0 === t ? t = "" : "string" != typeof t && (t = l(t)), e ? t ? e + ": " + t : e : t
            };
            Error.prototype.toString = xt
        }
        if (q) {
            var _t = function(e, t) {
                if (U(e, t)) {
                    var n = Object.getOwnPropertyDescriptor(e, t);
                    n.configurable && (n.enumerable=!1, Object.defineProperty(e, t, n))
                }
            };
            _t(Error.prototype, "message"), "" !== Error.prototype.message && (Error.prototype.message = ""), _t(Error.prototype, "name")
        }
        if ("/a/gim" !== String(/a/gim)) {
            var St = function() {
                var e = "/" + this.source + "/";
                return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), e
            };
            RegExp.prototype.toString = St
        }
    })
}, function(e, t, n) {
    (function(t, i) {
        !function(t, n) {
            e.exports = n()
        }(0, function() {
            "use strict";
            function e(e) {
                var t = typeof e;
                return null !== e && ("object" === t || "function" === t)
            }
            function r(e) {
                return "function" == typeof e
            }
            function o(e) {
                $ = e
            }
            function a(e) {
                Q = e
            }
            function s() {
                return void 0 !== W ? function() {
                    W(u)
                } : l()
            }
            function l() {
                var e = setTimeout;
                return function() {
                    return e(u, 1)
                }
            }
            function u() {
                for (var e = 0; e < V; e += 2) {
                    (0, Y[e])(Y[e + 1]), Y[e] = undefined, Y[e + 1] = undefined
                }
                V = 0
            }
            function c(e, t) {
                var n = arguments, i = this, r = new this.constructor(d);
                r[ee] === undefined && O(r);
                var o = i._state;
                return o ? function() {
                    var e = n[o - 1];
                    Q(function() {
                        return D(o, r, e, i._result)
                    })
                }() : k(i, r, e, t), r
            }
            function p(e) {
                var t = this;
                if (e && "object" == typeof e && e.constructor === t)
                    return e;
                var n = new t(d);
                return w(n, e), n
            }
            function d() {}
            function f() {
                return new TypeError("You cannot resolve a promise with itself")
            }
            function h() {
                return new TypeError("A promises callback cannot return that same promise.")
            }
            function m(e) {
                try {
                    return e.then
                } catch (t) {
                    return re.error = t, re
                }
            }
            function g(e, t, n, i) {
                try {
                    e.call(t, n, i)
                } catch (r) {
                    return r
                }
            }
            function y(e, t, n) {
                Q(function(e) {
                    var i=!1, r = g(n, t, function(n) {
                        i || (i=!0, t !== n ? w(e, n) : _(e, n))
                    }, function(t) {
                        i || (i=!0, S(e, t))
                    }, "Settle: " + (e._label || " unknown promise"));
                    !i && r && (i=!0, S(e, r))
                }, e)
            }
            function v(e, t) {
                t._state === ne ? _(e, t._result) : t._state === ie ? S(e, t._result) : k(t, undefined, function(t) {
                    return w(e, t)
                }, function(t) {
                    return S(e, t)
                })
            }
            function b(e, t, n) {
                t.constructor === e.constructor && n === c && t.constructor.resolve === p ? v(e, t) : n === re ? (S(e, re.error), re.error = null) : n === undefined ? _(e, t) : r(n) ? y(e, t, n) : _(e, t)
            }
            function w(t, n) {
                t === n ? S(t, f()) : e(n) ? b(t, n, m(n)) : _(t, n)
            }
            function x(e) {
                e._onerror && e._onerror(e._result), T(e)
            }
            function _(e, t) {
                e._state === te && (e._result = t, e._state = ne, 0 !== e._subscribers.length && Q(T, e))
            }
            function S(e, t) {
                e._state === te && (e._state = ie, e._result = t, Q(x, e))
            }
            function k(e, t, n, i) {
                var r = e._subscribers, o = r.length;
                e._onerror = null, r[o] = t, r[o + ne] = n, r[o + ie] = i, 0 === o && e._state && Q(T, e)
            }
            function T(e) {
                var t = e._subscribers, n = e._state;
                if (0 !== t.length) {
                    for (var i = undefined, r = undefined, o = e._result, a = 0; a < t.length; a += 3)
                        i = t[a], r = t[a + n], i ? D(n, i, r, o) : r(o);
                    e._subscribers.length = 0
                }
            }
            function E() {
                this.error = null
            }
            function C(e, t) {
                try {
                    return e(t)
                } catch (n) {
                    return oe.error = n, oe
                }
            }
            function D(e, t, n, i) {
                var o = r(n), a = undefined, s = undefined, l = undefined, u = undefined;
                if (o) {
                    if (a = C(n, i), a === oe ? (u=!0, s = a.error, a.error = null) : l=!0, t === a)
                        return void S(t, h())
                } else 
                    a = i, l=!0;
                t._state !== te || (o && l ? w(t, a) : u ? S(t, s) : e === ne ? _(t, a) : e === ie && S(t, a))
            }
            function N(e, t) {
                try {
                    t(function(t) {
                        w(e, t)
                    }, function(t) {
                        S(e, t)
                    })
                } catch (n) {
                    S(e, n)
                }
            }
            function A() {
                return ae++
            }
            function O(e) {
                e[ee] = ae++, e._state = undefined, e._result = undefined, e._subscribers = []
            }
            function j(e, t) {
                this._instanceConstructor = e, this.promise = new e(d), this.promise[ee] || O(this.promise), z(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? _(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && _(this.promise, this._result))) : S(this.promise, q())
            }
            function q() {
                return new Error("Array Methods must be provided an Array")
            }
            function I(e) {
                return new j(this, e).promise
            }
            function M(e) {
                var t = this;
                return new t(z(e) ? function(n, i) {
                    for (var r = e.length, o = 0; o < r; o++)
                        t.resolve(e[o]).then(n, i)
                } : function(e, t) {
                    return t(new TypeError("You must pass an array to race."))
                })
            }
            function P(e) {
                var t = this, n = new t(d);
                return S(n, e), n
            }
            function F() {
                throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
            }
            function B() {
                throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
            }
            function R(e) {
                this[ee] = A(), this._result = this._state = undefined, this._subscribers = [], d !== e && ("function" != typeof e && F(), this instanceof R ? N(this, e) : B())
            }
            function L() {
                var e = undefined;
                if (void 0 !== i)
                    e = i;
                else if ("undefined" != typeof self)
                    e = self;
                else 
                    try {
                        e = Function("return this")()
                } catch (r) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var t = e.Promise;
                if (t) {
                    var n = null;
                    try {
                        n = Object.prototype.toString.call(t.resolve())
                    } catch (r) {}
                    if ("[object Promise]" === n&&!t.cast)
                        return 
                }
                e.Promise = R
            }
            var H = undefined;
            H = Array.isArray ? Array.isArray : function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            };
            var z = H, V = 0, W = undefined, $ = undefined, Q = function(e, t) {
                Y[V] = e, Y[V + 1] = t, 2 === (V += 2) && ($ ? $(u) : Z())
            }, U = "undefined" != typeof window ? window: undefined, K = U || {}, G = K.MutationObserver || K.WebKitMutationObserver, J = "undefined" == typeof self && void 0 !== t && "[object process]" === {}.toString.call(t), X = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, Y = new Array(1e3), Z = undefined;
            Z = J ? function() {
                return function() {
                    return t.nextTick(u)
                }
            }() : G ? function() {
                var e = 0, t = new G(u), n = document.createTextNode("");
                return t.observe(n, {
                    characterData: !0
                }), function() {
                    n.data = e=++e%2
                }
            }() : X ? function() {
                var e = new MessageChannel;
                return e.port1.onmessage = u, function() {
                    return e.port2.postMessage(0)
                }
            }() : U === undefined ? function() {
                try {
                    var e = n(8);
                    return W = e.runOnLoop || e.runOnContext, s()
                } catch (t) {
                    return l()
                }
            }() : l();
            var ee = Math.random().toString(36).substring(16), te = void 0, ne = 1, ie = 2, re = new E, oe = new E, ae = 0;
            return j.prototype._enumerate = function(e) {
                for (var t = 0; this._state === te && t < e.length; t++)
                    this._eachEntry(e[t], t)
            }, j.prototype._eachEntry = function(e, t) {
                var n = this._instanceConstructor, i = n.resolve;
                if (i === p) {
                    var r = m(e);
                    if (r === c && e._state !== te)
                        this._settledAt(e._state, t, e._result);
                    else if ("function" != typeof r)
                        this._remaining--, this._result[t] = e;
                    else if (n === R) {
                        var o = new n(d);
                        b(o, e, r), this._willSettleAt(o, t)
                    } else 
                        this._willSettleAt(new n(function(t) {
                            return t(e)
                        }), t)
                } else 
                    this._willSettleAt(i(e), t)
            }, j.prototype._settledAt = function(e, t, n) {
                var i = this.promise;
                i._state === te && (this._remaining--, e === ie ? S(i, n) : this._result[t] = n), 0 === this._remaining && _(i, this._result)
            }, j.prototype._willSettleAt = function(e, t) {
                var n = this;
                k(e, undefined, function(e) {
                    return n._settledAt(ne, t, e)
                }, function(e) {
                    return n._settledAt(ie, t, e)
                })
            }, R.all = I, R.race = M, R.resolve = p, R.reject = P, R._setScheduler = o, R._setAsap = a, R._asap = Q, R.prototype = {
                constructor: R,
                then: c,
                "catch": function(e) {
                    return this.then(null, e)
                }
            }, R.polyfill = L, R.Promise = R, R
        })
    }).call(t, n(7), function() {
        return this
    }())
}, function(e, t) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }
    function i() {
        throw new Error("clearTimeout has not been defined")
    }
    function r(e) {
        if (c === setTimeout)
            return setTimeout(e, 0);
        if ((c === n ||!c) && setTimeout)
            return c = setTimeout, setTimeout(e, 0);
        try {
            return c(e, 0)
        } catch (t) {
            try {
                return c.call(null, e, 0)
            } catch (t) {
                return c.call(this, e, 0)
            }
        }
    }
    function o(e) {
        if (p === clearTimeout)
            return clearTimeout(e);
        if ((p === i ||!p) && clearTimeout)
            return p = clearTimeout, clearTimeout(e);
        try {
            return p(e)
        } catch (t) {
            try {
                return p.call(null, e)
            } catch (t) {
                return p.call(this, e)
            }
        }
    }
    function a() {
        m && f && (m=!1, f.length ? h = f.concat(h) : g =- 1, h.length && s())
    }
    function s() {
        if (!m) {
            var e = r(a);
            m=!0;
            for (var t = h.length; t;) {
                for (f = h, h = []; ++g < t;)
                    f && f[g].run();
                g =- 1, t = h.length
            }
            f = null, m=!1, o(e)
        }
    }
    function l(e, t) {
        this.fun = e, this.array = t
    }
    function u() {}
    var c, p, d = e.exports = {};
    !function() {
        try {
            c = "function" == typeof setTimeout ? setTimeout : n
        } catch (e) {
            c = n
        }
        try {
            p = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
            p = i
        }
    }();
    var f, h = [], m=!1, g =- 1;
    d.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        h.push(new l(e, t)), 1 !== h.length || m || r(s)
    }, l.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, d.title = "browser", d.browser=!0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function(e) {
        return []
    }, d.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, d.cwd = function() {
        return "/"
    }, d.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, d.umask = function() {
        return 0
    }
}, function(e, t) {
    e.exports = {
        title: "QQ注册",
        lang: 2052,
        now_language: "简体中文",
        welcome: "欢迎注册QQ",
        header: "每一天，乐在沟通。",
        nickname: "昵称",
        password: "密码",
        reg_now: "立即注册",
        agree: "我已阅读并同意相关服务条款和隐私政策",
        mail_account: "邮箱帐号",
        feedback: "意见反馈",
        mail: "邮箱",
        reg_succ: "注册成功",
        need_active: "等待激活",
        mail_has_send: "激活邮件已发送至：{mail}",
        active_tips: "请在24小时内登录您的邮箱，按照邮件中的提示激活帐号。",
        login_mail: "登录邮箱",
        if_no_mail: "如果您没有收到激活邮件",
        try_mail: "您可以尝试以下方法",
        mail_tip1: "1. 查看您邮箱的垃圾箱，激活邮件是否被误认为是垃圾邮件",
        mail_tip2: "2. 点击这里让系统重新发送一封邮件",
        mail_tip3: "3. 如果您总收不到，<a href='javascript:location.reload()'>可以点击这里更换其他邮箱地址</a>",
        mail_has_resend: "激活邮件已重新发送至：{mail}",
        login: "立即登录",
        nick_null: "昵称不可以为空",
        nick_blank: "昵称不可以为空格",
        nick_max: "不能超过24个字母或12个汉字",
        nick_invalid: "您不能使用该昵称注册",
        nick_plz_input: "请输入昵称",
        mail_plz_input: "请输入邮箱",
        mail_exist: "邮箱已被注册",
        mail_illeagl: "邮箱格式错误",
        mail_length: "长度为3-18个字符",
        mail_start_limit: "必须以a-z的英文字母（不分大小写）开头",
        mail_end_limit: "由英文字母、数字结尾",
        mail_char_limit: "由3-16个英文、数字、点、减号、下划线组成",
        mail_special_limit: "点、减号、下划线不能连续出现两次或两次以上",
        "return": "返回",
        password_null: "密码不能为空",
        password_blank: "不能包括空格",
        password_length: "长度为8-16个字符",
        password_simple: "必须包含字母、数字、符号中至少2种",
        verify_code_error: "验证码错误",
        evil_error: "受恶意注册影响，您暂时无法完成注册，请24小时后再试。",
        frq_error: "非常抱歉，你操作过于频繁，请稍后再试！",
        code_null: "请填写验证码",
        password_input: "请输入密码",
        agreement_need: "请先同意服务条款",
    }
}
]);
