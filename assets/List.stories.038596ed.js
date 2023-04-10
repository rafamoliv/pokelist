var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { j as jsx, r as react, a as jsxs } from "./jsx-runtime.1846cd15.js";
import { k as keyframes, L as Link } from "./index.8b3f396e.js";
import { b as createStylesContext, u as useFetchPokemonsQuery, d as useLazyFetchPokemonStatsQuery, S as StyledContainer, e as TableHeading, f as StyledIcon } from "./List.styles.dc61429f.js";
import { S as SystemPage } from "./SystemPage.ea405026.js";
import { c as createIcon, u as useTranslation, a as url, B as Button, H as Heading } from "./urls.593bf3cf.js";
import "./Loading.895aa625.js";
import { M as Modal } from "./Modal.a79adc81.js";
import { h as forwardRef, f as chakra, j as cx, o as omitThemingProps, k as useMultiStyleConfig, g as createContext, v as dataAttr, z as ariaAttr, w as callAllHandlers, A as callAllHandlers$1, B as layoutPropNames } from "./defineProperty.317be907.js";
import { m as mergeRefs } from "./index.46dda1c5.js";
import { B as Box, S as Stack, I as Image, H as HStack } from "./Section.7d097e59.js";
import "./iframe.16f10e94.js";
import "./emotion-styled.browser.esm.cceb3f76.js";
import "./index.b3810c98.js";
import "./index.733ac91e.js";
import "./index.0458719a.js";
import "./Footer.3aa5ff16.js";
import "./setPrototypeOf.08579ea5.js";
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
__name(canUseDOM, "canUseDOM");
var isBrowser = /* @__PURE__ */ canUseDOM();
var [CardStylesProvider, useCardStyles] = createStylesContext("Card");
var CardBody = forwardRef(/* @__PURE__ */ __name(function CardBody2(props, ref) {
  const { className, ...rest } = props;
  const styles = useCardStyles();
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      className: cx("chakra-card__body", className),
      __css: styles.body,
      ...rest
    }
  );
}, "CardBody2"));
var Card = forwardRef(/* @__PURE__ */ __name(function Card2(props, ref) {
  const {
    className,
    children,
    direction = "column",
    justify,
    align,
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Card", props);
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      className: cx("chakra-card", className),
      __css: {
        display: "flex",
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...styles.container
      },
      ...rest,
      children: /* @__PURE__ */ jsx(CardStylesProvider, { value: styles, children })
    }
  );
}, "Card2"));
var [FormControlStylesProvider, useFormControlStyles] = createContext({
  name: `FormControlStylesContext`,
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
});
var [FormControlProvider, useFormControlContext] = createContext({
  strict: false,
  name: "FormControlContext"
});
function useFormControlProvider(props) {
  const {
    id: idProp,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...htmlProps
  } = props;
  const uuid = react.exports.useId();
  const id = idProp || `field-${uuid}`;
  const labelId = `${id}-label`;
  const feedbackId = `${id}-feedback`;
  const helpTextId = `${id}-helptext`;
  const [hasFeedbackText, setHasFeedbackText] = react.exports.useState(false);
  const [hasHelpText, setHasHelpText] = react.exports.useState(false);
  const [isFocused, setFocus] = react.exports.useState(false);
  const getHelpTextProps = react.exports.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props2,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node)
          return;
        setHasHelpText(true);
      })
    }),
    [helpTextId]
  );
  const getLabelProps = react.exports.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      "data-focus": dataAttr(isFocused),
      "data-disabled": dataAttr(isDisabled),
      "data-invalid": dataAttr(isInvalid),
      "data-readonly": dataAttr(isReadOnly),
      id: props2.id !== void 0 ? props2.id : labelId,
      htmlFor: props2.htmlFor !== void 0 ? props2.htmlFor : id
    }),
    [id, isDisabled, isFocused, isInvalid, isReadOnly, labelId]
  );
  const getErrorMessageProps = react.exports.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props2,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node)
          return;
        setHasFeedbackText(true);
      }),
      "aria-live": "polite"
    }),
    [feedbackId]
  );
  const getRootProps = react.exports.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ...htmlProps,
      ref: forwardedRef,
      role: "group"
    }),
    [htmlProps]
  );
  const getRequiredIndicatorProps = react.exports.useCallback(
    (props2 = {}, forwardedRef = null) => ({
      ...props2,
      ref: forwardedRef,
      role: "presentation",
      "aria-hidden": true,
      children: props2.children || "*"
    }),
    []
  );
  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelpTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps
  };
}
__name(useFormControlProvider, "useFormControlProvider");
var FormControl = forwardRef(
  /* @__PURE__ */ __name(function FormControl2(props, ref) {
    const styles = useMultiStyleConfig("Form", props);
    const ownProps = omitThemingProps(props);
    const {
      getRootProps,
      htmlProps: _,
      ...context
    } = useFormControlProvider(ownProps);
    const className = cx("chakra-form-control", props.className);
    return /* @__PURE__ */ jsx(FormControlProvider, { value: context, children: /* @__PURE__ */ jsx(FormControlStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...getRootProps({}, ref),
        className,
        __css: styles["container"]
      }
    ) }) });
  }, "FormControl2")
);
FormControl.displayName = "FormControl";
var FormHelperText = forwardRef(
  /* @__PURE__ */ __name(function FormHelperText2(props, ref) {
    const field = useFormControlContext();
    const styles = useFormControlStyles();
    const className = cx("chakra-form__helper-text", props.className);
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ...field == null ? void 0 : field.getHelpTextProps(props, ref),
        __css: styles.helperText,
        className
      }
    );
  }, "FormHelperText2")
);
FormHelperText.displayName = "FormHelperText";
function useFormControl(props) {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } = useFormControlProps(props);
  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    "aria-invalid": ariaAttr(isInvalid),
    "aria-required": ariaAttr(isRequired),
    "aria-readonly": ariaAttr(isReadOnly)
  };
}
__name(useFormControl, "useFormControl");
function useFormControlProps(props) {
  var _a, _b, _c;
  const field = useFormControlContext();
  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus,
    onBlur,
    ...rest
  } = props;
  const labelIds = props["aria-describedby"] ? [props["aria-describedby"]] : [];
  if ((field == null ? void 0 : field.hasFeedbackText) && (field == null ? void 0 : field.isInvalid)) {
    labelIds.push(field.feedbackId);
  }
  if (field == null ? void 0 : field.hasHelpText) {
    labelIds.push(field.helpTextId);
  }
  return {
    ...rest,
    "aria-describedby": labelIds.join(" ") || void 0,
    id: id != null ? id : field == null ? void 0 : field.id,
    isDisabled: (_a = disabled != null ? disabled : isDisabled) != null ? _a : field == null ? void 0 : field.isDisabled,
    isReadOnly: (_b = readOnly != null ? readOnly : isReadOnly) != null ? _b : field == null ? void 0 : field.isReadOnly,
    isRequired: (_c = required != null ? required : isRequired) != null ? _c : field == null ? void 0 : field.isRequired,
    isInvalid: isInvalid != null ? isInvalid : field == null ? void 0 : field.isInvalid,
    onFocus: callAllHandlers(field == null ? void 0 : field.onFocus, onFocus),
    onBlur: callAllHandlers(field == null ? void 0 : field.onBlur, onBlur)
  };
}
__name(useFormControlProps, "useFormControlProps");
var useSafeLayoutEffect = isBrowser ? react.exports.useLayoutEffect : react.exports.useEffect;
function useCallbackRef(fn, deps = []) {
  const ref = react.exports.useRef(fn);
  useSafeLayoutEffect(() => {
    ref.current = fn;
  });
  return react.exports.useCallback((...args) => {
    var _a;
    return (_a = ref.current) == null ? void 0 : _a.call(ref, ...args);
  }, deps);
}
__name(useCallbackRef, "useCallbackRef");
function useId(idProp, prefix) {
  const id = react.exports.useId();
  return react.exports.useMemo(
    () => idProp || [prefix, id].filter(Boolean).join("-"),
    [idProp, prefix, id]
  );
}
__name(useId, "useId");
function useControllableProp(prop, state) {
  const isControlled = prop !== void 0;
  const value = isControlled && typeof prop !== "undefined" ? prop : state;
  return [isControlled, value];
}
__name(useControllableProp, "useControllableProp");
function useDisclosure(props = {}) {
  const {
    onClose: onCloseProp,
    onOpen: onOpenProp,
    isOpen: isOpenProp,
    id: idProp
  } = props;
  const onOpenPropCallbackRef = useCallbackRef(onOpenProp);
  const onClosePropCallbackRef = useCallbackRef(onCloseProp);
  const [isOpenState, setIsOpen] = react.exports.useState(props.defaultIsOpen || false);
  const [isControlled, isOpen] = useControllableProp(isOpenProp, isOpenState);
  const id = useId(idProp, "disclosure");
  const onClose = react.exports.useCallback(() => {
    if (!isControlled) {
      setIsOpen(false);
    }
    onClosePropCallbackRef == null ? void 0 : onClosePropCallbackRef();
  }, [isControlled, onClosePropCallbackRef]);
  const onOpen = react.exports.useCallback(() => {
    if (!isControlled) {
      setIsOpen(true);
    }
    onOpenPropCallbackRef == null ? void 0 : onOpenPropCallbackRef();
  }, [isControlled, onOpenPropCallbackRef]);
  const onToggle = react.exports.useCallback(() => {
    const action = isOpen ? onClose : onOpen;
    action();
  }, [isOpen, onOpen, onClose]);
  return {
    isOpen: !!isOpen,
    onOpen,
    onClose,
    onToggle,
    isControlled,
    getButtonProps: (props2 = {}) => ({
      ...props2,
      "aria-expanded": isOpen,
      "aria-controls": id,
      onClick: callAllHandlers$1(props2.onClick, onToggle)
    }),
    getDisclosureProps: (props2 = {}) => ({
      ...props2,
      hidden: !isOpen,
      id
    })
  };
}
__name(useDisclosure, "useDisclosure");
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}
__name(valueToPercent, "valueToPercent");
keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
});
keyframes({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
});
var progress = keyframes({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
});
var stripe = keyframes({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function getProgressProps(options) {
  const {
    value = 0,
    min,
    max,
    valueText,
    getValueText,
    isIndeterminate,
    role = "progressbar"
  } = options;
  const percent = valueToPercent(value, min, max);
  const getAriaValueText = /* @__PURE__ */ __name(() => {
    if (value == null)
      return void 0;
    return typeof getValueText === "function" ? getValueText(value, percent) : valueText;
  }, "getAriaValueText");
  return {
    bind: {
      "data-indeterminate": isIndeterminate ? "" : void 0,
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": isIndeterminate ? void 0 : value,
      "aria-valuetext": getAriaValueText(),
      role
    },
    percent,
    value
  };
}
__name(getProgressProps, "getProgressProps");
var [ProgressStylesProvider, useProgressStyles] = createContext({
  name: `ProgressStylesContext`,
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
});
var ProgressFilledTrack = forwardRef(
  (props, ref) => {
    const { min, max, value, isIndeterminate, role, ...rest } = props;
    const progress2 = getProgressProps({
      value,
      min,
      max,
      isIndeterminate,
      role
    });
    const styles = useProgressStyles();
    const trackStyles = {
      height: "100%",
      ...styles.filledTrack
    };
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        style: { width: `${progress2.percent}%`, ...rest.style },
        ...progress2.bind,
        ...rest,
        __css: trackStyles
      }
    );
  }
);
var Progress = forwardRef((props, ref) => {
  var _a;
  const {
    value,
    min = 0,
    max = 100,
    hasStripe,
    isAnimated,
    children,
    borderRadius: propBorderRadius,
    isIndeterminate,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-valuetext": ariaValueText,
    title,
    role,
    ...rest
  } = omitThemingProps(props);
  const styles = useMultiStyleConfig("Progress", props);
  const borderRadius = propBorderRadius != null ? propBorderRadius : (_a = styles.track) == null ? void 0 : _a.borderRadius;
  const stripeAnimation = { animation: `${stripe} 1s linear infinite` };
  const shouldAddStripe = !isIndeterminate && hasStripe;
  const shouldAnimateStripe = shouldAddStripe && isAnimated;
  const css = {
    ...shouldAnimateStripe && stripeAnimation,
    ...isIndeterminate && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${progress} 1s ease infinite normal none running`
    }
  };
  const trackStyles = {
    overflow: "hidden",
    position: "relative",
    ...styles.track
  };
  return /* @__PURE__ */ jsx(
    chakra.div,
    {
      ref,
      borderRadius,
      __css: trackStyles,
      ...rest,
      children: /* @__PURE__ */ jsxs(ProgressStylesProvider, { value: styles, children: [
        /* @__PURE__ */ jsx(
          ProgressFilledTrack,
          {
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            "aria-valuetext": ariaValueText,
            min,
            max,
            value,
            isIndeterminate,
            css,
            borderRadius,
            title,
            role
          }
        ),
        children
      ] })
    }
  );
});
Progress.displayName = "Progress";
var SelectField = forwardRef(
  /* @__PURE__ */ __name(function SelectField2(props, ref) {
    const { children, placeholder, className, ...rest } = props;
    return /* @__PURE__ */ jsxs(
      chakra.select,
      {
        ...rest,
        ref,
        className: cx("chakra-select", className),
        children: [
          placeholder && /* @__PURE__ */ jsx("option", { value: "", children: placeholder }),
          children
        ]
      }
    );
  }, "SelectField2")
);
SelectField.displayName = "SelectField";
function split(object, keys) {
  const picked = {};
  const omitted = {};
  for (const [key, value] of Object.entries(object)) {
    if (keys.includes(key))
      picked[key] = value;
    else
      omitted[key] = value;
  }
  return [picked, omitted];
}
__name(split, "split");
var Select = forwardRef((props, ref) => {
  var _a;
  const styles = useMultiStyleConfig("Select", props);
  const {
    rootProps,
    placeholder,
    icon,
    color,
    height,
    h,
    minH,
    minHeight,
    iconColor,
    iconSize,
    ...rest
  } = omitThemingProps(props);
  const [layoutProps, otherProps] = split(rest, layoutPropNames);
  const ownProps = useFormControl(otherProps);
  const rootStyles = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color
  };
  const fieldStyles = {
    paddingEnd: "2rem",
    ...styles.field,
    _focus: {
      zIndex: "unset",
      ...(_a = styles.field) == null ? void 0 : _a["_focus"]
    }
  };
  return /* @__PURE__ */ jsxs(
    chakra.div,
    {
      className: "chakra-select__wrapper",
      __css: rootStyles,
      ...layoutProps,
      ...rootProps,
      children: [
        /* @__PURE__ */ jsx(
          SelectField,
          {
            ref,
            height: h != null ? h : height,
            minH: minH != null ? minH : minHeight,
            placeholder,
            ...ownProps,
            __css: fieldStyles,
            children: props.children
          }
        ),
        /* @__PURE__ */ jsx(
          SelectIcon,
          {
            "data-disabled": dataAttr(ownProps.disabled),
            ...(iconColor || color) && { color: iconColor || color },
            __css: styles.icon,
            ...iconSize && { fontSize: iconSize },
            children: icon
          }
        )
      ]
    }
  );
});
Select.displayName = "Select";
var DefaultIcon = /* @__PURE__ */ __name((props) => /* @__PURE__ */ jsx("svg", { viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ jsx(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) }), "DefaultIcon");
var IconWrapper = chakra("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
});
var SelectIcon = /* @__PURE__ */ __name((props) => {
  const { children = /* @__PURE__ */ jsx(DefaultIcon, {}), ...rest } = props;
  const clone = react.exports.cloneElement(children, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: false,
    "aria-hidden": true,
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return /* @__PURE__ */ jsx(IconWrapper, { ...rest, className: "chakra-select__icon-wrapper", children: react.exports.isValidElement(children) ? clone : null });
}, "SelectIcon");
SelectIcon.displayName = "SelectIcon";
var [TableStylesProvider, useTableStyles] = createContext({
  name: `TableStylesContext`,
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
});
var Table = forwardRef((props, ref) => {
  const styles = useMultiStyleConfig("Table", props);
  const { className, layout, ...tableProps } = omitThemingProps(props);
  return /* @__PURE__ */ jsx(TableStylesProvider, { value: styles, children: /* @__PURE__ */ jsx(
    chakra.table,
    {
      ref,
      __css: { tableLayout: layout, ...styles.table },
      className: cx("chakra-table", className),
      ...tableProps
    }
  ) });
});
Table.displayName = "Table";
var Thead = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.thead, { ...props, ref, __css: styles.thead });
});
var Tr = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.tr, { ...props, ref, __css: styles.tr });
});
var TableCaption = forwardRef(
  (props, ref) => {
    const { placement = "bottom", ...rest } = props;
    const styles = useTableStyles();
    return /* @__PURE__ */ jsx(
      chakra.caption,
      {
        ...rest,
        ref,
        __css: {
          ...styles.caption,
          captionSide: placement
        }
      }
    );
  }
);
TableCaption.displayName = "TableCaption";
var TableContainer = forwardRef(
  (props, ref) => {
    var _a;
    const { overflow, overflowX, className, ...rest } = props;
    return /* @__PURE__ */ jsx(
      chakra.div,
      {
        ref,
        className: cx("chakra-table__container", className),
        ...rest,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: (_a = overflow != null ? overflow : overflowX) != null ? _a : "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
);
var Tbody = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.tbody, { ...props, ref, __css: styles.tbody });
});
var Td = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsx(
      chakra.td,
      {
        ...rest,
        ref,
        __css: styles.td,
        "data-is-numeric": isNumeric
      }
    );
  }
);
var Tfoot = forwardRef((props, ref) => {
  const styles = useTableStyles();
  return /* @__PURE__ */ jsx(chakra.tfoot, { ...props, ref, __css: styles.tfoot });
});
var Th = forwardRef(
  ({ isNumeric, ...rest }, ref) => {
    const styles = useTableStyles();
    return /* @__PURE__ */ jsx(
      chakra.th,
      {
        ...rest,
        ref,
        __css: styles.th,
        "data-is-numeric": isNumeric
      }
    );
  }
);
var StarIcon = createIcon({
  d: "M23.555,8.729a1.505,1.505,0,0,0-1.406-.98H16.062a.5.5,0,0,1-.472-.334L13.405,1.222a1.5,1.5,0,0,0-2.81,0l-.005.016L8.41,7.415a.5.5,0,0,1-.471.334H1.85A1.5,1.5,0,0,0,.887,10.4l5.184,4.3a.5.5,0,0,1,.155.543L4.048,21.774a1.5,1.5,0,0,0,2.31,1.684l5.346-3.92a.5.5,0,0,1,.591,0l5.344,3.919a1.5,1.5,0,0,0,2.312-1.683l-2.178-6.535a.5.5,0,0,1,.155-.543l5.194-4.306A1.5,1.5,0,0,0,23.555,8.729Z",
  displayName: "StarIcon"
});
var ArrowBackIcon = createIcon({
  d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  displayName: "ArrowBackIcon"
});
var ArrowRightIcon = createIcon({
  displayName: "ArrowRightIcon",
  path: /* @__PURE__ */ jsxs("g", { fill: "currentColor", children: [
    /* @__PURE__ */ jsx("path", { d: "M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z" }),
    /* @__PURE__ */ jsx("path", { d: "M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z" })
  ] })
});
const useLocalStorage = /* @__PURE__ */ __name((key, value) => {
  const { localStorage } = window;
  const [storedValue, setStoredValue] = react.exports.useState(() => {
    if (typeof window === "undefined") {
      return value;
    }
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (error) {
      console.log(error);
      return value;
    }
  });
  const setValue = /* @__PURE__ */ __name((val) => {
    try {
      const valueToStore = val instanceof Function ? val(storedValue) : val;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  }, "setValue");
  return [storedValue, setValue];
}, "useLocalStorage");
const List = /* @__PURE__ */ __name(() => {
  var _a, _b, _c;
  const {
    t
  } = useTranslation("pgList");
  const [favorite, setFavorite] = useLocalStorage("favorite", [""]);
  const [pokeLimit, setPokeLimit] = react.exports.useState("10");
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const {
    data: pokeList = []
  } = useFetchPokemonsQuery(pokeLimit);
  const [pokeStatsTrigger, {
    data: pokeStats = [],
    isFetching: isFetchingPokeStats
  }] = useLazyFetchPokemonStatsQuery();
  const [teste, setTeste] = react.exports.useState(false);
  const handlePokeModalStats = /* @__PURE__ */ __name((url2) => {
    onOpen();
    pokeStatsTrigger(url2);
  }, "handlePokeModalStats");
  const takeFavoritePoke = /* @__PURE__ */ __name((poke) => {
    let index = favorite.indexOf(poke);
    if (index !== -1) {
      favorite.splice(index, 1);
      setFavorite(favorite);
    } else {
      setFavorite([...favorite, poke]);
    }
    setTeste(!teste);
  }, "takeFavoritePoke");
  return /* @__PURE__ */ jsx(SystemPage.Root, {
    children: /* @__PURE__ */ jsx("section", {
      children: /* @__PURE__ */ jsxs(StyledContainer, {
        maxW: "container.xl",
        children: [/* @__PURE__ */ jsx(Box, {
          paddingTop: 4,
          children: /* @__PURE__ */ jsx(Link, {
            to: url.HOME,
            children: /* @__PURE__ */ jsx(Button, {
              leftIcon: /* @__PURE__ */ jsx(ArrowBackIcon, {}),
              colorScheme: "whiteAlpha",
              size: "sm",
              variant: "outline",
              children: t("btn", {
                context: "back"
              })
            })
          })
        }), /* @__PURE__ */ jsx(Box, {
          paddingBottom: 8,
          paddingTop: 8,
          children: /* @__PURE__ */ jsxs(Stack, {
            spacing: 4,
            children: [/* @__PURE__ */ jsxs(TableHeading, {
              children: [/* @__PURE__ */ jsx(Heading, {
                as: "h3",
                color: "white",
                size: "xl",
                noOfLines: 1,
                children: t("table.title")
              }), /* @__PURE__ */ jsx(Box, {
                children: /* @__PURE__ */ jsxs(Select, {
                  onChange: (e) => setPokeLimit(e.target.value),
                  size: "md",
                  value: pokeLimit,
                  variant: "Filled",
                  children: [/* @__PURE__ */ jsx("option", {
                    value: "10",
                    children: "10"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "20",
                    children: "20"
                  }), /* @__PURE__ */ jsx("option", {
                    value: "30",
                    children: "30"
                  })]
                })
              })]
            }), /* @__PURE__ */ jsx(TableContainer, {
              color: "white",
              children: /* @__PURE__ */ jsxs(Table, {
                size: "sm",
                variant: "simple",
                colorScheme: "whiteAlpha",
                children: [/* @__PURE__ */ jsx(TableCaption, {
                  children: t("table.caption")
                }), /* @__PURE__ */ jsx(Thead, {
                  children: /* @__PURE__ */ jsxs(Tr, {
                    children: [/* @__PURE__ */ jsx(Th, {
                      children: t("table.head.0")
                    }), /* @__PURE__ */ jsx(Th, {
                      textAlign: "center",
                      width: "15%",
                      children: t("table.head.1")
                    }), /* @__PURE__ */ jsx(Th, {
                      textAlign: "center",
                      width: "15%",
                      children: t("table.head.2")
                    })]
                  })
                }), /* @__PURE__ */ jsx(Tbody, {
                  children: (_a = pokeList == null ? void 0 : pokeList.results) == null ? void 0 : _a.map((poke, index) => /* @__PURE__ */ jsxs(Tr, {
                    children: [/* @__PURE__ */ jsx(Td, {
                      children: poke == null ? void 0 : poke.name
                    }), /* @__PURE__ */ jsx(Td, {
                      textAlign: "center",
                      children: /* @__PURE__ */ jsx(StyledIcon, {
                        as: StarIcon,
                        color: favorite.indexOf(poke == null ? void 0 : poke.name) !== -1 ? "yellow" : "gray.300",
                        onClick: () => takeFavoritePoke(poke == null ? void 0 : poke.name)
                      })
                    }), /* @__PURE__ */ jsx(Td, {
                      textAlign: "center",
                      children: /* @__PURE__ */ jsx(Button, {
                        border: "none",
                        colorScheme: "whiteAlpha",
                        isLoading: isOpen,
                        onClick: () => handlePokeModalStats(poke == null ? void 0 : poke.url),
                        rightIcon: /* @__PURE__ */ jsx(ArrowRightIcon, {}),
                        variant: "outline"
                      })
                    })]
                  }, index))
                }), /* @__PURE__ */ jsx(Tfoot, {
                  children: /* @__PURE__ */ jsxs(Tr, {
                    children: [/* @__PURE__ */ jsx(Th, {
                      children: t("table.head.0")
                    }), /* @__PURE__ */ jsx(Th, {
                      textAlign: "center",
                      children: t("table.head.1")
                    }), /* @__PURE__ */ jsx(Th, {
                      textAlign: "center",
                      children: t("table.head.2")
                    })]
                  })
                })]
              })
            })]
          })
        }), /* @__PURE__ */ jsxs(Modal.Root, {
          loading: isFetchingPokeStats,
          isOpen,
          onClose,
          children: [/* @__PURE__ */ jsx(Modal.Body, {
            children: /* @__PURE__ */ jsx(Card, {
              maxW: "sm",
              variant: "unstyled",
              children: /* @__PURE__ */ jsxs(CardBody, {
                children: [/* @__PURE__ */ jsx(Image, {
                  src: (_b = pokeStats == null ? void 0 : pokeStats.sprites) == null ? void 0 : _b.front_default,
                  alt: pokeStats == null ? void 0 : pokeStats.name,
                  borderRadius: "lg",
                  margin: "auto"
                }), /* @__PURE__ */ jsx(Heading, {
                  size: "md",
                  children: pokeStats == null ? void 0 : pokeStats.name
                }), /* @__PURE__ */ jsx(TableContainer, {
                  children: /* @__PURE__ */ jsx(Table, {
                    variant: "simple",
                    children: /* @__PURE__ */ jsx(Tbody, {
                      children: (_c = pokeStats == null ? void 0 : pokeStats.stats) == null ? void 0 : _c.map((stats, index) => {
                        var _a2;
                        return /* @__PURE__ */ jsxs(Tr, {
                          children: [/* @__PURE__ */ jsx(Td, {
                            width: "30%",
                            children: (_a2 = stats == null ? void 0 : stats.stat) == null ? void 0 : _a2.name
                          }), /* @__PURE__ */ jsx(Td, {
                            width: "10%",
                            children: stats == null ? void 0 : stats.base_stat
                          }), /* @__PURE__ */ jsx(Td, {
                            width: "60%",
                            children: /* @__PURE__ */ jsx(Progress, {
                              colorScheme: "blackAlpha",
                              hasStripe: true,
                              value: stats == null ? void 0 : stats.base_stat
                            })
                          })]
                        }, index);
                      })
                    })
                  })
                })]
              })
            })
          }), /* @__PURE__ */ jsx(Modal.Footer, {
            children: /* @__PURE__ */ jsxs(HStack, {
              spacing: 4,
              children: [/* @__PURE__ */ jsx(StyledIcon, {
                as: StarIcon,
                color: favorite.indexOf(pokeStats == null ? void 0 : pokeStats.name) !== -1 ? "yellow.400" : "gray.700",
                onClick: () => takeFavoritePoke(pokeStats == null ? void 0 : pokeStats.name)
              }), /* @__PURE__ */ jsx(Button, {
                colorScheme: "blackAlpha",
                mr: 3,
                onClick: onClose,
                children: t("modal.btn", {
                  context: "close"
                })
              })]
            })
          })]
        })]
      })
    })
  });
}, "List");
const List_stories = {
  parameters: {
    "storySource": {
      "source": "import { Story } from '@storybook/react'\r\n\r\nimport List from './List'\r\n\r\nexport default {\r\n  component: List,\r\n  title: 'Pages/List',\r\n  args: {}\r\n}\r\n\r\nconst Template: Story = (args) => <List {...args} />\r\n\r\nexport const Default = Template.bind({})\r\n",
      "locationsMap": {
        "default": {
          "startLoc": {
            "col": 24,
            "line": 11
          },
          "endLoc": {
            "col": 52,
            "line": 11
          },
          "startBody": {
            "col": 24,
            "line": 11
          },
          "endBody": {
            "col": 52,
            "line": 11
          }
        }
      }
    }
  },
  component: List,
  title: "Pages/List",
  args: {}
};
const Template = /* @__PURE__ */ __name((args) => /* @__PURE__ */ jsx(List, {
  ...args
}), "Template");
const Default = Template.bind({});
const __namedExportsOrder = ["Default"];
export {
  Default,
  __namedExportsOrder,
  List_stories as default
};
