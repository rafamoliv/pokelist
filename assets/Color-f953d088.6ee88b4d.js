var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import "./iframe.16f10e94.js";
import "./es.map.constructor.edb80200.js";
import { W as WithTooltip, T as TooltipNote, F as Form, I as Icons, z as getControlId, a as __rest, B as isObject_1, C as isSymbol_1, D as _root } from "./index.64c5d0bf.js";
import { R as React__default, r as react, j as jsx, a as jsxs } from "./jsx-runtime.1846cd15.js";
import { a as styled } from "./index.31bee4a5.js";
import "./es.number.to-fixed.45361398.js";
import "./string.c8a6e64c.js";
var _ColorPicker, _fallbackColor;
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
__name(_defineProperty, "_defineProperty");
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
__name(_typeof, "_typeof");
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
}
__name(_slicedToArray, "_slicedToArray");
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableRest, "_nonIterableRest");
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
__name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) {
    arr2[i2] = arr[i2];
  }
  return arr2;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
function _iterableToArrayLimit(arr, i2) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null)
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i2 && _arr.length === i2)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
__name(_iterableToArrayLimit, "_iterableToArrayLimit");
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
__name(_arrayWithHoles, "_arrayWithHoles");
function u() {
  return (u = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }
    return e;
  }).apply(this, arguments);
}
__name(u, "u");
function c(e, r) {
  if (null == e)
    return {};
  var t, n, o = {}, a = Object.keys(e);
  for (n = 0; n < a.length; n++) {
    r.indexOf(t = a[n]) >= 0 || (o[t] = e[t]);
  }
  return o;
}
__name(c, "c");
function i(e) {
  var t = react.exports.useRef(e), n = react.exports.useRef(function(e2) {
    t.current && t.current(e2);
  });
  return t.current = e, n.current;
}
__name(i, "i");
var s = /* @__PURE__ */ __name(function s2(e, r, t) {
  return void 0 === r && (r = 0), void 0 === t && (t = 1), e > t ? t : e < r ? r : e;
}, "s"), f = /* @__PURE__ */ __name(function f2(e) {
  return "touches" in e;
}, "f"), v = /* @__PURE__ */ __name(function v2(e) {
  return e && e.ownerDocument.defaultView || self;
}, "v"), d = /* @__PURE__ */ __name(function d2(e, r, t) {
  var n = e.getBoundingClientRect(), o = f(r) ? function(e2, r2) {
    for (var t2 = 0; t2 < e2.length; t2++) {
      if (e2[t2].identifier === r2)
        return e2[t2];
    }
    return e2[0];
  }(r.touches, t) : r;
  return {
    left: s((o.pageX - (n.left + v(e).pageXOffset)) / n.width),
    top: s((o.pageY - (n.top + v(e).pageYOffset)) / n.height)
  };
}, "d"), h = /* @__PURE__ */ __name(function h2(e) {
  !f(e) && e.preventDefault();
}, "h"), m = React__default.memo(function(o) {
  var a = o.onMove, l = o.onKey, s3 = c(o, ["onMove", "onKey"]), m2 = react.exports.useRef(null), g3 = i(a), p3 = i(l), b3 = react.exports.useRef(null), _2 = react.exports.useRef(false), x3 = react.exports.useMemo(function() {
    var e = /* @__PURE__ */ __name(function e2(_e) {
      h(_e), (f(_e) ? _e.touches.length > 0 : _e.buttons > 0) && m2.current ? g3(d(m2.current, _e, b3.current)) : t(false);
    }, "e"), r = /* @__PURE__ */ __name(function r2() {
      return t(false);
    }, "r");
    function t(t2) {
      var n = _2.current, o2 = v(m2.current), a2 = t2 ? o2.addEventListener : o2.removeEventListener;
      a2(n ? "touchmove" : "mousemove", e), a2(n ? "touchend" : "mouseup", r);
    }
    __name(t, "t");
    return [function(e2) {
      var r2 = e2.nativeEvent, n = m2.current;
      if (n && (h(r2), !function(e3, r3) {
        return r3 && !f(e3);
      }(r2, _2.current) && n)) {
        if (f(r2)) {
          _2.current = true;
          var o2 = r2.changedTouches || [];
          o2.length && (b3.current = o2[0].identifier);
        }
        n.focus(), g3(d(n, r2, b3.current)), t(true);
      }
    }, function(e2) {
      var r2 = e2.which || e2.keyCode;
      r2 < 37 || r2 > 40 || (e2.preventDefault(), p3({
        left: 39 === r2 ? 0.05 : 37 === r2 ? -0.05 : 0,
        top: 40 === r2 ? 0.05 : 38 === r2 ? -0.05 : 0
      }));
    }, t];
  }, [p3, g3]), C3 = x3[0], E3 = x3[1], H = x3[2];
  return react.exports.useEffect(function() {
    return H;
  }, [H]), /* @__PURE__ */ jsx("div", {
    ...u({}, s3, {
      onTouchStart: C3,
      onMouseDown: C3,
      className: "react-colorful__interactive",
      ref: m2,
      onKeyDown: E3,
      tabIndex: 0,
      role: "slider"
    })
  });
}), g = /* @__PURE__ */ __name(function g2(e) {
  return e.filter(Boolean).join(" ");
}, "g"), p = /* @__PURE__ */ __name(function p2(r) {
  var t = r.color, n = r.left, o = r.top, a = void 0 === o ? 0.5 : o, l = g(["react-colorful__pointer", r.className]);
  return /* @__PURE__ */ jsx("div", {
    className: l,
    style: {
      top: 100 * a + "%",
      left: 100 * n + "%"
    },
    children: /* @__PURE__ */ jsx("div", {
      className: "react-colorful__pointer-fill",
      style: {
        backgroundColor: t
      }
    })
  });
}, "p"), b = /* @__PURE__ */ __name(function b2(e, r, t) {
  return void 0 === r && (r = 0), void 0 === t && (t = Math.pow(10, r)), Math.round(t * e) / t;
}, "b"), _ = {
  grad: 0.9,
  turn: 360,
  rad: 360 / (2 * Math.PI)
}, x = /* @__PURE__ */ __name(function x2(e) {
  return "#" === e[0] && (e = e.substr(1)), e.length < 6 ? {
    r: parseInt(e[0] + e[0], 16),
    g: parseInt(e[1] + e[1], 16),
    b: parseInt(e[2] + e[2], 16),
    a: 1
  } : {
    r: parseInt(e.substr(0, 2), 16),
    g: parseInt(e.substr(2, 2), 16),
    b: parseInt(e.substr(4, 2), 16),
    a: 1
  };
}, "x"), C = /* @__PURE__ */ __name(function C2(e, r) {
  return void 0 === r && (r = "deg"), Number(e) * (_[r] || 1);
}, "C"), E = /* @__PURE__ */ __name(function E2(e) {
  var r = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
  return r ? M({
    h: C(r[1], r[2]),
    s: Number(r[3]),
    l: Number(r[4]),
    a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
  }) : {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
}, "E"), M = /* @__PURE__ */ __name(function M2(e) {
  var r = e.s, t = e.l;
  return {
    h: e.h,
    s: (r *= (t < 50 ? t : 100 - t) / 100) > 0 ? 2 * r / (t + r) * 100 : 0,
    v: t + r,
    a: e.a
  };
}, "M"), N = /* @__PURE__ */ __name(function N2(e) {
  var r = e.s, t = e.v, n = e.a, o = (200 - r) * t / 100;
  return {
    h: b(e.h),
    s: b(o > 0 && o < 200 ? r * t / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
    l: b(o / 2),
    a: b(n, 2)
  };
}, "N"), w = /* @__PURE__ */ __name(function w2(e) {
  var r = N(e);
  return "hsl(" + r.h + ", " + r.s + "%, " + r.l + "%)";
}, "w"), y = /* @__PURE__ */ __name(function y2(e) {
  var r = N(e);
  return "hsla(" + r.h + ", " + r.s + "%, " + r.l + "%, " + r.a + ")";
}, "y"), q = /* @__PURE__ */ __name(function q2(e) {
  var r = e.h, t = e.s, n = e.v, o = e.a;
  r = r / 360 * 6, t /= 100, n /= 100;
  var a = Math.floor(r), l = n * (1 - t), u2 = n * (1 - (r - a) * t), c2 = n * (1 - (1 - r + a) * t), i2 = a % 6;
  return {
    r: b(255 * [n, u2, l, l, c2, n][i2]),
    g: b(255 * [c2, n, n, u2, l, l][i2]),
    b: b(255 * [l, l, c2, n, n, u2][i2]),
    a: b(o, 2)
  };
}, "q"), I = /* @__PURE__ */ __name(function I2(e) {
  var r = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);
  return r ? B({
    r: Number(r[1]) / (r[2] ? 100 / 255 : 1),
    g: Number(r[3]) / (r[4] ? 100 / 255 : 1),
    b: Number(r[5]) / (r[6] ? 100 / 255 : 1),
    a: void 0 === r[7] ? 1 : Number(r[7]) / (r[8] ? 100 : 1)
  }) : {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };
}, "I"), z = /* @__PURE__ */ __name(function z2(e) {
  var r = e.toString(16);
  return r.length < 2 ? "0" + r : r;
}, "z"), B = /* @__PURE__ */ __name(function B2(e) {
  var r = e.r, t = e.g, n = e.b, o = e.a, a = Math.max(r, t, n), l = a - Math.min(r, t, n), u2 = l ? a === r ? (t - n) / l : a === t ? 2 + (n - r) / l : 4 + (r - t) / l : 0;
  return {
    h: b(60 * (u2 < 0 ? u2 + 6 : u2)),
    s: b(a ? l / a * 100 : 0),
    v: b(a / 255 * 100),
    a: o
  };
}, "B"), K = React__default.memo(function(r) {
  var t = r.hue, n = r.onChange, o = g(["react-colorful__hue", r.className]);
  return React__default.createElement("div", {
    className: o
  }, React__default.createElement(m, {
    onMove: /* @__PURE__ */ __name(function onMove(e) {
      n({
        h: 360 * e.left
      });
    }, "onMove"),
    onKey: /* @__PURE__ */ __name(function onKey(e) {
      n({
        h: s(t + 360 * e.left, 0, 360)
      });
    }, "onKey"),
    "aria-label": "Hue",
    "aria-valuetext": b(t)
  }, React__default.createElement(p, {
    className: "react-colorful__hue-pointer",
    left: t / 360,
    color: w({
      h: t,
      s: 100,
      v: 100,
      a: 1
    })
  })));
}), L = React__default.memo(function(r) {
  var t = r.hsva, n = r.onChange, o = {
    backgroundColor: w({
      h: t.h,
      s: 100,
      v: 100,
      a: 1
    })
  };
  return React__default.createElement("div", {
    className: "react-colorful__saturation",
    style: o
  }, React__default.createElement(m, {
    onMove: /* @__PURE__ */ __name(function onMove(e) {
      n({
        s: 100 * e.left,
        v: 100 - 100 * e.top
      });
    }, "onMove"),
    onKey: /* @__PURE__ */ __name(function onKey(e) {
      n({
        s: s(t.s + 100 * e.left, 0, 100),
        v: s(t.v - 100 * e.top, 0, 100)
      });
    }, "onKey"),
    "aria-label": "Color",
    "aria-valuetext": "Saturation " + b(t.s) + "%, Brightness " + b(t.v) + "%"
  }, React__default.createElement(p, {
    className: "react-colorful__saturation-pointer",
    top: 1 - t.v / 100,
    left: t.s / 100,
    color: w(t)
  })));
}), A = /* @__PURE__ */ __name(function A2(e, r) {
  if (e === r)
    return true;
  for (var t in e) {
    if (e[t] !== r[t])
      return false;
  }
  return true;
}, "A"), S = /* @__PURE__ */ __name(function S2(e, r) {
  return e.replace(/\s/g, "") === r.replace(/\s/g, "");
}, "S");
function T(e, t, l) {
  var u2 = i(l), c2 = react.exports.useState(function() {
    return e.toHsva(t);
  }), s3 = c2[0], f3 = c2[1], v3 = react.exports.useRef({
    color: t,
    hsva: s3
  });
  react.exports.useEffect(function() {
    if (!e.equal(t, v3.current.color)) {
      var r = e.toHsva(t);
      v3.current = {
        hsva: r,
        color: t
      }, f3(r);
    }
  }, [t, e]), react.exports.useEffect(function() {
    var r;
    A(s3, v3.current.hsva) || e.equal(r = e.fromHsva(s3), v3.current.color) || (v3.current = {
      hsva: s3,
      color: r
    }, u2(r));
  }, [s3, e, u2]);
  var d3 = react.exports.useCallback(function(e2) {
    f3(function(r) {
      return Object.assign({}, r, e2);
    });
  }, []);
  return [s3, d3];
}
__name(T, "T");
var P = "undefined" != typeof window ? react.exports.useLayoutEffect : react.exports.useEffect, X = /* @__PURE__ */ __name(function X2() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}, "X"), R = /* @__PURE__ */ new Map(), V = /* @__PURE__ */ __name(function V2(e) {
  P(function() {
    var r = e.current ? e.current.ownerDocument : document;
    if (void 0 !== r && !R.has(r)) {
      var t = r.createElement("style");
      t.innerHTML = `.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`, R.set(r, t);
      var n = X();
      n && t.setAttribute("nonce", n), r.head.appendChild(t);
    }
  }, []);
}, "V"), $ = /* @__PURE__ */ __name(function $2(t) {
  var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i2 = t.onChange, s3 = c(t, ["className", "colorModel", "color", "onChange"]), f3 = react.exports.useRef(null);
  V(f3);
  var v3 = T(o, l, i2), d3 = v3[0], h3 = v3[1], m2 = g(["react-colorful", n]);
  return /* @__PURE__ */ jsxs("div", {
    ...u({}, s3, {
      ref: f3,
      className: m2
    }),
    children: [/* @__PURE__ */ jsx(L, {
      hsva: d3,
      onChange: h3
    }), /* @__PURE__ */ jsx(K, {
      hue: d3.h,
      onChange: h3,
      className: "react-colorful__last-control"
    })]
  });
}, "$"), G = {
  defaultColor: "000",
  toHsva: /* @__PURE__ */ __name(function toHsva(e) {
    return B(x(e));
  }, "toHsva"),
  fromHsva: /* @__PURE__ */ __name(function fromHsva(e) {
    return t = (r = q(e)).g, n = r.b, "#" + z(r.r) + z(t) + z(n);
    var r, t, n;
  }, "fromHsva"),
  equal: /* @__PURE__ */ __name(function equal(e, r) {
    return e.toLowerCase() === r.toLowerCase() || A(x(e), x(r));
  }, "equal")
}, J = /* @__PURE__ */ __name(function J2(r) {
  return React__default.createElement($, u({}, r, {
    colorModel: G
  }));
}, "J"), Q = /* @__PURE__ */ __name(function Q2(r) {
  var t = r.className, n = r.hsva, o = r.onChange, a = {
    backgroundImage: "linear-gradient(90deg, " + y(Object.assign({}, n, {
      a: 0
    })) + ", " + y(Object.assign({}, n, {
      a: 1
    })) + ")"
  }, l = g(["react-colorful__alpha", t]);
  return React__default.createElement("div", {
    className: l
  }, /* @__PURE__ */ jsx("div", {
    className: "react-colorful__alpha-gradient",
    style: a
  }), React__default.createElement(m, {
    onMove: /* @__PURE__ */ __name(function onMove(e) {
      o({
        a: e.left
      });
    }, "onMove"),
    onKey: /* @__PURE__ */ __name(function onKey(e) {
      o({
        a: s(n.a + e.left)
      });
    }, "onKey"),
    "aria-label": "Alpha",
    "aria-valuetext": b(100 * n.a) + "%"
  }, React__default.createElement(p, {
    className: "react-colorful__alpha-pointer",
    left: n.a,
    color: y(n)
  })));
}, "Q"), U = /* @__PURE__ */ __name(function U2(t) {
  var n = t.className, o = t.colorModel, a = t.color, l = void 0 === a ? o.defaultColor : a, i2 = t.onChange, s3 = c(t, ["className", "colorModel", "color", "onChange"]), f3 = react.exports.useRef(null);
  V(f3);
  var v3 = T(o, l, i2), d3 = v3[0], h3 = v3[1], m2 = g(["react-colorful", n]);
  return /* @__PURE__ */ jsxs("div", {
    ...u({}, s3, {
      ref: f3,
      className: m2
    }),
    children: [/* @__PURE__ */ jsx(L, {
      hsva: d3,
      onChange: h3
    }), /* @__PURE__ */ jsx(K, {
      hue: d3.h,
      onChange: h3
    }), /* @__PURE__ */ jsx(Q, {
      hsva: d3,
      onChange: h3,
      className: "react-colorful__last-control"
    })]
  });
}, "U"), ee = {
  defaultColor: "hsla(0, 0%, 0%, 1)",
  toHsva: E,
  fromHsva: y,
  equal: S
}, re = /* @__PURE__ */ __name(function re2(r) {
  return /* @__PURE__ */ jsx(U, {
    ...u({}, r, {
      colorModel: ee
    })
  });
}, "re"), ge = {
  defaultColor: "rgba(0, 0, 0, 1)",
  toHsva: I,
  fromHsva: /* @__PURE__ */ __name(function fromHsva2(e) {
    var r = q(e);
    return "rgba(" + r.r + ", " + r.g + ", " + r.b + ", " + r.a + ")";
  }, "fromHsva"),
  equal: S
}, pe = /* @__PURE__ */ __name(function pe2(r) {
  return /* @__PURE__ */ jsx(U, {
    ...u({}, r, {
      colorModel: ge
    })
  });
}, "pe");
var colorName = {
  "aliceblue": [240, 248, 255],
  "antiquewhite": [250, 235, 215],
  "aqua": [0, 255, 255],
  "aquamarine": [127, 255, 212],
  "azure": [240, 255, 255],
  "beige": [245, 245, 220],
  "bisque": [255, 228, 196],
  "black": [0, 0, 0],
  "blanchedalmond": [255, 235, 205],
  "blue": [0, 0, 255],
  "blueviolet": [138, 43, 226],
  "brown": [165, 42, 42],
  "burlywood": [222, 184, 135],
  "cadetblue": [95, 158, 160],
  "chartreuse": [127, 255, 0],
  "chocolate": [210, 105, 30],
  "coral": [255, 127, 80],
  "cornflowerblue": [100, 149, 237],
  "cornsilk": [255, 248, 220],
  "crimson": [220, 20, 60],
  "cyan": [0, 255, 255],
  "darkblue": [0, 0, 139],
  "darkcyan": [0, 139, 139],
  "darkgoldenrod": [184, 134, 11],
  "darkgray": [169, 169, 169],
  "darkgreen": [0, 100, 0],
  "darkgrey": [169, 169, 169],
  "darkkhaki": [189, 183, 107],
  "darkmagenta": [139, 0, 139],
  "darkolivegreen": [85, 107, 47],
  "darkorange": [255, 140, 0],
  "darkorchid": [153, 50, 204],
  "darkred": [139, 0, 0],
  "darksalmon": [233, 150, 122],
  "darkseagreen": [143, 188, 143],
  "darkslateblue": [72, 61, 139],
  "darkslategray": [47, 79, 79],
  "darkslategrey": [47, 79, 79],
  "darkturquoise": [0, 206, 209],
  "darkviolet": [148, 0, 211],
  "deeppink": [255, 20, 147],
  "deepskyblue": [0, 191, 255],
  "dimgray": [105, 105, 105],
  "dimgrey": [105, 105, 105],
  "dodgerblue": [30, 144, 255],
  "firebrick": [178, 34, 34],
  "floralwhite": [255, 250, 240],
  "forestgreen": [34, 139, 34],
  "fuchsia": [255, 0, 255],
  "gainsboro": [220, 220, 220],
  "ghostwhite": [248, 248, 255],
  "gold": [255, 215, 0],
  "goldenrod": [218, 165, 32],
  "gray": [128, 128, 128],
  "green": [0, 128, 0],
  "greenyellow": [173, 255, 47],
  "grey": [128, 128, 128],
  "honeydew": [240, 255, 240],
  "hotpink": [255, 105, 180],
  "indianred": [205, 92, 92],
  "indigo": [75, 0, 130],
  "ivory": [255, 255, 240],
  "khaki": [240, 230, 140],
  "lavender": [230, 230, 250],
  "lavenderblush": [255, 240, 245],
  "lawngreen": [124, 252, 0],
  "lemonchiffon": [255, 250, 205],
  "lightblue": [173, 216, 230],
  "lightcoral": [240, 128, 128],
  "lightcyan": [224, 255, 255],
  "lightgoldenrodyellow": [250, 250, 210],
  "lightgray": [211, 211, 211],
  "lightgreen": [144, 238, 144],
  "lightgrey": [211, 211, 211],
  "lightpink": [255, 182, 193],
  "lightsalmon": [255, 160, 122],
  "lightseagreen": [32, 178, 170],
  "lightskyblue": [135, 206, 250],
  "lightslategray": [119, 136, 153],
  "lightslategrey": [119, 136, 153],
  "lightsteelblue": [176, 196, 222],
  "lightyellow": [255, 255, 224],
  "lime": [0, 255, 0],
  "limegreen": [50, 205, 50],
  "linen": [250, 240, 230],
  "magenta": [255, 0, 255],
  "maroon": [128, 0, 0],
  "mediumaquamarine": [102, 205, 170],
  "mediumblue": [0, 0, 205],
  "mediumorchid": [186, 85, 211],
  "mediumpurple": [147, 112, 219],
  "mediumseagreen": [60, 179, 113],
  "mediumslateblue": [123, 104, 238],
  "mediumspringgreen": [0, 250, 154],
  "mediumturquoise": [72, 209, 204],
  "mediumvioletred": [199, 21, 133],
  "midnightblue": [25, 25, 112],
  "mintcream": [245, 255, 250],
  "mistyrose": [255, 228, 225],
  "moccasin": [255, 228, 181],
  "navajowhite": [255, 222, 173],
  "navy": [0, 0, 128],
  "oldlace": [253, 245, 230],
  "olive": [128, 128, 0],
  "olivedrab": [107, 142, 35],
  "orange": [255, 165, 0],
  "orangered": [255, 69, 0],
  "orchid": [218, 112, 214],
  "palegoldenrod": [238, 232, 170],
  "palegreen": [152, 251, 152],
  "paleturquoise": [175, 238, 238],
  "palevioletred": [219, 112, 147],
  "papayawhip": [255, 239, 213],
  "peachpuff": [255, 218, 185],
  "peru": [205, 133, 63],
  "pink": [255, 192, 203],
  "plum": [221, 160, 221],
  "powderblue": [176, 224, 230],
  "purple": [128, 0, 128],
  "rebeccapurple": [102, 51, 153],
  "red": [255, 0, 0],
  "rosybrown": [188, 143, 143],
  "royalblue": [65, 105, 225],
  "saddlebrown": [139, 69, 19],
  "salmon": [250, 128, 114],
  "sandybrown": [244, 164, 96],
  "seagreen": [46, 139, 87],
  "seashell": [255, 245, 238],
  "sienna": [160, 82, 45],
  "silver": [192, 192, 192],
  "skyblue": [135, 206, 235],
  "slateblue": [106, 90, 205],
  "slategray": [112, 128, 144],
  "slategrey": [112, 128, 144],
  "snow": [255, 250, 250],
  "springgreen": [0, 255, 127],
  "steelblue": [70, 130, 180],
  "tan": [210, 180, 140],
  "teal": [0, 128, 128],
  "thistle": [216, 191, 216],
  "tomato": [255, 99, 71],
  "turquoise": [64, 224, 208],
  "violet": [238, 130, 238],
  "wheat": [245, 222, 179],
  "white": [255, 255, 255],
  "whitesmoke": [245, 245, 245],
  "yellow": [255, 255, 0],
  "yellowgreen": [154, 205, 50]
};
var cssKeywords = colorName;
var reverseKeywords = {};
for (var _i = 0, _Object$keys = Object.keys(cssKeywords); _i < _Object$keys.length; _i++) {
  var key = _Object$keys[_i];
  reverseKeywords[cssKeywords[key]] = key;
}
var convert$1 = {
  rgb: {
    channels: 3,
    labels: "rgb"
  },
  hsl: {
    channels: 3,
    labels: "hsl"
  },
  hsv: {
    channels: 3,
    labels: "hsv"
  },
  hwb: {
    channels: 3,
    labels: "hwb"
  },
  cmyk: {
    channels: 4,
    labels: "cmyk"
  },
  xyz: {
    channels: 3,
    labels: "xyz"
  },
  lab: {
    channels: 3,
    labels: "lab"
  },
  lch: {
    channels: 3,
    labels: "lch"
  },
  hex: {
    channels: 1,
    labels: ["hex"]
  },
  keyword: {
    channels: 1,
    labels: ["keyword"]
  },
  ansi16: {
    channels: 1,
    labels: ["ansi16"]
  },
  ansi256: {
    channels: 1,
    labels: ["ansi256"]
  },
  hcg: {
    channels: 3,
    labels: ["h", "c", "g"]
  },
  apple: {
    channels: 3,
    labels: ["r16", "g16", "b16"]
  },
  gray: {
    channels: 1,
    labels: ["gray"]
  }
};
var conversions$2 = convert$1;
for (var _i2 = 0, _Object$keys2 = Object.keys(convert$1); _i2 < _Object$keys2.length; _i2++) {
  var model = _Object$keys2[_i2];
  if (!("channels" in convert$1[model])) {
    throw new Error("missing channels property: " + model);
  }
  if (!("labels" in convert$1[model])) {
    throw new Error("missing channel labels property: " + model);
  }
  if (convert$1[model].labels.length !== convert$1[model].channels) {
    throw new Error("channel and label counts mismatch: " + model);
  }
  var _convert$1$model = convert$1[model], channels = _convert$1$model.channels, labels = _convert$1$model.labels;
  delete convert$1[model].channels;
  delete convert$1[model].labels;
  Object.defineProperty(convert$1[model], "channels", {
    value: channels
  });
  Object.defineProperty(convert$1[model], "labels", {
    value: labels
  });
}
convert$1.rgb.hsl = function(rgb) {
  var r = rgb[0] / 255;
  var g3 = rgb[1] / 255;
  var b3 = rgb[2] / 255;
  var min = Math.min(r, g3, b3);
  var max = Math.max(r, g3, b3);
  var delta = max - min;
  var h3;
  var s3;
  if (max === min) {
    h3 = 0;
  } else if (r === max) {
    h3 = (g3 - b3) / delta;
  } else if (g3 === max) {
    h3 = 2 + (b3 - r) / delta;
  } else if (b3 === max) {
    h3 = 4 + (r - g3) / delta;
  }
  h3 = Math.min(h3 * 60, 360);
  if (h3 < 0) {
    h3 += 360;
  }
  var l = (min + max) / 2;
  if (max === min) {
    s3 = 0;
  } else if (l <= 0.5) {
    s3 = delta / (max + min);
  } else {
    s3 = delta / (2 - max - min);
  }
  return [h3, s3 * 100, l * 100];
};
convert$1.rgb.hsv = function(rgb) {
  var rdif;
  var gdif;
  var bdif;
  var h3;
  var s3;
  var r = rgb[0] / 255;
  var g3 = rgb[1] / 255;
  var b3 = rgb[2] / 255;
  var v3 = Math.max(r, g3, b3);
  var diff = v3 - Math.min(r, g3, b3);
  var diffc = /* @__PURE__ */ __name(function diffc2(c2) {
    return (v3 - c2) / 6 / diff + 1 / 2;
  }, "diffc");
  if (diff === 0) {
    h3 = 0;
    s3 = 0;
  } else {
    s3 = diff / v3;
    rdif = diffc(r);
    gdif = diffc(g3);
    bdif = diffc(b3);
    if (r === v3) {
      h3 = bdif - gdif;
    } else if (g3 === v3) {
      h3 = 1 / 3 + rdif - bdif;
    } else if (b3 === v3) {
      h3 = 2 / 3 + gdif - rdif;
    }
    if (h3 < 0) {
      h3 += 1;
    } else if (h3 > 1) {
      h3 -= 1;
    }
  }
  return [h3 * 360, s3 * 100, v3 * 100];
};
convert$1.rgb.hwb = function(rgb) {
  var r = rgb[0];
  var g3 = rgb[1];
  var b3 = rgb[2];
  var h3 = convert$1.rgb.hsl(rgb)[0];
  var w3 = 1 / 255 * Math.min(r, Math.min(g3, b3));
  b3 = 1 - 1 / 255 * Math.max(r, Math.max(g3, b3));
  return [h3, w3 * 100, b3 * 100];
};
convert$1.rgb.cmyk = function(rgb) {
  var r = rgb[0] / 255;
  var g3 = rgb[1] / 255;
  var b3 = rgb[2] / 255;
  var k = Math.min(1 - r, 1 - g3, 1 - b3);
  var c2 = (1 - r - k) / (1 - k) || 0;
  var m2 = (1 - g3 - k) / (1 - k) || 0;
  var y3 = (1 - b3 - k) / (1 - k) || 0;
  return [c2 * 100, m2 * 100, y3 * 100, k * 100];
};
function comparativeDistance(x3, y3) {
  return Math.pow(x3[0] - y3[0], 2) + Math.pow(x3[1] - y3[1], 2) + Math.pow(x3[2] - y3[2], 2);
}
__name(comparativeDistance, "comparativeDistance");
convert$1.rgb.keyword = function(rgb) {
  var reversed = reverseKeywords[rgb];
  if (reversed) {
    return reversed;
  }
  var currentClosestDistance = Infinity;
  var currentClosestKeyword;
  for (var _i3 = 0, _Object$keys3 = Object.keys(cssKeywords); _i3 < _Object$keys3.length; _i3++) {
    var keyword = _Object$keys3[_i3];
    var value = cssKeywords[keyword];
    var distance = comparativeDistance(rgb, value);
    if (distance < currentClosestDistance) {
      currentClosestDistance = distance;
      currentClosestKeyword = keyword;
    }
  }
  return currentClosestKeyword;
};
convert$1.keyword.rgb = function(keyword) {
  return cssKeywords[keyword];
};
convert$1.rgb.xyz = function(rgb) {
  var r = rgb[0] / 255;
  var g3 = rgb[1] / 255;
  var b3 = rgb[2] / 255;
  r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
  g3 = g3 > 0.04045 ? Math.pow((g3 + 0.055) / 1.055, 2.4) : g3 / 12.92;
  b3 = b3 > 0.04045 ? Math.pow((b3 + 0.055) / 1.055, 2.4) : b3 / 12.92;
  var x3 = r * 0.4124 + g3 * 0.3576 + b3 * 0.1805;
  var y3 = r * 0.2126 + g3 * 0.7152 + b3 * 0.0722;
  var z3 = r * 0.0193 + g3 * 0.1192 + b3 * 0.9505;
  return [x3 * 100, y3 * 100, z3 * 100];
};
convert$1.rgb.lab = function(rgb) {
  var xyz = convert$1.rgb.xyz(rgb);
  var x3 = xyz[0];
  var y3 = xyz[1];
  var z3 = xyz[2];
  x3 /= 95.047;
  y3 /= 100;
  z3 /= 108.883;
  x3 = x3 > 8856e-6 ? Math.pow(x3, 1 / 3) : 7.787 * x3 + 16 / 116;
  y3 = y3 > 8856e-6 ? Math.pow(y3, 1 / 3) : 7.787 * y3 + 16 / 116;
  z3 = z3 > 8856e-6 ? Math.pow(z3, 1 / 3) : 7.787 * z3 + 16 / 116;
  var l = 116 * y3 - 16;
  var a = 500 * (x3 - y3);
  var b3 = 200 * (y3 - z3);
  return [l, a, b3];
};
convert$1.hsl.rgb = function(hsl) {
  var h3 = hsl[0] / 360;
  var s3 = hsl[1] / 100;
  var l = hsl[2] / 100;
  var t2;
  var t3;
  var val;
  if (s3 === 0) {
    val = l * 255;
    return [val, val, val];
  }
  if (l < 0.5) {
    t2 = l * (1 + s3);
  } else {
    t2 = l + s3 - l * s3;
  }
  var t1 = 2 * l - t2;
  var rgb = [0, 0, 0];
  for (var _i4 = 0; _i4 < 3; _i4++) {
    t3 = h3 + 1 / 3 * -(_i4 - 1);
    if (t3 < 0) {
      t3++;
    }
    if (t3 > 1) {
      t3--;
    }
    if (6 * t3 < 1) {
      val = t1 + (t2 - t1) * 6 * t3;
    } else if (2 * t3 < 1) {
      val = t2;
    } else if (3 * t3 < 2) {
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    } else {
      val = t1;
    }
    rgb[_i4] = val * 255;
  }
  return rgb;
};
convert$1.hsl.hsv = function(hsl) {
  var h3 = hsl[0];
  var s3 = hsl[1] / 100;
  var l = hsl[2] / 100;
  var smin = s3;
  var lmin = Math.max(l, 0.01);
  l *= 2;
  s3 *= l <= 1 ? l : 2 - l;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  var v3 = (l + s3) / 2;
  var sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s3 / (l + s3);
  return [h3, sv * 100, v3 * 100];
};
convert$1.hsv.rgb = function(hsv) {
  var h3 = hsv[0] / 60;
  var s3 = hsv[1] / 100;
  var v3 = hsv[2] / 100;
  var hi = Math.floor(h3) % 6;
  var f3 = h3 - Math.floor(h3);
  var p3 = 255 * v3 * (1 - s3);
  var q3 = 255 * v3 * (1 - s3 * f3);
  var t = 255 * v3 * (1 - s3 * (1 - f3));
  v3 *= 255;
  switch (hi) {
    case 0:
      return [v3, t, p3];
    case 1:
      return [q3, v3, p3];
    case 2:
      return [p3, v3, t];
    case 3:
      return [p3, q3, v3];
    case 4:
      return [t, p3, v3];
    case 5:
      return [v3, p3, q3];
  }
};
convert$1.hsv.hsl = function(hsv) {
  var h3 = hsv[0];
  var s3 = hsv[1] / 100;
  var v3 = hsv[2] / 100;
  var vmin = Math.max(v3, 0.01);
  var sl;
  var l;
  l = (2 - s3) * v3;
  var lmin = (2 - s3) * vmin;
  sl = s3 * vmin;
  sl /= lmin <= 1 ? lmin : 2 - lmin;
  sl = sl || 0;
  l /= 2;
  return [h3, sl * 100, l * 100];
};
convert$1.hwb.rgb = function(hwb) {
  var h3 = hwb[0] / 360;
  var wh = hwb[1] / 100;
  var bl = hwb[2] / 100;
  var ratio = wh + bl;
  var f3;
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }
  var i2 = Math.floor(6 * h3);
  var v3 = 1 - bl;
  f3 = 6 * h3 - i2;
  if ((i2 & 1) !== 0) {
    f3 = 1 - f3;
  }
  var n = wh + f3 * (v3 - wh);
  var r;
  var g3;
  var b3;
  switch (i2) {
    default:
    case 6:
    case 0:
      r = v3;
      g3 = n;
      b3 = wh;
      break;
    case 1:
      r = n;
      g3 = v3;
      b3 = wh;
      break;
    case 2:
      r = wh;
      g3 = v3;
      b3 = n;
      break;
    case 3:
      r = wh;
      g3 = n;
      b3 = v3;
      break;
    case 4:
      r = n;
      g3 = wh;
      b3 = v3;
      break;
    case 5:
      r = v3;
      g3 = wh;
      b3 = n;
      break;
  }
  return [r * 255, g3 * 255, b3 * 255];
};
convert$1.cmyk.rgb = function(cmyk) {
  var c2 = cmyk[0] / 100;
  var m2 = cmyk[1] / 100;
  var y3 = cmyk[2] / 100;
  var k = cmyk[3] / 100;
  var r = 1 - Math.min(1, c2 * (1 - k) + k);
  var g3 = 1 - Math.min(1, m2 * (1 - k) + k);
  var b3 = 1 - Math.min(1, y3 * (1 - k) + k);
  return [r * 255, g3 * 255, b3 * 255];
};
convert$1.xyz.rgb = function(xyz) {
  var x3 = xyz[0] / 100;
  var y3 = xyz[1] / 100;
  var z3 = xyz[2] / 100;
  var r;
  var g3;
  var b3;
  r = x3 * 3.2406 + y3 * -1.5372 + z3 * -0.4986;
  g3 = x3 * -0.9689 + y3 * 1.8758 + z3 * 0.0415;
  b3 = x3 * 0.0557 + y3 * -0.204 + z3 * 1.057;
  r = r > 31308e-7 ? 1.055 * Math.pow(r, 1 / 2.4) - 0.055 : r * 12.92;
  g3 = g3 > 31308e-7 ? 1.055 * Math.pow(g3, 1 / 2.4) - 0.055 : g3 * 12.92;
  b3 = b3 > 31308e-7 ? 1.055 * Math.pow(b3, 1 / 2.4) - 0.055 : b3 * 12.92;
  r = Math.min(Math.max(0, r), 1);
  g3 = Math.min(Math.max(0, g3), 1);
  b3 = Math.min(Math.max(0, b3), 1);
  return [r * 255, g3 * 255, b3 * 255];
};
convert$1.xyz.lab = function(xyz) {
  var x3 = xyz[0];
  var y3 = xyz[1];
  var z3 = xyz[2];
  x3 /= 95.047;
  y3 /= 100;
  z3 /= 108.883;
  x3 = x3 > 8856e-6 ? Math.pow(x3, 1 / 3) : 7.787 * x3 + 16 / 116;
  y3 = y3 > 8856e-6 ? Math.pow(y3, 1 / 3) : 7.787 * y3 + 16 / 116;
  z3 = z3 > 8856e-6 ? Math.pow(z3, 1 / 3) : 7.787 * z3 + 16 / 116;
  var l = 116 * y3 - 16;
  var a = 500 * (x3 - y3);
  var b3 = 200 * (y3 - z3);
  return [l, a, b3];
};
convert$1.lab.xyz = function(lab) {
  var l = lab[0];
  var a = lab[1];
  var b3 = lab[2];
  var x3;
  var y3;
  var z3;
  y3 = (l + 16) / 116;
  x3 = a / 500 + y3;
  z3 = y3 - b3 / 200;
  var y22 = Math.pow(y3, 3);
  var x22 = Math.pow(x3, 3);
  var z22 = Math.pow(z3, 3);
  y3 = y22 > 8856e-6 ? y22 : (y3 - 16 / 116) / 7.787;
  x3 = x22 > 8856e-6 ? x22 : (x3 - 16 / 116) / 7.787;
  z3 = z22 > 8856e-6 ? z22 : (z3 - 16 / 116) / 7.787;
  x3 *= 95.047;
  y3 *= 100;
  z3 *= 108.883;
  return [x3, y3, z3];
};
convert$1.lab.lch = function(lab) {
  var l = lab[0];
  var a = lab[1];
  var b3 = lab[2];
  var h3;
  var hr = Math.atan2(b3, a);
  h3 = hr * 360 / 2 / Math.PI;
  if (h3 < 0) {
    h3 += 360;
  }
  var c2 = Math.sqrt(a * a + b3 * b3);
  return [l, c2, h3];
};
convert$1.lch.lab = function(lch) {
  var l = lch[0];
  var c2 = lch[1];
  var h3 = lch[2];
  var hr = h3 / 360 * 2 * Math.PI;
  var a = c2 * Math.cos(hr);
  var b3 = c2 * Math.sin(hr);
  return [l, a, b3];
};
convert$1.rgb.ansi16 = function(args) {
  var saturation = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  var _args = _slicedToArray(args, 3), r = _args[0], g3 = _args[1], b3 = _args[2];
  var value = saturation === null ? convert$1.rgb.hsv(args)[2] : saturation;
  value = Math.round(value / 50);
  if (value === 0) {
    return 30;
  }
  var ansi = 30 + (Math.round(b3 / 255) << 2 | Math.round(g3 / 255) << 1 | Math.round(r / 255));
  if (value === 2) {
    ansi += 60;
  }
  return ansi;
};
convert$1.hsv.ansi16 = function(args) {
  return convert$1.rgb.ansi16(convert$1.hsv.rgb(args), args[2]);
};
convert$1.rgb.ansi256 = function(args) {
  var r = args[0];
  var g3 = args[1];
  var b3 = args[2];
  if (r === g3 && g3 === b3) {
    if (r < 8) {
      return 16;
    }
    if (r > 248) {
      return 231;
    }
    return Math.round((r - 8) / 247 * 24) + 232;
  }
  var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g3 / 255 * 5) + Math.round(b3 / 255 * 5);
  return ansi;
};
convert$1.ansi16.rgb = function(args) {
  var color = args % 10;
  if (color === 0 || color === 7) {
    if (args > 50) {
      color += 3.5;
    }
    color = color / 10.5 * 255;
    return [color, color, color];
  }
  var mult = (~~(args > 50) + 1) * 0.5;
  var r = (color & 1) * mult * 255;
  var g3 = (color >> 1 & 1) * mult * 255;
  var b3 = (color >> 2 & 1) * mult * 255;
  return [r, g3, b3];
};
convert$1.ansi256.rgb = function(args) {
  if (args >= 232) {
    var _c = (args - 232) * 10 + 8;
    return [_c, _c, _c];
  }
  args -= 16;
  var rem;
  var r = Math.floor(args / 36) / 5 * 255;
  var g3 = Math.floor((rem = args % 36) / 6) / 5 * 255;
  var b3 = rem % 6 / 5 * 255;
  return [r, g3, b3];
};
convert$1.rgb.hex = function(args) {
  var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
  var string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$1.hex.rgb = function(args) {
  var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
  if (!match) {
    return [0, 0, 0];
  }
  var colorString = match[0];
  if (match[0].length === 3) {
    colorString = colorString.split("").map(function(char) {
      return char + char;
    }).join("");
  }
  var integer = parseInt(colorString, 16);
  var r = integer >> 16 & 255;
  var g3 = integer >> 8 & 255;
  var b3 = integer & 255;
  return [r, g3, b3];
};
convert$1.rgb.hcg = function(rgb) {
  var r = rgb[0] / 255;
  var g3 = rgb[1] / 255;
  var b3 = rgb[2] / 255;
  var max = Math.max(Math.max(r, g3), b3);
  var min = Math.min(Math.min(r, g3), b3);
  var chroma = max - min;
  var grayscale;
  var hue;
  if (chroma < 1) {
    grayscale = min / (1 - chroma);
  } else {
    grayscale = 0;
  }
  if (chroma <= 0) {
    hue = 0;
  } else if (max === r) {
    hue = (g3 - b3) / chroma % 6;
  } else if (max === g3) {
    hue = 2 + (b3 - r) / chroma;
  } else {
    hue = 4 + (r - g3) / chroma;
  }
  hue /= 6;
  hue %= 1;
  return [hue * 360, chroma * 100, grayscale * 100];
};
convert$1.hsl.hcg = function(hsl) {
  var s3 = hsl[1] / 100;
  var l = hsl[2] / 100;
  var c2 = l < 0.5 ? 2 * s3 * l : 2 * s3 * (1 - l);
  var f3 = 0;
  if (c2 < 1) {
    f3 = (l - 0.5 * c2) / (1 - c2);
  }
  return [hsl[0], c2 * 100, f3 * 100];
};
convert$1.hsv.hcg = function(hsv) {
  var s3 = hsv[1] / 100;
  var v3 = hsv[2] / 100;
  var c2 = s3 * v3;
  var f3 = 0;
  if (c2 < 1) {
    f3 = (v3 - c2) / (1 - c2);
  }
  return [hsv[0], c2 * 100, f3 * 100];
};
convert$1.hcg.rgb = function(hcg) {
  var h3 = hcg[0] / 360;
  var c2 = hcg[1] / 100;
  var g3 = hcg[2] / 100;
  if (c2 === 0) {
    return [g3 * 255, g3 * 255, g3 * 255];
  }
  var pure = [0, 0, 0];
  var hi = h3 % 1 * 6;
  var v3 = hi % 1;
  var w3 = 1 - v3;
  var mg = 0;
  switch (Math.floor(hi)) {
    case 0:
      pure[0] = 1;
      pure[1] = v3;
      pure[2] = 0;
      break;
    case 1:
      pure[0] = w3;
      pure[1] = 1;
      pure[2] = 0;
      break;
    case 2:
      pure[0] = 0;
      pure[1] = 1;
      pure[2] = v3;
      break;
    case 3:
      pure[0] = 0;
      pure[1] = w3;
      pure[2] = 1;
      break;
    case 4:
      pure[0] = v3;
      pure[1] = 0;
      pure[2] = 1;
      break;
    default:
      pure[0] = 1;
      pure[1] = 0;
      pure[2] = w3;
  }
  mg = (1 - c2) * g3;
  return [(c2 * pure[0] + mg) * 255, (c2 * pure[1] + mg) * 255, (c2 * pure[2] + mg) * 255];
};
convert$1.hcg.hsv = function(hcg) {
  var c2 = hcg[1] / 100;
  var g3 = hcg[2] / 100;
  var v3 = c2 + g3 * (1 - c2);
  var f3 = 0;
  if (v3 > 0) {
    f3 = c2 / v3;
  }
  return [hcg[0], f3 * 100, v3 * 100];
};
convert$1.hcg.hsl = function(hcg) {
  var c2 = hcg[1] / 100;
  var g3 = hcg[2] / 100;
  var l = g3 * (1 - c2) + 0.5 * c2;
  var s3 = 0;
  if (l > 0 && l < 0.5) {
    s3 = c2 / (2 * l);
  } else if (l >= 0.5 && l < 1) {
    s3 = c2 / (2 * (1 - l));
  }
  return [hcg[0], s3 * 100, l * 100];
};
convert$1.hcg.hwb = function(hcg) {
  var c2 = hcg[1] / 100;
  var g3 = hcg[2] / 100;
  var v3 = c2 + g3 * (1 - c2);
  return [hcg[0], (v3 - c2) * 100, (1 - v3) * 100];
};
convert$1.hwb.hcg = function(hwb) {
  var w3 = hwb[1] / 100;
  var b3 = hwb[2] / 100;
  var v3 = 1 - b3;
  var c2 = v3 - w3;
  var g3 = 0;
  if (c2 < 1) {
    g3 = (v3 - c2) / (1 - c2);
  }
  return [hwb[0], c2 * 100, g3 * 100];
};
convert$1.apple.rgb = function(apple) {
  return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
};
convert$1.rgb.apple = function(rgb) {
  return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
};
convert$1.gray.rgb = function(args) {
  return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert$1.gray.hsl = function(args) {
  return [0, 0, args[0]];
};
convert$1.gray.hsv = convert$1.gray.hsl;
convert$1.gray.hwb = function(gray) {
  return [0, 100, gray[0]];
};
convert$1.gray.cmyk = function(gray) {
  return [0, 0, 0, gray[0]];
};
convert$1.gray.lab = function(gray) {
  return [gray[0], 0, 0];
};
convert$1.gray.hex = function(gray) {
  var val = Math.round(gray[0] / 100 * 255) & 255;
  var integer = (val << 16) + (val << 8) + val;
  var string = integer.toString(16).toUpperCase();
  return "000000".substring(string.length) + string;
};
convert$1.rgb.gray = function(rgb) {
  var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
  return [val / 255 * 100];
};
var conversions$1 = conversions$2;
function buildGraph() {
  var graph = {};
  var models2 = Object.keys(conversions$1);
  for (var len = models2.length, _i5 = 0; _i5 < len; _i5++) {
    graph[models2[_i5]] = {
      distance: -1,
      parent: null
    };
  }
  return graph;
}
__name(buildGraph, "buildGraph");
function deriveBFS(fromModel) {
  var graph = buildGraph();
  var queue = [fromModel];
  graph[fromModel].distance = 0;
  while (queue.length) {
    var current = queue.pop();
    var adjacents = Object.keys(conversions$1[current]);
    for (var len = adjacents.length, _i6 = 0; _i6 < len; _i6++) {
      var adjacent = adjacents[_i6];
      var node = graph[adjacent];
      if (node.distance === -1) {
        node.distance = graph[current].distance + 1;
        node.parent = current;
        queue.unshift(adjacent);
      }
    }
  }
  return graph;
}
__name(deriveBFS, "deriveBFS");
function link(from, to) {
  return function(args) {
    return to(from(args));
  };
}
__name(link, "link");
function wrapConversion(toModel, graph) {
  var path = [graph[toModel].parent, toModel];
  var fn = conversions$1[graph[toModel].parent][toModel];
  var cur = graph[toModel].parent;
  while (graph[cur].parent) {
    path.unshift(graph[cur].parent);
    fn = link(conversions$1[graph[cur].parent][cur], fn);
    cur = graph[cur].parent;
  }
  fn.conversion = path;
  return fn;
}
__name(wrapConversion, "wrapConversion");
var route$1 = /* @__PURE__ */ __name(function route$12(fromModel) {
  var graph = deriveBFS(fromModel);
  var conversion = {};
  var models2 = Object.keys(graph);
  for (var len = models2.length, _i7 = 0; _i7 < len; _i7++) {
    var toModel = models2[_i7];
    var node = graph[toModel];
    if (node.parent === null) {
      continue;
    }
    conversion[toModel] = wrapConversion(toModel, graph);
  }
  return conversion;
}, "route$1");
var conversions = conversions$2;
var route = route$1;
var convert = {};
var models = Object.keys(conversions);
function wrapRaw(fn) {
  var wrappedFn = /* @__PURE__ */ __name(function wrappedFn2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    return fn(args);
  }, "wrappedFn");
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
__name(wrapRaw, "wrapRaw");
function wrapRounded(fn) {
  var wrappedFn = /* @__PURE__ */ __name(function wrappedFn2() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    var arg0 = args[0];
    if (arg0 === void 0 || arg0 === null) {
      return arg0;
    }
    if (arg0.length > 1) {
      args = arg0;
    }
    var result = fn(args);
    if (_typeof(result) === "object") {
      for (var len = result.length, _i8 = 0; _i8 < len; _i8++) {
        result[_i8] = Math.round(result[_i8]);
      }
    }
    return result;
  }, "wrappedFn");
  if ("conversion" in fn) {
    wrappedFn.conversion = fn.conversion;
  }
  return wrappedFn;
}
__name(wrapRounded, "wrapRounded");
models.forEach(function(fromModel) {
  convert[fromModel] = {};
  Object.defineProperty(convert[fromModel], "channels", {
    value: conversions[fromModel].channels
  });
  Object.defineProperty(convert[fromModel], "labels", {
    value: conversions[fromModel].labels
  });
  var routes = route(fromModel);
  var routeModels = Object.keys(routes);
  routeModels.forEach(function(toModel) {
    var fn = routes[toModel];
    convert[fromModel][toModel] = wrapRounded(fn);
    convert[fromModel][toModel].raw = wrapRaw(fn);
  });
});
var colorConvert = convert;
var root = _root;
var now$1 = /* @__PURE__ */ __name(function now$12() {
  return root.Date.now();
}, "now$1");
var now_1 = now$1;
var reWhitespace = /\s/;
function trimmedEndIndex$1(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
__name(trimmedEndIndex$1, "trimmedEndIndex$1");
var _trimmedEndIndex = trimmedEndIndex$1;
var trimmedEndIndex = _trimmedEndIndex;
var reTrimStart = /^\s+/;
function baseTrim$1(string) {
  return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
__name(baseTrim$1, "baseTrim$1");
var _baseTrim = baseTrim$1;
var baseTrim = _baseTrim, isObject$2 = isObject_1, isSymbol = isSymbol_1;
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber$1(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject$2(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject$2(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
__name(toNumber$1, "toNumber$1");
var toNumber_1 = toNumber$1;
var isObject$1 = isObject_1, now = now_1, toNumber = toNumber_1;
var FUNC_ERROR_TEXT$1 = "Expected a function";
var nativeMax = Math.max, nativeMin = Math.min;
function debounce$1(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  wait = toNumber(wait) || 0;
  if (isObject$1(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  __name(invokeFunc, "invokeFunc");
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  __name(leadingEdge, "leadingEdge");
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }
  __name(remainingWait, "remainingWait");
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  __name(shouldInvoke, "shouldInvoke");
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  __name(timerExpired, "timerExpired");
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  __name(trailingEdge, "trailingEdge");
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  __name(cancel, "cancel");
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  __name(flush, "flush");
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  __name(debounced, "debounced");
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
__name(debounce$1, "debounce$1");
var debounce_1 = debounce$1;
var debounce = debounce_1, isObject = isObject_1;
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
__name(throttle, "throttle");
var throttle_1 = throttle;
var Wrapper = styled.div({
  position: "relative",
  maxWidth: 250
});
var PickerTooltip = styled(WithTooltip)({
  position: "absolute",
  zIndex: 1,
  top: 4,
  left: 4
});
var TooltipContent = styled.div({
  width: 200,
  margin: 5,
  ".react-colorful__saturation": {
    borderRadius: "4px 4px 0 0"
  },
  ".react-colorful__hue": {
    boxShadow: "inset 0 0 0 1px rgb(0 0 0 / 5%)"
  },
  ".react-colorful__last-control": {
    borderRadius: "0 0 4px 4px"
  }
});
var Note = styled(TooltipNote)(function(_ref) {
  var theme = _ref.theme;
  return {
    fontFamily: theme.typography.fonts.base
  };
});
var Swatches = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(9, 16px)",
  gap: 6,
  padding: 3,
  marginTop: 5,
  width: 200
});
var SwatchColor = styled.div(function(_ref2) {
  var theme = _ref2.theme, active = _ref2.active;
  return {
    width: 16,
    height: 16,
    boxShadow: active ? "".concat(theme.appBorderColor, " 0 0 0 1px inset, ").concat(theme.color.mediumdark, "50 0 0 0 4px") : "".concat(theme.appBorderColor, " 0 0 0 1px inset"),
    borderRadius: theme.appBorderRadius
  };
});
var swatchBackground = `url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`;
var Swatch = /* @__PURE__ */ __name(function Swatch2(_a) {
  var value = _a.value, active = _a.active, onClick = _a.onClick, style = _a.style, props = __rest(_a, ["value", "active", "onClick", "style"]);
  var backgroundImage = "linear-gradient(".concat(value, ", ").concat(value, "), ").concat(swatchBackground, ", linear-gradient(#fff, #fff)");
  return /* @__PURE__ */ jsx(SwatchColor, {
    ...Object.assign({}, props, {
      active,
      onClick
    }, {
      style: Object.assign(Object.assign({}, style), {
        backgroundImage
      })
    })
  });
}, "Swatch");
var Input = styled(Form.Input)(function(_ref3) {
  var theme = _ref3.theme;
  return {
    width: "100%",
    paddingLeft: 30,
    paddingRight: 30,
    boxSizing: "border-box",
    fontFamily: theme.typography.fonts.base
  };
});
var ToggleIcon = styled(Icons)(function(_ref4) {
  var theme = _ref4.theme;
  return {
    position: "absolute",
    zIndex: 1,
    top: 6,
    right: 7,
    width: 20,
    height: 20,
    padding: 4,
    boxSizing: "border-box",
    cursor: "pointer",
    color: theme.input.color
  };
});
var ColorSpace;
(function(ColorSpace2) {
  ColorSpace2["RGB"] = "rgb";
  ColorSpace2["HSL"] = "hsl";
  ColorSpace2["HEX"] = "hex";
})(ColorSpace || (ColorSpace = {}));
var COLOR_SPACES = Object.values(ColorSpace);
var COLOR_REGEXP = /\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/;
var RGB_REGEXP = /^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i;
var HSL_REGEXP = /^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i;
var HEX_REGEXP = /^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i;
var SHORTHEX_REGEXP = /^\s*#?([0-9a-f]{3})\s*$/i;
var ColorPicker = (_ColorPicker = {}, _defineProperty(_ColorPicker, ColorSpace.HEX, J), _defineProperty(_ColorPicker, ColorSpace.RGB, pe), _defineProperty(_ColorPicker, ColorSpace.HSL, re), _ColorPicker);
var fallbackColor = (_fallbackColor = {}, _defineProperty(_fallbackColor, ColorSpace.HEX, "transparent"), _defineProperty(_fallbackColor, ColorSpace.RGB, "rgba(0, 0, 0, 0)"), _defineProperty(_fallbackColor, ColorSpace.HSL, "hsla(0, 0%, 0%, 0)"), _fallbackColor);
var stringToArgs = /* @__PURE__ */ __name(function stringToArgs2(value) {
  var match = value === null || value === void 0 ? void 0 : value.match(COLOR_REGEXP);
  if (!match)
    return [0, 0, 0, 1];
  var _match = _slicedToArray(match, 5), x3 = _match[1], y3 = _match[2], z3 = _match[3], _match$ = _match[4], a = _match$ === void 0 ? 1 : _match$;
  return [x3, y3, z3, a].map(Number);
}, "stringToArgs");
var parseValue = /* @__PURE__ */ __name(function parseValue2(value) {
  var _ref11;
  if (!value)
    return void 0;
  var valid = true;
  if (RGB_REGEXP.test(value)) {
    var _ref7;
    var _stringToArgs = stringToArgs(value), _stringToArgs2 = _slicedToArray(_stringToArgs, 4), r = _stringToArgs2[0], _g = _stringToArgs2[1], _b = _stringToArgs2[2], a = _stringToArgs2[3];
    var _ref5 = colorConvert.rgb.hsl([r, _g, _b]) || [0, 0, 0], _ref6 = _slicedToArray(_ref5, 3), _h = _ref6[0], _s2 = _ref6[1], l = _ref6[2];
    return _ref7 = {
      valid,
      value,
      keyword: colorConvert.rgb.keyword([r, _g, _b]),
      colorSpace: ColorSpace.RGB
    }, _defineProperty(_ref7, ColorSpace.RGB, value), _defineProperty(_ref7, ColorSpace.HSL, "hsla(".concat(_h, ", ").concat(_s2, "%, ").concat(l, "%, ").concat(a, ")")), _defineProperty(_ref7, ColorSpace.HEX, "#".concat(colorConvert.rgb.hex([r, _g, _b]).toLowerCase())), _ref7;
  }
  if (HSL_REGEXP.test(value)) {
    var _ref10;
    var _stringToArgs3 = stringToArgs(value), _stringToArgs4 = _slicedToArray(_stringToArgs3, 4), _h2 = _stringToArgs4[0], _s3 = _stringToArgs4[1], _l = _stringToArgs4[2], _a2 = _stringToArgs4[3];
    var _ref8 = colorConvert.hsl.rgb([_h2, _s3, _l]) || [0, 0, 0], _ref9 = _slicedToArray(_ref8, 3), _r = _ref9[0], _g2 = _ref9[1], _b2 = _ref9[2];
    return _ref10 = {
      valid,
      value,
      keyword: colorConvert.hsl.keyword([_h2, _s3, _l]),
      colorSpace: ColorSpace.HSL
    }, _defineProperty(_ref10, ColorSpace.RGB, "rgba(".concat(_r, ", ").concat(_g2, ", ").concat(_b2, ", ").concat(_a2, ")")), _defineProperty(_ref10, ColorSpace.HSL, value), _defineProperty(_ref10, ColorSpace.HEX, "#".concat(colorConvert.hsl.hex([_h2, _s3, _l]).toLowerCase())), _ref10;
  }
  var plain = value.replace("#", "");
  var rgb = colorConvert.keyword.rgb(plain) || colorConvert.hex.rgb(plain);
  var hsl = colorConvert.rgb.hsl(rgb);
  var mapped = value;
  if (/[^#a-f0-9]/i.test(value))
    mapped = plain;
  else if (HEX_REGEXP.test(value))
    mapped = "#".concat(plain);
  if (mapped.startsWith("#")) {
    valid = HEX_REGEXP.test(mapped);
  } else {
    try {
      colorConvert.keyword.hex(mapped);
    } catch (e) {
      valid = false;
    }
  }
  return _ref11 = {
    valid,
    value: mapped,
    keyword: colorConvert.rgb.keyword(rgb),
    colorSpace: ColorSpace.HEX
  }, _defineProperty(_ref11, ColorSpace.RGB, "rgba(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ", 1)")), _defineProperty(_ref11, ColorSpace.HSL, "hsla(".concat(hsl[0], ", ").concat(hsl[1], "%, ").concat(hsl[2], "%, 1)")), _defineProperty(_ref11, ColorSpace.HEX, mapped), _ref11;
}, "parseValue");
var getRealValue = /* @__PURE__ */ __name(function getRealValue2(value, color, colorSpace) {
  if (!value || !(color === null || color === void 0 ? void 0 : color.valid))
    return fallbackColor[colorSpace];
  if (colorSpace !== ColorSpace.HEX)
    return (color === null || color === void 0 ? void 0 : color[colorSpace]) || fallbackColor[colorSpace];
  if (!color.hex.startsWith("#")) {
    try {
      return "#".concat(colorConvert.keyword.hex(color.hex));
    } catch (e) {
      return fallbackColor.hex;
    }
  }
  var short = color.hex.match(SHORTHEX_REGEXP);
  if (!short)
    return HEX_REGEXP.test(color.hex) ? color.hex : fallbackColor.hex;
  var _short$1$split = short[1].split(""), _short$1$split2 = _slicedToArray(_short$1$split, 3), r = _short$1$split2[0], g3 = _short$1$split2[1], b3 = _short$1$split2[2];
  return "#".concat(r).concat(r).concat(g3).concat(g3).concat(b3).concat(b3);
}, "getRealValue");
var useColorInput = /* @__PURE__ */ __name(function useColorInput2(initialValue, onChange) {
  var _useState = react.exports.useState(initialValue || ""), _useState2 = _slicedToArray(_useState, 2), value = _useState2[0], setValue = _useState2[1];
  var _useState3 = react.exports.useState(function() {
    return parseValue(value);
  }), _useState4 = _slicedToArray(_useState3, 2), color = _useState4[0], setColor = _useState4[1];
  var _useState5 = react.exports.useState((color === null || color === void 0 ? void 0 : color.colorSpace) || ColorSpace.HEX), _useState6 = _slicedToArray(_useState5, 2), colorSpace = _useState6[0], setColorSpace = _useState6[1];
  react.exports.useEffect(function() {
    if (initialValue !== void 0)
      return;
    setValue("");
    setColor(void 0);
    setColorSpace(ColorSpace.HEX);
  }, [initialValue]);
  var realValue = react.exports.useMemo(function() {
    return getRealValue(value, color, colorSpace).toLowerCase();
  }, [value, color, colorSpace]);
  var updateValue = react.exports.useCallback(function(update) {
    var parsed = parseValue(update);
    setValue((parsed === null || parsed === void 0 ? void 0 : parsed.value) || update || "");
    if (!parsed)
      return;
    setColor(parsed);
    setColorSpace(parsed.colorSpace);
    onChange(parsed.value);
  }, [onChange]);
  var cycleColorSpace = react.exports.useCallback(function() {
    var next = COLOR_SPACES.indexOf(colorSpace) + 1;
    if (next >= COLOR_SPACES.length)
      next = 0;
    setColorSpace(COLOR_SPACES[next]);
    var update = (color === null || color === void 0 ? void 0 : color[COLOR_SPACES[next]]) || "";
    setValue(update);
    onChange(update);
  }, [color, colorSpace, onChange]);
  return {
    value,
    realValue,
    updateValue,
    color,
    colorSpace,
    cycleColorSpace
  };
}, "useColorInput");
var id = /* @__PURE__ */ __name(function id2(value) {
  return value.replace(/\s*/, "").toLowerCase();
}, "id");
var usePresets = /* @__PURE__ */ __name(function usePresets2(presetColors, currentColor, colorSpace) {
  var _useState7 = react.exports.useState((currentColor === null || currentColor === void 0 ? void 0 : currentColor.valid) ? [currentColor] : []), _useState8 = _slicedToArray(_useState7, 2), selectedColors = _useState8[0], setSelectedColors = _useState8[1];
  react.exports.useEffect(function() {
    if (currentColor !== void 0)
      return;
    setSelectedColors([]);
  }, [currentColor]);
  var presets = react.exports.useMemo(function() {
    var initialPresets = (presetColors || []).map(function(preset) {
      if (typeof preset === "string")
        return parseValue(preset);
      if (preset.title)
        return Object.assign(Object.assign({}, parseValue(preset.color)), {
          keyword: preset.title
        });
      return parseValue(preset.color);
    });
    return initialPresets.concat(selectedColors).filter(Boolean).slice(-27);
  }, [presetColors, selectedColors]);
  var addPreset = react.exports.useCallback(function(color) {
    if (!(color === null || color === void 0 ? void 0 : color.valid))
      return;
    if (presets.some(function(preset) {
      return id(preset[colorSpace]) === id(color[colorSpace]);
    }))
      return;
    setSelectedColors(function(arr) {
      return arr.concat(color);
    });
  }, [colorSpace, presets]);
  return {
    presets,
    addPreset
  };
}, "usePresets");
var ColorControl = /* @__PURE__ */ __name(function ColorControl2(_ref12) {
  var name = _ref12.name, initialValue = _ref12.value, onChange = _ref12.onChange, onFocus = _ref12.onFocus, onBlur = _ref12.onBlur, presetColors = _ref12.presetColors, startOpen = _ref12.startOpen;
  var _useColorInput = useColorInput(initialValue, throttle_1(onChange, 200)), value = _useColorInput.value, realValue = _useColorInput.realValue, updateValue = _useColorInput.updateValue, color = _useColorInput.color, colorSpace = _useColorInput.colorSpace, cycleColorSpace = _useColorInput.cycleColorSpace;
  var _usePresets = usePresets(presetColors, color, colorSpace), presets = _usePresets.presets, addPreset = _usePresets.addPreset;
  var Picker = ColorPicker[colorSpace];
  return /* @__PURE__ */ jsxs(Wrapper, {
    children: [/* @__PURE__ */ jsx(PickerTooltip, {
      trigger: "click",
      startOpen,
      closeOnClick: true,
      onVisibilityChange: /* @__PURE__ */ __name(function onVisibilityChange() {
        return addPreset(color);
      }, "onVisibilityChange"),
      tooltip: /* @__PURE__ */ jsxs(TooltipContent, {
        children: [/* @__PURE__ */ jsx(Picker, {
          ...Object.assign({
            color: realValue === "transparent" ? "#000000" : realValue
          }, {
            onChange: updateValue,
            onFocus,
            onBlur
          })
        }), presets.length > 0 && /* @__PURE__ */ jsx(Swatches, {
          children: presets.map(function(preset, index) {
            return /* @__PURE__ */ jsx(WithTooltip, {
              hasChrome: false,
              tooltip: /* @__PURE__ */ jsx(Note, {
                note: preset.keyword || preset.value
              }),
              children: /* @__PURE__ */ jsx(Swatch, {
                value: preset[colorSpace],
                active: color && id(preset[colorSpace]) === id(color[colorSpace]),
                onClick: /* @__PURE__ */ __name(function onClick() {
                  return updateValue(preset.value);
                }, "onClick")
              })
            }, "".concat(preset.value, "-").concat(index));
          })
        })]
      }),
      children: /* @__PURE__ */ jsx(Swatch, {
        value: realValue,
        style: {
          margin: 4
        }
      })
    }), /* @__PURE__ */ jsx(Input, {
      id: getControlId(name),
      value,
      onChange: /* @__PURE__ */ __name(function onChange2(e) {
        return updateValue(e.target.value);
      }, "onChange"),
      onFocus: /* @__PURE__ */ __name(function onFocus2(e) {
        return e.target.select();
      }, "onFocus"),
      placeholder: "Choose color..."
    }), value ? /* @__PURE__ */ jsx(ToggleIcon, {
      icon: "markup",
      onClick: cycleColorSpace
    }) : null]
  });
}, "ColorControl");
export {
  ColorControl,
  ColorControl as default
};
