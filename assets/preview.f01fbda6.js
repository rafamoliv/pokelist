var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { q as __vitePreload } from "./iframe.16f10e94.js";
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
__name(asyncGeneratorStep, "asyncGeneratorStep");
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      __name(_next, "_next");
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      __name(_throw, "_throw");
      _next(void 0);
    });
  };
}
__name(_asyncToGenerator, "_asyncToGenerator");
var parameters = {
  docs: {
    getContainer: function() {
      var _getContainer = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee() {
        return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __vitePreload(() => import("./index.64c5d0bf.js").then((n) => n.E), true ? ["assets/index.64c5d0bf.js","assets/jsx-runtime.1846cd15.js","assets/iframe.16f10e94.js","assets/es.map.constructor.edb80200.js","assets/es.number.to-fixed.45361398.js","assets/index.31bee4a5.js","assets/string.c8a6e64c.js"] : void 0);
              case 2:
                return _context.abrupt("return", _context.sent.DocsContainer);
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, "_callee$"), _callee);
      }, "_callee")));
      function getContainer() {
        return _getContainer.apply(this, arguments);
      }
      __name(getContainer, "getContainer");
      return getContainer;
    }(),
    getPage: function() {
      var _getPage = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee2() {
        return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __vitePreload(() => import("./index.64c5d0bf.js").then((n) => n.E), true ? ["assets/index.64c5d0bf.js","assets/jsx-runtime.1846cd15.js","assets/iframe.16f10e94.js","assets/es.map.constructor.edb80200.js","assets/es.number.to-fixed.45361398.js","assets/index.31bee4a5.js","assets/string.c8a6e64c.js"] : void 0);
              case 2:
                return _context2.abrupt("return", _context2.sent.DocsPage);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, "_callee2$"), _callee2);
      }, "_callee2")));
      function getPage() {
        return _getPage.apply(this, arguments);
      }
      __name(getPage, "getPage");
      return getPage;
    }()
  }
};
export {
  parameters
};
