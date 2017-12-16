$.cookie = {
    get: function(t) {
        var e;
        return function(t) {
            if (!t)
                return t;
            for (; t != unescape(t);)
                t = unescape(t);
            for (var e = ["<", ">", "'", '"', "%3c", "%3e", "%27", "%22", "%253c", "%253e", "%2527", "%2522"], i = ["&#x3c;", "&#x3e;", "&#x27;", "&#x22;", "%26%23x3c%3B", "%26%23x3e%3B", "%26%23x27%3B", "%26%23x22%3B", "%2526%2523x3c%253B", "%2526%2523x3e%253B", "%2526%2523x27%253B", "%2526%2523x22%253B"], n = 0; n < e.length; n++)
                t = t.replace(new RegExp(e[n], "gi"), i[n]);
            return t
        }((e = document.cookie.match(RegExp("(^|;\\s*)" + t + "=([^;]*)(;|$)"))) ? unescape(e[2]) : "")
    },
    set: function(t, e, i, n, o) {
        var p = new Date;
        o ? (p.setTime(p.getTime() + 36e5 * o), document.cookie = t + "=" + e + "; expires=" + p.toGMTString() + "; path=" + (n || "/") + "; " + (i ? "domain=" + i + ";" : "")) : document.cookie = t + "=" + e + "; path=" + (n || "/") + "; " + (i ? "domain=" + i + ";" : "")
    },
    del: function(t, e, i) {
        document.cookie = t + "=; expires=Mon, 26 Jul 1997 05:00:00 GMT; path=" + (i || "/") + "; " + (e ? "domain=" + e + ";" : "")
    },
    uin: function() {
        var t = $.cookie.get("uin");
        return t ? parseInt(t.substring(1, t.length), 10) : null
    }
},$.http = {
    getXHR: function() {
        return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest
    },
    ajax: function(url, para, cb, method, type) {
        var xhr = $.http.getXHR();
        return xhr.open(method, url), xhr.onreadystatechange = function() {
            4 == xhr.readyState && (xhr.status >= 200 && xhr.status < 300 || 304 === xhr.status || 1223 === xhr.status || 0 === xhr.status ? void 0 === type && xhr.responseText ? cb(eval("(" + xhr.responseText + ")")) : (cb(xhr.responseText), !xhr.responseText && $.badjs._smid && $.badjs("HTTP Empty[xhr.status]:" + xhr.status, url, 0, $.badjs._smid)) : $.badjs._smid && $.badjs("HTTP Error[xhr.status]:" + xhr.status, url, 0, $.badjs._smid), xhr = null)
        }, xhr.send(para), xhr
    },
    post: function(t, e, i, n) {
        var o = "";
        for (var p in e)
            o += "&" + p + "=" + e[p];
        return $.http.ajax(t, o, i, "POST", n)
    },
    get: function(t, e, i, n) {
        var o = [];
        for (var p in e)
            o.push(p + "=" + e[p]);
        return -1 == t.indexOf("?") && (t += "?"), t += o.join("&"), $.http.ajax(t, null, i, "GET", n)
    },
    jsonp: function(t) {
        var e = document.createElement("script");
        e.src = t, document.getElementsByTagName("head")[0].appendChild(e)
    },
    loadScript: function(t, e, i) {
        var n = document.createElement("script");
        n.onload = n.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || ("function" == typeof e && e(), n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n))
        }, n.src = t, document.getElementsByTagName("head")[0].appendChild(n)
    },
    preload: function(t) {
        var e = document.createElement("img");
        e.src = t, e = null
    }
}, $.ev = {
    _counter: 0,
    _uid: function() {
        return "h" + $.ev._counter++
    },
    add: function(t, e, i) {
        if ("object" != typeof t && (t = $(t)), document.addEventListener){
            t.addEventListener(e, i, !1);
	}
        else if (document.attachEvent) {
            if (-1 != $.ev._find(t, e, i))
                return;
            var n = function(e) {
                e || (e = window.event);
                var n = {
                    _event: e,
                    type: e.type,
                    target: e.srcElement,
                    currentTarget: t,
                    relatedTarget: e.fromElement ? e.fromElement : e.toElement,
                    eventPhase: e.srcElement == t ? 2 : 3,
                    clientX: e.clientX,
                    clientY: e.clientY,
                    screenX: e.screenX,
                    screenY: e.screenY,
                    altKey: e.altKey,
                    ctrlKey: e.ctrlKey,
                    shiftKey: e.shiftKey,
                    keyCode: e.keyCode,
                    data: e.data,
                    origin: e.origin,
                    stopPropagation: function() {
                        this._event.cancelBubble = !0
                    },
                    preventDefault: function() {
                        this._event.returnValue = !1
                    }
                };
                Function.prototype.call ? i.call(t, n) : (t._currentHandler = i, t._currentHandler(n), t._currentHandler = null)
            };
            t.attachEvent("on" + e, n);
            var o = {
                    element: t,
                    eventType: e,
                    handler: i,
                    wrappedHandler: n
                },
                p = t.document || t,
                r = p.parentWindow,
                s = $.ev._uid();
            r._allHandlers || (r._allHandlers = {}), r._allHandlers[s] = o, t._handlers || (t._handlers = []), t._handlers.push(s), r._onunloadHandlerRegistered || (r._onunloadHandlerRegistered = !0, r.attachEvent("onunload", $.ev._removeAllHandlers))
        }
    },
    remove: function(t, e, i) {
        if (document.addEventListener)
            t.removeEventListener(e, i, !1);
        else if (document.attachEvent) {
            var n = $.ev._find(t, e, i);
            if (-1 == n)
                return;
            var o = t.document || t,
                p = o.parentWindow,
                r = t._handlers[n],
                s = p._allHandlers[r];
            t.detachEvent("on" + e, s.wrappedHandler), t._handlers.splice(n, 1), delete p._allHandlers[r]
        }
    },
    _find: function(t, e, i) {
        var n = t._handlers;
        if (!n)
            return -1;
        for (var o = t.document || t, p = o.parentWindow, r = n.length - 1; r >= 0; r--) {
            var s = n[r],
                a = p._allHandlers[s];
            if (a.eventType == e && a.handler == i)
                return r
        }
        return -1
    },
    _removeAllHandlers: function() {
        var t = this;
        for (id in t._allHandlers) {
            var e = t._allHandlers[id];
            e.element.detachEvent("on" + e.eventType, e.wrappedHandler), delete t._allHandlers[id]
        }
    },
    src: function(t) {
        return t ? t.target : event.srcElement
    },
    stopPropagation: function(t) {
        t ? t.stopPropagation() : event.cancelBubble = !0
    },
    trigger: function(t, e) {
        var i = {
            HTMLEvents: "abort,blur,change,error,focus,load,reset,resize,scroll,select,submit,unload",
            UIEevents: "keydown,keypress,keyup",
            MouseEvents: "click,mousedown,mousemove,mouseout,mouseover,mouseup"
        };
        if (document.createEvent) {
            var n = "";
            "mouseleave" == e && (e = "mouseout"), "mouseenter" == e && (e = "mouseover");
            for (var o in i)
                if (i[o].indexOf(e)) {
                    n = o;
                    break
                }
            var p = document.createEvent(n);
            p.initEvent(e, !0, !1), t.dispatchEvent(p)
        } else
            document.createEventObject && t.fireEvent("on" + e)
    }
}, $.bom = {
    query: function(t) {
        var e = window.location.search.match(new RegExp("(\\?|&)" + t + "=([^&]*)(&|$)"));
        return e ? decodeURIComponent(e[2]) : ""
    },
    getHash: function(t) {
        var e = window.location.hash.match(new RegExp("(#|&)" + t + "=([^&]*)(&|$)"));
        return e ? decodeURIComponent(e[2]) : ""
    }
}, $.winName = {
    set: function(t, e) {
        var i = window.name || "";
        i.match(new RegExp(";" + t + "=([^;]*)(;|$)")) ? window.name = i.replace(new RegExp(";" + t + "=([^;]*)"), ";" + t + "=" + e) : window.name = i + ";" + t + "=" + e
    },
    get: function(t) {
        var e = window.name || "",
            i = e.match(new RegExp(";" + t + "=([^;]*)(;|$)"));
        return i ? i[1] : ""
    },
    clear: function(t) {
        var e = window.name || "";
        window.name = e.replace(new RegExp(";" + t + "=([^;]*)"), "")
    }
}, $.localData = function() {
    function t() {
        var t = document.createElement("link");
        return t.style.display = "none", t.id = o, document.getElementsByTagName("head")[0].appendChild(t), t.addBehavior("#default#userdata"), t
    }
    function e() {
        if (void 0 === n)
            if (window.localStorage)
                n = localStorage;
            else
                try {
                    n = t(), n.load(o)
                } catch (t) {
                    return n = !1, !1
                }
        return !0
    }
    function i(t) {
        return "string" == typeof t && p.test(t)
    }
    var n,
        o = "ptlogin2.qq.com",
        p = /^[0-9A-Za-z_-]*$/;
    return {
        set: function(t, p) {
            var r = !1;
            if (i(t) && e())
                try {
                    p += "", window.localStorage ? (n.setItem(t, p), r = !0) : (n.setAttribute(t, p), n.save(o), r = n.getAttribute(t) === p)
                } catch (t) {}
            return r
        },
        get: function(t) {
            if (i(t) && e())
                try {
                    return window.localStorage ? n.getItem(t) : n.getAttribute(t)
                } catch (t) {}
            return null
        },
        remove: function(t) {
            if (i(t) && e())
                try {
                    return window.localStorage ? n.removeItem(t) : n.removeAttribute(t), !0
                } catch (t) {}
            return !1
        }
    }
}()
var resizeBody = function() {
    var a = $(window).height();
    $("body").height(a)
},
getCookie = function() {
    var a = {};
    return document.cookie && -1 != document.cookie.search("uid") && -1 != document.cookie.search("sid") && (a.uid = document.cookie.split("uid=")[2] ? document.cookie.split("uid=")[2].split(";")[0] : document.cookie.split("uid=")[1].split(";")[0], a.sid = document.cookie.split("sid=")[2] ? document.cookie.split("sid=")[2].split(";")[0] : document.cookie.split("sid=")[1].split(";")[0]), -1 != document.cookie.search("username") && (a.username = document.cookie.split("username=")[1].split(";")[0]), a
},
setCookie = function(a, b) {
    var c = new Date,
    d = new Date(c.getTime() + 864e5);
    document.cookie = a + "=" + b + ";expires=" + d + ";path=/"
},
removeCookie = function(a) {
    document.cookie = a + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/"
}
