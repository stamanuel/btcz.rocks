function numberRoller(e) {
    var t = $(".roller-title-number-" + e).attr("data-min"),
        n = $(".roller-title-number-" + e).attr("data-max"),
        i = $(".roller-title-number-" + e).attr("data-delay");
    numberRoll(e, t, n, $(".roller-title-number-" + e).attr("data-increment"), 1e3 * i / (n - t))
}
function numberRoll(slno, min, max, increment, timeout) {
    min <= max ? ($(".roller-title-number-" + slno).html(min), min = parseInt(min, 10) + parseInt(increment, 10), setTimeout(function () {
        numberRoll(eval(slno), eval(min), eval(max), eval(increment), eval(timeout))
    }, timeout)) : $(".roller-title-number-" + slno).html(max)
}
function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
function uncamel(e) {
    return e.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase()
    })
}
function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}
function setFilter(e, t, n) {
    var i = uncamel(t),
        o = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[o + "filter"] = e[o + "filter"] || "",
    n = setUnit(n > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : n, jQuery.CSS.filters[t].unit),
    e[o + "filter"] += i + "(" + n + ") ",
    delete e[t]
}
function initHeader() {
    width = $headerSizer.width(),
    height = $headerSizer.height(),
    canvas = document.getElementById("particles"),
    canvas.width = width,
    canvas.height = height,
    ctx = canvas.getContext("2d"),
    circles = [];
    for (var e = 0; e < .5 * width; e++) {
        var t = new Circle;
        circles.push(t)
    }
    animate()
}
function addListeners() {
    window.addEventListener("scroll", scrollCheck),
    window.addEventListener("resize", resize)
}
function scrollCheck() {
    animateHeader = !(document.body.scrollTop > height)
}
function resize() {
    width = $headerSizer.width(),
    height = $headerSizer.height(),
    canvas.width = width,
    canvas.height = height
}
function animate() {
    if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var e in circles) circles[e].draw()
    }
    requestAnimationFrame(animate)
}
function Circle() {
    function e() {
        t.pos.x = Math.random() * width,
        t.pos.y = height + 100 * Math.random(),
        t.alpha = .1 + .3 * Math.random(),
        t.scale = .1 + .3 * Math.random(),
        t.velocity = Math.random()
    }
    var t = this;
    !
    function () {
        t.pos = {}, e()
    }(),
    this.draw = function () {
        t.alpha <= 0 && e(),
        t.pos.y -= t.velocity,
        t.alpha -= 4e-4,
        ctx.beginPath(),
        ctx.arc(t.pos.x, t.pos.y, 10 * t.scale, 0, 2 * Math.PI, !1),
        ctx.fillStyle = "rgba(255,255,255," + t.alpha + ")",
        ctx.fill()
    }
}
window.Modernizr = function (e, t, n) {
    function i(e) {
        b.cssText = e
    }
    function o(e, t) {
        return i(P.join(e + ";") + (t || ""))
    }
    function r(e, t) {
        return typeof e === t
    }
    function s(e, t) {
        return !!~ ("" + e).indexOf(t)
    }
    function a(e, t) {
        for (var i in e) {
            var o = e[i];
            if (!s(o, "-") && b[o] !== n) return "pfx" != t || o
        }
        return !1
    }
    function l(e, t, i) {
        for (var o in e) {
            var s = t[e[o]];
            if (s !== n) return !1 === i ? e[o] : r(s, "function") ? s.bind(i || t) : s
        }
        return !1
    }
    function u(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            o = (e + " " + C.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? a(o, t) : (o = (e + " " + k.join(i + " ") + i).split(" "), l(o, t, n))
    }
    function c() {
        f.input = function (n) {
            for (var i = 0, o = n.length; o > i; i++) Y[n[i]] = !! (n[i] in w);
            return Y.list && (Y.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)),
            Y
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),
        f.inputtypes = function (e) {
            for (var i, o, r, s = 0, a = e.length; a > s; s++) w.setAttribute("type", o = e[s]),
            i = "text" !== w.type,
            i && (w.value = T, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (m.appendChild(w), r = t.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, m.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && !1 === w.checkValidity() : w.value != T)),
            I[e[s]] = !! i;
            return I
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var d, p, h = "2.8.3",
        f = {},
        g = !0,
        m = t.documentElement,
        y = "modernizr",
        v = t.createElement(y),
        b = v.style,
        w = t.createElement("input"),
        T = ":)",
        x = {}.toString,
        P = " -webkit- -moz- -o- -ms- ".split(" "),
        S = "Webkit Moz O ms",
        C = S.split(" "),
        k = S.toLowerCase().split(" "),
        j = {
            svg: "http://www.w3.org/2000/svg"
        },
        _ = {},
        I = {},
        Y = {},
        O = [],
        E = O.slice,
        A = function (e, n, i, o) {
            var r, s, a, l, u = t.createElement("div"),
                c = t.body,
                d = c || t.createElement("body");
            if (parseInt(i, 10)) for (; i--;) a = t.createElement("div"),
            a.id = o ? o[i] : y + (i + 1),
            u.appendChild(a);
            return r = ["&#173;", '<style id="s', y, '">', e, "</style>"].join(""),
            u.id = y,
            (c ? u : d).innerHTML += r,
            d.appendChild(u),
            c || (d.style.background = "", d.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(d)),
            s = n(u, e),
            c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), m.style.overflow = l),
            !! s
        },
        $ = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n) return n(t) && n(t).matches || !1;
            var i;
            return A("@media " + t + " { #" + y + " { position: absolute; } }", function (t) {
                i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }),
            i
        },
        L = function () {
            function e(e, o) {
                o = o || t.createElement(i[e] || "div"),
                e = "on" + e;
                var s = e in o;
                return s || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), s = r(o[e], "function"), r(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))),
                o = null,
                s
            }
            var i = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(),
        Q = {}.hasOwnProperty;
    p = r(Q, "undefined") || r(Q.call, "undefined") ?
    function (e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return Q.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = E.call(arguments, 1),
            i = function () {
                if (this instanceof i) {
                    var o = function () {};
                    o.prototype = t.prototype;
                    var r = new o,
                        s = t.apply(r, n.concat(E.call(arguments)));
                    return Object(s) === s ? s : r
                }
                return t.apply(e, n.concat(E.call(arguments)))
            };
        return i
    }),
    _.flexbox = function () {
        return u("flexWrap")
    }, _.flexboxlegacy = function () {
        return u("boxDirection")
    }, _.canvas = function () {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
    }, _.canvastext = function () {
        return !(!f.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, _.webgl = function () {
        return !!e.WebGLRenderingContext
    }, _.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : A(["@media (", P.join("touch-enabled),("), y, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }),
        n
    }, _.geolocation = function () {
        return "geolocation" in navigator
    }, _.postmessage = function () {
        return !!e.postMessage
    }, _.websqldatabase = function () {
        return !!e.openDatabase
    }, _.indexedDB = function () {
        return !!u("indexedDB", e)
    }, _.hashchange = function () {
        return L("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, _.history = function () {
        return !(!e.history || !history.pushState)
    }, _.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, _.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, _.rgba = function () {
        return i("background-color:rgba(150,255,150,.5)"),
        s(b.backgroundColor, "rgba")
    }, _.hsla = function () {
        return i("background-color:hsla(120,40%,100%,.5)"),
        s(b.backgroundColor, "rgba") || s(b.backgroundColor, "hsla")
    }, _.multiplebgs = function () {
        return i("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(b.background)
    }, _.backgroundsize = function () {
        return u("backgroundSize")
    }, _.borderimage = function () {
        return u("borderImage")
    }, _.borderradius = function () {
        return u("borderRadius")
    }, _.boxshadow = function () {
        return u("boxShadow")
    }, _.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, _.opacity = function () {
        return o("opacity:.55"),
        /^0.55$/.test(b.opacity)
    }, _.cssanimations = function () {
        return u("animationName")
    }, _.csscolumns = function () {
        return u("columnCount")
    }, _.cssgradients = function () {
        var e = "background-image:";
        return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + P.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)),
        s(b.backgroundImage, "gradient")
    }, _.cssreflections = function () {
        return u("boxReflect")
    }, _.csstransforms = function () {
        return !!u("transform")
    }, _.csstransforms3d = function () {
        var e = !! u("perspective");
        return e && "webkitPerspective" in m.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        e
    }, _.csstransitions = function () {
        return u("transition")
    }, _.fontface = function () {
        var e;
        return A('@font-face {font-family:"font";src:url("https://")}', function (n, i) {
            var o = t.getElementById("smodernizr"),
                r = o.sheet || o.styleSheet,
                s = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0])
        }),
        e
    }, _.generatedcontent = function () {
        var e;
        return A(["#", y, "{font:0/0 a}#", y, ':after{content:"', T, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }),
        e
    }, _.video = function () {
        var e = t.createElement("video"),
            n = !1;
        try {
            (n = !! e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (e) {}
        return n
    }, _.audio = function () {
        var e = t.createElement("audio"),
            n = !1;
        try {
            (n = !! e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (e) {}
        return n
    }, _.localstorage = function () {
        try {
            return localStorage.setItem(y, y),
            localStorage.removeItem(y),
            !0
        } catch (e) {
            return !1
        }
    }, _.sessionstorage = function () {
        try {
            return sessionStorage.setItem(y, y),
            sessionStorage.removeItem(y),
            !0
        } catch (e) {
            return !1
        }
    }, _.webworkers = function () {
        return !!e.Worker
    }, _.applicationcache = function () {
        return !!e.applicationCache
    }, _.svg = function () {
        return !!t.createElementNS && !! t.createElementNS(j.svg, "svg").createSVGRect
    }, _.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>",
        (e.firstChild && e.firstChild.namespaceURI) == j.svg
    }, _.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(j.svg, "animate")))
    }, _.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(j.svg, "clipPath")))
    };
    for (var D in _) p(_, D) && (d = D.toLowerCase(), f[d] = _[D](), O.push((f[d] ? "" : "no-") + d));
    return f.input || c(),
    f.addTest = function (e, t) {
        if ("object" == typeof e) for (var i in e) p(e, i) && f.addTest(i, e[i]);
        else {
            if (e = e.toLowerCase(), f[e] !== n) return f;
            t = "function" == typeof t ? t() : t,
            void 0 !== g && g && (m.className += " " + (t ? "" : "no-") + e),
            f[e] = t
        }
        return f
    }, i(""),
    v = w = null,


    function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var e = v.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function o(e) {
            var t = y[e[g]];
            return t || (t = {}, m++, e[g] = m, y[m] = t),
            t
        }
        function r(e, n, i) {
            if (n || (n = t), c) return n.createElement(e);
            i || (i = o(n));
            var r;
            return r = i.cache[e] ? i.cache[e].cloneNode() : f.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e),
            !r.canHaveChildren || h.test(e) || r.tagUrn ? r : i.frag.appendChild(r)
        }
        function s(e, n) {
            if (e || (e = t), c) return e.createDocumentFragment();
            n = n || o(e);
            for (var r = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++) r.createElement(a[s]);
            return r
        }
        function a(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
            e.createElement = function (n) {
                return v.shivMethods ? r(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function (e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(v, t.frag)
        }
        function l(e) {
            e || (e = t);
            var i = o(e);
            return !v.shivCSS || u || i.hasCSS || (i.hasCSS = !! n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            c || a(e, i),
            e
        }
        var u, c, d = "3.7.0",
            p = e.html5 || {},
            h = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv",
            m = 0,
            y = {};
        !
        function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                u = "hidden" in e,
                c = 1 == e.childNodes.length ||
                function () {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                }()
            } catch (e) {
                u = !0,
                c = !0
            }
        }();
        var v = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: !1 !== p.shivCSS,
            supportsUnknownElements: c,
            shivMethods: !1 !== p.shivMethods,
            type: "default",
            shivDocument: l,
            createElement: r,
            createDocumentFragment: s
        };
        e.html5 = v,
        l(t)
    }(this, t),
    f._version = h,
    f._prefixes = P,
    f._domPrefixes = k,
    f._cssomPrefixes = C,
    f.mq = $,
    f.hasEvent = L,
    f.testProp = function (e) {
        return a([e])
    }, f.testAllProps = u,
    f.testStyles = A,
    f.prefixed = function (e, t, n) {
        return t ? u(e, t, n) : u(e, "pfx")
    }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + O.join(" ") : ""),
    f
}(this, this.document),


function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !! e && "length" in e && e.length,
            n = re.type(e);
        return "function" !== n && !re.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t, n) {
        if (re.isFunction(t)) return re.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n
        });
        if (t.nodeType) return re.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function (e) {
            return J.call(t, e) > -1 !== n
        })
    }
    function o(e, t) {
        for (;
        (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function r(e) {
        var t = {};
        return re.each(e.match(we) || [], function (e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        X.removeEventListener("DOMContentLoaded", s),
        e.removeEventListener("load", s),
        re.ready()
    }
    function a() {
        this.expando = re.expando + a.uid++
    }
    function l(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(je, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? re.parseJSON(n) : n)
            } catch (e) {}
            Ce.set(e, t, n)
        } else n = void 0;
        return n
    }
    function u(e, t, n, i) {
        var o, r = 1,
            s = 20,
            a = i ?
            function () {
                return i.cur()
            } : function () {
                return re.css(e, t, "")
            },
            l = a(),
            u = n && n[3] || (re.cssNumber[t] ? "" : "px"),
            c = (re.cssNumber[t] || "px" !== u && +l) && Ie.exec(re.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do {
                r = r || ".5", c /= r, re.style(e, t, c + u)
            } while (r !== (r = a() / l) && 1 !== r && --s)
        }
        return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)),
        o
    }
    function c(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], n) : n
    }
    function d(e, t) {
        for (var n = 0, i = e.length; i > n; n++) Se.set(e[n], "globalEval", !t || Se.get(t[n], "globalEval"))
    }
        function p(e, t, n, i, o) {
        for (var r, s, a, l, u, p, h = t.createDocumentFragment(), f = [], g = 0, m = e.length; m > g; g++) if ((r = e[g]) || 0 === r) if ("object" === re.type(r)) re.merge(f, r.nodeType ? [r] : r);
        else if (Qe.test(r)) {
            for (s = s || h.appendChild(t.createElement("div")), a = (Ae.exec(r) || ["", ""])[1].toLowerCase(), l = Le[a] || Le._default, s.innerHTML = l[1] + re.htmlPrefilter(r) + l[2], p = l[0]; p--;) s = s.lastChild;
            re.merge(f, s.childNodes),
            s = h.firstChild,
            s.textContent = ""
        } else f.push(t.createTextNode(r));
        for (h.textContent = "", g = 0; r = f[g++];) if (i && re.inArray(r, i) > -1) o && o.push(r);
        else if (u = re.contains(r.ownerDocument, r), s = c(h.appendChild(r), "script"), u && d(s), n) for (p = 0; r = s[p++];) $e.test(r.type || "") && n.push(r);
        return h
    }
    function h() {
        return !0
    }
    function f() {
        return !1
    }
    function g() {
        try {
            return X.activeElement
        } catch (e) {}
    }
    function m(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) m(e, a, n, i, t[a], r);
            return e
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = f;
        else if (!o) return e;
        return 1 === r && (s = o, o = function (e) {
            return re().off(e),
            s.apply(this, arguments)
        }, o.guid = s.guid || (s.guid = re.guid++)),
        e.each(function () {
            re.event.add(this, t, o, i, n)
        })
    }
    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function v(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function b(e) {
        var t = Be.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function w(e, t) {
        var n, i, o, r, s, a, l, u;
        if (1 === t.nodeType) {
            if (Se.hasData(e) && (r = Se.access(e), s = Se.set(t, r), u = r.events)) {
                delete s.handle,
                s.events = {};
                for (o in u) for (n = 0, i = u[o].length; i > n; n++) re.event.add(t, o, u[o][n])
            }
            Ce.hasData(e) && (a = Ce.access(e), l = re.extend({}, a), Ce.set(t, l))
        }
    }
    function T(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ee.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function x(e, t, n, i) {
        t = K.apply([], t);
        var o, r, s, a, l, u, d = 0,
            h = e.length,
            f = h - 1,
            g = t[0],
            m = re.isFunction(g);
        if (m || h > 1 && "string" == typeof g && !ie.checkClone && Ne.test(g)) return e.each(function (o) {
            var r = e.eq(o);
            m && (t[0] = g.call(this, o, r.html())),
            x(r, t, n, i)
        });
        if (h && (o = p(t, e[0].ownerDocument, !1, e, i), r = o.firstChild, 1 === o.childNodes.length && (o = r), r || i)) {
            for (s = re.map(c(o, "script"), v), a = s.length; h > d; d++) l = o,
            d !== f && (l = re.clone(l, !0, !0), a && re.merge(s, c(l, "script"))),
            n.call(e[d], l, d);
            if (a) for (u = s[s.length - 1].ownerDocument, re.map(s, b), d = 0; a > d; d++) l = s[d],
            $e.test(l.type || "") && !Se.access(l, "globalEval") && re.contains(u, l) && (l.src ? re._evalUrl && re._evalUrl(l.src) : re.globalEval(l.textContent.replace(qe, "")))
        }
        return e
    }
    function P(e, t, n) {
        for (var i, o = t ? re.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || re.cleanData(c(i)),
        i.parentNode && (n && re.contains(i.ownerDocument, i) && d(c(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    function S(e, t) {
        var n = re(t.createElement(e)).appendTo(t.body),
            i = re.css(n[0], "display");
        return n.detach(),
        i
    }
    function C(e) {
        var t = X,
            n = We[e];
        return n || (n = S(e, t), "none" !== n && n || (Re = (Re || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Re[0].contentDocument, t.write(), t.close(), n = S(e, t), Re.detach()), We[e] = n),
        n
    }
    function k(e, t, n) {
        var i, o, r, s, a = e.style;
        return n = n || Xe(e),
        s = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== s && void 0 !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)),
        n && !ie.pixelMarginRight() && Ue.test(s) && Ve.test(t) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r),
        void 0 !== s ? s + "" : s
    }
    function j(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function _(e) {
        if (e in nt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--;) if ((e = tt[n] + t) in nt) return e
    }
    function I(e, t, n) {
        var i = Ie.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }
    function Y(e, t, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > r; r += 2)"margin" === n && (s += re.css(e, n + Ye[r], !0, o)),
        i ? ("content" === n && (s -= re.css(e, "padding" + Ye[r], !0, o)), "margin" !== n && (s -= re.css(e, "border" + Ye[r] + "Width", !0, o))) : (s += re.css(e, "padding" + Ye[r], !0, o), "padding" !== n && (s += re.css(e, "border" + Ye[r] + "Width", !0, o)));
        return s
    }
    function O(e, t, n) {
        var i = !0,
            o = "width" === t ? e.offsetWidth : e.offsetHeight,
            r = Xe(e),
            s = "border-box" === re.css(e, "boxSizing", !1, r);
        if (0 >= o || null == o) {
            if (o = k(e, t, r), (0 > o || null == o) && (o = e.style[t]), Ue.test(o)) return o;
            i = s && (ie.boxSizingReliable() || o === e.style[t]),
            o = parseFloat(o) || 0
        }
        return o + Y(e, t, n || (s ? "border" : "content"), i, r) + "px"
    }
    function E(e, t) {
        for (var n, i, o, r = [], s = 0, a = e.length; a > s; s++) i = e[s],
        i.style && (r[s] = Se.get(i, "olddisplay"), n = i.style.display, t ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Oe(i) && (r[s] = Se.access(i, "olddisplay", C(i.nodeName)))) : (o = Oe(i), "none" === n && o || Se.set(i, "olddisplay", o ? n : re.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s],
        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[s] || "" : "none"));
        return e
    }
    function A(e, t, n, i, o) {
        return new A.prototype.init(e, t, n, i, o)
    }
    function $() {
        return e.setTimeout(function () {
            it = void 0
        }),
        it = re.now()
    }
    function L(e, t) {
        var n, i = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = Ye[i],
        o["margin" + n] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function Q(e, t, n) {
        for (var i, o = (z.tweeners[t] || []).concat(z.tweeners["*"]), r = 0, s = o.length; s > r; r++) if (i = o[r].call(n, t, e)) return i
    }
    function D(e, t, n) {
        var i, o, r, s, a, l, u, c = this,
            d = {},
            p = e.style,
            h = e.nodeType && Oe(e),
            f = Se.get(e, "fxshow");
        n.queue || (a = re._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--,
                re.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = re.css(e, "display"), "inline" === ("none" === u ? Se.get(e, "olddisplay") || C(e.nodeName) : u) && "none" === re.css(e, "float") && (p.display = "inline-block")),
        n.overflow && (p.overflow = "hidden", c.always(function () {
            p.overflow = n.overflow[0],
            p.overflowX = n.overflow[1],
            p.overflowY = n.overflow[2]
        }));
        for (i in t) if (o = t[i], rt.exec(o)) {
            if (delete t[i], r = r || "toggle" === o, o === (h ? "hide" : "show")) {
                if ("show" !== o || !f || void 0 === f[i]) continue;
                h = !0
            }
            d[i] = f && f[i] || re.style(e, i)
        } else u = void 0;
        if (re.isEmptyObject(d))"inline" === ("none" === u ? C(e.nodeName) : u) && (p.display = u);
        else {
            f ? "hidden" in f && (h = f.hidden) : f = Se.access(e, "fxshow", {}),
            r && (f.hidden = !h),
            h ? re(e).show() : c.done(function () {
                re(e).hide()
            }),
            c.done(function () {
                var t;
                Se.remove(e, "fxshow");
                for (t in d) re.style(e, t, d[t])
            });
            for (i in d) s = Q(h ? f[i] : 0, i, c),
            i in f || (f[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function M(e, t) {
        var n, i, o, r, s;
        for (n in e) if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (s = re.cssHooks[i]) && "expand" in s) {
            r = s.expand(r),
            delete e[i];
            for (n in r) n in e || (e[n] = r[n], t[n] = o)
        } else t[i] = o
    }
    function z(e, t, n) {
        var i, o, r = 0,
            s = z.prefilters.length,
            a = re.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (o) return !1;
                for (var t = it || $(), n = Math.max(0, u.startTime + u.duration - t), i = n / u.duration || 0, r = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(r);
                return a.notifyWith(e, [u, r, n]),
                1 > r && l ? n : (a.resolveWith(e, [u]), !1)
            },
            u = a.promise({
                elem: e,
                props: re.extend({}, t),
                opts: re.extend(!0, {
                    specialEasing: {}, easing: re.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: it || $(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = re.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i),
                    i
                }, stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i > n; n++) u.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                    this
                }
            }),
            c = u.props;
        for (M(c, u.opts.specialEasing); s > r; r++) if (i = z.prefilters[r].call(u, e, c, u.opts)) return re.isFunction(i.stop) && (re._queueHooks(u.elem, u.opts.queue).stop = re.proxy(i.stop, i)),
        i;
        return re.map(c, Q, u),
        re.isFunction(u.opts.start) && u.opts.start.call(e, u),
        re.fx.timer(re.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function F(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function H(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, o = 0,
                r = t.toLowerCase().match(we) || [];
            if (re.isFunction(n)) for (; i = r[o++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function N(e, t, n, i) {
        function o(a) {
            var l;
            return r[a] = !0,
            re.each(e[a] || [], function (e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || r[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1)
            }),
            l
        }
        var r = {},
            s = e === Ct;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }
    function B(e, t) {
        var n, i, o = re.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && re.extend(!0, e, i),
        e
    }
    function q(e, t, n) {
        for (var i, o, r, s, a = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in n) r = l[0];
        else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                s || (s = o)
            }
            r = r || s
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }
    function R(e, t, n, i) {
        var o, r, s, a, l, u = {},
            c = e.dataTypes.slice();
        if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
        for (r = c.shift(); r;) if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;
        else if ("*" !== l && l !== r) {
            if (!(s = u[l + " " + r] || u["* " + r])) for (o in u) if (a = o.split(" "), a[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));
                break
            }
            if (!0 !== s) if (s && e.throws) t = s(t);
            else try {
                t = s(t)
            } catch (e) {
                return {
                    state: "parsererror",
                    error: s ? e : "No conversion from " + l + " to " + r
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function W(e, t, n, i) {
        var o;
        if (re.isArray(t)) re.each(t, function (t, o) {
            n || It.test(e) ? i(e, o) : W(e + "[" + ("object" == typeof o && null != o ? t : "") + "]", o, n, i)
        });
        else if (n || "object" !== re.type(t)) i(e, t);
        else for (o in t) W(e + "[" + o + "]", t[o], n, i)
    }
    function V(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var U = [],
        X = e.document,
        G = U.slice,
        K = U.concat,
        Z = U.push,
        J = U.indexOf,
        ee = {},
        te = ee.toString,
        ne = ee.hasOwnProperty,
        ie = {},
        oe = "2.2.4",
        re = function (e, t) {
            return new re.fn.init(e, t)
        },
        se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ae = /^-ms-/,
        le = /-([\da-z])/gi,
        ue = function (e, t) {
            return t.toUpperCase()
        };
    re.fn = re.prototype = {
        jquery: oe,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function () {
            return G.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : G.call(this)
        }, pushStack: function (e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        }, each: function (e) {
            return re.each(this, e)
        }, map: function (e) {
            return this.pushStack(re.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(G.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: Z,
        sort: U.sort,
        splice: U.splice
    }, re.extend = re.fn.extend = function () {
        var e, t, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || re.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t],
        i = e[t],
        s !== i && (u && i && (re.isPlainObject(i) || (o = re.isArray(i))) ? (o ? (o = !1, r = n && re.isArray(n) ? n : []) : r = n && re.isPlainObject(n) ? n : {}, s[t] = re.extend(u, r, i)) : void 0 !== i && (s[t] = i));
        return s
    }, re.extend({
        expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
            throw new Error(e)
        }, noop: function () {}, isFunction: function (e) {
            return "function" === re.type(e)
        }, isArray: Array.isArray,
        isWindow: function (e) {
            return null != e && e === e.window
        }, isNumeric: function (e) {
            var t = e && e.toString();
            return !re.isArray(e) && t - parseFloat(t) + 1 >= 0
        }, isPlainObject: function (e) {
            var t;
            if ("object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object" : typeof e
        }, globalEval: function (e) {
            var t, n = eval;
            (e = re.trim(e)) && (1 === e.indexOf("use strict") ? (t = X.createElement("script"), t.text = e, X.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        }, camelCase: function (e) {
            return e.replace(ae, "ms-").replace(le, ue)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t) {
            var i, o = 0;
            if (n(e)) for (i = e.length; i > o && !1 !== t.call(e[o], o, e[o]); o++);
            else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(se, "")
        }, makeArray: function (e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : Z.call(i, e)),
            i
        }, inArray: function (e, t, n) {
            return null == t ? -1 : J.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, i = 0, o = e.length; n > i; i++) e[o++] = t[i];
            return e.length = o,
            e
        }, grep: function (e, t, n) {
            for (var i = [], o = 0, r = e.length, s = !n; r > o; o++)!t(e[o], o) !== s && i.push(e[o]);
            return i
        }, map: function (e, t, i) {
            var o, r, s = 0,
                a = [];
            if (n(e)) for (o = e.length; o > s; s++) null != (r = t(e[s], s, i)) && a.push(r);
            else for (s in e) null != (r = t(e[s], s, i)) && a.push(r);
            return K.apply([], a)
        }, guid: 1,
        proxy: function (e, t) {
            var n, i, o;
            return "string" == typeof t && (n = e[t], t = e, e = n),
            re.isFunction(e) ? (i = G.call(arguments, 2), o = function () {
                return e.apply(t || this, i.concat(G.call(arguments)))
            }, o.guid = e.guid = e.guid || re.guid++, o) : void 0
        }, now: Date.now,
        support: ie
    }),
    "function" == typeof Symbol && (re.fn[Symbol.iterator] = U[Symbol.iterator]),
    re.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ce = function (e) {
        function t(e, t, n, i) {
            var o, r, s, a, l, u, d, h, f = t && t.ownerDocument,
                g = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g) return n;
            if (!i && ((t ? t.ownerDocument || t : F) !== E && O(t), t = t || E, $)) {
                if (11 !== g && (u = ye.exec(e))) if (o = u[1]) {
                    if (9 === g) {
                        if (!(s = t.getElementById(o))) return n;
                        if (s.id === o) return n.push(s),
                        n
                    } else if (f && (s = f.getElementById(o)) && M(t, s) && s.id === o) return n.push(s),
                    n
                } else {
                    if (u[2]) return Z.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((o = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(o)),
                    n
                }
                if (T.qsa && !R[e + " "] && (!L || !L.test(e))) {
                    if (1 !== g) f = t,
                    h = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = z), d = C(e), r = d.length, l = pe.test(a) ? "#" + a : "[id='" + a + "']"; r--;) d[r] = l + " " + p(d[r]);
                        h = d.join(","),
                        f = ve.test(e) && c(t.parentNode) || t
                    }
                    if (h) try {
                        return Z.apply(n, f.querySelectorAll(h)),
                        n
                    } catch (e) {} finally {
                        a === z && t.removeAttribute("id")
                    }
                }
            }
            return j(e.replace(ae, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[z] = !0,
            e
        }
        function o(e) {
            var t = E.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function r(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = t
        }
        function s(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return i(function (t) {
                return t = +t,
                i(function (n, i) {
                    for (var o, r = e([], n.length, t), s = r.length; s--;) n[o = r[s]] && (n[o] = !(i[o] = n[o]))
                })
            })
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function d() {}
        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i
        }
        function h(e, t, n) {
            var i = t.dir,
                o = n && "parentNode" === i,
                r = N++;
            return t.first ?
            function (t, n, r) {
                for (; t = t[i];) if (1 === t.nodeType || o) return e(t, n, r)
            } : function (t, n, s) {
                var a, l, u, c = [H, r];
                if (s) {
                    for (; t = t[i];) if ((1 === t.nodeType || o) && e(t, n, s)) return !0
                } else for (; t = t[i];) if (1 === t.nodeType || o) {
                    if (u = t[z] || (t[z] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === H && a[1] === r) return c[2] = a[2];
                    if (l[i] = c, c[2] = e(t, n, s)) return !0
                }
            }
        }
        function f(e) {
            return e.length > 1 ?
            function (t, n, i) {
                for (var o = e.length; o--;) if (!e[o](t, n, i)) return !1;
                return !0
            } : e[0]
        }
        function g(e, n, i) {
            for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
            return i
        }
        function m(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(r = e[a]) && (n && !n(r, i, o) || (s.push(r), u && t.push(a)));
            return s
        }
        function y(e, t, n, o, r, s) {
            return o && !o[z] && (o = y(o)),
            r && !r[z] && (r = y(r, s)),
            i(function (i, s, a, l) {
                var u, c, d, p = [],
                    h = [],
                    f = s.length,
                    y = i || g(t || "*", a.nodeType ? [a] : a, []),
                    v = !e || !i && t ? y : m(y, p, e, a, l),
                    b = n ? r || (i ? e : f || o) ? [] : s : v;
                if (n && n(v, b, a, l), o) for (u = m(b, h), o(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(v[h[c]] = d));
                if (i) {
                    if (r || e) {
                        if (r) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(v[c] = d);
                            r(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = r ? ee(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else b = m(b === s ? b.splice(f, b.length) : b),
                r ? r(null, s, b, l) : Z.apply(s, b)
            })
        }
        function v(e) {
            for (var t, n, i, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = h(function (e) {
                return e === t
            }, s, !0), u = h(function (e) {
                return ee(t, e) > -1
            }, s, !0), c = [function (e, n, i) {
                var o = !r && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null,
                o
            }]; o > a; a++) if (n = x.relative[e[a].type]) c = [h(f(c), n)];
            else {
                if (n = x.filter[e[a].type].apply(null, e[a].matches), n[z]) {
                    for (i = ++a; o > i && !x.relative[e[i].type]; i++);
                    return y(a > 1 && f(c), a > 1 && p(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(ae, "$1"), n, i > a && v(e.slice(a, i)), o > i && v(e = e.slice(i)), o > i && p(e))
                }
                c.push(n)
            }
            return f(c)
        }
        function b(e, n) {
            var o = n.length > 0,
                r = e.length > 0,
                s = function (i, s, a, l, u) {
                    var c, d, p, h = 0,
                        f = "0",
                        g = i && [],
                        y = [],
                        v = _,
                        b = i || r && x.find.TAG("*", u),
                        w = H += null == v ? 1 : Math.random() || .1,
                        T = b.length;
                    for (u && (_ = s === E || s || u); f !== T && null != (c = b[f]); f++) {
                        if (r && c) {
                            for (d = 0, s || c.ownerDocument === E || (O(c), a = !$); p = e[d++];) if (p(c, s || E, a)) {
                                l.push(c);
                                break
                            }
                            u && (H = w)
                        }
                        o && ((c = !p && c) && h--, i && g.push(c))
                    }
                    if (h += f, o && f !== h) {
                        for (d = 0; p = n[d++];) p(g, y, s, a);
                        if (i) {
                            if (h > 0) for (; f--;) g[f] || y[f] || (y[f] = G.call(l));
                            y = m(y)
                        }
                        Z.apply(l, y),
                        u && !i && y.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                    }
                    return u && (H = w, _ = v),
                    g
                };
            return o ? i(s) : s
        }
        var w, T, x, P, S, C, k, j, _, I, Y, O, E, A, $, L, Q, D, M, z = "sizzle" + 1 * new Date,
            F = e.document,
            H = 0,
            N = 0,
            B = n(),
            q = n(),
            R = n(),
            W = function (e, t) {
                return e === t && (Y = !0),
                0
            },
            V = 1 << 31,
            U = {}.hasOwnProperty,
            X = [],
            G = X.pop,
            K = X.push,
            Z = X.push,
            J = X.slice,
            ee = function (e, t) {
                for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
                return -1
            },
            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            oe = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
            re = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ne + "+", "g"),
            ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
            le = new RegExp("^" + ne + "*," + ne + "*"),
            ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(re),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
            },
            fe = /^(?:input|select|textarea|button)$/i,
            ge = /^h\d$/i,
            me = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            be = /'|\\/g,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            Te = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            xe = function () {
                O()
            };
        try {
            Z.apply(X = J.call(F.childNodes), F.childNodes),
            X[F.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: X.length ?
                function (e, t) {
                    K.apply(e, J.call(t))
                } : function (e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        T = t.support = {}, S = t.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, O = t.setDocument = function (e) {
            var t, n, i = e ? e.ownerDocument || e : F;
            return i !== E && 9 === i.nodeType && i.documentElement ? (E = i, A = E.documentElement, $ = !S(E), (n = E.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)), T.attributes = o(function (e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), T.getElementsByTagName = o(function (e) {
                return e.appendChild(E.createComment("")),
                !e.getElementsByTagName("*").length
            }), T.getElementsByClassName = me.test(E.getElementsByClassName), T.getById = o(function (e) {
                return A.appendChild(e).id = z,
                !E.getElementsByName || !E.getElementsByName(z).length
            }), T.getById ? (x.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && $) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }, x.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete x.find.ID, x.filter.ID = function (e) {
                var t = e.replace(we, Te);
                return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), x.find.TAG = T.getElementsByTagName ?
            function (e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, i = [],
                    o = 0,
                    r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return r
            }, x.find.CLASS = T.getElementsByClassName &&
            function (e, t) {
                return void 0 !== t.getElementsByClassName && $ ? t.getElementsByClassName(e) : void 0
            }, Q = [], L = [], (T.qsa = me.test(E.querySelectorAll)) && (o(function (e) {
                A.appendChild(e).innerHTML = "<a id='" + z + "'></a><select id='" + z + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || L.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + z + "-]").length || L.push("~="),
                e.querySelectorAll(":checked").length || L.push(":checked"),
                e.querySelectorAll("a#" + z + "+*").length || L.push(".#.+[+~]")
            }), o(function (e) {
                var t = E.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && L.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                L.push(",.*:")
            })), (T.matchesSelector = me.test(D = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function (e) {
                T.disconnectedMatch = D.call(e, "div"),
                D.call(e, "[s!='']:x"),
                Q.push("!=", re)
            }), L = L.length && new RegExp(L.join("|")), Q = Q.length && new RegExp(Q.join("|")), t = me.test(A.compareDocumentPosition), M = t || me.test(A.contains) ?
            function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            } : function (e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return !0;
                return !1
            }, W = t ?
            function (e, t) {
                if (e === t) return Y = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e === E || e.ownerDocument === F && M(F, e) ? -1 : t === E || t.ownerDocument === F && M(F, t) ? 1 : I ? ee(I, e) - ee(I, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return Y = !0,
                0;
                var n, i = 0,
                    o = e.parentNode,
                    r = t.parentNode,
                    a = [e],
                    l = [t];
                if (!o || !r) return e === E ? -1 : t === E ? 1 : o ? -1 : r ? 1 : I ? ee(I, e) - ee(I, t) : 0;
                if (o === r) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === F ? -1 : l[i] === F ? 1 : 0
            }, E) : E
        }, t.matches = function (e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function (e, n) {
            if ((e.ownerDocument || e) !== E && O(e), n = n.replace(ce, "='$1']"), T.matchesSelector && $ && !R[n + " "] && (!Q || !Q.test(n)) && (!L || !L.test(n))) try {
                var i = D.call(e, n);
                if (i || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return t(n, E, null, [e]).length > 0
        }, t.contains = function (e, t) {
            return (e.ownerDocument || e) !== E && O(e),
            M(e, t)
        }, t.attr = function (e, t) {
            (e.ownerDocument || e) !== E && O(e);
            var n = x.attrHandle[t.toLowerCase()],
                i = n && U.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !$) : void 0;
            return void 0 !== i ? i : T.attributes || !$ ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }, t.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function (e) {
            var t, n = [],
                i = 0,
                o = 0;
            if (Y = !T.detectDuplicates, I = !T.sortStable && e.slice(0), e.sort(W), Y) {
                for (; t = e[o++];) t === e[o] && (i = n.push(o));
                for (; i--;) e.splice(n[i], 1)
            }
            return I = null,
            e
        }, P = t.getText = function (e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += P(e)
                } else if (3 === o || 4 === o) return e.nodeValue
            } else for (; t = e[i++];) n += P(t);
            return n
        }, x = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: he,
            attrHandle: {}, find: {}, relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                }, " ": {
                    dir: "parentNode"
                }, "+": {
                    dir: "previousSibling",
                    first: !0
                }, "~": {
                    dir: "previousSibling"
                }
            }, preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(we, Te),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            }, filter: {
                TAG: function (e) {
                    var t = e.replace(we, Te).toLowerCase();
                    return "*" === e ?
                    function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (e, n, i) {
                    return function (o) {
                        var r = t.attr(o, e);
                        return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(se, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (e, t, n, i, o) {
                    var r = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === i && 0 === o ?
                    function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var u, c, d, p, h, f, g = r !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !l && !a,
                            b = !1;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (p = t; p = p[g];) if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    f = g = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? m.firstChild : m.lastChild], s && v) {
                                for (p = m, d = p[z] || (p[z] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], h = u[0] === H && u[1], b = h && u[2], p = h && m.childNodes[h]; p = ++h && p && p[g] || (b = h = 0) || f.pop();) if (1 === p.nodeType && ++b && p === t) {
                                    c[e] = [H, h, b];
                                    break
                                }
                            } else if (v && (p = t, d = p[z] || (p[z] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), u = c[e] || [], h = u[0] === H && u[1], b = h), !1 === b) for (;
                            (p = ++h && p && p[g] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && (d = p[z] || (p[z] = {}), c = d[p.uniqueID] || (d[p.uniqueID] = {}), c[e] = [H, b]), p !== t)););
                            return (b -= o) === i || b % i == 0 && b / i >= 0
                        }
                    }
                }, PSEUDO: function (e, n) {
                    var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[z] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, t) {
                        for (var i, o = r(e, n), s = o.length; s--;) i = ee(e, o[s]),
                        e[i] = !(t[i] = o[s])
                    }) : function (e) {
                        return r(e, 0, o)
                    }) : r
                }
            }, pseudos: {
                not: i(function (e) {
                    var t = [],
                        n = [],
                        o = k(e.replace(ae, "$1"));
                    return o[z] ? i(function (e, t, n, i) {
                        for (var r, s = o(e, null, i, []), a = e.length; a--;)(r = s[a]) && (e[a] = !(t[a] = r))
                    }) : function (e, i, r) {
                        return t[0] = e,
                        o(t, null, r, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: i(function (e) {
                    return function (n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: i(function (e) {
                    return e = e.replace(we, Te),


                    function (t) {
                        return (t.textContent || t.innerText || P(t)).indexOf(e) > -1
                    }
                }),
                lang: i(function (e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(we, Te).toLowerCase(),


                    function (t) {
                        var n;
                        do {
                            if (n = $ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === A
                }, focus: function (e) {
                    return e === E.activeElement && (!E.hasFocus || E.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return !1 === e.disabled
                }, disabled: function (e) {
                    return !0 === e.disabled
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !! e.checked || "option" === t && !! e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !x.pseudos.empty(e)
                }, header: function (e) {
                    return ge.test(e.nodeName)
                }, input: function (e) {
                    return fe.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: u(function () {
                    return [0]
                }),
                last: u(function (e, t) {
                    return [t - 1]
                }),
                eq: u(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function (e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function (e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function (e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                    return e
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) x.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        }) x.pseudos[w] = l(w);
        return d.prototype = x.filters = x.pseudos,
        x.setFilters = new d,
        C = t.tokenize = function (e, n) {
            var i, o, r, s, a, l, u, c = q[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = x.preFilter; a;) {
                i && !(o = le.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])),
                i = !1,
                (o = ue.exec(a)) && (i = o.shift(), r.push({
                    value: i,
                    type: o[0].replace(ae, " ")
                }), a = a.slice(i.length));
                for (s in x.filter)!(o = he[s].exec(a)) || u[s] && !(o = u[s](o)) || (i = o.shift(), r.push({
                    value: i,
                    type: s,
                    matches: o
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? t.error(e) : q(e, l).slice(0)
        }, k = t.compile = function (e, t) {
            var n, i = [],
                o = [],
                r = R[e + " "];
            if (!r) {
                for (t || (t = C(e)), n = t.length; n--;) r = v(t[n]),
                r[z] ? i.push(r) : o.push(r);
                r = R(e, b(o, i)),
                r.selector = e
            }
            return r
        }, j = t.select = function (e, t, n, i) {
            var o, r, s, a, l, u = "function" == typeof e && e,
                d = !i && C(e = u.selector || e);
            if (n = n || [], 1 === d.length) {
                if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && T.getById && 9 === t.nodeType && $ && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(we, Te), t) || [])[0])) return n;
                    u && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);) if ((l = x.find[a]) && (i = l(s.matches[0].replace(we, Te), ve.test(r[0].type) && c(t.parentNode) || t))) {
                    if (r.splice(o, 1), !(e = i.length && p(r))) return Z.apply(n, i),
                    n;
                    break
                }
            }
            return (u || k(e, d))(i, t, !$, n, !t || ve.test(e) && c(t.parentNode) || t),
            n
        }, T.sortStable = z.split("").sort(W).join("") === z,
        T.detectDuplicates = !! Y,
        O(),
        T.sortDetached = o(function (e) {
            return 1 & e.compareDocumentPosition(E.createElement("div"))
        }),
        o(function (e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        T.attributes && o(function (e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || r("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        o(function (e) {
            return null == e.getAttribute("disabled")
        }) || r(te, function (e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        t
    }(e);
    re.find = ce,
    re.expr = ce.selectors,
    re.expr[":"] = re.expr.pseudos,
    re.uniqueSort = re.unique = ce.uniqueSort,
    re.text = ce.getText,
    re.isXMLDoc = ce.isXML,
    re.contains = ce.contains;
    var de = function (e, t, n) {
        for (var i = [], o = void 0 !== n;
        (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (o && re(e).is(n)) break;
            i.push(e)
        }
        return i
    },
        pe = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        he = re.expr.match.needsContext,
        fe = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ge = /^.[^:#\[\.,]*$/;
    re.filter = function (e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, re.fn.extend({
        find: function (e) {
            var t, n = this.length,
                i = [],
                o = this;
            if ("string" != typeof e) return this.pushStack(re(e).filter(function () {
                for (t = 0; n > t; t++) if (re.contains(o[t], this)) return !0
            }));
            for (t = 0; n > t; t++) re.find(e, o[t], i);
            return i = this.pushStack(n > 1 ? re.unique(i) : i),
            i.selector = this.selector ? this.selector + " " + e : e,
            i
        }, filter: function (e) {
            return this.pushStack(i(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(i(this, e || [], !0))
        }, is: function (e) {
            return !!i(this, "string" == typeof e && he.test(e) ? re(e) : e || [], !1).length
        }
    });
    var me, ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (re.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (n = n || me, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ye.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : X, !0)), fe.test(i[1]) && re.isPlainObject(t)) for (i in t) re.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this
            }
            return o = X.getElementById(i[2]),
            o && o.parentNode && (this.length = 1, this[0] = o),
            this.context = X,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
    }).prototype = re.fn,
    me = re(X);
    var ve = /^(?:parents|prev(?:Until|All))/,
        be = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    re.fn.extend({
        has: function (e) {
            var t = re(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; n > e; e++) if (re.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            for (var n, i = 0, o = this.length, r = [], s = he.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? re.uniqueSort(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? J.call(re(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(re.uniqueSort(re.merge(this.get(), re(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    re.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return de(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return de(e, "parentNode", n)
        }, next: function (e) {
            return o(e, "nextSibling")
        }, prev: function (e) {
            return o(e, "previousSibling")
        }, nextAll: function (e) {
            return de(e, "nextSibling")
        }, prevAll: function (e) {
            return de(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return de(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return de(e, "previousSibling", n)
        }, siblings: function (e) {
            return pe((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return pe(e.firstChild)
        }, contents: function (e) {
            return e.contentDocument || re.merge([], e.childNodes)
        }
    }, function (e, t) {
        re.fn[e] = function (n, i) {
            var o = re.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n),
            i && "string" == typeof i && (o = re.filter(i, o)),
            this.length > 1 && (be[e] || re.uniqueSort(o), ve.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var we = /\S+/g;
    re.Callbacks = function (e) {
        e = "string" == typeof e ? r(e) : re.extend({}, e);
        var t, n, i, o, s = [],
            a = [],
            l = -1,
            u = function () {
                for (o = e.once, i = t = !0; a.length; l = -1) for (n = a.shift(); ++l < s.length;)!1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length, n = !1);
                e.memory || (n = !1),
                t = !1,
                o && (s = n ? [] : "")
            },
            c = {
                add: function () {
                    return s && (n && !t && (l = s.length - 1, a.push(n)), function t(n) {
                        re.each(n, function (n, i) {
                            re.isFunction(i) ? e.unique && c.has(i) || s.push(i) : i && i.length && "string" !== re.type(i) && t(i)
                        })
                    }(arguments), n && !t && u()),
                    this
                }, remove: function () {
                    return re.each(arguments, function (e, t) {
                        for (var n;
                        (n = re.inArray(t, s, n)) > -1;) s.splice(n, 1),
                        l >= n && l--
                    }),
                    this
                }, has: function (e) {
                    return e ? re.inArray(e, s) > -1 : s.length > 0
                }, empty: function () {
                    return s && (s = []),
                    this
                }, disable: function () {
                    return o = a = [],
                    s = n = "",
                    this
                }, disabled: function () {
                    return !s
                }, lock: function () {
                    return o = a = [],
                    n || (s = n = ""),
                    this
                }, locked: function () {
                    return !!o
                }, fireWith: function (e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || u()),
                    this
                }, fire: function () {
                    return c.fireWith(this, arguments),
                    this
                }, fired: function () {
                    return !!i
                }
            };
        return c
    }, re.extend({
        Deferred: function (e) {
            var t = [
                ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                ["notify", "progress", re.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    }, always: function () {
                        return o.done(arguments).fail(arguments),
                        this
                    }, then: function () {
                        var e = arguments;
                        return re.Deferred(function (n) {
                            re.each(t, function (t, r) {
                                var s = re.isFunction(e[t]) && e[t];
                                o[r[1]](function () {
                                    var e = s && s.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? re.extend(e, i) : i
                    }
                },
                o = {};
            return i.pipe = i.then,
            re.each(t, function (e, r) {
                var s = r[2],
                    a = r[3];
                i[r[1]] = s.add,
                a && s.add(function () {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                o[r[0]] = function () {
                    return o[r[0] + "With"](this === o ? i : this, arguments),
                    this
                }, o[r[0] + "With"] = s.fireWith
            }),
            i.promise(o),
            e && e.call(o, o),
            o
        }, when: function (e) {
            var t, n, i, o = 0,
                r = G.call(arguments),
                s = r.length,
                a = 1 !== s || e && re.isFunction(e.promise) ? s : 0,
                l = 1 === a ? e : re.Deferred(),
                u = function (e, n, i) {
                    return function (o) {
                        n[e] = this,
                        i[e] = arguments.length > 1 ? G.call(arguments) : o,
                        i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().progress(u(o, n, t)).done(u(o, i, r)).fail(l.reject) : --a;
            return a || l.resolveWith(i, r),
            l.promise()
        }
    });
    var Te;
    re.fn.ready = function (e) {
        return re.ready.promise().done(e),
        this
    }, re.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
            e ? re.readyWait++ : re.ready(!0)
        }, ready: function (e) {
            (!0 === e ? --re.readyWait : re.isReady) || (re.isReady = !0, !0 !== e && --re.readyWait > 0 || (Te.resolveWith(X, [re]), re.fn.triggerHandler && (re(X).triggerHandler("ready"), re(X).off("ready"))))
        }
    }),
    re.ready.promise = function (t) {
        return Te || (Te = re.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? e.setTimeout(re.ready) : (X.addEventListener("DOMContentLoaded", s), e.addEventListener("load", s))),
        Te.promise(t)
    }, re.ready.promise();
    var xe = function (e, t, n, i, o, r, s) {
        var a = 0,
            l = e.length,
            u = null == n;
        if ("object" === re.type(n)) {
            o = !0;
            for (a in n) xe(e, t, a, n[a], !0, r, s)
        } else if (void 0 !== i && (o = !0, re.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function (e, t, n) {
            return u.call(re(e), n)
        })), t)) for (; l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return o ? e : u ? t.call(e) : l ? t(e[0], n) : r
    },
        Pe = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    a.uid = 1,
    a.prototype = {
        register: function (e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        }, cache: function (e) {
            if (!Pe(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, Pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        }, set: function (e, t, n) {
            var i, o = this.cache(e);
            if ("string" == typeof t) o[t] = n;
            else for (i in t) o[i] = t[i];
            return o
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        }, access: function (e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, re.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, i, o, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 === t) this.register(e);
                else {
                    re.isArray(t) ? i = t.concat(t.map(re.camelCase)) : (o = re.camelCase(t), t in r ? i = [t, o] : (i = o, i = i in r ? [i] : i.match(we) || [])),
                    n = i.length;
                    for (; n--;) delete r[i[n]]
                }(void 0 === t || re.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !re.isEmptyObject(t)
        }
    };
    var Se = new a,
        Ce = new a,
        ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        je = /[A-Z]/g;
    re.extend({
        hasData: function (e) {
            return Ce.hasData(e) || Se.hasData(e)
        }, data: function (e, t, n) {
            return Ce.access(e, t, n)
        }, removeData: function (e, t) {
            Ce.remove(e, t)
        }, _data: function (e, t, n) {
            return Se.access(e, t, n)
        }, _removeData: function (e, t) {
            Se.remove(e, t)
        }
    }),
    re.fn.extend({
        data: function (e, t) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ce.get(r), 1 === r.nodeType && !Se.get(r, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i])));
                    Se.set(r, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function () {
                Ce.set(this, e)
            }) : xe(this, function (t) {
                var n, i;
                if (r && void 0 === t) {
                    if (void 0 !== (n = Ce.get(r, e) || Ce.get(r, e.replace(je, "-$&").toLowerCase()))) return n;
                    if (i = re.camelCase(e), void 0 !== (n = Ce.get(r, i))) return n;
                    if (void 0 !== (n = l(r, i, void 0))) return n
                } else i = re.camelCase(e),
                this.each(function () {
                    var n = Ce.get(this, i);
                    Ce.set(this, i, t),
                    e.indexOf("-") > -1 && void 0 !== n && Ce.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                Ce.remove(this, e)
            })
        }
    }),
    re.extend({
        queue: function (e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = Se.get(e, t), n && (!i || re.isArray(n) ? i = Se.access(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = re.queue(e, t),
                i = n.length,
                o = n.shift(),
                r = re._queueHooks(e, t),
                s = function () {
                    re.dequeue(e, t)
                };
            "inprogress" === o && (o = n.shift(), i--),
            o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, s, r)),
            !i && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return Se.get(e, n) || Se.access(e, n, {
                empty: re.Callbacks("once memory").add(function () {
                    Se.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    re.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = re.queue(this, e, t);
                re._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                re.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, i = 1,
                o = re.Deferred(),
                r = this,
                s = this.length,
                a = function () {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = Se.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(),
            o.promise(t)
        }
    });
    var _e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ie = new RegExp("^(?:([+-])=|)(" + _e + ")([a-z%]*)$", "i"),
        Ye = ["Top", "Right", "Bottom", "Left"],
        Oe = function (e, t) {
            return e = t || e,
            "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
        },
        Ee = /^(?:checkbox|radio)$/i,
        Ae = /<([\w:-]+)/,
        $e = /^$|\/(?:java|ecma)script/i,
        Le = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Le.optgroup = Le.option,
    Le.tbody = Le.tfoot = Le.colgroup = Le.caption = Le.thead,
    Le.th = Le.td;
    var Qe = /<|&#?\w+;/;
    !
    function () {
        var e = X.createDocumentFragment(),
            t = e.appendChild(X.createElement("div")),
            n = X.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        ie.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue
    }();
    var De = /^key/,
        Me = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ze = /^([^.]*)(?:\.(.+)|)/;
    re.event = {
        global: {}, add: function (e, t, n, i, o) {
            var r, s, a, l, u, c, d, p, h, f, g, m = Se.get(e);
            if (m) for (n.handler && (r = n, n = r.handler, o = r.selector), n.guid || (n.guid = re.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function (t) {
                return void 0 !== re && re.event.triggered !== t.type ? re.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(we) || [""], u = t.length; u--;) a = ze.exec(t[u]) || [],
            h = g = a[1],
            f = (a[2] || "").split(".").sort(),
            h && (d = re.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = re.event.special[h] || {}, c = re.extend({
                type: h,
                origType: g,
                data: i,
                handler: n,
                guid: n.guid,
                selector: o,
                needsContext: o && re.expr.match.needsContext.test(o),
                namespace: f.join(".")
            }, r), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? p.splice(p.delegateCount++, 0, c) : p.push(c), re.event.global[h] = !0)
        }, remove: function (e, t, n, i, o) {
            var r, s, a, l, u, c, d, p, h, f, g, m = Se.hasData(e) && Se.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(we) || [""], u = t.length; u--;) if (a = ze.exec(t[u]) || [], h = g = a[1], f = (a[2] || "").split(".").sort(), h) {
                    for (d = re.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--;) c = p[r],
                    !o && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (p.splice(r, 1), c.selector && p.delegateCount--, d.remove && d.remove.call(e, c));
                    s && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, m.handle) || re.removeEvent(e, h, m.handle), delete l[h])
                } else for (h in l) re.event.remove(e, h + t[u], n, i, !0);
                re.isEmptyObject(l) && Se.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            e = re.event.fix(e);
            var t, n, i, o, r, s = [],
                a = G.call(arguments),
                l = (Se.get(this, "events") || {})[e.type] || [],
                u = re.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (s = re.event.handlers.call(this, e, l), t = 0;
                (o = s[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0;
                (r = o.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (i = ((re.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        }, handlers: function (e, t) {
            var n, i, o, r, s = [],
                a = t.delegateCount,
                l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (i = [], n = 0; a > n; n++) r = t[n],
                o = r.selector + " ",
                void 0 === i[o] && (i[o] = r.needsContext ? re(o, this).index(l) > -1 : re.find(o, this, null, [l]).length),
                i[o] && i.push(r);
                i.length && s.push({
                    elem: l,
                    handlers: i
                })
            }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {}, keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        }, mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, i, o, r = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || X, i = n.documentElement, o = n.body, e.pageX = t.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)),
                e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0),
                e
            }
        }, fix: function (e) {
            if (e[re.expando]) return e;
            var t, n, i, o = e.type,
                r = e,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = Me.test(o) ? this.mouseHooks : De.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, e = new re.Event(r), t = i.length; t--;) n = i[t],
            e[n] = r[n];
            return e.target || (e.target = X),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, r) : e
        }, special: {
            load: {
                noBubble: !0
            }, focus: {
                trigger: function () {
                    return this !== g() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === g() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && re.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return re.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, re.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, re.Event = function (e, t) {
        return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? h : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
    }, re.Event.prototype = {
        constructor: re.Event,
        isDefaultPrevented: f,
        isPropagationStopped: f,
        isImmediatePropagationStopped: f,
        isSimulated: !1,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = h,
            e && !this.isSimulated && e.preventDefault()
        }, stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = h,
            e && !this.isSimulated && e.stopPropagation()
        }, stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    }, re.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        re.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
                var n, i = this,
                    o = e.relatedTarget,
                    r = e.handleObj;
                return o && (o === i || re.contains(i, o)) || (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    re.fn.extend({
        on: function (e, t, n, i) {
            return m(this, e, t, n, i)
        }, one: function (e, t, n, i) {
            return m(this, e, t, n, i, 1)
        }, off: function (e, t, n) {
            var i, o;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj,
            re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0),
            !1 === n && (n = f),
            this.each(function () {
                re.event.remove(this, e, n, t)
            })
        }
    });
    var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        He = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Be = /^true\/(.*)/,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    re.extend({
        htmlPrefilter: function (e) {
            return e.replace(Fe, "<$1></$2>")
        }, clone: function (e, t, n) {
            var i, o, r, s, a = e.cloneNode(!0),
                l = re.contains(e.ownerDocument, e);
            if (!(ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e))) for (s = c(a), r = c(e), i = 0, o = r.length; o > i; i++) T(r[i], s[i]);
            if (t) if (n) for (r = r || c(e), s = s || c(a), i = 0, o = r.length; o > i; i++) w(r[i], s[i]);
            else w(e, a);
            return s = c(a, "script"),
            s.length > 0 && d(s, !l && c(e, "script")),
            a
        }, cleanData: function (e) {
            for (var t, n, i, o = re.event.special, r = 0; void 0 !== (n = e[r]); r++) if (Pe(n)) {
                if (t = n[Se.expando]) {
                    if (t.events) for (i in t.events) o[i] ? re.event.remove(n, i) : re.removeEvent(n, i, t.handle);
                    n[Se.expando] = void 0
                }
                n[Ce.expando] && (n[Ce.expando] = void 0)
            }
        }
    }),
    re.fn.extend({
        domManip: x,
        detach: function (e) {
            return P(this, e, !0)
        }, remove: function (e) {
            return P(this, e)
        }, text: function (e) {
            return xe(this, function (e) {
                return void 0 === e ? re.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return x(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    y(this, e).appendChild(e)
                }
            })
        }, prepend: function () {
            return x(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = y(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return x(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return x(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (re.cleanData(c(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function () {
                return re.clone(this, e, t)
            })
        }, html: function (e) {
            return xe(this, function (e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !He.test(e) && !Le[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = re.htmlPrefilter(e);
                    try {
                        for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(c(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = [];
            return x(this, arguments, function (t) {
                var n = this.parentNode;
                re.inArray(this, e) < 0 && (re.cleanData(c(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }),
    re.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        re.fn[e] = function (e) {
            for (var n, i = [], o = re(e), r = o.length - 1, s = 0; r >= s; s++) n = s === r ? this : this.clone(!0),
            re(o[s])[t](n),
            Z.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Re, We = {
        HTML: "block",
        BODY: "block"
    },
        Ve = /^margin/,
        Ue = new RegExp("^(" + _e + ")(?!px)[a-z%]+$", "i"),
        Xe = function (t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e),
            n.getComputedStyle(t)
        },
        Ge = function (e, t, n, i) {
            var o, r, s = {};
            for (r in t) s[r] = e.style[r],
            e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = s[r];
            return o
        },
        Ke = X.documentElement;
    !
    function () {
        function t() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            a.innerHTML = "",
            Ke.appendChild(s);
            var t = e.getComputedStyle(a);
            n = "1%" !== t.top,
            r = "2px" === t.marginLeft,
            i = "4px" === t.width,
            a.style.marginRight = "50%",
            o = "4px" === t.marginRight,
            Ke.removeChild(s)
        }
        var n, i, o, r, s = X.createElement("div"),
            a = X.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === a.style.backgroundClip, s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", s.appendChild(a), re.extend(ie, {
            pixelPosition: function () {
                return t(),
                n
            }, boxSizingReliable: function () {
                return null == i && t(),
                i
            }, pixelMarginRight: function () {
                return null == i && t(),
                o
            }, reliableMarginLeft: function () {
                return null == i && t(),
                r
            }, reliableMarginRight: function () {
                var t, n = a.appendChild(X.createElement("div"));
                return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                a.style.width = "1px",
                Ke.appendChild(s),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Ke.removeChild(s),
                a.removeChild(n),
                t
            }
        }))
    }();
    var Ze = /^(none|table(?!-c[ea]).+)/,
        Je = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        et = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        tt = ["Webkit", "O", "Moz", "ms"],
        nt = X.createElement("div").style;
    re.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        }, cssNumber: {
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
        }, cssProps: {
            float: "cssFloat"
        }, style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, r, s, a = re.camelCase(t),
                    l = e.style;
                return t = re.cssProps[a] || (re.cssProps[a] = _(a) || a),
                s = re.cssHooks[t] || re.cssHooks[a],
                void 0 === n ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : l[t] : (r = typeof n, "string" === r && (o = Ie.exec(n)) && o[1] && (n = u(e, t, o), r = "number"), void(null != n && n === n && ("number" === r && (n += o && o[3] || (re.cssNumber[a] ? "" : "px")), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l[t] = n))))
            }
        }, css: function (e, t, n, i) {
            var o, r, s, a = re.camelCase(t);
            return t = re.cssProps[a] || (re.cssProps[a] = _(a) || a),
            s = re.cssHooks[t] || re.cssHooks[a],
            s && "get" in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = k(e, t, i)),
            "normal" === o && t in et && (o = et[t]),
            "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }),
    re.each(["height", "width"], function (e, t) {
        re.cssHooks[t] = {
            get: function (e, n, i) {
                return n ? Ze.test(re.css(e, "display")) && 0 === e.offsetWidth ? Ge(e, Je, function () {
                    return O(e, t, i)
                }) : O(e, t, i) : void 0
            }, set: function (e, n, i) {
                var o, r = i && Xe(e),
                    s = i && Y(e, t, i, "border-box" === re.css(e, "boxSizing", !1, r), r);
                return s && (o = Ie.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n, n = re.css(e, t)),
                I(e, n, s)
            }
        }
    }),
    re.cssHooks.marginLeft = j(ie.reliableMarginLeft, function (e, t) {
        return t ? (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Ge(e, {
            marginLeft: 0
        }, function () {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    re.cssHooks.marginRight = j(ie.reliableMarginRight, function (e, t) {
        return t ? Ge(e, {
            display: "inline-block"
        }, k, [e, "marginRight"]) : void 0
    }),
    re.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (e, t) {
        re.cssHooks[e + t] = {
            expand: function (n) {
                for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Ye[i] + t] = r[i] || r[i - 2] || r[0];
                return o
            }
        }, Ve.test(e) || (re.cssHooks[e + t].set = I)
    }),
    re.fn.extend({
        css: function (e, t) {
            return xe(this, function (e, t, n) {
                var i, o, r = {},
                    s = 0;
                if (re.isArray(t)) {
                    for (i = Xe(e), o = t.length; o > s; s++) r[t[s]] = re.css(e, t[s], !1, i);
                    return r
                }
                return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return E(this, !0)
        }, hide: function () {
            return E(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                Oe(this) ? re(this).show() : re(this).hide()
            })
        }
    }),
    re.Tween = A,
    A.prototype = {
        constructor: A,
        init: function (e, t, n, i, o, r) {
            this.elem = e,
            this.prop = n,
            this.easing = o || re.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = r || (re.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = A.propHooks[this.prop];
            return e && e.get ? e.get(this) : A.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = A.propHooks[this.prop];
            return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : A.propHooks._default.set(this),
            this
        }
    }, A.prototype.init.prototype = A.prototype,
    A.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            }, set: function (e) {
                re.fx.step[e.prop] ? re.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[re.cssProps[e.prop]] && !re.cssHooks[e.prop] ? e.elem[e.prop] = e.now : re.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, A.propHooks.scrollTop = A.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, re.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, re.fx = A.prototype.init,
    re.fx.step = {};
    var it, ot, rt = /^(?:toggle|show|hide)$/,
        st = /queueHooks$/;
    re.Animation = re.extend(z, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return u(n.elem, e, Ie.exec(t), n),
                n
            }]
        }, tweener: function (e, t) {
            re.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(we);
            for (var n, i = 0, o = e.length; o > i; i++) n = e[i],
            z.tweeners[n] = z.tweeners[n] || [],
            z.tweeners[n].unshift(t)
        }, prefilters: [D],
        prefilter: function (e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e)
        }
    }),
    re.speed = function (e, t, n) {
        var i = e && "object" == typeof e ? re.extend({}, e) : {
            complete: n || !n && t || re.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !re.isFunction(t) && t
        };
        return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function () {
            re.isFunction(i.old) && i.old.call(this),
            i.queue && re.dequeue(this, i.queue)
        }, i
    }, re.fn.extend({
        fadeTo: function (e, t, n, i) {
            return this.filter(Oe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        }, animate: function (e, t, n, i) {
            var o = re.isEmptyObject(e),
                r = re.speed(t, n, i),
                s = function () {
                    var t = z(this, re.extend({}, e), r);
                    (o || Se.get(this, "finish")) && t.stop(!0)
                };
            return s.finish = s,
            o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        }, stop: function (e, t, n) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
                var t = !0,
                    o = null != e && e + "queueHooks",
                    r = re.timers,
                    s = Se.get(this);
                if (o) s[o] && s[o].stop && i(s[o]);
                else for (o in s) s[o] && s[o].stop && st.test(o) && i(s[o]);
                for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                !t && n || re.dequeue(this, e)
            })
        }, finish: function (e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function () {
                var t, n = Se.get(this),
                    i = n[e + "queue"],
                    o = n[e + "queueHooks"],
                    r = re.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    re.each(["toggle", "show", "hide"], function (e, t) {
        var n = re.fn[t];
        re.fn[t] = function (e, i, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, i, o)
        }
    }),
    re.each({
        slideDown: L("show"),
        slideUp: L("hide"),
        slideToggle: L("toggle"),
        fadeIn: {
            opacity: "show"
        }, fadeOut: {
            opacity: "hide"
        }, fadeToggle: {
            opacity: "toggle"
        }
    }, function (e, t) {
        re.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    re.timers = [],
    re.fx.tick = function () {
        var e, t = 0,
            n = re.timers;
        for (it = re.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || re.fx.stop(),
        it = void 0
    }, re.fx.timer = function (e) {
        re.timers.push(e),
        e() ? re.fx.start() : re.timers.pop()
    }, re.fx.interval = 13,
    re.fx.start = function () {
        ot || (ot = e.setInterval(re.fx.tick, re.fx.interval))
    }, re.fx.stop = function () {
        e.clearInterval(ot),
        ot = null
    }, re.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, re.fn.delay = function (t, n) {
        return t = re.fx ? re.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function (n, i) {
            var o = e.setTimeout(n, t);
            i.stop = function () {
                e.clearTimeout(o)
            }
        })
    }, function () {
        var e = X.createElement("input"),
            t = X.createElement("select"),
            n = t.appendChild(X.createElement("option"));
        e.type = "checkbox",
        ie.checkOn = "" !== e.value,
        ie.optSelected = n.selected,
        t.disabled = !0,
        ie.optDisabled = !n.disabled,
        e = X.createElement("input"),
        e.value = "t",
        e.type = "radio",
        ie.radioValue = "t" === e.value
    }();
    var at, lt = re.expr.attrHandle;
    re.fn.extend({
        attr: function (e, t) {
            return xe(this, re.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                re.removeAttr(this, e)
            })
        }
    }),
    re.extend({
        attr: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), o = re.attrHooks[t] || (re.expr.match.bool.test(t) ? at : void 0)), void 0 !== n ? null === n ? void re.removeAttr(e, t) : o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : o && "get" in o && null !== (i = o.get(e, t)) ? i : (i = re.find.attr(e, t), null == i ? void 0 : i))
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, i, o = 0,
                r = t && t.match(we);
            if (r && 1 === e.nodeType) for (; n = r[o++];) i = re.propFix[n] || n,
            re.expr.match.bool.test(n) && (e[i] = !1),
            e.removeAttribute(n)
        }
    }),
    at = {
        set: function (e, t, n) {
            return !1 === t ? re.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    }, re.each(re.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = lt[t] || re.find.attr;
        lt[t] = function (e, t, i) {
            var o, r;
            return i || (r = lt[t], lt[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, lt[t] = r),
            o
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
        ct = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function (e, t) {
            return xe(this, re.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[re.propFix[e] || e]
            })
        }
    }),
    re.extend({
        prop: function (e, t, n) {
            var i, o, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && re.isXMLDoc(e) || (t = re.propFix[t] || t, o = re.propHooks[t]),
            void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = re.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || ct.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ie.optSelected || (re.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        re.propFix[this.toLowerCase()] = this
    });
    var dt = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).addClass(e.call(this, t, F(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(we) || []; n = this[l++];) if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(dt, " ")) {
                for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                a = re.trim(i),
                o !== a && n.setAttribute("class", a)
            }
            return this
        }, removeClass: function (e) {
            var t, n, i, o, r, s, a, l = 0;
            if (re.isFunction(e)) return this.each(function (t) {
                re(this).removeClass(e.call(this, t, F(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(we) || []; n = this[l++];) if (o = F(n), i = 1 === n.nodeType && (" " + o + " ").replace(dt, " ")) {
                for (s = 0; r = t[s++];) for (; i.indexOf(" " + r + " ") > -1;) i = i.replace(" " + r + " ", " ");
                a = re.trim(i),
                o !== a && n.setAttribute("class", a)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function (n) {
                re(this).toggleClass(e.call(this, n, F(this), t), t)
            }) : this.each(function () {
                var t, i, o, r;
                if ("string" === n) for (i = 0, o = re(this), r = e.match(we) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = F(this), t && Se.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Se.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++];) if (1 === n.nodeType && (" " + F(n) + " ").replace(dt, " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var pt = /\r/g,
        ht = /[\x20\t\r\n\f]+/g;
    re.fn.extend({
        val: function (e) {
            var t, n, i, o = this[0];
            return arguments.length ? (i = re.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(pt, "") : null == n ? "" : n)) : void 0
        }
    }),
    re.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = re.find.attr(e, "value");
                    return null != t ? t : re.trim(re.text(e)).replace(ht, " ")
                }
            }, select: {
                get: function (e) {
                    for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, s = r ? null : [], a = r ? o + 1 : i.length, l = 0 > o ? a : r ? o : 0; a > l; l++) if (n = i[l], (n.selected || l === o) && (ie.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                        if (t = re(n).val(), r) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    for (var n, i, o = e.options, r = re.makeArray(t), s = o.length; s--;) i = o[s],
                    (i.selected = re.inArray(re.valHooks.option.get(i), r) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    re.each(["radio", "checkbox"], function () {
        re.valHooks[this] = {
            set: function (e, t) {
                return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) > -1 : void 0
            }
        }, ie.checkOn || (re.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ft = /^(?:focusinfocus|focusoutblur)$/;
    re.extend(re.event, {
        trigger: function (t, n, i, o) {
            var r, s, a, l, u, c, d, p = [i || X],
                h = ne.call(t, "type") ? t.type : t,
                f = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || X, 3 !== i.nodeType && 8 !== i.nodeType && !ft.test(h + re.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), u = h.indexOf(":") < 0 && "on" + h, t = t[re.expando] ? t : new re.Event(h, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = f.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), d = re.event.special[h] || {}, o || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                if (!o && !d.noBubble && !re.isWindow(i)) {
                    for (l = d.delegateType || h, ft.test(l + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s),
                    a = s;
                    a === (i.ownerDocument || X) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (r = 0;
                (s = p[r++]) && !t.isPropagationStopped();) t.type = r > 1 ? l : d.bindType || h,
                c = (Se.get(s, "events") || {})[t.type] && Se.get(s, "handle"),
                c && c.apply(s, n),
                (c = u && s[u]) && c.apply && Pe(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = h,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Pe(i) || u && re.isFunction(i[h]) && !re.isWindow(i) && (a = i[u], a && (i[u] = null), re.event.triggered = h, i[h](), re.event.triggered = void 0, a && (i[u] = a)),
                t.result
            }
        }, simulate: function (e, t, n) {
            var i = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0
            });
            re.event.trigger(i, null, t)
        }
    }),
    re.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                re.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? re.event.trigger(e, t, n, !0) : void 0
        }
    }),
    re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        re.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    re.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    ie.focusin = "onfocusin" in e,
    ie.focusin || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function (e, t) {
        var n = function (e) {
            re.event.simulate(t, e.target, re.event.fix(e))
        };
        re.event.special[t] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    o = Se.access(i, t);
                o || i.addEventListener(e, n, !0),
                Se.access(i, t, (o || 0) + 1)
            }, teardown: function () {
                var i = this.ownerDocument || this,
                    o = Se.access(i, t) - 1;
                o ? Se.access(i, t, o) : (i.removeEventListener(e, n, !0), Se.remove(i, t))
            }
        }
    });
    var gt = e.location,
        mt = re.now(),
        yt = /\?/;
    re.parseJSON = function (e) {
        return JSON.parse(e + "")
    }, re.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t),
        n
    };
    var vt = /#.*$/,
        bt = /([?&])_=[^&]*/,
        wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        xt = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        St = {},
        Ct = {},
        kt = "*/".concat("*"),
        jt = X.createElement("a");
    jt.href = gt.href,
    re.extend({
        active: 0,
        lastModified: {}, etag: {}, ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: Tt.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": kt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            }, contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            }, responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            }, converters: {
                "* text": String,
                "text html": !0,
                "text json": re.parseJSON,
                "text xml": re.parseXML
            }, flatOptions: {
                url: !0,
                context: !0
            }
        }, ajaxSetup: function (e, t) {
            return t ? B(B(e, re.ajaxSettings), t) : B(re.ajaxSettings, e)
        }, ajaxPrefilter: H(St),
        ajaxTransport: H(Ct),
        ajax: function (t, n) {
            function i(t, n, i, a) {
                var u, d, v, b, T, P = n;
                2 !== w && (w = 2, l && e.clearTimeout(l), o = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, i && (b = q(p, x, i)), b = R(p, b, x, u), u ? (p.ifModified && (T = x.getResponseHeader("Last-Modified"), T && (re.lastModified[r] = T), (T = x.getResponseHeader("etag")) && (re.etag[r] = T)), 204 === t || "HEAD" === p.type ? P = "nocontent" : 304 === t ? P = "notmodified" : (P = b.state, d = b.data, v = b.error, u = !v)) : (v = P, !t && P || (P = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (n || P) + "", u ? g.resolveWith(h, [d, P, x]) : g.rejectWith(h, [x, P, v]), x.statusCode(y), y = void 0, c && f.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? d : v]), m.fireWith(h, [x, P]), c && (f.trigger("ajaxComplete", [x, p]), --re.active || re.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0),
            n = n || {};
            var o, r, s, a, l, u, c, d, p = re.ajaxSetup({}, n),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? re(h) : re.event,
                g = re.Deferred(),
                m = re.Callbacks("once memory"),
                y = p.statusCode || {},
                v = {},
                b = {},
                w = 0,
                T = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!a) for (a = {}; t = wt.exec(s);) a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === w ? s : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = b[n] = b[n] || e, v[e] = t),
                        this
                    }, overrideMimeType: function (e) {
                        return w || (p.mimeType = e),
                        this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (2 > w) for (t in e) y[t] = [y[t], e[t]];
                        else x.always(e[x.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || T;
                        return o && o.abort(t),
                        i(0, t),
                        this
                    }
                };
            if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || gt.href) + "").replace(vt, "").replace(Pt, gt.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = re.trim(p.dataType || "*").toLowerCase().match(we) || [""], null == p.crossDomain) {
                u = X.createElement("a");
                try {
                    u.href = p.url,
                    u.href = u.href,
                    p.crossDomain = jt.protocol + "//" + jt.host != u.protocol + "//" + u.host
                } catch (e) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = re.param(p.data, p.traditional)), N(St, p, n, x), 2 === w) return x;
            c = re.event && p.global,
            c && 0 == re.active++ && re.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !xt.test(p.type),
            r = p.url,
            p.hasContent || (p.data && (r = p.url += (yt.test(r) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = bt.test(r) ? r.replace(bt, "$1_=" + mt++) : r + (yt.test(r) ? "&" : "?") + "_=" + mt++)),
            p.ifModified && (re.lastModified[r] && x.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && x.setRequestHeader("If-None-Match", re.etag[r])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && x.setRequestHeader("Content-Type", p.contentType),
            x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, x, p) || 2 === w)) return x.abort();
            T = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) x[d](p[d]);
            if (o = N(Ct, p, n, x)) {
                if (x.readyState = 1, c && f.trigger("ajaxSend", [x, p]), 2 === w) return x;
                p.async && p.timeout > 0 && (l = e.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    w = 1,
                    o.send(v, i)
                } catch (e) {
                    if (!(2 > w)) throw e;
                    i(-1, e)
                }
            } else i(-1, "No Transport");
            return x
        }, getJSON: function (e, t, n) {
            return re.get(e, t, n, "json")
        }, getScript: function (e, t) {
            return re.get(e, void 0, t, "script")
        }
    }),
    re.each(["get", "post"], function (e, t) {
        re[t] = function (e, n, i, o) {
            return re.isFunction(n) && (o = o || i, i = n, n = void 0),
            re.ajax(re.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: i
            }, re.isPlainObject(e) && e))
        }
    }),
    re._evalUrl = function (e) {
        return re.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }, re.fn.extend({
        wrapAll: function (e) {
            var t;
            return re.isFunction(e) ? this.each(function (t) {
                re(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = re(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        }, wrapInner: function (e) {
            return re.isFunction(e) ? this.each(function (t) {
                re(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = re(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = re.isFunction(e);
            return this.each(function (n) {
                re(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    re.expr.filters.hidden = function (e) {
        return !re.expr.filters.visible(e)
    }, re.expr.filters.visible = function (e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var _t = /%20/g,
        It = /\[\]$/,
        Yt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Et = /^(?:input|select|textarea|keygen)/i;
    re.param = function (e, t) {
        var n, i = [],
            o = function (e, t) {
                t = re.isFunction(t) ? t() : null == t ? "" : t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function () {
            o(this.name, this.value)
        });
        else for (n in e) W(n, e[n], t, o);
        return i.join("&").replace(_t, "+")
    }, re.fn.extend({
        serialize: function () {
            return re.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = re.prop(this, "elements");
                return e ? re.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !re(this).is(":disabled") && Et.test(this.nodeName) && !Ot.test(e) && (this.checked || !Ee.test(e))
            }).map(function (e, t) {
                var n = re(this).val();
                return null == n ? null : re.isArray(n) ? re.map(n, function (e) {
                    return {
                        name: t.name,
                        value: e.replace(Yt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Yt, "\r\n")
                }
            }).get()
        }
    }),
       re.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        }, contents: {
            script: /\b(?:java|ecma)script\b/
        }, converters: {
            "text script": function (e) {
                return re.globalEval(e),
                e
            }
        }
    }),
    re.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    re.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function (i, o) {
                    t = re("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function (e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }),
                    X.head.appendChild(t[0])
                }, abort: function () {
                    n && n()
                }
            }
        }
    });
    var Lt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Lt.pop() || re.expando + "_" + mt++;
            return this[e] = !0,
            e
        }
    }),
    re.ajaxPrefilter("json jsonp", function (t, n, i) {
        var o, r, s, a = !1 !== t.jsonp && (Qt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Qt, "$1" + o) : !1 !== t.jsonp && (t.url += (yt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
            return s || re.error(o + " was not called"),
            s[0]
        }, t.dataTypes[0] = "json", r = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            void 0 === r ? re(e).removeProp(o) : e[o] = r,
            t[o] && (t.jsonpCallback = n.jsonpCallback, Lt.push(o)),
            s && re.isFunction(r) && r(s[0]),
            s = r = void 0
        }), "script") : void 0
    }),
    re.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || X;
        var i = fe.exec(e),
            o = !n && [];
        return i ? [t.createElement(i[1])] : (i = p([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
    };
    var Dt = re.fn.load;
    re.fn.load = function (e, t, n) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
        var i, o, r, s = this,
            a = e.indexOf(" ");
        return a > -1 && (i = re.trim(e.slice(a)), e = e.slice(0, a)),
        re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && re.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            r = arguments,
            s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).always(n &&
        function (e, t) {
            s.each(function () {
                n.apply(this, r || [e.responseText, t, e])
            })
        }),
        this
    }, re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        re.fn[t] = function (e) {
            return this.on(t, e)
        }
    }),
    re.expr.filters.animated = function (e) {
        return re.grep(re.timers, function (t) {
            return e === t.elem
        }).length
    }, re.offset = {
        setOffset: function (e, t, n) {
            var i, o, r, s, a, l, u, c = re.css(e, "position"),
                d = re(e),
                p = {};
            "static" === c && (e.style.position = "relative"),
            a = d.offset(),
            r = re.css(e, "top"),
            l = re.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1,
            u ? (i = d.position(), s = i.top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0),
            re.isFunction(t) && (t = t.call(e, n, re.extend({}, a))),
            null != t.top && (p.top = t.top - a.top + s),
            null != t.left && (p.left = t.left - a.left + o),
            "using" in t ? t.using.call(e, p) : d.css(p)
        }
    }, re.fn.extend({
        offset: function (e) {
            if (arguments.length) return void 0 === e ? this : this.each(function (t) {
                re.offset.setOffset(this, e, t)
            });
            var t, n, i = this[0],
                o = {
                    top: 0,
                    left: 0
                },
                r = i && i.ownerDocument;
            return r ? (t = r.documentElement, re.contains(t, i) ? (o = i.getBoundingClientRect(), n = V(r), {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }) : o) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === re.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (i = e.offset()), i.top += re.css(e[0], "borderTopWidth", !0), i.left += re.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - i.top - re.css(n, "marginTop", !0),
                    left: t.left - i.left - re.css(n, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent; e && "static" === re.css(e, "position");) e = e.offsetParent;
                return e || Ke
            })
        }
    }),
    re.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (e, t) {
        var n = "pageYOffset" === t;
        re.fn[e] = function (i) {
            return xe(this, function (e, i, o) {
                var r = V(e);
                return void 0 === o ? r ? r[t] : e[i] : void(r ? r.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o)
            }, e, i, arguments.length)
        }
    }),
    re.each(["top", "left"], function (e, t) {
        re.cssHooks[t] = j(ie.pixelPosition, function (e, n) {
            return n ? (n = k(e, t), Ue.test(n) ? re(e).position()[t] + "px" : n) : void 0
        })
    }),
    re.each({
        Height: "height",
        Width: "width"
    }, function (e, t) {
        re.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function (n, i) {
            re.fn[i] = function (i, o) {
                var r = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === o ? "margin" : "border");
                return xe(this, function (t, n, i) {
                    var o;
                    return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
                }, t, r ? i : void 0, r, null)
            }
        })
    }),
    re.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, i) {
            return this.on(t, e, n, i)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, size: function () {
            return this.length
        }
    }),
    re.fn.andSelf = re.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function () {
        return re
    });
    var Mt = e.jQuery,
        zt = e.$;
    return re.noConflict = function (t) {
        return e.$ === re && (e.$ = zt),
        t && e.jQuery === re && (e.jQuery = Mt),
        re
    }, t || (e.jQuery = e.$ = re),
    re
}),


function () {
    var e, t, n, i, o, r, s, a, l, u, c, d, p, h, f, g, m, y, v, b, w, T, x, P, S, C, k, j, _, I, Y, O, E, A, $, L, Q, D, M, z, F, H, N, B, q, R, W, V, U, X = [].slice,
        G = {}.hasOwnProperty,
        K = function (e, t) {
            function n() {
                this.constructor = e
            }
            for (var i in t) G.call(t, i) && (e[i] = t[i]);
            return n.prototype = t.prototype,
            e.prototype = new n,
            e.__super__ = t.prototype,
            e
        },
        Z = [].indexOf ||
        function (e) {
            for (var t = 0, n = this.length; n > t; t++) if (t in this && this[t] === e) return t;
            return -1
        };
    for (w = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        }, eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        }, ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, _ = function () {
        var e;
        return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
    }, Y = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, b = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == Y && (Y = function (e) {
        return setTimeout(e, 50)
    }, b = function (e) {
        return clearTimeout(e)
    }), E = function (e) {
        var t, n;
        return t = _(),
        (n = function () {
            var i;
            return i = _() - t,
            i >= 33 ? (t = _(), e(i, function () {
                return Y(n)
            })) : setTimeout(n, 33 - i)
        })()
    }, O = function () {
        var e, t, n;
        return n = arguments[0],
        t = arguments[1],
        e = 3 <= arguments.length ? X.call(arguments, 2) : [],
        "function" == typeof n[t] ? n[t].apply(n, e) : n[t]
    }, T = function () {
        var e, t, n, i, o, r, s;
        for (t = arguments[0], i = 2 <= arguments.length ? X.call(arguments, 1) : [], r = 0, s = i.length; s > r; r++) if (n = i[r]) for (e in n) G.call(n, e) && (o = n[e], null != t[e] && "object" == typeof t[e] && null != o && "object" == typeof o ? T(t[e], o) : t[e] = o);
        return t
    }, m = function (e) {
        var t, n, i, o, r;
        for (n = t = 0, o = 0, r = e.length; r > o; o++) i = e[o],
        n += Math.abs(i),
        t++;
        return n / t
    }, P = function (e, t) {
        var n, i, o;
        if (null == e && (e = "options"), null == t && (t = !0), o = document.querySelector("[data-pace-" + e + "]")) {
            if (n = o.getAttribute("data-pace-" + e), !t) return n;
            try {
                return JSON.parse(n)
            } catch (e) {
                return i = e,
                "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", i) : void 0
            }
        }
    }, s = function () {
        function e() {}
        return e.prototype.on = function (e, t, n, i) {
            var o;
            return null == i && (i = !1),
            null == this.bindings && (this.bindings = {}),
            null == (o = this.bindings)[e] && (o[e] = []),
            this.bindings[e].push({
                handler: t,
                ctx: n,
                once: i
            })
        }, e.prototype.once = function (e, t, n) {
            return this.on(e, t, n, !0)
        }, e.prototype.off = function (e, t) {
            var n, i, o;
            if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
                if (null == t) return delete this.bindings[e];
                for (n = 0, o = []; n < this.bindings[e].length;) o.push(this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : n++);
                return o
            }
        }, e.prototype.trigger = function () {
            var e, t, n, i, o, r, s, a, l;
            if (n = arguments[0], e = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (s = this.bindings) ? s[n] : void 0) {
                for (o = 0, l = []; o < this.bindings[n].length;) a = this.bindings[n][o],
                i = a.handler,
                t = a.ctx,
                r = a.once,
                i.apply(null != t ? t : this, e),
                l.push(r ? this.bindings[n].splice(o, 1) : o++);
                return l
            }
        }, e
    }(), u = window.Pace || {}, window.Pace = u, T(u, s.prototype), I = u.options = T({}, w, window.paceOptions, P()), W = ["ajax", "document", "eventLag", "elements"], N = 0, q = W.length; q > N; N++) Q = W[N],
    !0 === I[Q] && (I[Q] = w[Q]);
    l = function (e) {
        function t() {
            return V = t.__super__.constructor.apply(this, arguments)
        }
        return K(t, e),
        t
    }(Error),
    t = function () {
        function e() {
            this.progress = 0
        }
        return e.prototype.getElement = function () {
            var e;
            if (null == this.el) {
                if (!(e = document.querySelector(I.target))) throw new l;
                this.el = document.createElement("div"),
                this.el.className = "pace pace-active",
                document.body.className = document.body.className.replace(/pace-done/g, ""),
                document.body.className += " pace-running",
                this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',
                null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
            }
            return this.el
        }, e.prototype.finish = function () {
            var e;
            return e = this.getElement(),
            e.className = e.className.replace("pace-active", ""),
            e.className += " pace-inactive",
            document.body.className = document.body.className.replace("pace-running", ""),
            document.body.className += " pace-done"
        }, e.prototype.update = function (e) {
            return this.progress = e,
            this.render()
        }, e.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (e) {
                l = e
            }
            return this.el = void 0
        }, e.prototype.render = function () {
            var e, t, n, i, o, r, s;
            if (null == document.querySelector(I.target)) return !1;
            for (e = this.getElement(), i = "translate3d(" + this.progress + "%, 0, 0)", s = ["webkitTransform", "msTransform", "transform"], o = 0, r = s.length; r > o; o++) t = s[o],
            e.children[0].style[t] = i;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"), this.progress >= 100 ? n = "99" : (n = this.progress < 10 ? "0" : "", n += 0 | this.progress), e.children[0].setAttribute("data-progress", "" + n)),
            this.lastRenderedProgress = this.progress
        }, e.prototype.done = function () {
            return this.progress >= 100
        }, e
    }(),
    a = function () {
        function e() {
            this.bindings = {}
        }
        return e.prototype.trigger = function (e, t) {
            var n, i, o, r, s;
            if (null != this.bindings[e]) {
                for (r = this.bindings[e], s = [], i = 0, o = r.length; o > i; i++) n = r[i],
                s.push(n.call(this, t));
                return s
            }
        }, e.prototype.on = function (e, t) {
            var n;
            return null == (n = this.bindings)[e] && (n[e] = []),
            this.bindings[e].push(t)
        }, e
    }(),
    H = window.XMLHttpRequest,
    F = window.XDomainRequest,
    z = window.WebSocket,
    x = function (e, t) {
        var n, i, o;
        o = [];
        for (n in t.prototype) try {
            i = t.prototype[n],
            o.push(null == e[n] && "function" != typeof i ? e[n] = i : void 0)
        } catch (e) {
            e
        }
        return o
    }, k = [],
    u.ignore = function () {
        var e, t, n;
        return t = arguments[0],
        e = 2 <= arguments.length ? X.call(arguments, 1) : [],
        k.unshift("ignore"),
        n = t.apply(null, e),
        k.shift(),
        n
    }, u.track = function () {
        var e, t, n;
        return t = arguments[0],
        e = 2 <= arguments.length ? X.call(arguments, 1) : [],
        k.unshift("track"),
        n = t.apply(null, e),
        k.shift(),
        n
    }, L = function (e) {
        var t;
        if (null == e && (e = "GET"), "track" === k[0]) return "force";
        if (!k.length && I.ajax) {
            if ("socket" === e && I.ajax.trackWebSockets) return !0;
            if (t = e.toUpperCase(), Z.call(I.ajax.trackMethods, t) >= 0) return !0
        }
        return !1
    }, c = function (e) {
        function t() {
            var e, n = this;
            t.__super__.constructor.apply(this, arguments),
            e = function (e) {
                var t;
                return t = e.open,
                e.open = function (i, o) {
                    return L(i) && n.trigger("request", {
                        type: i,
                        url: o,
                        request: e
                    }),
                    t.apply(e, arguments)
                }
            }, window.XMLHttpRequest = function (t) {
                var n;
                return n = new H(t),
                e(n),
                n
            };
            try {
                x(window.XMLHttpRequest, H)
            } catch (e) {}
            if (null != F) {
                window.XDomainRequest = function () {
                    var t;
                    return t = new F,
                    e(t),
                    t
                };
                try {
                    x(window.XDomainRequest, F)
                } catch (e) {}
            }
            if (null != z && I.ajax.trackWebSockets) {
                window.WebSocket = function (e, t) {
                    var i;
                    return i = null != t ? new z(e, t) : new z(e),
                    L("socket") && n.trigger("request", {
                        type: "socket",
                        url: e,
                        protocols: t,
                        request: i
                    }),
                    i
                };
                try {
                    x(window.WebSocket, z)
                } catch (e) {}
            }
        }
        return K(t, e),
        t
    }(a),
    B = null,
    S = function () {
        return null == B && (B = new c),
        B
    }, $ = function (e) {
        var t, n, i, o;
        for (o = I.ajax.ignoreURLs, n = 0, i = o.length; i > n; n++) if ("string" == typeof(t = o[n])) {
            if (-1 !== e.indexOf(t)) return !0
        } else if (t.test(e)) return !0;
        return !1
    }, S().on("request", function (t) {
        var n, i, o, r, s;
        return r = t.type,
        o = t.request,
        s = t.url,
        $(s) ? void 0 : u.running || !1 === I.restartOnRequestAfter && "force" !== L(r) ? void 0 : (i = arguments, n = I.restartOnRequestAfter || 0, "boolean" == typeof n && (n = 0), setTimeout(function () {
            var t, n, s, a, l;
            if ("socket" === r ? o.readyState < 2 : 0 < (s = o.readyState) && 4 > s) {
                for (u.restart(), a = u.sources, l = [], t = 0, n = a.length; n > t; t++) {
                    if ((Q = a[t]) instanceof e) {
                        Q.watch.apply(Q, i);
                        break
                    }
                    l.push(void 0)
                }
                return l
            }
        }, n))
    }),
    e = function () {
        function e() {
            var e = this;
            this.elements = [],
            S().on("request", function () {
                return e.watch.apply(e, arguments)
            })
        }
        return e.prototype.watch = function (e) {
            var t, n, i, o;
            return i = e.type,
            t = e.request,
            o = e.url,
            $(o) ? void 0 : (n = "socket" === i ? new h(t) : new f(t), this.elements.push(n))
        }, e
    }(),
    f = function () {
        function e(e) {
            var t, n, i, o, r, s = this;
            if (this.progress = 0, null != window.ProgressEvent) for (null, e.addEventListener("progress", function (e) {
                return s.progress = e.lengthComputable ? 100 * e.loaded / e.total : s.progress + (100 - s.progress) / 2
            }, !1), r = ["load", "abort", "timeout", "error"], n = 0, i = r.length; i > n; n++) t = r[n],
            e.addEventListener(t, function () {
                return s.progress = 100
            }, !1);
            else o = e.onreadystatechange,
            e.onreadystatechange = function () {
                var t;
                return 0 === (t = e.readyState) || 4 === t ? s.progress = 100 : 3 === e.readyState && (s.progress = 50),
                "function" == typeof o ? o.apply(null, arguments) : void 0
            }
        }
        return e
    }(),
    h = function () {
        function e(e) {
            var t, n, i, o, r = this;
            for (this.progress = 0, o = ["error", "open"], n = 0, i = o.length; i > n; n++) t = o[n],
            e.addEventListener(t, function () {
                return r.progress = 100
            }, !1)
        }
        return e
    }(),
    i = function () {
        function e(e) {
            var t, n, i, r;
            for (null == e && (e = {}), this.elements = [], null == e.selectors && (e.selectors = []), r = e.selectors, n = 0, i = r.length; i > n; n++) t = r[n],
            this.elements.push(new o(t))
        }
        return e
    }(),
    o = function () {
        function e(e) {
            this.selector = e,
            this.progress = 0,
            this.check()
        }
        return e.prototype.check = function () {
            var e = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return e.check()
            }, I.elements.checkInterval)
        }, e.prototype.done = function () {
            return this.progress = 100
        }, e
    }(),
    n = function () {
        function e() {
            var e, t, n = this;
            this.progress = null != (t = this.states[document.readyState]) ? t : 100,
            e = document.onreadystatechange,
            document.onreadystatechange = function () {
                return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]),
                "function" == typeof e ? e.apply(null, arguments) : void 0
            }
        }
        return e.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, e
    }(),
    r = function () {
        function e() {
            var e, t, n, i, o, r = this;
            this.progress = 0,
            e = 0,
            o = [],
            i = 0,
            n = _(),
            t = setInterval(function () {
                var s;
                return s = _() - n - 50,
                n = _(),
                o.push(s),
                o.length > I.eventLag.sampleCount && o.shift(),
                e = m(o),
                ++i >= I.eventLag.minSamples && e < I.eventLag.lagThreshold ? (r.progress = 100, clearInterval(t)) : r.progress = 3 / (e + 3) * 100
            }, 50)
        }
        return e
    }(),
    p = function () {
        function e(e) {
            this.source = e,
            this.last = this.sinceLastUpdate = 0,
            this.rate = I.initialRate,
            this.catchup = 0,
            this.progress = this.lastProgress = 0,
            null != this.source && (this.progress = O(this.source, "progress"))
        }
        return e.prototype.tick = function (e, t) {
            var n;
            return null == t && (t = O(this.source, "progress")),
            t >= 100 && (this.done = !0),
            t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate), this.catchup = (t - this.progress) / I.catchupTime, this.sinceLastUpdate = 0, this.last = t),
            t > this.progress && (this.progress += this.catchup * e),
            n = 1 - Math.pow(this.progress / 100, I.easeFactor),
            this.progress += n * this.rate * e,
            this.progress = Math.min(this.lastProgress + I.maxProgressPerFrame, this.progress),
            this.progress = Math.max(0, this.progress),
            this.progress = Math.min(100, this.progress),
            this.lastProgress = this.progress,
            this.progress
        }, e
    }(),
    D = null,
    A = null,
    y = null,
    M = null,
    g = null,
    v = null,
    u.running = !1,
    C = function () {
        return I.restartOnPushState ? u.restart() : void 0
    }, null != window.history.pushState && (R = window.history.pushState, window.history.pushState = function () {
        return C(),
        R.apply(window.history, arguments)
    }),
    null != window.history.replaceState && (U = window.history.replaceState, window.history.replaceState = function () {
        return C(),
        U.apply(window.history, arguments)
    }),
    d = {
        ajax: e,
        elements: i,
        document: n,
        eventLag: r
    }, (j = function () {
        var e, n, i, o, r, s, a, l;
        for (u.sources = D = [], s = ["ajax", "elements", "document", "eventLag"], n = 0, o = s.length; o > n; n++) e = s[n],
        !1 !== I[e] && D.push(new d[e](I[e]));
        for (l = null != (a = I.extraSources) ? a : [], i = 0, r = l.length; r > i; i++) Q = l[i],
        D.push(new Q(I));
        return u.bar = y = new t,
        A = [],
        M = new p
    })(),
    u.stop = function () {
        return u.trigger("stop"),
        u.running = !1,
        y.destroy(),
        v = !0,
        null != g && ("function" == typeof b && b(g), g = null),
        j()
    }, u.restart = function () {
        return u.trigger("restart"),
        u.stop(),
        u.start()
    }, u.go = function () {
        var e;
        return u.running = !0,
        y.render(),
        e = _(),
        v = !1,
        g = E(function (t, n) {
            var i, o, r, s, a, l, c, d, h, f, g, m, b, w, T;
            for (100 - y.progress, o = f = 0, r = !0, l = g = 0, b = D.length; b > g; l = ++g) for (Q = D[l], h = null != A[l] ? A[l] : A[l] = [], a = null != (T = Q.elements) ? T : [Q], c = m = 0, w = a.length; w > m; c = ++m) s = a[c],
            d = null != h[c] ? h[c] : h[c] = new p(s),
            r &= d.done,
            d.done || (o++, f += d.tick(t));
            return i = f / o,
            y.update(M.tick(t, i)),
            y.done() || r || v ? (y.update(100), u.trigger("done"), setTimeout(function () {
                return y.finish(),
                u.running = !1,
                u.trigger("hide")
            }, Math.max(I.ghostTime, Math.max(I.minTime - (_() - e), 0)))) : n()
        })
    }, u.start = function (e) {
        T(I, e),
        u.running = !0;
        try {
            y.render()
        } catch (e) {
            l = e
        }
        return document.querySelector(".pace") ? (u.trigger("start"), u.go()) : setTimeout(u.start, 50)
    }, "function" == typeof define && define.amd ? define(function () {
        return u
    }) : "object" == typeof exports ? module.exports = u : I.startOnPageLoad && u.start()
}.call(this),


function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = window.Slick || {};
    t = function () {
        function t(t, i) {
            var o, r = this;
            r.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(t),
                appendDots: e(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function (t, n) {
                    return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(n + 1)
                }, dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, r.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {}, transformsEnabled: !1,
                unslicked: !1
            }, e.extend(r, r.initials),
            r.activeBreakpoint = null,
            r.animType = null,
            r.animProp = null,
            r.breakpoints = [],
            r.breakpointSettings = [],
            r.cssTransitions = !1,
            r.focussed = !1,
            r.interrupted = !1,
            r.hidden = "hidden",
            r.paused = !0,
            r.positionProp = null,
            r.respondTo = null,
            r.rowCount = 1,
            r.shouldClick = !0,
            r.$slider = e(t),
            r.$slidesCache = null,
            r.transformType = null,
            r.transitionType = null,
            r.visibilityChange = "visibilitychange",
            r.windowWidth = 0,
            r.windowTimer = null,
            o = e(t).data("slick") || {}, r.options = e.extend({}, r.defaults, i, o),
            r.currentSlide = r.options.initialSlide,
            r.originalSettings = r.options,
            void 0 !== document.mozHidden ? (r.hidden = "mozHidden", r.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (r.hidden = "webkitHidden", r.visibilityChange = "webkitvisibilitychange"),
            r.autoPlay = e.proxy(r.autoPlay, r),
            r.autoPlayClear = e.proxy(r.autoPlayClear, r),
            r.autoPlayIterator = e.proxy(r.autoPlayIterator, r),
            r.changeSlide = e.proxy(r.changeSlide, r),
            r.clickHandler = e.proxy(r.clickHandler, r),
            r.selectHandler = e.proxy(r.selectHandler, r),
            r.setPosition = e.proxy(r.setPosition, r),
            r.swipeHandler = e.proxy(r.swipeHandler, r),
            r.dragHandler = e.proxy(r.dragHandler, r),
            r.keyHandler = e.proxy(r.keyHandler, r),
            r.instanceUid = n++,
            r.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            r.registerBreakpoints(),
            r.init(!0)
        }
        var n = 0;
        return t
    }(),
    t.prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function (t, n, i) {
        var o = this;
        if ("boolean" == typeof n) i = n,
        n = null;
        else if (0 > n || n >= o.slideCount) return !1;
        o.unload(),
        "number" == typeof n ? 0 === n && 0 === o.$slides.length ? e(t).appendTo(o.$slideTrack) : i ? e(t).insertBefore(o.$slides.eq(n)) : e(t).insertAfter(o.$slides.eq(n)) : !0 === i ? e(t).prependTo(o.$slideTrack) : e(t).appendTo(o.$slideTrack),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t)
        }),
        o.$slidesCache = o.$slides,
        o.reinit()
    }, t.prototype.animateHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function (t, n) {
        var i = {},
            o = this;
        o.animateHeight(),
        !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
        !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({
            left: t
        }, o.options.speed, o.options.easing, n) : o.$slideTrack.animate({
            top: t
        }, o.options.speed, o.options.easing, n) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), e({
            animStart: o.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (e) {
                e = Math.ceil(e),
                !1 === o.options.vertical ? (i[o.animType] = "translate(" + e + "px, 0px)", o.$slideTrack.css(i)) : (i[o.animType] = "translate(0px," + e + "px)", o.$slideTrack.css(i))
            }, complete: function () {
                n && n.call()
            }
        })) : (o.applyTransition(), t = Math.ceil(t), !1 === o.options.vertical ? i[o.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[o.animType] = "translate3d(0px," + t + "px, 0px)", o.$slideTrack.css(i), n && setTimeout(function () {
            o.disableTransition(),
            n.call()
        }, o.options.speed))
    }, t.prototype.getNavTarget = function () {
        var t = this,
            n = t.options.asNavFor;
        return n && null !== n && (n = e(n).not(t.$slider)),
        n
    }, t.prototype.asNavFor = function (t) {
        var n = this,
            i = n.getNavTarget();
        null !== i && "object" == typeof i && i.each(function () {
            var n = e(this).slick("getSlick");
            n.unslicked || n.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function (e) {
        var t = this,
            n = {};
        !1 === t.options.fade ? n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
        e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function () {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function () {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function () {
        var t, n, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), n = e("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) n.append(e("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = n.appendTo(i.options.appendDots),
            i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
        }
    }, t.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.$slides.each(function (t, n) {
            e(n).attr("data-slick-index", t).data("originalStyling", e(n).attr("style") || "")
        }),
        t.$slider.addClass("slick-slider"),
        t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
        t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        t.$slideTrack.css("opacity", 0),
        (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1),
        e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
        t.setupInfinite(),
        t.buildArrows(),
        t.buildDots(),
        t.updateDots(),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function () {
        var e, t, n, i, o, r, s, a = this;
        if (i = document.createDocumentFragment(), r = a.$slider.children(), a.options.rows > 1) {
            for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; o > e; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var u = document.createElement("div");
                    for (n = 0; n < a.options.slidesPerRow; n++) {
                        var c = e * s + (t * a.options.slidesPerRow + n);
                        r.get(c) && u.appendChild(r.get(c))
                    }
                    l.appendChild(u)
                }
                i.appendChild(l)
            }
            a.$slider.empty().append(i),
            a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function (t, n) {
        var i, o, r, s = this,
            a = !1,
            l = s.$slider.width(),
            u = window.innerWidth || e(window).width();
        if ("window" === s.respondTo ? r = u : "slider" === s.respondTo ? r = l : "min" === s.respondTo && (r = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
            o = null;
            for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? r < s.breakpoints[i] && (o = s.breakpoints[i]) : r > s.breakpoints[i] && (o = s.breakpoints[i]));
            null !== o ? null !== s.activeBreakpoint ? (o !== s.activeBreakpoint || n) && (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : (s.activeBreakpoint = o, "unslick" === s.breakpointSettings[o] ? s.unslick(o) : (s.options = e.extend({}, s.originalSettings, s.breakpointSettings[o]), !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t)), a = o) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === t && (s.currentSlide = s.options.initialSlide), s.refresh(t), a = o),
            t || !1 === a || s.$slider.trigger("breakpoint", [s, a])
        }
    }, t.prototype.changeSlide = function (t, n) {
        var i, o, r, s = this,
            a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), r = s.slideCount % s.options.slidesToScroll != 0, i = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
        case "previous":
            o = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, n);
            break;
        case "next":
            o = 0 === i ? s.options.slidesToScroll : i,
            s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, n);
            break;
        case "index":
            var l = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(l), !1, n),
            a.children().trigger("focus");
            break;
        default:
            return
        }
    }, t.prototype.checkNavigable = function (e) {
        var t, n;
        if (t = this.getNavigableIndexes(), n = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else for (var i in t) {
            if (e < t[i]) {
                e = n;
                break
            }
            n = t[i]
        }
        return e
    }, t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
        t.$slider.off("focus.slick blur.slick"),
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)),
        t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
        t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
        t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
        t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
        t.$list.off("click.slick", t.clickHandler),
        e(document).off(t.visibilityChange, t.visibility),
        t.cleanUpSlideEvents(),
        !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
        e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
        e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
        e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
        e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
        t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function () {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(), e.removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function (t) {
        var n = this;
        n.autoPlayClear(),
        n.touchObject = {}, n.cleanUpEvents(),
        e(".slick-cloned", n.$slider).detach(),
        n.$dots && n.$dots.remove(),
        n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()),
        n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()),
        n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            e(this).attr("style", e(this).data("originalStyling"))
        }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)),
        n.cleanUpRows(),
        n.$slider.removeClass("slick-slider"),
        n.$slider.removeClass("slick-initialized"),
        n.$slider.removeClass("slick-dotted"),
        n.unslicked = !0,
        t || n.$slider.trigger("destroy", [n])
    }, t.prototype.disableTransition = function (e) {
        var t = this,
            n = {};
        n[t.transitionType] = "",
        !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n)
    }, t.prototype.fadeSlide = function (e, t) {
        var n = this;
        !1 === n.cssTransitions ? (n.$slides.eq(e).css({
            zIndex: n.options.zIndex
        }), n.$slides.eq(e).animate({
            opacity: 1
        }, n.options.speed, n.options.easing, t)) : (n.applyTransition(e), n.$slides.eq(e).css({
            opacity: 1,
            zIndex: n.options.zIndex
        }), t && setTimeout(function () {
            n.disableTransition(e),
            t.call()
        }, n.options.speed))
    }, t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function () {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (n) {
            n.stopImmediatePropagation();
            var i = e(this);
            setTimeout(function () {
                t.options.pauseOnFocus && (t.focussed = i.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, t.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            n = 0,
            i = 0;
        if (!0 === e.options.infinite) for (; t < e.slideCount;)++i,
        t = n + e.options.slidesToScroll,
        n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) i = e.slideCount;
        else if (e.options.asNavFor) for (; t < e.slideCount;)++i,
        t = n + e.options.slidesToScroll,
        n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return i - 1
    }, t.prototype.getLeft = function (e) {
        var t, n, i, o = this,
            r = 0;
        return o.slideOffset = 0,
        n = o.$slides.first().outerHeight(!0),
        !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, r = n * o.options.slidesToShow * -1), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * n * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * n * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * n),
        o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0),
        !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)),
        t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * n * -1 + r,
        !0 === o.options.variableWidth && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === o.options.centerMode && (i = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? i[0] ? -1 * (o.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, t += (o.$list.width() - i.outerWidth()) / 2)),
        t
    }, t.prototype.getOption = t.prototype.slickGetOption = function (e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function () {
        var e, t = this,
            n = 0,
            i = 0,
            o = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (n = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > n;) o.push(n),
        n = i + t.options.slidesToScroll,
        i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return o
    }, t.prototype.getSlick = function () {
        return this
    }, t.prototype.getSlideCount = function () {
        var t, n, i = this;
        return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0,
        !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function (o, r) {
            return r.offsetLeft - n + e(r).outerWidth() / 2 > -1 * i.swipeLeft ? (t = r, !1) : void 0
        }), Math.abs(e(t).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function (t) {
        var n = this;
        e(n.$slider).hasClass("slick-initialized") || (e(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots(), n.checkResponsive(!0), n.focusHandler()),
        t && n.$slider.trigger("init", [n]),
        !0 === n.options.accessibility && n.initADA(),
        n.options.autoplay && (n.paused = !1, n.autoPlay())
    }, t.prototype.initADA = function () {
        var t = this;
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        t.$slideTrack.attr("role", "listbox"),
        t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (n) {
            e(this).attr({
                role: "option",
                "aria-describedby": "slick-slide" + t.instanceUid + n
            })
        }),
        null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function (n) {
            e(this).attr({
                role: "presentation",
                "aria-selected": "false",
                "aria-controls": "navigation" + t.instanceUid + n,
                id: "slick-slide" + t.instanceUid + n
            })
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"),
        t.activateADA()
    }, t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide))
    }, t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide),
        !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
        t.initDotEvents(),
        t.initSlideEvents(),
        t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler),
        t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler),
        t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler),
        t.$list.on("click.slick", t.clickHandler),
        e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
        !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
        e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
        e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
        e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
        e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function () {
        function t(t) {
            e("img[data-lazy]", t).each(function () {
                var t = e(this),
                    n = e(this).attr("data-lazy"),
                    i = document.createElement("img");
                i.onload = function () {
                    t.animate({
                        opacity: 0
                    }, 100, function () {
                        t.attr("src", n).animate({
                            opacity: 1
                        }, 200, function () {
                            t.removeAttr("data-lazy").removeClass("slick-loading")
                        }),
                        s.$slider.trigger("lazyLoaded", [s, t, n])
                    })
                }, i.onerror = function () {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    s.$slider.trigger("lazyLoadError", [s, t, n])
                }, i.src = n
            })
        }
        var n, i, o, r, s = this;
        !0 === s.options.centerMode ? !0 === s.options.infinite ? (o = s.currentSlide + (s.options.slidesToShow / 2 + 1), r = o + s.options.slidesToShow + 2) : (o = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), r = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (o = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, r = Math.ceil(o + s.options.slidesToShow), !0 === s.options.fade && (o > 0 && o--, r <= s.slideCount && r++)),
        n = s.$slider.find(".slick-slide").slice(o, r),
        t(n),
        s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), t(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), t(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), t(i))
    }, t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
        e.$slideTrack.css({
            opacity: 1
        }),
        e.$slider.removeClass("slick-loading"),
        e.initUI(),
        "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function () {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive(),
        e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear(),
        e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function () {
        var e = this;
        e.autoPlay(),
        e.options.autoplay = !0,
        e.paused = !1,
        e.focussed = !1,
        e.interrupted = !1
    }, t.prototype.postSlide = function (e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
    }, t.prototype.prev = t.prototype.slickPrev = function () {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function (e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var n, i, o, r = this,
            s = e("img[data-lazy]", r.$slider);
        s.length ? (n = s.first(), i = n.attr("data-lazy"), o = document.createElement("img"), o.onload = function () {
            n.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"),
            !0 === r.options.adaptiveHeight && r.setPosition(),
            r.$slider.trigger("lazyLoaded", [r, n, i]),
            r.progressiveLazyLoad()
        }, o.onerror = function () {
            3 > t ? setTimeout(function () {
                r.progressiveLazyLoad(t + 1)
            }, 500) : (n.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, n, i]), r.progressiveLazyLoad())
        }, o.src = i) : r.$slider.trigger("allImagesLoaded", [r])
    }, t.prototype.refresh = function (t) {
        var n, i, o = this;
        i = o.slideCount - o.options.slidesToShow,
        !o.options.infinite && o.currentSlide > i && (o.currentSlide = i),
        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
        n = o.currentSlide,
        o.destroy(!0),
        e.extend(o, o.initials, {
            currentSlide: n
        }),
        o.init(),
        t || o.changeSlide({
            data: {
                message: "index",
                index: n
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function () {
        var t, n, i, o = this,
            r = o.options.responsive || null;
        if ("array" === e.type(r) && r.length) {
            o.respondTo = o.options.respondTo || "window";
            for (t in r) if (i = o.breakpoints.length - 1, n = r[t].breakpoint, r.hasOwnProperty(t)) {
                for (; i >= 0;) o.breakpoints[i] && o.breakpoints[i] === n && o.breakpoints.splice(i, 1),
                i--;
                o.breakpoints.push(n),
                o.breakpointSettings[n] = r[t].settings
            }
            o.breakpoints.sort(function (e, t) {
                return o.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
        t.slideCount = t.$slides.length,
        t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
        t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
        t.registerBreakpoints(),
        t.setProps(),
        t.setupInfinite(),
        t.buildArrows(),
        t.updateArrows(),
        t.initArrowEvents(),
        t.buildDots(),
        t.updateDots(),
        t.initDotEvents(),
        t.cleanUpSlideEvents(),
        t.initSlideEvents(),
        t.checkResponsive(!1, !0),
        !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
        t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
        t.setPosition(),
        t.focusHandler(),
        t.paused = !t.options.autoplay,
        t.autoPlay(),
        t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = e(window).width(),
            t.checkResponsive(),
            t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, n) {
        var i = this;
        return "boolean" == typeof e ? (t = e, e = !0 === t ? 0 : i.slideCount - 1) : e = !0 === t ? --e : e,
        !(i.slideCount < 1 || 0 > e || e > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
    }, t.prototype.setCSS = function (e) {
        var t, n, i = this,
            o = {};
        !0 === i.options.rtl && (e = -e),
        t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px",
        o[i.positionProp] = e,
        !1 === i.transformsEnabled ? i.$slideTrack.css(o) : (o = {}, !1 === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")", i.$slideTrack.css(o)) : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)", i.$slideTrack.css(o)))
    }, t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })),
        e.listWidth = e.$list.width(),
        e.listHeight = e.$list.height(),
        !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function () {
        var t, n = this;
        n.$slides.each(function (i, o) {
            t = n.slideWidth * i * -1,
            !0 === n.options.rtl ? e(o).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            }) : e(o).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: n.options.zIndex - 2,
                opacity: 0
            })
        }),
        n.$slides.eq(n.currentSlide).css({
            zIndex: n.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function () {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function () {
        var t, n, i, o, r, s = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (i = arguments[0], a = arguments[1], r = "multiple") : "string" === e.type(arguments[0]) && (i = arguments[0], o = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? r = "responsive" : void 0 !== arguments[1] && (r = "single")), "single" === r) s.options[i] = o;
        else if ("multiple" === r) e.each(i, function (e, t) {
            s.options[e] = t
        });
        else if ("responsive" === r) for (n in o) if ("array" !== e.type(s.options.responsive)) s.options.responsive = [o[n]];
        else {
            for (t = s.options.responsive.length - 1; t >= 0;) s.options.responsive[t].breakpoint === o[n].breakpoint && s.options.responsive.splice(t, 1),
            t--;
            s.options.responsive.push(o[n])
        }
        a && (s.unload(), s.reinit())
    }, t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
        e.setHeight(),
        !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
        e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function () {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left",
        "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
        (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0),
        e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
        void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
        void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
        void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)),
        void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"),
        e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function (e) {
        var t, n, i, o, r = this;
        n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        r.$slides.eq(e).addClass("slick-current"),
        !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (e >= t && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = r.options.slidesToShow + e, n.slice(i - t + 1, i + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= r.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (o = r.slideCount % r.options.slidesToShow, i = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? n.slice(i - (r.options.slidesToShow - o), i + o).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")),
        "ondemand" === r.options.lazyLoad && r.lazyLoad()
    }, t.prototype.setupInfinite = function () {
        var t, n, i, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (n = null, o.slideCount > o.options.slidesToShow)) {
            for (i = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, t = o.slideCount; t > o.slideCount - i; t -= 1) n = t - 1,
            e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (t = 0; i > t; t += 1) n = t,
            e(o.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function (e) {
        var t = this;
        e || t.autoPlay(),
        t.interrupted = e
    }, t.prototype.selectHandler = function (t) {
        var n = this,
            i = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            o = parseInt(i.attr("data-slick-index"));
        return o || (o = 0),
        n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(o), void n.asNavFor(o)) : void n.slideHandler(o)
    }, t.prototype.slideHandler = function (e, t, n) {
        var i, o, r, s, a, l = null,
            u = this;
        return t = t || !1,
        !0 === u.animating && !0 === u.options.waitForAnimate || !0 === u.options.fade && u.currentSlide === e || u.slideCount <= u.options.slidesToShow ? void 0 : (!1 === t && u.asNavFor(e), i = e, l = u.getLeft(i), s = u.getLeft(u.currentSlide), u.currentLeft = null === u.swipeLeft ? s : u.swipeLeft, !1 === u.options.infinite && !1 === u.options.centerMode && (0 > e || e > u.getDotCount() * u.options.slidesToScroll) ? void(!1 === u.options.fade && (i = u.currentSlide, !0 !== n ? u.animateSlide(s, function () {
            u.postSlide(i)
        }) : u.postSlide(i))) : !1 === u.options.infinite && !0 === u.options.centerMode && (0 > e || e > u.slideCount - u.options.slidesToScroll) ? void(!1 === u.options.fade && (i = u.currentSlide, !0 !== n ? u.animateSlide(s, function () {
            u.postSlide(i)
        }) : u.postSlide(i))) : (u.options.autoplay && clearInterval(u.autoPlayTimer), o = 0 > i ? u.slideCount % u.options.slidesToScroll != 0 ? u.slideCount - u.slideCount % u.options.slidesToScroll : u.slideCount + i : i >= u.slideCount ? u.slideCount % u.options.slidesToScroll != 0 ? 0 : i - u.slideCount : i, u.animating = !0, u.$slider.trigger("beforeChange", [u, u.currentSlide, o]), r = u.currentSlide, u.currentSlide = o, u.setSlideClasses(u.currentSlide), u.options.asNavFor && (a = u.getNavTarget(), a = a.slick("getSlick"), a.slideCount <= a.options.slidesToShow && a.setSlideClasses(u.currentSlide)), u.updateDots(), u.updateArrows(), !0 === u.options.fade ? (!0 !== n ? (u.fadeSlideOut(r), u.fadeSlide(o, function () {
            u.postSlide(o)
        })) : u.postSlide(o), void u.animateHeight()) : void(!0 !== n ? u.animateSlide(l, function () {
            u.postSlide(o)
        }) : u.postSlide(o))))
    }, t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
        !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
        e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function () {
        var e, t, n, i, o = this;
        return e = o.touchObject.startX - o.touchObject.curX,
        t = o.touchObject.startY - o.touchObject.curY,
        n = Math.atan2(t, e),
        i = Math.round(180 * n / Math.PI),
        0 > i && (i = 360 - Math.abs(i)),
        45 >= i && i >= 0 ? !1 === o.options.rtl ? "left" : "right" : 360 >= i && i >= 315 ? !1 === o.options.rtl ? "left" : "right" : i >= 135 && 225 >= i ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? i >= 35 && 135 >= i ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function (e) {
        var t, n, i = this;
        if (i.dragging = !1, i.interrupted = !1, i.shouldClick = !(i.touchObject.swipeLength > 10), void 0 === i.touchObject.curX) return !1;
        if (!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (n = i.swipeDirection()) {
            case "left":
            case "down":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount(),
                i.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount(),
                i.currentDirection = 1
            }
            "vertical" != n && (i.slideHandler(t), i.touchObject = {}, i.$slider.trigger("swipe", [i, n]))
        } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {})
    }, t.prototype.swipeHandler = function (e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
        case "start":
            t.swipeStart(e);
            break;
        case "move":
            t.swipeMove(e);
            break;
        case "end":
            t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function (e) {
        var t, n, i, o, r, s = this;
        return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
        !(!s.dragging || r && 1 !== r.length) && (t = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, s.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== e.originalEvent && s.touchObject.swipeLength > 4 && e.preventDefault(), o = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (o = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = t + i * o : s.swipeLeft = t + i * (s.$list.height() / s.listWidth) * o, !0 === s.options.verticalSwiping && (s.swipeLeft = t + i * o), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
    }, t.prototype.swipeStart = function (e) {
        var t, n = this;
        return n.interrupted = !0,
        1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(n.dragging = !0))
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
        t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
        t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]),
        t.destroy()
    }, t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
    }, t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function () {
        var e, n, i = this,
            o = arguments[0],
            r = Array.prototype.slice.call(arguments, 1),
            s = i.length;
        for (e = 0; s > e; e++) if ("object" == typeof o || void 0 === o ? i[e].slick = new t(i[e], o) : n = i[e].slick[o].apply(i[e].slick, r), void 0 !== n) return n;
        return i
    }
}),


function (e) {
    e.fn.directionalHover = function (t) {
        function n(e, t, n, o, r, s, a, l) {
            var h = 0;
            s / 2 >= o - l && (h ^= u),
            n - a >= r / 2 && (h ^= c),
            o - l > s / 2 && (h ^= d),
            r / 2 > n - a && (h ^= p),
            i(h, e, t, n - a, o - l, r / 2, s / 2)
        }
        function i(e, t, n, i, l, u, c) {
            o(e, h) ? r(i, l, u, c) ? a(t, n, 0, 2 * -u) : a(t, n, 2 * -c, 0) : o(e, f) ? s(i, l, u, c) ? a(t, n, 2 * -c, 0) : a(t, n, 0, 2 * u) : o(e, g) ? s(i, l, u, c) ? a(t, n, 0, 2 * -u) : a(t, n, 2 * c, 0) : o(e, m) && (r(i, l, u, c) ? a(t, n, 2 * c, 0) : a(t, n, 0, 2 * u))
        }
        function o(e, t) {
            return (e & t) === t
        }
        function r(e, t, n, i) {
            return 0 > i * e - n * t
        }
        function s(e, t, n, i) {
            return 0 > n * (t - i) + i * e - n * i
        }
        function a(e, t, n, i) {
            "in" === t ? e.animate({
                top: n,
                left: i
            }, 0, function () {
                e.stop().animate({
                    top: 0,
                    left: 0
                }, l.speed, l.easing)
            }) : "out" === t && e.animate({
                top: 0,
                left: 0
            }, 0, function () {
                e.stop().animate({
                    top: n,
                    left: i
                }, l.speed, l.easing)
            })
        }
        var l = e.extend({}, e.fn.directionalHover.defaults, t),
            u = 1,
            c = 2,
            d = 4,
            p = 8,
            h = u | p,
            f = u | c,
            g = d | p,
            m = d | c;
        return this.css({
            position: "relative",
            overflow: "hidden"
        }),
        this.find("." + l.overlay).css({
            position: "absolute",
            top: "-100%"
        }),
        this.each(function () {
            var t = e(this);
            t.hover(function (e) {
                n(t.find("." + l.overlay), "in", e.pageX, e.pageY, t.width(), t.height(), Math.floor(t.offset().left), t.offset().top)
            }, function (e) {
                n(t.find("." + l.overlay), "out", e.pageX, e.pageY, t.width(), t.height(), Math.floor(t.offset().left), t.offset().top)
            })
        })
    }, e.fn.directionalHover.defaults = {
        overlay: "dh-overlay",
        easing: "swing",
        speed: 400
    }
}(jQuery),


function () {
    "use strict";

    function e(i) {
        if (!i) throw new Error("No options passed to Waypoint constructor");
        if (!i.element) throw new Error("No element option passed to Waypoint constructor");
        if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + t,
        this.options = e.Adapter.extend({}, e.defaults, i),
        this.element = this.options.element,
        this.adapter = new e.Adapter(this.element),
        this.callback = i.handler,
        this.axis = this.options.horizontal ? "horizontal" : "vertical",
        this.enabled = this.options.enabled,
        this.triggerPoint = null,
        this.group = e.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }),
        this.context = e.Context.findOrCreateByElement(this.options.context),
        e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        n[this.key] = this,
        t += 1
    }
    var t = 0,
        n = {};
    e.prototype.queueTrigger = function (e) {
        this.group.queueTrigger(this, e)
    }, e.prototype.trigger = function (e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, e.prototype.destroy = function () {
        this.context.remove(this),
        this.group.remove(this),
        delete n[this.key]
    }, e.prototype.disable = function () {
        return this.enabled = !1,
        this
    }, e.prototype.enable = function () {
        return this.context.refresh(),
        this.enabled = !0,
        this
    }, e.prototype.next = function () {
        return this.group.next(this)
    }, e.prototype.previous = function () {
        return this.group.previous(this)
    }, e.invokeAll = function (e) {
        var t = [];
        for (var i in n) t.push(n[i]);
        for (var o = 0, r = t.length; r > o; o++) t[o][e]()
    }, e.destroyAll = function () {
        e.invokeAll("destroy")
    }, e.disableAll = function () {
        e.invokeAll("disable")
    }, e.enableAll = function () {
        e.invokeAll("enable")
    }, e.refreshAll = function () {
        e.Context.refreshAll()
    }, e.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, e.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, e.adapters = [],
    e.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, e.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = e
}(),


function () {
    "use strict";

    function e(e) {
        window.setTimeout(e, 1e3 / 60)
    }
    function t(e) {
        this.element = e,
        this.Adapter = o.Adapter,
        this.adapter = new this.Adapter(e),
        this.key = "waypoint-context-" + n,
        this.didScroll = !1,
        this.didResize = !1,
        this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {}, horizontal: {}
        }, e.waypointContextKey = this.key,
        i[e.waypointContextKey] = this,
        n += 1,
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    var n = 0,
        i = {},
        o = window.Waypoint,
        r = window.onload;
    t.prototype.add = function (e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e,
        this.refresh()
    }, t.prototype.checkEmpty = function () {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical);
        e && t && (this.adapter.off(".waypoints"), delete i[this.key])
    }, t.prototype.createThrottledResizeHandler = function () {
        function e() {
            t.handleResize(),
            t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function () {
            t.didResize || (t.didResize = !0, o.requestAnimationFrame(e))
        })
    }, t.prototype.createThrottledScrollHandler = function () {
        function e() {
            t.handleScroll(),
            t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function () {
            (!t.didScroll || o.isTouch) && (t.didScroll = !0, o.requestAnimationFrame(e))
        })
    }, t.prototype.handleResize = function () {
        o.Context.refreshAll()
    }, t.prototype.handleScroll = function () {
        var e = {},
            t = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                }, vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (var n in t) {
            var i = t[n],
                o = i.newScroll > i.oldScroll,
                r = o ? i.forward : i.backward;
            for (var s in this.waypoints[n]) {
                var a = this.waypoints[n][s],
                    l = i.oldScroll < a.triggerPoint,
                    u = i.newScroll >= a.triggerPoint,
                    c = l && u,
                    d = !l && !u;
                (c || d) && (a.queueTrigger(r), e[a.group.id] = a.group)
            }
        }
        for (var p in e) e[p].flushTriggers();
        this.oldScroll = {
            x: t.horizontal.newScroll,
            y: t.vertical.newScroll
        }
    }, t.prototype.innerHeight = function () {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, t.prototype.remove = function (e) {
        delete this.waypoints[e.axis][e.key],
        this.checkEmpty()
    }, t.prototype.innerWidth = function () {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, t.prototype.destroy = function () {
        var e = [];
        for (var t in this.waypoints) for (var n in this.waypoints[t]) e.push(this.waypoints[t][n]);
        for (var i = 0, o = e.length; o > i; i++) e[i].destroy()
    }, t.prototype.refresh = function () {
        var e, t = this.element == this.element.window,
            n = t ? void 0 : this.adapter.offset(),
            i = {};
        this.handleScroll(),
        e = {
            horizontal: {
                contextOffset: t ? 0 : n.left,
                contextScroll: t ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            }, vertical: {
                contextOffset: t ? 0 : n.top,
                contextScroll: t ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var r in e) {
            var s = e[r];
            for (var a in this.waypoints[r]) {
                var l, u, c, d, p, h = this.waypoints[r][a],
                    f = h.options.offset,
                    g = h.triggerPoint,
                    m = 0,
                    y = null == g;
                h.element !== h.element.window && (m = h.adapter.offset()[s.offsetProp]),
                "function" == typeof f ? f = f.apply(h) : "string" == typeof f && (f = parseFloat(f), h.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))),
                l = s.contextScroll - s.contextOffset,
                h.triggerPoint = m + l - f,
                u = g < s.oldScroll,
                c = h.triggerPoint >= s.oldScroll,
                d = u && c,
                p = !u && !c,
                !y && d ? (h.queueTrigger(s.backward), i[h.group.id] = h.group) : !y && p ? (h.queueTrigger(s.forward), i[h.group.id] = h.group) : y && s.oldScroll >= h.triggerPoint && (h.queueTrigger(s.forward), i[h.group.id] = h.group)
            }
        }
        return o.requestAnimationFrame(function () {
            for (var e in i) i[e].flushTriggers()
        }),
        this
    }, t.findOrCreateByElement = function (e) {
        return t.findByElement(e) || new t(e)
    }, t.refreshAll = function () {
        for (var e in i) i[e].refresh()
    }, t.findByElement = function (e) {
        return i[e.waypointContextKey]
    }, window.onload = function () {
        r && r(),
        t.refreshAll()
    }, o.requestAnimationFrame = function (t) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
    }, o.Context = t
}(),


function () {
    "use strict";

    function e(e, t) {
        return e.triggerPoint - t.triggerPoint
    }
    function t(e, t) {
        return t.triggerPoint - e.triggerPoint
    }
    function n(e) {
        this.name = e.name,
        this.axis = e.axis,
        this.id = this.name + "-" + this.axis,
        this.waypoints = [],
        this.clearTriggerQueues(),
        i[this.axis][this.name] = this
    }
    var i = {
        vertical: {}, horizontal: {}
    },
        o = window.Waypoint;
    n.prototype.add = function (e) {
        this.waypoints.push(e)
    }, n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, n.prototype.flushTriggers = function () {
        for (var n in this.triggerQueues) {
            var i = this.triggerQueues[n],
                o = "up" === n || "left" === n;
            i.sort(o ? t : e);
            for (var r = 0, s = i.length; s > r; r += 1) {
                var a = i[r];
                (a.options.continuous || r === i.length - 1) && a.trigger([n])
            }
        }
        this.clearTriggerQueues()
    }, n.prototype.next = function (t) {
        this.waypoints.sort(e);
        var n = o.Adapter.inArray(t, this.waypoints);
        return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
    }, n.prototype.previous = function (t) {
        this.waypoints.sort(e);
        var n = o.Adapter.inArray(t, this.waypoints);
        return n ? this.waypoints[n - 1] : null
    }, n.prototype.queueTrigger = function (e, t) {
        this.triggerQueues[t].push(e)
    }, n.prototype.remove = function (e) {
        var t = o.Adapter.inArray(e, this.waypoints);
        t > -1 && this.waypoints.splice(t, 1)
    }, n.prototype.first = function () {
        return this.waypoints[0]
    }, n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, n.findOrCreate = function (e) {
        return i[e.axis][e.name] || new n(e)
    }, o.Group = n
}(),


function () {
    "use strict";

    function e(e) {
        this.$element = t(e)
    }
    var t = window.jQuery,
        n = window.Waypoint;
    t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (t, n) {
        e.prototype[n] = function () {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[n].apply(this.$element, e)
        }
    }),
    t.each(["extend", "inArray", "isEmptyObject"], function (n, i) {
        e[i] = t[i]
    }),
    n.adapters.push({
        name: "jquery",
        Adapter: e
    }),
    n.Adapter = e
}(),


function () {
    "use strict";

    function e(e) {
        return function () {
            var n = [],
                i = arguments[0];
            return e.isFunction(arguments[0]) && (i = e.extend({}, arguments[1]), i.handler = arguments[0]),
            this.each(function () {
                var o = e.extend({}, i, {
                    element: this
                });
                "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]),
                n.push(new t(o))
            }),
            n
        }
    }
    var t = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
    window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
$(window).on("load", function () {
    $(document).scrollzipInit(),
    $(document).rollerInit()
}),
$(window).on("load scroll resize", function () {
    $(".numscroller").scrollzip({
        showFunction: function () {
            numberRoller($(this).attr("data-slno"))
        }, wholeVisible: !1
    })
}),
$.fn.scrollzipInit = function () {
    $("body").prepend("<div style='position:fixed;top:0;left:0;width:0;height:0;' id='scrollzipPoint'></div>")
}, $.fn.rollerInit = function () {
    var e = 0;
    $(".numscroller").each(function () {
        e++,
        $(this).attr("data-slno", e),
        $(this).addClass("roller-title-number-" + e)
    })
}, $.fn.scrollzip = function (e) {
    var t = $.extend({
        showFunction: null,
        hideFunction: null,
        showShift: 0,
        wholeVisible: !1,
        hideShift: 0
    }, e);
    return this.each(function (e, n) {
        if ($("#scrollzipPoint").length) return $(this).addClass("scrollzip"),
        !$.isFunction(t.showFunction) || $(this).hasClass("isShown") || $(window).outerHeight() + $("#scrollzipPoint").offset().top - t.showShift <= $(this).offset().top + (t.wholeVisible ? $(this).outerHeight() : 0) || $("#scrollzipPoint").offset().top + (t.wholeVisible ? $(this).outerHeight() : 0) >= $(this).outerHeight() + $(this).offset().top - t.showShift || ($(this).addClass("isShown"), t.showFunction.call(this)),
        $.isFunction(t.hideFunction) && $(this).hasClass("isShown") && ($(window).outerHeight() + $("#scrollzipPoint").offset().top - t.hideShift < $(this).offset().top + (t.wholeVisible ? $(this).outerHeight() : 0) || $("#scrollzipPoint").offset().top + (t.wholeVisible ? $(this).outerHeight() : 0) > $(this).outerHeight() + $(this).offset().top - t.hideShift) && ($(this).removeClass("isShown"), t.hideFunction.call(this)),
        this
    })
}, function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (e) {
    var t, n, i, o, r, s, a = "Close",
        l = "BeforeClose",
        u = "MarkupParse",
        c = "Open",
        d = "Change",
        p = "mfp",
        h = "." + p,
        f = "mfp-ready",
        g = "mfp-removing",
        m = "mfp-prevent-close",
        y = function () {},
        v = !! window.jQuery,
        b = e(window),
        w = function (e, n) {
            t.ev.on(p + e + h, n)
        },
        T = function (t, n, i, o) {
            var r = document.createElement("div");
            return r.className = "mfp-" + t,
            i && (r.innerHTML = i),
            o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)),
            r
        },
        x = function (n, i) {
            t.ev.triggerHandler(p + n, i),
            t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
        },
        P = function (n) {
            return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n),
            t.currTemplate.closeBtn
        },
        S = function () {
            e.magnificPopup.instance || (t = new y, t.init(), e.magnificPopup.instance = t)
        },
        C = function () {
            var e = document.createElement("p").style,
                t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;) if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    y.prototype = {
        constructor: y,
        init: function () {
            var n = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener,
            t.isAndroid = /android/gi.test(n),
            t.isIOS = /iphone|ipad|ipod/gi.test(n),
            t.supportsTransition = C(),
            t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),
            i = e(document),
            t.popupsCache = {}
        }, open: function (n) {
            var o;
            if (!1 === n.isObj) {
                t.items = n.items.toArray(),
                t.index = 0;
                var s, a = n.items;
                for (o = 0; o < a.length; o++) if (s = a[o], s.parsed && (s = s.el[0]), s === n.el[0]) {
                    t.index = o;
                    break
                }
            } else t.items = e.isArray(n.items) ? n.items : [n.items],
            t.index = n.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [],
            r = "",
            n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i,
            n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n),
            t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos,
            t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1),
            t.bgOverlay || (t.bgOverlay = T("bg").on("click" + h, function () {
                t.close()
            }), t.wrap = T("wrap").attr("tabindex", -1).on("click" + h, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = T("container", t.wrap)),
            t.contentContainer = T("content"),
            t.st.preloader && (t.preloader = T("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (o = 0; o < l.length; o++) {
                var d = l[o];
                d = d.charAt(0).toUpperCase() + d.slice(1),
                t["init" + d].call(t)
            }
            x("BeforeOpen"),
            t.st.showCloseBtn && (t.st.closeBtnInside ? (w(u, function (e, t, n, i) {
                n.close_replaceWith = P(i.type)
            }), r += " mfp-close-btn-in") : t.wrap.append(P())),
            t.st.alignTop && (r += " mfp-align-top"),
            t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: b.scrollTop(),
                position: "absolute"
            }),
            (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: i.height(),
                position: "absolute"
            }),
            t.st.enableEscapeKey && i.on("keyup" + h, function (e) {
                27 === e.keyCode && t.close()
            }),
            b.on("resize" + h, function () {
                t.updateSize()
            }),
            t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
            r && t.wrap.addClass(r);
            var p = t.wH = b.height(),
                g = {};
            if (t.fixedContentPos && t._hasScrollBar(p)) {
                var m = t._getScrollbarSize();
                m && (g.marginRight = m)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : g.overflow = "hidden");
            var y = t.st.mainClass;
            return t.isIE7 && (y += " mfp-ie7"),
            y && t._addClassToMFP(y),
            t.updateItemHTML(),
            x("BuildControls"),
            e("html").css(g),
            t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
            t._lastFocusedEl = document.activeElement,
            setTimeout(function () {
                t.content ? (t._addClassToMFP(f), t._setFocus()) : t.bgOverlay.addClass(f),
                i.on("focusin" + h, t._onFocusIn)
            }, 16),
            t.isOpen = !0,
            t.updateSize(p),
            x(c),
            n
        }, close: function () {
            t.isOpen && (x(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(g), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        }, _close: function () {
            x(a);
            var n = g + " " + f + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
                var o = {
                    marginRight: ""
                };
                t.isIE7 ? e("body, html").css("overflow", "") : o.overflow = "",
                e("html").css(o)
            }
            i.off("keyup" + h + " focusin" + h),
            t.ev.off(h),
            t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
            t.bgOverlay.attr("class", "mfp-bg"),
            t.container.attr("class", "mfp-container"),
            !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(),
            t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
            t.currItem = null,
            t.content = null,
            t.currTemplate = null,
            t.prevHeight = 0,
            x("AfterClose")
        }, updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i),
                t.wH = i
            } else t.wH = e || b.height();
            t.fixedContentPos || t.wrap.css("height", t.wH),
            x("Resize")
        }, updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(),
            t.content && t.content.detach(),
            n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if (x("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
                var r = !! t.st[i] && t.st[i].markup;
                x("FirstMarkupParse", r),
                t.currTemplate[i] = !r || e(r)
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var s = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(s, i),
            n.preloaded = !0,
            x(d, n),
            o = n.type,
            t.container.prepend(t.contentContainer),
            x("AfterChange")
        }, appendContent: function (e, n) {
            t.content = e,
            e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(P()) : t.content = e : t.content = "",
            x("BeforeAppend"),
            t.container.addClass("mfp-" + n + "-holder"),
            t.contentContainer.append(t.content)
        }, parseEl: function (n) {
            var i, o = t.items[n];
            if (o.tagName ? o = {
                el: e(o)
            } : (i = o.type, o = {
                data: o,
                src: o.src
            }), o.el) {
                for (var r = t.types, s = 0; s < r.length; s++) if (o.el.hasClass("mfp-" + r[s])) {
                    i = r[s];
                    break
                }
                o.src = o.el.attr("data-mfp-src"),
                o.src || (o.src = o.el.attr("href"))
            }
            return o.type = i || t.st.type || "inline",
            o.index = n,
            o.parsed = !0,
            t.items[n] = o,
            x("ElementParse", o),
            t.items[n]
        }, addGroup: function (e, n) {
            var i = function (i) {
                i.mfpEl = this,
                t._openClick(i, e, n)
            };
            n || (n = {});
            var o = "click.magnificPopup";
            n.mainEl = e,
            n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
        }, _openClick: function (n, i, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (r) if (e.isFunction(r)) {
                    if (!r.call(t)) return !0
                } else if (b.width() < r) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()),
                o.el = e(n.mfpEl),
                o.delegate && (o.items = i.find(o.delegate)),
                t.open(o)
            }
        }, updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n),
                i || "loading" !== e || (i = t.st.tLoading);
                var o = {
                    status: e,
                    text: i
                };
                x("UpdateStatus", o),
                e = o.status,
                i = o.text,
                t.preloader.html(i),
                t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }),
                t.container.addClass("mfp-s-" + e),
                n = e
            }
        }, _checkIfClose: function (n) {
            if (!e(n).hasClass(m)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0
                } else if (o && e.contains(document, n)) return !0;
                return !1
            }
        }, _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e),
            t.wrap.addClass(e)
        }, _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e),
            t.wrap.removeClass(e)
        }, _hasScrollBar: function (e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || b.height())
        }, _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        }, _onFocusIn: function (n) {
            return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
        }, _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)),
            x(u, [t, n, i]),
            e.each(n, function (n, i) {
                if (void 0 === i || !1 === i) return !0;
                if (o = n.split("_"), o.length > 1) {
                    var r = t.find(h + "-" + o[0]);
                    if (r.length > 0) {
                        var s = o[1];
                        "replaceWith" === s ? r[0] !== i[0] && r.replaceWith(i) : "img" === s ? r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class"))) : r.attr(o[1], i)
                    }
                } else t.find(h + "-" + n).html(i)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",
                document.body.appendChild(e),
                t.scrollbarSize = e.offsetWidth - e.clientWidth,
                document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: y.prototype,
        modules: [],
        open: function (t, n) {
            return S(),
            t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0,
            t.index = n || 0,
            this.instance.open(t)
        }, close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        }, registerModule: function (t, n) {
            n.options && (e.magnificPopup.defaults[t] = n.options),
            e.extend(this.proto, n.proto),
            this.modules.push(t)
        }, defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function (n) {
        S();
        var i = e(this);
        if ("string" == typeof n) if ("open" === n) {
            var o, r = v ? i.data("magnificPopup") : i[0].magnificPopup,
                s = parseInt(arguments[1], 10) || 0;
            r.items ? o = r.items[s] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(s)),
            t._openClick({
                mfpEl: o
            }, i, r)
        } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
        else n = e.extend(!0, {}, n),
        v ? i.data("magnificPopup", n) : i[0].magnificPopup = n,
        t.addGroup(i, n);
        return i
    };
    var k, j, _, I = "inline",
        Y = function () {
            _ && (j.after(_.addClass(k)).detach(), _ = null)
        };
    e.magnificPopup.registerModule(I, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        }, proto: {
            initInline: function () {
                t.types.push(I),
                w(a + "." + I, function () {
                    Y()
                })
            }, getInline: function (n, i) {
                if (Y(), n.src) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var s = r[0].parentNode;
                        s && s.tagName && (j || (k = o.hiddenClass, j = T(k), k = "mfp-" + k), _ = r.after(j).detach().removeClass(k)),
                        t.updateStatus("ready")
                    } else t.updateStatus("error", o.tNotFound),
                    r = e("<div>");
                    return n.inlineElement = r,
                    r
                }
                return t.updateStatus("ready"),
                t._parseMarkup(i, {}, n),
                i
            }
        }
    });
    var O, E = "ajax",
        A = function () {
            O && e(document.body).removeClass(O)
        },
        $ = function () {
            A(),
            t.req && t.req.abort()
        };
    e.magnificPopup.registerModule(E, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                t.types.push(E),
                O = t.st.ajax.cursor,
                w(a + "." + E, $),
                w("BeforeChange." + E, $)
            }, getAjax: function (n) {
                O && e(document.body).addClass(O),
                t.updateStatus("loading");
                var i = e.extend({
                    url: n.src,
                    success: function (i, o, r) {
                        var s = {
                            data: i,
                            xhr: r
                        };
                        x("ParseAjax", s),
                        t.appendContent(e(s.data), E),
                        n.finished = !0,
                        A(),
                        t._setFocus(),
                        setTimeout(function () {
                            t.wrap.addClass(f)
                        }, 16),
                        t.updateStatus("ready"),
                        x("AjaxContentAdded")
                    }, error: function () {
                        A(),
                        n.finished = n.loadError = !0,
                        t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(i),
                ""
            }
        }
    });
    var L, Q = function (n) {
        if (n.data && void 0 !== n.data.title) return n.data.title;
        var i = t.st.image.titleSrc;
        if (i) {
            if (e.isFunction(i)) return i.call(t, n);
            if (n.el) return n.el.attr(i) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"),
                w(c + i, function () {
                    "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor)
                }),
                w(a + i, function () {
                    n.cursor && e(document.body).removeClass(n.cursor),
                    b.off("resize" + h)
                }),
                w("Resize" + i, t.resizeImage),
                t.isLowIE && w("AfterChange", t.resizeImage)
            }, resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)),
                    e.img.css("max-height", t.wH - n)
                }
            }, _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, L && clearInterval(L), e.isCheckingImgSize = !1, x("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            }, findImageSize: function (e) {
                var n = 0,
                    i = e.img[0],
                    o = function (r) {
                        L && clearInterval(L),
                        L = setInterval(function () {
                            return i.naturalWidth > 0 ? void t._onImageHasSize(e) : (n > 200 && clearInterval(L), n++, void(3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, r)
                    };
                o(1)
            }, getImage: function (n, i) {
                var o = 0,
                    r = function () {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, x("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : s()))
                    },
                    s = function () {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", a.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    },
                    a = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img",
                    n.el && n.el.find("img").length && (u.alt = n.el.find("img").attr("alt")),
                    n.img = e(u).on("load.mfploader", r).on("error.mfploader", s),
                    u.src = n.src,
                    l.is("img") && (n.img = n.img.clone()),
                    u = n.img[0],
                    u.naturalWidth > 0 ? n.hasSize = !0 : u.width || (n.hasSize = !1)
                }
                return t._parseMarkup(i, {
                    title: Q(n),
                    img_replaceWith: n.img
                }, n),
                t.resizeImage(),
                n.hasSize ? (L && clearInterval(L), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", a.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
            }
        }
    });
    var D, M = function () {
        return void 0 === D && (D = void 0 !== document.createElement("p").style.MozTransform),
        D
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        }, proto: {
            initZoom: function () {
                var e, n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o, r, s = n.duration,
                        u = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i,
                            t.css(o),
                            t
                        },
                        c = function () {
                            t.content.css("visibility", "visible")
                        };
                    w("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom())) return void c();
                            r = u(e),
                            r.css(t._getOffset()),
                            t.wrap.append(r),
                            o = setTimeout(function () {
                                r.css(t._getOffset(!0)),
                                o = setTimeout(function () {
                                    c(),
                                    setTimeout(function () {
                                        r.remove(),
                                        e = r = null,
                                        x("ZoomAnimationEnded")
                                    }, 16)
                                }, s)
                            }, 16)
                        }
                    }),
                    w(l + i, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(o), t.st.removalDelay = s, !e) {
                                if (!(e = t._getItemToZoom())) return;
                                r = u(e)
                            }
                            r.css(t._getOffset(!0)),
                            t.wrap.append(r),
                            t.content.css("visibility", "hidden"),
                            setTimeout(function () {
                                r.css(t._getOffset())
                            }, 16)
                        }
                    }),
                    w(a + i, function () {
                        t._allowZoom() && (c(), r && r.remove(), e = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === t.currItem.type
            }, _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img
            }, _getOffset: function (n) {
                var i;
                i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var o = i.offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    s = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var a = {
                    width: i.width(),
                    height: (v ? i.innerHeight() : i[0].offsetHeight) - s - r
                };
                return M() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top),
                a
            }
        }
    });
    var z = "iframe",
        F = "//about:blank",
        H = function (e) {
            if (t.currTemplate[z]) {
                var n = t.currTemplate[z].find("iframe");
                n.length && (e || (n[0].src = F), t.isIE8 && n.css("display", e ? "block" : "none"))
            }
        };
    e.magnificPopup.registerModule(z, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                }, vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                }, gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        }, proto: {
            initIframe: function () {
                t.types.push(z),
                w("BeforeChange", function (e, t, n) {
                    t !== n && (t === z ? H() : n === z && H(!0))
                }),
                w(a + "." + z, function () {
                    H()
                })
            }, getIframe: function (n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var s = {};
                return r.srcAction && (s[r.srcAction] = o),
                t._parseMarkup(i, s, n),
                t.updateStatus("ready"),
                i
            }
        }
    });
    var N = function (e) {
        var n = t.items.length;
        return e > n - 1 ? e - n : 0 > e ? n + e : e
    },
        B = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    o = ".mfp-gallery";
                return t.direction = !0,
                !(!n || !n.enabled) && (r += " mfp-gallery", w(c + o, function () {
                    n.navigateByImgClick && t.wrap.on("click" + o, ".mfp-img", function () {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }),
                    i.on("keydown" + o, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), w("UpdateStatus" + o, function (e, n) {
                    n.text && (n.text = B(n.text, t.currItem.index, t.items.length))
                }), w(u + o, function (e, i, o, r) {
                    var s = t.items.length;
                    o.counter = s > 1 ? B(n.tCounter, r.index, s) : ""
                }), w("BuildControls" + o, function () {
                    if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                        var i = n.arrowMarkup,
                            o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(m),
                            r = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(m);
                        o.click(function () {
                            t.prev()
                        }),
                        r.click(function () {
                            t.next()
                        }),
                        t.container.append(o.add(r))
                    }
                }), w(d + o, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout),
                    t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(),
                        t._preloadTimeout = null
                    }, 16)
                }), void w(a + o, function () {
                    i.off(o),
                    t.wrap.off("click" + o),
                    t.arrowRight = t.arrowLeft = null
                }))
            }, next: function () {
                t.direction = !0,
                t.index = N(t.index + 1),
                t.updateItemHTML()
            }, prev: function () {
                t.direction = !1,
                t.index = N(t.index - 1),
                t.updateItemHTML()
            }, goTo: function (e) {
                t.direction = e >= t.index,
                t.index = e,
                t.updateItemHTML()
            }, preloadNearbyImages: function () {
                var e, n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e)
            }, _preloadItem: function (n) {
                if (n = N(n), !t.items[n].preloaded) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)),
                    x("LazyLoad", i),
                    "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        i.hasSize = !0
                    }).on("error.mfploader", function () {
                        i.hasSize = !0,
                        i.loadError = !0,
                        x("LazyLoadError", i)
                    }).attr("src", i.src)),
                    i.preloaded = !0
                }
            }
        }
    });
    var q = "retina";
    e.magnificPopup.registerModule(q, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    (n = isNaN(n) ? n() : n) > 1 && (w("ImageHasSize." + q, function (e, t) {
                        t.img.css({
                            "max-width": t.img[0].naturalWidth / n,
                            width: "100%"
                        })
                    }), w("ElementParse." + q, function (t, i) {
                        i.src = e.replaceSrc(i, n)
                    }))
                }
            }
        }
    }),
    S()
}),


function (e) {
    e.fn.animated = function (t) {
        e(this).each(function () {
            var n = e(this);
            n.css("opacity", "0").addClass("animated").waypoint(function (e) {
                "down" === e && n.addClass(t).css("opacity", "1")
            }, {
                offset: "90%"
            })
        })
    }
}(jQuery),


function (e) {
    "use strict";
    var t = e(window),
        n = t.height();
    t.resize(function () {
        n = t.height()
    }),
    e.fn.parallax = function (i, o, r) {
        function s() {
            var r = t.scrollTop();
            u.each(function () {
                var t = e(this),
                    s = t.offset().top,
                    c = a(t);
                r > s + c || s > r + n || u.css("backgroundPosition", i + " " + Math.round((l - r) * o) + "px")
            })
        }
        var a, l, u = e(this);
        u.each(function () {
            l = u.offset().top
        }),
        a = r ?
        function (e) {
            return e.outerHeight(!0)
        } : function (e) {
            return e.height()
        }, (arguments.length < 1 || null === i) && (i = "50%"),
        (arguments.length < 2 || null === o) && (o = .1),
        (arguments.length < 3 || null === r) && (r = !0),
        t.bind("scroll", s).resize(s),
        s()
    }
}(jQuery),


function () {
    function e() {}
    function t(e, t) {
        for (var n = e.length; n--;) if (e[n].listener === t) return n;
        return -1
    }
    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        o = this,
        r = o.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n),
        t || n
    }, i.addListener = function (e, n) {
        var i, o = this.getListenersAsObject(e),
            r = "object" == typeof n;
        for (i in o) o.hasOwnProperty(i) && -1 === t(o[i], n) && o[i].push(r ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"),
    i.addOnceListener = function (e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"),
    i.defineEvent = function (e) {
        return this.getListeners(e),
        this
    }, i.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, o, r = this.getListenersAsObject(e);
        for (o in r) r.hasOwnProperty(o) && -1 !== (i = t(r[o], n)) && r[o].splice(i, 1);
        return this
    }, i.off = n("removeListener"),
    i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, o, r = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp) for (i = n.length; i--;) r.call(this, t, n[i]);
        else for (i in t) t.hasOwnProperty(i) && (o = t[i]) && ("function" == typeof o ? r.call(this, i, o) : s.call(this, i, o));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n) for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"),
    i.emitEvent = function (e, t) {
        var n, i, o, r = this.getListenersAsObject(e);
        for (o in r) if (r.hasOwnProperty(o)) for (i = r[o].length; i--;) n = r[o][i],
        !0 === n.once && this.removeListener(e, n.listener),
        n.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"),
    i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e,
        this
    }, i._getOnceReturnValue = function () {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return o.EventEmitter = r,
        e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}.call(this),


function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t,
        n
    }
    var n = document.documentElement,
        i = function () {};
    n.addEventListener ? i = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function (e, n, i) {
        e[n + i] = i.handleEvent ?
        function () {
            var n = t(e);
            i.handleEvent.call(i, n)
        } : function () {
            var n = t(e);
            i.call(e, n)
        }, e.attachEvent("on" + n, e[n + i])
    });
    var o = function () {};
    n.removeEventListener ? o = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (o = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    });
    var r = {
        bind: i,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : e.eventie = r
}(this),


function (e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
    function i(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }
    function o(e) {
        return "[object Array]" === p.call(e)
    }
    function r(e) {
        var t = [];
        if (o(e)) t = e;
        else if ("number" == typeof e.length) for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
        else t.push(e);
        return t
    }
    function s(e, t, n) {
        if (!(this instanceof s)) return new s(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)),
        this.elements = r(e),
        this.options = i({}, this.options),
        "function" == typeof t ? n = t : i(this.options, t),
        n && this.on("always", n),
        this.getImages(),
        u && (this.jqDeferred = new u.Deferred);
        var o = this;
        setTimeout(function () {
            o.check()
        })
    }
    function a(e) {
        this.img = e
    }
    function l(e) {
        this.src = e,
        h[e] = this
    }
    var u = e.jQuery,
        c = e.console,
        d = void 0 !== c,
        p = Object.prototype.toString;
    s.prototype = new t,
    s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i)) for (var o = n.querySelectorAll("img"), r = 0, s = o.length; s > r; r++) {
                var a = o[r];
                this.addImage(a)
            }
        }
    }, s.prototype.addImage = function (e) {
        var t = new a(e);
        this.images.push(t)
    }, s.prototype.check = function () {
        function e(e, o) {
            return t.options.debug && d && c.log("confirm", e, o),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
        }
        var t = this,
            n = 0,
            i = this.images.length;
        if (this.hasAnyBroken = !1, !i) return void this.complete();
        for (var o = 0; i > o; o++) {
            var r = this.images[o];
            r.on("confirm", e),
            r.check()
        }
    }, s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
            t.emit("progress", t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }, s.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }, u && (u.fn.imagesLoaded = function (e, t) {
        return new s(this, e, t).jqDeferred.promise(u(this))
    }),
    a.prototype = new t,
    a.prototype.check = function () {
        var e = h[this.img.src] || new l(this.img.src);
        if (e.isConfirmed) return void this.confirm(e.isLoaded, "cached was confirmed");
        if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        var t = this;
        e.on("confirm", function (e, n) {
            return t.confirm(e.isLoaded, n),
            !0
        }),
        e.check()
    }, a.prototype.confirm = function (e, t) {
        this.isLoaded = e,
        this.emit("confirm", this, t)
    };
    var h = {};
    return l.prototype = new t,
    l.prototype.check = function () {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this),
            n.bind(e, "error", this),
            e.src = this.src,
            this.isChecked = !0
        }
    }, l.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, l.prototype.onload = function (e) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(e)
    }, l.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(e)
    }, l.prototype.confirm = function (e, t) {
        this.isConfirmed = !0,
        this.isLoaded = e,
        this.emit("confirm", this, t)
    }, l.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this),
        n.unbind(e.target, "error", this)
    }, s
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function (e, t) {
    "use strict";

    function n(n, r, a) {
        function l(e, t, i) {
            var o, r = "$()." + n + '("' + t + '")';
            return e.each(function (e, l) {
                var u = a.data(l, n);
                if (!u) return void s(n + " not initialized. Cannot call methods, i.e. " + r);
                var c = u[t];
                if (!c || "_" == t.charAt(0)) return void s(r + " is not a valid method");
                var d = c.apply(u, i);
                o = void 0 === o ? d : o
            }),
            void 0 !== o ? o : e
        }
        function u(e, t) {
            e.each(function (e, i) {
                var o = a.data(i, n);
                o ? (o.option(t), o._init()) : (o = new r(i, t), a.data(i, n, o))
            })
        }(a = a || t || e.jQuery) && (r.prototype.option || (r.prototype.option = function (e) {
            a.isPlainObject(e) && (this.options = a.extend(!0, this.options, e))
        }), a.fn[n] = function (e) {
            if ("string" == typeof e) {
                return l(this, e, o.call(arguments, 1))
            }
            return u(this, e),
            this
        }, i(a))
    }
    function i(e) {
        !e || e && e.bridget || (e.bridget = n)
    }
    var o = Array.prototype.slice,
        r = e.console,
        s = void 0 === r ?
        function () {} : function (e) {
            r.error(e)
        };
    return i(t || e.jQuery),
    n
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {}
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var n = this._events = this._events || {},
                i = n[e] = n[e] || [];
            return -1 == i.indexOf(t) && i.push(t),
            this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var n = this._onceEvents = this._onceEvents || {};
            return (n[e] = n[e] || {})[t] = !0,
            this
        }
    }, t.off = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = n.indexOf(t);
            return -1 != i && n.splice(i, 1),
            this
        }
    }, t.emitEvent = function (e, t) {
        var n = this._events && this._events[e];
        if (n && n.length) {
            var i = 0,
                o = n[i];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                var s = r && r[o];
                s && (this.off(e, o), delete r[o]),
                o.apply(this, t),
                i += s ? 0 : 1,
                o = n[i]
            }
            return this
        }
    }, e
}),


function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function () {
    "use strict";

    function e(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }
    function t() {}
    function n() {
        for (var e = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, t = 0; t < u; t++) {
            e[l[t]] = 0
        }
        return e
    }
    function i(e) {
        var t = getComputedStyle(e);
        return t || a("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),
        t
    }
    function o() {
        if (!c) {
            c = !0;
            var t = document.createElement("div");
            t.style.width = "200px",
            t.style.padding = "1px 2px 3px 4px",
            t.style.borderStyle = "solid",
            t.style.borderWidth = "1px 2px 3px 4px",
            t.style.boxSizing = "border-box";
            var n = document.body || document.documentElement;
            n.appendChild(t);
            var o = i(t);
            r.isBoxSizeOuter = s = 200 == e(o.width),
            n.removeChild(t)
        }
    }
    function r(t) {
        if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var r = i(t);
            if ("none" == r.display) return n();
            var a = {};
            a.width = t.offsetWidth,
            a.height = t.offsetHeight;
            for (var c = a.isBorderBox = "border-box" == r.boxSizing, d = 0; d < u; d++) {
                var p = l[d],
                    h = r[p],
                    f = parseFloat(h);
                a[p] = isNaN(f) ? 0 : f
            }
            var g = a.paddingLeft + a.paddingRight,
                m = a.paddingTop + a.paddingBottom,
                y = a.marginLeft + a.marginRight,
                v = a.marginTop + a.marginBottom,
                b = a.borderLeftWidth + a.borderRightWidth,
                w = a.borderTopWidth + a.borderBottomWidth,
                T = c && s,
                x = e(r.width);
            !1 !== x && (a.width = x + (T ? 0 : g + b));
            var P = e(r.height);
            return !1 !== P && (a.height = P + (T ? 0 : m + w)),
            a.innerWidth = a.width - (g + b),
            a.innerHeight = a.height - (m + w),
            a.outerWidth = a.width + y,
            a.outerHeight = a.height + v,
            a
        }
    }
    var s, a = "undefined" == typeof console ? t : function (e) {
        console.error(e)
    },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = l.length,
        c = !1;
    return r
}),


function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
    "use strict";
    var e = function () {
        var e = Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], n = 0; n < t.length; n++) {
            var i = t[n],
                o = i + "MatchesSelector";
            if (e[o]) return o
        }
    }();
    return function (t, n) {
        return t[e](n)
    }
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (n) {
        return t(e, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function (e, t) {
    var n = {};
    n.extend = function (e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }, n.modulo = function (e, t) {
        return (e % t + t) % t
    }, n.makeArray = function (e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if (e && "number" == typeof e.length) for (var n = 0; n < e.length; n++) t.push(e[n]);
        else t.push(e);
        return t
    }, n.removeFrom = function (e, t) {
        var n = e.indexOf(t); - 1 != n && e.splice(n, 1)
    }, n.getParent = function (e, n) {
        for (; e != document.body;) if (e = e.parentNode, t(e, n)) return e
    }, n.getQueryElement = function (e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, n.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, n.filterFindElements = function (e, i) {
        e = n.makeArray(e);
        var o = [];
        return e.forEach(function (e) {
            if (e instanceof HTMLElement) {
                if (!i) return void o.push(e);
                t(e, i) && o.push(e);
                for (var n = e.querySelectorAll(i), r = 0; r < n.length; r++) o.push(n[r])
            }
        }),
        o
    }, n.debounceMethod = function (e, t, n) {
        var i = e.prototype[t],
            o = t + "Timeout";
        e.prototype[t] = function () {
            var e = this[o];
            e && clearTimeout(e);
            var t = arguments,
                r = this;
            this[o] = setTimeout(function () {
                i.apply(r, t),
                delete r[o]
            }, n || 100)
        }
    }, n.docReady = function (e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, n.toDashed = function (e) {
        return e.replace(/(.)([A-Z])/g, function (e, t, n) {
            return t + "-" + n
        }).toLowerCase()
    };
    var i = e.console;
    return n.htmlInit = function (t, o) {
        n.docReady(function () {
            var r = n.toDashed(o),
                s = "data-" + r,
                a = document.querySelectorAll("[" + s + "]"),
                l = document.querySelectorAll(".js-" + r),
                u = n.makeArray(a).concat(n.makeArray(l)),
                c = s + "-options",
                d = e.jQuery;
            u.forEach(function (e) {
                var n, r = e.getAttribute(s) || e.getAttribute(c);
                try {
                    n = r && JSON.parse(r)
                } catch (t) {
                    return void(i && i.error("Error parsing " + s + " on " + e.className + ": " + t))
                }
                var a = new t(e, n);
                d && d.data(e, o, a)
            })
        })
    }, n
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function (e, t) {
    "use strict";

    function n(e) {
        for (var t in e) return !1;
        return null,
        !0
    }
    function i(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    function o(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase()
        })
    }
    var r = document.documentElement.style,
        s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
        a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
        l = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        }[s],
        u = {
            transform: a,
            transition: s,
            transitionDuration: s + "Duration",
            transitionProperty: s + "Property",
            transitionDelay: s + "Delay"
        },
        c = i.prototype = Object.create(e.prototype);
    c.constructor = i,
    c._create = function () {
        this._transn = {
            ingProperties: {}, clean: {}, onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, c.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.getSize = function () {
        this.size = t(this.element)
    }, c.css = function (e) {
        var t = this.element.style;
        for (var n in e) {
            t[u[n] || n] = e[n]
        }
    }, c.getPosition = function () {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            i = e[t ? "left" : "right"],
            o = e[n ? "top" : "bottom"],
            r = this.layout.size,
            s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * r.width : parseInt(i, 10),
            a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);
        s = isNaN(s) ? 0 : s,
        a = isNaN(a) ? 0 : a,
        s -= t ? r.paddingLeft : r.paddingRight,
        a -= n ? r.paddingTop : r.paddingBottom,
        this.position.x = s,
        this.position.y = a
    }, c.layoutPosition = function () {
        var e = this.layout.size,
            t = {},
            n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            o = n ? "paddingLeft" : "paddingRight",
            r = n ? "left" : "right",
            s = n ? "right" : "left",
            a = this.position.x + e[o];
        t[r] = this.getXValue(a),
        t[s] = "";
        var l = i ? "paddingTop" : "paddingBottom",
            u = i ? "top" : "bottom",
            c = i ? "bottom" : "top",
            d = this.position.y + e[l];
        t[u] = this.getYValue(d),
        t[c] = "",
        this.css(t),
        this.emitEvent("layout", [this])
    }, c.getXValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, c.getYValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, c._transitionTo = function (e, t) {
        this.getPosition();
        var n = this.position.x,
            i = this.position.y,
            o = parseInt(e, 10),
            r = parseInt(t, 10),
            s = o === this.position.x && r === this.position.y;
        if (this.setPosition(e, t), s && !this.isTransitioning) return void this.layoutPosition();
        var a = e - n,
            l = t - i,
            u = {};
        u.transform = this.getTranslate(a, l),
        this.transition({
            to: u,
            onTransitionEnd: {
                transform: this.layoutPosition
            }, isCleaning: !0
        })
    }, c.getTranslate = function (e, t) {
        var n = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop");
        return e = n ? e : -e,
        t = i ? t : -t,
        "translate3d(" + e + "px, " + t + "px, 0)"
    }, c.goTo = function (e, t) {
        this.setPosition(e, t),
        this.layoutPosition()
    }, c.moveTo = c._transitionTo,
    c.setPosition = function (e, t) {
        this.position.x = parseInt(e, 10),
        this.position.y = parseInt(t, 10)
    }, c._nonTransition = function (e) {
        this.css(e.to),
        e.isCleaning && this._removeStyles(e.to);
        for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, c.transition = function (e) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
        var t = this._transn;
        for (var n in e.onTransitionEnd) t.onEnd[n] = e.onTransitionEnd[n];
        for (n in e.to) t.ingProperties[n] = !0,
        e.isCleaning && (t.clean[n] = !0);
        if (e.from) {
            this.css(e.from);
            this.element.offsetHeight;
            null
        }
        this.enableTransition(e.to),
        this.css(e.to),
        this.isTransitioning = !0
    };
    var d = "opacity," + o(a);
    c.enableTransition = function () {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e,
            this.css({
                transitionProperty: d,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }),
            this.element.addEventListener(l, this, !1)
        }
    }, c.onwebkitTransitionEnd = function (e) {
        this.ontransitionend(e)
    }, c.onotransitionend = function (e) {
        this.ontransitionend(e)
    };
    var p = {
        "-webkit-transform": "transform"
    };
    c.ontransitionend = function (e) {
        if (e.target === this.element) {
            var t = this._transn,
                i = p[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[i], n(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd) {
                t.onEnd[i].call(this),
                delete t.onEnd[i]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, c.disableTransition = function () {
        this.removeTransitionStyles(),
        this.element.removeEventListener(l, this, !1),
        this.isTransitioning = !1
    }, c._removeStyles = function (e) {
        var t = {};
        for (var n in e) t[n] = "";
        this.css(t)
    };
    var h = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return c.removeTransitionStyles = function () {
        this.css(h)
    }, c.stagger = function (e) {
        e = isNaN(e) ? 0 : e,
        this.staggerDelay = e + "ms"
    }, c.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }, c.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, c.reveal = function () {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, c.getHideRevealTransitionEndProperty = function (e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var n in t) return n
    }, c.hide = function () {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onHideTransitionEnd = function () {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, c.destroy = function () {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
}),


function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (n, i, o, r) {
        return t(e, n, i, o, r)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function (e, t, n, i, o) {
    "use strict";

    function r(e, t) {
        var n = i.getQueryElement(e);
        if (!n) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || e)));
        this.element = n,
        u && (this.$element = u(this.element)),
        this.options = i.extend({}, this.constructor.defaults),
        this.option(t);
        var o = ++d;
        this.element.outlayerGUID = o,
        p[o] = this,
        this._create(),
        this._getOption("initLayout") && this.layout()
    }
    function s(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype),
        t.prototype.constructor = t,
        t
    }
    function a(e) {
        if ("number" == typeof e) return e;
        var t = e.match(/(^\d*\.?\d*)(\w*)/),
            n = t && t[1],
            i = t && t[2];
        return n.length ? (n = parseFloat(n)) * (f[i] || 1) : 0
    }
    var l = e.console,
        u = e.jQuery,
        c = function () {},
        d = 0,
        p = {};
    r.namespace = "outlayer",
    r.Item = o,
    r.defaults = {
        containerStyle: {
            position: "relative"
        }, initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        }, visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var h = r.prototype;
    i.extend(h, t.prototype),
    h.option = function (e) {
        i.extend(this.options, e)
    }, h._getOption = function (e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, r.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, h._create = function () {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        i.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }, h.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, h._itemize = function (e) {
        for (var t = this._filterFindItemElements(e), n = this.constructor.Item, i = [], o = 0; o < t.length; o++) {
            var r = t[o],
                s = new n(r, this);
            i.push(s)
        }
        return i
    }, h._filterFindItemElements = function (e) {
        return i.filterFindElements(e, this.options.itemSelector)
    }, h.getItemElements = function () {
        return this.items.map(function (e) {
            return e.element
        })
    }, h.layout = function () {
        this._resetLayout(),
        this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t),
        this._isLayoutInited = !0
    }, h._init = h.layout,
    h._resetLayout = function () {
        this.getSize()
    }, h.getSize = function () {
        this.size = n(this.element)
    }, h._getMeasurement = function (e, t) {
        var i, o = this.options[e];
        o ? ("string" == typeof o ? i = this.element.querySelector(o) : o instanceof HTMLElement && (i = o), this[e] = i ? n(i)[t] : o) : this[e] = 0
    }, h.layoutItems = function (e, t) {
        e = this._getItemsForLayout(e),
        this._layoutItems(e, t),
        this._postLayout()
    }, h._getItemsForLayout = function (e) {
        return e.filter(function (e) {
            return !e.isIgnored
        })
    }, h._layoutItems = function (e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var n = [];
            e.forEach(function (e) {
                var i = this._getItemLayoutPosition(e);
                i.item = e,
                i.isInstant = t || e.isLayoutInstant,
                n.push(i)
            }, this),
            this._processLayoutQueue(n)
        }
    }, h._getItemLayoutPosition = function () {
        return {
            x: 0,
            y: 0
        }
    }, h._processLayoutQueue = function (e) {
        this.updateStagger(),
        e.forEach(function (e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }, h.updateStagger = function () {
        var e = this.options.stagger;
        return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = a(e), this.stagger)
    }, h._positionItem = function (e, t, n, i, o) {
        i ? e.goTo(t, n) : (e.stagger(o * this.stagger), e.moveTo(t, n))
    }, h._postLayout = function () {
        this.resizeContainer()
    }, h.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, h._getContainerSize = c,
    h._setContainerMeasure = function (e, t) {
        if (void 0 !== e) {
            var n = this.size;
            n.isBorderBox && (e += t ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth),
            e = Math.max(e, 0),
            this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, h._emitCompleteOnItems = function (e, t) {
        function n() {
            o.dispatchEvent(e + "Complete", null, [t])
        }
        function i() {
            ++s == r && n()
        }
        var o = this,
            r = t.length;
        if (!t || !r) return void n();
        var s = 0;
        t.forEach(function (t) {
            t.once(e, i)
        })
    }, h.dispatchEvent = function (e, t, n) {
        var i = t ? [t].concat(n) : n;
        if (this.emitEvent(e, i), u) if (this.$element = this.$element || u(this.element), t) {
            var o = u.Event(t);
            o.type = e,
            this.$element.trigger(o, n)
        } else this.$element.trigger(e, n)
    }, h.ignore = function (e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, h.unignore = function (e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, h.stamp = function (e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, h.unstamp = function (e) {
        (e = this._find(e)) && e.forEach(function (e) {
            i.removeFrom(this.stamps, e),
            this.unignore(e)
        }, this)
    }, h._find = function (e) {
        if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)),
        e = i.makeArray(e)
    }, h._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, h._getBoundingRect = function () {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, h._manageStamp = c,
    h._getElementOffset = function (e) {
        var t = e.getBoundingClientRect(),
            i = this._boundingRect,
            o = n(e);
        return {
            left: t.left - i.left - o.marginLeft,
            top: t.top - i.top - o.marginTop,
            right: i.right - t.right - o.marginRight,
            bottom: i.bottom - t.bottom - o.marginBottom
        }
    }, h.handleEvent = i.handleEvent,
    h.bindResize = function () {
        e.addEventListener("resize", this),
        this.isResizeBound = !0
    }, h.unbindResize = function () {
        e.removeEventListener("resize", this),
        this.isResizeBound = !1
    }, h.onresize = function () {
        this.resize()
    }, i.debounceMethod(r, "onresize", 100),
    h.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, h.needsResizeLayout = function () {
        var e = n(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, h.addItems = function (e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)),
        t
    }, h.appended = function (e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, h.prepended = function (e) {
        var t = this._itemize(e);
        if (t.length) {
            var n = this.items.slice(0);
            this.items = t.concat(n),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(t, !0),
            this.reveal(t),
            this.layoutItems(n)
        }
    }, h.reveal = function (e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, n) {
                e.stagger(n * t),
                e.reveal()
            })
        }
    }, h.hide = function (e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, n) {
                e.stagger(n * t),
                e.hide()
            })
        }
    }, h.revealItemElements = function (e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, h.hideItemElements = function (e) {
        var t = this.getItems(e);
        this.hide(t)
    }, h.getItem = function (e) {
        for (var t = 0; t < this.items.length; t++) {
            var n = this.items[t];
            if (n.element == e) return n
        }
    }, h.getItems = function (e) {
        e = i.makeArray(e);
        var t = [];
        return e.forEach(function (e) {
            var n = this.getItem(e);
            n && t.push(n)
        }, this),
        t
    }, h.remove = function (e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t),
        t && t.length && t.forEach(function (e) {
            e.remove(),
            i.removeFrom(this.items, e)
        }, this)
    }, h.destroy = function () {
        var e = this.element.style;
        e.height = "",
        e.position = "",
        e.width = "",
        this.items.forEach(function (e) {
            e.destroy()
        }),
        this.unbindResize();
        var t = this.element.outlayerGUID;
        delete p[t],
        delete this.element.outlayerGUID,
        u && u.removeData(this.element, this.constructor.namespace)
    }, r.data = function (e) {
        e = i.getQueryElement(e);
        var t = e && e.outlayerGUID;
        return t && p[t]
    }, r.create = function (e, t) {
        var n = s(r);
        return n.defaults = i.extend({}, r.defaults),
        i.extend(n.defaults, t),
        n.compatOptions = i.extend({}, r.compatOptions),
        n.namespace = e,
        n.data = r.data,
        n.Item = s(o),
        i.htmlInit(n, e),
        u && u.bridget && u.bridget(e, n),
        n
    };
    var f = {
        ms: 1,
        s: 1e3
    };
    return r.Item = o,
    r
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function (e) {
    "use strict";

    function t() {
        e.Item.apply(this, arguments)
    }
    var n = t.prototype = Object.create(e.Item.prototype),
        i = n._create;
    n._create = function () {
        this.id = this.layout.itemGUID++,
        i.call(this),
        this.sortData = {}
    }, n.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id,
            this.sortData["original-order"] = this.id,
            this.sortData.random = Math.random();
            var e = this.layout.options.getSortData,
                t = this.layout._sorters;
            for (var n in e) {
                var i = t[n];
                this.sortData[n] = i(this.element, this)
            }
        }
    };
    var o = n.destroy;
    return n.destroy = function () {
        o.apply(this, arguments),
        this.css({
            display: ""
        })
    }, t
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function (e, t) {
    "use strict";

    function n(e) {
        this.isotope = e,
        e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }
    var i = n.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (e) {
        i[e] = function () {
            return t.prototype[e].apply(this.isotope, arguments)
        }
    }),
    i.needsVerticalResizeLayout = function () {
        var t = e(this.isotope.element);
        return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
    }, i._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, i.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, i.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, i.getSegmentSize = function (e, t) {
        var n = e + t,
            i = "outer" + t;
        if (this._getMeasurement(n, i), !this[n]) {
            var o = this.getFirstItemSize();
            this[n] = o && o[i] || this.isotope.size["inner" + t]
        }
    }, i.getFirstItemSize = function () {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, i.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, i.getSize = function () {
        this.isotope.getSize(),
        this.size = this.isotope.size
    }, n.modes = {}, n.create = function (e, t) {
        function o() {
            n.apply(this, arguments)
        }
        return o.prototype = Object.create(i),
        o.prototype.constructor = o,
        t && (o.options = t),
        o.prototype.namespace = e,
        n.modes[e] = o,
        o
    }, n
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function (e, t) {
    var n = e.create("masonry");
    return n.compatOptions.fitWidth = "isFitWidth",
    n.prototype._resetLayout = function () {
        this.getSize(),
        this._getMeasurement("columnWidth", "outerWidth"),
        this._getMeasurement("gutter", "outerWidth"),
        this.measureColumns(),
        this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0
    }, n.prototype.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                n = e && e.element;
            this.columnWidth = n && t(n).outerWidth || this.containerWidth
        }
        var i = this.columnWidth += this.gutter,
            o = this.containerWidth + this.gutter,
            r = o / i,
            s = i - o % i,
            a = s && s < 1 ? "round" : "floor";
        r = Math[a](r),
        this.cols = Math.max(r, 1)
    }, n.prototype.getContainerWidth = function () {
        var e = this._getOption("fitWidth"),
            n = e ? this.element.parentNode : this.element,
            i = t(n);
        this.containerWidth = i && i.innerWidth
    }, n.prototype._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            n = t && t < 1 ? "round" : "ceil",
            i = Math[n](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var o = this._getColGroup(i), r = Math.min.apply(Math, o), s = o.indexOf(r), a = {
            x: this.columnWidth * s,
            y: r
        }, l = r + e.size.outerHeight, u = this.cols + 1 - o.length, c = 0; c < u; c++) this.colYs[s + c] = l;
        return a
    }, n.prototype._getColGroup = function (e) {
        if (e < 2) return this.colYs;
        for (var t = [], n = this.cols + 1 - e, i = 0; i < n; i++) {
            var o = this.colYs.slice(i, i + e);
            t[i] = Math.max.apply(Math, o)
        }
        return t
    }, n.prototype._manageStamp = function (e) {
        var n = t(e),
            i = this._getElementOffset(e),
            o = this._getOption("originLeft"),
            r = o ? i.left : i.right,
            s = r + n.outerWidth,
            a = Math.floor(r / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(s / this.columnWidth);
        l -= s % this.columnWidth ? 0 : 1,
        l = Math.min(this.cols - 1, l);
        for (var u = this._getOption("originTop"), c = (u ? i.top : i.bottom) + n.outerHeight, d = a; d <= l; d++) this.colYs[d] = Math.max(c, this.colYs[d])
    }, n.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()),
        e
    }, n.prototype._getContainerFitWidth = function () {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, n.prototype.needsResizeLayout = function () {
        var e = this.containerWidth;
        return this.getContainerWidth(),
        e != this.containerWidth
    }, n
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function (e, t) {
    "use strict";
    var n = e.create("masonry"),
        i = n.prototype,
        o = {
            _getElementOffset: !0,
            layout: !0,
            _getMeasurement: !0
        };
    for (var r in t.prototype) o[r] || (i[r] = t.prototype[r]);
    var s = i.measureColumns;
    i.measureColumns = function () {
        this.items = this.isotope.filteredItems,
        s.call(this)
    };
    var a = i._getOption;
    return i._getOption = function (e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
    }, n
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function (e) {
    "use strict";
    var t = e.create("fitRows"),
        n = t.prototype;
    return n._resetLayout = function () {
        this.x = 0,
        this.y = 0,
        this.maxY = 0,
        this._getMeasurement("gutter", "outerWidth")
    }, n._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter,
            n = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && t + this.x > n && (this.x = 0, this.y = this.maxY);
        var i = {
            x: this.x,
            y: this.y
        };
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight),
        this.x += t,
        i
    }, n._getContainerSize = function () {
        return {
            height: this.maxY
        }
    }, t
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function (e) {
    "use strict";
    var t = e.create("vertical", {
        horizontalAlignment: 0
    }),
        n = t.prototype;
    return n._resetLayout = function () {
        this.y = 0
    }, n._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment,
            n = this.y;
        return this.y += e.size.outerHeight,
        {
            x: t,
            y: n
        }
    }, n._getContainerSize = function () {
        return {
            height: this.y
        }
    }, t
}),


function (e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (n, i, o, r, s, a) {
        return t(e, n, i, o, r, s, a)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope/js/item"), require("isotope/js/layout-mode"), require("isotope/js/layout-modes/masonry"), require("isotope/js/layout-modes/fit-rows"), require("isotope/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, function (e, t, n, i, o, r, s) {
    function a(e, t) {
        return function (n, i) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o],
                    s = n.sortData[r],
                    a = i.sortData[r];
                if (s > a || s < a) {
                    var l = void 0 !== t[r] ? t[r] : t,
                        u = l ? 1 : -1;
                    return (s > a ? 1 : -1) * u
                }
            }
            return 0
        }
    }
    var l = e.jQuery,
        u = String.prototype.trim ?
        function (e) {
            return e.trim()
        } : function (e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        c = t.create("isotope", {
            layoutMode: "masonry",
            isJQueryFiltering: !0,
            sortAscending: !0
        });
    c.Item = r,
    c.LayoutMode = s;
    var d = c.prototype;
    d._create = function () {
        this.itemGUID = 0,
        this._sorters = {}, this._getSorters(),
        t.prototype._create.call(this),
        this.modes = {}, this.filteredItems = this.items,
        this.sortHistory = ["original-order"];
        for (var e in s.modes) this._initLayoutMode(e)
    }, d.reloadItems = function () {
        this.itemGUID = 0,
        t.prototype.reloadItems.call(this)
    }, d._itemize = function () {
        for (var e = t.prototype._itemize.apply(this, arguments), n = 0; n < e.length; n++) {
            e[n].id = this.itemGUID++
        }
        return this._updateItemsSortData(e),
        e
    }, d._initLayoutMode = function (e) {
        var t = s.modes[e],
            n = this.options[e] || {};
        this.options[e] = t.options ? o.extend(t.options, n) : n,
        this.modes[e] = new t(this)
    }, d.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, d._layout = function () {
        var e = this._getIsInstant();
        this._resetLayout(),
        this._manageStamps(),
        this.layoutItems(this.filteredItems, e),
        this._isLayoutInited = !0
    }, d.arrange = function (e) {
        this.option(e),
        this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches,
        this._bindArrangeComplete(),
        this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t),
        this._sort(),
        this._layout()
    }, d._init = d.arrange,
    d._hideReveal = function (e) {
        this.reveal(e.needReveal),
        this.hide(e.needHide)
    }, d._getIsInstant = function () {
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = t,
        t
    }, d._bindArrangeComplete = function () {
        function e() {
            t && n && i && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }
        var t, n, i, o = this;
        this.once("layoutComplete", function () {
            t = !0,
            e()
        }),
        this.once("hideComplete", function () {
            n = !0,
            e()
        }),
        this.once("revealComplete", function () {
            i = !0,
            e()
        })
    }, d._filter = function (e) {
        var t = this.options.filter;
        t = t || "*";
        for (var n = [], i = [], o = [], r = this._getFilterTest(t), s = 0; s < e.length; s++) {
            var a = e[s];
            if (!a.isIgnored) {
                var l = r(a);
                l && n.push(a),
                l && a.isHidden ? i.push(a) : l || a.isHidden || o.push(a)
            }
        }
        return {
            matches: n,
            needReveal: i,
            needHide: o
        }
    }, d._getFilterTest = function (e) {
        return l && this.options.isJQueryFiltering ?
        function (t) {
            return l(t.element).is(e)
        } : "function" == typeof e ?
        function (t) {
            return e(t.element)
        } : function (t) {
            return i(t.element, e)
        }
    }, d.updateSortData = function (e) {
        var t;
        e ? (e = o.makeArray(e), t = this.getItems(e)) : t = this.items,
        this._getSorters(),
        this._updateItemsSortData(t)
    }, d._getSorters = function () {
        var e = this.options.getSortData;
        for (var t in e) {
            var n = e[t];
            this._sorters[t] = p(n)
        }
    }, d._updateItemsSortData = function (e) {
        for (var t = e && e.length, n = 0; t && n < t; n++) {
            e[n].updateSortData()
        }
    };
    var p = function () {
        function e(e) {
            if ("string" != typeof e) return e;
            var n = u(e).split(" "),
                i = n[0],
                o = i.match(/^\[(.+)\]$/),
                r = o && o[1],
                s = t(r, i),
                a = c.sortDataParsers[n[1]];
            return e = a ?
            function (e) {
                return e && a(s(e))
            } : function (e) {
                return e && s(e)
            }
        }
        function t(e, t) {
            return e ?
            function (t) {
                return t.getAttribute(e)
            } : function (e) {
                var n = e.querySelector(t);
                return n && n.textContent
            }
        }
        return e
    }();
    c.sortDataParsers = {
        parseInt: function (e) {
            return parseInt(e, 10)
        }, parseFloat: function (e) {
            return parseFloat(e)
        }
    }, d._sort = function () {
        var e = this.options.sortBy;
        if (e) {
            var t = [].concat.apply(e, this.sortHistory),
                n = a(t, this.options.sortAscending);
            this.filteredItems.sort(n),
            e != this.sortHistory[0] && this.sortHistory.unshift(e)
        }
    }, d._mode = function () {
        var e = this.options.layoutMode,
            t = this.modes[e];
        if (!t) throw new Error("No layout mode: " + e);
        return t.options = this.options[e],
        t
    }, d._resetLayout = function () {
        t.prototype._resetLayout.call(this),
        this._mode()._resetLayout()
    }, d._getItemLayoutPosition = function (e) {
        return this._mode()._getItemLayoutPosition(e)
    }, d._manageStamp = function (e) {
        this._mode()._manageStamp(e)
    }, d._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, d.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, d.appended = function (e) {
        var t = this.addItems(e);
        if (t.length) {
            var n = this._filterRevealAdded(t);
            this.filteredItems = this.filteredItems.concat(n)
        }
    }, d.prepended = function (e) {
        var t = this._itemize(e);
        if (t.length) {
            this._resetLayout(),
            this._manageStamps();
            var n = this._filterRevealAdded(t);
            this.layoutItems(this.filteredItems),
            this.filteredItems = n.concat(this.filteredItems),
            this.items = t.concat(this.items)
        }
    }, d._filterRevealAdded = function (e) {
        var t = this._filter(e);
        return this.hide(t.needHide),
        this.reveal(t.matches),
        this.layoutItems(t.matches, !0),
        t.matches
    }, d.insert = function (e) {
        var t = this.addItems(e);
        if (t.length) {
            var n, i, o = t.length;
            for (n = 0; n < o; n++) i = t[n],
            this.element.appendChild(i.element);
            var r = this._filter(t).matches;
            for (n = 0; n < o; n++) t[n].isLayoutInstant = !0;
            for (this.arrange(), n = 0; n < o; n++) delete t[n].isLayoutInstant;
            this.reveal(r)
        }
    };
    var h = d.remove;
    return d.remove = function (e) {
        e = o.makeArray(e);
        var t = this.getItems(e);
        h.call(this, e);
        for (var n = t && t.length, i = 0; n && i < n; i++) {
            var r = t[i];
            o.removeFrom(this.filteredItems, r)
        }
    }, d.shuffle = function () {
        for (var e = 0; e < this.items.length; e++) {
            this.items[e].sortData.random = Math.random()
        }
        this.options.sortBy = "random",
        this._sort(),
        this._layout()
    }, d._noTransition = function (e, t) {
        var n = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var i = e.apply(this, t);
        return this.options.transitionDuration = n,
        i
    }, d.getFilteredItemElements = function () {
        return this.filteredItems.map(function (e) {
            return e.element
        })
    }, c
}),


function (e) {
    e.fn.fitText = function (t, n) {
        var i = t || 1,
            o = e.extend({
                minFontSize: Number.NEGATIVE_INFINITY,
                maxFontSize: Number.POSITIVE_INFINITY
            }, n);
        return this.each(function () {
            var t = e(this),
                n = function () {
                    t.css("font-size", Math.max(Math.min(t.width() / (10 * i), parseFloat(o.maxFontSize)), parseFloat(o.minFontSize)))
                };
            n(),
            e(window).on("resize", n)
        })
    }
}(jQuery),


function (e) {
    function t(t, n, i, o) {
        var r = t.text().split(n),
            s = "";
        r.length && (e(r).each(function (e, t) {
            s += '<span class="' + i + (e + 1) + '">' + t + "</span>" + o
        }), t.empty().append(s))
    }
    var n = {
        init: function () {
            return this.each(function () {
                t(e(this), "", "char", "")
            })
        }, words: function () {
            return this.each(function () {
                t(e(this), " ", "word", " ")
            })
        }, lines: function () {
            return this.each(function () {
                var n = "eefec303079ad17405c889e092e105b0";
                t(e(this).children("br").replaceWith(n).end(), n, "line", "")
            })
        }
    };
    e.fn.lettering = function (t) {
        return t && n[t] ? n[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (e.error("Method " + t + " does not exist on jQuery.lettering"), this) : n.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery),


function (e) {
    "use strict";

    function t(t) {
        return /In/.test(t) || e.inArray(t, e.fn.textillate.defaults.inEffects) >= 0
    }
    function n(t) {
        return /Out/.test(t) || e.inArray(t, e.fn.textillate.defaults.outEffects) >= 0
    }
    function i(e) {
        return "true" !== e && "false" !== e ? e : "true" === e
    }
    function o(t) {
        var n = t.attributes || [],
            o = {};
        return n.length ? (e.each(n, function (e, t) {
            var n = t.nodeName.replace(/delayscale/, "delayScale");
            /^data-in-*/.test(n) ? (o. in = o. in || {}, o. in [n.replace(/data-in-/, "")] = i(t.nodeValue)) : /^data-out-*/.test(n) ? (o.out = o.out || {}, o.out[n.replace(/data-out-/, "")] = i(t.nodeValue)) : /^data-*/.test(n) && (o[n.replace(/data-/, "")] = i(t.nodeValue))
        }), o) : o
    }
    function r(e) {
        for (var t, n, i = e.length; i; t = parseInt(Math.random() * i), n = e[--i], e[i] = e[t], e[t] = n);
        return e
    }
    function s(e, t, n) {
        e.addClass("animated " + t).css("visibility", "visible").show(),
        e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            e.removeClass("animated " + t),
            n && n()
        })
    }
    function a(i, o, a) {
        var l = i.length;
        if (!l) return void(a && a());
        o.shuffle && (i = r(i)),
        o.reverse && (i = i.toArray().reverse()),
        e.each(i, function (i, r) {
            function u() {
                t(o.effect) ? c.css("visibility", "visible") : n(o.effect) && c.css("visibility", "hidden"),
                !(l -= 1) && a && a()
            }
            var c = e(r),
                d = o.sync ? o.delay : o.delay * i * o.delayScale;
            c.text() ? setTimeout(function () {
                s(c, o.effect, u)
            }, d) : u()
        })
    }
    var l = function (i, r) {
        var s = this,
            l = e(i);
        s.init = function () {
            s.$texts = l.find(r.selector),
            s.$texts.length || (s.$texts = e('<ul class="texts"><li>' + l.html() + "</li></ul>"), l.html(s.$texts)),
            s.$texts.hide(),
            s.$current = e("<span>").html(s.$texts.find(":first-child").html()).prependTo(l),
            t(r. in .effect) ? s.$current.css("visibility", "hidden") : n(r.out.effect) && s.$current.css("visibility", "visible"),
            s.setOptions(r),
            s.timeoutRun = null,
            setTimeout(function () {
                s.options.autoStart && s.start()
            }, s.options.initialDelay)
        }, s.setOptions = function (e) {
            s.options = e
        }, s.triggerEvent = function (t) {
            var n = e.Event(t + ".tlt");
            return l.trigger(n, s),
            n
        }, s. in = function (i, r) {
            i = i || 0;
            var u, c = s.$texts.find(":nth-child(" + ((i || 0) + 1) + ")"),
                d = e.extend(!0, {}, s.options, c.length ? o(c[0]) : {});
            c.addClass("current"),
            s.triggerEvent("inAnimationBegin"),
            l.attr("data-active", c.data("id")),
            s.$current.html(c.html()).lettering("words"),
            "char" == s.options.type && s.$current.find('[class^="word"]').css({
                display: "inline-block",
                "-webkit-transform": "translate3d(0,0,0)",
                "-moz-transform": "translate3d(0,0,0)",
                "-o-transform": "translate3d(0,0,0)",
                transform: "translate3d(0,0,0)"
            }).each(function () {
                e(this).lettering()
            }),
            u = s.$current.find('[class^="' + s.options.type + '"]').css("display", "inline-block"),
            t(d. in .effect) ? u.css("visibility", "hidden") : n(d. in .effect) && u.css("visibility", "visible"),
            s.currentIndex = i,
            a(u, d. in , function () {
                s.triggerEvent("inAnimationEnd"),
                d. in .callback && d. in .callback(),
                r && r(s)
            })
        }, s.out = function (t) {
            var n = s.$texts.find(":nth-child(" + ((s.currentIndex || 0) + 1) + ")"),
                i = s.$current.find('[class^="' + s.options.type + '"]'),
                r = e.extend(!0, {}, s.options, n.length ? o(n[0]) : {});
            s.triggerEvent("outAnimationBegin"),
            a(i, r.out, function () {
                n.removeClass("current"),
                s.triggerEvent("outAnimationEnd"),
                l.removeAttr("data-active"),
                r.out.callback && r.out.callback(),
                t && t(s)
            })
        }, s.start = function (e) {
            setTimeout(function () {
                s.triggerEvent("start"),


                function e(t) {
                    s. in (t, function () {
                        var n = s.$texts.children().length;
                        t += 1,
                        !s.options.loop && t >= n ? (s.options.callback && s.options.callback(), s.triggerEvent("end")) : (t %= n, s.timeoutRun = setTimeout(function () {
                            s.out(function () {
                                e(t)
                            })
                        }, s.options.minDisplayTime))
                    })
                }(e || 0)
            }, s.options.initialDelay)
        }, s.stop = function () {
            s.timeoutRun && (clearInterval(s.timeoutRun), s.timeoutRun = null)
        }, s.init()
    };
    e.fn.textillate = function (t, n) {
        return this.each(function () {
            var i = e(this),
                r = i.data("textillate"),
                s = e.extend(!0, {}, e.fn.textillate.defaults, o(this), "object" == typeof t && t);
            r ? "string" == typeof t ? r[t].apply(r, [].concat(n)) : r.setOptions.call(r, s) : i.data("textillate", r = new l(this, s))
        })
    }, e.fn.textillate.defaults = {
        selector: ".texts",
        loop: !1,
        minDisplayTime: 2e3,
        initialDelay: 0,
        in : {
            effect: "fadeInLeftBig",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function () {}
        }, out: {
            effect: "hinge",
            delayScale: 1.5,
            delay: 50,
            sync: !1,
            reverse: !1,
            shuffle: !1,
            callback: function () {}
        }, autoStart: !0,
        inEffects: [],
        outEffects: ["hinge"],
        callback: function () {}, type: "char"
    }
}(jQuery),


function (e, t) {
    "use strict";
    var n = function () {
        var n = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        },
            i = function () {
                var t = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                return t && e("html").css("cursor", "pointer").on("click", e.noop),
                t
            }(),
            o = function () {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            r = function () {
                return !!t.PointerEvent
            }(),
            s = function (e, t, i) {
                var o, r = n.menuClass;
                t.cssArrows && (r += " " + n.menuArrowClass),
                o = i ? "addClass" : "removeClass",
                e[o](r)
            },
            a = function (t, i) {
                return t.find("li." + i.pathClass).slice(0, i.pathLevels).addClass(i.hoverClass + " " + n.bcClass).filter(function () {
                    return e(this).children(i.popUpSelector).hide().show().length
                }).removeClass(i.pathClass)
            },
            l = function (e, t) {
                var i = t ? "addClass" : "removeClass";
                e.children("a")[i](n.anchorClass)
            },
            u = function (e) {
                var t = e.css("ms-touch-action"),
                    n = e.css("touch-action");
                n = n || t,
                n = "pan-y" === n ? "auto" : "pan-y",
                e.css({
                    "ms-touch-action": n,
                    "touch-action": n
                })
            },
            c = function (e) {
                return e.closest("." + n.menuClass)
            },
            d = function (e) {
                return c(e).data("sfOptions")
            },
            p = function () {
                var t = e(this),
                    n = d(t);
                clearTimeout(n.sfTimer),
                t.siblings().superfish("hide").end().superfish("show")
            },
            h = function (t) {
                t.retainPath = e.inArray(this[0], t.$path) > -1,
                this.superfish("hide"),
                this.parents("." + t.hoverClass).length || (t.onIdle.call(c(this)), t.$path.length && e.proxy(p, t.$path)())
            },
            f = function () {
                var t = e(this),
                    n = d(t);
                i ? e.proxy(h, t, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(h, t, n), n.delay))
            },
            g = function (t) {
                var n = e(this),
                    i = d(n),
                    o = n.siblings(t.data.popUpSelector);
                return !1 === i.onHandleTouch.call(o) ? this : void(o.length > 0 && o.is(":hidden") && (n.one("click.superfish", !1), "MSPointerDown" === t.type || "pointerdown" === t.type ? n.trigger("focus") : e.proxy(p, n.parent("li"))()))
            },
            m = function (t, n) {
                var s = "li:has(" + n.popUpSelector + ")";
                e.fn.hoverIntent && !n.disableHI ? t.hoverIntent(p, f, s) : t.on("mouseenter.superfish", s, p).on("mouseleave.superfish", s, f);
                var a = "MSPointerDown.superfish";
                r && (a = "pointerdown.superfish"),
                i || (a += " touchend.superfish"),
                o && (a += " mousedown.superfish"),
                t.on("focusin.superfish", "li", p).on("focusout.superfish", "li", f).on(a, "a", n, g)
            };
        return {
            hide: function (t) {
                if (this.length) {
                    var n = this,
                        i = d(n);
                    if (!i) return this;
                    var o = !0 === i.retainPath ? i.$path : "",
                        r = n.find("li." + i.hoverClass).add(this).not(o).removeClass(i.hoverClass).children(i.popUpSelector),
                        s = i.speedOut;
                    if (t && (r.show(), s = 0), i.retainPath = !1, !1 === i.onBeforeHide.call(r)) return this;
                    r.stop(!0, !0).animate(i.animationOut, s, function () {
                        var t = e(this);
                        i.onHide.call(t)
                    })
                }
                return this
            }, show: function () {
                var e = d(this);
                if (!e) return this;
                var t = this.addClass(e.hoverClass),
                    n = t.children(e.popUpSelector);
                return !1 === e.onBeforeShow.call(n) ? this : (n.stop(!0, !0).animate(e.animation, e.speed, function () {
                    e.onShow.call(n)
                }), this)
            }, destroy: function () {
                return this.each(function () {
                    var t, i = e(this),
                        o = i.data("sfOptions");
                    return !!o && (t = i.find(o.popUpSelector).parent("li"), clearTimeout(o.sfTimer), s(i, o), l(t), u(i), i.off(".superfish").off(".hoverIntent"), t.children(o.popUpSelector).attr("style", function (e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }), o.$path.removeClass(o.hoverClass + " " + n.bcClass).addClass(o.pathClass), i.find("." + o.hoverClass).removeClass(o.hoverClass), o.onDestroy.call(i), void i.removeData("sfOptions"))
                })
            }, init: function (t) {
                return this.each(function () {
                    var i = e(this);
                    if (i.data("sfOptions")) return !1;
                    var o = e.extend({}, e.fn.superfish.defaults, t),
                        r = i.find(o.popUpSelector).parent("li");
                    o.$path = a(i, o),
                    i.data("sfOptions", o),
                    s(i, o, !0),
                    l(r, !0),
                    u(i),
                    m(i, o),
                    r.not("." + n.bcClass).superfish("hide", !0),
                    o.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function (t, i) {
        return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? e.error("Method " + t + " does not exist on jQuery.fn.superfish") : n.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        }, animationOut: {
            opacity: "hide"
        }, speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
}(jQuery, window),


function (e, t) {
    "function" == typeof define && define.amd ? define("sifter", t) : "object" == typeof exports ? module.exports = t() : e.Sifter = t()
}(this, function () {
    var e = function (e, t) {
        this.items = e,
        this.settings = t || {
            diacritics: !0
        }
    };
    e.prototype.tokenize = function (e) {
        if (!(e = i(String(e || "").toLowerCase())) || !e.length) return [];
        var t, n, r, a, l = [],
            u = e.split(/ +/);
        for (t = 0, n = u.length; t < n; t++) {
            if (r = o(u[t]), this.settings.diacritics) for (a in s) s.hasOwnProperty(a) && (r = r.replace(new RegExp(a, "g"), s[a]));
            l.push({
                string: u[t],
                regex: new RegExp(r, "i")
            })
        }
        return l
    }, e.prototype.iterator = function (e, t) {
        var n;
        n = r(e) ? Array.prototype.forEach ||
        function (e) {
            for (var t = 0, n = this.length; t < n; t++) e(this[t], t, this)
        } : function (e) {
            for (var t in this) this.hasOwnProperty(t) && e(this[t], t, this)
        }, n.apply(e, [t])
    }, e.prototype.getScoreFunction = function (e, t) {
        var n, i, o, r;
        n = this,
        e = n.prepareSearch(e, t),
        o = e.tokens,
        i = e.options.fields,
        r = o.length;
        var s = function (e, t) {
            var n, i;
            return e ? (e = String(e || ""), -1 === (i = e.search(t.regex)) ? 0 : (n = t.string.length / e.length, 0 === i && (n += .5), n)) : 0
        },
            a = function () {
                var e = i.length;
                return e ? 1 === e ?
                function (e, t) {
                    return s(t[i[0]], e)
                } : function (t, n) {
                    for (var o = 0, r = 0; o < e; o++) r += s(n[i[o]], t);
                    return r / e
                } : function () {
                    return 0
                }
            }();
        return r ? 1 === r ?
        function (e) {
            return a(o[0], e)
        } : "and" === e.options.conjunction ?
        function (e) {
            for (var t, n = 0, i = 0; n < r; n++) {
                if ((t = a(o[n], e)) <= 0) return 0;
                i += t
            }
            return i / r
        } : function (e) {
            for (var t = 0, n = 0; t < r; t++) n += a(o[t], e);
            return n / r
        } : function () {
            return 0
        }
    }, e.prototype.getSortFunction = function (e, n) {
        var i, o, r, s, a, l, u, c, d, p, h;
        if (r = this, e = r.prepareSearch(e, n), h = !e.query && n.sort_empty || n.sort, d = function (e, t) {
            return "$score" === e ? t.score : r.items[t.id][e]
        }, a = [], h) for (i = 0, o = h.length; i < o; i++)(e.query || "$score" !== h[i].field) && a.push(h[i]);
        if (e.query) {
            for (p = !0, i = 0, o = a.length; i < o; i++) if ("$score" === a[i].field) {
                p = !1;
                break
            }
            p && a.unshift({
                field: "$score",
                direction: "desc"
            })
        } else for (i = 0, o = a.length; i < o; i++) if ("$score" === a[i].field) {
            a.splice(i, 1);
            break
        }
        for (c = [], i = 0, o = a.length; i < o; i++) c.push("desc" === a[i].direction ? -1 : 1);
        return l = a.length,
        l ? 1 === l ? (s = a[0].field, u = c[0], function (e, n) {
            return u * t(d(s, e), d(s, n))
        }) : function (e, n) {
            var i, o, r;
            for (i = 0; i < l; i++) if (r = a[i].field, o = c[i] * t(d(r, e), d(r, n))) return o;
            return 0
        } : null
    }, e.prototype.prepareSearch = function (e, t) {
        if ("object" == typeof e) return e;
        t = n({}, t);
        var i = t.fields,
            o = t.sort,
            s = t.sort_empty;
        return i && !r(i) && (t.fields = [i]),
        o && !r(o) && (t.sort = [o]),
        s && !r(s) && (t.sort_empty = [s]),
        {
            options: t,
            query: String(e || "").toLowerCase(),
            tokens: this.tokenize(e),
            total: 0,
            items: []
        }
    }, e.prototype.search = function (e, t) {
        var n, i, o, r, s = this;
        return i = this.prepareSearch(e, t),
        t = i.options,
        e = i.query,
        r = t.score || s.getScoreFunction(i),
        e.length ? s.iterator(s.items, function (e, o) {
            n = r(e),
            (!1 === t.filter || n > 0) && i.items.push({
                score: n,
                id: o
            })
        }) : s.iterator(s.items, function (e, t) {
            i.items.push({
                score: 1,
                id: t
            })
        }),
        o = s.getSortFunction(i, t),
        o && i.items.sort(o),
        i.total = i.items.length,
        "number" == typeof t.limit && (i.items = i.items.slice(0, t.limit)),
        i
    };
    var t = function (e, t) {
        return "number" == typeof e && "number" == typeof t ? e > t ? 1 : e < t ? -1 : 0 : (e = a(String(e || "")), t = a(String(t || "")), e > t ? 1 : t > e ? -1 : 0)
    },
        n = function (e, t) {
            var n, i, o, r;
            for (n = 1, i = arguments.length; n < i; n++) if (r = arguments[n]) for (o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
            return e
        },
        i = function (e) {
            return (e + "").replace(/^\s+|\s+$|/g, "")
        },
        o = function (e) {
            return (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        },
        r = Array.isArray || $ && $.isArray ||
        function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        s = {
            a: "[aÀÁÂÃÄÅàáâãäåĀāąĄ]",
            c: "[cÇçćĆčČ]",
            d: "[dđĐďĎ]",
            e: "[eÈÉÊËèéêëěĚĒēęĘ]",
            i: "[iÌÍÎÏìíîïĪī]",
            l: "[lłŁ]",
            n: "[nÑñňŇńŃ]",
            o: "[oÒÓÔÕÕÖØòóôõöøŌō]",
            r: "[rřŘ]",
            s: "[sŠšśŚ]",
            t: "[tťŤ]",
            u: "[uÙÚÛÜùúûüůŮŪū]",
            y: "[yŸÿýÝ]",
            z: "[zŽžżŻźŹ]"
        },
        a = function () {
            var e, t, n, i, o = "",
                r = {};
            for (n in s) if (s.hasOwnProperty(n)) for (i = s[n].substring(2, s[n].length - 1), o += i, e = 0, t = i.length; e < t; e++) r[i.charAt(e)] = n;
            var a = new RegExp("[" + o + "]", "g");
            return function (e) {
                return e.replace(a, function (e) {
                    return r[e]
                }).toLowerCase()
            }
        }();
    return e
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("microplugin", t) : "object" == typeof exports ? module.exports = t() : e.MicroPlugin = t()
}(this, function () {
    var e = {};
    e.mixin = function (e) {
        e.plugins = {}, e.prototype.initializePlugins = function (e) {
            var n, i, o, r = this,
                s = [];
            if (r.plugins = {
                names: [],
                settings: {}, requested: {}, loaded: {}
            }, t.isArray(e)) for (n = 0, i = e.length; n < i; n++)"string" == typeof e[n] ? s.push(e[n]) : (r.plugins.settings[e[n].name] = e[n].options, s.push(e[n].name));
            else if (e) for (o in e) e.hasOwnProperty(o) && (r.plugins.settings[o] = e[o], s.push(o));
            for (; s.length;) r.require(s.shift())
        }, e.prototype.loadPlugin = function (t) {
            var n = this,
                i = n.plugins,
                o = e.plugins[t];
            if (!e.plugins.hasOwnProperty(t)) throw new Error('Unable to find "' + t + '" plugin');
            i.requested[t] = !0,
            i.loaded[t] = o.fn.apply(n, [n.plugins.settings[t] || {}]),
            i.names.push(t)
        }, e.prototype.require = function (e) {
            var t = this,
                n = t.plugins;
            if (!t.plugins.loaded.hasOwnProperty(e)) {
                if (n.requested[e]) throw new Error('Plugin has circular dependency ("' + e + '")');
                t.loadPlugin(e)
            }
            return n.loaded[e]
        }, e.define = function (t, n) {
            e.plugins[t] = {
                name: t,
                fn: n
            }
        }
    };
    var t = {
        isArray: Array.isArray ||
        function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    };
    return e
}),


function (e, t) {
    "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("sifter"), require("microplugin")) : e.Selectize = t(e.jQuery, e.Sifter, e.MicroPlugin)
}(this, function (e, t, n) {
    "use strict";
    var i = function (e, t) {
        if ("string" != typeof t || t.length) {
            var n = "string" == typeof t ? new RegExp(t, "i") : t,
                i = function (e) {
                    var t = 0;
                    if (3 === e.nodeType) {
                        var o = e.data.search(n);
                        if (o >= 0 && e.data.length > 0) {
                            var r = e.data.match(n),
                                s = document.createElement("span");
                            s.className = "highlight";
                            var a = e.splitText(o),
                                l = (a.splitText(r[0].length), a.cloneNode(!0));
                            s.appendChild(l),
                            a.parentNode.replaceChild(s, a),
                            t = 1
                        }
                    } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName)) for (var u = 0; u < e.childNodes.length; ++u) u += i(e.childNodes[u]);
                    return t
                };
            return e.each(function () {
                i(this)
            })
        }
    },
        o = function () {};
    o.prototype = {
        on: function (e, t) {
            this._events = this._events || {}, this._events[e] = this._events[e] || [],
            this._events[e].push(t)
        }, off: function (e, t) {
            var n = arguments.length;
            return 0 === n ? delete this._events : 1 === n ? delete this._events[e] : (this._events = this._events || {}, void(e in this._events != !1 && this._events[e].splice(this._events[e].indexOf(t), 1)))
        }, trigger: function (e) {
            if (this._events = this._events || {}, e in this._events != !1) for (var t = 0; t < this._events[e].length; t++) this._events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, o.mixin = function (e) {
        for (var t = ["on", "off", "trigger"], n = 0; n < t.length; n++) e.prototype[t[n]] = o.prototype[t[n]]
    };
    var r = /Mac/.test(navigator.userAgent),
        s = 65,
        a = 13,
        l = 27,
        u = 37,
        c = 38,
        d = 80,
        p = 39,
        h = 40,
        f = 78,
        g = 8,
        m = 46,
        y = 16,
        v = r ? 91 : 17,
        b = r ? 18 : 17,
        w = 9,
        T = 1,
        x = 2,
        P = !/android/i.test(window.navigator.userAgent) && !! document.createElement("form").validity,
        S = function (e) {
            return void 0 !== e
        },
        C = function (e) {
            return void 0 === e || null === e ? null : "boolean" == typeof e ? e ? "1" : "0" : e + ""
        },
        k = function (e) {
            return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },
        j = function (e) {
            return (e + "").replace(/\$/g, "$$$$")
        },
        _ = {};
    _.before = function (e, t, n) {
        var i = e[t];
        e[t] = function () {
            return n.apply(e, arguments),
            i.apply(e, arguments)
        }
    }, _.after = function (e, t, n) {
        var i = e[t];
        e[t] = function () {
            var t = i.apply(e, arguments);
            return n.apply(e, arguments),
            t
        }
    };
    var I = function (e) {
        var t = !1;
        return function () {
            t || (t = !0, e.apply(this, arguments))
        }
    },
        Y = function (e, t) {
            var n;
            return function () {
                var i = this,
                    o = arguments;
                window.clearTimeout(n),
                n = window.setTimeout(function () {
                    e.apply(i, o)
                }, t)
            }
        },
        O = function (e, t, n) {
            var i, o = e.trigger,
                r = {};
            e.trigger = function () {
                var n = arguments[0];
                if (-1 === t.indexOf(n)) return o.apply(e, arguments);
                r[n] = arguments
            }, n.apply(e, []),
            e.trigger = o;
            for (i in r) r.hasOwnProperty(i) && o.apply(e, r[i])
        },
        E = function (e, t, n, i) {
            e.on(t, n, function (t) {
                for (var n = t.target; n && n.parentNode !== e[0];) n = n.parentNode;
                return t.currentTarget = n,
                i.apply(this, [t])
            })
        },
        A = function (e) {
            var t = {};
            if ("selectionStart" in e) t.start = e.selectionStart,
            t.length = e.selectionEnd - t.start;
            else if (document.selection) {
                e.focus();
                var n = document.selection.createRange(),
                    i = document.selection.createRange().text.length;
                n.moveStart("character", -e.value.length),
                t.start = n.text.length - i,
                t.length = i
            }
            return t
        },
        $ = function (e, t, n) {
            var i, o, r = {};
            if (n) for (i = 0, o = n.length; i < o; i++) r[n[i]] = e.css(n[i]);
            else r = e.css();
            t.css(r)
        },
        L = function (t, n) {
            if (!t) return 0;
            var i = e("<test>").css({
                position: "absolute",
                top: -99999,
                left: -99999,
                width: "auto",
                padding: 0,
                whiteSpace: "pre"
            }).text(t).appendTo("body");
            $(n, i, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
            var o = i.width();
            return i.remove(),
            o
        },
        Q = function (e) {
            var t = null,
                n = function (n, i) {
                    var o, r, s, a, l, u, c, d;
                    n = n || window.event || {}, i = i || {}, n.metaKey || n.altKey || (i.force || !1 !== e.data("grow")) && (o = e.val(), n.type && "keydown" === n.type.toLowerCase() && (r = n.keyCode, s = r >= 97 && r <= 122 || r >= 65 && r <= 90 || r >= 48 && r <= 57 || 32 === r, r === m || r === g ? (d = A(e[0]), d.length ? o = o.substring(0, d.start) + o.substring(d.start + d.length) : r === g && d.start ? o = o.substring(0, d.start - 1) + o.substring(d.start + 1) : r === m && void 0 !== d.start && (o = o.substring(0, d.start) + o.substring(d.start + 1))) : s && (u = n.shiftKey, c = String.fromCharCode(n.keyCode), c = u ? c.toUpperCase() : c.toLowerCase(), o += c)), a = e.attr("placeholder"), !o && a && (o = a), (l = L(o, e) + 4) !== t && (t = l, e.width(l), e.triggerHandler("resize")))
                };
            e.on("keydown keyup update blur", n),
            n()
        },
        D = function (n, i) {
            var o, r, s, a, l = this;
            a = n[0],
            a.selectize = l;
            var u = window.getComputedStyle && window.getComputedStyle(a, null);
            if (s = u ? u.getPropertyValue("direction") : a.currentStyle && a.currentStyle.direction, s = s || n.parents("[dir]:first").attr("dir") || "", e.extend(l, {
                order: 0,
                settings: i,
                $input: n,
                tabIndex: n.attr("tabindex") || "",
                tagType: "select" === a.tagName.toLowerCase() ? T : x,
                rtl: /rtl/i.test(s),
                eventNS: ".selectize" + ++D.count,
                highlightedValue: null,
                isOpen: !1,
                isDisabled: !1,
                isRequired: n.is("[required]"),
                isInvalid: !1,
                isLocked: !1,
                isFocused: !1,
                isInputHidden: !1,
                isSetup: !1,
                isShiftDown: !1,
                isCmdDown: !1,
                isCtrlDown: !1,
                ignoreFocus: !1,
                ignoreBlur: !1,
                ignoreHover: !1,
                hasOptions: !1,
                currentResults: null,
                lastValue: "",
                caretPos: 0,
                loading: 0,
                loadedSearches: {}, $activeOption: null,
                $activeItems: [],
                optgroups: {}, options: {}, userOptions: {}, items: [],
                renderCache: {}, onSearchChange: null === i.loadThrottle ? l.onSearchChange : Y(l.onSearchChange, i.loadThrottle)
            }), l.sifter = new t(this.options, {
                diacritics: i.diacritics
            }), l.settings.options) {
                for (o = 0, r = l.settings.options.length; o < r; o++) l.registerOption(l.settings.options[o]);
                delete l.settings.options
            }
            if (l.settings.optgroups) {
                for (o = 0, r = l.settings.optgroups.length; o < r; o++) l.registerOptionGroup(l.settings.optgroups[o]);
                delete l.settings.optgroups
            }
            l.settings.mode = l.settings.mode || (1 === l.settings.maxItems ? "single" : "multi"),
            "boolean" != typeof l.settings.hideSelected && (l.settings.hideSelected = "multi" === l.settings.mode),
            l.initializePlugins(l.settings.plugins),
            l.setupCallbacks(),
            l.setupTemplates(),
            l.setup()
        };
    return o.mixin(D),
    n.mixin(D),
    e.extend(D.prototype, {
        setup: function () {
            var t, n, i, o, s, a, l, u, c, d = this,
                p = d.settings,
                h = d.eventNS,
                f = e(window),
                g = e(document),
                m = d.$input;
            if (l = d.settings.mode, u = m.attr("class") || "", t = e("<div>").addClass(p.wrapperClass).addClass(u).addClass(l), n = e("<div>").addClass(p.inputClass).addClass("items").appendTo(t), i = e('<input type="text" autocomplete="off" />').appendTo(n).attr("tabindex", m.is(":disabled") ? "-1" : d.tabIndex), a = e(p.dropdownParent || t), o = e("<div>").addClass(p.dropdownClass).addClass(l).hide().appendTo(a), s = e("<div>").addClass(p.dropdownContentClass).appendTo(o), d.settings.copyClassesToDropdown && o.addClass(u), t.css({
                width: m[0].style.width
            }), d.plugins.names.length && (c = "plugin-" + d.plugins.names.join(" plugin-"), t.addClass(c), o.addClass(c)), (null === p.maxItems || p.maxItems > 1) && d.tagType === T && m.attr("multiple", "multiple"), d.settings.placeholder && i.attr("placeholder", p.placeholder), !d.settings.splitOn && d.settings.delimiter) {
                var w = d.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                d.settings.splitOn = new RegExp("\\s*" + w + "+\\s*")
            }
            m.attr("autocorrect") && i.attr("autocorrect", m.attr("autocorrect")),
            m.attr("autocapitalize") && i.attr("autocapitalize", m.attr("autocapitalize")),
            d.$wrapper = t,
            d.$control = n,
            d.$control_input = i,
            d.$dropdown = o,
            d.$dropdown_content = s,
            o.on("mouseenter", "[data-selectable]", function () {
                return d.onOptionHover.apply(d, arguments)
            }),
            o.on("mousedown click", "[data-selectable]", function () {
                return d.onOptionSelect.apply(d, arguments)
            }),
            E(n, "mousedown", "*:not(input)", function () {
                return d.onItemSelect.apply(d, arguments)
            }),
            Q(i),
            n.on({
                mousedown: function () {
                    return d.onMouseDown.apply(d, arguments)
                }, click: function () {
                    return d.onClick.apply(d, arguments)
                }
            }),
            i.on({
                mousedown: function (e) {
                    e.stopPropagation()
                }, keydown: function () {
                    return d.onKeyDown.apply(d, arguments)
                }, keyup: function () {
                    return d.onKeyUp.apply(d, arguments)
                }, keypress: function () {
                    return d.onKeyPress.apply(d, arguments)
                }, resize: function () {
                    d.positionDropdown.apply(d, [])
                }, blur: function () {
                    return d.onBlur.apply(d, arguments)
                }, focus: function () {
                    return d.ignoreBlur = !1,
                    d.onFocus.apply(d, arguments)
                }, paste: function () {
                    return d.onPaste.apply(d, arguments)
                }
            }),
            g.on("keydown" + h, function (e) {
                d.isCmdDown = e[r ? "metaKey" : "ctrlKey"],
                d.isCtrlDown = e[r ? "altKey" : "ctrlKey"],
                d.isShiftDown = e.shiftKey
            }),
            g.on("keyup" + h, function (e) {
                e.keyCode === b && (d.isCtrlDown = !1),
                e.keyCode === y && (d.isShiftDown = !1),
                e.keyCode === v && (d.isCmdDown = !1)
            }),
            g.on("mousedown" + h, function (e) {
                if (d.isFocused) {
                    if (e.target === d.$dropdown[0] || e.target.parentNode === d.$dropdown[0]) return !1;
                    d.$control.has(e.target).length || e.target === d.$control[0] || d.blur(e.target)
                }
            }),
            f.on(["scroll" + h, "resize" + h].join(" "), function () {
                d.isOpen && d.positionDropdown.apply(d, arguments)
            }),
            f.on("mousemove" + h, function () {
                d.ignoreHover = !1
            }),
            this.revertSettings = {
                $children: m.children().detach(),
                tabindex: m.attr("tabindex")
            }, m.attr("tabindex", -1).hide().after(d.$wrapper),
            e.isArray(p.items) && (d.setValue(p.items), delete p.items),
            P && m.on("invalid" + h, function (e) {
                e.preventDefault(),
                d.isInvalid = !0,
                d.refreshState()
            }),
            d.updateOriginalInput(),
            d.refreshItems(),
            d.refreshState(),
            d.updatePlaceholder(),
            d.isSetup = !0,
            m.is(":disabled") && d.disable(),
            d.on("change", this.onChange),
            m.data("selectize", d),
            m.addClass("selectized"),
            d.trigger("initialize"),
            !0 === p.preload && d.onSearchChange("")
        }, setupTemplates: function () {
            var t = this,
                n = t.settings.labelField,
                i = t.settings.optgroupLabelField,
                o = {
                    optgroup: function (e) {
                        return '<div class="optgroup">' + e.html + "</div>"
                    }, optgroup_header: function (e, t) {
                        return '<div class="optgroup-header">' + t(e[i]) + "</div>"
                    }, option: function (e, t) {
                        return '<div class="option">' + t(e[n]) + "</div>"
                    }, item: function (e, t) {
                        return '<div class="item">' + t(e[n]) + "</div>"
                    }, option_create: function (e, t) {
                        return '<div class="create">Add <strong>' + t(e.input) + "</strong>&hellip;</div>"
                    }
                };
            t.settings.render = e.extend({}, o, t.settings.render)
        }, setupCallbacks: function () {
            var e, t, n = {
                initialize: "onInitialize",
                change: "onChange",
                item_add: "onItemAdd",
                item_remove: "onItemRemove",
                clear: "onClear",
                option_add: "onOptionAdd",
                option_remove: "onOptionRemove",
                option_clear: "onOptionClear",
                optgroup_add: "onOptionGroupAdd",
                optgroup_remove: "onOptionGroupRemove",
                optgroup_clear: "onOptionGroupClear",
                dropdown_open: "onDropdownOpen",
                dropdown_close: "onDropdownClose",
                type: "onType",
                load: "onLoad",
                focus: "onFocus",
                blur: "onBlur"
            };
            for (e in n) n.hasOwnProperty(e) && (t = this.settings[n[e]]) && this.on(e, t)
        }, onClick: function (e) {
            var t = this;
            t.isFocused || (t.focus(), e.preventDefault())
        }, onMouseDown: function (t) {
            var n = this,
                i = t.isDefaultPrevented();
            e(t.target);
            if (n.isFocused) {
                if (t.target !== n.$control_input[0]) return "single" === n.settings.mode ? n.isOpen ? n.close() : n.open() : i || n.setActiveItem(null),
                !1
            } else i || window.setTimeout(function () {
                n.focus()
            }, 0)
        }, onChange: function () {
            this.$input.trigger("change")
        }, onPaste: function (t) {
            var n = this;
            n.isFull() || n.isInputHidden || n.isLocked ? t.preventDefault() : n.settings.splitOn && setTimeout(function () {
                for (var t = e.trim(n.$control_input.val() || "").split(n.settings.splitOn), i = 0, o = t.length; i < o; i++) n.createItem(t[i])
            }, 0)
        }, onKeyPress: function (e) {
            if (this.isLocked) return e && e.preventDefault();
            var t = String.fromCharCode(e.keyCode || e.which);
            return this.settings.create && "multi" === this.settings.mode && t === this.settings.delimiter ? (this.createItem(), e.preventDefault(), !1) : void 0
        }, onKeyDown: function (e) {
            var t = (e.target, this.$control_input[0], this);
            if (t.isLocked) return void(e.keyCode !== w && e.preventDefault());
            switch (e.keyCode) {
            case s:
                if (t.isCmdDown) return void t.selectAll();
                break;
            case l:
                return void(t.isOpen && (e.preventDefault(), e.stopPropagation(), t.close()));
            case f:
                if (!e.ctrlKey || e.altKey) break;
            case h:
                if (!t.isOpen && t.hasOptions) t.open();
                else if (t.$activeOption) {
                    t.ignoreHover = !0;
                    var n = t.getAdjacentOption(t.$activeOption, 1);
                    n.length && t.setActiveOption(n, !0, !0)
                }
                return void e.preventDefault();
            case d:
                if (!e.ctrlKey || e.altKey) break;
            case c:
                if (t.$activeOption) {
                    t.ignoreHover = !0;
                    var i = t.getAdjacentOption(t.$activeOption, -1);
                    i.length && t.setActiveOption(i, !0, !0)
                }
                return void e.preventDefault();
            case a:
                return void(t.isOpen && t.$activeOption && (t.onOptionSelect({
                    currentTarget: t.$activeOption
                }), e.preventDefault()));
            case u:
                return void t.advanceSelection(-1, e);
            case p:
                return void t.advanceSelection(1, e);
            case w:
                return t.settings.selectOnTab && t.isOpen && t.$activeOption && (t.onOptionSelect({
                    currentTarget: t.$activeOption
                }), t.isFull() || e.preventDefault()),
                void(t.settings.create && t.createItem() && e.preventDefault());
            case g:
            case m:
                return void t.deleteSelection(e)
            }
            return !t.isFull() && !t.isInputHidden || (r ? e.metaKey : e.ctrlKey) ? void 0 : void e.preventDefault()
        }, onKeyUp: function (e) {
            var t = this;
            if (t.isLocked) return e && e.preventDefault();
            var n = t.$control_input.val() || "";
            t.lastValue !== n && (t.lastValue = n, t.onSearchChange(n), t.refreshOptions(), t.trigger("type", n))
        }, onSearchChange: function (e) {
            var t = this,
                n = t.settings.load;
            n && (t.loadedSearches.hasOwnProperty(e) || (t.loadedSearches[e] = !0, t.load(function (i) {
                n.apply(t, [e, i])
            })))
        }, onFocus: function (e) {
            var t = this,
                n = t.isFocused;
            if (t.isDisabled) return t.blur(),
            e && e.preventDefault(),
            !1;
            t.ignoreFocus || (t.isFocused = !0, "focus" === t.settings.preload && t.onSearchChange(""), n || t.trigger("focus"), t.$activeItems.length || (t.showInput(), t.setActiveItem(null), t.refreshOptions( !! t.settings.openOnFocus)), t.refreshState())
        }, onBlur: function (e, t) {
            var n = this;
            if (n.isFocused && (n.isFocused = !1, !n.ignoreFocus)) {
                if (!n.ignoreBlur && document.activeElement === n.$dropdown_content[0]) return n.ignoreBlur = !0,
                void n.onFocus(e);
                var i = function () {
                    n.close(),
                    n.setTextboxValue(""),
                    n.setActiveItem(null),
                    n.setActiveOption(null),
                    n.setCaret(n.items.length),
                    n.refreshState(),
                    (t || document.body).focus(),
                    n.ignoreFocus = !1,
                    n.trigger("blur")
                };
                n.ignoreFocus = !0,
                n.settings.create && n.settings.createOnBlur ? n.createItem(null, !1, i) : i()
            }
        }, onOptionHover: function (e) {
            this.ignoreHover || this.setActiveOption(e.currentTarget, !1)
        }, onOptionSelect: function (t) {
            var n, i, o = this;
            t.preventDefault && (t.preventDefault(), t.stopPropagation()),
            i = e(t.currentTarget),
            i.hasClass("create") ? o.createItem(null, function () {
                o.settings.closeAfterSelect && o.close()
            }) : void 0 !== (n = i.attr("data-value")) && (o.lastQuery = null, o.setTextboxValue(""), o.addItem(n), o.settings.closeAfterSelect ? o.close() : !o.settings.hideSelected && t.type && /mouse/.test(t.type) && o.setActiveOption(o.getOption(n)))
        }, onItemSelect: function (e) {
            var t = this;
            t.isLocked || "multi" === t.settings.mode && (e.preventDefault(), t.setActiveItem(e.currentTarget, e))
        }, load: function (e) {
            var t = this,
                n = t.$wrapper.addClass(t.settings.loadingClass);
            t.loading++,
            e.apply(t, [function (e) {
                t.loading = Math.max(t.loading - 1, 0),
                e && e.length && (t.addOption(e), t.refreshOptions(t.isFocused && !t.isInputHidden)),
                t.loading || n.removeClass(t.settings.loadingClass),
                t.trigger("load", e)
            }])
        }, setTextboxValue: function (e) {
            var t = this.$control_input;
            t.val() !== e && (t.val(e).triggerHandler("update"), this.lastValue = e)
        }, getValue: function () {
            return this.tagType === T && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
        }, setValue: function (e, t) {
            O(this, t ? [] : ["change"], function () {
                this.clear(t),
                this.addItems(e, t)
            })
        }, setActiveItem: function (t, n) {
            var i, o, r, s, a, l, u, c, d = this;
            if ("single" !== d.settings.mode) {
                if (t = e(t), !t.length) return e(d.$activeItems).removeClass("active"),
                d.$activeItems = [],
                void(d.isFocused && d.showInput());
                if ("mousedown" === (i = n && n.type.toLowerCase()) && d.isShiftDown && d.$activeItems.length) {
                    for (c = d.$control.children(".active:last"), s = Array.prototype.indexOf.apply(d.$control[0].childNodes, [c[0]]), a = Array.prototype.indexOf.apply(d.$control[0].childNodes, [t[0]]), s > a && (u = s, s = a, a = u), o = s; o <= a; o++) l = d.$control[0].childNodes[o],
                    -1 === d.$activeItems.indexOf(l) && (e(l).addClass("active"), d.$activeItems.push(l));
                    n.preventDefault()
                } else "mousedown" === i && d.isCtrlDown || "keydown" === i && this.isShiftDown ? t.hasClass("active") ? (r = d.$activeItems.indexOf(t[0]), d.$activeItems.splice(r, 1), t.removeClass("active")) : d.$activeItems.push(t.addClass("active")[0]) : (e(d.$activeItems).removeClass("active"), d.$activeItems = [t.addClass("active")[0]]);
                d.hideInput(),
                this.isFocused || d.focus()
            }
        }, setActiveOption: function (t, n, i) {
            var o, r, s, a, l, u = this;
            u.$activeOption && u.$activeOption.removeClass("active"),
            u.$activeOption = null,
            t = e(t),
            t.length && (u.$activeOption = t.addClass("active"), !n && S(n) || (o = u.$dropdown_content.height(), r = u.$activeOption.outerHeight(!0), n = u.$dropdown_content.scrollTop() || 0, s = u.$activeOption.offset().top - u.$dropdown_content.offset().top + n, a = s, l = s - o + r, s + r > o + n ? u.$dropdown_content.stop().animate({
                scrollTop: l
            }, i ? u.settings.scrollDuration : 0) : s < n && u.$dropdown_content.stop().animate({
                scrollTop: a
            }, i ? u.settings.scrollDuration : 0)))
        }, selectAll: function () {
            var e = this;
            "single" !== e.settings.mode && (e.$activeItems = Array.prototype.slice.apply(e.$control.children(":not(input)").addClass("active")), e.$activeItems.length && (e.hideInput(), e.close()), e.focus())
        }, hideInput: function () {
            var e = this;
            e.setTextboxValue(""),
            e.$control_input.css({
                opacity: 0,
                position: "absolute",
                left: e.rtl ? 1e4 : -1e4
            }),
            e.isInputHidden = !0
        }, showInput: function () {
            this.$control_input.css({
                opacity: 1,
                position: "relative",
                left: 0
            }),
            this.isInputHidden = !1
        }, focus: function () {
            var e = this;
            e.isDisabled || (e.ignoreFocus = !0, e.$control_input[0].focus(), window.setTimeout(function () {
                e.ignoreFocus = !1,
                e.onFocus()
            }, 0))
        }, blur: function (e) {
            this.$control_input[0].blur(),
            this.onBlur(null, e)
        }, getScoreFunction: function (e) {
            return this.sifter.getScoreFunction(e, this.getSearchOptions())
        }, getSearchOptions: function () {
            var e = this.settings,
                t = e.sortField;
            return "string" == typeof t && (t = [{
                field: t
            }]),
            {
                fields: e.searchField,
                conjunction: e.searchConjunction,
                sort: t
            }
        }, search: function (t) {
            var n, i, o, r = this,
                s = r.settings,
                a = this.getSearchOptions();
            if (s.score && "function" != typeof(o = r.settings.score.apply(this, [t]))) throw new Error('Selectize "score" setting must be a function that returns a function');
            if (t !== r.lastQuery ? (r.lastQuery = t, i = r.sifter.search(t, e.extend(a, {
                score: o
            })), r.currentResults = i) : i = e.extend(!0, {}, r.currentResults), s.hideSelected) for (n = i.items.length - 1; n >= 0; n--) - 1 !== r.items.indexOf(C(i.items[n].id)) && i.items.splice(n, 1);
            return i
        }, refreshOptions: function (t) {
            var n, o, r, s, a, l, u, c, d, p, h, f, g, m, y, v;
            void 0 === t && (t = !0);
            var b = this,
                w = e.trim(b.$control_input.val()),
                T = b.search(w),
                x = b.$dropdown_content,
                P = b.$activeOption && C(b.$activeOption.attr("data-value"));
            for (s = T.items.length, "number" == typeof b.settings.maxOptions && (s = Math.min(s, b.settings.maxOptions)), a = {}, l = [], n = 0; n < s; n++) for (u = b.options[T.items[n].id], c = b.render("option", u), d = u[b.settings.optgroupField] || "", p = e.isArray(d) ? d : [d], o = 0, r = p && p.length; o < r; o++) d = p[o],
            b.optgroups.hasOwnProperty(d) || (d = ""),
            a.hasOwnProperty(d) || (a[d] = [], l.push(d)),
            a[d].push(c);
            for (this.settings.lockOptgroupOrder && l.sort(function (e, t) {
                return (b.optgroups[e].$order || 0) - (b.optgroups[t].$order || 0)
            }), h = [], n = 0, s = l.length; n < s; n++) d = l[n],
            b.optgroups.hasOwnProperty(d) && a[d].length ? (f = b.render("optgroup_header", b.optgroups[d]) || "", f += a[d].join(""), h.push(b.render("optgroup", e.extend({}, b.optgroups[d], {
                html: f
            })))) : h.push(a[d].join(""));
            if (x.html(h.join("")), b.settings.highlight && T.query.length && T.tokens.length) for (n = 0, s = T.tokens.length; n < s; n++) i(x, T.tokens[n].regex);
            if (!b.settings.hideSelected) for (n = 0, s = b.items.length; n < s; n++) b.getOption(b.items[n]).addClass("selected");
            g = b.canCreate(w),
            g && (x.prepend(b.render("option_create", {
                input: w
            })), v = e(x[0].childNodes[0])),
            b.hasOptions = T.items.length > 0 || g,
            b.hasOptions ? (T.items.length > 0 ? (y = P && b.getOption(P), y && y.length ? m = y : "single" === b.settings.mode && b.items.length && (m = b.getOption(b.items[0])), m && m.length || (m = v && !b.settings.addPrecedence ? b.getAdjacentOption(v, 1) : x.find("[data-selectable]:first"))) : m = v, b.setActiveOption(m), t && !b.isOpen && b.open()) : (b.setActiveOption(null), t && b.isOpen && b.close())
        }, addOption: function (t) {
            var n, i, o, r = this;
            if (e.isArray(t)) for (n = 0, i = t.length; n < i; n++) r.addOption(t[n]);
            else(o = r.registerOption(t)) && (r.userOptions[o] = !0, r.lastQuery = null, r.trigger("option_add", o, t))
        }, registerOption: function (e) {
            var t = C(e[this.settings.valueField]);
            return !(!t || this.options.hasOwnProperty(t)) && (e.$order = e.$order || ++this.order, this.options[t] = e, t)
        }, registerOptionGroup: function (e) {
            var t = C(e[this.settings.optgroupValueField]);
            return !!t && (e.$order = e.$order || ++this.order, this.optgroups[t] = e, t)
        }, addOptionGroup: function (e, t) {
            t[this.settings.optgroupValueField] = e,
            (e = this.registerOptionGroup(t)) && this.trigger("optgroup_add", e, t)
        }, removeOptionGroup: function (e) {
            this.optgroups.hasOwnProperty(e) && (delete this.optgroups[e], this.renderCache = {}, this.trigger("optgroup_remove", e))
        }, clearOptionGroups: function () {
            this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
        }, updateOption: function (t, n) {
            var i, o, r, s, a, l, u, c = this;
            if (t = C(t), r = C(n[c.settings.valueField]), null !== t && c.options.hasOwnProperty(t)) {
                if ("string" != typeof r) throw new Error("Value must be set in option data");
                u = c.options[t].$order,
                r !== t && (delete c.options[t], -1 !== (s = c.items.indexOf(t)) && c.items.splice(s, 1, r)),
                n.$order = n.$order || u,
                c.options[r] = n,
                a = c.renderCache.item,
                l = c.renderCache.option,
                a && (delete a[t], delete a[r]),
                l && (delete l[t], delete l[r]),
                -1 !== c.items.indexOf(r) && (i = c.getItem(t), o = e(c.render("item", n)), i.hasClass("active") && o.addClass("active"), i.replaceWith(o)),
                c.lastQuery = null,
                c.isOpen && c.refreshOptions(!1)
            }
        }, removeOption: function (e, t) {
            var n = this;
            e = C(e);
            var i = n.renderCache.item,
                o = n.renderCache.option;
            i && delete i[e],
            o && delete o[e],
            delete n.userOptions[e],
            delete n.options[e],
            n.lastQuery = null,
            n.trigger("option_remove", e),
            n.removeItem(e, t)
        }, clearOptions: function () {
            var e = this;
            e.loadedSearches = {}, e.userOptions = {}, e.renderCache = {}, e.options = e.sifter.items = {}, e.lastQuery = null,
            e.trigger("option_clear"),
            e.clear()
        }, getOption: function (e) {
            return this.getElementWithValue(e, this.$dropdown_content.find("[data-selectable]"))
        }, getAdjacentOption: function (t, n) {
            var i = this.$dropdown.find("[data-selectable]"),
                o = i.index(t) + n;
            return o >= 0 && o < i.length ? i.eq(o) : e()
        }, getElementWithValue: function (t, n) {
            if (void 0 !== (t = C(t)) && null !== t) for (var i = 0, o = n.length; i < o; i++) if (n[i].getAttribute("data-value") === t) return e(n[i]);
            return e()
        }, getItem: function (e) {
            return this.getElementWithValue(e, this.$control.children())
        }, addItems: function (t, n) {
            for (var i = e.isArray(t) ? t : [t], o = 0, r = i.length; o < r; o++) this.isPending = o < r - 1,
            this.addItem(i[o], n)
        }, addItem: function (t, n) {
            O(this, n ? [] : ["change"], function () {
                var i, o, r, s, a, l = this,
                    u = l.settings.mode;
                if (t = C(t), -1 !== l.items.indexOf(t)) return void("single" === u && l.close());
                l.options.hasOwnProperty(t) && ("single" === u && l.clear(n), "multi" === u && l.isFull() || (i = e(l.render("item", l.options[t])), a = l.isFull(), l.items.splice(l.caretPos, 0, t), l.insertAtCaret(i), (!l.isPending || !a && l.isFull()) && l.refreshState(), l.isSetup && (r = l.$dropdown_content.find("[data-selectable]"), l.isPending || (o = l.getOption(t), s = l.getAdjacentOption(o, 1).attr("data-value"), l.refreshOptions(l.isFocused && "single" !== u), s && l.setActiveOption(l.getOption(s))), !r.length || l.isFull() ? l.close() : l.positionDropdown(), l.updatePlaceholder(), l.trigger("item_add", t, i), l.updateOriginalInput({
                    silent: n
                }))))
            })
        }, removeItem: function (e, t) {
            var n, i, o, r = this;
            n = "object" == typeof e ? e : r.getItem(e),
            e = C(n.attr("data-value")),
            -1 !== (i = r.items.indexOf(e)) && (n.remove(), n.hasClass("active") && (o = r.$activeItems.indexOf(n[0]), r.$activeItems.splice(o, 1)), r.items.splice(i, 1), r.lastQuery = null, !r.settings.persist && r.userOptions.hasOwnProperty(e) && r.removeOption(e, t), i < r.caretPos && r.setCaret(r.caretPos - 1), r.refreshState(), r.updatePlaceholder(), r.updateOriginalInput({
                silent: t
            }), r.positionDropdown(), r.trigger("item_remove", e, n))
        }, createItem: function (t, n) {
            var i = this,
                o = i.caretPos;
            t = t || e.trim(i.$control_input.val() || "");
            var r = arguments[arguments.length - 1];
            if ("function" != typeof r && (r = function () {}), "boolean" != typeof n && (n = !0), !i.canCreate(t)) return r(),
            !1;
            i.lock();
            var s = "function" == typeof i.settings.create ? this.settings.create : function (e) {
                var t = {};
                return t[i.settings.labelField] = e,
                t[i.settings.valueField] = e,
                t
            },
                a = I(function (e) {
                    if (i.unlock(), !e || "object" != typeof e) return r();
                    var t = C(e[i.settings.valueField]);
                    if ("string" != typeof t) return r();
                    i.setTextboxValue(""),
                    i.addOption(e),
                    i.setCaret(o),
                    i.addItem(t),
                    i.refreshOptions(n && "single" !== i.settings.mode),
                    r(e)
                }),
                l = s.apply(this, [t, a]);
            return void 0 !== l && a(l),
            !0
        }, refreshItems: function () {
            this.lastQuery = null,
            this.isSetup && this.addItem(this.items),
            this.refreshState(),
            this.updateOriginalInput()
        }, refreshState: function () {
            var e, t = this;
            t.isRequired && (t.items.length && (t.isInvalid = !1), t.$control_input.prop("required", e)),
            t.refreshClasses()
        }, refreshClasses: function () {
            var t = this,
                n = t.isFull(),
                i = t.isLocked;
            t.$wrapper.toggleClass("rtl", t.rtl),
            t.$control.toggleClass("focus", t.isFocused).toggleClass("disabled", t.isDisabled).toggleClass("required", t.isRequired).toggleClass("invalid", t.isInvalid).toggleClass("locked", i).toggleClass("full", n).toggleClass("not-full", !n).toggleClass("input-active", t.isFocused && !t.isInputHidden).toggleClass("dropdown-active", t.isOpen).toggleClass("has-options", !e.isEmptyObject(t.options)).toggleClass("has-items", t.items.length > 0),
            t.$control_input.data("grow", !n && !i)
        }, isFull: function () {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
        }, updateOriginalInput: function (e) {
            var t, n, i, o, r = this;
            if (e = e || {}, r.tagType === T) {
                for (i = [], t = 0, n = r.items.length; t < n; t++) o = r.options[r.items[t]][r.settings.labelField] || "",
                i.push('<option value="' + k(r.items[t]) + '" selected="selected">' + k(o) + "</option>");
                i.length || this.$input.attr("multiple") || i.push('<option value="" selected="selected"></option>'),
                r.$input.html(i.join(""))
            } else r.$input.val(r.getValue()),
            r.$input.attr("value", r.$input.val());
            r.isSetup && (e.silent || r.trigger("change", r.$input.val()))
        }, updatePlaceholder: function () {
            if (this.settings.placeholder) {
                var e = this.$control_input;
                this.items.length ? e.removeAttr("placeholder") : e.attr("placeholder", this.settings.placeholder),
                e.triggerHandler("update", {
                    force: !0
                })
            }
        }, open: function () {
            var e = this;
            e.isLocked || e.isOpen || "multi" === e.settings.mode && e.isFull() || (e.focus(), e.isOpen = !0, e.refreshState(), e.$dropdown.css({
                visibility: "hidden",
                display: "block"
            }), e.positionDropdown(), e.$dropdown.css({
                visibility: "visible"
            }), e.trigger("dropdown_open", e.$dropdown))
        }, close: function () {
            var e = this,
                t = e.isOpen;
            "single" === e.settings.mode && e.items.length && e.hideInput(),
            e.isOpen = !1,
            e.$dropdown.hide(),
            e.setActiveOption(null),
            e.refreshState(),
            t && e.trigger("dropdown_close", e.$dropdown)
        }, positionDropdown: function () {
            var e = this.$control,
                t = "body" === this.settings.dropdownParent ? e.offset() : e.position();
            t.top += e.outerHeight(!0),
            this.$dropdown.css({
                width: e.outerWidth(),
                top: t.top,
                left: t.left
            })
        }, clear: function (e) {
            var t = this;
            t.items.length && (t.$control.children(":not(input)").remove(), t.items = [], t.lastQuery = null, t.setCaret(0), t.setActiveItem(null), t.updatePlaceholder(), t.updateOriginalInput({
                silent: e
            }), t.refreshState(), t.showInput(), t.trigger("clear"))
        }, insertAtCaret: function (t) {
            var n = Math.min(this.caretPos, this.items.length);
            0 === n ? this.$control.prepend(t) : e(this.$control[0].childNodes[n]).before(t),
            this.setCaret(n + 1)
        }, deleteSelection: function (t) {
            var n, i, o, r, s, a, l, u, c, d = this;
            if (o = t && t.keyCode === g ? -1 : 1, r = A(d.$control_input[0]), d.$activeOption && !d.settings.hideSelected && (l = d.getAdjacentOption(d.$activeOption, -1).attr("data-value")), s = [], d.$activeItems.length) {
                for (c = d.$control.children(".active:" + (o > 0 ? "last" : "first")), a = d.$control.children(":not(input)").index(c), o > 0 && a++, n = 0, i = d.$activeItems.length; n < i; n++) s.push(e(d.$activeItems[n]).attr("data-value"));
                t && (t.preventDefault(), t.stopPropagation())
            } else(d.isFocused || "single" === d.settings.mode) && d.items.length && (o < 0 && 0 === r.start && 0 === r.length ? s.push(d.items[d.caretPos - 1]) : o > 0 && r.start === d.$control_input.val().length && s.push(d.items[d.caretPos]));
            if (!s.length || "function" == typeof d.settings.onDelete && !1 === d.settings.onDelete.apply(d, [s])) return !1;
            for (void 0 !== a && d.setCaret(a); s.length;) d.removeItem(s.pop());
            return d.showInput(),
            d.positionDropdown(),
            d.refreshOptions(!0),
            l && (u = d.getOption(l), u.length && d.setActiveOption(u)),
            !0
        }, advanceSelection: function (e, t) {
            var n, i, o, r, s, a = this;
            0 !== e && (a.rtl && (e *= -1), n = e > 0 ? "last" : "first", i = A(a.$control_input[0]), a.isFocused && !a.isInputHidden ? (r = a.$control_input.val().length, (e < 0 ? 0 === i.start && 0 === i.length : i.start === r) && !r && a.advanceCaret(e, t)) : (s = a.$control.children(".active:" + n), s.length && (o = a.$control.children(":not(input)").index(s), a.setActiveItem(null), a.setCaret(e > 0 ? o + 1 : o))))
        }, advanceCaret: function (e, t) {
            var n, i, o = this;
            0 !== e && (n = e > 0 ? "next" : "prev", o.isShiftDown ? (i = o.$control_input[n](), i.length && (o.hideInput(), o.setActiveItem(i), t && t.preventDefault())) : o.setCaret(o.caretPos + e))
        }, setCaret: function (t) {
            var n = this;
            if (t = "single" === n.settings.mode ? n.items.length : Math.max(0, Math.min(n.items.length, t)), !n.isPending) {
                var i, o, r, s;
                for (r = n.$control.children(":not(input)"), i = 0, o = r.length; i < o; i++) s = e(r[i]).detach(),
                i < t ? n.$control_input.before(s) : n.$control.append(s)
            }
            n.caretPos = t
        }, lock: function () {
            this.close(),
            this.isLocked = !0,
            this.refreshState()
        }, unlock: function () {
            this.isLocked = !1,
            this.refreshState()
        }, disable: function () {
            var e = this;
            e.$input.prop("disabled", !0),
            e.$control_input.prop("disabled", !0).prop("tabindex", -1),
            e.isDisabled = !0,
            e.lock()
        }, enable: function () {
            var e = this;
            e.$input.prop("disabled", !1),
            e.$control_input.prop("disabled", !1).prop("tabindex", e.tabIndex),
            e.isDisabled = !1,
            e.unlock()
        }, destroy: function () {
            var t = this,
                n = t.eventNS,
                i = t.revertSettings;
            t.trigger("destroy"),
            t.off(),
            t.$wrapper.remove(),
            t.$dropdown.remove(),
            t.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({
                tabindex: i.tabindex
            }).show(),
            t.$control_input.removeData("grow"),
            t.$input.removeData("selectize"),
            e(window).off(n),
            e(document).off(n),
            e(document.body).off(n),
            delete t.$input[0].selectize
        }, render: function (e, t) {
            var n, i, o = "",
                r = !1,
                s = this,
                a = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
            return "option" !== e && "item" !== e || (n = C(t[s.settings.valueField]), r = !! n),
            r && (S(s.renderCache[e]) || (s.renderCache[e] = {}), s.renderCache[e].hasOwnProperty(n)) ? s.renderCache[e][n] : (o = s.settings.render[e].apply(this, [t, k]), "option" !== e && "option_create" !== e || (o = o.replace(a, "<$1 data-selectable")), "optgroup" === e && (i = t[s.settings.optgroupValueField] || "", o = o.replace(a, '<$1 data-group="' + j(k(i)) + '"')), "option" !== e && "item" !== e || (o = o.replace(a, '<$1 data-value="' + j(k(n || "")) + '"')), r && (s.renderCache[e][n] = o), o)
        }, clearCache: function (e) {
            var t = this;
            void 0 === e ? t.renderCache = {} : delete t.renderCache[e]
        }, canCreate: function (e) {
            var t = this;
            if (!t.settings.create) return !1;
            var n = t.settings.createFilter;
            return e.length && ("function" != typeof n || n.apply(t, [e])) && ("string" != typeof n || new RegExp(n).test(e)) && (!(n instanceof RegExp) || n.test(e))
        }
    }),
    D.count = 0,
    D.defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        closeAfterSelect: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: !1,
        sortField: "$order",
        searchField: ["text"],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        copyClassesToDropdown: !0,
        render: {}
    }, e.fn.selectize = function (t) {
        var n = e.fn.selectize.defaults,
            i = e.extend({}, n, t),
            o = i.dataAttr,
            r = i.labelField,
            s = i.valueField,
            a = i.optgroupField,
            l = i.optgroupLabelField,
            u = i.optgroupValueField,
            c = function (t, n) {
                var a, l, u, c, d = t.attr(o);
                if (d) for (n.options = JSON.parse(d), a = 0, l = n.options.length; a < l; a++) n.items.push(n.options[a][s]);
                else {
                    var p = e.trim(t.val() || "");
                    if (!i.allowEmptyOption && !p.length) return;
                    for (u = p.split(i.delimiter), a = 0, l = u.length; a < l; a++) c = {}, c[r] = u[a],
                    c[s] = u[a],
                    n.options.push(c);
                    n.items = u
                }
            },
            d = function (t, n) {
                var c, d, p, h, f = n.options,
                    g = {},
                    m = function (e) {
                        var t = o && e.attr(o);
                        return "string" == typeof t && t.length ? JSON.parse(t) : null
                    },
                    y = function (t, o) {
                        t = e(t);
                        var l = C(t.attr("value"));
                        if (l || i.allowEmptyOption) if (g.hasOwnProperty(l)) {
                            if (o) {
                                var u = g[l][a];
                                u ? e.isArray(u) ? u.push(o) : g[l][a] = [u, o] : g[l][a] = o
                            }
                        } else {
                            var c = m(t) || {};
                            c[r] = c[r] || t.text(),
                            c[s] = c[s] || l,
                            c[a] = c[a] || o,
                            g[l] = c,
                            f.push(c),
                            t.is(":selected") && n.items.push(l)
                        }
                    },
                    v = function (t) {
                        var i, o, r, s, a;
                        for (t = e(t), r = t.attr("label"), r && (s = m(t) || {}, s[l] = r, s[u] = r, n.optgroups.push(s)), a = e("option", t), i = 0, o = a.length; i < o; i++) y(a[i], r)
                    };
                for (n.maxItems = t.attr("multiple") ? null : 1, h = t.children(), c = 0, d = h.length; c < d; c++) p = h[c].tagName.toLowerCase(),
                "optgroup" === p ? v(h[c]) : "option" === p && y(h[c])
            };
        return this.each(function () {
            if (!this.selectize) {
                var o = e(this),
                    r = this.tagName.toLowerCase(),
                    s = o.attr("placeholder") || o.attr("data-placeholder");
                s || i.allowEmptyOption || (s = o.children('option[value=""]').text());
                var a = {
                    placeholder: s,
                    options: [],
                    optgroups: [],
                    items: []
                };
                "select" === r ? d(o, a) : c(o, a),
                new D(o, e.extend(!0, {}, n, a, t))
            }
        })
    }, e.fn.selectize.defaults = D.defaults,
    e.fn.selectize.support = {
        validity: P
    }, D.define("drag_drop", function (t) {
        if (!e.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
            var n = this;
            n.lock = function () {
                var e = n.lock;
                return function () {
                    var t = n.$control.data("sortable");
                    return t && t.disable(),
                    e.apply(n, arguments)
                }
            }(),
            n.unlock = function () {
                var e = n.unlock;
                return function () {
                    var t = n.$control.data("sortable");
                    return t && t.enable(),
                    e.apply(n, arguments)
                }
            }(),
            n.setup = function () {
                var t = n.setup;
                return function () {
                    t.apply(this, arguments);
                    var i = n.$control.sortable({
                        items: "[data-value]",
                        forcePlaceholderSize: !0,
                        disabled: n.isLocked,
                        start: function (e, t) {
                            t.placeholder.css("width", t.helper.css("width")),
                            i.css({
                                overflow: "visible"
                            })
                        }, stop: function () {
                            i.css({
                                overflow: "hidden"
                            });
                            var t = n.$activeItems ? n.$activeItems.slice() : null,
                                o = [];
                            i.children("[data-value]").each(function () {
                                o.push(e(this).attr("data-value"))
                            }),
                            n.setValue(o),
                            n.setActiveItem(t)
                        }
                    })
                }
            }()
        }
    }),
    D.define("dropdown_header", function (t) {
        var n = this;
        t = e.extend({
            title: "Untitled",
            headerClass: "selectize-dropdown-header",
            titleRowClass: "selectize-dropdown-header-title",
            labelClass: "selectize-dropdown-header-label",
            closeClass: "selectize-dropdown-header-close",
            html: function (e) {
                return '<div class="' + e.headerClass + '"><div class="' + e.titleRowClass + '"><span class="' + e.labelClass + '">' + e.title + '</span><a href="javascript:void(0)" class="' + e.closeClass + '">&times;</a></div></div>'
            }
        }, t),
        n.setup = function () {
            var i = n.setup;
            return function () {
                i.apply(n, arguments),
                n.$dropdown_header = e(t.html(t)),
                n.$dropdown.prepend(n.$dropdown_header)
            }
        }()
    }),
    D.define("optgroup_columns", function (t) {
        var n = this;
        t = e.extend({
            equalizeWidth: !0,
            equalizeHeight: !0
        }, t),
        this.getAdjacentOption = function (t, n) {
            var i = t.closest("[data-group]").find("[data-selectable]"),
                o = i.index(t) + n;
            return o >= 0 && o < i.length ? i.eq(o) : e()
        }, this.onKeyDown = function () {
            var e = n.onKeyDown;
            return function (t) {
                var i, o, r, s;
                return !this.isOpen || t.keyCode !== u && t.keyCode !== p ? e.apply(this, arguments) : (n.ignoreHover = !0, s = this.$activeOption.closest("[data-group]"), i = s.find("[data-selectable]").index(this.$activeOption), s = t.keyCode === u ? s.prev("[data-group]") : s.next("[data-group]"), r = s.find("[data-selectable]"), o = r.eq(Math.min(r.length - 1, i)), void(o.length && this.setActiveOption(o)))
            }
        }();
        var i = function () {
            var e, t = i.width,
                n = document;
            return void 0 === t && (e = n.createElement("div"), e.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', e = e.firstChild, n.body.appendChild(e), t = i.width = e.offsetWidth - e.clientWidth, n.body.removeChild(e)),
            t
        },
            o = function () {
                var o, r, s, a, l, u, c;
                if (c = e("[data-group]", n.$dropdown_content), (r = c.length) && n.$dropdown_content.width()) {
                    if (t.equalizeHeight) {
                        for (s = 0, o = 0; o < r; o++) s = Math.max(s, c.eq(o).height());
                        c.css({
                            height: s
                        })
                    }
                    t.equalizeWidth && (u = n.$dropdown_content.innerWidth() - i(), a = Math.round(u / r), c.css({
                        width: a
                    }), r > 1 && (l = u - a * (r - 1), c.eq(r - 1).css({
                        width: l
                    })))
                }
            };
        (t.equalizeHeight || t.equalizeWidth) && (_.after(this, "positionDropdown", o), _.after(this, "refreshOptions", o))
    }),
    D.define("remove_button", function (t) {
        if ("single" !== this.settings.mode) {
            t = e.extend({
                label: "&times;",
                title: "Remove",
                className: "remove",
                append: !0
            }, t);
            var n = this,
                i = '<a href="javascript:void(0)" class="' + t.className + '" tabindex="-1" title="' + k(t.title) + '">' + t.label + "</a>",
                o = function (e, t) {
                    var n = e.search(/(<\/[^>]+>\s*)$/);
                    return e.substring(0, n) + t + e.substring(n)
                };
            this.setup = function () {
                var r = n.setup;
                return function () {
                    if (t.append) {
                        var s = n.settings.render.item;
                        n.settings.render.item = function (e) {
                            return o(s.apply(this, arguments), i)
                        }
                    }
                    r.apply(this, arguments),
                    this.$control.on("click", "." + t.className, function (t) {
                        if (t.preventDefault(), !n.isLocked) {
                            var i = e(t.currentTarget).parent();
                            n.setActiveItem(i),
                            n.deleteSelection() && n.setCaret(n.items.length)
                        }
                    })
                }
            }()
        }
    }),
    D.define("restore_on_backspace", function (e) {
        var t = this;
        e.text = e.text ||
        function (e) {
            return e[this.settings.labelField]
        }, this.onKeyDown = function () {
            var n = t.onKeyDown;
            return function (t) {
                var i, o;
                return t.keyCode === g && "" === this.$control_input.val() && !this.$activeItems.length && (i = this.caretPos - 1) >= 0 && i < this.items.length ? (o = this.options[this.items[i]], this.deleteSelection(t) && (this.setTextboxValue(e.text.apply(this, [o])), this.refreshOptions(!0)), void t.preventDefault()) : n.apply(this, arguments)
            }
        }()
    }),
    D
});
var ytp = ytp || {},
    getYTPVideoID = function (e) {
        var t, n;
        return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), n = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = n ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("https") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], n = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, n = t ? null : e),
        {
            videoID: t,
            playlistID: n
        }
    };
!
function (jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.0.8",
        build: "5878",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            mobileFallbackImage: null,
            gaTrack: !0,
            optimizeDisplay: !0,
            align: "center,center",
            onReady: function (e) {}
        }, controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        }, controlBar: null,
        loading: null,
        locationProtocol: "https:",
        filters: {
            grayscale: {
                value: 0,
                unit: "%"
            }, hue_rotate: {
                value: 0,
                unit: "deg"
            }, invert: {
                value: 0,
                unit: "%"
            }, opacity: {
                value: 0,
                unit: "%"
            }, saturate: {
                value: 0,
                unit: "%"
            }, sepia: {
                value: 0,
                unit: "%"
            }, brightness: {
                value: 0,
                unit: "%"
            }, contrast: {
                value: 0,
                unit: "%"
            }, blur: {
                value: 0,
                unit: "px"
            }
        }, buildPlayer: function (options) {
            return this.each(function () {
                var YTPlayer = this,
                    $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0,
                YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filters = jQuery.mbYTPlayer.filters,
                YTPlayer.filtersEnabled = !0,
                YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(),
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                void 0 !== property && void 0 !== property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol),
                jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property),
                YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)),
                "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999),
                YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function () {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()),
                YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1),
                $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1,
                YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : !! $YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).videoID,
                    playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : !! $YTPlayer.attr("href") && getYTPVideoID($YTPlayer.attr("href")).playlistID;
                YTPlayer.videoID = videoID,
                YTPlayer.playlistID = playlistID,
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    modestbranding: 1,
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {
                    html5: 1
                }), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1), YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length,
                    YTPlayer.isPlayer = !1,
                    isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide();
                    var overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay");
                    YTPlayer.isPlayer && overlay.on("click", function () {
                        $YTPlayer.YTPTogglePlay()
                    });
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    wrapper.css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    });
                    var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                    if (playerBox.css({
                        position: "absolute",
                        zIndex: 0,
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        overflow: "hidden"
                    }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
                        "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                    }), YTPlayer.isBackground ? (jQuery("body").css({
                        boxSizing: "border-box"
                    }), wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({
                        position: "relative"
                    }), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({
                        opacity: 1
                    }), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                    }).on("mouseleave", function () {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                    }), ytp.YTAPIReady) setTimeout(function () {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100);
                    else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script><\/script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    if (jQuery.browser.mobile && !YTPlayer.canPlayOnMobile) return YTPlayer.opt.mobileFallbackImage && YTPlayer.opt.containment.css({
                        backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat"
                    }),
                    $YTPlayer.remove(),
                    void jQuery(document).trigger("YTPUnavailable");
                    jQuery(document).on("YTAPIReady", function () {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = void 0 === YTPlayer.opt.autoPlay ? !! YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({
                                            maxWidth: "100%"
                                        });
                                        var h = .563 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({
                                            maxHeight: h
                                        })
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        width: "100%",
                                        height: h,
                                        playerVars: playerVars,
                                        events: {
                                            onReady: function (e) {
                                                YTPlayer.player = e.target,
                                                playerBox.css({
                                                    opacity: 1
                                                }),
                                                YTPlayer.wrapper.css({
                                                    opacity: 1
                                                })
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function (e) {
                                            YTPlayer.player = e.target,
                                            YTPlayer.isReady || (YTPlayer.isReady = !(YTPlayer.isPlayer && !YTPlayer.opt.autoPlay), YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
                                                $YTPlayer.optimizeDisplay()
                                            }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                        }, onStateChange: function (event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.preventTrigger) return void(YTPlayer.preventTrigger = !1);
                                                YTPlayer.state = state;
                                                var eventType;
                                                switch (state) {
                                                case -1:
                                                    eventType = "YTPUnstarted";
                                                    break;
                                                case 0:
                                                    eventType = "YTPEnd";
                                                    break;
                                                case 1:
                                                    eventType = "YTPPlay",
                                                    YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),
                                                    "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]),
                                                    "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                    break;
                                                case 2:
                                                    eventType = "YTPPause",
                                                    YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 3:
                                                    YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),
                                                    eventType = "YTPBuffering",
                                                    YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 5:
                                                    eventType = "YTPCued"
                                                }
                                                var YTPEvent = jQuery.Event(eventType);
                                                YTPEvent.time = YTPlayer.currentTime,
                                                YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                            }
                                        }, onPlaybackQualityChange: function (e) {
                                            var t = e.target.getPlaybackQuality(),
                                                n = jQuery.Event("YTPQualityChange");
                                            n.quality = t,
                                            jQuery(YTPlayer).trigger(n)
                                        }, onError: function (e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()),
                                            2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(),
                                            "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                            }
                        }))
                    }),
                    $YTPlayer.off("YTPTime.mask"),
                    jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        }, getDataFromAPI: function (e) {
            if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
                if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                    var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }),
                    e.opt.backgroundUrl = t
                }
            }), e.videoData) setTimeout(function () {
                e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio,
                e.dataReceived = !0,
                jQuery(e).trigger("YTPChanged");
                var t = jQuery.Event("YTPData");
                t.prop = {};
                for (var n in e.videoData) t.prop[n] = e.videoData[n];
                jQuery(e).trigger(t)
            }, 500),
            e.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (t) {
                function n(t) {
                    e.videoData = {}, e.videoData.id = e.videoID,
                    e.videoData.channelTitle = t.channelTitle,
                    e.videoData.title = t.title,
                    e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...",
                    e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio,
                    e.opt.ratio = e.videoData.aspectratio,
                    e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null,
                    e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null,
                    e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null,
                    jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                }
                e.dataReceived = !0,
                jQuery(e).trigger("YTPChanged"),
                n(t.items[0].snippet),
                e.hasData = !0;
                var i = jQuery.Event("YTPData");
                i.prop = {};
                for (var o in e.videoData) i.prop[o] = e.videoData[o];
                jQuery(e).trigger(i)
            });
            else {
                if (setTimeout(function () {
                    jQuery(e).trigger("YTPChanged")
                }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }),
                    e.opt.backgroundUrl = t
                }
                e.videoData = null,
                e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }!e.isPlayer || e.opt.autoPlay || jQuery.browser.mobile || (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        }, removeStoredData: function () {
            jQuery.mbStorage.remove()
        }, getVideoData: function () {
            return this.get(0).videoData
        }, getVideoID: function () {
            return this.get(0).videoID || !1
        }, setVideoQuality: function (e) {
            this.get(0).player.setPlaybackQuality(e)
        }, playlist: function (e, t, n, i) {
            var o = this,
                r = o.get(0);
            return r.isPlayList = !0,
            t && (e = jQuery.shuffle(e)),
            r.videoID || (r.videos = e, r.videoCounter = 0, r.videoLength = e.length, jQuery(r).data("property", e[0]), jQuery(r).mb_YTPlayer()),
            "function" == typeof n && jQuery(r).one("YTPChanged", function () {
                n(r)
            }),
            jQuery(r).on("YTPEnd", function () {
                i = void 0 === i || i,
                jQuery(r).playNext(i)
            }),
            o
        }, playNext: function (e) {
            var t = this.get(0);
            return t.checkForStartAt && (clearTimeout(t.checkForStartAt), clearInterval(t.getState)),
            t.videoCounter++,
            t.videoCounter >= t.videoLength && e && (t.videoCounter = 0),
            t.videoCounter < t.videoLength ? jQuery(t).changeMovie(t.videos[t.videoCounter]) : t.videoCounter--,
            this
        }, playPrev: function () {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)),
            e.videoCounter--,
            e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1),
            jQuery(e).changeMovie(e.videos[e.videoCounter]),
            this
        }, playIndex: function (e) {
            var t = this.get(0);
            return e -= 1,
            t.checkForStartAt && (clearInterval(t.checkForStartAt), clearInterval(t.getState)),
            t.videoCounter = e,
            t.videoCounter >= t.videoLength - 1 && (t.videoCounter = t.videoLength - 1),
            jQuery(t).changeMovie(t.videos[t.videoCounter]),
            this
        }, changeMovie: function (e) {
            var t = this,
                n = t.get(0);
            n.opt.startAt = 0,
            n.opt.stopAt = 0,
            n.opt.mask = !1,
            n.opt.mute = !0,
            n.hasData = !1,
            n.hasChanged = !0,
            n.player.loopTime = void 0,
            e && jQuery.extend(n.opt, e),
            n.videoID = getYTPVideoID(n.opt.videoURL).videoID,
            "true" == n.opt.loop && (n.opt.loop = 9999),
            jQuery(n.playerEl).CSSAnimate({
                opacity: 0
            }, 200, function () {
                var e = jQuery.Event("YTPChangeMovie");
                e.time = n.currentTime,
                e.videoId = n.videoID,
                jQuery(n).trigger(e),
                jQuery(n).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + n.videoID), 1, n.opt.quality),
                jQuery(n).optimizeDisplay(),
                jQuery.mbYTPlayer.checkForState(n),
                jQuery.mbYTPlayer.getDataFromAPI(n)
            }),
            jQuery.mbYTPlayer.applyMask(n)
        }, getPlayer: function () {
            return jQuery(this).get(0).player
        }, playerDestroy: function () {
            var e = this.get(0);
            return ytp.YTAPIReady = !0,
            ytp.backgroundIsInited = !1,
            e.isInit = !1,
            e.videoID = null,
            e.wrapper.remove(),
            jQuery("#controlBar_" + e.id).remove(),
            clearInterval(e.checkForStartAt),
            clearInterval(e.getState),
            this
        }, fullscreen: function (real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }
            function RunPrefixMethod(e, t) {
                for (var n, i, o = ["webkit", "moz", "ms", "o", ""], r = 0; r < o.length && !e[n];) {
                    if (n = t, "" == o[r] && (n = n.substr(0, 1).toLowerCase() + n.substr(1)), n = o[r] + n, "undefined" != (i = typeof e[n])) return o = [o[r]],
                    "function" == i ? e[n]() : e[n];
                    r++
                }
            }
            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }
            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            void 0 === real && (real = YTPlayer.opt.realfullscreen),
            real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id),
                fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                    RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen") ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, 500), videoWrapper.css({
                        zIndex: 0
                    }), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({
                cursor: "auto"
            }), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, 500), videoWrapper.css({
                zIndex: 0
            })), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (e) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }),
                clearTimeout(YTPlayer.hideCursor),
                jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({
                opacity: 0
            }), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 1e3),
                YTPlayer.wrapper.append(controls),
                jQuery(YTPlayer).optimizeDisplay(),
                YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, 500)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0),
            this
        }, toggleLoops: function () {
            var e = this.get(0),
                t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1),
            this
        }, play: function () {
            var e = this.get(0);
            return e.isReady ? (e.player.playVideo(), e.wrapper.CSSAnimate({
                opacity: e.isAlone ? 1 : e.opt.opacity
            }, 2e3), jQuery(e.playerEl).CSSAnimate({
                opacity: 1
            }, 1e3), jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), e.state = 1, jQuery(e).css("background-image", "none"), this) : this
        }, togglePlay: function (e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(),
            "function" == typeof e && e(t.state),
            this
        }, stop: function () {
            var e = this.get(0);
            return jQuery("#controlBar_" + e.id).find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play),
            e.player.stopVideo(),
            this
        }, pause: function () {
            var e = this.get(0);
            return e.player.pauseVideo(),
            e.state = 2,
            this
        }, seekTo: function (e) {
            return this.get(0).player.seekTo(e, !0),
            this
        }, setVolume: function (e) {
            var t = this.get(0);
            return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(),
            this
        }, toggleVolume: function () {
            var e = this.get(0);
            if (e) return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
        }, mute: function () {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(),
                e.isMute = !0,
                e.player.setVolume(0),
                e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0);
                jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.unmute),
                jQuery(e).addClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var t = jQuery.Event("YTPMuted");
                return t.time = e.currentTime,
                e.canTrigger && jQuery(e).trigger(t),
                this
            }
        }, unmute: function () {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(),
                e.isMute = !1,
                e.player.setVolume(e.opt.vol),
                e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                jQuery("#controlBar_" + e.id).find(".mb_YTPMuteUnmute").html(jQuery.mbYTPlayer.controls.mute),
                jQuery(e).removeClass("isMuted"),
                e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var t = jQuery.Event("YTPUnmuted");
                return t.time = e.currentTime,
                e.canTrigger && jQuery(e).trigger(t),
                this
            }
        }, applyFilter: function (e, t) {
            return this.each(function () {
                var n = this;
                n.filters[e].value = t,
                n.filtersEnabled && jQuery(n).YTPEnableFilters()
            })
        }, applyFilters: function (e) {
            return this.each(function () {
                var t = this;
                if (!t.isReady) return void jQuery(t).on("YTPReady", function () {
                    jQuery(t).YTPApplyFilters(e)
                });
                for (var n in e) jQuery(t).YTPApplyFilter(n, e[n]);
                jQuery(t).trigger("YTPFiltersApplied")
            })
        }, toggleFilter: function (e, t) {
            return this.each(function () {
                var n = this;
                n.filters[e].value ? n.filters[e].value = 0 : n.filters[e].value = t,
                n.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        }, toggleFilters: function (e) {
            return this.each(function () {
                var t = this;
                t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")),
                "function" == typeof e && e(t.filtersEnabled)
            })
        }, disableFilters: function () {
            return this.each(function () {
                var e = this,
                    t = jQuery(e.playerEl);
                t.css("-webkit-filter", ""),
                t.css("filter", ""),
                e.filtersEnabled = !1
            })
        }, enableFilters: function () {
            return this.each(function () {
                var e = this,
                    t = jQuery(e.playerEl),
                    n = "";
                for (var i in e.filters) e.filters[i].value && (n += i.replace("_", "-") + "(" + e.filters[i].value + e.filters[i].unit + ") ");
                t.css("-webkit-filter", n),
                t.css("filter", n),
                e.filtersEnabled = !0
            })
        }, removeFilter: function (e, t) {
            return this.each(function () {
                var n = this;
                if ("function" == typeof e && (t = e, e = null), e) jQuery(this).YTPApplyFilter(e, 0),
                "function" == typeof t && t(e);
                else for (var i in n.filters) jQuery(this).YTPApplyFilter(i, 0),
                "function" == typeof t && t(i)
            })
        }, getFilters: function () {
            return this.get(0).filters
        }, addMask: function (e) {
            var t = this.get(0),
                n = t.overlay;
            e || (e = t.actualMask);
            var i = jQuery("<img/>").attr("src", e).on("load", function () {
                n.CSSAnimate({
                    opacity: 0
                }, 500, function () {
                    t.hasMask = !0,
                    i.remove(),
                    n.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }),
                    n.CSSAnimate({
                        opacity: 1
                    }, 500)
                })
            });
            return this
        }, removeMask: function () {
            var e = this.get(0),
                t = e.overlay;
            return t.CSSAnimate({
                opacity: 0
            }, 500, function () {
                e.hasMask = !1,
                t.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }),
                t.CSSAnimate({
                    opacity: 1
                }, 500)
            }),
            this
        }, applyMask: function (e) {
            var t = jQuery(e);
            if (t.off("YTPTime.mask"), e.opt.mask) if ("string" == typeof e.opt.mask) t.YTPAddMask(e.opt.mask),
            e.actualMask = e.opt.mask;
            else if ("object" == typeof e.opt.mask) {
                for (var n in e.opt.mask) e.opt.mask[n] && jQuery("<img/>").attr("src", e.opt.mask[n]);
                e.opt.mask[0] && t.YTPAddMask(e.opt.mask[0]),
                t.on("YTPTime.mask", function (n) {
                    for (var i in e.opt.mask) n.time == i && (e.opt.mask[i] ? (t.YTPAddMask(e.opt.mask[i]), e.actualMask = e.opt.mask[i]) : t.YTPRemoveMask())
                })
            }
        }, toggleMask: function () {
            var e = this.get(0),
                t = $(e);
            return e.hasMask ? t.YTPRemoveMask() : t.YTPAddMask(),
            this
        }, manageProgress: function () {
            var e = this.get(0),
                t = jQuery("#controlBar_" + e.id),
                n = t.find(".mb_YTPProgress"),
                i = t.find(".mb_YTPLoaded"),
                o = t.find(".mb_YTPseekbar"),
                r = n.outerWidth(),
                s = Math.floor(e.player.getCurrentTime()),
                a = Math.floor(e.player.getDuration()),
                l = s * r / a,
                u = 100 * e.player.getVideoLoadedFraction();
            return i.css({
                left: 0,
                width: u + "%"
            }),
            o.css({
                left: 0,
                width: l
            }),
            {
                totalTime: a,
                currentTime: s
            }
        }, buildControls: function (YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }),
                    volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                        display: "inline-block"
                    });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"),
                    vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("https") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                    window.open(vURL, "viewOnYT")
                }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
                        timeBar.css({
                            width: e.clientX - timeBar.offset().left
                        }),
                        YTPlayer.timeW = e.clientX - timeBar.offset().left,
                        YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        });
                        var t = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer.goto = timeBar.outerWidth() * t / progressBar.outerWidth(),
                        YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0),
                        YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                            width: 0
                        })
                    }),
                    loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar),
                buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),
                data.showYTLogo && buttonBar.append(movieUrl),
                (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo),
                YTPlayer.controlBar.append(buttonBar).append(progressBar),
                YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)),
                volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function (e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(),
                        YTPlayer.player.setVolume(e.value),
                        YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        }, checkForState: function (YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 400;
            return clearInterval(YTPlayer.getState),
            jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function () {
                var prog = jQuery(YTPlayer).YTPManageProgress(),
                    $YTPlayer = jQuery(YTPlayer),
                    data = YTPlayer.opt,
                    startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1,
                    stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime,
                    jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function () {
                        YTPlayer.isEnded = !1
                    }, 1e3), YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                            YTPlayer.player.loopTime = void 0,
                            clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.currentTime,
                            void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0,
                    YTPlayer.preventTrigger = !0,
                    YTPlayer.state = 2,
                    jQuery(YTPlayer).YTPPause(),
                    void YTPlayer.wrapper.CSSAnimate({
                        opacity: 0
                    }, 500, function () {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        var e = jQuery.Event("YTPEnd");
                        e.time = YTPlayer.currentTime,
                        jQuery(YTPlayer).trigger(e),
                        YTPlayer.player.seekTo(startAt, !0),
                        YTPlayer.isBackground || YTPlayer.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                            backgroundSize: "cover"
                        })
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1,
                    startAt = startAt || 1,
                    YTPlayer.preventTrigger = !0,
                    YTPlayer.state = 2,
                    jQuery(YTPlayer).YTPPause(),
                    YTPlayer.player.seekTo(startAt, !0),
                    $YTPlayer.YTPPlay()
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        }, getTime: function () {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        }, getTotalTime: function () {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.totalTime)
        }, checkForStart: function (e) {
            var t = jQuery(e);
            if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();
            if (e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.controlBar = !1, e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                var n = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? n + " retina" : n)
            } else e.overlay.removeClass(function (e, t) {
                var n = t.split(" "),
                    i = [];
                return jQuery.each(n, function (e, t) {
                    /raster.*/.test(t) && i.push(t)
                }),
                i.push("retina"),
                i.join(" ")
            });
            var i = e.opt.startAt ? e.opt.startAt : 1;
            e.player.playVideo(),
            e.player.seekTo(i, !0),
            e.checkForStartAt = setInterval(function () {
                jQuery(e).YTPMute();
                var n = e.player.getVideoLoadedFraction() >= i / e.player.getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= i && n) {
                    clearInterval(e.checkForStartAt),
                    "function" == typeof e.opt.onReady && e.opt.onReady(e),
                    e.isReady = !0;
                    var o = jQuery.Event("YTPReady");
                    if (o.time = e.currentTime, jQuery(e).trigger(o), e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay) {
                        var r = jQuery.Event("YTPStart");
                        r.time = e.currentTime,
                        jQuery(e).trigger(r),
                        t.css("background-image", "none"),
                        jQuery(e.playerEl).CSSAnimate({
                            opacity: 1
                        }, 1e3),
                        t.YTPPlay(),
                        e.wrapper.CSSAnimate({
                            opacity: e.isAlone ? 1 : e.opt.opacity
                        }, 1e3),
                        jQuery.browser.safari && (e.safariPlay = setInterval(function () {
                            1 != e.state ? t.YTPPlay() : clearInterval(e.safariPlay)
                        }, 10)),
                        t.on("YTPReady", function () {
                            t.YTPPlay()
                        })
                    } else e.player.pauseVideo(),
                    e.isPlayer || (jQuery(e.playerEl).CSSAnimate({
                        opacity: 1
                    }, 500), e.wrapper.CSSAnimate({
                        opacity: e.isAlone ? 1 : e.opt.opacity
                    }, 500)),
                    e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                    e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"), setTimeout(function () {
                        e.loading.fadeOut()
                    }, 100)),
                    e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3)
                } else jQuery.browser.safari && (e.player.playVideo(), i >= 0 && e.player.seekTo(i, !0))
            }, 1)
        }, setAlign: function (e) {
            this.optimizeDisplay(e)
        }, getAlign: function () {
            return this.get(0).opt.align
        }, formatTime: function (e) {
            var t = Math.floor(e / 60),
                n = Math.floor(e - 60 * t);
            return (9 >= t ? "0" + t : t) + " : " + (9 >= n ? "0" + n : n)
        }
    }, jQuery.fn.optimizeDisplay = function (e) {
        var t = this.get(0),
            n = jQuery(t.playerEl),
            i = {};
        t.opt.align = e || t.opt.align,
        t.opt.align = "undefined " != typeof t.opt.align ? t.opt.align : "center,center";
        var o = t.opt.align.split(",");
        if (t.opt.optimizeDisplay) {
            var r = {},
                s = t.wrapper;
            r.width = s.outerWidth(),
            r.height = s.outerHeight(),
            i.width = r.width,
            i.height = "16/9" == t.opt.ratio ? Math.ceil(r.width * (9 / 16)) : Math.ceil(.75 * r.width),
            i.width = r.width,
            i.height = "16/9" == t.opt.ratio ? Math.ceil(r.width * (9 / 16)) : Math.ceil(.75 * r.width),
            i.marginTop = -(i.height - r.height) / 2,
            i.marginLeft = 0;
            var a = i.height < r.height;
            a && (i.height = r.height, i.width = "16/9" == t.opt.ratio ? Math.floor(r.height * (16 / 9)) : Math.floor(r.height * (4 / 3)), i.marginTop = 0, i.marginLeft = -(i.width - r.width) / 2);
            for (var l in o) {
                switch (o[l].trim()) {
                case "top":
                    i.marginTop = a ? -(i.height - r.height) / 2 : 0;
                    break;
                case "bottom":
                    i.marginTop = a ? 0 : -(i.height - r.height);
                    break;
                case "left":
                    i.marginLeft = 0;
                    break;
                case "right":
                    i.marginLeft = a ? -(i.width - r.width) : 0
                }
            }
        } else i.width = "100%",
        i.height = "100%",
        i.marginTop = 0,
        i.marginLeft = 0;
        n.css({
            width: i.width,
            height: i.height,
            marginTop: i.marginTop,
            marginLeft: i.marginLeft
        })
    }, jQuery.shuffle = function (e) {
        for (var t = e.slice(), n = t.length, i = n; i--;) {
            var o = parseInt(Math.random() * n),
                r = t[i];
            t[i] = t[o],
            t[o] = r
        }
        return t
    }, jQuery.fn.unselectable = function () {
        return this.each(function () {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie,
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play,
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay,
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop,
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause,
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist,
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex,
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute,
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute,
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume,
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData,
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter,
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters,
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter,
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters,
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter,
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters,
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters,
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters,
    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime,
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime,
    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask,
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask,
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask,
    jQuery.fn.YTPSetAlign = jQuery.mbYTPlayer.setAlign,
    jQuery.fn.YTPGetAlign = jQuery.mbYTPlayer.getAlign,
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.playNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie,
    jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls,
    jQuery.fn.playYTP = jQuery.mbYTPlayer.play,
    jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop,
    jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause,
    jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute,
    jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute,
    jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp),
jQuery.support.CSStransition = function () {
    var e = document.body || document.documentElement,
        t = e.style;
    return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
}(),
jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        }, brightness: {
            min: 0,
            max: 400,
            unit: "%"
        }, contrast: {
            min: 0,
            max: 400,
            unit: "%"
        }, grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        }, hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        }, invert: {
            min: 0,
            max: 100,
            unit: "%"
        }, saturate: {
            min: 0,
            max: 400,
            unit: "%"
        }, sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    }, normalizeCss: function (e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var n in t) {
            "transform" === n && (t[jQuery.CSS.sfx + "transform"] = t[n], delete t[n]),
            "transform-origin" === n && (t[jQuery.CSS.sfx + "transform-origin"] = e[n], delete t[n]),
            "filter" !== n || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[n], delete t[n]),
            "blur" === n && setFilter(t, "blur", e[n]),
            "brightness" === n && setFilter(t, "brightness", e[n]),
            "contrast" === n && setFilter(t, "contrast", e[n]),
            "grayscale" === n && setFilter(t, "grayscale", e[n]),
            "hueRotate" === n && setFilter(t, "hueRotate", e[n]),
            "invert" === n && setFilter(t, "invert", e[n]),
            "saturate" === n && setFilter(t, "saturate", e[n]),
            "sepia" === n && setFilter(t, "sepia", e[n]);
            var i = "";
            "x" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateX(" + setUnit(e[n], "px") + ")", delete t[n]),
            "y" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateY(" + setUnit(e[n], "px") + ")", delete t[n]),
            "z" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateZ(" + setUnit(e[n], "px") + ")", delete t[n]),
            "rotate" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotate(" + setUnit(e[n], "deg") + ")", delete t[n]),
            "rotateX" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateX(" + setUnit(e[n], "deg") + ")", delete t[n]),
            "rotateY" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateY(" + setUnit(e[n], "deg") + ")", delete t[n]),
            "rotateZ" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateZ(" + setUnit(e[n], "deg") + ")", delete t[n]),
            "scale" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scale(" + setUnit(e[n], "") + ")", delete t[n]),
            "scaleX" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleX(" + setUnit(e[n], "") + ")", delete t[n]),
            "scaleY" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleY(" + setUnit(e[n], "") + ")", delete t[n]),
            "scaleZ" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleZ(" + setUnit(e[n], "") + ")", delete t[n]),
            "skew" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skew(" + setUnit(e[n], "deg") + ")", delete t[n]),
            "skewX" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewX(" + setUnit(e[n], "deg") + ")", delete t[n]),
            "skewY" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewY(" + setUnit(e[n], "deg") + ")", delete t[n]),
            "perspective" === n && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " perspective(" + setUnit(e[n], "px") + ")", delete t[n])
        }
        return t
    }, getProp: function (e) {
        var t = [];
        for (var n in e) t.indexOf(n) < 0 && t.push(uncamel(n));
        return t.join(",")
    }, animate: function (e, t, n, i, o) {
        return this.each(function () {
            function r() {
                s.called = !0,
                s.CSSAIsRunning = !1,
                a.off(jQuery.CSS.transitionEnd + "." + s.id),
                clearTimeout(s.timeout),
                a.css(jQuery.CSS.sfx + "transition", ""),
                "function" == typeof o && o.apply(s),
                "function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null)
            }
            var s = this,
                a = jQuery(this);
            s.id = s.id || "CSSA_" + (new Date).getTime();
            var l = l || {
                type: "noEvent"
            };
            if (s.CSSAIsRunning && s.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9) return void(s.CSSqueue = function () {
                a.CSSAnimate(e, t, n, i, o)
            });
            if (s.CSSqueue = null, s.eventType = l.type, 0 !== a.length && e) {
                if (e = jQuery.normalizeCss(e), s.CSSAIsRunning = !0, "function" == typeof t && (o = t, t = jQuery.fx.speeds._default), "function" == typeof n && (i = n, n = 0), "string" == typeof n && (o = n, n = 0), "function" == typeof i && (o = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t) for (var u in jQuery.fx.speeds) {
                    if (t == u) {
                        t = jQuery.fx.speeds[u];
                        break
                    }
                    t = jQuery.fx.speeds._default
                }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof o && (i = o, o = null), !jQuery.support.CSStransition) {
                    for (var c in e) {
                        if ("transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c) {
                            var d = e[c],
                                p = "left";
                            e[p] = d,
                            delete e[c]
                        }
                        if ("y" === c) {
                            var d = e[c],
                                p = "top";
                            e[p] = d,
                            delete e[c]
                        }("-ms-transform" === c || "-ms-filter" === c) && delete e[c]
                    }
                    return void a.delay(n).animate(e, t, o)
                }
                var h = {
                default:
                    "ease",
                    in : "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                h[i] && (i = h[i]),
                a.off(jQuery.CSS.transitionEnd + "." + s.id);
                var f = jQuery.CSS.getProp(e),
                    g = {};
                jQuery.extend(g, e),
                g[jQuery.CSS.sfx + "transition-property"] = f,
                g[jQuery.CSS.sfx + "transition-duration"] = t + "ms",
                g[jQuery.CSS.sfx + "transition-delay"] = n + "ms",
                g[jQuery.CSS.sfx + "transition-timing-function"] = i,
                setTimeout(function () {
                    a.one(jQuery.CSS.transitionEnd + "." + s.id, r),
                    a.css(g)
                }, 1),
                s.timeout = setTimeout(function () {
                    return s.called || !o ? (s.called = !1, void(s.CSSAIsRunning = !1)) : (a.css(jQuery.CSS.sfx + "transition", ""), o.apply(s), s.CSSAIsRunning = !1, void("function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null)))
                }, t + n + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate,
jQuery.normalizeCss = jQuery.CSS.normalizeCss,
jQuery.fn.css3 = function (e) {
    return this.each(function () {
        var t = jQuery(this),
            n = jQuery.normalizeCss(e);
        t.css(n)
    })
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1,
    jQuery.browser.webkit = !1,
    jQuery.browser.opera = !1,
    jQuery.browser.safari = !1,
    jQuery.browser.chrome = !1,
    jQuery.browser.androidStock = !1,
    jQuery.browser.msie = !1,
    jQuery.browser.ua = nAgt,
    jQuery.browser.name = navigator.appName,
    jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
    jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
    else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
    else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
    else if (-1 != nAgt.indexOf("Trident") || -1 != nAgt.indexOf("Edge")) {
        jQuery.browser.msie = !0,
        jQuery.browser.name = "Microsoft Internet Explorer";
        var start = nAgt.indexOf("rv:") + 3,
            end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else - 1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : nAgt.indexOf("mozilla/5.0") > -1 && nAgt.indexOf("android ") > -1 && nAgt.indexOf("applewebkit") > -1 && !(nAgt.indexOf("chrome") > -1) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName)); - 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
    -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
    jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
    isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
    jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt),
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
jQuery.isMobile = jQuery.browser.mobile,
jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765,
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),


function (e) {
    var t = (/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase()), "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1);
    e.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        }, events: {
            start: t ? "touchstart" : "mousedown",
            end: t ? "touchend" : "mouseup",
            move: t ? "touchmove" : "mousemove"
        }, init: function (n) {
            return this.each(function () {
                var i = this,
                    o = e(i);
                o.addClass("simpleSlider"),
                i.opt = {}, e.extend(i.opt, e.simpleSlider.defaults, n),
                e.extend(i.opt, o.data());
                var r = "h" == i.opt.orientation ? "horizontal" : "vertical",
                    s = e("<div/>").addClass("level").addClass(r);
                o.prepend(s),
                i.level = s,
                o.css({
                    cursor: "default"
                }),
                "auto" == i.opt.scale && (i.opt.scale = e(i).outerWidth()),
                o.updateSliderVal(),
                i.opt.readonly || (o.on(e.simpleSlider.events.start, function (e) {
                    t && (e = e.changedTouches[0]),
                    i.canSlide = !0,
                    o.updateSliderVal(e),
                    o.css({
                        cursor: "col-resize"
                    }),
                    e.preventDefault(),
                    e.stopPropagation()
                }), e(document).on(e.simpleSlider.events.move, function (n) {
                    t && (n = n.changedTouches[0]),
                    i.canSlide && (e(document).css({
                        cursor: "default"
                    }), o.updateSliderVal(n), n.preventDefault(), n.stopPropagation())
                }).on(e.simpleSlider.events.end, function () {
                    e(document).css({
                        cursor: "auto"
                    }),
                    i.canSlide = !1,
                    o.css({
                        cursor: "auto"
                    })
                }))
            })
        }, updateSliderVal: function (t) {
            function n(e, t) {
                return Math.floor(100 * e / t)
            }
            var i = this,
                o = i.get(0);
            if (o.opt) {
                o.opt.initialval = "number" == typeof o.opt.initialval ? o.opt.initialval : o.opt.initialval(o);
                var r = e(o).outerWidth(),
                    s = e(o).outerHeight();
                o.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - i.offset().left : "number" == typeof t ? t * r / o.opt.scale : o.opt.initialval * r / o.opt.scale,
                o.y = "object" == typeof t ? t.clientY + document.body.scrollTop - i.offset().top : "number" == typeof t ? (o.opt.scale - o.opt.initialval - t) * s / o.opt.scale : o.opt.initialval * s / o.opt.scale,
                o.y = i.outerHeight() - o.y,
                o.scaleX = o.x * o.opt.scale / r,
                o.scaleY = o.y * o.opt.scale / s,
                o.outOfRangeX = o.scaleX > o.opt.scale ? o.scaleX - o.opt.scale : o.scaleX < 0 ? o.scaleX : 0,
                o.outOfRangeY = o.scaleY > o.opt.scale ? o.scaleY - o.opt.scale : o.scaleY < 0 ? o.scaleY : 0,
                o.outOfRange = "h" == o.opt.orientation ? o.outOfRangeX : o.outOfRangeY,
                o.value = void 0 !== t ? "h" == o.opt.orientation ? o.x >= i.outerWidth() ? o.opt.scale : o.x <= 0 ? 0 : o.scaleX : o.y >= i.outerHeight() ? o.opt.scale : o.y <= 0 ? 0 : o.scaleY : "h" == o.opt.orientation ? o.scaleX : o.scaleY,
                "h" == o.opt.orientation ? o.level.width(n(o.x, r) + "%") : o.level.height(n(o.y, s)),
                "function" == typeof o.opt.callback && o.opt.callback(o)
            }
        }
    }, e.fn.simpleSlider = e.simpleSlider.init,
    e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
}(jQuery),


function (e) {
    e.mbCookie = {
        set: function (e, t, n, i) {
            t = JSON.stringify(t),
            n || (n = 7),
            i = i ? "; domain=" + i : "";
            var o, r = new Date;
            r.setTime(r.getTime() + 864e5 * n),
            o = "; expires=" + r.toGMTString(),
            document.cookie = e + "=" + t + o + "; path=/" + i
        }, get: function (e) {
            for (var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                for (var o = n[i];
                " " == o.charAt(0);) o = o.substring(1, o.length);
                if (0 == o.indexOf(t)) return JSON.parse(o.substring(t.length, o.length))
            }
            return null
        }, remove: function (t) {
            e.mbCookie.set(t, "", -1)
        }
    }, e.mbStorage = {
        set: function (e, t) {
            t = JSON.stringify(t),
            localStorage.setItem(e, t)
        }, get: function (e) {
            return localStorage[e] ? JSON.parse(localStorage[e]) : null
        }, remove: function (e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    }
}(jQuery),


function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    e.ui = e.ui || {}, e.ui.version = "1.12.1";
    var t = 0,
        n = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (n) {
            var i, o, r;
            for (r = 0; null != (o = n[r]); r++) try {
                (i = e._data(o, "events")) && i.remove && e(o).triggerHandler("remove")
            } catch (e) {}
            t(n)
        }
    }(e.cleanData),
    e.widget = function (t, n, i) {
        var o, r, s, a = {},
            l = t.split(".")[0];
        t = t.split(".")[1];
        var u = l + "-" + t;
        return i || (i = n, n = e.Widget),
        e.isArray(i) && (i = e.extend.apply(null, [{}].concat(i))),
        e.expr[":"][u.toLowerCase()] = function (t) {
            return !!e.data(t, u)
        }, e[l] = e[l] || {}, o = e[l][t],
        r = e[l][t] = function (e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
        }, e.extend(r, o, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }),
        s = new n,
        s.options = e.widget.extend({}, s.options),
        e.each(i, function (t, i) {
            return e.isFunction(i) ? void(a[t] = function () {
                function e() {
                    return n.prototype[t].apply(this, arguments)
                }
                function o(e) {
                    return n.prototype[t].apply(this, e)
                }
                return function () {
                    var t, n = this._super,
                        r = this._superApply;
                    return this._super = e,
                    this._superApply = o,
                    t = i.apply(this, arguments),
                    this._super = n,
                    this._superApply = r,
                    t
                }
            }()) : void(a[t] = i)
        }),
        r.prototype = e.widget.extend(s, {
            widgetEventPrefix: o ? s.widgetEventPrefix || t : t
        }, a, {
            constructor: r,
            namespace: l,
            widgetName: t,
            widgetFullName: u
        }),
        o ? (e.each(o._childConstructors, function (t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, r, n._proto)
        }), delete o._childConstructors) : n._childConstructors.push(r),
        e.widget.bridge(t, r),
        r
    }, e.widget.extend = function (t) {
        for (var i, o, r = n.call(arguments, 1), s = 0, a = r.length; a > s; s++) for (i in r[s]) o = r[s][i],
        r[s].hasOwnProperty(i) && void 0 !== o && (t[i] = e.isPlainObject(o) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], o) : e.widget.extend({}, o) : o);
        return t
    }, e.widget.bridge = function (t, i) {
        var o = i.prototype.widgetFullName || t;
        e.fn[t] = function (r) {
            var s = "string" == typeof r,
                a = n.call(arguments, 1),
                l = this;
            return s ? this.length || "instance" !== r ? this.each(function () {
                var n, i = e.data(this, o);
                return "instance" === r ? (l = i, !1) : i ? e.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, a), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : e.error("no such method '" + r + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + r + "'")
            }) : l = void 0 : (a.length && (r = e.widget.extend.apply(null, [r].concat(a))), this.each(function () {
                var t = e.data(this, o);
                t ? (t.option(r || {}), t._init && t._init()) : e.data(this, o, new i(r, this))
            })),
            l
        }
    }, e.Widget = function () {}, e.Widget._childConstructors = [],
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {}, disabled: !1,
            create: null
        }, _createWidget: function (n, i) {
            i = e(i || this.defaultElement || this)[0],
            this.element = e(i),
            this.uuid = t++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = e(),
            this.hoverable = e(),
            this.focusable = e(),
            this.classesElementLookup = {}, i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), n),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        }, _getCreateOptions: function () {
            return {}
        }, _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            var t = this;
            this._destroy(),
            e.each(this.classesElementLookup, function (e, n) {
                t._removeClass(n, e)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        }, _destroy: e.noop,
        widget: function () {
            return this.element
        }, option: function (t, n) {
            var i, o, r, s = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t) if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                for (o = s[t] = e.widget.extend({}, this.options[t]), r = 0; i.length - 1 > r; r++) o[i[r]] = o[i[r]] || {}, o = o[i[r]];
                if (t = i.pop(), 1 === arguments.length) return void 0 === o[t] ? null : o[t];
                o[t] = n
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                s[t] = n
            }
            return this._setOptions(s),
            this
        }, _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        }, _setOption: function (e, t) {
            return "classes" === e && this._setOptionClasses(t),
            this.options[e] = t,
            "disabled" === e && this._setOptionDisabled(t),
            this
        }, _setOptionClasses: function (t) {
            var n, i, o;
            for (n in t) o = this.classesElementLookup[n],
            t[n] !== this.options.classes[n] && o && o.length && (i = e(o.get()), this._removeClass(o, n), i.addClass(this._classes({
                element: i,
                keys: n,
                classes: t,
                add: !0
            })))
        }, _setOptionDisabled: function (e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !! e),
            e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        }, enable: function () {
            return this._setOptions({
                disabled: !1
            })
        }, disable: function () {
            return this._setOptions({
                disabled: !0
            })
        }, _classes: function (t) {
            function n(n, r) {
                var s, a;
                for (a = 0; n.length > a; a++) s = o.classesElementLookup[n[a]] || e(),
                s = e(t.add ? e.unique(s.get().concat(t.element.get())) : s.not(t.element).get()),
                o.classesElementLookup[n[a]] = s,
                i.push(n[a]),
                r && t.classes[n[a]] && i.push(t.classes[n[a]])
            }
            var i = [],
                o = this;
            return t = e.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t),
            this._on(t.element, {
                remove: "_untrackClassesElement"
            }),
            t.keys && n(t.keys.match(/\S+/g) || [], !0),
            t.extra && n(t.extra.match(/\S+/g) || []),
            i.join(" ")
        }, _untrackClassesElement: function (t) {
            var n = this;
            e.each(n.classesElementLookup, function (i, o) {
                -1 !== e.inArray(t.target, o) && (n.classesElementLookup[i] = e(o.not(t.target).get()))
            })
        }, _removeClass: function (e, t, n) {
            return this._toggleClass(e, t, n, !1)
        }, _addClass: function (e, t, n) {
            return this._toggleClass(e, t, n, !0)
        }, _toggleClass: function (e, t, n, i) {
            i = "boolean" == typeof i ? i : n;
            var o = "string" == typeof e || null === e,
                r = {
                    extra: o ? t : n,
                    keys: o ? e : t,
                    element: o ? this.element : e,
                    add: i
                };
            return r.element.toggleClass(this._classes(r), i),
            this
        }, _on: function (t, n, i) {
            var o, r = this;
            "boolean" != typeof t && (i = n, n = t, t = !1),
            i ? (n = o = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()),
            e.each(i, function (i, s) {
                function a() {
                    return t || !0 !== r.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? r[s] : s).apply(r, arguments) : void 0
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/),
                    u = l[1] + r.eventNamespace,
                    c = l[2];
                c ? o.on(u, c, a) : n.on(u, a)
            })
        }, _off: function (t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(n).off(n),
            this.bindings = e(this.bindings.not(t).get()),
            this.focusable = e(this.focusable.not(t).get()),
            this.hoverable = e(this.hoverable.not(t).get())
        }, _delay: function (e, t) {
            function n() {
                return ("string" == typeof e ? i[e] : e).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, t || 0)
        }, _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function (t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                }
            })
        }, _focusable: function (t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function (t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-focus")
                }, focusout: function (t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                }
            })
        }, _trigger: function (t, n, i) {
            var o, r, s = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], r = n.originalEvent) for (o in r) o in n || (n[o] = r[o]);
            return this.element.trigger(n, i),
            !(e.isFunction(s) && !1 === s.apply(this.element[0], [n].concat(i)) || n.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (t, n) {
        e.Widget.prototype["_" + t] = function (i, o, r) {
            "string" == typeof o && (o = {
                effect: o
            });
            var s, a = o ? !0 === o || "number" == typeof o ? n : o.effect || n : t;
            o = o || {}, "number" == typeof o && (o = {
                duration: o
            }),
            s = !e.isEmptyObject(o),
            o.complete = r,
            o.delay && i.delay(o.delay),
            s && e.effects && e.effects.effect[a] ? i[t](o) : a !== t && i[a] ? i[a](o.duration, o.easing, r) : i.queue(function (n) {
                e(this)[t](),
                r && r.call(i[0]),
                n()
            })
        }
    }),
    e.widget,
    e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, e.fn.extend({
        uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }),
    e.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {}, classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            }, collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            }, activate: null,
            beforeActivate: null
        }, hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        }, showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        }, _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = e(),
            this._addClass("ui-accordion", "ui-widget ui-helper-reset"),
            this.element.attr("role", "tablist"),
            t.collapsible || !1 !== t.active && null != t.active || (t.active = 0),
            this._processPanels(),
            0 > t.active && (t.active += this.headers.length),
            this._refresh()
        }, _getCreateEventData: function () {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e()
            }
        }, _createIcons: function () {
            var t, n, i = this.options.icons;
            i && (t = e("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header), t.prependTo(this.headers), n = this.active.children(".ui-accordion-header-icon"), this._removeClass(n, i.header)._addClass(n, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        }, _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons"),
            this.headers.children(".ui-accordion-header-icon").remove()
        }, _destroy: function () {
            var e;
            this.element.removeAttr("role"),
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),
            this._destroyIcons(),
            e = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),
            "content" !== this.options.heightStyle && e.css("height", "")
        }, _setOption: function (e, t) {
            return "active" === e ? void this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || !1 !== this.options.active || this._activate(0), void("icons" === e && (this._destroyIcons(), t && this._createIcons())))
        }, _setOptionDisabled: function (e) {
            this._super(e),
            this.element.attr("aria-disabled", e),
            this._toggleClass(null, "ui-state-disabled", !! e),
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !! e)
        }, _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var n = e.ui.keyCode,
                    i = this.headers.length,
                    o = this.headers.index(t.target),
                    r = !1;
                switch (t.keyCode) {
                case n.RIGHT:
                case n.DOWN:
                    r = this.headers[(o + 1) % i];
                    break;
                case n.LEFT:
                case n.UP:
                    r = this.headers[(o - 1 + i) % i];
                    break;
                case n.SPACE:
                case n.ENTER:
                    this._eventHandler(t);
                    break;
                case n.HOME:
                    r = this.headers[0];
                    break;
                case n.END:
                    r = this.headers[i - 1]
                }
                r && (e(t.target).attr("tabIndex", -1), e(r).attr("tabIndex", 0), e(r).trigger("focus"), t.preventDefault())
            }
        }, _panelKeyDown: function (t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().trigger("focus")
        }, refresh: function () {
            var t = this.options;
            this._processPanels(),
            !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = e()) : !1 === t.active ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active),
            this._destroyIcons(),
            this._refresh()
        }, _processPanels: function () {
            var e = this.headers,
                t = this.panels;
            this.headers = this.element.find(this.options.header),
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"),
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"),
            t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
        }, _refresh: function () {
            var t, n = this.options,
                i = n.heightStyle,
                o = this.element.parent();
            this.active = this._findActive(n.active),
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"),
            this._addClass(this.active.next(), "ui-accordion-content-active"),
            this.active.next().show(),
            this.headers.attr("role", "tab").each(function () {
                var t = e(this),
                    n = t.uniqueId().attr("id"),
                    i = t.next(),
                    o = i.uniqueId().attr("id");
                t.attr("aria-controls", o),
                i.attr("aria-labelledby", n)
            }).next().attr("role", "tabpanel"),
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(),
            this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(n.event),
            "fill" === i ? (t = o.height(), this.element.siblings(":visible").each(function () {
                var n = e(this),
                    i = n.css("position");
                "absolute" !== i && "fixed" !== i && (t -= n.outerHeight(!0))
            }), this.headers.each(function () {
                t -= e(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === i && (t = 0, this.headers.next().each(function () {
                var n = e(this).is(":visible");
                n || e(this).show(),
                t = Math.max(t, e(this).css("height", "").height()),
                n || e(this).hide()
            }).height(t))
        }, _activate: function (t) {
            var n = this._findActive(t)[0];
            n !== this.active[0] && (n = n || this.active[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            }))
        }, _findActive: function (t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        }, _setupEvents: function (t) {
            var n = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), function (e, t) {
                n[t] = "_eventHandler"
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, n),
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }),
            this._hoverable(this.headers),
            this._focusable(this.headers)
        }, _eventHandler: function (t) {
            var n, i, o = this.options,
                r = this.active,
                s = e(t.currentTarget),
                a = s[0] === r[0],
                l = a && o.collapsible,
                u = l ? e() : s.next(),
                c = r.next(),
                d = {
                    oldHeader: r,
                    oldPanel: c,
                    newHeader: l ? e() : s,
                    newPanel: u
                };
            t.preventDefault(),
            a && !o.collapsible || !1 === this._trigger("beforeActivate", t, d) || (o.active = !l && this.headers.index(s), this.active = a ? e() : s, this._toggle(d), this._removeClass(r, "ui-accordion-header-active", "ui-state-active"), o.icons && (n = r.children(".ui-accordion-header-icon"), this._removeClass(n, null, o.icons.activeHeader)._addClass(n, null, o.icons.header)), a || (this._removeClass(s, "ui-accordion-header-collapsed")._addClass(s, "ui-accordion-header-active", "ui-state-active"), o.icons && (i = s.children(".ui-accordion-header-icon"), this._removeClass(i, null, o.icons.header)._addClass(i, null, o.icons.activeHeader)), this._addClass(s.next(), "ui-accordion-content-active")))
        }, _toggle: function (t) {
            var n = t.newPanel,
                i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0),
            this.prevShow = n,
            this.prevHide = i,
            this.options.animate ? this._animate(n, i, t) : (i.hide(), n.show(), this._toggleComplete(t)),
            i.attr({
                "aria-hidden": "true"
            }),
            i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            n.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : n.length && this.headers.filter(function () {
                return 0 === parseInt(e(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1),
            n.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        }, _animate: function (e, t, n) {
            var i, o, r, s = this,
                a = 0,
                l = e.css("box-sizing"),
                u = e.length && (!t.length || e.index() < t.index()),
                c = this.options.animate || {},
                d = u && c.down || c,
                p = function () {
                    s._toggleComplete(n)
                };
            return "number" == typeof d && (r = d),
            "string" == typeof d && (o = d),
            o = o || d.easing || c.easing,
            r = r || d.duration || c.duration,
            t.length ? e.length ? (i = e.show().outerHeight(), t.animate(this.hideProps, {
                duration: r,
                easing: o,
                step: function (e, t) {
                    t.now = Math.round(e)
                }
            }), void e.hide().animate(this.showProps, {
                duration: r,
                easing: o,
                complete: p,
                step: function (e, n) {
                    n.now = Math.round(e),
                    "height" !== n.prop ? "content-box" === l && (a += n.now) : "content" !== s.options.heightStyle && (n.now = Math.round(i - t.outerHeight() - a), a = 0)
                }
            })) : t.animate(this.hideProps, r, o, p) : e.animate(this.showProps, r, o, p)
        }, _toggleComplete: function (e) {
            var t = e.oldPanel,
                n = t.prev();
            this._removeClass(t, "ui-accordion-content-active"),
            this._removeClass(n, "ui-accordion-header-active")._addClass(n, "ui-accordion-header-collapsed"),
            t.length && (t.parent()[0].className = t.parent()[0].className),
            this._trigger("activate", null, e)
        }
    }),
    e.ui.escapeSelector = function () {
        var e = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function (t) {
            return t.replace(e, "\\$1")
        }
    }(),
    e.ui.safeActiveElement = function (e) {
        var t;
        try {
            t = e.activeElement
        } catch (n) {
            t = e.body
        }
        return t || (t = e.body),
        t.nodeName || (t = e.body),
        t
    }, e.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            }, collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        }, _isLocal: function () {
            var e = /#.*$/;
            return function (t) {
                var n, i;
                n = t.href.replace(e, ""),
                i = location.href.replace(e, "");
                try {
                    n = decodeURIComponent(n)
                } catch (e) {}
                try {
                    i = decodeURIComponent(i)
                } catch (e) {}
                return t.hash.length > 1 && n === i
            }
        }(),
        _create: function () {
            var t = this,
                n = this.options;
            this.running = !1,
            this._addClass("ui-tabs", "ui-widget ui-widget-content"),
            this._toggleClass("ui-tabs-collapsible", null, n.collapsible),
            this._processTabs(),
            n.active = this._initialActive(),
            e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                return t.tabs.index(e)
            }))).sort()),
            this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(n.active) : e(),
            this._refresh(),
            this.active.length && this.load(n.active)
        }, _initialActive: function () {
            var t = this.options.active,
                n = this.options.collapsible,
                i = location.hash.substring(1);
            return null === t && (i && this.tabs.each(function (n, o) {
                return e(o).attr("aria-controls") === i ? (t = n, !1) : void 0
            }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = !! this.tabs.length && 0)),
            !1 !== t && -1 === (t = this.tabs.index(this.tabs.eq(t))) && (t = !n && 0),
            !n && !1 === t && this.anchors.length && (t = 0),
            t
        }, _getCreateEventData: function () {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : e()
            }
        }, _tabKeydown: function (t) {
            var n = e(e.ui.safeActiveElement(this.document[0])).closest("li"),
                i = this.tabs.index(n),
                o = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                case e.ui.keyCode.RIGHT:
                case e.ui.keyCode.DOWN:
                    i++;
                    break;
                case e.ui.keyCode.UP:
                case e.ui.keyCode.LEFT:
                    o = !1,
                    i--;
                    break;
                case e.ui.keyCode.END:
                    i = this.anchors.length - 1;
                    break;
                case e.ui.keyCode.HOME:
                    i = 0;
                    break;
                case e.ui.keyCode.SPACE:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i);
                case e.ui.keyCode.ENTER:
                    return t.preventDefault(),
                    clearTimeout(this.activating),
                    void this._activate(i !== this.options.active && i);
                default:
                    return
                }
                t.preventDefault(),
                clearTimeout(this.activating),
                i = this._focusNextTab(i, o),
                t.ctrlKey || t.metaKey || (n.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", i)
                }, this.delay))
            }
        }, _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        }, _handlePageNav: function (t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        }, _findNextTab: function (t, n) {
            function i() {
                return t > o && (t = 0),
                0 > t && (t = o),
                t
            }
            for (var o = this.tabs.length - 1; - 1 !== e.inArray(i(), this.options.disabled);) t = n ? t + 1 : t - 1;
            return t
        }, _focusNextTab: function (e, t) {
            return e = this._findNextTab(e, t),
            this.tabs.eq(e).trigger("focus"),
            e
        }, _setOption: function (e, t) {
            return "active" === e ? void this._activate(t) : (this._super(e, t), "collapsible" === e && (this._toggleClass("ui-tabs-collapsible", null, t), t || !1 !== this.options.active || this._activate(0)), "event" === e && this._setupEvents(t), void("heightStyle" === e && this._setupHeightStyle(t)))
        }, _sanitizeSelector: function (e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        }, refresh: function () {
            var t = this.options,
                n = this.tablist.children(":has(a[href])");
            t.disabled = e.map(n.filter(".ui-state-disabled"), function (e) {
                return n.index(e)
            }),
            this._processTabs(),
            !1 !== t.active && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()),
            this._refresh()
        }, _refresh: function () {
            this._setOptionDisabled(this.options.disabled),
            this._setupEvents(this.options.event),
            this._setupHeightStyle(this.options.heightStyle),
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }),
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }),
            this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        }, _processTabs: function () {
            var t = this,
                n = this.tabs,
                i = this.anchors,
                o = this.panels;
            this.tablist = this._getList().attr("role", "tablist"),
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"),
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }),
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }),
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"),
            this.anchors = this.tabs.map(function () {
                return e("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }),
            this._addClass(this.anchors, "ui-tabs-anchor"),
            this.panels = e(),
            this.anchors.each(function (n, i) {
                var o, r, s, a = e(i).uniqueId().attr("id"),
                    l = e(i).closest("li"),
                    u = l.attr("aria-controls");
                t._isLocal(i) ? (o = i.hash, s = o.substring(1), r = t.element.find(t._sanitizeSelector(o))) : (s = l.attr("aria-controls") || e({}).uniqueId()[0].id, o = "#" + s, r = t.element.find(o), r.length || (r = t._createPanel(s), r.insertAfter(t.panels[n - 1] || t.tablist)), r.attr("aria-live", "polite")),
                r.length && (t.panels = t.panels.add(r)),
                u && l.data("ui-tabs-aria-controls", u),
                l.attr({
                    "aria-controls": s,
                    "aria-labelledby": a
                }),
                r.attr("aria-labelledby", a)
            }),
            this.panels.attr("role", "tabpanel"),
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"),
            n && (this._off(n.not(this.tabs)), this._off(i.not(this.anchors)), this._off(o.not(this.panels)))
        }, _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        }, _createPanel: function (t) {
            return e("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        }, _setOptionDisabled: function (t) {
            var n, i, o;
            for (e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), o = 0; i = this.tabs[o]; o++) n = e(i),
            !0 === t || -1 !== e.inArray(o, t) ? (n.attr("aria-disabled", "true"), this._addClass(n, null, "ui-state-disabled")) : (n.removeAttr("aria-disabled"), this._removeClass(n, null, "ui-state-disabled"));
            this.options.disabled = t,
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        }, _setupEvents: function (t) {
            var n = {};
            t && e.each(t.split(" "), function (e, t) {
                n[t] = "_eventHandler"
            }),
            this._off(this.anchors.add(this.tabs).add(this.panels)),
            this._on(!0, this.anchors, {
                click: function (e) {
                    e.preventDefault()
                }
            }),
            this._on(this.anchors, n),
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            }),
            this._on(this.panels, {
                keydown: "_panelKeydown"
            }),
            this._focusable(this.tabs),
            this._hoverable(this.tabs)
        }, _setupHeightStyle: function (t) {
            var n, i = this.element.parent();
            "fill" === t ? (n = i.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = e(this),
                    i = t.css("position");
                "absolute" !== i && "fixed" !== i && (n -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                n -= e(this).outerHeight(!0)
            }), this.panels.each(function () {
                e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (n = 0, this.panels.each(function () {
                n = Math.max(n, e(this).height("").height())
            }).height(n))
        }, _eventHandler: function (t) {
            var n = this.options,
                i = this.active,
                o = e(t.currentTarget),
                r = o.closest("li"),
                s = r[0] === i[0],
                a = s && n.collapsible,
                l = a ? e() : this._getPanelForTab(r),
                u = i.length ? this._getPanelForTab(i) : e(),
                c = {
                    oldTab: i,
                    oldPanel: u,
                    newTab: a ? e() : r,
                    newPanel: l
                };
            t.preventDefault(),
            r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || s && !n.collapsible || !1 === this._trigger("beforeActivate", t, c) || (n.active = !a && this.tabs.index(r), this.active = s ? e() : r, this.xhr && this.xhr.abort(), u.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), t), this._toggle(t, c))
        }, _toggle: function (t, n) {
            function i() {
                r.running = !1,
                r._trigger("activate", t, n)
            }
            function o() {
                r._addClass(n.newTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                s.length && r.options.show ? r._show(s, r.options.show, i) : (s.show(), i())
            }
            var r = this,
                s = n.newPanel,
                a = n.oldPanel;
            this.running = !0,
            a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                r._removeClass(n.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"),
                o()
            }) : (this._removeClass(n.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), o()),
            a.attr("aria-hidden", "true"),
            n.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }),
            s.length && a.length ? n.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function () {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1),
            s.attr("aria-hidden", "false"),
            n.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        }, _activate: function (t) {
            var n, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), n = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: n,
                currentTarget: n,
                preventDefault: e.noop
            }))
        }, _findActive: function (t) {
            return !1 === t ? e() : this.tabs.eq(t)
        }, _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + e.ui.escapeSelector(t) + "']"))),
            t
        }, _destroy: function () {
            this.xhr && this.xhr.abort(),
            this.tablist.removeAttr("role").off(this.eventNamespace),
            this.anchors.removeAttr("role tabIndex").removeUniqueId(),
            this.tabs.add(this.panels).each(function () {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }),
            this.tabs.each(function () {
                var t = e(this),
                    n = t.data("ui-tabs-aria-controls");
                n ? t.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }),
            this.panels.show(),
            "content" !== this.options.heightStyle && this.panels.css("height", "")
        }, enable: function (t) {
            var n = this.options.disabled;
            !1 !== n && (void 0 === t ? n = !1 : (t = this._getIndex(t), n = e.isArray(n) ? e.map(n, function (e) {
                return e !== t ? e : null
            }) : e.map(this.tabs, function (e, n) {
                return n !== t ? n : null
            })), this._setOptionDisabled(n))
        }, disable: function (t) {
            var n = this.options.disabled;
            if (!0 !== n) {
                if (void 0 === t) n = !0;
                else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, n)) return;
                    n = e.isArray(n) ? e.merge([t], n).sort() : [t]
                }
                this._setOptionDisabled(n)
            }
        }, load: function (t, n) {
            t = this._getIndex(t);
            var i = this,
                o = this.tabs.eq(t),
                r = o.find(".ui-tabs-anchor"),
                s = this._getPanelForTab(o),
                a = {
                    tab: o,
                    panel: s
                },
                l = function (e, t) {
                    "abort" === t && i.panels.stop(!1, !0),
                    i._removeClass(o, "ui-tabs-loading"),
                    s.removeAttr("aria-busy"),
                    e === i.xhr && delete i.xhr
                };
            this._isLocal(r[0]) || (this.xhr = e.ajax(this._ajaxSettings(r, n, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(o, "ui-tabs-loading"), s.attr("aria-busy", "true"), this.xhr.done(function (e, t, o) {
                setTimeout(function () {
                    s.html(e),
                    i._trigger("load", n, a),
                    l(o, t)
                }, 1)
            }).fail(function (e, t) {
                setTimeout(function () {
                    l(e, t)
                }, 1)
            })))
        }, _ajaxSettings: function (t, n, i) {
            var o = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""),
                beforeSend: function (t, r) {
                    return o._trigger("beforeLoad", n, e.extend({
                        jqXHR: t,
                        ajaxSettings: r
                    }, i))
                }
            }
        }, _getPanelForTab: function (t) {
            var n = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + n))
        }
    }),
    !1 !== e.uiBackCompat && e.widget("ui.tabs", e.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments),
            this._addClass(this.tabs, "ui-tab")
        }
    }),
    e.ui.tabs
}),


function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery-1.12.4.min"], e) : e(jQuery)
}(function (e) {
    "use strict";

    function t(e) {
        if (e instanceof Date) return e;
        if (String(e).match(s)) return String(e).match(/^[0-9]*$/) && (e = Number(e)),
        String(e).match(/\-/) && (e = String(e).replace(/\-/g, "/")),
        new Date(e);
        throw new Error("Couldn't cast `" + e + "` to a date object.")
    }
    function n(e) {
        return function (t) {
            var n = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
            if (n) for (var o = 0, r = n.length; r > o; ++o) {
                var s = n[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                    l = new RegExp(s[0]),
                    u = s[1] || "",
                    c = s[3] || "",
                    d = null;
                s = s[2],
                a.hasOwnProperty(s) && (d = a[s], d = Number(e[d])),
                null !== d && ("!" === u && (d = i(c, d)), "" === u && 10 > d && (d = "0" + d.toString()), t = t.replace(l, d.toString()))
            }
            return t = t.replace(/%%/, "%")
        }
    }
    function i(e, t) {
        var n = "s",
            i = "";
        return e && (e = e.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === e.length ? n = e[0] : (i = e[0], n = e[1])),
        1 === Math.abs(t) ? i : n
    }
    var o = 100,
        r = [],
        s = [];
    s.push(/^[0-9]*$/.source),
    s.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    s.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),
    s = new RegExp(s.join("|"));
    var a = {
        Y: "years",
        m: "months",
        w: "weeks",
        d: "days",
        D: "totalDays",
        H: "hours",
        M: "minutes",
        S: "seconds"
    },
        l = function (t, n, i) {
            this.el = t,
            this.$el = e(t),
            this.interval = null,
            this.offset = {}, this.instanceNumber = r.length,
            r.push(this),
            this.$el.data("countdown-instance", this.instanceNumber),
            i && (this.$el.on("update.countdown", i), this.$el.on("stoped.countdown", i), this.$el.on("finish.countdown", i)),
            this.setFinalDate(n),
            this.start()
        };
    e.extend(l.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var e = this;
            this.update(),
            this.interval = setInterval(function () {
                e.update.call(e)
            }, o)
        }, stop: function () {
            clearInterval(this.interval),
            this.interval = null,
            this.dispatchEvent("stoped")
        }, pause: function () {
            this.stop.call(this)
        }, resume: function () {
            this.start.call(this)
        }, remove: function () {
            this.stop(),
            r[this.instanceNumber] = null,
            delete this.$el.data().countdownInstance
        }, setFinalDate: function (e) {
            this.finalDate = t(e)
        }, update: function () {
            return 0 === this.$el.closest("html").length ? void this.remove() : (this.totalSecsLeft = this.finalDate.getTime() - (new Date).getTime(), this.totalSecsLeft = Math.ceil(this.totalSecsLeft / 1e3), this.totalSecsLeft = this.totalSecsLeft < 0 ? 0 : this.totalSecsLeft, this.offset = {
                seconds: this.totalSecsLeft % 60,
                minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30),
                years: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 365)
            }, void(0 === this.totalSecsLeft ? (this.stop(), this.dispatchEvent("finish")) : this.dispatchEvent("update")))
        }, dispatchEvent: function (t) {
            var i = e.Event(t + ".countdown");
            i.finalDate = this.finalDate,
            i.offset = e.extend({}, this.offset),
            i.strftime = n(this.offset),
            this.$el.trigger(i)
        }
    }),
    e.fn.countdown = function () {
        var t = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            var n = e(this).data("countdown-instance");
            if (void 0 !== n) {
                var i = r[n],
                    o = t[0];
                l.prototype.hasOwnProperty(o) ? i[o].apply(i, t.slice(1)) : null === String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (i.setFinalDate.call(i, o), i.start()) : e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, o))
            } else new l(this, t[0], t[1])
        })
    }
}),


function (e, t) {
    function n(e) {
        return "object" == typeof e
    }
    function i(e) {
        return "string" == typeof e
    }
    function o(e) {
        return "number" == typeof e
    }
    function r(e) {
        return e === t
    }
    function s() {
        M = google.maps,
        D || (D = {
            verbose: !1,
            queryLimit: {
                attempt: 5,
                delay: 250,
                random: 250
            }, classes: function () {
                var t = {};
                return e.each("Map Marker InfoWindow Circle Rectangle OverlayView StreetViewPanorama KmlLayer TrafficLayer TransitLayer BicyclingLayer GroundOverlay StyledMapType ImageMapType".split(" "), function (e, n) {
                    t[n] = M[n]
                }),
                t
            }(),
            map: {
                mapTypeId: M.MapTypeId.ROADMAP,
                center: [46.578498, 2.457275],
                zoom: 2
            }, overlay: {
                pane: "floatPane",
                content: "",
                offset: {
                    x: 0,
                    y: 0
                }
            }, geoloc: {
                getCurrentPosition: {
                    maximumAge: 6e4,
                    timeout: 5e3
                }
            }
        })
    }
    function a(e, t) {
        return r(e) ? "gmap3_" + (t ? z + 1 : ++z) : e
    }
    function l(e) {
        var t, n = M.version.split(".");
        for (e = e.split("."), t = 0; t < n.length; t++) n[t] = parseInt(n[t], 10);
        for (t = 0; t < e.length; t++) {
            if (e[t] = parseInt(e[t], 10), !n.hasOwnProperty(t)) return !1;
            if (n[t] < e[t]) return !1
        }
        return !0
    }
    function u(t, n, i, o, r) {
        function s(n, o) {
            n && e.each(n, function (e, n) {
                var s = t,
                    a = n;
                H(n) && (s = n[0], a = n[1]),
                o(i, e, function (e) {
                    a.apply(s, [r || i, e, l])
                })
            })
        }
        var a = n.td || {},
            l = {
                id: o,
                data: a.data,
                tag: a.tag
            };
        s(a.events, M.event.addListener),
        s(a.onces, M.event.addListenerOnce)
    }
    function c(e) {
        var t, n = [];
        for (t in e) e.hasOwnProperty(t) && n.push(t);
        return n
    }
    function d(e, t) {
        var n, i = arguments;
        for (n = 2; n < i.length; n++) if (t in i[n] && i[n].hasOwnProperty(t)) return void(e[t] = i[n][t])
    }
    function p(t, n) {
        var i, o, r = ["data", "tag", "id", "events", "onces"],
            s = {};
        if (t.td) for (i in t.td) t.td.hasOwnProperty(i) && "options" !== i && "values" !== i && (s[i] = t.td[i]);
        for (o = 0; o < r.length; o++) d(s, r[o], n, t.td);
        return s.options = e.extend({}, t.opts || {}, n.options || {}),
        s
    }
    function h() {
        if (D.verbose) {
            var e, t = [];
            if (window.console && F(console.error)) {
                for (e = 0; e < arguments.length; e++) t.push(arguments[e]);
                console.error.apply(console, t)
            } else {
                for (t = "", e = 0; e < arguments.length; e++) t += arguments[e].toString() + " ";
                alert(t)
            }
        }
    }
    function f(e) {
        return (o(e) || i(e)) && "" !== e && !isNaN(e)
    }
    function g(e) {
        var t, i = [];
        if (!r(e)) if (n(e)) if (o(e.length)) i = e;
        else for (t in e) i.push(e[t]);
        else i.push(e);
        return i
    }
    function m(t) {
        return t ? F(t) ? t : (t = g(t), function (i) {
            var o;
            if (r(i)) return !1;
            if (n(i)) {
                for (o = 0; o < i.length; o++) if (e.inArray(i[o], t) >= 0) return !0;
                return !1
            }
            return e.inArray(i, t) >= 0
        }) : void 0
    }
    function y(e, t, n) {
        var o = t ? e : null;
        return !e || i(e) ? o : e.latLng ? y(e.latLng) : e instanceof M.LatLng ? e : f(e.lat) ? new M.LatLng(e.lat, e.lng) : !n && H(e) && f(e[0]) && f(e[1]) ? new M.LatLng(e[0], e[1]) : o
    }
    function v(e) {
        var t, n;
        return !e || e instanceof M.LatLngBounds ? e || null : (H(e) ? 2 === e.length ? (t = y(e[0]), n = y(e[1])) : 4 === e.length && (t = y([e[0], e[1]]), n = y([e[2], e[3]])) : "ne" in e && "sw" in e ? (t = y(e.ne), n = y(e.sw)) : "n" in e && "e" in e && "s" in e && "w" in e && (t = y([e.n, e.e]), n = y([e.s, e.w])), t && n ? new M.LatLngBounds(n, t) : null)
    }
    function b(e, t, n, o, r) {
        var s = !! n && y(o.td, !1, !0),
            a = s ? {
                latLng: s
            } : !! o.td.address && (i(o.td.address) ? {
                address: o.td.address
            } : o.td.address),
            l = !! a && B.get(a),
            u = this;
        a ? (r = r || 0, l ? (o.latLng = l.results[0].geometry.location, o.results = l.results, o.status = l.status, t.apply(e, [o])) : (a.location && (a.location = y(a.location)), a.bounds && (a.bounds = v(a.bounds)), P().geocode(a, function (i, s) {
            s === M.GeocoderStatus.OK ? (B.store(a, {
                results: i,
                status: s
            }), o.latLng = i[0].geometry.location, o.results = i, o.status = s, t.apply(e, [o])) : s === M.GeocoderStatus.OVER_QUERY_LIMIT && r < D.queryLimit.attempt ? setTimeout(function () {
                b.apply(u, [e, t, n, o, r + 1])
            }, D.queryLimit.delay + Math.floor(Math.random() * D.queryLimit.random)) : (h("geocode failed", s, a), o.latLng = o.results = !1, o.status = s, t.apply(e, [o]))
        }))) : (o.latLng = y(o.td, !1, !0), t.apply(e, [o]))
    }
    function w(t, n, i, o) {
        function r() {
            do {
                a++
            } while (a < t.length && !("address" in t[a]));
            return a >= t.length ? void i.apply(n, [o]) : void b(s, function (n) {
                delete n.td,
                e.extend(t[a], n),
                r.apply(s, [])
            }, !0, {
                td: t[a]
            })
        }
        var s = this,
            a = -1;
        r()
    }
    function T(e, t, n) {
        var i = !1;
        navigator && navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (o) {
            i || (i = !0, n.latLng = new M.LatLng(o.coords.latitude, o.coords.longitude), t.apply(e, [n]))
        }, function () {
            i || (i = !0, n.latLng = !1, t.apply(e, [n]))
        }, n.opts.getCurrentPosition) : (n.latLng = !1, t.apply(e, [n]))
    }
    function x(e) {
        var t, i = !1;
        if (n(e) && e.hasOwnProperty("get")) {
            for (t in e) if ("get" !== t) return !1;
            i = !e.get.hasOwnProperty("callback")
        }
        return i
    }
    function P() {
        return N.geocoder || (N.geocoder = new M.Geocoder),
        N.geocoder
    }
    function S() {
        var e = [];
        this.get = function (t) {
            if (e.length) {
                var i, o, r, s, a, l = c(t);
                for (i = 0; i < e.length; i++) {
                    for (s = e[i], a = l.length === s.keys.length, o = 0; o < l.length && a; o++) r = l[o],
                    (a = r in s.request) && (a = n(t[r]) && "equals" in t[r] && F(t[r]) ? t[r].equals(s.request[r]) : t[r] === s.request[r]);
                    if (a) return s.results
                }
            }
        }, this.store = function (t, n) {
            e.push({
                request: t,
                keys: c(t),
                results: n
            })
        }
    }
    function C() {
        var e = [],
            t = this;
        t.empty = function () {
            return !e.length
        }, t.add = function (t) {
            e.push(t)
        }, t.get = function () {
            return !!e.length && e[0]
        }, t.ack = function () {
            e.shift()
        }
    }
    function k() {
        function t(e) {
            return {
                id: e.id,
                name: e.name,
                object: e.obj,
                tag: e.tag,
                data: e.data
            }
        }
        function n(e) {
            F(e.setMap) && e.setMap(null),
            F(e.remove) && e.remove(),
            F(e.free) && e.free(),
            e = null
        }
        var i = {},
            o = {},
            s = this;
        s.add = function (e, t, n, r) {
            var l = e.td || {},
                u = a(l.id);
            return i[t] || (i[t] = []),
            u in o && s.clearById(u),
            o[u] = {
                obj: n,
                sub: r,
                name: t,
                id: u,
                tag: l.tag,
                data: l.data
            }, i[t].push(u),
            u
        }, s.getById = function (e, n, i) {
            var r = !1;
            return e in o && (r = n ? o[e].sub : i ? t(o[e]) : o[e].obj),
            r
        }, s.get = function (e, n, r, s) {
            var a, l, u = m(r);
            if (!i[e] || !i[e].length) return null;
            for (a = i[e].length; a;) if (a--, (l = i[e][n ? a : i[e].length - a - 1]) && o[l]) {
                if (u && !u(o[l].tag)) continue;
                return s ? t(o[l]) : o[l].obj
            }
            return null
        }, s.all = function (e, n, s) {
            var a = [],
                l = m(n),
                u = function (e) {
                    var n, r;
                    for (n = 0; n < i[e].length; n++) if ((r = i[e][n]) && o[r]) {
                        if (l && !l(o[r].tag)) continue;
                        a.push(s ? t(o[r]) : o[r].obj)
                    }
                };
            if (e in i) u(e);
            else if (r(e)) for (e in i) u(e);
            return a
        }, s.rm = function (e, t, n) {
            var r, a;
            if (!i[e]) return !1;
            if (t) if (n) for (r = i[e].length - 1; r >= 0 && (a = i[e][r], !t(o[a].tag)); r--);
            else for (r = 0; r < i[e].length && (a = i[e][r], !t(o[a].tag)); r++);
            else r = n ? i[e].length - 1 : 0;
            return r in i[e] && s.clearById(i[e][r], r)
        }, s.clearById = function (e, t) {
            if (e in o) {
                var s, a = o[e].name;
                for (s = 0; r(t) && s < i[a].length; s++) e === i[a][s] && (t = s);
                return n(o[e].obj),
                o[e].sub && n(o[e].sub),
                delete o[e],
                i[a].splice(t, 1),
                !0
            }
            return !1
        }, s.objGetById = function (e) {
            var t, n;
            if (i.clusterer) for (n in i.clusterer) if (!1 !== (t = o[i.clusterer[n]].obj.getById(e))) return t;
            return !1
        }, s.objClearById = function (e) {
            var t;
            if (i.clusterer) for (t in i.clusterer) if (o[i.clusterer[t]].obj.clearById(e)) return !0;
            return null
        }, s.clear = function (e, t, n, o) {
            var r, a, l, u = m(o);
            if (e && e.length) e = g(e);
            else {
                e = [];
                for (r in i) e.push(r)
            }
            for (a = 0; a < e.length; a++) if (l = e[a], t) s.rm(l, u, !0);
            else if (n) s.rm(l, u, !1);
            else for (; s.rm(l, u, !1););
        }, s.objClear = function (t, n, r, s) {
            var a;
            if (i.clusterer && (e.inArray("marker", t) >= 0 || !t.length)) for (a in i.clusterer) o[i.clusterer[a]].obj.clear(n, r, s)
        }
    }
    function j(t, n, o) {
        function r(e) {
            var t = {};
            return t[e] = {}, t
        }
        function s() {
            var e;
            for (e in o) if (o.hasOwnProperty(e) && !l.hasOwnProperty(e)) return e
        }
        var a, l = {},
            u = this,
            c = {
                latLng: {
                    map: !1,
                    marker: !1,
                    infowindow: !1,
                    circle: !1,
                    overlay: !1,
                    getlatlng: !1,
                    getmaxzoom: !1,
                    getelevation: !1,
                    streetviewpanorama: !1,
                    getaddress: !0
                }, geoloc: {
                    getgeoloc: !0
                }
            };
        i(o) && (o = r(o)),
        u.run = function () {
            for (var i, r; i = s();) {
                if (F(t[i])) return a = i,
                r = e.extend(!0, {}, D[i] || {}, o[i].options || {}),
                void(i in c.latLng ? o[i].values ? w(o[i].values, t, t[i], {
                    td: o[i],
                    opts: r,
                    session: l
                }) : b(t, t[i], c.latLng[i], {
                    td: o[i],
                    opts: r,
                    session: l
                }) : i in c.geoloc ? T(t, t[i], {
                    td: o[i],
                    opts: r,
                    session: l
                }) : t[i].apply(t, [{
                    td: o[i],
                    opts: r,
                    session: l
                }]));
                l[i] = null
            }
            n.apply(t, [o, l])
        }, u.ack = function (e) {
            l[a] = e,
            u.run.apply(u, [])
        }
    }
    function _() {
        return N.ds || (N.ds = new M.DirectionsService),
        N.ds
    }
    function I() {
        return N.dms || (N.dms = new M.DistanceMatrixService),
        N.dms
    }
    function Y() {
        return N.mzs || (N.mzs = new M.MaxZoomService),
        N.mzs
    }
    function O() {
        return N.es || (N.es = new M.ElevationService),
        N.es
    }
    function E(e, t) {
        function n() {
            var e = this;
            return e.onAdd = function () {}, e.onRemove = function () {}, e.draw = function () {}, D.classes.OverlayView.apply(e, [])
        }
        n.prototype = D.classes.OverlayView.prototype;
        var i = new n;
        return i.setMap(e),
        i
    }
    function A(t, i, o) {
        function r(e) {
            A[e] || (delete $[e].options.map, A[e] = new D.classes.Marker($[e].options), u(t, {
                td: $[e]
            }, A[e], $[e].id))
        }
        function s() {
            return (v = Q.getProjection()) ? (C = !0, _.push(M.event.addListener(i, "zoom_changed", h)), _.push(M.event.addListener(i, "bounds_changed", h)), void g()) : void setTimeout(function () {
                s.apply(j, [])
            }, 25)
        }
        function l(e) {
            n(I[e]) ? (F(I[e].obj.setMap) && I[e].obj.setMap(null), F(I[e].obj.remove) && I[e].obj.remove(), F(I[e].shadow.remove) && I[e].obj.remove(), F(I[e].shadow.setMap) && I[e].shadow.setMap(null), delete I[e].obj, delete I[e].shadow) : A[e] && A[e].setMap(null),
            delete I[e]
        }
        function c() {
            var e, t, n, i, o, r, s, a, l = Math.cos,
                u = Math.sin,
                c = arguments;
            return c[0] instanceof M.LatLng ? (e = c[0].lat(), n = c[0].lng(), c[1] instanceof M.LatLng ? (t = c[1].lat(), i = c[1].lng()) : (t = c[1], i = c[2])) : (e = c[0], n = c[1], c[2] instanceof M.LatLng ? (t = c[2].lat(), i = c[2].lng()) : (t = c[2], i = c[3])),
            o = Math.PI * e / 180,
            r = Math.PI * n / 180,
            s = Math.PI * t / 180,
            a = Math.PI * i / 180,
            6371e3 * Math.acos(Math.min(l(o) * l(s) * l(r) * l(a) + l(o) * u(r) * l(s) * u(a) + u(o) * u(s), 1))
        }
        function d() {
            var e = c(i.getCenter(), i.getBounds().getNorthEast());
            return new M.Circle({
                center: i.getCenter(),
                radius: 1.25 * e
            }).getBounds()
        }
        function p() {
            var e, t = {};
            for (e in I) t[e] = !0;
            return t
        }
        function h() {
            clearTimeout(y),
            y = setTimeout(g, 25)
        }
        function f(e) {
            var t = v.fromLatLngToDivPixel(e),
                n = v.fromDivPixelToLatLng(new M.Point(t.x + o.radius, t.y - o.radius)),
                i = v.fromDivPixelToLatLng(new M.Point(t.x - o.radius, t.y + o.radius));
            return new M.LatLngBounds(i, n)
        }
        function g() {
            if (!x && !S && C) {
                var t, n, r, s, a, u, c, h, g, m, y, v = !1,
                    T = [],
                    j = {},
                    _ = i.getZoom(),
                    Y = "maxZoom" in o && _ > o.maxZoom,
                    O = p();
                for (P = !1, _ > 3 && (a = d(), v = a.getSouthWest().lng() < a.getNorthEast().lng()), t = 0; t < $.length; t++)!$[t] || v && !a.contains($[t].options.position) || b && !b(L[t]) || T.push(t);
                for (;;) {
                    for (t = 0; j[t] && t < T.length;) t++;
                    if (t === T.length) break;
                    if (s = [], k && !Y) {
                        y = 10;
                        do {
                            for (h = s, s = [], y--, c = h.length ? a.getCenter() : $[T[t]].options.position, a = f(c), n = t; n < T.length; n++) j[n] || a.contains($[T[n]].options.position) && s.push(n)
                        } while (h.length < s.length && s.length > 1 && y)
                    } else for (n = t; n < T.length; n++) if (!j[n]) {
                        s.push(n);
                        break
                    }
                    for (u = {
                        indexes: [],
                        ref: []
                    }, g = m = 0, r = 0; r < s.length; r++) j[s[r]] = !0,
                    u.indexes.push(T[s[r]]),
                    u.ref.push(T[s[r]]),
                    g += $[T[s[r]]].options.position.lat(),
                    m += $[T[s[r]]].options.position.lng();
                    g /= s.length,
                    m /= s.length,
                    u.latLng = new M.LatLng(g, m),
                    u.ref = u.ref.join("-"),
                    u.ref in O ? delete O[u.ref] : (1 === s.length && (I[u.ref] = !0), w(u))
                }
                e.each(O, function (e) {
                    l(e)
                }),
                S = !1
            }
        }
        var y, v, b, w, T, x = !1,
            P = !1,
            S = !1,
            C = !1,
            k = !0,
            j = this,
            _ = [],
            I = {},
            Y = {},
            O = {},
            A = [],
            $ = [],
            L = [],
            Q = E(i, o.radius);
        s(),
        j.getById = function (e) {
            return e in Y && (r(Y[e]), A[Y[e]])
        }, j.rm = function (e) {
            var t = Y[e];
            A[t] && A[t].setMap(null),
            delete A[t],
            A[t] = !1,
            delete $[t],
            $[t] = !1,
            delete L[t],
            L[t] = !1,
            delete Y[e],
            delete O[t],
            P = !0
        }, j.clearById = function (e) {
            return e in Y ? (j.rm(e), !0) : void 0
        }, j.clear = function (e, t, n) {
            var i, o, r, s, a, l = [],
                u = m(n);
            for (e ? (i = $.length - 1, o = -1, r = -1) : (i = 0, o = $.length, r = 1), s = i; s !== o && (!$[s] || u && !u($[s].tag) || (l.push(O[s]), !t && !e)); s += r);
            for (a = 0; a < l.length; a++) j.rm(l[a])
        }, j.add = function (e, t) {
            e.id = a(e.id),
            j.clearById(e.id),
            Y[e.id] = A.length,
            O[A.length] = e.id,
            A.push(null),
            $.push(e),
            L.push(t),
            P = !0
        }, j.addMarker = function (e, n) {
            n = n || {}, n.id = a(n.id),
            j.clearById(n.id),
            n.options || (n.options = {}),
            n.options.position = e.getPosition(),
            u(t, {
                td: n
            }, e, n.id),
            Y[n.id] = A.length,
            O[A.length] = n.id,
            A.push(e),
            $.push(n),
            L.push(n.data || {}),
            P = !0
        }, j.td = function (e) {
            return $[e]
        }, j.value = function (e) {
            return L[e]
        }, j.marker = function (e) {
            return e in A && (r(e), A[e])
        }, j.markerIsSet = function (e) {
            return Boolean(A[e])
        }, j.setMarker = function (e, t) {
            A[e] = t
        }, j.store = function (e, t, n) {
            I[e.ref] = {
                obj: t,
                shadow: n
            }
        }, j.free = function () {
            var t;
            for (t = 0; t < _.length; t++) M.event.removeListener(_[t]);
            _ = [],
            e.each(I, function (e) {
                l(e)
            }),
            I = {}, e.each($, function (e) {
                $[e] = null
            }),
            $ = [],
            e.each(A, function (e) {
                A[e] && (A[e].setMap(null), delete A[e])
            }),
            A = [],
            e.each(L, function (e) {
                delete L[e]
            }),
            L = [],
            Y = {}, O = {}
        }, j.filter = function (e) {
            b = e,
            g()
        }, j.enable = function (e) {
            k !== e && (k = e, g())
        }, j.display = function (e) {
            w = e
        }, j.error = function (e) {
            T = e
        }, j.beginUpdate = function () {
            x = !0
        }, j.endUpdate = function () {
            x = !1,
            P && g()
        }, j.autofit = function (e) {
            var t;
            for (t = 0; t < $.length; t++) $[t] && e.extend($[t].options.position)
        }
    }
    function $(e, t) {
        var n = this;
        n.id = function () {
            return e
        }, n.filter = function (e) {
            t.filter(e)
        }, n.enable = function () {
            t.enable(!0)
        }, n.disable = function () {
            t.enable(!1)
        }, n.add = function (e, n, i) {
            i || t.beginUpdate(),
            t.addMarker(e, n),
            i || t.endUpdate()
        }, n.getById = function (e) {
            return t.getById(e)
        }, n.clearById = function (e, n) {
            var i;
            return n || t.beginUpdate(),
            i = t.clearById(e),
            n || t.endUpdate(),
            i
        }, n.clear = function (e, n, i, o) {
            o || t.beginUpdate(),
            t.clear(e, n, i),
            o || t.endUpdate()
        }
    }
    function L(t, n, i, o) {
        var r = this,
            s = [];
        D.classes.OverlayView.call(r),
        r.setMap(t),
        r.onAdd = function () {
            var t = r.getPanes();
            n.pane in t && e(t[n.pane]).append(o),
            e.each("dblclick click mouseover mousemove mouseout mouseup mousedown".split(" "), function (t, n) {
                s.push(M.event.addDomListener(o[0], n, function (t) {
                    e.Event(t).stopPropagation(),
                    M.event.trigger(r, n, [t]),
                    r.draw()
                }))
            }),
            s.push(M.event.addDomListener(o[0], "contextmenu", function (t) {
                e.Event(t).stopPropagation(),
                M.event.trigger(r, "rightclick", [t]),
                r.draw()
            }))
        }, r.getPosition = function () {
            return i
        }, r.setPosition = function (e) {
            i = e,
            r.draw()
        }, r.draw = function () {
            var e = r.getProjection().fromLatLngToDivPixel(i);
            o.css("left", e.x + n.offset.x + "px").css("top", e.y + n.offset.y + "px")
        }, r.onRemove = function () {
            var e;
            for (e = 0; e < s.length; e++) M.event.removeListener(s[e]);
            o.remove()
        }, r.hide = function () {
            o.hide()
        }, r.show = function () {
            o.show()
        }, r.toggle = function () {
            o && (o.is(":visible") ? r.show() : r.hide())
        }, r.toggleDOM = function () {
            r.setMap(r.getMap() ? null : t)
        }, r.getDOMElement = function () {
            return o[0]
        }
    }
    function Q(o) {
        function s() {
            !T && (T = P.get()) && T.run()
        }
        function c() {
            T = null,
            P.ack(),
            s.call(x)
        }
        function d(e) {
            var t, n = e.td.callback;
            n && (t = Array.prototype.slice.call(arguments, 1), F(n) ? n.apply(o, t) : H(n) && F(n[1]) && n[1].apply(n[0], t))
        }
        function f(e, t, n) {
            n && u(o, e, t, n),
            d(e, t),
            T.ack(t)
        }
        function m(t, n) {
            n = n || {};
            var i = n.td && n.td.options ? n.td.options : 0;
            E ? i && (i.center && (i.center = y(i.center)), E.setOptions(i)) : (i = n.opts || e.extend(!0, {}, D.map, i || {}), i.center = t || y(i.center), E = new D.classes.Map(o.get(0), i))
        }
        function b(n) {
            var i, r, s = new A(o, E, n),
                a = {},
                l = {},
                c = [],
                d = /^[0-9]+$/;
            for (r in n) d.test(r) ? (c.push(1 * r), l[r] = n[r], l[r].width = l[r].width || 0, l[r].height = l[r].height || 0) : a[r] = n[r];
            return c.sort(function (e, t) {
                return e > t
            }),
            i = a.calculator ?
            function (t) {
                var n = [];
                return e.each(t, function (e, t) {
                    n.push(s.value(t))
                }),
                a.calculator.apply(o, [n])
            } : function (e) {
                return e.length
            }, s.error(function () {
                h.apply(x, arguments)
            }),
            s.display(function (r) {
                var d, p, h, f, g, m, v = i(r.indexes);
                if (n.force || v > 1) for (d = 0; d < c.length; d++) c[d] <= v && (p = l[c[d]]);
                p ? (g = p.offset || [-p.width / 2, -p.height / 2], h = e.extend({}, a), h.options = e.extend({
                    pane: "overlayLayer",
                    content: p.content ? p.content.replace("CLUSTER_COUNT", v) : "",
                    offset: {
                        x: ("x" in g ? g.x : g[0]) || 0,
                        y: ("y" in g ? g.y : g[1]) || 0
                    }
                }, a.options || {}), f = x.overlay({
                    td: h,
                    opts: h.options,
                    latLng: y(r)
                }, !0), h.options.pane = "floatShadow", h.options.content = e(document.createElement("div")).width(p.width + "px").height(p.height + "px").css({
                    cursor: "pointer"
                }), m = x.overlay({
                    td: h,
                    opts: h.options,
                    latLng: y(r)
                }, !0), a.data = {
                    latLng: y(r),
                    markers: []
                }, e.each(r.indexes, function (e, t) {
                    a.data.markers.push(s.value(t)),
                    s.markerIsSet(t) && s.marker(t).setMap(null)
                }), u(o, {
                    td: a
                }, m, t, {
                    main: f,
                    shadow: m
                }), s.store(r, f, m)) : e.each(r.indexes, function (e, t) {
                    s.marker(t).setMap(E)
                })
            }),
            s
        }
        function w(t, n, i) {
            var r = [],
                s = "values" in t.td;
            return s || (t.td.values = [{
                options: t.opts
            }]),
            t.td.values.length ? (m(), e.each(t.td.values, function (e, s) {
                var a, l, c, d, h = p(t, s);
                if (h.options[i]) if (h.options[i][0][0] && H(h.options[i][0][0])) for (l = 0; l < h.options[i].length; l++) for (c = 0; c < h.options[i][l].length; c++) h.options[i][l][c] = y(h.options[i][l][c]);
                else for (l = 0; l < h.options[i].length; l++) h.options[i][l] = y(h.options[i][l]);
                h.options.map = E,
                d = new M[n](h.options),
                r.push(d),
                a = S.add({
                    td: h
                }, n.toLowerCase(), d),
                u(o, {
                    td: h
                }, d, a)
            }), void f(t, s ? r : r[0])) : void f(t, !1)
        }
        var T, x = this,
            P = new C,
            S = new k,
            E = null;
        x._plan = function (e) {
            var t;
            for (t = 0; t < e.length; t++) P.add(new j(x, c, e[t]));
            s()
        }, x.map = function (e) {
            m(e.latLng, e),
            u(o, e, E),
            f(e, E)
        }, x.destroy = function (e) {
            S.clear(),
            o.empty(),
            E && (E = null),
            f(e, !0)
        }, x.overlay = function (t, n) {
            var i = [],
                r = "values" in t.td;
            return r || (t.td.values = [{
                latLng: t.latLng,
                options: t.opts
            }]),
            t.td.values.length ? (L.__initialised || (L.prototype = new D.classes.OverlayView, L.__initialised = !0), e.each(t.td.values, function (r, s) {
                var a, l, c = p(t, s),
                    d = e(document.createElement("div")).css({
                        border: "none",
                        borderWidth: 0,
                        position: "absolute"
                    });
                d.append(c.options.content),
                l = new L(E, c.options, y(c) || y(s), d),
                i.push(l),
                d = null,
                n || (a = S.add(t, "overlay", l), u(o, {
                    td: c
                }, l, a))
            }), n ? i[0] : void f(t, r ? i : i[0])) : void f(t, !1)
        }, x.marker = function (t) {
            var n, i, r, s = "values" in t.td,
                l = !E;
            return s || (t.opts.position = t.latLng || y(t.opts.position), t.td.values = [{
                options: t.opts
            }]),
            t.td.values.length ? (l && m(), t.td.cluster && !E.getBounds() ? void M.event.addListenerOnce(E, "bounds_changed", function () {
                x.marker.apply(x, [t])
            }) : void(t.td.cluster ? (t.td.cluster instanceof $ ? (i = t.td.cluster, r = S.getById(i.id(), !0)) : (r = b(t.td.cluster), i = new $(a(t.td.id, !0), r), S.add(t, "clusterer", i, r)), r.beginUpdate(), e.each(t.td.values, function (e, n) {
                var i = p(t, n);
                i.options.position = y(i.options.position ? i.options.position : n),
                i.options.position && (i.options.map = E, l && (E.setCenter(i.options.position), l = !1), r.add(i, n))
            }), r.endUpdate(), f(t, i)) : (n = [], e.each(t.td.values, function (e, i) {
                var r, s, a = p(t, i);
                a.options.position = y(a.options.position ? a.options.position : i),
                a.options.position && (a.options.map = E, l && (E.setCenter(a.options.position), l = !1), s = new D.classes.Marker(a.options), n.push(s), r = S.add({
                    td: a
                }, "marker", s), u(o, {
                    td: a
                }, s, r))
            }), f(t, s ? n : n[0])))) : void f(t, !1)
        }, x.getroute = function (e) {
            e.opts.origin = y(e.opts.origin, !0),
            e.opts.destination = y(e.opts.destination, !0),
            _().route(e.opts, function (t, n) {
                d(e, n === M.DirectionsStatus.OK && t, n),
                T.ack()
            })
        }, x.getdistance = function (e) {
            var t;
            for (e.opts.origins = g(e.opts.origins), t = 0; t < e.opts.origins.length; t++) e.opts.origins[t] = y(e.opts.origins[t], !0);
            for (e.opts.destinations = g(e.opts.destinations), t = 0; t < e.opts.destinations.length; t++) e.opts.destinations[t] = y(e.opts.destinations[t], !0);
            I().getDistanceMatrix(e.opts, function (t, n) {
                d(e, n === M.DistanceMatrixStatus.OK && t, n),
                T.ack()
            })
        }, x.infowindow = function (n) {
            var i = [],
                s = "values" in n.td;
            s || (n.latLng && (n.opts.position = n.latLng), n.td.values = [{
                options: n.opts
            }]),
            e.each(n.td.values, function (e, a) {
                var l, c, d = p(n, a);
                d.options.position = y(d.options.position ? d.options.position : a.latLng),
                E || m(d.options.position),
                c = new D.classes.InfoWindow(d.options),
                c && (r(d.open) || d.open) && (s ? c.open(E, d.anchor || t) : c.open(E, d.anchor || (n.latLng ? t : n.session.marker ? n.session.marker : t))),
                i.push(c),
                l = S.add({
                    td: d
                }, "infowindow", c),
                u(o, {
                    td: d
                }, c, l)
            }),
            f(n, s ? i : i[0])
        }, x.circle = function (t) {
            var n = [],
                i = "values" in t.td;
            return i || (t.opts.center = t.latLng || y(t.opts.center), t.td.values = [{
                options: t.opts
            }]),
            t.td.values.length ? (e.each(t.td.values, function (e, i) {
                var r, s, a = p(t, i);
                a.options.center = y(a.options.center ? a.options.center : i),
                E || m(a.options.center),
                a.options.map = E,
                s = new D.classes.Circle(a.options),
                n.push(s),
                r = S.add({
                    td: a
                }, "circle", s),
                u(o, {
                    td: a
                }, s, r)
            }), void f(t, i ? n : n[0])) : void f(t, !1)
        }, x.getaddress = function (e) {
            d(e, e.results, e.status),
            T.ack()
        }, x.getlatlng = function (e) {
            d(e, e.results, e.status),
            T.ack()
        }, x.getmaxzoom = function (e) {
            Y().getMaxZoomAtLatLng(e.latLng, function (t) {
                d(e, t.status === M.MaxZoomStatus.OK && t.zoom, status),
                T.ack()
            })
        }, x.getelevation = function (e) {
            var t, n = [],
                i = function (t, n) {
                    d(e, n === M.ElevationStatus.OK && t, n),
                    T.ack()
                };
            if (e.latLng) n.push(e.latLng);
            else for (n = g(e.td.locations || []), t = 0; t < n.length; t++) n[t] = y(n[t]);
            if (n.length) O().getElevationForLocations({
                locations: n
            }, i);
            else {
                if (e.td.path && e.td.path.length) for (t = 0; t < e.td.path.length; t++) n.push(y(e.td.path[t]));
                n.length ? O().getElevationAlongPath({
                    path: n,
                    samples: e.td.samples
                }, i) : T.ack()
            }
        }, x.defaults = function (t) {
            e.each(t.td, function (t, i) {
                n(D[t]) ? D[t] = e.extend({}, D[t], i) : D[t] = i
            }),
            T.ack(!0)
        }, x.rectangle = function (t) {
            var n = [],
                i = "values" in t.td;
            return i || (t.td.values = [{
                options: t.opts
            }]),
            t.td.values.length ? (e.each(t.td.values, function (e, i) {
                var r, s, a = p(t, i);
                a.options.bounds = v(a.options.bounds ? a.options.bounds : i),
                E || m(a.options.bounds.getCenter()),
                a.options.map = E,
                s = new D.classes.Rectangle(a.options),
                n.push(s),
                r = S.add({
                    td: a
                }, "rectangle", s),
                u(o, {
                    td: a
                }, s, r)
            }), void f(t, i ? n : n[0])) : void f(t, !1)
        }, x.polyline = function (e) {
            w(e, "Polyline", "path")
        }, x.polygon = function (e) {
            w(e, "Polygon", "paths")
        }, x.trafficlayer = function (e) {
            m();
            var t = S.get("trafficlayer");
            t || (t = new D.classes.TrafficLayer, t.setMap(E), S.add(e, "trafficlayer", t)),
            f(e, t)
        }, x.transitlayer = function (e) {
            m();
            var t = S.get("transitlayer");
            t || (t = new D.classes.TransitLayer, t.setMap(E), S.add(e, "transitlayer", t)),
            f(e, t)
        }, x.bicyclinglayer = function (e) {
            m();
            var t = S.get("bicyclinglayer");
            t || (t = new D.classes.BicyclingLayer, t.setMap(E), S.add(e, "bicyclinglayer", t)),
            f(e, t)
        }, x.groundoverlay = function (e) {
            e.opts.bounds = v(e.opts.bounds),
            e.opts.bounds && m(e.opts.bounds.getCenter());
            var t, n = new D.classes.GroundOverlay(e.opts.url, e.opts.bounds, e.opts.opts);
            n.setMap(E),
            t = S.add(e, "groundoverlay", n),
            f(e, n, t)
        }, x.streetviewpanorama = function (t) {
            t.opts.opts || (t.opts.opts = {}),
            t.latLng ? t.opts.opts.position = t.latLng : t.opts.opts.position && (t.opts.opts.position = y(t.opts.opts.position)),
            t.td.divId ? t.opts.container = document.getElementById(t.td.divId) : t.opts.container && (t.opts.container = e(t.opts.container).get(0));
            var n, i = new D.classes.StreetViewPanorama(t.opts.container, t.opts.opts);
            i && E.setStreetView(i),
            n = S.add(t, "streetviewpanorama", i),
            f(t, i, n)
        }, x.kmllayer = function (t) {
            var n = [],
                i = "values" in t.td;
            return i || (t.td.values = [{
                options: t.opts
            }]),
            t.td.values.length ? (e.each(t.td.values, function (e, i) {
                var r, s, a, c = p(t, i);
                E || m(),
                a = c.options,
                c.options.opts && (a = c.options.opts, c.options.url && (a.url = c.options.url)),
                a.map = E,
                s = l("3.10") ? new D.classes.KmlLayer(a) : new D.classes.KmlLayer(a.url, a),
                n.push(s),
                r = S.add({
                    td: c
                }, "kmllayer", s),
                u(o, {
                    td: c
                }, s, r)
            }), void f(t, i ? n : n[0])) : void f(t, !1)
        }, x.panel = function (t) {
            m();
            var n, i, s = 0,
                a = 0,
                l = e(document.createElement("div"));
            l.css({
                position: "absolute",
                zIndex: 1e3,
                visibility: "hidden"
            }),
            t.opts.content && (i = e(t.opts.content), l.append(i), o.first().prepend(l), r(t.opts.left) ? r(t.opts.right) ? t.opts.center && (s = (o.width() - i.width()) / 2) : s = o.width() - i.width() - t.opts.right : s = t.opts.left, r(t.opts.top) ? r(t.opts.bottom) ? t.opts.middle && (a = (o.height() - i.height()) / 2) : a = o.height() - i.height() - t.opts.bottom : a = t.opts.top, l.css({
                top: a,
                left: s,
                visibility: "visible"
            })),
            n = S.add(t, "panel", l),
            f(t, l, n),
            l = null
        }, x.directionsrenderer = function (t) {
            t.opts.map = E;
            var n, i = new M.DirectionsRenderer(t.opts);
            t.td.divId ? i.setPanel(document.getElementById(t.td.divId)) : t.td.container && i.setPanel(e(t.td.container).get(0)),
            n = S.add(t, "directionsrenderer", i),
            f(t, i, n)
        }, x.getgeoloc = function (e) {
            f(e, e.latLng)
        }, x.styledmaptype = function (e) {
            m();
            var t = new D.classes.StyledMapType(e.td.styles, e.opts);
            E.mapTypes.set(e.td.id, t),
            f(e, t)
        }, x.imagemaptype = function (e) {
            m();
            var t = new D.classes.ImageMapType(e.opts);
            E.mapTypes.set(e.td.id, t),
            f(e, t)
        }, x.autofit = function (t) {
            var n = new M.LatLngBounds;
            e.each(S.all(), function (e, t) {
                t.getPosition && t.getPosition() ? n.extend(t.getPosition()) : t.getBounds && t.getBounds() ? (n.extend(t.getBounds().getNorthEast()), n.extend(t.getBounds().getSouthWest())) : t.getPaths && t.getPaths() ? t.getPaths().forEach(function (e) {
                    e.forEach(function (e) {
                        n.extend(e)
                    })
                }) : t.getPath && t.getPath() ? t.getPath().forEach(function (e) {
                    n.extend(e)
                }) : t.getCenter && t.getCenter() ? n.extend(t.getCenter()) : "function" == typeof $ && t instanceof $ && (t = S.getById(t.id(), !0)) && t.autofit(n)
            }),
            n.isEmpty() || E.getBounds() && E.getBounds().equals(n) || ("maxZoom" in t.td && M.event.addListenerOnce(E, "bounds_changed", function () {
                this.getZoom() > t.td.maxZoom && this.setZoom(t.td.maxZoom)
            }), E.fitBounds(n)),
            f(t, !0)
        }, x.clear = function (t) {
            if (i(t.td)) {
                if (S.clearById(t.td) || S.objClearById(t.td)) return void f(t, !0);
                t.td = {
                    name: t.td
                }
            }
            t.td.id ? e.each(g(t.td.id), function (e, t) {
                S.clearById(t) || S.objClearById(t)
            }) : (S.clear(g(t.td.name), t.td.last, t.td.first, t.td.tag), S.objClear(g(t.td.name), t.td.last, t.td.first, t.td.tag)),
            f(t, !0)
        }, x.get = function (n, o, r) {
            var s, a, l = o ? n : n.td;
            return o || (r = l.full),
            i(l) ? !1 === (a = S.getById(l, !1, r) || S.objGetById(l)) && (s = l, l = {}) : s = l.name,
            "map" === s && (a = E),
            a || (a = [], l.id ? (e.each(g(l.id), function (e, t) {
                a.push(S.getById(t, !1, r) || S.objGetById(t))
            }), H(l.id) || (a = a[0])) : (e.each(s ? g(s) : [t], function (t, n) {
                var i;
                l.first ? (i = S.get(n, !1, l.tag, r)) && a.push(i) : l.all ? e.each(S.all(n, l.tag, r), function (e, t) {
                    a.push(t)
                }) : (i = S.get(n, !0, l.tag, r)) && a.push(i)
            }), l.all || H(s) || (a = a[0]))),
            a = H(a) || !l.all ? a : [a],
            o ? a : void f(n, a)
        }, x.exec = function (t) {
            e.each(g(t.td.func), function (n, i) {
                e.each(x.get(t.td, !0, !t.td.hasOwnProperty("full") || t.td.full), function (e, t) {
                    i.call(o, t)
                })
            }),
            f(t, !0)
        }, x.trigger = function (t) {
            if (i(t.td)) M.event.trigger(E, t.td);
            else {
                var n = [E, t.td.eventName];
                t.td.var_args && e.each(t.td.var_args, function (e, t) {
                    n.push(t)
                }),
                M.event.trigger.apply(M.event, n)
            }
            d(t),
            T.ack()
        }
    }
    var D, M, z = 0,
        F = e.isFunction,
        H = e.isArray,
        N = {},
        B = new S;
    e.fn.gmap3 = function () {
        var t, n = [],
            i = !0,
            o = [];
        for (s(), t = 0; t < arguments.length; t++) arguments[t] && n.push(arguments[t]);
        return n.length || n.push("map"),
        e.each(this, function () {
            var t = e(this),
                r = t.data("gmap3");
            i = !1,
            r || (r = new Q(t), t.data("gmap3", r)),
            1 !== n.length || "get" !== n[0] && !x(n[0]) ? r._plan(n) : "get" === n[0] ? o.push(r.get("map", !0)) : o.push(r.get(n[0].get, !0, n[0].get.full))
        }),
        o.length ? 1 === o.length ? o[0] : o : this
    }
}(jQuery),


function (e, t) {
    "use strict";

    function n(e) {
        e = e || {};
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            if (n) for (var i in n) n.hasOwnProperty(i) && ("object" == typeof n[i] ? deepExtend(e[i], n[i]) : e[i] = n[i])
        }
        return e
    }
    function i(i, s) {
        function a() {
            if (S) {
                y = t.createElement("canvas"),
                y.className = "pg-canvas",
                y.style.display = "block",
                i.insertBefore(y, i.firstChild),
                v = y.getContext("2d"),
                l();
                for (var n = Math.round(y.width * y.height / s.density), o = 0; n > o; o++) {
                    var r = new h;
                    r.setStackPos(o),
                    C.push(r)
                }
                e.addEventListener("resize", function () {
                    c()
                }, !1),
                t.addEventListener("mousemove", function (e) {
                    k = e.pageX,
                    j = e.pageY
                }, !1),
                I && !_ && e.addEventListener("deviceorientation", function () {
                    O = Math.min(Math.max(-event.beta, -30), 30),
                    Y = Math.min(Math.max(-event.gamma, -30), 30)
                }, !0),
                u(),
                m("onInit")
            }
        }
        function l() {
            y.width = i.offsetWidth,
            y.height = i.offsetHeight,
            v.fillStyle = s.dotColor,
            v.strokeStyle = s.lineColor,
            v.lineWidth = s.lineWidth
        }
        function u() {
            if (S) {
                w = e.innerWidth,
                T = e.innerHeight,
                v.clearRect(0, 0, y.width, y.height);
                for (var t = 0; t < C.length; t++) C[t].updatePosition();
                for (var t = 0; t < C.length; t++) C[t].draw();
                E || (b = requestAnimationFrame(u))
            }
        }
        function c() {
            l();
            for (var e = i.offsetWidth, t = i.offsetHeight, n = C.length - 1; n >= 0; n--)(C[n].position.x > e || C[n].position.y > t) && C.splice(n, 1);
            var o = Math.round(y.width * y.height / s.density);
            if (o > C.length) for (; o > C.length;) {
                var r = new h;
                C.push(r)
            } else o < C.length && C.splice(o);
            for (n = C.length - 1; n >= 0; n--) C[n].setStackPos(n)
        }
        function d() {
            E = !0
        }
        function p() {
            E = !1,
            u()
        }
        function h() {
            switch (this.stackPos, this.active = !0, this.layer = Math.ceil(3 * Math.random()), this.parallaxOffsetX = 0, this.parallaxOffsetY = 0, this.position = {
                x: Math.ceil(Math.random() * y.width),
                y: Math.ceil(Math.random() * y.height)
            }, this.speed = {}, s.directionX) {
            case "left":
                this.speed.x = +(-s.maxSpeedX + Math.random() * s.maxSpeedX - s.minSpeedX).toFixed(2);
                break;
            case "right":
                this.speed.x = +(Math.random() * s.maxSpeedX + s.minSpeedX).toFixed(2);
                break;
            default:
                this.speed.x = +(-s.maxSpeedX / 2 + Math.random() * s.maxSpeedX).toFixed(2),
                this.speed.x += this.speed.x > 0 ? s.minSpeedX : -s.minSpeedX
            }
            switch (s.directionY) {
            case "up":
                this.speed.y = +(-s.maxSpeedY + Math.random() * s.maxSpeedY - s.minSpeedY).toFixed(2);
                break;
            case "down":
                this.speed.y = +(Math.random() * s.maxSpeedY + s.minSpeedY).toFixed(2);
                break;
            default:
                this.speed.y = +(-s.maxSpeedY / 2 + Math.random() * s.maxSpeedY).toFixed(2),
                this.speed.x += this.speed.y > 0 ? s.minSpeedY : -s.minSpeedY
            }
        }
        function f(e, t) {
            return t ? void(s[e] = t) : s[e]
        }
        function g() {
            console.log("destroy"),
            y.parentNode.removeChild(y),
            m("onDestroy"),
            r && r(i).removeData("plugin_" + o)
        }
        function m(e) {
            void 0 !== s[e] && s[e].call(i)
        }
        var y, v, b, w, T, x, P, S = !! t.createElement("canvas").getContext,
            C = [],
            k = 0,
            j = 0,
            _ = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),
            I = !! e.DeviceOrientationEvent,
            Y = 0,
            O = 0,
            E = !1;
        return s = n({}, e[o].defaults, s),
        h.prototype.draw = function () {
            v.beginPath(),
            v.arc(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY, s.particleRadius / 2, 0, 2 * Math.PI, !0),
            v.closePath(),
            v.fill(),
            v.beginPath();
            for (var e = C.length - 1; e > this.stackPos; e--) {
                var t = C[e],
                    n = this.position.x - t.position.x,
                    i = this.position.y - t.position.y;
                Math.sqrt(n * n + i * i).toFixed(2) < s.proximity && (v.moveTo(this.position.x + this.parallaxOffsetX, this.position.y + this.parallaxOffsetY), s.curvedLines ? v.quadraticCurveTo(Math.max(t.position.x, t.position.x), Math.min(t.position.y, t.position.y), t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY) : v.lineTo(t.position.x + t.parallaxOffsetX, t.position.y + t.parallaxOffsetY))
            }
            v.stroke(),
            v.closePath()
        }, h.prototype.updatePosition = function () {
            if (s.parallax) {
                if (I && !_) {
                    x = (Y - -30) * ((w - 0) / 60) + 0;
                    P = (O - -30) * ((T - 0) / 60) + 0
                } else x = k,
                P = j;
                this.parallaxTargX = (x - w / 2) / (s.parallaxMultiplier * this.layer),
                this.parallaxOffsetX += (this.parallaxTargX - this.parallaxOffsetX) / 10,
                this.parallaxTargY = (P - T / 2) / (s.parallaxMultiplier * this.layer),
                this.parallaxOffsetY += (this.parallaxTargY - this.parallaxOffsetY) / 10
            }
            var e = i.offsetWidth,
                t = i.offsetHeight;
            switch (s.directionX) {
            case "left":
                this.position.x + this.speed.x + this.parallaxOffsetX < 0 && (this.position.x = e - this.parallaxOffsetX);
                break;
            case "right":
                this.position.x + this.speed.x + this.parallaxOffsetX > e && (this.position.x = 0 - this.parallaxOffsetX);
                break;
            default:
                (this.position.x + this.speed.x + this.parallaxOffsetX > e || this.position.x + this.speed.x + this.parallaxOffsetX < 0) && (this.speed.x = -this.speed.x)
            }
            switch (s.directionY) {
            case "up":
                this.position.y + this.speed.y + this.parallaxOffsetY < 0 && (this.position.y = t - this.parallaxOffsetY);
                break;
            case "down":
                this.position.y + this.speed.y + this.parallaxOffsetY > t && (this.position.y = 0 - this.parallaxOffsetY);
                break;
            default:
                (this.position.y + this.speed.y + this.parallaxOffsetY > t || this.position.y + this.speed.y + this.parallaxOffsetY < 0) && (this.speed.y = -this.speed.y)
            }
            this.position.x += this.speed.x,
            this.position.y += this.speed.y
        }, h.prototype.setStackPos = function (e) {
            this.stackPos = e
        }, a(),
        {
            option: f,
            destroy: g,
            start: p,
            pause: d
        }
    }
    var o = "particleground",
        r = e.jQuery;
    e[o] = function (e, t) {
        return new i(e, t)
    }, e[o].defaults = {
        minSpeedX: .1,
        maxSpeedX: .7,
        minSpeedY: .1,
        maxSpeedY: .7,
        directionX: "center",
        directionY: "center",
        density: 1e4,
        dotColor: "#666666",
        lineColor: "#666666",
        particleRadius: 7,
        lineWidth: 1,
        curvedLines: !1,
        proximity: 100,
        parallax: !0,
        parallaxMultiplier: 5,
        onInit: function () {}, onDestroy: function () {}
    }, r && (r.fn[o] = function (e) {
        if ("string" == typeof arguments[0]) {
            var t, n = arguments[0],
                s = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                r.data(this, "plugin_" + o) && "function" == typeof r.data(this, "plugin_" + o)[n] && (t = r.data(this, "plugin_" + o)[n].apply(this, s))
            }),
            void 0 !== t ? t : this
        }
        return "object" != typeof e && e ? void 0 : this.each(function () {
            r.data(this, "plugin_" + o) || r.data(this, "plugin_" + o, new i(this, e))
        })
    })
}(window, document),


function () {
    for (var e = 0, t = ["ms", "moz", "webkit", "o"], n = 0; n < t.length && !window.requestAnimationFrame; ++n) window.requestAnimationFrame = window[t[n] + "RequestAnimationFrame"],
    window.cancelAnimationFrame = window[t[n] + "CancelAnimationFrame"] || window[t[n] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
        var n = (new Date).getTime(),
            i = Math.max(0, 16 - (n - e)),
            o = window.setTimeout(function () {
                t(n + i)
            }, i);
        return e = n + i,
        o
    }),
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
        clearTimeout(e)
    })
}();
var canvasID = "particles",
    canvas = document.getElementById(canvasID);
if (canvas) {
    var $headerSizer, width, height, ctx, circles, animateHeader = !0;
    $headerSizer = $(".full-slider"),
    initHeader(),
    addListeners()
}