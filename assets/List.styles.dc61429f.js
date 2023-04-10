var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { t as toCSSVar, m as useColorMode, n as memoizedGet, p as runIfFn, q as css, _ as _defineProperty } from "./defineProperty.317be907.js";
import { r as react, a as jsxs, j as jsx } from "./jsx-runtime.1846cd15.js";
import { G as Global } from "./index.8b3f396e.js";
import { a as ThemeProvider$1, n as newStyled } from "./emotion-styled.browser.esm.cceb3f76.js";
import { r as reactDom } from "./index.b3810c98.js";
import { I as Icon } from "./index.46dda1c5.js";
import { C as Container, B as Box } from "./Section.7d097e59.js";
function createContext(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = react.exports.createContext(void 0);
  Context.displayName = name;
  function useContext() {
    var _a;
    const context = react.exports.useContext(Context);
    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, error, useContext);
      throw error;
    }
    return context;
  }
  __name(useContext, "useContext");
  return [
    Context.Provider,
    useContext,
    Context
  ];
}
__name(createContext, "createContext");
function ThemeProvider(props) {
  const { cssVarsRoot, theme, children } = props;
  const computedTheme = react.exports.useMemo(() => toCSSVar(theme), [theme]);
  return /* @__PURE__ */ jsxs(ThemeProvider$1, { theme: computedTheme, children: [
    /* @__PURE__ */ jsx(CSSVars, { root: cssVarsRoot }),
    children
  ] });
}
__name(ThemeProvider, "ThemeProvider");
function CSSVars({ root = ":host, :root" }) {
  const selector = [root, `[data-theme]`].join(",");
  return /* @__PURE__ */ jsx(Global, { styles: (theme) => ({ [selector]: theme.__cssVars }) });
}
__name(CSSVars, "CSSVars");
createContext({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function createStylesContext(componentName) {
  return createContext({
    name: `${componentName}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${componentName} />" `
  });
}
__name(createStylesContext, "createStylesContext");
function GlobalStyle() {
  const { colorMode } = useColorMode();
  return /* @__PURE__ */ jsx(
    Global,
    {
      styles: (theme) => {
        const styleObjectOrFn = memoizedGet(theme, "styles.global");
        const globalStyles = runIfFn(styleObjectOrFn, { theme, colorMode });
        if (!globalStyles)
          return void 0;
        const styles = css(globalStyles)(theme);
        return styles;
      }
    }
  );
}
__name(GlobalStyle, "GlobalStyle");
function n$3(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
__name(n$3, "n$3");
function r$2(n2) {
  return !!n2 && !!n2[Q];
}
__name(r$2, "r$2");
function t$3(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v$2(n2));
}
__name(t$3, "t$3");
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
__name(i, "i");
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v$2(n2) ? 3 : 0;
}
__name(o, "o");
function u$3(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
__name(u$3, "u$3");
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
__name(a, "a");
function f$1(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
__name(f$1, "f$1");
function c$1(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
__name(c$1, "c$1");
function s(n2) {
  return X && n2 instanceof Map;
}
__name(s, "s");
function v$2(n2) {
  return q$3 && n2 instanceof Set;
}
__name(v$2, "v$2");
function p$3(n2) {
  return n2.o || n2.t;
}
__name(p$3, "p$3");
function l$2(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
__name(l$2, "l$2");
function d$1(n2, e2) {
  return void 0 === e2 && (e2 = false), y(n2) || r$2(n2) || !t$3(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$3), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d$1(r2, true);
  }, true)), n2;
}
__name(d$1, "d$1");
function h$3() {
  n$3(2);
}
__name(h$3, "h$3");
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
__name(y, "y");
function b$1(r2) {
  var t2 = tn[r2];
  return t2 || n$3(18, r2), t2;
}
__name(b$1, "b$1");
function m$2(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
__name(m$2, "m$2");
function _() {
  return U;
}
__name(_, "_");
function j(n2, r2) {
  r2 && (b$1("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
__name(j, "j");
function g$1(n2) {
  O(n2), n2.p.forEach(S), n2.p = null;
}
__name(g$1, "g$1");
function O(n2) {
  n2 === U && (U = n2.l);
}
__name(O, "O");
function w$1(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
__name(w$1, "w$1");
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
__name(S, "S");
function P(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.O || b$1("ES5").S(e2, r2, o2), o2 ? (i2[Q].P && (g$1(e2), n$3(4)), t$3(r2) && (r2 = M(e2, r2), e2.l || x(e2, r2)), e2.u && b$1("Patches").M(i2[Q].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), g$1(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H ? r2 : void 0;
}
__name(P, "P");
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e2 = r2[Q];
  if (!e2)
    return i(r2, function(i2, o3) {
      return A(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l$2(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e2, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b$1("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
__name(M, "M");
function A(e2, i2, o2, a2, c2, s2, v2) {
  if (r$2(c2)) {
    var p2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u$3(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f$1(o2, a2, p2), !r$2(p2))
      return;
    e2.m = false;
  } else
    v2 && o2.add(c2);
  if (t$3(c2) && !y(c2)) {
    if (!e2.h.D && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x(e2, c2);
  }
}
__name(A, "A");
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d$1(r2, t2);
}
__name(x, "x");
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p$3(t2) : n2)[r2];
}
__name(z, "z");
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
__name(I, "I");
function k$2(n2) {
  n2.P || (n2.P = true, n2.l && k$2(n2.l));
}
__name(k$2, "k$2");
function E(n2) {
  n2.o || (n2.o = l$2(n2.t));
}
__name(E, "E");
function N(n2, r2, t2) {
  var e2 = s(r2) ? b$1("MapSet").F(r2, t2) : v$2(r2) ? b$1("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b$1("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e2), e2;
}
__name(N, "N");
function R(e2) {
  return r$2(e2) || n$3(22, e2), (/* @__PURE__ */ __name(function n2(r2) {
    if (!t$3(r2))
      return r2;
    var e3, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b$1("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = D(r2, c2), u2.I = false;
    } else
      e3 = D(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f$1(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }, "n"))(e2);
}
__name(R, "R");
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$2(n2);
}
__name(D, "D");
function F() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q];
      en.set(t4, n2, r3);
    } }, t3;
  }
  __name(t2, "t");
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q];
      if (!t3.P)
        switch (t3.i) {
          case 5:
            a2(t3) && k$2(t3);
            break;
          case 4:
            o2(t3) && k$2(t3);
        }
    }
  }
  __name(e2, "e");
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q) {
        var a3 = r2[o3];
        if (void 0 === a3 && !u$3(r2, o3))
          return true;
        var f2 = t3[o3], s3 = f2 && f2[Q];
        if (s3 ? s3.t !== a3 : !c$1(f2, a3))
          return true;
      }
    }
    var v2 = !!r2[Q];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  __name(o2, "o");
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length)
      return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get)
      return true;
    for (var e3 = 0; e3 < r2.length; e3++)
      if (!r2.hasOwnProperty(e3))
        return true;
    return false;
  }
  __name(a2, "a");
  var s2 = {};
  m$2("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++)
          Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f2 = u2[a3];
        o4[f2] = t2(f2, n3 || !!o4[f2].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _(), P: false, I: false, R: {}, l: r2, t: n2, k: i2, o: null, g: false, C: false };
    return Object.defineProperty(i2, Q, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r$2(t3) && t3[Q].A === n2 && e2(n2.p) : (n2.u && (/* @__PURE__ */ __name(function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f2 = t4.R, c2 = t4.i;
          if (4 === c2)
            i(o4, function(r3) {
              r3 !== Q && (void 0 !== e3[r3] || u$3(e3, r3) ? f2[r3] || n3(o4[r3]) : (f2[r3] = true, k$2(t4)));
            }), i(e3, function(n4) {
              void 0 !== o4[n4] || u$3(o4, n4) || (f2[n4] = false, k$2(t4));
            });
          else if (5 === c2) {
            if (a2(t4) && (k$2(t4), f2.length = true), o4.length < e3.length)
              for (var s3 = o4.length; s3 < e3.length; s3++)
                f2[s3] = false;
            else
              for (var v2 = e3.length; v2 < o4.length; v2++)
                f2[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++)
              o4.hasOwnProperty(l2) || (f2[l2] = true), void 0 === f2[l2] && n3(o4[l2]);
          }
        }
      }
    }, "n"))(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
__name(F, "F");
function T() {
  function e2(n2) {
    if (!t$3(n2))
      return n2;
    if (Array.isArray(n2))
      return n2.map(e2);
    if (s(n2))
      return new Map(Array.from(n2.entries()).map(function(n3) {
        return [n3[0], e2(n3[1])];
      }));
    if (v$2(n2))
      return new Set(Array.from(n2).map(e2));
    var r2 = Object.create(Object.getPrototypeOf(n2));
    for (var i2 in n2)
      r2[i2] = e2(n2[i2]);
    return u$3(n2, L) && (r2[L] = n2[L]), r2;
  }
  __name(e2, "e");
  function f2(n2) {
    return r$2(n2) ? e2(n2) : n2;
  }
  __name(f2, "f");
  var c2 = "add";
  m$2("Patches", { $: function(r2, t2) {
    return t2.forEach(function(t3) {
      for (var i2 = t3.path, u2 = t3.op, f3 = r2, s2 = 0; s2 < i2.length - 1; s2++) {
        var v2 = o(f3), p2 = i2[s2];
        "string" != typeof p2 && "number" != typeof p2 && (p2 = "" + p2), 0 !== v2 && 1 !== v2 || "__proto__" !== p2 && "constructor" !== p2 || n$3(24), "function" == typeof f3 && "prototype" === p2 && n$3(24), "object" != typeof (f3 = a(f3, p2)) && n$3(15, i2.join("/"));
      }
      var l2 = o(f3), d2 = e2(t3.value), h2 = i2[i2.length - 1];
      switch (u2) {
        case "replace":
          switch (l2) {
            case 2:
              return f3.set(h2, d2);
            case 3:
              n$3(16);
            default:
              return f3[h2] = d2;
          }
        case c2:
          switch (l2) {
            case 1:
              return "-" === h2 ? f3.push(d2) : f3.splice(h2, 0, d2);
            case 2:
              return f3.set(h2, d2);
            case 3:
              return f3.add(d2);
            default:
              return f3[h2] = d2;
          }
        case "remove":
          switch (l2) {
            case 1:
              return f3.splice(h2, 1);
            case 2:
              return f3.delete(h2);
            case 3:
              return f3.delete(t3.value);
            default:
              return delete f3[h2];
          }
        default:
          n$3(17, u2);
      }
    }), r2;
  }, N: function(n2, r2, t2, e3) {
    switch (n2.i) {
      case 0:
      case 4:
      case 2:
        return function(n3, r3, t3, e4) {
          var o2 = n3.t, s2 = n3.o;
          i(n3.R, function(n4, i2) {
            var v2 = a(o2, n4), p2 = a(s2, n4), l2 = i2 ? u$3(o2, n4) ? "replace" : c2 : "remove";
            if (v2 !== p2 || "replace" !== l2) {
              var d2 = r3.concat(n4);
              t3.push("remove" === l2 ? { op: l2, path: d2 } : { op: l2, path: d2, value: p2 }), e4.push(l2 === c2 ? { op: "remove", path: d2 } : "remove" === l2 ? { op: c2, path: d2, value: f2(v2) } : { op: "replace", path: d2, value: f2(v2) });
            }
          });
        }(n2, r2, t2, e3);
      case 5:
      case 1:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.R, u2 = n3.o;
          if (u2.length < i2.length) {
            var a2 = [u2, i2];
            i2 = a2[0], u2 = a2[1];
            var s2 = [e4, t3];
            t3 = s2[0], e4 = s2[1];
          }
          for (var v2 = 0; v2 < i2.length; v2++)
            if (o2[v2] && u2[v2] !== i2[v2]) {
              var p2 = r3.concat([v2]);
              t3.push({ op: "replace", path: p2, value: f2(u2[v2]) }), e4.push({ op: "replace", path: p2, value: f2(i2[v2]) });
            }
          for (var l2 = i2.length; l2 < u2.length; l2++) {
            var d2 = r3.concat([l2]);
            t3.push({ op: c2, path: d2, value: f2(u2[l2]) });
          }
          i2.length < u2.length && e4.push({ op: "replace", path: r3.concat(["length"]), value: i2.length });
        }(n2, r2, t2, e3);
      case 3:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.o, u2 = 0;
          i2.forEach(function(n4) {
            if (!o2.has(n4)) {
              var i3 = r3.concat([u2]);
              t3.push({ op: "remove", path: i3, value: n4 }), e4.unshift({ op: c2, path: i3, value: n4 });
            }
            u2++;
          }), u2 = 0, o2.forEach(function(n4) {
            if (!i2.has(n4)) {
              var o3 = r3.concat([u2]);
              t3.push({ op: c2, path: o3, value: n4 }), e4.unshift({ op: "remove", path: o3, value: n4 });
            }
            u2++;
          });
        }(n2, r2, t2, e3);
    }
  }, M: function(n2, r2, t2, e3) {
    t2.push({ op: "replace", path: [], value: r2 === H ? void 0 : r2 }), e3.push({ op: "replace", path: [], value: n2 });
  } });
}
__name(T, "T");
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q$3 = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e2 = p$3(n2);
  if (!u$3(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t$3(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$3(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$3(n2));
}, set: function(n2, r2, t2) {
  var e2 = I(p$3(n2), r2);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p$3(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c$1(t2, i2) && (void 0 !== t2 || u$3(n2.t, r2)))
      return true;
    E(n2), k$2(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k$2(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$3(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$3(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$3(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.O = B, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n$3(6), void 0 !== o2 && "function" != typeof o2 && n$3(7), t$3(r3)) {
        var c2 = w$1(e3), s2 = N(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g$1(c2) : O(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw g$1(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e3.D && d$1(f2, true), o2) {
          var p2 = [], l2 = [];
          b$1("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n$3(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  __name(e2, "e");
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t$3(e3) || n$3(8), r$2(e3) && (e3 = R(e3));
    var i3 = w$1(this), o2 = N(this, e3, void 0);
    return o2[Q].C = true, O(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q];
    var i3 = e3.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n$3(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b$1("Patches").$;
    return r$2(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce, cn = an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
__name(ownKeys, "ownKeys");
function _objectSpread2(target) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var source = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
__name(_objectSpread2, "_objectSpread2");
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
__name(formatProdErrorMessage, "formatProdErrorMessage");
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = /* @__PURE__ */ __name(function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
}, "randomString");
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: /* @__PURE__ */ __name(function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }, "PROBE_UNKNOWN_ACTION")
};
function isPlainObject$2(obj) {
  if (typeof obj !== "object" || obj === null)
    return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
__name(isPlainObject$2, "isPlainObject$2");
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  __name(ensureCanMutateNextListeners, "ensureCanMutateNextListeners");
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  __name(getState, "getState");
  function subscribe(listener) {
    if (typeof listener !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return /* @__PURE__ */ __name(function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    }, "unsubscribe");
  }
  __name(subscribe, "subscribe");
  function dispatch(action) {
    if (!isPlainObject$2(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener = listeners[i2];
      listener();
    }
    return action;
  }
  __name(dispatch, "dispatch");
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  __name(replaceReducer, "replaceReducer");
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      subscribe: /* @__PURE__ */ __name(function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        __name(observeState, "observeState");
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }, "subscribe")
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  __name(observable, "observable");
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
__name(createStore, "createStore");
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState2 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
__name(assertReducerShape, "assertReducerShape");
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return /* @__PURE__ */ __name(function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  }, "combination");
}
__name(combineReducers, "combineReducers");
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
__name(compose, "compose");
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store = createStore2.apply(void 0, arguments);
      var _dispatch = /* @__PURE__ */ __name(function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      }, "dispatch");
      var middlewareAPI = {
        getState: store.getState,
        dispatch: /* @__PURE__ */ __name(function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }, "dispatch")
      };
      var chain = middlewares.map(function(middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2(_objectSpread2({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
__name(applyMiddleware, "applyMiddleware");
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: /* @__PURE__ */ __name(function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    }, "get"),
    put: /* @__PURE__ */ __name(function put(key, value) {
      entry = {
        key,
        value
      };
    }, "put"),
    getEntries: /* @__PURE__ */ __name(function getEntries() {
      return entry ? [entry] : [];
    }, "getEntries"),
    clear: /* @__PURE__ */ __name(function clear() {
      entry = void 0;
    }, "clear")
  };
}
__name(createSingletonCache, "createSingletonCache");
function createLruCache(maxSize, equals) {
  var entries = [];
  function get(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  __name(get, "get");
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  __name(put, "put");
  function getEntries() {
    return entries;
  }
  __name(getEntries, "getEntries");
  function clear() {
    entries = [];
  }
  __name(clear, "clear");
  return {
    get,
    put,
    getEntries,
    clear
  };
}
__name(createLruCache, "createLruCache");
var defaultEqualityCheck = /* @__PURE__ */ __name(function defaultEqualityCheck2(a2, b2) {
  return a2 === b2;
}, "defaultEqualityCheck");
function createCacheKeyComparator(equalityCheck) {
  return /* @__PURE__ */ __name(function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    var length = prev.length;
    for (var i2 = 0; i2 < length; i2++) {
      if (!equalityCheck(prev[i2], next[i2])) {
        return false;
      }
    }
    return true;
  }, "areArgumentsShallowlyEqual");
}
__name(createCacheKeyComparator, "createCacheKeyComparator");
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache2 = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache2.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache2.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache2.put(arguments, value);
    }
    return value;
  }
  __name(memoized, "memoized");
  memoized.clearCache = function() {
    return cache2.clear();
  };
  return memoized;
}
__name(defaultMemoize, "defaultMemoize");
function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
__name(getDependencies, "getDependencies");
function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector2 = /* @__PURE__ */ __name(function createSelector3() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [/* @__PURE__ */ __name(function recomputationWrapper() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }, "recomputationWrapper")].concat(finalMemoizeOptions));
    var selector = memoize(/* @__PURE__ */ __name(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;
      for (var i2 = 0; i2 < length; i2++) {
        params.push(dependencies[i2].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    }, "dependenciesChecker"));
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: /* @__PURE__ */ __name(function lastResult() {
        return _lastResult;
      }, "lastResult"),
      recomputations: /* @__PURE__ */ __name(function recomputations() {
        return _recomputations;
      }, "recomputations"),
      resetRecomputations: /* @__PURE__ */ __name(function resetRecomputations() {
        return _recomputations = 0;
      }, "resetRecomputations")
    });
    return selector;
  }, "createSelector");
  return createSelector2;
}
__name(createSelectorCreator, "createSelectorCreator");
var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);
function createThunkMiddleware(extraArgument) {
  var middleware = /* @__PURE__ */ __name(function middleware2(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next(action);
      };
    };
  }, "middleware");
  return middleware;
}
__name(createThunkMiddleware, "createThunkMiddleware");
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
const thunkMiddleware = thunk;
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = /* @__PURE__ */ __name(function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  }, "extendStatics");
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    __name(__, "__");
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator$1 = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
};
var __spreadArray$2 = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = /* @__PURE__ */ __name(function(obj, key, value) {
  return key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
}, "__defNormalProp$2");
var __spreadValues$2 = /* @__PURE__ */ __name(function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$2.call(b2, prop))
      __defNormalProp$2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$2)
    for (var _i = 0, _c = __getOwnPropSymbols$2(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum$2.call(b2, prop))
        __defNormalProp$2(a2, prop, b2[prop]);
    }
  return a2;
}, "__spreadValues$2");
var __spreadProps$2 = /* @__PURE__ */ __name(function(a2, b2) {
  return __defProps$2(a2, __getOwnPropDescs$2(b2));
}, "__spreadProps$2");
var __async$1 = /* @__PURE__ */ __name(function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = /* @__PURE__ */ __name(function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }, "fulfilled");
    var rejected = /* @__PURE__ */ __name(function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    }, "rejected");
    var step = /* @__PURE__ */ __name(function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    }, "step");
    step((generator = generator.apply(__this, __arguments)).next());
  });
}, "__async$1");
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject$1(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
__name(isPlainObject$1, "isPlainObject$1");
var MiddlewareArray = function(_super) {
  __extends(MiddlewareArray2, _super);
  function MiddlewareArray2() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var _this = _super.apply(this, args) || this;
    Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
    return _this;
  }
  __name(MiddlewareArray2, "MiddlewareArray");
  Object.defineProperty(MiddlewareArray2, Symbol.species, {
    get: function() {
      return MiddlewareArray2;
    },
    enumerable: false,
    configurable: true
  });
  MiddlewareArray2.prototype.concat = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    return _super.prototype.concat.apply(this, arr);
  };
  MiddlewareArray2.prototype.prepend = function() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }
    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray$2([void 0], arr[0].concat(this))))();
    }
    return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray$2([void 0], arr.concat(this))))();
  };
  return MiddlewareArray2;
}(Array);
function freezeDraftable(val) {
  return t$3(val) ? fn(val, function() {
  }) : val;
}
__name(freezeDraftable, "freezeDraftable");
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
__name(isBoolean, "isBoolean");
function curryGetDefaultMiddleware() {
  return /* @__PURE__ */ __name(function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  }, "curriedGetDefaultMiddleware");
}
__name(curryGetDefaultMiddleware, "curryGetDefaultMiddleware");
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk2 = _c === void 0 ? true : _c;
  options.immutableCheck;
  options.serializableCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk2) {
    if (isBoolean(thunk2)) {
      middlewareArray.push(thunkMiddleware);
    } else {
      middlewareArray.push(thunkMiddleware.withExtraArgument(thunk2.extraArgument));
    }
  }
  return middlewareArray;
}
__name(getDefaultMiddleware, "getDefaultMiddleware");
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e = _c.middleware, middleware = _e === void 0 ? curriedGetDefaultMiddleware() : _e, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues$2({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var storeEnhancers = [middlewareEnhancer];
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray$2([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
__name(configureStore, "configureStore");
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues$2(__spreadValues$2({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  __name(actionCreator, "actionCreator");
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
__name(createAction, "createAction");
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
__name(executeReducerBuilderCallback, "executeReducerBuilderCallback");
function isStateFunction(x2) {
  return typeof x2 === "function";
}
__name(isStateFunction, "isStateFunction");
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = /* @__PURE__ */ __name(function() {
      return freezeDraftable(initialState2());
    }, "getInitialState");
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState2);
    getInitialState = /* @__PURE__ */ __name(function() {
      return frozenInitialState_1;
    }, "getInitialState");
  }
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray$2([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r$2(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!t$3(previousState)) {
          var result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return fn(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  __name(reducer, "reducer");
  reducer.getInitialState = getInitialState;
  return reducer;
}
__name(createReducer, "createReducer");
function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}
__name(getType2, "getType2");
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  if (typeof process !== "undefined" && false) {
    if (options.initialState === void 0) {
      console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    }
  }
  var initialState2 = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e = _c[1], actionMatchers = _e === void 0 ? [] : _e, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues$2(__spreadValues$2({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, function(builder) {
      for (var key in finalCaseReducers) {
        builder.addCase(key, finalCaseReducers[key]);
      }
      for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
        var m2 = actionMatchers_1[_i];
        builder.addMatcher(m2.matcher, m2.reducer);
      }
      if (defaultCaseReducer) {
        builder.addDefaultCase(defaultCaseReducer);
      }
    });
  }
  __name(buildReducer, "buildReducer");
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
__name(createSlice, "createSlice");
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = /* @__PURE__ */ __name(function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id = "";
  var i2 = size;
  while (i2--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }
  return id;
}, "nanoid");
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = function() {
  function RejectWithValue2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  __name(RejectWithValue2, "RejectWithValue");
  return RejectWithValue2;
}();
var FulfillWithMeta = function() {
  function FulfillWithMeta2(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }
  __name(FulfillWithMeta2, "FulfillWithMeta");
  return FulfillWithMeta2;
}();
var miniSerializeError = /* @__PURE__ */ __name(function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
}, "miniSerializeError");
var createAsyncThunk = function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error == null ? void 0 : error.name) === "AbortError",
          condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
      };
    });
    var AC = typeof AbortController !== "undefined" ? AbortController : function() {
      function class_1() {
        this.signal = {
          aborted: false,
          addEventListener: function() {
          },
          dispatchEvent: function() {
            return false;
          },
          onabort: function() {
          },
          removeEventListener: function() {
          },
          reason: void 0,
          throwIfAborted: function() {
          }
        };
      }
      __name(class_1, "class_1");
      class_1.prototype.abort = function() {
      };
      return class_1;
    }();
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        __name(abort, "abort");
        var promise2 = function() {
          return __async$1(this, null, function() {
            var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator$1(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 4, , 5]);
                  conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                  if (!isThenable(conditionResult))
                    return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c.sent();
                  _c.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    __name(actionCreator, "actionCreator");
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  __name(createAsyncThunk2, "createAsyncThunk2");
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
}();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
__name(unwrapResult, "unwrapResult");
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
__name(isThenable, "isThenable");
var hasMatchFunction = /* @__PURE__ */ __name(function(v2) {
  return v2 && typeof v2.match === "function";
}, "hasMatchFunction");
var matches = /* @__PURE__ */ __name(function(matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
}, "matches");
function isAnyOf() {
  var matchers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }
  return function(action) {
    return matchers.some(function(matcher) {
      return matches(matcher, action);
    });
  };
}
__name(isAnyOf, "isAnyOf");
function isAllOf() {
  var matchers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }
  return function(action) {
    return matchers.every(function(matcher) {
      return matches(matcher, action);
    });
  };
}
__name(isAllOf, "isAllOf");
function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta)
    return false;
  var hasValidRequestId = typeof action.meta.requestId === "string";
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}
__name(hasExpectedRequestMetadata, "hasExpectedRequestMetadata");
function isAsyncThunkArray(a2) {
  return typeof a2[0] === "function" && "pending" in a2[0] && "fulfilled" in a2[0] && "rejected" in a2[0];
}
__name(isAsyncThunkArray, "isAsyncThunkArray");
function isPending() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["pending"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
__name(isPending, "isPending");
function isRejected() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["rejected"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
__name(isRejected, "isRejected");
function isRejectedWithValue() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  var hasFlag = /* @__PURE__ */ __name(function(action) {
    return action && action.meta && action.meta.rejectedWithValue;
  }, "hasFlag");
  if (asyncThunks.length === 0) {
    return function(action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }
  return function(action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}
__name(isRejectedWithValue, "isRejectedWithValue");
function isFulfilled() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["fulfilled"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
__name(isFulfilled, "isFulfilled");
function isAsyncThunkAction() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = [];
    for (var _i2 = 0, asyncThunks_1 = asyncThunks; _i2 < asyncThunks_1.length; _i2++) {
      var asyncThunk = asyncThunks_1[_i2];
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
__name(isAsyncThunkAction, "isAsyncThunkAction");
var alm = "listenerMiddleware";
createAction(alm + "/add");
createAction(alm + "/removeAll");
createAction(alm + "/remove");
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = /* @__PURE__ */ __name(function() {
  return function(payload) {
    var _c;
    return {
      payload,
      meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    };
  };
}, "prepareAutoBatched");
var promise$1;
typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb) {
  return (promise$1 || (promise$1 = Promise.resolve())).then(cb).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
F();
var __generator = globalThis && globalThis.__generator || function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1)
      throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f2)
      throw new TypeError("Generator is already executing.");
    while (_2)
      try {
        if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done)
          return t2;
        if (y2 = 0, t2)
          op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
            break;
          case 4:
            _2.label++;
            return { value: op[1], done: false };
          case 5:
            _2.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _2.ops.pop();
            _2.trys.pop();
            continue;
          default:
            if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _2 = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _2.label = op[1];
              break;
            }
            if (op[0] === 6 && _2.label < t2[1]) {
              _2.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _2.label < t2[2]) {
              _2.label = t2[2];
              _2.ops.push(op);
              break;
            }
            if (t2[2])
              _2.ops.pop();
            _2.trys.pop();
            continue;
        }
        op = body.call(thisArg, _2);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f2 = t2 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
};
var __spreadArray$1 = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = /* @__PURE__ */ __name(function(obj, key, value) {
  return key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
}, "__defNormalProp$1");
var __spreadValues$1 = /* @__PURE__ */ __name(function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$1.call(b2, prop))
      __defNormalProp$1(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$1)
    for (var _j = 0, _k = __getOwnPropSymbols$1(b2); _j < _k.length; _j++) {
      var prop = _k[_j];
      if (__propIsEnum$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    }
  return a2;
}, "__spreadValues$1");
var __spreadProps$1 = /* @__PURE__ */ __name(function(a2, b2) {
  return __defProps$1(a2, __getOwnPropDescs$1(b2));
}, "__spreadProps$1");
var __objRest = /* @__PURE__ */ __name(function(source, exclude) {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var _j = 0, _k = __getOwnPropSymbols$1(source); _j < _k.length; _j++) {
      var prop = _k[_j];
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
}, "__objRest");
var __async = /* @__PURE__ */ __name(function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = /* @__PURE__ */ __name(function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }, "fulfilled");
    var rejected = /* @__PURE__ */ __name(function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    }, "rejected");
    var step = /* @__PURE__ */ __name(function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    }, "step");
    step((generator = generator.apply(__this, __arguments)).next());
  });
}, "__async");
var QueryStatus;
(function(QueryStatus2) {
  QueryStatus2["uninitialized"] = "uninitialized";
  QueryStatus2["pending"] = "pending";
  QueryStatus2["fulfilled"] = "fulfilled";
  QueryStatus2["rejected"] = "rejected";
})(QueryStatus || (QueryStatus = {}));
function getRequestStatusFlags(status) {
  return {
    status,
    isUninitialized: status === QueryStatus.uninitialized,
    isLoading: status === QueryStatus.pending,
    isSuccess: status === QueryStatus.fulfilled,
    isError: status === QueryStatus.rejected
  };
}
__name(getRequestStatusFlags, "getRequestStatusFlags");
function isAbsoluteUrl(url) {
  return new RegExp("(^|:)//").test(url);
}
__name(isAbsoluteUrl, "isAbsoluteUrl");
var withoutTrailingSlash = /* @__PURE__ */ __name(function(url) {
  return url.replace(/\/$/, "");
}, "withoutTrailingSlash");
var withoutLeadingSlash = /* @__PURE__ */ __name(function(url) {
  return url.replace(/^\//, "");
}, "withoutLeadingSlash");
function joinUrls(base, url) {
  if (!base) {
    return url;
  }
  if (!url) {
    return base;
  }
  if (isAbsoluteUrl(url)) {
    return url;
  }
  var delimiter = base.endsWith("/") || !url.startsWith("?") ? "/" : "";
  base = withoutTrailingSlash(base);
  url = withoutLeadingSlash(url);
  return "" + base + delimiter + url;
}
__name(joinUrls, "joinUrls");
var flatten = /* @__PURE__ */ __name(function(arr) {
  return [].concat.apply([], arr);
}, "flatten");
function isOnline() {
  return typeof navigator === "undefined" ? true : navigator.onLine === void 0 ? true : navigator.onLine;
}
__name(isOnline, "isOnline");
function isDocumentVisible() {
  if (typeof document === "undefined") {
    return true;
  }
  return document.visibilityState !== "hidden";
}
__name(isDocumentVisible, "isDocumentVisible");
var isPlainObject = isPlainObject$1;
function copyWithStructuralSharing(oldObj, newObj) {
  if (oldObj === newObj || !(isPlainObject(oldObj) && isPlainObject(newObj) || Array.isArray(oldObj) && Array.isArray(newObj))) {
    return newObj;
  }
  var newKeys = Object.keys(newObj);
  var oldKeys = Object.keys(oldObj);
  var isSameObject = newKeys.length === oldKeys.length;
  var mergeObj = Array.isArray(newObj) ? [] : {};
  for (var _j = 0, newKeys_1 = newKeys; _j < newKeys_1.length; _j++) {
    var key = newKeys_1[_j];
    mergeObj[key] = copyWithStructuralSharing(oldObj[key], newObj[key]);
    if (isSameObject)
      isSameObject = oldObj[key] === mergeObj[key];
  }
  return isSameObject ? oldObj : mergeObj;
}
__name(copyWithStructuralSharing, "copyWithStructuralSharing");
var defaultFetchFn = /* @__PURE__ */ __name(function() {
  var args = [];
  for (var _j = 0; _j < arguments.length; _j++) {
    args[_j] = arguments[_j];
  }
  return fetch.apply(void 0, args);
}, "defaultFetchFn");
var defaultValidateStatus = /* @__PURE__ */ __name(function(response) {
  return response.status >= 200 && response.status <= 299;
}, "defaultValidateStatus");
var defaultIsJsonContentType = /* @__PURE__ */ __name(function(headers) {
  return /ion\/(vnd\.api\+)?json/.test(headers.get("content-type") || "");
}, "defaultIsJsonContentType");
function stripUndefined(obj) {
  if (!isPlainObject$1(obj)) {
    return obj;
  }
  var copy = __spreadValues$1({}, obj);
  for (var _j = 0, _k = Object.entries(copy); _j < _k.length; _j++) {
    var _l = _k[_j], k2 = _l[0], v2 = _l[1];
    if (v2 === void 0)
      delete copy[k2];
  }
  return copy;
}
__name(stripUndefined, "stripUndefined");
function fetchBaseQuery(_a) {
  var _this = this;
  if (_a === void 0) {
    _a = {};
  }
  var _b = _a, baseUrl = _b.baseUrl, _j = _b.prepareHeaders, prepareHeaders = _j === void 0 ? function(x2) {
    return x2;
  } : _j, _k = _b.fetchFn, fetchFn = _k === void 0 ? defaultFetchFn : _k, paramsSerializer = _b.paramsSerializer, _l = _b.isJsonContentType, isJsonContentType = _l === void 0 ? defaultIsJsonContentType : _l, _m = _b.jsonContentType, jsonContentType = _m === void 0 ? "application/json" : _m, jsonReplacer = _b.jsonReplacer, defaultTimeout = _b.timeout, globalValidateStatus = _b.validateStatus, baseFetchOptions = __objRest(_b, [
    "baseUrl",
    "prepareHeaders",
    "fetchFn",
    "paramsSerializer",
    "isJsonContentType",
    "jsonContentType",
    "jsonReplacer",
    "timeout",
    "validateStatus"
  ]);
  if (typeof fetch === "undefined" && fetchFn === defaultFetchFn) {
    console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.");
  }
  return function(arg, api2) {
    return __async(_this, null, function() {
      var signal, getState, extra, endpoint, forced, type, meta, _a2, url, _j2, headers, _k2, params, _l2, responseHandler, _m2, validateStatus, _o, timeout, rest, config, _p, isJsonifiable, divider, query, request, requestClone, response, timedOut, timeoutId, e_1, responseClone, resultData, responseText, handleResponseError_1, e_2;
      return __generator(this, function(_q) {
        switch (_q.label) {
          case 0:
            signal = api2.signal, getState = api2.getState, extra = api2.extra, endpoint = api2.endpoint, forced = api2.forced, type = api2.type;
            _a2 = typeof arg == "string" ? { url: arg } : arg, url = _a2.url, _j2 = _a2.headers, headers = _j2 === void 0 ? new Headers(baseFetchOptions.headers) : _j2, _k2 = _a2.params, params = _k2 === void 0 ? void 0 : _k2, _l2 = _a2.responseHandler, responseHandler = _l2 === void 0 ? "json" : _l2, _m2 = _a2.validateStatus, validateStatus = _m2 === void 0 ? globalValidateStatus != null ? globalValidateStatus : defaultValidateStatus : _m2, _o = _a2.timeout, timeout = _o === void 0 ? defaultTimeout : _o, rest = __objRest(_a2, [
              "url",
              "headers",
              "params",
              "responseHandler",
              "validateStatus",
              "timeout"
            ]);
            config = __spreadValues$1(__spreadProps$1(__spreadValues$1({}, baseFetchOptions), {
              signal
            }), rest);
            headers = new Headers(stripUndefined(headers));
            _p = config;
            return [4, prepareHeaders(headers, {
              getState,
              extra,
              endpoint,
              forced,
              type
            })];
          case 1:
            _p.headers = _q.sent() || headers;
            isJsonifiable = /* @__PURE__ */ __name(function(body) {
              return typeof body === "object" && (isPlainObject$1(body) || Array.isArray(body) || typeof body.toJSON === "function");
            }, "isJsonifiable");
            if (!config.headers.has("content-type") && isJsonifiable(config.body)) {
              config.headers.set("content-type", jsonContentType);
            }
            if (isJsonifiable(config.body) && isJsonContentType(config.headers)) {
              config.body = JSON.stringify(config.body, jsonReplacer);
            }
            if (params) {
              divider = ~url.indexOf("?") ? "&" : "?";
              query = paramsSerializer ? paramsSerializer(params) : new URLSearchParams(stripUndefined(params));
              url += divider + query;
            }
            url = joinUrls(baseUrl, url);
            request = new Request(url, config);
            requestClone = request.clone();
            meta = { request: requestClone };
            timedOut = false, timeoutId = timeout && setTimeout(function() {
              timedOut = true;
              api2.abort();
            }, timeout);
            _q.label = 2;
          case 2:
            _q.trys.push([2, 4, 5, 6]);
            return [4, fetchFn(request)];
          case 3:
            response = _q.sent();
            return [3, 6];
          case 4:
            e_1 = _q.sent();
            return [2, {
              error: {
                status: timedOut ? "TIMEOUT_ERROR" : "FETCH_ERROR",
                error: String(e_1)
              },
              meta
            }];
          case 5:
            if (timeoutId)
              clearTimeout(timeoutId);
            return [7];
          case 6:
            responseClone = response.clone();
            meta.response = responseClone;
            responseText = "";
            _q.label = 7;
          case 7:
            _q.trys.push([7, 9, , 10]);
            return [4, Promise.all([
              handleResponse(response, responseHandler).then(function(r2) {
                return resultData = r2;
              }, function(e2) {
                return handleResponseError_1 = e2;
              }),
              responseClone.text().then(function(r2) {
                return responseText = r2;
              }, function() {
              })
            ])];
          case 8:
            _q.sent();
            if (handleResponseError_1)
              throw handleResponseError_1;
            return [3, 10];
          case 9:
            e_2 = _q.sent();
            return [2, {
              error: {
                status: "PARSING_ERROR",
                originalStatus: response.status,
                data: responseText,
                error: String(e_2)
              },
              meta
            }];
          case 10:
            return [2, validateStatus(response, resultData) ? {
              data: resultData,
              meta
            } : {
              error: {
                status: response.status,
                data: resultData
              },
              meta
            }];
        }
      });
    });
  };
  function handleResponse(response, responseHandler) {
    return __async(this, null, function() {
      var text;
      return __generator(this, function(_j2) {
        switch (_j2.label) {
          case 0:
            if (typeof responseHandler === "function") {
              return [2, responseHandler(response)];
            }
            if (responseHandler === "content-type") {
              responseHandler = isJsonContentType(response.headers) ? "json" : "text";
            }
            if (!(responseHandler === "json"))
              return [3, 2];
            return [4, response.text()];
          case 1:
            text = _j2.sent();
            return [2, text.length ? JSON.parse(text) : null];
          case 2:
            return [2, response.text()];
        }
      });
    });
  }
  __name(handleResponse, "handleResponse");
}
__name(fetchBaseQuery, "fetchBaseQuery");
var HandledError = function() {
  function HandledError2(value, meta) {
    if (meta === void 0) {
      meta = void 0;
    }
    this.value = value;
    this.meta = meta;
  }
  __name(HandledError2, "HandledError");
  return HandledError2;
}();
var onFocus = /* @__PURE__ */ createAction("__rtkq/focused");
var onFocusLost = /* @__PURE__ */ createAction("__rtkq/unfocused");
var onOnline = /* @__PURE__ */ createAction("__rtkq/online");
var onOffline = /* @__PURE__ */ createAction("__rtkq/offline");
var DefinitionType$1;
(function(DefinitionType2) {
  DefinitionType2["query"] = "query";
  DefinitionType2["mutation"] = "mutation";
})(DefinitionType$1 || (DefinitionType$1 = {}));
function isQueryDefinition$1(e2) {
  return e2.type === DefinitionType$1.query;
}
__name(isQueryDefinition$1, "isQueryDefinition$1");
function isMutationDefinition$1(e2) {
  return e2.type === DefinitionType$1.mutation;
}
__name(isMutationDefinition$1, "isMutationDefinition$1");
function calculateProvidedBy(description, result, error, queryArg, meta, assertTagTypes) {
  if (isFunction(description)) {
    return description(result, error, queryArg, meta).map(expandTagDescription).map(assertTagTypes);
  }
  if (Array.isArray(description)) {
    return description.map(expandTagDescription).map(assertTagTypes);
  }
  return [];
}
__name(calculateProvidedBy, "calculateProvidedBy");
function isFunction(t2) {
  return typeof t2 === "function";
}
__name(isFunction, "isFunction");
function expandTagDescription(description) {
  return typeof description === "string" ? { type: description } : description;
}
__name(expandTagDescription, "expandTagDescription");
function isNotNullish(v2) {
  return v2 != null;
}
__name(isNotNullish, "isNotNullish");
var forceQueryFnSymbol = Symbol("forceQueryFn");
var isUpsertQuery = /* @__PURE__ */ __name(function(arg) {
  return typeof arg[forceQueryFnSymbol] === "function";
}, "isUpsertQuery");
function buildInitiate(_j) {
  var serializeQueryArgs = _j.serializeQueryArgs, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk, api2 = _j.api, context = _j.context;
  var runningQueries = /* @__PURE__ */ new Map();
  var runningMutations = /* @__PURE__ */ new Map();
  var _k = api2.internalActions, unsubscribeQueryResult = _k.unsubscribeQueryResult, removeMutationResult = _k.removeMutationResult, updateSubscriptionOptions = _k.updateSubscriptionOptions;
  return {
    buildInitiateQuery,
    buildInitiateMutation,
    getRunningQueryThunk,
    getRunningMutationThunk,
    getRunningQueriesThunk,
    getRunningMutationsThunk,
    getRunningOperationPromises,
    removalWarning
  };
  function removalWarning() {
    throw new Error("This method had to be removed due to a conceptual bug in RTK.\n       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.\n       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.");
  }
  __name(removalWarning, "removalWarning");
  function getRunningOperationPromises() {
    if (typeof process !== "undefined" && false) {
      removalWarning();
    } else {
      var extract = /* @__PURE__ */ __name(function(v2) {
        return Array.from(v2.values()).flatMap(function(queriesForStore) {
          return queriesForStore ? Object.values(queriesForStore) : [];
        });
      }, "extract");
      return __spreadArray$1(__spreadArray$1([], extract(runningQueries)), extract(runningMutations)).filter(isNotNullish);
    }
  }
  __name(getRunningOperationPromises, "getRunningOperationPromises");
  function getRunningQueryThunk(endpointName, queryArgs) {
    return function(dispatch) {
      var _a;
      var endpointDefinition = context.endpointDefinitions[endpointName];
      var queryCacheKey = serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      });
      return (_a = runningQueries.get(dispatch)) == null ? void 0 : _a[queryCacheKey];
    };
  }
  __name(getRunningQueryThunk, "getRunningQueryThunk");
  function getRunningMutationThunk(_endpointName, fixedCacheKeyOrRequestId) {
    return function(dispatch) {
      var _a;
      return (_a = runningMutations.get(dispatch)) == null ? void 0 : _a[fixedCacheKeyOrRequestId];
    };
  }
  __name(getRunningMutationThunk, "getRunningMutationThunk");
  function getRunningQueriesThunk() {
    return function(dispatch) {
      return Object.values(runningQueries.get(dispatch) || {}).filter(isNotNullish);
    };
  }
  __name(getRunningQueriesThunk, "getRunningQueriesThunk");
  function getRunningMutationsThunk() {
    return function(dispatch) {
      return Object.values(runningMutations.get(dispatch) || {}).filter(isNotNullish);
    };
  }
  __name(getRunningMutationsThunk, "getRunningMutationsThunk");
  function buildInitiateQuery(endpointName, endpointDefinition) {
    var queryAction = /* @__PURE__ */ __name(function(arg, _j2) {
      var _k2 = _j2 === void 0 ? {} : _j2, _l = _k2.subscribe, subscribe = _l === void 0 ? true : _l, forceRefetch = _k2.forceRefetch, subscriptionOptions = _k2.subscriptionOptions, _m = forceQueryFnSymbol, forceQueryFn = _k2[_m];
      return function(dispatch, getState) {
        var _j3;
        var _a;
        var queryCacheKey = serializeQueryArgs({
          queryArgs: arg,
          endpointDefinition,
          endpointName
        });
        var thunk2 = queryThunk((_j3 = {
          type: "query",
          subscribe,
          forceRefetch,
          subscriptionOptions,
          endpointName,
          originalArgs: arg,
          queryCacheKey
        }, _j3[forceQueryFnSymbol] = forceQueryFn, _j3));
        var selector = api2.endpoints[endpointName].select(arg);
        var thunkResult = dispatch(thunk2);
        var stateAfter = selector(getState());
        var requestId = thunkResult.requestId, abort = thunkResult.abort;
        var skippedSynchronously = stateAfter.requestId !== requestId;
        var runningQuery = (_a = runningQueries.get(dispatch)) == null ? void 0 : _a[queryCacheKey];
        var selectFromState = /* @__PURE__ */ __name(function() {
          return selector(getState());
        }, "selectFromState");
        var statePromise = Object.assign(forceQueryFn ? thunkResult.then(selectFromState) : skippedSynchronously && !runningQuery ? Promise.resolve(stateAfter) : Promise.all([runningQuery, thunkResult]).then(selectFromState), {
          arg,
          requestId,
          subscriptionOptions,
          queryCacheKey,
          abort,
          unwrap: function() {
            return __async(this, null, function() {
              var result;
              return __generator(this, function(_j4) {
                switch (_j4.label) {
                  case 0:
                    return [4, statePromise];
                  case 1:
                    result = _j4.sent();
                    if (result.isError) {
                      throw result.error;
                    }
                    return [2, result.data];
                }
              });
            });
          },
          refetch: function() {
            return dispatch(queryAction(arg, { subscribe: false, forceRefetch: true }));
          },
          unsubscribe: function() {
            if (subscribe)
              dispatch(unsubscribeQueryResult({
                queryCacheKey,
                requestId
              }));
          },
          updateSubscriptionOptions: function(options) {
            statePromise.subscriptionOptions = options;
            dispatch(updateSubscriptionOptions({
              endpointName,
              requestId,
              queryCacheKey,
              options
            }));
          }
        });
        if (!runningQuery && !skippedSynchronously && !forceQueryFn) {
          var running_1 = runningQueries.get(dispatch) || {};
          running_1[queryCacheKey] = statePromise;
          runningQueries.set(dispatch, running_1);
          statePromise.then(function() {
            delete running_1[queryCacheKey];
            if (!Object.keys(running_1).length) {
              runningQueries.delete(dispatch);
            }
          });
        }
        return statePromise;
      };
    }, "queryAction");
    return queryAction;
  }
  __name(buildInitiateQuery, "buildInitiateQuery");
  function buildInitiateMutation(endpointName) {
    return function(arg, _j2) {
      var _k2 = _j2 === void 0 ? {} : _j2, _l = _k2.track, track = _l === void 0 ? true : _l, fixedCacheKey = _k2.fixedCacheKey;
      return function(dispatch, getState) {
        var thunk2 = mutationThunk({
          type: "mutation",
          endpointName,
          originalArgs: arg,
          track,
          fixedCacheKey
        });
        var thunkResult = dispatch(thunk2);
        var requestId = thunkResult.requestId, abort = thunkResult.abort, unwrap = thunkResult.unwrap;
        var returnValuePromise = thunkResult.unwrap().then(function(data) {
          return { data };
        }).catch(function(error) {
          return { error };
        });
        var reset = /* @__PURE__ */ __name(function() {
          dispatch(removeMutationResult({ requestId, fixedCacheKey }));
        }, "reset");
        var ret = Object.assign(returnValuePromise, {
          arg: thunkResult.arg,
          requestId,
          abort,
          unwrap,
          unsubscribe: reset,
          reset
        });
        var running = runningMutations.get(dispatch) || {};
        runningMutations.set(dispatch, running);
        running[requestId] = ret;
        ret.then(function() {
          delete running[requestId];
          if (!Object.keys(running).length) {
            runningMutations.delete(dispatch);
          }
        });
        if (fixedCacheKey) {
          running[fixedCacheKey] = ret;
          ret.then(function() {
            if (running[fixedCacheKey] === ret) {
              delete running[fixedCacheKey];
              if (!Object.keys(running).length) {
                runningMutations.delete(dispatch);
              }
            }
          });
        }
        return ret;
      };
    };
  }
  __name(buildInitiateMutation, "buildInitiateMutation");
}
__name(buildInitiate, "buildInitiate");
function defaultTransformResponse(baseQueryReturnValue) {
  return baseQueryReturnValue;
}
__name(defaultTransformResponse, "defaultTransformResponse");
function buildThunks(_j) {
  var _this = this;
  var reducerPath = _j.reducerPath, baseQuery = _j.baseQuery, endpointDefinitions = _j.context.endpointDefinitions, serializeQueryArgs = _j.serializeQueryArgs, api2 = _j.api;
  var patchQueryData = /* @__PURE__ */ __name(function(endpointName, args, patches) {
    return function(dispatch) {
      var endpointDefinition = endpointDefinitions[endpointName];
      dispatch(api2.internalActions.queryResultPatched({
        queryCacheKey: serializeQueryArgs({
          queryArgs: args,
          endpointDefinition,
          endpointName
        }),
        patches
      }));
    };
  }, "patchQueryData");
  var updateQueryData = /* @__PURE__ */ __name(function(endpointName, args, updateRecipe) {
    return function(dispatch, getState) {
      var _j2, _k;
      var currentState = api2.endpoints[endpointName].select(args)(getState());
      var ret = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return dispatch(api2.util.patchQueryData(endpointName, args, ret.inversePatches));
        }
      };
      if (currentState.status === QueryStatus.uninitialized) {
        return ret;
      }
      if ("data" in currentState) {
        if (t$3(currentState.data)) {
          var _l = cn(currentState.data, updateRecipe), patches = _l[1], inversePatches = _l[2];
          (_j2 = ret.patches).push.apply(_j2, patches);
          (_k = ret.inversePatches).push.apply(_k, inversePatches);
        } else {
          var value = updateRecipe(currentState.data);
          ret.patches.push({ op: "replace", path: [], value });
          ret.inversePatches.push({
            op: "replace",
            path: [],
            value: currentState.data
          });
        }
      }
      dispatch(api2.util.patchQueryData(endpointName, args, ret.patches));
      return ret;
    };
  }, "updateQueryData");
  var upsertQueryData = /* @__PURE__ */ __name(function(endpointName, args, value) {
    return function(dispatch) {
      var _j2;
      return dispatch(api2.endpoints[endpointName].initiate(args, (_j2 = {
        subscribe: false,
        forceRefetch: true
      }, _j2[forceQueryFnSymbol] = function() {
        return {
          data: value
        };
      }, _j2)));
    };
  }, "upsertQueryData");
  var executeEndpoint = /* @__PURE__ */ __name(function(_0, _1) {
    return __async(_this, [_0, _1], function(arg, _j2) {
      var endpointDefinition, transformResponse, result, baseQueryApi_1, forceQueryFn, what, err, _k, _l, key, _m, error_1, catchedError, transformErrorResponse, _o, e_4;
      var _p, _q;
      var signal = _j2.signal, abort = _j2.abort, rejectWithValue = _j2.rejectWithValue, fulfillWithValue = _j2.fulfillWithValue, dispatch = _j2.dispatch, getState = _j2.getState, extra = _j2.extra;
      return __generator(this, function(_r) {
        switch (_r.label) {
          case 0:
            endpointDefinition = endpointDefinitions[arg.endpointName];
            _r.label = 1;
          case 1:
            _r.trys.push([1, 8, , 13]);
            transformResponse = defaultTransformResponse;
            result = void 0;
            baseQueryApi_1 = {
              signal,
              abort,
              dispatch,
              getState,
              extra,
              endpoint: arg.endpointName,
              type: arg.type,
              forced: arg.type === "query" ? isForcedQuery(arg, getState()) : void 0
            };
            forceQueryFn = arg.type === "query" ? arg[forceQueryFnSymbol] : void 0;
            if (!forceQueryFn)
              return [3, 2];
            result = forceQueryFn();
            return [3, 6];
          case 2:
            if (!endpointDefinition.query)
              return [3, 4];
            return [4, baseQuery(endpointDefinition.query(arg.originalArgs), baseQueryApi_1, endpointDefinition.extraOptions)];
          case 3:
            result = _r.sent();
            if (endpointDefinition.transformResponse) {
              transformResponse = endpointDefinition.transformResponse;
            }
            return [3, 6];
          case 4:
            return [4, endpointDefinition.queryFn(arg.originalArgs, baseQueryApi_1, endpointDefinition.extraOptions, function(arg2) {
              return baseQuery(arg2, baseQueryApi_1, endpointDefinition.extraOptions);
            })];
          case 5:
            result = _r.sent();
            _r.label = 6;
          case 6:
            if (typeof process !== "undefined" && false) {
              what = endpointDefinition.query ? "`baseQuery`" : "`queryFn`";
              err = void 0;
              if (!result) {
                err = what + " did not return anything.";
              } else if (typeof result !== "object") {
                err = what + " did not return an object.";
              } else if (result.error && result.data) {
                err = what + " returned an object containing both `error` and `result`.";
              } else if (result.error === void 0 && result.data === void 0) {
                err = what + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              } else {
                for (_k = 0, _l = Object.keys(result); _k < _l.length; _k++) {
                  key = _l[_k];
                  if (key !== "error" && key !== "data" && key !== "meta") {
                    err = "The object returned by " + what + " has the unknown property " + key + ".";
                    break;
                  }
                }
              }
              if (err) {
                console.error("Error encountered handling the endpoint " + arg.endpointName + ".\n              " + err + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", result);
              }
            }
            if (result.error)
              throw new HandledError(result.error, result.meta);
            _m = fulfillWithValue;
            return [4, transformResponse(result.data, result.meta, arg.originalArgs)];
          case 7:
            return [2, _m.apply(void 0, [_r.sent(), (_p = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: result.meta
            }, _p[SHOULD_AUTOBATCH] = true, _p)])];
          case 8:
            error_1 = _r.sent();
            catchedError = error_1;
            if (!(catchedError instanceof HandledError))
              return [3, 12];
            transformErrorResponse = defaultTransformResponse;
            if (endpointDefinition.query && endpointDefinition.transformErrorResponse) {
              transformErrorResponse = endpointDefinition.transformErrorResponse;
            }
            _r.label = 9;
          case 9:
            _r.trys.push([9, 11, , 12]);
            _o = rejectWithValue;
            return [4, transformErrorResponse(catchedError.value, catchedError.meta, arg.originalArgs)];
          case 10:
            return [2, _o.apply(void 0, [_r.sent(), (_q = { baseQueryMeta: catchedError.meta }, _q[SHOULD_AUTOBATCH] = true, _q)])];
          case 11:
            e_4 = _r.sent();
            catchedError = e_4;
            return [3, 12];
          case 12:
            if (typeof process !== "undefined" && false) {
              console.error('An unhandled error occurred processing a request for the endpoint "' + arg.endpointName + '".\nIn the case of an unhandled error, no tags will be "provided" or "invalidated".', catchedError);
            } else {
              console.error(catchedError);
            }
            throw catchedError;
          case 13:
            return [2];
        }
      });
    });
  }, "executeEndpoint");
  function isForcedQuery(arg, state) {
    var _a, _b, _c, _d;
    var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[arg.queryCacheKey];
    var baseFetchOnMountOrArgChange = (_c = state[reducerPath]) == null ? void 0 : _c.config.refetchOnMountOrArgChange;
    var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
    var refetchVal = (_d = arg.forceRefetch) != null ? _d : arg.subscribe && baseFetchOnMountOrArgChange;
    if (refetchVal) {
      return refetchVal === true || (Number(new Date()) - Number(fulfilledVal)) / 1e3 >= refetchVal;
    }
    return false;
  }
  __name(isForcedQuery, "isForcedQuery");
  var queryThunk = createAsyncThunk(reducerPath + "/executeQuery", executeEndpoint, {
    getPendingMeta: function() {
      var _j2;
      return _j2 = { startedTimeStamp: Date.now() }, _j2[SHOULD_AUTOBATCH] = true, _j2;
    },
    condition: function(queryThunkArgs, _j2) {
      var getState = _j2.getState;
      var _a, _b, _c;
      var state = getState();
      var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[queryThunkArgs.queryCacheKey];
      var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
      var currentArg = queryThunkArgs.originalArgs;
      var previousArg = requestState == null ? void 0 : requestState.originalArgs;
      var endpointDefinition = endpointDefinitions[queryThunkArgs.endpointName];
      if (isUpsertQuery(queryThunkArgs)) {
        return true;
      }
      if ((requestState == null ? void 0 : requestState.status) === "pending") {
        return false;
      }
      if (isForcedQuery(queryThunkArgs, state)) {
        return true;
      }
      if (isQueryDefinition$1(endpointDefinition) && ((_c = endpointDefinition == null ? void 0 : endpointDefinition.forceRefetch) == null ? void 0 : _c.call(endpointDefinition, {
        currentArg,
        previousArg,
        endpointState: requestState,
        state
      }))) {
        return true;
      }
      if (fulfilledVal) {
        return false;
      }
      return true;
    },
    dispatchConditionRejection: true
  });
  var mutationThunk = createAsyncThunk(reducerPath + "/executeMutation", executeEndpoint, {
    getPendingMeta: function() {
      var _j2;
      return _j2 = { startedTimeStamp: Date.now() }, _j2[SHOULD_AUTOBATCH] = true, _j2;
    }
  });
  var hasTheForce = /* @__PURE__ */ __name(function(options) {
    return "force" in options;
  }, "hasTheForce");
  var hasMaxAge = /* @__PURE__ */ __name(function(options) {
    return "ifOlderThan" in options;
  }, "hasMaxAge");
  var prefetch = /* @__PURE__ */ __name(function(endpointName, arg, options) {
    return function(dispatch, getState) {
      var force = hasTheForce(options) && options.force;
      var maxAge = hasMaxAge(options) && options.ifOlderThan;
      var queryAction = /* @__PURE__ */ __name(function(force2) {
        if (force2 === void 0) {
          force2 = true;
        }
        return api2.endpoints[endpointName].initiate(arg, { forceRefetch: force2 });
      }, "queryAction");
      var latestStateValue = api2.endpoints[endpointName].select(arg)(getState());
      if (force) {
        dispatch(queryAction());
      } else if (maxAge) {
        var lastFulfilledTs = latestStateValue == null ? void 0 : latestStateValue.fulfilledTimeStamp;
        if (!lastFulfilledTs) {
          dispatch(queryAction());
          return;
        }
        var shouldRetrigger = (Number(new Date()) - Number(new Date(lastFulfilledTs))) / 1e3 >= maxAge;
        if (shouldRetrigger) {
          dispatch(queryAction());
        }
      } else {
        dispatch(queryAction(false));
      }
    };
  }, "prefetch");
  function matchesEndpoint(endpointName) {
    return function(action) {
      var _a, _b;
      return ((_b = (_a = action == null ? void 0 : action.meta) == null ? void 0 : _a.arg) == null ? void 0 : _b.endpointName) === endpointName;
    };
  }
  __name(matchesEndpoint, "matchesEndpoint");
  function buildMatchThunkActions(thunk2, endpointName) {
    return {
      matchPending: isAllOf(isPending(thunk2), matchesEndpoint(endpointName)),
      matchFulfilled: isAllOf(isFulfilled(thunk2), matchesEndpoint(endpointName)),
      matchRejected: isAllOf(isRejected(thunk2), matchesEndpoint(endpointName))
    };
  }
  __name(buildMatchThunkActions, "buildMatchThunkActions");
  return {
    queryThunk,
    mutationThunk,
    prefetch,
    updateQueryData,
    upsertQueryData,
    patchQueryData,
    buildMatchThunkActions
  };
}
__name(buildThunks, "buildThunks");
function calculateProvidedByThunk(action, type, endpointDefinitions, assertTagType) {
  return calculateProvidedBy(endpointDefinitions[action.meta.arg.endpointName][type], isFulfilled(action) ? action.payload : void 0, isRejectedWithValue(action) ? action.payload : void 0, action.meta.arg.originalArgs, "baseQueryMeta" in action.meta ? action.meta.baseQueryMeta : void 0, assertTagType);
}
__name(calculateProvidedByThunk, "calculateProvidedByThunk");
function updateQuerySubstateIfExists(state, queryCacheKey, update) {
  var substate = state[queryCacheKey];
  if (substate) {
    update(substate);
  }
}
__name(updateQuerySubstateIfExists, "updateQuerySubstateIfExists");
function getMutationCacheKey(id) {
  var _a;
  return (_a = "arg" in id ? id.arg.fixedCacheKey : id.fixedCacheKey) != null ? _a : id.requestId;
}
__name(getMutationCacheKey, "getMutationCacheKey");
function updateMutationSubstateIfExists(state, id, update) {
  var substate = state[getMutationCacheKey(id)];
  if (substate) {
    update(substate);
  }
}
__name(updateMutationSubstateIfExists, "updateMutationSubstateIfExists");
var initialState = {};
function buildSlice(_j) {
  var reducerPath = _j.reducerPath, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk, _k = _j.context, definitions = _k.endpointDefinitions, apiUid = _k.apiUid, extractRehydrationInfo = _k.extractRehydrationInfo, hasRehydrationInfo = _k.hasRehydrationInfo, assertTagType = _j.assertTagType, config = _j.config;
  var resetApiState = createAction(reducerPath + "/resetApiState");
  var querySlice = createSlice({
    name: reducerPath + "/queries",
    initialState,
    reducers: {
      removeQueryResult: {
        reducer: function(draft, _j2) {
          var queryCacheKey = _j2.payload.queryCacheKey;
          delete draft[queryCacheKey];
        },
        prepare: prepareAutoBatched()
      },
      queryResultPatched: function(draft, _j2) {
        var _k2 = _j2.payload, queryCacheKey = _k2.queryCacheKey, patches = _k2.patches;
        updateQuerySubstateIfExists(draft, queryCacheKey, function(substate) {
          substate.data = pn(substate.data, patches.concat());
        });
      }
    },
    extraReducers: function(builder) {
      builder.addCase(queryThunk.pending, function(draft, _j2) {
        var meta = _j2.meta, arg = _j2.meta.arg;
        var _a, _b;
        var upserting = isUpsertQuery(arg);
        if (arg.subscribe || upserting) {
          (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {
            status: QueryStatus.uninitialized,
            endpointName: arg.endpointName
          };
        }
        updateQuerySubstateIfExists(draft, arg.queryCacheKey, function(substate) {
          substate.status = QueryStatus.pending;
          substate.requestId = upserting && substate.requestId ? substate.requestId : meta.requestId;
          if (arg.originalArgs !== void 0) {
            substate.originalArgs = arg.originalArgs;
          }
          substate.startedTimeStamp = meta.startedTimeStamp;
        });
      }).addCase(queryThunk.fulfilled, function(draft, _j2) {
        var meta = _j2.meta, payload = _j2.payload;
        updateQuerySubstateIfExists(draft, meta.arg.queryCacheKey, function(substate) {
          var _a;
          if (substate.requestId !== meta.requestId && !isUpsertQuery(meta.arg))
            return;
          var merge = definitions[meta.arg.endpointName].merge;
          substate.status = QueryStatus.fulfilled;
          if (merge) {
            if (substate.data !== void 0) {
              var fulfilledTimeStamp_1 = meta.fulfilledTimeStamp, arg_1 = meta.arg, baseQueryMeta_1 = meta.baseQueryMeta, requestId_1 = meta.requestId;
              var newData = fn(substate.data, function(draftSubstateData) {
                return merge(draftSubstateData, payload, {
                  arg: arg_1.originalArgs,
                  baseQueryMeta: baseQueryMeta_1,
                  fulfilledTimeStamp: fulfilledTimeStamp_1,
                  requestId: requestId_1
                });
              });
              substate.data = newData;
            } else {
              substate.data = payload;
            }
          } else {
            substate.data = ((_a = definitions[meta.arg.endpointName].structuralSharing) != null ? _a : true) ? copyWithStructuralSharing(substate.data, payload) : payload;
          }
          delete substate.error;
          substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
        });
      }).addCase(queryThunk.rejected, function(draft, _j2) {
        var _k2 = _j2.meta, condition = _k2.condition, arg = _k2.arg, requestId = _k2.requestId, error = _j2.error, payload = _j2.payload;
        updateQuerySubstateIfExists(draft, arg.queryCacheKey, function(substate) {
          if (condition)
            ;
          else {
            if (substate.requestId !== requestId)
              return;
            substate.status = QueryStatus.rejected;
            substate.error = payload != null ? payload : error;
          }
        });
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var queries = extractRehydrationInfo(action).queries;
        for (var _j2 = 0, _k2 = Object.entries(queries); _j2 < _k2.length; _j2++) {
          var _l = _k2[_j2], key = _l[0], entry = _l[1];
          if ((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) {
            draft[key] = entry;
          }
        }
      });
    }
  });
  var mutationSlice = createSlice({
    name: reducerPath + "/mutations",
    initialState,
    reducers: {
      removeMutationResult: {
        reducer: function(draft, _j2) {
          var payload = _j2.payload;
          var cacheKey = getMutationCacheKey(payload);
          if (cacheKey in draft) {
            delete draft[cacheKey];
          }
        },
        prepare: prepareAutoBatched()
      }
    },
    extraReducers: function(builder) {
      builder.addCase(mutationThunk.pending, function(draft, _j2) {
        var meta = _j2.meta, _k2 = _j2.meta, requestId = _k2.requestId, arg = _k2.arg, startedTimeStamp = _k2.startedTimeStamp;
        if (!arg.track)
          return;
        draft[getMutationCacheKey(meta)] = {
          requestId,
          status: QueryStatus.pending,
          endpointName: arg.endpointName,
          startedTimeStamp
        };
      }).addCase(mutationThunk.fulfilled, function(draft, _j2) {
        var payload = _j2.payload, meta = _j2.meta;
        if (!meta.arg.track)
          return;
        updateMutationSubstateIfExists(draft, meta, function(substate) {
          if (substate.requestId !== meta.requestId)
            return;
          substate.status = QueryStatus.fulfilled;
          substate.data = payload;
          substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
        });
      }).addCase(mutationThunk.rejected, function(draft, _j2) {
        var payload = _j2.payload, error = _j2.error, meta = _j2.meta;
        if (!meta.arg.track)
          return;
        updateMutationSubstateIfExists(draft, meta, function(substate) {
          if (substate.requestId !== meta.requestId)
            return;
          substate.status = QueryStatus.rejected;
          substate.error = payload != null ? payload : error;
        });
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var mutations = extractRehydrationInfo(action).mutations;
        for (var _j2 = 0, _k2 = Object.entries(mutations); _j2 < _k2.length; _j2++) {
          var _l = _k2[_j2], key = _l[0], entry = _l[1];
          if (((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) && key !== (entry == null ? void 0 : entry.requestId)) {
            draft[key] = entry;
          }
        }
      });
    }
  });
  var invalidationSlice = createSlice({
    name: reducerPath + "/invalidation",
    initialState,
    reducers: {},
    extraReducers: function(builder) {
      builder.addCase(querySlice.actions.removeQueryResult, function(draft, _j2) {
        var queryCacheKey = _j2.payload.queryCacheKey;
        for (var _k2 = 0, _l = Object.values(draft); _k2 < _l.length; _k2++) {
          var tagTypeSubscriptions = _l[_k2];
          for (var _m = 0, _o = Object.values(tagTypeSubscriptions); _m < _o.length; _m++) {
            var idSubscriptions = _o[_m];
            var foundAt = idSubscriptions.indexOf(queryCacheKey);
            if (foundAt !== -1) {
              idSubscriptions.splice(foundAt, 1);
            }
          }
        }
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var _a, _b, _c, _d;
        var provided = extractRehydrationInfo(action).provided;
        for (var _j2 = 0, _k2 = Object.entries(provided); _j2 < _k2.length; _j2++) {
          var _l = _k2[_j2], type = _l[0], incomingTags = _l[1];
          for (var _m = 0, _o = Object.entries(incomingTags); _m < _o.length; _m++) {
            var _p = _o[_m], id = _p[0], cacheKeys = _p[1];
            var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id || "__internal_without_id"]) != null ? _d : _b[_c] = [];
            for (var _q = 0, cacheKeys_1 = cacheKeys; _q < cacheKeys_1.length; _q++) {
              var queryCacheKey = cacheKeys_1[_q];
              var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
              if (!alreadySubscribed) {
                subscribedQueries.push(queryCacheKey);
              }
            }
          }
        }
      }).addMatcher(isAnyOf(isFulfilled(queryThunk), isRejectedWithValue(queryThunk)), function(draft, action) {
        var _a, _b, _c, _d;
        var providedTags = calculateProvidedByThunk(action, "providesTags", definitions, assertTagType);
        var queryCacheKey = action.meta.arg.queryCacheKey;
        for (var _j2 = 0, _k2 = Object.values(draft); _j2 < _k2.length; _j2++) {
          var tagTypeSubscriptions = _k2[_j2];
          for (var _l = 0, _m = Object.values(tagTypeSubscriptions); _l < _m.length; _l++) {
            var idSubscriptions = _m[_l];
            var foundAt = idSubscriptions.indexOf(queryCacheKey);
            if (foundAt !== -1) {
              idSubscriptions.splice(foundAt, 1);
            }
          }
        }
        for (var _o = 0, providedTags_1 = providedTags; _o < providedTags_1.length; _o++) {
          var _p = providedTags_1[_o], type = _p.type, id = _p.id;
          var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id || "__internal_without_id"]) != null ? _d : _b[_c] = [];
          var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
          if (!alreadySubscribed) {
            subscribedQueries.push(queryCacheKey);
          }
        }
      });
    }
  });
  var subscriptionSlice = createSlice({
    name: reducerPath + "/subscriptions",
    initialState,
    reducers: {
      updateSubscriptionOptions: function(d2, a2) {
      },
      unsubscribeQueryResult: function(d2, a2) {
      },
      internal_probeSubscription: function(d2, a2) {
      }
    }
  });
  var internalSubscriptionsSlice = createSlice({
    name: reducerPath + "/internalSubscriptions",
    initialState,
    reducers: {
      subscriptionsUpdated: function(state, action) {
        return pn(state, action.payload);
      }
    }
  });
  var configSlice = createSlice({
    name: reducerPath + "/config",
    initialState: __spreadValues$1({
      online: isOnline(),
      focused: isDocumentVisible(),
      middlewareRegistered: false
    }, config),
    reducers: {
      middlewareRegistered: function(state, _j2) {
        var payload = _j2.payload;
        state.middlewareRegistered = state.middlewareRegistered === "conflict" || apiUid !== payload ? "conflict" : true;
      }
    },
    extraReducers: function(builder) {
      builder.addCase(onOnline, function(state) {
        state.online = true;
      }).addCase(onOffline, function(state) {
        state.online = false;
      }).addCase(onFocus, function(state) {
        state.focused = true;
      }).addCase(onFocusLost, function(state) {
        state.focused = false;
      }).addMatcher(hasRehydrationInfo, function(draft) {
        return __spreadValues$1({}, draft);
      });
    }
  });
  var combinedReducer = combineReducers({
    queries: querySlice.reducer,
    mutations: mutationSlice.reducer,
    provided: invalidationSlice.reducer,
    subscriptions: internalSubscriptionsSlice.reducer,
    config: configSlice.reducer
  });
  var reducer = /* @__PURE__ */ __name(function(state, action) {
    return combinedReducer(resetApiState.match(action) ? void 0 : state, action);
  }, "reducer");
  var actions = __spreadProps$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, configSlice.actions), querySlice.actions), subscriptionSlice.actions), internalSubscriptionsSlice.actions), mutationSlice.actions), {
    unsubscribeMutationResult: mutationSlice.actions.removeMutationResult,
    resetApiState
  });
  return { reducer, actions };
}
__name(buildSlice, "buildSlice");
var skipToken = /* @__PURE__ */ Symbol.for("RTKQ/skipToken");
var initialSubState = {
  status: QueryStatus.uninitialized
};
var defaultQuerySubState = /* @__PURE__ */ fn(initialSubState, function() {
});
var defaultMutationSubState = /* @__PURE__ */ fn(initialSubState, function() {
});
function buildSelectors(_j) {
  var serializeQueryArgs = _j.serializeQueryArgs, reducerPath = _j.reducerPath;
  var selectSkippedQuery = /* @__PURE__ */ __name(function(state) {
    return defaultQuerySubState;
  }, "selectSkippedQuery");
  var selectSkippedMutation = /* @__PURE__ */ __name(function(state) {
    return defaultMutationSubState;
  }, "selectSkippedMutation");
  return { buildQuerySelector, buildMutationSelector, selectInvalidatedBy };
  function withRequestFlags(substate) {
    return __spreadValues$1(__spreadValues$1({}, substate), getRequestStatusFlags(substate.status));
  }
  __name(withRequestFlags, "withRequestFlags");
  function selectInternalState(rootState) {
    var state = rootState[reducerPath];
    return state;
  }
  __name(selectInternalState, "selectInternalState");
  function buildQuerySelector(endpointName, endpointDefinition) {
    return function(queryArgs) {
      var serializedArgs = serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      });
      var selectQuerySubstate = /* @__PURE__ */ __name(function(state) {
        var _a, _b, _c;
        return (_c = (_b = (_a = selectInternalState(state)) == null ? void 0 : _a.queries) == null ? void 0 : _b[serializedArgs]) != null ? _c : defaultQuerySubState;
      }, "selectQuerySubstate");
      var finalSelectQuerySubState = queryArgs === skipToken ? selectSkippedQuery : selectQuerySubstate;
      return createSelector(finalSelectQuerySubState, withRequestFlags);
    };
  }
  __name(buildQuerySelector, "buildQuerySelector");
  function buildMutationSelector() {
    return function(id) {
      var _a;
      var mutationId;
      if (typeof id === "object") {
        mutationId = (_a = getMutationCacheKey(id)) != null ? _a : skipToken;
      } else {
        mutationId = id;
      }
      var selectMutationSubstate = /* @__PURE__ */ __name(function(state) {
        var _a2, _b, _c;
        return (_c = (_b = (_a2 = selectInternalState(state)) == null ? void 0 : _a2.mutations) == null ? void 0 : _b[mutationId]) != null ? _c : defaultMutationSubState;
      }, "selectMutationSubstate");
      var finalSelectMutationSubstate = mutationId === skipToken ? selectSkippedMutation : selectMutationSubstate;
      return createSelector(finalSelectMutationSubstate, withRequestFlags);
    };
  }
  __name(buildMutationSelector, "buildMutationSelector");
  function selectInvalidatedBy(state, tags) {
    var _a;
    var apiState = state[reducerPath];
    var toInvalidate = /* @__PURE__ */ new Set();
    for (var _j2 = 0, _k = tags.map(expandTagDescription); _j2 < _k.length; _j2++) {
      var tag = _k[_j2];
      var provided = apiState.provided[tag.type];
      if (!provided) {
        continue;
      }
      var invalidateSubscriptions = (_a = tag.id !== void 0 ? provided[tag.id] : flatten(Object.values(provided))) != null ? _a : [];
      for (var _l = 0, invalidateSubscriptions_1 = invalidateSubscriptions; _l < invalidateSubscriptions_1.length; _l++) {
        var invalidate = invalidateSubscriptions_1[_l];
        toInvalidate.add(invalidate);
      }
    }
    return flatten(Array.from(toInvalidate.values()).map(function(queryCacheKey) {
      var querySubState = apiState.queries[queryCacheKey];
      return querySubState ? [
        {
          queryCacheKey,
          endpointName: querySubState.endpointName,
          originalArgs: querySubState.originalArgs
        }
      ] : [];
    }));
  }
  __name(selectInvalidatedBy, "selectInvalidatedBy");
}
__name(buildSelectors, "buildSelectors");
var cache$1 = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var defaultSerializeQueryArgs$1 = /* @__PURE__ */ __name(function(_j) {
  var endpointName = _j.endpointName, queryArgs = _j.queryArgs;
  var serialized = "";
  var cached = cache$1 == null ? void 0 : cache$1.get(queryArgs);
  if (typeof cached === "string") {
    serialized = cached;
  } else {
    var stringified = JSON.stringify(queryArgs, function(key, value) {
      return isPlainObject$1(value) ? Object.keys(value).sort().reduce(function(acc, key2) {
        acc[key2] = value[key2];
        return acc;
      }, {}) : value;
    });
    if (isPlainObject$1(queryArgs)) {
      cache$1 == null ? void 0 : cache$1.set(queryArgs, stringified);
    }
    serialized = stringified;
  }
  return endpointName + "(" + serialized + ")";
}, "defaultSerializeQueryArgs$1");
function buildCreateApi() {
  var modules = [];
  for (var _j = 0; _j < arguments.length; _j++) {
    modules[_j] = arguments[_j];
  }
  return /* @__PURE__ */ __name(function baseCreateApi(options) {
    var extractRehydrationInfo = defaultMemoize(function(action) {
      var _a, _b;
      return (_b = options.extractRehydrationInfo) == null ? void 0 : _b.call(options, action, {
        reducerPath: (_a = options.reducerPath) != null ? _a : "api"
      });
    });
    var optionsWithDefaults = __spreadProps$1(__spreadValues$1({
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: false,
      refetchOnFocus: false,
      refetchOnReconnect: false
    }, options), {
      extractRehydrationInfo,
      serializeQueryArgs: function(queryArgsApi) {
        var finalSerializeQueryArgs = defaultSerializeQueryArgs$1;
        if ("serializeQueryArgs" in queryArgsApi.endpointDefinition) {
          var endpointSQA_1 = queryArgsApi.endpointDefinition.serializeQueryArgs;
          finalSerializeQueryArgs = /* @__PURE__ */ __name(function(queryArgsApi2) {
            var initialResult = endpointSQA_1(queryArgsApi2);
            if (typeof initialResult === "string") {
              return initialResult;
            } else {
              return defaultSerializeQueryArgs$1(__spreadProps$1(__spreadValues$1({}, queryArgsApi2), {
                queryArgs: initialResult
              }));
            }
          }, "finalSerializeQueryArgs");
        } else if (options.serializeQueryArgs) {
          finalSerializeQueryArgs = options.serializeQueryArgs;
        }
        return finalSerializeQueryArgs(queryArgsApi);
      },
      tagTypes: __spreadArray$1([], options.tagTypes || [])
    });
    var context = {
      endpointDefinitions: {},
      batch: function(fn2) {
        fn2();
      },
      apiUid: nanoid(),
      extractRehydrationInfo,
      hasRehydrationInfo: defaultMemoize(function(action) {
        return extractRehydrationInfo(action) != null;
      })
    };
    var api2 = {
      injectEndpoints,
      enhanceEndpoints: function(_j2) {
        var addTagTypes = _j2.addTagTypes, endpoints = _j2.endpoints;
        if (addTagTypes) {
          for (var _k = 0, addTagTypes_1 = addTagTypes; _k < addTagTypes_1.length; _k++) {
            var eT = addTagTypes_1[_k];
            if (!optionsWithDefaults.tagTypes.includes(eT)) {
              optionsWithDefaults.tagTypes.push(eT);
            }
          }
        }
        if (endpoints) {
          for (var _l = 0, _m = Object.entries(endpoints); _l < _m.length; _l++) {
            var _o = _m[_l], endpointName = _o[0], partialDefinition = _o[1];
            if (typeof partialDefinition === "function") {
              partialDefinition(context.endpointDefinitions[endpointName]);
            } else {
              Object.assign(context.endpointDefinitions[endpointName] || {}, partialDefinition);
            }
          }
        }
        return api2;
      }
    };
    var initializedModules = modules.map(function(m2) {
      return m2.init(api2, optionsWithDefaults, context);
    });
    function injectEndpoints(inject) {
      var evaluatedEndpoints = inject.endpoints({
        query: function(x2) {
          return __spreadProps$1(__spreadValues$1({}, x2), { type: DefinitionType$1.query });
        },
        mutation: function(x2) {
          return __spreadProps$1(__spreadValues$1({}, x2), { type: DefinitionType$1.mutation });
        }
      });
      for (var _j2 = 0, _k = Object.entries(evaluatedEndpoints); _j2 < _k.length; _j2++) {
        var _l = _k[_j2], endpointName = _l[0], definition = _l[1];
        if (!inject.overrideExisting && endpointName in context.endpointDefinitions) {
          if (typeof process !== "undefined" && false) {
            console.error("called `injectEndpoints` to override already-existing endpointName " + endpointName + " without specifying `overrideExisting: true`");
          }
          continue;
        }
        context.endpointDefinitions[endpointName] = definition;
        for (var _m = 0, initializedModules_1 = initializedModules; _m < initializedModules_1.length; _m++) {
          var m2 = initializedModules_1[_m];
          m2.injectEndpoint(endpointName, definition);
        }
      }
      return api2;
    }
    __name(injectEndpoints, "injectEndpoints");
    return api2.injectEndpoints({ endpoints: options.endpoints });
  }, "baseCreateApi");
}
__name(buildCreateApi, "buildCreateApi");
function isObjectEmpty(obj) {
  for (var k2 in obj) {
    return false;
  }
  return true;
}
__name(isObjectEmpty, "isObjectEmpty");
var THIRTY_TWO_BIT_MAX_TIMER_SECONDS = 2147483647 / 1e3 - 1;
var buildCacheCollectionHandler = /* @__PURE__ */ __name(function(_j) {
  var reducerPath = _j.reducerPath, api2 = _j.api, context = _j.context, internalState = _j.internalState;
  var _k = api2.internalActions, removeQueryResult = _k.removeQueryResult, unsubscribeQueryResult = _k.unsubscribeQueryResult;
  function anySubscriptionsRemainingForKey(queryCacheKey) {
    var subscriptions = internalState.currentSubscriptions[queryCacheKey];
    return !!subscriptions && !isObjectEmpty(subscriptions);
  }
  __name(anySubscriptionsRemainingForKey, "anySubscriptionsRemainingForKey");
  var currentRemovalTimeouts = {};
  var handler = /* @__PURE__ */ __name(function(action, mwApi, internalState2) {
    var _a;
    if (unsubscribeQueryResult.match(action)) {
      var state = mwApi.getState()[reducerPath];
      var queryCacheKey = action.payload.queryCacheKey;
      handleUnsubscribe(queryCacheKey, (_a = state.queries[queryCacheKey]) == null ? void 0 : _a.endpointName, mwApi, state.config);
    }
    if (api2.util.resetApiState.match(action)) {
      for (var _j2 = 0, _k2 = Object.entries(currentRemovalTimeouts); _j2 < _k2.length; _j2++) {
        var _l = _k2[_j2], key = _l[0], timeout = _l[1];
        if (timeout)
          clearTimeout(timeout);
        delete currentRemovalTimeouts[key];
      }
    }
    if (context.hasRehydrationInfo(action)) {
      var state = mwApi.getState()[reducerPath];
      var queries = context.extractRehydrationInfo(action).queries;
      for (var _m = 0, _o = Object.entries(queries); _m < _o.length; _m++) {
        var _p = _o[_m], queryCacheKey = _p[0], queryState = _p[1];
        handleUnsubscribe(queryCacheKey, queryState == null ? void 0 : queryState.endpointName, mwApi, state.config);
      }
    }
  }, "handler");
  function handleUnsubscribe(queryCacheKey, endpointName, api22, config) {
    var _a;
    var endpointDefinition = context.endpointDefinitions[endpointName];
    var keepUnusedDataFor = (_a = endpointDefinition == null ? void 0 : endpointDefinition.keepUnusedDataFor) != null ? _a : config.keepUnusedDataFor;
    if (keepUnusedDataFor === Infinity) {
      return;
    }
    var finalKeepUnusedDataFor = Math.max(0, Math.min(keepUnusedDataFor, THIRTY_TWO_BIT_MAX_TIMER_SECONDS));
    if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
      var currentTimeout = currentRemovalTimeouts[queryCacheKey];
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      currentRemovalTimeouts[queryCacheKey] = setTimeout(function() {
        if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
          api22.dispatch(removeQueryResult({ queryCacheKey }));
        }
        delete currentRemovalTimeouts[queryCacheKey];
      }, finalKeepUnusedDataFor * 1e3);
    }
  }
  __name(handleUnsubscribe, "handleUnsubscribe");
  return handler;
}, "buildCacheCollectionHandler");
var buildInvalidationByTagsHandler = /* @__PURE__ */ __name(function(_j) {
  var reducerPath = _j.reducerPath, context = _j.context, endpointDefinitions = _j.context.endpointDefinitions, mutationThunk = _j.mutationThunk, api2 = _j.api, assertTagType = _j.assertTagType, refetchQuery = _j.refetchQuery;
  var removeQueryResult = api2.internalActions.removeQueryResult;
  var isThunkActionWithTags = isAnyOf(isFulfilled(mutationThunk), isRejectedWithValue(mutationThunk));
  var handler = /* @__PURE__ */ __name(function(action, mwApi) {
    if (isThunkActionWithTags(action)) {
      invalidateTags(calculateProvidedByThunk(action, "invalidatesTags", endpointDefinitions, assertTagType), mwApi);
    }
    if (api2.util.invalidateTags.match(action)) {
      invalidateTags(calculateProvidedBy(action.payload, void 0, void 0, void 0, void 0, assertTagType), mwApi);
    }
  }, "handler");
  function invalidateTags(tags, mwApi) {
    var rootState = mwApi.getState();
    var state = rootState[reducerPath];
    var toInvalidate = api2.util.selectInvalidatedBy(rootState, tags);
    context.batch(function() {
      var _a;
      var valuesArray = Array.from(toInvalidate.values());
      for (var _j2 = 0, valuesArray_1 = valuesArray; _j2 < valuesArray_1.length; _j2++) {
        var queryCacheKey = valuesArray_1[_j2].queryCacheKey;
        var querySubState = state.queries[queryCacheKey];
        var subscriptionSubState = (_a = state.subscriptions[queryCacheKey]) != null ? _a : {};
        if (querySubState) {
          if (Object.keys(subscriptionSubState).length === 0) {
            mwApi.dispatch(removeQueryResult({
              queryCacheKey
            }));
          } else if (querySubState.status !== QueryStatus.uninitialized) {
            mwApi.dispatch(refetchQuery(querySubState, queryCacheKey));
          }
        }
      }
    });
  }
  __name(invalidateTags, "invalidateTags");
  return handler;
}, "buildInvalidationByTagsHandler");
var buildPollingHandler = /* @__PURE__ */ __name(function(_j) {
  var reducerPath = _j.reducerPath, queryThunk = _j.queryThunk, api2 = _j.api, refetchQuery = _j.refetchQuery, internalState = _j.internalState;
  var currentPolls = {};
  var handler = /* @__PURE__ */ __name(function(action, mwApi) {
    if (api2.internalActions.updateSubscriptionOptions.match(action) || api2.internalActions.unsubscribeQueryResult.match(action)) {
      updatePollingInterval(action.payload, mwApi);
    }
    if (queryThunk.pending.match(action) || queryThunk.rejected.match(action) && action.meta.condition) {
      updatePollingInterval(action.meta.arg, mwApi);
    }
    if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action) && !action.meta.condition) {
      startNextPoll(action.meta.arg, mwApi);
    }
    if (api2.util.resetApiState.match(action)) {
      clearPolls();
    }
  }, "handler");
  function startNextPoll(_j2, api22) {
    var queryCacheKey = _j2.queryCacheKey;
    var state = api22.getState()[reducerPath];
    var querySubState = state.queries[queryCacheKey];
    var subscriptions = internalState.currentSubscriptions[queryCacheKey];
    if (!querySubState || querySubState.status === QueryStatus.uninitialized)
      return;
    var lowestPollingInterval = findLowestPollingInterval(subscriptions);
    if (!Number.isFinite(lowestPollingInterval))
      return;
    var currentPoll = currentPolls[queryCacheKey];
    if (currentPoll == null ? void 0 : currentPoll.timeout) {
      clearTimeout(currentPoll.timeout);
      currentPoll.timeout = void 0;
    }
    var nextPollTimestamp = Date.now() + lowestPollingInterval;
    var currentInterval = currentPolls[queryCacheKey] = {
      nextPollTimestamp,
      pollingInterval: lowestPollingInterval,
      timeout: setTimeout(function() {
        currentInterval.timeout = void 0;
        api22.dispatch(refetchQuery(querySubState, queryCacheKey));
      }, lowestPollingInterval)
    };
  }
  __name(startNextPoll, "startNextPoll");
  function updatePollingInterval(_j2, api22) {
    var queryCacheKey = _j2.queryCacheKey;
    var state = api22.getState()[reducerPath];
    var querySubState = state.queries[queryCacheKey];
    var subscriptions = internalState.currentSubscriptions[queryCacheKey];
    if (!querySubState || querySubState.status === QueryStatus.uninitialized) {
      return;
    }
    var lowestPollingInterval = findLowestPollingInterval(subscriptions);
    if (!Number.isFinite(lowestPollingInterval)) {
      cleanupPollForKey(queryCacheKey);
      return;
    }
    var currentPoll = currentPolls[queryCacheKey];
    var nextPollTimestamp = Date.now() + lowestPollingInterval;
    if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
      startNextPoll({ queryCacheKey }, api22);
    }
  }
  __name(updatePollingInterval, "updatePollingInterval");
  function cleanupPollForKey(key) {
    var existingPoll = currentPolls[key];
    if (existingPoll == null ? void 0 : existingPoll.timeout) {
      clearTimeout(existingPoll.timeout);
    }
    delete currentPolls[key];
  }
  __name(cleanupPollForKey, "cleanupPollForKey");
  function clearPolls() {
    for (var _j2 = 0, _k = Object.keys(currentPolls); _j2 < _k.length; _j2++) {
      var key = _k[_j2];
      cleanupPollForKey(key);
    }
  }
  __name(clearPolls, "clearPolls");
  function findLowestPollingInterval(subscribers) {
    if (subscribers === void 0) {
      subscribers = {};
    }
    var lowestPollingInterval = Number.POSITIVE_INFINITY;
    for (var key in subscribers) {
      if (!!subscribers[key].pollingInterval) {
        lowestPollingInterval = Math.min(subscribers[key].pollingInterval, lowestPollingInterval);
      }
    }
    return lowestPollingInterval;
  }
  __name(findLowestPollingInterval, "findLowestPollingInterval");
  return handler;
}, "buildPollingHandler");
var buildWindowEventHandler = /* @__PURE__ */ __name(function(_j) {
  var reducerPath = _j.reducerPath, context = _j.context, api2 = _j.api, refetchQuery = _j.refetchQuery, internalState = _j.internalState;
  var removeQueryResult = api2.internalActions.removeQueryResult;
  var handler = /* @__PURE__ */ __name(function(action, mwApi) {
    if (onFocus.match(action)) {
      refetchValidQueries(mwApi, "refetchOnFocus");
    }
    if (onOnline.match(action)) {
      refetchValidQueries(mwApi, "refetchOnReconnect");
    }
  }, "handler");
  function refetchValidQueries(api22, type) {
    var state = api22.getState()[reducerPath];
    var queries = state.queries;
    var subscriptions = internalState.currentSubscriptions;
    context.batch(function() {
      for (var _j2 = 0, _k = Object.keys(subscriptions); _j2 < _k.length; _j2++) {
        var queryCacheKey = _k[_j2];
        var querySubState = queries[queryCacheKey];
        var subscriptionSubState = subscriptions[queryCacheKey];
        if (!subscriptionSubState || !querySubState)
          continue;
        var shouldRefetch = Object.values(subscriptionSubState).some(function(sub) {
          return sub[type] === true;
        }) || Object.values(subscriptionSubState).every(function(sub) {
          return sub[type] === void 0;
        }) && state.config[type];
        if (shouldRefetch) {
          if (Object.keys(subscriptionSubState).length === 0) {
            api22.dispatch(removeQueryResult({
              queryCacheKey
            }));
          } else if (querySubState.status !== QueryStatus.uninitialized) {
            api22.dispatch(refetchQuery(querySubState, queryCacheKey));
          }
        }
      }
    });
  }
  __name(refetchValidQueries, "refetchValidQueries");
  return handler;
}, "buildWindowEventHandler");
var neverResolvedError = new Error("Promise never resolved before cacheEntryRemoved.");
var buildCacheLifecycleHandler = /* @__PURE__ */ __name(function(_j) {
  var api2 = _j.api, reducerPath = _j.reducerPath, context = _j.context, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk;
  _j.internalState;
  var isQueryThunk = isAsyncThunkAction(queryThunk);
  var isMutationThunk = isAsyncThunkAction(mutationThunk);
  var isFulfilledThunk = isFulfilled(queryThunk, mutationThunk);
  var lifecycleMap = {};
  var handler = /* @__PURE__ */ __name(function(action, mwApi, stateBefore) {
    var cacheKey = getCacheKey(action);
    if (queryThunk.pending.match(action)) {
      var oldState = stateBefore[reducerPath].queries[cacheKey];
      var state = mwApi.getState()[reducerPath].queries[cacheKey];
      if (!oldState && state) {
        handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
      }
    } else if (mutationThunk.pending.match(action)) {
      var state = mwApi.getState()[reducerPath].mutations[cacheKey];
      if (state) {
        handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
      }
    } else if (isFulfilledThunk(action)) {
      var lifecycle = lifecycleMap[cacheKey];
      if (lifecycle == null ? void 0 : lifecycle.valueResolved) {
        lifecycle.valueResolved({
          data: action.payload,
          meta: action.meta.baseQueryMeta
        });
        delete lifecycle.valueResolved;
      }
    } else if (api2.internalActions.removeQueryResult.match(action) || api2.internalActions.removeMutationResult.match(action)) {
      var lifecycle = lifecycleMap[cacheKey];
      if (lifecycle) {
        delete lifecycleMap[cacheKey];
        lifecycle.cacheEntryRemoved();
      }
    } else if (api2.util.resetApiState.match(action)) {
      for (var _j2 = 0, _k = Object.entries(lifecycleMap); _j2 < _k.length; _j2++) {
        var _l = _k[_j2], cacheKey2 = _l[0], lifecycle = _l[1];
        delete lifecycleMap[cacheKey2];
        lifecycle.cacheEntryRemoved();
      }
    }
  }, "handler");
  function getCacheKey(action) {
    if (isQueryThunk(action))
      return action.meta.arg.queryCacheKey;
    if (isMutationThunk(action))
      return action.meta.requestId;
    if (api2.internalActions.removeQueryResult.match(action))
      return action.payload.queryCacheKey;
    if (api2.internalActions.removeMutationResult.match(action))
      return getMutationCacheKey(action.payload);
    return "";
  }
  __name(getCacheKey, "getCacheKey");
  function handleNewKey(endpointName, originalArgs, queryCacheKey, mwApi, requestId) {
    var endpointDefinition = context.endpointDefinitions[endpointName];
    var onCacheEntryAdded = endpointDefinition == null ? void 0 : endpointDefinition.onCacheEntryAdded;
    if (!onCacheEntryAdded)
      return;
    var lifecycle = {};
    var cacheEntryRemoved = new Promise(function(resolve) {
      lifecycle.cacheEntryRemoved = resolve;
    });
    var cacheDataLoaded = Promise.race([
      new Promise(function(resolve) {
        lifecycle.valueResolved = resolve;
      }),
      cacheEntryRemoved.then(function() {
        throw neverResolvedError;
      })
    ]);
    cacheDataLoaded.catch(function() {
    });
    lifecycleMap[queryCacheKey] = lifecycle;
    var selector = api2.endpoints[endpointName].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs : queryCacheKey);
    var extra = mwApi.dispatch(function(_2, __, extra2) {
      return extra2;
    });
    var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi), {
      getCacheEntry: function() {
        return selector(mwApi.getState());
      },
      requestId,
      extra,
      updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function(updateRecipe) {
        return mwApi.dispatch(api2.util.updateQueryData(endpointName, originalArgs, updateRecipe));
      } : void 0,
      cacheDataLoaded,
      cacheEntryRemoved
    });
    var runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi);
    Promise.resolve(runningHandler).catch(function(e2) {
      if (e2 === neverResolvedError)
        return;
      throw e2;
    });
  }
  __name(handleNewKey, "handleNewKey");
  return handler;
}, "buildCacheLifecycleHandler");
var buildQueryLifecycleHandler = /* @__PURE__ */ __name(function(_j) {
  var api2 = _j.api, context = _j.context, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk;
  var isPendingThunk = isPending(queryThunk, mutationThunk);
  var isRejectedThunk = isRejected(queryThunk, mutationThunk);
  var isFullfilledThunk = isFulfilled(queryThunk, mutationThunk);
  var lifecycleMap = {};
  var handler = /* @__PURE__ */ __name(function(action, mwApi) {
    var _a, _b, _c;
    if (isPendingThunk(action)) {
      var _j2 = action.meta, requestId = _j2.requestId, _k = _j2.arg, endpointName_1 = _k.endpointName, originalArgs_1 = _k.originalArgs;
      var endpointDefinition = context.endpointDefinitions[endpointName_1];
      var onQueryStarted = endpointDefinition == null ? void 0 : endpointDefinition.onQueryStarted;
      if (onQueryStarted) {
        var lifecycle_1 = {};
        var queryFulfilled = new Promise(function(resolve, reject) {
          lifecycle_1.resolve = resolve;
          lifecycle_1.reject = reject;
        });
        queryFulfilled.catch(function() {
        });
        lifecycleMap[requestId] = lifecycle_1;
        var selector_1 = api2.endpoints[endpointName_1].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs_1 : requestId);
        var extra = mwApi.dispatch(function(_2, __, extra2) {
          return extra2;
        });
        var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi), {
          getCacheEntry: function() {
            return selector_1(mwApi.getState());
          },
          requestId,
          extra,
          updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function(updateRecipe) {
            return mwApi.dispatch(api2.util.updateQueryData(endpointName_1, originalArgs_1, updateRecipe));
          } : void 0,
          queryFulfilled
        });
        onQueryStarted(originalArgs_1, lifecycleApi);
      }
    } else if (isFullfilledThunk(action)) {
      var _l = action.meta, requestId = _l.requestId, baseQueryMeta = _l.baseQueryMeta;
      (_a = lifecycleMap[requestId]) == null ? void 0 : _a.resolve({
        data: action.payload,
        meta: baseQueryMeta
      });
      delete lifecycleMap[requestId];
    } else if (isRejectedThunk(action)) {
      var _m = action.meta, requestId = _m.requestId, rejectedWithValue = _m.rejectedWithValue, baseQueryMeta = _m.baseQueryMeta;
      (_c = lifecycleMap[requestId]) == null ? void 0 : _c.reject({
        error: (_b = action.payload) != null ? _b : action.error,
        isUnhandledError: !rejectedWithValue,
        meta: baseQueryMeta
      });
      delete lifecycleMap[requestId];
    }
  }, "handler");
  return handler;
}, "buildQueryLifecycleHandler");
var buildDevCheckHandler = /* @__PURE__ */ __name(function(_j) {
  var api2 = _j.api, apiUid = _j.context.apiUid, reducerPath = _j.reducerPath;
  return function(action, mwApi) {
    var _a, _b;
    if (api2.util.resetApiState.match(action)) {
      mwApi.dispatch(api2.internalActions.middlewareRegistered(apiUid));
    }
    if (typeof process !== "undefined" && false) {
      if (api2.internalActions.middlewareRegistered.match(action) && action.payload === apiUid && ((_b = (_a = mwApi.getState()[reducerPath]) == null ? void 0 : _a.config) == null ? void 0 : _b.middlewareRegistered) === "conflict") {
        console.warn('There is a mismatch between slice and middleware for the reducerPath "' + reducerPath + '".\nYou can only have one api per reducer path, this will lead to crashes in various situations!' + (reducerPath === "api" ? "\nIf you have multiple apis, you *have* to specify the reducerPath option when using createApi!" : ""));
      }
    }
  };
}, "buildDevCheckHandler");
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb) {
  return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
var buildBatchedActionsHandler = /* @__PURE__ */ __name(function(_j) {
  var api2 = _j.api, queryThunk = _j.queryThunk, internalState = _j.internalState;
  var subscriptionsPrefix = api2.reducerPath + "/subscriptions";
  var previousSubscriptions = null;
  var dispatchQueued = false;
  var _k = api2.internalActions, updateSubscriptionOptions = _k.updateSubscriptionOptions, unsubscribeQueryResult = _k.unsubscribeQueryResult;
  var actuallyMutateSubscriptions = /* @__PURE__ */ __name(function(mutableState, action) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (updateSubscriptionOptions.match(action)) {
      var _j2 = action.payload, queryCacheKey = _j2.queryCacheKey, requestId = _j2.requestId, options = _j2.options;
      if ((_a = mutableState == null ? void 0 : mutableState[queryCacheKey]) == null ? void 0 : _a[requestId]) {
        mutableState[queryCacheKey][requestId] = options;
      }
      return true;
    }
    if (unsubscribeQueryResult.match(action)) {
      var _k2 = action.payload, queryCacheKey = _k2.queryCacheKey, requestId = _k2.requestId;
      if (mutableState[queryCacheKey]) {
        delete mutableState[queryCacheKey][requestId];
      }
      return true;
    }
    if (api2.internalActions.removeQueryResult.match(action)) {
      delete mutableState[action.payload.queryCacheKey];
      return true;
    }
    if (queryThunk.pending.match(action)) {
      var _l = action.meta, arg = _l.arg, requestId = _l.requestId;
      if (arg.subscribe) {
        var substate = (_c = mutableState[_b = arg.queryCacheKey]) != null ? _c : mutableState[_b] = {};
        substate[requestId] = (_e = (_d = arg.subscriptionOptions) != null ? _d : substate[requestId]) != null ? _e : {};
        return true;
      }
    }
    if (queryThunk.rejected.match(action)) {
      var _m = action.meta, condition = _m.condition, arg = _m.arg, requestId = _m.requestId;
      if (condition && arg.subscribe) {
        var substate = (_g = mutableState[_f = arg.queryCacheKey]) != null ? _g : mutableState[_f] = {};
        substate[requestId] = (_i = (_h = arg.subscriptionOptions) != null ? _h : substate[requestId]) != null ? _i : {};
        return true;
      }
    }
    return false;
  }, "actuallyMutateSubscriptions");
  return function(action, mwApi) {
    var _a, _b;
    if (!previousSubscriptions) {
      previousSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
    }
    if (api2.internalActions.internal_probeSubscription.match(action)) {
      var _j2 = action.payload, queryCacheKey = _j2.queryCacheKey, requestId = _j2.requestId;
      var hasSubscription = !!((_a = internalState.currentSubscriptions[queryCacheKey]) == null ? void 0 : _a[requestId]);
      return [false, hasSubscription];
    }
    var didMutate = actuallyMutateSubscriptions(internalState.currentSubscriptions, action);
    if (didMutate) {
      if (!dispatchQueued) {
        queueMicrotaskShim(function() {
          var newSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
          var _j3 = cn(previousSubscriptions, function() {
            return newSubscriptions;
          }), patches = _j3[1];
          mwApi.next(api2.internalActions.subscriptionsUpdated(patches));
          previousSubscriptions = newSubscriptions;
          dispatchQueued = false;
        });
        dispatchQueued = true;
      }
      var isSubscriptionSliceAction = !!((_b = action.type) == null ? void 0 : _b.startsWith(subscriptionsPrefix));
      var isAdditionalSubscriptionAction = queryThunk.rejected.match(action) && action.meta.condition && !!action.meta.arg.subscribe;
      var actionShouldContinue = !isSubscriptionSliceAction && !isAdditionalSubscriptionAction;
      return [actionShouldContinue, false];
    }
    return [true, false];
  };
}, "buildBatchedActionsHandler");
function buildMiddleware(input) {
  var reducerPath = input.reducerPath, queryThunk = input.queryThunk, api2 = input.api, context = input.context;
  var apiUid = context.apiUid;
  var actions = {
    invalidateTags: createAction(reducerPath + "/invalidateTags")
  };
  var isThisApiSliceAction = /* @__PURE__ */ __name(function(action) {
    return !!action && typeof action.type === "string" && action.type.startsWith(reducerPath + "/");
  }, "isThisApiSliceAction");
  var handlerBuilders = [
    buildDevCheckHandler,
    buildCacheCollectionHandler,
    buildInvalidationByTagsHandler,
    buildPollingHandler,
    buildCacheLifecycleHandler,
    buildQueryLifecycleHandler
  ];
  var middleware = /* @__PURE__ */ __name(function(mwApi) {
    var initialized2 = false;
    var internalState = {
      currentSubscriptions: {}
    };
    var builderArgs = __spreadProps$1(__spreadValues$1({}, input), {
      internalState,
      refetchQuery
    });
    var handlers = handlerBuilders.map(function(build) {
      return build(builderArgs);
    });
    var batchedActionsHandler = buildBatchedActionsHandler(builderArgs);
    var windowEventsHandler = buildWindowEventHandler(builderArgs);
    return function(next) {
      return function(action) {
        if (!initialized2) {
          initialized2 = true;
          mwApi.dispatch(api2.internalActions.middlewareRegistered(apiUid));
        }
        var mwApiWithNext = __spreadProps$1(__spreadValues$1({}, mwApi), { next });
        var stateBefore = mwApi.getState();
        var _j = batchedActionsHandler(action, mwApiWithNext, stateBefore), actionShouldContinue = _j[0], hasSubscription = _j[1];
        var res;
        if (actionShouldContinue) {
          res = next(action);
        } else {
          res = hasSubscription;
        }
        if (!!mwApi.getState()[reducerPath]) {
          windowEventsHandler(action, mwApiWithNext, stateBefore);
          if (isThisApiSliceAction(action) || context.hasRehydrationInfo(action)) {
            for (var _k = 0, handlers_1 = handlers; _k < handlers_1.length; _k++) {
              var handler = handlers_1[_k];
              handler(action, mwApiWithNext, stateBefore);
            }
          }
        }
        return res;
      };
    };
  }, "middleware");
  return { middleware, actions };
  function refetchQuery(querySubState, queryCacheKey, override) {
    if (override === void 0) {
      override = {};
    }
    return queryThunk(__spreadValues$1({
      type: "query",
      endpointName: querySubState.endpointName,
      originalArgs: querySubState.originalArgs,
      subscribe: false,
      forceRefetch: true,
      queryCacheKey
    }, override));
  }
  __name(refetchQuery, "refetchQuery");
}
__name(buildMiddleware, "buildMiddleware");
function safeAssign$1(target) {
  var args = [];
  for (var _j = 1; _j < arguments.length; _j++) {
    args[_j - 1] = arguments[_j];
  }
  Object.assign.apply(Object, __spreadArray$1([target], args));
}
__name(safeAssign$1, "safeAssign$1");
var coreModuleName = /* @__PURE__ */ Symbol();
var coreModule = /* @__PURE__ */ __name(function() {
  return {
    name: coreModuleName,
    init: function(api2, _j, context) {
      var baseQuery = _j.baseQuery, tagTypes = _j.tagTypes, reducerPath = _j.reducerPath, serializeQueryArgs = _j.serializeQueryArgs, keepUnusedDataFor = _j.keepUnusedDataFor, refetchOnMountOrArgChange = _j.refetchOnMountOrArgChange, refetchOnFocus = _j.refetchOnFocus, refetchOnReconnect = _j.refetchOnReconnect;
      T();
      var assertTagType = /* @__PURE__ */ __name(function(tag) {
        if (typeof process !== "undefined" && false) {
          if (!tagTypes.includes(tag.type)) {
            console.error("Tag type '" + tag.type + "' was used, but not specified in `tagTypes`!");
          }
        }
        return tag;
      }, "assertTagType");
      Object.assign(api2, {
        reducerPath,
        endpoints: {},
        internalActions: {
          onOnline,
          onOffline,
          onFocus,
          onFocusLost
        },
        util: {}
      });
      var _k = buildThunks({
        baseQuery,
        reducerPath,
        context,
        api: api2,
        serializeQueryArgs
      }), queryThunk = _k.queryThunk, mutationThunk = _k.mutationThunk, patchQueryData = _k.patchQueryData, updateQueryData = _k.updateQueryData, upsertQueryData = _k.upsertQueryData, prefetch = _k.prefetch, buildMatchThunkActions = _k.buildMatchThunkActions;
      var _l = buildSlice({
        context,
        queryThunk,
        mutationThunk,
        reducerPath,
        assertTagType,
        config: {
          refetchOnFocus,
          refetchOnReconnect,
          refetchOnMountOrArgChange,
          keepUnusedDataFor,
          reducerPath
        }
      }), reducer = _l.reducer, sliceActions = _l.actions;
      safeAssign$1(api2.util, {
        patchQueryData,
        updateQueryData,
        upsertQueryData,
        prefetch,
        resetApiState: sliceActions.resetApiState
      });
      safeAssign$1(api2.internalActions, sliceActions);
      var _m = buildMiddleware({
        reducerPath,
        context,
        queryThunk,
        mutationThunk,
        api: api2,
        assertTagType
      }), middleware = _m.middleware, middlewareActions = _m.actions;
      safeAssign$1(api2.util, middlewareActions);
      safeAssign$1(api2, { reducer, middleware });
      var _o = buildSelectors({
        serializeQueryArgs,
        reducerPath
      }), buildQuerySelector = _o.buildQuerySelector, buildMutationSelector = _o.buildMutationSelector, selectInvalidatedBy = _o.selectInvalidatedBy;
      safeAssign$1(api2.util, { selectInvalidatedBy });
      var _p = buildInitiate({
        queryThunk,
        mutationThunk,
        api: api2,
        serializeQueryArgs,
        context
      }), buildInitiateQuery = _p.buildInitiateQuery, buildInitiateMutation = _p.buildInitiateMutation, getRunningMutationThunk = _p.getRunningMutationThunk, getRunningMutationsThunk = _p.getRunningMutationsThunk, getRunningQueriesThunk = _p.getRunningQueriesThunk, getRunningQueryThunk = _p.getRunningQueryThunk, getRunningOperationPromises = _p.getRunningOperationPromises, removalWarning = _p.removalWarning;
      safeAssign$1(api2.util, {
        getRunningOperationPromises,
        getRunningOperationPromise: removalWarning,
        getRunningMutationThunk,
        getRunningMutationsThunk,
        getRunningQueryThunk,
        getRunningQueriesThunk
      });
      return {
        name: coreModuleName,
        injectEndpoint: function(endpointName, definition) {
          var _a, _b;
          var anyApi = api2;
          (_b = (_a = anyApi.endpoints)[endpointName]) != null ? _b : _a[endpointName] = {};
          if (isQueryDefinition$1(definition)) {
            safeAssign$1(anyApi.endpoints[endpointName], {
              name: endpointName,
              select: buildQuerySelector(endpointName, definition),
              initiate: buildInitiateQuery(endpointName, definition)
            }, buildMatchThunkActions(queryThunk, endpointName));
          } else if (isMutationDefinition$1(definition)) {
            safeAssign$1(anyApi.endpoints[endpointName], {
              name: endpointName,
              select: buildMutationSelector(),
              initiate: buildInitiateMutation(endpointName)
            }, buildMatchThunkActions(mutationThunk, endpointName));
          }
        }
      };
    }
  };
}, "coreModule");
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$1 = react.exports;
function h$2(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
__name(h$2, "h$2");
var k$1 = "function" === typeof Object.is ? Object.is : h$2, l$1 = e$1.useState, m$1 = e$1.useEffect, n$2 = e$1.useLayoutEffect, p$2 = e$1.useDebugValue;
function q$2(a2, b2) {
  var d2 = b2(), f2 = l$1({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$2(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$1(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$1(function() {
    r$1(c2) && g2({ inst: c2 });
    return a2(function() {
      r$1(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$2(d2);
  return d2;
}
__name(q$2, "q$2");
function r$1(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$1(a2, d2);
  } catch (f2) {
    return true;
  }
}
__name(r$1, "r$1");
function t$2(a2, b2) {
  return b2();
}
__name(t$2, "t$2");
var u$2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$2 : q$2;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$1.useSyncExternalStore ? e$1.useSyncExternalStore : u$2;
(function(module) {
  {
    module.exports = useSyncExternalStoreShim_production_min;
  }
})(shim);
var withSelector = { exports: {} };
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$1 = react.exports, n$1 = shim.exports;
function p$1(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
__name(p$1, "p$1");
var q$1 = "function" === typeof Object.is ? Object.is : p$1, r = n$1.useSyncExternalStore, t$1 = h$1.useRef, u$1 = h$1.useEffect, v$1 = h$1.useMemo, w = h$1.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$1(null);
  if (null === c2.current) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else
    f2 = c2.current;
  c2 = v$1(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (void 0 !== g2 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4))
            return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$1(d3, a4))
        return b3;
      var e3 = l2(a4);
      if (void 0 !== g2 && g2(b3, e3))
        return b3;
      d3 = a4;
      return k2 = e3;
    }
    __name(a3, "a");
    var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a3(b2());
    }, null === m2 ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r(a2, c2[0], c2[1]);
  u$1(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w(d2);
  return d2;
};
(function(module) {
  {
    module.exports = withSelector_production_min;
  }
})(withSelector);
function defaultNoopBatch(callback) {
  callback();
}
__name(defaultNoopBatch, "defaultNoopBatch");
let batch = defaultNoopBatch;
const setBatch = /* @__PURE__ */ __name((newBatch) => batch = newBatch, "setBatch");
const getBatch = /* @__PURE__ */ __name(() => batch, "getBatch");
const ReactReduxContext = /* @__PURE__ */ react.exports.createContext(null);
function useReduxContext() {
  const contextValue = react.exports.useContext(ReactReduxContext);
  return contextValue;
}
__name(useReduxContext, "useReduxContext");
const notInitialized = /* @__PURE__ */ __name(() => {
  throw new Error("uSES not initialized!");
}, "notInitialized");
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = /* @__PURE__ */ __name((fn2) => {
  useSyncExternalStoreWithSelector = fn2;
}, "initializeUseSelector");
const refEquality = /* @__PURE__ */ __name((a2, b2) => a2 === b2, "refEquality");
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
  return /* @__PURE__ */ __name(function useSelector2(selector, equalityFn = refEquality) {
    const {
      store,
      subscription,
      getServerState
    } = useReduxContext$1();
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store.getState, getServerState || store.getState, selector, equalityFn);
    react.exports.useDebugValue(selectedState);
    return selectedState;
  }, "useSelector");
}
__name(createSelectorHook, "createSelectorHook");
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b:
        switch (a2 = a2.type, a2) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a2;
              default:
                return r2;
            }
        }
      case c:
        return r2;
    }
  }
}
__name(v, "v");
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v(a2) === h;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v(a2) === g;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v(a2) === l;
};
reactIs_production_min.isFragment = function(a2) {
  return v(a2) === d;
};
reactIs_production_min.isLazy = function(a2) {
  return v(a2) === q;
};
reactIs_production_min.isMemo = function(a2) {
  return v(a2) === p;
};
reactIs_production_min.isPortal = function(a2) {
  return v(a2) === c;
};
reactIs_production_min.isProfiler = function(a2) {
  return v(a2) === f;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return v(a2) === m;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v(a2) === n;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d || a2 === f || a2 === e || a2 === m || a2 === n || a2 === t || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q || a2.$$typeof === p || a2.$$typeof === g || a2.$$typeof === h || a2.$$typeof === l || a2.$$typeof === u || void 0 !== a2.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v;
(function(module) {
  {
    module.exports = reactIs_production_min;
  }
})(reactIs);
function is(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || y2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
__name(is, "is");
function shallowEqual(objA, objB) {
  if (is(objA, objB))
    return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length)
    return false;
  for (let i2 = 0; i2 < keysA.length; i2++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i2]) || !is(objA[keysA[i2]], objB[keysA[i2]])) {
      return false;
    }
  }
  return true;
}
__name(shallowEqual, "shallowEqual");
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : () => react.exports.useContext(context);
  return /* @__PURE__ */ __name(function useStore2() {
    const {
      store
    } = useReduxContext$1();
    return store;
  }, "useStore");
}
__name(createStoreHook, "createStoreHook");
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = context === ReactReduxContext ? useStore : createStoreHook(context);
  return /* @__PURE__ */ __name(function useDispatch2() {
    const store = useStore$1();
    return store.dispatch;
  }, "useDispatch");
}
__name(createDispatchHook, "createDispatchHook");
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelector.exports.useSyncExternalStoreWithSelector);
setBatch(reactDom.exports.unstable_batchedUpdates);
var __spreadArray = globalThis && globalThis.__spreadArray || function(to, from) {
  for (var i2 = 0, il = from.length, j2 = to.length; i2 < il; i2++, j2++)
    to[j2] = from[i2];
  return to;
};
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = /* @__PURE__ */ __name(function(obj, key, value) {
  return key in obj ? __defProp2(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value
  }) : obj[key] = value;
}, "__defNormalProp");
var __spreadValues = /* @__PURE__ */ __name(function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
}, "__spreadValues");
var __spreadProps = /* @__PURE__ */ __name(function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
}, "__spreadProps");
function useStableQueryArgs(queryArgs, serialize, endpointDefinition, endpointName) {
  var incoming = react.exports.useMemo(function() {
    return {
      queryArgs,
      serialized: typeof queryArgs == "object" ? serialize({
        queryArgs,
        endpointDefinition,
        endpointName
      }) : queryArgs
    };
  }, [queryArgs, serialize, endpointDefinition, endpointName]);
  var cache2 = react.exports.useRef(incoming);
  react.exports.useEffect(function() {
    if (cache2.current.serialized !== incoming.serialized) {
      cache2.current = incoming;
    }
  }, [incoming]);
  return cache2.current.serialized === incoming.serialized ? cache2.current.queryArgs : queryArgs;
}
__name(useStableQueryArgs, "useStableQueryArgs");
var UNINITIALIZED_VALUE = Symbol();
function useShallowStableValue(value) {
  var cache2 = react.exports.useRef(value);
  react.exports.useEffect(function() {
    if (!shallowEqual(cache2.current, value)) {
      cache2.current = value;
    }
  }, [value]);
  return shallowEqual(cache2.current, value) ? cache2.current : value;
}
__name(useShallowStableValue, "useShallowStableValue");
var cache = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var defaultSerializeQueryArgs = /* @__PURE__ */ __name(function(_c) {
  var endpointName = _c.endpointName, queryArgs = _c.queryArgs;
  var serialized = "";
  var cached = cache == null ? void 0 : cache.get(queryArgs);
  if (typeof cached === "string") {
    serialized = cached;
  } else {
    var stringified = JSON.stringify(queryArgs, function(key, value) {
      return isPlainObject$1(value) ? Object.keys(value).sort().reduce(function(acc, key2) {
        acc[key2] = value[key2];
        return acc;
      }, {}) : value;
    });
    if (isPlainObject$1(queryArgs)) {
      cache == null ? void 0 : cache.set(queryArgs, stringified);
    }
    serialized = stringified;
  }
  return endpointName + "(" + serialized + ")";
}, "defaultSerializeQueryArgs");
var useIsomorphicLayoutEffect = typeof window !== "undefined" && !!window.document && !!window.document.createElement ? react.exports.useLayoutEffect : react.exports.useEffect;
var defaultMutationStateSelector = /* @__PURE__ */ __name(function(x2) {
  return x2;
}, "defaultMutationStateSelector");
var noPendingQueryStateSelector = /* @__PURE__ */ __name(function(selected) {
  if (selected.isUninitialized) {
    return __spreadProps(__spreadValues({}, selected), {
      isUninitialized: false,
      isFetching: true,
      isLoading: selected.data !== void 0 ? false : true,
      status: QueryStatus.pending
    });
  }
  return selected;
}, "noPendingQueryStateSelector");
function buildHooks(_c) {
  var api2 = _c.api, _d = _c.moduleOptions, batch2 = _d.batch, useDispatch2 = _d.useDispatch, useSelector2 = _d.useSelector, useStore2 = _d.useStore, unstable__sideEffectsInRender = _d.unstable__sideEffectsInRender, serializeQueryArgs = _c.serializeQueryArgs, context = _c.context;
  var usePossiblyImmediateEffect = unstable__sideEffectsInRender ? function(cb) {
    return cb();
  } : react.exports.useEffect;
  return {
    buildQueryHooks,
    buildMutationHook,
    usePrefetch
  };
  function queryStatePreSelector(currentState, lastResult, queryArgs) {
    if ((lastResult == null ? void 0 : lastResult.endpointName) && currentState.isUninitialized) {
      var endpointName = lastResult.endpointName;
      var endpointDefinition = context.endpointDefinitions[endpointName];
      if (serializeQueryArgs({
        queryArgs: lastResult.originalArgs,
        endpointDefinition,
        endpointName
      }) === serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      }))
        lastResult = void 0;
    }
    var data = currentState.isSuccess ? currentState.data : lastResult == null ? void 0 : lastResult.data;
    if (data === void 0)
      data = currentState.data;
    var hasData = data !== void 0;
    var isFetching = currentState.isLoading;
    var isLoading = !hasData && isFetching;
    var isSuccess = currentState.isSuccess || isFetching && hasData;
    return __spreadProps(__spreadValues({}, currentState), {
      data,
      currentData: currentState.data,
      isFetching,
      isLoading,
      isSuccess
    });
  }
  __name(queryStatePreSelector, "queryStatePreSelector");
  function usePrefetch(endpointName, defaultOptions) {
    var dispatch = useDispatch2();
    var stableDefaultOptions = useShallowStableValue(defaultOptions);
    return react.exports.useCallback(function(arg, options) {
      return dispatch(api2.util.prefetch(endpointName, arg, __spreadValues(__spreadValues({}, stableDefaultOptions), options)));
    }, [endpointName, dispatch, stableDefaultOptions]);
  }
  __name(usePrefetch, "usePrefetch");
  function buildQueryHooks(name) {
    var useQuerySubscription = /* @__PURE__ */ __name(function(arg, _c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, refetchOnReconnect = _d2.refetchOnReconnect, refetchOnFocus = _d2.refetchOnFocus, refetchOnMountOrArgChange = _d2.refetchOnMountOrArgChange, _e = _d2.skip, skip = _e === void 0 ? false : _e, _f = _d2.pollingInterval, pollingInterval = _f === void 0 ? 0 : _f;
      var initiate = api2.endpoints[name].initiate;
      var dispatch = useDispatch2();
      var stableArg = useStableQueryArgs(skip ? skipToken : arg, defaultSerializeQueryArgs, context.endpointDefinitions[name], name);
      var stableSubscriptionOptions = useShallowStableValue({
        refetchOnReconnect,
        refetchOnFocus,
        pollingInterval
      });
      var lastRenderHadSubscription = react.exports.useRef(false);
      var promiseRef = react.exports.useRef();
      var _g = promiseRef.current || {}, queryCacheKey = _g.queryCacheKey, requestId = _g.requestId;
      var currentRenderHasSubscription = false;
      if (queryCacheKey && requestId) {
        var returnedValue = dispatch(api2.internalActions.internal_probeSubscription({
          queryCacheKey,
          requestId
        }));
        currentRenderHasSubscription = !!returnedValue;
      }
      var subscriptionRemoved = !currentRenderHasSubscription && lastRenderHadSubscription.current;
      usePossiblyImmediateEffect(function() {
        lastRenderHadSubscription.current = currentRenderHasSubscription;
      });
      usePossiblyImmediateEffect(function() {
        if (subscriptionRemoved) {
          promiseRef.current = void 0;
        }
      }, [subscriptionRemoved]);
      usePossiblyImmediateEffect(function() {
        var _a;
        var lastPromise = promiseRef.current;
        if (typeof process !== "undefined" && false) {
          console.log(subscriptionRemoved);
        }
        if (stableArg === skipToken) {
          lastPromise == null ? void 0 : lastPromise.unsubscribe();
          promiseRef.current = void 0;
          return;
        }
        var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
        if (!lastPromise || lastPromise.arg !== stableArg) {
          lastPromise == null ? void 0 : lastPromise.unsubscribe();
          var promise2 = dispatch(initiate(stableArg, {
            subscriptionOptions: stableSubscriptionOptions,
            forceRefetch: refetchOnMountOrArgChange
          }));
          promiseRef.current = promise2;
        } else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
          lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
        }
      }, [dispatch, initiate, refetchOnMountOrArgChange, stableArg, stableSubscriptionOptions, subscriptionRemoved]);
      react.exports.useEffect(function() {
        return function() {
          var _a;
          (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
          promiseRef.current = void 0;
        };
      }, []);
      return react.exports.useMemo(function() {
        return {
          refetch: function() {
            var _a;
            if (!promiseRef.current)
              throw new Error("Cannot refetch a query that has not been started yet.");
            return (_a = promiseRef.current) == null ? void 0 : _a.refetch();
          }
        };
      }, []);
    }, "useQuerySubscription");
    var useLazyQuerySubscription = /* @__PURE__ */ __name(function(_c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, refetchOnReconnect = _d2.refetchOnReconnect, refetchOnFocus = _d2.refetchOnFocus, _e = _d2.pollingInterval, pollingInterval = _e === void 0 ? 0 : _e;
      var initiate = api2.endpoints[name].initiate;
      var dispatch = useDispatch2();
      var _f = react.exports.useState(UNINITIALIZED_VALUE), arg = _f[0], setArg = _f[1];
      var promiseRef = react.exports.useRef();
      var stableSubscriptionOptions = useShallowStableValue({
        refetchOnReconnect,
        refetchOnFocus,
        pollingInterval
      });
      usePossiblyImmediateEffect(function() {
        var _a, _b;
        var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
        if (stableSubscriptionOptions !== lastSubscriptionOptions) {
          (_b = promiseRef.current) == null ? void 0 : _b.updateSubscriptionOptions(stableSubscriptionOptions);
        }
      }, [stableSubscriptionOptions]);
      var subscriptionOptionsRef = react.exports.useRef(stableSubscriptionOptions);
      usePossiblyImmediateEffect(function() {
        subscriptionOptionsRef.current = stableSubscriptionOptions;
      }, [stableSubscriptionOptions]);
      var trigger = react.exports.useCallback(function(arg2, preferCacheValue) {
        if (preferCacheValue === void 0) {
          preferCacheValue = false;
        }
        var promise2;
        batch2(function() {
          var _a;
          (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
          promiseRef.current = promise2 = dispatch(initiate(arg2, {
            subscriptionOptions: subscriptionOptionsRef.current,
            forceRefetch: !preferCacheValue
          }));
          setArg(arg2);
        });
        return promise2;
      }, [dispatch, initiate]);
      react.exports.useEffect(function() {
        return function() {
          var _a;
          (_a = promiseRef == null ? void 0 : promiseRef.current) == null ? void 0 : _a.unsubscribe();
        };
      }, []);
      react.exports.useEffect(function() {
        if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
          trigger(arg, true);
        }
      }, [arg, trigger]);
      return react.exports.useMemo(function() {
        return [trigger, arg];
      }, [trigger, arg]);
    }, "useLazyQuerySubscription");
    var useQueryState = /* @__PURE__ */ __name(function(arg, _c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, _e = _d2.skip, skip = _e === void 0 ? false : _e, selectFromResult = _d2.selectFromResult;
      var select = api2.endpoints[name].select;
      var stableArg = useStableQueryArgs(skip ? skipToken : arg, serializeQueryArgs, context.endpointDefinitions[name], name);
      var lastValue = react.exports.useRef();
      var selectDefaultResult = react.exports.useMemo(function() {
        return createSelector([select(stableArg), function(_2, lastResult) {
          return lastResult;
        }, function(_2) {
          return stableArg;
        }], queryStatePreSelector);
      }, [select, stableArg]);
      var querySelector = react.exports.useMemo(function() {
        return selectFromResult ? createSelector([selectDefaultResult], selectFromResult) : selectDefaultResult;
      }, [selectDefaultResult, selectFromResult]);
      var currentState = useSelector2(function(state) {
        return querySelector(state, lastValue.current);
      }, shallowEqual);
      var store = useStore2();
      var newLastValue = selectDefaultResult(store.getState(), lastValue.current);
      useIsomorphicLayoutEffect(function() {
        lastValue.current = newLastValue;
      }, [newLastValue]);
      return currentState;
    }, "useQueryState");
    return {
      useQueryState,
      useQuerySubscription,
      useLazyQuerySubscription,
      useLazyQuery: function(options) {
        var _c2 = useLazyQuerySubscription(options), trigger = _c2[0], arg = _c2[1];
        var queryStateResults = useQueryState(arg, __spreadProps(__spreadValues({}, options), {
          skip: arg === UNINITIALIZED_VALUE
        }));
        var info = react.exports.useMemo(function() {
          return {
            lastArg: arg
          };
        }, [arg]);
        return react.exports.useMemo(function() {
          return [trigger, queryStateResults, info];
        }, [trigger, queryStateResults, info]);
      },
      useQuery: function(arg, options) {
        var querySubscriptionResults = useQuerySubscription(arg, options);
        var queryStateResults = useQueryState(arg, __spreadValues({
          selectFromResult: arg === skipToken || (options == null ? void 0 : options.skip) ? void 0 : noPendingQueryStateSelector
        }, options));
        var data = queryStateResults.data, status = queryStateResults.status, isLoading = queryStateResults.isLoading, isSuccess = queryStateResults.isSuccess, isError = queryStateResults.isError, error = queryStateResults.error;
        react.exports.useDebugValue({
          data,
          status,
          isLoading,
          isSuccess,
          isError,
          error
        });
        return react.exports.useMemo(function() {
          return __spreadValues(__spreadValues({}, queryStateResults), querySubscriptionResults);
        }, [queryStateResults, querySubscriptionResults]);
      }
    };
  }
  __name(buildQueryHooks, "buildQueryHooks");
  function buildMutationHook(name) {
    return function(_c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, _e = _d2.selectFromResult, selectFromResult = _e === void 0 ? defaultMutationStateSelector : _e, fixedCacheKey = _d2.fixedCacheKey;
      var _f = api2.endpoints[name], select = _f.select, initiate = _f.initiate;
      var dispatch = useDispatch2();
      var _g = react.exports.useState(), promise2 = _g[0], setPromise = _g[1];
      react.exports.useEffect(function() {
        return function() {
          if (!(promise2 == null ? void 0 : promise2.arg.fixedCacheKey)) {
            promise2 == null ? void 0 : promise2.reset();
          }
        };
      }, [promise2]);
      var triggerMutation = react.exports.useCallback(function(arg) {
        var promise22 = dispatch(initiate(arg, {
          fixedCacheKey
        }));
        setPromise(promise22);
        return promise22;
      }, [dispatch, initiate, fixedCacheKey]);
      var requestId = (promise2 || {}).requestId;
      var mutationSelector = react.exports.useMemo(function() {
        return createSelector([select({
          fixedCacheKey,
          requestId: promise2 == null ? void 0 : promise2.requestId
        })], selectFromResult);
      }, [select, promise2, selectFromResult, fixedCacheKey]);
      var currentState = useSelector2(mutationSelector, shallowEqual);
      var originalArgs = fixedCacheKey == null ? promise2 == null ? void 0 : promise2.arg.originalArgs : void 0;
      var reset = react.exports.useCallback(function() {
        batch2(function() {
          if (promise2) {
            setPromise(void 0);
          }
          if (fixedCacheKey) {
            dispatch(api2.internalActions.removeMutationResult({
              requestId,
              fixedCacheKey
            }));
          }
        });
      }, [dispatch, fixedCacheKey, promise2, requestId]);
      var endpointName = currentState.endpointName, data = currentState.data, status = currentState.status, isLoading = currentState.isLoading, isSuccess = currentState.isSuccess, isError = currentState.isError, error = currentState.error;
      react.exports.useDebugValue({
        endpointName,
        data,
        status,
        isLoading,
        isSuccess,
        isError,
        error
      });
      var finalState = react.exports.useMemo(function() {
        return __spreadProps(__spreadValues({}, currentState), {
          originalArgs,
          reset
        });
      }, [currentState, originalArgs, reset]);
      return react.exports.useMemo(function() {
        return [triggerMutation, finalState];
      }, [triggerMutation, finalState]);
    };
  }
  __name(buildMutationHook, "buildMutationHook");
}
__name(buildHooks, "buildHooks");
var DefinitionType;
(function(DefinitionType2) {
  DefinitionType2["query"] = "query";
  DefinitionType2["mutation"] = "mutation";
})(DefinitionType || (DefinitionType = {}));
function isQueryDefinition(e2) {
  return e2.type === DefinitionType.query;
}
__name(isQueryDefinition, "isQueryDefinition");
function isMutationDefinition(e2) {
  return e2.type === DefinitionType.mutation;
}
__name(isMutationDefinition, "isMutationDefinition");
function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
}
__name(capitalize, "capitalize");
function safeAssign(target) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  Object.assign.apply(Object, __spreadArray([target], args));
}
__name(safeAssign, "safeAssign");
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = /* @__PURE__ */ __name(function(_c) {
  var _d = _c === void 0 ? {} : _c, _e = _d.batch, batch2 = _e === void 0 ? reactDom.exports.unstable_batchedUpdates : _e, _f = _d.useDispatch, useDispatch$1 = _f === void 0 ? useDispatch : _f, _g = _d.useSelector, useSelector$1 = _g === void 0 ? useSelector : _g, _h = _d.useStore, useStore$1 = _h === void 0 ? useStore : _h, _j = _d.unstable__sideEffectsInRender, unstable__sideEffectsInRender = _j === void 0 ? false : _j;
  return {
    name: reactHooksModuleName,
    init: function(api2, _c2, context) {
      var serializeQueryArgs = _c2.serializeQueryArgs;
      var anyApi = api2;
      var _d2 = buildHooks({
        api: api2,
        moduleOptions: {
          batch: batch2,
          useDispatch: useDispatch$1,
          useSelector: useSelector$1,
          useStore: useStore$1,
          unstable__sideEffectsInRender
        },
        serializeQueryArgs,
        context
      }), buildQueryHooks = _d2.buildQueryHooks, buildMutationHook = _d2.buildMutationHook, usePrefetch = _d2.usePrefetch;
      safeAssign(anyApi, {
        usePrefetch
      });
      safeAssign(context, {
        batch: batch2
      });
      return {
        injectEndpoint: function(endpointName, definition) {
          if (isQueryDefinition(definition)) {
            var _c3 = buildQueryHooks(endpointName), useQuery = _c3.useQuery, useLazyQuery = _c3.useLazyQuery, useLazyQuerySubscription = _c3.useLazyQuerySubscription, useQueryState = _c3.useQueryState, useQuerySubscription = _c3.useQuerySubscription;
            safeAssign(anyApi.endpoints[endpointName], {
              useQuery,
              useLazyQuery,
              useLazyQuerySubscription,
              useQueryState,
              useQuerySubscription
            });
            api2["use" + capitalize(endpointName) + "Query"] = useQuery;
            api2["useLazy" + capitalize(endpointName) + "Query"] = useLazyQuery;
          } else if (isMutationDefinition(definition)) {
            var useMutation = buildMutationHook(endpointName);
            safeAssign(anyApi.endpoints[endpointName], {
              useMutation
            });
            api2["use" + capitalize(endpointName) + "Mutation"] = useMutation;
          }
        }
      };
    }
  };
}, "reactHooksModule");
var createApi = /* @__PURE__ */ buildCreateApi(coreModule(), reactHooksModule());
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    prepareHeaders(headers) {
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchPokemons: builder.query({
        query: (limit) => ({
          url: `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
        })
      }),
      fetchPokemonStats: builder.query({
        query: (url) => ({
          url: `${url}`
        })
      })
    };
  }
});
const { useFetchPokemonsQuery, useLazyFetchPokemonStatsQuery } = api;
const StyledContainer = newStyled(Container)``;
const TableHeading = newStyled(Box)`
  display: flex;
  justify-content: space-between;
`;
const StyledIcon = newStyled(Icon)`
  cursor: pointer;
`;
export {
  GlobalStyle as G,
  ReactReduxContext as R,
  StyledContainer as S,
  ThemeProvider as T,
  api as a,
  createStylesContext as b,
  configureStore as c,
  useLazyFetchPokemonStatsQuery as d,
  TableHeading as e,
  StyledIcon as f,
  getBatch as g,
  useFetchPokemonsQuery as u
};
