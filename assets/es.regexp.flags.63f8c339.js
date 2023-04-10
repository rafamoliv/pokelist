var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { G as global$1, s as descriptors, a3 as defineBuiltInAccessor$1, ae as regexpFlags, E as fails$1 } from "./iframe.16f10e94.js";
var global = global$1;
var DESCRIPTORS = descriptors;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var regExpFlags = regexpFlags;
var fails = fails$1;
var RegExp = global.RegExp;
var RegExpPrototype = RegExp.prototype;
var FORCED = DESCRIPTORS && fails(function() {
  var INDICES_SUPPORT = true;
  try {
    RegExp(".", "d");
  } catch (error) {
    INDICES_SUPPORT = false;
  }
  var O = {};
  var calls = "";
  var expected = INDICES_SUPPORT ? "dgimsy" : "gimsy";
  var addGetter = /* @__PURE__ */ __name(function(key2, chr) {
    Object.defineProperty(O, key2, { get: function() {
      calls += chr;
      return true;
    } });
  }, "addGetter");
  var pairs = {
    dotAll: "s",
    global: "g",
    ignoreCase: "i",
    multiline: "m",
    sticky: "y"
  };
  if (INDICES_SUPPORT)
    pairs.hasIndices = "d";
  for (var key in pairs)
    addGetter(key, pairs[key]);
  var result = Object.getOwnPropertyDescriptor(RegExpPrototype, "flags").get.call(O);
  return result !== expected || calls !== expected;
});
if (FORCED)
  defineBuiltInAccessor(RegExpPrototype, "flags", {
    configurable: true,
    get: regExpFlags
  });
