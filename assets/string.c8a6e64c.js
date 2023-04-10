var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { p as _export } from "./iframe.16f10e94.js";
var $ = _export;
$({ target: "Number", stat: true }, {
  isNaN: /* @__PURE__ */ __name(function isNaN(number) {
    return number != number;
  }, "isNaN")
});
var str = /* @__PURE__ */ __name(function str2(obj) {
  if (!obj) {
    return "";
  }
  if (typeof obj === "string") {
    return obj;
  }
  throw new Error("Description: expected string, got: ".concat(JSON.stringify(obj)));
}, "str");
export {
  str as s
};
