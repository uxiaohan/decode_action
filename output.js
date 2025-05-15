//Thu May 15 2025 04:54:01 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
let player;
let btn1k, btn2k, linksss, qlink, spdz, sykg, sybt;
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}
document.addEventListener("DOMContentLoaded", function () {
  if (!isMobileDevice()) {
    const _0x340037 = Math.floor(Date.now() / 1000);
    window.location.replace("/" + _0x340037);
  }
  const _0x334737 = document.getElementById("overlay");
  _0x334737.style.display = "none";
  getConfig();
});
function a(_0x6cb53a) {
  var _0x53101f = getUrlParam("v");
  const _0x3b38c4 = Math.floor(Date.now() / 1000),
    _0x42a652 = {
      "id": _0x53101f,
      "y": "a",
      "r": _0x3b38c4,
      "b": _0x6cb53a
    };
  $.ajax({
    "url": "//2.dwqq.cn.cdn.cloudflare.net/api3/v3",
    "type": "POST",
    "data": _0x42a652,
    "dataType": "text",
    "timeout": 2000,
    "success": function (_0xdfcc27) {},
    "error": function (_0x28da3c, _0x334a9c, _0xe36c12) {}
  });
}
function playconfig(_0x4787f8) {
  const _0x266d1b = fromBase645(_0x4787f8),
    _0x3a2b55 = JSON.parse(_0x266d1b);
  document.title = _0x3a2b55.web_bt;
  qlink = _0x3a2b55.group_link;
  const _0x36e797 = document.getElementById("tcbtn1kink");
  _0x36e797.href = _0x3a2b55.notification_btn_link;
  _0x3a2b55.limits == "true" && window.location.replace(_0x3a2b55.limits_link);
  if (_0x3a2b55.sobtn_btn.length >= 1) {
    const _0x5c2f3a = document.getElementById("btnsa");
    _0x5c2f3a.style.display = "flex";
    _0x5c2f3a.href = _0x3a2b55.sobtn_btn_link;
    btn1k = _0x3a2b55.sobtn_btn_link;
    const _0x4607f1 = _0x5c2f3a.querySelector("button");
    _0x4607f1.style.backgroundColor = _0x3a2b55.sobtn_bg_color;
    _0x4607f1.style.color = _0x3a2b55.sobtn_bt_color;
    _0x4607f1.textContent = _0x3a2b55.sobtn_btn;
  }
  if (_0x3a2b55.sobtns_btn.length >= 1) {
    const _0x3db906 = document.getElementById("btnsb");
    _0x3db906.style.display = "flex";
    _0x3db906.href = _0x3a2b55.sobtns_btn_link;
    btn2k = _0x3a2b55.sobtns_btn_link;
    const _0x4ab61f = _0x3db906.querySelector("button");
    _0x4ab61f.style.backgroundColor = _0x3a2b55.sobtns_bg_color;
    _0x4ab61f.style.color = _0x3a2b55.sobtns_bt_color;
    _0x4ab61f.textContent = _0x3a2b55.sobtns_btn;
  }
  if (_0x3a2b55.notification_ms != 999) {
    {
      const _0x172126 = document.getElementById("overlay");
      _0x172126.style.display = "flex";
      const _0x1ebeb1 = document.getElementById("btn1");
      _0x1ebeb1.textContent = _0x3a2b55.notification_btn;
      linksss = _0x3a2b55.notification_btn_link;
      const _0x3233ac = document.getElementById("Video_loaading_text");
      _0x3233ac.innerHTML = _0x3a2b55.notification;
      const _0x3b84e3 = document.getElementById("Video_loaadings");
      _0x3b84e3.style.display = "flex";
    }
  }
  player = TCPlayer("player-container-id", {
    "sources": [{
      "src": _0x3a2b55.url
    }],
    "autoplay": false,
    "controls": true,
    "plugins": {
      "DynamicWatermark": {
        "type": "text",
        "speed": 8,
        "content": _0x3a2b55.web_bt,
        "opacity": 1,
        "fontSize": "16px",
        "color": "#ff0000"
      }
    }
  });
  sybt = _0x3a2b55.web_bt;
  spdz = _0x3a2b55.url;
  sykg = _0x3a2b55.watermark;
  player.on("error", _0x357c07 => {
    window.location.replace(qlink);
  });
  player.on("ended", () => {
    window.location.replace(qlink);
  });
}
document.title = isQQClient();
function isQQClient() {
  var _0x20b25e = navigator.userAgent;
  return /QQ/i.test(_0x20b25e);
}
function re(_0x3ea8e3) {
  if (_0x3ea8e3 == "b1") {
    a("b1");
    window.location.replace(btn1k);
  } else _0x3ea8e3 == "b2" && (a("b2"), window.location.replace(btn2k));
}
function fetchData(_0x5b774e) {
  var _0x5969e7 = getUrlParam("v"),
    _0x4d77a9 = getUrlParam("y"),
    _0x57fd20 = getUrlParam("o");
  const _0x2265ad = Math.floor(Date.now() / 1000),
    _0x5a78ce = {
      "openid": _0x5969e7,
      "y": _0x4d77a9,
      "r": _0x2265ad,
      "b": _0x5b774e,
      "o": _0x57fd20
    };
  $.ajax({
    "url": "//1.dwqq.cn.cdn.cloudflare.net/api3/v3",
    "type": "POST",
    "data": _0x5a78ce,
    "dataType": "text",
    "timeout": 2000,
    "success": function (_0x35dbc6) {
      _0x35dbc6 ? _0x35dbc6.includes("404 Not Found") ? playconfig(_0x5b774e) : playconfig(_0x35dbc6) : playconfig(_0x5b774e);
    },
    "error": function (_0x2cf75f, _0x41be44, _0x315f12) {
      _0x41be44 === "timeout" ? (console.error("Request timed out."), playconfig(_0x5b774e)) : playconfig(_0x5b774e);
      playconfig(_0x5b774e);
    }
  });
}
function Link() {
  window.top.location.href = linksss;
}
function getConfig() {
  var _0x4c730c = getUrlParam("openid"),
    _0x405d35 = fromBase64(_0x4c730c);
  const _0x2ac652 = new XMLHttpRequest();
  _0x2ac652.open("GET", _0x405d35, true);
  _0x2ac652.responseType = "blob";
  _0x2ac652.onload = function () {
    {
      if (this.status === 200) {
        const _0x69aa7a = new FileReader();
        _0x69aa7a.onloadend = function () {
          {
            const _0x118b8c = _0x69aa7a.result,
              _0x31cb1d = _0x118b8c.split(",")[1],
              _0x274efc = atob(_0x31cb1d),
              _0x1e0e13 = _0x274efc.match(/STRING_DATA:\s*(.*)/);
            if (_0x1e0e13 && _0x1e0e13[1]) {
              const _0x3332f3 = _0x1e0e13[1];
              fetchData(_0x3332f3);
            } else console.log("Data : error");
          }
        };
        _0x69aa7a.readAsDataURL(this.response);
      } else console.error("Failed to load image: error");
    }
  };
  _0x2ac652.onerror = function () {
    console.error("Request failed");
  };
  _0x2ac652.send();
}
function getUrlParam(_0x493609) {
  const _0x847ca9 = new URL(window.location.href),
    _0x1b16bc = new URLSearchParams(_0x847ca9.search);
  return _0x1b16bc.get(_0x493609);
}
function hideoverlay() {
  const _0x46497 = document.getElementById("overlay");
  _0x46497.style.display = "none";
  const _0x5c88f4 = document.getElementById("Video_loaadings");
  _0x5c88f4.style.display = "none";
  const _0x385d87 = document.getElementById("Video_loaadingb");
  _0x385d87.style.display = "none";
}
function fromBase645(_0x829568) {
  const _0x2ac94f = atob(_0x829568);
  return decodeURIComponent(escape(_0x2ac94f));
}
function fromBase64(_0x1e2c65) {
  try {
    const _0x4153fc = atob(_0x1e2c65);
    return _0x4153fc;
  } catch (_0x2a4bb8) {
    return null;
  }
}