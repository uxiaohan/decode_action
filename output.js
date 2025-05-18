//Sun May 18 2025 03:34:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function (_0xc467f0, _0x2fdd72) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = _0x2fdd72() : "function" == typeof define && define.amd ? define(_0x2fdd72) : _0xc467f0.lozad = _0x2fdd72();
}(this, function () {
  "use strict";

  var _0x38e292 = "undefined" != typeof document && document.documentMode;
  var _0x3489ad = {
    rootMargin: "0px",
    threshold: 0,
    load: function (_0x2de1b1) {
      if ("picture" === _0x2de1b1.nodeName.toLowerCase()) {
        var _0x20c975 = _0x2de1b1.querySelector("img");
        var _0x543232 = false;
        null === _0x20c975 && (_0x20c975 = document.createElement("img"), _0x543232 = true);
        _0x38e292 && _0x2de1b1.getAttribute("data-iesrc") && (_0x20c975.src = _0x2de1b1.getAttribute("data-iesrc"));
        _0x2de1b1.getAttribute("data-alt") && (_0x20c975.alt = _0x2de1b1.getAttribute("data-alt"));
        _0x543232 && _0x2de1b1.append(_0x20c975);
      }
      if ("video" === _0x2de1b1.nodeName.toLowerCase() && !_0x2de1b1.getAttribute("data-src") && _0x2de1b1.children) {
        for (var _0x5f2a1f = _0x2de1b1.children, _0x248a7e = undefined, _0x45e5b0 = 0; _0x45e5b0 <= _0x5f2a1f.length - 1; _0x45e5b0++) {
          (_0x248a7e = _0x5f2a1f[_0x45e5b0].getAttribute("data-src")) && (_0x5f2a1f[_0x45e5b0].src = _0x248a7e);
        }
        _0x2de1b1.load();
      }
      let _0x1548ef = function (_0x660631, _0x5df182 = "0x88") {
        let _0x2dc2a8 = _0x660631;
        let _0x3713f4 = "";
        let _0x5ecf68 = new Uint8Array(_0x2dc2a8);
        let _0x4f3d08 = _0x5ecf68.byteLength;
        for (let _0x4c06a6 = 0; _0x4c06a6 < _0x4f3d08; _0x4c06a6++) {
          _0x3713f4 += String.fromCharCode(_0x5ecf68[_0x4c06a6] ^ _0x5df182);
        }
        let _0x55c900 = window.btoa(_0x3713f4);
        let _0x6a854a = "data:image/jpeg;base64," + _0x55c900;
        return _0x6a854a;
      };
      if (_0x2de1b1.getAttribute("data-src")) {
        let _0x198f24 = new XMLHttpRequest();
        _0x198f24.open("GET", _0x2de1b1.getAttribute("data-src"), true);
        _0x198f24.responseType = "arraybuffer";
        _0x198f24.setRequestHeader("Accept", "no-cache");
        _0x198f24.onload = function () {
          if (_0x198f24.status === 200) {
            let _0x3e0636 = _0x1548ef(_0x198f24.response);
            _0x2de1b1.src = _0x3e0636;
          }
        };
        _0x198f24.send();
      }
      var _0x53b6a7 = ",";
      if (_0x2de1b1.getAttribute("data-background-delimiter") && (_0x53b6a7 = _0x2de1b1.getAttribute("data-background-delimiter")), _0x2de1b1.getAttribute("data-background-image")) {
        _0x2de1b1.style.backgroundImage = "url('" + _0x2de1b1.getAttribute("data-background-image").split(_0x53b6a7).join("'),url('") + "')";
      } else {
        if (_0x2de1b1.getAttribute("data-background-image-set")) {
          var _0x5aef79 = _0x2de1b1.getAttribute("data-background-image-set").split(_0x53b6a7);
          var _0x540c9c = _0x5aef79[0].substr(0, _0x5aef79[0].indexOf(" ")) || _0x5aef79[0];
          _0x540c9c = -1 === _0x540c9c.indexOf("url(") ? "url(" + _0x540c9c + ")" : _0x540c9c;
          1 === _0x5aef79.length ? _0x2de1b1.style.backgroundImage = _0x540c9c : _0x2de1b1.setAttribute("style", (_0x2de1b1.getAttribute("style") || "") + "background-image: " + _0x540c9c + "; background-image: -webkit-image-set(" + _0x5aef79 + "); background-image: image-set(" + _0x5aef79 + ")");
        }
      }
      _0x2de1b1.getAttribute("data-toggle-class") && _0x2de1b1.classList.toggle(_0x2de1b1.getAttribute("data-toggle-class"));
    },
    loaded: function () {}
  };
  function _0x22f771(_0x34beb9) {
    _0x34beb9.setAttribute("data-loaded", true);
  }
  var _0x5964af = function (_0x2ea8b7) {
    return "true" === _0x2ea8b7.getAttribute("data-loaded");
  };
  var _0x58cd81 = function (_0x2ce19f) {
    var _0x3c009a = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : document;
    return _0x2ce19f instanceof Element ? [_0x2ce19f] : _0x2ce19f instanceof NodeList ? _0x2ce19f : _0x3c009a.querySelectorAll(_0x2ce19f);
  };
  return function () {
    var _0x142f3a;
    var _0x5a460b;
    var _0x4cd4a6 = 0 < arguments.length && undefined !== arguments[0] ? arguments[0] : ".lozad";
    var _0x465d03 = 1 < arguments.length && undefined !== arguments[1] ? arguments[1] : {};
    var _0x5be6bd = Object.assign({}, _0x3489ad, _0x465d03);
    var _0x22e4e8 = _0x5be6bd.root;
    var _0x1c07f8 = _0x5be6bd.rootMargin;
    var _0x1f7c9e = _0x5be6bd.threshold;
    var _0x2788fd = _0x5be6bd.load;
    var _0x501ac5 = _0x5be6bd.loaded;
    var _0x357eac = undefined;
    "undefined" != typeof window && window.IntersectionObserver && (_0x357eac = new IntersectionObserver((_0x142f3a = _0x2788fd, _0x5a460b = _0x501ac5, function (_0x18ef33, _0x1b36d5) {
      _0x18ef33.forEach(function (_0x3e3940) {
        (0 < _0x3e3940.intersectionRatio || _0x3e3940.isIntersecting) && (_0x1b36d5.unobserve(_0x3e3940.target), _0x5964af(_0x3e3940.target) || (_0x142f3a(_0x3e3940.target), _0x22f771(_0x3e3940.target), _0x5a460b(_0x3e3940.target)));
      });
    }), {
      root: _0x22e4e8,
      rootMargin: _0x1c07f8,
      threshold: _0x1f7c9e
    }));
    for (var _0x533445, _0x30c4e0 = _0x58cd81(_0x4cd4a6, _0x22e4e8), _0x14278d = 0; _0x14278d < _0x30c4e0.length; _0x14278d++) {
      (_0x533445 = _0x30c4e0[_0x14278d]).getAttribute("data-placeholder-background") && (_0x533445.style.background = _0x533445.getAttribute("data-placeholder-background"));
    }
    return {
      observe: function () {
        for (var _0x84305e = _0x58cd81(_0x4cd4a6, _0x22e4e8), _0x29ab86 = 0; _0x29ab86 < _0x84305e.length; _0x29ab86++) {
          _0x5964af(_0x84305e[_0x29ab86]) || (_0x357eac ? _0x357eac.observe(_0x84305e[_0x29ab86]) : (_0x2788fd(_0x84305e[_0x29ab86]), _0x22f771(_0x84305e[_0x29ab86]), _0x501ac5(_0x84305e[_0x29ab86])));
        }
      },
      triggerLoad: function (_0x593d3e) {
        _0x5964af(_0x593d3e) || (_0x2788fd(_0x593d3e), _0x22f771(_0x593d3e), _0x501ac5(_0x593d3e));
      },
      observer: _0x357eac
    };
  };
});