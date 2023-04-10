var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { r as reactDom } from "./index.b3810c98.js";
function _mergeNamespaces(n, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
__name(_mergeNamespaces, "_mergeNamespaces");
var client$1 = {};
var hydrateRoot;
var createRoot;
var m = reactDom.exports;
{
  createRoot = client$1.createRoot = m.createRoot;
  hydrateRoot = client$1.hydrateRoot = m.hydrateRoot;
}
const client = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  get createRoot() {
    return createRoot;
  },
  get hydrateRoot() {
    return hydrateRoot;
  },
  default: client$1
}, [client$1]);
export {
  client as c
};
