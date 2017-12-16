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
    window.monitor = function(e, t, n) {
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
            this.reg_type = function() {
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
            }(), this.succ = s.observable(!1), this.active = s.observable(!1), this.nickname = s.observable(""), this.nicknameStatus = s.observable(0), this.nicknameTips = s.computed(function() {
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
            }), this.mail_has_send = s.computed(function() {
                return e.str().mail_has_send.replace("{mail}", e.mail())
            }), this.mail_has_resend = s.computed(function() {
                return e.str().mail_has_resend.replace("{mail}", e.mail())
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
            l(n), l(window).resize(n), l.ajax({
                url: "/cgi-bin/common/getUpPort?r=" + Math.random()
            }).done(function(e) {
                0 == e.ec && t.up_sms_port(e.upport)
            }), l(document.body).on("click", function(t) {
                return !0
            });
            var o = i("ADTAG") || "", a = i("regkey") || "", u = new Date;
            u.setTime(u.getTime() + 2628e3), document.cookie = "ADTAG=" + o + "; expires=" + u.toUTCString() + "; path=/", document.cookie = "regkey=" + a + "; expires=" + u.toUTCString() ;
            var p = i("email"), f = i("uin"), m = i("key2"), i("ec"));
            if (g)
                return void this.error(parseInt(g));
            this.initSession()
        }
        return e.prototype.checkDirtyNickname = function(e) {
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
        }, e.prototype.clearCode = function() {
            this.getNumTips(""), this.codeTips("")
        }, e.prototype.checkMail = function(e, t) {
            var n = this;
            if (0 == this.mail().length)
                return void(!0 === t ? this.mailStatus(0) : this.mailStatus(this.str().mail_plz_input));
            if (/^[^a-z0-9]/i.test(this.mail()))
                return void this.mailStatus(this.str().mail_illeagl);
            if (/@(qq|foxmail)\.com$/.test(this.mail()))
                return void this.mailStatus(this.str().mail_not_qq)
            if (!1 !== e) {
                var i = {
                    r: Math.random(),
                    nick: this.nickname()
                };
                return e && e.ticket && e.randstr && (i.tk = e.ticket, i.verifycode = e.randstr), i.email = this.mail(), l.ajax({
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
        }, e.prototype.isMail = function() {
            return 2 == this.reg_type()
        }, e.prototype.loadAvatar = function(e) {
            l.ajax({
                url: ("https:" === location.protocol ? "https://ssl." : "http://") + "ptlogin2.qq.com/getface?appid=1&imgtype=3&encrytype=0&devtype=0&keytpye=0&uin=" + encodeURIComponent(e) + "&r=" + Math.random(),
                dataType: "jsonp"
            })
        }, e.prototype.submit = function(e) {
            var t = this;
            var n=!1;
            if (this.checkPassword(!1), this.checkDirtyNickname(!1), this.isMail() && this.checkMail(!1), this.agree() || (this.getNumTips(this.str().agreement_need), n=!0), this.isMail() && 1 !== this.mailStatus() && (n=!0), 1 !== this.mailStatus() && (n=!0), 1 !== this.nicknameStatus() && (n=!0), 1 !== this.passwordStatus() && (n=!0)) {
                if (this.capt_level() <= 3)
                    0 === this.code().length && (this.codeTips(this.str().code_null), n=!0);
                else if (4 === this.capt_level()&&!this.is_up_sms())
                    return void this.is_up_sms(!0)
            } else ( - 1 !== [3, 4].indexOf(this.capt_level()) || this.isLianghao()
                ) && (this.codeTips(this.str().code_null), n=!0);
            if (!n) {
                var i = {
                    nick: this.nickname(),
                    password: this.encryptedPassword(),
                    smsvc: this.code()
                };
                if (this.isLianghao() && (i.bind_uin = this.lianghao(), i.act_lsig = this.act_lsig, i.elevel = this.elevel()),  this.isMail() && (i.email = this.mail()), - 1 !== [1, 2].indexOf(this.capt_level()) && 0 == this.code().length) {
                    if (!(e && e.ticket && e.randstr))
                        return this.verify_type(3), void this.is_verify(!0);
                    i.verifycode = e.randstr, i.tk = e.ticket
                }
                return l("#get_acc").attr("disabled", "disabled").addClass("disabled"), l.ajax({
                    url: this.isLianghao() ? "/cgi-bin/chs/lh_activity/bind_acc": "/cgi-bin/zc/get_acc",
                    method: "POST",
                    data: i
                }).then(function(e) {
                    switch (parseInt(e.ec)) {
                    case 0:
                        t.succ(!0), t.isMail() && t.active(!0);
                        for (var n = 1; n < 4; ++n)
                            e["fuin" + n] && e["nick" + n];
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
        }, e.prototype.onEmailVerifyOK = function(e) {
            this.is_verify(!1), this.checkMail(e)
        }, e.prototype.onGetNumVerifyOK = function(e) {
            this.is_verify(!1), this.submit(e)
        }, e.prototype.resend = function() {
            l.ajax({
                url: "/cgi-bin/zc/re_act",
                data: {
                    uin: this.qq(),
                    email: this.mail(),
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
        }, e
}(), g = new m;
   document.body.style.display = "block", setTimeout(function() {
        return document.body.style.opacity = "1"
    }, 0), window.pt = {
    }
}, function(e, t) {
    e.exports = {
        title: "NextCFD注册",
        lang: 2052,
        now_language: "简体中文",
        welcome: "欢迎注册NextCFD",
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
