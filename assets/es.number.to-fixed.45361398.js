var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { A as toString$1, B as requireObjectCoercible$1, C as toIntegerOrInfinity$2, p as _export, D as functionUncurryThis, E as fails$1, F as thisNumberValue$1 } from "./iframe.16f10e94.js";
var toIntegerOrInfinity$1 = toIntegerOrInfinity$2;
var toString = toString$1;
var requireObjectCoercible = requireObjectCoercible$1;
var $RangeError$1 = RangeError;
var stringRepeat = /* @__PURE__ */ __name(function repeat(count) {
  var str = toString(requireObjectCoercible(this));
  var result = "";
  var n = toIntegerOrInfinity$1(count);
  if (n < 0 || n == Infinity)
    throw $RangeError$1("Wrong number of repetitions");
  for (; n > 0; (n >>>= 1) && (str += str))
    if (n & 1)
      result += str;
  return result;
}, "repeat");
var $ = _export;
var uncurryThis = functionUncurryThis;
var toIntegerOrInfinity = toIntegerOrInfinity$2;
var thisNumberValue = thisNumberValue$1;
var $repeat = stringRepeat;
var fails = fails$1;
var $RangeError = RangeError;
var $String = String;
var floor = Math.floor;
var repeat2 = uncurryThis($repeat);
var stringSlice = uncurryThis("".slice);
var nativeToFixed = uncurryThis(1 .toFixed);
var pow = /* @__PURE__ */ __name(function(x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
}, "pow");
var log = /* @__PURE__ */ __name(function(x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  }
  return n;
}, "log");
var multiply = /* @__PURE__ */ __name(function(data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
}, "multiply");
var divide = /* @__PURE__ */ __name(function(data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = c % n * 1e7;
  }
}, "divide");
var dataToString = /* @__PURE__ */ __name(function(data) {
  var index = 6;
  var s = "";
  while (--index >= 0) {
    if (s !== "" || index === 0 || data[index] !== 0) {
      var t = $String(data[index]);
      s = s === "" ? t : s + repeat2("0", 7 - t.length) + t;
    }
  }
  return s;
}, "dataToString");
var FORCED = fails(function() {
  return nativeToFixed(8e-5, 3) !== "0.000" || nativeToFixed(0.9, 0) !== "1" || nativeToFixed(1.255, 2) !== "1.25" || nativeToFixed(1000000000000000100, 0) !== "1000000000000000128";
}) || !fails(function() {
  nativeToFixed({});
});
$({ target: "Number", proto: true, forced: FORCED }, {
  toFixed: /* @__PURE__ */ __name(function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toIntegerOrInfinity(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = "";
    var result = "0";
    var e, z, j, k;
    if (fractDigits < 0 || fractDigits > 20)
      throw $RangeError("Incorrect fraction digits");
    if (number != number)
      return "NaN";
    if (number <= -1e21 || number >= 1e21)
      return $String(number);
    if (number < 0) {
      sign = "-";
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 4503599627370496;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat2("0", fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits ? "0." + repeat2("0", fractDigits - k) + result : stringSlice(result, 0, k - fractDigits) + "." + stringSlice(result, k - fractDigits));
    } else {
      result = sign + result;
    }
    return result;
  }, "toFixed")
});
export {
  stringRepeat as s
};
