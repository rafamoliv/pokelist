var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { p as _export, s as descriptors, t as ownKeys$1, v as toIndexedObject$1, x as createProperty$1, y as objectGetOwnPropertyDescriptor, c as commonjsGlobal, j as addons, k as browser, w as window_1, d as dedent, u as useEffect } from "./iframe.16f10e94.js";
import { m as makeDecorator } from "./make-decorator.3a0fd474.js";
var PARAM_KEY = "actions";
var ADDON_ID = "storybook/actions";
var EVENT_ID = "".concat(ADDON_ID, "/action-event");
var $ = _export;
var DESCRIPTORS = descriptors;
var ownKeys = ownKeys$1;
var toIndexedObject = toIndexedObject$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var createProperty = createProperty$1;
$({ target: "Object", stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: /* @__PURE__ */ __name(function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== void 0)
        createProperty(result, key, descriptor);
    }
    return result;
  }, "getOwnPropertyDescriptors")
});
var rng$1;
var crypto = typeof commonjsGlobal !== "undefined" && (commonjsGlobal.crypto || commonjsGlobal.msCrypto);
if (crypto && crypto.getRandomValues) {
  var rnds8 = new Uint8Array(16);
  rng$1 = /* @__PURE__ */ __name(function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  }, "whatwgRNG");
}
if (!rng$1) {
  var rnds = new Array(16);
  rng$1 = /* @__PURE__ */ __name(function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 3) === 0)
        r = Math.random() * 4294967296;
      rnds[i] = r >>> ((i & 3) << 3) & 255;
    }
    return rnds;
  }, "rng$1");
}
var rngBrowser = rng$1;
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 256).toString(16).substr(1);
}
function bytesToUuid$1(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + "-" + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}
__name(bytesToUuid$1, "bytesToUuid$1");
var bytesToUuid_1 = bytesToUuid$1;
var rng = rngBrowser;
var bytesToUuid = bytesToUuid_1;
function v4(options, buf, offset) {
  var i = buf && offset || 0;
  if (typeof options == "string") {
    buf = options == "binary" ? new Array(16) : null;
    options = null;
  }
  options = options || {};
  var rnds = options.random || (options.rng || rng)();
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }
  return buf || bytesToUuid(rnds);
}
__name(v4, "v4");
var v4_1 = v4;
var config = {
  depth: 10,
  clearOnStoryChange: true,
  limit: 50
};
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
__name(_typeof, "_typeof");
var findProto = /* @__PURE__ */ __name(function findProto2(obj, callback) {
  var proto = Object.getPrototypeOf(obj);
  if (!proto || callback(proto))
    return proto;
  return findProto2(proto, callback);
}, "findProto");
var isReactSyntheticEvent = /* @__PURE__ */ __name(function isReactSyntheticEvent2(e) {
  return Boolean(_typeof(e) === "object" && e && findProto(e, function(proto) {
    return /^Synthetic(?:Base)?Event$/.test(proto.constructor.name);
  }) && typeof e.persist === "function");
}, "isReactSyntheticEvent");
var serializeArg = /* @__PURE__ */ __name(function serializeArg2(a) {
  if (isReactSyntheticEvent(a)) {
    var e = Object.create(a.constructor.prototype, Object.getOwnPropertyDescriptors(a));
    e.persist();
    var viewDescriptor = Object.getOwnPropertyDescriptor(e, "view");
    var view = viewDescriptor === null || viewDescriptor === void 0 ? void 0 : viewDescriptor.value;
    if (_typeof(view) === "object" && (view === null || view === void 0 ? void 0 : view.constructor.name) === "Window") {
      Object.defineProperty(e, "view", Object.assign({}, viewDescriptor, {
        value: Object.create(view.constructor.prototype)
      }));
    }
    return e;
  }
  return a;
}, "serializeArg");
function action(name) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var actionOptions = Object.assign({}, config, options);
  var handler = /* @__PURE__ */ __name(function actionHandler() {
    var channel = addons.getChannel();
    var id = v4_1();
    var minDepth = 5;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serializedArgs = args.map(serializeArg);
    var normalizedArgs = args.length > 1 ? serializedArgs : serializedArgs[0];
    var actionDisplayToEmit = {
      id,
      count: 0,
      data: {
        name,
        args: normalizedArgs
      },
      options: Object.assign({}, actionOptions, {
        maxDepth: minDepth + (actionOptions.depth || 3),
        allowFunction: actionOptions.allowFunction || false
      })
    };
    channel.emit(EVENT_ID, actionDisplayToEmit);
  }, "actionHandler");
  return handler;
}
__name(action, "action");
function _slicedToArray$2(arr, i) {
  return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}
