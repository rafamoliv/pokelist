var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { w as window_1, u as useEffect } from "./iframe.16f10e94.js";
import "./es.number.to-fixed.45361398.js";
function getDocumentWidthAndHeight() {
  var container = window_1.document.documentElement;
  var height = Math.max(container.scrollHeight, container.offsetHeight);
  var width = Math.max(container.scrollWidth, container.offsetWidth);
  return {
    width,
    height
  };
}
__name(getDocumentWidthAndHeight, "getDocumentWidthAndHeight");
function createCanvas() {
  var canvas = window_1.document.createElement("canvas");
  canvas.id = "storybook-addon-measure";
  var context = canvas.getContext("2d");
  var _getDocumentWidthAndH = getDocumentWidthAndHeight(), width = _getDocumentWidthAndH.width, height = _getDocumentWidthAndH.height;
  setCanvasWidthAndHeight(canvas, context, {
    width,
    height
  });
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.zIndex = "2147483647";
  canvas.style.pointerEvents = "none";
  window_1.document.body.appendChild(canvas);
  return {
    canvas,
    context,
    width,
    height
  };
}
__name(createCanvas, "createCanvas");
function setCanvasWidthAndHeight(canvas, context, _ref) {
  var width = _ref.width, height = _ref.height;
  canvas.style.width = "".concat(width, "px");
  canvas.style.height = "".concat(height, "px");
  var scale = window_1.window.devicePixelRatio;
  canvas.width = Math.floor(width * scale);
  canvas.height = Math.floor(height * scale);
  context.scale(scale, scale);
}
__name(setCanvasWidthAndHeight, "setCanvasWidthAndHeight");
var state = {};
function init() {
  if (!state.canvas) {
    state = createCanvas();
  }
}
__name(init, "init");
function clear() {
  if (state.context) {
    state.context.clearRect(0, 0, state.width, state.height);
  }
}
__name(clear, "clear");
function draw(callback) {
  clear();
  callback(state.context);
}
__name(draw, "draw");
function rescale() {
  setCanvasWidthAndHeight(state.canvas, state.context, {
    width: 0,
    height: 0
  });
  var _getDocumentWidthAndH2 = getDocumentWidthAndHeight(), width = _getDocumentWidthAndH2.width, height = _getDocumentWidthAndH2.height;
  setCanvasWidthAndHeight(state.canvas, state.context, {
    width,
    height
  });
  state.width = width;
  state.height = height;
}
__name(rescale, "rescale");
function destroy() {
  if (state.canvas) {
    clear();
    state.canvas.parentNode.removeChild(state.canvas);
    state = {};
  }
}
__name(destroy, "destroy");
var colors$1 = {
  margin: "#f6b26b",
  border: "#ffe599",
  padding: "#93c47d",
  content: "#6fa8dc",
  text: "#232020"
};
var labelPadding = 6;
function roundedRect(context, _ref) {
  var x = _ref.x, y = _ref.y, w = _ref.w, h = _ref.h, r = _ref.r;
  x = x - w / 2;
  y = y - h / 2;
  if (w < 2 * r)
    r = w / 2;
  if (h < 2 * r)
    r = h / 2;
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.closePath();
}
__name(roundedRect, "roundedRect");
function positionCoordinate(position, _ref2) {
  var padding = _ref2.padding, border = _ref2.border, width = _ref2.width, height = _ref2.height, top = _ref2.top, left = _ref2.left;
  var contentWidth = width - border.left - border.right - padding.left - padding.right;
  var contentHeight = height - padding.top - padding.bottom - border.top - border.bottom;
  var x = left + border.left + padding.left;
  var y = top + border.top + padding.top;
  if (position === "top") {
    x += contentWidth / 2;
  } else if (position === "right") {
    x += contentWidth;
    y += contentHeight / 2;
  } else if (position === "bottom") {
    x += contentWidth / 2;
    y += contentHeight;
  } else if (position === "left") {
    y += contentHeight / 2;
  } else if (position === "center") {
    x += contentWidth / 2;
    y += contentHeight / 2;
  }
  return {
    x,
    y
  };
}
__name(positionCoordinate, "positionCoordinate");
function offset(type, position, _ref3, labelPaddingSize, external) {
  var margin = _ref3.margin, border = _ref3.border, padding = _ref3.padding;
  var shift = /* @__PURE__ */ __name(function shift2(dir) {
    return 0;
  }, "shift");
  var offsetX = 0;
  var offsetY = 0;
  var locationMultiplier = external ? 1 : 0.5;
  var labelPaddingShift = external ? labelPaddingSize * 2 : 0;
  if (type === "padding") {
    shift = /* @__PURE__ */ __name(function shift2(dir) {
      return padding[dir] * locationMultiplier + labelPaddingShift;
    }, "shift");
  } else if (type === "border") {
    shift = /* @__PURE__ */ __name(function shift2(dir) {
      return padding[dir] + border[dir] * locationMultiplier + labelPaddingShift;
    }, "shift");
  } else if (type === "margin") {
    shift = /* @__PURE__ */ __name(function shift2(dir) {
      return padding[dir] + border[dir] + margin[dir] * locationMultiplier + labelPaddingShift;
    }, "shift");
  }
  if (position === "top") {
    offsetY = -shift("top");
  } else if (position === "right") {
    offsetX = shift("right");
  } else if (position === "bottom") {
    offsetY = shift("bottom");
  } else if (position === "left") {
    offsetX = -shift("left");
  }
  return {
    offsetX,
    offsetY
  };
}
__name(offset, "offset");
function collide(a, b) {
  return Math.abs(a.x - b.x) < Math.abs(a.w + b.w) / 2 && Math.abs(a.y - b.y) < Math.abs(a.h + b.h) / 2;
}
__name(collide, "collide");
function overlapAdjustment(position, currentRect, prevRect) {
  if (position === "top") {
    currentRect.y = prevRect.y - prevRect.h - labelPadding;
  } else if (position === "right") {
    currentRect.x = prevRect.x + prevRect.w / 2 + labelPadding + currentRect.w / 2;
  } else if (position === "bottom") {
    currentRect.y = prevRect.y + prevRect.h + labelPadding;
  } else if (position === "left") {
    currentRect.x = prevRect.x - prevRect.w / 2 - labelPadding - currentRect.w / 2;
  }
  return {
    x: currentRect.x,
    y: currentRect.y
  };
}
__name(overlapAdjustment, "overlapAdjustment");
function textWithRect(context, type, _ref4, text) {
  var x = _ref4.x, y = _ref4.y, w = _ref4.w, h = _ref4.h;
  roundedRect(context, {
    x,
    y,
    w,
    h,
    r: 3
  });
  context.fillStyle = "".concat(colors$1[type], "dd");
  context.fill();
  context.strokeStyle = colors$1[type];
  context.stroke();
  context.fillStyle = colors$1.text;
  context.fillText(text, x, y);
  roundedRect(context, {
    x,
    y,
    w,
    h,
    r: 3
  });
  context.fillStyle = "".concat(colors$1[type], "dd");
  context.fill();
  context.strokeStyle = colors$1[type];
  context.stroke();
  context.fillStyle = colors$1.text;
  context.fillText(text, x, y);
  return {
    x,
    y,
    w,
    h
  };
}
__name(textWithRect, "textWithRect");
function configureText(context, text) {
  context.font = "600 12px monospace";
  context.textBaseline = "middle";
  context.textAlign = "center";
  var metrics = context.measureText(text);
  var actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
  var w = metrics.width + labelPadding * 2;
  var h = actualHeight + labelPadding * 2;
  return {
    w,
    h
  };
}
__name(configureText, "configureText");
function drawLabel(context, measurements, _ref5, prevRect) {
  var type = _ref5.type, _ref5$position = _ref5.position, position = _ref5$position === void 0 ? "center" : _ref5$position, text = _ref5.text;
  var external = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var _positionCoordinate = positionCoordinate(position, measurements), x = _positionCoordinate.x, y = _positionCoordinate.y;
  var _offset = offset(type, position, measurements, labelPadding + 1, external), offsetX = _offset.offsetX, offsetY = _offset.offsetY;
  x += offsetX;
  y += offsetY;
  var _configureText = configureText(context, text), w = _configureText.w, h = _configureText.h;
  if (prevRect && collide({
    x,
    y,
    w,
    h
  }, prevRect)) {
    var adjusted = overlapAdjustment(position, {
      x,
      y,
      w,
      h
    }, prevRect);
    x = adjusted.x;
    y = adjusted.y;
  }
  return textWithRect(context, type, {
    x,
    y,
    w,
    h
  }, text);
}
__name(drawLabel, "drawLabel");
function floatingOffset(alignment, _ref6) {
  var w = _ref6.w, h = _ref6.h;
  var deltaW = w * 0.5 + labelPadding;
  var deltaH = h * 0.5 + labelPadding;
  return {
    offsetX: (alignment.x === "left" ? -1 : 1) * deltaW,
    offsetY: (alignment.y === "top" ? -1 : 1) * deltaH
  };
}
__name(floatingOffset, "floatingOffset");
function drawFloatingLabel(context, measurements, _ref7) {
  var type = _ref7.type, text = _ref7.text;
  var floatingAlignment2 = measurements.floatingAlignment, extremities = measurements.extremities;
  var x = extremities[floatingAlignment2.x];
  var y = extremities[floatingAlignment2.y];
  var _configureText2 = configureText(context, text), w = _configureText2.w, h = _configureText2.h;
  var _floatingOffset = floatingOffset(floatingAlignment2, {
    w,
    h
  }), offsetX = _floatingOffset.offsetX, offsetY = _floatingOffset.offsetY;
  x += offsetX;
  y += offsetY;
  return textWithRect(context, type, {
    x,
    y,
    w,
    h
  }, text);
}
__name(drawFloatingLabel, "drawFloatingLabel");
function drawStack(context, measurements, stack, external) {
  var rects = [];
  stack.forEach(function(l, idx) {
    var rect = external && l.position === "center" ? drawFloatingLabel(context, measurements, l) : drawLabel(context, measurements, l, rects[idx - 1], external);
    rects[idx] = rect;
  });
}
__name(drawStack, "drawStack");
function labelStacks(context, measurements, labels, externalLabels) {
  var stacks = labels.reduce(function(acc, l) {
    if (!Object.prototype.hasOwnProperty.call(acc, l.position)) {
      acc[l.position] = [];
    }
    acc[l.position].push(l);
    return acc;
  }, {});
  if (stacks.top) {
    drawStack(context, measurements, stacks.top, externalLabels);
  }
  if (stacks.right) {
    drawStack(context, measurements, stacks.right, externalLabels);
  }
  if (stacks.bottom) {
    drawStack(context, measurements, stacks.bottom, externalLabels);
  }
  if (stacks.left) {
    drawStack(context, measurements, stacks.left, externalLabels);
  }
  if (stacks.center) {
    drawStack(context, measurements, stacks.center, externalLabels);
  }
}
__name(labelStacks, "labelStacks");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
__name(_toConsumableArray, "_toConsumableArray");
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
__name(_nonIterableSpread, "_nonIterableSpread");
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
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
__name(_iterableToArray, "_iterableToArray");
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
__name(_arrayWithoutHoles, "_arrayWithoutHoles");
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
var colors = {
  margin: "#f6b26ba8",
  border: "#ffe599a8",
  padding: "#93c47d8c",
  content: "#6fa8dca8"
};
var SMALL_NODE_SIZE = 30;
function pxToNumber(px) {
  return parseInt(px.replace("px", ""), 10);
}
__name(pxToNumber, "pxToNumber");
function round(value) {
  return Number.isInteger(value) ? value : value.toFixed(2);
}
__name(round, "round");
function filterZeroValues(labels) {
  return labels.filter(function(l) {
    return l.text !== 0 && l.text !== "0";
  });
}
__name(filterZeroValues, "filterZeroValues");
function floatingAlignment(extremities) {
  var windowExtremities = {
    top: window_1.window.scrollY,
    bottom: window_1.window.scrollY + window_1.window.innerHeight,
    left: window_1.window.scrollX,
    right: window_1.window.scrollX + window_1.window.innerWidth
  };
  var distances = {
    top: Math.abs(windowExtremities.top - extremities.top),
    bottom: Math.abs(windowExtremities.bottom - extremities.bottom),
    left: Math.abs(windowExtremities.left - extremities.left),
    right: Math.abs(windowExtremities.right - extremities.right)
  };
  return {
    x: distances.left > distances.right ? "left" : "right",
    y: distances.top > distances.bottom ? "top" : "bottom"
  };
}
__name(floatingAlignment, "floatingAlignment");
function measureElement(element) {
  var style = window_1.getComputedStyle(element);
  var _element$getBoundingC = element.getBoundingClientRect(), top = _element$getBoundingC.top, left = _element$getBoundingC.left, right = _element$getBoundingC.right, bottom = _element$getBoundingC.bottom, width = _element$getBoundingC.width, height = _element$getBoundingC.height;
  var marginTop = style.marginTop, marginBottom = style.marginBottom, marginLeft = style.marginLeft, marginRight = style.marginRight, paddingTop = style.paddingTop, paddingBottom = style.paddingBottom, paddingLeft = style.paddingLeft, paddingRight = style.paddingRight, borderBottomWidth = style.borderBottomWidth, borderTopWidth = style.borderTopWidth, borderLeftWidth = style.borderLeftWidth, borderRightWidth = style.borderRightWidth;
  top = top + window_1.window.scrollY;
  left = left + window_1.window.scrollX;
  bottom = bottom + window_1.window.scrollY;
  right = right + window_1.window.scrollX;
  var margin = {
    top: pxToNumber(marginTop),
    bottom: pxToNumber(marginBottom),
    left: pxToNumber(marginLeft),
    right: pxToNumber(marginRight)
  };
  var padding = {
    top: pxToNumber(paddingTop),
    bottom: pxToNumber(paddingBottom),
    left: pxToNumber(paddingLeft),
    right: pxToNumber(paddingRight)
  };
  var border = {
    top: pxToNumber(borderTopWidth),
    bottom: pxToNumber(borderBottomWidth),
    left: pxToNumber(borderLeftWidth),
    right: pxToNumber(borderRightWidth)
  };
  var extremities = {
    top: top - margin.top,
    bottom: bottom + margin.bottom,
    left: left - margin.left,
    right: right + margin.right
  };
  return {
    margin,
    padding,
    border,
    top,
    left,
    bottom,
    right,
    width,
    height,
    extremities,
    floatingAlignment: floatingAlignment(extremities)
  };
}
__name(measureElement, "measureElement");
function drawMargin(context, _ref) {
  var margin = _ref.margin, width = _ref.width, height = _ref.height, top = _ref.top, left = _ref.left, bottom = _ref.bottom, right = _ref.right;
  var marginHeight = height + margin.bottom + margin.top;
  context.fillStyle = colors.margin;
  context.fillRect(left, top - margin.top, width, margin.top);
  context.fillRect(right, top - margin.top, margin.right, marginHeight);
  context.fillRect(left, bottom, width, margin.bottom);
  context.fillRect(left - margin.left, top - margin.top, margin.left, marginHeight);
  var marginLabels = [{
    type: "margin",
    text: round(margin.top),
    position: "top"
  }, {
    type: "margin",
    text: round(margin.right),
    position: "right"
  }, {
    type: "margin",
    text: round(margin.bottom),
    position: "bottom"
  }, {
    type: "margin",
    text: round(margin.left),
    position: "left"
  }];
  return filterZeroValues(marginLabels);
}
__name(drawMargin, "drawMargin");
function drawPadding(context, _ref2) {
  var padding = _ref2.padding, border = _ref2.border, width = _ref2.width, height = _ref2.height, top = _ref2.top, left = _ref2.left, bottom = _ref2.bottom, right = _ref2.right;
  var paddingWidth = width - border.left - border.right;
  var paddingHeight = height - padding.top - padding.bottom - border.top - border.bottom;
  context.fillStyle = colors.padding;
  context.fillRect(left + border.left, top + border.top, paddingWidth, padding.top);
  context.fillRect(right - padding.right - border.right, top + padding.top + border.top, padding.right, paddingHeight);
  context.fillRect(left + border.left, bottom - padding.bottom - border.bottom, paddingWidth, padding.bottom);
  context.fillRect(left + border.left, top + padding.top + border.top, padding.left, paddingHeight);
  var paddingLabels = [{
    type: "padding",
    text: padding.top,
    position: "top"
  }, {
    type: "padding",
    text: padding.right,
    position: "right"
  }, {
    type: "padding",
    text: padding.bottom,
    position: "bottom"
  }, {
    type: "padding",
    text: padding.left,
    position: "left"
  }];
  return filterZeroValues(paddingLabels);
}
__name(drawPadding, "drawPadding");
function drawBorder(context, _ref3) {
  var border = _ref3.border, width = _ref3.width, height = _ref3.height, top = _ref3.top, left = _ref3.left, bottom = _ref3.bottom, right = _ref3.right;
  var borderHeight = height - border.top - border.bottom;
  context.fillStyle = colors.border;
  context.fillRect(left, top, width, border.top);
  context.fillRect(left, bottom - border.bottom, width, border.bottom);
  context.fillRect(left, top + border.top, border.left, borderHeight);
  context.fillRect(right - border.right, top + border.top, border.right, borderHeight);
  var borderLabels = [{
    type: "border",
    text: border.top,
    position: "top"
  }, {
    type: "border",
    text: border.right,
    position: "right"
  }, {
    type: "border",
    text: border.bottom,
    position: "bottom"
  }, {
    type: "border",
    text: border.left,
    position: "left"
  }];
  return filterZeroValues(borderLabels);
}
__name(drawBorder, "drawBorder");
function drawContent(context, _ref4) {
  var padding = _ref4.padding, border = _ref4.border, width = _ref4.width, height = _ref4.height, top = _ref4.top, left = _ref4.left;
  var contentWidth = width - border.left - border.right - padding.left - padding.right;
  var contentHeight = height - padding.top - padding.bottom - border.top - border.bottom;
  context.fillStyle = colors.content;
  context.fillRect(left + border.left + padding.left, top + border.top + padding.top, contentWidth, contentHeight);
  return [{
    type: "content",
    position: "center",
    text: "".concat(round(contentWidth), " x ").concat(round(contentHeight))
  }];
}
__name(drawContent, "drawContent");
function drawBoxModel(element) {
  return function(context) {
    if (element && context) {
      var measurements = measureElement(element);
      var marginLabels = drawMargin(context, measurements);
      var paddingLabels = drawPadding(context, measurements);
      var borderLabels = drawBorder(context, measurements);
      var contentLabels = drawContent(context, measurements);
      var externalLabels = measurements.width <= SMALL_NODE_SIZE * 3 || measurements.height <= SMALL_NODE_SIZE;
      labelStacks(context, measurements, [].concat(_toConsumableArray(contentLabels), _toConsumableArray(paddingLabels), _toConsumableArray(borderLabels), _toConsumableArray(marginLabels)), externalLabels);
    }
  };
}
__name(drawBoxModel, "drawBoxModel");
function drawSelectedElement(element) {
  draw(drawBoxModel(element));
}
__name(drawSelectedElement, "drawSelectedElement");
var deepElementFromPoint = /* @__PURE__ */ __name(function deepElementFromPoint2(x, y) {
  var element = window_1.document.elementFromPoint(x, y);
  var crawlShadows = /* @__PURE__ */ __name(function crawlShadows2(node) {
    if (node && node.shadowRoot) {
      var nestedElement = node.shadowRoot.elementFromPoint(x, y);
      if (node.isEqualNode(nestedElement)) {
        return node;
      }
      if (nestedElement.shadowRoot) {
        return crawlShadows2(nestedElement);
      }
      return nestedElement;
    }
    return node;
  }, "crawlShadows");
  var shadowElement = crawlShadows(element);
  return shadowElement || element;
}, "deepElementFromPoint");
var nodeAtPointerRef;
var pointer = {
  x: 0,
  y: 0
};
function findAndDrawElement(x, y) {
  nodeAtPointerRef = deepElementFromPoint(x, y);
  drawSelectedElement(nodeAtPointerRef);
}
__name(findAndDrawElement, "findAndDrawElement");
var withMeasure = /* @__PURE__ */ __name(function withMeasure2(StoryFn, context) {
  var measureEnabled = context.globals.measureEnabled;
  useEffect(function() {
    var onMouseMove = /* @__PURE__ */ __name(function onMouseMove2(event) {
      window.requestAnimationFrame(function() {
        event.stopPropagation();
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      });
    }, "onMouseMove");
    document.addEventListener("mousemove", onMouseMove);
    return function() {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);
  useEffect(function() {
    var onMouseOver = /* @__PURE__ */ __name(function onMouseOver2(event) {
      window.requestAnimationFrame(function() {
        event.stopPropagation();
        findAndDrawElement(event.clientX, event.clientY);
      });
    }, "onMouseOver");
    var onResize = /* @__PURE__ */ __name(function onResize2() {
      window.requestAnimationFrame(function() {
        rescale();
      });
    }, "onResize");
    if (measureEnabled) {
      document.addEventListener("mouseover", onMouseOver);
      init();
      window.addEventListener("resize", onResize);
      findAndDrawElement(pointer.x, pointer.y);
    }
    return function() {
      window.removeEventListener("resize", onResize);
      destroy();
    };
  }, [measureEnabled]);
  return StoryFn();
}, "withMeasure");
var PARAM_KEY = "measureEnabled";
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
__name(_defineProperty, "_defineProperty");
var decorators = [withMeasure];
var globals = _defineProperty({}, PARAM_KEY, false);
export {
  decorators,
  globals
};
