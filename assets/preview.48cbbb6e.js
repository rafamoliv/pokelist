var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
import { w as window_1, j as addons, q as __vitePreload, S as STORY_CHANGED } from "./iframe.16f10e94.js";
var require_preview_48cbbb6e = __commonJS({
  "assets/preview.48cbbb6e.js"(exports, module) {
    var ADDON_ID = "storybook/a11y";
    var HIGHLIGHT_STYLE_ID = "a11yHighlight";
    var RESULT = "".concat(ADDON_ID, "/result");
    var REQUEST = "".concat(ADDON_ID, "/request");
    var RUNNING = "".concat(ADDON_ID, "/running");
    var ERROR = "".concat(ADDON_ID, "/error");
    var MANUAL = "".concat(ADDON_ID, "/manual");
    var HIGHLIGHT = "".concat(ADDON_ID, "/highlight");
    var EVENTS = {
      RESULT,
      REQUEST,
      RUNNING,
      ERROR,
      MANUAL,
      HIGHLIGHT
    };
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
    var document$1 = window_1.document, globalWindow = window_1.window;
    if (module && module.hot && module.hot.decline) {
      module.hot.decline();
    }
    var channel$1 = addons.getChannel();
    var active = false;
    var activeStoryId;
    var handleRequest = /* @__PURE__ */ function() {
      var _ref = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee(storyId) {
        var _yield$getParams, manual;
        return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getParams(storyId);
              case 2:
                _yield$getParams = _context.sent;
                manual = _yield$getParams.manual;
                if (manual) {
                  _context.next = 7;
                  break;
                }
                _context.next = 7;
                return run(storyId);
              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, "_callee$"), _callee);
      }, "_callee")));
      return /* @__PURE__ */ __name(function handleRequest2(_x) {
        return _ref.apply(this, arguments);
      }, "handleRequest");
    }();
    var run = /* @__PURE__ */ function() {
      var _ref2 = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee2(storyId) {
        var input, axe, _input$element, element, config, _input$options, options, htmlElement, result;
        return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                activeStoryId = storyId;
                _context2.prev = 1;
                _context2.next = 4;
                return getParams(storyId);
              case 4:
                input = _context2.sent;
                if (active) {
                  _context2.next = 19;
                  break;
                }
                active = true;
                channel$1.emit(EVENTS.RUNNING);
                _context2.next = 10;
                return __vitePreload(() => import("./axe.d416a643.js").then((n) => n.a), true ? ["assets/axe.d416a643.js","assets/iframe.16f10e94.js"] : void 0);
              case 10:
                axe = _context2.sent.default;
                _input$element = input.element, element = _input$element === void 0 ? "#root" : _input$element, config = input.config, _input$options = input.options, options = _input$options === void 0 ? {} : _input$options;
                htmlElement = document$1.querySelector(element);
                axe.reset();
                if (config) {
                  axe.configure(config);
                }
                _context2.next = 17;
                return axe.run(htmlElement, options);
              case 17:
                result = _context2.sent;
                if (activeStoryId === storyId) {
                  channel$1.emit(EVENTS.RESULT, result);
                } else {
                  active = false;
                  run(activeStoryId);
                }
              case 19:
                _context2.next = 24;
                break;
              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](1);
                channel$1.emit(EVENTS.ERROR, _context2.t0);
              case 24:
                _context2.prev = 24;
                active = false;
                return _context2.finish(24);
              case 27:
              case "end":
                return _context2.stop();
            }
          }
        }, "_callee2$"), _callee2, null, [[1, 21, 24, 27]]);
      }, "_callee2")));
      return /* @__PURE__ */ __name(function run2(_x2) {
        return _ref2.apply(this, arguments);
      }, "run");
    }();
    var getParams = /* @__PURE__ */ function() {
      var _ref3 = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee3(storyId) {
        var _ref4, parameters;
        return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return globalWindow.__STORYBOOK_STORY_STORE__.loadStory({
                  storyId
                });
              case 2:
                _context3.t0 = _context3.sent;
                if (_context3.t0) {
                  _context3.next = 5;
                  break;
                }
                _context3.t0 = {};
              case 5:
                _ref4 = _context3.t0;
                parameters = _ref4.parameters;
                return _context3.abrupt("return", parameters.a11y || {
                  config: {},
                  options: {
                    restoreScroll: true
                  }
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, "_callee3$"), _callee3);
      }, "_callee3")));
      return /* @__PURE__ */ __name(function getParams2(_x3) {
        return _ref3.apply(this, arguments);
      }, "getParams");
    }();
    channel$1.on(EVENTS.REQUEST, handleRequest);
    channel$1.on(EVENTS.MANUAL, run);
    var highlightStyle = /* @__PURE__ */ __name(function highlightStyle2(color) {
      return "\n  outline: 2px dashed ".concat(color, ";\n  outline-offset: 2px;\n  box-shadow: 0 0 0 6px rgba(255,255,255,0.6);\n");
    }, "highlightStyle");
    var document = window_1.document;
    if (module && module.hot && module.hot.decline) {
      module.hot.decline();
    }
    var channel = addons.getChannel();
    var highlight = /* @__PURE__ */ __name(function highlight2(infos) {
      var id = HIGHLIGHT_STYLE_ID;
      resetHighlight();
      var elements = Array.from(new Set(infos.elements));
      var sheet = document.createElement("style");
      sheet.setAttribute("id", id);
      sheet.innerHTML = elements.map(function(target) {
        return "".concat(target, "{\n          ").concat(highlightStyle(infos.color), "\n         }");
      }).join(" ");
      document.head.appendChild(sheet);
    }, "highlight");
    var resetHighlight = /* @__PURE__ */ __name(function resetHighlight2() {
      var id = HIGHLIGHT_STYLE_ID;
      var sheetToBeRemoved = document.getElementById(id);
      if (sheetToBeRemoved) {
        sheetToBeRemoved.parentNode.removeChild(sheetToBeRemoved);
      }
    }, "resetHighlight");
    channel.on(STORY_CHANGED, resetHighlight);
    channel.on(EVENTS.HIGHLIGHT, highlight);
  }
});
export default require_preview_48cbbb6e();
