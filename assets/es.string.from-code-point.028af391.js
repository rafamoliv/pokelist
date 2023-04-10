var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { p as _export, D as functionUncurryThis, T as toAbsoluteIndex$1 } from "./iframe.16f10e94.js";
var $ = _export;
var uncurryThis = functionUncurryThis;
var toAbsoluteIndex = toAbsoluteIndex$1;
var $RangeError = RangeError;
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;
var join = uncurryThis([].join);
var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;
$({ target: "String", stat: true, arity: 1, forced: INCORRECT_LENGTH }, {
  fromCodePoint: /* @__PURE__ */ __name(function fromCodePoint(x) {
    var elements = [];
    var length = arguments.length;
    var i = 0;
    var code;
    while (length > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 1114111) !== code)
        throw $RangeError(code + " is not a valid code point");
      elements[i] = code < 65536 ? fromCharCode(code) : fromCharCode(((code -= 65536) >> 10) + 55296, code % 1024 + 56320);
    }
    return join(elements, "");
  }, "fromCodePoint")
});
