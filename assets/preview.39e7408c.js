var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { w as window_1, j as addons, S as STORY_CHANGED, r as SELECT_STORY } from "./iframe.16f10e94.js";
import { m as makeDecorator } from "./make-decorator.3a0fd474.js";
var PARAM_KEY = "links";
var document = window_1.document, HTMLElement = window_1.HTMLElement;
var navigate = /* @__PURE__ */ __name(function navigate2(params) {
  return addons.getChannel().emit(SELECT_STORY, params);
}, "navigate");
var linksListener = /* @__PURE__ */ __name(function linksListener2(e) {
  var target = e.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }
  var element = target;
  var _element$dataset = element.dataset, kind = _element$dataset.sbKind, story = _element$dataset.sbStory;
  if (kind || story) {
    e.preventDefault();
    navigate({
      kind,
      story
    });
  }
}, "linksListener");
var hasListener = false;
var on = /* @__PURE__ */ __name(function on2() {
  if (!hasListener) {
    hasListener = true;
    document.addEventListener("click", linksListener);
  }
}, "on");
var off = /* @__PURE__ */ __name(function off2() {
  if (hasListener) {
    hasListener = false;
    document.removeEventListener("click", linksListener);
  }
}, "off");
var withLinks = makeDecorator({
  name: "withLinks",
  parameterName: PARAM_KEY,
  wrapper: /* @__PURE__ */ __name(function wrapper(getStory, context) {
    on();
    addons.getChannel().once(STORY_CHANGED, off);
    return getStory(context);
  }, "wrapper")
});
if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
var decorators = [withLinks];
export {
  decorators
};
