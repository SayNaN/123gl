$(document).ready(function() {
    var a = window.location.href;
    var b = "";
    var c = "/api/v1/auth/";
    var d =- 1 != a.search("referrer=") ? a.split("referrer=")[1].split("&")[0] : "";
    var e =- 1 != a.search("action=") ? a.split("action=")[1].split("&")[0] : "";
    var f = {};
    - 1 === document.referrer.search("authentication") && localStorage.setItem("docReferrer", document.referrer);
    var g = function() {
        $.ajax({
            type: "POST",
            url: c + "validate",
            headers: {
                Authorization: "Basic " + b,
                "Content-type": "application/json; charset=UTF-8"
            },
            success: function(a) {
                a&&!0 === a.valid ? h() : ($(".loader-box").hide(), $(".main-login").fadeIn(100))
            },
            error: function(a, b) {
                !a || 0 != a.status && 502 != a.status && 503 != a.status ? window.location.href = "/authentication?referrer=" + d : window.location.href = "/authentication?action=server_down"
            }
        })
    };
    var h = function() {
        var a = {}, e = $(".err-msg");
        if (!b) {
            var f = $("#emailInput").val(), g = $("#passInput").val();
            if (b = btoa(f + ":" + g), "" === f || "" === g)
                return e.find("p").text("Please type your email and password"), e.fadeIn(), setTimeout(function() {
                    e.fadeOut()
                }, 3e3), void p.enable();
            if (g.length < 8)
                return e.find("p").text("Password too short (< 8 characters)!"), e.fadeIn(), setTimeout(function() {
                    e.fadeOut()
                }, 3e3), void p.enable()
        }
        $.ajax({
            type: "POST",
            url: c,
            headers: {
                Authorization: "Basic " + b,
                "Content-type": "application/json; charset=UTF-8"
            },
            dataType: "json",
            data: a ? JSON.stringify(a): {},
            success: function(a) {
                if (a)
                    if (setCookie("uid", a.uid), setCookie("sid", a.sid), setCookie("username", a.username), localStorage.setItem("forumUsername", a.username), a.lastUsernameModificationDate) {
                        localStorage.removeItem("docReferrer");
                        var b = l();
                        $.when(b).done(function(b) {
                            d?-1 != a.location.search("onboarding") ? window.location = a.location : window.location = "/" + d : document.referrer&&!document.referrer.match(/signup\/success_..\.html/g) ? window.location = document.referrer : window.location = a.location
                        })
                    } else 
                        i()
            },
            error: function(a) {
                return p.enable(),  a && 401 == a.status ? (e.find("p").text("Authentication failed. Please check your credentials and try again."), e.fadeIn(), setTimeout(function() {
                    e.fadeOut()
                }, 3e3), removeCookie("uid"), removeCookie("sid"), void removeCookie("username")) : a && 502 == a.status || a && 503 == a.status ? void(window.location.href = "/authentication?action=server_down") : void 0
            }
        })
    }
    var i = function() {
        $(".loader-box").hide(), $(".main-login").hide(), $(".forum-login").fadeIn(100), k()
    }
    var j = function() {
        $(".loader-box").hide(), $(".main-login").hide(), $(".server-down").fadeIn(100)
    }
    var k = function() {
        getCookie().uid && getCookie().sid && (b = btoa(getCookie().uid + ":" + getCookie().sid)), $.ajax({
            type: "GET",
            url: "/api/v1/users/user",
            headers: {
                Authorization: "Basic " + b,
                "Content-type": "application/json; charset=UTF-8"
            },
            dataType: "json",
            success: function(a) {
                if (a) {
                    f = a;
                    var b = a.username.replace(/[^a-zA-Z0-9]/g, "_");
                    b.length < 3 && (b += Array(3 - b.length + 1).join("_")), b.length > 15 && (b = b.slice(0, 15)), $("#forumUsername").val(b)
                }
            },
            error: function(a) {}
        })
    }
    var l = function() {
        var a = $.Deferred();
        return getCookie().uid && getCookie().sid && (b = btoa(getCookie().uid + ":" + getCookie().sid)), $.ajax({
            type: "POST",
            url: "/api/v1/auth/sso",
            headers: {
                Authorization: "Basic " + b,
                "Content-type": "application/json; charset=UTF-8"
            },
            dataType: "json",
            success: function(b) {
                a.resolve(b)
            },
            error: function(b) {
                a.resolve(b)
            }
        }), a
    }
    var m = function() {
        q.disable();
        var a = $(".err-msg");
        getCookie().uid && getCookie().sid && (b = btoa(getCookie().uid + ":" + getCookie().sid));
        var c = {
            username: $("#forumUsername").val()
        };
        $.ajax({
            type: "PUT",
            url: "/api/v1/users/" + getCookie().username,
            headers: {
                Authorization: "Basic " + b,
                "Content-type": "application/json; charset=UTF-8"
            },
            data: JSON.stringify($.extend(f, c)),
            success: function(a, b) {
                "success" === b && (q.enable(), h())
            },
            error: function(b) {
                b && 409 === b.status ? a.text("Username already exist. Please try something else.") : a.text("Wrong format or invalid username. Please try again."), q.enable(), a.fadeIn(), setTimeout(function() {
                    a.fadeOut()
                }, 3e3)
            }
        })
    }
    var n = function() {
        getCookie().uid && getCookie().sid ? (b = btoa(getCookie().uid + ":" + getCookie().sid), removeCookie("uid"), removeCookie("sid"), removeCookie("username"), localStorage.removeItem("simscale"), $.ajax({
            type: "POST",
            url: c + "invalidate",
            headers: {
                Authorization: "Basic " + b,
                "Content-type": "application/json; charset=UTF-8"
            },
            success: function(a, b) {
                "success" === b && ($(".loader-box").hide(), $(".main-login").fadeIn(100), $(".forum-login").hide())
            },
            error: function(a) {
                a && (window.location.href = "/authentication?referrer=" + d)
            }
        })) : setTimeout(function() {
            $(".loader-box").hide(), $(".forum-login").hide(), $(".main-login").fadeIn(100)
        }, 500)
    }
    var o = function() {
        $("#authClick").on("click", function() {
            p.disable(), b = "", h()
        }), $("#login-box input").on("keyup", function(a) {
            13 == a.which && (b = "", h())
        }), $("#usernameChange").on("click", function() {
            b = "", m()
        }), $("#forumUsername").on("keyup", function(a) {
            b = "", 13 == a.which && m()
        }), $("#tryAgain").on("click", function() {
            window.location.href = "/authentication"
        }), $("#btn-info").popover({
            title: "Info",
            html: !0
        }), $("#btn-info").hover(function() {
            $("#btn-info").popover("show")
        }, function() {
            $("#btn-info").popover("hide")
        }), $(".btn-mobile-menu").click(function() {
            $(".mobile-menu").is(":visible") ? ($(".btn-mobile-menu").removeClass("selected"), $(".mobile-menu").slideUp("400", "swing")) : ($(".mobile-menu").slideDown("400", "swing"), $(".btn-mobile-menu").addClass("selected"))
        }), $(".mobile-menu .sub-menu").click(function(a) {
            $(a.currentTarget).find("ul").is(":visible") ? ($(a.currentTarget).find("ul").slideUp(400, "swing"), $(a.currentTarget).find("a").removeClass("selected")) : ($(a.currentTarget).find("ul").slideDown(400, "swing"), $(a.currentTarget).find("a").addClass("selected"))
        })
    };
    !function() {
        o(), resizeBody(), $(window).resize(function() {
            resizeBody()
        }), $("body").css({
            backgroundImage: "url(images/background5.jpg)"
        }), "logout" === e ? n() : "server_down" === e ? setTimeout(j.bind(this), 100) : - 1 != getCookie().uid && getCookie().sid ? (b = btoa(getCookie().uid + ":" + getCookie().sid), g()) : setTimeout(function() {
            $(".loader-box").hide(), $(".main-login").fadeIn(100)
        }, 1e3)
    }();
    var p = function() {
        return {
            disable: function() {
                $("#authClick").attr("disabled", "disabled")
            },
            enable: function() {
                $("#authClick").removeAttr("disabled")
            }
        }
    }()
    var q = function() {
        return {
            disable: function() {
                $("#usernameChange").attr("disabled", "disabled")
            },
            enable: function() {
                $("#usernameChange").removeAttr("disabled")
            }
        }
    }()
});