__name(_slicedToArray$2, "_slicedToArray$2");
function _nonIterableRest$2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableRest$2, "_nonIterableRest$2");
function _unsupportedIterableToArray$2(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$2(o, minLen);
}
__name(_unsupportedIterableToArray$2, "_unsupportedIterableToArray$2");
function _arrayLikeToArray$2(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
__name(_arrayLikeToArray$2, "_arrayLikeToArray$2");
function _iterableToArrayLimit$2(arr, i) {
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
      if (i && _arr.length === i)
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
__name(_iterableToArrayLimit$2, "_iterableToArrayLimit$2");
function _arrayWithHoles$2(arr) {
  if (Array.isArray(arr))
    return arr;
}
__name(_arrayWithHoles$2, "_arrayWithHoles$2");
var actions = /* @__PURE__ */ __name(function actions2() {
  var options = config;
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var names = args;
  if (names.length === 1 && Array.isArray(names[0])) {
    var _names = names;
    var _names2 = _slicedToArray$2(_names, 1);
    names = _names2[0];
  }
  if (names.length !== 1 && typeof names[names.length - 1] !== "string") {
    options = Object.assign({}, config, names.pop());
  }
  var namesObject = names[0];
  if (names.length !== 1 || typeof namesObject === "string") {
    namesObject = {};
    names.forEach(function(name) {
      namesObject[name] = name;
    });
  }
  var actionsObject = {};
  Object.keys(namesObject).forEach(function(name) {
    actionsObject[name] = action(namesObject[name], options);
  });
  return actionsObject;
}, "actions");
browser(function() {
}, "decorate.* is no longer supported as of Storybook 6.0.");
var _templateObject;
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
}
__name(_toConsumableArray, "_toConsumableArray");
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableSpread, "_nonIterableSpread");
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
__name(_iterableToArray, "_iterableToArray");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray$1(arr);
}
__name(_arrayWithoutHoles, "_arrayWithoutHoles");
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
__name(_taggedTemplateLiteral, "_taggedTemplateLiteral");
function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
__name(_slicedToArray$1, "_slicedToArray$1");
function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableRest$1, "_nonIterableRest$1");
function _unsupportedIterableToArray$1(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray$1(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray$1(o, minLen);
}
__name(_unsupportedIterableToArray$1, "_unsupportedIterableToArray$1");
function _arrayLikeToArray$1(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
__name(_arrayLikeToArray$1, "_arrayLikeToArray$1");
function _iterableToArrayLimit$1(arr, i) {
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
      if (i && _arr.length === i)
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
__name(_iterableToArrayLimit$1, "_iterableToArrayLimit$1");
function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr))
    return arr;
}
__name(_arrayWithHoles$1, "_arrayWithHoles$1");
var document = window_1.document, Element = window_1.Element;
var delegateEventSplitter = /^(\S+)\s*(.*)$/;
var isIE = Element != null && !Element.prototype.matches;
var matchesMethod = isIE ? "msMatchesSelector" : "matches";
var root = document && document.getElementById("root");
var hasMatchInAncestry = /* @__PURE__ */ __name(function hasMatchInAncestry2(element, selector) {
  if (element[matchesMethod](selector)) {
    return true;
  }
  var parent = element.parentElement;
  if (!parent) {
    return false;
  }
  return hasMatchInAncestry2(parent, selector);
}, "hasMatchInAncestry");
var createHandlers = /* @__PURE__ */ __name(function createHandlers2(actionsFn) {
  for (var _len = arguments.length, handles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    handles[_key - 1] = arguments[_key];
  }
  var actionsObject = actionsFn.apply(void 0, handles);
  return Object.entries(actionsObject).map(function(_ref) {
    var _ref2 = _slicedToArray$1(_ref, 2), key = _ref2[0], action2 = _ref2[1];
    var _key$match = key.match(delegateEventSplitter), _key$match2 = _slicedToArray$1(_key$match, 3);
    _key$match2[0];
    var eventName = _key$match2[1], selector = _key$match2[2];
    return {
      eventName,
      handler: /* @__PURE__ */ __name(function handler(e) {
        if (!selector || hasMatchInAncestry(e.target, selector)) {
          action2(e);
        }
      }, "handler")
    };
  });
}, "createHandlers");
var applyEventHandlers = browser(function(actionsFn) {
  for (var _len2 = arguments.length, handles = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    handles[_key2 - 1] = arguments[_key2];
  }
  useEffect(function() {
    if (root != null) {
      var handlers = createHandlers.apply(void 0, [actionsFn].concat(handles));
      handlers.forEach(function(_ref3) {
        var eventName = _ref3.eventName, handler = _ref3.handler;
        return root.addEventListener(eventName, handler);
      });
      return function() {
        return handlers.forEach(function(_ref4) {
          var eventName = _ref4.eventName, handler = _ref4.handler;
          return root.removeEventListener(eventName, handler);
        });
      };
    }
    return void 0;
  }, [root, actionsFn, handles]);
}, dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    withActions(options) is deprecated, please configure addon-actions using the addParameter api:\n\n    addParameters({\n      actions: {\n        handles: options\n      },\n    });\n  "]))));
var applyDeprecatedOptions = /* @__PURE__ */ __name(function applyDeprecatedOptions2(actionsFn, options) {
  if (options) {
    applyEventHandlers(actionsFn, options);
  }
}, "applyDeprecatedOptions");
var withActions = makeDecorator({
  name: "withActions",
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper: /* @__PURE__ */ __name(function wrapper(getStory, context, _ref5) {
    var parameters = _ref5.parameters, options = _ref5.options;
    applyDeprecatedOptions(actions, options);
    if (parameters && parameters.handles)
      applyEventHandlers.apply(void 0, [actions].concat(_toConsumableArray(parameters.handles)));
    return getStory(context);
  }, "wrapper")
});
if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
var decorators = [withActions];
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
function _iterableToArrayLimit(arr, i) {
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
      if (i && _arr.length === i)
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
var isInInitialArgs = /* @__PURE__ */ __name(function isInInitialArgs2(name, initialArgs) {
  return typeof initialArgs[name] === "undefined" && !(name in initialArgs);
}, "isInInitialArgs");
var inferActionsFromArgTypesRegex = /* @__PURE__ */ __name(function inferActionsFromArgTypesRegex2(context) {
  var initialArgs = context.initialArgs, argTypes = context.argTypes, actions3 = context.parameters.actions;
  if (!actions3 || actions3.disable || !actions3.argTypesRegex || !argTypes) {
    return {};
  }
  var argTypesRegex = new RegExp(actions3.argTypesRegex);
  var argTypesMatchingRegex = Object.entries(argTypes).filter(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), name = _ref2[0];
    return !!argTypesRegex.test(name);
  });
  return argTypesMatchingRegex.reduce(function(acc, _ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), name = _ref4[0];
    _ref4[1];
    if (isInInitialArgs(name, initialArgs)) {
      acc[name] = action(name);
    }
    return acc;
  }, {});
}, "inferActionsFromArgTypesRegex");
var addActionsFromArgTypes = /* @__PURE__ */ __name(function addActionsFromArgTypes2(context) {
  var initialArgs = context.initialArgs, argTypes = context.argTypes, actions3 = context.parameters.actions;
  if (actions3 !== null && actions3 !== void 0 && actions3.disable || !argTypes) {
    return {};
  }
  var argTypesWithAction = Object.entries(argTypes).filter(function(_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2);
    _ref6[0];
    var argType = _ref6[1];
    return !!argType.action;
  });
  return argTypesWithAction.reduce(function(acc, _ref7) {
    var _ref8 = _slicedToArray(_ref7, 2), name = _ref8[0], argType = _ref8[1];
    if (isInInitialArgs(name, initialArgs)) {
      acc[name] = action(typeof argType.action === "string" ? argType.action : name);
    }
    return acc;
  }, {});
}, "addActionsFromArgTypes");
var argsEnhancers = [addActionsFromArgTypes, inferActionsFromArgTypesRegex];
export {
  argsEnhancers,
  decorators
};
