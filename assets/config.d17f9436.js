var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { w as window_1, q as __vitePreload } from "./iframe.16f10e94.js";
import "./es.map.constructor.edb80200.js";
import { j as jsx, r as react } from "./jsx-runtime.1846cd15.js";
import { r as reactDom, R as ReactDOM } from "./index.b3810c98.js";
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
__name(_typeof, "_typeof");
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
__name(_classCallCheck, "_classCallCheck");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
__name(_defineProperties, "_defineProperties");
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
__name(_createClass, "_createClass");
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass)
    _setPrototypeOf(subClass, superClass);
}
__name(_inherits, "_inherits");
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || /* @__PURE__ */ __name(function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  }, "_setPrototypeOf");
  return _setPrototypeOf(o, p);
}
__name(_setPrototypeOf, "_setPrototypeOf");
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return /* @__PURE__ */ __name(function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  }, "_createSuperInternal");
}
__name(_createSuper, "_createSuper");
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
__name(_possibleConstructorReturn, "_possibleConstructorReturn");
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
__name(_assertThisInitialized, "_assertThisInitialized");
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct)
    return false;
  if (Reflect.construct.sham)
    return false;
  if (typeof Proxy === "function")
    return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}
__name(_isNativeReflectConstruct, "_isNativeReflectConstruct");
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : /* @__PURE__ */ __name(function _getPrototypeOf2(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, "_getPrototypeOf");
  return _getPrototypeOf(o);
}
__name(_getPrototypeOf, "_getPrototypeOf");
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
var FRAMEWORK_OPTIONS = window_1.FRAMEWORK_OPTIONS;
var nodes = /* @__PURE__ */ new Map();
var render = /* @__PURE__ */ __name(function render2(args, context) {
  var id = context.id, Component = context.component;
  if (!Component) {
    throw new Error("Unable to render story ".concat(id, " as the component annotation is missing from the default export"));
  }
  return /* @__PURE__ */ jsx(Component, {
    ...args
  });
}, "render");
var WithCallback = /* @__PURE__ */ __name(function WithCallback2(_ref) {
  var callback = _ref.callback, children = _ref.children;
  var once = react.exports.useRef();
  react.exports.useLayoutEffect(function() {
    if (once.current === callback)
      return;
    once.current = callback;
    callback();
  }, [callback]);
  return children;
}, "WithCallback");
var renderElement = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee(node, el) {
    var root;
    return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getReactRoot(el);
          case 2:
            root = _context.sent;
            return _context.abrupt("return", new Promise(function(resolve) {
              if (root) {
                root.render(
                  /* @__PURE__ */ jsx(WithCallback, {
                    callback: /* @__PURE__ */ __name(function callback() {
                      return resolve(null);
                    }, "callback"),
                    children: node
                  })
                );
              } else {
                ReactDOM.render(node, el, function() {
                  return resolve(null);
                });
              }
            }));
          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, "_callee$"), _callee);
  }, "_callee")));
  return /* @__PURE__ */ __name(function renderElement2(_x, _x2) {
    return _ref2.apply(this, arguments);
  }, "renderElement");
}();
var canUseNewReactRootApi = reactDom.exports.version && (reactDom.exports.version.startsWith("18") || reactDom.exports.version.startsWith("0.0.0"));
var shouldUseNewRootApi = (FRAMEWORK_OPTIONS === null || FRAMEWORK_OPTIONS === void 0 ? void 0 : FRAMEWORK_OPTIONS.legacyRootApi) !== true;
var isUsingNewReactRootApi = shouldUseNewRootApi && canUseNewReactRootApi;
var unmountElement = /* @__PURE__ */ __name(function unmountElement2(el) {
  var root = nodes.get(el);
  if (root && isUsingNewReactRootApi) {
    root.unmount();
    nodes.delete(el);
  } else {
    ReactDOM.unmountComponentAtNode(el);
  }
}, "unmountElement");
var getReactRoot = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee2(el) {
    var root, reactDomClient;
    return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (isUsingNewReactRootApi) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return", null);
          case 2:
            root = nodes.get(el);
            if (root) {
              _context2.next = 9;
              break;
            }
            _context2.next = 6;
            return __vitePreload(() => import("./client.3cede87a.js").then((n) => n.c), true ? ["assets/client.3cede87a.js","assets/index.b3810c98.js","assets/iframe.16f10e94.js","assets/jsx-runtime.1846cd15.js"] : void 0);
          case 6:
            reactDomClient = _context2.sent.default;
            root = reactDomClient.createRoot(el);
            nodes.set(el, root);
          case 9:
            return _context2.abrupt("return", root);
          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, "_callee2$"), _callee2);
  }, "_callee2")));
  return /* @__PURE__ */ __name(function getReactRoot2(_x3) {
    return _ref3.apply(this, arguments);
  }, "getReactRoot");
}();
var ErrorBoundary = /* @__PURE__ */ function(_ReactComponent) {
  _inherits(ErrorBoundary2, _ReactComponent);
  var _super = _createSuper(ErrorBoundary2);
  function ErrorBoundary2() {
    var _this;
    _classCallCheck(this, ErrorBoundary2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      hasError: false
    };
    return _this;
  }
  __name(ErrorBoundary2, "ErrorBoundary");
  _createClass(ErrorBoundary2, [{
    key: "componentDidMount",
    value: /* @__PURE__ */ __name(function componentDidMount() {
      var hasError = this.state.hasError;
      var showMain = this.props.showMain;
      if (!hasError) {
        showMain();
      }
    }, "componentDidMount")
  }, {
    key: "componentDidCatch",
    value: /* @__PURE__ */ __name(function componentDidCatch(err) {
      var showException = this.props.showException;
      showException(err);
    }, "componentDidCatch")
  }, {
    key: "render",
    value: /* @__PURE__ */ __name(function render3() {
      var hasError = this.state.hasError;
      var children = this.props.children;
      return hasError ? null : children;
    }, "render")
  }], [{
    key: "getDerivedStateFromError",
    value: /* @__PURE__ */ __name(function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }, "getDerivedStateFromError")
  }]);
  return ErrorBoundary2;
}(react.exports.Component);
var Wrapper = FRAMEWORK_OPTIONS !== null && FRAMEWORK_OPTIONS !== void 0 && FRAMEWORK_OPTIONS.strictMode ? react.exports.StrictMode : react.exports.Fragment;
function renderToDOM(_x4, _x5) {
  return _renderToDOM.apply(this, arguments);
}
__name(renderToDOM, "renderToDOM");
function _renderToDOM() {
  _renderToDOM = _asyncToGenerator(/* @__PURE__ */ regeneratorRuntime.mark(/* @__PURE__ */ __name(function _callee3(_ref4, domElement) {
    var storyContext, unboundStoryFn, showMain, showException, forceRemount, Story, content, element;
    return regeneratorRuntime.wrap(/* @__PURE__ */ __name(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            storyContext = _ref4.storyContext, unboundStoryFn = _ref4.unboundStoryFn, showMain = _ref4.showMain, showException = _ref4.showException, forceRemount = _ref4.forceRemount;
            Story = unboundStoryFn;
            content = /* @__PURE__ */ jsx(ErrorBoundary, {
              showMain,
              showException,
              children: /* @__PURE__ */ jsx(Story, {
                ...storyContext
              })
            });
            element = Wrapper ? /* @__PURE__ */ jsx(Wrapper, {
              children: content
            }) : content;
            if (forceRemount) {
              unmountElement(domElement);
            }
            _context3.next = 7;
            return renderElement(element, domElement);
          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, "_callee3$"), _callee3);
  }, "_callee3")));
  return _renderToDOM.apply(this, arguments);
}
__name(_renderToDOM, "_renderToDOM");
var parameters = {
  framework: "react"
};
export {
  parameters,
  render,
  renderToDOM
};
